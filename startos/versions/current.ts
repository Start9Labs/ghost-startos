import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.65.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.65.0.

- Updated the bundled Source and Casper themes.
- Improved responsiveness while rebuilding sitemaps and reduced sitemap memory use on sites with many posts.
- Fixed comments on gated posts being hidden from readers who have access.
- Fixed mobile analytics layouts and paid conversion counts.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.64.0...v6.65.0`,
    es_ES: `Actualiza Ghost a 6.65.0.

- Actualiza los temas Source y Casper incluidos.
- Mejora la capacidad de respuesta durante la reconstrucción de los mapas del sitio y reduce su uso de memoria en sitios con muchas publicaciones.
- Corrige los comentarios de publicaciones restringidas que se ocultaban a lectores con acceso.
- Corrige los diseños de analíticas en dispositivos móviles y el recuento de conversiones de pago.

Notas completas de la versión: https://github.com/TryGhost/Ghost/compare/v6.64.0...v6.65.0`,
    de_DE: `Aktualisiert Ghost auf 6.65.0.

- Aktualisiert die mitgelieferten Themes Source und Casper.
- Verbessert die Reaktionsfähigkeit beim Neuaufbau von Sitemaps und reduziert deren Speicherverbrauch auf Websites mit vielen Beiträgen.
- Behebt, dass Kommentare zu zugriffsbeschränkten Beiträgen für Leser mit Zugriff ausgeblendet wurden.
- Behebt Analytics-Layouts auf Mobilgeräten und die Zählung zahlender Konversionen.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.64.0...v6.65.0`,
    pl_PL: `Aktualizuje Ghost do 6.65.0.

- Aktualizuje dołączone motywy Source i Casper.
- Poprawia responsywność podczas przebudowy map witryny i zmniejsza zużycie pamięci przez mapy w witrynach z wieloma wpisami.
- Naprawia ukrywanie komentarzy do wpisów z ograniczonym dostępem przed czytelnikami, którzy mają dostęp.
- Naprawia układ analityki na urządzeniach mobilnych i zliczanie płatnych konwersji.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.64.0...v6.65.0`,
    fr_FR: `Met à jour Ghost vers 6.65.0.

- Met à jour les thèmes Source et Casper fournis.
- Améliore la réactivité lors de la reconstruction des plans de site et réduit leur utilisation de mémoire sur les sites comportant de nombreuses publications.
- Corrige les commentaires des publications à accès restreint masqués aux lecteurs autorisés.
- Corrige la mise en page des analyses sur mobile et le comptage des conversions payantes.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.64.0...v6.65.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
