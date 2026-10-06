export const port = 2368
export const MYSQL_DATADIR = '/var/lib/mysql' as const

// Host id (the `sdk.MultiHost.of` group) carrying both the primary and admin UI
// interfaces — distinct from the interface ids exported on it.
export const uiMultiHostId = 'ui-multi'
export const primaryInterfaceId = 'primary'
export const adminInterfaceId = 'admin'
