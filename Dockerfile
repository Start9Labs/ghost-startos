FROM arm64v8/ghost:5.11.0-alpine

RUN apk add --no-cache curl yq mariadb && \
    rm -f /var/cache/apk/*

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
ADD ./check-web.sh /usr/local/bin/check-web.sh

RUN chmod a+x /usr/local/bin/*.sh
