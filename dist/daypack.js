!function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n = e();
        for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
    }
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
    }([ function(t, e, n) {
        t.exports = n(1);
    }, function(t, e, n) {
        "use strict";
        var r = n(2);
        r.default = r, t.exports = r;
    }, function(t, e, n) {
        "use strict";
        var r = n(3), o = r.packers, a = r.pack, i = r.unpack, u = function t() {
            var e = this instanceof t ? this : Object.create(t.prototype);
            return e._head = void 0, e._heap = {}, e._type_key = t.TYPE_KEY, e._id_key = t.ID_KEY, 
            e;
        };
        u.prototype.withHeap = function(t) {
            return this._heap = t, this;
        }, u.prototype.withHead = function(t) {
            return this._head = t, this;
        }, u.prototype.pack = function(t) {
            var e = {
                type_key: this._type_key,
                id_key: this._id_key,
                unpacked: {},
                packed: this._heap,
                pack: a
            };
            return this._head = a(t, e), this;
        }, u.prototype.unpack = function(t) {
            t = arguments.length > 0 ? t : this._head;
            var e = {
                type_key: this._type_key,
                id_key: this._id_key,
                unpacked: {},
                packed: this._heap,
                unpack: i
            };
            return i(t, e);
        }, u.prototype.each = function(t) {
            var e = (this._heap, {
                type_key: this._type_key,
                id_key: this._id_key,
                unpacked: void 0,
                packed: void 0,
                unpack: i
            });
            for (var n in this._heap) if (this._heap.hasOwnProperty(n)) {
                e.packed = {}, e.unpacked = {};
                var r = i(this._heap[n], e);
                t(r, n);
            }
            return this;
        }, u.prototype.filter = function(t) {
            var e = (this._heap, u()), n = {
                type_key: this._type_key,
                id_key: this._id_key,
                unpacked: void 0,
                packed: void 0,
                unpack: i
            };
            for (var r in this._heap) if (this._heap.hasOwnProperty(r)) {
                n.packed = {}, n.unpacked = {};
                var o = i(this._heap[r], n);
                t(o, r) && e.pack(o);
            }
            return e._head = this._head, e;
        }, u.prototype.map = function(t) {
            var e = (this._heap, u()), n = {
                type_key: this._type_key,
                id_key: this._id_key,
                unpacked: void 0,
                packed: void 0,
                unpack: i
            };
            for (var r in this._heap) if (this._heap.hasOwnProperty(r)) {
                n.packed = {}, n.unpacked = {};
                var o = i(this._heap[r], n);
                o = t(o, r), e.pack(o);
            }
            return e._head = this._head, e;
        }, u.prototype.toObject = function() {
            return {
                _daypack: "v2",
                head: this._head,
                heap: this._heap
            };
        }, u.prototype.fromObject = function(t) {
            if ("v2" === t._daypack && "head" in t && "heap" in t) return this._head = t.head, 
            this._heap = t.heap, this;
            if (u.V1_HEAD in t) return this._head = t[u.V1_HEAD], delete t[u.V1_HEAD], this._heap = t, 
            this;
            throw new Error("Daypack#fromObject: unrecognized object format");
        }, u.prototype.toJSON = function() {
            return JSON.stringify(this.toObject(), null, "\t");
        }, u.prototype.fromJSON = function(t) {
            return this.fromObject(JSON.parse(t));
        }, u.ID_KEY = "id", u.TYPE_KEY = "class", u.V1_HEAD = "__daypack__", u.pack = function(t) {
            return u().pack(t).toObject();
        }, u.unpack = function(t) {
            return u().fromObject(t).unpack();
        }, u.clone = function(t) {
            return u().pack(t).unpack();
        }, u.register = function(t, e) {
            return o[t] = e, u;
        }, u.default = u, t.exports = u;
    }, function(t, e, n) {
        "use strict";
        var r = ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, n(4)), o = {
            array: n(5),
            boolean: n(6),
            date: n(7),
            null: n(8),
            number: n(9),
            object: n(10),
            regexp: n(11),
            string: n(12),
            undefined: n(13)
        }, a = function t(e, n) {
            var a = r(e, n), t = o[a];
            if (!t) throw new Error("Daypack: no unpacker for type " + a);
            return t;
        }, i = function(t, e) {
            return a(t, e).unpack(t, e);
        }, u = function(t, e) {
            return a(t, e).pack(t, e);
        };
        t.exports = {
            packers: o,
            pack: u,
            unpack: i
        };
    }, function(t, e) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, r = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        }, o = function(t) {
            return "string" == typeof t || t instanceof String;
        }, a = function(t, e) {
            var a = e.type_key, i = "undefined" == typeof t ? "undefined" : n(t);
            switch (i) {
              default:
              case "undefined":
              case "boolean":
              case "number":
              case "string":
              case "symbol":
              case "function":
                return i;

              case "object":
                return null === t ? "null" : r(t) ? "array" : o(t[a]) ? t[a].toLowerCase() : null != t.__proto__ && o(t.__proto__.name) ? t.__proto__.name.toLowerCase() : null != t.prototype && o(t.prototype.name) ? t.prototype.name.toLowerCase() : null != t.constructor && o(t.constructor.name) ? t.constructor.name.toLowerCase() : "object";
            }
        };
        t.exports = a;
    }, function(t, e) {
        "use strict";
        var n = function t(e, n) {
            for (var t = n.pack, r = [], o = 0; o < e.length; o++) r[o] = t(e[o], n);
            return r;
        }, r = function t(e, n) {
            for (var t = n.unpack, r = [], o = 0; o < e.length; o++) r[o] = t(e[o], n);
            return r;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            return t;
        }, r = function(t, e) {
            return t;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    }, function(t, e) {
        "use strict";
        function n(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var r = function(t, e) {
            var r, o = e.type_key, a = (r = {}, n(r, o, "date"), n(r, "value", t.getTime()), 
            r);
            return a;
        }, o = function(t, e) {
            var n = new Date(t.value);
            return n;
        };
        t.exports = {
            pack: r,
            unpack: o
        };
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            return t;
        }, r = function(t, e) {
            return t;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            return t;
        }, r = function(t, e) {
            return t;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    }, function(t, e) {
        "use strict";
        var n = function(t) {
            return "string" == typeof t || t instanceof String;
        }, r = function t(e, r) {
            var t = r.pack, o = r.packed, a = (r.unpacked, r.id_key), i = e[a];
            if (n(i)) {
                var u = o[i];
                if (u) return i;
                var c = {};
                c[a] = i, o[i] = c;
                for (var p in e) p !== a && e.hasOwnProperty(p) && (c[p] = t(e[p], r));
                return i;
            }
            var s = {};
            s[a] = i;
            for (var f in e) f !== a && e.hasOwnProperty(f) && (s[f] = t(e[f], r));
            return s;
        }, o = function t(e, r) {
            var t = r.unpack, o = (r.packed, r.unpacked), a = r.id_key, i = e[a];
            if (n(i)) {
                var u = o[i];
                if (u) return u;
                var c = {};
                c[a] = i, o[i] = c;
                for (var p in e) p !== a && e.hasOwnProperty(p) && (c[p] = t(e[p], r));
                return c;
            }
            var s = {};
            for (var f in e) f !== a && e.hasOwnProperty(f) && (s[f] = t(e[f], r));
            return s;
        };
        t.exports = {
            pack: r,
            unpack: o
        };
    }, function(t, e) {
        "use strict";
        function n(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var r = function(t, e) {
            var r, o = e.type_key, a = (r = {}, n(r, o, "regexp"), n(r, "source", t.source), 
            n(r, "flags", t.flags), n(r, "lastIndex", t.lastIndex), r);
            return a;
        }, o = function(t, e) {
            var n = new RegExp(t.source, t.flags);
            return n.lastIndex = t.lastIndex, n;
        };
        t.exports = {
            pack: r,
            unpack: o
        };
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            return t;
        }, r = function t(e, n) {
            var t = n.unpack, r = n.packed, o = (n.unpacked, r[e]);
            return null != o ? t(o, n) : e;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            return t;
        }, r = function(t, e) {
            return t;
        };
        t.exports = {
            pack: n,
            unpack: r
        };
    } ]);
});