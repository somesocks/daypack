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
