
import chai from 'chai';

import assert from 'vet/utils/assert';
import isShape from 'vet/objects/isShape';

import Daypack from './';

describe(
	'Daypack.prototype.packHeap',
	() => {

		it(
			'can call packHeap',
			() => {
				const res = Daypack()
					.pack([ 'a' ])
					.packHeap({ id: 'a', val: 'b' })
					.unpack();

				const expected = isShape([
					{
						id: 'a',
						val: 'b',
					}
				]);

				assert(
					expected(res),
					'result is not expected shape'
				);
			}
		);

	}
);
