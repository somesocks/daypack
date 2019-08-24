
// import now from './now';

const isArray = Array.isArray;

const RUN_TIME = 1024;

const PerformanceTest = (test) => () => {
	let count = 0;
	const start = Date.now();
	while (Date.now() - start < RUN_TIME) {
		test();
		count++;
	}
	const end = Date.now();
	const time = end - start;

	console.log(`\t performance: ${count} iterations in ${time}ms, ${(time / count).toFixed(4)} ms/iteration\n`);
};

export = PerformanceTest;
