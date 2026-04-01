import { storeJson } from './fileModels/store.json'
import { sdk } from './sdk'
import { MYSQL_DATADIR } from './utils'

export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.withMysqlDump({
    imageId: 'mysql',
    dbVolume: 'mysql',
    datadir: MYSQL_DATADIR,
    database: 'ghost',
    user: 'root',
    password: async () => {
      const password = await storeJson
        .read((s) => s.env?.database__connection__password)
        .once()
      if (!password) throw new Error('No database password found in store.json')
      return password
    },
    engine: 'mysql',
  })
    .addVolume('content')
    .addVolume('config')
    .addVolume('startos'),
)
