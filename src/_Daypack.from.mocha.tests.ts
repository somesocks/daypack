
import chai from 'chai';

import assert from 'vet/utils/assert';
import isShape from 'vet/objects/isShape';

import Daypack from './';

describe(
	'Daypack.from',
	() => {

		it(
			'builds a new pack',
			() => {
				let pack = Daypack.from({ foo: 'bar' });
				assert(
					pack instanceof Daypack,
					'pack is not instance of Daypack'
				);

				assert(
					isShape({ foo: 'bar' })(pack.unpack()),
					'unpacked value is wrong'
				);

			}
		);

		it(
			'returns an existing pack',
			() => {
				let pack = Daypack.from({ foo: 'bar' });
				let pack2 = Daypack.from(pack);
				assert(
					pack2 instanceof Daypack,
					'pack2 is not instance of Daypack'
				);

				assert(
					pack === pack2,
					'did not reuse pack'
				);

			}
		);

	}
);
