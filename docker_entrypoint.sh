#!/bin/sh

set -ea

_term() { 
  echo "Caught SIGTERM signal!" 
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
 
    /usr/bin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --bootstrap --verbose=0 --skip-name-resolve --skip-networking=0 < $tfile
    rm -f $tfile

	echo
	echo 'MariaDB init process done. Ready for Ghost.'
	echo
fi

/usr/bin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --console --skip-name-resolve --skip-networking=0 &
db_process=$!

export url="http://$(yq e .tor-address /var/lib/ghost/content/start9/config.yaml)"
export database__client=mysql
export database__connection__host=localhost
export database__connection__user=root
export database__connection__password="$(yq e '.data.MariaDB*.value' /var/lib/ghost/content/start9/stats.yaml)"

if [ "$(yq e .useTinfoil /var/lib/ghost/content/start9/config.yaml)" = "true" ]; then
    export privacy__useTinfoil=true
fi

docker-entrypoint.sh node current/index.js &
frontend_process=$!

trap _term SIGTERM
wait -n $db_process $ghost_process
