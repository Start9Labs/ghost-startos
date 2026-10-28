import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.73.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.73.0.

- Fixed gallery reordering removing images from other galleries, slow member imports on sites with many labels, and paid members losing their tier when a complimentary period ends.
- Fixed Transistor embeds and email links, newsletter click counts inflated by link checkers, and tag filtering.
- Updated start-sdk to 3.1.1 and made owner password reset use Ghost's password-hashing API for compatibility with its dependency layout.

Back up before updating. Ghost migrates its database automatically; rebuilding the experimental member custom-field tables discards their definitions, values and bindings if that private feature was manually enabled. This package does not enable it.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.73.0)`,
    es_ES: `Actualiza Ghost a 6.73.0.

- Corrige que reordenar una galería eliminara imágenes de otras galerías, la lentitud al importar miembros en sitios con muchas etiquetas y la pérdida del nivel de miembros de pago al terminar un período gratuito.
- Corrige las inserciones de Transistor y los enlaces en correos, los clics de boletines inflados por verificadores de enlaces y el filtrado por etiquetas.
- Actualiza start-sdk a 3.1.1 y adapta el restablecimiento de la contraseña del propietario a la API de contraseñas de Ghost para admitir su estructura de dependencias.

Haz una copia de seguridad antes de actualizar. Ghost migra su base de datos automáticamente; al reconstruir las tablas experimentales de campos personalizados de miembros se descartan sus definiciones, valores y asociaciones si esa función privada se activó manualmente. Este paquete no la activa.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.73.0)`,
    de_DE: `Aktualisiert Ghost auf 6.73.0.

- Behebt, dass das Umordnen einer Galerie Bilder aus anderen Galerien entfernte, langsame Mitgliederimporte auf Websites mit vielen Labels und den Verlust der Tarifstufe zahlender Mitglieder nach Ablauf eines kostenlosen Zeitraums.
- Behebt Transistor-Einbettungen und E-Mail-Links, durch Linkprüfer überhöhte Newsletter-Klickzahlen und die Filterung nach Tags.
- Aktualisiert start-sdk auf 3.1.1 und nutzt beim Zurücksetzen des Eigentümerpassworts Ghosts Passwort-Hashing-API für dessen Abhängigkeitsstruktur.

Vor dem Update ein Backup erstellen. Ghost migriert seine Datenbank automatisch; beim Neuaufbau der experimentellen Tabellen für benutzerdefinierte Mitgliederfelder gehen deren Definitionen, Werte und Zuordnungen verloren, falls diese private Funktion manuell aktiviert wurde. Dieses Paket aktiviert sie nicht.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.73.0)`,
    pl_PL: `Aktualizuje Ghost do 6.73.0.

- Naprawia usuwanie obrazów z innych galerii przy zmianie kolejności, powolny import członków w witrynach z wieloma etykietami oraz utratę poziomu przez płacących członków po zakończeniu okresu bezpłatnego.
- Naprawia osadzenia Transistor i odnośniki w e-mailach, zawyżanie liczby kliknięć newsletterów przez skanery odnośników oraz filtrowanie według tagów.
- Aktualizuje start-sdk do 3.1.1 i korzysta z API haszowania haseł Ghost przy resetowaniu hasła właściciela, zapewniając zgodność z układem zależności.

Przed aktualizacją wykonaj kopię zapasową. Ghost automatycznie migruje bazę danych; przebudowa eksperymentalnych tabel niestandardowych pól członków usuwa ich definicje, wartości i powiązania, jeśli ta prywatna funkcja została ręcznie włączona. Ten pakiet jej nie włącza.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.73.0)`,
    fr_FR: `Met à jour Ghost vers 6.73.0.

- Corrige la suppression d'images d'autres galeries lors du réordonnancement, la lenteur des imports de membres sur les sites avec de nombreuses étiquettes et la perte du palier des membres payants à la fin d'une période offerte.
- Corrige les intégrations Transistor et les liens dans les e-mails, les clics de newsletters gonflés par les vérificateurs de liens et le filtrage par étiquette.
- Met à jour start-sdk vers 3.1.1 et utilise l'API de hachage des mots de passe de Ghost pour réinitialiser le mot de passe du propriétaire, afin de respecter son organisation des dépendances.

Faites une sauvegarde avant la mise à jour. Ghost migre automatiquement sa base de données ; la reconstruction des tables expérimentales de champs personnalisés des membres supprime leurs définitions, valeurs et associations si cette fonctionnalité privée a été activée manuellement. Ce paquet ne l'active pas.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.73.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
