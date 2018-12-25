/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');

describe('Daypack.packers.null', () => {
	it('null test 1', () => {
		const req = null;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
