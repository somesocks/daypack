/** @namespace daypack */

const packers = require('./packers');


/**
* A function that returns the type of a JavaScript value.
* @param val - the value to find the type of
* @returns a type string
* @memberof daypack
*/
const type = require('./type');

/**
* A function to register a packer/unpacker for a type.
* @param type - the type string
* @param pack - the packing function
* @param unpack - the unpacking function
* @memberof daypack
*/
const register = (type, pack, unpack) => { packers[type] = { pack, unpack }; };

const _pack = function (val, _type) {
	_type = _type || type(val);
	const packer = packers[_type];
	if (!packer) { throw new Error('day-pack: no packer for type ' + _type + " " + JSON.stringify(val)); }
	return packer.pack.call(this, val);
};

const _unpack = function (val, _type) {
	_type = _type || type(val);
	const packer = packers[_type];
	if (!packer) { throw new Error('day-pack: no unpacker for type ' + _type); }
	return packer.unpack.call(this, val);
};

/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object with 'result' and 'entities' properties
* @memberof daypack
*/
const pack = function (val) {
	const entities = {};
	const context = {};

	context.unpack_cache = {};
	context.store = (entity) => { entities[entity.id] = entity; };
	context.fetch = (id) => entities[id];
	context.pack = _pack.bind(context);
	context.unpack = _unpack.bind(context);

	const result = context.pack(val);
	return { result, entities };
};

/**
* A function that unpacks a JavaScript value.
* @param val - a flattened object to unpack
* @returns the unpacked value
* @memberof daypack
*/
const unpack = function ({ result, entities }) {
	const context = {};

	context.unpack_cache = {};
	context.store = (entity) => { entities[entity.id] = entity; };
	context.fetch = (id) => entities[id];
	context.pack = _pack.bind(context);
	context.unpack = _unpack.bind(context);

	const val = context.unpack(result);
	return val;
};

module.exports = {
	packers,
	type,
	register,
	pack,
	unpack,
};
