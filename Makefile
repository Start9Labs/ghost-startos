ID_NAME := $(shell yq e ".id" manifest.yaml)
VERSION := $(shell yq e ".version" manifest.yaml)
TS_FILES := $(shell find ./ -name \*.ts)

# delete the target of a rule if it has changed and its recipe exits with a nonzero exit status
.DELETE_ON_ERROR:

all: verify

install:
	embassy-cli package install $(ID_NAME).s9pk

verify: $(ID_NAME).s9pk
	@embassy-sdk verify s9pk $(ID_NAME).s9pk
	@echo " Done!"
	@echo "   Filesize: $(shell du -h $(ID_NAME).s9pk) is ready"


clean:
	rm -f image.tar
	rm -f $(ID_NAME).s9pk
	rm -f scripts/*.js
	rm -rf docker-images

# download/update latest dependencies scripts to be hosted locally
update:
	curl https://code.jquery.com/jquery-3.5.1.min.js --output scripts/local/jquery-3.5.1.min.js
	curl https://cdn.jsdelivr.net/npm/@tryghost/portal/umd/portal.min.js --output scripts/local/portal.min.js
	curl https://cdn.jsdelivr.net/npm/@tryghost/sodo-search/umd/sodo-search.min.js --output scripts/local/sodo-search.min.js
	curl https://cdn.jsdelivr.net/npm/@tryghost/sodo-search/umd/main.css --output scripts/local/sodo-main.css
	curl https://cdn.jsdelivr.net/npm/@tryghost/comments-ui/umd/comments-ui.min.js --output scripts/local/comments-ui.min.js
	curl https://cdn.jsdelivr.net/npm/@tryghost/comments-ui/umd/main.css --output scripts/local/comments-main.css

$(ID_NAME).s9pk: manifest.yaml instructions.md icon.png LICENSE scripts/embassy.js docker-images/aarch64.tar docker-images/x86_64.tar
	@if ! [ -z "$(ARCH)" ]; then cp docker-images/$(ARCH).tar image.tar; echo "* image.tar compiled for $(ARCH)"; fi
	embassy-sdk pack

docker-images/aarch64.tar: Dockerfile docker_entrypoint.sh
	mkdir -p docker-images
	DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/$(ID_NAME)/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=docker-images/aarch64.tar .

docker-images/x86_64.tar: Dockerfile docker_entrypoint.sh
	mkdir -p docker-images
	DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/$(ID_NAME)/main:$(VERSION) --platform=linux/amd64 -o type=docker,dest=docker-images/x86_64.tar .

scripts/embassy.js: $(TS_FILES)
	deno bundle scripts/embassy.ts scripts/embassy.js
