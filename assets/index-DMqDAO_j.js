(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function n(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function r(i) {
    if (i.ep) return;
    i.ep = true;
    const s = n(i);
    fetch(i.href, s);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Me = {}, Zn = [], Ut = () => {
}, lu = () => false, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wo = (e) => e.startsWith("onUpdate:"), ze = Object.assign, Go = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sm = Object.prototype.hasOwnProperty, xe = (e, t) => Sm.call(e, t), ie = Array.isArray, Kn = (e) => ui(e) === "[object Map]", cu = (e) => ui(e) === "[object Set]", ja = (e) => ui(e) === "[object Date]", fe = (e) => typeof e == "function", Ne = (e) => typeof e == "string", Tt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", uu = (e) => (Se(e) || fe(e)) && fe(e.then) && fe(e.catch), fu = Object.prototype.toString, ui = (e) => fu.call(e), Cm = (e) => ui(e).slice(8, -1), du = (e) => ui(e) === "[object Object]", os = (e) => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ir = zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), as = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xm = /-\w/g, wt = as((e) => e.replace(xm, (t) => t.slice(1).toUpperCase())), Am = /\B([A-Z])/g, On = as((e) => e.replace(Am, "-$1").toLowerCase()), mr = as((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = as((e) => e ? `on${mr(e)}` : ""), hn = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, mu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Lm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Em = (e) => {
  const t = Ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let za;
const ls = () => za || (za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Re(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ne(r) ? Pm(r) : Re(r);
      if (i) for (const s in i) t[s] = i[s];
    }
    return t;
  } else if (Ne(e) || Se(e)) return e;
}
const km = /;(?![^(]*\))/g, Mm = /:([^]+)/, Tm = /\/\*[^]*?\*\//g;
function Pm(e) {
  const t = {};
  return e.replace(Tm, "").split(km).forEach((n) => {
    if (n) {
      const r = n.split(Mm);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (Ne(e)) t = e;
  else if (ie(e)) for (let n = 0; n < e.length; n++) {
    const r = Ae(e[n]);
    r && (t += r + " ");
  }
  else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Im = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rm = zo(Im);
function hu(e) {
  return !!e || e === "";
}
function Om(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = Uo(e[r], t[r]);
  return n;
}
function Uo(e, t) {
  if (e === t) return true;
  let n = ja(e), r = ja(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = Tt(e), r = Tt(t), n || r) return e === t;
  if (n = ie(e), r = ie(t), n || r) return n && r ? Om(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s) return false;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !Uo(e[o], t[o])) return false;
    }
  }
  return String(e) === String(t);
}
const gu = (e) => !!(e && e.__v_isRef === true), be = (e) => Ne(e) ? e : e == null ? "" : ie(e) || Se(e) && (e.toString === fu || !fe(e.toString)) ? gu(e) ? be(e.value) : JSON.stringify(e, vu, 2) : String(e), vu = (e, t) => gu(t) ? vu(e, t.value) : Kn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], s) => (n[Ms(r, s) + " =>"] = i, n), {}) } : cu(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ms(n)) } : Tt(t) ? Ms(t) : Se(t) && !ie(t) && !du(t) ? String(t) : t, Ms = (e, t = "") => {
  var n;
  return Tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qe;
class pu {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Qe, !t && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1);
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
      const n = Qe;
      try {
        return Qe = this, t();
      } finally {
        Qe = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Qe, Qe = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Qe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Gr(e) {
  return new pu(e);
}
function yu() {
  return Qe;
}
function ct(e, t = false) {
  Qe && Qe.cleanups.push(e);
}
let Ie;
const Ts = /* @__PURE__ */ new WeakSet();
class bu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ts.has(this) && (Ts.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _u(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Wa(this), Su(this);
    const t = Ie, n = kt;
    Ie = this, kt = true;
    try {
      return this.fn();
    } finally {
      Cu(this), Ie = t, kt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Yo(t);
      this.deps = this.depsTail = void 0, Wa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    so(this) && this.run();
  }
  get dirty() {
    return so(this);
  }
}
let wu = 0, Rr, Or;
function _u(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Or, Or = e;
    return;
  }
  e.next = Rr, Rr = e;
}
function Zo() {
  wu++;
}
function Ko() {
  if (--wu > 0) return;
  if (Or) {
    let t = Or;
    for (Or = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rr; ) {
    let t = Rr;
    for (Rr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (r) {
        e || (e = r);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function Su(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Cu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Yo(r), Vm(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function so(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (xu(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function xu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ur) || (e.globalVersion = Ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !so(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = Ie, r = kt;
  Ie = e, kt = true;
  try {
    Su(e);
    const i = e.fn(e._value);
    (t.version === 0 || hn(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ie = n, kt = r, Cu(e), e.flags &= -3;
  }
}
function Yo(e, t = false) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Yo(s, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kt = true;
const Au = [];
function nn() {
  Au.push(kt), kt = false;
}
function rn() {
  const e = Au.pop();
  kt = e === void 0 ? true : e;
}
function Wa(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ie;
    Ie = void 0;
    try {
      t();
    } finally {
      Ie = n;
    }
  }
}
let Ur = 0;
class Dm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!Ie || !kt || Ie === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ie) n = this.activeLink = new Dm(Ie, this), Ie.deps ? (n.prevDep = Ie.depsTail, Ie.depsTail.nextDep = n, Ie.depsTail = n) : Ie.deps = Ie.depsTail = n, Lu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ie.depsTail, n.nextDep = void 0, Ie.depsTail.nextDep = n, Ie.depsTail = n, Ie.deps === n && (Ie.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ur++, this.notify(t);
  }
  notify(t) {
    Zo();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ko();
    }
  }
}
function Lu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Lu(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Fi = /* @__PURE__ */ new WeakMap(), kn = Symbol(""), oo = Symbol(""), Zr = Symbol("");
function et(e, t, n) {
  if (kt && Ie) {
    let r = Fi.get(e);
    r || Fi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new qo()), i.map = r, i.key = n), i.track();
  }
}
function en(e, t, n, r, i, s) {
  const o = Fi.get(e);
  if (!o) {
    Ur++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Zo(), t === "clear") o.forEach(a);
  else {
    const l = ie(e), u = l && os(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === Zr || !Tt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(Zr)), t) {
      case "add":
        l ? u && a(o.get("length")) : (a(o.get(kn)), Kn(e) && a(o.get(oo)));
        break;
      case "delete":
        l || (a(o.get(kn)), Kn(e) && a(o.get(oo)));
        break;
      case "set":
        Kn(e) && a(o.get(kn));
        break;
    }
  }
  Ko();
}
function Hm(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function Nn(e) {
  const t = ee(e);
  return t === e ? t : (et(t, "iterate", Zr), bt(e) ? t : t.map(Pt));
}
function cs(e) {
  return et(e = ee(e), "iterate", Zr), e;
}
function fn(e, t) {
  return sn(e) ? nr(Mn(e) ? Pt(t) : t) : Pt(t);
}
const Nm = { __proto__: null, [Symbol.iterator]() {
  return Ps(this, Symbol.iterator, (e) => fn(this, e));
}, concat(...e) {
  return Nn(this).concat(...e.map((t) => ie(t) ? Nn(t) : t));
}, entries() {
  return Ps(this, "entries", (e) => (e[1] = fn(this, e[1]), e));
}, every(e, t) {
  return Yt(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Yt(this, "filter", e, t, (n) => n.map((r) => fn(this, r)), arguments);
}, find(e, t) {
  return Yt(this, "find", e, t, (n) => fn(this, n), arguments);
}, findIndex(e, t) {
  return Yt(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Yt(this, "findLast", e, t, (n) => fn(this, n), arguments);
}, findLastIndex(e, t) {
  return Yt(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Yt(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Is(this, "includes", e);
}, indexOf(...e) {
  return Is(this, "indexOf", e);
}, join(e) {
  return Nn(this).join(e);
}, lastIndexOf(...e) {
  return Is(this, "lastIndexOf", e);
}, map(e, t) {
  return Yt(this, "map", e, t, void 0, arguments);
}, pop() {
  return Cr(this, "pop");
}, push(...e) {
  return Cr(this, "push", e);
}, reduce(e, ...t) {
  return Ga(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Ga(this, "reduceRight", e, t);
}, shift() {
  return Cr(this, "shift");
}, some(e, t) {
  return Yt(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Cr(this, "splice", e);
}, toReversed() {
  return Nn(this).toReversed();
}, toSorted(e) {
  return Nn(this).toSorted(e);
}, toSpliced(...e) {
  return Nn(this).toSpliced(...e);
}, unshift(...e) {
  return Cr(this, "unshift", e);
}, values() {
  return Ps(this, "values", (e) => fn(this, e));
} };
function Ps(e, t, n) {
  const r = cs(e), i = r[t]();
  return r !== e && !bt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const Fm = Array.prototype;
function Yt(e, t, n, r, i, s) {
  const o = cs(e), a = o !== e && !bt(e), l = o[t];
  if (l !== Fm[t]) {
    const f = l.apply(e, s);
    return a ? Pt(f) : f;
  }
  let u = n;
  o !== e && (a ? u = function(f, d) {
    return n.call(this, fn(e, f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const c = l.call(o, u, r);
  return a && i ? i(c) : c;
}
function Ga(e, t, n, r) {
  const i = cs(e);
  let s = n;
  return i !== e && (bt(e) ? n.length > 3 && (s = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : s = function(o, a, l) {
    return n.call(this, o, fn(e, a), l, e);
  }), i[t](s, ...r);
}
function Is(e, t, n) {
  const r = ee(e);
  et(r, "iterate", Zr);
  const i = r[t](...n);
  return (i === -1 || i === false) && us(n[0]) ? (n[0] = ee(n[0]), r[t](...n)) : i;
}
function Cr(e, t, n = []) {
  nn(), Zo();
  const r = ee(e)[t].apply(e, n);
  return Ko(), rn(), r;
}
const $m = zo("__proto__,__v_isRef,__isVue"), Eu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tt));
function Bm(e) {
  Tt(e) || (e = String(e));
  const t = ee(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class ku {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return r === (i ? s ? Xm : Iu : s ? Pu : Tu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = ie(t);
    if (!i) {
      let l;
      if (o && (l = Nm[n])) return l;
      if (n === "hasOwnProperty") return Bm;
    }
    const a = Reflect.get(t, n, He(t) ? t : r);
    if ((Tt(n) ? Eu.has(n) : $m(n)) || (i || et(t, "get", n), s)) return a;
    if (He(a)) {
      const l = o && os(n) ? a : a.value;
      return i && Se(l) ? tr(l) : l;
    }
    return Se(a) ? i ? tr(a) : Ke(a) : a;
  }
}
class Mu extends ku {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = ie(t) && os(n);
    if (!this._isShallow) {
      const u = sn(s);
      if (!bt(r) && !sn(r) && (s = ee(s), r = ee(r)), !o && He(s) && !He(r)) return u || (s.value = r), true;
    }
    const a = o ? Number(n) < t.length : xe(t, n), l = Reflect.set(t, n, r, He(t) ? t : i);
    return t === ee(i) && (a ? hn(r, s) && en(t, "set", n, r) : en(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = xe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && en(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Tt(n) || !Eu.has(n)) && et(t, "has", n), r;
  }
  ownKeys(t) {
    return et(t, "iterate", ie(t) ? "length" : kn), Reflect.ownKeys(t);
  }
}
class jm extends ku {
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
const zm = new Mu(), Wm = new jm(), Gm = new Mu(true);
const ao = (e) => e, Ei = (e) => Reflect.getPrototypeOf(e);
function Um(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = ee(i), o = Kn(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), c = n ? ao : t ? nr : Pt;
    return !t && et(s, "iterate", l ? oo : kn), ze(Object.create(u), { next() {
      const { value: f, done: d } = u.next();
      return d ? { value: f, done: d } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
    } });
  };
}
function ki(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Zm(e, t) {
  const n = { get(i) {
    const s = this.__v_raw, o = ee(s), a = ee(i);
    e || (hn(i, a) && et(o, "get", i), et(o, "get", a));
    const { has: l } = Ei(o), u = t ? ao : e ? nr : Pt;
    if (l.call(o, i)) return u(s.get(i));
    if (l.call(o, a)) return u(s.get(a));
    s !== o && s.get(i);
  }, get size() {
    const i = this.__v_raw;
    return !e && et(ee(i), "iterate", kn), i.size;
  }, has(i) {
    const s = this.__v_raw, o = ee(s), a = ee(i);
    return e || (hn(i, a) && et(o, "has", i), et(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a);
  }, forEach(i, s) {
    const o = this, a = o.__v_raw, l = ee(a), u = t ? ao : e ? nr : Pt;
    return !e && et(l, "iterate", kn), a.forEach((c, f) => i.call(s, u(c), u(f), o));
  } };
  return ze(n, e ? { add: ki("add"), set: ki("set"), delete: ki("delete"), clear: ki("clear") } : { add(i) {
    !t && !bt(i) && !sn(i) && (i = ee(i));
    const s = ee(this);
    return Ei(s).has.call(s, i) || (s.add(i), en(s, "add", i, i)), this;
  }, set(i, s) {
    !t && !bt(s) && !sn(s) && (s = ee(s));
    const o = ee(this), { has: a, get: l } = Ei(o);
    let u = a.call(o, i);
    u || (i = ee(i), u = a.call(o, i));
    const c = l.call(o, i);
    return o.set(i, s), u ? hn(s, c) && en(o, "set", i, s) : en(o, "add", i, s), this;
  }, delete(i) {
    const s = ee(this), { has: o, get: a } = Ei(s);
    let l = o.call(s, i);
    l || (i = ee(i), l = o.call(s, i)), a && a.call(s, i);
    const u = s.delete(i);
    return l && en(s, "delete", i, void 0), u;
  }, clear() {
    const i = ee(this), s = i.size !== 0, o = i.clear();
    return s && en(i, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = Um(i, e, t);
  }), n;
}
function Xo(e, t) {
  const n = Zm(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(xe(n, i) && i in r ? n : r, i, s);
}
const Km = { get: Xo(false, false) }, Ym = { get: Xo(false, true) }, qm = { get: Xo(true, false) };
const Tu = /* @__PURE__ */ new WeakMap(), Pu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Xm = /* @__PURE__ */ new WeakMap();
function Jm(e) {
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
function Qm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jm(Cm(e));
}
function Ke(e) {
  return sn(e) ? e : Jo(e, false, zm, Km, Tu);
}
function Ru(e) {
  return Jo(e, false, Gm, Ym, Pu);
}
function tr(e) {
  return Jo(e, true, Wm, qm, Iu);
}
function Jo(e, t, n, r, i) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const s = Qm(e);
  if (s === 0) return e;
  const o = i.get(e);
  if (o) return o;
  const a = new Proxy(e, s === 2 ? r : n);
  return i.set(e, a), a;
}
function Mn(e) {
  return sn(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sn(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function us(e) {
  return e ? !!e.__v_raw : false;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function eh(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && mu(e, "__v_skip", true), e;
}
const Pt = (e) => Se(e) ? Ke(e) : e, nr = (e) => Se(e) ? tr(e) : e;
function He(e) {
  return e ? e.__v_isRef === true : false;
}
function q(e) {
  return Ou(e, false);
}
function ue(e) {
  return Ou(e, true);
}
function Ou(e, t) {
  return He(e) ? e : new th(e, t);
}
class th {
  constructor(t, n) {
    this.dep = new qo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ee(t), this._value = n ? t : Pt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || bt(t) || sn(t);
    t = r ? t : ee(t), hn(t, n) && (this._rawValue = t, this._value = r ? t : Pt(t), this.dep.trigger());
  }
}
function ae(e) {
  return He(e) ? e.value : e;
}
function rt(e) {
  return fe(e) ? e() : ae(e);
}
const nh = { get: (e, t, n) => t === "__v_raw" ? e : ae(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const i = e[t];
  return He(i) && !He(n) ? (i.value = n, true) : Reflect.set(e, t, n, r);
} };
function Vu(e) {
  return Mn(e) ? e : new Proxy(e, nh);
}
function Du(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Hu(e, n);
  return t;
}
class rh {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = ee(t);
    let i = true, s = t;
    if (!ie(t) || !os(String(n))) do
      i = !us(s) || bt(s);
    while (i && (s = s.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ae(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && He(this._raw[this._key])) {
      const n = this._object[this._key];
      if (He(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Hm(this._raw, this._key);
  }
}
class ih {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function F(e, t, n) {
  return He(e) ? e : fe(e) ? new ih(e) : Se(e) && arguments.length > 1 ? Hu(e, t, n) : q(e);
}
function Hu(e, t, n) {
  return new rh(e, t, n);
}
class sh {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ie !== this) return _u(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return xu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function oh(e, t, n = false) {
  let r, i;
  return fe(e) ? r = e : (r = e.get, i = e.set), new sh(r, i, n);
}
const Mi = {}, $i = /* @__PURE__ */ new WeakMap();
let xn;
function ah(e, t = false, n = xn) {
  if (n) {
    let r = $i.get(n);
    r || $i.set(n, r = []), r.push(e);
  }
}
function lh(e, t, n = Me) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: a, call: l } = n, u = (_) => i ? _ : bt(_) || i === false || i === 0 ? tn(_, 1) : tn(_);
  let c, f, d, m, y = false, h = false;
  if (He(e) ? (f = () => e.value, y = bt(e)) : Mn(e) ? (f = () => u(e), y = true) : ie(e) ? (h = true, y = e.some((_) => Mn(_) || bt(_)), f = () => e.map((_) => {
    if (He(_)) return _.value;
    if (Mn(_)) return u(_);
    if (fe(_)) return l ? l(_, 2) : _();
  })) : fe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      nn();
      try {
        d();
      } finally {
        rn();
      }
    }
    const _ = xn;
    xn = c;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      xn = _;
    }
  } : f = Ut, t && i) {
    const _ = f, C = i === true ? 1 / 0 : i;
    f = () => tn(_(), C);
  }
  const S = yu(), v = () => {
    c.stop(), S && S.active && Go(S.effects, c);
  };
  if (s && t) {
    const _ = t;
    t = (...C) => {
      _(...C), v();
    };
  }
  let b = h ? new Array(e.length).fill(Mi) : Mi;
  const L = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_)) if (t) {
      const C = c.run();
      if (i || y || (h ? C.some((x, T) => hn(x, b[T])) : hn(C, b))) {
        d && d();
        const x = xn;
        xn = c;
        try {
          const T = [C, b === Mi ? void 0 : h && b[0] === Mi ? [] : b, m];
          b = C, l ? l(t, 3, T) : t(...T);
        } finally {
          xn = x;
        }
      }
    } else c.run();
  };
  return a && a(L), c = new bu(f), c.scheduler = o ? () => o(L, false) : L, m = (_) => ah(_, false, c), d = c.onStop = () => {
    const _ = $i.get(c);
    if (_) {
      if (l) l(_, 4);
      else for (const C of _) C();
      $i.delete(c);
    }
  }, t ? r ? L(true) : b = c.run() : o ? o(L.bind(null, true), true) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function tn(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, He(e)) tn(e.value, t, n);
  else if (ie(e)) for (let r = 0; r < e.length; r++) tn(e[r], t, n);
  else if (cu(e) || Kn(e)) e.forEach((r) => {
    tn(r, t, n);
  });
  else if (du(e)) {
    for (const r in e) tn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && tn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fi(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    fs(i, t, n);
  }
}
function It(e, t, n, r) {
  if (fe(e)) {
    const i = fi(e, t, n, r);
    return i && uu(i) && i.catch((s) => {
      fs(s, t, n);
    }), i;
  }
  if (ie(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++) i.push(It(e[s], t, n, r));
    return i;
  }
}
function fs(e, t, n, r = true) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Me;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === false) return;
      }
      a = a.parent;
    }
    if (s) {
      nn(), fi(s, null, 10, [e, l, u]), rn();
      return;
    }
  }
  ch(e, n, i, r, o);
}
function ch(e, t, n, r = true, i = false) {
  if (i) throw e;
  console.error(e);
}
const lt = [];
let jt = -1;
const Yn = [];
let dn = null, jn = 0;
const Nu = Promise.resolve();
let Bi = null;
function mt(e) {
  const t = Bi || Nu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uh(e) {
  let t = jt + 1, n = lt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = lt[r], s = Kr(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qo(e) {
  if (!(e.flags & 1)) {
    const t = Kr(e), n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= Kr(n) ? lt.push(e) : lt.splice(uh(t), 0, e), e.flags |= 1, Fu();
  }
}
function Fu() {
  Bi || (Bi = Nu.then(Bu));
}
function fh(e) {
  ie(e) ? Yn.push(...e) : dn && e.id === -1 ? dn.splice(jn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), Fu();
}
function Ua(e, t, n = jt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function $u(e) {
  if (Yn.length) {
    const t = [...new Set(Yn)].sort((n, r) => Kr(n) - Kr(r));
    if (Yn.length = 0, dn) {
      dn.push(...t);
      return;
    }
    for (dn = t, jn = 0; jn < dn.length; jn++) {
      const n = dn[jn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dn = null, jn = 0;
  }
}
const Kr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bu(e) {
  try {
    for (jt = 0; jt < lt.length; jt++) {
      const t = lt[jt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jt < lt.length; jt++) {
      const t = lt[jt];
      t && (t.flags &= -2);
    }
    jt = -1, lt.length = 0, $u(), Bi = null, (lt.length || Yn.length) && Bu();
  }
}
let Ye = null, ju = null;
function ji(e) {
  const t = Ye;
  return Ye = e, ju = e && e.type.__scopeId || null, t;
}
function De(e, t = Ye, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Gi(-1);
    const s = ji(t);
    let o;
    try {
      o = e(...i);
    } finally {
      ji(s), r._d && Gi(1);
    }
    return o;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function rr(e, t) {
  if (Ye === null) return e;
  const n = vs(Ye), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, a, l = Me] = t[i];
    s && (fe(s) && (s = { mounted: s, updated: s }), s.deep && tn(o), r.push({ dir: s, instance: n, value: o, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function yn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (nn(), It(l, n, 8, [e.el, a, e, t]), rn());
  }
}
function qe(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[e] = t;
  }
}
function ke(e, t, n = false) {
  const r = hi();
  if (r || Xn) {
    let i = Xn ? Xn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && fe(t) ? t.call(r && r.proxy) : t;
  }
}
const dh = Symbol.for("v-scx"), mh = () => ke(dh);
function on(e, t) {
  return ea(e, null, t);
}
function te(e, t, n) {
  return ea(e, t, n);
}
function ea(e, t, n = Me) {
  const { immediate: r, deep: i, flush: s, once: o } = n, a = ze({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Qr) {
    if (s === "sync") {
      const m = mh();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Ut, m.resume = Ut, m.pause = Ut, m;
    }
  }
  const c = nt;
  a.call = (m, y, h) => It(m, c, y, h);
  let f = false;
  s === "post" ? a.scheduler = (m) => {
    Je(m, c && c.suspense);
  } : s !== "sync" && (f = true, a.scheduler = (m, y) => {
    y ? m() : Qo(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const d = lh(e, t, a);
  return Qr && (u ? u.push(d) : l && d()), d;
}
function hh(e, t, n) {
  const r = this.proxy, i = Ne(e) ? e.includes(".") ? zu(r, e) : () => r[e] : e.bind(r, r);
  let s;
  fe(t) ? s = t : (s = t.handler, n = t);
  const o = gi(this), a = ea(i, s.bind(r), n);
  return o(), a;
}
function zu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
const Wu = Symbol("_vte"), Gu = (e) => e.__isTeleport, Vr = (e) => e && (e.disabled || e.disabled === ""), Za = (e) => e && (e.defer || e.defer === ""), Ka = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ya = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lo = (e, t) => {
  const n = e && e.to;
  return Ne(n) ? t ? t(n) : null : n;
}, Uu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, s, o, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: m, querySelector: y, createText: h, createComment: S } } = u, v = Vr(t.props);
  let { shapeFlag: b, children: L, dynamicChildren: _ } = t;
  if (e == null) {
    const C = t.el = h(""), x = t.anchor = h("");
    m(C, n, r), m(x, n, r);
    const T = (E, I) => {
      b & 16 && c(L, E, I, i, s, o, a, l);
    }, w = () => {
      const E = t.target = lo(t.props, y), I = co(E, t, h, m);
      E && (o !== "svg" && Ka(E) ? o = "svg" : o !== "mathml" && Ya(E) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), v || (T(E, I), Oi(t, false)));
    };
    v && (T(n, x), Oi(t, true)), Za(t.props) ? (t.el.__isMounted = false, Je(() => {
      w(), delete t.el.__isMounted;
    }, s)) : w();
  } else {
    if (Za(t.props) && e.el.__isMounted === false) {
      Je(() => {
        Uu.process(e, t, n, r, i, s, o, a, l, u);
      }, s);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, x = t.target = e.target, T = t.targetAnchor = e.targetAnchor, w = Vr(e.props), E = w ? n : x, I = w ? C : T;
    if (o === "svg" || Ka(x) ? o = "svg" : (o === "mathml" || Ya(x)) && (o = "mathml"), _ ? (d(e.dynamicChildren, _, E, i, s, o, a), oa(e, t, true)) : l || f(e, t, E, I, i, s, o, a, false), v) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ti(t, n, C, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const $ = t.target = lo(t.props, y);
      $ && Ti(t, $, null, u, 0);
    } else w && Ti(t, x, T, u, 1);
    Oi(t, v);
  }
}, remove(e, t, n, { um: r, o: { remove: i } }, s) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (i(u), i(c)), s && i(l), o & 16) {
    const m = s || !Vr(d);
    for (let y = 0; y < a.length; y++) {
      const h = a[y];
      r(h, t, n, m, !!h.dynamicChildren);
    }
  }
}, move: Ti, hydrate: gh };
function Ti(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(o, t, n), (!f || Vr(c)) && l & 16) for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
  f && r(a, t, n);
}
function gh(e, t, n, r, i, s, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
  function d(S, v) {
    let b = v;
    for (; b; ) {
      if (b && b.nodeType === 8) {
        if (b.data === "teleport start anchor") t.targetStart = b;
        else if (b.data === "teleport anchor") {
          t.targetAnchor = b, S._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      b = o(b);
    }
  }
  function m(S, v) {
    v.anchor = f(o(S), v, a(S), n, r, i, s);
  }
  const y = t.target = lo(t.props, l), h = Vr(t.props);
  if (y) {
    const S = y._lpa || y.firstChild;
    t.shapeFlag & 16 && (h ? (m(e, t), d(y, S), t.targetAnchor || co(y, t, c, u, a(e) === y ? e : null)) : (t.anchor = o(e), d(y, S), t.targetAnchor || co(y, t, c, u), f(S && o(S), t, y, n, r, i, s))), Oi(t, h);
  } else h && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const vh = Uu;
function Oi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function co(e, t, n, r, i = null) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[Wu] = o, e && (r(s, e, i), r(o, e, i)), o;
}
const zt = Symbol("_leaveCb"), xr = Symbol("_enterCb");
function Zu() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ot(() => {
    e.isMounted = true;
  }), Lt(() => {
    e.isUnmounting = true;
  }), e;
}
const Ct = [Function, Array], Ku = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Ct, onEnter: Ct, onAfterEnter: Ct, onEnterCancelled: Ct, onBeforeLeave: Ct, onLeave: Ct, onAfterLeave: Ct, onLeaveCancelled: Ct, onBeforeAppear: Ct, onAppear: Ct, onAfterAppear: Ct, onAppearCancelled: Ct }, Yu = (e) => {
  const t = e.subTree;
  return t.component ? Yu(t.component) : t;
}, ph = { name: "BaseTransition", props: Ku, setup(e, { slots: t }) {
  const n = hi(), r = Zu();
  return () => {
    const i = t.default && ta(t.default(), true);
    if (!i || !i.length) return;
    const s = qu(i), o = ee(e), { mode: a } = o;
    if (r.isLeaving) return Rs(s);
    const l = qa(s);
    if (!l) return Rs(s);
    let u = Yr(l, o, r, n, (f) => u = f);
    l.type !== tt && Rn(l, u);
    let c = n.subTree && qa(n.subTree);
    if (c && c.type !== tt && !Ln(c, l) && Yu(n).type !== tt) {
      let f = Yr(c, o, r, n);
      if (Rn(c, f), a === "out-in" && l.type !== tt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, Rs(s);
      a === "in-out" && l.type !== tt ? f.delayLeave = (d, m, y) => {
        const h = Xu(r, c);
        h[String(c.key)] = c, d[zt] = () => {
          m(), d[zt] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          y(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return s;
  };
} };
function qu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== tt) {
      t = n;
      break;
    }
  }
  return t;
}
const yh = ph;
function Xu(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Yr(e, t, n, r, i) {
  const { appear: s, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: y, onLeaveCancelled: h, onBeforeAppear: S, onAppear: v, onAfterAppear: b, onAppearCancelled: L } = t, _ = String(e.key), C = Xu(n, e), x = (E, I) => {
    E && It(E, r, 9, I);
  }, T = (E, I) => {
    const $ = I[1];
    x(E, I), ie(E) ? E.every((R) => R.length <= 1) && $() : E.length <= 1 && $();
  }, w = { mode: o, persisted: a, beforeEnter(E) {
    let I = l;
    if (!n.isMounted) if (s) I = S || l;
    else return;
    E[zt] && E[zt](true);
    const $ = C[_];
    $ && Ln(e, $) && $.el[zt] && $.el[zt](), x(I, [E]);
  }, enter(E) {
    if (C[_] === e) return;
    let I = u, $ = c, R = f;
    if (!n.isMounted) if (s) I = v || u, $ = b || c, R = L || f;
    else return;
    let B = false;
    E[xr] = (Y) => {
      B || (B = true, Y ? x(R, [E]) : x($, [E]), w.delayedLeave && w.delayedLeave(), E[xr] = void 0);
    };
    const X = E[xr].bind(null, false);
    I ? T(I, [E, X]) : X();
  }, leave(E, I) {
    const $ = String(e.key);
    if (E[xr] && E[xr](true), n.isUnmounting) return I();
    x(d, [E]);
    let R = false;
    E[zt] = (X) => {
      R || (R = true, I(), X ? x(h, [E]) : x(y, [E]), E[zt] = void 0, C[$] === e && delete C[$]);
    };
    const B = E[zt].bind(null, false);
    C[$] = e, m ? T(m, [E, B]) : B();
  }, clone(E) {
    const I = Yr(E, t, n, r, i);
    return i && i(I), I;
  } };
  return w;
}
function Rs(e) {
  if (ds(e)) return e = gn(e), e.children = null, e;
}
function qa(e) {
  if (!ds(e)) return Gu(e.type) && e.children ? qu(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && fe(n.default)) return n.default();
  }
}
function Rn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ta(e, t = false, n) {
  let r = [], i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === ye ? (o.patchFlag & 128 && i++, r = r.concat(ta(o.children, t, a))) : (t || o.type !== tt) && r.push(a != null ? gn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function Xe(e, t) {
  return fe(e) ? ze({ name: e.name }, t, { setup: e }) : e;
}
function hr() {
  const e = hi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Ju(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xa(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zi = /* @__PURE__ */ new WeakMap();
function Dr(e, t, n, r, i = false) {
  if (ie(e)) {
    e.forEach((h, S) => Dr(h, t && (ie(t) ? t[S] : t), n, r, i));
    return;
  }
  if (qn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Dr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? vs(r.component) : r.el, o = i ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === Me ? a.refs = {} : a.refs, f = a.setupState, d = ee(f), m = f === Me ? lu : (h) => Xa(c, h) ? false : xe(d, h), y = (h, S) => !(S && Xa(c, S));
  if (u != null && u !== l) {
    if (Ja(t), Ne(u)) c[u] = null, m(u) && (f[u] = null);
    else if (He(u)) {
      const h = t;
      y(u, h.k) && (u.value = null), h.k && (c[h.k] = null);
    }
  }
  if (fe(l)) fi(l, a, 12, [o, c]);
  else {
    const h = Ne(l), S = He(l);
    if (h || S) {
      const v = () => {
        if (e.f) {
          const b = h ? m(l) ? f[l] : c[l] : y() || !e.k ? l.value : c[e.k];
          if (i) ie(b) && Go(b, s);
          else if (ie(b)) b.includes(s) || b.push(s);
          else if (h) c[l] = [s], m(l) && (f[l] = c[l]);
          else {
            const L = [s];
            y(l, e.k) && (l.value = L), e.k && (c[e.k] = L);
          }
        } else h ? (c[l] = o, m(l) && (f[l] = o)) : S && (y(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const b = () => {
          v(), zi.delete(e);
        };
        b.id = -1, zi.set(e, b), Je(b, n);
      } else Ja(e), v();
    }
  }
}
function Ja(e) {
  const t = zi.get(e);
  t && (t.flags |= 8, zi.delete(e));
}
ls().requestIdleCallback;
ls().cancelIdleCallback;
const qn = (e) => !!e.type.__asyncLoader, ds = (e) => e.type.__isKeepAlive;
function Qu(e, t) {
  ef(e, "a", t);
}
function na(e, t) {
  ef(e, "da", t);
}
function ef(e, t, n = nt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return e();
  });
  if (ms(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) ds(i.parent.vnode) && bh(r, t, n, i), i = i.parent;
  }
}
function bh(e, t, n, r) {
  const i = ms(t, e, r, true);
  di(() => {
    Go(r[t], i);
  }, n);
}
function ms(e, t, n = nt, r = false) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      nn();
      const a = gi(n), l = It(t, n, e, o);
      return a(), rn(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const an = (e) => (t, n = nt) => {
  (!Qr || e === "sp") && ms(e, (...r) => t(...r), n);
}, hs = an("bm"), Ot = an("m"), wh = an("bu"), ra = an("u"), Lt = an("bum"), di = an("um"), _h = an("sp"), Sh = an("rtg"), Ch = an("rtc");
function xh(e, t = nt) {
  ms("ec", e, t);
}
const Ah = "components", Lh = Symbol.for("v-ndc");
function Eh(e) {
  return Ne(e) && kh(Ah, e, false) || e;
}
function kh(e, t, n = true, r = false) {
  const i = Ye || nt;
  if (i) {
    const s = i.type;
    {
      const a = dg(s, false);
      if (a && (a === t || a === wt(t) || a === mr(wt(t)))) return s;
    }
    const o = Qa(i[e] || s[e], t) || Qa(i.appContext[e], t);
    return !o && r ? s : o;
  }
}
function Qa(e, t) {
  return e && (e[t] || e[wt(t)] || e[mr(wt(t))]);
}
function dt(e, t, n, r) {
  let i;
  const s = n, o = ie(e);
  if (o || Ne(e)) {
    const a = o && Mn(e);
    let l = false, u = false;
    a && (l = !bt(e), u = sn(e), e = cs(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) i[c] = t(l ? u ? nr(Pt(e[c])) : Pt(e[c]) : e[c], c, void 0, s);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, s);
  } else if (Se(e)) if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, s));
  else {
    const a = Object.keys(e);
    i = new Array(a.length);
    for (let l = 0, u = a.length; l < u; l++) {
      const c = a[l];
      i[l] = t(e[c], c, l, s);
    }
  }
  else i = [];
  return i;
}
function Mh(e, t, n = {}, r, i) {
  if (Ye.ce || Ye.parent && qn(Ye.parent) && Ye.parent.ce) {
    const u = Object.keys(n).length > 0;
    return oe(), ir(ye, null, [M("slot", n, r)], u ? -2 : 64);
  }
  let s = e[t];
  s && s._c && (s._d = false), oe();
  const o = s && tf(s(n)), a = n.key || o && o.key, l = ir(ye, { key: (a && !Tt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "") }, o || [], o && e._ === 1 ? 64 : -2);
  return s && s._c && (s._d = true), l;
}
function tf(e) {
  return e.some((t) => Xr(t) ? !(t.type === tt || t.type === ye && !tf(t.children)) : true) ? e : null;
}
const uo = (e) => e ? _f(e) ? vs(e) : uo(e.parent) : null, Hr = ze(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => uo(e.parent), $root: (e) => uo(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => rf(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Qo(e.update);
}), $nextTick: (e) => e.n || (e.n = mt.bind(e.proxy)), $watch: (e) => hh.bind(e) }), Os = (e, t) => e !== Me && !e.__isScriptSetup && xe(e, t), Th = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: a, appContext: l } = e;
  if (t[0] !== "$") {
    const d = o[t];
    if (d !== void 0) switch (d) {
      case 1:
        return r[t];
      case 2:
        return i[t];
      case 4:
        return n[t];
      case 3:
        return s[t];
    }
    else {
      if (Os(r, t)) return o[t] = 1, r[t];
      if (i !== Me && xe(i, t)) return o[t] = 2, i[t];
      if (xe(s, t)) return o[t] = 3, s[t];
      if (n !== Me && xe(n, t)) return o[t] = 4, n[t];
      fo && (o[t] = 0);
    }
  }
  const u = Hr[t];
  let c, f;
  if (u) return t === "$attrs" && et(e.attrs, "get", ""), u(e);
  if ((c = a.__cssModules) && (c = c[t])) return c;
  if (n !== Me && xe(n, t)) return o[t] = 4, n[t];
  if (f = l.config.globalProperties, xe(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: i, ctx: s } = e;
  return Os(i, t) ? (i[t] = n, true) : r !== Me && xe(r, t) ? (r[t] = n, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o } }, a) {
  let l;
  return !!(n[a] || e !== Me && a[0] !== "$" && xe(e, a) || Os(t, a) || xe(s, a) || xe(r, a) || xe(Hr, a) || xe(i.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function el(e) {
  return ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let fo = true;
function Ph(e) {
  const t = rf(e), n = e.proxy, r = e.ctx;
  fo = false, t.beforeCreate && tl(t.beforeCreate, e, "bc");
  const { data: i, computed: s, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: y, activated: h, deactivated: S, beforeDestroy: v, beforeUnmount: b, destroyed: L, unmounted: _, render: C, renderTracked: x, renderTriggered: T, errorCaptured: w, serverPrefetch: E, expose: I, inheritAttrs: $, components: R, directives: B, filters: X } = t;
  if (u && Ih(u, r, null), o) for (const le in o) {
    const ce = o[le];
    fe(ce) && (r[le] = ce.bind(n));
  }
  if (i) {
    const le = i.call(n, n);
    Se(le) && (e.data = Ke(le));
  }
  if (fo = true, s) for (const le in s) {
    const ce = s[le], Ve = fe(ce) ? ce.bind(n, n) : fe(ce.get) ? ce.get.bind(n, n) : Ut, _e = !fe(ce) && fe(ce.set) ? ce.set.bind(n) : Ut, se = V({ get: Ve, set: _e });
    Object.defineProperty(r, le, { enumerable: true, configurable: true, get: () => se.value, set: (ge) => se.value = ge });
  }
  if (a) for (const le in a) nf(a[le], r, n, le);
  if (l) {
    const le = fe(l) ? l.call(n) : l;
    Reflect.ownKeys(le).forEach((ce) => {
      qe(ce, le[ce]);
    });
  }
  c && tl(c, e, "c");
  function ne(le, ce) {
    ie(ce) ? ce.forEach((Ve) => le(Ve.bind(n))) : ce && le(ce.bind(n));
  }
  if (ne(hs, f), ne(Ot, d), ne(wh, m), ne(ra, y), ne(Qu, h), ne(na, S), ne(xh, w), ne(Ch, x), ne(Sh, T), ne(Lt, b), ne(di, _), ne(_h, E), ie(I)) if (I.length) {
    const le = e.exposed || (e.exposed = {});
    I.forEach((ce) => {
      Object.defineProperty(le, ce, { get: () => n[ce], set: (Ve) => n[ce] = Ve, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Ut && (e.render = C), $ != null && (e.inheritAttrs = $), R && (e.components = R), B && (e.directives = B), E && Ju(e);
}
function Ih(e, t, n = Ut) {
  ie(e) && (e = mo(e));
  for (const r in e) {
    const i = e[r];
    let s;
    Se(i) ? "default" in i ? s = ke(i.from || r, i.default, true) : s = ke(i.from || r) : s = ke(i), He(s) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : t[r] = s;
  }
}
function tl(e, t, n) {
  It(ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function nf(e, t, n, r) {
  let i = r.includes(".") ? zu(n, r) : () => n[r];
  if (Ne(e)) {
    const s = t[e];
    fe(s) && te(i, s);
  } else if (fe(e)) te(i, e.bind(n));
  else if (Se(e)) if (ie(e)) e.forEach((s) => nf(s, t, n, r));
  else {
    const s = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
    fe(s) && te(i, s, e);
  }
}
function rf(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: s, config: { optionMergeStrategies: o } } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach((u) => Wi(l, u, o, true)), Wi(l, t, o)), Se(t) && s.set(t, l), l;
}
function Wi(e, t, n, r = false) {
  const { mixins: i, extends: s } = t;
  s && Wi(e, s, n, true), i && i.forEach((o) => Wi(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const a = Rh[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const Rh = { data: nl, props: rl, emits: rl, methods: Pr, computed: Pr, beforeCreate: st, created: st, beforeMount: st, mounted: st, beforeUpdate: st, updated: st, beforeDestroy: st, beforeUnmount: st, destroyed: st, unmounted: st, activated: st, deactivated: st, errorCaptured: st, serverPrefetch: st, components: Pr, directives: Pr, watch: Vh, provide: nl, inject: Oh };
function nl(e, t) {
  return t ? e ? function() {
    return ze(fe(e) ? e.call(this, this) : e, fe(t) ? t.call(this, this) : t);
  } : t : e;
}
function Oh(e, t) {
  return Pr(mo(e), mo(t));
}
function mo(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pr(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rl(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(/* @__PURE__ */ Object.create(null), el(e), el(t ?? {})) : t;
}
function Vh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = st(e[r], t[r]);
  return n;
}
function sf() {
  return { app: null, config: { isNativeTag: lu, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Dh = 0;
function Hh(e, t) {
  return function(r, i = null) {
    fe(r) || (r = ze({}, r)), i != null && !Se(i) && (i = null);
    const s = sf(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const u = s.app = { _uid: Dh++, _component: r, _props: i, _container: null, _context: s, _instance: null, version: hg, get config() {
      return s.config;
    }, set config(c) {
    }, use(c, ...f) {
      return o.has(c) || (c && fe(c.install) ? (o.add(c), c.install(u, ...f)) : fe(c) && (o.add(c), c(u, ...f))), u;
    }, mixin(c) {
      return s.mixins.includes(c) || s.mixins.push(c), u;
    }, component(c, f) {
      return f ? (s.components[c] = f, u) : s.components[c];
    }, directive(c, f) {
      return f ? (s.directives[c] = f, u) : s.directives[c];
    }, mount(c, f, d) {
      if (!l) {
        const m = u._ceVNode || M(r, i);
        return m.appContext = s, d === true ? d = "svg" : d === false && (d = void 0), e(m, c, d), l = true, u._container = c, c.__vue_app__ = u, vs(m.component);
      }
    }, onUnmount(c) {
      a.push(c);
    }, unmount() {
      l && (It(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, f) {
      return s.provides[c] = f, u;
    }, runWithContext(c) {
      const f = Xn;
      Xn = u;
      try {
        return c();
      } finally {
        Xn = f;
      }
    } };
    return u;
  };
}
let Xn = null;
const Nh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${On(t)}Modifiers`];
function Fh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Me;
  let i = n;
  const s = t.startsWith("update:"), o = s && Nh(r, t.slice(7));
  o && (o.trim && (i = n.map((c) => Ne(c) ? c.trim() : c)), o.number && (i = n.map(Lm)));
  let a, l = r[a = Es(t)] || r[a = Es(wt(t))];
  !l && s && (l = r[a = Es(On(t))]), l && It(l, e, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = true, It(u, e, 6, i);
  }
}
const $h = /* @__PURE__ */ new WeakMap();
function of(e, t, n = false) {
  const r = n ? $h : t.emitsCache, i = r.get(e);
  if (i !== void 0) return i;
  const s = e.emits;
  let o = {}, a = false;
  if (!fe(e)) {
    const l = (u) => {
      const c = of(u, t, true);
      c && (a = true, ze(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Se(e) && r.set(e, null), null) : (ie(s) ? s.forEach((l) => o[l] = null) : ze(o, s), Se(e) && r.set(e, o), o);
}
function gs(e, t) {
  return !e || !ss(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, On(t)) || xe(e, t));
}
function il(e) {
  const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: m, ctx: y, inheritAttrs: h } = e, S = ji(e);
  let v, b;
  try {
    if (n.shapeFlag & 4) {
      const _ = i || r, C = _;
      v = Wt(u.call(C, _, c, f, m, d, y)), b = a;
    } else {
      const _ = t;
      v = Wt(_.length > 1 ? _(f, { attrs: a, slots: o, emit: l }) : _(f, null)), b = t.props ? a : Bh(a);
    }
  } catch (_) {
    Nr.length = 0, fs(_, e, 1), v = M(tt);
  }
  let L = v;
  if (b && h !== false) {
    const _ = Object.keys(b), { shapeFlag: C } = L;
    _.length && C & 7 && (s && _.some(Wo) && (b = jh(b, s)), L = gn(L, b, false, true));
  }
  return n.dirs && (L = gn(L, null, false, true), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && Rn(L, n.transition), v = L, ji(S), v;
}
const Bh = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, jh = (e, t) => {
  const n = {};
  for (const r in e) (!Wo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function zh(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return r ? sl(r, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (af(o, r, d) && !gs(u, d)) return true;
      }
    }
  } else return (i || a) && (!a || !a.$stable) ? true : r === o ? false : r ? o ? sl(r, o, u) : true : !!o;
  return false;
}
function sl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (af(t, e, s) && !gs(n, s)) return true;
  }
  return false;
}
function af(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Se(r) && Se(i) ? !Uo(r, i) : r !== i;
}
function Wh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const lf = {}, cf = () => Object.create(lf), uf = (e) => Object.getPrototypeOf(e) === lf;
function Gh(e, t, n, r = false) {
  const i = {}, s = cf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ff(e, t, i, s);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? e.props = r ? i : Ru(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function Uh(e, t, n, r) {
  const { props: i, attrs: s, vnode: { patchFlag: o } } = e, a = ee(i), [l] = e.propsOptions;
  let u = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (gs(e.emitsOptions, d)) continue;
        const m = t[d];
        if (l) if (xe(s, d)) m !== s[d] && (s[d] = m, u = true);
        else {
          const y = wt(d);
          i[y] = ho(l, a, y, m, e, false);
        }
        else m !== s[d] && (s[d] = m, u = true);
      }
    }
  } else {
    ff(e, t, i, s) && (u = true);
    let c;
    for (const f in a) (!t || !xe(t, f) && ((c = On(f)) === f || !xe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = ho(l, a, f, void 0, e, true)) : delete i[f]);
    if (s !== a) for (const f in s) (!t || !xe(t, f)) && (delete s[f], u = true);
  }
  u && en(e.attrs, "set", "");
}
function ff(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = false, a;
  if (t) for (let l in t) {
    if (Ir(l)) continue;
    const u = t[l];
    let c;
    i && xe(i, c = wt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : gs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = true);
  }
  if (s) {
    const l = ee(n), u = a || Me;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = ho(i, l, f, u[f], e, !xe(u, f));
    }
  }
  return o;
}
function ho(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const a = xe(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && fe(l)) {
        const { propsDefaults: u } = i;
        if (n in u) r = u[n];
        else {
          const c = gi(i);
          r = u[n] = l.call(null, t), c();
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r);
    }
    o[0] && (s && !a ? r = false : o[1] && (r === "" || r === On(n)) && (r = true));
  }
  return r;
}
const Zh = /* @__PURE__ */ new WeakMap();
function df(e, t, n = false) {
  const r = n ? Zh : t.propsCache, i = r.get(e);
  if (i) return i;
  const s = e.props, o = {}, a = [];
  let l = false;
  if (!fe(e)) {
    const c = (f) => {
      l = true;
      const [d, m] = df(f, t, true);
      ze(o, d), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return Se(e) && r.set(e, Zn), Zn;
  if (ie(s)) for (let c = 0; c < s.length; c++) {
    const f = wt(s[c]);
    ol(f) && (o[f] = Me);
  }
  else if (s) for (const c in s) {
    const f = wt(c);
    if (ol(f)) {
      const d = s[c], m = o[f] = ie(d) || fe(d) ? { type: d } : ze({}, d), y = m.type;
      let h = false, S = true;
      if (ie(y)) for (let v = 0; v < y.length; ++v) {
        const b = y[v], L = fe(b) && b.name;
        if (L === "Boolean") {
          h = true;
          break;
        } else L === "String" && (S = false);
      }
      else h = fe(y) && y.name === "Boolean";
      m[0] = h, m[1] = S, (h || xe(m, "default")) && a.push(f);
    }
  }
  const u = [o, a];
  return Se(e) && r.set(e, u), u;
}
function ol(e) {
  return e[0] !== "$" && !Ir(e);
}
const ia = (e) => e === "_" || e === "_ctx" || e === "$stable", sa = (e) => ie(e) ? e.map(Wt) : [Wt(e)], Kh = (e, t, n) => {
  if (t._n) return t;
  const r = De((...i) => sa(t(...i)), n);
  return r._c = false, r;
}, mf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ia(i)) continue;
    const s = e[i];
    if (fe(s)) t[i] = Kh(i, s, r);
    else if (s != null) {
      const o = sa(s);
      t[i] = () => o;
    }
  }
}, hf = (e, t) => {
  const n = sa(t);
  e.slots.default = () => n;
}, gf = (e, t, n) => {
  for (const r in t) (n || !ia(r)) && (e[r] = t[r]);
}, Yh = (e, t, n) => {
  const r = e.slots = cf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gf(r, t, n), n && mu(r, "_", i, true)) : mf(t, r);
  } else t && hf(e, t);
}, qh = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = true, o = Me;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = false : gf(i, t, n) : (s = !t.$stable, mf(t, i)), o = t;
  } else t && (hf(e, t), o = { default: 1 });
  if (s) for (const a in i) !ia(a) && o[a] == null && delete i[a];
}, Je = tg;
function Xh(e) {
  return Jh(e);
}
function Jh(e, t) {
  const n = ls();
  n.__VUE__ = true;
  const { insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m = Ut, insertStaticContent: y } = e, h = (g, p, A, O = null, H = null, D = null, Z = void 0, G = null, z = !!p.dynamicChildren) => {
    if (g === p) return;
    g && !Ln(g, p) && (O = k(g), ge(g, H, D, true), g = null), p.patchFlag === -2 && (z = false, p.dynamicChildren = null);
    const { type: N, ref: re, shapeFlag: K } = p;
    switch (N) {
      case mi:
        S(g, p, A, O);
        break;
      case tt:
        v(g, p, A, O);
        break;
      case Ds:
        g == null && b(p, A, O, Z);
        break;
      case ye:
        R(g, p, A, O, H, D, Z, G, z);
        break;
      default:
        K & 1 ? C(g, p, A, O, H, D, Z, G, z) : K & 6 ? B(g, p, A, O, H, D, Z, G, z) : (K & 64 || K & 128) && N.process(g, p, A, O, H, D, Z, G, z, U);
    }
    re != null && H ? Dr(re, g && g.ref, D, p || g, !p) : re == null && g && g.ref != null && Dr(g.ref, null, D, g, true);
  }, S = (g, p, A, O) => {
    if (g == null) r(p.el = a(p.children), A, O);
    else {
      const H = p.el = g.el;
      p.children !== g.children && u(H, p.children);
    }
  }, v = (g, p, A, O) => {
    g == null ? r(p.el = l(p.children || ""), A, O) : p.el = g.el;
  }, b = (g, p, A, O) => {
    [g.el, g.anchor] = y(g.children, p, A, O, g.el, g.anchor);
  }, L = ({ el: g, anchor: p }, A, O) => {
    let H;
    for (; g && g !== p; ) H = d(g), r(g, A, O), g = H;
    r(p, A, O);
  }, _ = ({ el: g, anchor: p }) => {
    let A;
    for (; g && g !== p; ) A = d(g), i(g), g = A;
    i(p);
  }, C = (g, p, A, O, H, D, Z, G, z) => {
    if (p.type === "svg" ? Z = "svg" : p.type === "math" && (Z = "mathml"), g == null) x(p, A, O, H, D, Z, G, z);
    else {
      const N = g.el && g.el._isVueCE ? g.el : null;
      try {
        N && N._beginPatch(), E(g, p, H, D, Z, G, z);
      } finally {
        N && N._endPatch();
      }
    }
  }, x = (g, p, A, O, H, D, Z, G) => {
    let z, N;
    const { props: re, shapeFlag: K, transition: Q, dirs: de } = g;
    if (z = g.el = o(g.type, D, re && re.is, re), K & 8 ? c(z, g.children) : K & 16 && w(g.children, z, null, O, H, Vs(g, D), Z, G), de && yn(g, null, O, "created"), T(z, g, g.scopeId, Z, O), re) {
      for (const Pe in re) Pe !== "value" && !Ir(Pe) && s(z, Pe, null, re[Pe], D, O);
      "value" in re && s(z, "value", null, re.value, D), (N = re.onVnodeBeforeMount) && $t(N, O, g);
    }
    de && yn(g, null, O, "beforeMount");
    const we = Qh(H, Q);
    we && Q.beforeEnter(z), r(z, p, A), ((N = re && re.onVnodeMounted) || we || de) && Je(() => {
      N && $t(N, O, g), we && Q.enter(z), de && yn(g, null, O, "mounted");
    }, H);
  }, T = (g, p, A, O, H) => {
    if (A && m(g, A), O) for (let D = 0; D < O.length; D++) m(g, O[D]);
    if (H) {
      let D = H.subTree;
      if (p === D || yf(D.type) && (D.ssContent === p || D.ssFallback === p)) {
        const Z = H.vnode;
        T(g, Z, Z.scopeId, Z.slotScopeIds, H.parent);
      }
    }
  }, w = (g, p, A, O, H, D, Z, G, z = 0) => {
    for (let N = z; N < g.length; N++) {
      const re = g[N] = G ? Qt(g[N]) : Wt(g[N]);
      h(null, re, p, A, O, H, D, Z, G);
    }
  }, E = (g, p, A, O, H, D, Z) => {
    const G = p.el = g.el;
    let { patchFlag: z, dynamicChildren: N, dirs: re } = p;
    z |= g.patchFlag & 16;
    const K = g.props || Me, Q = p.props || Me;
    let de;
    if (A && bn(A, false), (de = Q.onVnodeBeforeUpdate) && $t(de, A, p, g), re && yn(p, g, A, "beforeUpdate"), A && bn(A, true), (K.innerHTML && Q.innerHTML == null || K.textContent && Q.textContent == null) && c(G, ""), N ? I(g.dynamicChildren, N, G, A, O, Vs(p, H), D) : Z || ce(g, p, G, null, A, O, Vs(p, H), D, false), z > 0) {
      if (z & 16) $(G, K, Q, A, H);
      else if (z & 2 && K.class !== Q.class && s(G, "class", null, Q.class, H), z & 4 && s(G, "style", K.style, Q.style, H), z & 8) {
        const we = p.dynamicProps;
        for (let Pe = 0; Pe < we.length; Pe++) {
          const Ee = we[Pe], ut = K[Ee], ft = Q[Ee];
          (ft !== ut || Ee === "value") && s(G, Ee, ut, ft, H, A);
        }
      }
      z & 1 && g.children !== p.children && c(G, p.children);
    } else !Z && N == null && $(G, K, Q, A, H);
    ((de = Q.onVnodeUpdated) || re) && Je(() => {
      de && $t(de, A, p, g), re && yn(p, g, A, "updated");
    }, O);
  }, I = (g, p, A, O, H, D, Z) => {
    for (let G = 0; G < p.length; G++) {
      const z = g[G], N = p[G], re = z.el && (z.type === ye || !Ln(z, N) || z.shapeFlag & 198) ? f(z.el) : A;
      h(z, N, re, null, O, H, D, Z, true);
    }
  }, $ = (g, p, A, O, H) => {
    if (p !== A) {
      if (p !== Me) for (const D in p) !Ir(D) && !(D in A) && s(g, D, p[D], null, H, O);
      for (const D in A) {
        if (Ir(D)) continue;
        const Z = A[D], G = p[D];
        Z !== G && D !== "value" && s(g, D, G, Z, H, O);
      }
      "value" in A && s(g, "value", p.value, A.value, H);
    }
  }, R = (g, p, A, O, H, D, Z, G, z) => {
    const N = p.el = g ? g.el : a(""), re = p.anchor = g ? g.anchor : a("");
    let { patchFlag: K, dynamicChildren: Q, slotScopeIds: de } = p;
    de && (G = G ? G.concat(de) : de), g == null ? (r(N, A, O), r(re, A, O), w(p.children || [], A, re, H, D, Z, G, z)) : K > 0 && K & 64 && Q && g.dynamicChildren && g.dynamicChildren.length === Q.length ? (I(g.dynamicChildren, Q, A, H, D, Z, G), (p.key != null || H && p === H.subTree) && oa(g, p, true)) : ce(g, p, A, re, H, D, Z, G, z);
  }, B = (g, p, A, O, H, D, Z, G, z) => {
    p.slotScopeIds = G, g == null ? p.shapeFlag & 512 ? H.ctx.activate(p, A, O, Z, z) : X(p, A, O, H, D, Z, z) : Y(g, p, z);
  }, X = (g, p, A, O, H, D, Z) => {
    const G = g.component = ag(g, O, H);
    if (ds(g) && (G.ctx.renderer = U), lg(G, false, Z), G.asyncDep) {
      if (H && H.registerDep(G, ne, Z), !g.el) {
        const z = G.subTree = M(tt);
        v(null, z, p, A), g.placeholder = z.el;
      }
    } else ne(G, g, p, A, H, D, Z);
  }, Y = (g, p, A) => {
    const O = p.component = g.component;
    if (zh(g, p, A)) if (O.asyncDep && !O.asyncResolved) {
      le(O, p, A);
      return;
    } else O.next = p, O.update();
    else p.el = g.el, O.vnode = p;
  }, ne = (g, p, A, O, H, D, Z) => {
    const G = () => {
      if (g.isMounted) {
        let { next: K, bu: Q, u: de, parent: we, vnode: Pe } = g;
        {
          const Nt = vf(g);
          if (Nt) {
            K && (K.el = Pe.el, le(g, K, Z)), Nt.asyncDep.then(() => {
              Je(() => {
                g.isUnmounted || N();
              }, H);
            });
            return;
          }
        }
        let Ee = K, ut;
        bn(g, false), K ? (K.el = Pe.el, le(g, K, Z)) : K = Pe, Q && ks(Q), (ut = K.props && K.props.onVnodeBeforeUpdate) && $t(ut, we, K, Pe), bn(g, true);
        const ft = il(g), Ht = g.subTree;
        g.subTree = ft, h(Ht, ft, f(Ht.el), k(Ht), g, H, D), K.el = ft.el, Ee === null && Wh(g, ft.el), de && Je(de, H), (ut = K.props && K.props.onVnodeUpdated) && Je(() => $t(ut, we, K, Pe), H);
      } else {
        let K;
        const { el: Q, props: de } = p, { bm: we, m: Pe, parent: Ee, root: ut, type: ft } = g, Ht = qn(p);
        bn(g, false), we && ks(we), !Ht && (K = de && de.onVnodeBeforeMount) && $t(K, Ee, p), bn(g, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Nt = g.subTree = il(g);
          h(null, Nt, A, O, g, H, D), p.el = Nt.el;
        }
        if (Pe && Je(Pe, H), !Ht && (K = de && de.onVnodeMounted)) {
          const Nt = p;
          Je(() => $t(K, Ee, Nt), H);
        }
        (p.shapeFlag & 256 || Ee && qn(Ee.vnode) && Ee.vnode.shapeFlag & 256) && g.a && Je(g.a, H), g.isMounted = true, p = A = O = null;
      }
    };
    g.scope.on();
    const z = g.effect = new bu(G);
    g.scope.off();
    const N = g.update = z.run.bind(z), re = g.job = z.runIfDirty.bind(z);
    re.i = g, re.id = g.uid, z.scheduler = () => Qo(re), bn(g, true), N();
  }, le = (g, p, A) => {
    p.component = g;
    const O = g.vnode.props;
    g.vnode = p, g.next = null, Uh(g, p.props, O, A), qh(g, p.children, A), nn(), Ua(g), rn();
  }, ce = (g, p, A, O, H, D, Z, G, z = false) => {
    const N = g && g.children, re = g ? g.shapeFlag : 0, K = p.children, { patchFlag: Q, shapeFlag: de } = p;
    if (Q > 0) {
      if (Q & 128) {
        _e(N, K, A, O, H, D, Z, G, z);
        return;
      } else if (Q & 256) {
        Ve(N, K, A, O, H, D, Z, G, z);
        return;
      }
    }
    de & 8 ? (re & 16 && $e(N, H, D), K !== N && c(A, K)) : re & 16 ? de & 16 ? _e(N, K, A, O, H, D, Z, G, z) : $e(N, H, D, true) : (re & 8 && c(A, ""), de & 16 && w(K, A, O, H, D, Z, G, z));
  }, Ve = (g, p, A, O, H, D, Z, G, z) => {
    g = g || Zn, p = p || Zn;
    const N = g.length, re = p.length, K = Math.min(N, re);
    let Q;
    for (Q = 0; Q < K; Q++) {
      const de = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      h(g[Q], de, A, null, H, D, Z, G, z);
    }
    N > re ? $e(g, H, D, true, false, K) : w(p, A, O, H, D, Z, G, z, K);
  }, _e = (g, p, A, O, H, D, Z, G, z) => {
    let N = 0;
    const re = p.length;
    let K = g.length - 1, Q = re - 1;
    for (; N <= K && N <= Q; ) {
      const de = g[N], we = p[N] = z ? Qt(p[N]) : Wt(p[N]);
      if (Ln(de, we)) h(de, we, A, null, H, D, Z, G, z);
      else break;
      N++;
    }
    for (; N <= K && N <= Q; ) {
      const de = g[K], we = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      if (Ln(de, we)) h(de, we, A, null, H, D, Z, G, z);
      else break;
      K--, Q--;
    }
    if (N > K) {
      if (N <= Q) {
        const de = Q + 1, we = de < re ? p[de].el : O;
        for (; N <= Q; ) h(null, p[N] = z ? Qt(p[N]) : Wt(p[N]), A, we, H, D, Z, G, z), N++;
      }
    } else if (N > Q) for (; N <= K; ) ge(g[N], H, D, true), N++;
    else {
      const de = N, we = N, Pe = /* @__PURE__ */ new Map();
      for (N = we; N <= Q; N++) {
        const ht = p[N] = z ? Qt(p[N]) : Wt(p[N]);
        ht.key != null && Pe.set(ht.key, N);
      }
      let Ee, ut = 0;
      const ft = Q - we + 1;
      let Ht = false, Nt = 0;
      const Sr = new Array(ft);
      for (N = 0; N < ft; N++) Sr[N] = 0;
      for (N = de; N <= K; N++) {
        const ht = g[N];
        if (ut >= ft) {
          ge(ht, H, D, true);
          continue;
        }
        let Ft;
        if (ht.key != null) Ft = Pe.get(ht.key);
        else for (Ee = we; Ee <= Q; Ee++) if (Sr[Ee - we] === 0 && Ln(ht, p[Ee])) {
          Ft = Ee;
          break;
        }
        Ft === void 0 ? ge(ht, H, D, true) : (Sr[Ft - we] = N + 1, Ft >= Nt ? Nt = Ft : Ht = true, h(ht, p[Ft], A, null, H, D, Z, G, z), ut++);
      }
      const Fa = Ht ? eg(Sr) : Zn;
      for (Ee = Fa.length - 1, N = ft - 1; N >= 0; N--) {
        const ht = we + N, Ft = p[ht], $a = p[ht + 1], Ba = ht + 1 < re ? $a.el || pf($a) : O;
        Sr[N] === 0 ? h(null, Ft, A, Ba, H, D, Z, G, z) : Ht && (Ee < 0 || N !== Fa[Ee] ? se(Ft, A, Ba, 2) : Ee--);
      }
    }
  }, se = (g, p, A, O, H = null) => {
    const { el: D, type: Z, transition: G, children: z, shapeFlag: N } = g;
    if (N & 6) {
      se(g.component.subTree, p, A, O);
      return;
    }
    if (N & 128) {
      g.suspense.move(p, A, O);
      return;
    }
    if (N & 64) {
      Z.move(g, p, A, U);
      return;
    }
    if (Z === ye) {
      r(D, p, A);
      for (let K = 0; K < z.length; K++) se(z[K], p, A, O);
      r(g.anchor, p, A);
      return;
    }
    if (Z === Ds) {
      L(g, p, A);
      return;
    }
    if (O !== 2 && N & 1 && G) if (O === 0) G.beforeEnter(D), r(D, p, A), Je(() => G.enter(D), H);
    else {
      const { leave: K, delayLeave: Q, afterLeave: de } = G, we = () => {
        g.ctx.isUnmounted ? i(D) : r(D, p, A);
      }, Pe = () => {
        D._isLeaving && D[zt](true), K(D, () => {
          we(), de && de();
        });
      };
      Q ? Q(D, we, Pe) : Pe();
    }
    else r(D, p, A);
  }, ge = (g, p, A, O = false, H = false) => {
    const { type: D, props: Z, ref: G, children: z, dynamicChildren: N, shapeFlag: re, patchFlag: K, dirs: Q, cacheIndex: de } = g;
    if (K === -2 && (H = false), G != null && (nn(), Dr(G, null, A, g, true), rn()), de != null && (p.renderCache[de] = void 0), re & 256) {
      p.ctx.deactivate(g);
      return;
    }
    const we = re & 1 && Q, Pe = !qn(g);
    let Ee;
    if (Pe && (Ee = Z && Z.onVnodeBeforeUnmount) && $t(Ee, p, g), re & 6) Ze(g.component, A, O);
    else {
      if (re & 128) {
        g.suspense.unmount(A, O);
        return;
      }
      we && yn(g, null, p, "beforeUnmount"), re & 64 ? g.type.remove(g, p, A, U, O) : N && !N.hasOnce && (D !== ye || K > 0 && K & 64) ? $e(N, p, A, false, true) : (D === ye && K & 384 || !H && re & 16) && $e(z, p, A), O && he(g);
    }
    (Pe && (Ee = Z && Z.onVnodeUnmounted) || we) && Je(() => {
      Ee && $t(Ee, p, g), we && yn(g, null, p, "unmounted");
    }, A);
  }, he = (g) => {
    const { type: p, el: A, anchor: O, transition: H } = g;
    if (p === ye) {
      je(A, O);
      return;
    }
    if (p === Ds) {
      _(g);
      return;
    }
    const D = () => {
      i(A), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (g.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Z, delayLeave: G } = H, z = () => Z(A, D);
      G ? G(g.el, D, z) : z();
    } else D();
  }, je = (g, p) => {
    let A;
    for (; g !== p; ) A = d(g), i(g), g = A;
    i(p);
  }, Ze = (g, p, A) => {
    const { bum: O, scope: H, job: D, subTree: Z, um: G, m: z, a: N } = g;
    al(z), al(N), O && ks(O), H.stop(), D && (D.flags |= 8, ge(Z, g, p, A)), G && Je(G, p), Je(() => {
      g.isUnmounted = true;
    }, p);
  }, $e = (g, p, A, O = false, H = false, D = 0) => {
    for (let Z = D; Z < g.length; Z++) ge(g[Z], p, A, O, H);
  }, k = (g) => {
    if (g.shapeFlag & 6) return k(g.component.subTree);
    if (g.shapeFlag & 128) return g.suspense.next();
    const p = d(g.anchor || g.el), A = p && p[Wu];
    return A ? d(A) : p;
  };
  let j = false;
  const W = (g, p, A) => {
    let O;
    g == null ? p._vnode && (ge(p._vnode, null, null, true), O = p._vnode.component) : h(p._vnode || null, g, p, null, null, null, A), p._vnode = g, j || (j = true, Ua(O), $u(), j = false);
  }, U = { p: h, um: ge, m: se, r: he, mt: X, mc: w, pc: ce, pbc: I, n: k, o: e };
  return { render: W, hydrate: void 0, createApp: Hh(W) };
}
function Vs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oa(e, t, n = false) {
  const r = e.children, i = t.children;
  if (ie(r) && ie(i)) for (let s = 0; s < r.length; s++) {
    const o = r[s];
    let a = i[s];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = Qt(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && oa(o, a)), a.type === mi && (a.patchFlag === -1 && (a = i[s] = Qt(a)), a.el = o.el), a.type === tt && !a.el && (a.el = o.el);
  }
}
function eg(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; ) a = s + o >> 1, e[n[a]] < u ? s = a + 1 : o = a;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; ) n[s] = o, o = t[o];
  return n;
}
function vf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : vf(t);
}
function al(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function pf(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? pf(t.subTree) : null;
}
const yf = (e) => e.__isSuspense;
function tg(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : fh(e);
}
const ye = Symbol.for("v-fgt"), mi = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), Nr = [];
let vt = null;
function oe(e = false) {
  Nr.push(vt = e ? null : []);
}
function ng() {
  Nr.pop(), vt = Nr[Nr.length - 1] || null;
}
let qr = 1;
function Gi(e, t = false) {
  qr += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function bf(e) {
  return e.dynamicChildren = qr > 0 ? vt || Zn : null, ng(), qr > 0 && vt && vt.push(e), e;
}
function me(e, t, n, r, i, s) {
  return bf(P(e, t, n, r, i, s, true));
}
function ir(e, t, n, r, i) {
  return bf(M(e, t, n, r, i, true));
}
function Xr(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wf = ({ key: e }) => e ?? null, Vi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || He(e) || fe(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, r = 0, i = null, s = e === ye ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && wf(t), ref: t && Vi(t), scopeId: ju, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Ye };
  return a ? (aa(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ne(n) ? 8 : 16), qr > 0 && !o && vt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const M = rg;
function rg(e, t = null, n = null, r = 0, i = null, s = false) {
  if ((!e || e === Lh) && (e = tt), Xr(e)) {
    const a = gn(e, t, true);
    return n && aa(a, n), qr > 0 && !s && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
  }
  if (mg(e) && (e = e.__vccOpts), t) {
    t = ig(t);
    let { class: a, style: l } = t;
    a && !Ne(a) && (t.class = Ae(a)), Se(l) && (us(l) && !ie(l) && (l = ze({}, l)), t.style = Re(l));
  }
  const o = Ne(e) ? 1 : yf(e) ? 128 : Gu(e) ? 64 : Se(e) ? 4 : fe(e) ? 2 : 0;
  return P(e, t, n, r, i, o, s, true);
}
function ig(e) {
  return e ? us(e) || uf(e) ? ze({}, e) : e : null;
}
function gn(e, t, n = false, r = false) {
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e, u = t ? Te(i || {}, t) : i, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && wf(u), ref: t && t.ref ? n && s ? ie(s) ? s.concat(Vi(t)) : [s, Vi(t)] : Vi(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && gn(e.ssContent), ssFallback: e.ssFallback && gn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && Rn(c, l.clone(c)), c;
}
function Jr(e = " ", t = 0) {
  return M(mi, null, e, t);
}
function sr(e = "", t = false) {
  return t ? (oe(), ir(tt, null, e)) : M(tt, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean" ? M(tt) : ie(e) ? M(ye, null, e.slice()) : Xr(e) ? Qt(e) : M(mi, null, String(e));
}
function Qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gn(e);
}
function aa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ie(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const i = t.default;
    i && (i._c && (i._d = false), aa(e, i()), i._c && (i._d = true));
    return;
  } else {
    n = 32;
    const i = t._;
    !i && !uf(t) ? t._ctx = Ye : i === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else fe(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Te(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r) if (i === "class") t.class !== r.class && (t.class = Ae([t.class, r.class]));
    else if (i === "style") t.style = Re([t.style, r.style]);
    else if (ss(i)) {
      const s = t[i], o = r[i];
      o && s !== o && !(ie(s) && s.includes(o)) && (t[i] = s ? [].concat(s, o) : o);
    } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function $t(e, t, n, r = null) {
  It(e, t, 7, [n, r]);
}
const sg = sf();
let og = 0;
function ag(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || sg, s = { uid: og++, vnode: e, type: r, parent: t, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new pu(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(i.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: df(r, i), emitsOptions: of(r, i), emit: null, emitted: null, propsDefaults: Me, inheritAttrs: r.inheritAttrs, ctx: Me, data: Me, props: Me, attrs: Me, slots: Me, refs: Me, setupState: Me, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Fh.bind(null, s), e.ce && e.ce(s), s;
}
let nt = null;
const hi = () => nt || Ye;
let Ui, go;
{
  const e = ls(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Ui = t("__VUE_INSTANCE_SETTERS__", (n) => nt = n), go = t("__VUE_SSR_SETTERS__", (n) => Qr = n);
}
const gi = (e) => {
  const t = nt;
  return Ui(e), e.scope.on(), () => {
    e.scope.off(), Ui(t);
  };
}, ll = () => {
  nt && nt.scope.off(), Ui(null);
};
function _f(e) {
  return e.vnode.shapeFlag & 4;
}
let Qr = false;
function lg(e, t = false, n = false) {
  t && go(t);
  const { props: r, children: i } = e.vnode, s = _f(e);
  Gh(e, r, s, t), Yh(e, i, n || t);
  const o = s ? cg(e, t) : void 0;
  return t && go(false), o;
}
function cg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Th);
  const { setup: r } = n;
  if (r) {
    nn();
    const i = e.setupContext = r.length > 1 ? fg(e) : null, s = gi(e), o = fi(r, e, 0, [e.props, i]), a = uu(o);
    if (rn(), s(), (a || e.sp) && !qn(e) && Ju(e), a) {
      if (o.then(ll, ll), t) return o.then((l) => {
        cl(e, l);
      }).catch((l) => {
        fs(l, e, 0);
      });
      e.asyncDep = o;
    } else cl(e, o);
  } else Sf(e);
}
function cl(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Vu(t)), Sf(e);
}
function Sf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ut);
  {
    const i = gi(e);
    nn();
    try {
      Ph(e);
    } finally {
      rn(), i();
    }
  }
}
const ug = { get(e, t) {
  return et(e, "get", ""), e[t];
} };
function fg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, ug), slots: e.slots, emit: e.emit, expose: t };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vu(eh(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Hr) return Hr[n](e);
  }, has(t, n) {
    return n in t || n in Hr;
  } })) : e.proxy;
}
function dg(e, t = true) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mg(e) {
  return fe(e) && "__vccOpts" in e;
}
const V = (e, t) => oh(e, t, Qr);
function vn(e, t, n) {
  try {
    Gi(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !ie(t) ? Xr(t) ? M(e, null, [t]) : M(e, t) : M(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Xr(n) && (n = [n]), M(e, t, n));
  } finally {
    Gi(1);
  }
}
const hg = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vo;
const ul = typeof window < "u" && window.trustedTypes;
if (ul) try {
  vo = ul.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Cf = vo ? (e) => vo.createHTML(e) : (e) => e, gg = "http://www.w3.org/2000/svg", vg = "http://www.w3.org/1998/Math/MathML", Jt = typeof document < "u" ? document : null, fl = Jt && Jt.createElement("template"), pg = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const i = t === "svg" ? Jt.createElementNS(gg, e) : t === "mathml" ? Jt.createElementNS(vg, e) : n ? Jt.createElement(e, { is: n }) : Jt.createElement(e);
  return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
}, createText: (e) => Jt.createTextNode(e), createComment: (e) => Jt.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Jt.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, i, s) {
  const o = n ? n.previousSibling : t.lastChild;
  if (i && (i === s || i.nextSibling)) for (; t.insertBefore(i.cloneNode(true), n), !(i === s || !(i = i.nextSibling)); ) ;
  else {
    fl.innerHTML = Cf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const a = fl.content;
    if (r === "svg" || r === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    t.insertBefore(a, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ln = "transition", Ar = "animation", or = Symbol("_vtc"), xf = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Af = ze({}, Ku, xf), yg = (e) => (e.displayName = "Transition", e.props = Af, e), ar = yg((e, { slots: t }) => vn(yh, Lf(e), t)), wn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, dl = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Lf(e) {
  const t = {};
  for (const R in e) R in xf || (t[R] = e[R]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: i, enterFromClass: s = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, y = bg(i), h = y && y[0], S = y && y[1], { onBeforeEnter: v, onEnter: b, onEnterCancelled: L, onLeave: _, onLeaveCancelled: C, onBeforeAppear: x = v, onAppear: T = b, onAppearCancelled: w = L } = t, E = (R, B, X, Y) => {
    R._enterCancelled = Y, un(R, B ? c : a), un(R, B ? u : o), X && X();
  }, I = (R, B) => {
    R._isLeaving = false, un(R, f), un(R, m), un(R, d), B && B();
  }, $ = (R) => (B, X) => {
    const Y = R ? T : b, ne = () => E(B, R, X);
    wn(Y, [B, ne]), ml(() => {
      un(B, R ? l : s), Bt(B, R ? c : a), dl(Y) || hl(B, r, h, ne);
    });
  };
  return ze(t, { onBeforeEnter(R) {
    wn(v, [R]), Bt(R, s), Bt(R, o);
  }, onBeforeAppear(R) {
    wn(x, [R]), Bt(R, l), Bt(R, u);
  }, onEnter: $(false), onAppear: $(true), onLeave(R, B) {
    R._isLeaving = true;
    const X = () => I(R, B);
    Bt(R, f), R._enterCancelled ? (Bt(R, d), po(R)) : (po(R), Bt(R, d)), ml(() => {
      R._isLeaving && (un(R, f), Bt(R, m), dl(_) || hl(R, r, S, X));
    }), wn(_, [R, X]);
  }, onEnterCancelled(R) {
    E(R, false, void 0, true), wn(L, [R]);
  }, onAppearCancelled(R) {
    E(R, true, void 0, true), wn(w, [R]);
  }, onLeaveCancelled(R) {
    I(R), wn(C, [R]);
  } });
}
function bg(e) {
  if (e == null) return null;
  if (Se(e)) return [Hs(e.enter), Hs(e.leave)];
  {
    const t = Hs(e);
    return [t, t];
  }
}
function Hs(e) {
  return Em(e);
}
function Bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[or] || (e[or] = /* @__PURE__ */ new Set())).add(t);
}
function un(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[or];
  n && (n.delete(t), n.size || (e[or] = void 0));
}
function ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wg = 0;
function hl(e, t, n, r) {
  const i = e._endId = ++wg, s = () => {
    i === e._endId && r();
  };
  if (n != null) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = Ef(e, t);
  if (!o) return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), s();
  }, d = (m) => {
    m.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, d);
}
function Ef(e, t) {
  const n = window.getComputedStyle(e), r = (y) => (n[y] || "").split(", "), i = r(`${ln}Delay`), s = r(`${ln}Duration`), o = gl(i, s), a = r(`${Ar}Delay`), l = r(`${Ar}Duration`), u = gl(a, l);
  let c = null, f = 0, d = 0;
  t === ln ? o > 0 && (c = ln, f = o, d = s.length) : t === Ar ? u > 0 && (c = Ar, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? ln : Ar : null, d = c ? c === ln ? s.length : l.length : 0);
  const m = c === ln && /\b(?:transform|all)(?:,|$)/.test(r(`${ln}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: m };
}
function gl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => vl(n) + vl(e[r])));
}
function vl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function po(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function _g(e, t, n) {
  const r = e[or];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = Symbol("_vod"), kf = Symbol("_vsh"), la = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Lr(e, true), r.enter(e)) : r.leave(e, () => {
    Lr(e, false);
  }) : Lr(e, t));
}, beforeUnmount(e, { value: t }) {
  Lr(e, t);
} };
function Lr(e, t) {
  e.style.display = t ? e[Zi] : "none", e[kf] = !t;
}
const Sg = Symbol(""), Cg = /(?:^|;)\s*display\s*:/;
function xg(e, t, n) {
  const r = e.style, i = Ne(n);
  let s = false;
  if (n && !i) {
    if (t) if (Ne(t)) for (const o of t.split(";")) {
      const a = o.slice(0, o.indexOf(":")).trim();
      n[a] == null && Di(r, a, "");
    }
    else for (const o in t) n[o] == null && Di(r, o, "");
    for (const o in n) o === "display" && (s = true), Di(r, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = r[Sg];
      o && (n += ";" + o), r.cssText = n, s = Cg.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = s ? r.display : "", e[kf] && (r.display = "none"));
}
const pl = /\s*!important$/;
function Di(e, t, n) {
  if (ie(n)) n.forEach((r) => Di(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Ag(e, t);
    pl.test(n) ? e.setProperty(On(r), n.replace(pl, ""), "important") : e[r] = n;
  }
}
const yl = ["Webkit", "Moz", "ms"], Ns = {};
function Ag(e, t) {
  const n = Ns[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return Ns[t] = r;
  r = mr(r);
  for (let i = 0; i < yl.length; i++) {
    const s = yl[i] + r;
    if (s in e) return Ns[t] = s;
  }
  return t;
}
const bl = "http://www.w3.org/1999/xlink";
function wl(e, t, n, r, i, s = Rm(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bl, t.slice(6, t.length)) : e.setAttributeNS(bl, t, n) : n == null || s && !hu(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Tt(n) ? String(n) : n);
}
function _l(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Cf(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = hu(n) : n == null && a === "string" ? (n = "", o = true) : a === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Lg(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Eg(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Sl = Symbol("_vei");
function kg(e, t, n, r, i = null) {
  const s = e[Sl] || (e[Sl] = {}), o = s[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = Mg(t);
    if (r) {
      const u = s[t] = Ig(r, i);
      Lg(e, a, u, l);
    } else o && (Eg(e, a, o, l), s[t] = void 0);
  }
}
const Cl = /(?:Once|Passive|Capture)$/;
function Mg(e) {
  let t;
  if (Cl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Cl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : On(e.slice(2)), t];
}
let Fs = 0;
const Tg = Promise.resolve(), Pg = () => Fs || (Tg.then(() => Fs = 0), Fs = Date.now());
function Ig(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    It(Rg(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Pg(), n;
}
function Rg(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (i) => !i._stopped && r && r(i));
  } else return t;
}
const xl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Og = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? _g(e, r, o) : t === "style" ? xg(e, n, r) : ss(t) ? Wo(t) || kg(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Vg(e, t, r, o)) ? (_l(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wl(e, t, r, o, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ne(r)) ? _l(e, wt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), wl(e, t, r, o));
};
function Vg(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && xl(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return false;
  }
  return xl(t) && Ne(n) ? false : t in e;
}
const Mf = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Ki = Symbol("_moveCb"), Al = Symbol("_enterCb"), Dg = (e) => (delete e.props.mode, e), Hg = Dg({ name: "TransitionGroup", props: ze({}, Af, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = hi(), r = Zu();
  let i, s;
  return ra(() => {
    if (!i.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Bg(i[0].el, n.vnode.el, o)) {
      i = [];
      return;
    }
    i.forEach(Ng), i.forEach(Fg);
    const a = i.filter($g);
    po(n.vnode.el), a.forEach((l) => {
      const u = l.el, c = u.style;
      Bt(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = u[Ki] = (d) => {
        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ki] = null, un(u, o));
      };
      u.addEventListener("transitionend", f);
    }), i = [];
  }), () => {
    const o = ee(e), a = Lf(o);
    let l = o.tag || ye;
    if (i = [], s) for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.el && c.el instanceof Element && (i.push(c), Rn(c, Yr(c, a, r, n)), Mf.set(c, Pf(c.el)));
    }
    s = t.default ? ta(t.default()) : [];
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.key != null && Rn(c, Yr(c, a, r, n));
    }
    return M(l, null, s);
  };
} }), ca = Hg;
function Ng(e) {
  const t = e.el;
  t[Ki] && t[Ki](), t[Al] && t[Al]();
}
function Fg(e) {
  Tf.set(e, Pf(e.el));
}
function $g(e) {
  const t = Mf.get(e), n = Tf.get(e), r = t.left - n.left, i = t.top - n.top;
  if (r || i) {
    const s = e.el, o = s.style, a = s.getBoundingClientRect();
    let l = 1, u = 1;
    return s.offsetWidth && (l = a.width / s.offsetWidth), s.offsetHeight && (u = a.height / s.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${r / l}px,${i / u}px)`, o.transitionDuration = "0s", e;
  }
}
function Pf(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Bg(e, t, n) {
  const r = e.cloneNode(), i = e[or];
  i && i.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = Ef(r);
  return s.removeChild(r), o;
}
const jg = ze({ patchProp: Og }, pg);
let Ll;
function zg() {
  return Ll || (Ll = Xh(jg));
}
const Wg = ((...e) => {
  const t = zg().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Ug(r);
    if (!i) return;
    const s = t._component;
    !fe(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, false, Gg(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Gg(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ug(e) {
  return Ne(e) ? document.querySelector(e) : e;
}
const El = () => {
};
function ua(e) {
  const t = `[${e}]`;
  return { debug: El, info: El, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const kl = 5;
function Zg(e, t, n) {
  const r = t * n, i = Math.max(1, Math.round(e / (r * kl)));
  return e / (i * kl);
}
function If(e, t, n) {
  const r = e * n.dpr, i = t * n.dpr, s = r + n.offsetX, o = i + n.offsetY, a = Math.floor(s / n.gridPitch), l = Math.floor(o / n.gridPitch);
  return { cx: a, cy: l };
}
function Kg(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, r = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: r };
}
function Yg(e, t, n) {
  return { cssX: (e * n.gridPitch - n.offsetX) / n.dpr, cssY: (t * n.gridPitch - n.offsetY) / n.dpr };
}
function qg(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Rf = 1, Xg = `gol.gridBlankZones.v${Rf}`, Jg = 128;
function Qg(e, t, n, r) {
  if (!Array.isArray(e)) return [];
  const i = r ?? Date.now(), s = [];
  for (const o of e) {
    if (s.length >= n) break;
    const a = t(o, i);
    a && s.push(a);
  }
  return s;
}
const ev = /* @__PURE__ */ new Set(["minor", "major", "both"]), tv = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function $s(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Wn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function nv() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function rv(e) {
  return typeof e == "string" && ev.has(e) ? e : "both";
}
function iv(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && tv.has(t.style) ? t.style : "none", r = $s(Wn(t.widthCells) ?? 1, 1, 4), i = typeof t.opacity == "number" ? t.opacity : 1, s = $s(i, 0, 1), o = { style: n, widthCells: r, opacity: s };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    o.fadeStrength = $s(a, 0, 1);
  }
  return n === "noted" && (o.notePitchCells = Math.max(1, Wn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), o;
}
function sv(e) {
  return typeof e == "boolean" ? e : true;
}
function Ml(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Of(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = Wn(n.x1), i = Wn(n.y1), s = Wn(n.x2), o = Wn(n.y2);
  if (r === null || i === null || s === null || o === null) return null;
  const a = Math.min(r, s), l = Math.max(r, s), u = Math.min(i, o), c = Math.max(i, o);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : nv(), x1: a, y1: u, x2: l, y2: c, mode: rv(n.mode), edge: iv(n.edge), enabled: sv(n.enabled), createdAt: Ml(n.createdAt, t), updatedAt: Ml(n.updatedAt, t) };
}
function Vf(e, t = Date.now()) {
  return Qg(e, Of, Jg, t);
}
function Bs() {
  return typeof localStorage < "u";
}
function ov(e) {
  return { load() {
    if (!Bs()) return [];
    try {
      const t = localStorage.getItem(e.key);
      if (!t) return [];
      let n = JSON.parse(t);
      const r = n.version;
      return typeof r != "number" || r > e.version ? [] : (e.migrate && r < e.version && (n = e.migrate(n)), e.normalize(n[e.itemsKey]));
    } catch {
      return [];
    }
  }, save(t) {
    if (!Bs()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    Bs() && localStorage.removeItem(e.key);
  } };
}
const fa = ov({ key: Xg, version: Rf, normalize: Vf, itemsKey: "zones" }), av = fa.load, lv = fa.save, cv = fa.clear;
function uv(e) {
  const t = q(e.storage.load());
  function n(u) {
    const c = e.normalize(u);
    return t.value = c, e.storage.save(c), c;
  }
  function r(u) {
    var _a2;
    const c = n(u);
    (_a2 = e.onSet) == null ? void 0 : _a2.call(e, c);
  }
  function i(u) {
    var _a2;
    const c = e.normalizeOne(u);
    c && (n([...t.value.filter((f) => f.id !== c.id), c]), (_a2 = e.onAdd) == null ? void 0 : _a2.call(e, c));
  }
  function s(u) {
    var _a2;
    const c = e.normalizeOne(u);
    if (!c || !t.value.some((d) => d.id === c.id)) return;
    const f = t.value.map((d) => d.id === c.id ? c : d);
    n(f), (_a2 = e.onUpdate) == null ? void 0 : _a2.call(e, c);
  }
  function o(u) {
    var _a2;
    t.value.some((c) => c.id === u) && (n(t.value.filter((c) => c.id !== u)), (_a2 = e.onRemove) == null ? void 0 : _a2.call(e, u));
  }
  function a() {
    var _a2;
    t.value.length !== 0 && (t.value = [], e.storage.clear(), (_a2 = e.onClear) == null ? void 0 : _a2.call(e));
  }
  function l(u) {
    n(u);
  }
  return { items: t, setItems: r, addItem: i, updateItem: s, removeItem: o, clearItems: a, syncFromWorker: l };
}
function fv(e = {}) {
  const { items: t, setItems: n, addItem: r, updateItem: i, removeItem: s, clearItems: o, syncFromWorker: a } = uv({ storage: { load: av, save: lv, clear: cv }, normalize: Vf, normalizeOne: Of, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: r, updateZone: i, removeZone: s, clearZones: o, syncFromWorker: a };
}
const Tl = ua("WorkerBridge");
function dv() {
  let e = null;
  const t = q(null), n = /* @__PURE__ */ new Map();
  function r(l, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(l, u) : e.postMessage(l);
    } catch (c) {
      Tl.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
    }
  }
  function i(l, u) {
    return n.has(l) || n.set(l, /* @__PURE__ */ new Set()), n.get(l).add(u), () => {
      var _a2;
      return (_a2 = n.get(l)) == null ? void 0 : _a2.delete(u);
    };
  }
  function s(l) {
    (l.type === "ready" || l.type === "grid_info") && (t.value = l.gridInfo);
    const u = n.get(l.type);
    if (u) for (const c of u) c(l);
  }
  function o(l, u, c) {
    const f = new Worker(new URL("/assets/backgroundRenderer-BxoC6poI.js", import.meta.url), { type: "module" });
    f.onmessage = (d) => s(d.data), f.onerror = (d) => {
      Tl.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = f, r({ type: "init", canvas: l, cellPx: u, theme: c }, [l]);
  }
  function a() {
    r({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: r, on: i, init: o, terminate: a };
}
const js = 5, mv = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), hv = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function gv(e, t) {
  function n() {
    const l = e.value;
    return !l || l.gridPitch === 0 ? null : { gridPitch: l.gridPitch, offsetX: t.value.x, offsetY: t.value.y, dpr: devicePixelRatio, worldCols: l.worldCols, worldRows: l.worldRows };
  }
  function r(l, u) {
    return (l % u.worldCols + u.worldCols) % u.worldCols;
  }
  function i(l) {
    const u = n();
    if (!u) return null;
    const c = If(l.clientX, l.clientY, u);
    return { cx: r(c.cx, u), cy: c.cy };
  }
  function s(l, u) {
    return { x1: Math.min(l.cx, u.cx), y1: Math.min(l.cy, u.cy), x2: Math.max(l.cx, u.cx), y2: Math.max(l.cy, u.cy) };
  }
  function o(l, u) {
    const c = (d) => Math.floor(d / js) * js, f = (d) => c(d) + (js - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(l.x1))), y1: c(l.y1), x2: Math.max(0, Math.min(u.worldCols - 1, f(l.x2))), y2: f(l.y2) };
  }
  function a(l) {
    if (!(l instanceof HTMLElement)) return false;
    if (l.closest(hv)) return true;
    let u = l;
    for (; u; ) {
      if (mv.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: i, cellToScreen: Yg, cellSpanToCssPx: qg, normalizeRect: s, snapRectToMajor: o, isInteractiveTarget: a, wrapXToWorld: r };
}
function vv() {
  let e = 0;
  function t(r) {
    function i() {
      r(), e = requestAnimationFrame(i);
    }
    e = requestAnimationFrame(i);
  }
  function n() {
    e && (cancelAnimationFrame(e), e = 0);
  }
  return { start: t, stop: n };
}
function pv(e) {
  const t = /* @__PURE__ */ new Map(), n = q(null), r = q(null), i = q(null);
  let s = null, o = null;
  function a(S, v) {
    t.set(S, v);
  }
  function l() {
    for (const S of t.values()) if (S.isEnabled()) return true;
    return false;
  }
  function u() {
    const S = r.value, v = e.makeSnapshot();
    if (!S || !v) {
      i.value = null;
      return;
    }
    const b = e.cellToScreen(S.x1, S.y1, v), L = e.cellSpanToCssPx(S.x2 - S.x1 + 1, v), _ = e.cellSpanToCssPx(S.y2 - S.y1 + 1, v);
    i.value = { left: `${b.cssX}px`, top: `${b.cssY}px`, width: `${L}px`, height: `${_}px` };
  }
  function c() {
    s = null, n.value = null, o = null, r.value = null, i.value = null;
  }
  function f(S) {
    n.value === S && c();
  }
  function d(S) {
    if (S.button !== 0 || e.isInteractiveTarget(S.target)) return;
    let v = null;
    for (const _ of t.entries()) _[1].isEnabled() && (!v || _[1].priority > v[1].priority) && (v = _);
    if (!v) return;
    const b = e.pointerToCell(S);
    if (!b) return;
    n.value = v[0], s = b;
    const L = { x1: b.cx, y1: b.cy, x2: b.cx, y2: b.cy };
    v[1].dragMode === "paint" && (o = { ...L }), r.value = L, u(), S.target instanceof Element && S.target.setPointerCapture(S.pointerId), S.preventDefault();
  }
  function m(S) {
    var _a2;
    if (!n.value || !s) return;
    const v = t.get(n.value);
    if (!v) return;
    const b = e.pointerToCell(S), L = e.makeSnapshot();
    if (!(!b || !L)) {
      if (v.dragMode === "paint" && o) o.x1 = Math.min(o.x1, b.cx), o.y1 = Math.min(o.y1, b.cy), o.x2 = Math.max(o.x2, b.cx), o.y2 = Math.max(o.y2, b.cy), r.value = { ...o };
      else {
        const _ = e.normalizeRect(s, b);
        r.value = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) ? e.snapRectToMajor(_, L) : _;
      }
      u();
    }
  }
  function y(S) {
    var _a2;
    if (!n.value || !s || S.button !== 0) return;
    S.target instanceof Element && S.target.hasPointerCapture(S.pointerId) && S.target.releasePointerCapture(S.pointerId);
    const v = t.get(n.value);
    if (!v) {
      c();
      return;
    }
    const b = e.pointerToCell(S), L = e.makeSnapshot();
    let _;
    if (v.dragMode === "paint" && o) b && (o.x1 = Math.min(o.x1, b.cx), o.y1 = Math.min(o.y1, b.cy), o.x2 = Math.max(o.x2, b.cx), o.y2 = Math.max(o.y2, b.cy)), _ = o;
    else if (b) {
      const x = e.normalizeRect(s, b);
      _ = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) && L ? e.snapRectToMajor(x, L) : x;
    } else {
      c();
      return;
    }
    v.onCommit(_, L) === false || c();
  }
  function h() {
    return document.addEventListener("pointerdown", d), document.addEventListener("pointermove", m), document.addEventListener("pointerup", y), () => {
      document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", y);
    };
  }
  return { register: a, activeTool: n, previewRect: r, previewStyle: i, cancelActiveDrag: f, anyToolEnabled: l, attachListeners: h };
}
const Pl = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Il = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function _n(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Et([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function zs([e, t, n], r = 1, i = 1) {
  const s = t * r;
  return i === 1 ? `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)} / ${i.toFixed(3)})`;
}
const Df = "theme-preference";
function yv() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem(Df);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const ei = q(yv()), Hf = q(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Hf.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
te(ei, (e) => {
  var _a2;
  typeof window < "u" && ((_a2 = window.localStorage) == null ? void 0 : _a2.setItem(Df, e));
});
const yo = V(() => ei.value === "light" ? Pl : ei.value === "dark" || Hf.value ? Il : Pl);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (s, o) => {
      n.style.setProperty(s, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Et(t.surface)), r("--theme-ink", Et(t.ink)), r("--theme-ink-secondary", Et(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Et(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Et(t.ink)), r("--theme-text-secondary", Et(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Et(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Et(_n(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Et(_n(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Et(_n(t.surface, t.ink, t.border_t))), r("--theme-accent", zs(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", zs(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", zs(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const i = document.querySelector('meta[name="theme-color"]');
    i && i.setAttribute("content", Et(t.surface));
  };
  e(yo.value), te(yo, e);
}
function Nf() {
  return { preference: ei, theme: yo, setPreference(e) {
    ei.value = e;
  } };
}
const bv = 5, wv = 16, _v = 2160;
function Sv(e) {
  let t = null, n = 0, r = 0, i = null, s = null, o = 0, a = null, l = null, u = false, c = false;
  function f(E) {
    const I = E.getBoundingClientRect();
    return { width: Math.max(1, Math.round(I.width * devicePixelRatio)), height: Math.max(1, Math.round(I.height * devicePixelRatio)) };
  }
  function d(E) {
    var _a2, _b2;
    const I = (_b2 = (_a2 = E.devicePixelContentBoxSize) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.inlineSize;
    return typeof I == "number" && I > 0 ? I : Math.max(1, Math.round(E.contentRect.width * devicePixelRatio));
  }
  function m(E) {
    const I = Math.round(screen.height * devicePixelRatio);
    return Math.max(E, I, _v);
  }
  function y() {
    const E = document.createElement("div");
    E.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(E);
    const I = E.getBoundingClientRect().width;
    return E.remove(), Math.abs(I - 100) > 0.1;
  }
  function h(E) {
    return Zg(E, wv, devicePixelRatio);
  }
  function S(E, I, $) {
    const R = I / devicePixelRatio, B = $ / devicePixelRatio;
    let X = R, Y = B;
    if (u) {
      const ne = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      ne > 0 && ne !== 1 && (X = R / ne, Y = B / ne);
    }
    E.style.width = `${X.toFixed(2)}px`, E.style.height = `${Y.toFixed(2)}px`;
  }
  function v(E) {
    E.classList.add("app-bg--hidden"), s !== null && clearTimeout(s), s = window.setTimeout(() => {
      s = null, E.classList.remove("app-bg--hidden");
    }, 120);
  }
  function b(E) {
    const I = h(E);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * I * bv / devicePixelRatio).toFixed(1)}px`);
  }
  function L(E, I) {
    n = I, S(E, n, r), v(E), b(n), e({ type: "resize", width: n, height: r });
  }
  function _(E) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(o === 0 || o === n) && L(E, o);
    }));
  }
  function C(E) {
    let I = false;
    const $ = () => {
      if (I) return;
      const R = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), B = () => {
        I || (E(), $());
      };
      R.addEventListener("change", B, { once: true });
    };
    return $(), () => {
      I = true;
    };
  }
  function x(E, I) {
    t = I, u = y();
    const $ = f(E);
    n = $.width, r = m($.height), I.width = n, I.height = r, S(I, n, r);
    const R = I.transferControlToOffscreen(), B = h(n);
    return b(n), i = new ResizeObserver(([X]) => {
      if (!t) return;
      const Y = d(X);
      Y <= 0 || Y === n || (o = Y, _(t));
    }), i.observe(E), l = C(() => {
      if (!t) return;
      u = y();
      const X = Math.round(E.getBoundingClientRect().height * devicePixelRatio);
      r = m(X), L(t, n);
    }), { offscreen: R, gridPitch: B };
  }
  function T() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      c || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 1100));
  }
  function w() {
    c = true, i == null ? void 0 : i.disconnect(), l == null ? void 0 : l(), s !== null && (clearTimeout(s), s = null), a !== null && (cancelAnimationFrame(a), a = null), t = null;
  }
  return { initialize: x, revealCanvas: T, teardown: w };
}
const Cv = ua("AppBackground");
function xv(e) {
  e.on("startup_breakdown", (t) => {
    const n = (s) => `${s.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], i = t.phases.newOffscreenPhases;
    i && (r.push("  new_offscreen sub-phases:"), r.push(`    device_request   ${n(i.deviceRequest)}`), r.push(`    panel_init       ${n(i.panelInit)}`), r.push(`    seeding          ${n(i.seeding)}`), r.push(`    simulation_init  ${n(i.simulationInit)}`), r.push(`    renderer_init    ${n(i.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (i) => i === null ? "\u2014" : `${i.toFixed(2)}ms`, r = t.durations;
    Cv.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(r.computeTickMs)}
  xor_edit       ${n(r.xorEditMs)}
  or_edit        ${n(r.orEditMs)}
  render_pass    ${n(r.renderPassMs)}`);
  });
}
var Av = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z", Lv = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Ff = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", Ev = "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M13 13C13 14.1 12.1 15 11 15S9 14.1 9 13 9.9 11 11 11 13 11.9 13 13M15 18V19H7V18C7 16.67 9.67 16 11 16S15 16.67 15 18Z", kv = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", $f = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", Mv = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", Tv = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", Bf = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", Pv = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", Iv = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Rl = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", Rv = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Ol = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", Ov = "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z", Vl = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Dl = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const vi = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0, icon: Mv }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0, icon: Ov }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0, icon: Ev }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1, icon: Ff }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1, icon: Av }], ps = vi[0], jf = new Map(vi.map((e) => [e.id, e]));
new Map(vi.map((e) => [e.route, e]));
function ys(e) {
  return jf.get(e) ?? ps;
}
function Vv(e) {
  return typeof e == "string" && jf.has(e) ? e : ps.id;
}
function Dv(e, t) {
  return Math.min(e.w, t);
}
function Hl(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function Hv(e, t) {
  const n = t.zoom, r = Dv(e, t.panelMaxWidth), i = t.panelHeight ?? e.h;
  return { col: Hl(e.w, r, n, t.gutterX), row: Hl(e.h, i, n, t.gutterY) };
}
function pi(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function zf(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function Nv(e, t, n, r) {
  const i = zf(e, t, n), s = Math.hypot(i.x - n.w / 2, i.y - n.h / 2), o = Math.min(1, s / Math.max(r.radius, 1e-6)), a = o * o * (3 - 2 * o);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Fv = 1200, Nl = 0.55, $v = 0.7, Bv = 0.7, Fl = 0.5, jv = 22, zv = 30, $l = 40, Wv = 240, Gv = 0.14, Uv = 0.7, Zv = 6, Kv = 84, Ws = 18, Yv = 0.01;
function qv(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function Xv(e, t, n = Yv) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function Jv(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function Qv(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const e1 = 0.18, t1 = 1;
function Wf(e) {
  return Hv(e, { panelMaxWidth: Fv, gutterX: Nl * e.w, gutterY: Nl * e.h, zoom: 1 });
}
const yi = q({ w: 1, h: 1 });
function Gf() {
  const e = ys(ps.id), t = pi(e, Wf(yi.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const xt = q(Gf()), Jn = q(Gf()), bs = q(false), da = q(ps.id), ma = q(0), Uf = q(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    Uf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ha = V(() => Wf(yi.value));
let Tn = 0;
function Zf() {
  if (xt.value = qv(xt.value, Jn.value, e1), Xv(xt.value, Jn.value)) {
    xt.value = { ...Jn.value }, bs.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(Zf);
}
function n1() {
  Tn === 0 && (bs.value = true, Tn = requestAnimationFrame(Zf));
}
function r1() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), bs.value = false;
}
function ga(e, t, n) {
  r1();
  const r = n ?? xt.value.zoom;
  xt.value = { x: e, y: t, zoom: r }, Jn.value = { x: e, y: t, zoom: r };
}
function Kf(e, t, n = {}) {
  const r = n.zoom ?? Jn.value.zoom;
  if (Jn.value = { x: e, y: t, zoom: r }, n.snap || Uf.value) {
    ga(e, t, r);
    return;
  }
  n1();
}
function i1(e, t = {}) {
  da.value = e, ma.value = 0;
  const n = ys(e), r = pi(n, ha.value);
  Kf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function s1() {
  da.value = null;
}
function o1(e, t) {
  yi.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function a1(e) {
  ma.value = Math.max(0, e);
}
te(ha, (e) => {
  const t = da.value;
  if (t === null) return;
  const n = ys(t), r = pi(n, e);
  ga(r.x, r.y, n.zoom ?? xt.value.zoom);
});
const l1 = V(() => ({ transform: Jv(xt.value, yi.value) })), c1 = V(() => Qv({ x: xt.value.x, y: xt.value.y + ma.value, zoom: xt.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, t1));
function gr() {
  return { camera: xt, isAnimating: bs, viewport: yi, spacing: ha, cameraStyle: l1, worldOffsetDevicePx: c1, panTo: Kf, panToWaypoint: i1, snapTo: ga, releaseAnchor: s1, setViewport: o1, setCaptureScroll: a1 };
}
const Bl = 0.1;
function u1(e) {
  const { worldOffsetDevicePx: t } = gr();
  let n = Number.NaN, r = Number.NaN;
  te(t, ({ x: i, y: s }) => {
    Math.abs(i - n) < Bl && Math.abs(s - r) < Bl || (n = i, r = s, e.post({ type: "camera", x: i, y: s }));
  });
}
function Yf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Oe = typeof window < "u", va = Oe && "IntersectionObserver" in window, f1 = Oe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), qf = Oe && "matchMedia" in window && typeof window.matchMedia == "function", Yi = () => qf && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function jl(e, t, n) {
  d1(e, t), t.set(e, n);
}
function d1(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function zl(e, t, n) {
  return e.set(Xf(e, t), n), n;
}
function qt(e, t) {
  return e.get(Xf(e, t));
}
function Xf(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Jf(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let i = 0; i < r; i++) {
    if (e == null) return n;
    e = e[t[i]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function bo(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Jf(e, t.split("."), n));
}
function Er(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const i = t(e, n);
    return typeof i > "u" ? n : i;
  }
  if (typeof t == "string") return bo(e, t, n);
  if (Array.isArray(t)) return Jf(e, t, n);
  if (typeof t != "function") return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}
function Qf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, r) => t + r);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function wo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Wl(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function m1(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function Gs(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function h1(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Vn(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const g1 = /^on[^a-z]/, ed = (e) => g1.test(e);
function pa(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ti(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Gl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Ul(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function v1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; ) n.push(e.substr(r, t)), r += t;
  return n;
}
function pt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const i in e) r[i] = e[i];
  for (const i in t) {
    const s = e[i], o = t[i];
    if (Wl(s) && Wl(o)) {
      r[i] = pt(s, o, n);
      continue;
    }
    if (n && Array.isArray(s) && Array.isArray(o)) {
      r[i] = n(s, o);
      continue;
    }
    r[i] = o;
  }
  return r;
}
function td(e) {
  return e.map((t) => t.type === ye ? td(t.children) : t).flat();
}
function Pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Pn.cache.has(e)) return Pn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Pn.cache.set(e, t), t;
}
Pn.cache = /* @__PURE__ */ new Map();
function Gn(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Gn(e, n)).flat(1);
  if (t.suspense) return Gn(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Gn(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Gn(e, t.component.subTree).flat(1);
  }
  return [];
}
var Fn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
class p1 {
  constructor(t) {
    jl(this, Fn, []), jl(this, Sn, 0), this.size = t;
  }
  get isFull() {
    return qt(Fn, this).length === this.size;
  }
  push(t) {
    qt(Fn, this)[qt(Sn, this)] = t, zl(Sn, this, (qt(Sn, this) + 1) % this.size);
  }
  values() {
    return qt(Fn, this).slice(qt(Sn, this)).concat(qt(Fn, this).slice(0, qt(Sn, this)));
  }
  clear() {
    qt(Fn, this).length = 0, zl(Sn, this, 0);
  }
}
function ya(e) {
  const t = Ke({});
  on(() => {
    const r = e();
    for (const i in r) t[i] = r[i];
  }, { flush: "sync" });
  const n = {};
  for (const r in t) n[r] = F(() => t[r]);
  return n;
}
function qi(e, t) {
  return e.includes(t);
}
function nd(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Fr = () => [Function, Array];
function Zl(e, t) {
  return t = "on" + mr(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Qn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((i) => `${i}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let r;
  try {
    r = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return r.filter((i) => !i.closest("[inert]")).filter((i) => !!i.offsetParent || i.getClientRects().length > 0).filter((i) => {
    var _a2, _b2;
    return !((_a2 = i.parentElement) == null ? void 0 : _a2.closest("details:not([open])")) || i.tagName === "SUMMARY" && ((_b2 = i.parentElement) == null ? void 0 : _b2.tagName) === "DETAILS";
  });
}
function rd(e, t, n) {
  let r, i = e.indexOf(document.activeElement);
  const s = t === "next" ? 1 : -1;
  do
    i += s, r = e[i];
  while ((!r || r.offsetParent == null || !((n == null ? void 0 : n(r)) ?? true)) && i < e.length && i >= 0);
  return r;
}
function $r(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = Qn(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = rd(n, t);
    r ? r.focus() : $r(e, t === "next" ? "first" : "last");
  }
}
function y1(e, t) {
  if (!(Oe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function b1(e, t) {
  if (!Oe || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function w1(e, t) {
  const n = e.clientX, r = e.clientY, i = t.getBoundingClientRect(), s = i.left, o = i.top, a = i.right, l = i.bottom;
  return n >= s && n <= a && r >= o && r <= l;
}
function _o() {
  const e = ue(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => m1(e.value) }), t;
}
function lr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function _1(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const id = ["top", "bottom"], S1 = ["start", "end", "left", "right"];
function So(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = qi(id, n) ? "start" : qi(S1, n) ? "top" : "center"), { side: Kl(n, t), align: Kl(r, t) };
}
function Kl(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Us(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Zs(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Yl(e) {
  return { side: e.align, align: e.side };
}
function ql(e) {
  return qi(id, e.side) ? "y" : "x";
}
class At {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, r = t instanceof Element, i = r ? 1 + (1 - n) / n : 1, { x: s, y: o, width: a, height: l } = r ? t.getBoundingClientRect() : t;
    this.x = s * i, this.y = o * i, this.width = a * i, this.height = l * i;
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
function Xl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function sd(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new At({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new At(e);
}
function C1(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new At({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new At({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new At(e);
}
function od(e) {
  const t = new At(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, s, o, a, l;
    if (r.startsWith("matrix3d(")) i = r.slice(9, -1).split(/, /), s = Number(i[0]), o = Number(i[5]), a = Number(i[12]), l = Number(i[13]);
    else if (r.startsWith("matrix(")) i = r.slice(7, -1).split(/, /), s = Number(i[0]), o = Number(i[3]), a = Number(i[4]), l = Number(i[5]);
    else return new At(t);
    const u = n.transformOrigin, c = t.x - a - (1 - s) * parseFloat(u), f = t.y - l - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = s ? t.width / s : e.offsetWidth + 1, m = o ? t.height / o : e.offsetHeight + 1;
    return new At({ x: c, y: f, width: d, height: m });
  } else return new At(t);
}
function An(e, t, n) {
  if (typeof e.animate > "u") return { finished: Promise.resolve() };
  let r;
  try {
    r = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return typeof r.finished > "u" && (r.finished = new Promise((i) => {
    r.onfinish = () => {
      i(r);
    };
  })), r;
}
const Hi = /* @__PURE__ */ new WeakMap();
function x1(e, t) {
  Object.keys(t).forEach((n) => {
    if (ed(n)) {
      const r = nd(n), i = Hi.get(e);
      if (t[n] == null) i == null ? void 0 : i.forEach((s) => {
        const [o, a] = s;
        o === r && (e.removeEventListener(r, a), i.delete(s));
      });
      else if (!i || ![...i].some((s) => s[0] === r && s[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const s = i || /* @__PURE__ */ new Set();
        s.add([r, t[n]]), Hi.has(e) || Hi.set(e, s);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function A1(e, t) {
  Object.keys(t).forEach((n) => {
    if (ed(n)) {
      const r = nd(n), i = Hi.get(e);
      i == null ? void 0 : i.forEach((s) => {
        const [o, a] = s;
        o === r && (e.removeEventListener(r, a), i.delete(s));
      });
    } else e.removeAttribute(n);
  });
}
const $n = 2.4, Jl = 0.2126729, Ql = 0.7151522, ec = 0.072175, L1 = 0.55, E1 = 0.58, k1 = 0.57, M1 = 0.62, Pi = 0.03, tc = 1.45, T1 = 5e-4, P1 = 1.25, I1 = 1.25, nc = 0.078, rc = 12.82051282051282, Ii = 0.06, ic = 1e-3;
function sc(e, t) {
  const n = (e.r / 255) ** $n, r = (e.g / 255) ** $n, i = (e.b / 255) ** $n, s = (t.r / 255) ** $n, o = (t.g / 255) ** $n, a = (t.b / 255) ** $n;
  let l = n * Jl + r * Ql + i * ec, u = s * Jl + o * Ql + a * ec;
  if (l <= Pi && (l += (Pi - l) ** tc), u <= Pi && (u += (Pi - u) ** tc), Math.abs(u - l) < T1) return 0;
  let c;
  if (u > l) {
    const f = (u ** L1 - l ** E1) * P1;
    c = f < ic ? 0 : f < nc ? f - f * rc * Ii : f - Ii;
  } else {
    const f = (u ** M1 - l ** k1) * I1;
    c = f > -ic ? 0 : f > -nc ? f - f * rc * Ii : f + Ii;
  }
  return c * 100;
}
const Xi = 0.20689655172413793, R1 = (e) => e > Xi ** 3 ? Math.cbrt(e) : e / (3 * Xi ** 2) + 4 / 29, O1 = (e) => e > Xi ? e ** 3 : 3 * Xi ** 2 * (e - 4 / 29);
function ad(e) {
  const t = R1, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function ld(e) {
  const t = O1, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const V1 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], D1 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, H1 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], N1 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function cd(e) {
  const t = Array(3), n = D1, r = V1;
  for (let i = 0; i < 3; ++i) t[i] = Math.round(ti(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function ba(e) {
  let { r: t, g: n, b: r } = e;
  const i = [0, 0, 0], s = N1, o = H1;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let a = 0; a < 3; ++a) i[a] = o[a][0] * t + o[a][1] * n + o[a][2] * r;
  return i;
}
function Co(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function F1(e) {
  return Co(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const oc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, $1 = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => ac({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => ac({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => ni({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => ni({ h: e, s: t, v: n, a: r }) };
function Gt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && oc.test(e)) {
    const { groups: t } = e.match(oc), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((s, o) => s.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return $1[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), j1(t);
  } else if (typeof e == "object") {
    if (Gs(e, ["r", "g", "b"])) return e;
    if (Gs(e, ["h", "s", "l"])) return ni(ud(e));
    if (Gs(e, ["h", "s", "v"])) return ni(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ni(e) {
  const { h: t, s: n, v: r, a: i } = e, s = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, o = [s(5), s(3), s(1)].map((a) => Math.round(a * 255));
  return { r: o[0], g: o[1], b: o[2], a: i };
}
function ac(e) {
  return ni(ud(e));
}
function ud(e) {
  const { h: t, s: n, l: r, a: i } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return { h: t, s: o, v: s, a: i };
}
function Ri(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function B1(e) {
  let { r: t, g: n, b: r, a: i } = e;
  return `#${[Ri(t), Ri(n), Ri(r), i !== void 0 ? Ri(Math.round(i * 255)) : ""].join("")}`;
}
function j1(e) {
  e = z1(e);
  let [t, n, r, i] = v1(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, { r: t, g: n, b: r, a: i };
}
function z1(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Gl(Gl(e, 6), 8, "F")), e;
}
function W1(e, t) {
  const n = ad(ba(e));
  return n[0] = n[0] + t * 10, cd(ld(n));
}
function G1(e, t) {
  const n = ad(ba(e));
  return n[0] = n[0] - t * 10, cd(ld(n));
}
function U1(e) {
  const t = Gt(e);
  return ba(t)[1];
}
function fd(e) {
  const t = Math.abs(sc(Gt(0), Gt(e)));
  return Math.abs(sc(Gt(16777215), Gt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function J(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const o = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
    return n && i in n ? r[i] = { ...o, default: n[i] } : r[i] = o, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const Ge = J({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ue(e, t) {
  const n = hi();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ue(e).type;
  return Pn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Z1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const cr = Symbol.for("vuetify:defaults");
function K1(e) {
  return q(e);
}
function wa() {
  const e = ke(cr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ws(e, t) {
  const n = wa(), r = q(e), i = V(() => {
    if (ae(t == null ? void 0 : t.disabled)) return n.value;
    const o = ae(t == null ? void 0 : t.scoped), a = ae(t == null ? void 0 : t.reset), l = ae(t == null ? void 0 : t.root);
    if (r.value == null && !(o || a || l)) return n.value;
    let u = pt(r.value, { prev: n.value });
    if (o) return u;
    if (a || l) {
      const c = Number(a || 1 / 0);
      for (let f = 0; f <= c && !(!u || !("prev" in u)); f++) u = u.prev;
      return u && typeof l == "string" && l in u && (u = pt(pt(u, { prev: u }), u[l])), u;
    }
    return u.prev ? pt(u.prev, u) : u;
  });
  return qe(cr, i), i;
}
function Y1(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function q1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wa();
  const r = Ue("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const i = V(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), s = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = i.value) == null ? void 0 : _a2[u], c].filter((m) => m != null);
    if (Y1(r.vnode, u)) return c;
    const f = (_b2 = i.value) == null ? void 0 : _b2[u];
    if (f !== void 0) return f;
    const d = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return d !== void 0 ? d : c;
  } }), o = ue();
  on(() => {
    if (i.value) {
      const l = Object.entries(i.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = l.length ? Object.fromEntries(l) : void 0;
    } else o.value = void 0;
  });
  function a() {
    const l = Z1(cr, r);
    qe(cr, V(() => o.value ? pt((l == null ? void 0 : l.value) ?? {}, o.value) : l == null ? void 0 : l.value));
  }
  return { props: s, provideSubDefaults: a };
}
function vr(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = J(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return h1(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = wa();
      if (!s.value) return e._setup(r, i);
      const { props: o, provideSubDefaults: a } = q1(r, r._as ?? e.name, s), l = e._setup(o, i);
      return a(), l;
    };
  }
  return e;
}
function Le() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? vr : Xe)(t);
}
function X1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Le()({ name: n ?? mr(wt(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...Ge() }, setup(r, i) {
    let { slots: s } = i;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = s.default) == null ? void 0 : _a2.call(s));
    };
  } });
}
function J1(e, t, n, r) {
  if (!n || lr(e) || lr(t)) return;
  const i = n.get(e);
  if (i) i.set(t, r);
  else {
    const s = /* @__PURE__ */ new WeakMap();
    s.set(t, r), n.set(e, s);
  }
}
function Q1(e, t, n) {
  var _a2, _b2;
  if (!n || lr(e) || lr(t)) return null;
  const r = (_a2 = n.get(e)) == null ? void 0 : _a2.get(t);
  if (typeof r == "boolean") return r;
  const i = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof i == "boolean" ? i : null;
}
function er(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return false;
  const i = Q1(e, t, n);
  return i || (J1(e, t, n, true), r.every((s) => er(e[s], t[s], n)));
}
function dd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const xo = "cubic-bezier(0.4, 0, 0.2, 1)", lc = "cubic-bezier(0.0, 0, 0.2, 1)", cc = "cubic-bezier(0.4, 0, 1, 1)", ep = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function tp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? np(e) : _a(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ji(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (_a(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function _a(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, r = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || r;
}
function np(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function rp(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function Fe(e) {
  const t = Ue("useRender");
  t.render = e;
}
function ip(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, r = 0, i = 0, s = false, o = 0;
  function a() {
    clearTimeout(r), s = false, o = 0;
  }
  const l = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
    clearTimeout(r);
    const d = Date.now();
    o || (o = d);
    const m = d - Math.max(o, i);
    function y() {
      i = Date.now(), r = setTimeout(a, t), e(...c);
    }
    s ? m >= t ? y() : n.trailing && (r = setTimeout(y, t - m)) : (s = true, n.leading && y());
  };
  return l.clear = a, l.immediate = e, l;
}
const pr = J({ border: [Boolean, Number, String] }, "border");
function yr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { borderClasses: V(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
  }) };
}
const sp = [null, "default", "comfortable", "compact"], bi = J({ density: { type: String, default: "default", validator: (e) => sp.includes(e) } }, "density");
function wi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { densityClasses: F(() => `${t}--density-${e.density}`) };
}
const _i = J({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Si(e) {
  return { elevationClasses: F(() => {
    const n = He(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Dn = J({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function Hn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: V(() => {
    const r = He(e) ? e.value : e.rounded, i = He(e) ? false : e.tile, s = [];
    if (i || r === false) s.push("rounded-0");
    else if (r === true || r === "") s.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const o of String(r).split(" ")) s.push(`rounded-${o}`);
    return s;
  }) };
}
const _t = J({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), ri = Symbol.for("vuetify:theme"), Vt = J({ theme: String }, "theme");
function uc() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function op() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uc();
  const t = uc();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [r, i] of Object.entries(e.themes ?? {})) {
    const s = i.dark || r === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[r] = pt(s, i);
  }
  return pt(t, { ...e, themes: n });
}
function Cn(e, t, n, r) {
  e.push(`${up(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function fc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [s, o] of Object.entries(e.colors)) {
    const a = Gt(o);
    i.push(`--${t}theme-${s}: ${a.r},${a.g},${a.b}`), s.startsWith("on-") || i.push(`--${t}theme-${s}-overlay-multiplier: ${U1(o) > 0.18 ? n : r}`);
  }
  for (const [s, o] of Object.entries(e.variables)) {
    const a = typeof o == "string" && o.startsWith("#") ? Gt(o) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    i.push(`--${t}${s}: ${l ?? o}`);
  }
  return i;
}
function ap(e, t, n) {
  const r = {};
  if (n) for (const i of ["lighten", "darken"]) {
    const s = i === "lighten" ? W1 : G1;
    for (const o of Qf(n[i], 1)) r[`${e}-${i}-${o}`] = B1(s(Gt(t), o));
  }
  return r;
}
function lp(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = { ...n, ...ap(r, i, t) });
  }
  return n;
}
function cp(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Gt(e[n]);
    t[r] = fd(i);
  }
  return t;
}
function up(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function fp(e, t, n) {
  const r = dp(e, t);
  r && (r.innerHTML = n);
}
function dp(e, t) {
  if (!Oe) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function mp(e) {
  const t = op(e), n = ue(t.defaultTheme), r = q(t.themes), i = ue("light"), s = V({ get() {
    return n.value === "system" ? i.value : n.value;
  }, set(v) {
    n.value = v;
  } }), o = V(() => {
    const v = {};
    for (const [b, L] of Object.entries(r.value)) {
      const _ = { ...L.colors, ...lp(L.colors, t.variations) };
      v[b] = { ...L, colors: { ..._, ...cp(_) } };
    }
    return v;
  }), a = F(() => o.value[s.value]), l = F(() => n.value === "system"), u = V(() => {
    var _a2;
    const v = [], b = t.unimportant ? "" : " !important", L = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(v, ":root", ["color-scheme: dark"], t.scope), Cn(v, ":root", fc(a.value, t.prefix), t.scope);
    for (const [C, x] of Object.entries(o.value)) Cn(v, `.${t.prefix}theme--${C}`, [`color-scheme: ${x.dark ? "dark" : "normal"}`, ...fc(x, t.prefix)], t.scope);
    if (t.utilities) {
      const C = [], x = [], T = new Set(Object.values(o.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of T) w.startsWith("on-") ? Cn(x, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${b}`], t.scope) : (Cn(C, `.${L}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${b}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${b}`], t.scope), Cn(x, `.${L}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${b}`], t.scope), Cn(x, `.${L}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? v.push(`@layer background {
`, ...C.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...x.map((w) => `  ${w}`), `}
`) : v.push(...C, ...x);
    }
    let _ = v.map((C, x) => x === 0 ? C : `    ${C}`).join("");
    return t.layers && (_ = `@layer vuetify.theme {
` + v.map((C) => `  ${C}`).join("") + `
}`), _;
  }), c = F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${s.value}`), f = F(() => Object.keys(o.value));
  if (qf) {
    let b = function() {
      i.value = v.matches ? "dark" : "light";
    };
    const v = window.matchMedia("(prefers-color-scheme: dark)");
    b(), v.addEventListener("change", b, { passive: true }), yu() && ct(() => {
      v.removeEventListener("change", b);
    });
  }
  function d(v) {
    if (t.isDisabled) return;
    const b = v._context.provides.usehead;
    if (b) {
      let L = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (b.push) {
        const _ = b.push(L);
        Oe && te(u, () => {
          _.patch(L);
        });
      } else Oe ? (b.addHeadObjs(F(L)), on(() => b.updateDOM())) : b.addHeadObjs(L());
    } else {
      let L = function() {
        fp(t.stylesheetId, t.cspNonce, u.value);
      };
      Oe ? te(u, L, { immediate: true }) : L();
    }
  }
  function m(v) {
    v !== "system" && !f.value.includes(v) || (s.value = v);
  }
  function y() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const b = v.indexOf(s.value), L = b === -1 ? 0 : (b + 1) % v.length;
    m(v[L]);
  }
  function h() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    y(v);
  }
  const S = new Proxy(s, { get(v, b) {
    return Reflect.get(v, b);
  }, set(v, b, L) {
    return b === "value" && Yf(`theme.global.name.value = ${L}`, `theme.change('${L}')`), Reflect.set(v, b, L);
  } });
  return { install: d, change: m, cycle: y, toggle: h, isDisabled: t.isDisabled, isSystem: l, name: s, themes: r, current: a, computedThemes: o, prefix: t.prefix, themeClasses: c, styles: u, global: { name: S, current: a } };
}
function Kt(e) {
  Ue("provideTheme");
  const t = ke(ri, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = F(() => e.theme ?? t.name.value), s = { ...t, name: n, current: F(() => t.themes.value[n.value]), themeClasses: F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return qe(ri, s), s;
}
function hp() {
  Ue("useTheme");
  const e = ke(ri, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Sa(e) {
  return ya(() => {
    const { class: t, style: n } = vp(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function ii(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ text: rt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function _s(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ background: rt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function gp(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function vp(e) {
  const t = gp(rt(e)), n = [], r = {};
  if (t.background) if (Co(t.background)) {
    if (r.backgroundColor = t.background, !t.text && F1(t.background)) {
      const i = Gt(t.background);
      if (i.a == null || i.a === 1) {
        const s = fd(i);
        r.color = s, r.caretColor = s;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Co(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const pp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ca(e, t) {
  return P(ye, null, [e && P("span", { key: "overlay", class: Ae(`${t}__overlay`) }, null), P("span", { key: "underlay", class: Ae(`${t}__underlay`) }, null)]);
}
const Ci = J({ color: String, variant: { type: String, default: "elevated", validator: (e) => pp.includes(e) } }, "variant");
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = F(() => {
    const { variant: s } = rt(e);
    return `${t}--variant-${s}`;
  }), { colorClasses: r, colorStyles: i } = Sa(() => {
    const { variant: s, color: o } = rt(e);
    return { [["elevated", "flat"].includes(s) ? "background" : "text"]: o };
  });
  return { colorClasses: r, colorStyles: i, variantClasses: n };
}
const md = J({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...pr(), ...Ge(), ...bi(), ..._i(), ...Dn(), ..._t(), ...Vt(), ...Ci() }, "VBtnGroup"), dc = Le()({ name: "VBtnGroup", props: md(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Kt(e), { densityClasses: i } = wi(e), { borderClasses: s } = yr(e), { elevationClasses: o } = Si(e), { roundedClasses: a } = Hn(e);
  ws({ VBtn: { height: F(() => e.direction === "horizontal" ? "auto" : null), baseColor: F(() => e.baseColor), color: F(() => e.color), density: F(() => e.density), flat: true, variant: F(() => e.variant) } }), Fe(() => M(e.tag, { class: Ae(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, s.value, i.value, o.value, a.value, e.class]), style: Re(e.style) }, n));
} });
function xi(e, t) {
  let n;
  function r() {
    n = Gr(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), r();
    }) : t());
  }
  te(e, (i) => {
    i && !n ? r() : i || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Zt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const s = Ue("useProxiedModel"), o = q(e[t] !== void 0 ? e[t] : n), a = Pn(t), u = V(a !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(a))) && (((_c2 = s.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = s.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${a}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  xi(() => !u.value, () => {
    te(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = V({ get() {
    const f = e[t];
    return r(u.value ? f : o.value);
  }, set(f) {
    const d = i(f), m = ee(u.value ? e[t] : o.value);
    m === d || r(m) === f || (o.value = d, s == null ? void 0 : s.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const yp = J({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), bp = J({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function wp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ue("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = hr();
  qe(Symbol.for(`${t.description}:id`), i);
  const s = ke(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = F(() => e.value), a = V(() => !!(s.disabled.value || e.disabled));
  function l() {
    s == null ? void 0 : s.register({ id: i, value: o, disabled: a }, r);
  }
  function u() {
    s == null ? void 0 : s.unregister(i);
  }
  l(), Lt(() => u());
  const c = V(() => s.isSelected(i)), f = V(() => s.items.value[0].id === i), d = V(() => s.items.value[s.items.value.length - 1].id === i), m = V(() => c.value && [s.selectedClass.value, e.selectedClass]);
  return te(c, (y) => {
    r.emit("group:selected", { value: y });
  }, { flush: "sync" }), { id: i, isSelected: c, isFirst: f, isLast: d, toggle: () => s.select(i, !c.value), select: (y) => s.select(i, y), selectedClass: m, value: o, disabled: a, group: s, register: l, unregister: u };
}
function _p(e, t) {
  let n = false;
  const r = Ke([]), i = Zt(e, "modelValue", [], (d) => d === void 0 ? [] : hd(r, d === null ? [null] : pa(d)), (d) => {
    const m = Cp(r, d);
    return e.multiple ? m : m[0];
  }), s = Ue("useGroup");
  function o(d, m) {
    const y = d, h = Symbol.for(`${t.description}:id`), v = Gn(h, s == null ? void 0 : s.vnode).indexOf(m);
    ae(y.value) === void 0 && (y.value = v, y.useIndexAsValue = true), v > -1 ? r.splice(v, 0, y) : r.push(y);
  }
  function a(d) {
    if (n) return;
    l();
    const m = r.findIndex((y) => y.id === d);
    r.splice(m, 1);
  }
  function l() {
    const d = r.find((m) => !m.disabled);
    d && e.mandatory === "force" && !i.value.length && (i.value = [d.id]);
  }
  Ot(() => {
    l();
  }), Lt(() => {
    n = true;
  }), ra(() => {
    for (let d = 0; d < r.length; d++) r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, m) {
    const y = r.find((h) => h.id === d);
    if (!(m && (y == null ? void 0 : y.disabled))) if (e.multiple) {
      const h = i.value.slice(), S = h.findIndex((b) => b === d), v = ~S;
      if (m = m ?? !v, v && e.mandatory && h.length <= 1 || !v && e.max != null && h.length + 1 > e.max) return;
      S < 0 && m ? h.push(d) : S >= 0 && !m && h.splice(S, 1), i.value = h;
    } else {
      const h = i.value.includes(d);
      if (e.mandatory && h || !h && !m) return;
      i.value = m ?? !h ? [d] : [];
    }
  }
  function c(d) {
    if (e.multiple, i.value.length) {
      const m = i.value[0], y = r.findIndex((v) => v.id === m);
      let h = (y + d) % r.length, S = r[h];
      for (; S.disabled && h !== y; ) h = (h + d) % r.length, S = r[h];
      if (S.disabled) return;
      i.value = [r[h].id];
    } else {
      const m = r.find((y) => !y.disabled);
      m && (i.value = [m.id]);
    }
  }
  const f = { register: o, unregister: a, selected: i, select: u, disabled: F(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => i.value.includes(d), selectedClass: F(() => e.selectedClass), items: F(() => r), getItemIndex: (d) => Sp(r, d) };
  return qe(t, f), f;
}
function Sp(e, t) {
  const n = hd(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function hd(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.find((o) => er(r, o.value)), s = e[r];
    (i == null ? void 0 : i.value) !== void 0 ? n.push(i.id) : (s == null ? void 0 : s.useIndexAsValue) && n.push(s.id);
  }), n;
}
function Cp(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((s) => s.id === r);
    if (~i) {
      const s = e[i];
      n.push(s.value !== void 0 ? s.value : i);
    }
  }), n;
}
const gd = Symbol.for("vuetify:v-btn-toggle"), xp = J({ ...md(), ...yp() }, "VBtnToggle"), Ap = Le()({ name: "VBtnToggle", props: xp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: i, prev: s, select: o, selected: a } = _p(e, gd);
  return Fe(() => {
    const l = dc.filterProps(e);
    return M(dc, Te({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: i, prev: s, select: o, selected: a })];
    } });
  }), { next: i, prev: s, select: o };
} }), Lp = J({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Mt = Le(false)({ name: "VDefaultsProvider", props: Lp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: i, reset: s, root: o, scoped: a } = Du(e);
  return ws(r, { reset: s, root: o, scoped: a, disabled: i }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), yt = [String, Function, Object, Array], Ao = Symbol.for("vuetify:icons"), Ss = J({ icon: { type: yt }, tag: { type: [String, Object, Function], required: true } }, "icon"), mc = Le()({ name: "VComponentIcon", props: Ss(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const r = e.icon;
    return M(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? M(r, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), Aa = vr({ name: "VSvgIcon", inheritAttrs: false, props: Ss(), setup(e, t) {
  let { attrs: n } = t;
  return () => M(e.tag, Te(n, { style: null }), { default: () => [P("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? P("path", { d: r[0], "fill-opacity": r[1] }, null) : P("path", { d: r }, null)) : P("path", { d: e.icon }, null)])] });
} });
vr({ name: "VLigatureIcon", props: Ss(), setup(e) {
  return () => M(e.tag, null, { default: () => [e.icon] });
} });
const vd = vr({ name: "VClassIcon", props: Ss(), setup(e) {
  return () => M(e.tag, { class: Ae(e.icon) }, null);
} }), Ep = (e) => {
  const t = ke(Ao);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: V(() => {
    var _a2;
    const r = rt(e);
    if (!r) return { component: mc };
    let i = r;
    if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (_a2 = t.aliases) == null ? void 0 : _a2[i.slice(1)])), Array.isArray(i)) return { component: Aa, icon: i };
    if (typeof i != "string") return { component: mc, icon: i };
    const s = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), o = s ? i.slice(s.length + 1) : i;
    return { component: t.sets[s ?? t.defaultSet].component, icon: o };
  }) };
}, kp = ["x-small", "small", "default", "large", "x-large"], Cs = J({ size: { type: [String, Number], default: "default" } }, "size");
function xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return ya(() => {
    const n = e.size;
    let r, i;
    return qi(kp, n) ? r = `${t}--size-${n}` : n && (i = { width: ve(n), height: ve(n) }), { sizeClasses: r, sizeStyles: i };
  });
}
const Mp = J({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...Ge(), ...Cs(), ..._t({ tag: "i" }), ...Vt() }, "VIcon"), it = Le()({ name: "VIcon", props: Mp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const i = ue(), { themeClasses: s } = hp(), { iconData: o } = Ep(() => i.value || e.icon), { sizeClasses: a } = xs(e), { textColorClasses: l, textColorStyles: u } = ii(() => e.color);
  return Fe(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (i.value = (_b2 = td(c).filter((d) => d.type === mi && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return M(o.value.component, { tag: e.tag, icon: o.value.icon, class: Ae(["v-icon", "notranslate", s.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: Re([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function Tp(e, t) {
  const n = q(), r = ue(false);
  if (va) {
    const i = new IntersectionObserver((s) => {
      r.value = !!s.find((o) => o.isIntersecting);
    }, t);
    ct(() => {
      i.disconnect();
    }), te(n, (s, o) => {
      o && (i.unobserve(o), r.value = false), s && i.observe(s);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: r };
}
function pd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = _o(), r = q();
  if (Oe) {
    const i = new ResizeObserver((s) => {
      s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    Lt(() => {
      i.disconnect();
    }), te(() => n.el, (s, o) => {
      o && (i.unobserve(o), r.value = void 0), s && i.observe(s);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: tr(r) };
}
const Pp = J({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function Ip(e) {
  const n = F(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ue(e.reveal ? "initial" : "disabled");
  return Ot(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const Rp = J({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Ge(), ...Pp(), ...Cs(), ..._t({ tag: "div" }), ...Vt() }, "VProgressCircular"), Op = Le()({ name: "VProgressCircular", props: Rp(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, i = 2 * Math.PI * r, s = q(), { themeClasses: o } = Kt(e), { sizeClasses: a, sizeStyles: l } = xs(e), { textColorClasses: u, textColorStyles: c } = ii(() => e.color), { textColorClasses: f, textColorStyles: d } = ii(() => e.bgColor), { intersectionRef: m, isIntersecting: y } = Tp(), { resizeRef: h, contentRect: S } = pd(), { state: v, duration: b } = Ip(e), L = F(() => v.value === "initial" ? 0 : ti(parseFloat(e.modelValue), 0, 100)), _ = F(() => Number(e.width)), C = F(() => l.value ? Number(e.size) : S.value ? S.value.width : Math.max(_.value, 32)), x = F(() => r / (1 - _.value / C.value) * 2), T = F(() => _.value / C.value * x.value), w = F(() => {
    const I = (100 - L.value) / 100 * i;
    return e.rounded && L.value > 0 && L.value < 100 ? ve(Math.min(i - 0.01, I + T.value)) : ve(I);
  }), E = V(() => {
    const I = Number(e.rotate);
    return e.rounded ? I + T.value / 2 / i * 360 : I;
  });
  return on(() => {
    m.value = s.value, h.value = s.value;
  }), Fe(() => M(e.tag, { ref: s, class: Ae(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": y.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Yi()), "v-progress-circular--revealing": ["initial", "pending"].includes(v.value) }, o.value, a.value, u.value, e.class]), style: Re([l.value, c.value, { "--progress-reveal-duration": `${b.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : L.value }, { default: () => [P("svg", { style: { transform: `rotate(calc(-90deg + ${E.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [P("circle", { class: Ae(["v-progress-circular__underlay", f.value]), style: Re(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": 0 }, null), P("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && P("div", { class: "v-progress-circular__content" }, [n.default({ value: L.value })])] })), {};
} }), br = J({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function wr(e) {
  return { dimensionStyles: V(() => {
    const n = {}, r = ve(e.height), i = ve(e.maxHeight), s = ve(e.maxWidth), o = ve(e.minHeight), a = ve(e.minWidth), l = ve(e.width);
    return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), o != null && (n.minHeight = o), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const Vp = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, hc = "$vuetify.", gc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), yd = (e, t, n) => function(r) {
  for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
  if (!r.startsWith(hc)) return gc(r, s);
  const a = r.replace(hc, ""), l = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = bo(l, a, null);
  return c || (`${r}${e.value}`, c = bo(u, a, null)), c || (c = r), typeof c != "string" && (c = r), gc(c, s);
};
function La(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function bd(e, t) {
  return La(e, t)(0.1).includes(",") ? "," : ".";
}
function Ks(e, t, n) {
  const r = Zt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, te(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function wd(e) {
  return (t) => {
    const n = Ks(t, "locale", e.current), r = Ks(t, "fallback", e.fallback), i = Ks(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: i, decimalSeparator: F(() => bd(n, r)), t: yd(n, r, i), n: La(n, r), provide: wd({ current: n, fallback: r, messages: i }) };
  };
}
function Dp(e) {
  const t = ue((e == null ? void 0 : e.locale) ?? "en"), n = ue((e == null ? void 0 : e.fallback) ?? "en"), r = q({ en: Vp, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: F(() => (e == null ? void 0 : e.decimalSeparator) ?? bd(t, n)), t: yd(t, n, r), n: La(t, n), provide: wd({ current: t, fallback: n, messages: r }) };
}
const Lo = Symbol.for("vuetify:locale");
function Hp(e) {
  return e.name != null;
}
function Np(e) {
  const t = (e == null ? void 0 : e.adapter) && Hp(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Dp(e), n = $p(t, e);
  return { ...t, ...n };
}
function Fp() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function $p(e, t) {
  const n = q((t == null ? void 0 : t.rtl) ?? Fp()), r = V(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: F(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function _r() {
  const e = ke(Lo);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const vc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, _d = J({ location: String }, "location");
function Sd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = _r();
  return { locationStyles: V(() => {
    if (!e.location) return {};
    const { side: s, align: o } = So(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return s !== "center" && (t ? l[vc[s]] = `calc(100% - ${a(s)}px)` : l[s] = 0), o !== "center" ? t ? l[vc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0 : (s === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[s]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[s]), l;
  }) };
}
const Bp = J({ loading: [Boolean, String] }, "loader");
function jp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { loaderClasses: F(() => ({ [`${t}--loading`]: e.loading })) };
}
const zp = ["static", "relative", "fixed", "absolute", "sticky"], Wp = J({ position: { type: String, validator: (e) => zp.includes(e) } }, "position");
function Gp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { positionClasses: F(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Up() {
  const e = Ue("useRoute");
  return V(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Zp() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ue("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function Cd(e, t) {
  const n = Eh("RouterLink"), r = F(() => !!(e.href || e.to)), i = V(() => (r == null ? void 0 : r.value) || Zl(t, "click") || Zl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = F(() => e.href);
    return { isLink: r, isRouterLink: F(() => false), isClickable: i, href: f, linkProps: Ke({ href: f }), route: F(() => {
    }), navigate: F(() => {
    }) };
  }
  const s = n.useLink({ to: F(() => e.to || ""), replace: F(() => e.replace) }), o = V(() => e.to ? s : void 0), a = Up(), l = V(() => {
    var _a2, _b2, _c2;
    return o.value ? e.exact ? a.value ? ((_a2 = o.value.isExactActive) == null ? void 0 : _a2.value) && er(o.value.route.value.query, a.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = V(() => {
    var _a2;
    return e.to ? (_a2 = o.value) == null ? void 0 : _a2.route.value.href : e.href;
  });
  return { isLink: r, isRouterLink: F(() => !!e.to), isClickable: i, isActive: l, route: F(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.route.value;
  }), navigate: F(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.navigate;
  }), href: u, linkProps: Ke({ href: u, "aria-current": F(() => l.value ? "page" : void 0), "aria-disabled": F(() => e.disabled && r.value ? "true" : void 0), tabindex: F(() => e.disabled && r.value ? "-1" : void 0) }) };
}
const xd = J({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Ys = false;
function Kp(e, t) {
  let n = false, r, i;
  Oe && (e == null ? void 0 : e.beforeEach) && (mt(() => {
    window.addEventListener("popstate", s), r = e.beforeEach((o, a, l) => {
      Ys ? n ? t(l) : l() : setTimeout(() => n ? t(l) : l()), Ys = true;
    }), i = e == null ? void 0 : e.afterEach(() => {
      Ys = false;
    });
  }), ct(() => {
    window.removeEventListener("popstate", s), r == null ? void 0 : r(), i == null ? void 0 : i();
  }));
  function s(o) {
    var _a2;
    ((_a2 = o.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function Yp(e, t) {
  te(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && mt(() => {
      t(n);
    });
  }, { immediate: true });
}
const Eo = Symbol("rippleStop"), qp = 80;
function pc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ko(e) {
  return e.constructor.name === "TouchEvent";
}
function Ad(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Xp = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!Ad(e)) {
    const f = t.getBoundingClientRect(), d = ko(e) ? e.touches[e.touches.length - 1] : e;
    r = d.clientX - f.left, i = d.clientY - f.top;
  }
  let s = 0, o = 0.3;
  ((_a2 = t._ripple) == null ? void 0 : _a2.circle) ? (o = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((r - s) ** 2 + (i - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - s * 2) / 2}px`, l = `${(t.clientHeight - s * 2) / 2}px`, u = n.center ? a : `${r - s}px`, c = n.center ? l : `${i - s}px`;
  return { radius: s, scale: o, x: u, y: c, centerX: a, centerY: l };
}, Qi = { show(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a2 = t == null ? void 0 : t._ripple) == null ? void 0 : _a2.enabled)) return;
  const r = document.createElement("span"), i = document.createElement("span");
  r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
  const { radius: s, scale: o, x: a, y: l, centerX: u, centerY: c } = Xp(e, t, n), f = `${s * 2}px`;
  i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
  const d = window.getComputedStyle(t);
  d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), pc(i, `translate(${a}, ${l}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), pc(i, `translate(${u}, ${c}) scale3d(1,1,1)`);
    });
  });
}, hide(e) {
  var _a2;
  if (!((_a2 = e == null ? void 0 : e._ripple) == null ? void 0 : _a2.enabled)) return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0) return;
  const n = Array.from(t).findLast((s) => !s.dataset.isHiding);
  if (n) n.dataset.isHiding = "true";
  else return;
  const r = performance.now() - Number(n.dataset.activated), i = Math.max(250 - r, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var _a3;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((_a3 = n.parentNode) == null ? void 0 : _a3.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, i);
} };
function Ld(e) {
  return typeof e > "u" || !!e;
}
function si(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Eo])) {
    if (e[Eo] = true, ko(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Ad(e), n._ripple.class && (t.class = n._ripple.class), ko(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Qi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, qp);
    } else Qi.show(e, n, t);
  }
}
function es(e) {
  e[Eo] = true;
}
function gt(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        gt(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), Qi.hide(t);
  }
}
function Ed(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let oi = false;
function Jp(e, t) {
  !oi && t.includes(e.key) && (oi = true, si(e));
}
function kd(e) {
  oi = false, gt(e);
}
function Md(e) {
  oi && (oi = false, gt(e));
}
function Td(e, t, n) {
  const { value: r, modifiers: i } = t, s = Ld(r);
  s || Qi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const o = wo(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const a = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => Jp(l, a), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", es, { passive: true }), e.addEventListener("mousedown", es);
      return;
    }
    e.addEventListener("touchstart", si, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", Ed, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", si), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", kd), e.addEventListener("blur", Md), e.addEventListener("dragstart", gt, { passive: true });
  } else !s && n && Pd(e);
}
function Pd(e) {
  var _a2;
  e.removeEventListener("touchstart", es), e.removeEventListener("mousedown", es), e.removeEventListener("touchstart", si), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", Ed), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", si), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", kd), e.removeEventListener("blur", Md), e.removeEventListener("dragstart", gt);
}
function Qp(e, t) {
  Td(e, t, false);
}
function ey(e) {
  Pd(e), delete e._ripple;
}
function ty(e, t) {
  if (t.value === t.oldValue) return;
  const n = Ld(t.oldValue);
  Td(e, t, n);
}
const Mo = { mounted: Qp, unmounted: ey, updated: ty }, ny = J({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: gd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...pr(), ...Ge(), ...bi(), ...br(), ..._i(), ...bp(), ...Bp(), ..._d(), ...Wp(), ...Dn(), ...xd(), ...Cs(), ..._t({ tag: "button" }), ...Vt(), ...Ci({ variant: "elevated" }) }, "VBtn"), Br = Le()({ name: "VBtn", props: ny(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Kt(e), { borderClasses: s } = yr(e), { densityClasses: o } = wi(e), { dimensionStyles: a } = wr(e), { elevationClasses: l } = Si(e), { loaderClasses: u } = jp(e), { locationStyles: c } = Sd(e), { positionClasses: f } = Gp(e), { roundedClasses: d } = Hn(e), { sizeClasses: m, sizeStyles: y } = xs(e), h = wp(e, e.symbol, false), S = Cd(e, n), v = V(() => {
    var _a2;
    return e.active !== void 0 ? e.active : S.isRouterLink.value ? (_a2 = S.isActive) == null ? void 0 : _a2.value : h == null ? void 0 : h.isSelected.value;
  }), b = F(() => v.value ? e.activeColor ?? e.color : e.color), L = V(() => {
    var _a2, _b2;
    return { color: (h == null ? void 0 : h.isSelected.value) && (!S.isLink.value || ((_a2 = S.isActive) == null ? void 0 : _a2.value)) || !h || ((_b2 = S.isActive) == null ? void 0 : _b2.value) ? b.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: _, colorStyles: C, variantClasses: x } = xa(L), T = V(() => (h == null ? void 0 : h.disabled.value) || e.disabled), w = F(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), E = V(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function I($) {
    var _a2, _b2;
    T.value || S.isLink.value && ($.metaKey || $.ctrlKey || $.shiftKey || $.button !== 0 || n.target === "_blank") || (S.isRouterLink.value ? (_b2 = (_a2 = S.navigate).value) == null ? void 0 : _b2.call(_a2, $) : h == null ? void 0 : h.toggle());
  }
  return Yp(S, h == null ? void 0 : h.select), Fe(() => {
    const $ = S.isLink.value ? "a" : e.tag, R = !!(e.prependIcon || r.prepend), B = !!(e.appendIcon || r.append), X = !!(e.icon && e.icon !== true);
    return rr(M($, Te(S.linkProps, { type: $ === "a" ? void 0 : "button", class: ["v-btn", h == null ? void 0 : h.selectedClass.value, { "v-btn--active": v.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, s.value, _.value, o.value, l.value, u.value, f.value, d.value, m.value, x.value, e.class], style: [C.value, a.value, c.value, y.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && $ !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: I, value: E.value }), { default: () => {
      var _a2;
      return [Ca(true, "v-btn"), !e.icon && R && P("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? M(Mt, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : M(it, { key: "prepend-icon", icon: e.prependIcon }, null)]), P("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && X ? M(it, { key: "content-icon", icon: e.icon }, null) : M(Mt, { key: "content-defaults", disabled: !X, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? be(e.text)];
      } })]), !e.icon && B && P("span", { key: "append", class: "v-btn__append" }, [r.append ? M(Mt, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : M(it, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && P("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? M(Op, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Mo, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: h };
} }), ry = ["dotted", "dashed", "solid", "double"], iy = J({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => ry.includes(e) }, ...Ge(), ...Vt() }, "VDivider"), sy = Le()({ name: "VDivider", props: iy(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Kt(e), { textColorClasses: s, textColorStyles: o } = ii(() => e.color), a = V(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), l = F(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return Fe(() => {
    const u = P("hr", { class: Ae([{ "v-divider": true, "v-divider--gradient": e.gradient && !r.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, i.value, s.value, e.class]), style: Re([a.value, o.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return r.default ? P("div", { class: Ae(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, P("div", { class: "v-divider__content", style: Re(l.value) }, [r.default()]), u]) : u;
  }), {};
} }), oy = J({ fluid: { type: Boolean, default: false }, ...Ge(), ...br(), ..._t() }, "VContainer"), Ai = Le()({ name: "VContainer", props: oy(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = _r(), { dimensionStyles: i } = wr(e);
  return Fe(() => M(e.tag, { class: Ae(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: Re([i.value, e.style]) }, n)), {};
} }), To = Symbol.for("vuetify:display"), yc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, ay = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yc;
  return pt(yc, e);
};
function bc(e) {
  return Oe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function wc(e) {
  return Oe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function _c(e) {
  const t = Oe && !e ? window.navigator.userAgent : "ssr";
  function n(y) {
    return !!t.match(y);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), m = n(/linux/i);
  return { android: r, ios: i, cordova: s, electron: o, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: m, touch: f1, ssr: t === "ssr" };
}
function ly(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = ay(e), i = ue(wc(t)), s = ue(_c(t)), o = Ke({}), a = ue(bc(t));
  function l() {
    i.value = wc(), a.value = bc();
  }
  function u() {
    l(), s.value = _c();
  }
  return on(() => {
    const c = a.value < n.sm, f = a.value < n.md && !c, d = a.value < n.lg && !(f || c), m = a.value < n.xl && !(d || f || c), y = a.value < n.xxl && !(m || d || f || c), h = a.value >= n.xxl, S = c ? "xs" : f ? "sm" : d ? "md" : m ? "lg" : y ? "xl" : "xxl", v = typeof r == "number" ? r : n[r], b = a.value < v;
    o.xs = c, o.sm = f, o.md = d, o.lg = m, o.xl = y, o.xxl = h, o.smAndUp = !c, o.mdAndUp = !(c || f), o.lgAndUp = !(c || f || d), o.xlAndUp = !(c || f || d || m), o.smAndDown = !(d || m || y || h), o.mdAndDown = !(m || y || h), o.lgAndDown = !(y || h), o.xlAndDown = !h, o.name = S, o.height = i.value, o.width = a.value, o.mobile = b, o.mobileBreakpoint = r, o.platform = s.value, o.thresholds = n;
  }), Oe && (window.addEventListener("resize", l, { passive: true }), ct(() => {
    window.removeEventListener("resize", l);
  }, true)), { ...Du(o), update: u, ssr: !!t };
}
function Id() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = ke(To);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = V(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: F(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const cy = J({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function St(e, t, n) {
  return Le()({ name: e, props: cy({ mode: n, origin: t }), setup(r, i) {
    let { slots: s } = i;
    const o = { onBeforeEnter(a) {
      r.origin && (a.style.transformOrigin = r.origin);
    }, onLeave(a) {
      if (r.leaveAbsolute) {
        const { offsetTop: l, offsetLeft: u, offsetWidth: c, offsetHeight: f } = a;
        a._transitionInitialStyles = { position: a.style.position, top: a.style.top, left: a.style.left, width: a.style.width, height: a.style.height }, a.style.position = "absolute", a.style.top = `${l}px`, a.style.left = `${u}px`, a.style.width = `${c}px`, a.style.height = `${f}px`;
      }
      r.hideOnLeave && a.style.setProperty("display", "none", "important");
    }, onAfterLeave(a) {
      if (r.leaveAbsolute && (a == null ? void 0 : a._transitionInitialStyles)) {
        const { position: l, top: u, left: c, width: f, height: d } = a._transitionInitialStyles;
        delete a._transitionInitialStyles, a.style.position = l || "", a.style.top = u || "", a.style.left = c || "", a.style.width = f || "", a.style.height = d || "";
      }
    } };
    return () => {
      const a = r.group ? ca : ar;
      return vn(a, { name: r.disabled ? "" : e, css: !r.disabled, ...r.group ? void 0 : { mode: r.mode }, ...r.disabled ? {} : o }, s.default);
    };
  } });
}
function Ea(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Le()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Yi() }, group: Boolean, hideOnLeave: Boolean }, setup(r, i) {
    let { slots: s } = i;
    const o = r.group ? ca : ar;
    return () => vn(o, { name: r.disabled ? "" : e, css: !r.disabled, ...r.disabled ? {} : { ...t, onLeave: (a) => {
      var _a2;
      r.hideOnLeave ? a.style.setProperty("display", "none", "important") : (_a2 = t.onLeave) == null ? void 0 : _a2.call(t, a);
    } } }, s.default);
  } });
}
function ka() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, width: i.style.width, height: i.style.height };
  }, onEnter(i) {
    const s = i._initialStyle;
    if (!s) return;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const o = `${i.offsetWidth}px`, a = `${i.offsetHeight}px`;
    ["x", "both"].includes(t) && (i.style.width = "0"), ["y", "both"].includes(t) && (i.style.height = "0"), i.offsetHeight, i.style.transition = s.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (i.style.width = o), ["y", "both"].includes(t) && (i.style.height = a);
    });
  }, onAfterEnter: r, onEnterCancelled: r, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, width: i.style.width, height: i.style.height }, i.style.overflow = "hidden", ["x", "both"].includes(t) && (i.style.width = `${i.offsetWidth}px`), ["y", "both"].includes(t) && (i.style.height = `${i.offsetHeight}px`), i.offsetHeight, requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (i.style.width = "0"), ["y", "both"].includes(t) && (i.style.height = "0");
    });
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(i) {
    e && i._parent && i._parent.classList.remove(e), r(i);
  }
  function r(i) {
    if (!i._initialStyle) return;
    const { width: s, height: o } = i._initialStyle;
    i.style.overflow = i._initialStyle.overflow, s != null && ["x", "both"].includes(t) && (i.style.width = s), o != null && ["y", "both"].includes(t) && (i.style.height = o), delete i._initialStyle;
  }
}
const uy = J({ target: [Object, Array] }, "v-dialog-transition"), qs = /* @__PURE__ */ new WeakMap(), fy = Le()({ name: "VDialogTransition", props: uy(), setup(e, t) {
  let { slots: n } = t;
  const r = { onBeforeEnter(i) {
    i.style.pointerEvents = "none", i.style.visibility = "hidden";
  }, async onEnter(i, s) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), i.style.visibility = "";
    const o = Cc(e.target, i), { x: a, y: l, sx: u, sy: c, speed: f } = o;
    if (qs.set(i, o), Yi()) An(i, [{ opacity: 0 }, {}], { duration: 125 * f, easing: lc }).finished.then(() => s());
    else {
      const d = An(i, [{ transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * f, easing: lc });
      (_a2 = Sc(i)) == null ? void 0 : _a2.forEach((m) => {
        An(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: xo });
      }), d.finished.then(() => s());
    }
  }, onAfterEnter(i) {
    i.style.removeProperty("pointer-events");
  }, onBeforeLeave(i) {
    i.style.pointerEvents = "none";
  }, async onLeave(i, s) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d));
    let o;
    !qs.has(i) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Cc(e.target, i) : o = qs.get(i);
    const { x: a, y: l, sx: u, sy: c, speed: f } = o;
    Yi() ? An(i, [{}, { opacity: 0 }], { duration: 85 * f, easing: cc }).finished.then(() => s()) : (An(i, [{}, { transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * f, easing: cc }).finished.then(() => s()), (_a2 = Sc(i)) == null ? void 0 : _a2.forEach((m) => {
      An(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: xo });
    }));
  }, onAfterLeave(i) {
    i.style.removeProperty("pointer-events");
  } };
  return () => e.target ? M(ar, Te({ name: "dialog-transition" }, r, { css: false }), n) : M(ar, { name: "dialog-transition" }, n);
} });
function Sc(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function Cc(e, t) {
  const n = sd(e), r = od(t), [i, s] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let l = n.left + n.width / 2;
  o === "left" || a === "left" ? l -= n.width / 2 : (o === "right" || a === "right") && (l += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || a === "top" ? u -= n.height / 2 : (o === "bottom" || a === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), m = c / d || 0, y = f / d || 0, h = r.width * r.height / (window.innerWidth * window.innerHeight), S = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return { x: l - (i + r.left), y: u - (s + r.top), sx: m, sy: y, speed: S };
}
St("fab-transition", "center center", "out-in");
St("dialog-bottom-transition");
St("dialog-top-transition");
St("fade-transition");
St("scale-transition");
St("scroll-x-transition");
St("scroll-x-reverse-transition");
St("scroll-y-transition");
St("scroll-y-reverse-transition");
St("slide-x-transition");
St("slide-x-reverse-transition");
St("slide-y-transition");
St("slide-y-reverse-transition");
const Rd = Ea("expand-transition", ka());
Ea("expand-x-transition", ka("", "x"));
Ea("expand-both-transition", ka("", "both"));
function dy(e) {
  return { aspectStyles: V(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Od = J({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...Ge(), ...br() }, "VResponsive"), xc = Le()({ name: "VResponsive", props: Od(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = dy(e), { dimensionStyles: i } = wr(e);
  return Fe(() => {
    var _a2;
    return P("div", { class: Ae(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: Re([i.value, e.style]) }, [P("div", { class: "v-responsive__sizer", style: Re(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && P("div", { class: Ae(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Vd = J({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Un = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: i, group: s, ...o } = e, { component: a = s ? ca : ar, ...l } = wo(r) ? r : {};
  let u;
  return wo(r) ? u = Te(l, _1({ disabled: i, group: s }), o) : u = Te({ name: i || !r ? "" : r }, o), vn(a, u, n);
};
function Ac(e, t) {
  if (!va) return;
  const n = t.modifiers || {}, r = t.value, { handler: i, options: s } = typeof r == "object" ? r : { handler: r, options: {} }, o = new IntersectionObserver(function() {
    var _a2;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = a.some((f) => f.isIntersecting);
    i && (!n.quiet || u.init) && (!n.once || c || u.init) && i(c, a, l), c && n.once ? Po(e, t) : u.init = true;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: o }, o.observe(e);
}
function Po(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Lc = { mounted: Ac, unmounted: Po, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (Po(e, t), Ac(e, t));
} }, my = J({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Od(), ...Ge(), ...Dn(), ...Vd() }, "VImg"), Dd = Le()({ name: "VImg", directives: { vIntersect: Lc }, props: my(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: i, backgroundColorStyles: s } = _s(() => e.color), { roundedClasses: o } = Hn(e), a = Ue("VImg"), l = ue(""), u = q(), c = ue(e.eager ? "loading" : "idle"), f = ue(), d = ue(), m = V(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = V(() => m.value.aspect || f.value / d.value || 0);
  te(() => e.src, () => {
    h(c.value !== "idle");
  }), te(y, (R, B) => {
    !R && B && u.value && _(u.value);
  }), hs(() => h());
  function h(R) {
    if (!(e.eager && R) && !(va && !R && !e.eager)) {
      if (c.value = "loading", m.value.lazySrc) {
        const B = new Image();
        B.src = m.value.lazySrc, _(B, null);
      }
      m.value.src && mt(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src), setTimeout(() => {
          var _a3;
          if (!a.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || v(), c.value === "error") return;
            y.value || _(u.value, null), c.value === "loading" && S();
          } else y.value || _(u.value), b();
        });
      });
    }
  }
  function S() {
    var _a2;
    a.isUnmounted || (b(), _(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src));
  }
  function v() {
    var _a2;
    a.isUnmounted || (c.value = "error", n("error", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src));
  }
  function b() {
    const R = u.value;
    R && (l.value = R.currentSrc || R.src);
  }
  let L = -1;
  Lt(() => {
    clearTimeout(L);
  });
  function _(R) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const X = () => {
      if (clearTimeout(L), a.isUnmounted) return;
      const { naturalHeight: Y, naturalWidth: ne } = R;
      Y || ne ? (f.value = ne, d.value = Y) : !R.complete && c.value === "loading" && B != null ? L = window.setTimeout(X, B) : (R.currentSrc.endsWith(".svg") || R.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
    };
    X();
  }
  const C = F(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), x = () => {
    var _a2;
    if (!m.value.src || c.value === "idle") return null;
    const R = P("img", { class: Ae(["v-img__img", C.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.src, srcset: m.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: S, onError: v }, null), B = (_a2 = r.sources) == null ? void 0 : _a2.call(r);
    return M(Un, { transition: e.transition, appear: true }, { default: () => [rr(B ? P("picture", { class: "v-img__picture" }, [B, R]) : R, [[la, c.value === "loaded"]])] });
  }, T = () => M(Un, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && P("img", { class: Ae(["v-img__img", "v-img__img--preload", C.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => r.placeholder ? M(Un, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && P("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, E = () => r.error ? M(Un, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && P("div", { class: "v-img__error" }, [r.error()])] }) : null, I = () => e.gradient ? P("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, $ = ue(false);
  {
    const R = te(y, (B) => {
      B && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          $.value = true;
        });
      }), R());
    });
  }
  return Fe(() => {
    const R = xc.filterProps(e);
    return rr(M(xc, Te({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !$.value, "v-img--fit-content": e.width === "fit-content" }, i.value, o.value, e.class], style: [{ width: ve(e.width === "auto" ? f.value : e.width) }, s.value, e.style] }, R, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => P(ye, null, [M(x, null, null), M(T, null, null), M(I, null, null), M(w, null, null), M(E, null, null)]), default: r.default }), [[Lc, { handler: h, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), hy = J({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...pr(), ...Ge(), ...bi(), ...Dn(), ...Cs(), ..._t(), ...Vt(), ...Ci({ variant: "flat" }) }, "VAvatar"), Ec = Le()({ name: "VAvatar", props: hy(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Kt(e), { borderClasses: i } = yr(e), { colorClasses: s, colorStyles: o, variantClasses: a } = xa(e), { densityClasses: l } = wi(e), { roundedClasses: u } = Hn(e), { sizeClasses: c, sizeStyles: f } = xs(e);
  return Fe(() => M(e.tag, { class: Ae(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, i.value, s.value, l.value, u.value, c.value, a.value, e.class]), style: Re([o.value, f.value, e.style]) }, { default: () => [n.default ? M(Mt, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? M(Dd, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? M(it, { key: "icon", icon: e.icon }, null) : e.text, Ca(false, "v-avatar")] })), {};
} }), Xs = Symbol("Forwarded refs");
function Js(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Hd(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e[Xs] = n, new Proxy(e, { get(i, s) {
    if (Reflect.has(i, s)) return Reflect.get(i, s);
    if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
      for (const o of n) if (o.value && Reflect.has(o.value, s)) {
        const a = Reflect.get(o.value, s);
        return typeof a == "function" ? a.bind(o.value) : a;
      }
    }
  }, has(i, s) {
    if (Reflect.has(i, s)) return true;
    if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return false;
    for (const o of n) if (o.value && Reflect.has(o.value, s)) return true;
    return false;
  }, set(i, s, o) {
    if (Reflect.has(i, s)) return Reflect.set(i, s, o);
    if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return false;
    for (const a of n) if (a.value && Reflect.has(a.value, s)) return Reflect.set(a.value, s, o);
    return false;
  }, getOwnPropertyDescriptor(i, s) {
    var _a2;
    const o = Reflect.getOwnPropertyDescriptor(i, s);
    if (o) return o;
    if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
      for (const a of n) {
        if (!a.value) continue;
        const l = Js(a.value, s) ?? ("_" in a.value ? Js((_a2 = a.value._) == null ? void 0 : _a2.setupState, s) : void 0);
        if (l) return l;
      }
      for (const a of n) {
        const l = a.value && a.value[Xs];
        if (!l) continue;
        const u = l.slice();
        for (; u.length; ) {
          const c = u.shift(), f = Js(c.value, s);
          if (f) return f;
          const d = c.value && c.value[Xs];
          d && u.push(...d);
        }
      }
    }
  } });
}
const gy = Symbol.for("vuetify:goto");
function vy() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: ep };
}
function py(e, t) {
  return { rtl: t.isRtl, options: pt(vy(), e) };
}
const Io = Symbol.for("vuetify:list");
function Nd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = ke(Io, { filterable: false, hasPrepend: ue(false), updateHasPrepend: () => null, trackingIndex: ue(-1), navigationStrategy: ue("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: i = t.navigationStrategy, uid: s = t.uid || hr() } = e, o = { filterable: t.filterable || n, hasPrepend: ue(false), updateHasPrepend: (a) => {
    a && (o.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: i, uid: s };
  return qe(Io, o), t;
}
function Fd() {
  return ke(Io, null);
}
const Ma = (e) => {
  const t = { activate: (n) => {
    let { id: r, value: i, activated: s } = n;
    return r = ee(r), e && !i && s.size === 1 && s.has(r) || (i ? s.add(r) : s.delete(r)), s;
  }, in: (n, r, i) => {
    let s = /* @__PURE__ */ new Set();
    if (n != null) for (const o of pa(n)) s = t.activate({ id: o, value: true, activated: new Set(s), children: r, parents: i });
    return s;
  }, out: (n) => Array.from(n) };
  return t;
}, $d = (e) => {
  const t = Ma(e);
  return { activate: (r) => {
    let { activated: i, id: s, ...o } = r;
    s = ee(s);
    const a = i.has(s) ? /* @__PURE__ */ new Set([s]) : /* @__PURE__ */ new Set();
    return t.activate({ ...o, id: s, activated: a });
  }, in: (r, i, s) => {
    let o = /* @__PURE__ */ new Set();
    if (r != null) {
      const a = pa(r);
      a.length && (o = t.in(a.slice(0, 1), i, s));
    }
    return o;
  }, out: (r, i, s) => t.out(r, i, s) };
}, yy = (e) => {
  const t = Ma(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, by = (e) => {
  const t = $d(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, wy = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    const s = /* @__PURE__ */ new Set();
    s.add(t);
    let o = i.get(t);
    for (; o != null; ) s.add(o), o = i.get(o);
    return s;
  } else return r.delete(t), r;
}, select: () => null }, Bd = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    let s = i.get(t);
    for (r.add(t); s != null && s !== t; ) r.add(s), s = i.get(s);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, _y = { open: Bd.open, select: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (!n) return r;
  const s = [];
  let o = i.get(t);
  for (; o != null; ) s.push(o), o = i.get(o);
  return new Set(s);
} }, Ta = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: s } = n;
    if (r = ee(r), e && !i) {
      const o = Array.from(s.entries()).reduce((a, l) => {
        let [u, c] = l;
        return c === "on" && a.push(u), a;
      }, []);
      if (o.length === 1 && o[0] === r) return s;
    }
    return s.set(r, i ? "on" : "off"), s;
  }, in: (n, r, i, s) => {
    const o = /* @__PURE__ */ new Map();
    for (const a of n || []) t.select({ id: a, value: true, selected: o, children: r, parents: i, disabled: s });
    return o;
  }, out: (n) => {
    const r = [];
    for (const [i, s] of n.entries()) s === "on" && r.push(i);
    return r;
  } };
  return t;
}, jd = (e) => {
  const t = Ta(e);
  return { select: (r) => {
    let { selected: i, id: s, ...o } = r;
    s = ee(s);
    const a = i.has(s) ? /* @__PURE__ */ new Map([[s, i.get(s)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...o, id: s, selected: a });
  }, in: (r, i, s, o) => (r == null ? void 0 : r.length) ? t.in(r.slice(0, 1), i, s, o) : /* @__PURE__ */ new Map(), out: (r, i, s) => t.out(r, i, s) };
}, Sy = (e) => {
  const t = Ta(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Cy = (e) => {
  const t = jd(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Pa = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: s, children: o, parents: a, disabled: l } = n;
    r = ee(r);
    const u = new Map(s), c = [r];
    for (; c.length; ) {
      const d = c.shift();
      l.has(d) || s.set(ee(d), i ? "on" : "off"), o.has(d) && c.push(...o.get(d));
    }
    let f = ee(a.get(r));
    for (; f; ) {
      let d = true, m = true;
      for (const y of o.get(f)) {
        const h = ee(y);
        if (!l.has(h) && (s.get(h) !== "on" && (d = false), s.has(h) && s.get(h) !== "off" && (m = false), !d && !m)) break;
      }
      s.set(f, d ? "on" : m ? "off" : "indeterminate"), f = ee(a.get(f));
    }
    return e && !i && Array.from(s.entries()).reduce((m, y) => {
      let [h, S] = y;
      return S === "on" && m.push(h), m;
    }, []).length === 0 ? u : s;
  }, in: (n, r, i) => {
    let s = /* @__PURE__ */ new Map();
    for (const o of n || []) s = t.select({ id: o, value: true, selected: s, children: r, parents: i, disabled: /* @__PURE__ */ new Set() });
    return s;
  }, out: (n, r) => {
    const i = [];
    for (const [s, o] of n.entries()) o === "on" && !r.has(s) && i.push(s);
    return i;
  } };
  return t;
}, xy = (e) => {
  const t = Pa(e);
  return { select: t.select, in: t.in, out: (r, i, s) => {
    const o = [];
    for (const [a, l] of r.entries()) if (l === "on") {
      if (s.has(a)) {
        const u = s.get(a);
        if (r.get(u) === "on") continue;
      }
      o.push(a);
    }
    return o;
  } };
}, Ay = (e) => {
  const n = { select: Pa(e).select, in: (r, i, s, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const l of r || []) i.has(l) || (a = n.select({ id: l, value: true, selected: a, children: i, parents: s, disabled: o }));
    return a;
  }, out: (r) => {
    const i = [];
    for (const [s, o] of r.entries()) (o === "on" || o === "indeterminate") && i.push(s);
    return i;
  } };
  return n;
}, ur = Symbol.for("vuetify:nested"), zd = { id: ue(), root: { itemsRegistration: q("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: q(/* @__PURE__ */ new Map()), parents: q(/* @__PURE__ */ new Map()), disabled: q(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: q(false), scrollToActive: q(false), selectable: q(false), opened: q(/* @__PURE__ */ new Set()), activated: q(/* @__PURE__ */ new Set()), selected: q(/* @__PURE__ */ new Map()), selectedValues: q([]), getPath: () => [] } }, Ly = J({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), Ey = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: i } = t, s = false;
  const o = ue(/* @__PURE__ */ new Map()), a = ue(/* @__PURE__ */ new Map()), l = ue(/* @__PURE__ */ new Set()), u = Zt(e, "opened", e.opened, (C) => new Set(Array.isArray(C) ? C.map((x) => ee(x)) : C), (C) => [...C.values()]), c = V(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return yy(e.mandatory);
      case "single-leaf":
        return by(e.mandatory);
      case "independent":
        return Ma(e.mandatory);
      case "single-independent":
      default:
        return $d(e.mandatory);
    }
  }), f = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Cy(e.mandatory);
      case "leaf":
        return Sy(e.mandatory);
      case "independent":
        return Ta(e.mandatory);
      case "single-independent":
        return jd(e.mandatory);
      case "trunk":
        return xy(e.mandatory);
      case "branch":
        return Ay(e.mandatory);
      case "classic":
      default:
        return Pa(e.mandatory);
    }
  }), d = V(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return _y;
      case "single":
        return wy;
      case "multiple":
      default:
        return Bd;
    }
  }), m = Zt(e, "activated", e.activated, (C) => c.value.in(C, o.value, a.value), (C) => c.value.out(C, o.value, a.value)), y = Zt(e, "selected", e.selected, (C) => f.value.in(C, o.value, a.value, l.value), (C) => f.value.out(C, o.value, a.value));
  Lt(() => {
    s = true;
  });
  function h(C) {
    const x = [];
    let T = ee(C);
    for (; T !== void 0; ) x.unshift(T), T = a.value.get(T);
    return x;
  }
  const S = Ue("nested"), v = /* @__PURE__ */ new Set(), b = ip(() => {
    mt(() => {
      o.value = new Map(o.value), a.value = new Map(a.value);
    });
  }, 100);
  te(() => [n.value, rt(r)], () => {
    e.itemsRegistration === "props" && L();
  }, { immediate: true });
  function L() {
    const C = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), w = rt(r) ? ($) => ee($.raw) : ($) => $.value, E = [...n.value];
    let I = 0;
    for (; I < E.length; ) {
      const $ = E[I++], R = w($);
      if ($.children) {
        const B = [];
        for (const X of $.children) {
          const Y = w(X);
          C.set(Y, R), B.push(Y), E.push(X);
        }
        x.set(R, B);
      }
      $.props.disabled && T.add(R);
    }
    o.value = x, a.value = C, l.value = T;
  }
  const _ = { id: ue(), root: { opened: u, activatable: F(() => e.activatable), scrollToActive: F(() => rt(i)), selectable: F(() => e.selectable), activated: m, selected: y, selectedValues: V(() => {
    const C = [];
    for (const [x, T] of y.value.entries()) T === "on" && C.push(x);
    return C;
  }), itemsRegistration: F(() => e.itemsRegistration), register: (C, x, T, w) => {
    if (v.has(C)) {
      h(C).map(String).join(" -> "), h(x).concat(C).map(String).join(" -> ");
      return;
    } else v.add(C);
    x && C !== x && a.value.set(C, x), T && l.value.add(C), w && o.value.set(C, []), x != null && o.value.set(x, [...o.value.get(x) || [], C]), b();
  }, unregister: (C) => {
    if (s) return;
    v.delete(C), o.value.delete(C), l.value.delete(C);
    const x = a.value.get(C);
    if (x) {
      const T = o.value.get(x) ?? [];
      o.value.set(x, T.filter((w) => w !== C));
    }
    a.value.delete(C), b();
  }, updateDisabled: (C, x) => {
    x ? l.value.add(C) : l.value.delete(C);
  }, open: (C, x, T) => {
    S.emit("click:open", { id: C, value: x, path: h(C), event: T });
    const w = d.value.open({ id: C, value: x, opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, openOnSelect: (C, x, T) => {
    const w = d.value.select({ id: C, value: x, selected: new Map(y.value), opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, select: (C, x, T) => {
    S.emit("click:select", { id: C, value: x, path: h(C), event: T });
    const w = f.value.select({ id: C, value: x, selected: new Map(y.value), children: o.value, parents: a.value, disabled: l.value, event: T });
    w && (y.value = w), _.root.openOnSelect(C, x, T);
  }, activate: (C, x, T) => {
    if (!e.activatable) return _.root.select(C, true, T);
    S.emit("click:activate", { id: C, value: x, path: h(C), event: T });
    const w = c.value.activate({ id: C, value: x, activated: new Set(m.value), children: o.value, parents: a.value, event: T });
    if (w.size !== m.value.size) m.value = w;
    else {
      for (const E of w) if (!m.value.has(E)) {
        m.value = w;
        return;
      }
      for (const E of m.value) if (!w.has(E)) {
        m.value = w;
        return;
      }
    }
  }, children: o, parents: a, disabled: l, getPath: h } };
  return qe(ur, _), _.root;
}, Wd = (e, t, n) => {
  const r = ke(ur, zd), i = Symbol("nested item"), s = V(() => {
    const a = ee(rt(e));
    return a !== void 0 ? a : i;
  }), o = { ...r, id: s, open: (a, l) => r.root.open(s.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(s.value, a, l), isOpen: V(() => r.root.opened.value.has(s.value)), parent: V(() => r.root.parents.value.get(s.value)), activate: (a, l) => r.root.activate(s.value, a, l), isActivated: V(() => r.root.activated.value.has(s.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(s.value, a, l), isSelected: V(() => r.root.selected.value.get(s.value) === "on"), isIndeterminate: V(() => r.root.selected.value.get(s.value) === "indeterminate"), isLeaf: V(() => !r.root.children.value.get(s.value)), isGroupActivator: r.isGroupActivator };
  return hs(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || mt(() => {
      r.root.register(s.value, r.id.value, rt(t), n);
    });
  }), Lt(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(s.value);
  }), te(s, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), mt(() => {
      r.root.register(a, r.id.value, rt(t), n);
    }));
  }), te(() => rt(t), (a) => {
    r.root.updateDisabled(s.value, a);
  }), n && qe(ur, o), o;
}, ky = () => {
  const e = ke(ur, zd);
  qe(ur, { ...e, isGroupActivator: true });
};
function Gd() {
  const e = ue(false);
  return Ot(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: F(() => e.value ? void 0 : { transition: "none !important" }), isBooted: tr(e) };
}
const My = vr({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return ky(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), Ty = J({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...Ge(), ..._t() }, "VListGroup"), kc = Le()({ name: "VListGroup", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: i, id: s } = Wd(() => e.value, () => e.disabled, true), o = V(() => `v-list-group--id-${String(e.rawId ?? s.value)}`), a = Fd(), { isBooted: l } = Gd(), u = ke(ur), c = F(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(h) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = h.target) == null ? void 0 : _a2.tagName) || i(!r.value, h);
  }
  const d = V(() => ({ onClick: f, class: "v-list-group__header", id: o.value })), m = V(() => r.value ? e.collapseIcon : e.expandIcon), y = V(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return Fe(() => M(e.tag, { class: Ae(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: Re(e.style) }, { default: () => [n.activator && M(Mt, { defaults: y.value }, { default: () => [M(My, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), M(Un, { transition: { component: Rd }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? rr(P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[la, r.value]]) : r.value && P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), Py = J({ opacity: [Number, String], ...Ge(), ..._t() }, "VListItemSubtitle"), Iy = Le()({ name: "VListItemSubtitle", props: Py(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => M(e.tag, { class: Ae(["v-list-item-subtitle", e.class]), style: Re([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Ry = X1("v-list-item-title"), Oy = J({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Fr(), onClickOnce: Fr(), ...pr(), ...Ge(), ...bi(), ...br(), ..._i(), ...Dn(), ...xd(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VListItem"), Ro = Le()({ name: "VListItem", directives: { vRipple: Mo }, props: Oy(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const s = Cd(e, n), o = q(), a = V(() => e.value === void 0 ? s.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: m, isGroupActivator: y, root: h, parent: S, openOnSelect: v, scrollToActive: b, id: L } = Wd(a, () => e.disabled, false), _ = Fd(), C = V(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = s.isActive) == null ? void 0 : _a2.value) || (h.activatable.value ? u.value : d.value));
  }), x = F(() => e.link !== false && s.isLink.value), T = V(() => !!_ && (h.selectable.value || h.activatable.value || e.value != null)), w = V(() => !e.disabled && e.link !== false && (e.link || s.isClickable.value || T.value)), E = V(() => _ && _.navigationStrategy.value === "track" && e.index !== void 0 && _.trackingIndex.value === e.index), I = V(() => _ ? x.value ? "link" : T.value ? "option" : "listitem" : void 0), $ = V(() => {
    if (T.value) return h.activatable.value ? u.value : h.selectable.value ? d.value : C.value;
  }), R = F(() => e.rounded || e.nav), B = F(() => e.color ?? e.activeColor), X = F(() => ({ color: C.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  te(() => {
    var _a2;
    return (_a2 = s.isActive) == null ? void 0 : _a2.value;
  }, (U) => {
    U && Y();
  }), te(u, (U) => {
    var _a2;
    !U || !b || ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), te(E, (U) => {
    var _a2;
    U && ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), hs(() => {
    var _a2;
    ((_a2 = s.isActive) == null ? void 0 : _a2.value) && mt(() => Y());
  });
  function Y() {
    S.value != null && h.open(S.value, true), v(true);
  }
  const { themeClasses: ne } = Kt(e), { borderClasses: le } = yr(e), { colorClasses: ce, colorStyles: Ve, variantClasses: _e } = xa(X), { densityClasses: se } = wi(e), { dimensionStyles: ge } = wr(e), { elevationClasses: he } = Si(e), { roundedClasses: je } = Hn(R), Ze = F(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $e = F(() => e.ripple !== void 0 && e.ripple && (_ == null ? void 0 : _.filterable) ? { keys: ["Enter"] } : e.ripple), k = V(() => ({ isActive: C.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function j(U) {
    var _a2, _b2, _c2;
    i("click", U), !["INPUT", "TEXTAREA"].includes((_a2 = U.target) == null ? void 0 : _a2.tagName) && w.value && ((_c2 = (_b2 = s.navigate).value) == null ? void 0 : _c2.call(_b2, U), !y && (h.activatable.value ? l(!u.value, U) : (h.selectable.value || e.value != null && !x.value) && c(!d.value, U)));
  }
  function W(U) {
    const pe = U.target;
    ["INPUT", "TEXTAREA"].includes(pe.tagName) || (U.key === "Enter" || U.key === " " && !(_ == null ? void 0 : _.filterable)) && (U.preventDefault(), U.stopPropagation(), U.target.dispatchEvent(new MouseEvent("click", U)));
  }
  return Fe(() => {
    const U = x.value ? "a" : e.tag, pe = r.title || e.title != null, g = r.subtitle || e.subtitle != null, A = !!(!!(e.appendAvatar || e.appendIcon) || r.append), H = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return _ == null ? void 0 : _.updateHasPrepend(H), e.activeColor && Yf("active-color", ["color", "base-color"]), rr(M(U, Te(s.linkProps, { ref: o, id: e.index !== void 0 && _ ? `v-list-item-${_.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": C.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !H && (_ == null ? void 0 : _.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": E.value, [`${e.activeClass}`]: e.activeClass && C.value }, ne.value, le.value, ce.value, se.value, he.value, Ze.value, je.value, _e.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, Ve.value, ge.value, e.style], tabindex: e.tabindex ?? (w.value ? _ ? -2 : 0 : void 0), "aria-selected": $.value, role: I.value, onClick: j, onKeydown: w.value && !x.value && W }), { default: () => {
      var _a2;
      return [Ca(w.value || C.value, "v-list-item"), H && P("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? M(Mt, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, k.value)];
      } }) : P(ye, null, [e.prependAvatar && M(Ec, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && M(it, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), P("div", { class: "v-list-item__spacer" }, null)]), P("div", { class: "v-list-item__content", "data-no-activator": "" }, [pe && M(Ry, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? be(e.title)];
      } }), g && M(Iy, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? be(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, k.value)]), A && P("div", { key: "append", class: "v-list-item__append" }, [r.append ? M(Mt, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, k.value)];
      } }) : P(ye, null, [e.appendIcon && M(it, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && M(Ec, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), P("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Mo, w.value && $e.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: y, isSelected: d, list: _, select: c, root: h, id: L, link: s };
} }), Vy = J({ color: String, inset: Boolean, sticky: Boolean, title: String, ...Ge(), ..._t() }, "VListSubheader"), Dy = Le()({ name: "VListSubheader", props: Vy(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: i } = ii(() => e.color);
  return Fe(() => {
    const s = !!(n.default || e.title);
    return M(e.tag, { class: Ae(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: Re([{ textColorStyles: i }, e.style]) }, { default: () => {
      var _a2;
      return [s && P("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), Hy = J({ items: Array, returnObject: Boolean }, "VListChildren"), Ud = Le()({ name: "VListChildren", props: Hy(), setup(e, t) {
  let { slots: n } = t;
  return Nd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, i) => {
      var _a3, _b3;
      let { children: s, props: o, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: o })) ?? M(sy, o, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? M(Dy, o, null);
      const u = { subtitle: n.subtitle ? (f) => {
        var _a4;
        return (_a4 = n.subtitle) == null ? void 0 : _a4.call(n, { ...f, item: l });
      } : void 0, prepend: n.prepend ? (f) => {
        var _a4;
        return (_a4 = n.prepend) == null ? void 0 : _a4.call(n, { ...f, item: l });
      } : void 0, append: n.append ? (f) => {
        var _a4;
        return (_a4 = n.append) == null ? void 0 : _a4.call(n, { ...f, item: l });
      } : void 0, title: n.title ? (f) => {
        var _a4;
        return (_a4 = n.title) == null ? void 0 : _a4.call(n, { ...f, item: l });
      } : void 0 }, c = kc.filterProps(o);
      return s ? M(kc, Te(c, { value: e.returnObject ? l : o == null ? void 0 : o.value, rawId: o == null ? void 0 : o.value }), { activator: (f) => {
        let { props: d } = f;
        const m = Te(o, d, { value: e.returnObject ? l : o.value });
        return n.header ? n.header({ props: m }) : M(Ro, Te(m, { index: i }), u);
      }, default: () => M(Ud, { items: s, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...o, index: i } }) : M(Ro, Te(o, { index: i, value: e.returnObject ? l : o.value }), u);
    }));
  };
} }), Ny = J({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), Fy = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function $y(e, t) {
  const n = lr(t) ? t : Er(t, e.itemTitle), r = lr(t) ? t : Er(t, e.itemValue, void 0), i = Er(t, e.itemChildren), s = e.itemProps === true ? Vn(t, ["children"]) : Er(t, e.itemProps);
  let o = Er(t, e.itemType, "item");
  Fy.has(o) || (o = "item");
  const a = { title: n, value: r, ...s };
  return { type: o, title: a.title, value: a.value, props: a, children: o === "item" && i ? Zd(e, i) : void 0, raw: t };
}
function Zd(e, t) {
  const n = [];
  for (const r of t) n.push($y(e, r));
  return n;
}
function By(e) {
  return { items: V(() => Zd(e, e.items)) };
}
const jy = J({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Fr(), "onClick:select": Fr(), "onUpdate:opened": Fr(), ...Ly({ selectStrategy: "single-leaf", openStrategy: "list" }), ...pr(), ...Ge(), ...bi(), ...br(), ..._i(), ...Ny(), ...Dn(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VList"), zy = Le()({ name: "VList", props: jy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const { items: s } = By(e), { themeClasses: o } = Kt(e), { backgroundColorClasses: a, backgroundColorStyles: l } = _s(() => e.bgColor), { borderClasses: u } = yr(e), { densityClasses: c } = wi(e), { dimensionStyles: f } = wr(e), { elevationClasses: d } = Si(e), { roundedClasses: m } = Hn(e), { children: y, open: h, parents: S, select: v, getPath: b } = Ey(e, { items: s, returnObject: F(() => e.returnObject), scrollToActive: F(() => e.navigationStrategy === "track") }), L = F(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = F(() => e.activeColor), C = F(() => e.baseColor), x = F(() => e.color), T = F(() => e.selectable || e.activatable), w = Zt(e, "navigationIndex", -1, (se) => se ?? -1), E = hr();
  Nd({ filterable: e.filterable, trackingIndex: w, navigationStrategy: F(() => e.navigationStrategy), uid: E }), te(s, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), ws({ VListGroup: { activeColor: _, baseColor: C, color: x, expandIcon: F(() => e.expandIcon), collapseIcon: F(() => e.collapseIcon) }, VListItem: { activeClass: F(() => e.activeClass), activeColor: _, baseColor: C, color: x, density: F(() => e.density), disabled: F(() => e.disabled), lines: F(() => e.lines), nav: F(() => e.nav), slim: F(() => e.slim), variant: F(() => e.variant), tabindex: F(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const I = ue(false), $ = q();
  function R(se) {
    I.value = true;
  }
  function B(se) {
    I.value = false;
  }
  function X(se) {
    var _a2;
    e.navigationStrategy === "track" ? ~w.value || (w.value = le("first")) : !I.value && !(se.relatedTarget && ((_a2 = $.value) == null ? void 0 : _a2.contains(se.relatedTarget))) && _e();
  }
  function Y() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function ne(se) {
    switch (se) {
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
  function le(se) {
    const ge = s.value.length;
    if (ge === 0) return -1;
    let he;
    se === "first" ? he = 0 : se === "last" ? he = ge - 1 : (he = w.value + (se === "next" ? 1 : -1), he < 0 && (he = ge - 1), he >= ge && (he = 0));
    const je = he;
    let Ze = 0;
    for (; Ze < ge; ) {
      const $e = s.value[he];
      if ($e && $e.type !== "divider" && $e.type !== "subheader") return he;
      if (he += se === "next" || se === "first" ? 1 : -1, he < 0 && (he = ge - 1), he >= ge && (he = 0), he === je) return -1;
      Ze++;
    }
    return -1;
  }
  function ce(se) {
    const ge = se.target;
    if (!$.value || ge.tagName === "INPUT" && ["Home", "End"].includes(se.key) || ge.tagName === "TEXTAREA") return;
    const he = ne(se.key);
    if (he !== null) if (se.preventDefault(), e.navigationStrategy === "track") {
      const je = le(he);
      je !== -1 && (w.value = je);
    } else _e(he);
  }
  function Ve(se) {
    I.value = true;
  }
  function _e(se) {
    if ($.value) return $r($.value, se);
  }
  return Fe(() => {
    const se = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), ge = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return M(e.tag, { ref: $, class: Ae(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, a.value, u.value, c.value, d.value, L.value, m.value, e.class]), style: Re([{ "--v-list-indent": ve(se), "--v-list-group-prepend": se ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${E}-${w.value}` : void 0, "aria-multiselectable": ge, onFocusin: R, onFocusout: B, onFocus: X, onBlur: Y, onKeydown: ce, onMousedown: Ve }, { default: () => [M(Ud, { items: s.value, returnObject: e.returnObject }, r)] });
  }), { open: h, select: v, focus: _e, children: y, parents: S, getPath: b, navigationIndex: w };
} });
function Qs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Wy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mc(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: r } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Qs({ x: i, y: s }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: r } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, s = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return Qs({ x: i, y: s }, t);
  }
  return Qs({ x: t.width / 2, y: t.height / 2 }, t);
}
const Kd = { static: Zy, connected: Yy }, Gy = J({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Kd }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function Uy(e, t) {
  const n = q({}), r = q();
  Oe && xi(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    te(() => e.locationStrategy, a), ct(() => {
      window.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", s), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", o), r.value = void 0;
    }), window.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", s, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", o, { passive: true }), typeof e.locationStrategy == "function" ? r.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : r.value = (_b2 = Kd[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function i(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function s(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function o(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  return { contentStyles: n, updateLocation: r };
}
function Zy() {
}
function Ky(e, t) {
  const n = od(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Yy(e, t, n) {
  (Array.isArray(e.target.value) || rp(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: i, preferredOrigin: s } = ya(() => {
    const v = So(t.location, e.isRtl.value), b = t.origin === "overlap" ? v : t.origin === "auto" ? Us(v) : So(t.origin, e.isRtl.value);
    return v.side === b.side && v.align === Zs(b).align ? { preferredAnchor: Yl(v), preferredOrigin: Yl(b) } : { preferredAnchor: v, preferredOrigin: b };
  }), [o, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => V(() => {
    const b = parseFloat(t[v]);
    return isNaN(b) ? 1 / 0 : b;
  })), c = V(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const m = new p1(4), y = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((b) => {
      b !== d && m.clear(), requestAnimationFrame((L) => {
        d = L;
      });
    }), m.isFull) {
      const b = m.values();
      if (er(b.at(-1), b.at(-3)) && !er(b.at(-1), b.at(-2))) return;
    }
    const v = S();
    v && m.push(v.flipped);
  });
  let h = new At({ x: 0, y: 0, width: 0, height: 0 });
  te(e.target, (v, b) => {
    b && !Array.isArray(b) && y.unobserve(b), Array.isArray(v) ? er(v, b) || S() : v && y.observe(v);
  }, { immediate: true }), te(e.contentEl, (v, b) => {
    b && y.unobserve(b), v && y.observe(v);
  }, { immediate: true }), ct(() => {
    y.disconnect();
  });
  function S() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (h = sd(e.target.value));
    const v = Ky(e.contentEl.value, e.isRtl.value), b = Ji(e.contentEl.value), L = Number(t.viewportMargin);
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = b.reduce((B, X) => {
      const Y = C1(X);
      return B ? new At({ x: Math.max(B.left, Y.left), y: Math.max(B.top, Y.top), width: Math.min(B.right, Y.right) - Math.max(B.left, Y.left), height: Math.min(B.bottom, Y.bottom) - Math.max(B.top, Y.top) }) : Y;
    }, void 0);
    t.stickToTarget ? (_.x += Math.min(L, h.x), _.y += Math.min(L, h.y), _.width = Math.max(_.width - L * 2, h.x + h.width - L), _.height = Math.max(_.height - L * 2, h.y + h.height - L)) : (_.x += L, _.y += L, _.width -= L * 2, _.height -= L * 2);
    let C = { anchor: i.value, origin: s.value };
    function x(B) {
      const X = new At(v), Y = Mc(B.anchor, h), ne = Mc(B.origin, X);
      let { x: le, y: ce } = Wy(Y, ne);
      switch (B.anchor.side) {
        case "top":
          ce -= c.value[0];
          break;
        case "bottom":
          ce += c.value[0];
          break;
        case "left":
          le -= c.value[0];
          break;
        case "right":
          le += c.value[0];
          break;
      }
      switch (B.anchor.align) {
        case "top":
          ce -= c.value[1];
          break;
        case "bottom":
          ce += c.value[1];
          break;
        case "left":
          le -= c.value[1];
          break;
        case "right":
          le += c.value[1];
          break;
      }
      return X.x += le, X.y += ce, X.width = Math.min(X.width, l.value), X.height = Math.min(X.height, u.value), { overflows: Xl(X, _), x: le, y: ce };
    }
    let T = 0, w = 0;
    const E = { x: 0, y: 0 }, I = { x: false, y: false };
    let $ = -1;
    for (; !($++ > 10); ) {
      const { x: B, y: X, overflows: Y } = x(C);
      T += B, w += X, v.x += B, v.y += X;
      {
        const ne = ql(C.anchor), le = Y.x.before || Y.x.after, ce = Y.y.before || Y.y.after;
        let Ve = false;
        if (["x", "y"].forEach((_e) => {
          if (_e === "x" && le && !I.x || _e === "y" && ce && !I.y) {
            const se = { anchor: { ...C.anchor }, origin: { ...C.origin } }, ge = _e === "x" ? ne === "y" ? Zs : Us : ne === "y" ? Us : Zs;
            se.anchor = ge(se.anchor), se.origin = ge(se.origin);
            const { overflows: he } = x(se);
            (he[_e].before <= Y[_e].before && he[_e].after <= Y[_e].after || he[_e].before + he[_e].after < (Y[_e].before + Y[_e].after) / 2) && (C = se, Ve = I[_e] = true);
          }
        }), Ve) continue;
      }
      Y.x.before && (T += Y.x.before, v.x += Y.x.before), Y.x.after && (T -= Y.x.after, v.x -= Y.x.after), Y.y.before && (w += Y.y.before, v.y += Y.y.before), Y.y.after && (w -= Y.y.after, v.y -= Y.y.after);
      {
        const ne = Xl(v, _);
        E.x = _.width - ne.x.before - ne.x.after, E.y = _.height - ne.y.before - ne.y.after, T += ne.x.before, v.x += ne.x.before, w += ne.y.before, v.y += ne.y.before;
      }
      break;
    }
    const R = ql(C.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${C.anchor.side} ${C.anchor.align}`, transformOrigin: `${C.origin.side} ${C.origin.align}`, top: ve(eo(w)), left: e.isRtl.value ? void 0 : ve(eo(T)), right: e.isRtl.value ? ve(eo(-T)) : void 0, minWidth: ve(R === "y" ? Math.min(o.value, h.width) : o.value), maxWidth: ve(Tc(ti(E.x, o.value === 1 / 0 ? 0 : o.value, l.value))), maxHeight: ve(Tc(ti(E.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: E, contentBox: v, flipped: I };
  }
  return te(() => [i.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => S()), mt(() => {
    const v = S();
    if (!v) return;
    const { available: b, contentBox: L } = v;
    L.height > b.y && requestAnimationFrame(() => {
      S(), requestAnimationFrame(() => {
        S();
      });
    });
  }), { updateLocation: S };
}
function eo(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Tc(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Oo = true;
const ts = [];
function qy(e) {
  !Oo || ts.length ? (ts.push(e), Vo()) : (Oo = false, e(), Vo());
}
let Pc = -1;
function Vo() {
  cancelAnimationFrame(Pc), Pc = requestAnimationFrame(() => {
    const e = ts.shift();
    e && e(), ts.length ? Vo() : Oo = true;
  });
}
const Yd = { none: null, close: Qy, block: e0, reposition: t0 }, Xy = J({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Yd } }, "VOverlay-scroll-strategies");
function Jy(e, t) {
  if (!Oe) return;
  let n;
  on(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Gr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = Yd[e.scrollStrategy]) == null ? void 0 : _a2.call(Yd, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Qy(e) {
  function t(n) {
    e.isActive.value = false;
  }
  qd(Ia(e.target.value, e.contentEl.value), t);
}
function e0(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ia(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Ji(r, t.contained ? n : void 0), ...Ji(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => _a(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", ve(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", ve(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", ve(s)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    i.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function t0(e, t, n) {
  let r = false, i = -1, s = -1;
  function o(a) {
    qy(() => {
      var _a2, _b2;
      const l = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, a), r = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      qd(Ia(e.target.value, e.contentEl.value), (a) => {
        r ? (cancelAnimationFrame(i), i = requestAnimationFrame(() => {
          i = requestAnimationFrame(() => {
            o(a);
          });
        })) : o(a);
      });
    });
  }), ct(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(i);
  });
}
function Ia(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function qd(e, t) {
  const n = [document, ...Ji(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, { passive: true });
  }), ct(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const Do = Symbol.for("vuetify:v-menu"), n0 = J({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function r0(e, t) {
  let n = () => {
  };
  function r(o, a) {
    n == null ? void 0 : n();
    const l = o ? e.openDelay : e.closeDelay, u = Math.max((a == null ? void 0 : a.minDelay) ?? 0, Number(l ?? 0));
    return new Promise((c) => {
      n = b1(u, () => {
        t == null ? void 0 : t(o), c(o);
      });
    });
  }
  function i() {
    return r(true);
  }
  function s(o) {
    return r(false, o);
  }
  return { clearDelay: n, runOpenDelay: i, runCloseDelay: s };
}
const i0 = J({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...n0() }, "VOverlay-activator");
function s0(e, t) {
  let { isActive: n, isTop: r, contentEl: i } = t;
  const s = Ue("useActivator"), o = q();
  let a = false, l = false, u = true;
  const c = V(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = V(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: m } = r0(e, (w) => {
    w === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== w && (u = true), n.value = w);
  }), y = q(), h = { onClick: (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (y.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    a = true, o.value = w.currentTarget || w.target, d();
  }, onMouseleave: (w) => {
    a = false, m();
  }, onFocus: (w) => {
    y1(w.target, ":focus-visible") !== false && (l = true, w.stopPropagation(), o.value = w.currentTarget || w.target, d());
  }, onBlur: (w) => {
    l = false, w.stopPropagation(), m({ minDelay: 1 });
  } }, S = V(() => {
    const w = {};
    return f.value && (w.onClick = h.onClick), e.openOnHover && (w.onMouseenter = h.onMouseenter, w.onMouseleave = h.onMouseleave), c.value && (w.onFocus = h.onFocus, w.onBlur = h.onBlur), w;
  }), v = V(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      a = true, d();
    }, w.onMouseleave = () => {
      a = false, m();
    }), c.value && (w.onFocusin = (E) => {
      E.target.matches(":focus-visible") && (l = true, d());
    }, w.onFocusout = () => {
      l = false, m({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const E = ke(Do, null);
      w.onClick = () => {
        n.value = false, E == null ? void 0 : E.closeParents();
      };
    }
    return w;
  }), b = V(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, w.onMouseleave = () => {
      a = false, m();
    }), w;
  });
  te(r, (w) => {
    var _a2;
    w && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = i.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), te(n, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, { flush: "post" });
  const L = _o();
  on(() => {
    L.value && mt(() => {
      o.value = L.el;
    });
  });
  const _ = _o(), C = V(() => e.target === "cursor" && y.value ? y.value : _.value ? _.el : Xd(e.target, s) || o.value), x = V(() => Array.isArray(C.value) ? void 0 : C.value);
  let T;
  return te(() => !!e.activator, (w) => {
    w && Oe ? (T = Gr(), T.run(() => {
      o0(e, s, { activatorEl: o, activatorEvents: S });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: o, activatorRef: L, target: C, targetEl: x, targetRef: _, activatorEvents: S, contentEvents: v, scrimEvents: b };
}
function o0(e, t, n) {
  let { activatorEl: r, activatorEvents: i } = n;
  te(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && o(c);
    }
    l && mt(() => s());
  }, { immediate: true }), te(() => e.activatorProps, () => {
    s();
  }), ct(() => {
    o();
  });
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && x1(l, Te(i.value, u));
  }
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && A1(l, Te(i.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Xd(l, t);
    return r.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function Xd(e, t) {
  var _a2, _b2;
  if (!e) return;
  let n;
  if (e === "parent") {
    let r = (_b2 = (_a2 = t == null ? void 0 : t.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.parentNode;
    for (; r == null ? void 0 : r.hasAttribute("data-no-activator"); ) r = r.parentNode;
    n = r;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const a0 = J({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ni = /* @__PURE__ */ new Map();
let Ic = 0;
function Rc(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Ni.values()).filter((u) => {
    var _a2;
    let { isActive: c, contentEl: f } = u;
    return c.value && ((_a2 = f.value) == null ? void 0 : _a2.contains(t));
  }).map((u) => u.contentEl.value);
  let r, i = t.parentElement;
  for (; i; ) {
    if (n.includes(i)) {
      r = i;
      break;
    }
    i = i.parentElement;
  }
  if (!r) return;
  const s = Qn(r).filter((u) => u.tabIndex >= 0);
  if (!s.length) return;
  const o = document.activeElement;
  if (s.length === 1 && s[0].classList.contains("v-list") && s[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const a = s[0], l = s[s.length - 1];
  e.shiftKey && (o === a || a.classList.contains("v-list") && a.contains(o)) && (e.preventDefault(), l.focus()), !e.shiftKey && (o === l || l.classList.contains("v-list") && l.contains(o)) && (e.preventDefault(), a.focus());
}
function l0(e, t) {
  let { isActive: n, localTop: r, contentEl: i } = t;
  const s = Symbol("trap");
  let o = false, a = -1;
  async function l() {
    o = true, a = window.setTimeout(() => {
      o = false;
    }, 100);
  }
  async function u(d) {
    var _a2;
    const m = d.relatedTarget, y = d.target;
    document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", c), await mt(), n.value && !o && m !== y && i.value && rt(r) && ![document, i.value].includes(y) && !i.value.contains(y) && ((_a2 = Qn(i.value)[0]) == null ? void 0 : _a2.focus());
  }
  function c(d) {
    if (d.key === "Tab" && (document.removeEventListener("keydown", c), n.value && i.value && d.target && !i.value.contains(d.target))) {
      const m = Qn(document.documentElement);
      if (d.shiftKey && d.target === m.at(0) || !d.shiftKey && d.target === m.at(-1)) {
        const y = Qn(i.value);
        y.length > 0 && (d.preventDefault(), y[0].focus());
      }
    }
  }
  const f = F(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Oe && (te(() => e.retainFocus, (d) => {
    d ? Ni.set(s, { isActive: n, contentEl: i }) : Ni.delete(s);
  }, { immediate: true }), te(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Ic++ < 1 && document.addEventListener("keydown", Rc)), ct(() => {
    Ni.delete(s), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Ic < 1 && document.removeEventListener("keydown", Rc);
  });
}
function c0() {
  if (!Oe) return ue(false);
  const { ssr: e } = Id();
  if (e) {
    const t = ue(false);
    return Ot(() => {
      t.value = true;
    }), t;
  } else return ue(true);
}
const u0 = J({ eager: Boolean }, "lazy");
function f0(e, t) {
  const n = ue(false), r = F(() => n.value || e.eager || t.value);
  te(t, () => n.value = true);
  function i() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: r, onAfterLeave: i };
}
function Ra() {
  const t = Ue("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Oc = Symbol.for("vuetify:stack"), kr = Ke([]);
function d0(e, t, n) {
  const r = Ue("useStack"), i = !n, s = ke(Oc, void 0), o = Ke({ activeChildren: /* @__PURE__ */ new Set() });
  qe(Oc, o);
  const a = ue(Number(rt(t)));
  xi(e, () => {
    var _a2;
    const c = (_a2 = kr.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(rt(t)), i && kr.push([r.uid, a.value]), s == null ? void 0 : s.activeChildren.add(r.uid), ct(() => {
      if (i) {
        const f = ee(kr).findIndex((d) => d[0] === r.uid);
        kr.splice(f, 1);
      }
      s == null ? void 0 : s.activeChildren.delete(r.uid);
    });
  });
  const l = ue(true);
  return i && on(() => {
    var _a2;
    const c = ((_a2 = kr.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: tr(l), localTop: F(() => !o.activeChildren.size), stackStyles: F(() => ({ zIndex: a.value })) };
}
function m0(e) {
  return { teleportTarget: V(() => {
    const n = e();
    if (n === true || !Oe) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let i = [...r.children].find((s) => s.matches(".v-overlay-container"));
    return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
  }) };
}
function h0() {
  return true;
}
function Jd(e, t, n) {
  if (!e || Qd(e, n) === false) return false;
  const r = dd(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return false;
  const i = (typeof n.value == "object" && n.value.include || (() => []))();
  return i.push(t), !i.some((s) => s == null ? void 0 : s.contains(e.target));
}
function Qd(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || h0)(e);
}
function g0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Jd(e, t, n) && setTimeout(() => {
    Qd(e, n) && r && r(e);
  }, 0);
}
function Vc(e, t) {
  const n = dd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Dc = { mounted(e, t) {
  const n = (i) => g0(i, e, t), r = (i) => {
    e._clickOutside.lastMousedownWasOutside = Jd(i, e, t);
  };
  Vc(e, (i) => {
    i.addEventListener("click", n, true), i.addEventListener("mousedown", r, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: r };
}, beforeUnmount(e, t) {
  e._clickOutside && (Vc(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: r, onMousedown: i } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", r, true), n.removeEventListener("mousedown", i, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function v0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return M(ar, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && P("div", Te({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Oa = J({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...i0(), ...Ge(), ...br(), ...u0(), ...Gy(), ...Xy(), ...a0(), ...Vt(), ...Vd() }, "VOverlay"), ns = Le()({ name: "VOverlay", directives: { vClickOutside: Dc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Vn(Oa(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: i } = t;
  const s = Ue("VOverlay"), o = q(), a = q(), l = q(), u = Zt(e, "modelValue"), c = V({ get: () => u.value, set: (k) => {
    k && e.disabled || (u.value = k);
  } }), { themeClasses: f } = Kt(e), { rtlClasses: d, isRtl: m } = _r(), { hasContent: y, onAfterLeave: h } = f0(e, c), S = _s(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: v, localTop: b, stackStyles: L } = d0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: _, activatorRef: C, target: x, targetEl: T, targetRef: w, activatorEvents: E, contentEvents: I, scrimEvents: $ } = s0(e, { isActive: c, isTop: b, contentEl: l }), { teleportTarget: R } = m0(() => {
    var _a2, _b2, _c2;
    const k = e.attach || e.contained;
    if (k) return k;
    const j = ((_a2 = _ == null ? void 0 : _.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = s.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return j instanceof ShadowRoot ? j : false;
  }), { dimensionStyles: B } = wr(e), X = c0(), { scopeId: Y } = Ra();
  te(() => e.disabled, (k) => {
    k && (c.value = false);
  });
  const { contentStyles: ne, updateLocation: le } = Uy(e, { isRtl: m, contentEl: l, target: x, isActive: c });
  Jy(e, { root: o, contentEl: l, targetEl: T, target: x, isActive: c, updateLocation: le });
  function ce(k) {
    i("click:outside", k), e.persistent ? je() : c.value = false;
  }
  function Ve(k) {
    return c.value && b.value && (!e.scrim || k.target === a.value || k instanceof MouseEvent && k.shadowTarget === a.value);
  }
  l0(e, { isActive: c, localTop: b, contentEl: l }), Oe && te(c, (k) => {
    k ? window.addEventListener("keydown", _e) : window.removeEventListener("keydown", _e);
  }, { immediate: true }), Lt(() => {
    Oe && window.removeEventListener("keydown", _e);
  });
  function _e(k) {
    var _a2, _b2, _c2;
    k.key === "Escape" && v.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || i("keydown", k), e.persistent ? je() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = _.value) == null ? void 0 : _c2.focus())));
  }
  function se(k) {
    k.key === "Escape" && !v.value || i("keydown", k);
  }
  const ge = Zp();
  xi(() => e.closeOnBack, () => {
    Kp(ge, (k) => {
      v.value && c.value ? (k(false), e.persistent ? je() : c.value = false) : k();
    });
  });
  const he = q();
  te(() => c.value && (e.absolute || e.contained) && R.value == null, (k) => {
    if (k) {
      const j = tp(o.value);
      j && j !== document.scrollingElement && (he.value = j.scrollTop);
    }
  });
  function je() {
    e.noClickAnimation || l.value && An(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: xo });
  }
  function Ze() {
    i("afterEnter");
  }
  function $e() {
    h(), i("afterLeave");
  }
  return Fe(() => {
    var _a2;
    return P(ye, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: w, props: Te({ ref: C }, E.value, e.activatorProps) }), X.value && y.value && M(vh, { disabled: !R.value, to: R.value }, { default: () => [P("div", Te({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [L.value, { "--v-overlay-opacity": e.opacity, top: ve(he.value) }, e.style], ref: o, onKeydown: se }, Y, r), [M(v0, Te({ color: S, modelValue: c.value && !!e.scrim, ref: a }, $.value), null), M(Un, { appear: true, persisted: true, transition: e.transition, target: x.value, onAfterEnter: Ze, onAfterLeave: $e }, { default: () => {
      var _a3;
      return [rr(P("div", Te({ ref: l, class: ["v-overlay__content", e.contentClass], style: [B.value, ne.value] }, I.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[la, c.value], [Dc, { handler: ce, closeConditional: Ve, include: () => [_.value] }]])];
    } })])] })]);
  }), { activatorEl: _, scrimEl: a, target: x, animateClick: je, contentEl: l, rootEl: o, globalTop: v, localTop: b, updateLocation: le };
} }), p0 = J({ id: String, submenu: Boolean, ...Vn(Oa({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: fy } }), ["absolute"]) }, "VMenu"), y0 = Le()({ name: "VMenu", props: p0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Ra(), { isRtl: s } = _r(), o = hr(), a = F(() => e.id || `v-menu-${o}`), l = q(), u = ke(Do, null), c = ue(/* @__PURE__ */ new Set());
  qe(Do, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(h) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (h == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !w1(h, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Lt(() => u == null ? void 0 : u.unregister()), na(() => r.value = false), te(r, (h) => {
    h ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(h) {
    u == null ? void 0 : u.closeParents(h);
  }
  function d(h) {
    var _a2, _b2, _c2, _d2, _e;
    if (!e.disabled) if (h.key === "Tab" || h.key === "Enter" && !e.closeOnContentClick) {
      if (h.key === "Enter" && (h.target instanceof HTMLTextAreaElement || h.target instanceof HTMLInputElement && h.target.closest("form"))) return;
      h.key === "Enter" && h.preventDefault(), !rd(Qn((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), h.shiftKey ? "prev" : "next", (v) => v.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && h.key === (s.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function m(h) {
    var _a2;
    if (e.disabled) return;
    const S = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    S && r.value ? h.key === "ArrowDown" ? (h.preventDefault(), h.stopImmediatePropagation(), $r(S, "next")) : h.key === "ArrowUp" ? (h.preventDefault(), h.stopImmediatePropagation(), $r(S, "prev")) : e.submenu && (h.key === (s.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : h.key === (s.value ? "ArrowLeft" : "ArrowRight") && (h.preventDefault(), $r(S, "first"))) : (e.submenu ? h.key === (s.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(h.key)) && (r.value = true, h.preventDefault(), setTimeout(() => setTimeout(() => m(h))));
  }
  const y = V(() => Te({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: m }, e.activatorProps));
  return Fe(() => {
    const h = ns.filterProps(e);
    return M(ns, Te({ ref: l, id: a.value, class: ["v-menu", e.class], style: e.style }, h, { modelValue: r.value, "onUpdate:modelValue": (S) => r.value = S, absolute: true, activatorProps: y.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": f, onKeydown: d }, i), { activator: n.activator, default: function() {
      for (var S = arguments.length, v = new Array(S), b = 0; b < S; b++) v[b] = arguments[b];
      return M(Mt, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...v)];
      } });
    } });
  }), Hd({ id: a, \u03A8openChildren: c }, l);
} }), Dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t) n[r] = i;
  return n;
}, b0 = Xe({ __name: "AppBackground", setup(e) {
  const t = ua("AppBackground"), n = q(null), r = q(null), i = dv(), s = gr(), o = gv(i.gridInfo, s.worldOffsetDevicePx), a = vv(), l = pv(o), u = Sv(i.post);
  u1(i);
  function c(_) {
    return { ..._, edge: { ..._.edge } };
  }
  function f(_) {
    return _.map(c);
  }
  const d = fv({ onSetZones: (_) => i.post({ type: "set_zones", zones: f(_) }), onAddZone: (_) => i.post({ type: "add_zone", zone: c(_) }), onUpdateZone: (_) => i.post({ type: "update_zone", zone: c(_) }), onRemoveZone: (_) => i.post({ type: "remove_zone", id: _ }), onClearZones: () => i.post({ type: "clear_zones" }) }), m = q(false), y = q(false), h = q({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: S } = Nf();
  te(S, (_) => {
    i.post({ type: "set_theme", theme: _ });
  });
  function v(_) {
    const C = Date.now(), x = h.value;
    return { id: crypto.randomUUID(), x1: _.x1, y1: _.y1, x2: _.x2, y2: _.y2, mode: x.mode, edge: { ...x.edge }, enabled: true, createdAt: C, updatedAt: C };
  }
  l.register("zone", { isEnabled: () => m.value, priority: 1, snapMajor: () => y.value, onCommit(_) {
    d.addZone(v(_));
  } });
  function b(_) {
    if (l.anyToolEnabled() || o.isInteractiveTarget(_.target)) return;
    const C = o.makeSnapshot();
    if (!C) return;
    const x = If(_.clientX, _.clientY, C), T = Kg(x, C);
    t.debug("Click \u2192", _.clientX, _.clientY, "\u2192 cell", T.cx, T.cy), i.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: C.offsetY });
  }
  let L = null;
  return Ot(() => {
    const _ = n.value, C = r.value;
    if (!_ || !C) return;
    const { offscreen: x, gridPitch: T } = u.initialize(_, C);
    i.init(x, T, S.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), i.on("ready", (w) => {
      t.info(`${w.backend.toUpperCase()} renderer active`), i.post({ type: "set_theme", theme: S.value }), i.post({ type: "set_zones", zones: f(d.zones.value) });
      const E = s.worldOffsetDevicePx.value;
      i.post({ type: "camera", x: E.x, y: E.y });
    }), i.on("zones_state", (w) => d.syncFromWorker(w.zones)), i.on("zones_error", (w) => t.error("Zone update rejected:", w.message)), i.on("first_frame_painted", () => u.revealCanvas()), i.on("error", (w) => {
      w.phase === "gpu-init" ? t.debug(`GPU unavailable (${w.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${w.phase}]:`, w.message);
    }), xv(i), document.addEventListener("click", b), L = l.attachListeners(), a.start(() => i.post({ type: "frame" }));
  }), di(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", b), L == null ? void 0 : L(), i.terminate();
  }), (_, C) => (oe(), me(ye, null, [P("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [P("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), ae(l).previewStyle.value ? (oe(), me("div", { key: 0, class: "zone-preview-overlay", style: Re(ae(l).previewStyle.value) }, null, 4)) : sr("", true), sr("", true)], 64));
} }), w0 = Dt(b0, [["__scopeId", "data-v-ef07b013"]]), _0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, S0 = { component: (e) => vn(vd, { ...e, class: "mdi" }) };
function C0() {
  return { svg: { component: Aa }, class: { component: vd } };
}
function x0(e) {
  const t = C0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = S0), pt({ defaultSet: n, sets: t, aliases: { ..._0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Li(e) {
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
function A0(e, t, n) {
  var _a2;
  const r = [];
  let i = [];
  const s = em(e), o = tm(e), a = n ?? ((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (s.getDay() - a + 7) % 7, u = (o.getDay() - a + 7) % 7;
  for (let c = 0; c < l; c++) {
    const f = new Date(s);
    f.setDate(f.getDate() - (l - c)), i.push(f);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const f = new Date(e.getFullYear(), e.getMonth(), c);
    i.push(f), i.length === 7 && (r.push(i), i = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const f = new Date(o);
    f.setDate(f.getDate() + c), i.push(f);
  }
  return i.length > 0 && r.push(i), r;
}
function jr(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; ) i.setDate(i.getDate() - 1);
  return i;
}
function L0(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function em(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function tm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function E0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const k0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function nm(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (k0.test(e)) return E0(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Hc = new Date(2e3, 0, 2);
function M0(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = Li(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return Qf(7).map((i) => {
    const s = new Date(Hc);
    return s.setDate(Hc.getDate() + r + i), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(s);
  });
}
function T0(e, t, n, r) {
  const i = nm(e) ?? /* @__PURE__ */ new Date(), s = r == null ? void 0 : r[t];
  if (typeof s == "function") return s(i, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      o = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const a = i.getDate(), l = new Intl.DateTimeFormat(n, { month: "long" }).format(i);
      return `${a} ${l}`;
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
      return new Intl.NumberFormat(n).format(i.getDate());
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
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    default:
      o = s ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, o).format(i);
}
function P0(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = Ul(String(n.getMonth() + 1), 2, "0"), s = Ul(String(n.getDate()), 2, "0");
  return `${r}-${i}-${s}`;
}
function I0(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function R0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function O0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function In(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function V0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function D0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ai(e) {
  return e.getFullYear();
}
function H0(e) {
  return e.getMonth();
}
function N0(e, t, n, r) {
  const i = Li(t), s = n ?? (i == null ? void 0 : i.firstDay) ?? 0, o = (i == null ? void 0 : i.firstWeekSize) ?? 1;
  return r !== void 0 ? F0(e, t, s, r) : $0(e, t, s, o);
}
function F0(e, t, n, r) {
  const i = (7 + r - n) % 7, s = jr(e, t, n), o = In(s, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ai(s);
  l < ai(o) && a(l + 1) <= i && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= i ? In(u, -c) : In(u, 7 - c);
  return 1 + is(Va(s), li(f), "weeks");
}
function $0(e, t, n, r) {
  const i = jr(e, t, n), s = In(jr(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - is(d, jr(d, t, n), "days");
  }
  let a = ai(i);
  a < ai(s) && o(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = o(a), c = u >= r ? In(l, u - 7) : In(l, u);
  return 1 + is(Va(i), li(c), "weeks");
}
function B0(e) {
  return e.getDate();
}
function j0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function z0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function W0(e) {
  return e.getHours();
}
function G0(e) {
  return e.getMinutes();
}
function U0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Z0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function K0(e, t) {
  return rs(e, t[0]) && X0(e, t[1]);
}
function Y0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function rs(e, t) {
  return e.getTime() > t.getTime();
}
function q0(e, t) {
  return rs(li(e), li(t));
}
function X0(e, t) {
  return e.getTime() < t.getTime();
}
function Nc(e, t) {
  return e.getTime() === t.getTime();
}
function J0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Q0(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function eb(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function is(e, t, n) {
  const r = new Date(e), i = new Date(t);
  switch (n) {
    case "years":
      return r.getFullYear() - i.getFullYear();
    case "quarters":
      return Math.floor((r.getMonth() - i.getMonth() + (r.getFullYear() - i.getFullYear()) * 12) / 4);
    case "months":
      return r.getMonth() - i.getMonth() + (r.getFullYear() - i.getFullYear()) * 12;
    case "weeks":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((r.getTime() - i.getTime()) / 1e3);
    default:
      return r.getTime() - i.getTime();
  }
}
function tb(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function nb(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function rb(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function ib(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function sb(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function li(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Va(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class ob {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return nm(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return P0(this, t);
  }
  parseISO(t) {
    return I0(t);
  }
  addMinutes(t, n) {
    return R0(t, n);
  }
  addHours(t, n) {
    return O0(t, n);
  }
  addDays(t, n) {
    return In(t, n);
  }
  addWeeks(t, n) {
    return V0(t, n);
  }
  addMonths(t, n) {
    return D0(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return A0(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return jr(t, this.locale, r);
  }
  endOfWeek(t) {
    return L0(t, this.locale);
  }
  startOfMonth(t) {
    return em(t);
  }
  endOfMonth(t) {
    return tm(t);
  }
  format(t, n) {
    return T0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Nc(t, n);
  }
  isValid(t) {
    return Y0(t);
  }
  isWithinRange(t, n) {
    return K0(t, n);
  }
  isAfter(t, n) {
    return rs(t, n);
  }
  isAfterDay(t, n) {
    return q0(t, n);
  }
  isBefore(t, n) {
    return !rs(t, n) && !Nc(t, n);
  }
  isSameDay(t, n) {
    return J0(t, n);
  }
  isSameMonth(t, n) {
    return Q0(t, n);
  }
  isSameYear(t, n) {
    return eb(t, n);
  }
  setMinutes(t, n) {
    return nb(t, n);
  }
  setHours(t, n) {
    return tb(t, n);
  }
  setMonth(t, n) {
    return rb(t, n);
  }
  setDate(t, n) {
    return ib(t, n);
  }
  setYear(t, n) {
    return sb(t, n);
  }
  getDiff(t, n, r) {
    return is(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return M0(this.locale, r, n);
  }
  getYear(t) {
    return ai(t);
  }
  getMonth(t) {
    return H0(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, s = r !== void 0 ? Number(r) : void 0;
    return N0(t, this.locale, i, s);
  }
  getDate(t) {
    return B0(t);
  }
  getNextMonth(t) {
    return j0(t);
  }
  getPreviousMonth(t) {
    return z0(t);
  }
  getHours(t) {
    return W0(t);
  }
  getMinutes(t) {
    return G0(t);
  }
  startOfDay(t) {
    return li(t);
  }
  endOfDay(t) {
    return Va(t);
  }
  startOfYear(t) {
    return U0(t);
  }
  endOfYear(t) {
    return Z0(t);
  }
}
const ab = Symbol.for("vuetify:date-options"), Fc = Symbol.for("vuetify:date-adapter");
function lb(e, t) {
  const n = pt({ adapter: ob, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: cb(n, t) };
}
function cb(e, t) {
  const n = Ke(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return te(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const Ho = Symbol.for("vuetify:layout"), rm = Symbol.for("vuetify:layout-item"), $c = 1e3, ub = J({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), fb = J({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function db(e) {
  const t = ke(Ho);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${hr()}`, r = Ue("useLayoutItem");
  qe(rm, { id: n });
  const i = ue(false);
  na(() => i.value = true), Qu(() => i.value = false);
  const { layoutItemStyles: s, layoutItemScrimStyles: o } = t.register(r, { ...e, active: V(() => i.value ? false : e.active.value), id: n });
  return Lt(() => t.unregister(n)), { layoutItemStyles: s, layoutRect: t.layoutRect, layoutItemScrimStyles: o };
}
const mb = (e, t, n, r) => {
  let i = { top: 0, left: 0, right: 0, bottom: 0 };
  const s = [{ id: "", layer: { ...i } }];
  for (const o of e) {
    const a = t.get(o), l = n.get(o), u = r.get(o);
    if (!a || !l || !u) continue;
    const c = { ...i, [a.value]: parseInt(i[a.value], 10) + (u.value ? parseInt(l.value, 10) : 0) };
    s.push({ id: o, layer: c }), i = c;
  }
  return s;
};
function hb(e) {
  const t = ke(Ho, null), n = V(() => t ? t.rootZIndex.value - 100 : $c), r = q([]), i = Ke(/* @__PURE__ */ new Map()), s = Ke(/* @__PURE__ */ new Map()), o = Ke(/* @__PURE__ */ new Map()), a = Ke(/* @__PURE__ */ new Map()), l = Ke(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = pd(), f = V(() => {
    const x = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const w of T.filter((E) => E.includes(":"))) {
      const [E, I] = w.split(":");
      if (!r.value.includes(E) || !r.value.includes(I)) continue;
      const $ = i.get(E), R = i.get(I), B = s.get(E), X = s.get(I);
      !$ || !R || !B || !X || (x.set(I, { position: $.value, amount: parseInt(B.value, 10) }), x.set(E, { position: R.value, amount: -parseInt(X.value, 10) }));
    }
    return x;
  }), d = V(() => {
    const x = [...new Set([...o.values()].map((w) => w.value))].sort((w, E) => w - E), T = [];
    for (const w of x) {
      const E = r.value.filter((I) => {
        var _a2;
        return ((_a2 = o.get(I)) == null ? void 0 : _a2.value) === w;
      });
      T.push(...E);
    }
    return mb(T, i, s, a);
  }), m = V(() => !Array.from(l.values()).some((x) => x.value)), y = V(() => d.value[d.value.length - 1].layer), h = F(() => ({ "--v-layout-left": ve(y.value.left), "--v-layout-right": ve(y.value.right), "--v-layout-top": ve(y.value.top), "--v-layout-bottom": ve(y.value.bottom), ...m.value ? void 0 : { transition: "none" } })), S = V(() => d.value.slice(1).map((x, T) => {
    let { id: w } = x;
    const { layer: E } = d.value[T], I = s.get(w), $ = i.get(w);
    return { id: w, ...E, size: Number(I.value), position: $.value };
  })), v = (x) => S.value.find((T) => T.id === x), b = Ue("createLayout"), L = ue(false);
  return Ot(() => {
    L.value = true;
  }), qe(Ho, { register: (x, T) => {
    let { id: w, order: E, position: I, layoutSize: $, elementSize: R, active: B, disableTransitions: X, absolute: Y } = T;
    o.set(w, E), i.set(w, I), s.set(w, $), a.set(w, B), X && l.set(w, X);
    const le = Gn(rm, b == null ? void 0 : b.vnode).indexOf(x);
    le > -1 ? r.value.splice(le, 0, w) : r.value.push(w);
    const ce = V(() => S.value.findIndex((ge) => ge.id === w)), Ve = V(() => n.value + d.value.length * 2 - ce.value * 2), _e = V(() => {
      const ge = I.value === "left" || I.value === "right", he = I.value === "right", je = I.value === "bottom", Ze = R.value ?? $.value, $e = Ze === 0 ? "%" : "px", k = { [I.value]: 0, zIndex: Ve.value, transform: `translate${ge ? "X" : "Y"}(${(B.value ? 0 : -(Ze === 0 ? 100 : Ze)) * (he || je ? -1 : 1)}${$e})`, position: Y.value || n.value !== $c ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!L.value) return k;
      const j = S.value[ce.value], W = f.value.get(w);
      return W && (j[W.position] += W.amount), { ...k, height: ge ? `calc(100% - ${j.top}px - ${j.bottom}px)` : R.value ? `${R.value}px` : void 0, left: he ? void 0 : `${j.left}px`, right: he ? `${j.right}px` : void 0, top: I.value !== "bottom" ? `${j.top}px` : void 0, bottom: I.value !== "top" ? `${j.bottom}px` : void 0, width: ge ? R.value ? `${R.value}px` : void 0 : `calc(100% - ${j.left}px - ${j.right}px)` };
    }), se = V(() => ({ zIndex: Ve.value - 1 }));
    return { layoutItemStyles: _e, layoutItemScrimStyles: se, zIndex: Ve };
  }, unregister: (x) => {
    o.delete(x), i.delete(x), s.delete(x), a.delete(x), l.delete(x), r.value = r.value.filter((T) => T !== x);
  }, mainRect: y, mainStyles: h, getLayoutItem: v, items: S, layoutRect: c, rootZIndex: n }), { layoutClasses: F(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: F(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: v, items: S, layoutRect: c, layoutRef: u };
}
function im() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: i = {}, components: s = {}, directives: o = {} } = r, a = Gr();
  return a.run(() => {
    const l = K1(r.defaults), u = ly(r.display, r.ssr), c = mp(r.theme), f = x0(r.icons), d = Np(r.locale), m = lb(r.date, d), y = py(r.goTo, d);
    function h(v) {
      for (const L in o) v.directive(L, o[L]);
      for (const L in s) v.component(L, s[L]);
      for (const L in i) v.component(L, vr({ ...i[L], name: L, aliasName: i[L].name }));
      const b = Gr();
      if (b.run(() => {
        c.install(v);
      }), v.onUnmount(() => b.stop()), v.provide(cr, l), v.provide(To, u), v.provide(ri, c), v.provide(Ao, f), v.provide(Lo, d), v.provide(ab, m.options), v.provide(Fc, m.instance), v.provide(gy, y), Oe && r.ssr) if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: L } = v;
        v.mount = function() {
          const _ = L(...arguments);
          return mt(() => u.update()), v.mount = L, _;
        };
      }
      v.mixin({ computed: { $vuetify() {
        return Ke({ defaults: Bn.call(this, cr), display: Bn.call(this, To), theme: Bn.call(this, ri), icons: Bn.call(this, Ao), locale: Bn.call(this, Lo), date: Bn.call(this, Fc) });
      } } });
    }
    function S() {
      a.stop();
    }
    return { install: h, unmount: S, defaults: l, display: u, theme: c, icons: f, locale: d, date: m, goTo: y };
  });
}
const gb = "3.12.1";
im.version = gb;
function Bn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const vb = J({ id: String, interactive: Boolean, text: String, ...Vn(Oa({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), zr = Le()({ name: "VTooltip", props: vb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Ra(), s = hr(), o = F(() => e.id || `v-tooltip-${s}`), a = q(), l = V(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = V(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = F(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = V(() => Te({ "aria-describedby": o.value }, e.activatorProps));
  return Fe(() => {
    const d = ns.filterProps(e);
    return M(ns, Te({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, d, { modelValue: r.value, "onUpdate:modelValue": (m) => r.value = m, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, i), { activator: n.activator, default: function() {
      var _a2;
      for (var m = arguments.length, y = new Array(m), h = 0; h < m; h++) y[h] = arguments[h];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...y)) ?? e.text;
    } });
  }), Hd({}, a);
} }), pb = Xe({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = Nf();
  return (n, r) => (oe(), ir(Ap, { modelValue: ae(t), "onUpdate:modelValue": r[0] || (r[0] = (i) => He(t) ? t.value = i : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: De(() => [M(Br, { value: "light", icon: ae(Dl), size: "small" }, { default: De(() => [M(it, { icon: ae(Dl) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), M(Br, { value: "system", icon: ae(Ol), size: "small" }, { default: De(() => [M(it, { icon: ae(Ol) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), M(Br, { value: "dark", icon: ae(Vl), size: "small" }, { default: De(() => [M(it, { icon: ae(Vl) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), Bc = Dt(pb, [["__scopeId", "data-v-8b2a7001"]]), sm = J({ text: String, ...Ge(), ..._t() }, "VToolbarTitle"), om = Le()({ name: "VToolbarTitle", props: sm(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => {
    const r = !!(n.default || n.text || e.text);
    return M(e.tag, { class: Ae(["v-toolbar-title", e.class]), style: Re(e.style) }, { default: () => {
      var _a2;
      return [r && P("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a2 = n.default) == null ? void 0 : _a2.call(n)])];
    } });
  }), {};
} }), yb = [null, "prominent", "default", "comfortable", "compact"], am = J({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => yb.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...pr(), ...Ge(), ..._i(), ..._d(), ...Dn(), ..._t({ tag: "header" }), ...Vt() }, "VToolbar"), jc = Le()({ name: "VToolbar", props: am(), setup(e, t) {
  var _a2;
  let { slots: n } = t;
  const { backgroundColorClasses: r, backgroundColorStyles: i } = _s(() => e.color), { borderClasses: s } = yr(e), { elevationClasses: o } = Si(e), { locationStyles: a } = Sd(e), { roundedClasses: l } = Hn(e), { themeClasses: u } = Kt(e), { rtlClasses: c } = _r(), f = ue(e.extended === null ? !!((_a2 = n.extension) == null ? void 0 : _a2.call(n)) : e.extended), d = V(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = V(() => f.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return ws({ VBtn: { variant: "text" } }), Fe(() => {
    var _a3;
    const y = !!(e.title || n.title), h = !!(n.image || e.image), S = (_a3 = n.extension) == null ? void 0 : _a3.call(n);
    return f.value = e.extended === null ? !!S : e.extended, M(e.tag, { class: Ae(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, r.value, s.value, o.value, l.value, u.value, c.value, e.class]), style: Re([i.value, a.value, e.style]) }, { default: () => [h && P("div", { key: "image", class: "v-toolbar__image" }, [n.image ? M(Mt, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : M(Dd, { key: "image-img", cover: true, src: e.image }, null)]), M(Mt, { defaults: { VTabs: { height: ve(d.value) } } }, { default: () => {
      var _a4, _b2, _c2;
      return [P("div", { class: "v-toolbar__content", style: { height: ve(d.value) } }, [n.prepend && P("div", { class: "v-toolbar__prepend" }, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n)]), y && M(om, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && P("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), M(Mt, { defaults: { VTabs: { height: ve(m.value) } } }, { default: () => [M(Rd, null, { default: () => [f.value && P("div", { class: "v-toolbar__extension", style: { height: ve(m.value) } }, [S])] })] })] });
  }), { contentHeight: d, extensionHeight: m };
} }), bb = J({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function wb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: r } = t;
  let i = 0, s = 0;
  const o = q(null), a = ue(0), l = ue(0), u = ue(0), c = ue(false), f = ue(false), d = ue(false), m = ue(false), y = ue(true), h = V(() => Number(e.scrollThreshold)), S = V(() => ti((h.value - a.value) / h.value || 0));
  function v(C) {
    const x = "window" in C ? window.innerHeight : C.clientHeight, T = "window" in C ? document.documentElement.scrollHeight : C.scrollHeight;
    return { clientHeight: x, scrollHeight: T };
  }
  function b() {
    const C = o.value;
    if (!C) return;
    const { clientHeight: x, scrollHeight: T } = v(C), w = T - x, E = (r == null ? void 0 : r.value) || 0, I = h.value + E;
    y.value = w > I;
  }
  function L() {
    b();
  }
  function _() {
    const C = o.value;
    if (!C || n && !n.value) return;
    i = a.value, a.value = "window" in C ? C.pageYOffset : C.scrollTop;
    const x = C instanceof Window ? document.documentElement.scrollHeight : C.scrollHeight;
    s !== x && (x > s && b(), s = x), f.value = a.value < i, u.value = Math.abs(a.value - h.value);
    const { clientHeight: T, scrollHeight: w } = v(C), E = a.value + T >= w - 5;
    !f.value && E && a.value >= h.value && y.value && (m.value = true);
    const I = Math.abs(a.value - i) > 100, $ = a.value <= 5;
    (f.value && i - a.value > 1 && !E || I && a.value < h.value || $) && (m.value = false), d.value = E;
  }
  return te(f, () => {
    l.value = l.value || a.value;
  }), te(c, () => {
    l.value = 0;
  }), Ot(() => {
    te(() => e.scrollTarget, (C) => {
      var _a2;
      const x = C ? document.querySelector(C) : window;
      x && x !== o.value && ((_a2 = o.value) == null ? void 0 : _a2.removeEventListener("scroll", _), o.value = x, o.value.addEventListener("scroll", _, { passive: true }), Promise.resolve().then(() => {
        b();
      }));
    }, { immediate: true }), window.addEventListener("resize", L, { passive: true });
  }), Lt(() => {
    var _a2;
    (_a2 = o.value) == null ? void 0 : _a2.removeEventListener("scroll", _), window.removeEventListener("resize", L);
  }), n && te(n, _, { immediate: true }), { scrollThreshold: h, currentScroll: a, currentThreshold: u, isScrollActive: c, scrollRatio: S, isScrollingUp: f, savedScroll: l, isAtBottom: d, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: y };
}
const _b = J({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Vn(am(), ["location"]), ...fb(), ...bb(), height: { type: [Number, String], default: 64 } }, "VAppBar"), Sb = Le()({ name: "VAppBar", props: _b(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = q(), i = Zt(e, "modelValue"), s = V(() => {
    var _a2;
    const x = new Set(((_a2 = e.scrollBehavior) == null ? void 0 : _a2.split(" ")) ?? []);
    return { hide: x.has("hide"), fullyHide: x.has("fully-hide"), inverted: x.has("inverted"), collapse: x.has("collapse"), elevate: x.has("elevate"), fadeImage: x.has("fade-image") };
  }), o = V(() => {
    const x = s.value;
    return x.hide || x.fullyHide || x.inverted || x.collapse || x.elevate || x.fadeImage || !i.value;
  }), a = V(() => {
    var _a2, _b2;
    const x = ((_a2 = r.value) == null ? void 0 : _a2.contentHeight) ?? 0, T = ((_b2 = r.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return x + T;
  }), { currentScroll: l, scrollThreshold: u, isScrollingUp: c, scrollRatio: f, isAtBottom: d, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: y } = wb(e, { canScroll: o, layoutSize: a }), h = F(() => s.value.hide || s.value.fullyHide), S = V(() => e.collapse || s.value.collapse && (s.value.inverted ? f.value > 0 : f.value === 0)), v = V(() => e.flat || s.value.fullyHide && !i.value || s.value.elevate && (s.value.inverted ? l.value > 0 : l.value === 0)), b = V(() => s.value.fadeImage ? s.value.inverted ? 1 - f.value : f.value : void 0), L = V(() => {
    var _a2, _b2;
    if (s.value.hide && s.value.inverted) return 0;
    const x = ((_a2 = r.value) == null ? void 0 : _a2.contentHeight) ?? 0, T = ((_b2 = r.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return h.value ? l.value < u.value || s.value.fullyHide ? x + T : x : x + T;
  });
  xi(() => !!e.scrollBehavior, () => {
    on(() => {
      if (!h.value) {
        i.value = true;
        return;
      }
      if (s.value.inverted) {
        i.value = l.value > u.value;
        return;
      }
      if (!y.value) {
        i.value = true;
        return;
      }
      if (m.value) {
        i.value = false;
        return;
      }
      i.value = c.value && !d.value || l.value < u.value;
    });
  });
  const { ssrBootStyles: _ } = Gd(), { layoutItemStyles: C } = db({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => e.location), layoutSize: L, elementSize: ue(void 0), active: i, absolute: F(() => e.absolute) });
  return Fe(() => {
    const x = Vn(jc.filterProps(e), ["location"]);
    return M(jc, Te({ ref: r, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...C.value, "--v-toolbar-image-opacity": b.value, height: void 0, ..._.value }, e.style] }, x, { collapse: S.value, flat: v.value }), n);
  }), {};
} }), Cb = Le()({ name: "VAppBarTitle", props: sm(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => M(om, Te(e, { class: "v-app-bar-title" }), n)), {};
} }), xb = Xe({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", to: "/about" }, { label: "Demos", to: "/projects" }, { label: "Resume", to: "/resume" }, { label: "Contact", to: "/contact" }], { smAndDown: n } = Id(), r = q(false);
  return (i, s) => (oe(), ir(Sb, { elevation: "0", color: "background", border: "b" }, { append: De(() => [ae(n) ? (oe(), me(ye, { key: 0 }, [M(Bc), M(y0, { modelValue: r.value, "onUpdate:modelValue": s[1] || (s[1] = (o) => r.value = o), location: "bottom end", offset: "10" }, { activator: De(({ props: o }) => [M(Br, Te(o, { icon: ae(Pv), variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16, ["icon"])]), default: De(() => [M(zy, { class: "header-menu-list", density: "compact" }, { default: De(() => [(oe(), me(ye, null, dt(t, (o) => M(Ro, { key: o.label, to: o.to, title: o.label, onClick: s[0] || (s[0] = (a) => r.value = false) }, null, 8, ["to", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (oe(), me(ye, { key: 1 }, [(oe(), me(ye, null, dt(t, (o) => M(Br, { key: o.label, to: o.to, variant: "text", size: "default", class: "nav-ink" }, { default: De(() => [Jr(be(o.label), 1)]), _: 2 }, 1032, ["to"])), 64)), M(Bc)], 64))]), default: De(() => [M(Cb, { class: "header-title" }, { default: De(() => [...s[2] || (s[2] = [P("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 }));
} });
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const zn = typeof document < "u";
function lm(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ab(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && lm(e.default);
}
const Ce = Object.assign;
function to(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = Rt(i) ? i.map(e) : e(i);
  }
  return n;
}
const Wr = () => {
}, Rt = Array.isArray;
function zc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const cm = /#/g, Lb = /&/g, Eb = /\//g, kb = /=/g, Mb = /\?/g, um = /\+/g, Tb = /%5B/g, Pb = /%5D/g, fm = /%5E/g, Ib = /%60/g, dm = /%7B/g, Rb = /%7C/g, mm = /%7D/g, Ob = /%20/g;
function Da(e) {
  return e == null ? "" : encodeURI("" + e).replace(Rb, "|").replace(Tb, "[").replace(Pb, "]");
}
function Vb(e) {
  return Da(e).replace(dm, "{").replace(mm, "}").replace(fm, "^");
}
function No(e) {
  return Da(e).replace(um, "%2B").replace(Ob, "+").replace(cm, "%23").replace(Lb, "%26").replace(Ib, "`").replace(dm, "{").replace(mm, "}").replace(fm, "^");
}
function Db(e) {
  return No(e).replace(kb, "%3D");
}
function Hb(e) {
  return Da(e).replace(cm, "%23").replace(Mb, "%3F");
}
function Nb(e) {
  return Hb(e).replace(Eb, "%2F");
}
function ci(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Fb = /\/$/, $b = (e) => e.replace(Fb, "");
function no(e, t, n = "/") {
  let r, i = {}, s = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), s = t.slice(l, a > 0 ? a : t.length), i = e(s.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = Wb(r ?? t, n), { fullPath: r + s + o, path: r, query: i, hash: ci(o) };
}
function Bb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Wc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function jb(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && fr(t.matched[r], n.matched[i]) && hm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function fr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function hm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!zb(e[n], t[n])) return false;
  return true;
}
function zb(e, t) {
  return Rt(e) ? Gc(e, t) : Rt(t) ? Gc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Gc(e, t) {
  return Rt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Wb(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let s = n.length - 1, o, a;
  for (o = 0; o < r.length; o++) if (a = r[o], a !== ".") if (a === "..") s > 1 && s--;
  else break;
  return n.slice(0, s).join("/") + "/" + r.slice(o).join("/");
}
const cn = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let Fo = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), ro = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Gb(e) {
  if (!e) if (zn) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), $b(e);
}
const Ub = /^[^#]+#/;
function Zb(e, t) {
  return e.replace(Ub, "#") + t;
}
function Kb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const As = () => ({ left: window.scrollX, top: window.scrollY });
function Yb(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = Kb(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Uc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $o = /* @__PURE__ */ new Map();
function qb(e, t) {
  $o.set(e, t);
}
function Xb(e) {
  const t = $o.get(e);
  return $o.delete(e), t;
}
function Jb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function gm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Be = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const vm = Symbol("");
Be.MATCHER_NOT_FOUND + "", Be.NAVIGATION_GUARD_REDIRECT + "", Be.NAVIGATION_ABORTED + "", Be.NAVIGATION_CANCELLED + "", Be.NAVIGATION_DUPLICATED + "";
function dr(e, t) {
  return Ce(new Error(), { type: e, [vm]: true }, t);
}
function Xt(e, t) {
  return e instanceof Error && vm in e && (t == null || !!(e.type & t));
}
const Qb = ["params", "query", "hash"];
function e2(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Qb) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function t2(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(um, " "), s = i.indexOf("="), o = ci(s < 0 ? i : i.slice(0, s)), a = s < 0 ? null : ci(i.slice(s + 1));
    if (o in t) {
      let l = t[o];
      Rt(l) || (l = t[o] = [l]), l.push(a);
    } else t[o] = a;
  }
  return t;
}
function Zc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Db(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Rt(r) ? r.map((i) => i && No(i)) : [r && No(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function n2(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Rt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const r2 = Symbol(""), Kc = Symbol(""), Ls = Symbol(""), Ha = Symbol(""), Bo = Symbol("");
function Mr() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const i = e.indexOf(r);
      i > -1 && e.splice(i, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function mn(e, t, n, r, i, s = (o) => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = (d) => {
      d === false ? l(dr(Be.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : Jb(d) ? l(dr(Be.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), a());
    }, c = s(() => e.call(r && r.instances[i], t, n, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
  });
}
function io(e, t, n, r, i = (s) => s()) {
  const s = [];
  for (const o of e) for (const a in o.components) {
    let l = o.components[a];
    if (!(t !== "beforeRouteEnter" && !o.instances[a])) if (lm(l)) {
      const u = (l.__vccOpts || l)[t];
      u && s.push(mn(u, n, r, o, a, i));
    } else {
      let u = l();
      s.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
        const f = Ab(c) ? c.default : c;
        o.mods[a] = c, o.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && mn(d, n, r, o, a, i)();
      }));
    }
  }
  return s;
}
function i2(e, t) {
  const n = [], r = [], i = [], s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    a && (e.matched.find((u) => fr(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((u) => fr(u, l)) || i.push(l));
  }
  return [n, r, i];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let s2 = () => location.protocol + "//" + location.host;
function pm(e, t) {
  const { pathname: n, search: r, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let o = i.includes(e.slice(s)) ? e.slice(s).length : 1, a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), Wc(a, "");
  }
  return Wc(n, e) + r + i;
}
function o2(e, t, n, r) {
  let i = [], s = [], o = null;
  const a = ({ state: d }) => {
    const m = pm(e, location), y = n.value, h = t.value;
    let S = 0;
    if (d) {
      if (n.value = m, t.value = d, o && o === y) {
        o = null;
        return;
      }
      S = h ? d.position - h.position : 0;
    } else r(m);
    i.forEach((v) => {
      v(n.value, y, { delta: S, type: Fo.pop, direction: S ? S > 0 ? ro.forward : ro.back : ro.unknown });
    });
  };
  function l() {
    o = n.value;
  }
  function u(d) {
    i.push(d);
    const m = () => {
      const y = i.indexOf(d);
      y > -1 && i.splice(y, 1);
    };
    return s.push(m), m;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Ce({}, d.state, { scroll: As() }), "");
    }
  }
  function f() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: l, listen: u, destroy: f };
}
function Yc(e, t, n, r = false, i = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: i ? As() : null };
}
function a2(e) {
  const { history: t, location: n } = window, r = { value: pm(e, n) }, i = { value: t.state };
  i.value || s(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function s(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : s2() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), i.value = u;
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](d);
    }
  }
  function o(l, u) {
    s(l, Ce({}, t.state, Yc(i.value.back, l, i.value.forward, true), u, { position: i.value.position }), true), r.value = l;
  }
  function a(l, u) {
    const c = Ce({}, i.value, t.state, { forward: l, scroll: As() });
    s(c.current, c, true), s(l, Ce({}, Yc(r.value, l, null), { position: c.position + 1 }, u), false), r.value = l;
  }
  return { location: r, state: i, push: a, replace: o };
}
function l2(e) {
  e = Gb(e);
  const t = a2(e), n = o2(e, t.state, t.location, t.replace);
  function r(s, o = true) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Ce({ location: "", base: e, go: r, createHref: Zb.bind(null, e) }, t, n);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => t.state.value }), i;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const c2 = { type: En.Static, value: "" }, u2 = /[a-zA-Z0-9_]/;
function f2(e) {
  if (!e) return [[]];
  if (e === "/") return [[c2]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = We.Static, r = n;
  const i = [];
  let s;
  function o() {
    s && i.push(s), s = [];
  }
  let a = 0, l, u = "", c = "";
  function f() {
    u && (n === We.Static ? s.push({ type: En.Static, value: u }) : n === We.Param || n === We.ParamRegExp || n === We.ParamRegExpEnd ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({ type: En.Param, value: u, regexp: c, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" })) : t("Invalid state to consume buffer"), u = "");
  }
  function d() {
    u += l;
  }
  for (; a < e.length; ) {
    if (l = e[a++], l === "\\" && n !== We.ParamRegExp) {
      r = n, n = We.EscapeNext;
      continue;
    }
    switch (n) {
      case We.Static:
        l === "/" ? (u && f(), o()) : l === ":" ? (f(), n = We.Param) : d();
        break;
      case We.EscapeNext:
        d(), n = r;
        break;
      case We.Param:
        l === "(" ? n = We.ParamRegExp : u2.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case We.ParamRegExp:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = We.ParamRegExpEnd : c += l;
        break;
      case We.ParamRegExpEnd:
        f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === We.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), i;
}
const qc = "[^/]+?", d2 = { sensitive: false, strict: false, start: true, end: true };
var ot = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ot || {});
const m2 = /[.+*?^${}()[\]/\\]/g;
function h2(e, t) {
  const n = Ce({}, d2, t), r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [ot.Root];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let m = ot.Segment + (n.sensitive ? ot.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (i += "/"), i += d.value.replace(m2, "\\$&"), m += ot.Static;
      else if (d.type === En.Param) {
        const { value: y, repeatable: h, optional: S, regexp: v } = d;
        s.push({ name: y, repeatable: h, optional: S });
        const b = v || qc;
        if (b !== qc) {
          m += ot.BonusCustomRegExp;
          try {
            `${b}`;
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${b}): ` + _.message);
          }
        }
        let L = h ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        f || (L = S && u.length < 2 ? `(?:/${L})` : "/" + L), S && (L += "?"), i += L, m += ot.Dynamic, S && (m += ot.BonusOptional), h && (m += ot.BonusRepeatable), b === ".*" && (m += ot.BonusWildcard);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += ot.BonusStrict;
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(o), f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const m = c[d] || "", y = s[d - 1];
      f[y.name] = m && y.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function l(u) {
    let c = "", f = false;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), f = false;
      for (const m of d) if (m.type === En.Static) c += m.value;
      else if (m.type === En.Param) {
        const { value: y, repeatable: h, optional: S } = m, v = y in u ? u[y] : "";
        if (Rt(v) && !h) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
        const b = Rt(v) ? v.join("/") : v;
        if (!b) if (S) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${y}"`);
        c += b;
      }
    }
    return c || "/";
  }
  return { re: o, score: r, keys: s, parse: a, stringify: l };
}
function g2(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === ot.Static + ot.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ot.Static + ot.Segment ? 1 : -1 : 0;
}
function ym(e, t) {
  let n = 0;
  const r = e.score, i = t.score;
  for (; n < r.length && n < i.length; ) {
    const s = g2(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Xc(r)) return 1;
    if (Xc(i)) return -1;
  }
  return i.length - r.length;
}
function Xc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const v2 = { strict: false, end: true, sensitive: false };
function p2(e, t, n) {
  const r = h2(f2(e.path), n), i = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function y2(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = zc(v2, t);
  function i(f) {
    return r.get(f);
  }
  function s(f, d, m) {
    const y = !m, h = Qc(f);
    h.aliasOf = m && m.record;
    const S = zc(t, f), v = [h];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of _) v.push(Qc(Ce({}, h, { components: m ? m.record.components : h.components, path: C, aliasOf: m ? m.record : h })));
    }
    let b, L;
    for (const _ of v) {
      const { path: C } = _;
      if (d && C[0] !== "/") {
        const x = d.record.path, T = x[x.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (C && T + C);
      }
      if (b = p2(_, d, S), m ? m.alias.push(b) : (L = L || b, L !== b && L.alias.push(b), y && f.name && !eu(b) && o(f.name)), bm(b) && l(b), h.children) {
        const x = h.children;
        for (let T = 0; T < x.length; T++) s(x[T], b, m && m.children[T]);
      }
      m = m || b;
    }
    return L ? () => {
      o(L);
    } : Wr;
  }
  function o(f) {
    if (gm(f)) {
      const d = r.get(f);
      d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o));
    } else {
      const d = n.indexOf(f);
      d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = _2(f, n);
    n.splice(d, 0, f), f.record.name && !eu(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let m, y = {}, h, S;
    if ("name" in f && f.name) {
      if (m = r.get(f.name), !m) throw dr(Be.MATCHER_NOT_FOUND, { location: f });
      S = m.record.name, y = Ce(Jc(d.params, m.keys.filter((L) => !L.optional).concat(m.parent ? m.parent.keys.filter((L) => L.optional) : []).map((L) => L.name)), f.params && Jc(f.params, m.keys.map((L) => L.name))), h = m.stringify(y);
    } else if (f.path != null) h = f.path, m = n.find((L) => L.re.test(h)), m && (y = m.parse(h), S = m.record.name);
    else {
      if (m = d.name ? r.get(d.name) : n.find((L) => L.re.test(d.path)), !m) throw dr(Be.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      S = m.record.name, y = Ce({}, d.params, f.params), h = m.stringify(y);
    }
    const v = [];
    let b = m;
    for (; b; ) v.unshift(b.record), b = b.parent;
    return { name: S, path: h, params: y, matched: v, meta: w2(v) };
  }
  e.forEach((f) => s(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: s, resolve: u, removeRoute: o, clearRoutes: c, getRoutes: a, getRecordMatcher: i };
}
function Jc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Qc(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: b2(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function b2(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function eu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function w2(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function _2(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    ym(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const i = S2(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function S2(e) {
  let t = e;
  for (; t = t.parent; ) if (bm(t) && ym(e, t) === 0) return t;
}
function bm({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function tu(e) {
  const t = ke(Ls), n = ke(Ha), r = V(() => {
    const l = ae(e.to);
    return t.resolve(l);
  }), i = V(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(fr.bind(null, c));
    if (d > -1) return d;
    const m = nu(l[u - 2]);
    return u > 1 && nu(c) === m && f[f.length - 1].path !== m ? f.findIndex(fr.bind(null, l[u - 2])) : d;
  }), s = V(() => i.value > -1 && E2(n.params, r.value.params)), o = V(() => i.value > -1 && i.value === n.matched.length - 1 && hm(n.params, r.value.params));
  function a(l = {}) {
    if (L2(l)) {
      const u = t[ae(e.replace) ? "replace" : "push"](ae(e.to)).catch(Wr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: V(() => r.value.href), isActive: s, isExactActive: o, navigate: a };
}
function C2(e) {
  return e.length === 1 ? e[0] : e;
}
const x2 = Xe({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: tu, setup(e, { slots: t }) {
  const n = Ke(tu(e)), { options: r } = ke(Ls), i = V(() => ({ [ru(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [ru(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const s = t.default && C2(t.default(n));
    return e.custom ? s : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, s);
  };
} }), A2 = x2;
function L2(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function E2(e, t) {
  for (const n in t) {
    const r = t[n], i = e[n];
    if (typeof r == "string") {
      if (r !== i) return false;
    } else if (!Rt(i) || i.length !== r.length || r.some((s, o) => s.valueOf() !== i[o].valueOf())) return false;
  }
  return true;
}
function nu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ru = (e, t, n) => e ?? t ?? n, k2 = Xe({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = ke(Bo), i = V(() => e.route || r.value), s = ke(Kc, 0), o = V(() => {
    let u = ae(s);
    const { matched: c } = i.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = V(() => i.value.matched[o.value]);
  qe(Kc, V(() => o.value + 1)), qe(r2, a), qe(Bo, i);
  const l = q();
  return te(() => [l.value, a.value, e.name], ([u, c, f], [d, m, y]) => {
    c && (c.instances[f] = u, m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), u && c && (!m || !fr(c, m) || !d) && (c.enterCallbacks[f] || []).forEach((h) => h(u));
  }, { flush: "post" }), () => {
    const u = i.value, c = e.name, f = a.value, d = f && f.components[c];
    if (!d) return iu(n.default, { Component: d, route: u });
    const m = f.props[c], y = m ? m === true ? u.params : typeof m == "function" ? m(u) : m : null, S = vn(d, Ce({}, y, t, { onVnodeUnmounted: (v) => {
      v.component.isUnmounted && (f.instances[c] = null);
    }, ref: l }));
    return iu(n.default, { Component: S, route: u }) || S;
  };
} });
function iu(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const M2 = k2;
function T2(e) {
  const t = y2(e.routes, e), n = e.parseQuery || t2, r = e.stringifyQuery || Zc, i = e.history, s = Mr(), o = Mr(), a = Mr(), l = ue(cn);
  let u = cn;
  zn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = to.bind(null, (k) => "" + k), f = to.bind(null, Nb), d = to.bind(null, ci);
  function m(k, j) {
    let W, U;
    return gm(k) ? (W = t.getRecordMatcher(k), U = j) : U = k, t.addRoute(U, W);
  }
  function y(k) {
    const j = t.getRecordMatcher(k);
    j && t.removeRoute(j);
  }
  function h() {
    return t.getRoutes().map((k) => k.record);
  }
  function S(k) {
    return !!t.getRecordMatcher(k);
  }
  function v(k, j) {
    if (j = Ce({}, j || l.value), typeof k == "string") {
      const A = no(n, k, j.path), O = t.resolve({ path: A.path }, j), H = i.createHref(A.fullPath);
      return Ce(A, O, { params: d(O.params), hash: ci(A.hash), redirectedFrom: void 0, href: H });
    }
    let W;
    if (k.path != null) W = Ce({}, k, { path: no(n, k.path, j.path).path });
    else {
      const A = Ce({}, k.params);
      for (const O in A) A[O] == null && delete A[O];
      W = Ce({}, k, { params: f(A) }), j.params = f(j.params);
    }
    const U = t.resolve(W, j), pe = k.hash || "";
    U.params = c(d(U.params));
    const g = Bb(r, Ce({}, k, { hash: Vb(pe), path: U.path })), p = i.createHref(g);
    return Ce({ fullPath: g, hash: pe, query: r === Zc ? n2(k.query) : k.query || {} }, U, { redirectedFrom: void 0, href: p });
  }
  function b(k) {
    return typeof k == "string" ? no(n, k, l.value.path) : Ce({}, k);
  }
  function L(k, j) {
    if (u !== k) return dr(Be.NAVIGATION_CANCELLED, { from: j, to: k });
  }
  function _(k) {
    return T(k);
  }
  function C(k) {
    return _(Ce(b(k), { replace: true }));
  }
  function x(k, j) {
    const W = k.matched[k.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: U } = W;
      let pe = typeof U == "function" ? U(k, j) : U;
      return typeof pe == "string" && (pe = pe.includes("?") || pe.includes("#") ? pe = b(pe) : { path: pe }, pe.params = {}), Ce({ query: k.query, hash: k.hash, params: pe.path != null ? {} : k.params }, pe);
    }
  }
  function T(k, j) {
    const W = u = v(k), U = l.value, pe = k.state, g = k.force, p = k.replace === true, A = x(W, U);
    if (A) return T(Ce(b(A), { state: typeof A == "object" ? Ce({}, pe, A.state) : pe, force: g, replace: p }), j || W);
    const O = W;
    O.redirectedFrom = j;
    let H;
    return !g && jb(r, U, W) && (H = dr(Be.NAVIGATION_DUPLICATED, { to: O, from: U }), se(U, U, true, false)), (H ? Promise.resolve(H) : I(O, U)).catch((D) => Xt(D) ? Xt(D, Be.NAVIGATION_GUARD_REDIRECT) ? D : _e(D) : ce(D, O, U)).then((D) => {
      if (D) {
        if (Xt(D, Be.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, b(D.to), { state: typeof D.to == "object" ? Ce({}, pe, D.to.state) : pe, force: g }), j || O);
      } else D = R(O, U, true, p, pe);
      return $(O, U, D), D;
    });
  }
  function w(k, j) {
    const W = L(k, j);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function E(k) {
    const j = je.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(k) : k();
  }
  function I(k, j) {
    let W;
    const [U, pe, g] = i2(k, j);
    W = io(U.reverse(), "beforeRouteLeave", k, j);
    for (const A of U) A.leaveGuards.forEach((O) => {
      W.push(mn(O, k, j));
    });
    const p = w.bind(null, k, j);
    return W.push(p), $e(W).then(() => {
      W = [];
      for (const A of s.list()) W.push(mn(A, k, j));
      return W.push(p), $e(W);
    }).then(() => {
      W = io(pe, "beforeRouteUpdate", k, j);
      for (const A of pe) A.updateGuards.forEach((O) => {
        W.push(mn(O, k, j));
      });
      return W.push(p), $e(W);
    }).then(() => {
      W = [];
      for (const A of g) if (A.beforeEnter) if (Rt(A.beforeEnter)) for (const O of A.beforeEnter) W.push(mn(O, k, j));
      else W.push(mn(A.beforeEnter, k, j));
      return W.push(p), $e(W);
    }).then(() => (k.matched.forEach((A) => A.enterCallbacks = {}), W = io(g, "beforeRouteEnter", k, j, E), W.push(p), $e(W))).then(() => {
      W = [];
      for (const A of o.list()) W.push(mn(A, k, j));
      return W.push(p), $e(W);
    }).catch((A) => Xt(A, Be.NAVIGATION_CANCELLED) ? A : Promise.reject(A));
  }
  function $(k, j, W) {
    a.list().forEach((U) => E(() => U(k, j, W)));
  }
  function R(k, j, W, U, pe) {
    const g = L(k, j);
    if (g) return g;
    const p = j === cn, A = zn ? history.state : {};
    W && (U || p ? i.replace(k.fullPath, Ce({ scroll: p && A && A.scroll }, pe)) : i.push(k.fullPath, pe)), l.value = k, se(k, j, W, p), _e();
  }
  let B;
  function X() {
    B || (B = i.listen((k, j, W) => {
      if (!Ze.listening) return;
      const U = v(k), pe = x(U, Ze.currentRoute.value);
      if (pe) {
        T(Ce(pe, { replace: true, force: true }), U).catch(Wr);
        return;
      }
      u = U;
      const g = l.value;
      zn && qb(Uc(g.fullPath, W.delta), As()), I(U, g).catch((p) => Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_CANCELLED) ? p : Xt(p, Be.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(b(p.to), { force: true }), U).then((A) => {
        Xt(A, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && !W.delta && W.type === Fo.pop && i.go(-1, false);
      }).catch(Wr), Promise.reject()) : (W.delta && i.go(-W.delta, false), ce(p, U, g))).then((p) => {
        p = p || R(U, g, false), p && (W.delta && !Xt(p, Be.NAVIGATION_CANCELLED) ? i.go(-W.delta, false) : W.type === Fo.pop && Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && i.go(-1, false)), $(U, g, p);
      }).catch(Wr);
    }));
  }
  let Y = Mr(), ne = Mr(), le;
  function ce(k, j, W) {
    _e(k);
    const U = ne.list();
    return U.length ? U.forEach((pe) => pe(k, j, W)) : console.error(k), Promise.reject(k);
  }
  function Ve() {
    return le && l.value !== cn ? Promise.resolve() : new Promise((k, j) => {
      Y.add([k, j]);
    });
  }
  function _e(k) {
    return le || (le = !k, X(), Y.list().forEach(([j, W]) => k ? W(k) : j()), Y.reset()), k;
  }
  function se(k, j, W, U) {
    const { scrollBehavior: pe } = e;
    if (!zn || !pe) return Promise.resolve();
    const g = !W && Xb(Uc(k.fullPath, 0)) || (U || !W) && history.state && history.state.scroll || null;
    return mt().then(() => pe(k, j, g)).then((p) => p && Yb(p)).catch((p) => ce(p, k, j));
  }
  const ge = (k) => i.go(k);
  let he;
  const je = /* @__PURE__ */ new Set(), Ze = { currentRoute: l, listening: true, addRoute: m, removeRoute: y, clearRoutes: t.clearRoutes, hasRoute: S, getRoutes: h, resolve: v, options: e, push: _, replace: C, go: ge, back: () => ge(-1), forward: () => ge(1), beforeEach: s.add, beforeResolve: o.add, afterEach: a.add, onError: ne.add, isReady: Ve, install(k) {
    k.component("RouterLink", A2), k.component("RouterView", M2), k.config.globalProperties.$router = Ze, Object.defineProperty(k.config.globalProperties, "$route", { enumerable: true, get: () => ae(l) }), zn && !he && l.value === cn && (he = true, _(i.location).catch((U) => {
    }));
    const j = {};
    for (const U in cn) Object.defineProperty(j, U, { get: () => l.value[U], enumerable: true });
    k.provide(Ls, Ze), k.provide(Ha, Ru(j)), k.provide(Bo, l);
    const W = k.unmount;
    je.add(k), k.unmount = function() {
      je.delete(k), je.size < 1 && (u = cn, B && B(), B = null, l.value = cn, he = false, le = false), W();
    };
  } };
  function $e(k) {
    return k.reduce((j, W) => j.then(() => E(W)), Promise.resolve());
  }
  return Ze;
}
function P2() {
  return ke(Ls);
}
function wm(e) {
  return ke(Ha);
}
function I2(e, t, n) {
  const r = zf(e, t, n);
  return Math.atan2(r.y - n.h / 2, r.x - n.w / 2);
}
function R2(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function O2(e, t, n, r, i) {
  if (n <= t) return i;
  const s = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return i + (r - i) * s;
}
function V2(e, t, n) {
  let r = 1 / 0;
  const i = (s) => {
    s > 0 && s < r && (r = s);
  };
  return t.x > 1e-9 && i((n.maxX - e.x) / t.x), t.x < -1e-9 && i((n.minX - e.x) / t.x), t.y > 1e-9 && i((n.maxY - e.y) / t.y), t.y < -1e-9 && i((n.minY - e.y) / t.y), Number.isFinite(r) ? { x: e.x + t.x * r, y: e.y + t.y * r } : { x: e.x, y: e.y };
}
function D2(e, t, n, r) {
  const i = { x: Math.cos(t), y: Math.sin(t) }, s = V2(e, i, n), o = s.x - i.x * r, a = s.y - i.y * r;
  return { x: Math.min(n.maxX - r, Math.max(n.minX + r, o)), y: Math.min(n.maxY - r, Math.max(n.minY + r, a)) };
}
const H2 = ["id", "aria-current", "aria-label"], N2 = Xe({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = ys(t.waypointId), { camera: r, viewport: i, spacing: s, setCaptureScroll: o } = gr(), a = wm(), l = V(() => a.name === t.waypointId), u = V(() => pi(n, s.value)), c = V(() => {
    const y = Math.min(s.value.col, s.value.row) * Bv;
    return Nv(u.value, r.value, i.value, { radius: y, floor: $v });
  }), f = V(() => {
    const y = Fl + (1 - Fl) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${y})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${i.value.h}px` : void 0 };
  }), d = q(null);
  function m() {
    l.value && d.value && o(d.value.scrollTop);
  }
  return te(l, (y) => {
    y && d.value && (d.value.scrollTop = 0, o(0));
  }), (y, h) => (oe(), me("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Ae(["world-panel", { "world-panel--scroll": l.value }]), style: Re(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": ae(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: m }, [Mh(y.$slots, "default", {}, void 0)], 46, H2));
} }), Tr = Dt(N2, [["__scopeId", "data-v-9d4ba97d"]]), at = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, _m = [{ label: "Location", icon: Bf, href: "https://maps.google.com/?q=Bentonville,+AR", display: at.location }, { label: "Email", icon: Ff, href: `mailto:${at.email}`, display: at.email }, { label: "Phone", icon: Iv, href: `tel:${at.phone.replace(/[^\d+]/g, "")}`, display: at.phone }, { label: "GitHub", icon: $f, href: at.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: Tv, href: at.linkedin, display: "bits-for-bread" }], F2 = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], $2 = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], B2 = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], j2 = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], z2 = { id: "hero", class: "hero-section" }, W2 = { class: "hero-frame glass-panel glass-panel--strong" }, G2 = { class: "hero-main" }, U2 = { class: "hero-kicker glass-chip section-kicker" }, Z2 = { class: "hero-name section-heading" }, K2 = { class: "hero-tagline" }, Y2 = { class: "hero-bio" }, q2 = { class: "hero-actions" }, X2 = { href: "#projects", class: "hero-link hero-link--primary" }, J2 = { class: "hero-rail" }, Q2 = { class: "hero-note quiet-sheet" }, ew = { class: "skills-block" }, tw = { class: "skill-label" }, nw = { class: "skill-items" }, rw = { class: "hero-note quiet-sheet" }, iw = { class: "hero-links" }, sw = ["href"], ow = Xe({ __name: "HeroSection", setup(e) {
  const t = _m.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, r) => (oe(), me("section", z2, [M(Ai, { class: "hero-container" }, { default: De(() => [P("div", W2, [P("div", G2, [P("span", U2, [M(it, { icon: ae(Bf), class: "hero-location-icon" }, null, 8, ["icon"]), Jr(be(ae(at).location), 1)]), P("h1", Z2, be(ae(at).name), 1), P("p", K2, be(ae(at).tagline), 1), P("p", Y2, be(ae(at).bio), 1), P("div", q2, [P("a", X2, [r[0] || (r[0] = Jr(" View selected work ", -1)), M(it, { icon: ae(Lv), class: "hero-link-icon" }, null, 8, ["icon"])]), r[1] || (r[1] = P("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), P("aside", J2, [P("section", Q2, [r[2] || (r[2] = P("p", { class: "hero-note-label" }, "Capabilities", -1)), P("div", ew, [(oe(true), me(ye, null, dt(ae(F2), (i) => (oe(), me("div", { key: i.label, class: "skill-group" }, [P("span", tw, be(i.label), 1), P("span", nw, be(i.items.join("  \xB7  ")), 1)]))), 128))])]), P("section", rw, [r[3] || (r[3] = P("p", { class: "hero-note-label" }, "Elsewhere", -1)), P("div", iw, [(oe(true), me(ye, null, dt(ae(t), (i) => (oe(), me("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [M(it, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), P("span", null, be(i.display ?? i.label), 1)], 8, sw))), 128))])])])])]), _: 1 })]));
} }), aw = Dt(ow, [["__scopeId", "data-v-5000fea6"]]), jo = { demo: { ariaLabel: "Live demo", icon: Rl, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: $f, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: Rv, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Rl, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: kv, label: "Docs", priority: 4 } };
function lw(e, t) {
  return jo[e].priority - jo[t].priority;
}
function cw(e) {
  return [...e.links ?? []].sort((t, n) => lw(t.kind, n.kind)).map((t) => ({ ...t, ...jo[t.kind] }));
}
function su(e, t) {
  const n = cw(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const uw = { id: "projects", class: "demos-section" }, fw = { key: 0, class: "project-feature glass-panel" }, dw = { class: "project-feature-body" }, mw = { class: "project-feature-title" }, hw = { class: "project-feature-blurb" }, gw = { class: "project-feature-tech" }, vw = { class: "project-feature-actions" }, pw = ["href", "aria-label"], yw = { class: "project-index" }, bw = { class: "project-item-head" }, ww = { class: "project-item-title" }, _w = { key: 0, class: "project-item-links", "aria-label": "Project links" }, Sw = ["href", "aria-label"], Cw = { class: "project-item-blurb" }, xw = { class: "project-item-tech" }, Aw = Xe({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = $2, r = t ? { ...t, visibleLinks: su(t, "featured") } : null, i = n.map((s) => ({ ...s, visibleLinks: su(s, "compact") }));
  return (s, o) => (oe(), me("section", uw, [M(Ai, { class: "projects-container" }, { default: De(() => [o[1] || (o[1] = P("div", { class: "projects-head" }, [P("div", { class: "projects-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Selected work"), P("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), P("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), ae(r) ? (oe(), me("article", fw, [P("div", dw, [o[0] || (o[0] = P("span", { class: "project-feature-label" }, "Featured project", -1)), P("h3", mw, be(ae(r).title), 1), P("p", hw, be(ae(r).blurb), 1), P("div", gw, [(oe(true), me(ye, null, dt(ae(r).tech, (a) => (oe(), me("span", { key: a, class: "project-tech-tag" }, be(a), 1))), 128))])]), P("div", vw, [(oe(true), me(ye, null, dt(ae(r).visibleLinks, (a) => (oe(), me("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Ae(["project-link", { "project-link--demo": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [M(it, { icon: a.icon }, null, 8, ["icon"]), P("span", null, be(a.label), 1), M(zr, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, pw))), 128))])])) : sr("", true), P("div", yw, [(oe(true), me(ye, null, dt(ae(i), (a) => (oe(), me("article", { key: a.title, class: "project-item quiet-sheet" }, [P("header", bw, [P("h3", ww, be(a.title), 1), a.visibleLinks.length ? (oe(), me("div", _w, [(oe(true), me(ye, null, dt(a.visibleLinks, (l) => (oe(), me("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Ae(["project-item-link", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [M(it, { icon: l.icon }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, Sw))), 128))])) : sr("", true)]), P("p", Cw, be(a.blurb), 1), P("div", xw, [(oe(true), me(ye, null, dt(a.tech, (l) => (oe(), me("span", { key: l, class: "project-tech-tag" }, be(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), Lw = Dt(Aw, [["__scopeId", "data-v-990854bd"]]), Ew = { id: "resume", class: "resume-section" }, kw = { class: "timeline" }, Mw = { class: "entry-rail" }, Tw = { class: "entry-dates glass-chip" }, Pw = { class: "entry quiet-sheet" }, Iw = { class: "entry-head" }, Rw = { class: "entry-titleblock" }, Ow = { class: "entry-role" }, Vw = { class: "entry-subhead" }, Dw = { class: "entry-company" }, Hw = { class: "entry-work-location" }, Nw = { class: "entry-bullets" }, Fw = { key: 0, class: "entry-tech" }, $w = { class: "entry-tech-items" }, Bw = { class: "entry-head" }, jw = { class: "entry-titleblock" }, zw = { class: "entry-role" }, Ww = { class: "entry-company" }, Gw = { class: "entry-meta" }, Uw = { class: "entry-dates" }, Zw = { class: "entry-location" }, Kw = { key: 0, class: "entry-focus" }, Yw = Xe({ __name: "ResumeSection", setup(e) {
  return (t, n) => (oe(), me("section", Ew, [M(Ai, { class: "resume-container" }, { default: De(() => [n[2] || (n[2] = P("div", { class: "resume-head" }, [P("div", { class: "resume-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Resume"), P("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), P("ol", kw, [(oe(true), me(ye, null, dt(ae(B2), (r) => (oe(), me("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [P("div", Mw, [P("span", Tw, be(r.dates), 1)]), P("article", Pw, [P("header", Iw, [P("div", Rw, [P("h3", Ow, be(r.role), 1), P("div", Vw, [P("p", Dw, be(r.company), 1), P("span", Hw, be(r.location), 1)])])]), P("ul", Nw, [(oe(true), me(ye, null, dt(r.highlights, (i, s) => (oe(), me("li", { key: s }, be(i), 1))), 128))]), r.tech ? (oe(), me("div", Fw, [n[0] || (n[0] = P("span", { class: "entry-tech-label" }, "Stack", -1)), P("span", $w, be(r.tech.join("  \xB7  ")), 1)])) : sr("", true)])]))), 128))]), n[3] || (n[3] = P("div", { class: "edu-head" }, [P("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (oe(true), me(ye, null, dt(ae(j2), (r) => (oe(), me("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [P("header", Bw, [P("div", jw, [P("h3", zw, be(r.degree) + " \u2014 " + be(r.field), 1), P("p", Ww, be(r.school), 1)]), P("div", Gw, [P("span", Uw, be(r.dates), 1), P("span", Zw, be(r.location), 1)])]), r.focus ? (oe(), me("p", Kw, [n[1] || (n[1] = P("span", { class: "entry-tech-label" }, "Focus", -1)), Jr(" " + be(r.focus), 1)])) : sr("", true)]))), 128))]), _: 1 })]));
} }), qw = Dt(Yw, [["__scopeId", "data-v-72166a64"]]), Xw = ["href", "aria-label"], Jw = { class: "contact-text" }, Qw = Xe({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (oe(), me("div", { class: Ae(["contact-strip", { "is-dense": e.dense }]) }, [(oe(true), me(ye, null, dt(ae(_m), (r) => (oe(), me("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [M(it, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), P("span", Jw, be(r.display ?? r.label), 1)], 8, Xw))), 128))], 2));
} }), e_ = Dt(Qw, [["__scopeId", "data-v-0c3dbac0"]]), t_ = { id: "contact", class: "contact-section" }, n_ = { class: "contact-band glass-panel" }, r_ = Xe({ __name: "ContactSection", setup(e) {
  return (t, n) => (oe(), me("section", t_, [M(Ai, { class: "contact-container" }, { default: De(() => [P("div", n_, [n[0] || (n[0] = P("div", { class: "contact-head" }, [P("span", { class: "glass-chip section-kicker" }, "Contact"), P("h2", { class: "contact-title" }, "Open to interesting problems."), P("p", { class: "contact-copy" })], -1)), M(e_, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), i_ = Dt(r_, [["__scopeId", "data-v-e54dfca1"]]), s_ = { class: "about-section" }, o_ = { class: "content-surface about-card" }, a_ = { class: "section-heading" }, l_ = { class: "about-tagline" }, c_ = { class: "section-intro" }, u_ = { class: "about-meta" }, f_ = Xe({ __name: "AboutSection", setup(e) {
  return (t, n) => (oe(), me("section", s_, [M(Ai, { class: "about-container" }, { default: De(() => [P("div", o_, [n[0] || (n[0] = P("p", { class: "section-kicker" }, "About", -1)), P("h2", a_, be(ae(at).name), 1), P("p", l_, be(ae(at).tagline), 1), P("p", c_, be(ae(at).bio), 1), P("p", u_, be(ae(at).location), 1)])]), _: 1 })]));
} }), d_ = Dt(f_, [["__scopeId", "data-v-6126ab28"]]), m_ = Xe({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n, isAnimating: r } = gr(), i = q(null);
  let s = null;
  return Ot(() => {
    const o = i.value;
    if (!o) return;
    const a = () => n(o.clientWidth, o.clientHeight);
    a(), s = new ResizeObserver(a), s.observe(o);
  }), di(() => s == null ? void 0 : s.disconnect()), (o, a) => (oe(), me("div", { ref_key: "stageRef", ref: i, class: "world-stage" }, [P("div", { class: Ae(["world-plane", { "world-plane--animating": ae(r) }]), style: Re(ae(t)) }, [M(Tr, { "waypoint-id": "hero" }, { default: De(() => [M(aw)]), _: 1 }), M(Tr, { "waypoint-id": "projects" }, { default: De(() => [M(Lw)]), _: 1 }), M(Tr, { "waypoint-id": "resume" }, { default: De(() => [M(qw)]), _: 1 }), M(Tr, { "waypoint-id": "contact" }, { default: De(() => [M(i_)]), _: 1 }), M(Tr, { "waypoint-id": "about" }, { default: De(() => [M(d_)]), _: 1 })], 6)], 512));
} }), h_ = Dt(m_, [["__scopeId", "data-v-0dbf5244"]]);
function ou(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function g_(e, t, n) {
  const r = Math.abs(e.x - (t.minX + n)), i = Math.abs(e.x - (t.maxX - n)), s = Math.abs(e.y - (t.minY + n)), o = Math.abs(e.y - (t.maxY - n)), a = Math.min(r, i, s, o);
  return a === r ? "L" : a === i ? "R" : a === s ? "T" : "B";
}
function au(e, t) {
  e.wall === "L" ? e.x = t.minX + e.r : e.wall === "R" ? e.x = t.maxX - e.r : e.wall === "T" ? e.y = t.minY + e.r : e.y = t.maxY - e.r, e.x = ou(e.x, t.minX + e.r, t.maxX - e.r), e.y = ou(e.y, t.minY + e.r, t.maxY - e.r);
}
function v_(e, t) {
  const n = e.r + t.r;
  if (e.wall === t.wall) {
    const o = e.wall === "L" || e.wall === "R", a = o ? t.y - e.y : t.x - e.x, l = Math.abs(a);
    if (l < n) {
      const u = (n - l) / 2, c = a >= 0 ? 1 : -1;
      o ? (e.y -= c * u, t.y += c * u) : (e.x -= c * u, t.x += c * u);
    }
    return;
  }
  const r = t.x - e.x, i = t.y - e.y, s = Math.hypot(r, i);
  if (s > 1e-6 && s < n) {
    const o = (n - s) / 2;
    e.x -= r / s * o, e.y -= i / s * o, t.x += r / s * o, t.y += i / s * o;
  }
}
function p_(e, t, n) {
  const r = e.map((i) => {
    const s = (i.pos.x - i.prevPos.x) * n.friction, o = (i.pos.y - i.prevPos.y) * n.friction, a = (i.target.x - i.pos.x) * n.stiffness, l = (i.target.y - i.pos.y) * n.stiffness;
    return { x: i.pos.x + s + a, y: i.pos.y + o + l, r: i.radius, wall: g_(i.target, t, i.radius) };
  });
  for (const i of r) au(i, t);
  for (let i = 0; i < n.iterations; i++) {
    for (let s = 0; s < r.length; s++) for (let o = s + 1; o < r.length; o++) v_(r[s], r[o]);
    for (const s of r) au(s, t);
  }
  return r.map((i) => ({ x: i.x, y: i.y }));
}
function y_(e) {
  return { minX: Ws, minY: Kv, maxX: e.w - Ws, maxY: e.h - Ws };
}
const b_ = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function w_() {
  const e = gr(), t = wm(), n = q([]), r = /* @__PURE__ */ new Map(), i = b_();
  function s(c) {
    const f = e.camera.value, d = e.viewport.value, m = e.spacing.value, y = y_(d), h = { x: d.w / 2, y: d.h / 2 }, S = vi.map((w) => {
      const E = pi(w, m);
      return { wp: w, dist: R2(E, f), bearing: I2(E, f, d) };
    }).filter((w) => w.dist > $l), v = S.map((w) => w.dist), b = v.length ? Math.min(...v) : 0, L = v.length ? Math.max(...v) : 1, _ = S.map((w) => {
      const E = O2(w.dist, b, L, jv, zv), I = D2(h, w.bearing, y, E), $ = r.get(w.wp.id) ?? { pos: I, prevPos: I };
      return { pos: $.pos, prevPos: $.prevPos, target: I, radius: E };
    }), C = p_(_, y, { stiffness: c ? 1 : Gv, friction: c ? 0 : Uv, iterations: Zv }), x = new Set(S.map((w) => w.wp.id));
    for (const w of [...r.keys()]) x.has(w) || r.delete(w);
    let T = true;
    return n.value = S.map((w, E) => {
      const I = C[E], $ = _[E].pos;
      r.set(w.wp.id, { pos: I, prevPos: $ });
      const R = _[E].target;
      return (Math.hypot(I.x - $.x, I.y - $.y) > 0.3 || Math.hypot(I.x - R.x, I.y - R.y) > 0.5) && (T = false), { id: w.wp.id, route: w.wp.route, label: w.wp.label, icon: w.wp.icon, x: I.x, y: I.y, radius: _[E].radius, bearing: w.bearing, opacity: Math.min(1, Math.max(0, (w.dist - $l) / Wv)) };
    }), T;
  }
  let o = 0, a = false;
  function l() {
    const c = s(false);
    if (!e.isAnimating.value && c) {
      a = false, o = 0;
      return;
    }
    o = requestAnimationFrame(l);
  }
  function u() {
    if (i) {
      s(true);
      return;
    }
    a || (a = true, o = requestAnimationFrame(l));
  }
  return te([() => e.camera.value.x, () => e.camera.value.y, () => e.viewport.value, () => e.spacing.value, e.isAnimating, () => t.name], u), Ot(() => i ? s(true) : u()), di(() => {
    o && cancelAnimationFrame(o);
  }), n;
}
const __ = { class: "compass", "aria-label": "Move to a section" }, S_ = ["aria-label", "title", "onClick"], C_ = Xe({ __name: "CompassNav", setup(e) {
  const t = P2(), n = w_();
  function r(i) {
    t.push(i);
  }
  return (i, s) => (oe(), me("nav", __, [(oe(true), me(ye, null, dt(ae(n), (o) => (oe(), me("button", { key: o.id, type: "button", class: "compass__marker", style: Re({ transform: `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`, width: `${o.radius * 2}px`, height: `${o.radius * 2}px`, opacity: o.opacity, pointerEvents: o.opacity > 0.4 ? "auto" : "none" }), "aria-label": `Go to ${o.label}`, title: o.label, onClick: (a) => r(o.route) }, [P("span", { class: "compass__arrow", style: Re({ transform: `rotate(${o.bearing}rad)` }), "aria-hidden": "true" }, null, 4), M(it, { icon: o.icon, size: Math.round(o.radius), class: "compass__icon" }, null, 8, ["icon", "size"])], 12, S_))), 128))]));
} }), x_ = Dt(C_, [["__scopeId", "data-v-8c614831"]]), A_ = J({ ...Ge(), ...Vn(ub(), ["fullHeight"]), ...Vt() }, "VApp"), L_ = Le()({ name: "VApp", props: A_(), setup(e, t) {
  let { slots: n } = t;
  const r = Kt(e), { layoutClasses: i, getLayoutItem: s, items: o, layoutRef: a } = hb({ ...e, fullHeight: true }), { rtlClasses: l } = _r();
  return Fe(() => {
    var _a2;
    return P("div", { ref: a, class: Ae(["v-application", r.themeClasses.value, i.value, l.value, e.class]), style: Re([e.style]) }, [P("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: s, items: o, theme: r };
} }), E_ = Xe({ __name: "App", setup(e) {
  return (t, n) => (oe(), ir(L_, { class: "app-shell" }, { default: De(() => [M(w0), M(xb), M(h_), M(x_)]), _: 1 }));
} }), k_ = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, M_ = { component: Aa }, T_ = im({ icons: { defaultSet: "mdi", aliases: k_, sets: { mdi: M_ } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function P_(e) {
  const t = gr();
  let n = true, r = null;
  const i = (s) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${s}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((s) => {
    const o = Vv(s.name);
    t.panToWaypoint(o, { snap: n }), n || (t.isAnimating.value ? r = o : i(o)), n = false;
  }), te(t.isAnimating, (s) => {
    !s && r !== null && (i(r), r = null);
  });
}
const I_ = Xe({ name: "RouteCoordinate", render: () => null }), R_ = [...vi.map((e) => ({ path: e.route, name: e.id, component: I_ })), { path: "/:pathMatch(.*)*", redirect: "/" }], Na = T2({ history: l2("/"), routes: R_ }), O_ = Wg(E_).use(T_).use(Na);
P_(Na);
Na.isReady().then(() => O_.mount("#app"));
