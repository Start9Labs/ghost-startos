import { sdk } from './sdk'
import { uiPort } from './utils'
import { storeJson } from './fileModels/store.json'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Ghost!')

  const storeVals = await storeJson.read().const(effects)
  if (!storeVals) {
    throw new Error('Store not found')
  }
  const { url, privacy__useTinfoil, database__connection__password } = storeVals

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started).addDaemon('primary', {
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
      command: ['docker_entrypoint.sh'],
      env: {
        URL: url,
        TINFOIL: String(privacy__useTinfoil),
        DB_PASS: database__connection__password,
      },
    },
    ready: {
      display: 'Web Interfaces',
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
    requires: [],
  })
})
