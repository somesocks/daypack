"use strict";
var pack = function (val, context) {
    var _a;
    var type_key = context.type_key;
    var res = (_a = {},
        _a[type_key] = 'regexp',
        _a.source = val.source,
        _a.flags = val.flags,
        _a.lastIndex = val.lastIndex,
        _a);
    return res;
};
var unpack = function (val, context) {
    var res = new RegExp(val.source, val.flags);
    res.lastIndex = val.lastIndex;
    return res;
};
module.exports = {
    pack: pack,
    unpack: unpack,
};
