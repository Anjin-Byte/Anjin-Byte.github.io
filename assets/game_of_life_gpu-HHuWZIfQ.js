import { _ as O } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let y;
let __tla = (async ()=>{
    var z = "/assets/game_of_life_gpu_bg-BBlxduis.wasm";
    y = class {
        static __wrap(_) {
            const t = Object.create(y.prototype);
            return t.__wbg_ptr = _, D.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, D.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            o.__wbg_gpugameoflife_free(_, 0);
        }
        flush_and_render() {
            o.gpugameoflife_flush_and_render(this.__wbg_ptr);
        }
        grid_pitch() {
            return o.gpugameoflife_grid_pitch(this.__wbg_ptr);
        }
        init_device_request_ms() {
            return o.gpugameoflife_init_device_request_ms(this.__wbg_ptr);
        }
        init_panel_ms() {
            return o.gpugameoflife_init_panel_ms(this.__wbg_ptr);
        }
        init_renderer_ms() {
            return o.gpugameoflife_init_renderer_ms(this.__wbg_ptr);
        }
        init_seeding_ms() {
            return o.gpugameoflife_init_seeding_ms(this.__wbg_ptr);
        }
        init_simulation_ms() {
            return o.gpugameoflife_init_simulation_ms(this.__wbg_ptr);
        }
        last_compute_tick_ms() {
            const _ = o.gpugameoflife_last_compute_tick_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_or_edit_ms() {
            const _ = o.gpugameoflife_last_or_edit_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_render_pass_ms() {
            const _ = o.gpugameoflife_last_render_pass_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_xor_edit_ms() {
            const _ = o.gpugameoflife_last_xor_edit_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        static new(_, t, n) {
            return o.gpugameoflife_new(_, t, n);
        }
        static new_offscreen(_, t, n) {
            return o.gpugameoflife_new_offscreen(_, t, n);
        }
        padded_rows() {
            return o.gpugameoflife_padded_rows(this.__wbg_ptr) >>> 0;
        }
        render_only() {
            o.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, t) {
            o.gpugameoflife_resize(this.__wbg_ptr, _, t);
        }
        set_camera(_, t) {
            o.gpugameoflife_set_camera(this.__wbg_ptr, _, t);
        }
        set_init_fade(_) {
            o.gpugameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_scroll(_) {
            o.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_theme_json(_) {
            const t = g(_, o.__wbindgen_malloc, o.__wbindgen_realloc), n = u, r = o.gpugameoflife_set_theme_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        set_transition(_) {
            o.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            const t = g(_, o.__wbindgen_malloc, o.__wbindgen_realloc), n = u, r = o.gpugameoflife_set_zones_json(this.__wbg_ptr, t, n);
            if (r[1]) throw k(r[0]);
        }
        tick_and_render() {
            o.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        timestamp_query_supported() {
            return o.gpugameoflife_timestamp_query_supported(this.__wbg_ptr) !== 0;
        }
        toggle_cell(_, t) {
            o.gpugameoflife_toggle_cell(this.__wbg_ptr, _, t);
        }
        words_per_row() {
            return o.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
        world_cols() {
            return o.gpugameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return o.gpugameoflife_world_rows(this.__wbg_ptr) >>> 0;
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
        const t = P(_), n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function q(e) {
        return typeof e == "function";
    }
    function M(e) {
        const _ = e;
        return typeof _ == "object" && _ !== null;
    }
    function F(e) {
        return e === void 0;
    }
    function j(e, _) {
        const t = _, n = typeof t == "number" ? t : void 0;
        i().setFloat64(e + 8, s(n) ? 0 : n, !0), i().setInt32(e + 0, !s(n), !0);
    }
    function $(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = s(n) ? 0 : g(n, o.__wbindgen_malloc, o.__wbindgen_realloc), a = u;
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
    function oe(e, _, t, n) {
        e.copyTextureToTexture(_, t, n);
    }
    function ce(e, _) {
        return e.createBindGroupLayout(_);
    }
    function ae(e, _) {
        return e.createBindGroup(_);
    }
    function fe(e, _) {
        return e.createBuffer(_);
    }
    function ie(e, _) {
        return e.createCommandEncoder(_);
    }
    function be(e, _) {
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
    function ve(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Pe(e, _, t, n, r, a) {
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
            o.__wbindgen_free(t, n, 1);
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
    function qe(e) {
        return e.finish();
    }
    function Me(e, _) {
        return e.finish(_);
    }
    function Fe(e) {
        return e.finish();
    }
    function je(e) {
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
            return s(n) ? 0 : d(n);
        }, arguments);
    }
    function Ye() {
        return l(function(e, _, t) {
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
    function Ke(e, _) {
        return e[_ >>> 0];
    }
    function e_() {
        return l(function(e, _) {
            return Reflect.get(e, _);
        }, arguments);
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
    function o_(e) {
        return e.height;
    }
    function c_(e) {
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
    function i_(e) {
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
        const t = _.label, n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
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
    function v_(e) {
        return e.maxBufferSize;
    }
    function P_(e) {
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
    function q_(e) {
        return e.maxStorageBuffersPerShaderStage;
    }
    function M_(e) {
        return e.maxStorageTexturesPerShaderStage;
    }
    function F_(e) {
        return e.maxTextureArrayLayers;
    }
    function j_(e) {
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
        const t = _.message, n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function K_(e, _) {
        const t = _.message, n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function et(e, _) {
        const t = _.message, n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
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
    function ot(e) {
        return e.navigator;
    }
    function ct() {
        return new Array;
    }
    function at() {
        return new Object;
    }
    function ft() {
        return new Error;
    }
    function it(e, _) {
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
            t.a = 0;
        }
    }
    function st(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function ut() {
        return Date.now();
    }
    function gt(e) {
        return e.offset;
    }
    function dt() {
        return l(function(e, _) {
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
    function xt() {
        return l(function(e, _, t) {
            return e.querySelectorAll(w(_, t));
        }, arguments);
    }
    function ht(e) {
        queueMicrotask(e);
    }
    function yt(e) {
        return e.queueMicrotask;
    }
    function Bt(e) {
        return e.queue;
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
    function vt(e, _, t, n, r, a) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function Pt(e) {
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
    function qt(e, _) {
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
    function Yt(e, _, t) {
        e.set(_, t >>> 0);
    }
    function Zt() {
        return l(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
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
        const t = _.stack, n = g(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = u;
        i().setInt32(e + 4, r, !0), i().setInt32(e + 0, n, !0);
    }
    function rn() {
        const e = typeof global > "u" ? null : global;
        return s(e) ? 0 : d(e);
    }
    function on() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return s(e) ? 0 : d(e);
    }
    function cn() {
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
    function bn(e, _, t) {
        return e.then(_, t);
    }
    function sn(e, _) {
        return e.then(_);
    }
    function un(e, _) {
        return e.then(_);
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
        return A(e, _, Cn);
    }
    function Sn(e, _) {
        return A(e, _, An);
    }
    function In(e, _) {
        return A(e, _, Gn);
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
    function kn() {
        const e = o.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function Cn(e, _, t) {
        o.wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca(e, _, t);
    }
    function Gn(e, _, t) {
        o.wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca_2(e, _, t);
    }
    function An(e, _, t) {
        const n = o.wasm_bindgen__convert__closures_____invoke__h4604418b66b45aca(e, _, t);
        if (n[1]) throw k(n[0]);
    }
    function Dn(e, _, t, n) {
        o.wasm_bindgen__convert__closures_____invoke__h719499720fdbb9ad(e, _, t, n);
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
    } : new FinalizationRegistry((e)=>o.__wbg_gpugameoflife_free(e, 1));
    function d(e) {
        const _ = o.__externref_table_alloc();
        return o.__wbindgen_externrefs.set(_, e), _;
    }
    const L = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbindgen_destroy_closure(e.a, e.b));
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
            let a = "[";
            r > 0 && (a += P(e[0]));
            for(let f = 1; f < r; f++)a += ", " + P(e[f]);
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
    let m = null;
    function i() {
        return (m === null || m.buffer.detached === !0 || m.buffer.detached === void 0 && m.buffer !== o.memory.buffer) && (m = new DataView(o.memory.buffer)), m;
    }
    function w(e, _) {
        return Un(e >>> 0, _);
    }
    let B = null;
    function En() {
        return (B === null || B.byteLength === 0) && (B = new Uint32Array(o.memory.buffer)), B;
    }
    let S = null;
    function x() {
        return (S === null || S.byteLength === 0) && (S = new Uint8Array(o.memory.buffer)), S;
    }
    function l(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = d(t);
            o.__wbindgen_exn_store(n);
        }
    }
    function s(e) {
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
            --n.cnt === 0 && (o.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, L.unregister(n));
        }, L.register(r, n, n), r;
    }
    function g(e, _, t) {
        if (t === void 0) {
            const b = h.encode(e), p = _(b.length, 1) >>> 0;
            return x().subarray(p, p + b.length).set(b), u = b.length, p;
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
            const b = x().subarray(r + f, r + n), p = h.encodeInto(e, b);
            f += p.written, r = t(r, n, f, 1) >>> 0;
        }
        return u = f, r;
    }
    function k(e) {
        const _ = o.__wbindgen_externrefs.get(e);
        return o.__externref_table_dealloc(e), _;
    }
    let I = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    I.decode();
    const Vn = 2146435072;
    let v = 0;
    function Un(e, _) {
        return v += _, v >= Vn && (I = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), I.decode(), v = _), I.decode(x().subarray(e, e + _));
    }
    const h = new TextEncoder;
    "encodeInto" in h || (h.encodeInto = function(e, _) {
        const t = h.encode(e);
        return _.set(t), {
            read: e.length,
            written: t.length
        };
    });
    let u = 0, o;
    function Rn(e) {
        o = e;
    }
    URL = globalThis.URL;
    const c = await O({
        "./game_of_life_gpu_bg.js": {
            __wbg_gpugameoflife_new: n_,
            __wbg_call_ec09a4cf93377d3a: H,
            __wbg_new_typed_90c3f6c29ba36d19: bt,
            __wbg_new_227d7c05414eb861: ft,
            __wbg_stack_3b0d974bbf31e44f: nn,
            __wbg_error_a6fa202b58aa1cd3: ze,
            __wbg_getMappedRange_11ec4cfce4df1e72: He,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: s_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: b_,
            __wbg_offset_164492575e959c94: gt,
            __wbg_length_87e0297027dd7802: m_,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: i_,
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
            __wbg_popErrorScope_2869a89dd4626f0c: wt,
            __wbg_pushErrorScope_72e651b0f8f64c0e: mt,
            __wbg_drawIndexed_9c9719597507e735: ke,
            __wbg_setPipeline_f2cf83769bb33769: qt,
            __wbg_setViewport_94128a2b1a708040: Xt,
            __wbg_setPipeline_481f34ae14c49d67: Ut,
            __wbg_drawIndirect_73df189881970a43: Ce,
            __wbg_draw_ce5e8b8ad56571cb: De,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Ze,
            __wbg_setScissorRect_0578b1de90caf434: Mt,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Se,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: vt,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Te,
            __wbg_setStencilReference_7616273572b1075e: Ft,
            __wbg_drawIndexed_55f6bf3bda0212ad: Pe,
            __wbg_setPipeline_723820e1c5cc61e7: Rt,
            __wbg_drawIndirect_a2f7c719957f8ec9: Ge,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: _e,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Ne,
            __wbg_getBindGroupLayout_aba26df848b4322d: $e,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Be,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: ve,
            __wbg_error_2acb88afe0ad9a3e: Oe,
            __wbg_valueOf_429d1904ca1dd1c9: mn,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: f_,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: j_,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: $_,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: N_,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: F_,
            __wbg_maxBindGroups_5d3409c14d2756b5: I_,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: T_,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: z_,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: O_,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: V_,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: U_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: q_,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: M_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: X_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: Q_,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: R_,
            __wbg_maxVertexBuffers_e5cf174a3497d472: H_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: v_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: Y_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: Z_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: nt,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: tt,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: E_,
            __wbg_maxColorAttachments_378f5fb1c453321d: k_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: P_,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: L_,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: C_,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: G_,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: A_,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: D_,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: W_,
            __wbg_has_2184fc4b845f2b5f: r_,
            __wbg_queue_6b07ccdd49a6ba90: Bt,
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
            __wbg_finish_41491ca602373cde: qe,
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
            __wbg_length_fb04d16d7bdf6d4c: p_,
            __wbg_clearBuffer_f24f8de43db597ec: K,
            __wbg_clearBuffer_b08b15b7ee3c9d57: J,
            __wbg_finish_eb06372cc93f8d50: Me,
            __wbg_finish_ee515f526784acd5: Fe,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Vt,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: zt,
            __wbg_createCommandEncoder_e617922978f8b4de: ie,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: se,
            __wbg_createRenderPipeline_921034ccba195ffe: de,
            __wbg_setVertexBuffer_54536e0e73bfc91e: jt,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: $t,
            __wbg_createComputePipeline_6794bf24c6c03583: be,
            __wbg_setBlendConstant_257274277b0e3153: Wt,
            __wbg_createBindGroupLayout_e37f9323c278f93f: ce,
            __wbg_lost_2c34651e3317be8b: B_,
            __wbg_then_3507a174b4075c38: sn,
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
            __wbg_copyTextureToTexture_97d0e9333a1e1008: oe,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Nt,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Qt,
            __wbg_lineNum_24517b98f306fcae: y_,
            __wbg_instanceof_Object_34d30ae022f04c89: u_,
            __wbg_get_4b90d6d8c5deb5d5: Ke,
            __wbg_push_ceb8ef046afb2041: pt,
            __wbg_then_254bab9b266a77a5: bn,
            __wbg_message_f762db05c1294eca: et,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Je,
            __wbg_label_cdc2b7a875dc5123: w_,
            __wbg_type_4b0a304ebc25e195: dn,
            __wbg_message_a77e1a9202609622: K_,
            __wbg_reason_d7f4ddcad86f8d99: St,
            __wbg_message_1b27ea1ad3998a9f: J_,
            __wbg_instanceof_Window_9e0fe7d3d1ff4342: g_,
            __wbg_document_d55773b5c3ef918f: Ie,
            __wbg_navigator_e8073f0771c8d619: ot,
            __wbg_querySelectorAll_655c745bb393d7a8: xt,
            __wbg_navigator_ae969bd3f24874ad: rt,
            __wbg_get_eea7f83fe704ff33: __,
            __wbg_set_height_490773009db619eb: Ht,
            __wbg_getContext_db5f8ccb275883ba: Ye,
            __wbg_width_ba63b77e481cffae: xn,
            __wbg_height_16941927eccda208: o_,
            __wbg_set_width_5e8d872fae03f8b5: en,
            __wbg_set_height_7492d7d81050874c: Jt,
            __wbg_getContext_72f90d218519cc6f: Xe,
            __wbg_width_4c3c5241d7ff2487: pn,
            __wbg_height_7942815e41949bff: c_,
            __wbg_set_width_74c20ff78cccba07: _n,
            __wbg_new_0b303268aa395a38: ct,
            __wbg_new_20b778a4c5c691c3: at,
            __wbg_length_68a9d5278d084f4f: l_,
            __wbg_new_from_slice_bb2d1778c0b87eb1: it,
            __wbg_new_with_byte_offset_and_length_9e1e664fe1a5d385: st,
            __wbg_set_67722109853a4daf: Yt,
            __wbg_buffer_8524b3453cde4918: Z,
            __wbg_prototypesetcall_956c7493c68e29b4: lt,
            __wbg_then_3ea18602c6a5123b: un,
            __wbg_now_bce4dc999095ea77: ut,
            __wbg_from_8a57180716c586ee: je,
            __wbg_isArray_139f48e3c057ede8: d_,
            __wbg_static_accessor_GLOBAL_THIS_95ca6460658b5d13: on,
            __wbg_static_accessor_SELF_4c95f759a91e9aae: cn,
            __wbg_static_accessor_GLOBAL_60a4124bab7dcc9a: rn,
            __wbg_static_accessor_WINDOW_44b435597f9e9ee7: an,
            __wbg_then_512b7e52c6d0a050: gn,
            __wbg_resolve_0183de2e8c6b1d54: Pt,
            __wbg_parse_246201845d0eb98c: dt,
            __wbg_get_52a8a619f7b88df6: e_,
            __wbg_set_a6ba3ac0e634b822: Zt,
            __wbg_queueMicrotask_4698f900840e3286: ht,
            __wbg_queueMicrotask_477a5533c7100338: yt,
            __wbg___wbindgen_number_get_588ed6b97f0d7e14: j,
            __wbg___wbindgen_throw_bbadd78c1bac3a77: N,
            __wbg___wbindgen_is_object_3a2c414391dbf751: M,
            __wbg___wbindgen_string_get_fa2687d531ed17a5: $,
            __wbg___wbindgen_boolean_get_b131b2f36d6b2f55: U,
            __wbg___wbindgen_is_function_147961669f068cd4: q,
            __wbg___wbindgen_is_undefined_4410e3c20a99fa97: F,
            __wbg___wbindgen_debug_string_56c147eb1a51f0c4: R,
            __wbg__wbg_cb_unref_c2301a3c9b78104b: Q,
            __wbindgen_init_externref_table: kn,
            __wbindgen_cast_0000000000000001: Bn,
            __wbindgen_cast_0000000000000002: Sn,
            __wbindgen_cast_0000000000000003: In,
            __wbindgen_cast_0000000000000004: Tn,
            __wbindgen_cast_0000000000000005: vn,
            __wbindgen_cast_0000000000000006: Pn
        }
    }, z), qn = c.memory, Mn = c.__wbg_gpugameoflife_free, Fn = c.gpugameoflife_flush_and_render, jn = c.gpugameoflife_grid_pitch, $n = c.gpugameoflife_init_device_request_ms, Nn = c.gpugameoflife_init_panel_ms, Qn = c.gpugameoflife_init_renderer_ms, Xn = c.gpugameoflife_init_seeding_ms, Yn = c.gpugameoflife_init_simulation_ms, Zn = c.gpugameoflife_last_compute_tick_ms, Hn = c.gpugameoflife_last_or_edit_ms, Jn = c.gpugameoflife_last_render_pass_ms, Kn = c.gpugameoflife_last_xor_edit_ms, er = c.gpugameoflife_new, _r = c.gpugameoflife_new_offscreen, tr = c.gpugameoflife_padded_rows, nr = c.gpugameoflife_render_only, rr = c.gpugameoflife_resize, or = c.gpugameoflife_set_camera, cr = c.gpugameoflife_set_init_fade, ar = c.gpugameoflife_set_scroll, fr = c.gpugameoflife_set_theme_json, ir = c.gpugameoflife_set_transition, br = c.gpugameoflife_set_zones_json, sr = c.gpugameoflife_tick_and_render, ur = c.gpugameoflife_timestamp_query_supported, gr = c.gpugameoflife_toggle_cell, dr = c.gpugameoflife_words_per_row, wr = c.gpugameoflife_world_cols, lr = c.gpugameoflife_world_rows, mr = c.wasm_bindgen__convert__closures_____invoke__h4604418b66b45aca, pr = c.wasm_bindgen__convert__closures_____invoke__h719499720fdbb9ad, xr = c.wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca, hr = c.wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca_2, yr = c.__wbindgen_malloc, Br = c.__wbindgen_realloc, Sr = c.__wbindgen_exn_store, Ir = c.__externref_table_alloc, Tr = c.__wbindgen_externrefs, vr = c.__wbindgen_free, Pr = c.__wbindgen_destroy_closure, kr = c.__externref_table_dealloc, W = c.__wbindgen_start;
    var Cr = Object.freeze({
        __proto__: null,
        __externref_table_alloc: Ir,
        __externref_table_dealloc: kr,
        __wbg_gpugameoflife_free: Mn,
        __wbindgen_destroy_closure: Pr,
        __wbindgen_exn_store: Sr,
        __wbindgen_externrefs: Tr,
        __wbindgen_free: vr,
        __wbindgen_malloc: yr,
        __wbindgen_realloc: Br,
        __wbindgen_start: W,
        gpugameoflife_flush_and_render: Fn,
        gpugameoflife_grid_pitch: jn,
        gpugameoflife_init_device_request_ms: $n,
        gpugameoflife_init_panel_ms: Nn,
        gpugameoflife_init_renderer_ms: Qn,
        gpugameoflife_init_seeding_ms: Xn,
        gpugameoflife_init_simulation_ms: Yn,
        gpugameoflife_last_compute_tick_ms: Zn,
        gpugameoflife_last_or_edit_ms: Hn,
        gpugameoflife_last_render_pass_ms: Jn,
        gpugameoflife_last_xor_edit_ms: Kn,
        gpugameoflife_new: er,
        gpugameoflife_new_offscreen: _r,
        gpugameoflife_padded_rows: tr,
        gpugameoflife_render_only: nr,
        gpugameoflife_resize: rr,
        gpugameoflife_set_camera: or,
        gpugameoflife_set_init_fade: cr,
        gpugameoflife_set_scroll: ar,
        gpugameoflife_set_theme_json: fr,
        gpugameoflife_set_transition: ir,
        gpugameoflife_set_zones_json: br,
        gpugameoflife_tick_and_render: sr,
        gpugameoflife_timestamp_query_supported: ur,
        gpugameoflife_toggle_cell: gr,
        gpugameoflife_words_per_row: dr,
        gpugameoflife_world_cols: wr,
        gpugameoflife_world_rows: lr,
        memory: qn,
        wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca: xr,
        wasm_bindgen__convert__closures_____invoke__h01cb91920f8e11ca_2: hr,
        wasm_bindgen__convert__closures_____invoke__h4604418b66b45aca: mr,
        wasm_bindgen__convert__closures_____invoke__h719499720fdbb9ad: pr
    });
    Rn(Cr);
    W();
})();
export { y as GpuGameOfLife, __tla };
