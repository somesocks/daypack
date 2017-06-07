/* eslint-env mocha */

const isArray = Array.isArray;

const RUN_TIME = 128;

const PerformanceTest = (test) => {
	it(`performance test ${test.label || ''}`, (done) => {
		const { call, input, expected } = test;

		let count = 0;
		const start = Date.now();
		while (Date.now() - start < RUN_TIME) {
			const output = isArray(input) ? call(...input) : call(input);
			count++;
		}
		const end = Date.now();
		const time = end - start;

		done();
		console.log(`\t performance: ${count} iterations in ${time}ms, ${(time / count).toFixed(4)} ms/iteration\n`);
	});
};

module.exports = PerformanceTest;
