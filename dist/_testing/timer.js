"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var now_1 = __importDefault(require("./now"));
var timer = function (func, label) {
    label = label || '';
    return function wrapper() {
        var start = now_1.default();
        try {
            var _res = func.apply(this, arguments);
            var end = now_1.default();
            console.log("timer: " + label + " finished in " + (end - start) + " ms");
            return _res;
        }
        catch (err) {
            var end = now_1.default();
            console.log("timer: " + label + " failed in " + (end - start) + " ms");
            throw err;
        }
    };
};
module.exports = timer;
