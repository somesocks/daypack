"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("vet/utils/assert"));
var isShape_1 = __importDefault(require("vet/objects/isShape"));
var _1 = __importDefault(require("./"));
describe('Daypack.from', function () {
    it('builds a new pack', function () {
        var pack = _1.default.from({ foo: 'bar' });
        assert_1.default(pack instanceof _1.default, 'pack is not instance of Daypack');
        assert_1.default(isShape_1.default({ foo: 'bar' })(pack.unpack()), 'unpacked value is wrong');
    });
    it('returns an existing pack', function () {
        var pack = _1.default.from({ foo: 'bar' });
        var pack2 = _1.default.from(pack);
        assert_1.default(pack2 instanceof _1.default, 'pack2 is not instance of Daypack');
        assert_1.default(pack === pack2, 'did not reuse pack');
    });
});
