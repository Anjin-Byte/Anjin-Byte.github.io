import { _ as T } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let k;
let __tla = (async ()=>{
    var D = "/assets/game_of_life_bg-AzI5K2Sm.wasm";
    class w {
        static __wrap(e) {
            const n = Object.create(w.prototype);
            return n.__wbg_ptr = e, m.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, m.unregister(this), e;
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
            return w.__wrap(e);
        }
        tick() {
            _.universe_tick(this.__wbg_ptr);
        }
        width() {
            return _.universe_width(this.__wbg_ptr) >>> 0;
        }
    }
    Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
    function E(t, e) {
        throw new Error(y(t, e));
    }
    function M(t, e) {
        let n, r;
        try {
            n = t, r = e, console.error(y(t, e));
        } finally{
            _.__wbindgen_free(n, r, 1);
        }
    }
    function S() {
        return new Error;
    }
    function I(t, e) {
        const n = e.stack, r = F(n, _.__wbindgen_malloc, _.__wbindgen_realloc), o = h;
        v().setInt32(t + 4, o, !0), v().setInt32(t + 0, r, !0);
    }
    function U() {
        const t = _.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
    }
    const m = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((t)=>_.__wbg_universe_free(t, 1));
    let u = null;
    function v() {
        return (u === null || u.buffer.detached === !0 || u.buffer.detached === void 0 && u.buffer !== _.memory.buffer) && (u = new DataView(_.memory.buffer)), u;
    }
    function y(t, e) {
        return R(t >>> 0, e);
    }
    let b = null;
    function a() {
        return (b === null || b.byteLength === 0) && (b = new Uint8Array(_.memory.buffer)), b;
    }
    function F(t, e, n) {
        if (n === void 0) {
            const c = f.encode(t), d = e(c.length, 1) >>> 0;
            return a().subarray(d, d + c.length).set(c), h = c.length, d;
        }
        let r = t.length, o = e(r, 1) >>> 0;
        const A = a();
        let i = 0;
        for(; i < r; i++){
            const c = t.charCodeAt(i);
            if (c > 127) break;
            A[o + i] = c;
        }
        if (i !== r) {
            i !== 0 && (t = t.slice(i)), o = n(o, r, r = i + t.length * 3, 1) >>> 0;
            const c = a().subarray(o + i, o + r), d = f.encodeInto(t, c);
            i += d.written, o = n(o, r, i, 1) >>> 0;
        }
        return h = i, o;
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
    function z(t) {
        _ = t;
    }
    URL = globalThis.URL;
    const s = await T({
        "./game_of_life_bg.js": {
            __wbg_new_227d7c05414eb861: S,
            __wbg_stack_3b0d974bbf31e44f: I,
            __wbg_error_a6fa202b58aa1cd3: M,
            __wbg___wbindgen_throw_9c75d47bf9e7731e: E,
            __wbindgen_init_externref_table: U
        }
    }, D), p = s.memory, j = s.__wbg_universe_free, B = s.universe_cells, C = s.universe_height, L = s.universe_new, V = s.universe_tick, W = s.universe_width, K = s.__wbindgen_free, N = s.__wbindgen_malloc, X = s.__wbindgen_realloc, Y = s.__wbindgen_externrefs, x = s.__wbindgen_start;
    var $ = Object.freeze({
        __proto__: null,
        __wbg_universe_free: j,
        __wbindgen_externrefs: Y,
        __wbindgen_free: K,
        __wbindgen_malloc: N,
        __wbindgen_realloc: X,
        __wbindgen_start: x,
        memory: p,
        universe_cells: B,
        universe_height: C,
        universe_new: L,
        universe_tick: V,
        universe_width: W
    });
    z($);
    x();
    k = class {
        universe;
        width;
        height;
        constructor(e){
            this.universe = e, this.width = e.width(), this.height = e.height();
        }
        static async create() {
            return new k(w.new());
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
