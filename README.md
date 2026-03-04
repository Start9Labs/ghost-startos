<p align="center">
  <img src="icon.png" alt="Ghost Logo" width="21%">
</p>

# Ghost on StartOS

> **Upstream docs:** <https://docs.ghost.org/>
>
> Everything not listed in this document should behave the same as upstream
> Ghost. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable.

[Ghost](https://github.com/TryGhost/ghost) is a professional publishing platform for creating blogs, newsletters, and membership sites. It provides a modern editor, subscription management, and flexible content APIs.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Dependencies](#dependencies)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| Ghost Image | `ghost` (upstream unmodified, alpine variant) |
| MySQL Image | `mysql:lts` (upstream unmodified) |
| Architectures | x86_64, aarch64 |
| Runtime | Two containers (Ghost + MySQL) |

**StartOS runs Ghost with a co-located MySQL database.** Both containers are managed automatically; users do not interact with MySQL directly.

---

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `content` | `/var/lib/ghost/content` | Themes, images, uploads, and content |
| `config` | — | Reserved for configuration |
| `mysql` | `/var/lib/mysql` | MySQL database storage |
| `startos` | — | StartOS-managed state (`store.json`) |

**StartOS-specific files:**

- `store.json` — contains primary URL, database password, tinfoil mode, and SMTP settings

---

## Installation and First-Run Flow

| Step | Upstream | StartOS |
|------|----------|---------|
| Database setup | Manual MySQL/SQLite configuration | Automatic MySQL provisioning |
| Initial URL | Set in config file | Select via "Set Primary URL" action |
| Owner account | Create via `/ghost/#/setup/` | Same as upstream |

**Key differences:**

1. Database is automatically configured — no manual setup required
2. After installation, run "Set Primary URL" to select which URL Ghost uses for links and invites
3. Visit `/ghost/` path to create your owner account (same as upstream)

---

## Configuration Management

### Environment Variables (Managed by StartOS)

| Variable | Upstream Default | StartOS Value |
|----------|------------------|---------------|
| `NODE_ENV` | `development` | `production` |
| `database__client` | `mysql` | `mysql` (fixed) |
| `database__connection__host` | Configurable | `localhost` (fixed) |
| `database__connection__password` | Configurable | Auto-generated |
| `database__connection__database` | Configurable | `ghost` (fixed) |
| `privacy__useTinfoil` | `false` | Configurable via action |
| `privacy__useUpdateCheck` | `true` | `false` (forced) |
| `security__staffDeviceVerification` | `true` | `false` (forced) |
| `referrerPolicy` | `origin-when-crossorigin` | `no-referrer` (forced) |
| `url` | Configurable | Selected via action |

### Configuration NOT Exposed on StartOS

| Feature | Upstream Support | StartOS |
|---------|------------------|---------|
| External database | Supported | Not available |
| Storage adapters | S3, Cloudinary, Azure, etc. | Local only |
| Cache adapters | Redis, etc. | In-memory only |
| Custom content paths | Configurable | Fixed |
| Image optimization | Configurable | Default settings |
| Logging configuration | Configurable | stdout (default) |

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
|-----------|------|----------|---------|
| Primary UI | 2368 | HTTP | Ghost publishing platform |
| Admin UI | 2368 | HTTP | Available at `/ghost/` path |

**Access methods (StartOS 0.4.0):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

---

## Actions (StartOS UI)

### Set Primary URL

| Property | Value |
|----------|-------|
| ID | `set-primary-url` |
| Name | Set Primary Url |
| Visibility | Enabled |
| Availability | Any status |
| Purpose | Select which URL Ghost uses for links and invites |

**How it works:** Presents a dropdown of all available URLs for your Ghost instance (LAN, Tor, custom domains). Ghost uses this URL when generating links in emails, RSS feeds, and the admin panel.

### Configure SMTP

| Property | Value |
|----------|-------|
| ID | `manage-smtp` |
| Name | Configure SMTP |
| Visibility | Enabled |
| Availability | Any status |
| Purpose | Enable email sending for invites and notifications |

**Options:**

- **Disabled** — No email sending
- **System SMTP** — Use StartOS system SMTP server (if configured)
- **Custom** — Enter your own SMTP credentials

### Enable/Disable Tinfoil Mode

| Property | Value |
|----------|-------|
| ID | `set-tinfoil` |
| Name | Enable Tinfoil Mode / Disable Tinfoil Mode |
| Visibility | Enabled |
| Availability | Any status |
| Purpose | Toggle privacy protection mode |

**What Tinfoil Mode disables:**

- Gravatar (profile images)
- Update checks (already disabled on StartOS)
- RPC pinging
- Structured data
- Third-party integrations

**Warning:** Enabling Tinfoil Mode may prevent certain parts of the Ghost UI from rendering properly.

---

## Dependencies

None. Ghost runs with its own co-located MySQL database.

---

## Backups and Restore

**Included in backup:**

- `content` volume — themes, images, uploads
- `config` volume — configuration data
- `mysql` volume — full MySQL database
- `startos` volume — StartOS state

**Restore behavior:**

- All content, settings, and accounts are restored
- Database is fully preserved

---

## Health Checks

| Check | Display Name | Method |
|-------|--------------|--------|
| Web UI | Ghost UI | Port listening on 2368 |
| Database | Ghost Database | MySQL query for initialization status |

**Messages:**

- UI Success: "The web UI is ready"
- UI Error: "The web UI is not ready"
- DB Initializing: "Database initializing. This can take a while..."
- DB Success: "The database is ready"
- DB Error: "The database is not ready"

---

## Limitations and Differences

1. **No ActivityPub integration** — Ghost's federation features are not available on StartOS
2. **No external database** — cannot connect to remote MySQL servers
3. **Local storage only** — S3, Cloudinary, and other storage adapters not available
4. **In-memory cache only** — Redis and other cache adapters not available
5. **Update checks disabled** — `privacy__useUpdateCheck` forced to `false`
6. **Staff device verification disabled** — `security__staffDeviceVerification` forced to `false` for compatibility
7. **Strict referrer policy** — `referrerPolicy` set to `no-referrer` for privacy
8. **URL via action** — primary URL selected through StartOS action instead of config file

---

## What Is Unchanged from Upstream

- Full Ghost publishing experience (posts, pages, tags)
- Modern content editor
- Membership and subscription management
- Newsletter functionality (requires SMTP configuration)
- Theme system and customization
- Content API and Admin API
- SEO features
- Social integrations
- Import/export functionality
- Multi-author support
- Role-based permissions
- All admin panel features at `/ghost/`

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: ghost
images:
  ghost: ghost (alpine variant)
  mysql: mysql:lts
architectures: [x86_64, aarch64]
volumes:
  content: /var/lib/ghost/content
  config: (reserved)
  mysql: /var/lib/mysql
  startos: (StartOS state)
ports:
  ui: 2368
dependencies: none
forced_config:
  NODE_ENV: production
  database__client: mysql
  database__connection__host: localhost
  database__connection__database: ghost
  privacy__useUpdateCheck: "false"
  security__staffDeviceVerification: "false"
  referrerPolicy: no-referrer
startos_managed_config:
  - url (via set-primary-url action)
  - privacy__useTinfoil (via set-tinfoil action)
  - mail__* (via manage-smtp action)
  - database__connection__password (auto-generated)
actions:
  - set-primary-url (enabled, any)
  - manage-smtp (enabled, any)
  - set-tinfoil (enabled, any)
health_checks:
  - port_listening: 2368 (Ghost UI)
  - mysql_query: db_hash check (Ghost Database)
backup_volumes:
  - content
  - config
  - mysql
  - startos
not_available:
  - ActivityPub federation
  - External database connections
  - Storage adapters (S3, Cloudinary, etc.)
  - Cache adapters (Redis, etc.)
  - Custom content paths
```
