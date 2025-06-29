import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const primaryMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const primaryMultiOrigin = await primaryMulti.bindPort(uiPort, {
    protocol: 'http',
  })

  // primary
  const primary = sdk.createInterface(effects, {
    name: 'Primary UI',
    id: 'primary',
    description: 'The primary web interface for your Ghost blog',
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  // admin
  const admin = sdk.createInterface(effects, {
    name: 'Admin UI',
    id: 'admin',
    description: 'The admin web interface',
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '/ghost',
    query: {},
  })
  const uiReceipt = await primaryMultiOrigin.export([primary, admin])

  return [uiReceipt]
})
