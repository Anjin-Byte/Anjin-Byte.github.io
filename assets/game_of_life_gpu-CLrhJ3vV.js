let M, F;
let __tla = (async ()=>{
    var X = "/assets/game_of_life_gpu_bg-D8NiJ6rr.wasm", Y = async (e = {}, _)=>{
        let n;
        if (_.startsWith("data:")) {
            const r = _.replace(/^data:.*?base64,/, "");
            let f;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") f = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const b = atob(r);
                f = new Uint8Array(b.length);
                for(let o = 0; o < b.length; o++)f[o] = b.charCodeAt(o);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(f, e);
        } else {
            const r = await fetch(_), f = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && f.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                const b = await r.arrayBuffer();
                n = await WebAssembly.instantiate(b, e);
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
                var _ = d().getInt32(r + 0, !0), n = d().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        last_or_edit_ms() {
            try {
                const r = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_last_or_edit_ms(r, this.__wbg_ptr);
                var _ = d().getInt32(r + 0, !0), n = d().getFloat64(r + 8, !0);
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
                var _ = d().getInt32(r + 0, !0), n = d().getFloat64(r + 8, !0);
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
                var _ = d().getInt32(r + 0, !0), n = d().getFloat64(r + 8, !0);
                return _ === 0 ? void 0 : n;
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        static new(_, n, r) {
            const f = c.gpugameoflife_new(a(_), n, r);
            return B(f);
        }
        static new_offscreen(_, n, r) {
            const f = c.gpugameoflife_new_offscreen(a(_), n, r);
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
        set_theme(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_set_theme(f, this.__wbg_ptr, a(_));
                var n = d().getInt32(f + 0, !0), r = d().getInt32(f + 4, !0);
                if (r) throw B(n);
            } finally{
                c.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_transition(_) {
            c.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16);
                c.gpugameoflife_set_zones(f, this.__wbg_ptr, a(_));
                var n = d().getInt32(f + 0, !0), r = d().getInt32(f + 4, !0);
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
            const r = c.webglgameoflife_new_offscreen(a(_), n);
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
        set_theme(_) {
            try {
                const f = c.__wbindgen_add_to_stack_pointer(-16);
                c.webglgameoflife_set_theme(f, this.__wbg_ptr, a(_));
                var n = d().getInt32(f + 0, !0), r = d().getInt32(f + 4, !0);
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
    function Z(e, _) {
        const n = Error(p(e, _));
        return a(n);
    }
    function J(e, _) {
        const n = String(t(_)), r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function K(e) {
        const _ = t(e).Window;
        return a(_);
    }
    function ee(e) {
        const _ = t(e).WorkerGlobalScope;
        return a(_);
    }
    function _e(e) {
        const _ = t(e), n = typeof _ == "boolean" ? _ : void 0;
        return s(n) ? 16777215 : n ? 1 : 0;
    }
    function te(e, _) {
        const n = q(t(_)), r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function ne(e, _) {
        return t(e) in t(_);
    }
    function re(e) {
        return typeof t(e) == "function";
    }
    function fe(e) {
        const _ = t(e);
        return typeof _ == "object" && _ !== null;
    }
    function ae(e) {
        return t(e) === void 0;
    }
    function be(e, _) {
        return t(e) == t(_);
    }
    function ce(e, _) {
        const n = t(_), r = typeof n == "number" ? n : void 0;
        d().setFloat64(e + 8, s(r) ? 0 : r, !0), d().setInt32(e + 0, !s(r), !0);
    }
    function oe(e, _) {
        const n = t(_), r = typeof n == "string" ? n : void 0;
        var f = s(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), b = y;
        d().setInt32(e + 4, b, !0), d().setInt32(e + 0, f, !0);
    }
    function ie(e, _) {
        throw new Error(p(e, _));
    }
    function ue(e) {
        t(e)._wbg_cb_unref();
    }
    function ge(e, _) {
        t(e).activeTexture(_ >>> 0);
    }
    function de(e, _) {
        t(e).activeTexture(_ >>> 0);
    }
    function se(e, _, n) {
        t(e).attachShader(t(_), t(n));
    }
    function we(e, _, n) {
        t(e).attachShader(t(_), t(n));
    }
    function me(e, _) {
        const n = t(e).beginComputePass(t(_));
        return a(n);
    }
    function le(e, _, n) {
        t(e).beginQuery(_ >>> 0, t(n));
    }
    function pe(e, _) {
        const n = t(e).beginRenderPass(t(_));
        return a(n);
    }
    function xe(e, _, n, r, f) {
        t(e).bindAttribLocation(t(_), n >>> 0, p(r, f));
    }
    function ye(e, _, n, r, f) {
        t(e).bindAttribLocation(t(_), n >>> 0, p(r, f));
    }
    function he(e, _, n, r, f, b) {
        t(e).bindBufferRange(_ >>> 0, n >>> 0, t(r), f, b);
    }
    function Se(e, _, n) {
        t(e).bindBuffer(_ >>> 0, t(n));
    }
    function Ie(e, _, n) {
        t(e).bindBuffer(_ >>> 0, t(n));
    }
    function Be(e, _, n) {
        t(e).bindFramebuffer(_ >>> 0, t(n));
    }
    function ve(e, _, n) {
        t(e).bindFramebuffer(_ >>> 0, t(n));
    }
    function Ae(e, _, n) {
        t(e).bindRenderbuffer(_ >>> 0, t(n));
    }
    function Pe(e, _, n) {
        t(e).bindRenderbuffer(_ >>> 0, t(n));
    }
    function De(e, _, n) {
        t(e).bindSampler(_ >>> 0, t(n));
    }
    function Te(e, _, n) {
        t(e).bindTexture(_ >>> 0, t(n));
    }
    function ke(e, _, n) {
        t(e).bindTexture(_ >>> 0, t(n));
    }
    function Me(e, _) {
        t(e).bindVertexArrayOES(t(_));
    }
    function Fe(e, _) {
        t(e).bindVertexArray(t(_));
    }
    function Le(e, _, n, r, f) {
        t(e).blendColor(_, n, r, f);
    }
    function Ce(e, _, n, r, f) {
        t(e).blendColor(_, n, r, f);
    }
    function Ee(e, _, n) {
        t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
    }
    function Ge(e, _, n) {
        t(e).blendEquationSeparate(_ >>> 0, n >>> 0);
    }
    function Re(e, _) {
        t(e).blendEquation(_ >>> 0);
    }
    function Oe(e, _) {
        t(e).blendEquation(_ >>> 0);
    }
    function Ve(e, _, n, r, f) {
        t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function We(e, _, n, r, f) {
        t(e).blendFuncSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Ue(e, _, n) {
        t(e).blendFunc(_ >>> 0, n >>> 0);
    }
    function ze(e, _, n) {
        t(e).blendFunc(_ >>> 0, n >>> 0);
    }
    function qe(e, _, n, r, f, b, o, u, g, w, x) {
        t(e).blitFramebuffer(_, n, r, f, b, o, u, g, w >>> 0, x >>> 0);
    }
    function je(e, _, n, r) {
        t(e).bufferData(_ >>> 0, n, r >>> 0);
    }
    function Qe(e, _, n, r) {
        t(e).bufferData(_ >>> 0, t(n), r >>> 0);
    }
    function Ne(e, _, n, r) {
        t(e).bufferData(_ >>> 0, t(n), r >>> 0);
    }
    function $e(e, _, n, r) {
        t(e).bufferData(_ >>> 0, n, r >>> 0);
    }
    function He(e, _, n, r) {
        t(e).bufferSubData(_ >>> 0, n, t(r));
    }
    function Xe(e, _, n, r) {
        t(e).bufferSubData(_ >>> 0, n, t(r));
    }
    function Ye(e) {
        const _ = t(e).buffer;
        return a(_);
    }
    function Ze() {
        return m(function(e, _, n) {
            const r = t(e).call(t(_), t(n));
            return a(r);
        }, arguments);
    }
    function Je() {
        return m(function(e, _) {
            const n = t(e).call(t(_));
            return a(n);
        }, arguments);
    }
    function Ke(e, _, n) {
        t(e).clearBuffer(t(_), n);
    }
    function e_(e, _, n, r) {
        t(e).clearBuffer(t(_), n, r);
    }
    function __(e, _, n, r, f) {
        t(e).clearBufferfv(_ >>> 0, n, l(r, f));
    }
    function t_(e, _, n, r, f) {
        t(e).clearBufferiv(_ >>> 0, n, v(r, f));
    }
    function n_(e, _, n, r, f) {
        t(e).clearBufferuiv(_ >>> 0, n, A(r, f));
    }
    function r_(e, _) {
        t(e).clearDepth(_);
    }
    function f_(e, _) {
        t(e).clearDepth(_);
    }
    function a_(e, _) {
        t(e).clearStencil(_);
    }
    function b_(e, _) {
        t(e).clearStencil(_);
    }
    function c_(e, _) {
        t(e).clear(_ >>> 0);
    }
    function o_(e, _) {
        t(e).clear(_ >>> 0);
    }
    function i_(e, _, n, r) {
        return t(e).clientWaitSync(t(_), n >>> 0, r >>> 0);
    }
    function u_(e, _, n, r, f) {
        t(e).colorMask(_ !== 0, n !== 0, r !== 0, f !== 0);
    }
    function g_(e, _, n, r, f) {
        t(e).colorMask(_ !== 0, n !== 0, r !== 0, f !== 0);
    }
    function d_(e, _) {
        t(e).compileShader(t(_));
    }
    function s_(e, _) {
        t(e).compileShader(t(_));
    }
    function w_(e, _, n, r, f, b, o, u, g) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, t(g));
    }
    function m_(e, _, n, r, f, b, o, u, g) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, t(g));
    }
    function l_(e, _, n, r, f, b, o, u, g, w) {
        t(e).compressedTexSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g, w);
    }
    function p_(e, _, n, r, f, b, o, u, g, w, x, S) {
        t(e).compressedTexSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x, S);
    }
    function x_(e, _, n, r, f, b, o, u, g, w, x) {
        t(e).compressedTexSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, t(x));
    }
    function y_(e, _) {
        t(e).configure(t(_));
    }
    function h_(e, _, n, r, f, b) {
        t(e).copyBufferSubData(_ >>> 0, n >>> 0, r, f, b);
    }
    function S_(e, _, n, r, f, b) {
        t(e).copyBufferToBuffer(t(_), n, t(r), f, b);
    }
    function I_(e, _, n, r) {
        t(e).copyBufferToTexture(t(_), t(n), t(r));
    }
    function B_(e, _, n, r) {
        t(e).copyExternalImageToTexture(t(_), t(n), t(r));
    }
    function v_(e, _, n, r, f, b, o, u, g) {
        t(e).copyTexSubImage2D(_ >>> 0, n, r, f, b, o, u, g);
    }
    function A_(e, _, n, r, f, b, o, u, g) {
        t(e).copyTexSubImage2D(_ >>> 0, n, r, f, b, o, u, g);
    }
    function P_(e, _, n, r, f, b, o, u, g, w) {
        t(e).copyTexSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w);
    }
    function D_(e, _, n, r) {
        t(e).copyTextureToBuffer(t(_), t(n), t(r));
    }
    function T_(e, _, n, r) {
        t(e).copyTextureToTexture(t(_), t(n), t(r));
    }
    function k_(e, _) {
        const n = t(e).createBindGroupLayout(t(_));
        return a(n);
    }
    function M_(e, _) {
        const n = t(e).createBindGroup(t(_));
        return a(n);
    }
    function F_(e) {
        const _ = t(e).createBuffer();
        return s(_) ? 0 : a(_);
    }
    function L_(e) {
        const _ = t(e).createBuffer();
        return s(_) ? 0 : a(_);
    }
    function C_(e, _) {
        const n = t(e).createBuffer(t(_));
        return a(n);
    }
    function E_(e, _) {
        const n = t(e).createCommandEncoder(t(_));
        return a(n);
    }
    function G_(e, _) {
        const n = t(e).createComputePipeline(t(_));
        return a(n);
    }
    function R_(e) {
        const _ = t(e).createFramebuffer();
        return s(_) ? 0 : a(_);
    }
    function O_(e) {
        const _ = t(e).createFramebuffer();
        return s(_) ? 0 : a(_);
    }
    function V_(e, _) {
        const n = t(e).createPipelineLayout(t(_));
        return a(n);
    }
    function W_(e) {
        const _ = t(e).createProgram();
        return s(_) ? 0 : a(_);
    }
    function U_(e) {
        const _ = t(e).createProgram();
        return s(_) ? 0 : a(_);
    }
    function z_(e, _) {
        const n = t(e).createQuerySet(t(_));
        return a(n);
    }
    function q_(e) {
        const _ = t(e).createQuery();
        return s(_) ? 0 : a(_);
    }
    function j_(e, _) {
        const n = t(e).createRenderBundleEncoder(t(_));
        return a(n);
    }
    function Q_(e, _) {
        const n = t(e).createRenderPipeline(t(_));
        return a(n);
    }
    function N_(e) {
        const _ = t(e).createRenderbuffer();
        return s(_) ? 0 : a(_);
    }
    function $_(e) {
        const _ = t(e).createRenderbuffer();
        return s(_) ? 0 : a(_);
    }
    function H_(e) {
        const _ = t(e).createSampler();
        return s(_) ? 0 : a(_);
    }
    function X_(e, _) {
        const n = t(e).createSampler(t(_));
        return a(n);
    }
    function Y_(e, _) {
        const n = t(e).createShaderModule(t(_));
        return a(n);
    }
    function Z_(e, _) {
        const n = t(e).createShader(_ >>> 0);
        return s(n) ? 0 : a(n);
    }
    function J_(e, _) {
        const n = t(e).createShader(_ >>> 0);
        return s(n) ? 0 : a(n);
    }
    function K_(e, _) {
        const n = t(e).createTexture(t(_));
        return a(n);
    }
    function et(e) {
        const _ = t(e).createTexture();
        return s(_) ? 0 : a(_);
    }
    function _t(e) {
        const _ = t(e).createTexture();
        return s(_) ? 0 : a(_);
    }
    function tt(e) {
        const _ = t(e).createVertexArrayOES();
        return s(_) ? 0 : a(_);
    }
    function nt(e) {
        const _ = t(e).createVertexArray();
        return s(_) ? 0 : a(_);
    }
    function rt(e, _) {
        const n = t(e).createView(t(_));
        return a(n);
    }
    function ft(e, _) {
        t(e).cullFace(_ >>> 0);
    }
    function at(e, _) {
        t(e).cullFace(_ >>> 0);
    }
    function bt(e, _) {
        t(e).deleteBuffer(t(_));
    }
    function ct(e, _) {
        t(e).deleteBuffer(t(_));
    }
    function ot(e, _) {
        t(e).deleteFramebuffer(t(_));
    }
    function it(e, _) {
        t(e).deleteFramebuffer(t(_));
    }
    function ut(e, _) {
        t(e).deleteProgram(t(_));
    }
    function gt(e, _) {
        t(e).deleteProgram(t(_));
    }
    function dt(e, _) {
        t(e).deleteQuery(t(_));
    }
    function st(e, _) {
        t(e).deleteRenderbuffer(t(_));
    }
    function wt(e, _) {
        t(e).deleteRenderbuffer(t(_));
    }
    function mt(e, _) {
        t(e).deleteSampler(t(_));
    }
    function lt(e, _) {
        t(e).deleteShader(t(_));
    }
    function pt(e, _) {
        t(e).deleteShader(t(_));
    }
    function xt(e, _) {
        t(e).deleteSync(t(_));
    }
    function yt(e, _) {
        t(e).deleteTexture(t(_));
    }
    function ht(e, _) {
        t(e).deleteTexture(t(_));
    }
    function St(e, _) {
        t(e).deleteVertexArrayOES(t(_));
    }
    function It(e, _) {
        t(e).deleteVertexArray(t(_));
    }
    function Bt(e, _) {
        t(e).depthFunc(_ >>> 0);
    }
    function vt(e, _) {
        t(e).depthFunc(_ >>> 0);
    }
    function At(e, _) {
        t(e).depthMask(_ !== 0);
    }
    function Pt(e, _) {
        t(e).depthMask(_ !== 0);
    }
    function Dt(e, _, n) {
        t(e).depthRange(_, n);
    }
    function Tt(e, _, n) {
        t(e).depthRange(_, n);
    }
    function kt(e) {
        t(e).destroy();
    }
    function Mt(e) {
        t(e).destroy();
    }
    function Ft(e) {
        t(e).destroy();
    }
    function Lt(e, _) {
        t(e).disableVertexAttribArray(_ >>> 0);
    }
    function Ct(e, _) {
        t(e).disableVertexAttribArray(_ >>> 0);
    }
    function Et(e, _) {
        t(e).disable(_ >>> 0);
    }
    function Gt(e, _) {
        t(e).disable(_ >>> 0);
    }
    function Rt(e, _, n) {
        t(e).dispatchWorkgroupsIndirect(t(_), n);
    }
    function Ot(e, _, n, r) {
        t(e).dispatchWorkgroups(_ >>> 0, n >>> 0, r >>> 0);
    }
    function Vt(e) {
        const _ = t(e).document;
        return s(_) ? 0 : a(_);
    }
    function Wt(e) {
        return t(e).done;
    }
    function Ut(e, _, n, r, f) {
        t(e).drawArraysInstancedANGLE(_ >>> 0, n, r, f);
    }
    function zt(e, _, n, r, f) {
        t(e).drawArraysInstanced(_ >>> 0, n, r, f);
    }
    function qt(e, _, n, r) {
        t(e).drawArrays(_ >>> 0, n, r);
    }
    function jt(e, _, n, r) {
        t(e).drawArrays(_ >>> 0, n, r);
    }
    function Qt(e, _) {
        t(e).drawBuffersWEBGL(t(_));
    }
    function Nt(e, _) {
        t(e).drawBuffers(t(_));
    }
    function $t(e, _, n, r, f, b) {
        t(e).drawElementsInstancedANGLE(_ >>> 0, n, r >>> 0, f, b);
    }
    function Ht(e, _, n, r, f, b) {
        t(e).drawElementsInstanced(_ >>> 0, n, r >>> 0, f, b);
    }
    function Xt(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function Yt(e, _, n) {
        t(e).drawIndexedIndirect(t(_), n);
    }
    function Zt(e, _, n, r, f, b) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, f, b >>> 0);
    }
    function Jt(e, _, n, r, f, b) {
        t(e).drawIndexed(_ >>> 0, n >>> 0, r >>> 0, f, b >>> 0);
    }
    function Kt(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function en(e, _, n) {
        t(e).drawIndirect(t(_), n);
    }
    function _n(e, _, n, r, f) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function tn(e, _, n, r, f) {
        t(e).draw(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function nn(e, _) {
        t(e).enableVertexAttribArray(_ >>> 0);
    }
    function rn(e, _) {
        t(e).enableVertexAttribArray(_ >>> 0);
    }
    function fn(e, _) {
        t(e).enable(_ >>> 0);
    }
    function an(e, _) {
        t(e).enable(_ >>> 0);
    }
    function bn(e, _) {
        t(e).endQuery(_ >>> 0);
    }
    function cn(e) {
        t(e).end();
    }
    function on(e) {
        t(e).end();
    }
    function un(e) {
        const _ = t(e).error;
        return a(_);
    }
    function gn(e, _) {
        let n, r;
        try {
            n = e, r = _, console.error(p(e, _));
        } finally{
            c.__wbindgen_export4(n, r, 1);
        }
    }
    function dn(e, _) {
        t(e).executeBundles(t(_));
    }
    function sn(e) {
        const _ = t(e).features;
        return a(_);
    }
    function wn(e) {
        const _ = t(e).features;
        return a(_);
    }
    function mn(e, _, n) {
        const r = t(e).fenceSync(_ >>> 0, n >>> 0);
        return s(r) ? 0 : a(r);
    }
    function ln(e, _) {
        const n = t(e).finish(t(_));
        return a(n);
    }
    function pn(e) {
        const _ = t(e).finish();
        return a(_);
    }
    function xn(e, _) {
        const n = t(e).finish(t(_));
        return a(n);
    }
    function yn(e) {
        const _ = t(e).finish();
        return a(_);
    }
    function hn(e, _, n, r, f) {
        t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(f));
    }
    function Sn(e, _, n, r, f) {
        t(e).framebufferRenderbuffer(_ >>> 0, n >>> 0, r >>> 0, t(f));
    }
    function In(e, _, n, r, f, b) {
        t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(f), b);
    }
    function Bn(e, _, n, r, f, b) {
        t(e).framebufferTexture2D(_ >>> 0, n >>> 0, r >>> 0, t(f), b);
    }
    function vn(e, _, n, r, f, b) {
        t(e).framebufferTextureLayer(_ >>> 0, n >>> 0, t(r), f, b);
    }
    function An(e, _, n, r, f, b, o) {
        t(e).framebufferTextureMultiviewOVR(_ >>> 0, n >>> 0, t(r), f, b, o);
    }
    function Pn(e, _) {
        t(e).frontFace(_ >>> 0);
    }
    function Dn(e, _) {
        t(e).frontFace(_ >>> 0);
    }
    function Tn(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return a(n);
    }
    function kn(e, _) {
        const n = t(e).getBindGroupLayout(_ >>> 0);
        return a(n);
    }
    function Mn(e, _, n, r) {
        t(e).getBufferSubData(_ >>> 0, n, t(r));
    }
    function Fn(e) {
        const _ = t(e).getCompilationInfo();
        return a(_);
    }
    function Ln() {
        return m(function(e, _, n, r) {
            const f = t(e).getContext(p(_, n), t(r));
            return s(f) ? 0 : a(f);
        }, arguments);
    }
    function Cn() {
        return m(function(e, _, n, r) {
            const f = t(e).getContext(p(_, n), t(r));
            return s(f) ? 0 : a(f);
        }, arguments);
    }
    function En() {
        return m(function(e, _, n) {
            const r = t(e).getContext(p(_, n));
            return s(r) ? 0 : a(r);
        }, arguments);
    }
    function Gn() {
        return m(function(e, _, n) {
            const r = t(e).getContext(p(_, n));
            return s(r) ? 0 : a(r);
        }, arguments);
    }
    function Rn(e) {
        const _ = t(e).getCurrentTexture();
        return a(_);
    }
    function On() {
        return m(function(e, _, n) {
            const r = t(e).getExtension(p(_, n));
            return s(r) ? 0 : a(r);
        }, arguments);
    }
    function Vn() {
        return m(function(e, _, n) {
            const r = t(e).getIndexedParameter(_ >>> 0, n >>> 0);
            return a(r);
        }, arguments);
    }
    function Wn(e, _, n) {
        const r = t(e).getMappedRange(_, n);
        return a(r);
    }
    function Un() {
        return m(function(e, _) {
            const n = t(e).getParameter(_ >>> 0);
            return a(n);
        }, arguments);
    }
    function zn() {
        return m(function(e, _) {
            const n = t(e).getParameter(_ >>> 0);
            return a(n);
        }, arguments);
    }
    function qn(e) {
        const _ = t(e).getPreferredCanvasFormat();
        return (Zc.indexOf(_) + 1 || 96) - 1;
    }
    function jn(e, _, n) {
        const r = t(_).getProgramInfoLog(t(n));
        var f = s(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), b = y;
        d().setInt32(e + 4, b, !0), d().setInt32(e + 0, f, !0);
    }
    function Qn(e, _, n) {
        const r = t(_).getProgramInfoLog(t(n));
        var f = s(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), b = y;
        d().setInt32(e + 4, b, !0), d().setInt32(e + 0, f, !0);
    }
    function Nn(e, _, n) {
        const r = t(e).getProgramParameter(t(_), n >>> 0);
        return a(r);
    }
    function $n(e, _, n) {
        const r = t(e).getProgramParameter(t(_), n >>> 0);
        return a(r);
    }
    function Hn(e, _, n) {
        const r = t(e).getQueryParameter(t(_), n >>> 0);
        return a(r);
    }
    function Xn(e, _, n) {
        const r = t(_).getShaderInfoLog(t(n));
        var f = s(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), b = y;
        d().setInt32(e + 4, b, !0), d().setInt32(e + 0, f, !0);
    }
    function Yn(e, _, n) {
        const r = t(_).getShaderInfoLog(t(n));
        var f = s(r) ? 0 : h(r, c.__wbindgen_export, c.__wbindgen_export2), b = y;
        d().setInt32(e + 4, b, !0), d().setInt32(e + 0, f, !0);
    }
    function Zn(e, _, n) {
        const r = t(e).getShaderParameter(t(_), n >>> 0);
        return a(r);
    }
    function Jn(e, _, n) {
        const r = t(e).getShaderParameter(t(_), n >>> 0);
        return a(r);
    }
    function Kn(e) {
        const _ = t(e).getSupportedExtensions();
        return s(_) ? 0 : a(_);
    }
    function er(e) {
        const _ = t(e).getSupportedProfiles();
        return s(_) ? 0 : a(_);
    }
    function _r(e, _, n) {
        const r = t(e).getSyncParameter(t(_), n >>> 0);
        return a(r);
    }
    function tr(e, _, n, r) {
        return t(e).getUniformBlockIndex(t(_), p(n, r));
    }
    function nr(e, _, n, r) {
        const f = t(e).getUniformLocation(t(_), p(n, r));
        return s(f) ? 0 : a(f);
    }
    function rr(e, _, n, r) {
        const f = t(e).getUniformLocation(t(_), p(n, r));
        return s(f) ? 0 : a(f);
    }
    function fr() {
        return m(function(e, _) {
            const n = Reflect.get(t(e), t(_));
            return a(n);
        }, arguments);
    }
    function ar(e, _) {
        const n = t(e)[_ >>> 0];
        return a(n);
    }
    function br(e, _) {
        const n = t(e)[_ >>> 0];
        return s(n) ? 0 : a(n);
    }
    function cr(e, _) {
        const n = t(e)[_ >>> 0];
        return a(n);
    }
    function or(e, _) {
        const n = t(e)[t(_)];
        return a(n);
    }
    function ir(e) {
        const _ = t(e).gpu;
        return a(_);
    }
    function ur(e) {
        const _ = M.__wrap(e);
        return a(_);
    }
    function gr(e, _, n) {
        return t(e).has(p(_, n));
    }
    function dr(e) {
        return t(e).height;
    }
    function sr(e) {
        return t(e).height;
    }
    function wr(e) {
        return t(e).height;
    }
    function mr(e, _, n) {
        return t(e).includes(t(_), n);
    }
    function lr(e) {
        let _;
        try {
            _ = t(e) instanceof ArrayBuffer;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function pr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function xr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function yr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function hr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Sr(e) {
        let _;
        try {
            _ = t(e) instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Ir(e) {
        let _;
        try {
            _ = t(e) instanceof HTMLCanvasElement;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Br(e) {
        let _;
        try {
            _ = t(e) instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function vr(e) {
        let _;
        try {
            _ = t(e) instanceof Uint8Array;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Ar(e) {
        let _;
        try {
            _ = t(e) instanceof WebGL2RenderingContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Pr(e) {
        let _;
        try {
            _ = t(e) instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Dr() {
        return m(function(e, _, n) {
            t(e).invalidateFramebuffer(_ >>> 0, t(n));
        }, arguments);
    }
    function Tr(e) {
        return Array.isArray(t(e));
    }
    function kr(e, _) {
        return Object.is(t(e), t(_));
    }
    function Mr() {
        return a(Symbol.iterator);
    }
    function Fr(e, _) {
        const n = t(_).label, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function Lr(e) {
        return t(e).length;
    }
    function Cr(e) {
        return t(e).length;
    }
    function Er(e) {
        return t(e).length;
    }
    function Gr(e) {
        const _ = t(e).limits;
        return a(_);
    }
    function Rr(e) {
        const _ = t(e).limits;
        return a(_);
    }
    function Or(e) {
        return t(e).lineNum;
    }
    function Vr(e, _) {
        t(e).linkProgram(t(_));
    }
    function Wr(e, _) {
        t(e).linkProgram(t(_));
    }
    function Ur(e) {
        const _ = t(e).lost;
        return a(_);
    }
    function zr(e, _, n, r) {
        const f = t(e).mapAsync(_ >>> 0, n, r);
        return a(f);
    }
    function qr(e) {
        return t(e).maxBindGroups;
    }
    function jr(e) {
        return t(e).maxBindingsPerBindGroup;
    }
    function Qr(e) {
        return t(e).maxBufferSize;
    }
    function Nr(e) {
        return t(e).maxColorAttachmentBytesPerSample;
    }
    function $r(e) {
        return t(e).maxColorAttachments;
    }
    function Hr(e) {
        return t(e).maxComputeInvocationsPerWorkgroup;
    }
    function Xr(e) {
        return t(e).maxComputeWorkgroupSizeX;
    }
    function Yr(e) {
        return t(e).maxComputeWorkgroupSizeY;
    }
    function Zr(e) {
        return t(e).maxComputeWorkgroupSizeZ;
    }
    function Jr(e) {
        return t(e).maxComputeWorkgroupStorageSize;
    }
    function Kr(e) {
        return t(e).maxComputeWorkgroupsPerDimension;
    }
    function ef(e) {
        return t(e).maxDynamicStorageBuffersPerPipelineLayout;
    }
    function _f(e) {
        return t(e).maxDynamicUniformBuffersPerPipelineLayout;
    }
    function tf(e) {
        return t(e).maxInterStageShaderComponents;
    }
    function nf(e) {
        return t(e).maxSampledTexturesPerShaderStage;
    }
    function rf(e) {
        return t(e).maxSamplersPerShaderStage;
    }
    function ff(e) {
        return t(e).maxStorageBufferBindingSize;
    }
    function af(e) {
        return t(e).maxStorageBuffersPerShaderStage;
    }
    function bf(e) {
        return t(e).maxStorageTexturesPerShaderStage;
    }
    function cf(e) {
        return t(e).maxTextureArrayLayers;
    }
    function of(e) {
        return t(e).maxTextureDimension1D;
    }
    function uf(e) {
        return t(e).maxTextureDimension2D;
    }
    function gf(e) {
        return t(e).maxTextureDimension3D;
    }
    function df(e) {
        return t(e).maxUniformBufferBindingSize;
    }
    function sf(e) {
        return t(e).maxUniformBuffersPerShaderStage;
    }
    function wf(e) {
        return t(e).maxVertexAttributes;
    }
    function mf(e) {
        return t(e).maxVertexBufferArrayStride;
    }
    function lf(e) {
        return t(e).maxVertexBuffers;
    }
    function pf(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function xf(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function yf(e, _) {
        const n = t(_).message, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function hf(e) {
        const _ = t(e).messages;
        return a(_);
    }
    function Sf(e) {
        return t(e).minStorageBufferOffsetAlignment;
    }
    function If(e) {
        return t(e).minUniformBufferOffsetAlignment;
    }
    function Bf(e) {
        const _ = t(e).navigator;
        return a(_);
    }
    function vf(e) {
        const _ = t(e).navigator;
        return a(_);
    }
    function Af() {
        const e = new Error;
        return a(e);
    }
    function Pf(e) {
        const _ = new Uint8Array(t(e));
        return a(_);
    }
    function Df() {
        const e = new Array;
        return a(e);
    }
    function Tf() {
        const e = new Object;
        return a(e);
    }
    function kf(e, _) {
        const n = new Uint8Array(j(e, _));
        return a(n);
    }
    function Mf(e, _) {
        try {
            var n = {
                a: e,
                b: _
            }, r = (b, o)=>{
                const u = n.a;
                n.a = 0;
                try {
                    return $c(u, n.b, b, o);
                } finally{
                    n.a = u;
                }
            };
            const f = new Promise(r);
            return a(f);
        } finally{
            n.a = n.b = 0;
        }
    }
    function Ff() {
        const e = new Array;
        return a(e);
    }
    function Lf(e, _, n) {
        const r = new Uint8Array(t(e), _ >>> 0, n >>> 0);
        return a(r);
    }
    function Cf() {
        return m(function(e) {
            const _ = t(e).next();
            return a(_);
        }, arguments);
    }
    function Ef(e) {
        const _ = t(e).next;
        return a(_);
    }
    function Gf() {
        return Date.now();
    }
    function Rf(e) {
        const _ = Array.of(t(e));
        return a(_);
    }
    function Of(e) {
        return t(e).offset;
    }
    function Vf(e, _, n) {
        t(e).pixelStorei(_ >>> 0, n);
    }
    function Wf(e, _, n) {
        t(e).pixelStorei(_ >>> 0, n);
    }
    function Uf(e, _, n) {
        t(e).polygonOffset(_, n);
    }
    function zf(e, _, n) {
        t(e).polygonOffset(_, n);
    }
    function qf(e) {
        const _ = t(e).popErrorScope();
        return a(_);
    }
    function jf(e, _, n) {
        Uint8Array.prototype.set.call(j(e, _), t(n));
    }
    function Qf(e, _) {
        t(e).pushErrorScope(Yc[_]);
    }
    function Nf(e, _) {
        return t(e).push(t(_));
    }
    function $f() {
        return m(function(e, _, n) {
            const r = t(e).querySelectorAll(p(_, n));
            return a(r);
        }, arguments);
    }
    function Hf() {
        return m(function(e, _, n) {
            const r = t(e).querySelector(p(_, n));
            return s(r) ? 0 : a(r);
        }, arguments);
    }
    function Xf(e) {
        const _ = t(e).queueMicrotask;
        return a(_);
    }
    function Yf(e) {
        queueMicrotask(t(e));
    }
    function Zf(e) {
        const _ = t(e).queue;
        return a(_);
    }
    function Jf(e, _) {
        t(e).readBuffer(_ >>> 0);
    }
    function Kf() {
        return m(function(e, _, n, r, f, b, o, u) {
            t(e).readPixels(_, n, r, f, b >>> 0, o >>> 0, t(u));
        }, arguments);
    }
    function ea() {
        return m(function(e, _, n, r, f, b, o, u) {
            t(e).readPixels(_, n, r, f, b >>> 0, o >>> 0, t(u));
        }, arguments);
    }
    function _a() {
        return m(function(e, _, n, r, f, b, o, u) {
            t(e).readPixels(_, n, r, f, b >>> 0, o >>> 0, u);
        }, arguments);
    }
    function ta(e) {
        const _ = t(e).reason;
        return (Xc.indexOf(_) + 1 || 3) - 1;
    }
    function na(e, _, n, r, f, b) {
        t(e).renderbufferStorageMultisample(_ >>> 0, n, r >>> 0, f, b);
    }
    function ra(e, _, n, r, f) {
        t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, f);
    }
    function fa(e, _, n, r, f) {
        t(e).renderbufferStorage(_ >>> 0, n >>> 0, r, f);
    }
    function aa(e, _) {
        const n = t(e).requestAdapter(t(_));
        return a(n);
    }
    function ba(e, _) {
        const n = (t(_)?.requiredLimits && delete t(_).requiredLimits.maxInterStageShaderComponents, t(e).requestDevice(t(_)));
        return a(n);
    }
    function ca(e, _, n, r, f, b) {
        t(e).resolveQuerySet(t(_), n >>> 0, r >>> 0, t(f), b >>> 0);
    }
    function oa(e) {
        const _ = Promise.resolve(t(e));
        return a(_);
    }
    function ia(e, _, n, r) {
        t(e).samplerParameterf(t(_), n >>> 0, r);
    }
    function ua(e, _, n, r) {
        t(e).samplerParameteri(t(_), n >>> 0, r);
    }
    function ga(e, _, n, r, f) {
        t(e).scissor(_, n, r, f);
    }
    function da(e, _, n, r, f) {
        t(e).scissor(_, n, r, f);
    }
    function sa(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function wa(e, _, n, r, f, b, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), b, o >>> 0);
    }
    function ma(e, _, n, r, f, b, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), b, o >>> 0);
    }
    function la(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function pa(e, _, n, r, f, b, o) {
        t(e).setBindGroup(_ >>> 0, t(n), A(r, f), b, o >>> 0);
    }
    function xa(e, _, n) {
        t(e).setBindGroup(_ >>> 0, t(n));
    }
    function ya(e, _) {
        t(e).setBlendConstant(t(_));
    }
    function ha(e, _, n, r, f) {
        t(e).setIndexBuffer(t(_), U[n], r, f);
    }
    function Sa(e, _, n, r) {
        t(e).setIndexBuffer(t(_), U[n], r);
    }
    function Ia(e, _, n, r) {
        t(e).setIndexBuffer(t(_), U[n], r);
    }
    function Ba(e, _, n, r, f) {
        t(e).setIndexBuffer(t(_), U[n], r, f);
    }
    function va(e, _) {
        t(e).setPipeline(t(_));
    }
    function Aa(e, _) {
        t(e).setPipeline(t(_));
    }
    function Pa(e, _) {
        t(e).setPipeline(t(_));
    }
    function Da(e, _, n, r, f) {
        t(e).setScissorRect(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function Ta(e, _) {
        t(e).setStencilReference(_ >>> 0);
    }
    function ka(e, _, n, r, f) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, f);
    }
    function Ma(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function Fa(e, _, n, r, f) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r, f);
    }
    function La(e, _, n, r) {
        t(e).setVertexBuffer(_ >>> 0, t(n), r);
    }
    function Ca(e, _, n, r, f, b, o) {
        t(e).setViewport(_, n, r, f, b, o);
    }
    function Ea() {
        return m(function(e, _, n) {
            return Reflect.set(t(e), t(_), t(n));
        }, arguments);
    }
    function Ga(e, _, n) {
        t(e).set(t(_), n >>> 0);
    }
    function Ra(e, _) {
        t(e).height = _ >>> 0;
    }
    function Oa(e, _) {
        t(e).height = _ >>> 0;
    }
    function Va(e, _) {
        t(e).onuncapturederror = t(_);
    }
    function Wa(e, _) {
        t(e).width = _ >>> 0;
    }
    function Ua(e, _) {
        t(e).width = _ >>> 0;
    }
    function za(e, _, n, r) {
        t(e).shaderSource(t(_), p(n, r));
    }
    function qa(e, _, n, r) {
        t(e).shaderSource(t(_), p(n, r));
    }
    function ja(e) {
        return t(e).size;
    }
    function Qa(e, _) {
        const n = t(_).stack, r = h(n, c.__wbindgen_export, c.__wbindgen_export2), f = y;
        d().setInt32(e + 4, f, !0), d().setInt32(e + 0, r, !0);
    }
    function Na() {
        const e = typeof global > "u" ? null : global;
        return s(e) ? 0 : a(e);
    }
    function $a() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return s(e) ? 0 : a(e);
    }
    function Ha() {
        const e = typeof self > "u" ? null : self;
        return s(e) ? 0 : a(e);
    }
    function Xa() {
        const e = typeof window > "u" ? null : window;
        return s(e) ? 0 : a(e);
    }
    function Ya(e, _, n, r, f) {
        t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, f >>> 0);
    }
    function Za(e, _, n, r, f) {
        t(e).stencilFuncSeparate(_ >>> 0, n >>> 0, r, f >>> 0);
    }
    function Ja(e, _, n) {
        t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
    }
    function Ka(e, _, n) {
        t(e).stencilMaskSeparate(_ >>> 0, n >>> 0);
    }
    function eb(e, _) {
        t(e).stencilMask(_ >>> 0);
    }
    function _b(e, _) {
        t(e).stencilMask(_ >>> 0);
    }
    function tb(e, _, n, r, f) {
        t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function nb(e, _, n, r, f) {
        t(e).stencilOpSeparate(_ >>> 0, n >>> 0, r >>> 0, f >>> 0);
    }
    function rb(e, _) {
        t(e).submit(t(_));
    }
    function fb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function ab() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function bb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x) {
            t(e).texImage3D(_ >>> 0, n, r, f, b, o, u, g >>> 0, w >>> 0, t(x));
        }, arguments);
    }
    function cb(e, _, n, r) {
        t(e).texParameteri(_ >>> 0, n >>> 0, r);
    }
    function ob(e, _, n, r) {
        t(e).texParameteri(_ >>> 0, n >>> 0, r);
    }
    function ib(e, _, n, r, f, b) {
        t(e).texStorage2D(_ >>> 0, n, r >>> 0, f, b);
    }
    function ub(e, _, n, r, f, b, o) {
        t(e).texStorage3D(_ >>> 0, n, r >>> 0, f, b, o);
    }
    function gb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function db() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function sb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function wb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function mb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, w);
        }, arguments);
    }
    function lb() {
        return m(function(e, _, n, r, f, b, o, u, g, w) {
            t(e).texSubImage2D(_ >>> 0, n, r, f, b, o, u >>> 0, g >>> 0, t(w));
        }, arguments);
    }
    function pb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function xb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function yb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function hb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x >>> 0, S);
        }, arguments);
    }
    function Sb() {
        return m(function(e, _, n, r, f, b, o, u, g, w, x, S) {
            t(e).texSubImage3D(_ >>> 0, n, r, f, b, o, u, g, w >>> 0, x >>> 0, t(S));
        }, arguments);
    }
    function Ib(e, _) {
        const n = t(e).then(t(_));
        return a(n);
    }
    function Bb(e, _) {
        const n = t(e).then(t(_));
        return a(n);
    }
    function vb(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return a(r);
    }
    function Ab(e, _, n) {
        const r = t(e).then(t(_), t(n));
        return a(r);
    }
    function Pb(e) {
        const _ = t(e).type;
        return (Hc.indexOf(_) + 1 || 4) - 1;
    }
    function Db(e, _, n) {
        t(e).uniform1f(t(_), n);
    }
    function Tb(e, _, n) {
        t(e).uniform1f(t(_), n);
    }
    function kb(e, _, n) {
        t(e).uniform1i(t(_), n);
    }
    function Mb(e, _, n) {
        t(e).uniform1i(t(_), n);
    }
    function Fb(e, _, n) {
        t(e).uniform1ui(t(_), n >>> 0);
    }
    function Lb(e, _, n, r) {
        t(e).uniform2fv(t(_), l(n, r));
    }
    function Cb(e, _, n, r) {
        t(e).uniform2fv(t(_), l(n, r));
    }
    function Eb(e, _, n, r) {
        t(e).uniform2iv(t(_), v(n, r));
    }
    function Gb(e, _, n, r) {
        t(e).uniform2iv(t(_), v(n, r));
    }
    function Rb(e, _, n, r) {
        t(e).uniform2uiv(t(_), A(n, r));
    }
    function Ob(e, _, n, r) {
        t(e).uniform3fv(t(_), l(n, r));
    }
    function Vb(e, _, n, r) {
        t(e).uniform3fv(t(_), l(n, r));
    }
    function Wb(e, _, n, r) {
        t(e).uniform3iv(t(_), v(n, r));
    }
    function Ub(e, _, n, r) {
        t(e).uniform3iv(t(_), v(n, r));
    }
    function zb(e, _, n, r) {
        t(e).uniform3uiv(t(_), A(n, r));
    }
    function qb(e, _, n, r, f, b) {
        t(e).uniform4f(t(_), n, r, f, b);
    }
    function jb(e, _, n, r, f, b) {
        t(e).uniform4f(t(_), n, r, f, b);
    }
    function Qb(e, _, n, r) {
        t(e).uniform4fv(t(_), l(n, r));
    }
    function Nb(e, _, n, r) {
        t(e).uniform4fv(t(_), l(n, r));
    }
    function $b(e, _, n, r) {
        t(e).uniform4iv(t(_), v(n, r));
    }
    function Hb(e, _, n, r) {
        t(e).uniform4iv(t(_), v(n, r));
    }
    function Xb(e, _, n, r) {
        t(e).uniform4uiv(t(_), A(n, r));
    }
    function Yb(e, _, n, r) {
        t(e).uniformBlockBinding(t(_), n >>> 0, r >>> 0);
    }
    function Zb(e, _, n, r, f) {
        t(e).uniformMatrix2fv(t(_), n !== 0, l(r, f));
    }
    function Jb(e, _, n, r, f) {
        t(e).uniformMatrix2fv(t(_), n !== 0, l(r, f));
    }
    function Kb(e, _, n, r, f) {
        t(e).uniformMatrix2x3fv(t(_), n !== 0, l(r, f));
    }
    function ec(e, _, n, r, f) {
        t(e).uniformMatrix2x4fv(t(_), n !== 0, l(r, f));
    }
    function _c(e, _, n, r, f) {
        t(e).uniformMatrix3fv(t(_), n !== 0, l(r, f));
    }
    function tc(e, _, n, r, f) {
        t(e).uniformMatrix3fv(t(_), n !== 0, l(r, f));
    }
    function nc(e, _, n, r, f) {
        t(e).uniformMatrix3x2fv(t(_), n !== 0, l(r, f));
    }
    function rc(e, _, n, r, f) {
        t(e).uniformMatrix3x4fv(t(_), n !== 0, l(r, f));
    }
    function fc(e, _, n, r, f) {
        t(e).uniformMatrix4fv(t(_), n !== 0, l(r, f));
    }
    function ac(e, _, n, r, f) {
        t(e).uniformMatrix4fv(t(_), n !== 0, l(r, f));
    }
    function bc(e, _, n, r, f) {
        t(e).uniformMatrix4x2fv(t(_), n !== 0, l(r, f));
    }
    function cc(e, _, n, r, f) {
        t(e).uniformMatrix4x3fv(t(_), n !== 0, l(r, f));
    }
    function oc(e) {
        t(e).unmap();
    }
    function ic(e) {
        return t(e).usage;
    }
    function uc(e, _) {
        t(e).useProgram(t(_));
    }
    function gc(e, _) {
        t(e).useProgram(t(_));
    }
    function dc(e) {
        const _ = t(e).valueOf();
        return a(_);
    }
    function sc(e) {
        const _ = t(e).value;
        return a(_);
    }
    function wc(e, _, n) {
        t(e).vertexAttribDivisorANGLE(_ >>> 0, n >>> 0);
    }
    function mc(e, _, n) {
        t(e).vertexAttribDivisor(_ >>> 0, n >>> 0);
    }
    function lc(e, _, n, r, f, b) {
        t(e).vertexAttribIPointer(_ >>> 0, n, r >>> 0, f, b);
    }
    function pc(e, _, n, r, f, b, o) {
        t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, f !== 0, b, o);
    }
    function xc(e, _, n, r, f, b, o) {
        t(e).vertexAttribPointer(_ >>> 0, n, r >>> 0, f !== 0, b, o);
    }
    function yc(e) {
        return t(e).videoHeight;
    }
    function hc(e) {
        return t(e).videoWidth;
    }
    function Sc(e, _, n, r, f) {
        t(e).viewport(_, n, r, f);
    }
    function Ic(e, _, n, r, f) {
        t(e).viewport(_, n, r, f);
    }
    function Bc(e) {
        const _ = F.__wrap(e);
        return a(_);
    }
    function vc(e) {
        return t(e).width;
    }
    function Ac(e) {
        return t(e).width;
    }
    function Pc(e) {
        return t(e).width;
    }
    function Dc(e, _, n, r, f, b) {
        t(e).writeBuffer(t(_), n, t(r), f, b);
    }
    function Tc(e, _, n, r, f) {
        t(e).writeTexture(t(_), t(n), t(r), t(f));
    }
    function kc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_3618, Nc);
        return a(n);
    }
    function Mc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_1659, jc);
        return a(n);
    }
    function Fc(e, _) {
        const n = Q(e, _, c.__wasm_bindgen_func_elem_1659, Qc);
        return a(n);
    }
    function Lc(e) {
        return a(e);
    }
    function Cc(e, _) {
        const n = l(e, _);
        return a(n);
    }
    function Ec(e, _) {
        const n = Kc(e, _);
        return a(n);
    }
    function Gc(e, _) {
        const n = v(e, _);
        return a(n);
    }
    function Rc(e, _) {
        const n = eo(e, _);
        return a(n);
    }
    function Oc(e, _) {
        const n = _o(e, _);
        return a(n);
    }
    function Vc(e, _) {
        const n = A(e, _);
        return a(n);
    }
    function Wc(e, _) {
        const n = j(e, _);
        return a(n);
    }
    function Uc(e, _) {
        const n = p(e, _);
        return a(n);
    }
    function zc(e) {
        const _ = t(e);
        return a(_);
    }
    function qc(e) {
        B(e);
    }
    function jc(e, _, n) {
        c.__wasm_bindgen_func_elem_1820(e, _, a(n));
    }
    function Qc(e, _, n) {
        c.__wasm_bindgen_func_elem_1820_2(e, _, a(n));
    }
    function Nc(e, _, n) {
        try {
            const b = c.__wbindgen_add_to_stack_pointer(-16);
            c.__wasm_bindgen_func_elem_8149(b, e, _, a(n));
            var r = d().getInt32(b + 0, !0), f = d().getInt32(b + 4, !0);
            if (f) throw B(r);
        } finally{
            c.__wbindgen_add_to_stack_pointer(16);
        }
    }
    function $c(e, _, n, r) {
        c.__wasm_bindgen_func_elem_8151(e, _, a(n), a(r));
    }
    const Hc = [
        "error",
        "warning",
        "info"
    ], Xc = [
        "unknown",
        "destroyed"
    ], Yc = [
        "validation",
        "out-of-memory",
        "internal"
    ], U = [
        "uint16",
        "uint32"
    ], Zc = [
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
    function a(e) {
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
            let b = "[";
            f > 0 && (b += q(e[0]));
            for(let o = 1; o < f; o++)b += ", " + q(e[o]);
            return b += "]", b;
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
    function Jc(e) {
        e < 1028 || (I[e] = T, T = e);
    }
    function l(e, _) {
        return e = e >>> 0, to().subarray(e / 4, e / 4 + _);
    }
    function Kc(e, _) {
        return e = e >>> 0, no().subarray(e / 2, e / 2 + _);
    }
    function v(e, _) {
        return e = e >>> 0, ro().subarray(e / 4, e / 4 + _);
    }
    function eo(e, _) {
        return e = e >>> 0, fo().subarray(e / 1, e / 1 + _);
    }
    function _o(e, _) {
        return e = e >>> 0, ao().subarray(e / 2, e / 2 + _);
    }
    function A(e, _) {
        return e = e >>> 0, bo().subarray(e / 4, e / 4 + _);
    }
    function j(e, _) {
        return e = e >>> 0, D().subarray(e / 1, e / 1 + _);
    }
    let P = null;
    function d() {
        return (P === null || P.buffer.detached === !0 || P.buffer.detached === void 0 && P.buffer !== c.memory.buffer) && (P = new DataView(c.memory.buffer)), P;
    }
    let L = null;
    function to() {
        return (L === null || L.byteLength === 0) && (L = new Float32Array(c.memory.buffer)), L;
    }
    let C = null;
    function no() {
        return (C === null || C.byteLength === 0) && (C = new Int16Array(c.memory.buffer)), C;
    }
    let E = null;
    function ro() {
        return (E === null || E.byteLength === 0) && (E = new Int32Array(c.memory.buffer)), E;
    }
    let G = null;
    function fo() {
        return (G === null || G.byteLength === 0) && (G = new Int8Array(c.memory.buffer)), G;
    }
    function p(e, _) {
        return e = e >>> 0, oo(e, _);
    }
    let R = null;
    function ao() {
        return (R === null || R.byteLength === 0) && (R = new Uint16Array(c.memory.buffer)), R;
    }
    let O = null;
    function bo() {
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
            c.__wbindgen_export3(a(n));
        }
    }
    let I = new Array(1024).fill(void 0);
    I.push(void 0, null, !0, !1);
    let T = I.length;
    function s(e) {
        return e == null;
    }
    function Q(e, _, n, r) {
        const f = {
            a: e,
            b: _,
            cnt: 1,
            dtor: n
        }, b = (...o)=>{
            f.cnt++;
            const u = f.a;
            f.a = 0;
            try {
                return r(u, f.b, ...o);
            } finally{
                f.a = u, b._wbg_cb_unref();
            }
        };
        return b._wbg_cb_unref = ()=>{
            --f.cnt === 0 && (f.dtor(f.a, f.b), f.a = 0, H.unregister(f));
        }, H.register(b, f, f), b;
    }
    function h(e, _, n) {
        if (n === void 0) {
            const u = k.encode(e), g = _(u.length, 1) >>> 0;
            return D().subarray(g, g + u.length).set(u), y = u.length, g;
        }
        let r = e.length, f = _(r, 1) >>> 0;
        const b = D();
        let o = 0;
        for(; o < r; o++){
            const u = e.charCodeAt(o);
            if (u > 127) break;
            b[f + o] = u;
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
        return Jc(e), _;
    }
    let W = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    W.decode();
    const co = 2146435072;
    let z = 0;
    function oo(e, _) {
        return z += _, z >= co && (W = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), W.decode(), z = _), W.decode(D().subarray(e, e + _));
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
    function io(e) {
        c = e;
    }
    URL = globalThis.URL;
    const i = await Y({
        "./game_of_life_gpu_bg.js": {
            __wbg_new_typed_aaaeaf29cf802876: Mf,
            __wbg_done_08ce71ee07e3bd17: Wt,
            __wbg_value_21fc78aab0322612: sc,
            __wbindgen_object_drop_ref: qc,
            __wbg_gpugameoflife_new: ur,
            __wbg_webglgameoflife_new: Bc,
            __wbg_call_2d781c1f4d5c0ef8: Ze,
            __wbg_next_11b99ee6237339e3: Cf,
            __wbindgen_object_clone_ref: zc,
            __wbg_get_a8ee5c45dabc1b3b: ar,
            __wbg_get_with_ref_key_6412cf3094599694: or,
            __wbg_String_8564e559799eccda: J,
            __wbg_new_227d7c05414eb861: Af,
            __wbg_stack_3b0d974bbf31e44f: Qa,
            __wbg_error_a6fa202b58aa1cd3: gn,
            __wbg_then_9e335f6dd892bc11: vb,
            __wbg_submit_60f2469dc00130cc: rb,
            __wbg_new_typed_bccac67128ed885a: Ff,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: Sr,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: xr,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: hr,
            __wbg_instanceof_Object_be1962063fcc0c9f: Br,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: pr,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: yr,
            __wbg_error_2acb88afe0ad9a3e: un,
            __wbg_valueOf_5c6da6c9a85f34dc: dc,
            __wbg_messages_4e98c7e63c5efe7b: hf,
            __wbg_message_f762db05c1294eca: yf,
            __wbg_size_1dfbf7241f9df1cc: ja,
            __wbg_features_fdbd3daed26aa468: wn,
            __wbg_label_cdc2b7a875dc5123: Fr,
            __wbg_reason_d7f4ddcad86f8d99: ta,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: of,
            __wbg_message_a77e1a9202609622: xf,
            __wbg_usage_ee2982f59567c06f: ic,
            __wbg_limits_becc24c879d87717: Rr,
            __wbg_configure_6e1ccd3ac31b721c: y_,
            __wbg_message_1b27ea1ad3998a9f: pf,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: uf,
            __wbg_type_4b0a304ebc25e195: Pb,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: qn,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: Fn,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Rn,
            __wbg_getBindGroupLayout_b9533489f3ee14df: kn,
            __wbg_getBindGroupLayout_aba26df848b4322d: Tn,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: gf,
            __wbg_lineNum_24517b98f306fcae: Or,
            __wbg_finish_ee515f526784acd5: yn,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: Yr,
            __wbg_popErrorScope_2869a89dd4626f0c: qf,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: Zr,
            __wbg_drawIndirect_73df189881970a43: Kt,
            __wbg_setIndexBuffer_4219294fa3e2d59b: ha,
            __wbg_writeBuffer_b5e6e8f3f93629bc: Dc,
            __wbg_pushErrorScope_72e651b0f8f64c0e: Qf,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: Kr,
            __wbg_setPipeline_723820e1c5cc61e7: Aa,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: Sa,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: La,
            __wbg_writeTexture_57e41dd94bac65c4: Tc,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: Ba,
            __wbg_setPipeline_f2cf83769bb33769: Pa,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Fa,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: Ma,
            __wbg_getMappedRange_11ec4cfce4df1e72: Wn,
            __wbg_setVertexBuffer_54536e0e73bfc91e: ka,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: B_,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: me,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: cf,
            __wbg_end_54134488dbc5b7a9: cn,
            __wbg_has_2184fc4b845f2b5f: gr,
            __wbg_finish_eb06372cc93f8d50: xn,
            __wbg_requestAdapter_e4b32f2647c66726: aa,
            __wbg_features_30a76d141781ad80: sn,
            __wbg_beginRenderPass_9a7bf53d588737dc: pe,
            __wbg_maxBindGroups_5d3409c14d2756b5: qr,
            __wbg_offset_164492575e959c94: Of,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Ot,
            __wbg_setBindGroup_1602c955be9b2eaa: sa,
            __wbg_destroy_50767c0458f7c8d1: kt,
            __wbg_limits_5b3783fcc0d36428: Gr,
            __wbg_requestDevice_6130c3ba10d633f9: ba,
            __wbg_executeBundles_2905636f81aabf99: dn,
            __wbg_length_87e0297027dd7802: Lr,
            __wbg_queue_6b07ccdd49a6ba90: Zf,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: jr,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Rt,
            __wbg_lost_2c34651e3317be8b: Ur,
            __wbg_clearBuffer_b08b15b7ee3c9d57: Ke,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: _f,
            __wbg_setBlendConstant_257274277b0e3153: ya,
            __wbg_end_57a2746c247f499a: on,
            __wbg_setBindGroup_6149584f04998372: wa,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: ef,
            __wbg_setScissorRect_0578b1de90caf434: Da,
            __wbg_setPipeline_481f34ae14c49d67: va,
            __wbg_set_onuncapturederror_729c2e42c36923f4: Va,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: nf,
            __wbg_setStencilReference_7616273572b1075e: Ta,
            __wbg_setBindGroup_9877b57492cb7e1c: la,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: rf,
            __wbg_setViewport_94128a2b1a708040: Ca,
            __wbg_createView_c227b9af7bd5f441: rt,
            __wbg_clearBuffer_f24f8de43db597ec: e_,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: af,
            __wbg_setBindGroup_f930832baeb4279b: xa,
            __wbg_createBindGroup_876adbf7e329ce2e: M_,
            __wbg_destroy_a2c0702c5d1269b5: Ft,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: bf,
            __wbg_setBindGroup_8d384b1c5ed329f4: ma,
            __wbg_createBindGroupLayout_e37f9323c278f93f: k_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: sf,
            __wbg_createBuffer_e3f8b2bd8b492498: C_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: df,
            __wbg_setBindGroup_f4d552dcef65a491: pa,
            __wbg_draw_ce5e8b8ad56571cb: tn,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: ff,
            __wbg_createCommandEncoder_e617922978f8b4de: E_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: If,
            __wbg_createComputePipeline_6794bf24c6c03583: G_,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: Sf,
            __wbg_then_1d7a5273811a5cea: Bb,
            __wbg_maxVertexBuffers_e5cf174a3497d472: lf,
            __wbg_mapAsync_8d0ffc031e86e9a0: zr,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: V_,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: S_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: Qr,
            __wbg_drawIndexed_55f6bf3bda0212ad: Zt,
            __wbg_unmap_4aa38f8c5283cc1d: oc,
            __wbg_createQuerySet_6050df2adcb1f167: z_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: wf,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: j_,
            __wbg_copyBufferToTexture_48aa78a412b2a467: I_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: mf,
            __wbg_draw_57caf8f0bc1ea050: _n,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: Yt,
            __wbg_createRenderPipeline_921034ccba195ffe: Q_,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: tf,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: D_,
            __wbg_drawIndirect_a2f7c719957f8ec9: en,
            __wbg_maxColorAttachments_378f5fb1c453321d: $r,
            __wbg_createSampler_cb4137c4e97c7098: X_,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: T_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: Nr,
            __wbg_createShaderModule_912a19a8ccc2aa1a: Y_,
            __wbg_finish_41491ca602373cde: pn,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: Jr,
            __wbg_drawIndexed_9c9719597507e735: Jt,
            __wbg_setIndexBuffer_7e208bb69310ed01: Ia,
            __wbg_createTexture_1a3ebeb1ddd7a035: K_,
            __wbg_finish_35be15c58b55a95b: ln,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: Hr,
            __wbg_destroy_80182ff6e496228e: Mt,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: ca,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: Xr,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Xt,
            __wbg_Window_06e90eea4c7df280: K,
            __wbg_gpu_d9721d200584e919: ir,
            __wbg_WorkerGlobalScope_defda269b75e179a: ee,
            __wbg_resolve_ae8d83246e5bcc12: oa,
            __wbg_then_098abe61755d12f6: Ib,
            __wbg_queueMicrotask_0c399741342fb10f: Xf,
            __wbg_queueMicrotask_a082d78ce798393e: Yf,
            __wbg_length_b3416cf66a5452c8: Cr,
            __wbg_includes_9f81335525be01f9: mr,
            __wbg_get_unchecked_329cfe50afab7352: cr,
            __wbg_push_e87b0e732085a946: Nf,
            __wbg_instanceof_Window_23e677d2c6843922: Pr,
            __wbg_uniform2iv_892b6d31137ad198: Eb,
            __wbg_uniform3fv_85a9a17c9635941b: Ob,
            __wbg_clearBufferuiv_d75635e80261ea93: n_,
            __wbg_uniform3iv_4c372010ac6def3f: Ub,
            __wbg_uniform4fv_c416900acf65eca9: Nb,
            __wbg_clear_5a0606f7c62ad39a: o_,
            __wbg_compressedTexSubImage2D_aab12b65159c282e: m_,
            __wbg_clearDepth_3ff5ef5e5fad4016: f_,
            __wbg_clearStencil_4505636e726114d0: b_,
            __wbg_colorMask_b053114f7da42448: u_,
            __wbg_compileShader_623a1051cf49494b: d_,
            __wbg_copyTexSubImage2D_b9a10d000c616b3e: A_,
            __wbg_createBuffer_8e47b88217a98607: L_,
            __wbg_createFramebuffer_911d55689ff8358e: R_,
            __wbg_compressedTexSubImage3D_77a6ab77487aa211: p_,
            __wbg_createProgram_8eb14525e7fcffb8: U_,
            __wbg_createRenderbuffer_8847d6a81975caee: $_,
            __wbg_compressedTexSubImage3D_95f64742aae944b8: x_,
            __wbg_createShader_9ffc9dc1832608d7: Z_,
            __wbg_createTexture_ceb367c3528574ec: _t,
            __wbg_cullFace_d759515c1199276c: at,
            __wbg_deleteBuffer_a2f8244b249c356e: bt,
            __wbg_deleteFramebuffer_badadfcd45ef5e64: it,
            __wbg_deleteProgram_fc1d8d77ef7e154d: gt,
            __wbg_deleteRenderbuffer_401ffe15b179c343: st,
            __wbg_deleteShader_a8e5ccb432053dbe: pt,
            __wbg_deleteTexture_d8b1d278731e0c9f: ht,
            __wbg_copyBufferSubData_aaeed526e555f0d1: h_,
            __wbg_depthFunc_0376ef69458b01d8: Bt,
            __wbg_depthMask_fd5bc408415b9cd3: Pt,
            __wbg_depthRange_ebba8110d3fe0332: Tt,
            __wbg_clientWaitSync_5402aac488fc18bb: i_,
            __wbg_uniform4iv_b49cd4acf0aa3ebc: $b,
            __wbg_uniformMatrix2fv_4229ae27417c649a: Zb,
            __wbg_uniformMatrix3fv_bafc2707d0c48e27: tc,
            __wbg_uniformMatrix4fv_7c68dee5aee11694: ac,
            __wbg_activeTexture_66fa8cafd3610ddb: de,
            __wbg_attachShader_6426e8576a115345: se,
            __wbg_bindAttribLocation_1d976e3bcc954adb: xe,
            __wbg_bindBuffer_d2a4f6cfb33336fb: Ie,
            __wbg_bindFramebuffer_fdc7c38f1c700e64: ve,
            __wbg_bindRenderbuffer_91db2fc67c1f0115: Ae,
            __wbg_bindTexture_6e7e157d0aabe457: ke,
            __wbg_blendColor_b4c7d8333af4876d: Le,
            __wbg_blendEquation_c353d94b097007e5: Oe,
            __wbg_blendEquationSeparate_f16ada84ba672878: Ge,
            __wbg_blendFunc_4ce0991003a9468e: ze,
            __wbg_blendFuncSeparate_8c91c200b1a72e4b: We,
            __wbg_compressedTexSubImage2D_f3c4ae95ef9d2420: l_,
            __wbg_disable_7731e2f3362ef1c5: Gt,
            __wbg_disableVertexAttribArray_c4f42277355986c0: Ct,
            __wbg_drawArrays_13005ccff75e4210: qt,
            __wbg_copyTexSubImage3D_7fcdf7c85bc308a5: P_,
            __wbg_createQuery_0f754c13ae341f39: q_,
            __wbg_enable_3728894fa8c1d348: fn,
            __wbg_createSampler_7bed7d46769be9a7: H_,
            __wbg_enableVertexAttribArray_626e8d2d9d1fdff9: rn,
            __wbg_createVertexArray_420460898dc8d838: nt,
            __wbg_deleteQuery_9420681ec3d643ef: dt,
            __wbg_framebufferRenderbuffer_d8c1d0b985bd3c51: Sn,
            __wbg_deleteSampler_8111fd44b061bdd1: mt,
            __wbg_getIndexedParameter_338c7c91cbabcf3e: Vn,
            __wbg_linkProgram_e626a3e7d78e1738: Wr,
            __wbg_pixelStorei_2a3c5b85cf37caba: Wf,
            __wbg_getQueryParameter_5a3a2bd77e5f56bb: Hn,
            __wbg_polygonOffset_cc6bec2f9f4a18f7: zf,
            __wbg_renderbufferStorage_9130171a6ae371dc: ra,
            __wbg_getSyncParameter_fbf70c60f5e3b271: _r,
            __wbg_scissor_b18f09381b341db5: ga,
            __wbg_getUniformBlockIndex_e483a4d166df9c2a: tr,
            __wbg_shaderSource_06639e7b476e6ac2: za,
            __wbg_invalidateFramebuffer_df9574509a402d4f: Dr,
            __wbg_stencilFuncSeparate_94ee4fbc164addec: Za,
            __wbg_stencilMask_326a11d0928c3808: eb,
            __wbg_stencilMaskSeparate_a7bd409376ee05ff: Ka,
            __wbg_stencilOpSeparate_8627d0f5f7fe5800: nb,
            __wbg_texParameteri_fcdec30159061963: ob,
            __wbg_framebufferTexture2D_e2f7d82e6707010e: Bn,
            __wbg_deleteSync_deeb154f55e59a7d: xt,
            __wbg_frontFace_1537b8c3fc174f05: Pn,
            __wbg_deleteVertexArray_5a75f4855c2881df: It,
            __wbg_drawArraysInstanced_13e40fca13079ade: zt,
            __wbg_drawBuffers_823c4881ba82dc9c: Nt,
            __wbg_drawElementsInstanced_2e549060a77ba831: Ht,
            __wbg_endQuery_48241eaef2e96940: bn,
            __wbg_fenceSync_460953d9ad5fd31a: mn,
            __wbg_getParameter_e634fa73b5e25287: zn,
            __wbg_framebufferTextureLayer_01d5b9516636ccae: vn,
            __wbg_getProgramInfoLog_e03efa51473d657e: Qn,
            __wbg_getProgramParameter_7d3bd54ec02de007: $n,
            __wbg_getShaderInfoLog_40c6a4ae67d82dde: Yn,
            __wbg_getBufferSubData_cbabbb87d4c5c57d: Mn,
            __wbg_getShaderParameter_82c275299b111f1b: Jn,
            __wbg_getUniformLocation_90cdff44c2fceeb9: rr,
            __wbg_uniform1f_8c3b03df282dba21: Db,
            __wbg_readBuffer_e559a3da4aa9e434: Jf,
            __wbg_uniform1i_acd89bea81085be4: Mb,
            __wbg_readPixels_41a371053c299080: Kf,
            __wbg_readPixels_f675ed52bd44f8f1: _a,
            __wbg_uniform4f_7275e0fb864b7513: jb,
            __wbg_useProgram_49b77c7558a0646a: uc,
            __wbg_renderbufferStorageMultisample_d999a80fbc25df5f: na,
            __wbg_texImage3D_88ff1fa41be127b9: bb,
            __wbg_texStorage2D_a84f74d36d279097: ib,
            __wbg_texStorage3D_aec6fc3e85ec72da: ub,
            __wbg_texSubImage2D_1e7d6febf82b9bed: gb,
            __wbg_texSubImage2D_d784df0b813dc1ab: mb,
            __wbg_texSubImage2D_3bb41b987f2bfe39: sb,
            __wbg_texSubImage2D_dd1d50234b61de4b: lb,
            __wbg_samplerParameterf_774cff2229cc9fc3: ia,
            __wbg_samplerParameteri_7dde222b01588620: ua,
            __wbg_texImage2D_f4ae6c314a9a4bbe: ab,
            __wbg_vertexAttribPointer_f63675d7fad431e6: xc,
            __wbg_viewport_63ee76a0f029804d: Sc,
            __wbg_texSubImage2D_271ffedb47424d0d: db,
            __wbg_texSubImage3D_b3cbbb79fe54da6d: hb,
            __wbg_texSubImage3D_f9c3af789162846a: Sb,
            __wbg_uniform1ui_9f8d9b877d6691d8: Fb,
            __wbg_uniform2fv_28fbf8836f3045d0: Lb,
            __wbg_uniform2iv_f40f632615c5685a: Gb,
            __wbg_texSubImage3D_09cc863aedf44a21: pb,
            __wbg_texSubImage3D_6a46981af8bc8e49: yb,
            __wbg_texSubImage3D_4665e67a8f0f7806: xb,
            __wbg_querySelector_46ff1b81410aebea: Hf,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: $f,
            __wbg_uniform2uiv_6d170469a702f23e: Rb,
            __wbg_uniform4fv_a4cdb4bd66867df5: Qb,
            __wbg_uniform4iv_d654af0e6b7bdb1a: Hb,
            __wbg_uniform3fv_cdf7c84f9119f13b: Vb,
            __wbg_uniform3iv_38e74d2ae9dfbfb8: Wb,
            __wbg_uniform3uiv_bb7266bb3a5aef96: zb,
            __wbg_uniform4uiv_e95d9a124fb8f91e: Xb,
            __wbg_uniformMatrix3fv_244fc4416319c169: _c,
            __wbg_uniformMatrix3x2fv_f1729eb13fcd41a3: nc,
            __wbg_uniformMatrix3x4fv_3c11181f5fa929de: rc,
            __wbg_uniformBlockBinding_a47fa267662afd7b: Yb,
            __wbg_uniformMatrix2fv_648417dd2040de5b: Jb,
            __wbg_uniformMatrix2x3fv_eb9a53c8c9aa724b: Kb,
            __wbg_uniformMatrix2x4fv_8849517a52f2e845: ec,
            __wbg_uniformMatrix4fv_4d322b295d122214: fc,
            __wbg_vertexAttribIPointer_ecd3baef73ba0965: lc,
            __wbg_activeTexture_11610c2c57e26cfa: ge,
            __wbg_attachShader_e557f37438249ff7: we,
            __wbg_bindAttribLocation_8791402cc151e914: ye,
            __wbg_bindBuffer_142694a9732bc098: Se,
            __wbg_bindFramebuffer_4643a12ca1c72776: Be,
            __wbg_bindRenderbuffer_e6cfc20b6ebcf605: Pe,
            __wbg_bindTexture_6a0892cd752b41d9: Te,
            __wbg_blendColor_c2771aead110c867: Ce,
            __wbg_blendEquation_46367a891604b604: Re,
            __wbg_blendEquationSeparate_b08aba1c715cb265: Ee,
            __wbg_blendFunc_2e98c5f57736e5f3: Ue,
            __wbg_blendFuncSeparate_6aae138b81d75b47: Ve,
            __wbg_clear_3d6ad4729e206aac: c_,
            __wbg_clearDepth_0fb1b5aba2ff2d63: r_,
            __wbg_clearStencil_0e5924dc2f0fa2b7: a_,
            __wbg_colorMask_b47840e05b5f8181: g_,
            __wbg_compileShader_7ca66245c2798601: s_,
            __wbg_width_e0981c16dad36a72: Pc,
            __wbg_uniformMatrix4x2fv_5a8701b552d704af: bc,
            __wbg_uniformMatrix4x3fv_741c3f4e0b2c7e04: cc,
            __wbg_vertexAttribDivisor_99b2fd5affca539d: mc,
            __wbg_copyTexSubImage2D_08a10bcd45b88038: v_,
            __wbg_createBuffer_1aa34315dc9585a2: F_,
            __wbg_createFramebuffer_97d39363cdd9242a: O_,
            __wbg_createProgram_1fa32901e4db13cd: W_,
            __wbg_createRenderbuffer_69fb8c438e70e494: N_,
            __wbg_createShader_a00913b8c6489e6b: J_,
            __wbg_createTexture_9b1b4f40cab0097b: et,
            __wbg_cullFace_2c9f57c2f90cbe70: ft,
            __wbg_deleteBuffer_b053c58b4ed1ab1c: ct,
            __wbg_getExtension_0b8543b0c6b3068d: On,
            __wbg_getParameter_b1431cfde390c2fc: Un,
            __wbg_getProgramInfoLog_50443ddea7475f57: jn,
            __wbg_getProgramParameter_46e2d49878b56edd: Nn,
            __wbg_getShaderInfoLog_22f9e8c90a52f38d: Xn,
            __wbg_getShaderParameter_46f64f7ca5d534db: Zn,
            __wbg_getSupportedExtensions_a799751b74c3a674: Kn,
            __wbg_getUniformLocation_5eb08673afa04eee: nr,
            __wbg_height_ee9ea840e5499878: sr,
            __wbg_framebufferTextureMultiviewOVR_336ea10e261ec5f6: An,
            __wbg_drawBuffersWEBGL_5f9efe378355889a: Qt,
            __wbg_drawArraysInstancedANGLE_20ee4b8f67503b54: Ut,
            __wbg_bindVertexArrayOES_082b0791772327fa: Me,
            __wbg_getSupportedProfiles_e089393bebafd3b0: er,
            __wbg_deleteFramebuffer_1af8b97d40962089: ot,
            __wbg_deleteProgram_cb8f79d5c1e84863: ut,
            __wbg_deleteRenderbuffer_b030660bf2e9fc95: wt,
            __wbg_deleteShader_5b6992b5e5894d44: lt,
            __wbg_deleteTexture_00ecab74f7bddf91: yt,
            __wbg_depthFunc_befeae10cb29920d: vt,
            __wbg_depthMask_c6c1b0d88ade6c84: At,
            __wbg_depthRange_b42d493a2b9258aa: Dt,
            __wbg_disable_62ec2189c50a0db7: Et,
            __wbg_disableVertexAttribArray_124a165b099b763b: Lt,
            __wbg_drawArrays_c20dedf441392005: jt,
            __wbg_enable_91dff7f43064bb54: an,
            __wbg_enableVertexAttribArray_60dadea3a00e104a: nn,
            __wbg_framebufferRenderbuffer_7a2be23309166ad3: hn,
            __wbg_framebufferTexture2D_bf4d47f4027a3682: In,
            __wbg_frontFace_57081a0312eb822e: Dn,
            __wbg_linkProgram_b969f67969a850b5: Vr,
            __wbg_pixelStorei_2a2385ed59538d48: Vf,
            __wbg_polygonOffset_17cb85e417bf9db7: Uf,
            __wbg_renderbufferStorage_b184ea29064b4e02: fa,
            __wbg_scissor_db3842546fb31842: da,
            __wbg_vertexAttribPointer_ea73fc4cc5b7d647: pc,
            __wbg_viewport_b60aceadb9166023: Ic,
            __wbg_drawElementsInstancedANGLE_e9170c6414853487: $t,
            __wbg_createVertexArrayOES_1b30eca82fb89274: tt,
            __wbg_shaderSource_2bca0edc97475e95: qa,
            __wbg_stencilFuncSeparate_18642df0574c1930: Ya,
            __wbg_stencilMask_6354f8ba392f6581: _b,
            __wbg_stencilMaskSeparate_13b0475860a9b559: Ja,
            __wbg_stencilOpSeparate_7e819381705b9731: tb,
            __wbg_texParameteri_f4b1596185f5432d: cb,
            __wbg_uniform1f_b8841988568406b9: Tb,
            __wbg_uniform1i_953040fb972e9fab: kb,
            __wbg_uniform4f_0b00a34f4789ad14: qb,
            __wbg_useProgram_5405b431988b837b: gc,
            __wbg_bufferSubData_7b112eb88657e7c0: Xe,
            __wbg_navigator_9cebf56f28aa719b: vf,
            __wbg_texSubImage2D_68e0413824eddc12: wb,
            __wbg_clearBufferfv_7bc3e789059fd29b: __,
            __wbg_uniform2fv_f3c92aab21d0dec3: Cb,
            __wbg_clearBufferiv_050b376a7480ef9c: t_,
            __wbg_get_c7546417fb0bec10: br,
            __wbg_deleteVertexArrayOES_9da21e3515bf556e: St,
            __wbg_width_71d9d44b5e14c4b7: Ac,
            __wbg_vertexAttribDivisorANGLE_b357aa2bf70d3dcf: wc,
            __wbg_bufferData_fb2d946faa09a60b: $e,
            __wbg_beginQuery_ac2ef47e00ec594a: le,
            __wbg_set_width_576343a4a7f2cf28: Wa,
            __wbg_height_fb8c4164276f25fd: wr,
            __wbg_navigator_583ffd4fc14c0f7a: Bf,
            __wbg_document_c0320cd4183c6d9b: Vt,
            __wbg_set_height_98a1a397672657e2: Ra,
            __wbg_bufferData_d3bd8c69ff4b7254: Ne,
            __wbg_bindBufferRange_469c3643c2099003: he,
            __wbg_getContext_a9236f98f1f7fe7c: En,
            __wbg_bindSampler_be3a05e88cecae98: De,
            __wbg_getContext_794490fe04be926a: Cn,
            __wbg_bufferSubData_3fcefd4648de39b5: He,
            __wbg_bindVertexArray_c307251f3ff61930: Fe,
            __wbg_blitFramebuffer_c1a68feaca974c87: qe,
            __wbg_bufferData_730b629ba3f6824f: je,
            __wbg_width_4d6fc7fecd877217: vc,
            __wbg_set_width_c0fcaa2da53cd540: Ua,
            __wbg_height_6568c4427c3b889d: dr,
            __wbg_bufferData_d20232e3d5dcdc62: Qe,
            __wbg_set_height_b6548a01bdcb689a: Oa,
            __wbg_getContext_f04bf8f22dcb2d53: Gn,
            __wbg_compressedTexSubImage2D_593058a6f5aca176: w_,
            __wbg_getContext_07270456453ee7f5: Ln,
            __wbg_videoWidth_48f094fdc1b5ba64: hc,
            __wbg_videoHeight_6dac1fd954779498: yc,
            __wbg_readPixels_5c7066b5bd547f81: ea,
            __wbg_texImage2D_32ed4220040ca614: fb,
            __wbg_instanceof_HtmlCanvasElement_26125339f936be50: Ir,
            __wbg_instanceof_WebGl2RenderingContext_349f232f715e6bc2: Ar,
            __wbg_new_ab79df5bd7c26067: Tf,
            __wbg_get_326e41e095fb2575: fr,
            __wbg_iterator_d8f549ec8fb061b1: Mr,
            __wbg_new_a70fbab9066b301f: Df,
            __wbg_isArray_33b91feb269ff46e: Tr,
            __wbg_of_8bf7ed3eca00ea43: Rf,
            __wbg_next_e01a967809d1aa68: Ef,
            __wbg_call_e133b57c9155d22c: Je,
            __wbg_now_16f0c993d5dd6c27: Gf,
            __wbg_is_a166b9958c2438ad: kr,
            __wbg_then_bc59d1943397ca4e: Ab,
            __wbg_length_ea16607d7b61445b: Er,
            __wbg_prototypesetcall_d62e5099504357e6: jf,
            __wbg_new_5f486cdf45a04d78: Pf,
            __wbg_new_from_slice_22da9388ac046e50: kf,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: Lf,
            __wbg_buffer_60b8043cd926067d: Ye,
            __wbg_set_e80615d7a9a43981: Ga,
            __wbg_set_7eaa4f96924fd6b3: Ea,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: $a,
            __wbg_static_accessor_SELF_f207c857566db248: Ha,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: Na,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: Xa,
            __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: lr,
            __wbg_instanceof_Uint8Array_740438561a5b956d: vr,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: ce,
            __wbg___wbindgen_in_41dbb8413020e076: ne,
            __wbg___wbindgen_throw_6ddd609b62940d55: ie,
            __wbg_Error_83742b46f01ce22d: Z,
            __wbg___wbindgen_is_object_781bc9f159099513: fe,
            __wbg___wbindgen_string_get_395e606bd0ee4427: oe,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: _e,
            __wbg___wbindgen_is_function_3c846841762788c1: re,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: ae,
            __wbg___wbindgen_jsval_loose_eq_5bcc3bed3c69e72b: be,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: ue,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: te,
            __wbindgen_cast_0000000000000001: kc,
            __wbindgen_cast_0000000000000002: Mc,
            __wbindgen_cast_0000000000000003: Fc,
            __wbindgen_cast_0000000000000004: Lc,
            __wbindgen_cast_0000000000000005: Cc,
            __wbindgen_cast_0000000000000006: Ec,
            __wbindgen_cast_0000000000000007: Gc,
            __wbindgen_cast_0000000000000008: Rc,
            __wbindgen_cast_0000000000000009: Oc,
            __wbindgen_cast_000000000000000a: Vc,
            __wbindgen_cast_000000000000000b: Wc,
            __wbindgen_cast_000000000000000c: Uc
        }
    }, X), uo = i.memory, go = i.__wbg_gpugameoflife_free, so = i.__wbg_webglgameoflife_free, wo = i.gpugameoflife_flush_and_render, mo = i.gpugameoflife_grid_pitch, lo = i.gpugameoflife_init_device_request_ms, po = i.gpugameoflife_init_panel_ms, xo = i.gpugameoflife_init_renderer_ms, yo = i.gpugameoflife_init_seeding_ms, ho = i.gpugameoflife_init_simulation_ms, So = i.gpugameoflife_last_compute_tick_ms, Io = i.gpugameoflife_last_or_edit_ms, Bo = i.gpugameoflife_last_present_ms, vo = i.gpugameoflife_last_render_pass_ms, Ao = i.gpugameoflife_last_reseed_ms, Po = i.gpugameoflife_last_xor_edit_ms, Do = i.gpugameoflife_new, To = i.gpugameoflife_new_offscreen, ko = i.gpugameoflife_padded_rows, Mo = i.gpugameoflife_render_only, Fo = i.gpugameoflife_resize, Lo = i.gpugameoflife_set_camera, Co = i.gpugameoflife_set_init_fade, Eo = i.gpugameoflife_set_scroll, Go = i.gpugameoflife_set_theme, Ro = i.gpugameoflife_set_transition, Oo = i.gpugameoflife_set_zones, Vo = i.gpugameoflife_tick_and_render, Wo = i.gpugameoflife_timestamp_query_supported, Uo = i.gpugameoflife_toggle_cell, zo = i.gpugameoflife_words_per_row, qo = i.gpugameoflife_world_cols, jo = i.gpugameoflife_world_rows, Qo = i.webglgameoflife_free, No = i.webglgameoflife_grid_pitch, $o = i.webglgameoflife_new_offscreen, Ho = i.webglgameoflife_render_only, Xo = i.webglgameoflife_resize, Yo = i.webglgameoflife_set_camera, Zo = i.webglgameoflife_set_init_fade, Jo = i.webglgameoflife_set_theme, Ko = i.webglgameoflife_set_transition, ei = i.webglgameoflife_tick_and_render, _i = i.webglgameoflife_toggle_cell, ti = i.webglgameoflife_world_cols, ni = i.webglgameoflife_world_rows, ri = i.wgpu_render_bundle_draw, fi = i.wgpu_render_bundle_draw_indexed, ai = i.wgpu_render_bundle_set_pipeline, bi = i.wgpu_render_bundle_draw_indirect, ci = i.wgpu_render_bundle_set_bind_group, oi = i.wgpu_render_bundle_set_vertex_buffer, ii = i.wgpu_render_bundle_set_push_constants, ui = i.wgpu_render_bundle_draw_indexed_indirect, gi = i.wgpu_render_bundle_insert_debug_marker, di = i.wgpu_render_bundle_pop_debug_group, si = i.wgpu_render_bundle_set_index_buffer, wi = i.wgpu_render_bundle_push_debug_group, mi = i.__wasm_bindgen_func_elem_3618, li = i.__wasm_bindgen_func_elem_1659, pi = i.__wasm_bindgen_func_elem_8149, xi = i.__wasm_bindgen_func_elem_8151, yi = i.__wasm_bindgen_func_elem_1820, hi = i.__wasm_bindgen_func_elem_1820_2, Si = i.__wbindgen_export, Ii = i.__wbindgen_export2, Bi = i.__wbindgen_export3, vi = i.__wbindgen_export4, Ai = i.__wbindgen_add_to_stack_pointer;
    var Pi = Object.freeze({
        __proto__: null,
        __wasm_bindgen_func_elem_1659: li,
        __wasm_bindgen_func_elem_1820: yi,
        __wasm_bindgen_func_elem_1820_2: hi,
        __wasm_bindgen_func_elem_3618: mi,
        __wasm_bindgen_func_elem_8149: pi,
        __wasm_bindgen_func_elem_8151: xi,
        __wbg_gpugameoflife_free: go,
        __wbg_webglgameoflife_free: so,
        __wbindgen_add_to_stack_pointer: Ai,
        __wbindgen_export: Si,
        __wbindgen_export2: Ii,
        __wbindgen_export3: Bi,
        __wbindgen_export4: vi,
        gpugameoflife_flush_and_render: wo,
        gpugameoflife_grid_pitch: mo,
        gpugameoflife_init_device_request_ms: lo,
        gpugameoflife_init_panel_ms: po,
        gpugameoflife_init_renderer_ms: xo,
        gpugameoflife_init_seeding_ms: yo,
        gpugameoflife_init_simulation_ms: ho,
        gpugameoflife_last_compute_tick_ms: So,
        gpugameoflife_last_or_edit_ms: Io,
        gpugameoflife_last_present_ms: Bo,
        gpugameoflife_last_render_pass_ms: vo,
        gpugameoflife_last_reseed_ms: Ao,
        gpugameoflife_last_xor_edit_ms: Po,
        gpugameoflife_new: Do,
        gpugameoflife_new_offscreen: To,
        gpugameoflife_padded_rows: ko,
        gpugameoflife_render_only: Mo,
        gpugameoflife_resize: Fo,
        gpugameoflife_set_camera: Lo,
        gpugameoflife_set_init_fade: Co,
        gpugameoflife_set_scroll: Eo,
        gpugameoflife_set_theme: Go,
        gpugameoflife_set_transition: Ro,
        gpugameoflife_set_zones: Oo,
        gpugameoflife_tick_and_render: Vo,
        gpugameoflife_timestamp_query_supported: Wo,
        gpugameoflife_toggle_cell: Uo,
        gpugameoflife_words_per_row: zo,
        gpugameoflife_world_cols: qo,
        gpugameoflife_world_rows: jo,
        memory: uo,
        webglgameoflife_free: Qo,
        webglgameoflife_grid_pitch: No,
        webglgameoflife_new_offscreen: $o,
        webglgameoflife_render_only: Ho,
        webglgameoflife_resize: Xo,
        webglgameoflife_set_camera: Yo,
        webglgameoflife_set_init_fade: Zo,
        webglgameoflife_set_theme: Jo,
        webglgameoflife_set_transition: Ko,
        webglgameoflife_tick_and_render: ei,
        webglgameoflife_toggle_cell: _i,
        webglgameoflife_world_cols: ti,
        webglgameoflife_world_rows: ni,
        wgpu_render_bundle_draw: ri,
        wgpu_render_bundle_draw_indexed: fi,
        wgpu_render_bundle_draw_indexed_indirect: ui,
        wgpu_render_bundle_draw_indirect: bi,
        wgpu_render_bundle_insert_debug_marker: gi,
        wgpu_render_bundle_pop_debug_group: di,
        wgpu_render_bundle_push_debug_group: wi,
        wgpu_render_bundle_set_bind_group: ci,
        wgpu_render_bundle_set_index_buffer: si,
        wgpu_render_bundle_set_pipeline: ai,
        wgpu_render_bundle_set_push_constants: ii,
        wgpu_render_bundle_set_vertex_buffer: oi
    });
    io(Pi);
})();
export { M as GpuGameOfLife, F as WebglGameOfLife, __tla };
