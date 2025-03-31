import { sdk } from '../sdk'

export const setTinfoil = sdk.Action.withoutInput(
  // id
  'set-tinfoil',

  // metadata
  async ({ effects }) => {
    const tinfoilEnabled = await sdk.store
      .getOwn(effects, sdk.StorePath.privacy__useTinfoil)
      .const()

    return {
      name: tinfoilEnabled ? 'Disabled Tinfoil Mode' : 'Enabled Tinfoil Mode',
      description:
        'Enabling tinfoil mode protects your privacy by disabling built-in features of Ghost that could expose your IP address, such as Gravatars, update checks, RPC pinging, structured data, and third party integrations. Note: this may also prevent certain parts of the UI from rendering properly.',
      warning: null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  // the execution function
  async ({ effects }) => {
    const tinfoilEnabled = await sdk.store
      .getOwn(effects, sdk.StorePath.privacy__useTinfoil)
      .const()

    await sdk.store.setOwn(
      effects,
      sdk.StorePath.privacy__useTinfoil,
      !tinfoilEnabled,
    )
  },
)
