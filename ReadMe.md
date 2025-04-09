# DB Flyway Project

This repository contains a database migration project using Flyway. Below is the folder structure and its purpose:

## Folder Structure

```
.
├── apps
│   └── api
│       ├── app.go
│       ├── Dockerfile
│       ├── go.mod
│       ├── go.sum
│       └── routes
│           ├── albums.go
│           ├── analytics.go
│           ├── artists.go
│           └── songs.go
├── data
│   ├── awaiting
│   │   ├── R__SeedPlays.sql
│   │   ├── V002__Seed.sql
│   │   ├── V003__Plays.sql
│   │   ├── V004__MostPlays.sql
│   │   ├── V005__RemoveEps.sql
│   │   └── V006__AddEps.sql
│   ├── deploy.sh
│   ├── Dockerfile
│   ├── flyway.conf
│   └── sql
│       └── V001__InitialSchema.sql
├── docker-compose.flyway.yaml
├── docker-compose.pg.yaml
├── Makefile
└── ReadMe.md
```

The Makefile contains the following scripts
  
| Command     | Description                          |
|-------------|--------------------------------------|
| help        | Display help for common commands.   |
| help-all    | Display help for all commands.      |
| db          | Run database migrations.            |
| api         | Run API.                            |
| migrate     | Run database migrations.            |


## Order of play

```bash
make db
# Separate terminal
make api
# Separate terminal
make migration
```

API will be served from localhost:8080

## Contributing

Feel free to submit issues or pull requests to improve this project.

## License

This project is licensed under the MIT License.