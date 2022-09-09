#!/bin/sh

set -ea

_term() { 
  echo "Caught TERM signal!" 
  kill -TERM "$db_process" 2>/dev/null
  kill -TERM "$ghost_process" 2>/dev/null
}

if [ -d "/run/mysqld" ]; then
	echo "[i] mysqld already present, skipping creation"
	chown -R node:node /run/mysqld
else
	echo "[i] mysqld not found, creating...."
	mkdir -p /run/mysqld
	chown -R node:node /run/mysqld
fi

if [ -d /var/lib/ghost/content/mysql/mysql ]; then
	echo "[i] MariaDB directory already present, skipping creation"
	chown -R node:node /var/lib/ghost/content/mysql
else
	echo "[i] MariaDB data directory not found, creating initial DBs"

	mkdir -p /var/lib/ghost/content/mysql
    chown -R node:node /var/lib/ghost/content/mysql

	mysql_install_db --user=node --ldata=/var/lib/ghost/content/mysql > /dev/null

	if [ "$MYSQL_ROOT_PASSWORD" = "" ]; then
		MYSQL_ROOT_PASSWORD=$(cat /dev/urandom | base64 | head -c 16)
		echo "[i] MariaDB root Password: $MYSQL_ROOT_PASSWORD"
	fi

	MYSQL_PASSWORD=${MYSQL_PASSWORD:-""}

    tfile=$(mktemp)
    if [ ! -f "$tfile" ]; then
        return 1
    fi

    cat << EOF > $tfile
USE mysql;
FLUSH PRIVILEGES ;
GRANT ALL ON *.* TO 'root'@'%' identified by '$MYSQL_ROOT_PASSWORD' WITH GRANT OPTION ;
GRANT ALL ON *.* TO 'root'@'localhost' identified by '$MYSQL_ROOT_PASSWORD' WITH GRANT OPTION ;
SET PASSWORD FOR 'root'@'localhost'=PASSWORD('${MYSQL_ROOT_PASSWORD}') ;
DROP DATABASE IF EXISTS test ;
FLUSH PRIVILEGES ;
EOF
	mkdir -p /var/lib/ghost/content/start9
	cat << EOF > /var/lib/ghost/content/start9/stats.yaml
data:
  MariaDB root password:
    copyable: true
    description: Remember that you are always the one in control. This is your MariaDB root password. Use it with caution!
    masked: true
    qr: false
    type: string
    value: $MYSQL_ROOT_PASSWORD
version: 2
EOF
 
    /usr/sbin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --bootstrap --verbose=0 --skip-name-resolve --skip-networking=0 < $tfile
    rm -f $tfile

	echo
	echo 'MariaDB init process done. Ready for Ghost.'
	echo
fi

/usr/sbin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --console --skip-name-resolve --skip-networking=0 &
db_process=$!

TOR_ADDRESS=$(yq e .tor-address /var/lib/ghost/content/start9/config.yaml)
LAN_ADDRESS=$(echo "$TOR_ADDRESS" | sed -r 's/(.+)\.onion/\1.local/g')
TOR_ADDR="http://$TOR_ADDRESS"
LAN_ADDR="https://$LAN_ADDRESS"


export url=$TOR_ADDR
export database__client=mysql
export database__connection__host=localhost
export database__connection__user=root
export database__connection__password="$(yq e '.data.MariaDB*.value' /var/lib/ghost/content/start9/stats.yaml)"
export portal__url="/ghost/assets/local/portal.min.js"
export sodoSearch__url="/ghost/assets/local/sodo-search.min.js"
export sodoSearch__styles="/ghost/assets/local/sodo-main.css"
export comments__url="/ghost/assets/local/comments-ui.min.js"
export comments__styles="/ghost/assets/local/comments-main.css"

if [ "$(yq e .useTinfoil /var/lib/ghost/content/start9/config.yaml)" = "true" ]; then
    export privacy__useTinfoil=true
    sed -i 's#https://zapier.com/#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
    sed -i 's#https://resources.ghost.io/#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
    sed -i 's#https://ghost.org/changelog.json#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
fi

sed -i 's#https://code.jquery.com/jquery-3.5.1.min.js#/ghost/assets/local/jquery-3.5.1.min.js#g' /var/lib/ghost/current/content/themes/casper/default.hbs
sed -i 's#https://static.ghost.org/v4.0.0/images/publication-cover.jpg#'$LAN_ADDR'/ghost/assets/local/publication-cover.png#g' /var/lib/ghost/current/core/server/data/schema/default-settings/default-settings.json
sed -i 's#https://static.ghost.org/v4.0.0/images/feature-image.jpg#'$LAN_ADDR'/ghost/assets/local/feature-image.jpg#g' /var/lib/ghost/current/core/server/data/schema/fixtures/fixtures.json
sed -i 's#https://static.ghost.org/v4.0.0/images/ghost-orb-1.png#/ghost/assets/local/ghost-orb-1.png#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
sed -i 's#https://static.ghost.org/v4.0.0/images/ghost-orb-2.png#/ghost/assets/local/ghost-orb-2.png#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js

start-ghost.sh node current/index.js &
ghost_process=$!

trap _term TERM
wait $db_process $ghost_process
