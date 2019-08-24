"use strict";
// import now from './now';
var isArray = Array.isArray;
var RUN_TIME = 1024;
var PerformanceTest = function (test) { return function () {
    var count = 0;
    var start = Date.now();
    while (Date.now() - start < RUN_TIME) {
        test();
        count++;
    }
    var end = Date.now();
    var time = end - start;
    console.log("\t performance: " + count + " iterations in " + time + "ms, " + (time / count).toFixed(4) + " ms/iteration\n");
}; };
module.exports = PerformanceTest;
