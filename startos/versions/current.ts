import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.76.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.76.0.

- Added custom fields for member details and inline-code formatting by typing a backtick over selected text.
- Allowed large post images in Google Discover and fixed clipped font dropdowns in Safari.
- Fixed database deadlocks when saving tiers or editing posts concurrently, and offer details being lost during sign-in.

Requires StartOS 0.4.2 or later. Back up before updating; Ghost automatically migrates its database, removing duplicate tier-benefit links and adding persistent rate limits.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.76.0)`,
    es_ES: `Actualiza Ghost a 6.76.0.

- Añade campos personalizados para los datos de miembros y formato de código en línea al escribir un acento grave sobre texto seleccionado.
- Permite imágenes grandes de publicaciones en Google Discover y corrige los desplegables de fuentes recortados en Safari.
- Corrige bloqueos de la base de datos al guardar niveles o editar publicaciones simultáneamente, y la pérdida de los detalles de ofertas al iniciar sesión.

Requiere StartOS 0.4.2 o posterior. Haz una copia de seguridad antes de actualizar; Ghost migra automáticamente su base de datos, eliminando vínculos duplicados entre niveles y ventajas y añadiendo límites de solicitudes persistentes.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.76.0)`,
    de_DE: `Aktualisiert Ghost auf 6.76.0.

- Fügt benutzerdefinierte Felder für Mitgliederdetails und Inline-Code-Formatierung durch Eingabe eines Backticks bei ausgewähltem Text hinzu.
- Ermöglicht große Beitragsbilder in Google Discover und behebt abgeschnittene Schriftart-Auswahllisten in Safari.
- Behebt Datenbank-Deadlocks beim Speichern von Tarifstufen oder gleichzeitigen Bearbeiten von Beiträgen sowie verlorene Angebotsdetails bei der Anmeldung.

Erfordert StartOS 0.4.2 oder neuer. Vor dem Update ein Backup erstellen; Ghost migriert seine Datenbank automatisch, entfernt doppelte Verknüpfungen zwischen Tarifstufen und Vorteilen und fügt dauerhafte Anfragelimits hinzu.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.76.0)`,
    pl_PL: `Aktualizuje Ghost do 6.76.0.

- Dodaje niestandardowe pola danych członków i formatowanie kodu w tekście przez wpisanie grawisu przy zaznaczonym tekście.
- Umożliwia wyświetlanie dużych obrazów wpisów w Google Discover i naprawia przycinanie list wyboru czcionek w Safari.
- Naprawia zakleszczenia bazy danych podczas zapisywania poziomów lub jednoczesnej edycji wpisów oraz utratę szczegółów oferty przy logowaniu.

Wymaga StartOS 0.4.2 lub nowszego. Przed aktualizacją wykonaj kopię zapasową; Ghost automatycznie migruje bazę danych, usuwając powielone powiązania poziomów z korzyściami i dodając trwałe limity żądań.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.76.0)`,
    fr_FR: `Met à jour Ghost vers 6.76.0.

- Ajoute des champs personnalisés pour les informations des membres et le formatage en code en ligne en tapant un accent grave sur du texte sélectionné.
- Autorise les grandes images des publications dans Google Discover et corrige les listes de polices tronquées dans Safari.
- Corrige les interblocages de base de données lors de l'enregistrement des offres ou de modifications simultanées de publications, ainsi que la perte des détails d'offre à la connexion.

Nécessite StartOS 0.4.2 ou ultérieur. Faites une sauvegarde avant la mise à jour ; Ghost migre automatiquement sa base de données, supprime les liens en double entre offres et avantages et ajoute des limites de requêtes persistantes.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.76.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
