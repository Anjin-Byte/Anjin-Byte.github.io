var _a2;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: true, subtree: true });
  function n(l) {
    const o = {};
    return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function a(l) {
    if (l.ep) return;
    l.ep = true;
    const o = n(l);
    fetch(l.href, o);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const rt = {}, Ul = [], Kn = () => {
}, $m = () => false, Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vc = (e) => e.startsWith("onUpdate:"), Dt = Object.assign, mc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zS = Object.prototype.hasOwnProperty, et = (e, t) => zS.call(e, t), De = Array.isArray, Yl = (e) => bi(e) === "[object Map]", Hm = (e) => bi(e) === "[object Set]", nf = (e) => bi(e) === "[object Date]", Fe = (e) => typeof e == "function", gt = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", zm = (e) => (Je(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), Wm = Object.prototype.toString, bi = (e) => Wm.call(e), WS = (e) => bi(e).slice(8, -1), jm = (e) => bi(e) === "[object Object]", Pr = (e) => gt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, jS = /-\w/g, un = Ar((e) => e.replace(jS, (t) => t.slice(1).toUpperCase())), GS = /\B([A-Z])/g, xl = Ar((e) => e.replace(GS, "-$1").toLowerCase()), Qn = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), ps = Ar((e) => e ? `on${Qn(e)}` : ""), Ma = (e, t) => !Object.is(e, t), Zi = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Gm = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, hc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, US = (e) => {
  const t = gt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let af;
const Tr = () => af || (af = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ge(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = gt(a) ? XS(a) : ge(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (gt(e) || Je(e)) return e;
}
const YS = /;(?![^(]*\))/g, KS = /:([^]+)/, qS = /\/\*[^]*?\*\//g;
function XS(e) {
  const t = {};
  return e.replace(qS, "").split(YS).forEach((n) => {
    if (n) {
      const a = n.split(KS);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (gt(e)) t = e;
  else if (De(e)) for (let n = 0; n < e.length; n++) {
    const a = ne(e[n]);
    a && (t += a + " ");
  }
  else if (Je(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function ZS(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !gt(t) && (e.class = ne(t)), n && (e.style = ge(n)), e;
}
const JS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", QS = fc(JS);
function Um(e) {
  return !!e || e === "";
}
function ew(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = gc(e[a], t[a]);
  return n;
}
function gc(e, t) {
  if (e === t) return true;
  let n = nf(e), a = nf(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Bn(e), a = Bn(t), n || a) return e === t;
  if (n = De(e), a = De(t), n || a) return n && a ? ew(e, t) : false;
  if (n = Je(e), a = Je(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !gc(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const Ym = (e) => !!(e && e.__v_isRef === true), ze = (e) => gt(e) ? e : e == null ? "" : De(e) || Je(e) && (e.toString === Wm || !Fe(e.toString)) ? Ym(e) ? ze(e.value) : JSON.stringify(e, Km, 2) : String(e), Km = (e, t) => Ym(t) ? Km(e, t.value) : Yl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Ss(a, o) + " =>"] = l, n), {}) } : Hm(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ss(n)) } : Bn(t) ? Ss(t) : Je(t) && !De(t) && !jm(t) ? String(t) : t, Ss = (e, t = "") => {
  var n;
  return Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qt;
class qm {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = qt, !t && qt && (this.index = (qt.scopes || (qt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = qt;
      try {
        return qt = this, t();
      } finally {
        qt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = qt, qt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (qt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ql(e) {
  return new qm(e);
}
function Xm() {
  return qt;
}
function yt(e, t = false) {
  qt && qt.cleanups.push(e);
}
let ft;
const ws = /* @__PURE__ */ new WeakSet();
class Zm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qt && qt.active && qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ws.has(this) && (ws.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qm(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, lf(this), eh(this);
    const t = ft, n = En;
    ft = this, En = true;
    try {
      return this.fn();
    } finally {
      th(this), ft = t, En = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) pc(t);
      this.deps = this.depsTail = void 0, lf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    tu(this) && this.run();
  }
  get dirty() {
    return tu(this);
  }
}
let Jm = 0, Fo, No;
function Qm(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = No, No = e;
    return;
  }
  e.next = Fo, Fo = e;
}
function yc() {
  Jm++;
}
function bc() {
  if (--Jm > 0) return;
  if (No) {
    let t = No;
    for (No = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Fo; ) {
    let t = Fo;
    for (Fo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (a) {
        e || (e = a);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function eh(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function th(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), pc(a), tw(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function tu(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (nh(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function nh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tu(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = ft, a = En;
  ft = e, En = true;
  try {
    eh(e);
    const l = e.fn(e._value);
    (t.version === 0 || Ma(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    ft = n, En = a, th(e), e.flags &= -3;
  }
}
function pc(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) pc(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function tw(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let En = true;
const ah = [];
function va() {
  ah.push(En), En = false;
}
function ma() {
  const e = ah.pop();
  En = e === void 0 ? true : e;
}
function lf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ft;
    ft = void 0;
    try {
      t();
    } finally {
      ft = n;
    }
  }
}
let Ko = 0;
class nw {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Sc {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!ft || !En || ft === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ft) n = this.activeLink = new nw(ft, this), ft.deps ? (n.prevDep = ft.depsTail, ft.depsTail.nextDep = n, ft.depsTail = n) : ft.deps = ft.depsTail = n, lh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = ft.depsTail, n.nextDep = void 0, ft.depsTail.nextDep = n, ft.depsTail = n, ft.deps === n && (ft.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ko++, this.notify(t);
  }
  notify(t) {
    yc();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      bc();
    }
  }
}
function lh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) lh(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const lr = /* @__PURE__ */ new WeakMap(), il = Symbol(""), nu = Symbol(""), qo = Symbol("");
function Xt(e, t, n) {
  if (En && ft) {
    let a = lr.get(e);
    a || lr.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Sc()), l.map = a, l.key = n), l.track();
  }
}
function ca(e, t, n, a, l, o) {
  const i = lr.get(e);
  if (!i) {
    Ko++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (yc(), t === "clear") i.forEach(r);
  else {
    const s = De(e), u = s && Pr(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === qo || !Bn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(qo)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(il)), Yl(e) && r(i.get(nu)));
        break;
      case "delete":
        s || (r(i.get(il)), Yl(e) && r(i.get(nu)));
        break;
      case "set":
        Yl(e) && r(i.get(il));
        break;
    }
  }
  bc();
}
function aw(e, t) {
  const n = lr.get(e);
  return n && n.get(t);
}
function Bl(e) {
  const t = Pe(e);
  return t === e ? t : (Xt(t, "iterate", qo), bn(e) ? t : t.map(Rn));
}
function Er(e) {
  return Xt(e = Pe(e), "iterate", qo), e;
}
function Ta(e, t) {
  return ha(e) ? eo(Ba(e) ? Rn(t) : t) : Rn(t);
}
const lw = { __proto__: null, [Symbol.iterator]() {
  return ks(this, Symbol.iterator, (e) => Ta(this, e));
}, concat(...e) {
  return Bl(this).concat(...e.map((t) => De(t) ? Bl(t) : t));
}, entries() {
  return ks(this, "entries", (e) => (e[1] = Ta(this, e[1]), e));
}, every(e, t) {
  return la(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return la(this, "filter", e, t, (n) => n.map((a) => Ta(this, a)), arguments);
}, find(e, t) {
  return la(this, "find", e, t, (n) => Ta(this, n), arguments);
}, findIndex(e, t) {
  return la(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return la(this, "findLast", e, t, (n) => Ta(this, n), arguments);
}, findLastIndex(e, t) {
  return la(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return la(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return xs(this, "includes", e);
}, indexOf(...e) {
  return xs(this, "indexOf", e);
}, join(e) {
  return Bl(this).join(e);
}, lastIndexOf(...e) {
  return xs(this, "lastIndexOf", e);
}, map(e, t) {
  return la(this, "map", e, t, void 0, arguments);
}, pop() {
  return _o(this, "pop");
}, push(...e) {
  return _o(this, "push", e);
}, reduce(e, ...t) {
  return of(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return of(this, "reduceRight", e, t);
}, shift() {
  return _o(this, "shift");
}, some(e, t) {
  return la(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return _o(this, "splice", e);
}, toReversed() {
  return Bl(this).toReversed();
}, toSorted(e) {
  return Bl(this).toSorted(e);
}, toSpliced(...e) {
  return Bl(this).toSpliced(...e);
}, unshift(...e) {
  return _o(this, "unshift", e);
}, values() {
  return ks(this, "values", (e) => Ta(this, e));
} };
function ks(e, t, n) {
  const a = Er(e), l = a[t]();
  return a !== e && !bn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const ow = Array.prototype;
function la(e, t, n, a, l, o) {
  const i = Er(e), r = i !== e && !bn(e), s = i[t];
  if (s !== ow[t]) {
    const d = s.apply(e, o);
    return r ? Rn(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, Ta(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function of(e, t, n, a) {
  const l = Er(e);
  let o = n;
  return l !== e && (bn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ta(e, r), s, e);
  }), l[t](o, ...a);
}
function xs(e, t, n) {
  const a = Pe(e);
  Xt(a, "iterate", qo);
  const l = a[t](...n);
  return (l === -1 || l === false) && pi(n[0]) ? (n[0] = Pe(n[0]), a[t](...n)) : l;
}
function _o(e, t, n = []) {
  va(), yc();
  const a = Pe(e)[t].apply(e, n);
  return bc(), ma(), a;
}
const iw = fc("__proto__,__v_isRef,__isVue"), oh = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn));
function rw(e) {
  Bn(e) || (e = String(e));
  const t = Pe(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class ih {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? yw : ch : o ? uh : sh).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = De(t);
    if (!l) {
      let s;
      if (i && (s = lw[n])) return s;
      if (n === "hasOwnProperty") return rw;
    }
    const r = Reflect.get(t, n, ht(t) ? t : a);
    if ((Bn(n) ? oh.has(n) : iw(n)) || (l || Xt(t, "get", n), o)) return r;
    if (ht(r)) {
      const s = i && Pr(n) ? r : r.value;
      return l && Je(s) ? vl(s) : s;
    }
    return Je(r) ? l ? vl(r) : Tt(r) : r;
  }
}
class rh extends ih {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = De(t) && Pr(n);
    if (!this._isShallow) {
      const u = ha(o);
      if (!bn(a) && !ha(a) && (o = Pe(o), a = Pe(a)), !i && ht(o) && !ht(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : et(t, n), s = Reflect.set(t, n, a, ht(t) ? t : l);
    return t === Pe(l) && (r ? Ma(a, o) && ca(t, "set", n, a) : ca(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = et(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && ca(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Bn(n) || !oh.has(n)) && Xt(t, "has", n), a;
  }
  ownKeys(t) {
    return Xt(t, "iterate", De(t) ? "length" : il), Reflect.ownKeys(t);
  }
}
class sw extends ih {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const uw = new rh(), cw = new sw(), dw = new rh(true);
const au = (e) => e, $i = (e) => Reflect.getPrototypeOf(e);
function fw(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Pe(l), i = Yl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? au : t ? eo : Rn;
    return !t && Xt(o, "iterate", s ? nu : il), Dt(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function Hi(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function vw(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Pe(o), r = Pe(l);
    e || (Ma(l, r) && Xt(i, "get", l), Xt(i, "get", r));
    const { has: s } = $i(i), u = t ? au : e ? eo : Rn;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Xt(Pe(l), "iterate", il), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Pe(o), r = Pe(l);
    return e || (Ma(l, r) && Xt(i, "has", l), Xt(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Pe(r), u = t ? au : e ? eo : Rn;
    return !e && Xt(s, "iterate", il), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return Dt(n, e ? { add: Hi("add"), set: Hi("set"), delete: Hi("delete"), clear: Hi("clear") } : { add(l) {
    !t && !bn(l) && !ha(l) && (l = Pe(l));
    const o = Pe(this);
    return $i(o).has.call(o, l) || (o.add(l), ca(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !bn(o) && !ha(o) && (o = Pe(o));
    const i = Pe(this), { has: r, get: s } = $i(i);
    let u = r.call(i, l);
    u || (l = Pe(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Ma(o, c) && ca(i, "set", l, o) : ca(i, "add", l, o), this;
  }, delete(l) {
    const o = Pe(this), { has: i, get: r } = $i(o);
    let s = i.call(o, l);
    s || (l = Pe(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && ca(o, "delete", l, void 0), u;
  }, clear() {
    const l = Pe(this), o = l.size !== 0, i = l.clear();
    return o && ca(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = fw(l, e, t);
  }), n;
}
function wc(e, t) {
  const n = vw(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(et(n, l) && l in a ? n : a, l, o);
}
const mw = { get: wc(false, false) }, hw = { get: wc(false, true) }, gw = { get: wc(true, false) };
const sh = /* @__PURE__ */ new WeakMap(), uh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), yw = /* @__PURE__ */ new WeakMap();
function bw(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function pw(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bw(WS(e));
}
function Tt(e) {
  return ha(e) ? e : kc(e, false, uw, mw, sh);
}
function dh(e) {
  return kc(e, false, dw, hw, uh);
}
function vl(e) {
  return kc(e, true, cw, gw, ch);
}
function kc(e, t, n, a, l) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = pw(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function Ba(e) {
  return ha(e) ? Ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ha(e) {
  return !!(e && e.__v_isReadonly);
}
function bn(e) {
  return !!(e && e.__v_isShallow);
}
function pi(e) {
  return e ? !!e.__v_raw : false;
}
function Pe(e) {
  const t = e && e.__v_raw;
  return t ? Pe(t) : e;
}
function fh(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && Gm(e, "__v_skip", true), e;
}
const Rn = (e) => Je(e) ? Tt(e) : e, eo = (e) => Je(e) ? vl(e) : e;
function ht(e) {
  return e ? e.__v_isRef === true : false;
}
function Z(e) {
  return vh(e, false);
}
function ce(e) {
  return vh(e, true);
}
function vh(e, t) {
  return ht(e) ? e : new Sw(e, t);
}
class Sw {
  constructor(t, n) {
    this.dep = new Sc(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Pe(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || bn(t) || ha(t);
    t = a ? t : Pe(t), Ma(t, n) && (this._rawValue = t, this._value = a ? t : Rn(t), this.dep.trigger());
  }
}
function Ne(e) {
  return ht(e) ? e.value : e;
}
function tt(e) {
  return Fe(e) ? e() : Ne(e);
}
const ww = { get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return ht(l) && !ht(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function mh(e) {
  return Ba(e) ? e : new Proxy(e, ww);
}
function ho(e) {
  const t = De(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = hh(e, n);
  return t;
}
class kw {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Pe(t);
    let l = true, o = t;
    if (!De(t) || !Pr(String(n))) do
      l = !pi(o) || bn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ne(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && ht(this._raw[this._key])) {
      const n = this._object[this._key];
      if (ht(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return aw(this._raw, this._key);
  }
}
class xw {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return ht(e) ? e : Fe(e) ? new xw(e) : Je(e) && arguments.length > 1 ? hh(e, t, n) : Z(e);
}
function hh(e, t, n) {
  return new kw(e, t, n);
}
class Cw {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Sc(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && ft !== this) return Qm(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return nh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function _w(e, t, n = false) {
  let a, l;
  return Fe(e) ? a = e : (a = e.get, l = e.set), new Cw(a, l, n);
}
const zi = {}, or = /* @__PURE__ */ new WeakMap();
let tl;
function Iw(e, t = false, n = tl) {
  if (n) {
    let a = or.get(n);
    a || or.set(n, a = []), a.push(e);
  }
}
function Vw(e, t, n = rt) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (_) => l ? _ : bn(_) || l === false || l === 0 ? da(_, 1) : da(_);
  let c, d, f, v, b = false, m = false;
  if (ht(e) ? (d = () => e.value, b = bn(e)) : Ba(e) ? (d = () => u(e), b = true) : De(e) ? (m = true, b = e.some((_) => Ba(_) || bn(_)), d = () => e.map((_) => {
    if (ht(_)) return _.value;
    if (Ba(_)) return u(_);
    if (Fe(_)) return s ? s(_, 2) : _();
  })) : Fe(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      va();
      try {
        f();
      } finally {
        ma();
      }
    }
    const _ = tl;
    tl = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      tl = _;
    }
  } : d = Kn, t && l) {
    const _ = d, w = l === true ? 1 / 0 : l;
    d = () => da(_(), w);
  }
  const g = Xm(), h = () => {
    c.stop(), g && g.active && mc(g.effects, c);
  };
  if (o && t) {
    const _ = t;
    t = (...w) => {
      _(...w), h();
    };
  }
  let S = m ? new Array(e.length).fill(zi) : zi;
  const V = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_)) if (t) {
      const w = c.run();
      if (l || b || (m ? w.some((y, C) => Ma(y, S[C])) : Ma(w, S))) {
        f && f();
        const y = tl;
        tl = c;
        try {
          const C = [w, S === zi ? void 0 : m && S[0] === zi ? [] : S, v];
          S = w, s ? s(t, 3, C) : t(...C);
        } finally {
          tl = y;
        }
      }
    } else c.run();
  };
  return r && r(V), c = new Zm(d), c.scheduler = i ? () => i(V, false) : V, v = (_) => Iw(_, false, c), f = c.onStop = () => {
    const _ = or.get(c);
    if (_) {
      if (s) s(_, 4);
      else for (const w of _) w();
      or.delete(c);
    }
  }, t ? a ? V(true) : S = c.run() : i ? i(V.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function da(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, ht(e)) da(e.value, t, n);
  else if (De(e)) for (let a = 0; a < e.length; a++) da(e[a], t, n);
  else if (Hm(e) || Yl(e)) e.forEach((a) => {
    da(a, t, n);
  });
  else if (jm(e)) {
    for (const a in e) da(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && da(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Si(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Dr(l, t, n);
  }
}
function On(e, t, n, a) {
  if (Fe(e)) {
    const l = Si(e, t, n, a);
    return l && zm(l) && l.catch((o) => {
      Dr(o, t, n);
    }), l;
  }
  if (De(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(On(e[o], t, n, a));
    return l;
  }
}
function Dr(e, t, n, a = true) {
  const l = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || rt;
  if (t) {
    let r = t.parent;
    const s = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, s, u) === false) return;
      }
      r = r.parent;
    }
    if (o) {
      va(), Si(o, null, 10, [e, s, u]), ma();
      return;
    }
  }
  Pw(e, n, l, a, i);
}
function Pw(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const ln = [];
let jn = -1;
const Kl = [];
let Ea = null, Nl = 0;
const gh = Promise.resolve();
let ir = null;
function Ae(e) {
  const t = ir || gh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Aw(e) {
  let t = jn + 1, n = ln.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = ln[a], o = Xo(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function xc(e) {
  if (!(e.flags & 1)) {
    const t = Xo(e), n = ln[ln.length - 1];
    !n || !(e.flags & 2) && t >= Xo(n) ? ln.push(e) : ln.splice(Aw(t), 0, e), e.flags |= 1, yh();
  }
}
function yh() {
  ir || (ir = gh.then(ph));
}
function Tw(e) {
  De(e) ? Kl.push(...e) : Ea && e.id === -1 ? Ea.splice(Nl + 1, 0, e) : e.flags & 1 || (Kl.push(e), e.flags |= 1), yh();
}
function rf(e, t, n = jn + 1) {
  for (; n < ln.length; n++) {
    const a = ln[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      ln.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function bh(e) {
  if (Kl.length) {
    const t = [...new Set(Kl)].sort((n, a) => Xo(n) - Xo(a));
    if (Kl.length = 0, Ea) {
      Ea.push(...t);
      return;
    }
    for (Ea = t, Nl = 0; Nl < Ea.length; Nl++) {
      const n = Ea[Nl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ea = null, Nl = 0;
  }
}
const Xo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ph(e) {
  try {
    for (jn = 0; jn < ln.length; jn++) {
      const t = ln[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Si(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < ln.length; jn++) {
      const t = ln[jn];
      t && (t.flags &= -2);
    }
    jn = -1, ln.length = 0, bh(), ir = null, (ln.length || Kl.length) && ph();
  }
}
let Wt = null, Sh = null;
function rr(e) {
  const t = Wt;
  return Wt = e, Sh = e && e.type.__scopeId || null, t;
}
function st(e, t = Wt, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && cr(-1);
    const o = rr(t);
    let i;
    try {
      i = e(...l);
    } finally {
      rr(o), a._d && cr(1);
    }
    return i;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function nt(e, t) {
  if (Wt === null) return e;
  const n = Lr(Wt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = rt] = t[l];
    o && (Fe(o) && (o = { mounted: o, updated: o }), o.deep && da(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function qa(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (va(), On(s, n, 8, [e.el, r, e, t]), ma());
  }
}
function Ze(e, t) {
  if (Zt) {
    let n = Zt.provides;
    const a = Zt.parent && Zt.parent.provides;
    a === n && (n = Zt.provides = Object.create(a)), n[e] = t;
  }
}
function Me(e, t, n = false) {
  const a = ki();
  if (a || Xl) {
    let l = Xl ? Xl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Fe(t) ? t.call(a && a.proxy) : t;
  }
}
const Ew = Symbol.for("v-scx"), Dw = () => Me(Ew);
function ut(e, t) {
  return Cc(e, null, t);
}
function fe(e, t, n) {
  return Cc(e, t, n);
}
function Cc(e, t, n = rt) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = Dt({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Qo) {
    if (o === "sync") {
      const v = Dw();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Kn, v.resume = Kn, v.pause = Kn, v;
    }
  }
  const c = Zt;
  r.call = (v, b, m) => On(v, c, b, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Kt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, b) => {
    b ? v() : xc(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = Vw(e, t, r);
  return Qo && (u ? u.push(f) : s && f()), f;
}
function Mw(e, t, n) {
  const a = this.proxy, l = gt(e) ? e.includes(".") ? wh(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Fe(t) ? o = t : (o = t.handler, n = t);
  const i = xi(this), r = Cc(l, o.bind(a), n);
  return i(), r;
}
function wh(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const kh = Symbol("_vte"), xh = (e) => e.__isTeleport, $o = (e) => e && (e.disabled || e.disabled === ""), sf = (e) => e && (e.defer || e.defer === ""), uf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lu = (e, t) => {
  const n = e && e.to;
  return gt(n) ? t ? t(n) : null : n;
}, Ch = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: b, createText: m, createComment: g } } = u, h = $o(t.props);
  let { shapeFlag: S, children: V, dynamicChildren: _ } = t;
  if (e == null) {
    const w = t.el = m(""), y = t.anchor = m("");
    v(w, n, a), v(y, n, a);
    const C = (A, P) => {
      S & 16 && c(V, A, P, l, o, i, r, s);
    }, x = () => {
      const A = t.target = lu(t.props, b), P = ou(A, t, m, v);
      A && (i !== "svg" && uf(A) ? i = "svg" : i !== "mathml" && cf(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Ji(t, false)));
    };
    h && (C(n, y), Ji(t, true)), sf(t.props) ? (t.el.__isMounted = false, Kt(() => {
      x(), delete t.el.__isMounted;
    }, o)) : x();
  } else {
    if (sf(t.props) && e.el.__isMounted === false) {
      Kt(() => {
        Ch.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const w = t.anchor = e.anchor, y = t.target = e.target, C = t.targetAnchor = e.targetAnchor, x = $o(e.props), A = x ? n : y, P = x ? w : C;
    if (i === "svg" || uf(y) ? i = "svg" : (i === "mathml" || cf(y)) && (i = "mathml"), _ ? (f(e.dynamicChildren, _, A, l, o, i, r), Ac(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Wi(t, n, w, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const D = t.target = lu(t.props, b);
      D && Wi(t, D, null, u, 0);
    } else x && Wi(t, y, C, u, 1);
    Ji(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !$o(f);
    for (let b = 0; b < r.length; b++) {
      const m = r[b];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: Wi, hydrate: Bw };
function Wi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || $o(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function Bw(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(g, h) {
    let S = h;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor") t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, g._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      S = i(S);
    }
  }
  function v(g, h) {
    h.anchor = d(i(g), h, r(g), n, a, l, o);
  }
  const b = t.target = lu(t.props, s), m = $o(t.props);
  if (b) {
    const g = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(b, g), t.targetAnchor || ou(b, t, c, u, r(e) === b ? e : null)) : (t.anchor = i(e), f(b, g), t.targetAnchor || ou(b, t, c, u), d(g && i(g), t, b, n, a, l, o))), Ji(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const Rw = Ch;
function Ji(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function ou(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[kh] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Gn = Symbol("_leaveCb"), Io = Symbol("_enterCb");
function _h() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return bt(() => {
    e.isMounted = true;
  }), Ut(() => {
    e.isUnmounting = true;
  }), e;
}
const xn = [Function, Array], Ih = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: xn, onEnter: xn, onAfterEnter: xn, onEnterCancelled: xn, onBeforeLeave: xn, onLeave: xn, onAfterLeave: xn, onLeaveCancelled: xn, onBeforeAppear: xn, onAppear: xn, onAfterAppear: xn, onAppearCancelled: xn }, Vh = (e) => {
  const t = e.subTree;
  return t.component ? Vh(t.component) : t;
}, Ow = { name: "BaseTransition", props: Ih, setup(e, { slots: t }) {
  const n = ki(), a = _h();
  return () => {
    const l = t.default && _c(t.default(), true);
    if (!l || !l.length) return;
    const o = Ph(l), i = Pe(e), { mode: r } = i;
    if (a.isLeaving) return Cs(o);
    const s = df(o);
    if (!s) return Cs(o);
    let u = Zo(s, i, a, n, (d) => u = d);
    s.type !== zt && ml(s, u);
    let c = n.subTree && df(n.subTree);
    if (c && c.type !== zt && !al(c, s) && Vh(n).type !== zt) {
      let d = Zo(c, i, a, n);
      if (ml(c, d), r === "out-in" && s.type !== zt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, Cs(o);
      r === "in-out" && s.type !== zt ? d.delayLeave = (f, v, b) => {
        const m = Ah(a, c);
        m[String(c.key)] = c, f[Gn] = () => {
          v(), f[Gn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          b(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function Ph(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== zt) {
      t = n;
      break;
    }
  }
  return t;
}
const Lw = Ow;
function Ah(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function Zo(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: b, onLeaveCancelled: m, onBeforeAppear: g, onAppear: h, onAfterAppear: S, onAppearCancelled: V } = t, _ = String(e.key), w = Ah(n, e), y = (A, P) => {
    A && On(A, a, 9, P);
  }, C = (A, P) => {
    const D = P[1];
    y(A, P), De(A) ? A.every((M) => M.length <= 1) && D() : A.length <= 1 && D();
  }, x = { mode: i, persisted: r, beforeEnter(A) {
    let P = s;
    if (!n.isMounted) if (o) P = g || s;
    else return;
    A[Gn] && A[Gn](true);
    const D = w[_];
    D && al(e, D) && D.el[Gn] && D.el[Gn](), y(P, [A]);
  }, enter(A) {
    if (w[_] === e) return;
    let P = u, D = c, M = d;
    if (!n.isMounted) if (o) P = h || u, D = S || c, M = V || d;
    else return;
    let E = false;
    A[Io] = (O) => {
      E || (E = true, O ? y(M, [A]) : y(D, [A]), x.delayedLeave && x.delayedLeave(), A[Io] = void 0);
    };
    const T = A[Io].bind(null, false);
    P ? C(P, [A, T]) : T();
  }, leave(A, P) {
    const D = String(e.key);
    if (A[Io] && A[Io](true), n.isUnmounting) return P();
    y(f, [A]);
    let M = false;
    A[Gn] = (T) => {
      M || (M = true, P(), T ? y(m, [A]) : y(b, [A]), A[Gn] = void 0, w[D] === e && delete w[D]);
    };
    const E = A[Gn].bind(null, false);
    w[D] = e, v ? C(v, [A, E]) : E();
  }, clone(A) {
    const P = Zo(A, t, n, a, l);
    return l && l(P), P;
  } };
  return x;
}
function Cs(e) {
  if (Mr(e)) return e = ga(e), e.children = null, e;
}
function df(e) {
  if (!Mr(e)) return xh(e.type) && e.children ? Ph(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Fe(n.default)) return n.default();
  }
}
function ml(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ml(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _c(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(_c(i.children, t, r))) : (t || i.type !== zt) && a.push(r != null ? ga(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function $t(e, t) {
  return Fe(e) ? Dt({ name: e.name }, t, { setup: e }) : e;
}
function Ot() {
  const e = ki();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Th(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ff(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const sr = /* @__PURE__ */ new WeakMap();
function Ho(e, t, n, a, l = false) {
  if (De(e)) {
    e.forEach((m, g) => Ho(m, t && (De(t) ? t[g] : t), n, a, l));
    return;
  }
  if (ql(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Ho(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? Lr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === rt ? r.refs = {} : r.refs, d = r.setupState, f = Pe(d), v = d === rt ? $m : (m) => ff(c, m) ? false : et(f, m), b = (m, g) => !(g && ff(c, g));
  if (u != null && u !== s) {
    if (vf(t), gt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (ht(u)) {
      const m = t;
      b(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (Fe(s)) Si(s, r, 12, [i, c]);
  else {
    const m = gt(s), g = ht(s);
    if (m || g) {
      const h = () => {
        if (e.f) {
          const S = m ? v(s) ? d[s] : c[s] : b() || !e.k ? s.value : c[e.k];
          if (l) De(S) && mc(S, o);
          else if (De(S)) S.includes(o) || S.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const V = [o];
            b(s, e.k) && (s.value = V), e.k && (c[e.k] = V);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : g && (b(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const S = () => {
          h(), sr.delete(e);
        };
        S.id = -1, sr.set(e, S), Kt(S, n);
      } else vf(e), h();
    }
  }
}
function vf(e) {
  const t = sr.get(e);
  t && (t.flags |= 8, sr.delete(e));
}
Tr().requestIdleCallback;
Tr().cancelIdleCallback;
const ql = (e) => !!e.type.__asyncLoader, Mr = (e) => e.type.__isKeepAlive;
function Eh(e, t) {
  Dh(e, "a", t);
}
function Ic(e, t) {
  Dh(e, "da", t);
}
function Dh(e, t, n = Zt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (Br(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) Mr(l.parent.vnode) && Fw(a, t, n, l), l = l.parent;
  }
}
function Fw(e, t, n, a) {
  const l = Br(t, e, a, true);
  yo(() => {
    mc(a[t], l);
  }, n);
}
function Br(e, t, n = Zt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      va();
      const r = xi(n), s = On(t, n, e, i);
      return r(), ma(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const pa = (e) => (t, n = Zt) => {
  (!Qo || e === "sp") && Br(e, (...a) => t(...a), n);
}, go = pa("bm"), bt = pa("m"), Mh = pa("bu"), Rr = pa("u"), Ut = pa("bum"), yo = pa("um"), Nw = pa("sp"), $w = pa("rtg"), Hw = pa("rtc");
function zw(e, t = Zt) {
  Br("ec", e, t);
}
const Bh = "components";
function pt(e, t) {
  return Rh(Bh, e, true, t) || e;
}
const Ww = Symbol.for("v-ndc");
function jw(e) {
  return gt(e) && Rh(Bh, e, false) || e;
}
function Rh(e, t, n = true, a = false) {
  const l = Wt || Zt;
  if (l) {
    const o = l.type;
    {
      const r = Vk(o, false);
      if (r && (r === t || r === un(t) || r === Qn(un(t)))) return o;
    }
    const i = mf(l[e] || o[e], t) || mf(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function mf(e, t) {
  return e && (e[t] || e[un(t)] || e[Qn(un(t))]);
}
function rn(e, t, n, a) {
  let l;
  const o = n, i = De(e);
  if (i || gt(e)) {
    const r = i && Ba(e);
    let s = false, u = false;
    r && (s = !bn(e), u = ha(e), e = Er(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? eo(Rn(e[c])) : Rn(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (Je(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
  else {
    const r = Object.keys(e);
    l = new Array(r.length);
    for (let s = 0, u = r.length; s < u; s++) {
      const c = r[s];
      l[s] = t(e[c], c, s, o);
    }
  }
  else l = [];
  return l;
}
function Gw(e, t, n = {}, a, l) {
  if (Wt.ce || Wt.parent && ql(Wt.parent) && Wt.parent.ce) {
    const u = Object.keys(n).length > 0;
    return Re(), Fa(be, null, [k("slot", n, a)], u ? -2 : 64);
  }
  let o = e[t];
  o && o._c && (o._d = false), Re();
  const i = o && Oh(o(n)), r = n.key || i && i.key, s = Fa(be, { key: (r && !Bn(r) ? r : `_${t}`) + (!i && a ? "_fb" : "") }, i || [], i && e._ === 1 ? 64 : -2);
  return o && o._c && (o._d = true), s;
}
function Oh(e) {
  return e.some((t) => to(t) ? !(t.type === zt || t.type === be && !Oh(t.children)) : true) ? e : null;
}
const iu = (e) => e ? ng(e) ? Lr(e) : iu(e.parent) : null, zo = Dt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => iu(e.parent), $root: (e) => iu(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Fh(e), $forceUpdate: (e) => e.f || (e.f = () => {
  xc(e.update);
}), $nextTick: (e) => e.n || (e.n = Ae.bind(e.proxy)), $watch: (e) => Mw.bind(e) }), _s = (e, t) => e !== rt && !e.__isScriptSetup && et(e, t), Uw = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: a, data: l, props: o, accessCache: i, type: r, appContext: s } = e;
  if (t[0] !== "$") {
    const f = i[t];
    if (f !== void 0) switch (f) {
      case 1:
        return a[t];
      case 2:
        return l[t];
      case 4:
        return n[t];
      case 3:
        return o[t];
    }
    else {
      if (_s(a, t)) return i[t] = 1, a[t];
      if (l !== rt && et(l, t)) return i[t] = 2, l[t];
      if (et(o, t)) return i[t] = 3, o[t];
      if (n !== rt && et(n, t)) return i[t] = 4, n[t];
      ru && (i[t] = 0);
    }
  }
  const u = zo[t];
  let c, d;
  if (u) return t === "$attrs" && Xt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== rt && et(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, et(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return _s(l, t) ? (l[t] = n, true) : a !== rt && et(a, t) ? (a[t] = n, true) : et(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== rt && r[0] !== "$" && et(e, r) || _s(t, r) || et(o, r) || et(a, r) || et(zo, r) || et(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : et(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function hf(e) {
  return De(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let ru = true;
function Yw(e) {
  const t = Fh(e), n = e.proxy, a = e.ctx;
  ru = false, t.beforeCreate && gf(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: b, activated: m, deactivated: g, beforeDestroy: h, beforeUnmount: S, destroyed: V, unmounted: _, render: w, renderTracked: y, renderTriggered: C, errorCaptured: x, serverPrefetch: A, expose: P, inheritAttrs: D, components: M, directives: E, filters: T } = t;
  if (u && Kw(u, a, null), i) for (const H in i) {
    const Q = i[H];
    Fe(Q) && (a[H] = Q.bind(n));
  }
  if (l) {
    const H = l.call(n, n);
    Je(H) && (e.data = Tt(H));
  }
  if (ru = true, o) for (const H in o) {
    const Q = o[H], ee = Fe(Q) ? Q.bind(n, n) : Fe(Q.get) ? Q.get.bind(n, n) : Kn, $ = !Fe(Q) && Fe(Q.set) ? Q.set.bind(n) : Kn, q = I({ get: ee, set: $ });
    Object.defineProperty(a, H, { enumerable: true, configurable: true, get: () => q.value, set: (j) => q.value = j });
  }
  if (r) for (const H in r) Lh(r[H], a, n, H);
  if (s) {
    const H = Fe(s) ? s.call(n) : s;
    Reflect.ownKeys(H).forEach((Q) => {
      Ze(Q, H[Q]);
    });
  }
  c && gf(c, e, "c");
  function W(H, Q) {
    De(Q) ? Q.forEach((ee) => H(ee.bind(n))) : Q && H(Q.bind(n));
  }
  if (W(go, d), W(bt, f), W(Mh, v), W(Rr, b), W(Eh, m), W(Ic, g), W(zw, x), W(Hw, y), W($w, C), W(Ut, S), W(yo, _), W(Nw, A), De(P)) if (P.length) {
    const H = e.exposed || (e.exposed = {});
    P.forEach((Q) => {
      Object.defineProperty(H, Q, { get: () => n[Q], set: (ee) => n[Q] = ee, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  w && e.render === Kn && (e.render = w), D != null && (e.inheritAttrs = D), M && (e.components = M), E && (e.directives = E), A && Th(e);
}
function Kw(e, t, n = Kn) {
  De(e) && (e = su(e));
  for (const a in e) {
    const l = e[a];
    let o;
    Je(l) ? "default" in l ? o = Me(l.from || a, l.default, true) : o = Me(l.from || a) : o = Me(l), ht(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function gf(e, t, n) {
  On(De(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Lh(e, t, n, a) {
  let l = a.includes(".") ? wh(n, a) : () => n[a];
  if (gt(e)) {
    const o = t[e];
    Fe(o) && fe(l, o);
  } else if (Fe(e)) fe(l, e.bind(n));
  else if (Je(e)) if (De(e)) e.forEach((o) => Lh(o, t, n, a));
  else {
    const o = Fe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Fe(o) && fe(l, o, e);
  }
}
function Fh(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => ur(s, u, i, true)), ur(s, t, i)), Je(t) && o.set(t, s), s;
}
function ur(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && ur(e, o, n, true), l && l.forEach((i) => ur(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = qw[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const qw = { data: yf, props: bf, emits: bf, methods: Mo, computed: Mo, beforeCreate: tn, created: tn, beforeMount: tn, mounted: tn, beforeUpdate: tn, updated: tn, beforeDestroy: tn, beforeUnmount: tn, destroyed: tn, unmounted: tn, activated: tn, deactivated: tn, errorCaptured: tn, serverPrefetch: tn, components: Mo, directives: Mo, watch: Zw, provide: yf, inject: Xw };
function yf(e, t) {
  return t ? e ? function() {
    return Dt(Fe(e) ? e.call(this, this) : e, Fe(t) ? t.call(this, this) : t);
  } : t : e;
}
function Xw(e, t) {
  return Mo(su(e), su(t));
}
function su(e) {
  if (De(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function tn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mo(e, t) {
  return e ? Dt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bf(e, t) {
  return e ? De(e) && De(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Dt(/* @__PURE__ */ Object.create(null), hf(e), hf(t ?? {})) : t;
}
function Zw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Dt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = tn(e[a], t[a]);
  return n;
}
function Nh() {
  return { app: null, config: { isNativeTag: $m, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Jw = 0;
function Qw(e, t) {
  return function(a, l = null) {
    Fe(a) || (a = Dt({}, a)), l != null && !Je(l) && (l = null);
    const o = Nh(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: Jw++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: Ak, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && Fe(c.install) ? (i.add(c), c.install(u, ...d)) : Fe(c) && (i.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, d) {
      return d ? (o.components[c] = d, u) : o.components[c];
    }, directive(c, d) {
      return d ? (o.directives[c] = d, u) : o.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const v = u._ceVNode || k(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, Lr(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (On(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Xl;
      Xl = u;
      try {
        return c();
      } finally {
        Xl = d;
      }
    } };
    return u;
  };
}
let Xl = null;
const ek = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${un(t)}Modifiers`] || e[`${xl(t)}Modifiers`];
function tk(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || rt;
  let l = n;
  const o = t.startsWith("update:"), i = o && ek(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => gt(c) ? c.trim() : c)), i.number && (l = n.map(hc)));
  let r, s = a[r = ps(t)] || a[r = ps(un(t))];
  !s && o && (s = a[r = ps(xl(t))]), s && On(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, On(u, e, 6, l);
  }
}
const nk = /* @__PURE__ */ new WeakMap();
function $h(e, t, n = false) {
  const a = n ? nk : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!Fe(e)) {
    const s = (u) => {
      const c = $h(u, t, true);
      c && (r = true, Dt(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (Je(e) && a.set(e, null), null) : (De(o) ? o.forEach((s) => i[s] = null) : Dt(i, o), Je(e) && a.set(e, i), i);
}
function Or(e, t) {
  return !e || !Vr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), et(e, t[0].toLowerCase() + t.slice(1)) || et(e, xl(t)) || et(e, t));
}
function pf(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: b, inheritAttrs: m } = e, g = rr(e);
  let h, S;
  try {
    if (n.shapeFlag & 4) {
      const _ = l || a, w = _;
      h = Un(u.call(w, _, c, d, v, f, b)), S = r;
    } else {
      const _ = t;
      h = Un(_.length > 1 ? _(d, { attrs: r, slots: i, emit: s }) : _(d, null)), S = t.props ? r : ak(r);
    }
  } catch (_) {
    Wo.length = 0, Dr(_, e, 1), h = k(zt);
  }
  let V = h;
  if (S && m !== false) {
    const _ = Object.keys(S), { shapeFlag: w } = V;
    _.length && w & 7 && (o && _.some(vc) && (S = lk(S, o)), V = ga(V, S, false, true));
  }
  return n.dirs && (V = ga(V, null, false, true), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && ml(V, n.transition), h = V, rr(g), h;
}
const ak = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Vr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lk = (e, t) => {
  const n = {};
  for (const a in e) (!vc(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function ok(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Sf(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Hh(i, a, f) && !Or(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Sf(a, i, u) : true : !!i;
  return false;
}
function Sf(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Hh(t, e, o) && !Or(n, o)) return true;
  }
  return false;
}
function Hh(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && Je(a) && Je(l) ? !gc(a, l) : a !== l;
}
function ik({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const zh = {}, Wh = () => Object.create(zh), jh = (e) => Object.getPrototypeOf(e) === zh;
function rk(e, t, n, a = false) {
  const l = {}, o = Wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gh(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : dh(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function sk(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Pe(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Or(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (et(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const b = un(f);
          l[b] = uu(s, r, b, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Gh(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !et(t, d) && ((c = xl(d)) === d || !et(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = uu(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !et(t, d)) && (delete o[d], u = true);
  }
  u && ca(e.attrs, "set", "");
}
function Gh(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (Lo(s)) continue;
    const u = t[s];
    let c;
    l && et(l, c = un(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Or(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Pe(n), u = r || rt;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = uu(l, s, d, u[d], e, !et(u, d));
    }
  }
  return i;
}
function uu(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = et(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && Fe(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = xi(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[0] && (o && !r ? a = false : i[1] && (a === "" || a === xl(n)) && (a = true));
  }
  return a;
}
const uk = /* @__PURE__ */ new WeakMap();
function Uh(e, t, n = false) {
  const a = n ? uk : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!Fe(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = Uh(d, t, true);
      Dt(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return Je(e) && a.set(e, Ul), Ul;
  if (De(o)) for (let c = 0; c < o.length; c++) {
    const d = un(o[c]);
    wf(d) && (i[d] = rt);
  }
  else if (o) for (const c in o) {
    const d = un(c);
    if (wf(d)) {
      const f = o[c], v = i[d] = De(f) || Fe(f) ? { type: f } : Dt({}, f), b = v.type;
      let m = false, g = true;
      if (De(b)) for (let h = 0; h < b.length; ++h) {
        const S = b[h], V = Fe(S) && S.name;
        if (V === "Boolean") {
          m = true;
          break;
        } else V === "String" && (g = false);
      }
      else m = Fe(b) && b.name === "Boolean";
      v[0] = m, v[1] = g, (m || et(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return Je(e) && a.set(e, u), u;
}
function wf(e) {
  return e[0] !== "$" && !Lo(e);
}
const Vc = (e) => e === "_" || e === "_ctx" || e === "$stable", Pc = (e) => De(e) ? e.map(Un) : [Un(e)], ck = (e, t, n) => {
  if (t._n) return t;
  const a = st((...l) => Pc(t(...l)), n);
  return a._c = false, a;
}, Yh = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Vc(l)) continue;
    const o = e[l];
    if (Fe(o)) t[l] = ck(l, o, a);
    else if (o != null) {
      const i = Pc(o);
      t[l] = () => i;
    }
  }
}, Kh = (e, t) => {
  const n = Pc(t);
  e.slots.default = () => n;
}, qh = (e, t, n) => {
  for (const a in t) (n || !Vc(a)) && (e[a] = t[a]);
}, dk = (e, t, n) => {
  const a = e.slots = Wh();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (qh(a, t, n), n && Gm(a, "_", l, true)) : Yh(t, a);
  } else t && Kh(e, t);
}, fk = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = rt;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : qh(l, t, n) : (o = !t.$stable, Yh(t, l)), i = t;
  } else t && (Kh(e, t), i = { default: 1 });
  if (o) for (const r in l) !Vc(r) && i[r] == null && delete l[r];
}, Kt = yk;
function vk(e) {
  return mk(e);
}
function mk(e, t) {
  const n = Tr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Kn, insertStaticContent: b } = e, m = (R, L, U, le = null, oe = null, re = null, Se = void 0, me = null, Y = !!L.dynamicChildren) => {
    if (R === L) return;
    R && !al(R, L) && (le = F(R), j(R, oe, re, true), R = null), L.patchFlag === -2 && (Y = false, L.dynamicChildren = null);
    const { type: se, ref: Ie, shapeFlag: X } = L;
    switch (se) {
      case wi:
        g(R, L, U, le);
        break;
      case zt:
        h(R, L, U, le);
        break;
      case Vs:
        R == null && S(L, U, le, Se);
        break;
      case be:
        M(R, L, U, le, oe, re, Se, me, Y);
        break;
      default:
        X & 1 ? w(R, L, U, le, oe, re, Se, me, Y) : X & 6 ? E(R, L, U, le, oe, re, Se, me, Y) : (X & 64 || X & 128) && se.process(R, L, U, le, oe, re, Se, me, Y, ve);
    }
    Ie != null && oe ? Ho(Ie, R && R.ref, re, L || R, !L) : Ie == null && R && R.ref != null && Ho(R.ref, null, re, R, true);
  }, g = (R, L, U, le) => {
    if (R == null) a(L.el = r(L.children), U, le);
    else {
      const oe = L.el = R.el;
      L.children !== R.children && u(oe, L.children);
    }
  }, h = (R, L, U, le) => {
    R == null ? a(L.el = s(L.children || ""), U, le) : L.el = R.el;
  }, S = (R, L, U, le) => {
    [R.el, R.anchor] = b(R.children, L, U, le, R.el, R.anchor);
  }, V = ({ el: R, anchor: L }, U, le) => {
    let oe;
    for (; R && R !== L; ) oe = f(R), a(R, U, le), R = oe;
    a(L, U, le);
  }, _ = ({ el: R, anchor: L }) => {
    let U;
    for (; R && R !== L; ) U = f(R), l(R), R = U;
    l(L);
  }, w = (R, L, U, le, oe, re, Se, me, Y) => {
    if (L.type === "svg" ? Se = "svg" : L.type === "math" && (Se = "mathml"), R == null) y(L, U, le, oe, re, Se, me, Y);
    else {
      const se = R.el && R.el._isVueCE ? R.el : null;
      try {
        se && se._beginPatch(), A(R, L, oe, re, Se, me, Y);
      } finally {
        se && se._endPatch();
      }
    }
  }, y = (R, L, U, le, oe, re, Se, me) => {
    let Y, se;
    const { props: Ie, shapeFlag: X, transition: ye, dirs: ke } = R;
    if (Y = R.el = i(R.type, re, Ie && Ie.is, Ie), X & 8 ? c(Y, R.children) : X & 16 && x(R.children, Y, null, le, oe, Is(R, re), Se, me), ke && qa(R, null, le, "created"), C(Y, R, R.scopeId, Se, le), Ie) {
      for (const Ve in Ie) Ve !== "value" && !Lo(Ve) && o(Y, Ve, null, Ie[Ve], re, le);
      "value" in Ie && o(Y, "value", null, Ie.value, re), (se = Ie.onVnodeBeforeMount) && zn(se, le, R);
    }
    ke && qa(R, null, le, "beforeMount");
    const xe = hk(oe, ye);
    xe && ye.beforeEnter(Y), a(Y, L, U), ((se = Ie && Ie.onVnodeMounted) || xe || ke) && Kt(() => {
      se && zn(se, le, R), xe && ye.enter(Y), ke && qa(R, null, le, "mounted");
    }, oe);
  }, C = (R, L, U, le, oe) => {
    if (U && v(R, U), le) for (let re = 0; re < le.length; re++) v(R, le[re]);
    if (oe) {
      let re = oe.subTree;
      if (L === re || Jh(re.type) && (re.ssContent === L || re.ssFallback === L)) {
        const Se = oe.vnode;
        C(R, Se, Se.scopeId, Se.slotScopeIds, oe.parent);
      }
    }
  }, x = (R, L, U, le, oe, re, Se, me, Y = 0) => {
    for (let se = Y; se < R.length; se++) {
      const Ie = R[se] = me ? sa(R[se]) : Un(R[se]);
      m(null, Ie, L, U, le, oe, re, Se, me);
    }
  }, A = (R, L, U, le, oe, re, Se) => {
    const me = L.el = R.el;
    let { patchFlag: Y, dynamicChildren: se, dirs: Ie } = L;
    Y |= R.patchFlag & 16;
    const X = R.props || rt, ye = L.props || rt;
    let ke;
    if (U && Xa(U, false), (ke = ye.onVnodeBeforeUpdate) && zn(ke, U, L, R), Ie && qa(L, R, U, "beforeUpdate"), U && Xa(U, true), (X.innerHTML && ye.innerHTML == null || X.textContent && ye.textContent == null) && c(me, ""), se ? P(R.dynamicChildren, se, me, U, le, Is(L, oe), re) : Se || Q(R, L, me, null, U, le, Is(L, oe), re, false), Y > 0) {
      if (Y & 16) D(me, X, ye, U, oe);
      else if (Y & 2 && X.class !== ye.class && o(me, "class", null, ye.class, oe), Y & 4 && o(me, "style", X.style, ye.style, oe), Y & 8) {
        const xe = L.dynamicProps;
        for (let Ve = 0; Ve < xe.length; Ve++) {
          const Be = xe[Ve], je = X[Be], Le = ye[Be];
          (Le !== je || Be === "value") && o(me, Be, je, Le, oe, U);
        }
      }
      Y & 1 && R.children !== L.children && c(me, L.children);
    } else !Se && se == null && D(me, X, ye, U, oe);
    ((ke = ye.onVnodeUpdated) || Ie) && Kt(() => {
      ke && zn(ke, U, L, R), Ie && qa(L, R, U, "updated");
    }, le);
  }, P = (R, L, U, le, oe, re, Se) => {
    for (let me = 0; me < L.length; me++) {
      const Y = R[me], se = L[me], Ie = Y.el && (Y.type === be || !al(Y, se) || Y.shapeFlag & 198) ? d(Y.el) : U;
      m(Y, se, Ie, null, le, oe, re, Se, true);
    }
  }, D = (R, L, U, le, oe) => {
    if (L !== U) {
      if (L !== rt) for (const re in L) !Lo(re) && !(re in U) && o(R, re, L[re], null, oe, le);
      for (const re in U) {
        if (Lo(re)) continue;
        const Se = U[re], me = L[re];
        Se !== me && re !== "value" && o(R, re, me, Se, oe, le);
      }
      "value" in U && o(R, "value", L.value, U.value, oe);
    }
  }, M = (R, L, U, le, oe, re, Se, me, Y) => {
    const se = L.el = R ? R.el : r(""), Ie = L.anchor = R ? R.anchor : r("");
    let { patchFlag: X, dynamicChildren: ye, slotScopeIds: ke } = L;
    ke && (me = me ? me.concat(ke) : ke), R == null ? (a(se, U, le), a(Ie, U, le), x(L.children || [], U, Ie, oe, re, Se, me, Y)) : X > 0 && X & 64 && ye && R.dynamicChildren && R.dynamicChildren.length === ye.length ? (P(R.dynamicChildren, ye, U, oe, re, Se, me), (L.key != null || oe && L === oe.subTree) && Ac(R, L, true)) : Q(R, L, U, Ie, oe, re, Se, me, Y);
  }, E = (R, L, U, le, oe, re, Se, me, Y) => {
    L.slotScopeIds = me, R == null ? L.shapeFlag & 512 ? oe.ctx.activate(L, U, le, Se, Y) : T(L, U, le, oe, re, Se, Y) : O(R, L, Y);
  }, T = (R, L, U, le, oe, re, Se) => {
    const me = R.component = kk(R, le, oe);
    if (Mr(R) && (me.ctx.renderer = ve), xk(me, false, Se), me.asyncDep) {
      if (oe && oe.registerDep(me, W, Se), !R.el) {
        const Y = me.subTree = k(zt);
        h(null, Y, L, U), R.placeholder = Y.el;
      }
    } else W(me, R, L, U, oe, re, Se);
  }, O = (R, L, U) => {
    const le = L.component = R.component;
    if (ok(R, L, U)) if (le.asyncDep && !le.asyncResolved) {
      H(le, L, U);
      return;
    } else le.next = L, le.update();
    else L.el = R.el, le.vnode = L;
  }, W = (R, L, U, le, oe, re, Se) => {
    const me = () => {
      if (R.isMounted) {
        let { next: X, bu: ye, u: ke, parent: xe, vnode: Ve } = R;
        {
          const at = Xh(R);
          if (at) {
            X && (X.el = Ve.el, H(R, X, Se)), at.asyncDep.then(() => {
              Kt(() => {
                R.isUnmounted || se();
              }, oe);
            });
            return;
          }
        }
        let Be = X, je;
        Xa(R, false), X ? (X.el = Ve.el, H(R, X, Se)) : X = Ve, ye && Zi(ye), (je = X.props && X.props.onVnodeBeforeUpdate) && zn(je, xe, X, Ve), Xa(R, true);
        const Le = pf(R), dt = R.subTree;
        R.subTree = Le, m(dt, Le, d(dt.el), F(dt), R, oe, re), X.el = Le.el, Be === null && ik(R, Le.el), ke && Kt(ke, oe), (je = X.props && X.props.onVnodeUpdated) && Kt(() => zn(je, xe, X, Ve), oe);
      } else {
        let X;
        const { el: ye, props: ke } = L, { bm: xe, m: Ve, parent: Be, root: je, type: Le } = R, dt = ql(L);
        Xa(R, false), xe && Zi(xe), !dt && (X = ke && ke.onVnodeBeforeMount) && zn(X, Be, L), Xa(R, true);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(Le);
          const at = R.subTree = pf(R);
          m(null, at, U, le, R, oe, re), L.el = at.el;
        }
        if (Ve && Kt(Ve, oe), !dt && (X = ke && ke.onVnodeMounted)) {
          const at = L;
          Kt(() => zn(X, Be, at), oe);
        }
        (L.shapeFlag & 256 || Be && ql(Be.vnode) && Be.vnode.shapeFlag & 256) && R.a && Kt(R.a, oe), R.isMounted = true, L = U = le = null;
      }
    };
    R.scope.on();
    const Y = R.effect = new Zm(me);
    R.scope.off();
    const se = R.update = Y.run.bind(Y), Ie = R.job = Y.runIfDirty.bind(Y);
    Ie.i = R, Ie.id = R.uid, Y.scheduler = () => xc(Ie), Xa(R, true), se();
  }, H = (R, L, U) => {
    L.component = R;
    const le = R.vnode.props;
    R.vnode = L, R.next = null, sk(R, L.props, le, U), fk(R, L.children, U), va(), rf(R), ma();
  }, Q = (R, L, U, le, oe, re, Se, me, Y = false) => {
    const se = R && R.children, Ie = R ? R.shapeFlag : 0, X = L.children, { patchFlag: ye, shapeFlag: ke } = L;
    if (ye > 0) {
      if (ye & 128) {
        $(se, X, U, le, oe, re, Se, me, Y);
        return;
      } else if (ye & 256) {
        ee(se, X, U, le, oe, re, Se, me, Y);
        return;
      }
    }
    ke & 8 ? (Ie & 16 && pe(se, oe, re), X !== se && c(U, X)) : Ie & 16 ? ke & 16 ? $(se, X, U, le, oe, re, Se, me, Y) : pe(se, oe, re, true) : (Ie & 8 && c(U, ""), ke & 16 && x(X, U, le, oe, re, Se, me, Y));
  }, ee = (R, L, U, le, oe, re, Se, me, Y) => {
    R = R || Ul, L = L || Ul;
    const se = R.length, Ie = L.length, X = Math.min(se, Ie);
    let ye;
    for (ye = 0; ye < X; ye++) {
      const ke = L[ye] = Y ? sa(L[ye]) : Un(L[ye]);
      m(R[ye], ke, U, null, oe, re, Se, me, Y);
    }
    se > Ie ? pe(R, oe, re, true, false, X) : x(L, U, le, oe, re, Se, me, Y, X);
  }, $ = (R, L, U, le, oe, re, Se, me, Y) => {
    let se = 0;
    const Ie = L.length;
    let X = R.length - 1, ye = Ie - 1;
    for (; se <= X && se <= ye; ) {
      const ke = R[se], xe = L[se] = Y ? sa(L[se]) : Un(L[se]);
      if (al(ke, xe)) m(ke, xe, U, null, oe, re, Se, me, Y);
      else break;
      se++;
    }
    for (; se <= X && se <= ye; ) {
      const ke = R[X], xe = L[ye] = Y ? sa(L[ye]) : Un(L[ye]);
      if (al(ke, xe)) m(ke, xe, U, null, oe, re, Se, me, Y);
      else break;
      X--, ye--;
    }
    if (se > X) {
      if (se <= ye) {
        const ke = ye + 1, xe = ke < Ie ? L[ke].el : le;
        for (; se <= ye; ) m(null, L[se] = Y ? sa(L[se]) : Un(L[se]), U, xe, oe, re, Se, me, Y), se++;
      }
    } else if (se > ye) for (; se <= X; ) j(R[se], oe, re, true), se++;
    else {
      const ke = se, xe = se, Ve = /* @__PURE__ */ new Map();
      for (se = xe; se <= ye; se++) {
        const it = L[se] = Y ? sa(L[se]) : Un(L[se]);
        it.key != null && Ve.set(it.key, se);
      }
      let Be, je = 0;
      const Le = ye - xe + 1;
      let dt = false, at = 0;
      const dn = new Array(Le);
      for (se = 0; se < Le; se++) dn[se] = 0;
      for (se = ke; se <= X; se++) {
        const it = R[se];
        if (je >= Le) {
          j(it, oe, re, true);
          continue;
        }
        let kn;
        if (it.key != null) kn = Ve.get(it.key);
        else for (Be = xe; Be <= ye; Be++) if (dn[Be - xe] === 0 && al(it, L[Be])) {
          kn = Be;
          break;
        }
        kn === void 0 ? j(it, oe, re, true) : (dn[kn - xe] = se + 1, kn >= at ? at = kn : dt = true, m(it, L[kn], U, null, oe, re, Se, me, Y), je++);
      }
      const Ia = dt ? gk(dn) : Ul;
      for (Be = Ia.length - 1, se = Le - 1; se >= 0; se--) {
        const it = xe + se, kn = L[it], ef = L[it + 1], tf = it + 1 < Ie ? ef.el || Zh(ef) : le;
        dn[se] === 0 ? m(null, kn, U, tf, oe, re, Se, me, Y) : dt && (Be < 0 || se !== Ia[Be] ? q(kn, U, tf, 2) : Be--);
      }
    }
  }, q = (R, L, U, le, oe = null) => {
    const { el: re, type: Se, transition: me, children: Y, shapeFlag: se } = R;
    if (se & 6) {
      q(R.component.subTree, L, U, le);
      return;
    }
    if (se & 128) {
      R.suspense.move(L, U, le);
      return;
    }
    if (se & 64) {
      Se.move(R, L, U, ve);
      return;
    }
    if (Se === be) {
      a(re, L, U);
      for (let X = 0; X < Y.length; X++) q(Y[X], L, U, le);
      a(R.anchor, L, U);
      return;
    }
    if (Se === Vs) {
      V(R, L, U);
      return;
    }
    if (le !== 2 && se & 1 && me) if (le === 0) me.beforeEnter(re), a(re, L, U), Kt(() => me.enter(re), oe);
    else {
      const { leave: X, delayLeave: ye, afterLeave: ke } = me, xe = () => {
        R.ctx.isUnmounted ? l(re) : a(re, L, U);
      }, Ve = () => {
        re._isLeaving && re[Gn](true), X(re, () => {
          xe(), ke && ke();
        });
      };
      ye ? ye(re, xe, Ve) : Ve();
    }
    else a(re, L, U);
  }, j = (R, L, U, le = false, oe = false) => {
    const { type: re, props: Se, ref: me, children: Y, dynamicChildren: se, shapeFlag: Ie, patchFlag: X, dirs: ye, cacheIndex: ke } = R;
    if (X === -2 && (oe = false), me != null && (va(), Ho(me, null, U, R, true), ma()), ke != null && (L.renderCache[ke] = void 0), Ie & 256) {
      L.ctx.deactivate(R);
      return;
    }
    const xe = Ie & 1 && ye, Ve = !ql(R);
    let Be;
    if (Ve && (Be = Se && Se.onVnodeBeforeUnmount) && zn(Be, L, R), Ie & 6) ue(R.component, U, le);
    else {
      if (Ie & 128) {
        R.suspense.unmount(U, le);
        return;
      }
      xe && qa(R, null, L, "beforeUnmount"), Ie & 64 ? R.type.remove(R, L, U, ve, le) : se && !se.hasOnce && (re !== be || X > 0 && X & 64) ? pe(se, L, U, false, true) : (re === be && X & 384 || !oe && Ie & 16) && pe(Y, L, U), le && N(R);
    }
    (Ve && (Be = Se && Se.onVnodeUnmounted) || xe) && Kt(() => {
      Be && zn(Be, L, R), xe && qa(R, null, L, "unmounted");
    }, U);
  }, N = (R) => {
    const { type: L, el: U, anchor: le, transition: oe } = R;
    if (L === be) {
      G(U, le);
      return;
    }
    if (L === Vs) {
      _(R);
      return;
    }
    const re = () => {
      l(U), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (R.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: Se, delayLeave: me } = oe, Y = () => Se(U, re);
      me ? me(R.el, re, Y) : Y();
    } else re();
  }, G = (R, L) => {
    let U;
    for (; R !== L; ) U = f(R), l(R), R = U;
    l(L);
  }, ue = (R, L, U) => {
    const { bum: le, scope: oe, job: re, subTree: Se, um: me, m: Y, a: se } = R;
    kf(Y), kf(se), le && Zi(le), oe.stop(), re && (re.flags |= 8, j(Se, R, L, U)), me && Kt(me, L), Kt(() => {
      R.isUnmounted = true;
    }, L);
  }, pe = (R, L, U, le = false, oe = false, re = 0) => {
    for (let Se = re; Se < R.length; Se++) j(R[Se], L, U, le, oe);
  }, F = (R) => {
    if (R.shapeFlag & 6) return F(R.component.subTree);
    if (R.shapeFlag & 128) return R.suspense.next();
    const L = f(R.anchor || R.el), U = L && L[kh];
    return U ? f(U) : L;
  };
  let J = false;
  const de = (R, L, U) => {
    let le;
    R == null ? L._vnode && (j(L._vnode, null, null, true), le = L._vnode.component) : m(L._vnode || null, R, L, null, null, null, U), L._vnode = R, J || (J = true, rf(le), bh(), J = false);
  }, ve = { p: m, um: j, m: q, r: N, mt: T, mc: x, pc: Q, pbc: P, n: F, o: e };
  return { render: de, hydrate: void 0, createApp: Qw(de) };
}
function Is({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xa({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hk(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ac(e, t, n = false) {
  const a = e.children, l = t.children;
  if (De(a) && De(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = sa(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Ac(i, r)), r.type === wi && (r.patchFlag === -1 && (r = l[o] = sa(r)), r.el = i.el), r.type === zt && !r.el && (r.el = i.el);
  }
}
function gk(e) {
  const t = e.slice(), n = [0];
  let a, l, o, i, r;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (l = n[n.length - 1], e[l] < u) {
        t[a] = l, n.push(a);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; ) r = o + i >> 1, e[n[r]] < u ? o = r + 1 : i = r;
      u < e[n[o]] && (o > 0 && (t[a] = n[o - 1]), n[o] = a);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
  return n;
}
function Xh(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Xh(t);
}
function kf(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Zh(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Zh(t.subTree) : null;
}
const Jh = (e) => e.__isSuspense;
function yk(e, t) {
  t && t.pendingBranch ? De(e) ? t.effects.push(...e) : t.effects.push(e) : Tw(e);
}
const be = Symbol.for("v-fgt"), wi = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), Vs = Symbol.for("v-stc"), Wo = [];
let mn = null;
function Re(e = false) {
  Wo.push(mn = e ? null : []);
}
function bk() {
  Wo.pop(), mn = Wo[Wo.length - 1] || null;
}
let Jo = 1;
function cr(e, t = false) {
  Jo += e, e < 0 && mn && t && (mn.hasOnce = true);
}
function Qh(e) {
  return e.dynamicChildren = Jo > 0 ? mn || Ul : null, bk(), Jo > 0 && mn && mn.push(e), e;
}
function He(e, t, n, a, l, o) {
  return Qh(p(e, t, n, a, l, o, true));
}
function Fa(e, t, n, a, l) {
  return Qh(k(e, t, n, a, l, true));
}
function to(e) {
  return e ? e.__v_isVNode === true : false;
}
function al(e, t) {
  return e.type === t.type && e.key === t.key;
}
const eg = ({ key: e }) => e ?? null, Qi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? gt(e) || ht(e) || Fe(e) ? { i: Wt, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && eg(t), ref: t && Qi(t), scopeId: Sh, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: Wt };
  return r ? (Tc(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= gt(n) ? 8 : 16), Jo > 0 && !i && mn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && mn.push(s), s;
}
const k = pk;
function pk(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === Ww) && (e = zt), to(e)) {
    const r = ga(e, t, true);
    return n && Tc(r, n), Jo > 0 && !o && mn && (r.shapeFlag & 6 ? mn[mn.indexOf(e)] = r : mn.push(r)), r.patchFlag = -2, r;
  }
  if (Pk(e) && (e = e.__vccOpts), t) {
    t = tg(t);
    let { class: r, style: s } = t;
    r && !gt(r) && (t.class = ne(r)), Je(s) && (pi(s) && !De(s) && (s = Dt({}, s)), t.style = ge(s));
  }
  const i = gt(e) ? 1 : Jh(e) ? 128 : xh(e) ? 64 : Je(e) ? 4 : Fe(e) ? 2 : 0;
  return p(e, t, n, a, l, i, o, true);
}
function tg(e) {
  return e ? pi(e) || jh(e) ? Dt({}, e) : e : null;
}
function ga(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? K(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && eg(u), ref: t && t.ref ? n && o ? De(o) ? o.concat(Qi(t)) : [o, Qi(t)] : Qi(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ga(e.ssContent), ssFallback: e.ssFallback && ga(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ml(c, s.clone(c)), c;
}
function Et(e = " ", t = 0) {
  return k(wi, null, e, t);
}
function no(e = "", t = false) {
  return t ? (Re(), Fa(zt, null, e)) : k(zt, null, e);
}
function Un(e) {
  return e == null || typeof e == "boolean" ? k(zt) : De(e) ? k(be, null, e.slice()) : to(e) ? sa(e) : k(wi, null, String(e));
}
function sa(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ga(e);
}
function Tc(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (De(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Tc(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !jh(t) ? t._ctx = Wt : l === 3 && Wt && (Wt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Fe(t) ? (t = { default: t, _ctx: Wt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Et(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function K(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ne([t.class, a.class]));
    else if (l === "style") t.style = ge([t.style, a.style]);
    else if (Vr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(De(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function zn(e, t, n, a = null) {
  On(e, t, 7, [n, a]);
}
const Sk = Nh();
let wk = 0;
function kk(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Sk, o = { uid: wk++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new qm(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Uh(a, l), emitsOptions: $h(a, l), emit: null, emitted: null, propsDefaults: rt, inheritAttrs: a.inheritAttrs, ctx: rt, data: rt, props: rt, attrs: rt, slots: rt, refs: rt, setupState: rt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = tk.bind(null, o), e.ce && e.ce(o), o;
}
let Zt = null;
const ki = () => Zt || Wt;
let dr, cu;
{
  const e = Tr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  dr = t("__VUE_INSTANCE_SETTERS__", (n) => Zt = n), cu = t("__VUE_SSR_SETTERS__", (n) => Qo = n);
}
const xi = (e) => {
  const t = Zt;
  return dr(e), e.scope.on(), () => {
    e.scope.off(), dr(t);
  };
}, xf = () => {
  Zt && Zt.scope.off(), dr(null);
};
function ng(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = false;
function xk(e, t = false, n = false) {
  t && cu(t);
  const { props: a, children: l } = e.vnode, o = ng(e);
  rk(e, a, o, t), dk(e, l, n || t);
  const i = o ? Ck(e, t) : void 0;
  return t && cu(false), i;
}
function Ck(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Uw);
  const { setup: a } = n;
  if (a) {
    va();
    const l = e.setupContext = a.length > 1 ? Ik(e) : null, o = xi(e), i = Si(a, e, 0, [e.props, l]), r = zm(i);
    if (ma(), o(), (r || e.sp) && !ql(e) && Th(e), r) {
      if (i.then(xf, xf), t) return i.then((s) => {
        Cf(e, s);
      }).catch((s) => {
        Dr(s, e, 0);
      });
      e.asyncDep = i;
    } else Cf(e, i);
  } else ag(e);
}
function Cf(e, t, n) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = mh(t)), ag(e);
}
function ag(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Kn);
  {
    const l = xi(e);
    va();
    try {
      Yw(e);
    } finally {
      ma(), l();
    }
  }
}
const _k = { get(e, t) {
  return Xt(e, "get", ""), e[t];
} };
function Ik(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, _k), slots: e.slots, emit: e.emit, expose: t };
}
function Lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(fh(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in zo) return zo[n](e);
  }, has(t, n) {
    return n in t || n in zo;
  } })) : e.proxy;
}
function Vk(e, t = true) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pk(e) {
  return Fe(e) && "__vccOpts" in e;
}
const I = (e, t) => _w(e, t, Qo);
function $n(e, t, n) {
  try {
    cr(-1);
    const a = arguments.length;
    return a === 2 ? Je(t) && !De(t) ? to(t) ? k(e, null, [t]) : k(e, t) : k(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && to(n) && (n = [n]), k(e, t, n));
  } finally {
    cr(1);
  }
}
const Ak = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let du;
const _f = typeof window < "u" && window.trustedTypes;
if (_f) try {
  du = _f.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const lg = du ? (e) => du.createHTML(e) : (e) => e, Tk = "http://www.w3.org/2000/svg", Ek = "http://www.w3.org/1998/Math/MathML", ra = typeof document < "u" ? document : null, If = ra && ra.createElement("template"), Dk = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? ra.createElementNS(Tk, e) : t === "mathml" ? ra.createElementNS(Ek, e) : n ? ra.createElement(e, { is: n }) : ra.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => ra.createTextNode(e), createComment: (e) => ra.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => ra.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === o || !(l = l.nextSibling)); ) ;
  else {
    If.innerHTML = lg(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = If.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Va = "transition", Vo = "animation", ao = Symbol("_vtc"), og = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, ig = Dt({}, Ih, og), Mk = (e) => (e.displayName = "Transition", e.props = ig, e), Na = Mk((e, { slots: t }) => $n(Lw, rg(e), t)), Za = (e, t = []) => {
  De(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Vf = (e) => e ? De(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function rg(e) {
  const t = {};
  for (const M in e) M in og || (t[M] = e[M]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, b = Bk(l), m = b && b[0], g = b && b[1], { onBeforeEnter: h, onEnter: S, onEnterCancelled: V, onLeave: _, onLeaveCancelled: w, onBeforeAppear: y = h, onAppear: C = S, onAppearCancelled: x = V } = t, A = (M, E, T, O) => {
    M._enterCancelled = O, Aa(M, E ? c : r), Aa(M, E ? u : i), T && T();
  }, P = (M, E) => {
    M._isLeaving = false, Aa(M, d), Aa(M, v), Aa(M, f), E && E();
  }, D = (M) => (E, T) => {
    const O = M ? C : S, W = () => A(E, M, T);
    Za(O, [E, W]), Pf(() => {
      Aa(E, M ? s : o), Wn(E, M ? c : r), Vf(O) || Af(E, a, m, W);
    });
  };
  return Dt(t, { onBeforeEnter(M) {
    Za(h, [M]), Wn(M, o), Wn(M, i);
  }, onBeforeAppear(M) {
    Za(y, [M]), Wn(M, s), Wn(M, u);
  }, onEnter: D(false), onAppear: D(true), onLeave(M, E) {
    M._isLeaving = true;
    const T = () => P(M, E);
    Wn(M, d), M._enterCancelled ? (Wn(M, f), fu(M)) : (fu(M), Wn(M, f)), Pf(() => {
      M._isLeaving && (Aa(M, d), Wn(M, v), Vf(_) || Af(M, a, g, T));
    }), Za(_, [M, T]);
  }, onEnterCancelled(M) {
    A(M, false, void 0, true), Za(V, [M]);
  }, onAppearCancelled(M) {
    A(M, true, void 0, true), Za(x, [M]);
  }, onLeaveCancelled(M) {
    P(M), Za(w, [M]);
  } });
}
function Bk(e) {
  if (e == null) return null;
  if (Je(e)) return [Ps(e.enter), Ps(e.leave)];
  {
    const t = Ps(e);
    return [t, t];
  }
}
function Ps(e) {
  return US(e);
}
function Wn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ao] || (e[ao] = /* @__PURE__ */ new Set())).add(t);
}
function Aa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[ao];
  n && (n.delete(t), n.size || (e[ao] = void 0));
}
function Pf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Rk = 0;
function Af(e, t, n, a) {
  const l = e._endId = ++Rk, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = sg(e, t);
  if (!i) return a();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), o();
  }, f = (v) => {
    v.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, r + 1), e.addEventListener(u, f);
}
function sg(e, t) {
  const n = window.getComputedStyle(e), a = (b) => (n[b] || "").split(", "), l = a(`${Va}Delay`), o = a(`${Va}Duration`), i = Tf(l, o), r = a(`${Vo}Delay`), s = a(`${Vo}Duration`), u = Tf(r, s);
  let c = null, d = 0, f = 0;
  t === Va ? i > 0 && (c = Va, d = i, f = o.length) : t === Vo ? u > 0 && (c = Vo, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? Va : Vo : null, f = c ? c === Va ? o.length : s.length : 0);
  const v = c === Va && /\b(?:transform|all)(?:,|$)/.test(a(`${Va}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function Tf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Ef(n) + Ef(e[a])));
}
function Ef(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ok(e, t, n) {
  const a = e[ao];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fr = Symbol("_vod"), ug = Symbol("_vsh"), Hn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[fr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Po(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: a }) {
  !t != !n && (a ? t ? (a.beforeEnter(e), Po(e, true), a.enter(e)) : a.leave(e, () => {
    Po(e, false);
  }) : Po(e, t));
}, beforeUnmount(e, { value: t }) {
  Po(e, t);
} };
function Po(e, t) {
  e.style.display = t ? e[fr] : "none", e[ug] = !t;
}
const Lk = Symbol(""), Fk = /(?:^|;)\s*display\s*:/;
function Nk(e, t, n) {
  const a = e.style, l = gt(n);
  let o = false;
  if (n && !l) {
    if (t) if (gt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && er(a, r, "");
    }
    else for (const i in t) n[i] == null && er(a, i, "");
    for (const i in n) i === "display" && (o = true), er(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[Lk];
      i && (n += ";" + i), a.cssText = n, o = Fk.test(n);
    }
  } else t && e.removeAttribute("style");
  fr in e && (e[fr] = o ? a.display : "", e[ug] && (a.display = "none"));
}
const Df = /\s*!important$/;
function er(e, t, n) {
  if (De(n)) n.forEach((a) => er(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = $k(e, t);
    Df.test(n) ? e.setProperty(xl(a), n.replace(Df, ""), "important") : e[a] = n;
  }
}
const Mf = ["Webkit", "Moz", "ms"], As = {};
function $k(e, t) {
  const n = As[t];
  if (n) return n;
  let a = un(t);
  if (a !== "filter" && a in e) return As[t] = a;
  a = Qn(a);
  for (let l = 0; l < Mf.length; l++) {
    const o = Mf[l] + a;
    if (o in e) return As[t] = o;
  }
  return t;
}
const Bf = "http://www.w3.org/1999/xlink";
function Rf(e, t, n, a, l, o = QS(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bf, t.slice(6, t.length)) : e.setAttributeNS(Bf, t, n) : n == null || o && !Um(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Bn(n) ? String(n) : n);
}
function Of(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lg(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const r = o === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (r !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = false;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Um(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function $l(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Hk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Lf = Symbol("_vei");
function zk(e, t, n, a, l = null) {
  const o = e[Lf] || (e[Lf] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = Wk(t);
    if (a) {
      const u = o[t] = Uk(a, l);
      $l(e, r, u, s);
    } else i && (Hk(e, r, i, s), o[t] = void 0);
  }
}
const Ff = /(?:Once|Passive|Capture)$/;
function Wk(e) {
  let t;
  if (Ff.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Ff); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : xl(e.slice(2)), t];
}
let Ts = 0;
const jk = Promise.resolve(), Gk = () => Ts || (jk.then(() => Ts = 0), Ts = Date.now());
function Uk(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    On(Yk(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = Gk(), n;
}
function Yk(e, t) {
  if (De(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const Nf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kk = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? Ok(e, a, i) : t === "style" ? Nk(e, n, a) : Vr(t) ? vc(t) || zk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : qk(e, t, a, i)) ? (Of(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rf(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !gt(a)) ? Of(e, un(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Rf(e, t, a, i));
};
function qk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Nf(t) && Fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Nf(t) && gt(n) ? false : t in e;
}
const cg = /* @__PURE__ */ new WeakMap(), dg = /* @__PURE__ */ new WeakMap(), vr = Symbol("_moveCb"), $f = Symbol("_enterCb"), Xk = (e) => (delete e.props.mode, e), Zk = Xk({ name: "TransitionGroup", props: Dt({}, ig, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ki(), a = _h();
  let l, o;
  return Rr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!t0(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Jk), l.forEach(Qk);
    const r = l.filter(e0);
    fu(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Wn(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[vr] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[vr] = null, Aa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Pe(e), r = rg(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ml(c, Zo(c, r, a, n)), cg.set(c, fg(c.el)));
    }
    o = t.default ? _c(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ml(c, Zo(c, r, a, n));
    }
    return k(s, null, o);
  };
} }), Ec = Zk;
function Jk(e) {
  const t = e.el;
  t[vr] && t[vr](), t[$f] && t[$f]();
}
function Qk(e) {
  dg.set(e, fg(e.el));
}
function e0(e) {
  const t = cg.get(e), n = dg.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function fg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function t0(e, t, n) {
  const a = e.cloneNode(), l = e[ao];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = sg(a);
  return o.removeChild(a), i;
}
const Hf = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return De(t) ? (n) => Zi(t, n) : t;
};
function n0(e) {
  e.target.composing = true;
}
function zf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const Es = Symbol("_assign");
function Wf(e, t, n) {
  return t && (e = e.trim()), n && (e = hc(e)), e;
}
const a0 = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[Es] = Hf(l);
  const o = a || l.props && l.props.type === "number";
  $l(e, t ? "change" : "input", (i) => {
    i.target.composing || e[Es](Wf(e.value, n, o));
  }), (n || o) && $l(e, "change", () => {
    e.value = Wf(e.value, n, o);
  }), t || ($l(e, "compositionstart", n0), $l(e, "compositionend", zf), $l(e, "change", zf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[Es] = Hf(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? hc(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, l0 = ["ctrl", "shift", "alt", "meta"], o0 = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => l0.some((n) => e[`${n}Key`] && !t.includes(n)) }, ji = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = o0[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, i0 = Dt({ patchProp: Kk }, Dk);
let jf;
function vg() {
  return jf || (jf = vk(i0));
}
const mg = ((...e) => {
  vg().render(...e);
}), r0 = ((...e) => {
  const t = vg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = u0(a);
    if (!l) return;
    const o = t._component;
    !Fe(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, s0(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function s0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function u0(e) {
  return gt(e) ? document.querySelector(e) : e;
}
const Gf = () => {
};
function Dc(e) {
  const t = `[${e}]`;
  return { debug: Gf, info: Gf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Uf = 5;
function c0(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * Uf)));
  return e / (l * Uf);
}
function hg(e, t, n) {
  const a = e * n.dpr, l = t * n.dpr, o = a + n.offsetX, i = l + n.offsetY, r = Math.floor(o / n.gridPitch), s = Math.floor(i / n.gridPitch);
  return { cx: r, cy: s };
}
function d0(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, a = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: a };
}
function f0(e, t, n) {
  return { cssX: (e * n.gridPitch - n.offsetX) / n.dpr, cssY: (t * n.gridPitch - n.offsetY) / n.dpr };
}
function v0(e, t) {
  return e * t.gridPitch / t.dpr;
}
const gg = 1, m0 = `gol.gridBlankZones.v${gg}`, h0 = 128;
function g0(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const y0 = /* @__PURE__ */ new Set(["minor", "major", "both"]), b0 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function Ds(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Wl(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function p0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function S0(e) {
  return typeof e == "string" && y0.has(e) ? e : "both";
}
function w0(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && b0.has(t.style) ? t.style : "none", a = Ds(Wl(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = Ds(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = Ds(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Wl(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function k0(e) {
  return typeof e == "boolean" ? e : true;
}
function Yf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function yg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Wl(n.x1), l = Wl(n.y1), o = Wl(n.x2), i = Wl(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : p0(), x1: r, y1: u, x2: s, y2: c, mode: S0(n.mode), edge: w0(n.edge), enabled: k0(n.enabled), createdAt: Yf(n.createdAt, t), updatedAt: Yf(n.updatedAt, t) };
}
function bg(e, t = Date.now()) {
  return g0(e, yg, h0, t);
}
function Ms() {
  return typeof localStorage < "u";
}
function x0(e) {
  return { load() {
    if (!Ms()) return [];
    try {
      const t = localStorage.getItem(e.key);
      if (!t) return [];
      let n = JSON.parse(t);
      const a = n.version;
      return typeof a != "number" || a > e.version ? [] : (e.migrate && a < e.version && (n = e.migrate(n)), e.normalize(n[e.itemsKey]));
    } catch {
      return [];
    }
  }, save(t) {
    if (!Ms()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    Ms() && localStorage.removeItem(e.key);
  } };
}
const Mc = x0({ key: m0, version: gg, normalize: bg, itemsKey: "zones" }), C0 = Mc.load, _0 = Mc.save, I0 = Mc.clear;
function V0(e) {
  const t = Z(e.storage.load());
  function n(u) {
    const c = e.normalize(u);
    return t.value = c, e.storage.save(c), c;
  }
  function a(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSet) == null ? void 0 : _a3.call(e, c);
  }
  function l(u) {
    var _a3;
    const c = e.normalizeOne(u);
    c && (n([...t.value.filter((d) => d.id !== c.id), c]), (_a3 = e.onAdd) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = e.normalizeOne(u);
    if (!c || !t.value.some((f) => f.id === c.id)) return;
    const d = t.value.map((f) => f.id === c.id ? c : f);
    n(d), (_a3 = e.onUpdate) == null ? void 0 : _a3.call(e, c);
  }
  function i(u) {
    var _a3;
    t.value.some((c) => c.id === u) && (n(t.value.filter((c) => c.id !== u)), (_a3 = e.onRemove) == null ? void 0 : _a3.call(e, u));
  }
  function r() {
    var _a3;
    t.value.length !== 0 && (t.value = [], e.storage.clear(), (_a3 = e.onClear) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { items: t, setItems: a, addItem: l, updateItem: o, removeItem: i, clearItems: r, syncFromWorker: s };
}
function P0(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = V0({ storage: { load: C0, save: _0, clear: I0 }, normalize: bg, normalizeOne: yg, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const Kf = Dc("WorkerBridge");
function A0() {
  let e = null;
  const t = Z(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      Kf.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
    }
  }
  function l(s, u) {
    return n.has(s) || n.set(s, /* @__PURE__ */ new Set()), n.get(s).add(u), () => {
      var _a3;
      return (_a3 = n.get(s)) == null ? void 0 : _a3.delete(u);
    };
  }
  function o(s) {
    (s.type === "ready" || s.type === "grid_info") && (t.value = s.gridInfo);
    const u = n.get(s.type);
    if (u) for (const c of u) c(s);
  }
  function i(s, u, c) {
    const d = new Worker(new URL("/assets/backgroundRenderer-BhhY7M_-.js", import.meta.url), { type: "module" });
    d.onmessage = (f) => o(f.data), d.onerror = (f) => {
      Kf.error("Worker uncaught exception:", f.message, `at ${f.filename}:${f.lineno}`);
    }, e = d, a({ type: "init", canvas: s, cellPx: u, theme: c }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const Bs = 5, T0 = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), E0 = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function D0(e, t) {
  function n() {
    const s = e.value;
    return !s || s.gridPitch === 0 ? null : { gridPitch: s.gridPitch, offsetX: t.value.x, offsetY: t.value.y, dpr: devicePixelRatio, worldCols: s.worldCols, worldRows: s.worldRows };
  }
  function a(s, u) {
    return (s % u.worldCols + u.worldCols) % u.worldCols;
  }
  function l(s) {
    const u = n();
    if (!u) return null;
    const c = hg(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / Bs) * Bs, d = (f) => c(f) + (Bs - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.worldCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(E0)) return true;
    let u = s;
    for (; u; ) {
      if (T0.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: f0, cellSpanToCssPx: v0, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToWorld: a };
}
function M0() {
  let e = 0;
  function t(a) {
    function l() {
      a(), e = requestAnimationFrame(l);
    }
    e = requestAnimationFrame(l);
  }
  function n() {
    e && (cancelAnimationFrame(e), e = 0);
  }
  return { start: t, stop: n };
}
function B0(e) {
  const t = /* @__PURE__ */ new Map(), n = Z(null), a = Z(null), l = Z(null);
  let o = null, i = null;
  function r(g, h) {
    t.set(g, h);
  }
  function s() {
    for (const g of t.values()) if (g.isEnabled()) return true;
    return false;
  }
  function u() {
    const g = a.value, h = e.makeSnapshot();
    if (!g || !h) {
      l.value = null;
      return;
    }
    const S = e.cellToScreen(g.x1, g.y1, h), V = e.cellSpanToCssPx(g.x2 - g.x1 + 1, h), _ = e.cellSpanToCssPx(g.y2 - g.y1 + 1, h);
    l.value = { left: `${S.cssX}px`, top: `${S.cssY}px`, width: `${V}px`, height: `${_}px` };
  }
  function c() {
    o = null, n.value = null, i = null, a.value = null, l.value = null;
  }
  function d(g) {
    n.value === g && c();
  }
  function f(g) {
    if (g.button !== 0 || e.isInteractiveTarget(g.target)) return;
    let h = null;
    for (const _ of t.entries()) _[1].isEnabled() && (!h || _[1].priority > h[1].priority) && (h = _);
    if (!h) return;
    const S = e.pointerToCell(g);
    if (!S) return;
    n.value = h[0], o = S;
    const V = { x1: S.cx, y1: S.cy, x2: S.cx, y2: S.cy };
    h[1].dragMode === "paint" && (i = { ...V }), a.value = V, u(), g.target instanceof Element && g.target.setPointerCapture(g.pointerId), g.preventDefault();
  }
  function v(g) {
    var _a3;
    if (!n.value || !o) return;
    const h = t.get(n.value);
    if (!h) return;
    const S = e.pointerToCell(g), V = e.makeSnapshot();
    if (!(!S || !V)) {
      if (h.dragMode === "paint" && i) i.x1 = Math.min(i.x1, S.cx), i.y1 = Math.min(i.y1, S.cy), i.x2 = Math.max(i.x2, S.cx), i.y2 = Math.max(i.y2, S.cy), a.value = { ...i };
      else {
        const _ = e.normalizeRect(o, S);
        a.value = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) ? e.snapRectToMajor(_, V) : _;
      }
      u();
    }
  }
  function b(g) {
    var _a3;
    if (!n.value || !o || g.button !== 0) return;
    g.target instanceof Element && g.target.hasPointerCapture(g.pointerId) && g.target.releasePointerCapture(g.pointerId);
    const h = t.get(n.value);
    if (!h) {
      c();
      return;
    }
    const S = e.pointerToCell(g), V = e.makeSnapshot();
    let _;
    if (h.dragMode === "paint" && i) S && (i.x1 = Math.min(i.x1, S.cx), i.y1 = Math.min(i.y1, S.cy), i.x2 = Math.max(i.x2, S.cx), i.y2 = Math.max(i.y2, S.cy)), _ = i;
    else if (S) {
      const y = e.normalizeRect(o, S);
      _ = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) && V ? e.snapRectToMajor(y, V) : y;
    } else {
      c();
      return;
    }
    h.onCommit(_, V) === false || c();
  }
  function m() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", v), document.addEventListener("pointerup", b), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", b);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: m };
}
const qf = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Xf = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function Ja(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function An([e, t, n], a = 1) {
  return a === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${a.toFixed(3)})`;
}
function Rs([e, t, n], a = 1, l = 1) {
  const o = t * a;
  return l === 1 ? `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)} / ${l.toFixed(3)})`;
}
const pg = "theme-preference";
function R0() {
  var _a3;
  if (typeof window > "u") return "system";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(pg);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const ei = Z(R0()), Sg = Z(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Sg.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
fe(ei, (e) => {
  var _a3;
  typeof window < "u" && ((_a3 = window.localStorage) == null ? void 0 : _a3.setItem(pg, e));
});
const vu = I(() => ei.value === "light" ? qf : ei.value === "dark" || Sg.value ? Xf : qf);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, a = (o, i) => {
      n.style.setProperty(o, i);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", a("--theme-surface", An(t.surface)), a("--theme-ink", An(t.ink)), a("--theme-ink-secondary", An(Ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-ink-tertiary", An(Ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-text-primary", An(t.ink)), a("--theme-text-secondary", An(Ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-text-tertiary", An(Ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-grid-minor", An(Ja(t.surface, t.ink, t.minor_t))), a("--theme-grid-major", An(Ja(t.surface, t.ink, t.major_t))), a("--theme-grid-border", An(Ja(t.surface, t.ink, t.border_t))), a("--theme-accent", Rs(t.accent, t.accent_chroma_scale)), a("--theme-accent-ring", Rs(t.accent, t.accent_chroma_scale, 0.45)), a("--theme-selection-bg", Rs(t.accent, t.accent_chroma_scale, 0.2)), a("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const l = document.querySelector('meta[name="theme-color"]');
    l && l.setAttribute("content", An(t.surface));
  };
  e(vu.value), fe(vu, e);
}
function wg() {
  return { preference: ei, theme: vu, setPreference(e) {
    ei.value = e;
  } };
}
const O0 = 5, L0 = 16, F0 = 2160;
function N0(e) {
  let t = null, n = 0, a = 0, l = null, o = null, i = 0, r = null, s = null, u = false, c = false;
  function d(A) {
    const P = A.getBoundingClientRect();
    return { width: Math.max(1, Math.round(P.width * devicePixelRatio)), height: Math.max(1, Math.round(P.height * devicePixelRatio)) };
  }
  function f(A) {
    var _a3, _b2;
    const P = (_b2 = (_a3 = A.devicePixelContentBoxSize) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.inlineSize;
    return typeof P == "number" && P > 0 ? P : Math.max(1, Math.round(A.contentRect.width * devicePixelRatio));
  }
  function v(A) {
    const P = Math.round(screen.height * devicePixelRatio);
    return Math.max(A, P, F0);
  }
  function b() {
    const A = document.createElement("div");
    A.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(A);
    const P = A.getBoundingClientRect().width;
    return A.remove(), Math.abs(P - 100) > 0.1;
  }
  function m(A) {
    return c0(A, L0, devicePixelRatio);
  }
  function g(A, P, D) {
    const M = P / devicePixelRatio, E = D / devicePixelRatio;
    let T = M, O = E;
    if (u) {
      const W = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      W > 0 && W !== 1 && (T = M / W, O = E / W);
    }
    A.style.width = `${T.toFixed(2)}px`, A.style.height = `${O.toFixed(2)}px`;
  }
  function h(A) {
    A.classList.add("app-bg--hidden"), o !== null && clearTimeout(o), o = window.setTimeout(() => {
      o = null, A.classList.remove("app-bg--hidden");
    }, 120);
  }
  function S(A) {
    const P = m(A);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * P * O0 / devicePixelRatio).toFixed(1)}px`);
  }
  function V(A, P) {
    n = P, g(A, n, a), h(A), S(n), e({ type: "resize", width: n, height: a });
  }
  function _(A) {
    r === null && (r = requestAnimationFrame(() => {
      r = null, !(i === 0 || i === n) && V(A, i);
    }));
  }
  function w(A) {
    let P = false;
    const D = () => {
      if (P) return;
      const M = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), E = () => {
        P || (A(), D());
      };
      M.addEventListener("change", E, { once: true });
    };
    return D(), () => {
      P = true;
    };
  }
  function y(A, P) {
    t = P, u = b();
    const D = d(A);
    n = D.width, a = v(D.height), P.width = n, P.height = a, g(P, n, a);
    const M = P.transferControlToOffscreen(), E = m(n);
    return S(n), l = new ResizeObserver(([T]) => {
      if (!t) return;
      const O = f(T);
      O <= 0 || O === n || (i = O, _(t));
    }), l.observe(A), s = w(() => {
      if (!t) return;
      u = b();
      const T = Math.round(A.getBoundingClientRect().height * devicePixelRatio);
      a = v(T), V(t, n);
    }), { offscreen: M, gridPitch: E };
  }
  function C() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      c || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 800));
  }
  function x() {
    c = true, l == null ? void 0 : l.disconnect(), s == null ? void 0 : s(), o !== null && (clearTimeout(o), o = null), r !== null && (cancelAnimationFrame(r), r = null), t = null;
  }
  return { initialize: y, revealCanvas: C, teardown: x };
}
const $0 = Dc("AppBackground");
function H0(e) {
  e.on("startup_breakdown", (t) => {
    const n = (o) => `${o.toFixed(0)}ms`, a = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], l = t.phases.newOffscreenPhases;
    l && (a.push("  new_offscreen sub-phases:"), a.push(`    device_request   ${n(l.deviceRequest)}`), a.push(`    panel_init       ${n(l.panelInit)}`), a.push(`    seeding          ${n(l.seeding)}`), a.push(`    simulation_init  ${n(l.simulationInit)}`), a.push(`    renderer_init    ${n(l.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (l) => l === null ? "\u2014" : `${l.toFixed(2)}ms`, a = t.durations;
    $0.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(a.computeTickMs)}
  xor_edit       ${n(a.xorEditMs)}
  or_edit        ${n(a.orEditMs)}
  render_pass    ${n(a.renderPassMs)}`);
  });
}
const Ci = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0 }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0 }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0 }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1 }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1 }], Fr = Ci[0], kg = new Map(Ci.map((e) => [e.id, e]));
new Map(Ci.map((e) => [e.route, e]));
function _i(e) {
  return kg.get(e) ?? Fr;
}
function z0(e, t) {
  return Ci.find((n) => n.gx === e && n.gy === t) ?? null;
}
function Bc(e, t, n) {
  const a = _i(e);
  return z0(a.gx + t, a.gy + n);
}
function W0(e, t) {
  return Bc(e, 0, t);
}
function j0(e, t) {
  return Bc(e, t, 0);
}
function xg(e) {
  return typeof e == "string" && kg.has(e) ? e : Fr.id;
}
function G0(e, t) {
  return Math.min(e.w, t);
}
function Zf(e, t, n, a) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + a;
}
function U0(e, t) {
  const n = t.zoom, a = G0(e, t.panelMaxWidth), l = t.panelHeight ?? e.h;
  return { col: Zf(e.w, a, n, t.gutterX), row: Zf(e.h, l, n, t.gutterY) };
}
function Nr(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function Y0(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function K0(e, t, n, a) {
  const l = Y0(e, t, n), o = Math.hypot(l.x - n.w / 2, l.y - n.h / 2), i = Math.min(1, o / Math.max(a.radius, 1e-6)), r = i * i * (3 - 2 * i);
  return a.floor + (1 - a.floor) * (1 - r);
}
const q0 = 1200, Jf = 0.55, X0 = 0.7, Z0 = 0.7, Qf = 0.5, J0 = 280, Q0 = 180, ex = 24, ev = 1.4, tx = 0.6, nx = 300, ax = 0.01;
function lx(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function ox(e, t, n = ax) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function ix(e, t) {
  const n = t.w / 2, a = t.h / 2;
  return `translate(${n}px, ${a}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function rx(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const sx = 0.18, ux = 1;
function Cg(e) {
  return U0(e, { panelMaxWidth: q0, gutterX: Jf * e.w, gutterY: Jf * e.h, zoom: 1 });
}
const Ii = Z({ w: 1, h: 1 });
function _g() {
  const e = _i(Fr.id), t = Nr(e, Cg(Ii.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const Cn = Z(_g()), Zl = Z(_g()), $r = Z(false), Rc = Z(Fr.id), Oc = Z(0), Ig = Z(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    Ig.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const Lc = I(() => Cg(Ii.value));
let rl = 0;
function Vg() {
  if (Cn.value = lx(Cn.value, Zl.value, sx), ox(Cn.value, Zl.value)) {
    Cn.value = { ...Zl.value }, $r.value = false, rl = 0;
    return;
  }
  rl = requestAnimationFrame(Vg);
}
function cx() {
  rl === 0 && ($r.value = true, rl = requestAnimationFrame(Vg));
}
function dx() {
  rl !== 0 && (cancelAnimationFrame(rl), rl = 0), $r.value = false;
}
function Fc(e, t, n) {
  dx();
  const a = n ?? Cn.value.zoom;
  Cn.value = { x: e, y: t, zoom: a }, Zl.value = { x: e, y: t, zoom: a };
}
function Pg(e, t, n = {}) {
  const a = n.zoom ?? Zl.value.zoom;
  if (Zl.value = { x: e, y: t, zoom: a }, n.snap || Ig.value) {
    Fc(e, t, a);
    return;
  }
  cx();
}
function fx(e, t = {}) {
  Rc.value = e, Oc.value = 0;
  const n = _i(e), a = Nr(n, Lc.value);
  Pg(a.x, a.y, { zoom: n.zoom, snap: t.snap });
}
function vx() {
  Rc.value = null;
}
function mx(e, t) {
  Ii.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function hx(e) {
  Oc.value = Math.max(0, e);
}
fe(Lc, (e) => {
  const t = Rc.value;
  if (t === null) return;
  const n = _i(t), a = Nr(n, e);
  Fc(a.x, a.y, n.zoom ?? Cn.value.zoom);
});
const gx = I(() => ({ transform: ix(Cn.value, Ii.value) })), yx = I(() => rx({ x: Cn.value.x, y: Cn.value.y + Oc.value, zoom: Cn.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, ux));
function bo() {
  return { camera: Cn, isAnimating: $r, viewport: Ii, spacing: Lc, cameraStyle: gx, worldOffsetDevicePx: yx, panTo: Pg, panToWaypoint: fx, snapTo: Fc, releaseAnchor: vx, setViewport: mx, setCaptureScroll: hx };
}
const tv = 0.1;
function bx(e) {
  const { worldOffsetDevicePx: t } = bo();
  let n = Number.NaN, a = Number.NaN;
  fe(t, ({ x: l, y: o }) => {
    Math.abs(l - n) < tv && Math.abs(o - a) < tv || (n = l, a = o, e.post({ type: "camera", x: l, y: o }));
  });
}
const Pn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, px = $t({ __name: "AppBackground", setup(e) {
  const t = Dc("AppBackground"), n = Z(null), a = Z(null), l = A0(), o = bo(), i = D0(l.gridInfo, o.worldOffsetDevicePx), r = M0(), s = B0(i), u = N0(l.post);
  bx(l);
  function c(_) {
    return { ..._, edge: { ..._.edge } };
  }
  function d(_) {
    return _.map(c);
  }
  const f = P0({ onSetZones: (_) => l.post({ type: "set_zones", zones: d(_) }), onAddZone: (_) => l.post({ type: "add_zone", zone: c(_) }), onUpdateZone: (_) => l.post({ type: "update_zone", zone: c(_) }), onRemoveZone: (_) => l.post({ type: "remove_zone", id: _ }), onClearZones: () => l.post({ type: "clear_zones" }) }), v = Z(false), b = Z(false), m = Z({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: g } = wg();
  fe(g, (_) => {
    l.post({ type: "set_theme", theme: _ });
  });
  function h(_) {
    const w = Date.now(), y = m.value;
    return { id: crypto.randomUUID(), x1: _.x1, y1: _.y1, x2: _.x2, y2: _.y2, mode: y.mode, edge: { ...y.edge }, enabled: true, createdAt: w, updatedAt: w };
  }
  s.register("zone", { isEnabled: () => v.value, priority: 1, snapMajor: () => b.value, onCommit(_) {
    f.addZone(h(_));
  } });
  function S(_) {
    if (s.anyToolEnabled() || i.isInteractiveTarget(_.target)) return;
    const w = i.makeSnapshot();
    if (!w) return;
    const y = hg(_.clientX, _.clientY, w), C = d0(y, w);
    t.debug("Click \u2192", _.clientX, _.clientY, "\u2192 cell", C.cx, C.cy), l.post({ type: "toggle_cell", cx: C.cx, cy: C.cy, scrollCanvasPx: w.offsetY });
  }
  let V = null;
  return bt(() => {
    const _ = n.value, w = a.value;
    if (!_ || !w) return;
    const { offscreen: y, gridPitch: C } = u.initialize(_, w);
    l.init(y, C, g.value), t.debug("Worker spawned, gridPitch", C.toFixed(2)), l.on("ready", (x) => {
      t.info(`${x.backend.toUpperCase()} renderer active`), l.post({ type: "set_theme", theme: g.value }), l.post({ type: "set_zones", zones: d(f.zones.value) });
      const A = o.worldOffsetDevicePx.value;
      l.post({ type: "camera", x: A.x, y: A.y });
    }), l.on("zones_state", (x) => f.syncFromWorker(x.zones)), l.on("zones_error", (x) => t.error("Zone update rejected:", x.message)), l.on("first_frame_painted", () => u.revealCanvas()), l.on("error", (x) => {
      x.phase === "gpu-init" ? t.debug(`GPU unavailable (${x.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${x.phase}]:`, x.message);
    }), H0(l), document.addEventListener("click", S), V = s.attachListeners(), r.start(() => l.post({ type: "frame" }));
  }), yo(() => {
    r.stop(), u.teardown(), document.removeEventListener("click", S), V == null ? void 0 : V(), l.terminate();
  }), (_, w) => (Re(), He(be, null, [p("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [p("canvas", { ref_key: "canvasRef", ref: a, class: "app-bg" }, null, 512)], 512), Ne(s).previewStyle.value ? (Re(), He("div", { key: 0, class: "zone-preview-overlay", style: ge(Ne(s).previewStyle.value) }, null, 4)) : no("", true), no("", true)], 64));
} }), Sx = Pn(px, [["__scopeId", "data-v-e3078bff"]]);
function Ag(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const qe = typeof window < "u", Nc = qe && "IntersectionObserver" in window, wx = qe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), nv = qe && "EyeDropper" in window, $c = qe && "matchMedia" in window && typeof window.matchMedia == "function", qn = () => $c && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function av(e, t, n) {
  kx(e, t), t.set(e, n);
}
function kx(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function lv(e, t, n) {
  return e.set(Tg(e, t), n), n;
}
function oa(e, t) {
  return e.get(Tg(e, t));
}
function Tg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Eg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function hl(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Eg(e, t.split("."), n));
}
function St(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return hl(e, t, n);
  if (Array.isArray(t)) return Eg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function he(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function gl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function mu(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Hc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const hu = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Dg(e) {
  return Object.keys(e);
}
function ll(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function on(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function gu(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Oe(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Mg = /^on[^a-z]/, zc = (e) => Mg.test(e), xx = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Cx = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function _x(e) {
  return e.isComposing && Cx.includes(e.key);
}
function ea(e) {
  const [t, n] = gu(e, [Mg]), a = Oe(t, xx), [l, o] = gu(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Bg(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Ne(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Ke(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ov(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function iv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function rv(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Ix(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function sv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function jt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (mu(o) && mu(i)) {
      a[l] = jt(o, i, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(i)) {
      a[l] = n(o, i);
      continue;
    }
    a[l] = i;
  }
  return a;
}
function Rg(e) {
  return e.map((t) => t.type === be ? Rg(t.children) : t).flat();
}
function sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (sl.cache.has(e)) return sl.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return sl.cache.set(e, t), t;
}
sl.cache = /* @__PURE__ */ new Map();
function jl(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => jl(e, n)).flat(1);
  if (t.suspense) return jl(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => jl(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return jl(e, t.component.subTree).flat(1);
  }
  return [];
}
var Rl = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ new WeakMap();
class Og {
  constructor(t) {
    av(this, Rl, []), av(this, Qa, 0), this.size = t;
  }
  get isFull() {
    return oa(Rl, this).length === this.size;
  }
  push(t) {
    oa(Rl, this)[oa(Qa, this)] = t, lv(Qa, this, (oa(Qa, this) + 1) % this.size);
  }
  values() {
    return oa(Rl, this).slice(oa(Qa, this)).concat(oa(Rl, this).slice(0, oa(Qa, this)));
  }
  clear() {
    oa(Rl, this).length = 0, lv(Qa, this, 0);
  }
}
function Vx(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function Wc(e) {
  const t = Tt({});
  ut(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function mr(e, t) {
  return e.includes(t);
}
function Lg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Lt = () => [Function, Array];
function uv(e, t) {
  return t = "on" + Qn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Vi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
function Ra(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let a;
  try {
    a = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return a.filter((l) => !l.closest("[inert]")).filter((l) => !!l.offsetParent || l.getClientRects().length > 0).filter((l) => {
    var _a3, _b2;
    return !((_a3 = l.parentElement) == null ? void 0 : _a3.closest("details:not([open])")) || l.tagName === "SUMMARY" && ((_b2 = l.parentElement) == null ? void 0 : _b2.tagName) === "DETAILS";
  });
}
function Fg(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function ul(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = Ra(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = Fg(n, t);
    a ? a.focus() : ul(e, t === "next" ? "first" : "last");
  }
}
function Bo(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Hr() {
}
function lo(e, t) {
  if (!(qe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function zr(e) {
  return e.some((t) => to(t) ? t.type === zt ? false : t.type !== be || zr(t.children) : true) ? e : null;
}
function Gi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function Px(e, t) {
  if (!qe || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Ax(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function ti() {
  const e = ce(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Hc(e.value) }), t;
}
function oo(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function $a(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function hr(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function Tx(e, t, n) {
  const a = new RegExp(`[\\d\\-${hr(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${hr(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function Ex(e) {
  const t = {};
  for (const n in e) t[un(n)] = e[n];
  return t;
}
function Dx(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function cv(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : ht(n) || Ba(n) || pi(n) ? t(Pe(n)) : mu(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Ng = ["top", "bottom"], Mx = ["start", "end", "left", "right"];
function yu(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = mr(Ng, n) ? "start" : mr(Mx, n) ? "top" : "center"), { side: bu(n, t), align: bu(a, t) };
}
function bu(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Os(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Ls(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function dv(e) {
  return { side: e.align, align: e.side };
}
function fv(e) {
  return mr(Ng, e.side) ? "y" : "x";
}
class _n {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, a = t instanceof Element, l = a ? 1 + (1 - n) / n : 1, { x: o, y: i, width: r, height: s } = a ? t.getBoundingClientRect() : t;
    this.x = o * l, this.y = i * l, this.width = r * l, this.height = s * l;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function vv(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function $g(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new _n({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new _n(e);
}
function Bx(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new _n({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new _n({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new _n(e);
}
function jc(e) {
  const t = new _n(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new _n(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new _n({ x: c, y: d, width: f, height: v });
  } else return new _n(t);
}
function ua(e, t, n) {
  if (typeof e.animate > "u") return { finished: Promise.resolve() };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const tr = /* @__PURE__ */ new WeakMap();
function Rx(e, t) {
  Object.keys(t).forEach((n) => {
    if (zc(n)) {
      const a = Lg(n), l = tr.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), tr.has(e) || tr.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Ox(e, t) {
  Object.keys(t).forEach((n) => {
    if (zc(n)) {
      const a = Lg(n), l = tr.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Ol = 2.4, mv = 0.2126729, hv = 0.7151522, gv = 0.072175, Lx = 0.55, Fx = 0.58, Nx = 0.57, $x = 0.62, Ui = 0.03, yv = 1.45, Hx = 5e-4, zx = 1.25, Wx = 1.25, bv = 0.078, pv = 12.82051282051282, Yi = 0.06, Sv = 1e-3;
function wv(e, t) {
  const n = (e.r / 255) ** Ol, a = (e.g / 255) ** Ol, l = (e.b / 255) ** Ol, o = (t.r / 255) ** Ol, i = (t.g / 255) ** Ol, r = (t.b / 255) ** Ol;
  let s = n * mv + a * hv + l * gv, u = o * mv + i * hv + r * gv;
  if (s <= Ui && (s += (Ui - s) ** yv), u <= Ui && (u += (Ui - u) ** yv), Math.abs(u - s) < Hx) return 0;
  let c;
  if (u > s) {
    const d = (u ** Lx - s ** Fx) * zx;
    c = d < Sv ? 0 : d < bv ? d - d * pv * Yi : d - Yi;
  } else {
    const d = (u ** $x - s ** Nx) * Wx;
    c = d > -Sv ? 0 : d > -bv ? d - d * pv * Yi : d + Yi;
  }
  return c * 100;
}
const gr = 0.20689655172413793, jx = (e) => e > gr ** 3 ? Math.cbrt(e) : e / (3 * gr ** 2) + 4 / 29, Gx = (e) => e > gr ? e ** 3 : 3 * gr ** 2 * (e - 4 / 29);
function Hg(e) {
  const t = jx, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function zg(e) {
  const t = Gx, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Ux = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Yx = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Kx = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], qx = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Wg(e) {
  const t = Array(3), n = Yx, a = Ux;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ke(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function Gc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = qx, i = Kx;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function pu(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Xx(e) {
  return pu(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const kv = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Zx = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => xv({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => xv({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Xn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Xn({ h: e, s: t, v: n, a }) };
function hn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && kv.test(e)) {
    const { groups: t } = e.match(kv), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Zx[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Yg(t);
  } else if (typeof e == "object") {
    if (ll(e, ["r", "g", "b"])) return e;
    if (ll(e, ["h", "s", "l"])) return Xn(Uc(e));
    if (ll(e, ["h", "s", "v"])) return Xn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Xn(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function xv(e) {
  return Xn(Uc(e));
}
function Pi(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Su(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function Uc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function jg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Gg(e) {
  return jg(Xn(e));
}
function Ki(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Ug(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Ki(t), Ki(n), Ki(a), l !== void 0 ? Ki(Math.round(l * 255)) : ""].join("")}`;
}
function Yg(e) {
  e = Qx(e);
  let [t, n, a, l] = Ix(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Jx(e) {
  const t = Yg(e);
  return Pi(t);
}
function Kg(e) {
  return Ug(Xn(e));
}
function Qx(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = iv(iv(e, 6), 8, "F")), e;
}
function eC(e, t) {
  const n = Hg(Gc(e));
  return n[0] = n[0] + t * 10, Wg(zg(n));
}
function tC(e, t) {
  const n = Hg(Gc(e));
  return n[0] = n[0] - t * 10, Wg(zg(n));
}
function wu(e) {
  const t = hn(e);
  return Gc(t)[1];
}
function nC(e, t) {
  const n = wu(e), a = wu(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function qg(e) {
  const t = Math.abs(wv(hn(0), hn(e)));
  return Math.abs(wv(hn(16777215), hn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function z(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const we = z({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function wt(e, t) {
  const n = ki();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function ta() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = wt(e).type;
  return sl((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function aC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const io = Symbol.for("vuetify:defaults");
function lC(e) {
  return Z(e);
}
function Yc() {
  const e = Me(io);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function vt(e, t) {
  const n = Yc(), a = Z(e), l = I(() => {
    if (Ne(t == null ? void 0 : t.disabled)) return n.value;
    const i = Ne(t == null ? void 0 : t.scoped), r = Ne(t == null ? void 0 : t.reset), s = Ne(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = jt(a.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = jt(jt(u, { prev: u }), u[s])), u;
    }
    return u.prev ? jt(u.prev, u) : u;
  });
  return Ze(io, l), l;
}
function oC(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[sl(t)] < "u");
}
function iC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Yc();
  const a = wt("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = I(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (oC(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = ce();
  ut(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else i.value = void 0;
  });
  function r() {
    const s = aC(io, a);
    Ze(io, I(() => i.value ? jt((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function Qt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = z(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return on(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = Yc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = iC(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Qt : $t)(t);
}
function rC(e, t) {
  return t.props = e, t;
}
function Sa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return te()({ name: n ?? Qn(un(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...we() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return $n(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function sC(e, t, n, a) {
  if (!n || $a(e) || $a(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function uC(e, t, n) {
  var _a3, _b2;
  if (!n || $a(e) || $a(t)) return null;
  const a = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function Bt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = uC(e, t, n);
  return l || (sC(e, t, n, true), a.every((o) => Bt(e[o], t[o], n)));
}
function Xg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const ni = "cubic-bezier(0.4, 0, 0.2, 1)", Cv = "cubic-bezier(0.0, 0, 0.2, 1)", _v = "cubic-bezier(0.4, 0, 1, 1)", cC = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function gn(e, t, n) {
  return Object.keys(e).filter((a) => zc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => Vi(e[l], o, n(o)), a), {});
}
function Wr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? dC(e) : Kc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function yr(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Kc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Kc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function dC(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function fC(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function vC(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function ae(e) {
  const t = wt("useRender");
  t.render = e;
}
function mC(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, a = 0, l = 0, o = false, i = 0;
  function r() {
    clearTimeout(a), o = false, i = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++) c[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    i || (i = f);
    const v = f - Math.max(i, l);
    function b() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? b() : n.trailing && (a = setTimeout(b, t - v)) : (o = true, n.leading && b());
  };
  return s.clear = r, s.immediate = e, s;
}
const _e = [String, Function, Object, Array], ku = Symbol.for("vuetify:icons"), jr = z({ icon: { type: _e }, tag: { type: [String, Object, Function], required: true } }, "icon"), xu = te()({ name: "VComponentIcon", props: jr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return k(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? k(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), qc = Qt({ name: "VSvgIcon", inheritAttrs: false, props: jr(), setup(e, t) {
  let { attrs: n } = t;
  return () => k(e.tag, K(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? p("path", { d: a[0], "fill-opacity": a[1] }, null) : p("path", { d: a }, null)) : p("path", { d: e.icon }, null)])] });
} }), hC = Qt({ name: "VLigatureIcon", props: jr(), setup(e) {
  return () => k(e.tag, null, { default: () => [e.icon] });
} }), Xc = Qt({ name: "VClassIcon", props: jr(), setup(e) {
  return () => k(e.tag, { class: ne(e.icon) }, null);
} }), gC = (e) => {
  const t = Me(ku);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: I(() => {
    var _a3;
    const a = tt(e);
    if (!a) return { component: xu };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: qc, icon: l };
    if (typeof l != "string") return { component: xu, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, yC = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, bC = { component: (e) => $n(Xc, { ...e, class: "mdi" }) };
function pC() {
  return { svg: { component: qc }, class: { component: Xc } };
}
function SC(e) {
  const t = pC(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = bC), jt({ defaultSet: n, sets: t, aliases: { ...yC, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Ft(e, t) {
  let n;
  function a() {
    n = Ql(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  fe(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), yt(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ce(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = wt("useProxiedModel"), i = Z(e[t] !== void 0 ? e[t] : n), r = sl(t), u = I(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ft(() => !u.value, () => {
    fe(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = I({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Pe(u.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const wC = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Iv = "$vuetify.", Vv = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Zg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Iv)) return Vv(a, o);
  const r = a.replace(Iv, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = hl(s, r, null);
  return c || (`${a}${e.value}`, c = hl(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Vv(c, o);
};
function Zc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Jg(e, t) {
  return Zc(e, t)(0.1).includes(",") ? "," : ".";
}
function Fs(e, t, n) {
  const a = Ce(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, fe(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Qg(e) {
  return (t) => {
    const n = Fs(t, "locale", e.current), a = Fs(t, "fallback", e.fallback), l = Fs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => Jg(n, a)), t: Zg(n, a, l), n: Zc(n, a), provide: Qg({ current: n, fallback: a, messages: l }) };
  };
}
function kC(e) {
  const t = ce((e == null ? void 0 : e.locale) ?? "en"), n = ce((e == null ? void 0 : e.fallback) ?? "en"), a = Z({ en: wC, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Jg(t, n)), t: Zg(t, n, a), n: Zc(t, n), provide: Qg({ current: t, fallback: n, messages: a }) };
}
const ro = Symbol.for("vuetify:locale");
function xC(e) {
  return e.name != null;
}
function CC(e) {
  const t = (e == null ? void 0 : e.adapter) && xC(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : kC(e), n = IC(t, e);
  return { ...t, ...n };
}
function Xe() {
  const e = Me(ro);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ey(e) {
  const t = Me(ro);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = VC(n, t.rtl, e), l = { ...n, ...a };
  return Ze(ro, l), l;
}
function _C() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function IC(e, t) {
  const n = Z((t == null ? void 0 : t.rtl) ?? _C()), a = I(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function VC(e, t, n) {
  const a = I(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function It() {
  const e = Me(ro);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function Ai(e) {
  const t = e.slice(-2).toUpperCase();
  switch (true) {
    case e === "GB-alt-variant":
      return { firstDay: 0, firstWeekSize: 4 };
    case e === "001":
      return { firstDay: 1, firstWeekSize: 1 };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return { firstDay: 0, firstWeekSize: 1 };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return { firstDay: 1, firstWeekSize: 1 };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return { firstDay: 1, firstWeekSize: 4 };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return { firstDay: 6, firstWeekSize: 1 };
    case t === "MV":
      return { firstDay: 5, firstWeekSize: 1 };
    case t === "PT":
      return { firstDay: 0, firstWeekSize: 4 };
    default:
      return null;
  }
}
function PC(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = ty(e), i = ny(e), r = n ?? ((_a3 = Ai(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() - (s - c)), l.push(d);
  }
  for (let c = 1; c <= i.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    l.push(d), l.length === 7 && (a.push(l), l = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(i);
    d.setDate(d.getDate() + c), l.push(d);
  }
  return l.length > 0 && a.push(l), a;
}
function jo(e, t, n) {
  var _a3;
  let a = (n ?? ((_a3 = Ai(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function AC(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = Ai(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function ty(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ny(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function TC(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const EC = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function ay(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (EC.test(e)) return TC(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Pv = new Date(2e3, 0, 2);
function DC(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = Ai(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Yn(7).map((l) => {
    const o = new Date(Pv);
    return o.setDate(Pv.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function MC(e, t, n, a) {
  const l = ay(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
  if (typeof o == "function") return o(l, t, n);
  let i = {};
  switch (t) {
    case "fullDate":
      i = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      i = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(n, { month: "long" }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      i = { weekday: "short", day: "numeric", month: "short" };
      break;
    case "shortDate":
      i = { month: "short", day: "numeric" };
      break;
    case "year":
      i = { year: "numeric" };
      break;
    case "month":
      i = { month: "long" };
      break;
    case "monthShort":
      i = { month: "short" };
      break;
    case "monthAndYear":
      i = { month: "long", year: "numeric" };
      break;
    case "monthAndDate":
      i = { month: "long", day: "numeric" };
      break;
    case "weekday":
      i = { weekday: "long" };
      break;
    case "weekdayShort":
      i = { weekday: "short" };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      i = { hour: "numeric", hour12: true };
      break;
    case "hours24h":
      i = { hour: "numeric", hour12: false };
      break;
    case "minutes":
      i = { minute: "numeric" };
      break;
    case "seconds":
      i = { second: "numeric" };
      break;
    case "fullTime":
      i = { hour: "numeric", minute: "numeric" };
      break;
    case "fullTime12h":
      i = { hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullTime24h":
      i = { hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "fullDateTime":
      i = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
      break;
    case "fullDateTime12h":
      i = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullDateTime24h":
      i = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "keyboardDate":
      i = { year: "numeric", month: "2-digit", day: "2-digit" };
      break;
    case "keyboardDateTime":
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, i).format(l).replace(/, /g, " ");
    default:
      i = o ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, i).format(l);
}
function BC(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = rv(String(n.getMonth() + 1), 2, "0"), o = rv(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function RC(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function OC(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function LC(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function cl(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function FC(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function NC(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ai(e) {
  return e.getFullYear();
}
function $C(e) {
  return e.getMonth();
}
function HC(e, t, n, a) {
  const l = Ai(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? zC(e, t, o, a) : WC(e, t, o, i);
}
function zC(e, t, n, a) {
  const l = (7 + a - n) % 7, o = jo(e, t, n), i = cl(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = ai(o);
  s < ai(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? cl(u, -c) : cl(u, 7 - c);
  return 1 + pr(Jc(o), li(d), "weeks");
}
function WC(e, t, n, a) {
  const l = jo(e, t, n), o = cl(jo(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - pr(f, jo(f, t, n), "days");
  }
  let r = ai(l);
  r < ai(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? cl(s, u - 7) : cl(s, u);
  return 1 + pr(Jc(l), li(c), "weeks");
}
function jC(e) {
  return e.getDate();
}
function GC(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function UC(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function YC(e) {
  return e.getHours();
}
function KC(e) {
  return e.getMinutes();
}
function qC(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function XC(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function ZC(e, t) {
  return br(e, t[0]) && e_(e, t[1]);
}
function JC(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function br(e, t) {
  return e.getTime() > t.getTime();
}
function QC(e, t) {
  return br(li(e), li(t));
}
function e_(e, t) {
  return e.getTime() < t.getTime();
}
function Av(e, t) {
  return e.getTime() === t.getTime();
}
function t_(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function n_(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function a_(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function pr(e, t, n) {
  const a = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function l_(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function o_(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function i_(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function r_(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function s_(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function li(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Jc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class u_ {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return ay(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return BC(this, t);
  }
  parseISO(t) {
    return RC(t);
  }
  addMinutes(t, n) {
    return OC(t, n);
  }
  addHours(t, n) {
    return LC(t, n);
  }
  addDays(t, n) {
    return cl(t, n);
  }
  addWeeks(t, n) {
    return FC(t, n);
  }
  addMonths(t, n) {
    return NC(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return PC(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return jo(t, this.locale, a);
  }
  endOfWeek(t) {
    return AC(t, this.locale);
  }
  startOfMonth(t) {
    return ty(t);
  }
  endOfMonth(t) {
    return ny(t);
  }
  format(t, n) {
    return MC(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Av(t, n);
  }
  isValid(t) {
    return JC(t);
  }
  isWithinRange(t, n) {
    return ZC(t, n);
  }
  isAfter(t, n) {
    return br(t, n);
  }
  isAfterDay(t, n) {
    return QC(t, n);
  }
  isBefore(t, n) {
    return !br(t, n) && !Av(t, n);
  }
  isSameDay(t, n) {
    return t_(t, n);
  }
  isSameMonth(t, n) {
    return n_(t, n);
  }
  isSameYear(t, n) {
    return a_(t, n);
  }
  setMinutes(t, n) {
    return o_(t, n);
  }
  setHours(t, n) {
    return l_(t, n);
  }
  setMonth(t, n) {
    return i_(t, n);
  }
  setDate(t, n) {
    return r_(t, n);
  }
  setYear(t, n) {
    return s_(t, n);
  }
  getDiff(t, n, a) {
    return pr(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return DC(this.locale, a, n);
  }
  getYear(t) {
    return ai(t);
  }
  getMonth(t) {
    return $C(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return HC(t, this.locale, l, o);
  }
  getDate(t) {
    return jC(t);
  }
  getNextMonth(t) {
    return GC(t);
  }
  getPreviousMonth(t) {
    return UC(t);
  }
  getHours(t) {
    return YC(t);
  }
  getMinutes(t) {
    return KC(t);
  }
  startOfDay(t) {
    return li(t);
  }
  endOfDay(t) {
    return Jc(t);
  }
  startOfYear(t) {
    return qC(t);
  }
  endOfYear(t) {
    return XC(t);
  }
}
const ly = Symbol.for("vuetify:date-options"), Tv = Symbol.for("vuetify:date-adapter");
function c_(e, t) {
  const n = jt({ adapter: u_, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: iy(n, t) };
}
function d_(e, t, n) {
  const a = oy(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function oy(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function iy(e, t) {
  const n = Tt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return fe(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Cl() {
  const e = Me(ly);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Xe();
  return iy(e, t);
}
const Gr = ["sm", "md", "lg", "xl", "xxl"], Cu = Symbol.for("vuetify:display"), Ev = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, f_ = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ev;
  return jt(Ev, e);
};
function Dv(e) {
  return qe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Mv(e) {
  return qe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Bv(e) {
  const t = qe && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: wx, ssr: t === "ssr" };
}
function v_(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = f_(e), l = ce(Mv(t)), o = ce(Bv(t)), i = Tt({}), r = ce(Dv(t));
  function s() {
    l.value = Mv(), r.value = Dv();
  }
  function u() {
    s(), o.value = Bv();
  }
  return ut(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), b = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, g = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : b ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], S = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = b, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || b || m), i.mdAndDown = !(v || b || m), i.lgAndDown = !(b || m), i.xlAndDown = !m, i.name = g, i.height = l.value, i.width = r.value, i.mobile = S, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), qe && (window.addEventListener("resize", s, { passive: true }), yt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...ho(i), update: u, ssr: !!t };
}
const _l = z({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function cn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  const n = Me(Cu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = I(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const ry = Symbol.for("vuetify:goto");
function sy() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: cC };
}
function m_(e) {
  return Qc(e) ?? (document.scrollingElement || document.body);
}
function Qc(e) {
  return typeof e == "string" ? document.querySelector(e) : Hc(e);
}
function Ns(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Qc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function h_(e, t) {
  return { rtl: t.isRtl, options: jt(sy(), e) };
}
async function Rv(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = jt((a == null ? void 0 : a.options) ?? sy(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : Qc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : m_(o.container), u = qn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = Ns(r, n, i);
  else if (c = Ns(r, n, i) - Ns(s, n, i), o.layout) {
    const b = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    b && (c -= parseInt(b, 10));
  }
  c += o.offset, c = y_(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function b(m) {
    const h = (m - f) / o.duration, S = Math.floor(d + (c - d) * u(Ke(h, 0, 1)));
    if (s[l] = S, h >= 1 && Math.abs(S - s[l]) < 10) return v(c);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(b);
  }));
}
function g_() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Me(ry), { isRtl: n } = It();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Rv(o, jt(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Rv(o, jt(e, i), true, a), l;
}
function y_(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Ke(t, s, u);
}
const oi = Symbol.for("vuetify:theme"), We = z({ theme: String }, "theme");
function Ov() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function b_() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ov();
  const t = Ov();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = jt(o, l);
  }
  return jt(t, { ...e, themes: n });
}
function el(e, t, n, a) {
  e.push(`${k_(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Lv(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = hn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${wu(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? hn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function p_(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? eC : tC;
    for (const i of Yn(n[l], 1)) a[`${e}-${l}-${i}`] = Ug(o(hn(t), i));
  }
  return a;
}
function S_(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...p_(a, l, t) });
  }
  return n;
}
function w_(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = hn(e[n]);
    t[a] = qg(l);
  }
  return t;
}
function k_(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function x_(e, t, n) {
  const a = C_(e, t);
  a && (a.innerHTML = n);
}
function C_(e, t) {
  if (!qe) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function __(e) {
  const t = b_(e), n = ce(t.defaultTheme), a = Z(t.themes), l = ce("light"), o = I({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = I(() => {
    const h = {};
    for (const [S, V] of Object.entries(a.value)) {
      const _ = { ...V.colors, ...S_(V.colors, t.variations) };
      h[S] = { ...V, colors: { ..._, ...w_(_) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = I(() => {
    var _a3;
    const h = [], S = t.unimportant ? "" : " !important", V = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && el(h, ":root", ["color-scheme: dark"], t.scope), el(h, ":root", Lv(r.value, t.prefix), t.scope);
    for (const [w, y] of Object.entries(i.value)) el(h, `.${t.prefix}theme--${w}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...Lv(y, t.prefix)], t.scope);
    if (t.utilities) {
      const w = [], y = [], C = new Set(Object.values(i.value).flatMap((x) => Object.keys(x.colors)));
      for (const x of C) x.startsWith("on-") ? el(y, `.${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${S}`], t.scope) : (el(w, `.${V}bg-${x}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${x}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${x}))${S}`, `color: rgb(var(--${t.prefix}theme-on-${x}))${S}`], t.scope), el(y, `.${V}text-${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${S}`], t.scope), el(y, `.${V}border-${x}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${x})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...w.map((x) => `  ${x}`), `}
`, `@layer foreground {
`, ...y.map((x) => `  ${x}`), `}
`) : h.push(...w, ...y);
    }
    let _ = h.map((w, y) => y === 0 ? w : `    ${w}`).join("");
    return t.layers && (_ = `@layer vuetify.theme {
` + h.map((w) => `  ${w}`).join("") + `
}`), _;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if ($c) {
    let S = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    S(), h.addEventListener("change", S, { passive: true }), Xm() && yt(() => {
      h.removeEventListener("change", S);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const S = h._context.provides.usehead;
    if (S) {
      let V = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (S.push) {
        const _ = S.push(V);
        qe && fe(u, () => {
          _.patch(V);
        });
      } else qe ? (S.addHeadObjs(B(V)), ut(() => S.updateDOM())) : S.addHeadObjs(V());
    } else {
      let V = function() {
        x_(t.stylesheetId, t.cspNonce, u.value);
      };
      qe ? fe(u, V, { immediate: true }) : V();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function b() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const S = h.indexOf(o.value), V = S === -1 ? 0 : (S + 1) % h.length;
    v(h[V]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    b(h);
  }
  const g = new Proxy(o, { get(h, S) {
    return Reflect.get(h, S);
  }, set(h, S, V) {
    return S === "value" && Ag(`theme.global.name.value = ${V}`, `theme.change('${V}')`), Reflect.set(h, S, V);
  } });
  return { install: f, change: v, cycle: b, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: g, current: r } };
}
function Ue(e) {
  wt("provideTheme");
  const t = Me(oi, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return Ze(oi, o), o;
}
function Ur() {
  wt("useTheme");
  const e = Me(oi, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = ti(), a = Z();
  if (qe) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Ut(() => {
      l.disconnect();
    }), fe(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: vl(a) };
}
const ii = Symbol.for("vuetify:layout"), uy = Symbol.for("vuetify:layout-item"), Fv = 1e3, cy = z({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), Il = z({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function dy() {
  const e = Me(ii);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function Vl(e) {
  const t = Me(ii);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Ot()}`, a = wt("useLayoutItem");
  Ze(uy, { id: n });
  const l = ce(false);
  Ic(() => l.value = true), Eh(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: I(() => l.value ? false : e.active.value), id: n });
  return Ut(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const I_ = (e, t, n, a) => {
  let l = { top: 0, left: 0, right: 0, bottom: 0 };
  const o = [{ id: "", layer: { ...l } }];
  for (const i of e) {
    const r = t.get(i), s = n.get(i), u = a.get(i);
    if (!r || !s || !u) continue;
    const c = { ...l, [r.value]: parseInt(l[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0) };
    o.push({ id: i, layer: c }), l = c;
  }
  return o;
};
function fy(e) {
  const t = Me(ii, null), n = I(() => t ? t.rootZIndex.value - 100 : Fv), a = Z([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = In(), d = I(() => {
    const y = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const x of C.filter((A) => A.includes(":"))) {
      const [A, P] = x.split(":");
      if (!a.value.includes(A) || !a.value.includes(P)) continue;
      const D = l.get(A), M = l.get(P), E = o.get(A), T = o.get(P);
      !D || !M || !E || !T || (y.set(P, { position: D.value, amount: parseInt(E.value, 10) }), y.set(A, { position: M.value, amount: -parseInt(T.value, 10) }));
    }
    return y;
  }), f = I(() => {
    const y = [...new Set([...i.values()].map((x) => x.value))].sort((x, A) => x - A), C = [];
    for (const x of y) {
      const A = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === x;
      });
      C.push(...A);
    }
    return I_(C, l, o, r);
  }), v = I(() => !Array.from(s.values()).some((y) => y.value)), b = I(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": he(b.value.left), "--v-layout-right": he(b.value.right), "--v-layout-top": he(b.value.top), "--v-layout-bottom": he(b.value.bottom), ...v.value ? void 0 : { transition: "none" } })), g = I(() => f.value.slice(1).map((y, C) => {
    let { id: x } = y;
    const { layer: A } = f.value[C], P = o.get(x), D = l.get(x);
    return { id: x, ...A, size: Number(P.value), position: D.value };
  })), h = (y) => g.value.find((C) => C.id === y), S = wt("createLayout"), V = ce(false);
  return bt(() => {
    V.value = true;
  }), Ze(ii, { register: (y, C) => {
    let { id: x, order: A, position: P, layoutSize: D, elementSize: M, active: E, disableTransitions: T, absolute: O } = C;
    i.set(x, A), l.set(x, P), o.set(x, D), r.set(x, E), T && s.set(x, T);
    const H = jl(uy, S == null ? void 0 : S.vnode).indexOf(y);
    H > -1 ? a.value.splice(H, 0, x) : a.value.push(x);
    const Q = I(() => g.value.findIndex((j) => j.id === x)), ee = I(() => n.value + f.value.length * 2 - Q.value * 2), $ = I(() => {
      const j = P.value === "left" || P.value === "right", N = P.value === "right", G = P.value === "bottom", ue = M.value ?? D.value, pe = ue === 0 ? "%" : "px", F = { [P.value]: 0, zIndex: ee.value, transform: `translate${j ? "X" : "Y"}(${(E.value ? 0 : -(ue === 0 ? 100 : ue)) * (N || G ? -1 : 1)}${pe})`, position: O.value || n.value !== Fv ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!V.value) return F;
      const J = g.value[Q.value], de = d.value.get(x);
      return de && (J[de.position] += de.amount), { ...F, height: j ? `calc(100% - ${J.top}px - ${J.bottom}px)` : M.value ? `${M.value}px` : void 0, left: N ? void 0 : `${J.left}px`, right: N ? `${J.right}px` : void 0, top: P.value !== "bottom" ? `${J.top}px` : void 0, bottom: P.value !== "top" ? `${J.bottom}px` : void 0, width: j ? M.value ? `${M.value}px` : void 0 : `calc(100% - ${J.left}px - ${J.right}px)` };
    }), q = I(() => ({ zIndex: ee.value - 1 }));
    return { layoutItemStyles: $, layoutItemScrimStyles: q, zIndex: ee };
  }, unregister: (y) => {
    i.delete(y), l.delete(y), o.delete(y), r.delete(y), s.delete(y), a.value = a.value.filter((C) => C !== y);
  }, mainRect: b, mainStyles: m, getLayoutItem: h, items: g, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: g, layoutRect: c, layoutRef: u };
}
const V_ = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function Nv(e) {
  const t = e.toLowerCase();
  return V_[t] || t;
}
function vy(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(Nv(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [Nv(e)], separators: o } : { keys: l, separators: o };
}
function P_(e) {
  if (!e) return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n) return [];
  const a = [];
  let l = "", o = 0;
  for (; o < e.length; ) {
    const u = e[o];
    if (u === "-") {
      const c = e[o - 1], d = o > 1 ? e[o - 2] : void 0;
      ["+", "_"].includes(c) && !["+", "/"].includes(d ?? "") ? (l += u, o++) : (l ? (a.push(l), l = "") : a.push("-"), o++);
    } else l += u, o++;
  }
  l && a.push(l);
  const i = [];
  let r = 0;
  for (const u of a) u === "-" ? (r % 2 === 0 && i.push("-"), r++) : (r = 0, i.push(u));
  return i.every((u) => vy(u).keys.length > 0) ? i : [];
}
function my() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = jt(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Ql();
  return r.run(() => {
    const s = lC(a.defaults), u = v_(a.display, a.ssr), c = __(a.theme), d = SC(a.icons), f = CC(a.locale), v = c_(a.date, f), b = h_(a.goTo, f);
    function m(h) {
      for (const V in i) h.directive(V, i[V]);
      for (const V in o) h.component(V, o[V]);
      for (const V in l) h.component(V, Qt({ ...l[V], name: V, aliasName: l[V].name }));
      const S = Ql();
      if (S.run(() => {
        c.install(h);
      }), h.onUnmount(() => S.stop()), h.provide(io, s), h.provide(Cu, u), h.provide(oi, c), h.provide(ku, d), h.provide(ro, f), h.provide(ly, v.options), h.provide(Tv, v.instance), h.provide(ry, b), qe && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: V } = h;
        h.mount = function() {
          const _ = V(...arguments);
          return Ae(() => u.update()), h.mount = V, _;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Tt({ defaults: Ll.call(this, io), display: Ll.call(this, Cu), theme: Ll.call(this, oi), icons: Ll.call(this, ku), locale: Ll.call(this, ro), date: Ll.call(this, Tv) });
      } } });
    }
    function g() {
      r.stop();
    }
    return { install: m, unmount: g, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: b };
  });
}
const A_ = "3.12.1";
my.version = A_;
function Ll(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const T_ = $t({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = wg();
  return (n, a) => {
    const l = pt("v-icon"), o = pt("v-tooltip"), i = pt("v-btn"), r = pt("v-btn-toggle");
    return Re(), Fa(r, { modelValue: Ne(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => ht(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: st(() => [k(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: st(() => [k(l, null, { default: st(() => [...a[1] || (a[1] = [Et("mdi-weather-sunny", -1)])]), _: 1 }), k(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), k(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: st(() => [k(l, null, { default: st(() => [...a[2] || (a[2] = [Et("mdi-theme-light-dark", -1)])]), _: 1 }), k(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), k(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: st(() => [k(l, null, { default: st(() => [...a[3] || (a[3] = [Et("mdi-weather-night", -1)])]), _: 1 }), k(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), $v = Pn(T_, [["__scopeId", "data-v-c9886728"]]), E_ = $t({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", to: "/about" }, { label: "Demos", to: "/projects" }, { label: "Resume", to: "/resume" }, { label: "Contact", to: "/contact" }], { smAndDown: n } = cn(), a = Z(false);
  return (l, o) => {
    const i = pt("v-app-bar-title"), r = pt("v-btn"), s = pt("v-list-item"), u = pt("v-list"), c = pt("v-menu"), d = pt("v-app-bar");
    return Re(), Fa(d, { elevation: "0", color: "background", border: "b" }, { append: st(() => [Ne(n) ? (Re(), He(be, { key: 0 }, [k($v), k(c, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: st(({ props: f }) => [k(r, K(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: st(() => [k(u, { class: "header-menu-list", density: "compact" }, { default: st(() => [(Re(), He(be, null, rn(t, (f) => k(s, { key: f.label, to: f.to, title: f.label, onClick: o[0] || (o[0] = (v) => a.value = false) }, null, 8, ["to", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (Re(), He(be, { key: 1 }, [(Re(), He(be, null, rn(t, (f) => k(r, { key: f.label, to: f.to, variant: "text", size: "default", class: "nav-ink" }, { default: st(() => [Et(ze(f.label), 1)]), _: 2 }, 1032, ["to"])), 64)), k($v)], 64))]), default: st(() => [k(i, { class: "header-title" }, { default: st(() => [...o[2] || (o[2] = [p("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 });
  };
} }), D_ = { class: "text-medium-emphasis text-caption" }, M_ = $t({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = pt("v-footer");
    return Re(), Fa(l, { color: "background", border: "t", class: "app-footer justify-center" }, { default: st(() => [p("span", D_, " \xA9 " + ze(Ne(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), B_ = Pn(M_, [["__scopeId", "data-v-ddd3c1d7"]]);
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Hl = typeof document < "u";
function hy(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function R_(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && hy(e.default);
}
const Qe = Object.assign;
function $s(e, t) {
  const n = {};
  for (const a in t) {
    const l = t[a];
    n[a] = Ln(l) ? l.map(e) : e(l);
  }
  return n;
}
const Go = () => {
}, Ln = Array.isArray;
function Hv(e, t) {
  const n = {};
  for (const a in e) n[a] = a in t ? t[a] : e[a];
  return n;
}
const gy = /#/g, O_ = /&/g, L_ = /\//g, F_ = /=/g, N_ = /\?/g, yy = /\+/g, $_ = /%5B/g, H_ = /%5D/g, by = /%5E/g, z_ = /%60/g, py = /%7B/g, W_ = /%7C/g, Sy = /%7D/g, j_ = /%20/g;
function ed(e) {
  return e == null ? "" : encodeURI("" + e).replace(W_, "|").replace($_, "[").replace(H_, "]");
}
function G_(e) {
  return ed(e).replace(py, "{").replace(Sy, "}").replace(by, "^");
}
function _u(e) {
  return ed(e).replace(yy, "%2B").replace(j_, "+").replace(gy, "%23").replace(O_, "%26").replace(z_, "`").replace(py, "{").replace(Sy, "}").replace(by, "^");
}
function U_(e) {
  return _u(e).replace(F_, "%3D");
}
function Y_(e) {
  return ed(e).replace(gy, "%23").replace(N_, "%3F");
}
function K_(e) {
  return Y_(e).replace(L_, "%2F");
}
function ri(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const q_ = /\/$/, X_ = (e) => e.replace(q_, "");
function Hs(e, t, n = "/") {
  let a, l = {}, o = "", i = "";
  const r = t.indexOf("#");
  let s = t.indexOf("?");
  return s = r >= 0 && s > r ? -1 : s, s >= 0 && (a = t.slice(0, s), o = t.slice(s, r > 0 ? r : t.length), l = e(o.slice(1))), r >= 0 && (a = a || t.slice(0, r), i = t.slice(r, t.length)), a = e1(a ?? t, n), { fullPath: a + o + i, path: a, query: l, hash: ri(i) };
}
function Z_(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function zv(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function J_(e, t, n) {
  const a = t.matched.length - 1, l = n.matched.length - 1;
  return a > -1 && a === l && so(t.matched[a], n.matched[l]) && wy(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function so(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!Q_(e[n], t[n])) return false;
  return true;
}
function Q_(e, t) {
  return Ln(e) ? Wv(e, t) : Ln(t) ? Wv(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Wv(e, t) {
  return Ln(t) ? e.length === t.length && e.every((n, a) => n === t[a]) : e.length === 1 && e[0] === t;
}
function e1(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), a = e.split("/"), l = a[a.length - 1];
  (l === ".." || l === ".") && a.push("");
  let o = n.length - 1, i, r;
  for (i = 0; i < a.length; i++) if (r = a[i], r !== ".") if (r === "..") o > 1 && o--;
  else break;
  return n.slice(0, o).join("/") + "/" + a.slice(i).join("/");
}
const Pa = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let Iu = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), zs = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function t1(e) {
  if (!e) if (Hl) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), X_(e);
}
const n1 = /^[^#]+#/;
function a1(e, t) {
  return e.replace(n1, "#") + t;
}
function l1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), a = e.getBoundingClientRect();
  return { behavior: t.behavior, left: a.left - n.left - (t.left || 0), top: a.top - n.top - (t.top || 0) };
}
const Yr = () => ({ left: window.scrollX, top: window.scrollY });
function o1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, a = typeof n == "string" && n.startsWith("#"), l = typeof n == "string" ? a ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!l) return;
    t = l1(l, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function jv(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Vu = /* @__PURE__ */ new Map();
function i1(e, t) {
  Vu.set(e, t);
}
function r1(e) {
  const t = Vu.get(e);
  return Vu.delete(e), t;
}
function s1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ky(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let _t = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const xy = Symbol("");
_t.MATCHER_NOT_FOUND + "", _t.NAVIGATION_GUARD_REDIRECT + "", _t.NAVIGATION_ABORTED + "", _t.NAVIGATION_CANCELLED + "", _t.NAVIGATION_DUPLICATED + "";
function uo(e, t) {
  return Qe(new Error(), { type: e, [xy]: true }, t);
}
function ia(e, t) {
  return e instanceof Error && xy in e && (t == null || !!(e.type & t));
}
const u1 = ["params", "query", "hash"];
function c1(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of u1) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function d1(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let a = 0; a < n.length; ++a) {
    const l = n[a].replace(yy, " "), o = l.indexOf("="), i = ri(o < 0 ? l : l.slice(0, o)), r = o < 0 ? null : ri(l.slice(o + 1));
    if (i in t) {
      let s = t[i];
      Ln(s) || (s = t[i] = [s]), s.push(r);
    } else t[i] = r;
  }
  return t;
}
function Gv(e) {
  let t = "";
  for (let n in e) {
    const a = e[n];
    if (n = U_(n), a == null) {
      a !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ln(a) ? a.map((l) => l && _u(l)) : [a && _u(a)]).forEach((l) => {
      l !== void 0 && (t += (t.length ? "&" : "") + n, l != null && (t += "=" + l));
    });
  }
  return t;
}
function f1(e) {
  const t = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 && (t[n] = Ln(a) ? a.map((l) => l == null ? null : "" + l) : a == null ? a : "" + a);
  }
  return t;
}
const v1 = Symbol(""), Uv = Symbol(""), Kr = Symbol(""), td = Symbol(""), Pu = Symbol("");
function Ao() {
  let e = [];
  function t(a) {
    return e.push(a), () => {
      const l = e.indexOf(a);
      l > -1 && e.splice(l, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Da(e, t, n, a, l, o = (i) => i()) {
  const i = a && (a.enterCallbacks[l] = a.enterCallbacks[l] || []);
  return () => new Promise((r, s) => {
    const u = (f) => {
      f === false ? s(uo(_t.NAVIGATION_ABORTED, { from: n, to: t })) : f instanceof Error ? s(f) : s1(f) ? s(uo(_t.NAVIGATION_GUARD_REDIRECT, { from: t, to: f })) : (i && a.enterCallbacks[l] === i && typeof f == "function" && i.push(f), r());
    }, c = o(() => e.call(a && a.instances[l], t, n, u));
    let d = Promise.resolve(c);
    e.length < 3 && (d = d.then(u)), d.catch((f) => s(f));
  });
}
function Ws(e, t, n, a, l = (o) => o()) {
  const o = [];
  for (const i of e) for (const r in i.components) {
    let s = i.components[r];
    if (!(t !== "beforeRouteEnter" && !i.instances[r])) if (hy(s)) {
      const u = (s.__vccOpts || s)[t];
      u && o.push(Da(u, n, a, i, r, l));
    } else {
      let u = s();
      o.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${r}" at "${i.path}"`);
        const d = R_(c) ? c.default : c;
        i.mods[r] = c, i.components[r] = d;
        const f = (d.__vccOpts || d)[t];
        return f && Da(f, n, a, i, r, l)();
      }));
    }
  }
  return o;
}
function m1(e, t) {
  const n = [], a = [], l = [], o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const r = t.matched[i];
    r && (e.matched.find((u) => so(u, r)) ? a.push(r) : n.push(r));
    const s = e.matched[i];
    s && (t.matched.find((u) => so(u, s)) || l.push(s));
  }
  return [n, a, l];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let h1 = () => location.protocol + "//" + location.host;
function Cy(e, t) {
  const { pathname: n, search: a, hash: l } = t, o = e.indexOf("#");
  if (o > -1) {
    let i = l.includes(e.slice(o)) ? e.slice(o).length : 1, r = l.slice(i);
    return r[0] !== "/" && (r = "/" + r), zv(r, "");
  }
  return zv(n, e) + a + l;
}
function g1(e, t, n, a) {
  let l = [], o = [], i = null;
  const r = ({ state: f }) => {
    const v = Cy(e, location), b = n.value, m = t.value;
    let g = 0;
    if (f) {
      if (n.value = v, t.value = f, i && i === b) {
        i = null;
        return;
      }
      g = m ? f.position - m.position : 0;
    } else a(v);
    l.forEach((h) => {
      h(n.value, b, { delta: g, type: Iu.pop, direction: g ? g > 0 ? zs.forward : zs.back : zs.unknown });
    });
  };
  function s() {
    i = n.value;
  }
  function u(f) {
    l.push(f);
    const v = () => {
      const b = l.indexOf(f);
      b > -1 && l.splice(b, 1);
    };
    return o.push(v), v;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: f } = window;
      if (!f.state) return;
      f.replaceState(Qe({}, f.state, { scroll: Yr() }), "");
    }
  }
  function d() {
    for (const f of o) f();
    o = [], window.removeEventListener("popstate", r), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", r), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: s, listen: u, destroy: d };
}
function Yv(e, t, n, a = false, l = false) {
  return { back: e, current: t, forward: n, replaced: a, position: window.history.length, scroll: l ? Yr() : null };
}
function y1(e) {
  const { history: t, location: n } = window, a = { value: Cy(e, n) }, l = { value: t.state };
  l.value || o(a.value, { back: null, current: a.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function o(s, u, c) {
    const d = e.indexOf("#"), f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + s : h1() + e + s;
    try {
      t[c ? "replaceState" : "pushState"](u, "", f), l.value = u;
    } catch (v) {
      console.error(v), n[c ? "replace" : "assign"](f);
    }
  }
  function i(s, u) {
    o(s, Qe({}, t.state, Yv(l.value.back, s, l.value.forward, true), u, { position: l.value.position }), true), a.value = s;
  }
  function r(s, u) {
    const c = Qe({}, l.value, t.state, { forward: s, scroll: Yr() });
    o(c.current, c, true), o(s, Qe({}, Yv(a.value, s, null), { position: c.position + 1 }, u), false), a.value = s;
  }
  return { location: a, state: l, push: r, replace: i };
}
function b1(e) {
  e = t1(e);
  const t = y1(e), n = g1(e, t.state, t.location, t.replace);
  function a(o, i = true) {
    i || n.pauseListeners(), history.go(o);
  }
  const l = Qe({ location: "", base: e, go: a, createHref: a1.bind(null, e) }, t, n);
  return Object.defineProperty(l, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(l, "state", { enumerable: true, get: () => t.state.value }), l;
}
let ol = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var Mt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(Mt || {});
const p1 = { type: ol.Static, value: "" }, S1 = /[a-zA-Z0-9_]/;
function w1(e) {
  if (!e) return [[]];
  if (e === "/") return [[p1]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${u}": ${v}`);
  }
  let n = Mt.Static, a = n;
  const l = [];
  let o;
  function i() {
    o && l.push(o), o = [];
  }
  let r = 0, s, u = "", c = "";
  function d() {
    u && (n === Mt.Static ? o.push({ type: ol.Static, value: u }) : n === Mt.Param || n === Mt.ParamRegExp || n === Mt.ParamRegExpEnd ? (o.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({ type: ol.Param, value: u, regexp: c, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), u = "");
  }
  function f() {
    u += s;
  }
  for (; r < e.length; ) {
    if (s = e[r++], s === "\\" && n !== Mt.ParamRegExp) {
      a = n, n = Mt.EscapeNext;
      continue;
    }
    switch (n) {
      case Mt.Static:
        s === "/" ? (u && d(), i()) : s === ":" ? (d(), n = Mt.Param) : f();
        break;
      case Mt.EscapeNext:
        f(), n = a;
        break;
      case Mt.Param:
        s === "(" ? n = Mt.ParamRegExp : S1.test(s) ? f() : (d(), n = Mt.Static, s !== "*" && s !== "?" && s !== "+" && r--);
        break;
      case Mt.ParamRegExp:
        s === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + s : n = Mt.ParamRegExpEnd : c += s;
        break;
      case Mt.ParamRegExpEnd:
        d(), n = Mt.Static, s !== "*" && s !== "?" && s !== "+" && r--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === Mt.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), d(), i(), l;
}
const Kv = "[^/]+?", k1 = { sensitive: false, strict: false, start: true, end: true };
var nn = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(nn || {});
const x1 = /[.+*?^${}()[\]/\\]/g;
function C1(e, t) {
  const n = Qe({}, k1, t), a = [];
  let l = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const c = u.length ? [] : [nn.Root];
    n.strict && !u.length && (l += "/");
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      let v = nn.Segment + (n.sensitive ? nn.BonusCaseSensitive : 0);
      if (f.type === ol.Static) d || (l += "/"), l += f.value.replace(x1, "\\$&"), v += nn.Static;
      else if (f.type === ol.Param) {
        const { value: b, repeatable: m, optional: g, regexp: h } = f;
        o.push({ name: b, repeatable: m, optional: g });
        const S = h || Kv;
        if (S !== Kv) {
          v += nn.BonusCustomRegExp;
          try {
            `${S}`;
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${S}): ` + _.message);
          }
        }
        let V = m ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        d || (V = g && u.length < 2 ? `(?:/${V})` : "/" + V), g && (V += "?"), l += V, v += nn.Dynamic, g && (v += nn.BonusOptional), m && (v += nn.BonusRepeatable), S === ".*" && (v += nn.BonusWildcard);
      }
      c.push(v);
    }
    a.push(c);
  }
  if (n.strict && n.end) {
    const u = a.length - 1;
    a[u][a[u].length - 1] += nn.BonusStrict;
  }
  n.strict || (l += "/?"), n.end ? l += "$" : n.strict && !l.endsWith("/") && (l += "(?:/|$)");
  const i = new RegExp(l, n.sensitive ? "" : "i");
  function r(u) {
    const c = u.match(i), d = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const v = c[f] || "", b = o[f - 1];
      d[b.name] = v && b.repeatable ? v.split("/") : v;
    }
    return d;
  }
  function s(u) {
    let c = "", d = false;
    for (const f of e) {
      (!d || !c.endsWith("/")) && (c += "/"), d = false;
      for (const v of f) if (v.type === ol.Static) c += v.value;
      else if (v.type === ol.Param) {
        const { value: b, repeatable: m, optional: g } = v, h = b in u ? u[b] : "";
        if (Ln(h) && !m) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
        const S = Ln(h) ? h.join("/") : h;
        if (!S) if (g) f.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = true);
        else throw new Error(`Missing required param "${b}"`);
        c += S;
      }
    }
    return c || "/";
  }
  return { re: i, score: a, keys: o, parse: r, stringify: s };
}
function _1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n];
    if (a) return a;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === nn.Static + nn.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === nn.Static + nn.Segment ? 1 : -1 : 0;
}
function _y(e, t) {
  let n = 0;
  const a = e.score, l = t.score;
  for (; n < a.length && n < l.length; ) {
    const o = _1(a[n], l[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(l.length - a.length) === 1) {
    if (qv(a)) return 1;
    if (qv(l)) return -1;
  }
  return l.length - a.length;
}
function qv(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const I1 = { strict: false, end: true, sensitive: false };
function V1(e, t, n) {
  const a = C1(w1(e.path), n), l = Qe(a, { record: e, parent: t, children: [], alias: [] });
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l;
}
function P1(e, t) {
  const n = [], a = /* @__PURE__ */ new Map();
  t = Hv(I1, t);
  function l(d) {
    return a.get(d);
  }
  function o(d, f, v) {
    const b = !v, m = Zv(d);
    m.aliasOf = v && v.record;
    const g = Hv(t, d), h = [m];
    if ("alias" in d) {
      const _ = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const w of _) h.push(Zv(Qe({}, m, { components: v ? v.record.components : m.components, path: w, aliasOf: v ? v.record : m })));
    }
    let S, V;
    for (const _ of h) {
      const { path: w } = _;
      if (f && w[0] !== "/") {
        const y = f.record.path, C = y[y.length - 1] === "/" ? "" : "/";
        _.path = f.record.path + (w && C + w);
      }
      if (S = V1(_, f, g), v ? v.alias.push(S) : (V = V || S, V !== S && V.alias.push(S), b && d.name && !Jv(S) && i(d.name)), Iy(S) && s(S), m.children) {
        const y = m.children;
        for (let C = 0; C < y.length; C++) o(y[C], S, v && v.children[C]);
      }
      v = v || S;
    }
    return V ? () => {
      i(V);
    } : Go;
  }
  function i(d) {
    if (ky(d)) {
      const f = a.get(d);
      f && (a.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(d);
      f > -1 && (n.splice(f, 1), d.record.name && a.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i));
    }
  }
  function r() {
    return n;
  }
  function s(d) {
    const f = E1(d, n);
    n.splice(f, 0, d), d.record.name && !Jv(d) && a.set(d.record.name, d);
  }
  function u(d, f) {
    let v, b = {}, m, g;
    if ("name" in d && d.name) {
      if (v = a.get(d.name), !v) throw uo(_t.MATCHER_NOT_FOUND, { location: d });
      g = v.record.name, b = Qe(Xv(f.params, v.keys.filter((V) => !V.optional).concat(v.parent ? v.parent.keys.filter((V) => V.optional) : []).map((V) => V.name)), d.params && Xv(d.params, v.keys.map((V) => V.name))), m = v.stringify(b);
    } else if (d.path != null) m = d.path, v = n.find((V) => V.re.test(m)), v && (b = v.parse(m), g = v.record.name);
    else {
      if (v = f.name ? a.get(f.name) : n.find((V) => V.re.test(f.path)), !v) throw uo(_t.MATCHER_NOT_FOUND, { location: d, currentLocation: f });
      g = v.record.name, b = Qe({}, f.params, d.params), m = v.stringify(b);
    }
    const h = [];
    let S = v;
    for (; S; ) h.unshift(S.record), S = S.parent;
    return { name: g, path: m, params: b, matched: h, meta: T1(h) };
  }
  e.forEach((d) => o(d));
  function c() {
    n.length = 0, a.clear();
  }
  return { addRoute: o, resolve: u, removeRoute: i, clearRoutes: c, getRoutes: r, getRecordMatcher: l };
}
function Xv(e, t) {
  const n = {};
  for (const a of t) a in e && (n[a] = e[a]);
  return n;
}
function Zv(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: A1(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function A1(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const a in e.components) t[a] = typeof n == "object" ? n[a] : n;
  return t;
}
function Jv(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function T1(e) {
  return e.reduce((t, n) => Qe(t, n.meta), {});
}
function E1(e, t) {
  let n = 0, a = t.length;
  for (; n !== a; ) {
    const o = n + a >> 1;
    _y(e, t[o]) < 0 ? a = o : n = o + 1;
  }
  const l = D1(e);
  return l && (a = t.lastIndexOf(l, a - 1)), a;
}
function D1(e) {
  let t = e;
  for (; t = t.parent; ) if (Iy(t) && _y(e, t) === 0) return t;
}
function Iy({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Qv(e) {
  const t = Me(Kr), n = Me(td), a = I(() => {
    const s = Ne(e.to);
    return t.resolve(s);
  }), l = I(() => {
    const { matched: s } = a.value, { length: u } = s, c = s[u - 1], d = n.matched;
    if (!c || !d.length) return -1;
    const f = d.findIndex(so.bind(null, c));
    if (f > -1) return f;
    const v = em(s[u - 2]);
    return u > 1 && em(c) === v && d[d.length - 1].path !== v ? d.findIndex(so.bind(null, s[u - 2])) : f;
  }), o = I(() => l.value > -1 && L1(n.params, a.value.params)), i = I(() => l.value > -1 && l.value === n.matched.length - 1 && wy(n.params, a.value.params));
  function r(s = {}) {
    if (O1(s)) {
      const u = t[Ne(e.replace) ? "replace" : "push"](Ne(e.to)).catch(Go);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: a, href: I(() => a.value.href), isActive: o, isExactActive: i, navigate: r };
}
function M1(e) {
  return e.length === 1 ? e[0] : e;
}
const B1 = $t({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Qv, setup(e, { slots: t }) {
  const n = Tt(Qv(e)), { options: a } = Me(Kr), l = I(() => ({ [tm(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive, [tm(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const o = t.default && M1(t.default(n));
    return e.custom ? o : $n("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: l.value }, o);
  };
} }), R1 = B1;
function O1(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function L1(e, t) {
  for (const n in t) {
    const a = t[n], l = e[n];
    if (typeof a == "string") {
      if (a !== l) return false;
    } else if (!Ln(l) || l.length !== a.length || a.some((o, i) => o.valueOf() !== l[i].valueOf())) return false;
  }
  return true;
}
function em(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const tm = (e, t, n) => e ?? t ?? n, F1 = $t({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const a = Me(Pu), l = I(() => e.route || a.value), o = Me(Uv, 0), i = I(() => {
    let u = Ne(o);
    const { matched: c } = l.value;
    let d;
    for (; (d = c[u]) && !d.components; ) u++;
    return u;
  }), r = I(() => l.value.matched[i.value]);
  Ze(Uv, I(() => i.value + 1)), Ze(v1, r), Ze(Pu, l);
  const s = Z();
  return fe(() => [s.value, r.value, e.name], ([u, c, d], [f, v, b]) => {
    c && (c.instances[d] = u, v && v !== c && u && u === f && (c.leaveGuards.size || (c.leaveGuards = v.leaveGuards), c.updateGuards.size || (c.updateGuards = v.updateGuards))), u && c && (!v || !so(c, v) || !f) && (c.enterCallbacks[d] || []).forEach((m) => m(u));
  }, { flush: "post" }), () => {
    const u = l.value, c = e.name, d = r.value, f = d && d.components[c];
    if (!f) return nm(n.default, { Component: f, route: u });
    const v = d.props[c], b = v ? v === true ? u.params : typeof v == "function" ? v(u) : v : null, g = $n(f, Qe({}, b, t, { onVnodeUnmounted: (h) => {
      h.component.isUnmounted && (d.instances[c] = null);
    }, ref: s }));
    return nm(n.default, { Component: g, route: u }) || g;
  };
} });
function nm(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const N1 = F1;
function $1(e) {
  const t = P1(e.routes, e), n = e.parseQuery || d1, a = e.stringifyQuery || Gv, l = e.history, o = Ao(), i = Ao(), r = Ao(), s = ce(Pa);
  let u = Pa;
  Hl && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = $s.bind(null, (F) => "" + F), d = $s.bind(null, K_), f = $s.bind(null, ri);
  function v(F, J) {
    let de, ve;
    return ky(F) ? (de = t.getRecordMatcher(F), ve = J) : ve = F, t.addRoute(ve, de);
  }
  function b(F) {
    const J = t.getRecordMatcher(F);
    J && t.removeRoute(J);
  }
  function m() {
    return t.getRoutes().map((F) => F.record);
  }
  function g(F) {
    return !!t.getRecordMatcher(F);
  }
  function h(F, J) {
    if (J = Qe({}, J || s.value), typeof F == "string") {
      const U = Hs(n, F, J.path), le = t.resolve({ path: U.path }, J), oe = l.createHref(U.fullPath);
      return Qe(U, le, { params: f(le.params), hash: ri(U.hash), redirectedFrom: void 0, href: oe });
    }
    let de;
    if (F.path != null) de = Qe({}, F, { path: Hs(n, F.path, J.path).path });
    else {
      const U = Qe({}, F.params);
      for (const le in U) U[le] == null && delete U[le];
      de = Qe({}, F, { params: d(U) }), J.params = d(J.params);
    }
    const ve = t.resolve(de, J), ie = F.hash || "";
    ve.params = c(f(ve.params));
    const R = Z_(a, Qe({}, F, { hash: G_(ie), path: ve.path })), L = l.createHref(R);
    return Qe({ fullPath: R, hash: ie, query: a === Gv ? f1(F.query) : F.query || {} }, ve, { redirectedFrom: void 0, href: L });
  }
  function S(F) {
    return typeof F == "string" ? Hs(n, F, s.value.path) : Qe({}, F);
  }
  function V(F, J) {
    if (u !== F) return uo(_t.NAVIGATION_CANCELLED, { from: J, to: F });
  }
  function _(F) {
    return C(F);
  }
  function w(F) {
    return _(Qe(S(F), { replace: true }));
  }
  function y(F, J) {
    const de = F.matched[F.matched.length - 1];
    if (de && de.redirect) {
      const { redirect: ve } = de;
      let ie = typeof ve == "function" ? ve(F, J) : ve;
      return typeof ie == "string" && (ie = ie.includes("?") || ie.includes("#") ? ie = S(ie) : { path: ie }, ie.params = {}), Qe({ query: F.query, hash: F.hash, params: ie.path != null ? {} : F.params }, ie);
    }
  }
  function C(F, J) {
    const de = u = h(F), ve = s.value, ie = F.state, R = F.force, L = F.replace === true, U = y(de, ve);
    if (U) return C(Qe(S(U), { state: typeof U == "object" ? Qe({}, ie, U.state) : ie, force: R, replace: L }), J || de);
    const le = de;
    le.redirectedFrom = J;
    let oe;
    return !R && J_(a, ve, de) && (oe = uo(_t.NAVIGATION_DUPLICATED, { to: le, from: ve }), q(ve, ve, true, false)), (oe ? Promise.resolve(oe) : P(le, ve)).catch((re) => ia(re) ? ia(re, _t.NAVIGATION_GUARD_REDIRECT) ? re : $(re) : Q(re, le, ve)).then((re) => {
      if (re) {
        if (ia(re, _t.NAVIGATION_GUARD_REDIRECT)) return C(Qe({ replace: L }, S(re.to), { state: typeof re.to == "object" ? Qe({}, ie, re.to.state) : ie, force: R }), J || le);
      } else re = M(le, ve, true, L, ie);
      return D(le, ve, re), re;
    });
  }
  function x(F, J) {
    const de = V(F, J);
    return de ? Promise.reject(de) : Promise.resolve();
  }
  function A(F) {
    const J = G.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(F) : F();
  }
  function P(F, J) {
    let de;
    const [ve, ie, R] = m1(F, J);
    de = Ws(ve.reverse(), "beforeRouteLeave", F, J);
    for (const U of ve) U.leaveGuards.forEach((le) => {
      de.push(Da(le, F, J));
    });
    const L = x.bind(null, F, J);
    return de.push(L), pe(de).then(() => {
      de = [];
      for (const U of o.list()) de.push(Da(U, F, J));
      return de.push(L), pe(de);
    }).then(() => {
      de = Ws(ie, "beforeRouteUpdate", F, J);
      for (const U of ie) U.updateGuards.forEach((le) => {
        de.push(Da(le, F, J));
      });
      return de.push(L), pe(de);
    }).then(() => {
      de = [];
      for (const U of R) if (U.beforeEnter) if (Ln(U.beforeEnter)) for (const le of U.beforeEnter) de.push(Da(le, F, J));
      else de.push(Da(U.beforeEnter, F, J));
      return de.push(L), pe(de);
    }).then(() => (F.matched.forEach((U) => U.enterCallbacks = {}), de = Ws(R, "beforeRouteEnter", F, J, A), de.push(L), pe(de))).then(() => {
      de = [];
      for (const U of i.list()) de.push(Da(U, F, J));
      return de.push(L), pe(de);
    }).catch((U) => ia(U, _t.NAVIGATION_CANCELLED) ? U : Promise.reject(U));
  }
  function D(F, J, de) {
    r.list().forEach((ve) => A(() => ve(F, J, de)));
  }
  function M(F, J, de, ve, ie) {
    const R = V(F, J);
    if (R) return R;
    const L = J === Pa, U = Hl ? history.state : {};
    de && (ve || L ? l.replace(F.fullPath, Qe({ scroll: L && U && U.scroll }, ie)) : l.push(F.fullPath, ie)), s.value = F, q(F, J, de, L), $();
  }
  let E;
  function T() {
    E || (E = l.listen((F, J, de) => {
      if (!ue.listening) return;
      const ve = h(F), ie = y(ve, ue.currentRoute.value);
      if (ie) {
        C(Qe(ie, { replace: true, force: true }), ve).catch(Go);
        return;
      }
      u = ve;
      const R = s.value;
      Hl && i1(jv(R.fullPath, de.delta), Yr()), P(ve, R).catch((L) => ia(L, _t.NAVIGATION_ABORTED | _t.NAVIGATION_CANCELLED) ? L : ia(L, _t.NAVIGATION_GUARD_REDIRECT) ? (C(Qe(S(L.to), { force: true }), ve).then((U) => {
        ia(U, _t.NAVIGATION_ABORTED | _t.NAVIGATION_DUPLICATED) && !de.delta && de.type === Iu.pop && l.go(-1, false);
      }).catch(Go), Promise.reject()) : (de.delta && l.go(-de.delta, false), Q(L, ve, R))).then((L) => {
        L = L || M(ve, R, false), L && (de.delta && !ia(L, _t.NAVIGATION_CANCELLED) ? l.go(-de.delta, false) : de.type === Iu.pop && ia(L, _t.NAVIGATION_ABORTED | _t.NAVIGATION_DUPLICATED) && l.go(-1, false)), D(ve, R, L);
      }).catch(Go);
    }));
  }
  let O = Ao(), W = Ao(), H;
  function Q(F, J, de) {
    $(F);
    const ve = W.list();
    return ve.length ? ve.forEach((ie) => ie(F, J, de)) : console.error(F), Promise.reject(F);
  }
  function ee() {
    return H && s.value !== Pa ? Promise.resolve() : new Promise((F, J) => {
      O.add([F, J]);
    });
  }
  function $(F) {
    return H || (H = !F, T(), O.list().forEach(([J, de]) => F ? de(F) : J()), O.reset()), F;
  }
  function q(F, J, de, ve) {
    const { scrollBehavior: ie } = e;
    if (!Hl || !ie) return Promise.resolve();
    const R = !de && r1(jv(F.fullPath, 0)) || (ve || !de) && history.state && history.state.scroll || null;
    return Ae().then(() => ie(F, J, R)).then((L) => L && o1(L)).catch((L) => Q(L, F, J));
  }
  const j = (F) => l.go(F);
  let N;
  const G = /* @__PURE__ */ new Set(), ue = { currentRoute: s, listening: true, addRoute: v, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: g, getRoutes: m, resolve: h, options: e, push: _, replace: w, go: j, back: () => j(-1), forward: () => j(1), beforeEach: o.add, beforeResolve: i.add, afterEach: r.add, onError: W.add, isReady: ee, install(F) {
    F.component("RouterLink", R1), F.component("RouterView", N1), F.config.globalProperties.$router = ue, Object.defineProperty(F.config.globalProperties, "$route", { enumerable: true, get: () => Ne(s) }), Hl && !N && s.value === Pa && (N = true, _(l.location).catch((ve) => {
    }));
    const J = {};
    for (const ve in Pa) Object.defineProperty(J, ve, { get: () => s.value[ve], enumerable: true });
    F.provide(Kr, ue), F.provide(td, dh(J)), F.provide(Pu, s);
    const de = F.unmount;
    G.add(F), F.unmount = function() {
      G.delete(F), G.size < 1 && (u = Pa, E && E(), E = null, s.value = Pa, N = false, H = false), de();
    };
  } };
  function pe(F) {
    return F.reduce((J, de) => J.then(() => A(de)), Promise.resolve());
  }
  return ue;
}
function Vy() {
  return Me(Kr);
}
function Py(e) {
  return Me(td);
}
const am = 1;
function H1(e, t) {
  const n = e.scrollTop <= am, a = e.scrollTop >= e.scrollHeight - e.clientHeight - am;
  return n && t < 0 ? -1 : a && t > 0 ? 1 : 0;
}
const Sr = { dir: 0, amount: 0 };
function z1(e, t, n, a) {
  if (t === 0) return { acc: Sr, fire: 0 };
  const l = (e.dir === t ? e.amount : 0) + Math.abs(n);
  return l >= a ? { acc: Sr, fire: t } : { acc: { dir: t, amount: l }, fire: 0 };
}
function W1(e, t, n, a) {
  return Math.abs(e) < n && Math.abs(t) < n ? "none" : Math.abs(e) > Math.abs(t) * a ? "horizontal" : "vertical";
}
function j1(e, t, n) {
  return e + t * n;
}
function G1(e, t) {
  return e >= t ? 1 : e <= -t ? -1 : 0;
}
function U1(e) {
  const t = Vy(), n = bo();
  let a = false, l = 0, o = 0, i = "none", r = 0, s = 0, u = Sr, c = false, d = null;
  function f(m) {
    m && a && i === "horizontal" && !c && n.panTo(r, s), a = false, l = 0, o = 0, i = "none", u = Sr, c = false, d !== null && (clearTimeout(d), d = null);
  }
  function v(m) {
    const g = e.el.value;
    if (!e.isActive.value || n.isAnimating.value || !g) {
      f(false);
      return;
    }
    if (a || (a = true, r = n.camera.value.x, s = n.camera.value.y), l += m.deltaX, o += m.deltaY, d !== null && clearTimeout(d), d = window.setTimeout(() => f(true), Q0), i === "none" && (i = W1(l, o, ex, ev)), (i === "horizontal" || i === "none" && Math.abs(m.deltaX) > Math.abs(m.deltaY) * ev) && m.preventDefault(), i === "horizontal") {
      if (c) return;
      n.snapTo(j1(r, l, tx), s);
      const h = G1(l, nx);
      if (h !== 0) {
        const S = j0(e.waypointId, h);
        S && (c = true, t.push(S.route));
      }
    } else if (i === "vertical") {
      const h = H1({ scrollTop: g.scrollTop, scrollHeight: g.scrollHeight, clientHeight: g.clientHeight }, m.deltaY), S = z1(u, h, m.deltaY, J0);
      if (u = S.acc, S.fire !== 0) {
        const V = W0(e.waypointId, S.fire);
        V && (c = true, t.push(V.route));
      }
    }
  }
  let b = null;
  bt(() => {
    b = e.el.value, b == null ? void 0 : b.addEventListener("wheel", v, { passive: false });
  }), yo(() => {
    b == null ? void 0 : b.removeEventListener("wheel", v), b = null, f(false);
  });
}
const Y1 = ["id", "aria-current", "aria-label"], K1 = $t({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = _i(t.waypointId), { camera: a, viewport: l, spacing: o, setCaptureScroll: i } = bo(), r = Py(), s = I(() => r.name === t.waypointId), u = I(() => Nr(n, o.value)), c = I(() => {
    const b = Math.min(o.value.col, o.value.row) * Z0;
    return K0(u.value, a.value, l.value, { radius: b, floor: X0 });
  }), d = I(() => {
    const b = Qf + (1 - Qf) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${b})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none" };
  }), f = Z(null);
  function v() {
    s.value && f.value && i(f.value.scrollTop);
  }
  return fe(s, (b) => {
    b && f.value && (f.value.scrollTop = 0, i(0));
  }), U1({ el: f, isActive: s, waypointId: t.waypointId }), (b, m) => (Re(), He("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: f, class: ne(["world-panel", { "world-panel--scroll": s.value }]), style: ge(d.value), "aria-current": s.value ? "page" : void 0, "aria-label": Ne(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: v }, [Gw(b.$slots, "default", {}, void 0)], 46, Y1));
} }), To = Pn(K1, [["__scopeId", "data-v-8c10f8ce"]]), an = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Ay = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: an.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${an.email}`, display: an.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${an.phone.replace(/[^\d+]/g, "")}`, display: an.phone }, { label: "GitHub", icon: "mdi-github", href: an.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: an.linkedin, display: "bits-for-bread" }], q1 = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], X1 = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], Z1 = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], J1 = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], Q1 = { id: "hero", class: "hero-section" }, eI = { class: "hero-frame glass-panel glass-panel--strong" }, tI = { class: "hero-main" }, nI = { class: "hero-kicker glass-chip section-kicker" }, aI = { class: "hero-name section-heading" }, lI = { class: "hero-tagline" }, oI = { class: "hero-bio" }, iI = { class: "hero-actions" }, rI = { href: "#projects", class: "hero-link hero-link--primary" }, sI = { class: "hero-rail" }, uI = { class: "hero-note quiet-sheet" }, cI = { class: "skills-block" }, dI = { class: "skill-label" }, fI = { class: "skill-items" }, vI = { class: "hero-note quiet-sheet" }, mI = { class: "hero-links" }, hI = ["href"], gI = $t({ __name: "HeroSection", setup(e) {
  const t = Ay.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = pt("v-icon"), o = pt("v-container");
    return Re(), He("section", Q1, [k(o, { class: "hero-container" }, { default: st(() => [p("div", eI, [p("div", tI, [p("span", nI, [k(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), Et(ze(Ne(an).location), 1)]), p("h1", aI, ze(Ne(an).name), 1), p("p", lI, ze(Ne(an).tagline), 1), p("p", oI, ze(Ne(an).bio), 1), p("div", iI, [p("a", rI, [a[0] || (a[0] = Et(" View selected work ", -1)), k(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = p("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), p("aside", sI, [p("section", uI, [a[2] || (a[2] = p("p", { class: "hero-note-label" }, "Capabilities", -1)), p("div", cI, [(Re(true), He(be, null, rn(Ne(q1), (i) => (Re(), He("div", { key: i.label, class: "skill-group" }, [p("span", dI, ze(i.label), 1), p("span", fI, ze(i.items.join("  \xB7  ")), 1)]))), 128))])]), p("section", vI, [a[3] || (a[3] = p("p", { class: "hero-note-label" }, "Elsewhere", -1)), p("div", mI, [(Re(true), He(be, null, rn(Ne(t), (i) => (Re(), He("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [k(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), p("span", null, ze(i.display ?? i.label), 1)], 8, hI))), 128))])])])])]), _: 1 })]);
  };
} }), yI = Pn(gI, [["__scopeId", "data-v-156c5ed8"]]), Au = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function bI(e, t) {
  return Au[e].priority - Au[t].priority;
}
function pI(e) {
  return [...e.links ?? []].sort((t, n) => bI(t.kind, n.kind)).map((t) => ({ ...t, ...Au[t.kind] }));
}
function lm(e, t) {
  const n = pI(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const SI = { id: "projects", class: "demos-section" }, wI = { key: 0, class: "project-feature glass-panel" }, kI = { class: "project-feature-body" }, xI = { class: "project-feature-title" }, CI = { class: "project-feature-blurb" }, _I = { class: "project-feature-tech" }, II = { class: "project-feature-actions" }, VI = ["href", "aria-label"], PI = { class: "project-index" }, AI = { class: "project-item-head" }, TI = { class: "project-item-title" }, EI = { key: 0, class: "project-item-links", "aria-label": "Project links" }, DI = ["href", "aria-label"], MI = { class: "project-item-blurb" }, BI = { class: "project-item-tech" }, RI = $t({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = X1, a = t ? { ...t, visibleLinks: lm(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: lm(o, "compact") }));
  return (o, i) => {
    const r = pt("v-icon"), s = pt("v-tooltip"), u = pt("v-container");
    return Re(), He("section", SI, [k(u, { class: "projects-container" }, { default: st(() => [i[1] || (i[1] = p("div", { class: "projects-head" }, [p("div", { class: "projects-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Selected work"), p("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), p("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Ne(a) ? (Re(), He("article", wI, [p("div", kI, [i[0] || (i[0] = p("span", { class: "project-feature-label" }, "Featured project", -1)), p("h3", xI, ze(Ne(a).title), 1), p("p", CI, ze(Ne(a).blurb), 1), p("div", _I, [(Re(true), He(be, null, rn(Ne(a).tech, (c) => (Re(), He("span", { key: c, class: "project-tech-tag" }, ze(c), 1))), 128))])]), p("div", II, [(Re(true), He(be, null, rn(Ne(a).visibleLinks, (c) => (Re(), He("a", { key: c.kind, href: c.href, target: "_blank", rel: "noopener noreferrer", class: ne(["project-link", { "project-link--demo": c.kind === "demo" }]), "aria-label": c.ariaLabel }, [k(r, { icon: c.icon }, null, 8, ["icon"]), p("span", null, ze(c.label), 1), k(s, { activator: "parent", location: "top", text: c.ariaLabel }, null, 8, ["text"])], 10, VI))), 128))])])) : no("", true), p("div", PI, [(Re(true), He(be, null, rn(Ne(l), (c) => (Re(), He("article", { key: c.title, class: "project-item quiet-sheet" }, [p("header", AI, [p("h3", TI, ze(c.title), 1), c.visibleLinks.length ? (Re(), He("div", EI, [(Re(true), He(be, null, rn(c.visibleLinks, (d) => (Re(), He("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: ne(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [k(r, { icon: d.icon }, null, 8, ["icon"]), k(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, DI))), 128))])) : no("", true)]), p("p", MI, ze(c.blurb), 1), p("div", BI, [(Re(true), He(be, null, rn(c.tech, (d) => (Re(), He("span", { key: d, class: "project-tech-tag" }, ze(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), OI = Pn(RI, [["__scopeId", "data-v-990854bd"]]), LI = { id: "resume", class: "resume-section" }, FI = { class: "timeline" }, NI = { class: "entry-rail" }, $I = { class: "entry-dates glass-chip" }, HI = { class: "entry quiet-sheet" }, zI = { class: "entry-head" }, WI = { class: "entry-titleblock" }, jI = { class: "entry-role" }, GI = { class: "entry-subhead" }, UI = { class: "entry-company" }, YI = { class: "entry-work-location" }, KI = { class: "entry-bullets" }, qI = { key: 0, class: "entry-tech" }, XI = { class: "entry-tech-items" }, ZI = { class: "entry-head" }, JI = { class: "entry-titleblock" }, QI = { class: "entry-role" }, eV = { class: "entry-company" }, tV = { class: "entry-meta" }, nV = { class: "entry-dates" }, aV = { class: "entry-location" }, lV = { key: 0, class: "entry-focus" }, oV = $t({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = pt("v-container");
    return Re(), He("section", LI, [k(a, { class: "resume-container" }, { default: st(() => [n[2] || (n[2] = p("div", { class: "resume-head" }, [p("div", { class: "resume-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Resume"), p("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), p("ol", FI, [(Re(true), He(be, null, rn(Ne(Z1), (l) => (Re(), He("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [p("div", NI, [p("span", $I, ze(l.dates), 1)]), p("article", HI, [p("header", zI, [p("div", WI, [p("h3", jI, ze(l.role), 1), p("div", GI, [p("p", UI, ze(l.company), 1), p("span", YI, ze(l.location), 1)])])]), p("ul", KI, [(Re(true), He(be, null, rn(l.highlights, (o, i) => (Re(), He("li", { key: i }, ze(o), 1))), 128))]), l.tech ? (Re(), He("div", qI, [n[0] || (n[0] = p("span", { class: "entry-tech-label" }, "Stack", -1)), p("span", XI, ze(l.tech.join("  \xB7  ")), 1)])) : no("", true)])]))), 128))]), n[3] || (n[3] = p("div", { class: "edu-head" }, [p("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (Re(true), He(be, null, rn(Ne(J1), (l) => (Re(), He("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [p("header", ZI, [p("div", JI, [p("h3", QI, ze(l.degree) + " \u2014 " + ze(l.field), 1), p("p", eV, ze(l.school), 1)]), p("div", tV, [p("span", nV, ze(l.dates), 1), p("span", aV, ze(l.location), 1)])]), l.focus ? (Re(), He("p", lV, [n[1] || (n[1] = p("span", { class: "entry-tech-label" }, "Focus", -1)), Et(" " + ze(l.focus), 1)])) : no("", true)]))), 128))]), _: 1 })]);
  };
} }), iV = Pn(oV, [["__scopeId", "data-v-72166a64"]]), rV = ["href", "aria-label"], sV = { class: "contact-text" }, uV = $t({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = pt("v-icon");
    return Re(), He("div", { class: ne(["contact-strip", { "is-dense": e.dense }]) }, [(Re(true), He(be, null, rn(Ne(Ay), (l) => (Re(), He("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [k(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), p("span", sV, ze(l.display ?? l.label), 1)], 8, rV))), 128))], 2);
  };
} }), cV = Pn(uV, [["__scopeId", "data-v-0c3dbac0"]]), dV = { id: "contact", class: "contact-section" }, fV = { class: "contact-band glass-panel" }, vV = $t({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = pt("v-container");
    return Re(), He("section", dV, [k(a, { class: "contact-container" }, { default: st(() => [p("div", fV, [n[0] || (n[0] = p("div", { class: "contact-head" }, [p("span", { class: "glass-chip section-kicker" }, "Contact"), p("h2", { class: "contact-title" }, "Open to interesting problems."), p("p", { class: "contact-copy" })], -1)), k(cV, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), mV = Pn(vV, [["__scopeId", "data-v-e54dfca1"]]), hV = { class: "about-section" }, gV = { class: "content-surface about-card" }, yV = { class: "section-heading" }, bV = { class: "about-tagline" }, pV = { class: "section-intro" }, SV = { class: "about-meta" }, wV = $t({ __name: "AboutSection", setup(e) {
  return (t, n) => {
    const a = pt("v-container");
    return Re(), He("section", hV, [k(a, { class: "about-container" }, { default: st(() => [p("div", gV, [n[0] || (n[0] = p("p", { class: "section-kicker" }, "About", -1)), p("h2", yV, ze(Ne(an).name), 1), p("p", bV, ze(Ne(an).tagline), 1), p("p", pV, ze(Ne(an).bio), 1), p("p", SV, ze(Ne(an).location), 1)])]), _: 1 })]);
  };
} }), kV = Pn(wV, [["__scopeId", "data-v-6126ab28"]]), xV = $t({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n } = bo(), a = Z(null);
  let l = null;
  return bt(() => {
    const o = a.value;
    if (!o) return;
    const i = () => n(o.clientWidth, o.clientHeight);
    i(), l = new ResizeObserver(i), l.observe(o);
  }), yo(() => l == null ? void 0 : l.disconnect()), (o, i) => (Re(), He("div", { ref_key: "stageRef", ref: a, class: "world-stage" }, [p("div", { class: "world-plane", style: ge(Ne(t)) }, [k(To, { "waypoint-id": "hero" }, { default: st(() => [k(yI)]), _: 1 }), k(To, { "waypoint-id": "projects" }, { default: st(() => [k(OI)]), _: 1 }), k(To, { "waypoint-id": "resume" }, { default: st(() => [k(iV)]), _: 1 }), k(To, { "waypoint-id": "contact" }, { default: st(() => [k(mV)]), _: 1 }), k(To, { "waypoint-id": "about" }, { default: st(() => [k(kV)]), _: 1 })], 4)], 512));
} }), CV = Pn(xV, [["__scopeId", "data-v-7b9c1dde"]]), _V = { class: "lane-compass", "aria-label": "Move to an adjacent section" }, IV = $t({ __name: "DirectionalNav", setup(e) {
  const t = [{ key: "west", dgx: -1, dgy: 0, icon: "mdi-chevron-left", edge: "left" }, { key: "east", dgx: 1, dgy: 0, icon: "mdi-chevron-right", edge: "right" }, { key: "north", dgx: 0, dgy: -1, icon: "mdi-chevron-up", edge: "top" }, { key: "south", dgx: 0, dgy: 1, icon: "mdi-chevron-down", edge: "bottom" }], n = Py(), a = Vy(), l = I(() => xg(n.name)), o = I(() => t.flatMap((r) => {
    const s = Bc(l.value, r.dgx, r.dgy);
    return s ? [{ d: r, neighbour: s }] : [];
  }));
  function i(r) {
    a.push(r);
  }
  return (r, s) => {
    const u = pt("v-btn");
    return Re(), He("nav", _V, [(Re(true), He(be, null, rn(o.value, ({ d: c, neighbour: d }) => (Re(), Fa(u, { key: c.key, icon: c.icon, "aria-label": `Go to ${d.label}`, title: d.label, variant: "flat", size: "small", class: ne(["lane-compass__btn", `lane-compass__btn--${c.edge}`]), onClick: (f) => i(d.route) }, null, 8, ["icon", "aria-label", "title", "class", "onClick"]))), 128))]);
  };
} }), VV = Pn(IV, [["__scopeId", "data-v-e877681b"]]), PV = $t({ __name: "App", setup(e) {
  return (t, n) => {
    const a = pt("v-app");
    return Re(), Fa(a, { class: "app-shell" }, { default: st(() => [k(Sx), k(E_), k(CV), k(VV), k(B_)]), _: 1 });
  };
} }), AV = z({ ...we(), ...Oe(cy(), ["fullHeight"]), ...We() }, "VApp"), TV = te()({ name: "VApp", props: AV(), setup(e, t) {
  let { slots: n } = t;
  const a = Ue(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = fy({ ...e, fullHeight: true }), { rtlClasses: s } = It();
  return ae(() => {
    var _a3;
    return p("div", { ref: r, class: ne(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: ge([e.style]) }, [p("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Te = z({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Ty = z({ text: String, ...we(), ...Te() }, "VToolbarTitle"), nd = te()({ name: "VToolbarTitle", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(n.default || n.text || e.text);
    return k(e.tag, { class: ne(["v-toolbar-title", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [a && p("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), EV = z({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Sn(e, t, n) {
  return te()({ name: e, props: EV({ mode: n, origin: t }), setup(a, l) {
    let { slots: o } = l;
    const i = { onBeforeEnter(r) {
      a.origin && (r.style.transformOrigin = a.origin);
    }, onLeave(r) {
      if (a.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: u, offsetWidth: c, offsetHeight: d } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${u}px`, r.style.width = `${c}px`, r.style.height = `${d}px`;
      }
      a.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (a.leaveAbsolute && (r == null ? void 0 : r._transitionInitialStyles)) {
        const { position: s, top: u, left: c, width: d, height: f } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = u || "", r.style.left = c || "", r.style.width = d || "", r.style.height = f || "";
      }
    } };
    return () => {
      const r = a.group ? Ec : Na;
      return $n(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function ad(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return te()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: qn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? Ec : Na;
    return () => $n(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function ld() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(l) {
    l._parent = l.parentNode, l._initialStyle = { transition: l.style.transition, overflow: l.style.overflow, width: l.style.width, height: l.style.height };
  }, onEnter(l) {
    const o = l._initialStyle;
    if (!o) return;
    l.style.setProperty("transition", "none", "important"), l.style.overflow = "hidden";
    const i = `${l.offsetWidth}px`, r = `${l.offsetHeight}px`;
    ["x", "both"].includes(t) && (l.style.width = "0"), ["y", "both"].includes(t) && (l.style.height = "0"), l.offsetHeight, l.style.transition = o.transition, e && l._parent && l._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (l.style.width = i), ["y", "both"].includes(t) && (l.style.height = r);
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(l) {
    l._initialStyle = { transition: "", overflow: l.style.overflow, width: l.style.width, height: l.style.height }, l.style.overflow = "hidden", ["x", "both"].includes(t) && (l.style.width = `${l.offsetWidth}px`), ["y", "both"].includes(t) && (l.style.height = `${l.offsetHeight}px`), l.offsetHeight, requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (l.style.width = "0"), ["y", "both"].includes(t) && (l.style.height = "0");
    });
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(l) {
    e && l._parent && l._parent.classList.remove(e), a(l);
  }
  function a(l) {
    if (!l._initialStyle) return;
    const { width: o, height: i } = l._initialStyle;
    l.style.overflow = l._initialStyle.overflow, o != null && ["x", "both"].includes(t) && (l.style.width = o), i != null && ["y", "both"].includes(t) && (l.style.height = i), delete l._initialStyle;
  }
}
const DV = z({ target: [Object, Array] }, "v-dialog-transition"), js = /* @__PURE__ */ new WeakMap(), qr = te()({ name: "VDialogTransition", props: DV(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = im(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (js.set(l, i), qn()) ua(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Cv }).finished.then(() => o());
    else {
      const f = ua(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Cv });
      (_a3 = om(l)) == null ? void 0 : _a3.forEach((v) => {
        ua(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: ni });
      }), f.finished.then(() => o());
    }
  }, onAfterEnter(l) {
    l.style.removeProperty("pointer-events");
  }, onBeforeLeave(l) {
    l.style.pointerEvents = "none";
  }, async onLeave(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f));
    let i;
    !js.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = im(e.target, l) : i = js.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    qn() ? ua(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: _v }).finished.then(() => o()) : (ua(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: _v }).finished.then(() => o()), (_a3 = om(l)) == null ? void 0 : _a3.forEach((v) => {
      ua(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: ni });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? k(Na, K({ name: "dialog-transition" }, a, { css: false }), n) : k(Na, { name: "dialog-transition" }, n);
} });
function om(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function im(e, t) {
  const n = $g(e), a = jc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, b = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), g = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: b, speed: g };
}
const MV = Sn("fab-transition", "center center", "out-in"), BV = Sn("dialog-bottom-transition"), RV = Sn("dialog-top-transition"), si = Sn("fade-transition"), od = Sn("scale-transition"), OV = Sn("scroll-x-transition"), LV = Sn("scroll-x-reverse-transition"), FV = Sn("scroll-y-transition"), NV = Sn("scroll-y-reverse-transition"), $V = Sn("slide-x-transition"), HV = Sn("slide-x-reverse-transition"), id = Sn("slide-y-transition"), zV = Sn("slide-y-reverse-transition"), Xr = ad("expand-transition", ld()), rd = ad("expand-x-transition", ld("", "x")), WV = ad("expand-both-transition", ld("", "both")), jV = z({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ee = te(false)({ name: "VDefaultsProvider", props: jV(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = ho(e);
  return vt(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), kt = z({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function xt(e) {
  return { dimensionStyles: I(() => {
    const n = {}, a = he(e.height), l = he(e.maxHeight), o = he(e.maxWidth), i = he(e.minHeight), r = he(e.minWidth), s = he(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function GV(e) {
  return { aspectStyles: I(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Ey = z({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...we(), ...kt() }, "VResponsive"), Tu = te()({ name: "VResponsive", props: Ey(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = GV(e), { dimensionStyles: l } = xt(e);
  return ae(() => {
    var _a3;
    return p("div", { class: ne(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ge([l.value, e.style]) }, [p("div", { class: "v-responsive__sizer", style: ge(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && p("div", { class: ne(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function sd(e) {
  return Wc(() => {
    const { class: t, style: n } = Dy(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Rt(e) {
  const { colorClasses: t, colorStyles: n } = sd(() => ({ text: tt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Ye(e) {
  const { colorClasses: t, colorStyles: n } = sd(() => ({ background: tt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function UV(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Dy(e) {
  const t = UV(tt(e)), n = [], a = {};
  if (t.background) if (pu(t.background)) {
    if (a.backgroundColor = t.background, !t.text && Xx(t.background)) {
      const l = hn(t.background);
      if (l.a == null || l.a === 1) {
        const o = qg(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (pu(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const ot = z({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return { roundedClasses: I(() => {
    const a = ht(e) ? e.value : e.rounded, l = ht(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const wa = z({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Jt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? Ec : Na, ...s } = gl(a) ? a : {};
  let u;
  return gl(a) ? u = K(s, Dx({ disabled: l, group: o }), i) : u = K({ name: l || !a ? "" : a }, i), $n(r, u, n);
};
function rm(e, t) {
  if (!Nc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? Eu(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function Eu(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Fn = { mounted: rm, unmounted: Eu, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (Eu(e, t), rm(e, t));
} }, My = z({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Ey(), ...we(), ...ot(), ...wa() }, "VImg"), ya = te()({ name: "VImg", directives: { vIntersect: Fn }, props: My(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color), { roundedClasses: i } = ct(e), r = wt("VImg"), s = ce(""), u = Z(), c = ce(e.eager ? "loading" : "idle"), d = ce(), f = ce(), v = I(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = I(() => v.value.aspect || d.value / f.value || 0);
  fe(() => e.src, () => {
    m(c.value !== "idle");
  }), fe(b, (M, E) => {
    !M && E && u.value && _(u.value);
  }), go(() => m());
  function m(M) {
    if (!(e.eager && M) && !(Nc && !M && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const E = new Image();
        E.src = v.value.lazySrc, _(E, null);
      }
      v.value.src && Ae(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            b.value || _(u.value, null), c.value === "loading" && g();
          } else b.value || _(u.value), S();
        });
      });
    }
  }
  function g() {
    var _a3;
    r.isUnmounted || (S(), _(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function S() {
    const M = u.value;
    M && (s.value = M.currentSrc || M.src);
  }
  let V = -1;
  Ut(() => {
    clearTimeout(V);
  });
  function _(M) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const T = () => {
      if (clearTimeout(V), r.isUnmounted) return;
      const { naturalHeight: O, naturalWidth: W } = M;
      O || W ? (d.value = W, f.value = O) : !M.complete && c.value === "loading" && E != null ? V = window.setTimeout(T, E) : (M.currentSrc.endsWith(".svg") || M.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const w = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), y = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const M = p("img", { class: ne(["v-img__img", w.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: g, onError: h }, null), E = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return k(Jt, { transition: e.transition, appear: true }, { default: () => [nt(E ? p("picture", { class: "v-img__picture" }, [E, M]) : M, [[Hn, c.value === "loaded"]])] });
  }, C = () => k(Jt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && p("img", { class: ne(["v-img__img", "v-img__img--preload", w.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), x = () => a.placeholder ? k(Jt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && p("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? k(Jt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && p("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, D = ce(false);
  {
    const M = fe(b, (E) => {
      E && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          D.value = true;
        });
      }), M());
    });
  }
  return ae(() => {
    const M = Tu.filterProps(e);
    return nt(k(Tu, K({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !D.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: he(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, M, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(be, null, [k(y, null, null), k(C, null, null), k(P, null, null), k(x, null, null), k(A, null, null)]), default: a.default }), [[Fn, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Yt = z({ border: [Boolean, Number, String] }, "border");
function en(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return { borderClasses: I(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const Ct = z({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Pt(e) {
  return { elevationClasses: B(() => {
    const n = ht(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const sm = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, na = z({ location: String }, "location");
function Ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = It();
  return { locationStyles: I(() => {
    if (!e.location) return {};
    const { side: o, align: i } = yu(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[sm[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[sm[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const YV = [null, "prominent", "default", "comfortable", "compact"], By = z({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => YV.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Yt(), ...we(), ...Ct(), ...na(), ...ot(), ...Te({ tag: "header" }), ...We() }, "VToolbar"), Du = te()({ name: "VToolbar", props: By(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ye(() => e.color), { borderClasses: o } = en(e), { elevationClasses: i } = Pt(e), { locationStyles: r } = Ya(e), { roundedClasses: s } = ct(e), { themeClasses: u } = Ue(e), { rtlClasses: c } = It(), d = ce(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = I(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = I(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return vt({ VBtn: { variant: "text" } }), ae(() => {
    var _a4;
    const b = !!(e.title || n.title), m = !!(n.image || e.image), g = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!g : e.extended, k(e.tag, { class: ne(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: ge([l.value, r.value, e.style]) }, { default: () => [m && p("div", { key: "image", class: "v-toolbar__image" }, [n.image ? k(Ee, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : k(ya, { key: "image-img", cover: true, src: e.image }, null)]), k(Ee, { defaults: { VTabs: { height: he(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [p("div", { class: "v-toolbar__content", style: { height: he(f.value) } }, [n.prepend && p("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), b && k(nd, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && p("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), k(Ee, { defaults: { VTabs: { height: he(v.value) } } }, { default: () => [k(Xr, null, { default: () => [d.value && p("div", { class: "v-toolbar__extension", style: { height: he(v.value) } }, [g])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), KV = z({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function qV(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = Z(null), r = ce(0), s = ce(0), u = ce(0), c = ce(false), d = ce(false), f = ce(false), v = ce(false), b = ce(true), m = I(() => Number(e.scrollThreshold)), g = I(() => Ke((m.value - r.value) / m.value || 0));
  function h(w) {
    const y = "window" in w ? window.innerHeight : w.clientHeight, C = "window" in w ? document.documentElement.scrollHeight : w.scrollHeight;
    return { clientHeight: y, scrollHeight: C };
  }
  function S() {
    const w = i.value;
    if (!w) return;
    const { clientHeight: y, scrollHeight: C } = h(w), x = C - y, A = (a == null ? void 0 : a.value) || 0, P = m.value + A;
    b.value = x > P;
  }
  function V() {
    S();
  }
  function _() {
    const w = i.value;
    if (!w || n && !n.value) return;
    l = r.value, r.value = "window" in w ? w.pageYOffset : w.scrollTop;
    const y = w instanceof Window ? document.documentElement.scrollHeight : w.scrollHeight;
    o !== y && (y > o && S(), o = y), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: x } = h(w), A = r.value + C >= x - 5;
    !d.value && A && r.value >= m.value && b.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, D = r.value <= 5;
    (d.value && l - r.value > 1 && !A || P && r.value < m.value || D) && (v.value = false), f.value = A;
  }
  return fe(d, () => {
    s.value = s.value || r.value;
  }), fe(c, () => {
    s.value = 0;
  }), bt(() => {
    fe(() => e.scrollTarget, (w) => {
      var _a3;
      const y = w ? document.querySelector(w) : window;
      y && y !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", _), i.value = y, i.value.addEventListener("scroll", _, { passive: true }), Promise.resolve().then(() => {
        S();
      }));
    }, { immediate: true }), window.addEventListener("resize", V, { passive: true });
  }), Ut(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", _), window.removeEventListener("resize", V);
  }), n && fe(n, _, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: g, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: b };
}
function Pl() {
  const e = ce(false);
  return bt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: vl(e) };
}
const XV = z({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Oe(By(), ["location"]), ...Il(), ...KV(), height: { type: [Number, String], default: 64 } }, "VAppBar"), ZV = te()({ name: "VAppBar", props: XV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Z(), l = Ce(e, "modelValue"), o = I(() => {
    var _a3;
    const y = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: y.has("hide"), fullyHide: y.has("fully-hide"), inverted: y.has("inverted"), collapse: y.has("collapse"), elevate: y.has("elevate"), fadeImage: y.has("fade-image") };
  }), i = I(() => {
    const y = o.value;
    return y.hide || y.fullyHide || y.inverted || y.collapse || y.elevate || y.fadeImage || !l.value;
  }), r = I(() => {
    var _a3, _b2;
    const y = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return y + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: b } = qV(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), g = I(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = I(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), S = I(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), V = I(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const y = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? y + C : y : y + C;
  });
  Ft(() => !!e.scrollBehavior, () => {
    ut(() => {
      if (!m.value) {
        l.value = true;
        return;
      }
      if (o.value.inverted) {
        l.value = s.value > u.value;
        return;
      }
      if (!b.value) {
        l.value = true;
        return;
      }
      if (v.value) {
        l.value = false;
        return;
      }
      l.value = c.value && !f.value || s.value < u.value;
    });
  });
  const { ssrBootStyles: _ } = Pl(), { layoutItemStyles: w } = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: V, elementSize: ce(void 0), active: l, absolute: B(() => e.absolute) });
  return ae(() => {
    const y = Oe(Du.filterProps(e), ["location"]);
    return k(Du, K({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...w.value, "--v-toolbar-image-opacity": S.value, height: void 0, ..._.value }, e.style] }, y, { collapse: g.value, flat: h.value }), n);
  }), {};
} }), JV = [null, "default", "comfortable", "compact"], mt = z({ density: { type: String, default: "default", validator: (e) => JV.includes(e) } }, "density");
function Ht(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const QV = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ka(e, t) {
  return p(be, null, [e && p("span", { key: "overlay", class: ne(`${t}__overlay`) }, null), p("span", { key: "underlay", class: ne(`${t}__underlay`) }, null)]);
}
const wn = z({ color: String, variant: { type: String, default: "elevated", validator: (e) => QV.includes(e) } }, "variant");
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  const n = B(() => {
    const { variant: o } = tt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = sd(() => {
    const { variant: o, color: i } = tt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Ry = z({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Yt(), ...we(), ...mt(), ...Ct(), ...ot(), ...Te(), ...We(), ...wn() }, "VBtnGroup"), Mu = te()({ name: "VBtnGroup", props: Ry(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { densityClasses: l } = Ht(e), { borderClasses: o } = en(e), { elevationClasses: i } = Pt(e), { roundedClasses: r } = ct(e);
  vt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ae(() => k(e.tag, { class: ne(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: ge(e.style) }, n));
} }), Al = z({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Tl = z({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ha(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = wt("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ot();
  Ze(Symbol.for(`${t.description}:id`), l);
  const o = Me(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = B(() => e.value), r = I(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: l, value: i, disabled: r }, a);
  }
  function u() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Ut(() => u());
  const c = I(() => o.isSelected(l)), d = I(() => o.items.value[0].id === l), f = I(() => o.items.value[o.items.value.length - 1].id === l), v = I(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return fe(c, (b) => {
    a.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (b) => o.select(l, b), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Ka(e, t) {
  let n = false;
  const a = Tt([]), l = Ce(e, "modelValue", [], (f) => f === void 0 ? [] : Oy(a, f === null ? [null] : lt(f)), (f) => {
    const v = tP(a, f);
    return e.multiple ? v : v[0];
  }), o = wt("useGroup");
  function i(f, v) {
    const b = f, m = Symbol.for(`${t.description}:id`), h = jl(m, o == null ? void 0 : o.vnode).indexOf(v);
    Ne(b.value) === void 0 && (b.value = h, b.useIndexAsValue = true), h > -1 ? a.splice(h, 0, b) : a.push(b);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((b) => b.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  bt(() => {
    s();
  }), Ut(() => {
    n = true;
  }), Rr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const b = a.find((m) => m.id === f);
    if (!(v && (b == null ? void 0 : b.disabled))) if (e.multiple) {
      const m = l.value.slice(), g = m.findIndex((S) => S === f), h = ~g;
      if (v = v ?? !h, h && e.mandatory && m.length <= 1 || !h && e.max != null && m.length + 1 > e.max) return;
      g < 0 && v ? m.push(f) : g >= 0 && !v && m.splice(g, 1), l.value = m;
    } else {
      const m = l.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      l.value = v ?? !m ? [f] : [];
    }
  }
  function c(f) {
    if (e.multiple, l.value.length) {
      const v = l.value[0], b = a.findIndex((h) => h.id === v);
      let m = (b + f) % a.length, g = a[m];
      for (; g.disabled && m !== b; ) m = (m + f) % a.length, g = a[m];
      if (g.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((b) => !b.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => eP(a, f) };
  return Ze(t, d), d;
}
function eP(e, t) {
  const n = Oy(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Oy(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Bt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function tP(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const ud = Symbol.for("vuetify:v-btn-toggle"), nP = z({ ...Ry(), ...Al() }, "VBtnToggle"), aP = te()({ name: "VBtnToggle", props: nP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Ka(e, ud);
  return ae(() => {
    const s = Mu.filterProps(e);
    return k(Mu, K({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), lP = ["x-small", "small", "default", "large", "x-large"], aa = z({ size: { type: [String, Number], default: "default" } }, "size");
function po(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return Wc(() => {
    const n = e.size;
    let a, l;
    return mr(lP, n) ? a = `${t}--size-${n}` : n && (l = { width: he(n), height: he(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const oP = z({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: _e, opacity: [String, Number], ...we(), ...aa(), ...Te({ tag: "i" }), ...We() }, "VIcon"), Ge = te()({ name: "VIcon", props: oP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ce(), { themeClasses: o } = Ur(), { iconData: i } = gC(() => l.value || e.icon), { sizeClasses: r } = po(e), { textColorClasses: s, textColorStyles: u } = Rt(() => e.color);
  return ae(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = Rg(c).filter((f) => f.type === wi && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return k(i.value.component, { tag: e.tag, icon: i.value.icon, class: ne(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ge([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: he(e.size), height: he(e.size), width: he(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function Ti(e, t) {
  const n = Z(), a = ce(false);
  if (Nc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    yt(() => {
      l.disconnect();
    }), fe(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const iP = z({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function rP(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ce(e.reveal ? "initial" : "disabled");
  return bt(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const sP = z({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...we(), ...iP(), ...aa(), ...Te({ tag: "div" }), ...We() }, "VProgressCircular"), za = te()({ name: "VProgressCircular", props: sP(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = Z(), { themeClasses: i } = Ue(e), { sizeClasses: r, sizeStyles: s } = po(e), { textColorClasses: u, textColorStyles: c } = Rt(() => e.color), { textColorClasses: d, textColorStyles: f } = Rt(() => e.bgColor), { intersectionRef: v, isIntersecting: b } = Ti(), { resizeRef: m, contentRect: g } = In(), { state: h, duration: S } = rP(e), V = B(() => h.value === "initial" ? 0 : Ke(parseFloat(e.modelValue), 0, 100)), _ = B(() => Number(e.width)), w = B(() => s.value ? Number(e.size) : g.value ? g.value.width : Math.max(_.value, 32)), y = B(() => a / (1 - _.value / w.value) * 2), C = B(() => _.value / w.value * y.value), x = B(() => {
    const P = (100 - V.value) / 100 * l;
    return e.rounded && V.value > 0 && V.value < 100 ? he(Math.min(l - 0.01, P + C.value)) : he(P);
  }), A = I(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ut(() => {
    v.value = o.value, m.value = o.value;
  }), ae(() => k(e.tag, { ref: o, class: ne(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || qn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: ge([s.value, c.value, { "--progress-reveal-duration": `${S.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : V.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [p("circle", { class: ne(["v-progress-circular__underlay", d.value]), style: ge(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": x.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: V.value })])] })), {};
} }), uP = z({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function cP(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = I(() => {
    const r = tt(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = B(() => Number(e.chunkGap)), o = I(() => {
    if (!n.value) return {};
    const r = he(l.value), s = he(a.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function i(r) {
    const s = tt(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return Ke(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const dP = z({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...uP(), ...we(), ...na({ location: "top" }), ...ot(), ...Te(), ...We() }, "VProgressLinear"), Zr = te()({ name: "VProgressLinear", props: dP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Z(), l = Ce(e, "modelValue"), { isRtl: o, rtlClasses: i } = It(), { themeClasses: r } = Ue(e), { locationStyles: s } = Ya(e), { textColorClasses: u, textColorStyles: c } = Rt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Ye(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: b } = Ye(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: g } = Ye(() => e.color), { roundedClasses: h } = ct(e), { intersectionRef: S, isIntersecting: V } = Ti(), _ = I(() => parseFloat(e.max)), w = I(() => parseFloat(e.height)), y = I(() => Ke(parseFloat(e.bufferValue) / _.value * 100, 0, 100)), C = I(() => Ke(parseFloat(l.value) / _.value * 100, 0, 100)), x = I(() => o.value !== e.reverse), A = I(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = ce(0), { hasChunks: D, chunksMaskStyles: M, snapValueToChunk: E } = cP(e, P);
  Ft(D, () => {
    const { resizeRef: H } = In((Q) => P.value = Q[0].contentRect.width);
    ut(() => H.value = a.value);
  });
  const T = I(() => D.value ? E(y.value) : y.value), O = I(() => D.value ? E(C.value) : C.value);
  function W(H) {
    if (!S.value) return;
    const { left: Q, right: ee, width: $ } = S.value.getBoundingClientRect(), q = x.value ? $ - H.clientX + (ee - $) : H.clientX - Q;
    l.value = Math.round(q / $ * _.value);
  }
  return ut(() => {
    S.value = a.value;
  }), ae(() => k(e.tag, { ref: a, class: ne(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && V.value, "v-progress-linear--reverse": x.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: ge([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? he(w.value) : 0, "--v-progress-linear-height": he(w.value), ...e.absolute ? s.value : {} }, M.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), _.value), onClick: e.clickable && W }, { default: () => [e.stream && p("div", { key: "stream", class: ne(["v-progress-linear__stream", u.value]), style: { ...c.value, [x.value ? "left" : "right"]: he(-w.value), borderTop: `${he(w.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${he(w.value / 4)})`, width: he(100 - y.value, "%"), "--v-progress-linear-stream-to": he(w.value * (x.value ? 1 : -1)) } }, null), p("div", { class: ne(["v-progress-linear__background", d.value]), style: ge([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), p("div", { class: ne(["v-progress-linear__buffer", v.value]), style: ge([b.value, { opacity: parseFloat(e.bufferOpacity), width: he(T.value, "%") }]) }, null), k(Na, { name: A.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((H) => p("div", { key: H, class: ne(["v-progress-linear__indeterminate", H, m.value]), style: ge(g.value) }, null))]) : p("div", { class: ne(["v-progress-linear__determinate", m.value]), style: ge([g.value, { width: he(O.value, "%") }]) }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: y.value })])] })), {};
} }), Jr = z({ loading: [Boolean, String] }, "loader");
function Ei(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function Di(e, t) {
  var _a3;
  let { slots: n } = t;
  return p("div", { class: ne(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || k(Zr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const fP = ["static", "relative", "fixed", "absolute", "sticky"], So = z({ position: { type: String, validator: (e) => fP.includes(e) } }, "position");
function wo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function vP() {
  const e = wt("useRoute");
  return I(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function Ly() {
  var _a3, _b2;
  return (_b2 = (_a3 = wt("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function Mi(e, t) {
  const n = jw("RouterLink"), a = B(() => !!(e.href || e.to)), l = I(() => (a == null ? void 0 : a.value) || uv(t, "click") || uv(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Tt({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = I(() => e.to ? o : void 0), r = vP(), s = I(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Bt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = I(() => {
    var _a3;
    return e.to ? (_a3 = i.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: B(() => !!e.to), isClickable: l, isActive: s, route: B(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.route.value;
  }), navigate: B(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.navigate;
  }), href: u, linkProps: Tt({ href: u, "aria-current": B(() => s.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && a.value ? "true" : void 0), tabindex: B(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const Bi = z({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Gs = false;
function mP(e, t) {
  let n = false, a, l;
  qe && (e == null ? void 0 : e.beforeEach) && (Ae(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      Gs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Gs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Gs = false;
    });
  }), yt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function hP(e, t) {
  fe(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ae(() => {
      t(n);
    });
  }, { immediate: true });
}
const Bu = Symbol("rippleStop"), gP = 80;
function um(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Ru(e) {
  return e.constructor.name === "TouchEvent";
}
function Fy(e) {
  return e.constructor.name === "KeyboardEvent";
}
const yP = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Fy(e)) {
    const d = t.getBoundingClientRect(), f = Ru(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, wr = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = yP(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), um(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), um(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
    });
  });
}, hide(e) {
  var _a3;
  if (!((_a3 = e == null ? void 0 : e._ripple) == null ? void 0 : _a3.enabled)) return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0) return;
  const n = Array.from(t).findLast((o) => !o.dataset.isHiding);
  if (n) n.dataset.isHiding = "true";
  else return;
  const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var _a4;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((_a4 = n.parentNode) == null ? void 0 : _a4.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, l);
} };
function Ny(e) {
  return typeof e > "u" || !!e;
}
function ui(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Bu])) {
    if (e[Bu] = true, Ru(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Fy(e), n._ripple.class && (t.class = n._ripple.class), Ru(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        wr.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, gP);
    } else wr.show(e, n, t);
  }
}
function kr(e) {
  e[Bu] = true;
}
function vn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        vn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), wr.hide(t);
  }
}
function $y(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ci = false;
function bP(e, t) {
  !ci && t.includes(e.key) && (ci = true, ui(e));
}
function Hy(e) {
  ci = false, vn(e);
}
function zy(e) {
  ci && (ci = false, vn(e));
}
function Wy(e, t, n) {
  const { value: a, modifiers: l } = t, o = Ny(a);
  o || wr.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = gl(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => bP(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", kr, { passive: true }), e.addEventListener("mousedown", kr);
      return;
    }
    e.addEventListener("touchstart", ui, { passive: true }), e.addEventListener("touchend", vn, { passive: true }), e.addEventListener("touchmove", $y, { passive: true }), e.addEventListener("touchcancel", vn), e.addEventListener("mousedown", ui), e.addEventListener("mouseup", vn), e.addEventListener("mouseleave", vn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Hy), e.addEventListener("blur", zy), e.addEventListener("dragstart", vn, { passive: true });
  } else !o && n && jy(e);
}
function jy(e) {
  var _a3;
  e.removeEventListener("touchstart", kr), e.removeEventListener("mousedown", kr), e.removeEventListener("touchstart", ui), e.removeEventListener("touchend", vn), e.removeEventListener("touchmove", $y), e.removeEventListener("touchcancel", vn), e.removeEventListener("mousedown", ui), e.removeEventListener("mouseup", vn), e.removeEventListener("mouseleave", vn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Hy), e.removeEventListener("blur", zy), e.removeEventListener("dragstart", vn);
}
function pP(e, t) {
  Wy(e, t, false);
}
function SP(e) {
  jy(e), delete e._ripple;
}
function wP(e, t) {
  if (t.value === t.oldValue) return;
  const n = Ny(t.oldValue);
  Wy(e, t, n);
}
const Nt = { mounted: pP, unmounted: SP, updated: wP }, Qr = z({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: ud }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: _e, appendIcon: _e, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Yt(), ...we(), ...mt(), ...kt(), ...Ct(), ...Tl(), ...Jr(), ...na(), ...So(), ...ot(), ...Bi(), ...aa(), ...Te({ tag: "button" }), ...We(), ...wn({ variant: "elevated" }) }, "VBtn"), $e = te()({ name: "VBtn", props: Qr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { borderClasses: o } = en(e), { densityClasses: i } = Ht(e), { dimensionStyles: r } = xt(e), { elevationClasses: s } = Pt(e), { loaderClasses: u } = Ei(e), { locationStyles: c } = Ya(e), { positionClasses: d } = wo(e), { roundedClasses: f } = ct(e), { sizeClasses: v, sizeStyles: b } = po(e), m = Ha(e, e.symbol, false), g = Mi(e, n), h = I(() => {
    var _a3;
    return e.active !== void 0 ? e.active : g.isRouterLink.value ? (_a3 = g.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), S = B(() => h.value ? e.activeColor ?? e.color : e.color), V = I(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!g.isLink.value || ((_a3 = g.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = g.isActive) == null ? void 0 : _b2.value) ? S.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: _, colorStyles: w, variantClasses: y } = xa(V), C = I(() => (m == null ? void 0 : m.disabled.value) || e.disabled), x = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = I(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(D) {
    var _a3, _b2;
    C.value || g.isLink.value && (D.metaKey || D.ctrlKey || D.shiftKey || D.button !== 0 || n.target === "_blank") || (g.isRouterLink.value ? (_b2 = (_a3 = g.navigate).value) == null ? void 0 : _b2.call(_a3, D) : m == null ? void 0 : m.toggle());
  }
  return hP(g, m == null ? void 0 : m.select), ae(() => {
    const D = g.isLink.value ? "a" : e.tag, M = !!(e.prependIcon || a.prepend), E = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return nt(k(D, K(g.linkProps, { type: D === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": x.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, _.value, i.value, s.value, u.value, d.value, f.value, v.value, y.value, e.class], style: [w.value, r.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && D !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ka(true, "v-btn"), !e.icon && M && p("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? k(Ee, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : k(Ge, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? k(Ge, { key: "content-icon", icon: e.icon }, null) : k(Ee, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? ze(e.text)];
      } })]), !e.icon && E && p("span", { key: "append", class: "v-btn__append" }, [a.append ? k(Ee, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : k(Ge, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? k(za, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Nt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), kP = z({ ...Oe(Qr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), xP = te()({ name: "VAppBarNavIcon", props: kP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k($e, K(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), CP = te()({ name: "VAppBarTitle", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(nd, K(e, { class: "v-app-bar-title" }), n)), {};
} }), Gy = Sa("v-alert-title"), Uy = z({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Yy(e, t) {
  return { iconSize: I(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const _P = ["success", "info", "warning", "error"], IP = z({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: _e, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => _P.includes(e) }, ...we(), ...mt(), ...kt(), ...Ct(), ...Uy(), ...na(), ...So(), ...ot(), ...Te(), ...We(), ...wn({ variant: "flat" }) }, "VAlert"), VP = te()({ name: "VAlert", props: IP(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Yy(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ue(e), { colorClasses: s, colorStyles: u, variantClasses: c } = xa(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Ht(e), { dimensionStyles: f } = xt(e), { elevationClasses: v } = Pt(e), { locationStyles: b } = Ya(e), { positionClasses: m } = wo(e), { roundedClasses: g } = ct(e), { textColorClasses: h, textColorStyles: S } = Rt(() => e.borderColor), { t: V } = Xe(), _ = B(() => ({ "aria-label": V(e.closeLabel), onClick(w) {
    l.value = false, n("click:close", w);
  } }));
  return () => {
    const w = !!(a.prepend || o.value), y = !!(a.title || e.title), C = !!(a.close || e.closable), x = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && k(e.tag, { class: ne(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, g.value, c.value, e.class]), style: ge([u.value, f.value, b.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ka(false, "v-alert"), e.border && p("div", { key: "border", class: ne(["v-alert__border", h.value]), style: ge(S.value) }, null), w && p("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? k(Ee, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...x } } }, a.prepend) : k(Ge, K({ key: "prepend-icon" }, x), null)]), p("div", { class: "v-alert__content" }, [y && k(Gy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && p("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && p("div", { key: "close", class: "v-alert__close" }, [a.close ? k(Ee, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: _.value })];
      } }) : k($e, K({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, _.value), null)])];
    } });
  };
} }), PP = z({ start: Boolean, end: Boolean, icon: _e, image: String, text: String, ...Yt(), ...we(), ...mt(), ...ot(), ...aa(), ...Te(), ...We(), ...wn({ variant: "flat" }) }, "VAvatar"), pn = te()({ name: "VAvatar", props: PP(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { borderClasses: l } = en(e), { colorClasses: o, colorStyles: i, variantClasses: r } = xa(e), { densityClasses: s } = Ht(e), { roundedClasses: u } = ct(e), { sizeClasses: c, sizeStyles: d } = po(e);
  return ae(() => k(e.tag, { class: ne(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: ge([i.value, d.value, e.style]) }, { default: () => [n.default ? k(Ee, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? k(ya, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? k(Ge, { key: "icon", icon: e.icon }, null) : e.text, ka(false, "v-avatar")] })), {};
} }), AP = z({ text: String, onClick: Lt(), ...we(), ...We() }, "VLabel"), ko = te()({ name: "VLabel", props: AP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a3;
    return p("label", { class: ne(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ge(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ky = Symbol.for("vuetify:selection-control-group"), cd = z({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: _e, trueIcon: _e, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Bt }, ...we(), ...mt(), ...We() }, "SelectionControlGroup"), TP = z({ ...cd({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), qy = te()({ name: "VSelectionControlGroup", props: TP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Ot(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return Ze(Ky, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), yt(() => {
      r.delete(s);
    });
  } }), vt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), ae(() => {
    var _a3;
    return p("div", { class: ne(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ge(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), es = z({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...we(), ...cd() }, "VSelectionControl");
function EP(e) {
  const t = Me(Ky, void 0), { densityClasses: n } = Ht(e), a = Ce(e, "modelValue"), l = I(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = I(() => e.falseValue !== void 0 ? e.falseValue : false), i = I(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = I({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? lt(v).some((b) => e.valueComparator(b, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const b = v ? l.value : o.value;
    let m = b;
    i.value && (m = v ? [...lt(a.value), b] : lt(a.value).filter((g) => !e.valueComparator(g, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Rt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Ye(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = I(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Wa = te()({ name: "VSelectionControl", directives: { vRipple: Nt }, inheritAttrs: false, props: es(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = EP(e), v = Ot(), b = ce(false), m = ce(false), g = Z(), h = B(() => e.id || `input-${v}`), S = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    g.value && (g.value.checked = r.value);
  });
  function V(C) {
    S.value && (b.value = true, lo(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function _() {
    b.value = false, m.value = false;
  }
  function w(C) {
    C.stopPropagation();
  }
  function y(C) {
    if (!S.value) {
      g.value && (g.value.checked = r.value);
      return;
    }
    e.readonly && l && Ae(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ae(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [x, A] = ea(n), P = p("input", K({ ref: g, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: _, onFocus: V, onInput: y, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return p("div", K({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": b.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, x, { style: e.style }), [p("div", { class: ne(["v-selection-control__wrapper", s.value]), style: ge(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), nt(p("div", { class: ne(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: V, onBlur: _, id: h.value } })) ?? p(be, null, [i.value && k(Ge, { key: "icon", icon: i.value }, null), P])]), [[Nt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && k(ko, { for: h.value, onClick: w }, { default: () => [C] })]);
  }), { isFocused: b, input: g };
} }), Xy = z({ indeterminate: Boolean, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, ...es({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Nn = te()({ name: "VCheckboxBtn", props: Xy(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "indeterminate"), l = Ce(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ae(() => {
    const s = Oe(Wa.filterProps(e), ["modelValue"]);
    return k(Wa, K(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Ri(e) {
  const { t } = Xe();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), Vi(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return k(Ge, K({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const DP = z({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...we(), ...wa({ transition: { component: id, leaveAbsolute: true, group: true } }) }, "VMessages"), Zy = te()({ name: "VMessages", props: DP(), setup(e, t) {
  let { slots: n } = t;
  const a = I(() => lt(e.messages)), { textColorClasses: l, textColorStyles: o } = Rt(() => e.color);
  return ae(() => k(Jt, { transition: e.transition, tag: "div", class: ne(["v-messages", l.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => p("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), Oi = z({ focused: Boolean, "onUpdate:focused": Lt() }, "focus");
function Ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta();
  const n = Ce(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const Jy = Symbol.for("vuetify:form"), MP = z({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function BP(e) {
  const t = Ce(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = ce(false), o = Z([]), i = Z([]);
  async function r() {
    const c = [];
    let d = true;
    i.value = [], l.value = true;
    for (const f of o.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = false, c.push({ id: f.id, errorMessages: v })), !d && e.fastFail) break;
    }
    return i.value = c, l.value = false, { valid: d, errors: i.value };
  }
  function s() {
    o.value.forEach((c) => c.reset());
  }
  function u() {
    o.value.forEach((c) => c.resetValidation());
  }
  return fe(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of o.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), Ze(Jy, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: b, resetValidation: m } = c;
    o.value.some((g) => g.id === d), o.value.push({ id: d, validate: v, reset: b, resetValidation: m, vm: fh(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((b) => b.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function xo(e) {
  const t = Me(Jy, null);
  return { ...t, isReadonly: I(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: I(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const RP = Symbol.for("vuetify:rules");
function OP(e) {
  const t = Me(RP, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const Qy = z({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Oi() }, "validation");
function eb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ot();
  const a = Ce(e, "modelValue"), l = I(() => e.validationValue === void 0 ? a.value : e.validationValue), o = xo(e), i = OP(() => e.rules), r = Z([]), s = ce(true), u = I(() => !!(lt(a.value === "" ? null : a.value).length || lt(l.value === "" ? null : l.value).length)), c = I(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? lt(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = I(() => {
    var _a3;
    let _ = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    _ === "lazy" && (_ = "input lazy"), _ === "eager" && (_ = "input eager");
    const w = new Set((_ == null ? void 0 : _.split(" ")) ?? []);
    return { input: w.has("input"), blur: w.has("blur") || w.has("input") || w.has("invalid-input"), invalidInput: w.has("invalid-input"), lazy: w.has("lazy"), eager: w.has("eager") };
  }), f = I(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = ce(false), b = I(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = wt("validation"), g = I(() => e.name ?? Ne(n));
  go(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: g.value, vm: m, validate: V, reset: h, resetValidation: S });
  }), Ut(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, g.value);
  }), bt(async () => {
    var _a3;
    d.value.lazy || await V(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, g.value, f.value, c.value);
  }), Ft(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    fe(l, () => {
      if (l.value != null) V();
      else if (e.focused) {
        const _ = fe(() => e.focused, (w) => {
          w || V(), _();
        });
      }
    });
  }), Ft(() => d.value.blur, () => {
    fe(() => e.focused, (_) => {
      _ || V();
    });
  }), fe([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, g.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Ae(), await S();
  }
  async function S() {
    s.value = true, d.value.lazy ? r.value = [] : await V(!d.value.eager);
  }
  async function V() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const w = [];
    v.value = true;
    for (const y of i.value) {
      if (w.length >= Number(e.maxErrors ?? 1)) break;
      const x = await (typeof y == "function" ? y : () => y)(l.value);
      if (x !== true) {
        if (x !== false && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        w.push(x || "");
      }
    }
    return r.value = w, v.value = false, s.value = _, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: S, validate: V, validationClasses: b };
}
const _a = z({ id: String, appendIcon: _e, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: _e, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Lt(), "onClick:append": Lt(), ...we(), ...mt(), ...on(kt(), ["maxWidth", "minWidth", "width"]), ...We(), ...Qy() }, "VInput"), Gt = te()({ name: "VInput", props: { ..._a() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Ht(e), { dimensionStyles: i } = xt(e), { themeClasses: r } = Ue(e), { rtlClasses: s } = It(), { InputIcon: u } = Ri(e), c = Ot(), d = I(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: b, isReadonly: m, isPristine: g, isValid: h, isValidating: S, reset: V, resetValidation: _, validate: w, validationClasses: y } = eb(e, "v-input", d), C = I(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !g.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), x = B(() => C.value.length > 0), A = B(() => !e.hideDetails || e.hideDetails === "auto" && (x.value || !!a.details)), P = I(() => A.value ? `${d.value}-messages` : void 0), D = I(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: b, isReadonly: m, isPristine: g, isValid: h, isValidating: S, hasDetails: A, reset: V, resetValidation: _, validate: w })), M = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), E = B(() => {
    if (e.iconColor) return e.iconColor === true ? M.value : e.iconColor;
  });
  return ae(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), O = !!(a.append || e.appendIcon);
    return p("div", { class: ne(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, y.value, e.class]), style: ge([i.value, e.style]) }, [T && p("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(D.value) : e.prependIcon && k(u, { key: "prepend-icon", name: "prepend", color: E.value }, null)]), a.default && p("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, D.value)]), O && p("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(D.value) : e.appendIcon && k(u, { key: "append-icon", name: "append", color: E.value }, null)]), A.value && p("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [k(Zy, { active: x.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, D.value)])]);
  }), { reset: V, resetValidation: _, validate: w, isValid: h, errorMessages: f };
} }), Us = Symbol("Forwarded refs");
function Ys(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function At(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[Us] = n, new Proxy(e, { get(l, o) {
    if (Reflect.has(l, o)) return Reflect.get(l, o);
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const i of n) if (i.value && Reflect.has(i.value, o)) {
        const r = Reflect.get(i.value, o);
        return typeof r == "function" ? r.bind(i.value) : r;
      }
    }
  }, has(l, o) {
    if (Reflect.has(l, o)) return true;
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const i of n) if (i.value && Reflect.has(i.value, o)) return true;
    return false;
  }, set(l, o, i) {
    if (Reflect.has(l, o)) return Reflect.set(l, o, i);
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const r of n) if (r.value && Reflect.has(r.value, o)) return Reflect.set(r.value, o, i);
    return false;
  }, getOwnPropertyDescriptor(l, o) {
    var _a3;
    const i = Reflect.getOwnPropertyDescriptor(l, o);
    if (i) return i;
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const r of n) {
        if (!r.value) continue;
        const s = Ys(r.value, o) ?? ("_" in r.value ? Ys((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[Us];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = Ys(c.value, o);
          if (d) return d;
          const f = c.value && c.value[Us];
          f && u.push(...f);
        }
      }
    }
  } });
}
const LP = z({ ...Oe(_a(), ["direction"]), ...Oe(Xy(), ["inline"]) }, "VCheckbox"), FP = te()({ name: "VCheckbox", inheritAttrs: false, props: LP(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: r } = Ca(e), s = Z(), u = Ot();
  return ae(() => {
    const [c, d] = ea(n), f = Gt.filterProps(e), v = Nn.filterProps(e);
    return k(Gt, K({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (b) => l.value = b, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (b) => {
      let { id: m, messagesId: g, isDisabled: h, isReadonly: S, isValid: V } = b;
      return k(Nn, K(v, { id: m.value, "aria-describedby": g.value, disabled: h.value, readonly: S.value }, d, { error: V.value === false, modelValue: l.value, "onUpdate:modelValue": (_) => l.value = _, onFocus: i, onBlur: r }), a);
    } });
  }), At({}, s);
} });
function NP(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = di(l, n), i = tb(l, a, n), r = di(l, t), s = nb(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function $P(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = di(a, n), o = nb(a, t), i = di(a, t);
  return o - l / 2 + i / 2;
}
function cm(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function HP(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function tb(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function di(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function nb(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const dd = Symbol.for("vuetify:v-slide-group"), fd = z({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: dd }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...we(), ..._l({ mobile: null }), ...Te(), ...Al({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), fi = te()({ name: "VSlideGroup", props: fd(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = It(), { displayClasses: l, mobile: o } = cn(e), i = Ka(e, e.symbol), r = ce(false), s = ce(0), u = ce(0), c = ce(0), d = I(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = In(), { resizeRef: b, contentRect: m } = In(), g = g_(), h = I(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), S = I(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[0]) : -1), V = I(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (qe) {
    let j = -1;
    fe(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(j), j = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const N = d.value ? "width" : "height";
          u.value = v.value[N], c.value = m.value[N], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && S.value >= 0 && b.el) {
          const N = b.el.children[V.value];
          w(N, e.centerActive);
        }
      });
    });
  }
  const _ = ce(false);
  function w(j, N) {
    let G = 0;
    N ? G = $P({ containerElement: f.el, isHorizontal: d.value, selectedElement: j }) : G = NP({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: j }), y(G);
  }
  function y(j) {
    if (!qe || !f.el) return;
    const N = di(d.value, f.el), G = tb(d.value, a.value, f.el);
    if (!(cm(d.value, f.el) <= N || Math.abs(j - G) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: pe, offsetWidth: F } = f.el;
        j = pe - F - j;
      }
      d.value ? g.horizontal(j, h.value) : g(j, h.value);
    }
  }
  function C(j) {
    const { scrollTop: N, scrollLeft: G } = j.target;
    s.value = d.value ? G : N;
  }
  function x(j) {
    if (_.value = true, !(!r.value || !b.el)) {
      for (const N of j.composedPath()) for (const G of b.el.children) if (G === N) {
        w(G);
        return;
      }
    }
  }
  function A(j) {
    _.value = false;
  }
  let P = false;
  function D(j) {
    var _a3;
    !P && !_.value && !(j.relatedTarget && ((_a3 = b.el) == null ? void 0 : _a3.contains(j.relatedTarget))) && O(), P = false;
  }
  function M() {
    P = true;
  }
  function E(j) {
    if (!b.el) return;
    function N(G) {
      j.preventDefault(), O(G);
    }
    d.value ? j.key === "ArrowRight" ? N(a.value ? "prev" : "next") : j.key === "ArrowLeft" && N(a.value ? "next" : "prev") : j.key === "ArrowDown" ? N("next") : j.key === "ArrowUp" && N("prev"), j.key === "Home" ? N("first") : j.key === "End" && N("last");
  }
  function T(j, N) {
    if (!j) return;
    let G = j;
    do
      G = G == null ? void 0 : G[N === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (G == null ? void 0 : G.hasAttribute("disabled"));
    return G;
  }
  function O(j) {
    if (!b.el) return;
    let N;
    if (!j) N = Ra(b.el)[0];
    else if (j === "next") {
      if (N = T(b.el.querySelector(":focus"), j), !N) return O("first");
    } else if (j === "prev") {
      if (N = T(b.el.querySelector(":focus"), j), !N) return O("last");
    } else j === "first" ? (N = b.el.firstElementChild, (N == null ? void 0 : N.hasAttribute("disabled")) && (N = T(N, "next"))) : j === "last" && (N = b.el.lastElementChild, (N == null ? void 0 : N.hasAttribute("disabled")) && (N = T(N, "prev")));
    N && N.focus({ preventScroll: true });
  }
  function W(j) {
    const N = d.value && a.value ? -1 : 1, G = (j === "prev" ? -N : N) * u.value;
    let ue = s.value + G;
    if (d.value && a.value && f.el) {
      const { scrollWidth: pe, offsetWidth: F } = f.el;
      ue += pe - F;
    }
    y(ue);
  }
  const H = I(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Q = I(() => r.value || Math.abs(s.value) > 0), ee = I(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !o.value;
      case true:
        return Q.value;
      case "mobile":
        return o.value || Q.value;
      default:
        return !o.value && Q.value;
    }
  }), $ = I(() => Math.abs(s.value) > 1), q = I(() => {
    if (!f.value || !Q.value) return false;
    const j = cm(d.value, f.el), N = HP(d.value, f.el);
    return j - N - Math.abs(s.value) > 1;
  });
  return ae(() => k(e.tag, { class: ne(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": ee.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: ge(e.style), tabindex: _.value || i.selected.value.length ? -1 : 0, onFocus: D }, { default: () => {
    var _a3, _b2, _c2;
    return [ee.value && p("div", { key: "prev", class: ne(["v-slide-group__prev", { "v-slide-group__prev--disabled": !$.value }]), onMousedown: M, onClick: () => $.value && W("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, H.value)) ?? k(si, null, { default: () => [k(Ge, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), p("div", { key: "container", ref: f, class: ne(["v-slide-group__container", e.contentClass]), onScroll: C }, [p("div", { ref: b, class: "v-slide-group__content", onFocusin: x, onFocusout: A, onKeydown: E }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, H.value)])]), ee.value && p("div", { key: "next", class: ne(["v-slide-group__next", { "v-slide-group__next--disabled": !q.value }]), onMousedown: M, onClick: () => q.value && W("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, H.value)) ?? k(si, null, { default: () => [k(Ge, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: W, scrollOffset: s, focus: O, hasPrev: $, hasNext: q };
} }), ab = Symbol.for("vuetify:v-chip-group"), zP = z({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Bt }, ...fd({ scrollToActive: false }), ...we(), ...Al({ selectedClass: "v-chip--selected" }), ...Te(), ...We(), ...wn({ variant: "tonal" }) }, "VChipGroup"), WP = te()({ name: "VChipGroup", props: zP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ka(e, ab);
  return vt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), ae(() => {
    const u = fi.filterProps(e);
    return k(fi, K(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), jP = z({ activeClass: String, appendAvatar: String, appendIcon: _e, baseColor: String, closable: Boolean, closeIcon: { type: _e, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: _e, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Lt(), onClickOnce: Lt(), ...Yt(), ...we(), ...mt(), ...Ct(), ...Tl(), ...ot(), ...Bi(), ...aa(), ...Te({ tag: "span" }), ...We(), ...wn({ variant: "tonal" }) }, "VChip"), ba = te()({ name: "VChip", directives: { vRipple: Nt }, props: jP(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Xe(), { borderClasses: i } = en(e), { densityClasses: r } = Ht(e), { elevationClasses: s } = Pt(e), { roundedClasses: u } = ct(e), { sizeClasses: c } = po(e), { themeClasses: d } = Ue(e), f = Ce(e, "modelValue"), v = Ha(e, ab, false), b = Ha(e, dd, false), m = Mi(e, n), g = B(() => e.link !== false && m.isLink.value), h = I(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), S = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(x) {
    x.preventDefault(), x.stopPropagation(), f.value = false, a("click:close", x);
  } }));
  fe(f, (x) => {
    x ? (v == null ? void 0 : v.register(), b == null ? void 0 : b.register()) : (v == null ? void 0 : v.unregister(), b == null ? void 0 : b.unregister());
  });
  const { colorClasses: V, colorStyles: _, variantClasses: w } = xa(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function y(x) {
    var _a3, _b2;
    a("click", x), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, x), v == null ? void 0 : v.toggle());
  }
  function C(x) {
    (x.key === "Enter" || x.key === " ") && (x.preventDefault(), y(x));
  }
  return () => {
    var _a3;
    const x = m.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), P = !!(A || l.append), D = !!(l.close || e.closable), M = !!(l.filter || e.filter) && v, E = !!(e.prependIcon || e.prependAvatar), T = !!(E || l.prepend);
    return f.value && nt(k(x, K(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": M, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, V.value, r.value, s.value, u.value, c.value, w.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [_.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: y, onKeydown: h.value && !g.value && C }), { default: () => {
      var _a4;
      return [ka(h.value, "v-chip"), M && k(rd, { key: "filter" }, { default: () => [nt(p("div", { class: "v-chip__filter" }, [l.filter ? k(Ee, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : k(Ge, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Hn, v.isSelected.value]])] }), T && p("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? k(Ee, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : p(be, null, [e.prependIcon && k(Ge, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && k(pn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), p("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? ze(e.text)]), P && p("div", { key: "append", class: "v-chip__append" }, [l.append ? k(Ee, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : p(be, null, [e.appendIcon && k(Ge, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && k(pn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), D && p("button", K({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, S.value), [l.close ? k(Ee, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : k(Ge, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Nt, h.value && e.ripple, null]]);
  };
} }), GP = ["dotted", "dashed", "solid", "double"], UP = z({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => GP.includes(e) }, ...we(), ...We() }, "VDivider"), yn = te()({ name: "VDivider", props: UP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { textColorClasses: o, textColorStyles: i } = Rt(() => e.color), r = I(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = he(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = he(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? he(u) : void 0, marginInline: !e.vertical && u ? he(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${he(c)})` : void 0 };
  });
  return ae(() => {
    const u = p("hr", { class: ne([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: ge([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? p("div", { class: ne(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, p("div", { class: "v-divider__content", style: ge(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), Ou = Symbol.for("vuetify:list");
function lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Me(Ou, { filterable: false, hasPrepend: ce(false), updateHasPrepend: () => null, trackingIndex: ce(-1), navigationStrategy: ce("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Ot() } = e, i = { filterable: t.filterable || n, hasPrepend: ce(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return Ze(Ou, i), t;
}
function ob() {
  return Me(Ou, null);
}
const vd = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Pe(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of lt(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, ib = (e) => {
  const t = vd(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = Pe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
    return t.activate({ ...i, id: o, activated: r });
  }, in: (a, l, o) => {
    let i = /* @__PURE__ */ new Set();
    if (a != null) {
      const r = lt(a);
      r.length && (i = t.in(r.slice(0, 1), l, o));
    }
    return i;
  }, out: (a, l, o) => t.out(a, l, o) };
}, YP = (e) => {
  const t = vd(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, KP = (e) => {
  const t = ib(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, qP = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, rb = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, XP = { open: rb.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, md = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Pe(a), e && !l) {
      const i = Array.from(o.entries()).reduce((r, s) => {
        let [u, c] = s;
        return c === "on" && r.push(u), r;
      }, []);
      if (i.length === 1 && i[0] === a) return o;
    }
    return o.set(a, l ? "on" : "off"), o;
  }, in: (n, a, l, o) => {
    const i = /* @__PURE__ */ new Map();
    for (const r of n || []) t.select({ id: r, value: true, selected: i, children: a, parents: l, disabled: o });
    return i;
  }, out: (n) => {
    const a = [];
    for (const [l, o] of n.entries()) o === "on" && a.push(l);
    return a;
  } };
  return t;
}, sb = (e) => {
  const t = md(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Pe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, ZP = (e) => {
  const t = md(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, JP = (e) => {
  const t = sb(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, hd = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Pe(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(Pe(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = Pe(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const b of i.get(d)) {
        const m = Pe(b);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Pe(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, b) => {
      let [m, g] = b;
      return g === "on" && v.push(m), v;
    }, []).length === 0 ? u : o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Map();
    for (const i of n || []) o = t.select({ id: i, value: true, selected: o, children: a, parents: l, disabled: /* @__PURE__ */ new Set() });
    return o;
  }, out: (n, a) => {
    const l = [];
    for (const [o, i] of n.entries()) i === "on" && !a.has(o) && l.push(o);
    return l;
  } };
  return t;
}, QP = (e) => {
  const t = hd(e);
  return { select: t.select, in: t.in, out: (a, l, o) => {
    const i = [];
    for (const [r, s] of a.entries()) if (s === "on") {
      if (o.has(r)) {
        const u = o.get(r);
        if (a.get(u) === "on") continue;
      }
      i.push(r);
    }
    return i;
  } };
}, eA = (e) => {
  const n = { select: hd(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, co = Symbol.for("vuetify:nested"), ub = { id: ce(), root: { itemsRegistration: Z("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: Z(/* @__PURE__ */ new Map()), parents: Z(/* @__PURE__ */ new Map()), disabled: Z(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: Z(false), scrollToActive: Z(false), selectable: Z(false), opened: Z(/* @__PURE__ */ new Set()), activated: Z(/* @__PURE__ */ new Set()), selected: Z(/* @__PURE__ */ new Map()), selectedValues: Z([]), getPath: () => [] } }, tA = z({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), nA = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = ce(/* @__PURE__ */ new Map()), r = ce(/* @__PURE__ */ new Map()), s = ce(/* @__PURE__ */ new Set()), u = Ce(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((y) => Pe(y)) : w), (w) => [...w.values()]), c = I(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return YP(e.mandatory);
      case "single-leaf":
        return KP(e.mandatory);
      case "independent":
        return vd(e.mandatory);
      case "single-independent":
      default:
        return ib(e.mandatory);
    }
  }), d = I(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return JP(e.mandatory);
      case "leaf":
        return ZP(e.mandatory);
      case "independent":
        return md(e.mandatory);
      case "single-independent":
        return sb(e.mandatory);
      case "trunk":
        return QP(e.mandatory);
      case "branch":
        return eA(e.mandatory);
      case "classic":
      default:
        return hd(e.mandatory);
    }
  }), f = I(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return XP;
      case "single":
        return qP;
      case "multiple":
      default:
        return rb;
    }
  }), v = Ce(e, "activated", e.activated, (w) => c.value.in(w, i.value, r.value), (w) => c.value.out(w, i.value, r.value)), b = Ce(e, "selected", e.selected, (w) => d.value.in(w, i.value, r.value, s.value), (w) => d.value.out(w, i.value, r.value));
  Ut(() => {
    o = true;
  });
  function m(w) {
    const y = [];
    let C = Pe(w);
    for (; C !== void 0; ) y.unshift(C), C = r.value.get(C);
    return y;
  }
  const g = wt("nested"), h = /* @__PURE__ */ new Set(), S = mC(() => {
    Ae(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  fe(() => [n.value, tt(a)], () => {
    e.itemsRegistration === "props" && V();
  }, { immediate: true });
  function V() {
    const w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), x = tt(a) ? (D) => Pe(D.raw) : (D) => D.value, A = [...n.value];
    let P = 0;
    for (; P < A.length; ) {
      const D = A[P++], M = x(D);
      if (D.children) {
        const E = [];
        for (const T of D.children) {
          const O = x(T);
          w.set(O, M), E.push(O), A.push(T);
        }
        y.set(M, E);
      }
      D.props.disabled && C.add(M);
    }
    i.value = y, r.value = w, s.value = C;
  }
  const _ = { id: ce(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => tt(l)), selectable: B(() => e.selectable), activated: v, selected: b, selectedValues: I(() => {
    const w = [];
    for (const [y, C] of b.value.entries()) C === "on" && w.push(y);
    return w;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (w, y, C, x) => {
    if (h.has(w)) {
      m(w).map(String).join(" -> "), m(y).concat(w).map(String).join(" -> ");
      return;
    } else h.add(w);
    y && w !== y && r.value.set(w, y), C && s.value.add(w), x && i.value.set(w, []), y != null && i.value.set(y, [...i.value.get(y) || [], w]), S();
  }, unregister: (w) => {
    if (o) return;
    h.delete(w), i.value.delete(w), s.value.delete(w);
    const y = r.value.get(w);
    if (y) {
      const C = i.value.get(y) ?? [];
      i.value.set(y, C.filter((x) => x !== w));
    }
    r.value.delete(w), S();
  }, updateDisabled: (w, y) => {
    y ? s.value.add(w) : s.value.delete(w);
  }, open: (w, y, C) => {
    g.emit("click:open", { id: w, value: y, path: m(w), event: C });
    const x = f.value.open({ id: w, value: y, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, openOnSelect: (w, y, C) => {
    const x = f.value.select({ id: w, value: y, selected: new Map(b.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, select: (w, y, C) => {
    g.emit("click:select", { id: w, value: y, path: m(w), event: C });
    const x = d.value.select({ id: w, value: y, selected: new Map(b.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    x && (b.value = x), _.root.openOnSelect(w, y, C);
  }, activate: (w, y, C) => {
    if (!e.activatable) return _.root.select(w, true, C);
    g.emit("click:activate", { id: w, value: y, path: m(w), event: C });
    const x = c.value.activate({ id: w, value: y, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
    if (x.size !== v.value.size) v.value = x;
    else {
      for (const A of x) if (!v.value.has(A)) {
        v.value = x;
        return;
      }
      for (const A of v.value) if (!x.has(A)) {
        v.value = x;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return Ze(co, _), _.root;
}, cb = (e, t, n) => {
  const a = Me(co, ub), l = Symbol("nested item"), o = I(() => {
    const r = Pe(tt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: I(() => a.root.opened.value.has(o.value)), parent: I(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: I(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: I(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: I(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: I(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return go(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ae(() => {
      a.root.register(o.value, a.id.value, tt(t), n);
    });
  }), Ut(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), fe(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ae(() => {
      a.root.register(r, a.id.value, tt(t), n);
    }));
  }), fe(() => tt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && Ze(co, i), i;
}, aA = () => {
  const e = Me(co, ub);
  Ze(co, { ...e, isGroupActivator: true });
}, lA = Qt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return aA(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), db = z({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: _e, default: "$collapse" }, disabled: Boolean, expandIcon: { type: _e, default: "$expand" }, rawId: [String, Number], prependIcon: _e, appendIcon: _e, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...we(), ...Te() }, "VListGroup"), vi = te()({ name: "VListGroup", props: db(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = cb(() => e.value, () => e.disabled, true), i = I(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = ob(), { isBooted: s } = Pl(), u = Me(co), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = I(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = I(() => a.value ? e.collapseIcon : e.expandIcon), b = I(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return ae(() => k(e.tag, { class: ne(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: ge(e.style) }, { default: () => [n.activator && k(Ee, { defaults: b.value }, { default: () => [k(lA, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), k(Jt, { transition: { component: Xr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? nt(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Hn, a.value]]) : a.value && p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), oA = z({ opacity: [Number, String], ...we(), ...Te() }, "VListItemSubtitle"), fb = te()({ name: "VListItemSubtitle", props: oA(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(e.tag, { class: ne(["v-list-item-subtitle", e.class]), style: ge([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), vb = Sa("v-list-item-title"), mb = z({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: _e, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Lt(), onClickOnce: Lt(), ...Yt(), ...we(), ...mt(), ...kt(), ...Ct(), ...ot(), ...Bi(), ...Te(), ...We(), ...wn({ variant: "text" }) }, "VListItem"), Vn = te()({ name: "VListItem", directives: { vRipple: Nt }, props: mb(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = Mi(e, n), i = Z(), r = I(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: b, root: m, parent: g, openOnSelect: h, scrollToActive: S, id: V } = cb(r, () => e.disabled, false), _ = ob(), w = I(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), y = B(() => e.link !== false && o.isLink.value), C = I(() => !!_ && (m.selectable.value || m.activatable.value || e.value != null)), x = I(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = I(() => _ && _.navigationStrategy.value === "track" && e.index !== void 0 && _.trackingIndex.value === e.index), P = I(() => _ ? y.value ? "link" : C.value ? "option" : "listitem" : void 0), D = I(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : w.value;
  }), M = B(() => e.rounded || e.nav), E = B(() => e.color ?? e.activeColor), T = B(() => ({ color: w.value ? E.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  fe(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (ve) => {
    ve && O();
  }), fe(u, (ve) => {
    var _a3;
    !ve || !S || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), fe(A, (ve) => {
    var _a3;
    ve && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), go(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ae(() => O());
  });
  function O() {
    g.value != null && m.open(g.value, true), h(true);
  }
  const { themeClasses: W } = Ue(e), { borderClasses: H } = en(e), { colorClasses: Q, colorStyles: ee, variantClasses: $ } = xa(T), { densityClasses: q } = Ht(e), { dimensionStyles: j } = xt(e), { elevationClasses: N } = Pt(e), { roundedClasses: G } = ct(M), ue = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), pe = B(() => e.ripple !== void 0 && e.ripple && (_ == null ? void 0 : _.filterable) ? { keys: ["Enter"] } : e.ripple), F = I(() => ({ isActive: w.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function J(ve) {
    var _a3, _b2, _c2;
    l("click", ve), !["INPUT", "TEXTAREA"].includes((_a3 = ve.target) == null ? void 0 : _a3.tagName) && x.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, ve), !b && (m.activatable.value ? s(!u.value, ve) : (m.selectable.value || e.value != null && !y.value) && c(!f.value, ve)));
  }
  function de(ve) {
    const ie = ve.target;
    ["INPUT", "TEXTAREA"].includes(ie.tagName) || (ve.key === "Enter" || ve.key === " " && !(_ == null ? void 0 : _.filterable)) && (ve.preventDefault(), ve.stopPropagation(), ve.target.dispatchEvent(new MouseEvent("click", ve)));
  }
  return ae(() => {
    const ve = y.value ? "a" : e.tag, ie = a.title || e.title != null, R = a.subtitle || e.subtitle != null, U = !!(!!(e.appendAvatar || e.appendIcon) || a.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return _ == null ? void 0 : _.updateHasPrepend(oe), e.activeColor && Ag("active-color", ["color", "base-color"]), nt(k(ve, K(o.linkProps, { ref: i, id: e.index !== void 0 && _ ? `v-list-item-${_.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": w.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (_ == null ? void 0 : _.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && w.value }, W.value, H.value, Q.value, q.value, N.value, ue.value, G.value, $.value, e.class], style: [{ "--v-list-prepend-gap": he(e.prependGap) }, ee.value, j.value, e.style], tabindex: e.tabindex ?? (x.value ? _ ? -2 : 0 : void 0), "aria-selected": D.value, role: P.value, onClick: J, onKeydown: x.value && !y.value && de }), { default: () => {
      var _a3;
      return [ka(x.value || w.value, "v-list-item"), oe && p("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? k(Ee, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, F.value)];
      } }) : p(be, null, [e.prependAvatar && k(pn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && k(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [ie && k(vb, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? ze(e.title)];
      } }), R && k(fb, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? ze(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, F.value)]), U && p("div", { key: "append", class: "v-list-item__append" }, [a.append ? k(Ee, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, F.value)];
      } }) : p(be, null, [e.appendIcon && k(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && k(pn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Nt, x.value && pe.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: b, isSelected: f, list: _, select: c, root: m, id: V, link: o };
} }), iA = z({ color: String, inset: Boolean, sticky: Boolean, title: String, ...we(), ...Te() }, "VListSubheader"), Co = te()({ name: "VListSubheader", props: iA(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color);
  return ae(() => {
    const o = !!(n.default || e.title);
    return k(e.tag, { class: ne(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: ge([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && p("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), rA = z({ items: Array, returnObject: Boolean }, "VListChildren"), hb = te()({ name: "VListChildren", props: rA(), setup(e, t) {
  let { slots: n } = t;
  return lb(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? k(yn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? k(Co, i, null);
      const u = { subtitle: n.subtitle ? (d) => {
        var _a5;
        return (_a5 = n.subtitle) == null ? void 0 : _a5.call(n, { ...d, item: s });
      } : void 0, prepend: n.prepend ? (d) => {
        var _a5;
        return (_a5 = n.prepend) == null ? void 0 : _a5.call(n, { ...d, item: s });
      } : void 0, append: n.append ? (d) => {
        var _a5;
        return (_a5 = n.append) == null ? void 0 : _a5.call(n, { ...d, item: s });
      } : void 0, title: n.title ? (d) => {
        var _a5;
        return (_a5 = n.title) == null ? void 0 : _a5.call(n, { ...d, item: s });
      } : void 0 }, c = vi.filterProps(i);
      return o ? k(vi, K(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = K(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : k(Vn, K(v, { index: l }), u);
      }, default: () => k(hb, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : k(Vn, K(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), gb = z({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), sA = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Tn(e, t) {
  const n = St(t, e.itemTitle, t), a = St(t, e.itemValue, n), l = St(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Oe(t, ["children"]) : t : void 0 : St(t, e.itemProps);
  let i = St(t, e.itemType, "item");
  sA.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? yb(e, l) : void 0, raw: t };
}
Tn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function yb(e, t) {
  const n = on(e, Tn.neededProps), a = [];
  for (const l of t) a.push(Tn(n, l));
  return a;
}
function gd(e) {
  const t = I(() => yb(e, e.items)), n = I(() => t.value.some((r) => r.value === null)), a = ce(/* @__PURE__ */ new Map()), l = ce([]);
  ut(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if ($a(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, b = e.valueComparator || Bt, m = on(e, Tn.neededProps), g = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        g.push(Tn(m, h));
        continue;
      }
      const S = s.get(h);
      if (v || !S) {
        for (const V of v ? u : c) if (b(h, V.value)) {
          g.push(V);
          continue e;
        }
        g.push(Tn(m, h));
        continue;
      }
      g.push(...S);
    }
    return g;
  }
  function i(r) {
    return e.returnObject ? r.map((s) => {
      let { raw: u } = s;
      return u;
    }) : r.map((s) => {
      let { value: u } = s;
      return u;
    });
  }
  return { items: t, transformIn: o, transformOut: i };
}
const uA = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function cA(e, t) {
  const n = $a(t) ? t : St(t, e.itemTitle), a = $a(t) ? t : St(t, e.itemValue, void 0), l = St(t, e.itemChildren), o = e.itemProps === true ? Oe(t, ["children"]) : St(t, e.itemProps);
  let i = St(t, e.itemType, "item");
  uA.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? bb(e, l) : void 0, raw: t };
}
function bb(e, t) {
  const n = [];
  for (const a of t) n.push(cA(e, a));
  return n;
}
function pb(e) {
  return { items: I(() => bb(e, e.items)) };
}
const Sb = z({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: _e, collapseIcon: _e, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Lt(), "onClick:select": Lt(), "onUpdate:opened": Lt(), ...tA({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Yt(), ...we(), ...mt(), ...kt(), ...Ct(), ...gb(), ...ot(), ...Te(), ...We(), ...wn({ variant: "text" }) }, "VList"), fo = te()({ name: "VList", props: Sb(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = pb(e), { themeClasses: i } = Ue(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Ye(() => e.bgColor), { borderClasses: u } = en(e), { densityClasses: c } = Ht(e), { dimensionStyles: d } = xt(e), { elevationClasses: f } = Pt(e), { roundedClasses: v } = ct(e), { children: b, open: m, parents: g, select: h, getPath: S } = nA(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), V = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = B(() => e.activeColor), w = B(() => e.baseColor), y = B(() => e.color), C = B(() => e.selectable || e.activatable), x = Ce(e, "navigationIndex", -1, (q) => q ?? -1), A = Ot();
  lb({ filterable: e.filterable, trackingIndex: x, navigationStrategy: B(() => e.navigationStrategy), uid: A }), fe(o, () => {
    e.navigationStrategy === "track" && (x.value = -1);
  }), vt({ VListGroup: { activeColor: _, baseColor: w, color: y, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: _, baseColor: w, color: y, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = ce(false), D = Z();
  function M(q) {
    P.value = true;
  }
  function E(q) {
    P.value = false;
  }
  function T(q) {
    var _a3;
    e.navigationStrategy === "track" ? ~x.value || (x.value = H("first")) : !P.value && !(q.relatedTarget && ((_a3 = D.value) == null ? void 0 : _a3.contains(q.relatedTarget))) && $();
  }
  function O() {
    e.navigationStrategy === "track" && (x.value = -1);
  }
  function W(q) {
    switch (q) {
      case "ArrowDown":
        return "next";
      case "ArrowUp":
        return "prev";
      case "Home":
        return "first";
      case "End":
        return "last";
      default:
        return null;
    }
  }
  function H(q) {
    const j = o.value.length;
    if (j === 0) return -1;
    let N;
    q === "first" ? N = 0 : q === "last" ? N = j - 1 : (N = x.value + (q === "next" ? 1 : -1), N < 0 && (N = j - 1), N >= j && (N = 0));
    const G = N;
    let ue = 0;
    for (; ue < j; ) {
      const pe = o.value[N];
      if (pe && pe.type !== "divider" && pe.type !== "subheader") return N;
      if (N += q === "next" || q === "first" ? 1 : -1, N < 0 && (N = j - 1), N >= j && (N = 0), N === G) return -1;
      ue++;
    }
    return -1;
  }
  function Q(q) {
    const j = q.target;
    if (!D.value || j.tagName === "INPUT" && ["Home", "End"].includes(q.key) || j.tagName === "TEXTAREA") return;
    const N = W(q.key);
    if (N !== null) if (q.preventDefault(), e.navigationStrategy === "track") {
      const G = H(N);
      G !== -1 && (x.value = G);
    } else $(N);
  }
  function ee(q) {
    P.value = true;
  }
  function $(q) {
    if (D.value) return ul(D.value, q);
  }
  return ae(() => {
    const q = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), j = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return k(e.tag, { ref: D, class: ne(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, V.value, v.value, e.class]), style: ge([{ "--v-list-indent": he(q), "--v-list-group-prepend": q ? "0px" : void 0, "--v-list-prepend-gap": he(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && x.value >= 0 ? `v-list-item-${A}-${x.value}` : void 0, "aria-multiselectable": j, onFocusin: M, onFocusout: E, onFocus: T, onBlur: O, onKeydown: Q, onMousedown: ee }, { default: () => [k(hb, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: $, children: b, parents: g, getPath: S, navigationIndex: x };
} }), dA = Sa("v-list-img"), fA = z({ start: Boolean, end: Boolean, ...we(), ...Te() }, "VListItemAction"), yd = te()({ name: "VListItemAction", props: fA(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(e.tag, { class: ne(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} }), vA = z({ start: Boolean, end: Boolean, ...we(), ...Te() }, "VListItemMedia"), mA = te()({ name: "VListItemMedia", props: vA(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(e.tag, { class: ne(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} });
function Ks(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function hA(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function dm(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Ks({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Ks({ x: l, y: o }, t);
  }
  return Ks({ x: t.width / 2, y: t.height / 2 }, t);
}
const wb = { static: bA, connected: SA }, gA = z({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in wb }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function yA(e, t) {
  const n = Z({}), a = Z();
  qe && Ft(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    fe(() => e.locationStrategy, r), yt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = wb[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function l(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  function o(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  function i(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  return { contentStyles: n, updateLocation: a };
}
function bA() {
}
function pA(e, t) {
  const n = jc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function SA(e, t, n) {
  (Array.isArray(e.target.value) || vC(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = Wc(() => {
    const h = yu(t.location, e.isRtl.value), S = t.origin === "overlap" ? h : t.origin === "auto" ? Os(h) : yu(t.origin, e.isRtl.value);
    return h.side === S.side && h.align === Ls(S).align ? { preferredAnchor: dv(h), preferredOrigin: dv(S) } : { preferredAnchor: h, preferredOrigin: S };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => I(() => {
    const S = parseFloat(t[h]);
    return isNaN(S) ? 1 / 0 : S;
  })), c = I(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new Og(4), b = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((S) => {
      S !== f && v.clear(), requestAnimationFrame((V) => {
        f = V;
      });
    }), v.isFull) {
      const S = v.values();
      if (Bt(S.at(-1), S.at(-3)) && !Bt(S.at(-1), S.at(-2))) return;
    }
    const h = g();
    h && v.push(h.flipped);
  });
  let m = new _n({ x: 0, y: 0, width: 0, height: 0 });
  fe(e.target, (h, S) => {
    S && !Array.isArray(S) && b.unobserve(S), Array.isArray(h) ? Bt(h, S) || g() : h && b.observe(h);
  }, { immediate: true }), fe(e.contentEl, (h, S) => {
    S && b.unobserve(S), h && b.observe(h);
  }, { immediate: true }), yt(() => {
    b.disconnect();
  });
  function g() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = $g(e.target.value));
    const h = pA(e.contentEl.value, e.isRtl.value), S = yr(e.contentEl.value), V = Number(t.viewportMargin);
    S.length || (S.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = S.reduce((E, T) => {
      const O = Bx(T);
      return E ? new _n({ x: Math.max(E.left, O.left), y: Math.max(E.top, O.top), width: Math.min(E.right, O.right) - Math.max(E.left, O.left), height: Math.min(E.bottom, O.bottom) - Math.max(E.top, O.top) }) : O;
    }, void 0);
    t.stickToTarget ? (_.x += Math.min(V, m.x), _.y += Math.min(V, m.y), _.width = Math.max(_.width - V * 2, m.x + m.width - V), _.height = Math.max(_.height - V * 2, m.y + m.height - V)) : (_.x += V, _.y += V, _.width -= V * 2, _.height -= V * 2);
    let w = { anchor: l.value, origin: o.value };
    function y(E) {
      const T = new _n(h), O = dm(E.anchor, m), W = dm(E.origin, T);
      let { x: H, y: Q } = hA(O, W);
      switch (E.anchor.side) {
        case "top":
          Q -= c.value[0];
          break;
        case "bottom":
          Q += c.value[0];
          break;
        case "left":
          H -= c.value[0];
          break;
        case "right":
          H += c.value[0];
          break;
      }
      switch (E.anchor.align) {
        case "top":
          Q -= c.value[1];
          break;
        case "bottom":
          Q += c.value[1];
          break;
        case "left":
          H -= c.value[1];
          break;
        case "right":
          H += c.value[1];
          break;
      }
      return T.x += H, T.y += Q, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), { overflows: vv(T, _), x: H, y: Q };
    }
    let C = 0, x = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let D = -1;
    for (; !(D++ > 10); ) {
      const { x: E, y: T, overflows: O } = y(w);
      C += E, x += T, h.x += E, h.y += T;
      {
        const W = fv(w.anchor), H = O.x.before || O.x.after, Q = O.y.before || O.y.after;
        let ee = false;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && H && !P.x || $ === "y" && Q && !P.y) {
            const q = { anchor: { ...w.anchor }, origin: { ...w.origin } }, j = $ === "x" ? W === "y" ? Ls : Os : W === "y" ? Os : Ls;
            q.anchor = j(q.anchor), q.origin = j(q.origin);
            const { overflows: N } = y(q);
            (N[$].before <= O[$].before && N[$].after <= O[$].after || N[$].before + N[$].after < (O[$].before + O[$].after) / 2) && (w = q, ee = P[$] = true);
          }
        }), ee) continue;
      }
      O.x.before && (C += O.x.before, h.x += O.x.before), O.x.after && (C -= O.x.after, h.x -= O.x.after), O.y.before && (x += O.y.before, h.y += O.y.before), O.y.after && (x -= O.y.after, h.y -= O.y.after);
      {
        const W = vv(h, _);
        A.x = _.width - W.x.before - W.x.after, A.y = _.height - W.y.before - W.y.after, C += W.x.before, h.x += W.x.before, x += W.y.before, h.y += W.y.before;
      }
      break;
    }
    const M = fv(w.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`, transformOrigin: `${w.origin.side} ${w.origin.align}`, top: he(qs(x)), left: e.isRtl.value ? void 0 : he(qs(C)), right: e.isRtl.value ? he(qs(-C)) : void 0, minWidth: he(M === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: he(fm(Ke(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: he(fm(Ke(A.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: A, contentBox: h, flipped: P };
  }
  return fe(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => g()), Ae(() => {
    const h = g();
    if (!h) return;
    const { available: S, contentBox: V } = h;
    V.height > S.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), { updateLocation: g };
}
function qs(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function fm(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Lu = true;
const xr = [];
function wA(e) {
  !Lu || xr.length ? (xr.push(e), Fu()) : (Lu = false, e(), Fu());
}
let vm = -1;
function Fu() {
  cancelAnimationFrame(vm), vm = requestAnimationFrame(() => {
    const e = xr.shift();
    e && e(), xr.length ? Fu() : Lu = true;
  });
}
const kb = { none: null, close: CA, block: _A, reposition: IA }, kA = z({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in kb } }, "VOverlay-scroll-strategies");
function xA(e, t) {
  if (!qe) return;
  let n;
  ut(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Ql(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = kb[e.scrollStrategy]) == null ? void 0 : _a3.call(kb, t, e, n);
    }));
  }), yt(() => {
    n == null ? void 0 : n.stop();
  });
}
function CA(e) {
  function t(n) {
    e.isActive.value = false;
  }
  xb(bd(e.target.value, e.contentEl.value), t);
}
function _A(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = bd(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...yr(a, t.contained ? n : void 0), ...yr(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Kc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", he(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", he(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", he(o)), r.classList.add("v-overlay-scroll-blocked");
  }), yt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function IA(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    wA(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      xb(bd(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), yt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function bd(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function xb(e, t) {
  const n = [document, ...yr(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), yt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Nu = Symbol.for("vuetify:v-menu"), pd = z({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Sd(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Px(u, () => {
        t == null ? void 0 : t(i), c(i);
      });
    });
  }
  function l() {
    return a(true);
  }
  function o(i) {
    return a(false, i);
  }
  return { clearDelay: n, runOpenDelay: l, runCloseDelay: o };
}
const VA = z({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...pd() }, "VOverlay-activator");
function PA(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = wt("useActivator"), i = Z();
  let r = false, s = false, u = true;
  const c = I(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = I(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = Sd(e, (x) => {
    x === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== x && (u = true), n.value = x);
  }), b = Z(), m = { onClick: (x) => {
    x.stopPropagation(), i.value = x.currentTarget || x.target, n.value || (b.value = [x.clientX, x.clientY]), n.value = !n.value;
  }, onMouseenter: (x) => {
    r = true, i.value = x.currentTarget || x.target, f();
  }, onMouseleave: (x) => {
    r = false, v();
  }, onFocus: (x) => {
    lo(x.target, ":focus-visible") !== false && (s = true, x.stopPropagation(), i.value = x.currentTarget || x.target, f());
  }, onBlur: (x) => {
    s = false, x.stopPropagation(), v({ minDelay: 1 });
  } }, g = I(() => {
    const x = {};
    return d.value && (x.onClick = m.onClick), e.openOnHover && (x.onMouseenter = m.onMouseenter, x.onMouseleave = m.onMouseleave), c.value && (x.onFocus = m.onFocus, x.onBlur = m.onBlur), x;
  }), h = I(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      r = true, f();
    }, x.onMouseleave = () => {
      r = false, v();
    }), c.value && (x.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (s = true, f());
    }, x.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const A = Me(Nu, null);
      x.onClick = () => {
        n.value = false, A == null ? void 0 : A.closeParents();
      };
    }
    return x;
  }), S = I(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, x.onMouseleave = () => {
      r = false, v();
    }), x;
  });
  fe(a, (x) => {
    var _a3;
    x && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), fe(n, (x) => {
    x || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const V = ti();
  ut(() => {
    V.value && Ae(() => {
      i.value = V.el;
    });
  });
  const _ = ti(), w = I(() => e.target === "cursor" && b.value ? b.value : _.value ? _.el : Cb(e.target, o) || i.value), y = I(() => Array.isArray(w.value) ? void 0 : w.value);
  let C;
  return fe(() => !!e.activator, (x) => {
    x && qe ? (C = Ql(), C.run(() => {
      AA(e, o, { activatorEl: i, activatorEvents: g });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), yt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: V, target: w, targetEl: y, targetRef: _, activatorEvents: g, contentEvents: h, scrimEvents: S };
}
function AA(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  fe(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Ae(() => o());
  }, { immediate: true }), fe(() => e.activatorProps, () => {
    o();
  }), yt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Rx(s, K(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Ox(s, K(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Cb(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function Cb(e, t) {
  var _a3, _b2;
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = (_b2 = (_a3 = t == null ? void 0 : t.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.parentNode;
    for (; a == null ? void 0 : a.hasAttribute("data-no-activator"); ) a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const _b = z({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), nr = /* @__PURE__ */ new Map();
let mm = 0;
function hm(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(nr.values()).filter((u) => {
    var _a3;
    let { isActive: c, contentEl: d } = u;
    return c.value && ((_a3 = d.value) == null ? void 0 : _a3.contains(t));
  }).map((u) => u.contentEl.value);
  let a, l = t.parentElement;
  for (; l; ) {
    if (n.includes(l)) {
      a = l;
      break;
    }
    l = l.parentElement;
  }
  if (!a) return;
  const o = Ra(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function Ib(e, t) {
  let { isActive: n, localTop: a, activatorEl: l, contentEl: o } = t;
  const i = Symbol("trap");
  let r = false, s = -1;
  async function u() {
    r = true, s = window.setTimeout(() => {
      r = false;
    }, 100);
  }
  async function c(v) {
    var _a3;
    const b = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Ae(), n.value && !r && b !== m && o.value && tt(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Ra(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const b = Ra(document.documentElement);
      if (v.shiftKey && v.target === b.at(0) || !v.shiftKey && v.target === b.at(-1)) {
        const m = Ra(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  qe && (fe(() => e.retainFocus, (v) => {
    v ? nr.set(i, { isActive: n, contentEl: o }) : nr.delete(i);
  }, { immediate: true }), fe(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), mm++ < 1 && document.addEventListener("keydown", hm)), yt(() => {
    nr.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --mm < 1 && document.removeEventListener("keydown", hm);
  });
}
function Vb() {
  if (!qe) return ce(false);
  const { ssr: e } = cn();
  if (e) {
    const t = ce(false);
    return bt(() => {
      t.value = true;
    }), t;
  } else return ce(true);
}
const wd = z({ eager: Boolean }, "lazy");
function kd(e, t) {
  const n = ce(false), a = B(() => n.value || e.eager || t.value);
  fe(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function El() {
  const t = wt("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const gm = Symbol.for("vuetify:stack"), Eo = Tt([]);
function TA(e, t, n) {
  const a = wt("useStack"), l = !n, o = Me(gm, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  Ze(gm, i);
  const r = ce(Number(tt(t)));
  Ft(e, () => {
    var _a3;
    const c = (_a3 = Eo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(tt(t)), l && Eo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), yt(() => {
      if (l) {
        const d = Pe(Eo).findIndex((f) => f[0] === a.uid);
        Eo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = ce(true);
  return l && ut(() => {
    var _a3;
    const c = ((_a3 = Eo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: vl(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function EA(e) {
  return { teleportTarget: I(() => {
    const n = e();
    if (n === true || !qe) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function DA() {
  return true;
}
function Pb(e, t, n) {
  if (!e || Ab(e, n) === false) return false;
  const a = Xg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function Ab(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || DA)(e);
}
function MA(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Pb(e, t, n) && setTimeout(() => {
    Ab(e, n) && a && a(e);
  }, 0);
}
function ym(e, t) {
  const n = Xg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const $u = { mounted(e, t) {
  const n = (l) => MA(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Pb(l, e, t);
  };
  ym(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (ym(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function BA(e) {
  const { modelValue: t, color: n, ...a } = e;
  return k(Na, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && p("div", K({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const Li = z({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...VA(), ...we(), ...kt(), ...wd(), ...gA(), ...kA(), ..._b(), ...We(), ...wa() }, "VOverlay"), Zn = te()({ name: "VOverlay", directives: { vClickOutside: $u }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Oe(Li(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = wt("VOverlay"), i = Z(), r = Z(), s = Z(), u = Ce(e, "modelValue"), c = I({ get: () => u.value, set: (F) => {
    F && e.disabled || (u.value = F);
  } }), { themeClasses: d } = Ue(e), { rtlClasses: f, isRtl: v } = It(), { hasContent: b, onAfterLeave: m } = kd(e, c), g = Ye(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: S, stackStyles: V } = TA(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: _, activatorRef: w, target: y, targetEl: C, targetRef: x, activatorEvents: A, contentEvents: P, scrimEvents: D } = PA(e, { isActive: c, isTop: S, contentEl: s }), { teleportTarget: M } = EA(() => {
    var _a3, _b2, _c2;
    const F = e.attach || e.contained;
    if (F) return F;
    const J = ((_a3 = _ == null ? void 0 : _.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return J instanceof ShadowRoot ? J : false;
  }), { dimensionStyles: E } = xt(e), T = Vb(), { scopeId: O } = El();
  fe(() => e.disabled, (F) => {
    F && (c.value = false);
  });
  const { contentStyles: W, updateLocation: H } = yA(e, { isRtl: v, contentEl: s, target: y, isActive: c });
  xA(e, { root: i, contentEl: s, targetEl: C, target: y, isActive: c, updateLocation: H });
  function Q(F) {
    l("click:outside", F), e.persistent ? G() : c.value = false;
  }
  function ee(F) {
    return c.value && S.value && (!e.scrim || F.target === r.value || F instanceof MouseEvent && F.shadowTarget === r.value);
  }
  Ib(e, { isActive: c, localTop: S, contentEl: s, activatorEl: _ }), qe && fe(c, (F) => {
    F ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
  }, { immediate: true }), Ut(() => {
    qe && window.removeEventListener("keydown", $);
  });
  function $(F) {
    var _a3, _b2, _c2;
    F.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", F), e.persistent ? G() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = _.value) == null ? void 0 : _c2.focus())));
  }
  function q(F) {
    F.key === "Escape" && !h.value || l("keydown", F);
  }
  const j = Ly();
  Ft(() => e.closeOnBack, () => {
    mP(j, (F) => {
      h.value && c.value ? (F(false), e.persistent ? G() : c.value = false) : F();
    });
  });
  const N = Z();
  fe(() => c.value && (e.absolute || e.contained) && M.value == null, (F) => {
    if (F) {
      const J = Wr(i.value);
      J && J !== document.scrollingElement && (N.value = J.scrollTop);
    }
  });
  function G() {
    e.noClickAnimation || s.value && ua(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: ni });
  }
  function ue() {
    l("afterEnter");
  }
  function pe() {
    m(), l("afterLeave");
  }
  return ae(() => {
    var _a3;
    return p(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: x, props: K({ ref: w }, A.value, e.activatorProps) }), T.value && b.value && k(Rw, { disabled: !M.value, to: M.value }, { default: () => [p("div", K({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [V.value, { "--v-overlay-opacity": e.opacity, top: he(N.value) }, e.style], ref: i, onKeydown: q }, O, a), [k(BA, K({ color: g, modelValue: c.value && !!e.scrim, ref: r }, D.value), null), k(Jt, { appear: true, persisted: true, transition: e.transition, target: y.value, onAfterEnter: ue, onAfterLeave: pe }, { default: () => {
      var _a4;
      return [nt(p("div", K({ ref: s, class: ["v-overlay__content", e.contentClass], style: [E.value, W.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Hn, c.value], [$u, { handler: Q, closeConditional: ee, include: () => [_.value] }]])];
    } })])] })]);
  }), { activatorEl: _, scrimEl: r, target: y, animateClick: G, contentEl: s, rootEl: i, globalTop: h, localTop: S, updateLocation: H };
} }), Tb = z({ id: String, submenu: Boolean, ...Oe(Li({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: qr } }), ["absolute"]) }, "VMenu"), vo = te()({ name: "VMenu", props: Tb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = El(), { isRtl: o } = It(), i = Ot(), r = B(() => e.id || `v-menu-${i}`), s = Z(), u = Me(Nu, null), c = ce(/* @__PURE__ */ new Set());
  Ze(Nu, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !Ax(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Ut(() => u == null ? void 0 : u.unregister()), Ic(() => a.value = false), fe(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e2;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !Fg(Ra((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e2 = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e2.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const g = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    g && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), ul(g, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), ul(g, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), ul(g, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const b = I(() => K({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return ae(() => {
    const m = Zn.filterProps(e);
    return k(Zn, K({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (g) => a.value = g, absolute: true, activatorProps: b.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var g = arguments.length, h = new Array(g), S = 0; S < g; S++) h[S] = arguments[S];
      return k(Ee, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), At({ id: r, \u03A8openChildren: c }, s);
} }), xd = z({ color: String, ...Yt(), ...we(), ...kt(), ...Ct(), ...na(), ...So(), ...ot(), ...Te(), ...We() }, "VSheet"), ja = te()({ name: "VSheet", props: xd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color), { borderClasses: i } = en(e), { dimensionStyles: r } = xt(e), { elevationClasses: s } = Pt(e), { locationStyles: u } = Ya(e), { positionClasses: c } = wo(e), { roundedClasses: d } = ct(e);
  return ae(() => k(e.tag, { class: ne(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: ge([o.value, r.value, u.value, e.style]) }, n)), {};
} }), RA = z({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...we(), ...wa({ transition: { component: id } }) }, "VCounter"), ts = te()({ name: "VCounter", functional: true, props: RA(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ae(() => k(Jt, { transition: e.transition }, { default: () => [nt(p("div", { class: ne(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ge(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Hn, e.active]])] })), {};
} }), OA = z({ floating: Boolean, ...we() }, "VFieldLabel"), Ro = te()({ name: "VFieldLabel", props: OA(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(ko, { class: ne(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ge(e.style) }, n)), {};
} }), LA = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Fi = z({ appendInnerIcon: _e, bgColor: String, clearable: Boolean, clearIcon: { type: _e, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: _e, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => LA.includes(e) }, "onClick:clear": Lt(), "onClick:appendInner": Lt(), "onClick:prependInner": Lt(), ...we(), ...Jr(), ...ot(), ...We() }, "VField"), Ga = te()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...Oi(), ...Fi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Ue(e), { loaderClasses: i } = Ei(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = Ca(e), { InputIcon: d } = Ri(e), { roundedClasses: f } = ct(e), { rtlClasses: v } = It(), b = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), g = B(() => !e.singleLine && m.value), h = Ot(), S = I(() => e.id || `input-${h}`), V = B(() => e.details ? `${S.value}-messages` : void 0), _ = Z(), w = Z(), y = Z(), C = I(() => ["plain", "underlined"].includes(e.variant)), x = I(() => e.error || e.disabled ? void 0 : b.value && s.value ? e.color : e.baseColor), A = I(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? x.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: D } = Ye(() => e.bgColor), { textColorClasses: M, textColorStyles: E } = Rt(x);
  fe(b, (Q) => {
    if (g.value && !qn()) {
      const ee = _.value.$el, $ = w.value.$el;
      requestAnimationFrame(() => {
        const q = jc(ee), j = $.getBoundingClientRect(), N = j.x - q.x, G = j.y - q.y - (q.height / 2 - j.height / 2), ue = j.width / 0.75, pe = Math.abs(ue - q.width) > 1 ? { maxWidth: he(ue) } : void 0, F = getComputedStyle(ee), J = getComputedStyle($), de = parseFloat(F.transitionDuration) * 1e3 || 150, ve = parseFloat(J.getPropertyValue("--v-field-label-scale")), ie = J.getPropertyValue("color");
        ee.style.visibility = "visible", $.style.visibility = "hidden", ua(ee, { transform: `translate(${N}px, ${G}px) scale(${ve})`, color: ie, ...pe }, { duration: de, easing: ni, direction: Q ? "normal" : "reverse" }).finished.then(() => {
          ee.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = I(() => ({ isActive: b, isFocused: s, controlRef: y, iconColor: A, blur: c, focus: u })), O = B(() => {
    const Q = !b.value;
    return { "aria-hidden": Q, for: Q ? void 0 : S.value };
  }), W = B(() => {
    const Q = g.value && b.value;
    return { "aria-hidden": Q, for: Q ? void 0 : S.value };
  });
  function H(Q) {
    Q.target !== document.activeElement && Q.preventDefault();
  }
  return ae(() => {
    var _a3;
    const Q = e.variant === "outlined", ee = !!(l["prepend-inner"] || e.prependInnerIcon), $ = !!(e.clearable || l.clear) && !e.disabled, q = !!(l["append-inner"] || e.appendInnerIcon || $), j = () => l.label ? l.label({ ...T.value, label: e.label, props: { for: S.value } }) : e.label;
    return p("div", K({ class: ["v-field", { "v-field--active": b.value, "v-field--appended": q, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": ee, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !j(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [D.value, e.style], onClick: H }, n), [p("div", { class: "v-field__overlay" }, null), k(Di, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), ee && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && k(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && g.value && k(Ro, K({ key: "floating-label", ref: w, class: [M.value], floating: true }, O.value, { style: E.value }), { default: () => [j()] }), m.value && k(Ro, K({ key: "label", ref: _, id: e.labelId }, W.value), { default: () => [j()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: S.value, class: "v-field__input", "aria-describedby": V.value }, focus: u, blur: c })) ?? p("div", { id: S.value, class: "v-field__input", "aria-describedby": V.value }, null)]), $ && k(rd, { key: "clear" }, { default: () => [nt(p("div", { class: "v-field__clearable", onMousedown: (N) => {
      N.preventDefault(), N.stopPropagation();
    } }, [k(Ee, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : k(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Hn, e.dirty]])] }), q && p("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && k(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), p("div", { class: ne(["v-field__outline", M.value]), style: ge(E.value) }, [Q && p(be, null, [p("div", { class: "v-field__outline__start" }, null), g.value && p("div", { class: "v-field__outline__notch" }, [k(Ro, K({ ref: w, floating: true }, O.value), { default: () => [j()] })]), p("div", { class: "v-field__outline__end" }, null)]), C.value && g.value && k(Ro, K({ ref: w, floating: true }, O.value), { default: () => [j()] })])]);
  }), { controlRef: y, fieldIconColor: A };
} }), Eb = z({ autocomplete: String }, "autocomplete");
function Cd(e) {
  const t = Ot(), n = ce(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Db(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const FA = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ni = z({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Eb(), ...Oe(_a(), ["direction"]), ...Fi() }, "VTextField"), Jn = te()({ name: "VTextField", directives: { vIntersect: Fn }, inheritAttrs: false, props: Ni(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = Ca(e), { onIntersect: u } = Db(e), c = I(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = I(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = I(() => ["plain", "underlined"].includes(e.variant)), v = Z(), b = Z(), m = Z(), g = Cd(e), h = I(() => FA.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function S() {
    g.isSuppressing.value && g.update(), i.value || r(), Ae(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function V(C) {
    a("mousedown:control", C), C.target !== m.value && (S(), C.preventDefault());
  }
  function _(C) {
    a("click:control", C);
  }
  function w(C, x) {
    C.stopPropagation(), S(), Ae(() => {
      x(), Vi(e["onClick:clear"], C);
    });
  }
  function y(C) {
    var _a3;
    const x = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = x.value;
      return;
    }
    const A = x.value, P = x.selectionStart, D = x.selectionEnd;
    o.value = A, Ae(() => {
      let M = 0;
      A.trimStart().length === x.value.length && (M = A.length - x.value.length), P != null && (x.selectionStart = P - M), D != null && (x.selectionEnd = D - M);
    });
  }
  return ae(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), x = !!(C || l.details), [A, P] = ea(n), { modelValue: D, ...M } = Gt.filterProps(e), E = Ga.filterProps(e);
    return k(Gt, K({ ref: v, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, M, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: O, isDisabled: W, isDirty: H, isReadonly: Q, isValid: ee, hasDetails: $, reset: q } = T;
      return k(Ga, K({ ref: b, onMousedown: V, onClick: _, "onClick:clear": (j) => w(j, q), role: e.role }, Oe(E, ["onClick:clear"]), { id: O.value, labelId: `${O.value}-label`, active: h.value || H.value, dirty: H.value || e.dirty, disabled: W.value, focused: i.value, details: $.value, error: ee.value === false }), { ...l, default: (j) => {
        let { props: { class: N, ...G }, controlRef: ue } = j;
        const pe = p("input", K({ ref: (F) => m.value = ue.value = F, value: o.value, onInput: y, autofocus: e.autofocus, readonly: Q.value, disabled: W.value, name: g.fieldName.value, autocomplete: g.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${O.value}-label` }, G, P), null);
        return p(be, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), nt(l.default ? p("div", { class: ne(N), "data-no-activator": "" }, [l.default({ id: O }), pe]) : ga(pe, { class: N }), [[Fn, u, null, { once: true }]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (T) => {
      var _a3;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && p(be, null, [p("span", null, null), k(ts, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), At({}, v, b, m);
} }), NA = z({ renderless: Boolean, ...we() }, "VVirtualScrollItem"), Mb = te()({ name: "VVirtualScrollItem", inheritAttrs: false, props: NA(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = In(void 0, "border");
  fe(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ae(() => {
    var _a3, _b2;
    return e.renderless ? p(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : p("div", K({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), $A = -1, HA = 1, Xs = 100, Bb = z({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Rb(e, t) {
  const n = cn(), a = ce(0);
  ut(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ce(0), o = ce(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = ce(0), r = ce(0), s = Z(), u = Z();
  let c = 0;
  const { resizeRef: d, contentRect: f } = In();
  ut(() => {
    d.value = s.value;
  });
  const v = I(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), b = I(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), g = Array.from({ length: t.value.length });
  const h = ce(0);
  let S = -1;
  function V($) {
    return m[$] || a.value;
  }
  const _ = Bg(() => {
    const $ = performance.now();
    g[0] = 0;
    const q = t.value.length;
    for (let j = 1; j <= q; j++) g[j] = (g[j - 1] || 0) + V(j - 1);
    h.value = Math.max(h.value, performance.now() - $);
  }, h), w = fe(b, ($) => {
    $ && (w(), c = u.value.offsetTop, _.immediate(), W(), ~S && Ae(() => {
      qe && window.requestAnimationFrame(() => {
        Q(S), S = -1;
      });
    }));
  });
  yt(() => {
    _.clear();
  });
  function y($, q) {
    const j = m[$], N = a.value;
    a.value = N ? Math.min(a.value, q) : q, (j !== q || N !== a.value) && (m[$] = q, _());
  }
  function C($) {
    $ = Ke($, 0, t.value.length);
    const q = Math.floor($), j = $ % 1, N = q + 1, G = g[q] || 0, ue = g[N] || G;
    return G + (ue - G) * j;
  }
  function x($) {
    return zA(g, $);
  }
  let A = 0, P = 0, D = 0;
  fe(v, ($, q) => {
    W(), $ < q && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let M = -1;
  function E() {
    if (!s.value || !u.value) return;
    const $ = s.value.scrollTop, q = performance.now();
    q - D > 500 ? (P = Math.sign($ - A), c = u.value.offsetTop) : P = $ - A, A = $, D = q, window.clearTimeout(M), M = window.setTimeout(T, 500), W();
  }
  function T() {
    !s.value || !u.value || (P = 0, D = 0, window.clearTimeout(M), W());
  }
  let O = -1;
  function W() {
    cancelAnimationFrame(O), O = requestAnimationFrame(H);
  }
  function H() {
    if (!s.value || !v.value || !a.value) return;
    const $ = A - c, q = Math.sign(P), j = Math.max(0, $ - Xs), N = Ke(x(j), 0, t.value.length), G = $ + v.value + Xs, ue = Ke(x(G) + 1, N + 1, t.value.length);
    if ((q !== $A || N < l.value) && (q !== HA || ue > o.value)) {
      const pe = C(l.value) - C(N), F = C(ue) - C(o.value);
      Math.max(pe, F) > Xs ? (l.value = N, o.value = ue) : (N <= 0 && (l.value = N), ue >= t.value.length && (o.value = ue));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Q($) {
    const q = C($);
    !s.value || $ && !q ? S = $ : s.value.scrollTop = q;
  }
  const ee = I(() => t.value.slice(l.value, o.value).map(($, q) => {
    const j = q + l.value;
    return { raw: $, index: j, key: St($, e.itemKey, j) };
  }));
  return fe(t, () => {
    m = Array.from({ length: t.value.length }), g = Array.from({ length: t.value.length }), _.immediate(), W();
  }, { deep: 1 }), { calculateVisibleItems: W, containerRef: s, markerRef: u, computedItems: ee, paddingTop: i, paddingBottom: r, scrollToIndex: Q, handleScroll: E, handleScrollend: T, handleItemResize: y };
}
function zA(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const WA = z({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Bb(), ...we(), ...kt() }, "VVirtualScroll"), ns = te()({ name: "VVirtualScroll", props: WA(), setup(e, t) {
  let { slots: n } = t;
  const a = wt("VVirtualScroll"), { dimensionStyles: l } = xt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: b } = Rb(e, B(() => e.items));
  return Ft(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    bt(() => {
      i.value = Wr(a.vnode.el, true), m(true);
    }), yt(m);
  }), ae(() => {
    const m = b.value.map((g) => k(Mb, { key: g.key, renderless: e.renderless, "onUpdate:height": (h) => c(g.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: g.raw, index: g.index, ...h });
    } }));
    return e.renderless ? p(be, null, [p("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: he(f.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: he(v.value) } }, null)]) : p("div", { ref: i, class: ne(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: ge([l.value, e.style]) }, [p("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: he(f.value), paddingBottom: he(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function _d(e, t) {
  const n = ce(false);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = true, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = false;
      });
    });
  }
  async function o() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = fe(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function i(r) {
    var _a3, _b2;
    if (r.key === "Tab" && ((_a3 = t.value) == null ? void 0 : _a3.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (_b2 = e.value) == null ? void 0 : _b2.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({ top: r.key === "Home" ? 0 : s.scrollHeight, behavior: "smooth" }), await o();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const c = s.getBoundingClientRect().top;
      for (const d of u) if (d.getBoundingClientRect().top >= c) {
        d.focus();
        break;
      }
    } else {
      const c = s.getBoundingClientRect().bottom;
      for (const d of [...u].reverse()) if (d.getBoundingClientRect().bottom <= c) {
        d.focus();
        break;
      }
    }
  }
  return { onScrollPassive: l, onKeydown: i };
}
function Id(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? Ra(s) : [];
  }
  function o(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const v = t[d], b = c[d];
      (v.type === "list" || (u === "forward" ? b.at(-1) === r.target : b.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && tt(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const b = u === "forward";
        c[f].at(b ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const v = u === "forward" ? 1 : -1;
    for (let b = s + v; b >= 0 && b < t.length; b += v) {
      const m = t[b];
      if (r[b].length > 0 || m.type === "list" && tt(m.displayItemsCount) > 0) return b;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const jA = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function Zs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Dl = z({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function GA(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? jA, o = (n == null ? void 0 : n.filterKeys) ? lt(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = lt(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let b = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const h = o || Object.keys(c);
        b = h.length === i;
        for (const S of h) {
          const V = St(c, S), _ = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[S];
          if (v = _ ? _(V, t, u) : l(V, t, u), v !== -1 && v !== false) _ ? d[S] = Zs(v, t) : f[S] = Zs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = Zs(v, t));
      const m = Object.keys(f).length, g = Object.keys(d).length;
      if (!m && !g || (n == null ? void 0 : n.filterMode) === "union" && g !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (g !== i || !m && i > 0 && !b)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function Ml(e, t, n, a) {
  const l = ce([]), o = ce(/* @__PURE__ */ new Map()), i = I(() => (a == null ? void 0 : a.transform) ? Ne(t).map((s) => [s, a.transform(s)]) : Ne(t));
  ut(() => {
    const s = typeof n == "function" ? n() : Ne(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = GA(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Ne(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ne(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((b) => {
      let { index: m, matches: g } = b;
      const h = d[m];
      f.push(h), v.set(h.value, g);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function Vd(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [p("span", { class: ne(`${e}__unmask`) }, [t.slice(o, a[0])]), p("span", { class: ne(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(p("span", { class: ne(`${e}__unmask`) }, [t.slice(a[1])])), p(be, null, [i]);
  });
}
const UA = z({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Pd(e, t) {
  const n = Ot(), a = I(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => tt(t)), ariaControls: B(() => a.value) };
}
const Ad = z({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: _e, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...UA(), ...gb({ itemChildren: false }) }, "Select"), YA = z({ search: String, ...Dl({ filterKeys: ["title"] }), ...Ad(), ...Oe(Ni({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...wa({ transition: { component: qr } }) }, "VSelect"), Td = te()({ name: "VSelect", props: YA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Xe(), l = Z(), o = Z(), i = Z(), r = Z(), s = Z(), { items: u, transformIn: c, transformOut: d } = gd(e), f = Ce(e, "search", ""), { filteredItems: v, getMatches: b } = Ml(e, u, () => f.value), m = Ce(e, "modelValue", [], (ie) => c(ie === null ? [null] : lt(ie)), (ie) => {
    const R = d(ie);
    return e.multiple ? R : R[0] ?? null;
  }), g = I(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = xo(e), S = Cd(e), V = I(() => m.value.map((ie) => ie.value)), _ = ce(false), w = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: y } = Ri(e);
  let C = "", x = 0, A;
  const P = I(() => {
    const ie = f.value ? v.value : u.value;
    return e.hideSelected ? ie.filter((R) => !m.value.some((L) => (e.valueComparator || Bt)(L, R))) : ie;
  }), D = I(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), M = Ce(e, "menu"), E = I({ get: () => M.value, set: (ie) => {
    var _a3;
    M.value && !ie && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ie && D.value || (M.value = ie);
  } }), { menuId: T, ariaExpanded: O, ariaControls: W } = Pd(e, E), H = I(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Q = Z(), ee = _d(Q, l), { onTabKeydown: $ } = Id({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Q, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    E.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function q(ie) {
    e.openOnClear && (E.value = true);
  }
  function j() {
    D.value || (E.value = !E.value);
  }
  function N(ie) {
    var _a3;
    ie.key === "Tab" && $(ie), ((_a3 = Q.value) == null ? void 0 : _a3.$el.contains(ie.target)) && oo(ie) && G(ie);
  }
  function G(ie) {
    var _a3, _b2, _c2;
    if (!ie.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ie.key) && ie.preventDefault(), ["Enter", "ArrowDown", " "].includes(ie.key) && (E.value = true), ["Escape", "Tab"].includes(ie.key) && (E.value = false), e.clearable && ie.key === "Backspace") {
      ie.preventDefault(), m.value = [], q();
      return;
    }
    ie.key === "Home" ? (_a3 = Q.value) == null ? void 0 : _a3.focus("first") : ie.key === "End" && ((_b2 = Q.value) == null ? void 0 : _b2.focus("last"));
    const R = 1e3;
    if (!oo(ie)) return;
    const L = performance.now();
    L - A > R && (C = "", x = 0), C += ie.key.toLowerCase(), A = L;
    const U = P.value;
    function le() {
      let Y = oe();
      return Y || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), x++, Y = oe(), Y) || (x = 0, Y = oe(), Y) ? Y : (C = ie.key.toLowerCase(), oe());
    }
    function oe() {
      for (let Y = x; Y < U.length; Y++) {
        const se = U[Y];
        if (se.title.toLowerCase().startsWith(C)) return [se, Y];
      }
    }
    const re = le();
    if (!re) return;
    const [Se, me] = re;
    x = me, (_c2 = Q.value) == null ? void 0 : _c2.focus(me), e.multiple || (m.value = [Se]);
  }
  function ue(ie) {
    let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ie.props.disabled) if (e.multiple) {
      const L = m.value.findIndex((le) => (e.valueComparator || Bt)(le.value, ie.value)), U = R ?? !~L;
      if (~L) {
        const le = U ? [...m.value, ie] : [...m.value];
        le.splice(L, 1), m.value = le;
      } else U && (m.value = [...m.value, ie]);
    } else {
      const L = R !== false;
      m.value = L ? [ie] : [], Ae(() => {
        E.value = false;
      });
    }
  }
  function pe(ie) {
    var _a3;
    const R = ie.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(R)) || (E.value = false);
  }
  function F() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function J() {
    var _a3;
    f.value = "", _.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function de(ie) {
    _.value = true;
  }
  function ve(ie) {
    if (ie == null) m.value = [];
    else if (lo(l.value, ":autofill") || lo(l.value, ":-webkit-autofill")) {
      const R = u.value.find((L) => L.title === ie);
      R && ue(R);
    } else l.value && (l.value.value = "");
  }
  return fe(E, () => {
    if (!e.hideSelected && E.value && m.value.length) {
      const ie = P.value.findIndex((R) => m.value.some((L) => (e.valueComparator || Bt)(L.value, R.value)));
      qe && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ie >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ie));
      });
    }
  }), fe(u, (ie, R) => {
    E.value || _.value && e.hideNoData && !R.length && ie.length && (E.value = true);
  }), ae(() => {
    const ie = !!(e.chips || n.chip), R = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = m.value.length > 0, U = Jn.filterProps(e), le = L || !_.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: v.value };
    return k(Jn, K({ ref: l }, U, { modelValue: m.value.map((re) => re.props.title).join(", "), name: void 0, "onUpdate:modelValue": ve, focused: _.value, "onUpdate:focused": (re) => _.value = re, validationValue: m.externalValue, counterValue: g.value, dirty: L, class: ["v-select", { "v-select--active-menu": E.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: le, "onClick:clear": q, "onMousedown:control": j, onBlur: pe, onKeydown: G, "aria-expanded": O.value, "aria-controls": W.value }), { ...n, default: (re) => {
      let { id: Se } = re;
      return p(be, null, [p("select", { hidden: true, multiple: e.multiple, name: S.fieldName.value }, [u.value.map((me) => p("option", { key: me.value, value: me.value, selected: V.value.includes(me.value) }, null))]), k(vo, K({ id: T.value, ref: o, modelValue: E.value, "onUpdate:modelValue": (me) => E.value = me, activator: "parent", contentClass: "v-select__content", disabled: D.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: F, onAfterLeave: J }, H.value), { default: () => [k(ja, { onFocusin: de, onKeydown: N }, { default: () => [n["menu-header"] && p("header", { ref: i }, [n["menu-header"](oe)]), R && k(fo, K({ key: "select-list", ref: Q, selected: V.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ee, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? k(Vn, { key: "no-data", title: a(e.noDataText) }, null)), k(ns, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (me) => {
          var _a4, _b3, _c3;
          let { item: Y, index: se, itemRef: Ie } = me;
          const X = Ex(Y.props), ye = K(Y.props, { ref: Ie, key: Y.value, onClick: () => ue(Y, null), "aria-posinset": se + 1, "aria-setsize": P.value.length });
          return Y.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Y.raw, index: se })) ?? k(yn, K(Y.props, { key: `divider-${se}` }), null) : Y.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Y.raw, index: se })) ?? k(Co, K(Y.props, { key: `subheader-${se}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Y, index: se, props: ye })) ?? k(Vn, K(ye, { role: "option" }), { prepend: (ke) => {
            let { isSelected: xe } = ke;
            return p(be, null, [e.multiple && !e.hideSelected ? k(Nn, { key: Y.value, modelValue: xe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ve) => Ve.preventDefault() }, null) : void 0, X.prependAvatar && k(pn, { image: X.prependAvatar }, null), X.prependIcon && k(Ge, { icon: X.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Vd("v-select", Y.title, (_a5 = b(Y)) == null ? void 0 : _a5.title) : Y.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), m.value.map((me, Y) => {
        function se(ke) {
          ke.stopPropagation(), ke.preventDefault(), ue(me, false);
        }
        const Ie = K(ba.filterProps(me.props), { "onClick:close": se, onKeydown(ke) {
          ke.key !== "Enter" && ke.key !== " " || (ke.preventDefault(), ke.stopPropagation(), se(ke));
        }, onMousedown(ke) {
          ke.preventDefault(), ke.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), X = ie ? !!n.chip : !!n.selection, ye = X ? zr(ie ? n.chip({ item: me, index: Y, props: Ie }) : n.selection({ item: me, index: Y })) : void 0;
        if (!(X && !ye)) return p("div", { key: me.value, class: "v-select__selection" }, [ie ? n.chip ? k(Ee, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: me.title } } }, { default: () => [ye] }) : k(ba, K({ key: "chip", closable: w.value, size: "small", text: me.title, disabled: me.props.disabled }, Ie), null) : ye ?? p("span", { class: "v-select__selection-text" }, [me.title, e.multiple && Y < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [Et(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var re = arguments.length, Se = new Array(re), me = 0; me < re; me++) Se[me] = arguments[me];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? k(Ge, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && k(y, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), At({ isFocused: _, menu: E, search: f, filteredItems: v, select: ue }, l);
} }), KA = z({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...Dl({ filterKeys: ["title"] }), ...Ad(), ...Oe(Ni({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), qA = te()({ name: "VAutocomplete", props: KA(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Xe(), l = Z(), o = ce(false), i = ce(true), r = ce(false), s = Z(), u = Z(), c = ce(-1), d = ce(null), { items: f, transformIn: v, transformOut: b } = gd(e), { textColorClasses: m, textColorStyles: g } = Rt(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = Ri(e), S = Ce(e, "search", ""), V = Ce(e, "modelValue", [], (Y) => v(Y === null ? [null] : lt(Y)), (Y) => {
    const se = b(Y);
    return e.multiple ? se : se[0] ?? null;
  }), _ = I(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : V.value.length), w = xo(e), { filteredItems: y, getMatches: C } = Ml(e, f, () => d.value ?? (i.value ? "" : S.value)), x = I(() => e.hideSelected && d.value === null ? y.value.filter((Y) => !V.value.some((se) => se.value === Y.value)) : y.value), A = B(() => e.closableChips && !w.isReadonly.value && !w.isDisabled.value), P = I(() => !!(e.chips || n.chip)), D = I(() => P.value || !!n.selection), M = I(() => V.value.map((Y) => Y.props.value)), E = I(() => x.value.find((Y) => Y.type === "item" && !Y.props.disabled)), T = I(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && S.value === ((_a3 = E.value) == null ? void 0 : _a3.title)) && x.value.length > 0 && !i.value && !r.value;
  }), O = I(() => e.hideNoData && !x.value.length || w.isReadonly.value || w.isDisabled.value), W = Ce(e, "menu"), H = I({ get: () => W.value, set: (Y) => {
    var _a3;
    W.value && !Y && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || Y && O.value || (W.value = Y);
  } }), { menuId: Q, ariaExpanded: ee, ariaControls: $ } = Pd(e, H), q = Z(), j = Z(), N = Z(), G = _d(q, l), { onTabKeydown: ue } = Id({ groups: [{ type: "element", contentRef: j }, { type: "list", contentRef: q, displayItemsCount: () => x.value.length }, { type: "element", contentRef: N }], onLeave: () => {
    var _a3;
    H.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function pe(Y) {
    e.openOnClear && (H.value = true), S.value = "";
  }
  function F() {
    O.value || (H.value = true);
  }
  function J(Y) {
    O.value || (o.value && (Y.preventDefault(), Y.stopPropagation()), H.value = !H.value);
  }
  function de(Y) {
    var _a3, _b2;
    Y.key === "Tab" && ue(Y), ((_a3 = q.value) == null ? void 0 : _a3.$el.contains(Y.target)) && (oo(Y) || Y.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function ve(Y) {
    var _a3, _b2, _c2, _d2, _e2;
    if (w.isReadonly.value) return;
    const se = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, Ie = V.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(Y.key) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (H.value = true), ["Escape"].includes(Y.key) && (H.value = false), T.value && ["Enter", "Tab"].includes(Y.key) && E.value && !V.value.some((X) => {
      let { value: ye } = X;
      return ye === E.value.value;
    }) && me(E.value), Y.key === "ArrowDown" && T.value && ((_b2 = q.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(Y.key)) {
      if (!e.multiple && D.value && V.value.length > 0 && !S.value) return me(V.value[0], false);
      if (~c.value) {
        Y.preventDefault();
        const X = c.value;
        me(V.value[c.value], false), c.value = X >= Ie - 1 ? Ie - 2 : X;
      } else Y.key === "Backspace" && !S.value && (c.value = Ie - 1);
      return;
    }
    if (e.multiple) if (Y.key === "ArrowLeft") {
      if (c.value < 0 && se && se > 0) return;
      const X = c.value > -1 ? c.value - 1 : Ie - 1;
      if (V.value[X]) c.value = X;
      else {
        const ye = ((_c2 = S.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(ye, ye);
      }
    } else if (Y.key === "ArrowRight") {
      if (c.value < 0) return;
      const X = c.value + 1;
      V.value[X] ? c.value = X : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && oo(Y) && (c.value = -1);
  }
  function ie(Y) {
    if (lo(l.value, ":autofill") || lo(l.value, ":-webkit-autofill")) {
      const se = f.value.find((Ie) => Ie.title === Y.target.value);
      se && me(se);
    }
  }
  function R() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function L() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function U(Y) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function le(Y) {
    r.value = false;
  }
  function oe(Y) {
    (Y == null || Y === "" && !e.multiple && !D.value) && (V.value = []);
  }
  function re(Y) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(Y.relatedTarget)) && (o.value = true);
  }
  const Se = ce(false);
  function me(Y) {
    let se = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!Y || Y.props.disabled)) if (e.multiple) {
      const Ie = V.value.findIndex((ye) => (e.valueComparator || Bt)(ye.value, Y.value)), X = se ?? !~Ie;
      if (~Ie) {
        const ye = X ? [...V.value, Y] : [...V.value];
        ye.splice(Ie, 1), V.value = ye;
      } else X && (V.value = [...V.value, Y]);
      e.clearOnSelect && (S.value = "");
    } else {
      const Ie = se !== false;
      V.value = Ie ? [Y] : [], d.value = i.value ? "" : S.value ?? "", S.value = Ie && !D.value ? Y.title : "", Ae(() => {
        H.value = false, i.value = true;
      });
    }
  }
  return fe(o, (Y, se) => {
    var _a3;
    Y !== se && (Y ? (Se.value = true, S.value = e.multiple || D.value ? "" : String(((_a3 = V.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ae(() => Se.value = false)) : (!e.multiple && S.value == null && (V.value = []), H.value = false, !i.value && S.value && (d.value = S.value), S.value = "", c.value = -1));
  }), fe(S, (Y) => {
    !o.value || Se.value || (Y && (H.value = true), i.value = !Y);
  }), fe(H, (Y) => {
    if (!e.hideSelected && Y && V.value.length && i.value) {
      const se = x.value.findIndex((Ie) => V.value.some((X) => Ie.value === X.value));
      qe && window.requestAnimationFrame(() => {
        var _a3;
        se >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(se));
      });
    }
    Y && (d.value = null);
  }), fe(f, (Y, se) => {
    H.value || o.value && !se.length && Y.length && (H.value = true);
  }), ae(() => {
    const Y = !!(!e.hideNoData || x.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), se = V.value.length > 0, Ie = Jn.filterProps(e), X = { search: S, filteredItems: y.value };
    return k(Jn, K({ ref: l }, Ie, { modelValue: S.value, "onUpdate:modelValue": [(ye) => S.value = ye, oe], focused: o.value, "onUpdate:focused": (ye) => o.value = ye, validationValue: V.externalValue, counterValue: _.value, dirty: se, onChange: ie, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": H.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!D.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: w.isReadonly.value, placeholder: se ? void 0 : e.placeholder, "onClick:clear": pe, "onMousedown:control": F, onKeydown: ve, onBlur: re, "aria-expanded": ee.value, "aria-controls": $.value }), { ...n, default: (ye) => {
      let { id: ke } = ye;
      return p(be, null, [k(vo, K({ id: Q.value, ref: s, modelValue: H.value, "onUpdate:modelValue": (xe) => H.value = xe, activator: "parent", contentClass: "v-autocomplete__content", disabled: O.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: R, onAfterLeave: L }, e.menuProps), { default: () => [k(ja, { onFocusin: U, onKeydown: de }, { default: () => [n["menu-header"] && p("header", { ref: j }, [n["menu-header"](X)]), Y && k(fo, K({ key: "autocomplete-list", ref: q, filterable: true, selected: M.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (xe) => xe.preventDefault(), onFocusout: le, tabindex: "-1", selectable: !!x.value.length, "aria-live": "polite", "aria-labelledby": `${ke.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, G, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !x.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? k(Vn, { key: "no-data", title: a(e.noDataText) }, null)), k(ns, { ref: u, renderless: true, items: x.value, itemKey: "value" }, { default: (xe) => {
          var _a4, _b3, _c3;
          let { item: Ve, index: Be, itemRef: je } = xe;
          const Le = K(Ve.props, { ref: je, key: Ve.value, active: T.value && Ve === E.value ? true : void 0, onClick: () => me(Ve, null), "aria-posinset": Be + 1, "aria-setsize": x.value.length });
          return Ve.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ve.raw, index: Be })) ?? k(yn, K(Ve.props, { key: `divider-${Be}` }), null) : Ve.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ve.raw, index: Be })) ?? k(Co, K(Ve.props, { key: `subheader-${Be}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ve, index: Be, props: Le })) ?? k(Vn, K(Le, { role: "option" }), { prepend: (dt) => {
            let { isSelected: at } = dt;
            return p(be, null, [e.multiple && !e.hideSelected ? k(Nn, { key: Ve.value, modelValue: at, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (dn) => dn.preventDefault() }, null) : void 0, Ve.props.prependAvatar && k(pn, { image: Ve.props.prependAvatar }, null), Ve.props.prependIcon && k(Ge, { icon: Ve.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ve.title : Vd("v-autocomplete", Ve.title, (_a5 = C(Ve)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: N }, [n["menu-footer"](X)])] })] }), V.value.map((xe, Ve) => {
        function Be(at) {
          at.stopPropagation(), at.preventDefault(), me(xe, false);
        }
        const je = K(ba.filterProps(xe.props), { "onClick:close": Be, onKeydown(at) {
          at.key !== "Enter" && at.key !== " " || (at.preventDefault(), at.stopPropagation(), Be(at));
        }, onMousedown(at) {
          at.preventDefault(), at.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Le = P.value ? !!n.chip : !!n.selection, dt = Le ? zr(P.value ? n.chip({ item: xe, index: Ve, props: je }) : n.selection({ item: xe, index: Ve })) : void 0;
        if (!(Le && !dt)) return p("div", { key: xe.value, class: ne(["v-autocomplete__selection", Ve === c.value && ["v-autocomplete__selection--selected", m.value]]), style: ge(Ve === c.value ? g.value : {}) }, [P.value ? n.chip ? k(Ee, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: xe.title } } }, { default: () => [dt] }) : k(ba, K({ key: "chip", closable: A.value, size: "small", text: xe.title, disabled: xe.props.disabled }, je), null) : dt ?? p("span", { class: "v-autocomplete__selection-text" }, [xe.title, e.multiple && Ve < V.value.length - 1 && p("span", { class: "v-autocomplete__selection-comma" }, [Et(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ye = arguments.length, ke = new Array(ye), xe = 0; xe < ye; xe++) ke[xe] = arguments[xe];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ke), e.menuIcon ? k(Ge, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: J, onClick: Hr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && k(h, { key: "append-icon", name: "appendInner", color: ke[0].iconColor.value }, null)]);
    } });
  }), At({ isFocused: o, isPristine: i, menu: H, search: S, filteredItems: y, select: me }, l);
} }), XA = z({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: _e, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...we(), ...na({ location: "top end" }), ...ot(), ...Te(), ...We(), ...wa({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), Ob = te()({ name: "VBadge", inheritAttrs: false, props: XA(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Ye(() => e.color), { roundedClasses: l } = ct(e), { t: o } = Xe(), { textColorClasses: i, textColorStyles: r } = Rt(() => e.textColor), { themeClasses: s } = Ur(), { locationStyles: u } = Ya(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = xt(e);
  return ae(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, b] = gu(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return k(e.tag, K({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, b, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [p("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), k(Jt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [nt(p("span", K({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? k(Ge, { icon: e.icon }, null) : f]), [[Hn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), ZA = z({ color: String, density: String, ...we() }, "VBannerActions"), Lb = te()({ name: "VBannerActions", props: ZA(), setup(e, t) {
  let { slots: n } = t;
  return vt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ae(() => {
    var _a3;
    return p("div", { class: ne(["v-banner-actions", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Fb = Sa("v-banner-text"), JA = z({ avatar: String, bgColor: String, color: String, icon: _e, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Yt(), ...we(), ...mt(), ...kt(), ..._l({ mobile: null }), ...Ct(), ...na(), ...So(), ...ot(), ...Te(), ...We() }, "VBanner"), QA = te()({ name: "VBanner", props: JA(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ye(() => e.bgColor), { borderClasses: o } = en(e), { densityClasses: i } = Ht(e), { displayClasses: r, mobile: s } = cn(e), { dimensionStyles: u } = xt(e), { elevationClasses: c } = Pt(e), { locationStyles: d } = Ya(e), { positionClasses: f } = wo(e), { roundedClasses: v } = ct(e), { themeClasses: b } = Ue(e), m = B(() => e.color), g = B(() => e.density);
  vt({ VBannerActions: { color: m, density: g } }), ae(() => {
    const h = !!(e.text || n.text), S = !!(e.avatar || e.icon), V = !!(S || n.prepend);
    return k(e.tag, { class: ne(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, b.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: ge([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [V && p("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? k(Ee, { key: "prepend-defaults", disabled: !S, defaults: { VAvatar: { color: m.value, density: g.value, icon: e.icon, image: e.avatar } } }, n.prepend) : k(pn, { key: "prepend-avatar", color: m.value, density: g.value, icon: e.icon, image: e.avatar }, null)]), p("div", { class: "v-banner__content" }, [h && k(Fb, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && k(Lb, { key: "actions" }, n.actions)];
    } });
  });
} }), eT = z({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Yt(), ...we(), ...mt(), ...Ct(), ...ot(), ...Il({ name: "bottom-navigation" }), ...Te({ tag: "header" }), ...Al({ selectedClass: "v-btn--selected" }), ...We() }, "VBottomNavigation"), tT = te()({ name: "VBottomNavigation", props: eT(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ur(), { borderClasses: l } = en(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ye(() => e.bgColor), { densityClasses: r } = Ht(e), { elevationClasses: s } = Pt(e), { roundedClasses: u } = ct(e), { ssrBootStyles: c } = Pl(), d = I(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ce(e, "active", e.active), { layoutItemStyles: v } = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Ka(e, ud), vt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ae(() => k(e.tag, { class: ne(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: ge([i.value, v.value, { height: he(d.value) }, c.value, e.style]) }, { default: () => [n.default && p("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Nb = z({ fullscreen: Boolean, scrollable: Boolean, ...Oe(Li({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: qr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), Hu = te()({ name: "VDialog", props: Nb(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { scopeId: o } = El(), i = Z();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return fe(l, async (u) => {
    var _a3;
    u || (await Ae(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), ae(() => {
    const u = Zn.filterProps(e), c = K({ "aria-haspopup": "dialog" }, e.activatorProps), d = K({ tabindex: -1 }, e.contentProps);
    return k(Zn, K({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), b = 0; b < f; b++) v[b] = arguments[b];
      return k(Ee, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), At({}, i);
} }), nT = z({ inset: Boolean, ...Nb({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), aT = te()({ name: "VBottomSheet", props: nT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue");
  return ae(() => {
    const l = Hu.filterProps(e);
    return k(Hu, K(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), lT = z({ divider: [Number, String], ...we() }, "VBreadcrumbsDivider"), $b = te()({ name: "VBreadcrumbsDivider", props: lT(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a3;
    return p("li", { "aria-hidden": "true", class: ne(["v-breadcrumbs-divider", e.class]), style: ge(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), oT = z({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...we(), ...on(kt(), ["width", "maxWidth"]), ...Bi(), ...Te({ tag: "li" }) }, "VBreadcrumbsItem"), Hb = te()({ name: "VBreadcrumbsItem", props: oT(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Mi(e, a), o = I(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = xt(e), { textColorClasses: r, textColorStyles: s } = Rt(() => o.value ? e.activeColor : e.color);
  return ae(() => k(e.tag, { class: ne(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ge([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? p("a", K({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), iT = z({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: _e, items: { type: Array, default: () => [] }, ...we(), ...mt(), ...ot(), ...Te({ tag: "ul" }) }, "VBreadcrumbs"), rT = te()({ name: "VBreadcrumbs", props: iT(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ye(() => e.bgColor), { densityClasses: o } = Ht(e), { roundedClasses: i } = ct(e);
  vt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = I(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ae(() => {
    const s = !!(n.prepend || e.icon);
    return k(e.tag, { class: ne(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: ge([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && p("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? k(Ee, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : k(Ge, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return p(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? k(Hb, K({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && k($b, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), sT = z({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Yt(), ...we(), ...Ct(), ...Uy(), ...ot(), ...Te({ tag: "button" }), ...We(), ...wn({ variant: "flat" }) }, "VIconBtn"), zb = te()({ name: "VIconBtn", props: sT(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "active"), { themeClasses: o } = Ue(e), { borderClasses: i } = en(e), { elevationClasses: r } = Pt(e), { roundedClasses: s } = ct(e), { colorClasses: u, colorStyles: c, variantClasses: d } = xa(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ae(() => {
    const b = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, S = e.height ?? h, V = e.width ?? h, { iconSize: _ } = Yy(e, () => new Map(e.iconSizes).get(m)), w = { icon: b, size: _.value, color: e.iconColor, opacity: e.opacity };
    return k(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ne([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: ge([{ "--v-icon-btn-rotate": he(e.rotate, "deg"), "--v-icon-btn-height": he(S), "--v-icon-btn-width": he(V) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ka(!e.hideOverlay, "v-icon-btn"), p("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && b ? k(Ge, K({ key: "content-icon" }, w), null) : k(Ee, { key: "content-defaults", disabled: !b, defaults: { VIcon: { ...w } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? ze(e.text);
      } })]), !!e.loading && p("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? k(za, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: _.value }, null)])];
    } });
  }), {};
} });
function uT(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Wb = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, jb = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, cT = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dT = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fT = 28, vT = 31, Ed = 12, Gb = 1, as = 1, Oa = 7, bm = 60, mT = 59, hT = 1440, gT = 24, yT = 23, bT = 0, pT = 1e4, ST = 100, wT = 100, kT = 1e4;
function xT(e, t, n) {
  const a = sn(e);
  return Zb(a, t[0], Xb), Dn(a), n && yl(a, n, a.hasTime), a;
}
function CT(e, t, n) {
  const a = sn(e);
  return Zb(a, t[t.length - 1]), Dn(a), n && yl(a, n, a.hasTime), a;
}
function Ub(e) {
  const t = sn(e);
  return t.day = as, ls(t), Dn(t), t;
}
function Yb(e) {
  const t = sn(e);
  return t.day = Md(t.year, t.month), ls(t), Dn(t), t;
}
function zl(e) {
  return isFinite(parseInt(e));
}
function _T(e) {
  return typeof e == "number" && isFinite(e) || !!jb.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function pm(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = jb.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Jl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!Wb.exec(e) || e instanceof Date;
}
function fa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = Dd(e);
    return n && yl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = Wb.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return ls(l), Dn(l), n && yl(l, n, l.hasTime), l;
}
function Dd(e) {
  return Dn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * pT + e.month * ST + e.day;
}
function zu(e) {
  return e.hour * wT + e.minute;
}
function Ua(e) {
  return Vt(e) * kT + zu(e);
}
function yl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = zu(t), l = zu(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function Sm(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function wm(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = yT, e.minute = mT, e.time = qb(e))), e;
}
function Kb(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, Wu(e, t), Dn(e), n && yl(e, n, true), e;
}
function ls(e) {
  return e.weekday = IT(e), e;
}
function Dn(e) {
  return e.time = qb(e), e.date = VT(e), e;
}
function IT(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Ed + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Md(e, t) {
  return uT(e) ? dT[t] : cT[t];
}
function sn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function dl(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function VT(e) {
  let t = `${dl(e.year, 4)}-${dl(e.month, 2)}`;
  return e.hasDay && (t += `-${dl(e.day, 2)}`), t;
}
function qb(e) {
  return e.hasTime ? `${dl(e.hour, 2)}:${dl(e.minute, 2)}` : "";
}
function Wu(e, t) {
  for (e.minute += t; e.minute >= bm; ) e.minute -= bm, e.hour++, e.hour >= gT && (La(e), e.hour = bT);
  return e;
}
function La(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Oa, e.day > fT && e.day > Md(e.year, e.month) && (e.day = as, e.month++, e.month > Ed && (e.month = Gb, e.year++)), e;
}
function Xb(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Oa, e.day < as && (e.month--, e.month < Gb && (e.year--, e.month = Ed), e.day = Md(e.year, e.month)), e;
}
function nl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : La, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function PT(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Zb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : La, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function AT(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Oa; a++) {
    let l = 1;
    for (let o = 1; o < Oa; o++) {
      const i = (a + o) % Oa;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function ju(e) {
  const t = `${dl(e.hour, 2)}:${dl(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Cr(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Vt(t), r = [];
  let s = sn(e), u = 0, c = u === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Vt(s), c = c || u === i, a[s.weekday] === 0) {
      s = La(s);
      continue;
    }
    const d = sn(s);
    Dn(d), yl(d, n), r.push(d), s = nl(s, La, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function TT(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = sn(e);
    o.push(Kb(s, r, l));
  }
  return o;
}
function Uo(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(ju(a));
    } catch {
      return "";
    }
  };
}
function ET(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Oa || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Oa) return false;
      if (l > 0) {
        const i = o - t[l - 1];
        if (i < 0) {
          if (a) return false;
          a = true;
        } else if (i === 0) return false;
      }
      if (n[o]) return false;
      n[o] = true;
    }
    return true;
  }
  return false;
}
function DT(e) {
  const t = Tt({ now: fa("0000-00-00 00:00", true), today: fa("0000-00-00", true) }), n = I(() => e.now && Jl(e.now) ? fa(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Dd(/* @__PURE__ */ new Date());
  }
  function o(s, u) {
    s.date !== u.date && (u.year = s.year, u.month = s.month, u.day = s.day, u.weekday = s.weekday, u.date = s.date);
  }
  function i(s, u) {
    s.time !== u.time && (u.hour = s.hour, u.minute = s.minute, u.time = s.time);
  }
  function r() {
    const s = n.value || l();
    o(s, t.now), i(s, t.now), o(s, t.today);
  }
  return fe(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const os = z({ start: { type: [String, Number, Date], validate: Jl, default: () => Dd(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Jl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: ET }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Jl }, type: { type: String, default: "month" } }, "VCalendar-base");
function Bd(e) {
  const { times: t, updateTimes: n } = DT({ now: e.now }), a = ey(e), l = Cl(), o = I(() => e.type === "month" ? Ub(fa(e.start, true)) : fa(e.start, true)), i = I(() => {
    const _ = o.value, w = e.end && fa(e.end) || _, y = Ua(w) < Ua(_) ? _ : w;
    return e.type === "month" ? Yb(y) : y;
  }), r = I(() => Jl(e.modelValue) ? fa(e.modelValue, true) : o.value || t.today), s = I(() => {
    const _ = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((y) => parseInt(y, 10)), w = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [..._.toSorted().filter((y) => y >= w), ..._.toSorted().filter((y) => y < w)];
  }), u = I(() => {
    const _ = r.value, w = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [_.weekday];
      case "4day":
        return [_.weekday, (_.weekday + 1) % 7, (_.weekday + 2) % 7, (_.weekday + 3) % 7];
      case "category":
        return Array.from({ length: w }, (y, C) => (_.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = I(() => AT(s.value)), d = I(() => Cr(o.value, i.value, t.today, c.value)), f = I(() => e.dayFormat ? e.dayFormat : Uo(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = I(() => e.weekdayFormat ? e.weekdayFormat : Uo(a.current.value, (_, w) => ({ timeZone: "UTC", weekday: w ? "short" : "long" })));
  function b(_) {
    return Dy(_);
  }
  function m(_) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": _.present, "v-past": _.past, "v-future": _.future, "v-outside": w };
  }
  function g(_) {
    return l.getWeek(l.date(_.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(_) {
    return xT(_, s.value, t.today);
  }
  function S(_) {
    return CT(_, s.value, t.today);
  }
  function V(_) {
    return Uo(a.current.value, () => _);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: b, getRelativeClasses: m, getWeekNumber: g, getStartOfWeek: h, getEndOfWeek: S, getFormatter: V, updateTimes: n };
}
const Jb = z({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: zl }, intervalWidth: { type: [Number, String], default: 60, validate: zl }, intervalMinutes: { type: [Number, String], default: 60, validate: zl }, firstInterval: { type: [Number, String], default: 0, validate: zl }, firstTime: { type: [Number, String, Object], validate: _T }, intervalCount: { type: [Number, String], default: 24, validate: zl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function Qb(e) {
  const t = Bd(e), n = ce(), a = I(() => parseInt(String(e.firstInterval || 0))), l = I(() => parseInt(String(e.intervalMinutes || 60))), o = I(() => parseInt(String(e.intervalCount || 24))), i = I(() => parseFloat(String(e.intervalHeight || 48))), r = I(() => pm(e.firstTime)), s = I(() => {
    const w = r.value;
    return w !== false && w >= 0 && w <= hT ? w : a.value * l.value;
  }), u = I(() => o.value * i.value), c = I(() => Cr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = I(() => {
    const w = c.value, y = s.value, C = l.value, x = o.value, A = t.times.now;
    return w.map((P) => TT(P, y, C, x, A));
  }), f = I(() => e.intervalFormat ? e.intervalFormat : Uo(t.locale.current.value, (w, y) => y ? w.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(w) {
    const y = d.value[0][0];
    return !(y.hour === w.hour && y.minute === w.minute);
  }
  function b(w) {
  }
  function m(w, y) {
    const C = sn(y), x = w.currentTarget.getBoundingClientRect(), A = s.value, P = w, D = w, M = P.changedTouches || P.touches, T = ((M && M[0] ? M[0].clientY : D.clientY) - x.top) / i.value, O = Math.floor(T * l.value), W = A + O;
    return Kb(C, W, t.times.now);
  }
  function g(w) {
    const y = sn(w);
    return y.timeToY = V, y.timeDelta = _, y.minutesToPixels = S, y.week = c.value, y.intervalRange = [s.value, s.value + o.value * l.value], y;
  }
  function h(w) {
    const y = V(w), C = n.value;
    return y === false || !C ? false : (C.scrollTop = y, true);
  }
  function S(w) {
    return w / l.value * i.value;
  }
  function V(w) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = y !== false;
    let A = _(w, typeof y != "boolean" ? y : void 0);
    return A === false || (A *= u.value, C ? A < 0 ? A = 0 : A > u.value && (A = u.value) : A < 0 ? A = A + u.value : A > u.value && (A = A - u.value)), A;
  }
  function _(w, y) {
    let C = pm(w);
    if (C === false) return false;
    const x = o.value * l.value;
    if (y && typeof w == "object" && "day" in w) {
      const P = Vt(w), D = Vt(y);
      C += (P - D) * x;
    }
    const A = s.value;
    return (C - A) / x;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: b, getTimestampAtEvent: m, getSlotScope: g, scrollToTime: h, minutesToPixels: S, timeToY: V, timeDelta: _ };
}
function MT(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function BT(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const mi = { mounted: MT, unmounted: BT }, Oo = Qt({ name: "VCalendarDaily", directives: { vResize: mi }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...os(), ...Jb() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Z(0), o = Z(), i = Qb(e);
  function r() {
    Ae(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return p("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const E = he(e.intervalWidth);
    return p("div", { class: "v-calendar-daily__intervals-head", style: { width: E } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(E, T) {
    const O = gn(a, ":day", (W) => ({ nativeEvent: W, ...i.getSlotScope(E) }));
    return p("div", K({ key: E.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(E)] }, O), [m(E), g(E), b(E, T)]);
  }
  function b(E, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...E, index: T })) ?? [];
  }
  function m(E) {
    const T = E.present ? e.color : void 0;
    return p("div", K(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(E, e.shortWeekdays)]);
  }
  function g(E) {
    var _a3;
    return p("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, E)) ?? h(E)]);
  }
  function h(E) {
    const T = gn(a, ":date", (O) => ({ nativeEvent: O, ...E }));
    return k(zb, K({ active: E.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Hr }, T), { default: () => [i.dayFormatter.value(E, false)] });
  }
  function S() {
    return p("div", { class: "v-calendar-daily__body" }, [V()]);
  }
  function V() {
    return p("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [_()]);
  }
  function _() {
    return p("div", { ref: o, class: "v-calendar-daily__pane", style: { height: he(i.bodyHeight.value) } }, [w()]);
  }
  function w() {
    var _a3;
    return p("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? y()]);
  }
  function y() {
    return i.days.value.map((E, T) => {
      const O = gn(a, ":time", (W) => ({ nativeEvent: W, ...i.getSlotScope(i.getTimestampAtEvent(W, E)) }));
      return p("div", K({ key: E.date, class: ["v-calendar-daily__day", i.getRelativeClasses(E)] }, O), [x(T), C(E)]);
    });
  }
  function C(E) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(E))) ?? [];
  }
  function x(E) {
    return i.intervals.value[E].map(A);
  }
  function A(E) {
    var _a3;
    const T = he(e.intervalHeight), O = e.intervalStyle || i.intervalStyleDefault;
    return p("div", { class: "v-calendar-daily__day-interval", key: E.time, style: ge([{ height: T }, O(E)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(E))]);
  }
  function P() {
    const E = he(e.intervalWidth), T = gn(a, ":interval", (O) => ({ nativeEvent: O, ...i.getTimestampAtEvent(O, i.parsedStart.value) }));
    return p("div", K({ class: "v-calendar-daily__intervals-body", style: { width: E } }, T), [D()]);
  }
  function D() {
    return i.intervals.value.length ? i.intervals.value[0].map(M) : null;
  }
  function M(E) {
    const T = he(e.intervalHeight), O = e.shortIntervals, Q = (e.showIntervalLabel || i.showIntervalLabelDefault)(E) ? i.intervalFormatter.value(E, O) : void 0;
    return p("div", { key: E.time, class: "v-calendar-daily__interval", style: { height: T } }, [p("div", { class: "v-calendar-daily__interval-text" }, [Q])]);
  }
  return bt(r), ae(() => nt(p("div", { class: ne(["v-calendar-daily", a.class]), onDragstart: (E) => E.preventDefault() }, [e.hideHeader ? void 0 : c(), S()]), [[mi, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function RT(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function ep(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : RT(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const OT = Qt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...os(), ...Jb() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Qb(e), o = I(() => ep(e.categories, e.categoryText));
  function i(g, h) {
    const S = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...g, category: S };
  }
  function r(g) {
    return p("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(g, i(g, h)))]);
  }
  function s(g, h) {
    var _a3, _b2;
    const S = typeof h.category == "object" ? h.category.categoryName : h.category, V = gn(a, ":dayCategory", () => i(l.getSlotScope(g) || g, h.category));
    return p("div", K({ class: "v-calendar-category__column-header" }, V), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(S), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(g) {
    return p("div", { class: "v-calendar-category__category" }, [g === null ? e.categoryForInvalid : g]);
  }
  function c() {
    const g = [];
    return l.days.value.forEach((h, S) => {
      const V = new Array(o.value.length || 1);
      V.fill(h), g.push(...V.map((_, w) => d(_, S, w)));
    }), g;
  }
  function d(g, h, S) {
    const V = o.value[S], _ = gn(a, ":time", (w) => l.getSlotScope(l.getTimestampAtEvent(w, g)));
    return p("div", K({ key: g.date + "-" + S, class: ["v-calendar-daily__day", l.getRelativeClasses(g)] }, _), [f(h, V), b(g, V)]);
  }
  function f(g, h) {
    return l.intervals.value[g].map((S) => v(S, h));
  }
  function v(g, h) {
    var _a3;
    const S = he(e.intervalHeight), V = e.intervalStyle || l.intervalStyleDefault;
    return p("div", { key: g.time, class: "v-calendar-daily__day-interval", style: ge([{ height: S }, V({ ...g, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(g), h))]);
  }
  function b(g, h) {
    return p("div", { class: "v-calendar-category__columns" }, [m(g, h)]);
  }
  function m(g, h) {
    var _a3;
    const S = gn(a, ":timeCategory", (V) => i(l.getSlotScope(l.getTimestampAtEvent(V, g)), h));
    return p("div", K({ class: "v-calendar-category__column" }, S), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(g), h))]);
  }
  return ae(() => k(Oo, K({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), km = Qt({ name: "VCalendarWeekly", props: { minWeeks: { validate: zl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...os() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Bd(e), o = Ur(), i = I(() => parseInt(String(e.minWeeks))), r = I(() => {
    const w = i.value * l.parsedWeekdays.value.length, y = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return Cr(y, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, w);
  }), s = I(() => {
    const w = l.times.today, y = l.getStartOfWeek(w), C = l.getEndOfWeek(w);
    return Cr(y, C, w, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = I(() => e.monthFormat ? e.monthFormat : Uo(l.locale.current.value, (w, y) => ({ timeZone: "UTC", month: y ? "short" : "long" })));
  function c(w) {
    const y = Vt(w);
    return y < Vt(l.parsedStart.value) || y > Vt(l.parsedEnd.value);
  }
  function d() {
    return p("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const w = s.value.map(v);
    return e.showWeek && w.unshift(p("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), w;
  }
  function v(w, y) {
    const C = c(r.value[y]), x = w.present ? e.color : void 0;
    return p("div", K(l.getColorProps({ text: x }), { key: w.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(w, C)], role: "columnheader" }), [l.weekdayFormatter.value(w, e.shortWeekdays)]);
  }
  function b() {
    const w = r.value, y = l.parsedWeekdays.value.length, C = [];
    for (let x = 0; x < w.length; x += y) C.push(m(w.slice(x, x + y), g(w[x])));
    return C;
  }
  function m(w, y) {
    const C = w.map((x, A) => S(x, A, w));
    return e.showWeek && C.unshift(h(y)), p("div", { key: w[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function g(w) {
    return l.getWeekNumber(w);
  }
  function h(w) {
    return p("div", { class: "v-calendar-weekly__weeknumber" }, [p("small", null, [String(w)])]);
  }
  function S(w, y, C) {
    var _a3;
    const x = c(w), A = gn(a, ":day", (P) => ({ nativeEvent: P, ...w }));
    return p("div", K({ key: w.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(w, x)], role: "cell" }, A), [V(w), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: x, index: y, week: C, ...w })]);
  }
  function V(w) {
    var _a3;
    return p("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, w)) ?? _(w)]);
  }
  function _(w) {
    const y = w.day === 1 && e.showMonthOnFirst, C = gn(a, ":date", (x) => ({ nativeEvent: x, ...w }));
    return k(zb, K({ active: w.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Hr }, C), { default: () => [y ? u.value(w, e.shortMonths) + " " + l.dayFormatter.value(w, false) : l.dayFormatter.value(w, false)] });
  }
  return ae(() => p("div", { class: ne(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (w) => w.preventDefault() }, [e.hideHeader ? void 0 : d(), b()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), LT = 864e5;
function tp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function Mn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function xm(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function np(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function ap(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function lp(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + LT, e.endTimestampIdentifier)];
}
function FT(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (Mn(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? np(s.event) : ap(s.event);
      if (Mn(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function op(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Ua(n), r = tp(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? np(s.event) : ap(s.event);
      t.groups.length > 0 && !Mn(u, c, t.min, t.max, l) && (xm(t.groups), t.reset());
      let d = FT(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), xm(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Cm = 100, NT = (e, t, n) => {
  const a = op(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * Cm / u.columnCount, u.width = Cm / u.columnCount;
    }), s;
  };
}, qi = 100, $T = 5, HT = 1.7, zT = (e, t, n) => {
  const a = op(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Ua(l), u = tp(o, s), c = qT(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const b = XT(v, s), m = UT(b, f);
        if (m === false) {
          const g = YT(b, f);
          g && (b.parent = g, b.sibling = Mn(b.start, b.end, g.start, ar(g.start, n)), b.index = g.index + 1, g.children.push(b));
        } else {
          const [g] = _m(b, f, m - 1, m - 1), h = _m(b, f, m + 1, m + f.length, true);
          b.children = h, b.index = m, g && (b.parent = g, b.sibling = Mn(b.start, b.end, g.start, ar(g.start, n)), g.children.push(b));
          for (const S of h) S.parent === g && (S.parent = b), S.index - b.index <= 1 && b.sibling && Mn(b.start, ar(b.start, n), S.start, S.end) && (S.sibling = true);
        }
        f.push(b);
      }
      WT(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function WT(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = ip(n) + 1, i = l ? l.visual.left : 0, r = qi - i, s = Math.min($T, qi / o), u = jT(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = KT(n, e, t) ? qi - a.left : Math.min(qi - a.left, d * HT);
  }
}
function jT(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function GT(e, t) {
  const n = [];
  for (const a of t) Mn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function UT(e, t) {
  const n = GT(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function _m(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && Mn(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function YT(e, t) {
  let n = null;
  for (const a of t) Mn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function KT(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && Mn(e.start, ar(e.start, n), a.start, a.end)) return false;
  return true;
}
function qT(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = lp(a.event, t);
    let i = false;
    for (const r of n) if (Mn(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function XT(e, t) {
  const [n, a] = lp(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function ip(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = ip(n);
    a > t && (t = a);
  }
  return t;
}
function ar(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const rp = { stack: zT, column: NT };
function ZT(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = fa(i, true), u = r ? fa(r, true) : s, c = Sm(i) ? wm(s, l) : s, d = Sm(r) ? wm(u, l) : u, f = Vt(c), v = Ua(c), b = Vt(d), m = c.hasTime ? 0 : 2359, g = Ua(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: b, endTimestampIdentifier: g, allDay: h, index: t, category: o };
}
function Rd(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function JT(e, t, n) {
  if (n) {
    const a = Wu(sn(t), n[0]), l = Wu(sn(t), n[1]), o = e.startTimestampIdentifier < Ua(l), i = e.endTimestampIdentifier > Ua(a);
    return o && i;
  }
  return Rd(e, Vt(t));
}
function QT(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Im(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Rd(e, n);
}
function eE(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const tE = 100, nE = 95, aE = z({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in rp || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function lE(e, t, n) {
  const a = Bd(e), l = I(() => !Array.isArray(e.events) || e.events.length === 0), o = I(() => e.type === "category"), i = I(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = I(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = I(() => e.events ? e.events.map((T, O) => ZT(T, O, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), u = I(() => parseInt(String(e.eventOverlapThreshold || 0))), c = I(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = I(() => typeof e.eventName == "function" ? e.eventName : (T, O) => T.input[e.eventName] || ""), f = I(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : rp[e.eventOverlapMode]), v = I(() => a.effectiveWeekdays.value);
  function b(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const m = Z([]);
  function g() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, O = h();
    for (const W in O) {
      const { parent: H, events: Q, more: ee } = O[W];
      if (!ee) break;
      const $ = H.getBoundingClientRect(), q = Q.length - 1, j = Q.map((G) => ({ event: G, bottom: G.getBoundingClientRect().bottom })).sort((G, ue) => G.bottom - ue.bottom);
      let N = 0;
      for (let G = 0; G <= q; G++) {
        const ue = j[G].bottom;
        (G === q ? ue > $.bottom : ue + T > $.bottom) && (j[G].event.style.display = "none", N++);
      }
      N ? (ee.style.display = "", ee.innerHTML = a.locale.t(e.eventMoreText, N)) : ee.style.display = "none";
    }
  }
  function h() {
    const T = {}, O = m.value;
    return !O || !O.length || O.forEach((W) => {
      const H = W.getAttribute("data-date");
      W.parentElement && H && (H in T || (T[H] = { parent: W.parentElement, more: null, events: [] }), W.getAttribute("data-more") ? T[H].more = W : (T[H].events.push(W), W.style.display = ""));
    }), T;
  }
  function S(T, O) {
    let { event: W } = T;
    const H = e.eventHeight || 0, Q = e.eventMarginBottom || 0, ee = Vt(O), $ = O.week, q = ee === W.startIdentifier;
    let j = ee === W.endIdentifier, N = nE;
    if (!o.value) for (let ue = O.index + 1; ue < $.length; ue++) {
      const pe = Vt($[ue]);
      if (W.endIdentifier >= pe) N += tE, j = j || pe === W.endIdentifier;
      else {
        j = true;
        break;
      }
    }
    return _(W, { eventParsed: W, day: O, start: q, end: j, timed: false }, false, { class: ["v-event", { "v-event-start": q, "v-event-end": j }], style: { height: `${H}px`, width: `${N}%`, marginBottom: `${Q}px` }, "data-date": O.date });
  }
  function V(T, O) {
    let { event: W, left: H, width: Q } = T;
    const ee = O.timeDelta(W.start, O), $ = O.timeDelta(W.end, O);
    if ($ === false || ee === false || $ < 0 || ee >= 1 || QT(W, O)) return false;
    const q = Vt(O), j = W.startIdentifier >= q, N = W.endIdentifier > q, G = O.timeToY(W.start, O), ue = O.timeToY(W.end, O), pe = Math.max(e.eventHeight || 0, ue - G);
    return _(W, { eventParsed: W, day: O, start: j, end: N, timed: true }, true, { class: "v-event-timed", style: { top: `${G}px`, height: `${pe}px`, left: `${H}%`, width: `${Q}%` } });
  }
  function _(T, O, W, H) {
    const Q = t.event, ee = c.value(T.input), $ = b(T.input), q = T.start.hour < 12 && T.end.hour >= 12, j = PT(T.start, T.end) <= u.value, N = (J, de) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: J.minute > 0 ? "numeric" : void 0 })(J, true), G = () => N(T.start) + " - " + N(T.end), ue = () => {
      const J = d.value(T, W);
      if (T.start.hasTime) if (W) {
        const de = G(), ve = j ? ", " : p("br", null, null);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [J]), ve, de]);
      } else {
        const de = N(T.start);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [de]), Et(" "), J]);
      }
      return p("span", { class: "v-event-summary" }, [J]);
    }, pe = { ...O, event: T.input, outside: O.day.outside, singline: j, overlapsNoon: q, formatTime: N, timeSummary: G, eventSummary: ue }, F = gn(n, ":event", (J) => ({ ...pe, nativeEvent: J }));
    return nt(p("div", K(a.getColorProps({ text: ee, background: $ }), F, H, { ref_for: true, ref: m }), [(Q == null ? void 0 : Q(pe)) ?? w(ue)]), [[Nt, e.eventRipple ?? true]]);
  }
  function w(T) {
    return p("div", { class: "pl-1" }, [T()]);
  }
  function y(T) {
    const O = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return p("div", { style: { height: `${O}px` }, "data-date": T.date, ref_for: true, ref: m }, null);
  }
  function C(T) {
    const O = e.eventHeight || 0, W = e.eventMarginBottom || 0, H = gn(n, ":more", (Q) => ({ nativeEvent: Q, ...T }));
    return nt(p("div", K({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${O}px`, marginBottom: `${W}px` }, ref_for: true, ref: m }, H), null), [[Nt, e.eventRipple ?? true]]);
  }
  function x() {
    const T = a.days.value, O = Vt(T[0]), W = Vt(T[T.length - 1]);
    return s.value.filter((H) => eE(H, O, W));
  }
  function A(T, O) {
    return !o.value || typeof O == "object" && O.categoryName && O.categoryName === T.category || typeof T.category == "string" && O === T.category || typeof T.category != "string" && O === null;
  }
  function P(T) {
    const O = Vt(T), W = v.value[0];
    return s.value.filter((H) => Im(H, T, O, W));
  }
  function D(T) {
    const O = Vt(T), W = v.value[0];
    return s.value.filter((H) => H.allDay && (o.value ? Rd(H, O) : Im(H, T, O, W)) && A(H, T.category));
  }
  function M(T) {
    return s.value.filter((O) => !O.allDay && JT(O, T, T.intervalRange) && A(O, T.category));
  }
  function E() {
    if (l.value) return { ...t };
    const T = f.value(s.value, v.value[0], u.value), O = (H) => !!H, W = (H, Q, ee, $) => {
      const q = Q(H), j = T(H, q, $, o.value);
      if ($) return j.map((G) => ee(G, H)).filter(O);
      const N = [];
      return j.forEach((G, ue) => {
        for (; N.length < G.column; ) N.push(y(H));
        const pe = ee(G, H);
        pe && N.push(pe);
      }), N;
    };
    return { ...t, day: (H) => {
      let Q = W(H, P, S, false);
      if (Q && Q.length > 0 && e.eventMore && Q.push(C(H)), t.day) {
        const ee = t.day(H);
        ee && (Q = Q ? Q.concat(ee) : ee);
      }
      return Q;
    }, "day-header": (H) => {
      let Q = W(H, D, S, false);
      if (t["day-header"]) {
        const ee = t["day-header"](H);
        ee && (Q = Q ? Q.concat(ee) : ee);
      }
      return Q;
    }, "day-body": (H) => {
      const Q = W(H, M, V, true);
      let ee = [p("div", { class: "v-event-timed-container" }, [Q])];
      if (t["day-body"]) {
        const $ = t["day-body"](H);
        $ && (ee = ee.concat($));
      }
      return ee;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: b, eventsRef: m, updateEventVisibility: g, getEventsMap: h, genDayEvent: S, genTimedEvent: V, genEvent: _, genName: w, genPlaceholder: y, genMore: C, getVisibleEvents: x, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: D, getEventsForDayTimed: M, getScopedSlots: E };
}
const oE = te()({ name: "VCalendar", directives: { vResize: mi }, props: { modelValue: { type: [String, Number, Date], validate: Jl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...os(), ...aE() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = Z(), i = lE(e, n, a), r = Z(null), s = Z(null), u = I(() => parseInt(String(e.categoryDays)) || 1), c = I(() => ep(e.categories, e.categoryText)), d = I(() => {
    const y = i.parsedValue.value;
    let C = null, x = e.maxDays, A = c.value, P = y, D = y;
    switch (e.type) {
      case "month":
        C = km, P = Ub(y), D = Yb(y);
        break;
      case "week":
        C = Oo, P = i.getStartOfWeek(y), D = i.getEndOfWeek(y), x = 7;
        break;
      case "day":
        C = Oo, x = 1;
        break;
      case "4day":
        C = Oo, D = nl(sn(D), La, 3), Dn(D), x = 4;
        break;
      case "custom-weekly":
        C = km, P = i.parsedStart.value || y, D = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = Oo, P = i.parsedStart.value || y, D = i.parsedEnd.value;
        break;
      case "category":
        const M = u.value;
        C = OT, D = nl(sn(D), La, M), Dn(D), x = M, A = w(A);
        break;
      default:
        const E = e.type;
        throw new Error(`${E} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: D, maxDays: x, categories: A };
  }), f = I(() => i.effectiveWeekdays.value), v = I(() => e.type === "category"), b = I(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = I(() => i.getFormatter({ timeZone: "UTC", month: "short" })), g = I(() => {
    const { start: y, end: C } = d.value, x = y.year !== C.year, A = x || y.month !== C.month;
    return x ? m.value(y, true) + " " + y.year + " - " + m.value(C, true) + " " + C.year : A ? m.value(y, true) + " - " + m.value(C, true) + " " + C.year : b.value(y, false) + " " + y.year;
  });
  function h() {
    const { start: y, end: C } = d.value;
    (!r.value || !s.value || y.date !== r.value.date || C.date !== s.value.date) && (r.value = y, s.value = C, l("change", { start: y, end: C }));
  }
  function S() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = sn(i.parsedValue.value), x = y > 0, A = x ? La : Xb, P = x ? vT : as;
    let D = x ? y : -y;
    for (; --D >= 0; ) switch (e.type) {
      case "month":
        C.day = P, A(C);
        break;
      case "week":
        nl(C, A, Oa);
        break;
      case "day":
        nl(C, A, 1);
        break;
      case "4day":
        nl(C, A, 4);
        break;
      case "category":
        nl(C, A, u.value);
        break;
    }
    ls(C), Dn(C), yl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", ju(C)) : typeof e.modelValue == "number" ? l("update:modelValue", ju(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function V() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    S(y);
  }
  function _() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    S(-y);
  }
  function w(y) {
    if (!i.noEvents.value) {
      const C = y.reduce((x, A, P) => (typeof A == "object" && A.categoryName ? x[A.categoryName] = { index: P, count: 0 } : typeof A == "string" && (x[A] = { index: P, count: 0 }), x), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let x = y.length;
        i.parsedEvents.value.forEach((A) => {
          let P = A.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: x++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const x in C) C[x].count === 0 && delete C[x];
      y = y.filter((x) => typeof x == "object" && x.categoryName ? C.hasOwnProperty(x.categoryName) : typeof x == "string" ? C.hasOwnProperty(x) : false);
    }
    return y;
  }
  return fe(d, h), bt(() => {
    i.updateEventVisibility(), h();
  }), Rr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), ae(() => {
    const { start: y, end: C, maxDays: x, component: A, categories: P } = d.value;
    return nt(k(A, K({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: y.date, end: C.date, maxDays: x, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (D, M) => {
      a["onUpdate:modelValue"] && l("update:modelValue", M.date);
    } }), i.getScopedSlots()), [[mi, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), At({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: g, monthLongFormatter: b, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: S, next: V, prev: _, getCategoryList: w }, o);
} }), iE = z({ ...we(), ...Te() }, "VCardActions"), sp = te()({ name: "VCardActions", props: iE(), setup(e, t) {
  let { slots: n } = t;
  return vt({ VBtn: { slim: true, variant: "text" } }), ae(() => k(e.tag, { class: ne(["v-card-actions", e.class]), style: ge(e.style) }, n)), {};
} }), rE = z({ opacity: [Number, String], ...we(), ...Te() }, "VCardSubtitle"), up = te()({ name: "VCardSubtitle", props: rE(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(e.tag, { class: ne(["v-card-subtitle", e.class]), style: ge([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), cp = Sa("v-card-title"), sE = z({ appendAvatar: String, appendIcon: _e, prependAvatar: String, prependIcon: _e, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...we(), ...mt(), ...Te() }, "VCardItem"), dp = te()({ name: "VCardItem", props: sE(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return k(e.tag, { class: ne(["v-card-item", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [l && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? k(Ee, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : p(be, null, [e.prependAvatar && k(pn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && k(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-card-item__content" }, [r && k(cp, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? ze(e.title)];
      } }), s && k(up, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? ze(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? k(Ee, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : p(be, null, [e.appendIcon && k(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && k(pn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), uE = z({ opacity: [Number, String], ...we(), ...Te() }, "VCardText"), fp = te()({ name: "VCardText", props: uE(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => k(e.tag, { class: ne(["v-card-text", e.class]), style: ge([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), cE = z({ appendAvatar: String, appendIcon: _e, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Yt(), ...we(), ...mt(), ...kt(), ...Ct(), ...Jr(), ...na(), ...So(), ...ot(), ...Bi(), ...Te(), ...We(), ...wn({ variant: "elevated" }) }, "VCard"), dE = te()({ name: "VCard", directives: { vRipple: Nt }, props: cE(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { borderClasses: o } = en(e), { colorClasses: i, colorStyles: r, variantClasses: s } = xa(e), { densityClasses: u } = Ht(e), { dimensionStyles: c } = xt(e), { elevationClasses: d } = Pt(e), { loaderClasses: f } = Ei(e), { locationStyles: v } = Ya(e), { positionClasses: b } = wo(e), { roundedClasses: m } = ct(e), g = Mi(e, n), h = ce(void 0);
  return fe(() => e.loading, (S, V) => {
    h.value = !S && typeof V == "string" ? V : typeof S == "boolean" ? void 0 : S;
  }, { immediate: true }), ae(() => {
    const S = e.link !== false && g.isLink.value, V = !e.disabled && e.link !== false && (e.link || g.isClickable.value), _ = S ? "a" : e.tag, w = !!(a.title || e.title != null), y = !!(a.subtitle || e.subtitle != null), C = w || y, x = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), D = C || A || x, M = !!(a.text || e.text != null);
    return nt(k(_, K(g.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": V }, l.value, o.value, i.value, u.value, d.value, f.value, b.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": he(e.height) }, e.style], onClick: V && g.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && p("div", { key: "image", class: "v-card__image" }, [a.image ? k(Ee, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : k(ya, { key: "image-img", cover: true, src: e.image }, null)]), k(Di, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), D && k(dp, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), M && k(fp, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && k(sp, null, { default: a.actions }), ka(V, "v-card")];
    } }), [[Nt, V && e.ripple]]);
  }), {};
} }), fE = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function vE(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function mE(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), fE(t);
}
function hE(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function gE() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => vE(n, t), touchend: (n) => mE(n, t), touchmove: (n) => hE(n, t) };
}
function yE(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = gE(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Dg(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function bE(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Dg(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const _r = { mounted: yE, unmounted: bE }, vp = Symbol.for("vuetify:v-window"), mp = Symbol.for("vuetify:v-window-group"), is = z({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...we(), ...Te(), ...We() }, "VWindow"), bl = te()({ name: "VWindow", directives: { vTouch: _r }, props: is(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isRtl: l } = It(), { t: o } = Xe(), i = Ka(e, mp), r = Z(), s = I(() => l.value ? !e.reverse : e.reverse), u = ce(false), c = I(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const y = e.direction === "vertical" ? "y" : "x", x = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${y}${x}-transition`;
  }), d = ce(0), f = Z(void 0), v = I(() => i.items.value.findIndex((y) => i.selected.value.includes(y.id)));
  fe(v, (y, C) => {
    let x;
    const A = { left: 0, top: 0 };
    qe && C >= 0 && (x = Wr(r.value), A.left = x == null ? void 0 : x.scrollLeft, A.top = x == null ? void 0 : x.scrollTop);
    const P = i.items.value.length, D = P - 1;
    P <= 2 ? u.value = y < C : y === D && C === 0 ? u.value = false : y === 0 && C === D ? u.value = true : u.value = y < C, Ae(() => {
      if (!qe || !x) return;
      x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" }), requestAnimationFrame(() => {
        if (!x) return;
        x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), Ze(vp, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const b = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function g() {
    b.value && i.prev();
  }
  function h() {
    m.value && i.next();
  }
  const S = I(() => {
    const y = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    y.push(b.value ? n.prev ? n.prev({ props: C }) : k($e, C, null) : p("div", null, null));
    const x = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return y.push(m.value ? n.next ? n.next({ props: x }) : k($e, x, null) : p("div", null, null)), y;
  }), V = I(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? g() : h();
  }, right: () => {
    s.value ? h() : g();
  }, start: (C) => {
    let { originalEvent: x } = C;
    x.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function _(y) {
    (e.direction === "horizontal" && y.key === "ArrowLeft" || e.direction === "vertical" && y.key === "ArrowUp") && (y.preventDefault(), g(), Ae(() => {
      b.value ? w(0) : w(1);
    })), (e.direction === "horizontal" && y.key === "ArrowRight" || e.direction === "vertical" && y.key === "ArrowDown") && (y.preventDefault(), h(), Ae(() => {
      m.value ? w(1) : w(0);
    }));
  }
  function w(y) {
    var _a3;
    const C = S.value[y];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return ae(() => nt(k(e.tag, { ref: r, class: ne(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: ge([e.style, { "--v-window-transition-duration": qn() ? null : he(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [p("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && p("div", { class: ne(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: _ }, [S.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[_r, V.value]])), { group: i };
} }), pE = z({ color: String, cycle: Boolean, delimiterIcon: { type: _e, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...is({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), SE = te()({ name: "VCarousel", props: pE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { t: l } = Xe(), o = Z();
  let i = -1;
  fe(a, s), fe(() => e.interval, s), fe(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), bt(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Ae(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Ae(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return ae(() => {
    const c = bl.filterProps(e);
    return k(bl, K({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: he(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return p(be, null, [!e.hideDelimiters && p("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && k(Ee, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, b) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", b + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (g) => u(g, f) };
        return n.item ? n.item({ props: m, item: v }) : k($e, K(v, m), null);
      })] })]), e.progress && k(Zr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), rs = z({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...we(), ...Tl(), ...wd() }, "VWindowItem"), pl = te()({ name: "VWindowItem", directives: { vTouch: _r }, props: rs(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Me(vp), l = Ha(e, mp), { isBooted: o } = Pl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = ce(false), r = I(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !a || (i.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = he((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(b) {
    i.value && Ae(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = he(b.clientHeight));
    });
  }
  const f = I(() => {
    const b = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof b != "string" ? a.transition.value : b, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = kd(e, l.isSelected);
  return ae(() => k(Jt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [nt(p("div", { class: ne(["v-window-item", l.selectedClass.value, e.class]), style: ge(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Hn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), wE = z({ ...My(), ...rs() }, "VCarouselItem"), kE = te()({ name: "VCarouselItem", inheritAttrs: false, props: wE(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ae(() => {
    const l = ya.filterProps(e), o = pl.filterProps(e);
    return k(pl, K({ class: ["v-carousel-item", e.class] }, o), { default: () => [k(ya, K(a, l), n)] });
  });
} }), xE = Sa("v-code", "code"), CE = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...we() }, "VColorPickerCanvas"), _E = Qt({ name: "VColorPickerCanvas", props: CE(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ce(false), l = Z(), o = ce(parseFloat(e.width)), i = ce(parseFloat(e.height)), r = Z({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = I({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: S, y: V } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ke(S, 0, o.value) / o.value, v: 1 - Ke(V, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = I(() => {
    const { x: h, y: S } = u.value, V = parseInt(e.dotSize, 10) / 2;
    return { width: he(e.dotSize), height: he(e.dotSize), transform: `translate(${he(h - V)}, ${he(S - V)})` };
  }), { resizeRef: d } = In((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: S, height: V } = h[0].contentRect;
    o.value = Math.round(S), i.value = Math.round(V);
  });
  function f(h, S, V) {
    const { left: _, top: w, width: y, height: C } = V;
    u.value = { x: Ke(h - _, 0, y), y: Ke(S - w, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (b(h), window.addEventListener("mousemove", b), window.addEventListener("mouseup", m), window.addEventListener("touchmove", b), window.addEventListener("touchend", m));
  }
  function b(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const S = Vx(h);
    f(S.clientX, S.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", b), window.removeEventListener("touchend", m);
  }
  function g() {
    var _a3;
    if (!l.value) return;
    const h = l.value, S = h.getContext("2d");
    if (!S) return;
    const V = S.createLinearGradient(0, 0, h.width, 0);
    V.addColorStop(0, "hsla(0, 0%, 100%, 1)"), V.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = V, S.fillRect(0, 0, h.width, h.height);
    const _ = S.createLinearGradient(0, 0, 0, h.height);
    _.addColorStop(0, "hsla(0, 0%, 0%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = _, S.fillRect(0, 0, h.width, h.height);
  }
  return fe(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, g, { immediate: true }), fe(() => [o.value, i.value], (h, S) => {
    g(), r.value = { x: u.value.x * h[0] / S[0], y: u.value.y * h[1] / S[1] };
  }, { flush: "post" }), fe(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), bt(() => g()), ae(() => p("div", { ref: d, class: ne(["v-color-picker-canvas", e.class]), style: ge(e.style), onMousedown: v, onTouchstartPassive: v }, [p("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && p("div", { class: ne(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ge(c.value) }, null)])), {};
} });
function IE(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function VE(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Xn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Su(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Kg(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return ll(t, ["r", "g", "b"]) ? n = Xn(e) : ll(t, ["h", "s", "l"]) ? n = Su(e) : ll(t, ["h", "s", "v"]) && (n = e), IE(n, !ll(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Gl = { h: 0, s: 0, v: 0, a: 1 }, Gu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Xn, from: Pi }, PE = { ...Gu, inputs: (_a2 = Gu.inputs) == null ? void 0 : _a2.slice(0, 3) }, Uu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Su, from: Uc }, AE = { ...Uu, inputs: Uu.inputs.slice(0, 3) }, hp = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Kg, from: Jx }, TE = { ...hp, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, fl = { rgb: PE, rgba: Gu, hsl: AE, hsla: Uu, hex: TE, hexa: hp }, EE = (e) => {
  let { label: t, ...n } = e;
  return p("div", { class: "v-color-picker-edit__input" }, [p("input", ZS(tg(n)), null), p("span", null, [t])]);
}, DE = z({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(fl).includes(e) }, modes: { type: Array, default: () => Object.keys(fl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(fl).includes(t)) }, ...we() }, "VColorPickerEdit"), ME = Qt({ name: "VColorPickerEdit", props: DE(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Xe(), l = I(() => e.modes.map((i) => ({ ...fl[i], name: i }))), o = I(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const b = v.target;
        b && n("update:color", i.from(c(r ?? i.to(Gl), b.value)));
      } };
    });
  });
  return ae(() => {
    var _a3;
    return p("div", { class: ne(["v-color-picker-edit", e.class]), style: ge(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => k(EE, i, null)), l.value.length > 1 && k($e, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Od = Symbol.for("vuetify:v-slider");
function Yu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function BE(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const gp = z({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...ot(), ...Ct({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), yp = (e) => {
  const t = I(() => parseFloat(e.min)), n = I(() => parseFloat(e.max)), a = I(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = I(() => Math.max(ov(a.value), ov(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ke(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, bp = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = xo(t), { isRtl: s } = It(), u = B(() => t.reverse), c = I(() => t.direction === "vertical"), d = I(() => c.value !== u.value), { min: f, max: v, step: b, decimals: m, roundValue: g } = n, h = I(() => parseInt(t.thumbSize, 10)), S = I(() => parseInt(t.tickSize, 10)), V = I(() => parseInt(t.trackSize, 10)), _ = I(() => (v.value - f.value) / b.value), w = I(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), y = I(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = I(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), x = I(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = ce(false), P = ce(0), D = Z(), M = Z();
  function E(F) {
    var _a3;
    const J = (_a3 = D.value) == null ? void 0 : _a3.$el;
    if (!J) return;
    const de = t.direction === "vertical", ve = de ? "top" : "left", ie = de ? "height" : "width", R = de ? "clientY" : "clientX", { [ve]: L, [ie]: U } = J.getBoundingClientRect(), le = BE(F, R);
    let oe = Ke((le - L - P.value) / U) || 0;
    return (de ? d.value : d.value !== s.value) && (oe = 1 - oe), g(f.value + oe * (v.value - f.value));
  }
  const T = (F) => {
    const J = E(F);
    J != null && o({ value: J }), A.value = false, P.value = 0;
  }, O = (F) => {
    const J = E(F);
    M.value = i(F), M.value && (A.value = true, M.value.contains(F.target) ? P.value = Yu(F, M.value, t.direction) : (P.value = 0, J != null && l({ value: J })), J != null && a({ value: J }), Ae(() => {
      var _a3;
      return (_a3 = M.value) == null ? void 0 : _a3.focus();
    }));
  }, W = { passive: true, capture: true };
  function H(F) {
    const J = E(F);
    J != null && l({ value: J });
  }
  function Q(F) {
    F.stopPropagation(), F.preventDefault(), T(F), window.removeEventListener("mousemove", H, W), window.removeEventListener("mouseup", Q);
  }
  function ee(F) {
    var _a3;
    T(F), window.removeEventListener("touchmove", H, W), (_a3 = F.target) == null ? void 0 : _a3.removeEventListener("touchend", ee);
  }
  function $(F) {
    var _a3;
    O(F), window.addEventListener("touchmove", H, W), (_a3 = F.target) == null ? void 0 : _a3.addEventListener("touchend", ee, { passive: false });
  }
  function q(F) {
    F.button === 0 && (F.preventDefault(), O(F), window.addEventListener("mousemove", H, W), window.addEventListener("mouseup", Q, { passive: false }));
  }
  yt(() => {
    window.removeEventListener("touchmove", H), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", Q);
  });
  const j = (F) => {
    const J = (F - f.value) / (v.value - f.value) * 100;
    return Ke(isNaN(J) ? 0 : J, 0, 100);
  }, N = B(() => t.showTicks), G = I(() => N.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((F) => ({ value: F, position: j(F), label: F.toString() })) : Object.keys(t.ticks).map((F) => ({ value: parseFloat(F), position: j(parseFloat(F)), label: t.ticks[F] })) : _.value !== 1 / 0 ? Yn(_.value + 1).map((F) => {
    const J = f.value + F * b.value;
    return { value: J, position: j(J) };
  }) : [] : []), ue = I(() => G.value.some((F) => {
    let { label: J } = F;
    return !!J;
  })), pe = { activeThumbRef: M, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ue, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: A, noKeyboard: B(() => t.noKeyboard), numTicks: _, onSliderMousedown: q, onSliderTouchstart: $, parsedTicks: G, parseMouseMove: E, position: j, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: g, showTicks: N, startOffset: P, step: b, thumbSize: h, thumbColor: w, thumbLabelColor: y, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: S, trackColor: C, trackContainerRef: D, trackFillColor: x, trackSize: V, vertical: c };
  return Ze(Od, pe), pe;
}, RE = z({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...we() }, "VSliderThumb"), Ku = te()({ name: "VSliderThumb", directives: { vRipple: Nt }, props: RE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Me(Od), { isRtl: o, rtlClasses: i } = It();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: b, direction: m, isReversed: g, vertical: h, readonly: S, elevation: V, mousePressed: _, decimals: w, indexFromEnd: y } = l, C = ce(false), x = ce(false), A = I(() => f.value ? void 0 : V.value), { elevationClasses: P } = Pt(A), { textColorClasses: D, textColorStyles: M } = Rt(u), { backgroundColorClasses: E, backgroundColorStyles: T } = Ye(c), { pageup: O, pagedown: W, end: H, home: Q, left: ee, right: $, down: q, up: j } = hu, N = [O, W, H, Q, ee, $, q, j], G = I(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ue(F, J) {
    if (e.noKeyboard || f.value || !N.includes(F.key)) return;
    F.preventDefault();
    const de = d.value || 0.1, ve = (s.value - r.value) / de;
    if ([ee, $, q, j].includes(F.key)) {
      const R = (h.value ? [o.value ? ee : $, g.value ? q : j] : y.value !== o.value ? [ee, j] : [$, j]).includes(F.key) ? 1 : -1, L = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
      R === -1 && J === s.value && !L && !Number.isInteger(ve) ? J = J - ve % 1 * de : J = J + R * de * G.value[L];
    } else if (F.key === Q) J = r.value;
    else if (F.key === H) J = s.value;
    else {
      const ie = F.key === W ? 1 : -1;
      J = J - ie * de * (ve > 100 ? ve / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, J));
  }
  function pe(F) {
    const J = ue(F, e.modelValue);
    J != null && (x.value = false, a("update:modelValue", J));
  }
  return fe(() => e.focused, (F) => {
    F && (x.value = false);
  }), ae(() => {
    const F = he(y.value ? 100 - e.position : e.position, "%"), J = b.value === "always" || b.value === true && e.focused || b.value === "hover" && (C.value || e.focused && !x.value);
    return p("div", { class: ne(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && _.value }, e.class, i.value]), style: ge([{ "--v-slider-thumb-position": F, "--v-slider-thumb-size": he(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!S.value, "aria-orientation": m.value, onKeydown: S.value ? void 0 : pe, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, x.value = true;
    } }, [p("div", { class: ne(["v-slider-thumb__surface", D.value, P.value]), style: ge(M.value) }, null), nt(p("div", { class: ne(["v-slider-thumb__ripple", D.value]), style: ge(M.value) }, null), [[Nt, e.ripple, null, { circle: true, center: true }]]), k(od, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [nt(p("div", { class: "v-slider-thumb__label-container" }, [p("div", { class: ne(["v-slider-thumb__label", E.value]), style: ge(T.value) }, [p("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? w.value : 1)]), p("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Hn, J]])];
    } })]);
  }), {};
} }), OE = z({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...we() }, "VSliderTrack"), pp = te()({ name: "VSliderTrack", props: OE(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = Me(Od);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: b, indexFromEnd: m } = a, { roundedClasses: g } = ct(i), { backgroundColorClasses: h, backgroundColorStyles: S } = Ye(c), { backgroundColorClasses: V, backgroundColorStyles: _ } = Ye(u), w = I(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), y = I(() => f.value ? "height" : "width"), C = I(() => ({ [w.value]: "0%", [y.value]: "100%" })), x = I(() => e.stop - e.start), A = I(() => ({ [w.value]: he(e.start, "%"), [y.value]: he(x.value, "%") })), P = I(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((M, E) => {
    var _a3;
    const T = M.value !== v.value && M.value !== b.value ? he(M.position, "%") : void 0;
    return p("div", { key: M.value, class: ne(["v-slider-track__tick", { "v-slider-track__tick--filled": M.position >= e.start && M.position <= e.stop, "v-slider-track__tick--first": M.value === v.value, "v-slider-track__tick--last": M.value === b.value }]), style: { [w.value]: T } }, [(M.label || n["tick-label"]) && p("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: M, index: E })) ?? M.label])]);
  }) : []);
  return ae(() => p("div", { class: ne(["v-slider-track", g.value, e.class]), style: ge([{ "--v-slider-track-size": he(d.value), "--v-slider-tick-size": he(s.value) }, e.style]) }, [p("div", { class: ne(["v-slider-track__background", V.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ..._.value } }, null), p("div", { class: ne(["v-slider-track__fill", h.value]), style: { ...A.value, ...S.value } }, null), r.value && p("div", { class: ne(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), LE = z({ ...Oi(), ...gp(), ..._a(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), qu = te()({ name: "VSlider", inheritAttrs: false, props: LE(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = Z(), i = Z(), { rtlClasses: r } = It(), s = yp(e), u = Ce(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: b, onSliderTouchstart: m, trackContainerRef: g, position: h, hasLabels: S, disabled: V, readonly: _, noKeyboard: w } = bp({ props: e, steps: s, onSliderStart: () => {
    !V.value && !_.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: D } = P;
    const M = v(D);
    !V.value && !_.value && (u.value = M), a("end", M);
  }, onSliderMove: (P) => {
    let { value: D } = P;
    !V.value && !_.value && (u.value = v(D));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: y, focus: C, blur: x } = Ca(e), A = I(() => h(u.value));
  return ae(() => {
    const P = Gt.filterProps(e), [D, M] = ea(l), E = !!(e.label || n.label || n.prepend);
    return k(Gt, K({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || S.value, "v-slider--focused": y.value, "v-slider--pressed": f.value, "v-slider--disabled": V.value }, r.value, e.class], style: e.style }, P, D, { focused: y.value }), { ...n, prepend: E ? (T) => {
      var _a3, _b2;
      return p(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? k(ko, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: O, messagesId: W } = T;
      return p("div", { class: "v-slider__container", onMousedown: _.value ? void 0 : b, onTouchstartPassive: _.value ? void 0 : m }, [p("input", { id: O.value, name: e.name || O.value, disabled: V.value, readonly: _.value, tabindex: "-1", value: u.value }, null), k(pp, { ref: g, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), k(Ku, K({ ref: o, "aria-describedby": W.value, focused: y.value, noKeyboard: w.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (H) => u.value = H, position: A.value, elevation: e.elevation, onFocus: C, onBlur: x, ripple: e.ripple, name: e.name }, M), { "thumb-label": n["thumb-label"] })]);
    } });
  }), At({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Sp = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: _e, default: "$eyeDropper" }, ...we() }, "VColorPickerPreview"), FE = Qt({ name: "VColorPickerPreview", props: Sp(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Xe(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  yo(() => l.abort());
  async function i() {
    if (!nv || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = Pi(hn(s.sRGBHex));
      n("update:color", { ...e.color ?? Gl, ...u });
    } catch {
    }
  }
  return ae(() => {
    var _a3, _b2;
    return p("div", { class: ne(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ge(e.style) }, [nv && !e.hideEyeDropper && p("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [k($e, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), p("div", { class: "v-color-picker-preview__dot" }, [p("div", { style: { background: Gg(e.color ?? Gl) } }, null)]), p("div", { class: "v-color-picker-preview__sliders" }, [k(qu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Gl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && k(qu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Gl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), NE = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, $E = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, HE = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, zE = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, WE = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, jE = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, GE = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, UE = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, YE = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, KE = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, qE = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, XE = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, ZE = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, JE = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, QE = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, eD = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, tD = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, nD = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, aD = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, lD = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, oD = { red: NE, pink: $E, purple: HE, deepPurple: zE, indigo: WE, blue: jE, lightBlue: GE, cyan: UE, teal: YE, green: KE, lightGreen: qE, lime: XE, yellow: ZE, amber: JE, orange: QE, deepOrange: eD, brown: tD, blueGrey: nD, grey: aD, shades: lD }, iD = z({ swatches: { type: Array, default: () => rD(oD) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...we() }, "VColorPickerSwatches");
function rD(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const sD = Qt({ name: "VColorPickerSwatches", props: iD(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ae(() => p("div", { class: ne(["v-color-picker-swatches", e.class]), style: ge([{ maxHeight: he(e.maxHeight) }, e.style]) }, [p("div", null, [e.swatches.map((o) => p("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = hn(i), s = Pi(r), u = jg(r);
    return p("div", { class: ne(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [p("div", { style: { background: u } }, [e.color && Bt(e.color, s) ? k(Ge, { size: "x-small", icon: "$success", color: nC(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), uD = Sa("v-picker-title"), ss = z({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...xd() }, "VPicker"), mo = te()({ name: "VPicker", props: ss(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ye(() => e.color);
  return ae(() => {
    const o = ja.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return k(ja, K(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && p("div", { key: "header", class: ne(["v-picker__header-wrapper", a.value]), style: ge([l.value]) }, [i && k(uD, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && p("div", { class: "v-picker__header" }, [n.header()])]), p("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && k(Ee, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [p("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), cD = z({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(fl).includes(e) }, modes: { type: Array, default: () => Object.keys(fl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(fl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...ss({ hideHeader: true }), ...on(Sp(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), dD = Qt({ name: "VColorPicker", props: cD(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "mode"), l = Z(null), o = Ce(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = Pi(hn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? VE(c, e.modelValue) : null), i = I(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = It();
  let s = true;
  fe(o, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (l.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, l.value = c.h, o.value = c;
  };
  return go(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), vt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), ae(() => {
    const c = mo.filterProps(e);
    return k(mo, K(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Gg({ ...i.value ?? Gl, a: 1 }) }, e.style] }), { ...n, default: () => p(be, null, [!e.hideCanvas && k(_E, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && p("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && k(FE, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && k(ME, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && k(sD, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), fD = z({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...Dl({ filterKeys: ["title"] }), ...Ad({ hideNoData: true, returnObject: true }), ...Oe(Ni({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), vD = te()({ name: "VCombobox", props: fD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Xe(), o = Z(), i = ce(false), r = ce(true), s = ce(false), u = Z(), c = Z(), d = ce(-1);
  let f = false;
  const { items: v, transformIn: b, transformOut: m } = gd(e), { textColorClasses: g, textColorStyles: h } = Rt(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: S } = Ri(e), V = Ce(e, "modelValue", [], (X) => b(lt(X)), (X) => {
    const ye = m(X);
    return e.multiple ? ye : ye[0] ?? null;
  }), _ = xo(e), w = B(() => e.closableChips && !_.isReadonly.value && !_.isDisabled.value), y = I(() => !!(e.chips || a.chip)), C = I(() => y.value || !!a.selection), x = ce(!e.multiple && !C.value ? ((_a3 = V.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = ce(null), P = I({ get: () => x.value, set: async (X) => {
    var _a4;
    if (x.value = X ?? "", X === null || X === "" && !e.multiple && !C.value ? V.value = [] : !e.multiple && !C.value && (V.value = [Tn(e, X)], Ae(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), X && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const ye = Se(X);
      ye.length > 1 && (me(ye), x.value = "");
    }
    X || (d.value = -1), r.value = !X;
  } }), D = I(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? V.value.length : P.value.length), { filteredItems: M, getMatches: E } = Ml(e, v, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = I(() => e.hideSelected && A.value === null ? M.value.filter((X) => !V.value.some((ye) => ye.value === X.value)) : M.value), O = I(() => e.hideNoData && !T.value.length || _.isReadonly.value || _.isDisabled.value), W = Ce(e, "menu"), H = I({ get: () => W.value, set: (X) => {
    var _a4;
    W.value && !X && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || X && O.value || (W.value = X);
  } }), { menuId: Q, ariaExpanded: ee, ariaControls: $ } = Pd(e, H);
  fe(x, (X) => {
    f ? Ae(() => f = false) : i.value && !H.value && (H.value = true), n("update:search", X);
  }), fe(V, (X) => {
    var _a4;
    !e.multiple && !C.value && (x.value = ((_a4 = X[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const q = I(() => V.value.map((X) => X.value)), j = I(() => T.value.find((X) => X.type === "item" && !X.props.disabled)), N = I(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = j.value) == null ? void 0 : _a4.title)) && T.value.length > 0 && !r.value && !s.value;
  }), G = Z(), ue = Z(), pe = Z(), F = _d(G, o), { onTabKeydown: J } = Id({ groups: [{ type: "element", contentRef: ue }, { type: "list", contentRef: G, displayItemsCount: () => T.value.length }, { type: "element", contentRef: pe }], onLeave: () => {
    var _a4;
    H.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function de(X) {
    f = true, Ae(() => f = false), e.openOnClear && (H.value = true);
  }
  function ve() {
    O.value || (H.value = true);
  }
  function ie(X) {
    O.value || (i.value && (X.preventDefault(), X.stopPropagation()), H.value = !H.value);
  }
  function R(X) {
    var _a4, _b2;
    X.key === "Tab" && J(X), ((_a4 = G.value) == null ? void 0 : _a4.$el.contains(X.target)) && (oo(X) || X.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function L(X) {
    var _a4, _b2, _c2, _d2;
    if (_x(X) || _.isReadonly.value) return;
    const ye = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, ke = V.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (H.value = true), ["Escape"].includes(X.key) && (H.value = false), N.value && ["Enter", "Tab"].includes(X.key) && j.value && !V.value.some((xe) => {
      let { value: Ve } = xe;
      return Ve === j.value.value;
    }) && re(j.value), X.key === "ArrowDown" && N.value && ((_b2 = G.value) == null ? void 0 : _b2.focus("next")), X.key === "Enter" && P.value && (re(Tn(e, P.value), true, true), C.value && (x.value = "")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && C.value && V.value.length > 0 && !P.value) return re(V.value[0], false);
      if (~d.value) {
        X.preventDefault();
        const xe = d.value;
        re(V.value[d.value], false), d.value = xe >= ke - 1 ? ke - 2 : xe;
      } else X.key === "Backspace" && !P.value && (d.value = ke - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (d.value < 0 && ye && ye > 0) return;
      const xe = d.value > -1 ? d.value - 1 : ke - 1;
      V.value[xe] ? d.value = xe : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (X.key === "ArrowRight") {
      if (d.value < 0) return;
      const xe = d.value + 1;
      V.value[xe] ? d.value = xe : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && oo(X) && (d.value = -1);
  }
  function U(X) {
    var _a4;
    const ye = ((_a4 = X == null ? void 0 : X.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", ke = Se(ye);
    ke.length > 1 && e.multiple && (X.preventDefault(), me(ke));
  }
  function le() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function oe() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function re(X) {
    let ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const xe = V.value.findIndex((Be) => (e.valueComparator || Bt)(Be.value, X.value)), Ve = ye ?? !~xe;
      if (~xe) {
        const Be = Ve ? [...V.value, X] : [...V.value];
        Be.splice(xe, 1), V.value = Be;
      } else Ve && (V.value = [...V.value, X]);
      e.clearOnSelect && (P.value = "");
    } else {
      const xe = ye !== false;
      V.value = xe ? [X] : [], (!r.value || e.alwaysFilter) && x.value && (A.value = x.value), x.value = xe && !C.value ? X.title : "", Ae(() => {
        H.value = ke, r.value = true;
      });
    }
  }
  function Se(X) {
    const ke = [`
`, ...e.delimiters ?? []].map(hr).join("|");
    return X.split(new RegExp(`(?:${ke})+`));
  }
  async function me(X) {
    for (let ye of X) ye = ye.trim(), ye && (re(Tn(e, ye)), await Ae());
  }
  function Y(X) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function se(X) {
    s.value = false;
  }
  function Ie(X) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (i.value = true);
  }
  return fe(i, (X, ye) => {
    if (!(X || X === ye) && (d.value = -1, H.value = false, P.value)) {
      if (e.multiple) {
        re(Tn(e, P.value));
        return;
      }
      if (!C.value) return;
      V.value.some((ke) => {
        let { title: xe } = ke;
        return xe === P.value;
      }) ? x.value = "" : re(Tn(e, P.value));
    }
  }), fe(H, (X) => {
    if (!e.hideSelected && X && V.value.length && r.value) {
      const ye = T.value.findIndex((ke) => V.value.some((xe) => (e.valueComparator || Bt)(xe.value, ke.value)));
      qe && window.requestAnimationFrame(() => {
        var _a4;
        ye >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(ye));
      });
    }
    X && (A.value = null);
  }), fe(v, (X, ye) => {
    H.value || i.value && !ye.length && X.length && (H.value = true);
  }), ae(() => {
    const X = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ye = V.value.length > 0, ke = Jn.filterProps(e), xe = { search: P, filteredItems: M.value };
    return k(Jn, K({ ref: o }, ke, { modelValue: P.value, "onUpdate:modelValue": (Ve) => P.value = Ve, focused: i.value, "onUpdate:focused": (Ve) => i.value = Ve, validationValue: V.externalValue, counterValue: D.value, dirty: ye, class: ["v-combobox", { "v-combobox--active-menu": H.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: _.isReadonly.value, placeholder: ye ? void 0 : e.placeholder, "onClick:clear": de, "onMousedown:control": ve, onKeydown: L, onPaste: U, onBlur: Ie, "aria-expanded": ee.value, "aria-controls": $.value }), { ...a, default: (Ve) => {
      let { id: Be } = Ve;
      return p(be, null, [k(vo, K({ id: Q.value, ref: u, modelValue: H.value, "onUpdate:modelValue": (je) => H.value = je, activator: "parent", contentClass: "v-combobox__content", disabled: O.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: le, onAfterLeave: oe }, e.menuProps), { default: () => [k(ja, { onFocusin: Y, onKeydown: R }, { default: () => [a["menu-header"] && p("header", { ref: ue }, [a["menu-header"](xe)]), X && k(fo, K({ key: "combobox-list", ref: G, filterable: true, selected: q.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (je) => je.preventDefault(), selectable: !!T.value.length, onFocusout: se, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Be.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, F, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? k(Vn, { key: "no-data", title: l(e.noDataText) }, null)), k(ns, { ref: c, renderless: true, items: T.value, itemKey: "value" }, { default: (je) => {
          var _a5, _b3, _c3;
          let { item: Le, index: dt, itemRef: at } = je;
          const dn = K(Le.props, { ref: at, key: Le.value, active: N.value && Le === j.value ? true : void 0, onClick: () => re(Le, null), "aria-posinset": dt + 1, "aria-setsize": T.value.length });
          return Le.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Le.raw, index: dt })) ?? k(yn, K(Le.props, { key: `divider-${dt}` }), null) : Le.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Le.raw, index: dt })) ?? k(Co, K(Le.props, { key: `subheader-${dt}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Le, index: dt, props: dn })) ?? k(Vn, K(dn, { role: "option" }), { prepend: (Ia) => {
            let { isSelected: it } = Ia;
            return p(be, null, [e.multiple && !e.hideSelected ? k(Nn, { key: Le.value, modelValue: it, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (kn) => kn.preventDefault() }, null) : void 0, Le.props.prependAvatar && k(pn, { image: Le.props.prependAvatar }, null), Le.props.prependIcon && k(Ge, { icon: Le.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Le.title : Vd("v-combobox", Le.title, (_a6 = E(Le)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && p("footer", { ref: pe }, [a["menu-footer"](xe)])] })] }), V.value.map((je, Le) => {
        function dt(it) {
          it.stopPropagation(), it.preventDefault(), re(je, false);
        }
        const at = K(ba.filterProps(je.props), { "onClick:close": dt, onKeydown(it) {
          it.key !== "Enter" && it.key !== " " || (it.preventDefault(), it.stopPropagation(), dt(it));
        }, onMousedown(it) {
          it.preventDefault(), it.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), dn = y.value ? !!a.chip : !!a.selection, Ia = dn ? zr(y.value ? a.chip({ item: je, index: Le, props: at }) : a.selection({ item: je, index: Le })) : void 0;
        if (!(dn && !Ia)) return p("div", { key: je.value, class: ne(["v-combobox__selection", Le === d.value && ["v-combobox__selection--selected", g.value]]), style: ge(Le === d.value ? h.value : {}) }, [y.value ? a.chip ? k(Ee, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: je.title } } }, { default: () => [Ia] }) : k(ba, K({ key: "chip", closable: w.value, size: "small", text: je.title, disabled: je.props.disabled }, at), null) : Ia ?? p("span", { class: "v-combobox__selection-text" }, [je.title, e.multiple && Le < V.value.length - 1 && p("span", { class: "v-combobox__selection-comma" }, [Et(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ve = arguments.length, Be = new Array(Ve), je = 0; je < Ve; je++) Be[je] = arguments[je];
      return p(be, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Be), (!e.hideNoData || e.items.length) && e.menuIcon ? k(Ge, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ie, onClick: Hr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && k(S, { key: "append-icon", name: "appendInner", color: Be[0].iconColor.value }, null)]);
    } });
  }), At({ isFocused: i, isPristine: r, menu: H, search: P, selectionIndex: d, filteredItems: M, select: re }, o);
} }), mD = z({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), hD = te()({ name: "VConfirmEdit", props: mD(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = Z();
  ut(() => {
    o.value = structuredClone(cv(l.value));
  });
  const { t: i } = Xe(), r = I(() => Bt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = I(() => s("save")), c = I(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(cv(l.value)), n("cancel");
  }
  function v(m) {
    return p(be, null, [k($e, K({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), k($e, K({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let b = false;
  return ae(() => {
    var _a3;
    return p(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return b = true, v;
    } }), !e.hideActions && !b && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), wp = z({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), kp = Symbol.for("vuetify:datatable:expanded");
function us(e) {
  const t = B(() => e.expandOnClick), n = Ce(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = Pe(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => Pe(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = Pe(r.value);
    return [...n.value].some((u) => Pe(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return Ze(kp, i), i;
}
function xp() {
  const e = Me(kp);
  if (!e) throw new Error("foo");
  return e;
}
const Ld = z({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Cp = Symbol.for("vuetify:data-table-group");
function Fd(e) {
  return { groupBy: Ce(e, "groupBy") };
}
function cs(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = Z(/* @__PURE__ */ new Set()), o = I(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
  function i(c) {
    return l.value.has(c.id);
  }
  function r(c) {
    const d = new Set(l.value);
    i(c) ? d.delete(c.id) : d.add(c.id), l.value = d;
  }
  function s(c) {
    function d(f) {
      const v = [];
      for (const b of f.items) "type" in b && b.type === "group" ? v.push(...d(b)) : v.push(b);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return Ze(Cp, u), u;
}
function _p() {
  const e = Me(Cp);
  if (!e) throw new Error("Missing group!");
  return e;
}
function gD(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = hl(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Ip(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = gD(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? Ip(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Vp(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...Vp(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function ds(e, t, n, a) {
  const l = I(() => t.value.length ? Ip(tt(e), t.value.map((i) => i.key)) : []), o = I(() => t.value.length ? Vp(l.value, n.value, tt(a)) : tt(e));
  return { groups: l, flatItems: o };
}
function fs(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = wt("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  fe(r, (u) => {
    Bt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const Nd = z({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Pp = Symbol.for("vuetify:data-table-pagination");
function $d(e) {
  const t = Ce(e, "page", void 0, (a) => Number(a ?? 1)), n = Ce(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function Hd(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = I(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = I(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = I(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  fe([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = Ke(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = Ke(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = Ke(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return Ze(Pp, d), d;
}
function yD() {
  const e = Me(Pp);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Ap(e) {
  const t = wt("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = I(() => o.value <= 0 ? tt(n) : tt(n).slice(a.value, l.value));
  return fe(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function bD(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = tt(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = I(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((g) => g.type === "group" && g.id === d), b = o.value.findIndex((g) => g.type === "group" && g.id === f), m = o.value.findIndex((g, h) => h > b && g.type === "group" && g.depth === 0);
      return o.value.slice(v, m === -1 ? void 0 : m);
    });
    return { pageCount: s, setItemsPerPage: u, paginatedItems: c };
  }
  if (l === "any") {
    const { flatItems: o } = a(t), { paginatedItems: i, pageCount: r, setItemsPerPage: s } = n(o);
    return { pageCount: r, setItemsPerPage: s, paginatedItems: i };
  }
  throw new Error(`Unrecognized pagination target ${l}`);
}
const pD = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, Tp = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return Tp.select({ items: n, value: t, selected: a });
} }, SD = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, Ep = z({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Dp = Symbol.for("vuetify:data-table-selection");
function vs(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ce(e, "modelValue", e.modelValue, (S) => {
    const V = e.valueComparator;
    return V ? new Set(lt(S).map((_) => {
      var _a3;
      return ((_a3 = n.value.find((w) => V(_, w.value))) == null ? void 0 : _a3.value) ?? _;
    })) : new Set(lt(S).map((_) => {
      var _a3, _b2;
      return $a(_) ? ((_a3 = n.value.find((w) => _ === w.value)) == null ? void 0 : _a3.value) ?? _ : ((_b2 = n.value.find((w) => Bt(_, w.value))) == null ? void 0 : _b2.value) ?? _;
    }));
  }, (S) => [...S.values()]), o = I(() => n.value.filter((S) => S.selectable)), i = I(() => tt(a).filter((S) => S.selectable)), r = I(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return pD;
      case "all":
        return SD;
      case "page":
      default:
        return Tp;
    }
  }), s = ce(null);
  function u(S) {
    return lt(S).every((V) => l.value.has(V.value));
  }
  function c(S) {
    return lt(S).some((V) => l.value.has(V.value));
  }
  function d(S, V) {
    const _ = r.value.select({ items: S, value: V, selected: new Set(l.value) });
    l.value = _;
  }
  function f(S, V, _) {
    const w = [], y = tt(a);
    if (V = V ?? y.findIndex((C) => C.value === S.value), e.selectStrategy !== "single" && (_ == null ? void 0 : _.shiftKey) && s.value !== null) {
      const [C, x] = [s.value, V].sort((A, P) => A - P);
      w.push(...y.slice(C, x + 1).filter((A) => A.selectable));
    } else w.push(S), s.value = V;
    d(w, !u([S]));
  }
  function v(S) {
    const V = r.value.selectAll({ value: S, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = V;
  }
  const b = I(() => l.value.size > 0), m = I(() => {
    const S = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!S.length && u(S);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: b, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return Ze(Dp, h), h;
}
function ms() {
  const e = Me(Dp);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Mp = z({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Bp = Symbol.for("vuetify:data-table-sort");
function hs(e) {
  const t = B(() => e.initialSortOrder), n = Ce(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function wD(e, t) {
  if (!gl(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function gs(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, b = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === b ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = b;
    else {
      const { active: m, mode: g } = wD(l.value, c);
      m ? g === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return Ze(Bp, s), s;
}
function Rp() {
  const e = Me(Bp);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function zd(e, t, n, a) {
  const l = Xe();
  return { sortedItems: I(() => {
    var _a3, _b2;
    return n.value.length ? kD(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function kD(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = hl(i[1], c), v = hl(r[1], c), b = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [b, m] = [m, b]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const g = a.sortRawFunctions[c](b, m);
        if (g == null) continue;
        if (u = true, g) return g;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const g = a.sortFunctions[c](f, v);
        if (g == null) continue;
        if (u = true, g) return g;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((g) => g != null ? g.toString().toLocaleLowerCase() : g), f !== v)) return Bo(f) && Bo(v) ? 0 : Bo(f) ? -1 : Bo(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const xD = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function CD(e, t) {
  const n = e.returnObject ? t : St(t, e.itemValue), a = St(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function _D(e, t) {
  const n = [];
  for (const a of t) n.push(CD(e, a));
  return n;
}
function ID(e) {
  return { items: I(() => _D(e, e.items)) };
}
const VD = z({ search: String, loading: Boolean, itemsLength: [Number, String], ...we(), ...xD(), ...Ep(), ...Mp(), ...Nd({ itemsPerPage: 5 }), ...wp(), ...Ld(), ...Dl(), ...Te(), ...wa({ transition: { component: si, hideOnLeave: true } }) }, "VDataIterator"), PD = te()({ name: "VDataIterator", props: VD(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "groupBy"), l = B(() => e.search), { items: o } = ID(e), { filteredItems: i } = Ml(e, o, l, { transform: (G) => G.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = hs(e), { page: d, itemsPerPage: f } = $d(e), { toggleSort: v } = gs({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: b, opened: m, extractRows: g, isGroupOpen: h, toggleGroup: S } = cs({ groupBy: a, sortBy: s }), { sortedItems: V } = zd(e, i, b, { transform: (G) => G.raw }), { flatItems: _ } = ds(V, a, m, false), w = B(() => !Bo(e.itemsLength)), y = B(() => w.value ? Number(e.itemsLength) : _.value.length), { startIndex: C, stopIndex: x, pageCount: A, prevPage: P, nextPage: D, setItemsPerPage: M, setPage: E } = Hd({ page: d, itemsPerPage: f, itemsLength: y }), T = ce([]), O = I(() => w.value ? _.value : T.value);
  Ft(() => !w.value, () => {
    const { paginatedItems: G } = Ap({ items: _, startIndex: C, stopIndex: x, itemsPerPage: f });
    ut(() => {
      T.value = G.value;
    });
  });
  const W = I(() => g(O.value)), { isSelected: H, select: Q, selectAll: ee, toggleSelect: $ } = vs(e, { allItems: o, currentPage: W }), { isExpanded: q, toggleExpand: j } = us(e);
  fs({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const N = I(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: v, prevPage: P, nextPage: D, setPage: E, setItemsPerPage: M, isSelected: H, select: Q, selectAll: ee, toggleSelect: $, isExpanded: q, toggleExpand: j, isGroupOpen: h, toggleGroup: S, items: W.value, itemsCount: i.value.length, groupedItems: O.value }));
  return ae(() => k(e.tag, { class: ne(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, N.value), k(Jt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? k(Di, { key: "loader", name: "v-data-iterator", active: true }, { default: (G) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, G);
      } }) : p("div", { key: "items" }, [O.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, N.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, N.value)];
  } })), {};
} });
function AD() {
  const e = Z([]);
  Mh(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const TD = z({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: _e, default: "$first" }, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, lastIcon: { type: _e, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Yt(), ...we(), ...mt(), ...Ct(), ...ot(), ...aa(), ...Te({ tag: "nav" }), ...We(), ...wn({ variant: "text" }) }, "VPagination"), Xu = te()({ name: "VPagination", props: TD(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ce(e, "modelValue"), { t: o, n: i } = Xe(), { isRtl: r } = It(), { themeClasses: s } = Ue(e), { width: u } = cn(), c = ce(-1);
  vt(void 0, { scoped: true });
  const { resizeRef: d } = In((x) => {
    if (!x.length) return;
    const { target: A, contentRect: P } = x[0], D = A.querySelector(".v-pagination__list > *");
    if (!D) return;
    const M = P.width, E = D.offsetWidth + parseFloat(getComputedStyle(D).marginRight) * 2;
    c.value = m(M, E);
  }), f = I(() => parseInt(e.length, 10)), v = I(() => parseInt(e.start, 10)), b = I(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(x, A) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((x - A * P) / A).toFixed(2))));
  }
  const g = I(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (b.value <= 0) return [];
    if (b.value === 1) return [l.value];
    if (f.value <= b.value) return Yn(f.value, v.value);
    const x = b.value % 2 === 0, A = x ? b.value / 2 : Math.floor(b.value / 2), P = x ? A : A + 1, D = f.value - A;
    if (P - l.value >= 0) return [...Yn(Math.max(1, b.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - D >= (x ? 1 : 0)) {
      const M = b.value - 1, E = f.value - M + v.value;
      return [v.value, e.ellipsis, ...Yn(M, E)];
    } else {
      const M = Math.max(1, b.value - 2), E = M === 1 ? l.value : l.value - Math.ceil(M / 2) + v.value;
      return [v.value, e.ellipsis, ...Yn(M, E), e.ellipsis, f.value];
    }
  });
  function h(x, A, P) {
    x.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: S, updateRef: V } = AD();
  vt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const _ = I(() => g.value.map((x, A) => {
    const P = (D) => V(D, A);
    if (typeof x == "string") return { isActive: false, key: `ellipsis-${A}`, page: x, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const D = x === l.value;
      return { isActive: D, key: x, page: i(x), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: D ? e.activeColor : e.color, "aria-current": D, "aria-label": o(D ? e.currentPageAriaLabel : e.pageAriaLabel, x), onClick: (M) => h(M, x) } };
    }
  })), w = I(() => {
    const x = !!e.disabled || l.value <= v.value, A = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: x, "aria-label": o(e.firstAriaLabel), "aria-disabled": x } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: x, "aria-label": o(e.previousAriaLabel), "aria-disabled": x }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: A, "aria-label": o(e.nextAriaLabel), "aria-disabled": A }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: A, "aria-label": o(e.lastAriaLabel), "aria-disabled": A } : void 0 };
  });
  function y() {
    var _a3;
    const x = l.value - v.value;
    (_a3 = S.value[x]) == null ? void 0 : _a3.$el.focus();
  }
  function C(x) {
    x.key === hu.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ae(y)) : x.key === hu.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ae(y));
  }
  return ae(() => k(e.tag, { ref: d, class: ne(["v-pagination", s.value, e.class]), style: ge(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [p("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && p("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(w.value.first) : k($e, K({ _as: "VPaginationBtn" }, w.value.first), null)]), p("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(w.value.prev) : k($e, K({ _as: "VPaginationBtn" }, w.value.prev), null)]), _.value.map((x, A) => p("li", { key: x.key, class: ne(["v-pagination__item", { "v-pagination__item--is-active": x.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(x) : k($e, K({ _as: "VPaginationBtn" }, x.props), { default: () => [x.page] })])), p("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(w.value.next) : k($e, K({ _as: "VPaginationBtn" }, w.value.next), null)]), e.showFirstLastPage && p("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(w.value.last) : k($e, K({ _as: "VPaginationBtn" }, w.value.last), null)])])] })), {};
} }), Wd = z({ color: String, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, firstIcon: { type: _e, default: "$first" }, lastIcon: { type: _e, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), hi = te()({ name: "VDataTableFooter", props: Wd(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Xe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = yD(), d = I(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ae(() => {
    var _a3;
    const f = Xu.filterProps(e);
    return p("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [a(e.itemsPerPageText)]), k(Td, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [k(Xu, K({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Oe(f, ["color"])), null)])]);
  }), {};
} }), gi = rC({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return k(a, { class: ne(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: he(e.height), width: he(e.width), maxWidth: he(e.maxWidth), left: l === "start" ? he(e.fixedOffset || null) : void 0, right: l === "end" ? he(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? he(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), ED = z({ headers: Array }, "DataTable-header"), Op = Symbol.for("vuetify:data-table-headers"), Lp = { title: "", sortable: false }, DD = { ...Lp, width: 48 };
function MD() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({ element: n, priority: 0 }));
  return { enqueue: (n, a) => {
    let l = false;
    for (let o = 0; o < t.length; o++) if (t[o].priority > a) {
      t.splice(o, 0, { element: n, priority: a }), l = true;
      break;
    }
    l || t.push({ element: n, priority: a });
  }, size: () => t.length, count: () => {
    let n = 0;
    if (!t.length) return 0;
    const a = Math.floor(t[0].priority);
    for (let l = 0; l < t.length; l++) Math.floor(t[l].priority) === a && (n += 1);
    return n;
  }, dequeue: () => t.shift() };
}
function Zu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) Zu(n, t);
  return t;
}
function Fp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Fp(n.children, t);
  return t;
}
function BD(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Lp;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return DD;
  }
}
function jd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => jd(n, t + 1))) : t;
}
function RD(e) {
  let t = false;
  function n(o, i) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (o) if (r !== "none" && (o.fixed = r), o.fixed === true && (o.fixed = "start"), o.fixed === i) if (o.children) if (i === "start") for (let s = o.children.length - 1; s >= 0; s--) n(o.children[s], i, i);
    else for (let s = 0; s < o.children.length; s++) n(o.children[s], i, i);
    else !t && i === "start" ? o.lastFixed = true : !t && i === "end" ? o.firstFixedEnd = true : isNaN(Number(o.width)) ? (`${o.key}`, void 0) : o.minWidth = Math.max(Number(o.width) || 0, Number(o.minWidth) || 0), t = true;
    else if (o.children) if (i === "start") for (let s = o.children.length - 1; s >= 0; s--) n(o.children[s], i);
    else for (let s = 0; s < o.children.length; s++) n(o.children[s], i);
    else t = false;
  }
  for (let o = e.length - 1; o >= 0; o--) n(e[o], "start");
  for (let o = 0; o < e.length; o++) n(e[o], "end");
  let a = 0;
  for (let o = 0; o < e.length; o++) a = Np(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = $p(e[o], l);
}
function Np(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Np(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function $p(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = $p(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function OD(e, t) {
  const n = [];
  let a = 0;
  const l = MD(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - jd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? Zu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => Zu(i)).flat(), headers: n };
}
function Hp(e) {
  const t = [];
  for (const n of e) {
    const a = { ...BD(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? Hp(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function Gd(e, t) {
  const n = Z([]), a = Z([]), l = Z({}), o = Z({}), i = Z({});
  ut(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Qn(m) }))).slice(), c = Fp(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Hp(u);
    RD(d);
    const f = Math.max(...d.map((m) => jd(m))) + 1, v = OD(d, f);
    n.value = v.headers, a.value = v.columns;
    const b = v.headers.flat(1);
    for (const m of b) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return Ze(Op, r), r;
}
function ys() {
  const e = Me(Op);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const zp = z({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: _e }, sortAscIcon: { type: _e, default: "$sortAsc" }, sortDescIcon: { type: _e, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...mt(), ..._l(), ...Jr() }, "VDataTableHeaders"), Sl = te()({ name: "VDataTableHeaders", props: zp(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Xe(), { toggleSort: l, sortBy: o, isSorted: i } = Rp(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = ms(), { columns: d, headers: f } = ys(), { loaderClasses: v } = Ei(e);
  function b(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const D = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: D === "start" ? he(A.fixedOffset) : void 0, right: D === "end" ? he(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(A, P) {
    A.key === "Enter" && !e.disableSort && l(P, A);
  }
  function g(A) {
    var _a3;
    switch ((_a3 = o.value.find((D) => D.key === A.key)) == null ? void 0 : _a3.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: h, backgroundColorStyles: S } = Ye(() => e.color), { displayClasses: V, mobile: _ } = cn(e), w = I(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: g })), y = I(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, V.value, v.value]), C = (A) => {
    let { column: P, x: D, y: M } = A;
    const E = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, O = K(e.headerProps ?? {}, P.headerProps ?? {});
    return k(gi, K({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...y.value], style: { width: he(P.width), minWidth: he(P.minWidth), maxWidth: he(P.maxWidth), ...b(P, M) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: E, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (W) => l(P, W) : void 0, onKeydown: P.sortable ? (W) => m(W, P) : void 0 }, O), { default: () => {
      var _a3;
      const W = `header.${P.key}`, H = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: g };
      return n[W] ? n[W](H) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, H)) ?? (c.value && k(Nn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [P.title]), P.sortable && !e.disableSort && k(Ge, { key: "icon", class: "v-data-table-header__sort-icon", icon: g(P) }, null), e.multiSort && i(P) && p("div", { key: "badge", class: ne(["v-data-table-header__sort-badge", ...h.value]), style: ge(S.value) }, [o.value.findIndex((Q) => Q.key === P.key) + 1])]);
    } });
  }, x = () => {
    const A = I(() => d.value.filter((D) => (D == null ? void 0 : D.sortable) && !e.disableSort)), P = d.value.find((D) => D.key === "data-table-select");
    return k(gi, K({ tag: "th", class: [...y.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [p("div", { class: "v-data-table-header__content" }, [k(Td, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => k(Nn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (D) => {
      var _a3;
      return k(ba, { onClick: ((_a3 = D.item.raw) == null ? void 0 : _a3.sortable) ? () => l(D.item.raw) : void 0, onMousedown: (M) => {
        M.preventDefault(), M.stopPropagation();
      } }, { default: () => [D.item.title, k(Ge, { class: ne(["v-data-table__td-sort-icon", i(D.item.raw) && "v-data-table__td-sort-icon-active"]), icon: g(D.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ae(() => _.value ? p("tr", null, [k(x, null, null)]) : p(be, null, [n.headers ? n.headers(w.value) : f.value.map((A, P) => p("tr", null, [A.map((D, M) => k(C, { column: D, x: M, y: P }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: d.value.length }, [k(Di, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Wp = z({ item: { type: Object, required: true }, groupCollapseIcon: { type: _e, default: "$tableGroupCollapse" }, groupExpandIcon: { type: _e, default: "$tableGroupExpand" }, ...mt() }, "VDataTableGroupHeaderRow"), LD = te()({ name: "VDataTableGroupHeaderRow", props: Wp(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = _p(), { isSelected: i, isSomeSelected: r, select: s } = ms(), { columns: u } = ys(), c = I(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => p("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, b = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: b } })) ?? k(gi, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [k($e, { size: "small", variant: "text", icon: v, onClick: b }, null), p("span", null, [e.item.value]), p("span", null, [Et("("), c.value.length, Et(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((h) => h.selectable), b = v.length > 0 && i(v), m = r(v) && !b, g = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: b, indeterminate: m, "onUpdate:modelValue": g } })) ?? k(gi, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [k(Nn, { density: e.density, disabled: v.length === 0, modelValue: b, indeterminate: m, "onUpdate:modelValue": g }, null)] });
    }
    return "";
  })]);
} }), jp = z({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: _e, default: "$collapse" }, expandIcon: { type: _e, default: "$expand" }, onClick: Lt(), onContextmenu: Lt(), onDblclick: Lt(), ...mt(), ..._l() }, "VDataTableRow"), Ud = te()({ name: "VDataTableRow", props: jp(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = cn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = ms(), { isExpanded: c, toggleExpand: d } = xp(), { toggleSort: f, sortBy: v, isSorted: b } = Rp(), { columns: m } = ys();
  ae(() => p("tr", { class: ne(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((g, h) => {
    const S = e.item, V = `item.${g.key}`, _ = `header.${g.key}`, w = { index: e.index, item: S.raw, internalItem: S, value: hl(S.columns, g.key), column: g, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, y = { column: g, selectAll: u, isSorted: b, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value, column: g }) : e.cellProps, x = typeof g.cellProps == "function" ? g.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value }) : g.cellProps, A = g.key === "data-table-select" || g.key === "data-table-expand", P = g.key === "data-table-group" && g.width === 0 && !g.title;
    return k(gi, K({ align: g.align, indent: g.indent, class: { "v-data-table__td--expanded-row": g.key === "data-table-expand", "v-data-table__td--select-row": g.key === "data-table-select" }, fixed: g.fixed, fixedOffset: g.fixedOffset, fixedEndOffset: g.fixedEndOffset, lastFixed: g.lastFixed, firstFixedEnd: g.firstFixedEnd, maxWidth: l.value ? void 0 : g.maxWidth, noPadding: A, empty: P, nowrap: g.nowrap, width: l.value ? void 0 : g.width }, C, x), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (g.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...w, props: { color: e.color, disabled: !S.selectable, modelValue: o([S]), onClick: ji(() => i(S), ["stop"]) } })) ?? k(Nn, { color: e.color, disabled: !S.selectable, density: e.density, modelValue: o([S]), onClick: ji((M) => i(S, e.index, M), ["stop"]) }, null);
      if (g.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...w, props: { icon: c(S) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: ji(() => d(S), ["stop"]) } })) ?? k($e, { icon: c(S) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: ji(() => d(S), ["stop"]) }, null);
      if (n[V] && !l.value) return n[V](w);
      const D = ze(w.value);
      return l.value ? p(be, null, [p("div", { class: "v-data-table__td-title" }, [((_c2 = n[_]) == null ? void 0 : _c2.call(n, y)) ?? g.title]), p("div", { class: "v-data-table__td-value" }, [((_d2 = n[V]) == null ? void 0 : _d2.call(n, w)) ?? D])]) : D;
    } });
  })]));
} }), Gp = z({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...on(jp(), ["collapseIcon", "expandIcon", "density"]), ...on(Wp(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ..._l() }, "VDataTableRows"), wl = te()({ name: "VDataTableRows", inheritAttrs: false, props: Gp(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = ys(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = xp(), { isSelected: s, toggleSelect: u } = ms(), { toggleGroup: c, isGroupOpen: d } = _p(), { t: f } = Xe(), { mobile: v } = cn(e);
  return ae(() => {
    var _a3, _b2;
    const b = on(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : p(be, null, [e.items.map((m, g) => {
      var _a4, _b3;
      if (m.type === "group") {
        const V = { index: g, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](V) : k(LD, K({ key: `group-header_${m.id}`, item: m }, gn(n, ":groupHeader", () => V), b), a);
      }
      if (m.type === "group-summary") {
        const V = { index: g, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, V)) ?? "";
      }
      const h = { index: m.virtualIndex ?? g, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, S = { ...h, props: K({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: g, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, gn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return p(be, { key: S.props.key }, [a.item ? a.item(S) : k(Ud, S.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), Up = z({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...we(), ...mt(), ...Te(), ...We() }, "VTable"), kl = te()({ name: "VTable", props: Up(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Ue(e), { densityClasses: o } = Ht(e);
  return ae(() => k(e.tag, { class: ne(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? p("div", { class: "v-table__wrapper", style: { height: he(e.height) } }, [p("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), FD = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function ND(e, t, n, a) {
  const l = e.returnObject ? t : St(t, e.itemValue), o = St(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = St(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? St(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function $D(e, t, n) {
  return t.map((a, l) => ND(e, a, l, n));
}
function Yd(e, t) {
  return { items: I(() => $D(e, e.items, t.value)) };
}
const Kd = z({ ...Gp(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...wp(), ...Ld(), ...ED(), ...FD(), ...Ep(), ...Mp(), ...Oe(zp(), ["multiSort", "initialSortOrder"]), ...Up() }, "DataTable"), HD = z({ ...Nd(), ...Kd(), ...Dl(), ...Wd() }, "VDataTable"), zD = te()({ name: "VDataTable", props: HD(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Fd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = hs(e), { page: u, itemsPerPage: c } = $d(e), { disableSort: d } = ho(e), { columns: f, headers: v, sortFunctions: b, sortRawFunctions: m, filterFunctions: g } = Gd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = Yd(e, f), S = B(() => e.search), { filteredItems: V } = Ml(e, h, S, { transform: (ue) => ue.columns, customKeyFilter: g }), { toggleSort: _ } = gs({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: w, opened: y, extractRows: C, isGroupOpen: x, toggleGroup: A } = cs({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = zd(e, V, w, { transform: (ue) => ({ ...ue.raw, ...ue.columns }), sortFunctions: b, sortRawFunctions: m }), D = I(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: M, setItemsPerPage: E, paginatedItems: T } = bD({ pageBy: D, sortedItems: P, paginate: (ue) => {
    const pe = I(() => tt(ue).length), { startIndex: F, stopIndex: J, pageCount: de, setItemsPerPage: ve } = Hd({ page: u, itemsPerPage: c, itemsLength: pe }), { paginatedItems: ie } = Ap({ items: ue, startIndex: F, stopIndex: J, itemsPerPage: c });
    return { paginatedItems: ie, pageCount: de, setItemsPerPage: ve };
  }, group: (ue) => ds(ue, l, y, () => !!a["group-summary"]) }), O = I(() => C(T.value)), { isSelected: W, select: H, selectAll: Q, toggleSelect: ee, someSelected: $, allSelected: q } = vs(e, { allItems: h, currentPage: O }), { isExpanded: j, toggleExpand: N } = us(e);
  fs({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: S }), vt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const G = I(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: M.value, toggleSort: _, setItemsPerPage: E, someSelected: $.value, allSelected: q.value, isSelected: W, select: H, selectAll: Q, toggleSelect: ee, isExpanded: j, toggleExpand: N, isGroupOpen: x, toggleGroup: A, items: O.value.map((ue) => ue.raw), internalItems: O.value, groupedItems: T.value, columns: f.value, headers: v.value }));
  return ae(() => {
    const ue = hi.filterProps(e), pe = Sl.filterProps(Oe(e, ["multiSort"])), F = wl.filterProps(e), J = kl.filterProps(e);
    return k(kl, K({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, J, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, G.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(G.value) : p(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, G.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [k(Sl, K(pe, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, G.value), !e.hideDefaultBody && p("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, G.value), a.body ? a.body(G.value) : k(wl, K(n, F, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, G.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, G.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, G.value)]);
    }, bottom: () => a.bottom ? a.bottom(G.value) : !e.hideDefaultFooter && p(be, null, [k(yn, null, null), k(hi, ue, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), WD = z({ ...Oe(Kd(), ["hideDefaultFooter"]), ...Ld(), ...Bb(), ...Dl() }, "VDataTableVirtual"), jD = te()({ name: "VDataTableVirtual", props: WD(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Fd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = hs(e), { disableSort: u } = ho(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: b } = Gd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Yd(e, c), g = B(() => e.search), { filteredItems: h } = Ml(e, m, g, { transform: (ie) => ie.columns, customKeyFilter: f }), { toggleSort: S } = gs({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: V, opened: _, extractRows: w, isGroupOpen: y, toggleGroup: C } = cs({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: x } = zd(e, h, V, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: v, sortRawFunctions: b }), { flatItems: A } = ds(x, l, _, () => !!a["group-summary"]), P = I(() => w(A.value)), { isSelected: D, select: M, selectAll: E, toggleSelect: T, someSelected: O, allSelected: W } = vs(e, { allItems: P, currentPage: P }), { isExpanded: H, toggleExpand: Q } = us(e), { containerRef: ee, markerRef: $, paddingTop: q, paddingBottom: j, computedItems: N, handleItemResize: G, handleScroll: ue, handleScrollend: pe, calculateVisibleItems: F, scrollToIndex: J } = Rb(e, A), de = I(() => N.value.map((ie) => ({ ...ie.raw, virtualIndex: ie.index })));
  fs({ sortBy: i, page: ce(1), itemsPerPage: ce(-1), groupBy: l, search: g }), vt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const ve = I(() => ({ sortBy: i.value, toggleSort: S, someSelected: O.value, allSelected: W.value, isSelected: D, select: M, selectAll: E, toggleSelect: T, isExpanded: H, toggleExpand: Q, isGroupOpen: y, toggleGroup: C, items: P.value.map((ie) => ie.raw), internalItems: P.value, groupedItems: A.value, columns: c.value, headers: d.value }));
  return ae(() => {
    const ie = Sl.filterProps(Oe(e, ["multiSort"])), R = wl.filterProps(e), L = kl.filterProps(e);
    return k(kl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, L, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, ve.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return p("div", { ref: ee, onScrollPassive: ue, onScrollend: pe, class: "v-table__wrapper", style: { height: he(e.height) } }, [p("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, ve.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [k(Sl, K(ie, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, ve.value), !e.hideDefaultBody && p("tbody", { key: "tbody" }, [p("tr", { ref: $, style: { height: he(q.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, ve.value), k(wl, K(n, R, { items: de.value }), { ...a, item: (U) => k(Mb, { key: U.internalItem.index, renderless: true, "onUpdate:height": (le) => G(U.internalItem.index, le) }, { default: (le) => {
        var _a4;
        let { itemRef: oe } = le;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...U, itemRef: oe })) ?? k(Ud, K(U.props, { ref: oe, key: U.internalItem.index, index: U.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, ve.value), p("tr", { style: { height: he(j.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, ve.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, ve.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, ve.value);
    } });
  }), { calculateVisibleItems: F, scrollToIndex: J };
} }), GD = z({ itemsLength: { type: [Number, String], required: true }, ...Nd(), ...Kd(), ...Wd() }, "VDataTableServer"), UD = te()({ name: "VDataTableServer", props: GD(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Fd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = hs(e), { page: u, itemsPerPage: c } = $d(e), { disableSort: d } = ho(e), f = I(() => parseInt(e.itemsLength, 10)), { columns: v, headers: b } = Gd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Yd(e, v), { toggleSort: g } = gs({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: S, toggleGroup: V, extractRows: _ } = cs({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: w, setItemsPerPage: y } = Hd({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = ds(m, l, h, () => !!a["group-summary"]), { isSelected: x, select: A, selectAll: P, toggleSelect: D, someSelected: M, allSelected: E } = vs(e, { allItems: m, currentPage: m }), { isExpanded: T, toggleExpand: O } = us(e), W = I(() => _(m.value));
  fs({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), Ze("v-data-table", { toggleSort: g, sortBy: i }), vt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const H = I(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: w.value, toggleSort: g, setItemsPerPage: y, someSelected: M.value, allSelected: E.value, isSelected: x, select: A, selectAll: P, toggleSelect: D, isExpanded: T, toggleExpand: O, isGroupOpen: S, toggleGroup: V, items: W.value.map((Q) => Q.raw), internalItems: W.value, groupedItems: C.value, columns: v.value, headers: b.value }));
  ae(() => {
    const Q = hi.filterProps(e), ee = Sl.filterProps(Oe(e, ["multiSort"])), $ = wl.filterProps(e), q = kl.filterProps(e);
    return k(kl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, q, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, H.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(H.value) : p(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, H.value), !e.hideDefaultHeader && p("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [k(Sl, K(ee, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, H.value), !e.hideDefaultBody && p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, H.value), a.body ? a.body(H.value) : k(wl, K(n, $, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, H.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, H.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, H.value)]);
    }, bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && p(be, null, [k(yn, null, null), k(hi, Q, { prepend: a["footer.prepend"] })]) });
  });
} }), YD = z({ fluid: { type: Boolean, default: false }, ...we(), ...kt(), ...Te() }, "VContainer"), KD = te()({ name: "VContainer", props: YD(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = It(), { dimensionStyles: l } = xt(e);
  return ae(() => k(e.tag, { class: ne(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: ge([l.value, e.style]) }, n)), {};
} }), Yp = Gr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Kp = Gr.reduce((e, t) => {
  const n = "offset" + Qn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), qp = Gr.reduce((e, t) => {
  const n = "order" + Qn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Vm = { col: Object.keys(Yp), offset: Object.keys(Kp), order: Object.keys(qp) };
function qD(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const XD = ["auto", "start", "end", "center", "baseline", "stretch"], ZD = z({ cols: { type: [Boolean, String, Number], default: false }, ...Yp, offset: { type: [String, Number], default: null }, ...Kp, order: { type: [String, Number], default: null }, ...qp, alignSelf: { type: String, default: null, validator: (e) => XD.includes(e) }, ...we(), ...Te() }, "VCol"), JD = te()({ name: "VCol", props: ZD(), setup(e, t) {
  let { slots: n } = t;
  const a = I(() => {
    const l = [];
    let o;
    for (o in Vm) Vm[o].forEach((r) => {
      const s = e[r], u = qD(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return $n(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), qd = ["start", "end", "center"], Xp = ["space-between", "space-around", "space-evenly"];
function Xd(e, t) {
  return Gr.reduce((n, a) => {
    const l = e + Qn(a);
    return n[l] = t(), n;
  }, {});
}
const QD = [...qd, "baseline", "stretch"], Zp = (e) => QD.includes(e), Jp = Xd("align", () => ({ type: String, default: null, validator: Zp })), eM = [...qd, ...Xp], Qp = (e) => eM.includes(e), eS = Xd("justify", () => ({ type: String, default: null, validator: Qp })), tM = [...qd, ...Xp, "stretch"], tS = (e) => tM.includes(e), nS = Xd("alignContent", () => ({ type: String, default: null, validator: tS })), Pm = { align: Object.keys(Jp), justify: Object.keys(eS), alignContent: Object.keys(nS) }, nM = { align: "align", justify: "justify", alignContent: "align-content" };
function aM(e, t, n) {
  let a = nM[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const lM = z({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Zp }, ...Jp, justify: { type: String, default: null, validator: Qp }, ...eS, alignContent: { type: String, default: null, validator: tS }, ...nS, ...we(), ...Te() }, "VRow"), oM = te()({ name: "VRow", props: lM(), setup(e, t) {
  let { slots: n } = t;
  const a = I(() => {
    const l = [];
    let o;
    for (o in Pm) Pm[o].forEach((i) => {
      const r = e[i], s = aM(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return $n(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), Ju = Sa("v-spacer", "div", "VSpacer"), aS = z({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, modeIcon: { type: _e, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), Qu = te()({ name: "VDatePickerControls", props: aS(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Xe(), o = I(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = I(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = I(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = I(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = I(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = I(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
  function d() {
    n("click:prev");
  }
  function f() {
    n("click:next");
  }
  function v() {
    n("click:prev-year");
  }
  function b() {
    n("click:next-year");
  }
  function m() {
    n("click:year");
  }
  function g() {
    n("click:month");
  }
  return ae(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, S = k($e, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), V = k($e, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), _ = k($e, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), w = k($e, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: b }, null), y = k($e, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: g }, null), C = k($e, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), x = k($e, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), A = p(be, null, [k($e, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: g }, null), k($e, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: g, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: b }, D = p(be, null, [e.noMonthPicker ? x : A, k(Ju, null, null), p("div", { class: "v-date-picker-controls__month" }, [S, V])]), M = p(be, null, [p("div", { class: "v-date-picker-controls__month" }, [S, y, V]), k(Ju, null, null), p("div", { class: "v-date-picker-controls__year" }, [_, C, w])]);
    return k(Ee, { defaults: h }, { default: () => {
      var _a3;
      return [p("div", { class: ne(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": he(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? p(be, null, [e.controlVariant === "modal" && D, e.controlVariant === "docked" && M])])];
    } });
  }), {};
} }), iM = z({ appendIcon: _e, color: String, header: String, transition: String, onClick: Lt() }, "VDatePickerHeader"), ec = te()({ name: "VDatePickerHeader", props: iM(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return ae(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return p("div", { class: ne(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: ge(o.value), onClick: i }, [a.prepend && p("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && k(Jt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [p("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && p("div", { class: "v-date-picker-header__append" }, [a.append ? k(Ee, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : k($e, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), rM = z({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function sM(e) {
  const t = Cl(), n = Ce(e, "modelValue", [], (m) => lt(m).map((g) => t.date(g))), a = I(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ce(e, "year", void 0, (m) => {
    const g = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), g));
  }, (m) => t.getYear(m)), o = Ce(e, "month", void 0, (m) => {
    const g = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, g);
  }, (m) => t.getMonth(m)), i = I(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((g, h) => e.weekdays.includes((h + m) % 7));
  }), r = I(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), g = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && g.length < h) {
      const S = g[g.length - 1];
      let V = [];
      for (let _ = 1; _ <= h - g.length; _++) V.push(t.addDays(S, _)), _ % 7 === 0 && (m.push(V), V = []);
    }
    return m;
  });
  function s(m, g) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, S) => {
      const V = t.toISO(h), _ = !t.isSameMonth(h, o.value), w = t.isSameDay(h, t.startOfMonth(o.value)), y = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), x = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: _, isDisabled: b(h), isEnd: y, isHidden: _ && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((A) => t.isSameDay(h, A)), isStart: w, isToday: t.isSameDay(h, g), isWeekEnd: S % x === x - 1, isWeekStart: S % x === 0, isoDate: V, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const u = I(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), g = [];
    for (let S = 0; S <= 6; S++) g.push(t.addDays(m, S));
    const h = t.date();
    return s(g, h);
  }), c = I(() => {
    const m = r.value.flat(), g = t.date();
    return s(m, g);
  }), d = I(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = lS(e);
  function b(m) {
    if (e.disabled) return true;
    const g = t.date(m);
    return f.value && t.isBefore(t.endOfDay(g), f.value) || v.value && t.isAfter(g, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), g)) : typeof e.allowedDates == "function" ? !e.allowedDates(g) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function lS(e) {
  const t = Cl(), n = I(() => {
    if (!e.min) return null;
    const i = t.date(e.min);
    return t.isValid(i) ? i : null;
  }), a = I(() => {
    if (!e.max) return null;
    const i = t.date(e.max);
    return t.isValid(i) ? i : null;
  });
  function l(i) {
    return n.value && t.isBefore(i, n.value) ? n.value : a.value && t.isAfter(i, a.value) ? a.value : i;
  }
  function o(i) {
    return (!n.value || t.isAfter(i, n.value)) && (!a.value || t.isBefore(i, a.value));
  }
  return { minDate: n, maxDate: a, clampDate: l, isInAllowedRange: o };
}
const oS = z({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Oe(rM(), ["displayValue"]) }, "VDatePickerMonth"), tc = te()({ name: "VDatePickerMonth", props: oS(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Z(), { t: o } = Xe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = sM(e), c = Cl(), d = ce(), f = ce(), v = ce(false), b = B(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = I(() => {
    const y = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= y;
  });
  fe(i, (y, C) => {
    C && (v.value = c.isBefore(y[0].date, C[0].date));
  });
  function g(y) {
    const C = c.startOfDay(y);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = y, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = d_(c, d.value, f.value);
    }
  }
  function h(y) {
    const C = c.format(y.date, "fullDateWithWeekday"), x = y.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${x}`, C);
  }
  function S(y) {
    const C = r.value.findIndex((x) => c.isSameDay(x, y));
    if (C === -1) r.value = [...r.value, y];
    else {
      const x = [...r.value];
      x.splice(C, 1), r.value = x;
    }
  }
  function V(y) {
    e.multiple === "range" ? g(y) : e.multiple ? S(y) : r.value = [y];
  }
  function _(y) {
    const { events: C, eventColor: x } = e;
    let A, P = [];
    if (Array.isArray(C) ? A = C.includes(y) : C instanceof Function ? A = C(y) || false : C ? A = C[y] || false : A = false, A) A !== true ? P = lt(A) : typeof x == "string" ? P = [x] : typeof x == "function" ? P = lt(x(y)) : Array.isArray(x) ? P = x : typeof x == "object" && x !== null && (P = lt(x[y]));
    else return [];
    return P.length ? P.filter(Boolean).map((D) => typeof D == "string" ? D : "surface-variant") : ["surface-variant"];
  }
  function w(y) {
    const C = _(y);
    return C.length ? p("div", { class: "v-date-picker-month__events" }, [C.map((x) => k(Ob, { dot: true, color: x }, null))]) : null;
  }
  ae(() => p("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && p("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && p("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Et("\xA0")]), s.value.map((y) => p("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [y]))]), k(Jt, { name: b.value }, { default: () => {
    var _a3;
    return [p("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((y) => p("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [y])), i.value.map((y, C) => {
      var _a4;
      const x = { props: { class: "v-date-picker-month__day-btn", color: y.isSelected || y.isToday ? e.color : void 0, disabled: y.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: y.isSelected ? "flat" : y.isToday ? "outlined" : "text", "aria-label": h(y), "aria-current": y.isToday ? "date" : void 0, onClick: () => V(y.date) }, item: y, i: C };
      return m.value && !y.isSelected && (y.isDisabled = true), p("div", { class: ne(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": y.isAdjacent, "v-date-picker-month__day--hide-adjacent": y.isHidden, "v-date-picker-month__day--selected": y.isSelected, "v-date-picker-month__day--week-end": y.isWeekEnd, "v-date-picker-month__day--week-start": y.isWeekStart }]), "data-v-date": y.isDisabled ? void 0 : y.isoDate }, [(e.showAdjacentMonths || !y.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, x)) ?? k($e, x.props, { default: () => [y.localized, w(y.isoDate)] }))]);
    })])];
  } })]));
} }), iS = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), nc = te()({ name: "VDatePickerMonths", props: iS(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Cl(), o = Ce(e, "modelValue"), i = I(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Yn(12).map((u) => {
      const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
      return s = l.getNextMonth(s), { isDisabled: f, text: c, label: d, value: u };
    });
  });
  ut(() => {
    o.value = o.value ?? l.getMonth(l.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return ae(() => p("div", { class: "v-date-picker-months", style: { height: he(e.height) } }, [p("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? k($e, K({ key: "month" }, c), null);
  })])])), {};
} }), rS = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), ac = te()({ name: "VDatePickerYears", props: rS(), directives: { vIntersect: Fn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Cl(), o = Ce(e, "modelValue"), i = ce(false), r = I(() => {
    const f = l.getYear(l.date());
    let v = f - 100, b = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (b = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Yn(b - v + 1, v).map((g) => {
      const h = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: h, value: g, isDisabled: !d(g) };
    });
  });
  ut(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = ti(), u = ti();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const b = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - b.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return ae(() => nt(p("div", { class: "v-date-picker-years", ref: s, style: { height: he(e.height) } }, [p("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const b = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: b })) ?? k($e, K({ key: "month" }, b), null);
  })])]), [[Fn, { handler: c }, null, { once: true }]])), {};
} }), uM = z({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Oe(aS(), ["active", "monthText", "yearText"]), ...oS({ weeksInMonth: "static" }), ...Oe(iS(), ["modelValue"]), ...Oe(rS(), ["modelValue"]), ...ss({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), cM = te()({ name: "VDatePicker", props: uM(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Cl(), { t: o } = Xe(), { rtlClasses: i } = It(), r = Ce(e, "modelValue", void 0, (G) => lt(G).map((ue) => l.date(ue)), (G) => e.multiple ? G : G[0]), s = Ce(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = lS(e), f = I(() => {
    var _a3;
    const G = l.date(), ue = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(G);
    return ue && l.isValid(ue) ? ue : G;
  }), v = B(() => e.headerColor ?? e.color), b = Ce(e, "month"), m = I({ get: () => Number(b.value ?? l.getMonth(l.startOfMonth(f.value))), set: (G) => b.value = G }), g = Ce(e, "year"), h = I({ get: () => Number(g.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (G) => g.value = G }), S = ce(false), V = I(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const G = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && G.split(" ").length === 3 ? G.replace(" ", `
`) : G;
  }), _ = B(() => {
    let G = l.date();
    return G = l.setDate(G, 1), G = l.setMonth(G, m.value), G = l.setYear(G, h.value), G;
  }), w = B(() => l.format(_.value, "monthAndYear")), y = B(() => l.format(_.value, "monthShort")), C = B(() => l.format(_.value, "year")), x = B(() => `date-picker-header${S.value ? "-reverse" : ""}-transition`), A = I(() => {
    if (e.disabled) return true;
    const G = [];
    if (s.value !== "month") G.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ue = l.date();
      if (ue = l.startOfMonth(ue), ue = l.setMonth(ue, m.value), ue = l.setYear(ue, h.value), u.value) {
        const pe = l.addDays(l.startOfMonth(ue), -1), F = l.addDays(l.startOfYear(ue), -1);
        l.isAfter(u.value, pe) && G.push("prev-month"), l.isAfter(u.value, F) && G.push("prev-year");
      }
      if (c.value) {
        const pe = l.addDays(l.endOfMonth(ue), 1), F = l.addDays(l.endOfYear(ue), 1);
        l.isAfter(pe, c.value) && G.push("next-month"), l.isAfter(F, c.value) && G.push("next-year");
      }
    }
    return G;
  }), P = I(() => e.allowedYears || E), D = I(() => e.allowedMonths || T);
  function M(G, ue) {
    const pe = e.allowedDates;
    if (typeof pe != "function") return true;
    const F = 1 + oy(l, G, ue);
    for (let J = 0; J < F; J++) if (pe(l.addDays(G, J))) return true;
    return false;
  }
  function E(G) {
    if (typeof e.allowedDates == "function") {
      const ue = l.parseISO(`${G}-01-01`);
      return M(ue, l.endOfYear(ue));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ue of e.allowedDates) if (l.getYear(l.date(ue)) === G) return true;
      return false;
    }
    return true;
  }
  function T(G) {
    if (typeof e.allowedDates == "function") {
      const ue = String(G + 1).padStart(2, "0"), pe = l.parseISO(`${h.value}-${ue}-01`);
      return M(pe, l.endOfMonth(pe));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ue of e.allowedDates) if (l.getYear(l.date(ue)) === h.value && l.getMonth(l.date(ue)) === G) return true;
      return false;
    }
    return true;
  }
  function O() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, N()), j();
  }
  function W() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, N()), j();
  }
  function H() {
    if (h.value++, c.value) {
      const G = String(m.value + 1).padStart(2, "0"), ue = l.parseISO(`${h.value}-${G}-01`);
      l.isAfter(ue, c.value) && (m.value = l.getMonth(c.value));
    }
    N();
  }
  function Q() {
    if (h.value--, u.value) {
      const G = String(m.value + 1).padStart(2, "0"), ue = l.endOfMonth(l.parseISO(`${h.value}-${G}-01`));
      l.isAfter(u.value, ue) && (m.value = l.getMonth(u.value));
    }
    N();
  }
  function ee() {
    s.value = "month";
  }
  function $() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function q() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function j() {
    s.value === "months" && $();
  }
  function N() {
    s.value === "year" && q();
  }
  return fe(r, (G, ue) => {
    const pe = lt(ue), F = lt(G);
    if (!F.length) return;
    const J = l.date(pe[pe.length - 1]), de = l.date(F[F.length - 1]);
    if (l.isSameDay(J, de)) return;
    const ve = l.getMonth(de), ie = l.getYear(de);
    ve !== m.value && (m.value = ve, j()), ie !== h.value && (h.value = ie, N()), S.value = l.isBefore(J, de);
  }), ae(() => {
    const G = mo.filterProps(e), ue = Oe(Qu.filterProps(e), ["viewMode"]), pe = ec.filterProps(e), F = tc.filterProps(e), J = Oe(nc.filterProps(e), ["modelValue"]), de = Oe(ac.filterProps(e), ["modelValue"]), ve = { color: v.value, header: V.value, transition: x.value };
    return k(mo, K(G, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": he(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? k(Ee, { defaults: { VDatePickerHeader: { ...ve } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, ve)];
    } }) : k(ec, K({ key: "header" }, pe, ve, { onClick: s.value !== "month" ? ee : void 0 }), { prepend: a.prepend, append: a.append }), default: () => p(be, null, [k(Qu, K(ue, { disabled: A.value, viewMode: s.value, text: w.value, monthText: y.value, yearText: C.value, "onClick:next": O, "onClick:prev": W, "onClick:nextYear": H, "onClick:prevYear": Q, "onClick:month": $, "onClick:year": q }), { default: a.controls }), k(si, { hideOnLeave: true }, { default: () => [s.value === "months" ? k(nc, K({ key: "date-picker-months" }, J, { modelValue: m.value, "onUpdate:modelValue": [(ie) => m.value = ie, j], min: u.value, max: c.value, year: h.value, allowedMonths: D.value }), { month: a.month }) : s.value === "year" ? k(ac, K({ key: "date-picker-years" }, de, { modelValue: h.value, "onUpdate:modelValue": [(ie) => h.value = ie, N], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : k(tc, K({ key: "date-picker-month" }, F, { modelValue: r.value, "onUpdate:modelValue": (ie) => r.value = ie, month: m.value, "onUpdate:month": [(ie) => m.value = ie, j], year: h.value, "onUpdate:year": [(ie) => h.value = ie, N], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), dM = z({ actionText: String, bgColor: String, color: String, icon: _e, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...we(), ...kt(), ...aa({ size: void 0 }), ...We() }, "VEmptyState"), fM = te()({ name: "VEmptyState", props: dM(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ye(() => e.bgColor), { dimensionStyles: r } = xt(e), { displayClasses: s } = cn();
  function u(c) {
    n("click:action", c);
  }
  return ae(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), b = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return p("div", { class: ne(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: ge([i.value, r.value, e.style]) }, [b && p("div", { key: "media", class: "v-empty-state__media" }, [a.media ? k(Ee, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : p(be, null, [e.image ? k(ya, { key: "image", src: e.image, height: m }, null) : e.icon ? k(Ge, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && p("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && p("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && p("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: he(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && p("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && p("div", { key: "actions", class: "v-empty-state__actions" }, [k(Ee, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? k($e, { onClick: u }, null)];
    } })])]);
  }), {};
} }), yi = Symbol.for("vuetify:v-expansion-panel"), sS = z({ ...we(), ...wd() }, "VExpansionPanelText"), lc = te()({ name: "VExpansionPanelText", props: sS(), setup(e, t) {
  let { slots: n } = t;
  const a = Me(yi);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = kd(e, a.isSelected);
  return ae(() => k(Xr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [nt(p("div", { class: ne(["v-expansion-panel-text", e.class]), style: ge(e.style) }, [n.default && l.value && p("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Hn, a.isSelected.value]])];
  } })), {};
} }), uS = z({ color: String, expandIcon: { type: _e, default: "$expand" }, collapseIcon: { type: _e, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...we(), ...kt() }, "VExpansionPanelTitle"), oc = te()({ name: "VExpansionPanelTitle", directives: { vRipple: Nt }, props: uS(), setup(e, t) {
  let { slots: n } = t;
  const a = Me(yi);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color), { dimensionStyles: i } = xt(e), r = I(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ae(() => {
    var _a3;
    return nt(p("button", { class: ne(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: ge([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [p("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && k(Ee, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [p("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? k(Ge, null, null)])];
    } })]), [[Nt, e.ripple]]);
  }), {};
} }), cS = z({ title: String, text: String, bgColor: String, ...Ct(), ...Tl(), ...ot(), ...Te(), ...uS(), ...sS() }, "VExpansionPanel"), vM = te()({ name: "VExpansionPanel", props: cS(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ha(e, yi), { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.bgColor), { elevationClasses: i } = Pt(e), { roundedClasses: r } = ct(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = I(() => a.group.items.value.reduce((f, v, b) => (a.group.selected.value.includes(v.id) && f.push(b), f), [])), c = I(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = I(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return Ze(yi, a), ae(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), b = oc.filterProps(e), m = lc.filterProps(e);
    return k(e.tag, { class: ne(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [p("div", { class: ne(["v-expansion-panel__shadow", ...i.value]) }, null), k(Ee, { defaults: { VExpansionPanelTitle: { ...b }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && k(oc, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && k(lc, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), mM = ["default", "accordion", "inset", "popout"], hM = z({ flat: Boolean, ...Al(), ...on(cS(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...We(), ...we(), ...Te(), variant: { type: String, default: "default", validator: (e) => mM.includes(e) } }, "VExpansionPanels"), gM = te()({ name: "VExpansionPanels", props: hM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Ka(e, yi), { themeClasses: o } = Ue(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return vt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), ae(() => k(e.tag, { class: ne(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), yM = z({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Oe(Qr({ active: true }), ["location", "spaced"]), ...Il(), ...na(), ...wa({ transition: "fab-transition" }) }, "VFab"), bM = te()({ name: "VFab", props: yM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = ce(56), o = Z(), { resizeRef: i } = In((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = I(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = I(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  Ft(() => e.app, () => {
    const d = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: s, layoutSize: I(() => e.layout ? l.value + 24 : 0), elementSize: I(() => l.value + 24), active: I(() => e.app && a.value), absolute: B(() => e.absolute) });
    ut(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = Z();
  return ae(() => {
    const d = $e.filterProps(e);
    return p("div", { ref: c, class: ne(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: ge([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [p("div", { class: "v-fab__container" }, [k(Jt, { appear: e.appear, transition: e.transition }, { default: () => [nt(k($e, K({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Hn, e.active]])] })])]);
  }), {};
} });
function pM() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await dS(o, fS(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function dS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await dS(r, fS(t, r)));
      n(i);
    });
  });
}
function fS(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const SM = z({ filterByType: String }, "file-accept");
function wM(e) {
  const t = I(() => e.filterByType ? kM(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function kM(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const xM = z({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Oe(_a({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => lt(e).every((t) => t != null && typeof t == "object") }, ...SM(), ...Fi({ clearable: true }) }, "VFileInput"), CM = te()({ name: "VFileInput", inheritAttrs: false, props: xM(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Xe(), { filterAccepted: i } = wM(e), r = Ce(e, "modelValue", e.modelValue, (ee) => lt(ee), (ee) => !e.multiple && Array.isArray(ee) ? ee[0] : ee), { isFocused: s, focus: u, blur: c } = Ca(e), d = I(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = I(() => (r.value ?? []).reduce((ee, $) => {
    let { size: q = 0 } = $;
    return ee + q;
  }, 0)), v = I(() => sv(f.value, d.value)), b = I(() => (r.value ?? []).map((ee) => {
    const { name: $ = "", size: q = 0 } = ee, j = E($);
    return e.showSize ? `${j} (${sv(q, d.value)})` : j;
  })), m = I(() => {
    var _a3;
    const ee = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, ee, v.value) : o(e.counterString, ee);
  }), g = Z(), h = Z(), S = Z(), V = B(() => s.value || e.active), _ = I(() => ["plain", "underlined"].includes(e.variant)), w = ce(false), { handleDrop: y, hasFilesOrFolders: C } = pM();
  function x() {
    var _a3;
    S.value !== document.activeElement && ((_a3 = S.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function A(ee) {
    var _a3;
    (_a3 = S.value) == null ? void 0 : _a3.click();
  }
  function P(ee) {
    a("mousedown:control", ee);
  }
  function D(ee) {
    var _a3;
    (_a3 = S.value) == null ? void 0 : _a3.click(), a("click:control", ee);
  }
  function M(ee) {
    ee.stopPropagation(), x(), Ae(() => {
      r.value = [], Vi(e["onClick:clear"], ee);
    });
  }
  function E(ee) {
    if (ee.length < Number(e.truncateLength)) return ee;
    const $ = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${ee.slice(0, $)}\u2026${ee.slice(ee.length - $)}`;
  }
  function T(ee) {
    ee.preventDefault(), ee.stopImmediatePropagation(), w.value = true;
  }
  function O(ee) {
    ee.preventDefault(), w.value = false;
  }
  async function W(ee) {
    if (ee.preventDefault(), ee.stopImmediatePropagation(), w.value = false, !S.value || !C(ee)) return;
    const $ = await y(ee);
    Q($);
  }
  function H(ee) {
    if (!(!ee.target || ee.repack)) if (e.filterByType) Q([...ee.target.files]);
    else {
      const $ = ee.target;
      r.value = [...$.files ?? []];
    }
  }
  function Q(ee) {
    const $ = new DataTransfer(), { accepted: q, rejected: j } = i(ee);
    j.length && a("rejected", j);
    for (const G of q) $.items.add(G);
    S.value.files = $.files, r.value = [...$.files];
    const N = new Event("change", { bubbles: true });
    N.repack = true, S.value.dispatchEvent(N);
  }
  return fe(r, (ee) => {
    (!Array.isArray(ee) || !ee.length) && S.value && (S.value.value = "");
  }), ae(() => {
    const ee = !!(l.counter || e.counter), $ = !!(ee || l.details), [q, j] = ea(n), { modelValue: N, ...G } = Gt.filterProps(e), ue = { ...Ga.filterProps(e), "onClick:clear": M }, pe = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, F = n.accept ? String(n.accept) : void 0, J = pe ? void 0 : e.filterByType ?? F;
    return k(Gt, K({ ref: g, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": w.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": _.value }, e.class], style: e.style, "onClick:prepend": A }, q, G, { centerAffix: !_.value, focused: s.value }), { ...l, default: (de) => {
      let { id: ve, isDisabled: ie, isDirty: R, isReadonly: L, isValid: U, hasDetails: le } = de;
      return k(Ga, K({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: D, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ue, { id: ve.value, active: V.value || R.value, dirty: R.value || e.dirty, disabled: ie.value, focused: s.value, details: le.value, error: U.value === false, onDragover: T, onDrop: W }), { ...l, default: (oe) => {
        var _a3;
        let { props: { class: re, ...Se }, controlRef: me } = oe;
        return p(be, null, [p("input", K({ ref: (Y) => S.value = me.value = Y, type: "file", accept: J, readonly: L.value, disabled: ie.value, multiple: e.multiple, name: e.name, onClick: (Y) => {
          Y.stopPropagation(), L.value && Y.preventDefault(), x();
        }, onChange: H, onDragleave: O, onFocus: x, onBlur: c }, Se, j), null), p("div", { class: ne(re) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: b.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? b.value.map((Y) => k(ba, { key: Y, size: "small", text: Y }, null)) : b.value.join(", "))])]);
      } });
    }, details: $ ? (de) => {
      var _a3, _b2;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, de), ee && p(be, null, [p("span", null, null), k(ts, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), At({}, g, h, S);
} }), _M = z({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Yt(), ...we(), ...Ct(), ...Il(), ...ot(), ...Te({ tag: "footer" }), ...We() }, "VFooter"), IM = te()({ name: "VFooter", props: _M(), setup(e, t) {
  let { slots: n } = t;
  const a = Z(), { themeClasses: l } = Ue(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ye(() => e.color), { borderClasses: r } = en(e), { elevationClasses: s } = Pt(e), { roundedClasses: u } = ct(e), c = ce(32), { resizeRef: d } = In((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = I(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Ft(() => e.app, () => {
    const v = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: I(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ut(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), ae(() => k(e.tag, { ref: d, class: ne(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: ge([i.value, e.app ? a.value : { height: he(e.height) }, e.style]) }, n)), {};
} }), VM = z({ ...we(), ...MP() }, "VForm"), PM = te()({ name: "VForm", props: VM(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = BP(e), o = Z();
  function i(s) {
    s.preventDefault(), l.reset();
  }
  function r(s) {
    const u = s, c = l.validate();
    u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
      var _a3;
      let { valid: f } = d;
      f && ((_a3 = o.value) == null ? void 0 : _a3.submit());
    }), u.preventDefault();
  }
  return ae(() => {
    var _a3;
    return p("form", { ref: o, class: ne(["v-form", e.class]), style: ge(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), At(l, o);
} }), AM = z({ color: String, ...Yt(), ...we(), ...ot(), ...Te({ tag: "kbd" }), ...We(), ...Ct() }, "VKbd"), ic = te()({ name: "VKbd", props: AM(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { borderClasses: l } = en(e), { roundedClasses: o } = ct(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Ye(() => e.color), { elevationClasses: s } = Pt(e);
  return ae(() => k(e.tag, { class: ne(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: ge([r.value, e.style]) }, n)), {};
} });
function vS(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const mS = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, TM = z({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => mS }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...we(), ...We(), ...Yt(), ...ot(), ...Ct(), color: String }, "VHotkey"), Js = Symbol("VHotkey:AND_DELINEATOR"), Qs = Symbol("VHotkey:SLASH_DELINEATOR"), Am = Symbol("VHotkey:THEN_DELINEATOR");
function EM(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = vS(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Tm(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = vS(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const DM = te()({ name: "VHotkey", props: TM(), setup(e) {
  const { t } = Xe(), { themeClasses: n } = Ue(e), { rtlClasses: a } = It(), { borderClasses: l } = en(e), { roundedClasses: o } = ct(e), { elevationClasses: i } = Pt(e), { colorClasses: r, colorStyles: s, variantClasses: u } = xa(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = I(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = I(() => e.keys ? e.keys.split(" ").map((h) => {
    const S = [], V = P_(h);
    for (let _ = 0; _ < V.length; _++) {
      const w = V[_];
      _ > 0 && S.push(Am);
      const { keys: y, separators: C } = vy(w);
      for (let x = 0; x < y.length; x++) {
        const A = y[x];
        x > 0 && S.push(C[x - 1] === "/" ? Qs : Js), S.push(Tm(e.keyMap, e.displayMode, A, c.value));
      }
    }
    return S;
  }) : []), f = I(() => {
    if (!e.keys) return "";
    const S = d.value.map((V) => {
      const _ = [];
      for (const w of V) if (Array.isArray(w)) {
        const y = w[0] === "icon" || w[0] === "symbol" ? Tm(jt(mS, e.keyMap), "text", String(w[1]), c.value)[1] : w[1];
        _.push(v(y));
      } else w === Js ? _.push(t("$vuetify.hotkey.plus")) : w === Qs ? _.push(t("$vuetify.hotkey.or")) : w === Am && _.push(t("$vuetify.hotkey.then"));
      return _.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", S);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function b(h) {
    if (e.displayMode === "text") return;
    const S = EM(e.keyMap, String(h[2]), c.value);
    return v(S);
  }
  function m(h, S) {
    const V = e.variant === "contained", _ = V ? "kbd" : ic, w = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...V ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return k(_, { key: S, class: ne(w), style: ge(V ? void 0 : s.value), "aria-hidden": "true", title: b(h) }, { default: () => [h[0] === "icon" ? k(Ge, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function g(h, S) {
    return p("span", { key: S, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === Js ? "+" : h === Qs ? "/" : t("$vuetify.hotkey.then")]);
  }
  ae(() => {
    const h = p(be, null, [e.prefix && p("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((S, V) => p("span", { class: "v-hotkey__combination", key: V }, [S.map((_, w) => Array.isArray(_) ? m(_, w) : g(_, w)), V < d.value.length - 1 && p("span", { "aria-hidden": "true" }, [Et("\xA0")])])), e.suffix && p("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return p("div", { class: ne(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: ge(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : k(ic, { key: "contained", class: ne(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: ge(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), MM = z({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...pd() }, "VHover"), BM = te()({ name: "VHover", props: MM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Sd(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), RM = z({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...Te() }, "VInfiniteScroll"), Em = Qt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = Ti();
  return fe(l, async (o) => {
    n("intersect", e.side, o);
  }), ae(() => p("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Et("\xA0")])), {};
} }), OM = te()({ name: "VInfiniteScroll", props: RM(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Z(), o = ce("ok"), i = ce("ok"), r = I(() => he(e.margin)), s = ce(false);
  function u(y) {
    if (!l.value) return;
    const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    l.value[C] = y;
  }
  function c() {
    if (!l.value) return 0;
    const y = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    return l.value[y];
  }
  function d() {
    if (!l.value) return 0;
    const y = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
    return l.value[y];
  }
  function f() {
    if (!l.value) return 0;
    const y = e.direction === "vertical" ? "clientHeight" : "clientWidth";
    return l.value[y];
  }
  bt(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(y, C) {
    y === "start" ? o.value = C : y === "end" ? i.value = C : y === "both" && (o.value = C, i.value = C);
  }
  function b(y) {
    return y === "start" ? o.value : i.value;
  }
  let m = 0;
  function g(y, C) {
    s.value = C, s.value && h(y);
  }
  function h(y) {
    if (e.mode !== "manual" && !s.value) return;
    const C = b(y);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(y, "loading");
    function x(A) {
      v(y, A), Ae(() => {
        A === "empty" || A === "error" || (A === "ok" && y === "start" && u(d() - m + c()), e.mode !== "manual" && Ae(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                h(y);
              });
            });
          });
        }));
      });
    }
    a("load", { side: y, done: x });
  }
  const { t: S } = Xe();
  function V(y, C) {
    var _a3, _b2, _c2, _d2, _e2;
    if (e.side !== y && e.side !== "both") return;
    const x = () => h(y), A = { side: y, props: { onClick: x, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? p("div", null, [S(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? k(za, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? k($e, { variant: "outlined", color: e.color, onClick: x }, { default: () => [S(e.loadMoreText)] }) : ((_e2 = n.loading) == null ? void 0 : _e2.call(n, A)) ?? k(za, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: _ } = xt(e);
  ae(() => {
    const y = e.tag, C = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return k(y, { ref: l, class: ne(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": x }]), style: ge(_.value) }, { default: () => {
      var _a3;
      return [p("div", { class: "v-infinite-scroll__side" }, [V("start", o.value)]), C && A && k(Em, { key: "start", side: "start", onIntersect: g, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), x && A && k(Em, { key: "end", side: "end", onIntersect: g, rootMargin: r.value }, null), p("div", { class: "v-infinite-scroll__side" }, [V("end", i.value)])];
    } });
  });
  function w(y) {
    const C = y ?? e.side;
    v(C, "ok"), Ae(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Ae(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              C === "both" ? (h("start"), h("end")) : h(C);
            });
          });
        });
      });
    });
  }
  return { reset: w };
} }), hS = Symbol.for("vuetify:v-item-group"), LM = z({ ...we(), ...Al({ selectedClass: "v-item--selected" }), ...Te(), ...We() }, "VItemGroup"), FM = te()({ name: "VItemGroup", props: LM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ka(e, hS);
  return () => k(e.tag, { class: ne(["v-item-group", a.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), NM = te()({ name: "VItem", props: Tl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ha(e, hS);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), $M = z({ ...we(), ...kt(), ...cy() }, "VLayout"), HM = te()({ name: "VLayout", props: $M(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = fy(e), { dimensionStyles: s } = xt(e);
  return ae(() => {
    var _a3;
    return p("div", { ref: r, class: ne([a.value, e.class]), style: ge([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), zM = z({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...we(), ...Il() }, "VLayoutItem"), WM = te()({ name: "VLayoutItem", props: zM(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return p("div", { class: ne(["v-layout-item", e.class]), style: ge([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), jM = z({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...we(), ...kt(), ...Te(), ...wa({ transition: "fade-transition" }) }, "VLazy"), GM = te()({ name: "VLazy", directives: { vIntersect: Fn }, props: jM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = xt(e), l = Ce(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ae(() => nt(k(e.tag, { class: ne(["v-lazy", e.class]), style: ge([a.value, e.style]) }, { default: () => [l.value && k(Jt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Fn, { handler: o, options: e.options }, null]])), {};
} }), UM = z({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...we() }, "VLocaleProvider"), YM = te()({ name: "VLocaleProvider", props: UM(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = ey(e);
  return ae(() => {
    var _a3;
    return p("div", { class: ne(["v-locale-provider", a.value, e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), KM = z({ scrollable: Boolean, ...we(), ...kt(), ...Te({ tag: "main" }) }, "VMain"), qM = te()({ name: "VMain", props: KM(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = xt(e), { mainStyles: l } = dy(), { ssrBootStyles: o } = Pl();
  return ae(() => k(e.tag, { class: ne(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ge([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? p("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function XM(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ce(false), o = ce(0), i = I(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: he(o.value) } : { top: a.value.top }];
  });
  bt(() => {
    fe(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Ut(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, b = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - b, l.value = true) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (b ? l.value !== "top" && (o.value = -f + b + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const ZM = 100, JM = 20;
function Dm(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Mm(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Dm(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Dm(t) * 1e3;
}
function QM() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Og(JM))).push([l.timeStamp, o]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function a(l) {
    var _a3;
    const o = (_a3 = e[l]) == null ? void 0 : _a3.values().reverse();
    if (!o) throw new Error(`No samples for touch id ${l}`);
    const i = o[0], r = [], s = [];
    for (const u of o) {
      if (i[0] - u[0] > ZM) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Mm(r), y: Mm(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : eB();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function eB() {
  throw new Error();
}
function tB(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  bt(() => {
    window.addEventListener("touchstart", S, { passive: true }), window.addEventListener("touchmove", V, { passive: false }), window.addEventListener("touchend", _, { passive: true });
  }), Ut(() => {
    window.removeEventListener("touchstart", S), window.removeEventListener("touchmove", V), window.removeEventListener("touchend", _);
  });
  const r = I(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = QM();
  let d = false;
  const f = ce(false), v = ce(0), b = ce(0);
  let m;
  function g(y, C) {
    return (i.value === "left" ? y : i.value === "right" ? document.documentElement.clientWidth - y : i.value === "top" ? y : i.value === "bottom" ? document.documentElement.clientHeight - y : Fl()) - (C ? l.value : 0);
  }
  function h(y) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const x = i.value === "left" ? (y - b.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - y - b.value) / l.value : i.value === "top" ? (y - b.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - y - b.value) / l.value : Fl();
    return C ? Ke(x) : x;
  }
  function S(y) {
    if (o.value) return;
    const C = y.changedTouches[0].clientX, x = y.changedTouches[0].clientY, A = 25, P = i.value === "left" ? C < A : i.value === "right" ? C > document.documentElement.clientWidth - A : i.value === "top" ? x < A : i.value === "bottom" ? x > document.documentElement.clientHeight - A : Fl(), D = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? x < l.value : i.value === "bottom" ? x > document.documentElement.clientHeight - l.value : Fl());
    (P || D || n.value && a.value) && (m = [C, x], b.value = g(r.value ? C : x, n.value), v.value = h(r.value ? C : x), d = b.value > -20 && b.value < 80, u(y), s(y));
  }
  function V(y) {
    const C = y.changedTouches[0].clientX, x = y.changedTouches[0].clientY;
    if (d) {
      if (!y.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), D = Math.abs(x - m[1]);
      (r.value ? P > D && P > 3 : D > P && D > 3) ? (f.value = true, d = false) : (r.value ? D : P) > 3 && (d = false);
    }
    if (!f.value) return;
    y.preventDefault(), s(y);
    const A = h(r.value ? C : x, false);
    v.value = Math.max(0, Math.min(1, A)), A > 1 ? b.value = g(r.value ? C : x, true) : A < 0 && (b.value = g(r.value ? C : x, false));
  }
  function _(y) {
    if (d = false, !f.value) return;
    s(y), f.value = false;
    const C = c(y.changedTouches[0].identifier), x = Math.abs(C.x), A = Math.abs(C.y);
    (r.value ? x > A && x > 400 : A > x && A > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Fl()) : n.value = v.value > 0.5;
  }
  const w = I(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Fl(), transition: "none" } : void 0);
  return Ft(f, () => {
    var _a3, _b2;
    const y = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ut(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = w.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = w.value) == null ? void 0 : _c2.transition) || null);
    }), yt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", y), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: w };
}
function Fl() {
  throw new Error();
}
const nB = ["start", "end", "left", "right", "top", "bottom"], aB = z({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => nB.includes(e) }, sticky: Boolean, ...Yt(), ...we(), ...pd(), ..._l({ mobile: null }), ...Ct(), ...Il(), ...ot(), ...Oe(_b(), ["disableInitialFocus"]), ...Te({ tag: "nav" }), ...We() }, "VNavigationDrawer"), lB = te()({ name: "VNavigationDrawer", props: aB(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = It(), { themeClasses: i } = Ue(e), { borderClasses: r } = en(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Ye(() => e.color), { elevationClasses: c } = Pt(e), { displayClasses: d, mobile: f } = cn(e), { roundedClasses: v } = ct(e), b = Ly(), m = Ce(e, "modelValue", null, ($) => !!$), { ssrBootStyles: g } = Pl(), { scopeId: h } = El(), S = Z(), V = ce(false), { runOpenDelay: _, runCloseDelay: w } = Sd(e, ($) => {
    V.value = $;
  }), y = I(() => e.rail && e.expandOnHover && V.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = I(() => bu(e.location, o.value)), x = B(() => e.persistent), A = I(() => !e.permanent && (f.value || e.temporary)), P = I(() => e.sticky && !A.value && C.value !== "bottom");
  Ib(e, { isActive: m, localTop: A, contentEl: S }), Ft(() => e.expandOnHover && e.rail != null, () => {
    fe(V, ($) => a("update:rail", !$));
  }), Ft(() => !e.disableResizeWatcher, () => {
    fe(A, ($) => !e.permanent && Ae(() => m.value = !$));
  }), Ft(() => !e.disableRouteWatcher && !!b, () => {
    fe(b.currentRoute, () => A.value && (m.value = false));
  }), fe(() => e.permanent, ($) => {
    $ && (m.value = true);
  }), e.modelValue == null && !A.value && (m.value = e.permanent || !f.value);
  const { isDragging: D, dragProgress: M } = tB({ el: S, isActive: m, isTemporary: A, width: y, touchless: B(() => e.touchless), position: C }), E = I(() => {
    const $ = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : y.value;
    return D.value ? $ * M.value : $;
  }), { layoutItemStyles: T, layoutItemScrimStyles: O } = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: C, layoutSize: E, elementSize: y, active: vl(m), disableTransitions: B(() => D.value), absolute: I(() => e.absolute || P.value && typeof W.value != "string") }), { isStuck: W, stickyStyles: H } = XM({ rootEl: S, isSticky: P, layoutItemStyles: T }), Q = Ye(() => typeof e.scrim == "string" ? e.scrim : null), ee = I(() => ({ ...D.value ? { opacity: M.value * 0.2, transition: "none" } : void 0, ...O.value }));
  return vt({ VList: { bgColor: "transparent" } }), ae(() => {
    const $ = l.image || e.image;
    return p(be, null, [k(e.tag, K({ ref: S, onMouseenter: _, onMouseleave: w, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": V.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": x.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, T.value, g.value, H.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [$ && p("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? k(Ee, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : k(ya, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && p("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), p("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && p("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), k(Na, { name: "fade-transition" }, { default: () => [A.value && (D.value || m.value) && !!e.scrim && p("div", K({ class: ["v-navigation-drawer__scrim", Q.backgroundColorClasses.value], style: [ee.value, Q.backgroundColorStyles.value], onClick: () => {
      x.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: W };
} }), oB = Qt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = Vb();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), iB = 50, rB = 500;
function sB(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  yt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), iB);
    }, rB);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  yt(o);
  function i(r) {
    t(r === "up");
  }
  return { holdStart: l, holdStop: o };
}
const uB = z({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Oe(Ni(), ["modelValue", "validationValue"]) }, "VNumberInput"), cB = te()({ name: "VNumberInput", props: { ...uB() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Z(), { holdStart: l, holdStop: o } = sB({ toggleUpDown: D }), i = xo(e), r = I(() => i.isDisabled.value || i.isReadonly.value), s = ce(e.focused), { decimalSeparator: u } = Xe(), c = I(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(N) {
    let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const pe = G == null ? String(N) : N.toFixed(G);
    if (s.value && ue) return Number(pe).toString().replace(".", c.value);
    if (e.minFractionDigits === null || G !== null && G < e.minFractionDigits) return pe.replace(".", c.value);
    let [F, J] = pe.split(".");
    return J = (J ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [F, J].filter(Boolean).join(c.value);
  }
  const f = Ce(e, "modelValue", null, (N) => N ?? null, (N) => N == null ? N ?? null : Ke(Number(N), e.min, e.max)), v = ce(null), b = ce(null);
  fe(f, (N) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === N || (N == null ? (v.value = null, b.value = null) : isNaN(N) || (v.value = d(N), b.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = I({ get: () => v.value, set(N) {
    if (N === null || N === "") {
      f.value = null, v.value = null, b.value = null;
      return;
    }
    const G = Number(N.replace(c.value, "."));
    isNaN(G) || (v.value = N, b.value = G, G <= e.max && G >= e.min && (f.value = G));
  } }), g = I(() => {
    var _a3;
    if (b.value === null) return false;
    const N = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return N !== Ke(N, e.min, e.max);
  }), h = I(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), S = I(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), V = I(() => e.hideInput ? "stacked" : e.controlVariant), _ = B(() => V.value === "split" ? "$plus" : "$collapse"), w = B(() => V.value === "split" ? "$minus" : "$expand"), y = B(() => V.value === "split" ? "default" : "small"), C = B(() => V.value === "stacked" ? "auto" : "100%"), x = { props: { onClick: T, onPointerup: O, onPointerdown: W, onPointercancel: O } }, A = { props: { onClick: T, onPointerup: O, onPointerdown: H, onPointercancel: O } };
  fe(() => e.precision, () => ee()), fe(() => e.minFractionDigits, () => ee()), bt(() => {
    Q();
  });
  function P(N) {
    if (N == null) return 0;
    const G = N.toString(), ue = G.indexOf(".");
    return ~ue ? G.length - ue : 0;
  }
  function D() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(Ke(0, e.min, e.max));
      return;
    }
    let G = Math.max(P(f.value), P(e.step));
    e.precision != null && (G = Math.max(G, e.precision)), N ? h.value && (m.value = d(f.value + e.step, G)) : S.value && (m.value = d(f.value - e.step, G));
  }
  function M(N) {
    var _a3;
    if (!N.data) return;
    const G = N.target, { value: ue, selectionStart: pe, selectionEnd: F } = G ?? {}, J = ue ? ue.slice(0, pe) + N.data + ue.slice(F) : N.data, de = Tx(J, e.precision, c.value);
    if (new RegExp(`^-?\\d*${hr(c.value)}?\\d*$`).test(J) || (N.preventDefault(), G.value = de, Ae(() => m.value = de)), e.precision != null) {
      if (((_a3 = J.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        N.preventDefault(), G.value = de, Ae(() => m.value = de);
        const ve = (pe ?? 0) + N.data.length;
        G.setSelectionRange(ve, ve);
      }
      e.precision === 0 && J.endsWith(c.value) && (N.preventDefault(), G.value = de, Ae(() => m.value = de));
    }
  }
  async function E(N) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(N.key) || N.ctrlKey || ["ArrowDown", "ArrowUp"].includes(N.key) && (N.preventDefault(), N.stopPropagation(), Q(), await Ae(), N.key === "ArrowDown" ? D(false) : D());
  }
  function T(N) {
    N.stopPropagation();
  }
  function O(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.releasePointerCapture(N.pointerId), N.preventDefault(), o();
  }
  function W(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.setPointerCapture(N.pointerId), N.preventDefault(), N.stopPropagation(), l("up");
  }
  function H(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.setPointerCapture(N.pointerId), N.preventDefault(), N.stopPropagation(), l("down");
  }
  function Q() {
    if (r.value || !a.value) return;
    const N = a.value.value, G = Number(N.replace(c.value, "."));
    N && !isNaN(G) ? m.value = d(Ke(G, e.min, e.max)) : m.value = null;
  }
  function ee() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function $() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", c.value);
    }
  }
  function q() {
    $();
  }
  function j() {
    Q();
  }
  return ae(() => {
    const { modelValue: N, type: G, ...ue } = Jn.filterProps(e);
    function pe() {
      return n.increment ? k(Ee, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: y.value, icon: _.value, variant: "text" } } }, { default: () => [n.increment(x)] }) : k($e, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: _.value, key: "increment-btn", onClick: T, onPointerdown: W, onPointerup: O, onPointercancel: O, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function F() {
      return n.decrement ? k(Ee, { key: "decrement-defaults", defaults: { VBtn: { disabled: !S.value, height: C.value, size: y.value, icon: w.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : k($e, { "aria-hidden": "true", "data-testid": "decrement", disabled: !S.value, height: C.value, icon: w.value, key: "decrement-btn", onClick: T, onPointerdown: H, onPointerup: O, onPointercancel: O, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function J() {
      return p("div", { class: "v-number-input__control" }, [F(), k(yn, { vertical: V.value !== "stacked" }, null), pe()]);
    }
    function de() {
      return !e.hideInput && !e.inset ? k(yn, { vertical: true }, null) : void 0;
    }
    const ve = V.value === "split" ? p("div", { class: "v-number-input__control" }, [k(yn, { vertical: true }, null), pe()]) : e.reverse || V.value === "hidden" ? void 0 : p(be, null, [de(), J()]), ie = n["append-inner"] || ve, R = V.value === "split" ? p("div", { class: "v-number-input__control" }, [F(), k(yn, { vertical: true }, null)]) : e.reverse && V.value !== "hidden" ? p(be, null, [J(), de()]) : void 0, L = n["prepend-inner"] || R;
    return k(Jn, K({ ref: a }, ue, { modelValue: m.value, "onUpdate:modelValue": (U) => m.value = U, focused: s.value, "onUpdate:focused": (U) => s.value = U, validationValue: f.value, error: e.error || g.value || void 0, onBeforeinput: M, onFocus: q, onBlur: j, onKeydown: E, class: ["v-number-input", { "v-number-input--default": V.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": V.value === "split", "v-number-input--stacked": V.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ie ? function() {
      var _a3;
      for (var U = arguments.length, le = new Array(U), oe = 0; oe < U; oe++) le[oe] = arguments[oe];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...le), ve]);
    } : void 0, "prepend-inner": L ? function() {
      var _a3;
      for (var U = arguments.length, le = new Array(U), oe = 0; oe < U; oe++) le[oe] = arguments[oe];
      return p(be, null, [R, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...le)]);
    } : void 0 });
  }), At({}, a);
} }), dB = z({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...mt(), ...kt(), ...Oi(), ...on(Fi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), fB = te()({ name: "VOtpInput", props: dB(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Ht(e), { dimensionStyles: i } = xt(e), { isFocused: r, focus: s, blur: u } = Ca(e), c = Ce(e, "modelValue", "", (D) => D == null ? [] : String(D).split(""), (D) => D.join("")), { t: d } = Xe(), f = I(() => Number(e.length)), v = I(() => Array(f.value).fill(0)), b = Z(-1), m = Z(), g = Z([]), h = I(() => g.value[b.value]);
  let S = false;
  Ft(() => e.autofocus, () => {
    const D = Ql();
    D.run(() => {
      const { intersectionRef: M, isIntersecting: E } = Ti();
      ut(() => {
        M.value = g.value[0];
      }), fe(E, (T) => {
        var _a3;
        T && ((_a3 = M.value) == null ? void 0 : _a3.focus(), D.stop());
      });
    });
  });
  function V() {
    if (P(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (S) return;
    const D = c.value.slice(), M = h.value.value;
    D[b.value] = M;
    let E = null;
    b.value > c.value.length ? E = c.value.length + 1 : b.value + 1 !== f.value && (E = "next"), c.value = D, E && ul(m.value, E);
  }
  function _() {
    S = false, V();
  }
  function w(D) {
    const M = c.value.slice(), E = b.value;
    let T = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(D.key) && (D.preventDefault(), D.key === "ArrowLeft" ? T = "prev" : D.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(D.key) && (M[b.value] = "", c.value = M, b.value > 0 && D.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = g.value[E]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      T != null && ul(m.value, T);
    }));
  }
  function y(D, M) {
    var _a3;
    M.preventDefault(), M.stopPropagation();
    const E = ((_a3 = M == null ? void 0 : M.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", T = E.length - 1 === -1 ? D : E.length - 1;
    P(E) || (c.value = E.split(""), b.value = T);
  }
  function C() {
    c.value = [];
  }
  function x(D, M) {
    s(), b.value = M;
  }
  function A() {
    u(), b.value = -1;
  }
  function P(D) {
    return e.type === "number" && /[^0-9]/g.test(D);
  }
  return vt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), fe(c, (D) => {
    D.length === f.value && a("finish", D.join(""));
  }, { deep: true }), fe(b, (D) => {
    D < 0 || Ae(() => {
      var _a3;
      (_a3 = g.value[D]) == null ? void 0 : _a3.select();
    });
  }), ae(() => {
    var _a3;
    const [D, M] = ea(n);
    return p("div", K({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, D), [p("div", { ref: m, class: "v-otp-input__content", style: ge([i.value]) }, [v.value.map((E, T) => p(be, null, [e.divider && T !== 0 && p("span", { class: "v-otp-input__divider" }, [e.divider]), k(Ga, { focused: r.value && e.focusAll || b.value === T, key: T }, { ...l, loader: void 0, default: () => p("input", { ref: (O) => g.value[T] = O, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: ne(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[T], onInput: V, onFocus: (O) => x(O, T), onBlur: A, onKeydown: w, onCompositionstart: () => S = true, onCompositionend: _, onPaste: (O) => y(T, O) }, null) })])), p("input", K({ class: "v-otp-input-input", type: "hidden" }, M, { value: c.value.join("") }), null), k(Zn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? k(za, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = g.value) == null ? void 0 : _a3.some((D) => D.blur());
  }, focus: () => {
    var _a3;
    (_a3 = g.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function vB(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const mB = z({ scale: { type: [Number, String], default: 0.5 }, ...we() }, "VParallax"), hB = te()({ name: "VParallax", props: mB(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = Ti(), { resizeRef: o, contentRect: i } = In(), { height: r } = cn(), s = Z();
  ut(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  fe(l, (v) => {
    v ? (u = Wr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Ut(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), fe(r, f), fe(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = I(() => 1 - Ke(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || qn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const b = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, g = a.value.getBoundingClientRect().top + m, h = i.value.height, S = g + (h - b) / 2, V = vB((m - S) * c.value), _ = Math.max(1, (c.value * (b - h) + h) / h);
      v.style.setProperty("transform", `translateY(${V}px) scale(${_})`);
    }));
  }
  return ae(() => k(ya, { class: ne(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: ge(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), gB = z({ ...es({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), yB = te()({ name: "VRadio", props: gB(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = Wa.filterProps(e);
    return k(Wa, K(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), bB = z({ height: { type: [Number, String], default: "auto" }, ...Oe(_a(), ["direction"]), ...Oe(cd(), ["multiple"]), trueIcon: { type: _e, default: "$radioOn" }, falseIcon: { type: _e, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), pB = te()({ name: "VRadioGroup", inheritAttrs: false, props: bB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ot(), o = I(() => e.id || `radio-group-${l}`), i = Ce(e, "modelValue"), r = Z();
  return ae(() => {
    const [s, u] = ea(n), c = Gt.filterProps(e), d = Wa.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return k(Gt, K({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: b, messagesId: m, isDisabled: g, isReadonly: h } = v;
      return p(be, null, [f && k(ko, { id: b.value }, { default: () => [f] }), k(qy, K(d, { id: b.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: g.value, readonly: h.value, "aria-labelledby": f ? b.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (S) => i.value = S }), a)]);
    } });
  }), At({}, r);
} }), SB = z({ ...Oi(), ..._a(), ...gp(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), wB = te()({ name: "VRangeSlider", inheritAttrs: false, props: SB(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = Z(), i = Z(), r = Z(), { rtlClasses: s } = It();
  function u(M) {
    if (!o.value || !i.value) return;
    const E = Yu(M, o.value.$el, e.direction), T = Yu(M, i.value.$el, e.direction), O = Math.abs(E), W = Math.abs(T);
    return O < W || O === W && E < 0 ? o.value.$el : i.value.$el;
  }
  const c = yp(e), d = Ce(e, "modelValue", void 0, (M) => (M == null ? void 0 : M.length) ? M.map((E) => c.roundValue(E)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: b, min: m, mousePressed: g, onSliderMousedown: h, onSliderTouchstart: S, position: V, trackContainerRef: _, disabled: w, readonly: y } = bp({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (w.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (M) => {
    var _a3, _b2;
    let { value: E } = M;
    if (w.value || y.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const T = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [E, d.value[1]] : [d.value[0], E];
      !e.strict && T[0] < T[1] && (d.value = T);
    }
    a("end", d.value);
  }, onSliderMove: (M) => {
    var _a3, _b2, _c2, _d2, _e2;
    let { value: E } = M;
    const [T, O] = d.value;
    if (w.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === O && T !== m.value && (f.value = E > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e2 = o.value) == null ? void 0 : _e2.$el) ? d.value = [Math.min(E, O), O] : d.value = [T, Math.max(T, E)];
  }, getActiveThumb: u }), { isFocused: C, focus: x, blur: A } = Ca(e), P = I(() => V(d.value[0])), D = I(() => V(d.value[1]));
  return ae(() => {
    const M = Gt.filterProps(e), [E, T] = ea(l), O = !!(e.label || n.label || n.prepend);
    return k(Gt, K({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": g.value, "v-slider--disabled": w.value }, s.value, e.class], style: e.style, ref: r }, M, E, { focused: C.value }), { ...n, prepend: O ? (W) => {
      var _a3, _b2;
      return p(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, W)) ?? (e.label ? k(ko, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, W)]);
    } : void 0, default: (W) => {
      var _a3, _b2;
      let { id: H, messagesId: Q } = W;
      return p("div", { class: "v-slider__container", onMousedown: y.value ? void 0 : h, onTouchstartPassive: y.value ? void 0 : S }, [p("input", { id: `${H.value}_start`, name: e.name || H.value, disabled: w.value, readonly: y.value, tabindex: "-1", value: d.value[0] }, null), p("input", { id: `${H.value}_stop`, name: e.name || H.value, disabled: w.value, readonly: y.value, tabindex: "-1", value: d.value[1] }, null), k(pp, { ref: _, start: P.value, stop: D.value }, { "tick-label": n["tick-label"] }), k(Ku, K({ ref: o, "aria-describedby": Q.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (ee) => d.value = [ee, d.value[1]], onFocus: (ee) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, b.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && ee.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), k(Ku, K({ ref: i, "aria-describedby": Q.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (ee) => d.value = [d.value[0], ee], onFocus: (ee) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, b.value !== m.value && d.value[0] === d.value[1] && d.value[0] === b.value && ee.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: b.value, position: D.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), At({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), kB = z({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: _e, default: "$ratingEmpty" }, fullIcon: { type: _e, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...we(), ...mt(), ...aa(), ...Te(), ...We() }, "VRating"), xB = te()({ name: "VRating", props: kB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Xe(), { themeClasses: l } = Ue(e), o = Z(), i = Ce(e, "modelValue"), r = I(() => Ke(parseFloat(i.value), 0, Number(e.length))), s = I(() => Yn(Number(e.length), 1)), u = I(() => s.value.flatMap((_) => e.halfIncrements ? [_ - 0.5, _] : [_])), c = ce(-1), d = I(() => u.value.map((_) => {
    const w = e.hover && c.value > -1, y = r.value >= _, C = c.value >= _, A = (w ? C : y) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, D = y || C ? P : e.color;
    return { isFilled: y, isHovered: C, icon: A, color: D };
  })), f = I(() => [0, ...u.value].map((_) => {
    function w() {
      c.value = _;
    }
    function y() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === _ && e.clearable ? 0 : _);
    }
    return { onMouseenter: e.hover ? w : void 0, onMouseleave: e.hover ? y : void 0, onClick: C };
  })), v = I(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function b() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(_) {
    if (e.disabled || e.readonly || _.ctrlKey || _.altKey) return;
    const w = e.halfIncrements ? 0.5 : 1;
    if (_.key === "ArrowRight") {
      const y = Math.min(Number(e.length), Number(i.value ?? 0) + w);
      i.value = y, Ae(() => b());
    }
    if (_.key === "ArrowLeft") {
      const y = Math.max(0, Number(i.value ?? 0) - w);
      i.value = y, Ae(() => b());
    }
  }
  const g = Ot(), h = I(() => e.name ?? `v-rating-${g}`);
  function S(_) {
    var _a3, _b2;
    let { value: w, index: y, showStar: C = true } = _;
    const { onMouseenter: x, onMouseleave: A, onClick: P } = f.value[y + 1], D = `${h.value}-${String(w).replace(".", "-")}`, M = y === v.value, E = { color: (_a3 = d.value[y]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[y]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: M ? 0 : -1, onKeydown: m };
    return p(be, null, [p("label", { for: D, class: ne({ "v-rating__item--half": e.halfIncrements && w % 1 > 0, "v-rating__item--full": e.halfIncrements && w % 1 === 0 }), onMouseenter: x, onMouseleave: A, onClick: P }, [p("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, w, e.length)]), C ? n.item ? n.item({ ...d.value[y], props: E, value: w, index: y, rating: r.value }) : k($e, K({ "aria-label": a(e.itemAriaLabel, w, e.length) }, E), null) : void 0]), p("input", { class: "v-rating__hidden", name: h.value, id: D, type: "radio", value: w, checked: r.value === w, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function V(_) {
    return n["item-label"] ? n["item-label"](_) : _.label ? p("span", null, [_.label]) : p("span", null, [Et("\xA0")]);
  }
  return ae(() => {
    var _a3;
    const _ = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return k(e.tag, { class: ne(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: ge(e.style), ref: o }, { default: () => [k(S, { value: 0, index: -1, showStar: false }, null), s.value.map((w, y) => {
      var _a4, _b2;
      return p("div", { class: "v-rating__wrapper" }, [_ && e.itemLabelPosition === "top" ? V({ value: w, index: y, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[y] }) : void 0, p("div", { class: "v-rating__item" }, [e.halfIncrements ? p(be, null, [k(S, { value: w - 0.5, index: y * 2 }, null), k(S, { value: w, index: y * 2 + 1 }, null)]) : k(S, { value: w, index: y }, null)]), _ && e.itemLabelPosition === "bottom" ? V({ value: w, index: y, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[y] }) : void 0]);
    })] });
  }), {};
} }), CB = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function _B(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return p("div", { class: ne(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Bm(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => bs(t));
}
function bs(e) {
  let t = [];
  if (!e) return t;
  const n = CB[e];
  if (e !== n) {
    if (e.includes(",")) return Rm(e);
    if (e.includes("@")) return Bm(e);
    n.includes(",") ? t = Rm(n) : n.includes("@") ? t = Bm(n) : n && t.push(bs(n));
  }
  return [_B(e, t)];
}
function Rm(e) {
  return e.replace(/\s/g, "").split(",").map(bs);
}
const IB = z({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...Ct(), ...We() }, "VSkeletonLoader"), VB = te()({ name: "VSkeletonLoader", inheritAttrs: false, props: IB(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color), { dimensionStyles: i } = xt(e), { elevationClasses: r } = Pt(e), { themeClasses: s } = Ue(e), { t: u } = Xe(), c = I(() => bs(lt(e.type).join(",")));
  return ae(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? p("div", K({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : p(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), PB = te()({ name: "VSlideGroupItem", props: Tl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ha(e, dd);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function AB(e) {
  const t = ce(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Ae(() => t.value = e());
  }
  function o(i) {
    const r = i ? getComputedStyle(i) : { transitionDuration: 0.2 }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && a();
    }, s);
  }
  return yt(a), { clear: a, time: t, start: o, reset: l };
}
const gS = z({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...na({ location: "bottom" }), ...So(), ...ot(), ...wn(), ...We(), ...Oe(Li({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), rc = te()({ name: "VSnackbar", props: gS(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { positionClasses: l } = wo(e), { scopeId: o } = El(), { themeClasses: i } = Ue(e), { colorClasses: r, colorStyles: s, variantClasses: u } = xa(e), { roundedClasses: c } = ct(e), d = AB(() => Number(e.timeout)), f = Z(), v = Z(), b = ce(false), m = ce(0), g = Z(), h = Me(ii, void 0);
  Ft(() => !!h, () => {
    const D = dy();
    ut(() => {
      g.value = D.mainStyles.value;
    });
  }), fe(a, V), fe(() => e.timeout, V), bt(() => {
    a.value && V();
  });
  let S = -1;
  function V() {
    d.reset(), window.clearTimeout(S);
    const D = Number(e.timeout);
    if (!a.value || D === -1) return;
    const M = Hc(v.value);
    d.start(M), S = window.setTimeout(() => {
      a.value = false;
    }, D);
  }
  function _() {
    d.reset(), window.clearTimeout(S);
  }
  function w() {
    b.value = true, _();
  }
  function y() {
    b.value = false, V();
  }
  function C(D) {
    m.value = D.touches[0].clientY;
  }
  function x(D) {
    Math.abs(m.value - D.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function A() {
    b.value && y();
  }
  const P = I(() => e.location.split(" ").reduce((D, M) => (D[`v-snackbar--${M}`] = true, D), {}));
  return ae(() => {
    const D = Zn.filterProps(e), M = !!(n.default || n.text || e.text);
    return k(Zn, K({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [g.value, e.style] }, D, { modelValue: a.value, "onUpdate:modelValue": (E) => a.value = E, contentProps: K({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: w, onPointerleave: y }, D.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: x, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ka(false, "v-snackbar"), e.timer && !b.value && p("div", { key: "timer", class: "v-snackbar__timer" }, [k(Zr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), M && p("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && k(Ee, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [p("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), At({}, f);
} }), TB = z({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Oe(gS(), ["modelValue"]) }, "VSnackbarQueue"), EB = te()({ name: "VSnackbarQueue", props: TB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Xe(), o = ce(false), i = ce(false), r = ce();
  fe(() => e.modelValue.length, (f, v) => {
    !i.value && f > v && u();
  }), fe(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, i.value = false);
  }
  function u() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Ae(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = I(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ae(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...b } = rc.filterProps(e);
    return p(be, null, [i.value && !!r.value && (a.default ? k(Ee, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : k(rc, K(b, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => p(be, null, [a.actions ? k(Ee, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : k($e, K(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), yS = z({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), bS = z({ autoLineWidth: Boolean, ...yS() }, "VBarline"), Om = te()({ name: "VBarline", props: bS(), setup(e, t) {
  let { slots: n } = t;
  const a = Ot(), l = I(() => e.id || `barline-${a}`), o = I(() => Number(e.autoDrawDuration) || 500), i = I(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = I(() => parseFloat(e.lineWidth) || 4), s = I(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = I(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = I(() => e.modelValue.map((g) => St(g, e.itemValue, g)));
  function d(g, h) {
    const { minX: S, maxX: V, minY: _, maxY: w } = h, y = g.length;
    let C = e.max != null ? Number(e.max) : Math.max(...g), x = e.min != null ? Number(e.min) : Math.min(...g);
    x > 0 && e.min == null && (x = 0), C < 0 && e.max == null && (C = 0);
    const A = V / (y === 1 ? 2 : y), P = (w - _) / (C - x || 1), D = w - Math.abs(x * P);
    return g.map((M, E) => {
      const T = Math.abs(P * M);
      return { x: S + E * A, y: D - T + +(M < 0) * T, height: T, value: M };
    });
  }
  const f = I(() => {
    const g = [], h = d(c.value, u.value), S = h.length;
    for (let V = 0; g.length < S; V++) {
      const _ = h[V];
      let w = e.labels[V];
      w || (w = typeof _ == "object" ? _.value : _), g.push({ x: _.x, value: String(w) });
    }
    return g;
  }), v = I(() => d(c.value, u.value)), b = I(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = I(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  ae(() => {
    const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block" }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [g.map((h, S) => p("stop", { offset: S / Math.max(g.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), p("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => p("rect", { x: h.x + b.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !qn() && p(be, null, [p("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), p("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, S) => {
      var _a3;
      return p("text", { x: h.x + b.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: S, value: h.value })) ?? h.value]);
    })]), p("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [p("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function DB(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && MB(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Lm(u, i), Lm(s, i)), v = d / 2 < t ? d / 2 : t, b = Fm(u, i, v), m = Fm(s, i, v);
    return `L${b.x} ${b.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Xi(e) {
  return parseInt(e, 10);
}
function MB(e, t, n) {
  return Xi(e.x + n.x) === Xi(2 * t.x) && Xi(e.y + n.y) === Xi(2 * t.y);
}
function Lm(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Fm(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const pS = z({ fill: Boolean, ...yS() }, "VTrendline"), Nm = te()({ name: "VTrendline", props: pS(), setup(e, t) {
  let { slots: n } = t;
  const a = Ot(), l = I(() => e.id || `trendline-${a}`), o = I(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = Z(0), r = Z(null);
  function s(g, h) {
    const { minX: S, maxX: V, minY: _, maxY: w } = h;
    g.length === 1 && (g = [g[0], g[0]]);
    const y = g.length, C = e.max != null ? Number(e.max) : Math.max(...g), x = e.min != null ? Number(e.min) : Math.min(...g), A = (V - S) / (y - 1), P = (w - _) / (C - x || 1);
    return g.map((D, M) => ({ x: S + M * A, y: w - (D - x) * P, value: D }));
  }
  const u = I(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = I(() => parseFloat(e.lineWidth) || 4), d = I(() => Number(e.width)), f = I(() => {
    const g = Number(e.padding);
    return { minX: g, maxX: d.value - g, minY: g, maxY: parseInt(e.height, 10) - g };
  }), v = I(() => e.modelValue.map((g) => St(g, e.itemValue, g))), b = I(() => {
    const g = [], h = s(v.value, f.value), S = h.length;
    for (let V = 0; g.length < S; V++) {
      const _ = h[V];
      let w = e.labels[V];
      w || (w = typeof _ == "object" ? _.value : _), g.push({ x: _.x, value: String(w) });
    }
    return g;
  });
  fe(() => e.modelValue, async () => {
    if (await Ae(), !e.autoDraw || !r.value || qn()) return;
    const g = r.value, h = g.getTotalLength();
    e.fill ? (g.style.transformOrigin = "bottom center", g.style.transition = "none", g.style.transform = "scaleY(0)", g.getBoundingClientRect(), g.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, g.style.transform = "scaleY(1)") : (g.style.strokeDasharray = `${h}`, g.style.strokeDashoffset = `${h}`, g.getBoundingClientRect(), g.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, g.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function m(g) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return DB(s(v.value, f.value), h, g, parseInt(e.height, 10));
  }
  ae(() => {
    var _a3;
    const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [g.map((h, S) => p("stop", { offset: S / Math.max(g.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [b.value.map((h, S) => {
      var _a4;
      return p("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: S, value: h.value })) ?? h.value]);
    })]), p("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && p("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), BB = z({ type: { type: String, default: "trend" }, ...bS(), ...pS() }, "VSparkline"), RB = te()({ name: "VSparkline", props: BB(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color), o = I(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = I(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ae(() => {
    const r = e.type === "trend" ? Nm : Om, s = e.type === "trend" ? Nm.filterProps(e) : Om.filterProps(e);
    return k(r, K({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), OB = z({ ...we(), ...Tb({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), LB = te()({ name: "VSpeedDial", props: OB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Z(), o = I(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = I(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return ae(() => {
    const r = vo.filterProps(e);
    return k(vo, K(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => k(Ee, { defaults: { VBtn: { size: "small" } } }, { default: () => [k(Jt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), Zd = Symbol.for("vuetify:v-stepper"), SS = z({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), wS = te()({ name: "VStepperActions", props: SS(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Xe();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return ae(() => {
    const r = { onClick: o }, s = { onClick: i };
    return p("div", { class: "v-stepper-actions" }, [k(Ee, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? k($e, r, null)];
    } }), k(Ee, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? k($e, s, null)];
    } })]);
  }), {};
} }), kS = Sa("v-stepper-header"), FB = z({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: _e, default: "$complete" }, editable: Boolean, editIcon: { type: _e, default: "$edit" }, error: Boolean, errorIcon: { type: _e, default: "$error" }, icon: _e, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), NB = z({ ...FB(), ...Tl() }, "VStepperItem"), xS = te()({ name: "VStepperItem", directives: { vRipple: Nt }, props: NB(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ha(e, Zd, true), l = I(() => (a == null ? void 0 : a.value.value) ?? e.value), o = I(() => e.rules.every((f) => f() === true)), i = I(() => !e.disabled && e.editable), r = I(() => !e.disabled && e.editable), s = I(() => e.error || !o.value), u = I(() => e.complete || e.rules.length > 0 && o.value), c = I(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = I(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ae(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), b = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return nt(p("button", { class: ne(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ka(true, "v-stepper-item"), k(pn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? k(Ge, { icon: c.value }, null) : l.value)];
    } }), p("div", { class: "v-stepper-item__content" }, [v && p("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), b && p("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Nt, e.editable && e.ripple, null]]);
  }), {};
} }), $B = z({ ...Oe(is(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), CS = te()({ name: "VStepperWindow", props: $B(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Me(Zd, null), l = Ce(e, "modelValue"), o = I({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = bl.filterProps(e);
    return k(bl, K({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), HB = z({ ...rs() }, "VStepperWindowItem"), _S = te()({ name: "VStepperWindowItem", props: HB(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = pl.filterProps(e);
    return k(pl, K({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), zB = z({ altLabels: Boolean, bgColor: String, completeIcon: _e, editIcon: _e, editable: Boolean, errorIcon: _e, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ..._l() }, "Stepper"), WB = z({ ...zB(), ...Al({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...xd(), ...on(SS(), ["prevText", "nextText"]) }, "VStepper"), jB = te()({ name: "VStepper", props: WB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Ka(e, Zd), { displayClasses: r, mobile: s } = cn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: b, nextText: m } = ho(e), g = I(() => e.items.map((V, _) => {
    const w = St(V, e.itemTitle, V), y = St(V, e.itemValue, _ + 1), C = e.itemProps === true ? V : St(V, e.itemProps), x = { title: w, value: y, ...C };
    return { title: x.title, value: x.value, props: x, raw: V };
  })), h = I(() => a.value.findIndex((V) => i.value.includes(V.id))), S = I(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return vt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: b, nextText: m }, VStepperActions: { color: f, disabled: S, prevText: b, nextText: m } }), ae(() => {
    const V = ja.filterProps(e), _ = !!(n.header || e.items.length), w = e.items.length > 0, y = !e.hideActions && !!(w || n.actions);
    return k(ja, K(V, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [_ && k(kS, { key: "stepper-header" }, { default: () => [g.value.map((C, x) => {
        let { raw: A, ...P } = C;
        return p(be, null, [!!x && k(yn, null, null), k(xS, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), w && k(CS, { key: "stepper-window" }, { default: () => [g.value.map((C) => k(_S, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), y && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? k(wS, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), GB = z({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ..._a(), ...es() }, "VSwitch"), UB = te()({ name: "VSwitch", inheritAttrs: false, props: GB(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "indeterminate"), o = Ce(e, "modelValue"), { loaderClasses: i } = Ei(e), { isFocused: r, focus: s, blur: u } = Ca(e), c = Z(), d = Z(), f = $c && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), b = Ot(), m = B(() => e.id || `switch-${b}`);
  function g() {
    l.value && (l.value = false);
  }
  function h(S) {
    var _a3, _b2;
    S.stopPropagation(), S.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return ae(() => {
    const [S, V] = ea(n), _ = Gt.filterProps(e), w = Wa.filterProps(e);
    return k(Gt, K({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, S, _, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: m.value, focused: r.value, style: e.style }), { ...a, default: (y) => {
      let { id: C, messagesId: x, isDisabled: A, isReadonly: P, isValid: D } = y;
      const M = { model: o, isValid: D };
      return k(Wa, K({ ref: c }, w, { modelValue: o.value, "onUpdate:modelValue": [(E) => o.value = E, g], id: C.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: u }, V), { ...a, default: (E) => {
        let { backgroundColorClasses: T, backgroundColorStyles: O } = E;
        return p("div", { class: ne(["v-switch__track", f ? void 0 : T.value]), style: ge(O.value), onClick: h }, [a["track-true"] && p("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](M)]), a["track-false"] && p("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](M)])]);
      }, input: (E) => {
        let { inputNode: T, icon: O, backgroundColorClasses: W, backgroundColorStyles: H } = E;
        return p(be, null, [T, p("div", { class: ne(["v-switch__thumb", { "v-switch__thumb--filled": O || e.loading }, e.inset || f ? void 0 : W.value]), style: ge(e.inset ? void 0 : H.value) }, [a.thumb ? k(Ee, { defaults: { VIcon: { icon: O, size: "x-small" } } }, { default: () => [a.thumb({ ...M, icon: O })] }) : k(od, null, { default: () => [e.loading ? k(Di, { name: "v-switch", active: true, color: D.value === false ? void 0 : v.value }, { default: (Q) => a.loader ? a.loader(Q) : k(za, { active: Q.isActive, color: Q.color, indeterminate: true, size: "16", width: "2" }, null) }) : O && k(Ge, { key: String(O), icon: O, size: "x-small" }, null)] })])]);
      } });
    } });
  }), At({}, d);
} }), YB = z({ color: String, height: [Number, String], window: Boolean, ...we(), ...Ct(), ...Il(), ...ot(), ...Te(), ...We() }, "VSystemBar"), KB = te()({ name: "VSystemBar", props: YB(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Ye(() => e.color), { elevationClasses: i } = Pt(e), { roundedClasses: r } = ct(e), { ssrBootStyles: s } = Pl(), u = I(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = Vl({ id: e.name, order: I(() => parseInt(e.order, 10)), position: ce("top"), layoutSize: u, elementSize: u, active: I(() => true), absolute: B(() => e.absolute) });
  return ae(() => k(e.tag, { class: ne(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: ge([o.value, c.value, s.value, e.style]) }, n)), {};
} }), Jd = Symbol.for("vuetify:v-tabs"), IS = z({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Oe(Qr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), VS = te()({ name: "VTab", props: IS(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Rt(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Ye(() => e.sliderColor), s = Z(), u = Z(), c = I(() => e.direction === "horizontal"), d = I(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(g, h) {
    return { opacity: [0, 1] };
  }
  function v(g, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function b(g, h) {
    const S = h.getBoundingClientRect(), V = g.getBoundingClientRect(), _ = c.value ? "x" : "y", w = c.value ? "X" : "Y", y = c.value ? "right" : "bottom", C = c.value ? "width" : "height", x = S[_], A = V[_], P = x > A ? S[y] - V[y] : S[_] - V[_], D = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", E = (Math.abs(P) + (Math.sign(P) < 0 ? S[C] : V[C])) / Math.max(S[C], V[C]) || 0, T = S[C] / V[C] || 0, O = 1.5;
    return { transform: [`translate${w}(${P}px) scale${w}(${T})`, `translate${w}(${P / O}px) scale${w}(${(E - 1) / O + 1})`, "none"], transformOrigin: Array(3).fill(D) };
  }
  function m(g) {
    var _a3, _b2;
    let { value: h } = g;
    if (h) {
      const S = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), V = u.value;
      if (!S || !V) return;
      const _ = getComputedStyle(S).backgroundColor, w = { fade: f, grow: v, shift: b }[e.sliderTransition ?? "shift"] ?? b, y = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      ua(V, { backgroundColor: [_, _], ...w(V, S) }, { duration: y, easing: ni });
    }
  }
  return ae(() => {
    const g = $e.filterProps(e);
    return k($e, K({ symbol: Jd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, g, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return p(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && p("div", { ref: u, class: ne(["v-tab__slider", e.inset ? i.value : l.value]), style: ge([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), At({}, s);
} }), qB = z({ ...Oe(is(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), PS = te()({ name: "VTabsWindow", props: qB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Me(Jd, null), l = Ce(e, "modelValue"), o = I({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = bl.filterProps(e);
    return k(bl, K({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), XB = z({ ...rs() }, "VTabsWindowItem"), AS = te()({ name: "VTabsWindowItem", props: XB(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = pl.filterProps(e);
    return k(pl, K({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function ZB(e) {
  return e ? e.map((t) => gl(t) ? t : { text: t, value: t }) : [];
}
const JB = z({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...on(IS(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...fd({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...mt(), ...Te() }, "VTabs"), QB = te()({ name: "VTabs", props: JB(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = I(() => ZB(e.items)), { densityClasses: i } = Ht(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Ye(() => e.bgColor), { scopeId: u } = El();
  return vt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), ae(() => {
    const c = fi.filterProps(e), d = !!(a.window || e.items.length > 0);
    return p(be, null, [k(fi, K(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": he(e.height), "--v-tabs-inset-padding": e.inset ? he(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? he(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: Jd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? k(VS, K(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && k(PS, K({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? k(AS, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), eR = z({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Eb(), ...Oe(_a(), ["direction"]), ...Fi() }, "VTextarea"), tR = te()({ name: "VTextarea", directives: { vIntersect: Fn }, inheritAttrs: false, props: eR(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue"), { isFocused: i, focus: r, blur: s } = Ca(e), { onIntersect: u } = Db(e), c = I(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = I(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = Z(), v = Z(), b = ce(""), m = Z(), g = Z(0), { platform: h } = cn(), S = Cd(e), V = I(() => e.persistentPlaceholder || i.value || e.active);
  function _() {
    var _a3;
    S.isSuppressing.value && S.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function w(T) {
    _(), a("click:control", T);
  }
  function y(T) {
    a("mousedown:control", T);
  }
  function C(T) {
    T.stopPropagation(), _(), Ae(() => {
      o.value = "", Vi(e["onClick:clear"], T);
    });
  }
  function x(T) {
    var _a3;
    const O = T.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = O.value;
      return;
    }
    const W = O.value, H = O.selectionStart, Q = O.selectionEnd;
    o.value = W, Ae(() => {
      let ee = 0;
      W.trimStart().length === O.value.length && (ee = W.length - O.value.length), H != null && (O.selectionStart = H - ee), Q != null && (O.selectionEnd = Q - ee);
    });
  }
  const A = Z(), P = Z(Number(e.rows)), D = I(() => ["plain", "underlined"].includes(e.variant));
  ut(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function M() {
    Ae(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        g.value = 12;
        return;
      }
      const { offsetWidth: T, clientWidth: O } = m.value;
      g.value = Math.max(0, T - O);
    }), e.autoGrow && Ae(() => {
      if (!A.value || !v.value) return;
      const T = getComputedStyle(A.value), O = getComputedStyle(v.value.$el), W = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), H = A.value.scrollHeight, Q = parseFloat(T.lineHeight), ee = Math.max(parseFloat(e.rows) * Q + W, parseFloat(O.getPropertyValue("--v-input-control-height"))), $ = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Q + W || 1 / 0, q = Ke(H ?? 0, ee, $);
      P.value = Math.floor((q - W) / Q), b.value = he(q);
    });
  }
  bt(M), fe(o, M), fe(() => e.rows, M), fe(() => e.maxHeight, M), fe(() => e.maxRows, M), fe(() => e.density, M), fe(P, (T) => {
    a("update:rows", T);
  });
  let E;
  return fe(A, (T) => {
    T ? (E = new ResizeObserver(M), E.observe(A.value)) : E == null ? void 0 : E.disconnect();
  }), Ut(() => {
    E == null ? void 0 : E.disconnect();
  }), ae(() => {
    const T = !!(l.counter || e.counter || e.counterValue), O = !!(T || l.details), [W, H] = ea(n), { modelValue: Q, ...ee } = Gt.filterProps(e), $ = { ...Ga.filterProps(e), "onClick:clear": C };
    return k(Gt, K({ ref: f, modelValue: o.value, "onUpdate:modelValue": (q) => o.value = q, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": D.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? he(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": he(g.value) }, e.style] }, W, ee, { centerAffix: P.value === 1 && !D.value, focused: i.value }), { ...l, default: (q) => {
      let { id: j, isDisabled: N, isDirty: G, isReadonly: ue, isValid: pe, hasDetails: F } = q;
      return k(Ga, K({ ref: v, style: { "--v-textarea-control-height": b.value }, onClick: w, onMousedown: y, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, $, { id: j.value, active: V.value || G.value, labelId: `${j.value}-label`, centerAffix: P.value === 1 && !D.value, dirty: G.value || e.dirty, disabled: N.value, focused: i.value, details: F.value, error: pe.value === false }), { ...l, default: (J) => {
        let { props: { class: de, ...ve }, controlRef: ie } = J;
        return p(be, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), nt(p("textarea", K({ ref: (R) => m.value = ie.value = R, class: de, value: o.value, onInput: x, autofocus: e.autofocus, readonly: ue.value, disabled: N.value, placeholder: e.placeholder, rows: e.rows, name: S.fieldName.value, autocomplete: S.fieldAutocomplete.value, onFocus: _, onBlur: s, "aria-labelledby": `${j.value}-label` }, ve, H), null), [[Fn, { handler: u }, null, { once: true }]]), e.autoGrow && nt(p("textarea", { class: ne([de, "v-textarea__sizer"]), id: `${ve.id}-sizer`, "onUpdate:modelValue": (R) => o.value = R, ref: A, readonly: true, "aria-hidden": "true" }, null), [[a0, o.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: O ? (q) => {
      var _a3;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, q), T && p(be, null, [p("span", null, null), k(ts, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), At({}, f, v, m);
} }), nR = z({ withBackground: Boolean, ...we(), ...We(), ...Te() }, "VThemeProvider"), aR = te()({ name: "VThemeProvider", props: nR(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e);
  return () => {
    var _a3;
    return e.withBackground ? k(e.tag, { class: ne(["v-theme-provider", a.value, e.class]), style: ge(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), lR = z({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: _e, iconColor: String, lineColor: String, ...we(), ...ot(), ...aa(), ...Ct() }, "VTimelineDivider"), oR = te()({ name: "VTimelineDivider", props: lR(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = po(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Ye(() => e.dotColor), { roundedClasses: r } = ct(e, "v-timeline-divider__dot"), { elevationClasses: s } = Pt(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Ye(() => e.lineColor);
  return ae(() => p("div", { class: ne(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ge(e.style) }, [p("div", { class: ne(["v-timeline-divider__before", u.value]), style: ge(c.value) }, null), !e.hideDot && p("div", { key: "dot", class: ne(["v-timeline-divider__dot", s.value, r.value, a.value]), style: ge(l.value) }, [p("div", { class: ne(["v-timeline-divider__inner-dot", i.value, r.value]), style: ge(o.value) }, [n.default ? k(Ee, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : k(Ge, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), p("div", { class: ne(["v-timeline-divider__after", u.value]), style: ge(c.value) }, null)])), {};
} }), TS = z({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: _e, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...we(), ...kt(), ...Ct(), ...ot(), ...aa(), ...Te() }, "VTimelineItem"), iR = te()({ name: "VTimelineItem", props: TS(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = xt(e), l = ce(0), o = Z();
  return fe(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ae(() => {
    var _a3, _b2;
    return p("div", { class: ne(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ge([{ "--v-timeline-dot-size": he(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${he(e.lineInset)})` : he(0) }, e.style]) }, [p("div", { class: "v-timeline-item__body", style: ge(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), k(oR, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && p("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), rR = z({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...on(TS({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...we(), ...mt(), ...Te(), ...We() }, "VTimeline"), sR = te()({ name: "VTimeline", props: rR(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { densityClasses: l } = Ht(e), { rtlClasses: o } = It();
  vt({ VTimelineDivider: { lineColor: B(() => e.lineColor) }, VTimelineItem: { density: B(() => e.density), dotColor: B(() => e.dotColor), fillDot: B(() => e.fillDot), hideOpposite: B(() => e.hideOpposite), iconColor: B(() => e.iconColor), lineColor: B(() => e.lineColor), lineInset: B(() => e.lineInset), size: B(() => e.size) } });
  const i = I(() => {
    const s = e.side ? e.side : e.density !== "default" ? "end" : null;
    return s && `v-timeline--side-${s}`;
  }), r = I(() => {
    const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
    switch (e.truncateLine) {
      case "both":
        return s;
      case "start":
        return s[0];
      case "end":
        return s[1];
      default:
        return null;
    }
  });
  return ae(() => k(e.tag, { class: ne(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: ge([{ "--v-timeline-line-thickness": he(e.lineThickness) }, e.style]) }, n)), {};
} }), uR = z({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), sc = te()({ name: "VTimePickerClock", props: uR(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = Z(null), l = Z(null), o = Z(void 0), i = Z(false), r = Z(null), s = Z(null), u = Bg(($) => n("change", $), 750), { textColorClasses: c, textColorStyles: d } = Rt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Ye(() => e.color), b = I(() => e.max - e.min + 1), m = I(() => e.double ? b.value / 2 : b.value), g = I(() => 360 / m.value), h = I(() => g.value * Math.PI / 180), S = I(() => e.modelValue == null ? e.min : e.modelValue), V = I(() => 0.62), _ = I(() => {
    const $ = [];
    for (let q = e.min; q <= e.max; q = q + e.step) $.push(q);
    return $;
  });
  fe(() => e.modelValue, ($) => {
    o.value = $;
  });
  function w($) {
    o.value !== $ && (o.value = $), n("input", $);
  }
  function y($) {
    return !e.allowedValues || e.allowedValues($);
  }
  function C($) {
    if (!e.scrollable || e.disabled) return;
    $.preventDefault();
    const q = Math.sign(-$.deltaY || 1);
    let j = S.value;
    do
      j = j + q, j = (j - e.min + b.value) % b.value + e.min;
    while (!y(j) && j !== S.value);
    j !== e.displayedValue && w(j), u(j);
  }
  function x($) {
    return e.double && $ - e.min >= m.value;
  }
  function A($) {
    return x($) ? V.value : 1;
  }
  function P($) {
    const q = e.rotate * Math.PI / 180;
    return { x: Math.sin(($ - e.min) * h.value + q) * A($), y: -Math.cos(($ - e.min) * h.value + q) * A($) };
  }
  function D($, q) {
    const j = (Math.round($ / g.value) + (q ? m.value : 0)) % b.value + e.min;
    return $ < 360 - g.value / 2 ? j : q ? e.max - m.value + 1 : e.min;
  }
  function M($) {
    const { x: q, y: j } = P($);
    return { left: `${Math.round(50 + q * 50)}%`, top: `${Math.round(50 + j * 50)}%` };
  }
  function E($, q) {
    const j = q.x - $.x, N = q.y - $.y;
    return Math.sqrt(j * j + N * N);
  }
  function T($, q) {
    const j = 2 * Math.atan2(q.y - $.y - E($, q), q.x - $.x);
    return Math.abs(j * 180 / Math.PI);
  }
  function O($) {
    r.value === null && (r.value = $), s.value = $, w($);
  }
  function W($) {
    var _a3, _b2;
    if ($.preventDefault(), !i.value && $.type !== "click" || !a.value) return;
    const { width: q, top: j, left: N } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: G } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ue, clientY: pe } = "touches" in $ ? $.touches[0] : $, F = { x: q / 2, y: -q / 2 }, J = { x: ue - N, y: j - pe }, de = Math.round(T(F, J) - e.rotate + 360) % 360, ve = e.double && E(F, J) < (G + G * V.value) / 4, ie = Math.ceil(15 / g.value);
    let R;
    for (let L = 0; L < ie; L++) if (R = D(de + L * g.value, ve), y(R) || (R = D(de - L * g.value, ve), y(R))) return O(R);
  }
  function H($) {
    e.disabled || ($.preventDefault(), window.addEventListener("mousemove", W), window.addEventListener("touchmove", W), window.addEventListener("mouseup", Q), window.addEventListener("touchend", Q), r.value = null, s.value = null, i.value = true, W($));
  }
  function Q($) {
    $.stopPropagation(), ee(), i.value = false, s.value !== null && y(s.value) && n("change", s.value);
  }
  function ee() {
    window.removeEventListener("mousemove", W), window.removeEventListener("touchmove", W), window.removeEventListener("mouseup", Q), window.removeEventListener("touchend", Q);
  }
  yt(ee), ae(() => p("div", { class: ne([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: H, onTouchstart: H, onWheel: C, ref: a }, [p("div", { class: "v-time-picker-clock__inner", ref: l }, [p("div", { class: ne([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": x(e.modelValue) }, c.value]), style: ge([{ transform: `rotate(${e.rotate + g.value * (S.value - e.min)}deg) scaleY(${A(S.value)})` }, d.value]) }, null), _.value.map(($) => {
    const q = $ === S.value;
    return p("div", { class: ne([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": q, "v-time-picker-clock__item--disabled": e.disabled || !y($) }, q && f.value]), style: ge([M($), q && v.value]) }, [p("span", null, [e.format($)])]);
  })])]));
} }), cR = z({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), eu = te()({ name: "VTimePickerField", props: cR(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color), o = Z(), i = ce(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ae(() => k(Jn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ne(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: ge(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), At({}, o);
} });
function fn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function ES(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Yo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function Do(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function dR(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function fR(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const DS = z({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function MS(e) {
  const t = I(() => {
    const o = e.min ? Number(e.min.split(":")[0]) : 0, i = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < o || r > i ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = I(() => {
    const [o, i] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], u = o * 60 + i, c = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const v = 60 * d + f;
        if (v < u || v > c) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = I(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (v, b, m) => {
      if (v !== null && b !== null) {
        const g = 3600 * v + 60 * b + m;
        if (g < d || g > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => dR(v, r).value : (v) => fR(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const vR = z({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...DS() }, "VTimePickerControls"), uc = te()({ name: "VTimePickerControls", props: vR(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Xe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = MS(e), s = I(() => e.hour !== null ? e.ampm ? Yo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = I(() => e.minute !== null ? Number(e.minute) : null), c = I(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = I(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = I(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (E) => {
    if (E == null || isNaN(Number(E))) return null;
    const T = Number(E);
    return e.ampm ? fn(ES(T)) : fn(T);
  }, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const T = typeof E == "string" ? Do(E) : Number(E);
    return T === null ? null : e.ampm ? Yo(T, e.period ?? "am") : Ke(T, 0, 23);
  } }, b = Ce(e, "hour", void 0, v.in, v.out), m = { in: (E) => E != null && !isNaN(Number(E)) ? fn(`${E}`) : null, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const T = typeof E == "string" ? Do(E) : Number(E);
    return T !== null ? Ke(T, 0, 59) : null;
  } }, g = Ce(e, "minute", void 0, m.in, m.out), h = Ce(e, "second", void 0, m.in, m.out);
  function S(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const T = e.period === "am", O = e.ampm ? Yo(Number(b.value ?? 0), T ? "am" : "pm") : Number(b.value ?? 0), W = r("hour", O, E.key === "ArrowUp"), H = T && W >= 12 || !T && W < 12;
    e.ampm && H ? (n("update:period", e.period === "am" ? "pm" : "am"), Ae(() => b.value = fn(W))) : b.value = fn(W);
  }
  function V(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const T = Number(g.value ?? 0), O = r("minute", T, E.key === "ArrowUp", s.value);
    g.value = fn(O);
  }
  function _(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const T = Number(h.value ?? 0), O = r("second", T, E.key === "ArrowUp", s.value, u.value);
    h.value = fn(O);
  }
  function w(E, T, O) {
    return (W) => {
      if (!W.data) return;
      const H = W.target, { value: Q, selectionStart: ee, selectionEnd: $ } = H ?? {};
      if (Do(W.data) === null) {
        W.preventDefault();
        return;
      }
      const q = Q ? Q.slice(0, ee) + W.data + Q.slice($) : W.data;
      if (q.length > 2) {
        if (ee === $ && $ === 0 && W.data.trim().startsWith("0")) {
          W.preventDefault(), H.value = q.trim().substring(0, 2), O(H.value), W.data.trim().length === 1 && H.setSelectionRange(1, 1);
          return;
        }
        if (ee === $ && $ === 1 && Q.startsWith("0")) {
          W.preventDefault(), H.value = q.trim().substring(0, 2), O(H.value);
          return;
        }
        const N = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (Do(q) > N) {
          W.preventDefault(), H.value = fn(String(Do(W.data)).substring(0, 2)), O(H.value);
          return;
        }
      }
      const j = E(q);
      T(j) && W.preventDefault();
    };
  }
  function y(E) {
    n("update:period", E);
    const T = r("hour", E === "am" ? 23 : 11, true);
    Ae(() => b.value = fn(T));
  }
  const C = Z(), x = Z(), A = Z();
  fe(() => e.viewMode, (E, T) => {
    switch (T) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        x.value.blur();
        break;
      case "second":
        A.value.blur();
        break;
    }
  });
  const P = w(v.out, (E) => v.in(E) === b.value, (E) => b.value = E), D = w(m.out, (E) => m.in(E) === g.value, (E) => g.value = E), M = w(m.out, (E) => m.in(E) === h.value, (E) => h.value = E);
  return ae(() => p("div", { class: "v-time-picker-controls" }, [p("div", { class: ne({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [k(eu, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (E) => b.value = E, onKeydown: S, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), p("span", { class: "v-time-picker-controls__time__separator" }, [Et(":")]), k(eu, { ref: x, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: g.value, "onUpdate:modelValue": (E) => g.value = E, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && p("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Et(":")]), e.useSeconds && p(be, null, [k(eu, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (E) => h.value = E, onKeydown: _, onBeforeinput: M, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && p("div", { class: "v-time-picker-controls__ampm" }, [k($e, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? y("am") : null }, null), k($e, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? y("pm") : null }, null)])])])), {};
} }), mR = z({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...DS(), ...Oe(ss({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...mt() }, "VTimePicker"), hR = te()({ name: "VTimePicker", props: mR(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Xe(), { densityClasses: o } = Ht(e), i = Z(null), r = Z(null), s = Z(null), u = Z(null), c = Z(null), d = Z(null), f = Ce(e, "period", "am"), v = Ce(e, "viewMode", "hour"), b = Z(null), m = Z(null), g = I(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: S, isAllowedSecond: V } = MS(e), _ = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function w() {
    const P = y();
    P !== null && P !== e.modelValue && n("update:modelValue", P), _.value && n("update:modelValue", null);
  }
  fe(i, w), fe(r, w), fe(s, w), fe(() => e.modelValue, (P) => C(P)), fe(() => e.useSeconds, (P, D) => {
    D && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), bt(() => {
    C(e.modelValue);
  });
  function y() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${fn(i.value)}:${fn(r.value)}` + (e.useSeconds ? `:${fn(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [D, , M, , E, T] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = T ? Yo(parseInt(D, 10), T) : parseInt(D, 10), r.value = parseInt(M, 10), s.value = parseInt(E || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function x(P) {
    v.value === "hour" ? i.value = g.value ? Yo(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
  }
  function A(P) {
    switch (v.value || "hour") {
      case "hour":
        n("update:hour", P);
        break;
      case "minute":
        n("update:minute", P);
        break;
      case "second":
        n("update:second", P);
        break;
    }
    const D = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || y() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), D && w());
  }
  ae(() => {
    const P = Oe(mo.filterProps(e), ["hideHeader"]), D = uc.filterProps(e), M = sc.filterProps(Oe(e, ["format", "modelValue", "min", "max"])), E = v.value === "hour" ? h.value : v.value === "minute" ? (T) => S.value(i.value, T) : (T) => V.value(i.value, r.value, T);
    return k(mo, K(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => k(uc, K(D, { ampm: g.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => v.value = T, ref: b }), null), default: () => k(sc, K(M, { allowedValues: E, double: v.value === "hour" && !g.value, format: v.value === "hour" ? g.value ? ES : (T) => T : (T) => fn(T, 2), max: v.value === "hour" ? g.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && g.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: A, onInput: x, ref: m }), null), actions: a.actions });
  });
} }), gR = z({ ...we(), ...wn({ variant: "text" }) }, "VToolbarItems"), yR = te()({ name: "VToolbarItems", props: gR(), setup(e, t) {
  let { slots: n } = t;
  return vt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), ae(() => {
    var _a3;
    return p("div", { class: ne(["v-toolbar-items", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), bR = z({ id: String, interactive: Boolean, text: String, ...Oe(Li({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), BS = te()({ name: "VTooltip", props: bR(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = El(), o = Ot(), i = B(() => e.id || `v-tooltip-${o}`), r = Z(), s = I(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = I(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = I(() => K({ "aria-describedby": i.value }, e.activatorProps));
  return ae(() => {
    const f = Zn.filterProps(e);
    return k(Zn, K({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, b = new Array(v), m = 0; m < v; m++) b[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...b)) ?? e.text;
    } });
  }), At({}, r);
} }), pR = z({ ...Oe(db({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), cc = te()({ name: "VTreeviewGroup", props: pR(), setup(e, t) {
  let { slots: n } = t;
  const a = Z(), l = I(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = I(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ae(() => {
    const i = vi.filterProps(e);
    return k(vi, K(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => p(be, null, [k(Ee, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), RS = Symbol.for("vuetify:v-treeview"), OS = z({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: _e, ...mb({ slim: true }) }, "VTreeviewItem"), dc = te()({ name: "VTreeviewItem", props: OS(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Me(RS, { visibleIds: Z() }).visibleIds, o = Z(), i = I(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = I(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = I(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = I(() => {
    var _a3;
    return l.value && !l.value.has(Pe((_a3 = o.value) == null ? void 0 : _a3.id));
  });
  function c(f) {
    var _a3, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a3 = o.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return ae(() => {
    var _a3;
    const f = Vn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return k(Vn, K({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (b) => {
      var _a4;
      return p(be, null, [e.indentLines && e.indentLines.length > 0 ? p("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => p("div", { class: ne(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && k(yd, { start: true }, { default: () => [e.toggleIcon ? p(be, null, [n.toggle ? k(Ee, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...b, loading: e.loading, props: { onClick: d } })] }) : k($e, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => k(za, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : p("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? k(Ee, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, b)];
      } }) : p(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, b), e.prependAvatar && k(pn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && k(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), At({}, o);
} }), LS = z({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, falseIcon: _e, trueIcon: _e, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...on(OS(), ["hideActions"]), ...mt() }, "VTreeviewChildren"), Ir = te()({ name: "VTreeviewChildren", props: LS(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(/* @__PURE__ */ new Set()), l = Z([]), o = I(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
  async function i(s) {
    var _a3, _b2;
    try {
      if (!((_a3 = e.items) == null ? void 0 : _a3.length) || !e.loadChildren) return;
      ((_b2 = s == null ? void 0 : s.children) == null ? void 0 : _b2.length) === 0 && (a.add(s.value), await e.loadChildren(s.raw));
    } finally {
      a.delete(s.value);
    }
  }
  function r(s, u) {
    e.selectable && s(u);
  }
  return () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((s, u, c) => {
      var _a4, _b3;
      const { children: d, props: f } = s, v = a.has(s.value), b = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, g = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: g, path: [...e.path, u], hideAction: e.hideActions }, S = fC({ depth: m, isLast: g, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), V = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return p(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && k(yd, { start: true }, { default: () => [k(Nn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (x) => r(C.select, x), onClick: (x) => x.stopPropagation(), onKeydown: (x) => {
          ["Enter", "Space"].includes(x.key) && (x.stopPropagation(), r(C.select, C.isSelected));
        } }, null)] }), (_a5 = n.prepend) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s })]);
      }, append: n.append ? (C) => {
        var _a5;
        return (_a5 = n.append) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s });
      } : void 0, title: n.title ? (C) => {
        var _a5;
        return (_a5 = n.title) == null ? void 0 : _a5.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0, subtitle: n.subtitle ? (C) => {
        var _a5;
        return (_a5 = n.subtitle) == null ? void 0 : _a5.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0 }, _ = cc.filterProps(f), w = Ir.filterProps({ ...e, ...h }), y = { hideActions: e.hideActions, indentLines: S.footer };
      return d ? k(cc, K(_, { value: e.returnObject ? s.raw : _ == null ? void 0 : _.value, rawId: _ == null ? void 0 : _.value }), { activator: (C) => {
        let { props: x, isOpen: A } = C;
        const P = { ...f, ...x, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: S.node, ariaExpanded: A, onToggleExpand: [() => i(s), x.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), x.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return Gi(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => k(dc, K({ ref: (D) => l.value[u] = D }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), V));
      }, default: () => {
        var _a5;
        return p(be, null, [k(Ir, K(w, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: S.children, isLastGroup: b, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: y, item: s.raw, internalItem: s, loading: v })]);
      } }) : Gi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? Gi(n.divider, { props: s.raw }, () => k(yn, s.props, null)) : s.type === "subheader" ? Gi(n.subheader, { props: s.raw }, () => k(Co, s.props, null)) : k(dc, K(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: S.leaf, value: e.returnObject ? Pe(s.raw) : f.value }), V));
    }));
  };
} });
function FS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && FS(n.children, t);
  return t;
}
const SR = z({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...Dl({ filterKeys: ["title"] }), ...Oe(LS(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Oe(Sb({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), wR = te()({ name: "VTreeview", props: SR(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Xe(), { items: o } = pb(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = Ce(e, "activated"), c = Ce(e, "selected"), d = I({ get: () => e.modelValue ?? c.value, set(_) {
    c.value = _, a("update:modelValue", _);
  } }), f = Z(), v = I(() => e.openAll ? V(o.value) : e.opened), b = I(() => FS(o.value)), m = B(() => e.search), { filteredItems: g } = Ml(e, b, m), h = I(() => {
    var _a3;
    if (!m.value) return null;
    const _ = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return _ ? new Set(g.value.flatMap((w) => {
      const y = e.returnObject ? w.raw : w.props.value;
      return [..._(y), ...S(y)].map(Pe);
    })) : null;
  });
  function S(_) {
    var _a3, _b2;
    const w = [], y = (((_a3 = f.value) == null ? void 0 : _a3.children.get(_)) ?? []).slice();
    for (; y.length; ) {
      const C = y.shift();
      C && (w.push(C), y.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return w;
  }
  function V(_) {
    let w = [];
    for (const y of _) y.children && (w.push(e.returnObject ? Pe(y.raw) : y.value), y.children && (w = w.concat(V(y.children))));
    return w;
  }
  return Ze(RS, { visibleIds: h }), vt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), ae(() => {
    const _ = fo.filterProps(e), w = Ir.filterProps(e), y = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return k(fo, K({ ref: f }, _, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? k(Vn, { key: "no-data", title: l(e.noDataText) }, null)), k(Ir, K(w, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: y }), n)];
    } });
  }), {};
} }), kR = te()({ name: "VValidation", props: Qy(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = eb(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), xR = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: VP, VAlertTitle: Gy, VApp: TV, VAppBar: ZV, VAppBarNavIcon: xP, VAppBarTitle: CP, VAutocomplete: qA, VAvatar: pn, VBadge: Ob, VBanner: QA, VBannerActions: Lb, VBannerText: Fb, VBottomNavigation: tT, VBottomSheet: aT, VBreadcrumbs: rT, VBreadcrumbsDivider: $b, VBreadcrumbsItem: Hb, VBtn: $e, VBtnGroup: Mu, VBtnToggle: aP, VCalendar: oE, VCard: dE, VCardActions: sp, VCardItem: dp, VCardSubtitle: up, VCardText: fp, VCardTitle: cp, VCarousel: SE, VCarouselItem: kE, VCheckbox: FP, VCheckboxBtn: Nn, VChip: ba, VChipGroup: WP, VClassIcon: Xc, VCode: xE, VCol: JD, VColorPicker: dD, VCombobox: vD, VComponentIcon: xu, VConfirmEdit: hD, VContainer: KD, VCounter: ts, VDataIterator: PD, VDataTable: zD, VDataTableFooter: hi, VDataTableHeaders: Sl, VDataTableRow: Ud, VDataTableRows: wl, VDataTableServer: UD, VDataTableVirtual: jD, VDatePicker: cM, VDatePickerControls: Qu, VDatePickerHeader: ec, VDatePickerMonth: tc, VDatePickerMonths: nc, VDatePickerYears: ac, VDefaultsProvider: Ee, VDialog: Hu, VDialogBottomTransition: BV, VDialogTopTransition: RV, VDialogTransition: qr, VDivider: yn, VEmptyState: fM, VExpandBothTransition: WV, VExpandTransition: Xr, VExpandXTransition: rd, VExpansionPanel: vM, VExpansionPanelText: lc, VExpansionPanelTitle: oc, VExpansionPanels: gM, VFab: bM, VFabTransition: MV, VFadeTransition: si, VField: Ga, VFieldLabel: Ro, VFileInput: CM, VFooter: IM, VForm: PM, VHotkey: DM, VHover: BM, VIcon: Ge, VImg: ya, VInfiniteScroll: OM, VInput: Gt, VItem: NM, VItemGroup: FM, VKbd: ic, VLabel: ko, VLayout: HM, VLayoutItem: WM, VLazy: GM, VLigatureIcon: hC, VList: fo, VListGroup: vi, VListImg: dA, VListItem: Vn, VListItemAction: yd, VListItemMedia: mA, VListItemSubtitle: fb, VListItemTitle: vb, VListSubheader: Co, VLocaleProvider: YM, VMain: qM, VMenu: vo, VMessages: Zy, VNavigationDrawer: lB, VNoSsr: oB, VNumberInput: cB, VOtpInput: fB, VOverlay: Zn, VPagination: Xu, VParallax: hB, VProgressCircular: za, VProgressLinear: Zr, VRadio: yB, VRadioGroup: pB, VRangeSlider: wB, VRating: xB, VResponsive: Tu, VRow: oM, VScaleTransition: od, VScrollXReverseTransition: LV, VScrollXTransition: OV, VScrollYReverseTransition: NV, VScrollYTransition: FV, VSelect: Td, VSelectionControl: Wa, VSelectionControlGroup: qy, VSheet: ja, VSkeletonLoader: VB, VSlideGroup: fi, VSlideGroupItem: PB, VSlideXReverseTransition: HV, VSlideXTransition: $V, VSlideYReverseTransition: zV, VSlideYTransition: id, VSlider: qu, VSnackbar: rc, VSnackbarQueue: EB, VSpacer: Ju, VSparkline: RB, VSpeedDial: LB, VStepper: jB, VStepperActions: wS, VStepperHeader: kS, VStepperItem: xS, VStepperWindow: CS, VStepperWindowItem: _S, VSvgIcon: qc, VSwitch: UB, VSystemBar: KB, VTab: VS, VTable: kl, VTabs: QB, VTabsWindow: PS, VTabsWindowItem: AS, VTextField: Jn, VTextarea: tR, VThemeProvider: aR, VTimePicker: hR, VTimePickerClock: sc, VTimePickerControls: uc, VTimeline: sR, VTimelineItem: iR, VToolbar: Du, VToolbarItems: yR, VToolbarTitle: nd, VTooltip: BS, VTreeview: wR, VTreeviewGroup: cc, VTreeviewItem: dc, VValidation: kR, VVirtualScroll: ns, VWindow: bl, VWindowItem: pl }, Symbol.toStringTag, { value: "Module" }));
function CR(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && NS(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function NS(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const _R = { mounted: CR, unmounted: NS };
function $S(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function HS(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function IR(e, t) {
  t.value !== t.oldValue && (HS(e, t), $S(e, t));
}
const VR = { mounted: $S, unmounted: HS, updated: IR };
function PR(e, t) {
  const n = typeof e == "string" ? pt(e) : e, a = AR(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    mg(null, l);
  } };
}
function AR(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = gl(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = TR(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = $n(e, K(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), mg(c, n);
  };
}
function TR(e, t) {
  const n = /* @__PURE__ */ new Set(), a = (o) => {
    var _a3, _b2;
    for (const i of o) {
      if (!i) continue;
      if (i === e || i.el && e.el && i.el === e.el) return true;
      n.add(i);
      let r;
      if (i.suspense ? r = a([i.ssContent]) : Array.isArray(i.children) ? r = a(i.children) : ((_a3 = i.component) == null ? void 0 : _a3.vnode) && (r = a([(_b2 = i.component) == null ? void 0 : _b2.subTree])), r) return r;
      n.delete(i);
    }
    return false;
  };
  if (!a([t.subTree])) return t;
  const l = Array.from(n).reverse();
  for (const o of l) if (o.component) return o.component;
  return t;
}
const ER = PR(BS, (e) => {
  var _a3;
  return { activator: (gl(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), DR = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: $u, Intersect: Fn, Mutate: _R, Resize: mi, Ripple: Nt, Scroll: VR, Tooltip: ER, Touch: _r }, Symbol.toStringTag, { value: "Module" })), MR = my({ components: xR, directives: DR, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function BR(e) {
  const t = bo();
  let n = true, a = null;
  const l = (o) => {
    var _a3;
    (_a3 = document.getElementById(`panel-${o}`)) == null ? void 0 : _a3.focus({ preventScroll: true });
  };
  e.afterEach((o) => {
    const i = xg(o.name);
    t.panToWaypoint(i, { snap: n }), n || (t.isAnimating.value ? a = i : l(i)), n = false;
  }), fe(t.isAnimating, (o) => {
    !o && a !== null && (l(a), a = null);
  });
}
const RR = $t({ name: "RouteCoordinate", render: () => null }), OR = [...Ci.map((e) => ({ path: e.route, name: e.id, component: RR })), { path: "/:pathMatch(.*)*", redirect: "/" }], Qd = $1({ history: b1("/"), routes: OR }), LR = r0(PV).use(MR).use(Qd);
BR(Qd);
Qd.isReady().then(() => LR.mount("#app"));
