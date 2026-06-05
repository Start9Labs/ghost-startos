import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.44.0:0',
  releaseNotes: {
    en_US: 'Bumps Ghost → 6.44.0.',
    es_ES: 'Actualiza Ghost → 6.44.0.',
    de_DE: 'Aktualisiert Ghost → 6.44.0.',
    pl_PL: 'Aktualizuje Ghost → 6.44.0.',
    fr_FR: 'Met à jour Ghost → 6.44.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
