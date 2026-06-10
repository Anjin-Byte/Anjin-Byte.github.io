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
    function ee(e, t, r, a) {
        if (!Array.isArray(e)) return [];
        const d = a ?? Date.now(), o = [];
        for (const i of e){
            if (o.length >= r) break;
            const u = t(i, d);
            u && o.push(u);
        }
        return o;
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
    function k(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ne() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function oe(e) {
        return typeof e == "string" && te.has(e) ? e : "both";
    }
    function se(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && re.has(t.style) ? t.style : "none", a = D(k(t.widthCells) ?? 1, 1, 4), d = typeof t.opacity == "number" ? t.opacity : 1, o = D(d, 0, 1), i = {
            style: r,
            widthCells: a,
            opacity: o
        };
        if (r === "fade") {
            const u = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            i.fadeStrength = D(u, 0, 1);
        }
        return r === "noted" && (i.notePitchCells = Math.max(1, k(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), i;
    }
    function ae(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function $(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function H(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, a = k(r.x1), d = k(r.y1), o = k(r.x2), i = k(r.y2);
        if (a === null || d === null || o === null || i === null) return null;
        const u = Math.min(a, o), s = Math.max(a, o), z = Math.min(d, i), m = Math.max(d, i);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : ne(),
            x1: u,
            y1: z,
            x2: s,
            y2: m,
            mode: oe(r.mode),
            edge: se(r.edge),
            enabled: ae(r.enabled),
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
            const a = this.items.filter((d)=>d.id !== r.id);
            return this.items = this.normalizeAll([
                ...a,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const a = this.items.findIndex((o)=>o.id === r.id);
            if (a < 0) return {
                error: `Item ${r.id} not found`
            };
            const d = this.items.slice();
            return d[a] = r, this.items = this.normalizeAll(d), {};
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
    const le = q("CpuRenderer"), U = 5, ue = 4279175690, fe = 4294921596, V = 4278190080;
    async function me(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-IUXSeHhz.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), a = await r.create(), d = U + 1, o = d * a.width + 1, i = d * a.height + 1;
        e.width = o, e.height = i, le.debug("CPU: bridge ready, grid", a.width, "x", a.height);
        let u = t.createImageData(o, i), s = new Uint32Array(u.data.buffer);
        s.fill(V);
        function z() {
            const m = a.getCells(), A = a.width, C = a.height, P = o;
            for(let y = 0; y < C; y++){
                const F = y * A, c = y * d + 1;
                for(let l = 0; l < A; l++){
                    const G = m[F + l] === 0 ? ue : fe, R = l * d + 1;
                    for(let h = 0; h < U; h++){
                        const K = (c + h) * P + R;
                        for(let S = 0; S < U; S++)s[K + S] = G;
                    }
                }
            }
            t.putImageData(u, 0, 0);
        }
        return {
            tick () {
                a.tick(), z();
            },
            renderOnly () {
                z();
            },
            resize (m, A) {
                (e.width !== o || e.height !== i) && (e.width = o, e.height = i, u = t.createImageData(o, i), s = new Uint32Array(u.data.buffer), s.fill(V));
            },
            setZones (m) {},
            free () {}
        };
    }
    const f = q("Renderer"), J = self;
    let n = null, _ = null, I = 0, E = 0, T = null, O = 0;
    const p = new de;
    let b = W, X = !1;
    const pe = 3e3;
    let Z = 0, j = 0;
    function g(e) {
        J.postMessage(e);
    }
    function w(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function he(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function ge(e) {
        return e % L === 0 ? "base_tick" : "render_only";
    }
    function x() {
        g({
            type: "zones_state",
            zones: p.getAll()
        });
    }
    function B(e) {
        g({
            type: "zones_error",
            message: e
        });
    }
    function M() {
        n?.setZones?.(p.getAll());
    }
    function _e(e) {
        p.setAll(e), M(), x();
    }
    J.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    _ = e.data.canvas;
                    const { cellPx: t } = e.data;
                    b = e.data.theme, f.debug("Init received — canvas", _.width, "x", _.height, "cell_px", t);
                    const r = performance.now();
                    let a = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        a = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        f.info("GPU: probe failed, will use CPU renderer:", w(o)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: w(o)
                        });
                    }
                    const d = performance.now();
                    if (a) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-HHuWZIfQ.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), i = performance.now();
                        f.debug("GPU: module loaded, initialising surface...");
                        const u = Math.floor(Math.random() * 4294967296), s = await o.new_offscreen(_, t, u), z = performance.now(), m = s, A = (c)=>{
                            if (typeof m.set_zones_json == "function") try {
                                m.set_zones_json(JSON.stringify(c));
                            } catch (l) {
                                B(`GPU zone update failed: ${w(l)}`);
                            }
                        }, C = (c)=>{
                            if (typeof m.set_theme_json == "function") try {
                                m.set_theme_json(Q(c));
                            } catch (l) {
                                f.error("GPU theme update failed:", w(l));
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
                            resize: (c, l)=>s.resize(c, l),
                            setCamera: (c, l)=>s.set_camera(c, l),
                            setTransition: (c)=>s.set_transition(c),
                            setInitFade: (c)=>s.set_init_fade(c),
                            toggleCell: (c, l)=>{
                                s.toggle_cell(c, l), s.flush_and_render();
                            },
                            setZones: (c)=>A(c),
                            setTheme: (c)=>C(c),
                            gridInfo: P,
                            pullGpuPassDurations: ()=>{
                                if (!s.timestamp_query_supported()) return !y && Y && (y = !0, f.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = s.last_compute_tick_ms(), l = s.last_xor_edit_ms(), G = s.last_or_edit_ms(), R = s.last_render_pass_ms(), h = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: l ?? null,
                                    orEditMs: G ?? null,
                                    renderPassMs: R ?? null
                                };
                                return h.computeTickMs === null && h.xorEditMs === null && h.orEditMs === null && h.renderPassMs === null ? null : h;
                            },
                            free: ()=>s.free()
                        }, T && (n.resize(T.width, T.height), T = null), n.setCamera?.(I, E), n.setTransition?.(1), n.setZones?.(p.getAll()), n.setTheme?.(b), f.info("GPU renderer ready"), g({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: P()
                        });
                        break;
                    } catch (o) {
                        const i = w(o);
                        f.error("GPU init failed after probe passed (canvas may be locked):", i), g({
                            type: "error",
                            phase: "gpu-init",
                            message: i
                        });
                        break;
                    }
                    try {
                        n = await me(_), n.setCamera?.(I, E), n.setZones?.(p.getAll()), n.setTheme?.(b), f.info("CPU renderer ready"), g({
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
                        const i = w(o);
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
                    if (O++, j < 1) {
                        const r = performance.now();
                        Z === 0 && (Z = r), j = Math.min(1, (r - Z) / pe), n.setInitFade?.(j);
                    }
                    switch(ge(O)){
                        case "base_tick":
                            n.setTransition?.(0), n.tick();
                            break;
                        case "render_only":
                            n.setTransition?.(he(O % L / L)), n.renderOnly && n.renderOnly();
                            break;
                    }
                    X || (X = !0, g({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (f.debug("Resize →", e.data.width, "x", e.data.height), !_) break;
                    if (_.width = e.data.width, _.height = e.data.height, !n) {
                        T = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    n.resize(e.data.width, e.data.height), n.setCamera?.(I, E), n.setTransition?.(1), n.setZones?.(p.getAll()), n.setTheme?.(b), n.gridInfo && g({
                        type: "grid_info",
                        gridInfo: n.gridInfo()
                    });
                    break;
                }
            case "camera":
                I = e.data.x, E = e.data.y, n?.setCamera?.(I, E);
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
                        B(t.error);
                        break;
                    }
                    M(), x();
                    break;
                }
            case "update_zone":
                {
                    const t = p.update(e.data.zone);
                    if (t.error) {
                        B(t.error);
                        break;
                    }
                    M(), x();
                    break;
                }
            case "remove_zone":
                p.remove(e.data.id), M(), x();
                break;
            case "clear_zones":
                p.clear(), M(), x();
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
