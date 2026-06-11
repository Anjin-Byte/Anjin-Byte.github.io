(async ()=>{
    const N = ()=>{};
    function q(e) {
        const t = `[${e}]`;
        return {
            debug: N,
            info: N,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const Y = !1, L = 175, W = {
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
    function Q(e) {
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
    const v = 128;
    function ee(e, t, r, s) {
        if (!Array.isArray(e)) return [];
        const d = s ?? Date.now(), a = [];
        for (const i of e){
            if (a.length >= r) break;
            const u = t(i, d);
            u && a.push(u);
        }
        return a;
    }
    const te = new Set([
        "minor",
        "major",
        "both"
    ]), re = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function D(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function A(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ne() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function oe(e) {
        return typeof e == "string" && te.has(e) ? e : "both";
    }
    function ae(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && re.has(t.style) ? t.style : "none", s = D(A(t.widthCells) ?? 1, 1, 4), d = typeof t.opacity == "number" ? t.opacity : 1, a = D(d, 0, 1), i = {
            style: r,
            widthCells: s,
            opacity: a
        };
        if (r === "fade") {
            const u = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            i.fadeStrength = D(u, 0, 1);
        }
        return r === "noted" && (i.notePitchCells = Math.max(1, A(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), i;
    }
    function se(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function $(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function H(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, s = A(r.x1), d = A(r.y1), a = A(r.x2), i = A(r.y2);
        if (s === null || d === null || a === null || i === null) return null;
        const u = Math.min(s, a), o = Math.max(s, a), I = Math.min(d, i), m = Math.max(d, i);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : ne(),
            x1: u,
            y1: I,
            x2: o,
            y2: m,
            mode: oe(r.mode),
            edge: ae(r.edge),
            enabled: se(r.enabled),
            createdAt: $(r.createdAt, t),
            updatedAt: $(r.updatedAt, t)
        };
    }
    function ie(e, t = Date.now()) {
        return ee(e, H, v, t);
    }
    class ce {
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
            const s = this.items.filter((d)=>d.id !== r.id);
            return this.items = this.normalizeAll([
                ...s,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const s = this.items.findIndex((a)=>a.id === r.id);
            if (s < 0) return {
                error: `Item ${r.id} not found`
            };
            const d = this.items.slice();
            return d[s] = r, this.items = this.normalizeAll(d), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class de extends ce {
        constructor(){
            super(H, ie);
        }
    }
    const le = q("CpuRenderer"), U = 5, ue = 4279175690, fe = 4294921596, X = 4278190080;
    async function me(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-BC3rHiu_.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), s = await r.create(), d = U + 1, a = d * s.width + 1, i = d * s.height + 1;
        e.width = a, e.height = i, le.debug("CPU: bridge ready, grid", s.width, "x", s.height);
        let u = t.createImageData(a, i), o = new Uint32Array(u.data.buffer);
        o.fill(X);
        function I() {
            const m = s.getCells(), E = s.width, C = s.height, P = a;
            for(let y = 0; y < C; y++){
                const F = y * E, c = y * d + 1;
                for(let l = 0; l < E; l++){
                    const G = m[F + l] === 0 ? ue : fe, R = l * d + 1;
                    for(let h = 0; h < U; h++){
                        const K = (c + h) * P + R;
                        for(let S = 0; S < U; S++)o[K + S] = G;
                    }
                }
            }
            t.putImageData(u, 0, 0);
        }
        return {
            tick () {
                s.tick(), I();
            },
            renderOnly () {
                I();
            },
            resize (m, E) {
                (e.width !== a || e.height !== i) && (e.width = a, e.height = i, u = t.createImageData(a, i), o = new Uint32Array(u.data.buffer), o.fill(X));
            },
            setZones (m) {},
            free () {}
        };
    }
    const f = q("Renderer"), J = self;
    let n = null, _ = null, b = 0, w = 0, M = null, O = 0;
    const p = new de;
    let k = W, V = !1;
    const pe = 1e3;
    let Z = 0, B = 0;
    function g(e) {
        J.postMessage(e);
    }
    function z(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function he(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function ge(e) {
        return e % L === 0 ? "base_tick" : "render_only";
    }
    function T() {
        g({
            type: "zones_state",
            zones: p.getAll()
        });
    }
    function j(e) {
        g({
            type: "zones_error",
            message: e
        });
    }
    function x() {
        n?.setZones?.(p.getAll());
    }
    function _e(e) {
        p.setAll(e), x(), T();
    }
    J.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    _ = e.data.canvas;
                    const { cellPx: t } = e.data;
                    k = e.data.theme, f.debug("Init received — canvas", _.width, "x", _.height, "cell_px", t);
                    const r = performance.now();
                    let s = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        s = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (a) {
                        f.info("GPU: probe failed, will use CPU renderer:", z(a)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: z(a)
                        });
                    }
                    const d = performance.now();
                    if (s) try {
                        const { GpuGameOfLife: a } = await import("./game_of_life_gpu-YvDc-Vf2.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), i = performance.now();
                        f.debug("GPU: module loaded, initialising surface...");
                        const u = Math.floor(Math.random() * 4294967296), o = await a.new_offscreen(_, t, u), I = performance.now(), m = o, E = (c)=>{
                            if (typeof m.set_zones_json == "function") try {
                                m.set_zones_json(JSON.stringify(c));
                            } catch (l) {
                                j(`GPU zone update failed: ${z(l)}`);
                            }
                        }, C = (c)=>{
                            if (typeof m.set_theme_json == "function") try {
                                m.set_theme_json(Q(c));
                            } catch (l) {
                                f.error("GPU theme update failed:", z(l));
                            }
                        }, P = ()=>({
                                worldCols: o.world_cols(),
                                worldRows: o.world_rows(),
                                paddedRows: o.padded_rows(),
                                wordsPerRow: o.words_per_row(),
                                gridPitch: o.grid_pitch()
                            });
                        let y = !1;
                        n = {
                            tick: ()=>o.tick_and_render(),
                            renderOnly: ()=>o.render_only(),
                            resize: (c, l)=>o.resize(c, l),
                            setCamera: (c, l)=>o.set_camera(c, l),
                            setTransition: (c)=>o.set_transition(c),
                            setInitFade: (c)=>o.set_init_fade(c),
                            toggleCell: (c, l)=>{
                                o.toggle_cell(c, l), o.flush_and_render();
                            },
                            setZones: (c)=>E(c),
                            setTheme: (c)=>C(c),
                            gridInfo: P,
                            pullGpuPassDurations: ()=>{
                                if (!o.timestamp_query_supported()) return !y && Y && (y = !0, f.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = o.last_compute_tick_ms(), l = o.last_xor_edit_ms(), G = o.last_or_edit_ms(), R = o.last_render_pass_ms(), h = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: l ?? null,
                                    orEditMs: G ?? null,
                                    renderPassMs: R ?? null
                                };
                                return h.computeTickMs === null && h.xorEditMs === null && h.orEditMs === null && h.renderPassMs === null ? null : h;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: o.last_reseed_ms(),
                                    presentMs: o.last_present_ms()
                                }),
                            free: ()=>o.free()
                        }, M && (n.resize(M.width, M.height), M = null), n.setCamera?.(b, w), n.setTransition?.(1), n.setZones?.(p.getAll()), n.setTheme?.(k), f.info("GPU renderer ready"), g({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: P()
                        });
                        break;
                    } catch (a) {
                        const i = z(a);
                        f.error("GPU init failed after probe passed (canvas may be locked):", i), g({
                            type: "error",
                            phase: "gpu-init",
                            message: i
                        });
                        break;
                    }
                    try {
                        n = await me(_), n.setCamera?.(b, w), n.setZones?.(p.getAll()), n.setTheme?.(k), f.info("CPU renderer ready"), g({
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
                    } catch (a) {
                        const i = z(a);
                        f.error("CPU init failed:", i), g({
                            type: "error",
                            phase: "cpu-init",
                            message: i
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!n) break;
                    if (b = e.data.cameraX, w = e.data.cameraY, n.setCamera?.(b, w), O++, B < 1) {
                        const r = performance.now();
                        Z === 0 && (Z = r), B = Math.min(1, (r - Z) / pe), n.setInitFade?.(B);
                    }
                    switch(ge(O)){
                        case "base_tick":
                            n.setTransition?.(0), n.tick();
                            break;
                        case "render_only":
                            n.setTransition?.(he(O % L / L)), n.renderOnly && n.renderOnly();
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
                        M = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    n.resize(e.data.width, e.data.height), n.setCamera?.(b, w), n.setTransition?.(1), n.setZones?.(p.getAll()), n.setTheme?.(k), n.gridInfo && g({
                        type: "grid_info",
                        gridInfo: n.gridInfo()
                    });
                    break;
                }
            case "camera":
                b = e.data.x, w = e.data.y, n?.setCamera?.(b, w);
                break;
            case "toggle_cell":
                n?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                _e(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = p.add(e.data.zone);
                    if (t.error) {
                        j(t.error);
                        break;
                    }
                    x(), T();
                    break;
                }
            case "update_zone":
                {
                    const t = p.update(e.data.zone);
                    if (t.error) {
                        j(t.error);
                        break;
                    }
                    x(), T();
                    break;
                }
            case "remove_zone":
                p.remove(e.data.id), x(), T();
                break;
            case "clear_zones":
                p.clear(), x(), T();
                break;
            case "set_theme":
                k = e.data.theme, n?.setTheme?.(k);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                n?.free(), n = null;
                break;
        }
    };
})();
