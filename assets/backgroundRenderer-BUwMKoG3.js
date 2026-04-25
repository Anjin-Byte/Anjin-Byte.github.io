(async ()=>{
    const N = ()=>{};
    function V(e) {
        const t = `[${e}]`;
        return {
            debug: N,
            info: N,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const I = 175, ee = {
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
    function te(e) {
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
    const re = 128;
    function ne(e, t, r, c) {
        if (!Array.isArray(e)) return [];
        const s = c ?? Date.now(), n = [];
        for (const o of e){
            if (n.length >= r) break;
            const u = t(o, s);
            u && n.push(u);
        }
        return n;
    }
    const oe = new Set([
        "minor",
        "major",
        "both"
    ]), ie = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function H(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function x(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function se() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ae(e) {
        return typeof e == "string" && oe.has(e) ? e : "both";
    }
    function ce(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && ie.has(t.style) ? t.style : "none", c = H(x(t.widthCells) ?? 1, 1, 4), s = typeof t.opacity == "number" ? t.opacity : 1, n = H(s, 0, 1), o = {
            style: r,
            widthCells: c,
            opacity: n
        };
        if (r === "fade") {
            const u = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            o.fadeStrength = H(u, 0, 1);
        }
        return r === "noted" && (o.notePitchCells = Math.max(1, x(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), o;
    }
    function le(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function j(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function v(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, c = x(r.x1), s = x(r.y1), n = x(r.x2), o = x(r.y2);
        if (c === null || s === null || n === null || o === null) return null;
        const u = Math.min(c, n), g = Math.max(c, n), f = Math.min(s, o), b = Math.max(s, o);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : se(),
            x1: u,
            y1: f,
            x2: g,
            y2: b,
            mode: ae(r.mode),
            edge: ce(r.edge),
            enabled: le(r.enabled),
            createdAt: j(r.createdAt, t),
            updatedAt: j(r.updatedAt, t)
        };
    }
    function de(e, t = Date.now()) {
        return ne(e, v, re, t);
    }
    class J {
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
            const c = this.items.filter((s)=>s.id !== r.id);
            return this.items = this.normalizeAll([
                ...c,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const c = this.items.findIndex((n)=>n.id === r.id);
            if (c < 0) return {
                error: `Item ${r.id} not found`
            };
            const s = this.items.slice();
            return s[c] = r, this.items = this.normalizeAll(s), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class ue extends J {
        constructor(){
            super(v, de);
        }
    }
    const fe = 4, he = 2, pe = 8, me = 8;
    function P(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ye() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function F(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function W(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, c = P(r.x1), s = P(r.y1), n = P(r.x2), o = P(r.y2);
        return c === null || s === null || n === null || o === null ? null : {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : ye(),
            x1: Math.min(c, n),
            y1: Math.min(s, o),
            x2: Math.max(c, n),
            y2: Math.max(s, o),
            multiplier: typeof r.multiplier == "number" && Number.isFinite(r.multiplier) ? Math.trunc(Math.max(he, Math.min(pe, r.multiplier))) : fe,
            enabled: typeof r.enabled == "boolean" ? r.enabled : !0,
            showGrid: typeof r.showGrid == "boolean" ? r.showGrid : !0,
            showBaseGrid: typeof r.showBaseGrid == "boolean" ? r.showBaseGrid : !0,
            showBorder: typeof r.showBorder == "boolean" ? r.showBorder : !0,
            tickMultiplier: typeof r.tickMultiplier == "number" && Number.isFinite(r.tickMultiplier) && r.tickMultiplier >= 1 ? Math.trunc(r.tickMultiplier) : 1,
            createdAt: F(r.createdAt, t),
            updatedAt: F(r.updatedAt, t)
        };
    }
    function ge(e, t) {
        return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
    }
    function _e(e, t = Date.now()) {
        if (!Array.isArray(e)) return [];
        const r = [];
        for (const c of e){
            if (r.length >= me) break;
            const s = W(c, t);
            !s || r.some((o)=>ge(o, s)) || r.push(s);
        }
        return r;
    }
    class be extends J {
        constructor(){
            super(W, _e);
        }
    }
    const we = V("CpuRenderer"), Z = 5, ke = 4279175690, Ae = 4294921596, Y = 4278190080;
    async function Ie(e) {
        const t = e.getContext("2d"), { WasmBridge: r } = await import("./index-CUfFioEU.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), c = await r.create(), s = Z + 1, n = s * c.width + 1, o = s * c.height + 1;
        e.width = n, e.height = o, we.debug("CPU: bridge ready, grid", c.width, "x", c.height);
        let u = t.createImageData(n, o), g = new Uint32Array(u.data.buffer);
        g.fill(Y);
        function f() {
            const b = c.getCells(), k = c.width, B = c.height, T = n;
            for(let i = 0; i < B; i++){
                const d = i * k, _ = i * s + 1;
                for(let l = 0; l < k; l++){
                    const U = b[d + l] === 0 ? ke : Ae, w = l * s + 1;
                    for(let C = 0; C < Z; C++){
                        const Q = (_ + C) * T + w;
                        for(let O = 0; O < Z; O++)g[Q + O] = U;
                    }
                }
            }
            t.putImageData(u, 0, 0);
        }
        return {
            tick () {
                c.tick(), f();
            },
            renderOnly () {
                f();
            },
            resize (b, k) {
                (e.width !== n || e.height !== o) && (e.width = n, e.height = o, u = t.createImageData(n, o), g = new Uint32Array(u.data.buffer), g.fill(Y));
            },
            setZones (b) {},
            free () {}
        };
    }
    const h = V("Renderer"), q = self;
    let a = null, R = 0, D = 0, L = 0;
    const m = new ue, p = new be;
    let M = ee;
    function y(e) {
        q.postMessage(e);
    }
    function A(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function X(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function xe(e, t, r) {
        return e % I === 0 ? "base_tick" : t && r > 0 && e % r === 0 ? "hires_tick" : "render_only";
    }
    function G() {
        y({
            type: "zones_state",
            zones: m.getAll()
        });
    }
    function $(e) {
        y({
            type: "zones_error",
            message: e
        });
    }
    function E() {
        a?.setZones?.(m.getAll());
    }
    function Re(e) {
        m.setAll(e), E(), G();
    }
    function z() {
        y({
            type: "hires_state",
            regions: p.getAll()
        });
    }
    function K(e) {
        y({
            type: "error",
            phase: "hires",
            message: e
        });
    }
    function S() {
        a?.setHiResRegions?.(p.getAll());
    }
    q.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: t, cellPx: r } = e.data;
                    h.debug("Init received — canvas", t.width, "x", t.height, "cell_px", r);
                    let c = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        c = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (s) {
                        h.info("GPU: probe failed, will use CPU renderer:", A(s)), y({
                            type: "error",
                            phase: "gpu-probe",
                            message: A(s)
                        });
                    }
                    if (c) try {
                        const { GpuGameOfLife: s } = await import("./game_of_life_gpu-CiqQcl1G.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        h.debug("GPU: module loaded, initialising surface...");
                        const n = await s.new_offscreen(t, r), o = n, u = (i)=>{
                            if (typeof o.set_zones_json == "function") try {
                                o.set_zones_json(JSON.stringify(i));
                            } catch (d) {
                                $(`GPU zone update failed: ${A(d)}`);
                            }
                        }, g = (i)=>{
                            if (typeof o.set_theme_json == "function") try {
                                o.set_theme_json(te(i));
                            } catch (d) {
                                h.error("GPU theme update failed:", A(d));
                            }
                        }, f = new Map, b = (i)=>`${i.x1},${i.y1},${i.x2},${i.y2},${i.multiplier}`, k = (i)=>{
                            let d = 0;
                            for(let _ = 0; _ < i.length; _++)d = (d << 5) - d + i.charCodeAt(_) | 0;
                            return d >>> 0;
                        }, B = (i)=>{
                            const d = new Set(i.map((l)=>l.id));
                            for (const [l] of f)d.has(l) || (o.remove_hires_region?.(k(l)), f.delete(l));
                            if (i.length === 0) {
                                o.clear_hires_regions?.(), f.clear(), L = 0;
                                return;
                            }
                            for (const l of i){
                                const U = b(l), w = k(l.id);
                                f.get(l.id) !== U ? (o.remove_hires_region?.(w), o.add_hires_region?.(w, l.x1, l.y1, l.x2, l.y2, l.multiplier, l.showGrid ?? !0, l.showBaseGrid ?? !0, l.showBorder ?? !0), f.set(l.id, U)) : o.update_hires_flags?.(w, l.showGrid ?? !0, l.showBaseGrid ?? !0, l.showBorder ?? !0), o.set_hires_paused?.(w, !l.enabled), o.set_hires_tick_multiplier?.(w, l.tickMultiplier ?? 1);
                            }
                            const _ = o.max_hires_tick_multiplier?.() ?? 1;
                            L = _ > 1 ? Math.max(1, Math.floor(I / _)) : 0;
                        }, T = ()=>({
                                screenCols: n.screen_cols(),
                                screenRows: n.screen_rows(),
                                paddedRows: n.padded_rows(),
                                wordsPerRow: n.words_per_row(),
                                gridPitch: n.grid_pitch()
                            });
                        a = {
                            tick: ()=>n.tick_and_render(),
                            renderOnly: ()=>n.render_only(),
                            hiresTick: ()=>o.hires_tick_and_render?.(),
                            resize: (i, d)=>{
                                t.width = i, t.height = d, n.resize(i, d);
                            },
                            setScroll: (i)=>n.set_scroll(i),
                            setTransition: (i)=>n.set_transition(i),
                            toggleCell: (i, d)=>{
                                n.toggle_cell(i, d), n.flush_and_render();
                            },
                            setZones: (i)=>u(i),
                            setHiResRegions: (i)=>B(i),
                            setTheme: (i)=>g(i),
                            gridInfo: T,
                            free: ()=>n.free()
                        }, a.setScroll?.(R), a.setTransition?.(1), a.setZones?.(m.getAll()), a.setHiResRegions?.(p.getAll()), a.setTheme?.(M), h.info("GPU renderer ready"), y({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: T()
                        });
                        break;
                    } catch (s) {
                        const n = A(s);
                        h.error("GPU init failed after probe passed (canvas may be locked):", n), y({
                            type: "error",
                            phase: "gpu-init",
                            message: n
                        });
                        break;
                    }
                    try {
                        a = await Ie(t), a.setScroll?.(R), a.setZones?.(m.getAll()), a.setHiResRegions?.(p.getAll()), a.setTheme?.(M), h.info("CPU renderer ready"), y({
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
                        const n = A(s);
                        h.error("CPU init failed:", n), y({
                            type: "error",
                            phase: "cpu-init",
                            message: n
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!a) break;
                    switch(D++, xe(D, !!a.hiresTick, L)){
                        case "base_tick":
                            a.setTransition?.(0), a.tick();
                            break;
                        case "hires_tick":
                            a.setTransition?.(X(D % I / I)), a.hiresTick();
                            break;
                        case "render_only":
                            a.setTransition?.(X(D % I / I)), a.renderOnly && a.renderOnly();
                            break;
                    }
                    break;
                }
            case "resize":
                h.debug("Resize →", e.data.width, "x", e.data.height), a?.resize(e.data.width, e.data.height), a?.setScroll?.(R), a?.setTransition?.(1), a?.setZones?.(m.getAll()), a?.setHiResRegions?.(p.getAll()), a?.setTheme?.(M), a?.gridInfo && y({
                    type: "grid_info",
                    gridInfo: a.gridInfo()
                });
                break;
            case "scroll":
                R = e.data.scrollY, a?.setScroll?.(R);
                break;
            case "toggle_cell":
                a?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                Re(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = m.add(e.data.zone);
                    if (t.error) {
                        $(t.error);
                        break;
                    }
                    E(), G();
                    break;
                }
            case "update_zone":
                {
                    const t = m.update(e.data.zone);
                    if (t.error) {
                        $(t.error);
                        break;
                    }
                    E(), G();
                    break;
                }
            case "remove_zone":
                m.remove(e.data.id), E(), G();
                break;
            case "clear_zones":
                m.clear(), E(), G();
                break;
            case "set_hires_regions":
                p.setAll(e.data.regions), S(), z();
                break;
            case "add_hires":
                {
                    const t = p.add(e.data.region);
                    if (t.error) {
                        K(t.error);
                        break;
                    }
                    S(), z();
                    break;
                }
            case "update_hires":
                {
                    const t = p.update(e.data.region);
                    if (t.error) {
                        K(t.error);
                        break;
                    }
                    S(), z();
                    break;
                }
            case "remove_hires":
                p.remove(e.data.id), S(), z();
                break;
            case "clear_hires":
                p.clear(), S(), z();
                break;
            case "set_theme":
                M = e.data.theme, a?.setTheme?.(M);
                break;
            case "perf_snapshot":
                break;
            case "stop":
                a?.free(), a = null;
                break;
        }
    };
})();
