mongo <<EOF
use admin
db.auth('${MONGO_INITDB_ROOT_USERNAME}', '${MONGO_INITDB_ROOT_PASSWORD}')
db.createUser({
    user: '${MONGO_DATABASE_USERNAME}',
    pwd: '${MONGO_DATABASE_PASSWORD}',
    roles: [{ role: 'readWrite', db: '${MONGO_INITDB_DATABASE}' }],
});
EOF
