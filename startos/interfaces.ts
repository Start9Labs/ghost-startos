import { sdk } from './sdk'
import { port } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'main')
  const uiMultiOrigin = await uiMulti.bindPort(port, {
    protocol: 'http',
    addSsl: { addXForwardedHeaders: true },
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
  const uiReceipt = await uiMultiOrigin.export([primary, admin])

  return [uiReceipt]
})
