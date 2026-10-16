import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.71.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.71.0.

- Added paid tier-based automation triggers and a way to move social web followers out of Ghost.
- Fixed self-hosted Portal, Search and Comments failing to load, and unreadable newsletter text in Proton Mail dark mode.
- Fixed republishing emailed posts after their newsletter was archived, hidden AM/PM in the post scheduler, and callout emoji pickers in email editors.
- Improved long tag and author names in post settings and fixed stale tag search results in post filters.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.71.0)`,
    es_ES: `Actualiza Ghost a 6.71.0.

- Añade activadores de automatización basados en niveles de pago y una forma de trasladar los seguidores de la web social fuera de Ghost.
- Corrige los fallos de carga de Portal, Search y Comments autoalojados y el texto ilegible de los boletines en el modo oscuro de Proton Mail.
- Corrige la republicación de entradas enviadas por correo tras archivar su boletín, la indicación AM/PM oculta en el programador de publicaciones y los selectores de emojis de los recuadros en los editores de correo.
- Mejora la visualización de nombres largos de etiquetas y autores en los ajustes de publicaciones y corrige los resultados obsoletos de búsqueda de etiquetas en los filtros.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.71.0)`,
    de_DE: `Aktualisiert Ghost auf 6.71.0.

- Fügt Automatisierungsauslöser für kostenpflichtige Mitgliedschaftsstufen und eine Möglichkeit hinzu, Social-Web-Follower aus Ghost umzuziehen.
- Behebt Ladefehler bei selbst gehostetem Portal, Search und Comments sowie unlesbaren Newsletter-Text im Dunkelmodus von Proton Mail.
- Behebt die erneute Veröffentlichung per E-Mail versendeter Beiträge nach der Archivierung ihres Newsletters, ausgeblendete AM/PM-Angaben im Beitragsplaner und die Emoji-Auswahl für Hinweisblöcke in E-Mail-Editoren.
- Verbessert die Anzeige langer Tag- und Autorennamen in den Beitragseinstellungen und behebt veraltete Tag-Suchergebnisse in Beitragsfiltern.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.71.0)`,
    pl_PL: `Aktualizuje Ghost do 6.71.0.

- Dodaje wyzwalacze automatyzacji oparte na płatnych poziomach subskrypcji oraz możliwość przeniesienia obserwujących z sieci społecznościowej poza Ghost.
- Naprawia ładowanie samodzielnie hostowanych Portal, Search i Comments oraz nieczytelny tekst newslettera w trybie ciemnym Proton Mail.
- Naprawia ponowne publikowanie wpisów wysłanych e-mailem po zarchiwizowaniu ich newslettera, ukryte oznaczenia AM/PM w harmonogramie publikacji oraz selektory emoji w blokach wyróżnienia w edytorach e-mail.
- Poprawia wyświetlanie długich nazw tagów i autorów w ustawieniach wpisów oraz naprawia nieaktualne wyniki wyszukiwania tagów w filtrach wpisów.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.71.0)`,
    fr_FR: `Met à jour Ghost vers 6.71.0.

- Ajoute des déclencheurs d'automatisation basés sur les paliers payants et un moyen de transférer les abonnés du web social hors de Ghost.
- Corrige les échecs de chargement de Portal, Search et Comments auto-hébergés ainsi que le texte illisible des newsletters dans le mode sombre de Proton Mail.
- Corrige la republication d'articles envoyés par e-mail après l'archivage de leur newsletter, les indications AM/PM masquées dans le planificateur de publication et les sélecteurs d'emojis des encadrés dans les éditeurs d'e-mails.
- Améliore l'affichage des noms longs d'étiquettes et d'auteurs dans les réglages des articles et corrige les résultats obsolètes de recherche d'étiquettes dans les filtres d'articles.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.71.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
