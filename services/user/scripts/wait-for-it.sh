#!/bin/bash
# wait-for-postgres.sh

set -e

cmd="$@"

until nc -z -v -w30 db 5432
do
  echo "waiting for db start..."
  sleep 5
done

>&2 echo "Postgres is up - executing command"
exec $cmd
