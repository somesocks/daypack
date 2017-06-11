
const config = require('../config');

const isString = (val) => (typeof val === 'string') || (val instanceof String);

const objmap = (obj, map, into) => {
	let temp = into || {};

	temp[config.ID_KEY] = obj[config.ID_KEY];

	for (const key in obj) {
		if (key !== config.ID_KEY && obj.hasOwnProperty(key)) {
			temp[key] = map(obj[key]);
		}
	}

	return temp;
};

module.exports = {
	pack: function (val) {
		const { pack, pack_cache, store } = this;
		if (isString(val[config.ID_KEY])) {
			const cached = pack_cache[val[config.ID_KEY]];
			if (cached) {
				return cached[config.ID_KEY];
			} else {
				const packed = Object.assign({}, val);
				pack_cache[packed[config.ID_KEY]] = packed;
				objmap(val, pack, packed);
				store(packed);
				return packed[config.ID_KEY];
			}
		} else {
			const packed = Object.assign({}, val);
			objmap(val, pack, packed);
			return packed;
		}
	},
	unpack: function (val) {
		const { unpack, unpack_cache } = this;
		if (isString(val[config.ID_KEY])) {
			const cached = unpack_cache[val[config.ID_KEY]];
			if (cached) {
				return cached;
			} else {
				const unpacked = Object.assign({}, val);
				unpack_cache[unpacked[config.ID_KEY]] = unpacked;
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
