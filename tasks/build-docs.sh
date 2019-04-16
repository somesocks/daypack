
PROJECT_ROOT=$(pwd)
SRC=$PROJECT_ROOT/src
DIST=$PROJECT_ROOT/dist

NODE_MODULES=$PROJECT_ROOT/node_modules
NODE_BIN=$NODE_MODULES/.bin

PATH=$NODE_BIN:$PATH

DOCS_TEMPLATE=$PROJECT_ROOT/README.hbs
DOCS_FILE=$PROJECT_ROOT/README.md

( \
	find \
		$SRC \
		-name "*.js" \
	| \
	sort \
		-t/ \
		-k2.2 \
		-k2.1 \
	| \
	xargs \
		jsdoc2md \
			--separators \
			--param-list-format list \
			--property-list-format list \
			--member-index-format list \
			--template $DOCS_TEMPLATE \
			--files \
) > $DOCS_FILE
