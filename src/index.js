/** @namespace daypack */
require('polyfill2');

const { packers, pack, unpack } = require('./packers');

const Daypack = function (entities) {
	const _this = Object.create(Daypack.prototype);
	_this.entities = entities || {};
	_this.type_key = Daypack.TYPE_KEY;
	_this.id_key = Daypack.ID_KEY;
	_this.head = Daypack.HEAD;

	return _this;
};

Daypack.prototype.pack = function (val) {
	const { type_key, id_key, head, entities } = this;

	const context = {
		type_key,
		id_key,
		unpacked: {},
		packed: entities,
		pack,
	};

	const res = pack(val, context);
	entities[head] = res;
	return this;
};

Daypack.prototype.unpack = function (val) {
	const { type_key, id_key, head, entities } = this;

	val = val || head;

	const context = {
		type_key,
		id_key,
		unpacked: {},
		packed: entities,
		unpack,
	};

	return unpack(val, context);
};

Daypack.prototype.put = function (key, val) {
	const { entities } = this;
	entities[key] = val;
	return this;
};

Daypack.prototype.get = function (key) {
	const { entities } = this;
	return entities[key];
};

Daypack.prototype.map = function (map, options = {}) {
	const { entities } = this;
	const ignoreHead = options.ignoreHead != null ? options.ignoreHead : true;

	const _map = ignoreHead ?
		function (value, key) {
			return key === Daypack.HEAD ?
				value : map.apply(this, arguments);
		} :
		map;

	const mapped = Object.map(entities, map, this);

	return Daypack(mapped);
};


Daypack.prototype.filter = function (filter, options = {}) {
	const { entities } = this;
	const ignoreHead = options.ignoreHead != null ? options.ignoreHead : true;

	const _filter = ignoreHead ?
		function (value, key) {
			return key === Daypack.HEAD || filter.apply(this, arguments);
		} :
		filter;

	const filtered = Object.filter(entities, _filter, this);

	return Daypack(filtered);
};


Daypack.prototype.toObject = function () {
	return this.entities;
};

Daypack.prototype.fromObject = function (obj) {
	this.entities = obj;
	return this;
};

Daypack.prototype.toJSON = function () {
	const obj = this.toObject();
	return JSON.stringify(obj);
};

Daypack.prototype.fromJSON = function (json) {
	const obj = JSON.parse(json);
	return this.fromObject(obj);
};

Daypack.ID_KEY = 'id';
Daypack.TYPE_KEY = 'class';
Daypack.HEAD = '__daypack__';

Daypack.register = (type, packer) => {
	packers[type] = packer;
	return Daypack;
};

/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object
* @memberof daypack
*/
Daypack.pack = (val) => Daypack()
	.pack(val)
	.toObject();

/**
* A function that unpacks a JavaScript value.
* @param val - a flattened object to unpack
* @returns the unpacked value
* @memberof daypack
*/
Daypack.unpack = (val) => Daypack()
	.fromObject(val)
	.unpack();

Daypack.toJSON = (val) => Daypack()
	.pack(val)
	.toJSON();

Daypack.fromJSON = (json) => Daypack()
	.fromJSON(json);

module.exports = Daypack;
