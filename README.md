# daypack
A JavaScript library for flattening and reassembling object graphs.

# purpose
This library was written to handle packing up deep JS object graphs to send over the wire.
It does this by traversing the entire graph recursively, and packing entities into a flat data structure.

This library is similar to normalizr, but with a few differences:
- All ids need to be unique.
- You don't need to define a schema, or know the type of an entity to pack/unpack it.
- You can use this library to serialize/deserialize JS class instances, as long as you register a custom packer/unpacker for it.

# example

```javascript
const { pretty } = require('js-object-pretty-print');
const { pack, unpack } = require('./dist/daypack');

const alice = {
	id: 'person.001',
	name: 'Alice',
	gender: 'F',
	birthday: new Date(),
	home_address: {
		id: 'address.001',
		street: '123 Main Street',
		city: 'Anytown',
		post: '1234',
		country: 'USA',
	},
	children: [],
};

const bob = {
	id: 'person.002',
	name: 'Bob',
	gender: 'M',
	birthday: new Date(),
	home_address: alice.home_address,
	children: [],
};

const carol = {
	id: 'person.003',
	name: 'Carol',
	gender: 'F',
	birthday: new Date(),
	home_address: alice.home_address,
	parents: [ alice, bob ],
};

alice.children.push(carol);
bob.children.push(carol);

console.log('packed', pretty(pack(alice)));
// PRINTS:
// packed {
//     result: "person.001",
//     entities: {
//         address.001: {
//             id: "address.001",
//             street: "123 Main Street",
//             city: "Anytown",
//             post: "1234",
//             country: "USA"
//         },
//         person.002: {
//             id: "person.002",
//             name: "Bob",
//             gender: "M",
//             birthday: {
//                 class: "date",
//                 value: 1497258437619
//             },
//             home_address: "address.001",
//             children: [
//                 "person.003"
//             ]
//         },
//         person.003: {
//             id: "person.003",
//             name: "Carol",
//             gender: "F",
//             birthday: {
//                 class: "date",
//                 value: 1497258437619
//             },
//             home_address: "address.001",
//             parents: [
//                 "person.001",
//                 "person.002"
//             ]
//         },
//         person.001: {
//             id: "person.001",
//             name: "Alice",
//             gender: "F",
//             birthday: {
//                 class: "date",
//                 value: 1497258437619
//             },
//             home_address: "address.001",
//             children: [
//                 "person.003"
//             ]
//         }
//     }
// }


console.log('unpacked', pretty(unpack(pack(alice))));
// PRINTS
// unpacked {
//     id: "person.001",
//     name: "Alice",
//     gender: "F",
//     birthday: "Mon Jun 12 2017 11:07:17 GMT+0200 (CEST)",
//     home_address: {
//         id: "address.001",
//         street: "123 Main Street",
//         city: "Anytown",
//         post: "1234",
//         country: "USA"
//     },
//     children: [
//         {
//             id: "person.003",
//             name: "Carol",
//             gender: "F",
//             birthday: "Mon Jun 12 2017 11:07:17 GMT+0200 (CEST)",
//             home_address: circular reference to [object Object],
//             parents: [
//                 circular reference to [object Object],
//                 {
//                     id: "person.002",
//                     name: "Bob",
//                     gender: "M",
//                     birthday: "Mon Jun 12 2017 11:07:17 GMT+0200 (CEST)",
//                     home_address: circular reference to [object Object],
//                     children: [
//                         circular reference to [object Object]
//                     ]
//                 }
//             ]
//         }
//     ]
// }

```

# api

<a name="daypack"></a>

## daypack : <code>object</code>
**Kind**: global namespace  

* [daypack](#daypack) : <code>object</code>
    * [.type](#daypack.type) ⇒
    * [.register(type, pack, unpack)](#daypack.register)
    * [.pack(val)](#daypack.pack) ⇒
    * [.unpack(val)](#daypack.unpack) ⇒

<a name="daypack.type"></a>

### daypack.type ⇒
A function that returns the type of a JavaScript value.

**Kind**: static constant of <code>[daypack](#daypack)</code>  
**Returns**: a type string  

| Param | Description |
| --- | --- |
| val | the val to find the type of |

<a name="daypack.register"></a>

### daypack.register(type, pack, unpack)
A function to register a packer/unpacker for a type.

**Kind**: static method of <code>[daypack](#daypack)</code>  

| Param | Description |
| --- | --- |
| type | the type string |
| pack | the packing function |
| unpack | the unpacking function |

<a name="daypack.pack"></a>

### daypack.pack(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of <code>[daypack](#daypack)</code>  
**Returns**: an flattened object with 'result' and 'entities' properties  

| Param | Description |
| --- | --- |
| val | the value to pack |

<a name="daypack.unpack"></a>

### daypack.unpack(val) ⇒
A function that unpacks a JavaScript value.

**Kind**: static method of <code>[daypack](#daypack)</code>  
**Returns**: the unpacked value  

| Param | Description |
| --- | --- |
| val | a flattened object to unpack |
