import { sdk } from './sdk'
import { exposedStore } from './store'
import { setDependencies } from './dependencies'
import { setInterfaces } from './interfaces'
import { versions } from './versions'
import { actions } from './actions'
import { setPrimaryUrl } from './actions/set-primary-url'

// **** Install ****
const install = sdk.setupInstall(async ({ effects }) => {
  await sdk.store.setOwn(effects, sdk.StorePath, {
    tinfoilEnabled: false,
    primaryUrl: null,
  })

  await sdk.action.requestOwn(effects, setPrimaryUrl, 'critical')
})

// **** Uninstall ****
const uninstall = sdk.setupUninstall(async ({ effects }) => {})

/**
 * Plumbing. DO NOT EDIT.
 */
export const { packageInit, packageUninit, containerInit } = sdk.setupInit(
  versions,
  install,
  uninstall,
  setInterfaces,
  setDependencies,
  actions,
  exposedStore,
)
