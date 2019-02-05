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
    * [.Daypack](#Daypack.Daypack)
    * [.clone(val)](#Daypack.clone) ⇒

<a name="Daypack.Daypack"></a>

### Daypack.Daypack
**Kind**: static class of [<code>Daypack</code>](#Daypack)  
<a name="Daypack.clone"></a>

### Daypack.clone(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of [<code>Daypack</code>](#Daypack)  
**Returns**: an flattened object  

| Param | Description |
| --- | --- |
| val | the value to pack |

<a name="Daypack"></a>

## Daypack : <code>object</code>
**Kind**: global namespace  

* [Daypack](#Daypack) : <code>object</code>
    * [.Daypack](#Daypack.Daypack)
    * [.clone(val)](#Daypack.clone) ⇒

<a name="Daypack.Daypack"></a>

### Daypack.Daypack
**Kind**: static class of [<code>Daypack</code>](#Daypack)  
<a name="Daypack.clone"></a>

### Daypack.clone(val) ⇒
A function that packs a JavaScript value.

**Kind**: static method of [<code>Daypack</code>](#Daypack)  
**Returns**: an flattened object  

| Param | Description |
| --- | --- |
| val | the value to pack |

