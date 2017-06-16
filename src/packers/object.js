
const isString = (val) => (typeof val === 'string') || (val instanceof String);

const objmap = function (obj, map, into) {
	const { id_key } = this;

	let temp = into || {};

	temp[id_key] = obj[id_key];

	for (const key in obj) {
		if (key !== id_key && obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key]);
		}
	}

	return temp;
};

module.exports = {
	pack: function (val) {
		const { pack, pack_cache, store, id_key } = this;
		if (isString(val[id_key])) {
			const cached = pack_cache[val[id_key]];
			if (cached) {
				return cached[id_key];
			} else {
				const packed = Object.assign({}, val);
				pack_cache[packed[id_key]] = packed;
				objmap.call(this, val, pack, packed);
				store(packed);
				return packed[id_key];
			}
		} else {
			const packed = Object.assign({}, val);
			objmap.call(this, val, pack, packed);
			return packed;
		}
	},
	unpack: function (val) {
		const { unpack, unpack_cache, id_key } = this;

		if (isString(val[id_key])) {
			const cached = unpack_cache[val[id_key]];
			if (cached) {
				return cached;
			} else {
				const unpacked = Object.assign({}, val);
				unpack_cache[unpacked[id_key]] = unpacked;
				objmap.call(this, val, unpack, unpacked);
				return unpacked;
			}
		} else {
			const unpacked = Object.assign({}, val);
			objmap.call(this, val, unpack, unpacked);
			return unpacked;
		}
	},
};
