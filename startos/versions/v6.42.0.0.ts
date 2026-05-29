import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_42_0_0 = VersionInfo.of({
  version: '6.42.0:0',
  releaseNotes: {
    en_US: 'Bumps Ghost → 6.42.0.',
    es_ES: 'Actualiza Ghost → 6.42.0.',
    de_DE: 'Aktualisiert Ghost → 6.42.0.',
    pl_PL: 'Aktualizuje Ghost → 6.42.0.',
    fr_FR: 'Met à jour Ghost → 6.42.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
