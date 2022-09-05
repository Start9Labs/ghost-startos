FROM arm64v8/ghost:5.12.3-alpine

RUN apk add --no-cache yq mariadb && \
    rm -f /var/cache/apk/*

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
ADD ./scripts/local /var/lib/ghost/current/core/built/admin/assets/local

RUN chmod a+x /usr/local/bin/*.sh
