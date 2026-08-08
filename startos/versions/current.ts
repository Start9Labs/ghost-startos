import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.56.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.56.0.

A small feature and bug-fix release:

- Added a specific-tier option to the editor preview.
- Fixed a 500 error when deleting posts that have threaded comments.
- Fixed Stripe checkout failing for accounts with Managed Payments enabled.
- Fixed newsletter links containing a single quote being impossible to edit, SVG favicons not rendering in bookmark cards, and header cards losing their layout when imported from HTML.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.56.0`,
    es_ES: `Actualiza Ghost a 6.56.0.

Una versión con una pequeña función y correcciones de errores:

- Añade una opción de nivel específico en la vista previa del editor.
- Corrige un error 500 al eliminar publicaciones con comentarios en hilo.
- Corrige el fallo del pago de Stripe en cuentas con Pagos Gestionados activados.
- Corrige que los enlaces de boletines con comillas simples no se pudieran editar, que los favicons SVG no se mostraran en las tarjetas de marcador y que las tarjetas de encabezado perdieran su diseño al importarse desde HTML.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.56.0`,
    de_DE: `Aktualisiert Ghost auf 6.56.0.

Eine Version mit einer kleinen Funktion und Fehlerbehebungen:

- Fügt in der Editor-Vorschau eine Option für eine bestimmte Stufe hinzu.
- Behebt einen 500-Fehler beim Löschen von Beiträgen mit verschachtelten Kommentaren.
- Behebt fehlschlagende Stripe-Zahlungen bei Konten mit aktivierten verwalteten Zahlungen.
- Behebt, dass Newsletter-Links mit einem Apostroph nicht bearbeitet werden konnten, SVG-Favicons in Lesezeichen-Karten nicht dargestellt wurden und Header-Karten beim Import aus HTML ihr Layout verloren.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.56.0`,
    pl_PL: `Aktualizuje Ghost do 6.56.0.

Wydanie z drobną nowością i poprawkami błędów:

- Dodaje opcję wyboru konkretnego poziomu w podglądzie edytora.
- Naprawia błąd 500 przy usuwaniu wpisów z komentarzami w wątkach.
- Naprawia nieudane płatności Stripe na kontach z włączonymi płatnościami zarządzanymi.
- Naprawia brak możliwości edycji linków newslettera zawierających apostrof, niewyświetlanie favicon w formacie SVG na kartach zakładek oraz utratę układu kart nagłówkowych przy imporcie z HTML.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.56.0`,
    fr_FR: `Met à jour Ghost vers 6.56.0.

Une version apportant une petite fonctionnalité et des corrections de bogues :

- Ajoute une option de palier spécifique dans l'aperçu de l'éditeur.
- Corrige une erreur 500 lors de la suppression d'articles comportant des commentaires en fil de discussion.
- Corrige l'échec du paiement Stripe pour les comptes avec les paiements gérés activés.
- Corrige les liens de newsletter contenant une apostrophe impossibles à modifier, les favicons SVG non affichés dans les cartes de signet et les cartes d'en-tête perdant leur mise en page à l'import depuis HTML.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.56.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
