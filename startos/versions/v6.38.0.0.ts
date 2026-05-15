import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_38_0_0 = VersionInfo.of({
  version: '6.38.0:0',
  releaseNotes: {
    en_US: `**Bumps**

- Ghost → 6.38.0
- MySQL → 8.4.9
- start-sdk → 1.5.1`,
    es_ES: `**Actualizaciones**

- Ghost → 6.38.0
- MySQL → 8.4.9
- start-sdk → 1.5.1`,
    de_DE: `**Aktualisierungen**

- Ghost → 6.38.0
- MySQL → 8.4.9
- start-sdk → 1.5.1`,
    pl_PL: `**Aktualizacje**

- Ghost → 6.38.0
- MySQL → 8.4.9
- start-sdk → 1.5.1`,
    fr_FR: `**Mises à jour**

- Ghost → 6.38.0
- MySQL → 8.4.9
- start-sdk → 1.5.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
