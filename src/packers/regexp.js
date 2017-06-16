
module.exports = {
	pack: function (val) {
		const { type_key, serialize } = this;

		if (serialize) {
			const packed = {
				[type_key]: 'regexp',
				source: val.source,
				flags: val.flags,
				lastIndex: val.lastIndex,
			};

			return packed;
		} else {
			const packed = new RegExp(val.source, val.flags);
			packed.lastIndex = val.lastIndex;

			return packed;
		}
	},
	unpack: function (val) {
		const { serialize } = this;

		if (serialize) {
			const re = new RegExp(val.source, val.flags);
			re.lastIndex = val.lastIndex;
			return re;
		} else {
			const re = new RegExp(val.source, val.flags);
			re.lastIndex = val.lastIndex;
			return re;
		}
	},
};
