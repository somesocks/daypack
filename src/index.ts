/** @namespace Daypack */

import { SerializedPack, Pack } from './types';

import packers from './_packers';

const _packers = packers.packers;
const _pack = packers.pack;
const _unpack = packers.unpack;

/**
* @name Daypack
* @class
* @constructor
* @memberof Daypack
*/
const Daypack = function (this : any) : Pack {
	const self: Pack = this instanceof Daypack ? this : Object.create(Daypack.prototype);

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
Daypack.prototype.withHeap = function withHeap(this: Pack, heap) {
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
Daypack.prototype.withHead = function withHead(this: Pack, head) {
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
Daypack.prototype.pack = function pack(this: Pack, val) {
	const context = {
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
Daypack.prototype.packHeap = function packHeap(this : Pack, val, key) {
	const context = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: {},
		packed: {},
		pack: _pack,
	};

	const _head = _pack(val, context);

	Object.assign(this._heap, context.packed);

	if (key != null) { this._heap[key] = _head; }

	return this;
};



/**
* `unpack` unpacks the head, or accepts an optional "head" to unpack
* @name unpack
* @param val - an optional "head" to use as a base point for unpacking
* @returns the unpacked head
* @memberof Daypack#
*/
Daypack.prototype.unpack = function unpack(this: Pack, val) {
	val = arguments.length > 0 ? val : this._head;

	const context = {
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
Daypack.prototype.each = function each(this: Pack, func) {
	const packed = this._heap;

	const context : any = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (let key in this._heap) {
		if (Object.prototype.hasOwnProperty.call(this._heap, key)) {
			context.packed = {};
			context.unpacked = {};
			const val = _unpack(this._heap[key], context);
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
Daypack.prototype.filter = function filter(this: Pack, _filter, _preselector) {
	_preselector = _preselector || ((key) => true);

	const packed = this._heap;

	const filtered = Daypack();

	const context : any = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (const key in this._heap) {
		if (Object.prototype.hasOwnProperty.call(this._heap, key) && _preselector(key)) {
			context.packed = {};
			context.unpacked = {};
			const val = _unpack(this._heap[key], context);
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
Daypack.prototype.map = function filter(this: Pack, _map, _preselector) {
	_preselector = _preselector || ((key) => true);

	const packed = this._heap;

	const mapped = Daypack();

	const context : any = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (const key in this._heap) {
		if (Object.prototype.hasOwnProperty.call(this._heap, key)) {
			if (_preselector(key)) {
				context.packed = {};
				context.unpacked = {};
				let val = _unpack(this._heap[key], context);
				val = _map(val, key);
				mapped.pack(val);
			} else {
				mapped._heap[key] = this._heap[key];
			}
		}
	}

	mapped._head = this._head;

	return mapped;
};

/**
* `reduce` unpacks everything in the heap in isolation, and calls the 'reducer' function on it,
* to build a new reduced result
* @name reduce
* @param func - a filter function to call
* @returns a new DayPack instance with only the filtered entities in the heap
* @memberof Daypack#
*/
Daypack.prototype.reduce = function reduce(this: Pack, reducer, state, preselector) {
	preselector = preselector || ((key) => true);

	const packed = this._heap;

	const context : any = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (const key in this._heap) {
		if (Object.prototype.hasOwnProperty.call(this._heap, key) && preselector(key)) {
			context.packed = {};
			context.unpacked = {};
			const val = _unpack(this._heap[key], context);
			state = reducer(state, val, key);
		}
	}

	return state;
};

/**
* `toObject` converts the pack into a serializable object
* @name toObject
* @returns a serializable version of the pack
* @memberof Daypack#
*/
Daypack.prototype.toObject = function toObject(this: Pack) {
	if (Daypack.V1_OUTPUT) {
		const pack = {};

		for (let key in this._heap) {
			if (Object.hasOwnProperty.call(this._heap, key)) {
				pack[key] = this._heap[key];
			}
		}

		pack[Daypack.V1_HEAD] = this._head;

		return pack;
	} else {
		const pack = {
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
Daypack.prototype.fromObject = function fromObject(this: Pack, obj) {
	if (
		obj._daypack === 'v2' &&
		'head' in obj &&
		'heap' in obj
	) {
		this._head = obj.head;
		this._heap = obj.heap;
		return this;
	} else if (
		Daypack.V1_HEAD in obj
	) {
		this._head = obj[Daypack.V1_HEAD];
		delete obj[Daypack.V1_HEAD];
		this._heap = obj;
		return this;
	} else {
		throw new Error('Daypack#fromObject: unrecognized object format');
	}
};

/**
* `toJSON` converts the pack into a JSON object
* @name toJSON
* @returns a JSON string
* @memberof Daypack#
*/
Daypack.prototype.toJSON = function toJSON(this: Pack) {
	return JSON.stringify(this.toObject(), null, '\t');
};

/**
* `fromJSON` de-serialized a JSON string into this pack
* @name fromJSON
* @param json - the json to unpack
* @returns a JSON string
* @memberof Daypack#
*/
Daypack.prototype.fromJSON = function fromJSON(this: Pack, json) {
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

Daypack.from = (val: any) : Pack => {
  const pack: Pack = (val instanceof Daypack ? val as Pack : Daypack().pack(val));
  return pack;
}

Daypack.pack = (val: any) : SerializedPack => Daypack()
	.pack(val)
	.toObject();

Daypack.unpack = (val: any) : any => Daypack()
	.fromObject(val)
	.unpack();

/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object
* @memberof Daypack
*/
Daypack.clone = (val : any) : any => Daypack()
	.pack(val)
	.unpack();


Daypack.register = (type, packer) => {
	_packers[type] = packer;
	return Daypack;
};

Daypack.isSerializedPack = function isSerializedPack(obj) {
	if (
		obj &&
		obj._daypack === 'v2' &&
		'head' in obj &&
		'heap' in obj
	) {
		return true;
	} else if (
		obj &&
		Daypack.V1_HEAD in obj
	) {
		return true;
	} else {
		return false;
	}
}

export = Daypack;
