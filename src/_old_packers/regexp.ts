

const pack = (val, context) => {
	const { type_key } = context;

	const res = {
		[type_key]: 'regexp',
		source: val.source,
		flags: val.flags,
		lastIndex: val.lastIndex,
	};

	return res;
};

const unpack = (val, context) => {
	const res = new RegExp(val.source, val.flags);
	res.lastIndex = val.lastIndex;

	return res;
};

export = {
	pack,
	unpack,
};
