import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { MYSQL_DATADIR } from '../utils'

export const current = VersionInfo.of({
  version: '6.77.0:1',
  releaseNotes: {
    en_US:
      'Restoring Ghost from a backup now brings it back up. A Ghost that a restore left stuck on starting is fixed by updating to this version.',
    es_ES:
      'Restaurar Ghost desde una copia de seguridad ahora lo vuelve a poner en marcha. Si una restauración dejó Ghost atascado al iniciar, actualizar a esta versión lo soluciona.',
    de_DE:
      'Ghost startet nach der Wiederherstellung aus einem Backup jetzt wieder. Ein Ghost, der nach einer Wiederherstellung beim Starten hängen geblieben ist, wird durch das Update auf diese Version behoben.',
    pl_PL:
      'Przywrócenie Ghosta z kopii zapasowej ponownie go uruchamia. Jeśli po przywróceniu Ghost utknął na uruchamianiu, aktualizacja do tej wersji to naprawia.',
    fr_FR:
      'La restauration de Ghost depuis une sauvegarde le remet désormais en marche. Un Ghost resté bloqué au démarrage après une restauration est réparé par la mise à jour vers cette version.',
  },
  migrations: {
    // A restored dump backup left only root@localhost, which Ghost cannot reach over TCP.
    up: async ({ effects }) => {
      const password = await storeJson
        .read((s) => s.env.database__connection__password)
        .once()
      if (!password) return
      const sub = sdk.SubContainer.of(
        effects,
        { imageId: 'mysql' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'mysql',
          subpath: null,
          mountpoint: MYSQL_DATADIR,
          readonly: false,
        }),
        'repair-root',
      )
      const sqlPassword = `'${password.replace(/\\/g, '\\\\').replace(/'/g, "''")}'`
      await sdk.Daemons.of(effects)
        .addDaemon('mysql', {
          subcontainer: sub,
          exec: {
            command: sdk.useEntrypoint(['--bind-address=127.0.0.1']),
            env: { MYSQL_ROOT_PASSWORD: password, MYSQL_DATABASE: 'ghost' },
          },
          ready: {
            display: null,
            fn: async () => {
              const { exitCode } = await sub.exec(
                ['mysql', '-u', 'root', '-e', 'SELECT 1'],
                { env: { MYSQL_PWD: password } },
              )
              return exitCode === 0
                ? { result: 'success' as const, message: null }
                : { result: 'starting' as const, message: null }
            },
          },
          requires: [],
        })
        .addOneshot('root-tcp', {
          subcontainer: sub,
          exec: {
            command: [
              'mysql',
              '-u',
              'root',
              '-e',
              `CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY ${sqlPassword}; GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;`,
            ],
            env: { MYSQL_PWD: password },
          },
          requires: ['mysql'],
        })
        .runUntilSuccess(300_000)
    },
    down: IMPOSSIBLE,
  },
})
