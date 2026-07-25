(async ()=>{
    const H = ()=>{};
    function le(e) {
        const r = `[${e}]`;
        return {
            debug: H,
            info: H,
            warn: (...t)=>console.warn(r, ...t),
            error: (...t)=>console.error(r, ...t)
        };
    }
    const q = !1, B = 175, oe = {
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
    function ae(e) {
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
    function N([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const ce = 128;
    function de(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const o = n ?? Date.now(), a = [];
        for (const l of e){
            if (a.length >= t) break;
            const d = r(l, o);
            d && a.push(d);
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
    function D(e, r, t) {
        return Math.min(t, Math.max(r, e));
    }
    function x(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function me() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function pe(e) {
        return typeof e == "string" && fe.has(e) ? e : "both";
    }
    function he(e) {
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && ue.has(r.style) ? r.style : "none", n = D(x(r.widthCells) ?? 1, 1, 4), o = typeof r.opacity == "number" ? r.opacity : 1, a = D(o, 0, 1), l = {
            style: t,
            widthCells: n,
            opacity: a
        };
        if (t === "fade") {
            const d = typeof r.fadeStrength == "number" ? r.fadeStrength : .6;
            l.fadeStrength = D(d, 0, 1);
        }
        return t === "noted" && (l.notePitchCells = Math.max(1, x(r.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (l.hideInteriorBorder = typeof r.hideInteriorBorder == "boolean" ? r.hideInteriorBorder : !1), l;
    }
    function _e(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function J(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function ie(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = x(t.x1), o = x(t.y1), a = x(t.x2), l = x(t.y2);
        if (n === null || o === null || a === null || l === null) return null;
        const d = Math.min(n, a), i = Math.max(n, a), p = Math.min(o, l), f = Math.max(o, l);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : me(),
            x1: d,
            y1: p,
            x2: i,
            y2: f,
            mode: pe(t.mode),
            edge: he(t.edge),
            enabled: _e(t.enabled),
            createdAt: J(t.createdAt, r),
            updatedAt: J(t.updatedAt, r)
        };
    }
    function ge(e, r = Date.now()) {
        return de(e, ie, ce, r);
    }
    class ye {
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
            const n = this.items.filter((o)=>o.id !== t.id);
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
            const o = this.items.slice();
            return o[n] = t, this.items = this.normalizeAll(o), {};
        }
        remove(r) {
            return this.items = this.items.filter((t)=>t.id !== r), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class be extends ye {
        constructor(){
            super(ie, ge);
        }
    }
    const g = 32, C = 5, A = 1024, we = .04, L = .0035;
    function ke([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, o = e - .1055613458 * r - .0638541728 * t, a = e - .0894841775 * r - 1.291485548 * t, l = n ** 3, d = o ** 3, i = a ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * d + .2309699292 * i,
            -1.2684380046 * l + 2.6097574011 * d - .3413193965 * i,
            -.0041960863 * l - .7034186147 * d + 1.707614701 * i
        ];
    }
    function U(e) {
        const r = Math.min(1, Math.max(0, e)), t = r <= .0031308 ? r * 12.92 : 1.055 * r ** (1 / 2.4) - .055;
        return Math.round(t * 255);
    }
    function Me(e) {
        const r = ke(e);
        return `rgb(${U(r[0] + L)} ${U(r[1] + L)} ${U(r[2] + L)})`;
    }
    function Te(e, r) {
        const t = (e % A + A) % A, n = (r % A + A) % A;
        let o = t * 73856093 ^ n * 19349663;
        return o = Math.imul(o ^ o >>> 13, 1540483477), o ^= o >>> 15, (o >>> 0) / 4294967295 < we;
    }
    function Ee(e) {
        const r = e.getContext("2d");
        if (!r) throw new Error("2D context unavailable");
        const t = r;
        let n = oe, o = 0, a = 0, l = 0, d = !0;
        function i() {
            if (!d) return;
            d = !1;
            const p = e.width, f = e.height;
            if (p === 0 || f === 0) return;
            t.fillStyle = Me(n.surface), t.fillRect(0, 0, p, f);
            const O = Math.floor(o / g), F = Math.ceil((o + p) / g), z = Math.floor(a / g), I = Math.ceil((a + f) / g), X = N(K(n.surface, n.ink, n.minor_t)), c = N(K(n.surface, n.ink, n.major_t));
            for (const M of [
                !1,
                !0
            ]){
                t.strokeStyle = M ? c : X, t.lineWidth = g * (M ? .12 : .04), t.globalAlpha = M ? .72 : .85, t.beginPath();
                for(let u = O; u <= F; u++){
                    if ((u % C + C) % C === 0 !== M) continue;
                    const m = u * g - o;
                    t.moveTo(m, 0), t.lineTo(m, f);
                }
                for(let u = z; u <= I; u++){
                    if ((u % C + C) % C === 0 !== M) continue;
                    const m = u * g - a;
                    t.moveTo(0, m), t.lineTo(p, m);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const _ = n.ink_opacity * l;
            if (_ > .001) {
                t.fillStyle = N(n.ink), t.globalAlpha = _;
                const M = g * .08;
                for(let u = z; u <= I; u++)for(let m = O; m <= F; m++){
                    if (!Te(m, u)) continue;
                    const W = m * g - o, V = u * g - a;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(W, V, g, g, M), t.fill()) : t.fillRect(W, V, g, g);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: i,
            renderOnly: i,
            resize (p, f) {
                d = !0, i();
            },
            setCamera (p, f) {
                p === o && f === a || (o = p, a = f, d = !0);
            },
            setInitFade (p) {
                const f = Math.min(1, Math.max(0, p));
                f !== l && (l = f, d = !0);
            },
            setTheme (p) {
                n = p, d = !0, i();
            },
            free () {}
        };
    }
    const Re = 1e3 / 60, Ce = 2;
    function Ae(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Re - Ce;
    }
    const h = le("Renderer"), se = self;
    let s = null, k = null, b = 0, w = 0, P = null, Z = 0, $ = 0, Q = Number.NaN, ee = Number.NaN;
    const xe = 300;
    let te = 0;
    const T = new be;
    let R = oe, re = !1;
    const ze = 1e3;
    let Y = 0, j = 0;
    function y(e) {
        se.postMessage(e);
    }
    function E(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function Ie(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    function Pe(e) {
        return e % B === 0 ? "base_tick" : "render_only";
    }
    function S() {
        y({
            type: "zones_state",
            zones: T.getAll()
        });
    }
    function v(e) {
        y({
            type: "zones_error",
            message: e
        });
    }
    function G() {
        s?.setZones?.(T.getAll());
    }
    function Se(e) {
        T.setAll(e), G(), S();
    }
    const Ge = {
        worldCols: 0,
        worldRows: 0,
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: 0
    };
    function Oe() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function ne() {
        if (!k) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), r = Math.floor(Math.random() * 4294967296), t = await e.new_offscreen(k, r);
            return s = {
                tick: ()=>t.tick_and_render(),
                renderOnly: ()=>t.render_only(),
                resize: (n, o)=>t.resize(n, o),
                setCamera: (n, o)=>t.set_camera(n, o),
                setTransition: (n)=>t.set_transition(n),
                setInitFade: (n)=>t.set_init_fade(n),
                toggleCell: (n, o)=>t.toggle_cell(n, o),
                setTheme: (n)=>{
                    try {
                        t.set_theme(ae(n));
                    } catch (o) {
                        h.error("WebGL2 theme update failed:", E(o));
                    }
                },
                free: ()=>t.free()
            }, s.setCamera?.(b, w), s.setTheme?.(R), h.info("WebGL2 fallback renderer ready"), y({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: t.world_cols(),
                    worldRows: t.world_rows(),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: t.grid_pitch()
                }
            }), !0;
        } catch (e) {
            return h.error("WebGL2 init failed:", E(e)), y({
                type: "error",
                phase: "gpu-init",
                message: E(e)
            }), !1;
        }
    }
    function Fe(e) {
        return typeof e == "object" && e !== null && typeof e.type == "string";
    }
    se.onmessage = async (e)=>{
        if (!Fe(e.data)) {
            h.warn("worker: ignored malformed inbound message", e.data);
            return;
        }
        switch(e.data.type){
            case "init":
                {
                    k = e.data.canvas, R = e.data.theme, h.debug("Init received — canvas", k.width, "x", k.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await ne();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (a) {
                        h.info("GPU: probe failed, will use CPU renderer:", E(a)), y({
                            type: "error",
                            phase: "gpu-probe",
                            message: E(a)
                        });
                    }
                    const o = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: a } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), l = performance.now();
                        h.debug("GPU: module loaded, initialising surface...");
                        const d = Math.floor(Math.random() * 4294967296), i = await a.new_offscreen(k, 0, d), p = performance.now(), f = i, O = (c)=>{
                            if (typeof f.set_zones == "function") try {
                                f.set_zones(c);
                            } catch (_) {
                                v(`GPU zone update failed: ${E(_)}`);
                            }
                        }, F = (c)=>{
                            if (typeof f.set_theme == "function") try {
                                f.set_theme(ae(c));
                            } catch (_) {
                                h.error("GPU theme update failed:", E(_));
                            }
                        }, z = ()=>({
                                worldCols: i.world_cols(),
                                worldRows: i.world_rows(),
                                paddedRows: i.padded_rows(),
                                wordsPerRow: i.words_per_row(),
                                gridPitch: i.grid_pitch()
                            });
                        let I = !1;
                        s = {
                            tick: ()=>i.tick_and_render(),
                            renderOnly: ()=>i.render_only(),
                            resize: (c, _)=>i.resize(c, _),
                            setCamera: (c, _)=>i.set_camera(c, _),
                            setTransition: (c)=>i.set_transition(c),
                            setInitFade: (c)=>i.set_init_fade(c),
                            toggleCell: (c, _)=>{
                                i.toggle_cell(c, _), i.flush_and_render();
                            },
                            setZones: (c)=>O(c),
                            setTheme: (c)=>F(c),
                            gridInfo: z,
                            pullGpuPassDurations: ()=>{
                                if (!i.timestamp_query_supported()) return !I && q && (I = !0, h.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = i.last_compute_tick_ms(), _ = i.last_xor_edit_ms(), M = i.last_or_edit_ms(), u = i.last_render_pass_ms(), m = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: _ ?? null,
                                    orEditMs: M ?? null,
                                    renderPassMs: u ?? null
                                };
                                return m.computeTickMs === null && m.xorEditMs === null && m.orEditMs === null && m.renderPassMs === null ? null : m;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: i.last_reseed_ms(),
                                    presentMs: i.last_present_ms()
                                }),
                            free: ()=>i.free()
                        }, P && (s.resize(P.width, P.height), P = null), s.setCamera?.(b, w), s.setTransition?.(1), s.setZones?.(T.getAll()), s.setTheme?.(R), h.info("GPU renderer ready"), y({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: z()
                        });
                        break;
                    } catch (a) {
                        const l = E(a);
                        h.error("GPU init failed after probe passed (canvas may be locked):", l), y({
                            type: "error",
                            phase: "gpu-init",
                            message: l
                        });
                        break;
                    }
                    if (t !== "static" && Oe() && await ne()) break;
                    try {
                        s = Ee(k), s.setCamera?.(b, w), s.setTheme?.(R), h.info("Static fallback renderer ready"), y({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: Ge
                        });
                    } catch (a) {
                        const l = E(a);
                        h.error("Static fallback init failed:", l), y({
                            type: "error",
                            phase: "cpu-init",
                            message: l
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!s) break;
                    const r = s;
                    b = e.data.cameraX, w = e.data.cameraY, s.setCamera?.(b, w);
                    const t = performance.now();
                    if (!Ae(t, b, w, {
                        lastRenderTime: $,
                        lastCameraX: Q,
                        lastCameraY: ee,
                        forceRenderUntil: te
                    })) break;
                    if ($ = t, Q = b, ee = w, Z++, j < 1) {
                        const a = performance.now();
                        Y === 0 && (Y = a), j = Math.min(1, (a - Y) / ze), s.setInitFade?.(j);
                    }
                    switch(Pe(Z)){
                        case "base_tick":
                            s.setTransition?.(0), r.tick();
                            break;
                        case "render_only":
                            if (s.setTransition?.(Ie(Z % B / B)), r.renderOnly) {
                                const a = r.renderOnly;
                                a();
                            }
                            break;
                    }
                    re || (re = !0, y({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (h.debug("Resize →", e.data.width, "x", e.data.height), !k) break;
                    if (k.width = e.data.width, k.height = e.data.height, !s) {
                        P = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    s.resize(e.data.width, e.data.height), s.setCamera?.(b, w), s.setTransition?.(1), s.setZones?.(T.getAll()), s.setTheme?.(R), s.gridInfo && y({
                        type: "grid_info",
                        gridInfo: s.gridInfo()
                    });
                    break;
                }
            case "camera":
                b = e.data.x, w = e.data.y, s?.setCamera?.(b, w);
                break;
            case "toggle_cell":
                s?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                Se(e.data.zones);
                break;
            case "add_zone":
                {
                    const r = T.add(e.data.zone);
                    if (r.error) {
                        v(r.error);
                        break;
                    }
                    G(), S();
                    break;
                }
            case "update_zone":
                {
                    const r = T.update(e.data.zone);
                    if (r.error) {
                        v(r.error);
                        break;
                    }
                    G(), S();
                    break;
                }
            case "remove_zone":
                T.remove(e.data.id), G(), S();
                break;
            case "clear_zones":
                T.clear(), G(), S();
                break;
            case "set_theme":
                R = e.data.theme, s?.setTheme?.(R), te = performance.now() + xe, $ = 0;
                break;
        }
    };
})();
