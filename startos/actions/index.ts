import { sdk } from '../sdk'
import { setPrimaryUrl } from './set-primary-url'
import { setTinfoil } from './setTinfoil'

export const actions = sdk.Actions.of()
  .addAction(setPrimaryUrl)
  .addAction(setTinfoil)
