"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("vet/utils/assert"));
var _1 = __importDefault(require("./"));
describe('Daypack.prototype.reduce', function () {
    it('can call reduce', function () {
        var pack = _1.default.from([{ id: 'a', val: 1 }, { id: 'b', val: 2 }, { id: 'c', val: 3 }]);
        var sum = pack.reduce(function (sum, obj) { return sum + obj.val; }, 0);
        assert_1.default(sum === 6, 'reduce didnt sum correctly');
    });
    it('preselector works', function () {
        var pack = _1.default.from([{ id: 'a', val: 1 }, { id: 'b', val: 2 }, { id: 'c', val: 3 }]);
        var sum = pack.reduce(function (sum, obj) { return sum + obj.val; }, 0, function (id) { return id !== 'b'; });
        assert_1.default(sum === 4, 'reduce didnt sum correctly');
    });
});
