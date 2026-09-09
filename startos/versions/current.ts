import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.63.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.63.0.

- Added support for Node.js 24 and updated the bundled Source theme to 1.7.4.
- Fixed plan changes that were refused by the payment provider appearing successful to members and account preferences failing to save for some members.
- Fixed tag search results not opening the selected tag and LinkedIn company and school URLs containing underscores being rejected.
- Improved focus behavior when adding a filter.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.62.0...v6.63.0`,
    es_ES: `Actualiza Ghost a 6.63.0.

- Añade compatibilidad con Node.js 24 y actualiza el tema Source incluido a la versión 1.7.4.
- Corrige los cambios de plan rechazados por el proveedor de pagos que aparecían como realizados para los miembros y el fallo al guardar las preferencias de cuenta de algunos miembros.
- Corrige los resultados de búsqueda de etiquetas que no abrían la etiqueta seleccionada y el rechazo de las URL de empresas y centros educativos de LinkedIn que contenían guiones bajos.
- Mejora el comportamiento del foco al añadir un filtro.

Notas completas de la versión: https://github.com/TryGhost/Ghost/compare/v6.62.0...v6.63.0`,
    de_DE: `Aktualisiert Ghost auf 6.63.0.

- Fügt Unterstützung für Node.js 24 hinzu und aktualisiert das mitgelieferte Source-Theme auf Version 1.7.4.
- Behebt, dass vom Zahlungsanbieter abgelehnte Tarifwechsel Mitgliedern als erfolgreich angezeigt wurden und Kontoeinstellungen bei einigen Mitgliedern nicht gespeichert werden konnten.
- Behebt, dass Suchergebnisse für Tags den ausgewählten Tag nicht öffneten und LinkedIn-URLs von Unternehmen und Bildungseinrichtungen mit Unterstrichen abgelehnt wurden.
- Verbessert das Fokusverhalten beim Hinzufügen eines Filters.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.62.0...v6.63.0`,
    pl_PL: `Aktualizuje Ghost do 6.63.0.

- Dodaje obsługę Node.js 24 i aktualizuje dołączony motyw Source do wersji 1.7.4.
- Naprawia wyświetlanie członkom odrzuconych przez operatora płatności zmian planu jako udanych oraz błąd zapisywania preferencji konta u niektórych członków.
- Naprawia wyniki wyszukiwania tagów, które nie otwierały wybranego tagu, oraz odrzucanie adresów URL firm i szkół w serwisie LinkedIn zawierających podkreślenia.
- Usprawnia zachowanie fokusu podczas dodawania filtra.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.62.0...v6.63.0`,
    fr_FR: `Met à jour Ghost vers 6.63.0.

- Ajoute la prise en charge de Node.js 24 et met à jour le thème Source fourni vers la version 1.7.4.
- Corrige les changements d'offre refusés par le prestataire de paiement qui apparaissaient comme réussis pour les membres et l'échec de l'enregistrement des préférences de compte de certains membres.
- Corrige les résultats de recherche d'étiquettes qui n'ouvraient pas l'étiquette sélectionnée et le rejet des URL LinkedIn d'entreprises et d'établissements scolaires contenant des traits de soulignement.
- Améliore le comportement du focus lors de l'ajout d'un filtre.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.62.0...v6.63.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
