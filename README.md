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
    * [.Daypack.pack(val)](#daypack.Daypack.pack) ⇒
    * [.Daypack.unpack(val)](#daypack.Daypack.unpack) ⇒

<a name="daypack.Daypack.pack"></a>

### daypack.Daypack.pack(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of <code>[daypack](#daypack)</code>  
**Returns**: an flattened object  

| Param | Description |
| --- | --- |
| val | the value to pack |

<a name="daypack.Daypack.unpack"></a>

### daypack.Daypack.unpack(val) ⇒
A function that unpacks a JavaScript value.

**Kind**: static method of <code>[daypack](#daypack)</code>  
**Returns**: the unpacked value  

| Param | Description |
| --- | --- |
| val | a flattened object to unpack |

