import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, boolean } = matches

const shape = object({
  env: object({
    url: string,
    database__connection__password: string,
    privacy__useTinfoil: boolean,
  }),
  smtp: sdk.inputSpecConstants.smtpInputSpec.validator.onMismatch({
    selection: 'disabled',
    value: {},
  }),
})

export const storeJson = FileHelper.json(
  { volumeId: 'startos', subpath: './store.json' },
  shape,
)
