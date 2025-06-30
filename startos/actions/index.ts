import { sdk } from '../sdk'
import { setPrimaryUrl } from './setPrimaryUrl'
import { setTinfoil } from './setTinfoil'
import { manageSmtp } from './manageSmtp'

export const actions = sdk.Actions.of()
  .addAction(setPrimaryUrl)
  .addAction(setTinfoil)
  .addAction(manageSmtp)
