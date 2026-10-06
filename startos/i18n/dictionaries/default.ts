export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting Ghost!': 0,
  'store.json.env not found': 1,
  'Ghost Server': 2,
  'Ghost is ready': 3,
  'Ghost encountered an error': 4,
  'Ghost Database': 5,
  'The database is ready': 6,
  'Initializing fresh database. This can take a while...': 7,
  'Initializing database...': 8,
  'Primary UI': 9,
  'The primary web interface for your Ghost blog': 10,
  'Admin UI': 11,
  'The admin web interface': 12,
  'Configure SMTP': 13,
  'Add SMTP credentials so Ghost can send account-related emails. Members and subscribers can log in only once SMTP is configured.': 14,
  URL: 15,
  'Set Primary Url': 16,
  'Choose which of your Ghost URLs should serve as the primary URL for the purposes of creating links, sending invites, etc.': 17,
  'Disable Tinfoil Mode': 18,
  'Enable Tinfoil Mode': 19,
  'Enabling tinfoil mode protects your privacy by disabling built-in features of Ghost that could expose your IP address, such as Gravatars, update checks, RPC pinging, structured data, and third party integrations. Note: this may also prevent certain parts of the UI from rendering properly.': 20,
  'Select a primary URL. Ghost does not run until one of its addresses is chosen.': 21,
  'Initializing fresh schema. This can take a while...': 22,
  'Reset Owner Password': 23,
  'Generate a new password for the site owner account. Other staff accounts are not affected.': 24,
  'Password Reset': 25,
  'The owner password has been reset. Use the new password below to log in.': 26,
  'Admin Portal': 27,
  'Login will only succeed at ${url}/ghost. Use the "Set Primary URL" Action to select a different URL.': 28,
  'Member/Subscriber Login': 29,
  'SMTP configured, members/subscribers can log in': 30,
  'SMTP required for member/subscriber login. Use the SMTP action to enable.': 31,
  'If Ghost is running, it restarts with tinfoil mode on. Some parts of its UI may stop rendering properly.': 32,
  'If Ghost is running, it restarts with tinfoil mode off, turning back on the built-in features that can expose your IP address.': 33,
  "Replaces the site owner's password. The current password stops working, and the new one is shown only once.": 34,
  'Ghost cannot start without a primary URL. Run the Set Primary Url action, then start the service.': 35,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
