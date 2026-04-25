import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let y;
let __tla = (async ()=>{
    var z = "/assets/game_of_life_gpu_bg-DE4xaoAs.wasm";
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
        set_scroll(_) {
            c.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_theme_json(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_theme_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        set_transition(_) {
            c.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_zones_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        tick_and_render() {
            c.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        toggle_cell(_, t) {
            c.gpugameoflife_toggle_cell(this.__wbg_ptr, _, t);
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
        return i(t) ? 16777215 : t ? 1 : 0;
    }
    function R(e, _) {
        const t = v(_), n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
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
        b().setFloat64(e + 8, i(n) ? 0 : n, !0), b().setInt32(e + 0, !i(n), !0);
    }
    function $(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = i(n) ? 0 : g(n, c.__wbindgen_malloc, c.__wbindgen_realloc), a = s;
        b().setInt32(e + 4, a, !0), b().setInt32(e + 0, r, !0);
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
        return l(function(e, _, t) {
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
    function ue(e, _) {
        return e.createComputePipeline(_);
    }
    function ie(e, _) {
        return e.createPipelineLayout(_);
    }
    function se(e, _) {
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
        return i(_) ? 0 : d(_);
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
        return l(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return i(n) ? 0 : d(n);
        }, arguments);
    }
    function Ye() {
        return l(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return i(n) ? 0 : d(n);
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
        return (On.indexOf(_) + 1 || 96) - 1;
    }
    function Ke(e, _) {
        const t = e[_ >>> 0];
        return i(t) ? 0 : d(t);
    }
    function e_() {
        return l(function(e, _) {
            return Reflect.get(e, _);
        }, arguments);
    }
    function __(e, _) {
        return e[_ >>> 0];
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
    function u_(e) {
        let _;
        try {
            _ = e instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function i_(e) {
        let _;
        try {
            _ = e instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function s_(e) {
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
        const t = _.label, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
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
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function K_(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function et(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
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
        return new Array;
    }
    function ft() {
        return new Object;
    }
    function bt(e, _) {
        return new Uint8Array(G(e, _));
    }
    function ut(e, _) {
        try {
            var t = {
                a: e,
                b: _
            }, n = (a, f)=>{
                const u = t.a;
                t.a = 0;
                try {
                    return An(u, t.b, a, f);
                } finally{
                    t.a = u;
                }
            };
            return new Promise(n);
        } finally{
            t.a = 0;
        }
    }
    function it(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function st(e) {
        return e.offset;
    }
    function gt() {
        return l(function(e, _) {
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
        e.pushErrorScope(Wn[_]);
    }
    function mt(e, _) {
        return e.push(_);
    }
    function pt() {
        return l(function(e, _, t) {
            return e.querySelectorAll(w(_, t));
        }, arguments);
    }
    function xt(e) {
        queueMicrotask(e);
    }
    function ht(e) {
        return e.queueMicrotask;
    }
    function yt(e) {
        return e.queue;
    }
    function Bt(e) {
        const _ = e.reason;
        return (Ln.indexOf(_) + 1 || 3) - 1;
    }
    function St(e, _) {
        return e.requestAdapter(_);
    }
    function It(e, _) {
        return _?.requiredLimits && delete _.requiredLimits.maxInterStageShaderComponents, e.requestDevice(_);
    }
    function Tt(e, _, t, n, r, a) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function Pt(e) {
        return Promise.resolve(e);
    }
    function vt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function kt(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function Ct(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function Gt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function At(e, _, t, n, r, a, f) {
        e.setBindGroup(_ >>> 0, t, C(n, r), a, f >>> 0);
    }
    function Dt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Lt(e, _) {
        e.setBlendConstant(_);
    }
    function Wt(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function Ot(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function zt(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Et(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function Vt(e, _) {
        e.setPipeline(_);
    }
    function Ut(e, _) {
        e.setPipeline(_);
    }
    function Rt(e, _) {
        e.setPipeline(_);
    }
    function Mt(e, _, t, n, r) {
        e.setScissorRect(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Ft(e, _) {
        e.setStencilReference(_ >>> 0);
    }
    function jt(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function qt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function $t(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Nt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Qt(e, _, t, n, r, a, f) {
        e.setViewport(_, t, n, r, a, f);
    }
    function Xt() {
        return l(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
    }
    function Yt(e, _, t) {
        e.set(_, t >>> 0);
    }
    function Zt(e, _) {
        e.height = _ >>> 0;
    }
    function Ht(e, _) {
        e.height = _ >>> 0;
    }
    function Jt(e, _) {
        e.onuncapturederror = _;
    }
    function Kt(e, _) {
        e.width = _ >>> 0;
    }
    function en(e, _) {
        e.width = _ >>> 0;
    }
    function _n(e) {
        return e.size;
    }
    function tn(e, _) {
        const t = _.stack, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function nn() {
        const e = typeof global > "u" ? null : global;
        return i(e) ? 0 : d(e);
    }
    function rn() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return i(e) ? 0 : d(e);
    }
    function cn() {
        const e = typeof self > "u" ? null : self;
        return i(e) ? 0 : d(e);
    }
    function on() {
        const e = typeof window > "u" ? null : window;
        return i(e) ? 0 : d(e);
    }
    function an(e, _) {
        e.submit(_);
    }
    function fn(e, _) {
        return e.then(_);
    }
    function bn(e, _, t) {
        return e.then(_, t);
    }
    function un(e, _) {
        return e.then(_);
    }
    function sn(e, _, t) {
        return e.then(_, t);
    }
    function gn(e) {
        const _ = e.type;
        return (Dn.indexOf(_) + 1 || 4) - 1;
    }
    function dn(e) {
        e.unmap();
    }
    function wn(e) {
        return e.usage;
    }
    function ln(e) {
        return e.valueOf();
    }
    function mn(e) {
        return e.width;
    }
    function pn(e) {
        return e.width;
    }
    function xn(e, _, t, n, r, a) {
        e.writeBuffer(_, t, n, r, a);
    }
    function hn(e, _, t, n, r) {
        e.writeTexture(_, t, n, r);
    }
    function yn(e, _) {
        return A(e, _, kn);
    }
    function Bn(e, _) {
        return A(e, _, Gn);
    }
    function Sn(e, _) {
        return A(e, _, Cn);
    }
    function In(e) {
        return e;
    }
    function Tn(e, _) {
        return G(e, _);
    }
    function Pn(e, _) {
        return w(e, _);
    }
    function vn() {
        const e = c.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function kn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h898172860a99d122(e, _, t);
    }
    function Cn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h898172860a99d122_2(e, _, t);
    }
    function Gn(e, _, t) {
        const n = c.wasm_bindgen__convert__closures_____invoke__hf7dda74a67d66216(e, _, t);
        if (n[1]) throw k(n[0]);
    }
    function An(e, _, t, n) {
        c.wasm_bindgen__convert__closures_____invoke__h5c8dd837cf00f20a(e, _, t, n);
    }
    const Dn = [
        "error",
        "warning",
        "info"
    ], Ln = [
        "unknown",
        "destroyed"
    ], Wn = [
        "validation",
        "out-of-memory",
        "internal"
    ], T = [
        "uint16",
        "uint32"
    ], On = [
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
    } : new FinalizationRegistry((e)=>c.__wbindgen_destroy_closure(e.a, e.b));
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
        return e = e >>> 0, zn().subarray(e / 4, e / 4 + _);
    }
    function G(e, _) {
        return e = e >>> 0, x().subarray(e / 1, e / 1 + _);
    }
    let m = null;
    function b() {
        return (m === null || m.buffer.detached === !0 || m.buffer.detached === void 0 && m.buffer !== c.memory.buffer) && (m = new DataView(c.memory.buffer)), m;
    }
    function w(e, _) {
        return e = e >>> 0, Vn(e, _);
    }
    let B = null;
    function zn() {
        return (B === null || B.byteLength === 0) && (B = new Uint32Array(c.memory.buffer)), B;
    }
    let S = null;
    function x() {
        return (S === null || S.byteLength === 0) && (S = new Uint8Array(c.memory.buffer)), S;
    }
    function l(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = d(t);
            c.__wbindgen_exn_store(n);
        }
    }
    function i(e) {
        return e == null;
    }
    function A(e, _, t) {
        const n = {
            a: e,
            b: _,
            cnt: 1
        }, r = (...a)=>{
            n.cnt++;
            const f = n.a;
            n.a = 0;
            try {
                return t(f, n.b, ...a);
            } finally{
                n.a = f, r._wbg_cb_unref();
            }
        };
        return r._wbg_cb_unref = ()=>{
            --n.cnt === 0 && (c.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, L.unregister(n));
        }, L.register(r, n, n), r;
    }
    function g(e, _, t) {
        if (t === void 0) {
            const u = h.encode(e), p = _(u.length, 1) >>> 0;
            return x().subarray(p, p + u.length).set(u), s = u.length, p;
        }
        let n = e.length, r = _(n, 1) >>> 0;
        const a = x();
        let f = 0;
        for(; f < n; f++){
            const u = e.charCodeAt(f);
            if (u > 127) break;
            a[r + f] = u;
        }
        if (f !== n) {
            f !== 0 && (e = e.slice(f)), r = t(r, n, n = f + e.length * 3, 1) >>> 0;
            const u = x().subarray(r + f, r + n), p = h.encodeInto(e, u);
            f += p.written, r = t(r, n, f, 1) >>> 0;
        }
        return s = f, r;
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
    const En = 2146435072;
    let P = 0;
    function Vn(e, _) {
        return P += _, P >= En && (I = new TextDecoder("utf-8", {
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
    let s = 0, c;
    function Un(e) {
        c = e;
    }
    URL = globalThis.URL;
    const o = await O({
        "./game_of_life_gpu_bg.js": {
            __wbg_gpugameoflife_new: n_,
            __wbg_new_typed_323f37fd55ab048d: ut,
            __wbg_call_a24592a6f349a97e: H,
            __wbg_new_227d7c05414eb861: ot,
            __wbg_stack_3b0d974bbf31e44f: tn,
            __wbg_error_a6fa202b58aa1cd3: ze,
            __wbg_getMappedRange_11ec4cfce4df1e72: He,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: i_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: u_,
            __wbg_offset_164492575e959c94: st,
            __wbg_length_87e0297027dd7802: m_,
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
            __wbg_setPipeline_f2cf83769bb33769: Rt,
            __wbg_setViewport_94128a2b1a708040: Qt,
            __wbg_setPipeline_481f34ae14c49d67: Vt,
            __wbg_drawIndirect_73df189881970a43: Ce,
            __wbg_draw_ce5e8b8ad56571cb: De,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Ze,
            __wbg_setScissorRect_0578b1de90caf434: Mt,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Se,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: Tt,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Te,
            __wbg_setStencilReference_7616273572b1075e: Ft,
            __wbg_drawIndexed_55f6bf3bda0212ad: ve,
            __wbg_setPipeline_723820e1c5cc61e7: Ut,
            __wbg_drawIndirect_a2f7c719957f8ec9: Ge,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: _e,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Ne,
            __wbg_getBindGroupLayout_aba26df848b4322d: $e,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Be,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: Pe,
            __wbg_error_2acb88afe0ad9a3e: Oe,
            __wbg_valueOf_9760e35383abbb01: ln,
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
            __wbg_unmap_4aa38f8c5283cc1d: dn,
            __wbg_submit_60f2469dc00130cc: an,
            __wbg_mapAsync_8d0ffc031e86e9a0: S_,
            __wbg_configure_6e1ccd3ac31b721c: ee,
            __wbg_writeBuffer_b5e6e8f3f93629bc: xn,
            __wbg_writeTexture_57e41dd94bac65c4: hn,
            __wbg_createView_c227b9af7bd5f441: pe,
            __wbg_createBuffer_e3f8b2bd8b492498: fe,
            __wbg_createSampler_cb4137c4e97c7098: we,
            __wbg_createTexture_1a3ebeb1ddd7a035: me,
            __wbg_requestDevice_6130c3ba10d633f9: It,
            __wbg_finish_35be15c58b55a95b: Re,
            __wbg_finish_41491ca602373cde: Me,
            __wbg_createQuerySet_6050df2adcb1f167: se,
            __wbg_createBindGroup_876adbf7e329ce2e: ae,
            __wbg_requestAdapter_e4b32f2647c66726: St,
            __wbg_set_onuncapturederror_729c2e42c36923f4: Jt,
            __wbg_setBindGroup_f4d552dcef65a491: At,
            __wbg_setBindGroup_f930832baeb4279b: Dt,
            __wbg_setBindGroup_8d384b1c5ed329f4: Ct,
            __wbg_setBindGroup_9877b57492cb7e1c: Gt,
            __wbg_createShaderModule_912a19a8ccc2aa1a: le,
            __wbg_usage_ee2982f59567c06f: wn,
            __wbg_size_1dfbf7241f9df1cc: _n,
            __wbg_executeBundles_2905636f81aabf99: Ee,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Qe,
            __wbg_messages_4e98c7e63c5efe7b: _t,
            __wbg_length_3d4ecd04bd8d22f1: l_,
            __wbg_clearBuffer_f24f8de43db597ec: K,
            __wbg_clearBuffer_b08b15b7ee3c9d57: J,
            __wbg_finish_eb06372cc93f8d50: Fe,
            __wbg_finish_ee515f526784acd5: je,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Et,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: Ot,
            __wbg_createCommandEncoder_e617922978f8b4de: be,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: ie,
            __wbg_createRenderPipeline_921034ccba195ffe: de,
            __wbg_setVertexBuffer_54536e0e73bfc91e: jt,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: qt,
            __wbg_createComputePipeline_6794bf24c6c03583: ue,
            __wbg_setBlendConstant_257274277b0e3153: Lt,
            __wbg_createBindGroupLayout_e37f9323c278f93f: oe,
            __wbg_lost_2c34651e3317be8b: B_,
            __wbg_then_6701bb8428537e07: fn,
            __wbg_beginRenderPass_9a7bf53d588737dc: Y,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: X,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: ge,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: ne,
            __wbg_setBindGroup_6149584f04998372: kt,
            __wbg_setBindGroup_1602c955be9b2eaa: vt,
            __wbg_copyBufferToTexture_48aa78a412b2a467: te,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: re,
            __wbg_setIndexBuffer_4219294fa3e2d59b: Wt,
            __wbg_setIndexBuffer_7e208bb69310ed01: zt,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: ce,
            __wbg_setVertexBuffer_c643d7ac0abf4554: $t,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Nt,
            __wbg_lineNum_24517b98f306fcae: y_,
            __wbg_instanceof_Object_7c99480a1cdfb911: s_,
            __wbg_get_8360291721e2339f: __,
            __wbg_push_471a5b068a5295f6: mt,
            __wbg_then_792e0c862b060889: bn,
            __wbg_message_f762db05c1294eca: et,
            __wbg_reason_d7f4ddcad86f8d99: Bt,
            __wbg_message_1b27ea1ad3998a9f: J_,
            __wbg_type_4b0a304ebc25e195: gn,
            __wbg_message_a77e1a9202609622: K_,
            __wbg_label_cdc2b7a875dc5123: w_,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Je,
            __wbg_instanceof_Window_cc64c86c8ef9e02b: g_,
            __wbg_document_7a41071f2f439323: Ie,
            __wbg_navigator_bc077756492232c5: ct,
            __wbg_querySelectorAll_e9e3fbd41310476e: pt,
            __wbg_navigator_353318de944ca7f6: rt,
            __wbg_set_height_24d07d982f176ac6: Zt,
            __wbg_getContext_69ddc504535a2e7b: Xe,
            __wbg_width_3aacf063073c2757: mn,
            __wbg_height_fc2f1def9f6e7730: o_,
            __wbg_set_width_adc925bca9c5351a: en,
            __wbg_get_0cfbe604d86bac03: Ke,
            __wbg_set_height_be9b2b920bd68401: Ht,
            __wbg_getContext_fc146f8ec021d074: Ye,
            __wbg_width_5adcb07d04d08bdf: pn,
            __wbg_height_528848d067cc2221: c_,
            __wbg_set_width_5cda41d4d06a14dd: Kt,
            __wbg_new_682678e2f47e32bc: at,
            __wbg_new_aa8d0fa9762c29bd: ft,
            __wbg_length_9f1775224cf1d815: p_,
            __wbg_new_from_slice_b5ea43e23f6008c0: bt,
            __wbg_new_with_byte_offset_and_length_01848e8d6a3d49ad: it,
            __wbg_set_d8f1efe557b9e7e1: Yt,
            __wbg_buffer_d0f5ea0926a691fd: Z,
            __wbg_prototypesetcall_a6b02eb00b0f4ce2: wt,
            __wbg_then_8e16ee11f05e4827: un,
            __wbg_from_0dbf29f09e7fb200: qe,
            __wbg_isArray_c3109d14ffc06469: d_,
            __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: rn,
            __wbg_static_accessor_SELF_e445c1c7484aecc3: cn,
            __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: nn,
            __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: on,
            __wbg_then_a50dc2689b076063: sn,
            __wbg_resolve_e6c466bc1052f16c: Pt,
            __wbg_parse_1bbc9c053611d0a7: gt,
            __wbg_get_6011fa3a58f61074: e_,
            __wbg_set_022bee52d0b05b19: Xt,
            __wbg_queueMicrotask_5d15a957e6aa920e: xt,
            __wbg_queueMicrotask_f8819e5ffc402f36: ht,
            __wbg___wbindgen_number_get_c7f42aed0525c451: q,
            __wbg___wbindgen_throw_6b64449b9b9ed33c: N,
            __wbg___wbindgen_is_object_63322ec0cd6ea4ef: F,
            __wbg___wbindgen_string_get_7ed5322991caaec5: $,
            __wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: U,
            __wbg___wbindgen_is_function_3baa9db1a987f47d: M,
            __wbg___wbindgen_is_undefined_29a43b4d42920abd: j,
            __wbg___wbindgen_debug_string_ab4b34d23d6778bd: R,
            __wbg__wbg_cb_unref_b46c9b5a9f08ec37: Q,
            __wbindgen_init_externref_table: vn,
            __wbindgen_cast_0000000000000001: yn,
            __wbindgen_cast_0000000000000002: Bn,
            __wbindgen_cast_0000000000000003: Sn,
            __wbindgen_cast_0000000000000004: In,
            __wbindgen_cast_0000000000000005: Tn,
            __wbindgen_cast_0000000000000006: Pn
        }
    }, z), Rn = o.memory, Mn = o.__wbg_gpugameoflife_free, Fn = o.gpugameoflife_flush_and_render, jn = o.gpugameoflife_grid_pitch, qn = o.gpugameoflife_new, $n = o.gpugameoflife_new_offscreen, Nn = o.gpugameoflife_padded_rows, Qn = o.gpugameoflife_render_only, Xn = o.gpugameoflife_resize, Yn = o.gpugameoflife_screen_cols, Zn = o.gpugameoflife_screen_rows, Hn = o.gpugameoflife_set_scroll, Jn = o.gpugameoflife_set_theme_json, Kn = o.gpugameoflife_set_transition, er = o.gpugameoflife_set_zones_json, _r = o.gpugameoflife_tick_and_render, tr = o.gpugameoflife_toggle_cell, nr = o.gpugameoflife_words_per_row, rr = o.wasm_bindgen__convert__closures_____invoke__hf7dda74a67d66216, cr = o.wasm_bindgen__convert__closures_____invoke__h5c8dd837cf00f20a, or = o.wasm_bindgen__convert__closures_____invoke__h898172860a99d122, ar = o.wasm_bindgen__convert__closures_____invoke__h898172860a99d122_2, fr = o.__wbindgen_malloc, br = o.__wbindgen_realloc, ur = o.__wbindgen_exn_store, ir = o.__externref_table_alloc, sr = o.__wbindgen_externrefs, gr = o.__wbindgen_free, dr = o.__wbindgen_destroy_closure, wr = o.__externref_table_dealloc, W = o.__wbindgen_start;
    var lr = Object.freeze({
        __proto__: null,
        __externref_table_alloc: ir,
        __externref_table_dealloc: wr,
        __wbg_gpugameoflife_free: Mn,
        __wbindgen_destroy_closure: dr,
        __wbindgen_exn_store: ur,
        __wbindgen_externrefs: sr,
        __wbindgen_free: gr,
        __wbindgen_malloc: fr,
        __wbindgen_realloc: br,
        __wbindgen_start: W,
        gpugameoflife_flush_and_render: Fn,
        gpugameoflife_grid_pitch: jn,
        gpugameoflife_new: qn,
        gpugameoflife_new_offscreen: $n,
        gpugameoflife_padded_rows: Nn,
        gpugameoflife_render_only: Qn,
        gpugameoflife_resize: Xn,
        gpugameoflife_screen_cols: Yn,
        gpugameoflife_screen_rows: Zn,
        gpugameoflife_set_scroll: Hn,
        gpugameoflife_set_theme_json: Jn,
        gpugameoflife_set_transition: Kn,
        gpugameoflife_set_zones_json: er,
        gpugameoflife_tick_and_render: _r,
        gpugameoflife_toggle_cell: tr,
        gpugameoflife_words_per_row: nr,
        memory: Rn,
        wasm_bindgen__convert__closures_____invoke__h5c8dd837cf00f20a: cr,
        wasm_bindgen__convert__closures_____invoke__h898172860a99d122: or,
        wasm_bindgen__convert__closures_____invoke__h898172860a99d122_2: ar,
        wasm_bindgen__convert__closures_____invoke__hf7dda74a67d66216: rr
    });
    Un(lr);
    W();
})();
export { y as GpuGameOfLife, __tla };
