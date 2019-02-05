/* eslint-env mocha */
const chai = require('chai');

const Daypack = require('../');
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.string', () => {
	it('string test 1', () => {
		const req = 'test';
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
