"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var chai_1 = __importDefault(require("chai"));
var _1 = __importDefault(require("./"));
_1.default.V1_OUTPUT = false;
describe('Daypack', function () {
    it('can unpack v2 daypack format', function () {
        var input = {
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
        var output = _1.default().fromObject(input).toObject();
        chai_1.default.assert.deepEqual(output, expected);
    });
    it('can unpack v1 daypack format', function () {
        var input = {
            __daypack__: 'order.123',
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
        var output = _1.default().fromObject(input).toObject();
        chai_1.default.assert.deepEqual(output, expected);
    });
});
