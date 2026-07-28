import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.54.1:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.54.1.

- Hardened upload filename generation.
- Added an inline editor for routes.yaml and redirects.yaml in the admin panel.
- Added member labels, complimentary subscriptions, and member gravatars in themes.
- Fixed several members CSV import bugs, sitemap handling of self-referential canonical URLs, and a settings preview regression.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.54.1`,
    es_ES: `Actualiza Ghost a 6.54.1.

- Refuerza la generación de nombres de los archivos subidos.
- Añade un editor integrado para routes.yaml y redirects.yaml en el panel de administración.
- Añade etiquetas de miembros, suscripciones de cortesía y gravatares de miembros en los temas.
- Corrige varios errores de importación CSV de miembros, el tratamiento de URLs canónicas autorreferenciales en el mapa del sitio y una regresión en la vista previa de ajustes.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.54.1`,
    de_DE: `Aktualisiert Ghost auf 6.54.1.

- Härtet die Erzeugung von Dateinamen beim Hochladen.
- Fügt einen integrierten Editor für routes.yaml und redirects.yaml im Admin-Bereich hinzu.
- Fügt Mitglieder-Labels, Gratis-Abonnements und Mitglieder-Gravatare in Themes hinzu.
- Behebt mehrere Fehler beim CSV-Import von Mitgliedern, die Behandlung selbstreferenzieller kanonischer URLs in der Sitemap sowie eine Regression in der Einstellungsvorschau.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.54.1`,
    pl_PL: `Aktualizuje Ghost do 6.54.1.

- Wzmacnia generowanie nazw przesyłanych plików.
- Dodaje wbudowany edytor plików routes.yaml i redirects.yaml w panelu administracyjnym.
- Dodaje etykiety członków, subskrypcje gratisowe oraz gravatary członków w motywach.
- Naprawia kilka błędów importu CSV członków, obsługę samoodwołujących się adresów kanonicznych w mapie witryny oraz regresję w podglądzie ustawień.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.54.1`,
    fr_FR: `Met à jour Ghost vers 6.54.1.

- Renforce la génération des noms de fichiers téléversés.
- Ajoute un éditeur intégré pour routes.yaml et redirects.yaml dans le panneau d'administration.
- Ajoute les étiquettes de membres, les abonnements offerts et les gravatars de membres dans les thèmes.
- Corrige plusieurs bogues d'import CSV des membres, la gestion des URL canoniques auto-référentielles dans le sitemap et une régression de l'aperçu des réglages.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.54.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
