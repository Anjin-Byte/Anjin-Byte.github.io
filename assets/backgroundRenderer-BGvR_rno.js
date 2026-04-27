(async ()=>{
    const G = ()=>{};
    function D(e) {
        const t = `[${e}]`;
        return {
            debug: G,
            info: G,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const C = 175, F = {
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
    function V(e) {
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
    const X = 128;
    function H(e, t, r, i) {
        if (!Array.isArray(e)) return [];
        const s = i ?? Date.now(), n = [];
        for (const c of e){
            if (n.length >= r) break;
            const d = t(c, s);
            d && n.push(d);
        }
        return n;
    }
    const J = new Set([
        "minor",
        "major",
        "both"
    ]), K = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function x(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function y(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function W() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function q(e) {
        return typeof e == "string" && J.has(e) ? e : "both";
    }
    function Q(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && K.has(t.style) ? t.style : "none", i = x(y(t.widthCells) ?? 1, 1, 4), s = typeof t.opacity == "number" ? t.opacity : 1, n = x(s, 0, 1), c = {
            style: r,
            widthCells: i,
            opacity: n
        };
        if (r === "fade") {
            const d = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            c.fadeStrength = x(d, 0, 1);
        }
        return r === "noted" && (c.notePitchCells = Math.max(1, y(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (c.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), c;
    }
    function v(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function R(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function M(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, i = y(r.x1), s = y(r.y1), n = y(r.x2), c = y(r.y2);
        if (i === null || s === null || n === null || c === null) return null;
        const d = Math.min(i, n), p = Math.max(i, n), m = Math.min(s, c), a = Math.max(s, c);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : W(),
            x1: d,
            y1: m,
            x2: p,
            y2: a,
            mode: q(r.mode),
            edge: Q(r.edge),
            enabled: v(r.enabled),
            createdAt: R(r.createdAt, t),
            updatedAt: R(r.updatedAt, t)
        };
    }
    function ee(e, t = Date.now()) {
        return H(e, M, X, t);
    }
    class te {
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
            const i = this.items.filter((s)=>s.id !== r.id);
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
            const i = this.items.findIndex((n)=>n.id === r.id);
            if (i < 0) return {
                error: `Item ${r.id} not found`
            };
            const s = this.items.slice();
            return s[i] = r, this.items = this.normalizeAll(s), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class re extends te {
        constructor(){
            super(M, ee);
        }
    }
    const ne = D("CpuRenderer"), E = 5, oe = 4279175690, se = 4294921596, U = 4278190080;
    async function ie(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-BZTxOU47.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), i = await r.create(), s = E + 1, n = s * i.width + 1, c = s * i.height + 1;
        e.width = n, e.height = c, ne.debug("CPU: bridge ready, grid", i.width, "x", i.height);
        let d = t.createImageData(n, c), p = new Uint32Array(d.data.buffer);
        p.fill(U);
        function m() {
            const a = i.getCells(), l = i.width, O = i.height, j = n;
            for(let z = 0; z < O; z++){
                const B = z * l, L = z * s + 1;
                for(let A = 0; A < l; A++){
                    const N = a[B + A] === 0 ? oe : se, Y = A * s + 1;
                    for(let I = 0; I < E; I++){
                        const $ = (L + I) * j + Y;
                        for(let S = 0; S < E; S++)p[$ + S] = N;
                    }
                }
            }
            t.putImageData(d, 0, 0);
        }
        return {
            tick () {
                i.tick(), m();
            },
            renderOnly () {
                m();
            },
            resize (a, l) {
                (e.width !== n || e.height !== c) && (e.width = n, e.height = c, d = t.createImageData(n, c), p = new Uint32Array(d.data.buffer), p.fill(U));
            },
            setZones (a) {},
            free () {}
        };
    }
    const f = D("Renderer"), Z = self;
    let o = null, _ = 0, P = 0;
    const u = new re;
    let b = F;
    function h(e) {
        Z.postMessage(e);
    }
    function g(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function ae(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function ce(e) {
        return e % C === 0 ? "base_tick" : "render_only";
    }
    function w() {
        h({
            type: "zones_state",
            zones: u.getAll()
        });
    }
    function T(e) {
        h({
            type: "zones_error",
            message: e
        });
    }
    function k() {
        o?.setZones?.(u.getAll());
    }
    function de(e) {
        u.setAll(e), k(), w();
    }
    Z.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: t, cellPx: r } = e.data;
                    f.debug("Init received — canvas", t.width, "x", t.height, "cell_px", r);
                    let i = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        i = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (s) {
                        f.info("GPU: probe failed, will use CPU renderer:", g(s)), h({
                            type: "error",
                            phase: "gpu-probe",
                            message: g(s)
                        });
                    }
                    if (i) try {
                        const { GpuGameOfLife: s } = await import("./game_of_life_gpu-F3hPVxO0.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        f.debug("GPU: module loaded, initialising surface...");
                        const n = await s.new_offscreen(t, r), c = n, d = (a)=>{
                            if (typeof c.set_zones_json == "function") try {
                                c.set_zones_json(JSON.stringify(a));
                            } catch (l) {
                                T(`GPU zone update failed: ${g(l)}`);
                            }
                        }, p = (a)=>{
                            if (typeof c.set_theme_json == "function") try {
                                c.set_theme_json(V(a));
                            } catch (l) {
                                f.error("GPU theme update failed:", g(l));
                            }
                        }, m = ()=>({
                                screenCols: n.screen_cols(),
                                screenRows: n.screen_rows(),
                                paddedRows: n.padded_rows(),
                                wordsPerRow: n.words_per_row(),
                                gridPitch: n.grid_pitch()
                            });
                        o = {
                            tick: ()=>n.tick_and_render(),
                            renderOnly: ()=>n.render_only(),
                            resize: (a, l)=>{
                                t.width = a, t.height = l, n.resize(a, l);
                            },
                            setScroll: (a)=>n.set_scroll(a),
                            setTransition: (a)=>n.set_transition(a),
                            toggleCell: (a, l)=>{
                                n.toggle_cell(a, l), n.flush_and_render();
                            },
                            setZones: (a)=>d(a),
                            setTheme: (a)=>p(a),
                            gridInfo: m,
                            free: ()=>n.free()
                        }, o.setScroll?.(_), o.setTransition?.(1), o.setZones?.(u.getAll()), o.setTheme?.(b), f.info("GPU renderer ready"), h({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: m()
                        });
                        break;
                    } catch (s) {
                        const n = g(s);
                        f.error("GPU init failed after probe passed (canvas may be locked):", n), h({
                            type: "error",
                            phase: "gpu-init",
                            message: n
                        });
                        break;
                    }
                    try {
                        o = await ie(t), o.setScroll?.(_), o.setZones?.(u.getAll()), o.setTheme?.(b), f.info("CPU renderer ready"), h({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: {
                                screenCols: 0,
                                screenRows: 0,
                                paddedRows: 0,
                                wordsPerRow: 0,
                                gridPitch: 0
                            }
                        });
                    } catch (s) {
                        const n = g(s);
                        f.error("CPU init failed:", n), h({
                            type: "error",
                            phase: "cpu-init",
                            message: n
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!o) break;
                    switch(P++, ce(P)){
                        case "base_tick":
                            o.setTransition?.(0), o.tick();
                            break;
                        case "render_only":
                            o.setTransition?.(ae(P % C / C)), o.renderOnly && o.renderOnly();
                            break;
                    }
                    break;
                }
            case "resize":
                f.debug("Resize →", e.data.width, "x", e.data.height), o?.resize(e.data.width, e.data.height), o?.setScroll?.(_), o?.setTransition?.(1), o?.setZones?.(u.getAll()), o?.setTheme?.(b), o?.gridInfo && h({
                    type: "grid_info",
                    gridInfo: o.gridInfo()
                });
                break;
            case "scroll":
                _ = e.data.scrollY, o?.setScroll?.(_);
                break;
            case "toggle_cell":
                o?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                de(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = u.add(e.data.zone);
                    if (t.error) {
                        T(t.error);
                        break;
                    }
                    k(), w();
                    break;
                }
            case "update_zone":
                {
                    const t = u.update(e.data.zone);
                    if (t.error) {
                        T(t.error);
                        break;
                    }
                    k(), w();
                    break;
                }
            case "remove_zone":
                u.remove(e.data.id), k(), w();
                break;
            case "clear_zones":
                u.clear(), k(), w();
                break;
            case "set_theme":
                b = e.data.theme, o?.setTheme?.(b);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                o?.free(), o = null;
                break;
        }
    };
})();
