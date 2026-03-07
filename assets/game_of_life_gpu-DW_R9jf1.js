import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let y;
let __tla = (async ()=>{
    var z = "/assets/game_of_life_gpu_bg-66TNPmTG.wasm";
    y = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const t = Object.create(y.prototype);
            return t.__wbg_ptr = _, D.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, D.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            c.__wbg_gpugameoflife_free(_, 0);
        }
        clear_hires_region() {
            c.gpugameoflife_clear_hires_region(this.__wbg_ptr);
        }
        flush_and_render() {
            c.gpugameoflife_flush_and_render(this.__wbg_ptr);
        }
        grid_pitch() {
            return c.gpugameoflife_grid_pitch(this.__wbg_ptr);
        }
        static new(_, t) {
            return c.gpugameoflife_new(_, t);
        }
        static new_offscreen(_, t) {
            return c.gpugameoflife_new_offscreen(_, t);
        }
        padded_rows() {
            return c.gpugameoflife_padded_rows(this.__wbg_ptr) >>> 0;
        }
        render_only() {
            c.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, t) {
            c.gpugameoflife_resize(this.__wbg_ptr, _, t);
        }
        screen_cols() {
            return c.gpugameoflife_screen_cols(this.__wbg_ptr) >>> 0;
        }
        screen_rows() {
            return c.gpugameoflife_screen_rows(this.__wbg_ptr) >>> 0;
        }
        set_decals_json(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = u, r = c.gpugameoflife_set_decals_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        set_hires_paused(_) {
            c.gpugameoflife_set_hires_paused(this.__wbg_ptr, _);
        }
        set_hires_region(_, t, n, r, a, f, b, l) {
            c.gpugameoflife_set_hires_region(this.__wbg_ptr, _, t, n, r, a, f, b, l);
        }
        set_scroll(_) {
            c.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_transition(_) {
            c.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = u, r = c.gpugameoflife_set_zones_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        tick_and_render() {
            c.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        toggle_cell(_, t) {
            c.gpugameoflife_toggle_cell(this.__wbg_ptr, _, t);
        }
        update_hires_flags(_, t, n) {
            c.gpugameoflife_update_hires_flags(this.__wbg_ptr, _, t, n);
        }
        words_per_row() {
            return c.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
    function E(e) {
        return e.Window;
    }
    function V(e) {
        return e.WorkerGlobalScope;
    }
    function U(e) {
        const _ = e, t = typeof _ == "boolean" ? _ : void 0;
        return s(t) ? 16777215 : t ? 1 : 0;
    }
    function R(e, _) {
        const t = v(_), n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function M(e) {
        return typeof e == "function";
    }
    function F(e) {
        const _ = e;
        return typeof _ == "object" && _ !== null;
    }
    function j(e) {
        return e === void 0;
    }
    function q(e, _) {
        const t = _, n = typeof t == "number" ? t : void 0;
        i().setFloat64(e + 8, s(n) ? 0 : n, !0), i().setInt32(e + 0, !s(n), !0);
    }
    function $(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = s(n) ? 0 : g(n, c.__wbindgen_malloc, c.__wbindgen_realloc), a = u;
        i().setInt32(e + 4, a, !0), i().setInt32(e + 0, r, !0);
    }
    function N(e, _) {
        throw new Error(w(e, _));
    }
    function Q(e) {
        e._wbg_cb_unref();
    }
    function X(e, _) {
        return e.beginComputePass(_);
    }
    function Y(e, _) {
        return e.beginRenderPass(_);
    }
    function Z(e) {
        return e.buffer;
    }
    function H() {
        return m(function(e, _, t) {
            return e.call(_, t);
        }, arguments);
    }
    function J(e, _, t) {
        e.clearBuffer(_, t);
    }
    function K(e, _, t, n) {
        e.clearBuffer(_, t, n);
    }
    function ee(e, _) {
        e.configure(_);
    }
    function _e(e, _, t, n, r, a) {
        e.copyBufferToBuffer(_, t, n, r, a);
    }
    function te(e, _, t, n) {
        e.copyBufferToTexture(_, t, n);
    }
    function ne(e, _, t, n) {
        e.copyExternalImageToTexture(_, t, n);
    }
    function re(e, _, t, n) {
        e.copyTextureToBuffer(_, t, n);
    }
    function ce(e, _, t, n) {
        e.copyTextureToTexture(_, t, n);
    }
    function oe(e, _) {
        return e.createBindGroupLayout(_);
    }
    function ae(e, _) {
        return e.createBindGroup(_);
    }
    function fe(e, _) {
        return e.createBuffer(_);
    }
    function be(e, _) {
        return e.createCommandEncoder(_);
    }
    function ie(e, _) {
        return e.createComputePipeline(_);
    }
    function se(e, _) {
        return e.createPipelineLayout(_);
    }
    function ue(e, _) {
        return e.createQuerySet(_);
    }
    function ge(e, _) {
        return e.createRenderBundleEncoder(_);
    }
    function de(e, _) {
        return e.createRenderPipeline(_);
    }
    function we(e, _) {
        return e.createSampler(_);
    }
    function le(e, _) {
        return e.createShaderModule(_);
    }
    function me(e, _) {
        return e.createTexture(_);
    }
    function pe(e, _) {
        return e.createView(_);
    }
    function xe(e) {
        e.destroy();
    }
    function he(e) {
        e.destroy();
    }
    function ye(e) {
        e.destroy();
    }
    function Be(e, _, t) {
        e.dispatchWorkgroupsIndirect(_, t);
    }
    function Se(e, _, t, n) {
        e.dispatchWorkgroups(_ >>> 0, t >>> 0, n >>> 0);
    }
    function Ie(e) {
        const _ = e.document;
        return s(_) ? 0 : d(_);
    }
    function Te(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Pe(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function ve(e, _, t, n, r, a) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function ke(e, _, t, n, r, a) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function Ce(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Ge(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Ae(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function De(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Le(e) {
        e.end();
    }
    function We(e) {
        e.end();
    }
    function Oe(e) {
        return e.error;
    }
    function ze(e, _) {
        let t, n;
        try {
            t = e, n = _, console.error(w(e, _));
        } finally{
            c.__wbindgen_free(t, n, 1);
        }
    }
    function Ee(e, _) {
        e.executeBundles(_);
    }
    function Ve(e) {
        return e.features;
    }
    function Ue(e) {
        return e.features;
    }
    function Re(e, _) {
        return e.finish(_);
    }
    function Me(e) {
        return e.finish();
    }
    function Fe(e, _) {
        return e.finish(_);
    }
    function je(e) {
        return e.finish();
    }
    function qe(e) {
        return Array.from(e);
    }
    function $e(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Ne(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Qe(e) {
        return e.getCompilationInfo();
    }
    function Xe() {
        return m(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return s(n) ? 0 : d(n);
        }, arguments);
    }
    function Ye() {
        return m(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return s(n) ? 0 : d(n);
        }, arguments);
    }
    function Ze(e) {
        return e.getCurrentTexture();
    }
    function He(e, _, t) {
        return e.getMappedRange(_, t);
    }
    function Je(e) {
        const _ = e.getPreferredCanvasFormat();
        return (zn.indexOf(_) + 1 || 96) - 1;
    }
    function Ke() {
        return m(function(e, _) {
            return Reflect.get(e, _);
        }, arguments);
    }
    function e_(e, _) {
        return e[_ >>> 0];
    }
    function __(e, _) {
        const t = e[_ >>> 0];
        return s(t) ? 0 : d(t);
    }
    function t_(e) {
        return e.gpu;
    }
    function n_(e) {
        return y.__wrap(e);
    }
    function r_(e, _, t) {
        return e.has(w(_, t));
    }
    function c_(e) {
        return e.height;
    }
    function o_(e) {
        return e.height;
    }
    function a_(e) {
        let _;
        try {
            _ = e instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function f_(e) {
        let _;
        try {
            _ = e instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function b_(e) {
        let _;
        try {
            _ = e instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function i_(e) {
        let _;
        try {
            _ = e instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function s_(e) {
        let _;
        try {
            _ = e instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function u_(e) {
        let _;
        try {
            _ = e instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function g_(e) {
        let _;
        try {
            _ = e instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function d_(e) {
        return Array.isArray(e);
    }
    function w_(e, _) {
        const t = _.label, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function l_(e) {
        return e.length;
    }
    function m_(e) {
        return e.length;
    }
    function p_(e) {
        return e.length;
    }
    function x_(e) {
        return e.limits;
    }
    function h_(e) {
        return e.limits;
    }
    function y_(e) {
        return e.lineNum;
    }
    function B_(e) {
        return e.lost;
    }
    function S_(e, _, t, n) {
        return e.mapAsync(_ >>> 0, t, n);
    }
    function I_(e) {
        return e.maxBindGroups;
    }
    function T_(e) {
        return e.maxBindingsPerBindGroup;
    }
    function P_(e) {
        return e.maxBufferSize;
    }
    function v_(e) {
        return e.maxColorAttachmentBytesPerSample;
    }
    function k_(e) {
        return e.maxColorAttachments;
    }
    function C_(e) {
        return e.maxComputeInvocationsPerWorkgroup;
    }
    function G_(e) {
        return e.maxComputeWorkgroupSizeX;
    }
    function A_(e) {
        return e.maxComputeWorkgroupSizeY;
    }
    function D_(e) {
        return e.maxComputeWorkgroupSizeZ;
    }
    function L_(e) {
        return e.maxComputeWorkgroupStorageSize;
    }
    function W_(e) {
        return e.maxComputeWorkgroupsPerDimension;
    }
    function O_(e) {
        return e.maxDynamicStorageBuffersPerPipelineLayout;
    }
    function z_(e) {
        return e.maxDynamicUniformBuffersPerPipelineLayout;
    }
    function E_(e) {
        return e.maxInterStageShaderComponents;
    }
    function V_(e) {
        return e.maxSampledTexturesPerShaderStage;
    }
    function U_(e) {
        return e.maxSamplersPerShaderStage;
    }
    function R_(e) {
        return e.maxStorageBufferBindingSize;
    }
    function M_(e) {
        return e.maxStorageBuffersPerShaderStage;
    }
    function F_(e) {
        return e.maxStorageTexturesPerShaderStage;
    }
    function j_(e) {
        return e.maxTextureArrayLayers;
    }
    function q_(e) {
        return e.maxTextureDimension1D;
    }
    function $_(e) {
        return e.maxTextureDimension2D;
    }
    function N_(e) {
        return e.maxTextureDimension3D;
    }
    function Q_(e) {
        return e.maxUniformBufferBindingSize;
    }
    function X_(e) {
        return e.maxUniformBuffersPerShaderStage;
    }
    function Y_(e) {
        return e.maxVertexAttributes;
    }
    function Z_(e) {
        return e.maxVertexBufferArrayStride;
    }
    function H_(e) {
        return e.maxVertexBuffers;
    }
    function J_(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function K_(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function et(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function _t(e) {
        return e.messages;
    }
    function tt(e) {
        return e.minStorageBufferOffsetAlignment;
    }
    function nt(e) {
        return e.minUniformBufferOffsetAlignment;
    }
    function rt(e) {
        return e.navigator;
    }
    function ct(e) {
        return e.navigator;
    }
    function ot() {
        return new Error;
    }
    function at() {
        return new Object;
    }
    function ft(e, _) {
        return new Uint8Array(G(e, _));
    }
    function bt(e, _) {
        try {
            var t = {
                a: e,
                b: _
            }, n = (a, f)=>{
                const b = t.a;
                t.a = 0;
                try {
                    return Dn(b, t.b, a, f);
                } finally{
                    t.a = b;
                }
            };
            return new Promise(n);
        } finally{
            t.a = t.b = 0;
        }
    }
    function it() {
        return new Array;
    }
    function st(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function ut(e) {
        return e.offset;
    }
    function gt() {
        return m(function(e, _) {
            return JSON.parse(w(e, _));
        }, arguments);
    }
    function dt(e) {
        return e.popErrorScope();
    }
    function wt(e, _, t) {
        Uint8Array.prototype.set.call(G(e, _), t);
    }
    function lt(e, _) {
        e.pushErrorScope(On[_]);
    }
    function mt(e, _) {
        return e.push(_);
    }
    function pt() {
        return m(function(e, _, t) {
            return e.querySelectorAll(w(_, t));
        }, arguments);
    }
    function xt(e) {
        return e.queueMicrotask;
    }
    function ht(e) {
        queueMicrotask(e);
    }
    function yt(e) {
        return e.queue;
    }
    function Bt() {
        return Math.random();
    }
    function St(e) {
        const _ = e.reason;
        return (Wn.indexOf(_) + 1 || 3) - 1;
    }
    function It(e, _) {
        return e.requestAdapter(_);
    }
    function Tt(e, _) {
        return _?.requiredLimits && delete _.requiredLimits.maxInterStageShaderComponents, e.requestDevice(_);
    }
    function Pt(e, _, t, n, r, a) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function vt(e) {
        return Promise.resolve(e);
    }
    function kt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Ct(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function Gt(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function At(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Dt(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function Lt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Wt(e, _) {
        e.setBlendConstant(_);
    }
    function Ot(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function zt(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Et(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Vt(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function Ut(e, _) {
        e.setPipeline(_);
    }
    function Rt(e, _) {
        e.setPipeline(_);
    }
    function Mt(e, _) {
        e.setPipeline(_);
    }
    function Ft(e, _, t, n, r) {
        e.setScissorRect(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function jt(e, _) {
        e.setStencilReference(_ >>> 0);
    }
    function qt(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function $t(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Nt(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Qt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Xt(e, _, t, n, r, a, f) {
        e.setViewport(_, t, n, r, a, f);
    }
    function Yt() {
        return m(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
    }
    function Zt(e, _, t) {
        e.set(_, t >>> 0);
    }
    function Ht(e, _) {
        e.height = _ >>> 0;
    }
    function Jt(e, _) {
        e.height = _ >>> 0;
    }
    function Kt(e, _) {
        e.onuncapturederror = _;
    }
    function en(e, _) {
        e.width = _ >>> 0;
    }
    function _n(e, _) {
        e.width = _ >>> 0;
    }
    function tn(e) {
        return e.size;
    }
    function nn(e, _) {
        const t = _.stack, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function rn() {
        const e = typeof global > "u" ? null : global;
        return s(e) ? 0 : d(e);
    }
    function cn() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return s(e) ? 0 : d(e);
    }
    function on() {
        const e = typeof self > "u" ? null : self;
        return s(e) ? 0 : d(e);
    }
    function an() {
        const e = typeof window > "u" ? null : window;
        return s(e) ? 0 : d(e);
    }
    function fn(e, _) {
        e.submit(_);
    }
    function bn(e, _) {
        return e.then(_);
    }
    function sn(e, _) {
        return e.then(_);
    }
    function un(e, _, t) {
        return e.then(_, t);
    }
    function gn(e, _, t) {
        return e.then(_, t);
    }
    function dn(e) {
        const _ = e.type;
        return (Ln.indexOf(_) + 1 || 4) - 1;
    }
    function wn(e) {
        e.unmap();
    }
    function ln(e) {
        return e.usage;
    }
    function mn(e) {
        return e.valueOf();
    }
    function pn(e) {
        return e.width;
    }
    function xn(e) {
        return e.width;
    }
    function hn(e, _, t, n, r, a) {
        e.writeBuffer(_, t, n, r, a);
    }
    function yn(e, _, t, n, r) {
        e.writeTexture(_, t, n, r);
    }
    function Bn(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h365128c9c23d36c4, Cn);
    }
    function Sn(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h365128c9c23d36c4, Gn);
    }
    function In(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h03eaf4e806a12d61, An);
    }
    function Tn(e) {
        return e;
    }
    function Pn(e, _) {
        return G(e, _);
    }
    function vn(e, _) {
        return w(e, _);
    }
    function kn() {
        const e = c.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function Cn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568(e, _, t);
    }
    function Gn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568_1(e, _, t);
    }
    function An(e, _, t) {
        const n = c.wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff(e, _, t);
        if (n[1]) throw k(n[0]);
    }
    function Dn(e, _, t, n) {
        c.wasm_bindgen__convert__closures_____invoke__h45a9c44561bd92e0(e, _, t, n);
    }
    const Ln = [
        "error",
        "warning",
        "info"
    ], Wn = [
        "unknown",
        "destroyed"
    ], On = [
        "validation",
        "out-of-memory",
        "internal"
    ], T = [
        "uint16",
        "uint32"
    ], zn = [
        "r8unorm",
        "r8snorm",
        "r8uint",
        "r8sint",
        "r16uint",
        "r16sint",
        "r16float",
        "rg8unorm",
        "rg8snorm",
        "rg8uint",
        "rg8sint",
        "r32uint",
        "r32sint",
        "r32float",
        "rg16uint",
        "rg16sint",
        "rg16float",
        "rgba8unorm",
        "rgba8unorm-srgb",
        "rgba8snorm",
        "rgba8uint",
        "rgba8sint",
        "bgra8unorm",
        "bgra8unorm-srgb",
        "rgb9e5ufloat",
        "rgb10a2uint",
        "rgb10a2unorm",
        "rg11b10ufloat",
        "rg32uint",
        "rg32sint",
        "rg32float",
        "rgba16uint",
        "rgba16sint",
        "rgba16float",
        "rgba32uint",
        "rgba32sint",
        "rgba32float",
        "stencil8",
        "depth16unorm",
        "depth24plus",
        "depth24plus-stencil8",
        "depth32float",
        "depth32float-stencil8",
        "bc1-rgba-unorm",
        "bc1-rgba-unorm-srgb",
        "bc2-rgba-unorm",
        "bc2-rgba-unorm-srgb",
        "bc3-rgba-unorm",
        "bc3-rgba-unorm-srgb",
        "bc4-r-unorm",
        "bc4-r-snorm",
        "bc5-rg-unorm",
        "bc5-rg-snorm",
        "bc6h-rgb-ufloat",
        "bc6h-rgb-float",
        "bc7-rgba-unorm",
        "bc7-rgba-unorm-srgb",
        "etc2-rgb8unorm",
        "etc2-rgb8unorm-srgb",
        "etc2-rgb8a1unorm",
        "etc2-rgb8a1unorm-srgb",
        "etc2-rgba8unorm",
        "etc2-rgba8unorm-srgb",
        "eac-r11unorm",
        "eac-r11snorm",
        "eac-rg11unorm",
        "eac-rg11snorm",
        "astc-4x4-unorm",
        "astc-4x4-unorm-srgb",
        "astc-5x4-unorm",
        "astc-5x4-unorm-srgb",
        "astc-5x5-unorm",
        "astc-5x5-unorm-srgb",
        "astc-6x5-unorm",
        "astc-6x5-unorm-srgb",
        "astc-6x6-unorm",
        "astc-6x6-unorm-srgb",
        "astc-8x5-unorm",
        "astc-8x5-unorm-srgb",
        "astc-8x6-unorm",
        "astc-8x6-unorm-srgb",
        "astc-8x8-unorm",
        "astc-8x8-unorm-srgb",
        "astc-10x5-unorm",
        "astc-10x5-unorm-srgb",
        "astc-10x6-unorm",
        "astc-10x6-unorm-srgb",
        "astc-10x8-unorm",
        "astc-10x8-unorm-srgb",
        "astc-10x10-unorm",
        "astc-10x10-unorm-srgb",
        "astc-12x10-unorm",
        "astc-12x10-unorm-srgb",
        "astc-12x12-unorm",
        "astc-12x12-unorm-srgb"
    ], D = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>c.__wbg_gpugameoflife_free(e >>> 0, 1));
    function d(e) {
        const _ = c.__externref_table_alloc();
        return c.__wbindgen_externrefs.set(_, e), _;
    }
    const L = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function v(e) {
        const _ = typeof e;
        if (_ == "number" || _ == "boolean" || e == null) return `${e}`;
        if (_ == "string") return `"${e}"`;
        if (_ == "symbol") {
            const r = e.description;
            return r == null ? "Symbol" : `Symbol(${r})`;
        }
        if (_ == "function") {
            const r = e.name;
            return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
        }
        if (Array.isArray(e)) {
            const r = e.length;
            let a = "[";
            r > 0 && (a += v(e[0]));
            for(let f = 1; f < r; f++)a += ", " + v(e[f]);
            return a += "]", a;
        }
        const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let n;
        if (t && t.length > 1) n = t[1];
        else return toString.call(e);
        if (n == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : n;
    }
    function C(e, _) {
        return e = e >>> 0, En().subarray(e / 4, e / 4 + _);
    }
    function G(e, _) {
        return e = e >>> 0, x().subarray(e / 1, e / 1 + _);
    }
    let p = null;
    function i() {
        return (p === null || p.buffer.detached === !0 || p.buffer.detached === void 0 && p.buffer !== c.memory.buffer) && (p = new DataView(c.memory.buffer)), p;
    }
    function w(e, _) {
        return e = e >>> 0, Un(e, _);
    }
    let B = null;
    function En() {
        return (B === null || B.byteLength === 0) && (B = new Uint32Array(c.memory.buffer)), B;
    }
    let S = null;
    function x() {
        return (S === null || S.byteLength === 0) && (S = new Uint8Array(c.memory.buffer)), S;
    }
    function m(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = d(t);
            c.__wbindgen_exn_store(n);
        }
    }
    function s(e) {
        return e == null;
    }
    function A(e, _, t, n) {
        const r = {
            a: e,
            b: _,
            cnt: 1,
            dtor: t
        }, a = (...f)=>{
            r.cnt++;
            const b = r.a;
            r.a = 0;
            try {
                return n(b, r.b, ...f);
            } finally{
                r.a = b, a._wbg_cb_unref();
            }
        };
        return a._wbg_cb_unref = ()=>{
            --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, L.unregister(r));
        }, L.register(a, r, r), a;
    }
    function g(e, _, t) {
        if (t === void 0) {
            const b = h.encode(e), l = _(b.length, 1) >>> 0;
            return x().subarray(l, l + b.length).set(b), u = b.length, l;
        }
        let n = e.length, r = _(n, 1) >>> 0;
        const a = x();
        let f = 0;
        for(; f < n; f++){
            const b = e.charCodeAt(f);
            if (b > 127) break;
            a[r + f] = b;
        }
        if (f !== n) {
            f !== 0 && (e = e.slice(f)), r = t(r, n, n = f + e.length * 3, 1) >>> 0;
            const b = x().subarray(r + f, r + n), l = h.encodeInto(e, b);
            f += l.written, r = t(r, n, f, 1) >>> 0;
        }
        return u = f, r;
    }
    function k(e) {
        const _ = c.__wbindgen_externrefs.get(e);
        return c.__externref_table_dealloc(e), _;
    }
    let I = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    I.decode();
    const Vn = 2146435072;
    let P = 0;
    function Un(e, _) {
        return P += _, P >= Vn && (I = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), I.decode(), P = _), I.decode(x().subarray(e, e + _));
    }
    const h = new TextEncoder;
    "encodeInto" in h || (h.encodeInto = function(e, _) {
        const t = h.encode(e);
        return _.set(t), {
            read: e.length,
            written: t.length
        };
    });
    let u = 0, c;
    function Rn(e) {
        c = e;
    }
    URL = globalThis.URL;
    const o = await O({
        "./game_of_life_gpu_bg.js": {
            __wbg_gpugameoflife_new: n_,
            __wbg_new_typed_aaaeaf29cf802876: bt,
            __wbg_call_2d781c1f4d5c0ef8: H,
            __wbg_new_227d7c05414eb861: ot,
            __wbg_stack_3b0d974bbf31e44f: nn,
            __wbg_error_a6fa202b58aa1cd3: ze,
            __wbg_getMappedRange_11ec4cfce4df1e72: He,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: s_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: i_,
            __wbg_offset_164492575e959c94: ut,
            __wbg_length_87e0297027dd7802: l_,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: b_,
            __wbg_limits_5b3783fcc0d36428: x_,
            __wbg_limits_becc24c879d87717: h_,
            __wbg_destroy_50767c0458f7c8d1: xe,
            __wbg_destroy_80182ff6e496228e: he,
            __wbg_features_30a76d141781ad80: Ve,
            __wbg_end_54134488dbc5b7a9: Le,
            __wbg_destroy_a2c0702c5d1269b5: ye,
            __wbg_features_fdbd3daed26aa468: Ue,
            __wbg_end_57a2746c247f499a: We,
            __wbg_draw_57caf8f0bc1ea050: Ae,
            __wbg_popErrorScope_2869a89dd4626f0c: dt,
            __wbg_pushErrorScope_72e651b0f8f64c0e: lt,
            __wbg_drawIndexed_9c9719597507e735: ke,
            __wbg_setPipeline_f2cf83769bb33769: Mt,
            __wbg_setViewport_94128a2b1a708040: Xt,
            __wbg_setPipeline_481f34ae14c49d67: Ut,
            __wbg_drawIndirect_73df189881970a43: Ce,
            __wbg_draw_ce5e8b8ad56571cb: De,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Ze,
            __wbg_setScissorRect_0578b1de90caf434: Ft,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Se,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: Pt,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Te,
            __wbg_setStencilReference_7616273572b1075e: jt,
            __wbg_drawIndexed_55f6bf3bda0212ad: ve,
            __wbg_setPipeline_723820e1c5cc61e7: Rt,
            __wbg_drawIndirect_a2f7c719957f8ec9: Ge,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: _e,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Ne,
            __wbg_getBindGroupLayout_aba26df848b4322d: $e,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Be,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: Pe,
            __wbg_error_2acb88afe0ad9a3e: Oe,
            __wbg_valueOf_5c6da6c9a85f34dc: mn,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: f_,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: q_,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: $_,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: N_,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: j_,
            __wbg_maxBindGroups_5d3409c14d2756b5: I_,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: T_,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: z_,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: O_,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: V_,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: U_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: M_,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: F_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: X_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: Q_,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: R_,
            __wbg_maxVertexBuffers_e5cf174a3497d472: H_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: P_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: Y_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: Z_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: nt,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: tt,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: E_,
            __wbg_maxColorAttachments_378f5fb1c453321d: k_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: v_,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: L_,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: C_,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: G_,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: A_,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: D_,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: W_,
            __wbg_has_2184fc4b845f2b5f: r_,
            __wbg_queue_6b07ccdd49a6ba90: yt,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: a_,
            __wbg_Window_06e90eea4c7df280: E,
            __wbg_gpu_d9721d200584e919: t_,
            __wbg_WorkerGlobalScope_defda269b75e179a: V,
            __wbg_unmap_4aa38f8c5283cc1d: wn,
            __wbg_submit_60f2469dc00130cc: fn,
            __wbg_mapAsync_8d0ffc031e86e9a0: S_,
            __wbg_configure_6e1ccd3ac31b721c: ee,
            __wbg_writeBuffer_b5e6e8f3f93629bc: hn,
            __wbg_writeTexture_57e41dd94bac65c4: yn,
            __wbg_createView_c227b9af7bd5f441: pe,
            __wbg_createBuffer_e3f8b2bd8b492498: fe,
            __wbg_createSampler_cb4137c4e97c7098: we,
            __wbg_createTexture_1a3ebeb1ddd7a035: me,
            __wbg_requestDevice_6130c3ba10d633f9: Tt,
            __wbg_finish_35be15c58b55a95b: Re,
            __wbg_finish_41491ca602373cde: Me,
            __wbg_createQuerySet_6050df2adcb1f167: ue,
            __wbg_createBindGroup_876adbf7e329ce2e: ae,
            __wbg_requestAdapter_e4b32f2647c66726: It,
            __wbg_set_onuncapturederror_729c2e42c36923f4: Kt,
            __wbg_setBindGroup_f4d552dcef65a491: Dt,
            __wbg_setBindGroup_f930832baeb4279b: Lt,
            __wbg_setBindGroup_8d384b1c5ed329f4: Gt,
            __wbg_setBindGroup_9877b57492cb7e1c: At,
            __wbg_createShaderModule_912a19a8ccc2aa1a: le,
            __wbg_usage_ee2982f59567c06f: ln,
            __wbg_size_1dfbf7241f9df1cc: tn,
            __wbg_executeBundles_2905636f81aabf99: Ee,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Qe,
            __wbg_messages_4e98c7e63c5efe7b: _t,
            __wbg_length_b3416cf66a5452c8: m_,
            __wbg_clearBuffer_f24f8de43db597ec: K,
            __wbg_clearBuffer_b08b15b7ee3c9d57: J,
            __wbg_finish_eb06372cc93f8d50: Fe,
            __wbg_finish_ee515f526784acd5: je,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Vt,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: zt,
            __wbg_createCommandEncoder_e617922978f8b4de: be,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: se,
            __wbg_createRenderPipeline_921034ccba195ffe: de,
            __wbg_setVertexBuffer_54536e0e73bfc91e: qt,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: $t,
            __wbg_createComputePipeline_6794bf24c6c03583: ie,
            __wbg_setBlendConstant_257274277b0e3153: Wt,
            __wbg_createBindGroupLayout_e37f9323c278f93f: oe,
            __wbg_lost_2c34651e3317be8b: B_,
            __wbg_then_1d7a5273811a5cea: sn,
            __wbg_beginRenderPass_9a7bf53d588737dc: Y,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: X,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: ge,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: ne,
            __wbg_setBindGroup_6149584f04998372: Ct,
            __wbg_setBindGroup_1602c955be9b2eaa: kt,
            __wbg_copyBufferToTexture_48aa78a412b2a467: te,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: re,
            __wbg_setIndexBuffer_4219294fa3e2d59b: Ot,
            __wbg_setIndexBuffer_7e208bb69310ed01: Et,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: ce,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Nt,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Qt,
            __wbg_lineNum_24517b98f306fcae: y_,
            __wbg_instanceof_Object_be1962063fcc0c9f: u_,
            __wbg_get_a8ee5c45dabc1b3b: e_,
            __wbg_push_e87b0e732085a946: mt,
            __wbg_new_typed_bccac67128ed885a: it,
            __wbg_then_9e335f6dd892bc11: un,
            __wbg_label_cdc2b7a875dc5123: w_,
            __wbg_message_f762db05c1294eca: et,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Je,
            __wbg_reason_d7f4ddcad86f8d99: St,
            __wbg_message_1b27ea1ad3998a9f: J_,
            __wbg_type_4b0a304ebc25e195: dn,
            __wbg_message_a77e1a9202609622: K_,
            __wbg_then_098abe61755d12f6: bn,
            __wbg_queueMicrotask_a082d78ce798393e: ht,
            __wbg_queueMicrotask_0c399741342fb10f: xt,
            __wbg_resolve_ae8d83246e5bcc12: vt,
            __wbg_instanceof_Window_23e677d2c6843922: g_,
            __wbg_document_c0320cd4183c6d9b: Ie,
            __wbg_navigator_9cebf56f28aa719b: ct,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: pt,
            __wbg_navigator_583ffd4fc14c0f7a: rt,
            __wbg_get_c7546417fb0bec10: __,
            __wbg_set_height_b6548a01bdcb689a: Jt,
            __wbg_getContext_f04bf8f22dcb2d53: Ye,
            __wbg_width_4d6fc7fecd877217: pn,
            __wbg_height_6568c4427c3b889d: c_,
            __wbg_set_width_c0fcaa2da53cd540: _n,
            __wbg_set_height_98a1a397672657e2: Ht,
            __wbg_getContext_a9236f98f1f7fe7c: Xe,
            __wbg_width_71d9d44b5e14c4b7: xn,
            __wbg_height_fb8c4164276f25fd: o_,
            __wbg_set_width_576343a4a7f2cf28: en,
            __wbg_new_ab79df5bd7c26067: at,
            __wbg_length_ea16607d7b61445b: p_,
            __wbg_new_from_slice_22da9388ac046e50: ft,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: st,
            __wbg_set_e80615d7a9a43981: Zt,
            __wbg_buffer_60b8043cd926067d: Z,
            __wbg_prototypesetcall_d62e5099504357e6: wt,
            __wbg_from_4bdf88943703fd48: qe,
            __wbg_isArray_33b91feb269ff46e: d_,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: cn,
            __wbg_static_accessor_SELF_f207c857566db248: on,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: rn,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: an,
            __wbg_then_bc59d1943397ca4e: gn,
            __wbg_parse_e9eddd2a82c706eb: gt,
            __wbg_get_3ef1eba1850ade27: Ke,
            __wbg_set_7eaa4f96924fd6b3: Yt,
            __wbg_random_5bb86cae65a45bf6: Bt,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: q,
            __wbg___wbindgen_throw_6ddd609b62940d55: N,
            __wbg___wbindgen_is_object_781bc9f159099513: F,
            __wbg___wbindgen_string_get_395e606bd0ee4427: $,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: U,
            __wbg___wbindgen_is_function_3c846841762788c1: M,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: j,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: R,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: Q,
            __wbindgen_init_externref_table: kn,
            __wbindgen_cast_0000000000000001: Bn,
            __wbindgen_cast_0000000000000002: Sn,
            __wbindgen_cast_0000000000000003: In,
            __wbindgen_cast_0000000000000004: Tn,
            __wbindgen_cast_0000000000000005: Pn,
            __wbindgen_cast_0000000000000006: vn
        }
    }, z), Mn = o.memory, Fn = o.__wbg_gpugameoflife_free, jn = o.gpugameoflife_clear_hires_region, qn = o.gpugameoflife_flush_and_render, $n = o.gpugameoflife_grid_pitch, Nn = o.gpugameoflife_new, Qn = o.gpugameoflife_new_offscreen, Xn = o.gpugameoflife_padded_rows, Yn = o.gpugameoflife_render_only, Zn = o.gpugameoflife_resize, Hn = o.gpugameoflife_screen_cols, Jn = o.gpugameoflife_screen_rows, Kn = o.gpugameoflife_set_decals_json, er = o.gpugameoflife_set_hires_paused, _r = o.gpugameoflife_set_hires_region, tr = o.gpugameoflife_set_scroll, nr = o.gpugameoflife_set_transition, rr = o.gpugameoflife_set_zones_json, cr = o.gpugameoflife_tick_and_render, or = o.gpugameoflife_toggle_cell, ar = o.gpugameoflife_update_hires_flags, fr = o.gpugameoflife_words_per_row, br = o.wasm_bindgen__closure__destroy__h365128c9c23d36c4, ir = o.wasm_bindgen__closure__destroy__h03eaf4e806a12d61, sr = o.wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff, ur = o.wasm_bindgen__convert__closures_____invoke__h45a9c44561bd92e0, gr = o.wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568, dr = o.wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568_1, wr = o.__wbindgen_malloc, lr = o.__wbindgen_realloc, mr = o.__wbindgen_exn_store, pr = o.__externref_table_alloc, xr = o.__wbindgen_externrefs, hr = o.__wbindgen_free, yr = o.__externref_table_dealloc, W = o.__wbindgen_start;
    var Br = Object.freeze({
        __proto__: null,
        __externref_table_alloc: pr,
        __externref_table_dealloc: yr,
        __wbg_gpugameoflife_free: Fn,
        __wbindgen_exn_store: mr,
        __wbindgen_externrefs: xr,
        __wbindgen_free: hr,
        __wbindgen_malloc: wr,
        __wbindgen_realloc: lr,
        __wbindgen_start: W,
        gpugameoflife_clear_hires_region: jn,
        gpugameoflife_flush_and_render: qn,
        gpugameoflife_grid_pitch: $n,
        gpugameoflife_new: Nn,
        gpugameoflife_new_offscreen: Qn,
        gpugameoflife_padded_rows: Xn,
        gpugameoflife_render_only: Yn,
        gpugameoflife_resize: Zn,
        gpugameoflife_screen_cols: Hn,
        gpugameoflife_screen_rows: Jn,
        gpugameoflife_set_decals_json: Kn,
        gpugameoflife_set_hires_paused: er,
        gpugameoflife_set_hires_region: _r,
        gpugameoflife_set_scroll: tr,
        gpugameoflife_set_transition: nr,
        gpugameoflife_set_zones_json: rr,
        gpugameoflife_tick_and_render: cr,
        gpugameoflife_toggle_cell: or,
        gpugameoflife_update_hires_flags: ar,
        gpugameoflife_words_per_row: fr,
        memory: Mn,
        wasm_bindgen__closure__destroy__h03eaf4e806a12d61: ir,
        wasm_bindgen__closure__destroy__h365128c9c23d36c4: br,
        wasm_bindgen__convert__closures_____invoke__h45a9c44561bd92e0: ur,
        wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff: sr,
        wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568: gr,
        wasm_bindgen__convert__closures_____invoke__hd609b1af4891e568_1: dr
    });
    Rn(Br);
    W();
})();
export { y as GpuGameOfLife, __tla };
