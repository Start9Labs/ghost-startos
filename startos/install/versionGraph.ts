import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { storeJson } from '../fileModels/store.json'
import { getDbPass } from '../utils'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await storeJson.write(effects, {
      url: '',
      database__connection__password: getDbPass(),
      privacy__useTinfoil: true,
      smtp: { selection: 'disabled', value: {} },
    })
  },
})
