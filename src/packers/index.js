
const type = require('./type');

const packers = {
	array: require('./array'),
	boolean: require('./boolean'),
	date: require('./date'),
	daypack: require('./daypack'),
	null: require('./null'),
	number: require('./number'),
	object: require('./object'),
	regexp: require('./regexp'),
	string: require('./string'),
	undefined: require('./undefined'),
};

const unpack = (val, context) => {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no unpacker for type ${_type}`); }
	return packer.unpack(val, context);
};

const pack = (val, context) => {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no packer for type ${_type}`); }
	return packer.pack(val, context);
};

const serialize = (val, context) => {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no unpacker for type ${_type}`); }
	return packer.serialize(val, context);
};

const deserialize = (val, context) => {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no packer for type ${_type}`); }
	return packer.deserialize(val, context);
};

module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
