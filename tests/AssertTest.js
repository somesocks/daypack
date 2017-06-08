/* eslint-env mocha */

const chai = require('chai');
const { assert } = chai;

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

module.exports = AssertTest;
