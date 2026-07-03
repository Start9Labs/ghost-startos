import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.50.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.50.0.

- Added publisher gift links.
- Added a configurable admin session max age.
- Added a system appearance (light/dark) mode to Ghost Admin.
- Fixed a stored XSS vulnerability in JSON-LD structured data output.
- Improved analytics and dark mode across the admin.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.50.0`,
    es_ES: `Actualiza Ghost a 6.50.0.

- Añade enlaces de regalo para editores.
- Añade una antigüedad máxima configurable para la sesión de administración.
- Añade un modo de apariencia del sistema (claro/oscuro) a la administración de Ghost.
- Corrige una vulnerabilidad de XSS almacenado en la salida de datos estructurados JSON-LD.
- Mejora las analíticas y el modo oscuro en toda la administración.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.50.0`,
    de_DE: `Aktualisiert Ghost auf 6.50.0.

- Fügt Geschenk-Links für Publisher hinzu.
- Fügt ein konfigurierbares Höchstalter für Admin-Sitzungen hinzu.
- Fügt einen Systemdarstellungsmodus (hell/dunkel) zum Ghost-Admin hinzu.
- Behebt eine Stored-XSS-Schwachstelle in der Ausgabe strukturierter JSON-LD-Daten.
- Verbessert Analysen und den Dunkelmodus im gesamten Admin.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.50.0`,
    pl_PL: `Aktualizuje Ghost do 6.50.0.

- Dodaje linki prezentowe dla wydawców.
- Dodaje konfigurowalny maksymalny czas trwania sesji administratora.
- Dodaje tryb wyglądu systemu (jasny/ciemny) do panelu administracyjnego Ghost.
- Naprawia lukę stored XSS w danych strukturalnych JSON-LD.
- Ulepsza analitykę i tryb ciemny w całym panelu administracyjnym.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.50.0`,
    fr_FR: `Met à jour Ghost vers 6.50.0.

- Ajoute des liens cadeaux pour les éditeurs.
- Ajoute une durée maximale de session d'administration configurable.
- Ajoute un mode d'apparence système (clair/sombre) à l'administration de Ghost.
- Corrige une vulnérabilité XSS stocké dans la sortie de données structurées JSON-LD.
- Améliore les analyses et le mode sombre dans toute l'administration.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.50.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
