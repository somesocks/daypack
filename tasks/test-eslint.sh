#!/bin/bash

# set -x #echo on


# `test-mocha` runs mocha tests

# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

# add local node_modules bin to path
NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

# eslint-wrapper --help

ESLINTRC=$ROOT_DIR/.eslintrc.js

echo "[INFO] running eslint against source code"

# eslint sometimes misses some files
# so, instead we use find to find all matching files,
# sort them,
# and pipe into eslint via xargs

( \
	find \
		$SRC_DIR \
		\( -type f -and -name "*.ts" \) -or \
		\( -type f -and -name "*.tsx" \) \
	| \
	sort \
		--stable \
		--ignore-case \
		--field-separator=/ \
		--key=2.2 \
		--key=2.1 \
	| \
	xargs \
		npx eslint \
			--quiet \
			--config="$ESLINTRC" \
)

echo "[INFO] eslint checks passed!"
