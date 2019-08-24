

const pack = (val, context) => val;

const unpack = (val, context) => {
	const { unpack, packed, unpacked } = context;

	const entity = packed[val];

	return entity != null ? unpack(entity, context) : val;
};

export = {
	pack,
	unpack,
};
