import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.62.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.62.0, covering the 6.61.0 and 6.62.0 releases, and MySQL to 8.4.11.

- Added gift subscriptions that can be emailed to a recipient and a new tag details screen in Ghost Admin.
- Extended the CSV post importer to accept ZIP archives with embedded media and preserve authors and tags.
- Fixed failed member-import reports, unsubscribe links affecting the wrong logged-in member, private-site landing pages for signed-in members, and email analytics for sites using multiple sending domains.
- Reduced abandoned rendering and duplicate image-dimension requests, and fixed lagging design previews and stale Admin sidebar selections.
- Updated the bundled Casper (5.12.3) and Source (1.7.3) themes.
- MySQL 8.4.11 includes database reliability and correctness fixes.

Full Ghost release notes: https://github.com/TryGhost/Ghost/compare/v6.60.0...v6.62.0
Full MySQL release notes: https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-11.html`,
    es_ES: `Actualiza Ghost a 6.62.0, incluyendo las versiones 6.61.0 y 6.62.0, y MySQL a 8.4.11.

- Añade suscripciones de regalo que se pueden enviar por correo al destinatario y una nueva pantalla de detalles de etiquetas en Ghost Admin.
- Amplía la importación de entradas por CSV para aceptar archivos ZIP con medios incrustados y conservar autores y etiquetas.
- Corrige los informes de importación fallida de miembros, los enlaces para cancelar la suscripción que afectaban al miembro equivocado con la sesión iniciada, las páginas de destino de sitios privados para miembros autenticados y la analítica de correo en sitios con varios dominios de envío.
- Reduce la generación abandonada y las solicitudes duplicadas de dimensiones de imágenes, y corrige el retraso en las vistas previas del diseño y las selecciones obsoletas de la barra lateral de Admin.
- Actualiza los temas incluidos Casper (5.12.3) y Source (1.7.3).
- MySQL 8.4.11 incluye correcciones de fiabilidad y exactitud de la base de datos.

Notas completas de Ghost: https://github.com/TryGhost/Ghost/compare/v6.60.0...v6.62.0
Notas completas de MySQL: https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-11.html`,
    de_DE: `Aktualisiert Ghost auf 6.62.0, einschließlich der Versionen 6.61.0 und 6.62.0, und MySQL auf 8.4.11.

- Fügt Geschenk-Abos hinzu, die per E-Mail an die beschenkte Person gesendet werden können, sowie eine neue Detailansicht für Tags in Ghost Admin.
- Erweitert den CSV-Import von Beiträgen um ZIP-Archive mit eingebetteten Medien und übernimmt Autoren und Tags.
- Korrigiert Berichte fehlgeschlagener Mitglieder-Importe, Abmeldelinks, die das falsche angemeldete Mitglied betrafen, Landingpages privater Websites für angemeldete Mitglieder und die E-Mail-Analyse für Websites mit mehreren Versanddomains.
- Reduziert abgebrochene Rendervorgänge und doppelte Anfragen nach Bildabmessungen und behebt verzögerte Designvorschauen und veraltete Auswahlen in der Admin-Seitenleiste.
- Aktualisiert die mitgelieferten Themes Casper (5.12.3) und Source (1.7.3).
- MySQL 8.4.11 enthält Korrekturen für Zuverlässigkeit und Korrektheit der Datenbank.

Vollständige Ghost-Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.60.0...v6.62.0
Vollständige MySQL-Versionshinweise: https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-11.html`,
    pl_PL: `Aktualizuje Ghost do 6.62.0, obejmując wydania 6.61.0 i 6.62.0, oraz MySQL do 8.4.11.

- Dodaje subskrypcje w prezencie, które można wysłać obdarowanej osobie e-mailem, oraz nowy ekran szczegółów tagu w Ghost Admin.
- Rozszerza import wpisów z pliku CSV o archiwa ZIP z osadzonymi multimediami i zachowuje autorów oraz tagi.
- Naprawia raporty nieudanych importów członków, linki rezygnacji z subskrypcji wpływające na niewłaściwego zalogowanego członka, strony docelowe prywatnych witryn dla zalogowanych członków i analitykę wiadomości e-mail dla witryn z wieloma domenami wysyłkowymi.
- Ogranicza porzucone generowanie stron i powielone żądania wymiarów obrazów oraz naprawia opóźnione podglądy projektu i nieaktualne zaznaczenia na pasku bocznym Admin.
- Aktualizuje dołączone motywy Casper (5.12.3) i Source (1.7.3).
- MySQL 8.4.11 zawiera poprawki niezawodności i poprawności bazy danych.

Pełne informacje o wydaniu Ghost: https://github.com/TryGhost/Ghost/compare/v6.60.0...v6.62.0
Pełne informacje o wydaniu MySQL: https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-11.html`,
    fr_FR: `Met à jour Ghost vers 6.62.0, couvrant les versions 6.61.0 et 6.62.0, et MySQL vers 8.4.11.

- Ajoute des abonnements offerts qui peuvent être envoyés par e-mail au destinataire et un nouvel écran détaillé pour les étiquettes dans Ghost Admin.
- Étend l'import d'articles au format CSV aux archives ZIP contenant des médias et conserve les auteurs et les étiquettes.
- Corrige les rapports d'échec d'import de membres, les liens de désabonnement qui affectaient le mauvais membre connecté, les pages d'accueil des sites privés pour les membres connectés et les statistiques d'e-mails des sites utilisant plusieurs domaines d'envoi.
- Réduit les rendus abandonnés et les demandes redondantes de dimensions d'images, et corrige les aperçus de conception saccadés ainsi que les sélections obsolètes dans la barre latérale d'Admin.
- Met à jour les thèmes fournis Casper (5.12.3) et Source (1.7.3).
- MySQL 8.4.11 inclut des correctifs de fiabilité et d'exactitude de la base de données.

Notes de version complètes de Ghost : https://github.com/TryGhost/Ghost/compare/v6.60.0...v6.62.0
Notes de version complètes de MySQL : https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-11.html`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
