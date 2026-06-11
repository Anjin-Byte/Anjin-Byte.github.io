import { _ as E } from "./__vite-plugin-wasm-helper-oqf-7dtx.js";
let T;
let __tla = (async ()=>{
    var j = "/assets/game_of_life_gpu_bg--uYWXhM2.wasm";
    T = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const n = Object.create(T.prototype);
            return n.__wbg_ptr = _, W.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, W.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            f.__wbg_gpugameoflife_free(_, 0);
        }
        flush_and_render() {
            f.gpugameoflife_flush_and_render(this.__wbg_ptr);
        }
        grid_pitch() {
            return f.gpugameoflife_grid_pitch(this.__wbg_ptr);
        }
        init_device_request_ms() {
            return f.gpugameoflife_init_device_request_ms(this.__wbg_ptr);
        }
        init_panel_ms() {
            return f.gpugameoflife_init_panel_ms(this.__wbg_ptr);
        }
        init_renderer_ms() {
            return f.gpugameoflife_init_renderer_ms(this.__wbg_ptr);
        }
        init_seeding_ms() {
            return f.gpugameoflife_init_seeding_ms(this.__wbg_ptr);
        }
        init_simulation_ms() {
            return f.gpugameoflife_init_simulation_ms(this.__wbg_ptr);
        }
        last_compute_tick_ms() {
            try {
                const r = f.__wbindgen_add_to_stack_pointer(-16);
                f.gpugameoflife_last_compute_tick_ms(r, this.__wbg_ptr);
                var _ = g().getInt32(r + 0, !0), n = g().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_or_edit_ms() {
            try {
                const r = f.__wbindgen_add_to_stack_pointer(-16);
                f.gpugameoflife_last_or_edit_ms(r, this.__wbg_ptr);
                var _ = g().getInt32(r + 0, !0), n = g().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_present_ms() {
            return f.gpugameoflife_last_present_ms(this.__wbg_ptr);
        }
        last_render_pass_ms() {
            try {
                const r = f.__wbindgen_add_to_stack_pointer(-16);
                f.gpugameoflife_last_render_pass_ms(r, this.__wbg_ptr);
                var _ = g().getInt32(r + 0, !0), n = g().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_reseed_ms() {
            return f.gpugameoflife_last_reseed_ms(this.__wbg_ptr);
        }
        last_xor_edit_ms() {
            try {
                const r = f.__wbindgen_add_to_stack_pointer(-16);
                f.gpugameoflife_last_xor_edit_ms(r, this.__wbg_ptr);
                var _ = g().getInt32(r + 0, !0), n = g().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        static new(_, n, r) {
            const o = f.gpugameoflife_new(c(_), n, r);
            return h(o);
        }
        static new_offscreen(_, n, r) {
            const o = f.gpugameoflife_new_offscreen(c(_), n, r);
            return h(o);
        }
        padded_rows() {
            return f.gpugameoflife_padded_rows(this.__wbg_ptr) >>> 0;
        }
        render_only() {
            f.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, n) {
            f.gpugameoflife_resize(this.__wbg_ptr, _, n);
        }
        set_camera(_, n) {
            f.gpugameoflife_set_camera(this.__wbg_ptr, _, n);
        }
        set_init_fade(_) {
            f.gpugameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_scroll(_) {
            f.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_theme_json(_) {
            try {
                const o = f.__wbindgen_add_to_stack_pointer(-16), i = m(_, f.__wbindgen_export, f.__wbindgen_export2), u = d;
                f.gpugameoflife_set_theme_json(o, this.__wbg_ptr, i, u);
                var n = g().getInt32(o + 0, !0), r = g().getInt32(o + 4, !0);
                if (r) throw h(n);
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_transition(_) {
            f.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            try {
                const o = f.__wbindgen_add_to_stack_pointer(-16), i = m(_, f.__wbindgen_export, f.__wbindgen_export2), u = d;
                f.gpugameoflife_set_zones_json(o, this.__wbg_ptr, i, u);
                var n = g().getInt32(o + 0, !0), r = g().getInt32(o + 4, !0);
                if (r) throw h(n);
            } finally{
                f.__wbindgen_add_to_stack_pointer(16);
            }
        }
        tick_and_render() {
            f.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        timestamp_query_supported() {
            return f.gpugameoflife_timestamp_query_supported(this.__wbg_ptr) !== 0;
        }
        toggle_cell(_, n) {
            f.gpugameoflife_toggle_cell(this.__wbg_ptr, _, n);
        }
        words_per_row() {
            return f.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
        world_cols() {
            return f.gpugameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return f.gpugameoflife_world_rows(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (T.prototype[Symbol.dispose] = T.prototype.free);
    function V(e) {
        const _ = t(e).Window;
        return c(_);
    }
    function U(e) {
        const _ = t(e).WorkerGlobalScope;
        return c(_);
    }
    function F(e) {
        const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
        return s(n) ? 16777215 : n ? 1 : 0;
    }
    function R(e, _) {
        const n = v(t(_)), r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function q(e) {
        return typeof t(e) == "function";
    }
    function M(e) {
        const _ = t(e);
        return typeof _ == "object" && _ !== null;
    }
    function $(e) {
        return t(e) === void 0;
    }
    function N(e, _) {
        const n = t(_), r = typeof n == "number" ? n : void 0;
        g().setFloat64(e + 8, s(r) ? 0 : r, !0), g().setInt32(e + 0, !s(r), !0);
    }
    function Q(e, _) {
        const n = t(_), r = typeof n == "string" ? n : void 0;
        var o = s(r) ? 0 : m(r, f.__wbindgen_export, f.__wbindgen_export2), i = d;
        g().setInt32(e + 4, i, !0), g().setInt32(e + 0, o, !0);
    }
    function X(e, _) {
        throw new Error(l(e, _));
    }
    function Y(e) {
        t(e)._wbg_cb_unref();
    }
    function H(e, _) {
        const n = t(e).beginComputePass(t(_));
        return c(n);
    }
    function Z(e, _) {
        const n = t(e).beginRenderPass(t(_));
        return c(n);
    }
    function J(e) {
        const _ = t(e).buffer;
        return c(_);
    }
    function K() {
        return p(function(e, _, n) {
            const r = t(e).call(t(_), t(n));
            return c(r);
        }, arguments);
    }
    function ee(e, _, n) {
        t(e).clearBuffer(t(_), n);
    }
    function _e(e, _, n, r) {
        t(e).clearBuffer(t(_), n, r);
    }
    function te(e, _) {
        t(e).configure(t(_));
    }
    function ne(e, _, n, r, o, i) {
        t(e).copyBufferToBuffer(t(_), n, t(r), o, i);
    }
    function re(e, _, n, r) {
        t(e).copyBufferToTexture(t(_), t(n), t(r));
    }
    function oe(e, _, n, r) {
        t(e).copyExternalImageToTexture(t(_), t(n), t(r));
    }
    function ce(e, _, n, r) {
        t(e).copyTextureToBuffer(t(_), t(n), t(r));
    }
    function fe(e, _, n, r) {
        t(e).copyTextureToTexture(t(_), t(n), t(r));
    }
    function ae(e, _) {
        const n = t(e).createBindGroupLayout(t(_));
        return c(n);
    }
    function ie(e, _) {
        const n = t(e).createBindGroup(t(_));
        return c(n);
    }
    function ue(e, _) {
        const n = t(e).createBuffer(t(_));
        return c(n);
    }
    function ge(e, _) {
        const n = t(e).createCommandEncoder(t(_));
        return c(n);
    }
    function be(e, _) {
        const n = t(e).createComputePipeline(t(_));
        return c(n);
    }
    function se(e, _) {
        const n = t(e).createPipelineLayout(t(_));
        return c(n);
    }
    function de(e, _) {
        const n = t(e).createQuerySet(t(_));
        return c(n);
    }
    function we(e, _) {
        const n = t(e).createRenderBundleEncoder(t(_));
        return c(n);
    }
    function me(e, _) {
        const n = t(e).createRenderPipeline(t(_));
        return c(n);
    }
    function le(e, _) {
        const n = t(e).createSampler(t(_));
        return c(n);
    }
    function pe(e, _) {
        const n = t(e).createShaderModule(t(_));
        return c(n);
    }
    function xe(e, _) {
        const n = t(e).createTexture(t(_));
        return c(n);
    }
    function he(e, _) {
        const n = t(e).createView(t(_));
        return c(n);
    }
    function ye(e) {
        t(e).destroy();
    }
    function Be(e) {
        t(e).destroy();
    }
    function Se(e) {
        t(e).destroy();
    }
    function Ie(e, _, n) {
        t(e).dispatchWorkgroupsIndirect(t(_), n);
    }
    function Te(e, _, n, r) {
        t(e).dispatchWorkgroups(_ >>> 0, n >>> 0, r >>> 0);
    }
    function Pe(e) {
        const _ = t(e).document;
        return s(_) ? 0 : c(_);
    }
    function ke(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function Ce(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function Ge(e, _, n, r, o, i) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, o, i >>> 0);
    }
    function Ae(e, _, n, r, o, i) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, o, i >>> 0);
    }
    function ve(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function De(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function Oe(e, _, n, r, o) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, o >>> 0);
    }
    function Le(e, _, n, r, o) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, o >>> 0);
    }
    function We(e) {
        t(e).end();
    }
    function ze(e) {
        t(e).end();
    }
    function Ee(e) {
        const _ = t(e).error;
        return c(_);
    }
    function je(e, _) {
        let n, r;
        try {
            n = e, r = _, console.error(l(e, _));
        } finally{
            f.__wbindgen_export4(n, r, 1);
        }
    }
    function Ve(e, _) {
        t(e).executeBundles(t(_));
    }
    function Ue(e) {
        const _ = t(e).features;
        return c(_);
    }
    function Fe(e) {
        const _ = t(e).features;
        return c(_);
    }
    function Re(e, _) {
        const n = t(e).finish(t(_));
        return c(n);
    }
    function qe(e) {
        const _ = t(e).finish();
        return c(_);
    }
    function Me(e, _) {
        const n = t(e).finish(t(_));
        return c(n);
    }
    function $e(e) {
        const _ = t(e).finish();
        return c(_);
    }
    function Ne(e) {
        const _ = Array.from(t(e));
        return c(_);
    }
    function Qe(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return c(n);
    }
    function Xe(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return c(n);
    }
    function Ye(e) {
        const _ = t(e).getCompilationInfo();
        return c(_);
    }
    function He() {
        return p(function(e, _, n) {
            const r = t(e).getContext(l(_, n));
            return s(r) ? 0 : c(r);
        }, arguments);
    }
    function Ze() {
        return p(function(e, _, n) {
            const r = t(e).getContext(l(_, n));
            return s(r) ? 0 : c(r);
        }, arguments);
    }
    function Je(e) {
        const _ = t(e).getCurrentTexture();
        return c(_);
    }
    function Ke(e, _, n) {
        const r = t(e).getMappedRange(_, n);
        return c(r);
    }
    function e_(e) {
        const _ = t(e).getPreferredCanvasFormat();
        return (Vn.indexOf(_) + 1 || 96) - 1;
    }
    function __() {
        return p(function(e, _) {
            const n = Reflect.get(t(e), t(_));
            return c(n);
        }, arguments);
    }
    function t_(e, _) {
        const n = t(e)[_ >>> 0];
        return c(n);
    }
    function n_(e, _) {
        const n = t(e)[_ >>> 0];
        return s(n) ? 0 : c(n);
    }
    function r_(e) {
        const _ = t(e).gpu;
        return c(_);
    }
    function o_(e) {
        const _ = T.__wrap(e);
        return c(_);
    }
    function c_(e, _, n) {
        return t(e).has(l(_, n));
    }
    function f_(e) {
        return t(e).height;
    }
    function a_(e) {
        return t(e).height;
    }
    function i_(e) {
        let _;
        try {
            _ = t(e) instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function u_(e) {
        let _;
        try {
            _ = t(e) instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function g_(e) {
        let _;
        try {
            _ = t(e) instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function b_(e) {
        let _;
        try {
            _ = t(e) instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function s_(e) {
        let _;
        try {
            _ = t(e) instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function d_(e) {
        let _;
        try {
            _ = t(e) instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function w_(e) {
        let _;
        try {
            _ = t(e) instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function m_(e) {
        return Array.isArray(t(e));
    }
    function l_(e, _) {
        const n = t(_).label, r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function p_(e) {
        return t(e).length;
    }
    function x_(e) {
        return t(e).length;
    }
    function h_(e) {
        return t(e).length;
    }
    function y_(e) {
        const _ = t(e).limits;
        return c(_);
    }
    function B_(e) {
        const _ = t(e).limits;
        return c(_);
    }
    function S_(e) {
        return t(e).lineNum;
    }
    function I_(e) {
        const _ = t(e).lost;
        return c(_);
    }
    function T_(e, _, n, r) {
        const o = t(e).mapAsync(_ >>> 0, n, r);
        return c(o);
    }
    function P_(e) {
        return t(e).maxBindGroups;
    }
    function k_(e) {
        return t(e).maxBindingsPerBindGroup;
    }
    function C_(e) {
        return t(e).maxBufferSize;
    }
    function G_(e) {
        return t(e).maxColorAttachmentBytesPerSample;
    }
    function A_(e) {
        return t(e).maxColorAttachments;
    }
    function v_(e) {
        return t(e).maxComputeInvocationsPerWorkgroup;
    }
    function D_(e) {
        return t(e).maxComputeWorkgroupSizeX;
    }
    function O_(e) {
        return t(e).maxComputeWorkgroupSizeY;
    }
    function L_(e) {
        return t(e).maxComputeWorkgroupSizeZ;
    }
    function W_(e) {
        return t(e).maxComputeWorkgroupStorageSize;
    }
    function z_(e) {
        return t(e).maxComputeWorkgroupsPerDimension;
    }
    function E_(e) {
        return t(e).maxDynamicStorageBuffersPerPipelineLayout;
    }
    function j_(e) {
        return t(e).maxDynamicUniformBuffersPerPipelineLayout;
    }
    function V_(e) {
        return t(e).maxInterStageShaderComponents;
    }
    function U_(e) {
        return t(e).maxSampledTexturesPerShaderStage;
    }
    function F_(e) {
        return t(e).maxSamplersPerShaderStage;
    }
    function R_(e) {
        return t(e).maxStorageBufferBindingSize;
    }
    function q_(e) {
        return t(e).maxStorageBuffersPerShaderStage;
    }
    function M_(e) {
        return t(e).maxStorageTexturesPerShaderStage;
    }
    function $_(e) {
        return t(e).maxTextureArrayLayers;
    }
    function N_(e) {
        return t(e).maxTextureDimension1D;
    }
    function Q_(e) {
        return t(e).maxTextureDimension2D;
    }
    function X_(e) {
        return t(e).maxTextureDimension3D;
    }
    function Y_(e) {
        return t(e).maxUniformBufferBindingSize;
    }
    function H_(e) {
        return t(e).maxUniformBuffersPerShaderStage;
    }
    function Z_(e) {
        return t(e).maxVertexAttributes;
    }
    function J_(e) {
        return t(e).maxVertexBufferArrayStride;
    }
    function K_(e) {
        return t(e).maxVertexBuffers;
    }
    function et(e, _) {
        const n = t(_).message, r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function _t(e, _) {
        const n = t(_).message, r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function tt(e, _) {
        const n = t(_).message, r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function nt(e) {
        const _ = t(e).messages;
        return c(_);
    }
    function rt(e) {
        return t(e).minStorageBufferOffsetAlignment;
    }
    function ot(e) {
        return t(e).minUniformBufferOffsetAlignment;
    }
    function ct(e) {
        const _ = t(e).navigator;
        return c(_);
    }
    function ft(e) {
        const _ = t(e).navigator;
        return c(_);
    }
    function at() {
        const e = new Error;
        return c(e);
    }
    function it() {
        const e = new Object;
        return c(e);
    }
    function ut(e, _) {
        const n = new Uint8Array(O(e, _));
        return c(n);
    }
    function gt(e, _) {
        try {
            var n = {
                a: e,
                b: _
            }, r = (i, u)=>{
                const b = n.a;
                n.a = 0;
                try {
                    return Wn(b, n.b, i, u);
                } finally{
                    n.a = b;
                }
            };
            const o = new Promise(r);
            return c(o);
        } finally{
            n.a = n.b = 0;
        }
    }
    function bt() {
        const e = new Array;
        return c(e);
    }
    function st(e, _, n) {
        const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
        return c(r);
    }
    function dt() {
        return Date.now();
    }
    function wt(e) {
        return t(e).offset;
    }
    function mt() {
        return p(function(e, _) {
            const n = JSON.parse(l(e, _));
            return c(n);
        }, arguments);
    }
    function lt(e) {
        const _ = t(e).popErrorScope();
        return c(_);
    }
    function pt(e, _, n) {
        Uint8Array.prototype.set.call(O(e, _), t(n));
    }
    function xt(e, _) {
        t(e).pushErrorScope(jn[_]);
    }
    function ht(e, _) {
        return t(e).push(t(_));
    }
    function yt() {
        return p(function(e, _, n) {
            const r = t(e).querySelectorAll(l(_, n));
            return c(r);
        }, arguments);
    }
    function Bt(e) {
        const _ = t(e).queueMicrotask;
        return c(_);
    }
    function St(e) {
        queueMicrotask(t(e));
    }
    function It(e) {
        const _ = t(e).queue;
        return c(_);
    }
    function Tt(e) {
        const _ = t(e).reason;
        return (En.indexOf(_) + 1 || 3) - 1;
    }
    function Pt(e, _) {
        const n = t(e).requestAdapter(t(_));
        return c(n);
    }
    function kt(e, _) {
        const n = (t(_)?.requiredLimits && delete t(_).requiredLimits.maxInterStageShaderComponents, t(e).requestDevice(t(_)));
        return c(n);
    }
    function Ct(e, _, n, r, o, i) {
        t(e).resolveQuerySet(t(_), n >>> 0, r >>> 0, t(o), i >>> 0);
    }
    function Gt(e) {
        const _ = Promise.resolve(t(e));
        return c(_);
    }
    function At(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function vt(e, _, n, r, o, i, u) {
        t(e).setBindGroup(_ >>> 0, t(n), D(r, o), i, u >>> 0);
    }
    function Dt(e, _, n, r, o, i, u) {
        t(e).setBindGroup(_ >>> 0, t(n), D(r, o), i, u >>> 0);
    }
    function Ot(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function Lt(e, _, n, r, o, i, u) {
        t(e).setBindGroup(_ >>> 0, t(n), D(r, o), i, u >>> 0);
    }
    function Wt(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function zt(e, _) {
        t(e).setBlendConstant(t(_));
    }
    function Et(e, _, n, r, o) {
        t(e).setIndexBuffer(t(_), G[n], r, o);
    }
    function jt(e, _, n, r) {
        t(e).setIndexBuffer(t(_), G[n], r);
    }
    function Vt(e, _, n, r) {
        t(e).setIndexBuffer(t(_), G[n], r);
    }
    function Ut(e, _, n, r, o) {
        t(e).setIndexBuffer(t(_), G[n], r, o);
    }
    function Ft(e, _) {
        t(e).setPipeline(t(_));
    }
    function Rt(e, _) {
        t(e).setPipeline(t(_));
    }
    function qt(e, _) {
        t(e).setPipeline(t(_));
    }
    function Mt(e, _, n, r, o) {
        t(e).setScissorRect(_ >>> 0, n >>> 0, r >>> 0, o >>> 0);
    }
    function $t(e, _) {
        t(e).setStencilReference(_ >>> 0);
    }
    function Nt(e, _, n, r, o) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, o);
    }
    function Qt(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function Xt(e, _, n, r, o) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, o);
    }
    function Yt(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function Ht(e, _, n, r, o, i, u) {
        t(e).setViewport(_, n, r, o, i, u);
    }
    function Zt() {
        return p(function(e, _, n) {
            return Reflect.set(t(e), t(_), t(n));
        }, arguments);
    }
    function Jt(e, _, n) {
        t(e).set(t(_), n >>> 0);
    }
    function Kt(e, _) {
        t(e).height = _ >>> 0;
    }
    function en(e, _) {
        t(e).height = _ >>> 0;
    }
    function _n(e, _) {
        t(e).onuncapturederror = t(_);
    }
    function tn(e, _) {
        t(e).width = _ >>> 0;
    }
    function nn(e, _) {
        t(e).width = _ >>> 0;
    }
    function rn(e) {
        return t(e).size;
    }
    function on(e, _) {
        const n = t(_).stack, r = m(n, f.__wbindgen_export, f.__wbindgen_export2), o = d;
        g().setInt32(e + 4, o, !0), g().setInt32(e + 0, r, !0);
    }
    function cn() {
        const e = typeof global > "u" ? null : global;
        return s(e) ? 0 : c(e);
    }
    function fn() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return s(e) ? 0 : c(e);
    }
    function an() {
        const e = typeof self > "u" ? null : self;
        return s(e) ? 0 : c(e);
    }
    function un() {
        const e = typeof window > "u" ? null : window;
        return s(e) ? 0 : c(e);
    }
    function gn(e, _) {
        t(e).submit(t(_));
    }
    function bn(e, _) {
        const n = t(e).then(t(_));
        return c(n);
    }
    function sn(e, _) {
        const n = t(e).then(t(_));
        return c(n);
    }
    function dn(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return c(r);
    }
    function wn(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return c(r);
    }
    function mn(e) {
        const _ = t(e).type;
        return (zn.indexOf(_) + 1 || 4) - 1;
    }
    function ln(e) {
        t(e).unmap();
    }
    function pn(e) {
        return t(e).usage;
    }
    function xn(e) {
        const _ = t(e).valueOf();
        return c(_);
    }
    function hn(e) {
        return t(e).width;
    }
    function yn(e) {
        return t(e).width;
    }
    function Bn(e, _, n, r, o, i) {
        t(e).writeBuffer(t(_), n, t(r), o, i);
    }
    function Sn(e, _, n, r, o) {
        t(e).writeTexture(t(_), t(n), t(r), t(o));
    }
    function In(e, _) {
        const n = L(e, _, f.__wasm_bindgen_func_elem_1315, Ln);
        return c(n);
    }
    function Tn(e, _) {
        const n = L(e, _, f.__wasm_bindgen_func_elem_396, Dn);
        return c(n);
    }
    function Pn(e, _) {
        const n = L(e, _, f.__wasm_bindgen_func_elem_396, On);
        return c(n);
    }
    function kn(e) {
        return c(e);
    }
    function Cn(e, _) {
        const n = O(e, _);
        return c(n);
    }
    function Gn(e, _) {
        const n = l(e, _);
        return c(n);
    }
    function An(e) {
        const _ = t(e);
        return c(_);
    }
    function vn(e) {
        h(e);
    }
    function Dn(e, _, n) {
        f.__wasm_bindgen_func_elem_441(e, _, c(n));
    }
    function On(e, _, n) {
        f.__wasm_bindgen_func_elem_441_2(e, _, c(n));
    }
    function Ln(e, _, n) {
        try {
            const i = f.__wbindgen_add_to_stack_pointer(-16);
            f.__wasm_bindgen_func_elem_1771(i, e, _, c(n));
            var r = g().getInt32(i + 0, !0), o = g().getInt32(i + 4, !0);
            if (o) throw h(r);
        } finally{
            f.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Wn(e, _, n, r) {
        f.__wasm_bindgen_func_elem_1783(e, _, c(n), c(r));
    }
    const zn = [
        "error",
        "warning",
        "info"
    ], En = [
        "unknown",
        "destroyed"
    ], jn = [
        "validation",
        "out-of-memory",
        "internal"
    ], G = [
        "uint16",
        "uint32"
    ], Vn = [
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
    ], W = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>f.__wbg_gpugameoflife_free(e >>> 0, 1));
    function c(e) {
        S === w.length && w.push(w.length + 1);
        const _ = S;
        return S = w[_], w[_] = e, _;
    }
    const z = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function v(e) {
        const _ = typeof e;
        if (_ == "number" || _ == "boolean" || e == null) return `${e}`;
        if (_ == "string") return `"${e}"`;
        if (_ == "symbol") {
            const o = e.description;
            return o == null ? "Symbol" : `Symbol(${o})`;
        }
        if (_ == "function") {
            const o = e.name;
            return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
        }
        if (Array.isArray(e)) {
            const o = e.length;
            let i = "[";
            o > 0 && (i += v(e[0]));
            for(let u = 1; u < o; u++)i += ", " + v(e[u]);
            return i += "]", i;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n && n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
    }
    function Un(e) {
        e < 1028 || (w[e] = S, S = e);
    }
    function D(e, _) {
        return e = e >>> 0, Fn().subarray(e / 4, e / 4 + _);
    }
    function O(e, _) {
        return e = e >>> 0, B().subarray(e / 1, e / 1 + _);
    }
    let x = null;
    function g() {
        return (x === null || x.buffer.detached === !0 || x.buffer.detached === void 0 && x.buffer !== f.memory.buffer) && (x = new DataView(f.memory.buffer)), x;
    }
    function l(e, _) {
        return e = e >>> 0, qn(e, _);
    }
    let P = null;
    function Fn() {
        return (P === null || P.byteLength === 0) && (P = new Uint32Array(f.memory.buffer)), P;
    }
    let k = null;
    function B() {
        return (k === null || k.byteLength === 0) && (k = new Uint8Array(f.memory.buffer)), k;
    }
    function t(e) {
        return w[e];
    }
    function p(e, _) {
        try {
            return e.apply(this, _);
        } catch (n) {
            f.__wbindgen_export3(c(n));
        }
    }
    let w = new Array(1024).fill(void 0);
    w.push(void 0, null, !0, !1);
    let S = w.length;
    function s(e) {
        return e == null;
    }
    function L(e, _, n, r) {
        const o = {
            a: e,
            b: _,
            cnt: 1,
            dtor: n
        }, i = (...u)=>{
            o.cnt++;
            const b = o.a;
            o.a = 0;
            try {
                return r(b, o.b, ...u);
            } finally{
                o.a = b, i._wbg_cb_unref();
            }
        };
        return i._wbg_cb_unref = ()=>{
            --o.cnt === 0 && (o.dtor(o.a, o.b), o.a = 0, z.unregister(o));
        }, z.register(i, o, o), i;
    }
    function m(e, _, n) {
        if (n === void 0) {
            const b = I.encode(e), y = _(b.length, 1) >>> 0;
            return B().subarray(y, y + b.length).set(b), d = b.length, y;
        }
        let r = e.length, o = _(r, 1) >>> 0;
        const i = B();
        let u = 0;
        for(; u < r; u++){
            const b = e.charCodeAt(u);
            if (b > 127) break;
            i[o + u] = b;
        }
        if (u !== r) {
            u !== 0 && (e = e.slice(u)), o = n(o, r, r = u + e.length * 3, 1) >>> 0;
            const b = B().subarray(o + u, o + r), y = I.encodeInto(e, b);
            u += y.written, o = n(o, r, u, 1) >>> 0;
        }
        return d = u, o;
    }
    function h(e) {
        const _ = t(e);
        return Un(e), _;
    }
    let C = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    C.decode();
    const Rn = 2146435072;
    let A = 0;
    function qn(e, _) {
        return A += _, A >= Rn && (C = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), C.decode(), A = _), C.decode(B().subarray(e, e + _));
    }
    const I = new TextEncoder;
    "encodeInto" in I || (I.encodeInto = function(e, _) {
        const n = I.encode(e);
        return _.set(n), {
            read: e.length,
            written: n.length
        };
    });
    let d = 0, f;
    function Mn(e) {
        f = e;
    }
    URL = globalThis.URL;
    const a = await E({
        "./game_of_life_gpu_bg.js": {
            __wbindgen_object_drop_ref: vn,
            __wbg_gpugameoflife_new: o_,
            __wbg_new_typed_aaaeaf29cf802876: gt,
            __wbg_call_2d781c1f4d5c0ef8: K,
            __wbg_new_227d7c05414eb861: at,
            __wbg_stack_3b0d974bbf31e44f: on,
            __wbg_error_a6fa202b58aa1cd3: je,
            __wbg_offset_164492575e959c94: wt,
            __wbg_length_87e0297027dd7802: p_,
            __wbg_lineNum_24517b98f306fcae: S_,
            __wbg_gpu_d9721d200584e919: r_,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: s_,
            __wbg_instanceof_Object_be1962063fcc0c9f: d_,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: u_,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: b_,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: g_,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: i_,
            __wbg_limits_5b3783fcc0d36428: y_,
            __wbg_limits_becc24c879d87717: B_,
            __wbg_destroy_50767c0458f7c8d1: ye,
            __wbg_destroy_80182ff6e496228e: Be,
            __wbg_features_30a76d141781ad80: Ue,
            __wbg_end_54134488dbc5b7a9: We,
            __wbg_destroy_a2c0702c5d1269b5: Se,
            __wbg_features_fdbd3daed26aa468: Fe,
            __wbg_end_57a2746c247f499a: ze,
            __wbg_draw_57caf8f0bc1ea050: Oe,
            __wbg_pushErrorScope_72e651b0f8f64c0e: xt,
            __wbg_drawIndexed_9c9719597507e735: Ae,
            __wbg_setPipeline_f2cf83769bb33769: qt,
            __wbg_setViewport_94128a2b1a708040: Ht,
            __wbg_setPipeline_481f34ae14c49d67: Ft,
            __wbg_drawIndirect_73df189881970a43: ve,
            __wbg_draw_ce5e8b8ad56571cb: Le,
            __wbg_setScissorRect_0578b1de90caf434: Mt,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Te,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: Ct,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: ke,
            __wbg_setStencilReference_7616273572b1075e: $t,
            __wbg_drawIndexed_55f6bf3bda0212ad: Ge,
            __wbg_setPipeline_723820e1c5cc61e7: Rt,
            __wbg_drawIndirect_a2f7c719957f8ec9: De,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: ne,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Ie,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: Ce,
            __wbg_error_2acb88afe0ad9a3e: Ee,
            __wbg_valueOf_5c6da6c9a85f34dc: xn,
            __wbg_getMappedRange_11ec4cfce4df1e72: Ke,
            __wbg_message_f762db05c1294eca: tt,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: oe,
            __wbg_writeBuffer_b5e6e8f3f93629bc: Bn,
            __wbg_writeTexture_57e41dd94bac65c4: Sn,
            __wbg_submit_60f2469dc00130cc: gn,
            __wbg_mapAsync_8d0ffc031e86e9a0: T_,
            __wbg_size_1dfbf7241f9df1cc: rn,
            __wbg_unmap_4aa38f8c5283cc1d: ln,
            __wbg_usage_ee2982f59567c06f: pn,
            __wbg_createBuffer_e3f8b2bd8b492498: ue,
            __wbg_createTexture_1a3ebeb1ddd7a035: xe,
            __wbg_popErrorScope_2869a89dd4626f0c: lt,
            __wbg_createQuerySet_6050df2adcb1f167: de,
            __wbg_createBindGroup_876adbf7e329ce2e: ie,
            __wbg_createShaderModule_912a19a8ccc2aa1a: pe,
            __wbg_set_onuncapturederror_729c2e42c36923f4: _n,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: se,
            __wbg_createRenderPipeline_921034ccba195ffe: me,
            __wbg_createComputePipeline_6794bf24c6c03583: be,
            __wbg_createBindGroupLayout_e37f9323c278f93f: ae,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: we,
            __wbg_createSampler_cb4137c4e97c7098: le,
            __wbg_createCommandEncoder_e617922978f8b4de: ge,
            __wbg_lost_2c34651e3317be8b: I_,
            __wbg_queue_6b07ccdd49a6ba90: It,
            __wbg_requestDevice_6130c3ba10d633f9: kt,
            __wbg_createView_c227b9af7bd5f441: he,
            __wbindgen_object_clone_ref: An,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Ye,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Je,
            __wbg_configure_6e1ccd3ac31b721c: te,
            __wbg_beginRenderPass_9a7bf53d588737dc: Z,
            __wbg_clearBuffer_b08b15b7ee3c9d57: ee,
            __wbg_finish_35be15c58b55a95b: Re,
            __wbg_clearBuffer_f24f8de43db597ec: _e,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: H,
            __wbg_copyBufferToTexture_48aa78a412b2a467: re,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: ce,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: fe,
            __wbg_label_cdc2b7a875dc5123: l_,
            __wbg_finish_41491ca602373cde: qe,
            __wbg_reason_d7f4ddcad86f8d99: Tt,
            __wbg_message_1b27ea1ad3998a9f: et,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Xe,
            __wbg_messages_4e98c7e63c5efe7b: nt,
            __wbg_getBindGroupLayout_aba26df848b4322d: Qe,
            __wbg_maxBindGroups_5d3409c14d2756b5: P_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: C_,
            __wbg_maxVertexBuffers_e5cf174a3497d472: K_,
            __wbg_maxColorAttachments_378f5fb1c453321d: A_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: Z_,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: $_,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: N_,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: Q_,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: X_,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: k_,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: D_,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: O_,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: L_,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: F_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: J_,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: R_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: Y_,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: V_,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: W_,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: rt,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: ot,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: z_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: q_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: H_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: G_,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: v_,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: U_,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: M_,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: E_,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: j_,
            __wbg_setBindGroup_f930832baeb4279b: Wt,
            __wbg_executeBundles_2905636f81aabf99: Ve,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: jt,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: Qt,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Ut,
            __wbg_setVertexBuffer_54536e0e73bfc91e: Nt,
            __wbg_setBlendConstant_257274277b0e3153: zt,
            __wbg_setBindGroup_f4d552dcef65a491: Lt,
            __wbg_has_2184fc4b845f2b5f: c_,
            __wbg_type_4b0a304ebc25e195: mn,
            __wbg_message_a77e1a9202609622: _t,
            __wbg_setBindGroup_9877b57492cb7e1c: Ot,
            __wbg_setBindGroup_8d384b1c5ed329f4: Dt,
            __wbg_setBindGroup_1602c955be9b2eaa: At,
            __wbg_finish_eb06372cc93f8d50: Me,
            __wbg_setIndexBuffer_7e208bb69310ed01: Vt,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Yt,
            __wbg_setIndexBuffer_4219294fa3e2d59b: Et,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Xt,
            __wbg_setBindGroup_6149584f04998372: vt,
            __wbg_finish_ee515f526784acd5: $e,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: e_,
            __wbg_requestAdapter_e4b32f2647c66726: Pt,
            __wbg_Window_06e90eea4c7df280: V,
            __wbg_WorkerGlobalScope_defda269b75e179a: U,
            __wbg_get_a8ee5c45dabc1b3b: t_,
            __wbg_push_e87b0e732085a946: ht,
            __wbg_length_b3416cf66a5452c8: x_,
            __wbg_new_typed_bccac67128ed885a: bt,
            __wbg_then_9e335f6dd892bc11: dn,
            __wbg_then_1d7a5273811a5cea: sn,
            __wbg_then_098abe61755d12f6: bn,
            __wbg_queueMicrotask_a082d78ce798393e: St,
            __wbg_queueMicrotask_0c399741342fb10f: Bt,
            __wbg_resolve_ae8d83246e5bcc12: Gt,
            __wbg_instanceof_Window_23e677d2c6843922: w_,
            __wbg_document_c0320cd4183c6d9b: Pe,
            __wbg_navigator_9cebf56f28aa719b: ft,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: yt,
            __wbg_get_c7546417fb0bec10: n_,
            __wbg_set_height_98a1a397672657e2: Kt,
            __wbg_getContext_a9236f98f1f7fe7c: He,
            __wbg_width_71d9d44b5e14c4b7: yn,
            __wbg_height_fb8c4164276f25fd: a_,
            __wbg_set_width_576343a4a7f2cf28: tn,
            __wbg_set_height_b6548a01bdcb689a: en,
            __wbg_getContext_f04bf8f22dcb2d53: Ze,
            __wbg_width_4d6fc7fecd877217: hn,
            __wbg_height_6568c4427c3b889d: f_,
            __wbg_set_width_c0fcaa2da53cd540: nn,
            __wbg_navigator_583ffd4fc14c0f7a: ct,
            __wbg_new_ab79df5bd7c26067: it,
            __wbg_length_ea16607d7b61445b: h_,
            __wbg_new_from_slice_22da9388ac046e50: ut,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: st,
            __wbg_set_e80615d7a9a43981: Jt,
            __wbg_buffer_60b8043cd926067d: J,
            __wbg_prototypesetcall_d62e5099504357e6: pt,
            __wbg_now_16f0c993d5dd6c27: dt,
            __wbg_parse_e9eddd2a82c706eb: mt,
            __wbg_from_4bdf88943703fd48: Ne,
            __wbg_isArray_33b91feb269ff46e: m_,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: fn,
            __wbg_static_accessor_SELF_f207c857566db248: an,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: cn,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: un,
            __wbg_then_bc59d1943397ca4e: wn,
            __wbg_get_3ef1eba1850ade27: __,
            __wbg_set_7eaa4f96924fd6b3: Zt,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: N,
            __wbg___wbindgen_throw_6ddd609b62940d55: X,
            __wbg___wbindgen_is_object_781bc9f159099513: M,
            __wbg___wbindgen_string_get_395e606bd0ee4427: Q,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: F,
            __wbg___wbindgen_is_function_3c846841762788c1: q,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: $,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: Y,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: R,
            __wbindgen_cast_0000000000000001: In,
            __wbindgen_cast_0000000000000002: Tn,
            __wbindgen_cast_0000000000000003: Pn,
            __wbindgen_cast_0000000000000004: kn,
            __wbindgen_cast_0000000000000005: Cn,
            __wbindgen_cast_0000000000000006: Gn
        }
    }, j), $n = a.memory, Nn = a.__wbg_gpugameoflife_free, Qn = a.gpugameoflife_flush_and_render, Xn = a.gpugameoflife_grid_pitch, Yn = a.gpugameoflife_init_device_request_ms, Hn = a.gpugameoflife_init_panel_ms, Zn = a.gpugameoflife_init_renderer_ms, Jn = a.gpugameoflife_init_seeding_ms, Kn = a.gpugameoflife_init_simulation_ms, er = a.gpugameoflife_last_compute_tick_ms, _r = a.gpugameoflife_last_or_edit_ms, tr = a.gpugameoflife_last_present_ms, nr = a.gpugameoflife_last_render_pass_ms, rr = a.gpugameoflife_last_reseed_ms, or = a.gpugameoflife_last_xor_edit_ms, cr = a.gpugameoflife_new, fr = a.gpugameoflife_new_offscreen, ar = a.gpugameoflife_padded_rows, ir = a.gpugameoflife_render_only, ur = a.gpugameoflife_resize, gr = a.gpugameoflife_set_camera, br = a.gpugameoflife_set_init_fade, sr = a.gpugameoflife_set_scroll, dr = a.gpugameoflife_set_theme_json, wr = a.gpugameoflife_set_transition, mr = a.gpugameoflife_set_zones_json, lr = a.gpugameoflife_tick_and_render, pr = a.gpugameoflife_timestamp_query_supported, xr = a.gpugameoflife_toggle_cell, hr = a.gpugameoflife_words_per_row, yr = a.gpugameoflife_world_cols, Br = a.gpugameoflife_world_rows, Sr = a.__wasm_bindgen_func_elem_1315, Ir = a.__wasm_bindgen_func_elem_396, Tr = a.__wasm_bindgen_func_elem_1771, Pr = a.__wasm_bindgen_func_elem_1783, kr = a.__wasm_bindgen_func_elem_441, Cr = a.__wasm_bindgen_func_elem_441_2, Gr = a.__wbindgen_export, Ar = a.__wbindgen_export2, vr = a.__wbindgen_export3, Dr = a.__wbindgen_export4, Or = a.__wbindgen_add_to_stack_pointer;
    var Lr = Object.freeze({
        __proto__: null,
        __wasm_bindgen_func_elem_1315: Sr,
        __wasm_bindgen_func_elem_1771: Tr,
        __wasm_bindgen_func_elem_1783: Pr,
        __wasm_bindgen_func_elem_396: Ir,
        __wasm_bindgen_func_elem_441: kr,
        __wasm_bindgen_func_elem_441_2: Cr,
        __wbg_gpugameoflife_free: Nn,
        __wbindgen_add_to_stack_pointer: Or,
        __wbindgen_export: Gr,
        __wbindgen_export2: Ar,
        __wbindgen_export3: vr,
        __wbindgen_export4: Dr,
        gpugameoflife_flush_and_render: Qn,
        gpugameoflife_grid_pitch: Xn,
        gpugameoflife_init_device_request_ms: Yn,
        gpugameoflife_init_panel_ms: Hn,
        gpugameoflife_init_renderer_ms: Zn,
        gpugameoflife_init_seeding_ms: Jn,
        gpugameoflife_init_simulation_ms: Kn,
        gpugameoflife_last_compute_tick_ms: er,
        gpugameoflife_last_or_edit_ms: _r,
        gpugameoflife_last_present_ms: tr,
        gpugameoflife_last_render_pass_ms: nr,
        gpugameoflife_last_reseed_ms: rr,
        gpugameoflife_last_xor_edit_ms: or,
        gpugameoflife_new: cr,
        gpugameoflife_new_offscreen: fr,
        gpugameoflife_padded_rows: ar,
        gpugameoflife_render_only: ir,
        gpugameoflife_resize: ur,
        gpugameoflife_set_camera: gr,
        gpugameoflife_set_init_fade: br,
        gpugameoflife_set_scroll: sr,
        gpugameoflife_set_theme_json: dr,
        gpugameoflife_set_transition: wr,
        gpugameoflife_set_zones_json: mr,
        gpugameoflife_tick_and_render: lr,
        gpugameoflife_timestamp_query_supported: pr,
        gpugameoflife_toggle_cell: xr,
        gpugameoflife_words_per_row: hr,
        gpugameoflife_world_cols: yr,
        gpugameoflife_world_rows: Br,
        memory: $n
    });
    Mn(Lr);
})();
export { T as GpuGameOfLife, __tla };
