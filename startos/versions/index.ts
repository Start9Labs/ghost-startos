import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_6_77_0_1 } from './v6.77.0_1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_6_77_0_1],
})
