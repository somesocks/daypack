/* eslint-env mocha */
import chai from 'chai';

import Daypack from '../';
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.number', () => {
	it('number test 1', () => {
		const req = 1;
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
