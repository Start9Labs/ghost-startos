import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_6_22_1_0_b5 = VersionInfo.of({
  version: '6.22.1:0-beta.5',
  releaseNotes: {
    en_US: 'Update Ghost to 6.22.1',
    es_ES: 'Actualización de Ghost a 6.22.1',
    de_DE: 'Aktualisierung von Ghost auf 6.22.1',
    pl_PL: 'Aktualizacja Ghost do 6.22.1',
    fr_FR: 'Mise à jour de Ghost vers 6.22.1',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
