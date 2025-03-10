import { setupExposeStore } from '@start9labs/start-sdk'

export type Store = {
  url: string | null
  tinfoilEnabled: boolean
  database__connection__password: string
}

export const exposedStore = setupExposeStore<Store>((pathBuilder) => [])
