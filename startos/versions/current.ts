import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.75.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.75.0.

- Added a paid-subscription-changed automation trigger and the ability to pick a video card's thumbnail from its own frames.
- Fixed embeds of upcoming YouTube livestreams missing from emails.

Requires StartOS 0.4.1 or later.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.75.0)`,
    es_ES: `Actualiza Ghost a 6.75.0.

- Añade un disparador de automatizaciones para cambios en suscripciones de pago y la posibilidad de elegir la miniatura de una tarjeta de vídeo entre sus propios fotogramas.
- Corrige la ausencia de vídeos de próximas emisiones en directo de YouTube en los correos electrónicos.

Requiere StartOS 0.4.1 o posterior.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.75.0)`,
    de_DE: `Aktualisiert Ghost auf 6.75.0.

- Fügt einen Automatisierungsauslöser für Änderungen an kostenpflichtigen Abonnements hinzu und ermöglicht die Auswahl des Vorschaubilds einer Videokarte aus deren eigenen Einzelbildern.
- Behebt fehlende Einbettungen bevorstehender YouTube-Livestreams in E-Mails.

Erfordert StartOS 0.4.1 oder neuer.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.75.0)`,
    pl_PL: `Aktualizuje Ghost do 6.75.0.

- Dodaje wyzwalacz automatyzacji dla zmian płatnej subskrypcji oraz możliwość wyboru miniatury karty wideo spośród jego klatek.
- Naprawia brak osadzonych zapowiedzi transmisji na żywo w YouTube w wiadomościach e-mail.

Wymaga StartOS 0.4.1 lub nowszego.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.75.0)`,
    fr_FR: `Met à jour Ghost vers 6.75.0.

- Ajoute un déclencheur d'automatisation pour les changements d'abonnement payant et la possibilité de choisir la miniature d'une carte vidéo parmi ses propres images.
- Corrige l'absence des vidéos intégrées de prochaines diffusions YouTube en direct dans les e-mails.

Nécessite StartOS 0.4.1 ou ultérieur.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.75.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
