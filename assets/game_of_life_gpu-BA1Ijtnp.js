let M, F;
let __tla = (async ()=>{
    var X = "/assets/game_of_life_gpu_bg-DRsrG5K6.wasm", Y = async (e = {}, _)=>{
        let n;
        if (_.startsWith("data:")) {
            const r = _.replace(/^data:.*?base64,/, "");
            let f;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") f = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const a = atob(r);
                f = new Uint8Array(a.length);
                for(let o = 0; o < a.length; o++)f[o] = a.charCodeAt(o);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(f, e);
        } else {
            const r = await fetch(_), f = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && f.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                const a = await r.arrayBuffer();
                n = await WebAssembly.instantiate(a, e);
            }
        }
        return n.instance.exports;
    };
    M = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const n = Object.create(M.prototype);
            return n.__wbg_ptr = _, N.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, N.unregister(this), _;
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
        init_device_request_ms() {
            return c.gpugameoflife_init_device_request_ms(this.__wbg_ptr);
        }
        init_panel_ms() {
            return c.gpugameoflife_init_panel_ms(this.__wbg_ptr);
        }
        init_renderer_ms() {
            return c.gpugameoflife_init_renderer_ms(this.__wbg_ptr);
        }
        init_seeding_ms() {
            return c.gpugameoflife_init_seeding_ms(this.__wbg_ptr);
        }
        init_simulation_ms() {
            return c.gpugameoflife_init_simulation_ms(this.__wbg_ptr);
        }
        last_compute_tick_ms() {
            try {
                const r = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_last_compute_tick_ms(r, this.__wbg_ptr);
                var _ = s().getInt32(r + 0, !0), n = s().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_or_edit_ms() {
            try {
                const r = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_last_or_edit_ms(r, this.__wbg_ptr);
                var _ = s().getInt32(r + 0, !0), n = s().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_present_ms() {
            return c.gpugameoflife_last_present_ms(this.__wbg_ptr);
        }
        last_render_pass_ms() {
            try {
                const r = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_last_render_pass_ms(r, this.__wbg_ptr);
                var _ = s().getInt32(r + 0, !0), n = s().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_reseed_ms() {
            return c.gpugameoflife_last_reseed_ms(this.__wbg_ptr);
        }
        last_xor_edit_ms() {
            try {
                const r = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_last_xor_edit_ms(r, this.__wbg_ptr);
                var _ = s().getInt32(r + 0, !0), n = s().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        static new(_, n, r) {
            const f = c.gpugameoflife_new(b(_), n, r);
            return B(f);
        }
        static new_offscreen(_, n, r) {
            const f = c.gpugameoflife_new_offscreen(b(_), n, r);
            return B(f);
        }
        padded_rows() {
            return c.gpugameoflife_padded_rows(this.__wbg_ptr) >>> 0;
        }
        render_only() {
            c.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, n) {
            c.gpugameoflife_resize(this.__wbg_ptr, _, n);
        }
        set_camera(_, n) {
            c.gpugameoflife_set_camera(this.__wbg_ptr, _, n);
        }
        set_init_fade(_) {
            c.gpugameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_scroll(_) {
            c.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_theme_json(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16), a = h(_, c.__wbindgen_export, c.__wbindgen_export2), o = y;
                c.gpugameoflife_set_theme_json(f, this.__wbg_ptr, a, o);
                var n = s().getInt32(f + 0, !0), r = s().getInt32(f + 4, !0);
                if (r) throw B(n);
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_transition(_) {
            c.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones_json(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16), a = h(_, c.__wbindgen_export, c.__wbindgen_export2), o = y;
                c.gpugameoflife_set_zones_json(f, this.__wbg_ptr, a, o);
                var n = s().getInt32(f + 0, !0), r = s().getInt32(f + 4, !0);
                if (r) throw B(n);
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        tick_and_render() {
            c.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        timestamp_query_supported() {
            return c.gpugameoflife_timestamp_query_supported(this.__wbg_ptr) !== 0;
        }
        toggle_cell(_, n) {
            c.gpugameoflife_toggle_cell(this.__wbg_ptr, _, n);
        }
        words_per_row() {
            return c.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
        world_cols() {
            return c.gpugameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return c.gpugameoflife_world_rows(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (M.prototype[Symbol.dispose] = M.prototype.free);
    F = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const n = Object.create(F.prototype);
            return n.__wbg_ptr = _, $.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, $.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            c.__wbg_webglgameoflife_free(_, 0);
        }
        free() {
            c.webglgameoflife_free(this.__wbg_ptr);
        }
        grid_pitch() {
            return c.webglgameoflife_grid_pitch(this.__wbg_ptr);
        }
        static new_offscreen(_, n) {
            const r = c.webglgameoflife_new_offscreen(b(_), n);
            return B(r);
        }
        render_only() {
            c.webglgameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, n) {
            c.webglgameoflife_resize(this.__wbg_ptr, _, n);
        }
        set_camera(_, n) {
            c.webglgameoflife_set_camera(this.__wbg_ptr, _, n);
        }
        set_init_fade(_) {
            c.webglgameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_theme_json(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16), a = h(_, c.__wbindgen_export, c.__wbindgen_export2), o = y;
                c.webglgameoflife_set_theme_json(f, this.__wbg_ptr, a, o);
                var n = s().getInt32(f + 0, !0), r = s().getInt32(f + 4, !0);
                if (r) throw B(n);
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_transition(_) {
            c.webglgameoflife_set_transition(this.__wbg_ptr, _);
        }
        tick_and_render() {
            c.webglgameoflife_tick_and_render(this.__wbg_ptr);
        }
        toggle_cell(_, n) {
            c.webglgameoflife_toggle_cell(this.__wbg_ptr, _, n);
        }
        world_cols() {
            return c.webglgameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return c.webglgameoflife_world_rows(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
    function Z(e) {
        const _ = t(e).Window;
        return b(_);
    }
    function J(e) {
        const _ = t(e).WorkerGlobalScope;
        return b(_);
    }
    function K(e) {
        const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
        return d(n) ? 16777215 : n ? 1 : 0;
    }
    function ee(e, _) {
        const n = q(t(_)), r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function _e(e) {
        return typeof t(e) == "function";
    }
    function te(e) {
        const _ = t(e);
        return typeof _ == "object" && _ !== null;
    }
    function ne(e) {
        return t(e) === void 0;
    }
    function re(e, _) {
        const n = t(_), r = typeof n == "number" ? n : void 0;
        s().setFloat64(e + 8, d(r) ? 0 : r, !0), s().setInt32(e + 0, !d(r), !0);
    }
    function fe(e, _) {
        const n = t(_), r = typeof n == "string" ? n : void 0;
        var f = d(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), a = y;
        s().setInt32(e + 4, a, !0), s().setInt32(e + 0, f, !0);
    }
    function ae(e, _) {
        throw new Error(p(e, _));
    }
    function be(e) {
        t(e)._wbg_cb_unref();
    }
    function ce(e, _) {
        t(e).activeTexture(_ >>> 0);
    }
    function oe(e, _) {
        t(e).activeTexture(_ >>> 0);
    }
    function ie(e, _, n) {
        t(e).attachShader(t(_), t(n));
    }
    function ue(e, _, n) {
        t(e).attachShader(t(_), t(n));
    }
    function ge(e, _) {
        const n = t(e).beginComputePass(t(_));
        return b(n);
    }
    function de(e, _, n) {
        t(e).beginQuery(_ >>> 0, t(n));
    }
    function se(e, _) {
        const n = t(e).beginRenderPass(t(_));
        return b(n);
    }
    function we(e, _, n, r, f) {
        t(e).bindAttribLocation(t(_), n >>> 0, p(r, f));
    }
    function me(e, _, n, r, f) {
        t(e).bindAttribLocation(t(_), n >>> 0, p(r, f));
    }
    function le(e, _, n, r, f, a) {
        t(e).bindBufferRange(_ >>> 0, n >>> 0, t(r), f, a);
    }
    function pe(e, _, n) {
        t(e).bindBuffer(_ >>> 0, t(n));
    }
    function xe(e, _, n) {
        t(e).bindBuffer(_ >>> 0, t(n));
    }
    function ye(e, _, n) {
        t(e).bindFramebuffer(_ >>> 0, t(n));
    }
    function he(e, _, n) {
        t(e).bindFramebuffer(_ >>> 0, t(n));
    }
    function Se(e, _, n) {
        t(e).bindRenderbuffer(_ >>> 0, t(n));
    }
    function Ie(e, _, n) {
        t(e).bindRenderbuffer(_ >>> 0, t(n));
    }
    function Be(e, _, n) {
        t(e).bindSampler(_ >>> 0, t(n));
    }
    function ve(e, _, n) {
        t(e).bindTexture(_ >>> 0, t(n));
    }
    function Ae(e, _, n) {
        t(e).bindTexture(_ >>> 0, t(n));
    }
    function Pe(e, _) {
        t(e).bindVertexArrayOES(t(_));
    }
    function De(e, _) {
        t(e).bindVertexArray(t(_));
    }
    function Te(e, _, n, r, f) {
        t(e).blendColor(_, n, r, f);
    }
    function ke(e, _, n, r, f) {
        t(e).blendColor(_, n, r, f);
    }
    function Me(e, _, n) {
        t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
    }
    function Fe(e, _, n) {
        t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
    }
    function Le(e, _) {
        t(e).blendEquation(_ >>> 0);
    }
    function Ce(e, _) {
        t(e).blendEquation(_ >>> 0);
    }
    function Ee(e, _, n, r, f) {
        t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Ge(e, _, n, r, f) {
        t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Re(e, _, n) {
        t(e).blendFunc(_ >>> 0, n >>> 0);
    }
    function Oe(e, _, n) {
        t(e).blendFunc(_ >>> 0, n >>> 0);
    }
    function Ve(e, _, n, r, f, a, o, u, g, w, x) {
        t(e).blitFramebuffer(_, n, r, f, a, o, u, g, w >>> 0, x >>> 0);
    }
    function We(e, _, n, r) {
        t(e).bufferData(_ >>> 0, n, r >>> 0);
    }
    function ze(e, _, n, r) {
        t(e).bufferData(_ >>> 0, t(n), r >>> 0);
    }
    function Ue(e, _, n, r) {
        t(e).bufferData(_ >>> 0, t(n), r >>> 0);
    }
    function qe(e, _, n, r) {
        t(e).bufferData(_ >>> 0, n, r >>> 0);
    }
    function je(e, _, n, r) {
        t(e).bufferSubData(_ >>> 0, n, t(r));
    }
    function Qe(e, _, n, r) {
        t(e).bufferSubData(_ >>> 0, n, t(r));
    }
    function Ne(e) {
        const _ = t(e).buffer;
        return b(_);
    }
    function $e() {
        return m(function(e, _, n) {
            const r = t(e).call(t(_), t(n));
            return b(r);
        }, arguments);
    }
    function He(e, _, n) {
        t(e).clearBuffer(t(_), n);
    }
    function Xe(e, _, n, r) {
        t(e).clearBuffer(t(_), n, r);
    }
    function Ye(e, _, n, r, f) {
        t(e).clearBufferfv(_ >>> 0, n, l(r, f));
    }
    function Ze(e, _, n, r, f) {
        t(e).clearBufferiv(_ >>> 0, n, v(r, f));
    }
    function Je(e, _, n, r, f) {
        t(e).clearBufferuiv(_ >>> 0, n, A(r, f));
    }
    function Ke(e, _) {
        t(e).clearDepth(_);
    }
    function e_(e, _) {
        t(e).clearDepth(_);
    }
    function __(e, _) {
        t(e).clearStencil(_);
    }
    function t_(e, _) {
        t(e).clearStencil(_);
    }
    function n_(e, _) {
        t(e).clear(_ >>> 0);
    }
    function r_(e, _) {
        t(e).clear(_ >>> 0);
    }
    function f_(e, _, n, r) {
        return t(e).clientWaitSync(t(_), n >>> 0, r >>> 0);
    }
    function a_(e, _, n, r, f) {
        t(e).colorMask(_ !== 0, n !== 0, r !== 0, f !== 0);
    }
    function b_(e, _, n, r, f) {
        t(e).colorMask(_ !== 0, n !== 0, r !== 0, f !== 0);
    }
    function c_(e, _) {
        t(e).compileShader(t(_));
    }
    function o_(e, _) {
        t(e).compileShader(t(_));
    }
    function i_(e, _, n, r, f, a, o, u, g) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, t(g));
    }
    function u_(e, _, n, r, f, a, o, u, g) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, t(g));
    }
    function g_(e, _, n, r, f, a, o, u, g, w) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g, w);
    }
    function d_(e, _, n, r, f, a, o, u, g, w, x, S) {
        t(e).compressedTexSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x, S);
    }
    function s_(e, _, n, r, f, a, o, u, g, w, x) {
        t(e).compressedTexSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, t(x));
    }
    function w_(e, _) {
        t(e).configure(t(_));
    }
    function m_(e, _, n, r, f, a) {
        t(e).copyBufferSubData(_ >>> 0, n >>> 0, r, f, a);
    }
    function l_(e, _, n, r, f, a) {
        t(e).copyBufferToBuffer(t(_), n, t(r), f, a);
    }
    function p_(e, _, n, r) {
        t(e).copyBufferToTexture(t(_), t(n), t(r));
    }
    function x_(e, _, n, r) {
        t(e).copyExternalImageToTexture(t(_), t(n), t(r));
    }
    function y_(e, _, n, r, f, a, o, u, g) {
        t(e).copyTexSubImage2D(_ >>> 0, n, r, f, a, o, u, g);
    }
    function h_(e, _, n, r, f, a, o, u, g) {
        t(e).copyTexSubImage2D(_ >>> 0, n, r, f, a, o, u, g);
    }
    function S_(e, _, n, r, f, a, o, u, g, w) {
        t(e).copyTexSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w);
    }
    function I_(e, _, n, r) {
        t(e).copyTextureToBuffer(t(_), t(n), t(r));
    }
    function B_(e, _, n, r) {
        t(e).copyTextureToTexture(t(_), t(n), t(r));
    }
    function v_(e, _) {
        const n = t(e).createBindGroupLayout(t(_));
        return b(n);
    }
    function A_(e, _) {
        const n = t(e).createBindGroup(t(_));
        return b(n);
    }
    function P_(e) {
        const _ = t(e).createBuffer();
        return d(_) ? 0 : b(_);
    }
    function D_(e) {
        const _ = t(e).createBuffer();
        return d(_) ? 0 : b(_);
    }
    function T_(e, _) {
        const n = t(e).createBuffer(t(_));
        return b(n);
    }
    function k_(e, _) {
        const n = t(e).createCommandEncoder(t(_));
        return b(n);
    }
    function M_(e, _) {
        const n = t(e).createComputePipeline(t(_));
        return b(n);
    }
    function F_(e) {
        const _ = t(e).createFramebuffer();
        return d(_) ? 0 : b(_);
    }
    function L_(e) {
        const _ = t(e).createFramebuffer();
        return d(_) ? 0 : b(_);
    }
    function C_(e, _) {
        const n = t(e).createPipelineLayout(t(_));
        return b(n);
    }
    function E_(e) {
        const _ = t(e).createProgram();
        return d(_) ? 0 : b(_);
    }
    function G_(e) {
        const _ = t(e).createProgram();
        return d(_) ? 0 : b(_);
    }
    function R_(e, _) {
        const n = t(e).createQuerySet(t(_));
        return b(n);
    }
    function O_(e) {
        const _ = t(e).createQuery();
        return d(_) ? 0 : b(_);
    }
    function V_(e, _) {
        const n = t(e).createRenderBundleEncoder(t(_));
        return b(n);
    }
    function W_(e, _) {
        const n = t(e).createRenderPipeline(t(_));
        return b(n);
    }
    function z_(e) {
        const _ = t(e).createRenderbuffer();
        return d(_) ? 0 : b(_);
    }
    function U_(e) {
        const _ = t(e).createRenderbuffer();
        return d(_) ? 0 : b(_);
    }
    function q_(e) {
        const _ = t(e).createSampler();
        return d(_) ? 0 : b(_);
    }
    function j_(e, _) {
        const n = t(e).createSampler(t(_));
        return b(n);
    }
    function Q_(e, _) {
        const n = t(e).createShaderModule(t(_));
        return b(n);
    }
    function N_(e, _) {
        const n = t(e).createShader(_ >>> 0);
        return d(n) ? 0 : b(n);
    }
    function $_(e, _) {
        const n = t(e).createShader(_ >>> 0);
        return d(n) ? 0 : b(n);
    }
    function H_(e, _) {
        const n = t(e).createTexture(t(_));
        return b(n);
    }
    function X_(e) {
        const _ = t(e).createTexture();
        return d(_) ? 0 : b(_);
    }
    function Y_(e) {
        const _ = t(e).createTexture();
        return d(_) ? 0 : b(_);
    }
    function Z_(e) {
        const _ = t(e).createVertexArrayOES();
        return d(_) ? 0 : b(_);
    }
    function J_(e) {
        const _ = t(e).createVertexArray();
        return d(_) ? 0 : b(_);
    }
    function K_(e, _) {
        const n = t(e).createView(t(_));
        return b(n);
    }
    function et(e, _) {
        t(e).cullFace(_ >>> 0);
    }
    function _t(e, _) {
        t(e).cullFace(_ >>> 0);
    }
    function tt(e, _) {
        t(e).deleteBuffer(t(_));
    }
    function nt(e, _) {
        t(e).deleteBuffer(t(_));
    }
    function rt(e, _) {
        t(e).deleteFramebuffer(t(_));
    }
    function ft(e, _) {
        t(e).deleteFramebuffer(t(_));
    }
    function at(e, _) {
        t(e).deleteProgram(t(_));
    }
    function bt(e, _) {
        t(e).deleteProgram(t(_));
    }
    function ct(e, _) {
        t(e).deleteQuery(t(_));
    }
    function ot(e, _) {
        t(e).deleteRenderbuffer(t(_));
    }
    function it(e, _) {
        t(e).deleteRenderbuffer(t(_));
    }
    function ut(e, _) {
        t(e).deleteSampler(t(_));
    }
    function gt(e, _) {
        t(e).deleteShader(t(_));
    }
    function dt(e, _) {
        t(e).deleteShader(t(_));
    }
    function st(e, _) {
        t(e).deleteSync(t(_));
    }
    function wt(e, _) {
        t(e).deleteTexture(t(_));
    }
    function mt(e, _) {
        t(e).deleteTexture(t(_));
    }
    function lt(e, _) {
        t(e).deleteVertexArrayOES(t(_));
    }
    function pt(e, _) {
        t(e).deleteVertexArray(t(_));
    }
    function xt(e, _) {
        t(e).depthFunc(_ >>> 0);
    }
    function yt(e, _) {
        t(e).depthFunc(_ >>> 0);
    }
    function ht(e, _) {
        t(e).depthMask(_ !== 0);
    }
    function St(e, _) {
        t(e).depthMask(_ !== 0);
    }
    function It(e, _, n) {
        t(e).depthRange(_, n);
    }
    function Bt(e, _, n) {
        t(e).depthRange(_, n);
    }
    function vt(e) {
        t(e).destroy();
    }
    function At(e) {
        t(e).destroy();
    }
    function Pt(e) {
        t(e).destroy();
    }
    function Dt(e, _) {
        t(e).disableVertexAttribArray(_ >>> 0);
    }
    function Tt(e, _) {
        t(e).disableVertexAttribArray(_ >>> 0);
    }
    function kt(e, _) {
        t(e).disable(_ >>> 0);
    }
    function Mt(e, _) {
        t(e).disable(_ >>> 0);
    }
    function Ft(e, _, n) {
        t(e).dispatchWorkgroupsIndirect(t(_), n);
    }
    function Lt(e, _, n, r) {
        t(e).dispatchWorkgroups(_ >>> 0, n >>> 0, r >>> 0);
    }
    function Ct(e) {
        const _ = t(e).document;
        return d(_) ? 0 : b(_);
    }
    function Et(e, _, n, r, f) {
        t(e).drawArraysInstancedANGLE(_ >>> 0, n, r, f);
    }
    function Gt(e, _, n, r, f) {
        t(e).drawArraysInstanced(_ >>> 0, n, r, f);
    }
    function Rt(e, _, n, r) {
        t(e).drawArrays(_ >>> 0, n, r);
    }
    function Ot(e, _, n, r) {
        t(e).drawArrays(_ >>> 0, n, r);
    }
    function Vt(e, _) {
        t(e).drawBuffersWEBGL(t(_));
    }
    function Wt(e, _) {
        t(e).drawBuffers(t(_));
    }
    function zt(e, _, n, r, f, a) {
        t(e).drawElementsInstancedANGLE(_ >>> 0, n, r >>> 0, f, a);
    }
    function Ut(e, _, n, r, f, a) {
        t(e).drawElementsInstanced(_ >>> 0, n, r >>> 0, f, a);
    }
    function qt(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function jt(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function Qt(e, _, n, r, f, a) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, f, a >>> 0);
    }
    function Nt(e, _, n, r, f, a) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, f, a >>> 0);
    }
    function $t(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function Ht(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function Xt(e, _, n, r, f) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Yt(e, _, n, r, f) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Zt(e, _) {
        t(e).enableVertexAttribArray(_ >>> 0);
    }
    function Jt(e, _) {
        t(e).enableVertexAttribArray(_ >>> 0);
    }
    function Kt(e, _) {
        t(e).enable(_ >>> 0);
    }
    function en(e, _) {
        t(e).enable(_ >>> 0);
    }
    function _n(e, _) {
        t(e).endQuery(_ >>> 0);
    }
    function tn(e) {
        t(e).end();
    }
    function nn(e) {
        t(e).end();
    }
    function rn(e) {
        const _ = t(e).error;
        return b(_);
    }
    function fn(e, _) {
        let n, r;
        try {
            n = e, r = _, console.error(p(e, _));
        } finally{
            c.__wbindgen_export4(n, r, 1);
        }
    }
    function an(e, _) {
        t(e).executeBundles(t(_));
    }
    function bn(e) {
        const _ = t(e).features;
        return b(_);
    }
    function cn(e) {
        const _ = t(e).features;
        return b(_);
    }
    function on(e, _, n) {
        const r = t(e).fenceSync(_ >>> 0, n >>> 0);
        return d(r) ? 0 : b(r);
    }
    function un(e, _) {
        const n = t(e).finish(t(_));
        return b(n);
    }
    function gn(e) {
        const _ = t(e).finish();
        return b(_);
    }
    function dn(e, _) {
        const n = t(e).finish(t(_));
        return b(n);
    }
    function sn(e) {
        const _ = t(e).finish();
        return b(_);
    }
    function wn(e, _, n, r, f) {
        t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(f));
    }
    function mn(e, _, n, r, f) {
        t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(f));
    }
    function ln(e, _, n, r, f, a) {
        t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(f), a);
    }
    function pn(e, _, n, r, f, a) {
        t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(f), a);
    }
    function xn(e, _, n, r, f, a) {
        t(e).framebufferTextureLayer(_ >>> 0, n >>> 0, t(r), f, a);
    }
    function yn(e, _, n, r, f, a, o) {
        t(e).framebufferTextureMultiviewOVR(_ >>> 0, n >>> 0, t(r), f, a, o);
    }
    function hn(e) {
        const _ = Array.from(t(e));
        return b(_);
    }
    function Sn(e, _) {
        t(e).frontFace(_ >>> 0);
    }
    function In(e, _) {
        t(e).frontFace(_ >>> 0);
    }
    function Bn(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return b(n);
    }
    function vn(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return b(n);
    }
    function An(e, _, n, r) {
        t(e).getBufferSubData(_ >>> 0, n, t(r));
    }
    function Pn(e) {
        const _ = t(e).getCompilationInfo();
        return b(_);
    }
    function Dn() {
        return m(function(e, _, n, r) {
            const f = t(e).getContext(p(_, n), t(r));
            return d(f) ? 0 : b(f);
        }, arguments);
    }
    function Tn() {
        return m(function(e, _, n, r) {
            const f = t(e).getContext(p(_, n), t(r));
            return d(f) ? 0 : b(f);
        }, arguments);
    }
    function kn() {
        return m(function(e, _, n) {
            const r = t(e).getContext(p(_, n));
            return d(r) ? 0 : b(r);
        }, arguments);
    }
    function Mn() {
        return m(function(e, _, n) {
            const r = t(e).getContext(p(_, n));
            return d(r) ? 0 : b(r);
        }, arguments);
    }
    function Fn(e) {
        const _ = t(e).getCurrentTexture();
        return b(_);
    }
    function Ln() {
        return m(function(e, _, n) {
            const r = t(e).getExtension(p(_, n));
            return d(r) ? 0 : b(r);
        }, arguments);
    }
    function Cn() {
        return m(function(e, _, n) {
            const r = t(e).getIndexedParameter(_ >>> 0, n >>> 0);
            return b(r);
        }, arguments);
    }
    function En(e, _, n) {
        const r = t(e).getMappedRange(_, n);
        return b(r);
    }
    function Gn() {
        return m(function(e, _) {
            const n = t(e).getParameter(_ >>> 0);
            return b(n);
        }, arguments);
    }
    function Rn() {
        return m(function(e, _) {
            const n = t(e).getParameter(_ >>> 0);
            return b(n);
        }, arguments);
    }
    function On(e) {
        const _ = t(e).getPreferredCanvasFormat();
        return (Vc.indexOf(_) + 1 || 96) - 1;
    }
    function Vn(e, _, n) {
        const r = t(_).getProgramInfoLog(t(n));
        var f = d(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), a = y;
        s().setInt32(e + 4, a, !0), s().setInt32(e + 0, f, !0);
    }
    function Wn(e, _, n) {
        const r = t(_).getProgramInfoLog(t(n));
        var f = d(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), a = y;
        s().setInt32(e + 4, a, !0), s().setInt32(e + 0, f, !0);
    }
    function zn(e, _, n) {
        const r = t(e).getProgramParameter(t(_), n >>> 0);
        return b(r);
    }
    function Un(e, _, n) {
        const r = t(e).getProgramParameter(t(_), n >>> 0);
        return b(r);
    }
    function qn(e, _, n) {
        const r = t(e).getQueryParameter(t(_), n >>> 0);
        return b(r);
    }
    function jn(e, _, n) {
        const r = t(_).getShaderInfoLog(t(n));
        var f = d(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), a = y;
        s().setInt32(e + 4, a, !0), s().setInt32(e + 0, f, !0);
    }
    function Qn(e, _, n) {
        const r = t(_).getShaderInfoLog(t(n));
        var f = d(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), a = y;
        s().setInt32(e + 4, a, !0), s().setInt32(e + 0, f, !0);
    }
    function Nn(e, _, n) {
        const r = t(e).getShaderParameter(t(_), n >>> 0);
        return b(r);
    }
    function $n(e, _, n) {
        const r = t(e).getShaderParameter(t(_), n >>> 0);
        return b(r);
    }
    function Hn(e) {
        const _ = t(e).getSupportedExtensions();
        return d(_) ? 0 : b(_);
    }
    function Xn(e) {
        const _ = t(e).getSupportedProfiles();
        return d(_) ? 0 : b(_);
    }
    function Yn(e, _, n) {
        const r = t(e).getSyncParameter(t(_), n >>> 0);
        return b(r);
    }
    function Zn(e, _, n, r) {
        return t(e).getUniformBlockIndex(t(_), p(n, r));
    }
    function Jn(e, _, n, r) {
        const f = t(e).getUniformLocation(t(_), p(n, r));
        return d(f) ? 0 : b(f);
    }
    function Kn(e, _, n, r) {
        const f = t(e).getUniformLocation(t(_), p(n, r));
        return d(f) ? 0 : b(f);
    }
    function er() {
        return m(function(e, _) {
            const n = Reflect.get(t(e), t(_));
            return b(n);
        }, arguments);
    }
    function _r(e, _) {
        const n = t(e)[_ >>> 0];
        return b(n);
    }
    function tr(e, _) {
        const n = t(e)[_ >>> 0];
        return d(n) ? 0 : b(n);
    }
    function nr(e, _) {
        const n = t(e)[_ >>> 0];
        return b(n);
    }
    function rr(e) {
        const _ = t(e).gpu;
        return b(_);
    }
    function fr(e) {
        const _ = M.__wrap(e);
        return b(_);
    }
    function ar(e, _, n) {
        return t(e).has(p(_, n));
    }
    function br(e) {
        return t(e).height;
    }
    function cr(e) {
        return t(e).height;
    }
    function or(e) {
        return t(e).height;
    }
    function ir(e, _, n) {
        return t(e).includes(t(_), n);
    }
    function ur(e) {
        let _;
        try {
            _ = t(e) instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function gr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function dr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function sr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function wr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function mr(e) {
        let _;
        try {
            _ = t(e) instanceof HTMLCanvasElement;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function lr(e) {
        let _;
        try {
            _ = t(e) instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function pr(e) {
        let _;
        try {
            _ = t(e) instanceof WebGL2RenderingContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function xr(e) {
        let _;
        try {
            _ = t(e) instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function yr() {
        return m(function(e, _, n) {
            t(e).invalidateFramebuffer(_ >>> 0, t(n));
        }, arguments);
    }
    function hr(e) {
        return Array.isArray(t(e));
    }
    function Sr(e, _) {
        return Object.is(t(e), t(_));
    }
    function Ir(e, _) {
        const n = t(_).label, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function Br(e) {
        return t(e).length;
    }
    function vr(e) {
        return t(e).length;
    }
    function Ar(e) {
        return t(e).length;
    }
    function Pr(e) {
        const _ = t(e).limits;
        return b(_);
    }
    function Dr(e) {
        const _ = t(e).limits;
        return b(_);
    }
    function Tr(e) {
        return t(e).lineNum;
    }
    function kr(e, _) {
        t(e).linkProgram(t(_));
    }
    function Mr(e, _) {
        t(e).linkProgram(t(_));
    }
    function Fr(e) {
        const _ = t(e).lost;
        return b(_);
    }
    function Lr(e, _, n, r) {
        const f = t(e).mapAsync(_ >>> 0, n, r);
        return b(f);
    }
    function Cr(e) {
        return t(e).maxBindGroups;
    }
    function Er(e) {
        return t(e).maxBindingsPerBindGroup;
    }
    function Gr(e) {
        return t(e).maxBufferSize;
    }
    function Rr(e) {
        return t(e).maxColorAttachmentBytesPerSample;
    }
    function Or(e) {
        return t(e).maxColorAttachments;
    }
    function Vr(e) {
        return t(e).maxComputeInvocationsPerWorkgroup;
    }
    function Wr(e) {
        return t(e).maxComputeWorkgroupSizeX;
    }
    function zr(e) {
        return t(e).maxComputeWorkgroupSizeY;
    }
    function Ur(e) {
        return t(e).maxComputeWorkgroupSizeZ;
    }
    function qr(e) {
        return t(e).maxComputeWorkgroupStorageSize;
    }
    function jr(e) {
        return t(e).maxComputeWorkgroupsPerDimension;
    }
    function Qr(e) {
        return t(e).maxDynamicStorageBuffersPerPipelineLayout;
    }
    function Nr(e) {
        return t(e).maxDynamicUniformBuffersPerPipelineLayout;
    }
    function $r(e) {
        return t(e).maxInterStageShaderComponents;
    }
    function Hr(e) {
        return t(e).maxSampledTexturesPerShaderStage;
    }
    function Xr(e) {
        return t(e).maxSamplersPerShaderStage;
    }
    function Yr(e) {
        return t(e).maxStorageBufferBindingSize;
    }
    function Zr(e) {
        return t(e).maxStorageBuffersPerShaderStage;
    }
    function Jr(e) {
        return t(e).maxStorageTexturesPerShaderStage;
    }
    function Kr(e) {
        return t(e).maxTextureArrayLayers;
    }
    function ef(e) {
        return t(e).maxTextureDimension1D;
    }
    function _f(e) {
        return t(e).maxTextureDimension2D;
    }
    function tf(e) {
        return t(e).maxTextureDimension3D;
    }
    function nf(e) {
        return t(e).maxUniformBufferBindingSize;
    }
    function rf(e) {
        return t(e).maxUniformBuffersPerShaderStage;
    }
    function ff(e) {
        return t(e).maxVertexAttributes;
    }
    function af(e) {
        return t(e).maxVertexBufferArrayStride;
    }
    function bf(e) {
        return t(e).maxVertexBuffers;
    }
    function cf(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function of(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function uf(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function gf(e) {
        const _ = t(e).messages;
        return b(_);
    }
    function df(e) {
        return t(e).minStorageBufferOffsetAlignment;
    }
    function sf(e) {
        return t(e).minUniformBufferOffsetAlignment;
    }
    function wf(e) {
        const _ = t(e).navigator;
        return b(_);
    }
    function mf(e) {
        const _ = t(e).navigator;
        return b(_);
    }
    function lf() {
        const e = new Error;
        return b(e);
    }
    function pf() {
        const e = new Array;
        return b(e);
    }
    function xf() {
        const e = new Object;
        return b(e);
    }
    function yf(e, _) {
        const n = new Uint8Array(j(e, _));
        return b(n);
    }
    function hf(e, _) {
        try {
            var n = {
                a: e,
                b: _
            }, r = (a, o)=>{
                const u = n.a;
                n.a = 0;
                try {
                    return Ec(u, n.b, a, o);
                } finally{
                    n.a = u;
                }
            };
            const f = new Promise(r);
            return b(f);
        } finally{
            n.a = n.b = 0;
        }
    }
    function Sf() {
        const e = new Array;
        return b(e);
    }
    function If(e, _, n) {
        const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
        return b(r);
    }
    function Bf() {
        return Date.now();
    }
    function vf(e) {
        const _ = Array.of(t(e));
        return b(_);
    }
    function Af(e) {
        return t(e).offset;
    }
    function Pf() {
        return m(function(e, _) {
            const n = JSON.parse(p(e, _));
            return b(n);
        }, arguments);
    }
    function Df(e, _, n) {
        t(e).pixelStorei(_ >>> 0, n);
    }
    function Tf(e, _, n) {
        t(e).pixelStorei(_ >>> 0, n);
    }
    function kf(e, _, n) {
        t(e).polygonOffset(_, n);
    }
    function Mf(e, _, n) {
        t(e).polygonOffset(_, n);
    }
    function Ff(e) {
        const _ = t(e).popErrorScope();
        return b(_);
    }
    function Lf(e, _, n) {
        Uint8Array.prototype.set.call(j(e, _), t(n));
    }
    function Cf(e, _) {
        t(e).pushErrorScope(Oc[_]);
    }
    function Ef(e, _) {
        return t(e).push(t(_));
    }
    function Gf() {
        return m(function(e, _, n) {
            const r = t(e).querySelectorAll(p(_, n));
            return b(r);
        }, arguments);
    }
    function Rf() {
        return m(function(e, _, n) {
            const r = t(e).querySelector(p(_, n));
            return d(r) ? 0 : b(r);
        }, arguments);
    }
    function Of(e) {
        const _ = t(e).queueMicrotask;
        return b(_);
    }
    function Vf(e) {
        queueMicrotask(t(e));
    }
    function Wf(e) {
        const _ = t(e).queue;
        return b(_);
    }
    function zf(e, _) {
        t(e).readBuffer(_ >>> 0);
    }
    function Uf() {
        return m(function(e, _, n, r, f, a, o, u) {
            t(e).readPixels(_, n, r, f, a >>> 0, o >>> 0, t(u));
        }, arguments);
    }
    function qf() {
        return m(function(e, _, n, r, f, a, o, u) {
            t(e).readPixels(_, n, r, f, a >>> 0, o >>> 0, t(u));
        }, arguments);
    }
    function jf() {
        return m(function(e, _, n, r, f, a, o, u) {
            t(e).readPixels(_, n, r, f, a >>> 0, o >>> 0, u);
        }, arguments);
    }
    function Qf(e) {
        const _ = t(e).reason;
        return (Rc.indexOf(_) + 1 || 3) - 1;
    }
    function Nf(e, _, n, r, f, a) {
        t(e).renderbufferStorageMultisample(_ >>> 0, n, r >>> 0, f, a);
    }
    function $f(e, _, n, r, f) {
        t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, f);
    }
    function Hf(e, _, n, r, f) {
        t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, f);
    }
    function Xf(e, _) {
        const n = t(e).requestAdapter(t(_));
        return b(n);
    }
    function Yf(e, _) {
        const n = (t(_)?.requiredLimits && delete t(_).requiredLimits.maxInterStageShaderComponents, t(e).requestDevice(t(_)));
        return b(n);
    }
    function Zf(e, _, n, r, f, a) {
        t(e).resolveQuerySet(t(_), n >>> 0, r >>> 0, t(f), a >>> 0);
    }
    function Jf(e) {
        const _ = Promise.resolve(t(e));
        return b(_);
    }
    function Kf(e, _, n, r) {
        t(e).samplerParameterf(t(_), n >>> 0, r);
    }
    function ea(e, _, n, r) {
        t(e).samplerParameteri(t(_), n >>> 0, r);
    }
    function _a(e, _, n, r, f) {
        t(e).scissor(_, n, r, f);
    }
    function ta(e, _, n, r, f) {
        t(e).scissor(_, n, r, f);
    }
    function na(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function ra(e, _, n, r, f, a, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), a, o >>> 0);
    }
    function fa(e, _, n, r, f, a, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), a, o >>> 0);
    }
    function aa(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function ba(e, _, n, r, f, a, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), a, o >>> 0);
    }
    function ca(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function oa(e, _) {
        t(e).setBlendConstant(t(_));
    }
    function ia(e, _, n, r, f) {
        t(e).setIndexBuffer(t(_), z[n], r, f);
    }
    function ua(e, _, n, r) {
        t(e).setIndexBuffer(t(_), z[n], r);
    }
    function ga(e, _, n, r) {
        t(e).setIndexBuffer(t(_), z[n], r);
    }
    function da(e, _, n, r, f) {
        t(e).setIndexBuffer(t(_), z[n], r, f);
    }
    function sa(e, _) {
        t(e).setPipeline(t(_));
    }
    function wa(e, _) {
        t(e).setPipeline(t(_));
    }
    function ma(e, _) {
        t(e).setPipeline(t(_));
    }
    function la(e, _, n, r, f) {
        t(e).setScissorRect(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function pa(e, _) {
        t(e).setStencilReference(_ >>> 0);
    }
    function xa(e, _, n, r, f) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, f);
    }
    function ya(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function ha(e, _, n, r, f) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, f);
    }
    function Sa(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function Ia(e, _, n, r, f, a, o) {
        t(e).setViewport(_, n, r, f, a, o);
    }
    function Ba() {
        return m(function(e, _, n) {
            return Reflect.set(t(e), t(_), t(n));
        }, arguments);
    }
    function va(e, _, n) {
        t(e).set(t(_), n >>> 0);
    }
    function Aa(e, _) {
        t(e).height = _ >>> 0;
    }
    function Pa(e, _) {
        t(e).height = _ >>> 0;
    }
    function Da(e, _) {
        t(e).onuncapturederror = t(_);
    }
    function Ta(e, _) {
        t(e).width = _ >>> 0;
    }
    function ka(e, _) {
        t(e).width = _ >>> 0;
    }
    function Ma(e, _, n, r) {
        t(e).shaderSource(t(_), p(n, r));
    }
    function Fa(e, _, n, r) {
        t(e).shaderSource(t(_), p(n, r));
    }
    function La(e) {
        return t(e).size;
    }
    function Ca(e, _) {
        const n = t(_).stack, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        s().setInt32(e + 4, f, !0), s().setInt32(e + 0, r, !0);
    }
    function Ea() {
        const e = typeof global > "u" ? null : global;
        return d(e) ? 0 : b(e);
    }
    function Ga() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return d(e) ? 0 : b(e);
    }
    function Ra() {
        const e = typeof self > "u" ? null : self;
        return d(e) ? 0 : b(e);
    }
    function Oa() {
        const e = typeof window > "u" ? null : window;
        return d(e) ? 0 : b(e);
    }
    function Va(e, _, n, r, f) {
        t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, f >>> 0);
    }
    function Wa(e, _, n, r, f) {
        t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, f >>> 0);
    }
    function za(e, _, n) {
        t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
    }
    function Ua(e, _, n) {
        t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
    }
    function qa(e, _) {
        t(e).stencilMask(_ >>> 0);
    }
    function ja(e, _) {
        t(e).stencilMask(_ >>> 0);
    }
    function Qa(e, _, n, r, f) {
        t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Na(e, _, n, r, f) {
        t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function $a(e, _) {
        t(e).submit(t(_));
    }
    function Ha() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function Xa() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function Ya() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x) {
            t(e).texImage3D(_ >>> 0, n, r, f, a, o, u, g >>> 0, w >>> 0, t(x));
        }, arguments);
    }
    function Za(e, _, n, r) {
        t(e).texParameteri(_ >>> 0, n >>> 0, r);
    }
    function Ja(e, _, n, r) {
        t(e).texParameteri(_ >>> 0, n >>> 0, r);
    }
    function Ka(e, _, n, r, f, a) {
        t(e).texStorage2D(_ >>> 0, n, r >>> 0, f, a);
    }
    function eb(e, _, n, r, f, a, o) {
        t(e).texStorage3D(_ >>> 0, n, r >>> 0, f, a, o);
    }
    function _b() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function tb() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function nb() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function rb() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function fb() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, w);
        }, arguments);
    }
    function ab() {
        return m(function(e, _, n, r, f, a, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, a, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function bb() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function cb() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function ob() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function ib() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x >>> 0, S);
        }, arguments);
    }
    function ub() {
        return m(function(e, _, n, r, f, a, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, a, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function gb(e, _) {
        const n = t(e).then(t(_));
        return b(n);
    }
    function db(e, _) {
        const n = t(e).then(t(_));
        return b(n);
    }
    function sb(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return b(r);
    }
    function wb(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return b(r);
    }
    function mb(e) {
        const _ = t(e).type;
        return (Gc.indexOf(_) + 1 || 4) - 1;
    }
    function lb(e, _, n) {
        t(e).uniform1f(t(_), n);
    }
    function pb(e, _, n) {
        t(e).uniform1f(t(_), n);
    }
    function xb(e, _, n) {
        t(e).uniform1i(t(_), n);
    }
    function yb(e, _, n) {
        t(e).uniform1i(t(_), n);
    }
    function hb(e, _, n) {
        t(e).uniform1ui(t(_), n >>> 0);
    }
    function Sb(e, _, n, r) {
        t(e).uniform2fv(t(_), l(n, r));
    }
    function Ib(e, _, n, r) {
        t(e).uniform2fv(t(_), l(n, r));
    }
    function Bb(e, _, n, r) {
        t(e).uniform2iv(t(_), v(n, r));
    }
    function vb(e, _, n, r) {
        t(e).uniform2iv(t(_), v(n, r));
    }
    function Ab(e, _, n, r) {
        t(e).uniform2uiv(t(_), A(n, r));
    }
    function Pb(e, _, n, r) {
        t(e).uniform3fv(t(_), l(n, r));
    }
    function Db(e, _, n, r) {
        t(e).uniform3fv(t(_), l(n, r));
    }
    function Tb(e, _, n, r) {
        t(e).uniform3iv(t(_), v(n, r));
    }
    function kb(e, _, n, r) {
        t(e).uniform3iv(t(_), v(n, r));
    }
    function Mb(e, _, n, r) {
        t(e).uniform3uiv(t(_), A(n, r));
    }
    function Fb(e, _, n, r, f, a) {
        t(e).uniform4f(t(_), n, r, f, a);
    }
    function Lb(e, _, n, r, f, a) {
        t(e).uniform4f(t(_), n, r, f, a);
    }
    function Cb(e, _, n, r) {
        t(e).uniform4fv(t(_), l(n, r));
    }
    function Eb(e, _, n, r) {
        t(e).uniform4fv(t(_), l(n, r));
    }
    function Gb(e, _, n, r) {
        t(e).uniform4iv(t(_), v(n, r));
    }
    function Rb(e, _, n, r) {
        t(e).uniform4iv(t(_), v(n, r));
    }
    function Ob(e, _, n, r) {
        t(e).uniform4uiv(t(_), A(n, r));
    }
    function Vb(e, _, n, r) {
        t(e).uniformBlockBinding(t(_), n >>> 0, r >>> 0);
    }
    function Wb(e, _, n, r, f) {
        t(e).uniformMatrix2fv(t(_), n !== 0, l(r, f));
    }
    function zb(e, _, n, r, f) {
        t(e).uniformMatrix2fv(t(_), n !== 0, l(r, f));
    }
    function Ub(e, _, n, r, f) {
        t(e).uniformMatrix2x3fv(t(_), n !== 0, l(r, f));
    }
    function qb(e, _, n, r, f) {
        t(e).uniformMatrix2x4fv(t(_), n !== 0, l(r, f));
    }
    function jb(e, _, n, r, f) {
        t(e).uniformMatrix3fv(t(_), n !== 0, l(r, f));
    }
    function Qb(e, _, n, r, f) {
        t(e).uniformMatrix3fv(t(_), n !== 0, l(r, f));
    }
    function Nb(e, _, n, r, f) {
        t(e).uniformMatrix3x2fv(t(_), n !== 0, l(r, f));
    }
    function $b(e, _, n, r, f) {
        t(e).uniformMatrix3x4fv(t(_), n !== 0, l(r, f));
    }
    function Hb(e, _, n, r, f) {
        t(e).uniformMatrix4fv(t(_), n !== 0, l(r, f));
    }
    function Xb(e, _, n, r, f) {
        t(e).uniformMatrix4fv(t(_), n !== 0, l(r, f));
    }
    function Yb(e, _, n, r, f) {
        t(e).uniformMatrix4x2fv(t(_), n !== 0, l(r, f));
    }
    function Zb(e, _, n, r, f) {
        t(e).uniformMatrix4x3fv(t(_), n !== 0, l(r, f));
    }
    function Jb(e) {
        t(e).unmap();
    }
    function Kb(e) {
        return t(e).usage;
    }
    function ec(e, _) {
        t(e).useProgram(t(_));
    }
    function _c(e, _) {
        t(e).useProgram(t(_));
    }
    function tc(e) {
        const _ = t(e).valueOf();
        return b(_);
    }
    function nc(e, _, n) {
        t(e).vertexAttribDivisorANGLE(_ >>> 0, n >>> 0);
    }
    function rc(e, _, n) {
        t(e).vertexAttribDivisor(_ >>> 0, n >>> 0);
    }
    function fc(e, _, n, r, f, a) {
        t(e).vertexAttribIPointer(_ >>> 0, n, r >>> 0, f, a);
    }
    function ac(e, _, n, r, f, a, o) {
        t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, f !== 0, a, o);
    }
    function bc(e, _, n, r, f, a, o) {
        t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, f !== 0, a, o);
    }
    function cc(e) {
        return t(e).videoHeight;
    }
    function oc(e) {
        return t(e).videoWidth;
    }
    function ic(e, _, n, r, f) {
        t(e).viewport(_, n, r, f);
    }
    function uc(e, _, n, r, f) {
        t(e).viewport(_, n, r, f);
    }
    function gc(e) {
        const _ = F.__wrap(e);
        return b(_);
    }
    function dc(e) {
        return t(e).width;
    }
    function sc(e) {
        return t(e).width;
    }
    function wc(e) {
        return t(e).width;
    }
    function mc(e, _, n, r, f, a) {
        t(e).writeBuffer(t(_), n, t(r), f, a);
    }
    function lc(e, _, n, r, f) {
        t(e).writeTexture(t(_), t(n), t(r), t(f));
    }
    function pc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_3534, Cc);
        return b(n);
    }
    function xc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_1574, Fc);
        return b(n);
    }
    function yc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_1574, Lc);
        return b(n);
    }
    function hc(e) {
        return b(e);
    }
    function Sc(e, _) {
        const n = l(e, _);
        return b(n);
    }
    function Ic(e, _) {
        const n = zc(e, _);
        return b(n);
    }
    function Bc(e, _) {
        const n = v(e, _);
        return b(n);
    }
    function vc(e, _) {
        const n = Uc(e, _);
        return b(n);
    }
    function Ac(e, _) {
        const n = qc(e, _);
        return b(n);
    }
    function Pc(e, _) {
        const n = A(e, _);
        return b(n);
    }
    function Dc(e, _) {
        const n = j(e, _);
        return b(n);
    }
    function Tc(e, _) {
        const n = p(e, _);
        return b(n);
    }
    function kc(e) {
        const _ = t(e);
        return b(_);
    }
    function Mc(e) {
        B(e);
    }
    function Fc(e, _, n) {
        c.__wasm_bindgen_func_elem_1735(e, _, b(n));
    }
    function Lc(e, _, n) {
        c.__wasm_bindgen_func_elem_1735_2(e, _, b(n));
    }
    function Cc(e, _, n) {
        try {
            const a = c.__wbindgen_add_to_stack_pointer(-16);
            c.__wasm_bindgen_func_elem_8063(a, e, _, b(n));
            var r = s().getInt32(a + 0, !0), f = s().getInt32(a + 4, !0);
            if (f) throw B(r);
        } finally{
            c.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function Ec(e, _, n, r) {
        c.__wasm_bindgen_func_elem_8065(e, _, b(n), b(r));
    }
    const Gc = [
        "error",
        "warning",
        "info"
    ], Rc = [
        "unknown",
        "destroyed"
    ], Oc = [
        "validation",
        "out-of-memory",
        "internal"
    ], z = [
        "uint16",
        "uint32"
    ], Vc = [
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
    ], N = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>c.__wbg_gpugameoflife_free(e >>> 0, 1)), $ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>c.__wbg_webglgameoflife_free(e >>> 0, 1));
    function b(e) {
        T === I.length && I.push(I.length + 1);
        const _ = T;
        return T = I[_], I[_] = e, _;
    }
    const H = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function q(e) {
        const _ = typeof e;
        if (_ == "number" || _ == "boolean" || e == null) return `${e}`;
        if (_ == "string") return `"${e}"`;
        if (_ == "symbol") {
            const f = e.description;
            return f == null ? "Symbol" : `Symbol(${f})`;
        }
        if (_ == "function") {
            const f = e.name;
            return typeof f == "string" && f.length > 0 ? `Function(${f})` : "Function";
        }
        if (Array.isArray(e)) {
            const f = e.length;
            let a = "[";
            f > 0 && (a += q(e[0]));
            for(let o = 1; o < f; o++)a += ", " + q(e[o]);
            return a += "]", a;
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
    function Wc(e) {
        e < 1028 || (I[e] = T, T = e);
    }
    function l(e, _) {
        return e = e >>> 0, jc().subarray(e / 4, e / 4 + _);
    }
    function zc(e, _) {
        return e = e >>> 0, Qc().subarray(e / 2, e / 2 + _);
    }
    function v(e, _) {
        return e = e >>> 0, Nc().subarray(e / 4, e / 4 + _);
    }
    function Uc(e, _) {
        return e = e >>> 0, $c().subarray(e / 1, e / 1 + _);
    }
    function qc(e, _) {
        return e = e >>> 0, Hc().subarray(e / 2, e / 2 + _);
    }
    function A(e, _) {
        return e = e >>> 0, Xc().subarray(e / 4, e / 4 + _);
    }
    function j(e, _) {
        return e = e >>> 0, D().subarray(e / 1, e / 1 + _);
    }
    let P = null;
    function s() {
        return (P === null || P.buffer.detached === !0 || P.buffer.detached === void 0 && P.buffer !== c.memory.buffer) && (P = new DataView(c.memory.buffer)), P;
    }
    let L = null;
    function jc() {
        return (L === null || L.byteLength === 0) && (L = new Float32Array(c.memory.buffer)), L;
    }
    let C = null;
    function Qc() {
        return (C === null || C.byteLength === 0) && (C = new Int16Array(c.memory.buffer)), C;
    }
    let E = null;
    function Nc() {
        return (E === null || E.byteLength === 0) && (E = new Int32Array(c.memory.buffer)), E;
    }
    let G = null;
    function $c() {
        return (G === null || G.byteLength === 0) && (G = new Int8Array(c.memory.buffer)), G;
    }
    function p(e, _) {
        return e = e >>> 0, Zc(e, _);
    }
    let R = null;
    function Hc() {
        return (R === null || R.byteLength === 0) && (R = new Uint16Array(c.memory.buffer)), R;
    }
    let O = null;
    function Xc() {
        return (O === null || O.byteLength === 0) && (O = new Uint32Array(c.memory.buffer)), O;
    }
    let V = null;
    function D() {
        return (V === null || V.byteLength === 0) && (V = new Uint8Array(c.memory.buffer)), V;
    }
    function t(e) {
        return I[e];
    }
    function m(e, _) {
        try {
            return e.apply(this, _);
        } catch (n) {
            c.__wbindgen_export3(b(n));
        }
    }
    let I = new Array(1024).fill(void 0);
    I.push(void 0, null, !0, !1);
    let T = I.length;
    function d(e) {
        return e == null;
    }
    function Q(e, _, n, r) {
        const f = {
            a: e,
            b: _,
            cnt: 1,
            dtor: n
        }, a = (...o)=>{
            f.cnt++;
            const u = f.a;
            f.a = 0;
            try {
                return r(u, f.b, ...o);
            } finally{
                f.a = u, a._wbg_cb_unref();
            }
        };
        return a._wbg_cb_unref = ()=>{
            --f.cnt === 0 && (f.dtor(f.a, f.b), f.a = 0, H.unregister(f));
        }, H.register(a, f, f), a;
    }
    function h(e, _, n) {
        if (n === void 0) {
            const u = k.encode(e), g = _(u.length, 1) >>> 0;
            return D().subarray(g, g + u.length).set(u), y = u.length, g;
        }
        let r = e.length, f = _(r, 1) >>> 0;
        const a = D();
        let o = 0;
        for(; o < r; o++){
            const u = e.charCodeAt(o);
            if (u > 127) break;
            a[f + o] = u;
        }
        if (o !== r) {
            o !== 0 && (e = e.slice(o)), f = n(f, r, r = o + e.length * 3, 1) >>> 0;
            const u = D().subarray(f + o, f + r), g = k.encodeInto(e, u);
            o += g.written, f = n(f, r, o, 1) >>> 0;
        }
        return y = o, f;
    }
    function B(e) {
        const _ = t(e);
        return Wc(e), _;
    }
    let W = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    W.decode();
    const Yc = 2146435072;
    let U = 0;
    function Zc(e, _) {
        return U += _, U >= Yc && (W = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), W.decode(), U = _), W.decode(D().subarray(e, e + _));
    }
    const k = new TextEncoder;
    "encodeInto" in k || (k.encodeInto = function(e, _) {
        const n = k.encode(e);
        return _.set(n), {
            read: e.length,
            written: n.length
        };
    });
    let y = 0, c;
    function Jc(e) {
        c = e;
    }
    URL = globalThis.URL;
    const i = await Y({
        "./game_of_life_gpu_bg.js": {
            __wbg_new_typed_aaaeaf29cf802876: hf,
            __wbindgen_object_drop_ref: Mc,
            __wbg_gpugameoflife_new: fr,
            __wbg_webglgameoflife_new: gc,
            __wbg_call_2d781c1f4d5c0ef8: $e,
            __wbg_new_227d7c05414eb861: lf,
            __wbg_stack_3b0d974bbf31e44f: Ca,
            __wbg_error_a6fa202b58aa1cd3: fn,
            __wbg_then_9e335f6dd892bc11: sb,
            __wbindgen_object_clone_ref: kc,
            __wbg_submit_60f2469dc00130cc: $a,
            __wbg_new_typed_bccac67128ed885a: Sf,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: wr,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: gr,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: sr,
            __wbg_instanceof_Object_be1962063fcc0c9f: lr,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: ur,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: dr,
            __wbg_error_2acb88afe0ad9a3e: rn,
            __wbg_valueOf_5c6da6c9a85f34dc: tc,
            __wbg_messages_4e98c7e63c5efe7b: gf,
            __wbg_get_a8ee5c45dabc1b3b: _r,
            __wbg_message_f762db05c1294eca: uf,
            __wbg_size_1dfbf7241f9df1cc: La,
            __wbg_features_fdbd3daed26aa468: cn,
            __wbg_label_cdc2b7a875dc5123: Ir,
            __wbg_reason_d7f4ddcad86f8d99: Qf,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: ef,
            __wbg_message_a77e1a9202609622: of,
            __wbg_usage_ee2982f59567c06f: Kb,
            __wbg_limits_becc24c879d87717: Dr,
            __wbg_configure_6e1ccd3ac31b721c: w_,
            __wbg_message_1b27ea1ad3998a9f: cf,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: _f,
            __wbg_type_4b0a304ebc25e195: mb,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: On,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Pn,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Fn,
            __wbg_getBindGroupLayout_b9533489f3ee14df: vn,
            __wbg_getBindGroupLayout_aba26df848b4322d: Bn,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: tf,
            __wbg_lineNum_24517b98f306fcae: Tr,
            __wbg_finish_ee515f526784acd5: sn,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: zr,
            __wbg_popErrorScope_2869a89dd4626f0c: Ff,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: Ur,
            __wbg_drawIndirect_73df189881970a43: $t,
            __wbg_setIndexBuffer_4219294fa3e2d59b: ia,
            __wbg_writeBuffer_b5e6e8f3f93629bc: mc,
            __wbg_pushErrorScope_72e651b0f8f64c0e: Cf,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: jr,
            __wbg_setPipeline_723820e1c5cc61e7: wa,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: ua,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: Sa,
            __wbg_writeTexture_57e41dd94bac65c4: lc,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: da,
            __wbg_setPipeline_f2cf83769bb33769: ma,
            __wbg_setVertexBuffer_c643d7ac0abf4554: ha,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: ya,
            __wbg_getMappedRange_11ec4cfce4df1e72: En,
            __wbg_setVertexBuffer_54536e0e73bfc91e: xa,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: x_,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: ge,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: Kr,
            __wbg_end_54134488dbc5b7a9: tn,
            __wbg_has_2184fc4b845f2b5f: ar,
            __wbg_finish_eb06372cc93f8d50: dn,
            __wbg_requestAdapter_e4b32f2647c66726: Xf,
            __wbg_features_30a76d141781ad80: bn,
            __wbg_beginRenderPass_9a7bf53d588737dc: se,
            __wbg_maxBindGroups_5d3409c14d2756b5: Cr,
            __wbg_offset_164492575e959c94: Af,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Lt,
            __wbg_setBindGroup_1602c955be9b2eaa: na,
            __wbg_destroy_50767c0458f7c8d1: vt,
            __wbg_limits_5b3783fcc0d36428: Pr,
            __wbg_requestDevice_6130c3ba10d633f9: Yf,
            __wbg_executeBundles_2905636f81aabf99: an,
            __wbg_length_87e0297027dd7802: Br,
            __wbg_queue_6b07ccdd49a6ba90: Wf,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: Er,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Ft,
            __wbg_lost_2c34651e3317be8b: Fr,
            __wbg_clearBuffer_b08b15b7ee3c9d57: He,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: Nr,
            __wbg_setBlendConstant_257274277b0e3153: oa,
            __wbg_end_57a2746c247f499a: nn,
            __wbg_setBindGroup_6149584f04998372: ra,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: Qr,
            __wbg_setScissorRect_0578b1de90caf434: la,
            __wbg_setPipeline_481f34ae14c49d67: sa,
            __wbg_set_onuncapturederror_729c2e42c36923f4: Da,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: Hr,
            __wbg_setStencilReference_7616273572b1075e: pa,
            __wbg_setBindGroup_9877b57492cb7e1c: aa,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: Xr,
            __wbg_setViewport_94128a2b1a708040: Ia,
            __wbg_createView_c227b9af7bd5f441: K_,
            __wbg_clearBuffer_f24f8de43db597ec: Xe,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: Zr,
            __wbg_setBindGroup_f930832baeb4279b: ca,
            __wbg_createBindGroup_876adbf7e329ce2e: A_,
            __wbg_destroy_a2c0702c5d1269b5: Pt,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: Jr,
            __wbg_setBindGroup_8d384b1c5ed329f4: fa,
            __wbg_createBindGroupLayout_e37f9323c278f93f: v_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: rf,
            __wbg_createBuffer_e3f8b2bd8b492498: T_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: nf,
            __wbg_setBindGroup_f4d552dcef65a491: ba,
            __wbg_draw_ce5e8b8ad56571cb: Yt,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: Yr,
            __wbg_createCommandEncoder_e617922978f8b4de: k_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: sf,
            __wbg_createComputePipeline_6794bf24c6c03583: M_,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: df,
            __wbg_then_1d7a5273811a5cea: db,
            __wbg_maxVertexBuffers_e5cf174a3497d472: bf,
            __wbg_mapAsync_8d0ffc031e86e9a0: Lr,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: C_,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: l_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: Gr,
            __wbg_drawIndexed_55f6bf3bda0212ad: Qt,
            __wbg_unmap_4aa38f8c5283cc1d: Jb,
            __wbg_createQuerySet_6050df2adcb1f167: R_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: ff,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: V_,
            __wbg_copyBufferToTexture_48aa78a412b2a467: p_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: af,
            __wbg_draw_57caf8f0bc1ea050: Xt,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: jt,
            __wbg_createRenderPipeline_921034ccba195ffe: W_,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: $r,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: I_,
            __wbg_drawIndirect_a2f7c719957f8ec9: Ht,
            __wbg_maxColorAttachments_378f5fb1c453321d: Or,
            __wbg_createSampler_cb4137c4e97c7098: j_,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: B_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: Rr,
            __wbg_createShaderModule_912a19a8ccc2aa1a: Q_,
            __wbg_finish_41491ca602373cde: gn,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: qr,
            __wbg_drawIndexed_9c9719597507e735: Nt,
            __wbg_setIndexBuffer_7e208bb69310ed01: ga,
            __wbg_createTexture_1a3ebeb1ddd7a035: H_,
            __wbg_finish_35be15c58b55a95b: un,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: Vr,
            __wbg_destroy_80182ff6e496228e: At,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: Zf,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: Wr,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: qt,
            __wbg_Window_06e90eea4c7df280: Z,
            __wbg_gpu_d9721d200584e919: rr,
            __wbg_WorkerGlobalScope_defda269b75e179a: J,
            __wbg_resolve_ae8d83246e5bcc12: Jf,
            __wbg_then_098abe61755d12f6: gb,
            __wbg_queueMicrotask_0c399741342fb10f: Of,
            __wbg_queueMicrotask_a082d78ce798393e: Vf,
            __wbg_length_b3416cf66a5452c8: vr,
            __wbg_includes_9f81335525be01f9: ir,
            __wbg_get_unchecked_329cfe50afab7352: nr,
            __wbg_push_e87b0e732085a946: Ef,
            __wbg_instanceof_Window_23e677d2c6843922: xr,
            __wbg_uniform2iv_892b6d31137ad198: Bb,
            __wbg_uniform3fv_85a9a17c9635941b: Pb,
            __wbg_clearBufferuiv_d75635e80261ea93: Je,
            __wbg_uniform3iv_4c372010ac6def3f: kb,
            __wbg_uniform4fv_c416900acf65eca9: Eb,
            __wbg_clear_5a0606f7c62ad39a: r_,
            __wbg_compressedTexSubImage2D_aab12b65159c282e: u_,
            __wbg_clearDepth_3ff5ef5e5fad4016: e_,
            __wbg_clearStencil_4505636e726114d0: t_,
            __wbg_colorMask_b053114f7da42448: a_,
            __wbg_compileShader_623a1051cf49494b: c_,
            __wbg_copyTexSubImage2D_b9a10d000c616b3e: h_,
            __wbg_createBuffer_8e47b88217a98607: D_,
            __wbg_createFramebuffer_911d55689ff8358e: F_,
            __wbg_compressedTexSubImage3D_77a6ab77487aa211: d_,
            __wbg_createProgram_8eb14525e7fcffb8: G_,
            __wbg_createRenderbuffer_8847d6a81975caee: U_,
            __wbg_compressedTexSubImage3D_95f64742aae944b8: s_,
            __wbg_createShader_9ffc9dc1832608d7: N_,
            __wbg_createTexture_ceb367c3528574ec: Y_,
            __wbg_cullFace_d759515c1199276c: _t,
            __wbg_deleteBuffer_a2f8244b249c356e: tt,
            __wbg_deleteFramebuffer_badadfcd45ef5e64: ft,
            __wbg_deleteProgram_fc1d8d77ef7e154d: bt,
            __wbg_deleteRenderbuffer_401ffe15b179c343: ot,
            __wbg_deleteShader_a8e5ccb432053dbe: dt,
            __wbg_deleteTexture_d8b1d278731e0c9f: mt,
            __wbg_copyBufferSubData_aaeed526e555f0d1: m_,
            __wbg_depthFunc_0376ef69458b01d8: xt,
            __wbg_depthMask_fd5bc408415b9cd3: St,
            __wbg_depthRange_ebba8110d3fe0332: Bt,
            __wbg_clientWaitSync_5402aac488fc18bb: f_,
            __wbg_uniform4iv_b49cd4acf0aa3ebc: Gb,
            __wbg_uniformMatrix2fv_4229ae27417c649a: Wb,
            __wbg_uniformMatrix3fv_bafc2707d0c48e27: Qb,
            __wbg_uniformMatrix4fv_7c68dee5aee11694: Xb,
            __wbg_activeTexture_66fa8cafd3610ddb: oe,
            __wbg_attachShader_6426e8576a115345: ie,
            __wbg_bindAttribLocation_1d976e3bcc954adb: we,
            __wbg_bindBuffer_d2a4f6cfb33336fb: xe,
            __wbg_bindFramebuffer_fdc7c38f1c700e64: he,
            __wbg_bindRenderbuffer_91db2fc67c1f0115: Se,
            __wbg_bindTexture_6e7e157d0aabe457: Ae,
            __wbg_blendColor_b4c7d8333af4876d: Te,
            __wbg_blendEquation_c353d94b097007e5: Ce,
            __wbg_blendEquationSeparate_f16ada84ba672878: Fe,
            __wbg_blendFunc_4ce0991003a9468e: Oe,
            __wbg_blendFuncSeparate_8c91c200b1a72e4b: Ge,
            __wbg_compressedTexSubImage2D_f3c4ae95ef9d2420: g_,
            __wbg_disable_7731e2f3362ef1c5: Mt,
            __wbg_disableVertexAttribArray_c4f42277355986c0: Tt,
            __wbg_drawArrays_13005ccff75e4210: Rt,
            __wbg_copyTexSubImage3D_7fcdf7c85bc308a5: S_,
            __wbg_createQuery_0f754c13ae341f39: O_,
            __wbg_enable_3728894fa8c1d348: Kt,
            __wbg_createSampler_7bed7d46769be9a7: q_,
            __wbg_enableVertexAttribArray_626e8d2d9d1fdff9: Jt,
            __wbg_createVertexArray_420460898dc8d838: J_,
            __wbg_deleteQuery_9420681ec3d643ef: ct,
            __wbg_framebufferRenderbuffer_d8c1d0b985bd3c51: mn,
            __wbg_deleteSampler_8111fd44b061bdd1: ut,
            __wbg_getIndexedParameter_338c7c91cbabcf3e: Cn,
            __wbg_linkProgram_e626a3e7d78e1738: Mr,
            __wbg_pixelStorei_2a3c5b85cf37caba: Tf,
            __wbg_getQueryParameter_5a3a2bd77e5f56bb: qn,
            __wbg_polygonOffset_cc6bec2f9f4a18f7: Mf,
            __wbg_renderbufferStorage_9130171a6ae371dc: $f,
            __wbg_getSyncParameter_fbf70c60f5e3b271: Yn,
            __wbg_scissor_b18f09381b341db5: _a,
            __wbg_getUniformBlockIndex_e483a4d166df9c2a: Zn,
            __wbg_shaderSource_06639e7b476e6ac2: Ma,
            __wbg_invalidateFramebuffer_df9574509a402d4f: yr,
            __wbg_stencilFuncSeparate_94ee4fbc164addec: Wa,
            __wbg_stencilMask_326a11d0928c3808: qa,
            __wbg_stencilMaskSeparate_a7bd409376ee05ff: Ua,
            __wbg_stencilOpSeparate_8627d0f5f7fe5800: Na,
            __wbg_texParameteri_fcdec30159061963: Ja,
            __wbg_framebufferTexture2D_e2f7d82e6707010e: pn,
            __wbg_deleteSync_deeb154f55e59a7d: st,
            __wbg_frontFace_1537b8c3fc174f05: Sn,
            __wbg_deleteVertexArray_5a75f4855c2881df: pt,
            __wbg_drawArraysInstanced_13e40fca13079ade: Gt,
            __wbg_drawBuffers_823c4881ba82dc9c: Wt,
            __wbg_drawElementsInstanced_2e549060a77ba831: Ut,
            __wbg_endQuery_48241eaef2e96940: _n,
            __wbg_fenceSync_460953d9ad5fd31a: on,
            __wbg_getParameter_e634fa73b5e25287: Rn,
            __wbg_framebufferTextureLayer_01d5b9516636ccae: xn,
            __wbg_getProgramInfoLog_e03efa51473d657e: Wn,
            __wbg_getProgramParameter_7d3bd54ec02de007: Un,
            __wbg_getShaderInfoLog_40c6a4ae67d82dde: Qn,
            __wbg_getBufferSubData_cbabbb87d4c5c57d: An,
            __wbg_getShaderParameter_82c275299b111f1b: $n,
            __wbg_getUniformLocation_90cdff44c2fceeb9: Kn,
            __wbg_uniform1f_8c3b03df282dba21: lb,
            __wbg_readBuffer_e559a3da4aa9e434: zf,
            __wbg_uniform1i_acd89bea81085be4: yb,
            __wbg_readPixels_41a371053c299080: Uf,
            __wbg_readPixels_f675ed52bd44f8f1: jf,
            __wbg_uniform4f_7275e0fb864b7513: Lb,
            __wbg_useProgram_49b77c7558a0646a: ec,
            __wbg_renderbufferStorageMultisample_d999a80fbc25df5f: Nf,
            __wbg_texImage3D_88ff1fa41be127b9: Ya,
            __wbg_texStorage2D_a84f74d36d279097: Ka,
            __wbg_texStorage3D_aec6fc3e85ec72da: eb,
            __wbg_texSubImage2D_1e7d6febf82b9bed: _b,
            __wbg_texSubImage2D_d784df0b813dc1ab: fb,
            __wbg_texSubImage2D_3bb41b987f2bfe39: nb,
            __wbg_texSubImage2D_dd1d50234b61de4b: ab,
            __wbg_samplerParameterf_774cff2229cc9fc3: Kf,
            __wbg_samplerParameteri_7dde222b01588620: ea,
            __wbg_texImage2D_f4ae6c314a9a4bbe: Xa,
            __wbg_vertexAttribPointer_f63675d7fad431e6: bc,
            __wbg_viewport_63ee76a0f029804d: ic,
            __wbg_texSubImage2D_271ffedb47424d0d: tb,
            __wbg_texSubImage3D_b3cbbb79fe54da6d: ib,
            __wbg_texSubImage3D_f9c3af789162846a: ub,
            __wbg_uniform1ui_9f8d9b877d6691d8: hb,
            __wbg_uniform2fv_28fbf8836f3045d0: Sb,
            __wbg_uniform2iv_f40f632615c5685a: vb,
            __wbg_texSubImage3D_09cc863aedf44a21: bb,
            __wbg_texSubImage3D_6a46981af8bc8e49: ob,
            __wbg_texSubImage3D_4665e67a8f0f7806: cb,
            __wbg_querySelector_46ff1b81410aebea: Rf,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: Gf,
            __wbg_uniform2uiv_6d170469a702f23e: Ab,
            __wbg_uniform4fv_a4cdb4bd66867df5: Cb,
            __wbg_uniform4iv_d654af0e6b7bdb1a: Rb,
            __wbg_uniform3fv_cdf7c84f9119f13b: Db,
            __wbg_uniform3iv_38e74d2ae9dfbfb8: Tb,
            __wbg_uniform3uiv_bb7266bb3a5aef96: Mb,
            __wbg_uniform4uiv_e95d9a124fb8f91e: Ob,
            __wbg_uniformMatrix3fv_244fc4416319c169: jb,
            __wbg_uniformMatrix3x2fv_f1729eb13fcd41a3: Nb,
            __wbg_uniformMatrix3x4fv_3c11181f5fa929de: $b,
            __wbg_uniformBlockBinding_a47fa267662afd7b: Vb,
            __wbg_uniformMatrix2fv_648417dd2040de5b: zb,
            __wbg_uniformMatrix2x3fv_eb9a53c8c9aa724b: Ub,
            __wbg_uniformMatrix2x4fv_8849517a52f2e845: qb,
            __wbg_uniformMatrix4fv_4d322b295d122214: Hb,
            __wbg_vertexAttribIPointer_ecd3baef73ba0965: fc,
            __wbg_activeTexture_11610c2c57e26cfa: ce,
            __wbg_attachShader_e557f37438249ff7: ue,
            __wbg_bindAttribLocation_8791402cc151e914: me,
            __wbg_bindBuffer_142694a9732bc098: pe,
            __wbg_bindFramebuffer_4643a12ca1c72776: ye,
            __wbg_bindRenderbuffer_e6cfc20b6ebcf605: Ie,
            __wbg_bindTexture_6a0892cd752b41d9: ve,
            __wbg_blendColor_c2771aead110c867: ke,
            __wbg_blendEquation_46367a891604b604: Le,
            __wbg_blendEquationSeparate_b08aba1c715cb265: Me,
            __wbg_blendFunc_2e98c5f57736e5f3: Re,
            __wbg_blendFuncSeparate_6aae138b81d75b47: Ee,
            __wbg_clear_3d6ad4729e206aac: n_,
            __wbg_clearDepth_0fb1b5aba2ff2d63: Ke,
            __wbg_clearStencil_0e5924dc2f0fa2b7: __,
            __wbg_colorMask_b47840e05b5f8181: b_,
            __wbg_compileShader_7ca66245c2798601: o_,
            __wbg_width_e0981c16dad36a72: wc,
            __wbg_uniformMatrix4x2fv_5a8701b552d704af: Yb,
            __wbg_uniformMatrix4x3fv_741c3f4e0b2c7e04: Zb,
            __wbg_vertexAttribDivisor_99b2fd5affca539d: rc,
            __wbg_copyTexSubImage2D_08a10bcd45b88038: y_,
            __wbg_createBuffer_1aa34315dc9585a2: P_,
            __wbg_createFramebuffer_97d39363cdd9242a: L_,
            __wbg_createProgram_1fa32901e4db13cd: E_,
            __wbg_createRenderbuffer_69fb8c438e70e494: z_,
            __wbg_createShader_a00913b8c6489e6b: $_,
            __wbg_createTexture_9b1b4f40cab0097b: X_,
            __wbg_cullFace_2c9f57c2f90cbe70: et,
            __wbg_deleteBuffer_b053c58b4ed1ab1c: nt,
            __wbg_getExtension_0b8543b0c6b3068d: Ln,
            __wbg_getParameter_b1431cfde390c2fc: Gn,
            __wbg_getProgramInfoLog_50443ddea7475f57: Vn,
            __wbg_getProgramParameter_46e2d49878b56edd: zn,
            __wbg_getShaderInfoLog_22f9e8c90a52f38d: jn,
            __wbg_getShaderParameter_46f64f7ca5d534db: Nn,
            __wbg_getSupportedExtensions_a799751b74c3a674: Hn,
            __wbg_getUniformLocation_5eb08673afa04eee: Jn,
            __wbg_height_ee9ea840e5499878: cr,
            __wbg_framebufferTextureMultiviewOVR_336ea10e261ec5f6: yn,
            __wbg_drawBuffersWEBGL_5f9efe378355889a: Vt,
            __wbg_drawArraysInstancedANGLE_20ee4b8f67503b54: Et,
            __wbg_bindVertexArrayOES_082b0791772327fa: Pe,
            __wbg_getSupportedProfiles_e089393bebafd3b0: Xn,
            __wbg_deleteFramebuffer_1af8b97d40962089: rt,
            __wbg_deleteProgram_cb8f79d5c1e84863: at,
            __wbg_deleteRenderbuffer_b030660bf2e9fc95: it,
            __wbg_deleteShader_5b6992b5e5894d44: gt,
            __wbg_deleteTexture_00ecab74f7bddf91: wt,
            __wbg_depthFunc_befeae10cb29920d: yt,
            __wbg_depthMask_c6c1b0d88ade6c84: ht,
            __wbg_depthRange_b42d493a2b9258aa: It,
            __wbg_disable_62ec2189c50a0db7: kt,
            __wbg_disableVertexAttribArray_124a165b099b763b: Dt,
            __wbg_drawArrays_c20dedf441392005: Ot,
            __wbg_enable_91dff7f43064bb54: en,
            __wbg_enableVertexAttribArray_60dadea3a00e104a: Zt,
            __wbg_framebufferRenderbuffer_7a2be23309166ad3: wn,
            __wbg_framebufferTexture2D_bf4d47f4027a3682: ln,
            __wbg_frontFace_57081a0312eb822e: In,
            __wbg_linkProgram_b969f67969a850b5: kr,
            __wbg_pixelStorei_2a2385ed59538d48: Df,
            __wbg_polygonOffset_17cb85e417bf9db7: kf,
            __wbg_renderbufferStorage_b184ea29064b4e02: Hf,
            __wbg_scissor_db3842546fb31842: ta,
            __wbg_vertexAttribPointer_ea73fc4cc5b7d647: ac,
            __wbg_viewport_b60aceadb9166023: uc,
            __wbg_drawElementsInstancedANGLE_e9170c6414853487: zt,
            __wbg_createVertexArrayOES_1b30eca82fb89274: Z_,
            __wbg_shaderSource_2bca0edc97475e95: Fa,
            __wbg_stencilFuncSeparate_18642df0574c1930: Va,
            __wbg_stencilMask_6354f8ba392f6581: ja,
            __wbg_stencilMaskSeparate_13b0475860a9b559: za,
            __wbg_stencilOpSeparate_7e819381705b9731: Qa,
            __wbg_texParameteri_f4b1596185f5432d: Za,
            __wbg_uniform1f_b8841988568406b9: pb,
            __wbg_uniform1i_953040fb972e9fab: xb,
            __wbg_uniform4f_0b00a34f4789ad14: Fb,
            __wbg_useProgram_5405b431988b837b: _c,
            __wbg_bufferSubData_7b112eb88657e7c0: Qe,
            __wbg_navigator_9cebf56f28aa719b: mf,
            __wbg_texSubImage2D_68e0413824eddc12: rb,
            __wbg_clearBufferfv_7bc3e789059fd29b: Ye,
            __wbg_uniform2fv_f3c92aab21d0dec3: Ib,
            __wbg_clearBufferiv_050b376a7480ef9c: Ze,
            __wbg_get_c7546417fb0bec10: tr,
            __wbg_deleteVertexArrayOES_9da21e3515bf556e: lt,
            __wbg_width_71d9d44b5e14c4b7: sc,
            __wbg_vertexAttribDivisorANGLE_b357aa2bf70d3dcf: nc,
            __wbg_bufferData_fb2d946faa09a60b: qe,
            __wbg_beginQuery_ac2ef47e00ec594a: de,
            __wbg_set_width_576343a4a7f2cf28: Ta,
            __wbg_height_fb8c4164276f25fd: or,
            __wbg_navigator_583ffd4fc14c0f7a: wf,
            __wbg_document_c0320cd4183c6d9b: Ct,
            __wbg_set_height_98a1a397672657e2: Aa,
            __wbg_bufferData_d3bd8c69ff4b7254: Ue,
            __wbg_bindBufferRange_469c3643c2099003: le,
            __wbg_getContext_a9236f98f1f7fe7c: kn,
            __wbg_bindSampler_be3a05e88cecae98: Be,
            __wbg_getContext_794490fe04be926a: Tn,
            __wbg_bufferSubData_3fcefd4648de39b5: je,
            __wbg_bindVertexArray_c307251f3ff61930: De,
            __wbg_blitFramebuffer_c1a68feaca974c87: Ve,
            __wbg_bufferData_730b629ba3f6824f: We,
            __wbg_width_4d6fc7fecd877217: dc,
            __wbg_set_width_c0fcaa2da53cd540: ka,
            __wbg_height_6568c4427c3b889d: br,
            __wbg_bufferData_d20232e3d5dcdc62: ze,
            __wbg_set_height_b6548a01bdcb689a: Pa,
            __wbg_getContext_f04bf8f22dcb2d53: Mn,
            __wbg_compressedTexSubImage2D_593058a6f5aca176: i_,
            __wbg_getContext_07270456453ee7f5: Dn,
            __wbg_videoWidth_48f094fdc1b5ba64: oc,
            __wbg_videoHeight_6dac1fd954779498: cc,
            __wbg_readPixels_5c7066b5bd547f81: qf,
            __wbg_texImage2D_32ed4220040ca614: Ha,
            __wbg_instanceof_HtmlCanvasElement_26125339f936be50: mr,
            __wbg_instanceof_WebGl2RenderingContext_349f232f715e6bc2: pr,
            __wbg_new_ab79df5bd7c26067: xf,
            __wbg_new_a70fbab9066b301f: pf,
            __wbg_isArray_33b91feb269ff46e: hr,
            __wbg_of_8bf7ed3eca00ea43: vf,
            __wbg_from_4bdf88943703fd48: hn,
            __wbg_now_16f0c993d5dd6c27: Bf,
            __wbg_is_a166b9958c2438ad: Sr,
            __wbg_then_bc59d1943397ca4e: wb,
            __wbg_length_ea16607d7b61445b: Ar,
            __wbg_prototypesetcall_d62e5099504357e6: Lf,
            __wbg_new_from_slice_22da9388ac046e50: yf,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: If,
            __wbg_buffer_60b8043cd926067d: Ne,
            __wbg_set_e80615d7a9a43981: va,
            __wbg_parse_e9eddd2a82c706eb: Pf,
            __wbg_get_3ef1eba1850ade27: er,
            __wbg_set_7eaa4f96924fd6b3: Ba,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: Ga,
            __wbg_static_accessor_SELF_f207c857566db248: Ra,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: Ea,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: Oa,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: re,
            __wbg___wbindgen_throw_6ddd609b62940d55: ae,
            __wbg___wbindgen_is_object_781bc9f159099513: te,
            __wbg___wbindgen_string_get_395e606bd0ee4427: fe,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: K,
            __wbg___wbindgen_is_function_3c846841762788c1: _e,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: ne,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: be,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: ee,
            __wbindgen_cast_0000000000000001: pc,
            __wbindgen_cast_0000000000000002: xc,
            __wbindgen_cast_0000000000000003: yc,
            __wbindgen_cast_0000000000000004: hc,
            __wbindgen_cast_0000000000000005: Sc,
            __wbindgen_cast_0000000000000006: Ic,
            __wbindgen_cast_0000000000000007: Bc,
            __wbindgen_cast_0000000000000008: vc,
            __wbindgen_cast_0000000000000009: Ac,
            __wbindgen_cast_000000000000000a: Pc,
            __wbindgen_cast_000000000000000b: Dc,
            __wbindgen_cast_000000000000000c: Tc
        }
    }, X), Kc = i.memory, eo = i.__wbg_gpugameoflife_free, _o = i.__wbg_webglgameoflife_free, to = i.gpugameoflife_flush_and_render, no = i.gpugameoflife_grid_pitch, ro = i.gpugameoflife_init_device_request_ms, fo = i.gpugameoflife_init_panel_ms, ao = i.gpugameoflife_init_renderer_ms, bo = i.gpugameoflife_init_seeding_ms, co = i.gpugameoflife_init_simulation_ms, oo = i.gpugameoflife_last_compute_tick_ms, io = i.gpugameoflife_last_or_edit_ms, uo = i.gpugameoflife_last_present_ms, go = i.gpugameoflife_last_render_pass_ms, so = i.gpugameoflife_last_reseed_ms, wo = i.gpugameoflife_last_xor_edit_ms, mo = i.gpugameoflife_new, lo = i.gpugameoflife_new_offscreen, po = i.gpugameoflife_padded_rows, xo = i.gpugameoflife_render_only, yo = i.gpugameoflife_resize, ho = i.gpugameoflife_set_camera, So = i.gpugameoflife_set_init_fade, Io = i.gpugameoflife_set_scroll, Bo = i.gpugameoflife_set_theme_json, vo = i.gpugameoflife_set_transition, Ao = i.gpugameoflife_set_zones_json, Po = i.gpugameoflife_tick_and_render, Do = i.gpugameoflife_timestamp_query_supported, To = i.gpugameoflife_toggle_cell, ko = i.gpugameoflife_words_per_row, Mo = i.gpugameoflife_world_cols, Fo = i.gpugameoflife_world_rows, Lo = i.webglgameoflife_free, Co = i.webglgameoflife_grid_pitch, Eo = i.webglgameoflife_new_offscreen, Go = i.webglgameoflife_render_only, Ro = i.webglgameoflife_resize, Oo = i.webglgameoflife_set_camera, Vo = i.webglgameoflife_set_init_fade, Wo = i.webglgameoflife_set_theme_json, zo = i.webglgameoflife_set_transition, Uo = i.webglgameoflife_tick_and_render, qo = i.webglgameoflife_toggle_cell, jo = i.webglgameoflife_world_cols, Qo = i.webglgameoflife_world_rows, No = i.wgpu_render_bundle_draw, $o = i.wgpu_render_bundle_draw_indexed, Ho = i.wgpu_render_bundle_set_pipeline, Xo = i.wgpu_render_bundle_draw_indirect, Yo = i.wgpu_render_bundle_set_bind_group, Zo = i.wgpu_render_bundle_set_vertex_buffer, Jo = i.wgpu_render_bundle_set_push_constants, Ko = i.wgpu_render_bundle_draw_indexed_indirect, ei = i.wgpu_render_bundle_insert_debug_marker, _i = i.wgpu_render_bundle_pop_debug_group, ti = i.wgpu_render_bundle_set_index_buffer, ni = i.wgpu_render_bundle_push_debug_group, ri = i.__wasm_bindgen_func_elem_3534, fi = i.__wasm_bindgen_func_elem_1574, ai = i.__wasm_bindgen_func_elem_8063, bi = i.__wasm_bindgen_func_elem_8065, ci = i.__wasm_bindgen_func_elem_1735, oi = i.__wasm_bindgen_func_elem_1735_2, ii = i.__wbindgen_export, ui = i.__wbindgen_export2, gi = i.__wbindgen_export3, di = i.__wbindgen_export4, si = i.__wbindgen_add_to_stack_pointer;
    var wi = Object.freeze({
        __proto__: null,
        __wasm_bindgen_func_elem_1574: fi,
        __wasm_bindgen_func_elem_1735: ci,
        __wasm_bindgen_func_elem_1735_2: oi,
        __wasm_bindgen_func_elem_3534: ri,
        __wasm_bindgen_func_elem_8063: ai,
        __wasm_bindgen_func_elem_8065: bi,
        __wbg_gpugameoflife_free: eo,
        __wbg_webglgameoflife_free: _o,
        __wbindgen_add_to_stack_pointer: si,
        __wbindgen_export: ii,
        __wbindgen_export2: ui,
        __wbindgen_export3: gi,
        __wbindgen_export4: di,
        gpugameoflife_flush_and_render: to,
        gpugameoflife_grid_pitch: no,
        gpugameoflife_init_device_request_ms: ro,
        gpugameoflife_init_panel_ms: fo,
        gpugameoflife_init_renderer_ms: ao,
        gpugameoflife_init_seeding_ms: bo,
        gpugameoflife_init_simulation_ms: co,
        gpugameoflife_last_compute_tick_ms: oo,
        gpugameoflife_last_or_edit_ms: io,
        gpugameoflife_last_present_ms: uo,
        gpugameoflife_last_render_pass_ms: go,
        gpugameoflife_last_reseed_ms: so,
        gpugameoflife_last_xor_edit_ms: wo,
        gpugameoflife_new: mo,
        gpugameoflife_new_offscreen: lo,
        gpugameoflife_padded_rows: po,
        gpugameoflife_render_only: xo,
        gpugameoflife_resize: yo,
        gpugameoflife_set_camera: ho,
        gpugameoflife_set_init_fade: So,
        gpugameoflife_set_scroll: Io,
        gpugameoflife_set_theme_json: Bo,
        gpugameoflife_set_transition: vo,
        gpugameoflife_set_zones_json: Ao,
        gpugameoflife_tick_and_render: Po,
        gpugameoflife_timestamp_query_supported: Do,
        gpugameoflife_toggle_cell: To,
        gpugameoflife_words_per_row: ko,
        gpugameoflife_world_cols: Mo,
        gpugameoflife_world_rows: Fo,
        memory: Kc,
        webglgameoflife_free: Lo,
        webglgameoflife_grid_pitch: Co,
        webglgameoflife_new_offscreen: Eo,
        webglgameoflife_render_only: Go,
        webglgameoflife_resize: Ro,
        webglgameoflife_set_camera: Oo,
        webglgameoflife_set_init_fade: Vo,
        webglgameoflife_set_theme_json: Wo,
        webglgameoflife_set_transition: zo,
        webglgameoflife_tick_and_render: Uo,
        webglgameoflife_toggle_cell: qo,
        webglgameoflife_world_cols: jo,
        webglgameoflife_world_rows: Qo,
        wgpu_render_bundle_draw: No,
        wgpu_render_bundle_draw_indexed: $o,
        wgpu_render_bundle_draw_indexed_indirect: Ko,
        wgpu_render_bundle_draw_indirect: Xo,
        wgpu_render_bundle_insert_debug_marker: ei,
        wgpu_render_bundle_pop_debug_group: _i,
        wgpu_render_bundle_push_debug_group: ni,
        wgpu_render_bundle_set_bind_group: Yo,
        wgpu_render_bundle_set_index_buffer: ti,
        wgpu_render_bundle_set_pipeline: Ho,
        wgpu_render_bundle_set_push_constants: Jo,
        wgpu_render_bundle_set_vertex_buffer: Zo
    });
    Jc(wi);
})();
export { M as GpuGameOfLife, F as WebglGameOfLife, __tla };
