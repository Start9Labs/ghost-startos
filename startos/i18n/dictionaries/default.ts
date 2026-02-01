export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting Ghost!': 0,
  'store.json.env not found': 1,
  'Ghost UI': 2,
  'The web UI is ready': 3,
  'The web UI is not ready': 4,
  'Ghost Database': 5,
  'The database is ready': 6,
  'Database initializing. This can take a while...': 7,
  'The database is not ready': 8,
  'Primary UI': 9,
  'The primary web interface for your Ghost blog': 10,
  'Admin UI': 11,
  'The admin web interface': 12,
  'Configure SMTP': 13,
  'Add SMTP credentials for sending/receiving account-related emails.': 14,
  'URL': 15,
  'Set Primary Url': 16,
  'Choose which of your Ghost URLs should serve as the primary URL for the purposes of creating links, sending invites, etc.': 17,
  'Disable Tinfoil Mode': 18,
  'Enable Tinfoil Mode': 19,
  'Enabling tinfoil mode protects your privacy by disabling built-in features of Ghost that could expose your IP address, such as Gravatars, update checks, RPC pinging, structured data, and third party integrations. Note: this may also prevent certain parts of the UI from rendering properly.': 20,
  'Ghost requires a primary URL for the purpose of creating links, sending invites, etc.': 21,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
