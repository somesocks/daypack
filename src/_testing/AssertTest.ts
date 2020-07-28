
import chai from 'chai';
const { assert } = chai;

//eslint-disable-next-line @typescript-eslint/unbound-method
const isArray = Array.isArray;

const AssertTest = (test) => {
	it(`assert test ${test.label || ''}`, (done) => {
		const { call, input, expected } = test;

		const output = isArray(input) ? call(...input) : call(input);
		console.log('assert test io', input, output);

		assert.deepEqual(output, expected);
		done();
	});
};

export = AssertTest;
