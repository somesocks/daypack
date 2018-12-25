/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');

describe('Daypack.packers.boolean', () => {
	it('boolean test 1', () => {
		const req = true;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
