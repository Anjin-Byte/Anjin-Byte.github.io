(async ()=>{
    const B = ()=>{};
    function ae(e) {
        const t = `[${e}]`;
        return {
            debug: B,
            info: B,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const W = !1, $ = 175, te = {
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
    function re(e) {
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
    function V(e, t, r) {
        return [
            e[0] + (t[0] - e[0]) * r,
            e[1] + (t[1] - e[1]) * r,
            e[2] + (t[2] - e[2]) * r
        ];
    }
    function F([e, t, r], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${r.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${r.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const ie = 128;
    function se(e, t, r, n) {
        if (!Array.isArray(e)) return [];
        const o = n ?? Date.now(), s = [];
        for (const l of e){
            if (s.length >= r) break;
            const h = t(l, o);
            h && s.push(h);
        }
        return s;
    }
    const le = new Set([
        "minor",
        "major",
        "both"
    ]), ce = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function L(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function A(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function de() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function fe(e) {
        return typeof e == "string" && le.has(e) ? e : "both";
    }
    function ue(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && ce.has(t.style) ? t.style : "none", n = L(A(t.widthCells) ?? 1, 1, 4), o = typeof t.opacity == "number" ? t.opacity : 1, s = L(o, 0, 1), l = {
            style: r,
            widthCells: n,
            opacity: s
        };
        if (r === "fade") {
            const h = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            l.fadeStrength = L(h, 0, 1);
        }
        return r === "noted" && (l.notePitchCells = Math.max(1, A(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (l.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), l;
    }
    function me(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function H(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function ne(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, n = A(r.x1), o = A(r.y1), s = A(r.x2), l = A(r.y2);
        if (n === null || o === null || s === null || l === null) return null;
        const h = Math.min(n, s), a = Math.max(n, s), u = Math.min(o, l), k = Math.max(o, l);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : de(),
            x1: h,
            y1: u,
            x2: a,
            y2: k,
            mode: fe(r.mode),
            edge: ue(r.edge),
            enabled: me(r.enabled),
            createdAt: H(r.createdAt, t),
            updatedAt: H(r.updatedAt, t)
        };
    }
    function pe(e, t = Date.now()) {
        return se(e, ne, ie, t);
    }
    class he {
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
            const n = this.items.filter((o)=>o.id !== r.id);
            return this.items = this.normalizeAll([
                ...n,
                r
            ]), {};
        }
        update(t) {
            const r = this.normalizeOne(t);
            if (!r) return {
                error: "Invalid payload"
            };
            const n = this.items.findIndex((s)=>s.id === r.id);
            if (n < 0) return {
                error: `Item ${r.id} not found`
            };
            const o = this.items.slice();
            return o[n] = r, this.items = this.normalizeAll(o), {};
        }
        remove(t) {
            return this.items = this.items.filter((r)=>r.id !== t), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class _e extends he {
        constructor(){
            super(ne, pe);
        }
    }
    const m = 32, C = 5, z = 1024, ge = .04;
    function ye(e, t) {
        const r = (e % z + z) % z, n = (t % z + z) % z;
        let o = r * 73856093 ^ n * 19349663;
        return o = Math.imul(o ^ o >>> 13, 1540483477), o ^= o >>> 15, (o >>> 0) / 4294967295 < ge;
    }
    function be(e) {
        const t = e.getContext("2d");
        if (!t) throw new Error("2D context unavailable");
        let r = te, n = 0, o = 0, s = 0, l = !0;
        function h() {
            if (!l) return;
            l = !1;
            const a = e.width, u = e.height;
            if (a === 0 || u === 0) return;
            t.fillStyle = F(r.surface), t.fillRect(0, 0, a, u);
            const k = Math.floor(n / m), O = Math.ceil((n + a) / m), G = Math.floor(o / m), x = Math.ceil((o + u) / m), N = F(V(r.surface, r.ink, r.minor_t)), v = F(V(r.surface, r.ink, r.major_t));
            for (const d of [
                !1,
                !0
            ]){
                t.strokeStyle = d ? v : N, t.lineWidth = m * (d ? .12 : .04), t.globalAlpha = d ? .72 : .85, t.beginPath();
                for(let f = k; f <= O; f++){
                    if ((f % C + C) % C === 0 !== d) continue;
                    const _ = f * m - n;
                    t.moveTo(_, 0), t.lineTo(_, u);
                }
                for(let f = G; f <= x; f++){
                    if ((f % C + C) % C === 0 !== d) continue;
                    const _ = f * m - o;
                    t.moveTo(0, _), t.lineTo(a, _);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const c = r.ink_opacity * s;
            if (c > .001) {
                t.fillStyle = F(r.ink), t.globalAlpha = c;
                const d = m * .08;
                for(let f = G; f <= x; f++)for(let _ = k; _ <= O; _++){
                    if (!ye(_, f)) continue;
                    const T = _ * m - n, X = f * m - o;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(T, X, m, m, d), t.fill()) : t.fillRect(T, X, m, m);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: h,
            renderOnly: h,
            resize (a, u) {
                l = !0, h();
            },
            setCamera (a, u) {
                a === n && u === o || (n = a, o = u, l = !0);
            },
            setInitFade (a) {
                const u = Math.min(1, Math.max(0, a));
                u !== s && (s = u, l = !0);
            },
            setTheme (a) {
                r = a, l = !0, h();
            },
            free () {}
        };
    }
    const we = 1e3 / 60, ke = 2;
    function Ee(e, t, r, n) {
        return t !== n.lastCameraX || r !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= we - ke;
    }
    const p = ae("Renderer"), oe = self;
    let i = null, w = null, y = 0, b = 0, I = null, D = 0, U = 0, q = Number.NaN, J = Number.NaN;
    const Me = 300;
    let K = 0;
    const E = new _e;
    let R = te, Q = !1;
    const Te = 1e3;
    let j = 0, Z = 0;
    function g(e) {
        oe.postMessage(e);
    }
    function M(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function Re(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function Ce(e) {
        return e % $ === 0 ? "base_tick" : "render_only";
    }
    function S() {
        g({
            type: "zones_state",
            zones: E.getAll()
        });
    }
    function Y(e) {
        g({
            type: "zones_error",
            message: e
        });
    }
    function P() {
        i?.setZones?.(E.getAll());
    }
    function ze(e) {
        E.setAll(e), P(), S();
    }
    const Ae = {
        worldCols: 0,
        worldRows: 0,
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: 0
    };
    function xe() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function ee() {
        if (!w) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-BA1Ijtnp.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), t = Math.floor(Math.random() * 4294967296), r = await e.new_offscreen(w, t);
            return i = {
                tick: ()=>r.tick_and_render(),
                renderOnly: ()=>r.render_only(),
                resize: (n, o)=>r.resize(n, o),
                setCamera: (n, o)=>r.set_camera(n, o),
                setTransition: (n)=>r.set_transition(n),
                setInitFade: (n)=>r.set_init_fade(n),
                toggleCell: (n, o)=>r.toggle_cell(n, o),
                setTheme: (n)=>{
                    try {
                        r.set_theme_json(re(n));
                    } catch (o) {
                        p.error("WebGL2 theme update failed:", M(o));
                    }
                },
                free: ()=>r.free()
            }, i.setCamera?.(y, b), i.setTheme?.(R), p.info("WebGL2 fallback renderer ready"), g({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: r.world_cols(),
                    worldRows: r.world_rows(),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: r.grid_pitch()
                }
            }), !0;
        } catch (e) {
            return p.error("WebGL2 init failed:", M(e)), g({
                type: "error",
                phase: "gpu-init",
                message: M(e)
            }), !1;
        }
    }
    oe.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    w = e.data.canvas, R = e.data.theme, p.debug("Init received — canvas", w.width, "x", w.height);
                    const t = performance.now(), r = e.data.forceBackend;
                    if (r === "webgl2") {
                        await ee();
                        break;
                    }
                    let n = !1;
                    if (r !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, p.debug("GPU: probe passed — adapter found");
                    } catch (s) {
                        p.info("GPU: probe failed, will use CPU renderer:", M(s)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: M(s)
                        });
                    }
                    const o = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: s } = await import("./game_of_life_gpu-BA1Ijtnp.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), l = performance.now();
                        p.debug("GPU: module loaded, initialising surface...");
                        const h = Math.floor(Math.random() * 4294967296), a = await s.new_offscreen(w, 0, h), u = performance.now(), k = a, O = (c)=>{
                            if (typeof k.set_zones_json == "function") try {
                                k.set_zones_json(JSON.stringify(c));
                            } catch (d) {
                                Y(`GPU zone update failed: ${M(d)}`);
                            }
                        }, G = (c)=>{
                            if (typeof k.set_theme_json == "function") try {
                                k.set_theme_json(re(c));
                            } catch (d) {
                                p.error("GPU theme update failed:", M(d));
                            }
                        }, x = ()=>({
                                worldCols: a.world_cols(),
                                worldRows: a.world_rows(),
                                paddedRows: a.padded_rows(),
                                wordsPerRow: a.words_per_row(),
                                gridPitch: a.grid_pitch()
                            });
                        let N = !1;
                        i = {
                            tick: ()=>a.tick_and_render(),
                            renderOnly: ()=>a.render_only(),
                            resize: (c, d)=>a.resize(c, d),
                            setCamera: (c, d)=>a.set_camera(c, d),
                            setTransition: (c)=>a.set_transition(c),
                            setInitFade: (c)=>a.set_init_fade(c),
                            toggleCell: (c, d)=>{
                                a.toggle_cell(c, d), a.flush_and_render();
                            },
                            setZones: (c)=>O(c),
                            setTheme: (c)=>G(c),
                            gridInfo: x,
                            pullGpuPassDurations: ()=>{
                                if (!a.timestamp_query_supported()) return !N && W && (N = !0, p.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = a.last_compute_tick_ms(), d = a.last_xor_edit_ms(), f = a.last_or_edit_ms(), _ = a.last_render_pass_ms(), T = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: d ?? null,
                                    orEditMs: f ?? null,
                                    renderPassMs: _ ?? null
                                };
                                return T.computeTickMs === null && T.xorEditMs === null && T.orEditMs === null && T.renderPassMs === null ? null : T;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: a.last_reseed_ms(),
                                    presentMs: a.last_present_ms()
                                }),
                            free: ()=>a.free()
                        }, I && (i.resize(I.width, I.height), I = null), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(E.getAll()), i.setTheme?.(R), p.info("GPU renderer ready"), g({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: x()
                        });
                        break;
                    } catch (s) {
                        const l = M(s);
                        p.error("GPU init failed after probe passed (canvas may be locked):", l), g({
                            type: "error",
                            phase: "gpu-init",
                            message: l
                        });
                        break;
                    }
                    if (r !== "static" && xe() && await ee()) break;
                    try {
                        i = be(w), i.setCamera?.(y, b), i.setTheme?.(R), p.info("Static fallback renderer ready"), g({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: Ae
                        });
                    } catch (s) {
                        const l = M(s);
                        p.error("Static fallback init failed:", l), g({
                            type: "error",
                            phase: "cpu-init",
                            message: l
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!i) break;
                    y = e.data.cameraX, b = e.data.cameraY, i.setCamera?.(y, b);
                    const t = performance.now();
                    if (!Ee(t, y, b, {
                        lastRenderTime: U,
                        lastCameraX: q,
                        lastCameraY: J,
                        forceRenderUntil: K
                    })) break;
                    if (U = t, q = y, J = b, D++, Z < 1) {
                        const o = performance.now();
                        j === 0 && (j = o), Z = Math.min(1, (o - j) / Te), i.setInitFade?.(Z);
                    }
                    switch(Ce(D)){
                        case "base_tick":
                            i.setTransition?.(0), i.tick();
                            break;
                        case "render_only":
                            i.setTransition?.(Re(D % $ / $)), i.renderOnly && i.renderOnly();
                            break;
                    }
                    Q || (Q = !0, g({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (p.debug("Resize →", e.data.width, "x", e.data.height), !w) break;
                    if (w.width = e.data.width, w.height = e.data.height, !i) {
                        I = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(E.getAll()), i.setTheme?.(R), i.gridInfo && g({
                        type: "grid_info",
                        gridInfo: i.gridInfo()
                    });
                    break;
                }
            case "camera":
                y = e.data.x, b = e.data.y, i?.setCamera?.(y, b);
                break;
            case "toggle_cell":
                i?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                ze(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = E.add(e.data.zone);
                    if (t.error) {
                        Y(t.error);
                        break;
                    }
                    P(), S();
                    break;
                }
            case "update_zone":
                {
                    const t = E.update(e.data.zone);
                    if (t.error) {
                        Y(t.error);
                        break;
                    }
                    P(), S();
                    break;
                }
            case "remove_zone":
                E.remove(e.data.id), P(), S();
                break;
            case "clear_zones":
                E.clear(), P(), S();
                break;
            case "set_theme":
                R = e.data.theme, i?.setTheme?.(R), K = performance.now() + Me, U = 0;
                break;
        }
    };
})();
