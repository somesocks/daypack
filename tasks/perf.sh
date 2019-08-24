#!/bin/bash

#
# turn this on to debug script
# set -x

#
# abort on error
set -e

PACKAGE_NAME=daypack

#
# expects to be run from root
ROOT_DIR=.
SRC_DIR=$ROOT_DIR/src
DIST_DIR=$ROOT_DIR/dist

#
# add local node_modules bin to path
NODE_BIN=$ROOT_DIR/node_modules/.bin
PATH=$PATH:$NODE_BIN

clinic flame --sample-interval 1 -- node $DIST_DIR/packers/object.perf.tests.js
# clinic doctor -- node $DIST_DIR/packers/object.perf.tests.js
# clinic bubble -- node $DIST_DIR/packers/object.perf.tests.js
