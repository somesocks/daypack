
const isString = (val) => (typeof val === 'string') || (val instanceof String);

const pack = (val, context) => {
	const { pack, packed, unpacked, id_key } = context;

	const id = val[id_key];

	if (isString(id)) {
		const cached = packed[id];
		if (cached) {
			return id;
		} else {
			const res = {};
			res[id_key] = id;
			packed[id] = res;

			for (const key in val) {
				if (key !== id_key && val.hasOwnProperty(key)) {
					res[key] = pack(val[key], context);
				}
			}

			return id;
		}
	} else {
		const res = {};
		res[id_key] = id;

		for (const key in val) {
			if (key !== id_key && val.hasOwnProperty(key)) {
				res[key] = pack(val[key], context);
			}
		}

		return res;
	}
};

const unpack = (val, context) => {
	const { unpack, packed, unpacked, id_key } = context;

	const id = val[id_key];

	if (isString(id)) {
		const cached = unpacked[id];
		if (cached) {
			return cached;
		} else {
			const res = {};
			res[id_key] = id;
			unpacked[id] = res;

			for (const key in val) {
				if (key !== id_key && val.hasOwnProperty(key)) {
					res[key] = unpack(val[key], context);
				}
			}

			return res;
		}
	} else {
		const res = {};

		for (const key in val) {
			if (key !== id_key && val.hasOwnProperty(key)) {
				res[key] = unpack(val[key], context);
			}
		}

		return res;
	}
};

const serialize = (val, context) => {
	const { serialize } = context;
	const res = {};

	for (const key in val) {
		if (val.hasOwnProperty(key)) {
			res[key] = serialize(val[key], context);
		}
	}

	return res;
};

const deserialize = (val, context) => {
	const { deserialize } = context;
	const res = {};

	for (const key in val) {
		if (val.hasOwnProperty(key)) {
			res[key] = deserialize(val[key], context);
		}
	}

	return res;
};


module.exports = {
	pack,
	unpack,
	serialize,
	deserialize,
};
