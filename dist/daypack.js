!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){t.exports=r(1)},function(t,n,r){"use strict";var e=r(2),o=r(12),u=function(t,n,r){e[t]={pack:n,unpack:r}},c=function(t,n){n=n||o(t);var r=e[n];if(!r)throw new Error("day-pack: no packer for type "+n+" "+JSON.stringify(t));return r.pack.call(this,t)},i=function(t,n){n=n||o(t);var r=e[n];if(!r)throw new Error("day-pack: no unpacker for type "+n);return r.unpack.call(this,t)},a=function(t){var n={},r={};r.store=function(t){n[t.id]=t},r.fetch=function(t){return n[t]},r.pack=c.bind(r),r.unpack=i.bind(r);var e=r.pack(t);return{result:e,entities:n}},s=function(t){var n=t.result,r=t.entities,e={};e.store=function(t){r[t.id]=t},e.fetch=function(t){return r[t]},e.pack=c.bind(e),e.unpack=i.bind(e);var o=e.unpack(n);return o};t.exports={packers:e,type:o,register:u,pack:a,unpack:s}},function(t,n,r){"use strict";t.exports={array:r(3),boolean:r(4),date:r(5),null:r(6),number:r(7),object:r(8),regexp:r(9),string:r(10),undefined:r(11)}},function(t,n){"use strict";var r=function(t,n){for(var r=[],e=0;e<t.length;e++)r[e]=n(t[e]);return r};t.exports={pack:function t(n){var t=this.pack;return r(n,t)},unpack:function t(n){var t=this.unpack;return r(n,t)}}},function(t,n){"use strict";t.exports={pack:function(t){return t},unpack:function(t){return t}}},function(t,n){"use strict";t.exports={pack:function(t){return{type:"date",value:t.getTime()}},unpack:function(t){return new Date(t.value)}}},function(t,n){"use strict";t.exports={pack:function(t){return t},unpack:function(t){return t}}},function(t,n){"use strict";t.exports={pack:function(t){return t},unpack:function(t){return t}}},function(t,n){"use strict";var r=function(t){return"string"==typeof t||t instanceof String},e=function(t,n){var r={};r.id=t.id;for(var e in t)"id"!==e&&t.hasOwnProperty(e)&&(r[e]=n(t[e]));return r};t.exports={pack:function t(n){var t=this.pack,o=this.store;return n=e(n,t),r(n.id)?(o(n),n.id):n},unpack:function t(n){var t=this.unpack;return n=e(n,t)}}},function(t,n){"use strict";t.exports={pack:function(t){var n=(this.store,{type:"regexp",source:t.source,flags:t.flags,lastIndex:t.lastIndex});return n},unpack:function(t){var n=new RegExp(t.source,t.flags);return n.lastIndex=t.lastIndex,n}}},function(t,n){"use strict";t.exports={pack:function(t){return t},unpack:function t(n){var r=this.fetch,t=this.unpack,e=r(n);return null!=e?t(e):n}}},function(t,n){"use strict";t.exports={pack:function(t){return t},unpack:function(t){return t}}},function(t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=function(t){return"string"==typeof t||t instanceof String},u=function t(n){var t="undefined"==typeof n?"undefined":r(n);switch(t){default:case"undefined":case"boolean":case"number":case"string":case"symbol":case"function":return t;case"object":return null===n?"null":e(n)?"array":o(n.type)?n.type.toLowerCase():null!=n.__proto__&&o(n.__proto__.name)?n.__proto__.name.toLowerCase():null!=n.prototype&&o(n.prototype.name)?n.prototype.name.toLowerCase():null!=n.constructor&&o(n.constructor.name)?n.constructor.name.toLowerCase():"object"}};t.exports=u}])});