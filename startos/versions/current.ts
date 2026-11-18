import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.78.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.78.0.

- Added shipping address and phone number collection to Stripe Checkout.
- Fixed gift redemption for new members on paid-only sites, formatting lost in feature image captions, corrupted card links, and analytics presets and daily paid-subscription figures covering the wrong days.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.78.0)`,
    es_ES: `Actualiza Ghost a 6.78.0.

- Añade la recogida de dirección de envío y número de teléfono en Stripe Checkout.
- Corrige el canje de regalos para nuevos miembros en sitios solo de pago, la pérdida de formato en los pies de las imágenes destacadas, los enlaces de tarjetas dañados y los preajustes de estadísticas y las cifras diarias de suscripciones de pago que abarcaban días incorrectos.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.78.0)`,
    de_DE: `Aktualisiert Ghost auf 6.78.0.

- Fügt die Erfassung von Lieferadresse und Telefonnummer im Stripe Checkout hinzu.
- Behebt das Einlösen von Geschenken für neue Mitglieder auf rein kostenpflichtigen Websites, verlorene Formatierung in Bildunterschriften von Beitragsbildern, beschädigte Kartenlinks sowie Statistik-Voreinstellungen und tägliche Zahlen zu kostenpflichtigen Abonnements, die falsche Tage abdeckten.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.78.0)`,
    pl_PL: `Aktualizuje Ghost do 6.78.0.

- Dodaje zbieranie adresu wysyłki i numeru telefonu w Stripe Checkout.
- Naprawia realizację prezentów przez nowych członków w witrynach tylko płatnych, utratę formatowania w podpisach obrazów wyróżniających, uszkodzone odnośniki w kartach oraz ustawienia statystyk i dzienne dane o płatnych subskrypcjach obejmujące niewłaściwe dni.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.78.0)`,
    fr_FR: `Met à jour Ghost vers 6.78.0.

- Ajoute la collecte de l'adresse de livraison et du numéro de téléphone dans Stripe Checkout.
- Corrige l'utilisation des cadeaux par les nouveaux membres sur les sites uniquement payants, la perte de mise en forme des légendes d'images à la une, les liens de cartes corrompus, ainsi que les préréglages de statistiques et les chiffres quotidiens d'abonnements payants couvrant les mauvais jours.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.78.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
