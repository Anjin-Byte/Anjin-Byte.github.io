(async ()=>{
    const X = ()=>{};
    function $(e) {
        const r = `[${e}]`;
        return {
            debug: X,
            info: X,
            warn: (...t)=>console.warn(r, ...t),
            error: (...t)=>console.error(r, ...t)
        };
    }
    const ce = !1, L = 175, re = {
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
    function ne(e) {
        return {
            surface: e.surface,
            ink: e.ink,
            minor_t: e.minor_t,
            major_t: e.major_t,
            ink_opacity: e.ink_opacity,
            grain_intensity: e.grain_intensity
        };
    }
    function V(e, r, t) {
        return [
            e[0] + (r[0] - e[0]) * t,
            e[1] + (r[1] - e[1]) * t,
            e[2] + (r[2] - e[2]) * t
        ];
    }
    function P([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const v = (e)=>e, k = (e)=>e, q = (e)=>e, le = 128;
    function de(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const i = n ?? Date.now(), a = [];
        for (const c of e){
            if (a.length >= t) break;
            const o = r(c, i);
            o && a.push(o);
        }
        return a;
    }
    const fe = new Set([
        "minor",
        "major",
        "both"
    ]), ue = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function z(e, r, t) {
        return Math.min(t, Math.max(r, e));
    }
    function C(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function me() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? q(crypto.randomUUID()) : q(`zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);
    }
    function he(e) {
        return typeof e == "string" && fe.has(e) ? e : "both";
    }
    function pe(e) {
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && ue.has(r.style) ? r.style : "none", n = z(C(r.widthCells) ?? 1, 1, 4), i = typeof r.opacity == "number" ? r.opacity : 1, a = z(i, 0, 1), c = {
            style: t,
            widthCells: n,
            opacity: a
        };
        if (t === "fade") {
            const o = typeof r.fadeStrength == "number" ? r.fadeStrength : .6;
            c.fadeStrength = z(o, 0, 1);
        }
        return t === "noted" && (c.notePitchCells = Math.max(1, C(r.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (c.hideInteriorBorder = typeof r.hideInteriorBorder == "boolean" ? r.hideInteriorBorder : !1), c;
    }
    function _e(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function H(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function oe(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = C(t.x1), i = C(t.y1), a = C(t.x2), c = C(t.y2);
        if (n === null || i === null || a === null || c === null) return null;
        const o = Math.min(n, a), l = Math.max(n, a), f = Math.min(i, c), d = Math.max(i, c);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : me(),
            x1: k(o),
            y1: k(f),
            x2: k(l),
            y2: k(d),
            mode: he(t.mode),
            edge: pe(t.edge),
            enabled: _e(t.enabled),
            createdAt: H(t.createdAt, r),
            updatedAt: H(t.updatedAt, r)
        };
    }
    function ye(e, r = Date.now()) {
        return de(e, oe, le, r);
    }
    class we {
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
            const n = this.items.filter((i)=>i.id !== t.id);
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
            const i = this.items.slice();
            return i[n] = t, this.items = this.normalizeAll(i), {};
        }
        remove(r) {
            return this.items = this.items.filter((t)=>t.id !== r), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class ge extends we {
        constructor(){
            super(oe, ye);
        }
    }
    class be {
        entries = new Map;
        register(r, t, n) {
            this.entries.set(r, {
                dispatch: (i, a)=>ke(t, i, a),
                apply: ()=>n(t.getAll()),
                snapshot: ()=>t.getAll()
            });
        }
        get(r) {
            return this.entries.get(r);
        }
        applyAll() {
            for (const r of this.entries.values())r.apply();
        }
    }
    function ke(e, r, t) {
        switch(r){
            case "set":
                e.setAll(t);
                return;
            case "add":
                return e.add(t).error;
            case "update":
                return e.update(t).error;
            case "remove":
                if (typeof t != "string") return "remove op requires a string id";
                e.remove(t);
                return;
            case "clear":
                e.clear();
                return;
            default:
                return `unknown feature op: ${String(r)}`;
        }
    }
    const m = 32, E = 5, x = 1024, Me = .04, S = .0035;
    function Re([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, i = e - .1055613458 * r - .0638541728 * t, a = e - .0894841775 * r - 1.291485548 * t, c = n ** 3, o = i ** 3, l = a ** 3;
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
    function Te(e) {
        const r = Re(e);
        return `rgb(${F(r[0] + S)} ${F(r[1] + S)} ${F(r[2] + S)})`;
    }
    function Ee(e, r) {
        const t = (e % x + x) % x, n = (r % x + x) % x;
        let i = t * 73856093 ^ n * 19349663;
        return i = Math.imul(i ^ i >>> 13, 1540483477), i ^= i >>> 15, (i >>> 0) / 4294967295 < Me;
    }
    function xe(e) {
        const r = e.getContext("2d");
        if (!r) throw new Error("2D context unavailable");
        const t = r;
        let n = re, i = 0, a = 0, c = 0, o = !0;
        function l() {
            if (!o) return;
            o = !1;
            const f = e.width, d = e.height;
            if (f === 0 || d === 0) return;
            t.fillStyle = Te(n.surface), t.fillRect(0, 0, f, d);
            const _ = Math.floor(i / m), U = Math.ceil((i + f) / m), j = Math.floor(a / m), Y = Math.ceil((a + d) / m), ie = P(V(n.surface, n.ink, n.minor_t)), se = P(V(n.surface, n.ink, n.major_t));
            for (const R of [
                !1,
                !0
            ]){
                t.strokeStyle = R ? se : ie, t.lineWidth = m * (R ? .12 : .04), t.globalAlpha = R ? .72 : .85, t.beginPath();
                for(let u = _; u <= U; u++){
                    if ((u % E + E) % E === 0 !== R) continue;
                    const y = u * m - i;
                    t.moveTo(y, 0), t.lineTo(y, d);
                }
                for(let u = j; u <= Y; u++){
                    if ((u % E + E) % E === 0 !== R) continue;
                    const y = u * m - a;
                    t.moveTo(0, y), t.lineTo(f, y);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const Z = n.ink_opacity * c;
            if (Z > .001) {
                t.fillStyle = P(n.ink), t.globalAlpha = Z;
                const R = m * .08;
                for(let u = j; u <= Y; u++)for(let y = _; y <= U; y++){
                    if (!Ee(y, u)) continue;
                    const B = y * m - i, W = u * m - a;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(B, W, m, m, R), t.fill()) : t.fillRect(B, W, m, m);
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
                f === i && d === a || (i = f, a = d, o = !0);
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
    function Ce(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    function Ae(e) {
        return e % L === 0 ? "base_tick" : "render_only";
    }
    const Ie = $("Renderer");
    function Pe(e, r) {
        const t = e, n = (o)=>{
            if (typeof t.set_zones == "function") try {
                t.set_zones(o);
            } catch (l) {
                r(`GPU zone update failed: ${M(l)}`);
            }
        }, i = (o)=>{
            if (typeof t.set_theme == "function") try {
                t.set_theme(ne(o));
            } catch (l) {
                Ie.error("GPU theme update failed:", M(l));
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
            setTheme: (o)=>i(o),
            gridInfo: ()=>({
                    worldCols: k(e.world_cols()),
                    worldRows: k(e.world_rows()),
                    paddedRows: e.padded_rows(),
                    wordsPerRow: e.words_per_row(),
                    gridPitch: v(e.grid_pitch())
                }),
            pullGpuPassDurations: ()=>{
                if (!e.timestamp_query_supported()) return null;
                const o = e.last_compute_tick_ms(), l = e.last_xor_edit_ms(), f = e.last_or_edit_ms(), d = e.last_render_pass_ms(), _ = {
                    computeTickMs: o ?? null,
                    xorEditMs: l ?? null,
                    orEditMs: f ?? null,
                    renderPassMs: d ?? null
                };
                return _.computeTickMs === null && _.xorEditMs === null && _.orEditMs === null && _.renderPassMs === null ? null : _;
            },
            pullTickBreakdown: ()=>({
                    reseedMs: e.last_reseed_ms(),
                    presentMs: e.last_present_ms()
                }),
            free: ()=>e.free()
        };
    }
    const ze = $("Renderer");
    function Se(e) {
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
                    e.set_theme(ne(r));
                } catch (t) {
                    ze.error("WebGL2 theme update failed:", M(t));
                }
            },
            free: ()=>e.free()
        };
    }
    const Fe = 1e3 / 60, Oe = 2;
    function Ge(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Fe - Oe;
    }
    const p = $("Renderer"), ae = self;
    let s = null, b = null, w = 0, g = 0, A = null, O = 0, G = 0, K = Number.NaN, J = Number.NaN;
    const Ne = 300;
    let Q = 0;
    const De = new ge;
    let T = re, ee = !1;
    const Le = 1e3;
    let N = 0, D = 0;
    function h(e) {
        ae.postMessage(e);
    }
    const I = new be;
    I.register("blankZones", De, (e)=>s?.setZones?.(e));
    const $e = {
        worldCols: k(0),
        worldRows: k(0),
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: v(0)
    };
    function ve() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function te() {
        if (!b) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), r = Math.floor(Math.random() * 4294967296), t = await e.new_offscreen(b, r);
            return s = Se(t), s.setCamera?.(w, g), s.setTheme?.(T), p.info("WebGL2 fallback renderer ready"), h({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: k(t.world_cols()),
                    worldRows: k(t.world_rows()),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: v(t.grid_pitch())
                }
            }), !0;
        } catch (e) {
            return p.error("WebGL2 init failed:", M(e)), h({
                type: "error",
                phase: "gpu-init",
                message: M(e)
            }), !1;
        }
    }
    function Ue(e) {
        return typeof e == "object" && e !== null && typeof e.type == "string";
    }
    ae.onmessage = async (e)=>{
        if (!Ue(e.data)) {
            p.warn("worker: ignored malformed inbound message", e.data);
            return;
        }
        switch(e.data.type){
            case "init":
                {
                    b = e.data.canvas, T = e.data.theme, p.debug("Init received — canvas", b.width, "x", b.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await te();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, p.debug("GPU: probe passed — adapter found");
                    } catch (a) {
                        p.info("GPU: probe failed, will use CPU renderer:", M(a)), h({
                            type: "error",
                            phase: "gpu-probe",
                            message: M(a)
                        });
                    }
                    const i = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: a } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), c = performance.now();
                        p.debug("GPU: module loaded, initialising surface...");
                        const o = Math.floor(Math.random() * 4294967296), l = await a.new_offscreen(b, 0, o), f = performance.now(), d = Pe(l, (_)=>h({
                                type: "feature_error",
                                feature: "blankZones",
                                message: _
                            }));
                        s = d, A && (s.resize(A.width, A.height), A = null), s.setCamera?.(w, g), s.setTransition?.(1), I.applyAll(), s.setTheme?.(T), p.info("GPU renderer ready"), h({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: d.gridInfo()
                        });
                        break;
                    } catch (a) {
                        const c = M(a);
                        p.error("GPU init failed after probe passed (canvas may be locked):", c), h({
                            type: "error",
                            phase: "gpu-init",
                            message: c
                        });
                        break;
                    }
                    if (t !== "static" && ve() && await te()) break;
                    try {
                        s = xe(b), s.setCamera?.(w, g), s.setTheme?.(T), p.info("Static fallback renderer ready"), h({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: $e
                        });
                    } catch (a) {
                        const c = M(a);
                        p.error("Static fallback init failed:", c), h({
                            type: "error",
                            phase: "cpu-init",
                            message: c
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!s) break;
                    const r = s;
                    w = e.data.cameraX, g = e.data.cameraY, s.setCamera?.(w, g);
                    const t = performance.now();
                    if (!Ge(t, w, g, {
                        lastRenderTime: G,
                        lastCameraX: K,
                        lastCameraY: J,
                        forceRenderUntil: Q
                    })) break;
                    if (G = t, K = w, J = g, O++, D < 1) {
                        const a = performance.now();
                        N === 0 && (N = a), D = Math.min(1, (a - N) / Le), s.setInitFade?.(D);
                    }
                    switch(Ae(O)){
                        case "base_tick":
                            s.setTransition?.(0), r.tick();
                            break;
                        case "render_only":
                            if (s.setTransition?.(Ce(O % L / L)), r.renderOnly) {
                                const a = r.renderOnly;
                                a();
                            }
                            break;
                    }
                    ee || (ee = !0, h({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (p.debug("Resize →", e.data.width, "x", e.data.height), !b) break;
                    if (b.width = e.data.width, b.height = e.data.height, !s) {
                        A = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    s.resize(e.data.width, e.data.height), s.setCamera?.(w, g), s.setTransition?.(1), I.applyAll(), s.setTheme?.(T), s.gridInfo && h({
                        type: "grid_info",
                        gridInfo: s.gridInfo()
                    });
                    break;
                }
            case "camera":
                w = e.data.x, g = e.data.y, s?.setCamera?.(w, g);
                break;
            case "toggle_cell":
                s?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "feature":
                {
                    const r = I.get(e.data.feature);
                    if (!r) {
                        h({
                            type: "feature_error",
                            feature: e.data.feature,
                            message: `unknown feature: ${e.data.feature}`
                        });
                        break;
                    }
                    const t = r.dispatch(e.data.op, e.data.payload);
                    if (t) {
                        h({
                            type: "feature_error",
                            feature: e.data.feature,
                            message: t
                        });
                        break;
                    }
                    r.apply(), h({
                        type: "feature_state",
                        feature: e.data.feature,
                        items: r.snapshot()
                    });
                    break;
                }
            case "set_theme":
                T = e.data.theme, s?.setTheme?.(T), Q = performance.now() + Ne, G = 0;
                break;
        }
    };
})();
