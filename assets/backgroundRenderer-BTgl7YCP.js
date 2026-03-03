(async ()=>{
    const h = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    }, y = h.warn;
    function m(e) {
        const r = (n, s)=>{
            h[n] < y || console[n](`[${e}]`, ...s);
        };
        return {
            debug: (...n)=>r("debug", n),
            info: (...n)=>r("info", n),
            warn: (...n)=>r("warn", n),
            error: (...n)=>r("error", n)
        };
    }
    const i = m("Renderer"), w = self;
    let a = null, l = 0;
    const f = 210;
    let b = 0;
    function g(e) {
        w.postMessage(e);
    }
    function p(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function k(e) {
        const r = Math.min(1, Math.max(0, e));
        return r * r * (3 - 2 * r);
    }
    const c = 5, P = "#0a0a0f", U = "#7c4dff";
    async function C(e) {
        i.debug("CPU: loading WASM bridge...");
        const r = e.getContext("2d"), { WasmBridge: n } = await import("./index-BIHyjIdh.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), s = await n.create();
        return e.width = (c + 1) * s.width + 1, e.height = (c + 1) * s.height + 1, i.debug("CPU: bridge ready, grid", s.width, "x", s.height), {
            tick () {
                s.tick();
                const o = s.getCells();
                for(let t = 0; t < s.height; t++)for(let d = 0; d < s.width; d++){
                    const u = t * s.width + d;
                    r.fillStyle = o[u] === 0 ? P : U, r.fillRect(d * (c + 1) + 1, t * (c + 1) + 1, c, c);
                }
            },
            resize (o, t) {},
            free () {}
        };
    }
    w.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: r, cellPx: n } = e.data;
                    i.debug("Init received — canvas", r.width, "x", r.height, "cell_px", n), i.debug("GPU: probing WebGPU availability...");
                    let s = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        s = !0, i.debug("GPU: probe passed — adapter found");
                    } catch (o) {
                        i.info("GPU: probe failed, will use CPU renderer:", p(o)), g({
                            type: "error",
                            phase: "gpu-probe",
                            message: p(o)
                        });
                    }
                    if (s) {
                        i.debug("GPU: loading wasm module...");
                        try {
                            const { GpuGameOfLife: o } = await import("./game_of_life_gpu-2Z8iuLJI.js").then(async (m)=>{
                                await m.__tla;
                                return m;
                            });
                            i.debug("GPU: module loaded, initialising surface...");
                            const t = await o.new_offscreen(r, n);
                            a = {
                                tick: ()=>t.tick_and_render(),
                                renderOnly: ()=>t.render_only(),
                                resize: (d, u)=>{
                                    r.width = d, r.height = u, t.resize(d, u);
                                },
                                setScroll: (d)=>t.set_scroll(d),
                                setTransition: (d)=>t.set_transition(d),
                                free: ()=>t.free()
                            }, a.setScroll?.(l), a.setTransition?.(1), i.info("GPU renderer ready"), g({
                                type: "ready",
                                backend: "gpu"
                            });
                            break;
                        } catch (o) {
                            const t = p(o);
                            i.error("GPU init failed after probe passed (canvas may be locked):", t), g({
                                type: "error",
                                phase: "gpu-init",
                                message: t
                            });
                            break;
                        }
                    }
                    i.debug("CPU: starting software renderer...");
                    try {
                        a = await C(r), a.setScroll?.(l), i.info("CPU renderer ready"), g({
                            type: "ready",
                            backend: "cpu"
                        });
                    } catch (o) {
                        const t = p(o);
                        i.error("CPU init failed:", t), g({
                            type: "error",
                            phase: "cpu-init",
                            message: t
                        });
                    }
                    break;
                }
            case "frame":
                b++, a?.renderOnly && b % f !== 0 ? (a.setTransition?.(k(b % f / f)), a.renderOnly()) : (a?.setTransition?.(0), a?.tick());
                break;
            case "resize":
                i.debug("Resize →", e.data.width, "x", e.data.height), a?.resize(e.data.width, e.data.height), a?.setScroll?.(l), a?.setTransition?.(1);
                break;
            case "scroll":
                l = e.data.scrollY, a?.setScroll?.(l);
                break;
            case "stop":
                i.debug("Stop received, freeing renderer"), a?.free(), a = null;
                break;
        }
    };
})();
