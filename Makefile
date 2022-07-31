install: install-deps

start:
	CI=false DISABLE_ESLINT_PLUGIN=true npm run start

install-deps:
	npm ci
