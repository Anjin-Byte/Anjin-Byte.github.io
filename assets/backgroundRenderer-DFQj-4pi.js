(async ()=>{
    const q = ()=>{};
    function j(e) {
        const r = `[${e}]`;
        return {
            debug: q,
            info: q,
            warn: (...t)=>console.warn(r, ...t),
            error: (...t)=>console.error(r, ...t)
        };
    }
    const fe = !1, Z = 175, ae = {
        surface: [
            .985,
            -.001,
            .004
        ],
        ink: [
            .28,
            .001,
            .005
        ],
        minor_t: .08,
        major_t: .14,
        border_t: .24,
        ink_opacity: .1,
        grain_intensity: 0,
        ink_secondary_t: .78,
        ink_tertiary_t: .54,
        accent: [
            .88,
            .08,
            15
        ],
        accent_chroma_scale: 1
    };
    function se(e) {
        return {
            surface: e.surface,
            ink: e.ink,
            minor_t: e.minor_t,
            major_t: e.major_t,
            ink_opacity: e.ink_opacity,
            grain_intensity: e.grain_intensity
        };
    }
    function K(e, r, t) {
        return [
            e[0] + (r[0] - e[0]) * t,
            e[1] + (r[1] - e[1]) * t,
            e[2] + (r[2] - e[2]) * t
        ];
    }
    function S([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const Y = (e)=>e, g = (e)=>e, J = (e)=>e, ue = 128;
    function me(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const s = n ?? Date.now(), a = [];
        for (const c of e){
            if (a.length >= t) break;
            const o = r(c, s);
            o && a.push(o);
        }
        return a;
    }
    const he = new Set([
        "minor",
        "major",
        "both"
    ]), pe = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function G(e, r, t) {
        return Math.min(t, Math.max(r, e));
    }
    function A(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function _e() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? J(crypto.randomUUID()) : J(`zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);
    }
    function ye(e) {
        return typeof e == "string" && he.has(e) ? e : "both";
    }
    function be(e) {
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && pe.has(r.style) ? r.style : "none", n = G(A(r.widthCells) ?? 1, 1, 4), s = typeof r.opacity == "number" ? r.opacity : 1, a = G(s, 0, 1), c = {
            style: t,
            widthCells: n,
            opacity: a
        };
        if (t === "fade") {
            const o = typeof r.fadeStrength == "number" ? r.fadeStrength : .6;
            c.fadeStrength = G(o, 0, 1);
        }
        return t === "noted" && (c.notePitchCells = Math.max(1, A(r.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (c.hideInteriorBorder = typeof r.hideInteriorBorder == "boolean" ? r.hideInteriorBorder : !1), c;
    }
    function we(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function Q(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function ie(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = A(t.x1), s = A(t.y1), a = A(t.x2), c = A(t.y2);
        if (n === null || s === null || a === null || c === null) return null;
        const o = Math.min(n, a), l = Math.max(n, a), f = Math.min(s, c), d = Math.max(s, c);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : _e(),
            x1: g(o),
            y1: g(f),
            x2: g(l),
            y2: g(d),
            mode: ye(t.mode),
            edge: be(t.edge),
            enabled: we(t.enabled),
            createdAt: Q(t.createdAt, r),
            updatedAt: Q(t.updatedAt, r)
        };
    }
    function ge(e, r = Date.now()) {
        return me(e, ie, ue, r);
    }
    class ke {
        constructor(r, t){
            this.normalizeOne = r, this.normalizeAll = t;
        }
        items = [];
        getAll() {
            return this.items;
        }
        setAll(r) {
            return this.items = this.normalizeAll(r), this.items;
        }
        add(r) {
            const t = this.normalizeOne(r);
            if (!t) return {
                error: "Invalid payload"
            };
            const n = this.items.filter((s)=>s.id !== t.id);
            return this.items = this.normalizeAll([
                ...n,
                t
            ]), {};
        }
        update(r) {
            const t = this.normalizeOne(r);
            if (!t) return {
                error: "Invalid payload"
            };
            const n = this.items.findIndex((a)=>a.id === t.id);
            if (n < 0) return {
                error: `Item ${t.id} not found`
            };
            const s = this.items.slice();
            return s[n] = t, this.items = this.normalizeAll(s), {};
        }
        remove(r) {
            return this.items = this.items.filter((t)=>t.id !== r), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class Me extends ke {
        constructor(){
            super(ie, ge);
        }
    }
    const m = 32, C = 5, x = 1024, Re = .04, O = .0035;
    function Te([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, s = e - .1055613458 * r - .0638541728 * t, a = e - .0894841775 * r - 1.291485548 * t, c = n ** 3, o = s ** 3, l = a ** 3;
        return [
            4.0767416621 * c - 3.3077115913 * o + .2309699292 * l,
            -1.2684380046 * c + 2.6097574011 * o - .3413193965 * l,
            -.0041960863 * c - .7034186147 * o + 1.707614701 * l
        ];
    }
    function F(e) {
        const r = Math.min(1, Math.max(0, e)), t = r <= .0031308 ? r * 12.92 : 1.055 * r ** (1 / 2.4) - .055;
        return Math.round(t * 255);
    }
    function Ee(e) {
        const r = Te(e);
        return `rgb(${F(r[0] + O)} ${F(r[1] + O)} ${F(r[2] + O)})`;
    }
    function Ce(e, r) {
        const t = (e % x + x) % x, n = (r % x + x) % x;
        let s = t * 73856093 ^ n * 19349663;
        return s = Math.imul(s ^ s >>> 13, 1540483477), s ^= s >>> 15, (s >>> 0) / 4294967295 < Re;
    }
    function xe(e) {
        const r = e.getContext("2d");
        if (!r) throw new Error("2D context unavailable");
        const t = r;
        let n = ae, s = 0, a = 0, c = 0, o = !0;
        function l() {
            if (!o) return;
            o = !1;
            const f = e.width, d = e.height;
            if (f === 0 || d === 0) return;
            t.fillStyle = Ee(n.surface), t.fillRect(0, 0, f, d);
            const R = Math.floor(s / m), v = Math.ceil((s + f) / m), B = Math.floor(a / m), W = Math.ceil((a + d) / m), le = S(K(n.surface, n.ink, n.minor_t)), de = S(K(n.surface, n.ink, n.major_t));
            for (const T of [
                !1,
                !0
            ]){
                t.strokeStyle = T ? de : le, t.lineWidth = m * (T ? .12 : .04), t.globalAlpha = T ? .72 : .85, t.beginPath();
                for(let u = R; u <= v; u++){
                    if ((u % C + C) % C === 0 !== T) continue;
                    const _ = u * m - s;
                    t.moveTo(_, 0), t.lineTo(_, d);
                }
                for(let u = B; u <= W; u++){
                    if ((u % C + C) % C === 0 !== T) continue;
                    const _ = u * m - a;
                    t.moveTo(0, _), t.lineTo(f, _);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const X = n.ink_opacity * c;
            if (X > .001) {
                t.fillStyle = S(n.ink), t.globalAlpha = X;
                const T = m * .08;
                for(let u = B; u <= W; u++)for(let _ = R; _ <= v; _++){
                    if (!Ce(_, u)) continue;
                    const V = _ * m - s, H = u * m - a;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(V, H, m, m, T), t.fill()) : t.fillRect(V, H, m, m);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: l,
            renderOnly: l,
            resize (f, d) {
                o = !0, l();
            },
            setCamera (f, d) {
                f === s && d === a || (s = f, a = d, o = !0);
            },
            setInitFade (f) {
                const d = Math.min(1, Math.max(0, f));
                d !== c && (c = d, o = !0);
            },
            setTheme (f) {
                n = f, o = !0, l();
            },
            free () {}
        };
    }
    function M(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function Ae(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    function Ie(e) {
        return e % Z === 0 ? "base_tick" : "render_only";
    }
    const ze = j("Renderer");
    function Pe(e, r) {
        const t = e, n = (o)=>{
            if (typeof t.set_zones == "function") try {
                t.set_zones(o);
            } catch (l) {
                r(`GPU zone update failed: ${M(l)}`);
            }
        }, s = (o)=>{
            if (typeof t.set_theme == "function") try {
                t.set_theme(se(o));
            } catch (l) {
                ze.error("GPU theme update failed:", M(l));
            }
        };
        return {
            tick: ()=>e.tick_and_render(),
            renderOnly: ()=>e.render_only(),
            resize: (o, l)=>e.resize(o, l),
            setCamera: (o, l)=>e.set_camera(o, l),
            setTransition: (o)=>e.set_transition(o),
            setInitFade: (o)=>e.set_init_fade(o),
            toggleCell: (o, l)=>{
                e.toggle_cell(o, l), e.flush_and_render();
            },
            setZones: (o)=>n(o),
            setTheme: (o)=>s(o),
            gridInfo: ()=>({
                    worldCols: g(e.world_cols()),
                    worldRows: g(e.world_rows()),
                    paddedRows: e.padded_rows(),
                    wordsPerRow: e.words_per_row(),
                    gridPitch: Y(e.grid_pitch())
                }),
            pullGpuPassDurations: ()=>{
                if (!e.timestamp_query_supported()) return null;
                const o = e.last_compute_tick_ms(), l = e.last_xor_edit_ms(), f = e.last_or_edit_ms(), d = e.last_render_pass_ms(), R = {
                    computeTickMs: o ?? null,
                    xorEditMs: l ?? null,
                    orEditMs: f ?? null,
                    renderPassMs: d ?? null
                };
                return R.computeTickMs === null && R.xorEditMs === null && R.orEditMs === null && R.renderPassMs === null ? null : R;
            },
            pullTickBreakdown: ()=>({
                    reseedMs: e.last_reseed_ms(),
                    presentMs: e.last_present_ms()
                }),
            free: ()=>e.free()
        };
    }
    const Se = j("Renderer");
    function Ge(e) {
        return {
            tick: ()=>e.tick_and_render(),
            renderOnly: ()=>e.render_only(),
            resize: (r, t)=>e.resize(r, t),
            setCamera: (r, t)=>e.set_camera(r, t),
            setTransition: (r)=>e.set_transition(r),
            setInitFade: (r)=>e.set_init_fade(r),
            toggleCell: (r, t)=>e.toggle_cell(r, t),
            setTheme: (r)=>{
                try {
                    e.set_theme(se(r));
                } catch (t) {
                    Se.error("WebGL2 theme update failed:", M(t));
                }
            },
            free: ()=>e.free()
        };
    }
    const Oe = 1e3 / 60, Fe = 2;
    function Ne(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Oe - Fe;
    }
    const h = j("Renderer"), ce = self;
    let i = null, w = null, y = 0, b = 0, I = null, N = 0, D = 0, ee = Number.NaN, te = Number.NaN;
    const De = 300;
    let re = 0;
    const k = new Me;
    let E = ae, ne = !1;
    const Le = 1e3;
    let L = 0, U = 0;
    function p(e) {
        ce.postMessage(e);
    }
    function z() {
        p({
            type: "zones_state",
            zones: k.getAll()
        });
    }
    function $(e) {
        p({
            type: "zones_error",
            message: e
        });
    }
    function P() {
        i?.setZones?.(k.getAll());
    }
    function Ue(e) {
        k.setAll(e), P(), z();
    }
    const $e = {
        worldCols: g(0),
        worldRows: g(0),
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: Y(0)
    };
    function Ze() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function oe() {
        if (!w) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), r = Math.floor(Math.random() * 4294967296), t = await e.new_offscreen(w, r);
            return i = Ge(t), i.setCamera?.(y, b), i.setTheme?.(E), h.info("WebGL2 fallback renderer ready"), p({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: g(t.world_cols()),
                    worldRows: g(t.world_rows()),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: Y(t.grid_pitch())
                }
            }), !0;
        } catch (e) {
            return h.error("WebGL2 init failed:", M(e)), p({
                type: "error",
                phase: "gpu-init",
                message: M(e)
            }), !1;
        }
    }
    function je(e) {
        return typeof e == "object" && e !== null && typeof e.type == "string";
    }
    ce.onmessage = async (e)=>{
        if (!je(e.data)) {
            h.warn("worker: ignored malformed inbound message", e.data);
            return;
        }
        switch(e.data.type){
            case "init":
                {
                    w = e.data.canvas, E = e.data.theme, h.debug("Init received — canvas", w.width, "x", w.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await oe();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (a) {
                        h.info("GPU: probe failed, will use CPU renderer:", M(a)), p({
                            type: "error",
                            phase: "gpu-probe",
                            message: M(a)
                        });
                    }
                    const s = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: a } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), c = performance.now();
                        h.debug("GPU: module loaded, initialising surface...");
                        const o = Math.floor(Math.random() * 4294967296), l = await a.new_offscreen(w, 0, o), f = performance.now(), d = Pe(l, $);
                        i = d, I && (i.resize(I.width, I.height), I = null), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(k.getAll()), i.setTheme?.(E), h.info("GPU renderer ready"), p({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: d.gridInfo()
                        });
                        break;
                    } catch (a) {
                        const c = M(a);
                        h.error("GPU init failed after probe passed (canvas may be locked):", c), p({
                            type: "error",
                            phase: "gpu-init",
                            message: c
                        });
                        break;
                    }
                    if (t !== "static" && Ze() && await oe()) break;
                    try {
                        i = xe(w), i.setCamera?.(y, b), i.setTheme?.(E), h.info("Static fallback renderer ready"), p({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: $e
                        });
                    } catch (a) {
                        const c = M(a);
                        h.error("Static fallback init failed:", c), p({
                            type: "error",
                            phase: "cpu-init",
                            message: c
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!i) break;
                    const r = i;
                    y = e.data.cameraX, b = e.data.cameraY, i.setCamera?.(y, b);
                    const t = performance.now();
                    if (!Ne(t, y, b, {
                        lastRenderTime: D,
                        lastCameraX: ee,
                        lastCameraY: te,
                        forceRenderUntil: re
                    })) break;
                    if (D = t, ee = y, te = b, N++, U < 1) {
                        const a = performance.now();
                        L === 0 && (L = a), U = Math.min(1, (a - L) / Le), i.setInitFade?.(U);
                    }
                    switch(Ie(N)){
                        case "base_tick":
                            i.setTransition?.(0), r.tick();
                            break;
                        case "render_only":
                            if (i.setTransition?.(Ae(N % Z / Z)), r.renderOnly) {
                                const a = r.renderOnly;
                                a();
                            }
                            break;
                    }
                    ne || (ne = !0, p({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (h.debug("Resize →", e.data.width, "x", e.data.height), !w) break;
                    if (w.width = e.data.width, w.height = e.data.height, !i) {
                        I = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(k.getAll()), i.setTheme?.(E), i.gridInfo && p({
                        type: "grid_info",
                        gridInfo: i.gridInfo()
                    });
                    break;
                }
            case "camera":
                y = e.data.x, b = e.data.y, i?.setCamera?.(y, b);
                break;
            case "toggle_cell":
                i?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                Ue(e.data.zones);
                break;
            case "add_zone":
                {
                    const r = k.add(e.data.zone);
                    if (r.error) {
                        $(r.error);
                        break;
                    }
                    P(), z();
                    break;
                }
            case "update_zone":
                {
                    const r = k.update(e.data.zone);
                    if (r.error) {
                        $(r.error);
                        break;
                    }
                    P(), z();
                    break;
                }
            case "remove_zone":
                k.remove(e.data.id), P(), z();
                break;
            case "clear_zones":
                k.clear(), P(), z();
                break;
            case "set_theme":
                E = e.data.theme, i?.setTheme?.(E), re = performance.now() + De, D = 0;
                break;
        }
    };
})();
