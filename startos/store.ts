import { setupExposeStore, utils } from '@start9labs/start-sdk'

export type Store = {
  url: string
  privacy__useTinfoil: boolean
  database__connection__password: string
}

export const initStore: Store = {
  url: '',
  privacy__useTinfoil: false,
  database__connection__password: utils.getDefaultString({
    charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
    len: 16,
  }),
}

export const exposedStore = setupExposeStore<Store>(() => [])
