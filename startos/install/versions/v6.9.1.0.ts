import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_9_1_0 = VersionInfo.of({
  version: '6.9.1:0-alpha.0',
  releaseNotes: `\
  # Update for StartOS 0.4.0
  `,
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
