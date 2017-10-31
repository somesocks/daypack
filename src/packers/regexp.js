

const pack = (val, context) => RegExp(val.source, val.flags);

const unpack = (val, context) => RegExp(val.source, val.flags);

const serialize = (val, context) => {
	const { serialize, type_key } = context;

	const res = {
		[type_key]: 'regexp',
		source: val.source,
		flags: val.flags,
		lastIndex: val.lastIndex,
	};

	return res;
};

const deserialize = (val, context) => {
	const { deserialize, type_key } = context;

	const res = new RegExp(val.source, val.flags);
	res.lastIndex = val.lastIndex;

	return res;
};

module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
