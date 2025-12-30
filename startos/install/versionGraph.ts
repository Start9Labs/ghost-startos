import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { getDbPass } from '../utils'
import { storeJson } from '../fileModels/store.json'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await storeJson.write(effects, {
      env: {
        url: '',
        database__connection__password: getDbPass(),
        privacy__useTinfoil: true,
      },
      smtp: {
        selection: 'disabled',
        value: {},
      },
    })
  },
})
