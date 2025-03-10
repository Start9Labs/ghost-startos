import { sdk } from '../sdk'
import { getPrimaryInterfaceUrls } from '../utils'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  primaryUrl: Value.dynamicSelect(async ({ effects }) => {
    const urls = await getPrimaryInterfaceUrls(effects)

    return {
      name: 'URL',
      values: urls.reduce(
        (obj, url) => ({
          ...obj,
          [url]: url,
        }),
        {} as Record<string, string>,
      ),
      default:
        urls.find((u) => u.startsWith('http:') && u.includes('.onion')) || '',
    }
  }),
})

export const setPrimaryUrl = sdk.Action.withInput(
  // id
  'set-primary-url',

  // metadata
  async ({ effects }) => ({
    name: 'Set Primary Url',
    description:
      'Choose which of your Ghost URLs should serve as the primary URL for the purposes of creating links, sending invites, etc.',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => ({
    primaryUrl:
      (await sdk.store.getOwn(effects, sdk.StorePath.primaryUrl).const()) ||
      undefined,
  }),

  // the execution function
  async ({ effects, input }) =>
    sdk.store.setOwn(effects, sdk.StorePath.primaryUrl, input.primaryUrl),
)
