# Updating the upstream version

Ghost is the wrapped application; its complete version determines the upstream portion of the StartOS version. The package also bundles MySQL as its database. Both official images are pulled from Docker Hub and pinned by tag in the same manifest. A MySQL update is maintenance, not a trigger for an upstream Ghost bump.

## Determining the upstream version

### Ghost

- Image: [`library/ghost`](https://hub.docker.com/_/ghost) on Docker Hub.
- List recent Alpine tags:
  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/library/ghost/tags?page_size=20&ordering=last_updated" \
    | jq -r '.results[].name' | grep -E '^[0-9]+\.[0-9]+\.[0-9]+-alpine$' | sort -Vr
  ```
- Check the [Ghost tag list](https://github.com/TryGhost/Ghost/tags) for the newest stable release, and verify its exact Alpine tag through Docker Hub's tag API before pinning it.
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
