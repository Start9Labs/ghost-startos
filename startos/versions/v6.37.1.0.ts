import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_37_1_0 = VersionInfo.of({
  version: '6.37.1:0',
  releaseNotes: {
    en_US: `**Bumps**

- Ghost → 6.37.1
- MySQL → 8.4.9
- start-sdk → 1.5.0`,
    es_ES: `**Actualizaciones**

- Ghost → 6.37.1
- MySQL → 8.4.9
- start-sdk → 1.5.0`,
    de_DE: `**Versionsanhebungen**

- Ghost → 6.37.1
- MySQL → 8.4.9
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje wersji**

- Ghost → 6.37.1
- MySQL → 8.4.9
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à jour**

- Ghost → 6.37.1
- MySQL → 8.4.9
- start-sdk → 1.5.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
