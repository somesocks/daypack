/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');

describe('Daypack.packers.string', () => {
	it('string test 1', () => {
		const req = 'test';
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
