import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_39_0_1 = VersionInfo.of({
  version: '6.39.0:1',
  releaseNotes: {
    en_US: 'Bumps Ghost → 6.39.0.',
    es_ES: 'Actualiza Ghost → 6.39.0.',
    de_DE: 'Aktualisiert Ghost → 6.39.0.',
    pl_PL: 'Aktualizuje Ghost → 6.39.0.',
    fr_FR: 'Met à jour Ghost → 6.39.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
