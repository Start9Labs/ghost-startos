import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const port = 2368
export const MYSQL_DATADIR = '/var/lib/mysql' as const

export async function getNonLocalUrls(effects: T.Effects) {
  return sdk.serviceInterface
    .getOwn(effects, 'primary', (i) => i?.addressInfo?.nonLocal.format() || [])
    .const()
}
