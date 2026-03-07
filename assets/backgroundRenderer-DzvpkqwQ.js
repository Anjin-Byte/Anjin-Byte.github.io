(async ()=>{
    const j = ()=>{};
    function W(e) {
        const n = `[${e}]`;
        return {
            debug: j,
            info: j,
            warn: (...t)=>console.warn(n, ...t),
            error: (...t)=>console.error(n, ...t)
        };
    }
    const q = 128, Q = new Set([
        "minor",
        "major",
        "both"
    ]), v = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function C(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function z(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ee() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function te(e) {
        return typeof e == "string" && Q.has(e) ? e : "both";
    }
    function ne(e) {
        const n = e && typeof e == "object" ? e : {}, t = typeof n.style == "string" && v.has(n.style) ? n.style : "none", r = C(z(n.widthCells) ?? 1, 1, 4), o = typeof n.opacity == "number" ? n.opacity : 1, s = C(o, 0, 1), l = {
            style: t,
            widthCells: r,
            opacity: s
        };
        if (t === "fade") {
            const m = typeof n.fadeStrength == "number" ? n.fadeStrength : .6;
            l.fadeStrength = C(m, 0, 1);
        }
        return t === "noted" && (l.notePitchCells = Math.max(1, z(n.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (l.hideInteriorBorder = typeof n.hideInteriorBorder == "boolean" ? n.hideInteriorBorder : !1), l;
    }
    function re(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function H(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function Z(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, r = z(t.x1), o = z(t.y1), s = z(t.x2), l = z(t.y2);
        if (r === null || o === null || s === null || l === null) return null;
        const m = Math.min(r, s), E = Math.max(r, s), x = Math.min(o, l), G = Math.max(o, l);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : ee(),
            x1: m,
            y1: x,
            x2: E,
            y2: G,
            mode: te(t.mode),
            edge: ne(t.edge),
            enabled: re(t.enabled),
            createdAt: H(t.createdAt, n),
            updatedAt: H(t.updatedAt, n)
        };
    }
    function U(e, n = Date.now()) {
        if (!Array.isArray(e)) return [];
        const t = [];
        for (const r of e){
            if (t.length >= q) break;
            const o = Z(r, n);
            o && t.push(o);
        }
        return t;
    }
    class oe {
        zones = [];
        getAll() {
            return this.zones;
        }
        setAll(n) {
            return this.zones = U(n), this.zones;
        }
        add(n) {
            const t = Z(n);
            if (!t) return {
                zones: this.zones,
                error: "Invalid zone payload"
            };
            const r = this.zones.filter((o)=>o.id !== t.id);
            return this.zones = U([
                ...r,
                t
            ]), {
                zones: this.zones
            };
        }
        update(n) {
            const t = Z(n);
            if (!t) return {
                zones: this.zones,
                error: "Invalid zone payload"
            };
            const r = this.zones.findIndex((s)=>s.id === t.id);
            if (r < 0) return {
                zones: this.zones,
                error: `Zone not found: ${t.id}`
            };
            const o = this.zones.slice();
            return o[r] = t, this.zones = U(o), {
                zones: this.zones
            };
        }
        remove(n) {
            return this.zones = this.zones.filter((t)=>t.id !== n), this.zones;
        }
        clear() {
            return this.zones = [], this.zones;
        }
    }
    const se = 32, y = [
        .49,
        .3,
        1,
        .6
    ], ie = new Set([
        "solid",
        "checkerboard",
        "stripes",
        "dots",
        "bitmap"
    ]), ae = new Set([
        "alpha",
        "multiply",
        "screen"
    ]);
    function g(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function c(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : e;
    }
    function M(e) {
        const n = c(e);
        return n === null ? null : Math.trunc(n);
    }
    function le() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ce(e) {
        return typeof e == "string" && ie.has(e) ? e : "solid";
    }
    function de(e) {
        return typeof e == "string" && ae.has(e) ? e : "alpha";
    }
    function ue(e) {
        const n = e && typeof e == "object" ? e : {}, t = ce(n.kind), r = {
            kind: t
        };
        return t === "solid" ? (r.coverage = g(c(n.coverage) ?? 1, 0, 1), r.solidR = g(c(n.solidR) ?? y[0], 0, 1), r.solidG = g(c(n.solidG) ?? y[1], 0, 1), r.solidB = g(c(n.solidB) ?? y[2], 0, 1)) : t === "checkerboard" ? r.cellSize = Math.max(1, c(n.cellSize) ?? 2) : t === "stripes" ? r.pitchCells = Math.max(2, c(n.pitchCells) ?? 4) : t === "dots" && (r.dotRadius = Math.max(.1, c(n.dotRadius) ?? .4), r.dotSpacing = Math.max(2, c(n.dotSpacing) ?? 3)), r;
    }
    function fe(e) {
        return !Array.isArray(e) || e.length < 4 ? [
            ...y
        ] : [
            g(c(e[0]) ?? y[0], 0, 1),
            g(c(e[1]) ?? y[1], 0, 1),
            g(c(e[2]) ?? y[2], 0, 1),
            g(c(e[3]) ?? y[3], 0, 1)
        ];
    }
    function pe(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function F(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function O(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, r = M(t.x1), o = M(t.y1), s = M(t.x2), l = M(t.y2);
        return r === null || o === null || s === null || l === null ? null : {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : le(),
            x1: Math.min(r, s),
            y1: Math.min(o, l),
            x2: Math.max(r, s),
            y2: Math.max(o, l),
            pattern: ue(t.pattern),
            tint: fe(t.tint),
            blendMode: de(t.blendMode),
            suppressCells: typeof t.suppressCells == "boolean" ? t.suppressCells : !1,
            enabled: pe(t.enabled),
            createdAt: F(t.createdAt, n),
            updatedAt: F(t.updatedAt, n)
        };
    }
    function P(e, n = Date.now()) {
        if (!Array.isArray(e)) return [];
        const t = [];
        for (const r of e){
            if (t.length >= se) break;
            const o = O(r, n);
            o && t.push(o);
        }
        return t;
    }
    class he {
        decals = [];
        getAll() {
            return this.decals;
        }
        setAll(n) {
            return this.decals = P(n), this.decals;
        }
        add(n) {
            const t = O(n);
            if (!t) return {
                decals: this.decals,
                error: "Invalid decal payload"
            };
            const r = this.decals.filter((o)=>o.id !== t.id);
            return this.decals = P([
                ...r,
                t
            ]), {
                decals: this.decals
            };
        }
        update(n) {
            const t = O(n);
            if (!t) return {
                decals: this.decals,
                error: "Invalid decal payload"
            };
            const r = this.decals.findIndex((s)=>s.id === t.id);
            if (r < 0) return {
                decals: this.decals,
                error: `Decal not found: ${t.id}`
            };
            const o = this.decals.slice();
            return o[r] = t, this.decals = P(o), {
                decals: this.decals
            };
        }
        remove(n) {
            return this.decals = this.decals.filter((t)=>t.id !== n), this.decals;
        }
        clear() {
            return this.decals = [], this.decals;
        }
    }
    const ye = 4;
    function R(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ge() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function K(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function me(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, r = R(t.x1), o = R(t.y1), s = R(t.x2), l = R(t.y2);
        return r === null || o === null || s === null || l === null ? null : {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : ge(),
            x1: Math.min(r, s),
            y1: Math.min(o, l),
            x2: Math.max(r, s),
            y2: Math.max(o, l),
            multiplier: ye,
            enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
            showGrid: typeof t.showGrid == "boolean" ? t.showGrid : !0,
            showBaseGrid: typeof t.showBaseGrid == "boolean" ? t.showBaseGrid : !0,
            showBorder: typeof t.showBorder == "boolean" ? t.showBorder : !0,
            createdAt: K(t.createdAt, n),
            updatedAt: K(t.updatedAt, n)
        };
    }
    class be {
        region = null;
        get() {
            return this.region;
        }
        set(n) {
            return this.region = me(n), this.region;
        }
        clear() {
            return this.region = null, null;
        }
    }
    const f = W("Renderer"), X = self;
    let a = null, A = 0;
    const $ = 210;
    let B = 0;
    const p = new oe, h = new he, b = new be;
    function u(e) {
        X.postMessage(e);
    }
    function _(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function _e(e) {
        const n = Math.min(1, Math.max(0, e));
        return n * n * (3 - 2 * n);
    }
    function k() {
        u({
            type: "zones_state",
            zones: p.getAll()
        });
    }
    function L(e) {
        u({
            type: "zones_error",
            message: e
        });
    }
    function S() {
        a?.setZones?.(p.getAll());
    }
    function we(e) {
        p.setAll(e), S(), k();
    }
    function D() {
        u({
            type: "decals_state",
            decals: h.getAll()
        });
    }
    function T(e) {
        u({
            type: "decals_error",
            message: e
        });
    }
    function I() {
        a?.setDecals?.(h.getAll());
    }
    function ze(e) {
        h.setAll(e), I(), D();
    }
    function V() {
        u({
            type: "hires_state",
            region: b.get()
        });
    }
    function Y() {
        a?.setHiRes?.(b.get());
    }
    const w = 5, xe = "#0a0a0f", Ae = "#7c4dff";
    async function ke(e) {
        const n = e.getContext("2d"), { WasmBridge: t } = await import("./index-CBkJc-a4.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), r = await t.create();
        return e.width = (w + 1) * r.width + 1, e.height = (w + 1) * r.height + 1, f.debug("CPU: bridge ready, grid", r.width, "x", r.height), {
            tick () {
                r.tick();
                const o = r.getCells();
                for(let s = 0; s < r.height; s++)for(let l = 0; l < r.width; l++){
                    const m = s * r.width + l;
                    n.fillStyle = o[m] === 0 ? xe : Ae, n.fillRect(l * (w + 1) + 1, s * (w + 1) + 1, w, w);
                }
            },
            resize (o, s) {},
            setZones (o) {},
            setDecals (o) {},
            free () {}
        };
    }
    X.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: n, cellPx: t } = e.data;
                    f.debug("Init received — canvas", n.width, "x", n.height, "cell_px", t);
                    let r = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        r = !0, f.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        f.info("GPU: probe failed, will use CPU renderer:", _(o)), u({
                            type: "error",
                            phase: "gpu-probe",
                            message: _(o)
                        });
                    }
                    if (r) try {
                        const { GpuGameOfLife: o } = await import("./game_of_life_gpu-DW_R9jf1.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        f.debug("GPU: module loaded, initialising surface...");
                        const s = await o.new_offscreen(n, t), l = s, m = (i)=>{
                            if (typeof l.set_zones_json == "function") try {
                                l.set_zones_json(JSON.stringify(i));
                            } catch (d) {
                                L(`GPU zone update failed: ${_(d)}`);
                            }
                        }, E = (i)=>{
                            if (typeof l.set_decals_json == "function") try {
                                l.set_decals_json(JSON.stringify(i));
                            } catch (d) {
                                T(`GPU decal update failed: ${_(d)}`);
                            }
                        };
                        let x = "";
                        const G = (i)=>`${i.x1},${i.y1},${i.x2},${i.y2},${i.multiplier}`, J = (i)=>{
                            if (!i) {
                                l.clear_hires_region?.(), x = "";
                                return;
                            }
                            const d = G(i);
                            d !== x && l.set_hires_region ? (l.set_hires_region(i.x1, i.y1, i.x2, i.y2, i.multiplier, i.showGrid ?? !0, i.showBaseGrid ?? !0, i.showBorder ?? !0), x = d) : l.update_hires_flags?.(i.showGrid ?? !0, i.showBaseGrid ?? !0, i.showBorder ?? !0), l.set_hires_paused?.(!i.enabled);
                        }, N = ()=>({
                                screenCols: s.screen_cols(),
                                screenRows: s.screen_rows(),
                                paddedRows: s.padded_rows(),
                                wordsPerRow: s.words_per_row(),
                                gridPitch: s.grid_pitch()
                            });
                        a = {
                            tick: ()=>s.tick_and_render(),
                            renderOnly: ()=>s.render_only(),
                            resize: (i, d)=>{
                                n.width = i, n.height = d, s.resize(i, d);
                            },
                            setScroll: (i)=>s.set_scroll(i),
                            setTransition: (i)=>s.set_transition(i),
                            toggleCell: (i, d)=>{
                                s.toggle_cell(i, d), s.flush_and_render();
                            },
                            setZones: (i)=>m(i),
                            setDecals: (i)=>E(i),
                            setHiRes: (i)=>J(i),
                            gridInfo: N,
                            free: ()=>s.free()
                        }, a.setScroll?.(A), a.setTransition?.(1), a.setZones?.(p.getAll()), a.setDecals?.(h.getAll()), a.setHiRes?.(b.get()), f.info("GPU renderer ready"), u({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: N()
                        });
                        break;
                    } catch (o) {
                        const s = _(o);
                        f.error("GPU init failed after probe passed (canvas may be locked):", s), u({
                            type: "error",
                            phase: "gpu-init",
                            message: s
                        });
                        break;
                    }
                    try {
                        a = await ke(n), a.setScroll?.(A), a.setZones?.(p.getAll()), a.setDecals?.(h.getAll()), a.setHiRes?.(b.get()), f.info("CPU renderer ready"), u({
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
                    } catch (o) {
                        const s = _(o);
                        f.error("CPU init failed:", s), u({
                            type: "error",
                            phase: "cpu-init",
                            message: s
                        });
                    }
                    break;
                }
            case "frame":
                if (!a) break;
                B++, a.renderOnly && B % $ !== 0 ? (a.setTransition?.(_e(B % $ / $)), a.renderOnly()) : (a.setTransition?.(0), a.tick());
                break;
            case "resize":
                f.debug("Resize →", e.data.width, "x", e.data.height), a?.resize(e.data.width, e.data.height), a?.setScroll?.(A), a?.setTransition?.(1), a?.setZones?.(p.getAll()), a?.setDecals?.(h.getAll()), a?.setHiRes?.(b.get()), a?.gridInfo && u({
                    type: "grid_info",
                    gridInfo: a.gridInfo()
                });
                break;
            case "scroll":
                A = e.data.scrollY, a?.setScroll?.(A);
                break;
            case "toggle_cell":
                a?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                we(e.data.zones);
                break;
            case "add_zone":
                {
                    const n = p.add(e.data.zone);
                    if (n.error) {
                        L(n.error);
                        break;
                    }
                    S(), k();
                    break;
                }
            case "update_zone":
                {
                    const n = p.update(e.data.zone);
                    if (n.error) {
                        L(n.error);
                        break;
                    }
                    S(), k();
                    break;
                }
            case "remove_zone":
                {
                    p.remove(e.data.id), S(), k();
                    break;
                }
            case "clear_zones":
                p.clear(), S(), k();
                break;
            case "set_decals":
                ze(e.data.decals);
                break;
            case "add_decal":
                {
                    const n = h.add(e.data.decal);
                    if (n.error) {
                        T(n.error);
                        break;
                    }
                    I(), D();
                    break;
                }
            case "update_decal":
                {
                    const n = h.update(e.data.decal);
                    if (n.error) {
                        T(n.error);
                        break;
                    }
                    I(), D();
                    break;
                }
            case "remove_decal":
                h.remove(e.data.id), I(), D();
                break;
            case "clear_decals":
                h.clear(), I(), D();
                break;
            case "set_hires":
                b.set(e.data.region), Y(), V();
                break;
            case "clear_hires":
                b.clear(), Y(), V();
                break;
            case "perf_snapshot":
                break;
            case "stop":
                a?.free(), a = null;
                break;
        }
    };
})();
