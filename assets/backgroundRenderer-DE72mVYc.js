(async ()=>{
    const F = ()=>{};
    function q(e) {
        const t = `[${e}]`;
        return {
            debug: F,
            info: F,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const N = !1, B = 175, K = {
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
    function W(e) {
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
    const Q = 128;
    function v(e, t, r, i) {
        if (!Array.isArray(e)) return [];
        const l = i ?? Date.now(), o = [];
        for (const a of e){
            if (o.length >= r) break;
            const u = t(a, l);
            u && o.push(u);
        }
        return o;
    }
    const ee = new Set([
        "minor",
        "major",
        "both"
    ]), te = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function D(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function k(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function re() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ne(e) {
        return typeof e == "string" && ee.has(e) ? e : "both";
    }
    function oe(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && te.has(t.style) ? t.style : "none", i = D(k(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = D(l, 0, 1), a = {
            style: r,
            widthCells: i,
            opacity: o
        };
        if (r === "fade") {
            const u = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            a.fadeStrength = D(u, 0, 1);
        }
        return r === "noted" && (a.notePitchCells = Math.max(1, k(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (a.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), a;
    }
    function se(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function Y(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function H(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, i = k(r.x1), l = k(r.y1), o = k(r.x2), a = k(r.y2);
        if (i === null || l === null || o === null || a === null) return null;
        const u = Math.min(i, o), s = Math.max(i, o), z = Math.min(l, a), p = Math.max(l, a);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : re(),
            x1: u,
            y1: z,
            x2: s,
            y2: p,
            mode: ne(r.mode),
            edge: oe(r.edge),
            enabled: se(r.enabled),
            createdAt: Y(r.createdAt, t),
            updatedAt: Y(r.updatedAt, t)
        };
    }
    function ie(e, t = Date.now()) {
        return v(e, H, Q, t);
    }
    class ae {
        constructor(t, r){
            this.normalizeOne = t, this.normalizeAll = r;
        }
        items = [];
        getAll() {
            return this.items;
        }
        setAll(t) {
            return this.items = this.normalizeAll(t), this.items;
        }
        add(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const i = this.items.filter((l)=>l.id !== r.id);
            return this.items = this.normalizeAll([
                ...i,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const i = this.items.findIndex((o)=>o.id === r.id);
            if (i < 0) return {
                error: `Item ${r.id} not found`
            };
            const l = this.items.slice();
            return l[i] = r, this.items = this.normalizeAll(l), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class ce extends ae {
        constructor(){
            super(H, ie);
        }
    }
    const le = q("CpuRenderer"), U = 5, de = 4279175690, ue = 4294921596, $ = 4278190080;
    async function fe(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-Dk2p9Xkz.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), i = await r.create(), l = U + 1, o = l * i.width + 1, a = l * i.height + 1;
        e.width = o, e.height = a, le.debug("CPU: bridge ready, grid", i.width, "x", i.height);
        let u = t.createImageData(o, a), s = new Uint32Array(u.data.buffer);
        s.fill($);
        function z() {
            const p = i.getCells(), A = i.width, x = i.height, P = o;
            for(let y = 0; y < x; y++){
                const L = y * A, c = y * l + 1;
                for(let d = 0; d < A; d++){
                    const S = p[L + d] === 0 ? de : ue, G = d * l + 1;
                    for(let h = 0; h < U; h++){
                        const J = (c + h) * P + G;
                        for(let R = 0; R < U; R++)s[J + R] = S;
                    }
                }
            }
            t.putImageData(u, 0, 0);
        }
        return {
            tick () {
                i.tick(), z();
            },
            renderOnly () {
                z();
            },
            resize (p, A) {
                (e.width !== o || e.height !== a) && (e.width = o, e.height = a, u = t.createImageData(o, a), s = new Uint32Array(u.data.buffer), s.fill($));
            },
            setZones (p) {},
            free () {}
        };
    }
    const f = q("Renderer"), X = self;
    let n = null, _ = null, I = 0, E = null, C = 0;
    const m = new ce;
    let b = K, V = !1;
    const pe = 3e3;
    let O = 0, Z = 0;
    function g(e) {
        X.postMessage(e);
    }
    function w(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function me(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function he(e) {
        return e % B === 0 ? "base_tick" : "render_only";
    }
    function T() {
        g({
            type: "zones_state",
            zones: m.getAll()
        });
    }
    function j(e) {
        g({
            type: "zones_error",
            message: e
        });
    }
    function M() {
        n?.setZones?.(m.getAll());
    }
    function ge(e) {
        m.setAll(e), M(), T();
    }
    X.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    _ = e.data.canvas;
                    const { cellPx: t } = e.data;
                    b = e.data.theme, f.debug("Init received — canvas", _.width, "x", _.height, "cell_px", t);
                    const r = performance.now();
                    let i = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        i = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        f.info("GPU: probe failed, will use CPU renderer:", w(o)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: w(o)
                        });
                    }
                    const l = performance.now();
                    if (i) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-CFYD7lHm.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), a = performance.now();
                        f.debug("GPU: module loaded, initialising surface...");
                        const u = Math.floor(Math.random() * 4294967296), s = await o.new_offscreen(_, t, u), z = performance.now(), p = s, A = (c)=>{
                            if (typeof p.set_zones_json == "function") try {
                                p.set_zones_json(JSON.stringify(c));
                            } catch (d) {
                                j(`GPU zone update failed: ${w(d)}`);
                            }
                        }, x = (c)=>{
                            if (typeof p.set_theme_json == "function") try {
                                p.set_theme_json(W(c));
                            } catch (d) {
                                f.error("GPU theme update failed:", w(d));
                            }
                        }, P = ()=>({
                                worldCols: s.world_cols(),
                                worldRows: s.world_rows(),
                                paddedRows: s.padded_rows(),
                                wordsPerRow: s.words_per_row(),
                                gridPitch: s.grid_pitch()
                            });
                        let y = !1;
                        n = {
                            tick: ()=>s.tick_and_render(),
                            renderOnly: ()=>s.render_only(),
                            resize: (c, d)=>s.resize(c, d),
                            setScroll: (c)=>s.set_scroll(c),
                            setTransition: (c)=>s.set_transition(c),
                            setInitFade: (c)=>s.set_init_fade(c),
                            toggleCell: (c, d)=>{
                                s.toggle_cell(c, d), s.flush_and_render();
                            },
                            setZones: (c)=>A(c),
                            setTheme: (c)=>x(c),
                            gridInfo: P,
                            pullGpuPassDurations: ()=>{
                                if (!s.timestamp_query_supported()) return !y && N && (y = !0, f.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = s.last_compute_tick_ms(), d = s.last_xor_edit_ms(), S = s.last_or_edit_ms(), G = s.last_render_pass_ms(), h = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: d ?? null,
                                    orEditMs: S ?? null,
                                    renderPassMs: G ?? null
                                };
                                return h.computeTickMs === null && h.xorEditMs === null && h.orEditMs === null && h.renderPassMs === null ? null : h;
                            },
                            free: ()=>s.free()
                        }, E && (n.resize(E.width, E.height), E = null), n.setScroll?.(I), n.setTransition?.(1), n.setZones?.(m.getAll()), n.setTheme?.(b), f.info("GPU renderer ready"), g({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: P()
                        });
                        break;
                    } catch (o) {
                        const a = w(o);
                        f.error("GPU init failed after probe passed (canvas may be locked):", a), g({
                            type: "error",
                            phase: "gpu-init",
                            message: a
                        });
                        break;
                    }
                    try {
                        n = await fe(_), n.setScroll?.(I), n.setZones?.(m.getAll()), n.setTheme?.(b), f.info("CPU renderer ready"), g({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: {
                                worldCols: 0,
                                worldRows: 0,
                                paddedRows: 0,
                                wordsPerRow: 0,
                                gridPitch: 0
                            }
                        });
                    } catch (o) {
                        const a = w(o);
                        f.error("CPU init failed:", a), g({
                            type: "error",
                            phase: "cpu-init",
                            message: a
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!n) break;
                    if (C++, Z < 1) {
                        const r = performance.now();
                        O === 0 && (O = r), Z = Math.min(1, (r - O) / pe), n.setInitFade?.(Z);
                    }
                    switch(he(C)){
                        case "base_tick":
                            n.setTransition?.(0), n.tick();
                            break;
                        case "render_only":
                            n.setTransition?.(me(C % B / B)), n.renderOnly && n.renderOnly();
                            break;
                    }
                    V || (V = !0, g({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (f.debug("Resize →", e.data.width, "x", e.data.height), !_) break;
                    if (_.width = e.data.width, _.height = e.data.height, !n) {
                        E = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    n.resize(e.data.width, e.data.height), n.setScroll?.(I), n.setTransition?.(1), n.setZones?.(m.getAll()), n.setTheme?.(b), n.gridInfo && g({
                        type: "grid_info",
                        gridInfo: n.gridInfo()
                    });
                    break;
                }
            case "scroll":
                I = e.data.scrollY, n?.setScroll?.(I);
                break;
            case "toggle_cell":
                n?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                ge(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = m.add(e.data.zone);
                    if (t.error) {
                        j(t.error);
                        break;
                    }
                    M(), T();
                    break;
                }
            case "update_zone":
                {
                    const t = m.update(e.data.zone);
                    if (t.error) {
                        j(t.error);
                        break;
                    }
                    M(), T();
                    break;
                }
            case "remove_zone":
                m.remove(e.data.id), M(), T();
                break;
            case "clear_zones":
                m.clear(), M(), T();
                break;
            case "set_theme":
                b = e.data.theme, n?.setTheme?.(b);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                n?.free(), n = null;
                break;
        }
    };
})();
