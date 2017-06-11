
const config = require('./config');

const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');

const isString = (val) => (typeof val === 'string') || (val instanceof String);

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
		} else if (isString(thing[config.TYPE_KEY])) {
			return thing[config.TYPE_KEY].toLowerCase();
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
