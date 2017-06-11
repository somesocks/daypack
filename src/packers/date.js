
const config = require('../config');

module.exports = {
	pack: function (val) {
		return {
			[config.TYPE_KEY]: 'date',
			value: val.getTime(),
		};
	},
	unpack: function (val) {
		return new Date(val.value);
	},
};
