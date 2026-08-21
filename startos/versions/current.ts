import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.59.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.59.0, covering the 6.58.0 and 6.59.0 releases.

Security fixes, all in 6.58.0 and all disclosed after Ghost published its release notes:

- Unauthenticated visitors could read the comments on a site running in private mode.
- A lower-privilege staff user could bypass post editing restrictions by using a staff token.
- Any staff user could read the password hashes of the other staff users. Ghost's device verification normally stops an attacker logging in with a cracked hash, and this package leaves it off, so update if your site has more than one staff account.

New features and other fixes:

- Released the React member details screen and refined the React tag details screen.
- Added support for Docker secrets to config loading.
- Improved Admin error messages so they say what actually went wrong.
- Fixed redirecting outbound requests crashing Ghost, and card assets busting caches on every Ghost restart.
- Fixed negated newsletter filters being read as their opposite, and donation checkout failing when the note label translation is too long.
- Fixed several member import problems: columns silently dropped when the first row is short, the mapping step on short screens, and the missing email notification when an import fails.
- Updated the Source and Casper themes.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.57.1...v6.59.0`,
    es_ES: `Actualiza Ghost a 6.59.0, incluyendo las versiones 6.58.0 y 6.59.0.

Correcciones de seguridad, todas en 6.58.0 y publicadas después de las notas de la versión de Ghost:

- Los visitantes no autenticados podían leer los comentarios de un sitio en modo privado.
- Un usuario del personal con menos permisos podía saltarse las restricciones de edición de entradas usando un token de personal.
- Cualquier usuario del personal podía leer los hashes de las contraseñas de los demás. La verificación de dispositivo de Ghost suele impedir que un atacante inicie sesión con una contraseña descifrada, y este paquete la mantiene desactivada, así que actualiza si tu sitio tiene más de una cuenta de personal.

Funciones nuevas y otras correcciones:

- Publica la pantalla de detalles de miembro en React y mejora la pantalla de detalles de etiqueta en React.
- Añade compatibilidad con los secretos de Docker en la carga de la configuración.
- Mejora los mensajes de error de administración para que indiquen qué ha fallado realmente.
- Corrige el fallo de Ghost al redirigir peticiones salientes y la invalidación de la caché de los recursos de las tarjetas en cada reinicio.
- Corrige los filtros de boletín negados que se interpretaban al revés y el fallo del pago de donaciones cuando la traducción de la etiqueta de la nota es demasiado larga.
- Corrige varios problemas de la importación de miembros: columnas descartadas en silencio cuando la primera fila es corta, el paso de asignación en pantallas pequeñas y la notificación por correo ausente cuando falla una importación.
- Actualiza los temas Source y Casper.

