import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const resetPassword = sdk.Action.withoutInput(
  'reset-password',

  {
    name: i18n('Reset Owner Password'),
    description: i18n(
      'Generate a new password for the site owner account. Other staff accounts are not affected.',
    ),
    warning: null,
    allowedStatuses: 'only-running',
    group: null,
    visibility: 'enabled',
  },

  async ({ effects }) => {
    const newPassword = utils.getDefaultString({
      charset: 'a-z,A-Z,1-9',
      len: 22,
    })

    const dbPassword = await storeJson
      .read((s) => s.env.database__connection__password)
      .once()

    // Hash the password using bcryptjs in the Ghost container
    let hash = ''
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'ghost' },
      sdk.Mounts.of(),
      'hash-password',
      async (sub) => {
        const result = await sub.execFail(
          [
            'node',
            '-e',
            `console.log(require('bcryptjs').hashSync(${JSON.stringify(newPassword)}, 10))`,
          ],
          { cwd: '/var/lib/ghost/current' },
        )
        hash = (result.stdout as string).trim()
      },
    )

    // Update the owner's password in MySQL
    const escapedHash = hash.replace(/'/g, "''")
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'mysql' },
      sdk.Mounts.of(),
      'update-password',
      async (sub) => {
        await sub.execFail([
          'mysql',
          '-h',
          '127.0.0.1',
          '-u',
          'root',
          `-p${dbPassword}`,
          'ghost',
          '-e',
          `UPDATE users u JOIN roles_users ru ON u.id = ru.user_id JOIN roles r ON ru.role_id = r.id SET u.password = '${escapedHash}', u.status = 'active' WHERE r.name = 'Owner';`,
        ])
      },
    )

    return {
      version: '1',
      title: i18n('Password Reset'),
      message: i18n(
        'The owner password has been reset. Use the new password below to log in.',
      ),
      result: {
        type: 'single' as const,
        value: newPassword,
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
