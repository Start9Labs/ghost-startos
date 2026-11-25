import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.79.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.79.0.

- Added separate web and email visibility settings to media and content cards.
- Fixed a missing sign-in email after a paid checkout, feature image captions landing in body image captions, restricted card text appearing in newsletter inbox previews, card text with special characters rendering incorrectly, password reset not lifting a staff sign-in block, and free members being unable to upgrade (or gifts being sold) on invite-only sites.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.79.0)`,
    es_ES: `Actualiza Ghost a 6.79.0.

- Añade ajustes separados de visibilidad web y por correo electrónico a las tarjetas de medios y contenido.
- Corrige la falta del correo de inicio de sesión tras un pago, los pies de la imagen destacada que acababan en pies de imágenes del cuerpo, el texto restringido de tarjetas visible en las vistas previas de los boletines, el texto de tarjetas con caracteres especiales mostrado incorrectamente, el restablecimiento de contraseña que no levantaba el bloqueo de inicio de sesión del personal, y que los miembros gratuitos no pudieran mejorar su plan (o que se vendieran regalos) en sitios solo por invitación.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.79.0)`,
    de_DE: `Aktualisiert Ghost auf 6.79.0.

- Fügt Medien- und Inhaltskarten getrennte Sichtbarkeitseinstellungen für Web und E-Mail hinzu.
- Behebt eine fehlende Anmelde-E-Mail nach einem kostenpflichtigen Checkout, Bildunterschriften des Beitragsbilds, die in Bildunterschriften im Text landeten, eingeschränkten Kartentext in Newsletter-Vorschauen im Posteingang, falsch dargestellten Kartentext mit Sonderzeichen, eine Passwortzurücksetzung, die die Anmeldesperre für Mitarbeiter nicht aufhob, sowie kostenlose Mitglieder, die auf Websites nur mit Einladung nicht upgraden konnten (oder dort verkaufte Geschenke).

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.79.0)`,
    pl_PL: `Aktualizuje Ghost do 6.79.0.

- Dodaje osobne ustawienia widoczności w sieci i w e-mailu dla kart multimediów i treści.
- Naprawia brak e-maila logowania po płatnym zakupie, podpisy obrazu wyróżniającego trafiające do podpisów obrazów w treści, tekst kart z ograniczonym dostępem widoczny w podglądach newslettera w skrzynce odbiorczej, błędne wyświetlanie tekstu kart ze znakami specjalnymi, reset hasła niezdejmujący blokady logowania personelu oraz brak możliwości podniesienia planu przez darmowych członków (i sprzedaż prezentów) w witrynach tylko na zaproszenie.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.79.0)`,
    fr_FR: `Met à jour Ghost vers 6.79.0.

- Ajoute des réglages de visibilité distincts pour le web et l'e-mail aux cartes de médias et de contenu.
- Corrige l'absence d'e-mail de connexion après un paiement, les légendes de l'image à la une qui atterrissaient dans les légendes d'images du corps, le texte de cartes restreint visible dans les aperçus de newsletter, le texte de cartes contenant des caractères spéciaux mal affiché, la réinitialisation du mot de passe qui ne levait pas le blocage de connexion du personnel, ainsi que l'impossibilité pour les membres gratuits de passer à une offre payante (ou la vente de cadeaux) sur les sites sur invitation.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.79.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
