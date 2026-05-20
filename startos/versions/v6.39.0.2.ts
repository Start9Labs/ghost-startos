import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_6_39_0_2 = VersionInfo.of({
  version: '6.39.0:2',
  releaseNotes: {
    en_US: 'Fixes custom SMTP settings being ignored.',
    es_ES: 'Corrige que se ignorara la configuración SMTP personalizada.',
    de_DE: 'Behebt das Ignorieren benutzerdefinierter SMTP-Einstellungen.',
    pl_PL: 'Naprawia ignorowanie niestandardowych ustawień SMTP.',
    fr_FR: 'Corrige les paramètres SMTP personnalisés ignorés.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
