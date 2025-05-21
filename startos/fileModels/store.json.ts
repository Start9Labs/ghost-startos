import { matches, FileHelper } from '@start9labs/start-sdk'

const { object, string, boolean } = matches

const shape = object({
  url: string,
  privacy__useTinfoil: boolean.onMismatch(false),
  database__connection__password: string,
})

export const store = FileHelper.json(
  { volumeId: 'main', subpath: '/store.json' },
  shape,
)
