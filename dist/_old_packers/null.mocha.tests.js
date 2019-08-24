"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var chai_1 = __importDefault(require("chai"));
var __1 = __importDefault(require("../"));
__1.default.V1_OUTPUT = false;
describe('Daypack.packers.null', function () {
    it('null test 1', function () {
        var req = null;
        var res = __1.default()
            .pack(req)
            .unpack();
        chai_1.default.assert.deepEqual(req, res);
    });
});
