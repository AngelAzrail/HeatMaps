install: install-deps

start:
	git pull
	make install
	CI=false DISABLE_ESLINT_PLUGIN=true npm run start

install-deps:
	npm ci
