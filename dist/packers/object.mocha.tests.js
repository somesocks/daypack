/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');
Daypack.V1_OUTPUT = false;

const PerformanceTest = require('../../testing/PerformanceTest');

const LARGE_DATA_SET = require('../../testing/reddit.json');

describe('Daypack.packers.object', () => {
	it('object test 1', () => {
		const req = { a: 1, b: 2, c: 3 };
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});

	it('object test 2', () => {
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

		const output = Daypack.pack(input);

		chai.assert.deepEqual(output, expected);
	});

	it('object test 3', () => {
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

		const output = Daypack.pack(input);

		chai.assert.deepEqual(output, expected);


		const input2 = Daypack.unpack(output);

		chai.assert.deepEqual(input2, input);
	});

	it('object test 4', () => {
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

		const output = Daypack()
			.pack(input)
			.map((val, key) => { val.ref2 = val.ref; return val; })
			.toObject();

		chai.assert.deepEqual(output, expected);
	});

	it(
		'object test 5',
		PerformanceTest(
			() => {
				const output = Daypack.pack(LARGE_DATA_SET);
				// assert.deepEqual(output, expected);
			}
		)
	);

});
