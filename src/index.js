/** @namespace daypack */

const config = require('./config');
const packers = require('./packers');

const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');


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
const pack = function (val, options) {
	if (isObject(val) && val.__daypack) { return val; } // already packed

	options = options || {};

	const entities = {};
	const context = {
		id_key: options.id_key || config.id_key,
		type_key: options.type_key || config.type_key,
		serialize: options.serialize || config.serialize,
	};

	context.pack_cache = {};
	context.store = (entity) => { entities[entity[context.id_key]] = entity; };
	context.fetch = (id) => entities[id];
	context.pack = _pack.bind(context);
	context.unpack = _unpack.bind(context);

	const result = context.pack(val);
	return {
		__daypack: true,
		options: {
			id_key: context.id_key,
			type_key: context.type_key,
			serialize: context.serialize,
		},
		result,
		entities,
	};
};

/**
* A function that unpacks a JavaScript value.
* @param val - a flattened object to unpack
* @returns the unpacked value
* @memberof daypack
*/
const unpack = function (val) {
	if (!isObject(val)) { return val; } // can't unpack

	const result = val.result;
	const options = val.options || {};
	const entities = val.entities || {};

	const context = {
		id_key: options.id_key || config.id_key,
		type_key: options.type_key || config.type_key,
		serialize: options.serialize || config.serialize,
	};

	context.unpack_cache = {};
	context.store = (entity) => { entities[entity[context.id_key]] = entity; };
	context.fetch = (id) => entities[id];
	context.pack = _pack.bind(context);
	context.unpack = _unpack.bind(context);

	const unpacked = context.unpack(result);
	return unpacked;
};

module.exports = {
	config,
	packers,
	type,
	register,
	pack,
	unpack,
};
