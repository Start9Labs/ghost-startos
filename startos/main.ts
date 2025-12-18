import { sdk } from './sdk'
import { port } from './utils'
import { storeJson } from './fileModels/store.json'
import { T } from '@start9labs/start-sdk'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('[i] Starting Ghost!')

  const storeVals = await storeJson.read().const(effects)
  if (!storeVals) {
    throw new Error('Store not found')
  }
  const { url, privacy__useTinfoil, smtp, database__connection__password } =
    storeVals

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

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  const daemons = sdk.Daemons.of(effects)
    .addDaemon('db', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'mysql' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'mysql',
          subpath: null,
          mountpoint: '/var/lib/mysql',
          readonly: false,
        }),
        'db-sub',
      ),
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          MYSQL_ROOT_PASSWORD: database__connection__password,
        },
      },
      ready: {
        display: null,
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, 3306, {
            successMessage: 'MySQL DB is ready',
            errorMessage: 'MySQL DB error',
          }),
      },
      requires: [],
    })

    .addDaemon('primary', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'ghost' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
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
          ...smtpEnv,
        },
      },
      ready: {
        display: 'Ghost UI',
        gracePeriod: 120000,
        fn: () =>
          sdk.healthCheck.checkWebUrl(
            effects,
            `http://127.0.0.1:${port}/ghost/api/admin/site/`,
            {
              successMessage: 'Ghost web interfaces are ready',
              errorMessage: 'Ghost web interfaces are not ready',
            },
          ),
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
