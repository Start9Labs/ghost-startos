import { i18n } from './i18n'
import { primaryUrl } from './primaryUrl'
import { sdk } from './sdk'
import {
  adminInterfaceId,
  port,
  primaryInterfaceId,
  uiMultiHostId,
} from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, uiMultiHostId)
  const uiMultiOrigin = await uiMulti.bindPort(port, {
    protocol: 'http',
  })
  const preferredLauncherAddress = await primaryUrl.bestUsable(effects).const()

  // primary
  const primary = sdk.createInterface(effects, {
    name: i18n('Primary UI'),
    id: primaryInterfaceId,
    description: i18n('The primary web interface for your Ghost blog'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
    preferredLauncherAddress,
  })

  // admin
  const admin = sdk.createInterface(effects, {
    name: i18n('Admin UI'),
    id: adminInterfaceId,
    description: i18n('The admin web interface'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '/ghost',
    query: {},
    preferredLauncherAddress,
  })
  const uiReceipt = await uiMultiOrigin.export([primary, admin])

  return [uiReceipt]
})
