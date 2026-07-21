import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const port = 2368
export const MYSQL_DATADIR = '/var/lib/mysql' as const

// Host id (the `sdk.MultiHost.of` group) carrying both the primary and admin UI
// interfaces — distinct from the interface ids exported on it.
export const uiMultiHostId = 'ui-multi'
export const primaryInterfaceId = 'primary'
export const adminInterfaceId = 'admin'

export function getNonLocalUrls(effects: T.Effects): Promise<string[]> {
  return sdk.host
    .getOwn(effects, uiMultiHostId, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === primaryInterfaceId)
      return iface ? iface.addressInfo.nonLocal.format() : []
    })
    .const()
}
