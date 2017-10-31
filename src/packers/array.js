
const pack = (arr, context) => {
	const { pack } = context;
	const temp = [];

	for (let i = 0; i < arr.length; i++) {
		temp[i] = pack(arr[i], context);
	}

	return temp;
};

const unpack = (arr, context) => {
	const { unpack } = context;
	const temp = [];

	for (let i = 0; i < arr.length; i++) {
		temp[i] = unpack(arr[i], context);
	}

	return temp;
};

const serialize = (arr, context) => {
	const { serialize } = context;
	const temp = [];

	for (let i = 0; i < arr.length; i++) {
		temp[i] = serialize(arr[i], context);
	}

	return temp;
};

const deserialize = (arr, context) => {
	const { deserialize } = context;
	const temp = [];

	for (let i = 0; i < arr.length; i++) {
		temp[i] = deserialize(arr[i], context);
	}

	return temp;
};

module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
