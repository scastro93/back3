CURRENT_DIRECTORY=$(shell pwd)

BASE_COMPOSE=-f $(CURRENT_DIRECTORY)/docker-compose.yml

# Build services or build single service with service=name
build:
	@docker-compose $(BASE_COMPOSE) build $(service)
