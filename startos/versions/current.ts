import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.64.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.64.0.

- Updated the bundled Source theme to 1.7.5.
- Fixed navigation icons failing to save and email rendering crashes caused by malformed CSS in post content.
- Fixed members being subscribed to every newsletter after choosing none.
- Fixed missing audit log entries for staff token changes and settings imports overwriting protected core settings.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.63.0...v6.64.0`,
    es_ES: `Actualiza Ghost a 6.64.0.

- Actualiza el tema Source incluido a la versión 1.7.5.
- Corrige los iconos de navegación que no se guardaban y los fallos al renderizar correos causados por CSS incorrecto en el contenido de las publicaciones.
- Corrige la suscripción de miembros a todos los boletines tras no elegir ninguno.
- Corrige la ausencia de entradas en el registro de auditoría para los cambios de tokens del personal y la sobrescritura de ajustes principales protegidos al importar ajustes.

Notas completas de la versión: https://github.com/TryGhost/Ghost/compare/v6.63.0...v6.64.0`,
    de_DE: `Aktualisiert Ghost auf 6.64.0.

- Aktualisiert das mitgelieferte Source-Theme auf Version 1.7.5.
- Behebt, dass Navigationssymbole nicht gespeichert wurden und fehlerhaftes CSS in Beiträgen die Darstellung von E-Mails zum Absturz brachte.
- Behebt, dass Mitglieder nach der Auswahl keines Newsletters alle Newsletter abonnierten.
- Behebt fehlende Audit-Protokolleinträge für Änderungen an Mitarbeiter-Tokens und das Überschreiben geschützter Kerneinstellungen beim Import von Einstellungen.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.63.0...v6.64.0`,
    pl_PL: `Aktualizuje Ghost do 6.64.0.

- Aktualizuje dołączony motyw Source do wersji 1.7.5.
- Naprawia niezapisywanie ikon nawigacji oraz awarie renderowania wiadomości e-mail spowodowane nieprawidłowym kodem CSS w treści wpisów.
- Naprawia subskrybowanie wszystkich newsletterów przez członków, którzy nie wybrali żadnego z nich.
- Naprawia brakujące wpisy dziennika audytu dla zmian tokenów personelu oraz nadpisywanie chronionych ustawień podstawowych podczas importowania ustawień.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.63.0...v6.64.0`,
    fr_FR: `Met à jour Ghost vers 6.64.0.

- Met à jour le thème Source fourni vers la version 1.7.5.
- Corrige les icônes de navigation qui ne s'enregistraient pas et les plantages du rendu des e-mails causés par du code CSS incorrect dans le contenu des publications.
- Corrige l'abonnement des membres à toutes les newsletters après n'en avoir sélectionné aucune.
- Corrige l'absence d'entrées dans le journal d'audit pour les modifications des jetons du personnel et l'écrasement des paramètres principaux protégés lors de l'importation de paramètres.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.63.0...v6.64.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
