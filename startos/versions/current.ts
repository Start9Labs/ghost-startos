import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.52.1:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.52.1.

- Fixes link selection in the automations email editor.
- Updates the bundled MySQL database to 8.4.10.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.52.1`,
    es_ES: `Actualiza Ghost a 6.52.1.

- Corrige la selección de enlaces en el editor de correo de automatizaciones.
- Actualiza la base de datos MySQL incluida a 8.4.10.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.52.1`,
    de_DE: `Aktualisiert Ghost auf 6.52.1.

- Behebt die Linkauswahl im E-Mail-Editor für Automatisierungen.
- Aktualisiert die mitgelieferte MySQL-Datenbank auf 8.4.10.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.52.1`,
    pl_PL: `Aktualizuje Ghost do 6.52.1.

- Naprawia zaznaczanie linków w edytorze wiadomości e-mail automatyzacji.
- Aktualizuje dołączoną bazę danych MySQL do 8.4.10.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.52.1`,
    fr_FR: `Met à jour Ghost vers 6.52.1.

- Corrige la sélection des liens dans l'éditeur d'e-mails des automatisations.
- Met à jour la base de données MySQL incluse vers 8.4.10.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.52.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
