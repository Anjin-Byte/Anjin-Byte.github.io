(async ()=>{
    const K = ()=>{};
    function fe(e) {
        const r = `[${e}]`;
        return {
            debug: K,
            info: K,
            warn: (...t)=>console.warn(r, ...t),
            error: (...t)=>console.error(r, ...t)
        };
    }
    const J = !1, X = 175, ie = {
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
    function le(e) {
        return {
            surface: e.surface,
            ink: e.ink,
            minor_t: e.minor_t,
            major_t: e.major_t,
            ink_opacity: e.ink_opacity,
            grain_intensity: e.grain_intensity
        };
    }
    function Q(e, r, t) {
        return [
            e[0] + (r[0] - e[0]) * t,
            e[1] + (r[1] - e[1]) * t,
            e[2] + (r[2] - e[2]) * t
        ];
    }
    function D([e, r, t], n = 1) {
        return n === 1 ? `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)})` : `oklab(${e.toFixed(4)} ${r.toFixed(4)} ${t.toFixed(4)} / ${n.toFixed(3)})`;
    }
    const W = (e)=>e, M = (e)=>e, ee = (e)=>e, ue = 128;
    function me(e, r, t, n) {
        if (!Array.isArray(e)) return [];
        const o = n ?? Date.now(), a = [];
        for (const l of e){
            if (a.length >= t) break;
            const d = r(l, o);
            d && a.push(d);
        }
        return a;
    }
    const pe = new Set([
        "minor",
        "major",
        "both"
    ]), he = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function L(e, r, t) {
        return Math.min(t, Math.max(r, e));
    }
    function I(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function _e() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? ee(crypto.randomUUID()) : ee(`zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);
    }
    function ge(e) {
        return typeof e == "string" && pe.has(e) ? e : "both";
    }
    function ye(e) {
        const r = e && typeof e == "object" ? e : {}, t = typeof r.style == "string" && he.has(r.style) ? r.style : "none", n = L(I(r.widthCells) ?? 1, 1, 4), o = typeof r.opacity == "number" ? r.opacity : 1, a = L(o, 0, 1), l = {
            style: t,
            widthCells: n,
            opacity: a
        };
        if (t === "fade") {
            const d = typeof r.fadeStrength == "number" ? r.fadeStrength : .6;
            l.fadeStrength = L(d, 0, 1);
        }
        return t === "noted" && (l.notePitchCells = Math.max(1, I(r.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (l.hideInteriorBorder = typeof r.hideInteriorBorder == "boolean" ? r.hideInteriorBorder : !1), l;
    }
    function be(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function te(e, r) {
        return typeof e == "number" && Number.isFinite(e) ? e : r;
    }
    function ce(e, r = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, n = I(t.x1), o = I(t.y1), a = I(t.x2), l = I(t.y2);
        if (n === null || o === null || a === null || l === null) return null;
        const d = Math.min(n, a), s = Math.max(n, a), p = Math.min(o, l), f = Math.max(o, l);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : _e(),
            x1: M(d),
            y1: M(p),
            x2: M(s),
            y2: M(f),
            mode: ge(t.mode),
            edge: ye(t.edge),
            enabled: be(t.enabled),
            createdAt: te(t.createdAt, r),
            updatedAt: te(t.updatedAt, r)
        };
    }
    function we(e, r = Date.now()) {
        return me(e, ce, ue, r);
    }
    class ke {
        constructor(r, t){
            this.normalizeOne = r, this.normalizeAll = t;
        }
        items = [];
        getAll() {
            return this.items;
        }
        setAll(r) {
            return this.items = this.normalizeAll(r), this.items;
        }
        add(r) {
            const t = this.normalizeOne(r);
            if (!t) return {
                error: "Invalid payload"
            };
            const n = this.items.filter((o)=>o.id !== t.id);
            return this.items = this.normalizeAll([
                ...n,
                t
            ]), {};
        }
        update(r) {
            const t = this.normalizeOne(r);
            if (!t) return {
                error: "Invalid payload"
            };
            const n = this.items.findIndex((a)=>a.id === t.id);
            if (n < 0) return {
                error: `Item ${t.id} not found`
            };
            const o = this.items.slice();
            return o[n] = t, this.items = this.normalizeAll(o), {};
        }
        remove(r) {
            return this.items = this.items.filter((t)=>t.id !== r), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class Me extends ke {
        constructor(){
            super(ce, we);
        }
    }
    const g = 32, A = 5, x = 1024, Te = .04, U = .0035;
    function Ee([e, r, t]) {
        const n = e + .3963377774 * r + .2158037573 * t, o = e - .1055613458 * r - .0638541728 * t, a = e - .0894841775 * r - 1.291485548 * t, l = n ** 3, d = o ** 3, s = a ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * d + .2309699292 * s,
            -1.2684380046 * l + 2.6097574011 * d - .3413193965 * s,
            -.0041960863 * l - .7034186147 * d + 1.707614701 * s
        ];
    }
    function Z(e) {
        const r = Math.min(1, Math.max(0, e)), t = r <= .0031308 ? r * 12.92 : 1.055 * r ** (1 / 2.4) - .055;
        return Math.round(t * 255);
    }
    function Re(e) {
        const r = Ee(e);
        return `rgb(${Z(r[0] + U)} ${Z(r[1] + U)} ${Z(r[2] + U)})`;
    }
    function Ce(e, r) {
        const t = (e % x + x) % x, n = (r % x + x) % x;
        let o = t * 73856093 ^ n * 19349663;
        return o = Math.imul(o ^ o >>> 13, 1540483477), o ^= o >>> 15, (o >>> 0) / 4294967295 < Te;
    }
    function Ae(e) {
        const r = e.getContext("2d");
        if (!r) throw new Error("2D context unavailable");
        const t = r;
        let n = ie, o = 0, a = 0, l = 0, d = !0;
        function s() {
            if (!d) return;
            d = !1;
            const p = e.width, f = e.height;
            if (p === 0 || f === 0) return;
            t.fillStyle = Re(n.surface), t.fillRect(0, 0, p, f);
            const F = Math.floor(o / g), N = Math.ceil((o + p) / g), z = Math.floor(a / g), P = Math.ceil((a + f) / g), V = D(Q(n.surface, n.ink, n.minor_t)), c = D(Q(n.surface, n.ink, n.major_t));
            for (const T of [
                !1,
                !0
            ]){
                t.strokeStyle = T ? c : V, t.lineWidth = g * (T ? .12 : .04), t.globalAlpha = T ? .72 : .85, t.beginPath();
                for(let u = F; u <= N; u++){
                    if ((u % A + A) % A === 0 !== T) continue;
                    const m = u * g - o;
                    t.moveTo(m, 0), t.lineTo(m, f);
                }
                for(let u = z; u <= P; u++){
                    if ((u % A + A) % A === 0 !== T) continue;
                    const m = u * g - a;
                    t.moveTo(0, m), t.lineTo(p, m);
                }
                t.stroke();
            }
            t.globalAlpha = 1;
            const _ = n.ink_opacity * l;
            if (_ > .001) {
                t.fillStyle = D(n.ink), t.globalAlpha = _;
                const T = g * .08;
                for(let u = z; u <= P; u++)for(let m = F; m <= N; m++){
                    if (!Ce(m, u)) continue;
                    const H = m * g - o, q = u * g - a;
                    typeof t.roundRect == "function" ? (t.beginPath(), t.roundRect(H, q, g, g, T), t.fill()) : t.fillRect(H, q, g, g);
                }
                t.globalAlpha = 1;
            }
        }
        return {
            tick: s,
            renderOnly: s,
            resize (p, f) {
                d = !0, s();
            },
            setCamera (p, f) {
                p === o && f === a || (o = p, a = f, d = !0);
            },
            setInitFade (p) {
                const f = Math.min(1, Math.max(0, p));
                f !== l && (l = f, d = !0);
            },
            setTheme (p) {
                n = p, d = !0, s();
            },
            free () {}
        };
    }
    const xe = 1e3 / 60, Ie = 2;
    function ze(e, r, t, n) {
        return r !== n.lastCameraX || t !== n.lastCameraY || e < n.forceRenderUntil ? !0 : e - n.lastRenderTime >= xe - Ie;
    }
    const h = fe("Renderer"), de = self;
    let i = null, k = null, b = 0, w = 0, S = null, $ = 0, Y = 0, re = Number.NaN, ne = Number.NaN;
    const Pe = 300;
    let oe = 0;
    const E = new Me;
    let C = ie, ae = !1;
    const Se = 1e3;
    let j = 0, v = 0;
    function y(e) {
        de.postMessage(e);
    }
    function R(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function Ge(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    function Oe(e) {
        return e % X === 0 ? "base_tick" : "render_only";
    }
    function G() {
        y({
            type: "zones_state",
            zones: E.getAll()
        });
    }
    function B(e) {
        y({
            type: "zones_error",
            message: e
        });
    }
    function O() {
        i?.setZones?.(E.getAll());
    }
    function Fe(e) {
        E.setAll(e), O(), G();
    }
    const Ne = {
        worldCols: M(0),
        worldRows: M(0),
        paddedRows: 0,
        wordsPerRow: 0,
        gridPitch: W(0)
    };
    function De() {
        try {
            return new OffscreenCanvas(1, 1).getContext("webgl2") != null;
        } catch  {
            return !1;
        }
    }
    async function se() {
        if (!k) return !1;
        try {
            const { WebglGameOfLife: e } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), r = Math.floor(Math.random() * 4294967296), t = await e.new_offscreen(k, r);
            return i = {
                tick: ()=>t.tick_and_render(),
                renderOnly: ()=>t.render_only(),
                resize: (n, o)=>t.resize(n, o),
                setCamera: (n, o)=>t.set_camera(n, o),
                setTransition: (n)=>t.set_transition(n),
                setInitFade: (n)=>t.set_init_fade(n),
                toggleCell: (n, o)=>t.toggle_cell(n, o),
                setTheme: (n)=>{
                    try {
                        t.set_theme(le(n));
                    } catch (o) {
                        h.error("WebGL2 theme update failed:", R(o));
                    }
                },
                free: ()=>t.free()
            }, i.setCamera?.(b, w), i.setTheme?.(C), h.info("WebGL2 fallback renderer ready"), y({
                type: "ready",
                backend: "webgl2",
                gridInfo: {
                    worldCols: M(t.world_cols()),
                    worldRows: M(t.world_rows()),
                    paddedRows: 0,
                    wordsPerRow: 0,
                    gridPitch: W(t.grid_pitch())
                }
            }), !0;
        } catch (e) {
            return h.error("WebGL2 init failed:", R(e)), y({
                type: "error",
                phase: "gpu-init",
                message: R(e)
            }), !1;
        }
    }
    function Le(e) {
        return typeof e == "object" && e !== null && typeof e.type == "string";
    }
    de.onmessage = async (e)=>{
        if (!Le(e.data)) {
            h.warn("worker: ignored malformed inbound message", e.data);
            return;
        }
        switch(e.data.type){
            case "init":
                {
                    k = e.data.canvas, C = e.data.theme, h.debug("Init received — canvas", k.width, "x", k.height);
                    const r = performance.now(), t = e.data.forceBackend;
                    if (t === "webgl2") {
                        await se();
                        break;
                    }
                    let n = !1;
                    if (t !== "static") try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, h.debug("GPU: probe passed — adapter found");
                    } catch (a) {
                        h.info("GPU: probe failed, will use CPU renderer:", R(a)), y({
                            type: "error",
                            phase: "gpu-probe",
                            message: R(a)
                        });
                    }
                    const o = performance.now();
                    if (n) try {
                        const { GpuGameOfLife: a } = await import("./game_of_life_gpu-CLrhJ3vV.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), l = performance.now();
                        h.debug("GPU: module loaded, initialising surface...");
                        const d = Math.floor(Math.random() * 4294967296), s = await a.new_offscreen(k, 0, d), p = performance.now(), f = s, F = (c)=>{
                            if (typeof f.set_zones == "function") try {
                                f.set_zones(c);
                            } catch (_) {
                                B(`GPU zone update failed: ${R(_)}`);
                            }
                        }, N = (c)=>{
                            if (typeof f.set_theme == "function") try {
                                f.set_theme(le(c));
                            } catch (_) {
                                h.error("GPU theme update failed:", R(_));
                            }
                        }, z = ()=>({
                                worldCols: M(s.world_cols()),
                                worldRows: M(s.world_rows()),
                                paddedRows: s.padded_rows(),
                                wordsPerRow: s.words_per_row(),
                                gridPitch: W(s.grid_pitch())
                            });
                        let P = !1;
                        i = {
                            tick: ()=>s.tick_and_render(),
                            renderOnly: ()=>s.render_only(),
                            resize: (c, _)=>s.resize(c, _),
                            setCamera: (c, _)=>s.set_camera(c, _),
                            setTransition: (c)=>s.set_transition(c),
                            setInitFade: (c)=>s.set_init_fade(c),
                            toggleCell: (c, _)=>{
                                s.toggle_cell(c, _), s.flush_and_render();
                            },
                            setZones: (c)=>F(c),
                            setTheme: (c)=>N(c),
                            gridInfo: z,
                            pullGpuPassDurations: ()=>{
                                if (!s.timestamp_query_supported()) return !P && J && (P = !0, h.info("GPU timestamp queries unavailable (adapter did not grant TIMESTAMP_QUERY).  In Chrome, enable chrome://flags/#enable-unsafe-webgpu to opt in.  Per-pass GPU breakdown will not be emitted.")), null;
                                const c = s.last_compute_tick_ms(), _ = s.last_xor_edit_ms(), T = s.last_or_edit_ms(), u = s.last_render_pass_ms(), m = {
                                    computeTickMs: c ?? null,
                                    xorEditMs: _ ?? null,
                                    orEditMs: T ?? null,
                                    renderPassMs: u ?? null
                                };
                                return m.computeTickMs === null && m.xorEditMs === null && m.orEditMs === null && m.renderPassMs === null ? null : m;
                            },
                            pullTickBreakdown: ()=>({
                                    reseedMs: s.last_reseed_ms(),
                                    presentMs: s.last_present_ms()
                                }),
                            free: ()=>s.free()
                        }, S && (i.resize(S.width, S.height), S = null), i.setCamera?.(b, w), i.setTransition?.(1), i.setZones?.(E.getAll()), i.setTheme?.(C), h.info("GPU renderer ready"), y({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: z()
                        });
                        break;
                    } catch (a) {
                        const l = R(a);
                        h.error("GPU init failed after probe passed (canvas may be locked):", l), y({
                            type: "error",
                            phase: "gpu-init",
                            message: l
                        });
                        break;
                    }
                    if (t !== "static" && De() && await se()) break;
                    try {
                        i = Ae(k), i.setCamera?.(b, w), i.setTheme?.(C), h.info("Static fallback renderer ready"), y({
                            type: "ready",
                            backend: "cpu",
                            gridInfo: Ne
                        });
                    } catch (a) {
                        const l = R(a);
                        h.error("Static fallback init failed:", l), y({
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
                    const r = i;
                    b = e.data.cameraX, w = e.data.cameraY, i.setCamera?.(b, w);
                    const t = performance.now();
                    if (!ze(t, b, w, {
                        lastRenderTime: Y,
                        lastCameraX: re,
                        lastCameraY: ne,
                        forceRenderUntil: oe
                    })) break;
                    if (Y = t, re = b, ne = w, $++, v < 1) {
                        const a = performance.now();
                        j === 0 && (j = a), v = Math.min(1, (a - j) / Se), i.setInitFade?.(v);
                    }
                    switch(Oe($)){
                        case "base_tick":
                            i.setTransition?.(0), r.tick();
                            break;
                        case "render_only":
                            if (i.setTransition?.(Ge($ % X / X)), r.renderOnly) {
                                const a = r.renderOnly;
                                a();
                            }
                            break;
                    }
                    ae || (ae = !0, y({
                        type: "first_frame_painted"
                    }));
                    break;
                }
            case "resize":
                {
                    if (h.debug("Resize →", e.data.width, "x", e.data.height), !k) break;
                    if (k.width = e.data.width, k.height = e.data.height, !i) {
                        S = {
                            width: e.data.width,
                            height: e.data.height
                        };
                        break;
                    }
                    i.resize(e.data.width, e.data.height), i.setCamera?.(b, w), i.setTransition?.(1), i.setZones?.(E.getAll()), i.setTheme?.(C), i.gridInfo && y({
                        type: "grid_info",
                        gridInfo: i.gridInfo()
                    });
                    break;
                }
            case "camera":
                b = e.data.x, w = e.data.y, i?.setCamera?.(b, w);
                break;
            case "toggle_cell":
                i?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                Fe(e.data.zones);
                break;
            case "add_zone":
                {
                    const r = E.add(e.data.zone);
                    if (r.error) {
                        B(r.error);
                        break;
                    }
                    O(), G();
                    break;
                }
            case "update_zone":
                {
                    const r = E.update(e.data.zone);
                    if (r.error) {
                        B(r.error);
                        break;
                    }
                    O(), G();
                    break;
                }
            case "remove_zone":
                E.remove(e.data.id), O(), G();
                break;
            case "clear_zones":
                E.clear(), O(), G();
                break;
            case "set_theme":
                C = e.data.theme, i?.setTheme?.(C), oe = performance.now() + Pe, Y = 0;
                break;
        }
    };
})();
