
module.exports = {
	pack: function (val) {
		return {
			type: 'date',
			value: val.getTime(),
		};
	},
	unpack: function (val) {
		return new Date(val.value);
	},
};
