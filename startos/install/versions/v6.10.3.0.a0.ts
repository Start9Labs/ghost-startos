import { VersionInfo, IMPOSSIBLE, YAML } from '@start9labs/start-sdk'
import { readFile } from 'fs/promises'

export const v_6_10_3_0_a0 = VersionInfo.of({
  version: '6.10.3:0-alpha.0',
  releaseNotes: 'Fresh package for StartOS 0.4.0',
  migrations: {
    up: IMPOSSIBLE,
    down: IMPOSSIBLE,
  },
})
