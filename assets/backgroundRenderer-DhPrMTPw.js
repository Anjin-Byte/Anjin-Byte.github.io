(async ()=>{
    const M = ()=>{};
    function Z(e) {
        const t = `[${e}]`;
        return {
            debug: M,
            info: M,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const G = 175, X = {
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
    function H(e) {
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
    function K(e, t, r, o) {
        if (!Array.isArray(e)) return [];
        const s = o ?? Date.now(), n = [];
        for (const a of e){
            if (n.length >= r) break;
            const d = t(a, s);
            d && n.push(d);
        }
        return n;
    }
    const W = new Set([
        "minor",
        "major",
        "both"
    ]), q = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function P(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function _(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function Q() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function v(e) {
        return typeof e == "string" && W.has(e) ? e : "both";
    }
    function ee(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && q.has(t.style) ? t.style : "none", o = P(_(t.widthCells) ?? 1, 1, 4), s = typeof t.opacity == "number" ? t.opacity : 1, n = P(s, 0, 1), a = {
            style: r,
            widthCells: o,
            opacity: n
        };
        if (r === "fade") {
            const d = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            a.fadeStrength = P(d, 0, 1);
        }
        return r === "noted" && (a.notePitchCells = Math.max(1, _(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (a.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), a;
    }
    function te(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function U(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function O(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, o = _(r.x1), s = _(r.y1), n = _(r.x2), a = _(r.y2);
        if (o === null || s === null || n === null || a === null) return null;
        const d = Math.min(o, n), h = Math.max(o, n), g = Math.min(s, a), c = Math.max(s, a);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : Q(),
            x1: d,
            y1: g,
            x2: h,
            y2: c,
            mode: v(r.mode),
            edge: ee(r.edge),
            enabled: te(r.enabled),
            createdAt: U(r.createdAt, t),
            updatedAt: U(r.updatedAt, t)
        };
    }
    function re(e, t = Date.now()) {
        return K(e, O, J, t);
    }
    class ne {
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
            const o = this.items.filter((s)=>s.id !== r.id);
            return this.items = this.normalizeAll([
                ...o,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const o = this.items.findIndex((n)=>n.id === r.id);
            if (o < 0) return {
                error: `Item ${r.id} not found`
            };
            const s = this.items.slice();
            return s[o] = r, this.items = this.normalizeAll(s), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class oe extends ne {
        constructor(){
            super(O, re);
        }
    }
    const ie = Z("CpuRenderer"), R = 5, se = 4279175690, ae = 4294921596, D = 4278190080;
    async function ce(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-BewAsBvC.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), o = await r.create(), s = R + 1, n = s * o.width + 1, a = s * o.height + 1;
        e.width = n, e.height = a, ie.debug("CPU: bridge ready, grid", o.width, "x", o.height);
        let d = t.createImageData(n, a), h = new Uint32Array(d.data.buffer);
        h.fill(D);
        function g() {
            const c = o.getCells(), l = o.width, B = o.height, L = n;
            for(let I = 0; I < B; I++){
                const N = I * l, Y = I * s + 1;
                for(let S = 0; S < l; S++){
                    const $ = c[N + S] === 0 ? se : ae, F = S * s + 1;
                    for(let x = 0; x < R; x++){
                        const V = (Y + x) * L + F;
                        for(let E = 0; E < R; E++)h[V + E] = $;
                    }
                }
            }
            t.putImageData(d, 0, 0);
        }
        return {
            tick () {
                o.tick(), g();
            },
            renderOnly () {
                g();
            },
            resize (c, l) {
                (e.width !== n || e.height !== a) && (e.width = n, e.height = a, d = t.createImageData(n, a), h = new Uint32Array(d.data.buffer), h.fill(D));
            },
            setZones (c) {},
            free () {}
        };
    }
    const f = Z("Renderer"), j = self;
    let i = null, p = null, b = 0, w = null, T = 0;
    const u = new oe;
    let k = X;
    function m(e) {
        j.postMessage(e);
    }
    function y(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function de(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function le(e) {
        return e % G === 0 ? "base_tick" : "render_only";
    }
    function z() {
        m({
            type: "zones_state",
            zones: u.getAll()
        });
    }
    function C(e) {
        m({
            type: "zones_error",
            message: e
        });
    }
    function A() {
        i?.setZones?.(u.getAll());
    }
    function fe(e) {
        u.setAll(e), A(), z();
    }
    j.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    p = e.data.canvas;
                    const { cellPx: t } = e.data;
                    f.debug("Init received — canvas", p.width, "x", p.height, "cell_px", t);
                    let r = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        r = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        f.info("GPU: probe failed, will use CPU renderer:", y(o)), m({
                            type: "error",
                            phase: "gpu-probe",
                            message: y(o)
                        });
                    }
                    if (r) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-Ch0ASVOl.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        f.debug("GPU: module loaded, initialising surface...");
                        const s = Math.floor(Math.random() * 4294967296), n = await o.new_offscreen(p, t, s), a = n, d = (c)=>{
                            if (typeof a.set_zones_json == "function") try {
                                a.set_zones_json(JSON.stringify(c));
                            } catch (l) {
                                C(`GPU zone update failed: ${y(l)}`);
                            }
                        }, h = (c)=>{
                            if (typeof a.set_theme_json == "function") try {
                                a.set_theme_json(H(c));
                            } catch (l) {
                                f.error("GPU theme update failed:", y(l));
                            }
                        }, g = ()=>({
                                worldCols: n.world_cols(),
                                worldRows: n.world_rows(),
                                paddedRows: n.padded_rows(),
                                wordsPerRow: n.words_per_row(),
                                gridPitch: n.grid_pitch()
                            });
                        i = {
                            tick: ()=>n.tick_and_render(),
                            renderOnly: ()=>n.render_only(),
                            resize: (c, l)=>n.resize(c, l),
                            setScroll: (c)=>n.set_scroll(c),
                            setTransition: (c)=>n.set_transition(c),
                            toggleCell: (c, l)=>{
                                n.toggle_cell(c, l), n.flush_and_render();
                            },
                            setZones: (c)=>d(c),
                            setTheme: (c)=>h(c),
                            gridInfo: g,
                            free: ()=>n.free()
                        }, w && (i.resize(w.width, w.height), w = null), i.setScroll?.(b), i.setTransition?.(1), i.setZones?.(u.getAll()), i.setTheme?.(k), f.info("GPU renderer ready"), m({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: g()
                        });
                        break;
                    } catch (o) {
                        const s = y(o);
                        f.error("GPU init failed after probe passed (canvas may be locked):", s), m({
                            type: "error",
                            phase: "gpu-init",
                            message: s
                        });
                        break;
                    }
                    try {
                        i = await ce(p), i.setScroll?.(b), i.setZones?.(u.getAll()), i.setTheme?.(k), f.info("CPU renderer ready"), m({
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
                        const s = y(o);
                        f.error("CPU init failed:", s), m({
                            type: "error",
                            phase: "cpu-init",
                            message: s
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!i) break;
                    switch(T++, le(T)){
                        case "base_tick":
                            i.setTransition?.(0), i.tick();
                            break;
                        case "render_only":
                            i.setTransition?.(de(T % G / G)), i.renderOnly && i.renderOnly();
                            break;
                    }
                    break;
                }
            case "resize":
                {
                    if (f.debug("Resize →", e.data.width, "x", e.data.height), !p) break;
                    if (p.width = e.data.width, p.height = e.data.height, !i) {
                        w = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setScroll?.(b), i.setTransition?.(1), i.setZones?.(u.getAll()), i.setTheme?.(k), i.gridInfo && m({
                        type: "grid_info",
                        gridInfo: i.gridInfo()
                    });
                    break;
                }
            case "scroll":
                b = e.data.scrollY, i?.setScroll?.(b);
                break;
            case "toggle_cell":
                i?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                fe(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = u.add(e.data.zone);
                    if (t.error) {
                        C(t.error);
                        break;
                    }
                    A(), z();
                    break;
                }
            case "update_zone":
                {
                    const t = u.update(e.data.zone);
                    if (t.error) {
                        C(t.error);
                        break;
                    }
                    A(), z();
                    break;
                }
            case "remove_zone":
                u.remove(e.data.id), A(), z();
                break;
            case "clear_zones":
                u.clear(), A(), z();
                break;
            case "set_theme":
                k = e.data.theme, i?.setTheme?.(k);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                i?.free(), i = null;
                break;
        }
    };
})();
