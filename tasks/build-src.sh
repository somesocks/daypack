
PROJECT_ROOT=$(pwd)
SRC=$PROJECT_ROOT/src
DIST=$PROJECT_ROOT/dist

NODE_MODULES=$PROJECT_ROOT/node_modules
NODE_BIN=$NODE_MODULES/.bin

PATH=$NODE_BIN:$PATH

rsync \
	--update \
	--recursive \
	--delete \
	$SRC/ \
	$DIST
