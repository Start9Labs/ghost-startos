<p align="center">
  <img src="icon.png" alt="Ghost Logo" width="21%">
</p>

# Ghost on StartOS

> Everything not listed in this document should behave the same as upstream
> Ghost. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Ghost](https://github.com/TryGhost/ghost) is a publishing platform. This package bundles the MySQL database it needs as a private sidecar, generates its credentials, and turns off the parts of Ghost that reach out to third parties.

- **Upstream repo:** <https://github.com/TryGhost/ghost>
- **Wrapper repo:** <https://github.com/Start9Labs/ghost-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

Two upstream images, unmodified. The database is bundled rather than declared as a dependency, so it belongs to this service alone.

| Property      | Value            |
| ------------- | ---------------- |
| Images        | `ghost`, `mysql` |
| Architectures | x86_64, aarch64  |
| Entrypoint    | Each image's own |

| Subcontainer      | Purpose                                                          |
| ----------------- | ---------------------------------------------------------------- |
| `ghost-sub`       | The `ghost` daemon — the application, and the one to `attach` to |
| `db-sub`          | The private MySQL database                                       |
| `hash-password`   | Temporary; hashes a new password during the reset action         |
| `update-password` | Temporary; writes that hash into the database                    |

MySQL binds loopback only, inside the service's own network namespace.

## Volume and Data Layout

Four volumes, and two of them never enter the application's container.

| Volume    | Mount Point                  | Purpose                                      |
| --------- | ---------------------------- | -------------------------------------------- |
| `content` | `/var/lib/ghost/content`     | Themes, images, and uploaded files           |
| `mysql`   | `/var/lib/mysql` in `db-sub` | The MySQL data directory                     |
| `startos` | — (host side)                | `store.json`; never mounted into a container |
| `config`  | — (unused at runtime)        | Declared and backed up                       |

## File Models

One model, and it holds the values Ghost's own configuration file would otherwise carry.

| File         | Format | Modelled                | Written by                           |
| ------------ | ------ | ----------------------- | ------------------------------------ |
| `store.json` | JSON   | Yes — `FileHelper.json` | Install, every init, and the actions |

| Key                                  | Set by                                | Notes                                                           |
| ------------------------------------ | ------------------------------------- | --------------------------------------------------------------- |
| `env.database__connection__password` | Install                               | The bundled database's root password; also used to take backups |
| `env.url`                            | Init, then the Set Primary URL action | The address Ghost builds every link and invite from             |
| `env.privacy__useTinfoil`            | The Tinfoil action                    | Defaults to **on**                                              |
| `smtp`                               | The Configure SMTP action             | StartOS's system SMTP, your own server, or disabled             |

`env.url` is handled by init in two different ways depending on what it finds. If nothing is stored, init picks the `.local` address. If something **is** stored and it is no longer one of the published addresses, init does not silently replace it — it raises a `critical` task instead, because every link Ghost has already published was built from that value.

**No configuration file reaches the application.** Ghost is configured entirely by environment, composed on each start, and that is where this package's overrides live:

| Variable                            | Value                           | Why it differs from leaving Ghost alone                                                                                                    |
| ----------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `privacy__useTinfoil`               | `true` at install               | Disables the built-in features that would reach third parties — Gravatar, update checks, RPC pings, structured data, external integrations |
| `privacy__useUpdateCheck`           | `false`                         | Updates come from the registry, not from Ghost's own check                                                                                 |
| `security__staffDeviceVerification` | `false`                         | Device verification emails a code, which a server with no SMTP cannot send — leaving staff unable to sign in                               |
| `referrerPolicy`                    | `no-referrer`                   | Outbound links do not carry the site's address                                                                                             |
| `database__*`                       | Points at the bundled MySQL     | Wiring                                                                                                                                     |
| `mail__*`                           | Derived from the SMTP selection | Absent unless configured                                                                                                                   |

## Dependencies

None. MySQL is bundled as a private sidecar rather than declared as a dependency, so it is not shared with any other service.

## Network Access and Interfaces

Two interfaces on one binding — the same port, distinguished by path.

| Interface  | Id        | Type | Port | Path     | Description                  |
| ---------- | --------- | ---- | ---- | -------- | ---------------------------- |
| Primary UI | `primary` | ui   | 2368 | `/`      | The published site           |
| Admin UI   | `admin`   | ui   | 2368 | `/ghost` | The editor and site settings |

Both are exported from one host, so they are enabled and exposed together.

**Admin login only works at the primary URL.** Ghost validates the address the admin session was started from, so reaching `/ghost` at any other published address fails to log in — which is what the Admin Portal health check reports.

## Installation and First-Run Flow

Install generates the database password and chooses a primary URL from the interface's published addresses, preferring the `.local` one. No task is raised on a fresh install and no credential is shown: the owner account is created inside Ghost, on the first visit to `/ghost`.

Two things are worth knowing before that first visit:

- **The first start is slow.** MySQL initialises a fresh data directory and Ghost then creates its schema; both health checks report `loading` with an explanatory message throughout, which is expected rather than a fault.
- **The primary URL decides where you can log in.** If you intend to reach the site at a domain rather than the `.local` address, set it before creating the owner account and publishing anything.

Email is not configured until you run [Configure SMTP](#actions), and without it members and subscribers cannot log in at all.

## Actions

Four actions, all user-facing.

### Set Primary URL

Chooses which published address Ghost treats as its own — links, invites, and the admin login.

- **What it changes:** `env.url` in `store.json`.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent, but not consequence-free once the site is in use: content already published carries the old address, and the admin login moves with it.
- **Input:** a dropdown of the interface's non-local addresses.

### Enable / Disable Tinfoil Mode

Toggles Ghost's privacy mode. The action's name flips to describe what running it will do.

- **What it changes:** `env.privacy__useTinfoil` in `store.json`.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent in both directions.
- **Worth knowing:** with it on, some parts of Ghost's interface do not render, because the features they depend on are the ones being disabled. That is the trade rather than a fault.

### Configure SMTP

Sets up outbound email.

- **What it changes:** `smtp` in `store.json`; the credentials become Ghost's mailer environment on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled.
- **What it unlocks:** member and subscriber login, which is passwordless and therefore impossible without email. The Member Login health check reports which state you are in.

### Reset Owner Password

Generates a new password for the site owner. Run it when locked out; other staff accounts are untouched.

- **What it changes:** the owner's password hash in the database, and sets that account active.
- **Availability:** only while the service is running, because it goes through the live database.
- **Repeat safety:** safe to re-run; each run generates a fresh password.
- **Outputs:** the new password, masked and copyable, shown once.

## Tasks

One task, and it cannot appear on a fresh install.

| Task            | Severity   | Raised when                                                    | Cleared when    |
| --------------- | ---------- | -------------------------------------------------------------- | --------------- |
| Set Primary Url | `critical` | A primary URL was set, and that address is no longer published | The action runs |

Init picks an address when none is stored, so this only fires when one that was in use goes away — a domain removed, for instance. `critical` because the address is embedded in published content and is where admin login is accepted, so the package asks rather than choosing a replacement for you.

## Health Checks

Four checks, and two of them are status displays rather than fault detectors.

| Check          | Displayed                 | Reports                                                       |
| -------------- | ------------------------- | ------------------------------------------------------------- |
| `mysql`        | "Ghost Database"          | Whether the database answers a query                          |
| `ghost`        | "Ghost Server"            | Whether Ghost's schema is initialised, read from the database |
| `admin-portal` | "Admin Portal"            | The URL at which admin login will succeed                     |
| `members`      | "Member/Subscriber Login" | `disabled` until SMTP is configured                           |

**`ghost` distinguishes initialising from broken.** It looks for a specific row in Ghost's settings table: present means ready, a connection error or missing database means still initialising — reported as `loading`, with a message saying a fresh schema can take a while — and anything else is a real failure.

**`admin-portal` always succeeds**, and exists to answer the most common confusion this package produces: admin login only works at one address, and the check names it.

**`members` showing `disabled` is not a fault.** Member login is passwordless, so it needs SMTP; the check names the action that would enable it.

## Backups and Restore

Mixed, and the distinction decides what a restore gives you.

- **`mysql` is dumped, not copied.** `Backups.withMysqlDump` takes a logical dump of the `ghost` database, authenticating with the password from `store.json`. The volume's files are never captured; a restore replays the dump into a fresh database.
- **`content`, `config`, and `startos` are copied wholesale** — themes, images, uploads, and `store.json` with the database password, primary URL, and SMTP settings.

The two halves are not independent: the dump is taken with a credential that lives in `store.json`, so a backup missing that file could not be restored.

**Restore is complete** — posts, members, staff accounts, themes, and uploads all return. If the restored server does not publish the address the backup recorded, the task above asks you to choose a new one before links and admin login work.

## Limitations and Differences

1. **MySQL is a private sidecar.** It cannot be shared with another service or replaced with an external database.
2. **Admin login works only at the primary URL.** Reaching `/ghost` at another published address will not authenticate.
3. **Tinfoil mode is on by default**, and some interface elements do not render as a result.
4. **Ghost's own update check is disabled.** Updates arrive through the StartOS registry.
5. **Staff device verification is off**, because it depends on email that a server without SMTP cannot send.
6. **Members and subscribers cannot log in without SMTP**, since their login is passwordless.
7. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: ghost
image: ghost # plus mysql
architectures:
  - x86_64
  - aarch64
subcontainers:
  - ghost-sub # the application; the one to attach to
  - db-sub # private MySQL
  - hash-password # temporary; the Reset Owner Password action
  - update-password # temporary; the Reset Owner Password action
volumes:
  content: /var/lib/ghost/content
  mysql: /var/lib/mysql (in db-sub)
  startos: host side (store.json)
  config: unused at runtime; backed up
file_models:
  - store.json
startos_managed_env_vars:
  - NODE_ENV
  - url
  - database__client
  - database__connection__host
  - database__connection__password
  - database__connection__database
  - privacy__useTinfoil
  - privacy__useUpdateCheck
  - security__staffDeviceVerification
  - referrerPolicy
  - MYSQL_ROOT_PASSWORD # db-sub
  - MYSQL_DATABASE # db-sub
  - mail__transport # when SMTP is configured
  - mail__options__host # when SMTP is configured
  - mail__options__port # when SMTP is configured
  - mail__options__auth__user # when SMTP is configured
  - mail__options__auth__pass # when SMTP is configured
  - mail__options__secure # when SMTP is configured with implicit TLS
  - mail__from # when SMTP is configured
dependencies: []
interfaces:
  primary: { type: ui, port: 2368 }
  admin: { type: ui, port: 2368 } # same binding, path /ghost
actions:
  - set-primary-url
  - set-tinfoil
  - manage-smtp
  - reset-password # only-running
tasks:
  - { action: set-primary-url, severity: critical }
health_checks:
  - mysql # displayed "Ghost Database"
  - ghost # displayed "Ghost Server"
  - admin-portal # displayed "Admin Portal"; informational
  - members # displayed "Member/Subscriber Login"; informational
```
