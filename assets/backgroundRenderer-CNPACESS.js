(async ()=>{
    const de = ()=>{};
    function Me(e) {
        const n = `[${e}]`;
        return {
            debug: de,
            info: de,
            warn: (...t)=>console.warn(n, ...t),
            error: (...t)=>console.error(n, ...t)
        };
    }
    const ee = 210, Ee = 128;
    function ce(e, n, t, o) {
        if (!Array.isArray(e)) return [];
        const r = o ?? Date.now(), s = [];
        for (const i of e){
            if (s.length >= t) break;
            const a = n(i, r);
            a && s.push(a);
        }
        return s;
    }
    const Oe = new Set([
        "minor",
        "major",
        "both"
    ]), Ue = new Set([
        "none",
        "bold-major",
        "fade",
        "noted"
    ]);
    function ne(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function H(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function Ge() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function He(e) {
        return typeof e == "string" && Oe.has(e) ? e : "both";
    }
    function Le(e) {
        const n = e && typeof e == "object" ? e : {}, t = typeof n.style == "string" && Ue.has(n.style) ? n.style : "none", o = ne(H(n.widthCells) ?? 1, 1, 4), r = typeof n.opacity == "number" ? n.opacity : 1, s = ne(r, 0, 1), i = {
            style: t,
            widthCells: o,
            opacity: s
        };
        if (t === "fade") {
            const a = typeof n.fadeStrength == "number" ? n.fadeStrength : .6;
            i.fadeStrength = ne(a, 0, 1);
        }
        return t === "noted" && (i.notePitchCells = Math.max(1, H(n.notePitchCells) ?? 2)), (t === "bold-major" || t === "noted") && (i.hideInteriorBorder = typeof n.hideInteriorBorder == "boolean" ? n.hideInteriorBorder : !1), i;
    }
    function Pe(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function fe(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function Se(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, o = H(t.x1), r = H(t.y1), s = H(t.x2), i = H(t.y2);
        if (o === null || r === null || s === null || i === null) return null;
        const a = Math.min(o, s), u = Math.max(o, s), l = Math.min(r, i), f = Math.max(r, i);
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : Ge(),
            x1: a,
            y1: l,
            x2: u,
            y2: f,
            mode: He(t.mode),
            edge: Le(t.edge),
            enabled: Pe(t.enabled),
            createdAt: fe(t.createdAt, n),
            updatedAt: fe(t.updatedAt, n)
        };
    }
    function Ne(e, n = Date.now()) {
        return ce(e, Se, Ee, n);
    }
    class te {
        constructor(n, t){
            this.normalizeOne = n, this.normalizeAll = t;
        }
        items = [];
        getAll() {
            return this.items;
        }
        setAll(n) {
            return this.items = this.normalizeAll(n), this.items;
        }
        add(n) {
            const t = this.normalizeOne(n);
            if (!t) return {
                error: "Invalid payload"
            };
            const o = this.items.filter((r)=>r.id !== t.id);
            return this.items = this.normalizeAll([
                ...o,
                t
            ]), {};
        }
        update(n) {
            const t = this.normalizeOne(n);
            if (!t) return {
                error: "Invalid payload"
            };
            const o = this.items.findIndex((s)=>s.id === t.id);
            if (o < 0) return {
                error: `Item ${t.id} not found`
            };
            const r = this.items.slice();
            return r[o] = t, this.items = this.normalizeAll(r), {};
        }
        remove(n) {
            return this.items = this.items.filter((t)=>t.id !== n), this.items;
        }
        clear() {
            return this.items = [], this.items;
        }
    }
    class Xe extends te {
        constructor(){
            super(Se, Ne);
        }
    }
    const Ye = 32, O = [
        .49,
        .3,
        1,
        .6
    ], Ze = new Set([
        "solid",
        "checkerboard",
        "stripes",
        "dots",
        "bitmap"
    ]), je = new Set([
        "alpha",
        "multiply",
        "screen"
    ]);
    function U(e, n, t) {
        return Math.min(t, Math.max(n, e));
    }
    function D(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : e;
    }
    function V(e) {
        const n = D(e);
        return n === null ? null : Math.trunc(n);
    }
    function Ke() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function ve(e) {
        return typeof e == "string" && Ze.has(e) ? e : "solid";
    }
    function qe(e) {
        return typeof e == "string" && je.has(e) ? e : "alpha";
    }
    function We(e) {
        const n = e && typeof e == "object" ? e : {}, t = ve(n.kind), o = {
            kind: t
        };
        return t === "solid" ? (o.coverage = U(D(n.coverage) ?? 1, 0, 1), o.solidR = U(D(n.solidR) ?? O[0], 0, 1), o.solidG = U(D(n.solidG) ?? O[1], 0, 1), o.solidB = U(D(n.solidB) ?? O[2], 0, 1)) : t === "checkerboard" ? o.cellSize = Math.max(1, D(n.cellSize) ?? 2) : t === "stripes" ? o.pitchCells = Math.max(2, D(n.pitchCells) ?? 4) : t === "dots" && (o.dotRadius = Math.max(.1, D(n.dotRadius) ?? .4), o.dotSpacing = Math.max(2, D(n.dotSpacing) ?? 3)), o;
    }
    function Ve(e) {
        return !Array.isArray(e) || e.length < 4 ? [
            ...O
        ] : [
            U(D(e[0]) ?? O[0], 0, 1),
            U(D(e[1]) ?? O[1], 0, 1),
            U(D(e[2]) ?? O[2], 0, 1),
            U(D(e[3]) ?? O[3], 0, 1)
        ];
    }
    function Je(e) {
        return typeof e == "boolean" ? e : !0;
    }
    function ue(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function De(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, o = V(t.x1), r = V(t.y1), s = V(t.x2), i = V(t.y2);
        return o === null || r === null || s === null || i === null ? null : {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : Ke(),
            x1: Math.min(o, s),
            y1: Math.min(r, i),
            x2: Math.max(o, s),
            y2: Math.max(r, i),
            pattern: We(t.pattern),
            tint: Ve(t.tint),
            blendMode: qe(t.blendMode),
            suppressCells: typeof t.suppressCells == "boolean" ? t.suppressCells : !1,
            enabled: Je(t.enabled),
            createdAt: ue(t.createdAt, n),
            updatedAt: ue(t.updatedAt, n)
        };
    }
    function Qe(e, n = Date.now()) {
        return ce(e, De, Ye, n);
    }
    class et extends te {
        constructor(){
            super(De, Qe);
        }
    }
    const tt = 4, nt = 8;
    function J(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
    }
    function rt() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function he(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function ze(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e, o = J(t.x1), r = J(t.y1), s = J(t.x2), i = J(t.y2);
        return o === null || r === null || s === null || i === null ? null : {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : rt(),
            x1: Math.min(o, s),
            y1: Math.min(r, i),
            x2: Math.max(o, s),
            y2: Math.max(r, i),
            multiplier: tt,
            enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
            showGrid: typeof t.showGrid == "boolean" ? t.showGrid : !0,
            showBaseGrid: typeof t.showBaseGrid == "boolean" ? t.showBaseGrid : !0,
            showBorder: typeof t.showBorder == "boolean" ? t.showBorder : !0,
            tickMultiplier: typeof t.tickMultiplier == "number" && Number.isFinite(t.tickMultiplier) && t.tickMultiplier >= 1 ? Math.trunc(t.tickMultiplier) : 1,
            createdAt: he(t.createdAt, n),
            updatedAt: he(t.updatedAt, n)
        };
    }
    function ot(e, n) {
        return e.x1 <= n.x2 && e.x2 >= n.x1 && e.y1 <= n.y2 && e.y2 >= n.y1;
    }
    function st(e, n = Date.now()) {
        if (!Array.isArray(e)) return [];
        const t = [];
        for (const o of e){
            if (t.length >= nt) break;
            const r = ze(o, n);
            !r || t.some((i)=>ot(i, r)) || t.push(r);
        }
        return t;
    }
    class it extends te {
        constructor(){
            super(ze, st);
        }
    }
    const Re = "#1a1a2e", at = 8, ct = "bold 24px monospace", lt = new Set([
        "sdf",
        "cells",
        "both"
    ]), dt = /^#[0-9a-fA-F]{6}$/;
    function ft(e) {
        return typeof e != "number" || !Number.isFinite(e) ? null : e;
    }
    function Q(e) {
        const n = ft(e);
        return n === null ? null : Math.trunc(n);
    }
    function ut() {
        return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    function pe(e, n) {
        return typeof e == "number" && Number.isFinite(e) ? e : n;
    }
    function Ie(e, n = Date.now()) {
        if (!e || typeof e != "object") return null;
        const t = e;
        if (typeof t.text != "string" || t.text.length === 0) return null;
        const o = Q(t.cellX), r = Q(t.cellY);
        if (o === null || r === null) return null;
        const s = Math.max(1, Q(t.cellsWide) ?? 100), i = Q(t.cellsHigh), a = i !== null && i >= 1 ? i : void 0, u = typeof t.renderMode == "string" && lt.has(t.renderMode) ? t.renderMode : "cells";
        return {
            id: typeof t.id == "string" && t.id.length > 0 ? t.id : ut(),
            text: t.text,
            font: typeof t.font == "string" && t.font.length > 0 ? t.font : ct,
            cellX: o,
            cellY: r,
            cellsWide: s,
            ...a !== void 0 ? {
                cellsHigh: a
            } : {},
            renderMode: u,
            color: typeof t.color == "string" && dt.test(t.color) ? t.color : Re,
            enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
            createdAt: pe(t.createdAt, n),
            updatedAt: pe(t.updatedAt, n)
        };
    }
    function ht(e, n = Date.now()) {
        return ce(e, Ie, at, n);
    }
    class pt extends te {
        constructor(){
            super(Ie, ht);
        }
    }
    const $e = "HgyjpqÑ|";
    function yt(e, n) {
        e.font = n;
        const t = e.measureText($e), o = t.fontBoundingBoxAscent, r = t.fontBoundingBoxDescent;
        if (typeof o == "number" && typeof r == "number" && isFinite(o) && isFinite(r)) return o + r;
        const s = t.actualBoundingBoxAscent, i = t.actualBoundingBoxDescent;
        if (typeof s == "number" && typeof i == "number" && isFinite(s) && isFinite(i)) return s + i;
        const a = n.match(/(\d+(?:\.\d+)?)px/);
        return a ? parseFloat(a[1]) * 1.2 : 16;
    }
    function Te(e, n) {
        e.font = n;
        const t = e.measureText($e), o = t.fontBoundingBoxAscent;
        if (typeof o == "number" && isFinite(o)) return o;
        const r = t.actualBoundingBoxAscent;
        if (typeof r == "number" && isFinite(r)) return r;
        const s = n.match(/(\d+(?:\.\d+)?)px/);
        return s ? parseFloat(s[1]) * .85 : 16;
    }
    let M = null;
    function gt(e, n) {
        M || (M = new OffscreenCanvas(e, n));
    }
    function mt(e) {
        const n = e.match(/(\d+(?:\.\d+)?)px/);
        return n ? parseFloat(n[1]) : 24;
    }
    function le(e, n, t) {
        gt(t, 1), M.width = t, M.height = 1;
        const o = M.getContext("2d"), r = mt(n);
        o.font = n;
        const s = Math.max(1, o.measureText(e).width), i = yt(o, n), a = t / s, u = r * a, l = Math.max(1, Math.ceil(i * a * 1.1));
        return {
            fontSize: u,
            cellsHigh: l
        };
    }
    function bt(e, n, t) {
        return le(e, n, t).cellsHigh;
    }
    const ye = new Map, ge = new Map;
    function xt(e, n, t, o) {
        return `${t}|${o}|${n}|${e}`;
    }
    function _t(e, n, t, o, r) {
        return `${t}|${o}|${r}|${n}|${e}`;
    }
    function wt(e, n, t, o) {
        const { fontSize: r } = le(e, n, t);
        M.width = t, M.height = o;
        const s = M.getContext("2d");
        s.fillStyle = "black", s.fillRect(0, 0, t, o), s.fillStyle = "white";
        const i = n.replace(/\d+px/, `${r}px`);
        s.font = i, s.textBaseline = "alphabetic";
        const a = Te(s, i);
        s.fillText(e, 0, a);
        const u = s.getImageData(0, 0, t, o), l = [];
        for(let f = 0; f < o; f++)for(let d = 0; d < t; d++)u.data[(f * t + d) * 4] > 128 && l.push({
            dx: d,
            dy: f
        });
        return {
            offsets: l,
            cellsHigh: o
        };
    }
    function kt(e, n, t, o, r) {
        const { fontSize: s } = le(e, n, t * r), i = t * r, a = o * r;
        M.width = i, M.height = a;
        const u = M.getContext("2d");
        u.fillStyle = "black", u.fillRect(0, 0, i, a), u.fillStyle = "white";
        const l = n.replace(/\d+px/, `${s}px`);
        u.font = l, u.textBaseline = "alphabetic";
        const f = Te(u, l);
        u.fillText(e, 0, f);
        const d = u.getImageData(0, 0, i, a), x = [];
        for(let m = 0; m < a; m++)for(let b = 0; b < i; b++)d.data[(m * i + b) * 4] > 128 && x.push({
            dx: b,
            dy: m
        });
        return {
            offsets: x,
            cellsHigh: o
        };
    }
    function At(e, n, t, o) {
        const r = xt(e, n, t, o);
        let s = ye.get(r);
        return s || (M || (M = new OffscreenCanvas(t, o)), s = wt(e, n, t, o), ye.set(r, s)), s;
    }
    function Mt(e, n, t, o, r) {
        const s = _t(e, n, t, o, r);
        let i = ge.get(s);
        return i || (M || (M = new OffscreenCanvas(t * r, o * r)), i = kt(e, n, t, o, r), ge.set(s, i)), i;
    }
    function Ce(e, n) {
        return e.cellsHigh !== void 0 && e.cellsHigh >= 1 ? e.cellsHigh : bt(e.text, e.font, n);
    }
    function St(e) {
        const n = [];
        for (const t of e){
            if (!t.enabled || t.renderMode === "sdf") continue;
            const o = Math.max(1, t.cellsWide), r = Ce(t, o), s = At(t.text, t.font, o, r);
            for (const { dx: i, dy: a } of s.offsets)n.push({
                cx: t.cellX + i,
                cy: t.cellY + a
            });
        }
        return n;
    }
    function Dt(e, n) {
        const t = n.multiplier, o = [];
        for (const r of e){
            if (!r.enabled || r.renderMode === "sdf") continue;
            const s = Math.max(1, r.cellsWide), i = Ce(r, s), a = r.cellX + s - 1, u = r.cellY + i - 1;
            if (a < n.x1 || r.cellX > n.x2 || u < n.y1 || r.cellY > n.y2) continue;
            const l = Mt(r.text, r.font, s, i, t), f = (n.x2 - n.x1 + 1) * t, d = (n.y2 - n.y1 + 1) * t;
            for (const { dx: x, dy: m } of l.offsets){
                const b = (r.cellX - n.x1) * t + x, c = (r.cellY - n.y1) * t + m;
                b >= 0 && b < f && c >= 0 && c < d && o.push({
                    cx: b,
                    cy: c
                });
            }
        }
        return o;
    }
    const W = 1e20;
    class zt {
        constructor({ fontSize: n = 24, buffer: t = 3, radius: o = 8, cutoff: r = .25, fontFamily: s = "sans-serif", fontWeight: i = "normal", fontStyle: a = "normal", lang: u = null } = {}){
            this.buffer = t, this.cutoff = r, this.radius = o, this.lang = u;
            const l = this.size = n + t * 4, f = this._createCanvas(l), d = this.ctx = f.getContext("2d", {
                willReadFrequently: !0
            });
            d.font = `${a} ${i} ${n}px ${s}`, d.textBaseline = "alphabetic", d.textAlign = "left", d.fillStyle = "black", this.gridOuter = new Float64Array(l * l), this.gridInner = new Float64Array(l * l), this.f = new Float64Array(l), this.z = new Float64Array(l + 1), this.v = new Uint16Array(l);
        }
        _createCanvas(n) {
            const t = document.createElement("canvas");
            return t.width = t.height = n, t;
        }
        draw(n) {
            const { width: t, actualBoundingBoxAscent: o, actualBoundingBoxDescent: r, actualBoundingBoxLeft: s, actualBoundingBoxRight: i } = this.ctx.measureText(n), a = Math.ceil(o), u = 0, l = Math.max(0, Math.min(this.size - this.buffer, Math.ceil(i - s))), f = Math.min(this.size - this.buffer, a + Math.ceil(r)), d = l + 2 * this.buffer, x = f + 2 * this.buffer, m = Math.max(d * x, 0), b = new Uint8ClampedArray(m), c = {
                data: b,
                width: d,
                height: x,
                glyphWidth: l,
                glyphHeight: f,
                glyphTop: a,
                glyphLeft: u,
                glyphAdvance: t
            };
            if (l === 0 || f === 0) return c;
            const { ctx: g, buffer: h, gridInner: y, gridOuter: k } = this;
            this.lang && (g.lang = this.lang), g.clearRect(h, h, l, f), g.fillText(n, h, h + a);
            const _ = g.getImageData(h, h, l, f);
            k.fill(W, 0, m), y.fill(0, 0, m);
            for(let w = 0; w < f; w++)for(let A = 0; A < l; A++){
                const E = _.data[4 * (w * l + A) + 3] / 255;
                if (E === 0) continue;
                const G = (w + h) * d + A + h;
                if (E === 1) k[G] = 0, y[G] = W;
                else {
                    const C = .5 - E;
                    k[G] = C > 0 ? C * C : 0, y[G] = C < 0 ? C * C : 0;
                }
            }
            me(k, 0, 0, d, x, d, this.f, this.v, this.z), me(y, h, h, l, f, d, this.f, this.v, this.z);
            for(let w = 0; w < m; w++){
                const A = Math.sqrt(k[w]) - Math.sqrt(y[w]);
                b[w] = Math.round(255 - 255 * (A / this.radius + this.cutoff));
            }
            return c;
        }
    }
    function me(e, n, t, o, r, s, i, a, u) {
        for(let l = n; l < n + o; l++)be(e, t * s + l, s, r, i, a, u);
        for(let l = t; l < t + r; l++)be(e, l * s + n, 1, o, i, a, u);
    }
    function be(e, n, t, o, r, s, i) {
        s[0] = 0, i[0] = -W, i[1] = W, r[0] = e[n];
        for(let a = 1, u = 0, l = 0; a < o; a++){
            r[a] = e[n + a * t];
            const f = a * a;
            do {
                const d = s[u];
                l = (r[a] - r[d] + f - d * d) / (a - d) / 2;
            }while (l <= i[u] && --u > -1);
            u++, s[u] = a, i[u] = l, i[u + 1] = W;
        }
        for(let a = 0, u = 0; a < o; a++){
            for(; i[u + 1] < a;)u++;
            const l = s[u], f = a - l;
            e[n + a * t] = r[l] + f * f;
        }
    }
    typeof document > "u" && typeof OffscreenCanvas < "u" && (globalThis.document = {
        createElement: (e)=>{
            if (e === "canvas") return new OffscreenCanvas(1, 1);
            throw new Error(`Cannot create <${e}> in a Worker`);
        }
    });
    const z = 512, Fe = 48, Rt = 6, It = 16, $t = .25;
    function Tt(e) {
        const n = e.startsWith("#") ? e.slice(1) : e, t = parseInt(n, 16);
        return [
            (t >> 16 & 255) / 255,
            (t >> 8 & 255) / 255,
            (t & 255) / 255
        ];
    }
    function xe(e) {
        const n = e.trim().split(/\s+/);
        let t = "normal", o = "normal";
        const r = [];
        for (const s of n)/^\d+$/.test(s) || [
            "bold",
            "bolder",
            "lighter",
            "normal"
        ].includes(s.toLowerCase()) ? t = s : [
            "italic",
            "oblique"
        ].includes(s.toLowerCase()) ? o = s : /^\d+px$/i.test(s) || r.push(s);
        return {
            weight: t,
            style: o,
            family: r.join(" ") || "monospace"
        };
    }
    const _e = new Map, we = new Map;
    function Ct(e, n, t) {
        const o = `${e}|${n}|${t}`;
        let r = we.get(o);
        return r || (r = new zt({
            fontSize: Fe,
            buffer: Rt,
            radius: It,
            cutoff: $t,
            fontFamily: t,
            fontWeight: e,
            fontStyle: n
        }), we.set(o, r)), r;
    }
    function Ft(e, n, t) {
        const o = `${e}|${n}`;
        let r = _e.get(o);
        return r || (r = t.draw(n), _e.set(o, r)), r;
    }
    function Bt(e) {
        const n = e.filter((f)=>f.enabled && f.renderMode !== "cells");
        if (n.length === 0) return null;
        const t = new Map;
        for (const f of n){
            const d = xe(f.font), x = `${d.weight}|${d.style}|${d.family}`;
            let m = t.get(x);
            m || (m = {
                ...d,
                chars: new Set
            }, t.set(x, m));
            for (const b of f.text)m.chars.add(b);
        }
        const o = new Map;
        for (const [f, { weight: d, style: x, family: m, chars: b }] of t){
            const c = Ct(d, x, m);
            for (const g of b){
                const h = Ft(f, g, c);
                o.set(`${f}|${g}`, h);
            }
        }
        const r = new Uint8Array(z * z), s = new Map;
        let i = 0, a = 0, u = 0;
        for (const [f, d] of o)if (!(d.width === 0 || d.height === 0)) {
            if (a + d.width > z && (i += u, a = 0, u = 0), i + d.height > z) break;
            for(let x = 0; x < d.height; x++){
                const m = x * d.width, b = (i + x) * z + a;
                for(let c = 0; c < d.width; c++)r[b + c] = d.data[m + c];
            }
            s.set(f, {
                atlasX: a,
                atlasY: i,
                width: d.width,
                height: d.height
            }), a += d.width, u = Math.max(u, d.height);
        }
        const l = [];
        for (const f of n){
            const d = xe(f.font), x = `${d.weight}|${d.style}|${d.family}`;
            let m = 0;
            const b = [];
            for (const _ of f.text){
                const w = `${x}|${_}`, A = o.get(w), E = s.get(w);
                !A || !E || (b.push({
                    ch: _,
                    cached: A,
                    pack: E
                }), m += A.glyphAdvance);
            }
            if (m === 0) continue;
            const c = f.cellsWide / m, [g, h, y] = Tt(f.color || Re);
            let k = 0;
            for (const { cached: _, pack: w } of b){
                const A = f.cellX + k * c + _.glyphLeft * c, E = f.cellY + (Fe - _.glyphTop) * c, G = _.glyphWidth * c, C = _.glyphHeight * c;
                G > 0 && C > 0 && l.push({
                    cellX: A,
                    cellY: E,
                    cellW: G,
                    cellH: C,
                    uvX: (w.atlasX + .5) / z,
                    uvY: (w.atlasY + .5) / z,
                    uvW: (w.width - .5 * 2) / z,
                    uvH: (w.height - .5 * 2) / z,
                    colorR: g,
                    colorG: h,
                    colorB: y,
                    pad0: 0
                }), k += _.glyphAdvance;
            }
        }
        return l.length === 0 ? null : {
            glyphs: l,
            atlas: r,
            atlasWidth: z,
            atlasHeight: z
        };
    }
    const Et = Me("CpuRenderer"), re = 5, Ot = 4279175690, Ut = 4294921596, ke = 4278190080;
    async function Gt(e) {
        const n = e.getContext("2d"), { WasmBridge: t } = await import("./index-CBkJc-a4.js").then(async (m)=>{
            await m.__tla;
            return m;
        }), o = await t.create(), r = re + 1, s = r * o.width + 1, i = r * o.height + 1;
        e.width = s, e.height = i, Et.debug("CPU: bridge ready, grid", o.width, "x", o.height);
        let a = n.createImageData(s, i), u = new Uint32Array(a.data.buffer);
        u.fill(ke);
        function l() {
            const f = o.getCells(), d = o.width, x = o.height, m = s;
            for(let b = 0; b < x; b++){
                const c = b * d, g = b * r + 1;
                for(let h = 0; h < d; h++){
                    const y = f[c + h] === 0 ? Ot : Ut, k = h * r + 1;
                    for(let _ = 0; _ < re; _++){
                        const w = (g + _) * m + k;
                        for(let A = 0; A < re; A++)u[w + A] = y;
                    }
                }
            }
            n.putImageData(a, 0, 0);
        }
        return {
            tick () {
                o.tick(), l();
            },
            renderOnly () {
                l();
            },
            resize (f, d) {
                (e.width !== s || e.height !== i) && (e.width = s, e.height = i, a = n.createImageData(s, i), u = new Uint32Array(a.data.buffer), u.fill(ke));
            },
            setZones (f) {},
            setDecals (f) {},
            free () {}
        };
    }
    const F = Me("Renderer"), Be = self;
    let p = null, L = 0, oe = 0, se = 0;
    const $ = new Xe, T = new et, R = new it, I = new pt;
    function S(e) {
        Be.postMessage(e);
    }
    function B(e) {
        return e instanceof Error ? e.message : String(e);
    }
    function Ht(e) {
        const n = Math.min(1, Math.max(0, e));
        return n * n * (3 - 2 * n);
    }
    function Lt(e, n, t) {
        return e % ee === 0 ? "base_tick" : n && t > 0 && e % t === 0 ? "hires_tick" : "render_only";
    }
    function j() {
        S({
            type: "zones_state",
            zones: $.getAll()
        });
    }
    function ie(e) {
        S({
            type: "zones_error",
            message: e
        });
    }
    function K() {
        p?.setZones?.($.getAll());
    }
    function Pt(e) {
        $.setAll(e), K(), j();
    }
    function v() {
        S({
            type: "decals_state",
            decals: T.getAll()
        });
    }
    function ae(e) {
        S({
            type: "decals_error",
            message: e
        });
    }
    function q() {
        p?.setDecals?.(T.getAll());
    }
    function Nt(e) {
        T.setAll(e), q(), v();
    }
    function P() {
        S({
            type: "hires_state",
            regions: R.getAll()
        });
    }
    function Ae(e) {
        S({
            type: "error",
            phase: "hires",
            message: e
        });
    }
    function N() {
        p?.setHiResRegions?.(R.getAll());
    }
    function X() {
        S({
            type: "text_state",
            blocks: I.getAll()
        });
    }
    function Y(e) {
        S({
            type: "text_error",
            message: e
        });
    }
    function Z() {
        p?.setText?.(I.getAll());
    }
    Be.onmessage = async (e)=>{
        switch(e.data.type){
            case "init":
                {
                    const { canvas: n, cellPx: t } = e.data;
                    F.debug("Init received — canvas", n.width, "x", n.height, "cell_px", t);
                    let o = !1;
                    try {
                        if (!(await navigator.gpu?.requestAdapter() ?? null)) throw new Error("No WebGPU adapter");
                        o = !0, F.debug("GPU: probe passed — adapter found");
                    } catch (r) {
                        F.info("GPU: probe failed, will use CPU renderer:", B(r)), S({
                            type: "error",
                            phase: "gpu-probe",
                            message: B(r)
                        });
                    }
                    if (o) try {
                        const { GpuGameOfLife: r } = await import("./game_of_life_gpu-BHr4mR4q.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        });
                        F.debug("GPU: module loaded, initialising surface...");
                        const s = await r.new_offscreen(n, t), i = s, a = (c)=>{
                            if (typeof i.set_zones_json == "function") try {
                                i.set_zones_json(JSON.stringify(c));
                            } catch (g) {
                                ie(`GPU zone update failed: ${B(g)}`);
                            }
                        }, u = (c)=>{
                            if (typeof i.set_decals_json == "function") try {
                                i.set_decals_json(JSON.stringify(c));
                            } catch (g) {
                                ae(`GPU decal update failed: ${B(g)}`);
                            }
                        }, l = new Map, f = (c)=>`${c.x1},${c.y1},${c.x2},${c.y2},${c.multiplier}`, d = (c)=>{
                            let g = 0;
                            for(let h = 0; h < c.length; h++)g = (g << 5) - g + c.charCodeAt(h) | 0;
                            return g >>> 0;
                        }, x = (c)=>{
                            const g = new Set(c.map((y)=>y.id));
                            for (const [y] of l)g.has(y) || (i.remove_hires_region?.(d(y)), l.delete(y));
                            if (c.length === 0) {
                                i.clear_hires_regions?.(), l.clear(), se = 0;
                                return;
                            }
                            for (const y of c){
                                const k = f(y), _ = d(y.id);
                                l.get(y.id) !== k ? (i.remove_hires_region?.(_), i.add_hires_region?.(_, y.x1, y.y1, y.x2, y.y2, y.multiplier, y.showGrid ?? !0, y.showBaseGrid ?? !0, y.showBorder ?? !0), l.set(y.id, k)) : i.update_hires_flags?.(_, y.showGrid ?? !0, y.showBaseGrid ?? !0, y.showBorder ?? !0), i.set_hires_paused?.(_, !y.enabled), i.set_hires_tick_multiplier?.(_, y.tickMultiplier ?? 1);
                            }
                            const h = i.max_hires_tick_multiplier?.() ?? 1;
                            se = h > 1 ? Math.max(1, Math.floor(ee / h)) : 0;
                        }, m = (c)=>{
                            const g = c.filter((h)=>h.enabled && h.renderMode !== "sdf");
                            if (g.length === 0) i.clear_frozen_cells?.();
                            else try {
                                i.set_frozen_cells?.(JSON.stringify(St(g)));
                            } catch (h) {
                                Y(`Frozen cell rasterization failed: ${B(h)}`);
                            }
                            for (const h of R.getAll()){
                                const y = d(h.id);
                                if (g.length === 0) {
                                    i.clear_hires_frozen_cells?.(y);
                                    continue;
                                }
                                try {
                                    const k = Dt(g, h);
                                    k.length === 0 ? i.clear_hires_frozen_cells?.(y) : i.set_hires_frozen_cells?.(y, JSON.stringify(k));
                                } catch (k) {
                                    Y(`Hi-res frozen rasterization failed: ${B(k)}`);
                                }
                            }
                            try {
                                const h = Bt(c);
                                if (!h) {
                                    i.clear_text_glyphs?.();
                                    return;
                                }
                                i.upload_text_atlas?.(h.atlas, h.atlasWidth, h.atlasHeight), i.set_text_glyphs?.(JSON.stringify(h.glyphs));
                            } catch (h) {
                                Y(`SDF generation failed: ${B(h)}`);
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
                            hiresTick: ()=>i.hires_tick_and_render?.(),
                            resize: (c, g)=>{
                                n.width = c, n.height = g, s.resize(c, g);
                            },
                            setScroll: (c)=>s.set_scroll(c),
                            setTransition: (c)=>s.set_transition(c),
                            toggleCell: (c, g)=>{
                                s.toggle_cell(c, g), s.flush_and_render();
                            },
                            setZones: (c)=>a(c),
                            setDecals: (c)=>u(c),
                            setHiResRegions: (c)=>x(c),
                            setText: (c)=>m(c),
                            gridInfo: b,
                            free: ()=>s.free()
                        }, p.setScroll?.(L), p.setTransition?.(1), p.setZones?.($.getAll()), p.setDecals?.(T.getAll()), p.setHiResRegions?.(R.getAll()), p.setText?.(I.getAll()), F.info("GPU renderer ready"), S({
                            type: "ready",
                            backend: "gpu",
                            gridInfo: b()
                        });
                        break;
                    } catch (r) {
                        const s = B(r);
                        F.error("GPU init failed after probe passed (canvas may be locked):", s), S({
                            type: "error",
                            phase: "gpu-init",
                            message: s
                        });
                        break;
                    }
                    try {
                        p = await Gt(n), p.setScroll?.(L), p.setZones?.($.getAll()), p.setDecals?.(T.getAll()), p.setHiResRegions?.(R.getAll()), p.setText?.(I.getAll()), F.info("CPU renderer ready"), S({
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
                        const s = B(r);
                        F.error("CPU init failed:", s), S({
                            type: "error",
                            phase: "cpu-init",
                            message: s
                        });
                    }
                    break;
                }
            case "frame":
                {
                    if (!p) break;
                    switch(oe++, Lt(oe, !!p.hiresTick, se)){
                        case "base_tick":
                            p.setTransition?.(0), p.tick();
                            break;
                        case "hires_tick":
                            p.hiresTick();
                            break;
                        case "render_only":
                            p.setTransition?.(Ht(oe % ee / ee)), p.renderOnly && p.renderOnly();
                            break;
                    }
                    break;
                }
            case "resize":
                F.debug("Resize →", e.data.width, "x", e.data.height), p?.resize(e.data.width, e.data.height), p?.setScroll?.(L), p?.setTransition?.(1), p?.setZones?.($.getAll()), p?.setDecals?.(T.getAll()), p?.setHiResRegions?.(R.getAll()), p?.setText?.(I.getAll()), p?.gridInfo && S({
                    type: "grid_info",
                    gridInfo: p.gridInfo()
                });
                break;
            case "scroll":
                L = e.data.scrollY, p?.setScroll?.(L);
                break;
            case "toggle_cell":
                p?.toggleCell?.(e.data.cx, e.data.cy);
                break;
            case "set_zones":
                Pt(e.data.zones);
                break;
            case "add_zone":
                {
                    const n = $.add(e.data.zone);
                    if (n.error) {
                        ie(n.error);
                        break;
                    }
                    K(), j();
                    break;
                }
            case "update_zone":
                {
                    const n = $.update(e.data.zone);
                    if (n.error) {
                        ie(n.error);
                        break;
                    }
                    K(), j();
                    break;
                }
            case "remove_zone":
                $.remove(e.data.id), K(), j();
                break;
            case "clear_zones":
                $.clear(), K(), j();
                break;
            case "set_decals":
                Nt(e.data.decals);
                break;
            case "add_decal":
                {
                    const n = T.add(e.data.decal);
                    if (n.error) {
                        ae(n.error);
                        break;
                    }
                    q(), v();
                    break;
                }
            case "update_decal":
                {
                    const n = T.update(e.data.decal);
                    if (n.error) {
                        ae(n.error);
                        break;
                    }
                    q(), v();
                    break;
                }
            case "remove_decal":
                T.remove(e.data.id), q(), v();
                break;
            case "clear_decals":
                T.clear(), q(), v();
                break;
            case "set_hires_regions":
                R.setAll(e.data.regions), N(), P();
                break;
            case "add_hires":
                {
                    const n = R.add(e.data.region);
                    if (n.error) {
                        Ae(n.error);
                        break;
                    }
                    N(), P();
                    break;
                }
            case "update_hires":
                {
                    const n = R.update(e.data.region);
                    if (n.error) {
                        Ae(n.error);
                        break;
                    }
                    N(), P();
                    break;
                }
            case "remove_hires":
                R.remove(e.data.id), N(), P();
                break;
            case "clear_hires":
                R.clear(), N(), P();
                break;
            case "set_text":
                I.setAll(e.data.blocks), Z(), X();
                break;
            case "add_text":
                {
                    const n = I.add(e.data.block);
                    if (n.error) {
                        Y(n.error);
                        break;
                    }
                    Z(), X();
                    break;
                }
            case "update_text":
                {
                    const n = I.update(e.data.block);
                    if (n.error) {
                        Y(n.error);
                        break;
                    }
                    Z(), X();
                    break;
                }
            case "remove_text":
                I.remove(e.data.id), Z(), X();
                break;
            case "clear_text":
                I.clear(), Z(), X();
                break;
            case "perf_snapshot":
                break;
            case "stop":
                p?.free(), p = null;
                break;
        }
    };
})();
