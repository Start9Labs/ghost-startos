import { setupExposeStore } from '@start9labs/start-sdk'

export type Store = {
  primaryUrl: string | null
  tinfoilEnabled: boolean
}

export const exposedStore = setupExposeStore<Store>((pathBuilder) => [])
