/* eslint-env mocha */
import chai from 'chai';

import Daypack from '../';
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
