
TASKS=./tasks

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

##	make build - build the package
build: build-src build-docs
	sh $(TASKS)/build-meta.sh

build-src:
	sh $(TASKS)/build-src.sh

build-docs:
	sh $(TASKS)/build-docs.sh



##		make test - run tests
##
test: test-mocha test-eslint

test-mocha:
	sh $(TASKS)/test-mocha.sh

test-eslint:
	sh $(TASKS)/test-eslint.sh



##		make package-check - list the files that will be present in the package
##
package-check:
	sh $(TASKS)/package-check.sh

##		make package-publish - publish the current dist dir
##
package-publish:
	sh $(TASKS)/package-publish.sh

##
##
