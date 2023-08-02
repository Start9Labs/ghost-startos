FROM ghost:5.45.1

ENV YQ_VERSION v4.25.1

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends wget ca-certificates nginx mariadb-server mariadb-client; \
    rm /etc/mysql/mariadb.conf.d/50-server.cnf; \
    rm -rf /var/lib/apt/lists/*; \
    \
    dpkgArch="$(dpkg --print-architecture | awk -F- '{ print $NF }')"; \
    wget -O /usr/local/bin/yq "https://github.com/mikefarah/yq/releases/download/$YQ_VERSION/yq_linux_$dpkgArch"; \
    chmod +x /usr/local/bin/yq;

COPY start-ghost.sh /usr/local/bin
COPY docker_entrypoint.sh /usr/local/bin
RUN chmod a+x /usr/local/bin/*.sh
COPY scripts/local /var/lib/ghost/current/core/built/admin/assets/local
