(async ()=>{
    const h = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    }, _ = h.warn;
    function P(r) {
        const n = (a, o)=>{
            h[a] < _ || console[a](`[${r}]`, ...o);
        };
        return {
            debug: (...a)=>n("debug", a),
            info: (...a)=>n("info", a),
            warn: (...a)=>n("warn", a),
            error: (...a)=>n("error", a)
        };
    }
    const i = P("Renderer"), y = self;
    let t = null, f = 0;
    const w = 210;
    let b = 0;
    function l(r) {
        y.postMessage(r);
    }
    function u(r) {
        return r instanceof Error ? r.message : String(r);
    }
    function m(r) {
        const n = Math.min(1, Math.max(0, r));
        return n * n * (3 - 2 * n);
    }
    const g = 5, k = "#0a0a0f", C = "#7c4dff";
    async function R(r) {
        i.debug("CPU: loading WASM bridge...");
        const n = r.getContext("2d"), { WasmBridge: a } = await import("./index-BIHyjIdh.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), o = await a.create();
        return r.width = (g + 1) * o.width + 1, r.height = (g + 1) * o.height + 1, i.debug("CPU: bridge ready, grid", o.width, "x", o.height), {
            tick () {
                o.tick();
                const s = o.getCells();
                for(let e = 0; e < o.height; e++)for(let c = 0; c < o.width; c++){
                    const d = e * o.width + c;
                    n.fillStyle = s[d] === 0 ? k : C, n.fillRect(c * (g + 1) + 1, e * (g + 1) + 1, g, g);
                }
            },
            resize (s, e) {},
            free () {}
        };
    }
    y.onmessage = async (r)=>{
        switch(r.data.type){
            case "init":
                {
                    const { canvas: n, cellPx: a } = r.data;
                    i.debug("Init received — canvas", n.width, "x", n.height, "cell_px", a), i.debug("GPU: probing WebGPU availability...");
                    let o = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        o = !0, i.debug("GPU: probe passed — adapter found");
                    } catch (s) {
                        i.info("GPU: probe failed, will use CPU renderer:", u(s)), l({
                            type: "error",
                            phase: "gpu-probe",
                            message: u(s)
                        });
                    }
                    if (o) {
                        i.debug("GPU: loading wasm module...");
                        try {
                            const { GpuGameOfLife: s } = await import("./game_of_life_gpu-CZEkl_rm.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            });
                            i.debug("GPU: module loaded, initialising surface...");
                            const e = await s.new_offscreen(n, a), c = ()=>({
                                    screenCols: e.screen_cols(),
                                    screenRows: e.screen_rows(),
                                    paddedRows: e.padded_rows(),
                                    wordsPerRow: e.words_per_row(),
                                    gridPitch: e.grid_pitch()
                                });
                            t = {
                                tick: ()=>e.tick_and_render(),
                                renderOnly: ()=>e.render_only(),
                                resize: (d, p)=>{
                                    n.width = d, n.height = p, e.resize(d, p);
                                },
                                setScroll: (d)=>e.set_scroll(d),
                                setTransition: (d)=>e.set_transition(d),
                                toggleCell: (d, p)=>{
                                    e.toggle_cell(d, p), e.flush_and_render();
                                },
                                gridInfo: c,
                                free: ()=>e.free()
                            }, t.setScroll?.(f), t.setTransition?.(1), i.info("GPU renderer ready"), l({
                                type: "ready",
                                backend: "gpu",
                                gridInfo: c()
                            });
                            break;
                        } catch (s) {
                            const e = u(s);
                            i.error("GPU init failed after probe passed (canvas may be locked):", e), l({
                                type: "error",
                                phase: "gpu-init",
                                message: e
                            });
                            break;
                        }
                    }
                    i.debug("CPU: starting software renderer...");
                    try {
                        t = await R(n), t.setScroll?.(f), i.info("CPU renderer ready"), l({
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
                        const e = u(s);
                        i.error("CPU init failed:", e), l({
                            type: "error",
                            phase: "cpu-init",
                            message: e
                        });
                    }
                    break;
                }
            case "frame":
                b++, t?.renderOnly && b % w !== 0 ? (t.setTransition?.(m(b % w / w)), t.renderOnly()) : (t?.setTransition?.(0), t?.tick());
                break;
            case "resize":
                i.debug("Resize →", r.data.width, "x", r.data.height), t?.resize(r.data.width, r.data.height), t?.setScroll?.(f), t?.setTransition?.(1), t?.gridInfo && l({
                    type: "grid_info",
                    gridInfo: t.gridInfo()
                });
                break;
            case "scroll":
                f = r.data.scrollY, t?.setScroll?.(f);
                break;
            case "toggle_cell":
                t?.toggleCell?.(r.data.cx, r.data.cy);
                break;
            case "stop":
                i.debug("Stop received, freeing renderer"), t?.free(), t = null;
                break;
        }
    };
})();
