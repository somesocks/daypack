
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

##		make build - build the package
##
build:
	$(NPM) run cmd-build

##		make analyze-build - analyze the built package
##
analyze-build:
	$(NPM) run cmd-analyze-build
	#
	# NODE_MODULES=. webpack --config=./webpack.js --profile --json > stats.json
	# webpack-bundle-analyzer stats.json

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

##
##
