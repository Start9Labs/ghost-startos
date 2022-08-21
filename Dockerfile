FROM arm64v8/ghost:5.10.1-alpine

RUN apk update
RUN apk add --no-cache curl tini yq sqlite

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
ADD ./check-web.sh /usr/local/bin/check-web.sh
RUN chmod +x /usr/local/bin/check-web.sh
