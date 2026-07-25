(async ()=>{
    const V = ()=>{};
    function v(e) {
        const r = `[${e}]`;
        return {
            debug: V,
            info: V,
            warn: (...t)=>console.warn(r, ...t),
            error: (...t)=>console.error(r, ...t)
        };
    }
    const le = !1, $ = 175, ne = {
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
    function oe(e) {
        return {
            surface: e.surface,
            ink: e.ink,
            minor_t: e.minor_t,
            major_t: e.major_t,
            ink_opacity: e.ink_opacity,
            grain_intensity: e.grain_intensity
        };
    }
    function H(e, r, t) {
        return [
            e[0] + (r[0] - e[0]) * t,
            e[1] + (r[1] - e[1]) * t,
            e[2] + (r[2] - e[2]) * t
        ];
    }
    function S([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const U = (e)=>e, k = (e)=>e, q = (e)=>e, de = 128;
    function fe(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const s = n ?? Date.now(), o = [];
        for (const c of e){
            if (o.length >= t) break;
            const a = r(c, s);
            a && o.push(a);
        }
        return o;
    }
    const ue = new Set([
        "minor",
        "major",
        "both"
    ]), me = new Set([
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
    function he() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? q(crypto.randomUUID()) : q(`zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);
    }
    function pe(e) {
        return typeof e == "string" && ue.has(e) ? e : "both";
    }
    function _e(e) {
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && me.has(r.style) ? r.style : "none", n = z(C(r.widthCells) ?? 1, 1, 4), s = typeof r.opacity == "number" ? r.opacity : 1, o = z(s, 0, 1), c = {
            style: t,
            widthCells: n,
            opacity: o
        };
        if (t === "fade") {
            const a = typeof r.fadeStrength == "number" ? r.fadeStrength : .6;
            c.fadeStrength = z(a, 0, 1);
        }
        return t === "noted" && (c.notePitchCells = Math.max(1, C(r.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (c.hideInteriorBorder = typeof r.hideInteriorBorder == "boolean" ? r.hideInteriorBorder : !1), c;
    }
    function ye(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function K(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function ae(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = C(t.x1), s = C(t.y1), o = C(t.x2), c = C(t.y2);
        if (n === null || s === null || o === null || c === null) return null;
        const a = Math.min(n, o), l = Math.max(n, o), f = Math.min(s, c), d = Math.max(s, c);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : he(),
            x1: k(a),
            y1: k(f),
            x2: k(l),
            y2: k(d),
            mode: pe(t.mode),
            edge: _e(t.edge),
            enabled: ye(t.enabled),
            createdAt: K(t.createdAt, r),
            updatedAt: K(t.updatedAt, r)
        };
    }
    function we(e, r = Date.now()) {
        return fe(e, ae, de, r);
    }
    class ge {
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
            const n = this.items.findIndex((o)=>o.id === t.id);
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
    class be extends ge {
        constructor(){
            super(ae, we);
        }
    }
    class ke {
        entries = new Map;
        register(r, t, n) {
            this.entries.set(r, {
                dispatch: (s, o)=>Re(t, s, o),
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
    function Re(e, r, t) {
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
    const m = 32, T = 5, A = 1024, Me = .04, F = .0035;
    function Ee([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, s = e - .1055613458 * r - .0638541728 * t, o = e - .0894841775 * r - 1.291485548 * t, c = n ** 3, a = s ** 3, l = o ** 3;
        return [
            4.0767416621 * c - 3.3077115913 * a + .2309699292 * l,
            -1.2684380046 * c + 2.6097574011 * a - .3413193965 * l,
            -.0041960863 * c - .7034186147 * a + 1.707614701 * l
        ];
    }
    function O(e) {
        const r = Math.min(1, Math.max(0, e)), t = r <= .0031308 ? r * 12.92 : 1.055 * r ** (1 / 2.4) - .055;
        return Math.round(t * 255);
    }
    function Te(e) {
        const r = Ee(e);
        return `rgb(${O(r[0] + F)} ${O(r[1] + F)} ${O(r[2] + F)})`;
    }
    function Ae(e, r) {
        const t = (e % A + A) % A, n = (r % A + A) % A;
        let s = t * 73856093 ^ n * 19349663;
        return s = Math.imul(s ^ s >>> 13, 1540483477), s ^= s >>> 15, (s >>> 0) / 4294967295 < Me;
    }
    function Ce(e) {
        const r = e.getContext("2d");
        if (!r) throw new Error("2D context unavailable");
        const t = r;
        let n = ne, s = 0, o = 0, c = 0, a = !0;
        function l() {
            if (!a) return;
            a = !1;
            const f = e.width, d = e.height;
            if (f === 0 || d === 0) return;
            t.fillStyle = Te(n.surface), t.fillRect(0, 0, f, d);
            const _ = Math.floor(s / m), j = Math.ceil((s + f) / m), Y = Math.floor(o / m), Z = Math.ceil((o + d) / m), ie = S(H(n.surface, n.ink, n.minor_t)), ce = S(H(n.surface, n.ink, n.major_t));
            for (const M of [
                !1,
                !0
            ]){
                t.strokeStyle = M ? ce : ie, t.lineWidth = m * (M ? .12 : .04), t.globalAlpha = M ? .72 : .85, t.beginPath();
                for(let u = _; u <= j; u++){
                    if ((u % T + T) % T === 0 !== M) continue;
                    const y = u * m - s;
                    t.moveTo(y, 0), t.lineTo(y, d);
                }
                for(let u = Y; u <= Z; u++){
                    if ((u % T + T) % T === 0 !== M) continue;
                    const y = u * m - o;
                    t.moveTo(0, y), t.lineTo(f, y);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const B = n.ink_opacity * c;
            if (B > .001) {
                t.fillStyle = S(n.ink), t.globalAlpha = B;
                const M = m * .08;
                for(let u = Y; u <= Z; u++)for(let y = _; y <= j; y++){
                    if (!Ae(y, u)) continue;
                    const W = y * m - s, X = u * m - o;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(W, X, m, m, M), t.fill()) : t.fillRect(W, X, m, m);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: l,
            renderOnly: l,
            resize (f, d) {
                a = !0, l();
            },
            setCamera (f, d) {
                f === s && d === o || (s = f, o = d, a = !0);
            },
            setInitFade (f) {
                const d = Math.min(1, Math.max(0, f));
                d !== c && (c = d, a = !0);
            },
            setTheme (f) {
                n = f, a = !0, l();
            },
            free () {}
        };
    }
    function R(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function xe(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    function Ie(e) {
        return e % $ === 0 ? "base_tick" : "render_only";
    }
    const Pe = v("Renderer");
    function Se(e, r) {
        const t = e, n = (a)=>{
            if (typeof t.set_zones == "function") try {
                t.set_zones(a);
            } catch (l) {
                r(`GPU zone update failed: ${R(l)}`);
            }
        }, s = (a)=>{
            if (typeof t.set_theme == "function") try {
                t.set_theme(oe(a));
            } catch (l) {
                Pe.error("GPU theme update failed:", R(l));
            }
        };
        return {
            tick: ()=>e.tick_and_render(),
            renderOnly: ()=>e.render_only(),
            resize: (a, l)=>e.resize(a, l),
            setCamera: (a, l)=>e.set_camera(a, l),
            setTransition: (a)=>e.set_transition(a),
            setInitFade: (a)=>e.set_init_fade(a),
            toggleCell: (a, l)=>{
                e.toggle_cell(a, l), e.flush_and_render();
            },
            setZones: (a)=>n(a),
            setTheme: (a)=>s(a),
            gridInfo: ()=>({
                    worldCols: k(e.world_cols()),
                    worldRows: k(e.world_rows()),
                    paddedRows: e.padded_rows(),
                    wordsPerRow: e.words_per_row(),
                    gridPitch: U(e.grid_pitch())
                }),
            pullGpuPassDurations: ()=>{
                if (!e.timestamp_query_supported()) return null;
                const a = e.last_compute_tick_ms(), l = e.last_xor_edit_ms(), f = e.last_or_edit_ms(), d = e.last_render_pass_ms(), _ = {
                    computeTickMs: a ?? null,
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
    const ze = v("Renderer");
    function Fe(e) {
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
                    e.set_theme(oe(r));
                } catch (t) {
                    ze.error("WebGL2 theme update failed:", R(t));
                }
            },
            free: ()=>e.free()
        };
    }
    const Oe = 1e3 / 60, Ge = 2;
    function Ne(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY ? e - n.lastRenderTime >= n.sustainedRenderMs : e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Oe - Ge;
    }
    const h = v("Renderer"), se = self;
    let i = null, b = null, w = 0, g = 0, x = null, G = 0, N = 0, J = Number.NaN, Q = Number.NaN;
    const De = 300;
    let ee = 0;
    const Le = .1;
    let I = 0;
    function $e(e) {
        I = I === 0 ? e : I + Le * (e - I);
    }
    const ve = new be;
    let E = ne, te = !1;
    const Ue = 1e3;
    let D = 0, L = 0;
    function p(e) {
        se.postMessage(e);
    }
    const P = new ke;
    P.register("blankZones", ve, (e)=>i?.setZones?.(e));
    const je = {
        worldCols: k(0),
        worldRows: k(0),
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: U(0)
    };
    function Ye() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function re() {
        if (!b) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-CfGf4grU.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), r = Math.floor(Math.random() * 4294967296), t = await e.new_offscreen(b, r);
            return i = Fe(t), i.setCamera?.(w, g), i.setTheme?.(E), h.info("WebGL2 fallback renderer ready"), p({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: k(t.world_cols()),
                    worldRows: k(t.world_rows()),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: U(t.grid_pitch())
                }
            }), !0;
        } catch (e) {
            return h.error("WebGL2 init failed:", R(e)), p({
                type: "error",
                phase: "gpu-init",
                message: R(e)
            }), !1;
        }
    }
    function Ze(e) {
        return typeof e == "object" && e !== null && typeof e.type == "string";
    }
    se.onmessage = async (e)=>{
        if (!Ze(e.data)) {
            h.warn("worker: ignored malformed inbound message", e.data);
            return;
        }
        switch(e.data.type){
            case "init":
                {
                    b = e.data.canvas, E = e.data.theme, h.debug("Init received — canvas", b.width, "x", b.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await re();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        h.info("GPU: probe failed, will use CPU renderer:", R(o)), p({
                            type: "error",
                            phase: "gpu-probe",
                            message: R(o)
                        });
                    }
                    const s = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-CfGf4grU.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), c = performance.now();
                        h.debug("GPU: module loaded, initialising surface...");
                        const a = Math.floor(Math.random() * 4294967296), l = await o.new_offscreen(b, 0, a), f = performance.now(), d = Se(l, (_)=>p({
                                type: "feature_error",
                                feature: "blankZones",
                                message: _
                            }));
                        i = d, x && (i.resize(x.width, x.height), x = null), i.setCamera?.(w, g), i.setTransition?.(1), P.applyAll(), i.setTheme?.(E), h.info("GPU renderer ready"), p({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: d.gridInfo()
                        });
                        break;
                    } catch (o) {
                        const c = R(o);
                        h.error("GPU init failed after probe passed (canvas may be locked):", c), p({
                            type: "error",
                            phase: "gpu-init",
                            message: c
                        });
                        break;
                    }
                    if (t !== "static" && Ye() && await re()) break;
                    try {
                        i = Ce(b), i.setCamera?.(w, g), i.setTheme?.(E), h.info("Static fallback renderer ready"), p({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: je
                        });
                    } catch (o) {
                        const c = R(o);
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
                    w = e.data.cameraX, g = e.data.cameraY, i.setCamera?.(w, g);
                    const t = performance.now();
                    if (!Ne(t, w, g, {
                        lastRenderTime: N,
                        lastCameraX: J,
                        lastCameraY: Q,
                        forceRenderUntil: ee,
                        sustainedRenderMs: I
                    })) break;
                    if (N = t, J = w, Q = g, G++, L < 1) {
                        const o = performance.now();
                        D === 0 && (D = o), L = Math.min(1, (o - D) / Ue), i.setInitFade?.(L);
                    }
                    const s = Ie(G);
                    switch(s){
                        case "base_tick":
                            i.setTransition?.(0), r.tick();
                            break;
                        case "render_only":
                            if (i.setTransition?.(xe(G % $ / $)), r.renderOnly) {
                                const o = r.renderOnly;
                                o();
                            }
                            break;
                        default:
                            {
                                const o = s;
                                h.warn("worker: unhandled frame action", o);
                                break;
                            }
                    }
                    $e(performance.now() - t), te || (te = !0, p({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (h.debug("Resize →", e.data.width, "x", e.data.height), !b) break;
                    if (b.width = e.data.width, b.height = e.data.height, !i) {
                        x = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setCamera?.(w, g), i.setTransition?.(1), P.applyAll(), i.setTheme?.(E), i.gridInfo && p({
                        type: "grid_info",
                        gridInfo: i.gridInfo()
                    });
                    break;
                }
            case "camera":
                w = e.data.x, g = e.data.y, i?.setCamera?.(w, g);
                break;
            case "toggle_cell":
                i?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "feature":
                {
                    const r = P.get(e.data.feature);
                    if (!r) {
                        p({
                            type: "feature_error",
                            feature: e.data.feature,
                            message: `unknown feature: ${e.data.feature}`
                        });
                        break;
                    }
                    const t = r.dispatch(e.data.op, e.data.payload);
                    if (t) {
                        p({
                            type: "feature_error",
                            feature: e.data.feature,
                            message: t
                        });
                        break;
                    }
                    r.apply(), p({
                        type: "feature_state",
                        feature: e.data.feature,
                        items: r.snapshot()
                    });
                    break;
                }
            case "set_theme":
                E = e.data.theme, i?.setTheme?.(E), ee = performance.now() + De, N = 0;
                break;
            case "perf_snapshot":
                break;
            default:
                {
                    const r = e.data;
                    h.warn("worker: ignored unhandled message type", r.type);
                    break;
                }
        }
    };
})();
