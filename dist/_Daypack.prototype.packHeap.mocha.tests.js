"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("vet/utils/assert"));
var isShape_1 = __importDefault(require("vet/objects/isShape"));
var _1 = __importDefault(require("./"));
describe('Daypack.prototype.packHeap', function () {
    it('can call packHeap', function () {
        var res = _1.default()
            .pack(['a'])
            .packHeap({ id: 'a', val: 'b' })
            .unpack();
        var expected = isShape_1.default([
            {
                id: 'a',
                val: 'b',
            }
        ]);
        console.log('packheap', res);
        assert_1.default(expected(res), 'result is not expected shape');
    });
});
