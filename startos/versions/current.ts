import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.70.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.70.0.

- Released the React editor and billing screens, redesigned the Settings sidebar, and added navigation URL suggestions and Settings shortcuts in Admin search.
- Improved newsletter sending progress and fixed sends failing when default recipients include a tier.
- Fixed the image editor failing to load from local storage, intermittent errors on posts with feature image captions, and Admin saves hanging while offline.
- Updated start-sdk to 3.0.6, including a fix for overlapping daemons when restarting during startup.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.70.0)`,
    es_ES: `Actualiza Ghost a 6.70.0.

- Publica el editor y las pantallas de facturación en React, rediseña la barra lateral de Ajustes y añade sugerencias de URL de navegación y accesos directos a Ajustes en la búsqueda de Admin.
- Mejora el progreso del envío de boletines y corrige los envíos fallidos cuando los destinatarios predeterminados incluyen un nivel.
- Corrige el fallo de carga del editor de imágenes desde el almacenamiento local, los errores intermitentes en publicaciones con leyendas de imágenes destacadas y los guardados de Admin que quedaban bloqueados sin conexión.
- Actualiza start-sdk a 3.0.6, incluida una corrección de la superposición de procesos al reiniciar durante el arranque.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.70.0)`,
    de_DE: `Aktualisiert Ghost auf 6.70.0.

- Veröffentlicht den React-Editor und die Abrechnungsansichten, gestaltet die Einstellungsseitenleiste neu und fügt Vorschläge für Navigations-URLs sowie Einstellungsverknüpfungen in der Admin-Suche hinzu.
- Verbessert die Fortschrittsanzeige beim Newsletter-Versand und behebt fehlgeschlagene Sendungen, wenn die Standardempfänger eine Mitgliedschaftsstufe enthalten.
- Behebt Ladefehler des Bildeditors bei lokalem Speicher, sporadische Fehler bei Beiträgen mit Bildunterschriften für Beitragsbilder und hängende Speichervorgänge im Admin-Bereich ohne Netzwerkverbindung.
- Aktualisiert start-sdk auf 3.0.6, einschließlich einer Korrektur für überlappende Daemons bei einem Neustart während des Starts.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.70.0)`,
    pl_PL: `Aktualizuje Ghost do 6.70.0.

- Udostępnia edytor i ekrany rozliczeń w React, zmienia wygląd panelu bocznego ustawień oraz dodaje podpowiedzi adresów URL nawigacji i skróty do ustawień w wyszukiwarce Admin.
- Ulepsza wyświetlanie postępu wysyłania newsletterów i naprawia nieudane wysyłki, gdy domyślni odbiorcy obejmują poziom subskrypcji.
- Naprawia ładowanie edytora obrazów z lokalnego magazynu, sporadyczne błędy wpisów z podpisami obrazów wyróżniających i zawieszanie się zapisu w Admin bez połączenia z siecią.
- Aktualizuje start-sdk do 3.0.6, w tym naprawia nakładanie się procesów przy restarcie podczas uruchamiania.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.70.0)`,
    fr_FR: `Met à jour Ghost vers 6.70.0.

- Publie l'éditeur et les écrans de facturation React, renouvelle la barre latérale des réglages et ajoute des suggestions d'URL de navigation et des raccourcis de réglages dans la recherche Admin.
- Améliore l'affichage de la progression des envois de newsletters et corrige les échecs lorsque les destinataires par défaut incluent un palier.
- Corrige le chargement de l'éditeur d'images depuis le stockage local, les erreurs intermittentes des articles avec des légendes d'images à la une et les enregistrements Admin bloqués hors connexion.
- Met à jour start-sdk vers 3.0.6, avec un correctif des démons qui se chevauchent lors d'un redémarrage pendant le démarrage.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.70.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
