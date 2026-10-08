import { i18n } from '../i18n'
import { primaryUrl } from '../primaryUrl'

export const primaryUrlTask = primaryUrl.setupTask('critical', {
  reason: i18n(
    'Select a primary URL. Ghost does not run until one of its addresses is chosen.',
  ),
})
