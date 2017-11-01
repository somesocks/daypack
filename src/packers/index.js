
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

const isObject = (val) =>
	val !== null
	&& (typeof val === 'function' || typeof val === 'object');


const packer = (val, context) => {
	const _type = type(val, context);
	const packer = packers[_type];

	if (!packer) { throw new Error(`Daypack: no unpacker for type ${_type}`); }
	return packer;
};

const unpack = (val, context) => packer(val, context).unpack(val, context);

const pack = (val, context) => packer(val, context).pack(val, context);

module.exports = {
	packers,
	pack,
	unpack,
};
