"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var __1 = __importDefault(require("../"));
__1.default.V1_OUTPUT = false;
describe('Daypack.packers.array', function () {
    it('array test 1', function () {
        var req = [1, 2, 3];
        var res = __1.default()
            .pack(req)
            .unpack();
        chai_1.default.assert.deepEqual(req, res);
    });
});
