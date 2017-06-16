/* eslint-env mocha */

const daypack = require('../src');

const AssertTest = require('./AssertTest');
const PerformanceTest = require('./PerformanceTest');

const obj1 = {
	id: 'obj.1',
};

const obj2 = {
	id: 'obj.2',
};

obj1.ref = obj2;
obj2.ref = obj1;

const TESTS = [
	{
		label: 'basic test',
		call: daypack.pack,
		input: [
			{
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
			{
				id_key: 'id',
				type_key: 'type',
				serialize: true,
			},
		],
		expected: {
			__daypack: true,
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
			options: {
				id_key: 'id',
				type_key: 'type',
				serialize: true,
			},
		},
	},
	{
		label: 'large test 2',
		call: daypack.pack,
		input: require('./reddit.json'),
		expected: daypack.pack(require('./reddit.json')),
	},
	{
		label: 'date test 1',
		call: daypack.pack,
		input: new Date(1496906844700),
		expected: daypack.pack(new Date(1496906844700)),
	},
	{
		label: 'date test 2',
		call: (val) => daypack.unpack(daypack.pack(val)),
		input: new Date(1496906844700),
		expected: daypack.unpack(daypack.pack(new Date(1496906844700))),
	},
	{
		label: 'regexp test 1',
		call: (val) => daypack.pack(val),
		input: /^a+$/gi,
		expected: daypack.pack(/^a+$/gi),
	},
	{
		label: 'regexp test 2',
		call: (val) => daypack.unpack(daypack.pack(val)),
		input: /^a+$/gi,
		expected: daypack.unpack(daypack.pack(/^a+$/gi)),
	},
	{
		label: 'circular pack test 1',
		call: daypack.pack,
		input: obj1,
		expected: {
			__daypack: true,
			result: 'obj.1',
			entities: {
				'obj.1': {
					id: 'obj.1',
					ref: 'obj.2',
				},
				'obj.2': {
					id: 'obj.2',
					ref: 'obj.1',
				},
			},
			options: {
				id_key: 'id',
				serialize: false,
				type_key: 'class',
			},
		},
	},
	{
		label: 'circular unpack test 1',
		call: daypack.unpack,
		input: {
			result: 'obj.1',
			entities: {
				'obj.1': {
					id: 'obj.1',
					ref: 'obj.2',
				},
				'obj.2': {
					id: 'obj.2',
					ref: 'obj.1',
				},
			},
		},
		expected: obj1,
	},
];


describe('spider tests', () => {
	describe('assert tests', () => { TESTS.forEach(AssertTest); });

	describe('performance tests', () => { TESTS.forEach(PerformanceTest); });
});
