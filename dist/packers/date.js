

const pack = (val, context) => {
	const { type_key } = context;

	const res = {
		[type_key]: 'date',
		value: val.getTime(),
	};

	return res;
};

const unpack = (val, context) => {
	const res = new Date(val.value);
	return res;
};

module.exports = {
	pack,
	unpack,
};
