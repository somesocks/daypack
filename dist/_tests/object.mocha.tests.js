"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var chai_1 = __importDefault(require("chai"));
var __1 = __importDefault(require("../"));
__1.default.V1_OUTPUT = false;
var PerformanceTest_1 = __importDefault(require("../_testing/PerformanceTest"));
var reddit_json_1 = __importDefault(require("../_testing/reddit.json"));
var SMALL_DATA_SET = {
    a: { a: 1, b: 2, c: 3 },
    b: { a: 1, b: 2, c: 3 },
    c: { a: 1, b: 2, c: 3 },
};
describe('Daypack.packers.object', function () {
    it('object test 1', function () {
        var req = { a: 1, b: 2, c: 3 };
        var res = __1.default()
            .pack(req)
            .unpack();
        chai_1.default.assert.deepEqual(req, res);
    });
    it('object test 2', function () {
        var input = {
            id: 'order.123',
            item: {
                id: 'item.123',
                name: 'some item',
            },
            for: {
                id: 'user.123',
                name: 'test user',
            },
        };
        var expected = {
            _daypack: 'v2',
            head: 'order.123',
            heap: {
                'item.123': {
                    id: 'item.123',
                    name: 'some item',
                },
                'user.123': {
                    id: 'user.123',
                    name: 'test user',
                },
                'order.123': {
                    id: 'order.123',
                    item: 'item.123',
                    for: 'user.123',
                },
            },
        };
        var output = __1.default.pack(input);
        chai_1.default.assert.deepEqual(output, expected);
    });
    it('object test 3', function () {
        var obj1 = {
            id: 'obj.1',
        };
        var obj2 = {
            id: 'obj.2',
        };
        obj1.ref = obj2;
        obj2.ref = obj1;
        var input = obj1;
        var expected = {
            _daypack: 'v2',
            head: 'obj.1',
            heap: {
                'obj.1': {
                    id: 'obj.1',
                    ref: 'obj.2',
                },
                'obj.2': {
                    id: 'obj.2',
                    ref: 'obj.1',
                },
            },
        };
        var output = __1.default.pack(input);
        chai_1.default.assert.deepEqual(output, expected);
        var input2 = __1.default.unpack(output);
        chai_1.default.assert.deepEqual(input2, input);
    });
    it('object test 4', function () {
        var obj1 = {
            id: 'obj.1',
        };
        var obj2 = {
            id: 'obj.2',
        };
        obj1.ref = obj2;
        obj2.ref = obj1;
        var input = obj1;
        var expected = {
            _daypack: 'v2',
            head: 'obj.1',
            heap: {
                'obj.1': {
                    id: 'obj.1',
                    ref: 'obj.2',
                    ref2: 'obj.2',
                },
                'obj.2': {
                    id: 'obj.2',
                    ref: 'obj.1',
                    ref2: 'obj.1',
                },
            },
        };
        var output = __1.default()
            .pack(input)
            .map(function (val, key) { val.ref2 = val.ref; return val; })
            .toObject();
        chai_1.default.assert.deepEqual(output, expected);
    });
    it('perfomance test (small data set)', PerformanceTest_1.default(function () {
        var output = __1.default.pack(SMALL_DATA_SET);
        // assert.deepEqual(output, expected);
    }));
    it('performance test (large data set)', PerformanceTest_1.default(function () {
        var output = __1.default.pack(reddit_json_1.default);
        // assert.deepEqual(output, expected);
    }));
});
