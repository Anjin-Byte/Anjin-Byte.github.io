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
function $u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ut = {}, $l = [], Hn = () => {
}, Nv = () => false, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Lu = (e) => e.startsWith("onUpdate:"), At = Object.assign, Fu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xp = Object.prototype.hasOwnProperty, tt = (e, t) => xp.call(e, t), $e = Array.isArray, Ll = (e) => Zo(e) === "[object Map]", Hv = (e) => Zo(e) === "[object Set]", bd = (e) => Zo(e) === "[object Date]", He = (e) => typeof e == "function", yt = (e) => typeof e == "string", zn = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", zv = (e) => (et(e) || He(e)) && He(e.then) && He(e.catch), Wv = Object.prototype.toString, Zo = (e) => Wv.call(e), Cp = (e) => Zo(e).slice(8, -1), jv = (e) => Zo(e) === "[object Object]", or = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ho = $u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ir = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _p = /-\w/g, an = ir((e) => e.replace(_p, (t) => t.slice(1).toUpperCase())), Vp = /\B([A-Z])/g, vl = ir((e) => e.replace(Vp, "-$1").toLowerCase()), Yn = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = ir((e) => e ? `on${Yn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Pi = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Uv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Ru = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ip = (e) => {
  const t = yt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let pd;
const rr = () => pd || (pd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ve(e) {
  if ($e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = yt(a) ? Dp(a) : ve(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (yt(e) || et(e)) return e;
}
const Pp = /;(?![^(]*\))/g, Ap = /:([^]+)/, Tp = /\/\*[^]*?\*\//g;
function Dp(e) {
  const t = {};
  return e.replace(Tp, "").split(Pp).forEach((n) => {
    if (n) {
      const a = n.split(Ap);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (yt(e)) t = e;
  else if ($e(e)) for (let n = 0; n < e.length; n++) {
    const a = ee(e[n]);
    a && (t += a + " ");
  }
  else if (et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Ep(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !yt(t) && (e.class = ee(t)), n && (e.style = ve(n)), e;
}
const Mp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bp = $u(Mp);
function Gv(e) {
  return !!e || e === "";
}
function $p(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Ou(e[a], t[a]);
  return n;
}
function Ou(e, t) {
  if (e === t) return true;
  let n = bd(e), a = bd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = zn(e), a = zn(t), n || a) return e === t;
  if (n = $e(e), a = $e(t), n || a) return n && a ? $p(e, t) : false;
  if (n = et(e), a = et(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Ou(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const Yv = (e) => !!(e && e.__v_isRef === true), Ie = (e) => yt(e) ? e : e == null ? "" : $e(e) || et(e) && (e.toString === Wv || !He(e.toString)) ? Yv(e) ? Ie(e.value) : JSON.stringify(e, Kv, 2) : String(e), Kv = (e, t) => Yv(t) ? Kv(e, t.value) : Ll(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Kr(a, o) + " =>"] = l, n), {}) } : Hv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Kr(n)) } : zn(t) ? Kr(t) : et(t) && !$e(t) && !jv(t) ? String(t) : t, Kr = (e, t = "") => {
  var n;
  return zn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class qv {
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
  return new qv(e);
}
function Xv() {
  return jt;
}
function bt(e, t = false) {
  jt && jt.cleanups.push(e);
}
let vt;
const qr = /* @__PURE__ */ new WeakSet();
class Zv {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Sd(this), em(this);
    const t = vt, n = Vn;
    vt = this, Vn = true;
    try {
      return this.fn();
    } finally {
      tm(this), vt = t, Vn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) zu(t);
      this.deps = this.depsTail = void 0, Sd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Vs(this) && this.run();
  }
  get dirty() {
    return Vs(this);
  }
}
let Jv = 0, yo, bo;
function Qv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function Nu() {
  Jv++;
}
function Hu() {
  if (--Jv > 0) return;
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
function em(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tm(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), zu(a), Lp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Vs(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (nm(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function nm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Vs(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = vt, a = Vn;
  vt = e, Vn = true;
  try {
    em(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    vt = n, Vn = a, tm(e), e.flags &= -3;
  }
}
function zu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) zu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Lp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Vn = true;
const am = [];
function ra() {
  am.push(Vn), Vn = false;
}
function sa() {
  const e = am.pop();
  Vn = e === void 0 ? true : e;
}
function Sd(e) {
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
class Fp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!vt || !Vn || vt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== vt) n = this.activeLink = new Fp(vt, this), vt.deps ? (n.prevDep = vt.depsTail, vt.depsTail.nextDep = n, vt.depsTail = n) : vt.deps = vt.depsTail = n, lm(n);
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
    Nu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hu();
    }
  }
}
function lm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) lm(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Li = /* @__PURE__ */ new WeakMap(), Za = Symbol(""), Is = Symbol(""), Po = Symbol("");
function Ut(e, t, n) {
  if (Vn && vt) {
    let a = Li.get(e);
    a || Li.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Wu()), l.map = a, l.key = n), l.track();
  }
}
function la(e, t, n, a, l, o) {
  const i = Li.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (Nu(), t === "clear") i.forEach(r);
  else {
    const s = $e(e), u = s && or(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !zn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(Za)), Ll(e) && r(i.get(Is)));
        break;
      case "delete":
        s || (r(i.get(Za)), Ll(e) && r(i.get(Is)));
        break;
      case "set":
        Ll(e) && r(i.get(Za));
        break;
    }
  }
  Hu();
}
function Rp(e, t) {
  const n = Li.get(e);
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
const Op = { __proto__: null, [Symbol.iterator]() {
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
  return kd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return kd(this, "reduceRight", e, t);
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
const Np = Array.prototype;
function Qn(e, t, n, a, l, o) {
  const i = sr(e), r = i !== e && !gn(e), s = i[t];
  if (s !== Np[t]) {
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
function kd(e, t, n, a) {
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
  ra(), Nu();
  const a = De(e)[t].apply(e, n);
  return Hu(), sa(), a;
}
const Hp = $u("__proto__,__v_isRef,__isVue"), om = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zn));
function zp(e) {
  zn(e) || (e = String(e));
  const t = De(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class im {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? Jp : cm : o ? um : sm).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = $e(t);
    if (!l) {
      let s;
      if (i && (s = Op[n])) return s;
      if (n === "hasOwnProperty") return zp;
    }
    const r = Reflect.get(t, n, ht(t) ? t : a);
    if ((zn(n) ? om.has(n) : Hp(n)) || (l || Ut(t, "get", n), o)) return r;
    if (ht(r)) {
      const s = i && or(n) ? r : r.value;
      return l && et(s) ? al(s) : s;
    }
    return et(r) ? l ? al(r) : Tt(r) : r;
  }
}
class rm extends im {
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
    return (!zn(n) || !om.has(n)) && Ut(t, "has", n), a;
  }
  ownKeys(t) {
    return Ut(t, "iterate", $e(t) ? "length" : Za), Reflect.ownKeys(t);
  }
}
class Wp extends im {
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
const jp = new rm(), Up = new Wp(), Gp = new rm(true);
const Ps = (e) => e, hi = (e) => Reflect.getPrototypeOf(e);
function Yp(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = De(l), i = Ll(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? Ps : t ? Hl : An;
    return !t && Ut(o, "iterate", s ? Is : Za), At(Object.create(u), { next() {
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
function Kp(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = De(o), r = De(l);
    e || (Va(l, r) && Ut(i, "get", l), Ut(i, "get", r));
    const { has: s } = hi(i), u = t ? Ps : e ? Hl : An;
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
    const i = this, r = i.__v_raw, s = De(r), u = t ? Ps : e ? Hl : An;
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
    n[l] = Yp(l, e, t);
  }), n;
}
function ju(e, t) {
  const n = Kp(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(tt(n, l) && l in a ? n : a, l, o);
}
const qp = { get: ju(false, false) }, Xp = { get: ju(false, true) }, Zp = { get: ju(true, false) };
const sm = /* @__PURE__ */ new WeakMap(), um = /* @__PURE__ */ new WeakMap(), cm = /* @__PURE__ */ new WeakMap(), Jp = /* @__PURE__ */ new WeakMap();
function Qp(e) {
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
function eS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qp(Cp(e));
}
function Tt(e) {
  return ua(e) ? e : Uu(e, false, jp, qp, sm);
}
function tS(e) {
  return Uu(e, false, Gp, Xp, um);
}
function al(e) {
  return Uu(e, true, Up, Zp, cm);
}
function Uu(e, t, n, a, l) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = eS(e);
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
function dm(e) {
  return !tt(e, "__v_skip") && Object.isExtensible(e) && Uv(e, "__v_skip", true), e;
}
const An = (e) => et(e) ? Tt(e) : e, Hl = (e) => et(e) ? al(e) : e;
function ht(e) {
  return e ? e.__v_isRef === true : false;
}
function q(e) {
  return fm(e, false);
}
function ie(e) {
  return fm(e, true);
}
function fm(e, t) {
  return ht(e) ? e : new nS(e, t);
}
class nS {
  constructor(t, n) {
    this.dep = new Wu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : An(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || gn(t) || ua(t);
    t = a ? t : De(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : An(t), this.dep.trigger());
  }
}
function Re(e) {
  return ht(e) ? e.value : e;
}
function nt(e) {
  return He(e) ? e() : Re(e);
}
const aS = { get: (e, t, n) => t === "__v_raw" ? e : Re(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return ht(l) && !ht(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function vm(e) {
  return Ia(e) ? e : new Proxy(e, aS);
}
function Zl(e) {
  const t = $e(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = mm(e, n);
  return t;
}
class lS {
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
    return this._shallow && (t = Re(t)), this._value = t === void 0 ? this._defaultValue : t;
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
class oS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return ht(e) ? e : He(e) ? new oS(e) : et(e) && arguments.length > 1 ? mm(e, t, n) : q(e);
}
function mm(e, t, n) {
  return new lS(e, t, n);
}
class iS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && vt !== this) return Qv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return nm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function rS(e, t, n = false) {
  let a, l;
  return He(e) ? a = e : (a = e.get, l = e.set), new iS(a, l, n);
}
const bi = {}, Fi = /* @__PURE__ */ new WeakMap();
let Ya;
function sS(e, t = false, n = Ya) {
  if (n) {
    let a = Fi.get(n);
    a || Fi.set(n, a = []), a.push(e);
  }
}
function uS(e, t, n = ut) {
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
  } : d = Hn, t && l) {
    const V = d, w = l === true ? 1 / 0 : l;
    d = () => oa(V(), w);
  }
  const y = Xv(), h = () => {
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
  return r && r(I), c = new Zv(d), c.scheduler = i ? () => i(I, false) : I, m = (V) => sS(V, false, c), f = c.onStop = () => {
    const V = Fi.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const w of V) w();
      Fi.delete(c);
    }
  }, t ? a ? I(true) : k = c.run() : i ? i(I.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function oa(e, t = 1 / 0, n) {
  if (t <= 0 || !et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, ht(e)) oa(e.value, t, n);
  else if ($e(e)) for (let a = 0; a < e.length; a++) oa(e[a], t, n);
  else if (Hv(e) || Ll(e)) e.forEach((a) => {
    oa(a, t, n);
  });
  else if (jv(e)) {
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
    return l && zv(l) && l.catch((o) => {
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
  cS(e, n, l, a, i);
}
function cS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Jt = [];
let Fn = -1;
const Fl = [];
let _a = null, Al = 0;
const gm = Promise.resolve();
let Ri = null;
function Ee(e) {
  const t = Ri || gm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dS(e) {
  let t = Fn + 1, n = Jt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Jt[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Gu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = Jt[Jt.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? Jt.push(e) : Jt.splice(dS(t), 0, e), e.flags |= 1, hm();
  }
}
function hm() {
  Ri || (Ri = gm.then(bm));
}
function fS(e) {
  $e(e) ? Fl.push(...e) : _a && e.id === -1 ? _a.splice(Al + 1, 0, e) : e.flags & 1 || (Fl.push(e), e.flags |= 1), hm();
}
function wd(e, t, n = Fn + 1) {
  for (; n < Jt.length; n++) {
    const a = Jt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Jt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ym(e) {
  if (Fl.length) {
    const t = [...new Set(Fl)].sort((n, a) => Ao(n) - Ao(a));
    if (Fl.length = 0, _a) {
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
function bm(e) {
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
    Fn = -1, Jt.length = 0, ym(), Ri = null, (Jt.length || Fl.length) && bm();
  }
}
let cn = null, pm = null;
function Oi(e) {
  const t = cn;
  return cn = e, pm = e && e.type.__scopeId || null, t;
}
function Pe(e, t = cn, n) {
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
  if (a || Rl) {
    let l = Rl ? Rl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && He(t) ? t.call(a && a.proxy) : t;
  }
}
const vS = Symbol.for("v-scx"), mS = () => We(vS);
function ct(e, t) {
  return Yu(e, null, t);
}
function re(e, t, n) {
  return Yu(e, t, n);
}
function Yu(e, t, n = ut) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = At({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Mo) {
    if (o === "sync") {
      const m = mS();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!s) {
      const m = () => {
      };
      return m.stop = Hn, m.resume = Hn, m.pause = Hn, m;
    }
  }
  const c = Yt;
  r.call = (m, S, v) => Tn(m, c, S, v);
  let d = false;
  o === "post" ? r.scheduler = (m) => {
    Wt(m, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (m, S) => {
    S ? m() : Gu(m);
  }), r.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const f = uS(e, t, r);
  return Mo && (u ? u.push(f) : s && f()), f;
}
function gS(e, t, n) {
  const a = this.proxy, l = yt(e) ? e.includes(".") ? Sm(a, e) : () => a[e] : e.bind(a, a);
  let o;
  He(t) ? o = t : (o = t.handler, n = t);
  const i = ni(this), r = Yu(l, o.bind(a), n);
  return i(), r;
}
function Sm(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const km = Symbol("_vte"), wm = (e) => e.__isTeleport, po = (e) => e && (e.disabled || e.disabled === ""), xd = (e) => e && (e.defer || e.defer === ""), Cd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _d = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, As = (e, t) => {
  const n = e && e.to;
  return yt(n) ? t ? t(n) : null : n;
}, xm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: m, querySelector: S, createText: v, createComment: y } } = u, h = po(t.props);
  let { shapeFlag: k, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const w = t.el = v(""), g = t.anchor = v("");
    m(w, n, a), m(g, n, a);
    const C = (A, P) => {
      k & 16 && c(I, A, P, l, o, i, r, s);
    }, x = () => {
      const A = t.target = As(t.props, S), P = Ts(A, t, v, m);
      A && (i !== "svg" && Cd(A) ? i = "svg" : i !== "mathml" && _d(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Ai(t, false)));
    };
    h && (C(n, g), Ai(t, true)), xd(t.props) ? (t.el.__isMounted = false, Wt(() => {
      x(), delete t.el.__isMounted;
    }, o)) : x();
  } else {
    if (xd(t.props) && e.el.__isMounted === false) {
      Wt(() => {
        xm.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const w = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, x = po(e.props), A = x ? n : g, P = x ? w : C;
    if (i === "svg" || Cd(g) ? i = "svg" : (i === "mathml" || _d(g)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, A, l, o, i, r), Ju(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, w, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = As(t.props, S);
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
}, move: pi, hydrate: hS };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function hS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
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
  const S = t.target = As(t.props, s), v = po(t.props);
  if (S) {
    const y = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (v ? (m(e, t), f(S, y), t.targetAnchor || Ts(S, t, c, u, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, y), t.targetAnchor || Ts(S, t, c, u), d(y && i(y), t, S, n, a, l, o))), Ai(t, v);
  } else v && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const yS = xm;
function Ai(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Ts(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[km] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Rn = Symbol("_leaveCb"), io = Symbol("_enterCb");
function Cm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ct(() => {
    e.isMounted = true;
  }), Ht(() => {
    e.isUnmounting = true;
  }), e;
}
const Sn = [Function, Array], _m = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Sn, onEnter: Sn, onAfterEnter: Sn, onEnterCancelled: Sn, onBeforeLeave: Sn, onLeave: Sn, onAfterLeave: Sn, onLeaveCancelled: Sn, onBeforeAppear: Sn, onAppear: Sn, onAfterAppear: Sn, onAppearCancelled: Sn }, Vm = (e) => {
  const t = e.subTree;
  return t.component ? Vm(t.component) : t;
}, bS = { name: "BaseTransition", props: _m, setup(e, { slots: t }) {
  const n = ti(), a = Cm();
  return () => {
    const l = t.default && Ku(t.default(), true);
    if (!l || !l.length) return;
    const o = Im(l), i = De(e), { mode: r } = i;
    if (a.isLeaving) return Jr(o);
    const s = Vd(o);
    if (!s) return Jr(o);
    let u = To(s, i, a, n, (d) => u = d);
    s.type !== Gt && ll(s, u);
    let c = n.subTree && Vd(n.subTree);
    if (c && c.type !== Gt && !qa(c, s) && Vm(n).type !== Gt) {
      let d = To(c, i, a, n);
      if (ll(c, d), r === "out-in" && s.type !== Gt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, Jr(o);
      r === "in-out" && s.type !== Gt ? d.delayLeave = (f, m, S) => {
        const v = Pm(a, c);
        v[String(c.key)] = c, f[Rn] = () => {
          m(), f[Rn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          S(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function Im(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Gt) {
      t = n;
      break;
    }
  }
  return t;
}
const pS = bS;
function Pm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function To(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: S, onLeaveCancelled: v, onBeforeAppear: y, onAppear: h, onAfterAppear: k, onAppearCancelled: I } = t, V = String(e.key), w = Pm(n, e), g = (A, P) => {
    A && Tn(A, a, 9, P);
  }, C = (A, P) => {
    const E = P[1];
    g(A, P), $e(A) ? A.every((D) => D.length <= 1) && E() : A.length <= 1 && E();
  }, x = { mode: i, persisted: r, beforeEnter(A) {
    let P = s;
    if (!n.isMounted) if (o) P = y || s;
    else return;
    A[Rn] && A[Rn](true);
    const E = w[V];
    E && qa(e, E) && E.el[Rn] && E.el[Rn](), g(P, [A]);
  }, enter(A) {
    if (w[V] === e) return;
    let P = u, E = c, D = d;
    if (!n.isMounted) if (o) P = h || u, E = k || c, D = I || d;
    else return;
    let M = false;
    A[io] = (F) => {
      M || (M = true, F ? g(D, [A]) : g(E, [A]), x.delayedLeave && x.delayedLeave(), A[io] = void 0);
    };
    const T = A[io].bind(null, false);
    P ? C(P, [A, T]) : T();
  }, leave(A, P) {
    const E = String(e.key);
    if (A[io] && A[io](true), n.isUnmounting) return P();
    g(f, [A]);
    let D = false;
    A[Rn] = (T) => {
      D || (D = true, P(), T ? g(v, [A]) : g(S, [A]), A[Rn] = void 0, w[E] === e && delete w[E]);
    };
    const M = A[Rn].bind(null, false);
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
function Vd(e) {
  if (!cr(e)) return wm(e.type) && e.children ? Im(e.children) : e;
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
function Ku(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ge ? (i.patchFlag & 128 && l++, a = a.concat(Ku(i.children, t, r))) : (t || i.type !== Gt) && a.push(r != null ? ca(i, { key: r }) : i);
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
function Am(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Id(e, t) {
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
  const o = a.shapeFlag & 4 ? gr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === ut ? r.refs = {} : r.refs, d = r.setupState, f = De(d), m = d === ut ? Nv : (v) => Id(c, v) ? false : tt(f, v), S = (v, y) => !(y && Id(c, y));
  if (u != null && u !== s) {
    if (Pd(t), yt(u)) c[u] = null, m(u) && (d[u] = null);
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
      } else Pd(e), h();
    }
  }
}
function Pd(e) {
  const t = Ni.get(e);
  t && (t.flags |= 8, Ni.delete(e));
}
rr().requestIdleCallback;
rr().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function Tm(e, t) {
  Dm(e, "a", t);
}
function qu(e, t) {
  Dm(e, "da", t);
}
function Dm(e, t, n = Yt) {
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
    for (; l && l.parent; ) cr(l.parent.vnode) && SS(a, t, n, l), l = l.parent;
  }
}
function SS(e, t, n, a) {
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
}, Jl = va("bm"), Ct = va("m"), Em = va("bu"), fr = va("u"), Ht = va("bum"), vr = va("um"), kS = va("sp"), wS = va("rtg"), xS = va("rtc");
function CS(e, t = Yt) {
  dr("ec", e, t);
}
const Mm = "components";
function je(e, t) {
  return Bm(Mm, e, true, t) || e;
}
const _S = Symbol.for("v-ndc");
function VS(e) {
  return yt(e) && Bm(Mm, e, false) || e;
}
function Bm(e, t, n = true, a = false) {
  const l = cn || Yt;
  if (l) {
    const o = l.type;
    {
      const r = sk(o, false);
      if (r && (r === t || r === an(t) || r === Yn(an(t)))) return o;
    }
    const i = Ad(l[e] || o[e], t) || Ad(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function Ad(e, t) {
  return e && (e[t] || e[an(t)] || e[Yn(an(t))]);
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
const Ds = (e) => e ? eg(e) ? gr(e) : Ds(e.parent) : null, wo = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ds(e.parent), $root: (e) => Ds(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Lm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Gu(e.update);
}), $nextTick: (e) => e.n || (e.n = Ee.bind(e.proxy)), $watch: (e) => gS.bind(e) }), Qr = (e, t) => e !== ut && !e.__isScriptSetup && tt(e, t), IS = { get({ _: e }, t) {
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
      Es && (i[t] = 0);
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
function Td(e) {
  return $e(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Es = true;
function PS(e) {
  const t = Lm(e), n = e.proxy, a = e.ctx;
  Es = false, t.beforeCreate && Dd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: m, updated: S, activated: v, deactivated: y, beforeDestroy: h, beforeUnmount: k, destroyed: I, unmounted: V, render: w, renderTracked: g, renderTriggered: C, errorCaptured: x, serverPrefetch: A, expose: P, inheritAttrs: E, components: D, directives: M, filters: T } = t;
  if (u && AS(u, a, null), i) for (const N in i) {
    const Z = i[N];
    He(Z) && (a[N] = Z.bind(n));
  }
  if (l) {
    const N = l.call(n, n);
    et(N) && (e.data = Tt(N));
  }
  if (Es = true, o) for (const N in o) {
    const Z = o[N], R = He(Z) ? Z.bind(n, n) : He(Z.get) ? Z.get.bind(n, n) : Hn, $ = !He(Z) && He(Z.set) ? Z.set.bind(n) : Hn, Y = _({ get: R, set: $ });
    Object.defineProperty(a, N, { enumerable: true, configurable: true, get: () => Y.value, set: (j) => Y.value = j });
  }
  if (r) for (const N in r) $m(r[N], a, n, N);
  if (s) {
    const N = He(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((Z) => {
      rt(Z, N[Z]);
    });
  }
  c && Dd(c, e, "c");
  function W(N, Z) {
    $e(Z) ? Z.forEach((R) => N(R.bind(n))) : Z && N(Z.bind(n));
  }
  if (W(Jl, d), W(Ct, f), W(Em, m), W(fr, S), W(Tm, v), W(qu, y), W(CS, x), W(xS, g), W(wS, C), W(Ht, k), W(vr, V), W(kS, A), $e(P)) if (P.length) {
    const N = e.exposed || (e.exposed = {});
    P.forEach((Z) => {
      Object.defineProperty(N, Z, { get: () => n[Z], set: (R) => n[Z] = R, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  w && e.render === Hn && (e.render = w), E != null && (e.inheritAttrs = E), D && (e.components = D), M && (e.directives = M), A && Am(e);
}
function AS(e, t, n = Hn) {
  $e(e) && (e = Ms(e));
  for (const a in e) {
    const l = e[a];
    let o;
    et(l) ? "default" in l ? o = We(l.from || a, l.default, true) : o = We(l.from || a) : o = We(l), ht(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Dd(e, t, n) {
  Tn($e(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $m(e, t, n, a) {
  let l = a.includes(".") ? Sm(n, a) : () => n[a];
  if (yt(e)) {
    const o = t[e];
    He(o) && re(l, o);
  } else if (He(e)) re(l, e.bind(n));
  else if (et(e)) if ($e(e)) e.forEach((o) => $m(o, t, n, a));
  else {
    const o = He(e.handler) ? e.handler.bind(n) : t[e.handler];
    He(o) && re(l, o, e);
  }
}
function Lm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Hi(s, u, i, true)), Hi(s, t, i)), et(t) && o.set(t, s), s;
}
function Hi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Hi(e, o, n, true), l && l.forEach((i) => Hi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = TS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const TS = { data: Ed, props: Md, emits: Md, methods: fo, computed: fo, beforeCreate: Zt, created: Zt, beforeMount: Zt, mounted: Zt, beforeUpdate: Zt, updated: Zt, beforeDestroy: Zt, beforeUnmount: Zt, destroyed: Zt, unmounted: Zt, activated: Zt, deactivated: Zt, errorCaptured: Zt, serverPrefetch: Zt, components: fo, directives: fo, watch: ES, provide: Ed, inject: DS };
function Ed(e, t) {
  return t ? e ? function() {
    return At(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t);
  } : t : e;
}
function DS(e, t) {
  return fo(Ms(e), Ms(t));
}
function Ms(e) {
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
function Md(e, t) {
  return e ? $e(e) && $e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(/* @__PURE__ */ Object.create(null), Td(e), Td(t ?? {})) : t;
}
function ES(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Zt(e[a], t[a]);
  return n;
}
function Fm() {
  return { app: null, config: { isNativeTag: Nv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let MS = 0;
function BS(e, t) {
  return function(a, l = null) {
    He(a) || (a = At({}, a)), l != null && !et(l) && (l = null);
    const o = Fm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: MS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: ck, get config() {
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
      const d = Rl;
      Rl = u;
      try {
        return c();
      } finally {
        Rl = d;
      }
    } };
    return u;
  };
}
let Rl = null;
const $S = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${an(t)}Modifiers`] || e[`${vl(t)}Modifiers`];
function LS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ut;
  let l = n;
  const o = t.startsWith("update:"), i = o && $S(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => yt(c) ? c.trim() : c)), i.number && (l = n.map(Ru)));
  let r, s = a[r = Yr(t)] || a[r = Yr(an(t))];
  !s && o && (s = a[r = Yr(vl(t))]), s && Tn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Tn(u, e, 6, l);
  }
}
const FS = /* @__PURE__ */ new WeakMap();
function Rm(e, t, n = false) {
  const a = n ? FS : t.emitsCache, l = a.get(e);
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
function Bd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: m, ctx: S, inheritAttrs: v } = e, y = Oi(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, w = V;
      h = On(u.call(w, V, c, d, m, f, S)), k = r;
    } else {
      const V = t;
      h = On(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), k = t.props ? r : RS(r);
    }
  } catch (V) {
    xo.length = 0, ur(V, e, 1), h = p(Gt);
  }
  let I = h;
  if (k && v !== false) {
    const V = Object.keys(k), { shapeFlag: w } = I;
    V.length && w & 7 && (o && V.some(Lu) && (k = OS(k, o)), I = ca(I, k, false, true));
  }
  return n.dirs && (I = ca(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ll(I, n.transition), h = I, Oi(y), h;
}
const RS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, OS = (e, t) => {
  const n = {};
  for (const a in e) (!Lu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function NS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? $d(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Om(i, a, f) && !mr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? $d(a, i, u) : true : !!i;
  return false;
}
function $d(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Om(t, e, o) && !mr(n, o)) return true;
  }
  return false;
}
function Om(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && et(a) && et(l) ? !Ou(a, l) : a !== l;
}
function HS({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Nm = {}, Hm = () => Object.create(Nm), zm = (e) => Object.getPrototypeOf(e) === Nm;
function zS(e, t, n, a = false) {
  const l = {}, o = Hm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wm(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : tS(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function WS(e, t, n, a) {
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
          l[S] = Bs(s, r, S, m, e, false);
        }
        else m !== o[f] && (o[f] = m, u = true);
      }
    }
  } else {
    Wm(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !tt(t, d) && ((c = vl(d)) === d || !tt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Bs(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !tt(t, d)) && (delete o[d], u = true);
  }
  u && la(e.attrs, "set", "");
}
function Wm(e, t, n, a) {
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
      n[d] = Bs(l, s, d, u[d], e, !tt(u, d));
    }
  }
  return i;
}
function Bs(e, t, n, a, l, o) {
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
const jS = /* @__PURE__ */ new WeakMap();
function jm(e, t, n = false) {
  const a = n ? jS : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!He(e)) {
    const c = (d) => {
      s = true;
      const [f, m] = jm(d, t, true);
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
const Xu = (e) => e === "_" || e === "_ctx" || e === "$stable", Zu = (e) => $e(e) ? e.map(On) : [On(e)], US = (e, t, n) => {
  if (t._n) return t;
  const a = Pe((...l) => Zu(t(...l)), n);
  return a._c = false, a;
}, Um = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Xu(l)) continue;
    const o = e[l];
    if (He(o)) t[l] = US(l, o, a);
    else if (o != null) {
      const i = Zu(o);
      t[l] = () => i;
    }
  }
}, Gm = (e, t) => {
  const n = Zu(t);
  e.slots.default = () => n;
}, Ym = (e, t, n) => {
  for (const a in t) (n || !Xu(a)) && (e[a] = t[a]);
}, GS = (e, t, n) => {
  const a = e.slots = Hm();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Ym(a, t, n), n && Uv(a, "_", l, true)) : Um(t, a);
  } else t && Gm(e, t);
}, YS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = ut;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : Ym(l, t, n) : (o = !t.$stable, Um(t, l)), i = t;
  } else t && (Gm(e, t), i = { default: 1 });
  if (o) for (const r in l) !Xu(r) && i[r] == null && delete l[r];
}, Wt = JS;
function KS(e) {
  return qS(e);
}
function qS(e, t) {
  const n = rr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: m = Hn, insertStaticContent: S } = e, v = (L, H, Q, ue = null, oe = null, se = null, be = void 0, ce = null, G = !!H.dynamicChildren) => {
    if (L === H) return;
    L && !qa(L, H) && (ue = ne(L), j(L, oe, se, true), L = null), H.patchFlag === -2 && (G = false, H.dynamicChildren = null);
    const { type: le, ref: _e, shapeFlag: X } = H;
    switch (le) {
      case ei:
        y(L, H, Q, ue);
        break;
      case Gt:
        h(L, H, Q, ue);
        break;
      case ts:
        L == null && k(H, Q, ue, be);
        break;
      case ge:
        D(L, H, Q, ue, oe, se, be, ce, G);
        break;
      default:
        X & 1 ? w(L, H, Q, ue, oe, se, be, ce, G) : X & 6 ? M(L, H, Q, ue, oe, se, be, ce, G) : (X & 64 || X & 128) && le.process(L, H, Q, ue, oe, se, be, ce, G, xe);
    }
    _e != null && oe ? So(_e, L && L.ref, se, H || L, !H) : _e == null && L && L.ref != null && So(L.ref, null, se, L, true);
  }, y = (L, H, Q, ue) => {
    if (L == null) a(H.el = r(H.children), Q, ue);
    else {
      const oe = H.el = L.el;
      H.children !== L.children && u(oe, H.children);
    }
  }, h = (L, H, Q, ue) => {
    L == null ? a(H.el = s(H.children || ""), Q, ue) : H.el = L.el;
  }, k = (L, H, Q, ue) => {
    [L.el, L.anchor] = S(L.children, H, Q, ue, L.el, L.anchor);
  }, I = ({ el: L, anchor: H }, Q, ue) => {
    let oe;
    for (; L && L !== H; ) oe = f(L), a(L, Q, ue), L = oe;
    a(H, Q, ue);
  }, V = ({ el: L, anchor: H }) => {
    let Q;
    for (; L && L !== H; ) Q = f(L), l(L), L = Q;
    l(H);
  }, w = (L, H, Q, ue, oe, se, be, ce, G) => {
    if (H.type === "svg" ? be = "svg" : H.type === "math" && (be = "mathml"), L == null) g(H, Q, ue, oe, se, be, ce, G);
    else {
      const le = L.el && L.el._isVueCE ? L.el : null;
      try {
        le && le._beginPatch(), A(L, H, oe, se, be, ce, G);
      } finally {
        le && le._endPatch();
      }
    }
  }, g = (L, H, Q, ue, oe, se, be, ce) => {
    let G, le;
    const { props: _e, shapeFlag: X, transition: me, dirs: Se } = L;
    if (G = L.el = i(L.type, se, _e && _e.is, _e), X & 8 ? c(G, L.children) : X & 16 && x(L.children, G, null, ue, oe, es(L, se), be, ce), Se && Ha(L, null, ue, "created"), C(G, L, L.scopeId, be, ue), _e) {
      for (const Ve in _e) Ve !== "value" && !ho(Ve) && o(G, Ve, null, _e[Ve], se, ue);
      "value" in _e && o(G, "value", null, _e.value, se), (le = _e.onVnodeBeforeMount) && Bn(le, ue, L);
    }
    Se && Ha(L, null, ue, "beforeMount");
    const ke = XS(oe, me);
    ke && me.beforeEnter(G), a(G, H, Q), ((le = _e && _e.onVnodeMounted) || ke || Se) && Wt(() => {
      le && Bn(le, ue, L), ke && me.enter(G), Se && Ha(L, null, ue, "mounted");
    }, oe);
  }, C = (L, H, Q, ue, oe) => {
    if (Q && m(L, Q), ue) for (let se = 0; se < ue.length; se++) m(L, ue[se]);
    if (oe) {
      let se = oe.subTree;
      if (H === se || Xm(se.type) && (se.ssContent === H || se.ssFallback === H)) {
        const be = oe.vnode;
        C(L, be, be.scopeId, be.slotScopeIds, oe.parent);
      }
    }
  }, x = (L, H, Q, ue, oe, se, be, ce, G = 0) => {
    for (let le = G; le < L.length; le++) {
      const _e = L[le] = ce ? na(L[le]) : On(L[le]);
      v(null, _e, H, Q, ue, oe, se, be, ce);
    }
  }, A = (L, H, Q, ue, oe, se, be) => {
    const ce = H.el = L.el;
    let { patchFlag: G, dynamicChildren: le, dirs: _e } = H;
    G |= L.patchFlag & 16;
    const X = L.props || ut, me = H.props || ut;
    let Se;
    if (Q && za(Q, false), (Se = me.onVnodeBeforeUpdate) && Bn(Se, Q, H, L), _e && Ha(H, L, Q, "beforeUpdate"), Q && za(Q, true), (X.innerHTML && me.innerHTML == null || X.textContent && me.textContent == null) && c(ce, ""), le ? P(L.dynamicChildren, le, ce, Q, ue, es(H, oe), se) : be || Z(L, H, ce, null, Q, ue, es(H, oe), se, false), G > 0) {
      if (G & 16) E(ce, X, me, Q, oe);
      else if (G & 2 && X.class !== me.class && o(ce, "class", null, me.class, oe), G & 4 && o(ce, "style", X.style, me.style, oe), G & 8) {
        const ke = H.dynamicProps;
        for (let Ve = 0; Ve < ke.length; Ve++) {
          const Le = ke[Ve], Ge = X[Le], Ne = me[Le];
          (Ne !== Ge || Le === "value") && o(ce, Le, Ge, Ne, oe, Q);
        }
      }
      G & 1 && L.children !== H.children && c(ce, H.children);
    } else !be && le == null && E(ce, X, me, Q, oe);
    ((Se = me.onVnodeUpdated) || _e) && Wt(() => {
      Se && Bn(Se, Q, H, L), _e && Ha(H, L, Q, "updated");
    }, ue);
  }, P = (L, H, Q, ue, oe, se, be) => {
    for (let ce = 0; ce < H.length; ce++) {
      const G = L[ce], le = H[ce], _e = G.el && (G.type === ge || !qa(G, le) || G.shapeFlag & 198) ? d(G.el) : Q;
      v(G, le, _e, null, ue, oe, se, be, true);
    }
  }, E = (L, H, Q, ue, oe) => {
    if (H !== Q) {
      if (H !== ut) for (const se in H) !ho(se) && !(se in Q) && o(L, se, H[se], null, oe, ue);
      for (const se in Q) {
        if (ho(se)) continue;
        const be = Q[se], ce = H[se];
        be !== ce && se !== "value" && o(L, se, ce, be, oe, ue);
      }
      "value" in Q && o(L, "value", H.value, Q.value, oe);
    }
  }, D = (L, H, Q, ue, oe, se, be, ce, G) => {
    const le = H.el = L ? L.el : r(""), _e = H.anchor = L ? L.anchor : r("");
    let { patchFlag: X, dynamicChildren: me, slotScopeIds: Se } = H;
    Se && (ce = ce ? ce.concat(Se) : Se), L == null ? (a(le, Q, ue), a(_e, Q, ue), x(H.children || [], Q, _e, oe, se, be, ce, G)) : X > 0 && X & 64 && me && L.dynamicChildren && L.dynamicChildren.length === me.length ? (P(L.dynamicChildren, me, Q, oe, se, be, ce), (H.key != null || oe && H === oe.subTree) && Ju(L, H, true)) : Z(L, H, Q, _e, oe, se, be, ce, G);
  }, M = (L, H, Q, ue, oe, se, be, ce, G) => {
    H.slotScopeIds = ce, L == null ? H.shapeFlag & 512 ? oe.ctx.activate(H, Q, ue, be, G) : T(H, Q, ue, oe, se, be, G) : F(L, H, G);
  }, T = (L, H, Q, ue, oe, se, be) => {
    const ce = L.component = ak(L, ue, oe);
    if (cr(L) && (ce.ctx.renderer = xe), lk(ce, false, be), ce.asyncDep) {
      if (oe && oe.registerDep(ce, W, be), !L.el) {
        const G = ce.subTree = p(Gt);
        h(null, G, H, Q), L.placeholder = G.el;
      }
    } else W(ce, L, H, Q, oe, se, be);
  }, F = (L, H, Q) => {
    const ue = H.component = L.component;
    if (NS(L, H, Q)) if (ue.asyncDep && !ue.asyncResolved) {
      N(ue, H, Q);
      return;
    } else ue.next = H, ue.update();
    else H.el = L.el, ue.vnode = H;
  }, W = (L, H, Q, ue, oe, se, be) => {
    const ce = () => {
      if (L.isMounted) {
        let { next: X, bu: me, u: Se, parent: ke, vnode: Ve } = L;
        {
          const lt = Km(L);
          if (lt) {
            X && (X.el = Ve.el, N(L, X, be)), lt.asyncDep.then(() => {
              Wt(() => {
                L.isUnmounted || le();
              }, oe);
            });
            return;
          }
        }
        let Le = X, Ge;
        za(L, false), X ? (X.el = Ve.el, N(L, X, be)) : X = Ve, me && Pi(me), (Ge = X.props && X.props.onVnodeBeforeUpdate) && Bn(Ge, ke, X, Ve), za(L, true);
        const Ne = Bd(L), ft = L.subTree;
        L.subTree = Ne, v(ft, Ne, d(ft.el), ne(ft), L, oe, se), X.el = Ne.el, Le === null && HS(L, Ne.el), Se && Wt(Se, oe), (Ge = X.props && X.props.onVnodeUpdated) && Wt(() => Bn(Ge, ke, X, Ve), oe);
      } else {
        let X;
        const { el: me, props: Se } = H, { bm: ke, m: Ve, parent: Le, root: Ge, type: Ne } = L, ft = ko(H);
        za(L, false), ke && Pi(ke), !ft && (X = Se && Se.onVnodeBeforeMount) && Bn(X, Le, H), za(L, true);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(Ne);
          const lt = L.subTree = Bd(L);
          v(null, lt, Q, ue, L, oe, se), H.el = lt.el;
        }
        if (Ve && Wt(Ve, oe), !ft && (X = Se && Se.onVnodeMounted)) {
          const lt = H;
          Wt(() => Bn(X, Le, lt), oe);
        }
        (H.shapeFlag & 256 || Le && ko(Le.vnode) && Le.vnode.shapeFlag & 256) && L.a && Wt(L.a, oe), L.isMounted = true, H = Q = ue = null;
      }
    };
    L.scope.on();
    const G = L.effect = new Zv(ce);
    L.scope.off();
    const le = L.update = G.run.bind(G), _e = L.job = G.runIfDirty.bind(G);
    _e.i = L, _e.id = L.uid, G.scheduler = () => Gu(_e), za(L, true), le();
  }, N = (L, H, Q) => {
    H.component = L;
    const ue = L.vnode.props;
    L.vnode = H, L.next = null, WS(L, H.props, ue, Q), YS(L, H.children, Q), ra(), wd(L), sa();
  }, Z = (L, H, Q, ue, oe, se, be, ce, G = false) => {
    const le = L && L.children, _e = L ? L.shapeFlag : 0, X = H.children, { patchFlag: me, shapeFlag: Se } = H;
    if (me > 0) {
      if (me & 128) {
        $(le, X, Q, ue, oe, se, be, ce, G);
        return;
      } else if (me & 256) {
        R(le, X, Q, ue, oe, se, be, ce, G);
        return;
      }
    }
    Se & 8 ? (_e & 16 && ye(le, oe, se), X !== le && c(Q, X)) : _e & 16 ? Se & 16 ? $(le, X, Q, ue, oe, se, be, ce, G) : ye(le, oe, se, true) : (_e & 8 && c(Q, ""), Se & 16 && x(X, Q, ue, oe, se, be, ce, G));
  }, R = (L, H, Q, ue, oe, se, be, ce, G) => {
    L = L || $l, H = H || $l;
    const le = L.length, _e = H.length, X = Math.min(le, _e);
    let me;
    for (me = 0; me < X; me++) {
      const Se = H[me] = G ? na(H[me]) : On(H[me]);
      v(L[me], Se, Q, null, oe, se, be, ce, G);
    }
    le > _e ? ye(L, oe, se, true, false, X) : x(H, Q, ue, oe, se, be, ce, G, X);
  }, $ = (L, H, Q, ue, oe, se, be, ce, G) => {
    let le = 0;
    const _e = H.length;
    let X = L.length - 1, me = _e - 1;
    for (; le <= X && le <= me; ) {
      const Se = L[le], ke = H[le] = G ? na(H[le]) : On(H[le]);
      if (qa(Se, ke)) v(Se, ke, Q, null, oe, se, be, ce, G);
      else break;
      le++;
    }
    for (; le <= X && le <= me; ) {
      const Se = L[X], ke = H[me] = G ? na(H[me]) : On(H[me]);
      if (qa(Se, ke)) v(Se, ke, Q, null, oe, se, be, ce, G);
      else break;
      X--, me--;
    }
    if (le > X) {
      if (le <= me) {
        const Se = me + 1, ke = Se < _e ? H[Se].el : ue;
        for (; le <= me; ) v(null, H[le] = G ? na(H[le]) : On(H[le]), Q, ke, oe, se, be, ce, G), le++;
      }
    } else if (le > me) for (; le <= X; ) j(L[le], oe, se, true), le++;
    else {
      const Se = le, ke = le, Ve = /* @__PURE__ */ new Map();
      for (le = ke; le <= me; le++) {
        const st = H[le] = G ? na(H[le]) : On(H[le]);
        st.key != null && Ve.set(st.key, le);
      }
      let Le, Ge = 0;
      const Ne = me - ke + 1;
      let ft = false, lt = 0;
      const rn = new Array(Ne);
      for (le = 0; le < Ne; le++) rn[le] = 0;
      for (le = Se; le <= X; le++) {
        const st = L[le];
        if (Ge >= Ne) {
          j(st, oe, se, true);
          continue;
        }
        let pn;
        if (st.key != null) pn = Ve.get(st.key);
        else for (Le = ke; Le <= me; Le++) if (rn[Le - ke] === 0 && qa(st, H[Le])) {
          pn = Le;
          break;
        }
        pn === void 0 ? j(st, oe, se, true) : (rn[pn - ke] = le + 1, pn >= lt ? lt = pn : ft = true, v(st, H[pn], Q, null, oe, se, be, ce, G), Ge++);
      }
      const ka = ft ? ZS(rn) : $l;
      for (Le = ka.length - 1, le = Ne - 1; le >= 0; le--) {
        const st = ke + le, pn = H[st], hd = H[st + 1], yd = st + 1 < _e ? hd.el || qm(hd) : ue;
        rn[le] === 0 ? v(null, pn, Q, yd, oe, se, be, ce, G) : ft && (Le < 0 || le !== ka[Le] ? Y(pn, Q, yd, 2) : Le--);
      }
    }
  }, Y = (L, H, Q, ue, oe = null) => {
    const { el: se, type: be, transition: ce, children: G, shapeFlag: le } = L;
    if (le & 6) {
      Y(L.component.subTree, H, Q, ue);
      return;
    }
    if (le & 128) {
      L.suspense.move(H, Q, ue);
      return;
    }
    if (le & 64) {
      be.move(L, H, Q, xe);
      return;
    }
    if (be === ge) {
      a(se, H, Q);
      for (let X = 0; X < G.length; X++) Y(G[X], H, Q, ue);
      a(L.anchor, H, Q);
      return;
    }
    if (be === ts) {
      I(L, H, Q);
      return;
    }
    if (ue !== 2 && le & 1 && ce) if (ue === 0) ce.beforeEnter(se), a(se, H, Q), Wt(() => ce.enter(se), oe);
    else {
      const { leave: X, delayLeave: me, afterLeave: Se } = ce, ke = () => {
        L.ctx.isUnmounted ? l(se) : a(se, H, Q);
      }, Ve = () => {
        se._isLeaving && se[Rn](true), X(se, () => {
          ke(), Se && Se();
        });
      };
      me ? me(se, ke, Ve) : Ve();
    }
    else a(se, H, Q);
  }, j = (L, H, Q, ue = false, oe = false) => {
    const { type: se, props: be, ref: ce, children: G, dynamicChildren: le, shapeFlag: _e, patchFlag: X, dirs: me, cacheIndex: Se } = L;
    if (X === -2 && (oe = false), ce != null && (ra(), So(ce, null, Q, L, true), sa()), Se != null && (H.renderCache[Se] = void 0), _e & 256) {
      H.ctx.deactivate(L);
      return;
    }
    const ke = _e & 1 && me, Ve = !ko(L);
    let Le;
    if (Ve && (Le = be && be.onVnodeBeforeUnmount) && Bn(Le, H, L), _e & 6) ae(L.component, Q, ue);
    else {
      if (_e & 128) {
        L.suspense.unmount(Q, ue);
        return;
      }
      ke && Ha(L, null, H, "beforeUnmount"), _e & 64 ? L.type.remove(L, H, Q, xe, ue) : le && !le.hasOnce && (se !== ge || X > 0 && X & 64) ? ye(le, H, Q, false, true) : (se === ge && X & 384 || !oe && _e & 16) && ye(G, H, Q), ue && O(L);
    }
    (Ve && (Le = be && be.onVnodeUnmounted) || ke) && Wt(() => {
      Le && Bn(Le, H, L), ke && Ha(L, null, H, "unmounted");
    }, Q);
  }, O = (L) => {
    const { type: H, el: Q, anchor: ue, transition: oe } = L;
    if (H === ge) {
      U(Q, ue);
      return;
    }
    if (H === ts) {
      V(L);
      return;
    }
    const se = () => {
      l(Q), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (L.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: be, delayLeave: ce } = oe, G = () => be(Q, se);
      ce ? ce(L.el, se, G) : G();
    } else se();
  }, U = (L, H) => {
    let Q;
    for (; L !== H; ) Q = f(L), l(L), L = Q;
    l(H);
  }, ae = (L, H, Q) => {
    const { bum: ue, scope: oe, job: se, subTree: be, um: ce, m: G, a: le } = L;
    Fd(G), Fd(le), ue && Pi(ue), oe.stop(), se && (se.flags |= 8, j(be, L, H, Q)), ce && Wt(ce, H), Wt(() => {
      L.isUnmounted = true;
    }, H);
  }, ye = (L, H, Q, ue = false, oe = false, se = 0) => {
    for (let be = se; be < L.length; be++) j(L[be], H, Q, ue, oe);
  }, ne = (L) => {
    if (L.shapeFlag & 6) return ne(L.component.subTree);
    if (L.shapeFlag & 128) return L.suspense.next();
    const H = f(L.anchor || L.el), Q = H && H[km];
    return Q ? f(Q) : H;
  };
  let fe = false;
  const Ae = (L, H, Q) => {
    let ue;
    L == null ? H._vnode && (j(H._vnode, null, null, true), ue = H._vnode.component) : v(H._vnode || null, L, H, null, null, null, Q), H._vnode = L, fe || (fe = true, wd(ue), ym(), fe = false);
  }, xe = { p: v, um: j, m: Y, r: O, mt: T, mc: x, pc: Z, pbc: P, n: ne, o: e };
  return { render: Ae, hydrate: void 0, createApp: BS(Ae) };
}
function es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function za({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function XS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ju(e, t, n = false) {
  const a = e.children, l = t.children;
  if ($e(a) && $e(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = na(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Ju(i, r)), r.type === ei && (r.patchFlag === -1 && (r = l[o] = na(r)), r.el = i.el), r.type === Gt && !r.el && (r.el = i.el);
  }
}
function ZS(e) {
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
function Km(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Km(t);
}
function Fd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function qm(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? qm(t.subTree) : null;
}
const Xm = (e) => e.__isSuspense;
function JS(e, t) {
  t && t.pendingBranch ? $e(e) ? t.effects.push(...e) : t.effects.push(e) : fS(e);
}
const ge = Symbol.for("v-fgt"), ei = Symbol.for("v-txt"), Gt = Symbol.for("v-cmt"), ts = Symbol.for("v-stc"), xo = [];
let dn = null;
function Te(e = false) {
  xo.push(dn = e ? null : []);
}
function QS() {
  xo.pop(), dn = xo[xo.length - 1] || null;
}
let Do = 1;
function zi(e, t = false) {
  Do += e, e < 0 && dn && t && (dn.hasOnce = true);
}
function Zm(e) {
  return e.dynamicChildren = Do > 0 ? dn || $l : null, QS(), Do > 0 && dn && dn.push(e), e;
}
function Oe(e, t, n, a, l, o) {
  return Zm(b(e, t, n, a, l, o, true));
}
function en(e, t, n, a, l) {
  return Zm(p(e, t, n, a, l, true));
}
function Eo(e) {
  return e ? e.__v_isVNode === true : false;
}
function qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jm = ({ key: e }) => e ?? null, Ti = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || ht(e) || He(e) ? { i: cn, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, a = 0, l = null, o = e === ge ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Jm(t), ref: t && Ti(t), scopeId: pm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: cn };
  return r ? (Qu(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= yt(n) ? 8 : 16), Do > 0 && !i && dn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && dn.push(s), s;
}
const p = ek;
function ek(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === _S) && (e = Gt), Eo(e)) {
    const r = ca(e, t, true);
    return n && Qu(r, n), Do > 0 && !o && dn && (r.shapeFlag & 6 ? dn[dn.indexOf(e)] = r : dn.push(r)), r.patchFlag = -2, r;
  }
  if (uk(e) && (e = e.__vccOpts), t) {
    t = Qm(t);
    let { class: r, style: s } = t;
    r && !yt(r) && (t.class = ee(r)), et(s) && (Jo(s) && !$e(s) && (s = At({}, s)), t.style = ve(s));
  }
  const i = yt(e) ? 1 : Xm(e) ? 128 : wm(e) ? 64 : et(e) ? 4 : He(e) ? 2 : 0;
  return b(e, t, n, a, l, i, o, true);
}
function Qm(e) {
  return e ? Jo(e) || zm(e) ? At({}, e) : e : null;
}
function ca(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? K(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Jm(u), ref: t && t.ref ? n && o ? $e(o) ? o.concat(Ti(t)) : [o, Ti(t)] : Ti(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ca(e.ssContent), ssFallback: e.ssFallback && ca(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ll(c, s.clone(c)), c;
}
function Ke(e = " ", t = 0) {
  return p(ei, null, e, t);
}
function Rt(e = "", t = false) {
  return t ? (Te(), en(Gt, null, e)) : p(Gt, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? p(Gt) : $e(e) ? p(ge, null, e.slice()) : Eo(e) ? na(e) : p(ei, null, String(e));
}
function na(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function Qu(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if ($e(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Qu(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !zm(t) ? t._ctx = cn : l === 3 && cn && (cn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else He(t) ? (t = { default: t, _ctx: cn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Ke(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function K(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ee([t.class, a.class]));
    else if (l === "style") t.style = ve([t.style, a.style]);
    else if (lr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !($e(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Bn(e, t, n, a = null) {
  Tn(e, t, 7, [n, a]);
}
const tk = Fm();
let nk = 0;
function ak(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || tk, o = { uid: nk++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new qv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: jm(a, l), emitsOptions: Rm(a, l), emit: null, emitted: null, propsDefaults: ut, inheritAttrs: a.inheritAttrs, ctx: ut, data: ut, props: ut, attrs: ut, slots: ut, refs: ut, setupState: ut, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = LS.bind(null, o), e.ce && e.ce(o), o;
}
let Yt = null;
const ti = () => Yt || cn;
let Wi, $s;
{
  const e = rr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Wi = t("__VUE_INSTANCE_SETTERS__", (n) => Yt = n), $s = t("__VUE_SSR_SETTERS__", (n) => Mo = n);
}
const ni = (e) => {
  const t = Yt;
  return Wi(e), e.scope.on(), () => {
    e.scope.off(), Wi(t);
  };
}, Rd = () => {
  Yt && Yt.scope.off(), Wi(null);
};
function eg(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = false;
function lk(e, t = false, n = false) {
  t && $s(t);
  const { props: a, children: l } = e.vnode, o = eg(e);
  zS(e, a, o, t), GS(e, l, n || t);
  const i = o ? ok(e, t) : void 0;
  return t && $s(false), i;
}
function ok(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, IS);
  const { setup: a } = n;
  if (a) {
    ra();
    const l = e.setupContext = a.length > 1 ? rk(e) : null, o = ni(e), i = Qo(a, e, 0, [e.props, l]), r = zv(i);
    if (sa(), o(), (r || e.sp) && !ko(e) && Am(e), r) {
      if (i.then(Rd, Rd), t) return i.then((s) => {
        Od(e, s);
      }).catch((s) => {
        ur(s, e, 0);
      });
      e.asyncDep = i;
    } else Od(e, i);
  } else tg(e);
}
function Od(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = vm(t)), tg(e);
}
function tg(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Hn);
  {
    const l = ni(e);
    ra();
    try {
      PS(e);
    } finally {
      sa(), l();
    }
  }
}
const ik = { get(e, t) {
  return Ut(e, "get", ""), e[t];
} };
function rk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, ik), slots: e.slots, emit: e.emit, expose: t };
}
function gr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vm(dm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in wo) return wo[n](e);
  }, has(t, n) {
    return n in t || n in wo;
  } })) : e.proxy;
}
function sk(e, t = true) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uk(e) {
  return He(e) && "__vccOpts" in e;
}
const _ = (e, t) => rS(e, t, Mo);
function ma(e, t, n) {
  try {
    zi(-1);
    const a = arguments.length;
    return a === 2 ? et(t) && !$e(t) ? Eo(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Eo(n) && (n = [n]), p(e, t, n));
  } finally {
    zi(1);
  }
}
const ck = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ls;
const Nd = typeof window < "u" && window.trustedTypes;
if (Nd) try {
  Ls = Nd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const ng = Ls ? (e) => Ls.createHTML(e) : (e) => e, dk = "http://www.w3.org/2000/svg", fk = "http://www.w3.org/1998/Math/MathML", ta = typeof document < "u" ? document : null, Hd = ta && ta.createElement("template"), vk = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? ta.createElementNS(dk, e) : t === "mathml" ? ta.createElementNS(fk, e) : n ? ta.createElement(e, { is: n }) : ta.createElement(e);
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
    Hd.innerHTML = ng(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = Hd.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, wa = "transition", ro = "animation", zl = Symbol("_vtc"), ag = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, lg = At({}, _m, ag), mk = (e) => (e.displayName = "Transition", e.props = lg, e), Da = mk((e, { slots: t }) => ma(pS, og(e), t)), Wa = (e, t = []) => {
  $e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, zd = (e) => e ? $e(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function og(e) {
  const t = {};
  for (const D in e) D in ag || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, S = gk(l), v = S && S[0], y = S && S[1], { onBeforeEnter: h, onEnter: k, onEnterCancelled: I, onLeave: V, onLeaveCancelled: w, onBeforeAppear: g = h, onAppear: C = k, onAppearCancelled: x = I } = t, A = (D, M, T, F) => {
    D._enterCancelled = F, xa(D, M ? c : r), xa(D, M ? u : i), T && T();
  }, P = (D, M) => {
    D._isLeaving = false, xa(D, d), xa(D, m), xa(D, f), M && M();
  }, E = (D) => (M, T) => {
    const F = D ? C : k, W = () => A(M, D, T);
    Wa(F, [M, W]), Wd(() => {
      xa(M, D ? s : o), Ln(M, D ? c : r), zd(F) || jd(M, a, v, W);
    });
  };
  return At(t, { onBeforeEnter(D) {
    Wa(h, [D]), Ln(D, o), Ln(D, i);
  }, onBeforeAppear(D) {
    Wa(g, [D]), Ln(D, s), Ln(D, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const T = () => P(D, M);
    Ln(D, d), D._enterCancelled ? (Ln(D, f), Fs(D)) : (Fs(D), Ln(D, f)), Wd(() => {
      D._isLeaving && (xa(D, d), Ln(D, m), zd(V) || jd(D, a, y, T));
    }), Wa(V, [D, T]);
  }, onEnterCancelled(D) {
    A(D, false, void 0, true), Wa(I, [D]);
  }, onAppearCancelled(D) {
    A(D, true, void 0, true), Wa(x, [D]);
  }, onLeaveCancelled(D) {
    P(D), Wa(w, [D]);
  } });
}
function gk(e) {
  if (e == null) return null;
  if (et(e)) return [ns(e.enter), ns(e.leave)];
  {
    const t = ns(e);
    return [t, t];
  }
}
function ns(e) {
  return Ip(e);
}
function Ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[zl] || (e[zl] = /* @__PURE__ */ new Set())).add(t);
}
function xa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[zl];
  n && (n.delete(t), n.size || (e[zl] = void 0));
}
function Wd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hk = 0;
function jd(e, t, n, a) {
  const l = e._endId = ++hk, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = ig(e, t);
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
function ig(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${wa}Delay`), o = a(`${wa}Duration`), i = Ud(l, o), r = a(`${ro}Delay`), s = a(`${ro}Duration`), u = Ud(r, s);
  let c = null, d = 0, f = 0;
  t === wa ? i > 0 && (c = wa, d = i, f = o.length) : t === ro ? u > 0 && (c = ro, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? wa : ro : null, f = c ? c === wa ? o.length : s.length : 0);
  const m = c === wa && /\b(?:transform|all)(?:,|$)/.test(a(`${wa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: m };
}
function Ud(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Gd(n) + Gd(e[a])));
}
function Gd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function yk(e, t, n) {
  const a = e[zl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ji = Symbol("_vod"), rg = Symbol("_vsh"), Mn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
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
  e.style.display = t ? e[ji] : "none", e[rg] = !t;
}
const bk = Symbol(""), pk = /(?:^|;)\s*display\s*:/;
function Sk(e, t, n) {
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
      const i = a[bk];
      i && (n += ";" + i), a.cssText = n, o = pk.test(n);
    }
  } else t && e.removeAttribute("style");
  ji in e && (e[ji] = o ? a.display : "", e[rg] && (a.display = "none"));
}
const Yd = /\s*!important$/;
function Di(e, t, n) {
  if ($e(n)) n.forEach((a) => Di(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = kk(e, t);
    Yd.test(n) ? e.setProperty(vl(a), n.replace(Yd, ""), "important") : e[a] = n;
  }
}
const Kd = ["Webkit", "Moz", "ms"], as = {};
function kk(e, t) {
  const n = as[t];
  if (n) return n;
  let a = an(t);
  if (a !== "filter" && a in e) return as[t] = a;
  a = Yn(a);
  for (let l = 0; l < Kd.length; l++) {
    const o = Kd[l] + a;
    if (o in e) return as[t] = o;
  }
  return t;
}
const qd = "http://www.w3.org/1999/xlink";
function Xd(e, t, n, a, l, o = Bp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qd, t.slice(6, t.length)) : e.setAttributeNS(qd, t, n) : n == null || o && !Gv(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : zn(n) ? String(n) : n);
}
function Zd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ng(n) : n);
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
    r === "boolean" ? n = Gv(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
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
function wk(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Jd = Symbol("_vei");
function xk(e, t, n, a, l = null) {
  const o = e[Jd] || (e[Jd] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = Ck(t);
    if (a) {
      const u = o[t] = Ik(a, l);
      Tl(e, r, u, s);
    } else i && (wk(e, r, i, s), o[t] = void 0);
  }
}
const Qd = /(?:Once|Passive|Capture)$/;
function Ck(e) {
  let t;
  if (Qd.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Qd); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : vl(e.slice(2)), t];
}
let ls = 0;
const _k = Promise.resolve(), Vk = () => ls || (_k.then(() => ls = 0), ls = Date.now());
function Ik(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Tn(Pk(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = Vk(), n;
}
function Pk(e, t) {
  if ($e(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const ef = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ak = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? yk(e, a, i) : t === "style" ? Sk(e, n, a) : lr(t) ? Lu(t) || xk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Tk(e, t, a, i)) ? (Zd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !yt(a)) ? Zd(e, an(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Xd(e, t, a, i));
};
function Tk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && ef(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return ef(t) && yt(n) ? false : t in e;
}
const sg = /* @__PURE__ */ new WeakMap(), ug = /* @__PURE__ */ new WeakMap(), Ui = Symbol("_moveCb"), tf = Symbol("_enterCb"), Dk = (e) => (delete e.props.mode, e), Ek = Dk({ name: "TransitionGroup", props: At({}, lg, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ti(), a = Cm();
  let l, o;
  return fr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!Lk(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Mk), l.forEach(Bk);
    const r = l.filter($k);
    Fs(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Ln(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Ui] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Ui] = null, xa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = De(e), r = og(i);
    let s = i.tag || ge;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ll(c, To(c, r, a, n)), sg.set(c, cg(c.el)));
    }
    o = t.default ? Ku(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ll(c, To(c, r, a, n));
    }
    return p(s, null, o);
  };
} }), ec = Ek;
function Mk(e) {
  const t = e.el;
  t[Ui] && t[Ui](), t[tf] && t[tf]();
}
function Bk(e) {
  ug.set(e, cg(e.el));
}
function $k(e) {
  const t = sg.get(e), n = ug.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function cg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Lk(e, t, n) {
  const a = e.cloneNode(), l = e[zl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = ig(a);
  return o.removeChild(a), i;
}
const nf = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return $e(t) ? (n) => Pi(t, n) : t;
};
function Fk(e) {
  e.target.composing = true;
}
function af(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const os = Symbol("_assign");
function lf(e, t, n) {
  return t && (e = e.trim()), n && (e = Ru(e)), e;
}
const Rk = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[os] = nf(l);
  const o = a || l.props && l.props.type === "number";
  Tl(e, t ? "change" : "input", (i) => {
    i.target.composing || e[os](lf(e.value, n, o));
  }), (n || o) && Tl(e, "change", () => {
    e.value = lf(e.value, n, o);
  }), t || (Tl(e, "compositionstart", Fk), Tl(e, "compositionend", af), Tl(e, "change", af));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[os] = nf(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ru(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, Ok = ["ctrl", "shift", "alt", "meta"], Nk = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Ok.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = Nk[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, Hk = At({ patchProp: Ak }, vk);
let of;
function dg() {
  return of || (of = KS(Hk));
}
const fg = ((...e) => {
  dg().render(...e);
}), zk = ((...e) => {
  const t = dg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = jk(a);
    if (!l) return;
    const o = t._component;
    !He(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, Wk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function Wk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function jk(e) {
  return yt(e) ? document.querySelector(e) : e;
}
const rf = () => {
};
function vg(e) {
  const t = `[${e}]`;
  return { debug: rf, info: rf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const sf = 5;
function uf(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * sf)));
  return e / (l * sf);
}
function mg(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function Uk(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
function Gk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function Yk(e, t) {
  return e * t.gridPitch / t.dpr;
}
const gg = 1, Kk = `gol.gridBlankZones.v${gg}`, qk = 128;
function Xk(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const Zk = /* @__PURE__ */ new Set(["minor", "major", "both"]), Jk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function is(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function El(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Qk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function ew(e) {
  return typeof e == "string" && Zk.has(e) ? e : "both";
}
function tw(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Jk.has(t.style) ? t.style : "none", a = is(El(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = is(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = is(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, El(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function nw(e) {
  return typeof e == "boolean" ? e : true;
}
function cf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function hg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = El(n.x1), l = El(n.y1), o = El(n.x2), i = El(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Qk(), x1: r, y1: u, x2: s, y2: c, mode: ew(n.mode), edge: tw(n.edge), enabled: nw(n.enabled), createdAt: cf(n.createdAt, t), updatedAt: cf(n.updatedAt, t) };
}
function yg(e, t = Date.now()) {
  return Xk(e, hg, qk, t);
}
function rs() {
  return typeof localStorage < "u";
}
function bg(e) {
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
const tc = bg({ key: Kk, version: gg, normalize: yg, itemsKey: "zones" }), aw = tc.load, lw = tc.save, ow = tc.clear;
function pg(e) {
  const t = q(e.storage.load());
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
function iw(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = pg({ storage: { load: aw, save: lw, clear: ow }, normalize: yg, normalizeOne: hg, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const Sg = 4, Rs = 2, Os = 8, Ei = 8, ss = 2, rw = "gol.hires";
function ki(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function sw() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function df(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function hr(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = ki(n.x1), l = ki(n.y1), o = ki(n.x2), i = ki(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : sw(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), multiplier: typeof n.multiplier == "number" && Number.isFinite(n.multiplier) ? Math.trunc(Math.max(Rs, Math.min(Os, n.multiplier))) : Sg, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, tickMultiplier: typeof n.tickMultiplier == "number" && Number.isFinite(n.tickMultiplier) && n.tickMultiplier >= 1 ? Math.trunc(n.tickMultiplier) : 1, createdAt: df(n.createdAt, t), updatedAt: df(n.updatedAt, t) };
}
function uw(e, t) {
  return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
}
function nc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= Ei) break;
    const l = hr(a, t);
    !l || n.some((i) => uw(i, l)) || n.push(l);
  }
  return n;
}
const ff = "gol.hires.v1", ac = bg({ key: rw, version: ss, normalize: nc, itemsKey: "regions", migrate(e) {
  if (e.region && !e.regions) {
    const t = hr(e.region);
    return { ...e, regions: t ? [t] : [], version: ss };
  }
  return { ...e, version: ss };
} }), cw = ac.load;
function dw() {
  const e = cw();
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
    return nc(n.regions);
  } catch {
    return [];
  }
}
const fw = ac.save, vw = ac.clear;
function mw(e = {}) {
  const { items: t, addItem: n, updateItem: a, removeItem: l, clearItems: o, syncFromWorker: i } = pg({ storage: { load: dw, save: fw, clear: vw }, normalize: nc, normalizeOne: hr, onSet: e.onSetRegions, onAdd: e.onAddRegion, onUpdate: e.onUpdateRegion, onRemove: e.onRemoveRegion, onClear: e.onClearRegions });
  return { regions: t, addRegion: n, updateRegion: a, removeRegion: l, clearRegions: o, syncFromWorker: i };
}
const vf = vg("WorkerBridge");
function gw() {
  let e = null;
  const t = q(null), n = /* @__PURE__ */ new Map();
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
    const c = new Worker(new URL("/assets/backgroundRenderer-C3qpQaPa.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      vf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const us = 5, hw = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), yw = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function bw(e, t) {
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
    const c = mg(s.clientX, s.clientY, u);
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
    if (s.closest(yw)) return true;
    let u = s;
    for (; u; ) {
      if (hw.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: Gk, cellSpanToCssPx: Yk, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToViewport: a };
}
function pw() {
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
function Sw(e) {
  const t = /* @__PURE__ */ new Map(), n = q(null), a = q(null), l = q(null);
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
function $n([e, t, n], a = 1) {
  return a === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${a.toFixed(3)})`;
}
function cs([e, t, n], a = 1, l = 1) {
  const o = t * a;
  return l === 1 ? `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)} / ${l.toFixed(3)})`;
}
const kg = "theme-preference";
function kw() {
  var _a3;
  if (typeof window > "u") return "light";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(kg);
  return e === "light" || e === "dark" || e === "system" ? e : "light";
}
const Bo = q(kw()), wg = q(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    wg.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
re(Bo, (e) => {
  var _a3;
  typeof window < "u" && ((_a3 = window.localStorage) == null ? void 0 : _a3.setItem(kg, e));
});
const Ns = _(() => Bo.value === "light" ? mf : Bo.value === "dark" || wg.value ? gf : mf);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, a = (l, o) => {
      n.style.setProperty(l, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", a("--theme-surface", $n(t.surface)), a("--theme-ink", $n(t.ink)), a("--theme-ink-secondary", $n(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-ink-tertiary", $n(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-text-primary", $n(t.ink)), a("--theme-text-secondary", $n(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-text-tertiary", $n(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-grid-minor", $n(ja(t.surface, t.ink, t.minor_t))), a("--theme-grid-major", $n(ja(t.surface, t.ink, t.major_t))), a("--theme-grid-border", $n(ja(t.surface, t.ink, t.border_t))), a("--theme-accent", cs(t.accent, t.accent_chroma_scale)), a("--theme-accent-ring", cs(t.accent, t.accent_chroma_scale, 0.45)), a("--theme-selection-bg", cs(t.accent, t.accent_chroma_scale, 0.2)), a("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
  };
  e(Ns.value), re(Ns, e);
}
function xg() {
  return { preference: Bo, theme: Ns, setPreference(e) {
    Bo.value = e;
  } };
}
const ww = false, xw = { key: 0, class: "zone-preview-text" }, Cw = { class: "zone-list" }, _w = { class: "zone-text" }, Vw = { class: "zone-coords" }, Iw = { class: "zone-actions" }, Pw = { key: 0, class: "zone-empty" }, Aw = ln({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = q(false), o = q(false), i = q(0), r = q(0), s = q(4), u = q(4), c = q("both"), d = q("none"), f = q(1), m = q(1), S = q(0.6), v = q(2), y = q(false), h = _(() => n.zones.filter((E) => !!E && typeof E.id == "string" && E.id.length > 0 && typeof E.x1 == "number" && typeof E.y1 == "number" && typeof E.x2 == "number" && typeof E.y2 == "number" && typeof E.mode == "string" && !!E.edge && typeof E.edge.style == "string"));
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
  return re(l, A, { immediate: true }), re(o, A, { immediate: true }), re([c, d, f, m, S, v, y], P, { immediate: true }), (E, D) => {
    const M = je("v-switch"), T = je("v-text-field"), F = je("v-col"), W = je("v-row"), N = je("v-select"), Z = je("v-btn"), R = je("v-divider");
    return Te(), Oe(ge, null, [p(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = ($) => l.value = $), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), p(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = ($) => o.value = $), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Te(), Oe("div", xw, " Preview: (" + Ie(n.previewRect.x1) + "," + Ie(n.previewRect.y1) + ") \u2192 (" + Ie(n.previewRect.x2) + "," + Ie(n.previewRect.y2) + ") ", 1)) : Rt("", true), p(W, { dense: "" }, { default: Pe(() => [p(F, { cols: "3" }, { default: Pe(() => [p(T, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = ($) => i.value = $), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(F, { cols: "3" }, { default: Pe(() => [p(T, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = ($) => r.value = $), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(F, { cols: "3" }, { default: Pe(() => [p(T, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = ($) => s.value = $), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(F, { cols: "3" }, { default: Pe(() => [p(T, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = ($) => u.value = $), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), p(W, { dense: "", class: "mt-2" }, { default: Pe(() => [p(F, { cols: "6" }, { default: Pe(() => [p(N, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = ($) => c.value = $), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(F, { cols: "6" }, { default: Pe(() => [p(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = ($) => d.value = $), items: w, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), p(W, { dense: "", class: "mt-2" }, { default: Pe(() => [p(F, { cols: "6" }, { default: Pe(() => [p(T, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = ($) => f.value = $), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), p(F, { cols: "6" }, { default: Pe(() => [p(T, { modelValue: m.value, "onUpdate:modelValue": D[9] || (D[9] = ($) => m.value = $), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Te(), en(W, { key: 1, dense: "", class: "mt-2" }, { default: Pe(() => [p(F, { cols: "12" }, { default: Pe(() => [p(T, { modelValue: S.value, "onUpdate:modelValue": D[10] || (D[10] = ($) => S.value = $), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Rt("", true), d.value === "noted" ? (Te(), en(W, { key: 2, dense: "", class: "mt-2" }, { default: Pe(() => [p(F, { cols: "12" }, { default: Pe(() => [p(T, { modelValue: v.value, "onUpdate:modelValue": D[11] || (D[11] = ($) => v.value = $), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Rt("", true), d.value === "bold-major" || d.value === "noted" ? (Te(), en(W, { key: 3, dense: "", class: "mt-1" }, { default: Pe(() => [p(F, { cols: "12" }, { default: Pe(() => [p(M, { modelValue: y.value, "onUpdate:modelValue": D[12] || (D[12] = ($) => y.value = $), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Rt("", true), p(Z, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: Pe(() => [...D[14] || (D[14] = [Ke(" Add Zone ", -1)])]), _: 1 }), p(R, { class: "my-3" }), b("div", Cw, [(Te(true), Oe(ge, null, Qt(h.value, ($) => (Te(), Oe("div", { key: $.id, class: "zone-row" }, [b("div", _w, [b("div", null, "#" + Ie(k($)) + " \xB7 " + Ie($.mode) + " \xB7 " + Ie($.edge.style), 1), b("div", Vw, "(" + Ie($.x1) + "," + Ie($.y1) + ") \u2192 (" + Ie($.x2) + "," + Ie($.y2) + ")", 1)]), b("div", Iw, [p(Z, { size: "x-small", variant: "text", onClick: (Y) => x($) }, { default: Pe(() => [Ke(Ie($.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), p(Z, { size: "x-small", variant: "text", color: "error", onClick: (Y) => a("remove-zone", $.id) }, { default: Pe(() => [...D[15] || (D[15] = [Ke("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (Te(), Oe("div", Pw, "No zones.")) : Rt("", true)]), p(Z, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = ($) => a("clear-zones")) }, { default: Pe(() => [...D[16] || (D[16] = [Ke(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, Tw = Kn(Aw, [["__scopeId", "data-v-223984b2"]]), hf = 175, Dw = { class: "hires-tab" }, Ew = { class: "text-caption text-medium-emphasis mb-2" }, Mw = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, Bw = { class: "region-list" }, $w = { class: "d-flex align-center justify-space-between" }, Lw = { class: "text-body-2" }, Fw = { class: "text-caption text-medium-emphasis" }, Rw = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, Ow = { class: "mt-2" }, Nw = { class: "d-flex align-center justify-space-between" }, Hw = { class: "text-caption text-medium-emphasis" }, zw = { class: "mt-2" }, Ww = { class: "d-flex align-center justify-space-between" }, jw = { class: "text-caption text-medium-emphasis" }, Uw = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, Gw = ln({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = q(false), o = _(() => n.regions.length < Ei);
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
    return Te(), Oe("div", Dw, [b("p", Ew, Ie(Re(Rs)) + "\u2013" + Ie(Re(Os)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), p(h, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !o.value && !l.value, size: "small", block: "", onClick: i }, { default: Pe(() => [Ke(Ie(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= Re(Ei) ? (Te(), Oe("div", Mw, " Max " + Ie(Re(Ei)) + " regions reached. ", 1)) : Rt("", true), e.regions.length > 0 ? (Te(), en(k, { key: 1, class: "my-3" })) : Rt("", true), b("div", Bw, [(Te(true), Oe(ge, null, Qt(e.regions, (g) => (Te(), en(w, { key: g.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: Pe(() => [b("div", $w, [b("span", Lw, " #" + Ie(S(g)) + " (" + Ie(g.x1) + ", " + Ie(g.y1) + ") \u2014 (" + Ie(g.x2) + ", " + Ie(g.y2) + ") ", 1), p(I, { size: "x-small", color: g.enabled ? "success" : "grey", variant: "flat" }, { default: Pe(() => [Ke(Ie(g.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), b("div", Fw, Ie(g.multiplier) + "x \xB7 " + Ie((g.x2 - g.x1 + 1) * (g.y2 - g.y1 + 1)) + " base cells ", 1), b("div", Rw, [p(h, { size: "x-small", variant: "tonal", onClick: (C) => r(g) }, { default: Pe(() => [Ke(Ie(g.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => s(g) }, { default: Pe(() => [Ke(" Grid " + Ie(g.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => u(g) }, { default: Pe(() => [Ke(" Base " + Ie(g.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", onClick: (C) => c(g) }, { default: Pe(() => [Ke(" Border " + Ie(g.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), p(h, { size: "x-small", variant: "tonal", color: "error", onClick: (C) => v.$emit("remove-region", g.id) }, { default: Pe(() => [...y[1] || (y[1] = [Ke(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])]), b("div", Ow, [b("div", Nw, [y[2] || (y[2] = b("span", { class: "text-caption text-medium-emphasis" }, "Resolution", -1)), b("span", Hw, Ie(g.multiplier) + "x", 1)]), p(V, { "model-value": g.multiplier, min: Re(Rs), max: Re(Os), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => f(g, C) }, null, 8, ["model-value", "min", "max", "onUpdate:modelValue"])]), b("div", zw, [b("div", Ww, [y[3] || (y[3] = b("span", { class: "text-caption text-medium-emphasis" }, "Tick rate", -1)), b("span", jw, Ie(m(g.tickMultiplier ?? 1)), 1)]), p(V, { "model-value": g.tickMultiplier ?? 1, min: 1, max: Re(hf), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => d(g, C) }, null, 8, ["model-value", "max", "onUpdate:modelValue"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (Te(), Oe("div", Uw, " No hi-res regions. ")) : Rt("", true)]), e.regions.length > 0 ? (Te(), en(h, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: y[0] || (y[0] = (g) => v.$emit("clear-regions")) }, { default: Pe(() => [...y[4] || (y[4] = [Ke(" Clear All ", -1)])]), _: 1 })) : Rt("", true)]);
  };
} }), Yw = Kn(Gw, [["__scopeId", "data-v-7b5a643b"]]), Kw = ln({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, hiresRegions: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change"], setup(e) {
  const t = q("zones"), n = q(false), a = false, l = ww;
  return (o, i) => {
    const r = je("v-btn"), s = je("v-card-title"), u = je("v-tab"), c = je("v-tabs"), d = je("v-tabs-window-item"), f = je("v-tabs-window"), m = je("v-card-text"), S = je("v-card");
    return Re(a) ? (Te(), Oe("aside", { key: 0, class: ee(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Te(), en(r, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: i[14] || (i[14] = (v) => n.value = false) }, { default: Pe(() => [...i[19] || (i[19] = [Ke(" Grid Tools ", -1)])]), _: 1 })) : (Te(), en(S, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: Pe(() => [p(s, { class: "zone-title" }, { default: Pe(() => [i[16] || (i[16] = b("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), p(r, { size: "x-small", variant: "text", onClick: i[0] || (i[0] = (v) => n.value = true) }, { default: Pe(() => [...i[15] || (i[15] = [Ke("Collapse", -1)])]), _: 1 })]), _: 1 }), p(c, { modelValue: t.value, "onUpdate:modelValue": i[1] || (i[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: Pe(() => [p(u, { value: "zones" }, { default: Pe(() => [...i[17] || (i[17] = [Ke("Zones", -1)])]), _: 1 }), Re(l) ? (Te(), en(u, { key: 0, value: "hires" }, { default: Pe(() => [...i[18] || (i[18] = [Ke("Hi-Res", -1)])]), _: 1 })) : Rt("", true)]), _: 1 }, 8, ["modelValue"]), p(m, { class: "pt-2" }, { default: Pe(() => [p(f, { modelValue: t.value, "onUpdate:modelValue": i[13] || (i[13] = (v) => t.value = v) }, { default: Pe(() => [p(d, { value: "zones" }, { default: Pe(() => [p(Tw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: i[2] || (i[2] = (v) => o.$emit("add-zone", v)), onUpdateZone: i[3] || (i[3] = (v) => o.$emit("update-zone", v)), onRemoveZone: i[4] || (i[4] = (v) => o.$emit("remove-zone", v)), onClearZones: i[5] || (i[5] = (v) => o.$emit("clear-zones")), onToolChange: i[6] || (i[6] = (v) => o.$emit("tool-change", v)), onDraftChange: i[7] || (i[7] = (v) => o.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), Re(l) ? (Te(), en(d, { key: 0, value: "hires" }, { default: Pe(() => [p(Yw, { regions: e.hiresRegions, onAddRegion: i[8] || (i[8] = (v) => o.$emit("add-hires-region", v)), onUpdateRegion: i[9] || (i[9] = (v) => o.$emit("update-hires-region", v)), onRemoveRegion: i[10] || (i[10] = (v) => o.$emit("remove-hires-region", v)), onClearRegions: i[11] || (i[11] = (v) => o.$emit("clear-hires-regions")), onHiresToolChange: i[12] || (i[12] = (v) => o.$emit("hires-tool-change", v)) }, null, 8, ["regions"])]), _: 1 })) : Rt("", true)]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2)) : Rt("", true);
  };
} }), qw = Kn(Kw, [["__scopeId", "data-v-dbb9d5dc"]]), yf = 5, bf = 16, Xw = 0.3, Zw = 0.12, Jw = ln({ __name: "AppBackground", setup(e) {
  const t = vg("AppBackground"), n = q(null), a = q(0), l = gw(), o = bw(l.gridInfo, a), i = pw(), r = Sw(o);
  function s(R) {
    return { ...R, edge: { ...R.edge } };
  }
  function u(R) {
    return R.map(s);
  }
  const c = iw({ onSetZones: (R) => l.post({ type: "set_zones", zones: u(R) }), onAddZone: (R) => l.post({ type: "add_zone", zone: s(R) }), onUpdateZone: (R) => l.post({ type: "update_zone", zone: s(R) }), onRemoveZone: (R) => l.post({ type: "remove_zone", id: R }), onClearZones: () => l.post({ type: "clear_zones" }) }), d = mw({ onAddRegion: (R) => {
  }, onUpdateRegion: (R) => {
  }, onRemoveRegion: (R) => {
  }, onClearRegions: () => {
  } }), f = q(false), m = q(false), S = q(false), v = q({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: y } = xg();
  re(y, (R) => {
    l.post({ type: "set_theme", theme: R });
  });
  function h(R) {
    const $ = Date.now(), Y = v.value;
    return { id: crypto.randomUUID(), x1: R.x1, y1: R.y1, x2: R.x2, y2: R.y2, mode: Y.mode, edge: { ...Y.edge }, enabled: true, createdAt: $, updatedAt: $ };
  }
  r.register("zone", { isEnabled: () => f.value, priority: 1, snapMajor: () => m.value, onCommit(R) {
    c.addZone(h(R));
  } }), r.register("hires", { isEnabled: () => S.value, priority: 3, onCommit(R) {
    const $ = Date.now();
    d.addRegion({ id: crypto.randomUUID(), x1: R.x1, y1: R.y1, x2: R.x2, y2: R.y2, multiplier: Sg, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1, createdAt: $, updatedAt: $ });
  } });
  function k(R) {
    c.addZone(R);
  }
  function I(R) {
    c.updateZone(R);
  }
  function V(R) {
    c.removeZone(R);
  }
  function w() {
    c.clearZones();
  }
  function g(R) {
    d.addRegion(R);
  }
  function C(R) {
    d.updateRegion(R);
  }
  function x(R) {
    d.removeRegion(R);
  }
  function A() {
    d.clearRegions();
  }
  function P(R) {
    v.value = R;
  }
  function E(R) {
    f.value = R.enabled, m.value = R.snapMajor, R.enabled || r.cancelActiveDrag("zone");
  }
  function D(R) {
    S.value = R.enabled, R.enabled || r.cancelActiveDrag("hires");
  }
  function M(R) {
    if (r.anyToolEnabled() || o.isInteractiveTarget(R.target)) return;
    const $ = o.makeSnapshot();
    if (!$) return;
    const Y = mg(R.clientX, R.clientY, $), j = Uk(Y, $);
    t.debug("Click \u2192", R.clientX, R.clientY, "\u2192 cell", j.cx, j.cy), l.post({ type: "toggle_cell", cx: j.cx, cy: j.cy, scrollCanvasPx: $.scrollCanvasPx });
  }
  let T = 0, F = 0, W = null, N = null, Z = null;
  return Ct(() => {
    const R = n.value;
    if (!R) return;
    T = Math.round(window.innerWidth * devicePixelRatio), F = Math.round(window.innerHeight * devicePixelRatio), R.width = T, R.height = F;
    const $ = R.transferControlToOffscreen(), Y = uf(T, bf, devicePixelRatio), j = 0.8 * Y * yf / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${j.toFixed(1)}px`), l.init($, Y), t.debug("Worker spawned, gridPitch", Y.toFixed(2)), l.on("ready", (ae) => {
      t.info(`${ae.backend.toUpperCase()} renderer active`), l.post({ type: "set_theme", theme: y.value }), l.post({ type: "set_zones", zones: u(c.zones.value) });
    }), l.on("zones_state", (ae) => c.syncFromWorker(ae.zones)), l.on("zones_error", (ae) => t.error("Zone update rejected:", ae.message)), l.on("hires_state", (ae) => d.syncFromWorker(ae.regions)), l.on("error", (ae) => {
      ae.phase === "gpu-init" ? t.debug(`GPU unavailable (${ae.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${ae.phase}]:`, ae.message);
    }), document.addEventListener("click", M), Z = r.attachListeners(), W = document.querySelector(".v-main");
    let O = 0, U = 0;
    i.start(() => {
      l.post({ type: "frame" }), O = ((W == null ? void 0 : W.scrollTop) || window.scrollY) * Xw * devicePixelRatio, U += (O - U) * Zw, Math.abs(U - a.value) > 0.1 && (a.value = U, l.post({ type: "scroll", scrollY: U }));
    }), N = new ResizeObserver(([ae]) => {
      const ye = Math.round(ae.contentRect.width * devicePixelRatio), ne = Math.round(ae.contentRect.height * devicePixelRatio);
      if (ye === T && ne === F) return;
      T = ye, F = ne;
      const fe = uf(ye, bf, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * fe * yf / devicePixelRatio).toFixed(1)}px`), l.post({ type: "resize", width: ye, height: ne });
    }), N.observe(R);
  }), vr(() => {
    i.stop(), N == null ? void 0 : N.disconnect(), document.removeEventListener("click", M), Z == null ? void 0 : Z(), l.terminate();
  }), (R, $) => (Te(), Oe(ge, null, [b("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), Re(r).previewStyle.value ? (Te(), Oe("div", { key: 0, class: "zone-preview-overlay", style: ve(Re(r).previewStyle.value) }, null, 4)) : Rt("", true), p(qw, { zones: Re(c).zones.value, "preview-rect": Re(r).previewRect.value, "hires-regions": Re(d).regions.value, onAddZone: k, onUpdateZone: I, onRemoveZone: V, onClearZones: w, onToolChange: E, onDraftChange: P, onAddHiresRegion: g, onUpdateHiresRegion: C, onRemoveHiresRegion: x, onClearHiresRegions: A, onHiresToolChange: D }, null, 8, ["zones", "preview-rect", "hires-regions"])], 64));
} }), Qw = Kn(Jw, [["__scopeId", "data-v-3e471ccf"]]);
function Cg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Je = typeof window < "u", lc = Je && "IntersectionObserver" in window, e0 = Je && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), pf = Je && "EyeDropper" in window, oc = Je && "matchMedia" in window && typeof window.matchMedia == "function", Wn = () => oc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Sf(e, t, n) {
  t0(e, t), t.set(e, n);
}
function t0(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function kf(e, t, n) {
  return e.set(_g(e, t), n), n;
}
function ea(e, t) {
  return e.get(_g(e, t));
}
function _g(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Vg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ol(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Vg(e, t.split("."), n));
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
  if (Array.isArray(t)) return Vg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function de(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function il(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Hs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ic(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const zs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Ig(e) {
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
function Ws(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Fe(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Pg = /^on[^a-z]/, rc = (e) => Pg.test(e), n0 = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], a0 = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function l0(e) {
  return e.isComposing && a0.includes(e.key);
}
function qn(e) {
  const [t, n] = Ws(e, [Pg]), a = Fe(t, n0), [l, o] = Ws(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ot(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ag(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Re(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function wf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function xf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Cf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function o0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function _f(e) {
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
    if (Hs(o) && Hs(i)) {
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
function Tg(e) {
  return e.map((t) => t.type === ge ? Tg(t.children) : t).flat();
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
class Dg {
  constructor(t) {
    Sf(this, _l, []), Sf(this, Ua, 0), this.size = t;
  }
  get isFull() {
    return ea(_l, this).length === this.size;
  }
  push(t) {
    ea(_l, this)[ea(Ua, this)] = t, kf(Ua, this, (ea(Ua, this) + 1) % this.size);
  }
  values() {
    return ea(_l, this).slice(ea(Ua, this)).concat(ea(_l, this).slice(0, ea(Ua, this)));
  }
  clear() {
    ea(_l, this).length = 0, kf(Ua, this, 0);
  }
}
function i0(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function sc(e) {
  const t = Tt({});
  ct(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function Gi(e, t) {
  return e.includes(t);
}
function Eg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Bt = () => [Function, Array];
function Vf(e, t) {
  return t = "on" + Yn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
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
function Mg(e, t, n) {
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
    const a = Mg(n, t);
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
  return e.some((t) => Eo(t) ? t.type === Gt ? false : t.type !== ge || br(t.children) : true) ? e : null;
}
function wi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function r0(e, t) {
  if (!Je || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function s0(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function $o() {
  const e = ie(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => ic(e.value) }), t;
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
function u0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Yi(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Yi(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function c0(e) {
  const t = {};
  for (const n in e) t[an(n)] = e[n];
  return t;
}
function d0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function If(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : ht(n) || Ia(n) || Jo(n) ? t(De(n)) : Hs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Bg = ["top", "bottom"], f0 = ["start", "end", "left", "right"];
function js(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Gi(Bg, n) ? "start" : Gi(f0, n) ? "top" : "center"), { side: Us(n, t), align: Us(a, t) };
}
function Us(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ds(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function fs(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Pf(e) {
  return { side: e.align, align: e.side };
}
function Af(e) {
  return Gi(Bg, e.side) ? "y" : "x";
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
function Tf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function $g(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new kn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new kn(e);
}
function v0(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new kn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new kn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new kn(e);
}
function uc(e) {
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
function m0(e, t) {
  Object.keys(t).forEach((n) => {
    if (rc(n)) {
      const a = Eg(n), l = Mi.get(e);
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
function g0(e, t) {
  Object.keys(t).forEach((n) => {
    if (rc(n)) {
      const a = Eg(n), l = Mi.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, Df = 0.2126729, Ef = 0.7151522, Mf = 0.072175, h0 = 0.55, y0 = 0.58, b0 = 0.57, p0 = 0.62, xi = 0.03, Bf = 1.45, S0 = 5e-4, k0 = 1.25, w0 = 1.25, $f = 0.078, Lf = 12.82051282051282, Ci = 0.06, Ff = 1e-3;
function Rf(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * Df + a * Ef + l * Mf, u = o * Df + i * Ef + r * Mf;
  if (s <= xi && (s += (xi - s) ** Bf), u <= xi && (u += (xi - u) ** Bf), Math.abs(u - s) < S0) return 0;
  let c;
  if (u > s) {
    const d = (u ** h0 - s ** y0) * k0;
    c = d < Ff ? 0 : d < $f ? d - d * Lf * Ci : d - Ci;
  } else {
    const d = (u ** p0 - s ** b0) * w0;
    c = d > -Ff ? 0 : d > -$f ? d - d * Lf * Ci : d + Ci;
  }
  return c * 100;
}
const Ki = 0.20689655172413793, x0 = (e) => e > Ki ** 3 ? Math.cbrt(e) : e / (3 * Ki ** 2) + 4 / 29, C0 = (e) => e > Ki ? e ** 3 : 3 * Ki ** 2 * (e - 4 / 29);
function Lg(e) {
  const t = x0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Fg(e) {
  const t = C0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const _0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], V0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, I0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], P0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Rg(e) {
  const t = Array(3), n = V0, a = _0;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ze(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function cc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = P0, i = I0;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Gs(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function A0(e) {
  return Gs(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Of = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, T0 = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Nf({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Nf({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => jn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => jn({ h: e, s: t, v: n, a }) };
function fn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Of.test(e)) {
    const { groups: t } = e.match(Of), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return T0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), zg(t);
  } else if (typeof e == "object") {
    if (Xa(e, ["r", "g", "b"])) return e;
    if (Xa(e, ["h", "s", "l"])) return jn(dc(e));
    if (Xa(e, ["h", "s", "v"])) return jn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function jn(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function Nf(e) {
  return jn(dc(e));
}
function li(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Ys(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function dc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function Og(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Ng(e) {
  return Og(jn(e));
}
function _i(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Hg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[_i(t), _i(n), _i(a), l !== void 0 ? _i(Math.round(l * 255)) : ""].join("")}`;
}
function zg(e) {
  e = E0(e);
  let [t, n, a, l] = o0(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function D0(e) {
  const t = zg(e);
  return li(t);
}
function Wg(e) {
  return Hg(jn(e));
}
function E0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = xf(xf(e, 6), 8, "F")), e;
}
function M0(e, t) {
  const n = Lg(cc(e));
  return n[0] = n[0] + t * 10, Rg(Fg(n));
}
function B0(e, t) {
  const n = Lg(cc(e));
  return n[0] = n[0] - t * 10, Rg(Fg(n));
}
function Ks(e) {
  const t = fn(e);
  return cc(t)[1];
}
function $0(e, t) {
  const n = Ks(e), a = Ks(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function jg(e) {
  const t = Math.abs(Rf(fn(0), fn(e)));
  return Math.abs(Rf(fn(16777215), fn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function z(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const pe = z({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
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
function L0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : St("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Ul = Symbol.for("vuetify:defaults");
function F0(e) {
  return q(e);
}
function fc() {
  const e = We(Ul);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function mt(e, t) {
  const n = fc(), a = q(e), l = _(() => {
    if (Re(t == null ? void 0 : t.disabled)) return n.value;
    const i = Re(t == null ? void 0 : t.scoped), r = Re(t == null ? void 0 : t.reset), s = Re(t == null ? void 0 : t.root);
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
function R0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ja(t)] < "u");
}
function O0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fc();
  const a = St("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((m) => m != null);
    if (R0(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = ie();
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
    const s = L0(Ul, a);
    rt(Ul, _(() => i.value ? Ot((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function qt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = z(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return tn(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = fc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = O0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function J() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? qt : ln)(t);
}
function N0(e, t) {
  return t.props = e, t;
}
function ga(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return J()({ name: n ?? Yn(an(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...pe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ma(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function H0(e, t, n, a) {
  if (!n || Ea(e) || Ea(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function z0(e, t, n) {
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
  const l = z0(e, t, n);
  return l || (H0(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Ug(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Lo = "cubic-bezier(0.4, 0, 0.2, 1)", Hf = "cubic-bezier(0.0, 0, 0.2, 1)", zf = "cubic-bezier(0.4, 0, 1, 1)", W0 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function vn(e, t, n) {
  return Object.keys(e).filter((a) => rc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? j0(e) : vc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function qi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (vc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function vc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function j0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function U0(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function G0(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function te(e) {
  const t = St("useRender");
  t.render = e;
}
function Y0(e, t) {
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
const Ce = [String, Function, Object, Array], qs = Symbol.for("vuetify:icons"), Sr = z({ icon: { type: Ce }, tag: { type: [String, Object, Function], required: true } }, "icon"), Xs = J()({ name: "VComponentIcon", props: Sr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return p(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? p(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), mc = qt({ name: "VSvgIcon", inheritAttrs: false, props: Sr(), setup(e, t) {
  let { attrs: n } = t;
  return () => p(e.tag, K(n, { style: null }), { default: () => [b("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? b("path", { d: a[0], "fill-opacity": a[1] }, null) : b("path", { d: a }, null)) : b("path", { d: e.icon }, null)])] });
} }), K0 = qt({ name: "VLigatureIcon", props: Sr(), setup(e) {
  return () => p(e.tag, null, { default: () => [e.icon] });
} }), gc = qt({ name: "VClassIcon", props: Sr(), setup(e) {
  return () => p(e.tag, { class: ee(e.icon) }, null);
} }), q0 = (e) => {
  const t = We(qs);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = nt(e);
    if (!a) return { component: Xs };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: mc, icon: l };
    if (typeof l != "string") return { component: Xs, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, X0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, Z0 = { component: (e) => ma(gc, { ...e, class: "mdi" }) };
function J0() {
  return { svg: { component: mc }, class: { component: gc } };
}
function Q0(e) {
  const t = J0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Z0), Ot({ defaultSet: n, sets: t, aliases: { ...X0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function $t(e, t) {
  let n;
  function a() {
    n = Nl(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  re(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function we(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = St("useProxiedModel"), i = q(e[t] !== void 0 ? e[t] : n), r = Ja(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  $t(() => !u.value, () => {
    re(() => e[t], (d) => {
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
const ex = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Wf = "$vuetify.", jf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Gg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Wf)) return jf(a, o);
  const r = a.replace(Wf, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ol(s, r, null);
  return c || (`${a}${e.value}`, c = ol(u, r, null)), c || (c = a), typeof c != "string" && (c = a), jf(c, o);
};
function hc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Yg(e, t) {
  return hc(e, t)(0.1).includes(",") ? "," : ".";
}
function vs(e, t, n) {
  const a = we(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, re(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Kg(e) {
  return (t) => {
    const n = vs(t, "locale", e.current), a = vs(t, "fallback", e.fallback), l = vs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => Yg(n, a)), t: Gg(n, a, l), n: hc(n, a), provide: Kg({ current: n, fallback: a, messages: l }) };
  };
}
function tx(e) {
  const t = ie((e == null ? void 0 : e.locale) ?? "en"), n = ie((e == null ? void 0 : e.fallback) ?? "en"), a = q({ en: ex, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Yg(t, n)), t: Gg(t, n, a), n: hc(t, n), provide: Kg({ current: t, fallback: n, messages: a }) };
}
const Gl = Symbol.for("vuetify:locale");
function nx(e) {
  return e.name != null;
}
function ax(e) {
  const t = (e == null ? void 0 : e.adapter) && nx(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : tx(e), n = ox(t, e);
  return { ...t, ...n };
}
function Qe() {
  const e = We(Gl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function qg(e) {
  const t = We(Gl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = ix(n, t.rtl, e), l = { ...n, ...a };
  return rt(Gl, l), l;
}
function lx() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function ox(e, t) {
  const n = q((t == null ? void 0 : t.rtl) ?? lx()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function ix(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
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
function rx(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Xg(e), i = Zg(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function sx(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Xg(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Zg(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ux(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const cx = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Jg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (cx.test(e)) return ux(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Uf = new Date(2e3, 0, 2);
function dx(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Nn(7).map((l) => {
    const o = new Date(Uf);
    return o.setDate(Uf.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function fx(e, t, n, a) {
  const l = Jg(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function vx(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Cf(String(n.getMonth() + 1), 2, "0"), o = Cf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function mx(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function gx(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function hx(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function el(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function yx(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function bx(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Fo(e) {
  return e.getFullYear();
}
function px(e) {
  return e.getMonth();
}
function Sx(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? kx(e, t, o, a) : wx(e, t, o, i);
}
function kx(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = el(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Fo(o);
  s < Fo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? el(u, -c) : el(u, 7 - c);
  return 1 + Zi(yc(o), Ro(d), "weeks");
}
function wx(e, t, n, a) {
  const l = Co(e, t, n), o = el(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - Zi(f, Co(f, t, n), "days");
  }
  let r = Fo(l);
  r < Fo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? el(s, u - 7) : el(s, u);
  return 1 + Zi(yc(l), Ro(c), "weeks");
}
function xx(e) {
  return e.getDate();
}
function Cx(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function _x(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Vx(e) {
  return e.getHours();
}
function Ix(e) {
  return e.getMinutes();
}
function Px(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Ax(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Tx(e, t) {
  return Xi(e, t[0]) && Mx(e, t[1]);
}
function Dx(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Xi(e, t) {
  return e.getTime() > t.getTime();
}
function Ex(e, t) {
  return Xi(Ro(e), Ro(t));
}
function Mx(e, t) {
  return e.getTime() < t.getTime();
}
function Gf(e, t) {
  return e.getTime() === t.getTime();
}
function Bx(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function $x(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Lx(e, t) {
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
function Fx(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function Rx(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Ox(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Nx(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Hx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Ro(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function yc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class zx {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Jg(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return vx(this, t);
  }
  parseISO(t) {
    return mx(t);
  }
  addMinutes(t, n) {
    return gx(t, n);
  }
  addHours(t, n) {
    return hx(t, n);
  }
  addDays(t, n) {
    return el(t, n);
  }
  addWeeks(t, n) {
    return yx(t, n);
  }
  addMonths(t, n) {
    return bx(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return rx(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return sx(t, this.locale);
  }
  startOfMonth(t) {
    return Xg(t);
  }
  endOfMonth(t) {
    return Zg(t);
  }
  format(t, n) {
    return fx(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Gf(t, n);
  }
  isValid(t) {
    return Dx(t);
  }
  isWithinRange(t, n) {
    return Tx(t, n);
  }
  isAfter(t, n) {
    return Xi(t, n);
  }
  isAfterDay(t, n) {
    return Ex(t, n);
  }
  isBefore(t, n) {
    return !Xi(t, n) && !Gf(t, n);
  }
  isSameDay(t, n) {
    return Bx(t, n);
  }
  isSameMonth(t, n) {
    return $x(t, n);
  }
  isSameYear(t, n) {
    return Lx(t, n);
  }
  setMinutes(t, n) {
    return Rx(t, n);
  }
  setHours(t, n) {
    return Fx(t, n);
  }
  setMonth(t, n) {
    return Ox(t, n);
  }
  setDate(t, n) {
    return Nx(t, n);
  }
  setYear(t, n) {
    return Hx(t, n);
  }
  getDiff(t, n, a) {
    return Zi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return dx(this.locale, a, n);
  }
  getYear(t) {
    return Fo(t);
  }
  getMonth(t) {
    return px(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return Sx(t, this.locale, l, o);
  }
  getDate(t) {
    return xx(t);
  }
  getNextMonth(t) {
    return Cx(t);
  }
  getPreviousMonth(t) {
    return _x(t);
  }
  getHours(t) {
    return Vx(t);
  }
  getMinutes(t) {
    return Ix(t);
  }
  startOfDay(t) {
    return Ro(t);
  }
  endOfDay(t) {
    return yc(t);
  }
  startOfYear(t) {
    return Px(t);
  }
  endOfYear(t) {
    return Ax(t);
  }
}
const Qg = Symbol.for("vuetify:date-options"), Yf = Symbol.for("vuetify:date-adapter");
function Wx(e, t) {
  const n = Ot({ adapter: zx, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: th(n, t) };
}
function jx(e, t, n) {
  const a = eh(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function eh(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function th(e, t) {
  const n = Tt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return re(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function ml() {
  const e = We(Qg);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Qe();
  return th(e, t);
}
const kr = ["sm", "md", "lg", "xl", "xxl"], Zs = Symbol.for("vuetify:display"), Kf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, Ux = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kf;
  return Ot(Kf, e);
};
function qf(e) {
  return Je && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Xf(e) {
  return Je && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Zf(e) {
  const t = Je && !e ? window.navigator.userAgent : "ssr";
  function n(S) {
    return !!t.match(S);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), m = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: m, touch: e0, ssr: t === "ssr" };
}
function Gx(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = Ux(e), l = ie(Xf(t)), o = ie(Zf(t)), i = Tt({}), r = ie(qf(t));
  function s() {
    l.value = Xf(), r.value = qf();
  }
  function u() {
    s(), o.value = Zf();
  }
  return ct(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), m = r.value < n.xl && !(f || d || c), S = r.value < n.xxl && !(m || f || d || c), v = r.value >= n.xxl, y = c ? "xs" : d ? "sm" : f ? "md" : m ? "lg" : S ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], k = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = m, i.xl = S, i.xxl = v, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || m), i.smAndDown = !(f || m || S || v), i.mdAndDown = !(m || S || v), i.lgAndDown = !(S || v), i.xlAndDown = !v, i.name = y, i.height = l.value, i.width = r.value, i.mobile = k, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Je && (window.addEventListener("resize", s, { passive: true }), bt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Zl(i), update: u, ssr: !!t };
}
const gl = z({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function on() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = We(Zs);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const nh = Symbol.for("vuetify:goto");
function ah() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: W0 };
}
function Yx(e) {
  return bc(e) ?? (document.scrollingElement || document.body);
}
function bc(e) {
  return typeof e == "string" ? document.querySelector(e) : ic(e);
}
function ms(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = bc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Kx(e, t) {
  return { rtl: t.isRtl, options: Ot(ah(), e) };
}
async function Jf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ot((a == null ? void 0 : a.options) ?? ah(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : bc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : Yx(o.container), u = Wn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = ms(r, n, i);
  else if (c = ms(r, n, i) - ms(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (c -= parseInt(S, 10));
  }
  c += o.offset, c = Xx(s, c, !!i, !!n);
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
function qx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = We(nh), { isRtl: n } = _t();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Jf(o, Ot(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Jf(o, Ot(e, i), true, a), l;
}
function Xx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Ze(t, s, u);
}
const Oo = Symbol.for("vuetify:theme"), Ue = z({ theme: String }, "theme");
function Qf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Zx() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qf();
  const t = Qf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ot(o, l);
  }
  return Ot(t, { ...e, themes: n });
}
function Ga(e, t, n, a) {
  e.push(`${tC(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function ev(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = fn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${Ks(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? fn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function Jx(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? M0 : B0;
    for (const i of Nn(n[l], 1)) a[`${e}-${l}-${i}`] = Hg(o(fn(t), i));
  }
  return a;
}
function Qx(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...Jx(a, l, t) });
  }
  return n;
}
function eC(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = fn(e[n]);
    t[a] = jg(l);
  }
  return t;
}
function tC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function nC(e, t, n) {
  const a = aC(e, t);
  a && (a.innerHTML = n);
}
function aC(e, t) {
  if (!Je) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function lC(e) {
  const t = Zx(e), n = ie(t.defaultTheme), a = q(t.themes), l = ie("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = _(() => {
    const h = {};
    for (const [k, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...Qx(I.colors, t.variations) };
      h[k] = { ...I, colors: { ...V, ...eC(V) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = _(() => {
    var _a3;
    const h = [], k = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && Ga(h, ":root", ["color-scheme: dark"], t.scope), Ga(h, ":root", ev(r.value, t.prefix), t.scope);
    for (const [w, g] of Object.entries(i.value)) Ga(h, `.${t.prefix}theme--${w}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...ev(g, t.prefix)], t.scope);
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
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if (oc) {
    let k = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    k(), h.addEventListener("change", k, { passive: true }), Xv() && bt(() => {
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
        Je && re(u, () => {
          V.patch(I);
        });
      } else Je ? (k.addHeadObjs(B(I)), ct(() => k.updateDOM())) : k.addHeadObjs(I());
    } else {
      let I = function() {
        nC(t.stylesheetId, t.cspNonce, u.value);
      };
      Je ? re(u, I, { immediate: true }) : I();
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
    return k === "value" && Cg(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, k, I);
  } });
  return { install: f, change: m, cycle: S, toggle: v, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: y, current: r } };
}
function qe(e) {
  St("provideTheme");
  const t = We(Oo, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
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
  const n = $o(), a = q();
  if (Je) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Ht(() => {
      l.disconnect();
    }), re(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: al(a) };
}
const No = Symbol.for("vuetify:layout"), lh = Symbol.for("vuetify:layout-item"), tv = 1e3, oh = z({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), hl = z({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function ih() {
  const e = We(No);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function yl(e) {
  const t = We(No);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Mt()}`, a = St("useLayoutItem");
  rt(lh, { id: n });
  const l = ie(false);
  qu(() => l.value = true), Tm(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Ht(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const oC = (e, t, n, a) => {
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
function rh(e) {
  const t = We(No, null), n = _(() => t ? t.rootZIndex.value - 100 : tv), a = q([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = wn(), d = _(() => {
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
    return oC(C, l, o, r);
  }), m = _(() => !Array.from(s.values()).some((g) => g.value)), S = _(() => f.value[f.value.length - 1].layer), v = B(() => ({ "--v-layout-left": de(S.value.left), "--v-layout-right": de(S.value.right), "--v-layout-top": de(S.value.top), "--v-layout-bottom": de(S.value.bottom), ...m.value ? void 0 : { transition: "none" } })), y = _(() => f.value.slice(1).map((g, C) => {
    let { id: x } = g;
    const { layer: A } = f.value[C], P = o.get(x), E = l.get(x);
    return { id: x, ...A, size: Number(P.value), position: E.value };
  })), h = (g) => y.value.find((C) => C.id === g), k = St("createLayout"), I = ie(false);
  return Ct(() => {
    I.value = true;
  }), rt(No, { register: (g, C) => {
    let { id: x, order: A, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: T, absolute: F } = C;
    i.set(x, A), l.set(x, P), o.set(x, E), r.set(x, M), T && s.set(x, T);
    const N = Ml(lh, k == null ? void 0 : k.vnode).indexOf(g);
    N > -1 ? a.value.splice(N, 0, x) : a.value.push(x);
    const Z = _(() => y.value.findIndex((j) => j.id === x)), R = _(() => n.value + f.value.length * 2 - Z.value * 2), $ = _(() => {
      const j = P.value === "left" || P.value === "right", O = P.value === "right", U = P.value === "bottom", ae = D.value ?? E.value, ye = ae === 0 ? "%" : "px", ne = { [P.value]: 0, zIndex: R.value, transform: `translate${j ? "X" : "Y"}(${(M.value ? 0 : -(ae === 0 ? 100 : ae)) * (O || U ? -1 : 1)}${ye})`, position: F.value || n.value !== tv ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!I.value) return ne;
      const fe = y.value[Z.value], Ae = d.value.get(x);
      return Ae && (fe[Ae.position] += Ae.amount), { ...ne, height: j ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : D.value ? `${D.value}px` : void 0, left: O ? void 0 : `${fe.left}px`, right: O ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: j ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), Y = _(() => ({ zIndex: R.value - 1 }));
    return { layoutItemStyles: $, layoutItemScrimStyles: Y, zIndex: R };
  }, unregister: (g) => {
    i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: S, mainStyles: v, getLayoutItem: h, items: y, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: y, layoutRect: c, layoutRef: u };
}
const iC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function nv(e) {
  const t = e.toLowerCase();
  return iC[t] || t;
}
function sh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(nv(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [nv(e)], separators: o } : { keys: l, separators: o };
}
function rC(e) {
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
  return i.every((u) => sh(u).keys.length > 0) ? i : [];
}
function uh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ot(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Nl();
  return r.run(() => {
    const s = F0(a.defaults), u = Gx(a.display, a.ssr), c = lC(a.theme), d = Q0(a.icons), f = ax(a.locale), m = Wx(a.date, f), S = Kx(a.goTo, f);
    function v(h) {
      for (const I in i) h.directive(I, i[I]);
      for (const I in o) h.component(I, o[I]);
      for (const I in l) h.component(I, qt({ ...l[I], name: I, aliasName: l[I].name }));
      const k = Nl();
      if (k.run(() => {
        c.install(h);
      }), h.onUnmount(() => k.stop()), h.provide(Ul, s), h.provide(Zs, u), h.provide(Oo, c), h.provide(qs, d), h.provide(Gl, f), h.provide(Qg, m.options), h.provide(Yf, m.instance), h.provide(nh, S), Je && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
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
        return Tt({ defaults: Il.call(this, Ul), display: Il.call(this, Zs), theme: Il.call(this, Oo), icons: Il.call(this, qs), locale: Il.call(this, Gl), date: Il.call(this, Yf) });
      } } });
    }
    function y() {
      r.stop();
    }
    return { install: v, unmount: y, defaults: s, display: u, theme: c, icons: d, locale: f, date: m, goTo: S };
  });
}
const sC = "3.12.1";
uh.version = sC;
function Il(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const uC = ln({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = xg();
  return (n, a) => {
    const l = je("v-icon"), o = je("v-tooltip"), i = je("v-btn"), r = je("v-btn-toggle");
    return Te(), en(r, { modelValue: Re(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => ht(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Pe(() => [p(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: Pe(() => [p(l, null, { default: Pe(() => [...a[1] || (a[1] = [Ke("mdi-weather-sunny", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), p(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: Pe(() => [p(l, null, { default: Pe(() => [...a[2] || (a[2] = [Ke("mdi-theme-light-dark", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), p(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: Pe(() => [p(l, null, { default: Pe(() => [...a[3] || (a[3] = [Ke("mdi-weather-night", -1)])]), _: 1 }), p(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), av = Kn(uC, [["__scopeId", "data-v-c9886728"]]), cC = ln({ __name: "AppHeader", setup(e) {
  const t = [{ label: "Demos", href: "#projects" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }], { smAndDown: n } = on(), a = q(false);
  return (l, o) => {
    const i = je("v-app-bar-title"), r = je("v-btn"), s = je("v-list-item"), u = je("v-list"), c = je("v-menu"), d = je("v-app-bar");
    return Te(), en(d, { elevation: "0", color: "background", border: "b" }, { append: Pe(() => [Re(n) ? (Te(), Oe(ge, { key: 0 }, [p(av), p(c, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: Pe(({ props: f }) => [p(r, K(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: Pe(() => [p(u, { class: "header-menu-list", density: "compact" }, { default: Pe(() => [(Te(), Oe(ge, null, Qt(t, (f) => p(s, { key: f.label, href: f.href, title: f.label, onClick: o[0] || (o[0] = (m) => a.value = false) }, null, 8, ["href", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (Te(), Oe(ge, { key: 1 }, [(Te(), Oe(ge, null, Qt(t, (f) => p(r, { key: f.label, href: f.href, variant: "text", size: "default", class: "nav-ink" }, { default: Pe(() => [Ke(Ie(f.label), 1)]), _: 2 }, 1032, ["href"])), 64)), p(av)], 64))]), default: Pe(() => [p(i, { class: "header-title" }, { default: Pe(() => [...o[2] || (o[2] = [b("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 });
  };
} }), dC = { class: "text-medium-emphasis text-caption" }, fC = ln({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = je("v-footer");
    return Te(), en(l, { color: "background", border: "t", class: "justify-center" }, { default: Pe(() => [b("span", dC, " \xA9 " + Ie(Re(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), Cn = { name: "Taylor Hale", tagline: "Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript", bio: "I build systems-level software \u2014 WebGPU renderers, data pipelines, and prototype AI tooling \u2014 with a focus on clean abstraction and code that actually works. My background spans computer vision research, contract engineering, and full-stack web development.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, ch = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: Cn.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${Cn.email}`, display: Cn.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${Cn.phone.replace(/[^\d+]/g, "")}`, display: Cn.phone }, { label: "GitHub", icon: "mdi-github", href: Cn.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: Cn.linkedin, display: "bits-for-bread" }], vC = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], mC = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], gC = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], hC = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], yC = { id: "hero", class: "hero-section" }, bC = { class: "hero-frame glass-panel glass-panel--strong" }, pC = { class: "hero-main" }, SC = { class: "hero-location" }, kC = { class: "hero-name section-heading" }, wC = { class: "hero-tagline" }, xC = { class: "hero-bio" }, CC = { class: "hero-actions" }, _C = { href: "#projects", class: "hero-link hero-link--primary" }, VC = { class: "hero-rail" }, IC = { class: "hero-note quiet-sheet" }, PC = { class: "skills-block" }, AC = { class: "skill-label" }, TC = { class: "skill-items" }, DC = { class: "hero-note quiet-sheet" }, EC = { class: "hero-links" }, MC = ["href"], BC = ln({ __name: "HeroSection", setup(e) {
  const t = ch.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = je("v-icon"), o = je("v-container");
    return Te(), Oe("section", yC, [p(o, { class: "hero-container" }, { default: Pe(() => [b("div", bC, [b("div", pC, [a[2] || (a[2] = b("span", { class: "hero-kicker glass-chip section-kicker" }, "Systems engineer", -1)), b("p", SC, [p(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), Ke(" " + Ie(Re(Cn).location), 1)]), b("h1", kC, Ie(Re(Cn).name), 1), b("p", wC, Ie(Re(Cn).tagline), 1), b("p", xC, Ie(Re(Cn).bio), 1), b("div", CC, [b("a", _C, [a[0] || (a[0] = Ke(" View selected work ", -1)), p(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = b("a", { href: "#contact", class: "hero-link" }, "Get in touch", -1))])]), b("aside", VC, [b("section", IC, [a[3] || (a[3] = b("p", { class: "hero-note-label" }, "Capabilities", -1)), b("div", PC, [(Te(true), Oe(ge, null, Qt(Re(vC), (i) => (Te(), Oe("div", { key: i.label, class: "skill-group" }, [b("span", AC, Ie(i.label), 1), b("span", TC, Ie(i.items.join("  \xB7  ")), 1)]))), 128))])]), b("section", DC, [a[4] || (a[4] = b("p", { class: "hero-note-label" }, "Elsewhere", -1)), b("div", EC, [(Te(true), Oe(ge, null, Qt(Re(t), (i) => (Te(), Oe("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [p(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), b("span", null, Ie(i.display ?? i.label), 1)], 8, MC))), 128))])])])])]), _: 1 })]);
  };
} }), $C = Kn(BC, [["__scopeId", "data-v-78a9bd0b"]]), Js = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function LC(e, t) {
  return Js[e].priority - Js[t].priority;
}
function FC(e) {
  return [...e.links ?? []].sort((t, n) => LC(t.kind, n.kind)).map((t) => ({ ...t, ...Js[t.kind] }));
}
function lv(e, t) {
  const n = FC(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const RC = { id: "projects", class: "demos-section" }, OC = { key: 0, class: "project-feature glass-panel" }, NC = { class: "project-feature-body" }, HC = { class: "project-feature-title" }, zC = { class: "project-feature-blurb" }, WC = { class: "project-feature-tech" }, jC = { class: "project-feature-actions" }, UC = ["href", "aria-label"], GC = { class: "project-index" }, YC = { class: "project-item-head" }, KC = { class: "project-item-title" }, qC = { key: 0, class: "project-item-links", "aria-label": "Project links" }, XC = ["href", "aria-label"], ZC = { class: "project-item-blurb" }, JC = { class: "project-item-tech" }, QC = ln({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = mC, a = t ? { ...t, visibleLinks: lv(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: lv(o, "compact") }));
  return (o, i) => {
    const r = je("v-icon"), s = je("v-tooltip"), u = je("v-container");
    return Te(), Oe("section", RC, [p(u, { class: "projects-container" }, { default: Pe(() => [i[1] || (i[1] = b("div", { class: "projects-head" }, [b("div", { class: "projects-heading" }, [b("span", { class: "glass-chip section-kicker" }, "Selected work"), b("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), b("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Re(a) ? (Te(), Oe("article", OC, [b("div", NC, [i[0] || (i[0] = b("span", { class: "project-feature-label" }, "Featured project", -1)), b("h3", HC, Ie(Re(a).title), 1), b("p", zC, Ie(Re(a).blurb), 1), b("div", WC, [(Te(true), Oe(ge, null, Qt(Re(a).tech, (c) => (Te(), Oe("span", { key: c, class: "project-tech-tag" }, Ie(c), 1))), 128))])]), b("div", jC, [(Te(true), Oe(ge, null, Qt(Re(a).visibleLinks, (c) => (Te(), Oe("a", { key: c.kind, href: c.href, target: "_blank", rel: "noopener noreferrer", class: ee(["project-link", { "project-link--demo": c.kind === "demo" }]), "aria-label": c.ariaLabel }, [p(r, { icon: c.icon }, null, 8, ["icon"]), b("span", null, Ie(c.label), 1), p(s, { activator: "parent", location: "top", text: c.ariaLabel }, null, 8, ["text"])], 10, UC))), 128))])])) : Rt("", true), b("div", GC, [(Te(true), Oe(ge, null, Qt(Re(l), (c) => (Te(), Oe("article", { key: c.title, class: "project-item quiet-sheet" }, [b("header", YC, [b("h3", KC, Ie(c.title), 1), c.visibleLinks.length ? (Te(), Oe("div", qC, [(Te(true), Oe(ge, null, Qt(c.visibleLinks, (d) => (Te(), Oe("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: ee(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [p(r, { icon: d.icon }, null, 8, ["icon"]), p(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, XC))), 128))])) : Rt("", true)]), b("p", ZC, Ie(c.blurb), 1), b("div", JC, [(Te(true), Oe(ge, null, Qt(c.tech, (d) => (Te(), Oe("span", { key: d, class: "project-tech-tag" }, Ie(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), e1 = Kn(QC, [["__scopeId", "data-v-d4ed8b96"]]), t1 = { id: "resume", class: "resume-section" }, n1 = { class: "timeline" }, a1 = { class: "entry-rail" }, l1 = { class: "entry-dates glass-chip" }, o1 = { class: "entry quiet-sheet" }, i1 = { class: "entry-head" }, r1 = { class: "entry-titleblock" }, s1 = { class: "entry-role" }, u1 = { class: "entry-subhead" }, c1 = { class: "entry-company" }, d1 = { class: "entry-work-location" }, f1 = { class: "entry-bullets" }, v1 = { key: 0, class: "entry-tech" }, m1 = { class: "entry-tech-items" }, g1 = { class: "entry-head" }, h1 = { class: "entry-titleblock" }, y1 = { class: "entry-role" }, b1 = { class: "entry-company" }, p1 = { class: "entry-meta" }, S1 = { class: "entry-dates" }, k1 = { class: "entry-location" }, w1 = { key: 0, class: "entry-focus" }, x1 = ln({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return Te(), Oe("section", t1, [p(a, { class: "resume-container" }, { default: Pe(() => [n[2] || (n[2] = b("div", { class: "resume-head" }, [b("div", { class: "resume-heading" }, [b("span", { class: "glass-chip section-kicker" }, "Resume"), b("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), b("ol", n1, [(Te(true), Oe(ge, null, Qt(Re(gC), (l) => (Te(), Oe("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [b("div", a1, [b("span", l1, Ie(l.dates), 1)]), b("article", o1, [b("header", i1, [b("div", r1, [b("h3", s1, Ie(l.role), 1), b("div", u1, [b("p", c1, Ie(l.company), 1), b("span", d1, Ie(l.location), 1)])])]), b("ul", f1, [(Te(true), Oe(ge, null, Qt(l.highlights, (o, i) => (Te(), Oe("li", { key: i }, Ie(o), 1))), 128))]), l.tech ? (Te(), Oe("div", v1, [n[0] || (n[0] = b("span", { class: "entry-tech-label" }, "Stack", -1)), b("span", m1, Ie(l.tech.join("  \xB7  ")), 1)])) : Rt("", true)])]))), 128))]), n[3] || (n[3] = b("div", { class: "edu-head" }, [b("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (Te(true), Oe(ge, null, Qt(Re(hC), (l) => (Te(), Oe("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [b("header", g1, [b("div", h1, [b("h3", y1, Ie(l.degree) + " \u2014 " + Ie(l.field), 1), b("p", b1, Ie(l.school), 1)]), b("div", p1, [b("span", S1, Ie(l.dates), 1), b("span", k1, Ie(l.location), 1)])]), l.focus ? (Te(), Oe("p", w1, [n[1] || (n[1] = b("span", { class: "entry-tech-label" }, "Focus", -1)), Ke(" " + Ie(l.focus), 1)])) : Rt("", true)]))), 128))]), _: 1 })]);
  };
} }), C1 = Kn(x1, [["__scopeId", "data-v-6c7f4bed"]]), _1 = ["href", "aria-label"], V1 = { class: "contact-text" }, I1 = ln({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = je("v-icon");
    return Te(), Oe("div", { class: ee(["contact-strip", { "is-dense": e.dense }]) }, [(Te(true), Oe(ge, null, Qt(Re(ch), (l) => (Te(), Oe("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [p(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), b("span", V1, Ie(l.display ?? l.label), 1)], 8, _1))), 128))], 2);
  };
} }), P1 = Kn(I1, [["__scopeId", "data-v-0c3dbac0"]]), A1 = { id: "contact", class: "contact-section" }, T1 = { class: "contact-band glass-panel" }, D1 = ln({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return Te(), Oe("section", A1, [p(a, { class: "contact-container" }, { default: Pe(() => [b("div", T1, [n[0] || (n[0] = b("div", { class: "contact-head" }, [b("span", { class: "glass-chip section-kicker" }, "Contact"), b("h2", { class: "contact-title" }, "Open to interesting problems."), b("p", { class: "contact-copy" })], -1)), p(P1, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), E1 = Kn(D1, [["__scopeId", "data-v-e54dfca1"]]), M1 = ln({ __name: "App", setup(e) {
  return (t, n) => {
    const a = je("v-main"), l = je("v-app");
    return Te(), en(l, null, { default: Pe(() => [p(Qw), p(cC), p(a, null, { default: Pe(() => [p($C), p(e1), p(C1), p(E1)]), _: 1 }), p(fC)]), _: 1 });
  };
} }), B1 = z({ ...pe(), ...Fe(oh(), ["fullHeight"]), ...Ue() }, "VApp"), $1 = J()({ name: "VApp", props: B1(), setup(e, t) {
  let { slots: n } = t;
  const a = qe(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = rh({ ...e, fullHeight: true }), { rtlClasses: s } = _t();
  return te(() => {
    var _a3;
    return b("div", { ref: r, class: ee(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: ve([e.style]) }, [b("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Me = z({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), dh = z({ text: String, ...pe(), ...Me() }, "VToolbarTitle"), pc = J()({ name: "VToolbarTitle", props: dh(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(n.default || n.text || e.text);
    return p(e.tag, { class: ee(["v-toolbar-title", e.class]), style: ve(e.style) }, { default: () => {
      var _a3;
      return [a && b("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), L1 = z({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function yn(e, t, n) {
  return J()({ name: e, props: L1({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? ec : Da;
      return ma(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function Sc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return J()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Wn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? ec : Da;
    return () => ma(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function kc() {
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
const F1 = z({ target: [Object, Array] }, "v-dialog-transition"), gs = /* @__PURE__ */ new WeakMap(), xr = J()({ name: "VDialogTransition", props: F1(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = iv(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (gs.set(l, i), Wn()) aa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Hf }).finished.then(() => o());
    else {
      const f = aa(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Hf });
      (_a3 = ov(l)) == null ? void 0 : _a3.forEach((m) => {
        aa(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Lo });
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
    !gs.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = iv(e.target, l) : i = gs.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    Wn() ? aa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: zf }).finished.then(() => o()) : (aa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: zf }).finished.then(() => o()), (_a3 = ov(l)) == null ? void 0 : _a3.forEach((m) => {
      aa(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Lo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? p(Da, K({ name: "dialog-transition" }, a, { css: false }), n) : p(Da, { name: "dialog-transition" }, n);
} });
function ov(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function iv(e, t) {
  const n = $g(e), a = uc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), m = c / f || 0, S = d / f || 0, v = a.width * a.height / (window.innerWidth * window.innerHeight), y = v > 0.12 ? Math.min(1.5, (v - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: m, sy: S, speed: y };
}
const R1 = yn("fab-transition", "center center", "out-in"), O1 = yn("dialog-bottom-transition"), N1 = yn("dialog-top-transition"), Ho = yn("fade-transition"), wc = yn("scale-transition"), H1 = yn("scroll-x-transition"), z1 = yn("scroll-x-reverse-transition"), W1 = yn("scroll-y-transition"), j1 = yn("scroll-y-reverse-transition"), U1 = yn("slide-x-transition"), G1 = yn("slide-x-reverse-transition"), xc = yn("slide-y-transition"), Y1 = yn("slide-y-reverse-transition"), Cr = Sc("expand-transition", kc()), Cc = Sc("expand-x-transition", kc("", "x")), K1 = Sc("expand-both-transition", kc("", "both")), q1 = z({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Be = J(false)({ name: "VDefaultsProvider", props: q1(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = Zl(e);
  return mt(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), kt = z({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function wt(e) {
  return { dimensionStyles: _(() => {
    const n = {}, a = de(e.height), l = de(e.maxHeight), o = de(e.maxWidth), i = de(e.minHeight), r = de(e.minWidth), s = de(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function X1(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const fh = z({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...pe(), ...kt() }, "VResponsive"), Qs = J()({ name: "VResponsive", props: fh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = X1(e), { dimensionStyles: l } = wt(e);
  return te(() => {
    var _a3;
    return b("div", { class: ee(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ve([l.value, e.style]) }, [b("div", { class: "v-responsive__sizer", style: ve(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && b("div", { class: ee(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function _c(e) {
  return sc(() => {
    const { class: t, style: n } = vh(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Et(e) {
  const { colorClasses: t, colorStyles: n } = _c(() => ({ text: nt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Xe(e) {
  const { colorClasses: t, colorStyles: n } = _c(() => ({ background: nt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function Z1(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function vh(e) {
  const t = Z1(nt(e)), n = [], a = {};
  if (t.background) if (Gs(t.background)) {
    if (a.backgroundColor = t.background, !t.text && A0(t.background)) {
      const l = fn(t.background);
      if (l.a == null || l.a === 1) {
        const o = jg(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Gs(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const it = z({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
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
const ha = z({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Kt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? ec : Da, ...s } = il(a) ? a : {};
  let u;
  return il(a) ? u = K(s, d0({ disabled: l, group: o }), i) : u = K({ name: l || !a ? "" : a }, i), ma(r, u, n);
};
function rv(e, t) {
  if (!lc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? eu(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function eu(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Dn = { mounted: rv, unmounted: eu, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (eu(e, t), rv(e, t));
} }, mh = z({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...fh(), ...pe(), ...it(), ...ha() }, "VImg"), da = J()({ name: "VImg", directives: { vIntersect: Dn }, props: mh(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { roundedClasses: i } = dt(e), r = St("VImg"), s = ie(""), u = q(), c = ie(e.eager ? "loading" : "idle"), d = ie(), f = ie(), m = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = _(() => m.value.aspect || d.value / f.value || 0);
  re(() => e.src, () => {
    v(c.value !== "idle");
  }), re(S, (D, M) => {
    !D && M && u.value && V(u.value);
  }), Jl(() => v());
  function v(D) {
    if (!(e.eager && D) && !(lc && !D && !e.eager)) {
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
      const { naturalHeight: F, naturalWidth: W } = D;
      F || W ? (d.value = W, f.value = F) : !D.complete && c.value === "loading" && M != null ? I = window.setTimeout(T, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const w = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!m.value.src || c.value === "idle") return null;
    const D = b("img", { class: ee(["v-img__img", w.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.src, srcset: m.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: y, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return p(Kt, { transition: e.transition, appear: true }, { default: () => [at(M ? b("picture", { class: "v-img__picture" }, [M, D]) : D, [[Mn, c.value === "loaded"]])] });
  }, C = () => p(Kt, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && b("img", { class: ee(["v-img__img", "v-img__img--preload", w.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), x = () => a.placeholder ? p(Kt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && b("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? p(Kt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && b("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? b("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ie(false);
  {
    const D = re(S, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), D());
    });
  }
  return te(() => {
    const D = Qs.filterProps(e);
    return at(p(Qs, K({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: de(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => b(ge, null, [p(g, null, null), p(C, null, null), p(P, null, null), p(x, null, null), p(A, null, null)]), default: a.default }), [[Dn, { handler: v, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), zt = z({ border: [Boolean, Number, String] }, "border");
function Xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { borderClasses: _(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const xt = z({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function It(e) {
  return { elevationClasses: B(() => {
    const n = ht(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const sv = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Zn = z({ location: String }, "location");
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = _t();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = js(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[sv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[sv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const J1 = [null, "prominent", "default", "comfortable", "compact"], gh = z({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => J1.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...zt(), ...pe(), ...xt(), ...Zn(), ...it(), ...Me({ tag: "header" }), ...Ue() }, "VToolbar"), tu = J()({ name: "VToolbar", props: gh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color), { borderClasses: o } = Xt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Oa(e), { roundedClasses: s } = dt(e), { themeClasses: u } = qe(e), { rtlClasses: c } = _t(), d = ie(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return mt({ VBtn: { variant: "text" } }), te(() => {
    var _a4;
    const S = !!(e.title || n.title), v = !!(n.image || e.image), y = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!y : e.extended, p(e.tag, { class: ee(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: ve([l.value, r.value, e.style]) }, { default: () => [v && b("div", { key: "image", class: "v-toolbar__image" }, [n.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : p(da, { key: "image-img", cover: true, src: e.image }, null)]), p(Be, { defaults: { VTabs: { height: de(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [b("div", { class: "v-toolbar__content", style: { height: de(f.value) } }, [n.prepend && b("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && p(pc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && b("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), p(Be, { defaults: { VTabs: { height: de(m.value) } } }, { default: () => [p(Cr, null, { default: () => [d.value && b("div", { class: "v-toolbar__extension", style: { height: de(m.value) } }, [y])] })] })] });
  }), { contentHeight: f, extensionHeight: m };
} }), Q1 = z({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function e_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = q(null), r = ie(0), s = ie(0), u = ie(0), c = ie(false), d = ie(false), f = ie(false), m = ie(false), S = ie(true), v = _(() => Number(e.scrollThreshold)), y = _(() => Ze((v.value - r.value) / v.value || 0));
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
  return re(d, () => {
    s.value = s.value || r.value;
  }), re(c, () => {
    s.value = 0;
  }), Ct(() => {
    re(() => e.scrollTarget, (w) => {
      var _a3;
      const g = w ? document.querySelector(w) : window;
      g && g !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), i.value = g, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        k();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Ht(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && re(n, V, { immediate: true }), { scrollThreshold: v, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: y, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: S };
}
function bl() {
  const e = ie(false);
  return Ct(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: al(e) };
}
const t_ = z({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Fe(gh(), ["location"]), ...hl(), ...Q1(), height: { type: [Number, String], default: 64 } }, "VAppBar"), n_ = J()({ name: "VAppBar", props: t_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = q(), l = we(e, "modelValue"), o = _(() => {
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
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: m, hasEnoughScrollableSpace: S } = e_(e, { canScroll: i, layoutSize: r }), v = B(() => o.value.hide || o.value.fullyHide), y = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), k = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
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
  const { ssrBootStyles: V } = bl(), { layoutItemStyles: w } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: ie(void 0), active: l, absolute: B(() => e.absolute) });
  return te(() => {
    const g = Fe(tu.filterProps(e), ["location"]);
    return p(tu, K({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...w.value, "--v-toolbar-image-opacity": k.value, height: void 0, ...V.value }, e.style] }, g, { collapse: y.value, flat: h.value }), n);
  }), {};
} }), a_ = [null, "default", "comfortable", "compact"], gt = z({ density: { type: String, default: "default", validator: (e) => a_.includes(e) } }, "density");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const l_ = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ya(e, t) {
  return b(ge, null, [e && b("span", { key: "overlay", class: ee(`${t}__overlay`) }, null), b("span", { key: "underlay", class: ee(`${t}__underlay`) }, null)]);
}
const bn = z({ color: String, variant: { type: String, default: "elevated", validator: (e) => l_.includes(e) } }, "variant");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = B(() => {
    const { variant: o } = nt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = _c(() => {
    const { variant: o, color: i } = nt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const hh = z({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...Me(), ...Ue(), ...bn() }, "VBtnGroup"), nu = J()({ name: "VBtnGroup", props: hh(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Ft(e), { borderClasses: o } = Xt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e);
  mt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), te(() => p(e.tag, { class: ee(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: ve(e.style) }, n));
} }), pl = z({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Sl = z({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
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
  const i = B(() => e.value), r = _(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: l, value: i, disabled: r }, a);
  }
  function u() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Ht(() => u());
  const c = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), m = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return re(c, (S) => {
    a.emit("group:selected", { value: S });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (S) => o.select(l, S), selectedClass: m, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Na(e, t) {
  let n = false;
  const a = Tt([]), l = we(e, "modelValue", [], (f) => f === void 0 ? [] : yh(a, f === null ? [null] : ot(f)), (f) => {
    const m = i_(a, f);
    return e.multiple ? m : m[0];
  }), o = St("useGroup");
  function i(f, m) {
    const S = f, v = Symbol.for(`${t.description}:id`), h = Ml(v, o == null ? void 0 : o.vnode).indexOf(m);
    Re(S.value) === void 0 && (S.value = h, S.useIndexAsValue = true), h > -1 ? a.splice(h, 0, S) : a.push(S);
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
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => o_(a, f) };
  return rt(t, d), d;
}
function o_(e, t) {
  const n = yh(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function yh(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Dt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function i_(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Vc = Symbol.for("vuetify:v-btn-toggle"), r_ = z({ ...hh(), ...pl() }, "VBtnToggle"), s_ = J()({ name: "VBtnToggle", props: r_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Na(e, Vc);
  return te(() => {
    const s = nu.filterProps(e);
    return p(nu, K({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), u_ = ["x-small", "small", "default", "large", "x-large"], Jn = z({ size: { type: [String, Number], default: "default" } }, "size");
function Ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return sc(() => {
    const n = e.size;
    let a, l;
    return Gi(u_, n) ? a = `${t}--size-${n}` : n && (l = { width: de(n), height: de(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const c_ = z({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ce, opacity: [String, Number], ...pe(), ...Jn(), ...Me({ tag: "i" }), ...Ue() }, "VIcon"), Ye = J()({ name: "VIcon", props: c_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ie(), { themeClasses: o } = wr(), { iconData: i } = q0(() => l.value || e.icon), { sizeClasses: r } = Ql(e), { textColorClasses: s, textColorStyles: u } = Et(() => e.color);
  return te(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = Tg(c).filter((f) => f.type === ei && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return p(i.value.component, { tag: e.tag, icon: i.value.icon, class: ee(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ve([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: de(e.size), height: de(e.size), width: de(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ii(e, t) {
  const n = q(), a = ie(false);
  if (lc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    bt(() => {
      l.disconnect();
    }), re(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const d_ = z({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function f_(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ie(e.reveal ? "initial" : "disabled");
  return Ct(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const v_ = z({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...pe(), ...d_(), ...Jn(), ...Me({ tag: "div" }), ...Ue() }, "VProgressCircular"), Ba = J()({ name: "VProgressCircular", props: v_(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = q(), { themeClasses: i } = qe(e), { sizeClasses: r, sizeStyles: s } = Ql(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { textColorClasses: d, textColorStyles: f } = Et(() => e.bgColor), { intersectionRef: m, isIntersecting: S } = ii(), { resizeRef: v, contentRect: y } = wn(), { state: h, duration: k } = f_(e), I = B(() => h.value === "initial" ? 0 : Ze(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), w = B(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(V.value, 32)), g = B(() => a / (1 - V.value / w.value) * 2), C = B(() => V.value / w.value * g.value), x = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? de(Math.min(l - 0.01, P + C.value)) : de(P);
  }), A = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ct(() => {
    m.value = o.value, v.value = o.value;
  }), te(() => p(e.tag, { ref: o, class: ee(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Wn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: ve([s.value, c.value, { "--progress-reveal-duration": `${k.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [b("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [b("circle", { class: ee(["v-progress-circular__underlay", d.value]), style: ve(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), b("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": x.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && b("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), m_ = z({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function g_(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = nt(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = B(() => Number(e.chunkGap)), o = _(() => {
    if (!n.value) return {};
    const r = de(l.value), s = de(a.value);
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
const h_ = z({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...m_(), ...pe(), ...Zn({ location: "top" }), ...it(), ...Me(), ...Ue() }, "VProgressLinear"), _r = J()({ name: "VProgressLinear", props: h_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = q(), l = we(e, "modelValue"), { isRtl: o, rtlClasses: i } = _t(), { themeClasses: r } = qe(e), { locationStyles: s } = Oa(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Xe(() => e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: S } = Xe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: y } = Xe(() => e.color), { roundedClasses: h } = dt(e), { intersectionRef: k, isIntersecting: I } = ii(), V = _(() => parseFloat(e.max)), w = _(() => parseFloat(e.height)), g = _(() => Ze(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => Ze(parseFloat(l.value) / V.value * 100, 0, 100)), x = _(() => o.value !== e.reverse), A = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = ie(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = g_(e, P);
  $t(E, () => {
    const { resizeRef: N } = wn((Z) => P.value = Z[0].contentRect.width);
    ct(() => N.value = a.value);
  });
  const T = _(() => E.value ? M(g.value) : g.value), F = _(() => E.value ? M(C.value) : C.value);
  function W(N) {
    if (!k.value) return;
    const { left: Z, right: R, width: $ } = k.value.getBoundingClientRect(), Y = x.value ? $ - N.clientX + (R - $) : N.clientX - Z;
    l.value = Math.round(Y / $ * V.value);
  }
  return ct(() => {
    k.value = a.value;
  }), te(() => p(e.tag, { ref: a, class: ee(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": x.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: ve([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? de(w.value) : 0, "--v-progress-linear-height": de(w.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && W }, { default: () => [e.stream && b("div", { key: "stream", class: ee(["v-progress-linear__stream", u.value]), style: { ...c.value, [x.value ? "left" : "right"]: de(-w.value), borderTop: `${de(w.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${de(w.value / 4)})`, width: de(100 - g.value, "%"), "--v-progress-linear-stream-to": de(w.value * (x.value ? 1 : -1)) } }, null), b("div", { class: ee(["v-progress-linear__background", d.value]), style: ve([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), b("div", { class: ee(["v-progress-linear__buffer", m.value]), style: ve([S.value, { opacity: parseFloat(e.bufferOpacity), width: de(T.value, "%") }]) }, null), p(Da, { name: A.value }, { default: () => [e.indeterminate ? b("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => b("div", { key: N, class: ee(["v-progress-linear__indeterminate", N, v.value]), style: ve(y.value) }, null))]) : b("div", { class: ee(["v-progress-linear__determinate", v.value]), style: ve([y.value, { width: de(F.value, "%") }]) }, null)] }), n.default && b("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
} }), Vr = z({ loading: [Boolean, String] }, "loader");
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function si(e, t) {
  var _a3;
  let { slots: n } = t;
  return b("div", { class: ee(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || p(_r, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const y_ = ["static", "relative", "fixed", "absolute", "sticky"], eo = z({ position: { type: String, validator: (e) => y_.includes(e) } }, "position");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function b_() {
  const e = St("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function bh() {
  var _a3, _b2;
  return (_b2 = (_a3 = St("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function ui(e, t) {
  const n = VS("RouterLink"), a = B(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || Vf(t, "click") || Vf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Tt({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = b_(), s = _(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Dt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = _(() => {
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
const ci = z({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let hs = false;
function p_(e, t) {
  let n = false, a, l;
  Je && (e == null ? void 0 : e.beforeEach) && (Ee(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      hs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), hs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      hs = false;
    });
  }), bt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function S_(e, t) {
  re(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ee(() => {
      t(n);
    });
  }, { immediate: true });
}
const au = Symbol("rippleStop"), k_ = 80;
function uv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function lu(e) {
  return e.constructor.name === "TouchEvent";
}
function ph(e) {
  return e.constructor.name === "KeyboardEvent";
}
const w_ = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!ph(e)) {
    const d = t.getBoundingClientRect(), f = lu(e) ? e.touches[e.touches.length - 1] : e;
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
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = w_(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), uv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), uv(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function Sh(e) {
  return typeof e > "u" || !!e;
}
function zo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[au])) {
    if (e[au] = true, lu(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || ph(e), n._ripple.class && (t.class = n._ripple.class), lu(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Ji.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, k_);
    } else Ji.show(e, n, t);
  }
}
function Qi(e) {
  e[au] = true;
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
function kh(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Wo = false;
function x_(e, t) {
  !Wo && t.includes(e.key) && (Wo = true, zo(e));
}
function wh(e) {
  Wo = false, un(e);
}
function xh(e) {
  Wo && (Wo = false, un(e));
}
function Ch(e, t, n) {
  const { value: a, modifiers: l } = t, o = Sh(a);
  o || Ji.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = il(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => x_(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Qi, { passive: true }), e.addEventListener("mousedown", Qi);
      return;
    }
    e.addEventListener("touchstart", zo, { passive: true }), e.addEventListener("touchend", un, { passive: true }), e.addEventListener("touchmove", kh, { passive: true }), e.addEventListener("touchcancel", un), e.addEventListener("mousedown", zo), e.addEventListener("mouseup", un), e.addEventListener("mouseleave", un), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", wh), e.addEventListener("blur", xh), e.addEventListener("dragstart", un, { passive: true });
  } else !o && n && _h(e);
}
function _h(e) {
  var _a3;
  e.removeEventListener("touchstart", Qi), e.removeEventListener("mousedown", Qi), e.removeEventListener("touchstart", zo), e.removeEventListener("touchend", un), e.removeEventListener("touchmove", kh), e.removeEventListener("touchcancel", un), e.removeEventListener("mousedown", zo), e.removeEventListener("mouseup", un), e.removeEventListener("mouseleave", un), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", wh), e.removeEventListener("blur", xh), e.removeEventListener("dragstart", un);
}
function C_(e, t) {
  Ch(e, t, false);
}
function __(e) {
  _h(e), delete e._ripple;
}
function V_(e, t) {
  if (t.value === t.oldValue) return;
  const n = Sh(t.oldValue);
  Ch(e, t, n);
}
const Lt = { mounted: C_, unmounted: __, updated: V_ }, Ir = z({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Vc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...Sl(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "elevated" }) }, "VBtn"), ze = J()({ name: "VBtn", props: Ir(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = Xt(e), { densityClasses: i } = Ft(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: u } = ri(e), { locationStyles: c } = Oa(e), { positionClasses: d } = to(e), { roundedClasses: f } = dt(e), { sizeClasses: m, sizeStyles: S } = Ql(e), v = Ma(e, e.symbol, false), y = ui(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : y.isRouterLink.value ? (_a3 = y.isActive) == null ? void 0 : _a3.value : v == null ? void 0 : v.isSelected.value;
  }), k = B(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (v == null ? void 0 : v.isSelected.value) && (!y.isLink.value || ((_a3 = y.isActive) == null ? void 0 : _a3.value)) || !v || ((_b2 = y.isActive) == null ? void 0 : _b2.value) ? k.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: w, variantClasses: g } = ba(I), C = _(() => (v == null ? void 0 : v.disabled.value) || e.disabled), x = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || y.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? (_b2 = (_a3 = y.navigate).value) == null ? void 0 : _b2.call(_a3, E) : v == null ? void 0 : v.toggle());
  }
  return S_(y, v == null ? void 0 : v.select), te(() => {
    const E = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return at(p(E, K(y.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", v == null ? void 0 : v.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": x.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, m.value, g.value, e.class], style: [w.value, r.value, c.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ya(true, "v-btn"), !e.icon && D && b("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : p(Ye, { key: "prepend-icon", icon: e.prependIcon }, null)]), b("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? p(Ye, { key: "content-icon", icon: e.icon }, null) : p(Be, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text)];
      } })]), !e.icon && M && b("span", { key: "append", class: "v-btn__append" }, [a.append ? p(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : p(Ye, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && b("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? p(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Lt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: v };
} }), I_ = z({ ...Fe(Ir({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), P_ = J()({ name: "VAppBarNavIcon", props: I_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(ze, K(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), A_ = J()({ name: "VAppBarTitle", props: dh(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(pc, K(e, { class: "v-app-bar-title" }), n)), {};
} }), Vh = ga("v-alert-title"), Ih = z({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Ph(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const T_ = ["success", "info", "warning", "error"], D_ = z({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => T_.includes(e) }, ...pe(), ...gt(), ...kt(), ...xt(), ...Ih(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAlert"), E_ = J()({ name: "VAlert", props: D_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Ph(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = qe(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ba(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Ft(e), { dimensionStyles: f } = wt(e), { elevationClasses: m } = It(e), { locationStyles: S } = Oa(e), { positionClasses: v } = to(e), { roundedClasses: y } = dt(e), { textColorClasses: h, textColorStyles: k } = Et(() => e.borderColor), { t: I } = Qe(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(w) {
    l.value = false, n("click:close", w);
  } }));
  return () => {
    const w = !!(a.prepend || o.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), x = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && p(e.tag, { class: ee(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, m.value, v.value, y.value, c.value, e.class]), style: ve([u.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ya(false, "v-alert"), e.border && b("div", { key: "border", class: ee(["v-alert__border", h.value]), style: ve(k.value) }, null), w && b("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...x } } }, a.prepend) : p(Ye, K({ key: "prepend-icon" }, x), null)]), b("div", { class: "v-alert__content" }, [g && p(Vh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && b("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && b("div", { key: "close", class: "v-alert__close" }, [a.close ? p(Be, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : p(ze, K({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), M_ = z({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...zt(), ...pe(), ...gt(), ...it(), ...Jn(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAvatar"), hn = J()({ name: "VAvatar", props: M_(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = Xt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ba(e), { densityClasses: s } = Ft(e), { roundedClasses: u } = dt(e), { sizeClasses: c, sizeStyles: d } = Ql(e);
  return te(() => p(e.tag, { class: ee(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: ve([i.value, d.value, e.style]) }, { default: () => [n.default ? p(Be, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? p(da, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? p(Ye, { key: "icon", icon: e.icon }, null) : e.text, ya(false, "v-avatar")] })), {};
} }), B_ = z({ text: String, onClick: Bt(), ...pe(), ...Ue() }, "VLabel"), no = J()({ name: "VLabel", props: B_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return b("label", { class: ee(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ve(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ah = Symbol.for("vuetify:selection-control-group"), Ic = z({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...pe(), ...gt(), ...Ue() }, "SelectionControlGroup"), $_ = z({ ...Ic({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), Th = J()({ name: "VSelectionControlGroup", props: $_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = Mt(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return rt(Ah, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), bt(() => {
      r.delete(s);
    });
  } }), mt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), te(() => {
    var _a3;
    return b("div", { class: ee(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ve(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Pr = z({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...pe(), ...Ic() }, "VSelectionControl");
function L_(e) {
  const t = We(Ah, void 0), { densityClasses: n } = Ft(e), a = we(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
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
const $a = J()({ name: "VSelectionControl", directives: { vRipple: Lt }, inheritAttrs: false, props: Pr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = L_(e), m = Mt(), S = ie(false), v = ie(false), y = q(), h = B(() => e.id || `input-${m}`), k = B(() => !e.disabled && !e.readonly);
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
  return te(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [x, A] = qn(n), P = b("input", K({ ref: y, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return b("div", K({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": v.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, x, { style: e.style }), [b("div", { class: ee(["v-selection-control__wrapper", s.value]), style: ve(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), at(b("div", { class: ee(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? b(ge, null, [i.value && p(Ye, { key: "icon", icon: i.value }, null), P])]), [[Lt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && p(no, { for: h.value, onClick: w }, { default: () => [C] })]);
  }), { isFocused: S, input: y };
} }), Dh = z({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ...Pr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), En = J()({ name: "VCheckboxBtn", props: Dh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "indeterminate"), l = we(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => {
    const s = Fe($a.filterProps(e), ["modelValue"]);
    return p($a, K(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
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
    return p(Ye, K({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const F_ = z({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...pe(), ...ha({ transition: { component: xc, leaveAbsolute: true, group: true } }) }, "VMessages"), Eh = J()({ name: "VMessages", props: F_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => ot(e.messages)), { textColorClasses: l, textColorStyles: o } = Et(() => e.color);
  return te(() => p(Kt, { transition: e.transition, tag: "div", class: ee(["v-messages", l.value, e.class]), style: ve([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => b("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), fi = z({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = we(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const Mh = Symbol.for("vuetify:form"), R_ = z({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function O_(e) {
  const t = we(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = ie(false), o = q([]), i = q([]);
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
  return re(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const m of o.value) m.isValid === false ? (d++, f.push({ id: m.id, errorMessages: m.errorMessages })) : m.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), rt(Mh, { register: (c) => {
    let { id: d, vm: f, validate: m, reset: S, resetValidation: v } = c;
    o.value.some((y) => y.id === d), o.value.push({ id: d, validate: m, reset: S, resetValidation: v, vm: dm(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const m = o.value.find((S) => S.id === c);
    m && (m.isValid = d, m.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function ao(e) {
  const t = We(Mh, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const N_ = Symbol.for("vuetify:rules");
function H_(e) {
  const t = We(N_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const Bh = z({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function $h(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = we(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = ao(e), i = H_(() => e.rules), r = q([]), s = ie(true), u = _(() => !!(ot(a.value === "" ? null : a.value).length || ot(l.value === "" ? null : l.value).length)), c = _(() => {
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
  }), m = ie(false), S = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), v = St("validation"), y = _(() => e.name ?? Re(n));
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
    re(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = re(() => e.focused, (w) => {
          w || I(), V();
        });
      }
    });
  }), $t(() => d.value.blur, () => {
    re(() => e.focused, (V) => {
      V || I();
    });
  }), re([f, c], () => {
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
const Sa = z({ id: String, appendIcon: Ce, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...pe(), ...gt(), ...tn(kt(), ["maxWidth", "minWidth", "width"]), ...Ue(), ...Bh() }, "VInput"), Nt = J()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Ft(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = qe(e), { rtlClasses: s } = _t(), { InputIcon: u } = di(e), c = Mt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: m, isDisabled: S, isReadonly: v, isPristine: y, isValid: h, isValidating: k, reset: I, resetValidation: V, validate: w, validationClasses: g } = $h(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), x = B(() => C.value.length > 0), A = B(() => !e.hideDetails || e.hideDetails === "auto" && (x.value || !!a.details)), P = _(() => A.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: m, isDisabled: S, isReadonly: v, isPristine: y, isValid: h, isValidating: k, hasDetails: A, reset: I, resetValidation: V, validate: w })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return te(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), F = !!(a.append || e.appendIcon);
    return b("div", { class: ee(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, g.value, e.class]), style: ve([i.value, e.style]) }, [T && b("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && p(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && b("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), F && b("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && p(u, { key: "append-icon", name: "append", color: M.value }, null)]), A.value && b("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [p(Eh, { active: x.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: I, resetValidation: V, validate: w, isValid: h, errorMessages: f };
} }), ys = Symbol("Forwarded refs");
function bs(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[ys] = n, new Proxy(e, { get(l, o) {
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
        const s = bs(r.value, o) ?? ("_" in r.value ? bs((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[ys];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = bs(c.value, o);
          if (d) return d;
          const f = c.value && c.value[ys];
          f && u.push(...f);
        }
      }
    }
  } });
}
const z_ = z({ ...Fe(Sa(), ["direction"]), ...Fe(Dh(), ["inline"]) }, "VCheckbox"), W_ = J()({ name: "VCheckbox", inheritAttrs: false, props: z_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), { isFocused: o, focus: i, blur: r } = pa(e), s = q(), u = Mt();
  return te(() => {
    const [c, d] = qn(n), f = Nt.filterProps(e), m = En.filterProps(e);
    return p(Nt, K({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: v, messagesId: y, isDisabled: h, isReadonly: k, isValid: I } = S;
      return p(En, K(m, { id: v.value, "aria-describedby": y.value, disabled: h.value, readonly: k.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function j_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = jo(l, n), i = Lh(l, a, n), r = jo(l, t), s = Fh(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function U_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = jo(a, n), o = Fh(a, t), i = jo(a, t);
  return o - l / 2 + i / 2;
}
function cv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function G_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function Lh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function jo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Fh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Pc = Symbol.for("vuetify:v-slide-group"), Ac = z({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Pc }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...pe(), ...gl({ mobile: null }), ...Me(), ...pl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Uo = J()({ name: "VSlideGroup", props: Ac(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = _t(), { displayClasses: l, mobile: o } = on(e), i = Na(e, e.symbol), r = ie(false), s = ie(0), u = ie(0), c = ie(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: m } = wn(), { resizeRef: S, contentRect: v } = wn(), y = qx(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), k = _(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Je) {
    let j = -1;
    re(() => [i.selected.value, m.value, v.value, d.value], () => {
      cancelAnimationFrame(j), j = requestAnimationFrame(() => {
        if (m.value && v.value) {
          const O = d.value ? "width" : "height";
          u.value = m.value[O], c.value = v.value[O], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && k.value >= 0 && S.el) {
          const O = S.el.children[I.value];
          w(O, e.centerActive);
        }
      });
    });
  }
  const V = ie(false);
  function w(j, O) {
    let U = 0;
    O ? U = U_({ containerElement: f.el, isHorizontal: d.value, selectedElement: j }) : U = j_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: j }), g(U);
  }
  function g(j) {
    if (!Je || !f.el) return;
    const O = jo(d.value, f.el), U = Lh(d.value, a.value, f.el);
    if (!(cv(d.value, f.el) <= O || Math.abs(j - U) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: ye, offsetWidth: ne } = f.el;
        j = ye - ne - j;
      }
      d.value ? y.horizontal(j, h.value) : y(j, h.value);
    }
  }
  function C(j) {
    const { scrollTop: O, scrollLeft: U } = j.target;
    s.value = d.value ? U : O;
  }
  function x(j) {
    if (V.value = true, !(!r.value || !S.el)) {
      for (const O of j.composedPath()) for (const U of S.el.children) if (U === O) {
        w(U);
        return;
      }
    }
  }
  function A(j) {
    V.value = false;
  }
  let P = false;
  function E(j) {
    var _a3;
    !P && !V.value && !(j.relatedTarget && ((_a3 = S.el) == null ? void 0 : _a3.contains(j.relatedTarget))) && F(), P = false;
  }
  function D() {
    P = true;
  }
  function M(j) {
    if (!S.el) return;
    function O(U) {
      j.preventDefault(), F(U);
    }
    d.value ? j.key === "ArrowRight" ? O(a.value ? "prev" : "next") : j.key === "ArrowLeft" && O(a.value ? "next" : "prev") : j.key === "ArrowDown" ? O("next") : j.key === "ArrowUp" && O("prev"), j.key === "Home" ? O("first") : j.key === "End" && O("last");
  }
  function T(j, O) {
    if (!j) return;
    let U = j;
    do
      U = U == null ? void 0 : U[O === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (U == null ? void 0 : U.hasAttribute("disabled"));
    return U;
  }
  function F(j) {
    if (!S.el) return;
    let O;
    if (!j) O = Pa(S.el)[0];
    else if (j === "next") {
      if (O = T(S.el.querySelector(":focus"), j), !O) return F("first");
    } else if (j === "prev") {
      if (O = T(S.el.querySelector(":focus"), j), !O) return F("last");
    } else j === "first" ? (O = S.el.firstElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "next"))) : j === "last" && (O = S.el.lastElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "prev")));
    O && O.focus({ preventScroll: true });
  }
  function W(j) {
    const O = d.value && a.value ? -1 : 1, U = (j === "prev" ? -O : O) * u.value;
    let ae = s.value + U;
    if (d.value && a.value && f.el) {
      const { scrollWidth: ye, offsetWidth: ne } = f.el;
      ae += ye - ne;
    }
    g(ae);
  }
  const N = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Z = _(() => r.value || Math.abs(s.value) > 0), R = _(() => {
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
  }), $ = _(() => Math.abs(s.value) > 1), Y = _(() => {
    if (!f.value || !Z.value) return false;
    const j = cv(d.value, f.el), O = G_(d.value, f.el);
    return j - O - Math.abs(s.value) > 1;
  });
  return te(() => p(e.tag, { class: ee(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": R.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: ve(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [R.value && b("div", { key: "prev", class: ee(["v-slide-group__prev", { "v-slide-group__prev--disabled": !$.value }]), onMousedown: D, onClick: () => $.value && W("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, N.value)) ?? p(Ho, null, { default: () => [p(Ye, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), b("div", { key: "container", ref: f, class: ee(["v-slide-group__container", e.contentClass]), onScroll: C }, [b("div", { ref: S, class: "v-slide-group__content", onFocusin: x, onFocusout: A, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), R.value && b("div", { key: "next", class: ee(["v-slide-group__next", { "v-slide-group__next--disabled": !Y.value }]), onMousedown: D, onClick: () => Y.value && W("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? p(Ho, null, { default: () => [p(Ye, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: W, scrollOffset: s, focus: F, hasPrev: $, hasNext: Y };
} }), Rh = Symbol.for("vuetify:v-chip-group"), Y_ = z({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...Ac({ scrollToActive: false }), ...pe(), ...pl({ selectedClass: "v-chip--selected" }), ...Me(), ...Ue(), ...bn({ variant: "tonal" }) }, "VChipGroup"), K_ = J()({ name: "VChipGroup", props: Y_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Rh);
  return mt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), te(() => {
    const u = Uo.filterProps(e);
    return p(Uo, K(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), q_ = z({ activeClass: String, appendAvatar: String, appendIcon: Ce, baseColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ce, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...zt(), ...pe(), ...gt(), ...xt(), ...Sl(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "span" }), ...Ue(), ...bn({ variant: "tonal" }) }, "VChip"), fa = J()({ name: "VChip", directives: { vRipple: Lt }, props: q_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { borderClasses: i } = Xt(e), { densityClasses: r } = Ft(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { sizeClasses: c } = Ql(e), { themeClasses: d } = qe(e), f = we(e, "modelValue"), m = Ma(e, Rh, false), S = Ma(e, Pc, false), v = ui(e, n), y = B(() => e.link !== false && v.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!m || e.link || v.isClickable.value)), k = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(x) {
    x.preventDefault(), x.stopPropagation(), f.value = false, a("click:close", x);
  } }));
  re(f, (x) => {
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
    return f.value && at(p(x, K(v.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = v.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, w.value, m == null ? void 0 : m.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !y.value && C }), { default: () => {
      var _a4;
      return [ya(h.value, "v-chip"), D && p(Cc, { key: "filter" }, { default: () => [at(b("div", { class: "v-chip__filter" }, [l.filter ? p(Be, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : p(Ye, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Mn, m.isSelected.value]])] }), T && b("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? p(Be, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : b(ge, null, [e.prependIcon && p(Ye, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && p(hn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), b("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: m == null ? void 0 : m.isSelected.value, selectedClass: m == null ? void 0 : m.selectedClass.value, select: m == null ? void 0 : m.select, toggle: m == null ? void 0 : m.toggle, value: m == null ? void 0 : m.value.value, disabled: e.disabled })) ?? Ie(e.text)]), P && b("div", { key: "append", class: "v-chip__append" }, [l.append ? p(Be, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : b(ge, null, [e.appendIcon && p(Ye, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && b("button", K({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, k.value), [l.close ? p(Be, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : p(Ye, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Lt, h.value && e.ripple, null]]);
  };
} }), X_ = ["dotted", "dashed", "solid", "double"], Z_ = z({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => X_.includes(e) }, ...pe(), ...Ue() }, "VDivider"), mn = J()({ name: "VDivider", props: Z_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { textColorClasses: o, textColorStyles: i } = Et(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = de(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = de(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? de(u) : void 0, marginInline: !e.vertical && u ? de(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${de(c)})` : void 0 };
  });
  return te(() => {
    const u = b("hr", { class: ee([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: ve([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? b("div", { class: ee(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, b("div", { class: "v-divider__content", style: ve(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), ou = Symbol.for("vuetify:list");
function Oh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = We(ou, { filterable: false, hasPrepend: ie(false), updateHasPrepend: () => null, trackingIndex: ie(-1), navigationStrategy: ie("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Mt() } = e, i = { filterable: t.filterable || n, hasPrepend: ie(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return rt(ou, i), t;
}
function Nh() {
  return We(ou, null);
}
const Tc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = De(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ot(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Hh = (e) => {
  const t = Tc(e);
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
}, J_ = (e) => {
  const t = Tc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Q_ = (e) => {
  const t = Hh(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, eV = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, zh = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, tV = { open: zh.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Dc = (e) => {
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
}, Wh = (e) => {
  const t = Dc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = De(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, nV = (e) => {
  const t = Dc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, aV = (e) => {
  const t = Wh(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = De(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Ec = (e) => {
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
}, lV = (e) => {
  const t = Ec(e);
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
}, oV = (e) => {
  const n = { select: Ec(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Yl = Symbol.for("vuetify:nested"), jh = { id: ie(), root: { itemsRegistration: q("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: q(/* @__PURE__ */ new Map()), parents: q(/* @__PURE__ */ new Map()), disabled: q(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: q(false), scrollToActive: q(false), selectable: q(false), opened: q(/* @__PURE__ */ new Set()), activated: q(/* @__PURE__ */ new Set()), selected: q(/* @__PURE__ */ new Map()), selectedValues: q([]), getPath: () => [] } }, iV = z({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), rV = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = ie(/* @__PURE__ */ new Map()), r = ie(/* @__PURE__ */ new Map()), s = ie(/* @__PURE__ */ new Set()), u = we(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((g) => De(g)) : w), (w) => [...w.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return J_(e.mandatory);
      case "single-leaf":
        return Q_(e.mandatory);
      case "independent":
        return Tc(e.mandatory);
      case "single-independent":
      default:
        return Hh(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return aV(e.mandatory);
      case "leaf":
        return nV(e.mandatory);
      case "independent":
        return Dc(e.mandatory);
      case "single-independent":
        return Wh(e.mandatory);
      case "trunk":
        return lV(e.mandatory);
      case "branch":
        return oV(e.mandatory);
      case "classic":
      default:
        return Ec(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return tV;
      case "single":
        return eV;
      case "multiple":
      default:
        return zh;
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
  const y = St("nested"), h = /* @__PURE__ */ new Set(), k = Y0(() => {
    Ee(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  re(() => [n.value, nt(a)], () => {
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
          const F = x(T);
          w.set(F, D), M.push(F), A.push(T);
        }
        g.set(D, M);
      }
      E.props.disabled && C.add(D);
    }
    i.value = g, r.value = w, s.value = C;
  }
  const V = { id: ie(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => nt(l)), selectable: B(() => e.selectable), activated: m, selected: S, selectedValues: _(() => {
    const w = [];
    for (const [g, C] of S.value.entries()) C === "on" && w.push(g);
    return w;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (w, g, C, x) => {
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
}, Uh = (e, t, n) => {
  const a = We(Yl, jh), l = Symbol("nested item"), o = _(() => {
    const r = De(nt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Jl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ee(() => {
      a.root.register(o.value, a.id.value, nt(t), n);
    });
  }), Ht(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), re(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ee(() => {
      a.root.register(r, a.id.value, nt(t), n);
    }));
  }), re(() => nt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && rt(Yl, i), i;
}, sV = () => {
  const e = We(Yl, jh);
  rt(Yl, { ...e, isGroupActivator: true });
}, uV = qt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return sV(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Gh = z({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ce, default: "$expand" }, rawId: [String, Number], prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...pe(), ...Me() }, "VListGroup"), Go = J()({ name: "VListGroup", props: Gh(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Uh(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Nh(), { isBooted: s } = bl(), u = We(Yl), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(v) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = v.target) == null ? void 0 : _a3.tagName) || l(!a.value, v);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), m = _(() => a.value ? e.collapseIcon : e.expandIcon), S = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return te(() => p(e.tag, { class: ee(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: ve(e.style) }, { default: () => [n.activator && p(Be, { defaults: S.value }, { default: () => [p(uV, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), p(Kt, { transition: { component: Cr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? at(b("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Mn, a.value]]) : a.value && b("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), cV = z({ opacity: [Number, String], ...pe(), ...Me() }, "VListItemSubtitle"), Yh = J()({ name: "VListItemSubtitle", props: cV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(e.tag, { class: ee(["v-list-item-subtitle", e.class]), style: ve([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Kh = ga("v-list-item-title"), qh = z({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VListItem"), xn = J()({ name: "VListItem", directives: { vRipple: Lt }, props: qh(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = q(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: m, isGroupActivator: S, root: v, parent: y, openOnSelect: h, scrollToActive: k, id: I } = Uh(r, () => e.disabled, false), V = Nh(), w = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (v.activatable.value ? u.value : f.value));
  }), g = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (v.selectable.value || v.activatable.value || e.value != null)), x = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return v.activatable.value ? u.value : v.selectable.value ? f.value : w.value;
  }), D = B(() => e.rounded || e.nav), M = B(() => e.color ?? e.activeColor), T = B(() => ({ color: w.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  re(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (xe) => {
    xe && F();
  }), re(u, (xe) => {
    var _a3;
    !xe || !k || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), re(A, (xe) => {
    var _a3;
    xe && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Jl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ee(() => F());
  });
  function F() {
    y.value != null && v.open(y.value, true), h(true);
  }
  const { themeClasses: W } = qe(e), { borderClasses: N } = Xt(e), { colorClasses: Z, colorStyles: R, variantClasses: $ } = ba(T), { densityClasses: Y } = Ft(e), { dimensionStyles: j } = wt(e), { elevationClasses: O } = It(e), { roundedClasses: U } = dt(D), ae = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ye = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), ne = _(() => ({ isActive: w.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function fe(xe) {
    var _a3, _b2, _c2;
    l("click", xe), !["INPUT", "TEXTAREA"].includes((_a3 = xe.target) == null ? void 0 : _a3.tagName) && x.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, xe), !S && (v.activatable.value ? s(!u.value, xe) : (v.selectable.value || e.value != null && !g.value) && c(!f.value, xe)));
  }
  function Ae(xe) {
    const he = xe.target;
    ["INPUT", "TEXTAREA"].includes(he.tagName) || (xe.key === "Enter" || xe.key === " " && !(V == null ? void 0 : V.filterable)) && (xe.preventDefault(), xe.stopPropagation(), xe.target.dispatchEvent(new MouseEvent("click", xe)));
  }
  return te(() => {
    const xe = g.value ? "a" : e.tag, he = a.title || e.title != null, L = a.subtitle || e.subtitle != null, Q = !!(!!(e.appendAvatar || e.appendIcon) || a.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(oe), e.activeColor && Cg("active-color", ["color", "base-color"]), at(p(xe, K(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": w.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && w.value }, W.value, N.value, Z.value, Y.value, O.value, ae.value, U.value, $.value, e.class], style: [{ "--v-list-prepend-gap": de(e.prependGap) }, R.value, j.value, e.style], tabindex: e.tabindex ?? (x.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: fe, onKeydown: x.value && !g.value && Ae }), { default: () => {
      var _a3;
      return [ya(x.value || w.value, "v-list-item"), oe && b("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? p(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : b(ge, null, [e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), b("div", { class: "v-list-item__spacer" }, null)]), b("div", { class: "v-list-item__content", "data-no-activator": "" }, [he && p(Kh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Ie(e.title)];
      } }), L && p(Yh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Ie(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, ne.value)]), Q && b("div", { key: "append", class: "v-list-item__append" }, [a.append ? p(Be, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : b(ge, null, [e.appendIcon && p(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), b("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Lt, x.value && ye.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: S, isSelected: f, list: V, select: c, root: v, id: I, link: o };
} }), dV = z({ color: String, inset: Boolean, sticky: Boolean, title: String, ...pe(), ...Me() }, "VListSubheader"), lo = J()({ name: "VListSubheader", props: dV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color);
  return te(() => {
    const o = !!(n.default || e.title);
    return p(e.tag, { class: ee(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: ve([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && b("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), fV = z({ items: Array, returnObject: Boolean }, "VListChildren"), Xh = J()({ name: "VListChildren", props: fV(), setup(e, t) {
  let { slots: n } = t;
  return Oh(), () => {
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
      return o ? p(Go, K(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const m = K(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: m }) : p(xn, K(m, { index: l }), u);
      }, default: () => p(Xh, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : p(xn, K(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), Zh = z({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), vV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function _n(e, t) {
  const n = pt(t, e.itemTitle, t), a = pt(t, e.itemValue, n), l = pt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Fe(t, ["children"]) : t : void 0 : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  vV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Jh(e, l) : void 0, raw: t };
}
_n.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Jh(e, t) {
  const n = tn(e, _n.neededProps), a = [];
  for (const l of t) a.push(_n(n, l));
  return a;
}
function Mc(e) {
  const t = _(() => Jh(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = ie(/* @__PURE__ */ new Map()), l = ie([]);
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
const mV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function gV(e, t) {
  const n = Ea(t) ? t : pt(t, e.itemTitle), a = Ea(t) ? t : pt(t, e.itemValue, void 0), l = pt(t, e.itemChildren), o = e.itemProps === true ? Fe(t, ["children"]) : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  mV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Qh(e, l) : void 0, raw: t };
}
function Qh(e, t) {
  const n = [];
  for (const a of t) n.push(gV(e, a));
  return n;
}
function ey(e) {
  return { items: _(() => Qh(e, e.items)) };
}
const ty = z({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ce, collapseIcon: Ce, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...iV({ selectStrategy: "single-leaf", openStrategy: "list" }), ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...Zh(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VList"), Kl = J()({ name: "VList", props: ty(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = ey(e), { themeClasses: i } = qe(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { borderClasses: u } = Xt(e), { densityClasses: c } = Ft(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: m } = dt(e), { children: S, open: v, parents: y, select: h, getPath: k } = rV(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), w = B(() => e.baseColor), g = B(() => e.color), C = B(() => e.selectable || e.activatable), x = we(e, "navigationIndex", -1, (Y) => Y ?? -1), A = Mt();
  Oh({ filterable: e.filterable, trackingIndex: x, navigationStrategy: B(() => e.navigationStrategy), uid: A }), re(o, () => {
    e.navigationStrategy === "track" && (x.value = -1);
  }), mt({ VListGroup: { activeColor: V, baseColor: w, color: g, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: V, baseColor: w, color: g, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = ie(false), E = q();
  function D(Y) {
    P.value = true;
  }
  function M(Y) {
    P.value = false;
  }
  function T(Y) {
    var _a3;
    e.navigationStrategy === "track" ? ~x.value || (x.value = N("first")) : !P.value && !(Y.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(Y.relatedTarget))) && $();
  }
  function F() {
    e.navigationStrategy === "track" && (x.value = -1);
  }
  function W(Y) {
    switch (Y) {
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
  function N(Y) {
    const j = o.value.length;
    if (j === 0) return -1;
    let O;
    Y === "first" ? O = 0 : Y === "last" ? O = j - 1 : (O = x.value + (Y === "next" ? 1 : -1), O < 0 && (O = j - 1), O >= j && (O = 0));
    const U = O;
    let ae = 0;
    for (; ae < j; ) {
      const ye = o.value[O];
      if (ye && ye.type !== "divider" && ye.type !== "subheader") return O;
      if (O += Y === "next" || Y === "first" ? 1 : -1, O < 0 && (O = j - 1), O >= j && (O = 0), O === U) return -1;
      ae++;
    }
    return -1;
  }
  function Z(Y) {
    const j = Y.target;
    if (!E.value || j.tagName === "INPUT" && ["Home", "End"].includes(Y.key) || j.tagName === "TEXTAREA") return;
    const O = W(Y.key);
    if (O !== null) if (Y.preventDefault(), e.navigationStrategy === "track") {
      const U = N(O);
      U !== -1 && (x.value = U);
    } else $(O);
  }
  function R(Y) {
    P.value = true;
  }
  function $(Y) {
    if (E.value) return Qa(E.value, Y);
  }
  return te(() => {
    const Y = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), j = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return p(e.tag, { ref: E, class: ee(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, m.value, e.class]), style: ve([{ "--v-list-indent": de(Y), "--v-list-group-prepend": Y ? "0px" : void 0, "--v-list-prepend-gap": de(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && x.value >= 0 ? `v-list-item-${A}-${x.value}` : void 0, "aria-multiselectable": j, onFocusin: D, onFocusout: M, onFocus: T, onBlur: F, onKeydown: Z, onMousedown: R }, { default: () => [p(Xh, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: v, select: h, focus: $, children: S, parents: y, getPath: k, navigationIndex: x };
} }), hV = ga("v-list-img"), yV = z({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemAction"), Bc = J()({ name: "VListItemAction", props: yV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(e.tag, { class: ee(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ve(e.style) }, n)), {};
} }), bV = z({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemMedia"), pV = J()({ name: "VListItemMedia", props: bV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(e.tag, { class: ee(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ve(e.style) }, n)), {};
} });
function ps(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function SV(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function dv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return ps({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return ps({ x: l, y: o }, t);
  }
  return ps({ x: t.width / 2, y: t.height / 2 }, t);
}
const ny = { static: xV, connected: _V }, kV = z({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ny }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function wV(e, t) {
  const n = q({}), a = q();
  Je && $t(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    re(() => e.locationStrategy, r), bt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = ny[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function xV() {
}
function CV(e, t) {
  const n = uc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function _V(e, t, n) {
  (Array.isArray(e.target.value) || G0(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = sc(() => {
    const h = js(t.location, e.isRtl.value), k = t.origin === "overlap" ? h : t.origin === "auto" ? ds(h) : js(t.origin, e.isRtl.value);
    return h.side === k.side && h.align === fs(k).align ? { preferredAnchor: Pf(h), preferredOrigin: Pf(k) } : { preferredAnchor: h, preferredOrigin: k };
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
  const m = new Dg(4), S = new ResizeObserver(() => {
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
  re(e.target, (h, k) => {
    k && !Array.isArray(k) && S.unobserve(k), Array.isArray(h) ? Dt(h, k) || y() : h && S.observe(h);
  }, { immediate: true }), re(e.contentEl, (h, k) => {
    k && S.unobserve(k), h && S.observe(h);
  }, { immediate: true }), bt(() => {
    S.disconnect();
  });
  function y() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (v = $g(e.target.value));
    const h = CV(e.contentEl.value, e.isRtl.value), k = qi(e.contentEl.value), I = Number(t.viewportMargin);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = k.reduce((M, T) => {
      const F = v0(T);
      return M ? new kn({ x: Math.max(M.left, F.left), y: Math.max(M.top, F.top), width: Math.min(M.right, F.right) - Math.max(M.left, F.left), height: Math.min(M.bottom, F.bottom) - Math.max(M.top, F.top) }) : F;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, v.x), V.y += Math.min(I, v.y), V.width = Math.max(V.width - I * 2, v.x + v.width - I), V.height = Math.max(V.height - I * 2, v.y + v.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let w = { anchor: l.value, origin: o.value };
    function g(M) {
      const T = new kn(h), F = dv(M.anchor, v), W = dv(M.origin, T);
      let { x: N, y: Z } = SV(F, W);
      switch (M.anchor.side) {
        case "top":
          Z -= c.value[0];
          break;
        case "bottom":
          Z += c.value[0];
          break;
        case "left":
          N -= c.value[0];
          break;
        case "right":
          N += c.value[0];
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
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
          break;
      }
      return T.x += N, T.y += Z, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), { overflows: Tf(T, V), x: N, y: Z };
    }
    let C = 0, x = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: T, overflows: F } = g(w);
      C += M, x += T, h.x += M, h.y += T;
      {
        const W = Af(w.anchor), N = F.x.before || F.x.after, Z = F.y.before || F.y.after;
        let R = false;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && N && !P.x || $ === "y" && Z && !P.y) {
            const Y = { anchor: { ...w.anchor }, origin: { ...w.origin } }, j = $ === "x" ? W === "y" ? fs : ds : W === "y" ? ds : fs;
            Y.anchor = j(Y.anchor), Y.origin = j(Y.origin);
            const { overflows: O } = g(Y);
            (O[$].before <= F[$].before && O[$].after <= F[$].after || O[$].before + O[$].after < (F[$].before + F[$].after) / 2) && (w = Y, R = P[$] = true);
          }
        }), R) continue;
      }
      F.x.before && (C += F.x.before, h.x += F.x.before), F.x.after && (C -= F.x.after, h.x -= F.x.after), F.y.before && (x += F.y.before, h.y += F.y.before), F.y.after && (x -= F.y.after, h.y -= F.y.after);
      {
        const W = Tf(h, V);
        A.x = V.width - W.x.before - W.x.after, A.y = V.height - W.y.before - W.y.after, C += W.x.before, h.x += W.x.before, x += W.y.before, h.y += W.y.before;
      }
      break;
    }
    const D = Af(w.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`, transformOrigin: `${w.origin.side} ${w.origin.align}`, top: de(Ss(x)), left: e.isRtl.value ? void 0 : de(Ss(C)), right: e.isRtl.value ? de(Ss(-C)) : void 0, minWidth: de(D === "y" ? Math.min(i.value, v.width) : i.value), maxWidth: de(fv(Ze(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: de(fv(Ze(A.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: A, contentBox: h, flipped: P };
  }
  return re(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ee(() => {
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
function Ss(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function fv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let iu = true;
const er = [];
function VV(e) {
  !iu || er.length ? (er.push(e), ru()) : (iu = false, e(), ru());
}
let vv = -1;
function ru() {
  cancelAnimationFrame(vv), vv = requestAnimationFrame(() => {
    const e = er.shift();
    e && e(), er.length ? ru() : iu = true;
  });
}
const ay = { none: null, close: AV, block: TV, reposition: DV }, IV = z({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ay } }, "VOverlay-scroll-strategies");
function PV(e, t) {
  if (!Je) return;
  let n;
  ct(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Nl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = ay[e.scrollStrategy]) == null ? void 0 : _a3.call(ay, t, e, n);
    }));
  }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function AV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  ly($c(e.target.value, e.contentEl.value), t);
}
function TV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = $c(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...qi(a, t.contained ? n : void 0), ...qi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => vc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", de(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", de(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", de(o)), r.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function DV(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    VV(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      ly($c(e.target.value, e.contentEl.value), (r) => {
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
function $c(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function ly(e, t) {
  const n = [document, ...qi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), bt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const su = Symbol.for("vuetify:v-menu"), Lc = z({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Fc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = r0(u, () => {
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
const EV = z({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Lc() }, "VOverlay-activator");
function MV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = St("useActivator"), i = q();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: m } = Fc(e, (x) => {
    x === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== x && (u = true), n.value = x);
  }), S = q(), v = { onClick: (x) => {
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
      const A = We(su, null);
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
  re(a, (x) => {
    var _a3;
    x && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), re(n, (x) => {
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
  const V = $o(), w = _(() => e.target === "cursor" && S.value ? S.value : V.value ? V.el : oy(e.target, o) || i.value), g = _(() => Array.isArray(w.value) ? void 0 : w.value);
  let C;
  return re(() => !!e.activator, (x) => {
    x && Je ? (C = Nl(), C.run(() => {
      BV(e, o, { activatorEl: i, activatorEvents: y });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), bt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: w, targetEl: g, targetRef: V, activatorEvents: y, contentEvents: h, scrimEvents: k };
}
function BV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  re(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Ee(() => o());
  }, { immediate: true }), re(() => e.activatorProps, () => {
    o();
  }), bt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && m0(s, K(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && g0(s, K(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = oy(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function oy(e, t) {
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
const iy = z({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Bi = /* @__PURE__ */ new Map();
let mv = 0;
function gv(e) {
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
function ry(e, t) {
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
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Je && (re(() => e.retainFocus, (m) => {
    m ? Bi.set(i, { isActive: n, contentEl: o }) : Bi.delete(i);
  }, { immediate: true }), re(f, (m) => {
    m ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), mv++ < 1 && document.addEventListener("keydown", gv)), bt(() => {
    Bi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --mv < 1 && document.removeEventListener("keydown", gv);
  });
}
function sy() {
  if (!Je) return ie(false);
  const { ssr: e } = on();
  if (e) {
    const t = ie(false);
    return Ct(() => {
      t.value = true;
    }), t;
  } else return ie(true);
}
const Rc = z({ eager: Boolean }, "lazy");
function Oc(e, t) {
  const n = ie(false), a = B(() => n.value || e.eager || t.value);
  re(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function kl() {
  const t = St("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const hv = Symbol.for("vuetify:stack"), uo = Tt([]);
function $V(e, t, n) {
  const a = St("useStack"), l = !n, o = We(hv, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  rt(hv, i);
  const r = ie(Number(nt(t)));
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
  const s = ie(true);
  return l && ct(() => {
    var _a3;
    const c = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: al(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function LV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !Je) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function FV() {
  return true;
}
function uy(e, t, n) {
  if (!e || cy(e, n) === false) return false;
  const a = Ug(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function cy(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || FV)(e);
}
function RV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && uy(e, t, n) && setTimeout(() => {
    cy(e, n) && a && a(e);
  }, 0);
}
function yv(e, t) {
  const n = Ug(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const uu = { mounted(e, t) {
  const n = (l) => RV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = uy(l, e, t);
  };
  yv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (yv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function OV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return p(Da, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && b("div", K({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = z({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...EV(), ...pe(), ...kt(), ...Rc(), ...kV(), ...IV(), ...iy(), ...Ue(), ...ha() }, "VOverlay"), Un = J()({ name: "VOverlay", directives: { vClickOutside: uu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Fe(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = St("VOverlay"), i = q(), r = q(), s = q(), u = we(e, "modelValue"), c = _({ get: () => u.value, set: (ne) => {
    ne && e.disabled || (u.value = ne);
  } }), { themeClasses: d } = qe(e), { rtlClasses: f, isRtl: m } = _t(), { hasContent: S, onAfterLeave: v } = Oc(e, c), y = Xe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: k, stackStyles: I } = $V(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: w, target: g, targetEl: C, targetRef: x, activatorEvents: A, contentEvents: P, scrimEvents: E } = MV(e, { isActive: c, isTop: k, contentEl: s }), { teleportTarget: D } = LV(() => {
    var _a3, _b2, _c2;
    const ne = e.attach || e.contained;
    if (ne) return ne;
    const fe = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: M } = wt(e), T = sy(), { scopeId: F } = kl();
  re(() => e.disabled, (ne) => {
    ne && (c.value = false);
  });
  const { contentStyles: W, updateLocation: N } = wV(e, { isRtl: m, contentEl: s, target: g, isActive: c });
  PV(e, { root: i, contentEl: s, targetEl: C, target: g, isActive: c, updateLocation: N });
  function Z(ne) {
    l("click:outside", ne), e.persistent ? U() : c.value = false;
  }
  function R(ne) {
    return c.value && k.value && (!e.scrim || ne.target === r.value || ne instanceof MouseEvent && ne.shadowTarget === r.value);
  }
  ry(e, { isActive: c, localTop: k, contentEl: s, activatorEl: V }), Je && re(c, (ne) => {
    ne ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
  }, { immediate: true }), Ht(() => {
    Je && window.removeEventListener("keydown", $);
  });
  function $(ne) {
    var _a3, _b2, _c2;
    ne.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", ne), e.persistent ? U() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function Y(ne) {
    ne.key === "Escape" && !h.value || l("keydown", ne);
  }
  const j = bh();
  $t(() => e.closeOnBack, () => {
    p_(j, (ne) => {
      h.value && c.value ? (ne(false), e.persistent ? U() : c.value = false) : ne();
    });
  });
  const O = q();
  re(() => c.value && (e.absolute || e.contained) && D.value == null, (ne) => {
    if (ne) {
      const fe = pr(i.value);
      fe && fe !== document.scrollingElement && (O.value = fe.scrollTop);
    }
  });
  function U() {
    e.noClickAnimation || s.value && aa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Lo });
  }
  function ae() {
    l("afterEnter");
  }
  function ye() {
    v(), l("afterLeave");
  }
  return te(() => {
    var _a3;
    return b(ge, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: x, props: K({ ref: w }, A.value, e.activatorProps) }), T.value && S.value && p(yS, { disabled: !D.value, to: D.value }, { default: () => [b("div", K({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: de(O.value) }, e.style], ref: i, onKeydown: Y }, F, a), [p(OV, K({ color: y, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), p(Kt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: ae, onAfterLeave: ye }, { default: () => {
      var _a4;
      return [at(b("div", K({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, W.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Mn, c.value], [uu, { handler: Z, closeConditional: R, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: U, contentEl: s, rootEl: i, globalTop: h, localTop: k, updateLocation: N };
} }), dy = z({ id: String, submenu: Boolean, ...Fe(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: xr } }), ["absolute"]) }, "VMenu"), ql = J()({ name: "VMenu", props: dy(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), { isRtl: o } = _t(), i = Mt(), r = B(() => e.id || `v-menu-${i}`), s = q(), u = We(su, null), c = ie(/* @__PURE__ */ new Set());
  rt(su, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(v) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (v == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !s0(v, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Ht(() => u == null ? void 0 : u.unregister()), qu(() => a.value = false), re(a, (v) => {
    v ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(v) {
    u == null ? void 0 : u.closeParents(v);
  }
  function f(v) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (v.key === "Tab" || v.key === "Enter" && !e.closeOnContentClick) {
      if (v.key === "Enter" && (v.target instanceof HTMLTextAreaElement || v.target instanceof HTMLInputElement && v.target.closest("form"))) return;
      v.key === "Enter" && v.preventDefault(), !Mg(Pa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), v.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && v.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function m(v) {
    var _a3;
    if (e.disabled) return;
    const y = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    y && a.value ? v.key === "ArrowDown" ? (v.preventDefault(), v.stopImmediatePropagation(), Qa(y, "next")) : v.key === "ArrowUp" ? (v.preventDefault(), v.stopImmediatePropagation(), Qa(y, "prev")) : e.submenu && (v.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : v.key === (o.value ? "ArrowLeft" : "ArrowRight") && (v.preventDefault(), Qa(y, "first"))) : (e.submenu ? v.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(v.key)) && (a.value = true, v.preventDefault(), setTimeout(() => setTimeout(() => m(v))));
  }
  const S = _(() => K({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: m }, e.activatorProps));
  return te(() => {
    const v = Un.filterProps(e);
    return p(Un, K({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, v, { modelValue: a.value, "onUpdate:modelValue": (y) => a.value = y, absolute: true, activatorProps: S.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var y = arguments.length, h = new Array(y), k = 0; k < y; k++) h[k] = arguments[k];
      return p(Be, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Pt({ id: r, \u03A8openChildren: c }, s);
} }), Nc = z({ color: String, ...zt(), ...pe(), ...kt(), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VSheet"), La = J()({ name: "VSheet", props: Nc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { borderClasses: i } = Xt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: u } = Oa(e), { positionClasses: c } = to(e), { roundedClasses: d } = dt(e);
  return te(() => p(e.tag, { class: ee(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: ve([o.value, r.value, u.value, e.style]) }, n)), {};
} }), NV = z({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...pe(), ...ha({ transition: { component: xc } }) }, "VCounter"), Ar = J()({ name: "VCounter", functional: true, props: NV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => p(Kt, { transition: e.transition }, { default: () => [at(b("div", { class: ee(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ve(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Mn, e.active]])] })), {};
} }), HV = z({ floating: Boolean, ...pe() }, "VFieldLabel"), mo = J()({ name: "VFieldLabel", props: HV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(no, { class: ee(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ve(e.style) }, n)), {};
} }), zV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = z({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => zV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...pe(), ...Vr(), ...it(), ...Ue() }, "VField"), Fa = J()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = qe(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = pa(e), { InputIcon: d } = di(e), { roundedClasses: f } = dt(e), { rtlClasses: m } = _t(), S = B(() => e.dirty || e.active), v = B(() => !!(e.label || l.label)), y = B(() => !e.singleLine && v.value), h = Mt(), k = _(() => e.id || `input-${h}`), I = B(() => e.details ? `${k.value}-messages` : void 0), V = q(), w = q(), g = q(), C = _(() => ["plain", "underlined"].includes(e.variant)), x = _(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), A = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? x.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = Xe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Et(x);
  re(S, (Z) => {
    if (y.value && !Wn()) {
      const R = V.value.$el, $ = w.value.$el;
      requestAnimationFrame(() => {
        const Y = uc(R), j = $.getBoundingClientRect(), O = j.x - Y.x, U = j.y - Y.y - (Y.height / 2 - j.height / 2), ae = j.width / 0.75, ye = Math.abs(ae - Y.width) > 1 ? { maxWidth: de(ae) } : void 0, ne = getComputedStyle(R), fe = getComputedStyle($), Ae = parseFloat(ne.transitionDuration) * 1e3 || 150, xe = parseFloat(fe.getPropertyValue("--v-field-label-scale")), he = fe.getPropertyValue("color");
        R.style.visibility = "visible", $.style.visibility = "hidden", aa(R, { transform: `translate(${O}px, ${U}px) scale(${xe})`, color: he, ...ye }, { duration: Ae, easing: Lo, direction: Z ? "normal" : "reverse" }).finished.then(() => {
          R.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = _(() => ({ isActive: S, isFocused: s, controlRef: g, iconColor: A, blur: c, focus: u })), F = B(() => {
    const Z = !S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : k.value };
  }), W = B(() => {
    const Z = y.value && S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : k.value };
  });
  function N(Z) {
    Z.target !== document.activeElement && Z.preventDefault();
  }
  return te(() => {
    var _a3;
    const Z = e.variant === "outlined", R = !!(l["prepend-inner"] || e.prependInnerIcon), $ = !!(e.clearable || l.clear) && !e.disabled, Y = !!(l["append-inner"] || e.appendInnerIcon || $), j = () => l.label ? l.label({ ...T.value, label: e.label, props: { for: k.value } }) : e.label;
    return b("div", K({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": Y, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": R, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !j(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, m.value, e.class], style: [E.value, e.style], onClick: N }, n), [b("div", { class: "v-field__overlay" }, null), p(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), R && b("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && p(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), b("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && p(mo, K({ key: "floating-label", ref: w, class: [D.value], floating: true }, F.value, { style: M.value }), { default: () => [j()] }), v.value && p(mo, K({ key: "label", ref: V, id: e.labelId }, W.value), { default: () => [j()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: k.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? b("div", { id: k.value, class: "v-field__input", "aria-describedby": I.value }, null)]), $ && p(Cc, { key: "clear" }, { default: () => [at(b("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [p(Be, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : p(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Mn, e.dirty]])] }), Y && b("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && p(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), b("div", { class: ee(["v-field__outline", D.value]), style: ve(M.value) }, [Z && b(ge, null, [b("div", { class: "v-field__outline__start" }, null), y.value && b("div", { class: "v-field__outline__notch" }, [p(mo, K({ ref: w, floating: true }, F.value), { default: () => [j()] })]), b("div", { class: "v-field__outline__end" }, null)]), C.value && y.value && p(mo, K({ ref: w, floating: true }, F.value), { default: () => [j()] })])]);
  }), { controlRef: g, fieldIconColor: A };
} }), fy = z({ autocomplete: String }, "autocomplete");
function Hc(e) {
  const t = Mt(), n = ie(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function vy(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const WV = ["color", "file", "time", "date", "datetime-local", "week", "month"], gi = z({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...fy(), ...Fe(Sa(), ["direction"]), ...mi() }, "VTextField"), Gn = J()({ name: "VTextField", directives: { vIntersect: Dn }, inheritAttrs: false, props: gi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = vy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), m = q(), S = q(), v = q(), y = Hc(e), h = _(() => WV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
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
  return te(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), x = !!(C || l.details), [A, P] = qn(n), { modelValue: E, ...D } = Nt.filterProps(e), M = Fa.filterProps(e);
    return p(Nt, K({ ref: m, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: F, isDisabled: W, isDirty: N, isReadonly: Z, isValid: R, hasDetails: $, reset: Y } = T;
      return p(Fa, K({ ref: S, onMousedown: I, onClick: V, "onClick:clear": (j) => w(j, Y), role: e.role }, Fe(M, ["onClick:clear"]), { id: F.value, labelId: `${F.value}-label`, active: h.value || N.value, dirty: N.value || e.dirty, disabled: W.value, focused: i.value, details: $.value, error: R.value === false }), { ...l, default: (j) => {
        let { props: { class: O, ...U }, controlRef: ae } = j;
        const ye = b("input", K({ ref: (ne) => v.value = ae.value = ne, value: o.value, onInput: g, autofocus: e.autofocus, readonly: Z.value, disabled: W.value, name: y.fieldName.value, autocomplete: y.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${F.value}-label` }, U, P), null);
        return b(ge, null, [e.prefix && b("span", { class: "v-text-field__prefix" }, [b("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), at(l.default ? b("div", { class: ee(O), "data-no-activator": "" }, [l.default({ id: F }), ye]) : ca(ye, { class: O }), [[Dn, u, null, { once: true }]]), e.suffix && b("span", { class: "v-text-field__suffix" }, [b("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (T) => {
      var _a3;
      return b(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && b(ge, null, [b("span", null, null), p(Ar, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, m, S, v);
} }), jV = z({ renderless: Boolean, ...pe() }, "VVirtualScrollItem"), my = J()({ name: "VVirtualScrollItem", inheritAttrs: false, props: jV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = wn(void 0, "border");
  re(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), te(() => {
    var _a3, _b2;
    return e.renderless ? b(ge, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : b("div", K({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), UV = -1, GV = 1, ks = 100, gy = z({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function hy(e, t) {
  const n = on(), a = ie(0);
  ct(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ie(0), o = ie(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = ie(0), r = ie(0), s = q(), u = q();
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
  const h = ie(0);
  let k = -1;
  function I($) {
    return v[$] || a.value;
  }
  const V = Ag(() => {
    const $ = performance.now();
    y[0] = 0;
    const Y = t.value.length;
    for (let j = 1; j <= Y; j++) y[j] = (y[j - 1] || 0) + I(j - 1);
    h.value = Math.max(h.value, performance.now() - $);
  }, h), w = re(S, ($) => {
    $ && (w(), c = u.value.offsetTop, V.immediate(), W(), ~k && Ee(() => {
      Je && window.requestAnimationFrame(() => {
        Z(k), k = -1;
      });
    }));
  });
  bt(() => {
    V.clear();
  });
  function g($, Y) {
    const j = v[$], O = a.value;
    a.value = O ? Math.min(a.value, Y) : Y, (j !== Y || O !== a.value) && (v[$] = Y, V());
  }
  function C($) {
    $ = Ze($, 0, t.value.length);
    const Y = Math.floor($), j = $ % 1, O = Y + 1, U = y[Y] || 0, ae = y[O] || U;
    return U + (ae - U) * j;
  }
  function x($) {
    return YV(y, $);
  }
  let A = 0, P = 0, E = 0;
  re(m, ($, Y) => {
    W(), $ < Y && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !u.value) return;
    const $ = s.value.scrollTop, Y = performance.now();
    Y - E > 500 ? (P = Math.sign($ - A), c = u.value.offsetTop) : P = $ - A, A = $, E = Y, window.clearTimeout(D), D = window.setTimeout(T, 500), W();
  }
  function T() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(D), W());
  }
  let F = -1;
  function W() {
    cancelAnimationFrame(F), F = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !m.value || !a.value) return;
    const $ = A - c, Y = Math.sign(P), j = Math.max(0, $ - ks), O = Ze(x(j), 0, t.value.length), U = $ + m.value + ks, ae = Ze(x(U) + 1, O + 1, t.value.length);
    if ((Y !== UV || O < l.value) && (Y !== GV || ae > o.value)) {
      const ye = C(l.value) - C(O), ne = C(ae) - C(o.value);
      Math.max(ye, ne) > ks ? (l.value = O, o.value = ae) : (O <= 0 && (l.value = O), ae >= t.value.length && (o.value = ae));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Z($) {
    const Y = C($);
    !s.value || $ && !Y ? k = $ : s.value.scrollTop = Y;
  }
  const R = _(() => t.value.slice(l.value, o.value).map(($, Y) => {
    const j = Y + l.value;
    return { raw: $, index: j, key: pt($, e.itemKey, j) };
  }));
  return re(t, () => {
    v = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length }), V.immediate(), W();
  }, { deep: 1 }), { calculateVisibleItems: W, containerRef: s, markerRef: u, computedItems: R, paddingTop: i, paddingBottom: r, scrollToIndex: Z, handleScroll: M, handleScrollend: T, handleItemResize: g };
}
function YV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const KV = z({ items: { type: Array, default: () => [] }, renderless: Boolean, ...gy(), ...pe(), ...kt() }, "VVirtualScroll"), Tr = J()({ name: "VVirtualScroll", props: KV(), setup(e, t) {
  let { slots: n } = t;
  const a = St("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: m, computedItems: S } = hy(e, B(() => e.items));
  return $t(() => e.renderless, () => {
    function v() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    Ct(() => {
      i.value = pr(a.vnode.el, true), v(true);
    }), bt(v);
  }), te(() => {
    const v = S.value.map((y) => p(my, { key: y.key, renderless: e.renderless, "onUpdate:height": (h) => c(y.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: y.raw, index: y.index, ...h });
    } }));
    return e.renderless ? b(ge, null, [b("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: de(f.value) } }, null), v, b("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: de(m.value) } }, null)]) : b("div", { ref: i, class: ee(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: ve([l.value, e.style]) }, [b("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: de(f.value), paddingBottom: de(m.value) } }, [v])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function zc(e, t) {
  const n = ie(false);
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
        const s = re(n, () => {
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
function Wc(e) {
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
const qV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function ws(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const wl = z({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function XV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? qV, o = (n == null ? void 0 : n.filterKeys) ? ot(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
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
          if (m = V ? V(I, t, u) : l(I, t, u), m !== -1 && m !== false) V ? d[k] = ws(m, t) : f[k] = ws(m, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else m = l(u, t, u), m !== -1 && m !== false && (f.title = ws(m, t));
      const v = Object.keys(f).length, y = Object.keys(d).length;
      if (!v && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== i && !v || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== i || !v && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function xl(e, t, n, a) {
  const l = ie([]), o = ie(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Re(t).map((s) => [s, a.transform(s)]) : Re(t));
  ct(() => {
    const s = typeof n == "function" ? n() : Re(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = XV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Re(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Re(t), f = [], m = /* @__PURE__ */ new Map();
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
function jc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [b("span", { class: ee(`${e}__unmask`) }, [t.slice(o, a[0])]), b("span", { class: ee(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(b("span", { class: ee(`${e}__unmask`) }, [t.slice(a[1])])), b(ge, null, [i]);
  });
}
const ZV = z({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Uc(e, t) {
  const n = Mt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => nt(t)), ariaControls: B(() => a.value) };
}
const Gc = z({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...ZV(), ...Zh({ itemChildren: false }) }, "Select"), JV = z({ search: String, ...wl({ filterKeys: ["title"] }), ...Gc(), ...Fe(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ha({ transition: { component: xr } }) }, "VSelect"), Yc = J()({ name: "VSelect", props: JV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = q(), o = q(), i = q(), r = q(), s = q(), { items: u, transformIn: c, transformOut: d } = Mc(e), f = we(e, "search", ""), { filteredItems: m, getMatches: S } = xl(e, u, () => f.value), v = we(e, "modelValue", [], (he) => c(he === null ? [null] : ot(he)), (he) => {
    const L = d(he);
    return e.multiple ? L : L[0] ?? null;
  }), y = _(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), h = ao(e), k = Hc(e), I = _(() => v.value.map((he) => he.value)), V = ie(false), w = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = di(e);
  let C = "", x = 0, A;
  const P = _(() => {
    const he = f.value ? m.value : u.value;
    return e.hideSelected ? he.filter((L) => !v.value.some((H) => (e.valueComparator || Dt)(H, L))) : he;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = we(e, "menu"), M = _({ get: () => D.value, set: (he) => {
    var _a3;
    D.value && !he && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || he && E.value || (D.value = he);
  } }), { menuId: T, ariaExpanded: F, ariaControls: W } = Uc(e, M), N = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Z = q(), R = zc(Z, l), { onTabKeydown: $ } = Wc({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Z, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function Y(he) {
    e.openOnClear && (M.value = true);
  }
  function j() {
    E.value || (M.value = !M.value);
  }
  function O(he) {
    var _a3;
    he.key === "Tab" && $(he), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(he.target)) && jl(he) && U(he);
  }
  function U(he) {
    var _a3, _b2, _c2;
    if (!he.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(he.key) && he.preventDefault(), ["Enter", "ArrowDown", " "].includes(he.key) && (M.value = true), ["Escape", "Tab"].includes(he.key) && (M.value = false), e.clearable && he.key === "Backspace") {
      he.preventDefault(), v.value = [], Y();
      return;
    }
    he.key === "Home" ? (_a3 = Z.value) == null ? void 0 : _a3.focus("first") : he.key === "End" && ((_b2 = Z.value) == null ? void 0 : _b2.focus("last"));
    const L = 1e3;
    if (!jl(he)) return;
    const H = performance.now();
    H - A > L && (C = "", x = 0), C += he.key.toLowerCase(), A = H;
    const Q = P.value;
    function ue() {
      let G = oe();
      return G || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), x++, G = oe(), G) || (x = 0, G = oe(), G) ? G : (C = he.key.toLowerCase(), oe());
    }
    function oe() {
      for (let G = x; G < Q.length; G++) {
        const le = Q[G];
        if (le.title.toLowerCase().startsWith(C)) return [le, G];
      }
    }
    const se = ue();
    if (!se) return;
    const [be, ce] = se;
    x = ce, (_c2 = Z.value) == null ? void 0 : _c2.focus(ce), e.multiple || (v.value = [be]);
  }
  function ae(he) {
    let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!he.props.disabled) if (e.multiple) {
      const H = v.value.findIndex((ue) => (e.valueComparator || Dt)(ue.value, he.value)), Q = L ?? !~H;
      if (~H) {
        const ue = Q ? [...v.value, he] : [...v.value];
        ue.splice(H, 1), v.value = ue;
      } else Q && (v.value = [...v.value, he]);
    } else {
      const H = L !== false;
      v.value = H ? [he] : [], Ee(() => {
        M.value = false;
      });
    }
  }
  function ye(he) {
    var _a3;
    const L = he.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(L)) || (M.value = false);
  }
  function ne() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function fe() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Ae(he) {
    V.value = true;
  }
  function xe(he) {
    if (he == null) v.value = [];
    else if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const L = u.value.find((H) => H.title === he);
      L && ae(L);
    } else l.value && (l.value.value = "");
  }
  return re(M, () => {
    if (!e.hideSelected && M.value && v.value.length) {
      const he = P.value.findIndex((L) => v.value.some((H) => (e.valueComparator || Dt)(H.value, L.value)));
      Je && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        he >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(he));
      });
    }
  }), re(u, (he, L) => {
    M.value || V.value && e.hideNoData && !L.length && he.length && (M.value = true);
  }), te(() => {
    const he = !!(e.chips || n.chip), L = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), H = v.value.length > 0, Q = Gn.filterProps(e), ue = H || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: m.value };
    return p(Gn, K({ ref: l }, Q, { modelValue: v.value.map((se) => se.props.title).join(", "), name: void 0, "onUpdate:modelValue": xe, focused: V.value, "onUpdate:focused": (se) => V.value = se, validationValue: v.externalValue, counterValue: y.value, dirty: H, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": v.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: ue, "onClick:clear": Y, "onMousedown:control": j, onBlur: ye, onKeydown: U, "aria-expanded": F.value, "aria-controls": W.value }), { ...n, default: (se) => {
      let { id: be } = se;
      return b(ge, null, [b("select", { hidden: true, multiple: e.multiple, name: k.fieldName.value }, [u.value.map((ce) => b("option", { key: ce.value, value: ce.value, selected: I.value.includes(ce.value) }, null))]), p(ql, K({ id: T.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (ce) => M.value = ce, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: ne, onAfterLeave: fe }, N.value), { default: () => [p(La, { onFocusin: Ae, onKeydown: O }, { default: () => [n["menu-header"] && b("header", { ref: i }, [n["menu-header"](oe)]), L && p(Kl, K({ key: "select-list", ref: Z, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${be.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, R, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: a(e.noDataText) }, null)), p(Tr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (ce) => {
          var _a4, _b3, _c3;
          let { item: G, index: le, itemRef: _e } = ce;
          const X = c0(G.props), me = K(G.props, { ref: _e, key: G.value, onClick: () => ae(G, null), "aria-posinset": le + 1, "aria-setsize": P.value.length });
          return G.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: G.raw, index: le })) ?? p(mn, K(G.props, { key: `divider-${le}` }), null) : G.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: G.raw, index: le })) ?? p(lo, K(G.props, { key: `subheader-${le}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: G, index: le, props: me })) ?? p(xn, K(me, { role: "option" }), { prepend: (Se) => {
            let { isSelected: ke } = Se;
            return b(ge, null, [e.multiple && !e.hideSelected ? p(En, { key: G.value, modelValue: ke, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ve) => Ve.preventDefault() }, null) : void 0, X.prependAvatar && p(hn, { image: X.prependAvatar }, null), X.prependIcon && p(Ye, { icon: X.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? jc("v-select", G.title, (_a5 = S(G)) == null ? void 0 : _a5.title) : G.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && b("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), v.value.map((ce, G) => {
        function le(Se) {
          Se.stopPropagation(), Se.preventDefault(), ae(ce, false);
        }
        const _e = K(fa.filterProps(ce.props), { "onClick:close": le, onKeydown(Se) {
          Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), le(Se));
        }, onMousedown(Se) {
          Se.preventDefault(), Se.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), X = he ? !!n.chip : !!n.selection, me = X ? br(he ? n.chip({ item: ce, index: G, props: _e }) : n.selection({ item: ce, index: G })) : void 0;
        if (!(X && !me)) return b("div", { key: ce.value, class: "v-select__selection" }, [he ? n.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: ce.title } } }, { default: () => [me] }) : p(fa, K({ key: "chip", closable: w.value, size: "small", text: ce.title, disabled: ce.props.disabled }, _e), null) : me ?? b("span", { class: "v-select__selection-text" }, [ce.title, e.multiple && G < v.value.length - 1 && b("span", { class: "v-select__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var se = arguments.length, be = new Array(se), ce = 0; ce < se; ce++) be[ce] = arguments[ce];
      return b(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...be), e.menuIcon ? p(Ye, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && p(g, { key: "append-icon", name: "appendInner", color: be[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: V, menu: M, search: f, filteredItems: m, select: ae }, l);
} }), QV = z({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...Gc(), ...Fe(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), eI = J()({ name: "VAutocomplete", props: QV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = q(), o = ie(false), i = ie(true), r = ie(false), s = q(), u = q(), c = ie(-1), d = ie(null), { items: f, transformIn: m, transformOut: S } = Mc(e), { textColorClasses: v, textColorStyles: y } = Et(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), k = we(e, "search", ""), I = we(e, "modelValue", [], (G) => m(G === null ? [null] : ot(G)), (G) => {
    const le = S(G);
    return e.multiple ? le : le[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), w = ao(e), { filteredItems: g, getMatches: C } = xl(e, f, () => d.value ?? (i.value ? "" : k.value)), x = _(() => e.hideSelected && d.value === null ? g.value.filter((G) => !I.value.some((le) => le.value === G.value)) : g.value), A = B(() => e.closableChips && !w.isReadonly.value && !w.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), D = _(() => I.value.map((G) => G.props.value)), M = _(() => x.value.find((G) => G.type === "item" && !G.props.disabled)), T = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && k.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && x.value.length > 0 && !i.value && !r.value;
  }), F = _(() => e.hideNoData && !x.value.length || w.isReadonly.value || w.isDisabled.value), W = we(e, "menu"), N = _({ get: () => W.value, set: (G) => {
    var _a3;
    W.value && !G && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || G && F.value || (W.value = G);
  } }), { menuId: Z, ariaExpanded: R, ariaControls: $ } = Uc(e, N), Y = q(), j = q(), O = q(), U = zc(Y, l), { onTabKeydown: ae } = Wc({ groups: [{ type: "element", contentRef: j }, { type: "list", contentRef: Y, displayItemsCount: () => x.value.length }, { type: "element", contentRef: O }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function ye(G) {
    e.openOnClear && (N.value = true), k.value = "";
  }
  function ne() {
    F.value || (N.value = true);
  }
  function fe(G) {
    F.value || (o.value && (G.preventDefault(), G.stopPropagation()), N.value = !N.value);
  }
  function Ae(G) {
    var _a3, _b2;
    G.key === "Tab" && ae(G), ((_a3 = Y.value) == null ? void 0 : _a3.$el.contains(G.target)) && (jl(G) || G.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function xe(G) {
    var _a3, _b2, _c2, _d2, _e2;
    if (w.isReadonly.value) return;
    const le = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, _e = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(G.key) && G.preventDefault(), ["Enter", "ArrowDown"].includes(G.key) && (N.value = true), ["Escape"].includes(G.key) && (N.value = false), T.value && ["Enter", "Tab"].includes(G.key) && M.value && !I.value.some((X) => {
      let { value: me } = X;
      return me === M.value.value;
    }) && ce(M.value), G.key === "ArrowDown" && T.value && ((_b2 = Y.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(G.key)) {
      if (!e.multiple && E.value && I.value.length > 0 && !k.value) return ce(I.value[0], false);
      if (~c.value) {
        G.preventDefault();
        const X = c.value;
        ce(I.value[c.value], false), c.value = X >= _e - 1 ? _e - 2 : X;
      } else G.key === "Backspace" && !k.value && (c.value = _e - 1);
      return;
    }
    if (e.multiple) if (G.key === "ArrowLeft") {
      if (c.value < 0 && le && le > 0) return;
      const X = c.value > -1 ? c.value - 1 : _e - 1;
      if (I.value[X]) c.value = X;
      else {
        const me = ((_c2 = k.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(me, me);
      }
    } else if (G.key === "ArrowRight") {
      if (c.value < 0) return;
      const X = c.value + 1;
      I.value[X] ? c.value = X : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && jl(G) && (c.value = -1);
  }
  function he(G) {
    if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const le = f.value.find((_e) => _e.title === G.target.value);
      le && ce(le);
    }
  }
  function L() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function H() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function Q(G) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function ue(G) {
    r.value = false;
  }
  function oe(G) {
    (G == null || G === "" && !e.multiple && !E.value) && (I.value = []);
  }
  function se(G) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(G.relatedTarget)) && (o.value = true);
  }
  const be = ie(false);
  function ce(G) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!G || G.props.disabled)) if (e.multiple) {
      const _e = I.value.findIndex((me) => (e.valueComparator || Dt)(me.value, G.value)), X = le ?? !~_e;
      if (~_e) {
        const me = X ? [...I.value, G] : [...I.value];
        me.splice(_e, 1), I.value = me;
      } else X && (I.value = [...I.value, G]);
      e.clearOnSelect && (k.value = "");
    } else {
      const _e = le !== false;
      I.value = _e ? [G] : [], d.value = i.value ? "" : k.value ?? "", k.value = _e && !E.value ? G.title : "", Ee(() => {
        N.value = false, i.value = true;
      });
    }
  }
  return re(o, (G, le) => {
    var _a3;
    G !== le && (G ? (be.value = true, k.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ee(() => be.value = false)) : (!e.multiple && k.value == null && (I.value = []), N.value = false, !i.value && k.value && (d.value = k.value), k.value = "", c.value = -1));
  }), re(k, (G) => {
    !o.value || be.value || (G && (N.value = true), i.value = !G);
  }), re(N, (G) => {
    if (!e.hideSelected && G && I.value.length && i.value) {
      const le = x.value.findIndex((_e) => I.value.some((X) => _e.value === X.value));
      Je && window.requestAnimationFrame(() => {
        var _a3;
        le >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(le));
      });
    }
    G && (d.value = null);
  }), re(f, (G, le) => {
    N.value || o.value && !le.length && G.length && (N.value = true);
  }), te(() => {
    const G = !!(!e.hideNoData || x.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), le = I.value.length > 0, _e = Gn.filterProps(e), X = { search: k, filteredItems: g.value };
    return p(Gn, K({ ref: l }, _e, { modelValue: k.value, "onUpdate:modelValue": [(me) => k.value = me, oe], focused: o.value, "onUpdate:focused": (me) => o.value = me, validationValue: I.externalValue, counterValue: V.value, dirty: le, onChange: he, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: w.isReadonly.value, placeholder: le ? void 0 : e.placeholder, "onClick:clear": ye, "onMousedown:control": ne, onKeydown: xe, onBlur: se, "aria-expanded": R.value, "aria-controls": $.value }), { ...n, default: (me) => {
      let { id: Se } = me;
      return b(ge, null, [p(ql, K({ id: Z.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (ke) => N.value = ke, activator: "parent", contentClass: "v-autocomplete__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: L, onAfterLeave: H }, e.menuProps), { default: () => [p(La, { onFocusin: Q, onKeydown: Ae }, { default: () => [n["menu-header"] && b("header", { ref: j }, [n["menu-header"](X)]), G && p(Kl, K({ key: "autocomplete-list", ref: Y, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (ke) => ke.preventDefault(), onFocusout: ue, tabindex: "-1", selectable: !!x.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, U, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !x.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: a(e.noDataText) }, null)), p(Tr, { ref: u, renderless: true, items: x.value, itemKey: "value" }, { default: (ke) => {
          var _a4, _b3, _c3;
          let { item: Ve, index: Le, itemRef: Ge } = ke;
          const Ne = K(Ve.props, { ref: Ge, key: Ve.value, active: T.value && Ve === M.value ? true : void 0, onClick: () => ce(Ve, null), "aria-posinset": Le + 1, "aria-setsize": x.value.length });
          return Ve.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ve.raw, index: Le })) ?? p(mn, K(Ve.props, { key: `divider-${Le}` }), null) : Ve.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ve.raw, index: Le })) ?? p(lo, K(Ve.props, { key: `subheader-${Le}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ve, index: Le, props: Ne })) ?? p(xn, K(Ne, { role: "option" }), { prepend: (ft) => {
            let { isSelected: lt } = ft;
            return b(ge, null, [e.multiple && !e.hideSelected ? p(En, { key: Ve.value, modelValue: lt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (rn) => rn.preventDefault() }, null) : void 0, Ve.props.prependAvatar && p(hn, { image: Ve.props.prependAvatar }, null), Ve.props.prependIcon && p(Ye, { icon: Ve.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ve.title : jc("v-autocomplete", Ve.title, (_a5 = C(Ve)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && b("footer", { ref: O }, [n["menu-footer"](X)])] })] }), I.value.map((ke, Ve) => {
        function Le(lt) {
          lt.stopPropagation(), lt.preventDefault(), ce(ke, false);
        }
        const Ge = K(fa.filterProps(ke.props), { "onClick:close": Le, onKeydown(lt) {
          lt.key !== "Enter" && lt.key !== " " || (lt.preventDefault(), lt.stopPropagation(), Le(lt));
        }, onMousedown(lt) {
          lt.preventDefault(), lt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Ne = P.value ? !!n.chip : !!n.selection, ft = Ne ? br(P.value ? n.chip({ item: ke, index: Ve, props: Ge }) : n.selection({ item: ke, index: Ve })) : void 0;
        if (!(Ne && !ft)) return b("div", { key: ke.value, class: ee(["v-autocomplete__selection", Ve === c.value && ["v-autocomplete__selection--selected", v.value]]), style: ve(Ve === c.value ? y.value : {}) }, [P.value ? n.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: ke.title } } }, { default: () => [ft] }) : p(fa, K({ key: "chip", closable: A.value, size: "small", text: ke.title, disabled: ke.props.disabled }, Ge), null) : ft ?? b("span", { class: "v-autocomplete__selection-text" }, [ke.title, e.multiple && Ve < I.value.length - 1 && b("span", { class: "v-autocomplete__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var me = arguments.length, Se = new Array(me), ke = 0; ke < me; ke++) Se[ke] = arguments[ke];
      return b(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? p(Ye, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && p(h, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: N, search: k, filteredItems: g, select: ce }, l);
} }), tI = z({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ce, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...pe(), ...Zn({ location: "top end" }), ...it(), ...Me(), ...Ue(), ...ha({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), yy = J()({ name: "VBadge", inheritAttrs: false, props: tI(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Xe(() => e.color), { roundedClasses: l } = dt(e), { t: o } = Qe(), { textColorClasses: i, textColorStyles: r } = Et(() => e.textColor), { themeClasses: s } = wr(), { locationStyles: u } = Oa(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = wt(e);
  return te(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [m, S] = Ws(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return p(e.tag, K({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [b("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), p(Kt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [at(b("span", K({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, m), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? p(Ye, { icon: e.icon }, null) : f]), [[Mn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), nI = z({ color: String, density: String, ...pe() }, "VBannerActions"), by = J()({ name: "VBannerActions", props: nI(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), te(() => {
    var _a3;
    return b("div", { class: ee(["v-banner-actions", e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), py = ga("v-banner-text"), aI = z({ avatar: String, bgColor: String, color: String, icon: Ce, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...zt(), ...pe(), ...gt(), ...kt(), ...gl({ mobile: null }), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VBanner"), lI = J()({ name: "VBanner", props: aI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { borderClasses: o } = Xt(e), { densityClasses: i } = Ft(e), { displayClasses: r, mobile: s } = on(e), { dimensionStyles: u } = wt(e), { elevationClasses: c } = It(e), { locationStyles: d } = Oa(e), { positionClasses: f } = to(e), { roundedClasses: m } = dt(e), { themeClasses: S } = qe(e), v = B(() => e.color), y = B(() => e.density);
  mt({ VBannerActions: { color: v, density: y } }), te(() => {
    const h = !!(e.text || n.text), k = !!(e.avatar || e.icon), I = !!(k || n.prepend);
    return p(e.tag, { class: ee(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, c.value, f.value, m.value, e.class]), style: ve([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && b("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !k, defaults: { VAvatar: { color: v.value, density: y.value, icon: e.icon, image: e.avatar } } }, n.prepend) : p(hn, { key: "prepend-avatar", color: v.value, density: y.value, icon: e.icon, image: e.avatar }, null)]), b("div", { class: "v-banner__content" }, [h && p(py, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && p(by, { key: "actions" }, n.actions)];
    } });
  });
} }), oI = z({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...hl({ name: "bottom-navigation" }), ...Me({ tag: "header" }), ...pl({ selectedClass: "v-btn--selected" }), ...Ue() }, "VBottomNavigation"), iI = J()({ name: "VBottomNavigation", props: oI(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = wr(), { borderClasses: l } = Xt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { densityClasses: r } = Ft(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { ssrBootStyles: c } = bl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = we(e, "active", e.active), { layoutItemStyles: m } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Na(e, Vc), mt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), te(() => p(e.tag, { class: ee(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: ve([i.value, m.value, { height: de(d.value) }, c.value, e.style]) }, { default: () => [n.default && b("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Sy = z({ fullscreen: Boolean, scrollable: Boolean, ...Fe(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: xr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), cu = J()({ name: "VDialog", props: Sy(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), { scopeId: o } = kl(), i = q();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return re(l, async (u) => {
    var _a3;
    u || (await Ee(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), te(() => {
    const u = Un.filterProps(e), c = K({ "aria-haspopup": "dialog" }, e.activatorProps), d = K({ tabindex: -1 }, e.contentProps);
    return p(Un, K({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, m = new Array(f), S = 0; S < f; S++) m[S] = arguments[S];
      return p(Be, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...m)];
      } });
    } });
  }), Pt({}, i);
} }), rI = z({ inset: Boolean, ...Sy({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), sI = J()({ name: "VBottomSheet", props: rI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue");
  return te(() => {
    const l = cu.filterProps(e);
    return p(cu, K(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), uI = z({ divider: [Number, String], ...pe() }, "VBreadcrumbsDivider"), ky = J()({ name: "VBreadcrumbsDivider", props: uI(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return b("li", { "aria-hidden": "true", class: ee(["v-breadcrumbs-divider", e.class]), style: ve(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), cI = z({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...pe(), ...tn(kt(), ["width", "maxWidth"]), ...ci(), ...Me({ tag: "li" }) }, "VBreadcrumbsItem"), wy = J()({ name: "VBreadcrumbsItem", props: cI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Et(() => o.value ? e.activeColor : e.color);
  return te(() => p(e.tag, { class: ee(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ve([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? b("a", K({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), dI = z({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ce, items: { type: Array, default: () => [] }, ...pe(), ...gt(), ...it(), ...Me({ tag: "ul" }) }, "VBreadcrumbs"), fI = J()({ name: "VBreadcrumbs", props: dI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { densityClasses: o } = Ft(e), { roundedClasses: i } = dt(e);
  mt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return te(() => {
    const s = !!(n.prepend || e.icon);
    return p(e.tag, { class: ee(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: ve([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && b("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : p(Ye, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: m } = u;
        return b(ge, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? p(wy, K({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && p(ky, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: m, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), vI = z({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...xt(), ...Ih(), ...it(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "flat" }) }, "VIconBtn"), xy = J()({ name: "VIconBtn", props: vI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "active"), { themeClasses: o } = qe(e), { borderClasses: i } = Xt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = dt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ba(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function m() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return te(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, v = e.size, h = f.has(v) ? f.get(v) : v, k = e.height ?? h, I = e.width ?? h, { iconSize: V } = Ph(e, () => new Map(e.iconSizes).get(v)), w = { icon: S, size: V.value, color: e.iconColor, opacity: e.opacity };
    return p(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ee([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: ve([{ "--v-icon-btn-rotate": de(e.rotate, "deg"), "--v-icon-btn-height": de(k), "--v-icon-btn-width": de(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: m }, { default: () => {
      var _a3;
      return [ya(!e.hideOverlay, "v-icon-btn"), b("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? p(Ye, K({ key: "content-icon" }, w), null) : p(Be, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...w } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text);
      } })]), !!e.loading && b("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? p(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function mI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Cy = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, _y = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, gI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], hI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yI = 28, bI = 31, Kc = 12, Vy = 1, Dr = 1, Aa = 7, bv = 60, pI = 59, SI = 1440, kI = 24, wI = 23, xI = 0, CI = 1e4, _I = 100, VI = 100, II = 1e4;
function PI(e, t, n) {
  const a = nn(e);
  return Ey(a, t[0], Dy), In(a), n && rl(a, n, a.hasTime), a;
}
function AI(e, t, n) {
  const a = nn(e);
  return Ey(a, t[t.length - 1]), In(a), n && rl(a, n, a.hasTime), a;
}
function Iy(e) {
  const t = nn(e);
  return t.day = Dr, Er(t), In(t), t;
}
function Py(e) {
  const t = nn(e);
  return t.day = Xc(t.year, t.month), Er(t), In(t), t;
}
function Dl(e) {
  return isFinite(parseInt(e));
}
function TI(e) {
  return typeof e == "number" && isFinite(e) || !!_y.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function pv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = _y.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Ol(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!Cy.exec(e) || e instanceof Date;
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = qc(e);
    return n && rl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = Cy.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Er(l), In(l), n && rl(l, n, l.hasTime), l;
}
function qc(e) {
  return In({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * CI + e.month * _I + e.day;
}
function du(e) {
  return e.hour * VI + e.minute;
}
function Ra(e) {
  return Vt(e) * II + du(e);
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = du(t), l = du(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function Sv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function kv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = wI, e.minute = pI, e.time = Ty(e))), e;
}
function Ay(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, fu(e, t), In(e), n && rl(e, n, true), e;
}
function Er(e) {
  return e.weekday = DI(e), e;
}
function In(e) {
  return e.time = Ty(e), e.date = EI(e), e;
}
function DI(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Kc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Xc(e, t) {
  return mI(e) ? hI[t] : gI[t];
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
function EI(e) {
  let t = `${tl(e.year, 4)}-${tl(e.month, 2)}`;
  return e.hasDay && (t += `-${tl(e.day, 2)}`), t;
}
function Ty(e) {
  return e.hasTime ? `${tl(e.hour, 2)}:${tl(e.minute, 2)}` : "";
}
function fu(e, t) {
  for (e.minute += t; e.minute >= bv; ) e.minute -= bv, e.hour++, e.hour >= kI && (Ta(e), e.hour = xI);
  return e;
}
function Ta(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Aa, e.day > yI && e.day > Xc(e.year, e.month) && (e.day = Dr, e.month++, e.month > Kc && (e.month = Vy, e.year++)), e;
}
function Dy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Aa, e.day < Dr && (e.month--, e.month < Vy && (e.year--, e.month = Kc), e.day = Xc(e.year, e.month)), e;
}
function Ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function MI(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Ey(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ta, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function BI(e) {
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
function vu(e) {
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
function $I(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = nn(e);
    o.push(Ay(s, r, l));
  }
  return o;
}
function _o(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(vu(a));
    } catch {
      return "";
    }
  };
}
function LI(e) {
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
function FI(e) {
  const t = Tt({ now: ia("0000-00-00 00:00", true), today: ia("0000-00-00", true) }), n = _(() => e.now && Ol(e.now) ? ia(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return qc(/* @__PURE__ */ new Date());
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
  return re(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Mr = z({ start: { type: [String, Number, Date], validate: Ol, default: () => qc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Ol }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: LI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Ol }, type: { type: String, default: "month" } }, "VCalendar-base");
function Zc(e) {
  const { times: t, updateTimes: n } = FI({ now: e.now }), a = qg(e), l = ml(), o = _(() => e.type === "month" ? Iy(ia(e.start, true)) : ia(e.start, true)), i = _(() => {
    const V = o.value, w = e.end && ia(e.end) || V, g = Ra(w) < Ra(V) ? V : w;
    return e.type === "month" ? Py(g) : g;
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
  }), c = _(() => BI(s.value)), d = _(() => tr(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : _o(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), m = _(() => e.weekdayFormat ? e.weekdayFormat : _o(a.current.value, (V, w) => ({ timeZone: "UTC", weekday: w ? "short" : "long" })));
  function S(V) {
    return vh(V);
  }
  function v(V) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": w };
  }
  function y(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return PI(V, s.value, t.today);
  }
  function k(V) {
    return AI(V, s.value, t.today);
  }
  function I(V) {
    return _o(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: m, getColorProps: S, getRelativeClasses: v, getWeekNumber: y, getStartOfWeek: h, getEndOfWeek: k, getFormatter: I, updateTimes: n };
}
const My = z({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Dl }, intervalWidth: { type: [Number, String], default: 60, validate: Dl }, intervalMinutes: { type: [Number, String], default: 60, validate: Dl }, firstInterval: { type: [Number, String], default: 0, validate: Dl }, firstTime: { type: [Number, String, Object], validate: TI }, intervalCount: { type: [Number, String], default: 24, validate: Dl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function By(e) {
  const t = Zc(e), n = ie(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => pv(e.firstTime)), s = _(() => {
    const w = r.value;
    return w !== false && w >= 0 && w <= SI ? w : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => tr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const w = c.value, g = s.value, C = l.value, x = o.value, A = t.times.now;
    return w.map((P) => $I(P, g, C, x, A));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : _o(t.locale.current.value, (w, g) => g ? w.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function m(w) {
    const g = d.value[0][0];
    return !(g.hour === w.hour && g.minute === w.minute);
  }
  function S(w) {
  }
  function v(w, g) {
    const C = nn(g), x = w.currentTarget.getBoundingClientRect(), A = s.value, P = w, E = w, D = P.changedTouches || P.touches, T = ((D && D[0] ? D[0].clientY : E.clientY) - x.top) / i.value, F = Math.floor(T * l.value), W = A + F;
    return Ay(C, W, t.times.now);
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
    let C = pv(w);
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
function RI(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function OI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Yo = { mounted: RI, unmounted: OI }, go = qt({ name: "VCalendarDaily", directives: { vResize: Yo }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr(), ...My() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = q(0), o = q(), i = By(e);
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
    const M = de(e.intervalWidth);
    return b("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(m);
  }
  function m(M, T) {
    const F = vn(a, ":day", (W) => ({ nativeEvent: W, ...i.getSlotScope(M) }));
    return b("div", K({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, F), [v(M), y(M), S(M, T)]);
  }
  function S(M, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: T })) ?? [];
  }
  function v(M) {
    const T = M.present ? e.color : void 0;
    return b("div", K(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function y(M) {
    var _a3;
    return b("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const T = vn(a, ":date", (F) => ({ nativeEvent: F, ...M }));
    return p(xy, K({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, T), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function k() {
    return b("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return b("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return b("div", { ref: o, class: "v-calendar-daily__pane", style: { height: de(i.bodyHeight.value) } }, [w()]);
  }
  function w() {
    var _a3;
    return b("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? g()]);
  }
  function g() {
    return i.days.value.map((M, T) => {
      const F = vn(a, ":time", (W) => ({ nativeEvent: W, ...i.getSlotScope(i.getTimestampAtEvent(W, M)) }));
      return b("div", K({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, F), [x(T), C(M)]);
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
    const T = de(e.intervalHeight), F = e.intervalStyle || i.intervalStyleDefault;
    return b("div", { class: "v-calendar-daily__day-interval", key: M.time, style: ve([{ height: T }, F(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = de(e.intervalWidth), T = vn(a, ":interval", (F) => ({ nativeEvent: F, ...i.getTimestampAtEvent(F, i.parsedStart.value) }));
    return b("div", K({ class: "v-calendar-daily__intervals-body", style: { width: M } }, T), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const T = de(e.intervalHeight), F = e.shortIntervals, Z = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, F) : void 0;
    return b("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: T } }, [b("div", { class: "v-calendar-daily__interval-text" }, [Z])]);
  }
  return Ct(r), te(() => at(b("div", { class: ee(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), k()]), [[Yo, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function NI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function $y(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : NI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const HI = qt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Mr(), ...My() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = By(e), o = _(() => $y(e.categories, e.categoryText));
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
    return b("div", K({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(k), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
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
    return b("div", K({ key: y.date + "-" + k, class: ["v-calendar-daily__day", l.getRelativeClasses(y)] }, V), [f(h, I), S(y, I)]);
  }
  function f(y, h) {
    return l.intervals.value[y].map((k) => m(k, h));
  }
  function m(y, h) {
    var _a3;
    const k = de(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return b("div", { key: y.time, class: "v-calendar-daily__day-interval", style: ve([{ height: k }, I({ ...y, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  function S(y, h) {
    return b("div", { class: "v-calendar-category__columns" }, [v(y, h)]);
  }
  function v(y, h) {
    var _a3;
    const k = vn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, y)), h));
    return b("div", K({ class: "v-calendar-category__column" }, k), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  return te(() => p(go, K({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), wv = qt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Dl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Zc(e), o = wr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
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
    return b("div", K(l.getColorProps({ text: x }), { key: w.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(w, C)], role: "columnheader" }), [l.weekdayFormatter.value(w, e.shortWeekdays)]);
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
    return b("div", K({ key: w.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(w, x)], role: "cell" }, A), [I(w), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: x, index: g, week: C, ...w })]);
  }
  function I(w) {
    var _a3;
    return b("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, w)) ?? V(w)]);
  }
  function V(w) {
    const g = w.day === 1 && e.showMonthOnFirst, C = vn(a, ":date", (x) => ({ nativeEvent: x, ...w }));
    return p(xy, K({ active: w.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, C), { default: () => [g ? u.value(w, e.shortMonths) + " " + l.dayFormatter.value(w, false) : l.dayFormatter.value(w, false)] });
  }
  return te(() => b("div", { class: ee(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (w) => w.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), zI = 864e5;
function Ly(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function Pn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function xv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Fy(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Ry(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Oy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + zI, e.endTimestampIdentifier)];
}
function WI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (Pn(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? Fy(s.event) : Ry(s.event);
      if (Pn(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function Ny(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Ra(n), r = Ly(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? Fy(s.event) : Ry(s.event);
      t.groups.length > 0 && !Pn(u, c, t.min, t.max, l) && (xv(t.groups), t.reset());
      let d = WI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), xv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Cv = 100, jI = (e, t, n) => {
  const a = Ny(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * Cv / u.columnCount, u.width = Cv / u.columnCount;
    }), s;
  };
}, Vi = 100, UI = 5, GI = 1.7, YI = (e, t, n) => {
  const a = Ny(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Ra(l), u = Ly(o, s), c = eP(u, s);
    for (const d of c) {
      const f = [];
      for (const m of d.visuals) {
        const S = tP(m, s), v = ZI(S, f);
        if (v === false) {
          const y = JI(S, f);
          y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), S.index = y.index + 1, y.children.push(S));
        } else {
          const [y] = _v(S, f, v - 1, v - 1), h = _v(S, f, v + 1, v + f.length, true);
          S.children = h, S.index = v, y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), y.children.push(S));
          for (const k of h) k.parent === y && (k.parent = S), k.index - S.index <= 1 && S.sibling && Pn(S.start, $i(S.start, n), k.start, k.end) && (k.sibling = true);
        }
        f.push(S);
      }
      KI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function KI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Hy(n) + 1, i = l ? l.visual.left : 0, r = Vi - i, s = Math.min(UI, Vi / o), u = qI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = QI(n, e, t) ? Vi - a.left : Math.min(Vi - a.left, d * GI);
  }
}
function qI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function XI(e, t) {
  const n = [];
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function ZI(e, t) {
  const n = XI(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function _v(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && Pn(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function JI(e, t) {
  let n = null;
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function QI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && Pn(e.start, $i(e.start, n), a.start, a.end)) return false;
  return true;
}
function eP(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = Oy(a.event, t);
    let i = false;
    for (const r of n) if (Pn(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function tP(e, t) {
  const [n, a] = Oy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function Hy(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Hy(n);
    a > t && (t = a);
  }
  return t;
}
function $i(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const zy = { stack: YI, column: jI };
function nP(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ia(i, true), u = r ? ia(r, true) : s, c = Sv(i) ? kv(s, l) : s, d = Sv(r) ? kv(u, l) : u, f = Vt(c), m = Ra(c), S = Vt(d), v = c.hasTime ? 0 : 2359, y = Ra(d) + v, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: m, end: d, endIdentifier: S, endTimestampIdentifier: y, allDay: h, index: t, category: o };
}
function Jc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function aP(e, t, n) {
  if (n) {
    const a = fu(nn(t), n[0]), l = fu(nn(t), n[1]), o = e.startTimestampIdentifier < Ra(l), i = e.endTimestampIdentifier > Ra(a);
    return o && i;
  }
  return Jc(e, Vt(t));
}
function lP(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Vv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Jc(e, n);
}
function oP(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const iP = 100, rP = 95, sP = z({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in zy || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function uP(e, t, n) {
  const a = Zc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = _(() => e.events ? e.events.map((T, F) => nP(T, F, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (T, F) => T.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : zy[e.eventOverlapMode]), m = _(() => a.effectiveWeekdays.value);
  function S(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const v = q([]);
  function y() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, F = h();
    for (const W in F) {
      const { parent: N, events: Z, more: R } = F[W];
      if (!R) break;
      const $ = N.getBoundingClientRect(), Y = Z.length - 1, j = Z.map((U) => ({ event: U, bottom: U.getBoundingClientRect().bottom })).sort((U, ae) => U.bottom - ae.bottom);
      let O = 0;
      for (let U = 0; U <= Y; U++) {
        const ae = j[U].bottom;
        (U === Y ? ae > $.bottom : ae + T > $.bottom) && (j[U].event.style.display = "none", O++);
      }
      O ? (R.style.display = "", R.innerHTML = a.locale.t(e.eventMoreText, O)) : R.style.display = "none";
    }
  }
  function h() {
    const T = {}, F = v.value;
    return !F || !F.length || F.forEach((W) => {
      const N = W.getAttribute("data-date");
      W.parentElement && N && (N in T || (T[N] = { parent: W.parentElement, more: null, events: [] }), W.getAttribute("data-more") ? T[N].more = W : (T[N].events.push(W), W.style.display = ""));
    }), T;
  }
  function k(T, F) {
    let { event: W } = T;
    const N = e.eventHeight || 0, Z = e.eventMarginBottom || 0, R = Vt(F), $ = F.week, Y = R === W.startIdentifier;
    let j = R === W.endIdentifier, O = rP;
    if (!o.value) for (let ae = F.index + 1; ae < $.length; ae++) {
      const ye = Vt($[ae]);
      if (W.endIdentifier >= ye) O += iP, j = j || ye === W.endIdentifier;
      else {
        j = true;
        break;
      }
    }
    return V(W, { eventParsed: W, day: F, start: Y, end: j, timed: false }, false, { class: ["v-event", { "v-event-start": Y, "v-event-end": j }], style: { height: `${N}px`, width: `${O}%`, marginBottom: `${Z}px` }, "data-date": F.date });
  }
  function I(T, F) {
    let { event: W, left: N, width: Z } = T;
    const R = F.timeDelta(W.start, F), $ = F.timeDelta(W.end, F);
    if ($ === false || R === false || $ < 0 || R >= 1 || lP(W, F)) return false;
    const Y = Vt(F), j = W.startIdentifier >= Y, O = W.endIdentifier > Y, U = F.timeToY(W.start, F), ae = F.timeToY(W.end, F), ye = Math.max(e.eventHeight || 0, ae - U);
    return V(W, { eventParsed: W, day: F, start: j, end: O, timed: true }, true, { class: "v-event-timed", style: { top: `${U}px`, height: `${ye}px`, left: `${N}%`, width: `${Z}%` } });
  }
  function V(T, F, W, N) {
    const Z = t.event, R = c.value(T.input), $ = S(T.input), Y = T.start.hour < 12 && T.end.hour >= 12, j = MI(T.start, T.end) <= u.value, O = (fe, Ae) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), U = () => O(T.start) + " - " + O(T.end), ae = () => {
      const fe = d.value(T, W);
      if (T.start.hasTime) if (W) {
        const Ae = U(), xe = j ? ", " : b("br", null, null);
        return b("span", { class: "v-event-summary" }, [b("strong", null, [fe]), xe, Ae]);
      } else {
        const Ae = O(T.start);
        return b("span", { class: "v-event-summary" }, [b("strong", null, [Ae]), Ke(" "), fe]);
      }
      return b("span", { class: "v-event-summary" }, [fe]);
    }, ye = { ...F, event: T.input, outside: F.day.outside, singline: j, overlapsNoon: Y, formatTime: O, timeSummary: U, eventSummary: ae }, ne = vn(n, ":event", (fe) => ({ ...ye, nativeEvent: fe }));
    return at(b("div", K(a.getColorProps({ text: R, background: $ }), ne, N, { ref_for: true, ref: v }), [(Z == null ? void 0 : Z(ye)) ?? w(ae)]), [[Lt, e.eventRipple ?? true]]);
  }
  function w(T) {
    return b("div", { class: "pl-1" }, [T()]);
  }
  function g(T) {
    const F = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return b("div", { style: { height: `${F}px` }, "data-date": T.date, ref_for: true, ref: v }, null);
  }
  function C(T) {
    const F = e.eventHeight || 0, W = e.eventMarginBottom || 0, N = vn(n, ":more", (Z) => ({ nativeEvent: Z, ...T }));
    return at(b("div", K({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${F}px`, marginBottom: `${W}px` }, ref_for: true, ref: v }, N), null), [[Lt, e.eventRipple ?? true]]);
  }
  function x() {
    const T = a.days.value, F = Vt(T[0]), W = Vt(T[T.length - 1]);
    return s.value.filter((N) => oP(N, F, W));
  }
  function A(T, F) {
    return !o.value || typeof F == "object" && F.categoryName && F.categoryName === T.category || typeof T.category == "string" && F === T.category || typeof T.category != "string" && F === null;
  }
  function P(T) {
    const F = Vt(T), W = m.value[0];
    return s.value.filter((N) => Vv(N, T, F, W));
  }
  function E(T) {
    const F = Vt(T), W = m.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? Jc(N, F) : Vv(N, T, F, W)) && A(N, T.category));
  }
  function D(T) {
    return s.value.filter((F) => !F.allDay && aP(F, T, T.intervalRange) && A(F, T.category));
  }
  function M() {
    if (l.value) return { ...t };
    const T = f.value(s.value, m.value[0], u.value), F = (N) => !!N, W = (N, Z, R, $) => {
      const Y = Z(N), j = T(N, Y, $, o.value);
      if ($) return j.map((U) => R(U, N)).filter(F);
      const O = [];
      return j.forEach((U, ae) => {
        for (; O.length < U.column; ) O.push(g(N));
        const ye = R(U, N);
        ye && O.push(ye);
      }), O;
    };
    return { ...t, day: (N) => {
      let Z = W(N, P, k, false);
      if (Z && Z.length > 0 && e.eventMore && Z.push(C(N)), t.day) {
        const R = t.day(N);
        R && (Z = Z ? Z.concat(R) : R);
      }
      return Z;
    }, "day-header": (N) => {
      let Z = W(N, E, k, false);
      if (t["day-header"]) {
        const R = t["day-header"](N);
        R && (Z = Z ? Z.concat(R) : R);
      }
      return Z;
    }, "day-body": (N) => {
      const Z = W(N, D, I, true);
      let R = [b("div", { class: "v-event-timed-container" }, [Z])];
      if (t["day-body"]) {
        const $ = t["day-body"](N);
        $ && (R = R.concat($));
      }
      return R;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: m, categoryMode: o, eventColorFunction: S, eventsRef: v, updateEventVisibility: y, getEventsMap: h, genDayEvent: k, genTimedEvent: I, genEvent: V, genName: w, genPlaceholder: g, genMore: C, getVisibleEvents: x, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const cP = J()({ name: "VCalendar", directives: { vResize: Yo }, props: { modelValue: { type: [String, Number, Date], validate: Ol }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Mr(), ...sP() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = q(), i = uP(e, n, a), r = q(null), s = q(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => $y(e.categories, e.categoryText)), d = _(() => {
    const g = i.parsedValue.value;
    let C = null, x = e.maxDays, A = c.value, P = g, E = g;
    switch (e.type) {
      case "month":
        C = wv, P = Iy(g), E = Py(g);
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
        C = wv, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = go, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = HI, E = Ka(nn(E), Ta, D), In(E), x = D, A = w(A);
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
    const C = nn(i.parsedValue.value), x = g > 0, A = x ? Ta : Dy, P = x ? bI : Dr;
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
    Er(C), In(C), rl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", vu(C)) : typeof e.modelValue == "number" ? l("update:modelValue", vu(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
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
  return re(d, h), Ct(() => {
    i.updateEventVisibility(), h();
  }), fr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), te(() => {
    const { start: g, end: C, maxDays: x, component: A, categories: P } = d.value;
    return at(p(A, K({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: g.date, end: C.date, maxDays: x, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Yo, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: m, title: y, monthLongFormatter: S, monthShortFormatter: v, parsedCategories: c, checkChange: h, move: k, next: I, prev: V, getCategoryList: w }, o);
} }), dP = z({ ...pe(), ...Me() }, "VCardActions"), Wy = J()({ name: "VCardActions", props: dP(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { slim: true, variant: "text" } }), te(() => p(e.tag, { class: ee(["v-card-actions", e.class]), style: ve(e.style) }, n)), {};
} }), fP = z({ opacity: [Number, String], ...pe(), ...Me() }, "VCardSubtitle"), jy = J()({ name: "VCardSubtitle", props: fP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(e.tag, { class: ee(["v-card-subtitle", e.class]), style: ve([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Uy = ga("v-card-title"), vP = z({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...pe(), ...gt(), ...Me() }, "VCardItem"), Gy = J()({ name: "VCardItem", props: vP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return p(e.tag, { class: ee(["v-card-item", e.class]), style: ve(e.style) }, { default: () => {
      var _a3;
      return [l && b("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? p(Be, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : b(ge, null, [e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), b("div", { class: "v-card-item__content" }, [r && p(Uy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Ie(e.title)];
      } }), s && p(jy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Ie(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && b("div", { key: "append", class: "v-card-item__append" }, [n.append ? p(Be, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : b(ge, null, [e.appendIcon && p(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && p(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), mP = z({ opacity: [Number, String], ...pe(), ...Me() }, "VCardText"), Yy = J()({ name: "VCardText", props: mP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => p(e.tag, { class: ee(["v-card-text", e.class]), style: ve([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), gP = z({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...pe(), ...gt(), ...kt(), ...xt(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "elevated" }) }, "VCard"), hP = J()({ name: "VCard", directives: { vRipple: Lt }, props: gP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = Xt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ba(e), { densityClasses: u } = Ft(e), { dimensionStyles: c } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: m } = Oa(e), { positionClasses: S } = to(e), { roundedClasses: v } = dt(e), y = ui(e, n), h = ie(void 0);
  return re(() => e.loading, (k, I) => {
    h.value = !k && typeof I == "string" ? I : typeof k == "boolean" ? void 0 : k;
  }, { immediate: true }), te(() => {
    const k = e.link !== false && y.isLink.value, I = !e.disabled && e.link !== false && (e.link || y.isClickable.value), V = k ? "a" : e.tag, w = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = w || g, x = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || A || x, D = !!(a.text || e.text != null);
    return at(p(V, K(y.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, S.value, v.value, s.value, e.class], style: [r.value, c.value, m.value, { "--v-card-height": de(e.height) }, e.style], onClick: I && y.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && b("div", { key: "image", class: "v-card__image" }, [a.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : p(da, { key: "image-img", cover: true, src: e.image }, null)]), p(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && p(Gy, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && p(Yy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && p(Wy, null, { default: a.actions }), ya(I, "v-card")];
    } }), [[Lt, I && e.ripple]]);
  }), {};
} }), yP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function bP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function pP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), yP(t);
}
function SP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function kP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => bP(n, t), touchend: (n) => pP(n, t), touchmove: (n) => SP(n, t) };
}
function wP(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = kP(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Ig(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function xP(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Ig(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const nr = { mounted: wP, unmounted: xP }, Ky = Symbol.for("vuetify:v-window"), qy = Symbol.for("vuetify:v-window-group"), Br = z({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...pe(), ...Me(), ...Ue() }, "VWindow"), sl = J()({ name: "VWindow", directives: { vTouch: nr }, props: Br(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isRtl: l } = _t(), { t: o } = Qe(), i = Na(e, qy), r = q(), s = _(() => l.value ? !e.reverse : e.reverse), u = ie(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", x = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${g}${x}-transition`;
  }), d = ie(0), f = q(void 0), m = _(() => i.items.value.findIndex((g) => i.selected.value.includes(g.id)));
  re(m, (g, C) => {
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
  }, { flush: "sync" }), rt(Ky, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const S = B(() => e.continuous || m.value !== 0), v = B(() => e.continuous || m.value !== i.items.value.length - 1);
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
  return te(() => at(p(e.tag, { ref: r, class: ee(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: ve([e.style, { "--v-window-transition-duration": Wn() ? null : de(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [b("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && b("div", { class: ee(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [k.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[nr, I.value]])), { group: i };
} }), CP = z({ color: String, cycle: Boolean, delimiterIcon: { type: Ce, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Br({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), _P = J()({ name: "VCarousel", props: CP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { t: l } = Qe(), o = q();
  let i = -1;
  re(a, s), re(() => e.interval, s), re(() => e.cycle, (c) => {
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
  return te(() => {
    const c = sl.filterProps(e);
    return p(sl, K({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: de(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return b(ge, null, [!e.hideDelimiters && b("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && p(Be, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((m, S) => {
        const v = { id: `carousel-item-${m.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"], onClick: () => f.select(m.id, true), onKeydown: (y) => u(y, f) };
        return n.item ? n.item({ props: v, item: m }) : p(ze, K(m, v), null);
      })] })]), e.progress && p(_r, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), $r = z({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...pe(), ...Sl(), ...Rc() }, "VWindowItem"), ul = J()({ name: "VWindowItem", directives: { vTouch: nr }, props: $r(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(Ky), l = Ma(e, qy), { isBooted: o } = bl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = ie(false), r = _(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !a || (i.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = de((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(S) {
    i.value && Ee(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = de(S.clientHeight));
    });
  }
  const f = _(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: m } = Oc(e, l.isSelected);
  return te(() => p(Kt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [at(b("div", { class: ee(["v-window-item", l.selectedClass.value, e.class]), style: ve(e.style) }, [m.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Mn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), VP = z({ ...mh(), ...$r() }, "VCarouselItem"), IP = J()({ name: "VCarouselItem", inheritAttrs: false, props: VP(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  te(() => {
    const l = da.filterProps(e), o = ul.filterProps(e);
    return p(ul, K({ class: ["v-carousel-item", e.class] }, o), { default: () => [p(da, K(a, l), n)] });
  });
} }), PP = ga("v-code", "code"), AP = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...pe() }, "VColorPickerCanvas"), TP = qt({ name: "VColorPickerCanvas", props: AP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ie(false), l = q(), o = ie(parseFloat(e.width)), i = ie(parseFloat(e.height)), r = q({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: k, y: I } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ze(k, 0, o.value) / o.value, v: 1 - Ze(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: h, y: k } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: de(e.dotSize), height: de(e.dotSize), transform: `translate(${de(h - I)}, ${de(k - I)})` };
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
    const k = i0(h);
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
  return re(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, y, { immediate: true }), re(() => [o.value, i.value], (h, k) => {
    y(), r.value = { x: u.value.x * h[0] / k[0], y: u.value.y * h[1] / k[1] };
  }, { flush: "post" }), re(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Ct(() => y()), te(() => b("div", { ref: d, class: ee(["v-color-picker-canvas", e.class]), style: ve(e.style), onMousedown: m, onTouchstartPassive: m }, [b("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && b("div", { class: ee(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ve(c.value) }, null)])), {};
} });
function DP(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function EP(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = jn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Ys(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Wg(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Xa(t, ["r", "g", "b"]) ? n = jn(e) : Xa(t, ["h", "s", "l"]) ? n = Ys(e) : Xa(t, ["h", "s", "v"]) && (n = e), DP(n, !Xa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Bl = { h: 0, s: 0, v: 0, a: 1 }, mu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: jn, from: li }, MP = { ...mu, inputs: (_a2 = mu.inputs) == null ? void 0 : _a2.slice(0, 3) }, gu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Ys, from: dc }, BP = { ...gu, inputs: gu.inputs.slice(0, 3) }, Xy = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Wg, from: D0 }, $P = { ...Xy, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, nl = { rgb: MP, rgba: mu, hsl: BP, hsla: gu, hex: $P, hexa: Xy }, LP = (e) => {
  let { label: t, ...n } = e;
  return b("div", { class: "v-color-picker-edit__input" }, [b("input", Ep(Qm(n)), null), b("span", null, [t])]);
}, FP = z({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, ...pe() }, "VColorPickerEdit"), RP = qt({ name: "VColorPickerEdit", props: FP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
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
  return te(() => {
    var _a3;
    return b("div", { class: ee(["v-color-picker-edit", e.class]), style: ve(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => p(LP, i, null)), l.value.length > 1 && p(ze, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Qc = Symbol.for("vuetify:v-slider");
function hu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function OP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Zy = z({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...it(), ...xt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Jy = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(wf(a.value), wf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ze(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Qy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = ao(t), { isRtl: s } = _t(), u = B(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: m, step: S, decimals: v, roundValue: y } = n, h = _(() => parseInt(t.thumbSize, 10)), k = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (m.value - f.value) / S.value), w = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), x = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = ie(false), P = ie(0), E = q(), D = q();
  function M(ne) {
    var _a3;
    const fe = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!fe) return;
    const Ae = t.direction === "vertical", xe = Ae ? "top" : "left", he = Ae ? "height" : "width", L = Ae ? "clientY" : "clientX", { [xe]: H, [he]: Q } = fe.getBoundingClientRect(), ue = OP(ne, L);
    let oe = Ze((ue - H - P.value) / Q) || 0;
    return (Ae ? d.value : d.value !== s.value) && (oe = 1 - oe), y(f.value + oe * (m.value - f.value));
  }
  const T = (ne) => {
    const fe = M(ne);
    fe != null && o({ value: fe }), A.value = false, P.value = 0;
  }, F = (ne) => {
    const fe = M(ne);
    D.value = i(ne), D.value && (A.value = true, D.value.contains(ne.target) ? P.value = hu(ne, D.value, t.direction) : (P.value = 0, fe != null && l({ value: fe })), fe != null && a({ value: fe }), Ee(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, W = { passive: true, capture: true };
  function N(ne) {
    const fe = M(ne);
    fe != null && l({ value: fe });
  }
  function Z(ne) {
    ne.stopPropagation(), ne.preventDefault(), T(ne), window.removeEventListener("mousemove", N, W), window.removeEventListener("mouseup", Z);
  }
  function R(ne) {
    var _a3;
    T(ne), window.removeEventListener("touchmove", N, W), (_a3 = ne.target) == null ? void 0 : _a3.removeEventListener("touchend", R);
  }
  function $(ne) {
    var _a3;
    F(ne), window.addEventListener("touchmove", N, W), (_a3 = ne.target) == null ? void 0 : _a3.addEventListener("touchend", R, { passive: false });
  }
  function Y(ne) {
    ne.button === 0 && (ne.preventDefault(), F(ne), window.addEventListener("mousemove", N, W), window.addEventListener("mouseup", Z, { passive: false }));
  }
  bt(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", Z);
  });
  const j = (ne) => {
    const fe = (ne - f.value) / (m.value - f.value) * 100;
    return Ze(isNaN(fe) ? 0 : fe, 0, 100);
  }, O = B(() => t.showTicks), U = _(() => O.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((ne) => ({ value: ne, position: j(ne), label: ne.toString() })) : Object.keys(t.ticks).map((ne) => ({ value: parseFloat(ne), position: j(parseFloat(ne)), label: t.ticks[ne] })) : V.value !== 1 / 0 ? Nn(V.value + 1).map((ne) => {
    const fe = f.value + ne * S.value;
    return { value: fe, position: j(fe) };
  }) : [] : []), ae = _(() => U.value.some((ne) => {
    let { label: fe } = ne;
    return !!fe;
  })), ye = { activeThumbRef: D, color: B(() => t.color), decimals: v, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ae, isReversed: u, indexFromEnd: d, min: f, max: m, mousePressed: A, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: Y, onSliderTouchstart: $, parsedTicks: U, parseMouseMove: M, position: j, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: y, showTicks: O, startOffset: P, step: S, thumbSize: h, thumbColor: w, thumbLabelColor: g, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: k, trackColor: C, trackContainerRef: E, trackFillColor: x, trackSize: I, vertical: c };
  return rt(Qc, ye), ye;
}, NP = z({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...pe() }, "VSliderThumb"), yu = J()({ name: "VSliderThumb", directives: { vRipple: Lt }, props: NP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(Qc), { isRtl: o, rtlClasses: i } = _t();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: m, thumbLabel: S, direction: v, isReversed: y, vertical: h, readonly: k, elevation: I, mousePressed: V, decimals: w, indexFromEnd: g } = l, C = ie(false), x = ie(false), A = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = It(A), { textColorClasses: E, textColorStyles: D } = Et(u), { backgroundColorClasses: M, backgroundColorStyles: T } = Xe(c), { pageup: F, pagedown: W, end: N, home: Z, left: R, right: $, down: Y, up: j } = zs, O = [F, W, N, Z, R, $, Y, j], U = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ae(ne, fe) {
    if (e.noKeyboard || f.value || !O.includes(ne.key)) return;
    ne.preventDefault();
    const Ae = d.value || 0.1, xe = (s.value - r.value) / Ae;
    if ([R, $, Y, j].includes(ne.key)) {
      const L = (h.value ? [o.value ? R : $, y.value ? Y : j] : g.value !== o.value ? [R, j] : [$, j]).includes(ne.key) ? 1 : -1, H = ne.shiftKey ? 2 : ne.ctrlKey ? 1 : 0;
      L === -1 && fe === s.value && !H && !Number.isInteger(xe) ? fe = fe - xe % 1 * Ae : fe = fe + L * Ae * U.value[H];
    } else if (ne.key === Z) fe = r.value;
    else if (ne.key === N) fe = s.value;
    else {
      const he = ne.key === W ? 1 : -1;
      fe = fe - he * Ae * (xe > 100 ? xe / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, fe));
  }
  function ye(ne) {
    const fe = ae(ne, e.modelValue);
    fe != null && (x.value = false, a("update:modelValue", fe));
  }
  return re(() => e.focused, (ne) => {
    ne && (x.value = false);
  }), te(() => {
    const ne = de(g.value ? 100 - e.position : e.position, "%"), fe = S.value === "always" || S.value === true && e.focused || S.value === "hover" && (C.value || e.focused && !x.value);
    return b("div", { class: ee(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: ve([{ "--v-slider-thumb-position": ne, "--v-slider-thumb-size": de(m.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": v.value, onKeydown: k.value ? void 0 : ye, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, x.value = true;
    } }, [b("div", { class: ee(["v-slider-thumb__surface", E.value, P.value]), style: ve(D.value) }, null), at(b("div", { class: ee(["v-slider-thumb__ripple", E.value]), style: ve(D.value) }, null), [[Lt, e.ripple, null, { circle: true, center: true }]]), p(wc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [at(b("div", { class: "v-slider-thumb__label-container" }, [b("div", { class: ee(["v-slider-thumb__label", M.value]), style: ve(T.value) }, [b("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? w.value : 1)]), b("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Mn, fe]])];
    } })]);
  }), {};
} }), HP = z({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...pe() }, "VSliderTrack"), eb = J()({ name: "VSliderTrack", props: HP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = We(Qc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: m, max: S, indexFromEnd: v } = a, { roundedClasses: y } = dt(i), { backgroundColorClasses: h, backgroundColorStyles: k } = Xe(c), { backgroundColorClasses: I, backgroundColorStyles: V } = Xe(u), w = _(() => `inset-${f.value ? "block" : "inline"}-${v.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [w.value]: "0%", [g.value]: "100%" })), x = _(() => e.stop - e.start), A = _(() => ({ [w.value]: de(e.start, "%"), [g.value]: de(x.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const T = D.value !== m.value && D.value !== S.value ? de(D.position, "%") : void 0;
    return b("div", { key: D.value, class: ee(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === m.value, "v-slider-track__tick--last": D.value === S.value }]), style: { [w.value]: T } }, [(D.label || n["tick-label"]) && b("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return te(() => b("div", { class: ee(["v-slider-track", y.value, e.class]), style: ve([{ "--v-slider-track-size": de(d.value), "--v-slider-tick-size": de(s.value) }, e.style]) }, [b("div", { class: ee(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), b("div", { class: ee(["v-slider-track__fill", h.value]), style: { ...A.value, ...k.value } }, null), r.value && b("div", { class: ee(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), zP = z({ ...fi(), ...Zy(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), bu = J()({ name: "VSlider", inheritAttrs: false, props: zP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = q(), i = q(), { rtlClasses: r } = _t(), s = Jy(e), u = we(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: m, onSliderMousedown: S, onSliderTouchstart: v, trackContainerRef: y, position: h, hasLabels: k, disabled: I, readonly: V, noKeyboard: w } = Qy({ props: e, steps: s, onSliderStart: () => {
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
  return te(() => {
    const P = Nt.filterProps(e), [E, D] = qn(l), M = !!(e.label || n.label || n.prepend);
    return p(Nt, K({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || k.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: M ? (T) => {
      var _a3, _b2;
      return b(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? p(no, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: F, messagesId: W } = T;
      return b("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : S, onTouchstartPassive: V.value ? void 0 : v }, [b("input", { id: F.value, name: e.name || F.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), p(eb, { ref: y, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), p(yu, K({ ref: o, "aria-describedby": W.value, focused: g.value, noKeyboard: w.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (N) => u.value = N, position: A.value, elevation: e.elevation, onFocus: C, onBlur: x, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), tb = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ce, default: "$eyeDropper" }, ...pe() }, "VColorPickerPreview"), WP = qt({ name: "VColorPickerPreview", props: tb(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  vr(() => l.abort());
  async function i() {
    if (!pf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = li(fn(s.sRGBHex));
      n("update:color", { ...e.color ?? Bl, ...u });
    } catch {
    }
  }
  return te(() => {
    var _a3, _b2;
    return b("div", { class: ee(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ve(e.style) }, [pf && !e.hideEyeDropper && b("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [p(ze, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), b("div", { class: "v-color-picker-preview__dot" }, [b("div", { style: { background: Ng(e.color ?? Bl) } }, null)]), b("div", { class: "v-color-picker-preview__sliders" }, [p(bu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && p(bu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), jP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, UP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, GP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, YP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, KP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, qP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, XP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, ZP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, JP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, QP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, eA = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, tA = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, nA = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, aA = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, lA = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, oA = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, iA = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, rA = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, sA = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, uA = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, cA = { red: jP, pink: UP, purple: GP, deepPurple: YP, indigo: KP, blue: qP, lightBlue: XP, cyan: ZP, teal: JP, green: QP, lightGreen: eA, lime: tA, yellow: nA, amber: aA, orange: lA, deepOrange: oA, brown: iA, blueGrey: rA, grey: sA, shades: uA }, dA = z({ swatches: { type: Array, default: () => fA(cA) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...pe() }, "VColorPickerSwatches");
function fA(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const vA = qt({ name: "VColorPickerSwatches", props: dA(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return te(() => b("div", { class: ee(["v-color-picker-swatches", e.class]), style: ve([{ maxHeight: de(e.maxHeight) }, e.style]) }, [b("div", null, [e.swatches.map((o) => b("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = fn(i), s = li(r), u = Og(r);
    return b("div", { class: ee(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [b("div", { style: { background: u } }, [e.color && Dt(e.color, s) ? p(Ye, { size: "x-small", icon: "$success", color: $0(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), mA = ga("v-picker-title"), Lr = z({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Nc() }, "VPicker"), Xl = J()({ name: "VPicker", props: Lr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color);
  return te(() => {
    const o = La.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return p(La, K(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && b("div", { key: "header", class: ee(["v-picker__header-wrapper", a.value]), style: ve([l.value]) }, [i && p(mA, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && b("div", { class: "v-picker__header" }, [n.header()])]), b("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && p(Be, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [b("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), gA = z({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Lr({ hideHeader: true }), ...tn(tb(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), hA = qt({ name: "VColorPicker", props: gA(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "mode"), l = q(null), o = we(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = li(fn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? EP(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = _t();
  let s = true;
  re(o, (c) => {
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
  }), mt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), te(() => {
    const c = Xl.filterProps(e);
    return p(Xl, K(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Ng({ ...i.value ?? Bl, a: 1 }) }, e.style] }), { ...n, default: () => b(ge, null, [!e.hideCanvas && p(TP, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && b("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && p(WP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && p(RP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && p(vA, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), yA = z({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...Gc({ hideNoData: true, returnObject: true }), ...Fe(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), bA = J()({ name: "VCombobox", props: yA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = q(), i = ie(false), r = ie(true), s = ie(false), u = q(), c = q(), d = ie(-1);
  let f = false;
  const { items: m, transformIn: S, transformOut: v } = Mc(e), { textColorClasses: y, textColorStyles: h } = Et(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: k } = di(e), I = we(e, "modelValue", [], (X) => S(ot(X)), (X) => {
    const me = v(X);
    return e.multiple ? me : me[0] ?? null;
  }), V = ao(e), w = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), x = ie(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = ie(null), P = _({ get: () => x.value, set: async (X) => {
    var _a4;
    if (x.value = X ?? "", X === null || X === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [_n(e, X)], Ee(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), X && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const me = be(X);
      me.length > 1 && (ce(me), x.value = "");
    }
    X || (d.value = -1), r.value = !X;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: M } = xl(e, m, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = _(() => e.hideSelected && A.value === null ? D.value.filter((X) => !I.value.some((me) => me.value === X.value)) : D.value), F = _(() => e.hideNoData && !T.value.length || V.isReadonly.value || V.isDisabled.value), W = we(e, "menu"), N = _({ get: () => W.value, set: (X) => {
    var _a4;
    W.value && !X && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || X && F.value || (W.value = X);
  } }), { menuId: Z, ariaExpanded: R, ariaControls: $ } = Uc(e, N);
  re(x, (X) => {
    f ? Ee(() => f = false) : i.value && !N.value && (N.value = true), n("update:search", X);
  }), re(I, (X) => {
    var _a4;
    !e.multiple && !C.value && (x.value = ((_a4 = X[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const Y = _(() => I.value.map((X) => X.value)), j = _(() => T.value.find((X) => X.type === "item" && !X.props.disabled)), O = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = j.value) == null ? void 0 : _a4.title)) && T.value.length > 0 && !r.value && !s.value;
  }), U = q(), ae = q(), ye = q(), ne = zc(U, o), { onTabKeydown: fe } = Wc({ groups: [{ type: "element", contentRef: ae }, { type: "list", contentRef: U, displayItemsCount: () => T.value.length }, { type: "element", contentRef: ye }], onLeave: () => {
    var _a4;
    N.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Ae(X) {
    f = true, Ee(() => f = false), e.openOnClear && (N.value = true);
  }
  function xe() {
    F.value || (N.value = true);
  }
  function he(X) {
    F.value || (i.value && (X.preventDefault(), X.stopPropagation()), N.value = !N.value);
  }
  function L(X) {
    var _a4, _b2;
    X.key === "Tab" && fe(X), ((_a4 = U.value) == null ? void 0 : _a4.$el.contains(X.target)) && (jl(X) || X.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function H(X) {
    var _a4, _b2, _c2, _d2;
    if (l0(X) || V.isReadonly.value) return;
    const me = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, Se = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (N.value = true), ["Escape"].includes(X.key) && (N.value = false), O.value && ["Enter", "Tab"].includes(X.key) && j.value && !I.value.some((ke) => {
      let { value: Ve } = ke;
      return Ve === j.value.value;
    }) && se(j.value), X.key === "ArrowDown" && O.value && ((_b2 = U.value) == null ? void 0 : _b2.focus("next")), X.key === "Enter" && P.value && (se(_n(e, P.value), true, true), C.value && (x.value = "")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return se(I.value[0], false);
      if (~d.value) {
        X.preventDefault();
        const ke = d.value;
        se(I.value[d.value], false), d.value = ke >= Se - 1 ? Se - 2 : ke;
      } else X.key === "Backspace" && !P.value && (d.value = Se - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (d.value < 0 && me && me > 0) return;
      const ke = d.value > -1 ? d.value - 1 : Se - 1;
      I.value[ke] ? d.value = ke : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (X.key === "ArrowRight") {
      if (d.value < 0) return;
      const ke = d.value + 1;
      I.value[ke] ? d.value = ke : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && jl(X) && (d.value = -1);
  }
  function Q(X) {
    var _a4;
    const me = ((_a4 = X == null ? void 0 : X.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", Se = be(me);
    Se.length > 1 && e.multiple && (X.preventDefault(), ce(Se));
  }
  function ue() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function oe() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function se(X) {
    let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const ke = I.value.findIndex((Le) => (e.valueComparator || Dt)(Le.value, X.value)), Ve = me ?? !~ke;
      if (~ke) {
        const Le = Ve ? [...I.value, X] : [...I.value];
        Le.splice(ke, 1), I.value = Le;
      } else Ve && (I.value = [...I.value, X]);
      e.clearOnSelect && (P.value = "");
    } else {
      const ke = me !== false;
      I.value = ke ? [X] : [], (!r.value || e.alwaysFilter) && x.value && (A.value = x.value), x.value = ke && !C.value ? X.title : "", Ee(() => {
        N.value = Se, r.value = true;
      });
    }
  }
  function be(X) {
    const Se = [`
`, ...e.delimiters ?? []].map(Yi).join("|");
    return X.split(new RegExp(`(?:${Se})+`));
  }
  async function ce(X) {
    for (let me of X) me = me.trim(), me && (se(_n(e, me)), await Ee());
  }
  function G(X) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function le(X) {
    s.value = false;
  }
  function _e(X) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (i.value = true);
  }
  return re(i, (X, me) => {
    if (!(X || X === me) && (d.value = -1, N.value = false, P.value)) {
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
  }), re(N, (X) => {
    if (!e.hideSelected && X && I.value.length && r.value) {
      const me = T.value.findIndex((Se) => I.value.some((ke) => (e.valueComparator || Dt)(ke.value, Se.value)));
      Je && window.requestAnimationFrame(() => {
        var _a4;
        me >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(me));
      });
    }
    X && (A.value = null);
  }), re(m, (X, me) => {
    N.value || i.value && !me.length && X.length && (N.value = true);
  }), te(() => {
    const X = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), me = I.value.length > 0, Se = Gn.filterProps(e), ke = { search: P, filteredItems: D.value };
    return p(Gn, K({ ref: o }, Se, { modelValue: P.value, "onUpdate:modelValue": (Ve) => P.value = Ve, focused: i.value, "onUpdate:focused": (Ve) => i.value = Ve, validationValue: I.externalValue, counterValue: E.value, dirty: me, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: me ? void 0 : e.placeholder, "onClick:clear": Ae, "onMousedown:control": xe, onKeydown: H, onPaste: Q, onBlur: _e, "aria-expanded": R.value, "aria-controls": $.value }), { ...a, default: (Ve) => {
      let { id: Le } = Ve;
      return b(ge, null, [p(ql, K({ id: Z.value, ref: u, modelValue: N.value, "onUpdate:modelValue": (Ge) => N.value = Ge, activator: "parent", contentClass: "v-combobox__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: ue, onAfterLeave: oe }, e.menuProps), { default: () => [p(La, { onFocusin: G, onKeydown: L }, { default: () => [a["menu-header"] && b("header", { ref: ae }, [a["menu-header"](ke)]), X && p(Kl, K({ key: "combobox-list", ref: U, filterable: true, selected: Y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Ge) => Ge.preventDefault(), selectable: !!T.value.length, onFocusout: le, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Le.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ne, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? p(xn, { key: "no-data", title: l(e.noDataText) }, null)), p(Tr, { ref: c, renderless: true, items: T.value, itemKey: "value" }, { default: (Ge) => {
          var _a5, _b3, _c3;
          let { item: Ne, index: ft, itemRef: lt } = Ge;
          const rn = K(Ne.props, { ref: lt, key: Ne.value, active: O.value && Ne === j.value ? true : void 0, onClick: () => se(Ne, null), "aria-posinset": ft + 1, "aria-setsize": T.value.length });
          return Ne.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Ne.raw, index: ft })) ?? p(mn, K(Ne.props, { key: `divider-${ft}` }), null) : Ne.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Ne.raw, index: ft })) ?? p(lo, K(Ne.props, { key: `subheader-${ft}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Ne, index: ft, props: rn })) ?? p(xn, K(rn, { role: "option" }), { prepend: (ka) => {
            let { isSelected: st } = ka;
            return b(ge, null, [e.multiple && !e.hideSelected ? p(En, { key: Ne.value, modelValue: st, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (pn) => pn.preventDefault() }, null) : void 0, Ne.props.prependAvatar && p(hn, { image: Ne.props.prependAvatar }, null), Ne.props.prependIcon && p(Ye, { icon: Ne.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Ne.title : jc("v-combobox", Ne.title, (_a6 = M(Ne)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && b("footer", { ref: ye }, [a["menu-footer"](ke)])] })] }), I.value.map((Ge, Ne) => {
        function ft(st) {
          st.stopPropagation(), st.preventDefault(), se(Ge, false);
        }
        const lt = K(fa.filterProps(Ge.props), { "onClick:close": ft, onKeydown(st) {
          st.key !== "Enter" && st.key !== " " || (st.preventDefault(), st.stopPropagation(), ft(st));
        }, onMousedown(st) {
          st.preventDefault(), st.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), rn = g.value ? !!a.chip : !!a.selection, ka = rn ? br(g.value ? a.chip({ item: Ge, index: Ne, props: lt }) : a.selection({ item: Ge, index: Ne })) : void 0;
        if (!(rn && !ka)) return b("div", { key: Ge.value, class: ee(["v-combobox__selection", Ne === d.value && ["v-combobox__selection--selected", y.value]]), style: ve(Ne === d.value ? h.value : {}) }, [g.value ? a.chip ? p(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: Ge.title } } }, { default: () => [ka] }) : p(fa, K({ key: "chip", closable: w.value, size: "small", text: Ge.title, disabled: Ge.props.disabled }, lt), null) : ka ?? b("span", { class: "v-combobox__selection-text" }, [Ge.title, e.multiple && Ne < I.value.length - 1 && b("span", { class: "v-combobox__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ve = arguments.length, Le = new Array(Ve), Ge = 0; Ge < Ve; Ge++) Le[Ge] = arguments[Ge];
      return b(ge, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Le), (!e.hideNoData || e.items.length) && e.menuIcon ? p(Ye, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: he, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && p(k, { key: "append-icon", name: "appendInner", color: Le[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: se }, o);
} }), pA = z({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), SA = J()({ name: "VConfirmEdit", props: pA(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = q();
  ct(() => {
    o.value = structuredClone(If(l.value));
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
    o.value = structuredClone(If(l.value)), n("cancel");
  }
  function m(v) {
    return b(ge, null, [p(ze, K({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, v), null), p(ze, K({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, v), null)]);
  }
  let S = false;
  return te(() => {
    var _a3;
    return b(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, m;
    } }), !e.hideActions && !S && m()]);
  }), { save: d, cancel: f, isPristine: r };
} }), nb = z({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), ab = Symbol.for("vuetify:datatable:expanded");
function Fr(e) {
  const t = B(() => e.expandOnClick), n = we(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  return rt(ab, i), i;
}
function lb() {
  const e = We(ab);
  if (!e) throw new Error("foo");
  return e;
}
const ed = z({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), ob = Symbol.for("vuetify:data-table-group");
function td(e) {
  return { groupBy: we(e, "groupBy") };
}
function Rr(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = q(/* @__PURE__ */ new Set()), o = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
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
  return rt(ob, u), u;
}
function ib() {
  const e = We(ob);
  if (!e) throw new Error("Missing group!");
  return e;
}
function kA(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ol(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function rb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = kA(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? rb(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function sb(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...sb(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Or(e, t, n, a) {
  const l = _(() => t.value.length ? rb(nt(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? sb(l.value, n.value, nt(a)) : nt(e));
  return { groups: l, flatItems: o };
}
function Nr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = St("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  re(r, (u) => {
    Dt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const nd = z({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), ub = Symbol.for("vuetify:data-table-pagination");
function ad(e) {
  const t = we(e, "page", void 0, (a) => Number(a ?? 1)), n = we(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function ld(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  re([t, i], () => {
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
  return rt(ub, d), d;
}
function wA() {
  const e = We(ub);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function cb(e) {
  const t = St("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? nt(n) : nt(n).slice(a.value, l.value));
  return re(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function xA(e) {
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
const CA = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, db = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return db.select({ items: n, value: t, selected: a });
} }, _A = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, fb = z({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), vb = Symbol.for("vuetify:data-table-selection");
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
        return CA;
      case "all":
        return _A;
      case "page":
      default:
        return db;
    }
  }), s = ie(null);
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
  }), h = { toggleSelect: f, select: d, selectAll: m, isSelected: u, isSomeSelected: c, someSelected: S, allSelected: v, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return rt(vb, h), h;
}
function zr() {
  const e = We(vb);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const mb = z({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), gb = Symbol.for("vuetify:data-table-sort");
function Wr(e) {
  const t = B(() => e.initialSortOrder), n = we(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function VA(e, t) {
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
      const { active: v, mode: y } = VA(l.value, c);
      v ? y === "prepend" ? d.unshift({ key: u.key, order: m }) : d.push({ key: u.key, order: m }) : d = [{ key: u.key, order: m }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return rt(gb, s), s;
}
function hb() {
  const e = We(gb);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function od(e, t, n, a) {
  const l = Qe();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? IA(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function IA(e, t, n, a) {
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
const PA = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function AA(e, t) {
  const n = e.returnObject ? t : pt(t, e.itemValue), a = pt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function TA(e, t) {
  const n = [];
  for (const a of t) n.push(AA(e, a));
  return n;
}
function DA(e) {
  return { items: _(() => TA(e, e.items)) };
}
const EA = z({ search: String, loading: Boolean, itemsLength: [Number, String], ...pe(), ...PA(), ...fb(), ...mb(), ...nd({ itemsPerPage: 5 }), ...nb(), ...ed(), ...wl(), ...Me(), ...ha({ transition: { component: Ho, hideOnLeave: true } }) }, "VDataIterator"), MA = J()({ name: "VDataIterator", props: EA(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "groupBy"), l = B(() => e.search), { items: o } = DA(e), { filteredItems: i } = xl(e, o, l, { transform: (U) => U.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Wr(e), { page: d, itemsPerPage: f } = ad(e), { toggleSort: m } = jr({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: S, opened: v, extractRows: y, isGroupOpen: h, toggleGroup: k } = Rr({ groupBy: a, sortBy: s }), { sortedItems: I } = od(e, i, S, { transform: (U) => U.raw }), { flatItems: V } = Or(I, a, v, false), w = B(() => !vo(e.itemsLength)), g = B(() => w.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: x, pageCount: A, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = ld({ page: d, itemsPerPage: f, itemsLength: g }), T = ie([]), F = _(() => w.value ? V.value : T.value);
  $t(() => !w.value, () => {
    const { paginatedItems: U } = cb({ items: V, startIndex: C, stopIndex: x, itemsPerPage: f });
    ct(() => {
      T.value = U.value;
    });
  });
  const W = _(() => y(F.value)), { isSelected: N, select: Z, selectAll: R, toggleSelect: $ } = Hr(e, { allItems: o, currentPage: W }), { isExpanded: Y, toggleExpand: j } = Fr(e);
  Nr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const O = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: m, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: N, select: Z, selectAll: R, toggleSelect: $, isExpanded: Y, toggleExpand: j, isGroupOpen: h, toggleGroup: k, items: W.value, itemsCount: i.value.length, groupedItems: F.value }));
  return te(() => p(e.tag, { class: ee(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ve(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, O.value), p(Kt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? p(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (U) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, U);
      } }) : b("div", { key: "items" }, [F.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, O.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, O.value)];
  } })), {};
} });
function BA() {
  const e = q([]);
  Em(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const $A = z({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ce, default: "$first" }, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, lastIcon: { type: Ce, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...zt(), ...pe(), ...gt(), ...xt(), ...it(), ...Jn(), ...Me({ tag: "nav" }), ...Ue(), ...bn({ variant: "text" }) }, "VPagination"), pu = J()({ name: "VPagination", props: $A(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = we(e, "modelValue"), { t: o, n: i } = Qe(), { isRtl: r } = _t(), { themeClasses: s } = qe(e), { width: u } = on(), c = ie(-1);
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
    if (f.value <= S.value) return Nn(f.value, m.value);
    const x = S.value % 2 === 0, A = x ? S.value / 2 : Math.floor(S.value / 2), P = x ? A : A + 1, E = f.value - A;
    if (P - l.value >= 0) return [...Nn(Math.max(1, S.value - 1), m.value), e.ellipsis, f.value];
    if (l.value - E >= (x ? 1 : 0)) {
      const D = S.value - 1, M = f.value - D + m.value;
      return [m.value, e.ellipsis, ...Nn(D, M)];
    } else {
      const D = Math.max(1, S.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + m.value;
      return [m.value, e.ellipsis, ...Nn(D, M), e.ellipsis, f.value];
    }
  });
  function h(x, A, P) {
    x.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: k, updateRef: I } = BA();
  mt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
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
    x.key === zs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ee(g)) : x.key === zs.right && !e.disabled && l.value < m.value + f.value - 1 && (l.value = l.value + 1, Ee(g));
  }
  return te(() => p(e.tag, { ref: d, class: ee(["v-pagination", s.value, e.class]), style: ve(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [b("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && b("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(w.value.first) : p(ze, K({ _as: "VPaginationBtn" }, w.value.first), null)]), b("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(w.value.prev) : p(ze, K({ _as: "VPaginationBtn" }, w.value.prev), null)]), V.value.map((x, A) => b("li", { key: x.key, class: ee(["v-pagination__item", { "v-pagination__item--is-active": x.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(x) : p(ze, K({ _as: "VPaginationBtn" }, x.props), { default: () => [x.page] })])), b("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(w.value.next) : p(ze, K({ _as: "VPaginationBtn" }, w.value.next), null)]), e.showFirstLastPage && b("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(w.value.last) : p(ze, K({ _as: "VPaginationBtn" }, w.value.last), null)])])] })), {};
} }), id = z({ color: String, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, firstIcon: { type: Ce, default: "$first" }, lastIcon: { type: Ce, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ko = J()({ name: "VDataTableFooter", props: id(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = wA(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return te(() => {
    var _a3;
    const f = pu.filterProps(e);
    return b("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), b("div", { class: "v-data-table-footer__items-per-page" }, [b("span", null, [a(e.itemsPerPageText)]), p(Yc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (m) => c(Number(m)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), b("div", { class: "v-data-table-footer__info" }, [b("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), b("div", { class: "v-data-table-footer__pagination" }, [p(pu, K({ modelValue: l.value, "onUpdate:modelValue": (m) => l.value = m, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Fe(f, ["color"])), null)])]);
  }), {};
} }), qo = N0({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return p(a, { class: ee(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: de(e.height), width: de(e.width), maxWidth: de(e.maxWidth), left: l === "start" ? de(e.fixedOffset || null) : void 0, right: l === "end" ? de(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? de(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), LA = z({ headers: Array }, "DataTable-header"), yb = Symbol.for("vuetify:data-table-headers"), bb = { title: "", sortable: false }, FA = { ...bb, width: 48 };
function RA() {
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
function Su(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) Su(n, t);
  return t;
}
function pb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && pb(n.children, t);
  return t;
}
function OA(e) {
  if (e.key) {
    if (e.key === "data-table-group") return bb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return FA;
  }
}
function rd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => rd(n, t + 1))) : t;
}
function NA(e) {
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
  for (let o = 0; o < e.length; o++) a = Sb(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = kb(e[o], l);
}
function Sb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Sb(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function kb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = kb(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function HA(e, t) {
  const n = [];
  let a = 0;
  const l = RA(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - rd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? Su(u).length : 1 }), u.children) for (const f of u.children) {
        const m = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + m);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => Su(i)).flat(), headers: n };
}
function wb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...OA(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? wb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function sd(e, t) {
  const n = q([]), a = q([]), l = q({}), o = q({}), i = q({});
  ct(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((v) => ({ key: v, title: Yn(v) }))).slice(), c = pb(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = wb(u);
    NA(d);
    const f = Math.max(...d.map((v) => rd(v))) + 1, m = HA(d, f);
    n.value = m.headers, a.value = m.columns;
    const S = m.headers.flat(1);
    for (const v of S) v.key && (v.sortable && (v.sort && (l.value[v.key] = v.sort), v.sortRaw && (o.value[v.key] = v.sortRaw)), v.filter && (i.value[v.key] = v.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return rt(yb, r), r;
}
function Ur() {
  const e = We(yb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const xb = z({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ce }, sortAscIcon: { type: Ce, default: "$sortAsc" }, sortDescIcon: { type: Ce, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...gt(), ...gl(), ...Vr() }, "VDataTableHeaders"), cl = J()({ name: "VDataTableHeaders", props: xb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { toggleSort: l, sortBy: o, isSorted: i } = hb(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = zr(), { columns: d, headers: f } = Ur(), { loaderClasses: m } = ri(e);
  function S(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const E = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? de(A.fixedOffset) : void 0, right: E === "end" ? de(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
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
    const M = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, F = K(e.headerProps ?? {}, P.headerProps ?? {});
    return p(qo, K({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: de(P.width), minWidth: de(P.minWidth), maxWidth: de(P.maxWidth), ...S(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (W) => l(P, W) : void 0, onKeydown: P.sortable ? (W) => v(W, P) : void 0 }, F), { default: () => {
      var _a3;
      const W = `header.${P.key}`, N = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: y };
      return n[W] ? n[W](N) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, N)) ?? (c.value && p(En, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : b("div", { class: "v-data-table-header__content" }, [b("span", null, [P.title]), P.sortable && !e.disableSort && p(Ye, { key: "icon", class: "v-data-table-header__sort-icon", icon: y(P) }, null), e.multiSort && i(P) && b("div", { key: "badge", class: ee(["v-data-table-header__sort-badge", ...h.value]), style: ve(k.value) }, [o.value.findIndex((Z) => Z.key === P.key) + 1])]);
    } });
  }, x = () => {
    const A = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return p(qo, K({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [b("div", { class: "v-data-table-header__content" }, [p(Yc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => p(En, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return p(fa, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, p(Ye, { class: ee(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: y(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  te(() => V.value ? b("tr", null, [p(x, null, null)]) : b(ge, null, [n.headers ? n.headers(w.value) : f.value.map((A, P) => b("tr", null, [A.map((E, D) => p(C, { column: E, x: D, y: P }, null))])), e.loading && b("tr", { class: "v-data-table-progress" }, [b("th", { colspan: d.value.length }, [p(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Cb = z({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ce, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ce, default: "$tableGroupExpand" }, ...gt() }, "VDataTableGroupHeaderRow"), zA = J()({ name: "VDataTableGroupHeaderRow", props: Cb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = ib(), { isSelected: i, isSomeSelected: r, select: s } = zr(), { columns: u } = Ur(), c = _(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
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
} }), _b = z({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...gt(), ...gl() }, "VDataTableRow"), ud = J()({ name: "VDataTableRow", props: _b(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = on(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = zr(), { isExpanded: c, toggleExpand: d } = lb(), { toggleSort: f, sortBy: m, isSorted: S } = hb(), { columns: v } = Ur();
  te(() => b("tr", { class: ee(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && v.value.map((y, h) => {
    const k = e.item, I = `item.${y.key}`, V = `header.${y.key}`, w = { index: e.index, item: k.raw, internalItem: k, value: ol(k.columns, y.key), column: y, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, g = { column: y, selectAll: u, isSorted: S, toggleSort: f, sortBy: m.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value, column: y }) : e.cellProps, x = typeof y.cellProps == "function" ? y.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value }) : y.cellProps, A = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
    return p(qo, K({ align: y.align, indent: y.indent, class: { "v-data-table__td--expanded-row": y.key === "data-table-expand", "v-data-table__td--select-row": y.key === "data-table-select" }, fixed: y.fixed, fixedOffset: y.fixedOffset, fixedEndOffset: y.fixedEndOffset, lastFixed: y.lastFixed, firstFixedEnd: y.firstFixedEnd, maxWidth: l.value ? void 0 : y.maxWidth, noPadding: A, empty: P, nowrap: y.nowrap, width: l.value ? void 0 : y.width }, C, x), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (y.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...w, props: { color: e.color, disabled: !k.selectable, modelValue: o([k]), onClick: Si(() => i(k), ["stop"]) } })) ?? p(En, { color: e.color, disabled: !k.selectable, density: e.density, modelValue: o([k]), onClick: Si((D) => i(k, e.index, D), ["stop"]) }, null);
      if (y.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...w, props: { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) } })) ?? p(ze, { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](w);
      const E = Ie(w.value);
      return l.value ? b(ge, null, [b("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? y.title]), b("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, w)) ?? E])]) : E;
    } });
  })]));
} }), Vb = z({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...tn(_b(), ["collapseIcon", "expandIcon", "density"]), ...tn(Cb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...gl() }, "VDataTableRows"), dl = J()({ name: "VDataTableRows", inheritAttrs: false, props: Vb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = Ur(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = lb(), { isSelected: s, toggleSelect: u } = zr(), { toggleGroup: c, isGroupOpen: d } = ib(), { t: f } = Qe(), { mobile: m } = on(e);
  return te(() => {
    var _a3, _b2;
    const S = tn(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? b("tr", { class: "v-data-table-rows-loading", key: "loading" }, [b("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? b("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [b("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : b(ge, null, [e.items.map((v, y) => {
      var _a4, _b3;
      if (v.type === "group") {
        const I = { index: y, item: v, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : p(zA, K({ key: `group-header_${v.id}`, item: v }, vn(n, ":groupHeader", () => I), S), a);
      }
      if (v.type === "group-summary") {
        const I = { index: y, item: v, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: v.virtualIndex ?? y, item: v.raw, internalItem: v, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, k = { ...h, props: K({ key: `item_${v.key ?? v.index}`, onClick: o.value ? () => {
        i(v);
      } : void 0, index: y, item: v, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: m.value }, vn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return b(ge, { key: k.props.key }, [a.item ? a.item(k) : p(ud, k.props, a), r(v) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), Ib = z({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...pe(), ...gt(), ...Me(), ...Ue() }, "VTable"), fl = J()({ name: "VTable", props: Ib(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = qe(e), { densityClasses: o } = Ft(e);
  return te(() => p(e.tag, { class: ee(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? b("div", { class: "v-table__wrapper", style: { height: de(e.height) } }, [b("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), WA = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function jA(e, t, n, a) {
  const l = e.returnObject ? t : pt(t, e.itemValue), o = pt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = pt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? pt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function UA(e, t, n) {
  return t.map((a, l) => jA(e, a, l, n));
}
function cd(e, t) {
  return { items: _(() => UA(e, e.items, t.value)) };
}
const dd = z({ ...Vb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...nb(), ...ed(), ...LA(), ...WA(), ...fb(), ...mb(), ...Fe(xb(), ["multiSort", "initialSortOrder"]), ...Ib() }, "DataTable"), GA = z({ ...nd(), ...dd(), ...wl(), ...id() }, "VDataTable"), YA = J()({ name: "VDataTable", props: GA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: u, itemsPerPage: c } = ad(e), { disableSort: d } = Zl(e), { columns: f, headers: m, sortFunctions: S, sortRawFunctions: v, filterFunctions: y } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = cd(e, f), k = B(() => e.search), { filteredItems: I } = xl(e, h, k, { transform: (ae) => ae.columns, customKeyFilter: y }), { toggleSort: V } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: w, opened: g, extractRows: C, isGroupOpen: x, toggleGroup: A } = Rr({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = od(e, I, w, { transform: (ae) => ({ ...ae.raw, ...ae.columns }), sortFunctions: S, sortRawFunctions: v }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: T } = xA({ pageBy: E, sortedItems: P, paginate: (ae) => {
    const ye = _(() => nt(ae).length), { startIndex: ne, stopIndex: fe, pageCount: Ae, setItemsPerPage: xe } = ld({ page: u, itemsPerPage: c, itemsLength: ye }), { paginatedItems: he } = cb({ items: ae, startIndex: ne, stopIndex: fe, itemsPerPage: c });
    return { paginatedItems: he, pageCount: Ae, setItemsPerPage: xe };
  }, group: (ae) => Or(ae, l, g, () => !!a["group-summary"]) }), F = _(() => C(T.value)), { isSelected: W, select: N, selectAll: Z, toggleSelect: R, someSelected: $, allSelected: Y } = Hr(e, { allItems: h, currentPage: F }), { isExpanded: j, toggleExpand: O } = Fr(e);
  Nr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: k }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const U = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: M, someSelected: $.value, allSelected: Y.value, isSelected: W, select: N, selectAll: Z, toggleSelect: R, isExpanded: j, toggleExpand: O, isGroupOpen: x, toggleGroup: A, items: F.value.map((ae) => ae.raw), internalItems: F.value, groupedItems: T.value, columns: f.value, headers: m.value }));
  return te(() => {
    const ae = Ko.filterProps(e), ye = cl.filterProps(Fe(e, ["multiSort"])), ne = dl.filterProps(e), fe = fl.filterProps(e);
    return p(fl, K({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, U.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(U.value) : b(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, U.value), !e.hideDefaultHeader && b("thead", { key: "thead" }, [p(cl, K(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, U.value), !e.hideDefaultBody && b("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, U.value), a.body ? a.body(U.value) : p(dl, K(n, ne, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, U.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, U.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, U.value)]);
    }, bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && b(ge, null, [p(mn, null, null), p(Ko, ae, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), KA = z({ ...Fe(dd(), ["hideDefaultFooter"]), ...ed(), ...gy(), ...wl() }, "VDataTableVirtual"), qA = J()({ name: "VDataTableVirtual", props: KA(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { disableSort: u } = Zl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: m, sortRawFunctions: S } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: v } = cd(e, c), y = B(() => e.search), { filteredItems: h } = xl(e, v, y, { transform: (he) => he.columns, customKeyFilter: f }), { toggleSort: k } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: w, isGroupOpen: g, toggleGroup: C } = Rr({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: x } = od(e, h, I, { transform: (he) => ({ ...he.raw, ...he.columns }), sortFunctions: m, sortRawFunctions: S }), { flatItems: A } = Or(x, l, V, () => !!a["group-summary"]), P = _(() => w(A.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: T, someSelected: F, allSelected: W } = Hr(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: Z } = Fr(e), { containerRef: R, markerRef: $, paddingTop: Y, paddingBottom: j, computedItems: O, handleItemResize: U, handleScroll: ae, handleScrollend: ye, calculateVisibleItems: ne, scrollToIndex: fe } = hy(e, A), Ae = _(() => O.value.map((he) => ({ ...he.raw, virtualIndex: he.index })));
  Nr({ sortBy: i, page: ie(1), itemsPerPage: ie(-1), groupBy: l, search: y }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const xe = _(() => ({ sortBy: i.value, toggleSort: k, someSelected: F.value, allSelected: W.value, isSelected: E, select: D, selectAll: M, toggleSelect: T, isExpanded: N, toggleExpand: Z, isGroupOpen: g, toggleGroup: C, items: P.value.map((he) => he.raw), internalItems: P.value, groupedItems: A.value, columns: c.value, headers: d.value }));
  return te(() => {
    const he = cl.filterProps(Fe(e, ["multiSort"])), L = dl.filterProps(e), H = fl.filterProps(e);
    return p(fl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, H, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, xe.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return b("div", { ref: R, onScrollPassive: ae, onScrollend: ye, class: "v-table__wrapper", style: { height: de(e.height) } }, [b("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, xe.value), !e.hideDefaultHeader && b("thead", { key: "thead" }, [p(cl, K(he, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, xe.value), !e.hideDefaultBody && b("tbody", { key: "tbody" }, [b("tr", { ref: $, style: { height: de(Y.value), border: 0 } }, [b("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, xe.value), p(dl, K(n, L, { items: Ae.value }), { ...a, item: (Q) => p(my, { key: Q.internalItem.index, renderless: true, "onUpdate:height": (ue) => U(Q.internalItem.index, ue) }, { default: (ue) => {
        var _a4;
        let { itemRef: oe } = ue;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...Q, itemRef: oe })) ?? p(ud, K(Q.props, { ref: oe, key: Q.internalItem.index, index: Q.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, xe.value), b("tr", { style: { height: de(j.value), border: 0 } }, [b("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, xe.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, xe.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, xe.value);
    } });
  }), { calculateVisibleItems: ne, scrollToIndex: fe };
} }), XA = z({ itemsLength: { type: [Number, String], required: true }, ...nd(), ...dd(), ...id() }, "VDataTableServer"), ZA = J()({ name: "VDataTableServer", props: XA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: u, itemsPerPage: c } = ad(e), { disableSort: d } = Zl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: m, headers: S } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: v } = cd(e, m), { toggleSort: y } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: k, toggleGroup: I, extractRows: V } = Rr({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: w, setItemsPerPage: g } = ld({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Or(v, l, h, () => !!a["group-summary"]), { isSelected: x, select: A, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = Hr(e, { allItems: v, currentPage: v }), { isExpanded: T, toggleExpand: F } = Fr(e), W = _(() => V(v.value));
  Nr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), rt("v-data-table", { toggleSort: y, sortBy: i }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: w.value, toggleSort: y, setItemsPerPage: g, someSelected: D.value, allSelected: M.value, isSelected: x, select: A, selectAll: P, toggleSelect: E, isExpanded: T, toggleExpand: F, isGroupOpen: k, toggleGroup: I, items: W.value.map((Z) => Z.raw), internalItems: W.value, groupedItems: C.value, columns: m.value, headers: S.value }));
  te(() => {
    const Z = Ko.filterProps(e), R = cl.filterProps(Fe(e, ["multiSort"])), $ = dl.filterProps(e), Y = fl.filterProps(e);
    return p(fl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Y, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, N.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(N.value) : b(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, N.value), !e.hideDefaultHeader && b("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [p(cl, K(R, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && b("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : p(dl, K(n, $, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && b(ge, null, [p(mn, null, null), p(Ko, Z, { prepend: a["footer.prepend"] })]) });
  });
} }), JA = z({ fluid: { type: Boolean, default: false }, ...pe(), ...kt(), ...Me() }, "VContainer"), QA = J()({ name: "VContainer", props: JA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = _t(), { dimensionStyles: l } = wt(e);
  return te(() => p(e.tag, { class: ee(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: ve([l.value, e.style]) }, n)), {};
} }), Pb = kr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Ab = kr.reduce((e, t) => {
  const n = "offset" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Tb = kr.reduce((e, t) => {
  const n = "order" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Iv = { col: Object.keys(Pb), offset: Object.keys(Ab), order: Object.keys(Tb) };
function eT(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const tT = ["auto", "start", "end", "center", "baseline", "stretch"], nT = z({ cols: { type: [Boolean, String, Number], default: false }, ...Pb, offset: { type: [String, Number], default: null }, ...Ab, order: { type: [String, Number], default: null }, ...Tb, alignSelf: { type: String, default: null, validator: (e) => tT.includes(e) }, ...pe(), ...Me() }, "VCol"), aT = J()({ name: "VCol", props: nT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Iv) Iv[o].forEach((r) => {
      const s = e[r], u = eT(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), fd = ["start", "end", "center"], Db = ["space-between", "space-around", "space-evenly"];
function vd(e, t) {
  return kr.reduce((n, a) => {
    const l = e + Yn(a);
    return n[l] = t(), n;
  }, {});
}
const lT = [...fd, "baseline", "stretch"], Eb = (e) => lT.includes(e), Mb = vd("align", () => ({ type: String, default: null, validator: Eb })), oT = [...fd, ...Db], Bb = (e) => oT.includes(e), $b = vd("justify", () => ({ type: String, default: null, validator: Bb })), iT = [...fd, ...Db, "stretch"], Lb = (e) => iT.includes(e), Fb = vd("alignContent", () => ({ type: String, default: null, validator: Lb })), Pv = { align: Object.keys(Mb), justify: Object.keys($b), alignContent: Object.keys(Fb) }, rT = { align: "align", justify: "justify", alignContent: "align-content" };
function sT(e, t, n) {
  let a = rT[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const uT = z({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Eb }, ...Mb, justify: { type: String, default: null, validator: Bb }, ...$b, alignContent: { type: String, default: null, validator: Lb }, ...Fb, ...pe(), ...Me() }, "VRow"), cT = J()({ name: "VRow", props: uT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Pv) Pv[o].forEach((i) => {
      const r = e[i], s = sT(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), ku = ga("v-spacer", "div", "VSpacer"), Rb = z({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, modeIcon: { type: Ce, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), wu = J()({ name: "VDatePickerControls", props: Rb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
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
  return te(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, k = p(ze, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = p(ze, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = p(ze, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: m }, null), w = p(ze, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), g = p(ze, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), C = p(ze, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null), x = p(ze, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null), A = b(ge, null, [p(ze, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), p(ze, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: v }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: y, openYears: v, prevMonth: d, nextMonth: f, prevYear: m, nextYear: S }, E = b(ge, null, [e.noMonthPicker ? x : A, p(ku, null, null), b("div", { class: "v-date-picker-controls__month" }, [k, I])]), D = b(ge, null, [b("div", { class: "v-date-picker-controls__month" }, [k, g, I]), p(ku, null, null), b("div", { class: "v-date-picker-controls__year" }, [V, C, w])]);
    return p(Be, { defaults: h }, { default: () => {
      var _a3;
      return [b("div", { class: ee(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": de(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? b(ge, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), dT = z({ appendIcon: Ce, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), xu = J()({ name: "VDatePickerHeader", props: dT(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return te(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return b("div", { class: ee(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: ve(o.value), onClick: i }, [a.prepend && b("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && p(Kt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [b("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && b("div", { class: "v-date-picker-header__append" }, [a.append ? p(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : p(ze, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), fT = z({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function vT(e) {
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
  }), d = _(() => r.value.map((v) => v.length ? t.getWeek(v[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: m } = Ob(e);
  function S(v) {
    if (e.disabled) return true;
    const y = t.date(v);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || m.value && t.isAfter(y, m.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function Ob(e) {
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
const Nb = z({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Fe(fT(), ["displayValue"]) }, "VDatePickerMonth"), Cu = J()({ name: "VDatePickerMonth", props: Nb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = q(), { t: o } = Qe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = vT(e), c = ml(), d = ie(), f = ie(), m = ie(false), S = B(() => m.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const v = _(() => {
    const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= g;
  });
  re(i, (g, C) => {
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
      r.value = jx(c, d.value, f.value);
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
    return C.length ? b("div", { class: "v-date-picker-month__events" }, [C.map((x) => p(yy, { dot: true, color: x }, null))]) : null;
  }
  te(() => b("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && b("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && b("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Ke("\xA0")]), s.value.map((g) => b("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), p(Kt, { name: S.value }, { default: () => {
    var _a3;
    return [b("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((g) => b("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), i.value.map((g, C) => {
      var _a4;
      const x = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return v.value && !g.isSelected && (g.isDisabled = true), b("div", { class: ee(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, x)) ?? p(ze, x.props, { default: () => [g.localized, w(g.isoDate)] }))]);
    })])];
  } })]));
} }), Hb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), _u = J()({ name: "VDatePickerMonths", props: Hb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Nn(12).map((u) => {
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
  return te(() => b("div", { class: "v-date-picker-months", style: { height: de(e.height) } }, [b("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? p(ze, K({ key: "month" }, c), null);
  })])])), {};
} }), zb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Vu = J()({ name: "VDatePickerYears", props: zb(), directives: { vIntersect: Dn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = ie(false), r = _(() => {
    const f = l.getYear(l.date());
    let m = f - 100, S = f + 52;
    e.min && (m = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let v = l.startOfYear(l.date());
    return v = l.setYear(v, m), Nn(S - m + 1, m).map((y) => {
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
  return te(() => at(b("div", { class: "v-date-picker-years", ref: s, style: { height: de(e.height) } }, [b("div", { class: "v-date-picker-years__content", onFocus: () => {
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
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: m, props: S })) ?? p(ze, K({ key: "month" }, S), null);
  })])]), [[Dn, { handler: c }, null, { once: true }]])), {};
} }), mT = z({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Fe(Rb(), ["active", "monthText", "yearText"]), ...Nb({ weeksInMonth: "static" }), ...Fe(Hb(), ["modelValue"]), ...Fe(zb(), ["modelValue"]), ...Lr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), gT = J()({ name: "VDatePicker", props: mT(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), { t: o } = Qe(), { rtlClasses: i } = _t(), r = we(e, "modelValue", void 0, (U) => ot(U).map((ae) => l.date(ae)), (U) => e.multiple ? U : U[0]), s = we(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = Ob(e), f = _(() => {
    var _a3;
    const U = l.date(), ae = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(U);
    return ae && l.isValid(ae) ? ae : U;
  }), m = B(() => e.headerColor ?? e.color), S = we(e, "month"), v = _({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (U) => S.value = U }), y = we(e, "year"), h = _({ get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, v.value)))), set: (U) => y.value = U }), k = ie(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const U = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && U.split(" ").length === 3 ? U.replace(" ", `
`) : U;
  }), V = B(() => {
    let U = l.date();
    return U = l.setDate(U, 1), U = l.setMonth(U, v.value), U = l.setYear(U, h.value), U;
  }), w = B(() => l.format(V.value, "monthAndYear")), g = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), x = B(() => `date-picker-header${k.value ? "-reverse" : ""}-transition`), A = _(() => {
    if (e.disabled) return true;
    const U = [];
    if (s.value !== "month") U.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ae = l.date();
      if (ae = l.startOfMonth(ae), ae = l.setMonth(ae, v.value), ae = l.setYear(ae, h.value), u.value) {
        const ye = l.addDays(l.startOfMonth(ae), -1), ne = l.addDays(l.startOfYear(ae), -1);
        l.isAfter(u.value, ye) && U.push("prev-month"), l.isAfter(u.value, ne) && U.push("prev-year");
      }
      if (c.value) {
        const ye = l.addDays(l.endOfMonth(ae), 1), ne = l.addDays(l.endOfYear(ae), 1);
        l.isAfter(ye, c.value) && U.push("next-month"), l.isAfter(ne, c.value) && U.push("next-year");
      }
    }
    return U;
  }), P = _(() => e.allowedYears || M), E = _(() => e.allowedMonths || T);
  function D(U, ae) {
    const ye = e.allowedDates;
    if (typeof ye != "function") return true;
    const ne = 1 + eh(l, U, ae);
    for (let fe = 0; fe < ne; fe++) if (ye(l.addDays(U, fe))) return true;
    return false;
  }
  function M(U) {
    if (typeof e.allowedDates == "function") {
      const ae = l.parseISO(`${U}-01-01`);
      return D(ae, l.endOfYear(ae));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ae of e.allowedDates) if (l.getYear(l.date(ae)) === U) return true;
      return false;
    }
    return true;
  }
  function T(U) {
    if (typeof e.allowedDates == "function") {
      const ae = String(U + 1).padStart(2, "0"), ye = l.parseISO(`${h.value}-${ae}-01`);
      return D(ye, l.endOfMonth(ye));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ae of e.allowedDates) if (l.getYear(l.date(ae)) === h.value && l.getMonth(l.date(ae)) === U) return true;
      return false;
    }
    return true;
  }
  function F() {
    v.value < 11 ? v.value++ : (h.value++, v.value = 0, O()), j();
  }
  function W() {
    v.value > 0 ? v.value-- : (h.value--, v.value = 11, O()), j();
  }
  function N() {
    if (h.value++, c.value) {
      const U = String(v.value + 1).padStart(2, "0"), ae = l.parseISO(`${h.value}-${U}-01`);
      l.isAfter(ae, c.value) && (v.value = l.getMonth(c.value));
    }
    O();
  }
  function Z() {
    if (h.value--, u.value) {
      const U = String(v.value + 1).padStart(2, "0"), ae = l.endOfMonth(l.parseISO(`${h.value}-${U}-01`));
      l.isAfter(u.value, ae) && (v.value = l.getMonth(u.value));
    }
    O();
  }
  function R() {
    s.value = "month";
  }
  function $() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function Y() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function j() {
    s.value === "months" && $();
  }
  function O() {
    s.value === "year" && Y();
  }
  return re(r, (U, ae) => {
    const ye = ot(ae), ne = ot(U);
    if (!ne.length) return;
    const fe = l.date(ye[ye.length - 1]), Ae = l.date(ne[ne.length - 1]);
    if (l.isSameDay(fe, Ae)) return;
    const xe = l.getMonth(Ae), he = l.getYear(Ae);
    xe !== v.value && (v.value = xe, j()), he !== h.value && (h.value = he, O()), k.value = l.isBefore(fe, Ae);
  }), te(() => {
    const U = Xl.filterProps(e), ae = Fe(wu.filterProps(e), ["viewMode"]), ye = xu.filterProps(e), ne = Cu.filterProps(e), fe = Fe(_u.filterProps(e), ["modelValue"]), Ae = Fe(Vu.filterProps(e), ["modelValue"]), xe = { color: m.value, header: I.value, transition: x.value };
    return p(Xl, K(U, { color: m.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": de(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? b("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? p(Be, { defaults: { VDatePickerHeader: { ...xe } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, xe)];
    } }) : p(xu, K({ key: "header" }, ye, xe, { onClick: s.value !== "month" ? R : void 0 }), { prepend: a.prepend, append: a.append }), default: () => b(ge, null, [p(wu, K(ae, { disabled: A.value, viewMode: s.value, text: w.value, monthText: g.value, yearText: C.value, "onClick:next": F, "onClick:prev": W, "onClick:nextYear": N, "onClick:prevYear": Z, "onClick:month": $, "onClick:year": Y }), { default: a.controls }), p(Ho, { hideOnLeave: true }, { default: () => [s.value === "months" ? p(_u, K({ key: "date-picker-months" }, fe, { modelValue: v.value, "onUpdate:modelValue": [(he) => v.value = he, j], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? p(Vu, K({ key: "date-picker-years" }, Ae, { modelValue: h.value, "onUpdate:modelValue": [(he) => h.value = he, O], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : p(Cu, K({ key: "date-picker-month" }, ne, { modelValue: r.value, "onUpdate:modelValue": (he) => r.value = he, month: v.value, "onUpdate:month": [(he) => v.value = he, j], year: h.value, "onUpdate:year": [(he) => h.value = he, O], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), hT = z({ actionText: String, bgColor: String, color: String, icon: Ce, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...pe(), ...kt(), ...Jn({ size: void 0 }), ...Ue() }, "VEmptyState"), yT = J()({ name: "VEmptyState", props: hT(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = on();
  function u(c) {
    n("click:action", c);
  }
  return te(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), m = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), v = e.size || (e.image ? 200 : 96);
    return b("div", { class: ee(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: ve([i.value, r.value, e.style]) }, [S && b("div", { key: "media", class: "v-empty-state__media" }, [a.media ? p(Be, { key: "media-defaults", defaults: { VImg: { src: e.image, height: v }, VIcon: { size: v, icon: e.icon } } }, { default: () => [a.media()] }) : b(ge, null, [e.image ? p(da, { key: "image", src: e.image, height: v }, null) : e.icon ? p(Ye, { key: "icon", color: e.color, size: v, icon: e.icon }, null) : void 0])]), d && b("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && b("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), m && b("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: de(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && b("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && b("div", { key: "actions", class: "v-empty-state__actions" }, [p(Be, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? p(ze, { onClick: u }, null)];
    } })])]);
  }), {};
} }), Xo = Symbol.for("vuetify:v-expansion-panel"), Wb = z({ ...pe(), ...Rc() }, "VExpansionPanelText"), Iu = J()({ name: "VExpansionPanelText", props: Wb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Oc(e, a.isSelected);
  return te(() => p(Cr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [at(b("div", { class: ee(["v-expansion-panel-text", e.class]), style: ve(e.style) }, [n.default && l.value && b("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Mn, a.isSelected.value]])];
  } })), {};
} }), jb = z({ color: String, expandIcon: { type: Ce, default: "$expand" }, collapseIcon: { type: Ce, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...pe(), ...kt() }, "VExpansionPanelTitle"), Pu = J()({ name: "VExpansionPanelTitle", directives: { vRipple: Lt }, props: jb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return te(() => {
    var _a3;
    return at(b("button", { class: ee(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: ve([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [b("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && p(Be, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [b("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? p(Ye, null, null)])];
    } })]), [[Lt, e.ripple]]);
  }), {};
} }), Ub = z({ title: String, text: String, bgColor: String, ...xt(), ...Sl(), ...it(), ...Me(), ...jb(), ...Wb() }, "VExpansionPanel"), bT = J()({ name: "VExpansionPanel", props: Ub(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Xo), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, m, S) => (a.group.selected.value.includes(m.id) && f.push(S), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((m) => m.id === a.id);
    return !a.isSelected.value && u.value.some((m) => m - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((m) => m.id === a.id);
    return !a.isSelected.value && u.value.some((m) => m - f === -1);
  });
  return rt(Xo, a), te(() => {
    const f = !!(n.text || e.text), m = !!(n.title || e.title), S = Pu.filterProps(e), v = Iu.filterProps(e);
    return p(e.tag, { class: ee(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: ve([o.value, e.style]) }, { default: () => [b("div", { class: ee(["v-expansion-panel__shadow", ...i.value]) }, null), p(Be, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...v } } }, { default: () => {
      var _a3;
      return [m && p(Pu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && p(Iu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), pT = ["default", "accordion", "inset", "popout"], ST = z({ flat: Boolean, ...pl(), ...tn(Ub(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ue(), ...pe(), ...Me(), variant: { type: String, default: "default", validator: (e) => pT.includes(e) } }, "VExpansionPanels"), kT = J()({ name: "VExpansionPanels", props: ST(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Na(e, Xo), { themeClasses: o } = qe(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return mt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), te(() => p(e.tag, { class: ee(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), wT = z({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Fe(Ir({ active: true }), ["location", "spaced"]), ...hl(), ...Zn(), ...ha({ transition: "fab-transition" }) }, "VFab"), xT = J()({ name: "VFab", props: wT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = ie(56), o = q(), { resizeRef: i } = wn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  $t(() => e.app, () => {
    const d = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: B(() => e.absolute) });
    ct(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = q();
  return te(() => {
    const d = ze.filterProps(e);
    return b("div", { ref: c, class: ee(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: ve([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [b("div", { class: "v-fab__container" }, [p(Kt, { appear: e.appear, transition: e.transition }, { default: () => [at(p(ze, K({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Mn, e.active]])] })])]);
  }), {};
} });
function CT() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await Gb(o, Yb(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function Gb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await Gb(r, Yb(t, r)));
      n(i);
    });
  });
}
function Yb(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const _T = z({ filterByType: String }, "file-accept");
function VT(e) {
  const t = _(() => e.filterByType ? IT(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function IT(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const PT = z({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Fe(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ot(e).every((t) => t != null && typeof t == "object") }, ..._T(), ...mi({ clearable: true }) }, "VFileInput"), AT = J()({ name: "VFileInput", inheritAttrs: false, props: PT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { filterAccepted: i } = VT(e), r = we(e, "modelValue", e.modelValue, (R) => ot(R), (R) => !e.multiple && Array.isArray(R) ? R[0] : R), { isFocused: s, focus: u, blur: c } = pa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((R, $) => {
    let { size: Y = 0 } = $;
    return R + Y;
  }, 0)), m = _(() => _f(f.value, d.value)), S = _(() => (r.value ?? []).map((R) => {
    const { name: $ = "", size: Y = 0 } = R, j = M($);
    return e.showSize ? `${j} (${_f(Y, d.value)})` : j;
  })), v = _(() => {
    var _a3;
    const R = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, R, m.value) : o(e.counterString, R);
  }), y = q(), h = q(), k = q(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), w = ie(false), { handleDrop: g, hasFilesOrFolders: C } = CT();
  function x() {
    var _a3;
    k.value !== document.activeElement && ((_a3 = k.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function A(R) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click();
  }
  function P(R) {
    a("mousedown:control", R);
  }
  function E(R) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click(), a("click:control", R);
  }
  function D(R) {
    R.stopPropagation(), x(), Ee(() => {
      r.value = [], ai(e["onClick:clear"], R);
    });
  }
  function M(R) {
    if (R.length < Number(e.truncateLength)) return R;
    const $ = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${R.slice(0, $)}\u2026${R.slice(R.length - $)}`;
  }
  function T(R) {
    R.preventDefault(), R.stopImmediatePropagation(), w.value = true;
  }
  function F(R) {
    R.preventDefault(), w.value = false;
  }
  async function W(R) {
    if (R.preventDefault(), R.stopImmediatePropagation(), w.value = false, !k.value || !C(R)) return;
    const $ = await g(R);
    Z($);
  }
  function N(R) {
    if (!(!R.target || R.repack)) if (e.filterByType) Z([...R.target.files]);
    else {
      const $ = R.target;
      r.value = [...$.files ?? []];
    }
  }
  function Z(R) {
    const $ = new DataTransfer(), { accepted: Y, rejected: j } = i(R);
    j.length && a("rejected", j);
    for (const U of Y) $.items.add(U);
    k.value.files = $.files, r.value = [...$.files];
    const O = new Event("change", { bubbles: true });
    O.repack = true, k.value.dispatchEvent(O);
  }
  return re(r, (R) => {
    (!Array.isArray(R) || !R.length) && k.value && (k.value.value = "");
  }), te(() => {
    const R = !!(l.counter || e.counter), $ = !!(R || l.details), [Y, j] = qn(n), { modelValue: O, ...U } = Nt.filterProps(e), ae = { ...Fa.filterProps(e), "onClick:clear": D }, ye = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, ne = n.accept ? String(n.accept) : void 0, fe = ye ? void 0 : e.filterByType ?? ne;
    return p(Nt, K({ ref: y, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": w.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": A }, Y, U, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Ae) => {
      let { id: xe, isDisabled: he, isDirty: L, isReadonly: H, isValid: Q, hasDetails: ue } = Ae;
      return p(Fa, K({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ae, { id: xe.value, active: I.value || L.value, dirty: L.value || e.dirty, disabled: he.value, focused: s.value, details: ue.value, error: Q.value === false, onDragover: T, onDrop: W }), { ...l, default: (oe) => {
        var _a3;
        let { props: { class: se, ...be }, controlRef: ce } = oe;
        return b(ge, null, [b("input", K({ ref: (G) => k.value = ce.value = G, type: "file", accept: fe, readonly: H.value, disabled: he.value, multiple: e.multiple, name: e.name, onClick: (G) => {
          G.stopPropagation(), H.value && G.preventDefault(), x();
        }, onChange: N, onDragleave: F, onFocus: x, onBlur: c }, be, j), null), b("div", { class: ee(se) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: m.value }) : e.chips ? S.value.map((G) => p(fa, { key: G, size: "small", text: G }, null)) : S.value.join(", "))])]);
      } });
    }, details: $ ? (Ae) => {
      var _a3, _b2;
      return b(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Ae), R && b(ge, null, [b("span", null, null), p(Ar, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: v.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, y, h, k);
} }), TT = z({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...zt(), ...pe(), ...xt(), ...hl(), ...it(), ...Me({ tag: "footer" }), ...Ue() }, "VFooter"), DT = J()({ name: "VFooter", props: TT(), setup(e, t) {
  let { slots: n } = t;
  const a = q(), { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.color), { borderClasses: r } = Xt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), c = ie(32), { resizeRef: d } = wn((m) => {
    m.length && (c.value = m[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const m = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ct(() => {
      a.value = m.layoutItemStyles.value;
    });
  }), te(() => p(e.tag, { ref: d, class: ee(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: ve([i.value, e.app ? a.value : { height: de(e.height) }, e.style]) }, n)), {};
} }), ET = z({ ...pe(), ...R_() }, "VForm"), MT = J()({ name: "VForm", props: ET(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = O_(e), o = q();
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
  return te(() => {
    var _a3;
    return b("form", { ref: o, class: ee(["v-form", e.class]), style: ve(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), BT = z({ color: String, ...zt(), ...pe(), ...it(), ...Me({ tag: "kbd" }), ...Ue(), ...xt() }, "VKbd"), Au = J()({ name: "VKbd", props: BT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = Xt(e), { roundedClasses: o } = dt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.color), { elevationClasses: s } = It(e);
  return te(() => p(e.tag, { class: ee(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: ve([r.value, e.style]) }, n)), {};
} });
function Kb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const qb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, $T = z({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => qb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...pe(), ...Ue(), ...zt(), ...it(), ...xt(), color: String }, "VHotkey"), xs = Symbol("VHotkey:AND_DELINEATOR"), Cs = Symbol("VHotkey:SLASH_DELINEATOR"), Av = Symbol("VHotkey:THEN_DELINEATOR");
function LT(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = Kb(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Tv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = Kb(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const FT = J()({ name: "VHotkey", props: $T(), setup(e) {
  const { t } = Qe(), { themeClasses: n } = qe(e), { rtlClasses: a } = _t(), { borderClasses: l } = Xt(e), { roundedClasses: o } = dt(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const k = [], I = rC(h);
    for (let V = 0; V < I.length; V++) {
      const w = I[V];
      V > 0 && k.push(Av);
      const { keys: g, separators: C } = sh(w);
      for (let x = 0; x < g.length; x++) {
        const A = g[x];
        x > 0 && k.push(C[x - 1] === "/" ? Cs : xs), k.push(Tv(e.keyMap, e.displayMode, A, c.value));
      }
    }
    return k;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const k = d.value.map((I) => {
      const V = [];
      for (const w of I) if (Array.isArray(w)) {
        const g = w[0] === "icon" || w[0] === "symbol" ? Tv(Ot(qb, e.keyMap), "text", String(w[1]), c.value)[1] : w[1];
        V.push(m(g));
      } else w === xs ? V.push(t("$vuetify.hotkey.plus")) : w === Cs ? V.push(t("$vuetify.hotkey.or")) : w === Av && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", k);
  });
  function m(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const k = LT(e.keyMap, String(h[2]), c.value);
    return m(k);
  }
  function v(h, k) {
    const I = e.variant === "contained", V = I ? "kbd" : Au, w = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return p(V, { key: k, class: ee(w), style: ve(I ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? p(Ye, { icon: h[1], "aria-hidden": "true" }, null) : m(h[1])] });
  }
  function y(h, k) {
    return b("span", { key: k, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === xs ? "+" : h === Cs ? "/" : t("$vuetify.hotkey.then")]);
  }
  te(() => {
    const h = b(ge, null, [e.prefix && b("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((k, I) => b("span", { class: "v-hotkey__combination", key: I }, [k.map((V, w) => Array.isArray(V) ? v(V, w) : y(V, w)), I < d.value.length - 1 && b("span", { "aria-hidden": "true" }, [Ke("\xA0")])])), e.suffix && b("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return b("div", { class: ee(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: ve(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : p(Au, { key: "contained", class: ee(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: ve(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), RT = z({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Lc() }, "VHover"), OT = J()({ name: "VHover", props: RT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Fc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), NT = z({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...Me() }, "VInfiniteScroll"), Dv = qt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return re(l, async (o) => {
    n("intersect", e.side, o);
  }), te(() => b("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Ke("\xA0")])), {};
} }), HT = J()({ name: "VInfiniteScroll", props: NT(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = q(), o = ie("ok"), i = ie("ok"), r = _(() => de(e.margin)), s = ie(false);
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
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== g && e.side !== "both") return;
    const x = () => h(g), A = { side: g, props: { onClick: x, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? b("div", null, [k(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? p(Ba, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? p(ze, { variant: "outlined", color: e.color, onClick: x }, { default: () => [k(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, A)) ?? p(Ba, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = wt(e);
  te(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return p(g, { ref: l, class: ee(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": x }]), style: ve(V.value) }, { default: () => {
      var _a3;
      return [b("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && A && p(Dv, { key: "start", side: "start", onIntersect: y, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), x && A && p(Dv, { key: "end", side: "end", onIntersect: y, rootMargin: r.value }, null), b("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
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
} }), Xb = Symbol.for("vuetify:v-item-group"), zT = z({ ...pe(), ...pl({ selectedClass: "v-item--selected" }), ...Me(), ...Ue() }, "VItemGroup"), WT = J()({ name: "VItemGroup", props: zT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Xb);
  return () => p(e.tag, { class: ee(["v-item-group", a.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), jT = J()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Xb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), UT = z({ ...pe(), ...kt(), ...oh() }, "VLayout"), GT = J()({ name: "VLayout", props: UT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = rh(e), { dimensionStyles: s } = wt(e);
  return te(() => {
    var _a3;
    return b("div", { ref: r, class: ee([a.value, e.class]), style: ve([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), YT = z({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...pe(), ...hl() }, "VLayoutItem"), KT = J()({ name: "VLayoutItem", props: YT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return b("div", { class: ee(["v-layout-item", e.class]), style: ve([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), qT = z({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...pe(), ...kt(), ...Me(), ...ha({ transition: "fade-transition" }) }, "VLazy"), XT = J()({ name: "VLazy", directives: { vIntersect: Dn }, props: qT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = we(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return te(() => at(p(e.tag, { class: ee(["v-lazy", e.class]), style: ve([a.value, e.style]) }, { default: () => [l.value && p(Kt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Dn, { handler: o, options: e.options }, null]])), {};
} }), ZT = z({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...pe() }, "VLocaleProvider"), JT = J()({ name: "VLocaleProvider", props: ZT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = qg(e);
  return te(() => {
    var _a3;
    return b("div", { class: ee(["v-locale-provider", a.value, e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), QT = z({ scrollable: Boolean, ...pe(), ...kt(), ...Me({ tag: "main" }) }, "VMain"), eD = J()({ name: "VMain", props: QT(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = ih(), { ssrBootStyles: o } = bl();
  return te(() => p(e.tag, { class: ee(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ve([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? b("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function tD(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ie(false), o = ie(0), i = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: de(o.value) } : { top: a.value.top }];
  });
  Ct(() => {
    re(n, (u) => {
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
const nD = 100, aD = 20;
function Ev(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Mv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Ev(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Ev(t) * 1e3;
}
function lD() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Dg(aD))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > nD) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Mv(r), y: Mv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : oD();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function oD() {
  throw new Error();
}
function iD(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Ct(() => {
    window.addEventListener("touchstart", k, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Ht(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = lD();
  let d = false;
  const f = ie(false), m = ie(0), S = ie(0);
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
const rD = ["start", "end", "left", "right", "top", "bottom"], sD = z({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => rD.includes(e) }, sticky: Boolean, ...zt(), ...pe(), ...Lc(), ...gl({ mobile: null }), ...xt(), ...hl(), ...it(), ...Fe(iy(), ["disableInitialFocus"]), ...Me({ tag: "nav" }), ...Ue() }, "VNavigationDrawer"), uD = J()({ name: "VNavigationDrawer", props: sD(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = _t(), { themeClasses: i } = qe(e), { borderClasses: r } = Xt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Xe(() => e.color), { elevationClasses: c } = It(e), { displayClasses: d, mobile: f } = on(e), { roundedClasses: m } = dt(e), S = bh(), v = we(e, "modelValue", null, ($) => !!$), { ssrBootStyles: y } = bl(), { scopeId: h } = kl(), k = q(), I = ie(false), { runOpenDelay: V, runCloseDelay: w } = Fc(e, ($) => {
    I.value = $;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Us(e.location, o.value)), x = B(() => e.persistent), A = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !A.value && C.value !== "bottom");
  ry(e, { isActive: v, localTop: A, contentEl: k }), $t(() => e.expandOnHover && e.rail != null, () => {
    re(I, ($) => a("update:rail", !$));
  }), $t(() => !e.disableResizeWatcher, () => {
    re(A, ($) => !e.permanent && Ee(() => v.value = !$));
  }), $t(() => !e.disableRouteWatcher && !!S, () => {
    re(S.currentRoute, () => A.value && (v.value = false));
  }), re(() => e.permanent, ($) => {
    $ && (v.value = true);
  }), e.modelValue == null && !A.value && (v.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = iD({ el: k, isActive: v, isTemporary: A, width: g, touchless: B(() => e.touchless), position: C }), M = _(() => {
    const $ = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? $ * D.value : $;
  }), { layoutItemStyles: T, layoutItemScrimStyles: F } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: g, active: al(v), disableTransitions: B(() => E.value), absolute: _(() => e.absolute || P.value && typeof W.value != "string") }), { isStuck: W, stickyStyles: N } = tD({ rootEl: k, isSticky: P, layoutItemStyles: T }), Z = Xe(() => typeof e.scrim == "string" ? e.scrim : null), R = _(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...F.value }));
  return mt({ VList: { bgColor: "transparent" } }), te(() => {
    const $ = l.image || e.image;
    return b(ge, null, [p(e.tag, K({ ref: k, onMouseenter: V, onMouseleave: w, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": x.value, "v-navigation-drawer--active": v.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, m.value, e.class], style: [u.value, T.value, y.value, N.value, e.style], inert: !v.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [$ && b("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? p(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : p(da, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && b("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), b("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && b("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), p(Da, { name: "fade-transition" }, { default: () => [A.value && (E.value || v.value) && !!e.scrim && b("div", K({ class: ["v-navigation-drawer__scrim", Z.backgroundColorClasses.value], style: [R.value, Z.backgroundColorStyles.value], onClick: () => {
      x.value || (v.value = false);
    } }, h), null)] })]);
  }), { isStuck: W };
} }), cD = qt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = sy();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), dD = 50, fD = 500;
function vD(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  bt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), dD);
    }, fD);
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
const mD = z({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Fe(gi(), ["modelValue", "validationValue"]) }, "VNumberInput"), gD = J()({ name: "VNumberInput", props: { ...mD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = q(), { holdStart: l, holdStop: o } = vD({ toggleUpDown: E }), i = ao(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = ie(e.focused), { decimalSeparator: u } = Qe(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(O) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const ye = U == null ? String(O) : O.toFixed(U);
    if (s.value && ae) return Number(ye).toString().replace(".", c.value);
    if (e.minFractionDigits === null || U !== null && U < e.minFractionDigits) return ye.replace(".", c.value);
    let [ne, fe] = ye.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [ne, fe].filter(Boolean).join(c.value);
  }
  const f = we(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : Ze(Number(O), e.min, e.max)), m = ie(null), S = ie(null);
  re(f, (O) => {
    var _a3;
    s.value && !r.value && Number((_a3 = m.value) == null ? void 0 : _a3.replace(c.value, ".")) === O || (O == null ? (m.value = null, S.value = null) : isNaN(O) || (m.value = d(O), S.value = Number(m.value.replace(c.value, "."))));
  }, { immediate: true });
  const v = _({ get: () => m.value, set(O) {
    if (O === null || O === "") {
      f.value = null, m.value = null, S.value = null;
      return;
    }
    const U = Number(O.replace(c.value, "."));
    isNaN(U) || (m.value = O, S.value = U, U <= e.max && U >= e.min && (f.value = U));
  } }), y = _(() => {
    var _a3;
    if (S.value === null) return false;
    const O = Number((_a3 = m.value) == null ? void 0 : _a3.replace(c.value, "."));
    return O !== Ze(O, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), k = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), w = B(() => I.value === "split" ? "$minus" : "$expand"), g = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), x = { props: { onClick: T, onPointerup: F, onPointerdown: W, onPointercancel: F } }, A = { props: { onClick: T, onPointerup: F, onPointerdown: N, onPointercancel: F } };
  re(() => e.precision, () => R()), re(() => e.minFractionDigits, () => R()), Ct(() => {
    Z();
  });
  function P(O) {
    if (O == null) return 0;
    const U = O.toString(), ae = U.indexOf(".");
    return ~ae ? U.length - ae : 0;
  }
  function E() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      v.value = d(Ze(0, e.min, e.max));
      return;
    }
    let U = Math.max(P(f.value), P(e.step));
    e.precision != null && (U = Math.max(U, e.precision)), O ? h.value && (v.value = d(f.value + e.step, U)) : k.value && (v.value = d(f.value - e.step, U));
  }
  function D(O) {
    var _a3;
    if (!O.data) return;
    const U = O.target, { value: ae, selectionStart: ye, selectionEnd: ne } = U ?? {}, fe = ae ? ae.slice(0, ye) + O.data + ae.slice(ne) : O.data, Ae = u0(fe, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Yi(c.value)}?\\d*$`).test(fe) || (O.preventDefault(), U.value = Ae, Ee(() => v.value = Ae)), e.precision != null) {
      if (((_a3 = fe.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        O.preventDefault(), U.value = Ae, Ee(() => v.value = Ae);
        const xe = (ye ?? 0) + O.data.length;
        U.setSelectionRange(xe, xe);
      }
      e.precision === 0 && fe.endsWith(c.value) && (O.preventDefault(), U.value = Ae, Ee(() => v.value = Ae));
    }
  }
  async function M(O) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), O.stopPropagation(), Z(), await Ee(), O.key === "ArrowDown" ? E(false) : E());
  }
  function T(O) {
    O.stopPropagation();
  }
  function F(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.releasePointerCapture(O.pointerId), O.preventDefault(), o();
  }
  function W(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("up");
  }
  function N(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("down");
  }
  function Z() {
    if (r.value || !a.value) return;
    const O = a.value.value, U = Number(O.replace(c.value, "."));
    O && !isNaN(U) ? v.value = d(Ze(U, e.min, e.max)) : v.value = null;
  }
  function R() {
    r.value || (v.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function $() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        v.value = null;
        return;
      }
      v.value = f.value.toString().replace(".", c.value);
    }
  }
  function Y() {
    $();
  }
  function j() {
    Z();
  }
  return te(() => {
    const { modelValue: O, type: U, ...ae } = Gn.filterProps(e);
    function ye() {
      return n.increment ? p(Be, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(x)] }) : p(ze, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: T, onPointerdown: W, onPointerup: F, onPointercancel: F, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function ne() {
      return n.decrement ? p(Be, { key: "decrement-defaults", defaults: { VBtn: { disabled: !k.value, height: C.value, size: g.value, icon: w.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : p(ze, { "aria-hidden": "true", "data-testid": "decrement", disabled: !k.value, height: C.value, icon: w.value, key: "decrement-btn", onClick: T, onPointerdown: N, onPointerup: F, onPointercancel: F, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return b("div", { class: "v-number-input__control" }, [ne(), p(mn, { vertical: I.value !== "stacked" }, null), ye()]);
    }
    function Ae() {
      return !e.hideInput && !e.inset ? p(mn, { vertical: true }, null) : void 0;
    }
    const xe = I.value === "split" ? b("div", { class: "v-number-input__control" }, [p(mn, { vertical: true }, null), ye()]) : e.reverse || I.value === "hidden" ? void 0 : b(ge, null, [Ae(), fe()]), he = n["append-inner"] || xe, L = I.value === "split" ? b("div", { class: "v-number-input__control" }, [ne(), p(mn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? b(ge, null, [fe(), Ae()]) : void 0, H = n["prepend-inner"] || L;
    return p(Gn, K({ ref: a }, ae, { modelValue: v.value, "onUpdate:modelValue": (Q) => v.value = Q, focused: s.value, "onUpdate:focused": (Q) => s.value = Q, validationValue: f.value, error: e.error || y.value || void 0, onBeforeinput: D, onFocus: Y, onBlur: j, onKeydown: M, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": he ? function() {
      var _a3;
      for (var Q = arguments.length, ue = new Array(Q), oe = 0; oe < Q; oe++) ue[oe] = arguments[oe];
      return b(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ue), xe]);
    } : void 0, "prepend-inner": H ? function() {
      var _a3;
      for (var Q = arguments.length, ue = new Array(Q), oe = 0; oe < Q; oe++) ue[oe] = arguments[oe];
      return b(ge, null, [L, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...ue)]);
    } : void 0 });
  }), Pt({}, a);
} }), hD = z({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...gt(), ...kt(), ...fi(), ...tn(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), yD = J()({ name: "VOtpInput", props: hD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Ft(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: u } = pa(e), c = we(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Qe(), f = _(() => Number(e.length)), m = _(() => Array(f.value).fill(0)), S = q(-1), v = q(), y = q([]), h = _(() => y.value[S.value]);
  let k = false;
  $t(() => e.autofocus, () => {
    const E = Nl();
    E.run(() => {
      const { intersectionRef: D, isIntersecting: M } = ii();
      ct(() => {
        D.value = y.value[0];
      }), re(M, (T) => {
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
  return mt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), re(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), re(S, (E) => {
    E < 0 || Ee(() => {
      var _a3;
      (_a3 = y.value[E]) == null ? void 0 : _a3.select();
    });
  }), te(() => {
    var _a3;
    const [E, D] = qn(n);
    return b("div", K({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [b("div", { ref: v, class: "v-otp-input__content", style: ve([i.value]) }, [m.value.map((M, T) => b(ge, null, [e.divider && T !== 0 && b("span", { class: "v-otp-input__divider" }, [e.divider]), p(Fa, { focused: r.value && e.focusAll || S.value === T, key: T }, { ...l, loader: void 0, default: () => b("input", { ref: (F) => y.value[T] = F, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: ee(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[T], onInput: I, onFocus: (F) => x(F, T), onBlur: A, onKeydown: w, onCompositionstart: () => k = true, onCompositionend: V, onPaste: (F) => g(T, F) }, null) })])), b("input", K({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), p(Un, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
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
function bD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const pD = z({ scale: { type: [Number, String], default: 0.5 }, ...pe() }, "VParallax"), SD = J()({ name: "VParallax", props: pD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii(), { resizeRef: o, contentRect: i } = wn(), { height: r } = on(), s = q();
  ct(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  re(l, (m) => {
    m ? (u = pr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Ht(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), re(r, f), re(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - Ze(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || Wn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const m = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!m) return;
      const S = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, v = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + v, h = i.value.height, k = y + (h - S) / 2, I = bD((v - k) * c.value), V = Math.max(1, (c.value * (S - h) + h) / h);
      m.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return te(() => p(da, { class: ee(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: ve(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), kD = z({ ...Pr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), wD = J()({ name: "VRadio", props: kD(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = $a.filterProps(e);
    return p($a, K(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), xD = z({ height: { type: [Number, String], default: "auto" }, ...Fe(Sa(), ["direction"]), ...Fe(Ic(), ["multiple"]), trueIcon: { type: Ce, default: "$radioOn" }, falseIcon: { type: Ce, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), CD = J()({ name: "VRadioGroup", inheritAttrs: false, props: xD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = _(() => e.id || `radio-group-${l}`), i = we(e, "modelValue"), r = q();
  return te(() => {
    const [s, u] = qn(n), c = Nt.filterProps(e), d = $a.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return p(Nt, K({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (m) => i.value = m, id: o.value }), { ...a, default: (m) => {
      let { id: S, messagesId: v, isDisabled: y, isReadonly: h } = m;
      return b(ge, null, [f && p(no, { id: S.value }, { default: () => [f] }), p(Th, K(d, { id: S.value, "aria-describedby": v.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: y.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k }), a)]);
    } });
  }), Pt({}, r);
} }), _D = z({ ...fi(), ...Sa(), ...Zy(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), VD = J()({ name: "VRangeSlider", inheritAttrs: false, props: _D(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = q(), i = q(), r = q(), { rtlClasses: s } = _t();
  function u(D) {
    if (!o.value || !i.value) return;
    const M = hu(D, o.value.$el, e.direction), T = hu(D, i.value.$el, e.direction), F = Math.abs(M), W = Math.abs(T);
    return F < W || F === W && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = Jy(e), d = we(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: m, max: S, min: v, mousePressed: y, onSliderMousedown: h, onSliderTouchstart: k, position: I, trackContainerRef: V, disabled: w, readonly: g } = Qy({ props: e, steps: c, onSliderStart: () => {
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
    var _a3, _b2, _c2, _d2, _e;
    let { value: M } = D;
    const [T, F] = d.value;
    if (w.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === F && T !== v.value && (f.value = M > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(M, F), F] : d.value = [T, Math.max(T, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: x, blur: A } = pa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return te(() => {
    const D = Nt.filterProps(e), [M, T] = qn(l), F = !!(e.label || n.label || n.prepend);
    return p(Nt, K({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || m.value, "v-slider--focused": C.value, "v-slider--pressed": y.value, "v-slider--disabled": w.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: F ? (W) => {
      var _a3, _b2;
      return b(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, W)) ?? (e.label ? p(no, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, W)]);
    } : void 0, default: (W) => {
      var _a3, _b2;
      let { id: N, messagesId: Z } = W;
      return b("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : k }, [b("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), b("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), p(eb, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), p(yu, K({ ref: o, "aria-describedby": Z.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (R) => d.value = [R, d.value[1]], onFocus: (R) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== v.value && d.value[0] === d.value[1] && d.value[1] === v.value && R.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: v.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), p(yu, K({ ref: i, "aria-describedby": Z.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (R) => d.value = [d.value[0], R], onFocus: (R) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== v.value && d.value[0] === d.value[1] && d.value[0] === S.value && R.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), ID = z({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ce, default: "$ratingEmpty" }, fullIcon: { type: Ce, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...pe(), ...gt(), ...Jn(), ...Me(), ...Ue() }, "VRating"), PD = J()({ name: "VRating", props: ID(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { themeClasses: l } = qe(e), o = q(), i = we(e, "modelValue"), r = _(() => Ze(parseFloat(i.value), 0, Number(e.length))), s = _(() => Nn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = ie(-1), d = _(() => u.value.map((V) => {
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
    return b(ge, null, [b("label", { for: E, class: ee({ "v-rating__item--half": e.halfIncrements && w % 1 > 0, "v-rating__item--full": e.halfIncrements && w % 1 === 0 }), onMouseenter: x, onMouseleave: A, onClick: P }, [b("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, w, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: M, value: w, index: g, rating: r.value }) : p(ze, K({ "aria-label": a(e.itemAriaLabel, w, e.length) }, M), null) : void 0]), b("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: w, checked: r.value === w, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? b("span", null, [V.label]) : b("span", null, [Ke("\xA0")]);
  }
  return te(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return p(e.tag, { class: ee(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: ve(e.style), ref: o }, { default: () => [p(k, { value: 0, index: -1, showStar: false }, null), s.value.map((w, g) => {
      var _a4, _b2;
      return b("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: w, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, b("div", { class: "v-rating__item" }, [e.halfIncrements ? b(ge, null, [p(k, { value: w - 0.5, index: g * 2 }, null), p(k, { value: w, index: g * 2 + 1 }, null)]) : p(k, { value: w, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: w, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), AD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function TD(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return b("div", { class: ee(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Bv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Gr(t));
}
function Gr(e) {
  let t = [];
  if (!e) return t;
  const n = AD[e];
  if (e !== n) {
    if (e.includes(",")) return $v(e);
    if (e.includes("@")) return Bv(e);
    n.includes(",") ? t = $v(n) : n.includes("@") ? t = Bv(n) : n && t.push(Gr(n));
  }
  return [TD(e, t)];
}
function $v(e) {
  return e.replace(/\s/g, "").split(",").map(Gr);
}
const DD = z({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...xt(), ...Ue() }, "VSkeletonLoader"), ED = J()({ name: "VSkeletonLoader", inheritAttrs: false, props: DD(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = qe(e), { t: u } = Qe(), c = _(() => Gr(ot(e.type).join(",")));
  return te(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? b("div", K({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : b(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), MD = J()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Pc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function BD(e) {
  const t = ie(e());
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
const Zb = z({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Zn({ location: "bottom" }), ...eo(), ...it(), ...bn(), ...Ue(), ...Fe(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Tu = J()({ name: "VSnackbar", props: Zb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { positionClasses: l } = to(e), { scopeId: o } = kl(), { themeClasses: i } = qe(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(e), { roundedClasses: c } = dt(e), d = BD(() => Number(e.timeout)), f = q(), m = q(), S = ie(false), v = ie(0), y = q(), h = We(No, void 0);
  $t(() => !!h, () => {
    const E = ih();
    ct(() => {
      y.value = E.mainStyles.value;
    });
  }), re(a, I), re(() => e.timeout, I), Ct(() => {
    a.value && I();
  });
  let k = -1;
  function I() {
    d.reset(), window.clearTimeout(k);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const D = ic(m.value);
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
  return te(() => {
    const E = Un.filterProps(e), D = !!(n.default || n.text || e.text);
    return p(Un, K({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [y.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: K({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: w, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: x, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ya(false, "v-snackbar"), e.timer && !S.value && b("div", { key: "timer", class: "v-snackbar__timer" }, [p(_r, { ref: m, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && b("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && p(Be, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [b("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), $D = z({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Fe(Zb(), ["modelValue"]) }, "VSnackbarQueue"), LD = J()({ name: "VSnackbarQueue", props: $D(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = ie(false), i = ie(false), r = ie();
  re(() => e.modelValue.length, (f, m) => {
    !i.value && f > m && u();
  }), re(o, (f) => {
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
  te(() => {
    const f = !!(e.closable || a.actions), { modelValue: m, ...S } = Tu.filterProps(e);
    return b(ge, null, [i.value && !!r.value && (a.default ? p(Be, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : p(Tu, K(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (v) => o.value = v, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => b(ge, null, [a.actions ? p(Be, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : p(ze, K(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), Jb = z({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Qb = z({ autoLineWidth: Boolean, ...Jb() }, "VBarline"), Lv = J()({ name: "VBarline", props: Qb(), setup(e, t) {
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
  te(() => {
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return b("svg", { display: "block" }, [b("defs", null, [b("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => b("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), b("clipPath", { id: `${l.value}-clip` }, [m.value.map((h) => b("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: v.value, ry: v.value }, [e.autoDraw && !Wn() && b(ge, null, [b("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), b("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && b("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, k) => {
      var _a3;
      return b("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), b("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [b("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function FD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && RD(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Fv(u, i), Fv(s, i)), m = d / 2 < t ? d / 2 : t, S = Rv(u, i, m), v = Rv(s, i, m);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${v.x} ${v.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Ii(e) {
  return parseInt(e, 10);
}
function RD(e, t, n) {
  return Ii(e.x + n.x) === Ii(2 * t.x) && Ii(e.y + n.y) === Ii(2 * t.y);
}
function Fv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Rv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const ep = z({ fill: Boolean, ...Jb() }, "VTrendline"), Ov = J()({ name: "VTrendline", props: ep(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = q(0), r = q(null);
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
  re(() => e.modelValue, async () => {
    if (await Ee(), !e.autoDraw || !r.value || Wn()) return;
    const y = r.value, h = y.getTotalLength();
    e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function v(y) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return FD(s(m.value, f.value), h, y, parseInt(e.height, 10));
  }
  te(() => {
    var _a3;
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return b("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [b("defs", null, [b("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => b("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && b("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, k) => {
      var _a4;
      return b("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), b("path", { ref: r, d: v(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && b("path", { d: v(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), OD = z({ type: { type: String, default: "trend" }, ...Qb(), ...ep() }, "VSparkline"), ND = J()({ name: "VSparkline", props: OD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  te(() => {
    const r = e.type === "trend" ? Ov : Lv, s = e.type === "trend" ? Ov.filterProps(e) : Lv.filterProps(e);
    return p(r, K({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), HD = z({ ...pe(), ...dy({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), zD = J()({ name: "VSpeedDial", props: HD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = q(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return te(() => {
    const r = ql.filterProps(e);
    return p(ql, K(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => p(Be, { defaults: { VBtn: { size: "small" } } }, { default: () => [p(Kt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), md = Symbol.for("vuetify:v-stepper"), tp = z({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), np = J()({ name: "VStepperActions", props: tp(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return te(() => {
    const r = { onClick: o }, s = { onClick: i };
    return b("div", { class: "v-stepper-actions" }, [p(Be, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? p(ze, r, null)];
    } }), p(Be, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? p(ze, s, null)];
    } })]);
  }), {};
} }), ap = ga("v-stepper-header"), WD = z({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ce, default: "$complete" }, editable: Boolean, editIcon: { type: Ce, default: "$edit" }, error: Boolean, errorIcon: { type: Ce, default: "$error" }, icon: Ce, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), jD = z({ ...WD(), ...Sl() }, "VStepperItem"), lp = J()({ name: "VStepperItem", directives: { vRipple: Lt }, props: jD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, md, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return te(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, m = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function v() {
      a == null ? void 0 : a.toggle();
    }
    return at(b("button", { class: ee(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: v }, [i.value && ya(true, "v-stepper-item"), p(hn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? p(Ye, { icon: c.value }, null) : l.value)];
    } }), b("div", { class: "v-stepper-item__content" }, [m && b("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && b("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Lt, e.editable && e.ripple, null]]);
  }), {};
} }), UD = z({ ...Fe(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), op = J()({ name: "VStepperWindow", props: UD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(md, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return te(() => {
    const i = sl.filterProps(e);
    return p(sl, K({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), GD = z({ ...$r() }, "VStepperWindowItem"), ip = J()({ name: "VStepperWindowItem", props: GD(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = ul.filterProps(e);
    return p(ul, K({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), YD = z({ altLabels: Boolean, bgColor: String, completeIcon: Ce, editIcon: Ce, editable: Boolean, errorIcon: Ce, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...gl() }, "Stepper"), KD = z({ ...YD(), ...pl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Nc(), ...tn(tp(), ["prevText", "nextText"]) }, "VStepper"), qD = J()({ name: "VStepper", props: KD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Na(e, md), { displayClasses: r, mobile: s } = on(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: m, prevText: S, nextText: v } = Zl(e), y = _(() => e.items.map((I, V) => {
    const w = pt(I, e.itemTitle, I), g = pt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : pt(I, e.itemProps), x = { title: w, value: g, ...C };
    return { title: x.title, value: x.value, props: x, raw: I };
  })), h = _(() => a.value.findIndex((I) => i.value.includes(I.id))), k = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return mt({ VStepperItem: { editable: m, errorIcon: d, completeIcon: u, editIcon: c, prevText: S, nextText: v }, VStepperActions: { color: f, disabled: k, prevText: S, nextText: v } }), te(() => {
    const I = La.filterProps(e), V = !!(n.header || e.items.length), w = e.items.length > 0, g = !e.hideActions && !!(w || n.actions);
    return p(La, K(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && p(ap, { key: "stepper-header" }, { default: () => [y.value.map((C, x) => {
        let { raw: A, ...P } = C;
        return b(ge, null, [!!x && p(mn, null, null), p(lp, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), w && p(op, { key: "stepper-window" }, { default: () => [y.value.map((C) => p(ip, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? p(np, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), XD = z({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ...Pr() }, "VSwitch"), ZD = J()({ name: "VSwitch", inheritAttrs: false, props: XD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "indeterminate"), o = we(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: u } = pa(e), c = q(), d = q(), f = oc && window.matchMedia("(forced-colors: active)").matches, m = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), v = B(() => e.id || `switch-${S}`);
  function y() {
    l.value && (l.value = false);
  }
  function h(k) {
    var _a3, _b2;
    k.stopPropagation(), k.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return te(() => {
    const [k, I] = qn(n), V = Nt.filterProps(e), w = $a.filterProps(e);
    return p(Nt, K({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, k, V, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: v.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: x, isDisabled: A, isReadonly: P, isValid: E } = g;
      const D = { model: o, isValid: E };
      return p($a, K({ ref: c }, w, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, y], id: C.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (M) => {
        let { backgroundColorClasses: T, backgroundColorStyles: F } = M;
        return b("div", { class: ee(["v-switch__track", f ? void 0 : T.value]), style: ve(F.value), onClick: h }, [a["track-true"] && b("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && b("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: T, icon: F, backgroundColorClasses: W, backgroundColorStyles: N } = M;
        return b(ge, null, [T, b("div", { class: ee(["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset || f ? void 0 : W.value]), style: ve(e.inset ? void 0 : N.value) }, [a.thumb ? p(Be, { defaults: { VIcon: { icon: F, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: F })] }) : p(wc, null, { default: () => [e.loading ? p(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : m.value }, { default: (Z) => a.loader ? a.loader(Z) : p(Ba, { active: Z.isActive, color: Z.color, indeterminate: true, size: "16", width: "2" }, null) }) : F && p(Ye, { key: String(F), icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), JD = z({ color: String, height: [Number, String], window: Boolean, ...pe(), ...xt(), ...hl(), ...it(), ...Me(), ...Ue() }, "VSystemBar"), QD = J()({ name: "VSystemBar", props: JD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), { ssrBootStyles: s } = bl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: ie("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: B(() => e.absolute) });
  return te(() => p(e.tag, { class: ee(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: ve([o.value, c.value, s.value, e.style]) }, n)), {};
} }), gd = Symbol.for("vuetify:v-tabs"), rp = z({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Fe(Ir({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), sp = J()({ name: "VTab", props: rp(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Et(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.sliderColor), s = q(), u = q(), c = _(() => e.direction === "horizontal"), d = _(() => {
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
    const k = h.getBoundingClientRect(), I = y.getBoundingClientRect(), V = c.value ? "x" : "y", w = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", C = c.value ? "width" : "height", x = k[V], A = I[V], P = x > A ? k[g] - I[g] : k[V] - I[V], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? k[C] : I[C])) / Math.max(k[C], I[C]) || 0, T = k[C] / I[C] || 0, F = 1.5;
    return { transform: [`translate${w}(${P}px) scale${w}(${T})`, `translate${w}(${P / F}px) scale${w}(${(M - 1) / F + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function v(y) {
    var _a3, _b2;
    let { value: h } = y;
    if (h) {
      const k = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!k || !I) return;
      const V = getComputedStyle(k).backgroundColor, w = { fade: f, grow: m, shift: S }[e.sliderTransition ?? "shift"] ?? S, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      aa(I, { backgroundColor: [V, V], ...w(I, k) }, { duration: g, easing: Lo });
    }
  }
  return te(() => {
    const y = ze.filterProps(e);
    return p(ze, K({ symbol: gd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, y, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": v }), { ...n, default: () => {
      var _a3;
      return b(ge, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && b("div", { ref: u, class: ee(["v-tab__slider", e.inset ? i.value : l.value]), style: ve([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), eE = z({ ...Fe(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), up = J()({ name: "VTabsWindow", props: eE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(gd, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return te(() => {
    const i = sl.filterProps(e);
    return p(sl, K({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), tE = z({ ...$r() }, "VTabsWindowItem"), cp = J()({ name: "VTabsWindowItem", props: tE(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = ul.filterProps(e);
    return p(ul, K({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function nE(e) {
  return e ? e.map((t) => il(t) ? t : { text: t, value: t }) : [];
}
const aE = z({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...tn(rp(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Ac({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...gt(), ...Me() }, "VTabs"), lE = J()({ name: "VTabs", props: aE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), o = _(() => nE(e.items)), { densityClasses: i } = Ft(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { scopeId: u } = kl();
  return mt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), te(() => {
    const c = Uo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return b(ge, null, [p(Uo, K(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": de(e.height), "--v-tabs-inset-padding": e.inset ? de(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? de(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: gd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? p(sp, K(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && p(up, K({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? p(cp, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), oE = z({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...fy(), ...Fe(Sa(), ["direction"]), ...mi() }, "VTextarea"), iE = J()({ name: "VTextarea", directives: { vIntersect: Dn }, inheritAttrs: false, props: oE(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue"), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = vy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = q(), m = q(), S = ie(""), v = q(), y = q(0), { platform: h } = on(), k = Hc(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
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
    const F = T.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = F.value;
      return;
    }
    const W = F.value, N = F.selectionStart, Z = F.selectionEnd;
    o.value = W, Ee(() => {
      let R = 0;
      W.trimStart().length === F.value.length && (R = W.length - F.value.length), N != null && (F.selectionStart = N - R), Z != null && (F.selectionEnd = Z - R);
    });
  }
  const A = q(), P = q(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
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
      const { offsetWidth: T, clientWidth: F } = v.value;
      y.value = Math.max(0, T - F);
    }), e.autoGrow && Ee(() => {
      if (!A.value || !m.value) return;
      const T = getComputedStyle(A.value), F = getComputedStyle(m.value.$el), W = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), N = A.value.scrollHeight, Z = parseFloat(T.lineHeight), R = Math.max(parseFloat(e.rows) * Z + W, parseFloat(F.getPropertyValue("--v-input-control-height"))), $ = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Z + W || 1 / 0, Y = Ze(N ?? 0, R, $);
      P.value = Math.floor((Y - W) / Z), S.value = de(Y);
    });
  }
  Ct(D), re(o, D), re(() => e.rows, D), re(() => e.maxHeight, D), re(() => e.maxRows, D), re(() => e.density, D), re(P, (T) => {
    a("update:rows", T);
  });
  let M;
  return re(A, (T) => {
    T ? (M = new ResizeObserver(D), M.observe(A.value)) : M == null ? void 0 : M.disconnect();
  }), Ht(() => {
    M == null ? void 0 : M.disconnect();
  }), te(() => {
    const T = !!(l.counter || e.counter || e.counterValue), F = !!(T || l.details), [W, N] = qn(n), { modelValue: Z, ...R } = Nt.filterProps(e), $ = { ...Fa.filterProps(e), "onClick:clear": C };
    return p(Nt, K({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Y) => o.value = Y, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? de(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": de(y.value) }, e.style] }, W, R, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (Y) => {
      let { id: j, isDisabled: O, isDirty: U, isReadonly: ae, isValid: ye, hasDetails: ne } = Y;
      return p(Fa, K({ ref: m, style: { "--v-textarea-control-height": S.value }, onClick: w, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, $, { id: j.value, active: I.value || U.value, labelId: `${j.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: U.value || e.dirty, disabled: O.value, focused: i.value, details: ne.value, error: ye.value === false }), { ...l, default: (fe) => {
        let { props: { class: Ae, ...xe }, controlRef: he } = fe;
        return b(ge, null, [e.prefix && b("span", { class: "v-text-field__prefix" }, [e.prefix]), at(b("textarea", K({ ref: (L) => v.value = he.value = L, class: Ae, value: o.value, onInput: x, autofocus: e.autofocus, readonly: ae.value, disabled: O.value, placeholder: e.placeholder, rows: e.rows, name: k.fieldName.value, autocomplete: k.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${j.value}-label` }, xe, N), null), [[Dn, { handler: u }, null, { once: true }]]), e.autoGrow && at(b("textarea", { class: ee([Ae, "v-textarea__sizer"]), id: `${xe.id}-sizer`, "onUpdate:modelValue": (L) => o.value = L, ref: A, readonly: true, "aria-hidden": "true" }, null), [[Rk, o.value]]), e.suffix && b("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (Y) => {
      var _a3;
      return b(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Y), T && b(ge, null, [b("span", null, null), p(Ar, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, m, v);
} }), rE = z({ withBackground: Boolean, ...pe(), ...Ue(), ...Me() }, "VThemeProvider"), sE = J()({ name: "VThemeProvider", props: rE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e);
  return () => {
    var _a3;
    return e.withBackground ? p(e.tag, { class: ee(["v-theme-provider", a.value, e.class]), style: ve(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), uE = z({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ce, iconColor: String, lineColor: String, ...pe(), ...it(), ...Jn(), ...xt() }, "VTimelineDivider"), cE = J()({ name: "VTimelineDivider", props: uE(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ql(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Xe(() => e.dotColor), { roundedClasses: r } = dt(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Xe(() => e.lineColor);
  return te(() => b("div", { class: ee(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ve(e.style) }, [b("div", { class: ee(["v-timeline-divider__before", u.value]), style: ve(c.value) }, null), !e.hideDot && b("div", { key: "dot", class: ee(["v-timeline-divider__dot", s.value, r.value, a.value]), style: ve(l.value) }, [b("div", { class: ee(["v-timeline-divider__inner-dot", i.value, r.value]), style: ve(o.value) }, [n.default ? p(Be, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : p(Ye, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), b("div", { class: ee(["v-timeline-divider__after", u.value]), style: ve(c.value) }, null)])), {};
} }), dp = z({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ce, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...pe(), ...kt(), ...xt(), ...it(), ...Jn(), ...Me() }, "VTimelineItem"), dE = J()({ name: "VTimelineItem", props: dp(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = ie(0), o = q();
  return re(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), te(() => {
    var _a3, _b2;
    return b("div", { class: ee(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ve([{ "--v-timeline-dot-size": de(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${de(e.lineInset)})` : de(0) }, e.style]) }, [b("div", { class: "v-timeline-item__body", style: ve(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), p(cE, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && b("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), fE = z({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...tn(dp({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...pe(), ...gt(), ...Me(), ...Ue() }, "VTimeline"), vE = J()({ name: "VTimeline", props: fE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Ft(e), { rtlClasses: o } = _t();
  mt({ VTimelineDivider: { lineColor: B(() => e.lineColor) }, VTimelineItem: { density: B(() => e.density), dotColor: B(() => e.dotColor), fillDot: B(() => e.fillDot), hideOpposite: B(() => e.hideOpposite), iconColor: B(() => e.iconColor), lineColor: B(() => e.lineColor), lineInset: B(() => e.lineInset), size: B(() => e.size) } });
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
  return te(() => p(e.tag, { class: ee(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: ve([{ "--v-timeline-line-thickness": de(e.lineThickness) }, e.style]) }, n)), {};
} }), mE = z({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Du = J()({ name: "VTimePickerClock", props: mE(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = q(null), l = q(null), o = q(void 0), i = q(false), r = q(null), s = q(null), u = Ag(($) => n("change", $), 750), { textColorClasses: c, textColorStyles: d } = Et(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: m } = Xe(() => e.color), S = _(() => e.max - e.min + 1), v = _(() => e.double ? S.value / 2 : S.value), y = _(() => 360 / v.value), h = _(() => y.value * Math.PI / 180), k = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const $ = [];
    for (let Y = e.min; Y <= e.max; Y = Y + e.step) $.push(Y);
    return $;
  });
  re(() => e.modelValue, ($) => {
    o.value = $;
  });
  function w($) {
    o.value !== $ && (o.value = $), n("input", $);
  }
  function g($) {
    return !e.allowedValues || e.allowedValues($);
  }
  function C($) {
    if (!e.scrollable || e.disabled) return;
    $.preventDefault();
    const Y = Math.sign(-$.deltaY || 1);
    let j = k.value;
    do
      j = j + Y, j = (j - e.min + S.value) % S.value + e.min;
    while (!g(j) && j !== k.value);
    j !== e.displayedValue && w(j), u(j);
  }
  function x($) {
    return e.double && $ - e.min >= v.value;
  }
  function A($) {
    return x($) ? I.value : 1;
  }
  function P($) {
    const Y = e.rotate * Math.PI / 180;
    return { x: Math.sin(($ - e.min) * h.value + Y) * A($), y: -Math.cos(($ - e.min) * h.value + Y) * A($) };
  }
  function E($, Y) {
    const j = (Math.round($ / y.value) + (Y ? v.value : 0)) % S.value + e.min;
    return $ < 360 - y.value / 2 ? j : Y ? e.max - v.value + 1 : e.min;
  }
  function D($) {
    const { x: Y, y: j } = P($);
    return { left: `${Math.round(50 + Y * 50)}%`, top: `${Math.round(50 + j * 50)}%` };
  }
  function M($, Y) {
    const j = Y.x - $.x, O = Y.y - $.y;
    return Math.sqrt(j * j + O * O);
  }
  function T($, Y) {
    const j = 2 * Math.atan2(Y.y - $.y - M($, Y), Y.x - $.x);
    return Math.abs(j * 180 / Math.PI);
  }
  function F($) {
    r.value === null && (r.value = $), s.value = $, w($);
  }
  function W($) {
    var _a3, _b2;
    if ($.preventDefault(), !i.value && $.type !== "click" || !a.value) return;
    const { width: Y, top: j, left: O } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: U } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ae, clientY: ye } = "touches" in $ ? $.touches[0] : $, ne = { x: Y / 2, y: -Y / 2 }, fe = { x: ae - O, y: j - ye }, Ae = Math.round(T(ne, fe) - e.rotate + 360) % 360, xe = e.double && M(ne, fe) < (U + U * I.value) / 4, he = Math.ceil(15 / y.value);
    let L;
    for (let H = 0; H < he; H++) if (L = E(Ae + H * y.value, xe), g(L) || (L = E(Ae - H * y.value, xe), g(L))) return F(L);
  }
  function N($) {
    e.disabled || ($.preventDefault(), window.addEventListener("mousemove", W), window.addEventListener("touchmove", W), window.addEventListener("mouseup", Z), window.addEventListener("touchend", Z), r.value = null, s.value = null, i.value = true, W($));
  }
  function Z($) {
    $.stopPropagation(), R(), i.value = false, s.value !== null && g(s.value) && n("change", s.value);
  }
  function R() {
    window.removeEventListener("mousemove", W), window.removeEventListener("touchmove", W), window.removeEventListener("mouseup", Z), window.removeEventListener("touchend", Z);
  }
  bt(R), te(() => b("div", { class: ee([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [b("div", { class: "v-time-picker-clock__inner", ref: l }, [b("div", { class: ee([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": x(e.modelValue) }, c.value]), style: ve([{ transform: `rotate(${e.rotate + y.value * (k.value - e.min)}deg) scaleY(${A(k.value)})` }, d.value]) }, null), V.value.map(($) => {
    const Y = $ === k.value;
    return b("div", { class: ee([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Y, "v-time-picker-clock__item--disabled": e.disabled || !g($) }, Y && f.value]), style: ve([D($), Y && m.value]) }, [b("span", null, [e.format($)])]);
  })])]));
} }), gE = z({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), _s = J()({ name: "VTimePickerField", props: gE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = q(), i = ie(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return te(() => p(Gn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ee(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: ve(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function fp(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Vo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function hE(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function yE(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const vp = z({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function mp(e) {
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
    const c = o === "hour" ? t.value : o === "minute" ? (m) => n.value(s, m) : (m) => a.value(s, u, m), d = o === "hour" ? (m) => hE(m, r).value : (m) => yE(m, r), f = o === "hour" ? 24 : 60;
    for (let m = 1; m <= f && (i = d(i), !c(i)); m++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const bE = z({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...vp() }, "VTimePickerControls"), Eu = J()({ name: "VTimePickerControls", props: bE(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = mp(e), s = _(() => e.hour !== null ? e.ampm ? Vo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
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
    return e.ampm ? sn(fp(T)) : sn(T);
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
    const T = e.period === "am", F = e.ampm ? Vo(Number(S.value ?? 0), T ? "am" : "pm") : Number(S.value ?? 0), W = r("hour", F, M.key === "ArrowUp"), N = T && W >= 12 || !T && W < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Ee(() => S.value = sn(W))) : S.value = sn(W);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(y.value ?? 0), F = r("minute", T, M.key === "ArrowUp", s.value);
    y.value = sn(F);
  }
  function V(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(h.value ?? 0), F = r("second", T, M.key === "ArrowUp", s.value, u.value);
    h.value = sn(F);
  }
  function w(M, T, F) {
    return (W) => {
      if (!W.data) return;
      const N = W.target, { value: Z, selectionStart: R, selectionEnd: $ } = N ?? {};
      if (co(W.data) === null) {
        W.preventDefault();
        return;
      }
      const Y = Z ? Z.slice(0, R) + W.data + Z.slice($) : W.data;
      if (Y.length > 2) {
        if (R === $ && $ === 0 && W.data.trim().startsWith("0")) {
          W.preventDefault(), N.value = Y.trim().substring(0, 2), F(N.value), W.data.trim().length === 1 && N.setSelectionRange(1, 1);
          return;
        }
        if (R === $ && $ === 1 && Z.startsWith("0")) {
          W.preventDefault(), N.value = Y.trim().substring(0, 2), F(N.value);
          return;
        }
        const O = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(Y) > O) {
          W.preventDefault(), N.value = sn(String(co(W.data)).substring(0, 2)), F(N.value);
          return;
        }
      }
      const j = M(Y);
      T(j) && W.preventDefault();
    };
  }
  function g(M) {
    n("update:period", M);
    const T = r("hour", M === "am" ? 23 : 11, true);
    Ee(() => S.value = sn(T));
  }
  const C = q(), x = q(), A = q();
  re(() => e.viewMode, (M, T) => {
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
  return te(() => b("div", { class: "v-time-picker-controls" }, [b("div", { class: ee({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [p(_s, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: k, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), b("span", { class: "v-time-picker-controls__time__separator" }, [Ke(":")]), p(_s, { ref: x, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (M) => y.value = M, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && b("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Ke(":")]), e.useSeconds && b(ge, null, [p(_s, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && b("div", { class: "v-time-picker-controls__ampm" }, [p(ze, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), p(ze, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), pE = z({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...vp(), ...Fe(Lr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...gt() }, "VTimePicker"), SE = J()({ name: "VTimePicker", props: pE(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), { densityClasses: o } = Ft(e), i = q(null), r = q(null), s = q(null), u = q(null), c = q(null), d = q(null), f = we(e, "period", "am"), m = we(e, "viewMode", "hour"), S = q(null), v = q(null), y = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: k, isAllowedSecond: I } = mp(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function w() {
    const P = g();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  re(i, w), re(r, w), re(s, w), re(() => e.modelValue, (P) => C(P)), re(() => e.useSeconds, (P, E) => {
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
  te(() => {
    const P = Fe(Xl.filterProps(e), ["hideHeader"]), E = Eu.filterProps(e), D = Du.filterProps(Fe(e, ["format", "modelValue", "min", "max"])), M = m.value === "hour" ? h.value : m.value === "minute" ? (T) => k.value(i.value, T) : (T) => I.value(i.value, r.value, T);
    return p(Xl, K(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? b("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => p(Eu, K(E, { ampm: y.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: m.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => m.value = T, ref: S }), null), default: () => p(Du, K(D, { allowedValues: M, double: m.value === "hour" && !y.value, format: m.value === "hour" ? y.value ? fp : (T) => T : (T) => sn(T, 2), max: m.value === "hour" ? y.value && f.value === "am" ? 11 : 23 : 59, min: m.value === "hour" && y.value && f.value === "pm" ? 12 : 0, size: 20, step: m.value === "hour" ? 1 : 5, modelValue: m.value === "hour" ? i.value : m.value === "minute" ? r.value : s.value, onChange: A, onInput: x, ref: v }), null), actions: a.actions });
  });
} }), kE = z({ ...pe(), ...bn({ variant: "text" }) }, "VToolbarItems"), wE = J()({ name: "VToolbarItems", props: kE(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), te(() => {
    var _a3;
    return b("div", { class: ee(["v-toolbar-items", e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), xE = z({ id: String, interactive: Boolean, text: String, ...Fe(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), gp = J()({ name: "VTooltip", props: xE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), o = Mt(), i = B(() => e.id || `v-tooltip-${o}`), r = q(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => K({ "aria-describedby": i.value }, e.activatorProps));
  return te(() => {
    const f = Un.filterProps(e);
    return p(Un, K({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (m) => a.value = m, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var m = arguments.length, S = new Array(m), v = 0; v < m; v++) S[v] = arguments[v];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), Pt({}, r);
} }), CE = z({ ...Fe(Gh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Mu = J()({ name: "VTreeviewGroup", props: CE(), setup(e, t) {
  let { slots: n } = t;
  const a = q(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return te(() => {
    const i = Go.filterProps(e);
    return p(Go, K(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => b(ge, null, [p(Be, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), hp = Symbol.for("vuetify:v-treeview"), yp = z({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ce, ...qh({ slim: true }) }, "VTreeviewItem"), Bu = J()({ name: "VTreeviewItem", props: yp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(hp, { visibleIds: q() }).visibleIds, o = q(), i = _(() => {
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
  return te(() => {
    var _a3;
    const f = xn.filterProps(e), m = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return p(xn, K({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: m ? (S) => {
      var _a4;
      return b(ge, null, [e.indentLines && e.indentLines.length > 0 ? b("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((v) => b("div", { class: ee(`v-treeview-indent-line v-treeview-indent-line--${v}`) }, null))]) : "", !e.hideActions && p(Bc, { start: true }, { default: () => [e.toggleIcon ? b(ge, null, [n.toggle ? p(Be, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : p(ze, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => p(Ba, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : b("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? p(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : b(ge, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && p(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && p(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), bp = z({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, falseIcon: Ce, trueIcon: Ce, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...tn(yp(), ["hideActions"]), ...gt() }, "VTreeviewChildren"), ar = J()({ name: "VTreeviewChildren", props: bp(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(/* @__PURE__ */ new Set()), l = q([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, m = a.has(s.value), S = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), v = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, y = c.length - 1 === u, h = { index: u, depth: v, isFirst: u === 0, isLast: y, path: [...e.path, u], hideAction: e.hideActions }, k = U0({ depth: v, isLast: y, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: m });
      } : void 0, prepend: (C) => {
        var _a5;
        return b(ge, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && p(Bc, { start: true }, { default: () => [p(En, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: m, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (x) => r(C.select, x), onClick: (x) => x.stopPropagation(), onKeydown: (x) => {
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
      } : void 0 }, V = Mu.filterProps(f), w = ar.filterProps({ ...e, ...h }), g = { hideActions: e.hideActions, indentLines: k.footer };
      return d ? p(Mu, K(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: x, isOpen: A } = C;
        const P = { ...f, ...x, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: k.node, ariaExpanded: A, onToggleExpand: [() => i(s), x.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), x.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return wi(n.header, { props: P, item: s.raw, internalItem: s, loading: m }, () => p(Bu, K({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: m }), I));
      }, default: () => {
        var _a5;
        return b(ge, null, [p(ar, K(w, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: k.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: m })]);
      } }) : wi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? wi(n.divider, { props: s.raw }, () => p(mn, s.props, null)) : s.type === "subheader" ? wi(n.subheader, { props: s.raw }, () => p(lo, s.props, null)) : p(Bu, K(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: k.leaf, value: e.returnObject ? De(s.raw) : f.value }), I));
    }));
  };
} });
function pp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && pp(n.children, t);
  return t;
}
const _E = z({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Fe(bp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Fe(ty({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), VE = J()({ name: "VTreeview", props: _E(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Qe(), { items: o } = ey(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = we(e, "activated"), c = we(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = q(), m = _(() => e.openAll ? I(o.value) : e.opened), S = _(() => pp(o.value)), v = B(() => e.search), { filteredItems: y } = xl(e, S, v), h = _(() => {
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
  return rt(hp, { visibleIds: h }), mt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), te(() => {
    const V = Kl.filterProps(e), w = ar.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return p(Kl, K({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: m.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? p(xn, { key: "no-data", title: l(e.noDataText) }, null)), p(ar, K(w, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), IE = J()({ name: "VValidation", props: Bh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = $h(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), PE = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: E_, VAlertTitle: Vh, VApp: $1, VAppBar: n_, VAppBarNavIcon: P_, VAppBarTitle: A_, VAutocomplete: eI, VAvatar: hn, VBadge: yy, VBanner: lI, VBannerActions: by, VBannerText: py, VBottomNavigation: iI, VBottomSheet: sI, VBreadcrumbs: fI, VBreadcrumbsDivider: ky, VBreadcrumbsItem: wy, VBtn: ze, VBtnGroup: nu, VBtnToggle: s_, VCalendar: cP, VCard: hP, VCardActions: Wy, VCardItem: Gy, VCardSubtitle: jy, VCardText: Yy, VCardTitle: Uy, VCarousel: _P, VCarouselItem: IP, VCheckbox: W_, VCheckboxBtn: En, VChip: fa, VChipGroup: K_, VClassIcon: gc, VCode: PP, VCol: aT, VColorPicker: hA, VCombobox: bA, VComponentIcon: Xs, VConfirmEdit: SA, VContainer: QA, VCounter: Ar, VDataIterator: MA, VDataTable: YA, VDataTableFooter: Ko, VDataTableHeaders: cl, VDataTableRow: ud, VDataTableRows: dl, VDataTableServer: ZA, VDataTableVirtual: qA, VDatePicker: gT, VDatePickerControls: wu, VDatePickerHeader: xu, VDatePickerMonth: Cu, VDatePickerMonths: _u, VDatePickerYears: Vu, VDefaultsProvider: Be, VDialog: cu, VDialogBottomTransition: O1, VDialogTopTransition: N1, VDialogTransition: xr, VDivider: mn, VEmptyState: yT, VExpandBothTransition: K1, VExpandTransition: Cr, VExpandXTransition: Cc, VExpansionPanel: bT, VExpansionPanelText: Iu, VExpansionPanelTitle: Pu, VExpansionPanels: kT, VFab: xT, VFabTransition: R1, VFadeTransition: Ho, VField: Fa, VFieldLabel: mo, VFileInput: AT, VFooter: DT, VForm: MT, VHotkey: FT, VHover: OT, VIcon: Ye, VImg: da, VInfiniteScroll: HT, VInput: Nt, VItem: jT, VItemGroup: WT, VKbd: Au, VLabel: no, VLayout: GT, VLayoutItem: KT, VLazy: XT, VLigatureIcon: K0, VList: Kl, VListGroup: Go, VListImg: hV, VListItem: xn, VListItemAction: Bc, VListItemMedia: pV, VListItemSubtitle: Yh, VListItemTitle: Kh, VListSubheader: lo, VLocaleProvider: JT, VMain: eD, VMenu: ql, VMessages: Eh, VNavigationDrawer: uD, VNoSsr: cD, VNumberInput: gD, VOtpInput: yD, VOverlay: Un, VPagination: pu, VParallax: SD, VProgressCircular: Ba, VProgressLinear: _r, VRadio: wD, VRadioGroup: CD, VRangeSlider: VD, VRating: PD, VResponsive: Qs, VRow: cT, VScaleTransition: wc, VScrollXReverseTransition: z1, VScrollXTransition: H1, VScrollYReverseTransition: j1, VScrollYTransition: W1, VSelect: Yc, VSelectionControl: $a, VSelectionControlGroup: Th, VSheet: La, VSkeletonLoader: ED, VSlideGroup: Uo, VSlideGroupItem: MD, VSlideXReverseTransition: G1, VSlideXTransition: U1, VSlideYReverseTransition: Y1, VSlideYTransition: xc, VSlider: bu, VSnackbar: Tu, VSnackbarQueue: LD, VSpacer: ku, VSparkline: ND, VSpeedDial: zD, VStepper: qD, VStepperActions: np, VStepperHeader: ap, VStepperItem: lp, VStepperWindow: op, VStepperWindowItem: ip, VSvgIcon: mc, VSwitch: ZD, VSystemBar: QD, VTab: sp, VTable: fl, VTabs: lE, VTabsWindow: up, VTabsWindowItem: cp, VTextField: Gn, VTextarea: iE, VThemeProvider: sE, VTimePicker: SE, VTimePickerClock: Du, VTimePickerControls: Eu, VTimeline: vE, VTimelineItem: dE, VToolbar: tu, VToolbarItems: wE, VToolbarTitle: pc, VTooltip: gp, VTreeview: VE, VTreeviewGroup: Mu, VTreeviewItem: Bu, VValidation: IE, VVirtualScroll: Tr, VWindow: sl, VWindowItem: ul }, Symbol.toStringTag, { value: "Module" }));
function AE(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Sp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function Sp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const TE = { mounted: AE, unmounted: Sp };
function kp(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function wp(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function DE(e, t) {
  t.value !== t.oldValue && (wp(e, t), kp(e, t));
}
const EE = { mounted: kp, unmounted: wp, updated: DE };
function ME(e, t) {
  const n = typeof e == "string" ? je(e) : e, a = BE(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    fg(null, l);
  } };
}
function BE(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = il(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = $E(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ma(e, K(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), fg(c, n);
  };
}
function $E(e, t) {
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
const LE = ME(gp, (e) => {
  var _a3;
  return { activator: (il(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), FE = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: uu, Intersect: Dn, Mutate: TE, Resize: Yo, Ripple: Lt, Scroll: EE, Tooltip: LE, Touch: nr }, Symbol.toStringTag, { value: "Module" })), RE = uh({ components: PE, directives: FE, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
zk(M1).use(RE).mount("#app");
