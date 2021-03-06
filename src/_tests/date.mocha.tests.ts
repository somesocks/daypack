/* eslint-env mocha */
import chai from 'chai';

import Daypack from '../';
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.date', () => {
	it('date test 1', () => {
		const req = new Date();
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
	it('date test 2', () => {
		const date = new Date();
		const input = date;

		const expected = {
			_daypack: 'v2',
			head: {
				'class': 'date',
				value: date.getTime(),
			},
			heap: {},
		};

		const output = Daypack.pack(input);

		chai.assert.deepEqual(output, expected);
	});
});
