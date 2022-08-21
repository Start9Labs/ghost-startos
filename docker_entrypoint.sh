#!/bin/sh

export url="http://$(yq e .tor-address /var/lib/ghost/content/start9/config.yaml)"
export database__client=sqlite3
export database__connection__filename=/var/lib/ghost/content/data/ghost.db

exec tini docker-entrypoint.sh node current/index.js
