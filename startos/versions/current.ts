import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.46.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.46.0.

- Fixed disabling structured data for LLMs and AI search engines.
- Fixed importer silently dropping content by surfacing validation errors.
- Numerous fixes across members, newsletters, checkout, and the editor.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.46.0`,
    es_ES: `Actualiza Ghost a 6.46.0.

- Corrige la desactivación de los datos estructurados para LLM y buscadores con IA.
- Corrige que el importador descartara contenido en silencio, mostrando errores de validación.
- Numerosas correcciones en miembros, boletines, el pago y el editor.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.46.0`,
    de_DE: `Aktualisiert Ghost auf 6.46.0.

- Behebt das Deaktivieren strukturierter Daten für LLMs und KI-Suchmaschinen.
- Behebt das stille Verwerfen von Inhalten beim Import durch Anzeige von Validierungsfehlern.
- Zahlreiche Fehlerbehebungen bei Mitgliedern, Newslettern, dem Checkout und dem Editor.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.46.0`,
    pl_PL: `Aktualizuje Ghost do 6.46.0.

- Naprawia wyłączanie danych strukturalnych dla LLM i wyszukiwarek AI.
- Naprawia ciche pomijanie treści przez importer, pokazując błędy walidacji.
- Liczne poprawki w członkach, newsletterach, płatnościach i edytorze.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.46.0`,
    fr_FR: `Met à jour Ghost vers 6.46.0.

- Corrige la désactivation des données structurées pour les LLM et les moteurs de recherche IA.
- Corrige l'importateur qui supprimait silencieusement du contenu en affichant les erreurs de validation.
- Nombreuses corrections dans les membres, les newsletters, le paiement et l'éditeur.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.46.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
