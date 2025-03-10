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

  const store = await sdk.store.getOwn(effects, sdk.StorePath).const()

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */
  const healthReceipts: T.HealthReceipt[] = []

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
      URL: store.primaryUrl!,
      TINFOIL: String(store.tinfoilEnabled),
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
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'Ghost web interfaces are ready',
          errorMessage: 'Ghost web interfaces are not ready',
        }),
    },
    requires: [],
  })
})
