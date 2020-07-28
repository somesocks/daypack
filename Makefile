NPM=pnpm

TASKS=./tasks
NODE_BIN=./node_modules/.bin

SHELL := /bin/bash

.PHONY: default setup help

##
##
##	daypack
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
	$(SHELL) $(TASKS)/install.sh


##		make build - build the package
##
build:
	$(SHELL) $(TASKS)/build.sh



##		make test - run test cases against the built package
##
test: test-mocha test-eslint

test-mocha:
	$(SHELL) $(TASKS)/test-mocha.sh

test-eslint:
	$(SHELL) $(TASKS)/test-eslint.sh




##		make package-check - list the files that will be present in the package
##
package-check:
	$(SHELL) $(TASKS)/package-check.sh

##		make package-publish - publish the current dist dir
##
package-publish:
	$(SHELL) $(TASKS)/package-publish.sh

##
##
