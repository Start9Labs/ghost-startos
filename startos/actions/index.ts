import { sdk } from '../sdk'
import { setPrimaryUrl } from './setPrimaryUrl'
import { setTinfoil } from './setTinfoil'
import { manageSmtp } from './manageSmtp'
import { resetPassword } from './resetPassword'

export const actions = sdk.Actions.of()
  .addAction(setPrimaryUrl)
  .addAction(setTinfoil)
  .addAction(manageSmtp)
  .addAction(resetPassword)
