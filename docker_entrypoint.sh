#!/bin/bash

export url="http://$(yq e .tor-address /var/lib/ghost/content/start9/config.yaml)"

docker-entrypoint.sh node current/index.js
