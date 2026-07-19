(async ()=>{
    const V = ()=>{};
    function se(e) {
        const t = `[${e}]`;
        return {
            debug: V,
            info: V,
            warn: (...r)=>console.warn(t, ...r),
            error: (...r)=>console.error(t, ...r)
        };
    }
    const H = !1, B = 175, ne = {
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
    function oe(e) {
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
    function q(e, t, r) {
        return [
            e[0] + (t[0] - e[0]) * r,
            e[1] + (t[1] - e[1]) * r,
            e[2] + (t[2] - e[2]) * r
        ];
    }
    function F([e, t, r], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${r.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${r.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const le = 128;
    function ce(e, t, r, n) {
        if (!Array.isArray(e)) return [];
        const o = n ?? Date.now(), l = [];
        for (const s of e){
            if (l.length >= r) break;
            const f = t(s, o);
            f && l.push(f);
        }
        return l;
    }
    const de = new Set([
        "minor",
        "major",
        "both"
    ]), fe = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function D(e, t, r) {
        return Math.min(r, Math.max(t, e));
    }
    function z(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function ue() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function me(e) {
        return typeof e == "string" && de.has(e) ? e : "both";
    }
    function pe(e) {
        const t = e && typeof e == "object" ? e : {}, r = typeof t.style == "string" && fe.has(t.style) ? t.style : "none", n = D(z(t.widthCells) ?? 1, 1, 4), o = typeof t.opacity == "number" ? t.opacity : 1, l = D(o, 0, 1), s = {
            style: r,
            widthCells: n,
            opacity: l
        };
        if (r === "fade") {
            const f = typeof t.fadeStrength == "number" ? t.fadeStrength : .6;
            s.fadeStrength = D(f, 0, 1);
        }
        return r === "noted" && (s.notePitchCells = Math.max(1, z(t.notePitchCells) ?? 2)), (r === "bold-major" || r === "noted") && (s.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : !1), s;
    }
    function he(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function J(e, t) {
        return typeof e == "number" && Number.isFinite(e) ? e : t;
    }
    function ae(e, t = Date.now()) {
        if (!e || typeof e != "object") return null;
        const r = e, n = z(r.x1), o = z(r.y1), l = z(r.x2), s = z(r.y2);
        if (n === null || o === null || l === null || s === null) return null;
        const f = Math.min(n, l), a = Math.max(n, l), m = Math.min(o, s), k = Math.max(o, s);
        return {
            id: typeof r.id == "string" && r.id.length > 0 ? r.id : ue(),
            x1: f,
            y1: m,
            x2: a,
            y2: k,
            mode: me(r.mode),
            edge: pe(r.edge),
            enabled: he(r.enabled),
            createdAt: J(r.createdAt, t),
            updatedAt: J(r.updatedAt, t)
        };
    }
    function _e(e, t = Date.now()) {
        return ce(e, ae, le, t);
    }
    class ge {
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
            const n = this.items.findIndex((l)=>l.id === r.id);
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
    class ye extends ge {
        constructor(){
            super(ae, _e);
        }
    }
    const p = 32, A = 5, C = 1024, be = .04, L = .0035;
    function we([e, t, r]) {
        const n = e + .3963377774 * t + .2158037573 * r, o = e - .1055613458 * t - .0638541728 * r, l = e - .0894841775 * t - 1.291485548 * r, s = n ** 3, f = o ** 3, a = l ** 3;
        return [
            4.0767416621 * s - 3.3077115913 * f + .2309699292 * a,
            -1.2684380046 * s + 2.6097574011 * f - .3413193965 * a,
            -.0041960863 * s - .7034186147 * f + 1.707614701 * a
        ];
    }
    function U(e) {
        const t = Math.min(1, Math.max(0, e)), r = t <= .0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - .055;
        return Math.round(r * 255);
    }
    function ke(e) {
        const t = we(e);
        return `rgb(${U(t[0] + L)} ${U(t[1] + L)} ${U(t[2] + L)})`;
    }
    function Me(e, t) {
        const r = (e % C + C) % C, n = (t % C + C) % C;
        let o = r * 73856093 ^ n * 19349663;
        return o = Math.imul(o ^ o >>> 13, 1540483477), o ^= o >>> 15, (o >>> 0) / 4294967295 < be;
    }
    function Te(e) {
        const t = e.getContext("2d");
        if (!t) throw new Error("2D context unavailable");
        let r = ne, n = 0, o = 0, l = 0, s = !0;
        function f() {
            if (!s) return;
            s = !1;
            const a = e.width, m = e.height;
            if (a === 0 || m === 0) return;
            t.fillStyle = ke(r.surface), t.fillRect(0, 0, a, m);
            const k = Math.floor(n / p), O = Math.ceil((n + a) / p), G = Math.floor(o / p), x = Math.ceil((o + m) / p), N = F(q(r.surface, r.ink, r.minor_t)), X = F(q(r.surface, r.ink, r.major_t));
            for (const d of [
                !1,
                !0
            ]){
                t.strokeStyle = d ? X : N, t.lineWidth = p * (d ? .12 : .04), t.globalAlpha = d ? .72 : .85, t.beginPath();
                for(let u = k; u <= O; u++){
                    if ((u % A + A) % A === 0 !== d) continue;
                    const _ = u * p - n;
                    t.moveTo(_, 0), t.lineTo(_, m);
                }
                for(let u = G; u <= x; u++){
                    if ((u % A + A) % A === 0 !== d) continue;
                    const _ = u * p - o;
                    t.moveTo(0, _), t.lineTo(a, _);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const c = r.ink_opacity * l;
            if (c > .001) {
                t.fillStyle = F(r.ink), t.globalAlpha = c;
                const d = p * .08;
                for(let u = G; u <= x; u++)for(let _ = k; _ <= O; _++){
                    if (!Me(_, u)) continue;
                    const E = _ * p - n, W = u * p - o;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(E, W, p, p, d), t.fill()) : t.fillRect(E, W, p, p);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: f,
            renderOnly: f,
            resize (a, m) {
                s = !0, f();
            },
            setCamera (a, m) {
                a === n && m === o || (n = a, o = m, s = !0);
            },
            setInitFade (a) {
                const m = Math.min(1, Math.max(0, a));
                m !== l && (l = m, s = !0);
            },
            setTheme (a) {
                r = a, s = !0, f();
            },
            free () {}
        };
    }
    const Ee = 1e3 / 60, Re = 2;
    function Ae(e, t, r, n) {
        return t !== n.lastCameraX || r !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= Ee - Re;
    }
    const h = se("Renderer"), ie = self;
    let i = null, w = null, y = 0, b = 0, I = null, j = 0, Z = 0, K = Number.NaN, Q = Number.NaN;
    const Ce = 300;
    let ee = 0;
    const M = new ye;
    let R = ne, te = !1;
    const ze = 1e3;
    let $ = 0, Y = 0;
    function g(e) {
        ie.postMessage(e);
    }
    function T(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function xe(e) {
        const t = Math.min(1, Math.max(0, e));
        return t * t * (3 - 2 * t);
    }
    function Ie(e) {
        return e % B === 0 ? "base_tick" : "render_only";
    }
    function P() {
        g({
            type: "zones_state",
            zones: M.getAll()
        });
    }
    function v(e) {
        g({
            type: "zones_error",
            message: e
        });
    }
    function S() {
        i?.setZones?.(M.getAll());
    }
    function Pe(e) {
        M.setAll(e), S(), P();
    }
    const Se = {
        worldCols: 0,
        worldRows: 0,
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: 0
    };
    function Oe() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function re() {
        if (!w) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-C148l9pW.js").then(async (m)=>{
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
                        r.set_theme_json(oe(n));
                    } catch (o) {
                        h.error("WebGL2 theme update failed:", T(o));
                    }
                },
                free: ()=>r.free()
            }, i.setCamera?.(y, b), i.setTheme?.(R), h.info("WebGL2 fallback renderer ready"), g({
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
            return h.error("WebGL2 init failed:", T(e)), g({
                type: "error",
                phase: "gpu-init",
                message: T(e)
            }), !1;
        }
    }
    ie.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    w = e.data.canvas, R = e.data.theme, h.debug("Init received — canvas", w.width, "x", w.height);
                    const t = performance.now(), r = e.data.forceBackend;
                    if (r === "webgl2") {
                        await re();
                        break;
                    }
                    let n = !1;
                    if (r !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (l) {
                        h.info("GPU: probe failed, will use CPU renderer:", T(l)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: T(l)
                        });
                    }
                    const o = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: l } = await import("./game_of_life_gpu-C148l9pW.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), s = performance.now();
                        h.debug("GPU: module loaded, initialising surface...");
                        const f = Math.floor(Math.random() * 4294967296), a = await l.new_offscreen(w, 0, f), m = performance.now(), k = a, O = (c)=>{
                            if (typeof k.set_zones_json == "function") try {
                                k.set_zones_json(JSON.stringify(c));
                            } catch (d) {
                                v(`GPU zone update failed: ${T(d)}`);
                            }
                        }, G = (c)=>{
                            if (typeof k.set_theme_json == "function") try {
                                k.set_theme_json(oe(c));
                            } catch (d) {
                                h.error("GPU theme update failed:", T(d));
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
                                if (!a.timestamp_query_supported()) return !N && H && (N = !0, h.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = a.last_compute_tick_ms(), d = a.last_xor_edit_ms(), u = a.last_or_edit_ms(), _ = a.last_render_pass_ms(), E = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: d ?? null,
                                    orEditMs: u ?? null,
                                    renderPassMs: _ ?? null
                                };
                                return E.computeTickMs === null && E.xorEditMs === null && E.orEditMs === null && E.renderPassMs === null ? null : E;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: a.last_reseed_ms(),
                                    presentMs: a.last_present_ms()
                                }),
                            free: ()=>a.free()
                        }, I && (i.resize(I.width, I.height), I = null), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(M.getAll()), i.setTheme?.(R), h.info("GPU renderer ready"), g({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: x()
                        });
                        break;
                    } catch (l) {
                        const s = T(l);
                        h.error("GPU init failed after probe passed (canvas may be locked):", s), g({
                            type: "error",
                            phase: "gpu-init",
                            message: s
                        });
                        break;
                    }
                    if (r !== "static" && Oe() && await re()) break;
                    try {
                        i = Te(w), i.setCamera?.(y, b), i.setTheme?.(R), h.info("Static fallback renderer ready"), g({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: Se
                        });
                    } catch (l) {
                        const s = T(l);
                        h.error("Static fallback init failed:", s), g({
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
                    y = e.data.cameraX, b = e.data.cameraY, i.setCamera?.(y, b);
                    const t = performance.now();
                    if (!Ae(t, y, b, {
                        lastRenderTime: Z,
                        lastCameraX: K,
                        lastCameraY: Q,
                        forceRenderUntil: ee
                    })) break;
                    if (Z = t, K = y, Q = b, j++, Y < 1) {
                        const o = performance.now();
                        $ === 0 && ($ = o), Y = Math.min(1, (o - $) / ze), i.setInitFade?.(Y);
                    }
                    switch(Ie(j)){
                        case "base_tick":
                            i.setTransition?.(0), i.tick();
                            break;
                        case "render_only":
                            i.setTransition?.(xe(j % B / B)), i.renderOnly && i.renderOnly();
                            break;
                    }
                    te || (te = !0, g({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (h.debug("Resize →", e.data.width, "x", e.data.height), !w) break;
                    if (w.width = e.data.width, w.height = e.data.height, !i) {
                        I = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setCamera?.(y, b), i.setTransition?.(1), i.setZones?.(M.getAll()), i.setTheme?.(R), i.gridInfo && g({
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
                Pe(e.data.zones);
                break;
            case "add_zone":
                {
                    const t = M.add(e.data.zone);
                    if (t.error) {
                        v(t.error);
                        break;
                    }
                    S(), P();
                    break;
                }
            case "update_zone":
                {
                    const t = M.update(e.data.zone);
                    if (t.error) {
                        v(t.error);
                        break;
                    }
                    S(), P();
                    break;
                }
            case "remove_zone":
                M.remove(e.data.id), S(), P();
                break;
            case "clear_zones":
                M.clear(), S(), P();
                break;
            case "set_theme":
                R = e.data.theme, i?.setTheme?.(R), ee = performance.now() + Ce, Z = 0;
                break;
        }
    };
})();
