(async ()=>{
    const b = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    }, w = b.warn;
    function y(e) {
        const i = (t, n)=>{
            b[t] < w || console[t](`[${e}]`, ...n);
        };
        return {
            debug: (...t)=>i("debug", t),
            info: (...t)=>i("info", t),
            warn: (...t)=>i("warn", t),
            error: (...t)=>i("error", t)
        };
    }
    const a = y("Renderer"), h = self;
    let s = null, l = 0;
    const k = 32;
    let f = 0;
    function g(e) {
        h.postMessage(e);
    }
    function u(e) {
        return e instanceof Error ? e.message : String(e);
    }
    const c = 5, m = "#0a0a0f", P = "#7c4dff";
    async function U(e) {
        a.debug("CPU: loading WASM bridge...");
        const i = e.getContext("2d"), { WasmBridge: t } = await import("./index-BIHyjIdh.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), n = await t.create();
        return e.width = (c + 1) * n.width + 1, e.height = (c + 1) * n.height + 1, a.debug("CPU: bridge ready, grid", n.width, "x", n.height), {
            tick () {
                n.tick();
                const o = n.getCells();
                for(let r = 0; r < n.height; r++)for(let d = 0; d < n.width; d++){
                    const p = r * n.width + d;
                    i.fillStyle = o[p] === 0 ? m : P, i.fillRect(d * (c + 1) + 1, r * (c + 1) + 1, c, c);
                }
            },
            resize (o, r) {},
            free () {}
        };
    }
    h.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: i, cellPx: t } = e.data;
                    a.debug("Init received — canvas", i.width, "x", i.height, "cell_px", t), a.debug("GPU: probing WebGPU availability...");
                    let n = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        n = !0, a.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        a.info("GPU: probe failed, will use CPU renderer:", u(o)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: u(o)
                        });
                    }
                    if (n) {
                        a.debug("GPU: loading wasm module...");
                        try {
                            const { GpuGameOfLife: o } = await import("./game_of_life_gpu-4lQu_B9N.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            });
                            a.debug("GPU: module loaded, initialising surface...");
                            const r = await o.new_offscreen(i, t);
                            s = {
                                tick: ()=>r.tick_and_render(),
                                renderOnly: ()=>r.render_only(),
                                resize: (d, p)=>{
                                    i.width = d, i.height = p, r.resize(d, p);
                                },
                                setScroll: (d)=>r.set_scroll(d),
                                free: ()=>r.free()
                            }, s.setScroll?.(l), a.info("GPU renderer ready"), g({
                                type: "ready",
                                backend: "gpu"
                            });
                            break;
                        } catch (o) {
                            const r = u(o);
                            a.error("GPU init failed after probe passed (canvas may be locked):", r), g({
                                type: "error",
                                phase: "gpu-init",
                                message: r
                            });
                            break;
                        }
                    }
                    a.debug("CPU: starting software renderer...");
                    try {
                        s = await U(i), s.setScroll?.(l), a.info("CPU renderer ready"), g({
                            type: "ready",
                            backend: "cpu"
                        });
                    } catch (o) {
                        const r = u(o);
                        a.error("CPU init failed:", r), g({
                            type: "error",
                            phase: "cpu-init",
                            message: r
                        });
                    }
                    break;
                }
            case "frame":
                f++, s?.renderOnly && f % k !== 0 ? s.renderOnly() : s?.tick();
                break;
            case "resize":
                a.debug("Resize →", e.data.width, "x", e.data.height), s?.resize(e.data.width, e.data.height), s?.setScroll?.(l);
                break;
            case "scroll":
                l = e.data.scrollY, s?.setScroll?.(l);
                break;
            case "stop":
                a.debug("Stop received, freeing renderer"), s?.free(), s = null;
                break;
        }
    };
})();
