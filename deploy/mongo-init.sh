mongo -u "${MONGO_INITDB_ROOT_USERNAME}" -p "${MONGO_INITDB_ROOT_PASSWORD}" --authenticationDatabase "admin" <<EOF
use admin
db.createUser({
    user: '${MONGO_DATABASE_USERNAME}',
    pwd: '${MONGO_DATABASE_PASSWORD}',
    roles: [{ role: 'readWrite', db: '${MONGO_INITDB_DATABASE}' }],
});
EOF
