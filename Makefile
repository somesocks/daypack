
.PHONY: help build test


help:
	@echo "Makefile for spider-pack"
	@echo "	make build - make a new build"
	@echo "	make test - run the test cases"
	@echo " make docs - build the docs"

build:
	mkdir -p ./dist
	NODE_MODULES=. webpack --config=./webpack.js

size-check:
	NODE_MODULES=. webpack --config=./webpack.js --profile --json > stats.json
	webpack-bundle-analyzer stats.json

test:
	(export NODE_PATH=./; find ./tests -name '*.tests*.js' | xargs mocha --timeout 10000 $(ARGS))

docs:
	(export NODE_PATH=./; find ./src -name '*.js' |sort -t'/' -k2.2 -k2.1 | xargs jsdoc2md --template README.hbs --files ) > README.md
