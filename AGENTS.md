# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **`security__staffDeviceVerification` must stay `false`.** Ghost emails a verification code, so on a server without SMTP enabling it locks staff out entirely rather than degrading gracefully.
- **Init must not silently replace a stored `url` that has gone away** — it raises the `critical` task instead. Only an _unset_ url gets the `.local` fallback. Published content and the admin login are both built from that value, so choosing a replacement on the user's behalf rewrites where their site claims to live.
- **`reset-password` needs both temp subcontainers.** The hash is produced with the Ghost image's own bcrypt so it matches what Ghost verifies against, and the write goes through the MySQL image. Don't collapse them into one.
- **The `ghost` health check reads the database, not an HTTP endpoint.** It looks for the `db_hash` settings row, which is what distinguishes "schema still initialising" from "actually broken" — an HTTP probe cannot tell those apart on a first start.
- **The database password lives in `store.json` on the `startos` volume and is what backups authenticate with.** A change to where it is stored breaks `backups.ts` as well as `main`.
