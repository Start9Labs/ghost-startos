import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.77.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.77.0.

- Added file support in welcome and automation emails, and member creation sources in activity feeds.
- Fixed saving design settings after theme uploads and importing Ghost(Pro) site exports.
- Includes Node.js security updates.

Back up before updating. Ghost automatically migrates its database and changes an email-recipient index; large newsletter histories may take longer to upgrade. Experimental Stripe checkout shipping/phone settings are cleared and tax-ID collection settings are removed.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.77.0)`,
    es_ES: `Actualiza Ghost a 6.77.0.

- Añade soporte para archivos en correos de bienvenida y automatizados, y el origen de creación de miembros en los registros de actividad.
- Corrige el guardado de ajustes de diseño tras subir temas y la importación de exportaciones de sitios Ghost(Pro).
- Incluye actualizaciones de seguridad de Node.js.

Haz una copia de seguridad antes de actualizar. Ghost migra automáticamente su base de datos y modifica un índice de destinatarios de correo; los historiales de boletines grandes pueden tardar más en actualizarse. Se borran los ajustes experimentales de dirección de envío y teléfono de Stripe Checkout y se eliminan los ajustes de recopilación de identificación fiscal.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.77.0)`,
    de_DE: `Aktualisiert Ghost auf 6.77.0.

- Fügt Dateiunterstützung in Willkommens- und Automatisierungs-E-Mails sowie die Herkunft neuer Mitglieder in Aktivitätsfeeds hinzu.
- Behebt das Speichern von Designeinstellungen nach Theme-Uploads und den Import von Ghost(Pro)-Website-Exporten.
- Enthält Node.js-Sicherheitsupdates.

Vor dem Update ein Backup erstellen. Ghost migriert seine Datenbank automatisch und ändert einen E-Mail-Empfängerindex; bei umfangreichen Newsletter-Verläufen kann das Update länger dauern. Experimentelle Stripe-Checkout-Einstellungen für Versandadressen und Telefonnummern werden zurückgesetzt; Einstellungen zur Erfassung der Steuer-ID werden entfernt.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.77.0)`,
    pl_PL: `Aktualizuje Ghost do 6.77.0.

- Dodaje obsługę plików w wiadomościach powitalnych i automatycznych oraz źródło utworzenia członków w kanałach aktywności.
- Naprawia zapisywanie ustawień wyglądu po przesłaniu motywów i import eksportów witryn Ghost(Pro).
- Zawiera aktualizacje zabezpieczeń Node.js.

Przed aktualizacją wykonaj kopię zapasową. Ghost automatycznie migruje bazę danych i zmienia indeks odbiorców wiadomości; aktualizacja dużych historii newsletterów może potrwać dłużej. Eksperymentalne ustawienia adresów wysyłki i numerów telefonu w Stripe Checkout są resetowane, a ustawienia zbierania identyfikatorów podatkowych usuwane.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.77.0)`,
    fr_FR: `Met à jour Ghost vers 6.77.0.

- Ajoute la prise en charge des fichiers dans les e-mails de bienvenue et automatisés, ainsi que la source de création des membres dans les flux d'activité.
- Corrige l'enregistrement des paramètres de design après l'importation de thèmes et l'importation des exports de sites Ghost(Pro).
- Inclut des mises à jour de sécurité de Node.js.

Faites une sauvegarde avant la mise à jour. Ghost migre automatiquement sa base de données et modifie un index des destinataires d'e-mails ; les historiques volumineux de newsletters peuvent ralentir la mise à jour. Les paramètres expérimentaux d'adresse de livraison et de téléphone de Stripe Checkout sont réinitialisés et ceux de collecte d'identifiants fiscaux sont supprimés.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.77.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
