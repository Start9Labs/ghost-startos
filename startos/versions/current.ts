import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.74.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.74.0.

- Added an “is all of” member label filter, comment link copying, selected-text word counts in the editor, and editable alt text for Product card images.
- Fixed scheduled posts shifting when the site timezone changes, newsletter analytics omitting sends, repeated delivery to rejecting addresses, and password reset requests hanging when SMTP is unreachable.

Back up before updating. Ghost automatically migrates automation triggers and other database tables. If the private experimental Apps feature was manually enabled, this update deletes its app installations and manifests. This package does not enable it.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.74.0)`,
    es_ES: `Actualiza Ghost a 6.74.0.

- Añade un filtro de etiquetas de miembros «incluye todas», la copia de enlaces a comentarios, el recuento de palabras del texto seleccionado en el editor y texto alternativo editable para las imágenes de las tarjetas de producto.
- Corrige el desplazamiento de las publicaciones programadas al cambiar la zona horaria del sitio, los envíos omitidos en las estadísticas de boletines, los envíos repetidos a direcciones que los rechazan y las solicitudes de restablecimiento de contraseña bloqueadas cuando SMTP no está disponible.

Haz una copia de seguridad antes de actualizar. Ghost migra automáticamente los disparadores de automatizaciones y otras tablas de la base de datos. Si la función experimental privada Apps se activó manualmente, esta actualización elimina sus instalaciones de aplicaciones y manifiestos. Este paquete no la activa.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.74.0)`,
    de_DE: `Aktualisiert Ghost auf 6.74.0.

- Fügt einen Mitglieder-Label-Filter „enthält alle“, das Kopieren von Kommentarlinks, die Wortzählung für ausgewählten Text im Editor und bearbeitbaren Alternativtext für Bilder in Produktkarten hinzu.
- Behebt verschobene geplante Beiträge nach Änderungen der Website-Zeitzone, fehlende Sendungen in Newsletter-Statistiken, wiederholte Zustellversuche an ablehnende Adressen und hängende Anfragen zum Zurücksetzen des Passworts bei nicht erreichbarem SMTP-Server.

Vor dem Update ein Backup erstellen. Ghost migriert Automatisierungsauslöser und weitere Datenbanktabellen automatisch. Falls die private experimentelle Apps-Funktion manuell aktiviert wurde, löscht dieses Update deren App-Installationen und Manifeste. Dieses Paket aktiviert sie nicht.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.74.0)`,
    pl_PL: `Aktualizuje Ghost do 6.74.0.

- Dodaje filtr etykiet członków „zawiera wszystkie”, kopiowanie odnośników do komentarzy, liczenie słów zaznaczonego tekstu w edytorze i edytowalny tekst alternatywny obrazów na kartach produktów.
- Naprawia przesuwanie zaplanowanych wpisów po zmianie strefy czasowej witryny, pomijanie wysyłek w statystykach newsletterów, wielokrotne wysyłanie na adresy odrzucające wiadomości oraz zawieszanie żądań resetowania hasła, gdy serwer SMTP jest niedostępny.

Przed aktualizacją wykonaj kopię zapasową. Ghost automatycznie migruje wyzwalacze automatyzacji i inne tabele bazy danych. Jeśli prywatna eksperymentalna funkcja Apps została ręcznie włączona, ta aktualizacja usuwa jej instalacje aplikacji i manifesty. Ten pakiet jej nie włącza.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.74.0)`,
    fr_FR: `Met à jour Ghost vers 6.74.0.

- Ajoute un filtre d'étiquettes de membres « contient toutes », la copie des liens de commentaires, le comptage des mots du texte sélectionné dans l'éditeur et un texte alternatif modifiable pour les images des cartes de produit.
- Corrige le décalage des publications programmées lors d'un changement de fuseau horaire du site, les envois omis des statistiques de newsletters, les envois répétés aux adresses qui les refusent et les demandes de réinitialisation de mot de passe bloquées lorsque SMTP est inaccessible.

Faites une sauvegarde avant la mise à jour. Ghost migre automatiquement les déclencheurs d'automatisation et d'autres tables de la base de données. Si la fonctionnalité expérimentale privée Apps a été activée manuellement, cette mise à jour supprime ses installations d'applications et ses manifestes. Ce paquet ne l'active pas.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.74.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
