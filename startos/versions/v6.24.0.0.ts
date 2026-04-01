import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_6_24_0_0 = VersionInfo.of({
  version: '6.24.0:0',
  releaseNotes: {
    en_US: 'Update Ghost to 6.24.0',
    es_ES: 'Actualización de Ghost a 6.24.0',
    de_DE: 'Aktualisierung von Ghost auf 6.24.0',
    pl_PL: 'Aktualizacja Ghost do 6.24.0',
    fr_FR: 'Mise à jour de Ghost vers 6.22.1',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
