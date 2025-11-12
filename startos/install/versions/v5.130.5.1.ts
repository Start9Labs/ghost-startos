import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_5_130_5_1 = VersionInfo.of({
  version: '5.130.5:1-alpha.1',
  releaseNotes: `\
  # Update for StartOS 0.4.0
  
### Dependency Updates
* Updated SDK to beta.43
* Updated interface name for backwards compatibility
* Updated dev dependencies to latest versions

### Updated Ghost code to the latest upstream 5.x version.
  `,
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
