import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z
  .object({
    env: z.object({
      url: z.string().catch(''),
      database__connection__password: z.string(),
      privacy__useTinfoil: z.boolean().catch(true),
    }),
    smtp: z
      .object({
        selection: z.enum(['disabled', 'system', 'custom']),
        value: z.record(z.string(), z.any()),
      })
      .catch({ selection: 'disabled' as const, value: {} }),
  })
  .strip()

export const storeJson = FileHelper.json(
  { base: sdk.volumes.startos, subpath: './store.json' },
  shape,
)
