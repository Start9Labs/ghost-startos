import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.69.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.69.0, including the 6.68.0 and 6.69.0 releases.

**Features**

- Added member location maps, automation analytics and self-serve site exports in Ghost Admin.
- Released the React posts list and member activity screens, and improved member-import column mapping.

**Fixes**

- Fixed scheduled posts not being sent due to a race condition and the editor freezing when adding a YouTube embed.
- Fixed uploads hanging on empty API responses and Portal initialization failing with malformed theme links.

**Internal**

- Updated start-sdk to 3.0.4.

[Full upstream release notes](https://github.com/TryGhost/Ghost/compare/v6.67.0...v6.69.0)`,
    es_ES: `Actualiza Ghost a 6.69.0, incluyendo las versiones 6.68.0 y 6.69.0.

**Funciones**

- Añade mapas de ubicación de miembros, analíticas de automatizaciones y exportaciones del sitio de autoservicio en Ghost Admin.
- Publica la lista de entradas y las pantallas de actividad de miembros en React, y mejora la asignación de columnas al importar miembros.

**Correcciones**

- Corrige las entradas programadas que no se enviaban por una condición de carrera y el bloqueo del editor al añadir un vídeo de YouTube.
- Corrige las subidas que quedaban bloqueadas ante respuestas vacías de la API y los fallos de inicialización de Portal con enlaces de tema mal formados.

**Cambios internos**

- Actualiza start-sdk a 3.0.4.

[Notas completas de las versiones originales](https://github.com/TryGhost/Ghost/compare/v6.67.0...v6.69.0)`,
    de_DE: `Aktualisiert Ghost auf 6.69.0, einschließlich der Versionen 6.68.0 und 6.69.0.

**Funktionen**

- Fügt Karten der Mitgliederstandorte, Automatisierungsanalysen und selbst bedienbare Website-Exporte in Ghost Admin hinzu.
- Veröffentlicht die React-Beitragsliste und die Ansichten der Mitgliederaktivität und verbessert die Spaltenzuordnung beim Mitgliederimport.

**Fehlerbehebungen**

- Behebt nicht versendete geplante Beiträge durch eine Race Condition und das Einfrieren des Editors beim Einbetten eines YouTube-Videos.
- Behebt hängende Uploads bei leeren API-Antworten und Fehler beim Start von Portal mit fehlerhaften Theme-Links.

**Interne Änderungen**

- Aktualisiert start-sdk auf 3.0.4.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/compare/v6.67.0...v6.69.0)`,
    pl_PL: `Aktualizuje Ghost do 6.69.0, obejmując wydania 6.68.0 i 6.69.0.

**Nowe funkcje**

- Dodaje mapy lokalizacji członków, statystyki automatyzacji i samodzielne eksportowanie witryny w Ghost Admin.
- Udostępnia listę wpisów i ekrany aktywności członków w React oraz usprawnia mapowanie kolumn podczas importu członków.

**Poprawki**

- Naprawia niewysyłanie zaplanowanych wpisów z powodu wyścigu oraz zawieszanie się edytora podczas osadzania filmu z YouTube.
- Naprawia zawieszanie się przesyłania plików przy pustych odpowiedziach API oraz błędy uruchamiania Portal przy nieprawidłowych linkach motywu.

**Zmiany wewnętrzne**

- Aktualizuje start-sdk do 3.0.4.

[Pełne informacje o wydaniach upstream](https://github.com/TryGhost/Ghost/compare/v6.67.0...v6.69.0)`,
    fr_FR: `Met à jour Ghost vers 6.69.0, couvrant les versions 6.68.0 et 6.69.0.

**Fonctionnalités**

- Ajoute des cartes de localisation des membres, des statistiques d'automatisation et des exports de site en libre-service dans Ghost Admin.
- Publie la liste des articles et les écrans d'activité des membres en React et améliore la correspondance des colonnes lors de l'import de membres.

**Correctifs**

- Corrige les articles programmés non envoyés à cause d'une condition de concurrence et le blocage de l'éditeur lors de l'intégration d'une vidéo YouTube.
- Corrige les téléversements bloqués par des réponses API vides et les échecs d'initialisation de Portal avec des liens de thème mal formés.

**Modifications internes**

- Met à jour start-sdk vers 3.0.4.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/compare/v6.67.0...v6.69.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
