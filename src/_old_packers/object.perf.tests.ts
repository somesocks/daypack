/* eslint-env mocha */
import chai from 'chai';

import Daypack from '../';
Daypack.V1_OUTPUT = false;

import LARGE_DATA_SET from '../_testing/reddit.json';

for (let i = 0; i < 10000; i++) {
	const output = Daypack.pack(LARGE_DATA_SET);
}
