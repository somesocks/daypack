
import chai from 'chai';

import Daypack from '../';
Daypack.V1_OUTPUT = false;

describe('Daypack.packers.array', () => {
	it('array test 1', () => {
		const req = [ 1, 2, 3 ];
		const res = Daypack()
			.pack(req)
			.unpack();

		chai.assert.deepEqual(req, res);
	});
});
