
module.exports = {
	pack: function (val) {
		const { store } = this;

		const packed = {
			id: `regexp.${val.source}.${val.flags}.${val.lastIndex}`,
			type: 'regexp',
			source: val.source,
			flags: val.flags,
			lastIndex: val.lastIndex,
		};

		store(packed);

		return packed.id;
	},
	unpack: function (val) {
		const re = new RegExp(val.source, val.flags);
		re.lastIndex = val.lastIndex;
		return re;
	},
};
