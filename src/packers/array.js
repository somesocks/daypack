
const arrmap = function (arr, map) {
	let temp = [];

	for (let i = 0; i < arr.length; i++) {
		temp[i] = map(arr[i]);
	}

	return temp;
};

module.exports = {
	pack: function (val) {
		const { pack } = this;
		return arrmap(val, pack);
	},
	unpack: function (val) {
		const { unpack } = this;
		return arrmap(val, unpack);
	},
};
