FROM ghost:5.75.1

ENV YQ_VERSION v4.25.1
RUN set -eux; \
	apt-get update; \
	savedAptMark="$(apt-mark showmanual)"; \
	apt-get install -y --no-install-recommends ca-certificates gnupg wget; \
	rm -rf /var/lib/apt/lists/*; \
	\
	dpkgArch="$(dpkg --print-architecture | awk -F- '{ print $NF }')"; \
    wget -O /usr/local/bin/yq "https://github.com/mikefarah/yq/releases/download/$YQ_VERSION/yq_linux_$dpkgArch"; \
    chmod +x /usr/local/bin/yq; \
	apt-get remove --purge -y ca-certificates gnupg wget; \
    apt-mark auto '.*' > /dev/null; \
	[ -z "$savedAptMark" ] || apt-mark manual $savedAptMark > /dev/null; \
	apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false;

RUN set -eux; \
    apt-get update; \
	apt-get install -y --no-install-recommends mariadb-server mariadb-client; \
    rm /etc/mysql/mariadb.conf.d/50-server.cnf; \
	rm -rf /var/lib/apt/lists/*;

COPY --chmod=a+x docker_entrypoint.sh /usr/local/bin
COPY scripts/local /var/lib/ghost/current/core/built/admin/assets/local
