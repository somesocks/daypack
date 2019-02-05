
NPM = pnpm

.PHONY: help build test


##
##
##	Daypack
##		this is the base project makefile
##
##

default: help

##	COMMANDS
##

##		make help - display the help
##
help:
	@grep "^##.*" ./Makefile



##		make setup - setup for local development
##
setup:
	$(NPM) install


build-src:
	$(NPM) run cmd-build-src

build-pack: build-src
	cp ./.npmignore ./dist
	cp ./package.json ./dist
	cp ./LICENSE ./dist
	cp ./README.md ./dist

build-docs:
	$(NPM) run cmd-build-docs
	cp ./README.md ./dist


##		make build - build the package
##
build: build-src build-pack build-docs

##		make pack - build a tarball of the package
##
pack:
	$(NPM) pack

test-cases:
	$(NPM) run cmd-test-cases -- $(MOCHA)

##		make test - run tests
##
test: test-cases

##		make build-docs - build the readme from the jsdocs
##
build-docs:
		(export NODE_PATH=./; find ./src -name '*.js' |sort -t'/' -k2.2 -k2.1 | xargs jsdoc2md --template README.hbs --files ) > README.md

##		make package-check - list the files that will be present in the package
##
package-check:
	cd ./dist && $(NPM) publish --dry-run

##		make package-publish - publish the current dist dir
##
package-publish:
	cd ./dist && $(NPM) publish

##
##
