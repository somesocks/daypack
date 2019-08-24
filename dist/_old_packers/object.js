"use strict";
var pack = function (val, context) {
    var pack = context.pack, packed = context.packed, id_key = context.id_key;
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
                if (val.hasOwnProperty(key) && key !== id_key) {
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
            if (val.hasOwnProperty(key) && key !== id_key) {
                res[key] = pack(val[key], context);
            }
        }
        return res;
    }
};
var unpack = function (val, context) {
    var unpack = context.unpack, unpacked = context.unpacked, id_key = context.id_key;
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
                if (val.hasOwnProperty(key) && key !== id_key) {
                    res[key] = unpack(val[key], context);
                }
            }
            return res;
        }
    }
    else {
        var res = {};
        for (var key in val) {
            if (val.hasOwnProperty(key) && key !== id_key) {
                res[key] = unpack(val[key], context);
            }
        }
        return res;
    }
};
module.exports = {
    pack: pack,
    unpack: unpack,
};
