import { VersionGraph } from '@start9labs/start-sdk'
import { v_6_30_0_0 } from './v6.30.0.0'
import { v_6_30_0_1 } from './v6.30.0.1'

export const versionGraph = VersionGraph.of({
  current: v_6_30_0_1,
  other: [v_6_30_0_0],
})
