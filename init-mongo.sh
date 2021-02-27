#!/bin/bash
set -e

mongo <<EOF
use xelakticDB
db.createUser({
  user:  '$MONGO_INITDB_ROOT_USERNAME',
  pwd: '$MONGO_INITDB_ROOT_PASSWORD',
  roles: [
   {
      role: 'userAdmin',
      db: 'xelakticDB'
    },
    {
      role: 'readWrite',
      db: 'xelakticDB'
    }
  ]
})
EOF
