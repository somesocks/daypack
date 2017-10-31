

const pack = (val, context) => new Date(val.getTime());

const unpack = (val, context) => new Date(val.getTime());

const serialize = (val, context) => {
	const { serialize, type_key } = context;

	const res = {
		[type_key]: 'date',
		value: val.getTime(),
	};

	return res;
};

const deserialize = (val, context) => {
	const { deserialize, type_key } = context;

	const res = new Date(val.value);

	return res;
};

module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
