"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var chai_1 = __importDefault(require("chai"));
var assert = chai_1.default.assert;
//eslint-disable-next-line @typescript-eslint/unbound-method
var isArray = Array.isArray;
var AssertTest = function (test) {
    it("assert test " + (test.label || ''), function (done) {
        var call = test.call, input = test.input, expected = test.expected;
        var output = isArray(input) ? call.apply(void 0, input) : call(input);
        console.log('assert test io', input, output);
        assert.deepEqual(output, expected);
        done();
    });
};
module.exports = AssertTest;
