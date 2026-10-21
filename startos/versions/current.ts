import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '6.72.0:0',
  releaseNotes: {
    en_US: `Updated Ghost to 6.72.0.

- Added Stripe Checkout design customisation, editor fonts and distraction-free writing.
- Improved automation editing: rename in the header, reuse names and save unpublished automations without actions.
- Fixed replies from different newsletter readers threading together and Portal requiring existing free members to sign in before checkout.

[Full upstream release notes](https://github.com/TryGhost/Ghost/releases/tag/v6.72.0)`,
    es_ES: `Actualiza Ghost a 6.72.0.

- Añade personalización del diseño de Stripe Checkout, fuentes del editor y escritura sin distracciones.
- Mejora la edición de automatizaciones: cambiar el nombre en la cabecera, reutilizar nombres y guardar automatizaciones sin publicar sin acciones.
- Corrige las respuestas de distintos lectores del boletín que se agrupaban en un mismo hilo y que Portal exigiera a los miembros gratuitos existentes iniciar sesión antes del pago.

[Notas completas de la versión original](https://github.com/TryGhost/Ghost/releases/tag/v6.72.0)`,
    de_DE: `Aktualisiert Ghost auf 6.72.0.

- Fügt Designanpassungen für Stripe Checkout, Editor-Schriftarten und ablenkungsfreies Schreiben hinzu.
- Verbessert die Bearbeitung von Automatisierungen: Umbenennen in der Kopfzeile, Wiederverwenden von Namen und Speichern unveröffentlichter Automatisierungen ohne Aktionen.
- Behebt, dass Antworten verschiedener Newsletter-Leser im selben Thread landeten und Portal bestehende kostenlose Mitglieder vor dem Checkout zur Anmeldung aufforderte.

[Vollständige Upstream-Versionshinweise](https://github.com/TryGhost/Ghost/releases/tag/v6.72.0)`,
    pl_PL: `Aktualizuje Ghost do 6.72.0.

- Dodaje dostosowywanie wyglądu Stripe Checkout, czcionki edytora i pisanie bez rozpraszania uwagi.
- Ulepsza edycję automatyzacji: zmianę nazwy w nagłówku, ponowne używanie nazw i zapisywanie nieopublikowanych automatyzacji bez działań.
- Naprawia łączenie odpowiedzi różnych czytelników newslettera w jeden wątek oraz wymaganie przez Portal logowania istniejących bezpłatnych członków przed płatnością.

[Pełne informacje o wydaniu upstream](https://github.com/TryGhost/Ghost/releases/tag/v6.72.0)`,
    fr_FR: `Met à jour Ghost vers 6.72.0.

- Ajoute la personnalisation du design de Stripe Checkout, des polices dans l'éditeur et l'écriture sans distraction.
- Améliore l'édition des automatisations : renommage dans l'en-tête, réutilisation des noms et enregistrement des automatisations non publiées sans actions.
- Corrige le regroupement des réponses de différents lecteurs de newsletters dans un même fil et l'obligation pour les membres gratuits existants de se connecter à Portal avant le paiement.

[Notes de version complètes du projet amont](https://github.com/TryGhost/Ghost/releases/tag/v6.72.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
