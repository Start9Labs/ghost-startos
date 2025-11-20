import { sdk } from './sdk'
import { uiPort } from './utils'
import { storeJson } from './fileModels/store.json'
import { T } from '@start9labs/start-sdk'

export const main = sdk.setupMain(async ({ effects, started }) => {
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
  const { url, privacy__useTinfoil, database__connection__password, smtp } =
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
    // Automatic secure flag based on port
    // Port 465: secure = true, otherwise = false
    const portNum = Number(smtpCredentials.port)
    smtpEnv = {
      SMTP_HOST: smtpCredentials.server,
      SMTP_FROM: smtpCredentials.from,
      SMTP_PORT: String(smtpCredentials.port),
      SMTP_SECURITY: portNum === 465 ? 'true' : 'false',
      SMTP_USERNAME: smtpCredentials.login,
    }
    if (smtpCredentials.password)
      smtpEnv.SMTP_PASSWORD = smtpCredentials.password
  }

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started)
    .addDaemon('db', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'mysql' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'mysql',
          subpath: null,
          mountpoint: '/data',
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
        fn: () =>
          sdk.healthCheck.checkWebUrl(
            effects,
            `http://ghost.startos:${uiPort}/ghost/api/v3/admin/site/`,
            {
              successMessage: 'Ghost web interfaces are ready',
              errorMessage: 'Ghost web interfaces are not ready',
            },
          ),
      },
      requires: ['db'],
    })
})

type SMTP_ENV = {
  SMTP_HOST: string
  SMTP_FROM: string
  SMTP_PORT: string
  SMTP_SECURITY: 'true' | 'false'
  SMTP_USERNAME: string
  SMTP_PASSWORD?: string
}
