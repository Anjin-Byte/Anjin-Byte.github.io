import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let A;
let __tla = (async ()=>{
    var T = "/assets/game_of_life_bg-CDmGZliC.wasm";
    class w {
        static __wrap(t) {
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
    function S() {
        const e = new Error;
        return F(e);
    }
    function U(e, t) {
        const n = k(t).stack, _ = R(n, r.__wbindgen_export2, r.__wbindgen_export3), o = m;
        y().setInt32(e + 4, o, !0), y().setInt32(e + 0, _, !0);
    }
    function C(e) {
        z(e);
    }
    const v = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>r.__wbg_universe_free(e, 1));
    function F(e) {
        f === u.length && u.push(u.length + 1);
        const t = f;
        return f = u[t], u[t] = e, t;
    }
    function I(e) {
        e < 1028 || (u[e] = f, f = e);
    }
    let d = null;
    function y() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== r.memory.buffer) && (d = new DataView(r.memory.buffer)), d;
    }
    function x(e, t) {
        return L(e >>> 0, t);
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
    let f = u.length;
    function R(e, t, n) {
        if (n === void 0) {
            const c = a.encode(e), b = t(c.length, 1) >>> 0;
            return h().subarray(b, b + c.length).set(c), m = c.length, b;
        }
        let _ = e.length, o = t(_, 1) >>> 0;
        const D = h();
        let i = 0;
        for(; i < _; i++){
            const c = e.charCodeAt(i);
            if (c > 127) break;
            D[o + i] = c;
        }
        if (i !== _) {
            i !== 0 && (e = e.slice(i)), o = n(o, _, _ = i + e.length * 3, 1) >>> 0;
            const c = h().subarray(o + i, o + _), b = a.encodeInto(e, c);
            i += b.written, o = n(o, _, i, 1) >>> 0;
        }
        return m = i, o;
    }
    function z(e) {
        const t = k(e);
        return I(e), t;
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
            __wbindgen_object_drop_ref: C,
            __wbg_new_227d7c05414eb861: S,
            __wbg_stack_3b0d974bbf31e44f: U,
            __wbg_error_a6fa202b58aa1cd3: M,
            __wbg___wbindgen_throw_bbadd78c1bac3a77: E
        }
    }, T), j = s.memory, W = s.__wbg_universe_free, G = s.universe_cells, H = s.universe_new, N = s.universe_tick, X = s.universe_height, Y = s.universe_width, Z = s.__wbindgen_export, $ = s.__wbindgen_export2, q = s.__wbindgen_export3;
    var J = Object.freeze({
        __proto__: null,
        __wbg_universe_free: W,
        __wbindgen_export: Z,
        __wbindgen_export2: $,
        __wbindgen_export3: q,
        memory: j,
        universe_cells: G,
        universe_height: X,
        universe_new: H,
        universe_tick: N,
        universe_width: Y
    });
    V(J);
    A = class {
        universe;
        width;
        height;
        constructor(t){
            this.universe = t, this.width = t.width(), this.height = t.height();
        }
        static async create() {
            return new A(w.new());
        }
        tick() {
            this.universe.tick();
        }
        getCells() {
            return new Uint8Array(j.buffer, this.universe.cells(), this.width * this.height);
        }
    };
})();
export { A as WasmBridge, __tla };
