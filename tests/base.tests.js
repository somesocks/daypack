/* eslint-env mocha */

const Daypack = require('../src');

const chai = require('chai');
const { assert } = chai;

const PerformanceTest = require('./PerformanceTest');

const Test1 = () => {
	const input = {
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

	const expected = {
		'__daypack__': 'order.123',
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

	const output = Daypack.pack(input);

	assert.deepEqual(output, expected);
};

const Test2 = () => {
	const input = require('./reddit.json');

	const output = Daypack.pack(input);

	// assert.deepEqual(output, expected);
};

const Test3 = () => {
	const date = new Date();
	const input = date;

	const expected = {
		'__daypack__': {
			'class': 'date',
			value: date.getTime(),
		},
	};

	const output = Daypack.pack(input);

	assert.deepEqual(output, expected);
};

const Test4 = () => {
	const re = /^a+$/gi;
	const input = re;

	const expected = {
		'__daypack__': {
			'class': 'regexp',
			source: '^a+$',
			flags: 'gi',
			lastIndex: 0,
		},
	};

	const output = Daypack.pack(input);

	assert.deepEqual(output, expected);
};

const Test5 = () => {
	const obj1 = {
		id: 'obj.1',
	};

	const obj2 = {
		id: 'obj.2',
	};

	obj1.ref = obj2;
	obj2.ref = obj1;

	const input = obj1;

	const expected = {
		'__daypack__': 'obj.1',
		'obj.1': {
			id: 'obj.1',
			ref: 'obj.2',
		},
		'obj.2': {
			id: 'obj.2',
			ref: 'obj.1',
		},
	};

	const output = Daypack.pack(input);

	assert.deepEqual(output, expected);


	const input2 = Daypack.unpack(output);

	assert.deepEqual(input2, input);
};

const Test6 = () => {
	const obj1 = {
		id: 'obj.1',
	};

	const obj2 = {
		id: 'obj.2',
	};

	obj1.ref = obj2;
	obj2.ref = obj1;

	const input = obj1;

	const expected = {
		'__daypack__': 'obj.1',
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
	};

	const output = Daypack()
		.pack(input)
		.map((val, key) => { if (val.ref) { val.ref2 = val.ref; } return val; })
		.toObject();

	assert.deepEqual(output, expected);
};

const TESTS = [
	Test1,
	Test2,
	Test3,
	Test4,
	Test5,
	Test6,
];


describe('daypack', () => {
	describe('assertion tests', () => {
		TESTS.map((test, i) => it(`test ${i}`, test));
	});

	describe('performance tests', () => {
		TESTS.map((test, i) => it(`test ${i}`, PerformanceTest(test)));
	});
});
