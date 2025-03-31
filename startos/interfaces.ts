import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // primary
  const primaryMulti = sdk.MultiHost.of(effects, 'primary-multi')
  const primaryMultiOrigin = await primaryMulti.bindPort(uiPort, {
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
  const primaryReceipt = await primaryMultiOrigin.export([primary])

  // admin
  const adminMulti = sdk.MultiHost.of(effects, 'admin-multi')
  const adminMultiOrigin = await adminMulti.bindPort(2369, {
    protocol: 'http',
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
  const adminReceipt = await adminMultiOrigin.export([admin])

  return [primaryReceipt, adminReceipt]
})
