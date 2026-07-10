import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.52.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.52.0.

- Adds tax ID collection to Stripe checkout when automatic tax is enabled.
- Refreshes the bundled Source and Casper default themes.
- Removes the discontinued Tenor GIF provider.
- Fixes mobile preview overflow, unreadable tag and author colours on light accent colours, and Top Posts failing to load when web analytics is off.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.52.0`,
    es_ES: `Actualiza Ghost a 6.52.0.

- Añade la recopilación del número de identificación fiscal en el pago de Stripe cuando el impuesto automático está activado.
- Actualiza los temas predeterminados incluidos Source y Casper.
- Elimina el proveedor de GIF Tenor, ya descontinuado.
- Corrige el desbordamiento de la vista previa móvil, los colores ilegibles de etiquetas y autores con colores de acento claros, y los Top Posts que no se cargaban cuando la analítica web está desactivada.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.52.0`,
    de_DE: `Aktualisiert Ghost auf 6.52.0.

- Fügt die Erfassung der Steuer-ID beim Stripe-Checkout hinzu, wenn die automatische Steuer aktiviert ist.
- Aktualisiert die mitgelieferten Standardthemes Source und Casper.
- Entfernt den eingestellten Tenor-GIF-Anbieter.
- Behebt den Überlauf der mobilen Vorschau, unlesbare Tag- und Autorenfarben bei hellen Akzentfarben sowie Top Posts, die bei deaktivierter Web-Analyse nicht geladen wurden.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.52.0`,
    pl_PL: `Aktualizuje Ghost do 6.52.0.

- Dodaje zbieranie numeru identyfikacji podatkowej przy płatności Stripe, gdy włączony jest automatyczny podatek.
- Odświeża dołączone domyślne motywy Source i Casper.
- Usuwa wycofanego dostawcę GIF-ów Tenor.
- Naprawia przepełnienie podglądu mobilnego, nieczytelne kolory tagów i autorów przy jasnych kolorach akcentu oraz Top Posts, które nie ładowały się przy wyłączonej analityce internetowej.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.52.0`,
    fr_FR: `Met à jour Ghost vers 6.52.0.

- Ajoute la collecte du numéro d'identification fiscale au paiement Stripe lorsque la taxe automatique est activée.
- Actualise les thèmes par défaut inclus Source et Casper.
- Supprime le fournisseur de GIF Tenor, désormais abandonné.
- Corrige le débordement de l'aperçu mobile, les couleurs illisibles des étiquettes et des auteurs avec des couleurs d'accentuation claires, et les Top Posts qui ne se chargeaient pas lorsque l'analyse web est désactivée.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.52.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
