import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, boolean } = matches

const shape = object({
  url: string,
  privacy__useTinfoil: boolean.onMismatch(true),
  database__connection__password: string,
  smtp: sdk.inputSpecConstants.smtpInputSpec.validator.onMismatch({
    selection: 'disabled',
    value: {},
  }),
})

export const storeJson = FileHelper.json(
  { volumeId: 'main', subpath: '/store.json' },
  shape,
)
