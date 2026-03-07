(async ()=>{
    const pe = ()=>{};
    function Se(t) {
        const n = `[${t}]`;
        return {
            debug: pe,
            info: pe,
            warn: (...e)=>console.warn(n, ...e),
            error: (...e)=>console.error(n, ...e)
        };
    }
    const Te = 128, $e = new Set([
        "minor",
        "major",
        "both"
    ]), Be = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function Q(t, n, e) {
        return Math.min(e, Math.max(n, t));
    }
    function H(t) {
        return typeof t != "number" || !Number.isFinite(t) ? null : Math.trunc(t);
    }
    function Ce() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function Ee(t) {
        return typeof t == "string" && $e.has(t) ? t : "both";
    }
    function Fe(t) {
        const n = t && typeof t == "object" ? t : {}, e = typeof n.style == "string" && Be.has(n.style) ? n.style : "none", o = Q(H(n.widthCells) ?? 1, 1, 4), r = typeof n.opacity == "number" ? n.opacity : 1, s = Q(r, 0, 1), i = {
            style: e,
            widthCells: o,
            opacity: s
        };
        if (e === "fade") {
            const d = typeof n.fadeStrength == "number" ? n.fadeStrength : .6;
            i.fadeStrength = Q(d, 0, 1);
        }
        return e === "noted" && (i.notePitchCells = Math.max(1, H(n.notePitchCells) ?? 2)), (e === "bold-major" || e === "noted") && (i.hideInteriorBorder = typeof n.hideInteriorBorder == "boolean" ? n.hideInteriorBorder : !1), i;
    }
    function Ue(t) {
        return typeof t == "boolean" ? t : !0;
    }
    function ge(t, n) {
        return typeof t == "number" && Number.isFinite(t) ? t : n;
    }
    function de(t, n = Date.now()) {
        if (!t || typeof t != "object") return null;
        const e = t, o = H(e.x1), r = H(e.y1), s = H(e.x2), i = H(e.y2);
        if (o === null || r === null || s === null || i === null) return null;
        const d = Math.min(o, s), u = Math.max(o, s), f = Math.min(r, i), h = Math.max(r, i);
        return {
            id: typeof e.id == "string" && e.id.length > 0 ? e.id : Ce(),
            x1: d,
            y1: f,
            x2: u,
            y2: h,
            mode: Ee(e.mode),
            edge: Fe(e.edge),
            enabled: Ue(e.enabled),
            createdAt: ge(e.createdAt, n),
            updatedAt: ge(e.updatedAt, n)
        };
    }
    function ee(t, n = Date.now()) {
        if (!Array.isArray(t)) return [];
        const e = [];
        for (const o of t){
            if (e.length >= Te) break;
            const r = de(o, n);
            r && e.push(r);
        }
        return e;
    }
    class Oe {
        zones = [];
        getAll() {
            return this.zones;
        }
        setAll(n) {
            return this.zones = ee(n), this.zones;
        }
        add(n) {
            const e = de(n);
            if (!e) return {
                zones: this.zones,
                error: "Invalid zone payload"
            };
            const o = this.zones.filter((r)=>r.id !== e.id);
            return this.zones = ee([
                ...o,
                e
            ]), {
                zones: this.zones
            };
        }
        update(n) {
            const e = de(n);
            if (!e) return {
                zones: this.zones,
                error: "Invalid zone payload"
            };
            const o = this.zones.findIndex((s)=>s.id === e.id);
            if (o < 0) return {
                zones: this.zones,
                error: `Zone not found: ${e.id}`
            };
            const r = this.zones.slice();
            return r[o] = e, this.zones = ee(r), {
                zones: this.zones
            };
        }
        remove(n) {
            return this.zones = this.zones.filter((e)=>e.id !== n), this.zones;
        }
        clear() {
            return this.zones = [], this.zones;
        }
    }
    const Ge = 32, U = [
        .49,
        .3,
        1,
        .6
    ], He = new Set([
        "solid",
        "checkerboard",
        "stripes",
        "dots",
        "bitmap"
    ]), Le = new Set([
        "alpha",
        "multiply",
        "screen"
    ]);
    function O(t, n, e) {
        return Math.min(e, Math.max(n, t));
    }
    function S(t) {
        return typeof t != "number" || !Number.isFinite(t) ? null : t;
    }
    function V(t) {
        const n = S(t);
        return n === null ? null : Math.trunc(n);
    }
    function Pe() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function Ne(t) {
        return typeof t == "string" && He.has(t) ? t : "solid";
    }
    function Xe(t) {
        return typeof t == "string" && Le.has(t) ? t : "alpha";
    }
    function We(t) {
        const n = t && typeof t == "object" ? t : {}, e = Ne(n.kind), o = {
            kind: e
        };
        return e === "solid" ? (o.coverage = O(S(n.coverage) ?? 1, 0, 1), o.solidR = O(S(n.solidR) ?? U[0], 0, 1), o.solidG = O(S(n.solidG) ?? U[1], 0, 1), o.solidB = O(S(n.solidB) ?? U[2], 0, 1)) : e === "checkerboard" ? o.cellSize = Math.max(1, S(n.cellSize) ?? 2) : e === "stripes" ? o.pitchCells = Math.max(2, S(n.pitchCells) ?? 4) : e === "dots" && (o.dotRadius = Math.max(.1, S(n.dotRadius) ?? .4), o.dotSpacing = Math.max(2, S(n.dotSpacing) ?? 3)), o;
    }
    function Ze(t) {
        return !Array.isArray(t) || t.length < 4 ? [
            ...U
        ] : [
            O(S(t[0]) ?? U[0], 0, 1),
            O(S(t[1]) ?? U[1], 0, 1),
            O(S(t[2]) ?? U[2], 0, 1),
            O(S(t[3]) ?? U[3], 0, 1)
        ];
    }
    function Ye(t) {
        return typeof t == "boolean" ? t : !0;
    }
    function ye(t, n) {
        return typeof t == "number" && Number.isFinite(t) ? t : n;
    }
    function fe(t, n = Date.now()) {
        if (!t || typeof t != "object") return null;
        const e = t, o = V(e.x1), r = V(e.y1), s = V(e.x2), i = V(e.y2);
        return o === null || r === null || s === null || i === null ? null : {
            id: typeof e.id == "string" && e.id.length > 0 ? e.id : Pe(),
            x1: Math.min(o, s),
            y1: Math.min(r, i),
            x2: Math.max(o, s),
            y2: Math.max(r, i),
            pattern: We(e.pattern),
            tint: Ze(e.tint),
            blendMode: Xe(e.blendMode),
            suppressCells: typeof e.suppressCells == "boolean" ? e.suppressCells : !1,
            enabled: Ye(e.enabled),
            createdAt: ye(e.createdAt, n),
            updatedAt: ye(e.updatedAt, n)
        };
    }
    function te(t, n = Date.now()) {
        if (!Array.isArray(t)) return [];
        const e = [];
        for (const o of t){
            if (e.length >= Ge) break;
            const r = fe(o, n);
            r && e.push(r);
        }
        return e;
    }
    class je {
        decals = [];
        getAll() {
            return this.decals;
        }
        setAll(n) {
            return this.decals = te(n), this.decals;
        }
        add(n) {
            const e = fe(n);
            if (!e) return {
                decals: this.decals,
                error: "Invalid decal payload"
            };
            const o = this.decals.filter((r)=>r.id !== e.id);
            return this.decals = te([
                ...o,
                e
            ]), {
                decals: this.decals
            };
        }
        update(n) {
            const e = fe(n);
            if (!e) return {
                decals: this.decals,
                error: "Invalid decal payload"
            };
            const o = this.decals.findIndex((s)=>s.id === e.id);
            if (o < 0) return {
                decals: this.decals,
                error: `Decal not found: ${e.id}`
            };
            const r = this.decals.slice();
            return r[o] = e, this.decals = te(r), {
                decals: this.decals
            };
        }
        remove(n) {
            return this.decals = this.decals.filter((e)=>e.id !== n), this.decals;
        }
        clear() {
            return this.decals = [], this.decals;
        }
    }
    const ve = 4, Ke = 8;
    function J(t) {
        return typeof t != "number" || !Number.isFinite(t) ? null : Math.trunc(t);
    }
    function qe() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function me(t, n) {
        return typeof t == "number" && Number.isFinite(t) ? t : n;
    }
    function he(t, n = Date.now()) {
        if (!t || typeof t != "object") return null;
        const e = t, o = J(e.x1), r = J(e.y1), s = J(e.x2), i = J(e.y2);
        return o === null || r === null || s === null || i === null ? null : {
            id: typeof e.id == "string" && e.id.length > 0 ? e.id : qe(),
            x1: Math.min(o, s),
            y1: Math.min(r, i),
            x2: Math.max(o, s),
            y2: Math.max(r, i),
            multiplier: ve,
            enabled: typeof e.enabled == "boolean" ? e.enabled : !0,
            showGrid: typeof e.showGrid == "boolean" ? e.showGrid : !0,
            showBaseGrid: typeof e.showBaseGrid == "boolean" ? e.showBaseGrid : !0,
            showBorder: typeof e.showBorder == "boolean" ? e.showBorder : !0,
            createdAt: me(e.createdAt, n),
            updatedAt: me(e.updatedAt, n)
        };
    }
    function Ve(t, n) {
        return t.x1 <= n.x2 && t.x2 >= n.x1 && t.y1 <= n.y2 && t.y2 >= n.y1;
    }
    function ne(t, n = Date.now()) {
        if (!Array.isArray(t)) return [];
        const e = [];
        for (const o of t){
            if (e.length >= Ke) break;
            const r = he(o, n);
            !r || e.some((i)=>Ve(i, r)) || e.push(r);
        }
        return e;
    }
    class Je {
        regions = [];
        getAll() {
            return this.regions;
        }
        setAll(n) {
            return this.regions = ne(n), this.regions;
        }
        add(n) {
            const e = he(n);
            if (!e) return {
                regions: this.regions,
                error: "Invalid hi-res region payload"
            };
            const o = this.regions.filter((r)=>r.id !== e.id);
            return this.regions = ne([
                ...o,
                e
            ]), {
                regions: this.regions
            };
        }
        update(n) {
            const e = he(n);
            if (!e) return {
                regions: this.regions,
                error: "Invalid hi-res region payload"
            };
            const o = this.regions.findIndex((s)=>s.id === e.id);
            if (o < 0) return {
                regions: this.regions,
                error: `Region not found: ${e.id}`
            };
            const r = this.regions.slice();
            return r[o] = e, this.regions = ne(r), {
                regions: this.regions
            };
        }
        remove(n) {
            return this.regions = this.regions.filter((e)=>e.id !== n), this.regions;
        }
        clear() {
            return this.regions = [], this.regions;
        }
    }
    const Me = "#1a1a2e", Qe = 8, et = "bold 24px monospace", tt = new Set([
        "sdf",
        "cells",
        "both"
    ]), nt = /^#[0-9a-fA-F]{6}$/;
    function rt(t) {
        return typeof t != "number" || !Number.isFinite(t) ? null : t;
    }
    function re(t) {
        const n = rt(t);
        return n === null ? null : Math.trunc(n);
    }
    function ot() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function be(t, n) {
        return typeof t == "number" && Number.isFinite(t) ? t : n;
    }
    function ue(t, n = Date.now()) {
        if (!t || typeof t != "object") return null;
        const e = t;
        if (typeof e.text != "string" || e.text.length === 0) return null;
        const o = re(e.cellX), r = re(e.cellY);
        if (o === null || r === null) return null;
        const s = Math.max(1, re(e.cellsWide) ?? 100), i = typeof e.renderMode == "string" && tt.has(e.renderMode) ? e.renderMode : "cells";
        return {
            id: typeof e.id == "string" && e.id.length > 0 ? e.id : ot(),
            text: e.text,
            font: typeof e.font == "string" && e.font.length > 0 ? e.font : et,
            cellX: o,
            cellY: r,
            cellsWide: s,
            renderMode: i,
            color: typeof e.color == "string" && nt.test(e.color) ? e.color : Me,
            enabled: typeof e.enabled == "boolean" ? e.enabled : !0,
            createdAt: be(e.createdAt, n),
            updatedAt: be(e.updatedAt, n)
        };
    }
    function oe(t, n = Date.now()) {
        if (!Array.isArray(t)) return [];
        const e = [];
        for (const o of t){
            if (e.length >= Qe) break;
            const r = ue(o, n);
            r && e.push(r);
        }
        return e;
    }
    class st {
        blocks = [];
        getAll() {
            return this.blocks;
        }
        setAll(n) {
            return this.blocks = oe(n), this.blocks;
        }
        add(n) {
            const e = ue(n);
            if (!e) return {
                blocks: this.blocks,
                error: "Invalid text block payload"
            };
            const o = this.blocks.filter((r)=>r.id !== e.id);
            return this.blocks = oe([
                ...o,
                e
            ]), {
                blocks: this.blocks
            };
        }
        update(n) {
            const e = ue(n);
            if (!e) return {
                blocks: this.blocks,
                error: "Invalid text block payload"
            };
            const o = this.blocks.findIndex((s)=>s.id === e.id);
            if (o < 0) return {
                blocks: this.blocks,
                error: `Text block not found: ${e.id}`
            };
            const r = this.blocks.slice();
            return r[o] = e, this.blocks = oe(r), {
                blocks: this.blocks
            };
        }
        remove(n) {
            return this.blocks = this.blocks.filter((e)=>e.id !== n), this.blocks;
        }
        clear() {
            return this.blocks = [], this.blocks;
        }
    }
    function Ie(t, n, e) {
        t.font = e;
        const o = t.measureText(n), r = o.actualBoundingBoxAscent, s = o.actualBoundingBoxDescent;
        if (typeof r == "number" && typeof s == "number" && isFinite(r) && isFinite(s)) return r + s;
        const i = e.match(/(\d+(?:\.\d+)?)px/);
        return i ? parseFloat(i[1]) * 1.2 : 16;
    }
    let F = null;
    function De(t, n) {
        return F || (F = new OffscreenCanvas(t, n)), F.width = t, F.height = n, F.getContext("2d");
    }
    function it(t) {
        const n = [];
        for (const e of t){
            if (!e.enabled || e.renderMode === "sdf") continue;
            const o = Math.max(1, e.cellsWide), r = De(o, 1), s = Ie(r, e.text, e.font), i = Math.max(1, r.measureText(e.text).width), d = s / i, u = Math.max(1, Math.ceil(o * d));
            F.width = o, F.height = u, r.fillStyle = "black", r.fillRect(0, 0, o, u), r.fillStyle = "white";
            const f = u * .85;
            r.font = e.font.replace(/\d+px/, `${f}px`), r.textBaseline = "top", r.fillText(e.text, 0, u * .05);
            const h = r.getImageData(0, 0, o, u);
            for(let l = 0; l < u; l++)for(let m = 0; m < o; m++)h.data[(l * o + m) * 4] > 128 && n.push({
                cx: e.cellX + m,
                cy: e.cellY + l
            });
        }
        return n;
    }
    function at(t, n) {
        const e = n.multiplier, o = [];
        for (const r of t){
            if (!r.enabled || r.renderMode === "sdf") continue;
            const s = r.cellX + r.cellsWide - 1, i = Math.max(1, r.cellsWide), d = De(i, 1), u = Ie(d, r.text, r.font), f = Math.max(1, d.measureText(r.text).width), h = u / f, l = Math.max(1, Math.ceil(i * h)), m = r.cellY + l - 1;
            if (s < n.x1 || r.cellX > n.x2 || m < n.y1 || r.cellY > n.y2) continue;
            const y = i * e, b = l * e;
            F.width = y, F.height = b, d.fillStyle = "black", d.fillRect(0, 0, y, b), d.fillStyle = "white";
            const c = b * .85;
            d.font = r.font.replace(/\d+px/, `${c}px`), d.textBaseline = "top", d.fillText(r.text, 0, b * .05);
            const g = d.getImageData(0, 0, y, b), a = (n.x2 - n.x1 + 1) * e, A = (n.y2 - n.y1 + 1) * e;
            for(let x = 0; x < b; x++)for(let k = 0; k < y; k++)if (g.data[(x * y + k) * 4] > 128) {
                const _ = (r.cellX - n.x1) * e + k, M = (r.cellY - n.y1) * e + x;
                _ >= 0 && _ < a && M >= 0 && M < A && o.push({
                    cx: _,
                    cy: M
                });
            }
        }
        return o;
    }
    const q = 1e20;
    class lt {
        constructor({ fontSize: n = 24, buffer: e = 3, radius: o = 8, cutoff: r = .25, fontFamily: s = "sans-serif", fontWeight: i = "normal", fontStyle: d = "normal", lang: u = null } = {}){
            this.buffer = e, this.cutoff = r, this.radius = o, this.lang = u;
            const f = this.size = n + e * 4, h = this._createCanvas(f), l = this.ctx = h.getContext("2d", {
                willReadFrequently: !0
            });
            l.font = `${d} ${i} ${n}px ${s}`, l.textBaseline = "alphabetic", l.textAlign = "left", l.fillStyle = "black", this.gridOuter = new Float64Array(f * f), this.gridInner = new Float64Array(f * f), this.f = new Float64Array(f), this.z = new Float64Array(f + 1), this.v = new Uint16Array(f);
        }
        _createCanvas(n) {
            const e = document.createElement("canvas");
            return e.width = e.height = n, e;
        }
        draw(n) {
            const { width: e, actualBoundingBoxAscent: o, actualBoundingBoxDescent: r, actualBoundingBoxLeft: s, actualBoundingBoxRight: i } = this.ctx.measureText(n), d = Math.ceil(o), u = 0, f = Math.max(0, Math.min(this.size - this.buffer, Math.ceil(i - s))), h = Math.min(this.size - this.buffer, d + Math.ceil(r)), l = f + 2 * this.buffer, m = h + 2 * this.buffer, y = Math.max(l * m, 0), b = new Uint8ClampedArray(y), c = {
                data: b,
                width: l,
                height: m,
                glyphWidth: f,
                glyphHeight: h,
                glyphTop: d,
                glyphLeft: u,
                glyphAdvance: e
            };
            if (f === 0 || h === 0) return c;
            const { ctx: g, buffer: a, gridInner: A, gridOuter: x } = this;
            this.lang && (g.lang = this.lang), g.clearRect(a, a, f, h), g.fillText(n, a, a + d);
            const k = g.getImageData(a, a, f, h);
            x.fill(q, 0, y), A.fill(0, 0, y);
            for(let w = 0; w < h; w++)for(let _ = 0; _ < f; _++){
                const M = k.data[4 * (w * f + _) + 3] / 255;
                if (M === 0) continue;
                const G = (w + a) * l + _ + a;
                if (M === 1) x[G] = 0, A[G] = q;
                else {
                    const B = .5 - M;
                    x[G] = B > 0 ? B * B : 0, A[G] = B < 0 ? B * B : 0;
                }
            }
            xe(x, 0, 0, l, m, l, this.f, this.v, this.z), xe(A, a, a, f, h, l, this.f, this.v, this.z);
            for(let w = 0; w < y; w++){
                const _ = Math.sqrt(x[w]) - Math.sqrt(A[w]);
                b[w] = Math.round(255 - 255 * (_ / this.radius + this.cutoff));
            }
            return c;
        }
    }
    function xe(t, n, e, o, r, s, i, d, u) {
        for(let f = n; f < n + o; f++)we(t, e * s + f, s, r, i, d, u);
        for(let f = e; f < e + r; f++)we(t, f * s + n, 1, o, i, d, u);
    }
    function we(t, n, e, o, r, s, i) {
        s[0] = 0, i[0] = -q, i[1] = q, r[0] = t[n];
        for(let d = 1, u = 0, f = 0; d < o; d++){
            r[d] = t[n + d * e];
            const h = d * d;
            do {
                const l = s[u];
                f = (r[d] - r[l] + h - l * l) / (d - l) / 2;
            }while (f <= i[u] && --u > -1);
            u++, s[u] = d, i[u] = f, i[u + 1] = q;
        }
        for(let d = 0, u = 0; d < o; d++){
            for(; i[u + 1] < d;)u++;
            const f = s[u], h = d - f;
            t[n + d * e] = r[f] + h * h;
        }
    }
    typeof document > "u" && typeof OffscreenCanvas < "u" && (globalThis.document = {
        createElement: (t)=>{
            if (t === "canvas") return new OffscreenCanvas(1, 1);
            throw new Error(`Cannot create <${t}> in a Worker`);
        }
    });
    const I = 512, _e = 48, ct = 6, dt = 16, ft = .25;
    function ht(t) {
        const n = t.startsWith("#") ? t.slice(1) : t, e = parseInt(n, 16);
        return [
            (e >> 16 & 255) / 255,
            (e >> 8 & 255) / 255,
            (e & 255) / 255
        ];
    }
    function ke(t) {
        const n = t.trim().split(/\s+/);
        let e = "normal", o = "normal";
        const r = [];
        for (const s of n)/^\d+$/.test(s) || [
            "bold",
            "bolder",
            "lighter",
            "normal"
        ].includes(s.toLowerCase()) ? e = s : [
            "italic",
            "oblique"
        ].includes(s.toLowerCase()) ? o = s : /^\d+px$/i.test(s) || r.push(s);
        return {
            weight: e,
            style: o,
            family: r.join(" ") || "monospace"
        };
    }
    function ut(t) {
        const n = t.filter((h)=>h.enabled && h.renderMode !== "cells");
        if (n.length === 0) return null;
        const e = new Map;
        for (const h of n){
            const l = ke(h.font), m = `${l.weight}|${l.style}|${l.family}`;
            let y = e.get(m);
            y || (y = {
                ...l,
                chars: new Set
            }, e.set(m, y));
            for (const b of h.text)y.chars.add(b);
        }
        const o = new Map;
        for (const [h, { weight: l, style: m, family: y, chars: b }] of e){
            const c = new lt({
                fontSize: _e,
                buffer: ct,
                radius: dt,
                cutoff: ft,
                fontFamily: y,
                fontWeight: l,
                fontStyle: m
            });
            for (const g of b){
                const a = c.draw(g);
                o.set(`${h}|${g}`, a);
            }
        }
        const r = new Uint8Array(I * I), s = new Map;
        let i = 0, d = 0, u = 0;
        for (const [h, l] of o)if (!(l.width === 0 || l.height === 0)) {
            if (d + l.width > I && (i += u, d = 0, u = 0), i + l.height > I) break;
            for(let m = 0; m < l.height; m++){
                const y = m * l.width, b = (i + m) * I + d;
                for(let c = 0; c < l.width; c++)r[b + c] = l.data[y + c];
            }
            s.set(h, {
                atlasX: d,
                atlasY: i,
                width: l.width,
                height: l.height
            }), d += l.width, u = Math.max(u, l.height);
        }
        const f = [];
        for (const h of n){
            const l = ke(h.font), m = `${l.weight}|${l.style}|${l.family}`;
            let y = 0;
            const b = [];
            for (const k of h.text){
                const w = `${m}|${k}`, _ = o.get(w), M = s.get(w);
                !_ || !M || (b.push({
                    ch: k,
                    cached: _,
                    pack: M
                }), y += _.glyphAdvance);
            }
            if (y === 0) continue;
            const c = h.cellsWide / y, [g, a, A] = ht(h.color || Me);
            let x = 0;
            for (const { cached: k, pack: w } of b){
                const _ = h.cellX + x * c + k.glyphLeft * c, M = h.cellY + (_e - k.glyphTop) * c, G = k.glyphWidth * c, B = k.glyphHeight * c;
                G > 0 && B > 0 && f.push({
                    cellX: _,
                    cellY: M,
                    cellW: G,
                    cellH: B,
                    uvX: (w.atlasX + .5) / I,
                    uvY: (w.atlasY + .5) / I,
                    uvW: (w.width - .5 * 2) / I,
                    uvH: (w.height - .5 * 2) / I,
                    colorR: g,
                    colorG: a,
                    colorB: A,
                    pad0: 0
                }), x += k.glyphAdvance;
            }
        }
        return f.length === 0 ? null : {
            glyphs: f,
            atlas: r,
            atlasWidth: I,
            atlasHeight: I
        };
    }
    const pt = Se("CpuRenderer"), se = 5, gt = 4279175690, yt = 4294921596, Ae = 4278190080;
    async function mt(t) {
        const n = t.getContext("2d"), { WasmBridge: e } = await import("./index-CBkJc-a4.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), o = await e.create(), r = se + 1, s = r * o.width + 1, i = r * o.height + 1;
        t.width = s, t.height = i, pt.debug("CPU: bridge ready, grid", o.width, "x", o.height);
        let d = n.createImageData(s, i), u = new Uint32Array(d.data.buffer);
        u.fill(Ae);
        function f() {
            const h = o.getCells(), l = o.width, m = o.height, y = s;
            for(let b = 0; b < m; b++){
                const c = b * l, g = b * r + 1;
                for(let a = 0; a < l; a++){
                    const A = h[c + a] === 0 ? gt : yt, x = a * r + 1;
                    for(let k = 0; k < se; k++){
                        const w = (g + k) * y + x;
                        for(let _ = 0; _ < se; _++)u[w + _] = A;
                    }
                }
            }
            n.putImageData(d, 0, 0);
        }
        return {
            tick () {
                o.tick(), f();
            },
            renderOnly () {
                f();
            },
            resize (h, l) {
                (t.width !== s || t.height !== i) && (t.width = s, t.height = i, d = n.createImageData(s, i), u = new Uint32Array(d.data.buffer), u.fill(Ae));
            },
            setZones (h) {},
            setDecals (h) {},
            free () {}
        };
    }
    const C = Se("Renderer"), Re = self;
    let p = null, L = 0;
    const ie = 210;
    let ae = 0;
    const T = new Oe, $ = new je, D = new Je, R = new st;
    function z(t) {
        Re.postMessage(t);
    }
    function E(t) {
        return t instanceof Error ? t.message : String(t);
    }
    function bt(t) {
        const n = Math.min(1, Math.max(0, t));
        return n * n * (3 - 2 * n);
    }
    function Y() {
        z({
            type: "zones_state",
            zones: T.getAll()
        });
    }
    function le(t) {
        z({
            type: "zones_error",
            message: t
        });
    }
    function j() {
        p?.setZones?.(T.getAll());
    }
    function xt(t) {
        T.setAll(t), j(), Y();
    }
    function v() {
        z({
            type: "decals_state",
            decals: $.getAll()
        });
    }
    function ce(t) {
        z({
            type: "decals_error",
            message: t
        });
    }
    function K() {
        p?.setDecals?.($.getAll());
    }
    function wt(t) {
        $.setAll(t), K(), v();
    }
    function P() {
        z({
            type: "hires_state",
            regions: D.getAll()
        });
    }
    function ze(t) {
        z({
            type: "error",
            phase: "hires",
            message: t
        });
    }
    function N() {
        p?.setHiResRegions?.(D.getAll());
    }
    function X() {
        z({
            type: "text_state",
            blocks: R.getAll()
        });
    }
    function W(t) {
        z({
            type: "text_error",
            message: t
        });
    }
    function Z() {
        p?.setText?.(R.getAll());
    }
    Re.onmessage = async (t)=>{
        switch(t.data.type){
            case "init":
                {
                    const { canvas: n, cellPx: e } = t.data;
                    C.debug("Init received — canvas", n.width, "x", n.height, "cell_px", e);
                    let o = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        o = !0, C.debug("GPU: probe passed — adapter found");
                    } catch (r) {
                        C.info("GPU: probe failed, will use CPU renderer:", E(r)), z({
                            type: "error",
                            phase: "gpu-probe",
                            message: E(r)
                        });
                    }
                    if (o) try {
                        const { GpuGameOfLife: r } = await import("./game_of_life_gpu-CIYS95y6.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        C.debug("GPU: module loaded, initialising surface...");
                        const s = await r.new_offscreen(n, e), i = s, d = (c)=>{
                            if (typeof i.set_zones_json == "function") try {
                                i.set_zones_json(JSON.stringify(c));
                            } catch (g) {
                                le(`GPU zone update failed: ${E(g)}`);
                            }
                        }, u = (c)=>{
                            if (typeof i.set_decals_json == "function") try {
                                i.set_decals_json(JSON.stringify(c));
                            } catch (g) {
                                ce(`GPU decal update failed: ${E(g)}`);
                            }
                        }, f = new Map, h = (c)=>`${c.x1},${c.y1},${c.x2},${c.y2},${c.multiplier}`, l = (c)=>{
                            let g = 0;
                            for(let a = 0; a < c.length; a++)g = (g << 5) - g + c.charCodeAt(a) | 0;
                            return g >>> 0;
                        }, m = (c)=>{
                            const g = new Set(c.map((a)=>a.id));
                            for (const [a] of f)g.has(a) || (i.remove_hires_region?.(l(a)), f.delete(a));
                            if (c.length === 0) {
                                i.clear_hires_regions?.(), f.clear();
                                return;
                            }
                            for (const a of c){
                                const A = h(a), x = l(a.id);
                                f.get(a.id) !== A ? (i.remove_hires_region?.(x), i.add_hires_region?.(x, a.x1, a.y1, a.x2, a.y2, a.multiplier, a.showGrid ?? !0, a.showBaseGrid ?? !0, a.showBorder ?? !0), f.set(a.id, A)) : i.update_hires_flags?.(x, a.showGrid ?? !0, a.showBaseGrid ?? !0, a.showBorder ?? !0), i.set_hires_paused?.(x, !a.enabled);
                            }
                        }, y = (c)=>{
                            const g = c.filter((a)=>a.enabled && a.renderMode !== "sdf");
                            if (g.length === 0) i.clear_frozen_cells?.();
                            else try {
                                i.set_frozen_cells?.(JSON.stringify(it(g)));
                            } catch (a) {
                                W(`Frozen cell rasterization failed: ${E(a)}`);
                            }
                            for (const a of D.getAll()){
                                const A = l(a.id);
                                if (g.length === 0) {
                                    i.clear_hires_frozen_cells?.(A);
                                    continue;
                                }
                                try {
                                    const x = at(g, a);
                                    x.length === 0 ? i.clear_hires_frozen_cells?.(A) : i.set_hires_frozen_cells?.(A, JSON.stringify(x));
                                } catch (x) {
                                    W(`Hi-res frozen rasterization failed: ${E(x)}`);
                                }
                            }
                            try {
                                const a = ut(c);
                                if (!a) {
                                    i.clear_text_glyphs?.();
                                    return;
                                }
                                i.upload_text_atlas?.(a.atlas, a.atlasWidth, a.atlasHeight), i.set_text_glyphs?.(JSON.stringify(a.glyphs));
                            } catch (a) {
                                W(`SDF generation failed: ${E(a)}`);
                            }
                        }, b = ()=>({
                                screenCols: s.screen_cols(),
                                screenRows: s.screen_rows(),
                                paddedRows: s.padded_rows(),
                                wordsPerRow: s.words_per_row(),
                                gridPitch: s.grid_pitch()
                            });
                        p = {
                            tick: ()=>s.tick_and_render(),
                            renderOnly: ()=>s.render_only(),
                            resize: (c, g)=>{
                                n.width = c, n.height = g, s.resize(c, g);
                            },
                            setScroll: (c)=>s.set_scroll(c),
                            setTransition: (c)=>s.set_transition(c),
                            toggleCell: (c, g)=>{
                                s.toggle_cell(c, g), s.flush_and_render();
                            },
                            setZones: (c)=>d(c),
                            setDecals: (c)=>u(c),
                            setHiResRegions: (c)=>m(c),
                            setText: (c)=>y(c),
                            gridInfo: b,
                            free: ()=>s.free()
                        }, p.setScroll?.(L), p.setTransition?.(1), p.setZones?.(T.getAll()), p.setDecals?.($.getAll()), p.setHiResRegions?.(D.getAll()), p.setText?.(R.getAll()), C.info("GPU renderer ready"), z({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: b()
                        });
                        break;
                    } catch (r) {
                        const s = E(r);
                        C.error("GPU init failed after probe passed (canvas may be locked):", s), z({
                            type: "error",
                            phase: "gpu-init",
                            message: s
                        });
                        break;
                    }
                    try {
                        p = await mt(n), p.setScroll?.(L), p.setZones?.(T.getAll()), p.setDecals?.($.getAll()), p.setHiResRegions?.(D.getAll()), p.setText?.(R.getAll()), C.info("CPU renderer ready"), z({
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
                    } catch (r) {
                        const s = E(r);
                        C.error("CPU init failed:", s), z({
                            type: "error",
                            phase: "cpu-init",
                            message: s
                        });
                    }
                    break;
                }
            case "frame":
                if (!p) break;
                ae++, p.renderOnly && ae % ie !== 0 ? (p.setTransition?.(bt(ae % ie / ie)), p.renderOnly()) : (p.setTransition?.(0), p.tick());
                break;
            case "resize":
                C.debug("Resize →", t.data.width, "x", t.data.height), p?.resize(t.data.width, t.data.height), p?.setScroll?.(L), p?.setTransition?.(1), p?.setZones?.(T.getAll()), p?.setDecals?.($.getAll()), p?.setHiResRegions?.(D.getAll()), p?.setText?.(R.getAll()), p?.gridInfo && z({
                    type: "grid_info",
                    gridInfo: p.gridInfo()
                });
                break;
            case "scroll":
                L = t.data.scrollY, p?.setScroll?.(L);
                break;
            case "toggle_cell":
                p?.toggleCell?.(t.data.cx, t.data.cy);
                break;
            case "set_zones":
                xt(t.data.zones);
                break;
            case "add_zone":
                {
                    const n = T.add(t.data.zone);
                    if (n.error) {
                        le(n.error);
                        break;
                    }
                    j(), Y();
                    break;
                }
            case "update_zone":
                {
                    const n = T.update(t.data.zone);
                    if (n.error) {
                        le(n.error);
                        break;
                    }
                    j(), Y();
                    break;
                }
            case "remove_zone":
                T.remove(t.data.id), j(), Y();
                break;
            case "clear_zones":
                T.clear(), j(), Y();
                break;
            case "set_decals":
                wt(t.data.decals);
                break;
            case "add_decal":
                {
                    const n = $.add(t.data.decal);
                    if (n.error) {
                        ce(n.error);
                        break;
                    }
                    K(), v();
                    break;
                }
            case "update_decal":
                {
                    const n = $.update(t.data.decal);
                    if (n.error) {
                        ce(n.error);
                        break;
                    }
                    K(), v();
                    break;
                }
            case "remove_decal":
                $.remove(t.data.id), K(), v();
                break;
            case "clear_decals":
                $.clear(), K(), v();
                break;
            case "set_hires_regions":
                D.setAll(t.data.regions), N(), P();
                break;
            case "add_hires":
                {
                    const n = D.add(t.data.region);
                    if (n.error) {
                        ze(n.error);
                        break;
                    }
                    N(), P();
                    break;
                }
            case "update_hires":
                {
                    const n = D.update(t.data.region);
                    if (n.error) {
                        ze(n.error);
                        break;
                    }
                    N(), P();
                    break;
                }
            case "remove_hires":
                D.remove(t.data.id), N(), P();
                break;
            case "clear_hires":
                D.clear(), N(), P();
                break;
            case "set_text":
                R.setAll(t.data.blocks), Z(), X();
                break;
            case "add_text":
                {
                    const n = R.add(t.data.block);
                    if (n.error) {
                        W(n.error);
                        break;
                    }
                    Z(), X();
                    break;
                }
            case "update_text":
                {
                    const n = R.update(t.data.block);
                    if (n.error) {
                        W(n.error);
                        break;
                    }
                    Z(), X();
                    break;
                }
            case "remove_text":
                R.remove(t.data.id), Z(), X();
                break;
            case "clear_text":
                R.clear(), Z(), X();
                break;
            case "perf_snapshot":
                break;
            case "stop":
                p?.free(), p = null;
                break;
        }
    };
})();
