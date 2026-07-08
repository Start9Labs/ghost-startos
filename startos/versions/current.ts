import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.51.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.51.0.

- Adds Social Web handle preferences for managing your social profiles.
- Fixes comped subscriptions, email previews on paywalled content, member upgrades on non-USD sites, and staff profile links.
- Fixes StartOS database backups that could previously be created empty.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.51.0`,
    es_ES: `Actualiza Ghost a 6.51.0.

- Añade preferencias de identificador de la Web Social para gestionar tus perfiles sociales.
- Corrige las suscripciones de cortesía, las vistas previas de correo en contenido de pago, las mejoras de membresía en sitios con monedas distintas al USD y los enlaces de perfil del personal.
- Corrige las copias de seguridad de la base de datos de StartOS que anteriormente podían crearse vacías.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.51.0`,
    de_DE: `Aktualisiert Ghost auf 6.51.0.

- Fügt Social-Web-Handle-Einstellungen zum Verwalten deiner sozialen Profile hinzu.
- Behebt Gratis-Abonnements, E-Mail-Vorschauen bei kostenpflichtigen Inhalten, Mitglieder-Upgrades auf Seiten mit anderen Währungen als USD und Links zu Mitarbeiterprofilen.
- Behebt StartOS-Datenbank-Backups, die zuvor leer erstellt werden konnten.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.51.0`,
    pl_PL: `Aktualizuje Ghost do 6.51.0.

- Dodaje preferencje identyfikatora Social Web do zarządzania profilami społecznościowymi.
- Naprawia subskrypcje gratisowe, podglądy e-maili dla treści płatnych, ulepszenia członkostwa w witrynach z walutą inną niż USD oraz linki do profili personelu.
- Naprawia kopie zapasowe bazy danych StartOS, które wcześniej mogły być tworzone jako puste.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.51.0`,
    fr_FR: `Met à jour Ghost vers 6.51.0.

- Ajoute les préférences de nom d'utilisateur du Web social pour gérer vos profils sociaux.
- Corrige les abonnements offerts, les aperçus d'e-mail sur le contenu payant, les mises à niveau des membres sur les sites en devises autres que l'USD et les liens des profils du personnel.
- Corrige les sauvegardes de base de données StartOS qui pouvaient auparavant être créées vides.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.51.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
