import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let B;
let __tla = (async ()=>{
    var E = "/assets/game_of_life_gpu_bg-BSDdrcAF.wasm";
    B = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const t = Object.create(B.prototype);
            return t.__wbg_ptr = _, z.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, z.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            c.__wbg_gpugameoflife_free(_, 0);
        }
        add_hires_region(_, t, n, r, f, a, i, l, W) {
            c.gpugameoflife_add_hires_region(this.__wbg_ptr, _, t, n, r, f, a, i, l, W);
        }
        clear_frozen_cells() {
            c.gpugameoflife_clear_frozen_cells(this.__wbg_ptr);
        }
        clear_hires_frozen_cells(_) {
            c.gpugameoflife_clear_hires_frozen_cells(this.__wbg_ptr, _);
        }
        clear_hires_regions() {
            c.gpugameoflife_clear_hires_regions(this.__wbg_ptr);
        }
        clear_text_glyphs() {
            c.gpugameoflife_clear_text_glyphs(this.__wbg_ptr);
        }
        flush_and_render() {
            c.gpugameoflife_flush_and_render(this.__wbg_ptr);
        }
        grid_pitch() {
            return c.gpugameoflife_grid_pitch(this.__wbg_ptr);
        }
        hires_tick_and_render() {
            c.gpugameoflife_hires_tick_and_render(this.__wbg_ptr);
        }
        max_hires_tick_multiplier() {
            return c.gpugameoflife_max_hires_tick_multiplier(this.__wbg_ptr) >>> 0;
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
        remove_hires_region(_) {
            c.gpugameoflife_remove_hires_region(this.__wbg_ptr, _);
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
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_decals_json(this.__wbg_ptr, t, n);
            if (r[1]) throw m(r[0]);
        }
        set_frozen_cells(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_frozen_cells(this.__wbg_ptr, t, n);
            if (r[1]) throw m(r[0]);
        }
        set_hires_frozen_cells(_, t) {
            const n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s, f = c.gpugameoflife_set_hires_frozen_cells(this.__wbg_ptr, _, n, r);
            if (f[1]) throw m(f[0]);
        }
        set_hires_paused(_, t) {
            c.gpugameoflife_set_hires_paused(this.__wbg_ptr, _, t);
        }
        set_hires_tick_multiplier(_, t) {
            c.gpugameoflife_set_hires_tick_multiplier(this.__wbg_ptr, _, t);
        }
        set_scroll(_) {
            c.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_text_glyphs(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_text_glyphs(this.__wbg_ptr, t, n);
            if (r[1]) throw m(r[0]);
        }
        set_transition(_) {
            c.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            const t = g(_, c.__wbindgen_malloc, c.__wbindgen_realloc), n = s, r = c.gpugameoflife_set_zones_json(this.__wbg_ptr, t, n);
            if (r[1]) throw m(r[0]);
        }
        tick_and_render() {
            c.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        toggle_cell(_, t) {
            c.gpugameoflife_toggle_cell(this.__wbg_ptr, _, t);
        }
        update_hires_flags(_, t, n, r) {
            c.gpugameoflife_update_hires_flags(this.__wbg_ptr, _, t, n, r);
        }
        upload_text_atlas(_, t, n) {
            const r = Un(_, c.__wbindgen_malloc), f = s, a = c.gpugameoflife_upload_text_atlas(this.__wbg_ptr, r, f, t, n);
            if (a[1]) throw m(a[0]);
        }
        words_per_row() {
            return c.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (B.prototype[Symbol.dispose] = B.prototype.free);
    function V(e) {
        return e.Window;
    }
    function U(e) {
        return e.WorkerGlobalScope;
    }
    function R(e) {
        const _ = e, t = typeof _ == "boolean" ? _ : void 0;
        return u(t) ? 16777215 : t ? 1 : 0;
    }
    function M(e, _) {
        const t = P(_), n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function F(e) {
        return typeof e == "function";
    }
    function j(e) {
        const _ = e;
        return typeof _ == "object" && _ !== null;
    }
    function q(e) {
        return e === void 0;
    }
    function $(e, _) {
        const t = _, n = typeof t == "number" ? t : void 0;
        b().setFloat64(e + 8, u(n) ? 0 : n, !0), b().setInt32(e + 0, !u(n), !0);
    }
    function N(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = u(n) ? 0 : g(n, c.__wbindgen_malloc, c.__wbindgen_realloc), f = s;
        b().setInt32(e + 4, f, !0), b().setInt32(e + 0, r, !0);
    }
    function Q(e, _) {
        throw new Error(w(e, _));
    }
    function X(e) {
        e._wbg_cb_unref();
    }
    function Y(e, _) {
        return e.beginComputePass(_);
    }
    function Z(e, _) {
        return e.beginRenderPass(_);
    }
    function H(e) {
        return e.buffer;
    }
    function J() {
        return p(function(e, _, t) {
            return e.call(_, t);
        }, arguments);
    }
    function K(e, _, t) {
        e.clearBuffer(_, t);
    }
    function ee(e, _, t, n) {
        e.clearBuffer(_, t, n);
    }
    function _e(e, _) {
        e.configure(_);
    }
    function te(e, _, t, n, r, f) {
        e.copyBufferToBuffer(_, t, n, r, f);
    }
    function ne(e, _, t, n) {
        e.copyBufferToTexture(_, t, n);
    }
    function re(e, _, t, n) {
        e.copyExternalImageToTexture(_, t, n);
    }
    function ce(e, _, t, n) {
        e.copyTextureToBuffer(_, t, n);
    }
    function oe(e, _, t, n) {
        e.copyTextureToTexture(_, t, n);
    }
    function fe(e, _) {
        return e.createBindGroupLayout(_);
    }
    function ae(e, _) {
        return e.createBindGroup(_);
    }
    function ie(e, _) {
        return e.createBuffer(_);
    }
    function se(e, _) {
        return e.createCommandEncoder(_);
    }
    function be(e, _) {
        return e.createComputePipeline(_);
    }
    function ge(e, _) {
        return e.createPipelineLayout(_);
    }
    function ue(e, _) {
        return e.createQuerySet(_);
    }
    function de(e, _) {
        return e.createRenderBundleEncoder(_);
    }
    function we(e, _) {
        return e.createRenderPipeline(_);
    }
    function le(e, _) {
        return e.createSampler(_);
    }
    function me(e, _) {
        return e.createShaderModule(_);
    }
    function pe(e, _) {
        return e.createTexture(_);
    }
    function he(e, _) {
        return e.createView(_);
    }
    function xe(e) {
        e.destroy();
    }
    function ye(e) {
        e.destroy();
    }
    function Be(e) {
        e.destroy();
    }
    function Se(e, _, t) {
        e.dispatchWorkgroupsIndirect(_, t);
    }
    function ke(e, _, t, n) {
        e.dispatchWorkgroups(_ >>> 0, t >>> 0, n >>> 0);
    }
    function Ie(e) {
        const _ = e.document;
        return u(_) ? 0 : d(_);
    }
    function Te(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function ve(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Pe(e, _, t, n, r, f) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, f >>> 0);
    }
    function Ce(e, _, t, n, r, f) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, f >>> 0);
    }
    function Ge(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Ae(e, _, t) {
        e.drawIndirect(_, t);
    }
    function ze(e, _, t, n, r) {
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
    function Ee(e, _) {
        let t, n;
        try {
            t = e, n = _, console.error(w(e, _));
        } finally{
            c.__wbindgen_free(t, n, 1);
        }
    }
    function Ve(e, _) {
        e.executeBundles(_);
    }
    function Ue(e) {
        return e.features;
    }
    function Re(e) {
        return e.features;
    }
    function Me(e, _) {
        return e.finish(_);
    }
    function Fe(e) {
        return e.finish();
    }
    function je(e, _) {
        return e.finish(_);
    }
    function qe(e) {
        return e.finish();
    }
    function $e(e) {
        return Array.from(e);
    }
    function Ne(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Qe(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Xe(e) {
        return e.getCompilationInfo();
    }
    function Ye() {
        return p(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return u(n) ? 0 : d(n);
        }, arguments);
    }
    function Ze() {
        return p(function(e, _, t) {
            const n = e.getContext(w(_, t));
            return u(n) ? 0 : d(n);
        }, arguments);
    }
    function He(e) {
        return e.getCurrentTexture();
    }
    function Je(e, _, t) {
        return e.getMappedRange(_, t);
    }
    function Ke(e) {
        const _ = e.getPreferredCanvasFormat();
        return (En.indexOf(_) + 1 || 96) - 1;
    }
    function e_() {
        return p(function(e, _) {
            return Reflect.get(e, _);
        }, arguments);
    }
    function __(e, _) {
        return e[_ >>> 0];
    }
    function t_(e, _) {
        const t = e[_ >>> 0];
        return u(t) ? 0 : d(t);
    }
    function n_(e) {
        return e.gpu;
    }
    function r_(e) {
        return B.__wrap(e);
    }
    function c_(e, _, t) {
        return e.has(w(_, t));
    }
    function o_(e) {
        return e.height;
    }
    function f_(e) {
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
    function i_(e) {
        let _;
        try {
            _ = e instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function s_(e) {
        let _;
        try {
            _ = e instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function b_(e) {
        let _;
        try {
            _ = e instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function g_(e) {
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
    function d_(e) {
        let _;
        try {
            _ = e instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function w_(e) {
        return Array.isArray(e);
    }
    function l_(e, _) {
        const t = _.label, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function m_(e) {
        return e.length;
    }
    function p_(e) {
        return e.length;
    }
    function h_(e) {
        return e.length;
    }
    function x_(e) {
        return e.limits;
    }
    function y_(e) {
        return e.limits;
    }
    function B_(e) {
        return e.lineNum;
    }
    function S_(e) {
        return e.lost;
    }
    function k_(e, _, t, n) {
        return e.mapAsync(_ >>> 0, t, n);
    }
    function I_(e) {
        return e.maxBindGroups;
    }
    function T_(e) {
        return e.maxBindingsPerBindGroup;
    }
    function v_(e) {
        return e.maxBufferSize;
    }
    function P_(e) {
        return e.maxColorAttachmentBytesPerSample;
    }
    function C_(e) {
        return e.maxColorAttachments;
    }
    function G_(e) {
        return e.maxComputeInvocationsPerWorkgroup;
    }
    function A_(e) {
        return e.maxComputeWorkgroupSizeX;
    }
    function z_(e) {
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
    function E_(e) {
        return e.maxDynamicUniformBuffersPerPipelineLayout;
    }
    function V_(e) {
        return e.maxInterStageShaderComponents;
    }
    function U_(e) {
        return e.maxSampledTexturesPerShaderStage;
    }
    function R_(e) {
        return e.maxSamplersPerShaderStage;
    }
    function M_(e) {
        return e.maxStorageBufferBindingSize;
    }
    function F_(e) {
        return e.maxStorageBuffersPerShaderStage;
    }
    function j_(e) {
        return e.maxStorageTexturesPerShaderStage;
    }
    function q_(e) {
        return e.maxTextureArrayLayers;
    }
    function $_(e) {
        return e.maxTextureDimension1D;
    }
    function N_(e) {
        return e.maxTextureDimension2D;
    }
    function Q_(e) {
        return e.maxTextureDimension3D;
    }
    function X_(e) {
        return e.maxUniformBufferBindingSize;
    }
    function Y_(e) {
        return e.maxUniformBuffersPerShaderStage;
    }
    function Z_(e) {
        return e.maxVertexAttributes;
    }
    function H_(e) {
        return e.maxVertexBufferArrayStride;
    }
    function J_(e) {
        return e.maxVertexBuffers;
    }
    function K_(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function et(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function _t(e, _) {
        const t = _.message, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function tt(e) {
        return e.messages;
    }
    function nt(e) {
        return e.minStorageBufferOffsetAlignment;
    }
    function rt(e) {
        return e.minUniformBufferOffsetAlignment;
    }
    function ct(e) {
        return e.navigator;
    }
    function ot(e) {
        return e.navigator;
    }
    function ft() {
        return new Error;
    }
    function at() {
        return new Object;
    }
    function it(e, _) {
        return new Uint8Array(G(e, _));
    }
    function st(e, _) {
        try {
            var t = {
                a: e,
                b: _
            }, n = (f, a)=>{
                const i = t.a;
                t.a = 0;
                try {
                    return Dn(i, t.b, f, a);
                } finally{
                    t.a = i;
                }
            };
            return new Promise(n);
        } finally{
            t.a = t.b = 0;
        }
    }
    function bt() {
        return new Array;
    }
    function gt(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function ut(e) {
        return e.offset;
    }
    function dt() {
        return p(function(e, _) {
            return JSON.parse(w(e, _));
        }, arguments);
    }
    function wt(e) {
        return e.popErrorScope();
    }
    function lt(e, _, t) {
        Uint8Array.prototype.set.call(G(e, _), t);
    }
    function mt(e, _) {
        e.pushErrorScope(On[_]);
    }
    function pt(e, _) {
        return e.push(_);
    }
    function ht() {
        return p(function(e, _, t) {
            return e.querySelectorAll(w(_, t));
        }, arguments);
    }
    function xt(e) {
        return e.queueMicrotask;
    }
    function yt(e) {
        queueMicrotask(e);
    }
    function Bt(e) {
        return e.queue;
    }
    function St() {
        return Math.random();
    }
    function kt(e) {
        const _ = e.reason;
        return (Wn.indexOf(_) + 1 || 3) - 1;
    }
    function It(e, _) {
        return e.requestAdapter(_);
    }
    function Tt(e, _) {
        return _?.requiredLimits && delete _.requiredLimits.maxInterStageShaderComponents, e.requestDevice(_);
    }
    function vt(e, _, t, n, r, f) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, f >>> 0);
    }
    function Pt(e) {
        return Promise.resolve(e);
    }
    function Ct(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Gt(e, _, t, n, r, f, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), f, a >>> 0);
    }
    function At(e, _, t, n, r, f, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), f, a >>> 0);
    }
    function zt(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function Dt(e, _, t, n, r, f, a) {
        e.setBindGroup(_ >>> 0, t, C(n, r), f, a >>> 0);
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
    function Et(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Vt(e, _, t, n) {
        e.setIndexBuffer(_, T[t], n);
    }
    function Ut(e, _, t, n, r) {
        e.setIndexBuffer(_, T[t], n, r);
    }
    function Rt(e, _) {
        e.setPipeline(_);
    }
    function Mt(e, _) {
        e.setPipeline(_);
    }
    function Ft(e, _) {
        e.setPipeline(_);
    }
    function jt(e, _, t, n, r) {
        e.setScissorRect(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function qt(e, _) {
        e.setStencilReference(_ >>> 0);
    }
    function $t(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Nt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Qt(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Xt(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Yt(e, _, t, n, r, f, a) {
        e.setViewport(_, t, n, r, f, a);
    }
    function Zt() {
        return p(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
    }
    function Ht(e, _, t) {
        e.set(_, t >>> 0);
    }
    function Jt(e, _) {
        e.height = _ >>> 0;
    }
    function Kt(e, _) {
        e.height = _ >>> 0;
    }
    function en(e, _) {
        e.onuncapturederror = _;
    }
    function _n(e, _) {
        e.width = _ >>> 0;
    }
    function tn(e, _) {
        e.width = _ >>> 0;
    }
    function nn(e) {
        return e.size;
    }
    function rn(e, _) {
        const t = _.stack, n = g(t, c.__wbindgen_malloc, c.__wbindgen_realloc), r = s;
        b().setInt32(e + 4, r, !0), b().setInt32(e + 0, n, !0);
    }
    function cn() {
        const e = typeof global > "u" ? null : global;
        return u(e) ? 0 : d(e);
    }
    function on() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return u(e) ? 0 : d(e);
    }
    function fn() {
        const e = typeof self > "u" ? null : self;
        return u(e) ? 0 : d(e);
    }
    function an() {
        const e = typeof window > "u" ? null : window;
        return u(e) ? 0 : d(e);
    }
    function sn(e, _) {
        e.submit(_);
    }
    function bn(e, _) {
        return e.then(_);
    }
    function gn(e, _) {
        return e.then(_);
    }
    function un(e, _, t) {
        return e.then(_, t);
    }
    function dn(e, _, t) {
        return e.then(_, t);
    }
    function wn(e) {
        const _ = e.type;
        return (Ln.indexOf(_) + 1 || 4) - 1;
    }
    function ln(e) {
        e.unmap();
    }
    function mn(e) {
        return e.usage;
    }
    function pn(e) {
        return e.valueOf();
    }
    function hn(e) {
        return e.width;
    }
    function xn(e) {
        return e.width;
    }
    function yn(e, _, t, n, r, f) {
        e.writeBuffer(_, t, n, r, f);
    }
    function Bn(e, _, t, n, r) {
        e.writeTexture(_, t, n, r);
    }
    function Sn(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h38919d594d1637ba, Gn);
    }
    function kn(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h38919d594d1637ba, An);
    }
    function In(e, _) {
        return A(e, _, c.wasm_bindgen__closure__destroy__h03eaf4e806a12d61, zn);
    }
    function Tn(e) {
        return e;
    }
    function vn(e, _) {
        return G(e, _);
    }
    function Pn(e, _) {
        return w(e, _);
    }
    function Cn() {
        const e = c.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function Gn(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h552809390f1f128d(e, _, t);
    }
    function An(e, _, t) {
        c.wasm_bindgen__convert__closures_____invoke__h552809390f1f128d_1(e, _, t);
    }
    function zn(e, _, t) {
        const n = c.wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff(e, _, t);
        if (n[1]) throw m(n[0]);
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
    ], En = [
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
    ], z = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>c.__wbg_gpugameoflife_free(e >>> 0, 1));
    function d(e) {
        const _ = c.__externref_table_alloc();
        return c.__wbindgen_externrefs.set(_, e), _;
    }
    const D = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function P(e) {
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
            let f = "[";
            r > 0 && (f += P(e[0]));
            for(let a = 1; a < r; a++)f += ", " + P(e[a]);
            return f += "]", f;
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
        return e = e >>> 0, Vn().subarray(e / 4, e / 4 + _);
    }
    function G(e, _) {
        return e = e >>> 0, x().subarray(e / 1, e / 1 + _);
    }
    let h = null;
    function b() {
        return (h === null || h.buffer.detached === !0 || h.buffer.detached === void 0 && h.buffer !== c.memory.buffer) && (h = new DataView(c.memory.buffer)), h;
    }
    function w(e, _) {
        return e = e >>> 0, Mn(e, _);
    }
    let S = null;
    function Vn() {
        return (S === null || S.byteLength === 0) && (S = new Uint32Array(c.memory.buffer)), S;
    }
    let k = null;
    function x() {
        return (k === null || k.byteLength === 0) && (k = new Uint8Array(c.memory.buffer)), k;
    }
    function p(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = d(t);
            c.__wbindgen_exn_store(n);
        }
    }
    function u(e) {
        return e == null;
    }
    function A(e, _, t, n) {
        const r = {
            a: e,
            b: _,
            cnt: 1,
            dtor: t
        }, f = (...a)=>{
            r.cnt++;
            const i = r.a;
            r.a = 0;
            try {
                return n(i, r.b, ...a);
            } finally{
                r.a = i, f._wbg_cb_unref();
            }
        };
        return f._wbg_cb_unref = ()=>{
            --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, D.unregister(r));
        }, D.register(f, r, r), f;
    }
    function Un(e, _) {
        const t = _(e.length * 1, 1) >>> 0;
        return x().set(e, t / 1), s = e.length, t;
    }
    function g(e, _, t) {
        if (t === void 0) {
            const i = y.encode(e), l = _(i.length, 1) >>> 0;
            return x().subarray(l, l + i.length).set(i), s = i.length, l;
        }
        let n = e.length, r = _(n, 1) >>> 0;
        const f = x();
        let a = 0;
        for(; a < n; a++){
            const i = e.charCodeAt(a);
            if (i > 127) break;
            f[r + a] = i;
        }
        if (a !== n) {
            a !== 0 && (e = e.slice(a)), r = t(r, n, n = a + e.length * 3, 1) >>> 0;
            const i = x().subarray(r + a, r + n), l = y.encodeInto(e, i);
            a += l.written, r = t(r, n, a, 1) >>> 0;
        }
        return s = a, r;
    }
    function m(e) {
        const _ = c.__wbindgen_externrefs.get(e);
        return c.__externref_table_dealloc(e), _;
    }
    let I = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    I.decode();
    const Rn = 2146435072;
    let v = 0;
    function Mn(e, _) {
        return v += _, v >= Rn && (I = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), I.decode(), v = _), I.decode(x().subarray(e, e + _));
    }
    const y = new TextEncoder;
    "encodeInto" in y || (y.encodeInto = function(e, _) {
        const t = y.encode(e);
        return _.set(t), {
            read: e.length,
            written: t.length
        };
    });
    let s = 0, c;
    function Fn(e) {
        c = e;
    }
    URL = globalThis.URL;
    const o = await O({
        "./game_of_life_gpu_bg.js": {
            __wbg_gpugameoflife_new: r_,
            __wbg_new_typed_aaaeaf29cf802876: st,
            __wbg_call_2d781c1f4d5c0ef8: J,
            __wbg_new_227d7c05414eb861: ft,
            __wbg_stack_3b0d974bbf31e44f: rn,
            __wbg_error_a6fa202b58aa1cd3: Ee,
            __wbg_getMappedRange_11ec4cfce4df1e72: Je,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: g_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: b_,
            __wbg_offset_164492575e959c94: ut,
            __wbg_length_87e0297027dd7802: m_,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: s_,
            __wbg_limits_5b3783fcc0d36428: x_,
            __wbg_limits_becc24c879d87717: y_,
            __wbg_destroy_50767c0458f7c8d1: xe,
            __wbg_destroy_80182ff6e496228e: ye,
            __wbg_features_30a76d141781ad80: Ue,
            __wbg_end_54134488dbc5b7a9: Le,
            __wbg_destroy_a2c0702c5d1269b5: Be,
            __wbg_features_fdbd3daed26aa468: Re,
            __wbg_end_57a2746c247f499a: We,
            __wbg_draw_57caf8f0bc1ea050: ze,
            __wbg_popErrorScope_2869a89dd4626f0c: wt,
            __wbg_pushErrorScope_72e651b0f8f64c0e: mt,
            __wbg_drawIndexed_9c9719597507e735: Ce,
            __wbg_setPipeline_f2cf83769bb33769: Ft,
            __wbg_setViewport_94128a2b1a708040: Yt,
            __wbg_setPipeline_481f34ae14c49d67: Rt,
            __wbg_drawIndirect_73df189881970a43: Ge,
            __wbg_draw_ce5e8b8ad56571cb: De,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: He,
            __wbg_setScissorRect_0578b1de90caf434: jt,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: ke,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: vt,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Te,
            __wbg_setStencilReference_7616273572b1075e: qt,
            __wbg_drawIndexed_55f6bf3bda0212ad: Pe,
            __wbg_setPipeline_723820e1c5cc61e7: Mt,
            __wbg_drawIndirect_a2f7c719957f8ec9: Ae,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: te,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Qe,
            __wbg_getBindGroupLayout_aba26df848b4322d: Ne,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Se,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: ve,
            __wbg_error_2acb88afe0ad9a3e: Oe,
            __wbg_valueOf_5c6da6c9a85f34dc: pn,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: i_,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: $_,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: N_,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: Q_,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: q_,
            __wbg_maxBindGroups_5d3409c14d2756b5: I_,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: T_,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: E_,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: O_,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: U_,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: R_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: F_,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: j_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: Y_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: X_,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: M_,
            __wbg_maxVertexBuffers_e5cf174a3497d472: J_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: v_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: Z_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: H_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: rt,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: nt,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: V_,
            __wbg_maxColorAttachments_378f5fb1c453321d: C_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: P_,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: L_,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: G_,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: A_,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: z_,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: D_,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: W_,
            __wbg_has_2184fc4b845f2b5f: c_,
            __wbg_queue_6b07ccdd49a6ba90: Bt,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: a_,
            __wbg_Window_06e90eea4c7df280: V,
            __wbg_gpu_d9721d200584e919: n_,
            __wbg_WorkerGlobalScope_defda269b75e179a: U,
            __wbg_unmap_4aa38f8c5283cc1d: ln,
            __wbg_submit_60f2469dc00130cc: sn,
            __wbg_mapAsync_8d0ffc031e86e9a0: k_,
            __wbg_configure_6e1ccd3ac31b721c: _e,
            __wbg_writeBuffer_b5e6e8f3f93629bc: yn,
            __wbg_writeTexture_57e41dd94bac65c4: Bn,
            __wbg_createView_c227b9af7bd5f441: he,
            __wbg_createBuffer_e3f8b2bd8b492498: ie,
            __wbg_createSampler_cb4137c4e97c7098: le,
            __wbg_createTexture_1a3ebeb1ddd7a035: pe,
            __wbg_requestDevice_6130c3ba10d633f9: Tt,
            __wbg_finish_35be15c58b55a95b: Me,
            __wbg_finish_41491ca602373cde: Fe,
            __wbg_createQuerySet_6050df2adcb1f167: ue,
            __wbg_createBindGroup_876adbf7e329ce2e: ae,
            __wbg_requestAdapter_e4b32f2647c66726: It,
            __wbg_set_onuncapturederror_729c2e42c36923f4: en,
            __wbg_setBindGroup_f4d552dcef65a491: Dt,
            __wbg_setBindGroup_f930832baeb4279b: Lt,
            __wbg_setBindGroup_8d384b1c5ed329f4: At,
            __wbg_setBindGroup_9877b57492cb7e1c: zt,
            __wbg_createShaderModule_912a19a8ccc2aa1a: me,
            __wbg_usage_ee2982f59567c06f: mn,
            __wbg_size_1dfbf7241f9df1cc: nn,
            __wbg_executeBundles_2905636f81aabf99: Ve,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Xe,
            __wbg_messages_4e98c7e63c5efe7b: tt,
            __wbg_length_b3416cf66a5452c8: p_,
            __wbg_clearBuffer_f24f8de43db597ec: ee,
            __wbg_clearBuffer_b08b15b7ee3c9d57: K,
            __wbg_finish_eb06372cc93f8d50: je,
            __wbg_finish_ee515f526784acd5: qe,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Ut,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: Et,
            __wbg_createCommandEncoder_e617922978f8b4de: se,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: ge,
            __wbg_createRenderPipeline_921034ccba195ffe: we,
            __wbg_setVertexBuffer_54536e0e73bfc91e: $t,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: Nt,
            __wbg_createComputePipeline_6794bf24c6c03583: be,
            __wbg_setBlendConstant_257274277b0e3153: Wt,
            __wbg_createBindGroupLayout_e37f9323c278f93f: fe,
            __wbg_lost_2c34651e3317be8b: S_,
            __wbg_then_1d7a5273811a5cea: gn,
            __wbg_beginRenderPass_9a7bf53d588737dc: Z,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: Y,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: de,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: re,
            __wbg_setBindGroup_6149584f04998372: Gt,
            __wbg_setBindGroup_1602c955be9b2eaa: Ct,
            __wbg_copyBufferToTexture_48aa78a412b2a467: ne,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: ce,
            __wbg_setIndexBuffer_4219294fa3e2d59b: Ot,
            __wbg_setIndexBuffer_7e208bb69310ed01: Vt,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: oe,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Qt,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Xt,
            __wbg_lineNum_24517b98f306fcae: B_,
            __wbg_instanceof_Object_be1962063fcc0c9f: u_,
            __wbg_get_a8ee5c45dabc1b3b: __,
            __wbg_push_e87b0e732085a946: pt,
            __wbg_new_typed_bccac67128ed885a: bt,
            __wbg_then_9e335f6dd892bc11: un,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Ke,
            __wbg_label_cdc2b7a875dc5123: l_,
            __wbg_message_f762db05c1294eca: _t,
            __wbg_reason_d7f4ddcad86f8d99: kt,
            __wbg_message_1b27ea1ad3998a9f: K_,
            __wbg_type_4b0a304ebc25e195: wn,
            __wbg_message_a77e1a9202609622: et,
            __wbg_then_098abe61755d12f6: bn,
            __wbg_queueMicrotask_a082d78ce798393e: yt,
            __wbg_queueMicrotask_0c399741342fb10f: xt,
            __wbg_resolve_ae8d83246e5bcc12: Pt,
            __wbg_instanceof_Window_23e677d2c6843922: d_,
            __wbg_document_c0320cd4183c6d9b: Ie,
            __wbg_navigator_9cebf56f28aa719b: ot,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: ht,
            __wbg_navigator_583ffd4fc14c0f7a: ct,
            __wbg_set_height_98a1a397672657e2: Jt,
            __wbg_getContext_a9236f98f1f7fe7c: Ye,
            __wbg_width_71d9d44b5e14c4b7: xn,
            __wbg_height_fb8c4164276f25fd: f_,
            __wbg_set_width_576343a4a7f2cf28: _n,
            __wbg_get_c7546417fb0bec10: t_,
            __wbg_set_height_b6548a01bdcb689a: Kt,
            __wbg_getContext_f04bf8f22dcb2d53: Ze,
            __wbg_width_4d6fc7fecd877217: hn,
            __wbg_height_6568c4427c3b889d: o_,
            __wbg_set_width_c0fcaa2da53cd540: tn,
            __wbg_new_ab79df5bd7c26067: at,
            __wbg_length_ea16607d7b61445b: h_,
            __wbg_new_from_slice_22da9388ac046e50: it,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: gt,
            __wbg_set_e80615d7a9a43981: Ht,
            __wbg_buffer_60b8043cd926067d: H,
            __wbg_prototypesetcall_d62e5099504357e6: lt,
            __wbg_from_4bdf88943703fd48: $e,
            __wbg_isArray_33b91feb269ff46e: w_,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: on,
            __wbg_static_accessor_SELF_f207c857566db248: fn,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: cn,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: an,
            __wbg_then_bc59d1943397ca4e: dn,
            __wbg_parse_e9eddd2a82c706eb: dt,
            __wbg_get_3ef1eba1850ade27: e_,
            __wbg_set_7eaa4f96924fd6b3: Zt,
            __wbg_random_5bb86cae65a45bf6: St,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: $,
            __wbg___wbindgen_throw_6ddd609b62940d55: Q,
            __wbg___wbindgen_is_object_781bc9f159099513: j,
            __wbg___wbindgen_string_get_395e606bd0ee4427: N,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: R,
            __wbg___wbindgen_is_function_3c846841762788c1: F,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: q,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: M,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: X,
            __wbindgen_init_externref_table: Cn,
            __wbindgen_cast_0000000000000001: Sn,
            __wbindgen_cast_0000000000000002: kn,
            __wbindgen_cast_0000000000000003: In,
            __wbindgen_cast_0000000000000004: Tn,
            __wbindgen_cast_0000000000000005: vn,
            __wbindgen_cast_0000000000000006: Pn
        }
    }, E), jn = o.memory, qn = o.__wbg_gpugameoflife_free, $n = o.gpugameoflife_add_hires_region, Nn = o.gpugameoflife_clear_frozen_cells, Qn = o.gpugameoflife_clear_hires_frozen_cells, Xn = o.gpugameoflife_clear_hires_regions, Yn = o.gpugameoflife_clear_text_glyphs, Zn = o.gpugameoflife_flush_and_render, Hn = o.gpugameoflife_grid_pitch, Jn = o.gpugameoflife_hires_tick_and_render, Kn = o.gpugameoflife_max_hires_tick_multiplier, er = o.gpugameoflife_new, _r = o.gpugameoflife_new_offscreen, tr = o.gpugameoflife_padded_rows, nr = o.gpugameoflife_remove_hires_region, rr = o.gpugameoflife_render_only, cr = o.gpugameoflife_resize, or = o.gpugameoflife_screen_cols, fr = o.gpugameoflife_screen_rows, ar = o.gpugameoflife_set_decals_json, ir = o.gpugameoflife_set_frozen_cells, sr = o.gpugameoflife_set_hires_frozen_cells, br = o.gpugameoflife_set_hires_paused, gr = o.gpugameoflife_set_hires_tick_multiplier, ur = o.gpugameoflife_set_scroll, dr = o.gpugameoflife_set_text_glyphs, wr = o.gpugameoflife_set_transition, lr = o.gpugameoflife_set_zones_json, mr = o.gpugameoflife_tick_and_render, pr = o.gpugameoflife_toggle_cell, hr = o.gpugameoflife_update_hires_flags, xr = o.gpugameoflife_upload_text_atlas, yr = o.gpugameoflife_words_per_row, Br = o.wasm_bindgen__closure__destroy__h38919d594d1637ba, Sr = o.wasm_bindgen__closure__destroy__h03eaf4e806a12d61, kr = o.wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff, Ir = o.wasm_bindgen__convert__closures_____invoke__h45a9c44561bd92e0, Tr = o.wasm_bindgen__convert__closures_____invoke__h552809390f1f128d, vr = o.wasm_bindgen__convert__closures_____invoke__h552809390f1f128d_1, Pr = o.__wbindgen_malloc, Cr = o.__wbindgen_realloc, Gr = o.__wbindgen_exn_store, Ar = o.__externref_table_alloc, zr = o.__wbindgen_externrefs, Dr = o.__wbindgen_free, Lr = o.__externref_table_dealloc, L = o.__wbindgen_start;
    var Wr = Object.freeze({
        __proto__: null,
        __externref_table_alloc: Ar,
        __externref_table_dealloc: Lr,
        __wbg_gpugameoflife_free: qn,
        __wbindgen_exn_store: Gr,
        __wbindgen_externrefs: zr,
        __wbindgen_free: Dr,
        __wbindgen_malloc: Pr,
        __wbindgen_realloc: Cr,
        __wbindgen_start: L,
        gpugameoflife_add_hires_region: $n,
        gpugameoflife_clear_frozen_cells: Nn,
        gpugameoflife_clear_hires_frozen_cells: Qn,
        gpugameoflife_clear_hires_regions: Xn,
        gpugameoflife_clear_text_glyphs: Yn,
        gpugameoflife_flush_and_render: Zn,
        gpugameoflife_grid_pitch: Hn,
        gpugameoflife_hires_tick_and_render: Jn,
        gpugameoflife_max_hires_tick_multiplier: Kn,
        gpugameoflife_new: er,
        gpugameoflife_new_offscreen: _r,
        gpugameoflife_padded_rows: tr,
        gpugameoflife_remove_hires_region: nr,
        gpugameoflife_render_only: rr,
        gpugameoflife_resize: cr,
        gpugameoflife_screen_cols: or,
        gpugameoflife_screen_rows: fr,
        gpugameoflife_set_decals_json: ar,
        gpugameoflife_set_frozen_cells: ir,
        gpugameoflife_set_hires_frozen_cells: sr,
        gpugameoflife_set_hires_paused: br,
        gpugameoflife_set_hires_tick_multiplier: gr,
        gpugameoflife_set_scroll: ur,
        gpugameoflife_set_text_glyphs: dr,
        gpugameoflife_set_transition: wr,
        gpugameoflife_set_zones_json: lr,
        gpugameoflife_tick_and_render: mr,
        gpugameoflife_toggle_cell: pr,
        gpugameoflife_update_hires_flags: hr,
        gpugameoflife_upload_text_atlas: xr,
        gpugameoflife_words_per_row: yr,
        memory: jn,
        wasm_bindgen__closure__destroy__h03eaf4e806a12d61: Sr,
        wasm_bindgen__closure__destroy__h38919d594d1637ba: Br,
        wasm_bindgen__convert__closures_____invoke__h45a9c44561bd92e0: Ir,
        wasm_bindgen__convert__closures_____invoke__h552809390f1f128d: Tr,
        wasm_bindgen__convert__closures_____invoke__h552809390f1f128d_1: vr,
        wasm_bindgen__convert__closures_____invoke__h566144c69442e6ff: kr
    });
    Fn(Wr);
    L();
})();
export { B as GpuGameOfLife, __tla };
