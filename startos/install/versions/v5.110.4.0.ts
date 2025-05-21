import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { getPrimaryInterfaceUrls } from '../../utils'
import { readFile, rm } from 'fs/promises'
import { load } from 'js-yaml'
import { store } from '../../fileModels/store.json'

export const v_5_110_4_0 = VersionInfo.of({
  version: '5.110.4:0',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {
      // get old stats.yaml
      const statsFile = load(
        await readFile('/var/lib/ghost/content/start9/stats.yaml', 'utf-8'),
      ) as { data: { MariaDB: { value: string } } }

      // get old config.yaml
      const configFile = load(
        await readFile('/root/start9/config.yaml', 'utf-8'),
      ) as { useTinfoil: boolean } | undefined

      const urls = await getPrimaryInterfaceUrls(effects)

      await store.write(effects, {
        url: urls.find((u) => u.startsWith('http:') && u.includes('.onion'))!,
        privacy__useTinfoil: !!configFile?.useTinfoil,
        database__connection__password: statsFile.data.MariaDB.value,
      })

      // remove old start9 dir
      await rm('/data/start9', { recursive: true }).catch(console.error)
    },
    down: IMPOSSIBLE,
  },
})
