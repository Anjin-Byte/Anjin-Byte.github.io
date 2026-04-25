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
function Ru(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ut = {}, $l = [], zn = () => {
}, Fv = () => false, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Lu = (e) => e.startsWith("onUpdate:"), At = Object.assign, Fu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kp = Object.prototype.hasOwnProperty, tt = (e, t) => kp.call(e, t), $e = Array.isArray, Rl = (e) => Zo(e) === "[object Map]", Ov = (e) => Zo(e) === "[object Set]", pd = (e) => Zo(e) === "[object Date]", He = (e) => typeof e == "function", yt = (e) => typeof e == "string", Wn = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", Nv = (e) => (et(e) || He(e)) && He(e.then) && He(e.catch), Hv = Object.prototype.toString, Zo = (e) => Hv.call(e), wp = (e) => Zo(e).slice(8, -1), zv = (e) => Zo(e) === "[object Object]", or = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ho = Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ir = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xp = /-\w/g, an = ir((e) => e.replace(xp, (t) => t.slice(1).toUpperCase())), Cp = /\B([A-Z])/g, vl = ir((e) => e.replace(Cp, "-$1").toLowerCase()), Kn = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = ir((e) => e ? `on${Kn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Pi = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Wv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Ou = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _p = (e) => {
  const t = yt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Sd;
const rr = () => Sd || (Sd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function me(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = yt(a) ? Ap(a) : me(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (yt(e) || et(e)) return e;
}
const Vp = /;(?![^(]*\))/g, Ip = /:([^]+)/, Pp = /\/\*[^]*?\*\//g;
function Ap(e) {
  const t = {};
  return e.replace(Pp, "").split(Vp).forEach((n) => {
    if (n) {
      const a = n.split(Ip);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function te(e) {
  let t = "";
  if (yt(e)) t = e;
  else if ($e(e)) for (let n = 0; n < e.length; n++) {
    const a = te(e[n]);
    a && (t += a + " ");
  }
  else if (et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Tp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !yt(t) && (e.class = te(t)), n && (e.style = me(n)), e;
}
const Dp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ep = Ru(Dp);
function jv(e) {
  return !!e || e === "";
}
function Mp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Nu(e[a], t[a]);
  return n;
}
function Nu(e, t) {
  if (e === t) return true;
  let n = pd(e), a = pd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Wn(e), a = Wn(t), n || a) return e === t;
  if (n = $e(e), a = $e(t), n || a) return n && a ? Mp(e, t) : false;
  if (n = et(e), a = et(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Nu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const Uv = (e) => !!(e && e.__v_isRef === true), Ie = (e) => yt(e) ? e : e == null ? "" : $e(e) || et(e) && (e.toString === Hv || !He(e.toString)) ? Uv(e) ? Ie(e.value) : JSON.stringify(e, Gv, 2) : String(e), Gv = (e, t) => Uv(t) ? Gv(e, t.value) : Rl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Kr(a, o) + " =>"] = l, n), {}) } : Ov(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Kr(n)) } : Wn(t) ? Kr(t) : et(t) && !$e(t) && !zv(t) ? String(t) : t, Kr = (e, t = "") => {
  var n;
  return Wn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class Yv {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = jt, !t && jt && (this.index = (jt.scopes || (jt.scopes = [])).push(this) - 1);
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
      const n = jt;
      try {
        return jt = this, t();
      } finally {
        jt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = jt, jt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (jt = this.prevScope, this.prevScope = void 0);
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
function Nl(e) {
  return new Yv(e);
}
function Kv() {
  return jt;
}
function bt(e, t = false) {
  jt && jt.cleanups.push(e);
}
let vt;
const qr = /* @__PURE__ */ new WeakSet();
class qv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jt && jt.active && jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qr.has(this) && (qr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, kd(this), Jv(this);
    const t = vt, n = Vn;
    vt = this, Vn = true;
    try {
      return this.fn();
    } finally {
      Qv(this), vt = t, Vn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Wu(t);
      this.deps = this.depsTail = void 0, kd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Is(this) && this.run();
  }
  get dirty() {
    return Is(this);
  }
}
let Xv = 0, yo, bo;
function Zv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function Hu() {
  Xv++;
}
function zu() {
  if (--Xv > 0) return;
  if (bo) {
    let t = bo;
    for (bo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; yo; ) {
    let t = yo;
    for (yo = void 0; t; ) {
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
function Jv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Wu(a), Bp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (em(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function em(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Is(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = vt, a = Vn;
  vt = e, Vn = true;
  try {
    Jv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    vt = n, Vn = a, Qv(e), e.flags &= -3;
  }
}
function Wu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Wu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Bp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Vn = true;
const tm = [];
function ra() {
  tm.push(Vn), Vn = false;
}
function sa() {
  const e = tm.pop();
  Vn = e === void 0 ? true : e;
}
function kd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = vt;
    vt = void 0;
    try {
      t();
    } finally {
      vt = n;
    }
  }
}
let Io = 0;
class $p {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ju {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!vt || !Vn || vt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== vt) n = this.activeLink = new $p(vt, this), vt.deps ? (n.prevDep = vt.depsTail, vt.depsTail.nextDep = n, vt.depsTail = n) : vt.deps = vt.depsTail = n, nm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = vt.depsTail, n.nextDep = void 0, vt.depsTail.nextDep = n, vt.depsTail = n, vt.deps === n && (vt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Io++, this.notify(t);
  }
  notify(t) {
    Hu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      zu();
    }
  }
}
function nm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) nm(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ri = /* @__PURE__ */ new WeakMap(), Za = Symbol(""), Ps = Symbol(""), Po = Symbol("");
function Ut(e, t, n) {
  if (Vn && vt) {
    let a = Ri.get(e);
    a || Ri.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new ju()), l.map = a, l.key = n), l.track();
  }
}
function la(e, t, n, a, l, o) {
  const i = Ri.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (Hu(), t === "clear") i.forEach(r);
  else {
    const s = $e(e), u = s && or(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !Wn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(Za)), Rl(e) && r(i.get(Ps)));
        break;
      case "delete":
        s || (r(i.get(Za)), Rl(e) && r(i.get(Ps)));
        break;
      case "set":
        Rl(e) && r(i.get(Za));
        break;
    }
  }
  zu();
}
function Rp(e, t) {
  const n = Ri.get(e);
  return n && n.get(t);
}
function Cl(e) {
  const t = De(e);
  return t === e ? t : (Ut(t, "iterate", Po), gn(e) ? t : t.map(An));
}
function sr(e) {
  return Ut(e = De(e), "iterate", Po), e;
}
function Ca(e, t) {
  return ua(e) ? Hl(Ia(e) ? An(t) : t) : An(t);
}
const Lp = { __proto__: null, [Symbol.iterator]() {
  return Xr(this, Symbol.iterator, (e) => Ca(this, e));
}, concat(...e) {
  return Cl(this).concat(...e.map((t) => $e(t) ? Cl(t) : t));
}, entries() {
  return Xr(this, "entries", (e) => (e[1] = Ca(this, e[1]), e));
}, every(e, t) {
  return Qn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Qn(this, "filter", e, t, (n) => n.map((a) => Ca(this, a)), arguments);
}, find(e, t) {
  return Qn(this, "find", e, t, (n) => Ca(this, n), arguments);
}, findIndex(e, t) {
  return Qn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Qn(this, "findLast", e, t, (n) => Ca(this, n), arguments);
}, findLastIndex(e, t) {
  return Qn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Qn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Zr(this, "includes", e);
}, indexOf(...e) {
  return Zr(this, "indexOf", e);
}, join(e) {
  return Cl(this).join(e);
}, lastIndexOf(...e) {
  return Zr(this, "lastIndexOf", e);
}, map(e, t) {
  return Qn(this, "map", e, t, void 0, arguments);
}, pop() {
  return oo(this, "pop");
}, push(...e) {
  return oo(this, "push", e);
}, reduce(e, ...t) {
  return wd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return wd(this, "reduceRight", e, t);
}, shift() {
  return oo(this, "shift");
}, some(e, t) {
  return Qn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return oo(this, "splice", e);
}, toReversed() {
  return Cl(this).toReversed();
}, toSorted(e) {
  return Cl(this).toSorted(e);
}, toSpliced(...e) {
  return Cl(this).toSpliced(...e);
}, unshift(...e) {
  return oo(this, "unshift", e);
}, values() {
  return Xr(this, "values", (e) => Ca(this, e));
} };
function Xr(e, t, n) {
  const a = sr(e), l = a[t]();
  return a !== e && !gn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Fp = Array.prototype;
function Qn(e, t, n, a, l, o) {
  const i = sr(e), r = i !== e && !gn(e), s = i[t];
  if (s !== Fp[t]) {
    const d = s.apply(e, o);
    return r ? An(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, Ca(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function wd(e, t, n, a) {
  const l = sr(e);
  let o = n;
  return l !== e && (gn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ca(e, r), s, e);
  }), l[t](o, ...a);
}
function Zr(e, t, n) {
  const a = De(e);
  Ut(a, "iterate", Po);
  const l = a[t](...n);
  return (l === -1 || l === false) && Jo(n[0]) ? (n[0] = De(n[0]), a[t](...n)) : l;
}
function oo(e, t, n = []) {
  ra(), Hu();
  const a = De(e)[t].apply(e, n);
  return zu(), sa(), a;
}
const Op = Ru("__proto__,__v_isRef,__isVue"), am = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wn));
function Np(e) {
  Wn(e) || (e = String(e));
  const t = De(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class lm {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? Xp : sm : o ? rm : im).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = $e(t);
    if (!l) {
      let s;
      if (i && (s = Lp[n])) return s;
      if (n === "hasOwnProperty") return Np;
    }
    const r = Reflect.get(t, n, ht(t) ? t : a);
    if ((Wn(n) ? am.has(n) : Op(n)) || (l || Ut(t, "get", n), o)) return r;
    if (ht(r)) {
      const s = i && or(n) ? r : r.value;
      return l && et(s) ? al(s) : s;
    }
    return et(r) ? l ? al(r) : Tt(r) : r;
  }
}
class om extends lm {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = $e(t) && or(n);
    if (!this._isShallow) {
      const u = ua(o);
      if (!gn(a) && !ua(a) && (o = De(o), a = De(a)), !i && ht(o) && !ht(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : tt(t, n), s = Reflect.set(t, n, a, ht(t) ? t : l);
    return t === De(l) && (r ? Va(a, o) && la(t, "set", n, a) : la(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = tt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && la(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Wn(n) || !am.has(n)) && Ut(t, "has", n), a;
  }
  ownKeys(t) {
    return Ut(t, "iterate", $e(t) ? "length" : Za), Reflect.ownKeys(t);
  }
}
class Hp extends lm {
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
const zp = new om(), Wp = new Hp(), jp = new om(true);
const As = (e) => e, hi = (e) => Reflect.getPrototypeOf(e);
function Up(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = De(l), i = Rl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? As : t ? Hl : An;
    return !t && Ut(o, "iterate", s ? Ps : Za), At(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function yi(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Gp(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = De(o), r = De(l);
    e || (Va(l, r) && Ut(i, "get", l), Ut(i, "get", r));
    const { has: s } = hi(i), u = t ? As : e ? Hl : An;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Ut(De(l), "iterate", Za), l.size;
  }, has(l) {
    const o = this.__v_raw, i = De(o), r = De(l);
    return e || (Va(l, r) && Ut(i, "has", l), Ut(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = De(r), u = t ? As : e ? Hl : An;
    return !e && Ut(s, "iterate", Za), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return At(n, e ? { add: yi("add"), set: yi("set"), delete: yi("delete"), clear: yi("clear") } : { add(l) {
    !t && !gn(l) && !ua(l) && (l = De(l));
    const o = De(this);
    return hi(o).has.call(o, l) || (o.add(l), la(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !gn(o) && !ua(o) && (o = De(o));
    const i = De(this), { has: r, get: s } = hi(i);
    let u = r.call(i, l);
    u || (l = De(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Va(o, c) && la(i, "set", l, o) : la(i, "add", l, o), this;
  }, delete(l) {
    const o = De(this), { has: i, get: r } = hi(o);
    let s = i.call(o, l);
    s || (l = De(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && la(o, "delete", l, void 0), u;
  }, clear() {
    const l = De(this), o = l.size !== 0, i = l.clear();
    return o && la(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = Up(l, e, t);
  }), n;
}
function Uu(e, t) {
  const n = Gp(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(tt(n, l) && l in a ? n : a, l, o);
}
const Yp = { get: Uu(false, false) }, Kp = { get: Uu(false, true) }, qp = { get: Uu(true, false) };
const im = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakMap(), sm = /* @__PURE__ */ new WeakMap(), Xp = /* @__PURE__ */ new WeakMap();
function Zp(e) {
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
function Jp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zp(wp(e));
}
function Tt(e) {
  return ua(e) ? e : Gu(e, false, zp, Yp, im);
}
function Qp(e) {
  return Gu(e, false, jp, Kp, rm);
}
function al(e) {
  return Gu(e, true, Wp, qp, sm);
}
function Gu(e, t, n, a, l) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Jp(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function Ia(e) {
  return ua(e) ? Ia(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ua(e) {
  return !!(e && e.__v_isReadonly);
}
function gn(e) {
  return !!(e && e.__v_isShallow);
}
function Jo(e) {
  return e ? !!e.__v_raw : false;
}
function De(e) {
  const t = e && e.__v_raw;
  return t ? De(t) : e;
}
function um(e) {
  return !tt(e, "__v_skip") && Object.isExtensible(e) && Wv(e, "__v_skip", true), e;
}
const An = (e) => et(e) ? Tt(e) : e, Hl = (e) => et(e) ? al(e) : e;
function ht(e) {
  return e ? e.__v_isRef === true : false;
}
function X(e) {
  return cm(e, false);
}
function re(e) {
  return cm(e, true);
}
function cm(e, t) {
  return ht(e) ? e : new eS(e, t);
}
class eS {
  constructor(t, n) {
    this.dep = new ju(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : An(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || gn(t) || ua(t);
    t = a ? t : De(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : An(t), this.dep.trigger());
  }
}
function Fe(e) {
  return ht(e) ? e.value : e;
}
function nt(e) {
  return He(e) ? e() : Fe(e);
}
const tS = { get: (e, t, n) => t === "__v_raw" ? e : Fe(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return ht(l) && !ht(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function dm(e) {
  return Ia(e) ? e : new Proxy(e, tS);
}
function Zl(e) {
  const t = $e(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = fm(e, n);
  return t;
}
class nS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = De(t);
    let l = true, o = t;
    if (!$e(t) || !or(String(n))) do
      l = !Jo(o) || gn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Fe(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return Rp(this._raw, this._key);
  }
}
class aS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function $(e, t, n) {
  return ht(e) ? e : He(e) ? new aS(e) : et(e) && arguments.length > 1 ? fm(e, t, n) : X(e);
}
function fm(e, t, n) {
  return new nS(e, t, n);
}
class lS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ju(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && vt !== this) return Zv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return em(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function oS(e, t, n = false) {
  let a, l;
  return He(e) ? a = e : (a = e.get, l = e.set), new lS(a, l, n);
}
const bi = {}, Li = /* @__PURE__ */ new WeakMap();
let Ya;
function iS(e, t = false, n = Ya) {
  if (n) {
    let a = Li.get(n);
    a || Li.set(n, a = []), a.push(e);
  }
}
function rS(e, t, n = ut) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (V) => l ? V : gn(V) || l === false || l === 0 ? oa(V, 1) : oa(V);
  let c, d, f, m, S = false, v = false;
  if (ht(e) ? (d = () => e.value, S = gn(e)) : Ia(e) ? (d = () => u(e), S = true) : $e(e) ? (v = true, S = e.some((V) => Ia(V) || gn(V)), d = () => e.map((V) => {
    if (ht(V)) return V.value;
    if (Ia(V)) return u(V);
    if (He(V)) return s ? s(V, 2) : V();
  })) : He(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ra();
      try {
        f();
      } finally {
        sa();
      }
    }
    const V = Ya;
    Ya = c;
    try {
      return s ? s(e, 3, [m]) : e(m);
    } finally {
      Ya = V;
    }
  } : d = zn, t && l) {
    const V = d, w = l === true ? 1 / 0 : l;
    d = () => oa(V(), w);
  }
  const y = Kv(), h = () => {
    c.stop(), y && y.active && Fu(y.effects, c);
  };
  if (o && t) {
    const V = t;
    t = (...w) => {
      V(...w), h();
    };
  }
  let k = v ? new Array(e.length).fill(bi) : bi;
  const I = (V) => {
    if (!(!(c.flags & 1) || !c.dirty && !V)) if (t) {
      const w = c.run();
      if (l || S || (v ? w.some((g, C) => Va(g, k[C])) : Va(w, k))) {
        f && f();
        const g = Ya;
        Ya = c;
        try {
          const C = [w, k === bi ? void 0 : v && k[0] === bi ? [] : k, m];
          k = w, s ? s(t, 3, C) : t(...C);
        } finally {
          Ya = g;
        }
      }
    } else c.run();
  };
  return r && r(I), c = new qv(d), c.scheduler = i ? () => i(I, false) : I, m = (V) => iS(V, false, c), f = c.onStop = () => {
    const V = Li.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const w of V) w();
      Li.delete(c);
    }
  }, t ? a ? I(true) : k = c.run() : i ? i(I.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function oa(e, t = 1 / 0, n) {
  if (t <= 0 || !et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, ht(e)) oa(e.value, t, n);
  else if ($e(e)) for (let a = 0; a < e.length; a++) oa(e[a], t, n);
  else if (Ov(e) || Rl(e)) e.forEach((a) => {
    oa(a, t, n);
  });
  else if (zv(e)) {
    for (const a in e) oa(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && oa(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ur(l, t, n);
  }
}
function Tn(e, t, n, a) {
  if (He(e)) {
    const l = Qo(e, t, n, a);
    return l && Nv(l) && l.catch((o) => {
      ur(o, t, n);
    }), l;
  }
  if ($e(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(Tn(e[o], t, n, a));
    return l;
  }
}
function ur(e, t, n, a = true) {
  const l = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ut;
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
      ra(), Qo(o, null, 10, [e, s, u]), sa();
      return;
    }
  }
  sS(e, n, l, a, i);
}
function sS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Jt = [];
let Fn = -1;
const Ll = [];
let _a = null, Al = 0;
const vm = Promise.resolve();
let Fi = null;
function Ee(e) {
  const t = Fi || vm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uS(e) {
  let t = Fn + 1, n = Jt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Jt[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Yu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = Jt[Jt.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? Jt.push(e) : Jt.splice(uS(t), 0, e), e.flags |= 1, mm();
  }
}
function mm() {
  Fi || (Fi = vm.then(hm));
}
function cS(e) {
  $e(e) ? Ll.push(...e) : _a && e.id === -1 ? _a.splice(Al + 1, 0, e) : e.flags & 1 || (Ll.push(e), e.flags |= 1), mm();
}
function xd(e, t, n = Fn + 1) {
  for (; n < Jt.length; n++) {
    const a = Jt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Jt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function gm(e) {
  if (Ll.length) {
    const t = [...new Set(Ll)].sort((n, a) => Ao(n) - Ao(a));
    if (Ll.length = 0, _a) {
      _a.push(...t);
      return;
    }
    for (_a = t, Al = 0; Al < _a.length; Al++) {
      const n = _a[Al];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _a = null, Al = 0;
  }
}
const Ao = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hm(e) {
  try {
    for (Fn = 0; Fn < Jt.length; Fn++) {
      const t = Jt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Jt.length; Fn++) {
      const t = Jt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Jt.length = 0, gm(), Fi = null, (Jt.length || Ll.length) && hm();
  }
}
let cn = null, ym = null;
function Oi(e) {
  const t = cn;
  return cn = e, ym = e && e.type.__scopeId || null, t;
}
function Ae(e, t = cn, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && zi(-1);
    const o = Oi(t);
    let i;
    try {
      i = e(...l);
    } finally {
      Oi(o), a._d && zi(1);
    }
    return i;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function at(e, t) {
  if (cn === null) return e;
  const n = gr(cn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = ut] = t[l];
    o && (He(o) && (o = { mounted: o, updated: o }), o.deep && oa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Ha(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (ra(), Tn(s, n, 8, [e.el, r, e, t]), sa());
  }
}
function rt(e, t) {
  if (Yt) {
    let n = Yt.provides;
    const a = Yt.parent && Yt.parent.provides;
    a === n && (n = Yt.provides = Object.create(a)), n[e] = t;
  }
}
function We(e, t, n = false) {
  const a = ti();
  if (a || Fl) {
    let l = Fl ? Fl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && He(t) ? t.call(a && a.proxy) : t;
  }
}
const dS = Symbol.for("v-scx"), fS = () => We(dS);
function ct(e, t) {
  return Ku(e, null, t);
}
function ue(e, t, n) {
  return Ku(e, t, n);
}
function Ku(e, t, n = ut) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = At({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Mo) {
    if (o === "sync") {
      const m = fS();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!s) {
      const m = () => {
      };
      return m.stop = zn, m.resume = zn, m.pause = zn, m;
    }
  }
  const c = Yt;
  r.call = (m, S, v) => Tn(m, c, S, v);
  let d = false;
  o === "post" ? r.scheduler = (m) => {
    Wt(m, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (m, S) => {
    S ? m() : Yu(m);
  }), r.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const f = rS(e, t, r);
  return Mo && (u ? u.push(f) : s && f()), f;
}
function vS(e, t, n) {
  const a = this.proxy, l = yt(e) ? e.includes(".") ? bm(a, e) : () => a[e] : e.bind(a, a);
  let o;
  He(t) ? o = t : (o = t.handler, n = t);
  const i = ni(this), r = Ku(l, o.bind(a), n);
  return i(), r;
}
function bm(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const pm = Symbol("_vte"), Sm = (e) => e.__isTeleport, po = (e) => e && (e.disabled || e.disabled === ""), Cd = (e) => e && (e.defer || e.defer === ""), _d = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Vd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ts = (e, t) => {
  const n = e && e.to;
  return yt(n) ? t ? t(n) : null : n;
}, km = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: m, querySelector: S, createText: v, createComment: y } } = u, h = po(t.props);
  let { shapeFlag: k, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const w = t.el = v(""), g = t.anchor = v("");
    m(w, n, a), m(g, n, a);
    const C = (A, P) => {
      k & 16 && c(I, A, P, l, o, i, r, s);
    }, x = () => {
      const A = t.target = Ts(t.props, S), P = Ds(A, t, v, m);
      A && (i !== "svg" && _d(A) ? i = "svg" : i !== "mathml" && Vd(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Ai(t, false)));
    };
    h && (C(n, g), Ai(t, true)), Cd(t.props) ? (t.el.__isMounted = false, Wt(() => {
      x(), delete t.el.__isMounted;
    }, o)) : x();
  } else {
    if (Cd(t.props) && e.el.__isMounted === false) {
      Wt(() => {
        km.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const w = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, x = po(e.props), A = x ? n : g, P = x ? w : C;
    if (i === "svg" || _d(g) ? i = "svg" : (i === "mathml" || Vd(g)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, A, l, o, i, r), Qu(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, w, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = Ts(t.props, S);
      E && pi(t, E, null, u, 0);
    } else x && pi(t, g, C, u, 1);
    Ai(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const m = o || !po(f);
    for (let S = 0; S < r.length; S++) {
      const v = r[S];
      a(v, t, n, m, !!v.dynamicChildren);
    }
  }
}, move: pi, hydrate: mS };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function mS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(y, h) {
    let k = h;
    for (; k; ) {
      if (k && k.nodeType === 8) {
        if (k.data === "teleport start anchor") t.targetStart = k;
        else if (k.data === "teleport anchor") {
          t.targetAnchor = k, y._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      k = i(k);
    }
  }
  function m(y, h) {
    h.anchor = d(i(y), h, r(y), n, a, l, o);
  }
  const S = t.target = Ts(t.props, s), v = po(t.props);
  if (S) {
    const y = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (v ? (m(e, t), f(S, y), t.targetAnchor || Ds(S, t, c, u, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, y), t.targetAnchor || Ds(S, t, c, u), d(y && i(y), t, S, n, a, l, o))), Ai(t, v);
  } else v && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const gS = km;
function Ai(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Ds(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[pm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const On = Symbol("_leaveCb"), io = Symbol("_enterCb");
function wm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ct(() => {
    e.isMounted = true;
  }), Ht(() => {
    e.isUnmounting = true;
  }), e;
}
const Sn = [Function, Array], xm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Sn, onEnter: Sn, onAfterEnter: Sn, onEnterCancelled: Sn, onBeforeLeave: Sn, onLeave: Sn, onAfterLeave: Sn, onLeaveCancelled: Sn, onBeforeAppear: Sn, onAppear: Sn, onAfterAppear: Sn, onAppearCancelled: Sn }, Cm = (e) => {
  const t = e.subTree;
  return t.component ? Cm(t.component) : t;
}, hS = { name: "BaseTransition", props: xm, setup(e, { slots: t }) {
  const n = ti(), a = wm();
  return () => {
    const l = t.default && qu(t.default(), true);
    if (!l || !l.length) return;
    const o = _m(l), i = De(e), { mode: r } = i;
    if (a.isLeaving) return Jr(o);
    const s = Id(o);
    if (!s) return Jr(o);
    let u = To(s, i, a, n, (d) => u = d);
    s.type !== Gt && ll(s, u);
    let c = n.subTree && Id(n.subTree);
    if (c && c.type !== Gt && !qa(c, s) && Cm(n).type !== Gt) {
      let d = To(c, i, a, n);
      if (ll(c, d), r === "out-in" && s.type !== Gt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, Jr(o);
      r === "in-out" && s.type !== Gt ? d.delayLeave = (f, m, S) => {
        const v = Vm(a, c);
        v[String(c.key)] = c, f[On] = () => {
          m(), f[On] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          S(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function _m(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Gt) {
      t = n;
      break;
    }
  }
  return t;
}
const yS = hS;
function Vm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function To(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: S, onLeaveCancelled: v, onBeforeAppear: y, onAppear: h, onAfterAppear: k, onAppearCancelled: I } = t, V = String(e.key), w = Vm(n, e), g = (A, P) => {
    A && Tn(A, a, 9, P);
  }, C = (A, P) => {
    const E = P[1];
    g(A, P), $e(A) ? A.every((D) => D.length <= 1) && E() : A.length <= 1 && E();
  }, x = { mode: i, persisted: r, beforeEnter(A) {
    let P = s;
    if (!n.isMounted) if (o) P = y || s;
    else return;
    A[On] && A[On](true);
    const E = w[V];
    E && qa(e, E) && E.el[On] && E.el[On](), g(P, [A]);
  }, enter(A) {
    if (w[V] === e) return;
    let P = u, E = c, D = d;
    if (!n.isMounted) if (o) P = h || u, E = k || c, D = I || d;
    else return;
    let M = false;
    A[io] = (L) => {
      M || (M = true, L ? g(D, [A]) : g(E, [A]), x.delayedLeave && x.delayedLeave(), A[io] = void 0);
    };
    const T = A[io].bind(null, false);
    P ? C(P, [A, T]) : T();
  }, leave(A, P) {
    const E = String(e.key);
    if (A[io] && A[io](true), n.isUnmounting) return P();
    g(f, [A]);
    let D = false;
    A[On] = (T) => {
      D || (D = true, P(), T ? g(v, [A]) : g(S, [A]), A[On] = void 0, w[E] === e && delete w[E]);
    };
    const M = A[On].bind(null, false);
    w[E] = e, m ? C(m, [A, M]) : M();
  }, clone(A) {
    const P = To(A, t, n, a, l);
    return l && l(P), P;
  } };
  return x;
}
function Jr(e) {
  if (cr(e)) return e = ca(e), e.children = null, e;
}
function Id(e) {
  if (!cr(e)) return Sm(e.type) && e.children ? _m(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && He(n.default)) return n.default();
  }
}
function ll(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ll(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function qu(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === he ? (i.patchFlag & 128 && l++, a = a.concat(qu(i.children, t, r))) : (t || i.type !== Gt) && a.push(r != null ? ca(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function ln(e, t) {
  return He(e) ? At({ name: e.name }, t, { setup: e }) : e;
}
function Mt() {
  const e = ti();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Im(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ni = /* @__PURE__ */ new WeakMap();
function So(e, t, n, a, l = false) {
  if ($e(e)) {
    e.forEach((v, y) => So(v, t && ($e(t) ? t[y] : t), n, a, l));
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && So(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? gr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === ut ? r.refs = {} : r.refs, d = r.setupState, f = De(d), m = d === ut ? Fv : (v) => Pd(c, v) ? false : tt(f, v), S = (v, y) => !(y && Pd(c, y));
  if (u != null && u !== s) {
    if (Ad(t), yt(u)) c[u] = null, m(u) && (d[u] = null);
    else if (ht(u)) {
      const v = t;
      S(u, v.k) && (u.value = null), v.k && (c[v.k] = null);
    }
  }
  if (He(s)) Qo(s, r, 12, [i, c]);
  else {
    const v = yt(s), y = ht(s);
    if (v || y) {
      const h = () => {
        if (e.f) {
          const k = v ? m(s) ? d[s] : c[s] : S() || !e.k ? s.value : c[e.k];
          if (l) $e(k) && Fu(k, o);
          else if ($e(k)) k.includes(o) || k.push(o);
          else if (v) c[s] = [o], m(s) && (d[s] = c[s]);
          else {
            const I = [o];
            S(s, e.k) && (s.value = I), e.k && (c[e.k] = I);
          }
        } else v ? (c[s] = i, m(s) && (d[s] = i)) : y && (S(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const k = () => {
          h(), Ni.delete(e);
        };
        k.id = -1, Ni.set(e, k), Wt(k, n);
      } else Ad(e), h();
    }
  }
}
function Ad(e) {
  const t = Ni.get(e);
  t && (t.flags |= 8, Ni.delete(e));
}
rr().requestIdleCallback;
rr().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function Pm(e, t) {
  Am(e, "a", t);
}
function Xu(e, t) {
  Am(e, "da", t);
}
function Am(e, t, n = Yt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (dr(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) cr(l.parent.vnode) && bS(a, t, n, l), l = l.parent;
  }
}
function bS(e, t, n, a) {
  const l = dr(t, e, a, true);
  vr(() => {
    Fu(a[t], l);
  }, n);
}
function dr(e, t, n = Yt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ra();
      const r = ni(n), s = Tn(t, n, e, i);
      return r(), sa(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const va = (e) => (t, n = Yt) => {
  (!Mo || e === "sp") && dr(e, (...a) => t(...a), n);
}, Jl = va("bm"), Ct = va("m"), Tm = va("bu"), fr = va("u"), Ht = va("bum"), vr = va("um"), pS = va("sp"), SS = va("rtg"), kS = va("rtc");
function wS(e, t = Yt) {
  dr("ec", e, t);
}
const Dm = "components";
function je(e, t) {
  return Em(Dm, e, true, t) || e;
}
const xS = Symbol.for("v-ndc");
function CS(e) {
  return yt(e) && Em(Dm, e, false) || e;
}
function Em(e, t, n = true, a = false) {
  const l = cn || Yt;
  if (l) {
    const o = l.type;
    {
      const r = ik(o, false);
      if (r && (r === t || r === an(t) || r === Kn(an(t)))) return o;
    }
    const i = Td(l[e] || o[e], t) || Td(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function Td(e, t) {
  return e && (e[t] || e[an(t)] || e[Kn(an(t))]);
}
function Qt(e, t, n, a) {
  let l;
  const o = n, i = $e(e);
  if (i || yt(e)) {
    const r = i && Ia(e);
    let s = false, u = false;
    r && (s = !gn(e), u = ua(e), e = sr(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Hl(An(e[c])) : An(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (et(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
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
const Es = (e) => e ? Jm(e) ? gr(e) : Es(e.parent) : null, wo = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Es(e.parent), $root: (e) => Es(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Bm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Yu(e.update);
}), $nextTick: (e) => e.n || (e.n = Ee.bind(e.proxy)), $watch: (e) => vS.bind(e) }), Qr = (e, t) => e !== ut && !e.__isScriptSetup && tt(e, t), _S = { get({ _: e }, t) {
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
      if (Qr(a, t)) return i[t] = 1, a[t];
      if (l !== ut && tt(l, t)) return i[t] = 2, l[t];
      if (tt(o, t)) return i[t] = 3, o[t];
      if (n !== ut && tt(n, t)) return i[t] = 4, n[t];
      Ms && (i[t] = 0);
    }
  }
  const u = wo[t];
  let c, d;
  if (u) return t === "$attrs" && Ut(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== ut && tt(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, tt(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return Qr(l, t) ? (l[t] = n, true) : a !== ut && tt(a, t) ? (a[t] = n, true) : tt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== ut && r[0] !== "$" && tt(e, r) || Qr(t, r) || tt(o, r) || tt(a, r) || tt(wo, r) || tt(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : tt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Dd(e) {
  return $e(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Ms = true;
function VS(e) {
  const t = Bm(e), n = e.proxy, a = e.ctx;
  Ms = false, t.beforeCreate && Ed(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: m, updated: S, activated: v, deactivated: y, beforeDestroy: h, beforeUnmount: k, destroyed: I, unmounted: V, render: w, renderTracked: g, renderTriggered: C, errorCaptured: x, serverPrefetch: A, expose: P, inheritAttrs: E, components: D, directives: M, filters: T } = t;
  if (u && IS(u, a, null), i) for (const O in i) {
    const Z = i[O];
    He(Z) && (a[O] = Z.bind(n));
  }
  if (l) {
    const O = l.call(n, n);
    et(O) && (e.data = Tt(O));
  }
  if (Ms = true, o) for (const O in o) {
    const Z = o[O], J = He(Z) ? Z.bind(n, n) : He(Z.get) ? Z.get.bind(n, n) : zn, F = !He(Z) && He(Z.set) ? Z.set.bind(n) : zn, G = _({ get: J, set: F });
    Object.defineProperty(a, O, { enumerable: true, configurable: true, get: () => G.value, set: (W) => G.value = W });
  }
  if (r) for (const O in r) Mm(r[O], a, n, O);
  if (s) {
    const O = He(s) ? s.call(n) : s;
    Reflect.ownKeys(O).forEach((Z) => {
      rt(Z, O[Z]);
    });
  }
  c && Ed(c, e, "c");
  function z(O, Z) {
    $e(Z) ? Z.forEach((J) => O(J.bind(n))) : Z && O(Z.bind(n));
  }
  if (z(Jl, d), z(Ct, f), z(Tm, m), z(fr, S), z(Pm, v), z(Xu, y), z(wS, x), z(kS, g), z(SS, C), z(Ht, k), z(vr, V), z(pS, A), $e(P)) if (P.length) {
    const O = e.exposed || (e.exposed = {});
    P.forEach((Z) => {
      Object.defineProperty(O, Z, { get: () => n[Z], set: (J) => n[Z] = J, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  w && e.render === zn && (e.render = w), E != null && (e.inheritAttrs = E), D && (e.components = D), M && (e.directives = M), A && Im(e);
}
function IS(e, t, n = zn) {
  $e(e) && (e = Bs(e));
  for (const a in e) {
    const l = e[a];
    let o;
    et(l) ? "default" in l ? o = We(l.from || a, l.default, true) : o = We(l.from || a) : o = We(l), ht(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Ed(e, t, n) {
  Tn($e(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mm(e, t, n, a) {
  let l = a.includes(".") ? bm(n, a) : () => n[a];
  if (yt(e)) {
    const o = t[e];
    He(o) && ue(l, o);
  } else if (He(e)) ue(l, e.bind(n));
  else if (et(e)) if ($e(e)) e.forEach((o) => Mm(o, t, n, a));
  else {
    const o = He(e.handler) ? e.handler.bind(n) : t[e.handler];
    He(o) && ue(l, o, e);
  }
}
function Bm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Hi(s, u, i, true)), Hi(s, t, i)), et(t) && o.set(t, s), s;
}
function Hi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Hi(e, o, n, true), l && l.forEach((i) => Hi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = PS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const PS = { data: Md, props: Bd, emits: Bd, methods: fo, computed: fo, beforeCreate: Zt, created: Zt, beforeMount: Zt, mounted: Zt, beforeUpdate: Zt, updated: Zt, beforeDestroy: Zt, beforeUnmount: Zt, destroyed: Zt, unmounted: Zt, activated: Zt, deactivated: Zt, errorCaptured: Zt, serverPrefetch: Zt, components: fo, directives: fo, watch: TS, provide: Md, inject: AS };
function Md(e, t) {
  return t ? e ? function() {
    return At(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t);
  } : t : e;
}
function AS(e, t) {
  return fo(Bs(e), Bs(t));
}
function Bs(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fo(e, t) {
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bd(e, t) {
  return e ? $e(e) && $e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(/* @__PURE__ */ Object.create(null), Dd(e), Dd(t ?? {})) : t;
}
function TS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Zt(e[a], t[a]);
  return n;
}
function $m() {
  return { app: null, config: { isNativeTag: Fv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let DS = 0;
function ES(e, t) {
  return function(a, l = null) {
    He(a) || (a = At({}, a)), l != null && !et(l) && (l = null);
    const o = $m(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: DS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: sk, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && He(c.install) ? (i.add(c), c.install(u, ...d)) : He(c) && (i.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, d) {
      return d ? (o.components[c] = d, u) : o.components[c];
    }, directive(c, d) {
      return d ? (o.directives[c] = d, u) : o.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const m = u._ceVNode || p(a, l);
        return m.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(m, c, f), s = true, u._container = c, c.__vue_app__ = u, gr(m.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Tn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Fl;
      Fl = u;
      try {
        return c();
      } finally {
        Fl = d;
      }
    } };
    return u;
  };
}
let Fl = null;
const MS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${an(t)}Modifiers`] || e[`${vl(t)}Modifiers`];
function BS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ut;
  let l = n;
  const o = t.startsWith("update:"), i = o && MS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => yt(c) ? c.trim() : c)), i.number && (l = n.map(Ou)));
  let r, s = a[r = Yr(t)] || a[r = Yr(an(t))];
  !s && o && (s = a[r = Yr(vl(t))]), s && Tn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Tn(u, e, 6, l);
  }
}
const $S = /* @__PURE__ */ new WeakMap();
function Rm(e, t, n = false) {
  const a = n ? $S : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!He(e)) {
    const s = (u) => {
      const c = Rm(u, t, true);
      c && (r = true, At(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (et(e) && a.set(e, null), null) : ($e(o) ? o.forEach((s) => i[s] = null) : At(i, o), et(e) && a.set(e, i), i);
}
function mr(e, t) {
  return !e || !lr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, vl(t)) || tt(e, t));
}
function $d(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: m, ctx: S, inheritAttrs: v } = e, y = Oi(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, w = V;
      h = Nn(u.call(w, V, c, d, m, f, S)), k = r;
    } else {
      const V = t;
      h = Nn(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), k = t.props ? r : RS(r);
    }
  } catch (V) {
    xo.length = 0, ur(V, e, 1), h = p(Gt);
  }
  let I = h;
  if (k && v !== false) {
    const V = Object.keys(k), { shapeFlag: w } = I;
    V.length && w & 7 && (o && V.some(Lu) && (k = LS(k, o)), I = ca(I, k, false, true));
  }
  return n.dirs && (I = ca(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ll(I, n.transition), h = I, Oi(y), h;
}
const RS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, LS = (e, t) => {
  const n = {};
  for (const a in e) (!Lu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function FS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Rd(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Lm(i, a, f) && !mr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Rd(a, i, u) : true : !!i;
  return false;
}
function Rd(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Lm(t, e, o) && !mr(n, o)) return true;
  }
  return false;
}
function Lm(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && et(a) && et(l) ? !Nu(a, l) : a !== l;
}
function OS({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Fm = {}, Om = () => Object.create(Fm), Nm = (e) => Object.getPrototypeOf(e) === Fm;
function NS(e, t, n, a = false) {
  const l = {}, o = Om();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hm(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : Qp(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function HS(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = De(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (mr(e.emitsOptions, f)) continue;
        const m = t[f];
        if (s) if (tt(o, f)) m !== o[f] && (o[f] = m, u = true);
        else {
          const S = an(f);
          l[S] = $s(s, r, S, m, e, false);
        }
        else m !== o[f] && (o[f] = m, u = true);
      }
    }
  } else {
    Hm(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !tt(t, d) && ((c = vl(d)) === d || !tt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = $s(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !tt(t, d)) && (delete o[d], u = true);
  }
  u && la(e.attrs, "set", "");
}
function Hm(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (ho(s)) continue;
    const u = t[s];
    let c;
    l && tt(l, c = an(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : mr(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = De(n), u = r || ut;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = $s(l, s, d, u[d], e, !tt(u, d));
    }
  }
  return i;
}
function $s(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = tt(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && He(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = ni(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[0] && (o && !r ? a = false : i[1] && (a === "" || a === vl(n)) && (a = true));
  }
  return a;
}
const zS = /* @__PURE__ */ new WeakMap();
function zm(e, t, n = false) {
  const a = n ? zS : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!He(e)) {
    const c = (d) => {
      s = true;
      const [f, m] = zm(d, t, true);
      At(i, f), m && r.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return et(e) && a.set(e, $l), $l;
  if ($e(o)) for (let c = 0; c < o.length; c++) {
    const d = an(o[c]);
    Ld(d) && (i[d] = ut);
  }
  else if (o) for (const c in o) {
    const d = an(c);
    if (Ld(d)) {
      const f = o[c], m = i[d] = $e(f) || He(f) ? { type: f } : At({}, f), S = m.type;
      let v = false, y = true;
      if ($e(S)) for (let h = 0; h < S.length; ++h) {
        const k = S[h], I = He(k) && k.name;
        if (I === "Boolean") {
          v = true;
          break;
        } else I === "String" && (y = false);
      }
      else v = He(S) && S.name === "Boolean";
      m[0] = v, m[1] = y, (v || tt(m, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return et(e) && a.set(e, u), u;
}
function Ld(e) {
  return e[0] !== "$" && !ho(e);
}
const Zu = (e) => e === "_" || e === "_ctx" || e === "$stable", Ju = (e) => $e(e) ? e.map(Nn) : [Nn(e)], WS = (e, t, n) => {
  if (t._n) return t;
  const a = Ae((...l) => Ju(t(...l)), n);
  return a._c = false, a;
}, Wm = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Zu(l)) continue;
    const o = e[l];
    if (He(o)) t[l] = WS(l, o, a);
    else if (o != null) {
      const i = Ju(o);
      t[l] = () => i;
    }
  }
}, jm = (e, t) => {
  const n = Ju(t);
  e.slots.default = () => n;
}, Um = (e, t, n) => {
  for (const a in t) (n || !Zu(a)) && (e[a] = t[a]);
}, jS = (e, t, n) => {
  const a = e.slots = Om();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Um(a, t, n), n && Wv(a, "_", l, true)) : Wm(t, a);
  } else t && jm(e, t);
}, US = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = ut;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : Um(l, t, n) : (o = !t.$stable, Wm(t, l)), i = t;
  } else t && (jm(e, t), i = { default: 1 });
  if (o) for (const r in l) !Zu(r) && i[r] == null && delete l[r];
}, Wt = XS;
function GS(e) {
  return YS(e);
}
function YS(e, t) {
  const n = rr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: m = zn, insertStaticContent: S } = e, v = (R, B, K, oe = null, le = null, se = null, ye = void 0, ce = null, U = !!B.dynamicChildren) => {
    if (R === B) return;
    R && !qa(R, B) && (oe = ae(R), W(R, le, se, true), R = null), B.patchFlag === -2 && (U = false, B.dynamicChildren = null);
    const { type: ee, ref: Ce, shapeFlag: q } = B;
    switch (ee) {
      case ei:
        y(R, B, K, oe);
        break;
      case Gt:
        h(R, B, K, oe);
        break;
      case ts:
        R == null && k(B, K, oe, ye);
        break;
      case he:
        D(R, B, K, oe, le, se, ye, ce, U);
        break;
      default:
        q & 1 ? w(R, B, K, oe, le, se, ye, ce, U) : q & 6 ? M(R, B, K, oe, le, se, ye, ce, U) : (q & 64 || q & 128) && ee.process(R, B, K, oe, le, se, ye, ce, U, xe);
    }
    Ce != null && le ? So(Ce, R && R.ref, se, B || R, !B) : Ce == null && R && R.ref != null && So(R.ref, null, se, R, true);
  }, y = (R, B, K, oe) => {
    if (R == null) a(B.el = r(B.children), K, oe);
    else {
      const le = B.el = R.el;
      B.children !== R.children && u(le, B.children);
    }
  }, h = (R, B, K, oe) => {
    R == null ? a(B.el = s(B.children || ""), K, oe) : B.el = R.el;
  }, k = (R, B, K, oe) => {
    [R.el, R.anchor] = S(R.children, B, K, oe, R.el, R.anchor);
  }, I = ({ el: R, anchor: B }, K, oe) => {
    let le;
    for (; R && R !== B; ) le = f(R), a(R, K, oe), R = le;
    a(B, K, oe);
  }, V = ({ el: R, anchor: B }) => {
    let K;
    for (; R && R !== B; ) K = f(R), l(R), R = K;
    l(B);
  }, w = (R, B, K, oe, le, se, ye, ce, U) => {
    if (B.type === "svg" ? ye = "svg" : B.type === "math" && (ye = "mathml"), R == null) g(B, K, oe, le, se, ye, ce, U);
    else {
      const ee = R.el && R.el._isVueCE ? R.el : null;
      try {
        ee && ee._beginPatch(), A(R, B, le, se, ye, ce, U);
      } finally {
        ee && ee._endPatch();
      }
    }
  }, g = (R, B, K, oe, le, se, ye, ce) => {
    let U, ee;
    const { props: Ce, shapeFlag: q, transition: fe, dirs: Se } = R;
    if (U = R.el = i(R.type, se, Ce && Ce.is, Ce), q & 8 ? c(U, R.children) : q & 16 && x(R.children, U, null, oe, le, es(R, se), ye, ce), Se && Ha(R, null, oe, "created"), C(U, R, R.scopeId, ye, oe), Ce) {
      for (const Ve in Ce) Ve !== "value" && !ho(Ve) && o(U, Ve, null, Ce[Ve], se, oe);
      "value" in Ce && o(U, "value", null, Ce.value, se), (ee = Ce.onVnodeBeforeMount) && $n(ee, oe, R);
    }
    Se && Ha(R, null, oe, "beforeMount");
    const ke = KS(le, fe);
    ke && fe.beforeEnter(U), a(U, B, K), ((ee = Ce && Ce.onVnodeMounted) || ke || Se) && Wt(() => {
      ee && $n(ee, oe, R), ke && fe.enter(U), Se && Ha(R, null, oe, "mounted");
    }, le);
  }, C = (R, B, K, oe, le) => {
    if (K && m(R, K), oe) for (let se = 0; se < oe.length; se++) m(R, oe[se]);
    if (le) {
      let se = le.subTree;
      if (B === se || Km(se.type) && (se.ssContent === B || se.ssFallback === B)) {
        const ye = le.vnode;
        C(R, ye, ye.scopeId, ye.slotScopeIds, le.parent);
      }
    }
  }, x = (R, B, K, oe, le, se, ye, ce, U = 0) => {
    for (let ee = U; ee < R.length; ee++) {
      const Ce = R[ee] = ce ? na(R[ee]) : Nn(R[ee]);
      v(null, Ce, B, K, oe, le, se, ye, ce);
    }
  }, A = (R, B, K, oe, le, se, ye) => {
    const ce = B.el = R.el;
    let { patchFlag: U, dynamicChildren: ee, dirs: Ce } = B;
    U |= R.patchFlag & 16;
    const q = R.props || ut, fe = B.props || ut;
    let Se;
    if (K && za(K, false), (Se = fe.onVnodeBeforeUpdate) && $n(Se, K, B, R), Ce && Ha(B, R, K, "beforeUpdate"), K && za(K, true), (q.innerHTML && fe.innerHTML == null || q.textContent && fe.textContent == null) && c(ce, ""), ee ? P(R.dynamicChildren, ee, ce, K, oe, es(B, le), se) : ye || Z(R, B, ce, null, K, oe, es(B, le), se, false), U > 0) {
      if (U & 16) E(ce, q, fe, K, le);
      else if (U & 2 && q.class !== fe.class && o(ce, "class", null, fe.class, le), U & 4 && o(ce, "style", q.style, fe.style, le), U & 8) {
        const ke = B.dynamicProps;
        for (let Ve = 0; Ve < ke.length; Ve++) {
          const Re = ke[Ve], Ge = q[Re], Ne = fe[Re];
          (Ne !== Ge || Re === "value") && o(ce, Re, Ge, Ne, le, K);
        }
      }
      U & 1 && R.children !== B.children && c(ce, B.children);
    } else !ye && ee == null && E(ce, q, fe, K, le);
    ((Se = fe.onVnodeUpdated) || Ce) && Wt(() => {
      Se && $n(Se, K, B, R), Ce && Ha(B, R, K, "updated");
    }, oe);
  }, P = (R, B, K, oe, le, se, ye) => {
    for (let ce = 0; ce < B.length; ce++) {
      const U = R[ce], ee = B[ce], Ce = U.el && (U.type === he || !qa(U, ee) || U.shapeFlag & 198) ? d(U.el) : K;
      v(U, ee, Ce, null, oe, le, se, ye, true);
    }
  }, E = (R, B, K, oe, le) => {
    if (B !== K) {
      if (B !== ut) for (const se in B) !ho(se) && !(se in K) && o(R, se, B[se], null, le, oe);
      for (const se in K) {
        if (ho(se)) continue;
        const ye = K[se], ce = B[se];
        ye !== ce && se !== "value" && o(R, se, ce, ye, le, oe);
      }
      "value" in K && o(R, "value", B.value, K.value, le);
    }
  }, D = (R, B, K, oe, le, se, ye, ce, U) => {
    const ee = B.el = R ? R.el : r(""), Ce = B.anchor = R ? R.anchor : r("");
    let { patchFlag: q, dynamicChildren: fe, slotScopeIds: Se } = B;
    Se && (ce = ce ? ce.concat(Se) : Se), R == null ? (a(ee, K, oe), a(Ce, K, oe), x(B.children || [], K, Ce, le, se, ye, ce, U)) : q > 0 && q & 64 && fe && R.dynamicChildren && R.dynamicChildren.length === fe.length ? (P(R.dynamicChildren, fe, K, le, se, ye, ce), (B.key != null || le && B === le.subTree) && Qu(R, B, true)) : Z(R, B, K, Ce, le, se, ye, ce, U);
  }, M = (R, B, K, oe, le, se, ye, ce, U) => {
    B.slotScopeIds = ce, R == null ? B.shapeFlag & 512 ? le.ctx.activate(B, K, oe, ye, U) : T(B, K, oe, le, se, ye, U) : L(R, B, U);
  }, T = (R, B, K, oe, le, se, ye) => {
    const ce = R.component = tk(R, oe, le);
    if (cr(R) && (ce.ctx.renderer = xe), nk(ce, false, ye), ce.asyncDep) {
      if (le && le.registerDep(ce, z, ye), !R.el) {
        const U = ce.subTree = p(Gt);
        h(null, U, B, K), R.placeholder = U.el;
      }
    } else z(ce, R, B, K, le, se, ye);
  }, L = (R, B, K) => {
    const oe = B.component = R.component;
    if (FS(R, B, K)) if (oe.asyncDep && !oe.asyncResolved) {
      O(oe, B, K);
      return;
    } else oe.next = B, oe.update();
    else B.el = R.el, oe.vnode = B;
  }, z = (R, B, K, oe, le, se, ye) => {
    const ce = () => {
      if (R.isMounted) {
        let { next: q, bu: fe, u: Se, parent: ke, vnode: Ve } = R;
        {
          const lt = Gm(R);
          if (lt) {
            q && (q.el = Ve.el, O(R, q, ye)), lt.asyncDep.then(() => {
              Wt(() => {
                R.isUnmounted || ee();
              }, le);
            });
            return;
          }
        }
        let Re = q, Ge;
        za(R, false), q ? (q.el = Ve.el, O(R, q, ye)) : q = Ve, fe && Pi(fe), (Ge = q.props && q.props.onVnodeBeforeUpdate) && $n(Ge, ke, q, Ve), za(R, true);
        const Ne = $d(R), ft = R.subTree;
        R.subTree = Ne, v(ft, Ne, d(ft.el), ae(ft), R, le, se), q.el = Ne.el, Re === null && OS(R, Ne.el), Se && Wt(Se, le), (Ge = q.props && q.props.onVnodeUpdated) && Wt(() => $n(Ge, ke, q, Ve), le);
      } else {
        let q;
        const { el: fe, props: Se } = B, { bm: ke, m: Ve, parent: Re, root: Ge, type: Ne } = R, ft = ko(B);
        za(R, false), ke && Pi(ke), !ft && (q = Se && Se.onVnodeBeforeMount) && $n(q, Re, B), za(R, true);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(Ne);
          const lt = R.subTree = $d(R);
          v(null, lt, K, oe, R, le, se), B.el = lt.el;
        }
        if (Ve && Wt(Ve, le), !ft && (q = Se && Se.onVnodeMounted)) {
          const lt = B;
          Wt(() => $n(q, Re, lt), le);
        }
        (B.shapeFlag & 256 || Re && ko(Re.vnode) && Re.vnode.shapeFlag & 256) && R.a && Wt(R.a, le), R.isMounted = true, B = K = oe = null;
      }
    };
    R.scope.on();
    const U = R.effect = new qv(ce);
    R.scope.off();
    const ee = R.update = U.run.bind(U), Ce = R.job = U.runIfDirty.bind(U);
    Ce.i = R, Ce.id = R.uid, U.scheduler = () => Yu(Ce), za(R, true), ee();
  }, O = (R, B, K) => {
    B.component = R;
    const oe = R.vnode.props;
    R.vnode = B, R.next = null, HS(R, B.props, oe, K), US(R, B.children, K), ra(), xd(R), sa();
  }, Z = (R, B, K, oe, le, se, ye, ce, U = false) => {
    const ee = R && R.children, Ce = R ? R.shapeFlag : 0, q = B.children, { patchFlag: fe, shapeFlag: Se } = B;
    if (fe > 0) {
      if (fe & 128) {
        F(ee, q, K, oe, le, se, ye, ce, U);
        return;
      } else if (fe & 256) {
        J(ee, q, K, oe, le, se, ye, ce, U);
        return;
      }
    }
    Se & 8 ? (Ce & 16 && be(ee, le, se), q !== ee && c(K, q)) : Ce & 16 ? Se & 16 ? F(ee, q, K, oe, le, se, ye, ce, U) : be(ee, le, se, true) : (Ce & 8 && c(K, ""), Se & 16 && x(q, K, oe, le, se, ye, ce, U));
  }, J = (R, B, K, oe, le, se, ye, ce, U) => {
    R = R || $l, B = B || $l;
    const ee = R.length, Ce = B.length, q = Math.min(ee, Ce);
    let fe;
    for (fe = 0; fe < q; fe++) {
      const Se = B[fe] = U ? na(B[fe]) : Nn(B[fe]);
      v(R[fe], Se, K, null, le, se, ye, ce, U);
    }
    ee > Ce ? be(R, le, se, true, false, q) : x(B, K, oe, le, se, ye, ce, U, q);
  }, F = (R, B, K, oe, le, se, ye, ce, U) => {
    let ee = 0;
    const Ce = B.length;
    let q = R.length - 1, fe = Ce - 1;
    for (; ee <= q && ee <= fe; ) {
      const Se = R[ee], ke = B[ee] = U ? na(B[ee]) : Nn(B[ee]);
      if (qa(Se, ke)) v(Se, ke, K, null, le, se, ye, ce, U);
      else break;
      ee++;
    }
    for (; ee <= q && ee <= fe; ) {
      const Se = R[q], ke = B[fe] = U ? na(B[fe]) : Nn(B[fe]);
      if (qa(Se, ke)) v(Se, ke, K, null, le, se, ye, ce, U);
      else break;
      q--, fe--;
    }
    if (ee > q) {
      if (ee <= fe) {
        const Se = fe + 1, ke = Se < Ce ? B[Se].el : oe;
        for (; ee <= fe; ) v(null, B[ee] = U ? na(B[ee]) : Nn(B[ee]), K, ke, le, se, ye, ce, U), ee++;
      }
    } else if (ee > fe) for (; ee <= q; ) W(R[ee], le, se, true), ee++;
    else {
      const Se = ee, ke = ee, Ve = /* @__PURE__ */ new Map();
      for (ee = ke; ee <= fe; ee++) {
        const st = B[ee] = U ? na(B[ee]) : Nn(B[ee]);
        st.key != null && Ve.set(st.key, ee);
      }
      let Re, Ge = 0;
      const Ne = fe - ke + 1;
      let ft = false, lt = 0;
      const rn = new Array(Ne);
      for (ee = 0; ee < Ne; ee++) rn[ee] = 0;
      for (ee = Se; ee <= q; ee++) {
        const st = R[ee];
        if (Ge >= Ne) {
          W(st, le, se, true);
          continue;
        }
        let pn;
        if (st.key != null) pn = Ve.get(st.key);
        else for (Re = ke; Re <= fe; Re++) if (rn[Re - ke] === 0 && qa(st, B[Re])) {
          pn = Re;
          break;
        }
        pn === void 0 ? W(st, le, se, true) : (rn[pn - ke] = ee + 1, pn >= lt ? lt = pn : ft = true, v(st, B[pn], K, null, le, se, ye, ce, U), Ge++);
      }
      const ka = ft ? qS(rn) : $l;
      for (Re = ka.length - 1, ee = Ne - 1; ee >= 0; ee--) {
        const st = ke + ee, pn = B[st], yd = B[st + 1], bd = st + 1 < Ce ? yd.el || Ym(yd) : oe;
        rn[ee] === 0 ? v(null, pn, K, bd, le, se, ye, ce, U) : ft && (Re < 0 || ee !== ka[Re] ? G(pn, K, bd, 2) : Re--);
      }
    }
  }, G = (R, B, K, oe, le = null) => {
    const { el: se, type: ye, transition: ce, children: U, shapeFlag: ee } = R;
    if (ee & 6) {
      G(R.component.subTree, B, K, oe);
      return;
    }
    if (ee & 128) {
      R.suspense.move(B, K, oe);
      return;
    }
    if (ee & 64) {
      ye.move(R, B, K, xe);
      return;
    }
    if (ye === he) {
      a(se, B, K);
      for (let q = 0; q < U.length; q++) G(U[q], B, K, oe);
      a(R.anchor, B, K);
      return;
    }
    if (ye === ts) {
      I(R, B, K);
      return;
    }
    if (oe !== 2 && ee & 1 && ce) if (oe === 0) ce.beforeEnter(se), a(se, B, K), Wt(() => ce.enter(se), le);
    else {
      const { leave: q, delayLeave: fe, afterLeave: Se } = ce, ke = () => {
        R.ctx.isUnmounted ? l(se) : a(se, B, K);
      }, Ve = () => {
        se._isLeaving && se[On](true), q(se, () => {
          ke(), Se && Se();
        });
      };
      fe ? fe(se, ke, Ve) : Ve();
    }
    else a(se, B, K);
  }, W = (R, B, K, oe = false, le = false) => {
    const { type: se, props: ye, ref: ce, children: U, dynamicChildren: ee, shapeFlag: Ce, patchFlag: q, dirs: fe, cacheIndex: Se } = R;
    if (q === -2 && (le = false), ce != null && (ra(), So(ce, null, K, R, true), sa()), Se != null && (B.renderCache[Se] = void 0), Ce & 256) {
      B.ctx.deactivate(R);
      return;
    }
    const ke = Ce & 1 && fe, Ve = !ko(R);
    let Re;
    if (Ve && (Re = ye && ye.onVnodeBeforeUnmount) && $n(Re, B, R), Ce & 6) ie(R.component, K, oe);
    else {
      if (Ce & 128) {
        R.suspense.unmount(K, oe);
        return;
      }
      ke && Ha(R, null, B, "beforeUnmount"), Ce & 64 ? R.type.remove(R, B, K, xe, oe) : ee && !ee.hasOnce && (se !== he || q > 0 && q & 64) ? be(ee, B, K, false, true) : (se === he && q & 384 || !le && Ce & 16) && be(U, B, K), oe && N(R);
    }
    (Ve && (Re = ye && ye.onVnodeUnmounted) || ke) && Wt(() => {
      Re && $n(Re, B, R), ke && Ha(R, null, B, "unmounted");
    }, K);
  }, N = (R) => {
    const { type: B, el: K, anchor: oe, transition: le } = R;
    if (B === he) {
      j(K, oe);
      return;
    }
    if (B === ts) {
      V(R);
      return;
    }
    const se = () => {
      l(K), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if (R.shapeFlag & 1 && le && !le.persisted) {
      const { leave: ye, delayLeave: ce } = le, U = () => ye(K, se);
      ce ? ce(R.el, se, U) : U();
    } else se();
  }, j = (R, B) => {
    let K;
    for (; R !== B; ) K = f(R), l(R), R = K;
    l(B);
  }, ie = (R, B, K) => {
    const { bum: oe, scope: le, job: se, subTree: ye, um: ce, m: U, a: ee } = R;
    Fd(U), Fd(ee), oe && Pi(oe), le.stop(), se && (se.flags |= 8, W(ye, R, B, K)), ce && Wt(ce, B), Wt(() => {
      R.isUnmounted = true;
    }, B);
  }, be = (R, B, K, oe = false, le = false, se = 0) => {
    for (let ye = se; ye < R.length; ye++) W(R[ye], B, K, oe, le);
  }, ae = (R) => {
    if (R.shapeFlag & 6) return ae(R.component.subTree);
    if (R.shapeFlag & 128) return R.suspense.next();
    const B = f(R.anchor || R.el), K = B && B[pm];
    return K ? f(K) : B;
  };
  let de = false;
  const Pe = (R, B, K) => {
    let oe;
    R == null ? B._vnode && (W(B._vnode, null, null, true), oe = B._vnode.component) : v(B._vnode || null, R, B, null, null, null, K), B._vnode = R, de || (de = true, xd(oe), gm(), de = false);
  }, xe = { p: v, um: W, m: G, r: N, mt: T, mc: x, pc: Z, pbc: P, n: ae, o: e };
  return { render: Pe, hydrate: void 0, createApp: ES(Pe) };
}
function es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function za({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function KS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qu(e, t, n = false) {
  const a = e.children, l = t.children;
  if ($e(a) && $e(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = na(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Qu(i, r)), r.type === ei && (r.patchFlag === -1 && (r = l[o] = na(r)), r.el = i.el), r.type === Gt && !r.el && (r.el = i.el);
  }
}
function qS(e) {
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
function Gm(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Gm(t);
}
function Fd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ym(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Ym(t.subTree) : null;
}
const Km = (e) => e.__isSuspense;
function XS(e, t) {
  t && t.pendingBranch ? $e(e) ? t.effects.push(...e) : t.effects.push(e) : cS(e);
}
const he = Symbol.for("v-fgt"), ei = Symbol.for("v-txt"), Gt = Symbol.for("v-cmt"), ts = Symbol.for("v-stc"), xo = [];
let dn = null;
function Te(e = false) {
  xo.push(dn = e ? null : []);
}
function ZS() {
  xo.pop(), dn = xo[xo.length - 1] || null;
}
let Do = 1;
function zi(e, t = false) {
  Do += e, e < 0 && dn && t && (dn.hasOnce = true);
}
function qm(e) {
  return e.dynamicChildren = Do > 0 ? dn || $l : null, ZS(), Do > 0 && dn && dn.push(e), e;
}
function Oe(e, t, n, a, l, o) {
  return qm(b(e, t, n, a, l, o, true));
}
function en(e, t, n, a, l) {
  return qm(p(e, t, n, a, l, true));
}
function Eo(e) {
  return e ? e.__v_isVNode === true : false;
}
function qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xm = ({ key: e }) => e ?? null, Ti = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || ht(e) || He(e) ? { i: cn, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, a = 0, l = null, o = e === he ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Xm(t), ref: t && Ti(t), scopeId: ym, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: cn };
  return r ? (ec(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= yt(n) ? 8 : 16), Do > 0 && !i && dn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && dn.push(s), s;
}
const p = JS;
function JS(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === xS) && (e = Gt), Eo(e)) {
    const r = ca(e, t, true);
    return n && ec(r, n), Do > 0 && !o && dn && (r.shapeFlag & 6 ? dn[dn.indexOf(e)] = r : dn.push(r)), r.patchFlag = -2, r;
  }
  if (rk(e) && (e = e.__vccOpts), t) {
    t = Zm(t);
    let { class: r, style: s } = t;
    r && !yt(r) && (t.class = te(r)), et(s) && (Jo(s) && !$e(s) && (s = At({}, s)), t.style = me(s));
  }
  const i = yt(e) ? 1 : Km(e) ? 128 : Sm(e) ? 64 : et(e) ? 4 : He(e) ? 2 : 0;
  return b(e, t, n, a, l, i, o, true);
}
function Zm(e) {
  return e ? Jo(e) || Nm(e) ? At({}, e) : e : null;
}
function ca(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? Y(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Xm(u), ref: t && t.ref ? n && o ? $e(o) ? o.concat(Ti(t)) : [o, Ti(t)] : Ti(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== he ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ca(e.ssContent), ssFallback: e.ssFallback && ca(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ll(c, s.clone(c)), c;
}
function Ke(e = " ", t = 0) {
  return p(ei, null, e, t);
}
function Ft(e = "", t = false) {
  return t ? (Te(), en(Gt, null, e)) : p(Gt, null, e);
}
function Nn(e) {
  return e == null || typeof e == "boolean" ? p(Gt) : $e(e) ? p(he, null, e.slice()) : Eo(e) ? na(e) : p(ei, null, String(e));
}
function na(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function ec(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if ($e(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), ec(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Nm(t) ? t._ctx = cn : l === 3 && cn && (cn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else He(t) ? (t = { default: t, _ctx: cn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Ke(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Y(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = te([t.class, a.class]));
    else if (l === "style") t.style = me([t.style, a.style]);
    else if (lr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !($e(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function $n(e, t, n, a = null) {
  Tn(e, t, 7, [n, a]);
}
const QS = $m();
let ek = 0;
function tk(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || QS, o = { uid: ek++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Yv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: zm(a, l), emitsOptions: Rm(a, l), emit: null, emitted: null, propsDefaults: ut, inheritAttrs: a.inheritAttrs, ctx: ut, data: ut, props: ut, attrs: ut, slots: ut, refs: ut, setupState: ut, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = BS.bind(null, o), e.ce && e.ce(o), o;
}
let Yt = null;
const ti = () => Yt || cn;
let Wi, Rs;
{
  const e = rr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Wi = t("__VUE_INSTANCE_SETTERS__", (n) => Yt = n), Rs = t("__VUE_SSR_SETTERS__", (n) => Mo = n);
}
const ni = (e) => {
  const t = Yt;
  return Wi(e), e.scope.on(), () => {
    e.scope.off(), Wi(t);
  };
}, Od = () => {
  Yt && Yt.scope.off(), Wi(null);
};
function Jm(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = false;
function nk(e, t = false, n = false) {
  t && Rs(t);
  const { props: a, children: l } = e.vnode, o = Jm(e);
  NS(e, a, o, t), jS(e, l, n || t);
  const i = o ? ak(e, t) : void 0;
  return t && Rs(false), i;
}
function ak(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _S);
  const { setup: a } = n;
  if (a) {
    ra();
    const l = e.setupContext = a.length > 1 ? ok(e) : null, o = ni(e), i = Qo(a, e, 0, [e.props, l]), r = Nv(i);
    if (sa(), o(), (r || e.sp) && !ko(e) && Im(e), r) {
      if (i.then(Od, Od), t) return i.then((s) => {
        Nd(e, s);
      }).catch((s) => {
        ur(s, e, 0);
      });
      e.asyncDep = i;
    } else Nd(e, i);
  } else Qm(e);
}
function Nd(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = dm(t)), Qm(e);
}
function Qm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || zn);
  {
    const l = ni(e);
    ra();
    try {
      VS(e);
    } finally {
      sa(), l();
    }
  }
}
const lk = { get(e, t) {
  return Ut(e, "get", ""), e[t];
} };
function ok(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, lk), slots: e.slots, emit: e.emit, expose: t };
}
function gr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dm(um(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in wo) return wo[n](e);
  }, has(t, n) {
    return n in t || n in wo;
  } })) : e.proxy;
}
function ik(e, t = true) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rk(e) {
  return He(e) && "__vccOpts" in e;
}
const _ = (e, t) => oS(e, t, Mo);
function ma(e, t, n) {
  try {
    zi(-1);
    const a = arguments.length;
    return a === 2 ? et(t) && !$e(t) ? Eo(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Eo(n) && (n = [n]), p(e, t, n));
  } finally {
    zi(1);
  }
}
const sk = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ls;
const Hd = typeof window < "u" && window.trustedTypes;
if (Hd) try {
  Ls = Hd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const eg = Ls ? (e) => Ls.createHTML(e) : (e) => e, uk = "http://www.w3.org/2000/svg", ck = "http://www.w3.org/1998/Math/MathML", ta = typeof document < "u" ? document : null, zd = ta && ta.createElement("template"), dk = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? ta.createElementNS(uk, e) : t === "mathml" ? ta.createElementNS(ck, e) : n ? ta.createElement(e, { is: n }) : ta.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => ta.createTextNode(e), createComment: (e) => ta.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => ta.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === o || !(l = l.nextSibling)); ) ;
  else {
    zd.innerHTML = eg(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = zd.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, wa = "transition", ro = "animation", zl = Symbol("_vtc"), tg = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, ng = At({}, xm, tg), fk = (e) => (e.displayName = "Transition", e.props = ng, e), Da = fk((e, { slots: t }) => ma(yS, ag(e), t)), Wa = (e, t = []) => {
  $e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Wd = (e) => e ? $e(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function ag(e) {
  const t = {};
  for (const D in e) D in tg || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, S = vk(l), v = S && S[0], y = S && S[1], { onBeforeEnter: h, onEnter: k, onEnterCancelled: I, onLeave: V, onLeaveCancelled: w, onBeforeAppear: g = h, onAppear: C = k, onAppearCancelled: x = I } = t, A = (D, M, T, L) => {
    D._enterCancelled = L, xa(D, M ? c : r), xa(D, M ? u : i), T && T();
  }, P = (D, M) => {
    D._isLeaving = false, xa(D, d), xa(D, m), xa(D, f), M && M();
  }, E = (D) => (M, T) => {
    const L = D ? C : k, z = () => A(M, D, T);
    Wa(L, [M, z]), jd(() => {
      xa(M, D ? s : o), Ln(M, D ? c : r), Wd(L) || Ud(M, a, v, z);
    });
  };
  return At(t, { onBeforeEnter(D) {
    Wa(h, [D]), Ln(D, o), Ln(D, i);
  }, onBeforeAppear(D) {
    Wa(g, [D]), Ln(D, s), Ln(D, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const T = () => P(D, M);
    Ln(D, d), D._enterCancelled ? (Ln(D, f), Fs(D)) : (Fs(D), Ln(D, f)), jd(() => {
      D._isLeaving && (xa(D, d), Ln(D, m), Wd(V) || Ud(D, a, y, T));
    }), Wa(V, [D, T]);
  }, onEnterCancelled(D) {
    A(D, false, void 0, true), Wa(I, [D]);
  }, onAppearCancelled(D) {
    A(D, true, void 0, true), Wa(x, [D]);
  }, onLeaveCancelled(D) {
    P(D), Wa(w, [D]);
  } });
}
function vk(e) {
  if (e == null) return null;
  if (et(e)) return [ns(e.enter), ns(e.leave)];
  {
    const t = ns(e);
    return [t, t];
  }
}
function ns(e) {
  return _p(e);
}
function Ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[zl] || (e[zl] = /* @__PURE__ */ new Set())).add(t);
}
function xa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[zl];
  n && (n.delete(t), n.size || (e[zl] = void 0));
}
function jd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let mk = 0;
function Ud(e, t, n, a) {
  const l = e._endId = ++mk, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = lg(e, t);
  if (!i) return a();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), o();
  }, f = (m) => {
    m.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, r + 1), e.addEventListener(u, f);
}
function lg(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${wa}Delay`), o = a(`${wa}Duration`), i = Gd(l, o), r = a(`${ro}Delay`), s = a(`${ro}Duration`), u = Gd(r, s);
  let c = null, d = 0, f = 0;
  t === wa ? i > 0 && (c = wa, d = i, f = o.length) : t === ro ? u > 0 && (c = ro, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? wa : ro : null, f = c ? c === wa ? o.length : s.length : 0);
  const m = c === wa && /\b(?:transform|all)(?:,|$)/.test(a(`${wa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: m };
}
function Gd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Yd(n) + Yd(e[a])));
}
function Yd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function gk(e, t, n) {
  const a = e[zl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ji = Symbol("_vod"), og = Symbol("_vsh"), Mn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[ji] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : so(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: a }) {
  !t != !n && (a ? t ? (a.beforeEnter(e), so(e, true), a.enter(e)) : a.leave(e, () => {
    so(e, false);
  }) : so(e, t));
}, beforeUnmount(e, { value: t }) {
  so(e, t);
} };
function so(e, t) {
  e.style.display = t ? e[ji] : "none", e[og] = !t;
}
const hk = Symbol(""), yk = /(?:^|;)\s*display\s*:/;
function bk(e, t, n) {
  const a = e.style, l = yt(n);
  let o = false;
  if (n && !l) {
    if (t) if (yt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Di(a, r, "");
    }
    else for (const i in t) n[i] == null && Di(a, i, "");
    for (const i in n) i === "display" && (o = true), Di(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[hk];
      i && (n += ";" + i), a.cssText = n, o = yk.test(n);
    }
  } else t && e.removeAttribute("style");
  ji in e && (e[ji] = o ? a.display : "", e[og] && (a.display = "none"));
}
const Kd = /\s*!important$/;
function Di(e, t, n) {
  if ($e(n)) n.forEach((a) => Di(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = pk(e, t);
    Kd.test(n) ? e.setProperty(vl(a), n.replace(Kd, ""), "important") : e[a] = n;
  }
}
const qd = ["Webkit", "Moz", "ms"], as = {};
function pk(e, t) {
  const n = as[t];
  if (n) return n;
  let a = an(t);
  if (a !== "filter" && a in e) return as[t] = a;
  a = Kn(a);
  for (let l = 0; l < qd.length; l++) {
    const o = qd[l] + a;
    if (o in e) return as[t] = o;
  }
  return t;
}
const Xd = "http://www.w3.org/1999/xlink";
function Zd(e, t, n, a, l, o = Ep(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xd, t.slice(6, t.length)) : e.setAttributeNS(Xd, t, n) : n == null || o && !jv(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Wn(n) ? String(n) : n);
}
function Jd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? eg(n) : n);
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
    r === "boolean" ? n = jv(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function Tl(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Sk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Qd = Symbol("_vei");
function kk(e, t, n, a, l = null) {
  const o = e[Qd] || (e[Qd] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = wk(t);
    if (a) {
      const u = o[t] = _k(a, l);
      Tl(e, r, u, s);
    } else i && (Sk(e, r, i, s), o[t] = void 0);
  }
}
const ef = /(?:Once|Passive|Capture)$/;
function wk(e) {
  let t;
  if (ef.test(e)) {
    t = {};
    let a;
    for (; a = e.match(ef); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : vl(e.slice(2)), t];
}
let ls = 0;
const xk = Promise.resolve(), Ck = () => ls || (xk.then(() => ls = 0), ls = Date.now());
function _k(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Tn(Vk(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = Ck(), n;
}
function Vk(e, t) {
  if ($e(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const tf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ik = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? gk(e, a, i) : t === "style" ? bk(e, n, a) : lr(t) ? Lu(t) || kk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Pk(e, t, a, i)) ? (Jd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !yt(a)) ? Jd(e, an(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Zd(e, t, a, i));
};
function Pk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && tf(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return tf(t) && yt(n) ? false : t in e;
}
const ig = /* @__PURE__ */ new WeakMap(), rg = /* @__PURE__ */ new WeakMap(), Ui = Symbol("_moveCb"), nf = Symbol("_enterCb"), Ak = (e) => (delete e.props.mode, e), Tk = Ak({ name: "TransitionGroup", props: At({}, ng, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ti(), a = wm();
  let l, o;
  return fr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!Bk(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Dk), l.forEach(Ek);
    const r = l.filter(Mk);
    Fs(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Ln(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Ui] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Ui] = null, xa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = De(e), r = ag(i);
    let s = i.tag || he;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ll(c, To(c, r, a, n)), ig.set(c, sg(c.el)));
    }
    o = t.default ? qu(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ll(c, To(c, r, a, n));
    }
    return p(s, null, o);
  };
} }), tc = Tk;
function Dk(e) {
  const t = e.el;
  t[Ui] && t[Ui](), t[nf] && t[nf]();
}
function Ek(e) {
  rg.set(e, sg(e.el));
}
function Mk(e) {
  const t = ig.get(e), n = rg.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function sg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Bk(e, t, n) {
  const a = e.cloneNode(), l = e[zl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = lg(a);
  return o.removeChild(a), i;
}
const af = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return $e(t) ? (n) => Pi(t, n) : t;
};
function $k(e) {
  e.target.composing = true;
}
function lf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const os = Symbol("_assign");
function of(e, t, n) {
  return t && (e = e.trim()), n && (e = Ou(e)), e;
}
const Rk = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[os] = af(l);
  const o = a || l.props && l.props.type === "number";
  Tl(e, t ? "change" : "input", (i) => {
    i.target.composing || e[os](of(e.value, n, o));
  }), (n || o) && Tl(e, "change", () => {
    e.value = of(e.value, n, o);
  }), t || (Tl(e, "compositionstart", $k), Tl(e, "compositionend", lf), Tl(e, "change", lf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[os] = af(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ou(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, Lk = ["ctrl", "shift", "alt", "meta"], Fk = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Lk.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = Fk[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, Ok = At({ patchProp: Ik }, dk);
let rf;
function ug() {
  return rf || (rf = GS(Ok));
}
const cg = ((...e) => {
  ug().render(...e);
}), Nk = ((...e) => {
  const t = ug().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = zk(a);
    if (!l) return;
    const o = t._component;
    !He(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, Hk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function Hk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function zk(e) {
  return yt(e) ? document.querySelector(e) : e;
}
const sf = () => {
};
function dg(e) {
  const t = `[${e}]`;
  return { debug: sf, info: sf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const uf = 5;
function Wk(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * uf)));
  return e / (l * uf);
}
function fg(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function jk(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
function Uk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function Gk(e, t) {
  return e * t.gridPitch / t.dpr;
}
const vg = 1, Yk = `gol.gridBlankZones.v${vg}`, Kk = 128;
function qk(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const Xk = /* @__PURE__ */ new Set(["minor", "major", "both"]), Zk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function is(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function El(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Jk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Qk(e) {
  return typeof e == "string" && Xk.has(e) ? e : "both";
}
function ew(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Zk.has(t.style) ? t.style : "none", a = is(El(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = is(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = is(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, El(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function tw(e) {
  return typeof e == "boolean" ? e : true;
}
function cf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function mg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = El(n.x1), l = El(n.y1), o = El(n.x2), i = El(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Jk(), x1: r, y1: u, x2: s, y2: c, mode: Qk(n.mode), edge: ew(n.edge), enabled: tw(n.enabled), createdAt: cf(n.createdAt, t), updatedAt: cf(n.updatedAt, t) };
}
function gg(e, t = Date.now()) {
  return qk(e, mg, Kk, t);
}
function rs() {
  return typeof localStorage < "u";
}
function hg(e) {
  return { load() {
    if (!rs()) return [];
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
    if (!rs()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    rs() && localStorage.removeItem(e.key);
  } };
}
const nc = hg({ key: Yk, version: vg, normalize: gg, itemsKey: "zones" }), nw = nc.load, aw = nc.save, lw = nc.clear;
function yg(e) {
  const t = X(e.storage.load());
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
function ow(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = yg({ storage: { load: nw, save: aw, clear: lw }, normalize: gg, normalizeOne: mg, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const bg = 4, Os = 2, Ns = 8, Ei = 8, ss = 2, iw = "gol.hires";
function ki(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function rw() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function df(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function hr(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = ki(n.x1), l = ki(n.y1), o = ki(n.x2), i = ki(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : rw(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), multiplier: typeof n.multiplier == "number" && Number.isFinite(n.multiplier) ? Math.trunc(Math.max(Os, Math.min(Ns, n.multiplier))) : bg, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, tickMultiplier: typeof n.tickMultiplier == "number" && Number.isFinite(n.tickMultiplier) && n.tickMultiplier >= 1 ? Math.trunc(n.tickMultiplier) : 1, createdAt: df(n.createdAt, t), updatedAt: df(n.updatedAt, t) };
}
function sw(e, t) {
  return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
}
function ac(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= Ei) break;
    const l = hr(a, t);
    !l || n.some((i) => sw(i, l)) || n.push(l);
  }
  return n;
}
const ff = "gol.hires.v1", lc = hg({ key: iw, version: ss, normalize: ac, itemsKey: "regions", migrate(e) {
  if (e.region && !e.regions) {
    const t = hr(e.region);
    return { ...e, regions: t ? [t] : [], version: ss };
  }
  return { ...e, version: ss };
} }), uw = lc.load;
function cw() {
  const e = uw();
  if (e.length > 0) return e;
  if (typeof localStorage > "u") return [];
  try {
    const t = localStorage.getItem(ff);
    if (!t) return [];
    localStorage.removeItem(ff);
    const n = JSON.parse(t);
    if (n.region) {
      const a = hr(n.region);
      return a ? [a] : [];
    }
    return ac(n.regions);
  } catch {
    return [];
  }
}
const dw = lc.save, fw = lc.clear;
function vw(e = {}) {
  const { items: t, addItem: n, updateItem: a, removeItem: l, clearItems: o, syncFromWorker: i } = yg({ storage: { load: cw, save: dw, clear: fw }, normalize: ac, normalizeOne: hr, onSet: e.onSetRegions, onAdd: e.onAddRegion, onUpdate: e.onUpdateRegion, onRemove: e.onRemoveRegion, onClear: e.onClearRegions });
  return { regions: t, addRegion: n, updateRegion: a, removeRegion: l, clearRegions: o, syncFromWorker: i };
}
const vf = dg("WorkerBridge");
function mw() {
  let e = null;
  const t = X(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      vf.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
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
  function i(s, u) {
    const c = new Worker(new URL("/assets/backgroundRenderer-BUwMKoG3.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      vf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const us = 5, gw = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), hw = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function yw(e, t) {
  function n() {
    const s = e.value;
    return !s || s.gridPitch === 0 ? null : { gridPitch: s.gridPitch, scrollCanvasPx: t.value, dpr: devicePixelRatio, screenCols: s.screenCols, screenRows: s.screenRows };
  }
  function a(s, u) {
    return (s % u.screenCols + u.screenCols) % u.screenCols;
  }
  function l(s) {
    const u = n();
    if (!u) return null;
    const c = fg(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / us) * us, d = (f) => c(f) + (us - 1);
    return { x1: Math.max(0, Math.min(u.screenCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.screenCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(hw)) return true;
    let u = s;
    for (; u; ) {
      if (gw.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: Uk, cellSpanToCssPx: Gk, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToViewport: a };
}
function bw() {
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
function pw(e) {
  const t = /* @__PURE__ */ new Map(), n = X(null), a = X(null), l = X(null);
  let o = null, i = null;
  function r(y, h) {
    t.set(y, h);
  }
  function s() {
    for (const y of t.values()) if (y.isEnabled()) return true;
    return false;
  }
  function u() {
    const y = a.value, h = e.makeSnapshot();
    if (!y || !h) {
      l.value = null;
      return;
    }
    const k = e.cellToScreen(y.x1, y.y1, h), I = e.cellSpanToCssPx(y.x2 - y.x1 + 1, h), V = e.cellSpanToCssPx(y.y2 - y.y1 + 1, h);
    l.value = { left: `${k.cssX}px`, top: `${k.cssY}px`, width: `${I}px`, height: `${V}px` };
  }
  function c() {
    o = null, n.value = null, i = null, a.value = null, l.value = null;
  }
  function d(y) {
    n.value === y && c();
  }
  function f(y) {
    if (y.button !== 0 || e.isInteractiveTarget(y.target)) return;
    let h = null;
    for (const V of t.entries()) V[1].isEnabled() && (!h || V[1].priority > h[1].priority) && (h = V);
    if (!h) return;
    const k = e.pointerToCell(y);
    if (!k) return;
    n.value = h[0], o = k;
    const I = { x1: k.cx, y1: k.cy, x2: k.cx, y2: k.cy };
    h[1].dragMode === "paint" && (i = { ...I }), a.value = I, u(), y.target instanceof Element && y.target.setPointerCapture(y.pointerId), y.preventDefault();
  }
  function m(y) {
    var _a3;
    if (!n.value || !o) return;
    const h = t.get(n.value);
    if (!h) return;
    const k = e.pointerToCell(y), I = e.makeSnapshot();
    if (!(!k || !I)) {
      if (h.dragMode === "paint" && i) i.x1 = Math.min(i.x1, k.cx), i.y1 = Math.min(i.y1, k.cy), i.x2 = Math.max(i.x2, k.cx), i.y2 = Math.max(i.y2, k.cy), a.value = { ...i };
      else {
        const V = e.normalizeRect(o, k);
        a.value = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) ? e.snapRectToMajor(V, I) : V;
      }
      u();
    }
  }
  function S(y) {
    var _a3;
    if (!n.value || !o || y.button !== 0) return;
    y.target instanceof Element && y.target.hasPointerCapture(y.pointerId) && y.target.releasePointerCapture(y.pointerId);
    const h = t.get(n.value);
    if (!h) {
      c();
      return;
    }
    const k = e.pointerToCell(y), I = e.makeSnapshot();
    let V;
    if (h.dragMode === "paint" && i) k && (i.x1 = Math.min(i.x1, k.cx), i.y1 = Math.min(i.y1, k.cy), i.x2 = Math.max(i.x2, k.cx), i.y2 = Math.max(i.y2, k.cy)), V = i;
    else if (k) {
      const g = e.normalizeRect(o, k);
      V = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) && I ? e.snapRectToMajor(g, I) : g;
    } else {
      c();
      return;
    }
    h.onCommit(V, I) === false || c();
  }
  function v() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", m), document.addEventListener("pointerup", S), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", S);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: v };
}
const mf = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, gf = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function ja(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Rn([e, t, n], a = 1) {
  return a === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${a.toFixed(3)})`;
}
function cs([e, t, n], a = 1, l = 1) {
  const o = t * a;
  return l === 1 ? `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)} / ${l.toFixed(3)})`;
}
const pg = "theme-preference";
function Sw() {
  var _a3;
  if (typeof window > "u") return "light";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(pg);
  return e === "light" || e === "dark" || e === "system" ? e : "light";
}
const Bo = X(Sw()), Sg = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Sg.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
ue(Bo, (e) => {
  var _a3;
  typeof window < "u" && ((_a3 = window.localStorage) == null ? void 0 : _a3.setItem(pg, e));
});
const Hs = _(() => Bo.value === "light" ? mf : Bo.value === "dark" || Sg.value ? gf : mf);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, a = (l, o) => {
      n.style.setProperty(l, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", a("--theme-surface", Rn(t.surface)), a("--theme-ink", Rn(t.ink)), a("--theme-ink-secondary", Rn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-ink-tertiary", Rn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-text-primary", Rn(t.ink)), a("--theme-text-secondary", Rn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-text-tertiary", Rn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-grid-minor", Rn(ja(t.surface, t.ink, t.minor_t))), a("--theme-grid-major", Rn(ja(t.surface, t.ink, t.major_t))), a("--theme-grid-border", Rn(ja(t.surface, t.ink, t.border_t))), a("--theme-accent", cs(t.accent, t.accent_chroma_scale)), a("--theme-accent-ring", cs(t.accent, t.accent_chroma_scale, 0.45)), a("--theme-selection-bg", cs(t.accent, t.accent_chroma_scale, 0.2)), a("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
  };
  e(Hs.value), ue(Hs, e);
}
function kg() {
  return { preference: Bo, theme: Hs, setPreference(e) {
    Bo.value = e;
  } };
}
const kw = false, ww = { key: 0, class: "zone-preview-text" }, xw = { class: "zone-list" }, Cw = { class: "zone-text" }, _w = { class: "zone-coords" }, Vw = { class: "zone-actions" }, Iw = { key: 0, class: "zone-empty" }, Pw = ln({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = X(false), o = X(false), i = X(0), r = X(0), s = X(4), u = X(4), c = X("both"), d = X("none"), f = X(1), m = X(1), S = X(0.6), v = X(2), y = X(false), h = _(() => n.zones.filter((E) => !!E && typeof E.id == "string" && E.id.length > 0 && typeof E.x1 == "number" && typeof E.y1 == "number" && typeof E.x2 == "number" && typeof E.y2 == "number" && typeof E.mode == "string" && !!E.edge && typeof E.edge.style == "string"));
  function k(E) {
    return E.id.slice(0, 6);
  }
  function I() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, m.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, S.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(v.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? y.value : void 0 };
  }
  const V = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], w = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function g() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const E = Date.now();
    a("add-zone", { id: g(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: I(), enabled: true, createdAt: E, updatedAt: E });
  }
  function x(E) {
    a("update-zone", { ...E, enabled: !E.enabled, updatedAt: Date.now() });
  }
  function A() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: I() });
  }
  return ue(l, A, { immediate: true }), ue(o, A, { immediate: true }), ue([c, d, f, m, S, v, y], P, { immediate: true }), (E, D) => {
    const M = je("v-switch"), T = je("v-text-field"), L = je("v-col"), z = je("v-row"), O = je("v-select"), Z = je("v-btn"), J = je("v-divider");
    return Te(), Oe(he, null, [p(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (F) => l.value = F), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), p(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (F) => o.value = F), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Te(), Oe("div", ww, " Preview: (" + Ie(n.previewRect.x1) + "," + Ie(n.previewRect.y1) + ") \u2192 (" + Ie(n.previewRect.x2) + "," + Ie(n.previewRect.y2) + ") ", 1)) : Ft("", true), p(z, { dense: "" }, { default: Ae(() => [p(L, { cols: "3" }, { default: Ae(() => [p(T, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (F) => i.value = F), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(L, { cols: "3" }, { default: Ae(() => [p(T, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (F) => r.value = F), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(L, { cols: "3" }, { default: Ae(() => [p(T, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (F) => s.value = F), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(L, { cols: "3" }, { default: Ae(() => [p(T, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value = F), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), p(z, { dense: "", class: "mt-2" }, { default: Ae(() => [p(L, { cols: "6" }, { default: Ae(() => [p(O, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (F) => c.value = F), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(L, { cols: "6" }, { default: Ae(() => [p(O, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (F) => d.value = F), items: w, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), p(z, { dense: "", class: "mt-2" }, { default: Ae(() => [p(L, { cols: "6" }, { default: Ae(() => [p(T, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (F) => f.value = F), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(L, { cols: "6" }, { default: Ae(() => [p(T, { modelValue: m.value, "onUpdate:modelValue": D[9] || (D[9] = (F) => m.value = F), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Te(), en(z, { key: 1, dense: "", class: "mt-2" }, { default: Ae(() => [p(L, { cols: "12" }, { default: Ae(() => [p(T, { modelValue: S.value, "onUpdate:modelValue": D[10] || (D[10] = (F) => S.value = F), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Ft("", true), d.value === "noted" ? (Te(), en(z, { key: 2, dense: "", class: "mt-2" }, { default: Ae(() => [p(L, { cols: "12" }, { default: Ae(() => [p(T, { modelValue: v.value, "onUpdate:modelValue": D[11] || (D[11] = (F) => v.value = F), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Ft("", true), d.value === "bold-major" || d.value === "noted" ? (Te(), en(z, { key: 3, dense: "", class: "mt-1" }, { default: Ae(() => [p(L, { cols: "12" }, { default: Ae(() => [p(M, { modelValue: y.value, "onUpdate:modelValue": D[12] || (D[12] = (F) => y.value = F), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Ft("", true), p(Z, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: Ae(() => [...D[14] || (D[14] = [Ke(" Add Zone ", -1)])]), _: 1 }), p(J, { class: "my-3" }), b("div", xw, [(Te(true), Oe(he, null, Qt(h.value, (F) => (Te(), Oe("div", { key: F.id, class: "zone-row" }, [b("div", Cw, [b("div", null, "#" + Ie(k(F)) + " \xB7 " + Ie(F.mode) + " \xB7 " + Ie(F.edge.style), 1), b("div", _w, "(" + Ie(F.x1) + "," + Ie(F.y1) + ") \u2192 (" + Ie(F.x2) + "," + Ie(F.y2) + ")", 1)]), b("div", Vw, [p(Z, { size: "x-small", variant: "text", onClick: (G) => x(F) }, { default: Ae(() => [Ke(Ie(F.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), p(Z, { size: "x-small", variant: "text", color: "error", onClick: (G) => a("remove-zone", F.id) }, { default: Ae(() => [...D[15] || (D[15] = [Ke("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (Te(), Oe("div", Iw, "No zones.")) : Ft("", true)]), p(Z, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = (F) => a("clear-zones")) }, { default: Ae(() => [...D[16] || (D[16] = [Ke(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Bn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, Aw = Bn(Pw, [["__scopeId", "data-v-223984b2"]]), hf = 175, Tw = { class: "hires-tab" }, Dw = { class: "text-caption text-medium-emphasis mb-2" }, Ew = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, Mw = { class: "region-list" }, Bw = { class: "d-flex align-center justify-space-between" }, $w = { class: "text-body-2" }, Rw = { class: "text-caption text-medium-emphasis" }, Lw = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, Fw = { class: "mt-2" }, Ow = { class: "d-flex align-center justify-space-between" }, Nw = { class: "text-caption text-medium-emphasis" }, Hw = { class: "mt-2" }, zw = { class: "d-flex align-center justify-space-between" }, Ww = { class: "text-caption text-medium-emphasis" }, jw = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, Uw = ln({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = X(false), o = _(() => n.regions.length < Ei);
  function i() {
    l.value = !l.value, a("hires-tool-change", { enabled: l.value });
  }
  function r(v) {
    a("update-region", { ...v, enabled: !v.enabled, updatedAt: Date.now() });
  }
  function s(v) {
    a("update-region", { ...v, showGrid: !v.showGrid, updatedAt: Date.now() });
  }
  function u(v) {
    a("update-region", { ...v, showBaseGrid: !v.showBaseGrid, updatedAt: Date.now() });
  }
  function c(v) {
    a("update-region", { ...v, showBorder: !v.showBorder, updatedAt: Date.now() });
  }
  function d(v, y) {
    a("update-region", { ...v, tickMultiplier: y, updatedAt: Date.now() });
  }
  function f(v, y) {
    a("update-region", { ...v, multiplier: y, updatedAt: Date.now() });
  }
  function m(v) {
    return v >= hf ? "max" : v === 1 ? "1x" : `${v}x`;
  }
  function S(v) {
    return v.id.slice(0, 6);
  }
  return (v, y) => {
    const h = je("v-btn"), k = je("v-divider"), I = je("v-chip"), V = je("v-slider"), w = je("v-card");
    return Te(), Oe("div", Tw, [b("p", Dw, Ie(Fe(Os)) + "\u2013" + Ie(Fe(Ns)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), p(h, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !o.value && !l.value, size: "small", block: "", onClick: i }, { default: Ae(() => [Ke(Ie(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= Fe(Ei) ? (Te(), Oe("div", Ew, " Max " + Ie(Fe(Ei)) + " regions reached. ", 1)) : Ft("", true), e.regions.length > 0 ? (Te(), en(k, { key: 1, class: "my-3" })) : Ft("", true), b("div", Mw, [(Te(true), Oe(he, null, Qt(e.regions, (g) => (Te(), en(w, { key: g.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: Ae(() => [b("div", Bw, [b("span", $w, " #" + Ie(S(g)) + " (" + Ie(g.x1) + ", " + Ie(g.y1) + ") \u2014 (" + Ie(g.x2) + ", " + Ie(g.y2) + ") ", 1), p(I, { size: "x-small", color: g.enabled ? "success" : "grey", variant: "flat" }, { default: Ae(() => [Ke(Ie(g.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), b("div", Rw, Ie(g.multiplier) + "x \xB7 " + Ie((g.x2 - g.x1 + 1) * (g.y2 - g.y1 + 1)) + " base cells ", 1), b("div", Lw, [p(h, { size: "x-small", variant: "tonal", onClick: (C) => r(g) }, { default: Ae(() => [Ke(Ie(g.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => s(g) }, { default: Ae(() => [Ke(" Grid " + Ie(g.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => u(g) }, { default: Ae(() => [Ke(" Base " + Ie(g.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => c(g) }, { default: Ae(() => [Ke(" Border " + Ie(g.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", color: "error", onClick: (C) => v.$emit("remove-region", g.id) }, { default: Ae(() => [...y[1] || (y[1] = [Ke(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])]), b("div", Fw, [b("div", Ow, [y[2] || (y[2] = b("span", { class: "text-caption text-medium-emphasis" }, "Resolution", -1)), b("span", Nw, Ie(g.multiplier) + "x", 1)]), p(V, { "model-value": g.multiplier, min: Fe(Os), max: Fe(Ns), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => f(g, C) }, null, 8, ["model-value", "min", "max", "onUpdate:modelValue"])]), b("div", Hw, [b("div", zw, [y[3] || (y[3] = b("span", { class: "text-caption text-medium-emphasis" }, "Tick rate", -1)), b("span", Ww, Ie(m(g.tickMultiplier ?? 1)), 1)]), p(V, { "model-value": g.tickMultiplier ?? 1, min: 1, max: Fe(hf), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => d(g, C) }, null, 8, ["model-value", "max", "onUpdate:modelValue"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (Te(), Oe("div", jw, " No hi-res regions. ")) : Ft("", true)]), e.regions.length > 0 ? (Te(), en(h, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: y[0] || (y[0] = (g) => v.$emit("clear-regions")) }, { default: Ae(() => [...y[4] || (y[4] = [Ke(" Clear All ", -1)])]), _: 1 })) : Ft("", true)]);
  };
} }), Gw = Bn(Uw, [["__scopeId", "data-v-7b5a643b"]]), Yw = ln({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, hiresRegions: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change"], setup(e) {
  const t = X("zones"), n = X(false), a = false, l = kw;
  return (o, i) => {
    const r = je("v-btn"), s = je("v-card-title"), u = je("v-tab"), c = je("v-tabs"), d = je("v-tabs-window-item"), f = je("v-tabs-window"), m = je("v-card-text"), S = je("v-card");
    return Fe(a) ? (Te(), Oe("aside", { key: 0, class: te(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Te(), en(r, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: i[14] || (i[14] = (v) => n.value = false) }, { default: Ae(() => [...i[19] || (i[19] = [Ke(" Grid Tools ", -1)])]), _: 1 })) : (Te(), en(S, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: Ae(() => [p(s, { class: "zone-title" }, { default: Ae(() => [i[16] || (i[16] = b("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), p(r, { size: "x-small", variant: "text", onClick: i[0] || (i[0] = (v) => n.value = true) }, { default: Ae(() => [...i[15] || (i[15] = [Ke("Collapse", -1)])]), _: 1 })]), _: 1 }), p(c, { modelValue: t.value, "onUpdate:modelValue": i[1] || (i[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: Ae(() => [p(u, { value: "zones" }, { default: Ae(() => [...i[17] || (i[17] = [Ke("Zones", -1)])]), _: 1 }), Fe(l) ? (Te(), en(u, { key: 0, value: "hires" }, { default: Ae(() => [...i[18] || (i[18] = [Ke("Hi-Res", -1)])]), _: 1 })) : Ft("", true)]), _: 1 }, 8, ["modelValue"]), p(m, { class: "pt-2" }, { default: Ae(() => [p(f, { modelValue: t.value, "onUpdate:modelValue": i[13] || (i[13] = (v) => t.value = v) }, { default: Ae(() => [p(d, { value: "zones" }, { default: Ae(() => [p(Aw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: i[2] || (i[2] = (v) => o.$emit("add-zone", v)), onUpdateZone: i[3] || (i[3] = (v) => o.$emit("update-zone", v)), onRemoveZone: i[4] || (i[4] = (v) => o.$emit("remove-zone", v)), onClearZones: i[5] || (i[5] = (v) => o.$emit("clear-zones")), onToolChange: i[6] || (i[6] = (v) => o.$emit("tool-change", v)), onDraftChange: i[7] || (i[7] = (v) => o.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), Fe(l) ? (Te(), en(d, { key: 0, value: "hires" }, { default: Ae(() => [p(Gw, { regions: e.hiresRegions, onAddRegion: i[8] || (i[8] = (v) => o.$emit("add-hires-region", v)), onUpdateRegion: i[9] || (i[9] = (v) => o.$emit("update-hires-region", v)), onRemoveRegion: i[10] || (i[10] = (v) => o.$emit("remove-hires-region", v)), onClearRegions: i[11] || (i[11] = (v) => o.$emit("clear-hires-regions")), onHiresToolChange: i[12] || (i[12] = (v) => o.$emit("hires-tool-change", v)) }, null, 8, ["regions"])]), _: 1 })) : Ft("", true)]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2)) : Ft("", true);
  };
} }), Kw = Bn(Yw, [["__scopeId", "data-v-dbb9d5dc"]]), ds = 5, qw = 16, Xw = 6, Zw = 0, Jw = 300, Qw = 0.3, e0 = 0.12, t0 = ln({ __name: "AppBackground", setup(e) {
  const t = dg("AppBackground"), n = X(null), a = X(null), l = X(0), o = mw(), i = yw(o.gridInfo, l), r = bw(), s = pw(i);
  function u(B) {
    return { ...B, edge: { ...B.edge } };
  }
  function c(B) {
    return B.map(u);
  }
  const d = ow({ onSetZones: (B) => o.post({ type: "set_zones", zones: c(B) }), onAddZone: (B) => o.post({ type: "add_zone", zone: u(B) }), onUpdateZone: (B) => o.post({ type: "update_zone", zone: u(B) }), onRemoveZone: (B) => o.post({ type: "remove_zone", id: B }), onClearZones: () => o.post({ type: "clear_zones" }) }), f = vw({ onAddRegion: (B) => {
  }, onUpdateRegion: (B) => {
  }, onRemoveRegion: (B) => {
  }, onClearRegions: () => {
  } }), m = X(false), S = X(false), v = X(false), y = X({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: h } = kg();
  ue(h, (B) => {
    o.post({ type: "set_theme", theme: B });
  });
  function k(B) {
    const K = Date.now(), oe = y.value;
    return { id: crypto.randomUUID(), x1: B.x1, y1: B.y1, x2: B.x2, y2: B.y2, mode: oe.mode, edge: { ...oe.edge }, enabled: true, createdAt: K, updatedAt: K };
  }
  s.register("zone", { isEnabled: () => m.value, priority: 1, snapMajor: () => S.value, onCommit(B) {
    d.addZone(k(B));
  } }), s.register("hires", { isEnabled: () => v.value, priority: 3, onCommit(B) {
    const K = Date.now();
    f.addRegion({ id: crypto.randomUUID(), x1: B.x1, y1: B.y1, x2: B.x2, y2: B.y2, multiplier: bg, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1, createdAt: K, updatedAt: K });
  } });
  function I(B) {
    d.addZone(B);
  }
  function V(B) {
    d.updateZone(B);
  }
  function w(B) {
    d.removeZone(B);
  }
  function g() {
    d.clearZones();
  }
  function C(B) {
    f.addRegion(B);
  }
  function x(B) {
    f.updateRegion(B);
  }
  function A(B) {
    f.removeRegion(B);
  }
  function P() {
    f.clearRegions();
  }
  function E(B) {
    y.value = B;
  }
  function D(B) {
    m.value = B.enabled, S.value = B.snapMajor, B.enabled || s.cancelActiveDrag("zone");
  }
  function M(B) {
    v.value = B.enabled, B.enabled || s.cancelActiveDrag("hires");
  }
  function T(B) {
    if (s.anyToolEnabled() || i.isInteractiveTarget(B.target)) return;
    const K = i.makeSnapshot();
    if (!K) return;
    const oe = fg(B.clientX, B.clientY, K), le = jk(oe, K);
    t.debug("Click \u2192", B.clientX, B.clientY, "\u2192 cell", le.cx, le.cy), o.post({ type: "toggle_cell", cx: le.cx, cy: le.cy, scrollCanvasPx: K.scrollCanvasPx });
  }
  let L = 0, z = 0, O = 0, Z = 0, J = null, F = null, G = null, W = null, N = null, j = 0, ie = 0;
  function be(B) {
    const K = B.getBoundingClientRect();
    return { width: Math.max(1, Math.round(K.width * devicePixelRatio)), height: Math.max(1, Math.round(K.height * devicePixelRatio)) };
  }
  function ae(B) {
    return Wk(B, qw, devicePixelRatio);
  }
  function de(B) {
    return Math.round(ae(B) * ds * Xw);
  }
  function Pe(B, K, oe) {
    B.style.width = `${(K / devicePixelRatio).toFixed(2)}px`, B.style.height = `${(oe / devicePixelRatio).toFixed(2)}px`;
  }
  function xe(B) {
    B.classList.add("app-bg--hidden"), G !== null && clearTimeout(G), G = window.setTimeout(() => {
      G = null, B.classList.remove("app-bg--hidden");
    }, 120);
  }
  function ge(B, K, oe) {
    O = Math.max(O, oe), L = K, z = O + de(K), Pe(B, L, z), xe(B);
    const le = ae(K);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * le * ds / devicePixelRatio).toFixed(1)}px`), o.post({ type: "resize", width: L, height: z });
  }
  function R() {
    W !== null && clearTimeout(W), W = window.setTimeout(() => {
      if (W = null, !a.value || Z <= 0) return;
      if (performance.now() - ie < Jw) {
        R();
        return;
      }
      O = Z, ge(a.value, L, O), Z = 0;
    }, Zw);
  }
  return Ct(() => {
    const B = n.value, K = a.value;
    if (!B || !K) return;
    const oe = be(B);
    L = oe.width, O = oe.height, z = O + de(L), K.width = L, K.height = z, Pe(K, L, z);
    const le = K.transferControlToOffscreen(), se = ae(L), ye = 0.8 * se * ds / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${ye.toFixed(1)}px`), o.init(le, se), t.debug("Worker spawned, gridPitch", se.toFixed(2)), o.on("ready", (ee) => {
      t.info(`${ee.backend.toUpperCase()} renderer active`), o.post({ type: "set_theme", theme: h.value }), o.post({ type: "set_zones", zones: c(d.zones.value) });
    }), o.on("zones_state", (ee) => d.syncFromWorker(ee.zones)), o.on("zones_error", (ee) => t.error("Zone update rejected:", ee.message)), o.on("hires_state", (ee) => f.syncFromWorker(ee.regions)), o.on("error", (ee) => {
      ee.phase === "gpu-init" ? t.debug(`GPU unavailable (${ee.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${ee.phase}]:`, ee.message);
    }), document.addEventListener("click", T), N = s.attachListeners(), J = document.querySelector(".v-main");
    let ce = 0, U = 0;
    r.start(() => {
      o.post({ type: "frame" });
      const ee = (J == null ? void 0 : J.scrollTop) || window.scrollY;
      Math.abs(ee - j) > 0.5 && (j = ee, ie = performance.now()), ce = ee * Qw * devicePixelRatio, U += (ce - U) * e0, Math.abs(U - l.value) > 0.1 && (l.value = U, o.post({ type: "scroll", scrollY: U }));
    }), F = new ResizeObserver(([ee]) => {
      if (!a.value) return;
      const Ce = Math.round(ee.contentRect.width * devicePixelRatio), q = Math.round(ee.contentRect.height * devicePixelRatio);
      if (Ce <= 0 || q <= 0) return;
      const fe = a.value, Se = Ce !== L, ke = q > O, Ve = q < O;
      if (Se) {
        W !== null && (clearTimeout(W), W = null), Z = 0, O = q, ge(fe, Ce, q);
        return;
      }
      if (ke) {
        W !== null && (clearTimeout(W), W = null), Z = 0, ge(fe, Ce, q);
        return;
      }
      Ve && (Z = q, R());
    }), F.observe(B);
  }), vr(() => {
    r.stop(), F == null ? void 0 : F.disconnect(), G !== null && (clearTimeout(G), G = null), W !== null && (clearTimeout(W), W = null), document.removeEventListener("click", T), N == null ? void 0 : N(), o.terminate();
  }), (B, K) => (Te(), Oe(he, null, [b("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [b("canvas", { ref_key: "canvasRef", ref: a, class: "app-bg" }, null, 512)], 512), Fe(s).previewStyle.value ? (Te(), Oe("div", { key: 0, class: "zone-preview-overlay", style: me(Fe(s).previewStyle.value) }, null, 4)) : Ft("", true), p(Kw, { zones: Fe(d).zones.value, "preview-rect": Fe(s).previewRect.value, "hires-regions": Fe(f).regions.value, onAddZone: I, onUpdateZone: V, onRemoveZone: w, onClearZones: g, onToolChange: D, onDraftChange: E, onAddHiresRegion: C, onUpdateHiresRegion: x, onRemoveHiresRegion: A, onClearHiresRegions: P, onHiresToolChange: M }, null, 8, ["zones", "preview-rect", "hires-regions"])], 64));
} }), n0 = Bn(t0, [["__scopeId", "data-v-5d720020"]]);
function wg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Je = typeof window < "u", oc = Je && "IntersectionObserver" in window, a0 = Je && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), yf = Je && "EyeDropper" in window, ic = Je && "matchMedia" in window && typeof window.matchMedia == "function", jn = () => ic && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function bf(e, t, n) {
  l0(e, t), t.set(e, n);
}
function l0(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function pf(e, t, n) {
  return e.set(xg(e, t), n), n;
}
function ea(e, t) {
  return e.get(xg(e, t));
}
function xg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Cg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ol(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Cg(e, t.split("."), n));
}
function pt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return ol(e, t, n);
  if (Array.isArray(t)) return Cg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Hn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function il(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function zs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function rc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Ws = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function _g(e) {
  return Object.keys(e);
}
function Xa(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function tn(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function js(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Le(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Vg = /^on[^a-z]/, sc = (e) => Vg.test(e), o0 = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], i0 = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function r0(e) {
  return e.isComposing && i0.includes(e.key);
}
function qn(e) {
  const [t, n] = js(e, [Vg]), a = Le(t, o0), [l, o] = js(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ot(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ig(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Fe(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Sf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function kf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function wf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function s0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function xf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (zs(o) && zs(i)) {
      a[l] = Ot(o, i, n);
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
function Pg(e) {
  return e.map((t) => t.type === he ? Pg(t.children) : t).flat();
}
function Ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ja.cache.has(e)) return Ja.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ja.cache.set(e, t), t;
}
Ja.cache = /* @__PURE__ */ new Map();
function Ml(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Ml(e, n)).flat(1);
  if (t.suspense) return Ml(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Ml(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Ml(e, t.component.subTree).flat(1);
  }
  return [];
}
var _l = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap();
class Ag {
  constructor(t) {
    bf(this, _l, []), bf(this, Ua, 0), this.size = t;
  }
  get isFull() {
    return ea(_l, this).length === this.size;
  }
  push(t) {
    ea(_l, this)[ea(Ua, this)] = t, pf(Ua, this, (ea(Ua, this) + 1) % this.size);
  }
  values() {
    return ea(_l, this).slice(ea(Ua, this)).concat(ea(_l, this).slice(0, ea(Ua, this)));
  }
  clear() {
    ea(_l, this).length = 0, pf(Ua, this, 0);
  }
}
function u0(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function uc(e) {
  const t = Tt({});
  ct(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = $(() => t[a]);
  return n;
}
function Gi(e, t) {
  return e.includes(t);
}
function Tg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Bt = () => [Function, Array];
function Cf(e, t) {
  return t = "on" + Kn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ai(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
function Pa(e) {
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
function Dg(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function Qa(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = Pa(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = Dg(n, t);
    a ? a.focus() : Qa(e, t === "next" ? "first" : "last");
  }
}
function vo(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function yr() {
}
function Wl(e, t) {
  if (!(Je && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function br(e) {
  return e.some((t) => Eo(t) ? t.type === Gt ? false : t.type !== he || br(t.children) : true) ? e : null;
}
function wi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function c0(e, t) {
  if (!Je || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function d0(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function $o() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => rc(e.value) }), t;
}
function jl(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Ea(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Yi(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function f0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Yi(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Yi(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function v0(e) {
  const t = {};
  for (const n in e) t[an(n)] = e[n];
  return t;
}
function m0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function _f(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : ht(n) || Ia(n) || Jo(n) ? t(De(n)) : zs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Eg = ["top", "bottom"], g0 = ["start", "end", "left", "right"];
function Us(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Gi(Eg, n) ? "start" : Gi(g0, n) ? "top" : "center"), { side: Gs(n, t), align: Gs(a, t) };
}
function Gs(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function fs(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function vs(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Vf(e) {
  return { side: e.align, align: e.side };
}
function If(e) {
  return Gi(Eg, e.side) ? "y" : "x";
}
class kn {
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
function Pf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function Mg(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new kn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new kn(e);
}
function h0(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new kn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new kn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new kn(e);
}
function cc(e) {
  const t = new kn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new kn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, m = i ? t.height / i : e.offsetHeight + 1;
    return new kn({ x: c, y: d, width: f, height: m });
  } else return new kn(t);
}
function aa(e, t, n) {
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
const Mi = /* @__PURE__ */ new WeakMap();
function y0(e, t) {
  Object.keys(t).forEach((n) => {
    if (sc(n)) {
      const a = Tg(n), l = Mi.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), Mi.has(e) || Mi.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function b0(e, t) {
  Object.keys(t).forEach((n) => {
    if (sc(n)) {
      const a = Tg(n), l = Mi.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, Af = 0.2126729, Tf = 0.7151522, Df = 0.072175, p0 = 0.55, S0 = 0.58, k0 = 0.57, w0 = 0.62, xi = 0.03, Ef = 1.45, x0 = 5e-4, C0 = 1.25, _0 = 1.25, Mf = 0.078, Bf = 12.82051282051282, Ci = 0.06, $f = 1e-3;
function Rf(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * Af + a * Tf + l * Df, u = o * Af + i * Tf + r * Df;
  if (s <= xi && (s += (xi - s) ** Ef), u <= xi && (u += (xi - u) ** Ef), Math.abs(u - s) < x0) return 0;
  let c;
  if (u > s) {
    const d = (u ** p0 - s ** S0) * C0;
    c = d < $f ? 0 : d < Mf ? d - d * Bf * Ci : d - Ci;
  } else {
    const d = (u ** w0 - s ** k0) * _0;
    c = d > -$f ? 0 : d > -Mf ? d - d * Bf * Ci : d + Ci;
  }
  return c * 100;
}
const Ki = 0.20689655172413793, V0 = (e) => e > Ki ** 3 ? Math.cbrt(e) : e / (3 * Ki ** 2) + 4 / 29, I0 = (e) => e > Ki ? e ** 3 : 3 * Ki ** 2 * (e - 4 / 29);
function Bg(e) {
  const t = V0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function $g(e) {
  const t = I0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const P0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], A0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, T0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], D0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Rg(e) {
  const t = Array(3), n = A0, a = P0;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ze(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function dc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = D0, i = T0;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Ys(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function E0(e) {
  return Ys(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Lf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, M0 = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Ff({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Ff({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Un({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Un({ h: e, s: t, v: n, a }) };
function fn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Lf.test(e)) {
    const { groups: t } = e.match(Lf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return M0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Ng(t);
  } else if (typeof e == "object") {
    if (Xa(e, ["r", "g", "b"])) return e;
    if (Xa(e, ["h", "s", "l"])) return Un(fc(e));
    if (Xa(e, ["h", "s", "v"])) return Un(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Un(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function Ff(e) {
  return Un(fc(e));
}
function li(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Ks(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function fc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function Lg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Fg(e) {
  return Lg(Un(e));
}
function _i(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Og(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[_i(t), _i(n), _i(a), l !== void 0 ? _i(Math.round(l * 255)) : ""].join("")}`;
}
function Ng(e) {
  e = $0(e);
  let [t, n, a, l] = s0(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function B0(e) {
  const t = Ng(e);
  return li(t);
}
function Hg(e) {
  return Og(Un(e));
}
function $0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = kf(kf(e, 6), 8, "F")), e;
}
function R0(e, t) {
  const n = Bg(dc(e));
  return n[0] = n[0] + t * 10, Rg($g(n));
}
function L0(e, t) {
  const n = Bg(dc(e));
  return n[0] = n[0] - t * 10, Rg($g(n));
}
function qs(e) {
  const t = fn(e);
  return dc(t)[1];
}
function F0(e, t) {
  const n = qs(e), a = qs(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function zg(e) {
  const t = Math.abs(Rf(fn(0), fn(e)));
  return Math.abs(Rf(fn(16777215), fn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function H(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const pe = H({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function St(e, t) {
  const n = ti();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Xn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = St(e).type;
  return Ja((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function O0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : St("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Ul = Symbol.for("vuetify:defaults");
function N0(e) {
  return X(e);
}
function vc() {
  const e = We(Ul);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function mt(e, t) {
  const n = vc(), a = X(e), l = _(() => {
    if (Fe(t == null ? void 0 : t.disabled)) return n.value;
    const i = Fe(t == null ? void 0 : t.scoped), r = Fe(t == null ? void 0 : t.reset), s = Fe(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = Ot(a.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = Ot(Ot(u, { prev: u }), u[s])), u;
    }
    return u.prev ? Ot(u.prev, u) : u;
  });
  return rt(Ul, l), l;
}
function H0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ja(t)] < "u");
}
function z0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vc();
  const a = St("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((m) => m != null);
    if (H0(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = re();
  ct(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else i.value = void 0;
  });
  function r() {
    const s = O0(Ul, a);
    rt(Ul, _(() => i.value ? Ot((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function qt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return tn(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = vc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = z0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? qt : ln)(t);
}
function W0(e, t) {
  return t.props = e, t;
}
function ga(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Q()({ name: n ?? Kn(an(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...pe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ma(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function j0(e, t, n, a) {
  if (!n || Ea(e) || Ea(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function U0(e, t, n) {
  var _a3, _b2;
  if (!n || Ea(e) || Ea(t)) return null;
  const a = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function Dt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = U0(e, t, n);
  return l || (j0(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Wg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Ro = "cubic-bezier(0.4, 0, 0.2, 1)", Of = "cubic-bezier(0.0, 0, 0.2, 1)", Nf = "cubic-bezier(0.4, 0, 1, 1)", G0 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function vn(e, t, n) {
  return Object.keys(e).filter((a) => sc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Y0(e) : mc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function qi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (mc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function mc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function Y0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function K0(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function q0(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function ne(e) {
  const t = St("useRender");
  t.render = e;
}
function X0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, a = 0, l = 0, o = false, i = 0;
  function r() {
    clearTimeout(a), o = false, i = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++) c[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    i || (i = f);
    const m = f - Math.max(i, l);
    function S() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? m >= t ? S() : n.trailing && (a = setTimeout(S, t - m)) : (o = true, n.leading && S());
  };
  return s.clear = r, s.immediate = e, s;
}
const _e = [String, Function, Object, Array], Xs = Symbol.for("vuetify:icons"), Sr = H({ icon: { type: _e }, tag: { type: [String, Object, Function], required: true } }, "icon"), Zs = Q()({ name: "VComponentIcon", props: Sr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return p(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? p(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), gc = qt({ name: "VSvgIcon", inheritAttrs: false, props: Sr(), setup(e, t) {
  let { attrs: n } = t;
  return () => p(e.tag, Y(n, { style: null }), { default: () => [b("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? b("path", { d: a[0], "fill-opacity": a[1] }, null) : b("path", { d: a }, null)) : b("path", { d: e.icon }, null)])] });
} }), Z0 = qt({ name: "VLigatureIcon", props: Sr(), setup(e) {
  return () => p(e.tag, null, { default: () => [e.icon] });
} }), hc = qt({ name: "VClassIcon", props: Sr(), setup(e) {
  return () => p(e.tag, { class: te(e.icon) }, null);
} }), J0 = (e) => {
  const t = We(Xs);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = nt(e);
    if (!a) return { component: Zs };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: gc, icon: l };
    if (typeof l != "string") return { component: Zs, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, Q0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, ex = { component: (e) => ma(hc, { ...e, class: "mdi" }) };
function tx() {
  return { svg: { component: gc }, class: { component: hc } };
}
function nx(e) {
  const t = tx(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = ex), Ot({ defaultSet: n, sets: t, aliases: { ...Q0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function $t(e, t) {
  let n;
  function a() {
    n = Nl(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  ue(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function we(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = St("useProxiedModel"), i = X(e[t] !== void 0 ? e[t] : n), r = Ja(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  $t(() => !u.value, () => {
    ue(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = _({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), m = De(u.value ? e[t] : i.value);
    m === f || a(m) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const ax = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Hf = "$vuetify.", zf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), jg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Hf)) return zf(a, o);
  const r = a.replace(Hf, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ol(s, r, null);
  return c || (`${a}${e.value}`, c = ol(u, r, null)), c || (c = a), typeof c != "string" && (c = a), zf(c, o);
};
function yc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Ug(e, t) {
  return yc(e, t)(0.1).includes(",") ? "," : ".";
}
function ms(e, t, n) {
  const a = we(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ue(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Gg(e) {
  return (t) => {
    const n = ms(t, "locale", e.current), a = ms(t, "fallback", e.fallback), l = ms(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: $(() => Ug(n, a)), t: jg(n, a, l), n: yc(n, a), provide: Gg({ current: n, fallback: a, messages: l }) };
  };
}
function lx(e) {
  const t = re((e == null ? void 0 : e.locale) ?? "en"), n = re((e == null ? void 0 : e.fallback) ?? "en"), a = X({ en: ax, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: $(() => (e == null ? void 0 : e.decimalSeparator) ?? Ug(t, n)), t: jg(t, n, a), n: yc(t, n), provide: Gg({ current: t, fallback: n, messages: a }) };
}
const Gl = Symbol.for("vuetify:locale");
function ox(e) {
  return e.name != null;
}
function ix(e) {
  const t = (e == null ? void 0 : e.adapter) && ox(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : lx(e), n = sx(t, e);
  return { ...t, ...n };
}
function Qe() {
  const e = We(Gl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Yg(e) {
  const t = We(Gl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = ux(n, t.rtl, e), l = { ...n, ...a };
  return rt(Gl, l), l;
}
function rx() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function sx(e, t) {
  const n = X((t == null ? void 0 : t.rtl) ?? rx()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: $(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function ux(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: $(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function _t() {
  const e = We(Gl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function oi(e) {
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
function cx(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Kg(e), i = qg(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function Co(e, t, n) {
  var _a3;
  let a = (n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function dx(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Kg(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function qg(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function fx(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const vx = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Xg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (vx.test(e)) return fx(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Wf = new Date(2e3, 0, 2);
function mx(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Hn(7).map((l) => {
    const o = new Date(Wf);
    return o.setDate(Wf.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function gx(e, t, n, a) {
  const l = Xg(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function hx(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = wf(String(n.getMonth() + 1), 2, "0"), o = wf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function yx(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function bx(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function px(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function el(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Sx(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function kx(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Lo(e) {
  return e.getFullYear();
}
function wx(e) {
  return e.getMonth();
}
function xx(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? Cx(e, t, o, a) : _x(e, t, o, i);
}
function Cx(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = el(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Lo(o);
  s < Lo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? el(u, -c) : el(u, 7 - c);
  return 1 + Zi(bc(o), Fo(d), "weeks");
}
function _x(e, t, n, a) {
  const l = Co(e, t, n), o = el(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - Zi(f, Co(f, t, n), "days");
  }
  let r = Lo(l);
  r < Lo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? el(s, u - 7) : el(s, u);
  return 1 + Zi(bc(l), Fo(c), "weeks");
}
function Vx(e) {
  return e.getDate();
}
function Ix(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Px(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Ax(e) {
  return e.getHours();
}
function Tx(e) {
  return e.getMinutes();
}
function Dx(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Ex(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Mx(e, t) {
  return Xi(e, t[0]) && Rx(e, t[1]);
}
function Bx(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Xi(e, t) {
  return e.getTime() > t.getTime();
}
function $x(e, t) {
  return Xi(Fo(e), Fo(t));
}
function Rx(e, t) {
  return e.getTime() < t.getTime();
}
function jf(e, t) {
  return e.getTime() === t.getTime();
}
function Lx(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Fx(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Ox(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Zi(e, t, n) {
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
function Nx(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function Hx(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function zx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Wx(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function jx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Fo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function bc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Ux {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Xg(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return hx(this, t);
  }
  parseISO(t) {
    return yx(t);
  }
  addMinutes(t, n) {
    return bx(t, n);
  }
  addHours(t, n) {
    return px(t, n);
  }
  addDays(t, n) {
    return el(t, n);
  }
  addWeeks(t, n) {
    return Sx(t, n);
  }
  addMonths(t, n) {
    return kx(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return cx(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return dx(t, this.locale);
  }
  startOfMonth(t) {
    return Kg(t);
  }
  endOfMonth(t) {
    return qg(t);
  }
  format(t, n) {
    return gx(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return jf(t, n);
  }
  isValid(t) {
    return Bx(t);
  }
  isWithinRange(t, n) {
    return Mx(t, n);
  }
  isAfter(t, n) {
    return Xi(t, n);
  }
  isAfterDay(t, n) {
    return $x(t, n);
  }
  isBefore(t, n) {
    return !Xi(t, n) && !jf(t, n);
  }
  isSameDay(t, n) {
    return Lx(t, n);
  }
  isSameMonth(t, n) {
    return Fx(t, n);
  }
  isSameYear(t, n) {
    return Ox(t, n);
  }
  setMinutes(t, n) {
    return Hx(t, n);
  }
  setHours(t, n) {
    return Nx(t, n);
  }
  setMonth(t, n) {
    return zx(t, n);
  }
  setDate(t, n) {
    return Wx(t, n);
  }
  setYear(t, n) {
    return jx(t, n);
  }
  getDiff(t, n, a) {
    return Zi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return mx(this.locale, a, n);
  }
  getYear(t) {
    return Lo(t);
  }
  getMonth(t) {
    return wx(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return xx(t, this.locale, l, o);
  }
  getDate(t) {
    return Vx(t);
  }
  getNextMonth(t) {
    return Ix(t);
  }
  getPreviousMonth(t) {
    return Px(t);
  }
  getHours(t) {
    return Ax(t);
  }
  getMinutes(t) {
    return Tx(t);
  }
  startOfDay(t) {
    return Fo(t);
  }
  endOfDay(t) {
    return bc(t);
  }
  startOfYear(t) {
    return Dx(t);
  }
  endOfYear(t) {
    return Ex(t);
  }
}
const Zg = Symbol.for("vuetify:date-options"), Uf = Symbol.for("vuetify:date-adapter");
function Gx(e, t) {
  const n = Ot({ adapter: Ux, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Qg(n, t) };
}
function Yx(e, t, n) {
  const a = Jg(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Jg(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Qg(e, t) {
  const n = Tt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return ue(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function ml() {
  const e = We(Zg);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Qe();
  return Qg(e, t);
}
const kr = ["sm", "md", "lg", "xl", "xxl"], Js = Symbol.for("vuetify:display"), Gf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, Kx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gf;
  return Ot(Gf, e);
};
function Yf(e) {
  return Je && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Kf(e) {
  return Je && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function qf(e) {
  const t = Je && !e ? window.navigator.userAgent : "ssr";
  function n(S) {
    return !!t.match(S);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), m = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: m, touch: a0, ssr: t === "ssr" };
}
function qx(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = Kx(e), l = re(Kf(t)), o = re(qf(t)), i = Tt({}), r = re(Yf(t));
  function s() {
    l.value = Kf(), r.value = Yf();
  }
  function u() {
    s(), o.value = qf();
  }
  return ct(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), m = r.value < n.xl && !(f || d || c), S = r.value < n.xxl && !(m || f || d || c), v = r.value >= n.xxl, y = c ? "xs" : d ? "sm" : f ? "md" : m ? "lg" : S ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], k = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = m, i.xl = S, i.xxl = v, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || m), i.smAndDown = !(f || m || S || v), i.mdAndDown = !(m || S || v), i.lgAndDown = !(S || v), i.xlAndDown = !v, i.name = y, i.height = l.value, i.width = r.value, i.mobile = k, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Je && (window.addEventListener("resize", s, { passive: true }), bt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Zl(i), update: u, ssr: !!t };
}
const gl = H({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function on() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = We(Js);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: $(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const eh = Symbol.for("vuetify:goto");
function th() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: G0 };
}
function Xx(e) {
  return pc(e) ?? (document.scrollingElement || document.body);
}
function pc(e) {
  return typeof e == "string" ? document.querySelector(e) : rc(e);
}
function gs(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = pc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Zx(e, t) {
  return { rtl: t.isRtl, options: Ot(th(), e) };
}
async function Xf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ot((a == null ? void 0 : a.options) ?? th(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : pc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : Xx(o.container), u = jn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = gs(r, n, i);
  else if (c = gs(r, n, i) - gs(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (c -= parseInt(S, 10));
  }
  c += o.offset, c = Qx(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((m) => requestAnimationFrame(function S(v) {
    const h = (v - f) / o.duration, k = Math.floor(d + (c - d) * u(Ze(h, 0, 1)));
    if (s[l] = k, h >= 1 && Math.abs(k - s[l]) < 10) return m(c);
    if (h > 2) return m(s[l]);
    requestAnimationFrame(S);
  }));
}
function Jx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = We(eh), { isRtl: n } = _t();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: $(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Xf(o, Ot(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Xf(o, Ot(e, i), true, a), l;
}
function Qx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Ze(t, s, u);
}
const Oo = Symbol.for("vuetify:theme"), Ue = H({ theme: String }, "theme");
function Zf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function eC() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zf();
  const t = Zf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ot(o, l);
  }
  return Ot(t, { ...e, themes: n });
}
function Ga(e, t, n, a) {
  e.push(`${lC(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Jf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = fn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${qs(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? fn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function tC(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? R0 : L0;
    for (const i of Hn(n[l], 1)) a[`${e}-${l}-${i}`] = Og(o(fn(t), i));
  }
  return a;
}
function nC(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...tC(a, l, t) });
  }
  return n;
}
function aC(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = fn(e[n]);
    t[a] = zg(l);
  }
  return t;
}
function lC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function oC(e, t, n) {
  const a = iC(e, t);
  a && (a.innerHTML = n);
}
function iC(e, t) {
  if (!Je) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function rC(e) {
  const t = eC(e), n = re(t.defaultTheme), a = X(t.themes), l = re("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = _(() => {
    const h = {};
    for (const [k, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...nC(I.colors, t.variations) };
      h[k] = { ...I, colors: { ...V, ...aC(V) } };
    }
    return h;
  }), r = $(() => i.value[o.value]), s = $(() => n.value === "system"), u = _(() => {
    var _a3;
    const h = [], k = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && Ga(h, ":root", ["color-scheme: dark"], t.scope), Ga(h, ":root", Jf(r.value, t.prefix), t.scope);
    for (const [w, g] of Object.entries(i.value)) Ga(h, `.${t.prefix}theme--${w}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...Jf(g, t.prefix)], t.scope);
    if (t.utilities) {
      const w = [], g = [], C = new Set(Object.values(i.value).flatMap((x) => Object.keys(x.colors)));
      for (const x of C) x.startsWith("on-") ? Ga(g, `.${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${k}`], t.scope) : (Ga(w, `.${I}bg-${x}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${x}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${x}))${k}`, `color: rgb(var(--${t.prefix}theme-on-${x}))${k}`], t.scope), Ga(g, `.${I}text-${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${k}`], t.scope), Ga(g, `.${I}border-${x}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${x})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...w.map((x) => `  ${x}`), `}
`, `@layer foreground {
`, ...g.map((x) => `  ${x}`), `}
`) : h.push(...w, ...g);
    }
    let V = h.map((w, g) => g === 0 ? w : `    ${w}`).join("");
    return t.layers && (V = `@layer vuetify.theme {
` + h.map((w) => `  ${w}`).join("") + `
}`), V;
  }), c = $(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = $(() => Object.keys(i.value));
  if (ic) {
    let k = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    k(), h.addEventListener("change", k, { passive: true }), Kv() && bt(() => {
      h.removeEventListener("change", k);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const k = h._context.provides.usehead;
    if (k) {
      let I = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (k.push) {
        const V = k.push(I);
        Je && ue(u, () => {
          V.patch(I);
        });
      } else Je ? (k.addHeadObjs($(I)), ct(() => k.updateDOM())) : k.addHeadObjs(I());
    } else {
      let I = function() {
        oC(t.stylesheetId, t.cspNonce, u.value);
      };
      Je ? ue(u, I, { immediate: true }) : I();
    }
  }
  function m(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function S() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const k = h.indexOf(o.value), I = k === -1 ? 0 : (k + 1) % h.length;
    m(h[I]);
  }
  function v() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    S(h);
  }
  const y = new Proxy(o, { get(h, k) {
    return Reflect.get(h, k);
  }, set(h, k, I) {
    return k === "value" && wg(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, k, I);
  } });
  return { install: f, change: m, cycle: S, toggle: v, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: y, current: r } };
}
function qe(e) {
  St("provideTheme");
  const t = We(Oo, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = $(() => e.theme ?? t.name.value), o = { ...t, name: n, current: $(() => t.themes.value[n.value]), themeClasses: $(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return rt(Oo, o), o;
}
function wr() {
  St("useTheme");
  const e = We(Oo, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = $o(), a = X();
  if (Je) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Ht(() => {
      l.disconnect();
    }), ue(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: al(a) };
}
const No = Symbol.for("vuetify:layout"), nh = Symbol.for("vuetify:layout-item"), Qf = 1e3, ah = H({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), hl = H({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function lh() {
  const e = We(No);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function yl(e) {
  const t = We(No);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Mt()}`, a = St("useLayoutItem");
  rt(nh, { id: n });
  const l = re(false);
  Xu(() => l.value = true), Pm(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Ht(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const sC = (e, t, n, a) => {
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
function oh(e) {
  const t = We(No, null), n = _(() => t ? t.rootZIndex.value - 100 : Qf), a = X([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = wn(), d = _(() => {
    const g = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const x of C.filter((A) => A.includes(":"))) {
      const [A, P] = x.split(":");
      if (!a.value.includes(A) || !a.value.includes(P)) continue;
      const E = l.get(A), D = l.get(P), M = o.get(A), T = o.get(P);
      !E || !D || !M || !T || (g.set(P, { position: E.value, amount: parseInt(M.value, 10) }), g.set(A, { position: D.value, amount: -parseInt(T.value, 10) }));
    }
    return g;
  }), f = _(() => {
    const g = [...new Set([...i.values()].map((x) => x.value))].sort((x, A) => x - A), C = [];
    for (const x of g) {
      const A = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === x;
      });
      C.push(...A);
    }
    return sC(C, l, o, r);
  }), m = _(() => !Array.from(s.values()).some((g) => g.value)), S = _(() => f.value[f.value.length - 1].layer), v = $(() => ({ "--v-layout-left": ve(S.value.left), "--v-layout-right": ve(S.value.right), "--v-layout-top": ve(S.value.top), "--v-layout-bottom": ve(S.value.bottom), ...m.value ? void 0 : { transition: "none" } })), y = _(() => f.value.slice(1).map((g, C) => {
    let { id: x } = g;
    const { layer: A } = f.value[C], P = o.get(x), E = l.get(x);
    return { id: x, ...A, size: Number(P.value), position: E.value };
  })), h = (g) => y.value.find((C) => C.id === g), k = St("createLayout"), I = re(false);
  return Ct(() => {
    I.value = true;
  }), rt(No, { register: (g, C) => {
    let { id: x, order: A, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: T, absolute: L } = C;
    i.set(x, A), l.set(x, P), o.set(x, E), r.set(x, M), T && s.set(x, T);
    const O = Ml(nh, k == null ? void 0 : k.vnode).indexOf(g);
    O > -1 ? a.value.splice(O, 0, x) : a.value.push(x);
    const Z = _(() => y.value.findIndex((W) => W.id === x)), J = _(() => n.value + f.value.length * 2 - Z.value * 2), F = _(() => {
      const W = P.value === "left" || P.value === "right", N = P.value === "right", j = P.value === "bottom", ie = D.value ?? E.value, be = ie === 0 ? "%" : "px", ae = { [P.value]: 0, zIndex: J.value, transform: `translate${W ? "X" : "Y"}(${(M.value ? 0 : -(ie === 0 ? 100 : ie)) * (N || j ? -1 : 1)}${be})`, position: L.value || n.value !== Qf ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!I.value) return ae;
      const de = y.value[Z.value], Pe = d.value.get(x);
      return Pe && (de[Pe.position] += Pe.amount), { ...ae, height: W ? `calc(100% - ${de.top}px - ${de.bottom}px)` : D.value ? `${D.value}px` : void 0, left: N ? void 0 : `${de.left}px`, right: N ? `${de.right}px` : void 0, top: P.value !== "bottom" ? `${de.top}px` : void 0, bottom: P.value !== "top" ? `${de.bottom}px` : void 0, width: W ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${de.left}px - ${de.right}px)` };
    }), G = _(() => ({ zIndex: J.value - 1 }));
    return { layoutItemStyles: F, layoutItemScrimStyles: G, zIndex: J };
  }, unregister: (g) => {
    i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: S, mainStyles: v, getLayoutItem: h, items: y, layoutRect: c, rootZIndex: n }), { layoutClasses: $(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: $(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: y, layoutRect: c, layoutRef: u };
}
const uC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function ev(e) {
  const t = e.toLowerCase();
  return uC[t] || t;
}
function ih(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(ev(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [ev(e)], separators: o } : { keys: l, separators: o };
}
function cC(e) {
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
  return i.every((u) => ih(u).keys.length > 0) ? i : [];
}
function rh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ot(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Nl();
  return r.run(() => {
    const s = N0(a.defaults), u = qx(a.display, a.ssr), c = rC(a.theme), d = nx(a.icons), f = ix(a.locale), m = Gx(a.date, f), S = Zx(a.goTo, f);
    function v(h) {
      for (const I in i) h.directive(I, i[I]);
      for (const I in o) h.component(I, o[I]);
      for (const I in l) h.component(I, qt({ ...l[I], name: I, aliasName: l[I].name }));
      const k = Nl();
      if (k.run(() => {
        c.install(h);
      }), h.onUnmount(() => k.stop()), h.provide(Ul, s), h.provide(Js, u), h.provide(Oo, c), h.provide(Xs, d), h.provide(Gl, f), h.provide(Zg, m.options), h.provide(Uf, m.instance), h.provide(eh, S), Je && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: I } = h;
        h.mount = function() {
          const V = I(...arguments);
          return Ee(() => u.update()), h.mount = I, V;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Tt({ defaults: Il.call(this, Ul), display: Il.call(this, Js), theme: Il.call(this, Oo), icons: Il.call(this, Xs), locale: Il.call(this, Gl), date: Il.call(this, Uf) });
      } } });
    }
    function y() {
      r.stop();
    }
    return { install: v, unmount: y, defaults: s, display: u, theme: c, icons: d, locale: f, date: m, goTo: S };
  });
}
const dC = "3.12.1";
rh.version = dC;
function Il(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const fC = ln({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = kg();
  return (n, a) => {
    const l = je("v-icon"), o = je("v-tooltip"), i = je("v-btn"), r = je("v-btn-toggle");
    return Te(), en(r, { modelValue: Fe(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => ht(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Ae(() => [p(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: Ae(() => [p(l, null, { default: Ae(() => [...a[1] || (a[1] = [Ke("mdi-weather-sunny", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), p(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: Ae(() => [p(l, null, { default: Ae(() => [...a[2] || (a[2] = [Ke("mdi-theme-light-dark", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), p(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: Ae(() => [p(l, null, { default: Ae(() => [...a[3] || (a[3] = [Ke("mdi-weather-night", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), tv = Bn(fC, [["__scopeId", "data-v-c9886728"]]), vC = ln({ __name: "AppHeader", setup(e) {
  const t = [{ label: "Demos", href: "#projects" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }], { smAndDown: n } = on(), a = X(false);
  return (l, o) => {
    const i = je("v-app-bar-title"), r = je("v-btn"), s = je("v-list-item"), u = je("v-list"), c = je("v-menu"), d = je("v-app-bar");
    return Te(), en(d, { elevation: "0", color: "background", border: "b" }, { append: Ae(() => [Fe(n) ? (Te(), Oe(he, { key: 0 }, [p(tv), p(c, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: Ae(({ props: f }) => [p(r, Y(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: Ae(() => [p(u, { class: "header-menu-list", density: "compact" }, { default: Ae(() => [(Te(), Oe(he, null, Qt(t, (f) => p(s, { key: f.label, href: f.href, title: f.label, onClick: o[0] || (o[0] = (m) => a.value = false) }, null, 8, ["href", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (Te(), Oe(he, { key: 1 }, [(Te(), Oe(he, null, Qt(t, (f) => p(r, { key: f.label, href: f.href, variant: "text", size: "default", class: "nav-ink" }, { default: Ae(() => [Ke(Ie(f.label), 1)]), _: 2 }, 1032, ["href"])), 64)), p(tv)], 64))]), default: Ae(() => [p(i, { class: "header-title" }, { default: Ae(() => [...o[2] || (o[2] = [b("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 });
  };
} }), mC = { class: "text-medium-emphasis text-caption" }, gC = ln({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = je("v-footer");
    return Te(), en(l, { color: "background", border: "t", class: "app-footer justify-center" }, { default: Ae(() => [b("span", mC, " \xA9 " + Ie(Fe(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), hC = Bn(gC, [["__scopeId", "data-v-ddd3c1d7"]]), Cn = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, sh = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: Cn.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${Cn.email}`, display: Cn.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${Cn.phone.replace(/[^\d+]/g, "")}`, display: Cn.phone }, { label: "GitHub", icon: "mdi-github", href: Cn.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: Cn.linkedin, display: "bits-for-bread" }], yC = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], bC = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], pC = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], SC = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], kC = { id: "hero", class: "hero-section" }, wC = { class: "hero-frame glass-panel glass-panel--strong" }, xC = { class: "hero-main" }, CC = { class: "hero-kicker glass-chip section-kicker" }, _C = { class: "hero-name section-heading" }, VC = { class: "hero-tagline" }, IC = { class: "hero-bio" }, PC = { class: "hero-actions" }, AC = { href: "#projects", class: "hero-link hero-link--primary" }, TC = { class: "hero-rail" }, DC = { class: "hero-note quiet-sheet" }, EC = { class: "skills-block" }, MC = { class: "skill-label" }, BC = { class: "skill-items" }, $C = { class: "hero-note quiet-sheet" }, RC = { class: "hero-links" }, LC = ["href"], FC = ln({ __name: "HeroSection", setup(e) {
  const t = sh.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = je("v-icon"), o = je("v-container");
    return Te(), Oe("section", kC, [p(o, { class: "hero-container" }, { default: Ae(() => [b("div", wC, [b("div", xC, [b("span", CC, [p(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), Ke(Ie(Fe(Cn).location), 1)]), b("h1", _C, Ie(Fe(Cn).name), 1), b("p", VC, Ie(Fe(Cn).tagline), 1), b("p", IC, Ie(Fe(Cn).bio), 1), b("div", PC, [b("a", AC, [a[0] || (a[0] = Ke(" View selected work ", -1)), p(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = b("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), b("aside", TC, [b("section", DC, [a[2] || (a[2] = b("p", { class: "hero-note-label" }, "Capabilities", -1)), b("div", EC, [(Te(true), Oe(he, null, Qt(Fe(yC), (i) => (Te(), Oe("div", { key: i.label, class: "skill-group" }, [b("span", MC, Ie(i.label), 1), b("span", BC, Ie(i.items.join("  \xB7  ")), 1)]))), 128))])]), b("section", $C, [a[3] || (a[3] = b("p", { class: "hero-note-label" }, "Elsewhere", -1)), b("div", RC, [(Te(true), Oe(he, null, Qt(Fe(t), (i) => (Te(), Oe("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [p(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), b("span", null, Ie(i.display ?? i.label), 1)], 8, LC))), 128))])])])])]), _: 1 })]);
  };
} }), OC = Bn(FC, [["__scopeId", "data-v-156c5ed8"]]), Qs = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function NC(e, t) {
  return Qs[e].priority - Qs[t].priority;
}
function HC(e) {
  return [...e.links ?? []].sort((t, n) => NC(t.kind, n.kind)).map((t) => ({ ...t, ...Qs[t.kind] }));
}
function nv(e, t) {
  const n = HC(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const zC = { id: "projects", class: "demos-section" }, WC = { key: 0, class: "project-feature glass-panel" }, jC = { class: "project-feature-body" }, UC = { class: "project-feature-title" }, GC = { class: "project-feature-blurb" }, YC = { class: "project-feature-tech" }, KC = { class: "project-feature-actions" }, qC = ["href", "aria-label"], XC = { class: "project-index" }, ZC = { class: "project-item-head" }, JC = { class: "project-item-title" }, QC = { key: 0, class: "project-item-links", "aria-label": "Project links" }, e1 = ["href", "aria-label"], t1 = { class: "project-item-blurb" }, n1 = { class: "project-item-tech" }, a1 = ln({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = bC, a = t ? { ...t, visibleLinks: nv(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: nv(o, "compact") }));
  return (o, i) => {
    const r = je("v-icon"), s = je("v-tooltip"), u = je("v-container");
    return Te(), Oe("section", zC, [p(u, { class: "projects-container" }, { default: Ae(() => [i[1] || (i[1] = b("div", { class: "projects-head" }, [b("div", { class: "projects-heading" }, [b("span", { class: "glass-chip section-kicker" }, "Selected work"), b("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), b("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Fe(a) ? (Te(), Oe("article", WC, [b("div", jC, [i[0] || (i[0] = b("span", { class: "project-feature-label" }, "Featured project", -1)), b("h3", UC, Ie(Fe(a).title), 1), b("p", GC, Ie(Fe(a).blurb), 1), b("div", YC, [(Te(true), Oe(he, null, Qt(Fe(a).tech, (c) => (Te(), Oe("span", { key: c, class: "project-tech-tag" }, Ie(c), 1))), 128))])]), b("div", KC, [(Te(true), Oe(he, null, Qt(Fe(a).visibleLinks, (c) => (Te(), Oe("a", { key: c.kind, href: c.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-link", { "project-link--demo": c.kind === "demo" }]), "aria-label": c.ariaLabel }, [p(r, { icon: c.icon }, null, 8, ["icon"]), b("span", null, Ie(c.label), 1), p(s, { activator: "parent", location: "top", text: c.ariaLabel }, null, 8, ["text"])], 10, qC))), 128))])])) : Ft("", true), b("div", XC, [(Te(true), Oe(he, null, Qt(Fe(l), (c) => (Te(), Oe("article", { key: c.title, class: "project-item quiet-sheet" }, [b("header", ZC, [b("h3", JC, Ie(c.title), 1), c.visibleLinks.length ? (Te(), Oe("div", QC, [(Te(true), Oe(he, null, Qt(c.visibleLinks, (d) => (Te(), Oe("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [p(r, { icon: d.icon }, null, 8, ["icon"]), p(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, e1))), 128))])) : Ft("", true)]), b("p", t1, Ie(c.blurb), 1), b("div", n1, [(Te(true), Oe(he, null, Qt(c.tech, (d) => (Te(), Oe("span", { key: d, class: "project-tech-tag" }, Ie(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), l1 = Bn(a1, [["__scopeId", "data-v-d4ed8b96"]]), o1 = { id: "resume", class: "resume-section" }, i1 = { class: "timeline" }, r1 = { class: "entry-rail" }, s1 = { class: "entry-dates glass-chip" }, u1 = { class: "entry quiet-sheet" }, c1 = { class: "entry-head" }, d1 = { class: "entry-titleblock" }, f1 = { class: "entry-role" }, v1 = { class: "entry-subhead" }, m1 = { class: "entry-company" }, g1 = { class: "entry-work-location" }, h1 = { class: "entry-bullets" }, y1 = { key: 0, class: "entry-tech" }, b1 = { class: "entry-tech-items" }, p1 = { class: "entry-head" }, S1 = { class: "entry-titleblock" }, k1 = { class: "entry-role" }, w1 = { class: "entry-company" }, x1 = { class: "entry-meta" }, C1 = { class: "entry-dates" }, _1 = { class: "entry-location" }, V1 = { key: 0, class: "entry-focus" }, I1 = ln({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return Te(), Oe("section", o1, [p(a, { class: "resume-container" }, { default: Ae(() => [n[2] || (n[2] = b("div", { class: "resume-head" }, [b("div", { class: "resume-heading" }, [b("span", { class: "glass-chip section-kicker" }, "Resume"), b("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), b("ol", i1, [(Te(true), Oe(he, null, Qt(Fe(pC), (l) => (Te(), Oe("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [b("div", r1, [b("span", s1, Ie(l.dates), 1)]), b("article", u1, [b("header", c1, [b("div", d1, [b("h3", f1, Ie(l.role), 1), b("div", v1, [b("p", m1, Ie(l.company), 1), b("span", g1, Ie(l.location), 1)])])]), b("ul", h1, [(Te(true), Oe(he, null, Qt(l.highlights, (o, i) => (Te(), Oe("li", { key: i }, Ie(o), 1))), 128))]), l.tech ? (Te(), Oe("div", y1, [n[0] || (n[0] = b("span", { class: "entry-tech-label" }, "Stack", -1)), b("span", b1, Ie(l.tech.join("  \xB7  ")), 1)])) : Ft("", true)])]))), 128))]), n[3] || (n[3] = b("div", { class: "edu-head" }, [b("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (Te(true), Oe(he, null, Qt(Fe(SC), (l) => (Te(), Oe("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [b("header", p1, [b("div", S1, [b("h3", k1, Ie(l.degree) + " \u2014 " + Ie(l.field), 1), b("p", w1, Ie(l.school), 1)]), b("div", x1, [b("span", C1, Ie(l.dates), 1), b("span", _1, Ie(l.location), 1)])]), l.focus ? (Te(), Oe("p", V1, [n[1] || (n[1] = b("span", { class: "entry-tech-label" }, "Focus", -1)), Ke(" " + Ie(l.focus), 1)])) : Ft("", true)]))), 128))]), _: 1 })]);
  };
} }), P1 = Bn(I1, [["__scopeId", "data-v-72166a64"]]), A1 = ["href", "aria-label"], T1 = { class: "contact-text" }, D1 = ln({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = je("v-icon");
    return Te(), Oe("div", { class: te(["contact-strip", { "is-dense": e.dense }]) }, [(Te(true), Oe(he, null, Qt(Fe(sh), (l) => (Te(), Oe("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [p(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), b("span", T1, Ie(l.display ?? l.label), 1)], 8, A1))), 128))], 2);
  };
} }), E1 = Bn(D1, [["__scopeId", "data-v-0c3dbac0"]]), M1 = { id: "contact", class: "contact-section" }, B1 = { class: "contact-band glass-panel" }, $1 = ln({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return Te(), Oe("section", M1, [p(a, { class: "contact-container" }, { default: Ae(() => [b("div", B1, [n[0] || (n[0] = b("div", { class: "contact-head" }, [b("span", { class: "glass-chip section-kicker" }, "Contact"), b("h2", { class: "contact-title" }, "Open to interesting problems."), b("p", { class: "contact-copy" })], -1)), p(E1, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), R1 = Bn($1, [["__scopeId", "data-v-e54dfca1"]]), L1 = ln({ __name: "App", setup(e) {
  return (t, n) => {
    const a = je("v-main"), l = je("v-app");
    return Te(), en(l, { class: "app-shell" }, { default: Ae(() => [p(n0), p(vC), p(a, { class: "app-main" }, { default: Ae(() => [p(OC), p(l1), p(P1), p(R1)]), _: 1 }), p(hC)]), _: 1 });
  };
} }), F1 = H({ ...pe(), ...Le(ah(), ["fullHeight"]), ...Ue() }, "VApp"), O1 = Q()({ name: "VApp", props: F1(), setup(e, t) {
  let { slots: n } = t;
  const a = qe(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = oh({ ...e, fullHeight: true }), { rtlClasses: s } = _t();
  return ne(() => {
    var _a3;
    return b("div", { ref: r, class: te(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: me([e.style]) }, [b("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Me = H({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), uh = H({ text: String, ...pe(), ...Me() }, "VToolbarTitle"), Sc = Q()({ name: "VToolbarTitle", props: uh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(n.default || n.text || e.text);
    return p(e.tag, { class: te(["v-toolbar-title", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [a && b("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), N1 = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function yn(e, t, n) {
  return Q()({ name: e, props: N1({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? tc : Da;
      return ma(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function kc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Q()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: jn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? tc : Da;
    return () => ma(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function wc() {
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
const H1 = H({ target: [Object, Array] }, "v-dialog-transition"), hs = /* @__PURE__ */ new WeakMap(), xr = Q()({ name: "VDialogTransition", props: H1(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = lv(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (hs.set(l, i), jn()) aa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Of }).finished.then(() => o());
    else {
      const f = aa(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Of });
      (_a3 = av(l)) == null ? void 0 : _a3.forEach((m) => {
        aa(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Ro });
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
    !hs.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = lv(e.target, l) : i = hs.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    jn() ? aa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: Nf }).finished.then(() => o()) : (aa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: Nf }).finished.then(() => o()), (_a3 = av(l)) == null ? void 0 : _a3.forEach((m) => {
      aa(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Ro });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? p(Da, Y({ name: "dialog-transition" }, a, { css: false }), n) : p(Da, { name: "dialog-transition" }, n);
} });
function av(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function lv(e, t) {
  const n = Mg(e), a = cc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), m = c / f || 0, S = d / f || 0, v = a.width * a.height / (window.innerWidth * window.innerHeight), y = v > 0.12 ? Math.min(1.5, (v - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: m, sy: S, speed: y };
}
const z1 = yn("fab-transition", "center center", "out-in"), W1 = yn("dialog-bottom-transition"), j1 = yn("dialog-top-transition"), Ho = yn("fade-transition"), xc = yn("scale-transition"), U1 = yn("scroll-x-transition"), G1 = yn("scroll-x-reverse-transition"), Y1 = yn("scroll-y-transition"), K1 = yn("scroll-y-reverse-transition"), q1 = yn("slide-x-transition"), X1 = yn("slide-x-reverse-transition"), Cc = yn("slide-y-transition"), Z1 = yn("slide-y-reverse-transition"), Cr = kc("expand-transition", wc()), _c = kc("expand-x-transition", wc("", "x")), J1 = kc("expand-both-transition", wc("", "both")), Q1 = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Be = Q(false)({ name: "VDefaultsProvider", props: Q1(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = Zl(e);
  return mt(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), kt = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function wt(e) {
  return { dimensionStyles: _(() => {
    const n = {}, a = ve(e.height), l = ve(e.maxHeight), o = ve(e.maxWidth), i = ve(e.minHeight), r = ve(e.minWidth), s = ve(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function e_(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const ch = H({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...pe(), ...kt() }, "VResponsive"), eu = Q()({ name: "VResponsive", props: ch(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = e_(e), { dimensionStyles: l } = wt(e);
  return ne(() => {
    var _a3;
    return b("div", { class: te(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: me([l.value, e.style]) }, [b("div", { class: "v-responsive__sizer", style: me(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && b("div", { class: te(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function Vc(e) {
  return uc(() => {
    const { class: t, style: n } = dh(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Et(e) {
  const { colorClasses: t, colorStyles: n } = Vc(() => ({ text: nt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Xe(e) {
  const { colorClasses: t, colorStyles: n } = Vc(() => ({ background: nt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function t_(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function dh(e) {
  const t = t_(nt(e)), n = [], a = {};
  if (t.background) if (Ys(t.background)) {
    if (a.backgroundColor = t.background, !t.text && E0(t.background)) {
      const l = fn(t.background);
      if (l.a == null || l.a === 1) {
        const o = zg(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Ys(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const it = H({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { roundedClasses: _(() => {
    const a = ht(e) ? e.value : e.rounded, l = ht(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const ha = H({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Kt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? tc : Da, ...s } = il(a) ? a : {};
  let u;
  return il(a) ? u = Y(s, m0({ disabled: l, group: o }), i) : u = Y({ name: l || !a ? "" : a }, i), ma(r, u, n);
};
function ov(e, t) {
  if (!oc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? tu(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function tu(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Dn = { mounted: ov, unmounted: tu, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (tu(e, t), ov(e, t));
} }, fh = H({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...ch(), ...pe(), ...it(), ...ha() }, "VImg"), da = Q()({ name: "VImg", directives: { vIntersect: Dn }, props: fh(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { roundedClasses: i } = dt(e), r = St("VImg"), s = re(""), u = X(), c = re(e.eager ? "loading" : "idle"), d = re(), f = re(), m = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = _(() => m.value.aspect || d.value / f.value || 0);
  ue(() => e.src, () => {
    v(c.value !== "idle");
  }), ue(S, (D, M) => {
    !D && M && u.value && V(u.value);
  }), Jl(() => v());
  function v(D) {
    if (!(e.eager && D) && !(oc && !D && !e.eager)) {
      if (c.value = "loading", m.value.lazySrc) {
        const M = new Image();
        M.src = m.value.lazySrc, V(M, null);
      }
      m.value.src && Ee(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || m.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            S.value || V(u.value, null), c.value === "loading" && y();
          } else S.value || V(u.value), k();
        });
      });
    }
  }
  function y() {
    var _a3;
    r.isUnmounted || (k(), V(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || m.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || m.value.src));
  }
  function k() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let I = -1;
  Ht(() => {
    clearTimeout(I);
  });
  function V(D) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const T = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: z } = D;
      L || z ? (d.value = z, f.value = L) : !D.complete && c.value === "loading" && M != null ? I = window.setTimeout(T, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const w = $(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!m.value.src || c.value === "idle") return null;
    const D = b("img", { class: te(["v-img__img", w.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.src, srcset: m.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: y, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return p(Kt, { transition: e.transition, appear: true }, { default: () => [at(M ? b("picture", { class: "v-img__picture" }, [M, D]) : D, [[Mn, c.value === "loaded"]])] });
  }, C = () => p(Kt, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && b("img", { class: te(["v-img__img", "v-img__img--preload", w.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), x = () => a.placeholder ? p(Kt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && b("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? p(Kt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && b("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? b("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = re(false);
  {
    const D = ue(S, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), D());
    });
  }
  return ne(() => {
    const D = eu.filterProps(e);
    return at(p(eu, Y({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ve(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => b(he, null, [p(g, null, null), p(C, null, null), p(P, null, null), p(x, null, null), p(A, null, null)]), default: a.default }), [[Dn, { handler: v, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), zt = H({ border: [Boolean, Number, String] }, "border");
function Xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { borderClasses: _(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const xt = H({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function It(e) {
  return { elevationClasses: $(() => {
    const n = ht(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const iv = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Zn = H({ location: String }, "location");
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = _t();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = Us(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[iv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[iv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const n_ = [null, "prominent", "default", "comfortable", "compact"], vh = H({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => n_.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...zt(), ...pe(), ...xt(), ...Zn(), ...it(), ...Me({ tag: "header" }), ...Ue() }, "VToolbar"), nu = Q()({ name: "VToolbar", props: vh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color), { borderClasses: o } = Xt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Oa(e), { roundedClasses: s } = dt(e), { themeClasses: u } = qe(e), { rtlClasses: c } = _t(), d = re(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return mt({ VBtn: { variant: "text" } }), ne(() => {
    var _a4;
    const S = !!(e.title || n.title), v = !!(n.image || e.image), y = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!y : e.extended, p(e.tag, { class: te(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: me([l.value, r.value, e.style]) }, { default: () => [v && b("div", { key: "image", class: "v-toolbar__image" }, [n.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : p(da, { key: "image-img", cover: true, src: e.image }, null)]), p(Be, { defaults: { VTabs: { height: ve(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [b("div", { class: "v-toolbar__content", style: { height: ve(f.value) } }, [n.prepend && b("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && p(Sc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && b("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), p(Be, { defaults: { VTabs: { height: ve(m.value) } } }, { default: () => [p(Cr, null, { default: () => [d.value && b("div", { class: "v-toolbar__extension", style: { height: ve(m.value) } }, [y])] })] })] });
  }), { contentHeight: f, extensionHeight: m };
} }), a_ = H({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function l_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = X(null), r = re(0), s = re(0), u = re(0), c = re(false), d = re(false), f = re(false), m = re(false), S = re(true), v = _(() => Number(e.scrollThreshold)), y = _(() => Ze((v.value - r.value) / v.value || 0));
  function h(w) {
    const g = "window" in w ? window.innerHeight : w.clientHeight, C = "window" in w ? document.documentElement.scrollHeight : w.scrollHeight;
    return { clientHeight: g, scrollHeight: C };
  }
  function k() {
    const w = i.value;
    if (!w) return;
    const { clientHeight: g, scrollHeight: C } = h(w), x = C - g, A = (a == null ? void 0 : a.value) || 0, P = v.value + A;
    S.value = x > P;
  }
  function I() {
    k();
  }
  function V() {
    const w = i.value;
    if (!w || n && !n.value) return;
    l = r.value, r.value = "window" in w ? w.pageYOffset : w.scrollTop;
    const g = w instanceof Window ? document.documentElement.scrollHeight : w.scrollHeight;
    o !== g && (g > o && k(), o = g), d.value = r.value < l, u.value = Math.abs(r.value - v.value);
    const { clientHeight: C, scrollHeight: x } = h(w), A = r.value + C >= x - 5;
    !d.value && A && r.value >= v.value && S.value && (m.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !A || P && r.value < v.value || E) && (m.value = false), f.value = A;
  }
  return ue(d, () => {
    s.value = s.value || r.value;
  }), ue(c, () => {
    s.value = 0;
  }), Ct(() => {
    ue(() => e.scrollTarget, (w) => {
      var _a3;
      const g = w ? document.querySelector(w) : window;
      g && g !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), i.value = g, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        k();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Ht(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && ue(n, V, { immediate: true }), { scrollThreshold: v, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: y, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: S };
}
function bl() {
  const e = re(false);
  return Ct(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: $(() => e.value ? void 0 : { transition: "none !important" }), isBooted: al(e) };
}
const o_ = H({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Le(vh(), ["location"]), ...hl(), ...a_(), height: { type: [Number, String], default: 64 } }, "VAppBar"), i_ = Q()({ name: "VAppBar", props: o_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = X(), l = we(e, "modelValue"), o = _(() => {
    var _a3;
    const g = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: g.has("hide"), fullyHide: g.has("fully-hide"), inverted: g.has("inverted"), collapse: g.has("collapse"), elevate: g.has("elevate"), fadeImage: g.has("fade-image") };
  }), i = _(() => {
    const g = o.value;
    return g.hide || g.fullyHide || g.inverted || g.collapse || g.elevate || g.fadeImage || !l.value;
  }), r = _(() => {
    var _a3, _b2;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return g + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: S } = l_(e, { canScroll: i, layoutSize: r }), v = $(() => o.value.hide || o.value.fullyHide), y = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), k = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return v.value ? s.value < u.value || o.value.fullyHide ? g + C : g : g + C;
  });
  $t(() => !!e.scrollBehavior, () => {
    ct(() => {
      if (!v.value) {
        l.value = true;
        return;
      }
      if (o.value.inverted) {
        l.value = s.value > u.value;
        return;
      }
      if (!S.value) {
        l.value = true;
        return;
      }
      if (m.value) {
        l.value = false;
        return;
      }
      l.value = c.value && !f.value || s.value < u.value;
    });
  });
  const { ssrBootStyles: V } = bl(), { layoutItemStyles: w } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => e.location), layoutSize: I, elementSize: re(void 0), active: l, absolute: $(() => e.absolute) });
  return ne(() => {
    const g = Le(nu.filterProps(e), ["location"]);
    return p(nu, Y({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...w.value, "--v-toolbar-image-opacity": k.value, height: void 0, ...V.value }, e.style] }, g, { collapse: y.value, flat: h.value }), n);
  }), {};
} }), r_ = [null, "default", "comfortable", "compact"], gt = H({ density: { type: String, default: "default", validator: (e) => r_.includes(e) } }, "density");
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { densityClasses: $(() => `${t}--density-${e.density}`) };
}
const s_ = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ya(e, t) {
  return b(he, null, [e && b("span", { key: "overlay", class: te(`${t}__overlay`) }, null), b("span", { key: "underlay", class: te(`${t}__underlay`) }, null)]);
}
const bn = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => s_.includes(e) } }, "variant");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = $(() => {
    const { variant: o } = nt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = Vc(() => {
    const { variant: o, color: i } = nt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const mh = H({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...Me(), ...Ue(), ...bn() }, "VBtnGroup"), au = Q()({ name: "VBtnGroup", props: mh(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Lt(e), { borderClasses: o } = Xt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e);
  mt({ VBtn: { height: $(() => e.direction === "horizontal" ? "auto" : null), baseColor: $(() => e.baseColor), color: $(() => e.color), density: $(() => e.density), flat: true, variant: $(() => e.variant) } }), ne(() => p(e.tag, { class: te(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: me(e.style) }, n));
} }), pl = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Sl = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ma(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = St("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Mt();
  rt(Symbol.for(`${t.description}:id`), l);
  const o = We(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = $(() => e.value), r = _(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: l, value: i, disabled: r }, a);
  }
  function u() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Ht(() => u());
  const c = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), m = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return ue(c, (S) => {
    a.emit("group:selected", { value: S });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (S) => o.select(l, S), selectedClass: m, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Na(e, t) {
  let n = false;
  const a = Tt([]), l = we(e, "modelValue", [], (f) => f === void 0 ? [] : gh(a, f === null ? [null] : ot(f)), (f) => {
    const m = c_(a, f);
    return e.multiple ? m : m[0];
  }), o = St("useGroup");
  function i(f, m) {
    const S = f, v = Symbol.for(`${t.description}:id`), h = Ml(v, o == null ? void 0 : o.vnode).indexOf(m);
    Fe(S.value) === void 0 && (S.value = h, S.useIndexAsValue = true), h > -1 ? a.splice(h, 0, S) : a.push(S);
  }
  function r(f) {
    if (n) return;
    s();
    const m = a.findIndex((S) => S.id === f);
    a.splice(m, 1);
  }
  function s() {
    const f = a.find((m) => !m.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  Ct(() => {
    s();
  }), Ht(() => {
    n = true;
  }), fr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, m) {
    const S = a.find((v) => v.id === f);
    if (!(m && (S == null ? void 0 : S.disabled))) if (e.multiple) {
      const v = l.value.slice(), y = v.findIndex((k) => k === f), h = ~y;
      if (m = m ?? !h, h && e.mandatory && v.length <= 1 || !h && e.max != null && v.length + 1 > e.max) return;
      y < 0 && m ? v.push(f) : y >= 0 && !m && v.splice(y, 1), l.value = v;
    } else {
      const v = l.value.includes(f);
      if (e.mandatory && v || !v && !m) return;
      l.value = m ?? !v ? [f] : [];
    }
  }
  function c(f) {
    if (e.multiple, l.value.length) {
      const m = l.value[0], S = a.findIndex((h) => h.id === m);
      let v = (S + f) % a.length, y = a[v];
      for (; y.disabled && v !== S; ) v = (v + f) % a.length, y = a[v];
      if (y.disabled) return;
      l.value = [a[v].id];
    } else {
      const m = a.find((S) => !S.disabled);
      m && (l.value = [m.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: $(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: $(() => e.selectedClass), items: $(() => a), getItemIndex: (f) => u_(a, f) };
  return rt(t, d), d;
}
function u_(e, t) {
  const n = gh(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function gh(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Dt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function c_(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Ic = Symbol.for("vuetify:v-btn-toggle"), d_ = H({ ...mh(), ...pl() }, "VBtnToggle"), f_ = Q()({ name: "VBtnToggle", props: d_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Na(e, Ic);
  return ne(() => {
    const s = au.filterProps(e);
    return p(au, Y({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), v_ = ["x-small", "small", "default", "large", "x-large"], Jn = H({ size: { type: [String, Number], default: "default" } }, "size");
function Ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return uc(() => {
    const n = e.size;
    let a, l;
    return Gi(v_, n) ? a = `${t}--size-${n}` : n && (l = { width: ve(n), height: ve(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const m_ = H({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: _e, opacity: [String, Number], ...pe(), ...Jn(), ...Me({ tag: "i" }), ...Ue() }, "VIcon"), Ye = Q()({ name: "VIcon", props: m_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = re(), { themeClasses: o } = wr(), { iconData: i } = J0(() => l.value || e.icon), { sizeClasses: r } = Ql(e), { textColorClasses: s, textColorStyles: u } = Et(() => e.color);
  return ne(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = Pg(c).filter((f) => f.type === ei && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return p(i.value.component, { tag: e.tag, icon: i.value.icon, class: te(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: me([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ii(e, t) {
  const n = X(), a = re(false);
  if (oc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    bt(() => {
      l.disconnect();
    }), ue(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const g_ = H({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function h_(e) {
  const n = $(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = re(e.reveal ? "initial" : "disabled");
  return Ct(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const y_ = H({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...pe(), ...g_(), ...Jn(), ...Me({ tag: "div" }), ...Ue() }, "VProgressCircular"), Ba = Q()({ name: "VProgressCircular", props: y_(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = X(), { themeClasses: i } = qe(e), { sizeClasses: r, sizeStyles: s } = Ql(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { textColorClasses: d, textColorStyles: f } = Et(() => e.bgColor), { intersectionRef: m, isIntersecting: S } = ii(), { resizeRef: v, contentRect: y } = wn(), { state: h, duration: k } = h_(e), I = $(() => h.value === "initial" ? 0 : Ze(parseFloat(e.modelValue), 0, 100)), V = $(() => Number(e.width)), w = $(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(V.value, 32)), g = $(() => a / (1 - V.value / w.value) * 2), C = $(() => V.value / w.value * g.value), x = $(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? ve(Math.min(l - 0.01, P + C.value)) : ve(P);
  }), A = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ct(() => {
    m.value = o.value, v.value = o.value;
  }), ne(() => p(e.tag, { ref: o, class: te(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || jn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: me([s.value, c.value, { "--progress-reveal-duration": `${k.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [b("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [b("circle", { class: te(["v-progress-circular__underlay", d.value]), style: me(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), b("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": x.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && b("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), b_ = H({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function p_(e, t) {
  const n = $(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = nt(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = $(() => Number(e.chunkGap)), o = _(() => {
    if (!n.value) return {};
    const r = ve(l.value), s = ve(a.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function i(r) {
    const s = nt(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return Ze(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const S_ = H({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...b_(), ...pe(), ...Zn({ location: "top" }), ...it(), ...Me(), ...Ue() }, "VProgressLinear"), _r = Q()({ name: "VProgressLinear", props: S_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = X(), l = we(e, "modelValue"), { isRtl: o, rtlClasses: i } = _t(), { themeClasses: r } = qe(e), { locationStyles: s } = Oa(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Xe(() => e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: S } = Xe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: y } = Xe(() => e.color), { roundedClasses: h } = dt(e), { intersectionRef: k, isIntersecting: I } = ii(), V = _(() => parseFloat(e.max)), w = _(() => parseFloat(e.height)), g = _(() => Ze(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => Ze(parseFloat(l.value) / V.value * 100, 0, 100)), x = _(() => o.value !== e.reverse), A = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = re(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = p_(e, P);
  $t(E, () => {
    const { resizeRef: O } = wn((Z) => P.value = Z[0].contentRect.width);
    ct(() => O.value = a.value);
  });
  const T = _(() => E.value ? M(g.value) : g.value), L = _(() => E.value ? M(C.value) : C.value);
  function z(O) {
    if (!k.value) return;
    const { left: Z, right: J, width: F } = k.value.getBoundingClientRect(), G = x.value ? F - O.clientX + (J - F) : O.clientX - Z;
    l.value = Math.round(G / F * V.value);
  }
  return ct(() => {
    k.value = a.value;
  }), ne(() => p(e.tag, { ref: a, class: te(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": x.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: me([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ve(w.value) : 0, "--v-progress-linear-height": ve(w.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && z }, { default: () => [e.stream && b("div", { key: "stream", class: te(["v-progress-linear__stream", u.value]), style: { ...c.value, [x.value ? "left" : "right"]: ve(-w.value), borderTop: `${ve(w.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ve(w.value / 4)})`, width: ve(100 - g.value, "%"), "--v-progress-linear-stream-to": ve(w.value * (x.value ? 1 : -1)) } }, null), b("div", { class: te(["v-progress-linear__background", d.value]), style: me([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), b("div", { class: te(["v-progress-linear__buffer", m.value]), style: me([S.value, { opacity: parseFloat(e.bufferOpacity), width: ve(T.value, "%") }]) }, null), p(Da, { name: A.value }, { default: () => [e.indeterminate ? b("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((O) => b("div", { key: O, class: te(["v-progress-linear__indeterminate", O, v.value]), style: me(y.value) }, null))]) : b("div", { class: te(["v-progress-linear__determinate", v.value]), style: me([y.value, { width: ve(L.value, "%") }]) }, null)] }), n.default && b("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
} }), Vr = H({ loading: [Boolean, String] }, "loader");
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { loaderClasses: $(() => ({ [`${t}--loading`]: e.loading })) };
}
function si(e, t) {
  var _a3;
  let { slots: n } = t;
  return b("div", { class: te(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || p(_r, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const k_ = ["static", "relative", "fixed", "absolute", "sticky"], eo = H({ position: { type: String, validator: (e) => k_.includes(e) } }, "position");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { positionClasses: $(() => e.position ? `${t}--${e.position}` : void 0) };
}
function w_() {
  const e = St("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function hh() {
  var _a3, _b2;
  return (_b2 = (_a3 = St("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function ui(e, t) {
  const n = CS("RouterLink"), a = $(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || Cf(t, "click") || Cf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = $(() => e.href);
    return { isLink: a, isRouterLink: $(() => false), isClickable: l, href: d, linkProps: Tt({ href: d }), route: $(() => {
    }), navigate: $(() => {
    }) };
  }
  const o = n.useLink({ to: $(() => e.to || ""), replace: $(() => e.replace) }), i = _(() => e.to ? o : void 0), r = w_(), s = _(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Dt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = _(() => {
    var _a3;
    return e.to ? (_a3 = i.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: $(() => !!e.to), isClickable: l, isActive: s, route: $(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.route.value;
  }), navigate: $(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.navigate;
  }), href: u, linkProps: Tt({ href: u, "aria-current": $(() => s.value ? "page" : void 0), "aria-disabled": $(() => e.disabled && a.value ? "true" : void 0), tabindex: $(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const ci = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let ys = false;
function x_(e, t) {
  let n = false, a, l;
  Je && (e == null ? void 0 : e.beforeEach) && (Ee(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      ys ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), ys = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      ys = false;
    });
  }), bt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function C_(e, t) {
  ue(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ee(() => {
      t(n);
    });
  }, { immediate: true });
}
const lu = Symbol("rippleStop"), __ = 80;
function rv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ou(e) {
  return e.constructor.name === "TouchEvent";
}
function yh(e) {
  return e.constructor.name === "KeyboardEvent";
}
const V_ = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!yh(e)) {
    const d = t.getBoundingClientRect(), f = ou(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, Ji = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = V_(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), rv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), rv(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function bh(e) {
  return typeof e > "u" || !!e;
}
function zo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[lu])) {
    if (e[lu] = true, ou(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || yh(e), n._ripple.class && (t.class = n._ripple.class), ou(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Ji.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, __);
    } else Ji.show(e, n, t);
  }
}
function Qi(e) {
  e[lu] = true;
}
function un(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        un(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), Ji.hide(t);
  }
}
function ph(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Wo = false;
function I_(e, t) {
  !Wo && t.includes(e.key) && (Wo = true, zo(e));
}
function Sh(e) {
  Wo = false, un(e);
}
function kh(e) {
  Wo && (Wo = false, un(e));
}
function wh(e, t, n) {
  const { value: a, modifiers: l } = t, o = bh(a);
  o || Ji.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = il(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => I_(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Qi, { passive: true }), e.addEventListener("mousedown", Qi);
      return;
    }
    e.addEventListener("touchstart", zo, { passive: true }), e.addEventListener("touchend", un, { passive: true }), e.addEventListener("touchmove", ph, { passive: true }), e.addEventListener("touchcancel", un), e.addEventListener("mousedown", zo), e.addEventListener("mouseup", un), e.addEventListener("mouseleave", un), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Sh), e.addEventListener("blur", kh), e.addEventListener("dragstart", un, { passive: true });
  } else !o && n && xh(e);
}
function xh(e) {
  var _a3;
  e.removeEventListener("touchstart", Qi), e.removeEventListener("mousedown", Qi), e.removeEventListener("touchstart", zo), e.removeEventListener("touchend", un), e.removeEventListener("touchmove", ph), e.removeEventListener("touchcancel", un), e.removeEventListener("mousedown", zo), e.removeEventListener("mouseup", un), e.removeEventListener("mouseleave", un), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Sh), e.removeEventListener("blur", kh), e.removeEventListener("dragstart", un);
}
function P_(e, t) {
  wh(e, t, false);
}
function A_(e) {
  xh(e), delete e._ripple;
}
function T_(e, t) {
  if (t.value === t.oldValue) return;
  const n = bh(t.oldValue);
  wh(e, t, n);
}
const Rt = { mounted: P_, unmounted: A_, updated: T_ }, Ir = H({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Ic }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: _e, appendIcon: _e, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...Sl(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "elevated" }) }, "VBtn"), ze = Q()({ name: "VBtn", props: Ir(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = Xt(e), { densityClasses: i } = Lt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: u } = ri(e), { locationStyles: c } = Oa(e), { positionClasses: d } = to(e), { roundedClasses: f } = dt(e), { sizeClasses: m, sizeStyles: S } = Ql(e), v = Ma(e, e.symbol, false), y = ui(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : y.isRouterLink.value ? (_a3 = y.isActive) == null ? void 0 : _a3.value : v == null ? void 0 : v.isSelected.value;
  }), k = $(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (v == null ? void 0 : v.isSelected.value) && (!y.isLink.value || ((_a3 = y.isActive) == null ? void 0 : _a3.value)) || !v || ((_b2 = y.isActive) == null ? void 0 : _b2.value) ? k.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: w, variantClasses: g } = ba(I), C = _(() => (v == null ? void 0 : v.disabled.value) || e.disabled), x = $(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || y.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? (_b2 = (_a3 = y.navigate).value) == null ? void 0 : _b2.call(_a3, E) : v == null ? void 0 : v.toggle());
  }
  return C_(y, v == null ? void 0 : v.select), ne(() => {
    const E = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return at(p(E, Y(y.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", v == null ? void 0 : v.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": x.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, m.value, g.value, e.class], style: [w.value, r.value, c.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ya(true, "v-btn"), !e.icon && D && b("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : p(Ye, { key: "prepend-icon", icon: e.prependIcon }, null)]), b("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? p(Ye, { key: "content-icon", icon: e.icon }, null) : p(Be, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text)];
      } })]), !e.icon && M && b("span", { key: "append", class: "v-btn__append" }, [a.append ? p(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : p(Ye, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && b("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? p(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Rt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: v };
} }), D_ = H({ ...Le(Ir({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), E_ = Q()({ name: "VAppBarNavIcon", props: D_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(ze, Y(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), M_ = Q()({ name: "VAppBarTitle", props: uh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(Sc, Y(e, { class: "v-app-bar-title" }), n)), {};
} }), Ch = ga("v-alert-title"), _h = H({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Vh(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const B_ = ["success", "info", "warning", "error"], $_ = H({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: _e, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => B_.includes(e) }, ...pe(), ...gt(), ...kt(), ...xt(), ..._h(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAlert"), R_ = Q()({ name: "VAlert", props: $_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = $(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Vh(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = qe(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ba(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Lt(e), { dimensionStyles: f } = wt(e), { elevationClasses: m } = It(e), { locationStyles: S } = Oa(e), { positionClasses: v } = to(e), { roundedClasses: y } = dt(e), { textColorClasses: h, textColorStyles: k } = Et(() => e.borderColor), { t: I } = Qe(), V = $(() => ({ "aria-label": I(e.closeLabel), onClick(w) {
    l.value = false, n("click:close", w);
  } }));
  return () => {
    const w = !!(a.prepend || o.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), x = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && p(e.tag, { class: te(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, m.value, v.value, y.value, c.value, e.class]), style: me([u.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ya(false, "v-alert"), e.border && b("div", { key: "border", class: te(["v-alert__border", h.value]), style: me(k.value) }, null), w && b("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...x } } }, a.prepend) : p(Ye, Y({ key: "prepend-icon" }, x), null)]), b("div", { class: "v-alert__content" }, [g && p(Ch, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && b("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && b("div", { key: "close", class: "v-alert__close" }, [a.close ? p(Be, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : p(ze, Y({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), L_ = H({ start: Boolean, end: Boolean, icon: _e, image: String, text: String, ...zt(), ...pe(), ...gt(), ...it(), ...Jn(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAvatar"), hn = Q()({ name: "VAvatar", props: L_(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = Xt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ba(e), { densityClasses: s } = Lt(e), { roundedClasses: u } = dt(e), { sizeClasses: c, sizeStyles: d } = Ql(e);
  return ne(() => p(e.tag, { class: te(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: me([i.value, d.value, e.style]) }, { default: () => [n.default ? p(Be, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? p(da, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? p(Ye, { key: "icon", icon: e.icon }, null) : e.text, ya(false, "v-avatar")] })), {};
} }), F_ = H({ text: String, onClick: Bt(), ...pe(), ...Ue() }, "VLabel"), no = Q()({ name: "VLabel", props: F_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return b("label", { class: te(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: me(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ih = Symbol.for("vuetify:selection-control-group"), Pc = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: _e, trueIcon: _e, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...pe(), ...gt(), ...Ue() }, "SelectionControlGroup"), O_ = H({ ...Pc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), Ph = Q()({ name: "VSelectionControlGroup", props: O_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = Mt(), o = $(() => e.id || `v-selection-control-group-${l}`), i = $(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return rt(Ih, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), bt(() => {
      r.delete(s);
    });
  } }), mt({ [e.defaultsTarget]: { color: $(() => e.color), disabled: $(() => e.disabled), density: $(() => e.density), error: $(() => e.error), inline: $(() => e.inline), modelValue: a, multiple: $(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: $(() => e.falseIcon), trueIcon: $(() => e.trueIcon), readonly: $(() => e.readonly), ripple: $(() => e.ripple), type: $(() => e.type), valueComparator: $(() => e.valueComparator) } }), ne(() => {
    var _a3;
    return b("div", { class: te(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: me(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Pr = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...pe(), ...Pc() }, "VSelectionControl");
function N_(e) {
  const t = We(Ih, void 0), { densityClasses: n } = Lt(e), a = we(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const m = t ? t.modelValue.value : a.value;
    return i.value ? ot(m).some((S) => e.valueComparator(S, l.value)) : e.valueComparator(m, l.value);
  }, set(m) {
    if (e.readonly) return;
    const S = m ? l.value : o.value;
    let v = S;
    i.value && (v = m ? [...ot(a.value), S] : ot(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = v : a.value = v;
  } }), { textColorClasses: s, textColorStyles: u } = Et(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Xe(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const $a = Q()({ name: "VSelectionControl", directives: { vRipple: Rt }, inheritAttrs: false, props: Pr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = N_(e), m = Mt(), S = re(false), v = re(false), y = X(), h = $(() => e.id || `input-${m}`), k = $(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    y.value && (y.value.checked = r.value);
  });
  function I(C) {
    k.value && (S.value = true, Wl(C.target, ":focus-visible") !== false && (v.value = true));
  }
  function V() {
    S.value = false, v.value = false;
  }
  function w(C) {
    C.stopPropagation();
  }
  function g(C) {
    if (!k.value) {
      y.value && (y.value.checked = r.value);
      return;
    }
    e.readonly && l && Ee(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ne(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [x, A] = qn(n), P = b("input", Y({ ref: y, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return b("div", Y({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": v.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, x, { style: e.style }), [b("div", { class: te(["v-selection-control__wrapper", s.value]), style: me(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), at(b("div", { class: te(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? b(he, null, [i.value && p(Ye, { key: "icon", icon: i.value }, null), P])]), [[Rt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && p(no, { for: h.value, onClick: w }, { default: () => [C] })]);
  }), { isFocused: S, input: y };
} }), Ah = H({ indeterminate: Boolean, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, ...Pr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), En = Q()({ name: "VCheckboxBtn", props: Ah(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "indeterminate"), l = we(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = $(() => a.value ? e.indeterminateIcon : e.falseIcon), r = $(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => {
    const s = Le($a.filterProps(e), ["modelValue"]);
    return p($a, Y(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function di(e) {
  const { t } = Qe();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ai(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return p(Ye, Y({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const H_ = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...pe(), ...ha({ transition: { component: Cc, leaveAbsolute: true, group: true } }) }, "VMessages"), Th = Q()({ name: "VMessages", props: H_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => ot(e.messages)), { textColorClasses: l, textColorStyles: o } = Et(() => e.color);
  return ne(() => p(Kt, { transition: e.transition, tag: "div", class: te(["v-messages", l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => b("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), fi = H({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = we(e, "focused"), a = $(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const Dh = Symbol.for("vuetify:form"), z_ = H({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function W_(e) {
  const t = we(e, "modelValue"), n = $(() => e.disabled), a = $(() => e.readonly), l = re(false), o = X([]), i = X([]);
  async function r() {
    const c = [];
    let d = true;
    i.value = [], l.value = true;
    for (const f of o.value) {
      const m = await f.validate();
      if (m.length > 0 && (d = false, c.push({ id: f.id, errorMessages: m })), !d && e.fastFail) break;
    }
    return i.value = c, l.value = false, { valid: d, errors: i.value };
  }
  function s() {
    o.value.forEach((c) => c.reset());
  }
  function u() {
    o.value.forEach((c) => c.resetValidation());
  }
  return ue(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const m of o.value) m.isValid === false ? (d++, f.push({ id: m.id, errorMessages: m.errorMessages })) : m.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), rt(Dh, { register: (c) => {
    let { id: d, vm: f, validate: m, reset: S, resetValidation: v } = c;
    o.value.some((y) => y.id === d), o.value.push({ id: d, validate: m, reset: S, resetValidation: v, vm: um(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const m = o.value.find((S) => S.id === c);
    m && (m.isValid = d, m.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: $(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function ao(e) {
  const t = We(Dh, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const j_ = Symbol.for("vuetify:rules");
function U_(e) {
  const t = We(j_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? $(e);
}
const Eh = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function Mh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = we(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = ao(e), i = U_(() => e.rules), r = X([]), s = re(true), u = _(() => !!(ot(a.value === "" ? null : a.value).length || ot(l.value === "" ? null : l.value).length)), c = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? ot(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a3;
    let V = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const w = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return { input: w.has("input"), blur: w.has("blur") || w.has("input") || w.has("invalid-input"), invalidInput: w.has("invalid-input"), lazy: w.has("lazy"), eager: w.has("eager") };
  }), f = _(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), m = re(false), S = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), v = St("validation"), y = _(() => e.name ?? Fe(n));
  Jl(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: y.value, vm: v, validate: I, reset: h, resetValidation: k });
  }), Ht(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, y.value);
  }), Ct(async () => {
    var _a3;
    d.value.lazy || await I(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, c.value);
  }), $t(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    ue(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = ue(() => e.focused, (w) => {
          w || I(), V();
        });
      }
    });
  }), $t(() => d.value.blur, () => {
    ue(() => e.focused, (V) => {
      V || I();
    });
  }), ue([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Ee(), await k();
  }
  async function k() {
    s.value = true, d.value.lazy ? r.value = [] : await I(!d.value.eager);
  }
  async function I() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const w = [];
    m.value = true;
    for (const g of i.value) {
      if (w.length >= Number(e.maxErrors ?? 1)) break;
      const x = await (typeof g == "function" ? g : () => g)(l.value);
      if (x !== true) {
        if (x !== false && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        w.push(x || "");
      }
    }
    return r.value = w, m.value = false, s.value = V, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: m, reset: h, resetValidation: k, validate: I, validationClasses: S };
}
const Sa = H({ id: String, appendIcon: _e, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: _e, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...pe(), ...gt(), ...tn(kt(), ["maxWidth", "minWidth", "width"]), ...Ue(), ...Eh() }, "VInput"), Nt = Q()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = qe(e), { rtlClasses: s } = _t(), { InputIcon: u } = di(e), c = Mt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: m, isDisabled: S, isReadonly: v, isPristine: y, isValid: h, isValidating: k, reset: I, resetValidation: V, validate: w, validationClasses: g } = Mh(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), x = $(() => C.value.length > 0), A = $(() => !e.hideDetails || e.hideDetails === "auto" && (x.value || !!a.details)), P = _(() => A.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: m, isDisabled: S, isReadonly: v, isPristine: y, isValid: h, isValidating: k, hasDetails: A, reset: I, resetValidation: V, validate: w })), D = $(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = $(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return ne(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return b("div", { class: te(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, g.value, e.class]), style: me([i.value, e.style]) }, [T && b("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && p(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && b("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && b("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && p(u, { key: "append-icon", name: "append", color: M.value }, null)]), A.value && b("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [p(Th, { active: x.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: I, resetValidation: V, validate: w, isValid: h, errorMessages: f };
} }), bs = Symbol("Forwarded refs");
function ps(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[bs] = n, new Proxy(e, { get(l, o) {
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
        const s = ps(r.value, o) ?? ("_" in r.value ? ps((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[bs];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = ps(c.value, o);
          if (d) return d;
          const f = c.value && c.value[bs];
          f && u.push(...f);
        }
      }
    }
  } });
}
const G_ = H({ ...Le(Sa(), ["direction"]), ...Le(Ah(), ["inline"]) }, "VCheckbox"), Y_ = Q()({ name: "VCheckbox", inheritAttrs: false, props: G_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), { isFocused: o, focus: i, blur: r } = pa(e), s = X(), u = Mt();
  return ne(() => {
    const [c, d] = qn(n), f = Nt.filterProps(e), m = En.filterProps(e);
    return p(Nt, Y({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: v, messagesId: y, isDisabled: h, isReadonly: k, isValid: I } = S;
      return p(En, Y(m, { id: v.value, "aria-describedby": y.value, disabled: h.value, readonly: k.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function K_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = jo(l, n), i = Bh(l, a, n), r = jo(l, t), s = $h(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function q_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = jo(a, n), o = $h(a, t), i = jo(a, t);
  return o - l / 2 + i / 2;
}
function sv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function X_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function Bh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function jo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function $h(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Ac = Symbol.for("vuetify:v-slide-group"), Tc = H({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Ac }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...pe(), ...gl({ mobile: null }), ...Me(), ...pl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Uo = Q()({ name: "VSlideGroup", props: Tc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = _t(), { displayClasses: l, mobile: o } = on(e), i = Na(e, e.symbol), r = re(false), s = re(0), u = re(0), c = re(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: m } = wn(), { resizeRef: S, contentRect: v } = wn(), y = Jx(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), k = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Je) {
    let W = -1;
    ue(() => [i.selected.value, m.value, v.value, d.value], () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (m.value && v.value) {
          const N = d.value ? "width" : "height";
          u.value = m.value[N], c.value = v.value[N], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && k.value >= 0 && S.el) {
          const N = S.el.children[I.value];
          w(N, e.centerActive);
        }
      });
    });
  }
  const V = re(false);
  function w(W, N) {
    let j = 0;
    N ? j = q_({ containerElement: f.el, isHorizontal: d.value, selectedElement: W }) : j = K_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: W }), g(j);
  }
  function g(W) {
    if (!Je || !f.el) return;
    const N = jo(d.value, f.el), j = Bh(d.value, a.value, f.el);
    if (!(sv(d.value, f.el) <= N || Math.abs(W - j) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: be, offsetWidth: ae } = f.el;
        W = be - ae - W;
      }
      d.value ? y.horizontal(W, h.value) : y(W, h.value);
    }
  }
  function C(W) {
    const { scrollTop: N, scrollLeft: j } = W.target;
    s.value = d.value ? j : N;
  }
  function x(W) {
    if (V.value = true, !(!r.value || !S.el)) {
      for (const N of W.composedPath()) for (const j of S.el.children) if (j === N) {
        w(j);
        return;
      }
    }
  }
  function A(W) {
    V.value = false;
  }
  let P = false;
  function E(W) {
    var _a3;
    !P && !V.value && !(W.relatedTarget && ((_a3 = S.el) == null ? void 0 : _a3.contains(W.relatedTarget))) && L(), P = false;
  }
  function D() {
    P = true;
  }
  function M(W) {
    if (!S.el) return;
    function N(j) {
      W.preventDefault(), L(j);
    }
    d.value ? W.key === "ArrowRight" ? N(a.value ? "prev" : "next") : W.key === "ArrowLeft" && N(a.value ? "next" : "prev") : W.key === "ArrowDown" ? N("next") : W.key === "ArrowUp" && N("prev"), W.key === "Home" ? N("first") : W.key === "End" && N("last");
  }
  function T(W, N) {
    if (!W) return;
    let j = W;
    do
      j = j == null ? void 0 : j[N === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (j == null ? void 0 : j.hasAttribute("disabled"));
    return j;
  }
  function L(W) {
    if (!S.el) return;
    let N;
    if (!W) N = Pa(S.el)[0];
    else if (W === "next") {
      if (N = T(S.el.querySelector(":focus"), W), !N) return L("first");
    } else if (W === "prev") {
      if (N = T(S.el.querySelector(":focus"), W), !N) return L("last");
    } else W === "first" ? (N = S.el.firstElementChild, (N == null ? void 0 : N.hasAttribute("disabled")) && (N = T(N, "next"))) : W === "last" && (N = S.el.lastElementChild, (N == null ? void 0 : N.hasAttribute("disabled")) && (N = T(N, "prev")));
    N && N.focus({ preventScroll: true });
  }
  function z(W) {
    const N = d.value && a.value ? -1 : 1, j = (W === "prev" ? -N : N) * u.value;
    let ie = s.value + j;
    if (d.value && a.value && f.el) {
      const { scrollWidth: be, offsetWidth: ae } = f.el;
      ie += be - ae;
    }
    g(ie);
  }
  const O = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Z = _(() => r.value || Math.abs(s.value) > 0), J = _(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !o.value;
      case true:
        return Z.value;
      case "mobile":
        return o.value || Z.value;
      default:
        return !o.value && Z.value;
    }
  }), F = _(() => Math.abs(s.value) > 1), G = _(() => {
    if (!f.value || !Z.value) return false;
    const W = sv(d.value, f.el), N = X_(d.value, f.el);
    return W - N - Math.abs(s.value) > 1;
  });
  return ne(() => p(e.tag, { class: te(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": J.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: me(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [J.value && b("div", { key: "prev", class: te(["v-slide-group__prev", { "v-slide-group__prev--disabled": !F.value }]), onMousedown: D, onClick: () => F.value && z("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, O.value)) ?? p(Ho, null, { default: () => [p(Ye, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), b("div", { key: "container", ref: f, class: te(["v-slide-group__container", e.contentClass]), onScroll: C }, [b("div", { ref: S, class: "v-slide-group__content", onFocusin: x, onFocusout: A, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, O.value)])]), J.value && b("div", { key: "next", class: te(["v-slide-group__next", { "v-slide-group__next--disabled": !G.value }]), onMousedown: D, onClick: () => G.value && z("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, O.value)) ?? p(Ho, null, { default: () => [p(Ye, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: z, scrollOffset: s, focus: L, hasPrev: F, hasNext: G };
} }), Rh = Symbol.for("vuetify:v-chip-group"), Z_ = H({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...Tc({ scrollToActive: false }), ...pe(), ...pl({ selectedClass: "v-chip--selected" }), ...Me(), ...Ue(), ...bn({ variant: "tonal" }) }, "VChipGroup"), J_ = Q()({ name: "VChipGroup", props: Z_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Rh);
  return mt({ VChip: { baseColor: $(() => e.baseColor), color: $(() => e.color), disabled: $(() => e.disabled), filter: $(() => e.filter), variant: $(() => e.variant) } }), ne(() => {
    const u = Uo.filterProps(e);
    return p(Uo, Y(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), Q_ = H({ activeClass: String, appendAvatar: String, appendIcon: _e, baseColor: String, closable: Boolean, closeIcon: { type: _e, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: _e, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...zt(), ...pe(), ...gt(), ...xt(), ...Sl(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "span" }), ...Ue(), ...bn({ variant: "tonal" }) }, "VChip"), fa = Q()({ name: "VChip", directives: { vRipple: Rt }, props: Q_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { borderClasses: i } = Xt(e), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { sizeClasses: c } = Ql(e), { themeClasses: d } = qe(e), f = we(e, "modelValue"), m = Ma(e, Rh, false), S = Ma(e, Ac, false), v = ui(e, n), y = $(() => e.link !== false && v.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!m || e.link || v.isClickable.value)), k = $(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(x) {
    x.preventDefault(), x.stopPropagation(), f.value = false, a("click:close", x);
  } }));
  ue(f, (x) => {
    x ? (m == null ? void 0 : m.register(), S == null ? void 0 : S.register()) : (m == null ? void 0 : m.unregister(), S == null ? void 0 : S.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: w } = ba(() => ({ color: !m || m.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function g(x) {
    var _a3, _b2;
    a("click", x), h.value && ((_b2 = (_a3 = v.navigate).value) == null ? void 0 : _b2.call(_a3, x), m == null ? void 0 : m.toggle());
  }
  function C(x) {
    (x.key === "Enter" || x.key === " ") && (x.preventDefault(), g(x));
  }
  return () => {
    var _a3;
    const x = v.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), P = !!(A || l.append), E = !!(l.close || e.closable), D = !!(l.filter || e.filter) && m, M = !!(e.prependIcon || e.prependAvatar), T = !!(M || l.prepend);
    return f.value && at(p(x, Y(v.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = v.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, w.value, m == null ? void 0 : m.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !y.value && C }), { default: () => {
      var _a4;
      return [ya(h.value, "v-chip"), D && p(_c, { key: "filter" }, { default: () => [at(b("div", { class: "v-chip__filter" }, [l.filter ? p(Be, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : p(Ye, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Mn, m.isSelected.value]])] }), T && b("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? p(Be, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : b(he, null, [e.prependIcon && p(Ye, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && p(hn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), b("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: m == null ? void 0 : m.isSelected.value, selectedClass: m == null ? void 0 : m.selectedClass.value, select: m == null ? void 0 : m.select, toggle: m == null ? void 0 : m.toggle, value: m == null ? void 0 : m.value.value, disabled: e.disabled })) ?? Ie(e.text)]), P && b("div", { key: "append", class: "v-chip__append" }, [l.append ? p(Be, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : b(he, null, [e.appendIcon && p(Ye, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && b("button", Y({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, k.value), [l.close ? p(Be, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : p(Ye, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Rt, h.value && e.ripple, null]]);
  };
} }), eV = ["dotted", "dashed", "solid", "double"], tV = H({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => eV.includes(e) }, ...pe(), ...Ue() }, "VDivider"), mn = Q()({ name: "VDivider", props: tV(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { textColorClasses: o, textColorStyles: i } = Et(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), s = $(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return ne(() => {
    const u = b("hr", { class: te([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: me([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? b("div", { class: te(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, b("div", { class: "v-divider__content", style: me(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), iu = Symbol.for("vuetify:list");
function Lh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = We(iu, { filterable: false, hasPrepend: re(false), updateHasPrepend: () => null, trackingIndex: re(-1), navigationStrategy: re("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Mt() } = e, i = { filterable: t.filterable || n, hasPrepend: re(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return rt(iu, i), t;
}
function Fh() {
  return We(iu, null);
}
const Dc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = De(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ot(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Oh = (e) => {
  const t = Dc(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = De(o);
    const r = l.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
    return t.activate({ ...i, id: o, activated: r });
  }, in: (a, l, o) => {
    let i = /* @__PURE__ */ new Set();
    if (a != null) {
      const r = ot(a);
      r.length && (i = t.in(r.slice(0, 1), l, o));
    }
    return i;
  }, out: (a, l, o) => t.out(a, l, o) };
}, nV = (e) => {
  const t = Dc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, aV = (e) => {
  const t = Oh(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, lV = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, Nh = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, oV = { open: Nh.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Ec = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = De(a), e && !l) {
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
}, Hh = (e) => {
  const t = Ec(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = De(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, iV = (e) => {
  const t = Ec(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, rV = (e) => {
  const t = Hh(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Mc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = De(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(De(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = De(r.get(a));
    for (; d; ) {
      let f = true, m = true;
      for (const S of i.get(d)) {
        const v = De(S);
        if (!s.has(v) && (o.get(v) !== "on" && (f = false), o.has(v) && o.get(v) !== "off" && (m = false), !f && !m)) break;
      }
      o.set(d, f ? "on" : m ? "off" : "indeterminate"), d = De(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((m, S) => {
      let [v, y] = S;
      return y === "on" && m.push(v), m;
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
}, sV = (e) => {
  const t = Mc(e);
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
}, uV = (e) => {
  const n = { select: Mc(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Yl = Symbol.for("vuetify:nested"), zh = { id: re(), root: { itemsRegistration: X("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: X(/* @__PURE__ */ new Map()), parents: X(/* @__PURE__ */ new Map()), disabled: X(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: X(false), scrollToActive: X(false), selectable: X(false), opened: X(/* @__PURE__ */ new Set()), activated: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]), getPath: () => [] } }, cV = H({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), dV = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = re(/* @__PURE__ */ new Map()), r = re(/* @__PURE__ */ new Map()), s = re(/* @__PURE__ */ new Set()), u = we(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((g) => De(g)) : w), (w) => [...w.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return nV(e.mandatory);
      case "single-leaf":
        return aV(e.mandatory);
      case "independent":
        return Dc(e.mandatory);
      case "single-independent":
      default:
        return Oh(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return rV(e.mandatory);
      case "leaf":
        return iV(e.mandatory);
      case "independent":
        return Ec(e.mandatory);
      case "single-independent":
        return Hh(e.mandatory);
      case "trunk":
        return sV(e.mandatory);
      case "branch":
        return uV(e.mandatory);
      case "classic":
      default:
        return Mc(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return oV;
      case "single":
        return lV;
      case "multiple":
      default:
        return Nh;
    }
  }), m = we(e, "activated", e.activated, (w) => c.value.in(w, i.value, r.value), (w) => c.value.out(w, i.value, r.value)), S = we(e, "selected", e.selected, (w) => d.value.in(w, i.value, r.value, s.value), (w) => d.value.out(w, i.value, r.value));
  Ht(() => {
    o = true;
  });
  function v(w) {
    const g = [];
    let C = De(w);
    for (; C !== void 0; ) g.unshift(C), C = r.value.get(C);
    return g;
  }
  const y = St("nested"), h = /* @__PURE__ */ new Set(), k = X0(() => {
    Ee(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  ue(() => [n.value, nt(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const w = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), x = nt(a) ? (E) => De(E.raw) : (E) => E.value, A = [...n.value];
    let P = 0;
    for (; P < A.length; ) {
      const E = A[P++], D = x(E);
      if (E.children) {
        const M = [];
        for (const T of E.children) {
          const L = x(T);
          w.set(L, D), M.push(L), A.push(T);
        }
        g.set(D, M);
      }
      E.props.disabled && C.add(D);
    }
    i.value = g, r.value = w, s.value = C;
  }
  const V = { id: re(), root: { opened: u, activatable: $(() => e.activatable), scrollToActive: $(() => nt(l)), selectable: $(() => e.selectable), activated: m, selected: S, selectedValues: _(() => {
    const w = [];
    for (const [g, C] of S.value.entries()) C === "on" && w.push(g);
    return w;
  }), itemsRegistration: $(() => e.itemsRegistration), register: (w, g, C, x) => {
    if (h.has(w)) {
      v(w).map(String).join(" -> "), v(g).concat(w).map(String).join(" -> ");
      return;
    } else h.add(w);
    g && w !== g && r.value.set(w, g), C && s.value.add(w), x && i.value.set(w, []), g != null && i.value.set(g, [...i.value.get(g) || [], w]), k();
  }, unregister: (w) => {
    if (o) return;
    h.delete(w), i.value.delete(w), s.value.delete(w);
    const g = r.value.get(w);
    if (g) {
      const C = i.value.get(g) ?? [];
      i.value.set(g, C.filter((x) => x !== w));
    }
    r.value.delete(w), k();
  }, updateDisabled: (w, g) => {
    g ? s.value.add(w) : s.value.delete(w);
  }, open: (w, g, C) => {
    y.emit("click:open", { id: w, value: g, path: v(w), event: C });
    const x = f.value.open({ id: w, value: g, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, openOnSelect: (w, g, C) => {
    const x = f.value.select({ id: w, value: g, selected: new Map(S.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, select: (w, g, C) => {
    y.emit("click:select", { id: w, value: g, path: v(w), event: C });
    const x = d.value.select({ id: w, value: g, selected: new Map(S.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    x && (S.value = x), V.root.openOnSelect(w, g, C);
  }, activate: (w, g, C) => {
    if (!e.activatable) return V.root.select(w, true, C);
    y.emit("click:activate", { id: w, value: g, path: v(w), event: C });
    const x = c.value.activate({ id: w, value: g, activated: new Set(m.value), children: i.value, parents: r.value, event: C });
    if (x.size !== m.value.size) m.value = x;
    else {
      for (const A of x) if (!m.value.has(A)) {
        m.value = x;
        return;
      }
      for (const A of m.value) if (!x.has(A)) {
        m.value = x;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: v } };
  return rt(Yl, V), V.root;
}, Wh = (e, t, n) => {
  const a = We(Yl, zh), l = Symbol("nested item"), o = _(() => {
    const r = De(nt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Jl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ee(() => {
      a.root.register(o.value, a.id.value, nt(t), n);
    });
  }), Ht(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), ue(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ee(() => {
      a.root.register(r, a.id.value, nt(t), n);
    }));
  }), ue(() => nt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && rt(Yl, i), i;
}, fV = () => {
  const e = We(Yl, zh);
  rt(Yl, { ...e, isGroupActivator: true });
}, vV = qt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return fV(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), jh = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: _e, default: "$collapse" }, disabled: Boolean, expandIcon: { type: _e, default: "$expand" }, rawId: [String, Number], prependIcon: _e, appendIcon: _e, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...pe(), ...Me() }, "VListGroup"), Go = Q()({ name: "VListGroup", props: jh(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Wh(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Fh(), { isBooted: s } = bl(), u = We(Yl), c = $(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(v) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = v.target) == null ? void 0 : _a3.tagName) || l(!a.value, v);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), m = _(() => a.value ? e.collapseIcon : e.expandIcon), S = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return ne(() => p(e.tag, { class: te(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: me(e.style) }, { default: () => [n.activator && p(Be, { defaults: S.value }, { default: () => [p(vV, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), p(Kt, { transition: { component: Cr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? at(b("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Mn, a.value]]) : a.value && b("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), mV = H({ opacity: [Number, String], ...pe(), ...Me() }, "VListItemSubtitle"), Uh = Q()({ name: "VListItemSubtitle", props: mV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(e.tag, { class: te(["v-list-item-subtitle", e.class]), style: me([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Gh = ga("v-list-item-title"), Yh = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: _e, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VListItem"), xn = Q()({ name: "VListItem", directives: { vRipple: Rt }, props: Yh(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = X(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: m, isGroupActivator: S, root: v, parent: y, openOnSelect: h, scrollToActive: k, id: I } = Wh(r, () => e.disabled, false), V = Fh(), w = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (v.activatable.value ? u.value : f.value));
  }), g = $(() => e.link !== false && o.isLink.value), C = _(() => !!V && (v.selectable.value || v.activatable.value || e.value != null)), x = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return v.activatable.value ? u.value : v.selectable.value ? f.value : w.value;
  }), D = $(() => e.rounded || e.nav), M = $(() => e.color ?? e.activeColor), T = $(() => ({ color: w.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ue(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (xe) => {
    xe && L();
  }), ue(u, (xe) => {
    var _a3;
    !xe || !k || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ue(A, (xe) => {
    var _a3;
    xe && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Jl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ee(() => L());
  });
  function L() {
    y.value != null && v.open(y.value, true), h(true);
  }
  const { themeClasses: z } = qe(e), { borderClasses: O } = Xt(e), { colorClasses: Z, colorStyles: J, variantClasses: F } = ba(T), { densityClasses: G } = Lt(e), { dimensionStyles: W } = wt(e), { elevationClasses: N } = It(e), { roundedClasses: j } = dt(D), ie = $(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), be = $(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), ae = _(() => ({ isActive: w.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function de(xe) {
    var _a3, _b2, _c2;
    l("click", xe), !["INPUT", "TEXTAREA"].includes((_a3 = xe.target) == null ? void 0 : _a3.tagName) && x.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, xe), !S && (v.activatable.value ? s(!u.value, xe) : (v.selectable.value || e.value != null && !g.value) && c(!f.value, xe)));
  }
  function Pe(xe) {
    const ge = xe.target;
    ["INPUT", "TEXTAREA"].includes(ge.tagName) || (xe.key === "Enter" || xe.key === " " && !(V == null ? void 0 : V.filterable)) && (xe.preventDefault(), xe.stopPropagation(), xe.target.dispatchEvent(new MouseEvent("click", xe)));
  }
  return ne(() => {
    const xe = g.value ? "a" : e.tag, ge = a.title || e.title != null, R = a.subtitle || e.subtitle != null, K = !!(!!(e.appendAvatar || e.appendIcon) || a.append), le = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(le), e.activeColor && wg("active-color", ["color", "base-color"]), at(p(xe, Y(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": w.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !le && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && w.value }, z.value, O.value, Z.value, G.value, N.value, ie.value, j.value, F.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, J.value, W.value, e.style], tabindex: e.tabindex ?? (x.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: de, onKeydown: x.value && !g.value && Pe }), { default: () => {
      var _a3;
      return [ya(x.value || w.value, "v-list-item"), le && b("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, ae.value)];
      } }) : b(he, null, [e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), b("div", { class: "v-list-item__spacer" }, null)]), b("div", { class: "v-list-item__content", "data-no-activator": "" }, [ge && p(Gh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Ie(e.title)];
      } }), R && p(Uh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Ie(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, ae.value)]), K && b("div", { key: "append", class: "v-list-item__append" }, [a.append ? p(Be, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, ae.value)];
      } }) : b(he, null, [e.appendIcon && p(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), b("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Rt, x.value && be.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: S, isSelected: f, list: V, select: c, root: v, id: I, link: o };
} }), gV = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...pe(), ...Me() }, "VListSubheader"), lo = Q()({ name: "VListSubheader", props: gV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color);
  return ne(() => {
    const o = !!(n.default || e.title);
    return p(e.tag, { class: te(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: me([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && b("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), hV = H({ items: Array, returnObject: Boolean }, "VListChildren"), Kh = Q()({ name: "VListChildren", props: hV(), setup(e, t) {
  let { slots: n } = t;
  return Lh(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? p(mn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? p(lo, i, null);
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
      } : void 0 }, c = Go.filterProps(i);
      return o ? p(Go, Y(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const m = Y(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: m }) : p(xn, Y(m, { index: l }), u);
      }, default: () => p(Kh, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : p(xn, Y(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), qh = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), yV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function _n(e, t) {
  const n = pt(t, e.itemTitle, t), a = pt(t, e.itemValue, n), l = pt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Le(t, ["children"]) : t : void 0 : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  yV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Xh(e, l) : void 0, raw: t };
}
_n.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Xh(e, t) {
  const n = tn(e, _n.neededProps), a = [];
  for (const l of t) a.push(_n(n, l));
  return a;
}
function Bc(e) {
  const t = _(() => Xh(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = re(/* @__PURE__ */ new Map()), l = re([]);
  ct(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (Ea(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, m = !!e.valueComparator, S = e.valueComparator || Dt, v = tn(e, _n.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(_n(v, h));
        continue;
      }
      const k = s.get(h);
      if (m || !k) {
        for (const I of m ? u : c) if (S(h, I.value)) {
          y.push(I);
          continue e;
        }
        y.push(_n(v, h));
        continue;
      }
      y.push(...k);
    }
    return y;
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
const bV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function pV(e, t) {
  const n = Ea(t) ? t : pt(t, e.itemTitle), a = Ea(t) ? t : pt(t, e.itemValue, void 0), l = pt(t, e.itemChildren), o = e.itemProps === true ? Le(t, ["children"]) : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  bV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Zh(e, l) : void 0, raw: t };
}
function Zh(e, t) {
  const n = [];
  for (const a of t) n.push(pV(e, a));
  return n;
}
function Jh(e) {
  return { items: _(() => Zh(e, e.items)) };
}
const Qh = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: _e, collapseIcon: _e, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...cV({ selectStrategy: "single-leaf", openStrategy: "list" }), ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...qh(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VList"), Kl = Q()({ name: "VList", props: Qh(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = Jh(e), { themeClasses: i } = qe(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { borderClasses: u } = Xt(e), { densityClasses: c } = Lt(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: m } = dt(e), { children: S, open: v, parents: y, select: h, getPath: k } = dV(e, { items: o, returnObject: $(() => e.returnObject), scrollToActive: $(() => e.navigationStrategy === "track") }), I = $(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = $(() => e.activeColor), w = $(() => e.baseColor), g = $(() => e.color), C = $(() => e.selectable || e.activatable), x = we(e, "navigationIndex", -1, (G) => G ?? -1), A = Mt();
  Lh({ filterable: e.filterable, trackingIndex: x, navigationStrategy: $(() => e.navigationStrategy), uid: A }), ue(o, () => {
    e.navigationStrategy === "track" && (x.value = -1);
  }), mt({ VListGroup: { activeColor: V, baseColor: w, color: g, expandIcon: $(() => e.expandIcon), collapseIcon: $(() => e.collapseIcon) }, VListItem: { activeClass: $(() => e.activeClass), activeColor: V, baseColor: w, color: g, density: $(() => e.density), disabled: $(() => e.disabled), lines: $(() => e.lines), nav: $(() => e.nav), slim: $(() => e.slim), variant: $(() => e.variant), tabindex: $(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = re(false), E = X();
  function D(G) {
    P.value = true;
  }
  function M(G) {
    P.value = false;
  }
  function T(G) {
    var _a3;
    e.navigationStrategy === "track" ? ~x.value || (x.value = O("first")) : !P.value && !(G.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(G.relatedTarget))) && F();
  }
  function L() {
    e.navigationStrategy === "track" && (x.value = -1);
  }
  function z(G) {
    switch (G) {
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
  function O(G) {
    const W = o.value.length;
    if (W === 0) return -1;
    let N;
    G === "first" ? N = 0 : G === "last" ? N = W - 1 : (N = x.value + (G === "next" ? 1 : -1), N < 0 && (N = W - 1), N >= W && (N = 0));
    const j = N;
    let ie = 0;
    for (; ie < W; ) {
      const be = o.value[N];
      if (be && be.type !== "divider" && be.type !== "subheader") return N;
      if (N += G === "next" || G === "first" ? 1 : -1, N < 0 && (N = W - 1), N >= W && (N = 0), N === j) return -1;
      ie++;
    }
    return -1;
  }
  function Z(G) {
    const W = G.target;
    if (!E.value || W.tagName === "INPUT" && ["Home", "End"].includes(G.key) || W.tagName === "TEXTAREA") return;
    const N = z(G.key);
    if (N !== null) if (G.preventDefault(), e.navigationStrategy === "track") {
      const j = O(N);
      j !== -1 && (x.value = j);
    } else F(N);
  }
  function J(G) {
    P.value = true;
  }
  function F(G) {
    if (E.value) return Qa(E.value, G);
  }
  return ne(() => {
    const G = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), W = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return p(e.tag, { ref: E, class: te(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, m.value, e.class]), style: me([{ "--v-list-indent": ve(G), "--v-list-group-prepend": G ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && x.value >= 0 ? `v-list-item-${A}-${x.value}` : void 0, "aria-multiselectable": W, onFocusin: D, onFocusout: M, onFocus: T, onBlur: L, onKeydown: Z, onMousedown: J }, { default: () => [p(Kh, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: v, select: h, focus: F, children: S, parents: y, getPath: k, navigationIndex: x };
} }), SV = ga("v-list-img"), kV = H({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemAction"), $c = Q()({ name: "VListItemAction", props: kV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(e.tag, { class: te(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} }), wV = H({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemMedia"), xV = Q()({ name: "VListItemMedia", props: wV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(e.tag, { class: te(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} });
function Ss(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function CV(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function uv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Ss({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Ss({ x: l, y: o }, t);
  }
  return Ss({ x: t.width / 2, y: t.height / 2 }, t);
}
const ey = { static: IV, connected: AV }, _V = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ey }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function VV(e, t) {
  const n = X({}), a = X();
  Je && $t(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    ue(() => e.locationStrategy, r), bt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = ey[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function IV() {
}
function PV(e, t) {
  const n = cc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function AV(e, t, n) {
  (Array.isArray(e.target.value) || q0(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = uc(() => {
    const h = Us(t.location, e.isRtl.value), k = t.origin === "overlap" ? h : t.origin === "auto" ? fs(h) : Us(t.origin, e.isRtl.value);
    return h.side === k.side && h.align === vs(k).align ? { preferredAnchor: Vf(h), preferredOrigin: Vf(k) } : { preferredAnchor: h, preferredOrigin: k };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => _(() => {
    const k = parseFloat(t[h]);
    return isNaN(k) ? 1 / 0 : k;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const m = new Ag(4), S = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((k) => {
      k !== f && m.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), m.isFull) {
      const k = m.values();
      if (Dt(k.at(-1), k.at(-3)) && !Dt(k.at(-1), k.at(-2))) return;
    }
    const h = y();
    h && m.push(h.flipped);
  });
  let v = new kn({ x: 0, y: 0, width: 0, height: 0 });
  ue(e.target, (h, k) => {
    k && !Array.isArray(k) && S.unobserve(k), Array.isArray(h) ? Dt(h, k) || y() : h && S.observe(h);
  }, { immediate: true }), ue(e.contentEl, (h, k) => {
    k && S.unobserve(k), h && S.observe(h);
  }, { immediate: true }), bt(() => {
    S.disconnect();
  });
  function y() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (v = Mg(e.target.value));
    const h = PV(e.contentEl.value, e.isRtl.value), k = qi(e.contentEl.value), I = Number(t.viewportMargin);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = k.reduce((M, T) => {
      const L = h0(T);
      return M ? new kn({ x: Math.max(M.left, L.left), y: Math.max(M.top, L.top), width: Math.min(M.right, L.right) - Math.max(M.left, L.left), height: Math.min(M.bottom, L.bottom) - Math.max(M.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, v.x), V.y += Math.min(I, v.y), V.width = Math.max(V.width - I * 2, v.x + v.width - I), V.height = Math.max(V.height - I * 2, v.y + v.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let w = { anchor: l.value, origin: o.value };
    function g(M) {
      const T = new kn(h), L = uv(M.anchor, v), z = uv(M.origin, T);
      let { x: O, y: Z } = CV(L, z);
      switch (M.anchor.side) {
        case "top":
          Z -= c.value[0];
          break;
        case "bottom":
          Z += c.value[0];
          break;
        case "left":
          O -= c.value[0];
          break;
        case "right":
          O += c.value[0];
          break;
      }
      switch (M.anchor.align) {
        case "top":
          Z -= c.value[1];
          break;
        case "bottom":
          Z += c.value[1];
          break;
        case "left":
          O -= c.value[1];
          break;
        case "right":
          O += c.value[1];
          break;
      }
      return T.x += O, T.y += Z, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), { overflows: Pf(T, V), x: O, y: Z };
    }
    let C = 0, x = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: T, overflows: L } = g(w);
      C += M, x += T, h.x += M, h.y += T;
      {
        const z = If(w.anchor), O = L.x.before || L.x.after, Z = L.y.before || L.y.after;
        let J = false;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && O && !P.x || F === "y" && Z && !P.y) {
            const G = { anchor: { ...w.anchor }, origin: { ...w.origin } }, W = F === "x" ? z === "y" ? vs : fs : z === "y" ? fs : vs;
            G.anchor = W(G.anchor), G.origin = W(G.origin);
            const { overflows: N } = g(G);
            (N[F].before <= L[F].before && N[F].after <= L[F].after || N[F].before + N[F].after < (L[F].before + L[F].after) / 2) && (w = G, J = P[F] = true);
          }
        }), J) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (x += L.y.before, h.y += L.y.before), L.y.after && (x -= L.y.after, h.y -= L.y.after);
      {
        const z = Pf(h, V);
        A.x = V.width - z.x.before - z.x.after, A.y = V.height - z.y.before - z.y.after, C += z.x.before, h.x += z.x.before, x += z.y.before, h.y += z.y.before;
      }
      break;
    }
    const D = If(w.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`, transformOrigin: `${w.origin.side} ${w.origin.align}`, top: ve(ks(x)), left: e.isRtl.value ? void 0 : ve(ks(C)), right: e.isRtl.value ? ve(ks(-C)) : void 0, minWidth: ve(D === "y" ? Math.min(i.value, v.width) : i.value), maxWidth: ve(cv(Ze(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ve(cv(Ze(A.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: A, contentBox: h, flipped: P };
  }
  return ue(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ee(() => {
    const h = y();
    if (!h) return;
    const { available: k, contentBox: I } = h;
    I.height > k.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), { updateLocation: y };
}
function ks(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function cv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let ru = true;
const er = [];
function TV(e) {
  !ru || er.length ? (er.push(e), su()) : (ru = false, e(), su());
}
let dv = -1;
function su() {
  cancelAnimationFrame(dv), dv = requestAnimationFrame(() => {
    const e = er.shift();
    e && e(), er.length ? su() : ru = true;
  });
}
const ty = { none: null, close: MV, block: BV, reposition: $V }, DV = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ty } }, "VOverlay-scroll-strategies");
function EV(e, t) {
  if (!Je) return;
  let n;
  ct(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Nl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = ty[e.scrollStrategy]) == null ? void 0 : _a3.call(ty, t, e, n);
    }));
  }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function MV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  ny(Rc(e.target.value, e.contentEl.value), t);
}
function BV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Rc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...qi(a, t.contained ? n : void 0), ...qi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => mc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ve(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ve(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ve(o)), r.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function $V(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    TV(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      ny(Rc(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), bt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function Rc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function ny(e, t) {
  const n = [document, ...qi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), bt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const uu = Symbol.for("vuetify:v-menu"), Lc = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Fc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = c0(u, () => {
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
const RV = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Lc() }, "VOverlay-activator");
function LV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = St("useActivator"), i = X();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: m } = Fc(e, (x) => {
    x === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== x && (u = true), n.value = x);
  }), S = X(), v = { onClick: (x) => {
    x.stopPropagation(), i.value = x.currentTarget || x.target, n.value || (S.value = [x.clientX, x.clientY]), n.value = !n.value;
  }, onMouseenter: (x) => {
    r = true, i.value = x.currentTarget || x.target, f();
  }, onMouseleave: (x) => {
    r = false, m();
  }, onFocus: (x) => {
    Wl(x.target, ":focus-visible") !== false && (s = true, x.stopPropagation(), i.value = x.currentTarget || x.target, f());
  }, onBlur: (x) => {
    s = false, x.stopPropagation(), m({ minDelay: 1 });
  } }, y = _(() => {
    const x = {};
    return d.value && (x.onClick = v.onClick), e.openOnHover && (x.onMouseenter = v.onMouseenter, x.onMouseleave = v.onMouseleave), c.value && (x.onFocus = v.onFocus, x.onBlur = v.onBlur), x;
  }), h = _(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      r = true, f();
    }, x.onMouseleave = () => {
      r = false, m();
    }), c.value && (x.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (s = true, f());
    }, x.onFocusout = () => {
      s = false, m({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const A = We(uu, null);
      x.onClick = () => {
        n.value = false, A == null ? void 0 : A.closeParents();
      };
    }
    return x;
  }), k = _(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, x.onMouseleave = () => {
      r = false, m();
    }), x;
  });
  ue(a, (x) => {
    var _a3;
    x && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), ue(n, (x) => {
    x || setTimeout(() => {
      S.value = void 0;
    });
  }, { flush: "post" });
  const I = $o();
  ct(() => {
    I.value && Ee(() => {
      i.value = I.el;
    });
  });
  const V = $o(), w = _(() => e.target === "cursor" && S.value ? S.value : V.value ? V.el : ay(e.target, o) || i.value), g = _(() => Array.isArray(w.value) ? void 0 : w.value);
  let C;
  return ue(() => !!e.activator, (x) => {
    x && Je ? (C = Nl(), C.run(() => {
      FV(e, o, { activatorEl: i, activatorEvents: y });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), bt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: w, targetEl: g, targetRef: V, activatorEvents: y, contentEvents: h, scrimEvents: k };
}
function FV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ue(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Ee(() => o());
  }, { immediate: true }), ue(() => e.activatorProps, () => {
    o();
  }), bt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && y0(s, Y(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && b0(s, Y(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = ay(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function ay(e, t) {
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
const ly = H({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Bi = /* @__PURE__ */ new Map();
let fv = 0;
function vv(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Bi.values()).filter((u) => {
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
  const o = Pa(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function oy(e, t) {
  let { isActive: n, localTop: a, activatorEl: l, contentEl: o } = t;
  const i = Symbol("trap");
  let r = false, s = -1;
  async function u() {
    r = true, s = window.setTimeout(() => {
      r = false;
    }, 100);
  }
  async function c(m) {
    var _a3;
    const S = m.relatedTarget, v = m.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Ee(), n.value && !r && S !== v && o.value && nt(a) && ![document, o.value].includes(v) && !o.value.contains(v) && ((_a3 = Pa(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(m) {
    if (m.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && m.target && !o.value.contains(m.target))) {
      const S = Pa(document.documentElement);
      if (m.shiftKey && m.target === S.at(0) || !m.shiftKey && m.target === S.at(-1)) {
        const v = Pa(o.value);
        v.length > 0 && (m.preventDefault(), v[0].focus());
      }
    }
  }
  const f = $(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Je && (ue(() => e.retainFocus, (m) => {
    m ? Bi.set(i, { isActive: n, contentEl: o }) : Bi.delete(i);
  }, { immediate: true }), ue(f, (m) => {
    m ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), fv++ < 1 && document.addEventListener("keydown", vv)), bt(() => {
    Bi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --fv < 1 && document.removeEventListener("keydown", vv);
  });
}
function iy() {
  if (!Je) return re(false);
  const { ssr: e } = on();
  if (e) {
    const t = re(false);
    return Ct(() => {
      t.value = true;
    }), t;
  } else return re(true);
}
const Oc = H({ eager: Boolean }, "lazy");
function Nc(e, t) {
  const n = re(false), a = $(() => n.value || e.eager || t.value);
  ue(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function kl() {
  const t = St("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const mv = Symbol.for("vuetify:stack"), uo = Tt([]);
function OV(e, t, n) {
  const a = St("useStack"), l = !n, o = We(mv, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  rt(mv, i);
  const r = re(Number(nt(t)));
  $t(e, () => {
    var _a3;
    const c = (_a3 = uo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(nt(t)), l && uo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), bt(() => {
      if (l) {
        const d = De(uo).findIndex((f) => f[0] === a.uid);
        uo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = re(true);
  return l && ct(() => {
    var _a3;
    const c = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: al(s), localTop: $(() => !i.activeChildren.size), stackStyles: $(() => ({ zIndex: r.value })) };
}
function NV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !Je) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function HV() {
  return true;
}
function ry(e, t, n) {
  if (!e || sy(e, n) === false) return false;
  const a = Wg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function sy(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || HV)(e);
}
function zV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && ry(e, t, n) && setTimeout(() => {
    sy(e, n) && a && a(e);
  }, 0);
}
function gv(e, t) {
  const n = Wg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const cu = { mounted(e, t) {
  const n = (l) => zV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = ry(l, e, t);
  };
  gv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (gv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function WV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return p(Da, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && b("div", Y({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...RV(), ...pe(), ...kt(), ...Oc(), ..._V(), ...DV(), ...ly(), ...Ue(), ...ha() }, "VOverlay"), Gn = Q()({ name: "VOverlay", directives: { vClickOutside: cu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Le(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = St("VOverlay"), i = X(), r = X(), s = X(), u = we(e, "modelValue"), c = _({ get: () => u.value, set: (ae) => {
    ae && e.disabled || (u.value = ae);
  } }), { themeClasses: d } = qe(e), { rtlClasses: f, isRtl: m } = _t(), { hasContent: S, onAfterLeave: v } = Nc(e, c), y = Xe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: k, stackStyles: I } = OV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: w, target: g, targetEl: C, targetRef: x, activatorEvents: A, contentEvents: P, scrimEvents: E } = LV(e, { isActive: c, isTop: k, contentEl: s }), { teleportTarget: D } = NV(() => {
    var _a3, _b2, _c2;
    const ae = e.attach || e.contained;
    if (ae) return ae;
    const de = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return de instanceof ShadowRoot ? de : false;
  }), { dimensionStyles: M } = wt(e), T = iy(), { scopeId: L } = kl();
  ue(() => e.disabled, (ae) => {
    ae && (c.value = false);
  });
  const { contentStyles: z, updateLocation: O } = VV(e, { isRtl: m, contentEl: s, target: g, isActive: c });
  EV(e, { root: i, contentEl: s, targetEl: C, target: g, isActive: c, updateLocation: O });
  function Z(ae) {
    l("click:outside", ae), e.persistent ? j() : c.value = false;
  }
  function J(ae) {
    return c.value && k.value && (!e.scrim || ae.target === r.value || ae instanceof MouseEvent && ae.shadowTarget === r.value);
  }
  oy(e, { isActive: c, localTop: k, contentEl: s, activatorEl: V }), Je && ue(c, (ae) => {
    ae ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: true }), Ht(() => {
    Je && window.removeEventListener("keydown", F);
  });
  function F(ae) {
    var _a3, _b2, _c2;
    ae.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", ae), e.persistent ? j() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function G(ae) {
    ae.key === "Escape" && !h.value || l("keydown", ae);
  }
  const W = hh();
  $t(() => e.closeOnBack, () => {
    x_(W, (ae) => {
      h.value && c.value ? (ae(false), e.persistent ? j() : c.value = false) : ae();
    });
  });
  const N = X();
  ue(() => c.value && (e.absolute || e.contained) && D.value == null, (ae) => {
    if (ae) {
      const de = pr(i.value);
      de && de !== document.scrollingElement && (N.value = de.scrollTop);
    }
  });
  function j() {
    e.noClickAnimation || s.value && aa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ro });
  }
  function ie() {
    l("afterEnter");
  }
  function be() {
    v(), l("afterLeave");
  }
  return ne(() => {
    var _a3;
    return b(he, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: x, props: Y({ ref: w }, A.value, e.activatorProps) }), T.value && S.value && p(gS, { disabled: !D.value, to: D.value }, { default: () => [b("div", Y({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: ve(N.value) }, e.style], ref: i, onKeydown: G }, L, a), [p(WV, Y({ color: y, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), p(Kt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: ie, onAfterLeave: be }, { default: () => {
      var _a4;
      return [at(b("div", Y({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, z.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Mn, c.value], [cu, { handler: Z, closeConditional: J, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: j, contentEl: s, rootEl: i, globalTop: h, localTop: k, updateLocation: O };
} }), uy = H({ id: String, submenu: Boolean, ...Le(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: xr } }), ["absolute"]) }, "VMenu"), ql = Q()({ name: "VMenu", props: uy(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), { isRtl: o } = _t(), i = Mt(), r = $(() => e.id || `v-menu-${i}`), s = X(), u = We(uu, null), c = re(/* @__PURE__ */ new Set());
  rt(uu, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(v) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (v == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !d0(v, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Ht(() => u == null ? void 0 : u.unregister()), Xu(() => a.value = false), ue(a, (v) => {
    v ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(v) {
    u == null ? void 0 : u.closeParents(v);
  }
  function f(v) {
    var _a3, _b2, _c2, _d2, _e2;
    if (!e.disabled) if (v.key === "Tab" || v.key === "Enter" && !e.closeOnContentClick) {
      if (v.key === "Enter" && (v.target instanceof HTMLTextAreaElement || v.target instanceof HTMLInputElement && v.target.closest("form"))) return;
      v.key === "Enter" && v.preventDefault(), !Dg(Pa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), v.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && v.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e2 = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e2.focus());
  }
  function m(v) {
    var _a3;
    if (e.disabled) return;
    const y = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    y && a.value ? v.key === "ArrowDown" ? (v.preventDefault(), v.stopImmediatePropagation(), Qa(y, "next")) : v.key === "ArrowUp" ? (v.preventDefault(), v.stopImmediatePropagation(), Qa(y, "prev")) : e.submenu && (v.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : v.key === (o.value ? "ArrowLeft" : "ArrowRight") && (v.preventDefault(), Qa(y, "first"))) : (e.submenu ? v.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(v.key)) && (a.value = true, v.preventDefault(), setTimeout(() => setTimeout(() => m(v))));
  }
  const S = _(() => Y({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: m }, e.activatorProps));
  return ne(() => {
    const v = Gn.filterProps(e);
    return p(Gn, Y({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, v, { modelValue: a.value, "onUpdate:modelValue": (y) => a.value = y, absolute: true, activatorProps: S.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var y = arguments.length, h = new Array(y), k = 0; k < y; k++) h[k] = arguments[k];
      return p(Be, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Pt({ id: r, \u03A8openChildren: c }, s);
} }), Hc = H({ color: String, ...zt(), ...pe(), ...kt(), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VSheet"), Ra = Q()({ name: "VSheet", props: Hc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { borderClasses: i } = Xt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: u } = Oa(e), { positionClasses: c } = to(e), { roundedClasses: d } = dt(e);
  return ne(() => p(e.tag, { class: te(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: me([o.value, r.value, u.value, e.style]) }, n)), {};
} }), jV = H({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...pe(), ...ha({ transition: { component: Cc } }) }, "VCounter"), Ar = Q()({ name: "VCounter", functional: true, props: jV(), setup(e, t) {
  let { slots: n } = t;
  const a = $(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => p(Kt, { transition: e.transition }, { default: () => [at(b("div", { class: te(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: me(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Mn, e.active]])] })), {};
} }), UV = H({ floating: Boolean, ...pe() }, "VFieldLabel"), mo = Q()({ name: "VFieldLabel", props: UV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(no, { class: te(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: me(e.style) }, n)), {};
} }), GV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = H({ appendInnerIcon: _e, bgColor: String, clearable: Boolean, clearIcon: { type: _e, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: _e, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => GV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...pe(), ...Vr(), ...it(), ...Ue() }, "VField"), La = Q()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = qe(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = pa(e), { InputIcon: d } = di(e), { roundedClasses: f } = dt(e), { rtlClasses: m } = _t(), S = $(() => e.dirty || e.active), v = $(() => !!(e.label || l.label)), y = $(() => !e.singleLine && v.value), h = Mt(), k = _(() => e.id || `input-${h}`), I = $(() => e.details ? `${k.value}-messages` : void 0), V = X(), w = X(), g = X(), C = _(() => ["plain", "underlined"].includes(e.variant)), x = _(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), A = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? x.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = Xe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Et(x);
  ue(S, (Z) => {
    if (y.value && !jn()) {
      const J = V.value.$el, F = w.value.$el;
      requestAnimationFrame(() => {
        const G = cc(J), W = F.getBoundingClientRect(), N = W.x - G.x, j = W.y - G.y - (G.height / 2 - W.height / 2), ie = W.width / 0.75, be = Math.abs(ie - G.width) > 1 ? { maxWidth: ve(ie) } : void 0, ae = getComputedStyle(J), de = getComputedStyle(F), Pe = parseFloat(ae.transitionDuration) * 1e3 || 150, xe = parseFloat(de.getPropertyValue("--v-field-label-scale")), ge = de.getPropertyValue("color");
        J.style.visibility = "visible", F.style.visibility = "hidden", aa(J, { transform: `translate(${N}px, ${j}px) scale(${xe})`, color: ge, ...be }, { duration: Pe, easing: Ro, direction: Z ? "normal" : "reverse" }).finished.then(() => {
          J.style.removeProperty("visibility"), F.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = _(() => ({ isActive: S, isFocused: s, controlRef: g, iconColor: A, blur: c, focus: u })), L = $(() => {
    const Z = !S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : k.value };
  }), z = $(() => {
    const Z = y.value && S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : k.value };
  });
  function O(Z) {
    Z.target !== document.activeElement && Z.preventDefault();
  }
  return ne(() => {
    var _a3;
    const Z = e.variant === "outlined", J = !!(l["prepend-inner"] || e.prependInnerIcon), F = !!(e.clearable || l.clear) && !e.disabled, G = !!(l["append-inner"] || e.appendInnerIcon || F), W = () => l.label ? l.label({ ...T.value, label: e.label, props: { for: k.value } }) : e.label;
    return b("div", Y({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": G, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": J, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !W(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, m.value, e.class], style: [E.value, e.style], onClick: O }, n), [b("div", { class: "v-field__overlay" }, null), p(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), J && b("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && p(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), b("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && p(mo, Y({ key: "floating-label", ref: w, class: [D.value], floating: true }, L.value, { style: M.value }), { default: () => [W()] }), v.value && p(mo, Y({ key: "label", ref: V, id: e.labelId }, z.value), { default: () => [W()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: k.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? b("div", { id: k.value, class: "v-field__input", "aria-describedby": I.value }, null)]), F && p(_c, { key: "clear" }, { default: () => [at(b("div", { class: "v-field__clearable", onMousedown: (N) => {
      N.preventDefault(), N.stopPropagation();
    } }, [p(Be, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : p(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Mn, e.dirty]])] }), G && b("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && p(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), b("div", { class: te(["v-field__outline", D.value]), style: me(M.value) }, [Z && b(he, null, [b("div", { class: "v-field__outline__start" }, null), y.value && b("div", { class: "v-field__outline__notch" }, [p(mo, Y({ ref: w, floating: true }, L.value), { default: () => [W()] })]), b("div", { class: "v-field__outline__end" }, null)]), C.value && y.value && p(mo, Y({ ref: w, floating: true }, L.value), { default: () => [W()] })])]);
  }), { controlRef: g, fieldIconColor: A };
} }), cy = H({ autocomplete: String }, "autocomplete");
function zc(e) {
  const t = Mt(), n = re(0), a = $(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: $(() => a.value ? "off" : e.autocomplete), fieldName: $(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function dy(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const YV = ["color", "file", "time", "date", "datetime-local", "week", "month"], gi = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...cy(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextField"), Yn = Q()({ name: "VTextField", directives: { vIntersect: Dn }, inheritAttrs: false, props: gi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = dy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), m = X(), S = X(), v = X(), y = zc(e), h = _(() => YV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function k() {
    y.isSuppressing.value && y.update(), i.value || r(), Ee(() => {
      var _a3;
      v.value !== document.activeElement && ((_a3 = v.value) == null ? void 0 : _a3.focus());
    });
  }
  function I(C) {
    a("mousedown:control", C), C.target !== v.value && (k(), C.preventDefault());
  }
  function V(C) {
    a("click:control", C);
  }
  function w(C, x) {
    C.stopPropagation(), k(), Ee(() => {
      x(), ai(e["onClick:clear"], C);
    });
  }
  function g(C) {
    var _a3;
    const x = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = x.value;
      return;
    }
    const A = x.value, P = x.selectionStart, E = x.selectionEnd;
    o.value = A, Ee(() => {
      let D = 0;
      A.trimStart().length === x.value.length && (D = A.length - x.value.length), P != null && (x.selectionStart = P - D), E != null && (x.selectionEnd = E - D);
    });
  }
  return ne(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), x = !!(C || l.details), [A, P] = qn(n), { modelValue: E, ...D } = Nt.filterProps(e), M = La.filterProps(e);
    return p(Nt, Y({ ref: m, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: L, isDisabled: z, isDirty: O, isReadonly: Z, isValid: J, hasDetails: F, reset: G } = T;
      return p(La, Y({ ref: S, onMousedown: I, onClick: V, "onClick:clear": (W) => w(W, G), role: e.role }, Le(M, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || O.value, dirty: O.value || e.dirty, disabled: z.value, focused: i.value, details: F.value, error: J.value === false }), { ...l, default: (W) => {
        let { props: { class: N, ...j }, controlRef: ie } = W;
        const be = b("input", Y({ ref: (ae) => v.value = ie.value = ae, value: o.value, onInput: g, autofocus: e.autofocus, readonly: Z.value, disabled: z.value, name: y.fieldName.value, autocomplete: y.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, j, P), null);
        return b(he, null, [e.prefix && b("span", { class: "v-text-field__prefix" }, [b("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), at(l.default ? b("div", { class: te(N), "data-no-activator": "" }, [l.default({ id: L }), be]) : ca(be, { class: N }), [[Dn, u, null, { once: true }]]), e.suffix && b("span", { class: "v-text-field__suffix" }, [b("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (T) => {
      var _a3;
      return b(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && b(he, null, [b("span", null, null), p(Ar, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, m, S, v);
} }), KV = H({ renderless: Boolean, ...pe() }, "VVirtualScrollItem"), fy = Q()({ name: "VVirtualScrollItem", inheritAttrs: false, props: KV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = wn(void 0, "border");
  ue(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ne(() => {
    var _a3, _b2;
    return e.renderless ? b(he, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : b("div", Y({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), qV = -1, XV = 1, ws = 100, vy = H({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function my(e, t) {
  const n = on(), a = re(0);
  ct(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = re(0), o = re(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = re(0), r = re(0), s = X(), u = X();
  let c = 0;
  const { resizeRef: d, contentRect: f } = wn();
  ct(() => {
    d.value = s.value;
  });
  const m = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), S = _(() => !!(s.value && u.value && m.value && a.value));
  let v = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length });
  const h = re(0);
  let k = -1;
  function I(F) {
    return v[F] || a.value;
  }
  const V = Ig(() => {
    const F = performance.now();
    y[0] = 0;
    const G = t.value.length;
    for (let W = 1; W <= G; W++) y[W] = (y[W - 1] || 0) + I(W - 1);
    h.value = Math.max(h.value, performance.now() - F);
  }, h), w = ue(S, (F) => {
    F && (w(), c = u.value.offsetTop, V.immediate(), z(), ~k && Ee(() => {
      Je && window.requestAnimationFrame(() => {
        Z(k), k = -1;
      });
    }));
  });
  bt(() => {
    V.clear();
  });
  function g(F, G) {
    const W = v[F], N = a.value;
    a.value = N ? Math.min(a.value, G) : G, (W !== G || N !== a.value) && (v[F] = G, V());
  }
  function C(F) {
    F = Ze(F, 0, t.value.length);
    const G = Math.floor(F), W = F % 1, N = G + 1, j = y[G] || 0, ie = y[N] || j;
    return j + (ie - j) * W;
  }
  function x(F) {
    return ZV(y, F);
  }
  let A = 0, P = 0, E = 0;
  ue(m, (F, G) => {
    z(), F < G && requestAnimationFrame(() => {
      P = 0, z();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !u.value) return;
    const F = s.value.scrollTop, G = performance.now();
    G - E > 500 ? (P = Math.sign(F - A), c = u.value.offsetTop) : P = F - A, A = F, E = G, window.clearTimeout(D), D = window.setTimeout(T, 500), z();
  }
  function T() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(D), z());
  }
  let L = -1;
  function z() {
    cancelAnimationFrame(L), L = requestAnimationFrame(O);
  }
  function O() {
    if (!s.value || !m.value || !a.value) return;
    const F = A - c, G = Math.sign(P), W = Math.max(0, F - ws), N = Ze(x(W), 0, t.value.length), j = F + m.value + ws, ie = Ze(x(j) + 1, N + 1, t.value.length);
    if ((G !== qV || N < l.value) && (G !== XV || ie > o.value)) {
      const be = C(l.value) - C(N), ae = C(ie) - C(o.value);
      Math.max(be, ae) > ws ? (l.value = N, o.value = ie) : (N <= 0 && (l.value = N), ie >= t.value.length && (o.value = ie));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Z(F) {
    const G = C(F);
    !s.value || F && !G ? k = F : s.value.scrollTop = G;
  }
  const J = _(() => t.value.slice(l.value, o.value).map((F, G) => {
    const W = G + l.value;
    return { raw: F, index: W, key: pt(F, e.itemKey, W) };
  }));
  return ue(t, () => {
    v = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length }), V.immediate(), z();
  }, { deep: 1 }), { calculateVisibleItems: z, containerRef: s, markerRef: u, computedItems: J, paddingTop: i, paddingBottom: r, scrollToIndex: Z, handleScroll: M, handleScrollend: T, handleItemResize: g };
}
function ZV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const JV = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...vy(), ...pe(), ...kt() }, "VVirtualScroll"), Tr = Q()({ name: "VVirtualScroll", props: JV(), setup(e, t) {
  let { slots: n } = t;
  const a = St("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: m, computedItems: S } = my(e, $(() => e.items));
  return $t(() => e.renderless, () => {
    function v() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    Ct(() => {
      i.value = pr(a.vnode.el, true), v(true);
    }), bt(v);
  }), ne(() => {
    const v = S.value.map((y) => p(fy, { key: y.key, renderless: e.renderless, "onUpdate:height": (h) => c(y.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: y.raw, index: y.index, ...h });
    } }));
    return e.renderless ? b(he, null, [b("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ve(f.value) } }, null), v, b("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ve(m.value) } }, null)]) : b("div", { ref: i, class: te(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: me([l.value, e.style]) }, [b("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ve(f.value), paddingBottom: ve(m.value) } }, [v])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function Wc(e, t) {
  const n = re(false);
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
        const s = ue(n, () => {
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
function jc(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? Pa(s) : [];
  }
  function o(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((m) => {
      var _a4;
      return m.type === "list" ? (_a4 = m.contentRef.value) == null ? void 0 : _a4.$el : m.contentRef.value;
    }).findIndex((m) => m == null ? void 0 : m.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const m = t[d], S = c[d];
      (m.type === "list" || (u === "forward" ? S.at(-1) === r.target : S.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const m = t[f];
      if (m.type === "list" && nt(m.displayItemsCount) > 0) (_a3 = m.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const S = u === "forward";
        c[f].at(S ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const m = u === "forward" ? 1 : -1;
    for (let S = s + m; S >= 0 && S < t.length; S += m) {
      const v = t[S];
      if (r[S].length > 0 || v.type === "list" && nt(v.displayItemsCount) > 0) return S;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const QV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function xs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const wl = H({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function eI(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? QV, o = (n == null ? void 0 : n.filterKeys) ? ot(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ot(e[s]), d = {}, f = {};
    let m = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let S = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const h = o || Object.keys(c);
        S = h.length === i;
        for (const k of h) {
          const I = pt(c, k), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[k];
          if (m = V ? V(I, t, u) : l(I, t, u), m !== -1 && m !== false) V ? d[k] = xs(m, t) : f[k] = xs(m, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else m = l(u, t, u), m !== -1 && m !== false && (f.title = xs(m, t));
      const v = Object.keys(f).length, y = Object.keys(d).length;
      if (!v && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== i && !v || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== i || !v && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function xl(e, t, n, a) {
  const l = re([]), o = re(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Fe(t).map((s) => [s, a.transform(s)]) : Fe(t));
  ct(() => {
    const s = typeof n == "function" ? n() : Fe(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = eI(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Fe(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Fe(t), f = [], m = /* @__PURE__ */ new Map();
    c.forEach((S) => {
      let { index: v, matches: y } = S;
      const h = d[v];
      f.push(h), m.set(h.value, y);
    }), l.value = f, o.value = m;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function Uc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [b("span", { class: te(`${e}__unmask`) }, [t.slice(o, a[0])]), b("span", { class: te(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(b("span", { class: te(`${e}__unmask`) }, [t.slice(a[1])])), b(he, null, [i]);
  });
}
const tI = H({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Gc(e, t) {
  const n = Mt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: $(() => nt(t)), ariaControls: $(() => a.value) };
}
const Yc = H({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: _e, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...tI(), ...qh({ itemChildren: false }) }, "Select"), nI = H({ search: String, ...wl({ filterKeys: ["title"] }), ...Yc(), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ha({ transition: { component: xr } }) }, "VSelect"), Kc = Q()({ name: "VSelect", props: nI(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = X(), o = X(), i = X(), r = X(), s = X(), { items: u, transformIn: c, transformOut: d } = Bc(e), f = we(e, "search", ""), { filteredItems: m, getMatches: S } = xl(e, u, () => f.value), v = we(e, "modelValue", [], (ge) => c(ge === null ? [null] : ot(ge)), (ge) => {
    const R = d(ge);
    return e.multiple ? R : R[0] ?? null;
  }), y = _(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), h = ao(e), k = zc(e), I = _(() => v.value.map((ge) => ge.value)), V = re(false), w = $(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = di(e);
  let C = "", x = 0, A;
  const P = _(() => {
    const ge = f.value ? m.value : u.value;
    return e.hideSelected ? ge.filter((R) => !v.value.some((B) => (e.valueComparator || Dt)(B, R))) : ge;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = we(e, "menu"), M = _({ get: () => D.value, set: (ge) => {
    var _a3;
    D.value && !ge && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ge && E.value || (D.value = ge);
  } }), { menuId: T, ariaExpanded: L, ariaControls: z } = Gc(e, M), O = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Z = X(), J = Wc(Z, l), { onTabKeydown: F } = jc({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Z, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function G(ge) {
    e.openOnClear && (M.value = true);
  }
  function W() {
    E.value || (M.value = !M.value);
  }
  function N(ge) {
    var _a3;
    ge.key === "Tab" && F(ge), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(ge.target)) && jl(ge) && j(ge);
  }
  function j(ge) {
    var _a3, _b2, _c2;
    if (!ge.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ge.key) && ge.preventDefault(), ["Enter", "ArrowDown", " "].includes(ge.key) && (M.value = true), ["Escape", "Tab"].includes(ge.key) && (M.value = false), e.clearable && ge.key === "Backspace") {
      ge.preventDefault(), v.value = [], G();
      return;
    }
    ge.key === "Home" ? (_a3 = Z.value) == null ? void 0 : _a3.focus("first") : ge.key === "End" && ((_b2 = Z.value) == null ? void 0 : _b2.focus("last"));
    const R = 1e3;
    if (!jl(ge)) return;
    const B = performance.now();
    B - A > R && (C = "", x = 0), C += ge.key.toLowerCase(), A = B;
    const K = P.value;
    function oe() {
      let U = le();
      return U || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), x++, U = le(), U) || (x = 0, U = le(), U) ? U : (C = ge.key.toLowerCase(), le());
    }
    function le() {
      for (let U = x; U < K.length; U++) {
        const ee = K[U];
        if (ee.title.toLowerCase().startsWith(C)) return [ee, U];
      }
    }
    const se = oe();
    if (!se) return;
    const [ye, ce] = se;
    x = ce, (_c2 = Z.value) == null ? void 0 : _c2.focus(ce), e.multiple || (v.value = [ye]);
  }
  function ie(ge) {
    let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ge.props.disabled) if (e.multiple) {
      const B = v.value.findIndex((oe) => (e.valueComparator || Dt)(oe.value, ge.value)), K = R ?? !~B;
      if (~B) {
        const oe = K ? [...v.value, ge] : [...v.value];
        oe.splice(B, 1), v.value = oe;
      } else K && (v.value = [...v.value, ge]);
    } else {
      const B = R !== false;
      v.value = B ? [ge] : [], Ee(() => {
        M.value = false;
      });
    }
  }
  function be(ge) {
    var _a3;
    const R = ge.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(R)) || (M.value = false);
  }
  function ae() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function de() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Pe(ge) {
    V.value = true;
  }
  function xe(ge) {
    if (ge == null) v.value = [];
    else if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const R = u.value.find((B) => B.title === ge);
      R && ie(R);
    } else l.value && (l.value.value = "");
  }
  return ue(M, () => {
    if (!e.hideSelected && M.value && v.value.length) {
      const ge = P.value.findIndex((R) => v.value.some((B) => (e.valueComparator || Dt)(B.value, R.value)));
      Je && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ge >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ge));
      });
    }
  }), ue(u, (ge, R) => {
    M.value || V.value && e.hideNoData && !R.length && ge.length && (M.value = true);
  }), ne(() => {
    const ge = !!(e.chips || n.chip), R = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), B = v.value.length > 0, K = Yn.filterProps(e), oe = B || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, le = { search: f, filteredItems: m.value };
    return p(Yn, Y({ ref: l }, K, { modelValue: v.value.map((se) => se.props.title).join(", "), name: void 0, "onUpdate:modelValue": xe, focused: V.value, "onUpdate:focused": (se) => V.value = se, validationValue: v.externalValue, counterValue: y.value, dirty: B, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": v.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: oe, "onClick:clear": G, "onMousedown:control": W, onBlur: be, onKeydown: j, "aria-expanded": L.value, "aria-controls": z.value }), { ...n, default: (se) => {
      let { id: ye } = se;
      return b(he, null, [b("select", { hidden: true, multiple: e.multiple, name: k.fieldName.value }, [u.value.map((ce) => b("option", { key: ce.value, value: ce.value, selected: I.value.includes(ce.value) }, null))]), p(ql, Y({ id: T.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (ce) => M.value = ce, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: ae, onAfterLeave: de }, O.value), { default: () => [p(Ra, { onFocusin: Pe, onKeydown: N }, { default: () => [n["menu-header"] && b("header", { ref: i }, [n["menu-header"](le)]), R && p(Kl, Y({ key: "select-list", ref: Z, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${ye.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, J, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: a(e.noDataText) }, null)), p(Tr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (ce) => {
          var _a4, _b3, _c3;
          let { item: U, index: ee, itemRef: Ce } = ce;
          const q = v0(U.props), fe = Y(U.props, { ref: Ce, key: U.value, onClick: () => ie(U, null), "aria-posinset": ee + 1, "aria-setsize": P.value.length });
          return U.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: U.raw, index: ee })) ?? p(mn, Y(U.props, { key: `divider-${ee}` }), null) : U.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: U.raw, index: ee })) ?? p(lo, Y(U.props, { key: `subheader-${ee}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: U, index: ee, props: fe })) ?? p(xn, Y(fe, { role: "option" }), { prepend: (Se) => {
            let { isSelected: ke } = Se;
            return b(he, null, [e.multiple && !e.hideSelected ? p(En, { key: U.value, modelValue: ke, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ve) => Ve.preventDefault() }, null) : void 0, q.prependAvatar && p(hn, { image: q.prependAvatar }, null), q.prependIcon && p(Ye, { icon: q.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Uc("v-select", U.title, (_a5 = S(U)) == null ? void 0 : _a5.title) : U.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && b("footer", { ref: r }, [n["menu-footer"](le)])] })] }), v.value.map((ce, U) => {
        function ee(Se) {
          Se.stopPropagation(), Se.preventDefault(), ie(ce, false);
        }
        const Ce = Y(fa.filterProps(ce.props), { "onClick:close": ee, onKeydown(Se) {
          Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), ee(Se));
        }, onMousedown(Se) {
          Se.preventDefault(), Se.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), q = ge ? !!n.chip : !!n.selection, fe = q ? br(ge ? n.chip({ item: ce, index: U, props: Ce }) : n.selection({ item: ce, index: U })) : void 0;
        if (!(q && !fe)) return b("div", { key: ce.value, class: "v-select__selection" }, [ge ? n.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: ce.title } } }, { default: () => [fe] }) : p(fa, Y({ key: "chip", closable: w.value, size: "small", text: ce.title, disabled: ce.props.disabled }, Ce), null) : fe ?? b("span", { class: "v-select__selection-text" }, [ce.title, e.multiple && U < v.value.length - 1 && b("span", { class: "v-select__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var se = arguments.length, ye = new Array(se), ce = 0; ce < se; ce++) ye[ce] = arguments[ce];
      return b(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ye), e.menuIcon ? p(Ye, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && p(g, { key: "append-icon", name: "appendInner", color: ye[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: V, menu: M, search: f, filteredItems: m, select: ie }, l);
} }), aI = H({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...Yc(), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), lI = Q()({ name: "VAutocomplete", props: aI(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = X(), o = re(false), i = re(true), r = re(false), s = X(), u = X(), c = re(-1), d = re(null), { items: f, transformIn: m, transformOut: S } = Bc(e), { textColorClasses: v, textColorStyles: y } = Et(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), k = we(e, "search", ""), I = we(e, "modelValue", [], (U) => m(U === null ? [null] : ot(U)), (U) => {
    const ee = S(U);
    return e.multiple ? ee : ee[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), w = ao(e), { filteredItems: g, getMatches: C } = xl(e, f, () => d.value ?? (i.value ? "" : k.value)), x = _(() => e.hideSelected && d.value === null ? g.value.filter((U) => !I.value.some((ee) => ee.value === U.value)) : g.value), A = $(() => e.closableChips && !w.isReadonly.value && !w.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), D = _(() => I.value.map((U) => U.props.value)), M = _(() => x.value.find((U) => U.type === "item" && !U.props.disabled)), T = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && k.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && x.value.length > 0 && !i.value && !r.value;
  }), L = _(() => e.hideNoData && !x.value.length || w.isReadonly.value || w.isDisabled.value), z = we(e, "menu"), O = _({ get: () => z.value, set: (U) => {
    var _a3;
    z.value && !U && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || U && L.value || (z.value = U);
  } }), { menuId: Z, ariaExpanded: J, ariaControls: F } = Gc(e, O), G = X(), W = X(), N = X(), j = Wc(G, l), { onTabKeydown: ie } = jc({ groups: [{ type: "element", contentRef: W }, { type: "list", contentRef: G, displayItemsCount: () => x.value.length }, { type: "element", contentRef: N }], onLeave: () => {
    var _a3;
    O.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function be(U) {
    e.openOnClear && (O.value = true), k.value = "";
  }
  function ae() {
    L.value || (O.value = true);
  }
  function de(U) {
    L.value || (o.value && (U.preventDefault(), U.stopPropagation()), O.value = !O.value);
  }
  function Pe(U) {
    var _a3, _b2;
    U.key === "Tab" && ie(U), ((_a3 = G.value) == null ? void 0 : _a3.$el.contains(U.target)) && (jl(U) || U.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function xe(U) {
    var _a3, _b2, _c2, _d2, _e2;
    if (w.isReadonly.value) return;
    const ee = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, Ce = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(U.key) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (O.value = true), ["Escape"].includes(U.key) && (O.value = false), T.value && ["Enter", "Tab"].includes(U.key) && M.value && !I.value.some((q) => {
      let { value: fe } = q;
      return fe === M.value.value;
    }) && ce(M.value), U.key === "ArrowDown" && T.value && ((_b2 = G.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(U.key)) {
      if (!e.multiple && E.value && I.value.length > 0 && !k.value) return ce(I.value[0], false);
      if (~c.value) {
        U.preventDefault();
        const q = c.value;
        ce(I.value[c.value], false), c.value = q >= Ce - 1 ? Ce - 2 : q;
      } else U.key === "Backspace" && !k.value && (c.value = Ce - 1);
      return;
    }
    if (e.multiple) if (U.key === "ArrowLeft") {
      if (c.value < 0 && ee && ee > 0) return;
      const q = c.value > -1 ? c.value - 1 : Ce - 1;
      if (I.value[q]) c.value = q;
      else {
        const fe = ((_c2 = k.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(fe, fe);
      }
    } else if (U.key === "ArrowRight") {
      if (c.value < 0) return;
      const q = c.value + 1;
      I.value[q] ? c.value = q : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && jl(U) && (c.value = -1);
  }
  function ge(U) {
    if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const ee = f.value.find((Ce) => Ce.title === U.target.value);
      ee && ce(ee);
    }
  }
  function R() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function B() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function K(U) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function oe(U) {
    r.value = false;
  }
  function le(U) {
    (U == null || U === "" && !e.multiple && !E.value) && (I.value = []);
  }
  function se(U) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(U.relatedTarget)) && (o.value = true);
  }
  const ye = re(false);
  function ce(U) {
    let ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!U || U.props.disabled)) if (e.multiple) {
      const Ce = I.value.findIndex((fe) => (e.valueComparator || Dt)(fe.value, U.value)), q = ee ?? !~Ce;
      if (~Ce) {
        const fe = q ? [...I.value, U] : [...I.value];
        fe.splice(Ce, 1), I.value = fe;
      } else q && (I.value = [...I.value, U]);
      e.clearOnSelect && (k.value = "");
    } else {
      const Ce = ee !== false;
      I.value = Ce ? [U] : [], d.value = i.value ? "" : k.value ?? "", k.value = Ce && !E.value ? U.title : "", Ee(() => {
        O.value = false, i.value = true;
      });
    }
  }
  return ue(o, (U, ee) => {
    var _a3;
    U !== ee && (U ? (ye.value = true, k.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ee(() => ye.value = false)) : (!e.multiple && k.value == null && (I.value = []), O.value = false, !i.value && k.value && (d.value = k.value), k.value = "", c.value = -1));
  }), ue(k, (U) => {
    !o.value || ye.value || (U && (O.value = true), i.value = !U);
  }), ue(O, (U) => {
    if (!e.hideSelected && U && I.value.length && i.value) {
      const ee = x.value.findIndex((Ce) => I.value.some((q) => Ce.value === q.value));
      Je && window.requestAnimationFrame(() => {
        var _a3;
        ee >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(ee));
      });
    }
    U && (d.value = null);
  }), ue(f, (U, ee) => {
    O.value || o.value && !ee.length && U.length && (O.value = true);
  }), ne(() => {
    const U = !!(!e.hideNoData || x.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ee = I.value.length > 0, Ce = Yn.filterProps(e), q = { search: k, filteredItems: g.value };
    return p(Yn, Y({ ref: l }, Ce, { modelValue: k.value, "onUpdate:modelValue": [(fe) => k.value = fe, le], focused: o.value, "onUpdate:focused": (fe) => o.value = fe, validationValue: I.externalValue, counterValue: V.value, dirty: ee, onChange: ge, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": O.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: w.isReadonly.value, placeholder: ee ? void 0 : e.placeholder, "onClick:clear": be, "onMousedown:control": ae, onKeydown: xe, onBlur: se, "aria-expanded": J.value, "aria-controls": F.value }), { ...n, default: (fe) => {
      let { id: Se } = fe;
      return b(he, null, [p(ql, Y({ id: Z.value, ref: s, modelValue: O.value, "onUpdate:modelValue": (ke) => O.value = ke, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: R, onAfterLeave: B }, e.menuProps), { default: () => [p(Ra, { onFocusin: K, onKeydown: Pe }, { default: () => [n["menu-header"] && b("header", { ref: W }, [n["menu-header"](q)]), U && p(Kl, Y({ key: "autocomplete-list", ref: G, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (ke) => ke.preventDefault(), onFocusout: oe, tabindex: "-1", selectable: !!x.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, j, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !x.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: a(e.noDataText) }, null)), p(Tr, { ref: u, renderless: true, items: x.value, itemKey: "value" }, { default: (ke) => {
          var _a4, _b3, _c3;
          let { item: Ve, index: Re, itemRef: Ge } = ke;
          const Ne = Y(Ve.props, { ref: Ge, key: Ve.value, active: T.value && Ve === M.value ? true : void 0, onClick: () => ce(Ve, null), "aria-posinset": Re + 1, "aria-setsize": x.value.length });
          return Ve.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ve.raw, index: Re })) ?? p(mn, Y(Ve.props, { key: `divider-${Re}` }), null) : Ve.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ve.raw, index: Re })) ?? p(lo, Y(Ve.props, { key: `subheader-${Re}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ve, index: Re, props: Ne })) ?? p(xn, Y(Ne, { role: "option" }), { prepend: (ft) => {
            let { isSelected: lt } = ft;
            return b(he, null, [e.multiple && !e.hideSelected ? p(En, { key: Ve.value, modelValue: lt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (rn) => rn.preventDefault() }, null) : void 0, Ve.props.prependAvatar && p(hn, { image: Ve.props.prependAvatar }, null), Ve.props.prependIcon && p(Ye, { icon: Ve.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ve.title : Uc("v-autocomplete", Ve.title, (_a5 = C(Ve)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && b("footer", { ref: N }, [n["menu-footer"](q)])] })] }), I.value.map((ke, Ve) => {
        function Re(lt) {
          lt.stopPropagation(), lt.preventDefault(), ce(ke, false);
        }
        const Ge = Y(fa.filterProps(ke.props), { "onClick:close": Re, onKeydown(lt) {
          lt.key !== "Enter" && lt.key !== " " || (lt.preventDefault(), lt.stopPropagation(), Re(lt));
        }, onMousedown(lt) {
          lt.preventDefault(), lt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Ne = P.value ? !!n.chip : !!n.selection, ft = Ne ? br(P.value ? n.chip({ item: ke, index: Ve, props: Ge }) : n.selection({ item: ke, index: Ve })) : void 0;
        if (!(Ne && !ft)) return b("div", { key: ke.value, class: te(["v-autocomplete__selection", Ve === c.value && ["v-autocomplete__selection--selected", v.value]]), style: me(Ve === c.value ? y.value : {}) }, [P.value ? n.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: ke.title } } }, { default: () => [ft] }) : p(fa, Y({ key: "chip", closable: A.value, size: "small", text: ke.title, disabled: ke.props.disabled }, Ge), null) : ft ?? b("span", { class: "v-autocomplete__selection-text" }, [ke.title, e.multiple && Ve < I.value.length - 1 && b("span", { class: "v-autocomplete__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var fe = arguments.length, Se = new Array(fe), ke = 0; ke < fe; ke++) Se[ke] = arguments[ke];
      return b(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? p(Ye, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: de, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && p(h, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: O, search: k, filteredItems: g, select: ce }, l);
} }), oI = H({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: _e, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...pe(), ...Zn({ location: "top end" }), ...it(), ...Me(), ...Ue(), ...ha({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), gy = Q()({ name: "VBadge", inheritAttrs: false, props: oI(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Xe(() => e.color), { roundedClasses: l } = dt(e), { t: o } = Qe(), { textColorClasses: i, textColorStyles: r } = Et(() => e.textColor), { themeClasses: s } = wr(), { locationStyles: u } = Oa(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = wt(e);
  return ne(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [m, S] = js(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return p(e.tag, Y({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [b("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), p(Kt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [at(b("span", Y({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, m), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? p(Ye, { icon: e.icon }, null) : f]), [[Mn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), iI = H({ color: String, density: String, ...pe() }, "VBannerActions"), hy = Q()({ name: "VBannerActions", props: iI(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ne(() => {
    var _a3;
    return b("div", { class: te(["v-banner-actions", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), yy = ga("v-banner-text"), rI = H({ avatar: String, bgColor: String, color: String, icon: _e, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...zt(), ...pe(), ...gt(), ...kt(), ...gl({ mobile: null }), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VBanner"), sI = Q()({ name: "VBanner", props: rI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { borderClasses: o } = Xt(e), { densityClasses: i } = Lt(e), { displayClasses: r, mobile: s } = on(e), { dimensionStyles: u } = wt(e), { elevationClasses: c } = It(e), { locationStyles: d } = Oa(e), { positionClasses: f } = to(e), { roundedClasses: m } = dt(e), { themeClasses: S } = qe(e), v = $(() => e.color), y = $(() => e.density);
  mt({ VBannerActions: { color: v, density: y } }), ne(() => {
    const h = !!(e.text || n.text), k = !!(e.avatar || e.icon), I = !!(k || n.prepend);
    return p(e.tag, { class: te(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, c.value, f.value, m.value, e.class]), style: me([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && b("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !k, defaults: { VAvatar: { color: v.value, density: y.value, icon: e.icon, image: e.avatar } } }, n.prepend) : p(hn, { key: "prepend-avatar", color: v.value, density: y.value, icon: e.icon, image: e.avatar }, null)]), b("div", { class: "v-banner__content" }, [h && p(yy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && p(hy, { key: "actions" }, n.actions)];
    } });
  });
} }), uI = H({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...hl({ name: "bottom-navigation" }), ...Me({ tag: "header" }), ...pl({ selectedClass: "v-btn--selected" }), ...Ue() }, "VBottomNavigation"), cI = Q()({ name: "VBottomNavigation", props: uI(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = wr(), { borderClasses: l } = Xt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { ssrBootStyles: c } = bl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = we(e, "active", e.active), { layoutItemStyles: m } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => "bottom"), layoutSize: $(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: $(() => e.absolute) });
  return Na(e, Ic), mt({ VBtn: { baseColor: $(() => e.baseColor), color: $(() => e.color), density: $(() => e.density), stacked: $(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ne(() => p(e.tag, { class: te(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: me([i.value, m.value, { height: ve(d.value) }, c.value, e.style]) }, { default: () => [n.default && b("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), by = H({ fullscreen: Boolean, scrollable: Boolean, ...Le(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: xr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), du = Q()({ name: "VDialog", props: by(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), { scopeId: o } = kl(), i = X();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return ue(l, async (u) => {
    var _a3;
    u || (await Ee(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), ne(() => {
    const u = Gn.filterProps(e), c = Y({ "aria-haspopup": "dialog" }, e.activatorProps), d = Y({ tabindex: -1 }, e.contentProps);
    return p(Gn, Y({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, m = new Array(f), S = 0; S < f; S++) m[S] = arguments[S];
      return p(Be, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...m)];
      } });
    } });
  }), Pt({}, i);
} }), dI = H({ inset: Boolean, ...by({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), fI = Q()({ name: "VBottomSheet", props: dI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue");
  return ne(() => {
    const l = du.filterProps(e);
    return p(du, Y(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), vI = H({ divider: [Number, String], ...pe() }, "VBreadcrumbsDivider"), py = Q()({ name: "VBreadcrumbsDivider", props: vI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return b("li", { "aria-hidden": "true", class: te(["v-breadcrumbs-divider", e.class]), style: me(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), mI = H({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...pe(), ...tn(kt(), ["width", "maxWidth"]), ...ci(), ...Me({ tag: "li" }) }, "VBreadcrumbsItem"), Sy = Q()({ name: "VBreadcrumbsItem", props: mI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Et(() => o.value ? e.activeColor : e.color);
  return ne(() => p(e.tag, { class: te(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: me([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? b("a", Y({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), gI = H({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: _e, items: { type: Array, default: () => [] }, ...pe(), ...gt(), ...it(), ...Me({ tag: "ul" }) }, "VBreadcrumbs"), hI = Q()({ name: "VBreadcrumbs", props: gI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { densityClasses: o } = Lt(e), { roundedClasses: i } = dt(e);
  mt({ VBreadcrumbsDivider: { divider: $(() => e.divider) }, VBreadcrumbsItem: { activeClass: $(() => e.activeClass), activeColor: $(() => e.activeColor), color: $(() => e.color), disabled: $(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ne(() => {
    const s = !!(n.prepend || e.icon);
    return p(e.tag, { class: te(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: me([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && b("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : p(Ye, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: m } = u;
        return b(he, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? p(Sy, Y({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && p(py, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: m, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), yI = H({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...xt(), ..._h(), ...it(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "flat" }) }, "VIconBtn"), ky = Q()({ name: "VIconBtn", props: yI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "active"), { themeClasses: o } = qe(e), { borderClasses: i } = Xt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = dt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ba(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function m() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ne(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, v = e.size, h = f.has(v) ? f.get(v) : v, k = e.height ?? h, I = e.width ?? h, { iconSize: V } = Vh(e, () => new Map(e.iconSizes).get(v)), w = { icon: S, size: V.value, color: e.iconColor, opacity: e.opacity };
    return p(e.tag, { type: e.tag === "button" ? "button" : void 0, class: te([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: me([{ "--v-icon-btn-rotate": ve(e.rotate, "deg"), "--v-icon-btn-height": ve(k), "--v-icon-btn-width": ve(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: m }, { default: () => {
      var _a3;
      return [ya(!e.hideOverlay, "v-icon-btn"), b("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? p(Ye, Y({ key: "content-icon" }, w), null) : p(Be, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...w } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text);
      } })]), !!e.loading && b("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? p(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function bI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const wy = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, xy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, pI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], SI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kI = 28, wI = 31, qc = 12, Cy = 1, Dr = 1, Aa = 7, hv = 60, xI = 59, CI = 1440, _I = 24, VI = 23, II = 0, PI = 1e4, AI = 100, TI = 100, DI = 1e4;
function EI(e, t, n) {
  const a = nn(e);
  return Ty(a, t[0], Ay), In(a), n && rl(a, n, a.hasTime), a;
}
function MI(e, t, n) {
  const a = nn(e);
  return Ty(a, t[t.length - 1]), In(a), n && rl(a, n, a.hasTime), a;
}
function _y(e) {
  const t = nn(e);
  return t.day = Dr, Er(t), In(t), t;
}
function Vy(e) {
  const t = nn(e);
  return t.day = Zc(t.year, t.month), Er(t), In(t), t;
}
function Dl(e) {
  return isFinite(parseInt(e));
}
function BI(e) {
  return typeof e == "number" && isFinite(e) || !!xy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function yv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = xy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Ol(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!wy.exec(e) || e instanceof Date;
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = Xc(e);
    return n && rl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = wy.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Er(l), In(l), n && rl(l, n, l.hasTime), l;
}
function Xc(e) {
  return In({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * PI + e.month * AI + e.day;
}
function fu(e) {
  return e.hour * TI + e.minute;
}
function Fa(e) {
  return Vt(e) * DI + fu(e);
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = fu(t), l = fu(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function bv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function pv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = VI, e.minute = xI, e.time = Py(e))), e;
}
function Iy(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, vu(e, t), In(e), n && rl(e, n, true), e;
}
function Er(e) {
  return e.weekday = $I(e), e;
}
function In(e) {
  return e.time = Py(e), e.date = RI(e), e;
}
function $I(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % qc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Zc(e, t) {
  return bI(e) ? SI[t] : pI[t];
}
function nn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: m } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: m };
}
function tl(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function RI(e) {
  let t = `${tl(e.year, 4)}-${tl(e.month, 2)}`;
  return e.hasDay && (t += `-${tl(e.day, 2)}`), t;
}
function Py(e) {
  return e.hasTime ? `${tl(e.hour, 2)}:${tl(e.minute, 2)}` : "";
}
function vu(e, t) {
  for (e.minute += t; e.minute >= hv; ) e.minute -= hv, e.hour++, e.hour >= _I && (Ta(e), e.hour = II);
  return e;
}
function Ta(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Aa, e.day > kI && e.day > Zc(e.year, e.month) && (e.day = Dr, e.month++, e.month > qc && (e.month = Cy, e.year++)), e;
}
function Ay(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Aa, e.day < Dr && (e.month--, e.month < Cy && (e.year--, e.month = qc), e.day = Zc(e.year, e.month)), e;
}
function Ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function LI(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Ty(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ta, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function FI(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Aa; a++) {
    let l = 1;
    for (let o = 1; o < Aa; o++) {
      const i = (a + o) % Aa;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function mu(e) {
  const t = `${tl(e.hour, 2)}:${tl(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function tr(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Vt(t), r = [];
  let s = nn(e), u = 0, c = u === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Vt(s), c = c || u === i, a[s.weekday] === 0) {
      s = Ta(s);
      continue;
    }
    const d = nn(s);
    In(d), rl(d, n), r.push(d), s = Ka(s, Ta, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function OI(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = nn(e);
    o.push(Iy(s, r, l));
  }
  return o;
}
function _o(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(mu(a));
    } catch {
      return "";
    }
  };
}
function NI(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Aa || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Aa) return false;
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
function HI(e) {
  const t = Tt({ now: ia("0000-00-00 00:00", true), today: ia("0000-00-00", true) }), n = _(() => e.now && Ol(e.now) ? ia(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Xc(/* @__PURE__ */ new Date());
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
  return ue(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Mr = H({ start: { type: [String, Number, Date], validate: Ol, default: () => Xc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Ol }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: NI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Ol }, type: { type: String, default: "month" } }, "VCalendar-base");
function Jc(e) {
  const { times: t, updateTimes: n } = HI({ now: e.now }), a = Yg(e), l = ml(), o = _(() => e.type === "month" ? _y(ia(e.start, true)) : ia(e.start, true)), i = _(() => {
    const V = o.value, w = e.end && ia(e.end) || V, g = Fa(w) < Fa(V) ? V : w;
    return e.type === "month" ? Vy(g) : g;
  }), r = _(() => Ol(e.modelValue) ? ia(e.modelValue, true) : o.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), w = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((g) => g >= w), ...V.toSorted().filter((g) => g < w)];
  }), u = _(() => {
    const V = r.value, w = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [V.weekday];
      case "4day":
        return [V.weekday, (V.weekday + 1) % 7, (V.weekday + 2) % 7, (V.weekday + 3) % 7];
      case "category":
        return Array.from({ length: w }, (g, C) => (V.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = _(() => FI(s.value)), d = _(() => tr(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : _o(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), m = _(() => e.weekdayFormat ? e.weekdayFormat : _o(a.current.value, (V, w) => ({ timeZone: "UTC", weekday: w ? "short" : "long" })));
  function S(V) {
    return dh(V);
  }
  function v(V) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": w };
  }
  function y(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return EI(V, s.value, t.today);
  }
  function k(V) {
    return MI(V, s.value, t.today);
  }
  function I(V) {
    return _o(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: m, getColorProps: S, getRelativeClasses: v, getWeekNumber: y, getStartOfWeek: h, getEndOfWeek: k, getFormatter: I, updateTimes: n };
}
const Dy = H({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Dl }, intervalWidth: { type: [Number, String], default: 60, validate: Dl }, intervalMinutes: { type: [Number, String], default: 60, validate: Dl }, firstInterval: { type: [Number, String], default: 0, validate: Dl }, firstTime: { type: [Number, String, Object], validate: BI }, intervalCount: { type: [Number, String], default: 24, validate: Dl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function Ey(e) {
  const t = Jc(e), n = re(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => yv(e.firstTime)), s = _(() => {
    const w = r.value;
    return w !== false && w >= 0 && w <= CI ? w : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => tr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const w = c.value, g = s.value, C = l.value, x = o.value, A = t.times.now;
    return w.map((P) => OI(P, g, C, x, A));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : _o(t.locale.current.value, (w, g) => g ? w.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function m(w) {
    const g = d.value[0][0];
    return !(g.hour === w.hour && g.minute === w.minute);
  }
  function S(w) {
  }
  function v(w, g) {
    const C = nn(g), x = w.currentTarget.getBoundingClientRect(), A = s.value, P = w, E = w, D = P.changedTouches || P.touches, T = ((D && D[0] ? D[0].clientY : E.clientY) - x.top) / i.value, L = Math.floor(T * l.value), z = A + L;
    return Iy(C, z, t.times.now);
  }
  function y(w) {
    const g = nn(w);
    return g.timeToY = I, g.timeDelta = V, g.minutesToPixels = k, g.week = c.value, g.intervalRange = [s.value, s.value + o.value * l.value], g;
  }
  function h(w) {
    const g = I(w), C = n.value;
    return g === false || !C ? false : (C.scrollTop = g, true);
  }
  function k(w) {
    return w / l.value * i.value;
  }
  function I(w) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = g !== false;
    let A = V(w, typeof g != "boolean" ? g : void 0);
    return A === false || (A *= u.value, C ? A < 0 ? A = 0 : A > u.value && (A = u.value) : A < 0 ? A = A + u.value : A > u.value && (A = A - u.value)), A;
  }
  function V(w, g) {
    let C = yv(w);
    if (C === false) return false;
    const x = o.value * l.value;
    if (g && typeof w == "object" && "day" in w) {
      const P = Vt(w), E = Vt(g);
      C += (P - E) * x;
    }
    const A = s.value;
    return (C - A) / x;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: m, intervalStyleDefault: S, getTimestampAtEvent: v, getSlotScope: y, scrollToTime: h, minutesToPixels: k, timeToY: I, timeDelta: V };
}
function zI(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function WI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Yo = { mounted: zI, unmounted: WI }, go = qt({ name: "VCalendarDaily", directives: { vResize: Yo }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr(), ...Dy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = X(0), o = X(), i = Ey(e);
  function r() {
    Ee(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return b("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const M = ve(e.intervalWidth);
    return b("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(m);
  }
  function m(M, T) {
    const L = vn(a, ":day", (z) => ({ nativeEvent: z, ...i.getSlotScope(M) }));
    return b("div", Y({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, L), [v(M), y(M), S(M, T)]);
  }
  function S(M, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: T })) ?? [];
  }
  function v(M) {
    const T = M.present ? e.color : void 0;
    return b("div", Y(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function y(M) {
    var _a3;
    return b("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const T = vn(a, ":date", (L) => ({ nativeEvent: L, ...M }));
    return p(ky, Y({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, T), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function k() {
    return b("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return b("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return b("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ve(i.bodyHeight.value) } }, [w()]);
  }
  function w() {
    var _a3;
    return b("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? g()]);
  }
  function g() {
    return i.days.value.map((M, T) => {
      const L = vn(a, ":time", (z) => ({ nativeEvent: z, ...i.getSlotScope(i.getTimestampAtEvent(z, M)) }));
      return b("div", Y({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, L), [x(T), C(M)]);
    });
  }
  function C(M) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(M))) ?? [];
  }
  function x(M) {
    return i.intervals.value[M].map(A);
  }
  function A(M) {
    var _a3;
    const T = ve(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
    return b("div", { class: "v-calendar-daily__day-interval", key: M.time, style: me([{ height: T }, L(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = ve(e.intervalWidth), T = vn(a, ":interval", (L) => ({ nativeEvent: L, ...i.getTimestampAtEvent(L, i.parsedStart.value) }));
    return b("div", Y({ class: "v-calendar-daily__intervals-body", style: { width: M } }, T), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const T = ve(e.intervalHeight), L = e.shortIntervals, Z = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, L) : void 0;
    return b("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: T } }, [b("div", { class: "v-calendar-daily__interval-text" }, [Z])]);
  }
  return Ct(r), ne(() => at(b("div", { class: te(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), k()]), [[Yo, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function jI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function My(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : jI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const UI = qt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Mr(), ...Dy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Ey(e), o = _(() => My(e.categories, e.categoryText));
  function i(y, h) {
    const k = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...y, category: k };
  }
  function r(y) {
    return b("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(y, i(y, h)))]);
  }
  function s(y, h) {
    var _a3, _b2;
    const k = typeof h.category == "object" ? h.category.categoryName : h.category, I = vn(a, ":dayCategory", () => i(l.getSlotScope(y) || y, h.category));
    return b("div", Y({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(k), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(y) {
    return b("div", { class: "v-calendar-category__category" }, [y === null ? e.categoryForInvalid : y]);
  }
  function c() {
    const y = [];
    return l.days.value.forEach((h, k) => {
      const I = new Array(o.value.length || 1);
      I.fill(h), y.push(...I.map((V, w) => d(V, k, w)));
    }), y;
  }
  function d(y, h, k) {
    const I = o.value[k], V = vn(a, ":time", (w) => l.getSlotScope(l.getTimestampAtEvent(w, y)));
    return b("div", Y({ key: y.date + "-" + k, class: ["v-calendar-daily__day", l.getRelativeClasses(y)] }, V), [f(h, I), S(y, I)]);
  }
  function f(y, h) {
    return l.intervals.value[y].map((k) => m(k, h));
  }
  function m(y, h) {
    var _a3;
    const k = ve(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return b("div", { key: y.time, class: "v-calendar-daily__day-interval", style: me([{ height: k }, I({ ...y, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  function S(y, h) {
    return b("div", { class: "v-calendar-category__columns" }, [v(y, h)]);
  }
  function v(y, h) {
    var _a3;
    const k = vn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, y)), h));
    return b("div", Y({ class: "v-calendar-category__column" }, k), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  return ne(() => p(go, Y({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), Sv = qt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Dl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Jc(e), o = wr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const w = i.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return tr(g, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, w);
  }), s = _(() => {
    const w = l.times.today, g = l.getStartOfWeek(w), C = l.getEndOfWeek(w);
    return tr(g, C, w, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : _o(l.locale.current.value, (w, g) => ({ timeZone: "UTC", month: g ? "short" : "long" })));
  function c(w) {
    const g = Vt(w);
    return g < Vt(l.parsedStart.value) || g > Vt(l.parsedEnd.value);
  }
  function d() {
    return b("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const w = s.value.map(m);
    return e.showWeek && w.unshift(b("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), w;
  }
  function m(w, g) {
    const C = c(r.value[g]), x = w.present ? e.color : void 0;
    return b("div", Y(l.getColorProps({ text: x }), { key: w.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(w, C)], role: "columnheader" }), [l.weekdayFormatter.value(w, e.shortWeekdays)]);
  }
  function S() {
    const w = r.value, g = l.parsedWeekdays.value.length, C = [];
    for (let x = 0; x < w.length; x += g) C.push(v(w.slice(x, x + g), y(w[x])));
    return C;
  }
  function v(w, g) {
    const C = w.map((x, A) => k(x, A, w));
    return e.showWeek && C.unshift(h(g)), b("div", { key: w[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function y(w) {
    return l.getWeekNumber(w);
  }
  function h(w) {
    return b("div", { class: "v-calendar-weekly__weeknumber" }, [b("small", null, [String(w)])]);
  }
  function k(w, g, C) {
    var _a3;
    const x = c(w), A = vn(a, ":day", (P) => ({ nativeEvent: P, ...w }));
    return b("div", Y({ key: w.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(w, x)], role: "cell" }, A), [I(w), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: x, index: g, week: C, ...w })]);
  }
  function I(w) {
    var _a3;
    return b("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, w)) ?? V(w)]);
  }
  function V(w) {
    const g = w.day === 1 && e.showMonthOnFirst, C = vn(a, ":date", (x) => ({ nativeEvent: x, ...w }));
    return p(ky, Y({ active: w.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, C), { default: () => [g ? u.value(w, e.shortMonths) + " " + l.dayFormatter.value(w, false) : l.dayFormatter.value(w, false)] });
  }
  return ne(() => b("div", { class: te(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (w) => w.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), GI = 864e5;
function By(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function Pn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function kv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function $y(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Ry(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Ly(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + GI, e.endTimestampIdentifier)];
}
function YI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (Pn(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? $y(s.event) : Ry(s.event);
      if (Pn(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function Fy(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Fa(n), r = By(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? $y(s.event) : Ry(s.event);
      t.groups.length > 0 && !Pn(u, c, t.min, t.max, l) && (kv(t.groups), t.reset());
      let d = YI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), kv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const wv = 100, KI = (e, t, n) => {
  const a = Fy(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * wv / u.columnCount, u.width = wv / u.columnCount;
    }), s;
  };
}, Vi = 100, qI = 5, XI = 1.7, ZI = (e, t, n) => {
  const a = Fy(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Fa(l), u = By(o, s), c = lP(u, s);
    for (const d of c) {
      const f = [];
      for (const m of d.visuals) {
        const S = oP(m, s), v = tP(S, f);
        if (v === false) {
          const y = nP(S, f);
          y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), S.index = y.index + 1, y.children.push(S));
        } else {
          const [y] = xv(S, f, v - 1, v - 1), h = xv(S, f, v + 1, v + f.length, true);
          S.children = h, S.index = v, y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), y.children.push(S));
          for (const k of h) k.parent === y && (k.parent = S), k.index - S.index <= 1 && S.sibling && Pn(S.start, $i(S.start, n), k.start, k.end) && (k.sibling = true);
        }
        f.push(S);
      }
      JI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function JI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Oy(n) + 1, i = l ? l.visual.left : 0, r = Vi - i, s = Math.min(qI, Vi / o), u = QI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = aP(n, e, t) ? Vi - a.left : Math.min(Vi - a.left, d * XI);
  }
}
function QI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function eP(e, t) {
  const n = [];
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function tP(e, t) {
  const n = eP(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function xv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && Pn(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function nP(e, t) {
  let n = null;
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function aP(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && Pn(e.start, $i(e.start, n), a.start, a.end)) return false;
  return true;
}
function lP(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = Ly(a.event, t);
    let i = false;
    for (const r of n) if (Pn(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function oP(e, t) {
  const [n, a] = Ly(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function Oy(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Oy(n);
    a > t && (t = a);
  }
  return t;
}
function $i(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const Ny = { stack: ZI, column: KI };
function iP(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ia(i, true), u = r ? ia(r, true) : s, c = bv(i) ? pv(s, l) : s, d = bv(r) ? pv(u, l) : u, f = Vt(c), m = Fa(c), S = Vt(d), v = c.hasTime ? 0 : 2359, y = Fa(d) + v, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: m, end: d, endIdentifier: S, endTimestampIdentifier: y, allDay: h, index: t, category: o };
}
function Qc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function rP(e, t, n) {
  if (n) {
    const a = vu(nn(t), n[0]), l = vu(nn(t), n[1]), o = e.startTimestampIdentifier < Fa(l), i = e.endTimestampIdentifier > Fa(a);
    return o && i;
  }
  return Qc(e, Vt(t));
}
function sP(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Cv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Qc(e, n);
}
function uP(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const cP = 100, dP = 95, fP = H({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in Ny || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function vP(e, t, n) {
  const a = Jc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = _(() => e.events ? e.events.map((T, L) => iP(T, L, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (T, L) => T.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Ny[e.eventOverlapMode]), m = _(() => a.effectiveWeekdays.value);
  function S(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const v = X([]);
  function y() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, L = h();
    for (const z in L) {
      const { parent: O, events: Z, more: J } = L[z];
      if (!J) break;
      const F = O.getBoundingClientRect(), G = Z.length - 1, W = Z.map((j) => ({ event: j, bottom: j.getBoundingClientRect().bottom })).sort((j, ie) => j.bottom - ie.bottom);
      let N = 0;
      for (let j = 0; j <= G; j++) {
        const ie = W[j].bottom;
        (j === G ? ie > F.bottom : ie + T > F.bottom) && (W[j].event.style.display = "none", N++);
      }
      N ? (J.style.display = "", J.innerHTML = a.locale.t(e.eventMoreText, N)) : J.style.display = "none";
    }
  }
  function h() {
    const T = {}, L = v.value;
    return !L || !L.length || L.forEach((z) => {
      const O = z.getAttribute("data-date");
      z.parentElement && O && (O in T || (T[O] = { parent: z.parentElement, more: null, events: [] }), z.getAttribute("data-more") ? T[O].more = z : (T[O].events.push(z), z.style.display = ""));
    }), T;
  }
  function k(T, L) {
    let { event: z } = T;
    const O = e.eventHeight || 0, Z = e.eventMarginBottom || 0, J = Vt(L), F = L.week, G = J === z.startIdentifier;
    let W = J === z.endIdentifier, N = dP;
    if (!o.value) for (let ie = L.index + 1; ie < F.length; ie++) {
      const be = Vt(F[ie]);
      if (z.endIdentifier >= be) N += cP, W = W || be === z.endIdentifier;
      else {
        W = true;
        break;
      }
    }
    return V(z, { eventParsed: z, day: L, start: G, end: W, timed: false }, false, { class: ["v-event", { "v-event-start": G, "v-event-end": W }], style: { height: `${O}px`, width: `${N}%`, marginBottom: `${Z}px` }, "data-date": L.date });
  }
  function I(T, L) {
    let { event: z, left: O, width: Z } = T;
    const J = L.timeDelta(z.start, L), F = L.timeDelta(z.end, L);
    if (F === false || J === false || F < 0 || J >= 1 || sP(z, L)) return false;
    const G = Vt(L), W = z.startIdentifier >= G, N = z.endIdentifier > G, j = L.timeToY(z.start, L), ie = L.timeToY(z.end, L), be = Math.max(e.eventHeight || 0, ie - j);
    return V(z, { eventParsed: z, day: L, start: W, end: N, timed: true }, true, { class: "v-event-timed", style: { top: `${j}px`, height: `${be}px`, left: `${O}%`, width: `${Z}%` } });
  }
  function V(T, L, z, O) {
    const Z = t.event, J = c.value(T.input), F = S(T.input), G = T.start.hour < 12 && T.end.hour >= 12, W = LI(T.start, T.end) <= u.value, N = (de, Pe) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: de.minute > 0 ? "numeric" : void 0 })(de, true), j = () => N(T.start) + " - " + N(T.end), ie = () => {
      const de = d.value(T, z);
      if (T.start.hasTime) if (z) {
        const Pe = j(), xe = W ? ", " : b("br", null, null);
        return b("span", { class: "v-event-summary" }, [b("strong", null, [de]), xe, Pe]);
      } else {
        const Pe = N(T.start);
        return b("span", { class: "v-event-summary" }, [b("strong", null, [Pe]), Ke(" "), de]);
      }
      return b("span", { class: "v-event-summary" }, [de]);
    }, be = { ...L, event: T.input, outside: L.day.outside, singline: W, overlapsNoon: G, formatTime: N, timeSummary: j, eventSummary: ie }, ae = vn(n, ":event", (de) => ({ ...be, nativeEvent: de }));
    return at(b("div", Y(a.getColorProps({ text: J, background: F }), ae, O, { ref_for: true, ref: v }), [(Z == null ? void 0 : Z(be)) ?? w(ie)]), [[Rt, e.eventRipple ?? true]]);
  }
  function w(T) {
    return b("div", { class: "pl-1" }, [T()]);
  }
  function g(T) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return b("div", { style: { height: `${L}px` }, "data-date": T.date, ref_for: true, ref: v }, null);
  }
  function C(T) {
    const L = e.eventHeight || 0, z = e.eventMarginBottom || 0, O = vn(n, ":more", (Z) => ({ nativeEvent: Z, ...T }));
    return at(b("div", Y({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${z}px` }, ref_for: true, ref: v }, O), null), [[Rt, e.eventRipple ?? true]]);
  }
  function x() {
    const T = a.days.value, L = Vt(T[0]), z = Vt(T[T.length - 1]);
    return s.value.filter((O) => uP(O, L, z));
  }
  function A(T, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === T.category || typeof T.category == "string" && L === T.category || typeof T.category != "string" && L === null;
  }
  function P(T) {
    const L = Vt(T), z = m.value[0];
    return s.value.filter((O) => Cv(O, T, L, z));
  }
  function E(T) {
    const L = Vt(T), z = m.value[0];
    return s.value.filter((O) => O.allDay && (o.value ? Qc(O, L) : Cv(O, T, L, z)) && A(O, T.category));
  }
  function D(T) {
    return s.value.filter((L) => !L.allDay && rP(L, T, T.intervalRange) && A(L, T.category));
  }
  function M() {
    if (l.value) return { ...t };
    const T = f.value(s.value, m.value[0], u.value), L = (O) => !!O, z = (O, Z, J, F) => {
      const G = Z(O), W = T(O, G, F, o.value);
      if (F) return W.map((j) => J(j, O)).filter(L);
      const N = [];
      return W.forEach((j, ie) => {
        for (; N.length < j.column; ) N.push(g(O));
        const be = J(j, O);
        be && N.push(be);
      }), N;
    };
    return { ...t, day: (O) => {
      let Z = z(O, P, k, false);
      if (Z && Z.length > 0 && e.eventMore && Z.push(C(O)), t.day) {
        const J = t.day(O);
        J && (Z = Z ? Z.concat(J) : J);
      }
      return Z;
    }, "day-header": (O) => {
      let Z = z(O, E, k, false);
      if (t["day-header"]) {
        const J = t["day-header"](O);
        J && (Z = Z ? Z.concat(J) : J);
      }
      return Z;
    }, "day-body": (O) => {
      const Z = z(O, D, I, true);
      let J = [b("div", { class: "v-event-timed-container" }, [Z])];
      if (t["day-body"]) {
        const F = t["day-body"](O);
        F && (J = J.concat(F));
      }
      return J;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: m, categoryMode: o, eventColorFunction: S, eventsRef: v, updateEventVisibility: y, getEventsMap: h, genDayEvent: k, genTimedEvent: I, genEvent: V, genName: w, genPlaceholder: g, genMore: C, getVisibleEvents: x, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const mP = Q()({ name: "VCalendar", directives: { vResize: Yo }, props: { modelValue: { type: [String, Number, Date], validate: Ol }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Mr(), ...fP() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = X(), i = vP(e, n, a), r = X(null), s = X(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => My(e.categories, e.categoryText)), d = _(() => {
    const g = i.parsedValue.value;
    let C = null, x = e.maxDays, A = c.value, P = g, E = g;
    switch (e.type) {
      case "month":
        C = Sv, P = _y(g), E = Vy(g);
        break;
      case "week":
        C = go, P = i.getStartOfWeek(g), E = i.getEndOfWeek(g), x = 7;
        break;
      case "day":
        C = go, x = 1;
        break;
      case "4day":
        C = go, E = Ka(nn(E), Ta, 3), In(E), x = 4;
        break;
      case "custom-weekly":
        C = Sv, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = go, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = UI, E = Ka(nn(E), Ta, D), In(E), x = D, A = w(A);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: x, categories: A };
  }), f = _(() => i.effectiveWeekdays.value), m = _(() => e.type === "category"), S = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), v = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), y = _(() => {
    const { start: g, end: C } = d.value, x = g.year !== C.year, A = x || g.month !== C.month;
    return x ? v.value(g, true) + " " + g.year + " - " + v.value(C, true) + " " + C.year : A ? v.value(g, true) + " - " + v.value(C, true) + " " + C.year : S.value(g, false) + " " + g.year;
  });
  function h() {
    const { start: g, end: C } = d.value;
    (!r.value || !s.value || g.date !== r.value.date || C.date !== s.value.date) && (r.value = g, s.value = C, l("change", { start: g, end: C }));
  }
  function k() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = nn(i.parsedValue.value), x = g > 0, A = x ? Ta : Ay, P = x ? wI : Dr;
    let E = x ? g : -g;
    for (; --E >= 0; ) switch (e.type) {
      case "month":
        C.day = P, A(C);
        break;
      case "week":
        Ka(C, A, Aa);
        break;
      case "day":
        Ka(C, A, 1);
        break;
      case "4day":
        Ka(C, A, 4);
        break;
      case "category":
        Ka(C, A, u.value);
        break;
    }
    Er(C), In(C), rl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", mu(C)) : typeof e.modelValue == "number" ? l("update:modelValue", mu(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function I() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    k(g);
  }
  function V() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    k(-g);
  }
  function w(g) {
    if (!i.noEvents.value) {
      const C = g.reduce((x, A, P) => (typeof A == "object" && A.categoryName ? x[A.categoryName] = { index: P, count: 0 } : typeof A == "string" && (x[A] = { index: P, count: 0 }), x), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let x = g.length;
        i.parsedEvents.value.forEach((A) => {
          let P = A.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: x++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const x in C) C[x].count === 0 && delete C[x];
      g = g.filter((x) => typeof x == "object" && x.categoryName ? C.hasOwnProperty(x.categoryName) : typeof x == "string" ? C.hasOwnProperty(x) : false);
    }
    return g;
  }
  return ue(d, h), Ct(() => {
    i.updateEventVisibility(), h();
  }), fr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), ne(() => {
    const { start: g, end: C, maxDays: x, component: A, categories: P } = d.value;
    return at(p(A, Y({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: g.date, end: C.date, maxDays: x, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Yo, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: m, title: y, monthLongFormatter: S, monthShortFormatter: v, parsedCategories: c, checkChange: h, move: k, next: I, prev: V, getCategoryList: w }, o);
} }), gP = H({ ...pe(), ...Me() }, "VCardActions"), Hy = Q()({ name: "VCardActions", props: gP(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { slim: true, variant: "text" } }), ne(() => p(e.tag, { class: te(["v-card-actions", e.class]), style: me(e.style) }, n)), {};
} }), hP = H({ opacity: [Number, String], ...pe(), ...Me() }, "VCardSubtitle"), zy = Q()({ name: "VCardSubtitle", props: hP(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(e.tag, { class: te(["v-card-subtitle", e.class]), style: me([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Wy = ga("v-card-title"), yP = H({ appendAvatar: String, appendIcon: _e, prependAvatar: String, prependIcon: _e, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...pe(), ...gt(), ...Me() }, "VCardItem"), jy = Q()({ name: "VCardItem", props: yP(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return p(e.tag, { class: te(["v-card-item", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [l && b("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : b(he, null, [e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), b("div", { class: "v-card-item__content" }, [r && p(Wy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Ie(e.title)];
      } }), s && p(zy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Ie(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && b("div", { key: "append", class: "v-card-item__append" }, [n.append ? p(Be, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : b(he, null, [e.appendIcon && p(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), bP = H({ opacity: [Number, String], ...pe(), ...Me() }, "VCardText"), Uy = Q()({ name: "VCardText", props: bP(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => p(e.tag, { class: te(["v-card-text", e.class]), style: me([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), pP = H({ appendAvatar: String, appendIcon: _e, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "elevated" }) }, "VCard"), SP = Q()({ name: "VCard", directives: { vRipple: Rt }, props: pP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = Xt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ba(e), { densityClasses: u } = Lt(e), { dimensionStyles: c } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: m } = Oa(e), { positionClasses: S } = to(e), { roundedClasses: v } = dt(e), y = ui(e, n), h = re(void 0);
  return ue(() => e.loading, (k, I) => {
    h.value = !k && typeof I == "string" ? I : typeof k == "boolean" ? void 0 : k;
  }, { immediate: true }), ne(() => {
    const k = e.link !== false && y.isLink.value, I = !e.disabled && e.link !== false && (e.link || y.isClickable.value), V = k ? "a" : e.tag, w = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = w || g, x = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || A || x, D = !!(a.text || e.text != null);
    return at(p(V, Y(y.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, S.value, v.value, s.value, e.class], style: [r.value, c.value, m.value, { "--v-card-height": ve(e.height) }, e.style], onClick: I && y.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && b("div", { key: "image", class: "v-card__image" }, [a.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : p(da, { key: "image-img", cover: true, src: e.image }, null)]), p(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && p(jy, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && p(Uy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && p(Hy, null, { default: a.actions }), ya(I, "v-card")];
    } }), [[Rt, I && e.ripple]]);
  }), {};
} }), kP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function wP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function xP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), kP(t);
}
function CP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function _P() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => wP(n, t), touchend: (n) => xP(n, t), touchmove: (n) => CP(n, t) };
}
function VP(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = _P(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, _g(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function IP(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  _g(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const nr = { mounted: VP, unmounted: IP }, Gy = Symbol.for("vuetify:v-window"), Yy = Symbol.for("vuetify:v-window-group"), Br = H({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...pe(), ...Me(), ...Ue() }, "VWindow"), sl = Q()({ name: "VWindow", directives: { vTouch: nr }, props: Br(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isRtl: l } = _t(), { t: o } = Qe(), i = Na(e, Yy), r = X(), s = _(() => l.value ? !e.reverse : e.reverse), u = re(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", x = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${g}${x}-transition`;
  }), d = re(0), f = X(void 0), m = _(() => i.items.value.findIndex((g) => i.selected.value.includes(g.id)));
  ue(m, (g, C) => {
    let x;
    const A = { left: 0, top: 0 };
    Je && C >= 0 && (x = pr(r.value), A.left = x == null ? void 0 : x.scrollLeft, A.top = x == null ? void 0 : x.scrollTop);
    const P = i.items.value.length, E = P - 1;
    P <= 2 ? u.value = g < C : g === E && C === 0 ? u.value = false : g === 0 && C === E ? u.value = true : u.value = g < C, Ee(() => {
      if (!Je || !x) return;
      x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" }), requestAnimationFrame(() => {
        if (!x) return;
        x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), rt(Gy, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const S = $(() => e.continuous || m.value !== 0), v = $(() => e.continuous || m.value !== i.items.value.length - 1);
  function y() {
    S.value && i.prev();
  }
  function h() {
    v.value && i.next();
  }
  const k = _(() => {
    const g = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    g.push(S.value ? n.prev ? n.prev({ props: C }) : p(ze, C, null) : b("div", null, null));
    const x = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return g.push(v.value ? n.next ? n.next({ props: x }) : p(ze, x, null) : b("div", null, null)), g;
  }), I = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? y() : h();
  }, right: () => {
    s.value ? h() : y();
  }, start: (C) => {
    let { originalEvent: x } = C;
    x.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function V(g) {
    (e.direction === "horizontal" && g.key === "ArrowLeft" || e.direction === "vertical" && g.key === "ArrowUp") && (g.preventDefault(), y(), Ee(() => {
      S.value ? w(0) : w(1);
    })), (e.direction === "horizontal" && g.key === "ArrowRight" || e.direction === "vertical" && g.key === "ArrowDown") && (g.preventDefault(), h(), Ee(() => {
      v.value ? w(1) : w(0);
    }));
  }
  function w(g) {
    var _a3;
    const C = k.value[g];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return ne(() => at(p(e.tag, { ref: r, class: te(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: me([e.style, { "--v-window-transition-duration": jn() ? null : ve(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [b("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && b("div", { class: te(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [k.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[nr, I.value]])), { group: i };
} }), PP = H({ color: String, cycle: Boolean, delimiterIcon: { type: _e, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Br({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), AP = Q()({ name: "VCarousel", props: PP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { t: l } = Qe(), o = X();
  let i = -1;
  ue(a, s), ue(() => e.interval, s), ue(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), Ct(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Ee(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Ee(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return ne(() => {
    const c = sl.filterProps(e);
    return p(sl, Y({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ve(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return b(he, null, [!e.hideDelimiters && b("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && p(Be, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((m, S) => {
        const v = { id: `carousel-item-${m.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"], onClick: () => f.select(m.id, true), onKeydown: (y) => u(y, f) };
        return n.item ? n.item({ props: v, item: m }) : p(ze, Y(m, v), null);
      })] })]), e.progress && p(_r, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), $r = H({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...pe(), ...Sl(), ...Oc() }, "VWindowItem"), ul = Q()({ name: "VWindowItem", directives: { vTouch: nr }, props: $r(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(Gy), l = Ma(e, Yy), { isBooted: o } = bl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = re(false), r = _(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !a || (i.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = ve((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(S) {
    i.value && Ee(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ve(S.clientHeight));
    });
  }
  const f = _(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: m } = Nc(e, l.isSelected);
  return ne(() => p(Kt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [at(b("div", { class: te(["v-window-item", l.selectedClass.value, e.class]), style: me(e.style) }, [m.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Mn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), TP = H({ ...fh(), ...$r() }, "VCarouselItem"), DP = Q()({ name: "VCarouselItem", inheritAttrs: false, props: TP(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ne(() => {
    const l = da.filterProps(e), o = ul.filterProps(e);
    return p(ul, Y({ class: ["v-carousel-item", e.class] }, o), { default: () => [p(da, Y(a, l), n)] });
  });
} }), EP = ga("v-code", "code"), MP = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...pe() }, "VColorPickerCanvas"), BP = qt({ name: "VColorPickerCanvas", props: MP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = re(false), l = X(), o = re(parseFloat(e.width)), i = re(parseFloat(e.height)), r = X({ x: 0, y: 0 }), s = $(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: k, y: I } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ze(k, 0, o.value) / o.value, v: 1 - Ze(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: h, y: k } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: ve(e.dotSize), height: ve(e.dotSize), transform: `translate(${ve(h - I)}, ${ve(k - I)})` };
  }), { resizeRef: d } = wn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: k, height: I } = h[0].contentRect;
    o.value = Math.round(k), i.value = Math.round(I);
  });
  function f(h, k, I) {
    const { left: V, top: w, width: g, height: C } = I;
    u.value = { x: Ze(h - V, 0, g), y: Ze(k - w, 0, C) };
  }
  function m(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (S(h), window.addEventListener("mousemove", S), window.addEventListener("mouseup", v), window.addEventListener("touchmove", S), window.addEventListener("touchend", v));
  }
  function S(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const k = u0(h);
    f(k.clientX, k.clientY, l.value.getBoundingClientRect());
  }
  function v() {
    window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", v), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", v);
  }
  function y() {
    var _a3;
    if (!l.value) return;
    const h = l.value, k = h.getContext("2d");
    if (!k) return;
    const I = k.createLinearGradient(0, 0, h.width, 0);
    I.addColorStop(0, "hsla(0, 0%, 100%, 1)"), I.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = I, k.fillRect(0, 0, h.width, h.height);
    const V = k.createLinearGradient(0, 0, 0, h.height);
    V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = V, k.fillRect(0, 0, h.width, h.height);
  }
  return ue(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, y, { immediate: true }), ue(() => [o.value, i.value], (h, k) => {
    y(), r.value = { x: u.value.x * h[0] / k[0], y: u.value.y * h[1] / k[1] };
  }, { flush: "post" }), ue(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Ct(() => y()), ne(() => b("div", { ref: d, class: te(["v-color-picker-canvas", e.class]), style: me(e.style), onMousedown: m, onTouchstartPassive: m }, [b("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && b("div", { class: te(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: me(c.value) }, null)])), {};
} });
function $P(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function RP(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Un(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Ks(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Hg(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Xa(t, ["r", "g", "b"]) ? n = Un(e) : Xa(t, ["h", "s", "l"]) ? n = Ks(e) : Xa(t, ["h", "s", "v"]) && (n = e), $P(n, !Xa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Bl = { h: 0, s: 0, v: 0, a: 1 }, gu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Un, from: li }, LP = { ...gu, inputs: (_a2 = gu.inputs) == null ? void 0 : _a2.slice(0, 3) }, hu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Ks, from: fc }, FP = { ...hu, inputs: hu.inputs.slice(0, 3) }, Ky = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Hg, from: B0 }, OP = { ...Ky, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, nl = { rgb: LP, rgba: gu, hsl: FP, hsla: hu, hex: OP, hexa: Ky }, NP = (e) => {
  let { label: t, ...n } = e;
  return b("div", { class: "v-color-picker-edit__input" }, [b("input", Tp(Zm(n)), null), b("span", null, [t])]);
}, HP = H({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, ...pe() }, "VColorPickerEdit"), zP = qt({ name: "VColorPickerEdit", props: HP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = _(() => e.modes.map((i) => ({ ...nl[i], name: i }))), o = _(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (m) => {
        const S = m.target;
        S && n("update:color", i.from(c(r ?? i.to(Bl), S.value)));
      } };
    });
  });
  return ne(() => {
    var _a3;
    return b("div", { class: te(["v-color-picker-edit", e.class]), style: me(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => p(NP, i, null)), l.value.length > 1 && p(ze, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), ed = Symbol.for("vuetify:v-slider");
function yu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function WP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const qy = H({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...it(), ...xt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Xy = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(Sf(a.value), Sf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ze(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Zy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = ao(t), { isRtl: s } = _t(), u = $(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: m, step: S, decimals: v, roundValue: y } = n, h = _(() => parseInt(t.thumbSize, 10)), k = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (m.value - f.value) / S.value), w = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), x = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = re(false), P = re(0), E = X(), D = X();
  function M(ae) {
    var _a3;
    const de = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!de) return;
    const Pe = t.direction === "vertical", xe = Pe ? "top" : "left", ge = Pe ? "height" : "width", R = Pe ? "clientY" : "clientX", { [xe]: B, [ge]: K } = de.getBoundingClientRect(), oe = WP(ae, R);
    let le = Ze((oe - B - P.value) / K) || 0;
    return (Pe ? d.value : d.value !== s.value) && (le = 1 - le), y(f.value + le * (m.value - f.value));
  }
  const T = (ae) => {
    const de = M(ae);
    de != null && o({ value: de }), A.value = false, P.value = 0;
  }, L = (ae) => {
    const de = M(ae);
    D.value = i(ae), D.value && (A.value = true, D.value.contains(ae.target) ? P.value = yu(ae, D.value, t.direction) : (P.value = 0, de != null && l({ value: de })), de != null && a({ value: de }), Ee(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, z = { passive: true, capture: true };
  function O(ae) {
    const de = M(ae);
    de != null && l({ value: de });
  }
  function Z(ae) {
    ae.stopPropagation(), ae.preventDefault(), T(ae), window.removeEventListener("mousemove", O, z), window.removeEventListener("mouseup", Z);
  }
  function J(ae) {
    var _a3;
    T(ae), window.removeEventListener("touchmove", O, z), (_a3 = ae.target) == null ? void 0 : _a3.removeEventListener("touchend", J);
  }
  function F(ae) {
    var _a3;
    L(ae), window.addEventListener("touchmove", O, z), (_a3 = ae.target) == null ? void 0 : _a3.addEventListener("touchend", J, { passive: false });
  }
  function G(ae) {
    ae.button === 0 && (ae.preventDefault(), L(ae), window.addEventListener("mousemove", O, z), window.addEventListener("mouseup", Z, { passive: false }));
  }
  bt(() => {
    window.removeEventListener("touchmove", O), window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", Z);
  });
  const W = (ae) => {
    const de = (ae - f.value) / (m.value - f.value) * 100;
    return Ze(isNaN(de) ? 0 : de, 0, 100);
  }, N = $(() => t.showTicks), j = _(() => N.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((ae) => ({ value: ae, position: W(ae), label: ae.toString() })) : Object.keys(t.ticks).map((ae) => ({ value: parseFloat(ae), position: W(parseFloat(ae)), label: t.ticks[ae] })) : V.value !== 1 / 0 ? Hn(V.value + 1).map((ae) => {
    const de = f.value + ae * S.value;
    return { value: de, position: W(de) };
  }) : [] : []), ie = _(() => j.value.some((ae) => {
    let { label: de } = ae;
    return !!de;
  })), be = { activeThumbRef: D, color: $(() => t.color), decimals: v, disabled: r.isDisabled, direction: $(() => t.direction), elevation: $(() => t.elevation), hasLabels: ie, isReversed: u, indexFromEnd: d, min: f, max: m, mousePressed: A, noKeyboard: $(() => t.noKeyboard), numTicks: V, onSliderMousedown: G, onSliderTouchstart: F, parsedTicks: j, parseMouseMove: M, position: W, readonly: r.isReadonly, rounded: $(() => t.rounded), roundValue: y, showTicks: N, startOffset: P, step: S, thumbSize: h, thumbColor: w, thumbLabelColor: g, thumbLabel: $(() => t.thumbLabel), ticks: $(() => t.ticks), tickSize: k, trackColor: C, trackContainerRef: E, trackFillColor: x, trackSize: I, vertical: c };
  return rt(ed, be), be;
}, jP = H({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...pe() }, "VSliderThumb"), bu = Q()({ name: "VSliderThumb", directives: { vRipple: Rt }, props: jP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(ed), { isRtl: o, rtlClasses: i } = _t();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: m, thumbLabel: S, direction: v, isReversed: y, vertical: h, readonly: k, elevation: I, mousePressed: V, decimals: w, indexFromEnd: g } = l, C = re(false), x = re(false), A = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = It(A), { textColorClasses: E, textColorStyles: D } = Et(u), { backgroundColorClasses: M, backgroundColorStyles: T } = Xe(c), { pageup: L, pagedown: z, end: O, home: Z, left: J, right: F, down: G, up: W } = Ws, N = [L, z, O, Z, J, F, G, W], j = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ie(ae, de) {
    if (e.noKeyboard || f.value || !N.includes(ae.key)) return;
    ae.preventDefault();
    const Pe = d.value || 0.1, xe = (s.value - r.value) / Pe;
    if ([J, F, G, W].includes(ae.key)) {
      const R = (h.value ? [o.value ? J : F, y.value ? G : W] : g.value !== o.value ? [J, W] : [F, W]).includes(ae.key) ? 1 : -1, B = ae.shiftKey ? 2 : ae.ctrlKey ? 1 : 0;
      R === -1 && de === s.value && !B && !Number.isInteger(xe) ? de = de - xe % 1 * Pe : de = de + R * Pe * j.value[B];
    } else if (ae.key === Z) de = r.value;
    else if (ae.key === O) de = s.value;
    else {
      const ge = ae.key === z ? 1 : -1;
      de = de - ge * Pe * (xe > 100 ? xe / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, de));
  }
  function be(ae) {
    const de = ie(ae, e.modelValue);
    de != null && (x.value = false, a("update:modelValue", de));
  }
  return ue(() => e.focused, (ae) => {
    ae && (x.value = false);
  }), ne(() => {
    const ae = ve(g.value ? 100 - e.position : e.position, "%"), de = S.value === "always" || S.value === true && e.focused || S.value === "hover" && (C.value || e.focused && !x.value);
    return b("div", { class: te(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: me([{ "--v-slider-thumb-position": ae, "--v-slider-thumb-size": ve(m.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": v.value, onKeydown: k.value ? void 0 : be, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, x.value = true;
    } }, [b("div", { class: te(["v-slider-thumb__surface", E.value, P.value]), style: me(D.value) }, null), at(b("div", { class: te(["v-slider-thumb__ripple", E.value]), style: me(D.value) }, null), [[Rt, e.ripple, null, { circle: true, center: true }]]), p(xc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [at(b("div", { class: "v-slider-thumb__label-container" }, [b("div", { class: te(["v-slider-thumb__label", M.value]), style: me(T.value) }, [b("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? w.value : 1)]), b("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Mn, de]])];
    } })]);
  }), {};
} }), UP = H({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...pe() }, "VSliderTrack"), Jy = Q()({ name: "VSliderTrack", props: UP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = We(ed);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: m, max: S, indexFromEnd: v } = a, { roundedClasses: y } = dt(i), { backgroundColorClasses: h, backgroundColorStyles: k } = Xe(c), { backgroundColorClasses: I, backgroundColorStyles: V } = Xe(u), w = _(() => `inset-${f.value ? "block" : "inline"}-${v.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [w.value]: "0%", [g.value]: "100%" })), x = _(() => e.stop - e.start), A = _(() => ({ [w.value]: ve(e.start, "%"), [g.value]: ve(x.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const T = D.value !== m.value && D.value !== S.value ? ve(D.position, "%") : void 0;
    return b("div", { key: D.value, class: te(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === m.value, "v-slider-track__tick--last": D.value === S.value }]), style: { [w.value]: T } }, [(D.label || n["tick-label"]) && b("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return ne(() => b("div", { class: te(["v-slider-track", y.value, e.class]), style: me([{ "--v-slider-track-size": ve(d.value), "--v-slider-tick-size": ve(s.value) }, e.style]) }, [b("div", { class: te(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), b("div", { class: te(["v-slider-track__fill", h.value]), style: { ...A.value, ...k.value } }, null), r.value && b("div", { class: te(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), GP = H({ ...fi(), ...qy(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), pu = Q()({ name: "VSlider", inheritAttrs: false, props: GP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = X(), i = X(), { rtlClasses: r } = _t(), s = Xy(e), u = we(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: m, onSliderMousedown: S, onSliderTouchstart: v, trackContainerRef: y, position: h, hasLabels: k, disabled: I, readonly: V, noKeyboard: w } = Zy({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: E } = P;
    const D = m(E);
    !I.value && !V.value && (u.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: E } = P;
    !I.value && !V.value && (u.value = m(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: g, focus: C, blur: x } = pa(e), A = _(() => h(u.value));
  return ne(() => {
    const P = Nt.filterProps(e), [E, D] = qn(l), M = !!(e.label || n.label || n.prepend);
    return p(Nt, Y({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || k.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: M ? (T) => {
      var _a3, _b2;
      return b(he, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? p(no, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: L, messagesId: z } = T;
      return b("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : S, onTouchstartPassive: V.value ? void 0 : v }, [b("input", { id: L.value, name: e.name || L.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), p(Jy, { ref: y, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), p(bu, Y({ ref: o, "aria-describedby": z.value, focused: g.value, noKeyboard: w.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (O) => u.value = O, position: A.value, elevation: e.elevation, onFocus: C, onBlur: x, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Qy = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: _e, default: "$eyeDropper" }, ...pe() }, "VColorPickerPreview"), YP = qt({ name: "VColorPickerPreview", props: Qy(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = new AbortController(), o = $(() => !e.disabled && !e.readonly);
  vr(() => l.abort());
  async function i() {
    if (!yf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = li(fn(s.sRGBHex));
      n("update:color", { ...e.color ?? Bl, ...u });
    } catch {
    }
  }
  return ne(() => {
    var _a3, _b2;
    return b("div", { class: te(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: me(e.style) }, [yf && !e.hideEyeDropper && b("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [p(ze, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), b("div", { class: "v-color-picker-preview__dot" }, [b("div", { style: { background: Fg(e.color ?? Bl) } }, null)]), b("div", { class: "v-color-picker-preview__sliders" }, [p(pu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && p(pu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), KP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, qP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, XP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, ZP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, JP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, QP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, eA = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, tA = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, nA = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, aA = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, lA = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, oA = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, iA = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, rA = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, sA = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, uA = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, cA = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, dA = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, fA = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, vA = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, mA = { red: KP, pink: qP, purple: XP, deepPurple: ZP, indigo: JP, blue: QP, lightBlue: eA, cyan: tA, teal: nA, green: aA, lightGreen: lA, lime: oA, yellow: iA, amber: rA, orange: sA, deepOrange: uA, brown: cA, blueGrey: dA, grey: fA, shades: vA }, gA = H({ swatches: { type: Array, default: () => hA(mA) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...pe() }, "VColorPickerSwatches");
function hA(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const yA = qt({ name: "VColorPickerSwatches", props: gA(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = $(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ne(() => b("div", { class: te(["v-color-picker-swatches", e.class]), style: me([{ maxHeight: ve(e.maxHeight) }, e.style]) }, [b("div", null, [e.swatches.map((o) => b("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = fn(i), s = li(r), u = Lg(r);
    return b("div", { class: te(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [b("div", { style: { background: u } }, [e.color && Dt(e.color, s) ? p(Ye, { size: "x-small", icon: "$success", color: F0(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), bA = ga("v-picker-title"), Rr = H({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Hc() }, "VPicker"), Xl = Q()({ name: "VPicker", props: Rr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color);
  return ne(() => {
    const o = Ra.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return p(Ra, Y(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && b("div", { key: "header", class: te(["v-picker__header-wrapper", a.value]), style: me([l.value]) }, [i && p(bA, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && b("div", { class: "v-picker__header" }, [n.header()])]), b("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && p(Be, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [b("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), pA = H({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Rr({ hideHeader: true }), ...tn(Qy(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), SA = qt({ name: "VColorPicker", props: pA(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "mode"), l = X(null), o = we(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = li(fn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? RP(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = _t();
  let s = true;
  ue(o, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (l.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, l.value = c.h, o.value = c;
  };
  return Jl(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), mt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), ne(() => {
    const c = Xl.filterProps(e);
    return p(Xl, Y(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Fg({ ...i.value ?? Bl, a: 1 }) }, e.style] }), { ...n, default: () => b(he, null, [!e.hideCanvas && p(BP, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && b("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && p(YP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && p(zP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && p(yA, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), kA = H({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...Yc({ hideNoData: true, returnObject: true }), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), wA = Q()({ name: "VCombobox", props: kA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = X(), i = re(false), r = re(true), s = re(false), u = X(), c = X(), d = re(-1);
  let f = false;
  const { items: m, transformIn: S, transformOut: v } = Bc(e), { textColorClasses: y, textColorStyles: h } = Et(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: k } = di(e), I = we(e, "modelValue", [], (q) => S(ot(q)), (q) => {
    const fe = v(q);
    return e.multiple ? fe : fe[0] ?? null;
  }), V = ao(e), w = $(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), x = re(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = re(null), P = _({ get: () => x.value, set: async (q) => {
    var _a4;
    if (x.value = q ?? "", q === null || q === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [_n(e, q)], Ee(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), q && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const fe = ye(q);
      fe.length > 1 && (ce(fe), x.value = "");
    }
    q || (d.value = -1), r.value = !q;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: M } = xl(e, m, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = _(() => e.hideSelected && A.value === null ? D.value.filter((q) => !I.value.some((fe) => fe.value === q.value)) : D.value), L = _(() => e.hideNoData && !T.value.length || V.isReadonly.value || V.isDisabled.value), z = we(e, "menu"), O = _({ get: () => z.value, set: (q) => {
    var _a4;
    z.value && !q && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || q && L.value || (z.value = q);
  } }), { menuId: Z, ariaExpanded: J, ariaControls: F } = Gc(e, O);
  ue(x, (q) => {
    f ? Ee(() => f = false) : i.value && !O.value && (O.value = true), n("update:search", q);
  }), ue(I, (q) => {
    var _a4;
    !e.multiple && !C.value && (x.value = ((_a4 = q[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const G = _(() => I.value.map((q) => q.value)), W = _(() => T.value.find((q) => q.type === "item" && !q.props.disabled)), N = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = W.value) == null ? void 0 : _a4.title)) && T.value.length > 0 && !r.value && !s.value;
  }), j = X(), ie = X(), be = X(), ae = Wc(j, o), { onTabKeydown: de } = jc({ groups: [{ type: "element", contentRef: ie }, { type: "list", contentRef: j, displayItemsCount: () => T.value.length }, { type: "element", contentRef: be }], onLeave: () => {
    var _a4;
    O.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Pe(q) {
    f = true, Ee(() => f = false), e.openOnClear && (O.value = true);
  }
  function xe() {
    L.value || (O.value = true);
  }
  function ge(q) {
    L.value || (i.value && (q.preventDefault(), q.stopPropagation()), O.value = !O.value);
  }
  function R(q) {
    var _a4, _b2;
    q.key === "Tab" && de(q), ((_a4 = j.value) == null ? void 0 : _a4.$el.contains(q.target)) && (jl(q) || q.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function B(q) {
    var _a4, _b2, _c2, _d2;
    if (r0(q) || V.isReadonly.value) return;
    const fe = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, Se = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(q.key) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (O.value = true), ["Escape"].includes(q.key) && (O.value = false), N.value && ["Enter", "Tab"].includes(q.key) && W.value && !I.value.some((ke) => {
      let { value: Ve } = ke;
      return Ve === W.value.value;
    }) && se(W.value), q.key === "ArrowDown" && N.value && ((_b2 = j.value) == null ? void 0 : _b2.focus("next")), q.key === "Enter" && P.value && (se(_n(e, P.value), true, true), C.value && (x.value = "")), ["Backspace", "Delete"].includes(q.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return se(I.value[0], false);
      if (~d.value) {
        q.preventDefault();
        const ke = d.value;
        se(I.value[d.value], false), d.value = ke >= Se - 1 ? Se - 2 : ke;
      } else q.key === "Backspace" && !P.value && (d.value = Se - 1);
      return;
    }
    if (e.multiple) if (q.key === "ArrowLeft") {
      if (d.value < 0 && fe && fe > 0) return;
      const ke = d.value > -1 ? d.value - 1 : Se - 1;
      I.value[ke] ? d.value = ke : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (q.key === "ArrowRight") {
      if (d.value < 0) return;
      const ke = d.value + 1;
      I.value[ke] ? d.value = ke : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && jl(q) && (d.value = -1);
  }
  function K(q) {
    var _a4;
    const fe = ((_a4 = q == null ? void 0 : q.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", Se = ye(fe);
    Se.length > 1 && e.multiple && (q.preventDefault(), ce(Se));
  }
  function oe() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function le() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function se(q) {
    let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!q || q.props.disabled)) if (e.multiple) {
      const ke = I.value.findIndex((Re) => (e.valueComparator || Dt)(Re.value, q.value)), Ve = fe ?? !~ke;
      if (~ke) {
        const Re = Ve ? [...I.value, q] : [...I.value];
        Re.splice(ke, 1), I.value = Re;
      } else Ve && (I.value = [...I.value, q]);
      e.clearOnSelect && (P.value = "");
    } else {
      const ke = fe !== false;
      I.value = ke ? [q] : [], (!r.value || e.alwaysFilter) && x.value && (A.value = x.value), x.value = ke && !C.value ? q.title : "", Ee(() => {
        O.value = Se, r.value = true;
      });
    }
  }
  function ye(q) {
    const Se = [`
`, ...e.delimiters ?? []].map(Yi).join("|");
    return q.split(new RegExp(`(?:${Se})+`));
  }
  async function ce(q) {
    for (let fe of q) fe = fe.trim(), fe && (se(_n(e, fe)), await Ee());
  }
  function U(q) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function ee(q) {
    s.value = false;
  }
  function Ce(q) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(q.relatedTarget)) && (i.value = true);
  }
  return ue(i, (q, fe) => {
    if (!(q || q === fe) && (d.value = -1, O.value = false, P.value)) {
      if (e.multiple) {
        se(_n(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((Se) => {
        let { title: ke } = Se;
        return ke === P.value;
      }) ? x.value = "" : se(_n(e, P.value));
    }
  }), ue(O, (q) => {
    if (!e.hideSelected && q && I.value.length && r.value) {
      const fe = T.value.findIndex((Se) => I.value.some((ke) => (e.valueComparator || Dt)(ke.value, Se.value)));
      Je && window.requestAnimationFrame(() => {
        var _a4;
        fe >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(fe));
      });
    }
    q && (A.value = null);
  }), ue(m, (q, fe) => {
    O.value || i.value && !fe.length && q.length && (O.value = true);
  }), ne(() => {
    const q = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), fe = I.value.length > 0, Se = Yn.filterProps(e), ke = { search: P, filteredItems: D.value };
    return p(Yn, Y({ ref: o }, Se, { modelValue: P.value, "onUpdate:modelValue": (Ve) => P.value = Ve, focused: i.value, "onUpdate:focused": (Ve) => i.value = Ve, validationValue: I.externalValue, counterValue: E.value, dirty: fe, class: ["v-combobox", { "v-combobox--active-menu": O.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: fe ? void 0 : e.placeholder, "onClick:clear": Pe, "onMousedown:control": xe, onKeydown: B, onPaste: K, onBlur: Ce, "aria-expanded": J.value, "aria-controls": F.value }), { ...a, default: (Ve) => {
      let { id: Re } = Ve;
      return b(he, null, [p(ql, Y({ id: Z.value, ref: u, modelValue: O.value, "onUpdate:modelValue": (Ge) => O.value = Ge, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: oe, onAfterLeave: le }, e.menuProps), { default: () => [p(Ra, { onFocusin: U, onKeydown: R }, { default: () => [a["menu-header"] && b("header", { ref: ie }, [a["menu-header"](ke)]), q && p(Kl, Y({ key: "combobox-list", ref: j, filterable: true, selected: G.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Ge) => Ge.preventDefault(), selectable: !!T.value.length, onFocusout: ee, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Re.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ae, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? p(xn, { key: "no-data", title: l(e.noDataText) }, null)), p(Tr, { ref: c, renderless: true, items: T.value, itemKey: "value" }, { default: (Ge) => {
          var _a5, _b3, _c3;
          let { item: Ne, index: ft, itemRef: lt } = Ge;
          const rn = Y(Ne.props, { ref: lt, key: Ne.value, active: N.value && Ne === W.value ? true : void 0, onClick: () => se(Ne, null), "aria-posinset": ft + 1, "aria-setsize": T.value.length });
          return Ne.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Ne.raw, index: ft })) ?? p(mn, Y(Ne.props, { key: `divider-${ft}` }), null) : Ne.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Ne.raw, index: ft })) ?? p(lo, Y(Ne.props, { key: `subheader-${ft}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Ne, index: ft, props: rn })) ?? p(xn, Y(rn, { role: "option" }), { prepend: (ka) => {
            let { isSelected: st } = ka;
            return b(he, null, [e.multiple && !e.hideSelected ? p(En, { key: Ne.value, modelValue: st, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (pn) => pn.preventDefault() }, null) : void 0, Ne.props.prependAvatar && p(hn, { image: Ne.props.prependAvatar }, null), Ne.props.prependIcon && p(Ye, { icon: Ne.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Ne.title : Uc("v-combobox", Ne.title, (_a6 = M(Ne)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && b("footer", { ref: be }, [a["menu-footer"](ke)])] })] }), I.value.map((Ge, Ne) => {
        function ft(st) {
          st.stopPropagation(), st.preventDefault(), se(Ge, false);
        }
        const lt = Y(fa.filterProps(Ge.props), { "onClick:close": ft, onKeydown(st) {
          st.key !== "Enter" && st.key !== " " || (st.preventDefault(), st.stopPropagation(), ft(st));
        }, onMousedown(st) {
          st.preventDefault(), st.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), rn = g.value ? !!a.chip : !!a.selection, ka = rn ? br(g.value ? a.chip({ item: Ge, index: Ne, props: lt }) : a.selection({ item: Ge, index: Ne })) : void 0;
        if (!(rn && !ka)) return b("div", { key: Ge.value, class: te(["v-combobox__selection", Ne === d.value && ["v-combobox__selection--selected", y.value]]), style: me(Ne === d.value ? h.value : {}) }, [g.value ? a.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: Ge.title } } }, { default: () => [ka] }) : p(fa, Y({ key: "chip", closable: w.value, size: "small", text: Ge.title, disabled: Ge.props.disabled }, lt), null) : ka ?? b("span", { class: "v-combobox__selection-text" }, [Ge.title, e.multiple && Ne < I.value.length - 1 && b("span", { class: "v-combobox__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ve = arguments.length, Re = new Array(Ve), Ge = 0; Ge < Ve; Ge++) Re[Ge] = arguments[Ge];
      return b(he, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Re), (!e.hideNoData || e.items.length) && e.menuIcon ? p(Ye, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ge, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && p(k, { key: "append-icon", name: "appendInner", color: Re[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: O, search: P, selectionIndex: d, filteredItems: D, select: se }, o);
} }), xA = H({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), CA = Q()({ name: "VConfirmEdit", props: xA(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = X();
  ct(() => {
    o.value = structuredClone(_f(l.value));
  });
  const { t: i } = Qe(), r = _(() => Dt(l.value, o.value));
  function s(v) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(v) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(_f(l.value)), n("cancel");
  }
  function m(v) {
    return b(he, null, [p(ze, Y({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, v), null), p(ze, Y({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, v), null)]);
  }
  let S = false;
  return ne(() => {
    var _a3;
    return b(he, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, m;
    } }), !e.hideActions && !S && m()]);
  }), { save: d, cancel: f, isPristine: r };
} }), eb = H({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), tb = Symbol.for("vuetify:datatable:expanded");
function Lr(e) {
  const t = $(() => e.expandOnClick), n = we(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = De(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => De(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = De(r.value);
    return [...n.value].some((u) => De(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return rt(tb, i), i;
}
function nb() {
  const e = We(tb);
  if (!e) throw new Error("foo");
  return e;
}
const td = H({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), ab = Symbol.for("vuetify:data-table-group");
function nd(e) {
  return { groupBy: we(e, "groupBy") };
}
function Fr(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = X(/* @__PURE__ */ new Set()), o = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
  function i(c) {
    return l.value.has(c.id);
  }
  function r(c) {
    const d = new Set(l.value);
    i(c) ? d.delete(c.id) : d.add(c.id), l.value = d;
  }
  function s(c) {
    function d(f) {
      const m = [];
      for (const S of f.items) "type" in S && S.type === "group" ? m.push(...d(S)) : m.push(S);
      return [...new Set(m)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return rt(ab, u), u;
}
function lb() {
  const e = We(ab);
  if (!e) throw new Error("Missing group!");
  return e;
}
function _A(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ol(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function ob(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = _A(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? ob(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function ib(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...ib(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Or(e, t, n, a) {
  const l = _(() => t.value.length ? ob(nt(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? ib(l.value, n.value, nt(a)) : nt(e));
  return { groups: l, flatItems: o };
}
function Nr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = St("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  ue(r, (u) => {
    Dt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const ad = H({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), rb = Symbol.for("vuetify:data-table-pagination");
function ld(e) {
  const t = we(e, "page", void 0, (a) => Number(a ?? 1)), n = we(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function od(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ue([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = Ze(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = Ze(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = Ze(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return rt(rb, d), d;
}
function VA() {
  const e = We(rb);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function sb(e) {
  const t = St("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? nt(n) : nt(n).slice(a.value, l.value));
  return ue(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function IA(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = nt(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, m = o.value.findIndex((y) => y.type === "group" && y.id === d), S = o.value.findIndex((y) => y.type === "group" && y.id === f), v = o.value.findIndex((y, h) => h > S && y.type === "group" && y.depth === 0);
      return o.value.slice(m, v === -1 ? void 0 : v);
    });
    return { pageCount: s, setItemsPerPage: u, paginatedItems: c };
  }
  if (l === "any") {
    const { flatItems: o } = a(t), { paginatedItems: i, pageCount: r, setItemsPerPage: s } = n(o);
    return { pageCount: r, setItemsPerPage: s, paginatedItems: i };
  }
  throw new Error(`Unrecognized pagination target ${l}`);
}
const PA = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, ub = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return ub.select({ items: n, value: t, selected: a });
} }, AA = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, cb = H({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), db = Symbol.for("vuetify:data-table-selection");
function Hr(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = we(e, "modelValue", e.modelValue, (k) => {
    const I = e.valueComparator;
    return I ? new Set(ot(k).map((V) => {
      var _a3;
      return ((_a3 = n.value.find((w) => I(V, w.value))) == null ? void 0 : _a3.value) ?? V;
    })) : new Set(ot(k).map((V) => {
      var _a3, _b2;
      return Ea(V) ? ((_a3 = n.value.find((w) => V === w.value)) == null ? void 0 : _a3.value) ?? V : ((_b2 = n.value.find((w) => Dt(V, w.value))) == null ? void 0 : _b2.value) ?? V;
    }));
  }, (k) => [...k.values()]), o = _(() => n.value.filter((k) => k.selectable)), i = _(() => nt(a).filter((k) => k.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return PA;
      case "all":
        return AA;
      case "page":
      default:
        return ub;
    }
  }), s = re(null);
  function u(k) {
    return ot(k).every((I) => l.value.has(I.value));
  }
  function c(k) {
    return ot(k).some((I) => l.value.has(I.value));
  }
  function d(k, I) {
    const V = r.value.select({ items: k, value: I, selected: new Set(l.value) });
    l.value = V;
  }
  function f(k, I, V) {
    const w = [], g = nt(a);
    if (I = I ?? g.findIndex((C) => C.value === k.value), e.selectStrategy !== "single" && (V == null ? void 0 : V.shiftKey) && s.value !== null) {
      const [C, x] = [s.value, I].sort((A, P) => A - P);
      w.push(...g.slice(C, x + 1).filter((A) => A.selectable));
    } else w.push(k), s.value = I;
    d(w, !u([k]));
  }
  function m(k) {
    const I = r.value.selectAll({ value: k, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = I;
  }
  const S = _(() => l.value.size > 0), v = _(() => {
    const k = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!k.length && u(k);
  }), h = { toggleSelect: f, select: d, selectAll: m, isSelected: u, isSomeSelected: c, someSelected: S, allSelected: v, showSelectAll: $(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return rt(db, h), h;
}
function zr() {
  const e = We(db);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const fb = H({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), vb = Symbol.for("vuetify:data-table-sort");
function Wr(e) {
  const t = $(() => e.initialSortOrder), n = we(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: $(() => e.multiSort), mustSort: $(() => e.mustSort) };
}
function TA(e, t) {
  if (!il(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function jr(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((v) => ({ ...v })) ?? [];
    const f = d.find((v) => v.key === u.key), m = t.value, S = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === S ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((v) => v.key !== u.key) : f.order = S;
    else {
      const { active: v, mode: y } = TA(l.value, c);
      v ? y === "prepend" ? d.unshift({ key: u.key, order: m }) : d.push({ key: u.key, order: m }) : d = [{ key: u.key, order: m }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return rt(vb, s), s;
}
function mb() {
  const e = We(vb);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function id(e, t, n, a) {
  const l = Qe();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? DA(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function DA(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ol(i[1], c), m = ol(r[1], c), S = i[0].raw, v = r[0].raw;
      if (d === "desc" && ([f, m] = [m, f], [S, v] = [v, S]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const y = a.sortRawFunctions[c](S, v);
        if (y == null) continue;
        if (u = true, y) return y;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const y = a.sortFunctions[c](f, m);
        if (y == null) continue;
        if (u = true, y) return y;
      }
      if (!u && (f instanceof Date && m instanceof Date && (f = f.getTime(), m = m.getTime()), [f, m] = [f, m].map((y) => y != null ? y.toString().toLocaleLowerCase() : y), f !== m)) return vo(f) && vo(m) ? 0 : vo(f) ? -1 : vo(m) ? 1 : !isNaN(f) && !isNaN(m) ? Number(f) - Number(m) : l.compare(f, m);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const EA = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function MA(e, t) {
  const n = e.returnObject ? t : pt(t, e.itemValue), a = pt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function BA(e, t) {
  const n = [];
  for (const a of t) n.push(MA(e, a));
  return n;
}
function $A(e) {
  return { items: _(() => BA(e, e.items)) };
}
const RA = H({ search: String, loading: Boolean, itemsLength: [Number, String], ...pe(), ...EA(), ...cb(), ...fb(), ...ad({ itemsPerPage: 5 }), ...eb(), ...td(), ...wl(), ...Me(), ...ha({ transition: { component: Ho, hideOnLeave: true } }) }, "VDataIterator"), LA = Q()({ name: "VDataIterator", props: RA(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "groupBy"), l = $(() => e.search), { items: o } = $A(e), { filteredItems: i } = xl(e, o, l, { transform: (j) => j.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Wr(e), { page: d, itemsPerPage: f } = ld(e), { toggleSort: m } = jr({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: S, opened: v, extractRows: y, isGroupOpen: h, toggleGroup: k } = Fr({ groupBy: a, sortBy: s }), { sortedItems: I } = id(e, i, S, { transform: (j) => j.raw }), { flatItems: V } = Or(I, a, v, false), w = $(() => !vo(e.itemsLength)), g = $(() => w.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: x, pageCount: A, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = od({ page: d, itemsPerPage: f, itemsLength: g }), T = re([]), L = _(() => w.value ? V.value : T.value);
  $t(() => !w.value, () => {
    const { paginatedItems: j } = sb({ items: V, startIndex: C, stopIndex: x, itemsPerPage: f });
    ct(() => {
      T.value = j.value;
    });
  });
  const z = _(() => y(L.value)), { isSelected: O, select: Z, selectAll: J, toggleSelect: F } = Hr(e, { allItems: o, currentPage: z }), { isExpanded: G, toggleExpand: W } = Lr(e);
  Nr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const N = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: m, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: O, select: Z, selectAll: J, toggleSelect: F, isExpanded: G, toggleExpand: W, isGroupOpen: h, toggleGroup: k, items: z.value, itemsCount: i.value.length, groupedItems: L.value }));
  return ne(() => p(e.tag, { class: te(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, N.value), p(Kt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? p(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (j) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, j);
      } }) : b("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, N.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, N.value)];
  } })), {};
} });
function FA() {
  const e = X([]);
  Tm(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const OA = H({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: _e, default: "$first" }, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, lastIcon: { type: _e, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...Jn(), ...Me({ tag: "nav" }), ...Ue(), ...bn({ variant: "text" }) }, "VPagination"), Su = Q()({ name: "VPagination", props: OA(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = we(e, "modelValue"), { t: o, n: i } = Qe(), { isRtl: r } = _t(), { themeClasses: s } = qe(e), { width: u } = on(), c = re(-1);
  mt(void 0, { scoped: true });
  const { resizeRef: d } = wn((x) => {
    if (!x.length) return;
    const { target: A, contentRect: P } = x[0], E = A.querySelector(".v-pagination__list > *");
    if (!E) return;
    const D = P.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = v(D, M);
  }), f = _(() => parseInt(e.length, 10)), m = _(() => parseInt(e.start, 10)), S = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : v(u.value, 58));
  function v(x, A) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((x - A * P) / A).toFixed(2))));
  }
  const y = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (S.value <= 0) return [];
    if (S.value === 1) return [l.value];
    if (f.value <= S.value) return Hn(f.value, m.value);
    const x = S.value % 2 === 0, A = x ? S.value / 2 : Math.floor(S.value / 2), P = x ? A : A + 1, E = f.value - A;
    if (P - l.value >= 0) return [...Hn(Math.max(1, S.value - 1), m.value), e.ellipsis, f.value];
    if (l.value - E >= (x ? 1 : 0)) {
      const D = S.value - 1, M = f.value - D + m.value;
      return [m.value, e.ellipsis, ...Hn(D, M)];
    } else {
      const D = Math.max(1, S.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + m.value;
      return [m.value, e.ellipsis, ...Hn(D, M), e.ellipsis, f.value];
    }
  });
  function h(x, A, P) {
    x.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: k, updateRef: I } = FA();
  mt({ VPaginationBtn: { color: $(() => e.color), border: $(() => e.border), density: $(() => e.density), size: $(() => e.size), variant: $(() => e.variant), rounded: $(() => e.rounded), elevation: $(() => e.elevation) } });
  const V = _(() => y.value.map((x, A) => {
    const P = (E) => I(E, A);
    if (typeof x == "string") return { isActive: false, key: `ellipsis-${A}`, page: x, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = x === l.value;
      return { isActive: E, key: x, page: i(x), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, x), onClick: (D) => h(D, x) } };
    }
  })), w = _(() => {
    const x = !!e.disabled || l.value <= m.value, A = !!e.disabled || l.value >= m.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, m.value, "first"), disabled: x, "aria-label": o(e.firstAriaLabel), "aria-disabled": x } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: x, "aria-label": o(e.previousAriaLabel), "aria-disabled": x }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: A, "aria-label": o(e.nextAriaLabel), "aria-disabled": A }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, m.value + f.value - 1, "last"), disabled: A, "aria-label": o(e.lastAriaLabel), "aria-disabled": A } : void 0 };
  });
  function g() {
    var _a3;
    const x = l.value - m.value;
    (_a3 = k.value[x]) == null ? void 0 : _a3.$el.focus();
  }
  function C(x) {
    x.key === Ws.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ee(g)) : x.key === Ws.right && !e.disabled && l.value < m.value + f.value - 1 && (l.value = l.value + 1, Ee(g));
  }
  return ne(() => p(e.tag, { ref: d, class: te(["v-pagination", s.value, e.class]), style: me(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [b("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && b("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(w.value.first) : p(ze, Y({ _as: "VPaginationBtn" }, w.value.first), null)]), b("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(w.value.prev) : p(ze, Y({ _as: "VPaginationBtn" }, w.value.prev), null)]), V.value.map((x, A) => b("li", { key: x.key, class: te(["v-pagination__item", { "v-pagination__item--is-active": x.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(x) : p(ze, Y({ _as: "VPaginationBtn" }, x.props), { default: () => [x.page] })])), b("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(w.value.next) : p(ze, Y({ _as: "VPaginationBtn" }, w.value.next), null)]), e.showFirstLastPage && b("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(w.value.last) : p(ze, Y({ _as: "VPaginationBtn" }, w.value.last), null)])])] })), {};
} }), rd = H({ color: String, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, firstIcon: { type: _e, default: "$first" }, lastIcon: { type: _e, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ko = Q()({ name: "VDataTableFooter", props: rd(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = VA(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ne(() => {
    var _a3;
    const f = Su.filterProps(e);
    return b("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), b("div", { class: "v-data-table-footer__items-per-page" }, [b("span", null, [a(e.itemsPerPageText)]), p(Kc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (m) => c(Number(m)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), b("div", { class: "v-data-table-footer__info" }, [b("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), b("div", { class: "v-data-table-footer__pagination" }, [p(Su, Y({ modelValue: l.value, "onUpdate:modelValue": (m) => l.value = m, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Le(f, ["color"])), null)])]);
  }), {};
} }), qo = W0({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return p(a, { class: te(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ve(e.height), width: ve(e.width), maxWidth: ve(e.maxWidth), left: l === "start" ? ve(e.fixedOffset || null) : void 0, right: l === "end" ? ve(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ve(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), NA = H({ headers: Array }, "DataTable-header"), gb = Symbol.for("vuetify:data-table-headers"), hb = { title: "", sortable: false }, HA = { ...hb, width: 48 };
function zA() {
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
function ku(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) ku(n, t);
  return t;
}
function yb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && yb(n.children, t);
  return t;
}
function WA(e) {
  if (e.key) {
    if (e.key === "data-table-group") return hb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return HA;
  }
}
function sd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => sd(n, t + 1))) : t;
}
function jA(e) {
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
  for (let o = 0; o < e.length; o++) a = bb(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = pb(e[o], l);
}
function bb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = bb(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function pb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = pb(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function UA(e, t) {
  const n = [];
  let a = 0;
  const l = zA(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - sd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? ku(u).length : 1 }), u.children) for (const f of u.children) {
        const m = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + m);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => ku(i)).flat(), headers: n };
}
function Sb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...WA(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? Sb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function ud(e, t) {
  const n = X([]), a = X([]), l = X({}), o = X({}), i = X({});
  ct(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((v) => ({ key: v, title: Kn(v) }))).slice(), c = yb(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Sb(u);
    jA(d);
    const f = Math.max(...d.map((v) => sd(v))) + 1, m = UA(d, f);
    n.value = m.headers, a.value = m.columns;
    const S = m.headers.flat(1);
    for (const v of S) v.key && (v.sortable && (v.sort && (l.value[v.key] = v.sort), v.sortRaw && (o.value[v.key] = v.sortRaw)), v.filter && (i.value[v.key] = v.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return rt(gb, r), r;
}
function Ur() {
  const e = We(gb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const kb = H({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: _e }, sortAscIcon: { type: _e, default: "$sortAsc" }, sortDescIcon: { type: _e, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...gt(), ...gl(), ...Vr() }, "VDataTableHeaders"), cl = Q()({ name: "VDataTableHeaders", props: kb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { toggleSort: l, sortBy: o, isSorted: i } = mb(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = zr(), { columns: d, headers: f } = Ur(), { loaderClasses: m } = ri(e);
  function S(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const E = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? ve(A.fixedOffset) : void 0, right: E === "end" ? ve(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function v(A, P) {
    A.key === "Enter" && !e.disableSort && l(P, A);
  }
  function y(A) {
    var _a3;
    switch ((_a3 = o.value.find((E) => E.key === A.key)) == null ? void 0 : _a3.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: h, backgroundColorStyles: k } = Xe(() => e.color), { displayClasses: I, mobile: V } = on(e), w = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: y })), g = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, m.value]), C = (A) => {
    let { column: P, x: E, y: D } = A;
    const M = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, L = Y(e.headerProps ?? {}, P.headerProps ?? {});
    return p(qo, Y({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: ve(P.width), minWidth: ve(P.minWidth), maxWidth: ve(P.maxWidth), ...S(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (z) => l(P, z) : void 0, onKeydown: P.sortable ? (z) => v(z, P) : void 0 }, L), { default: () => {
      var _a3;
      const z = `header.${P.key}`, O = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: y };
      return n[z] ? n[z](O) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, O)) ?? (c.value && p(En, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : b("div", { class: "v-data-table-header__content" }, [b("span", null, [P.title]), P.sortable && !e.disableSort && p(Ye, { key: "icon", class: "v-data-table-header__sort-icon", icon: y(P) }, null), e.multiSort && i(P) && b("div", { key: "badge", class: te(["v-data-table-header__sort-badge", ...h.value]), style: me(k.value) }, [o.value.findIndex((Z) => Z.key === P.key) + 1])]);
    } });
  }, x = () => {
    const A = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return p(qo, Y({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [b("div", { class: "v-data-table-header__content" }, [p(Kc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => p(En, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return p(fa, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, p(Ye, { class: te(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: y(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ne(() => V.value ? b("tr", null, [p(x, null, null)]) : b(he, null, [n.headers ? n.headers(w.value) : f.value.map((A, P) => b("tr", null, [A.map((E, D) => p(C, { column: E, x: D, y: P }, null))])), e.loading && b("tr", { class: "v-data-table-progress" }, [b("th", { colspan: d.value.length }, [p(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), wb = H({ item: { type: Object, required: true }, groupCollapseIcon: { type: _e, default: "$tableGroupCollapse" }, groupExpandIcon: { type: _e, default: "$tableGroupExpand" }, ...gt() }, "VDataTableGroupHeaderRow"), GA = Q()({ name: "VDataTableGroupHeaderRow", props: wb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = lb(), { isSelected: i, isSomeSelected: r, select: s } = zr(), { columns: u } = Ur(), c = _(() => o([e.item])), d = $(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => b("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const m = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, S = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: m, onClick: S } })) ?? p(qo, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [p(ze, { size: "small", variant: "text", icon: m, onClick: S }, null), b("span", null, [e.item.value]), b("span", null, [Ke("("), c.value.length, Ke(")")])] });
    } else if (f.key === "data-table-select") {
      const m = c.value.filter((h) => h.selectable), S = m.length > 0 && i(m), v = r(m) && !S, y = (h) => s(m, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: S, indeterminate: v, "onUpdate:modelValue": y } })) ?? p(qo, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [p(En, { density: e.density, disabled: m.length === 0, modelValue: S, indeterminate: v, "onUpdate:modelValue": y }, null)] });
    }
    return "";
  })]);
} }), xb = H({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: _e, default: "$collapse" }, expandIcon: { type: _e, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...gt(), ...gl() }, "VDataTableRow"), cd = Q()({ name: "VDataTableRow", props: xb(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = on(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = zr(), { isExpanded: c, toggleExpand: d } = nb(), { toggleSort: f, sortBy: m, isSorted: S } = mb(), { columns: v } = Ur();
  ne(() => b("tr", { class: te(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && v.value.map((y, h) => {
    const k = e.item, I = `item.${y.key}`, V = `header.${y.key}`, w = { index: e.index, item: k.raw, internalItem: k, value: ol(k.columns, y.key), column: y, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, g = { column: y, selectAll: u, isSorted: S, toggleSort: f, sortBy: m.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value, column: y }) : e.cellProps, x = typeof y.cellProps == "function" ? y.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value }) : y.cellProps, A = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
    return p(qo, Y({ align: y.align, indent: y.indent, class: { "v-data-table__td--expanded-row": y.key === "data-table-expand", "v-data-table__td--select-row": y.key === "data-table-select" }, fixed: y.fixed, fixedOffset: y.fixedOffset, fixedEndOffset: y.fixedEndOffset, lastFixed: y.lastFixed, firstFixedEnd: y.firstFixedEnd, maxWidth: l.value ? void 0 : y.maxWidth, noPadding: A, empty: P, nowrap: y.nowrap, width: l.value ? void 0 : y.width }, C, x), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (y.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...w, props: { color: e.color, disabled: !k.selectable, modelValue: o([k]), onClick: Si(() => i(k), ["stop"]) } })) ?? p(En, { color: e.color, disabled: !k.selectable, density: e.density, modelValue: o([k]), onClick: Si((D) => i(k, e.index, D), ["stop"]) }, null);
      if (y.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...w, props: { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) } })) ?? p(ze, { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](w);
      const E = Ie(w.value);
      return l.value ? b(he, null, [b("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? y.title]), b("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, w)) ?? E])]) : E;
    } });
  })]));
} }), Cb = H({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...tn(xb(), ["collapseIcon", "expandIcon", "density"]), ...tn(wb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...gl() }, "VDataTableRows"), dl = Q()({ name: "VDataTableRows", inheritAttrs: false, props: Cb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = Ur(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = nb(), { isSelected: s, toggleSelect: u } = zr(), { toggleGroup: c, isGroupOpen: d } = lb(), { t: f } = Qe(), { mobile: m } = on(e);
  return ne(() => {
    var _a3, _b2;
    const S = tn(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? b("tr", { class: "v-data-table-rows-loading", key: "loading" }, [b("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? b("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [b("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : b(he, null, [e.items.map((v, y) => {
      var _a4, _b3;
      if (v.type === "group") {
        const I = { index: y, item: v, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : p(GA, Y({ key: `group-header_${v.id}`, item: v }, vn(n, ":groupHeader", () => I), S), a);
      }
      if (v.type === "group-summary") {
        const I = { index: y, item: v, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: v.virtualIndex ?? y, item: v.raw, internalItem: v, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, k = { ...h, props: Y({ key: `item_${v.key ?? v.index}`, onClick: o.value ? () => {
        i(v);
      } : void 0, index: y, item: v, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: m.value }, vn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return b(he, { key: k.props.key }, [a.item ? a.item(k) : p(cd, k.props, a), r(v) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), _b = H({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...pe(), ...gt(), ...Me(), ...Ue() }, "VTable"), fl = Q()({ name: "VTable", props: _b(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = qe(e), { densityClasses: o } = Lt(e);
  return ne(() => p(e.tag, { class: te(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? b("div", { class: "v-table__wrapper", style: { height: ve(e.height) } }, [b("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), YA = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function KA(e, t, n, a) {
  const l = e.returnObject ? t : pt(t, e.itemValue), o = pt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = pt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? pt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function qA(e, t, n) {
  return t.map((a, l) => KA(e, a, l, n));
}
function dd(e, t) {
  return { items: _(() => qA(e, e.items, t.value)) };
}
const fd = H({ ...Cb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...eb(), ...td(), ...NA(), ...YA(), ...cb(), ...fb(), ...Le(kb(), ["multiSort", "initialSortOrder"]), ..._b() }, "DataTable"), XA = H({ ...ad(), ...fd(), ...wl(), ...rd() }, "VDataTable"), ZA = Q()({ name: "VDataTable", props: XA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = nd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: u, itemsPerPage: c } = ld(e), { disableSort: d } = Zl(e), { columns: f, headers: m, sortFunctions: S, sortRawFunctions: v, filterFunctions: y } = ud(e, { groupBy: l, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: h } = dd(e, f), k = $(() => e.search), { filteredItems: I } = xl(e, h, k, { transform: (ie) => ie.columns, customKeyFilter: y }), { toggleSort: V } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: w, opened: g, extractRows: C, isGroupOpen: x, toggleGroup: A } = Fr({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = id(e, I, w, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: S, sortRawFunctions: v }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: T } = IA({ pageBy: E, sortedItems: P, paginate: (ie) => {
    const be = _(() => nt(ie).length), { startIndex: ae, stopIndex: de, pageCount: Pe, setItemsPerPage: xe } = od({ page: u, itemsPerPage: c, itemsLength: be }), { paginatedItems: ge } = sb({ items: ie, startIndex: ae, stopIndex: de, itemsPerPage: c });
    return { paginatedItems: ge, pageCount: Pe, setItemsPerPage: xe };
  }, group: (ie) => Or(ie, l, g, () => !!a["group-summary"]) }), L = _(() => C(T.value)), { isSelected: z, select: O, selectAll: Z, toggleSelect: J, someSelected: F, allSelected: G } = Hr(e, { allItems: h, currentPage: L }), { isExpanded: W, toggleExpand: N } = Lr(e);
  Nr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: k }), mt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const j = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: M, someSelected: F.value, allSelected: G.value, isSelected: z, select: O, selectAll: Z, toggleSelect: J, isExpanded: W, toggleExpand: N, isGroupOpen: x, toggleGroup: A, items: L.value.map((ie) => ie.raw), internalItems: L.value, groupedItems: T.value, columns: f.value, headers: m.value }));
  return ne(() => {
    const ie = Ko.filterProps(e), be = cl.filterProps(Le(e, ["multiSort"])), ae = dl.filterProps(e), de = fl.filterProps(e);
    return p(fl, Y({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, de, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, j.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(j.value) : b(he, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, j.value), !e.hideDefaultHeader && b("thead", { key: "thead" }, [p(cl, Y(be, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, j.value), !e.hideDefaultBody && b("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, j.value), a.body ? a.body(j.value) : p(dl, Y(n, ae, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, j.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, j.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, j.value)]);
    }, bottom: () => a.bottom ? a.bottom(j.value) : !e.hideDefaultFooter && b(he, null, [p(mn, null, null), p(Ko, ie, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), JA = H({ ...Le(fd(), ["hideDefaultFooter"]), ...td(), ...vy(), ...wl() }, "VDataTableVirtual"), QA = Q()({ name: "VDataTableVirtual", props: JA(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = nd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { disableSort: u } = Zl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: m, sortRawFunctions: S } = ud(e, { groupBy: l, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: v } = dd(e, c), y = $(() => e.search), { filteredItems: h } = xl(e, v, y, { transform: (ge) => ge.columns, customKeyFilter: f }), { toggleSort: k } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: w, isGroupOpen: g, toggleGroup: C } = Fr({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: x } = id(e, h, I, { transform: (ge) => ({ ...ge.raw, ...ge.columns }), sortFunctions: m, sortRawFunctions: S }), { flatItems: A } = Or(x, l, V, () => !!a["group-summary"]), P = _(() => w(A.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: T, someSelected: L, allSelected: z } = Hr(e, { allItems: P, currentPage: P }), { isExpanded: O, toggleExpand: Z } = Lr(e), { containerRef: J, markerRef: F, paddingTop: G, paddingBottom: W, computedItems: N, handleItemResize: j, handleScroll: ie, handleScrollend: be, calculateVisibleItems: ae, scrollToIndex: de } = my(e, A), Pe = _(() => N.value.map((ge) => ({ ...ge.raw, virtualIndex: ge.index })));
  Nr({ sortBy: i, page: re(1), itemsPerPage: re(-1), groupBy: l, search: y }), mt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const xe = _(() => ({ sortBy: i.value, toggleSort: k, someSelected: L.value, allSelected: z.value, isSelected: E, select: D, selectAll: M, toggleSelect: T, isExpanded: O, toggleExpand: Z, isGroupOpen: g, toggleGroup: C, items: P.value.map((ge) => ge.raw), internalItems: P.value, groupedItems: A.value, columns: c.value, headers: d.value }));
  return ne(() => {
    const ge = cl.filterProps(Le(e, ["multiSort"])), R = dl.filterProps(e), B = fl.filterProps(e);
    return p(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, B, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, xe.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return b("div", { ref: J, onScrollPassive: ie, onScrollend: be, class: "v-table__wrapper", style: { height: ve(e.height) } }, [b("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, xe.value), !e.hideDefaultHeader && b("thead", { key: "thead" }, [p(cl, Y(ge, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, xe.value), !e.hideDefaultBody && b("tbody", { key: "tbody" }, [b("tr", { ref: F, style: { height: ve(G.value), border: 0 } }, [b("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, xe.value), p(dl, Y(n, R, { items: Pe.value }), { ...a, item: (K) => p(fy, { key: K.internalItem.index, renderless: true, "onUpdate:height": (oe) => j(K.internalItem.index, oe) }, { default: (oe) => {
        var _a4;
        let { itemRef: le } = oe;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...K, itemRef: le })) ?? p(cd, Y(K.props, { ref: le, key: K.internalItem.index, index: K.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, xe.value), b("tr", { style: { height: ve(W.value), border: 0 } }, [b("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, xe.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, xe.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, xe.value);
    } });
  }), { calculateVisibleItems: ae, scrollToIndex: de };
} }), eT = H({ itemsLength: { type: [Number, String], required: true }, ...ad(), ...fd(), ...rd() }, "VDataTableServer"), tT = Q()({ name: "VDataTableServer", props: eT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = nd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: u, itemsPerPage: c } = ld(e), { disableSort: d } = Zl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: m, headers: S } = ud(e, { groupBy: l, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: v } = dd(e, m), { toggleSort: y } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: k, toggleGroup: I, extractRows: V } = Fr({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: w, setItemsPerPage: g } = od({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Or(v, l, h, () => !!a["group-summary"]), { isSelected: x, select: A, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = Hr(e, { allItems: v, currentPage: v }), { isExpanded: T, toggleExpand: L } = Lr(e), z = _(() => V(v.value));
  Nr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: $(() => e.search) }), rt("v-data-table", { toggleSort: y, sortBy: i }), mt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const O = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: w.value, toggleSort: y, setItemsPerPage: g, someSelected: D.value, allSelected: M.value, isSelected: x, select: A, selectAll: P, toggleSelect: E, isExpanded: T, toggleExpand: L, isGroupOpen: k, toggleGroup: I, items: z.value.map((Z) => Z.raw), internalItems: z.value, groupedItems: C.value, columns: m.value, headers: S.value }));
  ne(() => {
    const Z = Ko.filterProps(e), J = cl.filterProps(Le(e, ["multiSort"])), F = dl.filterProps(e), G = fl.filterProps(e);
    return p(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, G, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, O.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(O.value) : b(he, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, O.value), !e.hideDefaultHeader && b("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [p(cl, Y(J, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, O.value), !e.hideDefaultBody && b("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, O.value), a.body ? a.body(O.value) : p(dl, Y(n, F, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, O.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, O.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, O.value)]);
    }, bottom: () => a.bottom ? a.bottom(O.value) : !e.hideDefaultFooter && b(he, null, [p(mn, null, null), p(Ko, Z, { prepend: a["footer.prepend"] })]) });
  });
} }), nT = H({ fluid: { type: Boolean, default: false }, ...pe(), ...kt(), ...Me() }, "VContainer"), aT = Q()({ name: "VContainer", props: nT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = _t(), { dimensionStyles: l } = wt(e);
  return ne(() => p(e.tag, { class: te(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: me([l.value, e.style]) }, n)), {};
} }), Vb = kr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Ib = kr.reduce((e, t) => {
  const n = "offset" + Kn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Pb = kr.reduce((e, t) => {
  const n = "order" + Kn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), _v = { col: Object.keys(Vb), offset: Object.keys(Ib), order: Object.keys(Pb) };
function lT(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const oT = ["auto", "start", "end", "center", "baseline", "stretch"], iT = H({ cols: { type: [Boolean, String, Number], default: false }, ...Vb, offset: { type: [String, Number], default: null }, ...Ib, order: { type: [String, Number], default: null }, ...Pb, alignSelf: { type: String, default: null, validator: (e) => oT.includes(e) }, ...pe(), ...Me() }, "VCol"), rT = Q()({ name: "VCol", props: iT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in _v) _v[o].forEach((r) => {
      const s = e[r], u = lT(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), vd = ["start", "end", "center"], Ab = ["space-between", "space-around", "space-evenly"];
function md(e, t) {
  return kr.reduce((n, a) => {
    const l = e + Kn(a);
    return n[l] = t(), n;
  }, {});
}
const sT = [...vd, "baseline", "stretch"], Tb = (e) => sT.includes(e), Db = md("align", () => ({ type: String, default: null, validator: Tb })), uT = [...vd, ...Ab], Eb = (e) => uT.includes(e), Mb = md("justify", () => ({ type: String, default: null, validator: Eb })), cT = [...vd, ...Ab, "stretch"], Bb = (e) => cT.includes(e), $b = md("alignContent", () => ({ type: String, default: null, validator: Bb })), Vv = { align: Object.keys(Db), justify: Object.keys(Mb), alignContent: Object.keys($b) }, dT = { align: "align", justify: "justify", alignContent: "align-content" };
function fT(e, t, n) {
  let a = dT[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const vT = H({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Tb }, ...Db, justify: { type: String, default: null, validator: Eb }, ...Mb, alignContent: { type: String, default: null, validator: Bb }, ...$b, ...pe(), ...Me() }, "VRow"), mT = Q()({ name: "VRow", props: vT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Vv) Vv[o].forEach((i) => {
      const r = e[i], s = fT(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), wu = ga("v-spacer", "div", "VSpacer"), Rb = H({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, modeIcon: { type: _e, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), xu = Q()({ name: "VDatePickerControls", props: Rb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
  function d() {
    n("click:prev");
  }
  function f() {
    n("click:next");
  }
  function m() {
    n("click:prev-year");
  }
  function S() {
    n("click:next-year");
  }
  function v() {
    n("click:year");
  }
  function y() {
    n("click:month");
  }
  return ne(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, k = p(ze, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = p(ze, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = p(ze, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: m }, null), w = p(ze, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), g = p(ze, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), C = p(ze, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null), x = p(ze, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null), A = b(he, null, [p(ze, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), p(ze, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: y, openYears: v, prevMonth: d, nextMonth: f, prevYear: m, nextYear: S }, E = b(he, null, [e.noMonthPicker ? x : A, p(wu, null, null), b("div", { class: "v-date-picker-controls__month" }, [k, I])]), D = b(he, null, [b("div", { class: "v-date-picker-controls__month" }, [k, g, I]), p(wu, null, null), b("div", { class: "v-date-picker-controls__year" }, [V, C, w])]);
    return p(Be, { defaults: h }, { default: () => {
      var _a3;
      return [b("div", { class: te(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ve(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? b(he, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), gT = H({ appendIcon: _e, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), Cu = Q()({ name: "VDatePickerHeader", props: gT(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return ne(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return b("div", { class: te(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: me(o.value), onClick: i }, [a.prepend && b("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && p(Kt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [b("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && b("div", { class: "v-date-picker-header__append" }, [a.append ? p(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : p(ze, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), hT = H({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function yT(e) {
  const t = ml(), n = we(e, "modelValue", [], (v) => ot(v).map((y) => t.date(y))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = we(e, "year", void 0, (v) => {
    const y = v != null ? Number(v) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (v) => t.getYear(v)), o = we(e, "month", void 0, (v) => {
    const y = v != null ? Number(v) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, y);
  }, (v) => t.getMonth(v)), i = _(() => {
    const v = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((y, h) => e.weekdays.includes((h + v) % 7));
  }), r = _(() => {
    const v = t.getWeekArray(o.value, e.firstDayOfWeek), y = v.flat(), h = 42;
    if (e.weeksInMonth === "static" && y.length < h) {
      const k = y[y.length - 1];
      let I = [];
      for (let V = 1; V <= h - y.length; V++) I.push(t.addDays(k, V)), V % 7 === 0 && (v.push(I), I = []);
    }
    return v;
  });
  function s(v, y) {
    return v.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, k) => {
      const I = t.toISO(h), V = !t.isSameMonth(h, o.value), w = t.isSameDay(h, t.startOfMonth(o.value)), g = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), x = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: V, isDisabled: S(h), isEnd: g, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((A) => t.isSameDay(h, A)), isStart: w, isToday: t.isSameDay(h, y), isWeekEnd: k % x === x - 1, isWeekStart: k % x === 0, isoDate: I, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const u = _(() => {
    const v = t.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let k = 0; k <= 6; k++) y.push(t.addDays(v, k));
    const h = t.date();
    return s(y, h);
  }), c = _(() => {
    const v = r.value.flat(), y = t.date();
    return s(v, y);
  }), d = _(() => r.value.map((v) => v.length ? t.getWeek(v[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: m } = Lb(e);
  function S(v) {
    if (e.disabled) return true;
    const y = t.date(v);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || m.value && t.isAfter(y, m.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function Lb(e) {
  const t = ml(), n = _(() => {
    if (!e.min) return null;
    const i = t.date(e.min);
    return t.isValid(i) ? i : null;
  }), a = _(() => {
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
const Fb = H({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Le(hT(), ["displayValue"]) }, "VDatePickerMonth"), _u = Q()({ name: "VDatePickerMonth", props: Fb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = X(), { t: o } = Qe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = yT(e), c = ml(), d = re(), f = re(), m = re(false), S = $(() => m.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const v = _(() => {
    const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= g;
  });
  ue(i, (g, C) => {
    C && (m.value = c.isBefore(g[0].date, C[0].date));
  });
  function y(g) {
    const C = c.startOfDay(g);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = g, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = Yx(c, d.value, f.value);
    }
  }
  function h(g) {
    const C = c.format(g.date, "fullDateWithWeekday"), x = g.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${x}`, C);
  }
  function k(g) {
    const C = r.value.findIndex((x) => c.isSameDay(x, g));
    if (C === -1) r.value = [...r.value, g];
    else {
      const x = [...r.value];
      x.splice(C, 1), r.value = x;
    }
  }
  function I(g) {
    e.multiple === "range" ? y(g) : e.multiple ? k(g) : r.value = [g];
  }
  function V(g) {
    const { events: C, eventColor: x } = e;
    let A, P = [];
    if (Array.isArray(C) ? A = C.includes(g) : C instanceof Function ? A = C(g) || false : C ? A = C[g] || false : A = false, A) A !== true ? P = ot(A) : typeof x == "string" ? P = [x] : typeof x == "function" ? P = ot(x(g)) : Array.isArray(x) ? P = x : typeof x == "object" && x !== null && (P = ot(x[g]));
    else return [];
    return P.length ? P.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function w(g) {
    const C = V(g);
    return C.length ? b("div", { class: "v-date-picker-month__events" }, [C.map((x) => p(gy, { dot: true, color: x }, null))]) : null;
  }
  ne(() => b("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && b("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && b("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Ke("\xA0")]), s.value.map((g) => b("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), p(Kt, { name: S.value }, { default: () => {
    var _a3;
    return [b("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((g) => b("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), i.value.map((g, C) => {
      var _a4;
      const x = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return v.value && !g.isSelected && (g.isDisabled = true), b("div", { class: te(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, x)) ?? p(ze, x.props, { default: () => [g.localized, w(g.isoDate)] }))]);
    })])];
  } })]));
} }), Ob = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Vu = Q()({ name: "VDatePickerMonths", props: Ob(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Hn(12).map((u) => {
      const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
      return s = l.getNextMonth(s), { isDisabled: f, text: c, label: d, value: u };
    });
  });
  ct(() => {
    o.value = o.value ?? l.getMonth(l.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return ne(() => b("div", { class: "v-date-picker-months", style: { height: ve(e.height) } }, [b("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? p(ze, Y({ key: "month" }, c), null);
  })])])), {};
} }), Nb = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Iu = Q()({ name: "VDatePickerYears", props: Nb(), directives: { vIntersect: Dn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = re(false), r = _(() => {
    const f = l.getYear(l.date());
    let m = f - 100, S = f + 52;
    e.min && (m = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let v = l.startOfYear(l.date());
    return v = l.setYear(v, m), Hn(S - m + 1, m).map((y) => {
      const h = l.format(v, "year");
      return v = l.setYear(v, l.getYear(v) + 1), { text: h, value: y, isDisabled: !d(y) };
    });
  });
  ct(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = $o(), u = $o();
  function c() {
    const f = s.el, m = u.el;
    if (!f || !m) return;
    const S = f.getBoundingClientRect(), v = m.getBoundingClientRect();
    f.scrollTop += v.top - S.top - f.clientHeight / 2 + v.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return ne(() => at(b("div", { class: "v-date-picker-years", ref: s, style: { height: ve(e.height) } }, [b("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, m) => {
    var _a3;
    const S = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: m, props: S })) ?? p(ze, Y({ key: "month" }, S), null);
  })])]), [[Dn, { handler: c }, null, { once: true }]])), {};
} }), bT = H({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Le(Rb(), ["active", "monthText", "yearText"]), ...Fb({ weeksInMonth: "static" }), ...Le(Ob(), ["modelValue"]), ...Le(Nb(), ["modelValue"]), ...Rr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), pT = Q()({ name: "VDatePicker", props: bT(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), { t: o } = Qe(), { rtlClasses: i } = _t(), r = we(e, "modelValue", void 0, (j) => ot(j).map((ie) => l.date(ie)), (j) => e.multiple ? j : j[0]), s = we(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = Lb(e), f = _(() => {
    var _a3;
    const j = l.date(), ie = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(j);
    return ie && l.isValid(ie) ? ie : j;
  }), m = $(() => e.headerColor ?? e.color), S = we(e, "month"), v = _({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (j) => S.value = j }), y = we(e, "year"), h = _({ get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, v.value)))), set: (j) => y.value = j }), k = re(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const j = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && j.split(" ").length === 3 ? j.replace(" ", `
`) : j;
  }), V = $(() => {
    let j = l.date();
    return j = l.setDate(j, 1), j = l.setMonth(j, v.value), j = l.setYear(j, h.value), j;
  }), w = $(() => l.format(V.value, "monthAndYear")), g = $(() => l.format(V.value, "monthShort")), C = $(() => l.format(V.value, "year")), x = $(() => `date-picker-header${k.value ? "-reverse" : ""}-transition`), A = _(() => {
    if (e.disabled) return true;
    const j = [];
    if (s.value !== "month") j.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ie = l.date();
      if (ie = l.startOfMonth(ie), ie = l.setMonth(ie, v.value), ie = l.setYear(ie, h.value), u.value) {
        const be = l.addDays(l.startOfMonth(ie), -1), ae = l.addDays(l.startOfYear(ie), -1);
        l.isAfter(u.value, be) && j.push("prev-month"), l.isAfter(u.value, ae) && j.push("prev-year");
      }
      if (c.value) {
        const be = l.addDays(l.endOfMonth(ie), 1), ae = l.addDays(l.endOfYear(ie), 1);
        l.isAfter(be, c.value) && j.push("next-month"), l.isAfter(ae, c.value) && j.push("next-year");
      }
    }
    return j;
  }), P = _(() => e.allowedYears || M), E = _(() => e.allowedMonths || T);
  function D(j, ie) {
    const be = e.allowedDates;
    if (typeof be != "function") return true;
    const ae = 1 + Jg(l, j, ie);
    for (let de = 0; de < ae; de++) if (be(l.addDays(j, de))) return true;
    return false;
  }
  function M(j) {
    if (typeof e.allowedDates == "function") {
      const ie = l.parseISO(`${j}-01-01`);
      return D(ie, l.endOfYear(ie));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (l.getYear(l.date(ie)) === j) return true;
      return false;
    }
    return true;
  }
  function T(j) {
    if (typeof e.allowedDates == "function") {
      const ie = String(j + 1).padStart(2, "0"), be = l.parseISO(`${h.value}-${ie}-01`);
      return D(be, l.endOfMonth(be));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (l.getYear(l.date(ie)) === h.value && l.getMonth(l.date(ie)) === j) return true;
      return false;
    }
    return true;
  }
  function L() {
    v.value < 11 ? v.value++ : (h.value++, v.value = 0, N()), W();
  }
  function z() {
    v.value > 0 ? v.value-- : (h.value--, v.value = 11, N()), W();
  }
  function O() {
    if (h.value++, c.value) {
      const j = String(v.value + 1).padStart(2, "0"), ie = l.parseISO(`${h.value}-${j}-01`);
      l.isAfter(ie, c.value) && (v.value = l.getMonth(c.value));
    }
    N();
  }
  function Z() {
    if (h.value--, u.value) {
      const j = String(v.value + 1).padStart(2, "0"), ie = l.endOfMonth(l.parseISO(`${h.value}-${j}-01`));
      l.isAfter(u.value, ie) && (v.value = l.getMonth(u.value));
    }
    N();
  }
  function J() {
    s.value = "month";
  }
  function F() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function G() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function W() {
    s.value === "months" && F();
  }
  function N() {
    s.value === "year" && G();
  }
  return ue(r, (j, ie) => {
    const be = ot(ie), ae = ot(j);
    if (!ae.length) return;
    const de = l.date(be[be.length - 1]), Pe = l.date(ae[ae.length - 1]);
    if (l.isSameDay(de, Pe)) return;
    const xe = l.getMonth(Pe), ge = l.getYear(Pe);
    xe !== v.value && (v.value = xe, W()), ge !== h.value && (h.value = ge, N()), k.value = l.isBefore(de, Pe);
  }), ne(() => {
    const j = Xl.filterProps(e), ie = Le(xu.filterProps(e), ["viewMode"]), be = Cu.filterProps(e), ae = _u.filterProps(e), de = Le(Vu.filterProps(e), ["modelValue"]), Pe = Le(Iu.filterProps(e), ["modelValue"]), xe = { color: m.value, header: I.value, transition: x.value };
    return p(Xl, Y(j, { color: m.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ve(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? b("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? p(Be, { defaults: { VDatePickerHeader: { ...xe } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, xe)];
    } }) : p(Cu, Y({ key: "header" }, be, xe, { onClick: s.value !== "month" ? J : void 0 }), { prepend: a.prepend, append: a.append }), default: () => b(he, null, [p(xu, Y(ie, { disabled: A.value, viewMode: s.value, text: w.value, monthText: g.value, yearText: C.value, "onClick:next": L, "onClick:prev": z, "onClick:nextYear": O, "onClick:prevYear": Z, "onClick:month": F, "onClick:year": G }), { default: a.controls }), p(Ho, { hideOnLeave: true }, { default: () => [s.value === "months" ? p(Vu, Y({ key: "date-picker-months" }, de, { modelValue: v.value, "onUpdate:modelValue": [(ge) => v.value = ge, W], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? p(Iu, Y({ key: "date-picker-years" }, Pe, { modelValue: h.value, "onUpdate:modelValue": [(ge) => h.value = ge, N], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : p(_u, Y({ key: "date-picker-month" }, ae, { modelValue: r.value, "onUpdate:modelValue": (ge) => r.value = ge, month: v.value, "onUpdate:month": [(ge) => v.value = ge, W], year: h.value, "onUpdate:year": [(ge) => h.value = ge, N], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), ST = H({ actionText: String, bgColor: String, color: String, icon: _e, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...pe(), ...kt(), ...Jn({ size: void 0 }), ...Ue() }, "VEmptyState"), kT = Q()({ name: "VEmptyState", props: ST(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = on();
  function u(c) {
    n("click:action", c);
  }
  return ne(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), m = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), v = e.size || (e.image ? 200 : 96);
    return b("div", { class: te(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: me([i.value, r.value, e.style]) }, [S && b("div", { key: "media", class: "v-empty-state__media" }, [a.media ? p(Be, { key: "media-defaults", defaults: { VImg: { src: e.image, height: v }, VIcon: { size: v, icon: e.icon } } }, { default: () => [a.media()] }) : b(he, null, [e.image ? p(da, { key: "image", src: e.image, height: v }, null) : e.icon ? p(Ye, { key: "icon", color: e.color, size: v, icon: e.icon }, null) : void 0])]), d && b("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && b("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), m && b("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ve(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && b("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && b("div", { key: "actions", class: "v-empty-state__actions" }, [p(Be, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? p(ze, { onClick: u }, null)];
    } })])]);
  }), {};
} }), Xo = Symbol.for("vuetify:v-expansion-panel"), Hb = H({ ...pe(), ...Oc() }, "VExpansionPanelText"), Pu = Q()({ name: "VExpansionPanelText", props: Hb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Nc(e, a.isSelected);
  return ne(() => p(Cr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [at(b("div", { class: te(["v-expansion-panel-text", e.class]), style: me(e.style) }, [n.default && l.value && b("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Mn, a.isSelected.value]])];
  } })), {};
} }), zb = H({ color: String, expandIcon: { type: _e, default: "$expand" }, collapseIcon: { type: _e, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...pe(), ...kt() }, "VExpansionPanelTitle"), Au = Q()({ name: "VExpansionPanelTitle", directives: { vRipple: Rt }, props: zb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = $(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ne(() => {
    var _a3;
    return at(b("button", { class: te(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: me([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [b("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && p(Be, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [b("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? p(Ye, null, null)])];
    } })]), [[Rt, e.ripple]]);
  }), {};
} }), Wb = H({ title: String, text: String, bgColor: String, ...xt(), ...Sl(), ...it(), ...Me(), ...zb(), ...Hb() }, "VExpansionPanel"), wT = Q()({ name: "VExpansionPanel", props: Wb(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Xo), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), s = $(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, m, S) => (a.group.selected.value.includes(m.id) && f.push(S), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((m) => m.id === a.id);
    return !a.isSelected.value && u.value.some((m) => m - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((m) => m.id === a.id);
    return !a.isSelected.value && u.value.some((m) => m - f === -1);
  });
  return rt(Xo, a), ne(() => {
    const f = !!(n.text || e.text), m = !!(n.title || e.title), S = Au.filterProps(e), v = Pu.filterProps(e);
    return p(e.tag, { class: te(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [b("div", { class: te(["v-expansion-panel__shadow", ...i.value]) }, null), p(Be, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...v } } }, { default: () => {
      var _a3;
      return [m && p(Au, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && p(Pu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), xT = ["default", "accordion", "inset", "popout"], CT = H({ flat: Boolean, ...pl(), ...tn(Wb(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ue(), ...pe(), ...Me(), variant: { type: String, default: "default", validator: (e) => xT.includes(e) } }, "VExpansionPanels"), _T = Q()({ name: "VExpansionPanels", props: CT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Na(e, Xo), { themeClasses: o } = qe(e), i = $(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return mt({ VExpansionPanel: { bgColor: $(() => e.bgColor), collapseIcon: $(() => e.collapseIcon), color: $(() => e.color), eager: $(() => e.eager), elevation: $(() => e.elevation), expandIcon: $(() => e.expandIcon), focusable: $(() => e.focusable), hideActions: $(() => e.hideActions), readonly: $(() => e.readonly), ripple: $(() => e.ripple), rounded: $(() => e.rounded), static: $(() => e.static) } }), ne(() => p(e.tag, { class: te(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), VT = H({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Le(Ir({ active: true }), ["location", "spaced"]), ...hl(), ...Zn(), ...ha({ transition: "fab-transition" }) }, "VFab"), IT = Q()({ name: "VFab", props: VT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = re(56), o = X(), { resizeRef: i } = wn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = $(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  $t(() => e.app, () => {
    const d = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: $(() => e.absolute) });
    ct(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = X();
  return ne(() => {
    const d = ze.filterProps(e);
    return b("div", { ref: c, class: te(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: me([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [b("div", { class: "v-fab__container" }, [p(Kt, { appear: e.appear, transition: e.transition }, { default: () => [at(p(ze, Y({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Mn, e.active]])] })])]);
  }), {};
} });
function PT() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await jb(o, Ub(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function jb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await jb(r, Ub(t, r)));
      n(i);
    });
  });
}
function Ub(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const AT = H({ filterByType: String }, "file-accept");
function TT(e) {
  const t = _(() => e.filterByType ? DT(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function DT(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const ET = H({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Le(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ot(e).every((t) => t != null && typeof t == "object") }, ...AT(), ...mi({ clearable: true }) }, "VFileInput"), MT = Q()({ name: "VFileInput", inheritAttrs: false, props: ET(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { filterAccepted: i } = TT(e), r = we(e, "modelValue", e.modelValue, (J) => ot(J), (J) => !e.multiple && Array.isArray(J) ? J[0] : J), { isFocused: s, focus: u, blur: c } = pa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((J, F) => {
    let { size: G = 0 } = F;
    return J + G;
  }, 0)), m = _(() => xf(f.value, d.value)), S = _(() => (r.value ?? []).map((J) => {
    const { name: F = "", size: G = 0 } = J, W = M(F);
    return e.showSize ? `${W} (${xf(G, d.value)})` : W;
  })), v = _(() => {
    var _a3;
    const J = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, J, m.value) : o(e.counterString, J);
  }), y = X(), h = X(), k = X(), I = $(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), w = re(false), { handleDrop: g, hasFilesOrFolders: C } = PT();
  function x() {
    var _a3;
    k.value !== document.activeElement && ((_a3 = k.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function A(J) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click();
  }
  function P(J) {
    a("mousedown:control", J);
  }
  function E(J) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click(), a("click:control", J);
  }
  function D(J) {
    J.stopPropagation(), x(), Ee(() => {
      r.value = [], ai(e["onClick:clear"], J);
    });
  }
  function M(J) {
    if (J.length < Number(e.truncateLength)) return J;
    const F = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${J.slice(0, F)}\u2026${J.slice(J.length - F)}`;
  }
  function T(J) {
    J.preventDefault(), J.stopImmediatePropagation(), w.value = true;
  }
  function L(J) {
    J.preventDefault(), w.value = false;
  }
  async function z(J) {
    if (J.preventDefault(), J.stopImmediatePropagation(), w.value = false, !k.value || !C(J)) return;
    const F = await g(J);
    Z(F);
  }
  function O(J) {
    if (!(!J.target || J.repack)) if (e.filterByType) Z([...J.target.files]);
    else {
      const F = J.target;
      r.value = [...F.files ?? []];
    }
  }
  function Z(J) {
    const F = new DataTransfer(), { accepted: G, rejected: W } = i(J);
    W.length && a("rejected", W);
    for (const j of G) F.items.add(j);
    k.value.files = F.files, r.value = [...F.files];
    const N = new Event("change", { bubbles: true });
    N.repack = true, k.value.dispatchEvent(N);
  }
  return ue(r, (J) => {
    (!Array.isArray(J) || !J.length) && k.value && (k.value.value = "");
  }), ne(() => {
    const J = !!(l.counter || e.counter), F = !!(J || l.details), [G, W] = qn(n), { modelValue: N, ...j } = Nt.filterProps(e), ie = { ...La.filterProps(e), "onClick:clear": D }, be = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, ae = n.accept ? String(n.accept) : void 0, de = be ? void 0 : e.filterByType ?? ae;
    return p(Nt, Y({ ref: y, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": w.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": A }, G, j, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Pe) => {
      let { id: xe, isDisabled: ge, isDirty: R, isReadonly: B, isValid: K, hasDetails: oe } = Pe;
      return p(La, Y({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ie, { id: xe.value, active: I.value || R.value, dirty: R.value || e.dirty, disabled: ge.value, focused: s.value, details: oe.value, error: K.value === false, onDragover: T, onDrop: z }), { ...l, default: (le) => {
        var _a3;
        let { props: { class: se, ...ye }, controlRef: ce } = le;
        return b(he, null, [b("input", Y({ ref: (U) => k.value = ce.value = U, type: "file", accept: de, readonly: B.value, disabled: ge.value, multiple: e.multiple, name: e.name, onClick: (U) => {
          U.stopPropagation(), B.value && U.preventDefault(), x();
        }, onChange: O, onDragleave: L, onFocus: x, onBlur: c }, ye, W), null), b("div", { class: te(se) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: m.value }) : e.chips ? S.value.map((U) => p(fa, { key: U, size: "small", text: U }, null)) : S.value.join(", "))])]);
      } });
    }, details: F ? (Pe) => {
      var _a3, _b2;
      return b(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Pe), J && b(he, null, [b("span", null, null), p(Ar, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: v.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, y, h, k);
} }), BT = H({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...zt(), ...pe(), ...xt(), ...hl(), ...it(), ...Me({ tag: "footer" }), ...Ue() }, "VFooter"), $T = Q()({ name: "VFooter", props: BT(), setup(e, t) {
  let { slots: n } = t;
  const a = X(), { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.color), { borderClasses: r } = Xt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), c = re(32), { resizeRef: d } = wn((m) => {
    m.length && (c.value = m[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const m = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: $(() => e.app), absolute: $(() => e.absolute) });
    ct(() => {
      a.value = m.layoutItemStyles.value;
    });
  }), ne(() => p(e.tag, { ref: d, class: te(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: me([i.value, e.app ? a.value : { height: ve(e.height) }, e.style]) }, n)), {};
} }), RT = H({ ...pe(), ...z_() }, "VForm"), LT = Q()({ name: "VForm", props: RT(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = W_(e), o = X();
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
  return ne(() => {
    var _a3;
    return b("form", { ref: o, class: te(["v-form", e.class]), style: me(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), FT = H({ color: String, ...zt(), ...pe(), ...it(), ...Me({ tag: "kbd" }), ...Ue(), ...xt() }, "VKbd"), Tu = Q()({ name: "VKbd", props: FT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = Xt(e), { roundedClasses: o } = dt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.color), { elevationClasses: s } = It(e);
  return ne(() => p(e.tag, { class: te(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: me([r.value, e.style]) }, n)), {};
} });
function Gb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Yb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, OT = H({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => Yb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...pe(), ...Ue(), ...zt(), ...it(), ...xt(), color: String }, "VHotkey"), Cs = Symbol("VHotkey:AND_DELINEATOR"), _s = Symbol("VHotkey:SLASH_DELINEATOR"), Iv = Symbol("VHotkey:THEN_DELINEATOR");
function NT(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = Gb(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Pv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = Gb(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const HT = Q()({ name: "VHotkey", props: OT(), setup(e) {
  const { t } = Qe(), { themeClasses: n } = qe(e), { rtlClasses: a } = _t(), { borderClasses: l } = Xt(e), { roundedClasses: o } = dt(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const k = [], I = cC(h);
    for (let V = 0; V < I.length; V++) {
      const w = I[V];
      V > 0 && k.push(Iv);
      const { keys: g, separators: C } = ih(w);
      for (let x = 0; x < g.length; x++) {
        const A = g[x];
        x > 0 && k.push(C[x - 1] === "/" ? _s : Cs), k.push(Pv(e.keyMap, e.displayMode, A, c.value));
      }
    }
    return k;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const k = d.value.map((I) => {
      const V = [];
      for (const w of I) if (Array.isArray(w)) {
        const g = w[0] === "icon" || w[0] === "symbol" ? Pv(Ot(Yb, e.keyMap), "text", String(w[1]), c.value)[1] : w[1];
        V.push(m(g));
      } else w === Cs ? V.push(t("$vuetify.hotkey.plus")) : w === _s ? V.push(t("$vuetify.hotkey.or")) : w === Iv && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", k);
  });
  function m(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const k = NT(e.keyMap, String(h[2]), c.value);
    return m(k);
  }
  function v(h, k) {
    const I = e.variant === "contained", V = I ? "kbd" : Tu, w = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return p(V, { key: k, class: te(w), style: me(I ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? p(Ye, { icon: h[1], "aria-hidden": "true" }, null) : m(h[1])] });
  }
  function y(h, k) {
    return b("span", { key: k, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === Cs ? "+" : h === _s ? "/" : t("$vuetify.hotkey.then")]);
  }
  ne(() => {
    const h = b(he, null, [e.prefix && b("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((k, I) => b("span", { class: "v-hotkey__combination", key: I }, [k.map((V, w) => Array.isArray(V) ? v(V, w) : y(V, w)), I < d.value.length - 1 && b("span", { "aria-hidden": "true" }, [Ke("\xA0")])])), e.suffix && b("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return b("div", { class: te(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: me(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : p(Tu, { key: "contained", class: te(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: me(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), zT = H({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Lc() }, "VHover"), WT = Q()({ name: "VHover", props: zT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Fc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), jT = H({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...Me() }, "VInfiniteScroll"), Av = qt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return ue(l, async (o) => {
    n("intersect", e.side, o);
  }), ne(() => b("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Ke("\xA0")])), {};
} }), UT = Q()({ name: "VInfiniteScroll", props: jT(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = X(), o = re("ok"), i = re("ok"), r = _(() => ve(e.margin)), s = re(false);
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
  Ct(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function m(g, C) {
    g === "start" ? o.value = C : g === "end" ? i.value = C : g === "both" && (o.value = C, i.value = C);
  }
  function S(g) {
    return g === "start" ? o.value : i.value;
  }
  let v = 0;
  function y(g, C) {
    s.value = C, s.value && h(g);
  }
  function h(g) {
    if (e.mode !== "manual" && !s.value) return;
    const C = S(g);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    v = d(), m(g, "loading");
    function x(A) {
      m(g, A), Ee(() => {
        A === "empty" || A === "error" || (A === "ok" && g === "start" && u(d() - v + c()), e.mode !== "manual" && Ee(() => {
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
    a("load", { side: g, done: x });
  }
  const { t: k } = Qe();
  function I(g, C) {
    var _a3, _b2, _c2, _d2, _e2;
    if (e.side !== g && e.side !== "both") return;
    const x = () => h(g), A = { side: g, props: { onClick: x, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? b("div", null, [k(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? p(Ba, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? p(ze, { variant: "outlined", color: e.color, onClick: x }, { default: () => [k(e.loadMoreText)] }) : ((_e2 = n.loading) == null ? void 0 : _e2.call(n, A)) ?? p(Ba, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = wt(e);
  ne(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return p(g, { ref: l, class: te(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": x }]), style: me(V.value) }, { default: () => {
      var _a3;
      return [b("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && A && p(Av, { key: "start", side: "start", onIntersect: y, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), x && A && p(Av, { key: "end", side: "end", onIntersect: y, rootMargin: r.value }, null), b("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
    } });
  });
  function w(g) {
    const C = g ?? e.side;
    m(C, "ok"), Ee(() => {
      C !== "end" && u(d() - v + c()), e.mode !== "manual" && Ee(() => {
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
} }), Kb = Symbol.for("vuetify:v-item-group"), GT = H({ ...pe(), ...pl({ selectedClass: "v-item--selected" }), ...Me(), ...Ue() }, "VItemGroup"), YT = Q()({ name: "VItemGroup", props: GT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Kb);
  return () => p(e.tag, { class: te(["v-item-group", a.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), KT = Q()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Kb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), qT = H({ ...pe(), ...kt(), ...ah() }, "VLayout"), XT = Q()({ name: "VLayout", props: qT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = oh(e), { dimensionStyles: s } = wt(e);
  return ne(() => {
    var _a3;
    return b("div", { ref: r, class: te([a.value, e.class]), style: me([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), ZT = H({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...pe(), ...hl() }, "VLayoutItem"), JT = Q()({ name: "VLayoutItem", props: ZT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => e.position), elementSize: $(() => e.size), layoutSize: $(() => e.size), active: $(() => e.modelValue), absolute: $(() => e.absolute) });
  return () => {
    var _a3;
    return b("div", { class: te(["v-layout-item", e.class]), style: me([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), QT = H({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...pe(), ...kt(), ...Me(), ...ha({ transition: "fade-transition" }) }, "VLazy"), eD = Q()({ name: "VLazy", directives: { vIntersect: Dn }, props: QT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = we(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ne(() => at(p(e.tag, { class: te(["v-lazy", e.class]), style: me([a.value, e.style]) }, { default: () => [l.value && p(Kt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Dn, { handler: o, options: e.options }, null]])), {};
} }), tD = H({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...pe() }, "VLocaleProvider"), nD = Q()({ name: "VLocaleProvider", props: tD(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Yg(e);
  return ne(() => {
    var _a3;
    return b("div", { class: te(["v-locale-provider", a.value, e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), aD = H({ scrollable: Boolean, ...pe(), ...kt(), ...Me({ tag: "main" }) }, "VMain"), lD = Q()({ name: "VMain", props: aD(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = lh(), { ssrBootStyles: o } = bl();
  return ne(() => p(e.tag, { class: te(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: me([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? b("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function oD(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = re(false), o = re(0), i = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ve(o.value) } : { top: a.value.top }];
  });
  Ct(() => {
    ue(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Ht(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), m = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, S = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - S, l.value = true) : u === "down" && m <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (S ? l.value !== "top" && (o.value = -f + S + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const iD = 100, rD = 20;
function Tv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Dv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Tv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Tv(t) * 1e3;
}
function sD() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Ag(rD))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > iD) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Dv(r), y: Dv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : uD();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function uD() {
  throw new Error();
}
function cD(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Ct(() => {
    window.addEventListener("touchstart", k, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Ht(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = sD();
  let d = false;
  const f = re(false), m = re(0), S = re(0);
  let v;
  function y(g, C) {
    return (i.value === "left" ? g : i.value === "right" ? document.documentElement.clientWidth - g : i.value === "top" ? g : i.value === "bottom" ? document.documentElement.clientHeight - g : Pl()) - (C ? l.value : 0);
  }
  function h(g) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const x = i.value === "left" ? (g - S.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - g - S.value) / l.value : i.value === "top" ? (g - S.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - g - S.value) / l.value : Pl();
    return C ? Ze(x) : x;
  }
  function k(g) {
    if (o.value) return;
    const C = g.changedTouches[0].clientX, x = g.changedTouches[0].clientY, A = 25, P = i.value === "left" ? C < A : i.value === "right" ? C > document.documentElement.clientWidth - A : i.value === "top" ? x < A : i.value === "bottom" ? x > document.documentElement.clientHeight - A : Pl(), E = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? x < l.value : i.value === "bottom" ? x > document.documentElement.clientHeight - l.value : Pl());
    (P || E || n.value && a.value) && (v = [C, x], S.value = y(r.value ? C : x, n.value), m.value = h(r.value ? C : x), d = S.value > -20 && S.value < 80, u(g), s(g));
  }
  function I(g) {
    const C = g.changedTouches[0].clientX, x = g.changedTouches[0].clientY;
    if (d) {
      if (!g.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - v[0]), E = Math.abs(x - v[1]);
      (r.value ? P > E && P > 3 : E > P && E > 3) ? (f.value = true, d = false) : (r.value ? E : P) > 3 && (d = false);
    }
    if (!f.value) return;
    g.preventDefault(), s(g);
    const A = h(r.value ? C : x, false);
    m.value = Math.max(0, Math.min(1, A)), A > 1 ? S.value = y(r.value ? C : x, true) : A < 0 && (S.value = y(r.value ? C : x, false));
  }
  function V(g) {
    if (d = false, !f.value) return;
    s(g), f.value = false;
    const C = c(g.changedTouches[0].identifier), x = Math.abs(C.x), A = Math.abs(C.y);
    (r.value ? x > A && x > 400 : A > x && A > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Pl()) : n.value = m.value > 0.5;
  }
  const w = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${m.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${m.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${m.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${m.value * l.value}px))` : Pl(), transition: "none" } : void 0);
  return $t(f, () => {
    var _a3, _b2;
    const g = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ct(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = w.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = w.value) == null ? void 0 : _c2.transition) || null);
    }), bt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", g), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: m, dragStyles: w };
}
function Pl() {
  throw new Error();
}
const dD = ["start", "end", "left", "right", "top", "bottom"], fD = H({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => dD.includes(e) }, sticky: Boolean, ...zt(), ...pe(), ...Lc(), ...gl({ mobile: null }), ...xt(), ...hl(), ...it(), ...Le(ly(), ["disableInitialFocus"]), ...Me({ tag: "nav" }), ...Ue() }, "VNavigationDrawer"), vD = Q()({ name: "VNavigationDrawer", props: fD(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = _t(), { themeClasses: i } = qe(e), { borderClasses: r } = Xt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Xe(() => e.color), { elevationClasses: c } = It(e), { displayClasses: d, mobile: f } = on(e), { roundedClasses: m } = dt(e), S = hh(), v = we(e, "modelValue", null, (F) => !!F), { ssrBootStyles: y } = bl(), { scopeId: h } = kl(), k = X(), I = re(false), { runOpenDelay: V, runCloseDelay: w } = Fc(e, (F) => {
    I.value = F;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Gs(e.location, o.value)), x = $(() => e.persistent), A = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !A.value && C.value !== "bottom");
  oy(e, { isActive: v, localTop: A, contentEl: k }), $t(() => e.expandOnHover && e.rail != null, () => {
    ue(I, (F) => a("update:rail", !F));
  }), $t(() => !e.disableResizeWatcher, () => {
    ue(A, (F) => !e.permanent && Ee(() => v.value = !F));
  }), $t(() => !e.disableRouteWatcher && !!S, () => {
    ue(S.currentRoute, () => A.value && (v.value = false));
  }), ue(() => e.permanent, (F) => {
    F && (v.value = true);
  }), e.modelValue == null && !A.value && (v.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = cD({ el: k, isActive: v, isTemporary: A, width: g, touchless: $(() => e.touchless), position: C }), M = _(() => {
    const F = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? F * D.value : F;
  }), { layoutItemStyles: T, layoutItemScrimStyles: L } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: g, active: al(v), disableTransitions: $(() => E.value), absolute: _(() => e.absolute || P.value && typeof z.value != "string") }), { isStuck: z, stickyStyles: O } = oD({ rootEl: k, isSticky: P, layoutItemStyles: T }), Z = Xe(() => typeof e.scrim == "string" ? e.scrim : null), J = _(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return mt({ VList: { bgColor: "transparent" } }), ne(() => {
    const F = l.image || e.image;
    return b(he, null, [p(e.tag, Y({ ref: k, onMouseenter: V, onMouseleave: w, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": x.value, "v-navigation-drawer--active": v.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, m.value, e.class], style: [u.value, T.value, y.value, O.value, e.style], inert: !v.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [F && b("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : p(da, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && b("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), b("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && b("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), p(Da, { name: "fade-transition" }, { default: () => [A.value && (E.value || v.value) && !!e.scrim && b("div", Y({ class: ["v-navigation-drawer__scrim", Z.backgroundColorClasses.value], style: [J.value, Z.backgroundColorStyles.value], onClick: () => {
      x.value || (v.value = false);
    } }, h), null)] })]);
  }), { isStuck: z };
} }), mD = qt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = iy();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), gD = 50, hD = 500;
function yD(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  bt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), gD);
    }, hD);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  bt(o);
  function i(r) {
    t(r === "up");
  }
  return { holdStart: l, holdStop: o };
}
const bD = H({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Le(gi(), ["modelValue", "validationValue"]) }, "VNumberInput"), pD = Q()({ name: "VNumberInput", props: { ...bD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = X(), { holdStart: l, holdStop: o } = yD({ toggleUpDown: E }), i = ao(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = re(e.focused), { decimalSeparator: u } = Qe(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(N) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const be = j == null ? String(N) : N.toFixed(j);
    if (s.value && ie) return Number(be).toString().replace(".", c.value);
    if (e.minFractionDigits === null || j !== null && j < e.minFractionDigits) return be.replace(".", c.value);
    let [ae, de] = be.split(".");
    return de = (de ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [ae, de].filter(Boolean).join(c.value);
  }
  const f = we(e, "modelValue", null, (N) => N ?? null, (N) => N == null ? N ?? null : Ze(Number(N), e.min, e.max)), m = re(null), S = re(null);
  ue(f, (N) => {
    var _a3;
    s.value && !r.value && Number((_a3 = m.value) == null ? void 0 : _a3.replace(c.value, ".")) === N || (N == null ? (m.value = null, S.value = null) : isNaN(N) || (m.value = d(N), S.value = Number(m.value.replace(c.value, "."))));
  }, { immediate: true });
  const v = _({ get: () => m.value, set(N) {
    if (N === null || N === "") {
      f.value = null, m.value = null, S.value = null;
      return;
    }
    const j = Number(N.replace(c.value, "."));
    isNaN(j) || (m.value = N, S.value = j, j <= e.max && j >= e.min && (f.value = j));
  } }), y = _(() => {
    var _a3;
    if (S.value === null) return false;
    const N = Number((_a3 = m.value) == null ? void 0 : _a3.replace(c.value, "."));
    return N !== Ze(N, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), k = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = $(() => I.value === "split" ? "$plus" : "$collapse"), w = $(() => I.value === "split" ? "$minus" : "$expand"), g = $(() => I.value === "split" ? "default" : "small"), C = $(() => I.value === "stacked" ? "auto" : "100%"), x = { props: { onClick: T, onPointerup: L, onPointerdown: z, onPointercancel: L } }, A = { props: { onClick: T, onPointerup: L, onPointerdown: O, onPointercancel: L } };
  ue(() => e.precision, () => J()), ue(() => e.minFractionDigits, () => J()), Ct(() => {
    Z();
  });
  function P(N) {
    if (N == null) return 0;
    const j = N.toString(), ie = j.indexOf(".");
    return ~ie ? j.length - ie : 0;
  }
  function E() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      v.value = d(Ze(0, e.min, e.max));
      return;
    }
    let j = Math.max(P(f.value), P(e.step));
    e.precision != null && (j = Math.max(j, e.precision)), N ? h.value && (v.value = d(f.value + e.step, j)) : k.value && (v.value = d(f.value - e.step, j));
  }
  function D(N) {
    var _a3;
    if (!N.data) return;
    const j = N.target, { value: ie, selectionStart: be, selectionEnd: ae } = j ?? {}, de = ie ? ie.slice(0, be) + N.data + ie.slice(ae) : N.data, Pe = f0(de, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Yi(c.value)}?\\d*$`).test(de) || (N.preventDefault(), j.value = Pe, Ee(() => v.value = Pe)), e.precision != null) {
      if (((_a3 = de.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        N.preventDefault(), j.value = Pe, Ee(() => v.value = Pe);
        const xe = (be ?? 0) + N.data.length;
        j.setSelectionRange(xe, xe);
      }
      e.precision === 0 && de.endsWith(c.value) && (N.preventDefault(), j.value = Pe, Ee(() => v.value = Pe));
    }
  }
  async function M(N) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(N.key) || N.ctrlKey || ["ArrowDown", "ArrowUp"].includes(N.key) && (N.preventDefault(), N.stopPropagation(), Z(), await Ee(), N.key === "ArrowDown" ? E(false) : E());
  }
  function T(N) {
    N.stopPropagation();
  }
  function L(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.releasePointerCapture(N.pointerId), N.preventDefault(), o();
  }
  function z(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.setPointerCapture(N.pointerId), N.preventDefault(), N.stopPropagation(), l("up");
  }
  function O(N) {
    var _a3;
    (_a3 = N.currentTarget) == null ? void 0 : _a3.setPointerCapture(N.pointerId), N.preventDefault(), N.stopPropagation(), l("down");
  }
  function Z() {
    if (r.value || !a.value) return;
    const N = a.value.value, j = Number(N.replace(c.value, "."));
    N && !isNaN(j) ? v.value = d(Ze(j, e.min, e.max)) : v.value = null;
  }
  function J() {
    r.value || (v.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function F() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        v.value = null;
        return;
      }
      v.value = f.value.toString().replace(".", c.value);
    }
  }
  function G() {
    F();
  }
  function W() {
    Z();
  }
  return ne(() => {
    const { modelValue: N, type: j, ...ie } = Yn.filterProps(e);
    function be() {
      return n.increment ? p(Be, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(x)] }) : p(ze, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: T, onPointerdown: z, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function ae() {
      return n.decrement ? p(Be, { key: "decrement-defaults", defaults: { VBtn: { disabled: !k.value, height: C.value, size: g.value, icon: w.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : p(ze, { "aria-hidden": "true", "data-testid": "decrement", disabled: !k.value, height: C.value, icon: w.value, key: "decrement-btn", onClick: T, onPointerdown: O, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function de() {
      return b("div", { class: "v-number-input__control" }, [ae(), p(mn, { vertical: I.value !== "stacked" }, null), be()]);
    }
    function Pe() {
      return !e.hideInput && !e.inset ? p(mn, { vertical: true }, null) : void 0;
    }
    const xe = I.value === "split" ? b("div", { class: "v-number-input__control" }, [p(mn, { vertical: true }, null), be()]) : e.reverse || I.value === "hidden" ? void 0 : b(he, null, [Pe(), de()]), ge = n["append-inner"] || xe, R = I.value === "split" ? b("div", { class: "v-number-input__control" }, [ae(), p(mn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? b(he, null, [de(), Pe()]) : void 0, B = n["prepend-inner"] || R;
    return p(Yn, Y({ ref: a }, ie, { modelValue: v.value, "onUpdate:modelValue": (K) => v.value = K, focused: s.value, "onUpdate:focused": (K) => s.value = K, validationValue: f.value, error: e.error || y.value || void 0, onBeforeinput: D, onFocus: G, onBlur: W, onKeydown: M, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ge ? function() {
      var _a3;
      for (var K = arguments.length, oe = new Array(K), le = 0; le < K; le++) oe[le] = arguments[le];
      return b(he, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...oe), xe]);
    } : void 0, "prepend-inner": B ? function() {
      var _a3;
      for (var K = arguments.length, oe = new Array(K), le = 0; le < K; le++) oe[le] = arguments[le];
      return b(he, null, [R, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...oe)]);
    } : void 0 });
  }), Pt({}, a);
} }), SD = H({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...gt(), ...kt(), ...fi(), ...tn(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), kD = Q()({ name: "VOtpInput", props: SD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: u } = pa(e), c = we(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Qe(), f = _(() => Number(e.length)), m = _(() => Array(f.value).fill(0)), S = X(-1), v = X(), y = X([]), h = _(() => y.value[S.value]);
  let k = false;
  $t(() => e.autofocus, () => {
    const E = Nl();
    E.run(() => {
      const { intersectionRef: D, isIntersecting: M } = ii();
      ct(() => {
        D.value = y.value[0];
      }), ue(M, (T) => {
        var _a3;
        T && ((_a3 = D.value) == null ? void 0 : _a3.focus(), E.stop());
      });
    });
  });
  function I() {
    if (P(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (k) return;
    const E = c.value.slice(), D = h.value.value;
    E[S.value] = D;
    let M = null;
    S.value > c.value.length ? M = c.value.length + 1 : S.value + 1 !== f.value && (M = "next"), c.value = E, M && Qa(v.value, M);
  }
  function V() {
    k = false, I();
  }
  function w(E) {
    const D = c.value.slice(), M = S.value;
    let T = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? T = "prev" : E.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(E.key) && (D[S.value] = "", c.value = D, S.value > 0 && E.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = y.value[M]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      T != null && Qa(v.value, T);
    }));
  }
  function g(E, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const M = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", T = M.length - 1 === -1 ? E : M.length - 1;
    P(M) || (c.value = M.split(""), S.value = T);
  }
  function C() {
    c.value = [];
  }
  function x(E, D) {
    s(), S.value = D;
  }
  function A() {
    u(), S.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return mt({ VField: { color: $(() => e.color), bgColor: $(() => e.color), baseColor: $(() => e.baseColor), disabled: $(() => e.disabled), error: $(() => e.error), variant: $(() => e.variant), rounded: $(() => e.rounded) } }, { scoped: true }), ue(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), ue(S, (E) => {
    E < 0 || Ee(() => {
      var _a3;
      (_a3 = y.value[E]) == null ? void 0 : _a3.select();
    });
  }), ne(() => {
    var _a3;
    const [E, D] = qn(n);
    return b("div", Y({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [b("div", { ref: v, class: "v-otp-input__content", style: me([i.value]) }, [m.value.map((M, T) => b(he, null, [e.divider && T !== 0 && b("span", { class: "v-otp-input__divider" }, [e.divider]), p(La, { focused: r.value && e.focusAll || S.value === T, key: T }, { ...l, loader: void 0, default: () => b("input", { ref: (L) => y.value[T] = L, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: te(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[T], onInput: I, onFocus: (L) => x(L, T), onBlur: A, onKeydown: w, onCompositionstart: () => k = true, onCompositionend: V, onPaste: (L) => g(T, L) }, null) })])), b("input", Y({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), p(Gn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? p(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3.some((E) => E.blur());
  }, focus: () => {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function wD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const xD = H({ scale: { type: [Number, String], default: 0.5 }, ...pe() }, "VParallax"), CD = Q()({ name: "VParallax", props: xD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii(), { resizeRef: o, contentRect: i } = wn(), { height: r } = on(), s = X();
  ct(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  ue(l, (m) => {
    m ? (u = pr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Ht(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), ue(r, f), ue(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - Ze(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || jn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const m = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!m) return;
      const S = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, v = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + v, h = i.value.height, k = y + (h - S) / 2, I = wD((v - k) * c.value), V = Math.max(1, (c.value * (S - h) + h) / h);
      m.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return ne(() => p(da, { class: te(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: me(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), _D = H({ ...Pr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), VD = Q()({ name: "VRadio", props: _D(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = $a.filterProps(e);
    return p($a, Y(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), ID = H({ height: { type: [Number, String], default: "auto" }, ...Le(Sa(), ["direction"]), ...Le(Pc(), ["multiple"]), trueIcon: { type: _e, default: "$radioOn" }, falseIcon: { type: _e, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), PD = Q()({ name: "VRadioGroup", inheritAttrs: false, props: ID(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = _(() => e.id || `radio-group-${l}`), i = we(e, "modelValue"), r = X();
  return ne(() => {
    const [s, u] = qn(n), c = Nt.filterProps(e), d = $a.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return p(Nt, Y({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (m) => i.value = m, id: o.value }), { ...a, default: (m) => {
      let { id: S, messagesId: v, isDisabled: y, isReadonly: h } = m;
      return b(he, null, [f && p(no, { id: S.value }, { default: () => [f] }), p(Ph, Y(d, { id: S.value, "aria-describedby": v.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: y.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k }), a)]);
    } });
  }), Pt({}, r);
} }), AD = H({ ...fi(), ...Sa(), ...qy(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), TD = Q()({ name: "VRangeSlider", inheritAttrs: false, props: AD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = X(), i = X(), r = X(), { rtlClasses: s } = _t();
  function u(D) {
    if (!o.value || !i.value) return;
    const M = yu(D, o.value.$el, e.direction), T = yu(D, i.value.$el, e.direction), L = Math.abs(M), z = Math.abs(T);
    return L < z || L === z && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = Xy(e), d = we(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: m, max: S, min: v, mousePressed: y, onSliderMousedown: h, onSliderTouchstart: k, position: I, trackContainerRef: V, disabled: w, readonly: g } = Zy({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (w.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (D) => {
    var _a3, _b2;
    let { value: M } = D;
    if (w.value || g.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const T = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [M, d.value[1]] : [d.value[0], M];
      !e.strict && T[0] < T[1] && (d.value = T);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e2;
    let { value: M } = D;
    const [T, L] = d.value;
    if (w.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === L && T !== v.value && (f.value = M > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e2 = o.value) == null ? void 0 : _e2.$el) ? d.value = [Math.min(M, L), L] : d.value = [T, Math.max(T, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: x, blur: A } = pa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return ne(() => {
    const D = Nt.filterProps(e), [M, T] = qn(l), L = !!(e.label || n.label || n.prepend);
    return p(Nt, Y({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || m.value, "v-slider--focused": C.value, "v-slider--pressed": y.value, "v-slider--disabled": w.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: L ? (z) => {
      var _a3, _b2;
      return b(he, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, z)) ?? (e.label ? p(no, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, z)]);
    } : void 0, default: (z) => {
      var _a3, _b2;
      let { id: O, messagesId: Z } = z;
      return b("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : k }, [b("input", { id: `${O.value}_start`, name: e.name || O.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), b("input", { id: `${O.value}_stop`, name: e.name || O.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), p(Jy, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), p(bu, Y({ ref: o, "aria-describedby": Z.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (J) => d.value = [J, d.value[1]], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== v.value && d.value[0] === d.value[1] && d.value[1] === v.value && J.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: v.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), p(bu, Y({ ref: i, "aria-describedby": Z.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (J) => d.value = [d.value[0], J], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== v.value && d.value[0] === d.value[1] && d.value[0] === S.value && J.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), DD = H({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: _e, default: "$ratingEmpty" }, fullIcon: { type: _e, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...pe(), ...gt(), ...Jn(), ...Me(), ...Ue() }, "VRating"), ED = Q()({ name: "VRating", props: DD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { themeClasses: l } = qe(e), o = X(), i = we(e, "modelValue"), r = _(() => Ze(parseFloat(i.value), 0, Number(e.length))), s = _(() => Hn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = re(-1), d = _(() => u.value.map((V) => {
    const w = e.hover && c.value > -1, g = r.value >= V, C = c.value >= V, A = (w ? C : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = g || C ? P : e.color;
    return { isFilled: g, isHovered: C, icon: A, color: E };
  })), f = _(() => [0, ...u.value].map((V) => {
    function w() {
      c.value = V;
    }
    function g() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? w : void 0, onMouseleave: e.hover ? g : void 0, onClick: C };
  })), m = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function S() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function v(V) {
    if (e.disabled || e.readonly || V.ctrlKey || V.altKey) return;
    const w = e.halfIncrements ? 0.5 : 1;
    if (V.key === "ArrowRight") {
      const g = Math.min(Number(e.length), Number(i.value ?? 0) + w);
      i.value = g, Ee(() => S());
    }
    if (V.key === "ArrowLeft") {
      const g = Math.max(0, Number(i.value ?? 0) - w);
      i.value = g, Ee(() => S());
    }
  }
  const y = Mt(), h = _(() => e.name ?? `v-rating-${y}`);
  function k(V) {
    var _a3, _b2;
    let { value: w, index: g, showStar: C = true } = V;
    const { onMouseenter: x, onMouseleave: A, onClick: P } = f.value[g + 1], E = `${h.value}-${String(w).replace(".", "-")}`, D = g === m.value, M = { color: (_a3 = d.value[g]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[g]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: v };
    return b(he, null, [b("label", { for: E, class: te({ "v-rating__item--half": e.halfIncrements && w % 1 > 0, "v-rating__item--full": e.halfIncrements && w % 1 === 0 }), onMouseenter: x, onMouseleave: A, onClick: P }, [b("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, w, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: M, value: w, index: g, rating: r.value }) : p(ze, Y({ "aria-label": a(e.itemAriaLabel, w, e.length) }, M), null) : void 0]), b("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: w, checked: r.value === w, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? b("span", null, [V.label]) : b("span", null, [Ke("\xA0")]);
  }
  return ne(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return p(e.tag, { class: te(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: me(e.style), ref: o }, { default: () => [p(k, { value: 0, index: -1, showStar: false }, null), s.value.map((w, g) => {
      var _a4, _b2;
      return b("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: w, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, b("div", { class: "v-rating__item" }, [e.halfIncrements ? b(he, null, [p(k, { value: w - 0.5, index: g * 2 }, null), p(k, { value: w, index: g * 2 + 1 }, null)]) : p(k, { value: w, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: w, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), MD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function BD(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return b("div", { class: te(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Ev(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Gr(t));
}
function Gr(e) {
  let t = [];
  if (!e) return t;
  const n = MD[e];
  if (e !== n) {
    if (e.includes(",")) return Mv(e);
    if (e.includes("@")) return Ev(e);
    n.includes(",") ? t = Mv(n) : n.includes("@") ? t = Ev(n) : n && t.push(Gr(n));
  }
  return [BD(e, t)];
}
function Mv(e) {
  return e.replace(/\s/g, "").split(",").map(Gr);
}
const $D = H({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...xt(), ...Ue() }, "VSkeletonLoader"), RD = Q()({ name: "VSkeletonLoader", inheritAttrs: false, props: $D(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = qe(e), { t: u } = Qe(), c = _(() => Gr(ot(e.type).join(",")));
  return ne(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? b("div", Y({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : b(he, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), LD = Q()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Ac);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function FD(e) {
  const t = re(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Ee(() => t.value = e());
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
  return bt(a), { clear: a, time: t, start: o, reset: l };
}
const qb = H({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Zn({ location: "bottom" }), ...eo(), ...it(), ...bn(), ...Ue(), ...Le(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Du = Q()({ name: "VSnackbar", props: qb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { positionClasses: l } = to(e), { scopeId: o } = kl(), { themeClasses: i } = qe(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(e), { roundedClasses: c } = dt(e), d = FD(() => Number(e.timeout)), f = X(), m = X(), S = re(false), v = re(0), y = X(), h = We(No, void 0);
  $t(() => !!h, () => {
    const E = lh();
    ct(() => {
      y.value = E.mainStyles.value;
    });
  }), ue(a, I), ue(() => e.timeout, I), Ct(() => {
    a.value && I();
  });
  let k = -1;
  function I() {
    d.reset(), window.clearTimeout(k);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const D = rc(m.value);
    d.start(D), k = window.setTimeout(() => {
      a.value = false;
    }, E);
  }
  function V() {
    d.reset(), window.clearTimeout(k);
  }
  function w() {
    S.value = true, V();
  }
  function g() {
    S.value = false, I();
  }
  function C(E) {
    v.value = E.touches[0].clientY;
  }
  function x(E) {
    Math.abs(v.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function A() {
    S.value && g();
  }
  const P = _(() => e.location.split(" ").reduce((E, D) => (E[`v-snackbar--${D}`] = true, E), {}));
  return ne(() => {
    const E = Gn.filterProps(e), D = !!(n.default || n.text || e.text);
    return p(Gn, Y({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [y.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: Y({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: w, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: x, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ya(false, "v-snackbar"), e.timer && !S.value && b("div", { key: "timer", class: "v-snackbar__timer" }, [p(_r, { ref: m, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && b("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && p(Be, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [b("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), OD = H({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Le(qb(), ["modelValue"]) }, "VSnackbarQueue"), ND = Q()({ name: "VSnackbarQueue", props: OD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = re(false), i = re(false), r = re();
  ue(() => e.modelValue.length, (f, m) => {
    !i.value && f > m && u();
  }), ue(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, i.value = false);
  }
  function u() {
    const [f, ...m] = e.modelValue;
    n("update:modelValue", m), r.value = typeof f == "string" ? { text: f } : f, Ee(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ne(() => {
    const f = !!(e.closable || a.actions), { modelValue: m, ...S } = Du.filterProps(e);
    return b(he, null, [i.value && !!r.value && (a.default ? p(Be, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : p(Du, Y(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (v) => o.value = v, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => b(he, null, [a.actions ? p(Be, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : p(ze, Y(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), Xb = H({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Zb = H({ autoLineWidth: Boolean, ...Xb() }, "VBarline"), Bv = Q()({ name: "VBarline", props: Zb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y)));
  function d(y, h) {
    const { minX: k, maxX: I, minY: V, maxY: w } = h, g = y.length;
    let C = e.max != null ? Number(e.max) : Math.max(...y), x = e.min != null ? Number(e.min) : Math.min(...y);
    x > 0 && e.min == null && (x = 0), C < 0 && e.max == null && (C = 0);
    const A = I / (g === 1 ? 2 : g), P = (w - V) / (C - x || 1), E = w - Math.abs(x * P);
    return y.map((D, M) => {
      const T = Math.abs(P * D);
      return { x: k + M * A, y: E - T + +(D < 0) * T, height: T, value: D };
    });
  }
  const f = _(() => {
    const y = [], h = d(c.value, u.value), k = h.length;
    for (let I = 0; y.length < k; I++) {
      const V = h[I];
      let w = e.labels[I];
      w || (w = typeof V == "object" ? V.value : V), y.push({ x: V.x, value: String(w) });
    }
    return y;
  }), m = _(() => d(c.value, u.value)), S = _(() => m.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(m.value[0].x - m.value[1].x) - r.value) / 2), v = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  ne(() => {
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return b("svg", { display: "block" }, [b("defs", null, [b("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => b("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), b("clipPath", { id: `${l.value}-clip` }, [m.value.map((h) => b("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: v.value, ry: v.value }, [e.autoDraw && !jn() && b(he, null, [b("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), b("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && b("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, k) => {
      var _a3;
      return b("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), b("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [b("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function HD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && zD(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min($v(u, i), $v(s, i)), m = d / 2 < t ? d / 2 : t, S = Rv(u, i, m), v = Rv(s, i, m);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${v.x} ${v.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Ii(e) {
  return parseInt(e, 10);
}
function zD(e, t, n) {
  return Ii(e.x + n.x) === Ii(2 * t.x) && Ii(e.y + n.y) === Ii(2 * t.y);
}
function $v(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Rv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Jb = H({ fill: Boolean, ...Xb() }, "VTrendline"), Lv = Q()({ name: "VTrendline", props: Jb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = X(0), r = X(null);
  function s(y, h) {
    const { minX: k, maxX: I, minY: V, maxY: w } = h;
    y.length === 1 && (y = [y[0], y[0]]);
    const g = y.length, C = e.max != null ? Number(e.max) : Math.max(...y), x = e.min != null ? Number(e.min) : Math.min(...y), A = (I - k) / (g - 1), P = (w - V) / (C - x || 1);
    return y.map((E, D) => ({ x: k + D * A, y: w - (E - x) * P, value: E }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const y = Number(e.padding);
    return { minX: y, maxX: d.value - y, minY: y, maxY: parseInt(e.height, 10) - y };
  }), m = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y))), S = _(() => {
    const y = [], h = s(m.value, f.value), k = h.length;
    for (let I = 0; y.length < k; I++) {
      const V = h[I];
      let w = e.labels[I];
      w || (w = typeof V == "object" ? V.value : V), y.push({ x: V.x, value: String(w) });
    }
    return y;
  });
  ue(() => e.modelValue, async () => {
    if (await Ee(), !e.autoDraw || !r.value || jn()) return;
    const y = r.value, h = y.getTotalLength();
    e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function v(y) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return HD(s(m.value, f.value), h, y, parseInt(e.height, 10));
  }
  ne(() => {
    var _a3;
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return b("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [b("defs", null, [b("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => b("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && b("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, k) => {
      var _a4;
      return b("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), b("path", { ref: r, d: v(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && b("path", { d: v(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), WD = H({ type: { type: String, default: "trend" }, ...Zb(), ...Jb() }, "VSparkline"), jD = Q()({ name: "VSparkline", props: WD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ne(() => {
    const r = e.type === "trend" ? Lv : Bv, s = e.type === "trend" ? Lv.filterProps(e) : Bv.filterProps(e);
    return p(r, Y({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), UD = H({ ...pe(), ...uy({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), GD = Q()({ name: "VSpeedDial", props: UD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = X(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return ne(() => {
    const r = ql.filterProps(e);
    return p(ql, Y(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => p(Be, { defaults: { VBtn: { size: "small" } } }, { default: () => [p(Kt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), gd = Symbol.for("vuetify:v-stepper"), Qb = H({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), ep = Q()({ name: "VStepperActions", props: Qb(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return ne(() => {
    const r = { onClick: o }, s = { onClick: i };
    return b("div", { class: "v-stepper-actions" }, [p(Be, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? p(ze, r, null)];
    } }), p(Be, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? p(ze, s, null)];
    } })]);
  }), {};
} }), tp = ga("v-stepper-header"), YD = H({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: _e, default: "$complete" }, editable: Boolean, editIcon: { type: _e, default: "$edit" }, error: Boolean, errorIcon: { type: _e, default: "$error" }, icon: _e, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), KD = H({ ...YD(), ...Sl() }, "VStepperItem"), np = Q()({ name: "VStepperItem", directives: { vRipple: Rt }, props: KD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, gd, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ne(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, m = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function v() {
      a == null ? void 0 : a.toggle();
    }
    return at(b("button", { class: te(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: v }, [i.value && ya(true, "v-stepper-item"), p(hn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? p(Ye, { icon: c.value }, null) : l.value)];
    } }), b("div", { class: "v-stepper-item__content" }, [m && b("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && b("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Rt, e.editable && e.ripple, null]]);
  }), {};
} }), qD = H({ ...Le(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), ap = Q()({ name: "VStepperWindow", props: qD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(gd, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return p(sl, Y({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), XD = H({ ...$r() }, "VStepperWindowItem"), lp = Q()({ name: "VStepperWindowItem", props: XD(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return p(ul, Y({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), ZD = H({ altLabels: Boolean, bgColor: String, completeIcon: _e, editIcon: _e, editable: Boolean, errorIcon: _e, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...gl() }, "Stepper"), JD = H({ ...ZD(), ...pl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Hc(), ...tn(Qb(), ["prevText", "nextText"]) }, "VStepper"), QD = Q()({ name: "VStepper", props: JD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Na(e, gd), { displayClasses: r, mobile: s } = on(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: m, prevText: S, nextText: v } = Zl(e), y = _(() => e.items.map((I, V) => {
    const w = pt(I, e.itemTitle, I), g = pt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : pt(I, e.itemProps), x = { title: w, value: g, ...C };
    return { title: x.title, value: x.value, props: x, raw: I };
  })), h = _(() => a.value.findIndex((I) => i.value.includes(I.id))), k = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return mt({ VStepperItem: { editable: m, errorIcon: d, completeIcon: u, editIcon: c, prevText: S, nextText: v }, VStepperActions: { color: f, disabled: k, prevText: S, nextText: v } }), ne(() => {
    const I = Ra.filterProps(e), V = !!(n.header || e.items.length), w = e.items.length > 0, g = !e.hideActions && !!(w || n.actions);
    return p(Ra, Y(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && p(tp, { key: "stepper-header" }, { default: () => [y.value.map((C, x) => {
        let { raw: A, ...P } = C;
        return b(he, null, [!!x && p(mn, null, null), p(np, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), w && p(ap, { key: "stepper-window" }, { default: () => [y.value.map((C) => p(lp, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? p(ep, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), eE = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ...Pr() }, "VSwitch"), tE = Q()({ name: "VSwitch", inheritAttrs: false, props: eE(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "indeterminate"), o = we(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: u } = pa(e), c = X(), d = X(), f = ic && window.matchMedia("(forced-colors: active)").matches, m = $(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), v = $(() => e.id || `switch-${S}`);
  function y() {
    l.value && (l.value = false);
  }
  function h(k) {
    var _a3, _b2;
    k.stopPropagation(), k.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return ne(() => {
    const [k, I] = qn(n), V = Nt.filterProps(e), w = $a.filterProps(e);
    return p(Nt, Y({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, k, V, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: v.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: x, isDisabled: A, isReadonly: P, isValid: E } = g;
      const D = { model: o, isValid: E };
      return p($a, Y({ ref: c }, w, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, y], id: C.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (M) => {
        let { backgroundColorClasses: T, backgroundColorStyles: L } = M;
        return b("div", { class: te(["v-switch__track", f ? void 0 : T.value]), style: me(L.value), onClick: h }, [a["track-true"] && b("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && b("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: T, icon: L, backgroundColorClasses: z, backgroundColorStyles: O } = M;
        return b(he, null, [T, b("div", { class: te(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : z.value]), style: me(e.inset ? void 0 : O.value) }, [a.thumb ? p(Be, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: L })] }) : p(xc, null, { default: () => [e.loading ? p(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : m.value }, { default: (Z) => a.loader ? a.loader(Z) : p(Ba, { active: Z.isActive, color: Z.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && p(Ye, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), nE = H({ color: String, height: [Number, String], window: Boolean, ...pe(), ...xt(), ...hl(), ...it(), ...Me(), ...Ue() }, "VSystemBar"), aE = Q()({ name: "VSystemBar", props: nE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), { ssrBootStyles: s } = bl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: re("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: $(() => e.absolute) });
  return ne(() => p(e.tag, { class: te(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: me([o.value, c.value, s.value, e.style]) }, n)), {};
} }), hd = Symbol.for("vuetify:v-tabs"), op = H({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Le(Ir({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), ip = Q()({ name: "VTab", props: op(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Et(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.sliderColor), s = X(), u = X(), c = _(() => e.direction === "horizontal"), d = _(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(y, h) {
    return { opacity: [0, 1] };
  }
  function m(y, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function S(y, h) {
    const k = h.getBoundingClientRect(), I = y.getBoundingClientRect(), V = c.value ? "x" : "y", w = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", C = c.value ? "width" : "height", x = k[V], A = I[V], P = x > A ? k[g] - I[g] : k[V] - I[V], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? k[C] : I[C])) / Math.max(k[C], I[C]) || 0, T = k[C] / I[C] || 0, L = 1.5;
    return { transform: [`translate${w}(${P}px) scale${w}(${T})`, `translate${w}(${P / L}px) scale${w}(${(M - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function v(y) {
    var _a3, _b2;
    let { value: h } = y;
    if (h) {
      const k = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!k || !I) return;
      const V = getComputedStyle(k).backgroundColor, w = { fade: f, grow: m, shift: S }[e.sliderTransition ?? "shift"] ?? S, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      aa(I, { backgroundColor: [V, V], ...w(I, k) }, { duration: g, easing: Ro });
    }
  }
  return ne(() => {
    const y = ze.filterProps(e);
    return p(ze, Y({ symbol: hd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, y, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": v }), { ...n, default: () => {
      var _a3;
      return b(he, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && b("div", { ref: u, class: te(["v-tab__slider", e.inset ? i.value : l.value]), style: me([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), lE = H({ ...Le(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), rp = Q()({ name: "VTabsWindow", props: lE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(hd, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return p(sl, Y({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), oE = H({ ...$r() }, "VTabsWindowItem"), sp = Q()({ name: "VTabsWindowItem", props: oE(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return p(ul, Y({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function iE(e) {
  return e ? e.map((t) => il(t) ? t : { text: t, value: t }) : [];
}
const rE = H({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...tn(op(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Tc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...gt(), ...Me() }, "VTabs"), sE = Q()({ name: "VTabs", props: rE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), o = _(() => iE(e.items)), { densityClasses: i } = Lt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { scopeId: u } = kl();
  return mt({ VTab: { color: $(e, "color"), direction: $(e, "direction"), stacked: $(e, "stacked"), fixed: $(e, "fixedTabs"), inset: $(e, "inset"), sliderColor: $(e, "sliderColor"), sliderTransition: $(e, "sliderTransition"), sliderTransitionDuration: $(e, "sliderTransitionDuration"), hideSlider: $(e, "hideSlider") } }), ne(() => {
    const c = Uo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return b(he, null, [p(Uo, Y(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ve(e.height), "--v-tabs-inset-padding": e.inset ? ve(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ve(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: hd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? p(ip, Y(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && p(rp, Y({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? p(sp, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), uE = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...cy(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextarea"), cE = Q()({ name: "VTextarea", directives: { vIntersect: Dn }, inheritAttrs: false, props: uE(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue"), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = dy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = X(), m = X(), S = re(""), v = X(), y = X(0), { platform: h } = on(), k = zc(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a3;
    k.isSuppressing.value && k.update(), v.value !== document.activeElement && ((_a3 = v.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function w(T) {
    V(), a("click:control", T);
  }
  function g(T) {
    a("mousedown:control", T);
  }
  function C(T) {
    T.stopPropagation(), V(), Ee(() => {
      o.value = "", ai(e["onClick:clear"], T);
    });
  }
  function x(T) {
    var _a3;
    const L = T.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = L.value;
      return;
    }
    const z = L.value, O = L.selectionStart, Z = L.selectionEnd;
    o.value = z, Ee(() => {
      let J = 0;
      z.trimStart().length === L.value.length && (J = z.length - L.value.length), O != null && (L.selectionStart = O - J), Z != null && (L.selectionEnd = Z - J);
    });
  }
  const A = X(), P = X(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
  ct(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Ee(() => {
      if (!v.value) return;
      if (h.value.firefox) {
        y.value = 12;
        return;
      }
      const { offsetWidth: T, clientWidth: L } = v.value;
      y.value = Math.max(0, T - L);
    }), e.autoGrow && Ee(() => {
      if (!A.value || !m.value) return;
      const T = getComputedStyle(A.value), L = getComputedStyle(m.value.$el), z = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), O = A.value.scrollHeight, Z = parseFloat(T.lineHeight), J = Math.max(parseFloat(e.rows) * Z + z, parseFloat(L.getPropertyValue("--v-input-control-height"))), F = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Z + z || 1 / 0, G = Ze(O ?? 0, J, F);
      P.value = Math.floor((G - z) / Z), S.value = ve(G);
    });
  }
  Ct(D), ue(o, D), ue(() => e.rows, D), ue(() => e.maxHeight, D), ue(() => e.maxRows, D), ue(() => e.density, D), ue(P, (T) => {
    a("update:rows", T);
  });
  let M;
  return ue(A, (T) => {
    T ? (M = new ResizeObserver(D), M.observe(A.value)) : M == null ? void 0 : M.disconnect();
  }), Ht(() => {
    M == null ? void 0 : M.disconnect();
  }), ne(() => {
    const T = !!(l.counter || e.counter || e.counterValue), L = !!(T || l.details), [z, O] = qn(n), { modelValue: Z, ...J } = Nt.filterProps(e), F = { ...La.filterProps(e), "onClick:clear": C };
    return p(Nt, Y({ ref: f, modelValue: o.value, "onUpdate:modelValue": (G) => o.value = G, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ve(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ve(y.value) }, e.style] }, z, J, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (G) => {
      let { id: W, isDisabled: N, isDirty: j, isReadonly: ie, isValid: be, hasDetails: ae } = G;
      return p(La, Y({ ref: m, style: { "--v-textarea-control-height": S.value }, onClick: w, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, F, { id: W.value, active: I.value || j.value, labelId: `${W.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: j.value || e.dirty, disabled: N.value, focused: i.value, details: ae.value, error: be.value === false }), { ...l, default: (de) => {
        let { props: { class: Pe, ...xe }, controlRef: ge } = de;
        return b(he, null, [e.prefix && b("span", { class: "v-text-field__prefix" }, [e.prefix]), at(b("textarea", Y({ ref: (R) => v.value = ge.value = R, class: Pe, value: o.value, onInput: x, autofocus: e.autofocus, readonly: ie.value, disabled: N.value, placeholder: e.placeholder, rows: e.rows, name: k.fieldName.value, autocomplete: k.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${W.value}-label` }, xe, O), null), [[Dn, { handler: u }, null, { once: true }]]), e.autoGrow && at(b("textarea", { class: te([Pe, "v-textarea__sizer"]), id: `${xe.id}-sizer`, "onUpdate:modelValue": (R) => o.value = R, ref: A, readonly: true, "aria-hidden": "true" }, null), [[Rk, o.value]]), e.suffix && b("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (G) => {
      var _a3;
      return b(he, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, G), T && b(he, null, [b("span", null, null), p(Ar, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, m, v);
} }), dE = H({ withBackground: Boolean, ...pe(), ...Ue(), ...Me() }, "VThemeProvider"), fE = Q()({ name: "VThemeProvider", props: dE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e);
  return () => {
    var _a3;
    return e.withBackground ? p(e.tag, { class: te(["v-theme-provider", a.value, e.class]), style: me(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), vE = H({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: _e, iconColor: String, lineColor: String, ...pe(), ...it(), ...Jn(), ...xt() }, "VTimelineDivider"), mE = Q()({ name: "VTimelineDivider", props: vE(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ql(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Xe(() => e.dotColor), { roundedClasses: r } = dt(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Xe(() => e.lineColor);
  return ne(() => b("div", { class: te(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: me(e.style) }, [b("div", { class: te(["v-timeline-divider__before", u.value]), style: me(c.value) }, null), !e.hideDot && b("div", { key: "dot", class: te(["v-timeline-divider__dot", s.value, r.value, a.value]), style: me(l.value) }, [b("div", { class: te(["v-timeline-divider__inner-dot", i.value, r.value]), style: me(o.value) }, [n.default ? p(Be, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : p(Ye, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), b("div", { class: te(["v-timeline-divider__after", u.value]), style: me(c.value) }, null)])), {};
} }), up = H({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: _e, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...pe(), ...kt(), ...xt(), ...it(), ...Jn(), ...Me() }, "VTimelineItem"), gE = Q()({ name: "VTimelineItem", props: up(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = re(0), o = X();
  return ue(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ne(() => {
    var _a3, _b2;
    return b("div", { class: te(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: me([{ "--v-timeline-dot-size": ve(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ve(e.lineInset)})` : ve(0) }, e.style]) }, [b("div", { class: "v-timeline-item__body", style: me(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), p(mE, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && b("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), hE = H({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...tn(up({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...pe(), ...gt(), ...Me(), ...Ue() }, "VTimeline"), yE = Q()({ name: "VTimeline", props: hE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Lt(e), { rtlClasses: o } = _t();
  mt({ VTimelineDivider: { lineColor: $(() => e.lineColor) }, VTimelineItem: { density: $(() => e.density), dotColor: $(() => e.dotColor), fillDot: $(() => e.fillDot), hideOpposite: $(() => e.hideOpposite), iconColor: $(() => e.iconColor), lineColor: $(() => e.lineColor), lineInset: $(() => e.lineInset), size: $(() => e.size) } });
  const i = _(() => {
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
  return ne(() => p(e.tag, { class: te(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: me([{ "--v-timeline-line-thickness": ve(e.lineThickness) }, e.style]) }, n)), {};
} }), bE = H({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Eu = Q()({ name: "VTimePickerClock", props: bE(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = X(null), l = X(null), o = X(void 0), i = X(false), r = X(null), s = X(null), u = Ig((F) => n("change", F), 750), { textColorClasses: c, textColorStyles: d } = Et(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: m } = Xe(() => e.color), S = _(() => e.max - e.min + 1), v = _(() => e.double ? S.value / 2 : S.value), y = _(() => 360 / v.value), h = _(() => y.value * Math.PI / 180), k = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const F = [];
    for (let G = e.min; G <= e.max; G = G + e.step) F.push(G);
    return F;
  });
  ue(() => e.modelValue, (F) => {
    o.value = F;
  });
  function w(F) {
    o.value !== F && (o.value = F), n("input", F);
  }
  function g(F) {
    return !e.allowedValues || e.allowedValues(F);
  }
  function C(F) {
    if (!e.scrollable || e.disabled) return;
    F.preventDefault();
    const G = Math.sign(-F.deltaY || 1);
    let W = k.value;
    do
      W = W + G, W = (W - e.min + S.value) % S.value + e.min;
    while (!g(W) && W !== k.value);
    W !== e.displayedValue && w(W), u(W);
  }
  function x(F) {
    return e.double && F - e.min >= v.value;
  }
  function A(F) {
    return x(F) ? I.value : 1;
  }
  function P(F) {
    const G = e.rotate * Math.PI / 180;
    return { x: Math.sin((F - e.min) * h.value + G) * A(F), y: -Math.cos((F - e.min) * h.value + G) * A(F) };
  }
  function E(F, G) {
    const W = (Math.round(F / y.value) + (G ? v.value : 0)) % S.value + e.min;
    return F < 360 - y.value / 2 ? W : G ? e.max - v.value + 1 : e.min;
  }
  function D(F) {
    const { x: G, y: W } = P(F);
    return { left: `${Math.round(50 + G * 50)}%`, top: `${Math.round(50 + W * 50)}%` };
  }
  function M(F, G) {
    const W = G.x - F.x, N = G.y - F.y;
    return Math.sqrt(W * W + N * N);
  }
  function T(F, G) {
    const W = 2 * Math.atan2(G.y - F.y - M(F, G), G.x - F.x);
    return Math.abs(W * 180 / Math.PI);
  }
  function L(F) {
    r.value === null && (r.value = F), s.value = F, w(F);
  }
  function z(F) {
    var _a3, _b2;
    if (F.preventDefault(), !i.value && F.type !== "click" || !a.value) return;
    const { width: G, top: W, left: N } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: j } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ie, clientY: be } = "touches" in F ? F.touches[0] : F, ae = { x: G / 2, y: -G / 2 }, de = { x: ie - N, y: W - be }, Pe = Math.round(T(ae, de) - e.rotate + 360) % 360, xe = e.double && M(ae, de) < (j + j * I.value) / 4, ge = Math.ceil(15 / y.value);
    let R;
    for (let B = 0; B < ge; B++) if (R = E(Pe + B * y.value, xe), g(R) || (R = E(Pe - B * y.value, xe), g(R))) return L(R);
  }
  function O(F) {
    e.disabled || (F.preventDefault(), window.addEventListener("mousemove", z), window.addEventListener("touchmove", z), window.addEventListener("mouseup", Z), window.addEventListener("touchend", Z), r.value = null, s.value = null, i.value = true, z(F));
  }
  function Z(F) {
    F.stopPropagation(), J(), i.value = false, s.value !== null && g(s.value) && n("change", s.value);
  }
  function J() {
    window.removeEventListener("mousemove", z), window.removeEventListener("touchmove", z), window.removeEventListener("mouseup", Z), window.removeEventListener("touchend", Z);
  }
  bt(J), ne(() => b("div", { class: te([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: O, onTouchstart: O, onWheel: C, ref: a }, [b("div", { class: "v-time-picker-clock__inner", ref: l }, [b("div", { class: te([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": x(e.modelValue) }, c.value]), style: me([{ transform: `rotate(${e.rotate + y.value * (k.value - e.min)}deg) scaleY(${A(k.value)})` }, d.value]) }, null), V.value.map((F) => {
    const G = F === k.value;
    return b("div", { class: te([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": G, "v-time-picker-clock__item--disabled": e.disabled || !g(F) }, G && f.value]), style: me([D(F), G && m.value]) }, [b("span", null, [e.format(F)])]);
  })])]));
} }), pE = H({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), Vs = Q()({ name: "VTimePickerField", props: pE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = X(), i = re(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ne(() => p(Yn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: te(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: me(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function cp(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Vo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function SE(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function kE(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const dp = H({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function fp(e) {
  const t = _(() => {
    const o = e.min ? Number(e.min.split(":")[0]) : 0, i = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < o || r > i ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = _(() => {
    const [o, i] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], u = o * 60 + i, c = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const m = 60 * d + f;
        if (m < u || m > c) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = _(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (m, S, v) => {
      if (m !== null && S !== null) {
        const y = 3600 * m + 60 * S + v;
        if (y < d || y > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(v) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(v) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (m) => n.value(s, m) : (m) => a.value(s, u, m), d = o === "hour" ? (m) => SE(m, r).value : (m) => kE(m, r), f = o === "hour" ? 24 : 60;
    for (let m = 1; m <= f && (i = d(i), !c(i)); m++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const wE = H({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...dp() }, "VTimePickerControls"), Mu = Q()({ name: "VTimePickerControls", props: wE(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = fp(e), s = _(() => e.hour !== null ? e.ampm ? Vo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), m = { in: (M) => {
    if (M == null || isNaN(Number(M))) return null;
    const T = Number(M);
    return e.ampm ? sn(cp(T)) : sn(T);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T === null ? null : e.ampm ? Vo(T, e.period ?? "am") : Ze(T, 0, 23);
  } }, S = we(e, "hour", void 0, m.in, m.out), v = { in: (M) => M != null && !isNaN(Number(M)) ? sn(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T !== null ? Ze(T, 0, 59) : null;
  } }, y = we(e, "minute", void 0, v.in, v.out), h = we(e, "second", void 0, v.in, v.out);
  function k(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = e.period === "am", L = e.ampm ? Vo(Number(S.value ?? 0), T ? "am" : "pm") : Number(S.value ?? 0), z = r("hour", L, M.key === "ArrowUp"), O = T && z >= 12 || !T && z < 12;
    e.ampm && O ? (n("update:period", e.period === "am" ? "pm" : "am"), Ee(() => S.value = sn(z))) : S.value = sn(z);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(y.value ?? 0), L = r("minute", T, M.key === "ArrowUp", s.value);
    y.value = sn(L);
  }
  function V(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(h.value ?? 0), L = r("second", T, M.key === "ArrowUp", s.value, u.value);
    h.value = sn(L);
  }
  function w(M, T, L) {
    return (z) => {
      if (!z.data) return;
      const O = z.target, { value: Z, selectionStart: J, selectionEnd: F } = O ?? {};
      if (co(z.data) === null) {
        z.preventDefault();
        return;
      }
      const G = Z ? Z.slice(0, J) + z.data + Z.slice(F) : z.data;
      if (G.length > 2) {
        if (J === F && F === 0 && z.data.trim().startsWith("0")) {
          z.preventDefault(), O.value = G.trim().substring(0, 2), L(O.value), z.data.trim().length === 1 && O.setSelectionRange(1, 1);
          return;
        }
        if (J === F && F === 1 && Z.startsWith("0")) {
          z.preventDefault(), O.value = G.trim().substring(0, 2), L(O.value);
          return;
        }
        const N = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(G) > N) {
          z.preventDefault(), O.value = sn(String(co(z.data)).substring(0, 2)), L(O.value);
          return;
        }
      }
      const W = M(G);
      T(W) && z.preventDefault();
    };
  }
  function g(M) {
    n("update:period", M);
    const T = r("hour", M === "am" ? 23 : 11, true);
    Ee(() => S.value = sn(T));
  }
  const C = X(), x = X(), A = X();
  ue(() => e.viewMode, (M, T) => {
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
  const P = w(m.out, (M) => m.in(M) === S.value, (M) => S.value = M), E = w(v.out, (M) => v.in(M) === y.value, (M) => y.value = M), D = w(v.out, (M) => v.in(M) === h.value, (M) => h.value = M);
  return ne(() => b("div", { class: "v-time-picker-controls" }, [b("div", { class: te({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [p(Vs, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: k, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), b("span", { class: "v-time-picker-controls__time__separator" }, [Ke(":")]), p(Vs, { ref: x, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (M) => y.value = M, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && b("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Ke(":")]), e.useSeconds && b(he, null, [p(Vs, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && b("div", { class: "v-time-picker-controls__ampm" }, [p(ze, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), p(ze, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), xE = H({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...dp(), ...Le(Rr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...gt() }, "VTimePicker"), CE = Q()({ name: "VTimePicker", props: xE(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), { densityClasses: o } = Lt(e), i = X(null), r = X(null), s = X(null), u = X(null), c = X(null), d = X(null), f = we(e, "period", "am"), m = we(e, "viewMode", "hour"), S = X(null), v = X(null), y = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: k, isAllowedSecond: I } = fp(e), V = $(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function w() {
    const P = g();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  ue(i, w), ue(r, w), ue(s, w), ue(() => e.modelValue, (P) => C(P)), ue(() => e.useSeconds, (P, E) => {
    E && !P && m.value === "second" && (m.value = "minute"), !P && s.value !== null && (s.value = null);
  }), Ct(() => {
    C(e.modelValue);
  });
  function g() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${sn(i.value)}:${sn(r.value)}` + (e.useSeconds ? `:${sn(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [E, , D, , M, T] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = T ? Vo(parseInt(E, 10), T) : parseInt(E, 10), r.value = parseInt(D, 10), s.value = parseInt(M || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function x(P) {
    m.value === "hour" ? i.value = y.value ? Vo(P, f.value) : P : m.value === "minute" ? r.value = P : s.value = P;
  }
  function A(P) {
    switch (m.value || "hour") {
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
    const E = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    m.value === "hour" ? m.value = "minute" : e.useSeconds && m.value === "minute" && (m.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && w());
  }
  ne(() => {
    const P = Le(Xl.filterProps(e), ["hideHeader"]), E = Mu.filterProps(e), D = Eu.filterProps(Le(e, ["format", "modelValue", "min", "max"])), M = m.value === "hour" ? h.value : m.value === "minute" ? (T) => k.value(i.value, T) : (T) => I.value(i.value, r.value, T);
    return p(Xl, Y(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? b("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => p(Mu, Y(E, { ampm: y.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: m.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => m.value = T, ref: S }), null), default: () => p(Eu, Y(D, { allowedValues: M, double: m.value === "hour" && !y.value, format: m.value === "hour" ? y.value ? cp : (T) => T : (T) => sn(T, 2), max: m.value === "hour" ? y.value && f.value === "am" ? 11 : 23 : 59, min: m.value === "hour" && y.value && f.value === "pm" ? 12 : 0, size: 20, step: m.value === "hour" ? 1 : 5, modelValue: m.value === "hour" ? i.value : m.value === "minute" ? r.value : s.value, onChange: A, onInput: x, ref: v }), null), actions: a.actions });
  });
} }), _E = H({ ...pe(), ...bn({ variant: "text" }) }, "VToolbarItems"), VE = Q()({ name: "VToolbarItems", props: _E(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: $(() => e.color), height: "inherit", variant: $(() => e.variant) } }), ne(() => {
    var _a3;
    return b("div", { class: te(["v-toolbar-items", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), IE = H({ id: String, interactive: Boolean, text: String, ...Le(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), vp = Q()({ name: "VTooltip", props: IE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), o = Mt(), i = $(() => e.id || `v-tooltip-${o}`), r = X(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = $(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => Y({ "aria-describedby": i.value }, e.activatorProps));
  return ne(() => {
    const f = Gn.filterProps(e);
    return p(Gn, Y({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (m) => a.value = m, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var m = arguments.length, S = new Array(m), v = 0; v < m; v++) S[v] = arguments[v];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), Pt({}, r);
} }), PE = H({ ...Le(jh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Bu = Q()({ name: "VTreeviewGroup", props: PE(), setup(e, t) {
  let { slots: n } = t;
  const a = X(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ne(() => {
    const i = Go.filterProps(e);
    return p(Go, Y(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => b(he, null, [p(Be, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), mp = Symbol.for("vuetify:v-treeview"), gp = H({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: _e, ...Yh({ slim: true }) }, "VTreeviewItem"), $u = Q()({ name: "VTreeviewItem", props: gp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(mp, { visibleIds: X() }).visibleIds, o = X(), i = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = _(() => {
    var _a3;
    return l.value && !l.value.has(De((_a3 = o.value) == null ? void 0 : _a3.id));
  });
  function c(f) {
    var _a3, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a3 = o.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return ne(() => {
    var _a3;
    const f = xn.filterProps(e), m = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return p(xn, Y({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: m ? (S) => {
      var _a4;
      return b(he, null, [e.indentLines && e.indentLines.length > 0 ? b("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((v) => b("div", { class: te(`v-treeview-indent-line v-treeview-indent-line--${v}`) }, null))]) : "", !e.hideActions && p($c, { start: true }, { default: () => [e.toggleIcon ? b(he, null, [n.toggle ? p(Be, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : p(ze, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => p(Ba, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : b("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? p(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : b(he, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), hp = H({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, falseIcon: _e, trueIcon: _e, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...tn(gp(), ["hideActions"]), ...gt() }, "VTreeviewChildren"), ar = Q()({ name: "VTreeviewChildren", props: hp(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(/* @__PURE__ */ new Set()), l = X([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, m = a.has(s.value), S = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), v = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, y = c.length - 1 === u, h = { index: u, depth: v, isFirst: u === 0, isLast: y, path: [...e.path, u], hideAction: e.hideActions }, k = K0({ depth: v, isLast: y, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: m });
      } : void 0, prepend: (C) => {
        var _a5;
        return b(he, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && p($c, { start: true }, { default: () => [p(En, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: m, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (x) => r(C.select, x), onClick: (x) => x.stopPropagation(), onKeydown: (x) => {
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
      } : void 0 }, V = Bu.filterProps(f), w = ar.filterProps({ ...e, ...h }), g = { hideActions: e.hideActions, indentLines: k.footer };
      return d ? p(Bu, Y(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: x, isOpen: A } = C;
        const P = { ...f, ...x, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: k.node, ariaExpanded: A, onToggleExpand: [() => i(s), x.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), x.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return wi(n.header, { props: P, item: s.raw, internalItem: s, loading: m }, () => p($u, Y({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: m }), I));
      }, default: () => {
        var _a5;
        return b(he, null, [p(ar, Y(w, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: k.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: m })]);
      } }) : wi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? wi(n.divider, { props: s.raw }, () => p(mn, s.props, null)) : s.type === "subheader" ? wi(n.subheader, { props: s.raw }, () => p(lo, s.props, null)) : p($u, Y(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: k.leaf, value: e.returnObject ? De(s.raw) : f.value }), I));
    }));
  };
} });
function yp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && yp(n.children, t);
  return t;
}
const AE = H({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Le(hp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Le(Qh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), TE = Q()({ name: "VTreeview", props: AE(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Qe(), { items: o } = Jh(e), i = $(() => e.activeColor), r = $(() => e.baseColor), s = $(() => e.color), u = we(e, "activated"), c = we(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = X(), m = _(() => e.openAll ? I(o.value) : e.opened), S = _(() => yp(o.value)), v = $(() => e.search), { filteredItems: y } = xl(e, S, v), h = _(() => {
    var _a3;
    if (!v.value) return null;
    const V = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return V ? new Set(y.value.flatMap((w) => {
      const g = e.returnObject ? w.raw : w.props.value;
      return [...V(g), ...k(g)].map(De);
    })) : null;
  });
  function k(V) {
    var _a3, _b2;
    const w = [], g = (((_a3 = f.value) == null ? void 0 : _a3.children.get(V)) ?? []).slice();
    for (; g.length; ) {
      const C = g.shift();
      C && (w.push(C), g.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return w;
  }
  function I(V) {
    let w = [];
    for (const g of V) g.children && (w.push(e.returnObject ? De(g.raw) : g.value), g.children && (w = w.concat(I(g.children))));
    return w;
  }
  return rt(mp, { visibleIds: h }), mt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: $(() => e.collapseIcon), expandIcon: $(() => e.expandIcon) }, VTreeviewItem: { activeClass: $(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: $(() => e.density), disabled: $(() => e.disabled), lines: $(() => e.lines), variant: $(() => e.variant) } }), ne(() => {
    const V = Kl.filterProps(e), w = ar.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return p(Kl, Y({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: m.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: l(e.noDataText) }, null)), p(ar, Y(w, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), DE = Q()({ name: "VValidation", props: Eh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Mh(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), EE = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: R_, VAlertTitle: Ch, VApp: O1, VAppBar: i_, VAppBarNavIcon: E_, VAppBarTitle: M_, VAutocomplete: lI, VAvatar: hn, VBadge: gy, VBanner: sI, VBannerActions: hy, VBannerText: yy, VBottomNavigation: cI, VBottomSheet: fI, VBreadcrumbs: hI, VBreadcrumbsDivider: py, VBreadcrumbsItem: Sy, VBtn: ze, VBtnGroup: au, VBtnToggle: f_, VCalendar: mP, VCard: SP, VCardActions: Hy, VCardItem: jy, VCardSubtitle: zy, VCardText: Uy, VCardTitle: Wy, VCarousel: AP, VCarouselItem: DP, VCheckbox: Y_, VCheckboxBtn: En, VChip: fa, VChipGroup: J_, VClassIcon: hc, VCode: EP, VCol: rT, VColorPicker: SA, VCombobox: wA, VComponentIcon: Zs, VConfirmEdit: CA, VContainer: aT, VCounter: Ar, VDataIterator: LA, VDataTable: ZA, VDataTableFooter: Ko, VDataTableHeaders: cl, VDataTableRow: cd, VDataTableRows: dl, VDataTableServer: tT, VDataTableVirtual: QA, VDatePicker: pT, VDatePickerControls: xu, VDatePickerHeader: Cu, VDatePickerMonth: _u, VDatePickerMonths: Vu, VDatePickerYears: Iu, VDefaultsProvider: Be, VDialog: du, VDialogBottomTransition: W1, VDialogTopTransition: j1, VDialogTransition: xr, VDivider: mn, VEmptyState: kT, VExpandBothTransition: J1, VExpandTransition: Cr, VExpandXTransition: _c, VExpansionPanel: wT, VExpansionPanelText: Pu, VExpansionPanelTitle: Au, VExpansionPanels: _T, VFab: IT, VFabTransition: z1, VFadeTransition: Ho, VField: La, VFieldLabel: mo, VFileInput: MT, VFooter: $T, VForm: LT, VHotkey: HT, VHover: WT, VIcon: Ye, VImg: da, VInfiniteScroll: UT, VInput: Nt, VItem: KT, VItemGroup: YT, VKbd: Tu, VLabel: no, VLayout: XT, VLayoutItem: JT, VLazy: eD, VLigatureIcon: Z0, VList: Kl, VListGroup: Go, VListImg: SV, VListItem: xn, VListItemAction: $c, VListItemMedia: xV, VListItemSubtitle: Uh, VListItemTitle: Gh, VListSubheader: lo, VLocaleProvider: nD, VMain: lD, VMenu: ql, VMessages: Th, VNavigationDrawer: vD, VNoSsr: mD, VNumberInput: pD, VOtpInput: kD, VOverlay: Gn, VPagination: Su, VParallax: CD, VProgressCircular: Ba, VProgressLinear: _r, VRadio: VD, VRadioGroup: PD, VRangeSlider: TD, VRating: ED, VResponsive: eu, VRow: mT, VScaleTransition: xc, VScrollXReverseTransition: G1, VScrollXTransition: U1, VScrollYReverseTransition: K1, VScrollYTransition: Y1, VSelect: Kc, VSelectionControl: $a, VSelectionControlGroup: Ph, VSheet: Ra, VSkeletonLoader: RD, VSlideGroup: Uo, VSlideGroupItem: LD, VSlideXReverseTransition: X1, VSlideXTransition: q1, VSlideYReverseTransition: Z1, VSlideYTransition: Cc, VSlider: pu, VSnackbar: Du, VSnackbarQueue: ND, VSpacer: wu, VSparkline: jD, VSpeedDial: GD, VStepper: QD, VStepperActions: ep, VStepperHeader: tp, VStepperItem: np, VStepperWindow: ap, VStepperWindowItem: lp, VSvgIcon: gc, VSwitch: tE, VSystemBar: aE, VTab: ip, VTable: fl, VTabs: sE, VTabsWindow: rp, VTabsWindowItem: sp, VTextField: Yn, VTextarea: cE, VThemeProvider: fE, VTimePicker: CE, VTimePickerClock: Eu, VTimePickerControls: Mu, VTimeline: yE, VTimelineItem: gE, VToolbar: nu, VToolbarItems: VE, VToolbarTitle: Sc, VTooltip: vp, VTreeview: TE, VTreeviewGroup: Bu, VTreeviewItem: $u, VValidation: DE, VVirtualScroll: Tr, VWindow: sl, VWindowItem: ul }, Symbol.toStringTag, { value: "Module" }));
function ME(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && bp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function bp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const BE = { mounted: ME, unmounted: bp };
function pp(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function Sp(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function $E(e, t) {
  t.value !== t.oldValue && (Sp(e, t), pp(e, t));
}
const RE = { mounted: pp, unmounted: Sp, updated: $E };
function LE(e, t) {
  const n = typeof e == "string" ? je(e) : e, a = FE(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    cg(null, l);
  } };
}
function FE(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = il(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = OE(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ma(e, Y(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), cg(c, n);
  };
}
function OE(e, t) {
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
const NE = LE(vp, (e) => {
  var _a3;
  return { activator: (il(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), HE = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: cu, Intersect: Dn, Mutate: BE, Resize: Yo, Ripple: Rt, Scroll: RE, Tooltip: NE, Touch: nr }, Symbol.toStringTag, { value: "Module" })), zE = rh({ components: EE, directives: HE, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
Nk(L1).use(zE).mount("#app");
