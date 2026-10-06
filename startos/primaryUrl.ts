import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { primaryInterfaceId, uiMultiHostId } from './utils'

export const primaryUrl = sdk.setupPrimaryUrl({
  id: 'set-primary-url',
  hostId: uiMultiHostId,
  interfaceId: primaryInterfaceId,
  metadata: {
    name: i18n('Set Primary Url'),
    description: i18n(
      'Choose which of your Ghost URLs should serve as the primary URL for the purposes of creating links, sending invites, etc.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
  field: { name: i18n('URL'), description: null },
  get: storeJson.read((s) => s.env.url),
  set: (effects, url) => storeJson.merge(effects, { env: { url } }),
  fallback: false,
})
