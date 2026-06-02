import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.43.1:0',
  releaseNotes: {
    en_US: 'Bumps Ghost → 6.43.1.',
    es_ES: 'Actualiza Ghost → 6.43.1.',
    de_DE: 'Aktualisiert Ghost → 6.43.1.',
    pl_PL: 'Aktualizuje Ghost → 6.43.1.',
    fr_FR: 'Met à jour Ghost → 6.43.1.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
