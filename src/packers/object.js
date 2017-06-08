
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
		const { pack, store } = this;
		val = objmap(val, pack);
		if (isString(val.id)) {
			store(val);
			return val.id;
		} else {
			return val;
		}
	},
	unpack: function (val) {
		const { unpack, unpack_cache } = this;
		const cached = unpack_cache[val.id];
		if (cached) {
			return cached;
		} else {
			const unpacked = Object.assign({}, val);
			unpack_cache[unpacked.id] = unpacked;
			objmap(val, unpack, unpacked);
			return unpacked;
		}
	},
};
