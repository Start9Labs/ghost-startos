FROM ghost:5.130.5 AS build

COPY --chmod=0755 assets/scripts/docker_entrypoint.sh /usr/local/bin
COPY assets/scripts/local /var/lib/ghost/current/core/built/admin/assets/local

FROM node:18-bullseye-slim AS final

ENV NODE_ENV=production \
    GHOST_CLI_VERSION=1.28.3 \
    GHOST_INSTALL=/var/lib/ghost \
    GHOST_CONTENT=/var/lib/ghost/content

RUN set -eux; \
    apt-get update; apt-get install -y --no-install-recommends mariadb-server; \
    rm /etc/mysql/mariadb.conf.d/50-server.cnf; \
    rm -rf /var/lib/apt/lists/*

WORKDIR $GHOST_INSTALL
VOLUME $GHOST_CONTENT

COPY --from=build $GHOST_INSTALL $GHOST_INSTALL
COPY --from=build /usr/local/bin/gosu /usr/local/bin/
COPY --from=build /usr/local/bin/docker* /usr/local/bin/
COPY --from=build /usr/local/lib/node_modules/ghost-cli /usr/local/lib/node_modules/ghost-cli

RUN ln -sfn ../lib/node_modules/ghost-cli/bin/ghost /usr/local/bin/ghost; \
    ln -sfn $GHOST_INSTALL/versions/$(ls $GHOST_INSTALL/versions/ | sort -V | tail -n 1) $GHOST_INSTALL/current; \
    chown -R node:node $GHOST_INSTALL; \
    chmod 1777 $GHOST_CONTENT
