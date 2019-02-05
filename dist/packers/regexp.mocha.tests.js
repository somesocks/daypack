/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.regexp', () => {
	it('regexp test 1', () => {
		const req = /test/;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
	it('regexp test 2', () => {
		const re = /^a+$/gi;
		const input = re;

		const expected = {
			_daypack: 'v2',
			head: {
				'class': 'regexp',
				source: '^a+$',
				flags: 'gi',
				lastIndex: 0,
			},
			heap: {},
		};

		const output = Daypack.pack(input);

		chai.assert.deepEqual(output, expected);
	});
});
