FROM flyway/flyway:latest as db-init

WORKDIR /app

ARG FLYWAY_EDITION
ENV FLYWAY_EDITION="community"

COPY ./flyway.conf ./flyway.conf
COPY ./deploy.sh ./deploy.sh
COPY ./sql ./sql

ENTRYPOINT [ "./deploy.sh" ] 