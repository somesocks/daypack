/* eslint-env mocha */

const spider = require('../src');

const AssertTest = require('./AssertTest');
const PerformanceTest = require('./PerformanceTest');

const TESTS = [
	{
		label: 'basic test',
		call: spider.pack,
		input: {
			id: 'order.123',
			item: {
				id: 'item.123',
				name: 'some item',
			},
			for: {
				id: 'user.123',
				name: 'test user',
			},
		},
		expected: {
			result: 'order.123',
			entities: {
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
		},
	},
	{
		label: 'large test 2',
		call: spider.pack,
		input: require('./reddit.json'),
		expected: spider.pack(require('./reddit.json')),
	},
];


describe('spider tests', () => {
	describe('assert tests', () => { TESTS.forEach(AssertTest); });

	describe('performance tests', () => { TESTS.forEach(PerformanceTest); });
});
