import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Ghost!')

  const { url, tinfoilEnabled, database__connection__password } =
    await sdk.store.getOwn(effects, sdk.StorePath).const()

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */
  const healthReceipts: T.HealthCheck[] = []

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started, healthReceipts).addDaemon('primary', {
    subcontainer: { imageId: 'ghost' },
    command: ['docker_entrypoint.sh'],
    env: {
      URL: url!,
      TINFOIL: String(tinfoilEnabled),
      database__connection__password,
    },
    mounts: sdk.Mounts.of().addVolume(
      'main',
      null,
      '/var/lib/ghost/content',
      false,
    ),
    ready: {
      display: 'Web Interfaces',
      fn: () =>
        sdk.healthCheck.checkWebUrl(effects,
          `http://ghost.startos:${uiPort}/ghost/api/v3/admin/site/`,
        {
          successMessage: 'Ghost web interfaces are ready',
          errorMessage: 'Ghost web interfaces are not ready',
        }),
    },
    requires: [],
  })
})
