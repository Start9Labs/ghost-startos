import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { storeJson } from '../fileModels/store.json'

export const v_6_22_1_0_b4 = VersionInfo.of({
  version: '6.22.1:0-beta.4',
  releaseNotes: {
    en_US: 'Update Ghost to 6.22.1',
    es_ES: 'Actualización de Ghost a 6.22.1',
    de_DE: 'Aktualisierung von Ghost auf 6.22.1',
    pl_PL: 'Aktualizacja Ghost do 6.22.1',
    fr_FR: 'Mise à jour de Ghost vers 6.22.1',
  },
  migrations: {
    up: async ({ effects }) => {
      const configYaml: { useTinfoil?: boolean } | undefined = await readFile(
        '/media/startos/volumes/main/start9/config.yaml',
        'utf-8',
      ).then(YAML.parse, () => undefined)

      const statsYaml: { data?: { [key: string]: { value?: string } } } | undefined =
        await readFile(
          '/media/startos/volumes/main/start9/stats.yaml',
          'utf-8',
        ).then(YAML.parse, () => undefined)

      if (statsYaml) {
        const password = statsYaml.data?.['MariaDB root password']?.value
        if (!password) {
          throw new Error(
            'Could not recover MariaDB root password from stats.yaml',
          )
        }

        await storeJson.merge(effects, {
          env: {
            database__connection__password: password,
            privacy__useTinfoil: configYaml?.useTinfoil ?? false,
          },
        })

        await rm('/media/startos/volumes/main/start9', {
          recursive: true,
        }).catch(console.error)
      }
    },
    down: IMPOSSIBLE,
  },
})
