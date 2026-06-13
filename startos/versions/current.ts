import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.45.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.45.0.

- Added IndexNow to notify search engines of content changes.
- Updated the Source and Casper themes.
- Numerous bug fixes across comments, members, the editor, and Portal.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.45.0`,
    es_ES: `Actualiza Ghost a 6.45.0.

- Añade IndexNow para notificar a los motores de búsqueda los cambios de contenido.
- Actualiza los temas Source y Casper.
- Numerosas correcciones en comentarios, miembros, el editor y Portal.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.45.0`,
    de_DE: `Aktualisiert Ghost auf 6.45.0.

- Fügt IndexNow hinzu, um Suchmaschinen über Inhaltsänderungen zu informieren.
- Aktualisiert die Themes Source und Casper.
- Zahlreiche Fehlerbehebungen bei Kommentaren, Mitgliedern, dem Editor und Portal.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.45.0`,
    pl_PL: `Aktualizuje Ghost do 6.45.0.

- Dodaje IndexNow, aby powiadamiać wyszukiwarki o zmianach treści.
- Aktualizuje motywy Source i Casper.
- Liczne poprawki błędów w komentarzach, członkach, edytorze i Portalu.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.45.0`,
    fr_FR: `Met à jour Ghost vers 6.45.0.

- Ajoute IndexNow pour informer les moteurs de recherche des changements de contenu.
- Met à jour les thèmes Source et Casper.
- Nombreuses corrections de bugs dans les commentaires, les membres, l'éditeur et Portal.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.45.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
