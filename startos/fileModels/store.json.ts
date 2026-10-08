import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.looseObject({
  env: z.looseObject({
    url: z.string().catch(''),
    database__connection__password: z.string(),
    privacy__useTinfoil: z.boolean().catch(true),
  }),
  smtp: smtpShape,
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.startos, subpath: './store.json' },
  shape,
)
