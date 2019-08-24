"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var chai_1 = __importDefault(require("chai"));
var __1 = __importDefault(require("../"));
__1.default.V1_OUTPUT = false;
describe('Daypack.packers.regexp', function () {
    it('regexp test 1', function () {
        var req = /test/;
        var res = __1.default()
            .pack(req)
            .unpack();
        chai_1.default.assert.deepEqual(req, res);
    });
    it('regexp test 2', function () {
        var re = /^a+$/gi;
        var input = re;
        var expected = {
            _daypack: 'v2',
            head: {
                'class': 'regexp',
                source: '^a+$',
                flags: 'gi',
                lastIndex: 0,
            },
            heap: {},
        };
        var output = __1.default.pack(input);
        chai_1.default.assert.deepEqual(output, expected);
    });
});
