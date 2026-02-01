import { T } from '@start9labs/start-sdk'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { port } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info(i18n('Starting Ghost!'))

  const store = await storeJson.read().const(effects)
  if (!store) {
    throw new Error(i18n('store.json.env not found'))
  }
  const {
    env: { url, database__connection__password, privacy__useTinfoil },
    smtp,
  } = store

  let smtpCredentials: T.SmtpValue | null = null

  if (smtp.selection === 'system') {
    smtpCredentials = await sdk.getSystemSmtp(effects).const()
    if (smtpCredentials && smtp.value.customFrom)
      smtpCredentials.from = smtp.value.customFrom
  } else if (smtp.selection === 'custom') {
    smtpCredentials = smtp.value
  }

  let smtpEnv = {} as SMTP_ENV
  if (smtpCredentials) {
    smtpEnv = {
      mail__transport: 'SMTP',
      mail__options__host: smtpCredentials.server,
      mail__options__port: String(smtpCredentials.port),
      mail__options__auth__user: smtpCredentials.login,
      mail__from: smtpCredentials.from,
    }
    if (smtpCredentials.password) {
      smtpEnv['mail__options__auth__pass'] = smtpCredentials.password
    }
    if (smtpCredentials.port === 465) {
      smtpEnv['mail__options__secure'] = 'true'
    }
  }

  const mysqlSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'mysql' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'mysql',
      subpath: null,
      mountpoint: '/var/lib/mysql',
      readonly: false,
    }),
    'db-sub',
  )

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */

  const daemons = sdk.Daemons.of(effects)
    .addDaemon('db', {
      subcontainer: mysqlSub,
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          MYSQL_ROOT_PASSWORD: database__connection__password,
          MYSQL_DATABASE: 'ghost',
        },
      },
      ready: {
        display: null,
        fn: async () => {
          const { exitCode } = await mysqlSub.exec([
            'mysql',
            '-h',
            'localhost',
            '-u',
            'root',
            `-p${database__connection__password}`,
            '-e',
            'SELECT 1',
          ])

          return {
            result: exitCode === 0 ? 'success' : 'failure',
            message: null,
          }
        },
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'ghost' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'content',
          subpath: null,
          mountpoint: '/var/lib/ghost/content',
          readonly: false,
        }),
        'ghost-sub',
      ),
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          NODE_ENV: 'production',
          url,
          database__client: 'mysql',
          database__connection__host: 'localhost',
          database__connection__password,
          database__connection__database: 'ghost',
          privacy__useTinfoil: String(privacy__useTinfoil),
          privacy__useUpdateCheck: 'false',
          security__staffDeviceVerification: 'false',
          referrerPolicy: 'no-referrer',
          ...smtpEnv,
        },
      },
      ready: {
        display: i18n('Ghost UI'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, port, {
            successMessage: i18n('The web UI is ready'),
            errorMessage: i18n('The web UI is not ready'),
          }),
      },
      requires: ['db'],
    })
    .addHealthCheck('database-init', {
      ready: {
        display: i18n('Ghost Database'),
        fn: async () => {
          const res = await mysqlSub.exec([
            'mysql',
            '-u',
            'root',
            `-p${database__connection__password}`,
            'ghost',
            '-e',
            "SELECT 1 FROM settings WHERE `key` = 'db_hash' LIMIT 1;",
            '--silent',
            '--skip-column-names',
          ])

          const stdout = (res.stdout as string).trim()
          const stderr = (res.stderr as string).toLowerCase()

          // Still initializing - these are expected during startup
          const initializing =
            stderr.includes("can't connect") ||
            stderr.includes('connection refused') ||
            stderr.includes('unknown database') ||
            stderr.includes("doesn't exist") || // table doesn't exist yet
            stdout === '' // table exists but no rows yet

          if (stdout === '1') {
            return {
              result: 'success',
              message: i18n('The database is ready'),
            }
          } else if (initializing) {
            return {
              result: 'loading',
              message: i18n('Database initializing. This can take a while...'),
            }
          } else {
            return {
              result: 'failure',
              message: i18n('The database is not ready'),
            }
          }
        },
      },
      requires: ['db'],
    })

  return daemons
})

type SMTP_ENV = {
  mail__transport?: string
  mail__options__host?: string
  mail__options__port?: string
  mail__options__auth__user?: string
  mail__options__auth__pass?: string
  mail__options__secure?: string
  mail__from?: string
}
