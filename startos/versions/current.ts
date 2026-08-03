import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.55.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.55.0.

A bug-fix release:

- Fixed members being unsubscribed from every newsletter when unsubscribing from one.
- Fixed broken admin views for Contributor and Author staff users.
- Fixed redirect capture groups not being substituted inside query strings.
- Fixed duplicate reply notification emails, broken internal links in automation emails, and feature image alt text being dropped when too long.

Full release notes: https://github.com/TryGhost/Ghost/releases/tag/v6.55.0`,
    es_ES: `Actualiza Ghost a 6.55.0.

Una versión de corrección de errores:

- Corrige que los miembros se dieran de baja de todos los boletines al darse de baja de uno.
- Corrige vistas de administración rotas para los usuarios con rol Colaborador y Autor.
- Corrige que los grupos de captura de las redirecciones no se sustituyeran dentro de las cadenas de consulta.
- Corrige correos de notificación de respuesta duplicados, enlaces internos rotos en los correos de automatización y la pérdida del texto alternativo de la imagen destacada cuando era demasiado largo.

Notas de la versión completas: https://github.com/TryGhost/Ghost/releases/tag/v6.55.0`,
    de_DE: `Aktualisiert Ghost auf 6.55.0.

Eine Fehlerbehebungs-Version:

- Behebt, dass Mitglieder beim Abmelden von einem Newsletter von allen Newslettern abgemeldet wurden.
- Behebt fehlerhafte Admin-Ansichten für Benutzer mit den Rollen Mitwirkender und Autor.
- Behebt, dass Erfassungsgruppen in Weiterleitungen innerhalb von Query-Strings nicht ersetzt wurden.
- Behebt doppelte Antwort-Benachrichtigungs-E-Mails, fehlerhafte interne Links in Automatisierungs-E-Mails und den Verlust zu langer Alternativtexte von Beitragsbildern.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/releases/tag/v6.55.0`,
    pl_PL: `Aktualizuje Ghost do 6.55.0.

Wydanie naprawiające błędy:

- Naprawia wypisywanie członków ze wszystkich newsletterów przy rezygnacji z jednego.
- Naprawia niedziałające widoki panelu administracyjnego dla ról Współpracownik i Autor.
- Naprawia brak podstawiania grup przechwytywania przekierowań wewnątrz parametrów zapytania.
- Naprawia duplikaty powiadomień e-mail o odpowiedziach, niedziałające linki wewnętrzne w e-mailach automatyzacji oraz utratę zbyt długiego tekstu alternatywnego obrazu wyróżniającego.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/releases/tag/v6.55.0`,
    fr_FR: `Met à jour Ghost vers 6.55.0.

Une version de correction de bogues :

- Corrige le désabonnement des membres de toutes les newsletters lors du désabonnement d'une seule.
- Corrige les vues d'administration cassées pour les utilisateurs Contributeur et Auteur.
- Corrige la non-substitution des groupes de capture des redirections dans les chaînes de requête.
- Corrige les e-mails de notification de réponse en double, les liens internes cassés dans les e-mails d'automatisation et la perte du texte alternatif trop long de l'image à la une.

Notes de version complètes : https://github.com/TryGhost/Ghost/releases/tag/v6.55.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
