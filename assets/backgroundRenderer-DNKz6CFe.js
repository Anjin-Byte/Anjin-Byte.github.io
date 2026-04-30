(async ()=>{
    const B = ()=>{};
    function $(e) {
        const t = `[${e}]`;
        return {
            debug: B,
            info: B,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const L = !1, O = 175, H = {
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
    function X(e) {
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
    const J = 128;
    function K(e, t, r, i) {
        if (!Array.isArray(e)) return [];
        const l = i ?? Date.now(), o = [];
        for (const a of e){
            if (o.length >= r) break;
            const u = t(a, l);
            u && o.push(u);
        }
        return o;
    }
    const W = new Set([
        "minor",
        "major",
        "both"
    ]), Q = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function U(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function w(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function v() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ee(e) {
        return typeof e == "string" && W.has(e) ? e : "both";
    }
    function te(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && Q.has(t.style) ? t.style : "none", i = U(w(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = U(l, 0, 1), a = {
            style: r,
            widthCells: i,
            opacity: o
        };
        if (r === "fade") {
            const u = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            a.fadeStrength = U(u, 0, 1);
        }
        return r === "noted" && (a.notePitchCells = Math.max(1, w(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (a.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), a;
    }
    function re(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function N(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function F(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, i = w(r.x1), l = w(r.y1), o = w(r.x2), a = w(r.y2);
        if (i === null || l === null || o === null || a === null) return null;
        const u = Math.min(i, o), s = Math.max(i, o), k = Math.min(l, a), p = Math.max(l, a);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : v(),
            x1: u,
            y1: k,
            x2: s,
            y2: p,
            mode: ee(r.mode),
            edge: te(r.edge),
            enabled: re(r.enabled),
            createdAt: N(r.createdAt, t),
            updatedAt: N(r.updatedAt, t)
        };
    }
    function ne(e, t = Date.now()) {
        return K(e, F, J, t);
    }
    class oe {
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
    class se extends oe {
        constructor(){
            super(F, ne);
        }
    }
    const ie = $("CpuRenderer"), C = 5, ae = 4279175690, ce = 4294921596, Y = 4278190080;
    async function le(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-Dk2p9Xkz.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), i = await r.create(), l = C + 1, o = l * i.width + 1, a = l * i.height + 1;
        e.width = o, e.height = a, ie.debug("CPU: bridge ready, grid", i.width, "x", i.height);
        let u = t.createImageData(o, a), s = new Uint32Array(u.data.buffer);
        s.fill(Y);
        function k() {
            const p = i.getCells(), z = i.width, T = i.height, M = o;
            for(let y = 0; y < T; y++){
                const j = y * z, c = y * l + 1;
                for(let d = 0; d < z; d++){
                    const S = p[j + d] === 0 ? ae : ce, G = d * l + 1;
                    for(let h = 0; h < C; h++){
                        const q = (c + h) * M + G;
                        for(let R = 0; R < C; R++)s[q + R] = S;
                    }
                }
            }
            t.putImageData(u, 0, 0);
        }
        return {
            tick () {
                i.tick(), k();
            },
            renderOnly () {
                k();
            },
            resize (p, z) {
                (e.width !== o || e.height !== a) && (e.width = o, e.height = a, u = t.createImageData(o, a), s = new Uint32Array(u.data.buffer), s.fill(Y));
            },
            setZones (p) {},
            free () {}
        };
    }
    const f = $("Renderer"), V = self;
    let n = null, g = null, A = 0, E = null, D = 0;
    const m = new se;
    let I = H;
    function _(e) {
        V.postMessage(e);
    }
    function b(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function de(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function ue(e) {
        return e % O === 0 ? "base_tick" : "render_only";
    }
    function x() {
        _({
            type: "zones_state",
            zones: m.getAll()
        });
    }
    function Z(e) {
        _({
            type: "zones_error",
            message: e
        });
    }
    function P() {
        n?.setZones?.(m.getAll());
    }
    function fe(e) {
        m.setAll(e), P(), x();
    }
    V.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    g = e.data.canvas;
                    const { cellPx: t } = e.data;
                    f.debug("Init received — canvas", g.width, "x", g.height, "cell_px", t);
                    const r = performance.now();
                    let i = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        i = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        f.info("GPU: probe failed, will use CPU renderer:", b(o)), _({
                            type: "error",
                            phase: "gpu-probe",
                            message: b(o)
                        });
                    }
                    const l = performance.now();
                    if (i) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-Lwcm8mdS.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), a = performance.now();
                        f.debug("GPU: module loaded, initialising surface...");
                        const u = Math.floor(Math.random() * 4294967296), s = await o.new_offscreen(g, t, u), k = performance.now(), p = s, z = (c)=>{
                            if (typeof p.set_zones_json == "function") try {
                                p.set_zones_json(JSON.stringify(c));
                            } catch (d) {
                                Z(`GPU zone update failed: ${b(d)}`);
                            }
                        }, T = (c)=>{
                            if (typeof p.set_theme_json == "function") try {
                                p.set_theme_json(X(c));
                            } catch (d) {
                                f.error("GPU theme update failed:", b(d));
                            }
                        }, M = ()=>({
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
                            toggleCell: (c, d)=>{
                                s.toggle_cell(c, d), s.flush_and_render();
                            },
                            setZones: (c)=>z(c),
                            setTheme: (c)=>T(c),
                            gridInfo: M,
                            pullGpuPassDurations: ()=>{
                                if (!s.timestamp_query_supported()) return !y && L && (y = !0, f.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = s.last_compute_tick_ms(), d = s.last_xor_edit_ms(), S = s.last_or_edit_ms(), G = s.last_render_pass_ms(), h = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: d ?? null,
                                    orEditMs: S ?? null,
                                    renderPassMs: G ?? null
                                };
                                return h.computeTickMs === null && h.xorEditMs === null && h.orEditMs === null && h.renderPassMs === null ? null : h;
                            },
                            free: ()=>s.free()
                        }, E && (n.resize(E.width, E.height), E = null), n.setScroll?.(A), n.setTransition?.(1), n.setZones?.(m.getAll()), n.setTheme?.(I), f.info("GPU renderer ready"), _({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: M()
                        });
                        break;
                    } catch (o) {
                        const a = b(o);
                        f.error("GPU init failed after probe passed (canvas may be locked):", a), _({
                            type: "error",
                            phase: "gpu-init",
                            message: a
                        });
                        break;
                    }
                    try {
                        n = await le(g), n.setScroll?.(A), n.setZones?.(m.getAll()), n.setTheme?.(I), f.info("CPU renderer ready"), _({
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
                        const a = b(o);
                        f.error("CPU init failed:", a), _({
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
                    switch(D++, ue(D)){
                        case "base_tick":
                            n.setTransition?.(0), n.tick();
                            break;
                        case "render_only":
                            n.setTransition?.(de(D % O / O)), n.renderOnly && n.renderOnly();
                            break;
                    }
                    break;
                }
            case "resize":
                {
                    if (f.debug("Resize →", e.data.width, "x", e.data.height), !g) break;
                    if (g.width = e.data.width, g.height = e.data.height, !n) {
                        E = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    n.resize(e.data.width, e.data.height), n.setScroll?.(A), n.setTransition?.(1), n.setZones?.(m.getAll()), n.setTheme?.(I), n.gridInfo && _({
                        type: "grid_info",
                        gridInfo: n.gridInfo()
                    });
                    break;
                }
            case "scroll":
                A = e.data.scrollY, n?.setScroll?.(A);
                break;
            case "toggle_cell":
                n?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                fe(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = m.add(e.data.zone);
                    if (t.error) {
                        Z(t.error);
                        break;
                    }
                    P(), x();
                    break;
                }
            case "update_zone":
                {
                    const t = m.update(e.data.zone);
                    if (t.error) {
                        Z(t.error);
                        break;
                    }
                    P(), x();
                    break;
                }
            case "remove_zone":
                m.remove(e.data.id), P(), x();
                break;
            case "clear_zones":
                m.clear(), P(), x();
                break;
            case "set_theme":
                I = e.data.theme, n?.setTheme?.(I);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                n?.free(), n = null;
                break;
        }
    };
})();
