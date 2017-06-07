
module.exports = {
	pack: function (val) {
		return val;
	},
	unpack: function (val) {
		const { fetch, unpack } = this;

		const entity = fetch(val);

		if (entity != null) {
			return unpack(entity);
		} else {
			return val;
		}
	},
};
