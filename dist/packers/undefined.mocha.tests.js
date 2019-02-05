/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.undefined', () => {
	it('undefined test 1', () => {
		const req = undefined;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
