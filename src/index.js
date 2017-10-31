/** @namespace daypack */


const { pack, unpack, serialize, deserialize } = require('./packers');


const Daypack = function (options = {}) {
	const _this = Object.create(Daypack.prototype);
	_this.entities = options.entities || {};
	_this.type_key = options.type_key || Daypack.TYPE_KEY;
	_this.id_key = options.id_key || Daypack.ID_KEY;
	_this.head = options.head || Daypack.HEAD;

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

Daypack.prototype.toObject = function () {
	const { entities } = this;

	return Object.assign({}, entities);
};

Daypack.prototype.fromObject = function (obj) {
	const { entities } = this;

	Object.assign(entities, obj);

	return this;
};

Daypack.prototype.serialize = function () {
	const { type_key, id_key } = this;

	const context = {
		type_key,
		id_key,
		serialize,
	};

	const obj = this.toObject();

	return serialize(obj, context);
};

Daypack.prototype.deserialize = function (obj) {
	const { type_key, id_key } = this;

	const context = {
		type_key,
		id_key,
		deserialize,
	};

	obj = deserialize(obj, context);
	return this.fromObject(obj);
};

Daypack.prototype.toJSON = function () {
	const obj = this.serialize;
	return JSON.stringify(obj);
};

Daypack.prototype.fromJSON = function (json) {
	const obj = JSON.parse(json);
	return this.deserialize(obj);
};

Daypack.ID_KEY = 'id';
Daypack.TYPE_KEY = 'type';
Daypack.HEAD = '__daypack__';

/**
* A function that packs a JavaScript value.
* @param val - the value to pack
* @returns an flattened object
* @memberof daypack
*/
Daypack.pack = (val) => Daypack()
	.pack(val)
	.serialize();

/**
* A function that unpacks a JavaScript value.
* @param val - a flattened object to unpack
* @returns the unpacked value
* @memberof daypack
*/
Daypack.unpack = (val) => Daypack()
	.deserialize(val)
	.unpack();

Daypack.toJSON = (val) => Daypack()
	.pack(val)
	.toJSON();

Daypack.fromJSON = (json) => Daypack()
	.fromJSON(json);

module.exports = Daypack;
