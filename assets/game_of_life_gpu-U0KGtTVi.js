let P, D;
let __tla = (async ()=>{
    var N = "/assets/game_of_life_gpu_bg-Dgv8zR8P.wasm", $ = async (e = {}, _)=>{
        let t;
        if (_.startsWith("data:")) {
            const n = _.replace(/^data:.*?base64,/, "");
            let r;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(n, "base64");
            else if (typeof atob == "function") {
                const a = atob(n);
                r = new Uint8Array(a.length);
                for(let c = 0; c < a.length; c++)r[c] = a.charCodeAt(c);
            } else throw new Error("Cannot decode base64-encoded data URL");
            t = await WebAssembly.instantiate(r, e);
        } else {
            const n = await fetch(_), r = n.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, e);
            else {
                const a = await n.arrayBuffer();
                t = await WebAssembly.instantiate(a, e);
            }
        }
        return t.instance.exports;
    };
    P = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const t = Object.create(P.prototype);
            return t.__wbg_ptr = _, q.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, q.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            b.__wbg_gpugameoflife_free(_, 0);
        }
        flush_and_render() {
            b.gpugameoflife_flush_and_render(this.__wbg_ptr);
        }
        grid_pitch() {
            return b.gpugameoflife_grid_pitch(this.__wbg_ptr);
        }
        init_device_request_ms() {
            return b.gpugameoflife_init_device_request_ms(this.__wbg_ptr);
        }
        init_panel_ms() {
            return b.gpugameoflife_init_panel_ms(this.__wbg_ptr);
        }
        init_renderer_ms() {
            return b.gpugameoflife_init_renderer_ms(this.__wbg_ptr);
        }
        init_seeding_ms() {
            return b.gpugameoflife_init_seeding_ms(this.__wbg_ptr);
        }
        init_simulation_ms() {
            return b.gpugameoflife_init_simulation_ms(this.__wbg_ptr);
        }
        last_compute_tick_ms() {
            const _ = b.gpugameoflife_last_compute_tick_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_or_edit_ms() {
            const _ = b.gpugameoflife_last_or_edit_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_present_ms() {
            return b.gpugameoflife_last_present_ms(this.__wbg_ptr);
        }
        last_render_pass_ms() {
            const _ = b.gpugameoflife_last_render_pass_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        last_reseed_ms() {
            return b.gpugameoflife_last_reseed_ms(this.__wbg_ptr);
        }
        last_xor_edit_ms() {
            const _ = b.gpugameoflife_last_xor_edit_ms(this.__wbg_ptr);
            return _[0] === 0 ? void 0 : _[1];
        }
        static new(_, t, n) {
            return b.gpugameoflife_new(_, t, n);
        }
        static new_offscreen(_, t, n) {
            return b.gpugameoflife_new_offscreen(_, t, n);
        }
        padded_rows() {
            return b.gpugameoflife_padded_rows(this.__wbg_ptr) >>> 0;
        }
        render_only() {
            b.gpugameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, t) {
            b.gpugameoflife_resize(this.__wbg_ptr, _, t);
        }
        set_camera(_, t) {
            b.gpugameoflife_set_camera(this.__wbg_ptr, _, t);
        }
        set_init_fade(_) {
            b.gpugameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_scroll(_) {
            b.gpugameoflife_set_scroll(this.__wbg_ptr, _);
        }
        set_theme(_) {
            const t = b.gpugameoflife_set_theme(this.__wbg_ptr, _);
            if (t[1]) throw R(t[0]);
        }
        set_transition(_) {
            b.gpugameoflife_set_transition(this.__wbg_ptr, _);
        }
        set_zones(_) {
            const t = b.gpugameoflife_set_zones(this.__wbg_ptr, _);
            if (t[1]) throw R(t[0]);
        }
        tick_and_render() {
            b.gpugameoflife_tick_and_render(this.__wbg_ptr);
        }
        timestamp_query_supported() {
            return b.gpugameoflife_timestamp_query_supported(this.__wbg_ptr) !== 0;
        }
        toggle_cell(_, t) {
            b.gpugameoflife_toggle_cell(this.__wbg_ptr, _, t);
        }
        words_per_row() {
            return b.gpugameoflife_words_per_row(this.__wbg_ptr) >>> 0;
        }
        world_cols() {
            return b.gpugameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return b.gpugameoflife_world_rows(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (P.prototype[Symbol.dispose] = P.prototype.free);
    D = class {
        static __wrap(_) {
            _ = _ >>> 0;
            const t = Object.create(D.prototype);
            return t.__wbg_ptr = _, J.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, J.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            b.__wbg_webglgameoflife_free(_, 0);
        }
        free() {
            b.webglgameoflife_free(this.__wbg_ptr);
        }
        grid_pitch() {
            return b.webglgameoflife_grid_pitch(this.__wbg_ptr);
        }
        static new_offscreen(_, t) {
            return b.webglgameoflife_new_offscreen(_, t);
        }
        render_only() {
            b.webglgameoflife_render_only(this.__wbg_ptr);
        }
        resize(_, t) {
            b.webglgameoflife_resize(this.__wbg_ptr, _, t);
        }
        set_camera(_, t) {
            b.webglgameoflife_set_camera(this.__wbg_ptr, _, t);
        }
        set_init_fade(_) {
            b.webglgameoflife_set_init_fade(this.__wbg_ptr, _);
        }
        set_theme(_) {
            const t = b.webglgameoflife_set_theme(this.__wbg_ptr, _);
            if (t[1]) throw R(t[0]);
        }
        set_transition(_) {
            b.webglgameoflife_set_transition(this.__wbg_ptr, _);
        }
        tick_and_render() {
            b.webglgameoflife_tick_and_render(this.__wbg_ptr);
        }
        toggle_cell(_, t) {
            b.webglgameoflife_toggle_cell(this.__wbg_ptr, _, t);
        }
        world_cols() {
            return b.webglgameoflife_world_cols(this.__wbg_ptr) >>> 0;
        }
        world_rows() {
            return b.webglgameoflife_world_rows(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (D.prototype[Symbol.dispose] = D.prototype.free);
    function H(e, _) {
        return Error(m(e, _));
    }
    function X(e, _) {
        const t = String(_), n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function Y(e) {
        return e.Window;
    }
    function Z(e) {
        return e.WorkerGlobalScope;
    }
    function K(e) {
        const _ = e, t = typeof _ == "boolean" ? _ : void 0;
        return u(t) ? 16777215 : t ? 1 : 0;
    }
    function ee(e, _) {
        const t = W(_), n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function _e(e, _) {
        return e in _;
    }
    function te(e) {
        return typeof e == "function";
    }
    function ne(e) {
        const _ = e;
        return typeof _ == "object" && _ !== null;
    }
    function re(e) {
        return e === void 0;
    }
    function ae(e, _) {
        return e == _;
    }
    function be(e, _) {
        const t = _, n = typeof t == "number" ? t : void 0;
        w().setFloat64(e + 8, u(n) ? 0 : n, !0), w().setInt32(e + 0, !u(n), !0);
    }
    function ce(e, _) {
        const t = _, n = typeof t == "string" ? t : void 0;
        var r = u(n) ? 0 : y(n, b.__wbindgen_malloc, b.__wbindgen_realloc), a = x;
        w().setInt32(e + 4, a, !0), w().setInt32(e + 0, r, !0);
    }
    function fe(e, _) {
        throw new Error(m(e, _));
    }
    function oe(e) {
        e._wbg_cb_unref();
    }
    function ie(e, _) {
        e.activeTexture(_ >>> 0);
    }
    function ue(e, _) {
        e.activeTexture(_ >>> 0);
    }
    function de(e, _, t) {
        e.attachShader(_, t);
    }
    function ge(e, _, t) {
        e.attachShader(_, t);
    }
    function se(e, _) {
        return e.beginComputePass(_);
    }
    function we(e, _, t) {
        e.beginQuery(_ >>> 0, t);
    }
    function le(e, _) {
        return e.beginRenderPass(_);
    }
    function me(e, _, t, n, r) {
        e.bindAttribLocation(_, t >>> 0, m(n, r));
    }
    function pe(e, _, t, n, r) {
        e.bindAttribLocation(_, t >>> 0, m(n, r));
    }
    function xe(e, _, t, n, r, a) {
        e.bindBufferRange(_ >>> 0, t >>> 0, n, r, a);
    }
    function ye(e, _, t) {
        e.bindBuffer(_ >>> 0, t);
    }
    function he(e, _, t) {
        e.bindBuffer(_ >>> 0, t);
    }
    function Se(e, _, t) {
        e.bindFramebuffer(_ >>> 0, t);
    }
    function ve(e, _, t) {
        e.bindFramebuffer(_ >>> 0, t);
    }
    function Be(e, _, t) {
        e.bindRenderbuffer(_ >>> 0, t);
    }
    function Ie(e, _, t) {
        e.bindRenderbuffer(_ >>> 0, t);
    }
    function Ae(e, _, t) {
        e.bindSampler(_ >>> 0, t);
    }
    function Pe(e, _, t) {
        e.bindTexture(_ >>> 0, t);
    }
    function De(e, _, t) {
        e.bindTexture(_ >>> 0, t);
    }
    function Te(e, _) {
        e.bindVertexArrayOES(_);
    }
    function ke(e, _) {
        e.bindVertexArray(_);
    }
    function Fe(e, _, t, n, r) {
        e.blendColor(_, t, n, r);
    }
    function Me(e, _, t, n, r) {
        e.blendColor(_, t, n, r);
    }
    function Ve(e, _, t) {
        e.blendEquationSeparate(_ >>> 0, t >>> 0);
    }
    function Ee(e, _, t) {
        e.blendEquationSeparate(_ >>> 0, t >>> 0);
    }
    function Le(e, _) {
        e.blendEquation(_ >>> 0);
    }
    function Ce(e, _) {
        e.blendEquation(_ >>> 0);
    }
    function Re(e, _, t, n, r) {
        e.blendFuncSeparate(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Ge(e, _, t, n, r) {
        e.blendFuncSeparate(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Oe(e, _, t) {
        e.blendFunc(_ >>> 0, t >>> 0);
    }
    function We(e, _, t) {
        e.blendFunc(_ >>> 0, t >>> 0);
    }
    function Ue(e, _, t, n, r, a, c, o, i, d, p) {
        e.blitFramebuffer(_, t, n, r, a, c, o, i, d >>> 0, p >>> 0);
    }
    function ze(e, _, t, n) {
        e.bufferData(_ >>> 0, t, n >>> 0);
    }
    function qe(e, _, t, n) {
        e.bufferData(_ >>> 0, t, n >>> 0);
    }
    function Je(e, _, t, n) {
        e.bufferData(_ >>> 0, t, n >>> 0);
    }
    function je(e, _, t, n) {
        e.bufferData(_ >>> 0, t, n >>> 0);
    }
    function Qe(e, _, t, n) {
        e.bufferSubData(_ >>> 0, t, n);
    }
    function Ne(e, _, t, n) {
        e.bufferSubData(_ >>> 0, t, n);
    }
    function $e(e) {
        return e.buffer;
    }
    function He() {
        return s(function(e, _, t) {
            return e.call(_, t);
        }, arguments);
    }
    function Xe() {
        return s(function(e, _) {
            return e.call(_);
        }, arguments);
    }
    function Ye(e, _, t) {
        e.clearBuffer(_, t);
    }
    function Ze(e, _, t, n) {
        e.clearBuffer(_, t, n);
    }
    function Ke(e, _, t, n, r) {
        e.clearBufferfv(_ >>> 0, t, l(n, r));
    }
    function e_(e, _, t, n, r) {
        e.clearBufferiv(_ >>> 0, t, S(n, r));
    }
    function __(e, _, t, n, r) {
        e.clearBufferuiv(_ >>> 0, t, v(n, r));
    }
    function t_(e, _) {
        e.clearDepth(_);
    }
    function n_(e, _) {
        e.clearDepth(_);
    }
    function r_(e, _) {
        e.clearStencil(_);
    }
    function a_(e, _) {
        e.clearStencil(_);
    }
    function b_(e, _) {
        e.clear(_ >>> 0);
    }
    function c_(e, _) {
        e.clear(_ >>> 0);
    }
    function f_(e, _, t, n) {
        return e.clientWaitSync(_, t >>> 0, n >>> 0);
    }
    function o_(e, _, t, n, r) {
        e.colorMask(_ !== 0, t !== 0, n !== 0, r !== 0);
    }
    function i_(e, _, t, n, r) {
        e.colorMask(_ !== 0, t !== 0, n !== 0, r !== 0);
    }
    function u_(e, _) {
        e.compileShader(_);
    }
    function d_(e, _) {
        e.compileShader(_);
    }
    function g_(e, _, t, n, r, a, c, o, i) {
        e.compressedTexSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i);
    }
    function s_(e, _, t, n, r, a, c, o, i) {
        e.compressedTexSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i);
    }
    function w_(e, _, t, n, r, a, c, o, i, d) {
        e.compressedTexSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i, d);
    }
    function l_(e, _, t, n, r, a, c, o, i, d, p, h) {
        e.compressedTexSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p, h);
    }
    function m_(e, _, t, n, r, a, c, o, i, d, p) {
        e.compressedTexSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p);
    }
    function p_(e, _) {
        e.configure(_);
    }
    function x_(e, _, t, n, r, a) {
        e.copyBufferSubData(_ >>> 0, t >>> 0, n, r, a);
    }
    function y_(e, _, t, n, r, a) {
        e.copyBufferToBuffer(_, t, n, r, a);
    }
    function h_(e, _, t, n) {
        e.copyBufferToTexture(_, t, n);
    }
    function S_(e, _, t, n) {
        e.copyExternalImageToTexture(_, t, n);
    }
    function v_(e, _, t, n, r, a, c, o, i) {
        e.copyTexSubImage2D(_ >>> 0, t, n, r, a, c, o, i);
    }
    function B_(e, _, t, n, r, a, c, o, i) {
        e.copyTexSubImage2D(_ >>> 0, t, n, r, a, c, o, i);
    }
    function I_(e, _, t, n, r, a, c, o, i, d) {
        e.copyTexSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d);
    }
    function A_(e, _, t, n) {
        e.copyTextureToBuffer(_, t, n);
    }
    function P_(e, _, t, n) {
        e.copyTextureToTexture(_, t, n);
    }
    function D_(e, _) {
        return e.createBindGroupLayout(_);
    }
    function T_(e, _) {
        return e.createBindGroup(_);
    }
    function k_(e) {
        const _ = e.createBuffer();
        return u(_) ? 0 : g(_);
    }
    function F_(e) {
        const _ = e.createBuffer();
        return u(_) ? 0 : g(_);
    }
    function M_(e, _) {
        return e.createBuffer(_);
    }
    function V_(e, _) {
        return e.createCommandEncoder(_);
    }
    function E_(e, _) {
        return e.createComputePipeline(_);
    }
    function L_(e) {
        const _ = e.createFramebuffer();
        return u(_) ? 0 : g(_);
    }
    function C_(e) {
        const _ = e.createFramebuffer();
        return u(_) ? 0 : g(_);
    }
    function R_(e, _) {
        return e.createPipelineLayout(_);
    }
    function G_(e) {
        const _ = e.createProgram();
        return u(_) ? 0 : g(_);
    }
    function O_(e) {
        const _ = e.createProgram();
        return u(_) ? 0 : g(_);
    }
    function W_(e, _) {
        return e.createQuerySet(_);
    }
    function U_(e) {
        const _ = e.createQuery();
        return u(_) ? 0 : g(_);
    }
    function z_(e, _) {
        return e.createRenderBundleEncoder(_);
    }
    function q_(e, _) {
        return e.createRenderPipeline(_);
    }
    function J_(e) {
        const _ = e.createRenderbuffer();
        return u(_) ? 0 : g(_);
    }
    function j_(e) {
        const _ = e.createRenderbuffer();
        return u(_) ? 0 : g(_);
    }
    function Q_(e) {
        const _ = e.createSampler();
        return u(_) ? 0 : g(_);
    }
    function N_(e, _) {
        return e.createSampler(_);
    }
    function $_(e, _) {
        return e.createShaderModule(_);
    }
    function H_(e, _) {
        const t = e.createShader(_ >>> 0);
        return u(t) ? 0 : g(t);
    }
    function X_(e, _) {
        const t = e.createShader(_ >>> 0);
        return u(t) ? 0 : g(t);
    }
    function Y_(e, _) {
        return e.createTexture(_);
    }
    function Z_(e) {
        const _ = e.createTexture();
        return u(_) ? 0 : g(_);
    }
    function K_(e) {
        const _ = e.createTexture();
        return u(_) ? 0 : g(_);
    }
    function et(e) {
        const _ = e.createVertexArrayOES();
        return u(_) ? 0 : g(_);
    }
    function _t(e) {
        const _ = e.createVertexArray();
        return u(_) ? 0 : g(_);
    }
    function tt(e, _) {
        return e.createView(_);
    }
    function nt(e, _) {
        e.cullFace(_ >>> 0);
    }
    function rt(e, _) {
        e.cullFace(_ >>> 0);
    }
    function at(e, _) {
        e.deleteBuffer(_);
    }
    function bt(e, _) {
        e.deleteBuffer(_);
    }
    function ct(e, _) {
        e.deleteFramebuffer(_);
    }
    function ft(e, _) {
        e.deleteFramebuffer(_);
    }
    function ot(e, _) {
        e.deleteProgram(_);
    }
    function it(e, _) {
        e.deleteProgram(_);
    }
    function ut(e, _) {
        e.deleteQuery(_);
    }
    function dt(e, _) {
        e.deleteRenderbuffer(_);
    }
    function gt(e, _) {
        e.deleteRenderbuffer(_);
    }
    function st(e, _) {
        e.deleteSampler(_);
    }
    function wt(e, _) {
        e.deleteShader(_);
    }
    function lt(e, _) {
        e.deleteShader(_);
    }
    function mt(e, _) {
        e.deleteSync(_);
    }
    function pt(e, _) {
        e.deleteTexture(_);
    }
    function xt(e, _) {
        e.deleteTexture(_);
    }
    function yt(e, _) {
        e.deleteVertexArrayOES(_);
    }
    function ht(e, _) {
        e.deleteVertexArray(_);
    }
    function St(e, _) {
        e.depthFunc(_ >>> 0);
    }
    function vt(e, _) {
        e.depthFunc(_ >>> 0);
    }
    function Bt(e, _) {
        e.depthMask(_ !== 0);
    }
    function It(e, _) {
        e.depthMask(_ !== 0);
    }
    function At(e, _, t) {
        e.depthRange(_, t);
    }
    function Pt(e, _, t) {
        e.depthRange(_, t);
    }
    function Dt(e) {
        e.destroy();
    }
    function Tt(e) {
        e.destroy();
    }
    function kt(e) {
        e.destroy();
    }
    function Ft(e, _) {
        e.disableVertexAttribArray(_ >>> 0);
    }
    function Mt(e, _) {
        e.disableVertexAttribArray(_ >>> 0);
    }
    function Vt(e, _) {
        e.disable(_ >>> 0);
    }
    function Et(e, _) {
        e.disable(_ >>> 0);
    }
    function Lt(e, _, t) {
        e.dispatchWorkgroupsIndirect(_, t);
    }
    function Ct(e, _, t, n) {
        e.dispatchWorkgroups(_ >>> 0, t >>> 0, n >>> 0);
    }
    function Rt(e) {
        const _ = e.document;
        return u(_) ? 0 : g(_);
    }
    function Gt(e) {
        return e.done;
    }
    function Ot(e, _, t, n, r) {
        e.drawArraysInstancedANGLE(_ >>> 0, t, n, r);
    }
    function Wt(e, _, t, n, r) {
        e.drawArraysInstanced(_ >>> 0, t, n, r);
    }
    function Ut(e, _, t, n) {
        e.drawArrays(_ >>> 0, t, n);
    }
    function zt(e, _, t, n) {
        e.drawArrays(_ >>> 0, t, n);
    }
    function qt(e, _) {
        e.drawBuffersWEBGL(_);
    }
    function Jt(e, _) {
        e.drawBuffers(_);
    }
    function jt(e, _, t, n, r, a) {
        e.drawElementsInstancedANGLE(_ >>> 0, t, n >>> 0, r, a);
    }
    function Qt(e, _, t, n, r, a) {
        e.drawElementsInstanced(_ >>> 0, t, n >>> 0, r, a);
    }
    function Nt(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function $t(e, _, t) {
        e.drawIndexedIndirect(_, t);
    }
    function Ht(e, _, t, n, r, a) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function Xt(e, _, t, n, r, a) {
        e.drawIndexed(_ >>> 0, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function Yt(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Zt(e, _, t) {
        e.drawIndirect(_, t);
    }
    function Kt(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function en(e, _, t, n, r) {
        e.draw(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function _n(e, _) {
        e.enableVertexAttribArray(_ >>> 0);
    }
    function tn(e, _) {
        e.enableVertexAttribArray(_ >>> 0);
    }
    function nn(e, _) {
        e.enable(_ >>> 0);
    }
    function rn(e, _) {
        e.enable(_ >>> 0);
    }
    function an(e, _) {
        e.endQuery(_ >>> 0);
    }
    function bn(e) {
        e.end();
    }
    function cn(e) {
        e.end();
    }
    function fn(e) {
        return e.error;
    }
    function on(e, _) {
        let t, n;
        try {
            t = e, n = _, console.error(m(e, _));
        } finally{
            b.__wbindgen_free(t, n, 1);
        }
    }
    function un(e, _) {
        e.executeBundles(_);
    }
    function dn(e) {
        return e.features;
    }
    function gn(e) {
        return e.features;
    }
    function sn(e, _, t) {
        const n = e.fenceSync(_ >>> 0, t >>> 0);
        return u(n) ? 0 : g(n);
    }
    function wn(e, _) {
        return e.finish(_);
    }
    function ln(e) {
        return e.finish();
    }
    function mn(e, _) {
        return e.finish(_);
    }
    function pn(e) {
        return e.finish();
    }
    function xn(e, _, t, n, r) {
        e.framebufferRenderbuffer(_ >>> 0, t >>> 0, n >>> 0, r);
    }
    function yn(e, _, t, n, r) {
        e.framebufferRenderbuffer(_ >>> 0, t >>> 0, n >>> 0, r);
    }
    function hn(e, _, t, n, r, a) {
        e.framebufferTexture2D(_ >>> 0, t >>> 0, n >>> 0, r, a);
    }
    function Sn(e, _, t, n, r, a) {
        e.framebufferTexture2D(_ >>> 0, t >>> 0, n >>> 0, r, a);
    }
    function vn(e, _, t, n, r, a) {
        e.framebufferTextureLayer(_ >>> 0, t >>> 0, n, r, a);
    }
    function Bn(e, _, t, n, r, a, c) {
        e.framebufferTextureMultiviewOVR(_ >>> 0, t >>> 0, n, r, a, c);
    }
    function In(e, _) {
        e.frontFace(_ >>> 0);
    }
    function An(e, _) {
        e.frontFace(_ >>> 0);
    }
    function Pn(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Dn(e, _) {
        return e.getBindGroupLayout(_ >>> 0);
    }
    function Tn(e, _, t, n) {
        e.getBufferSubData(_ >>> 0, t, n);
    }
    function kn(e) {
        return e.getCompilationInfo();
    }
    function Fn() {
        return s(function(e, _, t, n) {
            const r = e.getContext(m(_, t), n);
            return u(r) ? 0 : g(r);
        }, arguments);
    }
    function Mn() {
        return s(function(e, _, t, n) {
            const r = e.getContext(m(_, t), n);
            return u(r) ? 0 : g(r);
        }, arguments);
    }
    function Vn() {
        return s(function(e, _, t) {
            const n = e.getContext(m(_, t));
            return u(n) ? 0 : g(n);
        }, arguments);
    }
    function En() {
        return s(function(e, _, t) {
            const n = e.getContext(m(_, t));
            return u(n) ? 0 : g(n);
        }, arguments);
    }
    function Ln(e) {
        return e.getCurrentTexture();
    }
    function Cn() {
        return s(function(e, _, t) {
            const n = e.getExtension(m(_, t));
            return u(n) ? 0 : g(n);
        }, arguments);
    }
    function Rn() {
        return s(function(e, _, t) {
            return e.getIndexedParameter(_ >>> 0, t >>> 0);
        }, arguments);
    }
    function Gn(e, _, t) {
        return e.getMappedRange(_, t);
    }
    function On() {
        return s(function(e, _) {
            return e.getParameter(_ >>> 0);
        }, arguments);
    }
    function Wn() {
        return s(function(e, _) {
            return e.getParameter(_ >>> 0);
        }, arguments);
    }
    function Un(e) {
        const _ = e.getPreferredCanvasFormat();
        return ($f.indexOf(_) + 1 || 96) - 1;
    }
    function zn(e, _, t) {
        const n = _.getProgramInfoLog(t);
        var r = u(n) ? 0 : y(n, b.__wbindgen_malloc, b.__wbindgen_realloc), a = x;
        w().setInt32(e + 4, a, !0), w().setInt32(e + 0, r, !0);
    }
    function qn(e, _, t) {
        const n = _.getProgramInfoLog(t);
        var r = u(n) ? 0 : y(n, b.__wbindgen_malloc, b.__wbindgen_realloc), a = x;
        w().setInt32(e + 4, a, !0), w().setInt32(e + 0, r, !0);
    }
    function Jn(e, _, t) {
        return e.getProgramParameter(_, t >>> 0);
    }
    function jn(e, _, t) {
        return e.getProgramParameter(_, t >>> 0);
    }
    function Qn(e, _, t) {
        return e.getQueryParameter(_, t >>> 0);
    }
    function Nn(e, _, t) {
        const n = _.getShaderInfoLog(t);
        var r = u(n) ? 0 : y(n, b.__wbindgen_malloc, b.__wbindgen_realloc), a = x;
        w().setInt32(e + 4, a, !0), w().setInt32(e + 0, r, !0);
    }
    function $n(e, _, t) {
        const n = _.getShaderInfoLog(t);
        var r = u(n) ? 0 : y(n, b.__wbindgen_malloc, b.__wbindgen_realloc), a = x;
        w().setInt32(e + 4, a, !0), w().setInt32(e + 0, r, !0);
    }
    function Hn(e, _, t) {
        return e.getShaderParameter(_, t >>> 0);
    }
    function Xn(e, _, t) {
        return e.getShaderParameter(_, t >>> 0);
    }
    function Yn(e) {
        const _ = e.getSupportedExtensions();
        return u(_) ? 0 : g(_);
    }
    function Zn(e) {
        const _ = e.getSupportedProfiles();
        return u(_) ? 0 : g(_);
    }
    function Kn(e, _, t) {
        return e.getSyncParameter(_, t >>> 0);
    }
    function er(e, _, t, n) {
        return e.getUniformBlockIndex(_, m(t, n));
    }
    function _r(e, _, t, n) {
        const r = e.getUniformLocation(_, m(t, n));
        return u(r) ? 0 : g(r);
    }
    function tr(e, _, t, n) {
        const r = e.getUniformLocation(_, m(t, n));
        return u(r) ? 0 : g(r);
    }
    function nr() {
        return s(function(e, _) {
            return Reflect.get(e, _);
        }, arguments);
    }
    function rr(e, _) {
        return e[_ >>> 0];
    }
    function ar(e, _) {
        const t = e[_ >>> 0];
        return u(t) ? 0 : g(t);
    }
    function br(e, _) {
        return e[_ >>> 0];
    }
    function cr(e, _) {
        return e[_];
    }
    function fr(e) {
        return e.gpu;
    }
    function or(e) {
        return P.__wrap(e);
    }
    function ir(e, _, t) {
        return e.has(m(_, t));
    }
    function ur(e) {
        return e.height;
    }
    function dr(e) {
        return e.height;
    }
    function gr(e) {
        return e.height;
    }
    function sr(e, _, t) {
        return e.includes(_, t);
    }
    function wr(e) {
        let _;
        try {
            _ = e instanceof ArrayBuffer;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function lr(e) {
        let _;
        try {
            _ = e instanceof GPUAdapter;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function mr(e) {
        let _;
        try {
            _ = e instanceof GPUCanvasContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function pr(e) {
        let _;
        try {
            _ = e instanceof GPUDeviceLostInfo;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function xr(e) {
        let _;
        try {
            _ = e instanceof GPUOutOfMemoryError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function yr(e) {
        let _;
        try {
            _ = e instanceof GPUValidationError;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function hr(e) {
        let _;
        try {
            _ = e instanceof HTMLCanvasElement;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Sr(e) {
        let _;
        try {
            _ = e instanceof Object;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function vr(e) {
        let _;
        try {
            _ = e instanceof Uint8Array;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Br(e) {
        let _;
        try {
            _ = e instanceof WebGL2RenderingContext;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Ir(e) {
        let _;
        try {
            _ = e instanceof Window;
        } catch  {
            _ = !1;
        }
        return _;
    }
    function Ar() {
        return s(function(e, _, t) {
            e.invalidateFramebuffer(_ >>> 0, t);
        }, arguments);
    }
    function Pr(e) {
        return Array.isArray(e);
    }
    function Dr(e, _) {
        return Object.is(e, _);
    }
    function Tr() {
        return Symbol.iterator;
    }
    function kr(e, _) {
        const t = _.label, n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function Fr(e) {
        return e.length;
    }
    function Mr(e) {
        return e.length;
    }
    function Vr(e) {
        return e.length;
    }
    function Er(e) {
        return e.limits;
    }
    function Lr(e) {
        return e.limits;
    }
    function Cr(e) {
        return e.lineNum;
    }
    function Rr(e, _) {
        e.linkProgram(_);
    }
    function Gr(e, _) {
        e.linkProgram(_);
    }
    function Or(e) {
        return e.lost;
    }
    function Wr(e, _, t, n) {
        return e.mapAsync(_ >>> 0, t, n);
    }
    function Ur(e) {
        return e.maxBindGroups;
    }
    function zr(e) {
        return e.maxBindingsPerBindGroup;
    }
    function qr(e) {
        return e.maxBufferSize;
    }
    function Jr(e) {
        return e.maxColorAttachmentBytesPerSample;
    }
    function jr(e) {
        return e.maxColorAttachments;
    }
    function Qr(e) {
        return e.maxComputeInvocationsPerWorkgroup;
    }
    function Nr(e) {
        return e.maxComputeWorkgroupSizeX;
    }
    function $r(e) {
        return e.maxComputeWorkgroupSizeY;
    }
    function Hr(e) {
        return e.maxComputeWorkgroupSizeZ;
    }
    function Xr(e) {
        return e.maxComputeWorkgroupStorageSize;
    }
    function Yr(e) {
        return e.maxComputeWorkgroupsPerDimension;
    }
    function Zr(e) {
        return e.maxDynamicStorageBuffersPerPipelineLayout;
    }
    function Kr(e) {
        return e.maxDynamicUniformBuffersPerPipelineLayout;
    }
    function ea(e) {
        return e.maxInterStageShaderComponents;
    }
    function _a(e) {
        return e.maxSampledTexturesPerShaderStage;
    }
    function ta(e) {
        return e.maxSamplersPerShaderStage;
    }
    function na(e) {
        return e.maxStorageBufferBindingSize;
    }
    function ra(e) {
        return e.maxStorageBuffersPerShaderStage;
    }
    function aa(e) {
        return e.maxStorageTexturesPerShaderStage;
    }
    function ba(e) {
        return e.maxTextureArrayLayers;
    }
    function ca(e) {
        return e.maxTextureDimension1D;
    }
    function fa(e) {
        return e.maxTextureDimension2D;
    }
    function oa(e) {
        return e.maxTextureDimension3D;
    }
    function ia(e) {
        return e.maxUniformBufferBindingSize;
    }
    function ua(e) {
        return e.maxUniformBuffersPerShaderStage;
    }
    function da(e) {
        return e.maxVertexAttributes;
    }
    function ga(e) {
        return e.maxVertexBufferArrayStride;
    }
    function sa(e) {
        return e.maxVertexBuffers;
    }
    function wa(e, _) {
        const t = _.message, n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function la(e, _) {
        const t = _.message, n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function ma(e, _) {
        const t = _.message, n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function pa(e) {
        return e.messages;
    }
    function xa(e) {
        return e.minStorageBufferOffsetAlignment;
    }
    function ya(e) {
        return e.minUniformBufferOffsetAlignment;
    }
    function ha(e) {
        return e.navigator;
    }
    function Sa(e) {
        return e.navigator;
    }
    function va() {
        return new Error;
    }
    function Ba(e) {
        return new Uint8Array(e);
    }
    function Ia() {
        return new Array;
    }
    function Aa() {
        return new Object;
    }
    function Pa(e, _) {
        return new Uint8Array(U(e, _));
    }
    function Da(e, _) {
        try {
            var t = {
                a: e,
                b: _
            }, n = (a, c)=>{
                const o = t.a;
                t.a = 0;
                try {
                    return Jf(o, t.b, a, c);
                } finally{
                    t.a = o;
                }
            };
            return new Promise(n);
        } finally{
            t.a = t.b = 0;
        }
    }
    function Ta() {
        return new Array;
    }
    function ka(e, _, t) {
        return new Uint8Array(e, _ >>> 0, t >>> 0);
    }
    function Fa() {
        return s(function(e) {
            return e.next();
        }, arguments);
    }
    function Ma(e) {
        return e.next;
    }
    function Va() {
        return Date.now();
    }
    function Ea(e) {
        return Array.of(e);
    }
    function La(e) {
        return e.offset;
    }
    function Ca(e, _, t) {
        e.pixelStorei(_ >>> 0, t);
    }
    function Ra(e, _, t) {
        e.pixelStorei(_ >>> 0, t);
    }
    function Ga(e, _, t) {
        e.polygonOffset(_, t);
    }
    function Oa(e, _, t) {
        e.polygonOffset(_, t);
    }
    function Wa(e) {
        return e.popErrorScope();
    }
    function Ua(e, _, t) {
        Uint8Array.prototype.set.call(U(e, _), t);
    }
    function za(e, _) {
        e.pushErrorScope(Nf[_]);
    }
    function qa(e, _) {
        return e.push(_);
    }
    function Ja() {
        return s(function(e, _, t) {
            return e.querySelectorAll(m(_, t));
        }, arguments);
    }
    function ja() {
        return s(function(e, _, t) {
            const n = e.querySelector(m(_, t));
            return u(n) ? 0 : g(n);
        }, arguments);
    }
    function Qa(e) {
        return e.queueMicrotask;
    }
    function Na(e) {
        queueMicrotask(e);
    }
    function $a(e) {
        return e.queue;
    }
    function Ha(e, _) {
        e.readBuffer(_ >>> 0);
    }
    function Xa() {
        return s(function(e, _, t, n, r, a, c, o) {
            e.readPixels(_, t, n, r, a >>> 0, c >>> 0, o);
        }, arguments);
    }
    function Ya() {
        return s(function(e, _, t, n, r, a, c, o) {
            e.readPixels(_, t, n, r, a >>> 0, c >>> 0, o);
        }, arguments);
    }
    function Za() {
        return s(function(e, _, t, n, r, a, c, o) {
            e.readPixels(_, t, n, r, a >>> 0, c >>> 0, o);
        }, arguments);
    }
    function Ka(e) {
        const _ = e.reason;
        return (Qf.indexOf(_) + 1 || 3) - 1;
    }
    function eb(e, _, t, n, r, a) {
        e.renderbufferStorageMultisample(_ >>> 0, t, n >>> 0, r, a);
    }
    function _b(e, _, t, n, r) {
        e.renderbufferStorage(_ >>> 0, t >>> 0, n, r);
    }
    function tb(e, _, t, n, r) {
        e.renderbufferStorage(_ >>> 0, t >>> 0, n, r);
    }
    function nb(e, _) {
        return e.requestAdapter(_);
    }
    function rb(e, _) {
        return _?.requiredLimits && delete _.requiredLimits.maxInterStageShaderComponents, e.requestDevice(_);
    }
    function ab(e, _, t, n, r, a) {
        e.resolveQuerySet(_, t >>> 0, n >>> 0, r, a >>> 0);
    }
    function bb(e) {
        return Promise.resolve(e);
    }
    function cb(e, _, t, n) {
        e.samplerParameterf(_, t >>> 0, n);
    }
    function fb(e, _, t, n) {
        e.samplerParameteri(_, t >>> 0, n);
    }
    function ob(e, _, t, n, r) {
        e.scissor(_, t, n, r);
    }
    function ib(e, _, t, n, r) {
        e.scissor(_, t, n, r);
    }
    function ub(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function db(e, _, t, n, r, a, c) {
        e.setBindGroup(_ >>> 0, t, v(n, r), a, c >>> 0);
    }
    function gb(e, _, t, n, r, a, c) {
        e.setBindGroup(_ >>> 0, t, v(n, r), a, c >>> 0);
    }
    function sb(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function wb(e, _, t, n, r, a, c) {
        e.setBindGroup(_ >>> 0, t, v(n, r), a, c >>> 0);
    }
    function lb(e, _, t) {
        e.setBindGroup(_ >>> 0, t);
    }
    function mb(e, _) {
        e.setBlendConstant(_);
    }
    function pb(e, _, t, n, r) {
        e.setIndexBuffer(_, G[t], n, r);
    }
    function xb(e, _, t, n) {
        e.setIndexBuffer(_, G[t], n);
    }
    function yb(e, _, t, n) {
        e.setIndexBuffer(_, G[t], n);
    }
    function hb(e, _, t, n, r) {
        e.setIndexBuffer(_, G[t], n, r);
    }
    function Sb(e, _) {
        e.setPipeline(_);
    }
    function vb(e, _) {
        e.setPipeline(_);
    }
    function Bb(e, _) {
        e.setPipeline(_);
    }
    function Ib(e, _, t, n, r) {
        e.setScissorRect(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function Ab(e, _) {
        e.setStencilReference(_ >>> 0);
    }
    function Pb(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function Db(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Tb(e, _, t, n, r) {
        e.setVertexBuffer(_ >>> 0, t, n, r);
    }
    function kb(e, _, t, n) {
        e.setVertexBuffer(_ >>> 0, t, n);
    }
    function Fb(e, _, t, n, r, a, c) {
        e.setViewport(_, t, n, r, a, c);
    }
    function Mb() {
        return s(function(e, _, t) {
            return Reflect.set(e, _, t);
        }, arguments);
    }
    function Vb(e, _, t) {
        e.set(_, t >>> 0);
    }
    function Eb(e, _) {
        e.height = _ >>> 0;
    }
    function Lb(e, _) {
        e.height = _ >>> 0;
    }
    function Cb(e, _) {
        e.onuncapturederror = _;
    }
    function Rb(e, _) {
        e.width = _ >>> 0;
    }
    function Gb(e, _) {
        e.width = _ >>> 0;
    }
    function Ob(e, _, t, n) {
        e.shaderSource(_, m(t, n));
    }
    function Wb(e, _, t, n) {
        e.shaderSource(_, m(t, n));
    }
    function Ub(e) {
        return e.size;
    }
    function zb(e, _) {
        const t = _.stack, n = y(t, b.__wbindgen_malloc, b.__wbindgen_realloc), r = x;
        w().setInt32(e + 4, r, !0), w().setInt32(e + 0, n, !0);
    }
    function qb() {
        const e = typeof global > "u" ? null : global;
        return u(e) ? 0 : g(e);
    }
    function Jb() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return u(e) ? 0 : g(e);
    }
    function jb() {
        const e = typeof self > "u" ? null : self;
        return u(e) ? 0 : g(e);
    }
    function Qb() {
        const e = typeof window > "u" ? null : window;
        return u(e) ? 0 : g(e);
    }
    function Nb(e, _, t, n, r) {
        e.stencilFuncSeparate(_ >>> 0, t >>> 0, n, r >>> 0);
    }
    function $b(e, _, t, n, r) {
        e.stencilFuncSeparate(_ >>> 0, t >>> 0, n, r >>> 0);
    }
    function Hb(e, _, t) {
        e.stencilMaskSeparate(_ >>> 0, t >>> 0);
    }
    function Xb(e, _, t) {
        e.stencilMaskSeparate(_ >>> 0, t >>> 0);
    }
    function Yb(e, _) {
        e.stencilMask(_ >>> 0);
    }
    function Zb(e, _) {
        e.stencilMask(_ >>> 0);
    }
    function Kb(e, _, t, n, r) {
        e.stencilOpSeparate(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function ec(e, _, t, n, r) {
        e.stencilOpSeparate(_ >>> 0, t >>> 0, n >>> 0, r >>> 0);
    }
    function _c(e, _) {
        e.submit(_);
    }
    function tc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function nc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function rc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p) {
            e.texImage3D(_ >>> 0, t, n, r, a, c, o, i >>> 0, d >>> 0, p);
        }, arguments);
    }
    function ac(e, _, t, n) {
        e.texParameteri(_ >>> 0, t >>> 0, n);
    }
    function bc(e, _, t, n) {
        e.texParameteri(_ >>> 0, t >>> 0, n);
    }
    function cc(e, _, t, n, r, a) {
        e.texStorage2D(_ >>> 0, t, n >>> 0, r, a);
    }
    function fc(e, _, t, n, r, a, c) {
        e.texStorage3D(_ >>> 0, t, n >>> 0, r, a, c);
    }
    function oc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function ic() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function uc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function dc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function gc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function sc() {
        return s(function(e, _, t, n, r, a, c, o, i, d) {
            e.texSubImage2D(_ >>> 0, t, n, r, a, c, o >>> 0, i >>> 0, d);
        }, arguments);
    }
    function wc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p, h) {
            e.texSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p >>> 0, h);
        }, arguments);
    }
    function lc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p, h) {
            e.texSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p >>> 0, h);
        }, arguments);
    }
    function mc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p, h) {
            e.texSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p >>> 0, h);
        }, arguments);
    }
    function pc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p, h) {
            e.texSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p >>> 0, h);
        }, arguments);
    }
    function xc() {
        return s(function(e, _, t, n, r, a, c, o, i, d, p, h) {
            e.texSubImage3D(_ >>> 0, t, n, r, a, c, o, i, d >>> 0, p >>> 0, h);
        }, arguments);
    }
    function yc(e, _) {
        return e.then(_);
    }
    function hc(e, _) {
        return e.then(_);
    }
    function Sc(e, _, t) {
        return e.then(_, t);
    }
    function vc(e, _, t) {
        return e.then(_, t);
    }
    function Bc(e) {
        const _ = e.type;
        return (jf.indexOf(_) + 1 || 4) - 1;
    }
    function Ic(e, _, t) {
        e.uniform1f(_, t);
    }
    function Ac(e, _, t) {
        e.uniform1f(_, t);
    }
    function Pc(e, _, t) {
        e.uniform1i(_, t);
    }
    function Dc(e, _, t) {
        e.uniform1i(_, t);
    }
    function Tc(e, _, t) {
        e.uniform1ui(_, t >>> 0);
    }
    function kc(e, _, t, n) {
        e.uniform2fv(_, l(t, n));
    }
    function Fc(e, _, t, n) {
        e.uniform2fv(_, l(t, n));
    }
    function Mc(e, _, t, n) {
        e.uniform2iv(_, S(t, n));
    }
    function Vc(e, _, t, n) {
        e.uniform2iv(_, S(t, n));
    }
    function Ec(e, _, t, n) {
        e.uniform2uiv(_, v(t, n));
    }
    function Lc(e, _, t, n) {
        e.uniform3fv(_, l(t, n));
    }
    function Cc(e, _, t, n) {
        e.uniform3fv(_, l(t, n));
    }
    function Rc(e, _, t, n) {
        e.uniform3iv(_, S(t, n));
    }
    function Gc(e, _, t, n) {
        e.uniform3iv(_, S(t, n));
    }
    function Oc(e, _, t, n) {
        e.uniform3uiv(_, v(t, n));
    }
    function Wc(e, _, t, n, r, a) {
        e.uniform4f(_, t, n, r, a);
    }
    function Uc(e, _, t, n, r, a) {
        e.uniform4f(_, t, n, r, a);
    }
    function zc(e, _, t, n) {
        e.uniform4fv(_, l(t, n));
    }
    function qc(e, _, t, n) {
        e.uniform4fv(_, l(t, n));
    }
    function Jc(e, _, t, n) {
        e.uniform4iv(_, S(t, n));
    }
    function jc(e, _, t, n) {
        e.uniform4iv(_, S(t, n));
    }
    function Qc(e, _, t, n) {
        e.uniform4uiv(_, v(t, n));
    }
    function Nc(e, _, t, n) {
        e.uniformBlockBinding(_, t >>> 0, n >>> 0);
    }
    function $c(e, _, t, n, r) {
        e.uniformMatrix2fv(_, t !== 0, l(n, r));
    }
    function Hc(e, _, t, n, r) {
        e.uniformMatrix2fv(_, t !== 0, l(n, r));
    }
    function Xc(e, _, t, n, r) {
        e.uniformMatrix2x3fv(_, t !== 0, l(n, r));
    }
    function Yc(e, _, t, n, r) {
        e.uniformMatrix2x4fv(_, t !== 0, l(n, r));
    }
    function Zc(e, _, t, n, r) {
        e.uniformMatrix3fv(_, t !== 0, l(n, r));
    }
    function Kc(e, _, t, n, r) {
        e.uniformMatrix3fv(_, t !== 0, l(n, r));
    }
    function ef(e, _, t, n, r) {
        e.uniformMatrix3x2fv(_, t !== 0, l(n, r));
    }
    function _f(e, _, t, n, r) {
        e.uniformMatrix3x4fv(_, t !== 0, l(n, r));
    }
    function tf(e, _, t, n, r) {
        e.uniformMatrix4fv(_, t !== 0, l(n, r));
    }
    function nf(e, _, t, n, r) {
        e.uniformMatrix4fv(_, t !== 0, l(n, r));
    }
    function rf(e, _, t, n, r) {
        e.uniformMatrix4x2fv(_, t !== 0, l(n, r));
    }
    function af(e, _, t, n, r) {
        e.uniformMatrix4x3fv(_, t !== 0, l(n, r));
    }
    function bf(e) {
        e.unmap();
    }
    function cf(e) {
        return e.usage;
    }
    function ff(e, _) {
        e.useProgram(_);
    }
    function of(e, _) {
        e.useProgram(_);
    }
    function uf(e) {
        return e.valueOf();
    }
    function df(e) {
        return e.value;
    }
    function gf(e, _, t) {
        e.vertexAttribDivisorANGLE(_ >>> 0, t >>> 0);
    }
    function sf(e, _, t) {
        e.vertexAttribDivisor(_ >>> 0, t >>> 0);
    }
    function wf(e, _, t, n, r, a) {
        e.vertexAttribIPointer(_ >>> 0, t, n >>> 0, r, a);
    }
    function lf(e, _, t, n, r, a, c) {
        e.vertexAttribPointer(_ >>> 0, t, n >>> 0, r !== 0, a, c);
    }
    function mf(e, _, t, n, r, a, c) {
        e.vertexAttribPointer(_ >>> 0, t, n >>> 0, r !== 0, a, c);
    }
    function pf(e) {
        return e.videoHeight;
    }
    function xf(e) {
        return e.videoWidth;
    }
    function yf(e, _, t, n, r) {
        e.viewport(_, t, n, r);
    }
    function hf(e, _, t, n, r) {
        e.viewport(_, t, n, r);
    }
    function Sf(e) {
        return D.__wrap(e);
    }
    function vf(e) {
        return e.width;
    }
    function Bf(e) {
        return e.width;
    }
    function If(e) {
        return e.width;
    }
    function Af(e, _, t, n, r, a) {
        e.writeBuffer(_, t, n, r, a);
    }
    function Pf(e, _, t, n, r) {
        e.writeTexture(_, t, n, r);
    }
    function Df(e, _) {
        return z(e, _, b.wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___, qf);
    }
    function Tf(e, _) {
        return z(e, _, b.wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output_______, Uf);
    }
    function kf(e, _) {
        return z(e, _, b.wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output_______, zf);
    }
    function Ff(e) {
        return e;
    }
    function Mf(e, _) {
        return l(e, _);
    }
    function Vf(e, _) {
        return Hf(e, _);
    }
    function Ef(e, _) {
        return S(e, _);
    }
    function Lf(e, _) {
        return Xf(e, _);
    }
    function Cf(e, _) {
        return Yf(e, _);
    }
    function Rf(e, _) {
        return v(e, _);
    }
    function Gf(e, _) {
        return U(e, _);
    }
    function Of(e, _) {
        return m(e, _);
    }
    function Wf() {
        const e = b.__wbindgen_externrefs, _ = e.grow(4);
        e.set(0, void 0), e.set(_ + 0, void 0), e.set(_ + 1, null), e.set(_ + 2, !0), e.set(_ + 3, !1);
    }
    function Uf(e, _, t) {
        b.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true_(e, _, t);
    }
    function zf(e, _, t) {
        b.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true__2(e, _, t);
    }
    function qf(e, _, t) {
        const n = b.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___true_(e, _, t);
        if (n[1]) throw R(n[0]);
    }
    function Jf(e, _, t, n) {
        b.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined_______true_(e, _, t, n);
    }
    const jf = [
        "error",
        "warning",
        "info"
    ], Qf = [
        "unknown",
        "destroyed"
    ], Nf = [
        "validation",
        "out-of-memory",
        "internal"
    ], G = [
        "uint16",
        "uint32"
    ], $f = [
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
    ], q = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>b.__wbg_gpugameoflife_free(e >>> 0, 1)), J = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>b.__wbg_webglgameoflife_free(e >>> 0, 1));
    function g(e) {
        const _ = b.__externref_table_alloc();
        return b.__wbindgen_externrefs.set(_, e), _;
    }
    const j = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>e.dtor(e.a, e.b));
    function W(e) {
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
            r > 0 && (a += W(e[0]));
            for(let c = 1; c < r; c++)a += ", " + W(e[c]);
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
    function l(e, _) {
        return e = e >>> 0, Zf().subarray(e / 4, e / 4 + _);
    }
    function Hf(e, _) {
        return e = e >>> 0, Kf().subarray(e / 2, e / 2 + _);
    }
    function S(e, _) {
        return e = e >>> 0, eo().subarray(e / 4, e / 4 + _);
    }
    function Xf(e, _) {
        return e = e >>> 0, _o().subarray(e / 1, e / 1 + _);
    }
    function Yf(e, _) {
        return e = e >>> 0, to().subarray(e / 2, e / 2 + _);
    }
    function v(e, _) {
        return e = e >>> 0, no().subarray(e / 4, e / 4 + _);
    }
    function U(e, _) {
        return e = e >>> 0, I().subarray(e / 1, e / 1 + _);
    }
    let B = null;
    function w() {
        return (B === null || B.buffer.detached === !0 || B.buffer.detached === void 0 && B.buffer !== b.memory.buffer) && (B = new DataView(b.memory.buffer)), B;
    }
    let T = null;
    function Zf() {
        return (T === null || T.byteLength === 0) && (T = new Float32Array(b.memory.buffer)), T;
    }
    let k = null;
    function Kf() {
        return (k === null || k.byteLength === 0) && (k = new Int16Array(b.memory.buffer)), k;
    }
    let F = null;
    function eo() {
        return (F === null || F.byteLength === 0) && (F = new Int32Array(b.memory.buffer)), F;
    }
    let M = null;
    function _o() {
        return (M === null || M.byteLength === 0) && (M = new Int8Array(b.memory.buffer)), M;
    }
    function m(e, _) {
        return e = e >>> 0, ao(e, _);
    }
    let V = null;
    function to() {
        return (V === null || V.byteLength === 0) && (V = new Uint16Array(b.memory.buffer)), V;
    }
    let E = null;
    function no() {
        return (E === null || E.byteLength === 0) && (E = new Uint32Array(b.memory.buffer)), E;
    }
    let L = null;
    function I() {
        return (L === null || L.byteLength === 0) && (L = new Uint8Array(b.memory.buffer)), L;
    }
    function s(e, _) {
        try {
            return e.apply(this, _);
        } catch (t) {
            const n = g(t);
            b.__wbindgen_exn_store(n);
        }
    }
    function u(e) {
        return e == null;
    }
    function z(e, _, t, n) {
        const r = {
            a: e,
            b: _,
            cnt: 1,
            dtor: t
        }, a = (...c)=>{
            r.cnt++;
            const o = r.a;
            r.a = 0;
            try {
                return n(o, r.b, ...c);
            } finally{
                r.a = o, a._wbg_cb_unref();
            }
        };
        return a._wbg_cb_unref = ()=>{
            --r.cnt === 0 && (r.dtor(r.a, r.b), r.a = 0, j.unregister(r));
        }, j.register(a, r, r), a;
    }
    function y(e, _, t) {
        if (t === void 0) {
            const o = A.encode(e), i = _(o.length, 1) >>> 0;
            return I().subarray(i, i + o.length).set(o), x = o.length, i;
        }
        let n = e.length, r = _(n, 1) >>> 0;
        const a = I();
        let c = 0;
        for(; c < n; c++){
            const o = e.charCodeAt(c);
            if (o > 127) break;
            a[r + c] = o;
        }
        if (c !== n) {
            c !== 0 && (e = e.slice(c)), r = t(r, n, n = c + e.length * 3, 1) >>> 0;
            const o = I().subarray(r + c, r + n), i = A.encodeInto(e, o);
            c += i.written, r = t(r, n, c, 1) >>> 0;
        }
        return x = c, r;
    }
    function R(e) {
        const _ = b.__wbindgen_externrefs.get(e);
        return b.__externref_table_dealloc(e), _;
    }
    let C = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    C.decode();
    const ro = 2146435072;
    let O = 0;
    function ao(e, _) {
        return O += _, O >= ro && (C = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), C.decode(), O = _), C.decode(I().subarray(e, e + _));
    }
    const A = new TextEncoder;
    "encodeInto" in A || (A.encodeInto = function(e, _) {
        const t = A.encode(e);
        return _.set(t), {
            read: e.length,
            written: t.length
        };
    });
    let x = 0, b;
    function bo(e) {
        b = e;
    }
    URL = globalThis.URL;
    const f = await $({
        "./game_of_life_gpu_bg.js": {
            __wbg_length_b3416cf66a5452c8: Mr,
            __wbg_get_unchecked_329cfe50afab7352: br,
            __wbg_next_11b99ee6237339e3: Fa,
            __wbg_done_08ce71ee07e3bd17: Gt,
            __wbg_value_21fc78aab0322612: df,
            __wbg_gpugameoflife_new: or,
            __wbg_call_2d781c1f4d5c0ef8: He,
            __wbg_webglgameoflife_new: Sf,
            __wbg_new_typed_aaaeaf29cf802876: Da,
            __wbg_get_a8ee5c45dabc1b3b: rr,
            __wbg_get_with_ref_key_6412cf3094599694: cr,
            __wbg_String_8564e559799eccda: X,
            __wbg_new_227d7c05414eb861: va,
            __wbg_stack_3b0d974bbf31e44f: zb,
            __wbg_error_a6fa202b58aa1cd3: on,
            __wbg_then_9e335f6dd892bc11: Sc,
            __wbg_submit_60f2469dc00130cc: _c,
            __wbg_new_typed_bccac67128ed885a: Ta,
            __wbg_instanceof_GpuValidationError_2828a9f6f4ea2c0b: yr,
            __wbg_instanceof_GpuCanvasContext_8867fd6a49dfb80b: mr,
            __wbg_instanceof_GpuOutOfMemoryError_ad32cc08223bf570: xr,
            __wbg_instanceof_Object_be1962063fcc0c9f: Sr,
            __wbg_instanceof_GpuAdapter_8825bf3533b2dc81: lr,
            __wbg_instanceof_GpuDeviceLostInfo_9385c1b1d1700172: pr,
            __wbg_error_2acb88afe0ad9a3e: fn,
            __wbg_valueOf_5c6da6c9a85f34dc: uf,
            __wbg_messages_4e98c7e63c5efe7b: pa,
            __wbg_message_f762db05c1294eca: ma,
            __wbg_size_1dfbf7241f9df1cc: Ub,
            __wbg_features_fdbd3daed26aa468: gn,
            __wbg_label_cdc2b7a875dc5123: kr,
            __wbg_reason_d7f4ddcad86f8d99: Ka,
            __wbg_maxTextureDimension1D_983c9a563c1855d9: ca,
            __wbg_message_a77e1a9202609622: la,
            __wbg_usage_ee2982f59567c06f: cf,
            __wbg_limits_becc24c879d87717: Lr,
            __wbg_configure_6e1ccd3ac31b721c: p_,
            __wbg_message_1b27ea1ad3998a9f: wa,
            __wbg_maxTextureDimension2D_a0a2be37afbde706: fa,
            __wbg_type_4b0a304ebc25e195: Bc,
            __wbg_getPreferredCanvasFormat_4314f4e4f5895771: Un,
            __wbg_getCompilationInfo_b41435ddc0bb40c8: kn,
            __wbg_getCurrentTexture_6dc2cdde9bdc098d: Ln,
            __wbg_getBindGroupLayout_b9533489f3ee14df: Dn,
            __wbg_getBindGroupLayout_aba26df848b4322d: Pn,
            __wbg_maxTextureDimension3D_53aefd0d779b193e: oa,
            __wbg_lineNum_24517b98f306fcae: Cr,
            __wbg_finish_ee515f526784acd5: pn,
            __wbg_maxComputeWorkgroupSizeY_e1a1ecdbdc9d75d8: $r,
            __wbg_popErrorScope_2869a89dd4626f0c: Wa,
            __wbg_maxComputeWorkgroupSizeZ_fe66cf9606e1a594: Hr,
            __wbg_drawIndirect_73df189881970a43: Yt,
            __wbg_setIndexBuffer_4219294fa3e2d59b: pb,
            __wbg_writeBuffer_b5e6e8f3f93629bc: Af,
            __wbg_pushErrorScope_72e651b0f8f64c0e: za,
            __wbg_maxComputeWorkgroupsPerDimension_8cb3348843013a6b: Yr,
            __wbg_setPipeline_723820e1c5cc61e7: vb,
            __wbg_setIndexBuffer_5eb14c0c19ab80c2: xb,
            __wbg_setVertexBuffer_caad1ac6b71dea4a: kb,
            __wbg_writeTexture_57e41dd94bac65c4: Pf,
            __wbg_setIndexBuffer_f0ab50b0e1d8658c: hb,
            __wbg_setPipeline_f2cf83769bb33769: Bb,
            __wbg_setVertexBuffer_c643d7ac0abf4554: Tb,
            __wbg_setVertexBuffer_8dd1cb9fbc714a98: Db,
            __wbg_getMappedRange_11ec4cfce4df1e72: Gn,
            __wbg_setVertexBuffer_54536e0e73bfc91e: Pb,
            __wbg_copyExternalImageToTexture_eebbba3aa85a0b95: S_,
            __wbg_beginComputePass_5d05bddfd3eb7ba4: se,
            __wbg_maxTextureArrayLayers_8503bb6fd0cdb150: ba,
            __wbg_end_54134488dbc5b7a9: bn,
            __wbg_has_2184fc4b845f2b5f: ir,
            __wbg_finish_eb06372cc93f8d50: mn,
            __wbg_requestAdapter_e4b32f2647c66726: nb,
            __wbg_features_30a76d141781ad80: dn,
            __wbg_beginRenderPass_9a7bf53d588737dc: le,
            __wbg_maxBindGroups_5d3409c14d2756b5: Ur,
            __wbg_offset_164492575e959c94: La,
            __wbg_dispatchWorkgroups_c122d0482fa3f389: Ct,
            __wbg_setBindGroup_1602c955be9b2eaa: ub,
            __wbg_destroy_50767c0458f7c8d1: Dt,
            __wbg_limits_5b3783fcc0d36428: Er,
            __wbg_requestDevice_6130c3ba10d633f9: rb,
            __wbg_executeBundles_2905636f81aabf99: un,
            __wbg_length_87e0297027dd7802: Fr,
            __wbg_queue_6b07ccdd49a6ba90: $a,
            __wbg_maxBindingsPerBindGroup_512a63ba20ee714c: zr,
            __wbg_dispatchWorkgroupsIndirect_64be0198a6df9be7: Lt,
            __wbg_lost_2c34651e3317be8b: Or,
            __wbg_clearBuffer_b08b15b7ee3c9d57: Ye,
            __wbg_maxDynamicUniformBuffersPerPipelineLayout_ade9d0536439985a: Kr,
            __wbg_setBlendConstant_257274277b0e3153: mb,
            __wbg_end_57a2746c247f499a: cn,
            __wbg_setBindGroup_6149584f04998372: db,
            __wbg_maxDynamicStorageBuffersPerPipelineLayout_6974d29539996dc2: Zr,
            __wbg_setScissorRect_0578b1de90caf434: Ib,
            __wbg_setPipeline_481f34ae14c49d67: Sb,
            __wbg_set_onuncapturederror_729c2e42c36923f4: Cb,
            __wbg_maxSampledTexturesPerShaderStage_e560c5b5b6029c57: _a,
            __wbg_setStencilReference_7616273572b1075e: Ab,
            __wbg_setBindGroup_9877b57492cb7e1c: sb,
            __wbg_maxSamplersPerShaderStage_28a8a2de2a3d656e: ta,
            __wbg_setViewport_94128a2b1a708040: Fb,
            __wbg_createView_c227b9af7bd5f441: tt,
            __wbg_clearBuffer_f24f8de43db597ec: Ze,
            __wbg_maxStorageBuffersPerShaderStage_b81c4449fbcb39c3: ra,
            __wbg_setBindGroup_f930832baeb4279b: lb,
            __wbg_createBindGroup_876adbf7e329ce2e: T_,
            __wbg_destroy_a2c0702c5d1269b5: kt,
            __wbg_maxStorageTexturesPerShaderStage_175a5e42917aedd2: aa,
            __wbg_setBindGroup_8d384b1c5ed329f4: gb,
            __wbg_createBindGroupLayout_e37f9323c278f93f: D_,
            __wbg_maxUniformBuffersPerShaderStage_b159f3442e264f35: ua,
            __wbg_createBuffer_e3f8b2bd8b492498: M_,
            __wbg_maxUniformBufferBindingSize_8fc7ea016caf650c: ia,
            __wbg_setBindGroup_f4d552dcef65a491: wb,
            __wbg_draw_ce5e8b8ad56571cb: en,
            __wbg_maxStorageBufferBindingSize_984825203efcccc6: na,
            __wbg_createCommandEncoder_e617922978f8b4de: V_,
            __wbg_minUniformBufferOffsetAlignment_327ef98e308ca208: ya,
            __wbg_createComputePipeline_6794bf24c6c03583: E_,
            __wbg_minStorageBufferOffsetAlignment_fe964dbc6a6d7ff3: xa,
            __wbg_then_1d7a5273811a5cea: hc,
            __wbg_maxVertexBuffers_e5cf174a3497d472: sa,
            __wbg_mapAsync_8d0ffc031e86e9a0: Wr,
            __wbg_createPipelineLayout_1a8ea1f550cfa5e7: R_,
            __wbg_copyBufferToBuffer_d52339f5d639af9b: y_,
            __wbg_maxBufferSize_8cef5a2e6fae09fa: qr,
            __wbg_drawIndexed_55f6bf3bda0212ad: Ht,
            __wbg_unmap_4aa38f8c5283cc1d: bf,
            __wbg_createQuerySet_6050df2adcb1f167: W_,
            __wbg_maxVertexAttributes_9c129ee44a6fa783: da,
            __wbg_createRenderBundleEncoder_a98ecb1771e99ab3: z_,
            __wbg_copyBufferToTexture_48aa78a412b2a467: h_,
            __wbg_maxVertexBufferArrayStride_1d0f177a1fdcdf3c: ga,
            __wbg_draw_57caf8f0bc1ea050: Kt,
            __wbg_drawIndexedIndirect_fcc6ecbd3d698094: $t,
            __wbg_createRenderPipeline_921034ccba195ffe: q_,
            __wbg_maxInterStageShaderComponents_d6dbbdabbd40588b: ea,
            __wbg_copyTextureToBuffer_5aef45a98e34a97e: A_,
            __wbg_drawIndirect_a2f7c719957f8ec9: Zt,
            __wbg_maxColorAttachments_378f5fb1c453321d: jr,
            __wbg_createSampler_cb4137c4e97c7098: N_,
            __wbg_copyTextureToTexture_97d0e9333a1e1008: P_,
            __wbg_maxColorAttachmentBytesPerSample_54d9c60b6cdd092a: Jr,
            __wbg_createShaderModule_912a19a8ccc2aa1a: $_,
            __wbg_finish_41491ca602373cde: ln,
            __wbg_maxComputeWorkgroupStorageSize_49c38f3e08b0f760: Xr,
            __wbg_drawIndexed_9c9719597507e735: Xt,
            __wbg_setIndexBuffer_7e208bb69310ed01: yb,
            __wbg_createTexture_1a3ebeb1ddd7a035: Y_,
            __wbg_finish_35be15c58b55a95b: wn,
            __wbg_maxComputeInvocationsPerWorkgroup_d8877398fe435d24: Qr,
            __wbg_destroy_80182ff6e496228e: Tt,
            __wbg_resolveQuerySet_217f20ef3ebd6aed: ab,
            __wbg_maxComputeWorkgroupSizeX_b6f88bafac1581bf: Nr,
            __wbg_drawIndexedIndirect_888ac46c4c23516f: Nt,
            __wbg_Window_06e90eea4c7df280: Y,
            __wbg_gpu_d9721d200584e919: fr,
            __wbg_WorkerGlobalScope_defda269b75e179a: Z,
            __wbg_resolve_ae8d83246e5bcc12: bb,
            __wbg_then_098abe61755d12f6: yc,
            __wbg_queueMicrotask_0c399741342fb10f: Qa,
            __wbg_queueMicrotask_a082d78ce798393e: Na,
            __wbg_includes_9f81335525be01f9: sr,
            __wbg_push_e87b0e732085a946: qa,
            __wbg_instanceof_Window_23e677d2c6843922: Ir,
            __wbg_uniform2iv_892b6d31137ad198: Mc,
            __wbg_uniform3fv_85a9a17c9635941b: Lc,
            __wbg_clearBufferuiv_d75635e80261ea93: __,
            __wbg_uniform3iv_4c372010ac6def3f: Gc,
            __wbg_uniform4fv_c416900acf65eca9: qc,
            __wbg_clear_5a0606f7c62ad39a: c_,
            __wbg_compressedTexSubImage2D_aab12b65159c282e: s_,
            __wbg_clearDepth_3ff5ef5e5fad4016: n_,
            __wbg_clearStencil_4505636e726114d0: a_,
            __wbg_colorMask_b053114f7da42448: o_,
            __wbg_compileShader_623a1051cf49494b: u_,
            __wbg_copyTexSubImage2D_b9a10d000c616b3e: B_,
            __wbg_createBuffer_8e47b88217a98607: F_,
            __wbg_createFramebuffer_911d55689ff8358e: L_,
            __wbg_compressedTexSubImage3D_77a6ab77487aa211: l_,
            __wbg_createProgram_8eb14525e7fcffb8: O_,
            __wbg_createRenderbuffer_8847d6a81975caee: j_,
            __wbg_compressedTexSubImage3D_95f64742aae944b8: m_,
            __wbg_createShader_9ffc9dc1832608d7: H_,
            __wbg_createTexture_ceb367c3528574ec: K_,
            __wbg_cullFace_d759515c1199276c: rt,
            __wbg_deleteBuffer_a2f8244b249c356e: at,
            __wbg_deleteFramebuffer_badadfcd45ef5e64: ft,
            __wbg_deleteProgram_fc1d8d77ef7e154d: it,
            __wbg_deleteRenderbuffer_401ffe15b179c343: dt,
            __wbg_deleteShader_a8e5ccb432053dbe: lt,
            __wbg_deleteTexture_d8b1d278731e0c9f: xt,
            __wbg_copyBufferSubData_aaeed526e555f0d1: x_,
            __wbg_depthFunc_0376ef69458b01d8: St,
            __wbg_depthMask_fd5bc408415b9cd3: It,
            __wbg_depthRange_ebba8110d3fe0332: Pt,
            __wbg_clientWaitSync_5402aac488fc18bb: f_,
            __wbg_uniform4iv_b49cd4acf0aa3ebc: Jc,
            __wbg_uniformMatrix2fv_4229ae27417c649a: $c,
            __wbg_uniformMatrix3fv_bafc2707d0c48e27: Kc,
            __wbg_uniformMatrix4fv_7c68dee5aee11694: nf,
            __wbg_activeTexture_66fa8cafd3610ddb: ue,
            __wbg_attachShader_6426e8576a115345: de,
            __wbg_bindAttribLocation_1d976e3bcc954adb: me,
            __wbg_bindBuffer_d2a4f6cfb33336fb: he,
            __wbg_bindFramebuffer_fdc7c38f1c700e64: ve,
            __wbg_bindRenderbuffer_91db2fc67c1f0115: Be,
            __wbg_bindTexture_6e7e157d0aabe457: De,
            __wbg_blendColor_b4c7d8333af4876d: Fe,
            __wbg_blendEquation_c353d94b097007e5: Ce,
            __wbg_blendEquationSeparate_f16ada84ba672878: Ee,
            __wbg_blendFunc_4ce0991003a9468e: We,
            __wbg_blendFuncSeparate_8c91c200b1a72e4b: Ge,
            __wbg_compressedTexSubImage2D_f3c4ae95ef9d2420: w_,
            __wbg_disable_7731e2f3362ef1c5: Et,
            __wbg_disableVertexAttribArray_c4f42277355986c0: Mt,
            __wbg_drawArrays_13005ccff75e4210: Ut,
            __wbg_copyTexSubImage3D_7fcdf7c85bc308a5: I_,
            __wbg_createQuery_0f754c13ae341f39: U_,
            __wbg_enable_3728894fa8c1d348: nn,
            __wbg_createSampler_7bed7d46769be9a7: Q_,
            __wbg_enableVertexAttribArray_626e8d2d9d1fdff9: tn,
            __wbg_createVertexArray_420460898dc8d838: _t,
            __wbg_deleteQuery_9420681ec3d643ef: ut,
            __wbg_framebufferRenderbuffer_d8c1d0b985bd3c51: yn,
            __wbg_deleteSampler_8111fd44b061bdd1: st,
            __wbg_getIndexedParameter_338c7c91cbabcf3e: Rn,
            __wbg_linkProgram_e626a3e7d78e1738: Gr,
            __wbg_pixelStorei_2a3c5b85cf37caba: Ra,
            __wbg_getQueryParameter_5a3a2bd77e5f56bb: Qn,
            __wbg_polygonOffset_cc6bec2f9f4a18f7: Oa,
            __wbg_renderbufferStorage_9130171a6ae371dc: _b,
            __wbg_getSyncParameter_fbf70c60f5e3b271: Kn,
            __wbg_scissor_b18f09381b341db5: ob,
            __wbg_getUniformBlockIndex_e483a4d166df9c2a: er,
            __wbg_shaderSource_06639e7b476e6ac2: Ob,
            __wbg_invalidateFramebuffer_df9574509a402d4f: Ar,
            __wbg_stencilFuncSeparate_94ee4fbc164addec: $b,
            __wbg_stencilMask_326a11d0928c3808: Yb,
            __wbg_stencilMaskSeparate_a7bd409376ee05ff: Xb,
            __wbg_stencilOpSeparate_8627d0f5f7fe5800: ec,
            __wbg_texParameteri_fcdec30159061963: bc,
            __wbg_framebufferTexture2D_e2f7d82e6707010e: Sn,
            __wbg_deleteSync_deeb154f55e59a7d: mt,
            __wbg_frontFace_1537b8c3fc174f05: In,
            __wbg_deleteVertexArray_5a75f4855c2881df: ht,
            __wbg_drawArraysInstanced_13e40fca13079ade: Wt,
            __wbg_drawBuffers_823c4881ba82dc9c: Jt,
            __wbg_drawElementsInstanced_2e549060a77ba831: Qt,
            __wbg_endQuery_48241eaef2e96940: an,
            __wbg_fenceSync_460953d9ad5fd31a: sn,
            __wbg_getParameter_e634fa73b5e25287: Wn,
            __wbg_framebufferTextureLayer_01d5b9516636ccae: vn,
            __wbg_getProgramInfoLog_e03efa51473d657e: qn,
            __wbg_getProgramParameter_7d3bd54ec02de007: jn,
            __wbg_getShaderInfoLog_40c6a4ae67d82dde: $n,
            __wbg_getBufferSubData_cbabbb87d4c5c57d: Tn,
            __wbg_getShaderParameter_82c275299b111f1b: Xn,
            __wbg_getUniformLocation_90cdff44c2fceeb9: tr,
            __wbg_uniform1f_8c3b03df282dba21: Ic,
            __wbg_readBuffer_e559a3da4aa9e434: Ha,
            __wbg_uniform1i_acd89bea81085be4: Dc,
            __wbg_readPixels_41a371053c299080: Xa,
            __wbg_readPixels_f675ed52bd44f8f1: Za,
            __wbg_uniform4f_7275e0fb864b7513: Uc,
            __wbg_useProgram_49b77c7558a0646a: ff,
            __wbg_renderbufferStorageMultisample_d999a80fbc25df5f: eb,
            __wbg_texImage3D_88ff1fa41be127b9: rc,
            __wbg_texStorage2D_a84f74d36d279097: cc,
            __wbg_texStorage3D_aec6fc3e85ec72da: fc,
            __wbg_texSubImage2D_1e7d6febf82b9bed: oc,
            __wbg_texSubImage2D_d784df0b813dc1ab: gc,
            __wbg_texSubImage2D_3bb41b987f2bfe39: uc,
            __wbg_texSubImage2D_dd1d50234b61de4b: sc,
            __wbg_samplerParameterf_774cff2229cc9fc3: cb,
            __wbg_samplerParameteri_7dde222b01588620: fb,
            __wbg_texImage2D_f4ae6c314a9a4bbe: nc,
            __wbg_vertexAttribPointer_f63675d7fad431e6: mf,
            __wbg_viewport_63ee76a0f029804d: yf,
            __wbg_texSubImage2D_271ffedb47424d0d: ic,
            __wbg_texSubImage3D_b3cbbb79fe54da6d: pc,
            __wbg_texSubImage3D_f9c3af789162846a: xc,
            __wbg_uniform1ui_9f8d9b877d6691d8: Tc,
            __wbg_uniform2fv_28fbf8836f3045d0: kc,
            __wbg_uniform2iv_f40f632615c5685a: Vc,
            __wbg_texSubImage3D_09cc863aedf44a21: wc,
            __wbg_texSubImage3D_6a46981af8bc8e49: mc,
            __wbg_texSubImage3D_4665e67a8f0f7806: lc,
            __wbg_querySelector_46ff1b81410aebea: ja,
            __wbg_querySelectorAll_ccbf0696a1c6fed8: Ja,
            __wbg_uniform2uiv_6d170469a702f23e: Ec,
            __wbg_uniform4fv_a4cdb4bd66867df5: zc,
            __wbg_uniform4iv_d654af0e6b7bdb1a: jc,
            __wbg_uniform3fv_cdf7c84f9119f13b: Cc,
            __wbg_uniform3iv_38e74d2ae9dfbfb8: Rc,
            __wbg_uniform3uiv_bb7266bb3a5aef96: Oc,
            __wbg_uniform4uiv_e95d9a124fb8f91e: Qc,
            __wbg_uniformMatrix3fv_244fc4416319c169: Zc,
            __wbg_uniformMatrix3x2fv_f1729eb13fcd41a3: ef,
            __wbg_uniformMatrix3x4fv_3c11181f5fa929de: _f,
            __wbg_uniformBlockBinding_a47fa267662afd7b: Nc,
            __wbg_uniformMatrix2fv_648417dd2040de5b: Hc,
            __wbg_uniformMatrix2x3fv_eb9a53c8c9aa724b: Xc,
            __wbg_uniformMatrix2x4fv_8849517a52f2e845: Yc,
            __wbg_uniformMatrix4fv_4d322b295d122214: tf,
            __wbg_vertexAttribIPointer_ecd3baef73ba0965: wf,
            __wbg_activeTexture_11610c2c57e26cfa: ie,
            __wbg_attachShader_e557f37438249ff7: ge,
            __wbg_bindAttribLocation_8791402cc151e914: pe,
            __wbg_bindBuffer_142694a9732bc098: ye,
            __wbg_bindFramebuffer_4643a12ca1c72776: Se,
            __wbg_bindRenderbuffer_e6cfc20b6ebcf605: Ie,
            __wbg_bindTexture_6a0892cd752b41d9: Pe,
            __wbg_blendColor_c2771aead110c867: Me,
            __wbg_blendEquation_46367a891604b604: Le,
            __wbg_blendEquationSeparate_b08aba1c715cb265: Ve,
            __wbg_blendFunc_2e98c5f57736e5f3: Oe,
            __wbg_blendFuncSeparate_6aae138b81d75b47: Re,
            __wbg_clear_3d6ad4729e206aac: b_,
            __wbg_clearDepth_0fb1b5aba2ff2d63: t_,
            __wbg_clearStencil_0e5924dc2f0fa2b7: r_,
            __wbg_colorMask_b47840e05b5f8181: i_,
            __wbg_compileShader_7ca66245c2798601: d_,
            __wbg_width_e0981c16dad36a72: If,
            __wbg_uniformMatrix4x2fv_5a8701b552d704af: rf,
            __wbg_uniformMatrix4x3fv_741c3f4e0b2c7e04: af,
            __wbg_vertexAttribDivisor_99b2fd5affca539d: sf,
            __wbg_copyTexSubImage2D_08a10bcd45b88038: v_,
            __wbg_createBuffer_1aa34315dc9585a2: k_,
            __wbg_createFramebuffer_97d39363cdd9242a: C_,
            __wbg_createProgram_1fa32901e4db13cd: G_,
            __wbg_createRenderbuffer_69fb8c438e70e494: J_,
            __wbg_createShader_a00913b8c6489e6b: X_,
            __wbg_createTexture_9b1b4f40cab0097b: Z_,
            __wbg_cullFace_2c9f57c2f90cbe70: nt,
            __wbg_deleteBuffer_b053c58b4ed1ab1c: bt,
            __wbg_getExtension_0b8543b0c6b3068d: Cn,
            __wbg_getParameter_b1431cfde390c2fc: On,
            __wbg_getProgramInfoLog_50443ddea7475f57: zn,
            __wbg_getProgramParameter_46e2d49878b56edd: Jn,
            __wbg_getShaderInfoLog_22f9e8c90a52f38d: Nn,
            __wbg_getShaderParameter_46f64f7ca5d534db: Hn,
            __wbg_getSupportedExtensions_a799751b74c3a674: Yn,
            __wbg_getUniformLocation_5eb08673afa04eee: _r,
            __wbg_height_ee9ea840e5499878: dr,
            __wbg_framebufferTextureMultiviewOVR_336ea10e261ec5f6: Bn,
            __wbg_drawBuffersWEBGL_5f9efe378355889a: qt,
            __wbg_drawArraysInstancedANGLE_20ee4b8f67503b54: Ot,
            __wbg_bindVertexArrayOES_082b0791772327fa: Te,
            __wbg_getSupportedProfiles_e089393bebafd3b0: Zn,
            __wbg_deleteFramebuffer_1af8b97d40962089: ct,
            __wbg_deleteProgram_cb8f79d5c1e84863: ot,
            __wbg_deleteRenderbuffer_b030660bf2e9fc95: gt,
            __wbg_deleteShader_5b6992b5e5894d44: wt,
            __wbg_deleteTexture_00ecab74f7bddf91: pt,
            __wbg_depthFunc_befeae10cb29920d: vt,
            __wbg_depthMask_c6c1b0d88ade6c84: Bt,
            __wbg_depthRange_b42d493a2b9258aa: At,
            __wbg_disable_62ec2189c50a0db7: Vt,
            __wbg_disableVertexAttribArray_124a165b099b763b: Ft,
            __wbg_drawArrays_c20dedf441392005: zt,
            __wbg_enable_91dff7f43064bb54: rn,
            __wbg_enableVertexAttribArray_60dadea3a00e104a: _n,
            __wbg_framebufferRenderbuffer_7a2be23309166ad3: xn,
            __wbg_framebufferTexture2D_bf4d47f4027a3682: hn,
            __wbg_frontFace_57081a0312eb822e: An,
            __wbg_linkProgram_b969f67969a850b5: Rr,
            __wbg_pixelStorei_2a2385ed59538d48: Ca,
            __wbg_polygonOffset_17cb85e417bf9db7: Ga,
            __wbg_renderbufferStorage_b184ea29064b4e02: tb,
            __wbg_scissor_db3842546fb31842: ib,
            __wbg_vertexAttribPointer_ea73fc4cc5b7d647: lf,
            __wbg_viewport_b60aceadb9166023: hf,
            __wbg_drawElementsInstancedANGLE_e9170c6414853487: jt,
            __wbg_createVertexArrayOES_1b30eca82fb89274: et,
            __wbg_shaderSource_2bca0edc97475e95: Wb,
            __wbg_stencilFuncSeparate_18642df0574c1930: Nb,
            __wbg_stencilMask_6354f8ba392f6581: Zb,
            __wbg_stencilMaskSeparate_13b0475860a9b559: Hb,
            __wbg_stencilOpSeparate_7e819381705b9731: Kb,
            __wbg_texParameteri_f4b1596185f5432d: ac,
            __wbg_uniform1f_b8841988568406b9: Ac,
            __wbg_uniform1i_953040fb972e9fab: Pc,
            __wbg_uniform4f_0b00a34f4789ad14: Wc,
            __wbg_useProgram_5405b431988b837b: of,
            __wbg_bufferSubData_7b112eb88657e7c0: Ne,
            __wbg_navigator_9cebf56f28aa719b: Sa,
            __wbg_texSubImage2D_68e0413824eddc12: dc,
            __wbg_clearBufferfv_7bc3e789059fd29b: Ke,
            __wbg_uniform2fv_f3c92aab21d0dec3: Fc,
            __wbg_clearBufferiv_050b376a7480ef9c: e_,
            __wbg_get_c7546417fb0bec10: ar,
            __wbg_deleteVertexArrayOES_9da21e3515bf556e: yt,
            __wbg_width_71d9d44b5e14c4b7: Bf,
            __wbg_vertexAttribDivisorANGLE_b357aa2bf70d3dcf: gf,
            __wbg_bufferData_fb2d946faa09a60b: je,
            __wbg_beginQuery_ac2ef47e00ec594a: we,
            __wbg_set_width_576343a4a7f2cf28: Rb,
            __wbg_height_fb8c4164276f25fd: gr,
            __wbg_navigator_583ffd4fc14c0f7a: ha,
            __wbg_document_c0320cd4183c6d9b: Rt,
            __wbg_set_height_98a1a397672657e2: Eb,
            __wbg_bufferData_d3bd8c69ff4b7254: Je,
            __wbg_bindBufferRange_469c3643c2099003: xe,
            __wbg_getContext_a9236f98f1f7fe7c: Vn,
            __wbg_bindSampler_be3a05e88cecae98: Ae,
            __wbg_getContext_794490fe04be926a: Mn,
            __wbg_bufferSubData_3fcefd4648de39b5: Qe,
            __wbg_bindVertexArray_c307251f3ff61930: ke,
            __wbg_blitFramebuffer_c1a68feaca974c87: Ue,
            __wbg_bufferData_730b629ba3f6824f: ze,
            __wbg_width_4d6fc7fecd877217: vf,
            __wbg_set_width_c0fcaa2da53cd540: Gb,
            __wbg_height_6568c4427c3b889d: ur,
            __wbg_bufferData_d20232e3d5dcdc62: qe,
            __wbg_set_height_b6548a01bdcb689a: Lb,
            __wbg_getContext_f04bf8f22dcb2d53: En,
            __wbg_compressedTexSubImage2D_593058a6f5aca176: g_,
            __wbg_getContext_07270456453ee7f5: Fn,
            __wbg_videoWidth_48f094fdc1b5ba64: xf,
            __wbg_videoHeight_6dac1fd954779498: pf,
            __wbg_readPixels_5c7066b5bd547f81: Ya,
            __wbg_texImage2D_32ed4220040ca614: tc,
            __wbg_instanceof_HtmlCanvasElement_26125339f936be50: hr,
            __wbg_instanceof_WebGl2RenderingContext_349f232f715e6bc2: Br,
            __wbg_new_ab79df5bd7c26067: Aa,
            __wbg_get_326e41e095fb2575: nr,
            __wbg_iterator_d8f549ec8fb061b1: Tr,
            __wbg_new_a70fbab9066b301f: Ia,
            __wbg_isArray_33b91feb269ff46e: Pr,
            __wbg_of_8bf7ed3eca00ea43: Ea,
            __wbg_next_e01a967809d1aa68: Ma,
            __wbg_call_e133b57c9155d22c: Xe,
            __wbg_now_16f0c993d5dd6c27: Va,
            __wbg_is_a166b9958c2438ad: Dr,
            __wbg_then_bc59d1943397ca4e: vc,
            __wbg_length_ea16607d7b61445b: Vr,
            __wbg_prototypesetcall_d62e5099504357e6: Ua,
            __wbg_new_5f486cdf45a04d78: Ba,
            __wbg_new_from_slice_22da9388ac046e50: Pa,
            __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: ka,
            __wbg_buffer_60b8043cd926067d: $e,
            __wbg_set_e80615d7a9a43981: Vb,
            __wbg_set_7eaa4f96924fd6b3: Mb,
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: Jb,
            __wbg_static_accessor_SELF_f207c857566db248: jb,
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: qb,
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: Qb,
            __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6: wr,
            __wbg_instanceof_Uint8Array_740438561a5b956d: vr,
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: be,
            __wbg___wbindgen_in_41dbb8413020e076: _e,
            __wbg___wbindgen_throw_6ddd609b62940d55: fe,
            __wbg_Error_83742b46f01ce22d: H,
            __wbg___wbindgen_is_object_781bc9f159099513: ne,
            __wbg___wbindgen_string_get_395e606bd0ee4427: ce,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: K,
            __wbg___wbindgen_is_function_3c846841762788c1: te,
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: re,
            __wbg___wbindgen_jsval_loose_eq_5bcc3bed3c69e72b: ae,
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: oe,
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: ee,
            __wbindgen_init_externref_table: Wf,
            __wbindgen_cast_0000000000000001: Df,
            __wbindgen_cast_0000000000000002: Tf,
            __wbindgen_cast_0000000000000003: kf,
            __wbindgen_cast_0000000000000004: Ff,
            __wbindgen_cast_0000000000000005: Mf,
            __wbindgen_cast_0000000000000006: Vf,
            __wbindgen_cast_0000000000000007: Ef,
            __wbindgen_cast_0000000000000008: Lf,
            __wbindgen_cast_0000000000000009: Cf,
            __wbindgen_cast_000000000000000a: Rf,
            __wbindgen_cast_000000000000000b: Gf,
            __wbindgen_cast_000000000000000c: Of
        }
    }, N), co = f.memory, fo = f.__wbg_gpugameoflife_free, oo = f.__wbg_webglgameoflife_free, io = f.gpugameoflife_flush_and_render, uo = f.gpugameoflife_grid_pitch, go = f.gpugameoflife_init_device_request_ms, so = f.gpugameoflife_init_panel_ms, wo = f.gpugameoflife_init_renderer_ms, lo = f.gpugameoflife_init_seeding_ms, mo = f.gpugameoflife_init_simulation_ms, po = f.gpugameoflife_last_compute_tick_ms, xo = f.gpugameoflife_last_or_edit_ms, yo = f.gpugameoflife_last_present_ms, ho = f.gpugameoflife_last_render_pass_ms, So = f.gpugameoflife_last_reseed_ms, vo = f.gpugameoflife_last_xor_edit_ms, Bo = f.gpugameoflife_new, Io = f.gpugameoflife_new_offscreen, Ao = f.gpugameoflife_padded_rows, Po = f.gpugameoflife_render_only, Do = f.gpugameoflife_resize, To = f.gpugameoflife_set_camera, ko = f.gpugameoflife_set_init_fade, Fo = f.gpugameoflife_set_scroll, Mo = f.gpugameoflife_set_theme, Vo = f.gpugameoflife_set_transition, Eo = f.gpugameoflife_set_zones, Lo = f.gpugameoflife_tick_and_render, Co = f.gpugameoflife_timestamp_query_supported, Ro = f.gpugameoflife_toggle_cell, Go = f.gpugameoflife_words_per_row, Oo = f.gpugameoflife_world_cols, Wo = f.gpugameoflife_world_rows, Uo = f.webglgameoflife_free, zo = f.webglgameoflife_new_offscreen, qo = f.webglgameoflife_render_only, Jo = f.webglgameoflife_resize, jo = f.webglgameoflife_set_camera, Qo = f.webglgameoflife_set_init_fade, No = f.webglgameoflife_set_theme, $o = f.webglgameoflife_set_transition, Ho = f.webglgameoflife_tick_and_render, Xo = f.webglgameoflife_toggle_cell, Yo = f.webglgameoflife_world_cols, Zo = f.webglgameoflife_grid_pitch, Ko = f.webglgameoflife_world_rows, ei = f.wgpu_render_bundle_draw, _i = f.wgpu_render_bundle_draw_indexed, ti = f.wgpu_render_bundle_set_pipeline, ni = f.wgpu_render_bundle_draw_indirect, ri = f.wgpu_render_bundle_set_bind_group, ai = f.wgpu_render_bundle_set_vertex_buffer, bi = f.wgpu_render_bundle_set_push_constants, ci = f.wgpu_render_bundle_draw_indexed_indirect, fi = f.wgpu_render_bundle_insert_debug_marker, oi = f.wgpu_render_bundle_pop_debug_group, ii = f.wgpu_render_bundle_set_index_buffer, ui = f.wgpu_render_bundle_push_debug_group, di = f.wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___, gi = f.wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output_______, si = f.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___true_, wi = f.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined_______true_, li = f.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true_, mi = f.wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true__2, pi = f.__wbindgen_malloc, xi = f.__wbindgen_realloc, yi = f.__wbindgen_exn_store, hi = f.__externref_table_alloc, Si = f.__wbindgen_externrefs, vi = f.__wbindgen_free, Bi = f.__externref_table_dealloc, Q = f.__wbindgen_start;
    var Ii = Object.freeze({
        __proto__: null,
        __externref_table_alloc: hi,
        __externref_table_dealloc: Bi,
        __wbg_gpugameoflife_free: fo,
        __wbg_webglgameoflife_free: oo,
        __wbindgen_exn_store: yi,
        __wbindgen_externrefs: Si,
        __wbindgen_free: vi,
        __wbindgen_malloc: pi,
        __wbindgen_realloc: xi,
        __wbindgen_start: Q,
        gpugameoflife_flush_and_render: io,
        gpugameoflife_grid_pitch: uo,
        gpugameoflife_init_device_request_ms: go,
        gpugameoflife_init_panel_ms: so,
        gpugameoflife_init_renderer_ms: wo,
        gpugameoflife_init_seeding_ms: lo,
        gpugameoflife_init_simulation_ms: mo,
        gpugameoflife_last_compute_tick_ms: po,
        gpugameoflife_last_or_edit_ms: xo,
        gpugameoflife_last_present_ms: yo,
        gpugameoflife_last_render_pass_ms: ho,
        gpugameoflife_last_reseed_ms: So,
        gpugameoflife_last_xor_edit_ms: vo,
        gpugameoflife_new: Bo,
        gpugameoflife_new_offscreen: Io,
        gpugameoflife_padded_rows: Ao,
        gpugameoflife_render_only: Po,
        gpugameoflife_resize: Do,
        gpugameoflife_set_camera: To,
        gpugameoflife_set_init_fade: ko,
        gpugameoflife_set_scroll: Fo,
        gpugameoflife_set_theme: Mo,
        gpugameoflife_set_transition: Vo,
        gpugameoflife_set_zones: Eo,
        gpugameoflife_tick_and_render: Lo,
        gpugameoflife_timestamp_query_supported: Co,
        gpugameoflife_toggle_cell: Ro,
        gpugameoflife_words_per_row: Go,
        gpugameoflife_world_cols: Oo,
        gpugameoflife_world_rows: Wo,
        memory: co,
        wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output_______: gi,
        wasm_bindgen_a358d65700bcadbc___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_a358d65700bcadbc___JsValue____Output___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___: di,
        wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined___js_sys_990bc7099cc48250___Function_fn_wasm_bindgen_a358d65700bcadbc___JsValue_____wasm_bindgen_a358d65700bcadbc___sys__Undefined_______true_: wi,
        wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true_: li,
        wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue______true__2: mi,
        wasm_bindgen_a358d65700bcadbc___convert__closures_____invoke___wasm_bindgen_a358d65700bcadbc___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_a358d65700bcadbc___JsError___true_: si,
        webglgameoflife_free: Uo,
        webglgameoflife_grid_pitch: Zo,
        webglgameoflife_new_offscreen: zo,
        webglgameoflife_render_only: qo,
        webglgameoflife_resize: Jo,
        webglgameoflife_set_camera: jo,
        webglgameoflife_set_init_fade: Qo,
        webglgameoflife_set_theme: No,
        webglgameoflife_set_transition: $o,
        webglgameoflife_tick_and_render: Ho,
        webglgameoflife_toggle_cell: Xo,
        webglgameoflife_world_cols: Yo,
        webglgameoflife_world_rows: Ko,
        wgpu_render_bundle_draw: ei,
        wgpu_render_bundle_draw_indexed: _i,
        wgpu_render_bundle_draw_indexed_indirect: ci,
        wgpu_render_bundle_draw_indirect: ni,
        wgpu_render_bundle_insert_debug_marker: fi,
        wgpu_render_bundle_pop_debug_group: oi,
        wgpu_render_bundle_push_debug_group: ui,
        wgpu_render_bundle_set_bind_group: ri,
        wgpu_render_bundle_set_index_buffer: ii,
        wgpu_render_bundle_set_pipeline: ti,
        wgpu_render_bundle_set_push_constants: bi,
        wgpu_render_bundle_set_vertex_buffer: ai
    });
    bo(Ii);
    Q();
})();
export { P as GpuGameOfLife, D as WebglGameOfLife, __tla };
