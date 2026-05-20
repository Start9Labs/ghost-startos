# Updating the upstream version

Ghost ships with two upstream sources: Ghost itself (the official Alpine image) and MySQL (the official image used as its database). Both are pulled from Docker Hub and pinned by tag in the same manifest.

## Determining the upstream version

### Ghost

- Image: [`library/ghost`](https://hub.docker.com/_/ghost) on Docker Hub.
- List recent Alpine tags:
  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/library/ghost/tags?page_size=20&ordering=last_updated" \
    | jq -r '.results[].name' | grep -- '-alpine$'
  ```
- Current pin: `images.ghost.source.dockerTag` in `startos/manifest/index.ts` (format: `ghost:<version>-alpine`).

### MySQL

- Image: [`library/mysql`](https://hub.docker.com/_/mysql) on Docker Hub.
- List recent tags:
  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/library/mysql/tags?page_size=20&ordering=last_updated" \
    | jq -r '.results[].name'
  ```
- Current pin: `images.mysql.source.dockerTag` in `startos/manifest/index.ts` (format: `mysql:<version>`).
- Bump only when intentionally moving MySQL — keep the major version aligned with what the targeted Ghost release supports.

## Applying the bump

In `startos/manifest/index.ts`, update the relevant `dockerTag`:

- Ghost: `ghost:<new version>-alpine`
- MySQL: `mysql:<new version>`
