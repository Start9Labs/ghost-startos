import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { getPrimaryInterfaceUrls } from '../utils'
import { readFile, rmdir } from 'fs/promises'
import { load } from 'js-yaml'

export const v_5_110_4_0 = VersionInfo.of({
  version: '5.110.4:0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {
      // get old stats.yaml
      const statsFile = load(
        await readFile('/var/lib/ghost/content/start9/stats.yaml', 'utf-8'),
      ) as {
        data: {
          MariaDB: { value: string }
        }
      }

      // get old config.yaml
      const configFile = load(
        await readFile('/root/start9/config.yaml', 'utf-8'),
      ) as {
        useTinfoil: boolean
      }

      const urls = await getPrimaryInterfaceUrls(effects)

      // initialize the store
      await sdk.store.setOwn(effects, sdk.StorePath, {
        url: urls.find((u) => u.startsWith('http:') && u.includes('.onion'))!,
        tinfoilEnabled: configFile.useTinfoil,
        database__connection__password: statsFile.data.MariaDB.value,
      })

      // remove old start9 dir
      await rmdir('/data/start9')
    },
    down: IMPOSSIBLE,
  },
})
