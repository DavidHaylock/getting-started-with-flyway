#!/bin/bash
set -e

DATABASE_URL="jdbc:postgresql://$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB"
echo "DB URL: $DATABASE_URL"

flyway migrate -X \
  -url=$DATABASE_URL \
  -user=$POSTGRES_USER \
  -password=$POSTGRES_PASSWORD \
  -locations="filesystem:sql" \
  -baselineOnMigrate=true \
  -connectRetries=60