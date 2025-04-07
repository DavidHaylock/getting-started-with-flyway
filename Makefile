GREEN := \033[0;32m
RED := \033[0;31m
NC := \033[0m  # No Color
INFO := @printf "$(GREEN)%s$(NC)\n"
ERROR := @printf "$(RED)%s$(NC)\n"

# Default target
all: help

help: ### Display help for common commands.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?###/ { printf "  $(GREEN)%-${HELP_INDENT}s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

help-all: ### Display help for all commands.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(GREEN)%-${HELP_INDENT}s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

db: ### Run database migrations.
	@$(INFO) "Running database migrations..."
	docker compose -f docker-compose.pg.yaml up

api: ### Run API.
	@$(INFO) "Running API..."
	cd apps/api && go run app.go

migrate: ### Run database migrations.
	@$(INFO) "Running database migrations..."
	docker compose -f docker-compose.flyway.yaml up --build --abort-on-container-exit
	@$(INFO) "Database migrations completed."
