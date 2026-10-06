import { sdk } from '../sdk'
import { primaryUrl } from '../primaryUrl'
import { setTinfoil } from './setTinfoil'
import { manageSmtp } from './manageSmtp'
import { resetPassword } from './resetPassword'

export const actions = sdk.Actions.of()
  .addAction(primaryUrl.action)
  .addAction(setTinfoil)
  .addAction(manageSmtp)
  .addAction(resetPassword)
