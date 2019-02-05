/** @namespace Daypack */

const packers = require('./packers');

const _packers = packers.packers;
const _pack = packers.pack;
const _unpack = packers.unpack;

/**
* @name Daypack
* @class
* @constructor
* @memberof Daypack
*/
const Daypack = function () {
	const self = this instanceof Daypack ? this : Object.create(Daypack.prototype);

	self._head = undefined;
	self._heap = {};

	self._type_key = Daypack.TYPE_KEY;
	self._id_key = Daypack.ID_KEY;

	return self;
};

Daypack.prototype.withHeap = function withHeap(heap) {
	this._heap = heap;
	return this;
};

Daypack.prototype.withHead = function withHead(head) {
	this._head = head;
	return this;
};

Daypack.prototype.pack = function pack(val) {
	const context = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: {},
		packed: this._heap,
		pack: _pack,
	};

	this._head = _pack(val, context);

	return this;
};

Daypack.prototype.unpack = function unpack(val) {
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

Daypack.prototype.each = function each(func) {
	const packed = this._heap;

	const context = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (let key in this._heap) {
		if (this._heap.hasOwnProperty(key)) {
			context.packed = {};
			context.unpacked = {};
			const val = _unpack(this._heap[key], context);
			func(val, key);
		}
	}

	return this;
};

Daypack.prototype.filter = function filter(func) {
	const packed = this._heap;

	const filtered = Daypack();

	const context = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (const key in this._heap) {
		if (this._heap.hasOwnProperty(key)) {
			context.packed = {};
			context.unpacked = {};
			const val = _unpack(this._heap[key], context);
			if (func(val, key)) {
				filtered.pack(val);
			}
		}
	}

	filtered._head = this._head;

	return filtered;
};

Daypack.prototype.map = function filter(func) {
	const packed = this._heap;

	const mapped = Daypack();

	const context = {
		type_key: this._type_key,
		id_key: this._id_key,
		unpacked: undefined,
		packed: undefined,
		unpack: _unpack,
	};

	for (const key in this._heap) {
		if (this._heap.hasOwnProperty(key)) {
			context.packed = {};
			context.unpacked = {};
			let val = _unpack(this._heap[key], context);
			val = func(val, key);
			mapped.pack(val);
		}
	}

	mapped._head = this._head;

	return mapped;
};

Daypack.prototype.toObject = function toObject() {
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

Daypack.prototype.fromObject = function fromObject(obj) {
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

Daypack.prototype.toJSON = function toJSON() {
	return JSON.stringify(this.toObject(), null, '\t');
};

Daypack.prototype.fromJSON = function fromJSON(json) {
	return this.fromObject(JSON.parse(json));
};


Daypack.ID_KEY = 'id';
Daypack.TYPE_KEY = 'class';

Daypack.V1_OUTPUT = true;
Daypack.V1_HEAD = '__daypack__';

Daypack.pack = (val) => Daypack()
	.pack(val)
	.toObject();

Daypack.unpack = (val) => Daypack()
	.fromObject(val)
	.unpack();

/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object
* @memberof Daypack
*/
Daypack.clone = (val) => Daypack()
	.pack(val)
	.unpack();


Daypack.register = (type, packer) => {
	_packers[type] = packer;
	return Daypack;
};

Daypack.default = Daypack;

module.exports = Daypack;
