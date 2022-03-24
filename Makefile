ASSETS := $(shell yq e '.assets.[].src' manifest.yaml)
ASSET_PATHS := $(addprefix assets/,$(ASSETS))
VERSION := $(shell yq e ".version" manifest.yaml)

# delete the target of a rule if it has changed and its recipe exits with a nonzero exit status
.DELETE_ON_ERROR:

all: verify

verify: ghost.s9pk
	embassy-sdk verify s9pk ghost.s9pk

clean:
	rm -f image.tar
	rm -f ghost.s9pk

ghost.s9pk: manifest.yaml image.tar instructions.md $(ASSET_PATHS)
	embassy-sdk pack

image.tar: Dockerfile
	DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/ghost/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

