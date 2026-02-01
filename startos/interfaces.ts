import { i18n } from './i18n'
import { sdk } from './sdk'
import { port } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(port, {
    protocol: 'http',
    addSsl: { addXForwardedHeaders: true },
  })

  // primary
  const primary = sdk.createInterface(effects, {
    name: i18n('Primary UI'),
    id: 'primary',
    description: i18n('The primary web interface for your Ghost blog'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  // admin
  const admin = sdk.createInterface(effects, {
    name: i18n('Admin UI'),
    id: 'admin',
    description: i18n('The admin web interface'),
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
