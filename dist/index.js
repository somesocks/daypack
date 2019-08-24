"use strict";
/** @namespace Daypack */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _packers_1 = __importDefault(require("./_packers"));
var _packers = _packers_1.default.packers;
var _pack = _packers_1.default.pack;
var _unpack = _packers_1.default.unpack;
/**
* @name Daypack
* @class
* @constructor
* @memberof Daypack
*/
var Daypack = function () {
    var self = this instanceof Daypack ? this : Object.create(Daypack.prototype);
    self._head = undefined;
    self._heap = {};
    self._type_key = Daypack.TYPE_KEY;
    self._id_key = Daypack.ID_KEY;
    return self;
};
/**
* `withHeap` allows you to manually set the heap for a pack
* @name withHeap
* @param heap
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.withHeap = function withHeap(heap) {
    this._heap = heap;
    return this;
};
/**
* `withHead` allows you to manually set the head for a pack
* @name withHead
* @param head
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.withHead = function withHead(head) {
    this._head = head;
    return this;
};
/**
* `pack` packs a value into the heap, and updates the head
* @name pack
* @param val
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.pack = function pack(val) {
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: {},
        packed: {},
        pack: _pack,
    };
    this._head = _pack(val, context);
    Object.assign(this._heap, context.packed);
    return this;
};
/**
* `packHeap` packs a value into the heap, but does not update the head
* @name packHeap
* @param val
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.packHeap = function packHeap(val, key) {
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: {},
        packed: this._heap,
        pack: _pack,
    };
    var _head = _pack(val, context);
    if (key != null) {
        this._heap[key] = _head;
    }
    return this;
};
/**
* `unpack` unpacks the head, or accepts an optional "head" to unpack
* @name unpack
* @param val - an optional "head" to use as a base point for unpacking
* @returns the unpacked head
* @memberof Daypack#
*/
Daypack.prototype.unpack = function unpack(val) {
    val = arguments.length > 0 ? val : this._head;
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: {},
        packed: this._heap,
        unpack: _unpack,
    };
    return _unpack(val, context);
};
/**
* `each` unpacks everything in the heap in isolation, and calls the 'each' function on it
* @name each
* @param func - an each function to call
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.each = function each(func) {
    var packed = this._heap;
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: undefined,
        packed: undefined,
        unpack: _unpack,
    };
    for (var key in this._heap) {
        if (this._heap.hasOwnProperty(key)) {
            context.packed = {};
            context.unpacked = {};
            var val = _unpack(this._heap[key], context);
            func(val, key);
        }
    }
    return this;
};
/**
* `filter` unpacks everything in the heap in isolation, and calls the 'filter' function on it,
* to build a new pack
* @name filter
* @param func - a filter function to call
* @returns a new DayPack instance with only the filtered entities in the heap
* @memberof Daypack#
*/
Daypack.prototype.filter = function filter(_filter, _preselector) {
    _preselector = _preselector || (function (key) { return true; });
    var packed = this._heap;
    var filtered = Daypack();
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: undefined,
        packed: undefined,
        unpack: _unpack,
    };
    for (var key in this._heap) {
        if (this._heap.hasOwnProperty(key) && _preselector(key)) {
            context.packed = {};
            context.unpacked = {};
            var val = _unpack(this._heap[key], context);
            if (_filter(val, key)) {
                filtered.pack(val);
            }
        }
    }
    filtered._head = this._head;
    return filtered;
};
/**
* `map` unpacks everything in the heap in isolation, and calls the 'map' function on it,
* to build a new pack
* @name map
* @param func - a map function to call
* @returns a new DayPack instance with the mapped entities in the heap
* @memberof Daypack#
*/
Daypack.prototype.map = function filter(_map, _preselector) {
    _preselector = _preselector || (function (key) { return true; });
    var packed = this._heap;
    var mapped = Daypack();
    var context = {
        type_key: this._type_key,
        id_key: this._id_key,
        unpacked: undefined,
        packed: undefined,
        unpack: _unpack,
    };
    for (var key in this._heap) {
        if (this._heap.hasOwnProperty(key)) {
            if (_preselector(key)) {
                context.packed = {};
                context.unpacked = {};
                var val = _unpack(this._heap[key], context);
                val = _map(val, key);
                mapped.pack(val);
            }
            else {
                mapped._heap[key] = this._heap[key];
            }
        }
    }
    mapped._head = this._head;
    return mapped;
};
/**
* `toObject` converts the pack into a serializable object
* @name toObject
* @returns a serializable version of the pack
* @memberof Daypack#
*/
Daypack.prototype.toObject = function toObject() {
    if (Daypack.V1_OUTPUT) {
        var pack = {};
        for (var key in this._heap) {
            if (Object.hasOwnProperty.call(this._heap, key)) {
                pack[key] = this._heap[key];
            }
        }
        pack[Daypack.V1_HEAD] = this._head;
        return pack;
    }
    else {
        var pack = {
            _daypack: 'v2',
            head: this._head,
            heap: this._heap,
        };
        return pack;
    }
};
/**
* `fromObject` de-serializes a serialized version into a DayPack instance
* @name fromObject
* @param obj - the object to unpack
* @returns this
* @memberof Daypack#
*/
Daypack.prototype.fromObject = function fromObject(obj) {
    if (obj._daypack === 'v2' &&
        'head' in obj &&
        'heap' in obj) {
        this._head = obj.head;
        this._heap = obj.heap;
        return this;
    }
    else if (Daypack.V1_HEAD in obj) {
        this._head = obj[Daypack.V1_HEAD];
        delete obj[Daypack.V1_HEAD];
        this._heap = obj;
        return this;
    }
    else {
        throw new Error('Daypack#fromObject: unrecognized object format');
    }
};
/**
* `toJSON` converts the pack into a JSON object
* @name toJSON
* @returns a JSON string
* @memberof Daypack#
*/
Daypack.prototype.toJSON = function toJSON() {
    return JSON.stringify(this.toObject(), null, '\t');
};
/**
* `fromJSON` de-serialized a JSON string into this pack
* @name fromJSON
* @param json - the json to unpack
* @returns a JSON string
* @memberof Daypack#
*/
Daypack.prototype.fromJSON = function fromJSON(json) {
    return this.fromObject(JSON.parse(json));
};
Daypack.ID_KEY = 'id';
Daypack.TYPE_KEY = 'class';
Daypack.V1_OUTPUT = true;
Daypack.V1_HEAD = '__daypack__';
/**
* `fromJSON` de-serialized a JSON string into this pack
* @name fromJSON
* @param json - the json to unpack
* @returns a JSON string
* @memberof Daypack#
*/
Daypack.pack = function (val) { return Daypack()
    .pack(val)
    .toObject(); };
Daypack.unpack = function (val) { return Daypack()
    .fromObject(val)
    .unpack(); };
/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object
* @memberof Daypack
*/
Daypack.clone = function (val) { return Daypack()
    .pack(val)
    .unpack(); };
Daypack.register = function (type, packer) {
    _packers[type] = packer;
    return Daypack;
};
module.exports = Daypack;
