import { writeFile } from 'fs/promises'
import { sdk } from './sdk'
import { uiPort, ghostPort, getCaddyfile } from './utils'
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
    // Ghost uses double underscore format for nested config
    // Port 465: secure = true, otherwise = false
    const portNum = Number(smtpCredentials.port)
    const isSecure = portNum === 465
    smtpEnv = {
      'mail__transport': 'SMTP',
      'mail__options__host': smtpCredentials.server,
      'mail__options__port': String(smtpCredentials.port),
      'mail__options__auth__user': smtpCredentials.login,
      'mail__from': smtpCredentials.from,
    }
    if (smtpCredentials.password)
      smtpEnv['mail__options__auth__pass'] = smtpCredentials.password
    if (isSecure) {
      smtpEnv['mail__options__secure'] = 'true'
    }
  }

  /**
   * ======================== SubContainers ========================
   *
   * Create subcontainers for services that need them.
   */
  const caddySub = await sdk.SubContainer.of(
    effects,
    { imageId: 'caddy' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: 'caddy',
      mountpoint: '/data',
      readonly: false,
    }),
    'caddy-sub',
  )

  // Write Caddyfile to Caddy container's root filesystem
  // ActivityPub target: use Ghost's official ActivityPub service by default
  // This should allow Ghost's ActivityPub integration to work but it is broken!
  const activitypubTarget = 'https://ap.ghost.org'
  await writeFile(
    `${caddySub.rootfs}/Caddyfile`,
    getCaddyfile(activitypubTarget, ghostPort),
  )

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  const daemons = sdk.Daemons.of(effects, started)
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
          // ACTIVITYPUB_TARGET tells Ghost where to find the ActivityPub service
          // TODO: Check if this is passed as an environment variable
          ACTIVITYPUB_TARGET: activitypubTarget,
          ...smtpEnv,
        },
      },
      ready: {
        display: 'Ghost UI',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, ghostPort, {
            successMessage: 'Ghost web interfaces are ready',
            errorMessage: 'Ghost web interfaces are not ready',
          }),
      },
      requires: ['db'],
    })

    .addDaemon('caddy', {
      subcontainer: caddySub,
      exec: {
        command: ['caddy', 'run', '--config', '/Caddyfile'],
        env: {
          HOME: '/root',
        },
      },
      ready: {
        display: 'Caddy',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: 'Caddy is ready',
            errorMessage: 'Caddy is not ready',
          }),
      },
      // Caddy should start early so ActivityPub routes are available when Ghost initializes
      // Ghost will proxy through Caddy, so Caddy doesn't need to wait for Ghost
      requires: [],
    })

  return daemons
})

type SMTP_ENV = {
  'mail__transport'?: string
  'mail__options__host'?: string
  'mail__options__port'?: string
  'mail__options__auth__user'?: string
  'mail__options__auth__pass'?: string
  'mail__options__secure'?: string
  'mail__from'?: string
}
