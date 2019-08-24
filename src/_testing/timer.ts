
import now from './now';

const timer = (func, label) => {
	label = label || ''

	return function wrapper(this: any) {
		const start = now();
		try {
			const _res = func.apply(this, arguments);
			const end = now();
			console.log(`timer: ${label} finished in ${end-start} ms`);
			return _res;
		} catch (err) {
			const end = now();
			console.log(`timer: ${label} failed in ${end-start} ms`);
			throw err;
		}
	};
};

export = timer;
