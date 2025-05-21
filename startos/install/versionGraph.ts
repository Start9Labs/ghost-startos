import { utils, VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { store } from '../fileModels/store.json'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await store.write(effects, {
      url: '',
      database__connection__password: utils.getDefaultString({
        charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
        len: 16,
      }),
      privacy__useTinfoil: true,
    })
  },
})
