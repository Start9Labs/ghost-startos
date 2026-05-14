# Ghost

## Documentation

- [Ghost documentation](https://ghost.org/docs/) — upstream guides for setup, publishing, themes, integrations, and the Admin / Content APIs.

## What you get on StartOS

- A **Primary UI** interface serving your Ghost blog at `/`.
- An **Admin UI** interface that lands on the same Ghost instance at `/ghost`, where you create posts, manage staff, and configure the site.
- A bundled MySQL sidecar — you never configure or log into a database.
- **Tinfoil mode on by default**: Gravatars, update checks, RPC pinging, structured data, and third-party integrations are disabled out of the box. Toggle it from Actions if you want them back.

## Getting set up

1. On the first launch, StartOS auto-selects your `.local` address as Ghost's primary URL. If you want a different one (Tor, a custom clearnet domain you've added to the Primary UI or Admin UI interfaces), run the **Set Primary Url** action and pick from the dropdown. Ghost enforces single-origin admin login, so the admin panel will only accept logins at the URL you choose here.
2. Open the **Admin UI** interface. You will land on `/ghost` and be prompted to create the site owner account — set a name, email, and password.
3. If you want members or subscribers to be able to log in, run the **Configure SMTP** action and provide credentials. Ghost uses magic-link (email-based) authentication for members; without SMTP they cannot log in. The **Member/Subscriber Login** health check reports whether this is configured.
4. Start writing.

## Using Ghost

### Interfaces

- **Primary UI** — the public site. Share this address with readers and subscribers.
- **Admin UI** — the same Ghost instance opened at `/ghost`. Use this to publish, manage staff, configure themes, and connect integrations. Log in only at the primary URL (see **Set Primary Url** above); other URLs will fail with an origin mismatch.

### Actions

- **Set Primary Url** — pick which of your available Ghost URLs (LAN, Tor, custom domains) Ghost should treat as canonical. The chosen URL is used for outbound links, invite emails, RSS feeds, and is the only URL at which admin login is accepted. If your previously chosen URL ever disappears (e.g. a clearnet domain you removed), StartOS posts a critical task asking you to choose a new one before Ghost can run again.
- **Configure SMTP** — set the credentials Ghost uses to send account-related email (member magic links, staff invites, password resets). Choose system SMTP or supply your own host, port, username, password, and from-address.
- **Enable Tinfoil Mode / Disable Tinfoil Mode** — toggle Ghost's privacy hardening. With tinfoil mode on, Ghost will not contact third parties for Gravatars, update checks, RPC pings, structured data, or built-in integrations; some upstream UI elements that rely on these may not render. It is on by default.
- **Reset Owner Password** — generate a new random password for the site owner account and display it once. Use this to rotate the owner password or to recover access if you've lost it. Other staff accounts are unaffected.
