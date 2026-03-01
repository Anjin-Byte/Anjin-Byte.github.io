import { _ as T } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let k;
let __tla = (async ()=>{
    var A = "/assets/game_of_life_bg-BcLuIHEe.wasm";
    class u {
        static __wrap(e) {
            e = e >>> 0;
            const n = Object.create(u.prototype);
            return n.__wbg_ptr = e, v.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, v.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            _.__wbg_universe_free(e, 0);
        }
        cells() {
            return _.universe_cells(this.__wbg_ptr) >>> 0;
        }
        height() {
            return _.universe_height(this.__wbg_ptr) >>> 0;
        }
        static new() {
            const e = _.universe_new();
            return u.__wrap(e);
        }
        render() {
            let e, n;
            try {
                const r = _.universe_render(this.__wbg_ptr);
                return e = r[0], n = r[1], m(r[0], r[1]);
            } finally{
                _.__wbindgen_free(e, n, 1);
            }
        }
        tick() {
            _.universe_tick(this.__wbg_ptr);
        }
        width() {
            return _.universe_width(this.__wbg_ptr) >>> 0;
        }
    }
    Symbol.dispose && (u.prototype[Symbol.dispose] = u.prototype.free);
    function D(t, e) {
        throw new Error(m(t, e));
    }
    function M(t, e) {
        let n, r;
        try {
            n = t, r = e, console.error(m(t, e));
        } finally{
            _.__wbindgen_free(n, r, 1);
        }
    }
    function I() {
        return new Error;
    }
    function S(t, e) {
        const n = e.stack, r = F(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = h;
        y().setInt32(t + 4, o, !0), y().setInt32(t + 0, r, !0);
    }
    function U() {
        const t = _.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
    }
    const v = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>_.__wbg_universe_free(t >>> 0, 1));
    let d = null;
    function y() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== _.memory.buffer) && (d = new DataView(_.memory.buffer)), d;
    }
    function m(t, e) {
        return t = t >>> 0, R(t, e);
    }
    let b = null;
    function a() {
        return (b === null || b.byteLength === 0) && (b = new Uint8Array(_.memory.buffer)), b;
    }
    function F(t, e, n) {
        if (n === void 0) {
            const c = f.encode(t), w = e(c.length, 1) >>> 0;
            return a().subarray(w, w + c.length).set(c), h = c.length, w;
        }
        let r = t.length, o = e(r, 1) >>> 0;
        const E = a();
        let s = 0;
        for(; s < r; s++){
            const c = t.charCodeAt(s);
            if (c > 127) break;
            E[o + s] = c;
        }
        if (s !== r) {
            s !== 0 && (t = t.slice(s)), o = n(o, r, r = s + t.length * 3, 1) >>> 0;
            const c = a().subarray(o + s, o + r), w = f.encodeInto(t, c);
            s += w.written, o = n(o, r, s, 1) >>> 0;
        }
        return h = s, o;
    }
    let l = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    l.decode();
    const O = 2146435072;
    let g = 0;
    function R(t, e) {
        return g += e, g >= O && (l = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), l.decode(), g = e), l.decode(a().subarray(t, t + e));
    }
    const f = new TextEncoder;
    "encodeInto" in f || (f.encodeInto = function(t, e) {
        const n = f.encode(t);
        return e.set(n), {
            read: t.length,
            written: n.length
        };
    });
    let h = 0, _;
    function B(t) {
        _ = t;
    }
    URL = globalThis.URL;
    const i = await T({
        "./game_of_life_bg.js": {
            __wbg_new_227d7c05414eb861: I,
            __wbg_stack_3b0d974bbf31e44f: S,
            __wbg_error_a6fa202b58aa1cd3: M,
            __wbg___wbindgen_throw_6ddd609b62940d55: D,
            __wbindgen_init_externref_table: U
        }
    }, A), p = i.memory, L = i.__wbg_universe_free, j = i.universe_cells, z = i.universe_height, C = i.universe_new, V = i.universe_render, W = i.universe_tick, H = i.universe_width, N = i.__wbindgen_free, X = i.__wbindgen_malloc, Y = i.__wbindgen_realloc, $ = i.__wbindgen_externrefs, x = i.__wbindgen_start;
    var q = Object.freeze({
        __proto__: null,
        __wbg_universe_free: L,
        __wbindgen_externrefs: $,
        __wbindgen_free: N,
        __wbindgen_malloc: X,
        __wbindgen_realloc: Y,
        __wbindgen_start: x,
        memory: p,
        universe_cells: j,
        universe_height: z,
        universe_new: C,
        universe_render: V,
        universe_tick: W,
        universe_width: H
    });
    B(q);
    x();
    k = class {
        universe;
        width;
        height;
        constructor(e){
            this.universe = e, this.width = e.width(), this.height = e.height();
        }
        static async create() {
            return new k(u.new());
        }
        tick() {
            this.universe.tick();
        }
        getCells() {
            return new Uint8Array(p.buffer, this.universe.cells(), this.width * this.height);
        }
    };
})();
export { k as WasmBridge, __tla };
