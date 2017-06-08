
module.exports = {
	pack: function (val) {
		const { store } = this;

		const packed = {
			id: 'date.' + val.getTime(),
			type: 'date',
			value: val.getTime(),
		};

		store(packed);

		return packed.id;
	},
	unpack: function (val) {
		return new Date(val.value);
	},
};
