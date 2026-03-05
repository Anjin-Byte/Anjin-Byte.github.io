(async ()=>{
    const N = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    }, B = N.warn;
    function F(e) {
        const n = (t, r)=>{
            N[t] < B || console[t](`[${e}]`, ...r);
        };
        return {
            debug: (...t)=>n("debug", t),
            info: (...t)=>n("info", t),
            warn: (...t)=>n("warn", t),
            error: (...t)=>n("error", t)
        };
    }
    const K = 128, V = new Set([
        "minor",
        "major",
        "both"
    ]), Y = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function C(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function _(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function W() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function X(e) {
        return typeof e == "string" && V.has(e) ? e : "both";
    }
    function J(e) {
        const n = e && typeof e == "object" ? e : {}, t = typeof n.style == "string" && Y.has(n.style) ? n.style : "none", r = C(_(n.widthCells) ?? 1, 1, 4), o = typeof n.opacity == "number" ? n.opacity : 1, s = C(o, 0, 1), i = {
            style: t,
            widthCells: r,
            opacity: s
        };
        if (t === "fade") {
            const m = typeof n.fadeStrength == "number" ? n.fadeStrength : .6;
            i.fadeStrength = C(m, 0, 1);
        }
        return t === "noted" && (i.notePitchCells = Math.max(1, _(n.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (i.hideInteriorBorder = typeof n.hideInteriorBorder == "boolean" ? n.hideInteriorBorder : !1), i;
    }
    function q(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function T(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function Z(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, r = _(t.x1), o = _(t.y1), s = _(t.x2), i = _(t.y2);
        if (r === null || o === null || s === null || i === null) return null;
        const m = Math.min(r, s), M = Math.max(r, s), D = Math.min(o, i), d = Math.max(o, i);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : W(),
            x1: m,
            y1: D,
            x2: M,
            y2: d,
            mode: X(t.mode),
            edge: J(t.edge),
            enabled: q(t.enabled),
            createdAt: T(t.createdAt, n),
            updatedAt: T(t.updatedAt, n)
        };
    }
    function P(e, n = Date.now()) {
        if (!Array.isArray(e)) return [];
        const t = [];
        for (const r of e){
            if (t.length >= K) break;
            const o = Z(r, n);
            o && t.push(o);
        }
        return t;
    }
    class H {
        zones = [];
        getAll() {
            return this.zones;
        }
        setAll(n) {
            return this.zones = P(n), this.zones;
        }
        add(n) {
            const t = Z(n);
            if (!t) return {
                zones: this.zones,
                error: "Invalid zone payload"
            };
            const r = this.zones.filter((o)=>o.id !== t.id);
            return this.zones = P([
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
            return o[r] = t, this.zones = P(o), {
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
    const Q = 32, g = [
        .49,
        .3,
        1,
        .6
    ], v = new Set([
        "solid",
        "checkerboard",
        "stripes",
        "dots",
        "bitmap"
    ]), ee = new Set([
        "alpha",
        "multiply",
        "screen"
    ]);
    function y(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function l(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : e;
    }
    function I(e) {
        const n = l(e);
        return n === null ? null : Math.trunc(n);
    }
    function te() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ne(e) {
        return typeof e == "string" && v.has(e) ? e : "solid";
    }
    function re(e) {
        return typeof e == "string" && ee.has(e) ? e : "alpha";
    }
    function oe(e) {
        const n = e && typeof e == "object" ? e : {}, t = ne(n.kind), r = {
            kind: t
        };
        return t === "solid" ? (r.coverage = y(l(n.coverage) ?? 1, 0, 1), r.solidR = y(l(n.solidR) ?? g[0], 0, 1), r.solidG = y(l(n.solidG) ?? g[1], 0, 1), r.solidB = y(l(n.solidB) ?? g[2], 0, 1)) : t === "checkerboard" ? r.cellSize = Math.max(1, l(n.cellSize) ?? 2) : t === "stripes" ? r.pitchCells = Math.max(2, l(n.pitchCells) ?? 4) : t === "dots" && (r.dotRadius = Math.max(.1, l(n.dotRadius) ?? .4), r.dotSpacing = Math.max(2, l(n.dotSpacing) ?? 3)), r;
    }
    function se(e) {
        return !Array.isArray(e) || e.length < 4 ? [
            ...g
        ] : [
            y(l(e[0]) ?? g[0], 0, 1),
            y(l(e[1]) ?? g[1], 0, 1),
            y(l(e[2]) ?? g[2], 0, 1),
            y(l(e[3]) ?? g[3], 0, 1)
        ];
    }
    function ae(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function j(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function O(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, r = I(t.x1), o = I(t.y1), s = I(t.x2), i = I(t.y2);
        return r === null || o === null || s === null || i === null ? null : {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : te(),
            x1: Math.min(r, s),
            y1: Math.min(o, i),
            x2: Math.max(r, s),
            y2: Math.max(o, i),
            pattern: oe(t.pattern),
            tint: se(t.tint),
            blendMode: re(t.blendMode),
            suppressCells: typeof t.suppressCells == "boolean" ? t.suppressCells : !1,
            enabled: ae(t.enabled),
            createdAt: j(t.createdAt, n),
            updatedAt: j(t.updatedAt, n)
        };
    }
    function U(e, n = Date.now()) {
        if (!Array.isArray(e)) return [];
        const t = [];
        for (const r of e){
            if (t.length >= Q) break;
            const o = O(r, n);
            o && t.push(o);
        }
        return t;
    }
    class ie {
        decals = [];
        getAll() {
            return this.decals;
        }
        setAll(n) {
            return this.decals = U(n), this.decals;
        }
        add(n) {
            const t = O(n);
            if (!t) return {
                decals: this.decals,
                error: "Invalid decal payload"
            };
            const r = this.decals.filter((o)=>o.id !== t.id);
            return this.decals = U([
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
            return o[r] = t, this.decals = U(o), {
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
    const c = F("Renderer"), $ = self;
    let a = null, w = 0;
    const E = 210;
    let G = 0;
    const f = new H, u = new ie;
    function p(e) {
        $.postMessage(e);
    }
    function b(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function de(e) {
        const n = Math.min(1, Math.max(0, e));
        return n * n * (3 - 2 * n);
    }
    function A() {
        p({
            type: "zones_state",
            zones: f.getAll()
        });
    }
    function R(e) {
        p({
            type: "zones_error",
            message: e
        });
    }
    function x() {
        a?.setZones?.(f.getAll());
    }
    function ce(e) {
        f.setAll(e), x(), A();
    }
    function S() {
        p({
            type: "decals_state",
            decals: u.getAll()
        });
    }
    function L(e) {
        p({
            type: "decals_error",
            message: e
        });
    }
    function k() {
        a?.setDecals?.(u.getAll());
    }
    function le(e) {
        u.setAll(e), k(), S();
    }
    const z = 5, fe = "#0a0a0f", ue = "#7c4dff";
    async function pe(e) {
        c.debug("CPU: loading WASM bridge...");
        const n = e.getContext("2d"), { WasmBridge: t } = await import("./index-BIHyjIdh.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), r = await t.create();
        return e.width = (z + 1) * r.width + 1, e.height = (z + 1) * r.height + 1, c.debug("CPU: bridge ready, grid", r.width, "x", r.height), {
            tick () {
                r.tick();
                const o = r.getCells();
                for(let s = 0; s < r.height; s++)for(let i = 0; i < r.width; i++){
                    const m = s * r.width + i;
                    n.fillStyle = o[m] === 0 ? fe : ue, n.fillRect(i * (z + 1) + 1, s * (z + 1) + 1, z, z);
                }
            },
            resize (o, s) {},
            setZones (o) {},
            setDecals (o) {},
            free () {}
        };
    }
    $.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: n, cellPx: t } = e.data;
                    c.debug("Init received — canvas", n.width, "x", n.height, "cell_px", t), c.debug("GPU: probing WebGPU availability...");
                    let r = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        r = !0, c.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        c.info("GPU: probe failed, will use CPU renderer:", b(o)), p({
                            type: "error",
                            phase: "gpu-probe",
                            message: b(o)
                        });
                    }
                    if (r) {
                        c.debug("GPU: loading wasm module...");
                        try {
                            const { GpuGameOfLife: o } = await import("./game_of_life_gpu-4TRiz-Uw.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            });
                            c.debug("GPU: module loaded, initialising surface...");
                            const s = await o.new_offscreen(n, t), i = s;
                            typeof i.set_zones_json != "function" && c.warn("GPU: set_zones_json not found on GpuGameOfLife — blank zones disabled"), typeof i.set_decals_json != "function" && c.warn("GPU: set_decals_json not found on GpuGameOfLife — decals disabled");
                            const m = (d)=>{
                                if (typeof i.set_zones_json == "function") try {
                                    i.set_zones_json(JSON.stringify(d));
                                } catch (h) {
                                    R(`GPU zone update failed: ${b(h)}`);
                                }
                            }, M = (d)=>{
                                if (typeof i.set_decals_json == "function") try {
                                    i.set_decals_json(JSON.stringify(d));
                                } catch (h) {
                                    L(`GPU decal update failed: ${b(h)}`);
                                }
                            }, D = ()=>({
                                    screenCols: s.screen_cols(),
                                    screenRows: s.screen_rows(),
                                    paddedRows: s.padded_rows(),
                                    wordsPerRow: s.words_per_row(),
                                    gridPitch: s.grid_pitch()
                                });
                            a = {
                                tick: ()=>s.tick_and_render(),
                                renderOnly: ()=>s.render_only(),
                                resize: (d, h)=>{
                                    n.width = d, n.height = h, s.resize(d, h);
                                },
                                setScroll: (d)=>s.set_scroll(d),
                                setTransition: (d)=>s.set_transition(d),
                                toggleCell: (d, h)=>{
                                    s.toggle_cell(d, h), s.flush_and_render();
                                },
                                setZones: (d)=>m(d),
                                setDecals: (d)=>M(d),
                                gridInfo: D,
                                free: ()=>s.free()
                            }, a.setScroll?.(w), a.setTransition?.(1), a.setZones?.(f.getAll()), a.setDecals?.(u.getAll()), c.info("GPU renderer ready"), p({
                                type: "ready",
                                backend: "gpu",
                                gridInfo: D()
                            });
                            break;
                        } catch (o) {
                            const s = b(o);
                            c.error("GPU init failed after probe passed (canvas may be locked):", s), p({
                                type: "error",
                                phase: "gpu-init",
                                message: s
                            });
                            break;
                        }
                    }
                    c.debug("CPU: starting software renderer...");
                    try {
                        a = await pe(n), a.setScroll?.(w), a.setZones?.(f.getAll()), a.setDecals?.(u.getAll()), c.info("CPU renderer ready"), p({
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
                        const s = b(o);
                        c.error("CPU init failed:", s), p({
                            type: "error",
                            phase: "cpu-init",
                            message: s
                        });
                    }
                    break;
                }
            case "frame":
                G++, a?.renderOnly && G % E !== 0 ? (a.setTransition?.(de(G % E / E)), a.renderOnly()) : (a?.setTransition?.(0), a?.tick());
                break;
            case "resize":
                c.debug("Resize →", e.data.width, "x", e.data.height), a?.resize(e.data.width, e.data.height), a?.setScroll?.(w), a?.setTransition?.(1), a?.setZones?.(f.getAll()), a?.setDecals?.(u.getAll()), a?.gridInfo && p({
                    type: "grid_info",
                    gridInfo: a.gridInfo()
                });
                break;
            case "scroll":
                w = e.data.scrollY, a?.setScroll?.(w);
                break;
            case "toggle_cell":
                a?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                ce(e.data.zones);
                break;
            case "add_zone":
                {
                    const n = f.add(e.data.zone);
                    if (n.error) {
                        R(n.error);
                        break;
                    }
                    x(), A();
                    break;
                }
            case "update_zone":
                {
                    const n = f.update(e.data.zone);
                    if (n.error) {
                        R(n.error);
                        break;
                    }
                    x(), A();
                    break;
                }
            case "remove_zone":
                {
                    f.remove(e.data.id), x(), A();
                    break;
                }
            case "clear_zones":
                f.clear(), x(), A();
                break;
            case "set_decals":
                le(e.data.decals);
                break;
            case "add_decal":
                {
                    const n = u.add(e.data.decal);
                    if (n.error) {
                        L(n.error);
                        break;
                    }
                    k(), S();
                    break;
                }
            case "update_decal":
                {
                    const n = u.update(e.data.decal);
                    if (n.error) {
                        L(n.error);
                        break;
                    }
                    k(), S();
                    break;
                }
            case "remove_decal":
                u.remove(e.data.id), k(), S();
                break;
            case "clear_decals":
                u.clear(), k(), S();
                break;
            case "stop":
                c.debug("Stop received, freeing renderer"), a?.free(), a = null;
                break;
        }
    };
})();
