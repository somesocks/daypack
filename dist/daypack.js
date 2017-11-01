!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";r(2);var n=r(3),o=n.packers,c=n.pack,i=n.unpack,u=function t(e){var r=Object.create(t.prototype);return r.entities=e||{},r.type_key=t.TYPE_KEY,r.id_key=t.ID_KEY,r.head=t.HEAD,r};u.prototype.pack=function(t){var e=this.type_key,r=this.id_key,n=this.head,o=this.entities,i={type_key:e,id_key:r,unpacked:{},packed:o,pack:c},u=c(t,i);return o[n]=u,this},u.prototype.unpack=function(t){var e=this.type_key,r=this.id_key,n=this.head,o=this.entities;t=t||n;var c={type_key:e,id_key:r,unpacked:{},packed:o,unpack:i};return i(t,c)},u.prototype.map=function(t,e){var r=this.entities,n=Object.map(r,t,e);return u(n)},u.prototype.filter=function(t,e){var r=this.entities,n=Object.filter(r,t,e);return u(n)},u.prototype.toObject=function(){return this.entities},u.prototype.fromObject=function(t){return this.entities=t,this},u.prototype.toJSON=function(){var t=this.toObject();return JSON.stringify(t)},u.prototype.fromJSON=function(t){var e=JSON.parse(t);return this.fromObject(e)},u.ID_KEY="id",u.TYPE_KEY="class",u.HEAD="__daypack__",u.register=function(t,e){return o[t]=e,u},u.pack=function(t){return u().pack(t).toObject()},u.unpack=function(t){return u().fromObject(t).unpack()},u.toJSON=function(t){return u().pack(t).toJSON()},u.fromJSON=function(t){return u().fromJSON(t)},t.exports=u},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var o=[].concat(n(r(2)),n(r(3)),n(r(8)));t.exports=function(t){for(var e=0;e<o.length;e++)o[e](t)}},function(t,e){"use strict";t.exports=[]},function(t,e,r){"use strict";t.exports=[r(4),r(5),r(6),r(7)]},function(t,e){"use strict";function r(){var t={};for(var e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t[e]=this[e]);return t}function n(t){Object.copy&&!t||(Object.copy=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r={};for(var n in this)if(Object.prototype.hasOwnProperty.call(this,n)){var o=this[n];t.call(e,o,n,this)&&(r[n]=this[n])}return r}function n(t){Object.filter&&!t||(Object.filter=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){for(var r in this)Object.prototype.hasOwnProperty.call(this,r)&&t.call(e,this[r],r,this)}function n(t){Object.forEach&&!t||(Object.forEach=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r={};for(var n in this)if(Object.prototype.hasOwnProperty.call(this,n)){var o=this[n];r[n]=t.call(e,o,n,this)}return r}function n(t){Object.map&&!t||(Object.map=function(){return r.call.apply(r,arguments)})}t.exports=n,n()},function(t,e,r){"use strict";t.exports=[r(9),r(10),r(11),r(12),r(13)]},function(t,e){"use strict";function r(t){var e=this,r=function(r){t.has(r)&&e.delete(r)};return this.forEach(r),this}function n(t){!Set||Set.prototype.complement&&!t||Object.defineProperty(Set.prototype,"complement",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r=new Set,n=function(n){t.call(e,n)&&r.add(n)};return this.forEach(n),r}function n(t){!Set||Set.filter&&!t||(Set.filter=function(){return r.call.apply(r,arguments)}),!Set||Set.prototype.filter&&!t||Object.defineProperty(Set.prototype,"filter",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t){var e=this,r=function(r){t.has(r)||e.delete(r)};return this.forEach(r),this}function n(t){!Set||Set.prototype.intersection&&!t||Object.defineProperty(Set.prototype,"intersection",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t,e){var r=new Set,n=function(n){r.add(t.call(e,n))};return this.forEach(n),r}function n(t){!Set||Set.map&&!t||(Set.filter=function(){return r.call.apply(r,arguments)}),!Set||Set.prototype.map&&!t||Object.defineProperty(Set.prototype,"map",{value:r})}t.exports=n,n()},function(t,e){"use strict";function r(t){var e=this,r=function(t){return e.add(t)};return t.forEach(r),this}function n(t){!Set||Set.prototype.union&&!t||Object.defineProperty(Set.prototype,"union",{value:r})}t.exports=n,n()}])})},function(t,e,r){"use strict";var n=("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(4)),o={array:r(5),boolean:r(6),date:r(7),daypack:r(8),null:r(9),number:r(10),object:r(11),regexp:r(12),string:r(13),undefined:r(14)},c=function t(e,r){var c=n(e,r),t=o[c];if(!t)throw new Error("Daypack: no unpacker for type "+c);return t},i=function(t,e){return c(t,e).unpack(t,e)},u=function(t,e){return c(t,e).pack(t,e)};t.exports={packers:o,pack:u,unpack:i}},function(t,e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=function(t){return"string"==typeof t||t instanceof String},c=function(t,e){var c=e.type_key,i="undefined"==typeof t?"undefined":r(t);switch(i){default:case"undefined":case"boolean":case"number":case"string":case"symbol":case"function":return i;case"object":return null===t?"null":n(t)?"array":o(t[c])?t[c].toLowerCase():null!=t.__proto__&&o(t.__proto__.name)?t.__proto__.name.toLowerCase():null!=t.prototype&&o(t.prototype.name)?t.prototype.name.toLowerCase():null!=t.constructor&&o(t.constructor.name)?t.constructor.name.toLowerCase():"object"}};t.exports=c},function(t,e){"use strict";var r=function t(e,r){for(var t=r.pack,n=[],o=0;o<e.length;o++)n[o]=t(e[o],r);return n},n=function t(e,r){for(var t=r.unpack,n=[],o=0;o<e.length;o++)n[o]=t(e[o],r);return n};t.exports={pack:r,unpack:n}},function(t,e){"use strict";var r=function(t,e){return t},n=function(t,e){return t};t.exports={pack:r,unpack:n}},function(t,e){"use strict";function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n=function(t,e){var n,o=e.type_key,c=(n={},r(n,o,"date"),r(n,"value",t.getTime()),n);return c},o=function(t,e){var r=new Date(t.value);return r};t.exports={pack:n,unpack:o}},function(t,e){"use strict";var r=function(t,e){var r=(e.unpacked,e.packed),n=t.head;return Object.assign(r,t.entities),t[n]},n=function(t,e){return t};t.exports={pack:r,unpack:n}},function(t,e){"use strict";var r=function(t,e){return t},n=function(t,e){return t};t.exports={pack:r,unpack:n}},function(t,e){"use strict";var r=function(t,e){return t},n=function(t,e){return t};t.exports={pack:r,unpack:n}},function(t,e){"use strict";var r=function(t){return"string"==typeof t||t instanceof String},n=function t(e,n){var t=n.pack,o=n.packed,c=(n.unpacked,n.id_key),i=e[c];if(r(i)){var u=o[i];if(u)return i;var a={};a[c]=i,o[i]=a;for(var p in e)p!==c&&e.hasOwnProperty(p)&&(a[p]=t(e[p],n));return i}var f={};f[c]=i;for(var s in e)s!==c&&e.hasOwnProperty(s)&&(f[s]=t(e[s],n));return f},o=function t(e,n){var t=n.unpack,o=(n.packed,n.unpacked),c=n.id_key,i=e[c];if(r(i)){var u=o[i];if(u)return u;var a={};a[c]=i,o[i]=a;for(var p in e)p!==c&&e.hasOwnProperty(p)&&(a[p]=t(e[p],n));return a}var f={};for(var s in e)s!==c&&e.hasOwnProperty(s)&&(f[s]=t(e[s],n));return f};t.exports={pack:n,unpack:o}},function(t,e){"use strict";function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n=function(t,e){var n,o=e.type_key,c=(n={},r(n,o,"regexp"),r(n,"source",t.source),r(n,"flags",t.flags),r(n,"lastIndex",t.lastIndex),n);return c},o=function(t,e){var r=new RegExp(t.source,t.flags);return r.lastIndex=t.lastIndex,r};t.exports={pack:n,unpack:o}},function(t,e){"use strict";var r=function(t,e){return t},n=function t(e,r){var t=r.unpack,n=r.packed,o=(r.unpacked,n[e]);return null!=o?t(o,r):e};t.exports={pack:r,unpack:n}},function(t,e){"use strict";var r=function(t,e){return t},n=function(t,e){return t};t.exports={pack:r,unpack:n}}])});