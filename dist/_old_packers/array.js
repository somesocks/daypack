"use strict";
var pack = function (arr, context) {
    var pack = context.pack;
    var temp = Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        temp[i] = pack(arr[i], context);
    }
    return temp;
};
var unpack = function (arr, context) {
    var unpack = context.unpack;
    var temp = Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        temp[i] = unpack(arr[i], context);
    }
    return temp;
};
module.exports = {
    pack: pack,
    unpack: unpack,
};
