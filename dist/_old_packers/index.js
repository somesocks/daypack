"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var type_1 = __importDefault(require("./type"));
var array_1 = __importDefault(require("./array"));
var boolean_1 = __importDefault(require("./boolean"));
var date_1 = __importDefault(require("./date"));
var null_1 = __importDefault(require("./null"));
var number_1 = __importDefault(require("./number"));
var object_1 = __importDefault(require("./object"));
var regexp_1 = __importDefault(require("./regexp"));
var string_1 = __importDefault(require("./string"));
var undefined_1 = __importDefault(require("./undefined"));
var packers = {
    array: array_1.default,
    boolean: boolean_1.default,
    date: date_1.default,
    null: null_1.default,
    number: number_1.default,
    object: object_1.default,
    regexp: regexp_1.default,
    string: string_1.default,
    undefined: undefined_1.default,
};
var isArray = Array.isArray ||
    (function (val) { return Object.prototype.toString.call(val) === '[object Array]'; });
var unpack = function (val, context) {
    var _type = type_1.default(val, context);
    var packer = packers[_type];
    if (!packer) {
        throw new Error("Daypack: no packer for type " + _type);
    }
    return packer.unpack(val, context);
};
var pack = function (val, context) {
    var _type = type_1.default(val, context);
    var packer = packers[_type];
    if (!packer) {
        throw new Error("Daypack: no packer for type " + _type);
    }
    return packer.pack(val, context);
};
module.exports = {
    packers: packers,
    pack: pack,
    unpack: unpack,
};
