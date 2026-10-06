import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.67.0:1',
  releaseNotes: {
    en_US: `Updated Ghost to 6.67.0.

- Fixed post history crashing for posts without revisions and importing posts with empty mobiledoc content.
- Fixed posts losing selection during bulk actions and filters behaving incorrectly in the editor and sidebar.
- Fixed scroll restoration when returning to posts and members.
- Fixed repeated Stripe portal configuration errors and crashes when a subscription's member or paid tier is missing.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.65.0...v6.67.0

- Open UI opens Ghost at its primary URL.
- Enable Tinfoil Mode, Disable Tinfoil Mode and Reset Owner Password ask for confirmation before running.
- Configure SMTP's description explains what SMTP is needed for.
- Ghost starts only once a primary URL is chosen, and Set Primary Url preselects nothing.
- When only the port of the primary URL changes, as after a restore, Ghost follows it without asking you to choose again.`,
    es_ES: `Actualiza Ghost a 6.67.0.

- Corrige los fallos del historial de publicaciones sin revisiones y de la importación de publicaciones con contenido mobiledoc vacío.
- Corrige la pérdida de selección de publicaciones durante acciones masivas y el comportamiento incorrecto de los filtros en el editor y la barra lateral.
- Corrige la restauración de la posición de desplazamiento al volver a publicaciones y miembros.
- Corrige los errores repetidos de configuración del portal de Stripe y los fallos cuando falta el miembro o el nivel de pago de una suscripción.

Notas completas de la versión: https://github.com/TryGhost/Ghost/compare/v6.65.0...v6.67.0

- Abrir interfaz abre Ghost en su URL principal.
- Activar modo Tinfoil, Desactivar modo Tinfoil y Restablecer contraseña del propietario piden confirmación antes de ejecutarse.
- La descripción de Configurar SMTP explica para qué se necesita SMTP.
- Ghost solo se inicia una vez elegida una URL principal, y Establecer URL principal no preselecciona nada.
- Cuando solo cambia el puerto de la URL principal, como tras una restauración, Ghost lo sigue sin pedirle que vuelva a elegir.`,
    de_DE: `Aktualisiert Ghost auf 6.67.0.

- Behebt Abstürze des Beitragsverlaufs bei Beiträgen ohne Revisionen und Fehler beim Import von Beiträgen mit leerem mobiledoc-Inhalt.
- Behebt den Verlust der Beitragsauswahl bei Massenaktionen und fehlerhaftes Filterverhalten im Editor und in der Seitenleiste.
- Behebt die Wiederherstellung der Scrollposition bei der Rückkehr zu Beiträgen und Mitgliedern.
- Behebt wiederholte Konfigurationsfehler des Stripe-Portals und Abstürze bei Abonnements mit fehlendem Mitglied oder fehlender kostenpflichtiger Stufe.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.65.0...v6.67.0

- „Oberfläche öffnen“ öffnet Ghost unter seiner primären URL.
- „Tinfoil-Modus aktivieren“, „Tinfoil-Modus deaktivieren“ und „Eigentümer-Passwort zurücksetzen“ fragen vor der Ausführung nach einer Bestätigung.
- Die Beschreibung von „SMTP konfigurieren“ erklärt, wofür SMTP benötigt wird.
- Ghost startet erst, wenn eine primäre URL gewählt ist, und „Primäre URL festlegen“ wählt nichts vor.
- Ändert sich nur der Port der primären URL, etwa nach einer Wiederherstellung, folgt Ghost ihm, ohne Sie erneut wählen zu lassen.`,
    pl_PL: `Aktualizuje Ghost do 6.67.0.

- Naprawia awarie historii wpisów bez zapisanych rewizji i importowanie wpisów z pustą treścią mobiledoc.
- Naprawia utratę zaznaczenia wpisów podczas działań zbiorczych oraz nieprawidłowe działanie filtrów w edytorze i na pasku bocznym.
- Naprawia przywracanie pozycji przewijania po powrocie do wpisów i członków.
- Naprawia powtarzające się błędy konfiguracji portalu Stripe oraz awarie, gdy brakuje członka lub płatnego poziomu subskrypcji.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.65.0...v6.67.0

- „Otwórz interfejs” otwiera Ghost pod jego głównym adresem URL.
- „Włącz tryb Tinfoil”, „Wyłącz tryb Tinfoil” i „Zresetuj hasło właściciela” proszą o potwierdzenie przed uruchomieniem.
- Opis „Konfiguracja SMTP” wyjaśnia, do czego potrzebny jest SMTP.
- Ghost uruchamia się dopiero po wybraniu głównego URL, a „Ustaw główny URL” niczego nie zaznacza wstępnie.
- Gdy zmienia się tylko port głównego URL, na przykład po przywróceniu, Ghost podąża za nim bez ponownego pytania o wybór.`,
    fr_FR: `Met à jour Ghost vers 6.67.0.

- Corrige les plantages de l'historique des publications sans révisions et l'importation de publications au contenu mobiledoc vide.
- Corrige la perte de sélection des publications lors d'actions groupées et le comportement incorrect des filtres dans l'éditeur et la barre latérale.
- Corrige la restauration de la position de défilement au retour aux publications et aux membres.
- Corrige les erreurs répétées de configuration du portail Stripe et les plantages lorsqu'il manque le membre ou le palier payant d'un abonnement.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.65.0...v6.67.0

- Ouvrir l'interface ouvre Ghost sur son URL principale.
- Activer le mode Tinfoil, Désactiver le mode Tinfoil et Réinitialiser le mot de passe du propriétaire demandent une confirmation avant de s'exécuter.
- La description de Configurer SMTP explique à quoi sert SMTP.
- Ghost ne démarre qu'une fois une URL principale choisie, et Définir l'URL principale ne présélectionne rien.
- Lorsque seul le port de l'URL principale change, par exemple après une restauration, Ghost le suit sans vous demander de choisir à nouveau.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
