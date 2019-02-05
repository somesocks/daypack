/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('./');
Daypack.V1_OUTPUT = false;

describe('Daypack', () => {

	it(
		'can unpack v2 daypack format',
		() => {

			const input = {
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

			const output = Daypack().fromObject(input).toObject();
			chai.assert.deepEqual(output, expected);
		}
	);

	it(
		'can unpack v1 daypack format',
		() => {

			const input = {
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

			const output = Daypack().fromObject(input).toObject();
			chai.assert.deepEqual(output, expected);
		}
	);

});
