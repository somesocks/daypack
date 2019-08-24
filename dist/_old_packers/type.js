"use strict";
var isArray = Array.isArray ||
    (function (val) { return Object.prototype.toString.call(val) === '[object Array]'; });
// const isString = (val) => (typeof val === 'string') || (val instanceof String);
var type = function (thing, context) {
    var type_key = context.type_key;
    var _type = typeof thing;
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
            }
            else if (isArray(thing)) {
                return 'array';
            }
            else if (typeof thing[type_key] === 'string') {
                return thing[type_key].toLowerCase();
            }
            else if (thing.__proto__ != null && (typeof thing.__proto__.name === 'string')) { // eslint-disable-line no-proto
                return thing.__proto__.name.toLowerCase(); // eslint-disable-line no-proto
            }
            else if (thing.prototype != null && (typeof thing.prototype.name === 'string')) {
                return thing.prototype.name.toLowerCase();
            }
            else if (thing.constructor != null && (typeof thing.constructor.name === 'string')) {
                return thing.constructor.name.toLowerCase();
            }
            else {
                return 'object';
            }
    }
};
module.exports = type;
