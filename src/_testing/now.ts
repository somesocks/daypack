let now;

let _window;
try {
	_window = window;
} catch(err) {} //eslint-disable-line no-empty

if (_window && _window.performance && _window.performance.now) {
	now = () => _window.performance.now();
} else if (process && process.hrtime) {
	now = () => {
		const hr = process.hrtime();
		return (hr[0] * 1E9 + hr[1] / 1E6);
	};
} else if (Date.now) {
	const _loadTime = Date.now();
	now = () => Date.now() - _loadTime;
} else {
	const _loadTime = new Date().getTime()
	now = () => new Date().getTime() - _loadTime;
}

export = now;
