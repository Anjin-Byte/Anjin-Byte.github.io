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
        return JSON.stringify({
            surface: e.surface,
            ink: e.ink,
            minor_t: e.minor_t,
            major_t: e.major_t,
            border_t: e.border_t,
            ink_opacity: e.ink_opacity,
            grain_intensity: e.grain_intensity
        });
    }
    function J(e, r, t) {
        return [
            e[0] + (r[0] - e[0]) * t,
            e[1] + (r[1] - e[1]) * t,
            e[2] + (r[2] - e[2]) * t
        ];
    }
    function F([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const ce = 128;
    function de(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const o = n ?? Date.now(), i = [];
        for (const l of e){
            if (i.length >= t) break;
            const d = r(l, o);
            d && i.push(d);
        }
        return i;
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
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && ue.has(r.style) ? r.style : "none", n = D(x(r.widthCells) ?? 1, 1, 4), o = typeof r.opacity == "number" ? r.opacity : 1, i = D(o, 0, 1), l = {
            style: t,
            widthCells: n,
            opacity: i
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
    function K(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function se(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = x(t.x1), o = x(t.y1), i = x(t.x2), l = x(t.y2);
        if (n === null || o === null || i === null || l === null) return null;
        const d = Math.min(n, i), a = Math.max(n, i), p = Math.min(o, l), f = Math.max(o, l);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : me(),
            x1: d,
            y1: p,
            x2: a,
            y2: f,
            mode: pe(t.mode),
            edge: he(t.edge),
            enabled: _e(t.enabled),
            createdAt: K(t.createdAt, r),
            updatedAt: K(t.updatedAt, r)
        };
    }
    function ge(e, r = Date.now()) {
        return de(e, se, ce, r);
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
            const n = this.items.findIndex((i)=>i.id === t.id);
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
            super(se, ge);
        }
    }
    const _ = 32, C = 5, A = 1024, we = .04, L = .0035;
    function ke([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, o = e - .1055613458 * r - .0638541728 * t, i = e - .0894841775 * r - 1.291485548 * t, l = n ** 3, d = o ** 3, a = i ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * d + .2309699292 * a,
            -1.2684380046 * l + 2.6097574011 * d - .3413193965 * a,
            -.0041960863 * l - .7034186147 * d + 1.707614701 * a
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
        let n = oe, o = 0, i = 0, l = 0, d = !0;
        function a() {
            if (!d) return;
            d = !1;
            const p = e.width, f = e.height;
            if (p === 0 || f === 0) return;
            t.fillStyle = Me(n.surface), t.fillRect(0, 0, p, f);
            const G = Math.floor(o / _), N = Math.ceil((o + p) / _), z = Math.floor(i / _), I = Math.ceil((i + f) / _), X = F(J(n.surface, n.ink, n.minor_t)), c = F(J(n.surface, n.ink, n.major_t));
            for (const M of [
                !1,
                !0
            ]){
                t.strokeStyle = M ? c : X, t.lineWidth = _ * (M ? .12 : .04), t.globalAlpha = M ? .72 : .85, t.beginPath();
                for(let u = G; u <= N; u++){
                    if ((u % C + C) % C === 0 !== M) continue;
                    const m = u * _ - o;
                    t.moveTo(m, 0), t.lineTo(m, f);
                }
                for(let u = z; u <= I; u++){
                    if ((u % C + C) % C === 0 !== M) continue;
                    const m = u * _ - i;
                    t.moveTo(0, m), t.lineTo(p, m);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const h = n.ink_opacity * l;
            if (h > .001) {
                t.fillStyle = F(n.ink), t.globalAlpha = h;
                const M = _ * .08;
                for(let u = z; u <= I; u++)for(let m = G; m <= N; m++){
                    if (!Te(m, u)) continue;
                    const W = m * _ - o, V = u * _ - i;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(W, V, _, _, M), t.fill()) : t.fillRect(W, V, _, _);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: a,
            renderOnly: a,
            resize (p, f) {
                d = !0, a();
            },
            setCamera (p, f) {
                p === o && f === i || (o = p, i = f, d = !0);
            },
            setInitFade (p) {
                const f = Math.min(1, Math.max(0, p));
                f !== l && (l = f, d = !0);
            },
            setTheme (p) {
                n = p, d = !0, a();
            },
            free () {}
        };
    }
    const Re = 1e3 / 60, Ce = 2;
    function Ae(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Re - Ce;
    }
    const g = le("Renderer"), ie = self;
    let s = null, k = null, b = 0, w = 0, P = null, j = 0, Z = 0, Q = Number.NaN, ee = Number.NaN;
    const xe = 300;
    let te = 0;
    const T = new be;
    let R = oe, re = !1;
    const ze = 1e3;
    let $ = 0, Y = 0;
    function y(e) {
        ie.postMessage(e);
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
    function O() {
        s?.setZones?.(T.getAll());
    }
    function Se(e) {
        T.setAll(e), O(), S();
    }
    const Oe = {
        worldCols: 0,
        worldRows: 0,
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: 0
    };
    function Ge() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function ne() {
        if (!k) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-C148l9pW.js").then(async (m)=>{
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
                        t.set_theme_json(ae(n));
                    } catch (o) {
                        g.error("WebGL2 theme update failed:", E(o));
                    }
                },
                free: ()=>t.free()
            }, s.setCamera?.(b, w), s.setTheme?.(R), g.info("WebGL2 fallback renderer ready"), y({
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
            return g.error("WebGL2 init failed:", E(e)), y({
                type: "error",
                phase: "gpu-init",
                message: E(e)
            }), !1;
        }
    }
    ie.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    k = e.data.canvas, R = e.data.theme, g.debug("Init received — canvas", k.width, "x", k.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await ne();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, g.debug("GPU: probe passed — adapter found");
                    } catch (i) {
                        g.info("GPU: probe failed, will use CPU renderer:", E(i)), y({
                            type: "error",
                            phase: "gpu-probe",
                            message: E(i)
                        });
                    }
                    const o = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: i } = await import("./game_of_life_gpu-C148l9pW.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), l = performance.now();
                        g.debug("GPU: module loaded, initialising surface...");
                        const d = Math.floor(Math.random() * 4294967296), a = await i.new_offscreen(k, 0, d), p = performance.now(), f = a, G = (c)=>{
                            if (typeof f.set_zones_json == "function") try {
                                f.set_zones_json(JSON.stringify(c));
                            } catch (h) {
                                v(`GPU zone update failed: ${E(h)}`);
                            }
                        }, N = (c)=>{
                            if (typeof f.set_theme_json == "function") try {
                                f.set_theme_json(ae(c));
                            } catch (h) {
                                g.error("GPU theme update failed:", E(h));
                            }
                        }, z = ()=>({
                                worldCols: a.world_cols(),
                                worldRows: a.world_rows(),
                                paddedRows: a.padded_rows(),
                                wordsPerRow: a.words_per_row(),
                                gridPitch: a.grid_pitch()
                            });
                        let I = !1;
                        s = {
                            tick: ()=>a.tick_and_render(),
                            renderOnly: ()=>a.render_only(),
                            resize: (c, h)=>a.resize(c, h),
                            setCamera: (c, h)=>a.set_camera(c, h),
                            setTransition: (c)=>a.set_transition(c),
                            setInitFade: (c)=>a.set_init_fade(c),
                            toggleCell: (c, h)=>{
                                a.toggle_cell(c, h), a.flush_and_render();
                            },
                            setZones: (c)=>G(c),
                            setTheme: (c)=>N(c),
                            gridInfo: z,
                            pullGpuPassDurations: ()=>{
                                if (!a.timestamp_query_supported()) return !I && q && (I = !0, g.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = a.last_compute_tick_ms(), h = a.last_xor_edit_ms(), M = a.last_or_edit_ms(), u = a.last_render_pass_ms(), m = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: h ?? null,
                                    orEditMs: M ?? null,
                                    renderPassMs: u ?? null
                                };
                                return m.computeTickMs === null && m.xorEditMs === null && m.orEditMs === null && m.renderPassMs === null ? null : m;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: a.last_reseed_ms(),
                                    presentMs: a.last_present_ms()
                                }),
                            free: ()=>a.free()
                        }, P && (s.resize(P.width, P.height), P = null), s.setCamera?.(b, w), s.setTransition?.(1), s.setZones?.(T.getAll()), s.setTheme?.(R), g.info("GPU renderer ready"), y({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: z()
                        });
                        break;
                    } catch (i) {
                        const l = E(i);
                        g.error("GPU init failed after probe passed (canvas may be locked):", l), y({
                            type: "error",
                            phase: "gpu-init",
                            message: l
                        });
                        break;
                    }
                    if (t !== "static" && Ge() && await ne()) break;
                    try {
                        s = Ee(k), s.setCamera?.(b, w), s.setTheme?.(R), g.info("Static fallback renderer ready"), y({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: Oe
                        });
                    } catch (i) {
                        const l = E(i);
                        g.error("Static fallback init failed:", l), y({
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
                    b = e.data.cameraX, w = e.data.cameraY, s.setCamera?.(b, w);
                    const r = performance.now();
                    if (!Ae(r, b, w, {
                        lastRenderTime: Z,
                        lastCameraX: Q,
                        lastCameraY: ee,
                        forceRenderUntil: te
                    })) break;
                    if (Z = r, Q = b, ee = w, j++, Y < 1) {
                        const o = performance.now();
                        $ === 0 && ($ = o), Y = Math.min(1, (o - $) / ze), s.setInitFade?.(Y);
                    }
                    switch(Pe(j)){
                        case "base_tick":
                            s.setTransition?.(0), s.tick();
                            break;
                        case "render_only":
                            s.setTransition?.(Ie(j % B / B)), s.renderOnly && s.renderOnly();
                            break;
                    }
                    re || (re = !0, y({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (g.debug("Resize →", e.data.width, "x", e.data.height), !k) break;
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
                    O(), S();
                    break;
                }
            case "update_zone":
                {
                    const r = T.update(e.data.zone);
                    if (r.error) {
                        v(r.error);
                        break;
                    }
                    O(), S();
                    break;
                }
            case "remove_zone":
                T.remove(e.data.id), O(), S();
                break;
            case "clear_zones":
                T.clear(), O(), S();
                break;
            case "set_theme":
                R = e.data.theme, s?.setTheme?.(R), te = performance.now() + xe, Z = 0;
                break;
        }
    };
})();
