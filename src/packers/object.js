
const isString = (val) => (typeof val === 'string') || (val instanceof String);

const objmap = (obj, map, into) => {
	let temp = into || {};

	temp.id = obj.id;

	for (const key in obj) {
		if (key !== 'id' && obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key]);
		}
	}

	return temp;
};

module.exports = {
	pack: function (val) {
		const { pack, pack_cache, store } = this;
		if (isString(val.id)) {
			const cached = pack_cache[val.id];
			if (cached) {
				return cached.id;
			} else {
				const packed = Object.assign({}, val);
				pack_cache[packed.id] = packed;
				objmap(val, pack, packed);
				store(packed);
				return packed.id;
			}
		} else {
			const packed = Object.assign({}, val);
			objmap(val, pack, packed);
			return packed;
		}
	},
	unpack: function (val) {
		const { unpack, unpack_cache } = this;
		if (isString(val.id)) {
			const cached = unpack_cache[val.id];
			if (cached) {
				return cached;
			} else {
				const unpacked = Object.assign({}, val);
				unpack_cache[unpacked.id] = unpacked;
				objmap(val, unpack, unpacked);
				return unpacked;
			}
		} else {
			const unpacked = Object.assign({}, val);
			objmap(val, unpack, unpacked);
			return unpacked;
		}
	},
};
