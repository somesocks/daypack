

const pack = (val, context) => {
	const { unpacked, packed } = context;
	const { head } = val;

	Object.assign(packed, val.entities);
	return val[head];
};

const unpack = (val, context) => val;

module.exports = {
	pack,
	unpack,
};
