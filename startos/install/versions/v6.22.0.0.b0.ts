import { VersionInfo } from '@start9labs/start-sdk'

export const v_6_22_0_0_b0 = VersionInfo.of({
  version: '6.22.0:0-beta.0',
  releaseNotes: {
    en_US: 'Update Ghost to 6.22.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
