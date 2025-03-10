import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })
  const primary = sdk.createInterface(effects, {
    name: 'Primary UI',
    id: 'primary',
    description: 'The primary web interface for your Ghost blog',
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    search: {},
  })

  const admin = sdk.createInterface(effects, {
    name: 'Admin UI',
    id: 'admin',
    description: 'The admin web interface',
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '/ghost',
    search: {},
  })

  const uiReceipt = await uiMultiOrigin.export([primary, admin])

  return [uiReceipt]
})
