import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.57.1:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.57.1, covering the 6.57.0 and 6.57.1 releases.

One new feature and a batch of bug fixes:

- Added analytics for email sequences.
- Fixed web analytics failing to load while the admin panel was still booting.
- Fixed the admin toolbar causing redirect loops on sites served from a subdirectory.
- Fixed theme settings being reset when editing the Source or Casper themes.
- Fixed the member.edited webhook not firing when a paid plan is cancelled or reinstated, and missing tiers in that webhook's previous-state payload.
- Fixed contrast_text_color returning the wrong text color for some light backgrounds, and missing spaces when using multiple attributes in the link helper.

Full release notes: https://github.com/TryGhost/Ghost/compare/v6.56.0...v6.57.1`,
    es_ES: `Actualiza Ghost a 6.57.1, incluyendo las versiones 6.57.0 y 6.57.1.

Una función nueva y un conjunto de correcciones:

- Añade analíticas para las secuencias de correo.
- Corrige que las analíticas web no se cargaran mientras el panel de administración aún se estaba iniciando.
- Corrige que la barra de herramientas de administración provocara bucles de redirección en sitios servidos desde un subdirectorio.
- Corrige que la configuración del tema se restableciera al editar los temas Source o Casper.
- Corrige que el webhook member.edited no se activara al cancelar o reactivar un plan de pago, y la ausencia de niveles en el estado anterior de dicho webhook.
- Corrige que contrast_text_color devolviera un color de texto incorrecto con algunos fondos claros y la falta de espacios al usar varios atributos en el helper de enlaces.

Notas de la versión completas: https://github.com/TryGhost/Ghost/compare/v6.56.0...v6.57.1`,
    de_DE: `Aktualisiert Ghost auf 6.57.1 und umfasst die Versionen 6.57.0 und 6.57.1.

Eine neue Funktion und eine Reihe von Fehlerbehebungen:

- Fügt Analysen für E-Mail-Sequenzen hinzu.
- Behebt, dass die Web-Analysen nicht geladen wurden, während der Admin-Bereich noch startete.
- Behebt Weiterleitungsschleifen der Admin-Symbolleiste auf Seiten in einem Unterverzeichnis.
- Behebt das Zurücksetzen der Theme-Einstellungen beim Bearbeiten der Themes Source und Casper.
- Behebt, dass der Webhook member.edited beim Kündigen oder Reaktivieren eines kostenpflichtigen Plans nicht ausgelöst wurde, sowie fehlende Stufen im vorherigen Zustand dieses Webhooks.
- Behebt, dass contrast_text_color bei manchen hellen Hintergründen eine falsche Textfarbe zurückgab, und fehlende Leerzeichen bei mehreren Attributen im Link-Helper.

Vollständige Versionshinweise: https://github.com/TryGhost/Ghost/compare/v6.56.0...v6.57.1`,
    pl_PL: `Aktualizuje Ghost do 6.57.1, obejmując wydania 6.57.0 i 6.57.1.

Jedna nowa funkcja i zestaw poprawek błędów:

- Dodaje statystyki dla sekwencji e-mail.
- Naprawia brak wczytywania statystyk internetowych, gdy panel administracyjny jeszcze się uruchamiał.
- Naprawia pętle przekierowań paska narzędzi administratora na stronach serwowanych z podkatalogu.
- Naprawia resetowanie ustawień motywu podczas edycji motywów Source i Casper.
- Naprawia brak wywołania webhooka member.edited przy anulowaniu lub przywróceniu planu płatnego oraz brakujące poziomy w poprzednim stanie tego webhooka.
- Naprawia zwracanie przez contrast_text_color błędnego koloru tekstu dla niektórych jasnych teł oraz brakujące spacje przy użyciu wielu atrybutów w helperze linków.

Pełne informacje o wydaniu: https://github.com/TryGhost/Ghost/compare/v6.56.0...v6.57.1`,
    fr_FR: `Met à jour Ghost vers 6.57.1, couvrant les versions 6.57.0 et 6.57.1.

Une nouvelle fonctionnalité et une série de corrections :

- Ajoute des statistiques pour les séquences d'e-mails.
- Corrige le non-chargement des statistiques web pendant le démarrage du panneau d'administration.
- Corrige les boucles de redirection de la barre d'outils d'administration sur les sites servis depuis un sous-répertoire.
- Corrige la réinitialisation des réglages du thème lors de la modification des thèmes Source ou Casper.
- Corrige le webhook member.edited qui ne se déclenchait pas lors de l'annulation ou du rétablissement d'un abonnement payant, ainsi que les paliers manquants dans l'état précédent de ce webhook.
- Corrige contrast_text_color renvoyant une couleur de texte incorrecte sur certains fonds clairs et les espaces manquants avec plusieurs attributs dans le helper de lien.

Notes de version complètes : https://github.com/TryGhost/Ghost/compare/v6.56.0...v6.57.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
