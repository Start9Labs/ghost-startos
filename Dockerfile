FROM ghost:5.110.4 AS build

RUN apt-get update; apt-get install -y --no-install-recommends ca-certificates wget; \
    dpkgArch="$(dpkg --print-architecture | awk -F- '{ print $NF }')"; \
    wget -O /usr/local/bin/yq "https://github.com/mikefarah/yq/releases/download/v4.25.1/yq_linux_$dpkgArch"; \
    chmod +x /usr/local/bin/yq; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/*

COPY --chmod=0755 scripts/docker_entrypoint.sh /usr/local/bin
COPY scripts/local /var/lib/ghost/current/core/built/admin/assets/local

FROM node:18-bullseye-slim AS final

ENV NODE_ENV=production \
    GHOST_CLI_VERSION=1.27.0 \
    GHOST_INSTALL=/var/lib/ghost \
    GHOST_CONTENT=/var/lib/ghost/content

RUN set -eux; \
    apt-get update; apt-get install -y --no-install-recommends mariadb-server; \
    rm /etc/mysql/mariadb.conf.d/50-server.cnf; \
    rm -rf /var/lib/apt/lists/*

WORKDIR $GHOST_INSTALL
VOLUME $GHOST_CONTENT

COPY --from=build $GHOST_INSTALL $GHOST_INSTALL
COPY --from=build /usr/local/bin/yq /usr/local/bin/
COPY --from=build /usr/local/bin/gosu /usr/local/bin/
COPY --from=build /usr/local/bin/docker* /usr/local/bin/
COPY --from=build /usr/local/lib/node_modules/ghost-cli /usr/local/lib/node_modules/ghost-cli

RUN ln -sfn ../lib/node_modules/ghost-cli/bin/ghost /usr/local/bin/ghost; \
    ln -sfn $GHOST_INSTALL/versions/$(ls $GHOST_INSTALL/versions/ | sort -V | tail -n 1) $GHOST_INSTALL/current; \
    chown -R node:node $GHOST_INSTALL; \
    chmod 1777 $GHOST_CONTENT
