import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.47.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.47.0.

- Added a beta of the automations feature.
- Fixed themes with custom error templates returning HTTP 500.
- Fixed paid members on other tiers receiving gated newsletter content.
- Fixed the Portal offer link spinning forever for active paid members.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.47.0`,
    es_ES: `Actualiza Ghost a 6.47.0.

- Añade una versión beta de la función de automatizaciones.
- Corrige que los temas con plantillas de error personalizadas devolvieran HTTP 500.
- Corrige que los miembros de pago de otros niveles recibieran contenido restringido de los boletines.
- Corrige que el enlace de oferta de Portal girara indefinidamente para los miembros de pago activos.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.47.0`,
    de_DE: `Aktualisiert Ghost auf 6.47.0.

- Fügt eine Beta-Version der Automatisierungsfunktion hinzu.
- Behebt, dass Themes mit benutzerdefinierten Fehlervorlagen HTTP 500 zurückgaben.
- Behebt, dass zahlende Mitglieder anderer Stufen eingeschränkte Newsletter-Inhalte erhielten.
- Behebt, dass der Portal-Angebotslink für aktive zahlende Mitglieder endlos lud.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.47.0`,
    pl_PL: `Aktualizuje Ghost do 6.47.0.

- Dodaje wersję beta funkcji automatyzacji.
- Naprawia motywy z niestandardowymi szablonami błędów zwracające HTTP 500.
- Naprawia otrzymywanie ograniczonych treści newslettera przez płacących członków z innych poziomów.
- Naprawia link oferty Portal kręcący się w nieskończoność dla aktywnych płacących członków.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.47.0`,
    fr_FR: `Met à jour Ghost vers 6.47.0.

- Ajoute une version bêta de la fonctionnalité d'automatisations.
- Corrige les thèmes avec des modèles d'erreur personnalisés renvoyant une erreur HTTP 500.
- Corrige les membres payants d'autres niveaux recevant du contenu de newsletter restreint.
- Corrige le lien d'offre Portal qui tournait indéfiniment pour les membres payants actifs.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.47.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