Notas de la versión completas: https://github.com/TryGhost/Ghost/compare/v6.57.1...v6.59.0`,
    de_DE: `Aktualisiert Ghost auf 6.59.0 und umfasst die Versionen 6.58.0 und 6.59.0.

Sicherheitskorrekturen, alle in 6.58.0 und erst nach den Versionshinweisen von Ghost veröffentlicht:

- Nicht angemeldete Besucher konnten die Kommentare einer Website im privaten Modus lesen.
- Ein Mitarbeiter mit geringeren Rechten konnte die Beschränkungen zum Bearbeiten von Beiträgen mit einem Staff-Token umgehen.
- Jeder Mitarbeiter konnte die Passwort-Hashes der anderen Mitarbeiter auslesen. Die Geräteverifizierung von Ghost verhindert normalerweise die Anmeldung mit einem geknackten Passwort, und dieses Paket lässt sie deaktiviert. Aktualisiere daher, wenn deine Website mehr als ein Mitarbeiterkonto hat.

Neue Funktionen und weitere Fehlerbehebungen:

- Veröffentlicht die React-Ansicht für Mitgliederdetails und verbessert die React-Ansicht für Tag-Details.
- Fügt Unterstützung für Docker-Secrets beim Laden der Konfiguration hinzu.
- Verbessert die Fehlermeldungen im Admin-Bereich, sodass sie die tatsächliche Ursache nennen.
- Behebt einen Absturz von Ghost beim Weiterleiten ausgehender Anfragen sowie das Ungültigmachen der Card-Asset-Caches bei jedem Neustart.
- Behebt negierte Newsletter-Filter, die umgekehrt ausgewertet wurden, und einen Fehler beim Spenden-Checkout, wenn die Übersetzung der Notiz-Beschriftung zu lang ist.
- Behebt mehrere Probleme beim Mitglieder-Import: stillschweigend verworfene Spalten bei einer kurzen ersten Zeile, den Zuordnungsschritt auf kleinen Bildschirmen und die fehlende E-Mail-Benachrichtigung bei einem fehlgeschlagenen Import.
- Aktualisiert die Themes Source und Casper.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.57.1...v6.59.0`,
    pl_PL: `Aktualizuje Ghost do 6.59.0, obejmując wydania 6.58.0 i 6.59.0.

Poprawki bezpieczeństwa, wszystkie w 6.58.0 i ujawnione po opublikowaniu informacji o wydaniu przez Ghost:

- Niezalogowani odwiedzający mogli czytać komentarze witryny działającej w trybie prywatnym.
- Użytkownik zespołu o niższych uprawnieniach mógł ominąć ograniczenia edycji wpisów za pomocą tokenu zespołu.
- Każdy użytkownik zespołu mógł odczytać skróty haseł pozostałych użytkowników. Weryfikacja urządzenia w Ghost zwykle blokuje zalogowanie się złamanym hasłem, a ten pakiet pozostawia ją wyłączoną, więc zaktualizuj, jeśli Twoja witryna ma więcej niż jedno konto zespołu.

Nowe funkcje i pozostałe poprawki:

- Udostępnia ekran szczegółów członka w React i ulepsza ekran szczegółów tagu w React.
- Dodaje obsługę sekretów Dockera podczas wczytywania konfiguracji.
- Ulepsza komunikaty o błędach w panelu administracyjnym, aby wskazywały rzeczywistą przyczynę.
- Naprawia awarię Ghost przy przekierowywaniu żądań wychodzących oraz unieważnianie pamięci podręcznej zasobów kart przy każdym restarcie.
- Naprawia negowane filtry newslettera interpretowane odwrotnie oraz błąd płatności darowizny, gdy tłumaczenie etykiety notatki jest zbyt długie.
- Naprawia kilka problemów importu członków: ciche pomijanie kolumn, gdy pierwszy wiersz jest krótki, krok mapowania na małych ekranach oraz brak powiadomienia e-mail o nieudanym imporcie.
- Aktualizuje motywy Source i Casper.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.57.1...v6.59.0`,
    fr_FR: `Met à jour Ghost vers 6.59.0, couvrant les versions 6.58.0 et 6.59.0.

Correctifs de sécurité, tous dans la 6.58.0 et divulgués après la publication des notes de version de Ghost :

- Des visiteurs non authentifiés pouvaient lire les commentaires d'un site en mode privé.
- Un membre du personnel disposant de moins de droits pouvait contourner les restrictions de modification des articles à l'aide d'un jeton de personnel.
- N'importe quel membre du personnel pouvait lire les empreintes des mots de passe des autres. La vérification d'appareil de Ghost empêche normalement de se connecter avec un mot de passe déchiffré, et ce paquet la laisse désactivée : mettez à jour si votre site compte plus d'un compte de personnel.

Nouvelles fonctionnalités et autres corrections :

- Publie l'écran React des détails d'un membre et améliore l'écran React des détails d'une étiquette.
- Ajoute la prise en charge des secrets Docker au chargement de la configuration.
- Améliore les messages d'erreur de l'administration pour qu'ils indiquent la véritable cause.
- Corrige le plantage de Ghost lors de la redirection des requêtes sortantes ainsi que l'invalidation du cache des ressources de cartes à chaque redémarrage.
- Corrige les filtres de newsletter avec négation interprétés à l'envers et l'échec du paiement d'un don quand la traduction du libellé de la note est trop longue.
- Corrige plusieurs problèmes d'import de membres : colonnes ignorées silencieusement quand la première ligne est courte, étape de correspondance sur les petits écrans et notification par e-mail manquante en cas d'échec de l'import.
- Met à jour les thèmes Source et Casper.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.57.1...v6.59.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
