
const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const isString = (val) => (typeof val === 'string') || (val instanceof String);

const type = function (thing, context) {
	const { type_key } = context;

	const _type = typeof thing;

	switch (_type) {
	default:
	case 'undefined':
	case 'boolean':
	case 'number':
	case 'string':
	case 'symbol':
	case 'function':
		return _type;
	case 'object':
		if (thing === null) {
			return 'null';
		} else if (isArray(thing)) {
			return 'array';
		} else if (isString(thing[type_key])) {
			return thing[type_key].toLowerCase();
		} else if (thing.__proto__ != null && isString(thing.__proto__.name)) {
			return thing.__proto__.name.toLowerCase();
		} else if (thing.prototype != null && isString(thing.prototype.name)) {
			return thing.prototype.name.toLowerCase();
		} else if (thing.constructor != null && isString(thing.constructor.name)) {
			return thing.constructor.name.toLowerCase();
		} else {
			return 'object';
		}
	}
};

module.exports = type;
