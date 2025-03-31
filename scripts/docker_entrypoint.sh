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

    mysql_install_db --user=node --ldata=/var/lib/ghost/content/mysql >/dev/null

    tfile=$(mktemp)
    if [ ! -f "$tfile" ]; then
        return 1
    fi

    cat <<EOF >$tfile
USE mysql;
FLUSH PRIVILEGES ;
GRANT ALL ON *.* TO 'root'@'%' identified by '$DB_PASS' WITH GRANT OPTION ;
GRANT ALL ON *.* TO 'root'@'localhost' identified by '$DB_PASS' WITH GRANT OPTION ;
SET PASSWORD FOR 'root'@'localhost'=PASSWORD('${DB_PASS}') ;
DROP DATABASE IF EXISTS test ;
FLUSH PRIVILEGES ;
EOF

    /usr/sbin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --bootstrap --verbose=0 --skip-name-resolve --skip-networking=0 <$tfile
    rm -f $tfile

    echo
    echo 'MariaDB init process done. Ready for Ghost.'
    echo
fi

/usr/sbin/mysqld --user=node --datadir='/var/lib/ghost/content/mysql' --console --skip-name-resolve --skip-networking=0 &
db_process=$!

echo '** ADMIN URL **'
echo $ADMIN_URL

export url=$URL
export database__client=mysql
export database__connection__host=localhost
export database__connection__user=root
export database__connection__password=$DB_PASS
export portal__url="/ghost/assets/local/portal.min.js"
export sodoSearch__url="/ghost/assets/local/sodo-search.min.js"
export sodoSearch__styles="/ghost/assets/local/sodo-main.css"
export comments__url="/ghost/assets/local/comments-ui.min.js"
export comments__styles="/ghost/assets/local/comments-main.css"
export privacy__useUpdateCheck=false
export admin__url=$ADMIN_URL

if [ $TINFOIL = "true" ]; then
    export privacy__useTinfoil=true
    sed -i 's#https://zapier.com/#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
    sed -i 's#https://resources.ghost.io/#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
    sed -i 's#https://ghost.org/changelog.json#/#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
fi

sed -i 's#https://code.jquery.com/jquery-3.5.1.min.js#/ghost/assets/local/jquery-3.5.1.min.js#g' /var/lib/ghost/current/content/themes/*/default.hbs
sed -i 's#https://static.ghost.org/v5.0.0/images/publication-cover.jpg#'$URL'/ghost/assets/local/publication-cover.png#g' /var/lib/ghost/current/core/server/data/schema/default-settings/default-settings.json
sed -i 's#https://static.ghost.org/v4.0.0/images/feature-image.jpg#'$URL'/ghost/assets/local/feature-image.jpg#g' /var/lib/ghost/current/core/server/data/schema/fixtures/fixtures.json
sed -i 's#https://static.ghost.org/v4.0.0/images/ghost-orb-1.png#/ghost/assets/local/ghost-orb-1.png#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
sed -i 's#https://static.ghost.org/v4.0.0/images/ghost-orb-2.png#/ghost/assets/local/ghost-orb-2.png#g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
sed -i 's#gh-env-error#gh-env-error hidden#g; s#gh-upgrade-notification#gh-upgrade-notification hidden#g; s#gh-btn-notification-dot#gh-btn-notification-dot hidden#g; s@,\[24,"data-tooltip","Update available!"\],@,@g' /var/lib/ghost/current/core/built/admin/assets/ghost-*.js
sed -i 's#text-red-500 dark:text-red-400"#text-red-500 dark:text-red-400 hidden"#g;' current/core/built/admin/assets/admin-x-settings/modals-*.mjs

docker-entrypoint.sh node current/index.js &
ghost_process=$!

trap _term TERM
wait $db_process $ghost_process
