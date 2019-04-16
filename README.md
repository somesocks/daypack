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

## Objects

<dl>
<dt><a href="#Daypack">Daypack</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Daypack">Daypack</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Daypack"></a>

## Daypack : <code>object</code>
**Kind**: global namespace  

* [Daypack](#Daypack) : <code>object</code>
    * [.withHeap](#Daypack+withHeap) ⇒
    * [.withHead](#Daypack+withHead) ⇒
    * [.pack](#Daypack+pack) ⇒
    * [.packHeadless](#Daypack+packHeadless) ⇒
    * [.unpack](#Daypack+unpack) ⇒
    * [.each](#Daypack+each) ⇒
    * [.filter](#Daypack+filter) ⇒
    * [.map](#Daypack+map) ⇒
    * [.toObject](#Daypack+toObject) ⇒
    * [.fromObject](#Daypack+fromObject) ⇒
    * [.toJSON](#Daypack+toJSON) ⇒
    * [.fromJSON](#Daypack+fromJSON) ⇒
    * [.fromJSON](#Daypack+fromJSON) ⇒
    * [.Daypack](#Daypack.Daypack)
    * [.clone(val)](#Daypack.clone) ⇒


* * *

<a name="Daypack+withHeap"></a>

### daypack.withHeap ⇒
`withHeap` allows you to manually set the heap for a pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- heap


* * *

<a name="Daypack+withHead"></a>

### daypack.withHead ⇒
`withHead` allows you to manually set the head for a pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- head


* * *

<a name="Daypack+pack"></a>

### daypack.pack ⇒
`pack` packs a value into the heap, and updates the head

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- val


* * *

<a name="Daypack+packHeadless"></a>

### daypack.packHeadless ⇒
`packHeadless` packs a value into the heap, but does not update the head

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- val


* * *

<a name="Daypack+unpack"></a>

### daypack.unpack ⇒
`unpack` unpacks the head, or accepts an optional "head" to unpack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: the unpacked head  
**Params**

- val - an optional "head" to use as a base point for unpacking


* * *

<a name="Daypack+each"></a>

### daypack.each ⇒
`each` unpacks everything in the heap in isolation, and calls the 'each' function on it

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- func - an each function to call


* * *

<a name="Daypack+filter"></a>

### daypack.filter ⇒
`filter` unpacks everything in the heap in isolation, and calls the 'filter' function on it,
to build a new pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a new DayPack instance with only the filtered entities in the heap  
**Params**

- func - a filter function to call


* * *

<a name="Daypack+map"></a>

### daypack.map ⇒
`map` unpacks everything in the heap in isolation, and calls the 'map' function on it,
to build a new pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a new DayPack instance with the mapped entities in the heap  
**Params**

- func - a map function to call


* * *

<a name="Daypack+toObject"></a>

### daypack.toObject ⇒
`toObject` converts the pack into a serializable object

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a serializable version of the pack  

* * *

<a name="Daypack+fromObject"></a>

### daypack.fromObject ⇒
`fromObject` de-serializes a serialized version into a DayPack instance

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- obj - the object to unpack


* * *

<a name="Daypack+toJSON"></a>

### daypack.toJSON ⇒
`toJSON` converts the pack into a JSON object

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  

* * *

<a name="Daypack+fromJSON"></a>

### daypack.fromJSON ⇒
`fromJSON` de-serialized a JSON string into this pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  
**Params**

- json - the json to unpack


* * *

<a name="Daypack+fromJSON"></a>

### daypack.fromJSON ⇒
`fromJSON` de-serialized a JSON string into this pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  
**Params**

- json - the json to unpack


* * *

<a name="Daypack.Daypack"></a>

### Daypack.Daypack
**Kind**: static class of [<code>Daypack</code>](#Daypack)  

* * *

<a name="Daypack.clone"></a>

### Daypack.clone(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of [<code>Daypack</code>](#Daypack)  
**Returns**: an flattened object  
**Params**

- val - the value to pack


* * *

<a name="Daypack"></a>

## Daypack : <code>object</code>
**Kind**: global namespace  

* [Daypack](#Daypack) : <code>object</code>
    * [.withHeap](#Daypack+withHeap) ⇒
    * [.withHead](#Daypack+withHead) ⇒
    * [.pack](#Daypack+pack) ⇒
    * [.packHeadless](#Daypack+packHeadless) ⇒
    * [.unpack](#Daypack+unpack) ⇒
    * [.each](#Daypack+each) ⇒
    * [.filter](#Daypack+filter) ⇒
    * [.map](#Daypack+map) ⇒
    * [.toObject](#Daypack+toObject) ⇒
    * [.fromObject](#Daypack+fromObject) ⇒
    * [.toJSON](#Daypack+toJSON) ⇒
    * [.fromJSON](#Daypack+fromJSON) ⇒
    * [.fromJSON](#Daypack+fromJSON) ⇒
    * [.Daypack](#Daypack.Daypack)
    * [.clone(val)](#Daypack.clone) ⇒


* * *

<a name="Daypack+withHeap"></a>

### daypack.withHeap ⇒
`withHeap` allows you to manually set the heap for a pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- heap


* * *

<a name="Daypack+withHead"></a>

### daypack.withHead ⇒
`withHead` allows you to manually set the head for a pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- head


* * *

<a name="Daypack+pack"></a>

### daypack.pack ⇒
`pack` packs a value into the heap, and updates the head

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- val


* * *

<a name="Daypack+packHeadless"></a>

### daypack.packHeadless ⇒
`packHeadless` packs a value into the heap, but does not update the head

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- val


* * *

<a name="Daypack+unpack"></a>

### daypack.unpack ⇒
`unpack` unpacks the head, or accepts an optional "head" to unpack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: the unpacked head  
**Params**

- val - an optional "head" to use as a base point for unpacking


* * *

<a name="Daypack+each"></a>

### daypack.each ⇒
`each` unpacks everything in the heap in isolation, and calls the 'each' function on it

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- func - an each function to call


* * *

<a name="Daypack+filter"></a>

### daypack.filter ⇒
`filter` unpacks everything in the heap in isolation, and calls the 'filter' function on it,
to build a new pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a new DayPack instance with only the filtered entities in the heap  
**Params**

- func - a filter function to call


* * *

<a name="Daypack+map"></a>

### daypack.map ⇒
`map` unpacks everything in the heap in isolation, and calls the 'map' function on it,
to build a new pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a new DayPack instance with the mapped entities in the heap  
**Params**

- func - a map function to call


* * *

<a name="Daypack+toObject"></a>

### daypack.toObject ⇒
`toObject` converts the pack into a serializable object

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a serializable version of the pack  

* * *

<a name="Daypack+fromObject"></a>

### daypack.fromObject ⇒
`fromObject` de-serializes a serialized version into a DayPack instance

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: this  
**Params**

- obj - the object to unpack


* * *

<a name="Daypack+toJSON"></a>

### daypack.toJSON ⇒
`toJSON` converts the pack into a JSON object

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  

* * *

<a name="Daypack+fromJSON"></a>

### daypack.fromJSON ⇒
`fromJSON` de-serialized a JSON string into this pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  
**Params**

- json - the json to unpack


* * *

<a name="Daypack+fromJSON"></a>

### daypack.fromJSON ⇒
`fromJSON` de-serialized a JSON string into this pack

**Kind**: instance property of [<code>Daypack</code>](#Daypack)  
**Returns**: a JSON string  
**Params**

- json - the json to unpack


* * *

<a name="Daypack.Daypack"></a>

### Daypack.Daypack
**Kind**: static class of [<code>Daypack</code>](#Daypack)  

* * *

<a name="Daypack.clone"></a>

### Daypack.clone(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of [<code>Daypack</code>](#Daypack)  
**Returns**: an flattened object  
**Params**

- val - the value to pack


* * *

