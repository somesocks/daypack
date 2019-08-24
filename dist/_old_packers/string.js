"use strict";
var pack = function (val, context) { return val; };
var unpack = function (val, context) {
    var unpack = context.unpack, packed = context.packed, unpacked = context.unpacked;
    var entity = packed[val];
    return entity != null ? unpack(entity, context) : val;
};
module.exports = {
    pack: pack,
    unpack: unpack,
};
