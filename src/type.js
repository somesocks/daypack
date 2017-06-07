
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const type = (thing) => {
	const type = typeof thing;

	switch (type) {
	default:
	case 'undefined':
	case 'boolean':
	case 'number':
	case 'string':
	case 'symbol':
	case 'function':
		return type;
	case 'object':
		if (thing === null) {
			return 'null';
		} else if (isArray(thing)) {
			return 'array';
		} else if (thing.__proto__ != null && thing.__proto__.name != null) {
			return thing.__proto__.name.toLowerCase();
		} else if (thing.prototype != null && thing.prototype.name != null) {
			return thing.prototype.name.toLowerCase();
		} else if (thing.constructor != null && thing.constructor.name != null) {
			return thing.constructor.name.toLowerCase();
		} else if (thing.type != null) {
			return thing.type.toLowerCase();
		} else {
			return 'object';
		}
	}
};

module.exports = type;
