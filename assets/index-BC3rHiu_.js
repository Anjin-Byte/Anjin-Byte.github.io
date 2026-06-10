import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let j;
let __tla = (async ()=>{
    var D = "/assets/game_of_life_bg-CzeTFx_x.wasm";
    class w {
        static __wrap(t) {
            t = t >>> 0;
            const n = Object.create(w.prototype);
            return n.__wbg_ptr = t, v.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, v.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            r.__wbg_universe_free(t, 0);
        }
        cells() {
            return r.universe_cells(this.__wbg_ptr) >>> 0;
        }
        height() {
            return r.universe_height(this.__wbg_ptr) >>> 0;
        }
        static new() {
            const t = r.universe_new();
            return w.__wrap(t);
        }
        tick() {
            r.universe_tick(this.__wbg_ptr);
        }
        width() {
            return r.universe_width(this.__wbg_ptr) >>> 0;
        }
    }
    Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
    function E(e, t) {
        throw new Error(x(e, t));
    }
    function M(e, t) {
        let n, _;
        try {
            n = e, _ = t, console.error(x(e, t));
        } finally{
            r.__wbindgen_export(n, _, 1);
        }
    }
    function F() {
        const e = new Error;
        return I(e);
    }
    function S(e, t) {
        const n = k(t).stack, _ = z(n, r.__wbindgen_export2, r.__wbindgen_export3), o = m;
        y().setInt32(e + 4, o, !0), y().setInt32(e + 0, _, !0);
    }
    function U(e) {
        C(e);
    }
    const v = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>r.__wbg_universe_free(e >>> 0, 1));
    function I(e) {
        b === u.length && u.push(u.length + 1);
        const t = b;
        return b = u[t], u[t] = e, t;
    }
    function R(e) {
        e < 1028 || (u[e] = b, b = e);
    }
    let d = null;
    function y() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== r.memory.buffer) && (d = new DataView(r.memory.buffer)), d;
    }
    function x(e, t) {
        return e = e >>> 0, L(e, t);
    }
    let g = null;
    function h() {
        return (g === null || g.byteLength === 0) && (g = new Uint8Array(r.memory.buffer)), g;
    }
    function k(e) {
        return u[e];
    }
    let u = new Array(1024).fill(void 0);
    u.push(void 0, null, !0, !1);
    let b = u.length;
    function z(e, t, n) {
        if (n === void 0) {
            const c = a.encode(e), f = t(c.length, 1) >>> 0;
            return h().subarray(f, f + c.length).set(c), m = c.length, f;
        }
        let _ = e.length, o = t(_, 1) >>> 0;
        const A = h();
        let i = 0;
        for(; i < _; i++){
            const c = e.charCodeAt(i);
            if (c > 127) break;
            A[o + i] = c;
        }
        if (i !== _) {
            i !== 0 && (e = e.slice(i)), o = n(o, _, _ = i + e.length * 3, 1) >>> 0;
            const c = h().subarray(o + i, o + _), f = a.encodeInto(e, c);
            i += f.written, o = n(o, _, i, 1) >>> 0;
        }
        return m = i, o;
    }
    function C(e) {
        const t = k(e);
        return R(e), t;
    }
    let l = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    l.decode();
    const B = 2146435072;
    let p = 0;
    function L(e, t) {
        return p += t, p >= B && (l = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), l.decode(), p = t), l.decode(h().subarray(e, e + t));
    }
    const a = new TextEncoder;
    "encodeInto" in a || (a.encodeInto = function(e, t) {
        const n = a.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    });
    let m = 0, r;
    function V(e) {
        r = e;
    }
    URL = globalThis.URL;
    const s = await O({
        "./game_of_life_bg.js": {
            __wbindgen_object_drop_ref: U,
            __wbg_new_227d7c05414eb861: F,
            __wbg_stack_3b0d974bbf31e44f: S,
            __wbg_error_a6fa202b58aa1cd3: M,
            __wbg___wbindgen_throw_6ddd609b62940d55: E
        }
    }, D), T = s.memory, W = s.__wbg_universe_free, H = s.universe_cells, N = s.universe_height, X = s.universe_new, Y = s.universe_tick, $ = s.universe_width, q = s.__wbindgen_export, G = s.__wbindgen_export2, J = s.__wbindgen_export3;
    var K = Object.freeze({
        __proto__: null,
        __wbg_universe_free: W,
        __wbindgen_export: q,
        __wbindgen_export2: G,
        __wbindgen_export3: J,
        memory: T,
        universe_cells: H,
        universe_height: N,
        universe_new: X,
        universe_tick: Y,
        universe_width: $
    });
    V(K);
    j = class {
        universe;
        width;
        height;
        constructor(t){
            this.universe = t, this.width = t.width(), this.height = t.height();
        }
        static async create() {
            return new j(w.new());
        }
        tick() {
            this.universe.tick();
        }
        getCells() {
            return new Uint8Array(T.buffer, this.universe.cells(), this.width * this.height);
        }
    };
})();
export { j as WasmBridge, __tla };
