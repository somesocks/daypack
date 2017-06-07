# daypack
A JavaScript library for flattening and reassembling object graphs.

# purpose
This library was written to handle packing up deep JS object graphs to send over the wire.
It does this by traversing the entire graph recursively, and packing entities into a flat data structure.

This library is similar to normalizr, but with a few differences:
- All ids need to be unique.
- You don't need to define a schema, or know the type of an entity to pack/unpack it.
- You can use this library to serialize/deserialize JS class instances, as long as you register a custom packer/unpacker for it.

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

