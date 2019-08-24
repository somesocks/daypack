
import type from './type';

import _array from './array';
import _boolean from './boolean';
import _date from './date';
import _null from './null';
import _number from './number';
import _object from './object';
import _regexp from './regexp';
import _string from './string';
import _undefined from './undefined';

const packers = {
	array: _array,
	boolean: _boolean,
	date: _date,
	null: _null,
	number: _number,
	object: _object,
	regexp: _regexp,
	string: _string,
	undefined: _undefined,
};

const isArray = Array.isArray ||
	((val) => Object.prototype.toString.call(val) === '[object Array]');


const unpack = function (val, context) {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no packer for type ${_type}`); }
	return packer.unpack(val, context);
}

const pack = function (val, context) {
	const _type = type(val, context);
	const packer = packers[_type];
	if (!packer) { throw new Error(`Daypack: no packer for type ${_type}`); }
	return packer.pack(val, context);
}

// const pack = function (val, context) {
// 	const { type_key } = context;
//
// 	let _type : string = typeof val;
//
// 	switch (_type) {
// 		case 'undefined':
// 		case 'boolean':
// 		case 'number':
// 		case 'string':
// 		case 'symbol':
// 		case 'function':
// 			break;
// 		case 'object':
// 			if (val === null) {
// 				_type = 'null';
// 			} else if (isArray(val)) {
// 				_type = 'array';
// 			} else if (typeof val[type_key] === 'string') {
// 				_type = val[type_key].toLowerCase();
// 			} else if (val.__proto__ != null && (typeof val.__proto__.name === 'string')) {  // eslint-disable-line no-proto
// 				_type = val.__proto__.name.toLowerCase(); // eslint-disable-line no-proto
// 			} else if (val.constructor != null && (typeof val.constructor.name === 'string')) {
// 				_type = val.constructor.name.toLowerCase();
// 			} else {
// 				_type = 'object';
// 			}
// 			break;
// 		default:
// 		 throw new Error('daypack: cannot infer type');
// 	}
//
// 	// const _type = type(val, context);
//
// 	switch (_type) {
// 		case 'array': {
// 			const temp : any[] = Array(val.length);
//
// 			for (let i = 0; i < val.length; i++) {
// 				temp[i] = pack(val[i], context);
// 			}
//
// 			return temp;
// 		}
// 		case 'boolean': { return val; }
// 		case 'date': {
// 			const { type_key } = context;
//
// 			const res = {
// 				[type_key]: 'date',
// 				value: val.getTime(),
// 			};
//
// 			return res;
// 		}
// 		case 'null': { return val; }
// 		case 'number': { return val; }
// 		case 'object': {
// 			const { packed, id_key } = context;
//
// 			const id = val[id_key];
//
// 			if (typeof id === 'string') {
// 				const cached = packed[id];
// 				if (cached) {
// 					return id;
// 				} else {
// 					const res = {};
// 					res[id_key] = id;
// 					packed[id] = res;
//
// 					for (const key in val) {
// 						if (val.hasOwnProperty(key) && key !== id_key) {
// 							res[key] = pack(val[key], context);
// 						}
// 					}
//
// 					return id;
// 				}
// 			} else {
// 				const res = {};
// 				res[id_key] = id;
//
// 				for (const key in val) {
// 					if (val.hasOwnProperty(key) && key !== id_key) {
// 						res[key] = pack(val[key], context);
// 					}
// 				}
//
// 				return res;
// 			}
// 		}
// 		case 'regexp': {
// 			const { type_key } = context;
//
// 			const res = {
// 				[type_key]: 'regexp',
// 				source: val.source,
// 				flags: val.flags,
// 				lastIndex: val.lastIndex,
// 			};
//
// 			return res;
// 		}
// 		case 'string': { return val; }
// 		case 'undefined': { return val; }
// 		default: {
// 			const packer = packers[_type];
// 			if (!packer) { throw new Error(`Daypack: no packer for type ${_type}`); }
// 			return packer.pack(val, context);
// 		}
// 	}
//
// };

export = {
	packers,
	pack,
	unpack,
};
