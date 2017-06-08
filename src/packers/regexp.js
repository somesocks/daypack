
module.exports = {
	pack: function (val) {
		const { store } = this;

		const packed = {
			type: 'regexp',
			source: val.source,
			flags: val.flags,
			lastIndex: val.lastIndex,
		};

		return packed;
	},
	unpack: function (val) {
		const re = new RegExp(val.source, val.flags);
		re.lastIndex = val.lastIndex;
		return re;
	},
};
