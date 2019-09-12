
import chai from 'chai';

import assert from 'vet/utils/assert';
import isShape from 'vet/objects/isShape';

import Daypack from './';

describe(
	'Daypack.prototype.reduce',
	() => {

		it(
			'can call reduce',
			() => {
				let pack = Daypack.from([ { id: 'a', val: 1 }, { id: 'b', val: 2 }, { id: 'c', val: 3 } ]);

				let sum = pack.reduce(
					(sum, obj) => sum + obj.val,
					0
				);

				assert(
					sum === 6,
					'reduce didnt sum correctly'
				);
			}
		);

		it(
			'preselector works',
			() => {
				let pack = Daypack.from([ { id: 'a', val: 1 }, { id: 'b', val: 2 }, { id: 'c', val: 3 } ]);

				let sum = pack.reduce(
					(sum, obj) => sum + obj.val,
					0,
					(id) => id !== 'b'
				);

				assert(
					sum === 4,
					'reduce didnt sum correctly'
				);
			}
		);

	}
);
