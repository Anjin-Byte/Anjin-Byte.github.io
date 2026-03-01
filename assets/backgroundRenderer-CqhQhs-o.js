(async ()=>{
    const f = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    }, b = f.warn;
    function h(e) {
        const i = (r, n)=>{
            f[r] < b || console[r](`[${e}]`, ...n);
        };
        return {
            debug: (...r)=>i("debug", r),
            info: (...r)=>i("info", r),
            warn: (...r)=>i("warn", r),
            error: (...r)=>i("error", r)
        };
    }
    const a = h("Renderer"), l = self;
    let s = null;
    function g(e) {
        l.postMessage(e);
    }
    function u(e) {
        return e instanceof Error ? e.message : String(e);
    }
    const c = 5, w = "#0a0a0f", y = "#7c4dff";
    async function P(e) {
        a.debug("CPU: loading WASM bridge...");
        const i = e.getContext("2d"), { WasmBridge: r } = await import("./index-BIHyjIdh.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), n = await r.create();
        return e.width = (c + 1) * n.width + 1, e.height = (c + 1) * n.height + 1, a.debug("CPU: bridge ready, grid", n.width, "x", n.height), {
            tick () {
                n.tick();
                const o = n.getCells();
                for(let t = 0; t < n.height; t++)for(let d = 0; d < n.width; d++){
                    const p = t * n.width + d;
                    i.fillStyle = o[p] === 0 ? w : y, i.fillRect(d * (c + 1) + 1, t * (c + 1) + 1, c, c);
                }
            },
            resize (o, t) {},
            free () {}
        };
    }
    l.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: i, cellPx: r } = e.data;
                    a.debug("Init received — canvas", i.width, "x", i.height, "cell_px", r), a.debug("GPU: probing WebGPU availability...");
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
                            const { GpuGameOfLife: o } = await import("./game_of_life_gpu-D2-rye01.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            });
                            a.debug("GPU: module loaded, initialising surface...");
                            const t = await o.new_offscreen(i, r);
                            s = {
                                tick: ()=>t.tick_and_render(),
                                resize: (d, p)=>{
                                    i.width = d, i.height = p, t.resize(d, p);
                                },
                                free: ()=>t.free()
                            }, a.info("GPU renderer ready"), g({
                                type: "ready",
                                backend: "gpu"
                            });
                            break;
                        } catch (o) {
                            const t = u(o);
                            a.error("GPU init failed after probe passed (canvas may be locked):", t), g({
                                type: "error",
                                phase: "gpu-init",
                                message: t
                            });
                            break;
                        }
                    }
                    a.debug("CPU: starting software renderer...");
                    try {
                        s = await P(i), a.info("CPU renderer ready"), g({
                            type: "ready",
                            backend: "cpu"
                        });
                    } catch (o) {
                        const t = u(o);
                        a.error("CPU init failed:", t), g({
                            type: "error",
                            phase: "cpu-init",
                            message: t
                        });
                    }
                    break;
                }
            case "frame":
                s?.tick();
                break;
            case "resize":
                a.debug("Resize →", e.data.width, "x", e.data.height), s?.resize(e.data.width, e.data.height);
                break;
            case "stop":
                a.debug("Stop received, freeing renderer"), s?.free(), s = null;
                break;
        }
    };
})();
