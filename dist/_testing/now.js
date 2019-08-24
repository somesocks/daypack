"use strict";
var now;
var _window;
try {
    _window = window;
}
catch (err) { }
if (_window && _window.performance && _window.performance.now) {
    now = function () { return _window.performance.now(); };
}
else if (process && process.hrtime) {
    now = function () {
        var hr = process.hrtime();
        return (hr[0] * 1E9 + hr[1] / 1E6);
    };
}
else if (Date.now) {
    var _loadTime_1 = Date.now();
    now = function () { return Date.now() - _loadTime_1; };
}
else {
    var _loadTime_2 = new Date().getTime();
    now = function () { return new Date().getTime() - _loadTime_2; };
}
module.exports = now;
