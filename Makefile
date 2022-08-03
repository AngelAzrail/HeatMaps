install: install-deps

start:
	git pull
	make install
	CI=false DISABLE_ESLINT_PLUGIN=true npm run start

install-deps:
	npm ci

lint:
	npx eslint . --ext ts,tsx

quick:
	CI=false DISABLE_ESLINT_PLUGIN=true npm run start