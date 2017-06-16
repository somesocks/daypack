
module.exports = {
	pack: function (val) {
		const { type_key, serialize } = this;

		if (serialize) {
			val = {
				[type_key]: 'date',
				value: val.getTime(),
			};
		} else {
			val = new Date(val.getTime());
		}

		return val;
	},
	unpack: function (val) {
		const { serialize } = this;

		if (serialize) {
			val = new Date(val.value);
		} else {
			val = new Date(val.getTime());
		}

		return val;
	},
};
