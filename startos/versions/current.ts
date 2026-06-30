import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.49.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.49.0.

- Added markdown and llms.txt support for AI tooling.
- Recovered newsletter sends interrupted by container restarts.
- Fixed theme uploads freezing when folders are read-only.
- Fixed the analytics Today view showing data points in the future.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.49.0`,
    es_ES: `Actualiza Ghost a 6.49.0.

- Añade compatibilidad con markdown y llms.txt para herramientas de IA.
- Recupera los envíos de boletines interrumpidos por reinicios del contenedor.
- Corrige el bloqueo de las subidas de temas cuando las carpetas son de solo lectura.
- Corrige que la vista de Hoy de analíticas mostrara puntos de datos en el futuro.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.49.0`,
    de_DE: `Aktualisiert Ghost auf 6.49.0.

- Fügt Unterstützung für Markdown und llms.txt für KI-Tools hinzu.
- Stellt durch Container-Neustarts unterbrochene Newsletter-Versände wieder her.
- Behebt das Einfrieren von Theme-Uploads bei schreibgeschützten Ordnern.
- Behebt, dass die Heute-Ansicht der Analysen Datenpunkte in der Zukunft anzeigte.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.49.0`,
    pl_PL: `Aktualizuje Ghost do 6.49.0.

- Dodaje obsługę markdown i llms.txt dla narzędzi AI.
- Przywraca wysyłki newsletterów przerwane przez restarty kontenera.
- Naprawia zawieszanie się przesyłania motywów, gdy foldery są tylko do odczytu.
- Naprawia wyświetlanie przez widok Dziś w analityce punktów danych w przyszłości.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.49.0`,
    fr_FR: `Met à jour Ghost vers 6.49.0.

- Ajoute la prise en charge de markdown et llms.txt pour les outils d'IA.
- Récupère les envois de newsletters interrompus par les redémarrages du conteneur.
- Corrige le blocage des téléversements de thèmes lorsque les dossiers sont en lecture seule.
- Corrige la vue Aujourd'hui des analyses affichant des points de données dans le futur.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.49.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
