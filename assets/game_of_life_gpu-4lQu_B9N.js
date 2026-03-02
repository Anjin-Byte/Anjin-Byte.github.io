import { _ as W } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let h;
let __tla = (async ()=>{
    var O = "/assets/game_of_life_gpu_bg-C9SsVOQy.wasm";
    h = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const t = Object.create(h.prototype);
            return t.__wbg_ptr = _, A.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, A.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            c.__wbg_gpugameoflife_free(_, 0);
        }
        static new(_, t) {
            return c.gpugameoflife_new(_, t);
        }
        static new_offscreen(_, t) {
            return c.gpugameoflife_new_offscreen(_, t);
        }
        render_only() {
            c.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, t) {
            c.gpugameoflife_resize(this.__wbg_ptr, _, t);
        }
        set_scroll(_) {
            c.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        tick_and_render() {
            c.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
    };
    Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
    function E(e) {
        return e.Window;
    }
    function z(e) {
        return e.WorkerGlobalScope;
    }
    function V(e, _) {
        const t = v(_), n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function U(e) {
        return typeof e == "function";
    }
    function R(e) {
        const _ = e;
        return typeof _ == "object" && _ !== null;
    }
    function M(e) {
        return e === void 0;
    }
    function F(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = d(n) ? 0 : w(n, c.__wbindgen_malloc, c.__wbindgen_realloc), o = i;
        u().setInt32(e + 4, o, !0), u().setInt32(e + 0, r, !0);
    }
    function q(e, _) {
        throw new Error(g(e, _));
    }
    function j(e) {
        e._wbg_cb_unref();
    }
    function $(e, _) {
        return e.beginComputePass(_);
    }
    function N(e, _) {
        return e.beginRenderPass(_);
    }
    function Q(e) {
        return e.buffer;
    }
    function X() {
        return y(function(e, _, t) {
            return e.call(_, t);
        }, arguments);
    }
    function Y(e, _, t) {
        e.clearBuffer(_, t);
    }
    function Z(e, _, t, n) {
        e.clearBuffer(_, t, n);
    }
    function H(e, _) {
        e.configure(_);
    }
    function J(e, _, t, n, r, o) {
        e.copyBufferToBuffer(_, t, n, r, o);
    }
    function K(e, _, t, n) {
        e.copyBufferToTexture(_, t, n);
    }
    function ee(e, _, t, n) {
        e.copyExternalImageToTexture(_, t, n);
    }
    function _e(e, _, t, n) {
        e.copyTextureToBuffer(_, t, n);
    }
    function te(e, _, t, n) {
        e.copyTextureToTexture(_, t, n);
    }
    function ne(e, _) {
        return e.createBindGroupLayout(_);
    }
    function re(e, _) {
        return e.createBindGroup(_);
    }
    function ce(e, _) {
        return e.createBuffer(_);
    }
    function oe(e, _) {
        return e.createCommandEncoder(_);
    }
    function ae(e, _) {
        return e.createComputePipeline(_);
    }
    function fe(e, _) {
        return e.createPipelineLayout(_);
    }
    function be(e, _) {
        return e.createQuerySet(_);
    }
    function ue(e, _) {
        return e.createRenderBundleEncoder(_);
    }
    function ie(e, _) {
        return e.createRenderPipeline(_);
    }
    function se(e, _) {
        return e.createSampler(_);
    }
    function de(e, _) {
        return e.createShaderModule(_);
    }
    function ge(e, _) {
        return e.createTexture(_);
    }
    function we(e, _) {
        return e.createView(_);
    }
    function le(e) {
        e.destroy();
    }
    function me(e) {
        e.destroy();
    }
    function pe(e) {
        e.destroy();
    }
    function xe(e, _, t) {
        e.dispatchWorkgroupsIndirect(_, t);
    }
    function he(e, _, t, n) {
        e.dispatchWorkgroups(_ >>> 0, t >>> 0, n >>> 0);
    }
    function ye(e) {
        const _ = e.document;
        return d(_) ? 0 : s(_);
    }
    function Be(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Se(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Ie(e, _, t, n, r, o) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, o >>> 0);
    }
    function Te(e, _, t, n, r, o) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, o >>> 0);
    }
    function Pe(e, _, t) {
        e.drawIndirect(_, t);
    }
    function ve(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Ce(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function ke(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Ge(e) {
        e.end();
    }
    function Ae(e) {
        e.end();
    }
    function De(e) {
        return e.error;
    }
    function Le(e, _) {
        let t, n;
        try {
            t = e, n = _, console.error(g(e, _));
        } finally{
            c.__wbindgen_free(t, n, 1);
        }
    }
    function We(e, _) {
        e.executeBundles(_);
    }
    function Oe(e) {
        return e.features;
    }
    function Ee(e) {
        return e.features;
    }
    function ze(e, _) {
        return e.finish(_);
    }
    function Ve(e) {
        return e.finish();
    }
    function Ue(e, _) {
        return e.finish(_);
    }
    function Re(e) {
        return e.finish();
    }
    function Me(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Fe(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function qe(e) {
        return e.getCompilationInfo();
    }
    function je() {
        return y(function(e, _, t) {
            const n = e.getContext(g(_, t));
            return d(n) ? 0 : s(n);
        }, arguments);
    }
    function $e() {
        return y(function(e, _, t) {
            const n = e.getContext(g(_, t));
            return d(n) ? 0 : s(n);
        }, arguments);
    }
    function Ne(e) {
        return e.getCurrentTexture();
    }
    function Qe(e, _, t) {
        return e.getMappedRange(_, t);
    }
    function Xe(e) {
        const _ = e.getPreferredCanvasFormat();
        return (Cn.indexOf(_) + 1 || 96) - 1;
    }
    function Ye(e, _) {
        return e[_ >>> 0];
    }
    function Ze(e, _) {
        const t = e[_ >>> 0];
        return d(t) ? 0 : s(t);
    }
    function He(e) {
        return e.gpu;
    }
    function Je(e) {
        return h.__wrap(e);
    }
    function Ke(e, _, t) {
        return e.has(g(_, t));
    }
    function e_(e) {
        return e.height;
    }
    function __(e) {
        return e.height;
    }
    function t_(e) {
        let _;
        try {
            _ = e instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function n_(e) {
        let _;
        try {
            _ = e instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function r_(e) {
        let _;
        try {
            _ = e instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function c_(e) {
        let _;
        try {
            _ = e instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function o_(e) {
        let _;
        try {
            _ = e instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function a_(e) {
        let _;
        try {
            _ = e instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function f_(e) {
        let _;
        try {
            _ = e instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function b_(e, _) {
        const t = _.label, n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function u_(e) {
        return e.length;
    }
    function i_(e) {
        return e.length;
    }
    function s_(e) {
        return e.length;
    }
    function d_(e) {
        return e.limits;
    }
    function g_(e) {
        return e.limits;
    }
    function w_(e) {
        return e.lineNum;
    }
    function l_(e) {
        return e.lost;
    }
    function m_(e, _, t, n) {
        return e.mapAsync(_ >>> 0, t, n);
    }
    function p_(e) {
        return e.maxBindGroups;
    }
    function x_(e) {
        return e.maxBindingsPerBindGroup;
    }
    function h_(e) {
        return e.maxBufferSize;
    }
    function y_(e) {
        return e.maxColorAttachmentBytesPerSample;
    }
    function B_(e) {
        return e.maxColorAttachments;
    }
    function S_(e) {
        return e.maxComputeInvocationsPerWorkgroup;
    }
    function I_(e) {
        return e.maxComputeWorkgroupSizeX;
    }
    function T_(e) {
        return e.maxComputeWorkgroupSizeY;
    }
    function P_(e) {
        return e.maxComputeWorkgroupSizeZ;
    }
    function v_(e) {
        return e.maxComputeWorkgroupStorageSize;
    }
    function C_(e) {
        return e.maxComputeWorkgroupsPerDimension;
    }
    function k_(e) {
        return e.maxDynamicStorageBuffersPerPipelineLayout;
    }
    function G_(e) {
        return e.maxDynamicUniformBuffersPerPipelineLayout;
    }
    function A_(e) {
        return e.maxInterStageShaderComponents;
    }
    function D_(e) {
        return e.maxSampledTexturesPerShaderStage;
    }
    function L_(e) {
        return e.maxSamplersPerShaderStage;
    }
    function W_(e) {
        return e.maxStorageBufferBindingSize;
    }
    function O_(e) {
        return e.maxStorageBuffersPerShaderStage;
    }
    function E_(e) {
        return e.maxStorageTexturesPerShaderStage;
    }
    function z_(e) {
        return e.maxTextureArrayLayers;
    }
    function V_(e) {
        return e.maxTextureDimension1D;
    }
    function U_(e) {
        return e.maxTextureDimension2D;
    }
    function R_(e) {
        return e.maxTextureDimension3D;
    }
    function M_(e) {
        return e.maxUniformBufferBindingSize;
    }
    function F_(e) {
        return e.maxUniformBuffersPerShaderStage;
    }
    function q_(e) {
        return e.maxVertexAttributes;
    }
    function j_(e) {
        return e.maxVertexBufferArrayStride;
    }
    function $_(e) {
        return e.maxVertexBuffers;
    }
    function N_(e, _) {
        const t = _.message, n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function Q_(e, _) {
        const t = _.message, n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function X_(e, _) {
        const t = _.message, n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function Y_(e) {
        return e.messages;
    }
    function Z_(e) {
        return e.minStorageBufferOffsetAlignment;
    }
    function H_(e) {
        return e.minUniformBufferOffsetAlignment;
    }
    function J_(e) {
        return e.navigator;
    }
    function K_(e) {
        return e.navigator;
    }
    function et() {
        return new Error;
    }
    function _t() {
        return new Object;
    }
    function tt(e, _) {
        return new Uint8Array(k(e, _));
    }
    function nt(e, _) {
        try {
            var t = {
                a: e,
                b: _
            }, n = (o, a)=>{
                const b = t.a;
                t.a = 0;
                try {
                    return In(b, t.b, o, a);
                } finally{
                    t.a = b;
                }
            };
            return new Promise(n);
        } finally{
            t.a = t.b = 0;
        }
    }
    function rt() {
        return new Array;
    }
    function ct(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function ot(e) {
        return e.offset;
    }
    function at(e) {
        return e.popErrorScope();
    }
    function ft(e, _, t) {
        Uint8Array.prototype.set.call(k(e, _), t);
    }
    function bt(e, _) {
        e.pushErrorScope(vn[_]);
    }
    function ut(e, _) {
        return e.push(_);
    }
    function it() {
        return y(function(e, _, t) {
            return e.querySelectorAll(g(_, t));
        }, arguments);
    }
    function st(e) {
        return e.queueMicrotask;
    }
    function dt(e) {
        queueMicrotask(e);
    }
    function gt(e) {
        return e.queue;
    }
    function wt(e) {
        const _ = e.reason;
        return (Pn.indexOf(_) + 1 || 3) - 1;
    }
    function lt(e, _) {
        return e.requestAdapter(_);
    }
    function mt(e, _) {
        return _?.requiredLimits && delete _.requiredLimits.maxInterStageShaderComponents, e.requestDevice(_);
    }
    function pt(e, _, t, n, r, o) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, o >>> 0);
    }
    function xt(e) {
        return Promise.resolve(e);
    }
    function ht(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function yt(e, _, t, n, r, o, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), o, a >>> 0);
    }
    function Bt(e, _, t, n, r, o, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), o, a >>> 0);
    }
    function St(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function It(e, _, t, n, r, o, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), o, a >>> 0);
    }
    function Tt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Pt(e, _) {
        e.setBlendConstant(_);
    }
    function vt(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function Ct(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function kt(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Gt(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function At(e, _) {
        e.setPipeline(_);
    }
    function Dt(e, _) {
        e.setPipeline(_);
    }
    function Lt(e, _) {
        e.setPipeline(_);
    }
    function Wt(e, _, t, n, r) {
        e.setScissorRect(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Ot(e, _) {
        e.setStencilReference(_ >>> 0);
    }
    function Et(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function zt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Vt(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Ut(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Rt(e, _, t, n, r, o, a) {
        e.setViewport(_, t, n, r, o, a);
    }
    function Mt() {
        return y(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
    }
    function Ft(e, _, t) {
        e.set(_, t >>> 0);
    }
    function qt(e, _) {
        e.height = _ >>> 0;
    }
    function jt(e, _) {
        e.height = _ >>> 0;
    }
    function $t(e, _) {
        e.onuncapturederror = _;
    }
    function Nt(e, _) {
        e.width = _ >>> 0;
    }
    function Qt(e, _) {
        e.width = _ >>> 0;
    }
    function Xt(e) {
        return e.size;
    }
    function Yt(e, _) {
        const t = _.stack, n = w(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = i;
        u().setInt32(e + 4, r, !0), u().setInt32(e + 0, n, !0);
    }
    function Zt() {
        const e = typeof global > "u" ? null : global;
        return d(e) ? 0 : s(e);
    }
    function Ht() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return d(e) ? 0 : s(e);
    }
    function Jt() {
        const e = typeof self > "u" ? null : self;
        return d(e) ? 0 : s(e);
    }
    function Kt() {
        const e = typeof window > "u" ? null : window;
        return d(e) ? 0 : s(e);
    }
    function en(e, _) {
        e.submit(_);
    }
    function _n(e, _) {
        return e.then(_);
    }
    function tn(e, _) {
        return e.then(_);
    }
    function nn(e, _, t) {
        return e.then(_, t);
    }
    function rn(e, _, t) {
        return e.then(_, t);
    }
    function cn(e) {
        const _ = e.type;
        return (Tn.indexOf(_) + 1 || 4) - 1;
    }
    function on(e) {
        e.unmap();
    }
    function an(e) {
        return e.usage;
    }
    function fn(e) {
        return e.valueOf();
    }
    function bn(e) {
        return e.width;
    }
    function un(e) {
        return e.width;
    }
    function sn(e, _, t, n, r, o) {
        e.writeBuffer(_, t, n, r, o);
    }
    function dn(e, _, t, n, r) {
        e.writeTexture(_, t, n, r);
    }
    function gn(e, _) {
        return G(e, _, c.wasm_bindgen__closure__destroy__h6a06e28996890e73, yn);
    }
    function wn(e, _) {
        return G(e, _, c.wasm_bindgen__closure__destroy__h6a06e28996890e73, Bn);
    }
    function ln(e, _) {
        return G(e, _, c.wasm_bindgen__closure__destroy__hfcf6415a4c156013, Sn);
    }
    function mn(e) {
        return e;
    }
    function pn(e, _) {
        return k(e, _);
    }
    function xn(e, _) {
        return g(e, _);
    }
    function hn() {
        const e = c.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function yn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed(e, _, t);
    }
    function Bn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed_1(e, _, t);
    }
    function Sn(e, _, t) {
        const n = c.wasm_bindgen__convert__closures_____invoke__h29a19422643663ce(e, _, t);
        if (n[1]) throw Gn(n[0]);
    }
    function In(e, _, t, n) {
        c.wasm_bindgen__convert__closures_____invoke__h50545f502e4e684f(e, _, t, n);
    }
    const Tn = [
        "error",
        "warning",
        "info"
    ], Pn = [
        "unknown",
        "destroyed"
    ], vn = [
        "validation",
        "out-of-memory",
        "internal"
    ], T = [
        "uint16",
        "uint32"
    ], Cn = [
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
    ], A = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>c.__wbg_gpugameoflife_free(e >>> 0, 1));
    function s(e) {
        const _ = c.__externref_table_alloc();
        return c.__wbindgen_externrefs.set(_, e), _;
    }
    const D = typeof FinalizationRegistry > "u" ? {
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
            let o = "[";
            r > 0 && (o += v(e[0]));
            for(let a = 1; a < r; a++)o += ", " + v(e[a]);
            return o += "]", o;
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
        return e = e >>> 0, kn().subarray(e / 4, e / 4 + _);
    }
    function k(e, _) {
        return e = e >>> 0, p().subarray(e / 1, e / 1 + _);
    }
    let l = null;
    function u() {
        return (l === null || l.buffer.detached === !0 || l.buffer.detached === void 0 && l.buffer !== c.memory.buffer) && (l = new DataView(c.memory.buffer)), l;
    }
    function g(e, _) {
        return e = e >>> 0, Dn(e, _);
    }
    let B = null;
    function kn() {
        return (B === null || B.byteLength === 0) && (B = new Uint32Array(c.memory.buffer)), B;
    }
    let S = null;
    function p() {
        return (S === null || S.byteLength === 0) && (S = new Uint8Array(c.memory.buffer)), S;
    }
    function y(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = s(t);
            c.__wbindgen_exn_store(n);
        }
    }
    function d(e) {
        return e == null;
    }
    function G(e, _, t, n) {
        const r = {
            a: e,
            b: _,
            cnt: 1,
            dtor: t
        }, o = (...a)=>{
            r.cnt++;
            const b = r.a;
            r.a = 0;
            try {
                return n(b, r.b, ...a);
            } finally{
                r.a = b, o._wbg_cb_unref();
            }
        };
        return o._wbg_cb_unref = ()=>{
            --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, D.unregister(r));
        }, D.register(o, r, r), o;
    }
    function w(e, _, t) {
        if (t === void 0) {
            const b = x.encode(e), m = _(b.length, 1) >>> 0;
            return p().subarray(m, m + b.length).set(b), i = b.length, m;
        }
        let n = e.length, r = _(n, 1) >>> 0;
        const o = p();
        let a = 0;
        for(; a < n; a++){
            const b = e.charCodeAt(a);
            if (b > 127) break;
            o[r + a] = b;
        }
        if (a !== n) {
            a !== 0 && (e = e.slice(a)), r = t(r, n, n = a + e.length * 3, 1) >>> 0;
            const b = p().subarray(r + a, r + n), m = x.encodeInto(e, b);
            a += m.written, r = t(r, n, a, 1) >>> 0;
        }
        return i = a, r;
    }
    function Gn(e) {
        const _ = c.__wbindgen_externrefs.get(e);
        return c.__externref_table_dealloc(e), _;
    }
    let I = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    I.decode();
    const An = 2146435072;
    let P = 0;
    function Dn(e, _) {
        return P += _, P >= An && (I = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), I.decode(), P = _), I.decode(p().subarray(e, e + _));
    }
    const x = new TextEncoder;
    "encodeInto" in x || (x.encodeInto = function(e, _) {
        const t = x.encode(e);
        return _.set(t), {
            read: e.length,
            written: t.length
        };
    });
    let i = 0, c;
    function Ln(e) {
        c = e;
    }
    URL = globalThis.URL;
    const f = await W({
        "./game_of_life_gpu_bg.js": {
            __wbg_gpugameoflife_new: Je,
            __wbg_new_typed_aaaeaf29cf802876: nt,
            __wbg_call_2d781c1f4d5c0ef8: X,
            __wbg_new_227d7c05414eb861: et,
            __wbg_stack_3b0d974bbf31e44f: Yt,
            __wbg_error_a6fa202b58aa1cd3: Le,
            __wbg_getMappedRange_11ec4cfce4df1e72: Qe,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: o_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: c_,
            __wbg_offset_164492575e959c94: ot,
            __wbg_length_87e0297027dd7802: u_,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: r_,
            __wbg_limits_5b3783fcc0d36428: d_,
            __wbg_limits_becc24c879d87717: g_,
            __wbg_destroy_50767c0458f7c8d1: le,
            __wbg_destroy_80182ff6e496228e: me,
            __wbg_features_30a76d141781ad80: Oe,
            __wbg_end_54134488dbc5b7a9: Ge,
            __wbg_destroy_a2c0702c5d1269b5: pe,
            __wbg_features_fdbd3daed26aa468: Ee,
            __wbg_end_57a2746c247f499a: Ae,
            __wbg_draw_57caf8f0bc1ea050: Ce,
            __wbg_popErrorScope_2869a89dd4626f0c: at,
            __wbg_pushErrorScope_72e651b0f8f64c0e: bt,
            __wbg_drawIndexed_9c9719597507e735: Te,
            __wbg_setPipeline_f2cf83769bb33769: Lt,
            __wbg_setViewport_94128a2b1a708040: Rt,
            __wbg_setPipeline_481f34ae14c49d67: At,
            __wbg_drawIndirect_73df189881970a43: Pe,
            __wbg_draw_ce5e8b8ad56571cb: ke,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Ne,
            __wbg_setScissorRect_0578b1de90caf434: Wt,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: he,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: pt,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Be,
            __wbg_setStencilReference_7616273572b1075e: Ot,
            __wbg_drawIndexed_55f6bf3bda0212ad: Ie,
            __wbg_setPipeline_723820e1c5cc61e7: Dt,
            __wbg_drawIndirect_a2f7c719957f8ec9: ve,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: J,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Fe,
            __wbg_getBindGroupLayout_aba26df848b4322d: Me,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: xe,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: Se,
            __wbg_error_2acb88afe0ad9a3e: De,
            __wbg_valueOf_5c6da6c9a85f34dc: fn,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: n_,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: V_,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: U_,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: R_,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: z_,
            __wbg_maxBindGroups_5d3409c14d2756b5: p_,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: x_,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: G_,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: k_,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: D_,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: L_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: O_,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: E_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: F_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: M_,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: W_,
            __wbg_maxVertexBuffers_e5cf174a3497d472: $_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: h_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: q_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: j_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: H_,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: Z_,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: A_,
            __wbg_maxColorAttachments_378f5fb1c453321d: B_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: y_,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: v_,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: S_,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: I_,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: T_,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: P_,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: C_,
            __wbg_has_2184fc4b845f2b5f: Ke,
            __wbg_queue_6b07ccdd49a6ba90: gt,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: t_,
            __wbg_Window_06e90eea4c7df280: E,
            __wbg_gpu_d9721d200584e919: He,
            __wbg_WorkerGlobalScope_defda269b75e179a: z,
            __wbg_unmap_4aa38f8c5283cc1d: on,
            __wbg_submit_60f2469dc00130cc: en,
            __wbg_mapAsync_8d0ffc031e86e9a0: m_,
            __wbg_configure_6e1ccd3ac31b721c: H,
            __wbg_writeBuffer_b5e6e8f3f93629bc: sn,
            __wbg_writeTexture_57e41dd94bac65c4: dn,
            __wbg_createView_c227b9af7bd5f441: we,
            __wbg_createBuffer_e3f8b2bd8b492498: ce,
            __wbg_createSampler_cb4137c4e97c7098: se,
            __wbg_createTexture_1a3ebeb1ddd7a035: ge,
            __wbg_requestDevice_6130c3ba10d633f9: mt,
            __wbg_finish_35be15c58b55a95b: ze,
            __wbg_finish_41491ca602373cde: Ve,
            __wbg_createQuerySet_6050df2adcb1f167: be,
            __wbg_createBindGroup_876adbf7e329ce2e: re,
            __wbg_requestAdapter_e4b32f2647c66726: lt,
            __wbg_set_onuncapturederror_729c2e42c36923f4: $t,
            __wbg_setBindGroup_f4d552dcef65a491: It,
            __wbg_setBindGroup_f930832baeb4279b: Tt,
            __wbg_setBindGroup_8d384b1c5ed329f4: Bt,
            __wbg_setBindGroup_9877b57492cb7e1c: St,
            __wbg_createShaderModule_912a19a8ccc2aa1a: de,
            __wbg_usage_ee2982f59567c06f: an,
            __wbg_size_1dfbf7241f9df1cc: Xt,
            __wbg_executeBundles_2905636f81aabf99: We,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: qe,
            __wbg_messages_4e98c7e63c5efe7b: Y_,
            __wbg_length_b3416cf66a5452c8: i_,
            __wbg_clearBuffer_f24f8de43db597ec: Z,
            __wbg_clearBuffer_b08b15b7ee3c9d57: Y,
            __wbg_finish_eb06372cc93f8d50: Ue,
            __wbg_finish_ee515f526784acd5: Re,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Gt,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: Ct,
            __wbg_createCommandEncoder_e617922978f8b4de: oe,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: fe,
            __wbg_createRenderPipeline_921034ccba195ffe: ie,
            __wbg_setVertexBuffer_54536e0e73bfc91e: Et,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: zt,
            __wbg_createComputePipeline_6794bf24c6c03583: ae,
            __wbg_setBlendConstant_257274277b0e3153: Pt,
            __wbg_createBindGroupLayout_e37f9323c278f93f: ne,
            __wbg_lost_2c34651e3317be8b: l_,
            __wbg_then_1d7a5273811a5cea: tn,
            __wbg_beginRenderPass_9a7bf53d588737dc: N,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: $,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: ue,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: ee,
            __wbg_setBindGroup_6149584f04998372: yt,
            __wbg_setBindGroup_1602c955be9b2eaa: ht,
            __wbg_copyBufferToTexture_48aa78a412b2a467: K,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: _e,
            __wbg_setIndexBuffer_4219294fa3e2d59b: vt,
            __wbg_setIndexBuffer_7e208bb69310ed01: kt,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: te,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Vt,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Ut,
            __wbg_lineNum_24517b98f306fcae: w_,
            __wbg_instanceof_Object_be1962063fcc0c9f: a_,
            __wbg_get_a8ee5c45dabc1b3b: Ye,
            __wbg_push_e87b0e732085a946: ut,
            __wbg_new_typed_bccac67128ed885a: rt,
            __wbg_then_9e335f6dd892bc11: nn,
            __wbg_message_f762db05c1294eca: X_,
            __wbg_label_cdc2b7a875dc5123: b_,
            __wbg_reason_d7f4ddcad86f8d99: wt,
            __wbg_message_1b27ea1ad3998a9f: N_,
            __wbg_type_4b0a304ebc25e195: cn,
            __wbg_message_a77e1a9202609622: Q_,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Xe,
            __wbg_then_098abe61755d12f6: _n,
            __wbg_queueMicrotask_a082d78ce798393e: dt,
            __wbg_queueMicrotask_0c399741342fb10f: st,
            __wbg_resolve_ae8d83246e5bcc12: xt,
            __wbg_instanceof_Window_23e677d2c6843922: f_,
            __wbg_document_c0320cd4183c6d9b: ye,
            __wbg_navigator_9cebf56f28aa719b: K_,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: it,
            __wbg_navigator_583ffd4fc14c0f7a: J_,
            __wbg_get_c7546417fb0bec10: Ze,
            __wbg_set_height_b6548a01bdcb689a: jt,
            __wbg_getContext_f04bf8f22dcb2d53: $e,
            __wbg_width_4d6fc7fecd877217: bn,
            __wbg_height_6568c4427c3b889d: e_,
            __wbg_set_width_c0fcaa2da53cd540: Qt,
            __wbg_set_height_98a1a397672657e2: qt,
            __wbg_getContext_a9236f98f1f7fe7c: je,
            __wbg_width_71d9d44b5e14c4b7: un,
            __wbg_height_fb8c4164276f25fd: __,
            __wbg_set_width_576343a4a7f2cf28: Nt,
            __wbg_new_ab79df5bd7c26067: _t,
            __wbg_length_ea16607d7b61445b: s_,
            __wbg_new_from_slice_22da9388ac046e50: tt,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: ct,
            __wbg_set_e80615d7a9a43981: Ft,
            __wbg_buffer_60b8043cd926067d: Q,
            __wbg_prototypesetcall_d62e5099504357e6: ft,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: Ht,
            __wbg_static_accessor_SELF_f207c857566db248: Jt,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: Zt,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: Kt,
            __wbg_then_bc59d1943397ca4e: rn,
            __wbg_set_7eaa4f96924fd6b3: Mt,
            __wbg___wbindgen_throw_6ddd609b62940d55: q,
            __wbg___wbindgen_is_object_781bc9f159099513: R,
            __wbg___wbindgen_string_get_395e606bd0ee4427: F,
            __wbg___wbindgen_is_function_3c846841762788c1: U,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: M,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: V,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: j,
            __wbindgen_init_externref_table: hn,
            __wbindgen_cast_0000000000000001: gn,
            __wbindgen_cast_0000000000000002: wn,
            __wbindgen_cast_0000000000000003: ln,
            __wbindgen_cast_0000000000000004: mn,
            __wbindgen_cast_0000000000000005: pn,
            __wbindgen_cast_0000000000000006: xn
        }
    }, O), Wn = f.memory, On = f.__wbg_gpugameoflife_free, En = f.gpugameoflife_new, zn = f.gpugameoflife_new_offscreen, Vn = f.gpugameoflife_render_only, Un = f.gpugameoflife_resize, Rn = f.gpugameoflife_set_scroll, Mn = f.gpugameoflife_tick_and_render, Fn = f.wasm_bindgen__closure__destroy__h6a06e28996890e73, qn = f.wasm_bindgen__closure__destroy__hfcf6415a4c156013, jn = f.wasm_bindgen__convert__closures_____invoke__h29a19422643663ce, $n = f.wasm_bindgen__convert__closures_____invoke__h50545f502e4e684f, Nn = f.wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed, Qn = f.wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed_1, Xn = f.__wbindgen_malloc, Yn = f.__wbindgen_realloc, Zn = f.__wbindgen_exn_store, Hn = f.__externref_table_alloc, Jn = f.__wbindgen_externrefs, Kn = f.__wbindgen_free, er = f.__externref_table_dealloc, L = f.__wbindgen_start;
    var _r = Object.freeze({
        __proto__: null,
        __externref_table_alloc: Hn,
        __externref_table_dealloc: er,
        __wbg_gpugameoflife_free: On,
        __wbindgen_exn_store: Zn,
        __wbindgen_externrefs: Jn,
        __wbindgen_free: Kn,
        __wbindgen_malloc: Xn,
        __wbindgen_realloc: Yn,
        __wbindgen_start: L,
        gpugameoflife_new: En,
        gpugameoflife_new_offscreen: zn,
        gpugameoflife_render_only: Vn,
        gpugameoflife_resize: Un,
        gpugameoflife_set_scroll: Rn,
        gpugameoflife_tick_and_render: Mn,
        memory: Wn,
        wasm_bindgen__closure__destroy__h6a06e28996890e73: Fn,
        wasm_bindgen__closure__destroy__hfcf6415a4c156013: qn,
        wasm_bindgen__convert__closures_____invoke__h29a19422643663ce: jn,
        wasm_bindgen__convert__closures_____invoke__h50545f502e4e684f: $n,
        wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed: Nn,
        wasm_bindgen__convert__closures_____invoke__h7f92db7c987a73ed_1: Qn
    });
    Ln(_r);
    L();
})();
export { h as GpuGameOfLife, __tla };
