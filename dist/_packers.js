"use strict";
var packers = {};
//eslint-disable-next-line @typescript-eslint/unbound-method
var isArray = Array.isArray ||
    (function (val) { return Object.prototype.toString.call(val) === '[object Array]'; });
var unpack = function (val, context) {
    var type_key = context.type_key;
    var _type = typeof val;
    switch (_type) {
        case 'undefined':
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
            break;
        case 'object':
            if (val === null) {
                _type = 'null';
            }
            else if (isArray(val)) {
                _type = 'array';
            }
            else if (typeof val[type_key] === 'string') {
                _type = val[type_key].toLowerCase();
            }
            else if (val.__proto__ != null && (typeof val.__proto__.name === 'string')) { // eslint-disable-line no-proto
                _type = val.__proto__.name.toLowerCase(); // eslint-disable-line no-proto
            }
            else if (val.constructor != null && (typeof val.constructor.name === 'string')) {
                _type = val.constructor.name.toLowerCase();
            }
            else {
                _type = 'object';
            }
            break;
        default:
            throw new Error('daypack: cannot infer type');
    }
    // const _type = type(val, context);
    switch (_type) {
        case 'array': {
            var temp = Array(val.length);
            for (var i = 0; i < val.length; i++) {
                temp[i] = unpack(val[i], context);
            }
            return temp;
        }
        case 'boolean': {
            return val;
        }
        case 'date': {
            var res = new Date(val.value);
            return res;
        }
        case 'null': {
            return val;
        }
        case 'number': {
            return val;
        }
        case 'object': {
            var unpacked = context.unpacked, id_key = context.id_key;
            var id = val[id_key];
            if (typeof id === 'string') {
                var cached = unpacked[id];
                if (cached) {
                    return cached;
                }
                else {
                    var res = {};
                    res[id_key] = id;
                    unpacked[id] = res;
                    for (var key in val) {
                        if (Object.prototype.hasOwnProperty.call(val, key) && key !== id_key) {
                            res[key] = unpack(val[key], context);
                        }
                    }
                    return res;
                }
            }
            else {
                var res = {};
                for (var key in val) {
                    if (Object.prototype.hasOwnProperty.call(val, key) && key !== id_key) {
                        res[key] = unpack(val[key], context);
                    }
                }
                return res;
            }
        }
        case 'regexp': {
            var res = new RegExp(val.source, val.flags);
            res.lastIndex = val.lastIndex;
            return res;
        }
        case 'string': {
            var packed = context.packed;
            var entity = packed[val];
            return entity != null ? unpack(entity, context) : val;
        }
        case 'undefined': {
            return val;
        }
        default: {
            var packer = packers[_type];
            if (!packer) {
                throw new Error("Daypack: no packer for type " + _type);
            }
            return packer.unpack(val, context);
        }
    }
};
var pack = function (val, context) {
    var _a, _b;
    var type_key = context.type_key;
    var _type = typeof val;
    switch (_type) {
        case 'undefined':
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
            break;
        case 'object':
            if (val === null) {
                _type = 'null';
            }
            else if (isArray(val)) {
                _type = 'array';
            }
            else if (typeof val[type_key] === 'string') {
                _type = val[type_key].toLowerCase();
            }
            else if (val.__proto__ != null && (typeof val.__proto__.name === 'string')) { // eslint-disable-line no-proto
                _type = val.__proto__.name.toLowerCase(); // eslint-disable-line no-proto
            }
            else if (val.constructor != null && (typeof val.constructor.name === 'string')) {
                _type = val.constructor.name.toLowerCase();
            }
            else {
                _type = 'object';
            }
            break;
        default:
            throw new Error('daypack: cannot infer type');
    }
    // const _type = type(val, context);
    switch (_type) {
        case 'array': {
            var temp = Array(val.length);
            for (var i = 0; i < val.length; i++) {
                temp[i] = pack(val[i], context);
            }
            return temp;
        }
        case 'boolean': {
            return val;
        }
        case 'date': {
            var type_key_1 = context.type_key;
            var res = (_a = {},
                _a[type_key_1] = 'date',
                _a.value = val.getTime(),
                _a);
            return res;
        }
        case 'null': {
            return val;
        }
        case 'number': {
            return val;
        }
        case 'object': {
            var packed = context.packed, id_key = context.id_key;
            var id = val[id_key];
            if (typeof id === 'string') {
                var cached = packed[id];
                if (cached) {
                    return id;
                }
                else {
                    var res = {};
                    res[id_key] = id;
                    packed[id] = res;
                    for (var key in val) {
                        if (Object.prototype.hasOwnProperty.call(val, key) && key !== id_key) {
                            res[key] = pack(val[key], context);
                        }
                    }
                    return id;
                }
            }
            else {
                var res = {};
                res[id_key] = id;
                for (var key in val) {
                    if (Object.prototype.hasOwnProperty.call(val, key) && key !== id_key) {
                        res[key] = pack(val[key], context);
                    }
                }
                return res;
            }
        }
        case 'regexp': {
            var type_key_2 = context.type_key;
            var res = (_b = {},
                _b[type_key_2] = 'regexp',
                _b.source = val.source,
                _b.flags = val.flags,
                _b.lastIndex = val.lastIndex,
                _b);
            return res;
        }
        case 'string': {
            return val;
        }
        case 'undefined': {
            return val;
        }
        default: {
            var packer = packers[_type];
            if (!packer) {
                throw new Error("Daypack: no packer for type " + _type);
            }
            return packer.pack(val, context);
        }
    }
};
module.exports = {
    packers: packers,
    pack: pack,
    unpack: unpack,
};
