"use strict";
var pack = function (val, context) {
    var _a;
    var type_key = context.type_key;
    var res = (_a = {},
        _a[type_key] = 'date',
        _a.value = val.getTime(),
        _a);
    return res;
};
var unpack = function (val, context) {
    var res = new Date(val.value);
    return res;
};
module.exports = {
    pack: pack,
    unpack: unpack,
};
