
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
	if (isObject(val) && val.daypack) {
		return val.daypack;
	} else {
		const _type = type(val, context);
		const packer = packers[_type];

		if (!packer) { throw new Error(`Daypack: no unpacker for type ${_type}`); }
		return packer;
	}
};

const unpack = (val, context) => packer(val, context).unpack(val, context);

const pack = (val, context) => packer(val, context).pack(val, context);

const serialize = (val, context) => packer(val, context).serialize(val, context);

const deserialize = (val, context) => packer(val, context).deserialize(val, context);

module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
