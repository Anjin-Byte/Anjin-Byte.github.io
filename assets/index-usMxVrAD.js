var _a2;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: true, subtree: true });
  function n(l) {
    const i = {};
    return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function a(l) {
    if (l.ep) return;
    l.ep = true;
    const i = n(l);
    fetch(l.href, i);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function hu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const at = {}, Il = [], Bn = () => {
}, lv = () => false, qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yu = (e) => e.startsWith("onUpdate:"), _t = Object.assign, bu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Db = Object.prototype.hasOwnProperty, Ge = (e, t) => Db.call(e, t), Ee = Array.isArray, Pl = (e) => zi(e) === "[object Map]", iv = (e) => zi(e) === "[object Set]", Xc = (e) => zi(e) === "[object Date]", Le = (e) => typeof e == "function", dt = (e) => typeof e == "string", Ln = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", ov = (e) => (Ke(e) || Le(e)) && Le(e.then) && Le(e.catch), rv = Object.prototype.toString, zi = (e) => rv.call(e), Eb = (e) => zi(e).slice(8, -1), sv = (e) => zi(e) === "[object Object]", Xo = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, si = hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Zo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Mb = /-\w/g, Qt = Zo((e) => e.replace(Mb, (t) => t.slice(1).toUpperCase())), Bb = /\B([A-Z])/g, ol = Zo((e) => e.replace(Bb, "-$1").toLowerCase()), Hn = Zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), $r = Zo((e) => e ? `on${Hn(e)}` : ""), Sa = (e, t) => !Object.is(e, t), ko = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, uv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Su = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fb = (e) => {
  const t = dt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zc;
const Jo = () => Zc || (Zc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function me(e) {
  if (Ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = dt(a) ? Nb(a) : me(a);
      if (l) for (const i in l) t[i] = l[i];
    }
    return t;
  } else if (dt(e) || Ke(e)) return e;
}
const Lb = /;(?![^(]*\))/g, $b = /:([^]+)/, Ob = /\/\*[^]*?\*\//g;
function Nb(e) {
  const t = {};
  return e.replace(Ob, "").split(Lb).forEach((n) => {
    if (n) {
      const a = n.split($b);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (dt(e)) t = e;
  else if (Ee(e)) for (let n = 0; n < e.length; n++) {
    const a = ee(e[n]);
    a && (t += a + " ");
  }
  else if (Ke(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Rb(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !dt(t) && (e.class = ee(t)), n && (e.style = me(n)), e;
}
const Hb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wb = hu(Hb);
function cv(e) {
  return !!e || e === "";
}
function zb(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = ku(e[a], t[a]);
  return n;
}
function ku(e, t) {
  if (e === t) return true;
  let n = Xc(e), a = Xc(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Ln(e), a = Ln(t), n || a) return e === t;
  if (n = Ee(e), a = Ee(t), n || a) return n && a ? zb(e, t) : false;
  if (n = Ke(e), a = Ke(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, i = Object.keys(t).length;
    if (l !== i) return false;
    for (const o in e) {
      const r = e.hasOwnProperty(o), s = t.hasOwnProperty(o);
      if (r && !s || !r && s || !ku(e[o], t[o])) return false;
    }
  }
  return String(e) === String(t);
}
const dv = (e) => !!(e && e.__v_isRef === true), Ut = (e) => dt(e) ? e : e == null ? "" : Ee(e) || Ke(e) && (e.toString === rv || !Le(e.toString)) ? dv(e) ? Ut(e.value) : JSON.stringify(e, fv, 2) : String(e), fv = (e, t) => dv(t) ? fv(e, t.value) : Pl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], i) => (n[Or(a, i) + " =>"] = l, n), {}) } : iv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Or(n)) } : Ln(t) ? Or(t) : Ke(t) && !Ee(t) && !sv(t) ? String(t) : t, Or = (e, t = "") => {
  var n;
  return Ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nt;
class vv {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Nt, !t && Nt && (this.index = (Nt.scopes || (Nt.scopes = [])).push(this) - 1);
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
      const n = Nt;
      try {
        return Nt = this, t();
      } finally {
        Nt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Nt, Nt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Nt = this.prevScope, this.prevScope = void 0);
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
function El(e) {
  return new vv(e);
}
function mv() {
  return Nt;
}
function ft(e, t = false) {
  Nt && Nt.cleanups.push(e);
}
let rt;
const Nr = /* @__PURE__ */ new WeakSet();
class gv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Nt && Nt.active && Nt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Nr.has(this) && (Nr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Jc(this), bv(this);
    const t = rt, n = kn;
    rt = this, kn = true;
    try {
      return this.fn();
    } finally {
      Sv(this), rt = t, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) xu(t);
      this.deps = this.depsTail = void 0, Jc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Nr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ds(this) && this.run();
  }
  get dirty() {
    return ds(this);
  }
}
let hv = 0, ui, ci;
function yv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = ci, ci = e;
    return;
  }
  e.next = ui, ui = e;
}
function wu() {
  hv++;
}
function pu() {
  if (--hv > 0) return;
  if (ci) {
    let t = ci;
    for (ci = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ui; ) {
    let t = ui;
    for (ui = void 0; t; ) {
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
function bv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Sv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), xu(a), jb(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function ds(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (kv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function kv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Si) || (e.globalVersion = Si, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ds(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = rt, a = kn;
  rt = e, kn = true;
  try {
    bv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Sa(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    rt = n, kn = a, Sv(e), e.flags &= -3;
  }
}
function xu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) xu(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function jb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kn = true;
const wv = [];
function ea() {
  wv.push(kn), kn = false;
}
function ta() {
  const e = wv.pop();
  kn = e === void 0 ? true : e;
}
function Jc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = rt;
    rt = void 0;
    try {
      t();
    } finally {
      rt = n;
    }
  }
}
let Si = 0;
class Yb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!rt || !kn || rt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== rt) n = this.activeLink = new Yb(rt, this), rt.deps ? (n.prevDep = rt.depsTail, rt.depsTail.nextDep = n, rt.depsTail = n) : rt.deps = rt.depsTail = n, pv(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = rt.depsTail, n.nextDep = void 0, rt.depsTail.nextDep = n, rt.depsTail = n, rt.deps === n && (rt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Si++, this.notify(t);
  }
  notify(t) {
    wu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      pu();
    }
  }
}
function pv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) pv(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Io = /* @__PURE__ */ new WeakMap(), ja = Symbol(""), fs = Symbol(""), ki = Symbol("");
function Rt(e, t, n) {
  if (kn && rt) {
    let a = Io.get(e);
    a || Io.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Cu()), l.map = a, l.key = n), l.track();
  }
}
function Zn(e, t, n, a, l, i) {
  const o = Io.get(e);
  if (!o) {
    Si++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (wu(), t === "clear") o.forEach(r);
  else {
    const s = Ee(e), u = s && Xo(n);
    if (s && n === "length") {
      const c = Number(a);
      o.forEach((d, f) => {
        (f === "length" || f === ki || !Ln(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && r(o.get(n)), u && r(o.get(ki)), t) {
      case "add":
        s ? u && r(o.get("length")) : (r(o.get(ja)), Pl(e) && r(o.get(fs)));
        break;
      case "delete":
        s || (r(o.get(ja)), Pl(e) && r(o.get(fs)));
        break;
      case "set":
        Pl(e) && r(o.get(ja));
        break;
    }
  }
  pu();
}
function Ub(e, t) {
  const n = Io.get(e);
  return n && n.get(t);
}
function yl(e) {
  const t = Pe(e);
  return t === e ? t : (Rt(t, "iterate", ki), un(e) ? t : t.map(xn));
}
function Qo(e) {
  return Rt(e = Pe(e), "iterate", ki), e;
}
function ya(e, t) {
  return na(e) ? Ml(ka(e) ? xn(t) : t) : xn(t);
}
const Kb = { __proto__: null, [Symbol.iterator]() {
  return Rr(this, Symbol.iterator, (e) => ya(this, e));
}, concat(...e) {
  return yl(this).concat(...e.map((t) => Ee(t) ? yl(t) : t));
}, entries() {
  return Rr(this, "entries", (e) => (e[1] = ya(this, e[1]), e));
}, every(e, t) {
  return Un(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Un(this, "filter", e, t, (n) => n.map((a) => ya(this, a)), arguments);
}, find(e, t) {
  return Un(this, "find", e, t, (n) => ya(this, n), arguments);
}, findIndex(e, t) {
  return Un(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Un(this, "findLast", e, t, (n) => ya(this, n), arguments);
}, findLastIndex(e, t) {
  return Un(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Un(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Hr(this, "includes", e);
}, indexOf(...e) {
  return Hr(this, "indexOf", e);
}, join(e) {
  return yl(this).join(e);
}, lastIndexOf(...e) {
  return Hr(this, "lastIndexOf", e);
}, map(e, t) {
  return Un(this, "map", e, t, void 0, arguments);
}, pop() {
  return Jl(this, "pop");
}, push(...e) {
  return Jl(this, "push", e);
}, reduce(e, ...t) {
  return Qc(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Qc(this, "reduceRight", e, t);
}, shift() {
  return Jl(this, "shift");
}, some(e, t) {
  return Un(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Jl(this, "splice", e);
}, toReversed() {
  return yl(this).toReversed();
}, toSorted(e) {
  return yl(this).toSorted(e);
}, toSpliced(...e) {
  return yl(this).toSpliced(...e);
}, unshift(...e) {
  return Jl(this, "unshift", e);
}, values() {
  return Rr(this, "values", (e) => ya(this, e));
} };
function Rr(e, t, n) {
  const a = Qo(e), l = a[t]();
  return a !== e && !un(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = n(i.value)), i;
  }), l;
}
const Gb = Array.prototype;
function Un(e, t, n, a, l, i) {
  const o = Qo(e), r = o !== e && !un(e), s = o[t];
  if (s !== Gb[t]) {
    const d = s.apply(e, i);
    return r ? xn(d) : d;
  }
  let u = n;
  o !== e && (r ? u = function(d, f) {
    return n.call(this, ya(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(o, u, a);
  return r && l ? l(c) : c;
}
function Qc(e, t, n, a) {
  const l = Qo(e);
  let i = n;
  return l !== e && (un(e) ? n.length > 3 && (i = function(o, r, s) {
    return n.call(this, o, r, s, e);
  }) : i = function(o, r, s) {
    return n.call(this, o, ya(e, r), s, e);
  }), l[t](i, ...a);
}
function Hr(e, t, n) {
  const a = Pe(e);
  Rt(a, "iterate", ki);
  const l = a[t](...n);
  return (l === -1 || l === false) && ji(n[0]) ? (n[0] = Pe(n[0]), a[t](...n)) : l;
}
function Jl(e, t, n = []) {
  ea(), wu();
  const a = Pe(e)[t].apply(e, n);
  return pu(), ta(), a;
}
const qb = hu("__proto__,__v_isRef,__isVue"), xv = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ln));
function Xb(e) {
  Ln(e) || (e = String(e));
  const t = Pe(this);
  return Rt(t, "has", e), t.hasOwnProperty(e);
}
class Cv {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return a === (l ? i ? oS : Pv : i ? Iv : Vv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const o = Ee(t);
    if (!l) {
      let s;
      if (o && (s = Kb[n])) return s;
      if (n === "hasOwnProperty") return Xb;
    }
    const r = Reflect.get(t, n, mt(t) ? t : a);
    if ((Ln(n) ? xv.has(n) : qb(n)) || (l || Rt(t, "get", n), i)) return r;
    if (mt(r)) {
      const s = o && Xo(n) ? r : r.value;
      return l && Ke(s) ? Xa(s) : s;
    }
    return Ke(r) ? l ? Xa(r) : Vt(r) : r;
  }
}
class _v extends Cv {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let i = t[n];
    const o = Ee(t) && Xo(n);
    if (!this._isShallow) {
      const u = na(i);
      if (!un(a) && !na(a) && (i = Pe(i), a = Pe(a)), !o && mt(i) && !mt(a)) return u || (i.value = a), true;
    }
    const r = o ? Number(n) < t.length : Ge(t, n), s = Reflect.set(t, n, a, mt(t) ? t : l);
    return t === Pe(l) && (r ? Sa(a, i) && Zn(t, "set", n, a) : Zn(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = Ge(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && Zn(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Ln(n) || !xv.has(n)) && Rt(t, "has", n), a;
  }
  ownKeys(t) {
    return Rt(t, "iterate", Ee(t) ? "length" : ja), Reflect.ownKeys(t);
  }
}
class Zb extends Cv {
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
const Jb = new _v(), Qb = new Zb(), eS = new _v(true);
const vs = (e) => e, so = (e) => Reflect.getPrototypeOf(e);
function tS(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, i = Pe(l), o = Pl(i), r = e === "entries" || e === Symbol.iterator && o, s = e === "keys" && o, u = l[e](...a), c = n ? vs : t ? Ml : xn;
    return !t && Rt(i, "iterate", s ? fs : ja), _t(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function uo(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function nS(e, t) {
  const n = { get(l) {
    const i = this.__v_raw, o = Pe(i), r = Pe(l);
    e || (Sa(l, r) && Rt(o, "get", l), Rt(o, "get", r));
    const { has: s } = so(o), u = t ? vs : e ? Ml : xn;
    if (s.call(o, l)) return u(i.get(l));
    if (s.call(o, r)) return u(i.get(r));
    i !== o && i.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Rt(Pe(l), "iterate", ja), l.size;
  }, has(l) {
    const i = this.__v_raw, o = Pe(i), r = Pe(l);
    return e || (Sa(l, r) && Rt(o, "has", l), Rt(o, "has", r)), l === r ? i.has(l) : i.has(l) || i.has(r);
  }, forEach(l, i) {
    const o = this, r = o.__v_raw, s = Pe(r), u = t ? vs : e ? Ml : xn;
    return !e && Rt(s, "iterate", ja), r.forEach((c, d) => l.call(i, u(c), u(d), o));
  } };
  return _t(n, e ? { add: uo("add"), set: uo("set"), delete: uo("delete"), clear: uo("clear") } : { add(l) {
    !t && !un(l) && !na(l) && (l = Pe(l));
    const i = Pe(this);
    return so(i).has.call(i, l) || (i.add(l), Zn(i, "add", l, l)), this;
  }, set(l, i) {
    !t && !un(i) && !na(i) && (i = Pe(i));
    const o = Pe(this), { has: r, get: s } = so(o);
    let u = r.call(o, l);
    u || (l = Pe(l), u = r.call(o, l));
    const c = s.call(o, l);
    return o.set(l, i), u ? Sa(i, c) && Zn(o, "set", l, i) : Zn(o, "add", l, i), this;
  }, delete(l) {
    const i = Pe(this), { has: o, get: r } = so(i);
    let s = o.call(i, l);
    s || (l = Pe(l), s = o.call(i, l)), r && r.call(i, l);
    const u = i.delete(l);
    return s && Zn(i, "delete", l, void 0), u;
  }, clear() {
    const l = Pe(this), i = l.size !== 0, o = l.clear();
    return i && Zn(l, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = tS(l, e, t);
  }), n;
}
function _u(e, t) {
  const n = nS(e, t);
  return (a, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(Ge(n, l) && l in a ? n : a, l, i);
}
const aS = { get: _u(false, false) }, lS = { get: _u(false, true) }, iS = { get: _u(true, false) };
const Vv = /* @__PURE__ */ new WeakMap(), Iv = /* @__PURE__ */ new WeakMap(), Pv = /* @__PURE__ */ new WeakMap(), oS = /* @__PURE__ */ new WeakMap();
function rS(e) {
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
function sS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rS(Eb(e));
}
function Vt(e) {
  return na(e) ? e : Vu(e, false, Jb, aS, Vv);
}
function uS(e) {
  return Vu(e, false, eS, lS, Iv);
}
function Xa(e) {
  return Vu(e, true, Qb, iS, Pv);
}
function Vu(e, t, n, a, l) {
  if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = sS(e);
  if (i === 0) return e;
  const o = l.get(e);
  if (o) return o;
  const r = new Proxy(e, i === 2 ? a : n);
  return l.set(e, r), r;
}
function ka(e) {
  return na(e) ? ka(e.__v_raw) : !!(e && e.__v_isReactive);
}
function na(e) {
  return !!(e && e.__v_isReadonly);
}
function un(e) {
  return !!(e && e.__v_isShallow);
}
function ji(e) {
  return e ? !!e.__v_raw : false;
}
function Pe(e) {
  const t = e && e.__v_raw;
  return t ? Pe(t) : e;
}
function Tv(e) {
  return !Ge(e, "__v_skip") && Object.isExtensible(e) && uv(e, "__v_skip", true), e;
}
const xn = (e) => Ke(e) ? Vt(e) : e, Ml = (e) => Ke(e) ? Xa(e) : e;
function mt(e) {
  return e ? e.__v_isRef === true : false;
}
function Q(e) {
  return Av(e, false);
}
function ie(e) {
  return Av(e, true);
}
function Av(e, t) {
  return mt(e) ? e : new cS(e, t);
}
class cS {
  constructor(t, n) {
    this.dep = new Cu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Pe(t), this._value = n ? t : xn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || un(t) || na(t);
    t = a ? t : Pe(t), Sa(t, n) && (this._rawValue = t, this._value = a ? t : xn(t), this.dep.trigger());
  }
}
function Ht(e) {
  return mt(e) ? e.value : e;
}
function qe(e) {
  return Le(e) ? e() : Ht(e);
}
const dS = { get: (e, t, n) => t === "__v_raw" ? e : Ht(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return mt(l) && !mt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function Dv(e) {
  return ka(e) ? e : new Proxy(e, dS);
}
function jl(e) {
  const t = Ee(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Ev(e, n);
  return t;
}
class fS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Pe(t);
    let l = true, i = t;
    if (!Ee(t) || !Xo(String(n))) do
      l = !ji(i) || un(i);
    while (l && (i = i.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ht(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && mt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (mt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Ub(this._raw, this._key);
  }
}
class vS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function M(e, t, n) {
  return mt(e) ? e : Le(e) ? new vS(e) : Ke(e) && arguments.length > 1 ? Ev(e, t, n) : Q(e);
}
function Ev(e, t, n) {
  return new fS(e, t, n);
}
class mS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Si - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && rt !== this) return yv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return kv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function gS(e, t, n = false) {
  let a, l;
  return Le(e) ? a = e : (a = e.get, l = e.set), new mS(a, l, n);
}
const co = {}, Po = /* @__PURE__ */ new WeakMap();
let Ra;
function hS(e, t = false, n = Ra) {
  if (n) {
    let a = Po.get(n);
    a || Po.set(n, a = []), a.push(e);
  }
}
function yS(e, t, n = at) {
  const { immediate: a, deep: l, once: i, scheduler: o, augmentJob: r, call: s } = n, u = (V) => l ? V : un(V) || l === false || l === 0 ? Jn(V, 1) : Jn(V);
  let c, d, f, v, y = false, m = false;
  if (mt(e) ? (d = () => e.value, y = un(e)) : ka(e) ? (d = () => u(e), y = true) : Ee(e) ? (m = true, y = e.some((V) => ka(V) || un(V)), d = () => e.map((V) => {
    if (mt(V)) return V.value;
    if (ka(V)) return u(V);
    if (Le(V)) return s ? s(V, 2) : V();
  })) : Le(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ea();
      try {
        f();
      } finally {
        ta();
      }
    }
    const V = Ra;
    Ra = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ra = V;
    }
  } : d = Bn, t && l) {
    const V = d, k = l === true ? 1 / 0 : l;
    d = () => Jn(V(), k);
  }
  const b = mv(), h = () => {
    c.stop(), b && b.active && bu(b.effects, c);
  };
  if (i && t) {
    const V = t;
    t = (...k) => {
      V(...k), h();
    };
  }
  let x = m ? new Array(e.length).fill(co) : co;
  const I = (V) => {
    if (!(!(c.flags & 1) || !c.dirty && !V)) if (t) {
      const k = c.run();
      if (l || y || (m ? k.some((g, C) => Sa(g, x[C])) : Sa(k, x))) {
        f && f();
        const g = Ra;
        Ra = c;
        try {
          const C = [k, x === co ? void 0 : m && x[0] === co ? [] : x, v];
          x = k, s ? s(t, 3, C) : t(...C);
        } finally {
          Ra = g;
        }
      }
    } else c.run();
  };
  return r && r(I), c = new gv(d), c.scheduler = o ? () => o(I, false) : I, v = (V) => hS(V, false, c), f = c.onStop = () => {
    const V = Po.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const k of V) k();
      Po.delete(c);
    }
  }, t ? a ? I(true) : x = c.run() : o ? o(I.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function Jn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ke(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, mt(e)) Jn(e.value, t, n);
  else if (Ee(e)) for (let a = 0; a < e.length; a++) Jn(e[a], t, n);
  else if (iv(e) || Pl(e)) e.forEach((a) => {
    Jn(a, t, n);
  });
  else if (sv(e)) {
    for (const a in e) Jn(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && Jn(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yi(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    er(l, t, n);
  }
}
function Cn(e, t, n, a) {
  if (Le(e)) {
    const l = Yi(e, t, n, a);
    return l && ov(l) && l.catch((i) => {
      er(i, t, n);
    }), l;
  }
  if (Ee(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++) l.push(Cn(e[i], t, n, a));
    return l;
  }
}
function er(e, t, n, a = true) {
  const l = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || at;
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
    if (i) {
      ea(), Yi(i, null, 10, [e, s, u]), ta();
      return;
    }
  }
  bS(e, n, l, a, o);
}
function bS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Xt = [];
let An = -1;
const Tl = [];
let ba = null, pl = 0;
const Mv = Promise.resolve();
let To = null;
function Te(e) {
  const t = To || Mv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function SS(e) {
  let t = An + 1, n = Xt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Xt[a], i = wi(l);
    i < e || i === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Iu(e) {
  if (!(e.flags & 1)) {
    const t = wi(e), n = Xt[Xt.length - 1];
    !n || !(e.flags & 2) && t >= wi(n) ? Xt.push(e) : Xt.splice(SS(t), 0, e), e.flags |= 1, Bv();
  }
}
function Bv() {
  To || (To = Mv.then(Lv));
}
function kS(e) {
  Ee(e) ? Tl.push(...e) : ba && e.id === -1 ? ba.splice(pl + 1, 0, e) : e.flags & 1 || (Tl.push(e), e.flags |= 1), Bv();
}
function ed(e, t, n = An + 1) {
  for (; n < Xt.length; n++) {
    const a = Xt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Xt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Fv(e) {
  if (Tl.length) {
    const t = [...new Set(Tl)].sort((n, a) => wi(n) - wi(a));
    if (Tl.length = 0, ba) {
      ba.push(...t);
      return;
    }
    for (ba = t, pl = 0; pl < ba.length; pl++) {
      const n = ba[pl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ba = null, pl = 0;
  }
}
const wi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lv(e) {
  try {
    for (An = 0; An < Xt.length; An++) {
      const t = Xt[An];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Yi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; An < Xt.length; An++) {
      const t = Xt[An];
      t && (t.flags &= -2);
    }
    An = -1, Xt.length = 0, Fv(), To = null, (Xt.length || Tl.length) && Lv();
  }
}
let an = null, $v = null;
function Ao(e) {
  const t = an;
  return an = e, $v = e && e.type.__scopeId || null, t;
}
function nt(e, t = an, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && Mo(-1);
    const i = Ao(t);
    let o;
    try {
      o = e(...l);
    } finally {
      Ao(i), a._d && Mo(1);
    }
    return o;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function Xe(e, t) {
  if (an === null) return e;
  const n = or(an), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [i, o, r, s = at] = t[l];
    i && (Le(i) && (i = { mounted: i, updated: i }), i.deep && Jn(o), a.push({ dir: i, instance: n, value: o, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Fa(e, t, n, a) {
  const l = e.dirs, i = t && t.dirs;
  for (let o = 0; o < l.length; o++) {
    const r = l[o];
    i && (r.oldValue = i[o].value);
    let s = r.dir[a];
    s && (ea(), Cn(s, n, 8, [e.el, r, e, t]), ta());
  }
}
function et(e, t) {
  if (jt) {
    let n = jt.provides;
    const a = jt.parent && jt.parent.provides;
    a === n && (n = jt.provides = Object.create(a)), n[e] = t;
  }
}
function Oe(e, t, n = false) {
  const a = Ki();
  if (a || Al) {
    let l = Al ? Al._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Le(t) ? t.call(a && a.proxy) : t;
  }
}
const wS = Symbol.for("v-scx"), pS = () => Oe(wS);
function lt(e, t) {
  return Pu(e, null, t);
}
function ue(e, t, n) {
  return Pu(e, t, n);
}
function Pu(e, t, n = at) {
  const { immediate: a, deep: l, flush: i, once: o } = n, r = _t({}, n), s = t && a || !t && i !== "post";
  let u;
  if (Vi) {
    if (i === "sync") {
      const v = pS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Bn, v.resume = Bn, v.pause = Bn, v;
    }
  }
  const c = jt;
  r.call = (v, y, m) => Cn(v, c, y, m);
  let d = false;
  i === "post" ? r.scheduler = (v) => {
    Ot(v, c && c.suspense);
  } : i !== "sync" && (d = true, r.scheduler = (v, y) => {
    y ? v() : Iu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = yS(e, t, r);
  return Vi && (u ? u.push(f) : s && f()), f;
}
function xS(e, t, n) {
  const a = this.proxy, l = dt(e) ? e.includes(".") ? Ov(a, e) : () => a[e] : e.bind(a, a);
  let i;
  Le(t) ? i = t : (i = t.handler, n = t);
  const o = Gi(this), r = Pu(l, i.bind(a), n);
  return o(), r;
}
function Ov(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const Nv = Symbol("_vte"), Rv = (e) => e.__isTeleport, di = (e) => e && (e.disabled || e.disabled === ""), td = (e) => e && (e.defer || e.defer === ""), nd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ad = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ms = (e, t) => {
  const n = e && e.to;
  return dt(n) ? t ? t(n) : null : n;
}, Hv = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, i, o, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: y, createText: m, createComment: b } } = u, h = di(t.props);
  let { shapeFlag: x, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const k = t.el = m(""), g = t.anchor = m("");
    v(k, n, a), v(g, n, a);
    const C = (T, P) => {
      x & 16 && c(I, T, P, l, i, o, r, s);
    }, w = () => {
      const T = t.target = ms(t.props, y), P = gs(T, t, m, v);
      T && (o !== "svg" && nd(T) ? o = "svg" : o !== "mathml" && ad(T) && (o = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), h || (C(T, P), wo(t, false)));
    };
    h && (C(n, g), wo(t, true)), td(t.props) ? (t.el.__isMounted = false, Ot(() => {
      w(), delete t.el.__isMounted;
    }, i)) : w();
  } else {
    if (td(t.props) && e.el.__isMounted === false) {
      Ot(() => {
        Hv.process(e, t, n, a, l, i, o, r, s, u);
      }, i);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const k = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, w = di(e.props), T = w ? n : g, P = w ? k : C;
    if (o === "svg" || nd(g) ? o = "svg" : (o === "mathml" || ad(g)) && (o = "mathml"), V ? (f(e.dynamicChildren, V, T, l, i, o, r), Mu(e, t, true)) : s || d(e, t, T, P, l, i, o, r, false), h) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fo(t, n, k, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = ms(t.props, y);
      E && fo(t, E, null, u, 0);
    } else w && fo(t, g, C, u, 1);
    wo(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, i) {
  const { shapeFlag: o, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), i && l(s), o & 16) {
    const v = i || !di(f);
    for (let y = 0; y < r.length; y++) {
      const m = r[y];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: fo, hydrate: CS };
function fo(e, t, n, { o: { insert: a }, m: l }, i = 2) {
  i === 0 && a(e.targetAnchor, t, n);
  const { el: o, anchor: r, shapeFlag: s, children: u, props: c } = e, d = i === 2;
  if (d && a(o, t, n), (!d || di(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function CS(e, t, n, a, l, i, { o: { nextSibling: o, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(b, h) {
    let x = h;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor") t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, b._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      x = o(x);
    }
  }
  function v(b, h) {
    h.anchor = d(o(b), h, r(b), n, a, l, i);
  }
  const y = t.target = ms(t.props, s), m = di(t.props);
  if (y) {
    const b = y._lpa || y.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(y, b), t.targetAnchor || gs(y, t, c, u, r(e) === y ? e : null)) : (t.anchor = o(e), f(y, b), t.targetAnchor || gs(y, t, c, u), d(b && o(b), t, y, n, a, l, i))), wo(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const _S = Hv;
function wo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function gs(e, t, n, a, l = null) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[Nv] = o, e && (a(i, e, l), a(o, e, l)), o;
}
const Dn = Symbol("_leaveCb"), Ql = Symbol("_enterCb");
function Wv() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return kt(() => {
    e.isMounted = true;
  }), Lt(() => {
    e.isUnmounting = true;
  }), e;
}
const gn = [Function, Array], zv = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: gn, onEnter: gn, onAfterEnter: gn, onEnterCancelled: gn, onBeforeLeave: gn, onLeave: gn, onAfterLeave: gn, onLeaveCancelled: gn, onBeforeAppear: gn, onAppear: gn, onAfterAppear: gn, onAppearCancelled: gn }, jv = (e) => {
  const t = e.subTree;
  return t.component ? jv(t.component) : t;
}, VS = { name: "BaseTransition", props: zv, setup(e, { slots: t }) {
  const n = Ki(), a = Wv();
  return () => {
    const l = t.default && Tu(t.default(), true);
    if (!l || !l.length) return;
    const i = Yv(l), o = Pe(e), { mode: r } = o;
    if (a.isLeaving) return Wr(i);
    const s = ld(i);
    if (!s) return Wr(i);
    let u = pi(s, o, a, n, (d) => u = d);
    s.type !== Wt && Za(s, u);
    let c = n.subTree && ld(n.subTree);
    if (c && c.type !== Wt && !Wa(c, s) && jv(n).type !== Wt) {
      let d = pi(c, o, a, n);
      if (Za(c, d), r === "out-in" && s.type !== Wt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, Wr(i);
      r === "in-out" && s.type !== Wt ? d.delayLeave = (f, v, y) => {
        const m = Uv(a, c);
        m[String(c.key)] = c, f[Dn] = () => {
          v(), f[Dn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          y(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return i;
  };
} };
function Yv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Wt) {
      t = n;
      break;
    }
  }
  return t;
}
const IS = VS;
function Uv(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function pi(e, t, n, a, l) {
  const { appear: i, mode: o, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: b, onAppear: h, onAfterAppear: x, onAppearCancelled: I } = t, V = String(e.key), k = Uv(n, e), g = (T, P) => {
    T && Cn(T, a, 9, P);
  }, C = (T, P) => {
    const E = P[1];
    g(T, P), Ee(T) ? T.every((B) => B.length <= 1) && E() : T.length <= 1 && E();
  }, w = { mode: o, persisted: r, beforeEnter(T) {
    let P = s;
    if (!n.isMounted) if (i) P = b || s;
    else return;
    T[Dn] && T[Dn](true);
    const E = k[V];
    E && Wa(e, E) && E.el[Dn] && E.el[Dn](), g(P, [T]);
  }, enter(T) {
    if (k[V] === e) return;
    let P = u, E = c, B = d;
    if (!n.isMounted) if (i) P = h || u, E = x || c, B = I || d;
    else return;
    let D = false;
    T[Ql] = (L) => {
      D || (D = true, L ? g(B, [T]) : g(E, [T]), w.delayedLeave && w.delayedLeave(), T[Ql] = void 0);
    };
    const A = T[Ql].bind(null, false);
    P ? C(P, [T, A]) : A();
  }, leave(T, P) {
    const E = String(e.key);
    if (T[Ql] && T[Ql](true), n.isUnmounting) return P();
    g(f, [T]);
    let B = false;
    T[Dn] = (A) => {
      B || (B = true, P(), A ? g(m, [T]) : g(y, [T]), T[Dn] = void 0, k[E] === e && delete k[E]);
    };
    const D = T[Dn].bind(null, false);
    k[E] = e, v ? C(v, [T, D]) : D();
  }, clone(T) {
    const P = pi(T, t, n, a, l);
    return l && l(P), P;
  } };
  return w;
}
function Wr(e) {
  if (tr(e)) return e = aa(e), e.children = null, e;
}
function ld(e) {
  if (!tr(e)) return Rv(e.type) && e.children ? Yv(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Le(n.default)) return n.default();
  }
}
function Za(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Za(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Tu(e, t = false, n) {
  let a = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const r = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === he ? (o.patchFlag & 128 && l++, a = a.concat(Tu(o.children, t, r))) : (t || o.type !== Wt) && a.push(r != null ? aa(o, { key: r }) : o);
  }
  if (l > 1) for (let i = 0; i < a.length; i++) a[i].patchFlag = -2;
  return a;
}
function Ea(e, t) {
  return Le(e) ? _t({ name: e.name }, t, { setup: e }) : e;
}
function Tt() {
  const e = Ki();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Kv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function id(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Do = /* @__PURE__ */ new WeakMap();
function fi(e, t, n, a, l = false) {
  if (Ee(e)) {
    e.forEach((m, b) => fi(m, t && (Ee(t) ? t[b] : t), n, a, l));
    return;
  }
  if (vi(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && fi(e, t, n, a.component.subTree);
    return;
  }
  const i = a.shapeFlag & 4 ? or(a.component) : a.el, o = l ? null : i, { i: r, r: s } = e, u = t && t.r, c = r.refs === at ? r.refs = {} : r.refs, d = r.setupState, f = Pe(d), v = d === at ? lv : (m) => id(c, m) ? false : Ge(f, m), y = (m, b) => !(b && id(c, b));
  if (u != null && u !== s) {
    if (od(t), dt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (mt(u)) {
      const m = t;
      y(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (Le(s)) Yi(s, r, 12, [o, c]);
  else {
    const m = dt(s), b = mt(s);
    if (m || b) {
      const h = () => {
        if (e.f) {
          const x = m ? v(s) ? d[s] : c[s] : y() || !e.k ? s.value : c[e.k];
          if (l) Ee(x) && bu(x, i);
          else if (Ee(x)) x.includes(i) || x.push(i);
          else if (m) c[s] = [i], v(s) && (d[s] = c[s]);
          else {
            const I = [i];
            y(s, e.k) && (s.value = I), e.k && (c[e.k] = I);
          }
        } else m ? (c[s] = o, v(s) && (d[s] = o)) : b && (y(s, e.k) && (s.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const x = () => {
          h(), Do.delete(e);
        };
        x.id = -1, Do.set(e, x), Ot(x, n);
      } else od(e), h();
    }
  }
}
function od(e) {
  const t = Do.get(e);
  t && (t.flags |= 8, Do.delete(e));
}
Jo().requestIdleCallback;
Jo().cancelIdleCallback;
const vi = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function Gv(e, t) {
  qv(e, "a", t);
}
function Au(e, t) {
  qv(e, "da", t);
}
function qv(e, t, n = jt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (nr(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) tr(l.parent.vnode) && PS(a, t, n, l), l = l.parent;
  }
}
function PS(e, t, n, a) {
  const l = nr(t, e, a, true);
  lr(() => {
    bu(a[t], l);
  }, n);
}
function nr(e, t, n = jt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      ea();
      const r = Gi(n), s = Cn(t, n, e, o);
      return r(), ta(), s;
    });
    return a ? l.unshift(i) : l.push(i), i;
  }
}
const oa = (e) => (t, n = jt) => {
  (!Vi || e === "sp") && nr(e, (...a) => t(...a), n);
}, Yl = oa("bm"), kt = oa("m"), Xv = oa("bu"), ar = oa("u"), Lt = oa("bum"), lr = oa("um"), TS = oa("sp"), AS = oa("rtg"), DS = oa("rtc");
function ES(e, t = jt) {
  nr("ec", e, t);
}
const Zv = "components";
function ct(e, t) {
  return Jv(Zv, e, true, t) || e;
}
const MS = Symbol.for("v-ndc");
function BS(e) {
  return dt(e) && Jv(Zv, e, false) || e;
}
function Jv(e, t, n = true, a = false) {
  const l = an || jt;
  if (l) {
    const i = l.type;
    {
      const r = yk(i, false);
      if (r && (r === t || r === Qt(t) || r === Hn(Qt(t)))) return i;
    }
    const o = rd(l[e] || i[e], t) || rd(l.appContext[e], t);
    return !o && a ? i : o;
  }
}
function rd(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Hn(Qt(t))]);
}
function xi(e, t, n, a) {
  let l;
  const i = n, o = Ee(e);
  if (o || dt(e)) {
    const r = o && ka(e);
    let s = false, u = false;
    r && (s = !un(e), u = na(e), e = Qo(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Ml(xn(e[c])) : xn(e[c]) : e[c], c, void 0, i);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, i);
  } else if (Ke(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, i));
  else {
    const r = Object.keys(e);
    l = new Array(r.length);
    for (let s = 0, u = r.length; s < u; s++) {
      const c = r[s];
      l[s] = t(e[c], c, s, i);
    }
  }
  else l = [];
  return l;
}
const hs = (e) => e ? bm(e) ? or(e) : hs(e.parent) : null, mi = _t(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => hs(e.parent), $root: (e) => hs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => em(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Iu(e.update);
}), $nextTick: (e) => e.n || (e.n = Te.bind(e.proxy)), $watch: (e) => xS.bind(e) }), zr = (e, t) => e !== at && !e.__isScriptSetup && Ge(e, t), FS = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: a, data: l, props: i, accessCache: o, type: r, appContext: s } = e;
  if (t[0] !== "$") {
    const f = o[t];
    if (f !== void 0) switch (f) {
      case 1:
        return a[t];
      case 2:
        return l[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (zr(a, t)) return o[t] = 1, a[t];
      if (l !== at && Ge(l, t)) return o[t] = 2, l[t];
      if (Ge(i, t)) return o[t] = 3, i[t];
      if (n !== at && Ge(n, t)) return o[t] = 4, n[t];
      ys && (o[t] = 0);
    }
  }
  const u = mi[t];
  let c, d;
  if (u) return t === "$attrs" && Rt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== at && Ge(n, t)) return o[t] = 4, n[t];
  if (d = s.config.globalProperties, Ge(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: i } = e;
  return zr(l, t) ? (l[t] = n, true) : a !== at && Ge(a, t) ? (a[t] = n, true) : Ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: i, type: o } }, r) {
  let s;
  return !!(n[r] || e !== at && r[0] !== "$" && Ge(e, r) || zr(t, r) || Ge(i, r) || Ge(a, r) || Ge(mi, r) || Ge(l.config.globalProperties, r) || (s = o.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : Ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function sd(e) {
  return Ee(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let ys = true;
function LS(e) {
  const t = em(e), n = e.proxy, a = e.ctx;
  ys = false, t.beforeCreate && ud(t.beforeCreate, e, "bc");
  const { data: l, computed: i, methods: o, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: y, activated: m, deactivated: b, beforeDestroy: h, beforeUnmount: x, destroyed: I, unmounted: V, render: k, renderTracked: g, renderTriggered: C, errorCaptured: w, serverPrefetch: T, expose: P, inheritAttrs: E, components: B, directives: D, filters: A } = t;
  if (u && $S(u, a, null), o) for (const H in o) {
    const X = o[H];
    Le(X) && (a[H] = X.bind(n));
  }
  if (l) {
    const H = l.call(n, n);
    Ke(H) && (e.data = Vt(H));
  }
  if (ys = true, i) for (const H in i) {
    const X = i[H], q = Le(X) ? X.bind(n, n) : Le(X.get) ? X.get.bind(n, n) : Bn, N = !Le(X) && Le(X.set) ? X.set.bind(n) : Bn, K = _({ get: q, set: N });
    Object.defineProperty(a, H, { enumerable: true, configurable: true, get: () => K.value, set: (z) => K.value = z });
  }
  if (r) for (const H in r) Qv(r[H], a, n, H);
  if (s) {
    const H = Le(s) ? s.call(n) : s;
    Reflect.ownKeys(H).forEach((X) => {
      et(X, H[X]);
    });
  }
  c && ud(c, e, "c");
  function W(H, X) {
    Ee(X) ? X.forEach((q) => H(q.bind(n))) : X && H(X.bind(n));
  }
  if (W(Yl, d), W(kt, f), W(Xv, v), W(ar, y), W(Gv, m), W(Au, b), W(ES, w), W(DS, g), W(AS, C), W(Lt, x), W(lr, V), W(TS, T), Ee(P)) if (P.length) {
    const H = e.exposed || (e.exposed = {});
    P.forEach((X) => {
      Object.defineProperty(H, X, { get: () => n[X], set: (q) => n[X] = q, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  k && e.render === Bn && (e.render = k), E != null && (e.inheritAttrs = E), B && (e.components = B), D && (e.directives = D), T && Kv(e);
}
function $S(e, t, n = Bn) {
  Ee(e) && (e = bs(e));
  for (const a in e) {
    const l = e[a];
    let i;
    Ke(l) ? "default" in l ? i = Oe(l.from || a, l.default, true) : i = Oe(l.from || a) : i = Oe(l), mt(i) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => i.value, set: (o) => i.value = o }) : t[a] = i;
  }
}
function ud(e, t, n) {
  Cn(Ee(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qv(e, t, n, a) {
  let l = a.includes(".") ? Ov(n, a) : () => n[a];
  if (dt(e)) {
    const i = t[e];
    Le(i) && ue(l, i);
  } else if (Le(e)) ue(l, e.bind(n));
  else if (Ke(e)) if (Ee(e)) e.forEach((i) => Qv(i, t, n, a));
  else {
    const i = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
    Le(i) && ue(l, i, e);
  }
}
function em(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, r = i.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Eo(s, u, o, true)), Eo(s, t, o)), Ke(t) && i.set(t, s), s;
}
function Eo(e, t, n, a = false) {
  const { mixins: l, extends: i } = t;
  i && Eo(e, i, n, true), l && l.forEach((o) => Eo(e, o, n, true));
  for (const o in t) if (!(a && o === "expose")) {
    const r = OS[o] || n && n[o];
    e[o] = r ? r(e[o], t[o]) : t[o];
  }
  return e;
}
const OS = { data: cd, props: dd, emits: dd, methods: li, computed: li, beforeCreate: qt, created: qt, beforeMount: qt, mounted: qt, beforeUpdate: qt, updated: qt, beforeDestroy: qt, beforeUnmount: qt, destroyed: qt, unmounted: qt, activated: qt, deactivated: qt, errorCaptured: qt, serverPrefetch: qt, components: li, directives: li, watch: RS, provide: cd, inject: NS };
function cd(e, t) {
  return t ? e ? function() {
    return _t(Le(e) ? e.call(this, this) : e, Le(t) ? t.call(this, this) : t);
  } : t : e;
}
function NS(e, t) {
  return li(bs(e), bs(t));
}
function bs(e) {
  if (Ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function li(e, t) {
  return e ? _t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dd(e, t) {
  return e ? Ee(e) && Ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _t(/* @__PURE__ */ Object.create(null), sd(e), sd(t ?? {})) : t;
}
function RS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _t(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = qt(e[a], t[a]);
  return n;
}
function tm() {
  return { app: null, config: { isNativeTag: lv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let HS = 0;
function WS(e, t) {
  return function(a, l = null) {
    Le(a) || (a = _t({}, a)), l != null && !Ke(l) && (l = null);
    const i = tm(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = i.app = { _uid: HS++, _component: a, _props: l, _container: null, _context: i, _instance: null, version: Sk, get config() {
      return i.config;
    }, set config(c) {
    }, use(c, ...d) {
      return o.has(c) || (c && Le(c.install) ? (o.add(c), c.install(u, ...d)) : Le(c) && (o.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return i.mixins.includes(c) || i.mixins.push(c), u;
    }, component(c, d) {
      return d ? (i.components[c] = d, u) : i.components[c];
    }, directive(c, d) {
      return d ? (i.directives[c] = d, u) : i.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const v = u._ceVNode || S(a, l);
        return v.appContext = i, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, or(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Cn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return i.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Al;
      Al = u;
      try {
        return c();
      } finally {
        Al = d;
      }
    } };
    return u;
  };
}
let Al = null;
const zS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${ol(t)}Modifiers`];
function jS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || at;
  let l = n;
  const i = t.startsWith("update:"), o = i && zS(a, t.slice(7));
  o && (o.trim && (l = n.map((c) => dt(c) ? c.trim() : c)), o.number && (l = n.map(Su)));
  let r, s = a[r = $r(t)] || a[r = $r(Qt(t))];
  !s && i && (s = a[r = $r(ol(t))]), s && Cn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Cn(u, e, 6, l);
  }
}
const YS = /* @__PURE__ */ new WeakMap();
function nm(e, t, n = false) {
  const a = n ? YS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const i = e.emits;
  let o = {}, r = false;
  if (!Le(e)) {
    const s = (u) => {
      const c = nm(u, t, true);
      c && (r = true, _t(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !i && !r ? (Ke(e) && a.set(e, null), null) : (Ee(i) ? i.forEach((s) => o[s] = null) : _t(o, i), Ke(e) && a.set(e, o), o);
}
function ir(e, t) {
  return !e || !qo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ge(e, t[0].toLowerCase() + t.slice(1)) || Ge(e, ol(t)) || Ge(e, t));
}
function fd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [i], slots: o, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: y, inheritAttrs: m } = e, b = Ao(e);
  let h, x;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, k = V;
      h = En(u.call(k, V, c, d, v, f, y)), x = r;
    } else {
      const V = t;
      h = En(V.length > 1 ? V(d, { attrs: r, slots: o, emit: s }) : V(d, null)), x = t.props ? r : US(r);
    }
  } catch (V) {
    gi.length = 0, er(V, e, 1), h = S(Wt);
  }
  let I = h;
  if (x && m !== false) {
    const V = Object.keys(x), { shapeFlag: k } = I;
    V.length && k & 7 && (i && V.some(yu) && (x = KS(x, i)), I = aa(I, x, false, true));
  }
  return n.dirs && (I = aa(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Za(I, n.transition), h = I, Ao(b), h;
}
const US = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, KS = (e, t) => {
  const n = {};
  for (const a in e) (!yu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function GS(e, t, n) {
  const { props: a, children: l, component: i } = e, { props: o, children: r, patchFlag: s } = t, u = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? vd(a, o, u) : !!o;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (am(o, a, f) && !ir(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === o ? false : a ? o ? vd(a, o, u) : true : !!o;
  return false;
}
function vd(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const i = a[l];
    if (am(t, e, i) && !ir(n, i)) return true;
  }
  return false;
}
function am(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && Ke(a) && Ke(l) ? !ku(a, l) : a !== l;
}
function qS({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const lm = {}, im = () => Object.create(lm), om = (e) => Object.getPrototypeOf(e) === lm;
function XS(e, t, n, a = false) {
  const l = {}, i = im();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rm(e, t, l, i);
  for (const o in e.propsOptions[0]) o in l || (l[o] = void 0);
  n ? e.props = a ? l : uS(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function ZS(e, t, n, a) {
  const { props: l, attrs: i, vnode: { patchFlag: o } } = e, r = Pe(l), [s] = e.propsOptions;
  let u = false;
  if ((a || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (ir(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (Ge(i, f)) v !== i[f] && (i[f] = v, u = true);
        else {
          const y = Qt(f);
          l[y] = Ss(s, r, y, v, e, false);
        }
        else v !== i[f] && (i[f] = v, u = true);
      }
    }
  } else {
    rm(e, t, l, i) && (u = true);
    let c;
    for (const d in r) (!t || !Ge(t, d) && ((c = ol(d)) === d || !Ge(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Ss(s, r, d, void 0, e, true)) : delete l[d]);
    if (i !== r) for (const d in i) (!t || !Ge(t, d)) && (delete i[d], u = true);
  }
  u && Zn(e.attrs, "set", "");
}
function rm(e, t, n, a) {
  const [l, i] = e.propsOptions;
  let o = false, r;
  if (t) for (let s in t) {
    if (si(s)) continue;
    const u = t[s];
    let c;
    l && Ge(l, c = Qt(s)) ? !i || !i.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : ir(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, o = true);
  }
  if (i) {
    const s = Pe(n), u = r || at;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = Ss(l, s, d, u[d], e, !Ge(u, d));
    }
  }
  return o;
}
function Ss(e, t, n, a, l, i) {
  const o = e[n];
  if (o != null) {
    const r = Ge(o, "default");
    if (r && a === void 0) {
      const s = o.default;
      if (o.type !== Function && !o.skipFactory && Le(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = Gi(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    o[0] && (i && !r ? a = false : o[1] && (a === "" || a === ol(n)) && (a = true));
  }
  return a;
}
const JS = /* @__PURE__ */ new WeakMap();
function sm(e, t, n = false) {
  const a = n ? JS : t.propsCache, l = a.get(e);
  if (l) return l;
  const i = e.props, o = {}, r = [];
  let s = false;
  if (!Le(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = sm(d, t, true);
      _t(o, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !s) return Ke(e) && a.set(e, Il), Il;
  if (Ee(i)) for (let c = 0; c < i.length; c++) {
    const d = Qt(i[c]);
    md(d) && (o[d] = at);
  }
  else if (i) for (const c in i) {
    const d = Qt(c);
    if (md(d)) {
      const f = i[c], v = o[d] = Ee(f) || Le(f) ? { type: f } : _t({}, f), y = v.type;
      let m = false, b = true;
      if (Ee(y)) for (let h = 0; h < y.length; ++h) {
        const x = y[h], I = Le(x) && x.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (b = false);
      }
      else m = Le(y) && y.name === "Boolean";
      v[0] = m, v[1] = b, (m || Ge(v, "default")) && r.push(d);
    }
  }
  const u = [o, r];
  return Ke(e) && a.set(e, u), u;
}
function md(e) {
  return e[0] !== "$" && !si(e);
}
const Du = (e) => e === "_" || e === "_ctx" || e === "$stable", Eu = (e) => Ee(e) ? e.map(En) : [En(e)], QS = (e, t, n) => {
  if (t._n) return t;
  const a = nt((...l) => Eu(t(...l)), n);
  return a._c = false, a;
}, um = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Du(l)) continue;
    const i = e[l];
    if (Le(i)) t[l] = QS(l, i, a);
    else if (i != null) {
      const o = Eu(i);
      t[l] = () => o;
    }
  }
}, cm = (e, t) => {
  const n = Eu(t);
  e.slots.default = () => n;
}, dm = (e, t, n) => {
  for (const a in t) (n || !Du(a)) && (e[a] = t[a]);
}, ek = (e, t, n) => {
  const a = e.slots = im();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (dm(a, t, n), n && uv(a, "_", l, true)) : um(t, a);
  } else t && cm(e, t);
}, tk = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let i = true, o = at;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = false : dm(l, t, n) : (i = !t.$stable, um(t, l)), o = t;
  } else t && (cm(e, t), o = { default: 1 });
  if (i) for (const r in l) !Du(r) && o[r] == null && delete l[r];
}, Ot = ok;
function nk(e) {
  return ak(e);
}
function ak(e, t) {
  const n = Jo();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: i, createElement: o, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Bn, insertStaticContent: y } = e, m = (F, O, J, se = null, le = null, re = null, ye = void 0, ce = null, Y = !!O.dynamicChildren) => {
    if (F === O) return;
    F && !Wa(F, O) && (se = ne(F), z(F, le, re, true), F = null), O.patchFlag === -2 && (Y = false, O.dynamicChildren = null);
    const { type: ae, ref: _e, shapeFlag: G } = O;
    switch (ae) {
      case Ui:
        b(F, O, J, se);
        break;
      case Wt:
        h(F, O, J, se);
        break;
      case Yr:
        F == null && x(O, J, se, ye);
        break;
      case he:
        B(F, O, J, se, le, re, ye, ce, Y);
        break;
      default:
        G & 1 ? k(F, O, J, se, le, re, ye, ce, Y) : G & 6 ? D(F, O, J, se, le, re, ye, ce, Y) : (G & 64 || G & 128) && ae.process(F, O, J, se, le, re, ye, ce, Y, xe);
    }
    _e != null && le ? fi(_e, F && F.ref, re, O || F, !O) : _e == null && F && F.ref != null && fi(F.ref, null, re, F, true);
  }, b = (F, O, J, se) => {
    if (F == null) a(O.el = r(O.children), J, se);
    else {
      const le = O.el = F.el;
      O.children !== F.children && u(le, O.children);
    }
  }, h = (F, O, J, se) => {
    F == null ? a(O.el = s(O.children || ""), J, se) : O.el = F.el;
  }, x = (F, O, J, se) => {
    [F.el, F.anchor] = y(F.children, O, J, se, F.el, F.anchor);
  }, I = ({ el: F, anchor: O }, J, se) => {
    let le;
    for (; F && F !== O; ) le = f(F), a(F, J, se), F = le;
    a(O, J, se);
  }, V = ({ el: F, anchor: O }) => {
    let J;
    for (; F && F !== O; ) J = f(F), l(F), F = J;
    l(O);
  }, k = (F, O, J, se, le, re, ye, ce, Y) => {
    if (O.type === "svg" ? ye = "svg" : O.type === "math" && (ye = "mathml"), F == null) g(O, J, se, le, re, ye, ce, Y);
    else {
      const ae = F.el && F.el._isVueCE ? F.el : null;
      try {
        ae && ae._beginPatch(), T(F, O, le, re, ye, ce, Y);
      } finally {
        ae && ae._endPatch();
      }
    }
  }, g = (F, O, J, se, le, re, ye, ce) => {
    let Y, ae;
    const { props: _e, shapeFlag: G, transition: ve, dirs: ke } = F;
    if (Y = F.el = o(F.type, re, _e && _e.is, _e), G & 8 ? c(Y, F.children) : G & 16 && w(F.children, Y, null, se, le, jr(F, re), ye, ce), ke && Fa(F, null, se, "created"), C(Y, F, F.scopeId, ye, se), _e) {
      for (const Ve in _e) Ve !== "value" && !si(Ve) && i(Y, Ve, null, _e[Ve], re, se);
      "value" in _e && i(Y, "value", null, _e.value, re), (ae = _e.onVnodeBeforeMount) && Pn(ae, se, F);
    }
    ke && Fa(F, null, se, "beforeMount");
    const we = lk(le, ve);
    we && ve.beforeEnter(Y), a(Y, O, J), ((ae = _e && _e.onVnodeMounted) || we || ke) && Ot(() => {
      ae && Pn(ae, se, F), we && ve.enter(Y), ke && Fa(F, null, se, "mounted");
    }, le);
  }, C = (F, O, J, se, le) => {
    if (J && v(F, J), se) for (let re = 0; re < se.length; re++) v(F, se[re]);
    if (le) {
      let re = le.subTree;
      if (O === re || mm(re.type) && (re.ssContent === O || re.ssFallback === O)) {
        const ye = le.vnode;
        C(F, ye, ye.scopeId, ye.slotScopeIds, le.parent);
      }
    }
  }, w = (F, O, J, se, le, re, ye, ce, Y = 0) => {
    for (let ae = Y; ae < F.length; ae++) {
      const _e = F[ae] = ce ? qn(F[ae]) : En(F[ae]);
      m(null, _e, O, J, se, le, re, ye, ce);
    }
  }, T = (F, O, J, se, le, re, ye) => {
    const ce = O.el = F.el;
    let { patchFlag: Y, dynamicChildren: ae, dirs: _e } = O;
    Y |= F.patchFlag & 16;
    const G = F.props || at, ve = O.props || at;
    let ke;
    if (J && La(J, false), (ke = ve.onVnodeBeforeUpdate) && Pn(ke, J, O, F), _e && Fa(O, F, J, "beforeUpdate"), J && La(J, true), (G.innerHTML && ve.innerHTML == null || G.textContent && ve.textContent == null) && c(ce, ""), ae ? P(F.dynamicChildren, ae, ce, J, se, jr(O, le), re) : ye || X(F, O, ce, null, J, se, jr(O, le), re, false), Y > 0) {
      if (Y & 16) E(ce, G, ve, J, le);
      else if (Y & 2 && G.class !== ve.class && i(ce, "class", null, ve.class, le), Y & 4 && i(ce, "style", G.style, ve.style, le), Y & 8) {
        const we = O.dynamicProps;
        for (let Ve = 0; Ve < we.length; Ve++) {
          const Me = we[Ve], Re = G[Me], Fe = ve[Me];
          (Fe !== Re || Me === "value") && i(ce, Me, Re, Fe, le, J);
        }
      }
      Y & 1 && F.children !== O.children && c(ce, O.children);
    } else !ye && ae == null && E(ce, G, ve, J, le);
    ((ke = ve.onVnodeUpdated) || _e) && Ot(() => {
      ke && Pn(ke, J, O, F), _e && Fa(O, F, J, "updated");
    }, se);
  }, P = (F, O, J, se, le, re, ye) => {
    for (let ce = 0; ce < O.length; ce++) {
      const Y = F[ce], ae = O[ce], _e = Y.el && (Y.type === he || !Wa(Y, ae) || Y.shapeFlag & 198) ? d(Y.el) : J;
      m(Y, ae, _e, null, se, le, re, ye, true);
    }
  }, E = (F, O, J, se, le) => {
    if (O !== J) {
      if (O !== at) for (const re in O) !si(re) && !(re in J) && i(F, re, O[re], null, le, se);
      for (const re in J) {
        if (si(re)) continue;
        const ye = J[re], ce = O[re];
        ye !== ce && re !== "value" && i(F, re, ce, ye, le, se);
      }
      "value" in J && i(F, "value", O.value, J.value, le);
    }
  }, B = (F, O, J, se, le, re, ye, ce, Y) => {
    const ae = O.el = F ? F.el : r(""), _e = O.anchor = F ? F.anchor : r("");
    let { patchFlag: G, dynamicChildren: ve, slotScopeIds: ke } = O;
    ke && (ce = ce ? ce.concat(ke) : ke), F == null ? (a(ae, J, se), a(_e, J, se), w(O.children || [], J, _e, le, re, ye, ce, Y)) : G > 0 && G & 64 && ve && F.dynamicChildren && F.dynamicChildren.length === ve.length ? (P(F.dynamicChildren, ve, J, le, re, ye, ce), (O.key != null || le && O === le.subTree) && Mu(F, O, true)) : X(F, O, J, _e, le, re, ye, ce, Y);
  }, D = (F, O, J, se, le, re, ye, ce, Y) => {
    O.slotScopeIds = ce, F == null ? O.shapeFlag & 512 ? le.ctx.activate(O, J, se, ye, Y) : A(O, J, se, le, re, ye, Y) : L(F, O, Y);
  }, A = (F, O, J, se, le, re, ye) => {
    const ce = F.component = fk(F, se, le);
    if (tr(F) && (ce.ctx.renderer = xe), vk(ce, false, ye), ce.asyncDep) {
      if (le && le.registerDep(ce, W, ye), !F.el) {
        const Y = ce.subTree = S(Wt);
        h(null, Y, O, J), F.placeholder = Y.el;
      }
    } else W(ce, F, O, J, le, re, ye);
  }, L = (F, O, J) => {
    const se = O.component = F.component;
    if (GS(F, O, J)) if (se.asyncDep && !se.asyncResolved) {
      H(se, O, J);
      return;
    } else se.next = O, se.update();
    else O.el = F.el, se.vnode = O;
  }, W = (F, O, J, se, le, re, ye) => {
    const ce = () => {
      if (F.isMounted) {
        let { next: G, bu: ve, u: ke, parent: we, vnode: Ve } = F;
        {
          const Ze = fm(F);
          if (Ze) {
            G && (G.el = Ve.el, H(F, G, ye)), Ze.asyncDep.then(() => {
              Ot(() => {
                F.isUnmounted || ae();
              }, le);
            });
            return;
          }
        }
        let Me = G, Re;
        La(F, false), G ? (G.el = Ve.el, H(F, G, ye)) : G = Ve, ve && ko(ve), (Re = G.props && G.props.onVnodeBeforeUpdate) && Pn(Re, we, G, Ve), La(F, true);
        const Fe = fd(F), ot = F.subTree;
        F.subTree = Fe, m(ot, Fe, d(ot.el), ne(ot), F, le, re), G.el = Fe.el, Me === null && qS(F, Fe.el), ke && Ot(ke, le), (Re = G.props && G.props.onVnodeUpdated) && Ot(() => Pn(Re, we, G, Ve), le);
      } else {
        let G;
        const { el: ve, props: ke } = O, { bm: we, m: Ve, parent: Me, root: Re, type: Fe } = F, ot = vi(O);
        La(F, false), we && ko(we), !ot && (G = ke && ke.onVnodeBeforeMount) && Pn(G, Me, O), La(F, true);
        {
          Re.ce && Re.ce._hasShadowRoot() && Re.ce._injectChildStyle(Fe);
          const Ze = F.subTree = fd(F);
          m(null, Ze, J, se, F, le, re), O.el = Ze.el;
        }
        if (Ve && Ot(Ve, le), !ot && (G = ke && ke.onVnodeMounted)) {
          const Ze = O;
          Ot(() => Pn(G, Me, Ze), le);
        }
        (O.shapeFlag & 256 || Me && vi(Me.vnode) && Me.vnode.shapeFlag & 256) && F.a && Ot(F.a, le), F.isMounted = true, O = J = se = null;
      }
    };
    F.scope.on();
    const Y = F.effect = new gv(ce);
    F.scope.off();
    const ae = F.update = Y.run.bind(Y), _e = F.job = Y.runIfDirty.bind(Y);
    _e.i = F, _e.id = F.uid, Y.scheduler = () => Iu(_e), La(F, true), ae();
  }, H = (F, O, J) => {
    O.component = F;
    const se = F.vnode.props;
    F.vnode = O, F.next = null, ZS(F, O.props, se, J), tk(F, O.children, J), ea(), ed(F), ta();
  }, X = (F, O, J, se, le, re, ye, ce, Y = false) => {
    const ae = F && F.children, _e = F ? F.shapeFlag : 0, G = O.children, { patchFlag: ve, shapeFlag: ke } = O;
    if (ve > 0) {
      if (ve & 128) {
        N(ae, G, J, se, le, re, ye, ce, Y);
        return;
      } else if (ve & 256) {
        q(ae, G, J, se, le, re, ye, ce, Y);
        return;
      }
    }
    ke & 8 ? (_e & 16 && be(ae, le, re), G !== ae && c(J, G)) : _e & 16 ? ke & 16 ? N(ae, G, J, se, le, re, ye, ce, Y) : be(ae, le, re, true) : (_e & 8 && c(J, ""), ke & 16 && w(G, J, se, le, re, ye, ce, Y));
  }, q = (F, O, J, se, le, re, ye, ce, Y) => {
    F = F || Il, O = O || Il;
    const ae = F.length, _e = O.length, G = Math.min(ae, _e);
    let ve;
    for (ve = 0; ve < G; ve++) {
      const ke = O[ve] = Y ? qn(O[ve]) : En(O[ve]);
      m(F[ve], ke, J, null, le, re, ye, ce, Y);
    }
    ae > _e ? be(F, le, re, true, false, G) : w(O, J, se, le, re, ye, ce, Y, G);
  }, N = (F, O, J, se, le, re, ye, ce, Y) => {
    let ae = 0;
    const _e = O.length;
    let G = F.length - 1, ve = _e - 1;
    for (; ae <= G && ae <= ve; ) {
      const ke = F[ae], we = O[ae] = Y ? qn(O[ae]) : En(O[ae]);
      if (Wa(ke, we)) m(ke, we, J, null, le, re, ye, ce, Y);
      else break;
      ae++;
    }
    for (; ae <= G && ae <= ve; ) {
      const ke = F[G], we = O[ve] = Y ? qn(O[ve]) : En(O[ve]);
      if (Wa(ke, we)) m(ke, we, J, null, le, re, ye, ce, Y);
      else break;
      G--, ve--;
    }
    if (ae > G) {
      if (ae <= ve) {
        const ke = ve + 1, we = ke < _e ? O[ke].el : se;
        for (; ae <= ve; ) m(null, O[ae] = Y ? qn(O[ae]) : En(O[ae]), J, we, le, re, ye, ce, Y), ae++;
      }
    } else if (ae > ve) for (; ae <= G; ) z(F[ae], le, re, true), ae++;
    else {
      const ke = ae, we = ae, Ve = /* @__PURE__ */ new Map();
      for (ae = we; ae <= ve; ae++) {
        const tt = O[ae] = Y ? qn(O[ae]) : En(O[ae]);
        tt.key != null && Ve.set(tt.key, ae);
      }
      let Me, Re = 0;
      const Fe = ve - we + 1;
      let ot = false, Ze = 0;
      const en = new Array(Fe);
      for (ae = 0; ae < Fe; ae++) en[ae] = 0;
      for (ae = ke; ae <= G; ae++) {
        const tt = F[ae];
        if (Re >= Fe) {
          z(tt, le, re, true);
          continue;
        }
        let mn;
        if (tt.key != null) mn = Ve.get(tt.key);
        else for (Me = we; Me <= ve; Me++) if (en[Me - we] === 0 && Wa(tt, O[Me])) {
          mn = Me;
          break;
        }
        mn === void 0 ? z(tt, le, re, true) : (en[mn - we] = ae + 1, mn >= Ze ? Ze = mn : ot = true, m(tt, O[mn], J, null, le, re, ye, ce, Y), Re++);
      }
      const ma = ot ? ik(en) : Il;
      for (Me = ma.length - 1, ae = Fe - 1; ae >= 0; ae--) {
        const tt = we + ae, mn = O[tt], Gc = O[tt + 1], qc = tt + 1 < _e ? Gc.el || vm(Gc) : se;
        en[ae] === 0 ? m(null, mn, J, qc, le, re, ye, ce, Y) : ot && (Me < 0 || ae !== ma[Me] ? K(mn, J, qc, 2) : Me--);
      }
    }
  }, K = (F, O, J, se, le = null) => {
    const { el: re, type: ye, transition: ce, children: Y, shapeFlag: ae } = F;
    if (ae & 6) {
      K(F.component.subTree, O, J, se);
      return;
    }
    if (ae & 128) {
      F.suspense.move(O, J, se);
      return;
    }
    if (ae & 64) {
      ye.move(F, O, J, xe);
      return;
    }
    if (ye === he) {
      a(re, O, J);
      for (let G = 0; G < Y.length; G++) K(Y[G], O, J, se);
      a(F.anchor, O, J);
      return;
    }
    if (ye === Yr) {
      I(F, O, J);
      return;
    }
    if (se !== 2 && ae & 1 && ce) if (se === 0) ce.beforeEnter(re), a(re, O, J), Ot(() => ce.enter(re), le);
    else {
      const { leave: G, delayLeave: ve, afterLeave: ke } = ce, we = () => {
        F.ctx.isUnmounted ? l(re) : a(re, O, J);
      }, Ve = () => {
        re._isLeaving && re[Dn](true), G(re, () => {
          we(), ke && ke();
        });
      };
      ve ? ve(re, we, Ve) : Ve();
    }
    else a(re, O, J);
  }, z = (F, O, J, se = false, le = false) => {
    const { type: re, props: ye, ref: ce, children: Y, dynamicChildren: ae, shapeFlag: _e, patchFlag: G, dirs: ve, cacheIndex: ke } = F;
    if (G === -2 && (le = false), ce != null && (ea(), fi(ce, null, J, F, true), ta()), ke != null && (O.renderCache[ke] = void 0), _e & 256) {
      O.ctx.deactivate(F);
      return;
    }
    const we = _e & 1 && ve, Ve = !vi(F);
    let Me;
    if (Ve && (Me = ye && ye.onVnodeBeforeUnmount) && Pn(Me, O, F), _e & 6) oe(F.component, J, se);
    else {
      if (_e & 128) {
        F.suspense.unmount(J, se);
        return;
      }
      we && Fa(F, null, O, "beforeUnmount"), _e & 64 ? F.type.remove(F, O, J, xe, se) : ae && !ae.hasOnce && (re !== he || G > 0 && G & 64) ? be(ae, O, J, false, true) : (re === he && G & 384 || !le && _e & 16) && be(Y, O, J), se && $(F);
    }
    (Ve && (Me = ye && ye.onVnodeUnmounted) || we) && Ot(() => {
      Me && Pn(Me, O, F), we && Fa(F, null, O, "unmounted");
    }, J);
  }, $ = (F) => {
    const { type: O, el: J, anchor: se, transition: le } = F;
    if (O === he) {
      j(J, se);
      return;
    }
    if (O === Yr) {
      V(F);
      return;
    }
    const re = () => {
      l(J), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (F.shapeFlag & 1 && le && !le.persisted) {
      const { leave: ye, delayLeave: ce } = le, Y = () => ye(J, re);
      ce ? ce(F.el, re, Y) : Y();
    } else re();
  }, j = (F, O) => {
    let J;
    for (; F !== O; ) J = f(F), l(F), F = J;
    l(O);
  }, oe = (F, O, J) => {
    const { bum: se, scope: le, job: re, subTree: ye, um: ce, m: Y, a: ae } = F;
    gd(Y), gd(ae), se && ko(se), le.stop(), re && (re.flags |= 8, z(ye, F, O, J)), ce && Ot(ce, O), Ot(() => {
      F.isUnmounted = true;
    }, O);
  }, be = (F, O, J, se = false, le = false, re = 0) => {
    for (let ye = re; ye < F.length; ye++) z(F[ye], O, J, se, le);
  }, ne = (F) => {
    if (F.shapeFlag & 6) return ne(F.component.subTree);
    if (F.shapeFlag & 128) return F.suspense.next();
    const O = f(F.anchor || F.el), J = O && O[Nv];
    return J ? f(J) : O;
  };
  let fe = false;
  const Ie = (F, O, J) => {
    let se;
    F == null ? O._vnode && (z(O._vnode, null, null, true), se = O._vnode.component) : m(O._vnode || null, F, O, null, null, null, J), O._vnode = F, fe || (fe = true, ed(se), Fv(), fe = false);
  }, xe = { p: m, um: z, m: K, r: $, mt: A, mc: w, pc: X, pbc: P, n: ne, o: e };
  return { render: Ie, hydrate: void 0, createApp: WS(Ie) };
}
function jr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function La({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lk(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mu(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Ee(a) && Ee(l)) for (let i = 0; i < a.length; i++) {
    const o = a[i];
    let r = l[i];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[i] = qn(l[i]), r.el = o.el), !n && r.patchFlag !== -2 && Mu(o, r)), r.type === Ui && (r.patchFlag === -1 && (r = l[i] = qn(r)), r.el = o.el), r.type === Wt && !r.el && (r.el = o.el);
  }
}
function ik(e) {
  const t = e.slice(), n = [0];
  let a, l, i, o, r;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (l = n[n.length - 1], e[l] < u) {
        t[a] = l, n.push(a);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; ) r = i + o >> 1, e[n[r]] < u ? i = r + 1 : o = r;
      u < e[n[i]] && (i > 0 && (t[a] = n[i - 1]), n[i] = a);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
  return n;
}
function fm(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : fm(t);
}
function gd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function vm(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? vm(t.subTree) : null;
}
const mm = (e) => e.__isSuspense;
function ok(e, t) {
  t && t.pendingBranch ? Ee(e) ? t.effects.push(...e) : t.effects.push(e) : kS(e);
}
const he = Symbol.for("v-fgt"), Ui = Symbol.for("v-txt"), Wt = Symbol.for("v-cmt"), Yr = Symbol.for("v-stc"), gi = [];
let ln = null;
function zt(e = false) {
  gi.push(ln = e ? null : []);
}
function rk() {
  gi.pop(), ln = gi[gi.length - 1] || null;
}
let Ci = 1;
function Mo(e, t = false) {
  Ci += e, e < 0 && ln && t && (ln.hasOnce = true);
}
function gm(e) {
  return e.dynamicChildren = Ci > 0 ? ln || Il : null, rk(), Ci > 0 && ln && ln.push(e), e;
}
function Fn(e, t, n, a, l, i) {
  return gm(p(e, t, n, a, l, i, true));
}
function Bl(e, t, n, a, l) {
  return gm(S(e, t, n, a, l, true));
}
function _i(e) {
  return e ? e.__v_isVNode === true : false;
}
function Wa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hm = ({ key: e }) => e ?? null, po = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || mt(e) || Le(e) ? { i: an, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, a = 0, l = null, i = e === he ? 0 : 1, o = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && hm(t), ref: t && po(t), scopeId: $v, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: an };
  return r ? (Bu(s, n), i & 128 && e.normalize(s)) : n && (s.shapeFlag |= dt(n) ? 8 : 16), Ci > 0 && !o && ln && (s.patchFlag > 0 || i & 6) && s.patchFlag !== 32 && ln.push(s), s;
}
const S = sk;
function sk(e, t = null, n = null, a = 0, l = null, i = false) {
  if ((!e || e === MS) && (e = Wt), _i(e)) {
    const r = aa(e, t, true);
    return n && Bu(r, n), Ci > 0 && !i && ln && (r.shapeFlag & 6 ? ln[ln.indexOf(e)] = r : ln.push(r)), r.patchFlag = -2, r;
  }
  if (bk(e) && (e = e.__vccOpts), t) {
    t = ym(t);
    let { class: r, style: s } = t;
    r && !dt(r) && (t.class = ee(r)), Ke(s) && (ji(s) && !Ee(s) && (s = _t({}, s)), t.style = me(s));
  }
  const o = dt(e) ? 1 : mm(e) ? 128 : Rv(e) ? 64 : Ke(e) ? 4 : Le(e) ? 2 : 0;
  return p(e, t, n, a, l, o, i, true);
}
function ym(e) {
  return e ? ji(e) || om(e) ? _t({}, e) : e : null;
}
function aa(e, t, n = false, a = false) {
  const { props: l, ref: i, patchFlag: o, children: r, transition: s } = e, u = t ? U(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && hm(u), ref: t && t.ref ? n && i ? Ee(i) ? i.concat(po(t)) : [i, po(t)] : po(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== he ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && aa(e.ssContent), ssFallback: e.ssFallback && aa(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && Za(c, s.clone(c)), c;
}
function St(e = " ", t = 0) {
  return S(Ui, null, e, t);
}
function uk(e = "", t = false) {
  return t ? (zt(), Bl(Wt, null, e)) : S(Wt, null, e);
}
function En(e) {
  return e == null || typeof e == "boolean" ? S(Wt) : Ee(e) ? S(he, null, e.slice()) : _i(e) ? qn(e) : S(Ui, null, String(e));
}
function qn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : aa(e);
}
function Bu(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Ee(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Bu(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !om(t) ? t._ctx = an : l === 3 && an && (an.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Le(t) ? (t = { default: t, _ctx: an }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [St(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function U(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ee([t.class, a.class]));
    else if (l === "style") t.style = me([t.style, a.style]);
    else if (qo(l)) {
      const i = t[l], o = a[l];
      o && i !== o && !(Ee(i) && i.includes(o)) && (t[l] = i ? [].concat(i, o) : o);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Pn(e, t, n, a = null) {
  Cn(e, t, 7, [n, a]);
}
const ck = tm();
let dk = 0;
function fk(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || ck, i = { uid: dk++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new vv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: sm(a, l), emitsOptions: nm(a, l), emit: null, emitted: null, propsDefaults: at, inheritAttrs: a.inheritAttrs, ctx: at, data: at, props: at, attrs: at, slots: at, refs: at, setupState: at, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = jS.bind(null, i), e.ce && e.ce(i), i;
}
let jt = null;
const Ki = () => jt || an;
let Bo, ks;
{
  const e = Jo(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (i) => {
      l.length > 1 ? l.forEach((o) => o(i)) : l[0](i);
    };
  };
  Bo = t("__VUE_INSTANCE_SETTERS__", (n) => jt = n), ks = t("__VUE_SSR_SETTERS__", (n) => Vi = n);
}
const Gi = (e) => {
  const t = jt;
  return Bo(e), e.scope.on(), () => {
    e.scope.off(), Bo(t);
  };
}, hd = () => {
  jt && jt.scope.off(), Bo(null);
};
function bm(e) {
  return e.vnode.shapeFlag & 4;
}
let Vi = false;
function vk(e, t = false, n = false) {
  t && ks(t);
  const { props: a, children: l } = e.vnode, i = bm(e);
  XS(e, a, i, t), ek(e, l, n || t);
  const o = i ? mk(e, t) : void 0;
  return t && ks(false), o;
}
function mk(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, FS);
  const { setup: a } = n;
  if (a) {
    ea();
    const l = e.setupContext = a.length > 1 ? hk(e) : null, i = Gi(e), o = Yi(a, e, 0, [e.props, l]), r = ov(o);
    if (ta(), i(), (r || e.sp) && !vi(e) && Kv(e), r) {
      if (o.then(hd, hd), t) return o.then((s) => {
        yd(e, s);
      }).catch((s) => {
        er(s, e, 0);
      });
      e.asyncDep = o;
    } else yd(e, o);
  } else Sm(e);
}
function yd(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Dv(t)), Sm(e);
}
function Sm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Bn);
  {
    const l = Gi(e);
    ea();
    try {
      LS(e);
    } finally {
      ta(), l();
    }
  }
}
const gk = { get(e, t) {
  return Rt(e, "get", ""), e[t];
} };
function hk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, gk), slots: e.slots, emit: e.emit, expose: t };
}
function or(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Dv(Tv(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in mi) return mi[n](e);
  }, has(t, n) {
    return n in t || n in mi;
  } })) : e.proxy;
}
function yk(e, t = true) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bk(e) {
  return Le(e) && "__vccOpts" in e;
}
const _ = (e, t) => gS(e, t, Vi);
function ra(e, t, n) {
  try {
    Mo(-1);
    const a = arguments.length;
    return a === 2 ? Ke(t) && !Ee(t) ? _i(t) ? S(e, null, [t]) : S(e, t) : S(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && _i(n) && (n = [n]), S(e, t, n));
  } finally {
    Mo(1);
  }
}
const Sk = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ws;
const bd = typeof window < "u" && window.trustedTypes;
if (bd) try {
  ws = bd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const km = ws ? (e) => ws.createHTML(e) : (e) => e, kk = "http://www.w3.org/2000/svg", wk = "http://www.w3.org/1998/Math/MathML", Gn = typeof document < "u" ? document : null, Sd = Gn && Gn.createElement("template"), pk = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? Gn.createElementNS(kk, e) : t === "mathml" ? Gn.createElementNS(wk, e) : n ? Gn.createElement(e, { is: n }) : Gn.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => Gn.createTextNode(e), createComment: (e) => Gn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Gn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, i) {
  const o = n ? n.previousSibling : t.lastChild;
  if (l && (l === i || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === i || !(l = l.nextSibling)); ) ;
  else {
    Sd.innerHTML = km(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = Sd.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ga = "transition", ei = "animation", Fl = Symbol("_vtc"), wm = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, pm = _t({}, zv, wm), xk = (e) => (e.displayName = "Transition", e.props = pm, e), Ca = xk((e, { slots: t }) => ra(IS, xm(e), t)), $a = (e, t = []) => {
  Ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, kd = (e) => e ? Ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function xm(e) {
  const t = {};
  for (const B in e) B in wm || (t[B] = e[B]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = i, appearActiveClass: u = o, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, y = Ck(l), m = y && y[0], b = y && y[1], { onBeforeEnter: h, onEnter: x, onEnterCancelled: I, onLeave: V, onLeaveCancelled: k, onBeforeAppear: g = h, onAppear: C = x, onAppearCancelled: w = I } = t, T = (B, D, A, L) => {
    B._enterCancelled = L, ha(B, D ? c : r), ha(B, D ? u : o), A && A();
  }, P = (B, D) => {
    B._isLeaving = false, ha(B, d), ha(B, v), ha(B, f), D && D();
  }, E = (B) => (D, A) => {
    const L = B ? C : x, W = () => T(D, B, A);
    $a(L, [D, W]), wd(() => {
      ha(D, B ? s : i), Tn(D, B ? c : r), kd(L) || pd(D, a, m, W);
    });
  };
  return _t(t, { onBeforeEnter(B) {
    $a(h, [B]), Tn(B, i), Tn(B, o);
  }, onBeforeAppear(B) {
    $a(g, [B]), Tn(B, s), Tn(B, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(B, D) {
    B._isLeaving = true;
    const A = () => P(B, D);
    Tn(B, d), B._enterCancelled ? (Tn(B, f), ps(B)) : (ps(B), Tn(B, f)), wd(() => {
      B._isLeaving && (ha(B, d), Tn(B, v), kd(V) || pd(B, a, b, A));
    }), $a(V, [B, A]);
  }, onEnterCancelled(B) {
    T(B, false, void 0, true), $a(I, [B]);
  }, onAppearCancelled(B) {
    T(B, true, void 0, true), $a(w, [B]);
  }, onLeaveCancelled(B) {
    P(B), $a(k, [B]);
  } });
}
function Ck(e) {
  if (e == null) return null;
  if (Ke(e)) return [Ur(e.enter), Ur(e.leave)];
  {
    const t = Ur(e);
    return [t, t];
  }
}
function Ur(e) {
  return Fb(e);
}
function Tn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Fl] || (e[Fl] = /* @__PURE__ */ new Set())).add(t);
}
function ha(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Fl];
  n && (n.delete(t), n.size || (e[Fl] = void 0));
}
function wd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _k = 0;
function pd(e, t, n, a) {
  const l = e._endId = ++_k, i = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: r, propCount: s } = Cm(e, t);
  if (!o) return a();
  const u = o + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), i();
  }, f = (v) => {
    v.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, r + 1), e.addEventListener(u, f);
}
function Cm(e, t) {
  const n = window.getComputedStyle(e), a = (y) => (n[y] || "").split(", "), l = a(`${ga}Delay`), i = a(`${ga}Duration`), o = xd(l, i), r = a(`${ei}Delay`), s = a(`${ei}Duration`), u = xd(r, s);
  let c = null, d = 0, f = 0;
  t === ga ? o > 0 && (c = ga, d = o, f = i.length) : t === ei ? u > 0 && (c = ei, d = u, f = s.length) : (d = Math.max(o, u), c = d > 0 ? o > u ? ga : ei : null, f = c ? c === ga ? i.length : s.length : 0);
  const v = c === ga && /\b(?:transform|all)(?:,|$)/.test(a(`${ga}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function xd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Cd(n) + Cd(e[a])));
}
function Cd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ps(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Vk(e, t, n) {
  const a = e[Fl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fo = Symbol("_vod"), _m = Symbol("_vsh"), In = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Fo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ti(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: a }) {
  !t != !n && (a ? t ? (a.beforeEnter(e), ti(e, true), a.enter(e)) : a.leave(e, () => {
    ti(e, false);
  }) : ti(e, t));
}, beforeUnmount(e, { value: t }) {
  ti(e, t);
} };
function ti(e, t) {
  e.style.display = t ? e[Fo] : "none", e[_m] = !t;
}
const Ik = Symbol(""), Pk = /(?:^|;)\s*display\s*:/;
function Tk(e, t, n) {
  const a = e.style, l = dt(n);
  let i = false;
  if (n && !l) {
    if (t) if (dt(t)) for (const o of t.split(";")) {
      const r = o.slice(0, o.indexOf(":")).trim();
      n[r] == null && xo(a, r, "");
    }
    else for (const o in t) n[o] == null && xo(a, o, "");
    for (const o in n) o === "display" && (i = true), xo(a, o, n[o]);
  } else if (l) {
    if (t !== n) {
      const o = a[Ik];
      o && (n += ";" + o), a.cssText = n, i = Pk.test(n);
    }
  } else t && e.removeAttribute("style");
  Fo in e && (e[Fo] = i ? a.display : "", e[_m] && (a.display = "none"));
}
const _d = /\s*!important$/;
function xo(e, t, n) {
  if (Ee(n)) n.forEach((a) => xo(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = Ak(e, t);
    _d.test(n) ? e.setProperty(ol(a), n.replace(_d, ""), "important") : e[a] = n;
  }
}
const Vd = ["Webkit", "Moz", "ms"], Kr = {};
function Ak(e, t) {
  const n = Kr[t];
  if (n) return n;
  let a = Qt(t);
  if (a !== "filter" && a in e) return Kr[t] = a;
  a = Hn(a);
  for (let l = 0; l < Vd.length; l++) {
    const i = Vd[l] + a;
    if (i in e) return Kr[t] = i;
  }
  return t;
}
const Id = "http://www.w3.org/1999/xlink";
function Pd(e, t, n, a, l, i = Wb(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Id, t.slice(6, t.length)) : e.setAttributeNS(Id, t, n) : n == null || i && !cv(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ln(n) ? String(n) : n);
}
function Td(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? km(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (r !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = cv(n) : n == null && r === "string" ? (n = "", o = true) : r === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(l || t);
}
function xl(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Dk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Ad = Symbol("_vei");
function Ek(e, t, n, a, l = null) {
  const i = e[Ad] || (e[Ad] = {}), o = i[t];
  if (a && o) o.value = a;
  else {
    const [r, s] = Mk(t);
    if (a) {
      const u = i[t] = Lk(a, l);
      xl(e, r, u, s);
    } else o && (Dk(e, r, o, s), i[t] = void 0);
  }
}
const Dd = /(?:Once|Passive|Capture)$/;
function Mk(e) {
  let t;
  if (Dd.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Dd); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : ol(e.slice(2)), t];
}
let Gr = 0;
const Bk = Promise.resolve(), Fk = () => Gr || (Bk.then(() => Gr = 0), Gr = Date.now());
function Lk(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Cn($k(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = Fk(), n;
}
function $k(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const Ed = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ok = (e, t, n, a, l, i) => {
  const o = l === "svg";
  t === "class" ? Vk(e, a, o) : t === "style" ? Tk(e, n, a) : qo(t) ? yu(t) || Ek(e, t, n, a, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Nk(e, t, a, o)) ? (Td(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pd(e, t, a, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !dt(a)) ? Td(e, Qt(t), a, i, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Pd(e, t, a, o));
};
function Nk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Ed(t) && Le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Ed(t) && dt(n) ? false : t in e;
}
const Vm = /* @__PURE__ */ new WeakMap(), Im = /* @__PURE__ */ new WeakMap(), Lo = Symbol("_moveCb"), Md = Symbol("_enterCb"), Rk = (e) => (delete e.props.mode, e), Hk = Rk({ name: "TransitionGroup", props: _t({}, pm, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = Ki(), a = Wv();
  let l, i;
  return ar(() => {
    if (!l.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Yk(l[0].el, n.vnode.el, o)) {
      l = [];
      return;
    }
    l.forEach(Wk), l.forEach(zk);
    const r = l.filter(jk);
    ps(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Tn(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Lo] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Lo] = null, ha(u, o));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const o = Pe(e), r = xm(o);
    let s = o.tag || he;
    if (l = [], i) for (let u = 0; u < i.length; u++) {
      const c = i[u];
      c.el && c.el instanceof Element && (l.push(c), Za(c, pi(c, r, a, n)), Vm.set(c, Pm(c.el)));
    }
    i = t.default ? Tu(t.default()) : [];
    for (let u = 0; u < i.length; u++) {
      const c = i[u];
      c.key != null && Za(c, pi(c, r, a, n));
    }
    return S(s, null, i);
  };
} }), Fu = Hk;
function Wk(e) {
  const t = e.el;
  t[Lo] && t[Lo](), t[Md] && t[Md]();
}
function zk(e) {
  Im.set(e, Pm(e.el));
}
function jk(e) {
  const t = Vm.get(e), n = Im.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const i = e.el, o = i.style, r = i.getBoundingClientRect();
    let s = 1, u = 1;
    return i.offsetWidth && (s = r.width / i.offsetWidth), i.offsetHeight && (u = r.height / i.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${a / s}px,${l / u}px)`, o.transitionDuration = "0s", e;
  }
}
function Pm(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Yk(e, t, n) {
  const a = e.cloneNode(), l = e[Fl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(a);
  const { hasTransform: o } = Cm(a);
  return i.removeChild(a), o;
}
const Bd = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Ee(t) ? (n) => ko(t, n) : t;
};
function Uk(e) {
  e.target.composing = true;
}
function Fd(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const qr = Symbol("_assign");
function Ld(e, t, n) {
  return t && (e = e.trim()), n && (e = Su(e)), e;
}
const Kk = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[qr] = Bd(l);
  const i = a || l.props && l.props.type === "number";
  xl(e, t ? "change" : "input", (o) => {
    o.target.composing || e[qr](Ld(e.value, n, i));
  }), (n || i) && xl(e, "change", () => {
    e.value = Ld(e.value, n, i);
  }), t || (xl(e, "compositionstart", Uk), xl(e, "compositionend", Fd), xl(e, "change", Fd));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: i } }, o) {
  if (e[qr] = Bd(o), e.composing) return;
  const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? Su(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, Gk = ["ctrl", "shift", "alt", "meta"], qk = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Gk.some((n) => e[`${n}Key`] && !t.includes(n)) }, vo = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const r = qk[t[o]];
      if (r && r(l, t)) return;
    }
    return e(l, ...i);
  }));
}, Xk = _t({ patchProp: Ok }, pk);
let $d;
function Tm() {
  return $d || ($d = nk(Xk));
}
const Am = ((...e) => {
  Tm().render(...e);
}), Zk = ((...e) => {
  const t = Tm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = Qk(a);
    if (!l) return;
    const i = t._component;
    !Le(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const o = n(l, false, Jk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), o;
  }, t;
});
function Jk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Qk(e) {
  return dt(e) ? document.querySelector(e) : e;
}
const Dm = { debug: 0, info: 1, warn: 2, error: 3 }, e0 = Dm.warn;
function t0(e) {
  const t = (n, a) => {
    Dm[n] < e0 || console[n](`[${e}]`, ...a);
  };
  return { debug: (...n) => t("debug", n), info: (...n) => t("info", n), warn: (...n) => t("warn", n), error: (...n) => t("error", n) };
}
const n0 = Ea({ __name: "AppBackground", setup(e) {
  const t = t0("AppBackground"), n = Math.round(19 * devicePixelRatio), a = Q(null);
  let l = null, i = 0, o = null, r = 0, s = 0;
  return kt(() => {
    const u = a.value;
    if (!u) return;
    r = Math.round(window.innerWidth * devicePixelRatio), s = Math.round(window.innerHeight * devicePixelRatio), u.width = r, u.height = s, t.debug("Canvas initialised", r, "x", s, "dpr", devicePixelRatio);
    const c = u.transferControlToOffscreen();
    l = new Worker(new URL("/assets/backgroundRenderer-CqhQhs-o.js", import.meta.url), { type: "module" }), l.onmessage = (f) => {
      switch (f.data.type) {
        case "ready":
          t.info(`${f.data.backend.toUpperCase()} renderer active`);
          break;
        case "error":
          f.data.phase === "gpu-init" ? t.debug(`GPU unavailable (${f.data.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${f.data.phase}]:`, f.data.message);
          break;
      }
    }, l.onerror = (f) => {
      t.error("Worker uncaught exception:", f.message, `at ${f.filename}:${f.lineno}`);
    }, l.postMessage({ type: "init", canvas: c, cellPx: n }, [c]), t.debug("Worker spawned, init message sent");
    const d = () => {
      l == null ? void 0 : l.postMessage({ type: "frame" }), i = requestAnimationFrame(d);
    };
    i = requestAnimationFrame(d), o = new ResizeObserver(([f]) => {
      const v = Math.round(f.contentRect.width * devicePixelRatio), y = Math.round(f.contentRect.height * devicePixelRatio);
      v === r && y === s || (r = v, s = y, t.debug("Resize \u2192", v, "x", y), l == null ? void 0 : l.postMessage({ type: "resize", width: v, height: y }));
    }), o.observe(u);
  }), lr(() => {
    cancelAnimationFrame(i), o == null ? void 0 : o.disconnect(), l == null ? void 0 : l.postMessage({ type: "stop" }), l == null ? void 0 : l.terminate(), l = null, t.debug("Unmounted, worker terminated");
  }), (u, c) => (zt(), Fn("canvas", { ref_key: "canvasRef", ref: a, class: "app-bg" }, null, 512));
} }), Em = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, a0 = Em(n0, [["__scopeId", "data-v-fad08bce"]]), l0 = Ea({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, a) => {
    const l = ct("v-app-bar-title"), i = ct("v-btn"), o = ct("v-app-bar");
    return zt(), Bl(o, { elevation: "0", color: "background", border: "b" }, { append: nt(() => [(zt(), Fn(he, null, xi(t, (r) => S(i, { key: r.label, href: r.href, variant: "text", size: "small", class: "text-medium-emphasis" }, { default: nt(() => [St(Ut(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: nt(() => [S(l, null, { default: nt(() => [...a[0] || (a[0] = [p("span", { class: "text-primary font-weight-bold" }, "Anjin Byte", -1)])]), _: 1 })]), _: 1 });
  };
} }), i0 = { class: "text-medium-emphasis text-caption" }, o0 = Ea({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = ct("v-footer");
    return zt(), Bl(l, { color: "background", border: "t", class: "justify-center" }, { default: nt(() => [p("span", i0, " \xA9 " + Ut(Ht(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), r0 = {}, s0 = { id: "hero", class: "hero-section" };
function u0(e, t) {
  const n = ct("v-btn"), a = ct("v-container");
  return zt(), Fn("section", s0, [S(a, null, { default: nt(() => [t[2] || (t[2] = p("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = p("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), S(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: nt(() => [...t[0] || (t[0] = [St(" View Projects ", -1)])]), _: 1 }), S(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: nt(() => [...t[1] || (t[1] = [St(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const c0 = Em(r0, [["render", u0], ["__scopeId", "data-v-609b3d1d"]]), d0 = { id: "about" }, f0 = { class: "d-flex flex-wrap ga-2" }, v0 = Ea({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, a) => {
    const l = ct("v-chip"), i = ct("v-col"), o = ct("v-row"), r = ct("v-container");
    return zt(), Fn("section", d0, [S(r, { class: "py-16" }, { default: nt(() => [S(o, { justify: "center" }, { default: nt(() => [S(i, { cols: "12", md: "8" }, { default: nt(() => [a[0] || (a[0] = p("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), a[1] || (a[1] = p("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), p("div", f0, [(zt(), Fn(he, null, xi(t, (s) => S(l, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: nt(() => [St(Ut(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), m0 = { id: "projects" }, g0 = { class: "d-flex flex-wrap ga-1" }, h0 = Ea({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, a) => {
    const l = ct("v-card-title"), i = ct("v-card-text"), o = ct("v-chip"), r = ct("v-btn"), s = ct("v-card-actions"), u = ct("v-card"), c = ct("v-col"), d = ct("v-row"), f = ct("v-container");
    return zt(), Fn("section", m0, [S(f, { class: "py-16" }, { default: nt(() => [a[1] || (a[1] = p("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), S(d, null, { default: nt(() => [(zt(), Fn(he, null, xi(t, (v) => S(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: nt(() => [S(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: nt(() => [S(l, { class: "text-h6 pt-5 px-5" }, { default: nt(() => [St(Ut(v.title), 1)]), _: 2 }, 1024), S(i, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: nt(() => [St(Ut(v.description), 1)]), _: 2 }, 1024), S(i, { class: "pt-0 px-5" }, { default: nt(() => [p("div", g0, [(zt(true), Fn(he, null, xi(v.tags, (y) => (zt(), Bl(o, { key: y, size: "x-small", color: "secondary", variant: "tonal" }, { default: nt(() => [St(Ut(y), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (zt(), Bl(s, { key: 0, class: "px-5 pb-5" }, { default: nt(() => [S(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: nt(() => [...a[0] || (a[0] = [St(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : uk("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), y0 = { id: "contact" }, b0 = { class: "d-flex justify-center flex-wrap ga-3" }, S0 = Ea({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, a) => {
    const l = ct("v-btn"), i = ct("v-container");
    return zt(), Fn("section", y0, [S(i, { class: "py-16 text-center" }, { default: nt(() => [a[0] || (a[0] = p("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), a[1] || (a[1] = p("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), p("div", b0, [(zt(), Fn(he, null, xi(t, (o) => S(l, { key: o.label, href: o.href, color: o.color, "prepend-icon": o.icon, variant: "outlined", target: "_blank", size: "large" }, { default: nt(() => [St(Ut(o.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), k0 = Ea({ __name: "App", setup(e) {
  return (t, n) => {
    const a = ct("v-main"), l = ct("v-app");
    return zt(), Bl(l, null, { default: nt(() => [S(a0), S(l0), S(a, null, { default: nt(() => [S(c0), S(v0), S(h0), S(S0)]), _: 1 }), S(o0)]), _: 1 });
  };
} });
function Mm(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ye = typeof window < "u", Lu = Ye && "IntersectionObserver" in window, w0 = Ye && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Od = Ye && "EyeDropper" in window, $u = Ye && "matchMedia" in window && typeof window.matchMedia == "function", $n = () => $u && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Nd(e, t, n) {
  p0(e, t), t.set(e, n);
}
function p0(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Rd(e, t, n) {
  return e.set(Bm(e, t), n), n;
}
function Kn(e, t) {
  return e.get(Bm(e, t));
}
function Bm(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Fm(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Ja(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Fm(e, t.split("."), n));
}
function vt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return Ja(e, t, n);
  if (Array.isArray(t)) return Fm(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function de(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function Qa(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function xs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ou(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Cs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Lm(e) {
  return Object.keys(e);
}
function za(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Zt(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function _s(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e) t.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Be(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const $m = /^on[^a-z]/, Nu = (e) => $m.test(e), x0 = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], C0 = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function _0(e) {
  return e.isComposing && C0.includes(e.key);
}
function Wn(e) {
  const [t, n] = _s(e, [$m]), a = Be(t, x0), [l, i] = _s(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Je(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Om(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++) i[o] = arguments[o];
    clearTimeout(n), n = setTimeout(() => e(...i), Ht(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Hd(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Wd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function zd(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function V0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function jd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function Bt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const i = e[l], o = t[l];
    if (xs(i) && xs(o)) {
      a[l] = Bt(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      a[l] = n(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function Nm(e) {
  return e.map((t) => t.type === he ? Nm(t.children) : t).flat();
}
function Ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ya.cache.has(e)) return Ya.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ya.cache.set(e, t), t;
}
Ya.cache = /* @__PURE__ */ new Map();
function _l(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => _l(e, n)).flat(1);
  if (t.suspense) return _l(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => _l(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return _l(e, t.component.subTree).flat(1);
  }
  return [];
}
var bl = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap();
class Rm {
  constructor(t) {
    Nd(this, bl, []), Nd(this, Oa, 0), this.size = t;
  }
  get isFull() {
    return Kn(bl, this).length === this.size;
  }
  push(t) {
    Kn(bl, this)[Kn(Oa, this)] = t, Rd(Oa, this, (Kn(Oa, this) + 1) % this.size);
  }
  values() {
    return Kn(bl, this).slice(Kn(Oa, this)).concat(Kn(bl, this).slice(0, Kn(Oa, this)));
  }
  clear() {
    Kn(bl, this).length = 0, Rd(Oa, this, 0);
  }
}
function I0(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function Ru(e) {
  const t = Vt({});
  lt(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = M(() => t[a]);
  return n;
}
function $o(e, t) {
  return e.includes(t);
}
function Hm(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const At = () => [Function, Array];
function Yd(e, t) {
  return t = "on" + Hn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function qi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
function wa(e) {
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
function Wm(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function Ua(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = wa(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = Wm(n, t);
    a ? a.focus() : Ua(e, t === "next" ? "first" : "last");
  }
}
function ii(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function rr() {
}
function Ll(e, t) {
  if (!(Ye && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function sr(e) {
  return e.some((t) => _i(t) ? t.type === Wt ? false : t.type !== he || sr(t.children) : true) ? e : null;
}
function mo(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function P0(e, t) {
  if (!Ye || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function T0(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return n >= i && n <= r && a >= o && a <= s;
}
function Ii() {
  const e = ie(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Ou(e.value) }), t;
}
function $l(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function _a(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Oo(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function A0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Oo(n)}]`), l = e.split("").filter((o) => a.test(o)).filter((o, r, s) => r === 0 && /[-]/.test(o) || o === n && r === s.indexOf(o) || /\d/.test(o)).join("");
  if (t === 0) return l.split(n)[0];
  const i = new RegExp(`${Oo(n)}\\d`);
  if (t !== null && i.test(l)) {
    const o = l.split(n);
    return [o[0], o[1].substring(0, t)].join(n);
  }
  return l;
}
function D0(e) {
  const t = {};
  for (const n in e) t[Qt(n)] = e[n];
  return t;
}
function E0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function Ud(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : mt(n) || ka(n) || ji(n) ? t(Pe(n)) : xs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const zm = ["top", "bottom"], M0 = ["start", "end", "left", "right"];
function Vs(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = $o(zm, n) ? "start" : $o(M0, n) ? "top" : "center"), { side: Is(n, t), align: Is(a, t) };
}
function Is(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Xr(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Zr(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Kd(e) {
  return { side: e.align, align: e.side };
}
function Gd(e) {
  return $o(zm, e.side) ? "y" : "x";
}
class hn {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, a = t instanceof Element, l = a ? 1 + (1 - n) / n : 1, { x: i, y: o, width: r, height: s } = a ? t.getBoundingClientRect() : t;
    this.x = i * l, this.y = o * l, this.width = r * l, this.height = s * l;
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
function qd(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function jm(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new hn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new hn(e);
}
function B0(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new hn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new hn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new hn(e);
}
function Hu(e) {
  const t = new hn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), i = Number(l[0]), o = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), i = Number(l[0]), o = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new hn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - i) * parseFloat(u), d = t.y - s - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, v = o ? t.height / o : e.offsetHeight + 1;
    return new hn({ x: c, y: d, width: f, height: v });
  } else return new hn(t);
}
function Xn(e, t, n) {
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
const Co = /* @__PURE__ */ new WeakMap();
function F0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Nu(n)) {
      const a = Hm(n), l = Co.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), Co.has(e) || Co.set(e, i);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function L0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Nu(n)) {
      const a = Hm(n), l = Co.get(e);
      l == null ? void 0 : l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else e.removeAttribute(n);
  });
}
const Sl = 2.4, Xd = 0.2126729, Zd = 0.7151522, Jd = 0.072175, $0 = 0.55, O0 = 0.58, N0 = 0.57, R0 = 0.62, go = 0.03, Qd = 1.45, H0 = 5e-4, W0 = 1.25, z0 = 1.25, ef = 0.078, tf = 12.82051282051282, ho = 0.06, nf = 1e-3;
function af(e, t) {
  const n = (e.r / 255) ** Sl, a = (e.g / 255) ** Sl, l = (e.b / 255) ** Sl, i = (t.r / 255) ** Sl, o = (t.g / 255) ** Sl, r = (t.b / 255) ** Sl;
  let s = n * Xd + a * Zd + l * Jd, u = i * Xd + o * Zd + r * Jd;
  if (s <= go && (s += (go - s) ** Qd), u <= go && (u += (go - u) ** Qd), Math.abs(u - s) < H0) return 0;
  let c;
  if (u > s) {
    const d = (u ** $0 - s ** O0) * W0;
    c = d < nf ? 0 : d < ef ? d - d * tf * ho : d - ho;
  } else {
    const d = (u ** R0 - s ** N0) * z0;
    c = d > -nf ? 0 : d > -ef ? d - d * tf * ho : d + ho;
  }
  return c * 100;
}
const No = 0.20689655172413793, j0 = (e) => e > No ** 3 ? Math.cbrt(e) : e / (3 * No ** 2) + 4 / 29, Y0 = (e) => e > No ? e ** 3 : 3 * No ** 2 * (e - 4 / 29);
function Ym(e) {
  const t = j0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Um(e) {
  const t = Y0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const U0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], K0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, G0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], q0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Km(e) {
  const t = Array(3), n = K0, a = U0;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(je(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function Wu(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], i = q0, o = G0;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = o[r][0] * t + o[r][1] * n + o[r][2] * a;
  return l;
}
function Ps(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function X0(e) {
  return Ps(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const lf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Z0 = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => of({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => of({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => On({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => On({ h: e, s: t, v: n, a }) };
function on(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && lf.test(e)) {
    const { groups: t } = e.match(lf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Z0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Zm(t);
  } else if (typeof e == "object") {
    if (za(e, ["r", "g", "b"])) return e;
    if (za(e, ["h", "s", "l"])) return On(zu(e));
    if (za(e, ["h", "s", "v"])) return On(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function On(e) {
  const { h: t, s: n, v: a, a: l } = e, i = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return { r: o[0], g: o[1], b: o[2], a: l };
}
function of(e) {
  return On(zu(e));
}
function Xi(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), i = Math.min(t, n, a);
  let o = 0;
  l !== i && (l === t ? o = 60 * (0 + (n - a) / (l - i)) : l === n ? o = 60 * (2 + (a - t) / (l - i)) : l === a && (o = 60 * (4 + (t - n) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Ts(e) {
  const { h: t, s: n, v: a, a: l } = e, i = a - a * n / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return { h: t, s: o, l: i, a: l };
}
function zu(e) {
  const { h: t, s: n, l: a, a: l } = e, i = a + n * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return { h: t, s: o, v: i, a: l };
}
function Gm(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function qm(e) {
  return Gm(On(e));
}
function yo(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Xm(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[yo(t), yo(n), yo(a), l !== void 0 ? yo(Math.round(l * 255)) : ""].join("")}`;
}
function Zm(e) {
  e = Q0(e);
  let [t, n, a, l] = V0(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function J0(e) {
  const t = Zm(e);
  return Xi(t);
}
function Jm(e) {
  return Xm(On(e));
}
function Q0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Wd(Wd(e, 6), 8, "F")), e;
}
function ew(e, t) {
  const n = Ym(Wu(e));
  return n[0] = n[0] + t * 10, Km(Um(n));
}
function tw(e, t) {
  const n = Ym(Wu(e));
  return n[0] = n[0] - t * 10, Km(Um(n));
}
function As(e) {
  const t = on(e);
  return Wu(t)[1];
}
function nw(e, t) {
  const n = As(e), a = As(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Qm(e) {
  const t = Math.abs(af(on(0), on(e)));
  return Math.abs(af(on(16777215), on(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function R(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...o, default: n[l] } : a[l] = o, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const Se = R({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function gt(e, t) {
  const n = Ki();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function zn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = gt(e).type;
  return Ya((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function aw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gt("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Ol = Symbol.for("vuetify:defaults");
function lw(e) {
  return Q(e);
}
function ju() {
  const e = Oe(Ol);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function st(e, t) {
  const n = ju(), a = Q(e), l = _(() => {
    if (Ht(t == null ? void 0 : t.disabled)) return n.value;
    const o = Ht(t == null ? void 0 : t.scoped), r = Ht(t == null ? void 0 : t.reset), s = Ht(t == null ? void 0 : t.root);
    if (a.value == null && !(o || r || s)) return n.value;
    let u = Bt(a.value, { prev: n.value });
    if (o) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = Bt(Bt(u, { prev: u }), u[s])), u;
    }
    return u.prev ? Bt(u.prev, u) : u;
  });
  return et(Ol, l), l;
}
function iw(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ya(t)] < "u");
}
function ow() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ju();
  const a = gt("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), i = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (iw(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), o = ie();
  lt(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else o.value = void 0;
  });
  function r() {
    const s = aw(Ol, a);
    et(Ol, _(() => o.value ? Bt((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return { props: i, provideSubDefaults: r };
}
function Kt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Zt(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = ju();
      if (!i.value) return e._setup(a, l);
      const { props: o, provideSubDefaults: r } = ow(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function Z() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Kt : Ea)(t);
}
function rw(e, t) {
  return t.props = e, t;
}
function sa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Z()({ name: n ?? Hn(Qt(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...Se() }, setup(a, l) {
    let { slots: i } = l;
    return () => {
      var _a3;
      return ra(a.tag, { class: [e, a.class], style: a.style }, (_a3 = i.default) == null ? void 0 : _a3.call(i));
    };
  } });
}
function sw(e, t, n, a) {
  if (!n || _a(e) || _a(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const i = /* @__PURE__ */ new WeakMap();
    i.set(t, a), n.set(e, i);
  }
}
function uw(e, t, n) {
  var _a3, _b2;
  if (!n || _a(e) || _a(t)) return null;
  const a = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function It(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = uw(e, t, n);
  return l || (sw(e, t, n, true), a.every((i) => It(e[i], t[i], n)));
}
function eg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Pi = "cubic-bezier(0.4, 0, 0.2, 1)", rf = "cubic-bezier(0.0, 0, 0.2, 1)", sf = "cubic-bezier(0.4, 0, 1, 1)", cw = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function rn(e, t, n) {
  return Object.keys(e).filter((a) => Nu(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (i) => qi(e[l], i, n(i)), a), {});
}
function ur(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? dw(e) : Yu(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ro(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Yu(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Yu(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function dw(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function fw(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: i, parentIndentLines: o, variant: r } = e;
  const s = n && (!a || i || t > 1);
  return !o || !t ? { leaf: void 0, node: void 0, children: o, footer: o && (!s || r === "simple") ? [...o, i ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...o, "line"], node: [...o, "line"], children: [...o, "line"], footer: [...o, "line", "line"] } : { leaf: [...o, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...o, s ? "last-leaf" : "leaf"], children: [...o, s ? "none" : "line"], footer: [...o, s ? "none" : "line"] };
}
function vw(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function te(e) {
  const t = gt("useRender");
  t.render = e;
}
function mw(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, a = 0, l = 0, i = false, o = 0;
  function r() {
    clearTimeout(a), i = false, o = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++) c[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    o || (o = f);
    const v = f - Math.max(o, l);
    function y() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    i ? v >= t ? y() : n.trailing && (a = setTimeout(y, t - v)) : (i = true, n.leading && y());
  };
  return s.clear = r, s.immediate = e, s;
}
const Ce = [String, Function, Object, Array], Ds = Symbol.for("vuetify:icons"), cr = R({ icon: { type: Ce }, tag: { type: [String, Object, Function], required: true } }, "icon"), Es = Z()({ name: "VComponentIcon", props: cr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return S(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? S(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), Uu = Kt({ name: "VSvgIcon", inheritAttrs: false, props: cr(), setup(e, t) {
  let { attrs: n } = t;
  return () => S(e.tag, U(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? p("path", { d: a[0], "fill-opacity": a[1] }, null) : p("path", { d: a }, null)) : p("path", { d: e.icon }, null)])] });
} }), gw = Kt({ name: "VLigatureIcon", props: cr(), setup(e) {
  return () => S(e.tag, null, { default: () => [e.icon] });
} }), Ku = Kt({ name: "VClassIcon", props: cr(), setup(e) {
  return () => S(e.tag, { class: ee(e.icon) }, null);
} }), hw = (e) => {
  const t = Oe(Ds);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = qe(e);
    if (!a) return { component: Es };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: Uu, icon: l };
    if (typeof l != "string") return { component: Es, icon: l };
    const i = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), o = i ? l.slice(i.length + 1) : l;
    return { component: t.sets[i ?? t.defaultSet].component, icon: o };
  }) };
}, yw = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, bw = { component: (e) => ra(Ku, { ...e, class: "mdi" }) };
function Sw() {
  return { svg: { component: Uu }, class: { component: Ku } };
}
function kw(e) {
  const t = Sw(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = bw), Bt({ defaultSet: n, sets: t, aliases: { ...yw, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Dt(e, t) {
  let n;
  function a() {
    n = El(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  ue(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), ft(() => {
    n == null ? void 0 : n.stop();
  });
}
function pe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const i = gt("useProxiedModel"), o = Q(e[t] !== void 0 ? e[t] : n), r = Ya(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = i.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = i.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = i.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = i.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = i.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = i.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Dt(() => !u.value, () => {
    ue(() => e[t], (d) => {
      o.value = d;
    });
  });
  const c = _({ get() {
    const d = e[t];
    return a(u.value ? d : o.value);
  }, set(d) {
    const f = l(d), v = Pe(u.value ? e[t] : o.value);
    v === f || a(v) === d || (o.value = f, i == null ? void 0 : i.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const ww = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, uf = "$vuetify.", cf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), tg = (e, t, n) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++) i[o - 1] = arguments[o];
  if (!a.startsWith(uf)) return cf(a, i);
  const r = a.replace(uf, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = Ja(s, r, null);
  return c || (`${a}${e.value}`, c = Ja(u, r, null)), c || (c = a), typeof c != "string" && (c = a), cf(c, i);
};
function Gu(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function ng(e, t) {
  return Gu(e, t)(0.1).includes(",") ? "," : ".";
}
function Jr(e, t, n) {
  const a = pe(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ue(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function ag(e) {
  return (t) => {
    const n = Jr(t, "locale", e.current), a = Jr(t, "fallback", e.fallback), l = Jr(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: M(() => ng(n, a)), t: tg(n, a, l), n: Gu(n, a), provide: ag({ current: n, fallback: a, messages: l }) };
  };
}
function pw(e) {
  const t = ie((e == null ? void 0 : e.locale) ?? "en"), n = ie((e == null ? void 0 : e.fallback) ?? "en"), a = Q({ en: ww, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: M(() => (e == null ? void 0 : e.decimalSeparator) ?? ng(t, n)), t: tg(t, n, a), n: Gu(t, n), provide: ag({ current: t, fallback: n, messages: a }) };
}
const Nl = Symbol.for("vuetify:locale");
function xw(e) {
  return e.name != null;
}
function Cw(e) {
  const t = (e == null ? void 0 : e.adapter) && xw(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : pw(e), n = Vw(t, e);
  return { ...t, ...n };
}
function Ue() {
  const e = Oe(Nl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function lg(e) {
  const t = Oe(Nl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = Iw(n, t.rtl, e), l = { ...n, ...a };
  return et(Nl, l), l;
}
function _w() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Vw(e, t) {
  const n = Q((t == null ? void 0 : t.rtl) ?? _w()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: M(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function Iw(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: M(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function wt() {
  const e = Oe(Nl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function Zi(e) {
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
function Pw(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const i = ig(e), o = og(e), r = n ?? ((_a3 = Zi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (i.getDay() - r + 7) % 7, u = (o.getDay() - r + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(i);
    d.setDate(d.getDate() - (s - c)), l.push(d);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    l.push(d), l.length === 7 && (a.push(l), l = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() + c), l.push(d);
  }
  return l.length > 0 && a.push(l), a;
}
function hi(e, t, n) {
  var _a3;
  let a = (n ?? ((_a3 = Zi(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function Tw(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = Zi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function ig(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function og(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Aw(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Dw = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function rg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Dw.test(e)) return Aw(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const df = new Date(2e3, 0, 2);
function Ew(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = Zi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Mn(7).map((l) => {
    const i = new Date(df);
    return i.setDate(df.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(i);
  });
}
function Mw(e, t, n, a) {
  const l = rg(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[t];
  if (typeof i == "function") return i(l, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      o = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(n, { month: "long" }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      o = { weekday: "short", day: "numeric", month: "short" };
      break;
    case "shortDate":
      o = { month: "short", day: "numeric" };
      break;
    case "year":
      o = { year: "numeric" };
      break;
    case "month":
      o = { month: "long" };
      break;
    case "monthShort":
      o = { month: "short" };
      break;
    case "monthAndYear":
      o = { month: "long", year: "numeric" };
      break;
    case "monthAndDate":
      o = { month: "long", day: "numeric" };
      break;
    case "weekday":
      o = { weekday: "long" };
      break;
    case "weekdayShort":
      o = { weekday: "short" };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      o = { hour: "numeric", hour12: true };
      break;
    case "hours24h":
      o = { hour: "numeric", hour12: false };
      break;
    case "minutes":
      o = { minute: "numeric" };
      break;
    case "seconds":
      o = { second: "numeric" };
      break;
    case "fullTime":
      o = { hour: "numeric", minute: "numeric" };
      break;
    case "fullTime12h":
      o = { hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullTime24h":
      o = { hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "fullDateTime":
      o = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
      break;
    case "fullDateTime12h":
      o = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullDateTime24h":
      o = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "keyboardDate":
      o = { year: "numeric", month: "2-digit", day: "2-digit" };
      break;
    case "keyboardDateTime":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, o).format(l);
}
function Bw(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = zd(String(n.getMonth() + 1), 2, "0"), i = zd(String(n.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function Fw(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function Lw(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function $w(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Ka(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Ow(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Nw(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Ti(e) {
  return e.getFullYear();
}
function Rw(e) {
  return e.getMonth();
}
function Hw(e, t, n, a) {
  const l = Zi(t), i = n ?? (l == null ? void 0 : l.firstDay) ?? 0, o = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? Ww(e, t, i, a) : zw(e, t, i, o);
}
function Ww(e, t, n, a) {
  const l = (7 + a - n) % 7, i = hi(e, t, n), o = Ka(i, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Ti(i);
  s < Ti(o) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? Ka(u, -c) : Ka(u, 7 - c);
  return 1 + Wo(qu(i), Ai(d), "weeks");
}
function zw(e, t, n, a) {
  const l = hi(e, t, n), i = Ka(hi(e, t, n), 6);
  function o(d) {
    const f = new Date(d, 0, 1);
    return 7 - Wo(f, hi(f, t, n), "days");
  }
  let r = Ti(l);
  r < Ti(i) && o(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = o(r), c = u >= a ? Ka(s, u - 7) : Ka(s, u);
  return 1 + Wo(qu(l), Ai(c), "weeks");
}
function jw(e) {
  return e.getDate();
}
function Yw(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Uw(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Kw(e) {
  return e.getHours();
}
function Gw(e) {
  return e.getMinutes();
}
function qw(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Xw(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Zw(e, t) {
  return Ho(e, t[0]) && ep(e, t[1]);
}
function Jw(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ho(e, t) {
  return e.getTime() > t.getTime();
}
function Qw(e, t) {
  return Ho(Ai(e), Ai(t));
}
function ep(e, t) {
  return e.getTime() < t.getTime();
}
function ff(e, t) {
  return e.getTime() === t.getTime();
}
function tp(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function np(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ap(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Wo(e, t, n) {
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
function lp(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function ip(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function op(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function rp(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function sp(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Ai(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function qu(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class up {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return rg(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Bw(this, t);
  }
  parseISO(t) {
    return Fw(t);
  }
  addMinutes(t, n) {
    return Lw(t, n);
  }
  addHours(t, n) {
    return $w(t, n);
  }
  addDays(t, n) {
    return Ka(t, n);
  }
  addWeeks(t, n) {
    return Ow(t, n);
  }
  addMonths(t, n) {
    return Nw(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Pw(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return hi(t, this.locale, a);
  }
  endOfWeek(t) {
    return Tw(t, this.locale);
  }
  startOfMonth(t) {
    return ig(t);
  }
  endOfMonth(t) {
    return og(t);
  }
  format(t, n) {
    return Mw(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return ff(t, n);
  }
  isValid(t) {
    return Jw(t);
  }
  isWithinRange(t, n) {
    return Zw(t, n);
  }
  isAfter(t, n) {
    return Ho(t, n);
  }
  isAfterDay(t, n) {
    return Qw(t, n);
  }
  isBefore(t, n) {
    return !Ho(t, n) && !ff(t, n);
  }
  isSameDay(t, n) {
    return tp(t, n);
  }
  isSameMonth(t, n) {
    return np(t, n);
  }
  isSameYear(t, n) {
    return ap(t, n);
  }
  setMinutes(t, n) {
    return ip(t, n);
  }
  setHours(t, n) {
    return lp(t, n);
  }
  setMonth(t, n) {
    return op(t, n);
  }
  setDate(t, n) {
    return rp(t, n);
  }
  setYear(t, n) {
    return sp(t, n);
  }
  getDiff(t, n, a) {
    return Wo(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return Ew(this.locale, a, n);
  }
  getYear(t) {
    return Ti(t);
  }
  getMonth(t) {
    return Rw(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, i = a !== void 0 ? Number(a) : void 0;
    return Hw(t, this.locale, l, i);
  }
  getDate(t) {
    return jw(t);
  }
  getNextMonth(t) {
    return Yw(t);
  }
  getPreviousMonth(t) {
    return Uw(t);
  }
  getHours(t) {
    return Kw(t);
  }
  getMinutes(t) {
    return Gw(t);
  }
  startOfDay(t) {
    return Ai(t);
  }
  endOfDay(t) {
    return qu(t);
  }
  startOfYear(t) {
    return qw(t);
  }
  endOfYear(t) {
    return Xw(t);
  }
}
const sg = Symbol.for("vuetify:date-options"), vf = Symbol.for("vuetify:date-adapter");
function cp(e, t) {
  const n = Bt({ adapter: up, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: cg(n, t) };
}
function dp(e, t, n) {
  const a = ug(e, t, n), l = [t];
  for (let i = 1; i < a; i++) {
    const o = e.addDays(t, i);
    l.push(o);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function ug(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function cg(e, t) {
  const n = Vt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return ue(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function rl() {
  const e = Oe(sg);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Ue();
  return cg(e, t);
}
const dr = ["sm", "md", "lg", "xl", "xxl"], Ms = Symbol.for("vuetify:display"), mf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, fp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mf;
  return Bt(mf, e);
};
function gf(e) {
  return Ye && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function hf(e) {
  return Ye && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function yf(e) {
  const t = Ye && !e ? window.navigator.userAgent : "ssr";
  function n(y) {
    return !!t.match(y);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), o = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: i, electron: o, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: w0, ssr: t === "ssr" };
}
function vp(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = fp(e), l = ie(hf(t)), i = ie(yf(t)), o = Vt({}), r = ie(gf(t));
  function s() {
    l.value = hf(), r.value = gf();
  }
  function u() {
    s(), i.value = yf();
  }
  return lt(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), y = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, b = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : y ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], x = r.value < h;
    o.xs = c, o.sm = d, o.md = f, o.lg = v, o.xl = y, o.xxl = m, o.smAndUp = !c, o.mdAndUp = !(c || d), o.lgAndUp = !(c || d || f), o.xlAndUp = !(c || d || f || v), o.smAndDown = !(f || v || y || m), o.mdAndDown = !(v || y || m), o.lgAndDown = !(y || m), o.xlAndDown = !m, o.name = b, o.height = l.value, o.width = r.value, o.mobile = x, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = n;
  }), Ye && (window.addEventListener("resize", s, { passive: true }), ft(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...jl(o), update: u, ssr: !!t };
}
const sl = R({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function dn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  const n = Oe(Ms);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: M(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const dg = Symbol.for("vuetify:goto");
function fg() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: cw };
}
function mp(e) {
  return Xu(e) ?? (document.scrollingElement || document.body);
}
function Xu(e) {
  return typeof e == "string" ? document.querySelector(e) : Ou(e);
}
function Qr(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Xu(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function gp(e, t) {
  return { rtl: t.isRtl, options: Bt(fg(), e) };
}
async function bf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", i = Bt((a == null ? void 0 : a.options) ?? fg(), t), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : Xu(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : mp(i.container), u = $n() ? i.patterns.instant : typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!u) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let c;
  if (typeof r == "number") c = Qr(r, n, o);
  else if (c = Qr(r, n, o) - Qr(s, n, o), i.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (c -= parseInt(y, 10));
  }
  c += i.offset, c = yp(s, c, !!o, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function y(m) {
    const h = (m - f) / i.duration, x = Math.floor(d + (c - d) * u(je(h, 0, 1)));
    if (s[l] = x, h >= 1 && Math.abs(x - s[l]) < 10) return v(c);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(y);
  }));
}
function hp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Oe(dg), { isRtl: n } = wt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: M(() => t.rtl.value || n.value) };
  async function l(i, o) {
    return bf(i, Bt(e, o), false, a);
  }
  return l.horizontal = async (i, o) => bf(i, Bt(e, o), true, a), l;
}
function yp(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: i } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - o), u = 0) : (s = 0, u = l - o) : (s = 0, u = i + -r), je(t, s, u);
}
const Di = Symbol.for("vuetify:theme"), Ne = R({ theme: String }, "theme");
function Sf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function bp() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sf();
  const t = Sf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const i = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Bt(i, l);
  }
  return Bt(t, { ...e, themes: n });
}
function Na(e, t, n, a) {
  e.push(`${pp(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function kf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [i, o] of Object.entries(e.colors)) {
    const r = on(o);
    l.push(`--${t}theme-${i}: ${r.r},${r.g},${r.b}`), i.startsWith("on-") || l.push(`--${t}theme-${i}-overlay-multiplier: ${As(o) > 0.18 ? n : a}`);
  }
  for (const [i, o] of Object.entries(e.variables)) {
    const r = typeof o == "string" && o.startsWith("#") ? on(o) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${i}: ${s ?? o}`);
  }
  return l;
}
function Sp(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const i = l === "lighten" ? ew : tw;
    for (const o of Mn(n[l], 1)) a[`${e}-${l}-${o}`] = Xm(i(on(t), o));
  }
  return a;
}
function kp(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...Sp(a, l, t) });
  }
  return n;
}
function wp(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = on(e[n]);
    t[a] = Qm(l);
  }
  return t;
}
function pp(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function xp(e, t, n) {
  const a = Cp(e, t);
  a && (a.innerHTML = n);
}
function Cp(e, t) {
  if (!Ye) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function _p(e) {
  const t = bp(e), n = ie(t.defaultTheme), a = Q(t.themes), l = ie("light"), i = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), o = _(() => {
    const h = {};
    for (const [x, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...kp(I.colors, t.variations) };
      h[x] = { ...I, colors: { ...V, ...wp(V) } };
    }
    return h;
  }), r = M(() => o.value[i.value]), s = M(() => n.value === "system"), u = _(() => {
    var _a3;
    const h = [], x = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && Na(h, ":root", ["color-scheme: dark"], t.scope), Na(h, ":root", kf(r.value, t.prefix), t.scope);
    for (const [k, g] of Object.entries(o.value)) Na(h, `.${t.prefix}theme--${k}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...kf(g, t.prefix)], t.scope);
    if (t.utilities) {
      const k = [], g = [], C = new Set(Object.values(o.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of C) w.startsWith("on-") ? Na(g, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope) : (Na(k, `.${I}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${x}`], t.scope), Na(g, `.${I}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope), Na(g, `.${I}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...k.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...g.map((w) => `  ${w}`), `}
`) : h.push(...k, ...g);
    }
    let V = h.map((k, g) => g === 0 ? k : `    ${k}`).join("");
    return t.layers && (V = `@layer vuetify.theme {
` + h.map((k) => `  ${k}`).join("") + `
}`), V;
  }), c = M(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), d = M(() => Object.keys(o.value));
  if ($u) {
    let x = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    x(), h.addEventListener("change", x, { passive: true }), mv() && ft(() => {
      h.removeEventListener("change", x);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const x = h._context.provides.usehead;
    if (x) {
      let I = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (x.push) {
        const V = x.push(I);
        Ye && ue(u, () => {
          V.patch(I);
        });
      } else Ye ? (x.addHeadObjs(M(I)), lt(() => x.updateDOM())) : x.addHeadObjs(I());
    } else {
      let I = function() {
        xp(t.stylesheetId, t.cspNonce, u.value);
      };
      Ye ? ue(u, I, { immediate: true }) : I();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (i.value = h);
  }
  function y() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = h.indexOf(i.value), I = x === -1 ? 0 : (x + 1) % h.length;
    v(h[I]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    y(h);
  }
  const b = new Proxy(i, { get(h, x) {
    return Reflect.get(h, x);
  }, set(h, x, I) {
    return x === "value" && Mm(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, x, I);
  } });
  return { install: f, change: v, cycle: y, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: i, themes: a, current: r, computedThemes: o, prefix: t.prefix, themeClasses: c, styles: u, global: { name: b, current: r } };
}
function We(e) {
  gt("provideTheme");
  const t = Oe(Di, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = M(() => e.theme ?? t.name.value), i = { ...t, name: n, current: M(() => t.themes.value[n.value]), themeClasses: M(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return et(Di, i), i;
}
function fr() {
  gt("useTheme");
  const e = Oe(Di, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Ii(), a = Q();
  if (Ye) {
    const l = new ResizeObserver((i) => {
      e == null ? void 0 : e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Lt(() => {
      l.disconnect();
    }), ue(() => n.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: Xa(a) };
}
const Ei = Symbol.for("vuetify:layout"), vg = Symbol.for("vuetify:layout-item"), wf = 1e3, mg = R({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), ul = R({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function gg() {
  const e = Oe(Ei);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function cl(e) {
  const t = Oe(Ei);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Tt()}`, a = gt("useLayoutItem");
  et(vg, { id: n });
  const l = ie(false);
  Au(() => l.value = true), Gv(() => l.value = false);
  const { layoutItemStyles: i, layoutItemScrimStyles: o } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Lt(() => t.unregister(n)), { layoutItemStyles: i, layoutRect: t.layoutRect, layoutItemScrimStyles: o };
}
const Vp = (e, t, n, a) => {
  let l = { top: 0, left: 0, right: 0, bottom: 0 };
  const i = [{ id: "", layer: { ...l } }];
  for (const o of e) {
    const r = t.get(o), s = n.get(o), u = a.get(o);
    if (!r || !s || !u) continue;
    const c = { ...l, [r.value]: parseInt(l[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0) };
    i.push({ id: o, layer: c }), l = c;
  }
  return i;
};
function hg(e) {
  const t = Oe(Ei, null), n = _(() => t ? t.rootZIndex.value - 100 : wf), a = Q([]), l = Vt(/* @__PURE__ */ new Map()), i = Vt(/* @__PURE__ */ new Map()), o = Vt(/* @__PURE__ */ new Map()), r = Vt(/* @__PURE__ */ new Map()), s = Vt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = yn(), d = _(() => {
    const g = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const w of C.filter((T) => T.includes(":"))) {
      const [T, P] = w.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const E = l.get(T), B = l.get(P), D = i.get(T), A = i.get(P);
      !E || !B || !D || !A || (g.set(P, { position: E.value, amount: parseInt(D.value, 10) }), g.set(T, { position: B.value, amount: -parseInt(A.value, 10) }));
    }
    return g;
  }), f = _(() => {
    const g = [...new Set([...o.values()].map((w) => w.value))].sort((w, T) => w - T), C = [];
    for (const w of g) {
      const T = a.value.filter((P) => {
        var _a3;
        return ((_a3 = o.get(P)) == null ? void 0 : _a3.value) === w;
      });
      C.push(...T);
    }
    return Vp(C, l, i, r);
  }), v = _(() => !Array.from(s.values()).some((g) => g.value)), y = _(() => f.value[f.value.length - 1].layer), m = M(() => ({ "--v-layout-left": de(y.value.left), "--v-layout-right": de(y.value.right), "--v-layout-top": de(y.value.top), "--v-layout-bottom": de(y.value.bottom), ...v.value ? void 0 : { transition: "none" } })), b = _(() => f.value.slice(1).map((g, C) => {
    let { id: w } = g;
    const { layer: T } = f.value[C], P = i.get(w), E = l.get(w);
    return { id: w, ...T, size: Number(P.value), position: E.value };
  })), h = (g) => b.value.find((C) => C.id === g), x = gt("createLayout"), I = ie(false);
  return kt(() => {
    I.value = true;
  }), et(Ei, { register: (g, C) => {
    let { id: w, order: T, position: P, layoutSize: E, elementSize: B, active: D, disableTransitions: A, absolute: L } = C;
    o.set(w, T), l.set(w, P), i.set(w, E), r.set(w, D), A && s.set(w, A);
    const H = _l(vg, x == null ? void 0 : x.vnode).indexOf(g);
    H > -1 ? a.value.splice(H, 0, w) : a.value.push(w);
    const X = _(() => b.value.findIndex((z) => z.id === w)), q = _(() => n.value + f.value.length * 2 - X.value * 2), N = _(() => {
      const z = P.value === "left" || P.value === "right", $ = P.value === "right", j = P.value === "bottom", oe = B.value ?? E.value, be = oe === 0 ? "%" : "px", ne = { [P.value]: 0, zIndex: q.value, transform: `translate${z ? "X" : "Y"}(${(D.value ? 0 : -(oe === 0 ? 100 : oe)) * ($ || j ? -1 : 1)}${be})`, position: L.value || n.value !== wf ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return ne;
      const fe = b.value[X.value], Ie = d.value.get(w);
      return Ie && (fe[Ie.position] += Ie.amount), { ...ne, height: z ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : B.value ? `${B.value}px` : void 0, left: $ ? void 0 : `${fe.left}px`, right: $ ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: z ? B.value ? `${B.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), K = _(() => ({ zIndex: q.value - 1 }));
    return { layoutItemStyles: N, layoutItemScrimStyles: K, zIndex: q };
  }, unregister: (g) => {
    o.delete(g), l.delete(g), i.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: y, mainStyles: m, getLayoutItem: h, items: b, layoutRect: c, rootZIndex: n }), { layoutClasses: M(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: M(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: b, layoutRect: c, layoutRef: u };
}
const Ip = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function pf(e) {
  const t = e.toLowerCase();
  return Ip[t] || t;
}
function yg(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], i = [];
  let o = "";
  const r = (u) => {
    o && (u && i.push(u), l.push(pf(o)), o = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : o += c : o += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [pf(e)], separators: i } : { keys: l, separators: i };
}
function Pp(e) {
  if (!e) return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n) return [];
  const a = [];
  let l = "", i = 0;
  for (; i < e.length; ) {
    const u = e[i];
    if (u === "-") {
      const c = e[i - 1], d = i > 1 ? e[i - 2] : void 0;
      ["+", "_"].includes(c) && !["+", "/"].includes(d ?? "") ? (l += u, i++) : (l ? (a.push(l), l = "") : a.push("-"), i++);
    } else l += u, i++;
  }
  l && a.push(l);
  const o = [];
  let r = 0;
  for (const u of a) u === "-" ? (r % 2 === 0 && o.push("-"), r++) : (r = 0, o.push(u));
  return o.every((u) => yg(u).keys.length > 0) ? o : [];
}
function bg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Bt(t, n), { aliases: l = {}, components: i = {}, directives: o = {} } = a, r = El();
  return r.run(() => {
    const s = lw(a.defaults), u = vp(a.display, a.ssr), c = _p(a.theme), d = kw(a.icons), f = Cw(a.locale), v = cp(a.date, f), y = gp(a.goTo, f);
    function m(h) {
      for (const I in o) h.directive(I, o[I]);
      for (const I in i) h.component(I, i[I]);
      for (const I in l) h.component(I, Kt({ ...l[I], name: I, aliasName: l[I].name }));
      const x = El();
      if (x.run(() => {
        c.install(h);
      }), h.onUnmount(() => x.stop()), h.provide(Ol, s), h.provide(Ms, u), h.provide(Di, c), h.provide(Ds, d), h.provide(Nl, f), h.provide(sg, v.options), h.provide(vf, v.instance), h.provide(dg, y), Ye && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: I } = h;
        h.mount = function() {
          const V = I(...arguments);
          return Te(() => u.update()), h.mount = I, V;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Vt({ defaults: kl.call(this, Ol), display: kl.call(this, Ms), theme: kl.call(this, Di), icons: kl.call(this, Ds), locale: kl.call(this, Nl), date: kl.call(this, vf) });
      } } });
    }
    function b() {
      r.stop();
    }
    return { install: m, unmount: b, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: y };
  });
}
const Tp = "3.12.1";
bg.version = Tp;
function kl(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Ap = R({ ...Se(), ...Be(mg(), ["fullHeight"]), ...Ne() }, "VApp"), Dp = Z()({ name: "VApp", props: Ap(), setup(e, t) {
  let { slots: n } = t;
  const a = We(e), { layoutClasses: l, getLayoutItem: i, items: o, layoutRef: r } = hg({ ...e, fullHeight: true }), { rtlClasses: s } = wt();
  return te(() => {
    var _a3;
    return p("div", { ref: r, class: ee(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: me([e.style]) }, [p("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: i, items: o, theme: a };
} }), Ae = R({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Sg = R({ text: String, ...Se(), ...Ae() }, "VToolbarTitle"), Zu = Z()({ name: "VToolbarTitle", props: Sg(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(n.default || n.text || e.text);
    return S(e.tag, { class: ee(["v-toolbar-title", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [a && p("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), Ep = R({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function fn(e, t, n) {
  return Z()({ name: e, props: Ep({ mode: n, origin: t }), setup(a, l) {
    let { slots: i } = l;
    const o = { onBeforeEnter(r) {
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
      const r = a.group ? Fu : Ca;
      return ra(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : o }, i.default);
    };
  } });
}
function Ju(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Z()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: $n() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: i } = l;
    const o = a.group ? Fu : Ca;
    return () => ra(o, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, i.default);
  } });
}
function Qu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(l) {
    l._parent = l.parentNode, l._initialStyle = { transition: l.style.transition, overflow: l.style.overflow, width: l.style.width, height: l.style.height };
  }, onEnter(l) {
    const i = l._initialStyle;
    if (!i) return;
    l.style.setProperty("transition", "none", "important"), l.style.overflow = "hidden";
    const o = `${l.offsetWidth}px`, r = `${l.offsetHeight}px`;
    ["x", "both"].includes(t) && (l.style.width = "0"), ["y", "both"].includes(t) && (l.style.height = "0"), l.offsetHeight, l.style.transition = i.transition, e && l._parent && l._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (l.style.width = o), ["y", "both"].includes(t) && (l.style.height = r);
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
    const { width: i, height: o } = l._initialStyle;
    l.style.overflow = l._initialStyle.overflow, i != null && ["x", "both"].includes(t) && (l.style.width = i), o != null && ["y", "both"].includes(t) && (l.style.height = o), delete l._initialStyle;
  }
}
const Mp = R({ target: [Object, Array] }, "v-dialog-transition"), es = /* @__PURE__ */ new WeakMap(), vr = Z()({ name: "VDialogTransition", props: Mp(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, i) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const o = Cf(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = o;
    if (es.set(l, o), $n()) Xn(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: rf }).finished.then(() => i());
    else {
      const f = Xn(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: rf });
      (_a3 = xf(l)) == null ? void 0 : _a3.forEach((v) => {
        Xn(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Pi });
      }), f.finished.then(() => i());
    }
  }, onAfterEnter(l) {
    l.style.removeProperty("pointer-events");
  }, onBeforeLeave(l) {
    l.style.pointerEvents = "none";
  }, async onLeave(l, i) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f));
    let o;
    !es.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Cf(e.target, l) : o = es.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = o;
    $n() ? Xn(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: sf }).finished.then(() => i()) : (Xn(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: sf }).finished.then(() => i()), (_a3 = xf(l)) == null ? void 0 : _a3.forEach((v) => {
      Xn(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Pi });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? S(Ca, U({ name: "dialog-transition" }, a, { css: false }), n) : S(Ca, { name: "dialog-transition" }, n);
} });
function xf(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function Cf(e, t) {
  const n = jm(e), a = Hu(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [o, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  o === "left" || r === "left" ? s -= n.width / 2 : (o === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || r === "top" ? u -= n.height / 2 : (o === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, y = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), b = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (i + a.top), sx: v, sy: y, speed: b };
}
const Bp = fn("fab-transition", "center center", "out-in"), Fp = fn("dialog-bottom-transition"), Lp = fn("dialog-top-transition"), Mi = fn("fade-transition"), ec = fn("scale-transition"), $p = fn("scroll-x-transition"), Op = fn("scroll-x-reverse-transition"), Np = fn("scroll-y-transition"), Rp = fn("scroll-y-reverse-transition"), Hp = fn("slide-x-transition"), Wp = fn("slide-x-reverse-transition"), tc = fn("slide-y-transition"), zp = fn("slide-y-reverse-transition"), mr = Ju("expand-transition", Qu()), nc = Ju("expand-x-transition", Qu("", "x")), jp = Ju("expand-both-transition", Qu("", "both")), Yp = R({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), De = Z(false)({ name: "VDefaultsProvider", props: Yp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: i, root: o, scoped: r } = jl(e);
  return st(a, { reset: i, root: o, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), ht = R({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function yt(e) {
  return { dimensionStyles: _(() => {
    const n = {}, a = de(e.height), l = de(e.maxHeight), i = de(e.maxWidth), o = de(e.minHeight), r = de(e.minWidth), s = de(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function Up(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const kg = R({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...Se(), ...ht() }, "VResponsive"), Bs = Z()({ name: "VResponsive", props: kg(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = Up(e), { dimensionStyles: l } = yt(e);
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: me([l.value, e.style]) }, [p("div", { class: "v-responsive__sizer", style: me(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && p("div", { class: ee(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function ac(e) {
  return Ru(() => {
    const { class: t, style: n } = wg(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Pt(e) {
  const { colorClasses: t, colorStyles: n } = ac(() => ({ text: qe(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function ze(e) {
  const { colorClasses: t, colorStyles: n } = ac(() => ({ background: qe(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function Kp(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function wg(e) {
  const t = Kp(qe(e)), n = [], a = {};
  if (t.background) if (Ps(t.background)) {
    if (a.backgroundColor = t.background, !t.text && X0(t.background)) {
      const l = on(t.background);
      if (l.a == null || l.a === 1) {
        const i = Qm(l);
        a.color = i, a.caretColor = i;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Ps(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const Qe = R({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return { roundedClasses: _(() => {
    const a = mt(e) ? e.value : e.rounded, l = mt(e) ? false : e.tile, i = [];
    if (l || a === false) i.push("rounded-0");
    else if (a === true || a === "") i.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const o of String(a).split(" ")) i.push(`rounded-${o}`);
    return i;
  }) };
}
const ua = R({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Yt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: i, ...o } = e, { component: r = i ? Fu : Ca, ...s } = Qa(a) ? a : {};
  let u;
  return Qa(a) ? u = U(s, E0({ disabled: l, group: i }), o) : u = U({ name: l || !a ? "" : a }, o), ra(r, u, n);
};
function _f(e, t) {
  if (!Lu) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: i } = typeof a == "object" ? a : { handler: a, options: {} }, o = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? Fs(e, t) : u.init = true;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: o }, o.observe(e);
}
function Fs(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const _n = { mounted: _f, unmounted: Fs, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (Fs(e, t), _f(e, t));
} }, pg = R({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...kg(), ...Se(), ...Qe(), ...ua() }, "VImg"), la = Z()({ name: "VImg", directives: { vIntersect: _n }, props: pg(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color), { roundedClasses: o } = it(e), r = gt("VImg"), s = ie(""), u = Q(), c = ie(e.eager ? "loading" : "idle"), d = ie(), f = ie(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = _(() => v.value.aspect || d.value / f.value || 0);
  ue(() => e.src, () => {
    m(c.value !== "idle");
  }), ue(y, (B, D) => {
    !B && D && u.value && V(u.value);
  }), Yl(() => m());
  function m(B) {
    if (!(e.eager && B) && !(Lu && !B && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const D = new Image();
        D.src = v.value.lazySrc, V(D, null);
      }
      v.value.src && Te(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            y.value || V(u.value, null), c.value === "loading" && b();
          } else y.value || V(u.value), x();
        });
      });
    }
  }
  function b() {
    var _a3;
    r.isUnmounted || (x(), V(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function x() {
    const B = u.value;
    B && (s.value = B.currentSrc || B.src);
  }
  let I = -1;
  Lt(() => {
    clearTimeout(I);
  });
  function V(B) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const A = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: W } = B;
      L || W ? (d.value = W, f.value = L) : !B.complete && c.value === "loading" && D != null ? I = window.setTimeout(A, D) : (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    A();
  }
  const k = M(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const B = p("img", { class: ee(["v-img__img", k.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: b, onError: h }, null), D = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return S(Yt, { transition: e.transition, appear: true }, { default: () => [Xe(D ? p("picture", { class: "v-img__picture" }, [D, B]) : B, [[In, c.value === "loaded"]])] });
  }, C = () => S(Yt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && p("img", { class: ee(["v-img__img", "v-img__img--preload", k.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => a.placeholder ? S(Yt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && p("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, T = () => a.error ? S(Yt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && p("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ie(false);
  {
    const B = ue(y, (D) => {
      D && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), B());
    });
  }
  return te(() => {
    const B = Bs.filterProps(e);
    return Xe(S(Bs, U({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, o.value, e.class], style: [{ width: de(e.width === "auto" ? d.value : e.width) }, i.value, e.style] }, B, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(he, null, [S(g, null, null), S(C, null, null), S(P, null, null), S(w, null, null), S(T, null, null)]), default: a.default }), [[_n, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), $t = R({ border: [Boolean, Number, String] }, "border");
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return { borderClasses: _(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const bt = R({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function xt(e) {
  return { elevationClasses: M(() => {
    const n = mt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Vf = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, jn = R({ location: String }, "location");
function Ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = wt();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: i, align: o } = Vs(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return i !== "center" && (t ? s[Vf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? t ? s[Vf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), s;
  }) };
}
const Gp = [null, "prominent", "default", "comfortable", "compact"], xg = R({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => Gp.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...$t(), ...Se(), ...bt(), ...jn(), ...Qe(), ...Ae({ tag: "header" }), ...Ne() }, "VToolbar"), Ls = Z()({ name: "VToolbar", props: xg(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = ze(() => e.color), { borderClasses: i } = Gt(e), { elevationClasses: o } = xt(e), { locationStyles: r } = Ma(e), { roundedClasses: s } = it(e), { themeClasses: u } = We(e), { rtlClasses: c } = wt(), d = ie(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return st({ VBtn: { variant: "text" } }), te(() => {
    var _a4;
    const y = !!(e.title || n.title), m = !!(n.image || e.image), b = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!b : e.extended, S(e.tag, { class: ee(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, i.value, o.value, s.value, u.value, c.value, e.class]), style: me([l.value, r.value, e.style]) }, { default: () => [m && p("div", { key: "image", class: "v-toolbar__image" }, [n.image ? S(De, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : S(la, { key: "image-img", cover: true, src: e.image }, null)]), S(De, { defaults: { VTabs: { height: de(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [p("div", { class: "v-toolbar__content", style: { height: de(f.value) } }, [n.prepend && p("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), y && S(Zu, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && p("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), S(De, { defaults: { VTabs: { height: de(v.value) } } }, { default: () => [S(mr, null, { default: () => [d.value && p("div", { class: "v-toolbar__extension", style: { height: de(v.value) } }, [b])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), qp = R({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function Xp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, i = 0;
  const o = Q(null), r = ie(0), s = ie(0), u = ie(0), c = ie(false), d = ie(false), f = ie(false), v = ie(false), y = ie(true), m = _(() => Number(e.scrollThreshold)), b = _(() => je((m.value - r.value) / m.value || 0));
  function h(k) {
    const g = "window" in k ? window.innerHeight : k.clientHeight, C = "window" in k ? document.documentElement.scrollHeight : k.scrollHeight;
    return { clientHeight: g, scrollHeight: C };
  }
  function x() {
    const k = o.value;
    if (!k) return;
    const { clientHeight: g, scrollHeight: C } = h(k), w = C - g, T = (a == null ? void 0 : a.value) || 0, P = m.value + T;
    y.value = w > P;
  }
  function I() {
    x();
  }
  function V() {
    const k = o.value;
    if (!k || n && !n.value) return;
    l = r.value, r.value = "window" in k ? k.pageYOffset : k.scrollTop;
    const g = k instanceof Window ? document.documentElement.scrollHeight : k.scrollHeight;
    i !== g && (g > i && x(), i = g), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: w } = h(k), T = r.value + C >= w - 5;
    !d.value && T && r.value >= m.value && y.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !T || P && r.value < m.value || E) && (v.value = false), f.value = T;
  }
  return ue(d, () => {
    s.value = s.value || r.value;
  }), ue(c, () => {
    s.value = 0;
  }), kt(() => {
    ue(() => e.scrollTarget, (k) => {
      var _a3;
      const g = k ? document.querySelector(k) : window;
      g && g !== o.value && ((_a3 = o.value) == null ? void 0 : _a3.removeEventListener("scroll", V), o.value = g, o.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        x();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Lt(() => {
    var _a3;
    (_a3 = o.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && ue(n, V, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: b, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: y };
}
function dl() {
  const e = ie(false);
  return kt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: M(() => e.value ? void 0 : { transition: "none !important" }), isBooted: Xa(e) };
}
const Zp = R({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Be(xg(), ["location"]), ...ul(), ...qp(), height: { type: [Number, String], default: 64 } }, "VAppBar"), Jp = Z()({ name: "VAppBar", props: Zp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Q(), l = pe(e, "modelValue"), i = _(() => {
    var _a3;
    const g = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: g.has("hide"), fullyHide: g.has("fully-hide"), inverted: g.has("inverted"), collapse: g.has("collapse"), elevate: g.has("elevate"), fadeImage: g.has("fade-image") };
  }), o = _(() => {
    const g = i.value;
    return g.hide || g.fullyHide || g.inverted || g.collapse || g.elevate || g.fadeImage || !l.value;
  }), r = _(() => {
    var _a3, _b2;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return g + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: y } = Xp(e, { canScroll: o, layoutSize: r }), m = M(() => i.value.hide || i.value.fullyHide), b = _(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), x = _(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a3, _b2;
    if (i.value.hide && i.value.inverted) return 0;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || i.value.fullyHide ? g + C : g : g + C;
  });
  Dt(() => !!e.scrollBehavior, () => {
    lt(() => {
      if (!m.value) {
        l.value = true;
        return;
      }
      if (i.value.inverted) {
        l.value = s.value > u.value;
        return;
      }
      if (!y.value) {
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
  const { ssrBootStyles: V } = dl(), { layoutItemStyles: k } = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: M(() => e.location), layoutSize: I, elementSize: ie(void 0), active: l, absolute: M(() => e.absolute) });
  return te(() => {
    const g = Be(Ls.filterProps(e), ["location"]);
    return S(Ls, U({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...k.value, "--v-toolbar-image-opacity": x.value, height: void 0, ...V.value }, e.style] }, g, { collapse: b.value, flat: h.value }), n);
  }), {};
} }), Qp = [null, "default", "comfortable", "compact"], ut = R({ density: { type: String, default: "default", validator: (e) => Qp.includes(e) } }, "density");
function Mt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return { densityClasses: M(() => `${t}--density-${e.density}`) };
}
const ex = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ca(e, t) {
  return p(he, null, [e && p("span", { key: "overlay", class: ee(`${t}__overlay`) }, null), p("span", { key: "underlay", class: ee(`${t}__underlay`) }, null)]);
}
const vn = R({ color: String, variant: { type: String, default: "elevated", validator: (e) => ex.includes(e) } }, "variant");
function da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  const n = M(() => {
    const { variant: i } = qe(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: a, colorStyles: l } = ac(() => {
    const { variant: i, color: o } = qe(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: o };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Cg = R({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...$t(), ...Se(), ...ut(), ...bt(), ...Qe(), ...Ae(), ...Ne(), ...vn() }, "VBtnGroup"), $s = Z()({ name: "VBtnGroup", props: Cg(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { densityClasses: l } = Mt(e), { borderClasses: i } = Gt(e), { elevationClasses: o } = xt(e), { roundedClasses: r } = it(e);
  st({ VBtn: { height: M(() => e.direction === "horizontal" ? "auto" : null), baseColor: M(() => e.baseColor), color: M(() => e.color), density: M(() => e.density), flat: true, variant: M(() => e.variant) } }), te(() => S(e.tag, { class: ee(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, i.value, l.value, o.value, r.value, e.class]), style: me(e.style) }, n));
} }), fl = R({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), vl = R({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Va(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = gt("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Tt();
  et(Symbol.for(`${t.description}:id`), l);
  const i = Oe(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = M(() => e.value), r = _(() => !!(i.disabled.value || e.disabled));
  function s() {
    i == null ? void 0 : i.register({ id: l, value: o, disabled: r }, a);
  }
  function u() {
    i == null ? void 0 : i.unregister(l);
  }
  s(), Lt(() => u());
  const c = _(() => i.isSelected(l)), d = _(() => i.items.value[0].id === l), f = _(() => i.items.value[i.items.value.length - 1].id === l), v = _(() => c.value && [i.selectedClass.value, e.selectedClass]);
  return ue(c, (y) => {
    a.emit("group:selected", { value: y });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => i.select(l, !c.value), select: (y) => i.select(l, y), selectedClass: v, value: o, disabled: r, group: i, register: s, unregister: u };
}
function Ba(e, t) {
  let n = false;
  const a = Vt([]), l = pe(e, "modelValue", [], (f) => f === void 0 ? [] : _g(a, f === null ? [null] : Je(f)), (f) => {
    const v = nx(a, f);
    return e.multiple ? v : v[0];
  }), i = gt("useGroup");
  function o(f, v) {
    const y = f, m = Symbol.for(`${t.description}:id`), h = _l(m, i == null ? void 0 : i.vnode).indexOf(v);
    Ht(y.value) === void 0 && (y.value = h, y.useIndexAsValue = true), h > -1 ? a.splice(h, 0, y) : a.push(y);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((y) => y.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  kt(() => {
    s();
  }), Lt(() => {
    n = true;
  }), ar(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const y = a.find((m) => m.id === f);
    if (!(v && (y == null ? void 0 : y.disabled))) if (e.multiple) {
      const m = l.value.slice(), b = m.findIndex((x) => x === f), h = ~b;
      if (v = v ?? !h, h && e.mandatory && m.length <= 1 || !h && e.max != null && m.length + 1 > e.max) return;
      b < 0 && v ? m.push(f) : b >= 0 && !v && m.splice(b, 1), l.value = m;
    } else {
      const m = l.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      l.value = v ?? !m ? [f] : [];
    }
  }
  function c(f) {
    if (e.multiple, l.value.length) {
      const v = l.value[0], y = a.findIndex((h) => h.id === v);
      let m = (y + f) % a.length, b = a[m];
      for (; b.disabled && m !== y; ) m = (m + f) % a.length, b = a[m];
      if (b.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((y) => !y.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: o, unregister: r, selected: l, select: u, disabled: M(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: M(() => e.selectedClass), items: M(() => a), getItemIndex: (f) => tx(a, f) };
  return et(t, d), d;
}
function tx(e, t) {
  const n = _g(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function _g(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((o) => It(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (i == null ? void 0 : i.useIndexAsValue) && n.push(i.id);
  }), n;
}
function nx(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value !== void 0 ? i.value : l);
    }
  }), n;
}
const lc = Symbol.for("vuetify:v-btn-toggle"), ax = R({ ...Cg(), ...fl() }, "VBtnToggle"), lx = Z()({ name: "VBtnToggle", props: ax(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: i, select: o, selected: r } = Ba(e, lc);
  return te(() => {
    const s = $s.filterProps(e);
    return S($s, U({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: i, select: o, selected: r })];
    } });
  }), { next: l, prev: i, select: o };
} }), ix = ["x-small", "small", "default", "large", "x-large"], Yn = R({ size: { type: [String, Number], default: "default" } }, "size");
function Ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return Ru(() => {
    const n = e.size;
    let a, l;
    return $o(ix, n) ? a = `${t}--size-${n}` : n && (l = { width: de(n), height: de(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const ox = R({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ce, opacity: [String, Number], ...Se(), ...Yn(), ...Ae({ tag: "i" }), ...Ne() }, "VIcon"), He = Z()({ name: "VIcon", props: ox(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ie(), { themeClasses: i } = fr(), { iconData: o } = hw(() => l.value || e.icon), { sizeClasses: r } = Ul(e), { textColorClasses: s, textColorStyles: u } = Pt(() => e.color);
  return te(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = Nm(c).filter((f) => f.type === Ui && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return S(o.value.component, { tag: e.tag, icon: o.value.icon, class: ee(["v-icon", "notranslate", i.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: me([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: de(e.size), height: de(e.size), width: de(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function Ji(e, t) {
  const n = Q(), a = ie(false);
  if (Lu) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, t);
    ft(() => {
      l.disconnect();
    }), ue(n, (i, o) => {
      o && (l.unobserve(o), a.value = false), i && l.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const rx = R({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function sx(e) {
  const n = M(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ie(e.reveal ? "initial" : "disabled");
  return kt(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const ux = R({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Se(), ...rx(), ...Yn(), ...Ae({ tag: "div" }), ...Ne() }, "VProgressCircular"), Ia = Z()({ name: "VProgressCircular", props: ux(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, i = Q(), { themeClasses: o } = We(e), { sizeClasses: r, sizeStyles: s } = Ul(e), { textColorClasses: u, textColorStyles: c } = Pt(() => e.color), { textColorClasses: d, textColorStyles: f } = Pt(() => e.bgColor), { intersectionRef: v, isIntersecting: y } = Ji(), { resizeRef: m, contentRect: b } = yn(), { state: h, duration: x } = sx(e), I = M(() => h.value === "initial" ? 0 : je(parseFloat(e.modelValue), 0, 100)), V = M(() => Number(e.width)), k = M(() => s.value ? Number(e.size) : b.value ? b.value.width : Math.max(V.value, 32)), g = M(() => a / (1 - V.value / k.value) * 2), C = M(() => V.value / k.value * g.value), w = M(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? de(Math.min(l - 0.01, P + C.value)) : de(P);
  }), T = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return lt(() => {
    v.value = i.value, m.value = i.value;
  }), te(() => S(e.tag, { ref: i, class: ee(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": y.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || $n()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, o.value, r.value, u.value, e.class]), style: me([s.value, c.value, { "--progress-reveal-duration": `${x.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [p("circle", { class: ee(["v-progress-circular__underlay", d.value]), style: me(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), cx = R({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function dx(e, t) {
  const n = M(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = qe(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = M(() => Number(e.chunkGap)), i = _(() => {
    if (!n.value) return {};
    const r = de(l.value), s = de(a.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function o(r) {
    const s = qe(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return je(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: i, snapValueToChunk: o };
}
const fx = R({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...cx(), ...Se(), ...jn({ location: "top" }), ...Qe(), ...Ae(), ...Ne() }, "VProgressLinear"), gr = Z()({ name: "VProgressLinear", props: fx(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Q(), l = pe(e, "modelValue"), { isRtl: i, rtlClasses: o } = wt(), { themeClasses: r } = We(e), { locationStyles: s } = Ma(e), { textColorClasses: u, textColorStyles: c } = Pt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = ze(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: y } = ze(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: b } = ze(() => e.color), { roundedClasses: h } = it(e), { intersectionRef: x, isIntersecting: I } = Ji(), V = _(() => parseFloat(e.max)), k = _(() => parseFloat(e.height)), g = _(() => je(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => je(parseFloat(l.value) / V.value * 100, 0, 100)), w = _(() => i.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = ie(0), { hasChunks: E, chunksMaskStyles: B, snapValueToChunk: D } = dx(e, P);
  Dt(E, () => {
    const { resizeRef: H } = yn((X) => P.value = X[0].contentRect.width);
    lt(() => H.value = a.value);
  });
  const A = _(() => E.value ? D(g.value) : g.value), L = _(() => E.value ? D(C.value) : C.value);
  function W(H) {
    if (!x.value) return;
    const { left: X, right: q, width: N } = x.value.getBoundingClientRect(), K = w.value ? N - H.clientX + (q - N) : H.clientX - X;
    l.value = Math.round(K / N * V.value);
  }
  return lt(() => {
    x.value = a.value;
  }), te(() => S(e.tag, { ref: a, class: ee(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, o.value, e.class]), style: me([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? de(k.value) : 0, "--v-progress-linear-height": de(k.value), ...e.absolute ? s.value : {} }, B.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && W }, { default: () => [e.stream && p("div", { key: "stream", class: ee(["v-progress-linear__stream", u.value]), style: { ...c.value, [w.value ? "left" : "right"]: de(-k.value), borderTop: `${de(k.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${de(k.value / 4)})`, width: de(100 - g.value, "%"), "--v-progress-linear-stream-to": de(k.value * (w.value ? 1 : -1)) } }, null), p("div", { class: ee(["v-progress-linear__background", d.value]), style: me([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), p("div", { class: ee(["v-progress-linear__buffer", v.value]), style: me([y.value, { opacity: parseFloat(e.bufferOpacity), width: de(A.value, "%") }]) }, null), S(Ca, { name: T.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((H) => p("div", { key: H, class: ee(["v-progress-linear__indeterminate", H, m.value]), style: me(b.value) }, null))]) : p("div", { class: ee(["v-progress-linear__determinate", m.value]), style: me([b.value, { width: de(L.value, "%") }]) }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
} }), hr = R({ loading: [Boolean, String] }, "loader");
function Qi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return { loaderClasses: M(() => ({ [`${t}--loading`]: e.loading })) };
}
function eo(e, t) {
  var _a3;
  let { slots: n } = t;
  return p("div", { class: ee(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || S(gr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const vx = ["static", "relative", "fixed", "absolute", "sticky"], Kl = R({ position: { type: String, validator: (e) => vx.includes(e) } }, "position");
function Gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  return { positionClasses: M(() => e.position ? `${t}--${e.position}` : void 0) };
}
function mx() {
  const e = gt("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function Vg() {
  var _a3, _b2;
  return (_b2 = (_a3 = gt("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function to(e, t) {
  const n = BS("RouterLink"), a = M(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || Yd(t, "click") || Yd(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = M(() => e.href);
    return { isLink: a, isRouterLink: M(() => false), isClickable: l, href: d, linkProps: Vt({ href: d }), route: M(() => {
    }), navigate: M(() => {
    }) };
  }
  const i = n.useLink({ to: M(() => e.to || ""), replace: M(() => e.replace) }), o = _(() => e.to ? i : void 0), r = mx(), s = _(() => {
    var _a3, _b2, _c2;
    return o.value ? e.exact ? r.value ? ((_a3 = o.value.isExactActive) == null ? void 0 : _a3.value) && It(o.value.route.value.query, r.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = _(() => {
    var _a3;
    return e.to ? (_a3 = o.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: M(() => !!e.to), isClickable: l, isActive: s, route: M(() => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.route.value;
  }), navigate: M(() => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.navigate;
  }), href: u, linkProps: Vt({ href: u, "aria-current": M(() => s.value ? "page" : void 0), "aria-disabled": M(() => e.disabled && a.value ? "true" : void 0), tabindex: M(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const no = R({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let ts = false;
function gx(e, t) {
  let n = false, a, l;
  Ye && (e == null ? void 0 : e.beforeEach) && (Te(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      ts ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), ts = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      ts = false;
    });
  }), ft(() => {
    window.removeEventListener("popstate", i), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function i(o) {
    var _a3;
    ((_a3 = o.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function hx(e, t) {
  ue(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Te(() => {
      t(n);
    });
  }, { immediate: true });
}
const Os = Symbol("rippleStop"), yx = 80;
function If(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Ns(e) {
  return e.constructor.name === "TouchEvent";
}
function Ig(e) {
  return e.constructor.name === "KeyboardEvent";
}
const bx = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Ig(e)) {
    const d = t.getBoundingClientRect(), f = Ns(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let i = 0, o = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? r : `${a - i}px`, c = n.center ? s : `${l - i}px`;
  return { radius: i, scale: o, x: u, y: c, centerX: r, centerY: s };
}, zo = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: i, scale: o, x: r, y: s, centerX: u, centerY: c } = bx(e, t, n), d = `${i * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), If(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), If(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
    });
  });
}, hide(e) {
  var _a3;
  if (!((_a3 = e == null ? void 0 : e._ripple) == null ? void 0 : _a3.enabled)) return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0) return;
  const n = Array.from(t).findLast((i) => !i.dataset.isHiding);
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
function Pg(e) {
  return typeof e > "u" || !!e;
}
function Bi(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Os])) {
    if (e[Os] = true, Ns(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Ig(e), n._ripple.class && (t.class = n._ripple.class), Ns(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        zo.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, yx);
    } else zo.show(e, n, t);
  }
}
function jo(e) {
  e[Os] = true;
}
function nn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        nn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), zo.hide(t);
  }
}
function Tg(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Fi = false;
function Sx(e, t) {
  !Fi && t.includes(e.key) && (Fi = true, Bi(e));
}
function Ag(e) {
  Fi = false, nn(e);
}
function Dg(e) {
  Fi && (Fi = false, nn(e));
}
function Eg(e, t, n) {
  const { value: a, modifiers: l } = t, i = Pg(a);
  i || zo.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const o = Qa(a) ? a : {};
  o.class && (e._ripple.class = o.class);
  const r = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => Sx(s, r), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", jo, { passive: true }), e.addEventListener("mousedown", jo);
      return;
    }
    e.addEventListener("touchstart", Bi, { passive: true }), e.addEventListener("touchend", nn, { passive: true }), e.addEventListener("touchmove", Tg, { passive: true }), e.addEventListener("touchcancel", nn), e.addEventListener("mousedown", Bi), e.addEventListener("mouseup", nn), e.addEventListener("mouseleave", nn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Ag), e.addEventListener("blur", Dg), e.addEventListener("dragstart", nn, { passive: true });
  } else !i && n && Mg(e);
}
function Mg(e) {
  var _a3;
  e.removeEventListener("touchstart", jo), e.removeEventListener("mousedown", jo), e.removeEventListener("touchstart", Bi), e.removeEventListener("touchend", nn), e.removeEventListener("touchmove", Tg), e.removeEventListener("touchcancel", nn), e.removeEventListener("mousedown", Bi), e.removeEventListener("mouseup", nn), e.removeEventListener("mouseleave", nn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Ag), e.removeEventListener("blur", Dg), e.removeEventListener("dragstart", nn);
}
function kx(e, t) {
  Eg(e, t, false);
}
function wx(e) {
  Mg(e), delete e._ripple;
}
function px(e, t) {
  if (t.value === t.oldValue) return;
  const n = Pg(t.oldValue);
  Eg(e, t, n);
}
const Et = { mounted: kx, unmounted: wx, updated: px }, yr = R({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: lc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...$t(), ...Se(), ...ut(), ...ht(), ...bt(), ...vl(), ...hr(), ...jn(), ...Kl(), ...Qe(), ...no(), ...Yn(), ...Ae({ tag: "button" }), ...Ne(), ...vn({ variant: "elevated" }) }, "VBtn"), $e = Z()({ name: "VBtn", props: yr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = We(e), { borderClasses: i } = Gt(e), { densityClasses: o } = Mt(e), { dimensionStyles: r } = yt(e), { elevationClasses: s } = xt(e), { loaderClasses: u } = Qi(e), { locationStyles: c } = Ma(e), { positionClasses: d } = Gl(e), { roundedClasses: f } = it(e), { sizeClasses: v, sizeStyles: y } = Ul(e), m = Va(e, e.symbol, false), b = to(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : b.isRouterLink.value ? (_a3 = b.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), x = M(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!b.isLink.value || ((_a3 = b.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = b.isActive) == null ? void 0 : _b2.value) ? x.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: k, variantClasses: g } = da(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), w = M(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || b.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (b.isRouterLink.value ? (_b2 = (_a3 = b.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return hx(b, m == null ? void 0 : m.select), te(() => {
    const E = b.isLink.value ? "a" : e.tag, B = !!(e.prependIcon || a.prepend), D = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== true);
    return Xe(S(E, U(b.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, i.value, V.value, o.value, s.value, u.value, d.value, f.value, v.value, g.value, e.class], style: [k.value, r.value, c.value, y.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: T.value }), { default: () => {
      var _a3;
      return [ca(true, "v-btn"), !e.icon && B && p("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? S(De, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : S(He, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && A ? S(He, { key: "content-icon", icon: e.icon }, null) : S(De, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ut(e.text)];
      } })]), !e.icon && D && p("span", { key: "append", class: "v-btn__append" }, [a.append ? S(De, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : S(He, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? S(Ia, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Et, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), xx = R({ ...Be(yr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), Cx = Z()({ name: "VAppBarNavIcon", props: xx(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S($e, U(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), _x = Z()({ name: "VAppBarTitle", props: Sg(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(Zu, U(e, { class: "v-app-bar-title" }), n)), {};
} }), Bg = sa("v-alert-title"), Fg = R({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Lg(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const Vx = ["success", "info", "warning", "error"], Ix = R({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => Vx.includes(e) }, ...Se(), ...ut(), ...ht(), ...bt(), ...Fg(), ...jn(), ...Kl(), ...Qe(), ...Ae(), ...Ne(), ...vn({ variant: "flat" }) }, "VAlert"), Px = Z()({ name: "VAlert", props: Ix(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pe(e, "modelValue"), i = M(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: o } = Lg(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = We(e), { colorClasses: s, colorStyles: u, variantClasses: c } = da(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Mt(e), { dimensionStyles: f } = yt(e), { elevationClasses: v } = xt(e), { locationStyles: y } = Ma(e), { positionClasses: m } = Gl(e), { roundedClasses: b } = it(e), { textColorClasses: h, textColorStyles: x } = Pt(() => e.borderColor), { t: I } = Ue(), V = M(() => ({ "aria-label": I(e.closeLabel), onClick(k) {
    l.value = false, n("click:close", k);
  } }));
  return () => {
    const k = !!(a.prepend || i.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), w = { density: e.density, icon: i.value, size: e.iconSize || e.prominent ? o.value : void 0 };
    return l.value && S(e.tag, { class: ee(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, b.value, c.value, e.class]), style: me([u.value, f.value, y.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ca(false, "v-alert"), e.border && p("div", { key: "border", class: ee(["v-alert__border", h.value]), style: me(x.value) }, null), k && p("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? S(De, { key: "prepend-defaults", disabled: !i.value, defaults: { VIcon: { ...w } } }, a.prepend) : S(He, U({ key: "prepend-icon" }, w), null)]), p("div", { class: "v-alert__content" }, [g && S(Bg, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && p("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && p("div", { key: "close", class: "v-alert__close" }, [a.close ? S(De, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : S($e, U({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), Tx = R({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...$t(), ...Se(), ...ut(), ...Qe(), ...Yn(), ...Ae(), ...Ne(), ...vn({ variant: "flat" }) }, "VAvatar"), cn = Z()({ name: "VAvatar", props: Tx(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { borderClasses: l } = Gt(e), { colorClasses: i, colorStyles: o, variantClasses: r } = da(e), { densityClasses: s } = Mt(e), { roundedClasses: u } = it(e), { sizeClasses: c, sizeStyles: d } = Ul(e);
  return te(() => S(e.tag, { class: ee(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, i.value, s.value, u.value, c.value, r.value, e.class]), style: me([o.value, d.value, e.style]) }, { default: () => [n.default ? S(De, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? S(la, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? S(He, { key: "icon", icon: e.icon }, null) : e.text, ca(false, "v-avatar")] })), {};
} }), Ax = R({ text: String, onClick: At(), ...Se(), ...Ne() }, "VLabel"), ql = Z()({ name: "VLabel", props: Ax(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return p("label", { class: ee(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: me(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), $g = Symbol.for("vuetify:selection-control-group"), ic = R({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: It }, ...Se(), ...ut(), ...Ne() }, "SelectionControlGroup"), Dx = R({ ...ic({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), Og = Z()({ name: "VSelectionControlGroup", props: Dx(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), l = Tt(), i = M(() => e.id || `v-selection-control-group-${l}`), o = M(() => e.name || i.value), r = /* @__PURE__ */ new Set();
  return et($g, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), ft(() => {
      r.delete(s);
    });
  } }), st({ [e.defaultsTarget]: { color: M(() => e.color), disabled: M(() => e.disabled), density: M(() => e.density), error: M(() => e.error), inline: M(() => e.inline), modelValue: a, multiple: M(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: o, falseIcon: M(() => e.falseIcon), trueIcon: M(() => e.trueIcon), readonly: M(() => e.readonly), ripple: M(() => e.ripple), type: M(() => e.type), valueComparator: M(() => e.valueComparator) } }), te(() => {
    var _a3;
    return p("div", { class: ee(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: me(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), br = R({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...Se(), ...ic() }, "VSelectionControl");
function Ex(e) {
  const t = Oe($g, void 0), { densityClasses: n } = Mt(e), a = pe(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), i = _(() => e.falseValue !== void 0 ? e.falseValue : false), o = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const v = t ? t.modelValue.value : a.value;
    return o.value ? Je(v).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const y = v ? l.value : i.value;
    let m = y;
    o.value && (m = v ? [...Je(a.value), y] : Je(a.value).filter((b) => !e.valueComparator(b, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Pt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = ze(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Pa = Z()({ name: "VSelectionControl", directives: { vRipple: Et }, inheritAttrs: false, props: br(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: i, icon: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = Ex(e), v = Tt(), y = ie(false), m = ie(false), b = Q(), h = M(() => e.id || `input-${v}`), x = M(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    b.value && (b.value.checked = r.value);
  });
  function I(C) {
    x.value && (y.value = true, Ll(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function V() {
    y.value = false, m.value = false;
  }
  function k(C) {
    C.stopPropagation();
  }
  function g(C) {
    if (!x.value) {
      b.value && (b.value.checked = r.value);
      return;
    }
    e.readonly && l && Te(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return te(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [w, T] = Wn(n), P = p("input", U({ ref: b, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return p("div", U({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": y.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, w, { style: e.style }), [p("div", { class: ee(["v-selection-control__wrapper", s.value]), style: me(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), Xe(p("div", { class: ee(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: o.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? p(he, null, [o.value && S(He, { key: "icon", icon: o.value }, null), P])]), [[Et, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && S(ql, { for: h.value, onClick: k }, { default: () => [C] })]);
  }), { isFocused: y, input: b };
} }), Ng = R({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ...br({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Vn = Z()({ name: "VCheckboxBtn", props: Ng(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "indeterminate"), l = pe(e, "modelValue");
  function i(s) {
    a.value && (a.value = false);
  }
  const o = M(() => a.value ? e.indeterminateIcon : e.falseIcon), r = M(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => {
    const s = Be(Pa.filterProps(e), ["modelValue"]);
    return S(Pa, U(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: o.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function ao(e) {
  const { t } = Ue();
  function n(a) {
    let { name: l, color: i, ...o } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), qi(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return S(He, U({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: i }, o), null);
  }
  return { InputIcon: n };
}
const Mx = R({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...Se(), ...ua({ transition: { component: tc, leaveAbsolute: true, group: true } }) }, "VMessages"), Rg = Z()({ name: "VMessages", props: Mx(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => Je(e.messages)), { textColorClasses: l, textColorStyles: i } = Pt(() => e.color);
  return te(() => S(Yt, { transition: e.transition, tag: "div", class: ee(["v-messages", l.value, e.class]), style: me([i.value, e.style]) }, { default: () => [e.active && a.value.map((o, r) => p("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: o }) : o]))] })), {};
} }), lo = R({ focused: Boolean, "onUpdate:focused": At() }, "focus");
function fa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn();
  const n = pe(e, "focused"), a = M(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function i() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: i };
}
const Hg = Symbol.for("vuetify:form"), Bx = R({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function Fx(e) {
  const t = pe(e, "modelValue"), n = M(() => e.disabled), a = M(() => e.readonly), l = ie(false), i = Q([]), o = Q([]);
  async function r() {
    const c = [];
    let d = true;
    o.value = [], l.value = true;
    for (const f of i.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = false, c.push({ id: f.id, errorMessages: v })), !d && e.fastFail) break;
    }
    return o.value = c, l.value = false, { valid: d, errors: o.value };
  }
  function s() {
    i.value.forEach((c) => c.reset());
  }
  function u() {
    i.value.forEach((c) => c.resetValidation());
  }
  return ue(i, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of i.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && c++;
    o.value = f, t.value = d > 0 ? false : c === i.value.length ? true : null;
  }, { deep: true, flush: "post" }), et(Hg, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: y, resetValidation: m } = c;
    i.value.some((b) => b.id === d), i.value.push({ id: d, validate: v, reset: y, resetValidation: m, vm: Tv(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    i.value = i.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = i.value.find((y) => y.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: i, validateOn: M(() => e.validateOn) }), { errors: o, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: i, validate: r, reset: s, resetValidation: u };
}
function Xl(e) {
  const t = Oe(Hg, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const Lx = Symbol.for("vuetify:rules");
function $x(e) {
  const t = Oe(Lx, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? M(e);
}
const Wg = R({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...lo() }, "validation");
function zg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tt();
  const a = pe(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Xl(e), o = $x(() => e.rules), r = Q([]), s = ie(true), u = _(() => !!(Je(a.value === "" ? null : a.value).length || Je(l.value === "" ? null : l.value).length)), c = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? Je(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a3;
    let V = (e.validateOn ?? ((_a3 = i.validateOn) == null ? void 0 : _a3.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const k = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return { input: k.has("input"), blur: k.has("blur") || k.has("input") || k.has("invalid-input"), invalidInput: k.has("invalid-input"), lazy: k.has("lazy"), eager: k.has("eager") };
  }), f = _(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = ie(false), y = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: i.isDisabled.value, [`${t}--readonly`]: i.isReadonly.value })), m = gt("validation"), b = _(() => e.name ?? Ht(n));
  Yl(() => {
    var _a3;
    (_a3 = i.register) == null ? void 0 : _a3.call(i, { id: b.value, vm: m, validate: I, reset: h, resetValidation: x });
  }), Lt(() => {
    var _a3;
    (_a3 = i.unregister) == null ? void 0 : _a3.call(i, b.value);
  }), kt(async () => {
    var _a3;
    d.value.lazy || await I(!d.value.eager), (_a3 = i.update) == null ? void 0 : _a3.call(i, b.value, f.value, c.value);
  }), Dt(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    ue(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = ue(() => e.focused, (k) => {
          k || I(), V();
        });
      }
    });
  }), Dt(() => d.value.blur, () => {
    ue(() => e.focused, (V) => {
      V || I();
    });
  }), ue([f, c], () => {
    var _a3;
    (_a3 = i.update) == null ? void 0 : _a3.call(i, b.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Te(), await x();
  }
  async function x() {
    s.value = true, d.value.lazy ? r.value = [] : await I(!d.value.eager);
  }
  async function I() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const k = [];
    v.value = true;
    for (const g of o.value) {
      if (k.length >= Number(e.maxErrors ?? 1)) break;
      const w = await (typeof g == "function" ? g : () => g)(l.value);
      if (w !== true) {
        if (w !== false && typeof w != "string") {
          console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        k.push(w || "");
      }
    }
    return r.value = k, v.value = false, s.value = V, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: i.isDisabled, isReadonly: i.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: x, validate: I, validationClasses: y };
}
const va = R({ id: String, appendIcon: Ce, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": At(), "onClick:append": At(), ...Se(), ...ut(), ...Zt(ht(), ["maxWidth", "minWidth", "width"]), ...Ne(), ...Wg() }, "VInput"), Ft = Z()({ name: "VInput", props: { ...va() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: i } = Mt(e), { dimensionStyles: o } = yt(e), { themeClasses: r } = We(e), { rtlClasses: s } = wt(), { InputIcon: u } = ao(e), c = Tt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: y, isReadonly: m, isPristine: b, isValid: h, isValidating: x, reset: I, resetValidation: V, validate: k, validationClasses: g } = zg(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !b.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), w = M(() => C.value.length > 0), T = M(() => !e.hideDetails || e.hideDetails === "auto" && (w.value || !!a.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: y, isReadonly: m, isPristine: b, isValid: h, isValidating: x, hasDetails: T, reset: I, resetValidation: V, validate: k })), B = M(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), D = M(() => {
    if (e.iconColor) return e.iconColor === true ? B.value : e.iconColor;
  });
  return te(() => {
    var _a3, _b2;
    const A = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return p("div", { class: ee(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, r.value, s.value, g.value, e.class]), style: me([o.value, e.style]) }, [A && p("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && S(u, { key: "prepend-icon", name: "prepend", color: D.value }, null)]), a.default && p("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && p("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && S(u, { key: "append-icon", name: "append", color: D.value }, null)]), T.value && p("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [S(Rg, { active: w.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: I, resetValidation: V, validate: k, isValid: h, errorMessages: f };
} }), ns = Symbol("Forwarded refs");
function as(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Ct(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[ns] = n, new Proxy(e, { get(l, i) {
    if (Reflect.has(l, i)) return Reflect.get(l, i);
    if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
      for (const o of n) if (o.value && Reflect.has(o.value, i)) {
        const r = Reflect.get(o.value, i);
        return typeof r == "function" ? r.bind(o.value) : r;
      }
    }
  }, has(l, i) {
    if (Reflect.has(l, i)) return true;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return false;
    for (const o of n) if (o.value && Reflect.has(o.value, i)) return true;
    return false;
  }, set(l, i, o) {
    if (Reflect.has(l, i)) return Reflect.set(l, i, o);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return false;
    for (const r of n) if (r.value && Reflect.has(r.value, i)) return Reflect.set(r.value, i, o);
    return false;
  }, getOwnPropertyDescriptor(l, i) {
    var _a3;
    const o = Reflect.getOwnPropertyDescriptor(l, i);
    if (o) return o;
    if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
      for (const r of n) {
        if (!r.value) continue;
        const s = as(r.value, i) ?? ("_" in r.value ? as((_a3 = r.value._) == null ? void 0 : _a3.setupState, i) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[ns];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = as(c.value, i);
          if (d) return d;
          const f = c.value && c.value[ns];
          f && u.push(...f);
        }
      }
    }
  } });
}
const Ox = R({ ...Be(va(), ["direction"]), ...Be(Ng(), ["inline"]) }, "VCheckbox"), Nx = Z()({ name: "VCheckbox", inheritAttrs: false, props: Ox(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = pe(e, "modelValue"), { isFocused: i, focus: o, blur: r } = fa(e), s = Q(), u = Tt();
  return te(() => {
    const [c, d] = Wn(n), f = Ft.filterProps(e), v = Vn.filterProps(e);
    return S(Ft, U({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (y) => l.value = y, id: e.id || `checkbox-${u}`, focused: i.value, style: e.style }), { ...a, default: (y) => {
      let { id: m, messagesId: b, isDisabled: h, isReadonly: x, isValid: I } = y;
      return S(Vn, U(v, { id: m.value, "aria-describedby": b.value, disabled: h.value, readonly: x.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: o, onBlur: r }), a);
    } });
  }), Ct({}, s);
} });
function Rx(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const i = Li(l, n), o = jg(l, a, n), r = Li(l, t), s = Yg(l, t), u = r * 0.4;
  return o > s ? s - u : o + i < s + r ? s - i + r + u : o;
}
function Hx(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = Li(a, n), i = Yg(a, t), o = Li(a, t);
  return i - l / 2 + o / 2;
}
function Pf(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function Wx(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function jg(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: i } = n;
  return e ? t ? i - l + a : a : n.scrollTop;
}
function Li(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Yg(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const oc = Symbol.for("vuetify:v-slide-group"), rc = R({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: oc }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...Se(), ...sl({ mobile: null }), ...Ae(), ...fl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), $i = Z()({ name: "VSlideGroup", props: rc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = wt(), { displayClasses: l, mobile: i } = dn(e), o = Ba(e, e.symbol), r = ie(false), s = ie(0), u = ie(0), c = ie(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = yn(), { resizeRef: y, contentRect: m } = yn(), b = hp(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), x = _(() => o.selected.value.length ? o.items.value.findIndex((z) => z.id === o.selected.value[0]) : -1), I = _(() => o.selected.value.length ? o.items.value.findIndex((z) => z.id === o.selected.value[o.selected.value.length - 1]) : -1);
  if (Ye) {
    let z = -1;
    ue(() => [o.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(z), z = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const $ = d.value ? "width" : "height";
          u.value = v.value[$], c.value = m.value[$], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && x.value >= 0 && y.el) {
          const $ = y.el.children[I.value];
          k($, e.centerActive);
        }
      });
    });
  }
  const V = ie(false);
  function k(z, $) {
    let j = 0;
    $ ? j = Hx({ containerElement: f.el, isHorizontal: d.value, selectedElement: z }) : j = Rx({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: z }), g(j);
  }
  function g(z) {
    if (!Ye || !f.el) return;
    const $ = Li(d.value, f.el), j = jg(d.value, a.value, f.el);
    if (!(Pf(d.value, f.el) <= $ || Math.abs(z - j) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: be, offsetWidth: ne } = f.el;
        z = be - ne - z;
      }
      d.value ? b.horizontal(z, h.value) : b(z, h.value);
    }
  }
  function C(z) {
    const { scrollTop: $, scrollLeft: j } = z.target;
    s.value = d.value ? j : $;
  }
  function w(z) {
    if (V.value = true, !(!r.value || !y.el)) {
      for (const $ of z.composedPath()) for (const j of y.el.children) if (j === $) {
        k(j);
        return;
      }
    }
  }
  function T(z) {
    V.value = false;
  }
  let P = false;
  function E(z) {
    var _a3;
    !P && !V.value && !(z.relatedTarget && ((_a3 = y.el) == null ? void 0 : _a3.contains(z.relatedTarget))) && L(), P = false;
  }
  function B() {
    P = true;
  }
  function D(z) {
    if (!y.el) return;
    function $(j) {
      z.preventDefault(), L(j);
    }
    d.value ? z.key === "ArrowRight" ? $(a.value ? "prev" : "next") : z.key === "ArrowLeft" && $(a.value ? "next" : "prev") : z.key === "ArrowDown" ? $("next") : z.key === "ArrowUp" && $("prev"), z.key === "Home" ? $("first") : z.key === "End" && $("last");
  }
  function A(z, $) {
    if (!z) return;
    let j = z;
    do
      j = j == null ? void 0 : j[$ === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (j == null ? void 0 : j.hasAttribute("disabled"));
    return j;
  }
  function L(z) {
    if (!y.el) return;
    let $;
    if (!z) $ = wa(y.el)[0];
    else if (z === "next") {
      if ($ = A(y.el.querySelector(":focus"), z), !$) return L("first");
    } else if (z === "prev") {
      if ($ = A(y.el.querySelector(":focus"), z), !$) return L("last");
    } else z === "first" ? ($ = y.el.firstElementChild, ($ == null ? void 0 : $.hasAttribute("disabled")) && ($ = A($, "next"))) : z === "last" && ($ = y.el.lastElementChild, ($ == null ? void 0 : $.hasAttribute("disabled")) && ($ = A($, "prev")));
    $ && $.focus({ preventScroll: true });
  }
  function W(z) {
    const $ = d.value && a.value ? -1 : 1, j = (z === "prev" ? -$ : $) * u.value;
    let oe = s.value + j;
    if (d.value && a.value && f.el) {
      const { scrollWidth: be, offsetWidth: ne } = f.el;
      oe += be - ne;
    }
    g(oe);
  }
  const H = _(() => ({ next: o.next, prev: o.prev, select: o.select, isSelected: o.isSelected })), X = _(() => r.value || Math.abs(s.value) > 0), q = _(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !i.value;
      case true:
        return X.value;
      case "mobile":
        return i.value || X.value;
      default:
        return !i.value && X.value;
    }
  }), N = _(() => Math.abs(s.value) > 1), K = _(() => {
    if (!f.value || !X.value) return false;
    const z = Pf(d.value, f.el), $ = Wx(d.value, f.el);
    return z - $ - Math.abs(s.value) > 1;
  });
  return te(() => S(e.tag, { class: ee(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": q.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: me(e.style), tabindex: V.value || o.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [q.value && p("div", { key: "prev", class: ee(["v-slide-group__prev", { "v-slide-group__prev--disabled": !N.value }]), onMousedown: B, onClick: () => N.value && W("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, H.value)) ?? S(Mi, null, { default: () => [S(He, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), p("div", { key: "container", ref: f, class: ee(["v-slide-group__container", e.contentClass]), onScroll: C }, [p("div", { ref: y, class: "v-slide-group__content", onFocusin: w, onFocusout: T, onKeydown: D }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, H.value)])]), q.value && p("div", { key: "next", class: ee(["v-slide-group__next", { "v-slide-group__next--disabled": !K.value }]), onMousedown: B, onClick: () => K.value && W("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, H.value)) ?? S(Mi, null, { default: () => [S(He, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: o.selected, scrollTo: W, scrollOffset: s, focus: L, hasPrev: N, hasNext: K };
} }), Ug = Symbol.for("vuetify:v-chip-group"), zx = R({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: It }, ...rc({ scrollToActive: false }), ...Se(), ...fl({ selectedClass: "v-chip--selected" }), ...Ae(), ...Ne(), ...vn({ variant: "tonal" }) }, "VChipGroup"), jx = Z()({ name: "VChipGroup", props: zx(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { isSelected: l, select: i, next: o, prev: r, selected: s } = Ba(e, Ug);
  return st({ VChip: { baseColor: M(() => e.baseColor), color: M(() => e.color), disabled: M(() => e.disabled), filter: M(() => e.filter), variant: M(() => e.variant) } }), te(() => {
    const u = $i.filterProps(e);
    return S($i, U(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: i, next: o, prev: r, selected: s.value })];
    } });
  }), {};
} }), Yx = R({ activeClass: String, appendAvatar: String, appendIcon: Ce, baseColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ce, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: At(), onClickOnce: At(), ...$t(), ...Se(), ...ut(), ...bt(), ...vl(), ...Qe(), ...no(), ...Yn(), ...Ae({ tag: "span" }), ...Ne(), ...vn({ variant: "tonal" }) }, "VChip"), ia = Z()({ name: "VChip", directives: { vRipple: Et }, props: Yx(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: i } = Ue(), { borderClasses: o } = Gt(e), { densityClasses: r } = Mt(e), { elevationClasses: s } = xt(e), { roundedClasses: u } = it(e), { sizeClasses: c } = Ul(e), { themeClasses: d } = We(e), f = pe(e, "modelValue"), v = Va(e, Ug, false), y = Va(e, oc, false), m = to(e, n), b = M(() => e.link !== false && m.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), x = M(() => ({ "aria-label": i(e.closeLabel), disabled: e.disabled, onClick(w) {
    w.preventDefault(), w.stopPropagation(), f.value = false, a("click:close", w);
  } }));
  ue(f, (w) => {
    w ? (v == null ? void 0 : v.register(), y == null ? void 0 : y.register()) : (v == null ? void 0 : v.unregister(), y == null ? void 0 : y.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: k } = da(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function g(w) {
    var _a3, _b2;
    a("click", w), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, w), v == null ? void 0 : v.toggle());
  }
  function C(w) {
    (w.key === "Enter" || w.key === " ") && (w.preventDefault(), g(w));
  }
  return () => {
    var _a3;
    const w = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || l.append), E = !!(l.close || e.closable), B = !!(l.filter || e.filter) && v, D = !!(e.prependIcon || e.prependAvatar), A = !!(D || l.prepend);
    return f.value && Xe(S(w, U(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": B, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, o.value, I.value, r.value, s.value, u.value, c.value, k.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !b.value && C }), { default: () => {
      var _a4;
      return [ca(h.value, "v-chip"), B && S(nc, { key: "filter" }, { default: () => [Xe(p("div", { class: "v-chip__filter" }, [l.filter ? S(De, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : S(He, { key: "filter-icon", icon: e.filterIcon }, null)]), [[In, v.isSelected.value]])] }), A && p("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? S(De, { key: "prepend-defaults", disabled: !D, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : p(he, null, [e.prependIcon && S(He, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && S(cn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), p("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Ut(e.text)]), P && p("div", { key: "append", class: "v-chip__append" }, [l.append ? S(De, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : p(he, null, [e.appendIcon && S(He, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && S(cn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && p("button", U({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, x.value), [l.close ? S(De, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : S(He, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Et, h.value && e.ripple, null]]);
  };
} }), Ux = ["dotted", "dashed", "solid", "double"], Kx = R({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Ux.includes(e) }, ...Se(), ...Ne() }, "VDivider"), sn = Z()({ name: "VDivider", props: Kx(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = We(e), { textColorClasses: i, textColorStyles: o } = Pt(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = de(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = de(e.thickness)), u;
  }), s = M(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? de(u) : void 0, marginInline: !e.vertical && u ? de(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${de(c)})` : void 0 };
  });
  return te(() => {
    const u = p("hr", { class: ee([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, i.value, e.class]), style: me([r.value, o.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? p("div", { class: ee(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, p("div", { class: "v-divider__content", style: me(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), Rs = Symbol.for("vuetify:list");
function Kg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Oe(Rs, { filterable: false, hasPrepend: ie(false), updateHasPrepend: () => null, trackingIndex: ie(-1), navigationStrategy: ie("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: i = t.uid || Tt() } = e, o = { filterable: t.filterable || n, hasPrepend: ie(false), updateHasPrepend: (r) => {
    r && (o.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: i };
  return et(Rs, o), t;
}
function Gg() {
  return Oe(Rs, null);
}
const sc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: i } = n;
    return a = Pe(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
  }, in: (n, a, l) => {
    let i = /* @__PURE__ */ new Set();
    if (n != null) for (const o of Je(n)) i = t.activate({ id: o, value: true, activated: new Set(i), children: a, parents: l });
    return i;
  }, out: (n) => Array.from(n) };
  return t;
}, qg = (e) => {
  const t = sc(e);
  return { activate: (a) => {
    let { activated: l, id: i, ...o } = a;
    i = Pe(i);
    const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
    return t.activate({ ...o, id: i, activated: r });
  }, in: (a, l, i) => {
    let o = /* @__PURE__ */ new Set();
    if (a != null) {
      const r = Je(a);
      r.length && (o = t.in(r.slice(0, 1), l, i));
    }
    return o;
  }, out: (a, l, i) => t.out(a, l, i) };
}, Gx = (e) => {
  const t = sc(e);
  return { activate: (a) => {
    let { id: l, activated: i, children: o, ...r } = a;
    return l = Pe(l), o.has(l) ? i : t.activate({ id: l, activated: i, children: o, ...r });
  }, in: t.in, out: t.out };
}, qx = (e) => {
  const t = qg(e);
  return { activate: (a) => {
    let { id: l, activated: i, children: o, ...r } = a;
    return l = Pe(l), o.has(l) ? i : t.activate({ id: l, activated: i, children: o, ...r });
  }, in: t.in, out: t.out };
}, Xx = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(t);
    let o = l.get(t);
    for (; o != null; ) i.add(o), o = l.get(o);
    return i;
  } else return a.delete(t), a;
}, select: () => null }, Xg = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let i = l.get(t);
    for (a.add(t); i != null && i !== t; ) a.add(i), i = l.get(i);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, Zx = { open: Xg.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const i = [];
  let o = l.get(t);
  for (; o != null; ) i.push(o), o = l.get(o);
  return new Set(i);
} }, uc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: i } = n;
    if (a = Pe(a), e && !l) {
      const o = Array.from(i.entries()).reduce((r, s) => {
        let [u, c] = s;
        return c === "on" && r.push(u), r;
      }, []);
      if (o.length === 1 && o[0] === a) return i;
    }
    return i.set(a, l ? "on" : "off"), i;
  }, in: (n, a, l, i) => {
    const o = /* @__PURE__ */ new Map();
    for (const r of n || []) t.select({ id: r, value: true, selected: o, children: a, parents: l, disabled: i });
    return o;
  }, out: (n) => {
    const a = [];
    for (const [l, i] of n.entries()) i === "on" && a.push(l);
    return a;
  } };
  return t;
}, Zg = (e) => {
  const t = uc(e);
  return { select: (a) => {
    let { selected: l, id: i, ...o } = a;
    i = Pe(i);
    const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...o, id: i, selected: r });
  }, in: (a, l, i, o) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, i, o) : /* @__PURE__ */ new Map(), out: (a, l, i) => t.out(a, l, i) };
}, Jx = (e) => {
  const t = uc(e);
  return { select: (a) => {
    let { id: l, selected: i, children: o, ...r } = a;
    return l = Pe(l), o.has(l) ? i : t.select({ id: l, selected: i, children: o, ...r });
  }, in: t.in, out: t.out };
}, Qx = (e) => {
  const t = Zg(e);
  return { select: (a) => {
    let { id: l, selected: i, children: o, ...r } = a;
    return l = Pe(l), o.has(l) ? i : t.select({ id: l, selected: i, children: o, ...r });
  }, in: t.in, out: t.out };
}, cc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: i, children: o, parents: r, disabled: s } = n;
    a = Pe(a);
    const u = new Map(i), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || i.set(Pe(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
    }
    let d = Pe(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const y of o.get(d)) {
        const m = Pe(y);
        if (!s.has(m) && (i.get(m) !== "on" && (f = false), i.has(m) && i.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      i.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Pe(r.get(d));
    }
    return e && !l && Array.from(i.entries()).reduce((v, y) => {
      let [m, b] = y;
      return b === "on" && v.push(m), v;
    }, []).length === 0 ? u : i;
  }, in: (n, a, l) => {
    let i = /* @__PURE__ */ new Map();
    for (const o of n || []) i = t.select({ id: o, value: true, selected: i, children: a, parents: l, disabled: /* @__PURE__ */ new Set() });
    return i;
  }, out: (n, a) => {
    const l = [];
    for (const [i, o] of n.entries()) o === "on" && !a.has(i) && l.push(i);
    return l;
  } };
  return t;
}, eC = (e) => {
  const t = cc(e);
  return { select: t.select, in: t.in, out: (a, l, i) => {
    const o = [];
    for (const [r, s] of a.entries()) if (s === "on") {
      if (i.has(r)) {
        const u = i.get(r);
        if (a.get(u) === "on") continue;
      }
      o.push(r);
    }
    return o;
  } };
}, tC = (e) => {
  const n = { select: cc(e).select, in: (a, l, i, o) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: i, disabled: o }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [i, o] of a.entries()) (o === "on" || o === "indeterminate") && l.push(i);
    return l;
  } };
  return n;
}, Rl = Symbol.for("vuetify:nested"), Jg = { id: ie(), root: { itemsRegistration: Q("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: Q(/* @__PURE__ */ new Map()), parents: Q(/* @__PURE__ */ new Map()), disabled: Q(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: Q(false), scrollToActive: Q(false), selectable: Q(false), opened: Q(/* @__PURE__ */ new Set()), activated: Q(/* @__PURE__ */ new Set()), selected: Q(/* @__PURE__ */ new Map()), selectedValues: Q([]), getPath: () => [] } }, nC = R({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), aC = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, i = false;
  const o = ie(/* @__PURE__ */ new Map()), r = ie(/* @__PURE__ */ new Map()), s = ie(/* @__PURE__ */ new Set()), u = pe(e, "opened", e.opened, (k) => new Set(Array.isArray(k) ? k.map((g) => Pe(g)) : k), (k) => [...k.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Gx(e.mandatory);
      case "single-leaf":
        return qx(e.mandatory);
      case "independent":
        return sc(e.mandatory);
      case "single-independent":
      default:
        return qg(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Qx(e.mandatory);
      case "leaf":
        return Jx(e.mandatory);
      case "independent":
        return uc(e.mandatory);
      case "single-independent":
        return Zg(e.mandatory);
      case "trunk":
        return eC(e.mandatory);
      case "branch":
        return tC(e.mandatory);
      case "classic":
      default:
        return cc(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Zx;
      case "single":
        return Xx;
      case "multiple":
      default:
        return Xg;
    }
  }), v = pe(e, "activated", e.activated, (k) => c.value.in(k, o.value, r.value), (k) => c.value.out(k, o.value, r.value)), y = pe(e, "selected", e.selected, (k) => d.value.in(k, o.value, r.value, s.value), (k) => d.value.out(k, o.value, r.value));
  Lt(() => {
    i = true;
  });
  function m(k) {
    const g = [];
    let C = Pe(k);
    for (; C !== void 0; ) g.unshift(C), C = r.value.get(C);
    return g;
  }
  const b = gt("nested"), h = /* @__PURE__ */ new Set(), x = mw(() => {
    Te(() => {
      o.value = new Map(o.value), r.value = new Map(r.value);
    });
  }, 100);
  ue(() => [n.value, qe(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const k = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), w = qe(a) ? (E) => Pe(E.raw) : (E) => E.value, T = [...n.value];
    let P = 0;
    for (; P < T.length; ) {
      const E = T[P++], B = w(E);
      if (E.children) {
        const D = [];
        for (const A of E.children) {
          const L = w(A);
          k.set(L, B), D.push(L), T.push(A);
        }
        g.set(B, D);
      }
      E.props.disabled && C.add(B);
    }
    o.value = g, r.value = k, s.value = C;
  }
  const V = { id: ie(), root: { opened: u, activatable: M(() => e.activatable), scrollToActive: M(() => qe(l)), selectable: M(() => e.selectable), activated: v, selected: y, selectedValues: _(() => {
    const k = [];
    for (const [g, C] of y.value.entries()) C === "on" && k.push(g);
    return k;
  }), itemsRegistration: M(() => e.itemsRegistration), register: (k, g, C, w) => {
    if (h.has(k)) {
      m(k).map(String).join(" -> "), m(g).concat(k).map(String).join(" -> ");
      return;
    } else h.add(k);
    g && k !== g && r.value.set(k, g), C && s.value.add(k), w && o.value.set(k, []), g != null && o.value.set(g, [...o.value.get(g) || [], k]), x();
  }, unregister: (k) => {
    if (i) return;
    h.delete(k), o.value.delete(k), s.value.delete(k);
    const g = r.value.get(k);
    if (g) {
      const C = o.value.get(g) ?? [];
      o.value.set(g, C.filter((w) => w !== k));
    }
    r.value.delete(k), x();
  }, updateDisabled: (k, g) => {
    g ? s.value.add(k) : s.value.delete(k);
  }, open: (k, g, C) => {
    b.emit("click:open", { id: k, value: g, path: m(k), event: C });
    const w = f.value.open({ id: k, value: g, opened: new Set(u.value), children: o.value, parents: r.value, event: C });
    w && (u.value = w);
  }, openOnSelect: (k, g, C) => {
    const w = f.value.select({ id: k, value: g, selected: new Map(y.value), opened: new Set(u.value), children: o.value, parents: r.value, event: C });
    w && (u.value = w);
  }, select: (k, g, C) => {
    b.emit("click:select", { id: k, value: g, path: m(k), event: C });
    const w = d.value.select({ id: k, value: g, selected: new Map(y.value), children: o.value, parents: r.value, disabled: s.value, event: C });
    w && (y.value = w), V.root.openOnSelect(k, g, C);
  }, activate: (k, g, C) => {
    if (!e.activatable) return V.root.select(k, true, C);
    b.emit("click:activate", { id: k, value: g, path: m(k), event: C });
    const w = c.value.activate({ id: k, value: g, activated: new Set(v.value), children: o.value, parents: r.value, event: C });
    if (w.size !== v.value.size) v.value = w;
    else {
      for (const T of w) if (!v.value.has(T)) {
        v.value = w;
        return;
      }
      for (const T of v.value) if (!w.has(T)) {
        v.value = w;
        return;
      }
    }
  }, children: o, parents: r, disabled: s, getPath: m } };
  return et(Rl, V), V.root;
}, Qg = (e, t, n) => {
  const a = Oe(Rl, Jg), l = Symbol("nested item"), i = _(() => {
    const r = Pe(qe(e));
    return r !== void 0 ? r : l;
  }), o = { ...a, id: i, open: (r, s) => a.root.open(i.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(i.value, r, s), isOpen: _(() => a.root.opened.value.has(i.value)), parent: _(() => a.root.parents.value.get(i.value)), activate: (r, s) => a.root.activate(i.value, r, s), isActivated: _(() => a.root.activated.value.has(i.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(i.value, r, s), isSelected: _(() => a.root.selected.value.get(i.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(i.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(i.value)), isGroupActivator: a.isGroupActivator };
  return Yl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Te(() => {
      a.root.register(i.value, a.id.value, qe(t), n);
    });
  }), Lt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(i.value);
  }), ue(i, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Te(() => {
      a.root.register(r, a.id.value, qe(t), n);
    }));
  }), ue(() => qe(t), (r) => {
    a.root.updateDisabled(i.value, r);
  }), n && et(Rl, o), o;
}, lC = () => {
  const e = Oe(Rl, Jg);
  et(Rl, { ...e, isGroupActivator: true });
}, iC = Kt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return lC(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), eh = R({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ce, default: "$expand" }, rawId: [String, Number], prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...Se(), ...Ae() }, "VListGroup"), Oi = Z()({ name: "VListGroup", props: eh(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: i } = Qg(() => e.value, () => e.disabled, true), o = _(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), r = Gg(), { isBooted: s } = dl(), u = Oe(Rl), c = M(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: o.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), y = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return te(() => S(e.tag, { class: ee(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: me(e.style) }, { default: () => [n.activator && S(De, { defaults: y.value }, { default: () => [S(iC, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), S(Yt, { transition: { component: mr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? Xe(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[In, a.value]]) : a.value && p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), oC = R({ opacity: [Number, String], ...Se(), ...Ae() }, "VListItemSubtitle"), th = Z()({ name: "VListItemSubtitle", props: oC(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(e.tag, { class: ee(["v-list-item-subtitle", e.class]), style: me([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), nh = sa("v-list-item-title"), ah = R({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: At(), onClickOnce: At(), ...$t(), ...Se(), ...ut(), ...ht(), ...bt(), ...Qe(), ...no(), ...Ae(), ...Ne(), ...vn({ variant: "text" }) }, "VListItem"), bn = Z()({ name: "VListItem", directives: { vRipple: Et }, props: ah(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const i = to(e, n), o = Q(), r = _(() => e.value === void 0 ? i.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: y, root: m, parent: b, openOnSelect: h, scrollToActive: x, id: I } = Qg(r, () => e.disabled, false), V = Gg(), k = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = i.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), g = M(() => e.link !== false && i.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), w = _(() => !e.disabled && e.link !== false && (e.link || i.isClickable.value || C.value)), T = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : k.value;
  }), B = M(() => e.rounded || e.nav), D = M(() => e.color ?? e.activeColor), A = M(() => ({ color: k.value ? D.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ue(() => {
    var _a3;
    return (_a3 = i.isActive) == null ? void 0 : _a3.value;
  }, (xe) => {
    xe && L();
  }), ue(u, (xe) => {
    var _a3;
    !xe || !x || ((_a3 = o.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ue(T, (xe) => {
    var _a3;
    xe && ((_a3 = o.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Yl(() => {
    var _a3;
    ((_a3 = i.isActive) == null ? void 0 : _a3.value) && Te(() => L());
  });
  function L() {
    b.value != null && m.open(b.value, true), h(true);
  }
  const { themeClasses: W } = We(e), { borderClasses: H } = Gt(e), { colorClasses: X, colorStyles: q, variantClasses: N } = da(A), { densityClasses: K } = Mt(e), { dimensionStyles: z } = yt(e), { elevationClasses: $ } = xt(e), { roundedClasses: j } = it(B), oe = M(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), be = M(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), ne = _(() => ({ isActive: k.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function fe(xe) {
    var _a3, _b2, _c2;
    l("click", xe), !["INPUT", "TEXTAREA"].includes((_a3 = xe.target) == null ? void 0 : _a3.tagName) && w.value && ((_c2 = (_b2 = i.navigate).value) == null ? void 0 : _c2.call(_b2, xe), !y && (m.activatable.value ? s(!u.value, xe) : (m.selectable.value || e.value != null && !g.value) && c(!f.value, xe)));
  }
  function Ie(xe) {
    const ge = xe.target;
    ["INPUT", "TEXTAREA"].includes(ge.tagName) || (xe.key === "Enter" || xe.key === " " && !(V == null ? void 0 : V.filterable)) && (xe.preventDefault(), xe.stopPropagation(), xe.target.dispatchEvent(new MouseEvent("click", xe)));
  }
  return te(() => {
    const xe = g.value ? "a" : e.tag, ge = a.title || e.title != null, F = a.subtitle || e.subtitle != null, J = !!(!!(e.appendAvatar || e.appendIcon) || a.append), le = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(le), e.activeColor && Mm("active-color", ["color", "base-color"]), Xe(S(xe, U(i.linkProps, { ref: o, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !le && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && k.value }, W.value, H.value, X.value, K.value, $.value, oe.value, j.value, N.value, e.class], style: [{ "--v-list-prepend-gap": de(e.prependGap) }, q.value, z.value, e.style], tabindex: e.tabindex ?? (w.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: fe, onKeydown: w.value && !g.value && Ie }), { default: () => {
      var _a3;
      return [ca(w.value || k.value, "v-list-item"), le && p("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? S(De, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : p(he, null, [e.prependAvatar && S(cn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && S(He, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [ge && S(nh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Ut(e.title)];
      } }), F && S(th, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Ut(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, ne.value)]), J && p("div", { key: "append", class: "v-list-item__append" }, [a.append ? S(De, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : p(he, null, [e.appendIcon && S(He, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && S(cn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Et, w.value && be.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: y, isSelected: f, list: V, select: c, root: m, id: I, link: i };
} }), rC = R({ color: String, inset: Boolean, sticky: Boolean, title: String, ...Se(), ...Ae() }, "VListSubheader"), Zl = Z()({ name: "VListSubheader", props: rC(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Pt(() => e.color);
  return te(() => {
    const i = !!(n.default || e.title);
    return S(e.tag, { class: ee(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: me([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [i && p("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), sC = R({ items: Array, returnObject: Boolean }, "VListChildren"), lh = Z()({ name: "VListChildren", props: sC(), setup(e, t) {
  let { slots: n } = t;
  return Kg(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: i, props: o, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: o })) ?? S(sn, o, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? S(Zl, o, null);
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
      } : void 0 }, c = Oi.filterProps(o);
      return i ? S(Oi, U(c, { value: e.returnObject ? s : o == null ? void 0 : o.value, rawId: o == null ? void 0 : o.value }), { activator: (d) => {
        let { props: f } = d;
        const v = U(o, f, { value: e.returnObject ? s : o.value });
        return n.header ? n.header({ props: v }) : S(bn, U(v, { index: l }), u);
      }, default: () => S(lh, { items: i, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...o, index: l } }) : S(bn, U(o, { index: l, value: e.returnObject ? s : o.value }), u);
    }));
  };
} }), ih = R({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), uC = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Sn(e, t) {
  const n = vt(t, e.itemTitle, t), a = vt(t, e.itemValue, n), l = vt(t, e.itemChildren), i = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Be(t, ["children"]) : t : void 0 : vt(t, e.itemProps);
  let o = vt(t, e.itemType, "item");
  uC.has(o) || (o = "item");
  const r = { title: n, value: a, ...i };
  return { type: o, title: String(r.title ?? ""), value: r.value, props: r, children: o === "item" && Array.isArray(l) ? oh(e, l) : void 0, raw: t };
}
Sn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function oh(e, t) {
  const n = Zt(e, Sn.neededProps), a = [];
  for (const l of t) a.push(Sn(n, l));
  return a;
}
function dc(e) {
  const t = _(() => oh(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = ie(/* @__PURE__ */ new Map()), l = ie([]);
  lt(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (_a(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function i(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, y = e.valueComparator || It, m = Zt(e, Sn.neededProps), b = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        b.push(Sn(m, h));
        continue;
      }
      const x = s.get(h);
      if (v || !x) {
        for (const I of v ? u : c) if (y(h, I.value)) {
          b.push(I);
          continue e;
        }
        b.push(Sn(m, h));
        continue;
      }
      b.push(...x);
    }
    return b;
  }
  function o(r) {
    return e.returnObject ? r.map((s) => {
      let { raw: u } = s;
      return u;
    }) : r.map((s) => {
      let { value: u } = s;
      return u;
    });
  }
  return { items: t, transformIn: i, transformOut: o };
}
const cC = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function dC(e, t) {
  const n = _a(t) ? t : vt(t, e.itemTitle), a = _a(t) ? t : vt(t, e.itemValue, void 0), l = vt(t, e.itemChildren), i = e.itemProps === true ? Be(t, ["children"]) : vt(t, e.itemProps);
  let o = vt(t, e.itemType, "item");
  cC.has(o) || (o = "item");
  const r = { title: n, value: a, ...i };
  return { type: o, title: r.title, value: r.value, props: r, children: o === "item" && l ? rh(e, l) : void 0, raw: t };
}
function rh(e, t) {
  const n = [];
  for (const a of t) n.push(dC(e, a));
  return n;
}
function sh(e) {
  return { items: _(() => rh(e, e.items)) };
}
const uh = R({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ce, collapseIcon: Ce, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": At(), "onClick:select": At(), "onUpdate:opened": At(), ...nC({ selectStrategy: "single-leaf", openStrategy: "list" }), ...$t(), ...Se(), ...ut(), ...ht(), ...bt(), ...ih(), ...Qe(), ...Ae(), ...Ne(), ...vn({ variant: "text" }) }, "VList"), Hl = Z()({ name: "VList", props: uh(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: i } = sh(e), { themeClasses: o } = We(e), { backgroundColorClasses: r, backgroundColorStyles: s } = ze(() => e.bgColor), { borderClasses: u } = Gt(e), { densityClasses: c } = Mt(e), { dimensionStyles: d } = yt(e), { elevationClasses: f } = xt(e), { roundedClasses: v } = it(e), { children: y, open: m, parents: b, select: h, getPath: x } = aC(e, { items: i, returnObject: M(() => e.returnObject), scrollToActive: M(() => e.navigationStrategy === "track") }), I = M(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = M(() => e.activeColor), k = M(() => e.baseColor), g = M(() => e.color), C = M(() => e.selectable || e.activatable), w = pe(e, "navigationIndex", -1, (K) => K ?? -1), T = Tt();
  Kg({ filterable: e.filterable, trackingIndex: w, navigationStrategy: M(() => e.navigationStrategy), uid: T }), ue(i, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), st({ VListGroup: { activeColor: V, baseColor: k, color: g, expandIcon: M(() => e.expandIcon), collapseIcon: M(() => e.collapseIcon) }, VListItem: { activeClass: M(() => e.activeClass), activeColor: V, baseColor: k, color: g, density: M(() => e.density), disabled: M(() => e.disabled), lines: M(() => e.lines), nav: M(() => e.nav), slim: M(() => e.slim), variant: M(() => e.variant), tabindex: M(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = ie(false), E = Q();
  function B(K) {
    P.value = true;
  }
  function D(K) {
    P.value = false;
  }
  function A(K) {
    var _a3;
    e.navigationStrategy === "track" ? ~w.value || (w.value = H("first")) : !P.value && !(K.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(K.relatedTarget))) && N();
  }
  function L() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function W(K) {
    switch (K) {
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
  function H(K) {
    const z = i.value.length;
    if (z === 0) return -1;
    let $;
    K === "first" ? $ = 0 : K === "last" ? $ = z - 1 : ($ = w.value + (K === "next" ? 1 : -1), $ < 0 && ($ = z - 1), $ >= z && ($ = 0));
    const j = $;
    let oe = 0;
    for (; oe < z; ) {
      const be = i.value[$];
      if (be && be.type !== "divider" && be.type !== "subheader") return $;
      if ($ += K === "next" || K === "first" ? 1 : -1, $ < 0 && ($ = z - 1), $ >= z && ($ = 0), $ === j) return -1;
      oe++;
    }
    return -1;
  }
  function X(K) {
    const z = K.target;
    if (!E.value || z.tagName === "INPUT" && ["Home", "End"].includes(K.key) || z.tagName === "TEXTAREA") return;
    const $ = W(K.key);
    if ($ !== null) if (K.preventDefault(), e.navigationStrategy === "track") {
      const j = H($);
      j !== -1 && (w.value = j);
    } else N($);
  }
  function q(K) {
    P.value = true;
  }
  function N(K) {
    if (E.value) return Ua(E.value, K);
  }
  return te(() => {
    const K = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), z = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return S(e.tag, { ref: E, class: ee(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, r.value, u.value, c.value, f.value, I.value, v.value, e.class]), style: me([{ "--v-list-indent": de(K), "--v-list-group-prepend": K ? "0px" : void 0, "--v-list-prepend-gap": de(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${T}-${w.value}` : void 0, "aria-multiselectable": z, onFocusin: B, onFocusout: D, onFocus: A, onBlur: L, onKeydown: X, onMousedown: q }, { default: () => [S(lh, { items: i.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: N, children: y, parents: b, getPath: x, navigationIndex: w };
} }), fC = sa("v-list-img"), vC = R({ start: Boolean, end: Boolean, ...Se(), ...Ae() }, "VListItemAction"), fc = Z()({ name: "VListItemAction", props: vC(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(e.tag, { class: ee(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} }), mC = R({ start: Boolean, end: Boolean, ...Se(), ...Ae() }, "VListItemMedia"), gC = Z()({ name: "VListItemMedia", props: mC(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(e.tag, { class: ee(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} });
function ls(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function hC(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Tf(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return ls({ x: l, y: i }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return ls({ x: l, y: i }, t);
  }
  return ls({ x: t.width / 2, y: t.height / 2 }, t);
}
const ch = { static: SC, connected: wC }, yC = R({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ch }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function bC(e, t) {
  const n = Q({}), a = Q();
  Ye && Dt(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    ue(() => e.locationStrategy, r), ft(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", o), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", o, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = ch[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function l(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  function i(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  function o(r) {
    var _a3;
    (_a3 = a.value) == null ? void 0 : _a3.call(a, r);
  }
  return { contentStyles: n, updateLocation: a };
}
function SC() {
}
function kC(e, t) {
  const n = Hu(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function wC(e, t, n) {
  (Array.isArray(e.target.value) || vw(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: i } = Ru(() => {
    const h = Vs(t.location, e.isRtl.value), x = t.origin === "overlap" ? h : t.origin === "auto" ? Xr(h) : Vs(t.origin, e.isRtl.value);
    return h.side === x.side && h.align === Zr(x).align ? { preferredAnchor: Kd(h), preferredOrigin: Kd(x) } : { preferredAnchor: h, preferredOrigin: x };
  }), [o, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => _(() => {
    const x = parseFloat(t[h]);
    return isNaN(x) ? 1 / 0 : x;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new Rm(4), y = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((x) => {
      x !== f && v.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), v.isFull) {
      const x = v.values();
      if (It(x.at(-1), x.at(-3)) && !It(x.at(-1), x.at(-2))) return;
    }
    const h = b();
    h && v.push(h.flipped);
  });
  let m = new hn({ x: 0, y: 0, width: 0, height: 0 });
  ue(e.target, (h, x) => {
    x && !Array.isArray(x) && y.unobserve(x), Array.isArray(h) ? It(h, x) || b() : h && y.observe(h);
  }, { immediate: true }), ue(e.contentEl, (h, x) => {
    x && y.unobserve(x), h && y.observe(h);
  }, { immediate: true }), ft(() => {
    y.disconnect();
  });
  function b() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = jm(e.target.value));
    const h = kC(e.contentEl.value, e.isRtl.value), x = Ro(e.contentEl.value), I = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = x.reduce((D, A) => {
      const L = B0(A);
      return D ? new hn({ x: Math.max(D.left, L.left), y: Math.max(D.top, L.top), width: Math.min(D.right, L.right) - Math.max(D.left, L.left), height: Math.min(D.bottom, L.bottom) - Math.max(D.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let k = { anchor: l.value, origin: i.value };
    function g(D) {
      const A = new hn(h), L = Tf(D.anchor, m), W = Tf(D.origin, A);
      let { x: H, y: X } = hC(L, W);
      switch (D.anchor.side) {
        case "top":
          X -= c.value[0];
          break;
        case "bottom":
          X += c.value[0];
          break;
        case "left":
          H -= c.value[0];
          break;
        case "right":
          H += c.value[0];
          break;
      }
      switch (D.anchor.align) {
        case "top":
          X -= c.value[1];
          break;
        case "bottom":
          X += c.value[1];
          break;
        case "left":
          H -= c.value[1];
          break;
        case "right":
          H += c.value[1];
          break;
      }
      return A.x += H, A.y += X, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), { overflows: qd(A, V), x: H, y: X };
    }
    let C = 0, w = 0;
    const T = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: D, y: A, overflows: L } = g(k);
      C += D, w += A, h.x += D, h.y += A;
      {
        const W = Gd(k.anchor), H = L.x.before || L.x.after, X = L.y.before || L.y.after;
        let q = false;
        if (["x", "y"].forEach((N) => {
          if (N === "x" && H && !P.x || N === "y" && X && !P.y) {
            const K = { anchor: { ...k.anchor }, origin: { ...k.origin } }, z = N === "x" ? W === "y" ? Zr : Xr : W === "y" ? Xr : Zr;
            K.anchor = z(K.anchor), K.origin = z(K.origin);
            const { overflows: $ } = g(K);
            ($[N].before <= L[N].before && $[N].after <= L[N].after || $[N].before + $[N].after < (L[N].before + L[N].after) / 2) && (k = K, q = P[N] = true);
          }
        }), q) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (w += L.y.before, h.y += L.y.before), L.y.after && (w -= L.y.after, h.y -= L.y.after);
      {
        const W = qd(h, V);
        T.x = V.width - W.x.before - W.x.after, T.y = V.height - W.y.before - W.y.after, C += W.x.before, h.x += W.x.before, w += W.y.before, h.y += W.y.before;
      }
      break;
    }
    const B = Gd(k.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`, transformOrigin: `${k.origin.side} ${k.origin.align}`, top: de(is(w)), left: e.isRtl.value ? void 0 : de(is(C)), right: e.isRtl.value ? de(is(-C)) : void 0, minWidth: de(B === "y" ? Math.min(o.value, m.width) : o.value), maxWidth: de(Af(je(T.x, o.value === 1 / 0 ? 0 : o.value, s.value))), maxHeight: de(Af(je(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: h, flipped: P };
  }
  return ue(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => b()), Te(() => {
    const h = b();
    if (!h) return;
    const { available: x, contentBox: I } = h;
    I.height > x.y && requestAnimationFrame(() => {
      b(), requestAnimationFrame(() => {
        b();
      });
    });
  }), { updateLocation: b };
}
function is(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Af(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Hs = true;
const Yo = [];
function pC(e) {
  !Hs || Yo.length ? (Yo.push(e), Ws()) : (Hs = false, e(), Ws());
}
let Df = -1;
function Ws() {
  cancelAnimationFrame(Df), Df = requestAnimationFrame(() => {
    const e = Yo.shift();
    e && e(), Yo.length ? Ws() : Hs = true;
  });
}
const dh = { none: null, close: _C, block: VC, reposition: IC }, xC = R({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in dh } }, "VOverlay-scroll-strategies");
function CC(e, t) {
  if (!Ye) return;
  let n;
  lt(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = El(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = dh[e.scrollStrategy]) == null ? void 0 : _a3.call(dh, t, e, n);
    }));
  }), ft(() => {
    n == null ? void 0 : n.stop();
  });
}
function _C(e) {
  function t(n) {
    e.isActive.value = false;
  }
  fh(vc(e.target.value, e.contentEl.value), t);
}
function VC(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = vc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Ro(a, t.contained ? n : void 0), ...Ro(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((r) => Yu(r) && r)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", de(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", de(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", de(i)), r.classList.add("v-overlay-scroll-blocked");
  }), ft(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function IC(e, t, n) {
  let a = false, l = -1, i = -1;
  function o(r) {
    pC(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      fh(vc(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), ft(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function vc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function fh(e, t) {
  const n = [document, ...Ro(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), ft(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const zs = Symbol.for("vuetify:v-menu"), mc = R({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function gc(e, t) {
  let n = () => {
  };
  function a(o, r) {
    n == null ? void 0 : n();
    const s = o ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = P0(u, () => {
        t == null ? void 0 : t(o), c(o);
      });
    });
  }
  function l() {
    return a(true);
  }
  function i(o) {
    return a(false, o);
  }
  return { clearDelay: n, runOpenDelay: l, runCloseDelay: i };
}
const PC = R({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...mc() }, "VOverlay-activator");
function TC(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const i = gt("useActivator"), o = Q();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = gc(e, (w) => {
    w === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== w && (u = true), n.value = w);
  }), y = Q(), m = { onClick: (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (y.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    r = true, o.value = w.currentTarget || w.target, f();
  }, onMouseleave: (w) => {
    r = false, v();
  }, onFocus: (w) => {
    Ll(w.target, ":focus-visible") !== false && (s = true, w.stopPropagation(), o.value = w.currentTarget || w.target, f());
  }, onBlur: (w) => {
    s = false, w.stopPropagation(), v({ minDelay: 1 });
  } }, b = _(() => {
    const w = {};
    return d.value && (w.onClick = m.onClick), e.openOnHover && (w.onMouseenter = m.onMouseenter, w.onMouseleave = m.onMouseleave), c.value && (w.onFocus = m.onFocus, w.onBlur = m.onBlur), w;
  }), h = _(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = true, f();
    }, w.onMouseleave = () => {
      r = false, v();
    }), c.value && (w.onFocusin = (T) => {
      T.target.matches(":focus-visible") && (s = true, f());
    }, w.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const T = Oe(zs, null);
      w.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return w;
  }), x = _(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, w.onMouseleave = () => {
      r = false, v();
    }), w;
  });
  ue(a, (w) => {
    var _a3;
    w && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), ue(n, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, { flush: "post" });
  const I = Ii();
  lt(() => {
    I.value && Te(() => {
      o.value = I.el;
    });
  });
  const V = Ii(), k = _(() => e.target === "cursor" && y.value ? y.value : V.value ? V.el : vh(e.target, i) || o.value), g = _(() => Array.isArray(k.value) ? void 0 : k.value);
  let C;
  return ue(() => !!e.activator, (w) => {
    w && Ye ? (C = El(), C.run(() => {
      AC(e, i, { activatorEl: o, activatorEvents: b });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), ft(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: o, activatorRef: I, target: k, targetEl: g, targetRef: V, activatorEvents: b, contentEvents: h, scrimEvents: x };
}
function AC(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ue(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && o(c);
    }
    s && Te(() => i());
  }, { immediate: true }), ue(() => e.activatorProps, () => {
    i();
  }), ft(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && F0(s, U(l.value, u));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && L0(s, U(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = vh(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function vh(e, t) {
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
const mh = R({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), _o = /* @__PURE__ */ new Map();
let Ef = 0;
function Mf(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(_o.values()).filter((u) => {
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
  const i = wa(a).filter((u) => u.tabIndex >= 0);
  if (!i.length) return;
  const o = document.activeElement;
  if (i.length === 1 && i[0].classList.contains("v-list") && i[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const r = i[0], s = i[i.length - 1];
  e.shiftKey && (o === r || r.classList.contains("v-list") && r.contains(o)) && (e.preventDefault(), s.focus()), !e.shiftKey && (o === s || s.classList.contains("v-list") && s.contains(o)) && (e.preventDefault(), r.focus());
}
function gh(e, t) {
  let { isActive: n, localTop: a, activatorEl: l, contentEl: i } = t;
  const o = Symbol("trap");
  let r = false, s = -1;
  async function u() {
    r = true, s = window.setTimeout(() => {
      r = false;
    }, 100);
  }
  async function c(v) {
    var _a3;
    const y = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Te(), n.value && !r && y !== m && i.value && qe(a) && ![document, i.value].includes(m) && !i.value.contains(m) && ((_a3 = wa(i.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && i.value && v.target && !i.value.contains(v.target))) {
      const y = wa(document.documentElement);
      if (v.shiftKey && v.target === y.at(0) || !v.shiftKey && v.target === y.at(-1)) {
        const m = wa(i.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = M(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Ye && (ue(() => e.retainFocus, (v) => {
    v ? _o.set(o, { isActive: n, contentEl: i }) : _o.delete(o);
  }, { immediate: true }), ue(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), Ef++ < 1 && document.addEventListener("keydown", Mf)), ft(() => {
    _o.delete(o), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --Ef < 1 && document.removeEventListener("keydown", Mf);
  });
}
function hh() {
  if (!Ye) return ie(false);
  const { ssr: e } = dn();
  if (e) {
    const t = ie(false);
    return kt(() => {
      t.value = true;
    }), t;
  } else return ie(true);
}
const hc = R({ eager: Boolean }, "lazy");
function yc(e, t) {
  const n = ie(false), a = M(() => n.value || e.eager || t.value);
  ue(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function ml() {
  const t = gt("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Bf = Symbol.for("vuetify:stack"), ni = Vt([]);
function DC(e, t, n) {
  const a = gt("useStack"), l = !n, i = Oe(Bf, void 0), o = Vt({ activeChildren: /* @__PURE__ */ new Set() });
  et(Bf, o);
  const r = ie(Number(qe(t)));
  Dt(e, () => {
    var _a3;
    const c = (_a3 = ni.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(qe(t)), l && ni.push([a.uid, r.value]), i == null ? void 0 : i.activeChildren.add(a.uid), ft(() => {
      if (l) {
        const d = Pe(ni).findIndex((f) => f[0] === a.uid);
        ni.splice(d, 1);
      }
      i == null ? void 0 : i.activeChildren.delete(a.uid);
    });
  });
  const s = ie(true);
  return l && lt(() => {
    var _a3;
    const c = ((_a3 = ni.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: Xa(s), localTop: M(() => !o.activeChildren.size), stackStyles: M(() => ({ zIndex: r.value })) };
}
function EC(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !Ye) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function MC() {
  return true;
}
function yh(e, t, n) {
  if (!e || bh(e, n) === false) return false;
  const a = eg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function bh(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || MC)(e);
}
function BC(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && yh(e, t, n) && setTimeout(() => {
    bh(e, n) && a && a(e);
  }, 0);
}
function Ff(e, t) {
  const n = eg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const js = { mounted(e, t) {
  const n = (l) => BC(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = yh(l, e, t);
  };
  Ff(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (Ff(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function FC(e) {
  const { modelValue: t, color: n, ...a } = e;
  return S(Ca, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && p("div", U({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const io = R({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...PC(), ...Se(), ...ht(), ...hc(), ...yC(), ...xC(), ...mh(), ...Ne(), ...ua() }, "VOverlay"), Nn = Z()({ name: "VOverlay", directives: { vClickOutside: js }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Be(io(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const i = gt("VOverlay"), o = Q(), r = Q(), s = Q(), u = pe(e, "modelValue"), c = _({ get: () => u.value, set: (ne) => {
    ne && e.disabled || (u.value = ne);
  } }), { themeClasses: d } = We(e), { rtlClasses: f, isRtl: v } = wt(), { hasContent: y, onAfterLeave: m } = yc(e, c), b = ze(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: x, stackStyles: I } = DC(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: k, target: g, targetEl: C, targetRef: w, activatorEvents: T, contentEvents: P, scrimEvents: E } = TC(e, { isActive: c, isTop: x, contentEl: s }), { teleportTarget: B } = EC(() => {
    var _a3, _b2, _c2;
    const ne = e.attach || e.contained;
    if (ne) return ne;
    const fe = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = i.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: D } = yt(e), A = hh(), { scopeId: L } = ml();
  ue(() => e.disabled, (ne) => {
    ne && (c.value = false);
  });
  const { contentStyles: W, updateLocation: H } = bC(e, { isRtl: v, contentEl: s, target: g, isActive: c });
  CC(e, { root: o, contentEl: s, targetEl: C, target: g, isActive: c, updateLocation: H });
  function X(ne) {
    l("click:outside", ne), e.persistent ? j() : c.value = false;
  }
  function q(ne) {
    return c.value && x.value && (!e.scrim || ne.target === r.value || ne instanceof MouseEvent && ne.shadowTarget === r.value);
  }
  gh(e, { isActive: c, localTop: x, contentEl: s, activatorEl: V }), Ye && ue(c, (ne) => {
    ne ? window.addEventListener("keydown", N) : window.removeEventListener("keydown", N);
  }, { immediate: true }), Lt(() => {
    Ye && window.removeEventListener("keydown", N);
  });
  function N(ne) {
    var _a3, _b2, _c2;
    ne.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", ne), e.persistent ? j() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function K(ne) {
    ne.key === "Escape" && !h.value || l("keydown", ne);
  }
  const z = Vg();
  Dt(() => e.closeOnBack, () => {
    gx(z, (ne) => {
      h.value && c.value ? (ne(false), e.persistent ? j() : c.value = false) : ne();
    });
  });
  const $ = Q();
  ue(() => c.value && (e.absolute || e.contained) && B.value == null, (ne) => {
    if (ne) {
      const fe = ur(o.value);
      fe && fe !== document.scrollingElement && ($.value = fe.scrollTop);
    }
  });
  function j() {
    e.noClickAnimation || s.value && Xn(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Pi });
  }
  function oe() {
    l("afterEnter");
  }
  function be() {
    m(), l("afterLeave");
  }
  return te(() => {
    var _a3;
    return p(he, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: w, props: U({ ref: k }, T.value, e.activatorProps) }), A.value && y.value && S(_S, { disabled: !B.value, to: B.value }, { default: () => [p("div", U({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: de($.value) }, e.style], ref: o, onKeydown: K }, L, a), [S(FC, U({ color: b, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), S(Yt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: oe, onAfterLeave: be }, { default: () => {
      var _a4;
      return [Xe(p("div", U({ ref: s, class: ["v-overlay__content", e.contentClass], style: [D.value, W.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[In, c.value], [js, { handler: X, closeConditional: q, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: j, contentEl: s, rootEl: o, globalTop: h, localTop: x, updateLocation: H };
} }), Sh = R({ id: String, submenu: Boolean, ...Be(io({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: vr } }), ["absolute"]) }, "VMenu"), Wl = Z()({ name: "VMenu", props: Sh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), { scopeId: l } = ml(), { isRtl: i } = wt(), o = Tt(), r = M(() => e.id || `v-menu-${o}`), s = Q(), u = Oe(zs, null), c = ie(/* @__PURE__ */ new Set());
  et(zs, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !T0(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Lt(() => u == null ? void 0 : u.unregister()), Au(() => a.value = false), ue(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !Wm(wa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const b = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    b && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Ua(b, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Ua(b, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Ua(b, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const y = _(() => U({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return te(() => {
    const m = Nn.filterProps(e);
    return S(Nn, U({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (b) => a.value = b, absolute: true, activatorProps: y.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var b = arguments.length, h = new Array(b), x = 0; x < b; x++) h[x] = arguments[x];
      return S(De, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Ct({ id: r, \u03A8openChildren: c }, s);
} }), bc = R({ color: String, ...$t(), ...Se(), ...ht(), ...bt(), ...jn(), ...Kl(), ...Qe(), ...Ae(), ...Ne() }, "VSheet"), Ta = Z()({ name: "VSheet", props: bc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color), { borderClasses: o } = Gt(e), { dimensionStyles: r } = yt(e), { elevationClasses: s } = xt(e), { locationStyles: u } = Ma(e), { positionClasses: c } = Gl(e), { roundedClasses: d } = it(e);
  return te(() => S(e.tag, { class: ee(["v-sheet", a.value, l.value, o.value, s.value, c.value, d.value, e.class]), style: me([i.value, r.value, u.value, e.style]) }, n)), {};
} }), LC = R({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...Se(), ...ua({ transition: { component: tc } }) }, "VCounter"), Sr = Z()({ name: "VCounter", functional: true, props: LC(), setup(e, t) {
  let { slots: n } = t;
  const a = M(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => S(Yt, { transition: e.transition }, { default: () => [Xe(p("div", { class: ee(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: me(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[In, e.active]])] })), {};
} }), $C = R({ floating: Boolean, ...Se() }, "VFieldLabel"), oi = Z()({ name: "VFieldLabel", props: $C(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(ql, { class: ee(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: me(e.style) }, n)), {};
} }), OC = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], oo = R({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => OC.includes(e) }, "onClick:clear": At(), "onClick:appendInner": At(), "onClick:prependInner": At(), ...Se(), ...hr(), ...Qe(), ...Ne() }, "VField"), Aa = Z()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...lo(), ...oo() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: i } = We(e), { loaderClasses: o } = Qi(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = fa(e), { InputIcon: d } = ao(e), { roundedClasses: f } = it(e), { rtlClasses: v } = wt(), y = M(() => e.dirty || e.active), m = M(() => !!(e.label || l.label)), b = M(() => !e.singleLine && m.value), h = Tt(), x = _(() => e.id || `input-${h}`), I = M(() => e.details ? `${x.value}-messages` : void 0), V = Q(), k = Q(), g = Q(), C = _(() => ["plain", "underlined"].includes(e.variant)), w = _(() => e.error || e.disabled ? void 0 : y.value && s.value ? e.color : e.baseColor), T = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? w.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = ze(() => e.bgColor), { textColorClasses: B, textColorStyles: D } = Pt(w);
  ue(y, (X) => {
    if (b.value && !$n()) {
      const q = V.value.$el, N = k.value.$el;
      requestAnimationFrame(() => {
        const K = Hu(q), z = N.getBoundingClientRect(), $ = z.x - K.x, j = z.y - K.y - (K.height / 2 - z.height / 2), oe = z.width / 0.75, be = Math.abs(oe - K.width) > 1 ? { maxWidth: de(oe) } : void 0, ne = getComputedStyle(q), fe = getComputedStyle(N), Ie = parseFloat(ne.transitionDuration) * 1e3 || 150, xe = parseFloat(fe.getPropertyValue("--v-field-label-scale")), ge = fe.getPropertyValue("color");
        q.style.visibility = "visible", N.style.visibility = "hidden", Xn(q, { transform: `translate(${$}px, ${j}px) scale(${xe})`, color: ge, ...be }, { duration: Ie, easing: Pi, direction: X ? "normal" : "reverse" }).finished.then(() => {
          q.style.removeProperty("visibility"), N.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = _(() => ({ isActive: y, isFocused: s, controlRef: g, iconColor: T, blur: c, focus: u })), L = M(() => {
    const X = !y.value;
    return { "aria-hidden": X, for: X ? void 0 : x.value };
  }), W = M(() => {
    const X = b.value && y.value;
    return { "aria-hidden": X, for: X ? void 0 : x.value };
  });
  function H(X) {
    X.target !== document.activeElement && X.preventDefault();
  }
  return te(() => {
    var _a3;
    const X = e.variant === "outlined", q = !!(l["prepend-inner"] || e.prependInnerIcon), N = !!(e.clearable || l.clear) && !e.disabled, K = !!(l["append-inner"] || e.appendInnerIcon || N), z = () => l.label ? l.label({ ...A.value, label: e.label, props: { for: x.value } }) : e.label;
    return p("div", U({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": K, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": q, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !z(), [`v-field--variant-${e.variant}`]: true }, i.value, P.value, r.value, o.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: H }, n), [p("div", { class: "v-field__overlay" }, null), S(eo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), q && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](A.value) : e.prependInnerIcon && S(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && S(oi, U({ key: "floating-label", ref: k, class: [B.value], floating: true }, L.value, { style: D.value }), { default: () => [z()] }), m.value && S(oi, U({ key: "label", ref: V, id: e.labelId }, W.value), { default: () => [z()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...A.value, props: { id: x.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? p("div", { id: x.value, class: "v-field__input", "aria-describedby": I.value }, null)]), N && S(nc, { key: "clear" }, { default: () => [Xe(p("div", { class: "v-field__clearable", onMousedown: ($) => {
      $.preventDefault(), $.stopPropagation();
    } }, [S(De, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...A.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : S(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[In, e.dirty]])] }), K && p("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](A.value) : e.appendInnerIcon && S(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), p("div", { class: ee(["v-field__outline", B.value]), style: me(D.value) }, [X && p(he, null, [p("div", { class: "v-field__outline__start" }, null), b.value && p("div", { class: "v-field__outline__notch" }, [S(oi, U({ ref: k, floating: true }, L.value), { default: () => [z()] })]), p("div", { class: "v-field__outline__end" }, null)]), C.value && b.value && S(oi, U({ ref: k, floating: true }, L.value), { default: () => [z()] })])]);
  }), { controlRef: g, fieldIconColor: T };
} }), kh = R({ autocomplete: String }, "autocomplete");
function Sc(e) {
  const t = Tt(), n = ie(0), a = M(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: M(() => a.value ? "off" : e.autocomplete), fieldName: M(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function wh(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const NC = ["color", "file", "time", "date", "datetime-local", "week", "month"], ro = R({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kh(), ...Be(va(), ["direction"]), ...oo() }, "VTextField"), Rn = Z()({ name: "VTextField", directives: { vIntersect: _n }, inheritAttrs: false, props: ro(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const i = pe(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: o, focus: r, blur: s } = fa(e), { onIntersect: u } = wh(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = Q(), y = Q(), m = Q(), b = Sc(e), h = _(() => NC.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
  function x() {
    b.isSuppressing.value && b.update(), o.value || r(), Te(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function I(C) {
    a("mousedown:control", C), C.target !== m.value && (x(), C.preventDefault());
  }
  function V(C) {
    a("click:control", C);
  }
  function k(C, w) {
    C.stopPropagation(), x(), Te(() => {
      w(), qi(e["onClick:clear"], C);
    });
  }
  function g(C) {
    var _a3;
    const w = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      i.value = w.value;
      return;
    }
    const T = w.value, P = w.selectionStart, E = w.selectionEnd;
    i.value = T, Te(() => {
      let B = 0;
      T.trimStart().length === w.value.length && (B = T.length - w.value.length), P != null && (w.selectionStart = P - B), E != null && (w.selectionEnd = E - B);
    });
  }
  return te(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), w = !!(C || l.details), [T, P] = Wn(n), { modelValue: E, ...B } = Ft.filterProps(e), D = Aa.filterProps(e);
    return S(Ft, U({ ref: v, modelValue: i.value, "onUpdate:modelValue": (A) => i.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, B, { centerAffix: !f.value, focused: o.value }), { ...l, default: (A) => {
      let { id: L, isDisabled: W, isDirty: H, isReadonly: X, isValid: q, hasDetails: N, reset: K } = A;
      return S(Aa, U({ ref: y, onMousedown: I, onClick: V, "onClick:clear": (z) => k(z, K), role: e.role }, Be(D, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || H.value, dirty: H.value || e.dirty, disabled: W.value, focused: o.value, details: N.value, error: q.value === false }), { ...l, default: (z) => {
        let { props: { class: $, ...j }, controlRef: oe } = z;
        const be = p("input", U({ ref: (ne) => m.value = oe.value = ne, value: i.value, onInput: g, autofocus: e.autofocus, readonly: X.value, disabled: W.value, name: b.fieldName.value, autocomplete: b.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, j, P), null);
        return p(he, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), Xe(l.default ? p("div", { class: ee($), "data-no-activator": "" }, [l.default({ id: L }), be]) : aa(be, { class: $ }), [[_n, u, null, { once: true }]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: w ? (A) => {
      var _a3;
      return p(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, A), C && p(he, null, [p("span", null, null), S(Sr, { active: e.persistentCounter || o.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Ct({}, v, y, m);
} }), RC = R({ renderless: Boolean, ...Se() }, "VVirtualScrollItem"), ph = Z()({ name: "VVirtualScrollItem", inheritAttrs: false, props: RC(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: i, contentRect: o } = yn(void 0, "border");
  ue(() => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), te(() => {
    var _a3, _b2;
    return e.renderless ? p(he, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: i })]) : p("div", U({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), HC = -1, WC = 1, os = 100, xh = R({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Ch(e, t) {
  const n = dn(), a = ie(0);
  lt(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ie(0), i = ie(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), o = ie(0), r = ie(0), s = Q(), u = Q();
  let c = 0;
  const { resizeRef: d, contentRect: f } = yn();
  lt(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), y = _(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length });
  const h = ie(0);
  let x = -1;
  function I(N) {
    return m[N] || a.value;
  }
  const V = Om(() => {
    const N = performance.now();
    b[0] = 0;
    const K = t.value.length;
    for (let z = 1; z <= K; z++) b[z] = (b[z - 1] || 0) + I(z - 1);
    h.value = Math.max(h.value, performance.now() - N);
  }, h), k = ue(y, (N) => {
    N && (k(), c = u.value.offsetTop, V.immediate(), W(), ~x && Te(() => {
      Ye && window.requestAnimationFrame(() => {
        X(x), x = -1;
      });
    }));
  });
  ft(() => {
    V.clear();
  });
  function g(N, K) {
    const z = m[N], $ = a.value;
    a.value = $ ? Math.min(a.value, K) : K, (z !== K || $ !== a.value) && (m[N] = K, V());
  }
  function C(N) {
    N = je(N, 0, t.value.length);
    const K = Math.floor(N), z = N % 1, $ = K + 1, j = b[K] || 0, oe = b[$] || j;
    return j + (oe - j) * z;
  }
  function w(N) {
    return zC(b, N);
  }
  let T = 0, P = 0, E = 0;
  ue(v, (N, K) => {
    W(), N < K && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let B = -1;
  function D() {
    if (!s.value || !u.value) return;
    const N = s.value.scrollTop, K = performance.now();
    K - E > 500 ? (P = Math.sign(N - T), c = u.value.offsetTop) : P = N - T, T = N, E = K, window.clearTimeout(B), B = window.setTimeout(A, 500), W();
  }
  function A() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(B), W());
  }
  let L = -1;
  function W() {
    cancelAnimationFrame(L), L = requestAnimationFrame(H);
  }
  function H() {
    if (!s.value || !v.value || !a.value) return;
    const N = T - c, K = Math.sign(P), z = Math.max(0, N - os), $ = je(w(z), 0, t.value.length), j = N + v.value + os, oe = je(w(j) + 1, $ + 1, t.value.length);
    if ((K !== HC || $ < l.value) && (K !== WC || oe > i.value)) {
      const be = C(l.value) - C($), ne = C(oe) - C(i.value);
      Math.max(be, ne) > os ? (l.value = $, i.value = oe) : ($ <= 0 && (l.value = $), oe >= t.value.length && (i.value = oe));
    }
    o.value = C(l.value), r.value = C(t.value.length) - C(i.value);
  }
  function X(N) {
    const K = C(N);
    !s.value || N && !K ? x = N : s.value.scrollTop = K;
  }
  const q = _(() => t.value.slice(l.value, i.value).map((N, K) => {
    const z = K + l.value;
    return { raw: N, index: z, key: vt(N, e.itemKey, z) };
  }));
  return ue(t, () => {
    m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length }), V.immediate(), W();
  }, { deep: 1 }), { calculateVisibleItems: W, containerRef: s, markerRef: u, computedItems: q, paddingTop: o, paddingBottom: r, scrollToIndex: X, handleScroll: D, handleScrollend: A, handleItemResize: g };
}
function zC(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, i = e[l], i > t) n = l - 1;
  else if (i < t) o = l, a = l + 1;
  else return i === t ? l : a;
  return o;
}
const jC = R({ items: { type: Array, default: () => [] }, renderless: Boolean, ...xh(), ...Se(), ...ht() }, "VVirtualScroll"), kr = Z()({ name: "VVirtualScroll", props: jC(), setup(e, t) {
  let { slots: n } = t;
  const a = gt("VVirtualScroll"), { dimensionStyles: l } = yt(e), { calculateVisibleItems: i, containerRef: o, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: y } = Ch(e, M(() => e.items));
  return Dt(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      o.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = o.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = o.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    kt(() => {
      o.value = ur(a.vnode.el, true), m(true);
    }), ft(m);
  }), te(() => {
    const m = y.value.map((b) => S(ph, { key: b.key, renderless: e.renderless, "onUpdate:height": (h) => c(b.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: b.raw, index: b.index, ...h });
    } }));
    return e.renderless ? p(he, null, [p("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: de(f.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: de(v.value) } }, null)]) : p("div", { ref: o, class: ee(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: me([l.value, e.style]) }, [p("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: de(f.value), paddingBottom: de(v.value) } }, [m])]);
  }), { calculateVisibleItems: i, scrollToIndex: d };
} });
function kc(e, t) {
  const n = ie(false);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = true, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = false;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = ue(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var _a3, _b2;
    if (r.key === "Tab" && ((_a3 = t.value) == null ? void 0 : _a3.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (_b2 = e.value) == null ? void 0 : _b2.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({ top: r.key === "Home" ? 0 : s.scrollHeight, behavior: "smooth" }), await i();
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
  return { onScrollPassive: l, onKeydown: o };
}
function wc(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? wa(s) : [];
  }
  function i(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = o(c, d, u, s);
    if (f === null) {
      const v = t[d], y = c[d];
      (v.type === "list" || (u === "forward" ? y.at(-1) === r.target : y.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && qe(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const y = u === "forward";
        c[f].at(y ? 0 : -1).focus();
      }
    }
  }
  function o(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const v = u === "forward" ? 1 : -1;
    for (let y = s + v; y >= 0 && y < t.length; y += v) {
      const m = t[y];
      if (r[y].length > 0 || m.type === "list" && qe(m.displayItemsCount) > 0) return y;
    }
    return null;
  }
  return { onTabKeydown: i };
}
const YC = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function rs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const gl = R({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function UC(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? YC, i = (n == null ? void 0 : n.filterKeys) ? Je(n.filterKeys) : false, o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = Je(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || o > 0) && !(n == null ? void 0 : n.noFilter)) {
      let y = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const h = i || Object.keys(c);
        y = h.length === o;
        for (const x of h) {
          const I = vt(c, x), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[x];
          if (v = V ? V(I, t, u) : l(I, t, u), v !== -1 && v !== false) V ? d[x] = rs(v, t) : f[x] = rs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = rs(v, t));
      const m = Object.keys(f).length, b = Object.keys(d).length;
      if (!m && !b || (n == null ? void 0 : n.filterMode) === "union" && b !== o && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (b !== o || !m && o > 0 && !y)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function hl(e, t, n, a) {
  const l = ie([]), i = ie(/* @__PURE__ */ new Map()), o = _(() => (a == null ? void 0 : a.transform) ? Ht(t).map((s) => [s, a.transform(s)]) : Ht(t));
  lt(() => {
    const s = typeof n == "function" ? n() : Ht(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = UC(o.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Ht(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ht(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((y) => {
      let { index: m, matches: b } = y;
      const h = d[m];
      f.push(h), v.set(h.value, b);
    }), l.value = f, i.value = v;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: i, getMatches: r };
}
function pc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const i = l === 0 ? 0 : n[l - 1][1], o = [p("span", { class: ee(`${e}__unmask`) }, [t.slice(i, a[0])]), p("span", { class: ee(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && o.push(p("span", { class: ee(`${e}__unmask`) }, [t.slice(a[1])])), p(he, null, [o]);
  });
}
const KC = R({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function xc(e, t) {
  const n = Tt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: M(() => qe(t)), ariaControls: M(() => a.value) };
}
const Cc = R({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...KC(), ...ih({ itemChildren: false }) }, "Select"), GC = R({ search: String, ...gl({ filterKeys: ["title"] }), ...Cc(), ...Be(ro({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ua({ transition: { component: vr } }) }, "VSelect"), _c = Z()({ name: "VSelect", props: GC(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Ue(), l = Q(), i = Q(), o = Q(), r = Q(), s = Q(), { items: u, transformIn: c, transformOut: d } = dc(e), f = pe(e, "search", ""), { filteredItems: v, getMatches: y } = hl(e, u, () => f.value), m = pe(e, "modelValue", [], (ge) => c(ge === null ? [null] : Je(ge)), (ge) => {
    const F = d(ge);
    return e.multiple ? F : F[0] ?? null;
  }), b = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = Xl(e), x = Sc(e), I = _(() => m.value.map((ge) => ge.value)), V = ie(false), k = M(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = ao(e);
  let C = "", w = 0, T;
  const P = _(() => {
    const ge = f.value ? v.value : u.value;
    return e.hideSelected ? ge.filter((F) => !m.value.some((O) => (e.valueComparator || It)(O, F))) : ge;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), B = pe(e, "menu"), D = _({ get: () => B.value, set: (ge) => {
    var _a3;
    B.value && !ge && ((_a3 = i.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ge && E.value || (B.value = ge);
  } }), { menuId: A, ariaExpanded: L, ariaControls: W } = xc(e, D), H = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), X = Q(), q = kc(X, l), { onTabKeydown: N } = wc({ groups: [{ type: "element", contentRef: o }, { type: "list", contentRef: X, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    D.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function K(ge) {
    e.openOnClear && (D.value = true);
  }
  function z() {
    E.value || (D.value = !D.value);
  }
  function $(ge) {
    var _a3;
    ge.key === "Tab" && N(ge), ((_a3 = X.value) == null ? void 0 : _a3.$el.contains(ge.target)) && $l(ge) && j(ge);
  }
  function j(ge) {
    var _a3, _b2, _c2;
    if (!ge.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ge.key) && ge.preventDefault(), ["Enter", "ArrowDown", " "].includes(ge.key) && (D.value = true), ["Escape", "Tab"].includes(ge.key) && (D.value = false), e.clearable && ge.key === "Backspace") {
      ge.preventDefault(), m.value = [], K();
      return;
    }
    ge.key === "Home" ? (_a3 = X.value) == null ? void 0 : _a3.focus("first") : ge.key === "End" && ((_b2 = X.value) == null ? void 0 : _b2.focus("last"));
    const F = 1e3;
    if (!$l(ge)) return;
    const O = performance.now();
    O - T > F && (C = "", w = 0), C += ge.key.toLowerCase(), T = O;
    const J = P.value;
    function se() {
      let Y = le();
      return Y || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), w++, Y = le(), Y) || (w = 0, Y = le(), Y) ? Y : (C = ge.key.toLowerCase(), le());
    }
    function le() {
      for (let Y = w; Y < J.length; Y++) {
        const ae = J[Y];
        if (ae.title.toLowerCase().startsWith(C)) return [ae, Y];
      }
    }
    const re = se();
    if (!re) return;
    const [ye, ce] = re;
    w = ce, (_c2 = X.value) == null ? void 0 : _c2.focus(ce), e.multiple || (m.value = [ye]);
  }
  function oe(ge) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ge.props.disabled) if (e.multiple) {
      const O = m.value.findIndex((se) => (e.valueComparator || It)(se.value, ge.value)), J = F ?? !~O;
      if (~O) {
        const se = J ? [...m.value, ge] : [...m.value];
        se.splice(O, 1), m.value = se;
      } else J && (m.value = [...m.value, ge]);
    } else {
      const O = F !== false;
      m.value = O ? [ge] : [], Te(() => {
        D.value = false;
      });
    }
  }
  function be(ge) {
    var _a3;
    const F = ge.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(F)) || (D.value = false);
  }
  function ne() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function fe() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Ie(ge) {
    V.value = true;
  }
  function xe(ge) {
    if (ge == null) m.value = [];
    else if (Ll(l.value, ":autofill") || Ll(l.value, ":-webkit-autofill")) {
      const F = u.value.find((O) => O.title === ge);
      F && oe(F);
    } else l.value && (l.value.value = "");
  }
  return ue(D, () => {
    if (!e.hideSelected && D.value && m.value.length) {
      const ge = P.value.findIndex((F) => m.value.some((O) => (e.valueComparator || It)(O.value, F.value)));
      Ye && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ge >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ge));
      });
    }
  }), ue(u, (ge, F) => {
    D.value || V.value && e.hideNoData && !F.length && ge.length && (D.value = true);
  }), te(() => {
    const ge = !!(e.chips || n.chip), F = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), O = m.value.length > 0, J = Rn.filterProps(e), se = O || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, le = { search: f, filteredItems: v.value };
    return S(Rn, U({ ref: l }, J, { modelValue: m.value.map((re) => re.props.title).join(", "), name: void 0, "onUpdate:modelValue": xe, focused: V.value, "onUpdate:focused": (re) => V.value = re, validationValue: m.externalValue, counterValue: b.value, dirty: O, class: ["v-select", { "v-select--active-menu": D.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: se, "onClick:clear": K, "onMousedown:control": z, onBlur: be, onKeydown: j, "aria-expanded": L.value, "aria-controls": W.value }), { ...n, default: (re) => {
      let { id: ye } = re;
      return p(he, null, [p("select", { hidden: true, multiple: e.multiple, name: x.fieldName.value }, [u.value.map((ce) => p("option", { key: ce.value, value: ce.value, selected: I.value.includes(ce.value) }, null))]), S(Wl, U({ id: A.value, ref: i, modelValue: D.value, "onUpdate:modelValue": (ce) => D.value = ce, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: ne, onAfterLeave: fe }, H.value), { default: () => [S(Ta, { onFocusin: Ie, onKeydown: $ }, { default: () => [n["menu-header"] && p("header", { ref: o }, [n["menu-header"](le)]), F && S(Hl, U({ key: "select-list", ref: X, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${ye.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, q, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? S(bn, { key: "no-data", title: a(e.noDataText) }, null)), S(kr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (ce) => {
          var _a4, _b3, _c3;
          let { item: Y, index: ae, itemRef: _e } = ce;
          const G = D0(Y.props), ve = U(Y.props, { ref: _e, key: Y.value, onClick: () => oe(Y, null), "aria-posinset": ae + 1, "aria-setsize": P.value.length });
          return Y.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Y.raw, index: ae })) ?? S(sn, U(Y.props, { key: `divider-${ae}` }), null) : Y.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Y.raw, index: ae })) ?? S(Zl, U(Y.props, { key: `subheader-${ae}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Y, index: ae, props: ve })) ?? S(bn, U(ve, { role: "option" }), { prepend: (ke) => {
            let { isSelected: we } = ke;
            return p(he, null, [e.multiple && !e.hideSelected ? S(Vn, { key: Y.value, modelValue: we, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ve) => Ve.preventDefault() }, null) : void 0, G.prependAvatar && S(cn, { image: G.prependAvatar }, null), G.prependIcon && S(He, { icon: G.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? pc("v-select", Y.title, (_a5 = y(Y)) == null ? void 0 : _a5.title) : Y.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: r }, [n["menu-footer"](le)])] })] }), m.value.map((ce, Y) => {
        function ae(ke) {
          ke.stopPropagation(), ke.preventDefault(), oe(ce, false);
        }
        const _e = U(ia.filterProps(ce.props), { "onClick:close": ae, onKeydown(ke) {
          ke.key !== "Enter" && ke.key !== " " || (ke.preventDefault(), ke.stopPropagation(), ae(ke));
        }, onMousedown(ke) {
          ke.preventDefault(), ke.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), G = ge ? !!n.chip : !!n.selection, ve = G ? sr(ge ? n.chip({ item: ce, index: Y, props: _e }) : n.selection({ item: ce, index: Y })) : void 0;
        if (!(G && !ve)) return p("div", { key: ce.value, class: "v-select__selection" }, [ge ? n.chip ? S(De, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: ce.title } } }, { default: () => [ve] }) : S(ia, U({ key: "chip", closable: k.value, size: "small", text: ce.title, disabled: ce.props.disabled }, _e), null) : ve ?? p("span", { class: "v-select__selection-text" }, [ce.title, e.multiple && Y < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [St(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var re = arguments.length, ye = new Array(re), ce = 0; ce < re; ce++) ye[ce] = arguments[ce];
      return p(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ye), e.menuIcon ? S(He, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && S(g, { key: "append-icon", name: "appendInner", color: ye[0].iconColor.value }, null)]);
    } });
  }), Ct({ isFocused: V, menu: D, search: f, filteredItems: v, select: oe }, l);
} }), qC = R({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...gl({ filterKeys: ["title"] }), ...Cc(), ...Be(ro({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), XC = Z()({ name: "VAutocomplete", props: qC(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Ue(), l = Q(), i = ie(false), o = ie(true), r = ie(false), s = Q(), u = Q(), c = ie(-1), d = ie(null), { items: f, transformIn: v, transformOut: y } = dc(e), { textColorClasses: m, textColorStyles: b } = Pt(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = ao(e), x = pe(e, "search", ""), I = pe(e, "modelValue", [], (Y) => v(Y === null ? [null] : Je(Y)), (Y) => {
    const ae = y(Y);
    return e.multiple ? ae : ae[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), k = Xl(e), { filteredItems: g, getMatches: C } = hl(e, f, () => d.value ?? (o.value ? "" : x.value)), w = _(() => e.hideSelected && d.value === null ? g.value.filter((Y) => !I.value.some((ae) => ae.value === Y.value)) : g.value), T = M(() => e.closableChips && !k.isReadonly.value && !k.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), B = _(() => I.value.map((Y) => Y.props.value)), D = _(() => w.value.find((Y) => Y.type === "item" && !Y.props.disabled)), A = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && x.value === ((_a3 = D.value) == null ? void 0 : _a3.title)) && w.value.length > 0 && !o.value && !r.value;
  }), L = _(() => e.hideNoData && !w.value.length || k.isReadonly.value || k.isDisabled.value), W = pe(e, "menu"), H = _({ get: () => W.value, set: (Y) => {
    var _a3;
    W.value && !Y && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || Y && L.value || (W.value = Y);
  } }), { menuId: X, ariaExpanded: q, ariaControls: N } = xc(e, H), K = Q(), z = Q(), $ = Q(), j = kc(K, l), { onTabKeydown: oe } = wc({ groups: [{ type: "element", contentRef: z }, { type: "list", contentRef: K, displayItemsCount: () => w.value.length }, { type: "element", contentRef: $ }], onLeave: () => {
    var _a3;
    H.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function be(Y) {
    e.openOnClear && (H.value = true), x.value = "";
  }
  function ne() {
    L.value || (H.value = true);
  }
  function fe(Y) {
    L.value || (i.value && (Y.preventDefault(), Y.stopPropagation()), H.value = !H.value);
  }
  function Ie(Y) {
    var _a3, _b2;
    Y.key === "Tab" && oe(Y), ((_a3 = K.value) == null ? void 0 : _a3.$el.contains(Y.target)) && ($l(Y) || Y.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function xe(Y) {
    var _a3, _b2, _c2, _d2, _e2;
    if (k.isReadonly.value) return;
    const ae = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, _e = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(Y.key) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (H.value = true), ["Escape"].includes(Y.key) && (H.value = false), A.value && ["Enter", "Tab"].includes(Y.key) && D.value && !I.value.some((G) => {
      let { value: ve } = G;
      return ve === D.value.value;
    }) && ce(D.value), Y.key === "ArrowDown" && A.value && ((_b2 = K.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(Y.key)) {
      if (!e.multiple && E.value && I.value.length > 0 && !x.value) return ce(I.value[0], false);
      if (~c.value) {
        Y.preventDefault();
        const G = c.value;
        ce(I.value[c.value], false), c.value = G >= _e - 1 ? _e - 2 : G;
      } else Y.key === "Backspace" && !x.value && (c.value = _e - 1);
      return;
    }
    if (e.multiple) if (Y.key === "ArrowLeft") {
      if (c.value < 0 && ae && ae > 0) return;
      const G = c.value > -1 ? c.value - 1 : _e - 1;
      if (I.value[G]) c.value = G;
      else {
        const ve = ((_c2 = x.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(ve, ve);
      }
    } else if (Y.key === "ArrowRight") {
      if (c.value < 0) return;
      const G = c.value + 1;
      I.value[G] ? c.value = G : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && $l(Y) && (c.value = -1);
  }
  function ge(Y) {
    if (Ll(l.value, ":autofill") || Ll(l.value, ":-webkit-autofill")) {
      const ae = f.value.find((_e) => _e.title === Y.target.value);
      ae && ce(ae);
    }
  }
  function F() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function O() {
    var _a3;
    i.value && (o.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function J(Y) {
    i.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function se(Y) {
    r.value = false;
  }
  function le(Y) {
    (Y == null || Y === "" && !e.multiple && !E.value) && (I.value = []);
  }
  function re(Y) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(Y.relatedTarget)) && (i.value = true);
  }
  const ye = ie(false);
  function ce(Y) {
    let ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!Y || Y.props.disabled)) if (e.multiple) {
      const _e = I.value.findIndex((ve) => (e.valueComparator || It)(ve.value, Y.value)), G = ae ?? !~_e;
      if (~_e) {
        const ve = G ? [...I.value, Y] : [...I.value];
        ve.splice(_e, 1), I.value = ve;
      } else G && (I.value = [...I.value, Y]);
      e.clearOnSelect && (x.value = "");
    } else {
      const _e = ae !== false;
      I.value = _e ? [Y] : [], d.value = o.value ? "" : x.value ?? "", x.value = _e && !E.value ? Y.title : "", Te(() => {
        H.value = false, o.value = true;
      });
    }
  }
  return ue(i, (Y, ae) => {
    var _a3;
    Y !== ae && (Y ? (ye.value = true, x.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), o.value = true, Te(() => ye.value = false)) : (!e.multiple && x.value == null && (I.value = []), H.value = false, !o.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
  }), ue(x, (Y) => {
    !i.value || ye.value || (Y && (H.value = true), o.value = !Y);
  }), ue(H, (Y) => {
    if (!e.hideSelected && Y && I.value.length && o.value) {
      const ae = w.value.findIndex((_e) => I.value.some((G) => _e.value === G.value));
      Ye && window.requestAnimationFrame(() => {
        var _a3;
        ae >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(ae));
      });
    }
    Y && (d.value = null);
  }), ue(f, (Y, ae) => {
    H.value || i.value && !ae.length && Y.length && (H.value = true);
  }), te(() => {
    const Y = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ae = I.value.length > 0, _e = Rn.filterProps(e), G = { search: x, filteredItems: g.value };
    return S(Rn, U({ ref: l }, _e, { modelValue: x.value, "onUpdate:modelValue": [(ve) => x.value = ve, le], focused: i.value, "onUpdate:focused": (ve) => i.value = ve, validationValue: I.externalValue, counterValue: V.value, dirty: ae, onChange: ge, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": H.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: k.isReadonly.value, placeholder: ae ? void 0 : e.placeholder, "onClick:clear": be, "onMousedown:control": ne, onKeydown: xe, onBlur: re, "aria-expanded": q.value, "aria-controls": N.value }), { ...n, default: (ve) => {
      let { id: ke } = ve;
      return p(he, null, [S(Wl, U({ id: X.value, ref: s, modelValue: H.value, "onUpdate:modelValue": (we) => H.value = we, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: F, onAfterLeave: O }, e.menuProps), { default: () => [S(Ta, { onFocusin: J, onKeydown: Ie }, { default: () => [n["menu-header"] && p("header", { ref: z }, [n["menu-header"](G)]), Y && S(Hl, U({ key: "autocomplete-list", ref: K, filterable: true, selected: B.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (we) => we.preventDefault(), onFocusout: se, tabindex: "-1", selectable: !!w.value.length, "aria-live": "polite", "aria-labelledby": `${ke.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, j, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !w.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? S(bn, { key: "no-data", title: a(e.noDataText) }, null)), S(kr, { ref: u, renderless: true, items: w.value, itemKey: "value" }, { default: (we) => {
          var _a4, _b3, _c3;
          let { item: Ve, index: Me, itemRef: Re } = we;
          const Fe = U(Ve.props, { ref: Re, key: Ve.value, active: A.value && Ve === D.value ? true : void 0, onClick: () => ce(Ve, null), "aria-posinset": Me + 1, "aria-setsize": w.value.length });
          return Ve.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ve.raw, index: Me })) ?? S(sn, U(Ve.props, { key: `divider-${Me}` }), null) : Ve.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ve.raw, index: Me })) ?? S(Zl, U(Ve.props, { key: `subheader-${Me}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ve, index: Me, props: Fe })) ?? S(bn, U(Fe, { role: "option" }), { prepend: (ot) => {
            let { isSelected: Ze } = ot;
            return p(he, null, [e.multiple && !e.hideSelected ? S(Vn, { key: Ve.value, modelValue: Ze, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (en) => en.preventDefault() }, null) : void 0, Ve.props.prependAvatar && S(cn, { image: Ve.props.prependAvatar }, null), Ve.props.prependIcon && S(He, { icon: Ve.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return o.value ? Ve.title : pc("v-autocomplete", Ve.title, (_a5 = C(Ve)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: $ }, [n["menu-footer"](G)])] })] }), I.value.map((we, Ve) => {
        function Me(Ze) {
          Ze.stopPropagation(), Ze.preventDefault(), ce(we, false);
        }
        const Re = U(ia.filterProps(we.props), { "onClick:close": Me, onKeydown(Ze) {
          Ze.key !== "Enter" && Ze.key !== " " || (Ze.preventDefault(), Ze.stopPropagation(), Me(Ze));
        }, onMousedown(Ze) {
          Ze.preventDefault(), Ze.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Fe = P.value ? !!n.chip : !!n.selection, ot = Fe ? sr(P.value ? n.chip({ item: we, index: Ve, props: Re }) : n.selection({ item: we, index: Ve })) : void 0;
        if (!(Fe && !ot)) return p("div", { key: we.value, class: ee(["v-autocomplete__selection", Ve === c.value && ["v-autocomplete__selection--selected", m.value]]), style: me(Ve === c.value ? b.value : {}) }, [P.value ? n.chip ? S(De, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: we.title } } }, { default: () => [ot] }) : S(ia, U({ key: "chip", closable: T.value, size: "small", text: we.title, disabled: we.props.disabled }, Re), null) : ot ?? p("span", { class: "v-autocomplete__selection-text" }, [we.title, e.multiple && Ve < I.value.length - 1 && p("span", { class: "v-autocomplete__selection-comma" }, [St(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ve = arguments.length, ke = new Array(ve), we = 0; we < ve; we++) ke[we] = arguments[we];
      return p(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ke), e.menuIcon ? S(He, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: rr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && S(h, { key: "append-icon", name: "appendInner", color: ke[0].iconColor.value }, null)]);
    } });
  }), Ct({ isFocused: i, isPristine: o, menu: H, search: x, filteredItems: g, select: ce }, l);
} }), ZC = R({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ce, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...Se(), ...jn({ location: "top end" }), ...Qe(), ...Ae(), ...Ne(), ...ua({ transition: "scale-rotate-transition" }), ...ht() }, "VBadge"), _h = Z()({ name: "VBadge", inheritAttrs: false, props: ZC(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = ze(() => e.color), { roundedClasses: l } = it(e), { t: i } = Ue(), { textColorClasses: o, textColorStyles: r } = Pt(() => e.textColor), { themeClasses: s } = fr(), { locationStyles: u } = Ma(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = yt(e);
  return te(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, y] = _s(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return S(e.tag, U({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, y, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [p("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), S(Yt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [Xe(p("span", U({ class: ["v-badge__badge", s.value, n.value, l.value, o.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": i(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? S(He, { icon: e.icon }, null) : f]), [[In, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), JC = R({ color: String, density: String, ...Se() }, "VBannerActions"), Vh = Z()({ name: "VBannerActions", props: JC(), setup(e, t) {
  let { slots: n } = t;
  return st({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), te(() => {
    var _a3;
    return p("div", { class: ee(["v-banner-actions", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ih = sa("v-banner-text"), QC = R({ avatar: String, bgColor: String, color: String, icon: Ce, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...$t(), ...Se(), ...ut(), ...ht(), ...sl({ mobile: null }), ...bt(), ...jn(), ...Kl(), ...Qe(), ...Ae(), ...Ne() }, "VBanner"), e1 = Z()({ name: "VBanner", props: QC(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = ze(() => e.bgColor), { borderClasses: i } = Gt(e), { densityClasses: o } = Mt(e), { displayClasses: r, mobile: s } = dn(e), { dimensionStyles: u } = yt(e), { elevationClasses: c } = xt(e), { locationStyles: d } = Ma(e), { positionClasses: f } = Gl(e), { roundedClasses: v } = it(e), { themeClasses: y } = We(e), m = M(() => e.color), b = M(() => e.density);
  st({ VBannerActions: { color: m, density: b } }), te(() => {
    const h = !!(e.text || n.text), x = !!(e.avatar || e.icon), I = !!(x || n.prepend);
    return S(e.tag, { class: ee(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, y.value, a.value, i.value, o.value, r.value, c.value, f.value, v.value, e.class]), style: me([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && p("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? S(De, { key: "prepend-defaults", disabled: !x, defaults: { VAvatar: { color: m.value, density: b.value, icon: e.icon, image: e.avatar } } }, n.prepend) : S(cn, { key: "prepend-avatar", color: m.value, density: b.value, icon: e.icon, image: e.avatar }, null)]), p("div", { class: "v-banner__content" }, [h && S(Ih, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && S(Vh, { key: "actions" }, n.actions)];
    } });
  });
} }), t1 = R({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...$t(), ...Se(), ...ut(), ...bt(), ...Qe(), ...ul({ name: "bottom-navigation" }), ...Ae({ tag: "header" }), ...fl({ selectedClass: "v-btn--selected" }), ...Ne() }, "VBottomNavigation"), n1 = Z()({ name: "VBottomNavigation", props: t1(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = fr(), { borderClasses: l } = Gt(e), { backgroundColorClasses: i, backgroundColorStyles: o } = ze(() => e.bgColor), { densityClasses: r } = Mt(e), { elevationClasses: s } = xt(e), { roundedClasses: u } = it(e), { ssrBootStyles: c } = dl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = pe(e, "active", e.active), { layoutItemStyles: v } = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: M(() => "bottom"), layoutSize: M(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: M(() => e.absolute) });
  return Ba(e, lc), st({ VBtn: { baseColor: M(() => e.baseColor), color: M(() => e.color), density: M(() => e.density), stacked: M(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), te(() => S(e.tag, { class: ee(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, i.value, l.value, r.value, s.value, u.value, e.class]), style: me([o.value, v.value, { height: de(d.value) }, c.value, e.style]) }, { default: () => [n.default && p("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Ph = R({ fullscreen: Boolean, scrollable: Boolean, ...Be(io({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: vr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), Ys = Z()({ name: "VDialog", props: Ph(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pe(e, "modelValue"), { scopeId: i } = ml(), o = Q();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = o.value) == null ? void 0 : _a3.contentEl) && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return ue(l, async (u) => {
    var _a3;
    u || (await Te(), (_a3 = o.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), te(() => {
    const u = Nn.filterProps(e), c = U({ "aria-haspopup": "dialog" }, e.activatorProps), d = U({ tabindex: -1 }, e.contentProps);
    return S(Nn, U({ ref: o, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, i), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), y = 0; y < f; y++) v[y] = arguments[y];
      return S(De, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), Ct({}, o);
} }), a1 = R({ inset: Boolean, ...Ph({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), l1 = Z()({ name: "VBottomSheet", props: a1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue");
  return te(() => {
    const l = Ys.filterProps(e);
    return S(Ys, U(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (i) => a.value = i, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), i1 = R({ divider: [Number, String], ...Se() }, "VBreadcrumbsDivider"), Th = Z()({ name: "VBreadcrumbsDivider", props: i1(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return p("li", { "aria-hidden": "true", class: ee(["v-breadcrumbs-divider", e.class]), style: me(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), o1 = R({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...Se(), ...Zt(ht(), ["width", "maxWidth"]), ...no(), ...Ae({ tag: "li" }) }, "VBreadcrumbsItem"), Ah = Z()({ name: "VBreadcrumbsItem", props: o1(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = to(e, a), i = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: o } = yt(e), { textColorClasses: r, textColorStyles: s } = Pt(() => i.value ? e.activeColor : e.color);
  return te(() => S(e.tag, { class: ee(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": i.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: i.value && e.activeClass }, r.value, e.class]), style: me([s.value, o.value, e.style]), "aria-current": i.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? p("a", U({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), r1 = R({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ce, items: { type: Array, default: () => [] }, ...Se(), ...ut(), ...Qe(), ...Ae({ tag: "ul" }) }, "VBreadcrumbs"), s1 = Z()({ name: "VBreadcrumbs", props: r1(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = ze(() => e.bgColor), { densityClasses: i } = Mt(e), { roundedClasses: o } = it(e);
  st({ VBreadcrumbsDivider: { divider: M(() => e.divider) }, VBreadcrumbsItem: { activeClass: M(() => e.activeClass), activeColor: M(() => e.activeColor), color: M(() => e.color), disabled: M(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return te(() => {
    const s = !!(n.prepend || e.icon);
    return S(e.tag, { class: ee(["v-breadcrumbs", a.value, i.value, o.value, e.class]), style: me([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && p("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? S(De, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : S(He, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return p(he, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? S(Ah, U({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && S(Th, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), u1 = R({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...$t(), ...Se(), ...bt(), ...Fg(), ...Qe(), ...Ae({ tag: "button" }), ...Ne(), ...vn({ variant: "flat" }) }, "VIconBtn"), Dh = Z()({ name: "VIconBtn", props: u1(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = pe(e, "active"), { themeClasses: i } = We(e), { borderClasses: o } = Gt(e), { elevationClasses: r } = xt(e), { roundedClasses: s } = it(e), { colorClasses: u, colorStyles: c, variantClasses: d } = da(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return te(() => {
    const y = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, x = e.height ?? h, I = e.width ?? h, { iconSize: V } = Lg(e, () => new Map(e.iconSizes).get(m)), k = { icon: y, size: V.value, color: e.iconColor, opacity: e.opacity };
    return S(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ee([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, i.value, u.value, o.value, r.value, s.value, d.value, e.class]), style: me([{ "--v-icon-btn-rotate": de(e.rotate, "deg"), "--v-icon-btn-height": de(x), "--v-icon-btn-width": de(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ca(!e.hideOverlay, "v-icon-btn"), p("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && y ? S(He, U({ key: "content-icon" }, k), null) : S(De, { key: "content-defaults", disabled: !y, defaults: { VIcon: { ...k } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ut(e.text);
      } })]), !!e.loading && p("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? S(Ia, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function c1(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Eh = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, Mh = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, d1 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], f1 = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], v1 = 28, m1 = 31, Vc = 12, Bh = 1, wr = 1, pa = 7, Lf = 60, g1 = 59, h1 = 1440, y1 = 24, b1 = 23, S1 = 0, k1 = 1e4, w1 = 100, p1 = 100, x1 = 1e4;
function C1(e, t, n) {
  const a = Jt(e);
  return Rh(a, t[0], Nh), wn(a), n && el(a, n, a.hasTime), a;
}
function _1(e, t, n) {
  const a = Jt(e);
  return Rh(a, t[t.length - 1]), wn(a), n && el(a, n, a.hasTime), a;
}
function Fh(e) {
  const t = Jt(e);
  return t.day = wr, pr(t), wn(t), t;
}
function Lh(e) {
  const t = Jt(e);
  return t.day = Pc(t.year, t.month), pr(t), wn(t), t;
}
function Cl(e) {
  return isFinite(parseInt(e));
}
function V1(e) {
  return typeof e == "number" && isFinite(e) || !!Mh.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function $f(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = Mh.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Dl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!Eh.exec(e) || e instanceof Date;
}
function Qn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const i = Ic(e);
    return n && el(i, n, i.hasTime), i;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = Eh.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return pr(l), wn(l), n && el(l, n, l.hasTime), l;
}
function Ic(e) {
  return wn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function pt(e) {
  return e.year * k1 + e.month * w1 + e.day;
}
function Us(e) {
  return e.hour * p1 + e.minute;
}
function Da(e) {
  return pt(e) * x1 + Us(e);
}
function el(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = pt(t), l = pt(e), i = a === l;
  return e.hasTime && n && i && (a = Us(t), l = Us(e), i = a === l), e.past = l < a, e.present = i, e.future = l > a, e;
}
function Of(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function Nf(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = b1, e.minute = g1, e.time = Oh(e))), e;
}
function $h(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, Ks(e, t), wn(e), n && el(e, n, true), e;
}
function pr(e) {
  return e.weekday = I1(e), e;
}
function wn(e) {
  return e.time = Oh(e), e.date = P1(e), e;
}
function I1(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Vc + 1, l = t(e.year / 100), i = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + i + t(i / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Pc(e, t) {
  return c1(e) ? f1[t] : d1[t];
}
function Jt(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: i, weekday: o, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: i, weekday: o, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function Ga(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function P1(e) {
  let t = `${Ga(e.year, 4)}-${Ga(e.month, 2)}`;
  return e.hasDay && (t += `-${Ga(e.day, 2)}`), t;
}
function Oh(e) {
  return e.hasTime ? `${Ga(e.hour, 2)}:${Ga(e.minute, 2)}` : "";
}
function Ks(e, t) {
  for (e.minute += t; e.minute >= Lf; ) e.minute -= Lf, e.hour++, e.hour >= y1 && (xa(e), e.hour = S1);
  return e;
}
function xa(e) {
  return e.day++, e.weekday = (e.weekday + 1) % pa, e.day > v1 && e.day > Pc(e.year, e.month) && (e.day = wr, e.month++, e.month > Vc && (e.month = Bh, e.year++)), e;
}
function Nh(e) {
  return e.day--, e.weekday = (e.weekday + 6) % pa, e.day < wr && (e.month--, e.month < Bh && (e.year--, e.month = Vc), e.day = Pc(e.year, e.month)), e;
}
function Ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xa, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function T1(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, i = (t.hour - e.hour) * 60, o = t.minute - e.minute;
  return n + a + l + i + o;
}
function Rh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xa, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function A1(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < pa; a++) {
    let l = 1;
    for (let i = 1; i < pa; i++) {
      const o = (a + i) % pa;
      if (n[o]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function Gs(e) {
  const t = `${Ga(e.hour, 2)}:${Ga(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Uo(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const o = pt(t), r = [];
  let s = Jt(e), u = 0, c = u === o;
  if (o < pt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < i) && r.length < l; ) {
    if (u = pt(s), c = c || u === o, a[s.weekday] === 0) {
      s = xa(s);
      continue;
    }
    const d = Jt(s);
    wn(d), el(d, n), r.push(d), s = Ha(s, xa, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function D1(e, t, n, a, l) {
  const i = [];
  for (let o = 0; o < a; o++) {
    const r = t + o * n, s = Jt(e);
    i.push($h(s, r, l));
  }
  return i;
}
function yi(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(Gs(a));
    } catch {
      return "";
    }
  };
}
function E1(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > pa || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const i = t[l];
      if (!isFinite(i) || i < 0 || i >= pa) return false;
      if (l > 0) {
        const o = i - t[l - 1];
        if (o < 0) {
          if (a) return false;
          a = true;
        } else if (o === 0) return false;
      }
      if (n[i]) return false;
      n[i] = true;
    }
    return true;
  }
  return false;
}
function M1(e) {
  const t = Vt({ now: Qn("0000-00-00 00:00", true), today: Qn("0000-00-00", true) }), n = _(() => e.now && Dl(e.now) ? Qn(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Ic(/* @__PURE__ */ new Date());
  }
  function i(s, u) {
    s.date !== u.date && (u.year = s.year, u.month = s.month, u.day = s.day, u.weekday = s.weekday, u.date = s.date);
  }
  function o(s, u) {
    s.time !== u.time && (u.hour = s.hour, u.minute = s.minute, u.time = s.time);
  }
  function r() {
    const s = n.value || l();
    i(s, t.now), o(s, t.now), i(s, t.today);
  }
  return ue(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: i, updateTime: o };
}
const xr = R({ start: { type: [String, Number, Date], validate: Dl, default: () => Ic(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Dl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: E1 }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Dl }, type: { type: String, default: "month" } }, "VCalendar-base");
function Tc(e) {
  const { times: t, updateTimes: n } = M1({ now: e.now }), a = lg(e), l = rl(), i = _(() => e.type === "month" ? Fh(Qn(e.start, true)) : Qn(e.start, true)), o = _(() => {
    const V = i.value, k = e.end && Qn(e.end) || V, g = Da(k) < Da(V) ? V : k;
    return e.type === "month" ? Lh(g) : g;
  }), r = _(() => Dl(e.modelValue) ? Qn(e.modelValue, true) : i.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), k = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((g) => g >= k), ...V.toSorted().filter((g) => g < k)];
  }), u = _(() => {
    const V = r.value, k = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [V.weekday];
      case "4day":
        return [V.weekday, (V.weekday + 1) % 7, (V.weekday + 2) % 7, (V.weekday + 3) % 7];
      case "category":
        return Array.from({ length: k }, (g, C) => (V.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = _(() => A1(s.value)), d = _(() => Uo(i.value, o.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : yi(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : yi(a.current.value, (V, k) => ({ timeZone: "UTC", weekday: k ? "short" : "long" })));
  function y(V) {
    return wg(V);
  }
  function m(V) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": k };
  }
  function b(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return C1(V, s.value, t.today);
  }
  function x(V) {
    return _1(V, s.value, t.today);
  }
  function I(V) {
    return yi(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: i, parsedEnd: o, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: y, getRelativeClasses: m, getWeekNumber: b, getStartOfWeek: h, getEndOfWeek: x, getFormatter: I, updateTimes: n };
}
const Hh = R({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Cl }, intervalWidth: { type: [Number, String], default: 60, validate: Cl }, intervalMinutes: { type: [Number, String], default: 60, validate: Cl }, firstInterval: { type: [Number, String], default: 0, validate: Cl }, firstTime: { type: [Number, String, Object], validate: V1 }, intervalCount: { type: [Number, String], default: 24, validate: Cl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function Wh(e) {
  const t = Tc(e), n = ie(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), i = _(() => parseInt(String(e.intervalCount || 24))), o = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => $f(e.firstTime)), s = _(() => {
    const k = r.value;
    return k !== false && k >= 0 && k <= h1 ? k : a.value * l.value;
  }), u = _(() => i.value * o.value), c = _(() => Uo(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const k = c.value, g = s.value, C = l.value, w = i.value, T = t.times.now;
    return k.map((P) => D1(P, g, C, w, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : yi(t.locale.current.value, (k, g) => g ? k.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(k) {
    const g = d.value[0][0];
    return !(g.hour === k.hour && g.minute === k.minute);
  }
  function y(k) {
  }
  function m(k, g) {
    const C = Jt(g), w = k.currentTarget.getBoundingClientRect(), T = s.value, P = k, E = k, B = P.changedTouches || P.touches, A = ((B && B[0] ? B[0].clientY : E.clientY) - w.top) / o.value, L = Math.floor(A * l.value), W = T + L;
    return $h(C, W, t.times.now);
  }
  function b(k) {
    const g = Jt(k);
    return g.timeToY = I, g.timeDelta = V, g.minutesToPixels = x, g.week = c.value, g.intervalRange = [s.value, s.value + i.value * l.value], g;
  }
  function h(k) {
    const g = I(k), C = n.value;
    return g === false || !C ? false : (C.scrollTop = g, true);
  }
  function x(k) {
    return k / l.value * o.value;
  }
  function I(k) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = g !== false;
    let T = V(k, typeof g != "boolean" ? g : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function V(k, g) {
    let C = $f(k);
    if (C === false) return false;
    const w = i.value * l.value;
    if (g && typeof k == "object" && "day" in k) {
      const P = pt(k), E = pt(g);
      C += (P - E) * w;
    }
    const T = s.value;
    return (C - T) / w;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: i, parsedIntervalHeight: o, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: y, getTimestampAtEvent: m, getSlotScope: b, scrollToTime: h, minutesToPixels: x, timeToY: I, timeDelta: V };
}
function B1(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function F1(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Ni = { mounted: B1, unmounted: F1 }, ri = Kt({ name: "VCalendarDaily", directives: { vResize: Ni }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...xr(), ...Hh() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Q(0), i = Q(), o = Wh(e);
  function r() {
    Te(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return o.scrollAreaRef.value && i.value ? o.scrollAreaRef.value.offsetWidth - i.value.offsetWidth : 0;
  }
  function c() {
    return p("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const D = de(e.intervalWidth);
    return p("div", { class: "v-calendar-daily__intervals-head", style: { width: D } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return o.days.value.map(v);
  }
  function v(D, A) {
    const L = rn(a, ":day", (W) => ({ nativeEvent: W, ...o.getSlotScope(D) }));
    return p("div", U({ key: D.date, class: ["v-calendar-daily_head-day", o.getRelativeClasses(D)] }, L), [m(D), b(D), y(D, A)]);
  }
  function y(D, A) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: o.days.value, ...D, index: A })) ?? [];
  }
  function m(D) {
    const A = D.present ? e.color : void 0;
    return p("div", U(o.getColorProps({ text: A }), { class: "v-calendar-daily_head-weekday" }), [o.weekdayFormatter.value(D, e.shortWeekdays)]);
  }
  function b(D) {
    var _a3;
    return p("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, D)) ?? h(D)]);
  }
  function h(D) {
    const A = rn(a, ":date", (L) => ({ nativeEvent: L, ...D }));
    return S(Dh, U({ active: D.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": rr }, A), { default: () => [o.dayFormatter.value(D, false)] });
  }
  function x() {
    return p("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return p("div", { ref: o.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return p("div", { ref: i, class: "v-calendar-daily__pane", style: { height: de(o.bodyHeight.value) } }, [k()]);
  }
  function k() {
    var _a3;
    return p("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? g()]);
  }
  function g() {
    return o.days.value.map((D, A) => {
      const L = rn(a, ":time", (W) => ({ nativeEvent: W, ...o.getSlotScope(o.getTimestampAtEvent(W, D)) }));
      return p("div", U({ key: D.date, class: ["v-calendar-daily__day", o.getRelativeClasses(D)] }, L), [w(A), C(D)]);
    });
  }
  function C(D) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, o.getSlotScope(D))) ?? [];
  }
  function w(D) {
    return o.intervals.value[D].map(T);
  }
  function T(D) {
    var _a3;
    const A = de(e.intervalHeight), L = e.intervalStyle || o.intervalStyleDefault;
    return p("div", { class: "v-calendar-daily__day-interval", key: D.time, style: me([{ height: A }, L(D)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, o.getSlotScope(D))]);
  }
  function P() {
    const D = de(e.intervalWidth), A = rn(a, ":interval", (L) => ({ nativeEvent: L, ...o.getTimestampAtEvent(L, o.parsedStart.value) }));
    return p("div", U({ class: "v-calendar-daily__intervals-body", style: { width: D } }, A), [E()]);
  }
  function E() {
    return o.intervals.value.length ? o.intervals.value[0].map(B) : null;
  }
  function B(D) {
    const A = de(e.intervalHeight), L = e.shortIntervals, X = (e.showIntervalLabel || o.showIntervalLabelDefault)(D) ? o.intervalFormatter.value(D, L) : void 0;
    return p("div", { key: D.time, class: "v-calendar-daily__interval", style: { height: A } }, [p("div", { class: "v-calendar-daily__interval-text" }, [X])]);
  }
  return kt(r), te(() => Xe(p("div", { class: ee(["v-calendar-daily", a.class]), onDragstart: (D) => D.preventDefault() }, [e.hideHeader ? void 0 : c(), x()]), [[Ni, s, void 0, { quiet: true }]])), { ...o, scrollPush: l, pane: i, init: r, onResize: s, getScrollPush: u };
} });
function L1(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function zh(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : L1(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const $1 = Kt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...xr(), ...Hh() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Wh(e), i = _(() => zh(e.categories, e.categoryText));
  function o(b, h) {
    const x = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...b, category: x };
  }
  function r(b) {
    return p("div", { class: "v-calendar-category__columns" }, [i.value.map((h) => s(b, o(b, h)))]);
  }
  function s(b, h) {
    var _a3, _b2;
    const x = typeof h.category == "object" ? h.category.categoryName : h.category, I = rn(a, ":dayCategory", () => o(l.getSlotScope(b) || b, h.category));
    return p("div", U({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(x), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(b) {
    return p("div", { class: "v-calendar-category__category" }, [b === null ? e.categoryForInvalid : b]);
  }
  function c() {
    const b = [];
    return l.days.value.forEach((h, x) => {
      const I = new Array(i.value.length || 1);
      I.fill(h), b.push(...I.map((V, k) => d(V, x, k)));
    }), b;
  }
  function d(b, h, x) {
    const I = i.value[x], V = rn(a, ":time", (k) => l.getSlotScope(l.getTimestampAtEvent(k, b)));
    return p("div", U({ key: b.date + "-" + x, class: ["v-calendar-daily__day", l.getRelativeClasses(b)] }, V), [f(h, I), y(b, I)]);
  }
  function f(b, h) {
    return l.intervals.value[b].map((x) => v(x, h));
  }
  function v(b, h) {
    var _a3;
    const x = de(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return p("div", { key: b.time, class: "v-calendar-daily__day-interval", style: me([{ height: x }, I({ ...b, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, o(l.getSlotScope(b), h))]);
  }
  function y(b, h) {
    return p("div", { class: "v-calendar-category__columns" }, [m(b, h)]);
  }
  function m(b, h) {
    var _a3;
    const x = rn(a, ":timeCategory", (I) => o(l.getSlotScope(l.getTimestampAtEvent(I, b)), h));
    return p("div", U({ class: "v-calendar-category__column" }, x), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, o(l.getSlotScope(b), h))]);
  }
  return te(() => S(ri, U({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: i };
} }), Rf = Kt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Cl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...xr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Tc(e), i = fr(), o = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const k = o.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return Uo(g, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, k);
  }), s = _(() => {
    const k = l.times.today, g = l.getStartOfWeek(k), C = l.getEndOfWeek(k);
    return Uo(g, C, k, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : yi(l.locale.current.value, (k, g) => ({ timeZone: "UTC", month: g ? "short" : "long" })));
  function c(k) {
    const g = pt(k);
    return g < pt(l.parsedStart.value) || g > pt(l.parsedEnd.value);
  }
  function d() {
    return p("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const k = s.value.map(v);
    return e.showWeek && k.unshift(p("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), k;
  }
  function v(k, g) {
    const C = c(r.value[g]), w = k.present ? e.color : void 0;
    return p("div", U(l.getColorProps({ text: w }), { key: k.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(k, C)], role: "columnheader" }), [l.weekdayFormatter.value(k, e.shortWeekdays)]);
  }
  function y() {
    const k = r.value, g = l.parsedWeekdays.value.length, C = [];
    for (let w = 0; w < k.length; w += g) C.push(m(k.slice(w, w + g), b(k[w])));
    return C;
  }
  function m(k, g) {
    const C = k.map((w, T) => x(w, T, k));
    return e.showWeek && C.unshift(h(g)), p("div", { key: k[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function b(k) {
    return l.getWeekNumber(k);
  }
  function h(k) {
    return p("div", { class: "v-calendar-weekly__weeknumber" }, [p("small", null, [String(k)])]);
  }
  function x(k, g, C) {
    var _a3;
    const w = c(k), T = rn(a, ":day", (P) => ({ nativeEvent: P, ...k }));
    return p("div", U({ key: k.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(k, w)], role: "cell" }, T), [I(k), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: w, index: g, week: C, ...k })]);
  }
  function I(k) {
    var _a3;
    return p("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, k)) ?? V(k)]);
  }
  function V(k) {
    const g = k.day === 1 && e.showMonthOnFirst, C = rn(a, ":date", (w) => ({ nativeEvent: w, ...k }));
    return S(Dh, U({ active: k.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": rr }, C), { default: () => [g ? u.value(k, e.shortMonths) + " " + l.dayFormatter.value(k, false) : l.dayFormatter.value(k, false)] });
  }
  return te(() => p("div", { class: ee(["v-calendar-weekly", i.themeClasses.value]), onDragstart: (k) => k.preventDefault() }, [e.hideHeader ? void 0 : d(), y()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), O1 = 864e5;
function jh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function pn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function Hf(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Yh(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Uh(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Kh(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + O1, e.endTimestampIdentifier)];
}
function N1(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    let o = false;
    if (pn(t, n, i.start, i.end, a)) for (let r = 0; r < i.visuals.length; r++) {
      const s = i.visuals[r], [u, c] = a ? Yh(s.event) : Uh(s.event);
      if (pn(t, n, u, c, a)) {
        o = true;
        break;
      }
    }
    if (!o) return l;
  }
  return -1;
}
function Gh(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || i) && t.reset();
    const o = Da(n), r = jh(a, o);
    return r.forEach((s) => {
      const [u, c] = l ? Yh(s.event) : Uh(s.event);
      t.groups.length > 0 && !pn(u, c, t.min, t.max, l) && (Hf(t.groups), t.reset());
      let d = N1(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), Hf(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Wf = 100, R1 = (e, t, n) => {
  const a = Gh(t);
  return (l, i, o, r) => {
    const s = a.getVisuals(l, i, o, r);
    return o && s.forEach((u) => {
      u.left = u.column * Wf / u.columnCount, u.width = Wf / u.columnCount;
    }), s;
  };
}, bo = 100, H1 = 5, W1 = 1.7, z1 = (e, t, n) => {
  const a = Gh(t);
  return (l, i, o, r) => {
    if (!o) return a.getVisuals(l, i, o, r);
    const s = Da(l), u = jh(i, s), c = X1(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const y = Z1(v, s), m = K1(y, f);
        if (m === false) {
          const b = G1(y, f);
          b && (y.parent = b, y.sibling = pn(y.start, y.end, b.start, Vo(b.start, n)), y.index = b.index + 1, b.children.push(y));
        } else {
          const [b] = zf(y, f, m - 1, m - 1), h = zf(y, f, m + 1, m + f.length, true);
          y.children = h, y.index = m, b && (y.parent = b, y.sibling = pn(y.start, y.end, b.start, Vo(b.start, n)), b.children.push(y));
          for (const x of h) x.parent === b && (x.parent = y), x.index - y.index <= 1 && y.sibling && pn(y.start, Vo(y.start, n), x.start, x.end) && (x.sibling = true);
        }
        f.push(y);
      }
      j1(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function j1(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, i = qh(n) + 1, o = l ? l.visual.left : 0, r = bo - o, s = Math.min(H1, bo / i), u = Y1(n, e), c = r / (i - n.index + 1), d = r / (i - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? o + c : o + s), a.width = q1(n, e, t) ? bo - a.left : Math.min(bo - a.left, d * W1);
  }
}
function Y1(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, i) => Math.min(l, i.index), n) - e.index;
}
function U1(e, t) {
  const n = [];
  for (const a of t) pn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function K1(e, t) {
  const n = U1(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function zf(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const i = [];
  for (const o of t) o.index >= n && o.index <= a && pn(e.start, e.end, o.start, o.end) && i.push(o);
  if (l && i.length > 0) {
    const o = i.reduce((r, s) => Math.min(r, s.index), i[0].index);
    return i.filter((r) => r.index === o);
  }
  return i;
}
function G1(e, t) {
  let n = null;
  for (const a of t) pn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function q1(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && pn(e.start, Vo(e.start, n), a.start, a.end)) return false;
  return true;
}
function X1(e, t) {
  const n = [];
  for (const a of e) {
    const [l, i] = Kh(a.event, t);
    let o = false;
    for (const r of n) if (pn(l, i, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, i), o = true;
      break;
    }
    o || n.push({ start: l, end: i, visuals: [a] });
  }
  return n;
}
function Z1(e, t) {
  const [n, a] = Kh(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function qh(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = qh(n);
    a > t && (t = a);
  }
  return t;
}
function Vo(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), i = a % 60;
  return e - n + l * 100 + i;
}
const Xh = { stack: z1, column: R1 };
function J1(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const o = e[n], r = e[a], s = Qn(o, true), u = r ? Qn(r, true) : s, c = Of(o) ? Nf(s, l) : s, d = Of(r) ? Nf(u, l) : u, f = pt(c), v = Da(c), y = pt(d), m = c.hasTime ? 0 : 2359, b = Da(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: y, endTimestampIdentifier: b, allDay: h, index: t, category: i };
}
function Ac(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function Q1(e, t, n) {
  if (n) {
    const a = Ks(Jt(t), n[0]), l = Ks(Jt(t), n[1]), i = e.startTimestampIdentifier < Da(l), o = e.endTimestampIdentifier > Da(a);
    return i && o;
  }
  return Ac(e, pt(t));
}
function e_(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function jf(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Ac(e, n);
}
function t_(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const n_ = 100, a_ = 95, l_ = R({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in Xh || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function i_(e, t, n) {
  const a = Tc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), i = _(() => e.type === "category"), o = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (A) => !!A[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (A) => A[e.eventCategory]), s = _(() => e.events ? e.events.map((A, L) => J1(A, L, e.eventStart || "", e.eventEnd || "", o.value(A), i.value ? r.value(A) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (A, L) => A.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Xh[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function y(A) {
    return typeof e.eventColor == "function" ? e.eventColor(A) : A.color || e.eventColor;
  }
  const m = Q([]);
  function b() {
    if (l.value || !e.eventMore) return;
    const A = e.eventHeight || 0, L = h();
    for (const W in L) {
      const { parent: H, events: X, more: q } = L[W];
      if (!q) break;
      const N = H.getBoundingClientRect(), K = X.length - 1, z = X.map((j) => ({ event: j, bottom: j.getBoundingClientRect().bottom })).sort((j, oe) => j.bottom - oe.bottom);
      let $ = 0;
      for (let j = 0; j <= K; j++) {
        const oe = z[j].bottom;
        (j === K ? oe > N.bottom : oe + A > N.bottom) && (z[j].event.style.display = "none", $++);
      }
      $ ? (q.style.display = "", q.innerHTML = a.locale.t(e.eventMoreText, $)) : q.style.display = "none";
    }
  }
  function h() {
    const A = {}, L = m.value;
    return !L || !L.length || L.forEach((W) => {
      const H = W.getAttribute("data-date");
      W.parentElement && H && (H in A || (A[H] = { parent: W.parentElement, more: null, events: [] }), W.getAttribute("data-more") ? A[H].more = W : (A[H].events.push(W), W.style.display = ""));
    }), A;
  }
  function x(A, L) {
    let { event: W } = A;
    const H = e.eventHeight || 0, X = e.eventMarginBottom || 0, q = pt(L), N = L.week, K = q === W.startIdentifier;
    let z = q === W.endIdentifier, $ = a_;
    if (!i.value) for (let oe = L.index + 1; oe < N.length; oe++) {
      const be = pt(N[oe]);
      if (W.endIdentifier >= be) $ += n_, z = z || be === W.endIdentifier;
      else {
        z = true;
        break;
      }
    }
    return V(W, { eventParsed: W, day: L, start: K, end: z, timed: false }, false, { class: ["v-event", { "v-event-start": K, "v-event-end": z }], style: { height: `${H}px`, width: `${$}%`, marginBottom: `${X}px` }, "data-date": L.date });
  }
  function I(A, L) {
    let { event: W, left: H, width: X } = A;
    const q = L.timeDelta(W.start, L), N = L.timeDelta(W.end, L);
    if (N === false || q === false || N < 0 || q >= 1 || e_(W, L)) return false;
    const K = pt(L), z = W.startIdentifier >= K, $ = W.endIdentifier > K, j = L.timeToY(W.start, L), oe = L.timeToY(W.end, L), be = Math.max(e.eventHeight || 0, oe - j);
    return V(W, { eventParsed: W, day: L, start: z, end: $, timed: true }, true, { class: "v-event-timed", style: { top: `${j}px`, height: `${be}px`, left: `${H}%`, width: `${X}%` } });
  }
  function V(A, L, W, H) {
    const X = t.event, q = c.value(A.input), N = y(A.input), K = A.start.hour < 12 && A.end.hour >= 12, z = T1(A.start, A.end) <= u.value, $ = (fe, Ie) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), j = () => $(A.start) + " - " + $(A.end), oe = () => {
      const fe = d.value(A, W);
      if (A.start.hasTime) if (W) {
        const Ie = j(), xe = z ? ", " : p("br", null, null);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [fe]), xe, Ie]);
      } else {
        const Ie = $(A.start);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [Ie]), St(" "), fe]);
      }
      return p("span", { class: "v-event-summary" }, [fe]);
    }, be = { ...L, event: A.input, outside: L.day.outside, singline: z, overlapsNoon: K, formatTime: $, timeSummary: j, eventSummary: oe }, ne = rn(n, ":event", (fe) => ({ ...be, nativeEvent: fe }));
    return Xe(p("div", U(a.getColorProps({ text: q, background: N }), ne, H, { ref_for: true, ref: m }), [(X == null ? void 0 : X(be)) ?? k(oe)]), [[Et, e.eventRipple ?? true]]);
  }
  function k(A) {
    return p("div", { class: "pl-1" }, [A()]);
  }
  function g(A) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return p("div", { style: { height: `${L}px` }, "data-date": A.date, ref_for: true, ref: m }, null);
  }
  function C(A) {
    const L = e.eventHeight || 0, W = e.eventMarginBottom || 0, H = rn(n, ":more", (X) => ({ nativeEvent: X, ...A }));
    return Xe(p("div", U({ class: ["v-event-more pl-1", { "v-outside": A.outside }], "data-date": A.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${W}px` }, ref_for: true, ref: m }, H), null), [[Et, e.eventRipple ?? true]]);
  }
  function w() {
    const A = a.days.value, L = pt(A[0]), W = pt(A[A.length - 1]);
    return s.value.filter((H) => t_(H, L, W));
  }
  function T(A, L) {
    return !i.value || typeof L == "object" && L.categoryName && L.categoryName === A.category || typeof A.category == "string" && L === A.category || typeof A.category != "string" && L === null;
  }
  function P(A) {
    const L = pt(A), W = v.value[0];
    return s.value.filter((H) => jf(H, A, L, W));
  }
  function E(A) {
    const L = pt(A), W = v.value[0];
    return s.value.filter((H) => H.allDay && (i.value ? Ac(H, L) : jf(H, A, L, W)) && T(H, A.category));
  }
  function B(A) {
    return s.value.filter((L) => !L.allDay && Q1(L, A, A.intervalRange) && T(L, A.category));
  }
  function D() {
    if (l.value) return { ...t };
    const A = f.value(s.value, v.value[0], u.value), L = (H) => !!H, W = (H, X, q, N) => {
      const K = X(H), z = A(H, K, N, i.value);
      if (N) return z.map((j) => q(j, H)).filter(L);
      const $ = [];
      return z.forEach((j, oe) => {
        for (; $.length < j.column; ) $.push(g(H));
        const be = q(j, H);
        be && $.push(be);
      }), $;
    };
    return { ...t, day: (H) => {
      let X = W(H, P, x, false);
      if (X && X.length > 0 && e.eventMore && X.push(C(H)), t.day) {
        const q = t.day(H);
        q && (X = X ? X.concat(q) : q);
      }
      return X;
    }, "day-header": (H) => {
      let X = W(H, E, x, false);
      if (t["day-header"]) {
        const q = t["day-header"](H);
        q && (X = X ? X.concat(q) : q);
      }
      return X;
    }, "day-body": (H) => {
      const X = W(H, B, I, true);
      let q = [p("div", { class: "v-event-timed-container" }, [X])];
      if (t["day-body"]) {
        const N = t["day-body"](H);
        N && (q = q.concat(N));
      }
      return q;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: o, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: i, eventColorFunction: y, eventsRef: m, updateEventVisibility: b, getEventsMap: h, genDayEvent: x, genTimedEvent: I, genEvent: V, genName: k, genPlaceholder: g, genMore: C, getVisibleEvents: w, isEventForCategory: T, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: B, getScopedSlots: D };
}
const o_ = Z()({ name: "VCalendar", directives: { vResize: Ni }, props: { modelValue: { type: [String, Number, Date], validate: Dl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...xr(), ...l_() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const i = Q(), o = i_(e, n, a), r = Q(null), s = Q(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => zh(e.categories, e.categoryText)), d = _(() => {
    const g = o.parsedValue.value;
    let C = null, w = e.maxDays, T = c.value, P = g, E = g;
    switch (e.type) {
      case "month":
        C = Rf, P = Fh(g), E = Lh(g);
        break;
      case "week":
        C = ri, P = o.getStartOfWeek(g), E = o.getEndOfWeek(g), w = 7;
        break;
      case "day":
        C = ri, w = 1;
        break;
      case "4day":
        C = ri, E = Ha(Jt(E), xa, 3), wn(E), w = 4;
        break;
      case "custom-weekly":
        C = Rf, P = o.parsedStart.value || g, E = o.parsedEnd.value;
        break;
      case "custom-daily":
        C = ri, P = o.parsedStart.value || g, E = o.parsedEnd.value;
        break;
      case "category":
        const B = u.value;
        C = $1, E = Ha(Jt(E), xa, B), wn(E), w = B, T = k(T);
        break;
      default:
        const D = e.type;
        throw new Error(`${D} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: w, categories: T };
  }), f = _(() => o.effectiveWeekdays.value), v = _(() => e.type === "category"), y = _(() => o.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => o.getFormatter({ timeZone: "UTC", month: "short" })), b = _(() => {
    const { start: g, end: C } = d.value, w = g.year !== C.year, T = w || g.month !== C.month;
    return w ? m.value(g, true) + " " + g.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(g, true) + " - " + m.value(C, true) + " " + C.year : y.value(g, false) + " " + g.year;
  });
  function h() {
    const { start: g, end: C } = d.value;
    (!r.value || !s.value || g.date !== r.value.date || C.date !== s.value.date) && (r.value = g, s.value = C, l("change", { start: g, end: C }));
  }
  function x() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = Jt(o.parsedValue.value), w = g > 0, T = w ? xa : Nh, P = w ? m1 : wr;
    let E = w ? g : -g;
    for (; --E >= 0; ) switch (e.type) {
      case "month":
        C.day = P, T(C);
        break;
      case "week":
        Ha(C, T, pa);
        break;
      case "day":
        Ha(C, T, 1);
        break;
      case "4day":
        Ha(C, T, 4);
        break;
      case "category":
        Ha(C, T, u.value);
        break;
    }
    pr(C), wn(C), el(C, o.times.now), e.modelValue instanceof Date ? l("update:modelValue", Gs(C)) : typeof e.modelValue == "number" ? l("update:modelValue", Gs(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function I() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(g);
  }
  function V() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(-g);
  }
  function k(g) {
    if (!o.noEvents.value) {
      const C = g.reduce((w, T, P) => (typeof T == "object" && T.categoryName ? w[T.categoryName] = { index: P, count: 0 } : typeof T == "string" && (w[T] = { index: P, count: 0 }), w), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let w = g.length;
        o.parsedEvents.value.forEach((T) => {
          let P = T.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: w++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const w in C) C[w].count === 0 && delete C[w];
      g = g.filter((w) => typeof w == "object" && w.categoryName ? C.hasOwnProperty(w.categoryName) : typeof w == "string" ? C.hasOwnProperty(w) : false);
    }
    return g;
  }
  return ue(d, h), kt(() => {
    o.updateEventVisibility(), h();
  }), ar(() => {
    window.requestAnimationFrame(o.updateEventVisibility);
  }), te(() => {
    const { start: g, end: C, maxDays: w, component: T, categories: P } = d.value;
    return Xe(S(T, U({ ref: i, class: ["v-calendar", { "v-calendar-events": !o.noEvents.value }], role: "grid" }, T.filterProps(e), { start: g.date, end: C.date, maxDays: w, weekdays: o.effectiveWeekdays.value, categories: P, "onClick:date": (E, B) => {
      a["onUpdate:modelValue"] && l("update:modelValue", B.date);
    } }), o.getScopedSlots()), [[Ni, o.updateEventVisibility, void 0, { quiet: true }]]);
  }), Ct({ ...o, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: b, monthLongFormatter: y, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: x, next: I, prev: V, getCategoryList: k }, i);
} }), r_ = R({ ...Se(), ...Ae() }, "VCardActions"), Zh = Z()({ name: "VCardActions", props: r_(), setup(e, t) {
  let { slots: n } = t;
  return st({ VBtn: { slim: true, variant: "text" } }), te(() => S(e.tag, { class: ee(["v-card-actions", e.class]), style: me(e.style) }, n)), {};
} }), s_ = R({ opacity: [Number, String], ...Se(), ...Ae() }, "VCardSubtitle"), Jh = Z()({ name: "VCardSubtitle", props: s_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(e.tag, { class: ee(["v-card-subtitle", e.class]), style: me([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Qh = sa("v-card-title"), u_ = R({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Se(), ...ut(), ...Ae() }, "VCardItem"), ey = Z()({ name: "VCardItem", props: u_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return S(e.tag, { class: ee(["v-card-item", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [l && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? S(De, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : p(he, null, [e.prependAvatar && S(cn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && S(He, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-card-item__content" }, [r && S(Qh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Ut(e.title)];
      } }), s && S(Jh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Ut(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), o && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? S(De, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : p(he, null, [e.appendIcon && S(He, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && S(cn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), c_ = R({ opacity: [Number, String], ...Se(), ...Ae() }, "VCardText"), ty = Z()({ name: "VCardText", props: c_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => S(e.tag, { class: ee(["v-card-text", e.class]), style: me([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), d_ = R({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...$t(), ...Se(), ...ut(), ...ht(), ...bt(), ...hr(), ...jn(), ...Kl(), ...Qe(), ...no(), ...Ae(), ...Ne(), ...vn({ variant: "elevated" }) }, "VCard"), f_ = Z()({ name: "VCard", directives: { vRipple: Et }, props: d_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = We(e), { borderClasses: i } = Gt(e), { colorClasses: o, colorStyles: r, variantClasses: s } = da(e), { densityClasses: u } = Mt(e), { dimensionStyles: c } = yt(e), { elevationClasses: d } = xt(e), { loaderClasses: f } = Qi(e), { locationStyles: v } = Ma(e), { positionClasses: y } = Gl(e), { roundedClasses: m } = it(e), b = to(e, n), h = ie(void 0);
  return ue(() => e.loading, (x, I) => {
    h.value = !x && typeof I == "string" ? I : typeof x == "boolean" ? void 0 : x;
  }, { immediate: true }), te(() => {
    const x = e.link !== false && b.isLink.value, I = !e.disabled && e.link !== false && (e.link || b.isClickable.value), V = x ? "a" : e.tag, k = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = k || g, w = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || T || w, B = !!(a.text || e.text != null);
    return Xe(S(V, U(b.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, i.value, o.value, u.value, d.value, f.value, y.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": de(e.height) }, e.style], onClick: I && b.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && p("div", { key: "image", class: "v-card__image" }, [a.image ? S(De, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : S(la, { key: "image-img", cover: true, src: e.image }, null)]), S(eo, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && S(ey, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), B && S(ty, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && S(Zh, null, { default: a.actions }), ca(I, "v-card")];
    } }), [[Et, I && e.ripple]]);
  }), {};
} }), v_ = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, i = 0.5, o = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && n < t - o && e.left(e), e.right && n > t + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function m_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function g_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), v_(t);
}
function h_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function y_() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => m_(n, t), touchend: (n) => g_(n, t), touchmove: (n) => h_(n, t) };
}
function b_(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, i = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || i === void 0) return;
  const o = y_(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Lm(o).forEach((r) => {
    a.addEventListener(r, o[r], l);
  });
}
function S_(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Lm(l).forEach((i) => {
    n.removeEventListener(i, l[i]);
  }), delete n._touchHandlers[a];
}
const Ko = { mounted: b_, unmounted: S_ }, ny = Symbol.for("vuetify:v-window"), ay = Symbol.for("vuetify:v-window-group"), Cr = R({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...Se(), ...Ae(), ...Ne() }, "VWindow"), tl = Z()({ name: "VWindow", directives: { vTouch: Ko }, props: Cr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { isRtl: l } = wt(), { t: i } = Ue(), o = Ba(e, ay), r = Q(), s = _(() => l.value ? !e.reverse : e.reverse), u = ie(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", w = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${g}${w}-transition`;
  }), d = ie(0), f = Q(void 0), v = _(() => o.items.value.findIndex((g) => o.selected.value.includes(g.id)));
  ue(v, (g, C) => {
    let w;
    const T = { left: 0, top: 0 };
    Ye && C >= 0 && (w = ur(r.value), T.left = w == null ? void 0 : w.scrollLeft, T.top = w == null ? void 0 : w.scrollTop);
    const P = o.items.value.length, E = P - 1;
    P <= 2 ? u.value = g < C : g === E && C === 0 ? u.value = false : g === 0 && C === E ? u.value = true : u.value = g < C, Te(() => {
      if (!Ye || !w) return;
      w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!w) return;
        w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), et(ny, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const y = M(() => e.continuous || v.value !== 0), m = M(() => e.continuous || v.value !== o.items.value.length - 1);
  function b() {
    y.value && o.prev();
  }
  function h() {
    m.value && o.next();
  }
  const x = _(() => {
    const g = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: o.prev, "aria-label": i("$vuetify.carousel.prev") };
    g.push(y.value ? n.prev ? n.prev({ props: C }) : S($e, C, null) : p("div", null, null));
    const w = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: o.next, "aria-label": i("$vuetify.carousel.next") };
    return g.push(m.value ? n.next ? n.next({ props: w }) : S($e, w, null) : p("div", null, null)), g;
  }), I = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? b() : h();
  }, right: () => {
    s.value ? h() : b();
  }, start: (C) => {
    let { originalEvent: w } = C;
    w.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function V(g) {
    (e.direction === "horizontal" && g.key === "ArrowLeft" || e.direction === "vertical" && g.key === "ArrowUp") && (g.preventDefault(), b(), Te(() => {
      y.value ? k(0) : k(1);
    })), (e.direction === "horizontal" && g.key === "ArrowRight" || e.direction === "vertical" && g.key === "ArrowDown") && (g.preventDefault(), h(), Te(() => {
      m.value ? k(1) : k(0);
    }));
  }
  function k(g) {
    var _a3;
    const C = x.value[g];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return te(() => Xe(S(e.tag, { ref: r, class: ee(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: me([e.style, { "--v-window-transition-duration": $n() ? null : de(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [p("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: o }), e.showArrows !== false && p("div", { class: ee(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [x.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: o })];
  } }), [[Ko, I.value]])), { group: o };
} }), k_ = R({ color: String, cycle: Boolean, delimiterIcon: { type: Ce, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Cr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), w_ = Z()({ name: "VCarousel", props: k_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), { t: l } = Ue(), i = Q();
  let o = -1;
  ue(a, s), ue(() => e.interval, s), ue(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(o);
  }), kt(r);
  function r() {
    !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(o), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Te(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = i.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Te(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = i.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return te(() => {
    const c = tl.filterProps(e);
    return S(tl, U({ ref: i }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: de(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return p(he, null, [!e.hideDelimiters && p("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && S(De, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, y) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", y + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (b) => u(b, f) };
        return n.item ? n.item({ props: m, item: v }) : S($e, U(v, m), null);
      })] })]), e.progress && S(gr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), _r = R({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...Se(), ...vl(), ...hc() }, "VWindowItem"), nl = Z()({ name: "VWindowItem", directives: { vTouch: Ko }, props: _r(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Oe(ny), l = Va(e, ay), { isBooted: i } = dl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const o = ie(false), r = _(() => i.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !o.value || !a || (o.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    o.value || !a || (o.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = de((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(y) {
    o.value && Te(() => {
      !r.value || !o.value || !a || (a.transitionHeight.value = de(y.clientHeight));
    });
  }
  const f = _(() => {
    const y = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof y != "string" ? a.transition.value : y, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = yc(e, l.isSelected);
  return te(() => S(Yt, { transition: f.value, disabled: !i.value }, { default: () => {
    var _a3;
    return [Xe(p("div", { class: ee(["v-window-item", l.selectedClass.value, e.class]), style: me(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[In, l.isSelected.value]])];
  } })), { groupItem: l };
} }), p_ = R({ ...pg(), ..._r() }, "VCarouselItem"), x_ = Z()({ name: "VCarouselItem", inheritAttrs: false, props: p_(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  te(() => {
    const l = la.filterProps(e), i = nl.filterProps(e);
    return S(nl, U({ class: ["v-carousel-item", e.class] }, i), { default: () => [S(la, U(a, l), n)] });
  });
} }), C_ = sa("v-code", "code"), __ = R({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...Se() }, "VColorPickerCanvas"), V_ = Kt({ name: "VColorPickerCanvas", props: __(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ie(false), l = Q(), i = ie(parseFloat(e.width)), o = ie(parseFloat(e.height)), r = Q({ x: 0, y: 0 }), s = M(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x, y: I } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: je(x, 0, i.value) / i.value, v: 1 - je(I, 0, o.value) / o.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: h, y: x } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: de(e.dotSize), height: de(e.dotSize), transform: `translate(${de(h - I)}, ${de(x - I)})` };
  }), { resizeRef: d } = yn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: x, height: I } = h[0].contentRect;
    i.value = Math.round(x), o.value = Math.round(I);
  });
  function f(h, x, I) {
    const { left: V, top: k, width: g, height: C } = I;
    u.value = { x: je(h - V, 0, g), y: je(x - k, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (y(h), window.addEventListener("mousemove", y), window.addEventListener("mouseup", m), window.addEventListener("touchmove", y), window.addEventListener("touchend", m));
  }
  function y(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const x = I0(h);
    f(x.clientX, x.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", m);
  }
  function b() {
    var _a3;
    if (!l.value) return;
    const h = l.value, x = h.getContext("2d");
    if (!x) return;
    const I = x.createLinearGradient(0, 0, h.width, 0);
    I.addColorStop(0, "hsla(0, 0%, 100%, 1)"), I.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), x.fillStyle = I, x.fillRect(0, 0, h.width, h.height);
    const V = x.createLinearGradient(0, 0, 0, h.height);
    V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), x.fillStyle = V, x.fillRect(0, 0, h.width, h.height);
  }
  return ue(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, b, { immediate: true }), ue(() => [i.value, o.value], (h, x) => {
    b(), r.value = { x: u.value.x * h[0] / x[0], y: u.value.y * h[1] / x[1] };
  }, { flush: "post" }), ue(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * i.value, y: (1 - e.color.v) * o.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), kt(() => b()), te(() => p("div", { ref: d, class: ee(["v-color-picker-canvas", e.class]), style: me(e.style), onMousedown: v, onTouchstartPassive: v }, [p("canvas", { ref: l, width: i.value, height: o.value }, null), e.color && p("div", { class: ee(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: me(c.value) }, null)])), {};
} });
function I_(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function P_(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: i, b: o, a: r } = On(e);
      return `rgb(${l} ${i} ${o}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: i, l: o, a: r } = Ts(e);
      return `hsl(${l} ${Math.round(i * 100)} ${Math.round(o * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Jm(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return za(t, ["r", "g", "b"]) ? n = On(e) : za(t, ["h", "s", "l"]) ? n = Ts(e) : za(t, ["h", "s", "v"]) && (n = e), I_(n, !za(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Vl = { h: 0, s: 0, v: 0, a: 1 }, qs = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: On, from: Xi }, T_ = { ...qs, inputs: (_a2 = qs.inputs) == null ? void 0 : _a2.slice(0, 3) }, Xs = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Ts, from: zu }, A_ = { ...Xs, inputs: Xs.inputs.slice(0, 3) }, ly = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Jm, from: J0 }, D_ = { ...ly, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, qa = { rgb: T_, rgba: qs, hsl: A_, hsla: Xs, hex: D_, hexa: ly }, E_ = (e) => {
  let { label: t, ...n } = e;
  return p("div", { class: "v-color-picker-edit__input" }, [p("input", Rb(ym(n)), null), p("span", null, [t])]);
}, M_ = R({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(qa).includes(e) }, modes: { type: Array, default: () => Object.keys(qa), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(qa).includes(t)) }, ...Se() }, "VColorPickerEdit"), B_ = Kt({ name: "VColorPickerEdit", props: M_(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Ue(), l = _(() => e.modes.map((o) => ({ ...qa[o], name: o }))), i = _(() => {
    var _a3;
    const o = l.value.find((s) => s.name === e.mode);
    if (!o) return [];
    const r = e.color ? o.to(e.color) : null;
    return (_a3 = o.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...o.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const y = v.target;
        y && n("update:color", o.from(c(r ?? o.to(Vl), y.value)));
      } };
    });
  });
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-color-picker-edit", e.class]), style: me(e.style) }, [(_a3 = i.value) == null ? void 0 : _a3.map((o) => S(E_, o, null)), l.value.length > 1 && S($e, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const o = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(o + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Dc = Symbol.for("vuetify:v-slider");
function Zs(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function F_(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const iy = R({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...Qe(), ...bt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), oy = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(Hd(a.value), Hd(t.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = je(o, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: i };
}, ry = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: i, getActiveThumb: o } = e;
  const r = Xl(t), { isRtl: s } = wt(), u = M(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: y, decimals: m, roundValue: b } = n, h = _(() => parseInt(t.thumbSize, 10)), x = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / y.value), k = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), w = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = ie(false), P = ie(0), E = Q(), B = Q();
  function D(ne) {
    var _a3;
    const fe = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!fe) return;
    const Ie = t.direction === "vertical", xe = Ie ? "top" : "left", ge = Ie ? "height" : "width", F = Ie ? "clientY" : "clientX", { [xe]: O, [ge]: J } = fe.getBoundingClientRect(), se = F_(ne, F);
    let le = je((se - O - P.value) / J) || 0;
    return (Ie ? d.value : d.value !== s.value) && (le = 1 - le), b(f.value + le * (v.value - f.value));
  }
  const A = (ne) => {
    const fe = D(ne);
    fe != null && i({ value: fe }), T.value = false, P.value = 0;
  }, L = (ne) => {
    const fe = D(ne);
    B.value = o(ne), B.value && (T.value = true, B.value.contains(ne.target) ? P.value = Zs(ne, B.value, t.direction) : (P.value = 0, fe != null && l({ value: fe })), fe != null && a({ value: fe }), Te(() => {
      var _a3;
      return (_a3 = B.value) == null ? void 0 : _a3.focus();
    }));
  }, W = { passive: true, capture: true };
  function H(ne) {
    const fe = D(ne);
    fe != null && l({ value: fe });
  }
  function X(ne) {
    ne.stopPropagation(), ne.preventDefault(), A(ne), window.removeEventListener("mousemove", H, W), window.removeEventListener("mouseup", X);
  }
  function q(ne) {
    var _a3;
    A(ne), window.removeEventListener("touchmove", H, W), (_a3 = ne.target) == null ? void 0 : _a3.removeEventListener("touchend", q);
  }
  function N(ne) {
    var _a3;
    L(ne), window.addEventListener("touchmove", H, W), (_a3 = ne.target) == null ? void 0 : _a3.addEventListener("touchend", q, { passive: false });
  }
  function K(ne) {
    ne.button === 0 && (ne.preventDefault(), L(ne), window.addEventListener("mousemove", H, W), window.addEventListener("mouseup", X, { passive: false }));
  }
  ft(() => {
    window.removeEventListener("touchmove", H), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", X);
  });
  const z = (ne) => {
    const fe = (ne - f.value) / (v.value - f.value) * 100;
    return je(isNaN(fe) ? 0 : fe, 0, 100);
  }, $ = M(() => t.showTicks), j = _(() => $.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((ne) => ({ value: ne, position: z(ne), label: ne.toString() })) : Object.keys(t.ticks).map((ne) => ({ value: parseFloat(ne), position: z(parseFloat(ne)), label: t.ticks[ne] })) : V.value !== 1 / 0 ? Mn(V.value + 1).map((ne) => {
    const fe = f.value + ne * y.value;
    return { value: fe, position: z(fe) };
  }) : [] : []), oe = _(() => j.value.some((ne) => {
    let { label: fe } = ne;
    return !!fe;
  })), be = { activeThumbRef: B, color: M(() => t.color), decimals: m, disabled: r.isDisabled, direction: M(() => t.direction), elevation: M(() => t.elevation), hasLabels: oe, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: M(() => t.noKeyboard), numTicks: V, onSliderMousedown: K, onSliderTouchstart: N, parsedTicks: j, parseMouseMove: D, position: z, readonly: r.isReadonly, rounded: M(() => t.rounded), roundValue: b, showTicks: $, startOffset: P, step: y, thumbSize: h, thumbColor: k, thumbLabelColor: g, thumbLabel: M(() => t.thumbLabel), ticks: M(() => t.ticks), tickSize: x, trackColor: C, trackContainerRef: E, trackFillColor: w, trackSize: I, vertical: c };
  return et(Dc, be), be;
}, L_ = R({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...Se() }, "VSliderThumb"), Js = Z()({ name: "VSliderThumb", directives: { vRipple: Et }, props: L_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Oe(Dc), { isRtl: i, rtlClasses: o } = wt();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: y, direction: m, isReversed: b, vertical: h, readonly: x, elevation: I, mousePressed: V, decimals: k, indexFromEnd: g } = l, C = ie(false), w = ie(false), T = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = xt(T), { textColorClasses: E, textColorStyles: B } = Pt(u), { backgroundColorClasses: D, backgroundColorStyles: A } = ze(c), { pageup: L, pagedown: W, end: H, home: X, left: q, right: N, down: K, up: z } = Cs, $ = [L, W, H, X, q, N, K, z], j = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function oe(ne, fe) {
    if (e.noKeyboard || f.value || !$.includes(ne.key)) return;
    ne.preventDefault();
    const Ie = d.value || 0.1, xe = (s.value - r.value) / Ie;
    if ([q, N, K, z].includes(ne.key)) {
      const F = (h.value ? [i.value ? q : N, b.value ? K : z] : g.value !== i.value ? [q, z] : [N, z]).includes(ne.key) ? 1 : -1, O = ne.shiftKey ? 2 : ne.ctrlKey ? 1 : 0;
      F === -1 && fe === s.value && !O && !Number.isInteger(xe) ? fe = fe - xe % 1 * Ie : fe = fe + F * Ie * j.value[O];
    } else if (ne.key === X) fe = r.value;
    else if (ne.key === H) fe = s.value;
    else {
      const ge = ne.key === W ? 1 : -1;
      fe = fe - ge * Ie * (xe > 100 ? xe / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, fe));
  }
  function be(ne) {
    const fe = oe(ne, e.modelValue);
    fe != null && (w.value = false, a("update:modelValue", fe));
  }
  return ue(() => e.focused, (ne) => {
    ne && (w.value = false);
  }), te(() => {
    const ne = de(g.value ? 100 - e.position : e.position, "%"), fe = y.value === "always" || y.value === true && e.focused || y.value === "hover" && (C.value || e.focused && !w.value);
    return p("div", { class: ee(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, o.value]), style: me([{ "--v-slider-thumb-position": ne, "--v-slider-thumb-size": de(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!x.value, "aria-orientation": m.value, onKeydown: x.value ? void 0 : be, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, w.value = true;
    } }, [p("div", { class: ee(["v-slider-thumb__surface", E.value, P.value]), style: me(B.value) }, null), Xe(p("div", { class: ee(["v-slider-thumb__ripple", E.value]), style: me(B.value) }, null), [[Et, e.ripple, null, { circle: true, center: true }]]), S(ec, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [Xe(p("div", { class: "v-slider-thumb__label-container" }, [p("div", { class: ee(["v-slider-thumb__label", D.value]), style: me(A.value) }, [p("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? k.value : 1)]), p("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[In, fe]])];
    } })]);
  }), {};
} }), $_ = R({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...Se() }, "VSliderTrack"), sy = Z()({ name: "VSliderTrack", props: $_(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = Oe(Dc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: i, rounded: o, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: y, indexFromEnd: m } = a, { roundedClasses: b } = it(o), { backgroundColorClasses: h, backgroundColorStyles: x } = ze(c), { backgroundColorClasses: I, backgroundColorStyles: V } = ze(u), k = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [k.value]: "0%", [g.value]: "100%" })), w = _(() => e.stop - e.start), T = _(() => ({ [k.value]: de(e.start, "%"), [g.value]: de(w.value, "%") })), P = _(() => r.value ? (f.value ? i.value.slice().reverse() : i.value).map((B, D) => {
    var _a3;
    const A = B.value !== v.value && B.value !== y.value ? de(B.position, "%") : void 0;
    return p("div", { key: B.value, class: ee(["v-slider-track__tick", { "v-slider-track__tick--filled": B.position >= e.start && B.position <= e.stop, "v-slider-track__tick--first": B.value === v.value, "v-slider-track__tick--last": B.value === y.value }]), style: { [k.value]: A } }, [(B.label || n["tick-label"]) && p("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: B, index: D })) ?? B.label])]);
  }) : []);
  return te(() => p("div", { class: ee(["v-slider-track", b.value, e.class]), style: me([{ "--v-slider-track-size": de(d.value), "--v-slider-tick-size": de(s.value) }, e.style]) }, [p("div", { class: ee(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), p("div", { class: ee(["v-slider-track__fill", h.value]), style: { ...T.value, ...x.value } }, null), r.value && p("div", { class: ee(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), O_ = R({ ...lo(), ...iy(), ...va(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Qs = Z()({ name: "VSlider", inheritAttrs: false, props: O_(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const i = Q(), o = Q(), { rtlClasses: r } = wt(), s = oy(e), u = pe(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: y, onSliderTouchstart: m, trackContainerRef: b, position: h, hasLabels: x, disabled: I, readonly: V, noKeyboard: k } = ry({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: E } = P;
    const B = v(E);
    !I.value && !V.value && (u.value = B), a("end", B);
  }, onSliderMove: (P) => {
    let { value: E } = P;
    !I.value && !V.value && (u.value = v(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: g, focus: C, blur: w } = fa(e), T = _(() => h(u.value));
  return te(() => {
    const P = Ft.filterProps(e), [E, B] = Wn(l), D = !!(e.label || n.label || n.prepend);
    return S(Ft, U({ ref: o, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || x.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: D ? (A) => {
      var _a3, _b2;
      return p(he, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, A)) ?? (e.label ? S(ql, { id: A.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, A)]);
    } : void 0, default: (A) => {
      let { id: L, messagesId: W } = A;
      return p("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : y, onTouchstartPassive: V.value ? void 0 : m }, [p("input", { id: L.value, name: e.name || L.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), S(sy, { ref: b, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), S(Js, U({ ref: i, "aria-describedby": W.value, focused: g.value, noKeyboard: k.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (H) => u.value = H, position: T.value, elevation: e.elevation, onFocus: C, onBlur: w, ripple: e.ripple, name: e.name }, B), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Ct({ focus: () => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.$el.focus();
  } }, o);
} }), uy = R({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ce, default: "$eyeDropper" }, ...Se() }, "VColorPickerPreview"), N_ = Kt({ name: "VColorPickerPreview", props: uy(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Ue(), l = new AbortController(), i = M(() => !e.disabled && !e.readonly);
  lr(() => l.abort());
  async function o() {
    if (!Od || !i.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = Xi(on(s.sRGBHex));
      n("update:color", { ...e.color ?? Vl, ...u });
    } catch {
    }
  }
  return te(() => {
    var _a3, _b2;
    return p("div", { class: ee(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: me(e.style) }, [Od && !e.hideEyeDropper && p("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [S($e, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: o }, null)]), p("div", { class: "v-color-picker-preview__dot" }, [p("div", { style: { background: qm(e.color ?? Vl) } }, null)]), p("div", { class: "v-color-picker-preview__sliders" }, [S(Qs, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Vl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && S(Qs, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Vl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), R_ = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, H_ = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, W_ = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, z_ = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, j_ = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, Y_ = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, U_ = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, K_ = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, G_ = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, q_ = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, X_ = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, Z_ = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, J_ = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, Q_ = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, eV = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, tV = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, nV = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, aV = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, lV = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, iV = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, oV = { red: R_, pink: H_, purple: W_, deepPurple: z_, indigo: j_, blue: Y_, lightBlue: U_, cyan: K_, teal: G_, green: q_, lightGreen: X_, lime: Z_, yellow: J_, amber: Q_, orange: eV, deepOrange: tV, brown: nV, blueGrey: aV, grey: lV, shades: iV }, rV = R({ swatches: { type: Array, default: () => sV(oV) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...Se() }, "VColorPickerSwatches");
function sV(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const uV = Kt({ name: "VColorPickerSwatches", props: rV(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = M(() => !e.disabled && !e.readonly);
  function l(i) {
    !a.value || !i || n("update:color", i);
  }
  return te(() => p("div", { class: ee(["v-color-picker-swatches", e.class]), style: me([{ maxHeight: de(e.maxHeight) }, e.style]) }, [p("div", null, [e.swatches.map((i) => p("div", { class: "v-color-picker-swatches__swatch" }, [i.map((o) => {
    const r = on(o), s = Xi(r), u = Gm(r);
    return p("div", { class: ee(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [p("div", { style: { background: u } }, [e.color && It(e.color, s) ? S(He, { size: "x-small", icon: "$success", color: nw(o, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), cV = sa("v-picker-title"), Vr = R({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...bc() }, "VPicker"), zl = Z()({ name: "VPicker", props: Vr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = ze(() => e.color);
  return te(() => {
    const i = Ta.filterProps(e), o = !e.hideTitle && !!(e.title || n.title);
    return S(Ta, U(i, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && p("div", { key: "header", class: ee(["v-picker__header-wrapper", a.value]), style: me([l.value]) }, [o && S(cV, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && p("div", { class: "v-picker__header" }, [n.header()])]), p("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && S(De, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [p("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), dV = R({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(qa).includes(e) }, modes: { type: Array, default: () => Object.keys(qa), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(qa).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Vr({ hideHeader: true }), ...Zt(uy(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), fV = Kt({ name: "VColorPicker", props: dV(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "mode"), l = Q(null), i = pe(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = Xi(on(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? P_(c, e.modelValue) : null), o = _(() => i.value ? { ...i.value, h: l.value ?? i.value.h } : null), { rtlClasses: r } = wt();
  let s = true;
  ue(i, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (l.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, l.value = c.h, i.value = c;
  };
  return Yl(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), st({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), te(() => {
    const c = zl.filterProps(e);
    return S(zl, U(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": qm({ ...o.value ?? Vl, a: 1 }) }, e.style] }), { ...n, default: () => p(he, null, [!e.hideCanvas && S(V_, { key: "canvas", color: o.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && p("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && S(N_, { key: "preview", color: o.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && S(B_, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: o.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && S(uV, { key: "swatches", color: o.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), vV = R({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...gl({ filterKeys: ["title"] }), ...Cc({ hideNoData: true, returnObject: true }), ...Be(ro({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), mV = Z()({ name: "VCombobox", props: vV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Ue(), i = Q(), o = ie(false), r = ie(true), s = ie(false), u = Q(), c = Q(), d = ie(-1);
  let f = false;
  const { items: v, transformIn: y, transformOut: m } = dc(e), { textColorClasses: b, textColorStyles: h } = Pt(() => {
    var _a4;
    return (_a4 = i.value) == null ? void 0 : _a4.color;
  }), { InputIcon: x } = ao(e), I = pe(e, "modelValue", [], (G) => y(Je(G)), (G) => {
    const ve = m(G);
    return e.multiple ? ve : ve[0] ?? null;
  }), V = Xl(e), k = M(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), w = ie(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), T = ie(null), P = _({ get: () => w.value, set: async (G) => {
    var _a4;
    if (w.value = G ?? "", G === null || G === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [Sn(e, G)], Te(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), G && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const ve = ye(G);
      ve.length > 1 && (ce(ve), w.value = "");
    }
    G || (d.value = -1), r.value = !G;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: B, getMatches: D } = hl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), A = _(() => e.hideSelected && T.value === null ? B.value.filter((G) => !I.value.some((ve) => ve.value === G.value)) : B.value), L = _(() => e.hideNoData && !A.value.length || V.isReadonly.value || V.isDisabled.value), W = pe(e, "menu"), H = _({ get: () => W.value, set: (G) => {
    var _a4;
    W.value && !G && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || G && L.value || (W.value = G);
  } }), { menuId: X, ariaExpanded: q, ariaControls: N } = xc(e, H);
  ue(w, (G) => {
    f ? Te(() => f = false) : o.value && !H.value && (H.value = true), n("update:search", G);
  }), ue(I, (G) => {
    var _a4;
    !e.multiple && !C.value && (w.value = ((_a4 = G[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const K = _(() => I.value.map((G) => G.value)), z = _(() => A.value.find((G) => G.type === "item" && !G.props.disabled)), $ = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = z.value) == null ? void 0 : _a4.title)) && A.value.length > 0 && !r.value && !s.value;
  }), j = Q(), oe = Q(), be = Q(), ne = kc(j, i), { onTabKeydown: fe } = wc({ groups: [{ type: "element", contentRef: oe }, { type: "list", contentRef: j, displayItemsCount: () => A.value.length }, { type: "element", contentRef: be }], onLeave: () => {
    var _a4;
    H.value = false, (_a4 = i.value) == null ? void 0 : _a4.focus();
  } });
  function Ie(G) {
    f = true, Te(() => f = false), e.openOnClear && (H.value = true);
  }
  function xe() {
    L.value || (H.value = true);
  }
  function ge(G) {
    L.value || (o.value && (G.preventDefault(), G.stopPropagation()), H.value = !H.value);
  }
  function F(G) {
    var _a4, _b2;
    G.key === "Tab" && fe(G), ((_a4 = j.value) == null ? void 0 : _a4.$el.contains(G.target)) && ($l(G) || G.key === "Backspace") && ((_b2 = i.value) == null ? void 0 : _b2.focus());
  }
  function O(G) {
    var _a4, _b2, _c2, _d2;
    if (_0(G) || V.isReadonly.value) return;
    const ve = (_a4 = i.value) == null ? void 0 : _a4.selectionStart, ke = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(G.key) && G.preventDefault(), ["Enter", "ArrowDown"].includes(G.key) && (H.value = true), ["Escape"].includes(G.key) && (H.value = false), $.value && ["Enter", "Tab"].includes(G.key) && z.value && !I.value.some((we) => {
      let { value: Ve } = we;
      return Ve === z.value.value;
    }) && re(z.value), G.key === "ArrowDown" && $.value && ((_b2 = j.value) == null ? void 0 : _b2.focus("next")), G.key === "Enter" && P.value && (re(Sn(e, P.value), true, true), C.value && (w.value = "")), ["Backspace", "Delete"].includes(G.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return re(I.value[0], false);
      if (~d.value) {
        G.preventDefault();
        const we = d.value;
        re(I.value[d.value], false), d.value = we >= ke - 1 ? ke - 2 : we;
      } else G.key === "Backspace" && !P.value && (d.value = ke - 1);
      return;
    }
    if (e.multiple) if (G.key === "ArrowLeft") {
      if (d.value < 0 && ve && ve > 0) return;
      const we = d.value > -1 ? d.value - 1 : ke - 1;
      I.value[we] ? d.value = we : (d.value = -1, (_c2 = i.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (G.key === "ArrowRight") {
      if (d.value < 0) return;
      const we = d.value + 1;
      I.value[we] ? d.value = we : (d.value = -1, (_d2 = i.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && $l(G) && (d.value = -1);
  }
  function J(G) {
    var _a4;
    const ve = ((_a4 = G == null ? void 0 : G.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", ke = ye(ve);
    ke.length > 1 && e.multiple && (G.preventDefault(), ce(ke));
  }
  function se() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function le() {
    var _a4;
    o.value && ((_a4 = i.value) == null ? void 0 : _a4.focus()), r.value = true, T.value = null;
  }
  function re(G) {
    let ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!G || G.props.disabled)) if (e.multiple) {
      const we = I.value.findIndex((Me) => (e.valueComparator || It)(Me.value, G.value)), Ve = ve ?? !~we;
      if (~we) {
        const Me = Ve ? [...I.value, G] : [...I.value];
        Me.splice(we, 1), I.value = Me;
      } else Ve && (I.value = [...I.value, G]);
      e.clearOnSelect && (P.value = "");
    } else {
      const we = ve !== false;
      I.value = we ? [G] : [], (!r.value || e.alwaysFilter) && w.value && (T.value = w.value), w.value = we && !C.value ? G.title : "", Te(() => {
        H.value = ke, r.value = true;
      });
    }
  }
  function ye(G) {
    const ke = [`
`, ...e.delimiters ?? []].map(Oo).join("|");
    return G.split(new RegExp(`(?:${ke})+`));
  }
  async function ce(G) {
    for (let ve of G) ve = ve.trim(), ve && (re(Sn(e, ve)), await Te());
  }
  function Y(G) {
    o.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function ae(G) {
    s.value = false;
  }
  function _e(G) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(G.relatedTarget)) && (o.value = true);
  }
  return ue(o, (G, ve) => {
    if (!(G || G === ve) && (d.value = -1, H.value = false, P.value)) {
      if (e.multiple) {
        re(Sn(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((ke) => {
        let { title: we } = ke;
        return we === P.value;
      }) ? w.value = "" : re(Sn(e, P.value));
    }
  }), ue(H, (G) => {
    if (!e.hideSelected && G && I.value.length && r.value) {
      const ve = A.value.findIndex((ke) => I.value.some((we) => (e.valueComparator || It)(we.value, ke.value)));
      Ye && window.requestAnimationFrame(() => {
        var _a4;
        ve >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(ve));
      });
    }
    G && (T.value = null);
  }), ue(v, (G, ve) => {
    H.value || o.value && !ve.length && G.length && (H.value = true);
  }), te(() => {
    const G = !!(!e.hideNoData || A.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ve = I.value.length > 0, ke = Rn.filterProps(e), we = { search: P, filteredItems: B.value };
    return S(Rn, U({ ref: i }, ke, { modelValue: P.value, "onUpdate:modelValue": (Ve) => P.value = Ve, focused: o.value, "onUpdate:focused": (Ve) => o.value = Ve, validationValue: I.externalValue, counterValue: E.value, dirty: ve, class: ["v-combobox", { "v-combobox--active-menu": H.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: ve ? void 0 : e.placeholder, "onClick:clear": Ie, "onMousedown:control": xe, onKeydown: O, onPaste: J, onBlur: _e, "aria-expanded": q.value, "aria-controls": N.value }), { ...a, default: (Ve) => {
      let { id: Me } = Ve;
      return p(he, null, [S(Wl, U({ id: X.value, ref: u, modelValue: H.value, "onUpdate:modelValue": (Re) => H.value = Re, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: se, onAfterLeave: le }, e.menuProps), { default: () => [S(Ta, { onFocusin: Y, onKeydown: F }, { default: () => [a["menu-header"] && p("header", { ref: oe }, [a["menu-header"](we)]), G && S(Hl, U({ key: "combobox-list", ref: j, filterable: true, selected: K.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Re) => Re.preventDefault(), selectable: !!A.value.length, onFocusout: ae, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Me.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ne, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !A.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? S(bn, { key: "no-data", title: l(e.noDataText) }, null)), S(kr, { ref: c, renderless: true, items: A.value, itemKey: "value" }, { default: (Re) => {
          var _a5, _b3, _c3;
          let { item: Fe, index: ot, itemRef: Ze } = Re;
          const en = U(Fe.props, { ref: Ze, key: Fe.value, active: $.value && Fe === z.value ? true : void 0, onClick: () => re(Fe, null), "aria-posinset": ot + 1, "aria-setsize": A.value.length });
          return Fe.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Fe.raw, index: ot })) ?? S(sn, U(Fe.props, { key: `divider-${ot}` }), null) : Fe.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Fe.raw, index: ot })) ?? S(Zl, U(Fe.props, { key: `subheader-${ot}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Fe, index: ot, props: en })) ?? S(bn, U(en, { role: "option" }), { prepend: (ma) => {
            let { isSelected: tt } = ma;
            return p(he, null, [e.multiple && !e.hideSelected ? S(Vn, { key: Fe.value, modelValue: tt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (mn) => mn.preventDefault() }, null) : void 0, Fe.props.prependAvatar && S(cn, { image: Fe.props.prependAvatar }, null), Fe.props.prependIcon && S(He, { icon: Fe.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Fe.title : pc("v-combobox", Fe.title, (_a6 = D(Fe)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && p("footer", { ref: be }, [a["menu-footer"](we)])] })] }), I.value.map((Re, Fe) => {
        function ot(tt) {
          tt.stopPropagation(), tt.preventDefault(), re(Re, false);
        }
        const Ze = U(ia.filterProps(Re.props), { "onClick:close": ot, onKeydown(tt) {
          tt.key !== "Enter" && tt.key !== " " || (tt.preventDefault(), tt.stopPropagation(), ot(tt));
        }, onMousedown(tt) {
          tt.preventDefault(), tt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), en = g.value ? !!a.chip : !!a.selection, ma = en ? sr(g.value ? a.chip({ item: Re, index: Fe, props: Ze }) : a.selection({ item: Re, index: Fe })) : void 0;
        if (!(en && !ma)) return p("div", { key: Re.value, class: ee(["v-combobox__selection", Fe === d.value && ["v-combobox__selection--selected", b.value]]), style: me(Fe === d.value ? h.value : {}) }, [g.value ? a.chip ? S(De, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: Re.title } } }, { default: () => [ma] }) : S(ia, U({ key: "chip", closable: k.value, size: "small", text: Re.title, disabled: Re.props.disabled }, Ze), null) : ma ?? p("span", { class: "v-combobox__selection-text" }, [Re.title, e.multiple && Fe < I.value.length - 1 && p("span", { class: "v-combobox__selection-comma" }, [St(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ve = arguments.length, Me = new Array(Ve), Re = 0; Re < Ve; Re++) Me[Re] = arguments[Re];
      return p(he, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Me), (!e.hideNoData || e.items.length) && e.menuIcon ? S(He, { class: "v-combobox__menu-icon", color: (_b2 = i.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ge, onClick: rr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && S(x, { key: "append-icon", name: "appendInner", color: Me[0].iconColor.value }, null)]);
    } });
  }), Ct({ isFocused: o, isPristine: r, menu: H, search: P, selectionIndex: d, filteredItems: B, select: re }, i);
} }), gV = R({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), hV = Z()({ name: "VConfirmEdit", props: gV(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pe(e, "modelValue"), i = Q();
  lt(() => {
    i.value = structuredClone(Ud(l.value));
  });
  const { t: o } = Ue(), r = _(() => It(l.value, i.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    l.value = i.value, n("save", i.value);
  }
  function f() {
    i.value = structuredClone(Ud(l.value)), n("cancel");
  }
  function v(m) {
    return p(he, null, [S($e, U({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: o(e.cancelText) }, m), null), S($e, U({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: o(e.okText) }, m), null)]);
  }
  let y = false;
  return te(() => {
    var _a3;
    return p(he, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: i, save: d, cancel: f, isPristine: r.value, get actions() {
      return y = true, v;
    } }), !e.hideActions && !y && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), cy = R({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), dy = Symbol.for("vuetify:datatable:expanded");
function Ir(e) {
  const t = M(() => e.expandOnClick), n = pe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  function i(r) {
    a(r, !l(r));
  }
  const o = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: i };
  return et(dy, o), o;
}
function fy() {
  const e = Oe(dy);
  if (!e) throw new Error("foo");
  return e;
}
const Ec = R({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), vy = Symbol.for("vuetify:data-table-group");
function Mc(e) {
  return { groupBy: pe(e, "groupBy") };
}
function Pr(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = Q(/* @__PURE__ */ new Set()), i = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
  function o(c) {
    return l.value.has(c.id);
  }
  function r(c) {
    const d = new Set(l.value);
    o(c) ? d.delete(c.id) : d.add(c.id), l.value = d;
  }
  function s(c) {
    function d(f) {
      const v = [];
      for (const y of f.items) "type" in y && y.type === "group" ? v.push(...d(y)) : v.push(y);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: i, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: o };
  return et(vy, u), u;
}
function my() {
  const e = Oe(vy);
  if (!e) throw new Error("Missing group!");
  return e;
}
function yV(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Ja(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function gy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = yV(e, t[0]), i = [], o = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    i.push({ depth: n, id: c, key: u, value: s, items: o.length ? gy(r, o, n + 1, c) : r, type: "group" });
  }), i;
}
function hy(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...hy(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Tr(e, t, n, a) {
  const l = _(() => t.value.length ? gy(qe(e), t.value.map((o) => o.key)) : []), i = _(() => t.value.length ? hy(l.value, n.value, qe(a)) : qe(e));
  return { groups: l, flatItems: i };
}
function Ar(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: i } = e;
  const o = gt("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: i.value });
  let s = null;
  ue(r, (u) => {
    It(s, u) || (s && s.search !== u.search && (t.value = 1), o.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const Bc = R({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), yy = Symbol.for("vuetify:data-table-pagination");
function Fc(e) {
  const t = pe(e, "page", void 0, (a) => Number(a ?? 1)), n = pe(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function Lc(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), i = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), o = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ue([t, o], () => {
    t.value > o.value && (t.value = o.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = je(t.value + 1, 1, o.value);
  }
  function u() {
    t.value = je(t.value - 1, 1, o.value);
  }
  function c(f) {
    t.value = je(f, 1, o.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: i, pageCount: o, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return et(yy, d), d;
}
function bV() {
  const e = Oe(yy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function by(e) {
  const t = gt("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: i } = e, o = _(() => i.value <= 0 ? qe(n) : qe(n).slice(a.value, l.value));
  return ue(o, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: o };
}
function SV(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = qe(e.pageBy);
  if (l === "item") {
    const { paginatedItems: i, pageCount: o, setItemsPerPage: r } = n(t), { flatItems: s } = a(i);
    return { pageCount: o, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: i, groups: o } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(o), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = i.value.findIndex((b) => b.type === "group" && b.id === d), y = i.value.findIndex((b) => b.type === "group" && b.id === f), m = i.value.findIndex((b, h) => h > y && b.type === "group" && b.depth === 0);
      return i.value.slice(v, m === -1 ? void 0 : m);
    });
    return { pageCount: s, setItemsPerPage: u, paginatedItems: c };
  }
  if (l === "any") {
    const { flatItems: i } = a(t), { paginatedItems: o, pageCount: r, setItemsPerPage: s } = n(i);
    return { pageCount: r, setItemsPerPage: s, paginatedItems: o };
  }
  throw new Error(`Unrecognized pagination target ${l}`);
}
const kV = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, Sy = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return Sy.select({ items: n, value: t, selected: a });
} }, wV = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, ky = R({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), wy = Symbol.for("vuetify:data-table-selection");
function Dr(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = pe(e, "modelValue", e.modelValue, (x) => {
    const I = e.valueComparator;
    return I ? new Set(Je(x).map((V) => {
      var _a3;
      return ((_a3 = n.value.find((k) => I(V, k.value))) == null ? void 0 : _a3.value) ?? V;
    })) : new Set(Je(x).map((V) => {
      var _a3, _b2;
      return _a(V) ? ((_a3 = n.value.find((k) => V === k.value)) == null ? void 0 : _a3.value) ?? V : ((_b2 = n.value.find((k) => It(V, k.value))) == null ? void 0 : _b2.value) ?? V;
    }));
  }, (x) => [...x.values()]), i = _(() => n.value.filter((x) => x.selectable)), o = _(() => qe(a).filter((x) => x.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return kV;
      case "all":
        return wV;
      case "page":
      default:
        return Sy;
    }
  }), s = ie(null);
  function u(x) {
    return Je(x).every((I) => l.value.has(I.value));
  }
  function c(x) {
    return Je(x).some((I) => l.value.has(I.value));
  }
  function d(x, I) {
    const V = r.value.select({ items: x, value: I, selected: new Set(l.value) });
    l.value = V;
  }
  function f(x, I, V) {
    const k = [], g = qe(a);
    if (I = I ?? g.findIndex((C) => C.value === x.value), e.selectStrategy !== "single" && (V == null ? void 0 : V.shiftKey) && s.value !== null) {
      const [C, w] = [s.value, I].sort((T, P) => T - P);
      k.push(...g.slice(C, w + 1).filter((T) => T.selectable));
    } else k.push(x), s.value = I;
    d(k, !u([x]));
  }
  function v(x) {
    const I = r.value.selectAll({ value: x, allItems: i.value, currentPage: o.value, selected: new Set(l.value) });
    l.value = I;
  }
  const y = _(() => l.value.size > 0), m = _(() => {
    const x = r.value.allSelected({ allItems: i.value, currentPage: o.value });
    return !!x.length && u(x);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: y, allSelected: m, showSelectAll: M(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return et(wy, h), h;
}
function Er() {
  const e = Oe(wy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const py = R({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), xy = Symbol.for("vuetify:data-table-sort");
function Mr(e) {
  const t = M(() => e.initialSortOrder), n = pe(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: M(() => e.multiSort), mustSort: M(() => e.mustSort) };
}
function pV(e, t) {
  if (!Qa(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, i = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: i ? a === "append" ? "prepend" : "append" : a };
}
function Br(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: i } = e, o = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, y = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === y ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = y;
    else {
      const { active: m, mode: b } = pV(l.value, c);
      m ? b === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, i && (i.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: o, isSorted: r };
  return et(xy, s), s;
}
function Cy() {
  const e = Oe(xy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function $c(e, t, n, a) {
  const l = Ue();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? xV(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function xV(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((o) => [o, (a == null ? void 0 : a.transform) ? a.transform(o) : o]).sort((o, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = Ja(o[1], c), v = Ja(r[1], c), y = o[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [y, m] = [m, y]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const b = a.sortRawFunctions[c](y, m);
        if (b == null) continue;
        if (u = true, b) return b;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const b = a.sortFunctions[c](f, v);
        if (b == null) continue;
        if (u = true, b) return b;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((b) => b != null ? b.toString().toLocaleLowerCase() : b), f !== v)) return ii(f) && ii(v) ? 0 : ii(f) ? -1 : ii(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const CV = R({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function _V(e, t) {
  const n = e.returnObject ? t : vt(t, e.itemValue), a = vt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function VV(e, t) {
  const n = [];
  for (const a of t) n.push(_V(e, a));
  return n;
}
function IV(e) {
  return { items: _(() => VV(e, e.items)) };
}
const PV = R({ search: String, loading: Boolean, itemsLength: [Number, String], ...Se(), ...CV(), ...ky(), ...py(), ...Bc({ itemsPerPage: 5 }), ...cy(), ...Ec(), ...gl(), ...Ae(), ...ua({ transition: { component: Mi, hideOnLeave: true } }) }, "VDataIterator"), TV = Z()({ name: "VDataIterator", props: PV(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "groupBy"), l = M(() => e.search), { items: i } = IV(e), { filteredItems: o } = hl(e, i, l, { transform: (j) => j.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Mr(e), { page: d, itemsPerPage: f } = Fc(e), { toggleSort: v } = Br({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: y, opened: m, extractRows: b, isGroupOpen: h, toggleGroup: x } = Pr({ groupBy: a, sortBy: s }), { sortedItems: I } = $c(e, o, y, { transform: (j) => j.raw }), { flatItems: V } = Tr(I, a, m, false), k = M(() => !ii(e.itemsLength)), g = M(() => k.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: w, pageCount: T, prevPage: P, nextPage: E, setItemsPerPage: B, setPage: D } = Lc({ page: d, itemsPerPage: f, itemsLength: g }), A = ie([]), L = _(() => k.value ? V.value : A.value);
  Dt(() => !k.value, () => {
    const { paginatedItems: j } = by({ items: V, startIndex: C, stopIndex: w, itemsPerPage: f });
    lt(() => {
      A.value = j.value;
    });
  });
  const W = _(() => b(L.value)), { isSelected: H, select: X, selectAll: q, toggleSelect: N } = Dr(e, { allItems: i, currentPage: W }), { isExpanded: K, toggleExpand: z } = Ir(e);
  Ar({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const $ = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: P, nextPage: E, setPage: D, setItemsPerPage: B, isSelected: H, select: X, selectAll: q, toggleSelect: N, isExpanded: K, toggleExpand: z, isGroupOpen: h, toggleGroup: x, items: W.value, itemsCount: o.value.length, groupedItems: L.value }));
  return te(() => S(e.tag, { class: ee(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, $.value), S(Yt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? S(eo, { key: "loader", name: "v-data-iterator", active: true }, { default: (j) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, j);
      } }) : p("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, $.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, $.value)];
  } })), {};
} });
function AV() {
  const e = Q([]);
  Xv(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const DV = R({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ce, default: "$first" }, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, lastIcon: { type: Ce, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...$t(), ...Se(), ...ut(), ...bt(), ...Qe(), ...Yn(), ...Ae({ tag: "nav" }), ...Ne(), ...vn({ variant: "text" }) }, "VPagination"), eu = Z()({ name: "VPagination", props: DV(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = pe(e, "modelValue"), { t: i, n: o } = Ue(), { isRtl: r } = wt(), { themeClasses: s } = We(e), { width: u } = dn(), c = ie(-1);
  st(void 0, { scoped: true });
  const { resizeRef: d } = yn((w) => {
    if (!w.length) return;
    const { target: T, contentRect: P } = w[0], E = T.querySelector(".v-pagination__list > *");
    if (!E) return;
    const B = P.width, D = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = m(B, D);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), y = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(w, T) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((w - T * P) / T).toFixed(2))));
  }
  const b = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (y.value <= 0) return [];
    if (y.value === 1) return [l.value];
    if (f.value <= y.value) return Mn(f.value, v.value);
    const w = y.value % 2 === 0, T = w ? y.value / 2 : Math.floor(y.value / 2), P = w ? T : T + 1, E = f.value - T;
    if (P - l.value >= 0) return [...Mn(Math.max(1, y.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (w ? 1 : 0)) {
      const B = y.value - 1, D = f.value - B + v.value;
      return [v.value, e.ellipsis, ...Mn(B, D)];
    } else {
      const B = Math.max(1, y.value - 2), D = B === 1 ? l.value : l.value - Math.ceil(B / 2) + v.value;
      return [v.value, e.ellipsis, ...Mn(B, D), e.ellipsis, f.value];
    }
  });
  function h(w, T, P) {
    w.preventDefault(), l.value = T, P && a(P, T);
  }
  const { refs: x, updateRef: I } = AV();
  st({ VPaginationBtn: { color: M(() => e.color), border: M(() => e.border), density: M(() => e.density), size: M(() => e.size), variant: M(() => e.variant), rounded: M(() => e.rounded), elevation: M(() => e.elevation) } });
  const V = _(() => b.value.map((w, T) => {
    const P = (E) => I(E, T);
    if (typeof w == "string") return { isActive: false, key: `ellipsis-${T}`, page: w, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = w === l.value;
      return { isActive: E, key: w, page: o(w), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": i(E ? e.currentPageAriaLabel : e.pageAriaLabel, w), onClick: (B) => h(B, w) } };
    }
  })), k = _(() => {
    const w = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: w, "aria-label": i(e.firstAriaLabel), "aria-disabled": w } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: w, "aria-label": i(e.previousAriaLabel), "aria-disabled": w }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: T, "aria-label": i(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: T, "aria-label": i(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function g() {
    var _a3;
    const w = l.value - v.value;
    (_a3 = x.value[w]) == null ? void 0 : _a3.$el.focus();
  }
  function C(w) {
    w.key === Cs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Te(g)) : w.key === Cs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Te(g));
  }
  return te(() => S(e.tag, { ref: d, class: ee(["v-pagination", s.value, e.class]), style: me(e.style), role: "navigation", "aria-label": i(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [p("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && p("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(k.value.first) : S($e, U({ _as: "VPaginationBtn" }, k.value.first), null)]), p("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(k.value.prev) : S($e, U({ _as: "VPaginationBtn" }, k.value.prev), null)]), V.value.map((w, T) => p("li", { key: w.key, class: ee(["v-pagination__item", { "v-pagination__item--is-active": w.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(w) : S($e, U({ _as: "VPaginationBtn" }, w.props), { default: () => [w.page] })])), p("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(k.value.next) : S($e, U({ _as: "VPaginationBtn" }, k.value.next), null)]), e.showFirstLastPage && p("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(k.value.last) : S($e, U({ _as: "VPaginationBtn" }, k.value.last), null)])])] })), {};
} }), Oc = R({ color: String, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, firstIcon: { type: Ce, default: "$first" }, lastIcon: { type: Ce, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ri = Z()({ name: "VDataTableFooter", props: Oc(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Ue(), { page: l, pageCount: i, startIndex: o, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = bV(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return te(() => {
    var _a3;
    const f = eu.filterProps(e);
    return p("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [a(e.itemsPerPageText)]), S(_c, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [S(eu, U({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: i.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Be(f, ["color"])), null)])]);
  }), {};
} }), Hi = rw({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return S(a, { class: ee(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: de(e.height), width: de(e.width), maxWidth: de(e.maxWidth), left: l === "start" ? de(e.fixedOffset || null) : void 0, right: l === "end" ? de(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? de(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), EV = R({ headers: Array }, "DataTable-header"), _y = Symbol.for("vuetify:data-table-headers"), Vy = { title: "", sortable: false }, MV = { ...Vy, width: 48 };
function BV() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({ element: n, priority: 0 }));
  return { enqueue: (n, a) => {
    let l = false;
    for (let i = 0; i < t.length; i++) if (t[i].priority > a) {
      t.splice(i, 0, { element: n, priority: a }), l = true;
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
function tu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) tu(n, t);
  return t;
}
function Iy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Iy(n.children, t);
  return t;
}
function FV(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Vy;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return MV;
  }
}
function Nc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Nc(n, t + 1))) : t;
}
function LV(e) {
  let t = false;
  function n(i, o) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (i) if (r !== "none" && (i.fixed = r), i.fixed === true && (i.fixed = "start"), i.fixed === o) if (i.children) if (o === "start") for (let s = i.children.length - 1; s >= 0; s--) n(i.children[s], o, o);
    else for (let s = 0; s < i.children.length; s++) n(i.children[s], o, o);
    else !t && o === "start" ? i.lastFixed = true : !t && o === "end" ? i.firstFixedEnd = true : isNaN(Number(i.width)) ? (`${i.key}`, void 0) : i.minWidth = Math.max(Number(i.width) || 0, Number(i.minWidth) || 0), t = true;
    else if (i.children) if (o === "start") for (let s = i.children.length - 1; s >= 0; s--) n(i.children[s], o);
    else for (let s = 0; s < i.children.length; s++) n(i.children[s], o);
    else t = false;
  }
  for (let i = e.length - 1; i >= 0; i--) n(e[i], "start");
  for (let i = 0; i < e.length; i++) n(e[i], "end");
  let a = 0;
  for (let i = 0; i < e.length; i++) a = Py(e[i], a);
  let l = 0;
  for (let i = e.length - 1; i >= 0; i--) l = Ty(e[i], l);
}
function Py(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Py(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function Ty(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = Ty(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function $V(e, t) {
  const n = [];
  let a = 0;
  const l = BV(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - Nc(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? tu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, o -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((o) => tu(o)).flat(), headers: n };
}
function Ay(e) {
  const t = [];
  for (const n of e) {
    const a = { ...FV(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = { ...a, key: l, value: i, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? Ay(a.children) : void 0 };
    t.push(o);
  }
  return t;
}
function Rc(e, t) {
  const n = Q([]), a = Q([]), l = Q({}), i = Q({}), o = Q({});
  lt(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Hn(m) }))).slice(), c = Iy(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Ay(u);
    LV(d);
    const f = Math.max(...d.map((m) => Nc(m))) + 1, v = $V(d, f);
    n.value = v.headers, a.value = v.columns;
    const y = v.headers.flat(1);
    for (const m of y) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (i.value[m.key] = m.sortRaw)), m.filter && (o.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: i, filterFunctions: o };
  return et(_y, r), r;
}
function Fr() {
  const e = Oe(_y);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Dy = R({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ce }, sortAscIcon: { type: Ce, default: "$sortAsc" }, sortDescIcon: { type: Ce, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...ut(), ...sl(), ...hr() }, "VDataTableHeaders"), al = Z()({ name: "VDataTableHeaders", props: Dy(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Ue(), { toggleSort: l, sortBy: i, isSorted: o } = Cy(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Er(), { columns: d, headers: f } = Fr(), { loaderClasses: v } = Qi(e);
  function y(T, P) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const E = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? de(T.fixedOffset) : void 0, right: E === "end" ? de(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(T, P) {
    T.key === "Enter" && !e.disableSort && l(P, T);
  }
  function b(T) {
    var _a3;
    switch ((_a3 = i.value.find((E) => E.key === T.key)) == null ? void 0 : _a3.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: h, backgroundColorStyles: x } = ze(() => e.color), { displayClasses: I, mobile: V } = dn(e), k = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: o, sortBy: i.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: b })), g = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (T) => {
    let { column: P, x: E, y: B } = T;
    const D = P.key === "data-table-select" || P.key === "data-table-expand", A = P.key === "data-table-group" && P.width === 0 && !P.title, L = U(e.headerProps ?? {}, P.headerProps ?? {});
    return S(Hi, U({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": o(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: de(P.width), minWidth: de(P.minWidth), maxWidth: de(P.maxWidth), ...y(P, B) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: D, empty: A, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (W) => l(P, W) : void 0, onKeydown: P.sortable ? (W) => m(W, P) : void 0 }, L), { default: () => {
      var _a3;
      const W = `header.${P.key}`, H = { column: P, selectAll: u, isSorted: o, toggleSort: l, sortBy: i.value, someSelected: r.value, allSelected: s.value, getSortIcon: b };
      return n[W] ? n[W](H) : A ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, H)) ?? (c.value && S(Vn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [P.title]), P.sortable && !e.disableSort && S(He, { key: "icon", class: "v-data-table-header__sort-icon", icon: b(P) }, null), e.multiSort && o(P) && p("div", { key: "badge", class: ee(["v-data-table-header__sort-badge", ...h.value]), style: me(x.value) }, [i.value.findIndex((X) => X.key === P.key) + 1])]);
    } });
  }, w = () => {
    const T = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return S(Hi, U({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [p("div", { class: "v-data-table-header__content" }, [S(_c, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => i.value = [] }, { append: P ? () => S(Vn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return S(ia, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (B) => {
        B.preventDefault(), B.stopPropagation();
      } }, { default: () => [E.item.title, S(He, { class: ee(["v-data-table__td-sort-icon", o(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: b(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  te(() => V.value ? p("tr", null, [S(w, null, null)]) : p(he, null, [n.headers ? n.headers(k.value) : f.value.map((T, P) => p("tr", null, [T.map((E, B) => S(C, { column: E, x: B, y: P }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: d.value.length }, [S(eo, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Ey = R({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ce, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ce, default: "$tableGroupExpand" }, ...ut() }, "VDataTableGroupHeaderRow"), OV = Z()({ name: "VDataTableGroupHeaderRow", props: Ey(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: i } = my(), { isSelected: o, isSomeSelected: r, select: s } = Er(), { columns: u } = Fr(), c = _(() => i([e.item])), d = M(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => p("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, y = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: y } })) ?? S(Hi, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [S($e, { size: "small", variant: "text", icon: v, onClick: y }, null), p("span", null, [e.item.value]), p("span", null, [St("("), c.value.length, St(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((h) => h.selectable), y = v.length > 0 && o(v), m = r(v) && !y, b = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: y, indeterminate: m, "onUpdate:modelValue": b } })) ?? S(Hi, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [S(Vn, { density: e.density, disabled: v.length === 0, modelValue: y, indeterminate: m, "onUpdate:modelValue": b }, null)] });
    }
    return "";
  })]);
} }), My = R({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, onClick: At(), onContextmenu: At(), onDblclick: At(), ...ut(), ...sl() }, "VDataTableRow"), Hc = Z()({ name: "VDataTableRow", props: My(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = dn(e, "v-data-table__tr"), { isSelected: i, toggleSelect: o, someSelected: r, allSelected: s, selectAll: u } = Er(), { isExpanded: c, toggleExpand: d } = fy(), { toggleSort: f, sortBy: v, isSorted: y } = Cy(), { columns: m } = Fr();
  te(() => p("tr", { class: ee(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((b, h) => {
    const x = e.item, I = `item.${b.key}`, V = `header.${b.key}`, k = { index: e.index, item: x.raw, internalItem: x, value: Ja(x.columns, b.key), column: b, isSelected: i, toggleSelect: o, isExpanded: c, toggleExpand: d }, g = { column: b, selectAll: u, isSorted: y, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value, column: b }) : e.cellProps, w = typeof b.cellProps == "function" ? b.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value }) : b.cellProps, T = b.key === "data-table-select" || b.key === "data-table-expand", P = b.key === "data-table-group" && b.width === 0 && !b.title;
    return S(Hi, U({ align: b.align, indent: b.indent, class: { "v-data-table__td--expanded-row": b.key === "data-table-expand", "v-data-table__td--select-row": b.key === "data-table-select" }, fixed: b.fixed, fixedOffset: b.fixedOffset, fixedEndOffset: b.fixedEndOffset, lastFixed: b.lastFixed, firstFixedEnd: b.firstFixedEnd, maxWidth: l.value ? void 0 : b.maxWidth, noPadding: T, empty: P, nowrap: b.nowrap, width: l.value ? void 0 : b.width }, C, w), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (b.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...k, props: { color: e.color, disabled: !x.selectable, modelValue: i([x]), onClick: vo(() => o(x), ["stop"]) } })) ?? S(Vn, { color: e.color, disabled: !x.selectable, density: e.density, modelValue: i([x]), onClick: vo((B) => o(x, e.index, B), ["stop"]) }, null);
      if (b.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...k, props: { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: vo(() => d(x), ["stop"]) } })) ?? S($e, { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: vo(() => d(x), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](k);
      const E = Ut(k.value);
      return l.value ? p(he, null, [p("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? b.title]), p("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, k)) ?? E])]) : E;
    } });
  })]));
} }), By = R({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...Zt(My(), ["collapseIcon", "expandIcon", "density"]), ...Zt(Ey(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...sl() }, "VDataTableRows"), ll = Z()({ name: "VDataTableRows", inheritAttrs: false, props: By(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = Fr(), { expandOnClick: i, toggleExpand: o, isExpanded: r } = fy(), { isSelected: s, toggleSelect: u } = Er(), { toggleGroup: c, isGroupOpen: d } = my(), { t: f } = Ue(), { mobile: v } = dn(e);
  return te(() => {
    var _a3, _b2;
    const y = Zt(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : p(he, null, [e.items.map((m, b) => {
      var _a4, _b3;
      if (m.type === "group") {
        const I = { index: b, item: m, columns: l.value, isExpanded: r, toggleExpand: o, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : S(OV, U({ key: `group-header_${m.id}`, item: m }, rn(n, ":groupHeader", () => I), y), a);
      }
      if (m.type === "group-summary") {
        const I = { index: b, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: m.virtualIndex ?? b, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: o, isSelected: s, toggleSelect: u }, x = { ...h, props: U({ key: `item_${m.key ?? m.index}`, onClick: i.value ? () => {
        o(m);
      } : void 0, index: b, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, rn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return p(he, { key: x.props.key }, [a.item ? a.item(x) : S(Hc, x.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), Fy = R({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...Se(), ...ut(), ...Ae(), ...Ne() }, "VTable"), il = Z()({ name: "VTable", props: Fy(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = We(e), { densityClasses: i } = Mt(e);
  return te(() => S(e.tag, { class: ee(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, i.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? p("div", { class: "v-table__wrapper", style: { height: de(e.height) } }, [p("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), NV = R({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function RV(e, t, n, a) {
  const l = e.returnObject ? t : vt(t, e.itemValue), i = vt(t, e.itemSelectable, true), o = a.reduce((r, s) => (s.key != null && (r[s.key] = vt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? vt(t, e.itemValue) : l, index: n, value: l, selectable: i, columns: o, raw: t };
}
function HV(e, t, n) {
  return t.map((a, l) => RV(e, a, l, n));
}
function Wc(e, t) {
  return { items: _(() => HV(e, e.items, t.value)) };
}
const zc = R({ ...By(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...cy(), ...Ec(), ...EV(), ...NV(), ...ky(), ...py(), ...Be(Dy(), ["multiSort", "initialSortOrder"]), ...Fy() }, "DataTable"), WV = R({ ...Bc(), ...zc(), ...gl(), ...Oc() }, "VDataTable"), zV = Z()({ name: "VDataTable", props: WV(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Mc(e), { initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s } = Mr(e), { page: u, itemsPerPage: c } = Fc(e), { disableSort: d } = jl(e), { columns: f, headers: v, sortFunctions: y, sortRawFunctions: m, filterFunctions: b } = Rc(e, { groupBy: l, showSelect: M(() => e.showSelect), showExpand: M(() => e.showExpand) }), { items: h } = Wc(e, f), x = M(() => e.search), { filteredItems: I } = hl(e, h, x, { transform: (oe) => oe.columns, customKeyFilter: b }), { toggleSort: V } = Br({ initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: k, opened: g, extractRows: C, isGroupOpen: w, toggleGroup: T } = Pr({ groupBy: l, sortBy: o, disableSort: d }), { sortedItems: P } = $c(e, I, k, { transform: (oe) => ({ ...oe.raw, ...oe.columns }), sortFunctions: y, sortRawFunctions: m }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: B, setItemsPerPage: D, paginatedItems: A } = SV({ pageBy: E, sortedItems: P, paginate: (oe) => {
    const be = _(() => qe(oe).length), { startIndex: ne, stopIndex: fe, pageCount: Ie, setItemsPerPage: xe } = Lc({ page: u, itemsPerPage: c, itemsLength: be }), { paginatedItems: ge } = by({ items: oe, startIndex: ne, stopIndex: fe, itemsPerPage: c });
    return { paginatedItems: ge, pageCount: Ie, setItemsPerPage: xe };
  }, group: (oe) => Tr(oe, l, g, () => !!a["group-summary"]) }), L = _(() => C(A.value)), { isSelected: W, select: H, selectAll: X, toggleSelect: q, someSelected: N, allSelected: K } = Dr(e, { allItems: h, currentPage: L }), { isExpanded: z, toggleExpand: $ } = Ir(e);
  Ar({ page: u, itemsPerPage: c, sortBy: o, groupBy: l, search: x }), st({ VDataTableRows: { hideNoData: M(() => e.hideNoData), noDataText: M(() => e.noDataText), loading: M(() => e.loading), loadingText: M(() => e.loadingText) } });
  const j = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: o.value, pageCount: B.value, toggleSort: V, setItemsPerPage: D, someSelected: N.value, allSelected: K.value, isSelected: W, select: H, selectAll: X, toggleSelect: q, isExpanded: z, toggleExpand: $, isGroupOpen: w, toggleGroup: T, items: L.value.map((oe) => oe.raw), internalItems: L.value, groupedItems: A.value, columns: f.value, headers: v.value }));
  return te(() => {
    const oe = Ri.filterProps(e), be = al.filterProps(Be(e, ["multiSort"])), ne = ll.filterProps(e), fe = il.filterProps(e);
    return S(il, U({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, j.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(j.value) : p(he, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, j.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [S(al, U(be, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, j.value), !e.hideDefaultBody && p("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, j.value), a.body ? a.body(j.value) : S(ll, U(n, ne, { items: A.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, j.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, j.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, j.value)]);
    }, bottom: () => a.bottom ? a.bottom(j.value) : !e.hideDefaultFooter && p(he, null, [S(sn, null, null), S(Ri, oe, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), jV = R({ ...Be(zc(), ["hideDefaultFooter"]), ...Ec(), ...xh(), ...gl() }, "VDataTableVirtual"), YV = Z()({ name: "VDataTableVirtual", props: jV(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Mc(e), { initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s } = Mr(e), { disableSort: u } = jl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: y } = Rc(e, { groupBy: l, showSelect: M(() => e.showSelect), showExpand: M(() => e.showExpand) }), { items: m } = Wc(e, c), b = M(() => e.search), { filteredItems: h } = hl(e, m, b, { transform: (ge) => ge.columns, customKeyFilter: f }), { toggleSort: x } = Br({ initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: k, isGroupOpen: g, toggleGroup: C } = Pr({ groupBy: l, sortBy: o, disableSort: u }), { sortedItems: w } = $c(e, h, I, { transform: (ge) => ({ ...ge.raw, ...ge.columns }), sortFunctions: v, sortRawFunctions: y }), { flatItems: T } = Tr(w, l, V, () => !!a["group-summary"]), P = _(() => k(T.value)), { isSelected: E, select: B, selectAll: D, toggleSelect: A, someSelected: L, allSelected: W } = Dr(e, { allItems: P, currentPage: P }), { isExpanded: H, toggleExpand: X } = Ir(e), { containerRef: q, markerRef: N, paddingTop: K, paddingBottom: z, computedItems: $, handleItemResize: j, handleScroll: oe, handleScrollend: be, calculateVisibleItems: ne, scrollToIndex: fe } = Ch(e, T), Ie = _(() => $.value.map((ge) => ({ ...ge.raw, virtualIndex: ge.index })));
  Ar({ sortBy: o, page: ie(1), itemsPerPage: ie(-1), groupBy: l, search: b }), st({ VDataTableRows: { hideNoData: M(() => e.hideNoData), noDataText: M(() => e.noDataText), loading: M(() => e.loading), loadingText: M(() => e.loadingText) } });
  const xe = _(() => ({ sortBy: o.value, toggleSort: x, someSelected: L.value, allSelected: W.value, isSelected: E, select: B, selectAll: D, toggleSelect: A, isExpanded: H, toggleExpand: X, isGroupOpen: g, toggleGroup: C, items: P.value.map((ge) => ge.raw), internalItems: P.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return te(() => {
    const ge = al.filterProps(Be(e, ["multiSort"])), F = ll.filterProps(e), O = il.filterProps(e);
    return S(il, U({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, O, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, xe.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return p("div", { ref: q, onScrollPassive: oe, onScrollend: be, class: "v-table__wrapper", style: { height: de(e.height) } }, [p("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, xe.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [S(al, U(ge, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, xe.value), !e.hideDefaultBody && p("tbody", { key: "tbody" }, [p("tr", { ref: N, style: { height: de(K.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, xe.value), S(ll, U(n, F, { items: Ie.value }), { ...a, item: (J) => S(ph, { key: J.internalItem.index, renderless: true, "onUpdate:height": (se) => j(J.internalItem.index, se) }, { default: (se) => {
        var _a4;
        let { itemRef: le } = se;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...J, itemRef: le })) ?? S(Hc, U(J.props, { ref: le, key: J.internalItem.index, index: J.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, xe.value), p("tr", { style: { height: de(z.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, xe.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, xe.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, xe.value);
    } });
  }), { calculateVisibleItems: ne, scrollToIndex: fe };
} }), UV = R({ itemsLength: { type: [Number, String], required: true }, ...Bc(), ...zc(), ...Oc() }, "VDataTableServer"), KV = Z()({ name: "VDataTableServer", props: UV(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Mc(e), { initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s } = Mr(e), { page: u, itemsPerPage: c } = Fc(e), { disableSort: d } = jl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: y } = Rc(e, { groupBy: l, showSelect: M(() => e.showSelect), showExpand: M(() => e.showExpand) }), { items: m } = Wc(e, v), { toggleSort: b } = Br({ initialSortOrder: i, sortBy: o, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: x, toggleGroup: I, extractRows: V } = Pr({ groupBy: l, sortBy: o, disableSort: d }), { pageCount: k, setItemsPerPage: g } = Lc({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Tr(m, l, h, () => !!a["group-summary"]), { isSelected: w, select: T, selectAll: P, toggleSelect: E, someSelected: B, allSelected: D } = Dr(e, { allItems: m, currentPage: m }), { isExpanded: A, toggleExpand: L } = Ir(e), W = _(() => V(m.value));
  Ar({ page: u, itemsPerPage: c, sortBy: o, groupBy: l, search: M(() => e.search) }), et("v-data-table", { toggleSort: b, sortBy: o }), st({ VDataTableRows: { hideNoData: M(() => e.hideNoData), noDataText: M(() => e.noDataText), loading: M(() => e.loading), loadingText: M(() => e.loadingText) } });
  const H = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: o.value, pageCount: k.value, toggleSort: b, setItemsPerPage: g, someSelected: B.value, allSelected: D.value, isSelected: w, select: T, selectAll: P, toggleSelect: E, isExpanded: A, toggleExpand: L, isGroupOpen: x, toggleGroup: I, items: W.value.map((X) => X.raw), internalItems: W.value, groupedItems: C.value, columns: v.value, headers: y.value }));
  te(() => {
    const X = Ri.filterProps(e), q = al.filterProps(Be(e, ["multiSort"])), N = ll.filterProps(e), K = il.filterProps(e);
    return S(il, U({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, K, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, H.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(H.value) : p(he, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, H.value), !e.hideDefaultHeader && p("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [S(al, U(q, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, H.value), !e.hideDefaultBody && p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, H.value), a.body ? a.body(H.value) : S(ll, U(n, N, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, H.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, H.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, H.value)]);
    }, bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && p(he, null, [S(sn, null, null), S(Ri, X, { prepend: a["footer.prepend"] })]) });
  });
} }), GV = R({ fluid: { type: Boolean, default: false }, ...Se(), ...ht(), ...Ae() }, "VContainer"), qV = Z()({ name: "VContainer", props: GV(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = wt(), { dimensionStyles: l } = yt(e);
  return te(() => S(e.tag, { class: ee(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: me([l.value, e.style]) }, n)), {};
} }), Ly = dr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), $y = dr.reduce((e, t) => {
  const n = "offset" + Hn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Oy = dr.reduce((e, t) => {
  const n = "order" + Hn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Yf = { col: Object.keys(Ly), offset: Object.keys($y), order: Object.keys(Oy) };
function XV(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const ZV = ["auto", "start", "end", "center", "baseline", "stretch"], JV = R({ cols: { type: [Boolean, String, Number], default: false }, ...Ly, offset: { type: [String, Number], default: null }, ...$y, order: { type: [String, Number], default: null }, ...Oy, alignSelf: { type: String, default: null, validator: (e) => ZV.includes(e) }, ...Se(), ...Ae() }, "VCol"), QV = Z()({ name: "VCol", props: JV(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let i;
    for (i in Yf) Yf[i].forEach((r) => {
      const s = e[r], u = XV(i, r, s);
      u && l.push(u);
    });
    const o = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !o || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ra(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), jc = ["start", "end", "center"], Ny = ["space-between", "space-around", "space-evenly"];
function Yc(e, t) {
  return dr.reduce((n, a) => {
    const l = e + Hn(a);
    return n[l] = t(), n;
  }, {});
}
const eI = [...jc, "baseline", "stretch"], Ry = (e) => eI.includes(e), Hy = Yc("align", () => ({ type: String, default: null, validator: Ry })), tI = [...jc, ...Ny], Wy = (e) => tI.includes(e), zy = Yc("justify", () => ({ type: String, default: null, validator: Wy })), nI = [...jc, ...Ny, "stretch"], jy = (e) => nI.includes(e), Yy = Yc("alignContent", () => ({ type: String, default: null, validator: jy })), Uf = { align: Object.keys(Hy), justify: Object.keys(zy), alignContent: Object.keys(Yy) }, aI = { align: "align", justify: "justify", alignContent: "align-content" };
function lI(e, t, n) {
  let a = aI[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const iI = R({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Ry }, ...Hy, justify: { type: String, default: null, validator: Wy }, ...zy, alignContent: { type: String, default: null, validator: jy }, ...Yy, ...Se(), ...Ae() }, "VRow"), oI = Z()({ name: "VRow", props: iI(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let i;
    for (i in Uf) Uf[i].forEach((o) => {
      const r = e[o], s = lI(i, o, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ra(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), nu = sa("v-spacer", "div", "VSpacer"), Uy = R({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, modeIcon: { type: Ce, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), au = Z()({ name: "VDatePickerControls", props: Uy(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Ue(), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
  function d() {
    n("click:prev");
  }
  function f() {
    n("click:next");
  }
  function v() {
    n("click:prev-year");
  }
  function y() {
    n("click:next-year");
  }
  function m() {
    n("click:year");
  }
  function b() {
    n("click:month");
  }
  return te(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, x = S($e, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = S($e, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = S($e, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), k = S($e, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: y }, null), g = S($e, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: i.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), C = S($e, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: o.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), w = S($e, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: o.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = p(he, null, [S($e, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: i.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), S($e, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: o.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: b, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: y }, E = p(he, null, [e.noMonthPicker ? w : T, S(nu, null, null), p("div", { class: "v-date-picker-controls__month" }, [x, I])]), B = p(he, null, [p("div", { class: "v-date-picker-controls__month" }, [x, g, I]), S(nu, null, null), p("div", { class: "v-date-picker-controls__year" }, [V, C, k])]);
    return S(De, { defaults: h }, { default: () => {
      var _a3;
      return [p("div", { class: ee(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": de(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? p(he, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && B])])];
    } });
  }), {};
} }), rI = R({ appendIcon: Ce, color: String, header: String, transition: String, onClick: At() }, "VDatePickerHeader"), lu = Z()({ name: "VDatePickerHeader", props: rI(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color);
  function o() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return te(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return p("div", { class: ee(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: me(i.value), onClick: o }, [a.prepend && p("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && S(Yt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [p("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && p("div", { class: "v-date-picker-header__append" }, [a.append ? S(De, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : S($e, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), sI = R({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function uI(e) {
  const t = rl(), n = pe(e, "modelValue", [], (m) => Je(m).map((b) => t.date(b))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = pe(e, "year", void 0, (m) => {
    const b = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), b));
  }, (m) => t.getYear(m)), i = pe(e, "month", void 0, (m) => {
    const b = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, b);
  }, (m) => t.getMonth(m)), o = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((b, h) => e.weekdays.includes((h + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(i.value, e.firstDayOfWeek), b = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && b.length < h) {
      const x = b[b.length - 1];
      let I = [];
      for (let V = 1; V <= h - b.length; V++) I.push(t.addDays(x, V)), V % 7 === 0 && (m.push(I), I = []);
    }
    return m;
  });
  function s(m, b) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, x) => {
      const I = t.toISO(h), V = !t.isSameMonth(h, i.value), k = t.isSameDay(h, t.startOfMonth(i.value)), g = t.isSameDay(h, t.endOfMonth(i.value)), C = t.isSameDay(h, i.value), w = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: V, isDisabled: y(h), isEnd: g, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(h, T)), isStart: k, isToday: t.isSameDay(h, b), isWeekEnd: x % w === w - 1, isWeekStart: x % w === 0, isoDate: I, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const u = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), b = [];
    for (let x = 0; x <= 6; x++) b.push(t.addDays(m, x));
    const h = t.date();
    return s(b, h);
  }), c = _(() => {
    const m = r.value.flat(), b = t.date();
    return s(m, b);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = Ky(e);
  function y(m) {
    if (e.disabled) return true;
    const b = t.date(m);
    return f.value && t.isBefore(t.endOfDay(b), f.value) || v.value && t.isAfter(b, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), b)) : typeof e.allowedDates == "function" ? !e.allowedDates(b) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: o, weekNumbers: d };
}
function Ky(e) {
  const t = rl(), n = _(() => {
    if (!e.min) return null;
    const o = t.date(e.min);
    return t.isValid(o) ? o : null;
  }), a = _(() => {
    if (!e.max) return null;
    const o = t.date(e.max);
    return t.isValid(o) ? o : null;
  });
  function l(o) {
    return n.value && t.isBefore(o, n.value) ? n.value : a.value && t.isAfter(o, a.value) ? a.value : o;
  }
  function i(o) {
    return (!n.value || t.isAfter(o, n.value)) && (!a.value || t.isBefore(o, a.value));
  }
  return { minDate: n, maxDate: a, clampDate: l, isInAllowedRange: i };
}
const Gy = R({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Be(sI(), ["displayValue"]) }, "VDatePickerMonth"), iu = Z()({ name: "VDatePickerMonth", props: Gy(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Q(), { t: i } = Ue(), { daysInMonth: o, model: r, weekNumbers: s, weekdayLabels: u } = uI(e), c = rl(), d = ie(), f = ie(), v = ie(false), y = M(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = _(() => {
    const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= g;
  });
  ue(o, (g, C) => {
    C && (v.value = c.isBefore(g[0].date, C[0].date));
  });
  function b(g) {
    const C = c.startOfDay(g);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = g, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = dp(c, d.value, f.value);
    }
  }
  function h(g) {
    const C = c.format(g.date, "fullDateWithWeekday"), w = g.isToday ? "currentDate" : "selectDate";
    return i(`$vuetify.datePicker.ariaLabel.${w}`, C);
  }
  function x(g) {
    const C = r.value.findIndex((w) => c.isSameDay(w, g));
    if (C === -1) r.value = [...r.value, g];
    else {
      const w = [...r.value];
      w.splice(C, 1), r.value = w;
    }
  }
  function I(g) {
    e.multiple === "range" ? b(g) : e.multiple ? x(g) : r.value = [g];
  }
  function V(g) {
    const { events: C, eventColor: w } = e;
    let T, P = [];
    if (Array.isArray(C) ? T = C.includes(g) : C instanceof Function ? T = C(g) || false : C ? T = C[g] || false : T = false, T) T !== true ? P = Je(T) : typeof w == "string" ? P = [w] : typeof w == "function" ? P = Je(w(g)) : Array.isArray(w) ? P = w : typeof w == "object" && w !== null && (P = Je(w[g]));
    else return [];
    return P.length ? P.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function k(g) {
    const C = V(g);
    return C.length ? p("div", { class: "v-date-picker-month__events" }, [C.map((w) => S(_h, { dot: true, color: w }, null))]) : null;
  }
  te(() => p("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && p("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && p("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [St("\xA0")]), s.value.map((g) => p("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), S(Yt, { name: y.value }, { default: () => {
    var _a3;
    return [p("div", { ref: l, key: (_a3 = o.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((g) => p("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), o.value.map((g, C) => {
      var _a4;
      const w = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return m.value && !g.isSelected && (g.isDisabled = true), p("div", { class: ee(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, w)) ?? S($e, w.props, { default: () => [g.localized, k(g.isoDate)] }))]);
    })])];
  } })]));
} }), qy = R({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), ou = Z()({ name: "VDatePickerMonths", props: qy(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = rl(), i = pe(e, "modelValue"), o = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Mn(12).map((u) => {
      const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
      return s = l.getNextMonth(s), { isDisabled: f, text: c, label: d, value: u };
    });
  });
  lt(() => {
    i.value = i.value ?? l.getMonth(l.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return te(() => p("div", { class: "v-date-picker-months", style: { height: de(e.height) } }, [p("div", { class: "v-date-picker-months__content" }, [o.value.map((s, u) => {
    var _a3;
    const c = { active: i.value === u, ariaLabel: s.label, color: i.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: i.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (i.value === f) {
        n("update:modelValue", i.value);
        return;
      }
      i.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? S($e, U({ key: "month" }, c), null);
  })])])), {};
} }), Xy = R({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), ru = Z()({ name: "VDatePickerYears", props: Xy(), directives: { vIntersect: _n }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = rl(), i = pe(e, "modelValue"), o = ie(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, y = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (y = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Mn(y - v + 1, v).map((b) => {
      const h = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: h, value: b, isDisabled: !d(b) };
    });
  });
  lt(() => {
    i.value = i.value ?? l.getYear(l.date());
  });
  const s = Ii(), u = Ii();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const y = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - y.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return te(() => Xe(p("div", { class: "v-date-picker-years", ref: s, style: { height: de(e.height) } }, [p("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => o.value = true, onFocusout: () => o.value = false, tabindex: o.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const y = { ref: i.value === f.value ? u : void 0, active: i.value === f.value, color: i.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: i.value === f.value ? "flat" : "text", onClick: () => {
      if (i.value === f.value) {
        n("update:modelValue", i.value);
        return;
      }
      i.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: y })) ?? S($e, U({ key: "month" }, y), null);
  })])]), [[_n, { handler: c }, null, { once: true }]])), {};
} }), cI = R({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Be(Uy(), ["active", "monthText", "yearText"]), ...Gy({ weeksInMonth: "static" }), ...Be(qy(), ["modelValue"]), ...Be(Xy(), ["modelValue"]), ...Vr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), dI = Z()({ name: "VDatePicker", props: cI(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = rl(), { t: i } = Ue(), { rtlClasses: o } = wt(), r = pe(e, "modelValue", void 0, (j) => Je(j).map((oe) => l.date(oe)), (j) => e.multiple ? j : j[0]), s = pe(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = Ky(e), f = _(() => {
    var _a3;
    const j = l.date(), oe = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(j);
    return oe && l.isValid(oe) ? oe : j;
  }), v = M(() => e.headerColor ?? e.color), y = pe(e, "month"), m = _({ get: () => Number(y.value ?? l.getMonth(l.startOfMonth(f.value))), set: (j) => y.value = j }), b = pe(e, "year"), h = _({ get: () => Number(b.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (j) => b.value = j }), x = ie(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return i("$vuetify.datePicker.itemsSelected", r.value.length);
    const j = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : i(e.header);
    return e.landscape && j.split(" ").length === 3 ? j.replace(" ", `
`) : j;
  }), V = M(() => {
    let j = l.date();
    return j = l.setDate(j, 1), j = l.setMonth(j, m.value), j = l.setYear(j, h.value), j;
  }), k = M(() => l.format(V.value, "monthAndYear")), g = M(() => l.format(V.value, "monthShort")), C = M(() => l.format(V.value, "year")), w = M(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), T = _(() => {
    if (e.disabled) return true;
    const j = [];
    if (s.value !== "month") j.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let oe = l.date();
      if (oe = l.startOfMonth(oe), oe = l.setMonth(oe, m.value), oe = l.setYear(oe, h.value), u.value) {
        const be = l.addDays(l.startOfMonth(oe), -1), ne = l.addDays(l.startOfYear(oe), -1);
        l.isAfter(u.value, be) && j.push("prev-month"), l.isAfter(u.value, ne) && j.push("prev-year");
      }
      if (c.value) {
        const be = l.addDays(l.endOfMonth(oe), 1), ne = l.addDays(l.endOfYear(oe), 1);
        l.isAfter(be, c.value) && j.push("next-month"), l.isAfter(ne, c.value) && j.push("next-year");
      }
    }
    return j;
  }), P = _(() => e.allowedYears || D), E = _(() => e.allowedMonths || A);
  function B(j, oe) {
    const be = e.allowedDates;
    if (typeof be != "function") return true;
    const ne = 1 + ug(l, j, oe);
    for (let fe = 0; fe < ne; fe++) if (be(l.addDays(j, fe))) return true;
    return false;
  }
  function D(j) {
    if (typeof e.allowedDates == "function") {
      const oe = l.parseISO(`${j}-01-01`);
      return B(oe, l.endOfYear(oe));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const oe of e.allowedDates) if (l.getYear(l.date(oe)) === j) return true;
      return false;
    }
    return true;
  }
  function A(j) {
    if (typeof e.allowedDates == "function") {
      const oe = String(j + 1).padStart(2, "0"), be = l.parseISO(`${h.value}-${oe}-01`);
      return B(be, l.endOfMonth(be));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const oe of e.allowedDates) if (l.getYear(l.date(oe)) === h.value && l.getMonth(l.date(oe)) === j) return true;
      return false;
    }
    return true;
  }
  function L() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, $()), z();
  }
  function W() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, $()), z();
  }
  function H() {
    if (h.value++, c.value) {
      const j = String(m.value + 1).padStart(2, "0"), oe = l.parseISO(`${h.value}-${j}-01`);
      l.isAfter(oe, c.value) && (m.value = l.getMonth(c.value));
    }
    $();
  }
  function X() {
    if (h.value--, u.value) {
      const j = String(m.value + 1).padStart(2, "0"), oe = l.endOfMonth(l.parseISO(`${h.value}-${j}-01`));
      l.isAfter(u.value, oe) && (m.value = l.getMonth(u.value));
    }
    $();
  }
  function q() {
    s.value = "month";
  }
  function N() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function K() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function z() {
    s.value === "months" && N();
  }
  function $() {
    s.value === "year" && K();
  }
  return ue(r, (j, oe) => {
    const be = Je(oe), ne = Je(j);
    if (!ne.length) return;
    const fe = l.date(be[be.length - 1]), Ie = l.date(ne[ne.length - 1]);
    if (l.isSameDay(fe, Ie)) return;
    const xe = l.getMonth(Ie), ge = l.getYear(Ie);
    xe !== m.value && (m.value = xe, z()), ge !== h.value && (h.value = ge, $()), x.value = l.isBefore(fe, Ie);
  }), te(() => {
    const j = zl.filterProps(e), oe = Be(au.filterProps(e), ["viewMode"]), be = lu.filterProps(e), ne = iu.filterProps(e), fe = Be(ou.filterProps(e), ["modelValue"]), Ie = Be(ru.filterProps(e), ["modelValue"]), xe = { color: v.value, header: I.value, transition: w.value };
    return S(zl, U(j, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, o.value, e.class], style: [{ "--v-date-picker-landscape-header-width": de(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-date-picker__title" }, [i(e.title)]);
    }, header: () => a.header ? S(De, { defaults: { VDatePickerHeader: { ...xe } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, xe)];
    } }) : S(lu, U({ key: "header" }, be, xe, { onClick: s.value !== "month" ? q : void 0 }), { prepend: a.prepend, append: a.append }), default: () => p(he, null, [S(au, U(oe, { disabled: T.value, viewMode: s.value, text: k.value, monthText: g.value, yearText: C.value, "onClick:next": L, "onClick:prev": W, "onClick:nextYear": H, "onClick:prevYear": X, "onClick:month": N, "onClick:year": K }), { default: a.controls }), S(Mi, { hideOnLeave: true }, { default: () => [s.value === "months" ? S(ou, U({ key: "date-picker-months" }, fe, { modelValue: m.value, "onUpdate:modelValue": [(ge) => m.value = ge, z], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? S(ru, U({ key: "date-picker-years" }, Ie, { modelValue: h.value, "onUpdate:modelValue": [(ge) => h.value = ge, $], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : S(iu, U({ key: "date-picker-month" }, ne, { modelValue: r.value, "onUpdate:modelValue": (ge) => r.value = ge, month: m.value, "onUpdate:month": [(ge) => m.value = ge, z], year: h.value, "onUpdate:year": [(ge) => h.value = ge, $], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), fI = R({ actionText: String, bgColor: String, color: String, icon: Ce, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...Se(), ...ht(), ...Yn({ size: void 0 }), ...Ne() }, "VEmptyState"), vI = Z()({ name: "VEmptyState", props: fI(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = We(e), { backgroundColorClasses: i, backgroundColorStyles: o } = ze(() => e.bgColor), { dimensionStyles: r } = yt(e), { displayClasses: s } = dn();
  function u(c) {
    n("click:action", c);
  }
  return te(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), y = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return p("div", { class: ee(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, i.value, s.value, e.class]), style: me([o.value, r.value, e.style]) }, [y && p("div", { key: "media", class: "v-empty-state__media" }, [a.media ? S(De, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : p(he, null, [e.image ? S(la, { key: "image", src: e.image, height: m }, null) : e.icon ? S(He, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && p("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && p("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && p("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: de(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && p("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && p("div", { key: "actions", class: "v-empty-state__actions" }, [S(De, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? S($e, { onClick: u }, null)];
    } })])]);
  }), {};
} }), Wi = Symbol.for("vuetify:v-expansion-panel"), Zy = R({ ...Se(), ...hc() }, "VExpansionPanelText"), su = Z()({ name: "VExpansionPanelText", props: Zy(), setup(e, t) {
  let { slots: n } = t;
  const a = Oe(Wi);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: i } = yc(e, a.isSelected);
  return te(() => S(mr, { onAfterLeave: i }, { default: () => {
    var _a3;
    return [Xe(p("div", { class: ee(["v-expansion-panel-text", e.class]), style: me(e.style) }, [n.default && l.value && p("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[In, a.isSelected.value]])];
  } })), {};
} }), Jy = R({ color: String, expandIcon: { type: Ce, default: "$expand" }, collapseIcon: { type: Ce, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...Se(), ...ht() }, "VExpansionPanelTitle"), uu = Z()({ name: "VExpansionPanelTitle", directives: { vRipple: Et }, props: Jy(), setup(e, t) {
  let { slots: n } = t;
  const a = Oe(Wi);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color), { dimensionStyles: o } = yt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = M(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return te(() => {
    var _a3;
    return Xe(p("button", { class: ee(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: me([i.value, o.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [p("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && S(De, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [p("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? S(He, null, null)])];
    } })]), [[Et, e.ripple]]);
  }), {};
} }), Qy = R({ title: String, text: String, bgColor: String, ...bt(), ...vl(), ...Qe(), ...Ae(), ...Jy(), ...Zy() }, "VExpansionPanel"), mI = Z()({ name: "VExpansionPanel", props: Qy(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Va(e, Wi), { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.bgColor), { elevationClasses: o } = xt(e), { roundedClasses: r } = it(e), s = M(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, y) => (a.group.selected.value.includes(v.id) && f.push(y), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return et(Wi, a), te(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), y = uu.filterProps(e), m = su.filterProps(e);
    return S(e.tag, { class: ee(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: me([i.value, e.style]) }, { default: () => [p("div", { class: ee(["v-expansion-panel__shadow", ...o.value]) }, null), S(De, { defaults: { VExpansionPanelTitle: { ...y }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && S(uu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && S(su, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), gI = ["default", "accordion", "inset", "popout"], hI = R({ flat: Boolean, ...fl(), ...Zt(Qy(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ne(), ...Se(), ...Ae(), variant: { type: String, default: "default", validator: (e) => gI.includes(e) } }, "VExpansionPanels"), yI = Z()({ name: "VExpansionPanels", props: hI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Ba(e, Wi), { themeClasses: i } = We(e), o = M(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return st({ VExpansionPanel: { bgColor: M(() => e.bgColor), collapseIcon: M(() => e.collapseIcon), color: M(() => e.color), eager: M(() => e.eager), elevation: M(() => e.elevation), expandIcon: M(() => e.expandIcon), focusable: M(() => e.focusable), hideActions: M(() => e.hideActions), readonly: M(() => e.readonly), ripple: M(() => e.ripple), rounded: M(() => e.rounded), static: M(() => e.static) } }), te(() => S(e.tag, { class: ee(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, i.value, o.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), bI = R({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Be(yr({ active: true }), ["location", "spaced"]), ...ul(), ...jn(), ...ua({ transition: "fab-transition" }) }, "VFab"), SI = Z()({ name: "VFab", props: bI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), l = ie(56), i = Q(), { resizeRef: o } = yn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = M(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  Dt(() => e.app, () => {
    const d = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: M(() => e.absolute) });
    lt(() => {
      i.value = d.layoutItemStyles.value;
    });
  });
  const c = Q();
  return te(() => {
    const d = $e.filterProps(e);
    return p("div", { ref: c, class: ee(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: me([e.app ? { ...i.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [p("div", { class: "v-fab__container" }, [S(Yt, { appear: e.appear, transition: e.transition }, { default: () => [Xe(S($e, U({ ref: o }, d, { active: void 0, location: void 0 }), n), [[In, e.active]])] })])]);
  }), {};
} });
function kI() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((i) => i.kind === "file").map((i) => i.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const i of l) {
      const o = await eb(i, tb(".", i));
      a.push(...o.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function eb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((i) => n([{ file: i, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (i) => {
      const o = [];
      for (const r of i) o.push(...await eb(r, tb(t, r)));
      n(o);
    });
  });
}
function tb(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const wI = R({ filterByType: String }, "file-accept");
function pI(e) {
  const t = _(() => e.filterByType ? xI(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((i) => !l.includes(i)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function xI(e) {
  const t = e.split(",").map((i) => i.trim().toLowerCase()), n = t.filter((i) => i.startsWith(".")), a = t.filter((i) => i.endsWith("/*")), l = t.filter((i) => !n.includes(i) && !a.includes(i));
  return (i) => {
    var _a3, _b2;
    const o = ((_a3 = i.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = i.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(i.type) || n.includes(`.${o}`) || a.includes(`${r}/*`);
  };
}
const CI = R({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Be(va({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => Je(e).every((t) => t != null && typeof t == "object") }, ...wI(), ...oo({ clearable: true }) }, "VFileInput"), _I = Z()({ name: "VFileInput", inheritAttrs: false, props: CI(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: i } = Ue(), { filterAccepted: o } = pI(e), r = pe(e, "modelValue", e.modelValue, (q) => Je(q), (q) => !e.multiple && Array.isArray(q) ? q[0] : q), { isFocused: s, focus: u, blur: c } = fa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((q, N) => {
    let { size: K = 0 } = N;
    return q + K;
  }, 0)), v = _(() => jd(f.value, d.value)), y = _(() => (r.value ?? []).map((q) => {
    const { name: N = "", size: K = 0 } = q, z = D(N);
    return e.showSize ? `${z} (${jd(K, d.value)})` : z;
  })), m = _(() => {
    var _a3;
    const q = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? i(e.counterSizeString, q, v.value) : i(e.counterString, q);
  }), b = Q(), h = Q(), x = Q(), I = M(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), k = ie(false), { handleDrop: g, hasFilesOrFolders: C } = kI();
  function w() {
    var _a3;
    x.value !== document.activeElement && ((_a3 = x.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function T(q) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click();
  }
  function P(q) {
    a("mousedown:control", q);
  }
  function E(q) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click(), a("click:control", q);
  }
  function B(q) {
    q.stopPropagation(), w(), Te(() => {
      r.value = [], qi(e["onClick:clear"], q);
    });
  }
  function D(q) {
    if (q.length < Number(e.truncateLength)) return q;
    const N = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${q.slice(0, N)}\u2026${q.slice(q.length - N)}`;
  }
  function A(q) {
    q.preventDefault(), q.stopImmediatePropagation(), k.value = true;
  }
  function L(q) {
    q.preventDefault(), k.value = false;
  }
  async function W(q) {
    if (q.preventDefault(), q.stopImmediatePropagation(), k.value = false, !x.value || !C(q)) return;
    const N = await g(q);
    X(N);
  }
  function H(q) {
    if (!(!q.target || q.repack)) if (e.filterByType) X([...q.target.files]);
    else {
      const N = q.target;
      r.value = [...N.files ?? []];
    }
  }
  function X(q) {
    const N = new DataTransfer(), { accepted: K, rejected: z } = o(q);
    z.length && a("rejected", z);
    for (const j of K) N.items.add(j);
    x.value.files = N.files, r.value = [...N.files];
    const $ = new Event("change", { bubbles: true });
    $.repack = true, x.value.dispatchEvent($);
  }
  return ue(r, (q) => {
    (!Array.isArray(q) || !q.length) && x.value && (x.value.value = "");
  }), te(() => {
    const q = !!(l.counter || e.counter), N = !!(q || l.details), [K, z] = Wn(n), { modelValue: $, ...j } = Ft.filterProps(e), oe = { ...Aa.filterProps(e), "onClick:clear": B }, be = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, ne = n.accept ? String(n.accept) : void 0, fe = be ? void 0 : e.filterByType ?? ne;
    return S(Ft, U({ ref: b, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": k.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": T }, K, j, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Ie) => {
      let { id: xe, isDisabled: ge, isDirty: F, isReadonly: O, isValid: J, hasDetails: se } = Ie;
      return S(Aa, U({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, oe, { id: xe.value, active: I.value || F.value, dirty: F.value || e.dirty, disabled: ge.value, focused: s.value, details: se.value, error: J.value === false, onDragover: A, onDrop: W }), { ...l, default: (le) => {
        var _a3;
        let { props: { class: re, ...ye }, controlRef: ce } = le;
        return p(he, null, [p("input", U({ ref: (Y) => x.value = ce.value = Y, type: "file", accept: fe, readonly: O.value, disabled: ge.value, multiple: e.multiple, name: e.name, onClick: (Y) => {
          Y.stopPropagation(), O.value && Y.preventDefault(), w();
        }, onChange: H, onDragleave: L, onFocus: w, onBlur: c }, ye, z), null), p("div", { class: ee(re) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: y.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? y.value.map((Y) => S(ia, { key: Y, size: "small", text: Y }, null)) : y.value.join(", "))])]);
      } });
    }, details: N ? (Ie) => {
      var _a3, _b2;
      return p(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Ie), q && p(he, null, [p("span", null, null), S(Sr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Ct({}, b, h, x);
} }), VI = R({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...$t(), ...Se(), ...bt(), ...ul(), ...Qe(), ...Ae({ tag: "footer" }), ...Ne() }, "VFooter"), II = Z()({ name: "VFooter", props: VI(), setup(e, t) {
  let { slots: n } = t;
  const a = Q(), { themeClasses: l } = We(e), { backgroundColorClasses: i, backgroundColorStyles: o } = ze(() => e.color), { borderClasses: r } = Gt(e), { elevationClasses: s } = xt(e), { roundedClasses: u } = it(e), c = ie(32), { resizeRef: d } = yn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Dt(() => e.app, () => {
    const v = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: M(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: M(() => e.app), absolute: M(() => e.absolute) });
    lt(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), te(() => S(e.tag, { ref: d, class: ee(["v-footer", l.value, i.value, r.value, s.value, u.value, e.class]), style: me([o.value, e.app ? a.value : { height: de(e.height) }, e.style]) }, n)), {};
} }), PI = R({ ...Se(), ...Bx() }, "VForm"), TI = Z()({ name: "VForm", props: PI(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Fx(e), i = Q();
  function o(s) {
    s.preventDefault(), l.reset();
  }
  function r(s) {
    const u = s, c = l.validate();
    u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
      var _a3;
      let { valid: f } = d;
      f && ((_a3 = i.value) == null ? void 0 : _a3.submit());
    }), u.preventDefault();
  }
  return te(() => {
    var _a3;
    return p("form", { ref: i, class: ee(["v-form", e.class]), style: me(e.style), novalidate: true, onReset: o, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Ct(l, i);
} }), AI = R({ color: String, ...$t(), ...Se(), ...Qe(), ...Ae({ tag: "kbd" }), ...Ne(), ...bt() }, "VKbd"), cu = Z()({ name: "VKbd", props: AI(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { borderClasses: l } = Gt(e), { roundedClasses: i } = it(e), { backgroundColorClasses: o, backgroundColorStyles: r } = ze(() => e.color), { elevationClasses: s } = xt(e);
  return te(() => S(e.tag, { class: ee(["v-kbd", a.value, o.value, l.value, s.value, i.value, e.class]), style: me([r.value, e.style]) }, n)), {};
} });
function nb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let i = a[l] ?? a.text;
  return l === "text" && typeof i == "string" && i.startsWith("$") && !i.startsWith("$vuetify.") && (i = i.slice(1).toUpperCase()), l === "icon" ? ["icon", i] : [l, i];
}
const ab = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, DI = R({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => ab }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...Se(), ...Ne(), ...$t(), ...Qe(), ...bt(), color: String }, "VHotkey"), ss = Symbol("VHotkey:AND_DELINEATOR"), us = Symbol("VHotkey:SLASH_DELINEATOR"), Kf = Symbol("VHotkey:THEN_DELINEATOR");
function EI(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = nb(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Gf(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const i = nb(e[l], t, a);
    return i[0] === "text" && typeof i[1] == "string" && i[1].startsWith("$") && !i[1].startsWith("$vuetify.") ? ["text", i[1].replace("$", "").toUpperCase(), n] : [...i, n];
  }
  return ["text", n.toUpperCase(), n];
}
const MI = Z()({ name: "VHotkey", props: DI(), setup(e) {
  const { t } = Ue(), { themeClasses: n } = We(e), { rtlClasses: a } = wt(), { borderClasses: l } = Gt(e), { roundedClasses: i } = it(e), { elevationClasses: o } = xt(e), { colorClasses: r, colorStyles: s, variantClasses: u } = da(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const x = [], I = Pp(h);
    for (let V = 0; V < I.length; V++) {
      const k = I[V];
      V > 0 && x.push(Kf);
      const { keys: g, separators: C } = yg(k);
      for (let w = 0; w < g.length; w++) {
        const T = g[w];
        w > 0 && x.push(C[w - 1] === "/" ? us : ss), x.push(Gf(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return x;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const x = d.value.map((I) => {
      const V = [];
      for (const k of I) if (Array.isArray(k)) {
        const g = k[0] === "icon" || k[0] === "symbol" ? Gf(Bt(ab, e.keyMap), "text", String(k[1]), c.value)[1] : k[1];
        V.push(v(g));
      } else k === ss ? V.push(t("$vuetify.hotkey.plus")) : k === us ? V.push(t("$vuetify.hotkey.or")) : k === Kf && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", x);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function y(h) {
    if (e.displayMode === "text") return;
    const x = EI(e.keyMap, String(h[2]), c.value);
    return v(x);
  }
  function m(h, x) {
    const I = e.variant === "contained", V = I ? "kbd" : cu, k = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, i.value, o.value, r.value]];
    return S(V, { key: x, class: ee(k), style: me(I ? void 0 : s.value), "aria-hidden": "true", title: y(h) }, { default: () => [h[0] === "icon" ? S(He, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function b(h, x) {
    return p("span", { key: x, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === ss ? "+" : h === us ? "/" : t("$vuetify.hotkey.then")]);
  }
  te(() => {
    const h = p(he, null, [e.prefix && p("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((x, I) => p("span", { class: "v-hotkey__combination", key: I }, [x.map((V, k) => Array.isArray(V) ? m(V, k) : b(V, k)), I < d.value.length - 1 && p("span", { "aria-hidden": "true" }, [St("\xA0")])])), e.suffix && p("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return p("div", { class: ee(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: me(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : S(cu, { key: "contained", class: ee(["v-hotkey__contained-wrapper", l.value, i.value, o.value, r.value]), style: me(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), BI = R({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...mc() }, "VHover"), FI = Z()({ name: "VHover", props: BI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), { runOpenDelay: l, runCloseDelay: i } = gc(e, (o) => !e.disabled && (a.value = o));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: i } });
  };
} }), LI = R({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...ht(), ...Ae() }, "VInfiniteScroll"), qf = Kt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = Ji();
  return ue(l, async (i) => {
    n("intersect", e.side, i);
  }), te(() => p("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [St("\xA0")])), {};
} }), $I = Z()({ name: "VInfiniteScroll", props: LI(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Q(), i = ie("ok"), o = ie("ok"), r = _(() => de(e.margin)), s = ie(false);
  function u(g) {
    if (!l.value) return;
    const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    l.value[C] = g;
  }
  function c() {
    if (!l.value) return 0;
    const g = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    return l.value[g];
  }
  function d() {
    if (!l.value) return 0;
    const g = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
    return l.value[g];
  }
  function f() {
    if (!l.value) return 0;
    const g = e.direction === "vertical" ? "clientHeight" : "clientWidth";
    return l.value[g];
  }
  kt(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(g, C) {
    g === "start" ? i.value = C : g === "end" ? o.value = C : g === "both" && (i.value = C, o.value = C);
  }
  function y(g) {
    return g === "start" ? i.value : o.value;
  }
  let m = 0;
  function b(g, C) {
    s.value = C, s.value && h(g);
  }
  function h(g) {
    if (e.mode !== "manual" && !s.value) return;
    const C = y(g);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(g, "loading");
    function w(T) {
      v(g, T), Te(() => {
        T === "empty" || T === "error" || (T === "ok" && g === "start" && u(d() - m + c()), e.mode !== "manual" && Te(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                h(g);
              });
            });
          });
        }));
      });
    }
    a("load", { side: g, done: w });
  }
  const { t: x } = Ue();
  function I(g, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== g && e.side !== "both") return;
    const w = () => h(g), T = { side: g, props: { onClick: w, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? p("div", null, [x(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? S(Ia, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? S($e, { variant: "outlined", color: e.color, onClick: w }, { default: () => [x(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? S(Ia, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = yt(e);
  te(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", w = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return S(g, { ref: l, class: ee(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": w }]), style: me(V.value) }, { default: () => {
      var _a3;
      return [p("div", { class: "v-infinite-scroll__side" }, [I("start", i.value)]), C && T && S(qf, { key: "start", side: "start", onIntersect: b, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), w && T && S(qf, { key: "end", side: "end", onIntersect: b, rootMargin: r.value }, null), p("div", { class: "v-infinite-scroll__side" }, [I("end", o.value)])];
    } });
  });
  function k(g) {
    const C = g ?? e.side;
    v(C, "ok"), Te(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Te(() => {
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
  return { reset: k };
} }), lb = Symbol.for("vuetify:v-item-group"), OI = R({ ...Se(), ...fl({ selectedClass: "v-item--selected" }), ...Ae(), ...Ne() }, "VItemGroup"), NI = Z()({ name: "VItemGroup", props: OI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { isSelected: l, select: i, next: o, prev: r, selected: s } = Ba(e, lb);
  return () => S(e.tag, { class: ee(["v-item-group", a.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: i, next: o, prev: r, selected: s.value })];
  } });
} }), RI = Z()({ name: "VItem", props: vl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: i, selectedClass: o, value: r, disabled: s } = Va(e, lb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: o.value, select: l, toggle: i, value: r.value, disabled: s.value });
  };
} }), HI = R({ ...Se(), ...ht(), ...mg() }, "VLayout"), WI = Z()({ name: "VLayout", props: HI(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: i, items: o, layoutRef: r } = hg(e), { dimensionStyles: s } = yt(e);
  return te(() => {
    var _a3;
    return p("div", { ref: r, class: ee([a.value, e.class]), style: me([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: i, items: o };
} }), zI = R({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...Se(), ...ul() }, "VLayoutItem"), jI = Z()({ name: "VLayoutItem", props: zI(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: M(() => e.position), elementSize: M(() => e.size), layoutSize: M(() => e.size), active: M(() => e.modelValue), absolute: M(() => e.absolute) });
  return () => {
    var _a3;
    return p("div", { class: ee(["v-layout-item", e.class]), style: me([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), YI = R({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...Se(), ...ht(), ...Ae(), ...ua({ transition: "fade-transition" }) }, "VLazy"), UI = Z()({ name: "VLazy", directives: { vIntersect: _n }, props: YI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = yt(e), l = pe(e, "modelValue");
  function i(o) {
    l.value || (l.value = o);
  }
  return te(() => Xe(S(e.tag, { class: ee(["v-lazy", e.class]), style: me([a.value, e.style]) }, { default: () => [l.value && S(Yt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[_n, { handler: i, options: e.options }, null]])), {};
} }), KI = R({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...Se() }, "VLocaleProvider"), GI = Z()({ name: "VLocaleProvider", props: KI(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = lg(e);
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-locale-provider", a.value, e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), qI = R({ scrollable: Boolean, ...Se(), ...ht(), ...Ae({ tag: "main" }) }, "VMain"), XI = Z()({ name: "VMain", props: qI(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = yt(e), { mainStyles: l } = gg(), { ssrBootStyles: i } = dl();
  return te(() => S(e.tag, { class: ee(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: me([l.value, i.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? p("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function ZI(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ie(false), i = ie(0), o = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: de(i.value) } : { top: a.value.top }];
  });
  kt(() => {
    ue(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Lt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - d), v = c.height + Math.max(i.value, d) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", i.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (i.value = window.scrollY + c.top - y, l.value = true) : u === "down" && v <= 0 ? (i.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (y ? l.value !== "top" && (i.value = -f + y + d, l.value = "top") : (i.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: o };
}
const JI = 100, QI = 20;
function Xf(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Zf(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Xf(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Xf(t) * 1e3;
}
function eP() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new Rm(QI))).push([l.timeStamp, i]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var _a3;
    const i = (_a3 = e[l]) == null ? void 0 : _a3.values().reverse();
    if (!i) throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const u of i) {
      if (o[0] - u[0] > JI) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Zf(r), y: Zf(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : tP();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function tP() {
  throw new Error();
}
function nP(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: i, position: o } = e;
  kt(() => {
    window.addEventListener("touchstart", x, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Lt(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(o.value)), { addMovement: s, endTouch: u, getVelocity: c } = eP();
  let d = false;
  const f = ie(false), v = ie(0), y = ie(0);
  let m;
  function b(g, C) {
    return (o.value === "left" ? g : o.value === "right" ? document.documentElement.clientWidth - g : o.value === "top" ? g : o.value === "bottom" ? document.documentElement.clientHeight - g : wl()) - (C ? l.value : 0);
  }
  function h(g) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const w = o.value === "left" ? (g - y.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - g - y.value) / l.value : o.value === "top" ? (g - y.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - g - y.value) / l.value : wl();
    return C ? je(w) : w;
  }
  function x(g) {
    if (i.value) return;
    const C = g.changedTouches[0].clientX, w = g.changedTouches[0].clientY, T = 25, P = o.value === "left" ? C < T : o.value === "right" ? C > document.documentElement.clientWidth - T : o.value === "top" ? w < T : o.value === "bottom" ? w > document.documentElement.clientHeight - T : wl(), E = n.value && (o.value === "left" ? C < l.value : o.value === "right" ? C > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : wl());
    (P || E || n.value && a.value) && (m = [C, w], y.value = b(r.value ? C : w, n.value), v.value = h(r.value ? C : w), d = y.value > -20 && y.value < 80, u(g), s(g));
  }
  function I(g) {
    const C = g.changedTouches[0].clientX, w = g.changedTouches[0].clientY;
    if (d) {
      if (!g.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), E = Math.abs(w - m[1]);
      (r.value ? P > E && P > 3 : E > P && E > 3) ? (f.value = true, d = false) : (r.value ? E : P) > 3 && (d = false);
    }
    if (!f.value) return;
    g.preventDefault(), s(g);
    const T = h(r.value ? C : w, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? y.value = b(r.value ? C : w, true) : T < 0 && (y.value = b(r.value ? C : w, false));
  }
  function V(g) {
    if (d = false, !f.value) return;
    s(g), f.value = false;
    const C = c(g.changedTouches[0].identifier), w = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? w > T && w > 400 : T > w && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[o.value] || wl()) : n.value = v.value > 0.5;
  }
  const k = _(() => f.value ? { transform: o.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : wl(), transition: "none" } : void 0);
  return Dt(f, () => {
    var _a3, _b2;
    const g = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    lt(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = k.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = k.value) == null ? void 0 : _c2.transition) || null);
    }), ft(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", g), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: k };
}
function wl() {
  throw new Error();
}
const aP = ["start", "end", "left", "right", "top", "bottom"], lP = R({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => aP.includes(e) }, sticky: Boolean, ...$t(), ...Se(), ...mc(), ...sl({ mobile: null }), ...bt(), ...ul(), ...Qe(), ...Be(mh(), ["disableInitialFocus"]), ...Ae({ tag: "nav" }), ...Ne() }, "VNavigationDrawer"), iP = Z()({ name: "VNavigationDrawer", props: lP(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: i } = wt(), { themeClasses: o } = We(e), { borderClasses: r } = Gt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = ze(() => e.color), { elevationClasses: c } = xt(e), { displayClasses: d, mobile: f } = dn(e), { roundedClasses: v } = it(e), y = Vg(), m = pe(e, "modelValue", null, (N) => !!N), { ssrBootStyles: b } = dl(), { scopeId: h } = ml(), x = Q(), I = ie(false), { runOpenDelay: V, runCloseDelay: k } = gc(e, (N) => {
    I.value = N;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Is(e.location, i.value)), w = M(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && C.value !== "bottom");
  gh(e, { isActive: m, localTop: T, contentEl: x }), Dt(() => e.expandOnHover && e.rail != null, () => {
    ue(I, (N) => a("update:rail", !N));
  }), Dt(() => !e.disableResizeWatcher, () => {
    ue(T, (N) => !e.permanent && Te(() => m.value = !N));
  }), Dt(() => !e.disableRouteWatcher && !!y, () => {
    ue(y.currentRoute, () => T.value && (m.value = false));
  }), ue(() => e.permanent, (N) => {
    N && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: B } = nP({ el: x, isActive: m, isTemporary: T, width: g, touchless: M(() => e.touchless), position: C }), D = _(() => {
    const N = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? N * B.value : N;
  }), { layoutItemStyles: A, layoutItemScrimStyles: L } = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: D, elementSize: g, active: Xa(m), disableTransitions: M(() => E.value), absolute: _(() => e.absolute || P.value && typeof W.value != "string") }), { isStuck: W, stickyStyles: H } = ZI({ rootEl: x, isSticky: P, layoutItemStyles: A }), X = ze(() => typeof e.scrim == "string" ? e.scrim : null), q = _(() => ({ ...E.value ? { opacity: B.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return st({ VList: { bgColor: "transparent" } }), te(() => {
    const N = l.image || e.image;
    return p(he, null, [S(e.tag, U({ ref: x, onMouseenter: V, onMouseleave: k, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": w.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, o.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, A.value, b.value, H.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [N && p("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? S(De, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : S(la, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && p("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), p("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && p("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), S(Ca, { name: "fade-transition" }, { default: () => [T.value && (E.value || m.value) && !!e.scrim && p("div", U({ class: ["v-navigation-drawer__scrim", X.backgroundColorClasses.value], style: [q.value, X.backgroundColorStyles.value], onClick: () => {
      w.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: W };
} }), oP = Kt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = hh();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), rP = 50, sP = 500;
function uP(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  ft(i);
  function l(r) {
    i(), o(r), window.addEventListener("pointerup", i), document.addEventListener("blur", i), n = window.setTimeout(() => {
      a = window.setInterval(() => o(r), rP);
    }, sP);
  }
  function i() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", i), document.removeEventListener("blur", i);
  }
  ft(i);
  function o(r) {
    t(r === "up");
  }
  return { holdStart: l, holdStop: i };
}
const cP = R({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Be(ro(), ["modelValue", "validationValue"]) }, "VNumberInput"), dP = Z()({ name: "VNumberInput", props: { ...cP() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Q(), { holdStart: l, holdStop: i } = uP({ toggleUpDown: E }), o = Xl(e), r = _(() => o.isDisabled.value || o.isReadonly.value), s = ie(e.focused), { decimalSeparator: u } = Ue(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d($) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const be = j == null ? String($) : $.toFixed(j);
    if (s.value && oe) return Number(be).toString().replace(".", c.value);
    if (e.minFractionDigits === null || j !== null && j < e.minFractionDigits) return be.replace(".", c.value);
    let [ne, fe] = be.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [ne, fe].filter(Boolean).join(c.value);
  }
  const f = pe(e, "modelValue", null, ($) => $ ?? null, ($) => $ == null ? $ ?? null : je(Number($), e.min, e.max)), v = ie(null), y = ie(null);
  ue(f, ($) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === $ || ($ == null ? (v.value = null, y.value = null) : isNaN($) || (v.value = d($), y.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set($) {
    if ($ === null || $ === "") {
      f.value = null, v.value = null, y.value = null;
      return;
    }
    const j = Number($.replace(c.value, "."));
    isNaN(j) || (v.value = $, y.value = j, j <= e.max && j >= e.min && (f.value = j));
  } }), b = _(() => {
    var _a3;
    if (y.value === null) return false;
    const $ = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return $ !== je($, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), x = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = M(() => I.value === "split" ? "$plus" : "$collapse"), k = M(() => I.value === "split" ? "$minus" : "$expand"), g = M(() => I.value === "split" ? "default" : "small"), C = M(() => I.value === "stacked" ? "auto" : "100%"), w = { props: { onClick: A, onPointerup: L, onPointerdown: W, onPointercancel: L } }, T = { props: { onClick: A, onPointerup: L, onPointerdown: H, onPointercancel: L } };
  ue(() => e.precision, () => q()), ue(() => e.minFractionDigits, () => q()), kt(() => {
    X();
  });
  function P($) {
    if ($ == null) return 0;
    const j = $.toString(), oe = j.indexOf(".");
    return ~oe ? j.length - oe : 0;
  }
  function E() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(je(0, e.min, e.max));
      return;
    }
    let j = Math.max(P(f.value), P(e.step));
    e.precision != null && (j = Math.max(j, e.precision)), $ ? h.value && (m.value = d(f.value + e.step, j)) : x.value && (m.value = d(f.value - e.step, j));
  }
  function B($) {
    var _a3;
    if (!$.data) return;
    const j = $.target, { value: oe, selectionStart: be, selectionEnd: ne } = j ?? {}, fe = oe ? oe.slice(0, be) + $.data + oe.slice(ne) : $.data, Ie = A0(fe, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Oo(c.value)}?\\d*$`).test(fe) || ($.preventDefault(), j.value = Ie, Te(() => m.value = Ie)), e.precision != null) {
      if (((_a3 = fe.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        $.preventDefault(), j.value = Ie, Te(() => m.value = Ie);
        const xe = (be ?? 0) + $.data.length;
        j.setSelectionRange(xe, xe);
      }
      e.precision === 0 && fe.endsWith(c.value) && ($.preventDefault(), j.value = Ie, Te(() => m.value = Ie));
    }
  }
  async function D($) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes($.key) || $.ctrlKey || ["ArrowDown", "ArrowUp"].includes($.key) && ($.preventDefault(), $.stopPropagation(), X(), await Te(), $.key === "ArrowDown" ? E(false) : E());
  }
  function A($) {
    $.stopPropagation();
  }
  function L($) {
    var _a3;
    (_a3 = $.currentTarget) == null ? void 0 : _a3.releasePointerCapture($.pointerId), $.preventDefault(), i();
  }
  function W($) {
    var _a3;
    (_a3 = $.currentTarget) == null ? void 0 : _a3.setPointerCapture($.pointerId), $.preventDefault(), $.stopPropagation(), l("up");
  }
  function H($) {
    var _a3;
    (_a3 = $.currentTarget) == null ? void 0 : _a3.setPointerCapture($.pointerId), $.preventDefault(), $.stopPropagation(), l("down");
  }
  function X() {
    if (r.value || !a.value) return;
    const $ = a.value.value, j = Number($.replace(c.value, "."));
    $ && !isNaN(j) ? m.value = d(je(j, e.min, e.max)) : m.value = null;
  }
  function q() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function N() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", c.value);
    }
  }
  function K() {
    N();
  }
  function z() {
    X();
  }
  return te(() => {
    const { modelValue: $, type: j, ...oe } = Rn.filterProps(e);
    function be() {
      return n.increment ? S(De, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(w)] }) : S($e, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: A, onPointerdown: W, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function ne() {
      return n.decrement ? S(De, { key: "decrement-defaults", defaults: { VBtn: { disabled: !x.value, height: C.value, size: g.value, icon: k.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : S($e, { "aria-hidden": "true", "data-testid": "decrement", disabled: !x.value, height: C.value, icon: k.value, key: "decrement-btn", onClick: A, onPointerdown: H, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return p("div", { class: "v-number-input__control" }, [ne(), S(sn, { vertical: I.value !== "stacked" }, null), be()]);
    }
    function Ie() {
      return !e.hideInput && !e.inset ? S(sn, { vertical: true }, null) : void 0;
    }
    const xe = I.value === "split" ? p("div", { class: "v-number-input__control" }, [S(sn, { vertical: true }, null), be()]) : e.reverse || I.value === "hidden" ? void 0 : p(he, null, [Ie(), fe()]), ge = n["append-inner"] || xe, F = I.value === "split" ? p("div", { class: "v-number-input__control" }, [ne(), S(sn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? p(he, null, [fe(), Ie()]) : void 0, O = n["prepend-inner"] || F;
    return S(Rn, U({ ref: a }, oe, { modelValue: m.value, "onUpdate:modelValue": (J) => m.value = J, focused: s.value, "onUpdate:focused": (J) => s.value = J, validationValue: f.value, error: e.error || b.value || void 0, onBeforeinput: B, onFocus: K, onBlur: z, onKeydown: D, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ge ? function() {
      var _a3;
      for (var J = arguments.length, se = new Array(J), le = 0; le < J; le++) se[le] = arguments[le];
      return p(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...se), xe]);
    } : void 0, "prepend-inner": O ? function() {
      var _a3;
      for (var J = arguments.length, se = new Array(J), le = 0; le < J; le++) se[le] = arguments[le];
      return p(he, null, [F, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...se)]);
    } : void 0 });
  }), Ct({}, a);
} }), fP = R({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...ut(), ...ht(), ...lo(), ...Zt(oo({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), vP = Z()({ name: "VOtpInput", props: fP(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: i } = Mt(e), { dimensionStyles: o } = yt(e), { isFocused: r, focus: s, blur: u } = fa(e), c = pe(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Ue(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), y = Q(-1), m = Q(), b = Q([]), h = _(() => b.value[y.value]);
  let x = false;
  Dt(() => e.autofocus, () => {
    const E = El();
    E.run(() => {
      const { intersectionRef: B, isIntersecting: D } = Ji();
      lt(() => {
        B.value = b.value[0];
      }), ue(D, (A) => {
        var _a3;
        A && ((_a3 = B.value) == null ? void 0 : _a3.focus(), E.stop());
      });
    });
  });
  function I() {
    if (P(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (x) return;
    const E = c.value.slice(), B = h.value.value;
    E[y.value] = B;
    let D = null;
    y.value > c.value.length ? D = c.value.length + 1 : y.value + 1 !== f.value && (D = "next"), c.value = E, D && Ua(m.value, D);
  }
  function V() {
    x = false, I();
  }
  function k(E) {
    const B = c.value.slice(), D = y.value;
    let A = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? A = "prev" : E.key === "ArrowRight" ? A = "next" : ["Backspace", "Delete"].includes(E.key) && (B[y.value] = "", c.value = B, y.value > 0 && E.key === "Backspace" ? A = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = b.value[D]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      A != null && Ua(m.value, A);
    }));
  }
  function g(E, B) {
    var _a3;
    B.preventDefault(), B.stopPropagation();
    const D = ((_a3 = B == null ? void 0 : B.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", A = D.length - 1 === -1 ? E : D.length - 1;
    P(D) || (c.value = D.split(""), y.value = A);
  }
  function C() {
    c.value = [];
  }
  function w(E, B) {
    s(), y.value = B;
  }
  function T() {
    u(), y.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return st({ VField: { color: M(() => e.color), bgColor: M(() => e.color), baseColor: M(() => e.baseColor), disabled: M(() => e.disabled), error: M(() => e.error), variant: M(() => e.variant), rounded: M(() => e.rounded) } }, { scoped: true }), ue(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), ue(y, (E) => {
    E < 0 || Te(() => {
      var _a3;
      (_a3 = b.value[E]) == null ? void 0 : _a3.select();
    });
  }), te(() => {
    var _a3;
    const [E, B] = Wn(n);
    return p("div", U({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, i.value, e.class], style: [e.style] }, E), [p("div", { ref: m, class: "v-otp-input__content", style: me([o.value]) }, [v.value.map((D, A) => p(he, null, [e.divider && A !== 0 && p("span", { class: "v-otp-input__divider" }, [e.divider]), S(Aa, { focused: r.value && e.focusAll || y.value === A, key: A }, { ...l, loader: void 0, default: () => p("input", { ref: (L) => b.value[A] = L, "aria-label": d(e.label, A + 1), autofocus: A === 0 && e.autofocus, autocomplete: "one-time-code", class: ee(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: A === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[A], onInput: I, onFocus: (L) => w(L, A), onBlur: T, onKeydown: k, onCompositionstart: () => x = true, onCompositionend: V, onPaste: (L) => g(A, L) }, null) })])), p("input", U({ class: "v-otp-input-input", type: "hidden" }, B, { value: c.value.join("") }), null), S(Nn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? S(Ia, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = b.value) == null ? void 0 : _a3.some((E) => E.blur());
  }, focus: () => {
    var _a3;
    (_a3 = b.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function mP(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const gP = R({ scale: { type: [Number, String], default: 0.5 }, ...Se() }, "VParallax"), hP = Z()({ name: "VParallax", props: gP(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = Ji(), { resizeRef: i, contentRect: o } = yn(), { height: r } = dn(), s = Q();
  lt(() => {
    var _a3;
    a.value = i.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  ue(l, (v) => {
    v ? (u = ur(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Lt(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), ue(r, f), ue(() => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - je(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || $n() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const y = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, b = a.value.getBoundingClientRect().top + m, h = o.value.height, x = b + (h - y) / 2, I = mP((m - x) * c.value), V = Math.max(1, (c.value * (y - h) + h) / h);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return te(() => S(la, { class: ee(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: me(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), yP = R({ ...br({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), bP = Z()({ name: "VRadio", props: yP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = Pa.filterProps(e);
    return S(Pa, U(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), SP = R({ height: { type: [Number, String], default: "auto" }, ...Be(va(), ["direction"]), ...Be(ic(), ["multiple"]), trueIcon: { type: Ce, default: "$radioOn" }, falseIcon: { type: Ce, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), kP = Z()({ name: "VRadioGroup", inheritAttrs: false, props: SP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Tt(), i = _(() => e.id || `radio-group-${l}`), o = pe(e, "modelValue"), r = Q();
  return te(() => {
    const [s, u] = Wn(n), c = Ft.filterProps(e), d = Pa.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: i.value } }) : e.label;
    return S(Ft, U({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: o.value, "onUpdate:modelValue": (v) => o.value = v, id: i.value }), { ...a, default: (v) => {
      let { id: y, messagesId: m, isDisabled: b, isReadonly: h } = v;
      return p(he, null, [f && S(ql, { id: y.value }, { default: () => [f] }), S(Og, U(d, { id: y.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: b.value, readonly: h.value, "aria-labelledby": f ? y.value : void 0, multiple: false }, u, { modelValue: o.value, "onUpdate:modelValue": (x) => o.value = x }), a)]);
    } });
  }), Ct({}, r);
} }), wP = R({ ...lo(), ...va(), ...iy(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), pP = Z()({ name: "VRangeSlider", inheritAttrs: false, props: wP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const i = Q(), o = Q(), r = Q(), { rtlClasses: s } = wt();
  function u(B) {
    if (!i.value || !o.value) return;
    const D = Zs(B, i.value.$el, e.direction), A = Zs(B, o.value.$el, e.direction), L = Math.abs(D), W = Math.abs(A);
    return L < W || L === W && D < 0 ? i.value.$el : o.value.$el;
  }
  const c = oy(e), d = pe(e, "modelValue", void 0, (B) => (B == null ? void 0 : B.length) ? B.map((D) => c.roundValue(D)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: y, min: m, mousePressed: b, onSliderMousedown: h, onSliderTouchstart: x, position: I, trackContainerRef: V, disabled: k, readonly: g } = ry({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (k.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (B) => {
    var _a3, _b2;
    let { value: D } = B;
    if (k.value || g.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const A = f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el) ? [D, d.value[1]] : [d.value[0], D];
      !e.strict && A[0] < A[1] && (d.value = A);
    }
    a("end", d.value);
  }, onSliderMove: (B) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: D } = B;
    const [A, L] = d.value;
    if (k.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && A === L && A !== m.value && (f.value = D > A ? (_b2 = o.value) == null ? void 0 : _b2.$el : (_c2 = i.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = i.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(D, L), L] : d.value = [A, Math.max(A, D)];
  }, getActiveThumb: u }), { isFocused: C, focus: w, blur: T } = fa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return te(() => {
    const B = Ft.filterProps(e), [D, A] = Wn(l), L = !!(e.label || n.label || n.prepend);
    return S(Ft, U({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": b.value, "v-slider--disabled": k.value }, s.value, e.class], style: e.style, ref: r }, B, D, { focused: C.value }), { ...n, prepend: L ? (W) => {
      var _a3, _b2;
      return p(he, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, W)) ?? (e.label ? S(ql, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, W)]);
    } : void 0, default: (W) => {
      var _a3, _b2;
      let { id: H, messagesId: X } = W;
      return p("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : x }, [p("input", { id: `${H.value}_start`, name: e.name || H.value, disabled: k.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), p("input", { id: `${H.value}_stop`, name: e.name || H.value, disabled: k.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), S(sy, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), S(Js, U({ ref: i, "aria-describedby": X.value, focused: C && f.value === ((_a3 = i.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (q) => d.value = [q, d.value[1]], onFocus: (q) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, y.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && q.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] }), S(Js, U({ ref: o, "aria-describedby": X.value, focused: C && f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (q) => d.value = [d.value[0], q], onFocus: (q) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, y.value !== m.value && d.value[0] === d.value[1] && d.value[0] === y.value && q.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: y.value, position: E.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Ct({ focus: () => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), xP = R({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ce, default: "$ratingEmpty" }, fullIcon: { type: Ce, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...Se(), ...ut(), ...Yn(), ...Ae(), ...Ne() }, "VRating"), CP = Z()({ name: "VRating", props: xP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Ue(), { themeClasses: l } = We(e), i = Q(), o = pe(e, "modelValue"), r = _(() => je(parseFloat(o.value), 0, Number(e.length))), s = _(() => Mn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = ie(-1), d = _(() => u.value.map((V) => {
    const k = e.hover && c.value > -1, g = r.value >= V, C = c.value >= V, T = (k ? C : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = g || C ? P : e.color;
    return { isFilled: g, isHovered: C, icon: T, color: E };
  })), f = _(() => [0, ...u.value].map((V) => {
    function k() {
      c.value = V;
    }
    function g() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (o.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? k : void 0, onMouseleave: e.hover ? g : void 0, onClick: C };
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(o.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(o.value ?? 0) - 1)));
  function y() {
    var _a3, _b2;
    (_b2 = (_a3 = i.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(V) {
    if (e.disabled || e.readonly || V.ctrlKey || V.altKey) return;
    const k = e.halfIncrements ? 0.5 : 1;
    if (V.key === "ArrowRight") {
      const g = Math.min(Number(e.length), Number(o.value ?? 0) + k);
      o.value = g, Te(() => y());
    }
    if (V.key === "ArrowLeft") {
      const g = Math.max(0, Number(o.value ?? 0) - k);
      o.value = g, Te(() => y());
    }
  }
  const b = Tt(), h = _(() => e.name ?? `v-rating-${b}`);
  function x(V) {
    var _a3, _b2;
    let { value: k, index: g, showStar: C = true } = V;
    const { onMouseenter: w, onMouseleave: T, onClick: P } = f.value[g + 1], E = `${h.value}-${String(k).replace(".", "-")}`, B = g === v.value, D = { color: (_a3 = d.value[g]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[g]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: B ? 0 : -1, onKeydown: m };
    return p(he, null, [p("label", { for: E, class: ee({ "v-rating__item--half": e.halfIncrements && k % 1 > 0, "v-rating__item--full": e.halfIncrements && k % 1 === 0 }), onMouseenter: w, onMouseleave: T, onClick: P }, [p("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, k, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: D, value: k, index: g, rating: r.value }) : S($e, U({ "aria-label": a(e.itemAriaLabel, k, e.length) }, D), null) : void 0]), p("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: k, checked: r.value === k, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? p("span", null, [V.label]) : p("span", null, [St("\xA0")]);
  }
  return te(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return S(e.tag, { class: ee(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: me(e.style), ref: i }, { default: () => [S(x, { value: 0, index: -1, showStar: false }, null), s.value.map((k, g) => {
      var _a4, _b2;
      return p("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: k, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, p("div", { class: "v-rating__item" }, [e.halfIncrements ? p(he, null, [S(x, { value: k - 0.5, index: g * 2 }, null), S(x, { value: k, index: g * 2 + 1 }, null)]) : S(x, { value: k, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: k, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), _P = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function VP(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return p("div", { class: ee(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Jf(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Lr(t));
}
function Lr(e) {
  let t = [];
  if (!e) return t;
  const n = _P[e];
  if (e !== n) {
    if (e.includes(",")) return Qf(e);
    if (e.includes("@")) return Jf(e);
    n.includes(",") ? t = Qf(n) : n.includes("@") ? t = Jf(n) : n && t.push(Lr(n));
  }
  return [VP(e, t)];
}
function Qf(e) {
  return e.replace(/\s/g, "").split(",").map(Lr);
}
const IP = R({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...ht(), ...bt(), ...Ne() }, "VSkeletonLoader"), PP = Z()({ name: "VSkeletonLoader", inheritAttrs: false, props: IP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color), { dimensionStyles: o } = yt(e), { elevationClasses: r } = xt(e), { themeClasses: s } = We(e), { t: u } = Ue(), c = _(() => Lr(Je(e.type).join(",")));
  return te(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? p("div", U({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [i.value, o.value] }, f, n), [c.value]) : p(he, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), TP = Z()({ name: "VSlideGroupItem", props: vl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Va(e, oc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function AP(e) {
  const t = ie(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Te(() => t.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : { transitionDuration: 0.2 }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && a();
    }, s);
  }
  return ft(a), { clear: a, time: t, start: i, reset: l };
}
const ib = R({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...jn({ location: "bottom" }), ...Kl(), ...Qe(), ...vn(), ...Ne(), ...Be(io({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), du = Z()({ name: "VSnackbar", props: ib(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), { positionClasses: l } = Gl(e), { scopeId: i } = ml(), { themeClasses: o } = We(e), { colorClasses: r, colorStyles: s, variantClasses: u } = da(e), { roundedClasses: c } = it(e), d = AP(() => Number(e.timeout)), f = Q(), v = Q(), y = ie(false), m = ie(0), b = Q(), h = Oe(Ei, void 0);
  Dt(() => !!h, () => {
    const E = gg();
    lt(() => {
      b.value = E.mainStyles.value;
    });
  }), ue(a, I), ue(() => e.timeout, I), kt(() => {
    a.value && I();
  });
  let x = -1;
  function I() {
    d.reset(), window.clearTimeout(x);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const B = Ou(v.value);
    d.start(B), x = window.setTimeout(() => {
      a.value = false;
    }, E);
  }
  function V() {
    d.reset(), window.clearTimeout(x);
  }
  function k() {
    y.value = true, V();
  }
  function g() {
    y.value = false, I();
  }
  function C(E) {
    m.value = E.touches[0].clientY;
  }
  function w(E) {
    Math.abs(m.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function T() {
    y.value && g();
  }
  const P = _(() => e.location.split(" ").reduce((E, B) => (E[`v-snackbar--${B}`] = true, E), {}));
  return te(() => {
    const E = Nn.filterProps(e), B = !!(n.default || n.text || e.text);
    return S(Nn, U({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [b.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (D) => a.value = D, contentProps: U({ class: ["v-snackbar__wrapper", o.value, r.value, c.value, u.value], style: [s.value], onPointerenter: k, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: w, onAfterLeave: T }, i), { default: () => {
      var _a3, _b2;
      return [ca(false, "v-snackbar"), e.timer && !y.value && p("div", { key: "timer", class: "v-snackbar__timer" }, [S(gr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), B && p("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && S(De, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [p("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Ct({}, f);
} }), DP = R({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Be(ib(), ["modelValue"]) }, "VSnackbarQueue"), EP = Z()({ name: "VSnackbarQueue", props: DP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Ue(), i = ie(false), o = ie(false), r = ie();
  ue(() => e.modelValue.length, (f, v) => {
    !o.value && f > v && u();
  }), ue(i, (f) => {
    f && (o.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, o.value = false);
  }
  function u() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Te(() => {
      i.value = true;
    });
  }
  function c() {
    i.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  te(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...y } = du.filterProps(e);
    return p(he, null, [o.value && !!r.value && (a.default ? S(De, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : S(du, U(y, r.value, { modelValue: i.value, "onUpdate:modelValue": (m) => i.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => p(he, null, [a.actions ? S(De, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : S($e, U(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), ob = R({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), rb = R({ autoLineWidth: Boolean, ...ob() }, "VBarline"), ev = Z()({ name: "VBarline", props: rb(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(), l = _(() => e.id || `barline-${a}`), i = _(() => Number(e.autoDrawDuration) || 500), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((b) => vt(b, e.itemValue, b)));
  function d(b, h) {
    const { minX: x, maxX: I, minY: V, maxY: k } = h, g = b.length;
    let C = e.max != null ? Number(e.max) : Math.max(...b), w = e.min != null ? Number(e.min) : Math.min(...b);
    w > 0 && e.min == null && (w = 0), C < 0 && e.max == null && (C = 0);
    const T = I / (g === 1 ? 2 : g), P = (k - V) / (C - w || 1), E = k - Math.abs(w * P);
    return b.map((B, D) => {
      const A = Math.abs(P * B);
      return { x: x + D * T, y: E - A + +(B < 0) * A, height: A, value: B };
    });
  }
  const f = _(() => {
    const b = [], h = d(c.value, u.value), x = h.length;
    for (let I = 0; b.length < x; I++) {
      const V = h[I];
      let k = e.labels[I];
      k || (k = typeof V == "object" ? V.value : V), b.push({ x: V.x, value: String(k) });
    }
    return b;
  }), v = _(() => d(c.value, u.value)), y = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  te(() => {
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block" }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => p("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), p("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => p("rect", { x: h.x + y.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !$n() && p(he, null, [p("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${i.value}ms`, fill: "freeze" }, null), p("animate", { attributeName: "height", from: "0", to: h.height, dur: `${i.value}ms`, fill: "freeze" }, null)])]))]), o.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, x) => {
      var _a3;
      return p("text", { x: h.x + y.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), p("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [p("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function MP(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && BP(s, o, u);
    if (!s || c) return `L${o.x} ${o.y}`;
    const d = Math.min(tv(u, o), tv(s, o)), v = d / 2 < t ? d / 2 : t, y = nv(u, o, v), m = nv(s, o, v);
    return `L${y.x} ${y.y}S${o.x} ${o.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function So(e) {
  return parseInt(e, 10);
}
function BP(e, t, n) {
  return So(e.x + n.x) === So(2 * t.x) && So(e.y + n.y) === So(2 * t.y);
}
function tv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function nv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = { x: a.x / l, y: a.y / l };
  return { x: t.x + i.x * n, y: t.y + i.y * n };
}
const sb = R({ fill: Boolean, ...ob() }, "VTrendline"), av = Z()({ name: "VTrendline", props: sb(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(), l = _(() => e.id || `trendline-${a}`), i = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = Q(0), r = Q(null);
  function s(b, h) {
    const { minX: x, maxX: I, minY: V, maxY: k } = h;
    b.length === 1 && (b = [b[0], b[0]]);
    const g = b.length, C = e.max != null ? Number(e.max) : Math.max(...b), w = e.min != null ? Number(e.min) : Math.min(...b), T = (I - x) / (g - 1), P = (k - V) / (C - w || 1);
    return b.map((E, B) => ({ x: x + B * T, y: k - (E - w) * P, value: E }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const b = Number(e.padding);
    return { minX: b, maxX: d.value - b, minY: b, maxY: parseInt(e.height, 10) - b };
  }), v = _(() => e.modelValue.map((b) => vt(b, e.itemValue, b))), y = _(() => {
    const b = [], h = s(v.value, f.value), x = h.length;
    for (let I = 0; b.length < x; I++) {
      const V = h[I];
      let k = e.labels[I];
      k || (k = typeof V == "object" ? V.value : V), b.push({ x: V.x, value: String(k) });
    }
    return b;
  });
  ue(() => e.modelValue, async () => {
    if (await Te(), !e.autoDraw || !r.value || $n()) return;
    const b = r.value, h = b.getTotalLength();
    e.fill ? (b.style.transformOrigin = "bottom center", b.style.transition = "none", b.style.transform = "scaleY(0)", b.getBoundingClientRect(), b.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, b.style.transform = "scaleY(1)") : (b.style.strokeDasharray = `${h}`, b.style.strokeDashoffset = `${h}`, b.getBoundingClientRect(), b.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, b.style.strokeDashoffset = "0"), o.value = h;
  }, { immediate: true });
  function m(b) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return MP(s(v.value, f.value), h, b, parseInt(e.height, 10));
  }
  te(() => {
    var _a3;
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => p("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [y.value.map((h, x) => {
      var _a4;
      return p("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), p("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && p("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), FP = R({ type: { type: String, default: "trend" }, ...rb(), ...sb() }, "VSparkline"), LP = Z()({ name: "VSparkline", props: FP(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Pt(() => e.color), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), o = _(() => {
    let r = parseInt(e.height, 10);
    return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  te(() => {
    const r = e.type === "trend" ? av : ev, s = e.type === "trend" ? av.filterProps(e) : ev.filterProps(e);
    return S(r, U({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}` }, s), n);
  });
} }), $P = R({ ...Se(), ...Sh({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), OP = Z()({ name: "VSpeedDial", props: $P(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), l = Q(), i = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), o = _(() => ({ [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: true }));
  return te(() => {
    const r = Wl.filterProps(e);
    return S(Wl, U(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", o.value, e.contentClass], location: i.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => S(De, { defaults: { VBtn: { size: "small" } } }, { default: () => [S(Yt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), Uc = Symbol.for("vuetify:v-stepper"), ub = R({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), cb = Z()({ name: "VStepperActions", props: ub(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Ue();
  function i() {
    n("click:prev");
  }
  function o() {
    n("click:next");
  }
  return te(() => {
    const r = { onClick: i }, s = { onClick: o };
    return p("div", { class: "v-stepper-actions" }, [S(De, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? S($e, r, null)];
    } }), S(De, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? S($e, s, null)];
    } })]);
  }), {};
} }), db = sa("v-stepper-header"), NP = R({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ce, default: "$complete" }, editable: Boolean, editIcon: { type: Ce, default: "$edit" }, error: Boolean, errorIcon: { type: Ce, default: "$error" }, icon: Ce, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), RP = R({ ...NP(), ...vl() }, "VStepperItem"), fb = Z()({ name: "VStepperItem", directives: { vRipple: Et }, props: RP(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Va(e, Uc, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), i = _(() => e.rules.every((f) => f() === true)), o = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !i.value), u = _(() => e.complete || e.rules.length > 0 && i.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return te(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), y = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return Xe(p("button", { class: ee(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [o.value && ca(true, "v-stepper-item"), S(cn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? S(He, { icon: c.value }, null) : l.value)];
    } }), p("div", { class: "v-stepper-item__content" }, [v && p("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), y && p("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Et, e.editable && e.ripple, null]]);
  }), {};
} }), HP = R({ ...Be(Cr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), vb = Z()({ name: "VStepperWindow", props: HP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Oe(Uc, null), l = pe(e, "modelValue"), i = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((o) => a.selected.value.includes(o.id))) == null ? void 0 : _a3.value;
  }, set(o) {
    l.value = o;
  } });
  return te(() => {
    const o = tl.filterProps(e);
    return S(tl, U({ _as: "VStepperWindow" }, o, { modelValue: i.value, "onUpdate:modelValue": (r) => i.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), WP = R({ ..._r() }, "VStepperWindowItem"), mb = Z()({ name: "VStepperWindowItem", props: WP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = nl.filterProps(e);
    return S(nl, U({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), zP = R({ altLabels: Boolean, bgColor: String, completeIcon: Ce, editIcon: Ce, editable: Boolean, errorIcon: Ce, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...sl() }, "Stepper"), jP = R({ ...zP(), ...fl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...bc(), ...Zt(ub(), ["prevText", "nextText"]) }, "VStepper"), YP = Z()({ name: "VStepper", props: jP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: i, selected: o } = Ba(e, Uc), { displayClasses: r, mobile: s } = dn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: y, nextText: m } = jl(e), b = _(() => e.items.map((I, V) => {
    const k = vt(I, e.itemTitle, I), g = vt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : vt(I, e.itemProps), w = { title: k, value: g, ...C };
    return { title: w.title, value: w.value, props: w, raw: I };
  })), h = _(() => a.value.findIndex((I) => o.value.includes(I.id))), x = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return st({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: y, nextText: m }, VStepperActions: { color: f, disabled: x, prevText: y, nextText: m } }), te(() => {
    const I = Ta.filterProps(e), V = !!(n.header || e.items.length), k = e.items.length > 0, g = !e.hideActions && !!(k || n.actions);
    return S(Ta, U(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && S(db, { key: "stepper-header" }, { default: () => [b.value.map((C, w) => {
        let { raw: T, ...P } = C;
        return p(he, null, [!!w && S(sn, null, null), S(fb, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), k && S(vb, { key: "stepper-window" }, { default: () => [b.value.map((C) => S(mb, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: i, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: i })) ?? S(cb, { key: "stepper-actions", "onClick:prev": i, "onClick:next": l }, n))];
    } });
  }), { prev: i, next: l };
} }), UP = R({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...va(), ...br() }, "VSwitch"), KP = Z()({ name: "VSwitch", inheritAttrs: false, props: UP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = pe(e, "indeterminate"), i = pe(e, "modelValue"), { loaderClasses: o } = Qi(e), { isFocused: r, focus: s, blur: u } = fa(e), c = Q(), d = Q(), f = $u && window.matchMedia("(forced-colors: active)").matches, v = M(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), y = Tt(), m = M(() => e.id || `switch-${y}`);
  function b() {
    l.value && (l.value = false);
  }
  function h(x) {
    var _a3, _b2;
    x.stopPropagation(), x.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return te(() => {
    const [x, I] = Wn(n), V = Ft.filterProps(e), k = Pa.filterProps(e);
    return S(Ft, U({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, o.value, e.class] }, x, V, { modelValue: i.value, "onUpdate:modelValue": (g) => i.value = g, id: m.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: w, isDisabled: T, isReadonly: P, isValid: E } = g;
      const B = { model: i, isValid: E };
      return S(Pa, U({ ref: c }, k, { modelValue: i.value, "onUpdate:modelValue": [(D) => i.value = D, b], id: C.value, "aria-describedby": w.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: T.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (D) => {
        let { backgroundColorClasses: A, backgroundColorStyles: L } = D;
        return p("div", { class: ee(["v-switch__track", f ? void 0 : A.value]), style: me(L.value), onClick: h }, [a["track-true"] && p("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](B)]), a["track-false"] && p("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](B)])]);
      }, input: (D) => {
        let { inputNode: A, icon: L, backgroundColorClasses: W, backgroundColorStyles: H } = D;
        return p(he, null, [A, p("div", { class: ee(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : W.value]), style: me(e.inset ? void 0 : H.value) }, [a.thumb ? S(De, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...B, icon: L })] }) : S(ec, null, { default: () => [e.loading ? S(eo, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (X) => a.loader ? a.loader(X) : S(Ia, { active: X.isActive, color: X.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && S(He, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Ct({}, d);
} }), GP = R({ color: String, height: [Number, String], window: Boolean, ...Se(), ...bt(), ...ul(), ...Qe(), ...Ae(), ...Ne() }, "VSystemBar"), qP = Z()({ name: "VSystemBar", props: GP(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { backgroundColorClasses: l, backgroundColorStyles: i } = ze(() => e.color), { elevationClasses: o } = xt(e), { roundedClasses: r } = it(e), { ssrBootStyles: s } = dl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = cl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: ie("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: M(() => e.absolute) });
  return te(() => S(e.tag, { class: ee(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, o.value, r.value, e.class]), style: me([i.value, c.value, s.value, e.style]) }, n)), {};
} }), Kc = Symbol.for("vuetify:v-tabs"), gb = R({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Be(yr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), hb = Z()({ name: "VTab", props: gb(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: i } = Pt(() => e.sliderColor), { backgroundColorClasses: o, backgroundColorStyles: r } = ze(() => e.sliderColor), s = Q(), u = Q(), c = _(() => e.direction === "horizontal"), d = _(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(b, h) {
    return { opacity: [0, 1] };
  }
  function v(b, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function y(b, h) {
    const x = h.getBoundingClientRect(), I = b.getBoundingClientRect(), V = c.value ? "x" : "y", k = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", C = c.value ? "width" : "height", w = x[V], T = I[V], P = w > T ? x[g] - I[g] : x[V] - I[V], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", D = (Math.abs(P) + (Math.sign(P) < 0 ? x[C] : I[C])) / Math.max(x[C], I[C]) || 0, A = x[C] / I[C] || 0, L = 1.5;
    return { transform: [`translate${k}(${P}px) scale${k}(${A})`, `translate${k}(${P / L}px) scale${k}(${(D - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(b) {
    var _a3, _b2;
    let { value: h } = b;
    if (h) {
      const x = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!x || !I) return;
      const V = getComputedStyle(x).backgroundColor, k = { fade: f, grow: v, shift: y }[e.sliderTransition ?? "shift"] ?? y, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      Xn(I, { backgroundColor: [V, V], ...k(I, x) }, { duration: g, easing: Pi });
    }
  }
  return te(() => {
    const b = $e.filterProps(e);
    return S($e, U({ symbol: Kc, ref: s, class: ["v-tab", e.class, d.value && e.inset ? o.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, b, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return p(he, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && p("div", { ref: u, class: ee(["v-tab__slider", e.inset ? o.value : l.value]), style: me([i.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Ct({}, s);
} }), XP = R({ ...Be(Cr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), yb = Z()({ name: "VTabsWindow", props: XP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Oe(Kc, null), l = pe(e, "modelValue"), i = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((o) => a.selected.value.includes(o.id))) == null ? void 0 : _a3.value;
  }, set(o) {
    l.value = o;
  } });
  return te(() => {
    const o = tl.filterProps(e);
    return S(tl, U({ _as: "VTabsWindow" }, o, { modelValue: i.value, "onUpdate:modelValue": (r) => i.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), ZP = R({ ..._r() }, "VTabsWindowItem"), bb = Z()({ name: "VTabsWindowItem", props: ZP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = nl.filterProps(e);
    return S(nl, U({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function JP(e) {
  return e ? e.map((t) => Qa(t) ? t : { text: t, value: t }) : [];
}
const QP = R({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...Zt(gb(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...rc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...ut(), ...Ae() }, "VTabs"), eT = Z()({ name: "VTabs", props: QP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = pe(e, "modelValue"), i = _(() => JP(e.items)), { densityClasses: o } = Mt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = ze(() => e.bgColor), { scopeId: u } = ml();
  return st({ VTab: { color: M(e, "color"), direction: M(e, "direction"), stacked: M(e, "stacked"), fixed: M(e, "fixedTabs"), inset: M(e, "inset"), sliderColor: M(e, "sliderColor"), sliderTransition: M(e, "sliderTransition"), sliderTransitionDuration: M(e, "sliderTransitionDuration"), hideSlider: M(e, "hideSlider") } }), te(() => {
    const c = $i.filterProps(e), d = !!(a.window || e.items.length > 0);
    return p(he, null, [S($i, U(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, o.value, r.value, e.class], style: [{ "--v-tabs-height": de(e.height), "--v-tabs-inset-padding": e.inset ? de(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? de(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: Kc }, u, n), { default: a.default ?? (() => i.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? S(hb, U(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && S(yb, U({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [i.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? S(bb, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), tT = R({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...kh(), ...Be(va(), ["direction"]), ...oo() }, "VTextarea"), nT = Z()({ name: "VTextarea", directives: { vIntersect: _n }, inheritAttrs: false, props: tT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const i = pe(e, "modelValue"), { isFocused: o, focus: r, blur: s } = fa(e), { onIntersect: u } = wh(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = Q(), v = Q(), y = ie(""), m = Q(), b = Q(0), { platform: h } = dn(), x = Sc(e), I = _(() => e.persistentPlaceholder || o.value || e.active);
  function V() {
    var _a3;
    x.isSuppressing.value && x.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), o.value || r();
  }
  function k(A) {
    V(), a("click:control", A);
  }
  function g(A) {
    a("mousedown:control", A);
  }
  function C(A) {
    A.stopPropagation(), V(), Te(() => {
      i.value = "", qi(e["onClick:clear"], A);
    });
  }
  function w(A) {
    var _a3;
    const L = A.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      i.value = L.value;
      return;
    }
    const W = L.value, H = L.selectionStart, X = L.selectionEnd;
    i.value = W, Te(() => {
      let q = 0;
      W.trimStart().length === L.value.length && (q = W.length - L.value.length), H != null && (L.selectionStart = H - q), X != null && (L.selectionEnd = X - q);
    });
  }
  const T = Q(), P = Q(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
  lt(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function B() {
    Te(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        b.value = 12;
        return;
      }
      const { offsetWidth: A, clientWidth: L } = m.value;
      b.value = Math.max(0, A - L);
    }), e.autoGrow && Te(() => {
      if (!T.value || !v.value) return;
      const A = getComputedStyle(T.value), L = getComputedStyle(v.value.$el), W = parseFloat(A.getPropertyValue("--v-field-padding-top")) + parseFloat(A.getPropertyValue("--v-input-padding-top")) + parseFloat(A.getPropertyValue("--v-field-padding-bottom")), H = T.value.scrollHeight, X = parseFloat(A.lineHeight), q = Math.max(parseFloat(e.rows) * X + W, parseFloat(L.getPropertyValue("--v-input-control-height"))), N = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * X + W || 1 / 0, K = je(H ?? 0, q, N);
      P.value = Math.floor((K - W) / X), y.value = de(K);
    });
  }
  kt(B), ue(i, B), ue(() => e.rows, B), ue(() => e.maxHeight, B), ue(() => e.maxRows, B), ue(() => e.density, B), ue(P, (A) => {
    a("update:rows", A);
  });
  let D;
  return ue(T, (A) => {
    A ? (D = new ResizeObserver(B), D.observe(T.value)) : D == null ? void 0 : D.disconnect();
  }), Lt(() => {
    D == null ? void 0 : D.disconnect();
  }), te(() => {
    const A = !!(l.counter || e.counter || e.counterValue), L = !!(A || l.details), [W, H] = Wn(n), { modelValue: X, ...q } = Ft.filterProps(e), N = { ...Aa.filterProps(e), "onClick:clear": C };
    return S(Ft, U({ ref: f, modelValue: i.value, "onUpdate:modelValue": (K) => i.value = K, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? de(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": de(b.value) }, e.style] }, W, q, { centerAffix: P.value === 1 && !E.value, focused: o.value }), { ...l, default: (K) => {
      let { id: z, isDisabled: $, isDirty: j, isReadonly: oe, isValid: be, hasDetails: ne } = K;
      return S(Aa, U({ ref: v, style: { "--v-textarea-control-height": y.value }, onClick: k, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, N, { id: z.value, active: I.value || j.value, labelId: `${z.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: j.value || e.dirty, disabled: $.value, focused: o.value, details: ne.value, error: be.value === false }), { ...l, default: (fe) => {
        let { props: { class: Ie, ...xe }, controlRef: ge } = fe;
        return p(he, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), Xe(p("textarea", U({ ref: (F) => m.value = ge.value = F, class: Ie, value: i.value, onInput: w, autofocus: e.autofocus, readonly: oe.value, disabled: $.value, placeholder: e.placeholder, rows: e.rows, name: x.fieldName.value, autocomplete: x.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${z.value}-label` }, xe, H), null), [[_n, { handler: u }, null, { once: true }]]), e.autoGrow && Xe(p("textarea", { class: ee([Ie, "v-textarea__sizer"]), id: `${xe.id}-sizer`, "onUpdate:modelValue": (F) => i.value = F, ref: T, readonly: true, "aria-hidden": "true" }, null), [[Kk, i.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (K) => {
      var _a3;
      return p(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, K), A && p(he, null, [p("span", null, null), S(Sr, { active: e.persistentCounter || o.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Ct({}, f, v, m);
} }), aT = R({ withBackground: Boolean, ...Se(), ...Ne(), ...Ae() }, "VThemeProvider"), lT = Z()({ name: "VThemeProvider", props: aT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e);
  return () => {
    var _a3;
    return e.withBackground ? S(e.tag, { class: ee(["v-theme-provider", a.value, e.class]), style: me(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), iT = R({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ce, iconColor: String, lineColor: String, ...Se(), ...Qe(), ...Yn(), ...bt() }, "VTimelineDivider"), oT = Z()({ name: "VTimelineDivider", props: iT(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ul(e, "v-timeline-divider__dot"), { backgroundColorStyles: i, backgroundColorClasses: o } = ze(() => e.dotColor), { roundedClasses: r } = it(e, "v-timeline-divider__dot"), { elevationClasses: s } = xt(e), { backgroundColorClasses: u, backgroundColorStyles: c } = ze(() => e.lineColor);
  return te(() => p("div", { class: ee(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: me(e.style) }, [p("div", { class: ee(["v-timeline-divider__before", u.value]), style: me(c.value) }, null), !e.hideDot && p("div", { key: "dot", class: ee(["v-timeline-divider__dot", s.value, r.value, a.value]), style: me(l.value) }, [p("div", { class: ee(["v-timeline-divider__inner-dot", o.value, r.value]), style: me(i.value) }, [n.default ? S(De, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : S(He, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), p("div", { class: ee(["v-timeline-divider__after", u.value]), style: me(c.value) }, null)])), {};
} }), Sb = R({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ce, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...Se(), ...ht(), ...bt(), ...Qe(), ...Yn(), ...Ae() }, "VTimelineItem"), rT = Z()({ name: "VTimelineItem", props: Sb(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = yt(e), l = ie(0), i = Q();
  return ue(i, (o) => {
    var _a3;
    o && (l.value = ((_a3 = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), te(() => {
    var _a3, _b2;
    return p("div", { class: ee(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: me([{ "--v-timeline-dot-size": de(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${de(e.lineInset)})` : de(0) }, e.style]) }, [p("div", { class: "v-timeline-item__body", style: me(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), S(oT, { ref: i, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && p("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), sT = R({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...Zt(Sb({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...Se(), ...ut(), ...Ae(), ...Ne() }, "VTimeline"), uT = Z()({ name: "VTimeline", props: sT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = We(e), { densityClasses: l } = Mt(e), { rtlClasses: i } = wt();
  st({ VTimelineDivider: { lineColor: M(() => e.lineColor) }, VTimelineItem: { density: M(() => e.density), dotColor: M(() => e.dotColor), fillDot: M(() => e.fillDot), hideOpposite: M(() => e.hideOpposite), iconColor: M(() => e.iconColor), lineColor: M(() => e.lineColor), lineInset: M(() => e.lineInset), size: M(() => e.size) } });
  const o = _(() => {
    const s = e.side ? e.side : e.density !== "default" ? "end" : null;
    return s && `v-timeline--side-${s}`;
  }), r = _(() => {
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
  return te(() => S(e.tag, { class: ee(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, o.value, i.value, e.class]), style: me([{ "--v-timeline-line-thickness": de(e.lineThickness) }, e.style]) }, n)), {};
} }), cT = R({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), fu = Z()({ name: "VTimePickerClock", props: cT(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = Q(null), l = Q(null), i = Q(void 0), o = Q(false), r = Q(null), s = Q(null), u = Om((N) => n("change", N), 750), { textColorClasses: c, textColorStyles: d } = Pt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = ze(() => e.color), y = _(() => e.max - e.min + 1), m = _(() => e.double ? y.value / 2 : y.value), b = _(() => 360 / m.value), h = _(() => b.value * Math.PI / 180), x = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const N = [];
    for (let K = e.min; K <= e.max; K = K + e.step) N.push(K);
    return N;
  });
  ue(() => e.modelValue, (N) => {
    i.value = N;
  });
  function k(N) {
    i.value !== N && (i.value = N), n("input", N);
  }
  function g(N) {
    return !e.allowedValues || e.allowedValues(N);
  }
  function C(N) {
    if (!e.scrollable || e.disabled) return;
    N.preventDefault();
    const K = Math.sign(-N.deltaY || 1);
    let z = x.value;
    do
      z = z + K, z = (z - e.min + y.value) % y.value + e.min;
    while (!g(z) && z !== x.value);
    z !== e.displayedValue && k(z), u(z);
  }
  function w(N) {
    return e.double && N - e.min >= m.value;
  }
  function T(N) {
    return w(N) ? I.value : 1;
  }
  function P(N) {
    const K = e.rotate * Math.PI / 180;
    return { x: Math.sin((N - e.min) * h.value + K) * T(N), y: -Math.cos((N - e.min) * h.value + K) * T(N) };
  }
  function E(N, K) {
    const z = (Math.round(N / b.value) + (K ? m.value : 0)) % y.value + e.min;
    return N < 360 - b.value / 2 ? z : K ? e.max - m.value + 1 : e.min;
  }
  function B(N) {
    const { x: K, y: z } = P(N);
    return { left: `${Math.round(50 + K * 50)}%`, top: `${Math.round(50 + z * 50)}%` };
  }
  function D(N, K) {
    const z = K.x - N.x, $ = K.y - N.y;
    return Math.sqrt(z * z + $ * $);
  }
  function A(N, K) {
    const z = 2 * Math.atan2(K.y - N.y - D(N, K), K.x - N.x);
    return Math.abs(z * 180 / Math.PI);
  }
  function L(N) {
    r.value === null && (r.value = N), s.value = N, k(N);
  }
  function W(N) {
    var _a3, _b2;
    if (N.preventDefault(), !o.value && N.type !== "click" || !a.value) return;
    const { width: K, top: z, left: $ } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: j } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: oe, clientY: be } = "touches" in N ? N.touches[0] : N, ne = { x: K / 2, y: -K / 2 }, fe = { x: oe - $, y: z - be }, Ie = Math.round(A(ne, fe) - e.rotate + 360) % 360, xe = e.double && D(ne, fe) < (j + j * I.value) / 4, ge = Math.ceil(15 / b.value);
    let F;
    for (let O = 0; O < ge; O++) if (F = E(Ie + O * b.value, xe), g(F) || (F = E(Ie - O * b.value, xe), g(F))) return L(F);
  }
  function H(N) {
    e.disabled || (N.preventDefault(), window.addEventListener("mousemove", W), window.addEventListener("touchmove", W), window.addEventListener("mouseup", X), window.addEventListener("touchend", X), r.value = null, s.value = null, o.value = true, W(N));
  }
  function X(N) {
    N.stopPropagation(), q(), o.value = false, s.value !== null && g(s.value) && n("change", s.value);
  }
  function q() {
    window.removeEventListener("mousemove", W), window.removeEventListener("touchmove", W), window.removeEventListener("mouseup", X), window.removeEventListener("touchend", X);
  }
  ft(q), te(() => p("div", { class: ee([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: H, onTouchstart: H, onWheel: C, ref: a }, [p("div", { class: "v-time-picker-clock__inner", ref: l }, [p("div", { class: ee([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": w(e.modelValue) }, c.value]), style: me([{ transform: `rotate(${e.rotate + b.value * (x.value - e.min)}deg) scaleY(${T(x.value)})` }, d.value]) }, null), V.value.map((N) => {
    const K = N === x.value;
    return p("div", { class: ee([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": K, "v-time-picker-clock__item--disabled": e.disabled || !g(N) }, K && f.value]), style: me([B(N), K && v.value]) }, [p("span", null, [e.format(N)])]);
  })])]));
} }), dT = R({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), cs = Z()({ name: "VTimePickerField", props: dT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Pt(() => e.color), i = Q(), o = ie(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return te(() => S(Rn, { ref: i, _as: "VTimePickerField", autocomplete: "off", class: ee(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: me(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (o.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => o.value = true, onBlur: () => o.value = false }, null)), Ct({}, i);
} });
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function kb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function bi(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function ai(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function fT(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function vT(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const wb = R({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function pb(e) {
  const t = _(() => {
    const i = e.min ? Number(e.min.split(":")[0]) : 0, o = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < i || r > o ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = _(() => {
    const [i, o] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], u = i * 60 + o, c = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const v = 60 * d + f;
        if (v < u || v > c) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = _(() => {
    const [i, o, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = i * 3600 + o * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (v, y, m) => {
      if (v !== null && y !== null) {
        const b = 3600 * v + 60 * y + m;
        if (b < d || b > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(i, o, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = i === "hour" ? t.value : i === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = i === "hour" ? (v) => fT(v, r).value : (v) => vT(v, r), f = i === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (o = d(o), !c(o)); v++) ;
    return o;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const mT = R({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...wb() }, "VTimePickerControls"), vu = Z()({ name: "VTimePickerControls", props: mT(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Ue(), { isAllowedHour: l, isAllowedMinute: i, isAllowedSecond: o, findNextAllowed: r } = pb(e), s = _(() => e.hour !== null ? e.ampm ? bi(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (D) => {
    if (D == null || isNaN(Number(D))) return null;
    const A = Number(D);
    return e.ampm ? tn(kb(A)) : tn(A);
  }, out: (D) => {
    if (isNaN(Number(D)) || D == null || D === "") return null;
    const A = typeof D == "string" ? ai(D) : Number(D);
    return A === null ? null : e.ampm ? bi(A, e.period ?? "am") : je(A, 0, 23);
  } }, y = pe(e, "hour", void 0, v.in, v.out), m = { in: (D) => D != null && !isNaN(Number(D)) ? tn(`${D}`) : null, out: (D) => {
    if (isNaN(Number(D)) || D == null || D === "") return null;
    const A = typeof D == "string" ? ai(D) : Number(D);
    return A !== null ? je(A, 0, 59) : null;
  } }, b = pe(e, "minute", void 0, m.in, m.out), h = pe(e, "second", void 0, m.in, m.out);
  function x(D) {
    if (!["ArrowUp", "ArrowDown"].includes(D.key)) return;
    D.preventDefault(), D.stopPropagation();
    const A = e.period === "am", L = e.ampm ? bi(Number(y.value ?? 0), A ? "am" : "pm") : Number(y.value ?? 0), W = r("hour", L, D.key === "ArrowUp"), H = A && W >= 12 || !A && W < 12;
    e.ampm && H ? (n("update:period", e.period === "am" ? "pm" : "am"), Te(() => y.value = tn(W))) : y.value = tn(W);
  }
  function I(D) {
    if (!["ArrowUp", "ArrowDown"].includes(D.key)) return;
    D.preventDefault(), D.stopPropagation();
    const A = Number(b.value ?? 0), L = r("minute", A, D.key === "ArrowUp", s.value);
    b.value = tn(L);
  }
  function V(D) {
    if (!["ArrowUp", "ArrowDown"].includes(D.key)) return;
    D.preventDefault(), D.stopPropagation();
    const A = Number(h.value ?? 0), L = r("second", A, D.key === "ArrowUp", s.value, u.value);
    h.value = tn(L);
  }
  function k(D, A, L) {
    return (W) => {
      if (!W.data) return;
      const H = W.target, { value: X, selectionStart: q, selectionEnd: N } = H ?? {};
      if (ai(W.data) === null) {
        W.preventDefault();
        return;
      }
      const K = X ? X.slice(0, q) + W.data + X.slice(N) : W.data;
      if (K.length > 2) {
        if (q === N && N === 0 && W.data.trim().startsWith("0")) {
          W.preventDefault(), H.value = K.trim().substring(0, 2), L(H.value), W.data.trim().length === 1 && H.setSelectionRange(1, 1);
          return;
        }
        if (q === N && N === 1 && X.startsWith("0")) {
          W.preventDefault(), H.value = K.trim().substring(0, 2), L(H.value);
          return;
        }
        const $ = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (ai(K) > $) {
          W.preventDefault(), H.value = tn(String(ai(W.data)).substring(0, 2)), L(H.value);
          return;
        }
      }
      const z = D(K);
      A(z) && W.preventDefault();
    };
  }
  function g(D) {
    n("update:period", D);
    const A = r("hour", D === "am" ? 23 : 11, true);
    Te(() => y.value = tn(A));
  }
  const C = Q(), w = Q(), T = Q();
  ue(() => e.viewMode, (D, A) => {
    switch (A) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        w.value.blur();
        break;
      case "second":
        T.value.blur();
        break;
    }
  });
  const P = k(v.out, (D) => v.in(D) === y.value, (D) => y.value = D), E = k(m.out, (D) => m.in(D) === b.value, (D) => b.value = D), B = k(m.out, (D) => m.in(D) === h.value, (D) => h.value = D);
  return te(() => p("div", { class: "v-time-picker-controls" }, [p("div", { class: ee({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [S(cs, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (D) => y.value = D, onKeydown: x, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), p("span", { class: "v-time-picker-controls__time__separator" }, [St(":")]), S(cs, { ref: w, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (D) => b.value = D, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && p("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [St(":")]), e.useSeconds && p(he, null, [S(cs, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (D) => h.value = D, onKeydown: V, onBeforeinput: B, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && p("div", { class: "v-time-picker-controls__ampm" }, [S($e, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), S($e, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), gT = R({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...wb(), ...Be(Vr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...ut() }, "VTimePicker"), hT = Z()({ name: "VTimePicker", props: gT(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Ue(), { densityClasses: i } = Mt(e), o = Q(null), r = Q(null), s = Q(null), u = Q(null), c = Q(null), d = Q(null), f = pe(e, "period", "am"), v = pe(e, "viewMode", "hour"), y = Q(null), m = Q(null), b = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: x, isAllowedSecond: I } = pb(e), V = M(() => e.modelValue !== null && o.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function k() {
    const P = g();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  ue(o, k), ue(r, k), ue(s, k), ue(() => e.modelValue, (P) => C(P)), ue(() => e.useSeconds, (P, E) => {
    E && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), kt(() => {
    C(e.modelValue);
  });
  function g() {
    return o.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${tn(o.value)}:${tn(r.value)}` + (e.useSeconds ? `:${tn(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") o.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) o.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [E, , B, , D, A] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      o.value = A ? bi(parseInt(E, 10), A) : parseInt(E, 10), r.value = parseInt(B, 10), s.value = parseInt(D || 0, 10);
    }
    f.value = o.value == null || o.value < 12 ? "am" : "pm";
  }
  function w(P) {
    v.value === "hour" ? o.value = b.value ? bi(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
  }
  function T(P) {
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
    const E = o.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(o.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = o.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && k());
  }
  te(() => {
    const P = Be(zl.filterProps(e), ["hideHeader"]), E = vu.filterProps(e), B = fu.filterProps(Be(e, ["format", "modelValue", "min", "max"])), D = v.value === "hour" ? h.value : v.value === "minute" ? (A) => x.value(o.value, A) : (A) => I.value(o.value, r.value, A);
    return S(zl, U(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, i.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => S(vu, U(E, { ampm: b.value, hour: o.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (A) => o.value = A, "onUpdate:minute": (A) => r.value = A, "onUpdate:second": (A) => s.value = A, "onUpdate:period": (A) => f.value = A, "onUpdate:viewMode": (A) => v.value = A, ref: y }), null), default: () => S(fu, U(B, { allowedValues: D, double: v.value === "hour" && !b.value, format: v.value === "hour" ? b.value ? kb : (A) => A : (A) => tn(A, 2), max: v.value === "hour" ? b.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && b.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? o.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: w, ref: m }), null), actions: a.actions });
  });
} }), yT = R({ ...Se(), ...vn({ variant: "text" }) }, "VToolbarItems"), bT = Z()({ name: "VToolbarItems", props: yT(), setup(e, t) {
  let { slots: n } = t;
  return st({ VBtn: { color: M(() => e.color), height: "inherit", variant: M(() => e.variant) } }), te(() => {
    var _a3;
    return p("div", { class: ee(["v-toolbar-items", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), ST = R({ id: String, interactive: Boolean, text: String, ...Be(io({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), xb = Z()({ name: "VTooltip", props: ST(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pe(e, "modelValue"), { scopeId: l } = ml(), i = Tt(), o = M(() => e.id || `v-tooltip-${i}`), r = Q(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = M(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => U({ "aria-describedby": o.value }, e.activatorProps));
  return te(() => {
    const f = Nn.filterProps(e);
    return S(Nn, U({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, y = new Array(v), m = 0; m < v; m++) y[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...y)) ?? e.text;
    } });
  }), Ct({}, r);
} }), kT = R({ ...Be(eh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), mu = Z()({ name: "VTreeviewGroup", props: kT(), setup(e, t) {
  let { slots: n } = t;
  const a = Q(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), i = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return te(() => {
    const o = Oi.filterProps(e);
    return S(Oi, U(o, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => p(he, null, [S(De, { defaults: i.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Cb = Symbol.for("vuetify:v-treeview"), _b = R({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ce, ...ah({ slim: true }) }, "VTreeviewItem"), gu = Z()({ name: "VTreeviewItem", props: _b(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Oe(Cb, { visibleIds: Q() }).visibleIds, i = Q(), o = _(() => {
    var _a3, _b2;
    return ((_a3 = i.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = i.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a3, _b2;
    return ((_a3 = i.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = i.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || o.value)), u = _(() => {
    var _a3;
    return l.value && !l.value.has(Pe((_a3 = i.value) == null ? void 0 : _a3.id));
  });
  function c(f) {
    var _a3, _b2;
    s.value && o.value && ((_b2 = i.value) == null ? void 0 : _b2.activate(!((_a3 = i.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return te(() => {
    var _a3;
    const f = bn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return S(bn, U({ ref: i }, f, { active: ((_a3 = i.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": o.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (y) => {
      var _a4;
      return p(he, null, [e.indentLines && e.indentLines.length > 0 ? p("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => p("div", { class: ee(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && S(fc, { start: true }, { default: () => [e.toggleIcon ? p(he, null, [n.toggle ? S(De, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...y, loading: e.loading, props: { onClick: d } })] }) : S($e, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => S(Ia, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : p("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? S(De, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, y)];
      } }) : p(he, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, y), e.prependAvatar && S(cn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && S(He, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Ct({}, i);
} }), Vb = R({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, falseIcon: Ce, trueIcon: Ce, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...Zt(_b(), ["hideActions"]), ...ut() }, "VTreeviewChildren"), Go = Z()({ name: "VTreeviewChildren", props: Vb(), setup(e, t) {
  let { slots: n } = t;
  const a = Vt(/* @__PURE__ */ new Set()), l = Q([]), i = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
  async function o(s) {
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
      const { children: d, props: f } = s, v = a.has(s.value), y = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, b = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: b, path: [...e.path, u], hideAction: e.hideActions }, x = fw({ depth: m, isLast: b, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return p(he, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && S(fc, { start: true }, { default: () => [S(Vn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (w) => r(C.select, w), onClick: (w) => w.stopPropagation(), onKeydown: (w) => {
          ["Enter", "Space"].includes(w.key) && (w.stopPropagation(), r(C.select, C.isSelected));
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
      } : void 0 }, V = mu.filterProps(f), k = Go.filterProps({ ...e, ...h }), g = { hideActions: e.hideActions, indentLines: x.footer };
      return d ? S(mu, U(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: w, isOpen: T } = C;
        const P = { ...f, ...w, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: x.node, ariaExpanded: T, onToggleExpand: [() => o(s), w.onClick], onClick: e.disabled || f.disabled ? void 0 : i.value ? [() => o(s), w.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return mo(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => S(gu, U({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a5;
        return p(he, null, [S(Go, U(k, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: x.children, isLastGroup: y, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: v })]);
      } }) : mo(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? mo(n.divider, { props: s.raw }, () => S(sn, s.props, null)) : s.type === "subheader" ? mo(n.subheader, { props: s.raw }, () => S(Zl, s.props, null)) : S(gu, U(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: x.leaf, value: e.returnObject ? Pe(s.raw) : f.value }), I));
    }));
  };
} });
function Ib(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && Ib(n.children, t);
  return t;
}
const wT = R({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...gl({ filterKeys: ["title"] }), ...Be(Vb(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Be(uh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), pT = Z()({ name: "VTreeview", props: wT(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Ue(), { items: i } = sh(e), o = M(() => e.activeColor), r = M(() => e.baseColor), s = M(() => e.color), u = pe(e, "activated"), c = pe(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = Q(), v = _(() => e.openAll ? I(i.value) : e.opened), y = _(() => Ib(i.value)), m = M(() => e.search), { filteredItems: b } = hl(e, y, m), h = _(() => {
    var _a3;
    if (!m.value) return null;
    const V = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return V ? new Set(b.value.flatMap((k) => {
      const g = e.returnObject ? k.raw : k.props.value;
      return [...V(g), ...x(g)].map(Pe);
    })) : null;
  });
  function x(V) {
    var _a3, _b2;
    const k = [], g = (((_a3 = f.value) == null ? void 0 : _a3.children.get(V)) ?? []).slice();
    for (; g.length; ) {
      const C = g.shift();
      C && (k.push(C), g.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return k;
  }
  function I(V) {
    let k = [];
    for (const g of V) g.children && (k.push(e.returnObject ? Pe(g.raw) : g.value), g.children && (k = k.concat(I(g.children))));
    return k;
  }
  return et(Cb, { visibleIds: h }), st({ VTreeviewGroup: { activeColor: o, baseColor: r, color: s, collapseIcon: M(() => e.collapseIcon), expandIcon: M(() => e.expandIcon) }, VTreeviewItem: { activeClass: M(() => e.activeClass), activeColor: o, baseColor: r, color: s, density: M(() => e.density), disabled: M(() => e.disabled), lines: M(() => e.lines), variant: M(() => e.variant) } }), te(() => {
    const V = Hl.filterProps(e), k = Go.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return S(Hl, U({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? S(bn, { key: "no-data", title: l(e.noDataText) }, null)), S(Go, U(k, { density: e.density, returnObject: e.returnObject, items: i.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), xT = Z()({ name: "VValidation", props: Wg(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = zg(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), CT = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: Px, VAlertTitle: Bg, VApp: Dp, VAppBar: Jp, VAppBarNavIcon: Cx, VAppBarTitle: _x, VAutocomplete: XC, VAvatar: cn, VBadge: _h, VBanner: e1, VBannerActions: Vh, VBannerText: Ih, VBottomNavigation: n1, VBottomSheet: l1, VBreadcrumbs: s1, VBreadcrumbsDivider: Th, VBreadcrumbsItem: Ah, VBtn: $e, VBtnGroup: $s, VBtnToggle: lx, VCalendar: o_, VCard: f_, VCardActions: Zh, VCardItem: ey, VCardSubtitle: Jh, VCardText: ty, VCardTitle: Qh, VCarousel: w_, VCarouselItem: x_, VCheckbox: Nx, VCheckboxBtn: Vn, VChip: ia, VChipGroup: jx, VClassIcon: Ku, VCode: C_, VCol: QV, VColorPicker: fV, VCombobox: mV, VComponentIcon: Es, VConfirmEdit: hV, VContainer: qV, VCounter: Sr, VDataIterator: TV, VDataTable: zV, VDataTableFooter: Ri, VDataTableHeaders: al, VDataTableRow: Hc, VDataTableRows: ll, VDataTableServer: KV, VDataTableVirtual: YV, VDatePicker: dI, VDatePickerControls: au, VDatePickerHeader: lu, VDatePickerMonth: iu, VDatePickerMonths: ou, VDatePickerYears: ru, VDefaultsProvider: De, VDialog: Ys, VDialogBottomTransition: Fp, VDialogTopTransition: Lp, VDialogTransition: vr, VDivider: sn, VEmptyState: vI, VExpandBothTransition: jp, VExpandTransition: mr, VExpandXTransition: nc, VExpansionPanel: mI, VExpansionPanelText: su, VExpansionPanelTitle: uu, VExpansionPanels: yI, VFab: SI, VFabTransition: Bp, VFadeTransition: Mi, VField: Aa, VFieldLabel: oi, VFileInput: _I, VFooter: II, VForm: TI, VHotkey: MI, VHover: FI, VIcon: He, VImg: la, VInfiniteScroll: $I, VInput: Ft, VItem: RI, VItemGroup: NI, VKbd: cu, VLabel: ql, VLayout: WI, VLayoutItem: jI, VLazy: UI, VLigatureIcon: gw, VList: Hl, VListGroup: Oi, VListImg: fC, VListItem: bn, VListItemAction: fc, VListItemMedia: gC, VListItemSubtitle: th, VListItemTitle: nh, VListSubheader: Zl, VLocaleProvider: GI, VMain: XI, VMenu: Wl, VMessages: Rg, VNavigationDrawer: iP, VNoSsr: oP, VNumberInput: dP, VOtpInput: vP, VOverlay: Nn, VPagination: eu, VParallax: hP, VProgressCircular: Ia, VProgressLinear: gr, VRadio: bP, VRadioGroup: kP, VRangeSlider: pP, VRating: CP, VResponsive: Bs, VRow: oI, VScaleTransition: ec, VScrollXReverseTransition: Op, VScrollXTransition: $p, VScrollYReverseTransition: Rp, VScrollYTransition: Np, VSelect: _c, VSelectionControl: Pa, VSelectionControlGroup: Og, VSheet: Ta, VSkeletonLoader: PP, VSlideGroup: $i, VSlideGroupItem: TP, VSlideXReverseTransition: Wp, VSlideXTransition: Hp, VSlideYReverseTransition: zp, VSlideYTransition: tc, VSlider: Qs, VSnackbar: du, VSnackbarQueue: EP, VSpacer: nu, VSparkline: LP, VSpeedDial: OP, VStepper: YP, VStepperActions: cb, VStepperHeader: db, VStepperItem: fb, VStepperWindow: vb, VStepperWindowItem: mb, VSvgIcon: Uu, VSwitch: KP, VSystemBar: qP, VTab: hb, VTable: il, VTabs: eT, VTabsWindow: yb, VTabsWindowItem: bb, VTextField: Rn, VTextarea: nT, VThemeProvider: lT, VTimePicker: hT, VTimePickerClock: fu, VTimePickerControls: vu, VTimeline: uT, VTimelineItem: rT, VToolbar: Ls, VToolbarItems: bT, VToolbarTitle: Zu, VTooltip: xb, VTreeview: pT, VTreeviewGroup: mu, VTreeviewItem: gu, VValidation: xT, VVirtualScroll: kr, VWindow: tl, VWindowItem: nl }, Symbol.toStringTag, { value: "Module" }));
function _T(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: i, ...o } = n, r = !Object.keys(o).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (o == null ? void 0 : o.attr) ?? r, characterData: (o == null ? void 0 : o.char) ?? r, childList: (o == null ? void 0 : o.child) ?? r, subtree: (o == null ? void 0 : o.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Pb(e, t);
  });
  i && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function Pb(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const VT = { mounted: _T, unmounted: Pb };
function Tb(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = n ? e : t.arg ? document.querySelector(t.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: i, options: l, target: n ? void 0 : o });
}
function Ab(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function IT(e, t) {
  t.value !== t.oldValue && (Ab(e, t), Tb(e, t));
}
const PT = { mounted: Tb, unmounted: Ab, updated: IT };
function TT(e, t) {
  const n = typeof e == "string" ? ct(e) : e, a = AT(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    Am(null, l);
  } };
}
function AT(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const i = typeof t == "function" ? t(a) : t, o = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (i == null ? void 0 : i.text), r = Qa(a.value) ? a.value : {}, s = () => o ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = DT(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ra(e, U(i, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), Am(c, n);
  };
}
function DT(e, t) {
  const n = /* @__PURE__ */ new Set(), a = (i) => {
    var _a3, _b2;
    for (const o of i) {
      if (!o) continue;
      if (o === e || o.el && e.el && o.el === e.el) return true;
      n.add(o);
      let r;
      if (o.suspense ? r = a([o.ssContent]) : Array.isArray(o.children) ? r = a(o.children) : ((_a3 = o.component) == null ? void 0 : _a3.vnode) && (r = a([(_b2 = o.component) == null ? void 0 : _b2.subTree])), r) return r;
      n.delete(o);
    }
    return false;
  };
  if (!a([t.subTree])) return t;
  const l = Array.from(n).reverse();
  for (const i of l) if (i.component) return i.component;
  return t;
}
const ET = TT(xb, (e) => {
  var _a3;
  return { activator: (Qa(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), MT = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: js, Intersect: _n, Mutate: VT, Resize: Ni, Ripple: Et, Scroll: PT, Tooltip: ET, Touch: Ko }, Symbol.toStringTag, { value: "Module" })), BT = bg({ components: CT, directives: MT, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
Zk(k0).use(BT).mount("#app");
