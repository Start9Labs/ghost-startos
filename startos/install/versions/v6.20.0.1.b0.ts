import { VersionInfo } from '@start9labs/start-sdk'

export const v_6_20_0_1_b0 = VersionInfo.of({
  version: '6.20.0:1-beta.0',
  releaseNotes: {
    en_US: 'Update to Ghost v6.20.0',
    es_ES: 'Actualización a Ghost v6.20.0',
    de_DE: 'Aktualisierung auf Ghost v6.20.0',
    pl_PL: 'Aktualizacja do Ghost v6.20.0',
    fr_FR: 'Mise à jour vers Ghost v6.20.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
