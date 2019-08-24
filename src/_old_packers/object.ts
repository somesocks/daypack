
const pack = (val, context) => {
	const { pack, packed, id_key } = context;

	const id = val[id_key];

	if (typeof id === 'string') {
		const cached = packed[id];
		if (cached) {
			return id;
		} else {
			const res = {};
			res[id_key] = id;
			packed[id] = res;

			for (const key in val) {
				if (val.hasOwnProperty(key) && key !== id_key) {
					res[key] = pack(val[key], context);
				}
			}

			return id;
		}
	} else {
		const res = {};
		res[id_key] = id;

		for (const key in val) {
			if (val.hasOwnProperty(key) && key !== id_key) {
				res[key] = pack(val[key], context);
			}
		}

		return res;
	}
};

const unpack = (val, context) => {
	const { unpack, unpacked, id_key } = context;

	const id = val[id_key];

	if (typeof id === 'string') {
		const cached = unpacked[id];
		if (cached) {
			return cached;
		} else {
			const res = {};
			res[id_key] = id;
			unpacked[id] = res;

			for (const key in val) {
				if (val.hasOwnProperty(key) && key !== id_key) {
					res[key] = unpack(val[key], context);
				}
			}

			return res;
		}
	} else {
		const res = {};

		for (const key in val) {
			if (val.hasOwnProperty(key) && key !== id_key) {
				res[key] = unpack(val[key], context);
			}
		}

		return res;
	}
};

export = {
	pack,
	unpack,
};
