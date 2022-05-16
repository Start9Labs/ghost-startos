FROM arm64v8/ghost:4.41.1-alpine

RUN apk update
RUN apk add yq

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod +x /usr/local/bin/docker_entrypoint.sh
