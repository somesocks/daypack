/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');

describe('Daypack.packers.number', () => {
	it('number test 1', () => {
		const req = 1;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
