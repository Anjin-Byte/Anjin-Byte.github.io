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
}, Nv = () => false, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fu = (e) => e.startsWith("onUpdate:"), At = Object.assign, Lu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xp = Object.prototype.hasOwnProperty, tt = (e, t) => xp.call(e, t), $e = Array.isArray, Fl = (e) => Zo(e) === "[object Map]", Hv = (e) => Zo(e) === "[object Set]", bd = (e) => Zo(e) === "[object Date]", He = (e) => typeof e == "function", yt = (e) => typeof e == "string", zn = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", zv = (e) => (et(e) || He(e)) && He(e.then) && He(e.catch), Wv = Object.prototype.toString, Zo = (e) => Wv.call(e), Cp = (e) => Zo(e).slice(8, -1), jv = (e) => Zo(e) === "[object Object]", or = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ho = $u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ir = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _p = /-\w/g, nn = ir((e) => e.replace(_p, (t) => t.slice(1).toUpperCase())), Vp = /\B([A-Z])/g, vl = ir((e) => e.replace(Vp, "-$1").toLowerCase()), Yn = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = ir((e) => e ? `on${Yn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Pi = (e, ...t) => {
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
const Yv = (e) => !!(e && e.__v_isRef === true), Ie = (e) => yt(e) ? e : e == null ? "" : $e(e) || et(e) && (e.toString === Wv || !He(e.toString)) ? Yv(e) ? Ie(e.value) : JSON.stringify(e, Kv, 2) : String(e), Kv = (e, t) => Yv(t) ? Kv(e, t.value) : Fl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Kr(a, o) + " =>"] = l, n), {}) } : Hv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Kr(n)) } : zn(t) ? Kr(t) : et(t) && !$e(t) && !jv(t) ? String(t) : t, Kr = (e, t = "") => {
  var n;
  return zn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wt;
class qv {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Wt, !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1);
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
      const n = Wt;
      try {
        return Wt = this, t();
      } finally {
        Wt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Wt, Wt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Wt = this.prevScope, this.prevScope = void 0);
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
  return Wt;
}
function bt(e, t = false) {
  Wt && Wt.cleanups.push(e);
}
let vt;
const qr = /* @__PURE__ */ new WeakSet();
class Zv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Wt && Wt.active && Wt.effects.push(this);
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
    a.version === -1 ? (a === n && (n = l), zu(a), Fp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
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
function Fp(e) {
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
class Lp {
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
    if (n === void 0 || n.sub !== vt) n = this.activeLink = new Lp(vt, this), vt.deps ? (n.prevDep = vt.depsTail, vt.depsTail.nextDep = n, vt.depsTail = n) : vt.deps = vt.depsTail = n, lm(n);
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
const Fi = /* @__PURE__ */ new WeakMap(), Za = Symbol(""), Is = Symbol(""), Po = Symbol("");
function jt(e, t, n) {
  if (Vn && vt) {
    let a = Fi.get(e);
    a || Fi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Wu()), l.map = a, l.key = n), l.track();
  }
}
function la(e, t, n, a, l, o) {
  const i = Fi.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (Nu(), t === "clear") i.forEach(r);
  else {
    const s = $e(e), c = s && or(n);
    if (s && n === "length") {
      const u = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !zn(f) && f >= u) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), c && r(i.get(Po)), t) {
      case "add":
        s ? c && r(i.get("length")) : (r(i.get(Za)), Fl(e) && r(i.get(Is)));
        break;
      case "delete":
        s || (r(i.get(Za)), Fl(e) && r(i.get(Is)));
        break;
      case "set":
        Fl(e) && r(i.get(Za));
        break;
    }
  }
  Hu();
}
function Rp(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function Cl(e) {
  const t = Te(e);
  return t === e ? t : (jt(t, "iterate", Po), mn(e) ? t : t.map(An));
}
function sr(e) {
  return jt(e = Te(e), "iterate", Po), e;
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
  return a !== e && !mn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Np = Array.prototype;
function Qn(e, t, n, a, l, o) {
  const i = sr(e), r = i !== e && !mn(e), s = i[t];
  if (s !== Np[t]) {
    const d = s.apply(e, o);
    return r ? An(d) : d;
  }
  let c = n;
  i !== e && (r ? c = function(d, f) {
    return n.call(this, Ca(e, d), f, e);
  } : n.length > 2 && (c = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const u = s.call(i, c, a);
  return r && l ? l(u) : u;
}
function kd(e, t, n, a) {
  const l = sr(e);
  let o = n;
  return l !== e && (mn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ca(e, r), s, e);
  }), l[t](o, ...a);
}
function Zr(e, t, n) {
  const a = Te(e);
  jt(a, "iterate", Po);
  const l = a[t](...n);
  return (l === -1 || l === false) && Jo(n[0]) ? (n[0] = Te(n[0]), a[t](...n)) : l;
}
function oo(e, t, n = []) {
  ra(), Nu();
  const a = Te(e)[t].apply(e, n);
  return Hu(), sa(), a;
}
const Hp = $u("__proto__,__v_isRef,__isVue"), om = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zn));
function zp(e) {
  zn(e) || (e = String(e));
  const t = Te(this);
  return jt(t, "has", e), t.hasOwnProperty(e);
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
    if ((zn(n) ? om.has(n) : Hp(n)) || (l || jt(t, "get", n), o)) return r;
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
      const c = ua(o);
      if (!mn(a) && !ua(a) && (o = Te(o), a = Te(a)), !i && ht(o) && !ht(a)) return c || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : tt(t, n), s = Reflect.set(t, n, a, ht(t) ? t : l);
    return t === Te(l) && (r ? Va(a, o) && la(t, "set", n, a) : la(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = tt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && la(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!zn(n) || !om.has(n)) && jt(t, "has", n), a;
  }
  ownKeys(t) {
    return jt(t, "iterate", $e(t) ? "length" : Za), Reflect.ownKeys(t);
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
    const l = this.__v_raw, o = Te(l), i = Fl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, c = l[e](...a), u = n ? Ps : t ? Hl : An;
    return !t && jt(o, "iterate", s ? Is : Za), At(Object.create(c), { next() {
      const { value: d, done: f } = c.next();
      return f ? { value: d, done: f } : { value: r ? [u(d[0]), u(d[1])] : u(d), done: f };
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
    const o = this.__v_raw, i = Te(o), r = Te(l);
    e || (Va(l, r) && jt(i, "get", l), jt(i, "get", r));
    const { has: s } = hi(i), c = t ? Ps : e ? Hl : An;
    if (s.call(i, l)) return c(o.get(l));
    if (s.call(i, r)) return c(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && jt(Te(l), "iterate", Za), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Te(o), r = Te(l);
    return e || (Va(l, r) && jt(i, "has", l), jt(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Te(r), c = t ? Ps : e ? Hl : An;
    return !e && jt(s, "iterate", Za), r.forEach((u, d) => l.call(o, c(u), c(d), i));
  } };
  return At(n, e ? { add: yi("add"), set: yi("set"), delete: yi("delete"), clear: yi("clear") } : { add(l) {
    !t && !mn(l) && !ua(l) && (l = Te(l));
    const o = Te(this);
    return hi(o).has.call(o, l) || (o.add(l), la(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !mn(o) && !ua(o) && (o = Te(o));
    const i = Te(this), { has: r, get: s } = hi(i);
    let c = r.call(i, l);
    c || (l = Te(l), c = r.call(i, l));
    const u = s.call(i, l);
    return i.set(l, o), c ? Va(o, u) && la(i, "set", l, o) : la(i, "add", l, o), this;
  }, delete(l) {
    const o = Te(this), { has: i, get: r } = hi(o);
    let s = i.call(o, l);
    s || (l = Te(l), s = i.call(o, l)), r && r.call(o, l);
    const c = o.delete(l);
    return s && la(o, "delete", l, void 0), c;
  }, clear() {
    const l = Te(this), o = l.size !== 0, i = l.clear();
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
function mn(e) {
  return !!(e && e.__v_isShallow);
}
function Jo(e) {
  return e ? !!e.__v_raw : false;
}
function Te(e) {
  const t = e && e.__v_raw;
  return t ? Te(t) : e;
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
    this.dep = new Wu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Te(t), this._value = n ? t : An(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || mn(t) || ua(t);
    t = a ? t : Te(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : An(t), this.dep.trigger());
  }
}
function Ne(e) {
  return ht(e) ? e.value : e;
}
function nt(e) {
  return He(e) ? e() : Ne(e);
}
const aS = { get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)), set: (e, t, n, a) => {
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
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Te(t);
    let l = true, o = t;
    if (!$e(t) || !or(String(n))) do
      l = !Jo(o) || mn(o);
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
const bi = {}, Li = /* @__PURE__ */ new WeakMap();
let Ya;
function sS(e, t = false, n = Ya) {
  if (n) {
    let a = Li.get(n);
    a || Li.set(n, a = []), a.push(e);
  }
}
function uS(e, t, n = ut) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, c = (V) => l ? V : mn(V) || l === false || l === 0 ? oa(V, 1) : oa(V);
  let u, d, f, v, S = false, m = false;
  if (ht(e) ? (d = () => e.value, S = mn(e)) : Ia(e) ? (d = () => c(e), S = true) : $e(e) ? (m = true, S = e.some((V) => Ia(V) || mn(V)), d = () => e.map((V) => {
    if (ht(V)) return V.value;
    if (Ia(V)) return c(V);
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
    Ya = u;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ya = V;
    }
  } : d = Hn, t && l) {
    const V = d, w = l === true ? 1 / 0 : l;
    d = () => oa(V(), w);
  }
  const y = Xv(), h = () => {
    u.stop(), y && y.active && Lu(y.effects, u);
  };
  if (o && t) {
    const V = t;
    t = (...w) => {
      V(...w), h();
    };
  }
  let k = m ? new Array(e.length).fill(bi) : bi;
  const I = (V) => {
    if (!(!(u.flags & 1) || !u.dirty && !V)) if (t) {
      const w = u.run();
      if (l || S || (m ? w.some((g, C) => Va(g, k[C])) : Va(w, k))) {
        f && f();
        const g = Ya;
        Ya = u;
        try {
          const C = [w, k === bi ? void 0 : m && k[0] === bi ? [] : k, v];
          k = w, s ? s(t, 3, C) : t(...C);
        } finally {
          Ya = g;
        }
      }
    } else u.run();
  };
  return r && r(I), u = new Zv(d), u.scheduler = i ? () => i(I, false) : I, v = (V) => sS(V, false, u), f = u.onStop = () => {
    const V = Li.get(u);
    if (V) {
      if (s) s(V, 4);
      else for (const w of V) w();
      Li.delete(u);
    }
  }, t ? a ? I(true) : k = u.run() : i ? i(I.bind(null, true), true) : u.run(), h.pause = u.pause.bind(u), h.resume = u.resume.bind(u), h.stop = h, h;
}
function oa(e, t = 1 / 0, n) {
  if (t <= 0 || !et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, ht(e)) oa(e.value, t, n);
  else if ($e(e)) for (let a = 0; a < e.length; a++) oa(e[a], t, n);
  else if (Hv(e) || Fl(e)) e.forEach((a) => {
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
    const s = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, s, c) === false) return;
      }
      r = r.parent;
    }
    if (o) {
      ra(), Qo(o, null, 10, [e, s, c]), sa();
      return;
    }
  }
  cS(e, n, l, a, i);
}
function cS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Zt = [];
let Ln = -1;
const Ll = [];
let _a = null, Al = 0;
const gm = Promise.resolve();
let Ri = null;
function Ee(e) {
  const t = Ri || gm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dS(e) {
  let t = Ln + 1, n = Zt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Zt[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Gu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? Zt.push(e) : Zt.splice(dS(t), 0, e), e.flags |= 1, hm();
  }
}
function hm() {
  Ri || (Ri = gm.then(bm));
}
function fS(e) {
  $e(e) ? Ll.push(...e) : _a && e.id === -1 ? _a.splice(Al + 1, 0, e) : e.flags & 1 || (Ll.push(e), e.flags |= 1), hm();
}
function wd(e, t, n = Ln + 1) {
  for (; n < Zt.length; n++) {
    const a = Zt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Zt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ym(e) {
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
function bm(e) {
  try {
    for (Ln = 0; Ln < Zt.length; Ln++) {
      const t = Zt[Ln];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ln < Zt.length; Ln++) {
      const t = Zt[Ln];
      t && (t.flags &= -2);
    }
    Ln = -1, Zt.length = 0, ym(), Ri = null, (Zt.length || Ll.length) && bm();
  }
}
let un = null, pm = null;
function Oi(e) {
  const t = un;
  return un = e, pm = e && e.type.__scopeId || null, t;
}
function Pe(e, t = un, n) {
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
  if (un === null) return e;
  const n = gr(un), a = e.dirs || (e.dirs = []);
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
  if (Gt) {
    let n = Gt.provides;
    const a = Gt.parent && Gt.parent.provides;
    a === n && (n = Gt.provides = Object.create(a)), n[e] = t;
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
  let c;
  if (Mo) {
    if (o === "sync") {
      const v = mS();
      c = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Hn, v.resume = Hn, v.pause = Hn, v;
    }
  }
  const u = Gt;
  r.call = (v, S, m) => Tn(v, u, S, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    zt(v, u && u.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, S) => {
    S ? v() : Gu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const f = uS(e, t, r);
  return Mo && (c ? c.push(f) : s && f()), f;
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
}, xm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, c) {
  const { mc: u, pc: d, pbc: f, o: { insert: v, querySelector: S, createText: m, createComment: y } } = c, h = po(t.props);
  let { shapeFlag: k, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const w = t.el = m(""), g = t.anchor = m("");
    v(w, n, a), v(g, n, a);
    const C = (A, P) => {
      k & 16 && u(I, A, P, l, o, i, r, s);
    }, x = () => {
      const A = t.target = As(t.props, S), P = Ts(A, t, m, v);
      A && (i !== "svg" && Cd(A) ? i = "svg" : i !== "mathml" && _d(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Ai(t, false)));
    };
    h && (C(n, g), Ai(t, true)), xd(t.props) ? (t.el.__isMounted = false, zt(() => {
      x(), delete t.el.__isMounted;
    }, o)) : x();
  } else {
    if (xd(t.props) && e.el.__isMounted === false) {
      zt(() => {
        xm.process(e, t, n, a, l, o, i, r, s, c);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const w = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, x = po(e.props), A = x ? n : g, P = x ? w : C;
    if (i === "svg" || Cd(g) ? i = "svg" : (i === "mathml" || _d(g)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, A, l, o, i, r), Ju(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, w, c, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = As(t.props, S);
      E && pi(t, E, null, c, 0);
    } else x && pi(t, g, C, c, 1);
    Ai(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: c, targetAnchor: u, target: d, props: f } = e;
  if (d && (l(c), l(u)), o && l(s), i & 16) {
    const v = o || !po(f);
    for (let S = 0; S < r.length; S++) {
      const m = r[S];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: pi, hydrate: hS };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: c, props: u } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(u)) && s & 16) for (let f = 0; f < c.length; f++) l(c[f], t, n, 2);
  d && a(r, t, n);
}
function hS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: c, createText: u } }, d) {
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
  function v(y, h) {
    h.anchor = d(i(y), h, r(y), n, a, l, o);
  }
  const S = t.target = As(t.props, s), m = po(t.props);
  if (S) {
    const y = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(S, y), t.targetAnchor || Ts(S, t, u, c, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, y), t.targetAnchor || Ts(S, t, u, c), d(y && i(y), t, S, n, a, l, o))), Ai(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
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
  }), Nt(() => {
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
    const o = Im(l), i = Te(e), { mode: r } = i;
    if (a.isLeaving) return Jr(o);
    const s = Vd(o);
    if (!s) return Jr(o);
    let c = To(s, i, a, n, (d) => c = d);
    s.type !== Ut && ll(s, c);
    let u = n.subTree && Vd(n.subTree);
    if (u && u.type !== Ut && !qa(u, s) && Vm(n).type !== Ut) {
      let d = To(u, i, a, n);
      if (ll(u, d), r === "out-in" && s.type !== Ut) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
      }, Jr(o);
      r === "in-out" && s.type !== Ut ? d.delayLeave = (f, v, S) => {
        const m = Pm(a, u);
        m[String(u.key)] = u, f[Rn] = () => {
          v(), f[Rn] = void 0, delete c.delayedLeave, u = void 0;
        }, c.delayedLeave = () => {
          S(), delete c.delayedLeave, u = void 0;
        };
      } : u = void 0;
    } else u && (u = void 0);
    return o;
  };
} };
function Im(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Ut) {
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
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: c, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: S, onLeaveCancelled: m, onBeforeAppear: y, onAppear: h, onAfterAppear: k, onAppearCancelled: I } = t, V = String(e.key), w = Pm(n, e), g = (A, P) => {
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
    let P = c, E = u, D = d;
    if (!n.isMounted) if (o) P = h || c, E = k || u, D = I || d;
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
    A[Rn] = (T) => {
      D || (D = true, P(), T ? g(m, [A]) : g(S, [A]), A[Rn] = void 0, w[E] === e && delete w[E]);
    };
    const M = A[Rn].bind(null, false);
    w[E] = e, v ? C(v, [A, M]) : M();
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
    i.type === ge ? (i.patchFlag & 128 && l++, a = a.concat(Ku(i.children, t, r))) : (t || i.type !== Ut) && a.push(r != null ? ca(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function an(e, t) {
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
    e.forEach((m, y) => So(m, t && ($e(t) ? t[y] : t), n, a, l));
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && So(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? gr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, c = t && t.r, u = r.refs === ut ? r.refs = {} : r.refs, d = r.setupState, f = Te(d), v = d === ut ? Nv : (m) => Id(u, m) ? false : tt(f, m), S = (m, y) => !(y && Id(u, y));
  if (c != null && c !== s) {
    if (Pd(t), yt(c)) u[c] = null, v(c) && (d[c] = null);
    else if (ht(c)) {
      const m = t;
      S(c, m.k) && (c.value = null), m.k && (u[m.k] = null);
    }
  }
  if (He(s)) Qo(s, r, 12, [i, u]);
  else {
    const m = yt(s), y = ht(s);
    if (m || y) {
      const h = () => {
        if (e.f) {
          const k = m ? v(s) ? d[s] : u[s] : S() || !e.k ? s.value : u[e.k];
          if (l) $e(k) && Lu(k, o);
          else if ($e(k)) k.includes(o) || k.push(o);
          else if (m) u[s] = [o], v(s) && (d[s] = u[s]);
          else {
            const I = [o];
            S(s, e.k) && (s.value = I), e.k && (u[e.k] = I);
          }
        } else m ? (u[s] = i, v(s) && (d[s] = i)) : y && (S(s, e.k) && (s.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const k = () => {
          h(), Ni.delete(e);
        };
        k.id = -1, Ni.set(e, k), zt(k, n);
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
function Dm(e, t, n = Gt) {
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
    Lu(a[t], l);
  }, n);
}
function dr(e, t, n = Gt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ra();
      const r = ni(n), s = Tn(t, n, e, i);
      return r(), sa(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const va = (e) => (t, n = Gt) => {
  (!Mo || e === "sp") && dr(e, (...a) => t(...a), n);
}, Jl = va("bm"), Ct = va("m"), Em = va("bu"), fr = va("u"), Nt = va("bum"), vr = va("um"), kS = va("sp"), wS = va("rtg"), xS = va("rtc");
function CS(e, t = Gt) {
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
  const l = un || Gt;
  if (l) {
    const o = l.type;
    {
      const r = sk(o, false);
      if (r && (r === t || r === nn(t) || r === Yn(nn(t)))) return o;
    }
    const i = Ad(l[e] || o[e], t) || Ad(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function Ad(e, t) {
  return e && (e[t] || e[nn(t)] || e[Yn(nn(t))]);
}
function Jt(e, t, n, a) {
  let l;
  const o = n, i = $e(e);
  if (i || yt(e)) {
    const r = i && Ia(e);
    let s = false, c = false;
    r && (s = !mn(e), c = ua(e), e = sr(e)), l = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++) l[u] = t(s ? c ? Hl(An(e[u])) : An(e[u]) : e[u], u, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (et(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
  else {
    const r = Object.keys(e);
    l = new Array(r.length);
    for (let s = 0, c = r.length; s < c; s++) {
      const u = r[s];
      l[s] = t(e[u], u, s, o);
    }
  }
  else l = [];
  return l;
}
const Ds = (e) => e ? eg(e) ? gr(e) : Ds(e.parent) : null, wo = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ds(e.parent), $root: (e) => Ds(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Fm(e), $forceUpdate: (e) => e.f || (e.f = () => {
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
  const c = wo[t];
  let u, d;
  if (c) return t === "$attrs" && jt(e.attrs, "get", ""), c(e);
  if ((u = r.__cssModules) && (u = u[t])) return u;
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
  const t = Fm(e), n = e.proxy, a = e.ctx;
  Es = false, t.beforeCreate && Dd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: c, created: u, beforeMount: d, mounted: f, beforeUpdate: v, updated: S, activated: m, deactivated: y, beforeDestroy: h, beforeUnmount: k, destroyed: I, unmounted: V, render: w, renderTracked: g, renderTriggered: C, errorCaptured: x, serverPrefetch: A, expose: P, inheritAttrs: E, components: D, directives: M, filters: T } = t;
  if (c && AS(c, a, null), i) for (const N in i) {
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
  u && Dd(u, e, "c");
  function W(N, Z) {
    $e(Z) ? Z.forEach((R) => N(R.bind(n))) : Z && N(Z.bind(n));
  }
  if (W(Jl, d), W(Ct, f), W(Em, v), W(fr, S), W(Tm, m), W(qu, y), W(CS, x), W(xS, g), W(wS, C), W(Nt, k), W(vr, V), W(kS, A), $e(P)) if (P.length) {
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
function Fm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((c) => Hi(s, c, i, true)), Hi(s, t, i)), et(t) && o.set(t, s), s;
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
const TS = { data: Ed, props: Md, emits: Md, methods: fo, computed: fo, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: fo, directives: fo, watch: ES, provide: Ed, inject: DS };
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
function Xt(e, t) {
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
  for (const a in t) n[a] = Xt(e[a], t[a]);
  return n;
}
function Lm() {
  return { app: null, config: { isNativeTag: Nv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let MS = 0;
function BS(e, t) {
  return function(a, l = null) {
    He(a) || (a = At({}, a)), l != null && !et(l) && (l = null);
    const o = Lm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const c = o.app = { _uid: MS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: ck, get config() {
      return o.config;
    }, set config(u) {
    }, use(u, ...d) {
      return i.has(u) || (u && He(u.install) ? (i.add(u), u.install(c, ...d)) : He(u) && (i.add(u), u(c, ...d))), c;
    }, mixin(u) {
      return o.mixins.includes(u) || o.mixins.push(u), c;
    }, component(u, d) {
      return d ? (o.components[u] = d, c) : o.components[u];
    }, directive(u, d) {
      return d ? (o.directives[u] = d, c) : o.directives[u];
    }, mount(u, d, f) {
      if (!s) {
        const v = c._ceVNode || b(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, u, f), s = true, c._container = u, u.__vue_app__ = c, gr(v.component);
      }
    }, onUnmount(u) {
      r.push(u);
    }, unmount() {
      s && (Tn(r, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
    }, provide(u, d) {
      return o.provides[u] = d, c;
    }, runWithContext(u) {
      const d = Rl;
      Rl = c;
      try {
        return u();
      } finally {
        Rl = d;
      }
    } };
    return c;
  };
}
let Rl = null;
const $S = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nn(t)}Modifiers`] || e[`${vl(t)}Modifiers`];
function FS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ut;
  let l = n;
  const o = t.startsWith("update:"), i = o && $S(a, t.slice(7));
  i && (i.trim && (l = n.map((u) => yt(u) ? u.trim() : u)), i.number && (l = n.map(Ru)));
  let r, s = a[r = Yr(t)] || a[r = Yr(nn(t))];
  !s && o && (s = a[r = Yr(vl(t))]), s && Tn(s, e, 6, l);
  const c = a[r + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Tn(c, e, 6, l);
  }
}
const LS = /* @__PURE__ */ new WeakMap();
function Rm(e, t, n = false) {
  const a = n ? LS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!He(e)) {
    const s = (c) => {
      const u = Rm(c, t, true);
      u && (r = true, At(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (et(e) && a.set(e, null), null) : ($e(o) ? o.forEach((s) => i[s] = null) : At(i, o), et(e) && a.set(e, i), i);
}
function mr(e, t) {
  return !e || !lr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, vl(t)) || tt(e, t));
}
function Bd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: c, renderCache: u, props: d, data: f, setupState: v, ctx: S, inheritAttrs: m } = e, y = Oi(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, w = V;
      h = On(c.call(w, V, u, d, v, f, S)), k = r;
    } else {
      const V = t;
      h = On(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), k = t.props ? r : RS(r);
    }
  } catch (V) {
    xo.length = 0, ur(V, e, 1), h = b(Ut);
  }
  let I = h;
  if (k && m !== false) {
    const V = Object.keys(k), { shapeFlag: w } = I;
    V.length && w & 7 && (o && V.some(Fu) && (k = OS(k, o)), I = ca(I, k, false, true));
  }
  return n.dirs && (I = ca(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ll(I, n.transition), h = I, Oi(y), h;
}
const RS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, OS = (e, t) => {
  const n = {};
  for (const a in e) (!Fu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function NS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, c = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? $d(a, i, c) : !!i;
    if (s & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (Om(i, a, f) && !mr(c, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? $d(a, i, c) : true : !!i;
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
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Te(l), [s] = e.propsOptions;
  let c = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (mr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (tt(o, f)) v !== o[f] && (o[f] = v, c = true);
        else {
          const S = nn(f);
          l[S] = Bs(s, r, S, v, e, false);
        }
        else v !== o[f] && (o[f] = v, c = true);
      }
    }
  } else {
    Wm(e, t, l, o) && (c = true);
    let u;
    for (const d in r) (!t || !tt(t, d) && ((u = vl(d)) === d || !tt(t, u))) && (s ? n && (n[d] !== void 0 || n[u] !== void 0) && (l[d] = Bs(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !tt(t, d)) && (delete o[d], c = true);
  }
  c && la(e.attrs, "set", "");
}
function Wm(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (ho(s)) continue;
    const c = t[s];
    let u;
    l && tt(l, u = nn(s)) ? !o || !o.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : mr(e.emitsOptions, s) || (!(s in a) || c !== a[s]) && (a[s] = c, i = true);
  }
  if (o) {
    const s = Te(n), c = r || ut;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Bs(l, s, d, c[d], e, !tt(c, d));
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
        const { propsDefaults: c } = l;
        if (n in c) a = c[n];
        else {
          const u = ni(l);
          a = c[n] = s.call(null, t), u();
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
    const u = (d) => {
      s = true;
      const [f, v] = jm(d, t, true);
      At(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !s) return et(e) && a.set(e, $l), $l;
  if ($e(o)) for (let u = 0; u < o.length; u++) {
    const d = nn(o[u]);
    Fd(d) && (i[d] = ut);
  }
  else if (o) for (const u in o) {
    const d = nn(u);
    if (Fd(d)) {
      const f = o[u], v = i[d] = $e(f) || He(f) ? { type: f } : At({}, f), S = v.type;
      let m = false, y = true;
      if ($e(S)) for (let h = 0; h < S.length; ++h) {
        const k = S[h], I = He(k) && k.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (y = false);
      }
      else m = He(S) && S.name === "Boolean";
      v[0] = m, v[1] = y, (m || tt(v, "default")) && r.push(d);
    }
  }
  const c = [i, r];
  return et(e) && a.set(e, c), c;
}
function Fd(e) {
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
}, zt = JS;
function KS(e) {
  return qS(e);
}
function qS(e, t) {
  const n = rr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: c, setElementText: u, parentNode: d, nextSibling: f, setScopeId: v = Hn, insertStaticContent: S } = e, m = (F, H, Q, ue = null, oe = null, se = null, be = void 0, ce = null, G = !!H.dynamicChildren) => {
    if (F === H) return;
    F && !qa(F, H) && (ue = ne(F), j(F, oe, se, true), F = null), H.patchFlag === -2 && (G = false, H.dynamicChildren = null);
    const { type: le, ref: _e, shapeFlag: X } = H;
    switch (le) {
      case ei:
        y(F, H, Q, ue);
        break;
      case Ut:
        h(F, H, Q, ue);
        break;
      case ts:
        F == null && k(H, Q, ue, be);
        break;
      case ge:
        D(F, H, Q, ue, oe, se, be, ce, G);
        break;
      default:
        X & 1 ? w(F, H, Q, ue, oe, se, be, ce, G) : X & 6 ? M(F, H, Q, ue, oe, se, be, ce, G) : (X & 64 || X & 128) && le.process(F, H, Q, ue, oe, se, be, ce, G, xe);
    }
    _e != null && oe ? So(_e, F && F.ref, se, H || F, !H) : _e == null && F && F.ref != null && So(F.ref, null, se, F, true);
  }, y = (F, H, Q, ue) => {
    if (F == null) a(H.el = r(H.children), Q, ue);
    else {
      const oe = H.el = F.el;
      H.children !== F.children && c(oe, H.children);
    }
  }, h = (F, H, Q, ue) => {
    F == null ? a(H.el = s(H.children || ""), Q, ue) : H.el = F.el;
  }, k = (F, H, Q, ue) => {
    [F.el, F.anchor] = S(F.children, H, Q, ue, F.el, F.anchor);
  }, I = ({ el: F, anchor: H }, Q, ue) => {
    let oe;
    for (; F && F !== H; ) oe = f(F), a(F, Q, ue), F = oe;
    a(H, Q, ue);
  }, V = ({ el: F, anchor: H }) => {
    let Q;
    for (; F && F !== H; ) Q = f(F), l(F), F = Q;
    l(H);
  }, w = (F, H, Q, ue, oe, se, be, ce, G) => {
    if (H.type === "svg" ? be = "svg" : H.type === "math" && (be = "mathml"), F == null) g(H, Q, ue, oe, se, be, ce, G);
    else {
      const le = F.el && F.el._isVueCE ? F.el : null;
      try {
        le && le._beginPatch(), A(F, H, oe, se, be, ce, G);
      } finally {
        le && le._endPatch();
      }
    }
  }, g = (F, H, Q, ue, oe, se, be, ce) => {
    let G, le;
    const { props: _e, shapeFlag: X, transition: me, dirs: Se } = F;
    if (G = F.el = i(F.type, se, _e && _e.is, _e), X & 8 ? u(G, F.children) : X & 16 && x(F.children, G, null, ue, oe, es(F, se), be, ce), Se && Ha(F, null, ue, "created"), C(G, F, F.scopeId, be, ue), _e) {
      for (const Ve in _e) Ve !== "value" && !ho(Ve) && o(G, Ve, null, _e[Ve], se, ue);
      "value" in _e && o(G, "value", null, _e.value, se), (le = _e.onVnodeBeforeMount) && Bn(le, ue, F);
    }
    Se && Ha(F, null, ue, "beforeMount");
    const ke = XS(oe, me);
    ke && me.beforeEnter(G), a(G, H, Q), ((le = _e && _e.onVnodeMounted) || ke || Se) && zt(() => {
      le && Bn(le, ue, F), ke && me.enter(G), Se && Ha(F, null, ue, "mounted");
    }, oe);
  }, C = (F, H, Q, ue, oe) => {
    if (Q && v(F, Q), ue) for (let se = 0; se < ue.length; se++) v(F, ue[se]);
    if (oe) {
      let se = oe.subTree;
      if (H === se || Xm(se.type) && (se.ssContent === H || se.ssFallback === H)) {
        const be = oe.vnode;
        C(F, be, be.scopeId, be.slotScopeIds, oe.parent);
      }
    }
  }, x = (F, H, Q, ue, oe, se, be, ce, G = 0) => {
    for (let le = G; le < F.length; le++) {
      const _e = F[le] = ce ? na(F[le]) : On(F[le]);
      m(null, _e, H, Q, ue, oe, se, be, ce);
    }
  }, A = (F, H, Q, ue, oe, se, be) => {
    const ce = H.el = F.el;
    let { patchFlag: G, dynamicChildren: le, dirs: _e } = H;
    G |= F.patchFlag & 16;
    const X = F.props || ut, me = H.props || ut;
    let Se;
    if (Q && za(Q, false), (Se = me.onVnodeBeforeUpdate) && Bn(Se, Q, H, F), _e && Ha(H, F, Q, "beforeUpdate"), Q && za(Q, true), (X.innerHTML && me.innerHTML == null || X.textContent && me.textContent == null) && u(ce, ""), le ? P(F.dynamicChildren, le, ce, Q, ue, es(H, oe), se) : be || Z(F, H, ce, null, Q, ue, es(H, oe), se, false), G > 0) {
      if (G & 16) E(ce, X, me, Q, oe);
      else if (G & 2 && X.class !== me.class && o(ce, "class", null, me.class, oe), G & 4 && o(ce, "style", X.style, me.style, oe), G & 8) {
        const ke = H.dynamicProps;
        for (let Ve = 0; Ve < ke.length; Ve++) {
          const Fe = ke[Ve], Ge = X[Fe], Oe = me[Fe];
          (Oe !== Ge || Fe === "value") && o(ce, Fe, Ge, Oe, oe, Q);
        }
      }
      G & 1 && F.children !== H.children && u(ce, H.children);
    } else !be && le == null && E(ce, X, me, Q, oe);
    ((Se = me.onVnodeUpdated) || _e) && zt(() => {
      Se && Bn(Se, Q, H, F), _e && Ha(H, F, Q, "updated");
    }, ue);
  }, P = (F, H, Q, ue, oe, se, be) => {
    for (let ce = 0; ce < H.length; ce++) {
      const G = F[ce], le = H[ce], _e = G.el && (G.type === ge || !qa(G, le) || G.shapeFlag & 198) ? d(G.el) : Q;
      m(G, le, _e, null, ue, oe, se, be, true);
    }
  }, E = (F, H, Q, ue, oe) => {
    if (H !== Q) {
      if (H !== ut) for (const se in H) !ho(se) && !(se in Q) && o(F, se, H[se], null, oe, ue);
      for (const se in Q) {
        if (ho(se)) continue;
        const be = Q[se], ce = H[se];
        be !== ce && se !== "value" && o(F, se, ce, be, oe, ue);
      }
      "value" in Q && o(F, "value", H.value, Q.value, oe);
    }
  }, D = (F, H, Q, ue, oe, se, be, ce, G) => {
    const le = H.el = F ? F.el : r(""), _e = H.anchor = F ? F.anchor : r("");
    let { patchFlag: X, dynamicChildren: me, slotScopeIds: Se } = H;
    Se && (ce = ce ? ce.concat(Se) : Se), F == null ? (a(le, Q, ue), a(_e, Q, ue), x(H.children || [], Q, _e, oe, se, be, ce, G)) : X > 0 && X & 64 && me && F.dynamicChildren && F.dynamicChildren.length === me.length ? (P(F.dynamicChildren, me, Q, oe, se, be, ce), (H.key != null || oe && H === oe.subTree) && Ju(F, H, true)) : Z(F, H, Q, _e, oe, se, be, ce, G);
  }, M = (F, H, Q, ue, oe, se, be, ce, G) => {
    H.slotScopeIds = ce, F == null ? H.shapeFlag & 512 ? oe.ctx.activate(H, Q, ue, be, G) : T(H, Q, ue, oe, se, be, G) : L(F, H, G);
  }, T = (F, H, Q, ue, oe, se, be) => {
    const ce = F.component = ak(F, ue, oe);
    if (cr(F) && (ce.ctx.renderer = xe), lk(ce, false, be), ce.asyncDep) {
      if (oe && oe.registerDep(ce, W, be), !F.el) {
        const G = ce.subTree = b(Ut);
        h(null, G, H, Q), F.placeholder = G.el;
      }
    } else W(ce, F, H, Q, oe, se, be);
  }, L = (F, H, Q) => {
    const ue = H.component = F.component;
    if (NS(F, H, Q)) if (ue.asyncDep && !ue.asyncResolved) {
      N(ue, H, Q);
      return;
    } else ue.next = H, ue.update();
    else H.el = F.el, ue.vnode = H;
  }, W = (F, H, Q, ue, oe, se, be) => {
    const ce = () => {
      if (F.isMounted) {
        let { next: X, bu: me, u: Se, parent: ke, vnode: Ve } = F;
        {
          const lt = Km(F);
          if (lt) {
            X && (X.el = Ve.el, N(F, X, be)), lt.asyncDep.then(() => {
              zt(() => {
                F.isUnmounted || le();
              }, oe);
            });
            return;
          }
        }
        let Fe = X, Ge;
        za(F, false), X ? (X.el = Ve.el, N(F, X, be)) : X = Ve, me && Pi(me), (Ge = X.props && X.props.onVnodeBeforeUpdate) && Bn(Ge, ke, X, Ve), za(F, true);
        const Oe = Bd(F), ft = F.subTree;
        F.subTree = Oe, m(ft, Oe, d(ft.el), ne(ft), F, oe, se), X.el = Oe.el, Fe === null && HS(F, Oe.el), Se && zt(Se, oe), (Ge = X.props && X.props.onVnodeUpdated) && zt(() => Bn(Ge, ke, X, Ve), oe);
      } else {
        let X;
        const { el: me, props: Se } = H, { bm: ke, m: Ve, parent: Fe, root: Ge, type: Oe } = F, ft = ko(H);
        za(F, false), ke && Pi(ke), !ft && (X = Se && Se.onVnodeBeforeMount) && Bn(X, Fe, H), za(F, true);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(Oe);
          const lt = F.subTree = Bd(F);
          m(null, lt, Q, ue, F, oe, se), H.el = lt.el;
        }
        if (Ve && zt(Ve, oe), !ft && (X = Se && Se.onVnodeMounted)) {
          const lt = H;
          zt(() => Bn(X, Fe, lt), oe);
        }
        (H.shapeFlag & 256 || Fe && ko(Fe.vnode) && Fe.vnode.shapeFlag & 256) && F.a && zt(F.a, oe), F.isMounted = true, H = Q = ue = null;
      }
    };
    F.scope.on();
    const G = F.effect = new Zv(ce);
    F.scope.off();
    const le = F.update = G.run.bind(G), _e = F.job = G.runIfDirty.bind(G);
    _e.i = F, _e.id = F.uid, G.scheduler = () => Gu(_e), za(F, true), le();
  }, N = (F, H, Q) => {
    H.component = F;
    const ue = F.vnode.props;
    F.vnode = H, F.next = null, WS(F, H.props, ue, Q), YS(F, H.children, Q), ra(), wd(F), sa();
  }, Z = (F, H, Q, ue, oe, se, be, ce, G = false) => {
    const le = F && F.children, _e = F ? F.shapeFlag : 0, X = H.children, { patchFlag: me, shapeFlag: Se } = H;
    if (me > 0) {
      if (me & 128) {
        $(le, X, Q, ue, oe, se, be, ce, G);
        return;
      } else if (me & 256) {
        R(le, X, Q, ue, oe, se, be, ce, G);
        return;
      }
    }
    Se & 8 ? (_e & 16 && ye(le, oe, se), X !== le && u(Q, X)) : _e & 16 ? Se & 16 ? $(le, X, Q, ue, oe, se, be, ce, G) : ye(le, oe, se, true) : (_e & 8 && u(Q, ""), Se & 16 && x(X, Q, ue, oe, se, be, ce, G));
  }, R = (F, H, Q, ue, oe, se, be, ce, G) => {
    F = F || $l, H = H || $l;
    const le = F.length, _e = H.length, X = Math.min(le, _e);
    let me;
    for (me = 0; me < X; me++) {
      const Se = H[me] = G ? na(H[me]) : On(H[me]);
      m(F[me], Se, Q, null, oe, se, be, ce, G);
    }
    le > _e ? ye(F, oe, se, true, false, X) : x(H, Q, ue, oe, se, be, ce, G, X);
  }, $ = (F, H, Q, ue, oe, se, be, ce, G) => {
    let le = 0;
    const _e = H.length;
    let X = F.length - 1, me = _e - 1;
    for (; le <= X && le <= me; ) {
      const Se = F[le], ke = H[le] = G ? na(H[le]) : On(H[le]);
      if (qa(Se, ke)) m(Se, ke, Q, null, oe, se, be, ce, G);
      else break;
      le++;
    }
    for (; le <= X && le <= me; ) {
      const Se = F[X], ke = H[me] = G ? na(H[me]) : On(H[me]);
      if (qa(Se, ke)) m(Se, ke, Q, null, oe, se, be, ce, G);
      else break;
      X--, me--;
    }
    if (le > X) {
      if (le <= me) {
        const Se = me + 1, ke = Se < _e ? H[Se].el : ue;
        for (; le <= me; ) m(null, H[le] = G ? na(H[le]) : On(H[le]), Q, ke, oe, se, be, ce, G), le++;
      }
    } else if (le > me) for (; le <= X; ) j(F[le], oe, se, true), le++;
    else {
      const Se = le, ke = le, Ve = /* @__PURE__ */ new Map();
      for (le = ke; le <= me; le++) {
        const st = H[le] = G ? na(H[le]) : On(H[le]);
        st.key != null && Ve.set(st.key, le);
      }
      let Fe, Ge = 0;
      const Oe = me - ke + 1;
      let ft = false, lt = 0;
      const on = new Array(Oe);
      for (le = 0; le < Oe; le++) on[le] = 0;
      for (le = Se; le <= X; le++) {
        const st = F[le];
        if (Ge >= Oe) {
          j(st, oe, se, true);
          continue;
        }
        let pn;
        if (st.key != null) pn = Ve.get(st.key);
        else for (Fe = ke; Fe <= me; Fe++) if (on[Fe - ke] === 0 && qa(st, H[Fe])) {
          pn = Fe;
          break;
        }
        pn === void 0 ? j(st, oe, se, true) : (on[pn - ke] = le + 1, pn >= lt ? lt = pn : ft = true, m(st, H[pn], Q, null, oe, se, be, ce, G), Ge++);
      }
      const ka = ft ? ZS(on) : $l;
      for (Fe = ka.length - 1, le = Oe - 1; le >= 0; le--) {
        const st = ke + le, pn = H[st], hd = H[st + 1], yd = st + 1 < _e ? hd.el || qm(hd) : ue;
        on[le] === 0 ? m(null, pn, Q, yd, oe, se, be, ce, G) : ft && (Fe < 0 || le !== ka[Fe] ? Y(pn, Q, yd, 2) : Fe--);
      }
    }
  }, Y = (F, H, Q, ue, oe = null) => {
    const { el: se, type: be, transition: ce, children: G, shapeFlag: le } = F;
    if (le & 6) {
      Y(F.component.subTree, H, Q, ue);
      return;
    }
    if (le & 128) {
      F.suspense.move(H, Q, ue);
      return;
    }
    if (le & 64) {
      be.move(F, H, Q, xe);
      return;
    }
    if (be === ge) {
      a(se, H, Q);
      for (let X = 0; X < G.length; X++) Y(G[X], H, Q, ue);
      a(F.anchor, H, Q);
      return;
    }
    if (be === ts) {
      I(F, H, Q);
      return;
    }
    if (ue !== 2 && le & 1 && ce) if (ue === 0) ce.beforeEnter(se), a(se, H, Q), zt(() => ce.enter(se), oe);
    else {
      const { leave: X, delayLeave: me, afterLeave: Se } = ce, ke = () => {
        F.ctx.isUnmounted ? l(se) : a(se, H, Q);
      }, Ve = () => {
        se._isLeaving && se[Rn](true), X(se, () => {
          ke(), Se && Se();
        });
      };
      me ? me(se, ke, Ve) : Ve();
    }
    else a(se, H, Q);
  }, j = (F, H, Q, ue = false, oe = false) => {
    const { type: se, props: be, ref: ce, children: G, dynamicChildren: le, shapeFlag: _e, patchFlag: X, dirs: me, cacheIndex: Se } = F;
    if (X === -2 && (oe = false), ce != null && (ra(), So(ce, null, Q, F, true), sa()), Se != null && (H.renderCache[Se] = void 0), _e & 256) {
      H.ctx.deactivate(F);
      return;
    }
    const ke = _e & 1 && me, Ve = !ko(F);
    let Fe;
    if (Ve && (Fe = be && be.onVnodeBeforeUnmount) && Bn(Fe, H, F), _e & 6) ae(F.component, Q, ue);
    else {
      if (_e & 128) {
        F.suspense.unmount(Q, ue);
        return;
      }
      ke && Ha(F, null, H, "beforeUnmount"), _e & 64 ? F.type.remove(F, H, Q, xe, ue) : le && !le.hasOnce && (se !== ge || X > 0 && X & 64) ? ye(le, H, Q, false, true) : (se === ge && X & 384 || !oe && _e & 16) && ye(G, H, Q), ue && O(F);
    }
    (Ve && (Fe = be && be.onVnodeUnmounted) || ke) && zt(() => {
      Fe && Bn(Fe, H, F), ke && Ha(F, null, H, "unmounted");
    }, Q);
  }, O = (F) => {
    const { type: H, el: Q, anchor: ue, transition: oe } = F;
    if (H === ge) {
      U(Q, ue);
      return;
    }
    if (H === ts) {
      V(F);
      return;
    }
    const se = () => {
      l(Q), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (F.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: be, delayLeave: ce } = oe, G = () => be(Q, se);
      ce ? ce(F.el, se, G) : G();
    } else se();
  }, U = (F, H) => {
    let Q;
    for (; F !== H; ) Q = f(F), l(F), F = Q;
    l(H);
  }, ae = (F, H, Q) => {
    const { bum: ue, scope: oe, job: se, subTree: be, um: ce, m: G, a: le } = F;
    Ld(G), Ld(le), ue && Pi(ue), oe.stop(), se && (se.flags |= 8, j(be, F, H, Q)), ce && zt(ce, H), zt(() => {
      F.isUnmounted = true;
    }, H);
  }, ye = (F, H, Q, ue = false, oe = false, se = 0) => {
    for (let be = se; be < F.length; be++) j(F[be], H, Q, ue, oe);
  }, ne = (F) => {
    if (F.shapeFlag & 6) return ne(F.component.subTree);
    if (F.shapeFlag & 128) return F.suspense.next();
    const H = f(F.anchor || F.el), Q = H && H[km];
    return Q ? f(Q) : H;
  };
  let fe = false;
  const Ae = (F, H, Q) => {
    let ue;
    F == null ? H._vnode && (j(H._vnode, null, null, true), ue = H._vnode.component) : m(H._vnode || null, F, H, null, null, null, Q), H._vnode = F, fe || (fe = true, wd(ue), ym(), fe = false);
  }, xe = { p: m, um: j, m: Y, r: O, mt: T, mc: x, pc: Z, pbc: P, n: ne, o: e };
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
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = na(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Ju(i, r)), r.type === ei && (r.patchFlag === -1 && (r = l[o] = na(r)), r.el = i.el), r.type === Ut && !r.el && (r.el = i.el);
  }
}
function ZS(e) {
  const t = e.slice(), n = [0];
  let a, l, o, i, r;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const c = e[a];
    if (c !== 0) {
      if (l = n[n.length - 1], e[l] < c) {
        t[a] = l, n.push(a);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; ) r = o + i >> 1, e[n[r]] < c ? o = r + 1 : i = r;
      c < e[n[o]] && (o > 0 && (t[a] = n[o - 1]), n[o] = a);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
  return n;
}
function Km(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Km(t);
}
function Ld(e) {
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
const ge = Symbol.for("v-fgt"), ei = Symbol.for("v-txt"), Ut = Symbol.for("v-cmt"), ts = Symbol.for("v-stc"), xo = [];
let cn = null;
function De(e = false) {
  xo.push(cn = e ? null : []);
}
function QS() {
  xo.pop(), cn = xo[xo.length - 1] || null;
}
let Do = 1;
function zi(e, t = false) {
  Do += e, e < 0 && cn && t && (cn.hasOnce = true);
}
function Zm(e) {
  return e.dynamicChildren = Do > 0 ? cn || $l : null, QS(), Do > 0 && cn && cn.push(e), e;
}
function Re(e, t, n, a, l, o) {
  return Zm(p(e, t, n, a, l, o, true));
}
function gn(e, t, n, a, l) {
  return Zm(b(e, t, n, a, l, true));
}
function Eo(e) {
  return e ? e.__v_isVNode === true : false;
}
function qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jm = ({ key: e }) => e ?? null, Ti = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || ht(e) || He(e) ? { i: un, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, a = 0, l = null, o = e === ge ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Jm(t), ref: t && Ti(t), scopeId: pm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: un };
  return r ? (Qu(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= yt(n) ? 8 : 16), Do > 0 && !i && cn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && cn.push(s), s;
}
const b = ek;
function ek(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === _S) && (e = Ut), Eo(e)) {
    const r = ca(e, t, true);
    return n && Qu(r, n), Do > 0 && !o && cn && (r.shapeFlag & 6 ? cn[cn.indexOf(e)] = r : cn.push(r)), r.patchFlag = -2, r;
  }
  if (uk(e) && (e = e.__vccOpts), t) {
    t = Qm(t);
    let { class: r, style: s } = t;
    r && !yt(r) && (t.class = ee(r)), et(s) && (Jo(s) && !$e(s) && (s = At({}, s)), t.style = ve(s));
  }
  const i = yt(e) ? 1 : Xm(e) ? 128 : wm(e) ? 64 : et(e) ? 4 : He(e) ? 2 : 0;
  return p(e, t, n, a, l, i, o, true);
}
function Qm(e) {
  return e ? Jo(e) || zm(e) ? At({}, e) : e : null;
}
function ca(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, c = t ? K(l || {}, t) : l, u = { __v_isVNode: true, __v_skip: true, type: e.type, props: c, key: c && Jm(c), ref: t && t.ref ? n && o ? $e(o) ? o.concat(Ti(t)) : [o, Ti(t)] : Ti(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ca(e.ssContent), ssFallback: e.ssFallback && ca(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ll(u, s.clone(u)), u;
}
function Ke(e = " ", t = 0) {
  return b(ei, null, e, t);
}
function Qt(e = "", t = false) {
  return t ? (De(), gn(Ut, null, e)) : b(Ut, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? b(Ut) : $e(e) ? b(ge, null, e.slice()) : Eo(e) ? na(e) : b(ei, null, String(e));
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
    !l && !zm(t) ? t._ctx = un : l === 3 && un && (un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else He(t) ? (t = { default: t, _ctx: un }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Ke(t)]) : n = 8);
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
const tk = Lm();
let nk = 0;
function ak(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || tk, o = { uid: nk++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new qv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: jm(a, l), emitsOptions: Rm(a, l), emit: null, emitted: null, propsDefaults: ut, inheritAttrs: a.inheritAttrs, ctx: ut, data: ut, props: ut, attrs: ut, slots: ut, refs: ut, setupState: ut, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = FS.bind(null, o), e.ce && e.ce(o), o;
}
let Gt = null;
const ti = () => Gt || un;
let Wi, $s;
{
  const e = rr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Wi = t("__VUE_INSTANCE_SETTERS__", (n) => Gt = n), $s = t("__VUE_SSR_SETTERS__", (n) => Mo = n);
}
const ni = (e) => {
  const t = Gt;
  return Wi(e), e.scope.on(), () => {
    e.scope.off(), Wi(t);
  };
}, Rd = () => {
  Gt && Gt.scope.off(), Wi(null);
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
  return jt(e, "get", ""), e[t];
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
    return a === 2 ? et(t) && !$e(t) ? Eo(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Eo(n) && (n = [n]), b(e, t, n));
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
let Fs;
const Nd = typeof window < "u" && window.trustedTypes;
if (Nd) try {
  Fs = Nd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const ng = Fs ? (e) => Fs.createHTML(e) : (e) => e, dk = "http://www.w3.org/2000/svg", fk = "http://www.w3.org/1998/Math/MathML", ta = typeof document < "u" ? document : null, Hd = ta && ta.createElement("template"), vk = { insert: (e, t, n) => {
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
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: c = i, appearToClass: u = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, S = gk(l), m = S && S[0], y = S && S[1], { onBeforeEnter: h, onEnter: k, onEnterCancelled: I, onLeave: V, onLeaveCancelled: w, onBeforeAppear: g = h, onAppear: C = k, onAppearCancelled: x = I } = t, A = (D, M, T, L) => {
    D._enterCancelled = L, xa(D, M ? u : r), xa(D, M ? c : i), T && T();
  }, P = (D, M) => {
    D._isLeaving = false, xa(D, d), xa(D, v), xa(D, f), M && M();
  }, E = (D) => (M, T) => {
    const L = D ? C : k, W = () => A(M, D, T);
    Wa(L, [M, W]), Wd(() => {
      xa(M, D ? s : o), Fn(M, D ? u : r), zd(L) || jd(M, a, m, W);
    });
  };
  return At(t, { onBeforeEnter(D) {
    Wa(h, [D]), Fn(D, o), Fn(D, i);
  }, onBeforeAppear(D) {
    Wa(g, [D]), Fn(D, s), Fn(D, c);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const T = () => P(D, M);
    Fn(D, d), D._enterCancelled ? (Fn(D, f), Ls(D)) : (Ls(D), Fn(D, f)), Wd(() => {
      D._isLeaving && (xa(D, d), Fn(D, v), zd(V) || jd(D, a, y, T));
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
function Fn(e, t) {
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
  const c = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, f), o();
  }, f = (v) => {
    v.target === e && ++u >= s && d();
  };
  setTimeout(() => {
    u < s && d();
  }, r + 1), e.addEventListener(c, f);
}
function ig(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${wa}Delay`), o = a(`${wa}Duration`), i = Ud(l, o), r = a(`${ro}Delay`), s = a(`${ro}Duration`), c = Ud(r, s);
  let u = null, d = 0, f = 0;
  t === wa ? i > 0 && (u = wa, d = i, f = o.length) : t === ro ? c > 0 && (u = ro, d = c, f = s.length) : (d = Math.max(i, c), u = d > 0 ? i > c ? wa : ro : null, f = u ? u === wa ? o.length : s.length : 0);
  const v = u === wa && /\b(?:transform|all)(?:,|$)/.test(a(`${wa}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: v };
}
function Ud(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Gd(n) + Gd(e[a])));
}
function Gd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ls(e) {
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
  let a = nn(t);
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
      const c = o[t] = Ik(a, l);
      Tl(e, r, c, s);
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
  t === "class" ? yk(e, a, i) : t === "style" ? Sk(e, n, a) : lr(t) ? Fu(t) || xk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Tk(e, t, a, i)) ? (Zd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !yt(a)) ? Zd(e, nn(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Xd(e, t, a, i));
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
    if (!Fk(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Mk), l.forEach(Bk);
    const r = l.filter($k);
    Ls(n.vnode.el), r.forEach((s) => {
      const c = s.el, u = c.style;
      Fn(c, i), u.transform = u.webkitTransform = u.transitionDuration = "";
      const d = c[Ui] = (f) => {
        f && f.target !== c || (!f || f.propertyName.endsWith("transform")) && (c.removeEventListener("transitionend", d), c[Ui] = null, xa(c, i));
      };
      c.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Te(e), r = og(i);
    let s = i.tag || ge;
    if (l = [], o) for (let c = 0; c < o.length; c++) {
      const u = o[c];
      u.el && u.el instanceof Element && (l.push(u), ll(u, To(u, r, a, n)), sg.set(u, cg(u.el)));
    }
    o = t.default ? Ku(t.default()) : [];
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      u.key != null && ll(u, To(u, r, a, n));
    }
    return b(s, null, o);
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
    let s = 1, c = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (c = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(c) || c === 0) && (c = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(c - 1) < 0.01 && (c = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / c}px)`, i.transitionDuration = "0s", e;
  }
}
function cg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Fk(e, t, n) {
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
function Lk(e) {
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
  }), t || (Tl(e, "compositionstart", Lk), Tl(e, "compositionend", af), Tl(e, "change", af));
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
  const r = Math.min(a, o), s = Math.max(a, o), c = Math.min(l, i), u = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Qk(), x1: r, y1: c, x2: s, y2: u, mode: ew(n.mode), edge: tw(n.edge), enabled: nw(n.enabled), createdAt: cf(n.createdAt, t), updatedAt: cf(n.updatedAt, t) };
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
  function n(c) {
    const u = e.normalize(c);
    return t.value = u, e.storage.save(u), u;
  }
  function a(c) {
    var _a3;
    const u = n(c);
    (_a3 = e.onSet) == null ? void 0 : _a3.call(e, u);
  }
  function l(c) {
    var _a3;
    const u = e.normalizeOne(c);
    u && (n([...t.value.filter((d) => d.id !== u.id), u]), (_a3 = e.onAdd) == null ? void 0 : _a3.call(e, u));
  }
  function o(c) {
    var _a3;
    const u = e.normalizeOne(c);
    if (!u || !t.value.some((f) => f.id === u.id)) return;
    const d = t.value.map((f) => f.id === u.id ? u : f);
    n(d), (_a3 = e.onUpdate) == null ? void 0 : _a3.call(e, u);
  }
  function i(c) {
    var _a3;
    t.value.some((u) => u.id === c) && (n(t.value.filter((u) => u.id !== c)), (_a3 = e.onRemove) == null ? void 0 : _a3.call(e, c));
  }
  function r() {
    var _a3;
    t.value.length !== 0 && (t.value = [], e.storage.clear(), (_a3 = e.onClear) == null ? void 0 : _a3.call(e));
  }
  function s(c) {
    n(c);
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
  function a(s, c) {
    if (e) try {
      c && c.length > 0 ? e.postMessage(s, c) : e.postMessage(s);
    } catch (u) {
      vf.error("Worker postMessage failed:", u instanceof Error ? u.message : String(u));
    }
  }
  function l(s, c) {
    return n.has(s) || n.set(s, /* @__PURE__ */ new Set()), n.get(s).add(c), () => {
      var _a3;
      return (_a3 = n.get(s)) == null ? void 0 : _a3.delete(c);
    };
  }
  function o(s) {
    (s.type === "ready" || s.type === "grid_info") && (t.value = s.gridInfo);
    const c = n.get(s.type);
    if (c) for (const u of c) u(s);
  }
  function i(s, c) {
    const u = new Worker(new URL("/assets/backgroundRenderer-NUQDW6up.js", import.meta.url), { type: "module" });
    u.onmessage = (d) => o(d.data), u.onerror = (d) => {
      vf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = u, a({ type: "init", canvas: s, cellPx: c }, [s]);
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
  function a(s, c) {
    return (s % c.screenCols + c.screenCols) % c.screenCols;
  }
  function l(s) {
    const c = n();
    if (!c) return null;
    const u = mg(s.clientX, s.clientY, c);
    return { cx: a(u.cx, c), cy: u.cy };
  }
  function o(s, c) {
    return { x1: Math.min(s.cx, c.cx), y1: Math.min(s.cy, c.cy), x2: Math.max(s.cx, c.cx), y2: Math.max(s.cy, c.cy) };
  }
  function i(s, c) {
    const u = (f) => Math.floor(f / us) * us, d = (f) => u(f) + (us - 1);
    return { x1: Math.max(0, Math.min(c.screenCols - 1, u(s.x1))), y1: u(s.y1), x2: Math.max(0, Math.min(c.screenCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(yw)) return true;
    let c = s;
    for (; c; ) {
      if (hw.has(c.tagName) || c.getAttribute("role") === "button") return true;
      c = c.parentElement;
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
  function c() {
    const y = a.value, h = e.makeSnapshot();
    if (!y || !h) {
      l.value = null;
      return;
    }
    const k = e.cellToScreen(y.x1, y.y1, h), I = e.cellSpanToCssPx(y.x2 - y.x1 + 1, h), V = e.cellSpanToCssPx(y.y2 - y.y1 + 1, h);
    l.value = { left: `${k.cssX}px`, top: `${k.cssY}px`, width: `${I}px`, height: `${V}px` };
  }
  function u() {
    o = null, n.value = null, i = null, a.value = null, l.value = null;
  }
  function d(y) {
    n.value === y && u();
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
    h[1].dragMode === "paint" && (i = { ...I }), a.value = I, c(), y.target instanceof Element && y.target.setPointerCapture(y.pointerId), y.preventDefault();
  }
  function v(y) {
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
      c();
    }
  }
  function S(y) {
    var _a3;
    if (!n.value || !o || y.button !== 0) return;
    y.target instanceof Element && y.target.hasPointerCapture(y.pointerId) && y.target.releasePointerCapture(y.pointerId);
    const h = t.get(n.value);
    if (!h) {
      u();
      return;
    }
    const k = e.pointerToCell(y), I = e.makeSnapshot();
    let V;
    if (h.dragMode === "paint" && i) k && (i.x1 = Math.min(i.x1, k.cx), i.y1 = Math.min(i.y1, k.cy), i.x2 = Math.max(i.x2, k.cx), i.y2 = Math.max(i.y2, k.cy)), V = i;
    else if (k) {
      const g = e.normalizeRect(o, k);
      V = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) && I ? e.snapRectToMajor(g, I) : g;
    } else {
      u();
      return;
    }
    h.onCommit(V, I) === false || u();
  }
  function m() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", v), document.addEventListener("pointerup", S), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", S);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: m };
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
  if (typeof window > "u") return "system";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(kg);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
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
const ww = { key: 0, class: "zone-preview-text" }, xw = { class: "zone-list" }, Cw = { class: "zone-text" }, _w = { class: "zone-coords" }, Vw = { class: "zone-actions" }, Iw = { key: 0, class: "zone-empty" }, Pw = an({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = q(false), o = q(false), i = q(0), r = q(0), s = q(4), c = q(4), u = q("both"), d = q("none"), f = q(1), v = q(1), S = q(0.6), m = q(2), y = q(false), h = _(() => n.zones.filter((E) => !!E && typeof E.id == "string" && E.id.length > 0 && typeof E.x1 == "number" && typeof E.y1 == "number" && typeof E.x2 == "number" && typeof E.y2 == "number" && typeof E.mode == "string" && !!E.edge && typeof E.edge.style == "string"));
  function k(E) {
    return E.id.slice(0, 6);
  }
  function I() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, S.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? y.value : void 0 };
  }
  const V = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], w = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function g() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const E = Date.now();
    a("add-zone", { id: g(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(c.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(c.value)), mode: u.value, edge: I(), enabled: true, createdAt: E, updatedAt: E });
  }
  function x(E) {
    a("update-zone", { ...E, enabled: !E.enabled, updatedAt: Date.now() });
  }
  function A() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: u.value, edge: I() });
  }
  return re(l, A, { immediate: true }), re(o, A, { immediate: true }), re([u, d, f, v, S, m, y], P, { immediate: true }), (E, D) => {
    const M = je("v-switch"), T = je("v-text-field"), L = je("v-col"), W = je("v-row"), N = je("v-select"), Z = je("v-btn"), R = je("v-divider");
    return De(), Re(ge, null, [b(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = ($) => l.value = $), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), b(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = ($) => o.value = $), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (De(), Re("div", ww, " Preview: (" + Ie(n.previewRect.x1) + "," + Ie(n.previewRect.y1) + ") \u2192 (" + Ie(n.previewRect.x2) + "," + Ie(n.previewRect.y2) + ") ", 1)) : Qt("", true), b(W, { dense: "" }, { default: Pe(() => [b(L, { cols: "3" }, { default: Pe(() => [b(T, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = ($) => i.value = $), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Pe(() => [b(T, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = ($) => r.value = $), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Pe(() => [b(T, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = ($) => s.value = $), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Pe(() => [b(T, { modelValue: c.value, "onUpdate:modelValue": D[5] || (D[5] = ($) => c.value = $), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(W, { dense: "", class: "mt-2" }, { default: Pe(() => [b(L, { cols: "6" }, { default: Pe(() => [b(N, { modelValue: u.value, "onUpdate:modelValue": D[6] || (D[6] = ($) => u.value = $), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "6" }, { default: Pe(() => [b(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = ($) => d.value = $), items: w, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(W, { dense: "", class: "mt-2" }, { default: Pe(() => [b(L, { cols: "6" }, { default: Pe(() => [b(T, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = ($) => f.value = $), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "6" }, { default: Pe(() => [b(T, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = ($) => v.value = $), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (De(), gn(W, { key: 1, dense: "", class: "mt-2" }, { default: Pe(() => [b(L, { cols: "12" }, { default: Pe(() => [b(T, { modelValue: S.value, "onUpdate:modelValue": D[10] || (D[10] = ($) => S.value = $), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), d.value === "noted" ? (De(), gn(W, { key: 2, dense: "", class: "mt-2" }, { default: Pe(() => [b(L, { cols: "12" }, { default: Pe(() => [b(T, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = ($) => m.value = $), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), d.value === "bold-major" || d.value === "noted" ? (De(), gn(W, { key: 3, dense: "", class: "mt-1" }, { default: Pe(() => [b(L, { cols: "12" }, { default: Pe(() => [b(M, { modelValue: y.value, "onUpdate:modelValue": D[12] || (D[12] = ($) => y.value = $), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), b(Z, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: Pe(() => [...D[14] || (D[14] = [Ke(" Add Zone ", -1)])]), _: 1 }), b(R, { class: "my-3" }), p("div", xw, [(De(true), Re(ge, null, Jt(h.value, ($) => (De(), Re("div", { key: $.id, class: "zone-row" }, [p("div", Cw, [p("div", null, "#" + Ie(k($)) + " \xB7 " + Ie($.mode) + " \xB7 " + Ie($.edge.style), 1), p("div", _w, "(" + Ie($.x1) + "," + Ie($.y1) + ") \u2192 (" + Ie($.x2) + "," + Ie($.y2) + ")", 1)]), p("div", Vw, [b(Z, { size: "x-small", variant: "text", onClick: (Y) => x($) }, { default: Pe(() => [Ke(Ie($.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), b(Z, { size: "x-small", variant: "text", color: "error", onClick: (Y) => a("remove-zone", $.id) }, { default: Pe(() => [...D[15] || (D[15] = [Ke("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (De(), Re("div", Iw, "No zones.")) : Qt("", true)]), b(Z, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = ($) => a("clear-zones")) }, { default: Pe(() => [...D[16] || (D[16] = [Ke(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, Aw = Kn(Pw, [["__scopeId", "data-v-223984b2"]]), hf = 210, Tw = { class: "hires-tab" }, Dw = { class: "text-caption text-medium-emphasis mb-2" }, Ew = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, Mw = { class: "region-list" }, Bw = { class: "d-flex align-center justify-space-between" }, $w = { class: "text-body-2" }, Fw = { class: "text-caption text-medium-emphasis" }, Lw = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, Rw = { class: "mt-2" }, Ow = { class: "d-flex align-center justify-space-between" }, Nw = { class: "text-caption text-medium-emphasis" }, Hw = { class: "mt-2" }, zw = { class: "d-flex align-center justify-space-between" }, Ww = { class: "text-caption text-medium-emphasis" }, jw = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, Uw = an({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = q(false), o = _(() => n.regions.length < Ei);
  function i() {
    l.value = !l.value, a("hires-tool-change", { enabled: l.value });
  }
  function r(m) {
    a("update-region", { ...m, enabled: !m.enabled, updatedAt: Date.now() });
  }
  function s(m) {
    a("update-region", { ...m, showGrid: !m.showGrid, updatedAt: Date.now() });
  }
  function c(m) {
    a("update-region", { ...m, showBaseGrid: !m.showBaseGrid, updatedAt: Date.now() });
  }
  function u(m) {
    a("update-region", { ...m, showBorder: !m.showBorder, updatedAt: Date.now() });
  }
  function d(m, y) {
    a("update-region", { ...m, tickMultiplier: y, updatedAt: Date.now() });
  }
  function f(m, y) {
    a("update-region", { ...m, multiplier: y, updatedAt: Date.now() });
  }
  function v(m) {
    return m >= hf ? "max" : m === 1 ? "1x" : `${m}x`;
  }
  function S(m) {
    return m.id.slice(0, 6);
  }
  return (m, y) => {
    const h = je("v-btn"), k = je("v-divider"), I = je("v-chip"), V = je("v-slider"), w = je("v-card");
    return De(), Re("div", Tw, [p("p", Dw, Ie(Ne(Rs)) + "\u2013" + Ie(Ne(Os)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), b(h, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !o.value && !l.value, size: "small", block: "", onClick: i }, { default: Pe(() => [Ke(Ie(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= Ne(Ei) ? (De(), Re("div", Ew, " Max " + Ie(Ne(Ei)) + " regions reached. ", 1)) : Qt("", true), e.regions.length > 0 ? (De(), gn(k, { key: 1, class: "my-3" })) : Qt("", true), p("div", Mw, [(De(true), Re(ge, null, Jt(e.regions, (g) => (De(), gn(w, { key: g.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: Pe(() => [p("div", Bw, [p("span", $w, " #" + Ie(S(g)) + " (" + Ie(g.x1) + ", " + Ie(g.y1) + ") \u2014 (" + Ie(g.x2) + ", " + Ie(g.y2) + ") ", 1), b(I, { size: "x-small", color: g.enabled ? "success" : "grey", variant: "flat" }, { default: Pe(() => [Ke(Ie(g.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), p("div", Fw, Ie(g.multiplier) + "x \xB7 " + Ie((g.x2 - g.x1 + 1) * (g.y2 - g.y1 + 1)) + " base cells ", 1), p("div", Lw, [b(h, { size: "x-small", variant: "tonal", onClick: (C) => r(g) }, { default: Pe(() => [Ke(Ie(g.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), b(h, { size: "x-small", variant: "tonal", onClick: (C) => s(g) }, { default: Pe(() => [Ke(" Grid " + Ie(g.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), b(h, { size: "x-small", variant: "tonal", onClick: (C) => c(g) }, { default: Pe(() => [Ke(" Base " + Ie(g.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), b(h, { size: "x-small", variant: "tonal", onClick: (C) => u(g) }, { default: Pe(() => [Ke(" Border " + Ie(g.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), b(h, { size: "x-small", variant: "tonal", color: "error", onClick: (C) => m.$emit("remove-region", g.id) }, { default: Pe(() => [...y[1] || (y[1] = [Ke(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])]), p("div", Rw, [p("div", Ow, [y[2] || (y[2] = p("span", { class: "text-caption text-medium-emphasis" }, "Resolution", -1)), p("span", Nw, Ie(g.multiplier) + "x", 1)]), b(V, { "model-value": g.multiplier, min: Ne(Rs), max: Ne(Os), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => f(g, C) }, null, 8, ["model-value", "min", "max", "onUpdate:modelValue"])]), p("div", Hw, [p("div", zw, [y[3] || (y[3] = p("span", { class: "text-caption text-medium-emphasis" }, "Tick rate", -1)), p("span", Ww, Ie(v(g.tickMultiplier ?? 1)), 1)]), b(V, { "model-value": g.tickMultiplier ?? 1, min: 1, max: Ne(hf), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => d(g, C) }, null, 8, ["model-value", "max", "onUpdate:modelValue"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (De(), Re("div", jw, " No hi-res regions. ")) : Qt("", true)]), e.regions.length > 0 ? (De(), gn(h, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: y[0] || (y[0] = (g) => m.$emit("clear-regions")) }, { default: Pe(() => [...y[4] || (y[4] = [Ke(" Clear All ", -1)])]), _: 1 })) : Qt("", true)]);
  };
} }), Gw = Kn(Uw, [["__scopeId", "data-v-7b5a643b"]]), Yw = an({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, hiresRegions: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change"], setup(e) {
  const t = q("zones"), n = q(false), a = false;
  return (l, o) => {
    const i = je("v-btn"), r = je("v-card-title"), s = je("v-tab"), c = je("v-tabs"), u = je("v-tabs-window-item"), d = je("v-tabs-window"), f = je("v-card-text"), v = je("v-card");
    return Ne(a) ? (De(), Re("aside", { key: 0, class: ee(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (De(), gn(i, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: o[14] || (o[14] = (S) => n.value = false) }, { default: Pe(() => [...o[19] || (o[19] = [Ke(" Grid Tools ", -1)])]), _: 1 })) : (De(), gn(v, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: Pe(() => [b(r, { class: "zone-title" }, { default: Pe(() => [o[16] || (o[16] = p("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), b(i, { size: "x-small", variant: "text", onClick: o[0] || (o[0] = (S) => n.value = true) }, { default: Pe(() => [...o[15] || (o[15] = [Ke("Collapse", -1)])]), _: 1 })]), _: 1 }), b(c, { modelValue: t.value, "onUpdate:modelValue": o[1] || (o[1] = (S) => t.value = S), density: "compact", grow: "" }, { default: Pe(() => [b(s, { value: "zones" }, { default: Pe(() => [...o[17] || (o[17] = [Ke("Zones", -1)])]), _: 1 }), b(s, { value: "hires" }, { default: Pe(() => [...o[18] || (o[18] = [Ke("Hi-Res", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), b(f, { class: "pt-2" }, { default: Pe(() => [b(d, { modelValue: t.value, "onUpdate:modelValue": o[13] || (o[13] = (S) => t.value = S) }, { default: Pe(() => [b(u, { value: "zones" }, { default: Pe(() => [b(Aw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: o[2] || (o[2] = (S) => l.$emit("add-zone", S)), onUpdateZone: o[3] || (o[3] = (S) => l.$emit("update-zone", S)), onRemoveZone: o[4] || (o[4] = (S) => l.$emit("remove-zone", S)), onClearZones: o[5] || (o[5] = (S) => l.$emit("clear-zones")), onToolChange: o[6] || (o[6] = (S) => l.$emit("tool-change", S)), onDraftChange: o[7] || (o[7] = (S) => l.$emit("draft-change", S)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), b(u, { value: "hires" }, { default: Pe(() => [b(Gw, { regions: e.hiresRegions, onAddRegion: o[8] || (o[8] = (S) => l.$emit("add-hires-region", S)), onUpdateRegion: o[9] || (o[9] = (S) => l.$emit("update-hires-region", S)), onRemoveRegion: o[10] || (o[10] = (S) => l.$emit("remove-hires-region", S)), onClearRegions: o[11] || (o[11] = (S) => l.$emit("clear-hires-regions")), onHiresToolChange: o[12] || (o[12] = (S) => l.$emit("hires-tool-change", S)) }, null, 8, ["regions"])]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2)) : Qt("", true);
  };
} }), Kw = Kn(Yw, [["__scopeId", "data-v-3372d532"]]), yf = 5, bf = 19, qw = 0.3, Xw = 0.12, Zw = an({ __name: "AppBackground", setup(e) {
  const t = vg("AppBackground"), n = q(null), a = q(0), l = gw(), o = bw(l.gridInfo, a), i = pw(), r = Sw(o);
  function s(R) {
    return { ...R, edge: { ...R.edge } };
  }
  function c(R) {
    return R.map(s);
  }
  const u = iw({ onSetZones: (R) => l.post({ type: "set_zones", zones: c(R) }), onAddZone: (R) => l.post({ type: "add_zone", zone: s(R) }), onUpdateZone: (R) => l.post({ type: "update_zone", zone: s(R) }), onRemoveZone: (R) => l.post({ type: "remove_zone", id: R }), onClearZones: () => l.post({ type: "clear_zones" }) }), d = mw({ onAddRegion: (R) => l.post({ type: "add_hires", region: { ...R } }), onUpdateRegion: (R) => l.post({ type: "update_hires", region: { ...R } }), onRemoveRegion: (R) => l.post({ type: "remove_hires", id: R }), onClearRegions: () => l.post({ type: "clear_hires" }) }), f = q(false), v = q(false), S = q(false), m = q({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: y } = xg();
  re(y, (R) => {
    l.post({ type: "set_theme", theme: R });
  });
  function h(R) {
    const $ = Date.now(), Y = m.value;
    return { id: crypto.randomUUID(), x1: R.x1, y1: R.y1, x2: R.x2, y2: R.y2, mode: Y.mode, edge: { ...Y.edge }, enabled: true, createdAt: $, updatedAt: $ };
  }
  r.register("zone", { isEnabled: () => f.value, priority: 1, snapMajor: () => v.value, onCommit(R) {
    u.addZone(h(R));
  } }), r.register("hires", { isEnabled: () => S.value, priority: 3, onCommit(R) {
    const $ = Date.now();
    d.addRegion({ id: crypto.randomUUID(), x1: R.x1, y1: R.y1, x2: R.x2, y2: R.y2, multiplier: Sg, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1, createdAt: $, updatedAt: $ });
  } });
  function k(R) {
    u.addZone(R);
  }
  function I(R) {
    u.updateZone(R);
  }
  function V(R) {
    u.removeZone(R);
  }
  function w() {
    u.clearZones();
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
    m.value = R;
  }
  function E(R) {
    f.value = R.enabled, v.value = R.snapMajor, R.enabled || r.cancelActiveDrag("zone");
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
  let T = 0, L = 0, W = null, N = null, Z = null;
  return Ct(() => {
    const R = n.value;
    if (!R) return;
    T = Math.round(window.innerWidth * devicePixelRatio), L = Math.round(window.innerHeight * devicePixelRatio), R.width = T, R.height = L;
    const $ = R.transferControlToOffscreen(), Y = uf(T, bf, devicePixelRatio), j = 0.8 * Y * yf / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${j.toFixed(1)}px`), l.init($, Y), t.debug("Worker spawned, gridPitch", Y.toFixed(2)), l.on("ready", (ae) => {
      t.info(`${ae.backend.toUpperCase()} renderer active`), l.post({ type: "set_theme", theme: y.value }), l.post({ type: "set_zones", zones: c(u.zones.value) }), d.regions.value.length > 0 && l.post({ type: "set_hires_regions", regions: d.regions.value.map((ye) => ({ ...ye })) });
    }), l.on("zones_state", (ae) => u.syncFromWorker(ae.zones)), l.on("zones_error", (ae) => t.error("Zone update rejected:", ae.message)), l.on("hires_state", (ae) => d.syncFromWorker(ae.regions)), l.on("error", (ae) => {
      ae.phase === "gpu-init" ? t.debug(`GPU unavailable (${ae.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${ae.phase}]:`, ae.message);
    }), document.addEventListener("click", M), Z = r.attachListeners(), W = document.querySelector(".v-main");
    let O = 0, U = 0;
    i.start(() => {
      l.post({ type: "frame" }), O = ((W == null ? void 0 : W.scrollTop) || window.scrollY) * qw * devicePixelRatio, U += (O - U) * Xw, Math.abs(U - a.value) > 0.1 && (a.value = U, l.post({ type: "scroll", scrollY: U }));
    }), N = new ResizeObserver(([ae]) => {
      const ye = Math.round(ae.contentRect.width * devicePixelRatio), ne = Math.round(ae.contentRect.height * devicePixelRatio);
      if (ye === T && ne === L) return;
      T = ye, L = ne;
      const fe = uf(ye, bf, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * fe * yf / devicePixelRatio).toFixed(1)}px`), l.post({ type: "resize", width: ye, height: ne });
    }), N.observe(R);
  }), vr(() => {
    i.stop(), N == null ? void 0 : N.disconnect(), document.removeEventListener("click", M), Z == null ? void 0 : Z(), l.terminate();
  }), (R, $) => (De(), Re(ge, null, [p("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), Ne(r).previewStyle.value ? (De(), Re("div", { key: 0, class: "zone-preview-overlay", style: ve(Ne(r).previewStyle.value) }, null, 4)) : Qt("", true), b(Kw, { zones: Ne(u).zones.value, "preview-rect": Ne(r).previewRect.value, "hires-regions": Ne(d).regions.value, onAddZone: k, onUpdateZone: I, onRemoveZone: V, onClearZones: w, onToolChange: E, onDraftChange: P, onAddHiresRegion: g, onUpdateHiresRegion: C, onRemoveHiresRegion: x, onClearHiresRegions: A, onHiresToolChange: D }, null, 8, ["zones", "preview-rect", "hires-regions"])], 64));
} }), Jw = Kn(Zw, [["__scopeId", "data-v-2bff87df"]]);
function Cg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Je = typeof window < "u", lc = Je && "IntersectionObserver" in window, Qw = Je && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), pf = Je && "EyeDropper" in window, oc = Je && "matchMedia" in window && typeof window.matchMedia == "function", Wn = () => oc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Sf(e, t, n) {
  e0(e, t), t.set(e, n);
}
function e0(e, t) {
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
function en(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function Ws(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Le(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Pg = /^on[^a-z]/, rc = (e) => Pg.test(e), t0 = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], n0 = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function a0(e) {
  return e.isComposing && n0.includes(e.key);
}
function qn(e) {
  const [t, n] = Ws(e, [Pg]), a = Le(t, t0), [l, o] = Ws(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ot(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ag(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Ne(t));
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
function l0(e) {
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
function Rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (Hs(o) && Hs(i)) {
      a[l] = Rt(o, i, n);
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
function o0(e) {
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
  return e.some((t) => Eo(t) ? t.type === Ut ? false : t.type !== ge || br(t.children) : true) ? e : null;
}
function wi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function i0(e, t) {
  if (!Je || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function r0(e, t) {
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
function s0(e, t, n) {
  const a = new RegExp(`[\\d\\-${Yi(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Yi(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function u0(e) {
  const t = {};
  for (const n in e) t[nn(n)] = e[n];
  return t;
}
function c0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function If(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : ht(n) || Ia(n) || Jo(n) ? t(Te(n)) : Hs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Bg = ["top", "bottom"], d0 = ["start", "end", "left", "right"];
function js(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Gi(Bg, n) ? "start" : Gi(d0, n) ? "top" : "center"), { side: Us(n, t), align: Us(a, t) };
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
function f0(e) {
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
    const c = n.transformOrigin, u = t.x - r - (1 - o) * parseFloat(c), d = t.y - s - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new kn({ x: u, y: d, width: f, height: v });
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
function v0(e, t) {
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
function m0(e, t) {
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
const Vl = 2.4, Df = 0.2126729, Ef = 0.7151522, Mf = 0.072175, g0 = 0.55, h0 = 0.58, y0 = 0.57, b0 = 0.62, xi = 0.03, Bf = 1.45, p0 = 5e-4, S0 = 1.25, k0 = 1.25, $f = 0.078, Ff = 12.82051282051282, Ci = 0.06, Lf = 1e-3;
function Rf(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * Df + a * Ef + l * Mf, c = o * Df + i * Ef + r * Mf;
  if (s <= xi && (s += (xi - s) ** Bf), c <= xi && (c += (xi - c) ** Bf), Math.abs(c - s) < p0) return 0;
  let u;
  if (c > s) {
    const d = (c ** g0 - s ** h0) * S0;
    u = d < Lf ? 0 : d < $f ? d - d * Ff * Ci : d - Ci;
  } else {
    const d = (c ** b0 - s ** y0) * k0;
    u = d > -Lf ? 0 : d > -$f ? d - d * Ff * Ci : d + Ci;
  }
  return u * 100;
}
const Ki = 0.20689655172413793, w0 = (e) => e > Ki ** 3 ? Math.cbrt(e) : e / (3 * Ki ** 2) + 4 / 29, x0 = (e) => e > Ki ? e ** 3 : 3 * Ki ** 2 * (e - 4 / 29);
function Fg(e) {
  const t = w0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Lg(e) {
  const t = x0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const C0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], _0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, V0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], I0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Rg(e) {
  const t = Array(3), n = _0, a = C0;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ze(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function cc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = I0, i = V0;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Gs(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function P0(e) {
  return Gs(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Of = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, A0 = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Nf({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Nf({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => jn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => jn({ h: e, s: t, v: n, a }) };
function dn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Of.test(e)) {
    const { groups: t } = e.match(Of), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return A0[n](...l);
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
  e = D0(e);
  let [t, n, a, l] = l0(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function T0(e) {
  const t = zg(e);
  return li(t);
}
function Wg(e) {
  return Hg(jn(e));
}
function D0(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = xf(xf(e, 6), 8, "F")), e;
}
function E0(e, t) {
  const n = Fg(cc(e));
  return n[0] = n[0] + t * 10, Rg(Lg(n));
}
function M0(e, t) {
  const n = Fg(cc(e));
  return n[0] = n[0] - t * 10, Rg(Lg(n));
}
function Ks(e) {
  const t = dn(e);
  return cc(t)[1];
}
function B0(e, t) {
  const n = Ks(e), a = Ks(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function jg(e) {
  const t = Math.abs(Rf(dn(0), dn(e)));
  return Math.abs(Rf(dn(16777215), dn(e))) > Math.min(t, 50) ? "#fff" : "#000";
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
function $0(e) {
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
    if (Ne(t == null ? void 0 : t.disabled)) return n.value;
    const i = Ne(t == null ? void 0 : t.scoped), r = Ne(t == null ? void 0 : t.reset), s = Ne(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let c = Rt(a.value, { prev: n.value });
    if (i) return c;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let d = 0; d <= u && !(!c || !("prev" in c)); d++) c = c.prev;
      return c && typeof s == "string" && s in c && (c = Rt(Rt(c, { prev: c }), c[s])), c;
    }
    return c.prev ? Rt(c.prev, c) : c;
  });
  return rt(Ul, l), l;
}
function L0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ja(t)] < "u");
}
function R0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fc();
  const a = St("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, c) {
    var _a3, _b2, _c2, _d2;
    const u = Reflect.get(s, c);
    if (c === "class" || c === "style") return [(_a3 = l.value) == null ? void 0 : _a3[c], u].filter((v) => v != null);
    if (L0(a.vnode, c)) return u;
    const d = (_b2 = l.value) == null ? void 0 : _b2[c];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[c];
    return f !== void 0 ? f : u;
  } }), i = ie();
  ct(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [u] = c;
        return u.startsWith(u[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else i.value = void 0;
  });
  function r() {
    const s = $0(Ul, a);
    rt(Ul, _(() => i.value ? Rt((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function Kt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = z(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return en(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = fc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = R0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function J() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Kt : an)(t);
}
function O0(e, t) {
  return t.props = e, t;
}
function ga(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return J()({ name: n ?? Yn(nn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...pe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ma(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function N0(e, t, n, a) {
  if (!n || Ea(e) || Ea(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function H0(e, t, n) {
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
  const l = H0(e, t, n);
  return l || (N0(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Ug(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Fo = "cubic-bezier(0.4, 0, 0.2, 1)", Hf = "cubic-bezier(0.0, 0, 0.2, 1)", zf = "cubic-bezier(0.4, 0, 1, 1)", z0 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function fn(e, t, n) {
  return Object.keys(e).filter((a) => rc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? W0(e) : vc(e)) return e;
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
function W0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function j0(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function U0(e) {
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
function G0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, a = 0, l = 0, o = false, i = 0;
  function r() {
    clearTimeout(a), o = false, i = 0;
  }
  const s = function() {
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++) u[d] = arguments[d];
    clearTimeout(a);
    const f = Date.now();
    i || (i = f);
    const v = f - Math.max(i, l);
    function S() {
      l = Date.now(), a = setTimeout(r, t), e(...u);
    }
    o ? v >= t ? S() : n.trailing && (a = setTimeout(S, t - v)) : (o = true, n.leading && S());
  };
  return s.clear = r, s.immediate = e, s;
}
const Ce = [String, Function, Object, Array], qs = Symbol.for("vuetify:icons"), Sr = z({ icon: { type: Ce }, tag: { type: [String, Object, Function], required: true } }, "icon"), Xs = J()({ name: "VComponentIcon", props: Sr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return b(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? b(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), mc = Kt({ name: "VSvgIcon", inheritAttrs: false, props: Sr(), setup(e, t) {
  let { attrs: n } = t;
  return () => b(e.tag, K(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? p("path", { d: a[0], "fill-opacity": a[1] }, null) : p("path", { d: a }, null)) : p("path", { d: e.icon }, null)])] });
} }), Y0 = Kt({ name: "VLigatureIcon", props: Sr(), setup(e) {
  return () => b(e.tag, null, { default: () => [e.icon] });
} }), gc = Kt({ name: "VClassIcon", props: Sr(), setup(e) {
  return () => b(e.tag, { class: ee(e.icon) }, null);
} }), K0 = (e) => {
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
}, q0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, X0 = { component: (e) => ma(gc, { ...e, class: "mdi" }) };
function Z0() {
  return { svg: { component: mc }, class: { component: gc } };
}
function J0(e) {
  const t = Z0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = X0), Rt({ defaultSet: n, sets: t, aliases: { ...q0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
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
  const o = St("useProxiedModel"), i = q(e[t] !== void 0 ? e[t] : n), r = Ja(t), c = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  $t(() => !c.value, () => {
    re(() => e[t], (d) => {
      i.value = d;
    });
  });
  const u = _({ get() {
    const d = e[t];
    return a(c.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Te(c.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(u, "externalValue", { get: () => c.value ? e[t] : i.value }), u;
}
const Q0 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Wf = "$vuetify.", jf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Gg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Wf)) return jf(a, o);
  const r = a.replace(Wf, ""), s = e.value && n.value[e.value], c = t.value && n.value[t.value];
  let u = ol(s, r, null);
  return u || (`${a}${e.value}`, u = ol(c, r, null)), u || (u = a), typeof u != "string" && (u = a), jf(u, o);
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
function ex(e) {
  const t = ie((e == null ? void 0 : e.locale) ?? "en"), n = ie((e == null ? void 0 : e.fallback) ?? "en"), a = q({ en: Q0, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Yg(t, n)), t: Gg(t, n, a), n: hc(t, n), provide: Kg({ current: t, fallback: n, messages: a }) };
}
const Gl = Symbol.for("vuetify:locale");
function tx(e) {
  return e.name != null;
}
function nx(e) {
  const t = (e == null ? void 0 : e.adapter) && tx(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : ex(e), n = lx(t, e);
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
  const n = t.provide(e), a = ox(n, t.rtl, e), l = { ...n, ...a };
  return rt(Gl, l), l;
}
function ax() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function lx(e, t) {
  const n = q((t == null ? void 0 : t.rtl) ?? ax()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function ox(e, t, n) {
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
function ix(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Xg(e), i = Zg(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, c = (i.getDay() - r + 7) % 7;
  for (let u = 0; u < s; u++) {
    const d = new Date(o);
    d.setDate(d.getDate() - (s - u)), l.push(d);
  }
  for (let u = 1; u <= i.getDate(); u++) {
    const d = new Date(e.getFullYear(), e.getMonth(), u);
    l.push(d), l.length === 7 && (a.push(l), l = []);
  }
  for (let u = 1; u < 7 - c; u++) {
    const d = new Date(i);
    d.setDate(d.getDate() + u), l.push(d);
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
function rx(e, t) {
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
function sx(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const ux = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Jg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (ux.test(e)) return sx(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Uf = new Date(2e3, 0, 2);
function cx(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Nn(7).map((l) => {
    const o = new Date(Uf);
    return o.setDate(Uf.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function dx(e, t, n, a) {
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
function fx(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Cf(String(n.getMonth() + 1), 2, "0"), o = Cf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function vx(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function mx(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function gx(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function el(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function hx(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function yx(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Lo(e) {
  return e.getFullYear();
}
function bx(e) {
  return e.getMonth();
}
function px(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? Sx(e, t, o, a) : kx(e, t, o, i);
}
function Sx(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = el(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Lo(o);
  s < Lo(i) && r(s + 1) <= l && s++;
  const c = new Date(s, 0, 1), u = r(s), d = u <= l ? el(c, -u) : el(c, 7 - u);
  return 1 + Zi(yc(o), Ro(d), "weeks");
}
function kx(e, t, n, a) {
  const l = Co(e, t, n), o = el(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - Zi(f, Co(f, t, n), "days");
  }
  let r = Lo(l);
  r < Lo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), c = i(r), u = c >= a ? el(s, c - 7) : el(s, c);
  return 1 + Zi(yc(l), Ro(u), "weeks");
}
function wx(e) {
  return e.getDate();
}
function xx(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Cx(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function _x(e) {
  return e.getHours();
}
function Vx(e) {
  return e.getMinutes();
}
function Ix(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Px(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Ax(e, t) {
  return Xi(e, t[0]) && Ex(e, t[1]);
}
function Tx(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Xi(e, t) {
  return e.getTime() > t.getTime();
}
function Dx(e, t) {
  return Xi(Ro(e), Ro(t));
}
function Ex(e, t) {
  return e.getTime() < t.getTime();
}
function Gf(e, t) {
  return e.getTime() === t.getTime();
}
function Mx(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Bx(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function $x(e, t) {
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
function Lx(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Rx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Ox(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Nx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Ro(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function yc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Hx {
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
    return fx(this, t);
  }
  parseISO(t) {
    return vx(t);
  }
  addMinutes(t, n) {
    return mx(t, n);
  }
  addHours(t, n) {
    return gx(t, n);
  }
  addDays(t, n) {
    return el(t, n);
  }
  addWeeks(t, n) {
    return hx(t, n);
  }
  addMonths(t, n) {
    return yx(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return ix(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return rx(t, this.locale);
  }
  startOfMonth(t) {
    return Xg(t);
  }
  endOfMonth(t) {
    return Zg(t);
  }
  format(t, n) {
    return dx(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Gf(t, n);
  }
  isValid(t) {
    return Tx(t);
  }
  isWithinRange(t, n) {
    return Ax(t, n);
  }
  isAfter(t, n) {
    return Xi(t, n);
  }
  isAfterDay(t, n) {
    return Dx(t, n);
  }
  isBefore(t, n) {
    return !Xi(t, n) && !Gf(t, n);
  }
  isSameDay(t, n) {
    return Mx(t, n);
  }
  isSameMonth(t, n) {
    return Bx(t, n);
  }
  isSameYear(t, n) {
    return $x(t, n);
  }
  setMinutes(t, n) {
    return Lx(t, n);
  }
  setHours(t, n) {
    return Fx(t, n);
  }
  setMonth(t, n) {
    return Rx(t, n);
  }
  setDate(t, n) {
    return Ox(t, n);
  }
  setYear(t, n) {
    return Nx(t, n);
  }
  getDiff(t, n, a) {
    return Zi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return cx(this.locale, a, n);
  }
  getYear(t) {
    return Lo(t);
  }
  getMonth(t) {
    return bx(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return px(t, this.locale, l, o);
  }
  getDate(t) {
    return wx(t);
  }
  getNextMonth(t) {
    return xx(t);
  }
  getPreviousMonth(t) {
    return Cx(t);
  }
  getHours(t) {
    return _x(t);
  }
  getMinutes(t) {
    return Vx(t);
  }
  startOfDay(t) {
    return Ro(t);
  }
  endOfDay(t) {
    return yc(t);
  }
  startOfYear(t) {
    return Ix(t);
  }
  endOfYear(t) {
    return Px(t);
  }
}
const Qg = Symbol.for("vuetify:date-options"), Yf = Symbol.for("vuetify:date-adapter");
function zx(e, t) {
  const n = Rt({ adapter: Hx, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: th(n, t) };
}
function Wx(e, t, n) {
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
const kr = ["sm", "md", "lg", "xl", "xxl"], Zs = Symbol.for("vuetify:display"), Kf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, jx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kf;
  return Rt(Kf, e);
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
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), c = n(/firefox/i), u = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: c, opera: u, win: d, mac: f, linux: v, touch: Qw, ssr: t === "ssr" };
}
function Ux(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = jx(e), l = ie(Xf(t)), o = ie(Zf(t)), i = Tt({}), r = ie(qf(t));
  function s() {
    l.value = Xf(), r.value = qf();
  }
  function c() {
    s(), o.value = Zf();
  }
  return ct(() => {
    const u = r.value < n.sm, d = r.value < n.md && !u, f = r.value < n.lg && !(d || u), v = r.value < n.xl && !(f || d || u), S = r.value < n.xxl && !(v || f || d || u), m = r.value >= n.xxl, y = u ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : S ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], k = r.value < h;
    i.xs = u, i.sm = d, i.md = f, i.lg = v, i.xl = S, i.xxl = m, i.smAndUp = !u, i.mdAndUp = !(u || d), i.lgAndUp = !(u || d || f), i.xlAndUp = !(u || d || f || v), i.smAndDown = !(f || v || S || m), i.mdAndDown = !(v || S || m), i.lgAndDown = !(S || m), i.xlAndDown = !m, i.name = y, i.height = l.value, i.width = r.value, i.mobile = k, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Je && (window.addEventListener("resize", s, { passive: true }), bt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Zl(i), update: c, ssr: !!t };
}
const gl = z({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function ln() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = We(Zs);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const nh = Symbol.for("vuetify:goto");
function ah() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: z0 };
}
function Gx(e) {
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
function Yx(e, t) {
  return { rtl: t.isRtl, options: Rt(ah(), e) };
}
async function Jf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Rt((a == null ? void 0 : a.options) ?? ah(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : bc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : Gx(o.container), c = Wn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!c) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let u;
  if (typeof r == "number") u = ms(r, n, i);
  else if (u = ms(r, n, i) - ms(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (u -= parseInt(S, 10));
  }
  u += o.offset, u = qx(s, u, !!i, !!n);
  const d = s[l] ?? 0;
  if (u === d) return Promise.resolve(u);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function S(m) {
    const h = (m - f) / o.duration, k = Math.floor(d + (u - d) * c(Ze(h, 0, 1)));
    if (s[l] = k, h >= 1 && Math.abs(k - s[l]) < 10) return v(u);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(S);
  }));
}
function Kx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = We(nh), { isRtl: n } = _t();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Jf(o, Rt(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Jf(o, Rt(e, i), true, a), l;
}
function qx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? n ? (s = -(l - i), c = 0) : (s = 0, c = l - i) : (s = 0, c = o + -r), Ze(t, s, c);
}
const Oo = Symbol.for("vuetify:theme"), Ue = z({ theme: String }, "theme");
function Qf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Xx() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qf();
  const t = Qf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Rt(o, l);
  }
  return Rt(t, { ...e, themes: n });
}
function Ga(e, t, n, a) {
  e.push(`${eC(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function ev(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = dn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${Ks(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? dn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function Zx(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? E0 : M0;
    for (const i of Nn(n[l], 1)) a[`${e}-${l}-${i}`] = Hg(o(dn(t), i));
  }
  return a;
}
function Jx(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...Zx(a, l, t) });
  }
  return n;
}
function Qx(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = dn(e[n]);
    t[a] = jg(l);
  }
  return t;
}
function eC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function tC(e, t, n) {
  const a = nC(e, t);
  a && (a.innerHTML = n);
}
function nC(e, t) {
  if (!Je) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function aC(e) {
  const t = Xx(e), n = ie(t.defaultTheme), a = q(t.themes), l = ie("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = _(() => {
    const h = {};
    for (const [k, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...Jx(I.colors, t.variations) };
      h[k] = { ...I, colors: { ...V, ...Qx(V) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), c = _(() => {
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
  }), u = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
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
        return { style: [{ textContent: c.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (k.push) {
        const V = k.push(I);
        Je && re(c, () => {
          V.patch(I);
        });
      } else Je ? (k.addHeadObjs(B(I)), ct(() => k.updateDOM())) : k.addHeadObjs(I());
    } else {
      let I = function() {
        tC(t.stylesheetId, t.cspNonce, c.value);
      };
      Je ? re(c, I, { immediate: true }) : I();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function S() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const k = h.indexOf(o.value), I = k === -1 ? 0 : (k + 1) % h.length;
    v(h[I]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    S(h);
  }
  const y = new Proxy(o, { get(h, k) {
    return Reflect.get(h, k);
  }, set(h, k, I) {
    return k === "value" && Cg(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, k, I);
  } });
  return { install: f, change: v, cycle: S, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: u, styles: c, global: { name: y, current: r } };
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
    Nt(() => {
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
  return Nt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const lC = (e, t, n, a) => {
  let l = { top: 0, left: 0, right: 0, bottom: 0 };
  const o = [{ id: "", layer: { ...l } }];
  for (const i of e) {
    const r = t.get(i), s = n.get(i), c = a.get(i);
    if (!r || !s || !c) continue;
    const u = { ...l, [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0) };
    o.push({ id: i, layer: u }), l = u;
  }
  return o;
};
function rh(e) {
  const t = We(No, null), n = _(() => t ? t.rootZIndex.value - 100 : tv), a = q([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: c, contentRect: u } = wn(), d = _(() => {
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
    return lC(C, l, o, r);
  }), v = _(() => !Array.from(s.values()).some((g) => g.value)), S = _(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": de(S.value.left), "--v-layout-right": de(S.value.right), "--v-layout-top": de(S.value.top), "--v-layout-bottom": de(S.value.bottom), ...v.value ? void 0 : { transition: "none" } })), y = _(() => f.value.slice(1).map((g, C) => {
    let { id: x } = g;
    const { layer: A } = f.value[C], P = o.get(x), E = l.get(x);
    return { id: x, ...A, size: Number(P.value), position: E.value };
  })), h = (g) => y.value.find((C) => C.id === g), k = St("createLayout"), I = ie(false);
  return Ct(() => {
    I.value = true;
  }), rt(No, { register: (g, C) => {
    let { id: x, order: A, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: T, absolute: L } = C;
    i.set(x, A), l.set(x, P), o.set(x, E), r.set(x, M), T && s.set(x, T);
    const N = Ml(lh, k == null ? void 0 : k.vnode).indexOf(g);
    N > -1 ? a.value.splice(N, 0, x) : a.value.push(x);
    const Z = _(() => y.value.findIndex((j) => j.id === x)), R = _(() => n.value + f.value.length * 2 - Z.value * 2), $ = _(() => {
      const j = P.value === "left" || P.value === "right", O = P.value === "right", U = P.value === "bottom", ae = D.value ?? E.value, ye = ae === 0 ? "%" : "px", ne = { [P.value]: 0, zIndex: R.value, transform: `translate${j ? "X" : "Y"}(${(M.value ? 0 : -(ae === 0 ? 100 : ae)) * (O || U ? -1 : 1)}${ye})`, position: L.value || n.value !== tv ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return ne;
      const fe = y.value[Z.value], Ae = d.value.get(x);
      return Ae && (fe[Ae.position] += Ae.amount), { ...ne, height: j ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : D.value ? `${D.value}px` : void 0, left: O ? void 0 : `${fe.left}px`, right: O ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: j ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), Y = _(() => ({ zIndex: R.value - 1 }));
    return { layoutItemStyles: $, layoutItemScrimStyles: Y, zIndex: R };
  }, unregister: (g) => {
    i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: S, mainStyles: m, getLayoutItem: h, items: y, layoutRect: u, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: y, layoutRect: u, layoutRef: c };
}
const oC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function nv(e) {
  const t = e.toLowerCase();
  return oC[t] || t;
}
function sh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((c) => e.startsWith(c)) && !["++", "//", "__"].some((c) => e.startsWith(c)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (c) => {
    i && (c && o.push(c), l.push(nv(i)), i = "");
  };
  for (let c = 0; c < e.length; c++) {
    const u = e[c], d = e[c + 1];
    ["+", "/", "_", "-"].includes(u) ? u === d ? (r(u), l.push(u), c++) : ["+", "/", "_"].includes(u) ? r(u) : i += u : i += u;
  }
  return r(), l.some((c) => c.length > 1 && c.includes("-") && c !== "--") ? t : l.length === 0 && e ? { keys: [nv(e)], separators: o } : { keys: l, separators: o };
}
function iC(e) {
  if (!e) return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n) return [];
  const a = [];
  let l = "", o = 0;
  for (; o < e.length; ) {
    const c = e[o];
    if (c === "-") {
      const u = e[o - 1], d = o > 1 ? e[o - 2] : void 0;
      ["+", "_"].includes(u) && !["+", "/"].includes(d ?? "") ? (l += c, o++) : (l ? (a.push(l), l = "") : a.push("-"), o++);
    } else l += c, o++;
  }
  l && a.push(l);
  const i = [];
  let r = 0;
  for (const c of a) c === "-" ? (r % 2 === 0 && i.push("-"), r++) : (r = 0, i.push(c));
  return i.every((c) => sh(c).keys.length > 0) ? i : [];
}
function uh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Rt(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Nl();
  return r.run(() => {
    const s = F0(a.defaults), c = Ux(a.display, a.ssr), u = aC(a.theme), d = J0(a.icons), f = nx(a.locale), v = zx(a.date, f), S = Yx(a.goTo, f);
    function m(h) {
      for (const I in i) h.directive(I, i[I]);
      for (const I in o) h.component(I, o[I]);
      for (const I in l) h.component(I, Kt({ ...l[I], name: I, aliasName: l[I].name }));
      const k = Nl();
      if (k.run(() => {
        u.install(h);
      }), h.onUnmount(() => k.stop()), h.provide(Ul, s), h.provide(Zs, c), h.provide(Oo, u), h.provide(qs, d), h.provide(Gl, f), h.provide(Qg, v.options), h.provide(Yf, v.instance), h.provide(nh, S), Je && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        c.update();
      });
      else {
        const { mount: I } = h;
        h.mount = function() {
          const V = I(...arguments);
          return Ee(() => c.update()), h.mount = I, V;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Tt({ defaults: Il.call(this, Ul), display: Il.call(this, Zs), theme: Il.call(this, Oo), icons: Il.call(this, qs), locale: Il.call(this, Gl), date: Il.call(this, Yf) });
      } } });
    }
    function y() {
      r.stop();
    }
    return { install: m, unmount: y, defaults: s, display: c, theme: u, icons: d, locale: f, date: v, goTo: S };
  });
}
const rC = "3.12.1";
uh.version = rC;
function Il(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const sC = an({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = xg();
  return (n, a) => {
    const l = je("v-icon"), o = je("v-tooltip"), i = je("v-btn"), r = je("v-btn-toggle");
    return De(), gn(r, { modelValue: Ne(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => ht(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Pe(() => [b(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: Pe(() => [b(l, null, { default: Pe(() => [...a[1] || (a[1] = [Ke("mdi-weather-sunny", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), b(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: Pe(() => [b(l, null, { default: Pe(() => [...a[2] || (a[2] = [Ke("mdi-theme-light-dark", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), b(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: Pe(() => [b(l, null, { default: Pe(() => [...a[3] || (a[3] = [Ke("mdi-weather-night", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), av = Kn(sC, [["__scopeId", "data-v-c9886728"]]), uC = an({ __name: "AppHeader", setup(e) {
  const t = [{ label: "Demos", href: "#projects" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }], { smAndDown: n } = ln(), a = q(false);
  return (l, o) => {
    const i = je("v-app-bar-title"), r = je("v-btn"), s = je("v-list-item"), c = je("v-list"), u = je("v-menu"), d = je("v-app-bar");
    return De(), gn(d, { elevation: "0", color: "background", border: "b" }, { append: Pe(() => [Ne(n) ? (De(), Re(ge, { key: 0 }, [b(av), b(u, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: Pe(({ props: f }) => [b(r, K(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: Pe(() => [b(c, { class: "header-menu-list", density: "compact" }, { default: Pe(() => [(De(), Re(ge, null, Jt(t, (f) => b(s, { key: f.label, href: f.href, title: f.label, onClick: o[0] || (o[0] = (v) => a.value = false) }, null, 8, ["href", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (De(), Re(ge, { key: 1 }, [(De(), Re(ge, null, Jt(t, (f) => b(r, { key: f.label, href: f.href, variant: "text", size: "default", class: "nav-ink" }, { default: Pe(() => [Ke(Ie(f.label), 1)]), _: 2 }, 1032, ["href"])), 64)), b(av)], 64))]), default: Pe(() => [b(i, { class: "header-title" }, { default: Pe(() => [...o[2] || (o[2] = [p("span", { class: "title-ink font-weight-bold" }, "Anjin Byte", -1)])]), _: 1 })]), _: 1 });
  };
} }), cC = { class: "text-medium-emphasis text-caption" }, dC = an({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = je("v-footer");
    return De(), gn(l, { color: "background", border: "t", class: "justify-center" }, { default: Pe(() => [p("span", cC, " \xA9 " + Ie(Ne(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), Cn = { name: "Taylor Hale", tagline: "Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript", bio: "I build systems-level software \u2014 WebGPU renderers, data pipelines, and prototype AI tooling \u2014 with a focus on clean abstraction and code that actually works. My background spans computer vision research, contract engineering, and full-stack web development.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, ch = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: Cn.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${Cn.email}`, display: Cn.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${Cn.phone.replace(/[^\d+]/g, "")}`, display: Cn.phone }, { label: "GitHub", icon: "mdi-github", href: Cn.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: Cn.linkedin, display: "bits-for-bread" }], fC = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Docker", "FFmpeg", "Google Cloud APIs"] }], vC = [{ title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "fragile-canvas", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "shiny-parakeet", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }], mC = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], gC = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], hC = { id: "hero", class: "hero-section" }, yC = { class: "hero-frame glass-panel glass-panel--strong" }, bC = { class: "hero-main" }, pC = { class: "hero-location" }, SC = { class: "hero-name section-heading" }, kC = { class: "hero-tagline" }, wC = { class: "hero-bio" }, xC = { class: "hero-actions" }, CC = { href: "#projects", class: "hero-link hero-link--primary" }, _C = { class: "hero-rail" }, VC = { class: "hero-note quiet-sheet" }, IC = { class: "skills-block" }, PC = { class: "skill-label" }, AC = { class: "skill-items" }, TC = { class: "hero-note quiet-sheet" }, DC = { class: "hero-links" }, EC = ["href"], MC = an({ __name: "HeroSection", setup(e) {
  const t = ch.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = je("v-icon"), o = je("v-container");
    return De(), Re("section", hC, [b(o, { class: "hero-container" }, { default: Pe(() => [p("div", yC, [p("div", bC, [a[2] || (a[2] = p("span", { class: "hero-kicker glass-chip section-kicker" }, "Systems engineer", -1)), p("p", pC, [b(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), Ke(" " + Ie(Ne(Cn).location), 1)]), p("h1", SC, Ie(Ne(Cn).name), 1), p("p", kC, Ie(Ne(Cn).tagline), 1), p("p", wC, Ie(Ne(Cn).bio), 1), p("div", xC, [p("a", CC, [a[0] || (a[0] = Ke(" View selected work ", -1)), b(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = p("a", { href: "#contact", class: "hero-link" }, "Get in touch", -1))])]), p("aside", _C, [p("section", VC, [a[3] || (a[3] = p("p", { class: "hero-note-label" }, "Capabilities", -1)), p("div", IC, [(De(true), Re(ge, null, Jt(Ne(fC), (i) => (De(), Re("div", { key: i.label, class: "skill-group" }, [p("span", PC, Ie(i.label), 1), p("span", AC, Ie(i.items.join("  \xB7  ")), 1)]))), 128))])]), p("section", TC, [a[4] || (a[4] = p("p", { class: "hero-note-label" }, "Elsewhere", -1)), p("div", DC, [(De(true), Re(ge, null, Jt(Ne(t), (i) => (De(), Re("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [b(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), p("span", null, Ie(i.display ?? i.label), 1)], 8, EC))), 128))])])])])]), _: 1 })]);
  };
} }), BC = Kn(MC, [["__scopeId", "data-v-8d8fb736"]]), Js = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function $C(e, t) {
  return Js[e].priority - Js[t].priority;
}
function FC(e) {
  return [...e.links ?? []].sort((t, n) => $C(t.kind, n.kind)).map((t) => ({ ...t, ...Js[t.kind] }));
}
function lv(e, t) {
  const n = FC(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const LC = { id: "projects", class: "demos-section" }, RC = { key: 0, class: "project-feature glass-panel" }, OC = { class: "project-feature-body" }, NC = { class: "project-feature-title" }, HC = { class: "project-feature-blurb" }, zC = { class: "project-feature-tech" }, WC = { class: "project-feature-actions" }, jC = ["href", "aria-label"], UC = { class: "project-index" }, GC = { class: "project-item-head" }, YC = { class: "project-item-title" }, KC = { key: 0, class: "project-item-links", "aria-label": "Project links" }, qC = ["href", "aria-label"], XC = { class: "project-item-blurb" }, ZC = { class: "project-item-tech" }, JC = an({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = vC, a = t ? { ...t, visibleLinks: lv(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: lv(o, "compact") }));
  return (o, i) => {
    const r = je("v-icon"), s = je("v-tooltip"), c = je("v-container");
    return De(), Re("section", LC, [b(c, { class: "projects-container" }, { default: Pe(() => [i[1] || (i[1] = p("div", { class: "projects-head" }, [p("div", { class: "projects-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Selected work"), p("h2", { class: "section-heading projects-title" }, "Rendering systems, WASM, and interfaces with texture.")]), p("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Ne(a) ? (De(), Re("article", RC, [p("div", OC, [i[0] || (i[0] = p("span", { class: "project-feature-label" }, "Featured project", -1)), p("h3", NC, Ie(Ne(a).title), 1), p("p", HC, Ie(Ne(a).blurb), 1), p("div", zC, [(De(true), Re(ge, null, Jt(Ne(a).tech, (u) => (De(), Re("span", { key: u, class: "project-tech-tag" }, Ie(u), 1))), 128))])]), p("div", WC, [(De(true), Re(ge, null, Jt(Ne(a).visibleLinks, (u) => (De(), Re("a", { key: u.kind, href: u.href, target: "_blank", rel: "noopener noreferrer", class: ee(["project-link", { "project-link--demo": u.kind === "demo" }]), "aria-label": u.ariaLabel }, [b(r, { icon: u.icon }, null, 8, ["icon"]), p("span", null, Ie(u.label), 1), b(s, { activator: "parent", location: "top", text: u.ariaLabel }, null, 8, ["text"])], 10, jC))), 128))])])) : Qt("", true), p("div", UC, [(De(true), Re(ge, null, Jt(Ne(l), (u) => (De(), Re("article", { key: u.title, class: "project-item quiet-sheet" }, [p("header", GC, [p("h3", YC, Ie(u.title), 1), u.visibleLinks.length ? (De(), Re("div", KC, [(De(true), Re(ge, null, Jt(u.visibleLinks, (d) => (De(), Re("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: ee(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [b(r, { icon: d.icon }, null, 8, ["icon"]), b(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, qC))), 128))])) : Qt("", true)]), p("p", XC, Ie(u.blurb), 1), p("div", ZC, [(De(true), Re(ge, null, Jt(u.tech, (d) => (De(), Re("span", { key: d, class: "project-tech-tag" }, Ie(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), QC = Kn(JC, [["__scopeId", "data-v-fedca604"]]), e1 = { id: "resume", class: "resume-section" }, t1 = { class: "timeline" }, n1 = { class: "entry-rail" }, a1 = { class: "entry-dates glass-chip" }, l1 = { class: "entry quiet-sheet" }, o1 = { class: "entry-head" }, i1 = { class: "entry-titleblock" }, r1 = { class: "entry-role" }, s1 = { class: "entry-subhead" }, u1 = { class: "entry-company" }, c1 = { class: "entry-work-location" }, d1 = { class: "entry-bullets" }, f1 = { key: 0, class: "entry-tech" }, v1 = { class: "entry-tech-items" }, m1 = { class: "entry-head" }, g1 = { class: "entry-titleblock" }, h1 = { class: "entry-role" }, y1 = { class: "entry-company" }, b1 = { class: "entry-meta" }, p1 = { class: "entry-dates" }, S1 = { class: "entry-location" }, k1 = { key: 0, class: "entry-focus" }, w1 = an({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return De(), Re("section", e1, [b(a, { class: "resume-container" }, { default: Pe(() => [n[2] || (n[2] = p("div", { class: "resume-head" }, [p("div", { class: "resume-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Resume"), p("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), p("ol", t1, [(De(true), Re(ge, null, Jt(Ne(mC), (l) => (De(), Re("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [p("div", n1, [p("span", a1, Ie(l.dates), 1)]), p("article", l1, [p("header", o1, [p("div", i1, [p("h3", r1, Ie(l.role), 1), p("div", s1, [p("p", u1, Ie(l.company), 1), p("span", c1, Ie(l.location), 1)])])]), p("ul", d1, [(De(true), Re(ge, null, Jt(l.highlights, (o, i) => (De(), Re("li", { key: i }, Ie(o), 1))), 128))]), l.tech ? (De(), Re("div", f1, [n[0] || (n[0] = p("span", { class: "entry-tech-label" }, "Stack", -1)), p("span", v1, Ie(l.tech.join("  \xB7  ")), 1)])) : Qt("", true)])]))), 128))]), n[3] || (n[3] = p("div", { class: "edu-head" }, [p("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (De(true), Re(ge, null, Jt(Ne(gC), (l) => (De(), Re("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [p("header", m1, [p("div", g1, [p("h3", h1, Ie(l.degree) + " \u2014 " + Ie(l.field), 1), p("p", y1, Ie(l.school), 1)]), p("div", b1, [p("span", p1, Ie(l.dates), 1), p("span", S1, Ie(l.location), 1)])]), l.focus ? (De(), Re("p", k1, [n[1] || (n[1] = p("span", { class: "entry-tech-label" }, "Focus", -1)), Ke(" " + Ie(l.focus), 1)])) : Qt("", true)]))), 128))]), _: 1 })]);
  };
} }), x1 = Kn(w1, [["__scopeId", "data-v-6c7f4bed"]]), C1 = ["href", "aria-label"], _1 = { class: "contact-text" }, V1 = an({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = je("v-icon");
    return De(), Re("div", { class: ee(["contact-strip", { "is-dense": e.dense }]) }, [(De(true), Re(ge, null, Jt(Ne(ch), (l) => (De(), Re("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [b(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), p("span", _1, Ie(l.display ?? l.label), 1)], 8, C1))), 128))], 2);
  };
} }), I1 = Kn(V1, [["__scopeId", "data-v-0c3dbac0"]]), P1 = { id: "contact", class: "contact-section" }, A1 = { class: "contact-band glass-panel" }, T1 = an({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = je("v-container");
    return De(), Re("section", P1, [b(a, { class: "contact-container" }, { default: Pe(() => [p("div", A1, [n[0] || (n[0] = p("div", { class: "contact-head" }, [p("span", { class: "glass-chip section-kicker" }, "Contact"), p("h2", { class: "contact-title" }, "Open to interesting problems."), p("p", { class: "contact-copy" }, " Best when the work sits somewhere between systems, interfaces, and practical experimentation. ")], -1)), b(I1, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), D1 = Kn(T1, [["__scopeId", "data-v-435177e9"]]), E1 = an({ __name: "App", setup(e) {
  return (t, n) => {
    const a = je("v-main"), l = je("v-app");
    return De(), gn(l, null, { default: Pe(() => [b(Jw), b(uC), b(a, null, { default: Pe(() => [b(BC), b(QC), b(x1), b(D1)]), _: 1 }), b(dC)]), _: 1 });
  };
} }), M1 = z({ ...pe(), ...Le(oh(), ["fullHeight"]), ...Ue() }, "VApp"), B1 = J()({ name: "VApp", props: M1(), setup(e, t) {
  let { slots: n } = t;
  const a = qe(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = rh({ ...e, fullHeight: true }), { rtlClasses: s } = _t();
  return te(() => {
    var _a3;
    return p("div", { ref: r, class: ee(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: ve([e.style]) }, [p("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Me = z({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), dh = z({ text: String, ...pe(), ...Me() }, "VToolbarTitle"), pc = J()({ name: "VToolbarTitle", props: dh(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(n.default || n.text || e.text);
    return b(e.tag, { class: ee(["v-toolbar-title", e.class]), style: ve(e.style) }, { default: () => {
      var _a3;
      return [a && p("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), $1 = z({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function yn(e, t, n) {
  return J()({ name: e, props: $1({ mode: n, origin: t }), setup(a, l) {
    let { slots: o } = l;
    const i = { onBeforeEnter(r) {
      a.origin && (r.style.transformOrigin = a.origin);
    }, onLeave(r) {
      if (a.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: c, offsetWidth: u, offsetHeight: d } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${u}px`, r.style.height = `${d}px`;
      }
      a.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (a.leaveAbsolute && (r == null ? void 0 : r._transitionInitialStyles)) {
        const { position: s, top: c, left: u, width: d, height: f } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = u || "", r.style.width = d || "", r.style.height = f || "";
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
    const i = iv(e.target, l), { x: r, y: s, sx: c, sy: u, speed: d } = i;
    if (gs.set(l, i), Wn()) aa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Hf }).finished.then(() => o());
    else {
      const f = aa(l, [{ transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`, opacity: 0 }, {}], { duration: 225 * d, easing: Hf });
      (_a3 = ov(l)) == null ? void 0 : _a3.forEach((v) => {
        aa(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Fo });
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
    const { x: r, y: s, sx: c, sy: u, speed: d } = i;
    Wn() ? aa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: zf }).finished.then(() => o()) : (aa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`, opacity: 0 }], { duration: 125 * d, easing: zf }).finished.then(() => o()), (_a3 = ov(l)) == null ? void 0 : _a3.forEach((v) => {
      aa(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Fo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? b(Da, K({ name: "dialog-transition" }, a, { css: false }), n) : b(Da, { name: "dialog-transition" }, n);
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
  let c = n.top + n.height / 2;
  i === "top" || r === "top" ? c -= n.height / 2 : (i === "bottom" || r === "bottom") && (c += n.height / 2);
  const u = n.width / a.width, d = n.height / a.height, f = Math.max(1, u, d), v = u / f || 0, S = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: c - (o + a.top), sx: v, sy: S, speed: y };
}
const L1 = yn("fab-transition", "center center", "out-in"), R1 = yn("dialog-bottom-transition"), O1 = yn("dialog-top-transition"), Ho = yn("fade-transition"), wc = yn("scale-transition"), N1 = yn("scroll-x-transition"), H1 = yn("scroll-x-reverse-transition"), z1 = yn("scroll-y-transition"), W1 = yn("scroll-y-reverse-transition"), j1 = yn("slide-x-transition"), U1 = yn("slide-x-reverse-transition"), xc = yn("slide-y-transition"), G1 = yn("slide-y-reverse-transition"), Cr = Sc("expand-transition", kc()), Cc = Sc("expand-x-transition", kc("", "x")), Y1 = Sc("expand-both-transition", kc("", "both")), K1 = z({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Be = J(false)({ name: "VDefaultsProvider", props: K1(), setup(e, t) {
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
function q1(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const fh = z({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...pe(), ...kt() }, "VResponsive"), Qs = J()({ name: "VResponsive", props: fh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = q1(e), { dimensionStyles: l } = wt(e);
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ve([l.value, e.style]) }, [p("div", { class: "v-responsive__sizer", style: ve(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && p("div", { class: ee(["v-responsive__content", e.contentClass]) }, [n.default()])]);
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
function X1(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function vh(e) {
  const t = X1(nt(e)), n = [], a = {};
  if (t.background) if (Gs(t.background)) {
    if (a.backgroundColor = t.background, !t.text && P0(t.background)) {
      const l = dn(t.background);
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
const ha = z({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Yt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? ec : Da, ...s } = il(a) ? a : {};
  let c;
  return il(a) ? c = K(s, c0({ disabled: l, group: o }), i) : c = K({ name: l || !a ? "" : a }, i), ma(r, c, n);
};
function rv(e, t) {
  if (!lc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!c) return;
    const u = r.some((d) => d.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || u || c.init) && l(u, r, s), u && n.once ? eu(e, t) : c.init = true;
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
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { roundedClasses: i } = dt(e), r = St("VImg"), s = ie(""), c = q(), u = ie(e.eager ? "loading" : "idle"), d = ie(), f = ie(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = _(() => v.value.aspect || d.value / f.value || 0);
  re(() => e.src, () => {
    m(u.value !== "idle");
  }), re(S, (D, M) => {
    !D && M && c.value && V(c.value);
  }), Jl(() => m());
  function m(D) {
    if (!(e.eager && D) && !(lc && !D && !e.eager)) {
      if (u.value = "loading", v.value.lazySrc) {
        const M = new Image();
        M.src = v.value.lazySrc, V(M, null);
      }
      v.value.src && Ee(() => {
        var _a3;
        n("loadstart", ((_a3 = c.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = c.value) == null ? void 0 : _a4.complete) {
            if (c.value.naturalWidth || h(), u.value === "error") return;
            S.value || V(c.value, null), u.value === "loading" && y();
          } else S.value || V(c.value), k();
        });
      });
    }
  }
  function y() {
    var _a3;
    r.isUnmounted || (k(), V(c.value), u.value = "loaded", n("load", ((_a3 = c.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (u.value = "error", n("error", ((_a3 = c.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function k() {
    const D = c.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let I = -1;
  Nt(() => {
    clearTimeout(I);
  });
  function V(D) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const T = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: W } = D;
      L || W ? (d.value = W, f.value = L) : !D.complete && u.value === "loading" && M != null ? I = window.setTimeout(T, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const w = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!v.value.src || u.value === "idle") return null;
    const D = p("img", { class: ee(["v-img__img", w.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: y, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return b(Yt, { transition: e.transition, appear: true }, { default: () => [at(M ? p("picture", { class: "v-img__picture" }, [M, D]) : D, [[Mn, u.value === "loaded"]])] });
  }, C = () => b(Yt, { transition: e.transition }, { default: () => [v.value.lazySrc && u.value !== "loaded" && p("img", { class: ee(["v-img__img", "v-img__img--preload", w.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), x = () => a.placeholder ? b(Yt, { transition: e.transition, appear: true }, { default: () => [(u.value === "loading" || u.value === "error" && !a.error) && p("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? b(Yt, { transition: e.transition, appear: true }, { default: () => [u.value === "error" && p("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ie(false);
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
    return at(b(Qs, K({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: de(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(ge, null, [b(g, null, null), b(C, null, null), b(P, null, null), b(x, null, null), b(A, null, null)]), default: a.default }), [[Dn, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: c, state: u, naturalWidth: d, naturalHeight: f };
} }), Ht = z({ border: [Boolean, Number, String] }, "border");
function qt(e) {
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
    function r(c) {
      return n ? n(c) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[sv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[sv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const Z1 = [null, "prominent", "default", "comfortable", "compact"], gh = z({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => Z1.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Ht(), ...pe(), ...xt(), ...Zn(), ...it(), ...Me({ tag: "header" }), ...Ue() }, "VToolbar"), tu = J()({ name: "VToolbar", props: gh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Oa(e), { roundedClasses: s } = dt(e), { themeClasses: c } = qe(e), { rtlClasses: u } = _t(), d = ie(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return mt({ VBtn: { variant: "text" } }), te(() => {
    var _a4;
    const S = !!(e.title || n.title), m = !!(n.image || e.image), y = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!y : e.extended, b(e.tag, { class: ee(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, c.value, u.value, e.class]), style: ve([l.value, r.value, e.style]) }, { default: () => [m && p("div", { key: "image", class: "v-toolbar__image" }, [n.image ? b(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(Be, { defaults: { VTabs: { height: de(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [p("div", { class: "v-toolbar__content", style: { height: de(f.value) } }, [n.prepend && p("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && b(pc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && p("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), b(Be, { defaults: { VTabs: { height: de(v.value) } } }, { default: () => [b(Cr, null, { default: () => [d.value && p("div", { class: "v-toolbar__extension", style: { height: de(v.value) } }, [y])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), J1 = z({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function Q1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = q(null), r = ie(0), s = ie(0), c = ie(0), u = ie(false), d = ie(false), f = ie(false), v = ie(false), S = ie(true), m = _(() => Number(e.scrollThreshold)), y = _(() => Ze((m.value - r.value) / m.value || 0));
  function h(w) {
    const g = "window" in w ? window.innerHeight : w.clientHeight, C = "window" in w ? document.documentElement.scrollHeight : w.scrollHeight;
    return { clientHeight: g, scrollHeight: C };
  }
  function k() {
    const w = i.value;
    if (!w) return;
    const { clientHeight: g, scrollHeight: C } = h(w), x = C - g, A = (a == null ? void 0 : a.value) || 0, P = m.value + A;
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
    o !== g && (g > o && k(), o = g), d.value = r.value < l, c.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: x } = h(w), A = r.value + C >= x - 5;
    !d.value && A && r.value >= m.value && S.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !A || P && r.value < m.value || E) && (v.value = false), f.value = A;
  }
  return re(d, () => {
    s.value = s.value || r.value;
  }), re(u, () => {
    s.value = 0;
  }), Ct(() => {
    re(() => e.scrollTarget, (w) => {
      var _a3;
      const g = w ? document.querySelector(w) : window;
      g && g !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), i.value = g, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        k();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Nt(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && re(n, V, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: c, isScrollActive: u, scrollRatio: y, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S };
}
function bl() {
  const e = ie(false);
  return Ct(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: al(e) };
}
const e_ = z({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Le(gh(), ["location"]), ...hl(), ...J1(), height: { type: [Number, String], default: 64 } }, "VAppBar"), t_ = J()({ name: "VAppBar", props: e_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
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
  }), { currentScroll: s, scrollThreshold: c, isScrollingUp: u, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S } = Q1(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), y = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), k = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < c.value || o.value.fullyHide ? g + C : g : g + C;
  });
  $t(() => !!e.scrollBehavior, () => {
    ct(() => {
      if (!m.value) {
        l.value = true;
        return;
      }
      if (o.value.inverted) {
        l.value = s.value > c.value;
        return;
      }
      if (!S.value) {
        l.value = true;
        return;
      }
      if (v.value) {
        l.value = false;
        return;
      }
      l.value = u.value && !f.value || s.value < c.value;
    });
  });
  const { ssrBootStyles: V } = bl(), { layoutItemStyles: w } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: ie(void 0), active: l, absolute: B(() => e.absolute) });
  return te(() => {
    const g = Le(tu.filterProps(e), ["location"]);
    return b(tu, K({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...w.value, "--v-toolbar-image-opacity": k.value, height: void 0, ...V.value }, e.style] }, g, { collapse: y.value, flat: h.value }), n);
  }), {};
} }), n_ = [null, "default", "comfortable", "compact"], gt = z({ density: { type: String, default: "default", validator: (e) => n_.includes(e) } }, "density");
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const a_ = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ya(e, t) {
  return p(ge, null, [e && p("span", { key: "overlay", class: ee(`${t}__overlay`) }, null), p("span", { key: "underlay", class: ee(`${t}__underlay`) }, null)]);
}
const bn = z({ color: String, variant: { type: String, default: "elevated", validator: (e) => a_.includes(e) } }, "variant");
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
const hh = z({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Ht(), ...pe(), ...gt(), ...xt(), ...it(), ...Me(), ...Ue(), ...bn() }, "VBtnGroup"), nu = J()({ name: "VBtnGroup", props: hh(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Lt(e), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e);
  mt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), te(() => b(e.tag, { class: ee(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: ve(e.style) }, n));
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
  function c() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Nt(() => c());
  const u = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), v = _(() => u.value && [o.selectedClass.value, e.selectedClass]);
  return re(u, (S) => {
    a.emit("group:selected", { value: S });
  }, { flush: "sync" }), { id: l, isSelected: u, isFirst: d, isLast: f, toggle: () => o.select(l, !u.value), select: (S) => o.select(l, S), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: c };
}
function Na(e, t) {
  let n = false;
  const a = Tt([]), l = we(e, "modelValue", [], (f) => f === void 0 ? [] : yh(a, f === null ? [null] : ot(f)), (f) => {
    const v = o_(a, f);
    return e.multiple ? v : v[0];
  }), o = St("useGroup");
  function i(f, v) {
    const S = f, m = Symbol.for(`${t.description}:id`), h = Ml(m, o == null ? void 0 : o.vnode).indexOf(v);
    Ne(S.value) === void 0 && (S.value = h, S.useIndexAsValue = true), h > -1 ? a.splice(h, 0, S) : a.push(S);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((S) => S.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  Ct(() => {
    s();
  }), Nt(() => {
    n = true;
  }), fr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function c(f, v) {
    const S = a.find((m) => m.id === f);
    if (!(v && (S == null ? void 0 : S.disabled))) if (e.multiple) {
      const m = l.value.slice(), y = m.findIndex((k) => k === f), h = ~y;
      if (v = v ?? !h, h && e.mandatory && m.length <= 1 || !h && e.max != null && m.length + 1 > e.max) return;
      y < 0 && v ? m.push(f) : y >= 0 && !v && m.splice(y, 1), l.value = m;
    } else {
      const m = l.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      l.value = v ?? !m ? [f] : [];
    }
  }
  function u(f) {
    if (e.multiple, l.value.length) {
      const v = l.value[0], S = a.findIndex((h) => h.id === v);
      let m = (S + f) % a.length, y = a[m];
      for (; y.disabled && m !== S; ) m = (m + f) % a.length, y = a[m];
      if (y.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((S) => !S.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: c, disabled: B(() => e.disabled), prev: () => u(a.length - 1), next: () => u(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => l_(a, f) };
  return rt(t, d), d;
}
function l_(e, t) {
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
function o_(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Vc = Symbol.for("vuetify:v-btn-toggle"), i_ = z({ ...hh(), ...pl() }, "VBtnToggle"), r_ = J()({ name: "VBtnToggle", props: i_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Na(e, Vc);
  return te(() => {
    const s = nu.filterProps(e);
    return b(nu, K({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), s_ = ["x-small", "small", "default", "large", "x-large"], Jn = z({ size: { type: [String, Number], default: "default" } }, "size");
function Ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return sc(() => {
    const n = e.size;
    let a, l;
    return Gi(s_, n) ? a = `${t}--size-${n}` : n && (l = { width: de(n), height: de(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const u_ = z({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ce, opacity: [String, Number], ...pe(), ...Jn(), ...Me({ tag: "i" }), ...Ue() }, "VIcon"), Ye = J()({ name: "VIcon", props: u_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ie(), { themeClasses: o } = wr(), { iconData: i } = K0(() => l.value || e.icon), { sizeClasses: r } = Ql(e), { textColorClasses: s, textColorStyles: c } = Et(() => e.color);
  return te(() => {
    var _a3, _b2;
    const u = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    u && (l.value = (_b2 = Tg(u).filter((f) => f.type === ei && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return b(i.value.component, { tag: e.tag, icon: i.value.icon, class: ee(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ve([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: de(e.size), height: de(e.size), width: de(e.size) }, c.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [u] });
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
const c_ = z({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function d_(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ie(e.reveal ? "initial" : "disabled");
  return Ct(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const f_ = z({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...pe(), ...c_(), ...Jn(), ...Me({ tag: "div" }), ...Ue() }, "VProgressCircular"), Ba = J()({ name: "VProgressCircular", props: f_(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = q(), { themeClasses: i } = qe(e), { sizeClasses: r, sizeStyles: s } = Ql(e), { textColorClasses: c, textColorStyles: u } = Et(() => e.color), { textColorClasses: d, textColorStyles: f } = Et(() => e.bgColor), { intersectionRef: v, isIntersecting: S } = ii(), { resizeRef: m, contentRect: y } = wn(), { state: h, duration: k } = d_(e), I = B(() => h.value === "initial" ? 0 : Ze(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), w = B(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(V.value, 32)), g = B(() => a / (1 - V.value / w.value) * 2), C = B(() => V.value / w.value * g.value), x = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? de(Math.min(l - 0.01, P + C.value)) : de(P);
  }), A = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ct(() => {
    v.value = o.value, m.value = o.value;
  }), te(() => b(e.tag, { ref: o, class: ee(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Wn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, c.value, e.class]), style: ve([s.value, u.value, { "--progress-reveal-duration": `${k.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [p("circle", { class: ee(["v-progress-circular__underlay", d.value]), style: ve(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": x.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), v_ = z({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function m_(e, t) {
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
    const c = 100 * l.value / s, u = 100 * (a.value + l.value) / s, d = Math.floor((r + c) / u);
    return Ze(0, d * u - c / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const g_ = z({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...v_(), ...pe(), ...Zn({ location: "top" }), ...it(), ...Me(), ...Ue() }, "VProgressLinear"), _r = J()({ name: "VProgressLinear", props: g_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = q(), l = we(e, "modelValue"), { isRtl: o, rtlClasses: i } = _t(), { themeClasses: r } = qe(e), { locationStyles: s } = Oa(e), { textColorClasses: c, textColorStyles: u } = Et(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Xe(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: S } = Xe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: y } = Xe(() => e.color), { roundedClasses: h } = dt(e), { intersectionRef: k, isIntersecting: I } = ii(), V = _(() => parseFloat(e.max)), w = _(() => parseFloat(e.height)), g = _(() => Ze(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => Ze(parseFloat(l.value) / V.value * 100, 0, 100)), x = _(() => o.value !== e.reverse), A = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = ie(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = m_(e, P);
  $t(E, () => {
    const { resizeRef: N } = wn((Z) => P.value = Z[0].contentRect.width);
    ct(() => N.value = a.value);
  });
  const T = _(() => E.value ? M(g.value) : g.value), L = _(() => E.value ? M(C.value) : C.value);
  function W(N) {
    if (!k.value) return;
    const { left: Z, right: R, width: $ } = k.value.getBoundingClientRect(), Y = x.value ? $ - N.clientX + (R - $) : N.clientX - Z;
    l.value = Math.round(Y / $ * V.value);
  }
  return ct(() => {
    k.value = a.value;
  }), te(() => b(e.tag, { ref: a, class: ee(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": x.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: ve([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? de(w.value) : 0, "--v-progress-linear-height": de(w.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && W }, { default: () => [e.stream && p("div", { key: "stream", class: ee(["v-progress-linear__stream", c.value]), style: { ...u.value, [x.value ? "left" : "right"]: de(-w.value), borderTop: `${de(w.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${de(w.value / 4)})`, width: de(100 - g.value, "%"), "--v-progress-linear-stream-to": de(w.value * (x.value ? 1 : -1)) } }, null), p("div", { class: ee(["v-progress-linear__background", d.value]), style: ve([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), p("div", { class: ee(["v-progress-linear__buffer", v.value]), style: ve([S.value, { opacity: parseFloat(e.bufferOpacity), width: de(T.value, "%") }]) }, null), b(Da, { name: A.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => p("div", { key: N, class: ee(["v-progress-linear__indeterminate", N, m.value]), style: ve(y.value) }, null))]) : p("div", { class: ee(["v-progress-linear__determinate", m.value]), style: ve([y.value, { width: de(L.value, "%") }]) }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
} }), Vr = z({ loading: [Boolean, String] }, "loader");
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function si(e, t) {
  var _a3;
  let { slots: n } = t;
  return p("div", { class: ee(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || b(_r, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const h_ = ["static", "relative", "fixed", "absolute", "sticky"], eo = z({ position: { type: String, validator: (e) => h_.includes(e) } }, "position");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function y_() {
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
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = y_(), s = _(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Dt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), c = _(() => {
    var _a3;
    return e.to ? (_a3 = i.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: B(() => !!e.to), isClickable: l, isActive: s, route: B(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.route.value;
  }), navigate: B(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.navigate;
  }), href: c, linkProps: Tt({ href: c, "aria-current": B(() => s.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && a.value ? "true" : void 0), tabindex: B(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const ci = z({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let hs = false;
function b_(e, t) {
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
function p_(e, t) {
  re(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ee(() => {
      t(n);
    });
  }, { immediate: true });
}
const au = Symbol("rippleStop"), S_ = 80;
function uv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function lu(e) {
  return e.constructor.name === "TouchEvent";
}
function ph(e) {
  return e.constructor.name === "KeyboardEvent";
}
const k_ = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!ph(e)) {
    const d = t.getBoundingClientRect(), f = lu(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, c = n.center ? r : `${a - o}px`, u = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: c, y: u, centerX: r, centerY: s };
}, Ji = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: c, centerY: u } = k_(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), uv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), uv(l, `translate(${c}, ${u}) scale3d(1,1,1)`);
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
      }, S_);
    } else Ji.show(e, n, t);
  }
}
function Qi(e) {
  e[au] = true;
}
function sn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        sn(e);
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
function w_(e, t) {
  !Wo && t.includes(e.key) && (Wo = true, zo(e));
}
function wh(e) {
  Wo = false, sn(e);
}
function xh(e) {
  Wo && (Wo = false, sn(e));
}
function Ch(e, t, n) {
  const { value: a, modifiers: l } = t, o = Sh(a);
  o || Ji.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = il(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => w_(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Qi, { passive: true }), e.addEventListener("mousedown", Qi);
      return;
    }
    e.addEventListener("touchstart", zo, { passive: true }), e.addEventListener("touchend", sn, { passive: true }), e.addEventListener("touchmove", kh, { passive: true }), e.addEventListener("touchcancel", sn), e.addEventListener("mousedown", zo), e.addEventListener("mouseup", sn), e.addEventListener("mouseleave", sn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", wh), e.addEventListener("blur", xh), e.addEventListener("dragstart", sn, { passive: true });
  } else !o && n && _h(e);
}
function _h(e) {
  var _a3;
  e.removeEventListener("touchstart", Qi), e.removeEventListener("mousedown", Qi), e.removeEventListener("touchstart", zo), e.removeEventListener("touchend", sn), e.removeEventListener("touchmove", kh), e.removeEventListener("touchcancel", sn), e.removeEventListener("mousedown", zo), e.removeEventListener("mouseup", sn), e.removeEventListener("mouseleave", sn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", wh), e.removeEventListener("blur", xh), e.removeEventListener("dragstart", sn);
}
function x_(e, t) {
  Ch(e, t, false);
}
function C_(e) {
  _h(e), delete e._ripple;
}
function __(e, t) {
  if (t.value === t.oldValue) return;
  const n = Sh(t.oldValue);
  Ch(e, t, n);
}
const Ft = { mounted: x_, unmounted: C_, updated: __ }, Ir = z({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Vc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...gt(), ...kt(), ...xt(), ...Sl(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "elevated" }) }, "VBtn"), ze = J()({ name: "VBtn", props: Ir(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = qt(e), { densityClasses: i } = Lt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: c } = ri(e), { locationStyles: u } = Oa(e), { positionClasses: d } = to(e), { roundedClasses: f } = dt(e), { sizeClasses: v, sizeStyles: S } = Ql(e), m = Ma(e, e.symbol, false), y = ui(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : y.isRouterLink.value ? (_a3 = y.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), k = B(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!y.isLink.value || ((_a3 = y.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = y.isActive) == null ? void 0 : _b2.value) ? k.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: w, variantClasses: g } = ba(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), x = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || y.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? (_b2 = (_a3 = y.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return p_(y, m == null ? void 0 : m.select), te(() => {
    const E = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return at(b(E, K(y.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": x.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, c.value, d.value, f.value, v.value, g.value, e.class], style: [w.value, r.value, u.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ya(true, "v-btn"), !e.icon && D && p("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? b(Be, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : b(Ye, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? b(Ye, { key: "content-icon", icon: e.icon }, null) : b(Be, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text)];
      } })]), !e.icon && M && p("span", { key: "append", class: "v-btn__append" }, [a.append ? b(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : b(Ye, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Ft, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), V_ = z({ ...Le(Ir({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), I_ = J()({ name: "VAppBarNavIcon", props: V_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(ze, K(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), P_ = J()({ name: "VAppBarTitle", props: dh(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(pc, K(e, { class: "v-app-bar-title" }), n)), {};
} }), Vh = ga("v-alert-title"), Ih = z({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Ph(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const A_ = ["success", "info", "warning", "error"], T_ = z({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => A_.includes(e) }, ...pe(), ...gt(), ...kt(), ...xt(), ...Ih(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAlert"), D_ = J()({ name: "VAlert", props: T_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Ph(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = qe(e), { colorClasses: s, colorStyles: c, variantClasses: u } = ba(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Lt(e), { dimensionStyles: f } = wt(e), { elevationClasses: v } = It(e), { locationStyles: S } = Oa(e), { positionClasses: m } = to(e), { roundedClasses: y } = dt(e), { textColorClasses: h, textColorStyles: k } = Et(() => e.borderColor), { t: I } = Qe(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(w) {
    l.value = false, n("click:close", w);
  } }));
  return () => {
    const w = !!(a.prepend || o.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), x = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && b(e.tag, { class: ee(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, y.value, u.value, e.class]), style: ve([c.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ya(false, "v-alert"), e.border && p("div", { key: "border", class: ee(["v-alert__border", h.value]), style: ve(k.value) }, null), w && p("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? b(Be, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...x } } }, a.prepend) : b(Ye, K({ key: "prepend-icon" }, x), null)]), p("div", { class: "v-alert__content" }, [g && b(Vh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && p("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && p("div", { key: "close", class: "v-alert__close" }, [a.close ? b(Be, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : b(ze, K({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), E_ = z({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...Ht(), ...pe(), ...gt(), ...it(), ...Jn(), ...Me(), ...Ue(), ...bn({ variant: "flat" }) }, "VAvatar"), hn = J()({ name: "VAvatar", props: E_(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = qt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ba(e), { densityClasses: s } = Lt(e), { roundedClasses: c } = dt(e), { sizeClasses: u, sizeStyles: d } = Ql(e);
  return te(() => b(e.tag, { class: ee(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, c.value, u.value, r.value, e.class]), style: ve([i.value, d.value, e.style]) }, { default: () => [n.default ? b(Be, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? b(da, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? b(Ye, { key: "icon", icon: e.icon }, null) : e.text, ya(false, "v-avatar")] })), {};
} }), M_ = z({ text: String, onClick: Bt(), ...pe(), ...Ue() }, "VLabel"), no = J()({ name: "VLabel", props: M_(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return p("label", { class: ee(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ve(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ah = Symbol.for("vuetify:selection-control-group"), Ic = z({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...pe(), ...gt(), ...Ue() }, "SelectionControlGroup"), B_ = z({ ...Ic({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), Th = J()({ name: "VSelectionControlGroup", props: B_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
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
    return p("div", { class: ee(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ve(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Pr = z({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...pe(), ...Ic() }, "VSelectionControl");
function $_(e) {
  const t = We(Ah, void 0), { densityClasses: n } = Lt(e), a = we(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? ot(v).some((S) => e.valueComparator(S, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const S = v ? l.value : o.value;
    let m = S;
    i.value && (m = v ? [...ot(a.value), S] : ot(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: c } = Et(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: u, backgroundColorStyles: d } = Xe(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: c, backgroundColorClasses: u, backgroundColorStyles: d, icon: f };
}
const $a = J()({ name: "VSelectionControl", directives: { vRipple: Ft }, inheritAttrs: false, props: Pr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: c, backgroundColorClasses: u, backgroundColorStyles: d, trueValue: f } = $_(e), v = Mt(), S = ie(false), m = ie(false), y = q(), h = B(() => e.id || `input-${v}`), k = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    y.value && (y.value.checked = r.value);
  });
  function I(C) {
    k.value && (S.value = true, Wl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function V() {
    S.value = false, m.value = false;
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
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [x, A] = qn(n), P = p("input", K({ ref: y, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return p("div", K({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, x, { style: e.style }), [p("div", { class: ee(["v-selection-control__wrapper", s.value]), style: ve(c.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: u, backgroundColorStyles: d }), at(p("div", { class: ee(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: c, backgroundColorClasses: u, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? p(ge, null, [i.value && b(Ye, { key: "icon", icon: i.value }, null), P])]), [[Ft, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && b(no, { for: h.value, onClick: w }, { default: () => [C] })]);
  }), { isFocused: S, input: y };
} }), Dh = z({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ...Pr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), En = J()({ name: "VCheckboxBtn", props: Dh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "indeterminate"), l = we(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => {
    const s = Le($a.filterProps(e), ["modelValue"]);
    return b($a, K(s, { modelValue: l.value, "onUpdate:modelValue": [(c) => l.value = c, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function di(e) {
  const { t } = Qe();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function c(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ai(s, new PointerEvent("click", d)));
    }
    const u = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return b(Ye, K({ icon: e[`${l}Icon`], "aria-label": u, onClick: s, onKeydown: c, color: o }, i), null);
  }
  return { InputIcon: n };
}
const F_ = z({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...pe(), ...ha({ transition: { component: xc, leaveAbsolute: true, group: true } }) }, "VMessages"), Eh = J()({ name: "VMessages", props: F_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => ot(e.messages)), { textColorClasses: l, textColorStyles: o } = Et(() => e.color);
  return te(() => b(Yt, { transition: e.transition, tag: "div", class: ee(["v-messages", l.value, e.class]), style: ve([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => p("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
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
const Mh = Symbol.for("vuetify:form"), L_ = z({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function R_(e) {
  const t = we(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = ie(false), o = q([]), i = q([]);
  async function r() {
    const u = [];
    let d = true;
    i.value = [], l.value = true;
    for (const f of o.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = false, u.push({ id: f.id, errorMessages: v })), !d && e.fastFail) break;
    }
    return i.value = u, l.value = false, { valid: d, errors: i.value };
  }
  function s() {
    o.value.forEach((u) => u.reset());
  }
  function c() {
    o.value.forEach((u) => u.resetValidation());
  }
  return re(o, () => {
    let u = 0, d = 0;
    const f = [];
    for (const v of o.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && u++;
    i.value = f, t.value = d > 0 ? false : u === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), rt(Mh, { register: (u) => {
    let { id: d, vm: f, validate: v, reset: S, resetValidation: m } = u;
    o.value.some((y) => y.id === d), o.value.push({ id: d, validate: v, reset: S, resetValidation: m, vm: dm(f), isValid: null, errorMessages: [] });
  }, unregister: (u) => {
    o.value = o.value.filter((d) => d.id !== u);
  }, update: (u, d, f) => {
    const v = o.value.find((S) => S.id === u);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: c };
}
function ao(e) {
  const t = We(Mh, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const O_ = Symbol.for("vuetify:rules");
function N_(e) {
  const t = We(O_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const Bh = z({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function $h(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = we(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = ao(e), i = N_(() => e.rules), r = q([]), s = ie(true), c = _(() => !!(ot(a.value === "" ? null : a.value).length || ot(l.value === "" ? null : l.value).length)), u = _(() => {
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
  }), v = ie(false), S = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: c.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = St("validation"), y = _(() => e.name ?? Ne(n));
  Jl(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: y.value, vm: m, validate: I, reset: h, resetValidation: k });
  }), Nt(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, y.value);
  }), Ct(async () => {
    var _a3;
    d.value.lazy || await I(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, u.value);
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
  }), re([f, u], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, u.value);
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
    v.value = true;
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
    return r.value = w, v.value = false, s.value = V, r.value;
  }
  return { errorMessages: u, isDirty: c, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: k, validate: I, validationClasses: S };
}
const Sa = z({ id: String, appendIcon: Ce, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...pe(), ...gt(), ...en(kt(), ["maxWidth", "minWidth", "width"]), ...Ue(), ...Bh() }, "VInput"), Ot = J()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = qe(e), { rtlClasses: s } = _t(), { InputIcon: c } = di(e), u = Mt(), d = _(() => e.id || `input-${u}`), { errorMessages: f, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: k, reset: I, resetValidation: V, validate: w, validationClasses: g } = $h(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), x = B(() => C.value.length > 0), A = B(() => !e.hideDetails || e.hideDetails === "auto" && (x.value || !!a.details)), P = _(() => A.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: k, hasDetails: A, reset: I, resetValidation: V, validate: w })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return te(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return p("div", { class: ee(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, g.value, e.class]), style: ve([i.value, e.style]) }, [T && p("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && b(c, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && p("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && p("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && b(c, { key: "append-icon", name: "append", color: M.value }, null)]), A.value && p("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [b(Eh, { active: x.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
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
        const c = s.slice();
        for (; c.length; ) {
          const u = c.shift(), d = bs(u.value, o);
          if (d) return d;
          const f = u.value && u.value[ys];
          f && c.push(...f);
        }
      }
    }
  } });
}
const H_ = z({ ...Le(Sa(), ["direction"]), ...Le(Dh(), ["inline"]) }, "VCheckbox"), z_ = J()({ name: "VCheckbox", inheritAttrs: false, props: H_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), { isFocused: o, focus: i, blur: r } = pa(e), s = q(), c = Mt();
  return te(() => {
    const [u, d] = qn(n), f = Ot.filterProps(e), v = En.filterProps(e);
    return b(Ot, K({ ref: s, class: ["v-checkbox", e.class] }, u, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${c}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: m, messagesId: y, isDisabled: h, isReadonly: k, isValid: I } = S;
      return b(En, K(v, { id: m.value, "aria-describedby": y.value, disabled: h.value, readonly: k.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function W_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = jo(l, n), i = Fh(l, a, n), r = jo(l, t), s = Lh(l, t), c = r * 0.4;
  return i > s ? s - c : i + o < s + r ? s - o + r + c : i;
}
function j_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = jo(a, n), o = Lh(a, t), i = jo(a, t);
  return o - l / 2 + i / 2;
}
function cv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function U_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function Fh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function jo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Lh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Pc = Symbol.for("vuetify:v-slide-group"), Ac = z({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Pc }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...pe(), ...gl({ mobile: null }), ...Me(), ...pl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Uo = J()({ name: "VSlideGroup", props: Ac(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = _t(), { displayClasses: l, mobile: o } = ln(e), i = Na(e, e.symbol), r = ie(false), s = ie(0), c = ie(0), u = ie(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = wn(), { resizeRef: S, contentRect: m } = wn(), y = Kx(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), k = _(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((j) => j.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Je) {
    let j = -1;
    re(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(j), j = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const O = d.value ? "width" : "height";
          c.value = v.value[O], u.value = m.value[O], r.value = c.value + 1 < u.value;
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
    O ? U = j_({ containerElement: f.el, isHorizontal: d.value, selectedElement: j }) : U = W_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: j }), g(U);
  }
  function g(j) {
    if (!Je || !f.el) return;
    const O = jo(d.value, f.el), U = Fh(d.value, a.value, f.el);
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
    !P && !V.value && !(j.relatedTarget && ((_a3 = S.el) == null ? void 0 : _a3.contains(j.relatedTarget))) && L(), P = false;
  }
  function D() {
    P = true;
  }
  function M(j) {
    if (!S.el) return;
    function O(U) {
      j.preventDefault(), L(U);
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
  function L(j) {
    if (!S.el) return;
    let O;
    if (!j) O = Pa(S.el)[0];
    else if (j === "next") {
      if (O = T(S.el.querySelector(":focus"), j), !O) return L("first");
    } else if (j === "prev") {
      if (O = T(S.el.querySelector(":focus"), j), !O) return L("last");
    } else j === "first" ? (O = S.el.firstElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "next"))) : j === "last" && (O = S.el.lastElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "prev")));
    O && O.focus({ preventScroll: true });
  }
  function W(j) {
    const O = d.value && a.value ? -1 : 1, U = (j === "prev" ? -O : O) * c.value;
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
    const j = cv(d.value, f.el), O = U_(d.value, f.el);
    return j - O - Math.abs(s.value) > 1;
  });
  return te(() => b(e.tag, { class: ee(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": R.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: ve(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [R.value && p("div", { key: "prev", class: ee(["v-slide-group__prev", { "v-slide-group__prev--disabled": !$.value }]), onMousedown: D, onClick: () => $.value && W("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ye, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), p("div", { key: "container", ref: f, class: ee(["v-slide-group__container", e.contentClass]), onScroll: C }, [p("div", { ref: S, class: "v-slide-group__content", onFocusin: x, onFocusout: A, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), R.value && p("div", { key: "next", class: ee(["v-slide-group__next", { "v-slide-group__next--disabled": !Y.value }]), onMousedown: D, onClick: () => Y.value && W("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ye, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: W, scrollOffset: s, focus: L, hasPrev: $, hasNext: Y };
} }), Rh = Symbol.for("vuetify:v-chip-group"), G_ = z({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...Ac({ scrollToActive: false }), ...pe(), ...pl({ selectedClass: "v-chip--selected" }), ...Me(), ...Ue(), ...bn({ variant: "tonal" }) }, "VChipGroup"), Y_ = J()({ name: "VChipGroup", props: G_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Rh);
  return mt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), te(() => {
    const c = Uo.filterProps(e);
    return b(Uo, K(c, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), K_ = z({ activeClass: String, appendAvatar: String, appendIcon: Ce, baseColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ce, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...pe(), ...gt(), ...xt(), ...Sl(), ...it(), ...ci(), ...Jn(), ...Me({ tag: "span" }), ...Ue(), ...bn({ variant: "tonal" }) }, "VChip"), fa = J()({ name: "VChip", directives: { vRipple: Ft }, props: K_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { borderClasses: i } = qt(e), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: c } = dt(e), { sizeClasses: u } = Ql(e), { themeClasses: d } = qe(e), f = we(e, "modelValue"), v = Ma(e, Rh, false), S = Ma(e, Pc, false), m = ui(e, n), y = B(() => e.link !== false && m.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), k = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(x) {
    x.preventDefault(), x.stopPropagation(), f.value = false, a("click:close", x);
  } }));
  re(f, (x) => {
    x ? (v == null ? void 0 : v.register(), S == null ? void 0 : S.register()) : (v == null ? void 0 : v.unregister(), S == null ? void 0 : S.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: w } = ba(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function g(x) {
    var _a3, _b2;
    a("click", x), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, x), v == null ? void 0 : v.toggle());
  }
  function C(x) {
    (x.key === "Enter" || x.key === " ") && (x.preventDefault(), g(x));
  }
  return () => {
    var _a3;
    const x = m.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), P = !!(A || l.append), E = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, M = !!(e.prependIcon || e.prependAvatar), T = !!(M || l.prepend);
    return f.value && at(b(x, K(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, c.value, u.value, w.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !y.value && C }), { default: () => {
      var _a4;
      return [ya(h.value, "v-chip"), D && b(Cc, { key: "filter" }, { default: () => [at(p("div", { class: "v-chip__filter" }, [l.filter ? b(Be, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : b(Ye, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Mn, v.isSelected.value]])] }), T && p("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? b(Be, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : p(ge, null, [e.prependIcon && b(Ye, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && b(hn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), p("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Ie(e.text)]), P && p("div", { key: "append", class: "v-chip__append" }, [l.append ? b(Be, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : p(ge, null, [e.appendIcon && b(Ye, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && b(hn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && p("button", K({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, k.value), [l.close ? b(Be, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : b(Ye, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ft, h.value && e.ripple, null]]);
  };
} }), q_ = ["dotted", "dashed", "solid", "double"], X_ = z({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => q_.includes(e) }, ...pe(), ...Ue() }, "VDivider"), vn = J()({ name: "VDivider", props: X_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { textColorClasses: o, textColorStyles: i } = Et(() => e.color), r = _(() => {
    const c = {};
    return e.length && (c[e.vertical ? "height" : "width"] = de(e.length)), e.thickness && (c[e.vertical ? "borderRightWidth" : "borderTopWidth"] = de(e.thickness)), c;
  }), s = B(() => {
    const c = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, u = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && c ? de(c) : void 0, marginInline: !e.vertical && c ? de(c) : void 0, transform: u ? `translate${e.vertical ? "X" : "Y"}(${de(u)})` : void 0 };
  });
  return te(() => {
    const c = p("hr", { class: ee([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: ve([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? p("div", { class: ee(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [c, p("div", { class: "v-divider__content", style: ve(s.value) }, [a.default()]), c]) : c;
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
    return a = Te(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
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
    o = Te(o);
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
}, Z_ = (e) => {
  const t = Tc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, J_ = (e) => {
  const t = Hh(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Q_ = { open: (e) => {
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
}, select: () => null }, eV = { open: zh.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Dc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Te(a), e && !l) {
      const i = Array.from(o.entries()).reduce((r, s) => {
        let [c, u] = s;
        return u === "on" && r.push(c), r;
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
    o = Te(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, tV = (e) => {
  const t = Dc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, nV = (e) => {
  const t = Wh(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Ec = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Te(a);
    const c = new Map(o), u = [a];
    for (; u.length; ) {
      const f = u.shift();
      s.has(f) || o.set(Te(f), l ? "on" : "off"), i.has(f) && u.push(...i.get(f));
    }
    let d = Te(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const S of i.get(d)) {
        const m = Te(S);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Te(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, S) => {
      let [m, y] = S;
      return y === "on" && v.push(m), v;
    }, []).length === 0 ? c : o;
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
}, aV = (e) => {
  const t = Ec(e);
  return { select: t.select, in: t.in, out: (a, l, o) => {
    const i = [];
    for (const [r, s] of a.entries()) if (s === "on") {
      if (o.has(r)) {
        const c = o.get(r);
        if (a.get(c) === "on") continue;
      }
      i.push(r);
    }
    return i;
  } };
}, lV = (e) => {
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
}, Yl = Symbol.for("vuetify:nested"), jh = { id: ie(), root: { itemsRegistration: q("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: q(/* @__PURE__ */ new Map()), parents: q(/* @__PURE__ */ new Map()), disabled: q(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: q(false), scrollToActive: q(false), selectable: q(false), opened: q(/* @__PURE__ */ new Set()), activated: q(/* @__PURE__ */ new Set()), selected: q(/* @__PURE__ */ new Map()), selectedValues: q([]), getPath: () => [] } }, oV = z({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), iV = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = ie(/* @__PURE__ */ new Map()), r = ie(/* @__PURE__ */ new Map()), s = ie(/* @__PURE__ */ new Set()), c = we(e, "opened", e.opened, (w) => new Set(Array.isArray(w) ? w.map((g) => Te(g)) : w), (w) => [...w.values()]), u = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Z_(e.mandatory);
      case "single-leaf":
        return J_(e.mandatory);
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
        return nV(e.mandatory);
      case "leaf":
        return tV(e.mandatory);
      case "independent":
        return Dc(e.mandatory);
      case "single-independent":
        return Wh(e.mandatory);
      case "trunk":
        return aV(e.mandatory);
      case "branch":
        return lV(e.mandatory);
      case "classic":
      default:
        return Ec(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return eV;
      case "single":
        return Q_;
      case "multiple":
      default:
        return zh;
    }
  }), v = we(e, "activated", e.activated, (w) => u.value.in(w, i.value, r.value), (w) => u.value.out(w, i.value, r.value)), S = we(e, "selected", e.selected, (w) => d.value.in(w, i.value, r.value, s.value), (w) => d.value.out(w, i.value, r.value));
  Nt(() => {
    o = true;
  });
  function m(w) {
    const g = [];
    let C = Te(w);
    for (; C !== void 0; ) g.unshift(C), C = r.value.get(C);
    return g;
  }
  const y = St("nested"), h = /* @__PURE__ */ new Set(), k = G0(() => {
    Ee(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  re(() => [n.value, nt(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const w = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), x = nt(a) ? (E) => Te(E.raw) : (E) => E.value, A = [...n.value];
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
  const V = { id: ie(), root: { opened: c, activatable: B(() => e.activatable), scrollToActive: B(() => nt(l)), selectable: B(() => e.selectable), activated: v, selected: S, selectedValues: _(() => {
    const w = [];
    for (const [g, C] of S.value.entries()) C === "on" && w.push(g);
    return w;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (w, g, C, x) => {
    if (h.has(w)) {
      m(w).map(String).join(" -> "), m(g).concat(w).map(String).join(" -> ");
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
    y.emit("click:open", { id: w, value: g, path: m(w), event: C });
    const x = f.value.open({ id: w, value: g, opened: new Set(c.value), children: i.value, parents: r.value, event: C });
    x && (c.value = x);
  }, openOnSelect: (w, g, C) => {
    const x = f.value.select({ id: w, value: g, selected: new Map(S.value), opened: new Set(c.value), children: i.value, parents: r.value, event: C });
    x && (c.value = x);
  }, select: (w, g, C) => {
    y.emit("click:select", { id: w, value: g, path: m(w), event: C });
    const x = d.value.select({ id: w, value: g, selected: new Map(S.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    x && (S.value = x), V.root.openOnSelect(w, g, C);
  }, activate: (w, g, C) => {
    if (!e.activatable) return V.root.select(w, true, C);
    y.emit("click:activate", { id: w, value: g, path: m(w), event: C });
    const x = u.value.activate({ id: w, value: g, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
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
  return rt(Yl, V), V.root;
}, Uh = (e, t, n) => {
  const a = We(Yl, jh), l = Symbol("nested item"), o = _(() => {
    const r = Te(nt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Jl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ee(() => {
      a.root.register(o.value, a.id.value, nt(t), n);
    });
  }), Nt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), re(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ee(() => {
      a.root.register(r, a.id.value, nt(t), n);
    }));
  }), re(() => nt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && rt(Yl, i), i;
}, rV = () => {
  const e = We(Yl, jh);
  rt(Yl, { ...e, isGroupActivator: true });
}, sV = Kt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return rV(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Gh = z({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ce, default: "$expand" }, rawId: [String, Number], prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...pe(), ...Me() }, "VListGroup"), Go = J()({ name: "VListGroup", props: Gh(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Uh(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Nh(), { isBooted: s } = bl(), c = We(Yl), u = B(() => {
    var _a3;
    return ((_a3 = c == null ? void 0 : c.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), S = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return te(() => b(e.tag, { class: ee(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: ve(e.style) }, { default: () => [n.activator && b(Be, { defaults: S.value }, { default: () => [b(sV, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), b(Yt, { transition: { component: Cr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [u.value ? at(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Mn, a.value]]) : a.value && p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), uV = z({ opacity: [Number, String], ...pe(), ...Me() }, "VListItemSubtitle"), Yh = J()({ name: "VListItemSubtitle", props: uV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(e.tag, { class: ee(["v-list-item-subtitle", e.class]), style: ve([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Kh = ga("v-list-item-title"), qh = z({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...pe(), ...gt(), ...kt(), ...xt(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VListItem"), xn = J()({ name: "VListItem", directives: { vRipple: Ft }, props: qh(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = q(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: c, select: u, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: S, root: m, parent: y, openOnSelect: h, scrollToActive: k, id: I } = Uh(r, () => e.disabled, false), V = Nh(), w = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? c.value : f.value));
  }), g = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), x = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return m.activatable.value ? c.value : m.selectable.value ? f.value : w.value;
  }), D = B(() => e.rounded || e.nav), M = B(() => e.color ?? e.activeColor), T = B(() => ({ color: w.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  re(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (xe) => {
    xe && L();
  }), re(c, (xe) => {
    var _a3;
    !xe || !k || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), re(A, (xe) => {
    var _a3;
    xe && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Jl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ee(() => L());
  });
  function L() {
    y.value != null && m.open(y.value, true), h(true);
  }
  const { themeClasses: W } = qe(e), { borderClasses: N } = qt(e), { colorClasses: Z, colorStyles: R, variantClasses: $ } = ba(T), { densityClasses: Y } = Lt(e), { dimensionStyles: j } = wt(e), { elevationClasses: O } = It(e), { roundedClasses: U } = dt(D), ae = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ye = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), ne = _(() => ({ isActive: w.value, select: u, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function fe(xe) {
    var _a3, _b2, _c2;
    l("click", xe), !["INPUT", "TEXTAREA"].includes((_a3 = xe.target) == null ? void 0 : _a3.tagName) && x.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, xe), !S && (m.activatable.value ? s(!c.value, xe) : (m.selectable.value || e.value != null && !g.value) && u(!f.value, xe)));
  }
  function Ae(xe) {
    const he = xe.target;
    ["INPUT", "TEXTAREA"].includes(he.tagName) || (xe.key === "Enter" || xe.key === " " && !(V == null ? void 0 : V.filterable)) && (xe.preventDefault(), xe.stopPropagation(), xe.target.dispatchEvent(new MouseEvent("click", xe)));
  }
  return te(() => {
    const xe = g.value ? "a" : e.tag, he = a.title || e.title != null, F = a.subtitle || e.subtitle != null, Q = !!(!!(e.appendAvatar || e.appendIcon) || a.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(oe), e.activeColor && Cg("active-color", ["color", "base-color"]), at(b(xe, K(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": w.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && w.value }, W.value, N.value, Z.value, Y.value, O.value, ae.value, U.value, $.value, e.class], style: [{ "--v-list-prepend-gap": de(e.prependGap) }, R.value, j.value, e.style], tabindex: e.tabindex ?? (x.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: fe, onKeydown: x.value && !g.value && Ae }), { default: () => {
      var _a3;
      return [ya(x.value || w.value, "v-list-item"), oe && p("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? b(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : p(ge, null, [e.prependAvatar && b(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [he && b(Kh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Ie(e.title)];
      } }), F && b(Yh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Ie(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, ne.value)]), Q && p("div", { key: "append", class: "v-list-item__append" }, [a.append ? b(Be, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, ne.value)];
      } }) : p(ge, null, [e.appendIcon && b(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ft, x.value && ye.value]]);
  }), { activate: s, isActivated: c, isGroupActivator: S, isSelected: f, list: V, select: u, root: m, id: I, link: o };
} }), cV = z({ color: String, inset: Boolean, sticky: Boolean, title: String, ...pe(), ...Me() }, "VListSubheader"), lo = J()({ name: "VListSubheader", props: cV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color);
  return te(() => {
    const o = !!(n.default || e.title);
    return b(e.tag, { class: ee(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: ve([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && p("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), dV = z({ items: Array, returnObject: Boolean }, "VListChildren"), Xh = J()({ name: "VListChildren", props: dV(), setup(e, t) {
  let { slots: n } = t;
  return Oh(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? b(vn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? b(lo, i, null);
      const c = { subtitle: n.subtitle ? (d) => {
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
      } : void 0 }, u = Go.filterProps(i);
      return o ? b(Go, K(u, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = K(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : b(xn, K(v, { index: l }), c);
      }, default: () => b(Xh, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : b(xn, K(i, { index: l, value: e.returnObject ? s : i.value }), c);
    }));
  };
} }), Zh = z({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), fV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function _n(e, t) {
  const n = pt(t, e.itemTitle, t), a = pt(t, e.itemValue, n), l = pt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Le(t, ["children"]) : t : void 0 : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  fV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Jh(e, l) : void 0, raw: t };
}
_n.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Jh(e, t) {
  const n = en(e, _n.neededProps), a = [];
  for (const l of t) a.push(_n(n, l));
  return a;
}
function Mc(e) {
  const t = _(() => Jh(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = ie(/* @__PURE__ */ new Map()), l = ie([]);
  ct(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), c = [];
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      if (Ea(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else c.push(d);
    }
    a.value = s, l.value = c;
  });
  function o(r) {
    const s = a.value, c = t.value, u = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, S = e.valueComparator || Dt, m = en(e, _n.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(_n(m, h));
        continue;
      }
      const k = s.get(h);
      if (v || !k) {
        for (const I of v ? c : u) if (S(h, I.value)) {
          y.push(I);
          continue e;
        }
        y.push(_n(m, h));
        continue;
      }
      y.push(...k);
    }
    return y;
  }
  function i(r) {
    return e.returnObject ? r.map((s) => {
      let { raw: c } = s;
      return c;
    }) : r.map((s) => {
      let { value: c } = s;
      return c;
    });
  }
  return { items: t, transformIn: o, transformOut: i };
}
const vV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function mV(e, t) {
  const n = Ea(t) ? t : pt(t, e.itemTitle), a = Ea(t) ? t : pt(t, e.itemValue, void 0), l = pt(t, e.itemChildren), o = e.itemProps === true ? Le(t, ["children"]) : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  vV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Qh(e, l) : void 0, raw: t };
}
function Qh(e, t) {
  const n = [];
  for (const a of t) n.push(mV(e, a));
  return n;
}
function ey(e) {
  return { items: _(() => Qh(e, e.items)) };
}
const ty = z({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ce, collapseIcon: Ce, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...oV({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...pe(), ...gt(), ...kt(), ...xt(), ...Zh(), ...it(), ...Me(), ...Ue(), ...bn({ variant: "text" }) }, "VList"), Kl = J()({ name: "VList", props: ty(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = ey(e), { themeClasses: i } = qe(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { borderClasses: c } = qt(e), { densityClasses: u } = Lt(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: v } = dt(e), { children: S, open: m, parents: y, select: h, getPath: k } = iV(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), w = B(() => e.baseColor), g = B(() => e.color), C = B(() => e.selectable || e.activatable), x = we(e, "navigationIndex", -1, (Y) => Y ?? -1), A = Mt();
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
  function L() {
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
    return b(e.tag, { ref: E, class: ee(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, c.value, u.value, f.value, I.value, v.value, e.class]), style: ve([{ "--v-list-indent": de(Y), "--v-list-group-prepend": Y ? "0px" : void 0, "--v-list-prepend-gap": de(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && x.value >= 0 ? `v-list-item-${A}-${x.value}` : void 0, "aria-multiselectable": j, onFocusin: D, onFocusout: M, onFocus: T, onBlur: L, onKeydown: Z, onMousedown: R }, { default: () => [b(Xh, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: $, children: S, parents: y, getPath: k, navigationIndex: x };
} }), gV = ga("v-list-img"), hV = z({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemAction"), Bc = J()({ name: "VListItemAction", props: hV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(e.tag, { class: ee(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ve(e.style) }, n)), {};
} }), yV = z({ start: Boolean, end: Boolean, ...pe(), ...Me() }, "VListItemMedia"), bV = J()({ name: "VListItemMedia", props: yV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(e.tag, { class: ee(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ve(e.style) }, n)), {};
} });
function ps(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function pV(e, t) {
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
const ny = { static: wV, connected: CV }, SV = z({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ny }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function kV(e, t) {
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
function wV() {
}
function xV(e, t) {
  const n = uc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function CV(e, t, n) {
  (Array.isArray(e.target.value) || U0(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = sc(() => {
    const h = js(t.location, e.isRtl.value), k = t.origin === "overlap" ? h : t.origin === "auto" ? ds(h) : js(t.origin, e.isRtl.value);
    return h.side === k.side && h.align === fs(k).align ? { preferredAnchor: Pf(h), preferredOrigin: Pf(k) } : { preferredAnchor: h, preferredOrigin: k };
  }), [i, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => _(() => {
    const k = parseFloat(t[h]);
    return isNaN(k) ? 1 / 0 : k;
  })), u = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new Dg(4), S = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((k) => {
      k !== f && v.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), v.isFull) {
      const k = v.values();
      if (Dt(k.at(-1), k.at(-3)) && !Dt(k.at(-1), k.at(-2))) return;
    }
    const h = y();
    h && v.push(h.flipped);
  });
  let m = new kn({ x: 0, y: 0, width: 0, height: 0 });
  re(e.target, (h, k) => {
    k && !Array.isArray(k) && S.unobserve(k), Array.isArray(h) ? Dt(h, k) || y() : h && S.observe(h);
  }, { immediate: true }), re(e.contentEl, (h, k) => {
    k && S.unobserve(k), h && S.observe(h);
  }, { immediate: true }), bt(() => {
    S.disconnect();
  });
  function y() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = $g(e.target.value));
    const h = xV(e.contentEl.value, e.isRtl.value), k = qi(e.contentEl.value), I = Number(t.viewportMargin);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = k.reduce((M, T) => {
      const L = f0(T);
      return M ? new kn({ x: Math.max(M.left, L.left), y: Math.max(M.top, L.top), width: Math.min(M.right, L.right) - Math.max(M.left, L.left), height: Math.min(M.bottom, L.bottom) - Math.max(M.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let w = { anchor: l.value, origin: o.value };
    function g(M) {
      const T = new kn(h), L = dv(M.anchor, m), W = dv(M.origin, T);
      let { x: N, y: Z } = pV(L, W);
      switch (M.anchor.side) {
        case "top":
          Z -= u.value[0];
          break;
        case "bottom":
          Z += u.value[0];
          break;
        case "left":
          N -= u.value[0];
          break;
        case "right":
          N += u.value[0];
          break;
      }
      switch (M.anchor.align) {
        case "top":
          Z -= u.value[1];
          break;
        case "bottom":
          Z += u.value[1];
          break;
        case "left":
          N -= u.value[1];
          break;
        case "right":
          N += u.value[1];
          break;
      }
      return T.x += N, T.y += Z, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, c.value), { overflows: Tf(T, V), x: N, y: Z };
    }
    let C = 0, x = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: T, overflows: L } = g(w);
      C += M, x += T, h.x += M, h.y += T;
      {
        const W = Af(w.anchor), N = L.x.before || L.x.after, Z = L.y.before || L.y.after;
        let R = false;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && N && !P.x || $ === "y" && Z && !P.y) {
            const Y = { anchor: { ...w.anchor }, origin: { ...w.origin } }, j = $ === "x" ? W === "y" ? fs : ds : W === "y" ? ds : fs;
            Y.anchor = j(Y.anchor), Y.origin = j(Y.origin);
            const { overflows: O } = g(Y);
            (O[$].before <= L[$].before && O[$].after <= L[$].after || O[$].before + O[$].after < (L[$].before + L[$].after) / 2) && (w = Y, R = P[$] = true);
          }
        }), R) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (x += L.y.before, h.y += L.y.before), L.y.after && (x -= L.y.after, h.y -= L.y.after);
      {
        const W = Tf(h, V);
        A.x = V.width - W.x.before - W.x.after, A.y = V.height - W.y.before - W.y.after, C += W.x.before, h.x += W.x.before, x += W.y.before, h.y += W.y.before;
      }
      break;
    }
    const D = Af(w.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`, transformOrigin: `${w.origin.side} ${w.origin.align}`, top: de(Ss(x)), left: e.isRtl.value ? void 0 : de(Ss(C)), right: e.isRtl.value ? de(Ss(-C)) : void 0, minWidth: de(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: de(fv(Ze(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: de(fv(Ze(A.y, r.value === 1 / 0 ? 0 : r.value, c.value))) }), { available: A, contentBox: h, flipped: P };
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
function _V(e) {
  !iu || er.length ? (er.push(e), ru()) : (iu = false, e(), ru());
}
let vv = -1;
function ru() {
  cancelAnimationFrame(vv), vv = requestAnimationFrame(() => {
    const e = er.shift();
    e && e(), er.length ? ru() : iu = true;
  });
}
const ay = { none: null, close: PV, block: AV, reposition: TV }, VV = z({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ay } }, "VOverlay-scroll-strategies");
function IV(e, t) {
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
function PV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  ly($c(e.target.value, e.contentEl.value), t);
}
function AV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = $c(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...qi(a, t.contained ? n : void 0), ...qi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => vc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", de(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", de(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", de(o)), r.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    l.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), u = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -u, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function TV(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    _V(() => {
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
const su = Symbol.for("vuetify:v-menu"), Fc = z({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Lc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, c = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((u) => {
      n = i0(c, () => {
        t == null ? void 0 : t(i), u(i);
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
const DV = z({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Fc() }, "VOverlay-activator");
function EV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = St("useActivator"), i = q();
  let r = false, s = false, c = true;
  const u = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), { runOpenDelay: f, runCloseDelay: v } = Lc(e, (x) => {
    x === (e.openOnHover && r || u.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== x && (c = true), n.value = x);
  }), S = q(), m = { onClick: (x) => {
    x.stopPropagation(), i.value = x.currentTarget || x.target, n.value || (S.value = [x.clientX, x.clientY]), n.value = !n.value;
  }, onMouseenter: (x) => {
    r = true, i.value = x.currentTarget || x.target, f();
  }, onMouseleave: (x) => {
    r = false, v();
  }, onFocus: (x) => {
    Wl(x.target, ":focus-visible") !== false && (s = true, x.stopPropagation(), i.value = x.currentTarget || x.target, f());
  }, onBlur: (x) => {
    s = false, x.stopPropagation(), v({ minDelay: 1 });
  } }, y = _(() => {
    const x = {};
    return d.value && (x.onClick = m.onClick), e.openOnHover && (x.onMouseenter = m.onMouseenter, x.onMouseleave = m.onMouseleave), u.value && (x.onFocus = m.onFocus, x.onBlur = m.onBlur), x;
  }), h = _(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      r = true, f();
    }, x.onMouseleave = () => {
      r = false, v();
    }), u.value && (x.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (s = true, f());
    }, x.onFocusout = () => {
      s = false, v({ minDelay: 1 });
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
      c && (r = true, c = false, f());
    }, x.onMouseleave = () => {
      r = false, v();
    }), x;
  });
  re(a, (x) => {
    var _a3;
    x && (e.openOnHover && !r && (!u.value || !s) || u.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
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
      MV(e, o, { activatorEl: i, activatorEvents: y });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), bt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: w, targetEl: g, targetRef: V, activatorEvents: y, contentEvents: h, scrimEvents: k };
}
function MV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  re(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const u = r(c);
      u && i(u);
    }
    s && Ee(() => o());
  }, { immediate: true }), re(() => e.activatorProps, () => {
    o();
  }), bt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && v0(s, K(l.value, c));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && m0(s, K(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = oy(s, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
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
  const n = Array.from(Bi.values()).filter((c) => {
    var _a3;
    let { isActive: u, contentEl: d } = c;
    return u.value && ((_a3 = d.value) == null ? void 0 : _a3.contains(t));
  }).map((c) => c.contentEl.value);
  let a, l = t.parentElement;
  for (; l; ) {
    if (n.includes(l)) {
      a = l;
      break;
    }
    l = l.parentElement;
  }
  if (!a) return;
  const o = Pa(a).filter((c) => c.tabIndex >= 0);
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
  async function c() {
    r = true, s = window.setTimeout(() => {
      r = false;
    }, 100);
  }
  async function u(v) {
    var _a3;
    const S = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", d), await Ee(), n.value && !r && S !== m && o.value && nt(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Pa(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const S = Pa(document.documentElement);
      if (v.shiftKey && v.target === S.at(0) || !v.shiftKey && v.target === S.at(-1)) {
        const m = Pa(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Je && (re(() => e.retainFocus, (v) => {
    v ? Bi.set(i, { isActive: n, contentEl: o }) : Bi.delete(i);
  }, { immediate: true }), re(f, (v) => {
    v ? (document.addEventListener("pointerdown", c), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("focusin", u), document.removeEventListener("keydown", d));
  }, { immediate: true }), mv++ < 1 && document.addEventListener("keydown", gv)), bt(() => {
    Bi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", c), document.removeEventListener("focusin", u), document.removeEventListener("keydown", d), --mv < 1 && document.removeEventListener("keydown", gv);
  });
}
function sy() {
  if (!Je) return ie(false);
  const { ssr: e } = ln();
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
function BV(e, t, n) {
  const a = St("useStack"), l = !n, o = We(hv, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  rt(hv, i);
  const r = ie(Number(nt(t)));
  $t(e, () => {
    var _a3;
    const u = (_a3 = uo.at(-1)) == null ? void 0 : _a3[1];
    r.value = u ? u + 10 : Number(nt(t)), l && uo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), bt(() => {
      if (l) {
        const d = Te(uo).findIndex((f) => f[0] === a.uid);
        uo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = ie(true);
  return l && ct(() => {
    var _a3;
    const u = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = u);
  }), { globalTop: al(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function $V(e) {
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
function LV(e, t, n) {
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
  const n = (l) => LV(l, e, t), a = (l) => {
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
function RV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return b(Da, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && p("div", K({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = z({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...DV(), ...pe(), ...kt(), ...Rc(), ...SV(), ...VV(), ...iy(), ...Ue(), ...ha() }, "VOverlay"), Un = J()({ name: "VOverlay", directives: { vClickOutside: uu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Le(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = St("VOverlay"), i = q(), r = q(), s = q(), c = we(e, "modelValue"), u = _({ get: () => c.value, set: (ne) => {
    ne && e.disabled || (c.value = ne);
  } }), { themeClasses: d } = qe(e), { rtlClasses: f, isRtl: v } = _t(), { hasContent: S, onAfterLeave: m } = Oc(e, u), y = Xe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: k, stackStyles: I } = BV(u, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: w, target: g, targetEl: C, targetRef: x, activatorEvents: A, contentEvents: P, scrimEvents: E } = EV(e, { isActive: u, isTop: k, contentEl: s }), { teleportTarget: D } = $V(() => {
    var _a3, _b2, _c2;
    const ne = e.attach || e.contained;
    if (ne) return ne;
    const fe = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: M } = wt(e), T = sy(), { scopeId: L } = kl();
  re(() => e.disabled, (ne) => {
    ne && (u.value = false);
  });
  const { contentStyles: W, updateLocation: N } = kV(e, { isRtl: v, contentEl: s, target: g, isActive: u });
  IV(e, { root: i, contentEl: s, targetEl: C, target: g, isActive: u, updateLocation: N });
  function Z(ne) {
    l("click:outside", ne), e.persistent ? U() : u.value = false;
  }
  function R(ne) {
    return u.value && k.value && (!e.scrim || ne.target === r.value || ne instanceof MouseEvent && ne.shadowTarget === r.value);
  }
  ry(e, { isActive: u, localTop: k, contentEl: s, activatorEl: V }), Je && re(u, (ne) => {
    ne ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
  }, { immediate: true }), Nt(() => {
    Je && window.removeEventListener("keydown", $);
  });
  function $(ne) {
    var _a3, _b2, _c2;
    ne.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", ne), e.persistent ? U() : (u.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function Y(ne) {
    ne.key === "Escape" && !h.value || l("keydown", ne);
  }
  const j = bh();
  $t(() => e.closeOnBack, () => {
    b_(j, (ne) => {
      h.value && u.value ? (ne(false), e.persistent ? U() : u.value = false) : ne();
    });
  });
  const O = q();
  re(() => u.value && (e.absolute || e.contained) && D.value == null, (ne) => {
    if (ne) {
      const fe = pr(i.value);
      fe && fe !== document.scrollingElement && (O.value = fe.scrollTop);
    }
  });
  function U() {
    e.noClickAnimation || s.value && aa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Fo });
  }
  function ae() {
    l("afterEnter");
  }
  function ye() {
    m(), l("afterLeave");
  }
  return te(() => {
    var _a3;
    return p(ge, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: u.value, targetRef: x, props: K({ ref: w }, A.value, e.activatorProps) }), T.value && S.value && b(yS, { disabled: !D.value, to: D.value }, { default: () => [p("div", K({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": u.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: de(O.value) }, e.style], ref: i, onKeydown: Y }, L, a), [b(RV, K({ color: y, modelValue: u.value && !!e.scrim, ref: r }, E.value), null), b(Yt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: ae, onAfterLeave: ye }, { default: () => {
      var _a4;
      return [at(p("div", K({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, W.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: u })]), [[Mn, u.value], [uu, { handler: Z, closeConditional: R, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: U, contentEl: s, rootEl: i, globalTop: h, localTop: k, updateLocation: N };
} }), dy = z({ id: String, submenu: Boolean, ...Le(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: xr } }), ["absolute"]) }, "VMenu"), ql = J()({ name: "VMenu", props: dy(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), { isRtl: o } = _t(), i = Mt(), r = B(() => e.id || `v-menu-${i}`), s = q(), c = We(su, null), u = ie(/* @__PURE__ */ new Set());
  rt(su, { register() {
    u.value.add(i);
  }, unregister() {
    u.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !u.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !r0(m, s.value.contentEl)) && (a.value = false, c == null ? void 0 : c.closeParents());
    }, 40);
  } }), Nt(() => c == null ? void 0 : c.unregister()), qu(() => a.value = false), re(a, (m) => {
    m ? c == null ? void 0 : c.register() : c == null ? void 0 : c.unregister();
  }, { immediate: true });
  function d(m) {
    c == null ? void 0 : c.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !Mg(Pa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const y = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    y && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Qa(y, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Qa(y, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Qa(y, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const S = _(() => K({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return te(() => {
    const m = Un.filterProps(e);
    return b(Un, K({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (y) => a.value = y, absolute: true, activatorProps: S.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var y = arguments.length, h = new Array(y), k = 0; k < y; k++) h[k] = arguments[k];
      return b(Be, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Pt({ id: r, \u03A8openChildren: u }, s);
} }), Nc = z({ color: String, ...Ht(), ...pe(), ...kt(), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VSheet"), Fa = J()({ name: "VSheet", props: Nc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { borderClasses: i } = qt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: c } = Oa(e), { positionClasses: u } = to(e), { roundedClasses: d } = dt(e);
  return te(() => b(e.tag, { class: ee(["v-sheet", a.value, l.value, i.value, s.value, u.value, d.value, e.class]), style: ve([o.value, r.value, c.value, e.style]) }, n)), {};
} }), OV = z({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...pe(), ...ha({ transition: { component: xc } }) }, "VCounter"), Ar = J()({ name: "VCounter", functional: true, props: OV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => b(Yt, { transition: e.transition }, { default: () => [at(p("div", { class: ee(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ve(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Mn, e.active]])] })), {};
} }), NV = z({ floating: Boolean, ...pe() }, "VFieldLabel"), mo = J()({ name: "VFieldLabel", props: NV(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(no, { class: ee(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ve(e.style) }, n)), {};
} }), HV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = z({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => HV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...pe(), ...Vr(), ...it(), ...Ue() }, "VField"), La = J()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = qe(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: c, blur: u } = pa(e), { InputIcon: d } = di(e), { roundedClasses: f } = dt(e), { rtlClasses: v } = _t(), S = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), y = B(() => !e.singleLine && m.value), h = Mt(), k = _(() => e.id || `input-${h}`), I = B(() => e.details ? `${k.value}-messages` : void 0), V = q(), w = q(), g = q(), C = _(() => ["plain", "underlined"].includes(e.variant)), x = _(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), A = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? x.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = Xe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Et(x);
  re(S, (Z) => {
    if (y.value && !Wn()) {
      const R = V.value.$el, $ = w.value.$el;
      requestAnimationFrame(() => {
        const Y = uc(R), j = $.getBoundingClientRect(), O = j.x - Y.x, U = j.y - Y.y - (Y.height / 2 - j.height / 2), ae = j.width / 0.75, ye = Math.abs(ae - Y.width) > 1 ? { maxWidth: de(ae) } : void 0, ne = getComputedStyle(R), fe = getComputedStyle($), Ae = parseFloat(ne.transitionDuration) * 1e3 || 150, xe = parseFloat(fe.getPropertyValue("--v-field-label-scale")), he = fe.getPropertyValue("color");
        R.style.visibility = "visible", $.style.visibility = "hidden", aa(R, { transform: `translate(${O}px, ${U}px) scale(${xe})`, color: he, ...ye }, { duration: Ae, easing: Fo, direction: Z ? "normal" : "reverse" }).finished.then(() => {
          R.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = _(() => ({ isActive: S, isFocused: s, controlRef: g, iconColor: A, blur: u, focus: c })), L = B(() => {
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
    return p("div", K({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": Y, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": R, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !j(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: N }, n), [p("div", { class: "v-field__overlay" }, null), b(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), R && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && b(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && b(mo, K({ key: "floating-label", ref: w, class: [D.value], floating: true }, L.value, { style: M.value }), { default: () => [j()] }), m.value && b(mo, K({ key: "label", ref: V, id: e.labelId }, W.value), { default: () => [j()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: k.value, class: "v-field__input", "aria-describedby": I.value }, focus: c, blur: u })) ?? p("div", { id: k.value, class: "v-field__input", "aria-describedby": I.value }, null)]), $ && b(Cc, { key: "clear" }, { default: () => [at(p("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [b(Be, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: c, onBlur: u, onClick: e["onClick:clear"], tabindex: -1 } }) : b(d, { name: "clear", onFocus: c, onBlur: u, tabindex: -1 }, null)] })]), [[Mn, e.dirty]])] }), Y && p("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && b(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), p("div", { class: ee(["v-field__outline", D.value]), style: ve(M.value) }, [Z && p(ge, null, [p("div", { class: "v-field__outline__start" }, null), y.value && p("div", { class: "v-field__outline__notch" }, [b(mo, K({ ref: w, floating: true }, L.value), { default: () => [j()] })]), p("div", { class: "v-field__outline__end" }, null)]), C.value && y.value && b(mo, K({ ref: w, floating: true }, L.value), { default: () => [j()] })])]);
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
const zV = ["color", "file", "time", "date", "datetime-local", "week", "month"], gi = z({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...fy(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextField"), Gn = J()({ name: "VTextField", directives: { vIntersect: Dn }, inheritAttrs: false, props: gi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: c } = vy(e), u = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = q(), S = q(), m = q(), y = Hc(e), h = _(() => zV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function k() {
    y.isSuppressing.value && y.update(), i.value || r(), Ee(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function I(C) {
    a("mousedown:control", C), C.target !== m.value && (k(), C.preventDefault());
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
    const C = !!(l.counter || e.counter !== false && e.counter != null), x = !!(C || l.details), [A, P] = qn(n), { modelValue: E, ...D } = Ot.filterProps(e), M = La.filterProps(e);
    return b(Ot, K({ ref: v, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: L, isDisabled: W, isDirty: N, isReadonly: Z, isValid: R, hasDetails: $, reset: Y } = T;
      return b(La, K({ ref: S, onMousedown: I, onClick: V, "onClick:clear": (j) => w(j, Y), role: e.role }, Le(M, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || N.value, dirty: N.value || e.dirty, disabled: W.value, focused: i.value, details: $.value, error: R.value === false }), { ...l, default: (j) => {
        let { props: { class: O, ...U }, controlRef: ae } = j;
        const ye = p("input", K({ ref: (ne) => m.value = ae.value = ne, value: o.value, onInput: g, autofocus: e.autofocus, readonly: Z.value, disabled: W.value, name: y.fieldName.value, autocomplete: y.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, U, P), null);
        return p(ge, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), at(l.default ? p("div", { class: ee(O), "data-no-activator": "" }, [l.default({ id: L }), ye]) : ca(ye, { class: O }), [[Dn, c, null, { once: true }]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (T) => {
      var _a3;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && p(ge, null, [p("span", null, null), b(Ar, { active: e.persistentCounter || i.value, value: u.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, v, S, m);
} }), WV = z({ renderless: Boolean, ...pe() }, "VVirtualScrollItem"), my = J()({ name: "VVirtualScrollItem", inheritAttrs: false, props: WV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = wn(void 0, "border");
  re(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), te(() => {
    var _a3, _b2;
    return e.renderless ? p(ge, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : p("div", K({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), jV = -1, UV = 1, ks = 100, gy = z({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function hy(e, t) {
  const n = ln(), a = ie(0);
  ct(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ie(0), o = ie(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = ie(0), r = ie(0), s = q(), c = q();
  let u = 0;
  const { resizeRef: d, contentRect: f } = wn();
  ct(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), S = _(() => !!(s.value && c.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length });
  const h = ie(0);
  let k = -1;
  function I($) {
    return m[$] || a.value;
  }
  const V = Ag(() => {
    const $ = performance.now();
    y[0] = 0;
    const Y = t.value.length;
    for (let j = 1; j <= Y; j++) y[j] = (y[j - 1] || 0) + I(j - 1);
    h.value = Math.max(h.value, performance.now() - $);
  }, h), w = re(S, ($) => {
    $ && (w(), u = c.value.offsetTop, V.immediate(), W(), ~k && Ee(() => {
      Je && window.requestAnimationFrame(() => {
        Z(k), k = -1;
      });
    }));
  });
  bt(() => {
    V.clear();
  });
  function g($, Y) {
    const j = m[$], O = a.value;
    a.value = O ? Math.min(a.value, Y) : Y, (j !== Y || O !== a.value) && (m[$] = Y, V());
  }
  function C($) {
    $ = Ze($, 0, t.value.length);
    const Y = Math.floor($), j = $ % 1, O = Y + 1, U = y[Y] || 0, ae = y[O] || U;
    return U + (ae - U) * j;
  }
  function x($) {
    return GV(y, $);
  }
  let A = 0, P = 0, E = 0;
  re(v, ($, Y) => {
    W(), $ < Y && requestAnimationFrame(() => {
      P = 0, W();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !c.value) return;
    const $ = s.value.scrollTop, Y = performance.now();
    Y - E > 500 ? (P = Math.sign($ - A), u = c.value.offsetTop) : P = $ - A, A = $, E = Y, window.clearTimeout(D), D = window.setTimeout(T, 500), W();
  }
  function T() {
    !s.value || !c.value || (P = 0, E = 0, window.clearTimeout(D), W());
  }
  let L = -1;
  function W() {
    cancelAnimationFrame(L), L = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !v.value || !a.value) return;
    const $ = A - u, Y = Math.sign(P), j = Math.max(0, $ - ks), O = Ze(x(j), 0, t.value.length), U = $ + v.value + ks, ae = Ze(x(U) + 1, O + 1, t.value.length);
    if ((Y !== jV || O < l.value) && (Y !== UV || ae > o.value)) {
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
    m = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length }), V.immediate(), W();
  }, { deep: 1 }), { calculateVisibleItems: W, containerRef: s, markerRef: c, computedItems: R, paddingTop: i, paddingBottom: r, scrollToIndex: Z, handleScroll: M, handleScrollend: T, handleItemResize: g };
}
function GV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const YV = z({ items: { type: Array, default: () => [] }, renderless: Boolean, ...gy(), ...pe(), ...kt() }, "VVirtualScroll"), Tr = J()({ name: "VVirtualScroll", props: YV(), setup(e, t) {
  let { slots: n } = t;
  const a = St("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: c, handleItemResize: u, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: S } = hy(e, B(() => e.items));
  return $t(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", c)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", c));
    }
    Ct(() => {
      i.value = pr(a.vnode.el, true), m(true);
    }), bt(m);
  }), te(() => {
    const m = S.value.map((y) => b(my, { key: y.key, renderless: e.renderless, "onUpdate:height": (h) => u(y.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: y.raw, index: y.index, ...h });
    } }));
    return e.renderless ? p(ge, null, [p("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: de(f.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: de(v.value) } }, null)]) : p("div", { ref: i, class: ee(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: c, style: ve([l.value, e.style]) }, [p("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: de(f.value), paddingBottom: de(v.value) } }, [m])]);
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
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const u = s.getBoundingClientRect().top;
      for (const d of c) if (d.getBoundingClientRect().top >= u) {
        d.focus();
        break;
      }
    } else {
      const u = s.getBoundingClientRect().bottom;
      for (const d of [...c].reverse()) if (d.getBoundingClientRect().bottom <= u) {
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
    const s = r.target, c = r.shiftKey ? "backward" : "forward", u = t.map(l), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(u, d, c, s);
    if (f === null) {
      const v = t[d], S = u[d];
      (v.type === "list" || (c === "forward" ? S.at(-1) === r.target : S.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && nt(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const S = c === "forward";
        u[f].at(S ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, c, u) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(c === "forward" ? f.at(-1) === u : f.at(0) === u)) return null;
    const v = c === "forward" ? 1 : -1;
    for (let S = s + v; S >= 0 && S < t.length; S += v) {
      const m = t[S];
      if (r[S].length > 0 || m.type === "list" && nt(m.displayItemsCount) > 0) return S;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const KV = (e, t, n) => {
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
function qV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? KV, o = (n == null ? void 0 : n.filterKeys) ? ot(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [c, u = c] = ot(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let S = false;
      if (typeof c == "object") {
        if (c.type === "divider" || c.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || c.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: c.type });
          continue;
        }
        const h = o || Object.keys(u);
        S = h.length === i;
        for (const k of h) {
          const I = pt(u, k), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[k];
          if (v = V ? V(I, t, c) : l(I, t, c), v !== -1 && v !== false) V ? d[k] = ws(v, t) : f[k] = ws(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(c, t, c), v !== -1 && v !== false && (f.title = ws(v, t));
      const m = Object.keys(f).length, y = Object.keys(d).length;
      if (!m && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== i || !m && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function xl(e, t, n, a) {
  const l = ie([]), o = ie(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Ne(t).map((s) => [s, a.transform(s)]) : Ne(t));
  ct(() => {
    const s = typeof n == "function" ? n() : Ne(n), c = typeof s != "string" && typeof s != "number" ? "" : String(s), u = qV(i.value, c, { customKeyFilter: { ...e.customKeyFilter, ...Ne(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ne(t), f = [], v = /* @__PURE__ */ new Map();
    u.forEach((S) => {
      let { index: m, matches: y } = S;
      const h = d[m];
      f.push(h), v.set(h.value, y);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function jc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [p("span", { class: ee(`${e}__unmask`) }, [t.slice(o, a[0])]), p("span", { class: ee(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(p("span", { class: ee(`${e}__unmask`) }, [t.slice(a[1])])), p(ge, null, [i]);
  });
}
const XV = z({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Uc(e, t) {
  const n = Mt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => nt(t)), ariaControls: B(() => a.value) };
}
const Gc = z({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...XV(), ...Zh({ itemChildren: false }) }, "Select"), ZV = z({ search: String, ...wl({ filterKeys: ["title"] }), ...Gc(), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ha({ transition: { component: xr } }) }, "VSelect"), Yc = J()({ name: "VSelect", props: ZV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = q(), o = q(), i = q(), r = q(), s = q(), { items: c, transformIn: u, transformOut: d } = Mc(e), f = we(e, "search", ""), { filteredItems: v, getMatches: S } = xl(e, c, () => f.value), m = we(e, "modelValue", [], (he) => u(he === null ? [null] : ot(he)), (he) => {
    const F = d(he);
    return e.multiple ? F : F[0] ?? null;
  }), y = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = ao(e), k = Hc(e), I = _(() => m.value.map((he) => he.value)), V = ie(false), w = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = di(e);
  let C = "", x = 0, A;
  const P = _(() => {
    const he = f.value ? v.value : c.value;
    return e.hideSelected ? he.filter((F) => !m.value.some((H) => (e.valueComparator || Dt)(H, F))) : he;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = we(e, "menu"), M = _({ get: () => D.value, set: (he) => {
    var _a3;
    D.value && !he && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || he && E.value || (D.value = he);
  } }), { menuId: T, ariaExpanded: L, ariaControls: W } = Uc(e, M), N = _(() => {
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
      he.preventDefault(), m.value = [], Y();
      return;
    }
    he.key === "Home" ? (_a3 = Z.value) == null ? void 0 : _a3.focus("first") : he.key === "End" && ((_b2 = Z.value) == null ? void 0 : _b2.focus("last"));
    const F = 1e3;
    if (!jl(he)) return;
    const H = performance.now();
    H - A > F && (C = "", x = 0), C += he.key.toLowerCase(), A = H;
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
    x = ce, (_c2 = Z.value) == null ? void 0 : _c2.focus(ce), e.multiple || (m.value = [be]);
  }
  function ae(he) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!he.props.disabled) if (e.multiple) {
      const H = m.value.findIndex((ue) => (e.valueComparator || Dt)(ue.value, he.value)), Q = F ?? !~H;
      if (~H) {
        const ue = Q ? [...m.value, he] : [...m.value];
        ue.splice(H, 1), m.value = ue;
      } else Q && (m.value = [...m.value, he]);
    } else {
      const H = F !== false;
      m.value = H ? [he] : [], Ee(() => {
        M.value = false;
      });
    }
  }
  function ye(he) {
    var _a3;
    const F = he.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(F)) || (M.value = false);
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
    if (he == null) m.value = [];
    else if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const F = c.value.find((H) => H.title === he);
      F && ae(F);
    } else l.value && (l.value.value = "");
  }
  return re(M, () => {
    if (!e.hideSelected && M.value && m.value.length) {
      const he = P.value.findIndex((F) => m.value.some((H) => (e.valueComparator || Dt)(H.value, F.value)));
      Je && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        he >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(he));
      });
    }
  }), re(c, (he, F) => {
    M.value || V.value && e.hideNoData && !F.length && he.length && (M.value = true);
  }), te(() => {
    const he = !!(e.chips || n.chip), F = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), H = m.value.length > 0, Q = Gn.filterProps(e), ue = H || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: v.value };
    return b(Gn, K({ ref: l }, Q, { modelValue: m.value.map((se) => se.props.title).join(", "), name: void 0, "onUpdate:modelValue": xe, focused: V.value, "onUpdate:focused": (se) => V.value = se, validationValue: m.externalValue, counterValue: y.value, dirty: H, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: ue, "onClick:clear": Y, "onMousedown:control": j, onBlur: ye, onKeydown: U, "aria-expanded": L.value, "aria-controls": W.value }), { ...n, default: (se) => {
      let { id: be } = se;
      return p(ge, null, [p("select", { hidden: true, multiple: e.multiple, name: k.fieldName.value }, [c.value.map((ce) => p("option", { key: ce.value, value: ce.value, selected: I.value.includes(ce.value) }, null))]), b(ql, K({ id: T.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (ce) => M.value = ce, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: ne, onAfterLeave: fe }, N.value), { default: () => [b(Fa, { onFocusin: Ae, onKeydown: O }, { default: () => [n["menu-header"] && p("header", { ref: i }, [n["menu-header"](oe)]), F && b(Kl, K({ key: "select-list", ref: Z, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${be.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, R, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(xn, { key: "no-data", title: a(e.noDataText) }, null)), b(Tr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (ce) => {
          var _a4, _b3, _c3;
          let { item: G, index: le, itemRef: _e } = ce;
          const X = u0(G.props), me = K(G.props, { ref: _e, key: G.value, onClick: () => ae(G, null), "aria-posinset": le + 1, "aria-setsize": P.value.length });
          return G.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: G.raw, index: le })) ?? b(vn, K(G.props, { key: `divider-${le}` }), null) : G.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: G.raw, index: le })) ?? b(lo, K(G.props, { key: `subheader-${le}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: G, index: le, props: me })) ?? b(xn, K(me, { role: "option" }), { prepend: (Se) => {
            let { isSelected: ke } = Se;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(En, { key: G.value, modelValue: ke, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ve) => Ve.preventDefault() }, null) : void 0, X.prependAvatar && b(hn, { image: X.prependAvatar }, null), X.prependIcon && b(Ye, { icon: X.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? jc("v-select", G.title, (_a5 = S(G)) == null ? void 0 : _a5.title) : G.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), m.value.map((ce, G) => {
        function le(Se) {
          Se.stopPropagation(), Se.preventDefault(), ae(ce, false);
        }
        const _e = K(fa.filterProps(ce.props), { "onClick:close": le, onKeydown(Se) {
          Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), le(Se));
        }, onMousedown(Se) {
          Se.preventDefault(), Se.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), X = he ? !!n.chip : !!n.selection, me = X ? br(he ? n.chip({ item: ce, index: G, props: _e }) : n.selection({ item: ce, index: G })) : void 0;
        if (!(X && !me)) return p("div", { key: ce.value, class: "v-select__selection" }, [he ? n.chip ? b(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: ce.title } } }, { default: () => [me] }) : b(fa, K({ key: "chip", closable: w.value, size: "small", text: ce.title, disabled: ce.props.disabled }, _e), null) : me ?? p("span", { class: "v-select__selection-text" }, [ce.title, e.multiple && G < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var se = arguments.length, be = new Array(se), ce = 0; ce < se; ce++) be[ce] = arguments[ce];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...be), e.menuIcon ? b(Ye, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && b(g, { key: "append-icon", name: "appendInner", color: be[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: V, menu: M, search: f, filteredItems: v, select: ae }, l);
} }), JV = z({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...Gc(), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), QV = J()({ name: "VAutocomplete", props: JV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = q(), o = ie(false), i = ie(true), r = ie(false), s = q(), c = q(), u = ie(-1), d = ie(null), { items: f, transformIn: v, transformOut: S } = Mc(e), { textColorClasses: m, textColorStyles: y } = Et(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), k = we(e, "search", ""), I = we(e, "modelValue", [], (G) => v(G === null ? [null] : ot(G)), (G) => {
    const le = S(G);
    return e.multiple ? le : le[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), w = ao(e), { filteredItems: g, getMatches: C } = xl(e, f, () => d.value ?? (i.value ? "" : k.value)), x = _(() => e.hideSelected && d.value === null ? g.value.filter((G) => !I.value.some((le) => le.value === G.value)) : g.value), A = B(() => e.closableChips && !w.isReadonly.value && !w.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), D = _(() => I.value.map((G) => G.props.value)), M = _(() => x.value.find((G) => G.type === "item" && !G.props.disabled)), T = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && k.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && x.value.length > 0 && !i.value && !r.value;
  }), L = _(() => e.hideNoData && !x.value.length || w.isReadonly.value || w.isDisabled.value), W = we(e, "menu"), N = _({ get: () => W.value, set: (G) => {
    var _a3;
    W.value && !G && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || G && L.value || (W.value = G);
  } }), { menuId: Z, ariaExpanded: R, ariaControls: $ } = Uc(e, N), Y = q(), j = q(), O = q(), U = zc(Y, l), { onTabKeydown: ae } = Wc({ groups: [{ type: "element", contentRef: j }, { type: "list", contentRef: Y, displayItemsCount: () => x.value.length }, { type: "element", contentRef: O }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function ye(G) {
    e.openOnClear && (N.value = true), k.value = "";
  }
  function ne() {
    L.value || (N.value = true);
  }
  function fe(G) {
    L.value || (o.value && (G.preventDefault(), G.stopPropagation()), N.value = !N.value);
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
      if (~u.value) {
        G.preventDefault();
        const X = u.value;
        ce(I.value[u.value], false), u.value = X >= _e - 1 ? _e - 2 : X;
      } else G.key === "Backspace" && !k.value && (u.value = _e - 1);
      return;
    }
    if (e.multiple) if (G.key === "ArrowLeft") {
      if (u.value < 0 && le && le > 0) return;
      const X = u.value > -1 ? u.value - 1 : _e - 1;
      if (I.value[X]) u.value = X;
      else {
        const me = ((_c2 = k.value) == null ? void 0 : _c2.length) ?? null;
        u.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(me, me);
      }
    } else if (G.key === "ArrowRight") {
      if (u.value < 0) return;
      const X = u.value + 1;
      I.value[X] ? u.value = X : (u.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~u.value && jl(G) && (u.value = -1);
  }
  function he(G) {
    if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const le = f.value.find((_e) => _e.title === G.target.value);
      le && ce(le);
    }
  }
  function F() {
    var _a3;
    e.eager && ((_a3 = c.value) == null ? void 0 : _a3.calculateVisibleItems());
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
    G !== le && (G ? (be.value = true, k.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ee(() => be.value = false)) : (!e.multiple && k.value == null && (I.value = []), N.value = false, !i.value && k.value && (d.value = k.value), k.value = "", u.value = -1));
  }), re(k, (G) => {
    !o.value || be.value || (G && (N.value = true), i.value = !G);
  }), re(N, (G) => {
    if (!e.hideSelected && G && I.value.length && i.value) {
      const le = x.value.findIndex((_e) => I.value.some((X) => _e.value === X.value));
      Je && window.requestAnimationFrame(() => {
        var _a3;
        le >= 0 && ((_a3 = c.value) == null ? void 0 : _a3.scrollToIndex(le));
      });
    }
    G && (d.value = null);
  }), re(f, (G, le) => {
    N.value || o.value && !le.length && G.length && (N.value = true);
  }), te(() => {
    const G = !!(!e.hideNoData || x.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), le = I.value.length > 0, _e = Gn.filterProps(e), X = { search: k, filteredItems: g.value };
    return b(Gn, K({ ref: l }, _e, { modelValue: k.value, "onUpdate:modelValue": [(me) => k.value = me, oe], focused: o.value, "onUpdate:focused": (me) => o.value = me, validationValue: I.externalValue, counterValue: V.value, dirty: le, onChange: he, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": u.value > -1 }, e.class], style: e.style, readonly: w.isReadonly.value, placeholder: le ? void 0 : e.placeholder, "onClick:clear": ye, "onMousedown:control": ne, onKeydown: xe, onBlur: se, "aria-expanded": R.value, "aria-controls": $.value }), { ...n, default: (me) => {
      let { id: Se } = me;
      return p(ge, null, [b(ql, K({ id: Z.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (ke) => N.value = ke, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: F, onAfterLeave: H }, e.menuProps), { default: () => [b(Fa, { onFocusin: Q, onKeydown: Ae }, { default: () => [n["menu-header"] && p("header", { ref: j }, [n["menu-header"](X)]), G && b(Kl, K({ key: "autocomplete-list", ref: Y, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (ke) => ke.preventDefault(), onFocusout: ue, tabindex: "-1", selectable: !!x.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, U, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !x.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(xn, { key: "no-data", title: a(e.noDataText) }, null)), b(Tr, { ref: c, renderless: true, items: x.value, itemKey: "value" }, { default: (ke) => {
          var _a4, _b3, _c3;
          let { item: Ve, index: Fe, itemRef: Ge } = ke;
          const Oe = K(Ve.props, { ref: Ge, key: Ve.value, active: T.value && Ve === M.value ? true : void 0, onClick: () => ce(Ve, null), "aria-posinset": Fe + 1, "aria-setsize": x.value.length });
          return Ve.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ve.raw, index: Fe })) ?? b(vn, K(Ve.props, { key: `divider-${Fe}` }), null) : Ve.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ve.raw, index: Fe })) ?? b(lo, K(Ve.props, { key: `subheader-${Fe}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ve, index: Fe, props: Oe })) ?? b(xn, K(Oe, { role: "option" }), { prepend: (ft) => {
            let { isSelected: lt } = ft;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(En, { key: Ve.value, modelValue: lt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (on) => on.preventDefault() }, null) : void 0, Ve.props.prependAvatar && b(hn, { image: Ve.props.prependAvatar }, null), Ve.props.prependIcon && b(Ye, { icon: Ve.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ve.title : jc("v-autocomplete", Ve.title, (_a5 = C(Ve)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: O }, [n["menu-footer"](X)])] })] }), I.value.map((ke, Ve) => {
        function Fe(lt) {
          lt.stopPropagation(), lt.preventDefault(), ce(ke, false);
        }
        const Ge = K(fa.filterProps(ke.props), { "onClick:close": Fe, onKeydown(lt) {
          lt.key !== "Enter" && lt.key !== " " || (lt.preventDefault(), lt.stopPropagation(), Fe(lt));
        }, onMousedown(lt) {
          lt.preventDefault(), lt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Oe = P.value ? !!n.chip : !!n.selection, ft = Oe ? br(P.value ? n.chip({ item: ke, index: Ve, props: Ge }) : n.selection({ item: ke, index: Ve })) : void 0;
        if (!(Oe && !ft)) return p("div", { key: ke.value, class: ee(["v-autocomplete__selection", Ve === u.value && ["v-autocomplete__selection--selected", m.value]]), style: ve(Ve === u.value ? y.value : {}) }, [P.value ? n.chip ? b(Be, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: ke.title } } }, { default: () => [ft] }) : b(fa, K({ key: "chip", closable: A.value, size: "small", text: ke.title, disabled: ke.props.disabled }, Ge), null) : ft ?? p("span", { class: "v-autocomplete__selection-text" }, [ke.title, e.multiple && Ve < I.value.length - 1 && p("span", { class: "v-autocomplete__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var me = arguments.length, Se = new Array(me), ke = 0; ke < me; ke++) Se[ke] = arguments[ke];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? b(Ye, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(h, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: N, search: k, filteredItems: g, select: ce }, l);
} }), eI = z({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ce, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...pe(), ...Zn({ location: "top end" }), ...it(), ...Me(), ...Ue(), ...ha({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), yy = J()({ name: "VBadge", inheritAttrs: false, props: eI(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Xe(() => e.color), { roundedClasses: l } = dt(e), { t: o } = Qe(), { textColorClasses: i, textColorStyles: r } = Et(() => e.textColor), { themeClasses: s } = wr(), { locationStyles: c } = Oa(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: u } = wt(e);
  return te(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, S] = Ws(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return b(e.tag, K({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [p("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), b(Yt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [at(p("span", K({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, u.value, e.inline ? {} : c.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? b(Ye, { icon: e.icon }, null) : f]), [[Mn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), tI = z({ color: String, density: String, ...pe() }, "VBannerActions"), by = J()({ name: "VBannerActions", props: tI(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), te(() => {
    var _a3;
    return p("div", { class: ee(["v-banner-actions", e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), py = ga("v-banner-text"), nI = z({ avatar: String, bgColor: String, color: String, icon: Ce, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Ht(), ...pe(), ...gt(), ...kt(), ...gl({ mobile: null }), ...xt(), ...Zn(), ...eo(), ...it(), ...Me(), ...Ue() }, "VBanner"), aI = J()({ name: "VBanner", props: nI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { borderClasses: o } = qt(e), { densityClasses: i } = Lt(e), { displayClasses: r, mobile: s } = ln(e), { dimensionStyles: c } = wt(e), { elevationClasses: u } = It(e), { locationStyles: d } = Oa(e), { positionClasses: f } = to(e), { roundedClasses: v } = dt(e), { themeClasses: S } = qe(e), m = B(() => e.color), y = B(() => e.density);
  mt({ VBannerActions: { color: m, density: y } }), te(() => {
    const h = !!(e.text || n.text), k = !!(e.avatar || e.icon), I = !!(k || n.prepend);
    return b(e.tag, { class: ee(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, u.value, f.value, v.value, e.class]), style: ve([l.value, c.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && p("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? b(Be, { key: "prepend-defaults", disabled: !k, defaults: { VAvatar: { color: m.value, density: y.value, icon: e.icon, image: e.avatar } } }, n.prepend) : b(hn, { key: "prepend-avatar", color: m.value, density: y.value, icon: e.icon, image: e.avatar }, null)]), p("div", { class: "v-banner__content" }, [h && b(py, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(by, { key: "actions" }, n.actions)];
    } });
  });
} }), lI = z({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Ht(), ...pe(), ...gt(), ...xt(), ...it(), ...hl({ name: "bottom-navigation" }), ...Me({ tag: "header" }), ...pl({ selectedClass: "v-btn--selected" }), ...Ue() }, "VBottomNavigation"), oI = J()({ name: "VBottomNavigation", props: lI(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = wr(), { borderClasses: l } = qt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: c } = dt(e), { ssrBootStyles: u } = bl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = we(e, "active", e.active), { layoutItemStyles: v } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Na(e, Vc), mt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), te(() => b(e.tag, { class: ee(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, c.value, e.class]), style: ve([i.value, v.value, { height: de(d.value) }, u.value, e.style]) }, { default: () => [n.default && p("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Sy = z({ fullscreen: Boolean, scrollable: Boolean, ...Le(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: xr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), cu = J()({ name: "VDialog", props: Sy(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), { scopeId: o } = kl(), i = q();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return re(l, async (c) => {
    var _a3;
    c || (await Ee(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), te(() => {
    const c = Un.filterProps(e), u = K({ "aria-haspopup": "dialog" }, e.activatorProps), d = K({ tabindex: -1 }, e.contentProps);
    return b(Un, K({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: u, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), S = 0; S < f; S++) v[S] = arguments[S];
      return b(Be, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), Pt({}, i);
} }), iI = z({ inset: Boolean, ...Sy({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), rI = J()({ name: "VBottomSheet", props: iI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue");
  return te(() => {
    const l = cu.filterProps(e);
    return b(cu, K(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), sI = z({ divider: [Number, String], ...pe() }, "VBreadcrumbsDivider"), ky = J()({ name: "VBreadcrumbsDivider", props: sI(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    var _a3;
    return p("li", { "aria-hidden": "true", class: ee(["v-breadcrumbs-divider", e.class]), style: ve(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), uI = z({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...pe(), ...en(kt(), ["width", "maxWidth"]), ...ci(), ...Me({ tag: "li" }) }, "VBreadcrumbsItem"), wy = J()({ name: "VBreadcrumbsItem", props: uI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Et(() => o.value ? e.activeColor : e.color);
  return te(() => b(e.tag, { class: ee(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ve([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? p("a", K({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), cI = z({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ce, items: { type: Array, default: () => [] }, ...pe(), ...gt(), ...it(), ...Me({ tag: "ul" }) }, "VBreadcrumbs"), dI = J()({ name: "VBreadcrumbs", props: cI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { densityClasses: o } = Lt(e), { roundedClasses: i } = dt(e);
  mt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return te(() => {
    const s = !!(n.prepend || e.icon);
    return b(e.tag, { class: ee(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: ve([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && p("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? b(Be, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : b(Ye, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((c, u, d) => {
        var _a4;
        let { item: f, raw: v } = c;
        return p(ge, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: u })) ?? b(wy, K({ key: u, disabled: u >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: u });
        } : void 0 }), u < d.length - 1 && b(ky, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: u });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), fI = z({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...xt(), ...Ih(), ...it(), ...Me({ tag: "button" }), ...Ue(), ...bn({ variant: "flat" }) }, "VIconBtn"), xy = J()({ name: "VIconBtn", props: fI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "active"), { themeClasses: o } = qe(e), { borderClasses: i } = qt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = dt(e), { colorClasses: c, colorStyles: u, variantClasses: d } = ba(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return te(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, k = e.height ?? h, I = e.width ?? h, { iconSize: V } = Ph(e, () => new Map(e.iconSizes).get(m)), w = { icon: S, size: V.value, color: e.iconColor, opacity: e.opacity };
    return b(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ee([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, c.value, i.value, r.value, s.value, d.value, e.class]), style: ve([{ "--v-icon-btn-rotate": de(e.rotate, "deg"), "--v-icon-btn-height": de(k), "--v-icon-btn-width": de(I) }, u.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ya(!e.hideOverlay, "v-icon-btn"), p("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? b(Ye, K({ key: "content-icon" }, w), null) : b(Be, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...w } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Ie(e.text);
      } })]), !!e.loading && p("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function vI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Cy = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, _y = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, mI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], hI = 28, yI = 31, Kc = 12, Vy = 1, Dr = 1, Aa = 7, bv = 60, bI = 59, pI = 1440, SI = 24, kI = 23, wI = 0, xI = 1e4, CI = 100, _I = 100, VI = 1e4;
function II(e, t, n) {
  const a = tn(e);
  return Ey(a, t[0], Dy), In(a), n && rl(a, n, a.hasTime), a;
}
function PI(e, t, n) {
  const a = tn(e);
  return Ey(a, t[t.length - 1]), In(a), n && rl(a, n, a.hasTime), a;
}
function Iy(e) {
  const t = tn(e);
  return t.day = Dr, Er(t), In(t), t;
}
function Py(e) {
  const t = tn(e);
  return t.day = Xc(t.year, t.month), Er(t), In(t), t;
}
function Dl(e) {
  return isFinite(parseInt(e));
}
function AI(e) {
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
  return e.year * xI + e.month * CI + e.day;
}
function du(e) {
  return e.hour * _I + e.minute;
}
function Ra(e) {
  return Vt(e) * VI + du(e);
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = du(t), l = du(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function Sv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function kv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = kI, e.minute = bI, e.time = Ty(e))), e;
}
function Ay(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, fu(e, t), In(e), n && rl(e, n, true), e;
}
function Er(e) {
  return e.weekday = TI(e), e;
}
function In(e) {
  return e.time = Ty(e), e.date = DI(e), e;
}
function TI(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Kc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Xc(e, t) {
  return vI(e) ? gI[t] : mI[t];
}
function tn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: c, hasTime: u, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: c, hasTime: u, past: d, present: f, future: v };
}
function tl(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function DI(e) {
  let t = `${tl(e.year, 4)}-${tl(e.month, 2)}`;
  return e.hasDay && (t += `-${tl(e.day, 2)}`), t;
}
function Ty(e) {
  return e.hasTime ? `${tl(e.hour, 2)}:${tl(e.minute, 2)}` : "";
}
function fu(e, t) {
  for (e.minute += t; e.minute >= bv; ) e.minute -= bv, e.hour++, e.hour >= SI && (Ta(e), e.hour = wI);
  return e;
}
function Ta(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Aa, e.day > hI && e.day > Xc(e.year, e.month) && (e.day = Dr, e.month++, e.month > Kc && (e.month = Vy, e.year++)), e;
}
function Dy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Aa, e.day < Dr && (e.month--, e.month < Vy && (e.year--, e.month = Kc), e.day = Xc(e.year, e.month)), e;
}
function Ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function EI(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Ey(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ta, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function MI(e) {
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
  let s = tn(e), c = 0, u = c === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!u || r.length < o) && r.length < l; ) {
    if (c = Vt(s), u = u || c === i, a[s.weekday] === 0) {
      s = Ta(s);
      continue;
    }
    const d = tn(s);
    In(d), rl(d, n), r.push(d), s = Ka(s, Ta, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function BI(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = tn(e);
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
function $I(e) {
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
  function o(s, c) {
    s.date !== c.date && (c.year = s.year, c.month = s.month, c.day = s.day, c.weekday = s.weekday, c.date = s.date);
  }
  function i(s, c) {
    s.time !== c.time && (c.hour = s.hour, c.minute = s.minute, c.time = s.time);
  }
  function r() {
    const s = n.value || l();
    o(s, t.now), i(s, t.now), o(s, t.today);
  }
  return re(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Mr = z({ start: { type: [String, Number, Date], validate: Ol, default: () => qc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Ol }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: $I }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Ol }, type: { type: String, default: "month" } }, "VCalendar-base");
function Zc(e) {
  const { times: t, updateTimes: n } = FI({ now: e.now }), a = qg(e), l = ml(), o = _(() => e.type === "month" ? Iy(ia(e.start, true)) : ia(e.start, true)), i = _(() => {
    const V = o.value, w = e.end && ia(e.end) || V, g = Ra(w) < Ra(V) ? V : w;
    return e.type === "month" ? Py(g) : g;
  }), r = _(() => Ol(e.modelValue) ? ia(e.modelValue, true) : o.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), w = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((g) => g >= w), ...V.toSorted().filter((g) => g < w)];
  }), c = _(() => {
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
  }), u = _(() => MI(s.value)), d = _(() => tr(o.value, i.value, t.today, u.value)), f = _(() => e.dayFormat ? e.dayFormat : _o(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : _o(a.current.value, (V, w) => ({ timeZone: "UTC", weekday: w ? "short" : "long" })));
  function S(V) {
    return vh(V);
  }
  function m(V) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": w };
  }
  function y(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return II(V, s.value, t.today);
  }
  function k(V) {
    return PI(V, s.value, t.today);
  }
  function I(V) {
    return _o(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: c, weekdaySkips: u, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: S, getRelativeClasses: m, getWeekNumber: y, getStartOfWeek: h, getEndOfWeek: k, getFormatter: I, updateTimes: n };
}
const My = z({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Dl }, intervalWidth: { type: [Number, String], default: 60, validate: Dl }, intervalMinutes: { type: [Number, String], default: 60, validate: Dl }, firstInterval: { type: [Number, String], default: 0, validate: Dl }, firstTime: { type: [Number, String, Object], validate: AI }, intervalCount: { type: [Number, String], default: 24, validate: Dl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function By(e) {
  const t = Zc(e), n = ie(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => pv(e.firstTime)), s = _(() => {
    const w = r.value;
    return w !== false && w >= 0 && w <= pI ? w : a.value * l.value;
  }), c = _(() => o.value * i.value), u = _(() => tr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const w = u.value, g = s.value, C = l.value, x = o.value, A = t.times.now;
    return w.map((P) => BI(P, g, C, x, A));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : _o(t.locale.current.value, (w, g) => g ? w.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(w) {
    const g = d.value[0][0];
    return !(g.hour === w.hour && g.minute === w.minute);
  }
  function S(w) {
  }
  function m(w, g) {
    const C = tn(g), x = w.currentTarget.getBoundingClientRect(), A = s.value, P = w, E = w, D = P.changedTouches || P.touches, T = ((D && D[0] ? D[0].clientY : E.clientY) - x.top) / i.value, L = Math.floor(T * l.value), W = A + L;
    return Ay(C, W, t.times.now);
  }
  function y(w) {
    const g = tn(w);
    return g.timeToY = I, g.timeDelta = V, g.minutesToPixels = k, g.week = u.value, g.intervalRange = [s.value, s.value + o.value * l.value], g;
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
    return A === false || (A *= c.value, C ? A < 0 ? A = 0 : A > c.value && (A = c.value) : A < 0 ? A = A + c.value : A > c.value && (A = A - c.value)), A;
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
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: c, days: u, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: S, getTimestampAtEvent: m, getSlotScope: y, scrollToTime: h, minutesToPixels: k, timeToY: I, timeDelta: V };
}
function LI(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function RI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Yo = { mounted: LI, unmounted: RI }, go = Kt({ name: "VCalendarDaily", directives: { vResize: Yo }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr(), ...My() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = q(0), o = q(), i = By(e);
  function r() {
    Ee(s);
  }
  function s() {
    l.value = c();
  }
  function c() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function u() {
    return p("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const M = de(e.intervalWidth);
    return p("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(M, T) {
    const L = fn(a, ":day", (W) => ({ nativeEvent: W, ...i.getSlotScope(M) }));
    return p("div", K({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, L), [m(M), y(M), S(M, T)]);
  }
  function S(M, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: T })) ?? [];
  }
  function m(M) {
    const T = M.present ? e.color : void 0;
    return p("div", K(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function y(M) {
    var _a3;
    return p("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const T = fn(a, ":date", (L) => ({ nativeEvent: L, ...M }));
    return b(xy, K({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, T), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function k() {
    return p("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return p("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return p("div", { ref: o, class: "v-calendar-daily__pane", style: { height: de(i.bodyHeight.value) } }, [w()]);
  }
  function w() {
    var _a3;
    return p("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? g()]);
  }
  function g() {
    return i.days.value.map((M, T) => {
      const L = fn(a, ":time", (W) => ({ nativeEvent: W, ...i.getSlotScope(i.getTimestampAtEvent(W, M)) }));
      return p("div", K({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, L), [x(T), C(M)]);
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
    const T = de(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
    return p("div", { class: "v-calendar-daily__day-interval", key: M.time, style: ve([{ height: T }, L(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = de(e.intervalWidth), T = fn(a, ":interval", (L) => ({ nativeEvent: L, ...i.getTimestampAtEvent(L, i.parsedStart.value) }));
    return p("div", K({ class: "v-calendar-daily__intervals-body", style: { width: M } }, T), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const T = de(e.intervalHeight), L = e.shortIntervals, Z = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, L) : void 0;
    return p("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: T } }, [p("div", { class: "v-calendar-daily__interval-text" }, [Z])]);
  }
  return Ct(r), te(() => at(p("div", { class: ee(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : u(), k()]), [[Yo, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: c };
} });
function OI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function $y(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : OI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const NI = Kt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Mr(), ...My() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = By(e), o = _(() => $y(e.categories, e.categoryText));
  function i(y, h) {
    const k = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...y, category: k };
  }
  function r(y) {
    return p("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(y, i(y, h)))]);
  }
  function s(y, h) {
    var _a3, _b2;
    const k = typeof h.category == "object" ? h.category.categoryName : h.category, I = fn(a, ":dayCategory", () => i(l.getSlotScope(y) || y, h.category));
    return p("div", K({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? c(k), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function c(y) {
    return p("div", { class: "v-calendar-category__category" }, [y === null ? e.categoryForInvalid : y]);
  }
  function u() {
    const y = [];
    return l.days.value.forEach((h, k) => {
      const I = new Array(o.value.length || 1);
      I.fill(h), y.push(...I.map((V, w) => d(V, k, w)));
    }), y;
  }
  function d(y, h, k) {
    const I = o.value[k], V = fn(a, ":time", (w) => l.getSlotScope(l.getTimestampAtEvent(w, y)));
    return p("div", K({ key: y.date + "-" + k, class: ["v-calendar-daily__day", l.getRelativeClasses(y)] }, V), [f(h, I), S(y, I)]);
  }
  function f(y, h) {
    return l.intervals.value[y].map((k) => v(k, h));
  }
  function v(y, h) {
    var _a3;
    const k = de(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return p("div", { key: y.time, class: "v-calendar-daily__day-interval", style: ve([{ height: k }, I({ ...y, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  function S(y, h) {
    return p("div", { class: "v-calendar-category__columns" }, [m(y, h)]);
  }
  function m(y, h) {
    var _a3;
    const k = fn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, y)), h));
    return p("div", K({ class: "v-calendar-category__column" }, k), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  return te(() => b(go, K({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: u, "day-header": r })), { ...l, parsedCategories: o };
} }), wv = Kt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Dl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Mr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Zc(e), o = wr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const w = i.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return tr(g, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, w);
  }), s = _(() => {
    const w = l.times.today, g = l.getStartOfWeek(w), C = l.getEndOfWeek(w);
    return tr(g, C, w, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), c = _(() => e.monthFormat ? e.monthFormat : _o(l.locale.current.value, (w, g) => ({ timeZone: "UTC", month: g ? "short" : "long" })));
  function u(w) {
    const g = Vt(w);
    return g < Vt(l.parsedStart.value) || g > Vt(l.parsedEnd.value);
  }
  function d() {
    return p("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const w = s.value.map(v);
    return e.showWeek && w.unshift(p("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), w;
  }
  function v(w, g) {
    const C = u(r.value[g]), x = w.present ? e.color : void 0;
    return p("div", K(l.getColorProps({ text: x }), { key: w.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(w, C)], role: "columnheader" }), [l.weekdayFormatter.value(w, e.shortWeekdays)]);
  }
  function S() {
    const w = r.value, g = l.parsedWeekdays.value.length, C = [];
    for (let x = 0; x < w.length; x += g) C.push(m(w.slice(x, x + g), y(w[x])));
    return C;
  }
  function m(w, g) {
    const C = w.map((x, A) => k(x, A, w));
    return e.showWeek && C.unshift(h(g)), p("div", { key: w[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function y(w) {
    return l.getWeekNumber(w);
  }
  function h(w) {
    return p("div", { class: "v-calendar-weekly__weeknumber" }, [p("small", null, [String(w)])]);
  }
  function k(w, g, C) {
    var _a3;
    const x = u(w), A = fn(a, ":day", (P) => ({ nativeEvent: P, ...w }));
    return p("div", K({ key: w.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(w, x)], role: "cell" }, A), [I(w), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: x, index: g, week: C, ...w })]);
  }
  function I(w) {
    var _a3;
    return p("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, w)) ?? V(w)]);
  }
  function V(w) {
    const g = w.day === 1 && e.showMonthOnFirst, C = fn(a, ":date", (x) => ({ nativeEvent: x, ...w }));
    return b(xy, K({ active: w.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": yr }, C), { default: () => [g ? c.value(w, e.shortMonths) + " " + l.dayFormatter.value(w, false) : l.dayFormatter.value(w, false)] });
  }
  return te(() => p("div", { class: ee(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (w) => w.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: c, isOutside: u };
} }), HI = 864e5;
function Fy(e) {
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
function Ly(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Ry(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Oy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + HI, e.endTimestampIdentifier)];
}
function zI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (Pn(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [c, u] = a ? Ly(s.event) : Ry(s.event);
      if (Pn(t, n, c, u, a)) {
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
    const i = Ra(n), r = Fy(a, i);
    return r.forEach((s) => {
      const [c, u] = l ? Ly(s.event) : Ry(s.event);
      t.groups.length > 0 && !Pn(c, u, t.min, t.max, l) && (xv(t.groups), t.reset());
      let d = zI(t.groups, c, u, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: c, end: u, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, c), f.end = Math.max(f.end, u), s.column = d, t.min === -1 ? (t.min = c, t.max = u) : (t.min = Math.min(t.min, c), t.max = Math.max(t.max, u));
    }), xv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Cv = 100, WI = (e, t, n) => {
  const a = Ny(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((c) => {
      c.left = c.column * Cv / c.columnCount, c.width = Cv / c.columnCount;
    }), s;
  };
}, Vi = 100, jI = 5, UI = 1.7, GI = (e, t, n) => {
  const a = Ny(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Ra(l), c = Fy(o, s), u = QI(c, s);
    for (const d of u) {
      const f = [];
      for (const v of d.visuals) {
        const S = eP(v, s), m = XI(S, f);
        if (m === false) {
          const y = ZI(S, f);
          y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), S.index = y.index + 1, y.children.push(S));
        } else {
          const [y] = _v(S, f, m - 1, m - 1), h = _v(S, f, m + 1, m + f.length, true);
          S.children = h, S.index = m, y && (S.parent = y, S.sibling = Pn(S.start, S.end, y.start, $i(y.start, n)), y.children.push(S));
          for (const k of h) k.parent === y && (k.parent = S), k.index - S.index <= 1 && S.sibling && Pn(S.start, $i(S.start, n), k.start, k.end) && (k.sibling = true);
        }
        f.push(S);
      }
      YI(f, n);
    }
    return c.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), c;
  };
};
function YI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Hy(n) + 1, i = l ? l.visual.left : 0, r = Vi - i, s = Math.min(jI, Vi / o), c = KI(n, e), u = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * c;
    l && (a.left = n.sibling ? i + u : i + s), a.width = JI(n, e, t) ? Vi - a.left : Math.min(Vi - a.left, d * UI);
  }
}
function KI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function qI(e, t) {
  const n = [];
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function XI(e, t) {
  const n = qI(e, t);
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
function ZI(e, t) {
  let n = null;
  for (const a of t) Pn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function JI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && Pn(e.start, $i(e.start, n), a.start, a.end)) return false;
  return true;
}
function QI(e, t) {
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
function eP(e, t) {
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
const zy = { stack: GI, column: WI };
function tP(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ia(i, true), c = r ? ia(r, true) : s, u = Sv(i) ? kv(s, l) : s, d = Sv(r) ? kv(c, l) : c, f = Vt(u), v = Ra(u), S = Vt(d), m = u.hasTime ? 0 : 2359, y = Ra(d) + m, h = !u.hasTime;
  return { input: e, start: u, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: S, endTimestampIdentifier: y, allDay: h, index: t, category: o };
}
function Jc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function nP(e, t, n) {
  if (n) {
    const a = fu(tn(t), n[0]), l = fu(tn(t), n[1]), o = e.startTimestampIdentifier < Ra(l), i = e.endTimestampIdentifier > Ra(a);
    return o && i;
  }
  return Jc(e, Vt(t));
}
function aP(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Vv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Jc(e, n);
}
function lP(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const oP = 100, iP = 95, rP = z({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in zy || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function sP(e, t, n) {
  const a = Zc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = _(() => e.events ? e.events.map((T, L) => tP(T, L, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), c = _(() => parseInt(String(e.eventOverlapThreshold || 0))), u = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (T, L) => T.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : zy[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function S(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const m = q([]);
  function y() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, L = h();
    for (const W in L) {
      const { parent: N, events: Z, more: R } = L[W];
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
    const T = {}, L = m.value;
    return !L || !L.length || L.forEach((W) => {
      const N = W.getAttribute("data-date");
      W.parentElement && N && (N in T || (T[N] = { parent: W.parentElement, more: null, events: [] }), W.getAttribute("data-more") ? T[N].more = W : (T[N].events.push(W), W.style.display = ""));
    }), T;
  }
  function k(T, L) {
    let { event: W } = T;
    const N = e.eventHeight || 0, Z = e.eventMarginBottom || 0, R = Vt(L), $ = L.week, Y = R === W.startIdentifier;
    let j = R === W.endIdentifier, O = iP;
    if (!o.value) for (let ae = L.index + 1; ae < $.length; ae++) {
      const ye = Vt($[ae]);
      if (W.endIdentifier >= ye) O += oP, j = j || ye === W.endIdentifier;
      else {
        j = true;
        break;
      }
    }
    return V(W, { eventParsed: W, day: L, start: Y, end: j, timed: false }, false, { class: ["v-event", { "v-event-start": Y, "v-event-end": j }], style: { height: `${N}px`, width: `${O}%`, marginBottom: `${Z}px` }, "data-date": L.date });
  }
  function I(T, L) {
    let { event: W, left: N, width: Z } = T;
    const R = L.timeDelta(W.start, L), $ = L.timeDelta(W.end, L);
    if ($ === false || R === false || $ < 0 || R >= 1 || aP(W, L)) return false;
    const Y = Vt(L), j = W.startIdentifier >= Y, O = W.endIdentifier > Y, U = L.timeToY(W.start, L), ae = L.timeToY(W.end, L), ye = Math.max(e.eventHeight || 0, ae - U);
    return V(W, { eventParsed: W, day: L, start: j, end: O, timed: true }, true, { class: "v-event-timed", style: { top: `${U}px`, height: `${ye}px`, left: `${N}%`, width: `${Z}%` } });
  }
  function V(T, L, W, N) {
    const Z = t.event, R = u.value(T.input), $ = S(T.input), Y = T.start.hour < 12 && T.end.hour >= 12, j = EI(T.start, T.end) <= c.value, O = (fe, Ae) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), U = () => O(T.start) + " - " + O(T.end), ae = () => {
      const fe = d.value(T, W);
      if (T.start.hasTime) if (W) {
        const Ae = U(), xe = j ? ", " : p("br", null, null);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [fe]), xe, Ae]);
      } else {
        const Ae = O(T.start);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [Ae]), Ke(" "), fe]);
      }
      return p("span", { class: "v-event-summary" }, [fe]);
    }, ye = { ...L, event: T.input, outside: L.day.outside, singline: j, overlapsNoon: Y, formatTime: O, timeSummary: U, eventSummary: ae }, ne = fn(n, ":event", (fe) => ({ ...ye, nativeEvent: fe }));
    return at(p("div", K(a.getColorProps({ text: R, background: $ }), ne, N, { ref_for: true, ref: m }), [(Z == null ? void 0 : Z(ye)) ?? w(ae)]), [[Ft, e.eventRipple ?? true]]);
  }
  function w(T) {
    return p("div", { class: "pl-1" }, [T()]);
  }
  function g(T) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return p("div", { style: { height: `${L}px` }, "data-date": T.date, ref_for: true, ref: m }, null);
  }
  function C(T) {
    const L = e.eventHeight || 0, W = e.eventMarginBottom || 0, N = fn(n, ":more", (Z) => ({ nativeEvent: Z, ...T }));
    return at(p("div", K({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${W}px` }, ref_for: true, ref: m }, N), null), [[Ft, e.eventRipple ?? true]]);
  }
  function x() {
    const T = a.days.value, L = Vt(T[0]), W = Vt(T[T.length - 1]);
    return s.value.filter((N) => lP(N, L, W));
  }
  function A(T, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === T.category || typeof T.category == "string" && L === T.category || typeof T.category != "string" && L === null;
  }
  function P(T) {
    const L = Vt(T), W = v.value[0];
    return s.value.filter((N) => Vv(N, T, L, W));
  }
  function E(T) {
    const L = Vt(T), W = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? Jc(N, L) : Vv(N, T, L, W)) && A(N, T.category));
  }
  function D(T) {
    return s.value.filter((L) => !L.allDay && nP(L, T, T.intervalRange) && A(L, T.category));
  }
  function M() {
    if (l.value) return { ...t };
    const T = f.value(s.value, v.value[0], c.value), L = (N) => !!N, W = (N, Z, R, $) => {
      const Y = Z(N), j = T(N, Y, $, o.value);
      if ($) return j.map((U) => R(U, N)).filter(L);
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
      let R = [p("div", { class: "v-event-timed-container" }, [Z])];
      if (t["day-body"]) {
        const $ = t["day-body"](N);
        $ && (R = R.concat($));
      }
      return R;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: c, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: u, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: S, eventsRef: m, updateEventVisibility: y, getEventsMap: h, genDayEvent: k, genTimedEvent: I, genEvent: V, genName: w, genPlaceholder: g, genMore: C, getVisibleEvents: x, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const uP = J()({ name: "VCalendar", directives: { vResize: Yo }, props: { modelValue: { type: [String, Number, Date], validate: Ol }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Mr(), ...rP() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = q(), i = sP(e, n, a), r = q(null), s = q(null), c = _(() => parseInt(String(e.categoryDays)) || 1), u = _(() => $y(e.categories, e.categoryText)), d = _(() => {
    const g = i.parsedValue.value;
    let C = null, x = e.maxDays, A = u.value, P = g, E = g;
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
        C = go, E = Ka(tn(E), Ta, 3), In(E), x = 4;
        break;
      case "custom-weekly":
        C = wv, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = go, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "category":
        const D = c.value;
        C = NI, E = Ka(tn(E), Ta, D), In(E), x = D, A = w(A);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: x, categories: A };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), S = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), y = _(() => {
    const { start: g, end: C } = d.value, x = g.year !== C.year, A = x || g.month !== C.month;
    return x ? m.value(g, true) + " " + g.year + " - " + m.value(C, true) + " " + C.year : A ? m.value(g, true) + " - " + m.value(C, true) + " " + C.year : S.value(g, false) + " " + g.year;
  });
  function h() {
    const { start: g, end: C } = d.value;
    (!r.value || !s.value || g.date !== r.value.date || C.date !== s.value.date) && (r.value = g, s.value = C, l("change", { start: g, end: C }));
  }
  function k() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = tn(i.parsedValue.value), x = g > 0, A = x ? Ta : Dy, P = x ? yI : Dr;
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
        Ka(C, A, c.value);
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
    return at(b(A, K({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: g.date, end: C.date, maxDays: x, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Yo, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: c, renderProps: d, eventWeekdays: f, categoryMode: v, title: y, monthLongFormatter: S, monthShortFormatter: m, parsedCategories: u, checkChange: h, move: k, next: I, prev: V, getCategoryList: w }, o);
} }), cP = z({ ...pe(), ...Me() }, "VCardActions"), Wy = J()({ name: "VCardActions", props: cP(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { slim: true, variant: "text" } }), te(() => b(e.tag, { class: ee(["v-card-actions", e.class]), style: ve(e.style) }, n)), {};
} }), dP = z({ opacity: [Number, String], ...pe(), ...Me() }, "VCardSubtitle"), jy = J()({ name: "VCardSubtitle", props: dP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(e.tag, { class: ee(["v-card-subtitle", e.class]), style: ve([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Uy = ga("v-card-title"), fP = z({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...pe(), ...gt(), ...Me() }, "VCardItem"), Gy = J()({ name: "VCardItem", props: fP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return b(e.tag, { class: ee(["v-card-item", e.class]), style: ve(e.style) }, { default: () => {
      var _a3;
      return [l && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? b(Be, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : p(ge, null, [e.prependAvatar && b(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-card-item__content" }, [r && b(Uy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Ie(e.title)];
      } }), s && b(jy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Ie(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? b(Be, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : p(ge, null, [e.appendIcon && b(Ye, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(hn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), vP = z({ opacity: [Number, String], ...pe(), ...Me() }, "VCardText"), Yy = J()({ name: "VCardText", props: vP(), setup(e, t) {
  let { slots: n } = t;
  return te(() => b(e.tag, { class: ee(["v-card-text", e.class]), style: ve([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), mP = z({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...gt(), ...kt(), ...xt(), ...Vr(), ...Zn(), ...eo(), ...it(), ...ci(), ...Me(), ...Ue(), ...bn({ variant: "elevated" }) }, "VCard"), gP = J()({ name: "VCard", directives: { vRipple: Ft }, props: mP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = qt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ba(e), { densityClasses: c } = Lt(e), { dimensionStyles: u } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: v } = Oa(e), { positionClasses: S } = to(e), { roundedClasses: m } = dt(e), y = ui(e, n), h = ie(void 0);
  return re(() => e.loading, (k, I) => {
    h.value = !k && typeof I == "string" ? I : typeof k == "boolean" ? void 0 : k;
  }, { immediate: true }), te(() => {
    const k = e.link !== false && y.isLink.value, I = !e.disabled && e.link !== false && (e.link || y.isClickable.value), V = k ? "a" : e.tag, w = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = w || g, x = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || A || x, D = !!(a.text || e.text != null);
    return at(b(V, K(y.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, c.value, d.value, f.value, S.value, m.value, s.value, e.class], style: [r.value, u.value, v.value, { "--v-card-height": de(e.height) }, e.style], onClick: I && y.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && p("div", { key: "image", class: "v-card__image" }, [a.image ? b(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && b(Gy, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && b(Yy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && b(Wy, null, { default: a.actions }), ya(I, "v-card")];
    } }), [[Ft, I && e.ripple]]);
  }), {};
} }), hP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function yP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function bP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), hP(t);
}
function pP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function SP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => yP(n, t), touchend: (n) => bP(n, t), touchmove: (n) => pP(n, t) };
}
function kP(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = SP(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Ig(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function wP(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Ig(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const nr = { mounted: kP, unmounted: wP }, Ky = Symbol.for("vuetify:v-window"), qy = Symbol.for("vuetify:v-window-group"), Br = z({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...pe(), ...Me(), ...Ue() }, "VWindow"), sl = J()({ name: "VWindow", directives: { vTouch: nr }, props: Br(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isRtl: l } = _t(), { t: o } = Qe(), i = Na(e, qy), r = q(), s = _(() => l.value ? !e.reverse : e.reverse), c = ie(false), u = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", x = (s.value ? !c.value : c.value) ? "-reverse" : "";
    return `v-window-${g}${x}-transition`;
  }), d = ie(0), f = q(void 0), v = _(() => i.items.value.findIndex((g) => i.selected.value.includes(g.id)));
  re(v, (g, C) => {
    let x;
    const A = { left: 0, top: 0 };
    Je && C >= 0 && (x = pr(r.value), A.left = x == null ? void 0 : x.scrollLeft, A.top = x == null ? void 0 : x.scrollTop);
    const P = i.items.value.length, E = P - 1;
    P <= 2 ? c.value = g < C : g === E && C === 0 ? c.value = false : g === 0 && C === E ? c.value = true : c.value = g < C, Ee(() => {
      if (!Je || !x) return;
      x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" }), requestAnimationFrame(() => {
        if (!x) return;
        x.scrollTop !== A.top && x.scrollTo({ ...A, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), rt(Ky, { transition: u, isReversed: c, transitionCount: d, transitionHeight: f, rootRef: r });
  const S = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function y() {
    S.value && i.prev();
  }
  function h() {
    m.value && i.next();
  }
  const k = _(() => {
    const g = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    g.push(S.value ? n.prev ? n.prev({ props: C }) : b(ze, C, null) : p("div", null, null));
    const x = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return g.push(m.value ? n.next ? n.next({ props: x }) : b(ze, x, null) : p("div", null, null)), g;
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
      m.value ? w(1) : w(0);
    }));
  }
  function w(g) {
    var _a3;
    const C = k.value[g];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return te(() => at(b(e.tag, { ref: r, class: ee(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: ve([e.style, { "--v-window-transition-duration": Wn() ? null : de(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [p("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && p("div", { class: ee(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [k.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[nr, I.value]])), { group: i };
} }), xP = z({ color: String, cycle: Boolean, delimiterIcon: { type: Ce, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Br({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), CP = J()({ name: "VCarousel", props: xP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { t: l } = Qe(), o = q();
  let i = -1;
  re(a, s), re(() => e.interval, s), re(() => e.cycle, (u) => {
    u ? s() : window.clearTimeout(i);
  }), Ct(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function c(u, d) {
    (e.direction === "horizontal" && u.key === "ArrowLeft" || e.direction === "vertical" && u.key === "ArrowUp") && (u.preventDefault(), d.prev(), Ee(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && u.key === "ArrowRight" || e.direction === "vertical" && u.key === "ArrowDown") && (u.preventDefault(), d.next(), Ee(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return te(() => {
    const u = sl.filterProps(e);
    return b(sl, K({ ref: o }, u, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: de(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return p(ge, null, [!e.hideDelimiters && p("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && b(Be, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, S) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (y) => c(y, f) };
        return n.item ? n.item({ props: m, item: v }) : b(ze, K(v, m), null);
      })] })]), e.progress && b(_r, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
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
  function c() {
    var _a3;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = de((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function u() {
    s();
  }
  function d(S) {
    i.value && Ee(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = de(S.clientHeight));
    });
  }
  const f = _(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: c, onAfterEnter: s, onEnterCancelled: u, onBeforeLeave: c, onAfterLeave: s, onLeaveCancelled: u, onEnter: d } : false;
  }), { hasContent: v } = Oc(e, l.isSelected);
  return te(() => b(Yt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [at(p("div", { class: ee(["v-window-item", l.selectedClass.value, e.class]), style: ve(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Mn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), _P = z({ ...mh(), ...$r() }, "VCarouselItem"), VP = J()({ name: "VCarouselItem", inheritAttrs: false, props: _P(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  te(() => {
    const l = da.filterProps(e), o = ul.filterProps(e);
    return b(ul, K({ class: ["v-carousel-item", e.class] }, o), { default: () => [b(da, K(a, l), n)] });
  });
} }), IP = ga("v-code", "code"), PP = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...pe() }, "VColorPickerCanvas"), AP = Kt({ name: "VColorPickerCanvas", props: PP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ie(false), l = q(), o = ie(parseFloat(e.width)), i = ie(parseFloat(e.height)), r = q({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), c = _({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: k, y: I } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ze(k, 0, o.value) / o.value, v: 1 - Ze(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), u = _(() => {
    const { x: h, y: k } = c.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: de(e.dotSize), height: de(e.dotSize), transform: `translate(${de(h - I)}, ${de(k - I)})` };
  }), { resizeRef: d } = wn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: k, height: I } = h[0].contentRect;
    o.value = Math.round(k), i.value = Math.round(I);
  });
  function f(h, k, I) {
    const { left: V, top: w, width: g, height: C } = I;
    c.value = { x: Ze(h - V, 0, g), y: Ze(k - w, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (S(h), window.addEventListener("mousemove", S), window.addEventListener("mouseup", m), window.addEventListener("touchmove", S), window.addEventListener("touchend", m));
  }
  function S(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const k = o0(h);
    f(k.clientX, k.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", m);
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
    y(), r.value = { x: c.value.x * h[0] / k[0], y: c.value.y * h[1] / k[1] };
  }, { flush: "post" }), re(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Ct(() => y()), te(() => p("div", { ref: d, class: ee(["v-color-picker-canvas", e.class]), style: ve(e.style), onMousedown: v, onTouchstartPassive: v }, [p("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && p("div", { class: ee(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ve(u.value) }, null)])), {};
} });
function TP(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function DP(e, t) {
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
    return Xa(t, ["r", "g", "b"]) ? n = jn(e) : Xa(t, ["h", "s", "l"]) ? n = Ys(e) : Xa(t, ["h", "s", "v"]) && (n = e), TP(n, !Xa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Bl = { h: 0, s: 0, v: 0, a: 1 }, mu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: jn, from: li }, EP = { ...mu, inputs: (_a2 = mu.inputs) == null ? void 0 : _a2.slice(0, 3) }, gu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Ys, from: dc }, MP = { ...gu, inputs: gu.inputs.slice(0, 3) }, Xy = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Wg, from: T0 }, BP = { ...Xy, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, nl = { rgb: EP, rgba: mu, hsl: MP, hsla: gu, hex: BP, hexa: Xy }, $P = (e) => {
  let { label: t, ...n } = e;
  return p("div", { class: "v-color-picker-edit__input" }, [p("input", Ep(Qm(n)), null), p("span", null, [t])]);
}, FP = z({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, ...pe() }, "VColorPickerEdit"), LP = Kt({ name: "VColorPickerEdit", props: FP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = _(() => e.modes.map((i) => ({ ...nl[i], name: i }))), o = _(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: c, getColor: u, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && c(r), onChange: (v) => {
        const S = v.target;
        S && n("update:color", i.from(u(r ?? i.to(Bl), S.value)));
      } };
    });
  });
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-color-picker-edit", e.class]), style: ve(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => b($P, i, null)), l.value.length > 1 && b(ze, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Qc = Symbol.for("vuetify:v-slider");
function hu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function RP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Zy = z({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...it(), ...xt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Jy = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(wf(a.value), wf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ze(i, t.value, n.value), s = t.value % a.value;
    let c = Math.round((r - s) / a.value) * a.value + s;
    return r > c && c + a.value > n.value && (c = n.value), parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Qy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = ao(t), { isRtl: s } = _t(), c = B(() => t.reverse), u = _(() => t.direction === "vertical"), d = _(() => u.value !== c.value), { min: f, max: v, step: S, decimals: m, roundValue: y } = n, h = _(() => parseInt(t.thumbSize, 10)), k = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / S.value), w = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), x = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = ie(false), P = ie(0), E = q(), D = q();
  function M(ne) {
    var _a3;
    const fe = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!fe) return;
    const Ae = t.direction === "vertical", xe = Ae ? "top" : "left", he = Ae ? "height" : "width", F = Ae ? "clientY" : "clientX", { [xe]: H, [he]: Q } = fe.getBoundingClientRect(), ue = RP(ne, F);
    let oe = Ze((ue - H - P.value) / Q) || 0;
    return (Ae ? d.value : d.value !== s.value) && (oe = 1 - oe), y(f.value + oe * (v.value - f.value));
  }
  const T = (ne) => {
    const fe = M(ne);
    fe != null && o({ value: fe }), A.value = false, P.value = 0;
  }, L = (ne) => {
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
    L(ne), window.addEventListener("touchmove", N, W), (_a3 = ne.target) == null ? void 0 : _a3.addEventListener("touchend", R, { passive: false });
  }
  function Y(ne) {
    ne.button === 0 && (ne.preventDefault(), L(ne), window.addEventListener("mousemove", N, W), window.addEventListener("mouseup", Z, { passive: false }));
  }
  bt(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", Z);
  });
  const j = (ne) => {
    const fe = (ne - f.value) / (v.value - f.value) * 100;
    return Ze(isNaN(fe) ? 0 : fe, 0, 100);
  }, O = B(() => t.showTicks), U = _(() => O.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((ne) => ({ value: ne, position: j(ne), label: ne.toString() })) : Object.keys(t.ticks).map((ne) => ({ value: parseFloat(ne), position: j(parseFloat(ne)), label: t.ticks[ne] })) : V.value !== 1 / 0 ? Nn(V.value + 1).map((ne) => {
    const fe = f.value + ne * S.value;
    return { value: fe, position: j(fe) };
  }) : [] : []), ae = _(() => U.value.some((ne) => {
    let { label: fe } = ne;
    return !!fe;
  })), ye = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ae, isReversed: c, indexFromEnd: d, min: f, max: v, mousePressed: A, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: Y, onSliderTouchstart: $, parsedTicks: U, parseMouseMove: M, position: j, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: y, showTicks: O, startOffset: P, step: S, thumbSize: h, thumbColor: w, thumbLabelColor: g, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: k, trackColor: C, trackContainerRef: E, trackFillColor: x, trackSize: I, vertical: u };
  return rt(Qc, ye), ye;
}, OP = z({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...pe() }, "VSliderThumb"), yu = J()({ name: "VSliderThumb", directives: { vRipple: Ft }, props: OP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(Qc), { isRtl: o, rtlClasses: i } = _t();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: c, thumbLabelColor: u, step: d, disabled: f, thumbSize: v, thumbLabel: S, direction: m, isReversed: y, vertical: h, readonly: k, elevation: I, mousePressed: V, decimals: w, indexFromEnd: g } = l, C = ie(false), x = ie(false), A = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = It(A), { textColorClasses: E, textColorStyles: D } = Et(c), { backgroundColorClasses: M, backgroundColorStyles: T } = Xe(u), { pageup: L, pagedown: W, end: N, home: Z, left: R, right: $, down: Y, up: j } = zs, O = [L, W, N, Z, R, $, Y, j], U = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ae(ne, fe) {
    if (e.noKeyboard || f.value || !O.includes(ne.key)) return;
    ne.preventDefault();
    const Ae = d.value || 0.1, xe = (s.value - r.value) / Ae;
    if ([R, $, Y, j].includes(ne.key)) {
      const F = (h.value ? [o.value ? R : $, y.value ? Y : j] : g.value !== o.value ? [R, j] : [$, j]).includes(ne.key) ? 1 : -1, H = ne.shiftKey ? 2 : ne.ctrlKey ? 1 : 0;
      F === -1 && fe === s.value && !H && !Number.isInteger(xe) ? fe = fe - xe % 1 * Ae : fe = fe + F * Ae * U.value[H];
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
    return p("div", { class: ee(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: ve([{ "--v-slider-thumb-position": ne, "--v-slider-thumb-size": de(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": m.value, onKeydown: k.value ? void 0 : ye, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, x.value = true;
    } }, [p("div", { class: ee(["v-slider-thumb__surface", E.value, P.value]), style: ve(D.value) }, null), at(p("div", { class: ee(["v-slider-thumb__ripple", E.value]), style: ve(D.value) }, null), [[Ft, e.ripple, null, { circle: true, center: true }]]), b(wc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [at(p("div", { class: "v-slider-thumb__label-container" }, [p("div", { class: ee(["v-slider-thumb__label", M.value]), style: ve(T.value) }, [p("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? w.value : 1)]), p("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Mn, fe]])];
    } })]);
  }), {};
} }), NP = z({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...pe() }, "VSliderTrack"), eb = J()({ name: "VSliderTrack", props: NP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = We(Qc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: c, trackFillColor: u, trackSize: d, vertical: f, min: v, max: S, indexFromEnd: m } = a, { roundedClasses: y } = dt(i), { backgroundColorClasses: h, backgroundColorStyles: k } = Xe(u), { backgroundColorClasses: I, backgroundColorStyles: V } = Xe(c), w = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [w.value]: "0%", [g.value]: "100%" })), x = _(() => e.stop - e.start), A = _(() => ({ [w.value]: de(e.start, "%"), [g.value]: de(x.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const T = D.value !== v.value && D.value !== S.value ? de(D.position, "%") : void 0;
    return p("div", { key: D.value, class: ee(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === S.value }]), style: { [w.value]: T } }, [(D.label || n["tick-label"]) && p("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return te(() => p("div", { class: ee(["v-slider-track", y.value, e.class]), style: ve([{ "--v-slider-track-size": de(d.value), "--v-slider-tick-size": de(s.value) }, e.style]) }, [p("div", { class: ee(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !u.value }]), style: { ...C.value, ...V.value } }, null), p("div", { class: ee(["v-slider-track__fill", h.value]), style: { ...A.value, ...k.value } }, null), r.value && p("div", { class: ee(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), HP = z({ ...fi(), ...Zy(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), bu = J()({ name: "VSlider", inheritAttrs: false, props: HP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = q(), i = q(), { rtlClasses: r } = _t(), s = Jy(e), c = we(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: u, max: d, mousePressed: f, roundValue: v, onSliderMousedown: S, onSliderTouchstart: m, trackContainerRef: y, position: h, hasLabels: k, disabled: I, readonly: V, noKeyboard: w } = Qy({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", c.value);
  }, onSliderEnd: (P) => {
    let { value: E } = P;
    const D = v(E);
    !I.value && !V.value && (c.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: E } = P;
    !I.value && !V.value && (c.value = v(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: g, focus: C, blur: x } = pa(e), A = _(() => h(c.value));
  return te(() => {
    const P = Ot.filterProps(e), [E, D] = qn(l), M = !!(e.label || n.label || n.prepend);
    return b(Ot, K({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || k.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: M ? (T) => {
      var _a3, _b2;
      return p(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? b(no, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: L, messagesId: W } = T;
      return p("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : S, onTouchstartPassive: V.value ? void 0 : m }, [p("input", { id: L.value, name: e.name || L.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: c.value }, null), b(eb, { ref: y, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), b(yu, K({ ref: o, "aria-describedby": W.value, focused: g.value, noKeyboard: w.value, min: u.value, max: d.value, modelValue: c.value, "onUpdate:modelValue": (N) => c.value = N, position: A.value, elevation: e.elevation, onFocus: C, onBlur: x, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), tb = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ce, default: "$eyeDropper" }, ...pe() }, "VColorPickerPreview"), zP = Kt({ name: "VColorPickerPreview", props: tb(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  vr(() => l.abort());
  async function i() {
    if (!pf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), c = li(dn(s.sRGBHex));
      n("update:color", { ...e.color ?? Bl, ...c });
    } catch {
    }
  }
  return te(() => {
    var _a3, _b2;
    return p("div", { class: ee(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ve(e.style) }, [pf && !e.hideEyeDropper && p("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [b(ze, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), p("div", { class: "v-color-picker-preview__dot" }, [p("div", { style: { background: Ng(e.color ?? Bl) } }, null)]), p("div", { class: "v-color-picker-preview__sliders" }, [b(bu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && b(bu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), WP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, jP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, UP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, GP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, YP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, KP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, qP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, XP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, ZP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, JP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, QP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, eA = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, tA = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, nA = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, aA = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, lA = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, oA = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, iA = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, rA = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, sA = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, uA = { red: WP, pink: jP, purple: UP, deepPurple: GP, indigo: YP, blue: KP, lightBlue: qP, cyan: XP, teal: ZP, green: JP, lightGreen: QP, lime: eA, yellow: tA, amber: nA, orange: aA, deepOrange: lA, brown: oA, blueGrey: iA, grey: rA, shades: sA }, cA = z({ swatches: { type: Array, default: () => dA(uA) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...pe() }, "VColorPickerSwatches");
function dA(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const fA = Kt({ name: "VColorPickerSwatches", props: cA(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return te(() => p("div", { class: ee(["v-color-picker-swatches", e.class]), style: ve([{ maxHeight: de(e.maxHeight) }, e.style]) }, [p("div", null, [e.swatches.map((o) => p("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = dn(i), s = li(r), c = Og(r);
    return p("div", { class: ee(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [p("div", { style: { background: c } }, [e.color && Dt(e.color, s) ? b(Ye, { size: "x-small", icon: "$success", color: B0(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), vA = ga("v-picker-title"), Fr = z({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Nc() }, "VPicker"), Xl = J()({ name: "VPicker", props: Fr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color);
  return te(() => {
    const o = Fa.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return b(Fa, K(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && p("div", { key: "header", class: ee(["v-picker__header-wrapper", a.value]), style: ve([l.value]) }, [i && b(vA, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && p("div", { class: "v-picker__header" }, [n.header()])]), p("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(Be, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [p("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), mA = z({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Fr({ hideHeader: true }), ...en(tb(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), gA = Kt({ name: "VColorPicker", props: mA(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "mode"), l = q(null), o = we(e, "modelValue", void 0, (u) => {
    if (u == null || u === "") return null;
    let d;
    try {
      d = li(dn(u));
    } catch {
      return null;
    }
    return d;
  }, (u) => u ? DP(u, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = _t();
  let s = true;
  re(o, (u) => {
    if (!s) {
      s = true;
      return;
    }
    u && (l.value = u.h);
  }, { immediate: true });
  const c = (u) => {
    s = false, l.value = u.h, o.value = u;
  };
  return Jl(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), mt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), te(() => {
    const u = Xl.filterProps(e);
    return b(Xl, K(u, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Ng({ ...i.value ?? Bl, a: 1 }) }, e.style] }), { ...n, default: () => p(ge, null, [!e.hideCanvas && b(AP, { key: "canvas", color: i.value, "onUpdate:color": c, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && p("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && b(zP, { key: "preview", color: i.value, "onUpdate:color": c, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && b(LP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": c, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && b(fA, { key: "swatches", color: i.value, "onUpdate:color": c, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), hA = z({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...Gc({ hideNoData: true, returnObject: true }), ...Le(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), yA = J()({ name: "VCombobox", props: hA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = q(), i = ie(false), r = ie(true), s = ie(false), c = q(), u = q(), d = ie(-1);
  let f = false;
  const { items: v, transformIn: S, transformOut: m } = Mc(e), { textColorClasses: y, textColorStyles: h } = Et(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: k } = di(e), I = we(e, "modelValue", [], (X) => S(ot(X)), (X) => {
    const me = m(X);
    return e.multiple ? me : me[0] ?? null;
  }), V = ao(e), w = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), x = ie(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = ie(null), P = _({ get: () => x.value, set: async (X) => {
    var _a4;
    if (x.value = X ?? "", X === null || X === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [_n(e, X)], Ee(() => {
      var _a5;
      return (_a5 = u.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), X && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const me = be(X);
      me.length > 1 && (ce(me), x.value = "");
    }
    X || (d.value = -1), r.value = !X;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: M } = xl(e, v, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = _(() => e.hideSelected && A.value === null ? D.value.filter((X) => !I.value.some((me) => me.value === X.value)) : D.value), L = _(() => e.hideNoData && !T.value.length || V.isReadonly.value || V.isDisabled.value), W = we(e, "menu"), N = _({ get: () => W.value, set: (X) => {
    var _a4;
    W.value && !X && ((_a4 = c.value) == null ? void 0 : _a4.\u03A8openChildren.size) || X && L.value || (W.value = X);
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
    L.value || (N.value = true);
  }
  function he(X) {
    L.value || (i.value && (X.preventDefault(), X.stopPropagation()), N.value = !N.value);
  }
  function F(X) {
    var _a4, _b2;
    X.key === "Tab" && fe(X), ((_a4 = U.value) == null ? void 0 : _a4.$el.contains(X.target)) && (jl(X) || X.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function H(X) {
    var _a4, _b2, _c2, _d2;
    if (a0(X) || V.isReadonly.value) return;
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
    e.eager && ((_a4 = u.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function oe() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function se(X) {
    let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const ke = I.value.findIndex((Fe) => (e.valueComparator || Dt)(Fe.value, X.value)), Ve = me ?? !~ke;
      if (~ke) {
        const Fe = Ve ? [...I.value, X] : [...I.value];
        Fe.splice(ke, 1), I.value = Fe;
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
    ((_b2 = (_a4 = c.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (i.value = true);
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
        me >= 0 && ((_a4 = u.value) == null ? void 0 : _a4.scrollToIndex(me));
      });
    }
    X && (A.value = null);
  }), re(v, (X, me) => {
    N.value || i.value && !me.length && X.length && (N.value = true);
  }), te(() => {
    const X = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), me = I.value.length > 0, Se = Gn.filterProps(e), ke = { search: P, filteredItems: D.value };
    return b(Gn, K({ ref: o }, Se, { modelValue: P.value, "onUpdate:modelValue": (Ve) => P.value = Ve, focused: i.value, "onUpdate:focused": (Ve) => i.value = Ve, validationValue: I.externalValue, counterValue: E.value, dirty: me, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: me ? void 0 : e.placeholder, "onClick:clear": Ae, "onMousedown:control": xe, onKeydown: H, onPaste: Q, onBlur: _e, "aria-expanded": R.value, "aria-controls": $.value }), { ...a, default: (Ve) => {
      let { id: Fe } = Ve;
      return p(ge, null, [b(ql, K({ id: Z.value, ref: c, modelValue: N.value, "onUpdate:modelValue": (Ge) => N.value = Ge, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: ue, onAfterLeave: oe }, e.menuProps), { default: () => [b(Fa, { onFocusin: G, onKeydown: F }, { default: () => [a["menu-header"] && p("header", { ref: ae }, [a["menu-header"](ke)]), X && b(Kl, K({ key: "combobox-list", ref: U, filterable: true, selected: Y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Ge) => Ge.preventDefault(), selectable: !!T.value.length, onFocusout: le, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Fe.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ne, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? b(xn, { key: "no-data", title: l(e.noDataText) }, null)), b(Tr, { ref: u, renderless: true, items: T.value, itemKey: "value" }, { default: (Ge) => {
          var _a5, _b3, _c3;
          let { item: Oe, index: ft, itemRef: lt } = Ge;
          const on = K(Oe.props, { ref: lt, key: Oe.value, active: O.value && Oe === j.value ? true : void 0, onClick: () => se(Oe, null), "aria-posinset": ft + 1, "aria-setsize": T.value.length });
          return Oe.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Oe.raw, index: ft })) ?? b(vn, K(Oe.props, { key: `divider-${ft}` }), null) : Oe.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Oe.raw, index: ft })) ?? b(lo, K(Oe.props, { key: `subheader-${ft}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Oe, index: ft, props: on })) ?? b(xn, K(on, { role: "option" }), { prepend: (ka) => {
            let { isSelected: st } = ka;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(En, { key: Oe.value, modelValue: st, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (pn) => pn.preventDefault() }, null) : void 0, Oe.props.prependAvatar && b(hn, { image: Oe.props.prependAvatar }, null), Oe.props.prependIcon && b(Ye, { icon: Oe.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Oe.title : jc("v-combobox", Oe.title, (_a6 = M(Oe)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && p("footer", { ref: ye }, [a["menu-footer"](ke)])] })] }), I.value.map((Ge, Oe) => {
        function ft(st) {
          st.stopPropagation(), st.preventDefault(), se(Ge, false);
        }
        const lt = K(fa.filterProps(Ge.props), { "onClick:close": ft, onKeydown(st) {
          st.key !== "Enter" && st.key !== " " || (st.preventDefault(), st.stopPropagation(), ft(st));
        }, onMousedown(st) {
          st.preventDefault(), st.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), on = g.value ? !!a.chip : !!a.selection, ka = on ? br(g.value ? a.chip({ item: Ge, index: Oe, props: lt }) : a.selection({ item: Ge, index: Oe })) : void 0;
        if (!(on && !ka)) return p("div", { key: Ge.value, class: ee(["v-combobox__selection", Oe === d.value && ["v-combobox__selection--selected", y.value]]), style: ve(Oe === d.value ? h.value : {}) }, [g.value ? a.chip ? b(Be, { key: "chip-defaults", defaults: { VChip: { closable: w.value, size: "small", text: Ge.title } } }, { default: () => [ka] }) : b(fa, K({ key: "chip", closable: w.value, size: "small", text: Ge.title, disabled: Ge.props.disabled }, lt), null) : ka ?? p("span", { class: "v-combobox__selection-text" }, [Ge.title, e.multiple && Oe < I.value.length - 1 && p("span", { class: "v-combobox__selection-comma" }, [Ke(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ve = arguments.length, Fe = new Array(Ve), Ge = 0; Ge < Ve; Ge++) Fe[Ge] = arguments[Ge];
      return p(ge, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Fe), (!e.hideNoData || e.items.length) && e.menuIcon ? b(Ye, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: he, onClick: yr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(k, { key: "append-icon", name: "appendInner", color: Fe[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: se }, o);
} }), bA = z({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), pA = J()({ name: "VConfirmEdit", props: bA(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = we(e, "modelValue"), o = q();
  ct(() => {
    o.value = structuredClone(If(l.value));
  });
  const { t: i } = Qe(), r = _(() => Dt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const c = _(() => s("save")), u = _(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(If(l.value)), n("cancel");
  }
  function v(m) {
    return p(ge, null, [b(ze, K({ disabled: u.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), b(ze, K({ disabled: c.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let S = false;
  return te(() => {
    var _a3;
    return p(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, v;
    } }), !e.hideActions && !S && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), nb = z({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), ab = Symbol.for("vuetify:datatable:expanded");
function Lr(e) {
  const t = B(() => e.expandOnClick), n = we(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(n.value), u = Te(r.value);
    if (s) c.add(u);
    else {
      const d = [...n.value].find((f) => Te(f) === u);
      c.delete(d);
    }
    n.value = c;
  }
  function l(r) {
    const s = Te(r.value);
    return [...n.value].some((c) => Te(c) === s);
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
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = q(/* @__PURE__ */ new Set()), o = _(() => n.value.map((u) => ({ ...u, order: u.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
  function i(u) {
    return l.value.has(u.id);
  }
  function r(u) {
    const d = new Set(l.value);
    i(u) ? d.delete(u.id) : d.add(u.id), l.value = d;
  }
  function s(u) {
    function d(f) {
      const v = [];
      for (const S of f.items) "type" in S && S.type === "group" ? v.push(...d(S)) : v.push(S);
      return [...new Set(v)];
    }
    return d({ items: u });
  }
  const c = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return rt(ob, c), c;
}
function ib() {
  const e = We(ob);
  if (!e) throw new Error("Missing group!");
  return e;
}
function SA(e, t) {
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
  const l = SA(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const c = t[0], u = `${a}_${c}_${s}`;
    o.push({ depth: n, id: u, key: c, value: s, items: i.length ? rb(r, i, n + 1, u) : r, type: "group" });
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
  re(r, (c) => {
    Dt(s, c) || (s && s.search !== c.search && (t.value = 1), i.emit("update:options", c), s = c);
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
  function c() {
    t.value = Ze(t.value - 1, 1, i.value);
  }
  function u(f) {
    t.value = Ze(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: c, setPage: u, setItemsPerPage: r };
  return rt(ub, d), d;
}
function kA() {
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
function wA(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = nt(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: c } = n(i), u = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((y) => y.type === "group" && y.id === d), S = o.value.findIndex((y) => y.type === "group" && y.id === f), m = o.value.findIndex((y, h) => h > S && y.type === "group" && y.depth === 0);
      return o.value.slice(v, m === -1 ? void 0 : m);
    });
    return { pageCount: s, setItemsPerPage: c, paginatedItems: u };
  }
  if (l === "any") {
    const { flatItems: o } = a(t), { paginatedItems: i, pageCount: r, setItemsPerPage: s } = n(o);
    return { pageCount: r, setItemsPerPage: s, paginatedItems: i };
  }
  throw new Error(`Unrecognized pagination target ${l}`);
}
const xA = { showSelectAll: false, allSelected: () => [], select: (e) => {
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
} }, CA = { showSelectAll: true, allSelected: (e) => {
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
        return xA;
      case "all":
        return CA;
      case "page":
      default:
        return db;
    }
  }), s = ie(null);
  function c(k) {
    return ot(k).every((I) => l.value.has(I.value));
  }
  function u(k) {
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
    d(w, !c([k]));
  }
  function v(k) {
    const I = r.value.selectAll({ value: k, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = I;
  }
  const S = _(() => l.value.size > 0), m = _(() => {
    const k = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!k.length && c(k);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: c, isSomeSelected: u, someSelected: S, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
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
function _A(e, t) {
  if (!il(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function jr(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (c, u) => {
    if (c.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === c.key), v = t.value, S = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === S ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== c.key) : f.order = S;
    else {
      const { active: m, mode: y } = _A(l.value, u);
      m ? y === "prepend" ? d.unshift({ key: c.key, order: v }) : d.push({ key: c.key, order: v }) : d = [{ key: c.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(c) {
    return !!n.value.find((u) => u.key === c.key);
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
    return n.value.length ? VA(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function VA(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let c = false;
      const u = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ol(i[1], u), v = ol(r[1], u), S = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [S, m] = [m, S]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[u]) {
        const y = a.sortRawFunctions[u](S, m);
        if (y == null) continue;
        if (c = true, y) return y;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[u]) {
        const y = a.sortFunctions[u](f, v);
        if (y == null) continue;
        if (c = true, y) return y;
      }
      if (!c && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((y) => y != null ? y.toString().toLocaleLowerCase() : y), f !== v)) return vo(f) && vo(v) ? 0 : vo(f) ? -1 : vo(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const IA = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function PA(e, t) {
  const n = e.returnObject ? t : pt(t, e.itemValue), a = pt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function AA(e, t) {
  const n = [];
  for (const a of t) n.push(PA(e, a));
  return n;
}
function TA(e) {
  return { items: _(() => AA(e, e.items)) };
}
const DA = z({ search: String, loading: Boolean, itemsLength: [Number, String], ...pe(), ...IA(), ...fb(), ...mb(), ...nd({ itemsPerPage: 5 }), ...nb(), ...ed(), ...wl(), ...Me(), ...ha({ transition: { component: Ho, hideOnLeave: true } }) }, "VDataIterator"), EA = J()({ name: "VDataIterator", props: DA(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "groupBy"), l = B(() => e.search), { items: o } = TA(e), { filteredItems: i } = xl(e, o, l, { transform: (U) => U.raw }), { initialSortOrder: r, sortBy: s, multiSort: c, mustSort: u } = Wr(e), { page: d, itemsPerPage: f } = ad(e), { toggleSort: v } = jr({ initialSortOrder: r, sortBy: s, multiSort: c, mustSort: u, page: d }), { sortByWithGroups: S, opened: m, extractRows: y, isGroupOpen: h, toggleGroup: k } = Rr({ groupBy: a, sortBy: s }), { sortedItems: I } = od(e, i, S, { transform: (U) => U.raw }), { flatItems: V } = Or(I, a, m, false), w = B(() => !vo(e.itemsLength)), g = B(() => w.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: x, pageCount: A, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = ld({ page: d, itemsPerPage: f, itemsLength: g }), T = ie([]), L = _(() => w.value ? V.value : T.value);
  $t(() => !w.value, () => {
    const { paginatedItems: U } = cb({ items: V, startIndex: C, stopIndex: x, itemsPerPage: f });
    ct(() => {
      T.value = U.value;
    });
  });
  const W = _(() => y(L.value)), { isSelected: N, select: Z, selectAll: R, toggleSelect: $ } = Hr(e, { allItems: o, currentPage: W }), { isExpanded: Y, toggleExpand: j } = Lr(e);
  Nr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const O = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: v, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: N, select: Z, selectAll: R, toggleSelect: $, isExpanded: Y, toggleExpand: j, isGroupOpen: h, toggleGroup: k, items: W.value, itemsCount: i.value.length, groupedItems: L.value }));
  return te(() => b(e.tag, { class: ee(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ve(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, O.value), b(Yt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? b(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (U) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, U);
      } }) : p("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, O.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, O.value)];
  } })), {};
} });
function MA() {
  const e = q([]);
  Em(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const BA = z({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ce, default: "$first" }, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, lastIcon: { type: Ce, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Ht(), ...pe(), ...gt(), ...xt(), ...it(), ...Jn(), ...Me({ tag: "nav" }), ...Ue(), ...bn({ variant: "text" }) }, "VPagination"), pu = J()({ name: "VPagination", props: BA(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = we(e, "modelValue"), { t: o, n: i } = Qe(), { isRtl: r } = _t(), { themeClasses: s } = qe(e), { width: c } = ln(), u = ie(-1);
  mt(void 0, { scoped: true });
  const { resizeRef: d } = wn((x) => {
    if (!x.length) return;
    const { target: A, contentRect: P } = x[0], E = A.querySelector(".v-pagination__list > *");
    if (!E) return;
    const D = P.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    u.value = m(D, M);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), S = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : u.value >= 0 ? u.value : m(c.value, 58));
  function m(x, A) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((x - A * P) / A).toFixed(2))));
  }
  const y = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (S.value <= 0) return [];
    if (S.value === 1) return [l.value];
    if (f.value <= S.value) return Nn(f.value, v.value);
    const x = S.value % 2 === 0, A = x ? S.value / 2 : Math.floor(S.value / 2), P = x ? A : A + 1, E = f.value - A;
    if (P - l.value >= 0) return [...Nn(Math.max(1, S.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (x ? 1 : 0)) {
      const D = S.value - 1, M = f.value - D + v.value;
      return [v.value, e.ellipsis, ...Nn(D, M)];
    } else {
      const D = Math.max(1, S.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...Nn(D, M), e.ellipsis, f.value];
    }
  });
  function h(x, A, P) {
    x.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: k, updateRef: I } = MA();
  mt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const V = _(() => y.value.map((x, A) => {
    const P = (E) => I(E, A);
    if (typeof x == "string") return { isActive: false, key: `ellipsis-${A}`, page: x, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = x === l.value;
      return { isActive: E, key: x, page: i(x), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, x), onClick: (D) => h(D, x) } };
    }
  })), w = _(() => {
    const x = !!e.disabled || l.value <= v.value, A = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: x, "aria-label": o(e.firstAriaLabel), "aria-disabled": x } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: x, "aria-label": o(e.previousAriaLabel), "aria-disabled": x }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: A, "aria-label": o(e.nextAriaLabel), "aria-disabled": A }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: A, "aria-label": o(e.lastAriaLabel), "aria-disabled": A } : void 0 };
  });
  function g() {
    var _a3;
    const x = l.value - v.value;
    (_a3 = k.value[x]) == null ? void 0 : _a3.$el.focus();
  }
  function C(x) {
    x.key === zs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ee(g)) : x.key === zs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ee(g));
  }
  return te(() => b(e.tag, { ref: d, class: ee(["v-pagination", s.value, e.class]), style: ve(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [p("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && p("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(w.value.first) : b(ze, K({ _as: "VPaginationBtn" }, w.value.first), null)]), p("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(w.value.prev) : b(ze, K({ _as: "VPaginationBtn" }, w.value.prev), null)]), V.value.map((x, A) => p("li", { key: x.key, class: ee(["v-pagination__item", { "v-pagination__item--is-active": x.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(x) : b(ze, K({ _as: "VPaginationBtn" }, x.props), { default: () => [x.page] })])), p("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(w.value.next) : b(ze, K({ _as: "VPaginationBtn" }, w.value.next), null)]), e.showFirstLastPage && p("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(w.value.last) : b(ze, K({ _as: "VPaginationBtn" }, w.value.last), null)])])] })), {};
} }), id = z({ color: String, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, firstIcon: { type: Ce, default: "$first" }, lastIcon: { type: Ce, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ko = J()({ name: "VDataTableFooter", props: id(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: c, setItemsPerPage: u } = kA(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return te(() => {
    var _a3;
    const f = pu.filterProps(e);
    return p("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [a(e.itemsPerPageText)]), b(Yc, { items: d.value, itemColor: e.color, modelValue: c.value, "onUpdate:modelValue": (v) => u(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [b(pu, K({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Le(f, ["color"])), null)])]);
  }), {};
} }), qo = O0({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return b(a, { class: ee(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: de(e.height), width: de(e.width), maxWidth: de(e.maxWidth), left: l === "start" ? de(e.fixedOffset || null) : void 0, right: l === "end" ? de(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? de(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), $A = z({ headers: Array }, "DataTable-header"), yb = Symbol.for("vuetify:data-table-headers"), bb = { title: "", sortable: false }, FA = { ...bb, width: 48 };
function LA() {
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
function RA(e) {
  if (e.key) {
    if (e.key === "data-table-group") return bb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return FA;
  }
}
function rd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => rd(n, t + 1))) : t;
}
function OA(e) {
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
function NA(e, t) {
  const n = [];
  let a = 0;
  const l = LA(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: c, priority: u } = l.dequeue(), d = t - a - rd(c);
      if (r.push({ ...c, rowspan: d ?? 1, colspan: c.children ? Su(c).length : 1 }), c.children) for (const f of c.children) {
        const v = u % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
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
    const a = { ...RA(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? wb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function sd(e, t) {
  const n = q([]), a = q([]), l = q({}), o = q({}), i = q({});
  ct(() => {
    var _a3, _b2, _c2;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Yn(m) }))).slice(), u = pb(c);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !u.has("data-table-group") && c.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !u.has("data-table-select") && c.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !u.has("data-table-expand") && c.push({ key: "data-table-expand" });
    const d = wb(c);
    OA(d);
    const f = Math.max(...d.map((m) => rd(m))) + 1, v = NA(d, f);
    n.value = v.headers, a.value = v.columns;
    const S = v.headers.flat(1);
    for (const m of S) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
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
  const { t: a } = Qe(), { toggleSort: l, sortBy: o, isSorted: i } = hb(), { someSelected: r, allSelected: s, selectAll: c, showSelectAll: u } = zr(), { columns: d, headers: f } = Ur(), { loaderClasses: v } = ri(e);
  function S(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const E = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? de(A.fixedOffset) : void 0, right: E === "end" ? de(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(A, P) {
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
  const { backgroundColorClasses: h, backgroundColorStyles: k } = Xe(() => e.color), { displayClasses: I, mobile: V } = ln(e), w = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: c, getSortIcon: y })), g = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (A) => {
    let { column: P, x: E, y: D } = A;
    const M = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, L = K(e.headerProps ?? {}, P.headerProps ?? {});
    return b(qo, K({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: de(P.width), minWidth: de(P.minWidth), maxWidth: de(P.maxWidth), ...S(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (W) => l(P, W) : void 0, onKeydown: P.sortable ? (W) => m(W, P) : void 0 }, L), { default: () => {
      var _a3;
      const W = `header.${P.key}`, N = { column: P, selectAll: c, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: y };
      return n[W] ? n[W](N) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, N)) ?? (u.value && b(En, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": c }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [P.title]), P.sortable && !e.disableSort && b(Ye, { key: "icon", class: "v-data-table-header__sort-icon", icon: y(P) }, null), e.multiSort && i(P) && p("div", { key: "badge", class: ee(["v-data-table-header__sort-badge", ...h.value]), style: ve(k.value) }, [o.value.findIndex((Z) => Z.key === P.key) + 1])]);
    } });
  }, x = () => {
    const A = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return b(qo, K({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [p("div", { class: "v-data-table-header__content" }, [b(Yc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => b(En, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => c(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return b(fa, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, b(Ye, { class: ee(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: y(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  te(() => V.value ? p("tr", null, [b(x, null, null)]) : p(ge, null, [n.headers ? n.headers(w.value) : f.value.map((A, P) => p("tr", null, [A.map((E, D) => b(C, { column: E, x: D, y: P }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: d.value.length }, [b(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Cb = z({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ce, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ce, default: "$tableGroupExpand" }, ...gt() }, "VDataTableGroupHeaderRow"), HA = J()({ name: "VDataTableGroupHeaderRow", props: Cb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = ib(), { isSelected: i, isSomeSelected: r, select: s } = zr(), { columns: c } = Ur(), u = _(() => o([e.item])), d = B(() => c.value.length - (c.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => p("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [c.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, S = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: u.value.length, props: { icon: v, onClick: S } })) ?? b(qo, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [b(ze, { size: "small", variant: "text", icon: v, onClick: S }, null), p("span", null, [e.item.value]), p("span", null, [Ke("("), u.value.length, Ke(")")])] });
    } else if (f.key === "data-table-select") {
      const v = u.value.filter((h) => h.selectable), S = v.length > 0 && i(v), m = r(v) && !S, y = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: S, indeterminate: m, "onUpdate:modelValue": y } })) ?? b(qo, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [b(En, { density: e.density, disabled: v.length === 0, modelValue: S, indeterminate: m, "onUpdate:modelValue": y }, null)] });
    }
    return "";
  })]);
} }), _b = z({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...gt(), ...gl() }, "VDataTableRow"), ud = J()({ name: "VDataTableRow", props: _b(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = ln(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: c } = zr(), { isExpanded: u, toggleExpand: d } = lb(), { toggleSort: f, sortBy: v, isSorted: S } = hb(), { columns: m } = Ur();
  te(() => p("tr", { class: ee(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((y, h) => {
    const k = e.item, I = `item.${y.key}`, V = `header.${y.key}`, w = { index: e.index, item: k.raw, internalItem: k, value: ol(k.columns, y.key), column: y, isSelected: o, toggleSelect: i, isExpanded: u, toggleExpand: d }, g = { column: y, selectAll: c, isSorted: S, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value, column: y }) : e.cellProps, x = typeof y.cellProps == "function" ? y.cellProps({ index: w.index, item: w.item, internalItem: w.internalItem, value: w.value }) : y.cellProps, A = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
    return b(qo, K({ align: y.align, indent: y.indent, class: { "v-data-table__td--expanded-row": y.key === "data-table-expand", "v-data-table__td--select-row": y.key === "data-table-select" }, fixed: y.fixed, fixedOffset: y.fixedOffset, fixedEndOffset: y.fixedEndOffset, lastFixed: y.lastFixed, firstFixedEnd: y.firstFixedEnd, maxWidth: l.value ? void 0 : y.maxWidth, noPadding: A, empty: P, nowrap: y.nowrap, width: l.value ? void 0 : y.width }, C, x), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (y.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...w, props: { color: e.color, disabled: !k.selectable, modelValue: o([k]), onClick: Si(() => i(k), ["stop"]) } })) ?? b(En, { color: e.color, disabled: !k.selectable, density: e.density, modelValue: o([k]), onClick: Si((D) => i(k, e.index, D), ["stop"]) }, null);
      if (y.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...w, props: { icon: u(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) } })) ?? b(ze, { icon: u(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(k), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](w);
      const E = Ie(w.value);
      return l.value ? p(ge, null, [p("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? y.title]), p("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, w)) ?? E])]) : E;
    } });
  })]));
} }), Vb = z({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...en(_b(), ["collapseIcon", "expandIcon", "density"]), ...en(Cb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...gl() }, "VDataTableRows"), dl = J()({ name: "VDataTableRows", inheritAttrs: false, props: Vb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = Ur(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = lb(), { isSelected: s, toggleSelect: c } = zr(), { toggleGroup: u, isGroupOpen: d } = ib(), { t: f } = Qe(), { mobile: v } = ln(e);
  return te(() => {
    var _a3, _b2;
    const S = en(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : p(ge, null, [e.items.map((m, y) => {
      var _a4, _b3;
      if (m.type === "group") {
        const I = { index: y, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: c, toggleGroup: u, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : b(HA, K({ key: `group-header_${m.id}`, item: m }, fn(n, ":groupHeader", () => I), S), a);
      }
      if (m.type === "group-summary") {
        const I = { index: y, item: m, columns: l.value, toggleGroup: u };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: m.virtualIndex ?? y, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: c }, k = { ...h, props: K({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: y, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, fn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return p(ge, { key: k.props.key }, [a.item ? a.item(k) : b(ud, k.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), Ib = z({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...pe(), ...gt(), ...Me(), ...Ue() }, "VTable"), fl = J()({ name: "VTable", props: Ib(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = qe(e), { densityClasses: o } = Lt(e);
  return te(() => b(e.tag, { class: ee(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? p("div", { class: "v-table__wrapper", style: { height: de(e.height) } }, [p("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), zA = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function WA(e, t, n, a) {
  const l = e.returnObject ? t : pt(t, e.itemValue), o = pt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = pt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? pt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function jA(e, t, n) {
  return t.map((a, l) => WA(e, a, l, n));
}
function cd(e, t) {
  return { items: _(() => jA(e, e.items, t.value)) };
}
const dd = z({ ...Vb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...nb(), ...ed(), ...$A(), ...zA(), ...fb(), ...mb(), ...Le(xb(), ["multiSort", "initialSortOrder"]), ...Ib() }, "DataTable"), UA = z({ ...nd(), ...dd(), ...wl(), ...id() }, "VDataTable"), GA = J()({ name: "VDataTable", props: UA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: c, itemsPerPage: u } = ad(e), { disableSort: d } = Zl(e), { columns: f, headers: v, sortFunctions: S, sortRawFunctions: m, filterFunctions: y } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = cd(e, f), k = B(() => e.search), { filteredItems: I } = xl(e, h, k, { transform: (ae) => ae.columns, customKeyFilter: y }), { toggleSort: V } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: c }), { sortByWithGroups: w, opened: g, extractRows: C, isGroupOpen: x, toggleGroup: A } = Rr({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = od(e, I, w, { transform: (ae) => ({ ...ae.raw, ...ae.columns }), sortFunctions: S, sortRawFunctions: m }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: T } = wA({ pageBy: E, sortedItems: P, paginate: (ae) => {
    const ye = _(() => nt(ae).length), { startIndex: ne, stopIndex: fe, pageCount: Ae, setItemsPerPage: xe } = ld({ page: c, itemsPerPage: u, itemsLength: ye }), { paginatedItems: he } = cb({ items: ae, startIndex: ne, stopIndex: fe, itemsPerPage: u });
    return { paginatedItems: he, pageCount: Ae, setItemsPerPage: xe };
  }, group: (ae) => Or(ae, l, g, () => !!a["group-summary"]) }), L = _(() => C(T.value)), { isSelected: W, select: N, selectAll: Z, toggleSelect: R, someSelected: $, allSelected: Y } = Hr(e, { allItems: h, currentPage: L }), { isExpanded: j, toggleExpand: O } = Lr(e);
  Nr({ page: c, itemsPerPage: u, sortBy: i, groupBy: l, search: k }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const U = _(() => ({ page: c.value, itemsPerPage: u.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: M, someSelected: $.value, allSelected: Y.value, isSelected: W, select: N, selectAll: Z, toggleSelect: R, isExpanded: j, toggleExpand: O, isGroupOpen: x, toggleGroup: A, items: L.value.map((ae) => ae.raw), internalItems: L.value, groupedItems: T.value, columns: f.value, headers: v.value }));
  return te(() => {
    const ae = Ko.filterProps(e), ye = cl.filterProps(Le(e, ["multiSort"])), ne = dl.filterProps(e), fe = fl.filterProps(e);
    return b(fl, K({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, U.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(U.value) : p(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, U.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, K(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, U.value), !e.hideDefaultBody && p("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, U.value), a.body ? a.body(U.value) : b(dl, K(n, ne, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, U.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, U.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, U.value)]);
    }, bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && p(ge, null, [b(vn, null, null), b(Ko, ae, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), YA = z({ ...Le(dd(), ["hideDefaultFooter"]), ...ed(), ...gy(), ...wl() }, "VDataTableVirtual"), KA = J()({ name: "VDataTableVirtual", props: YA(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { disableSort: c } = Zl(e), { columns: u, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: S } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = cd(e, u), y = B(() => e.search), { filteredItems: h } = xl(e, m, y, { transform: (he) => he.columns, customKeyFilter: f }), { toggleSort: k } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: w, isGroupOpen: g, toggleGroup: C } = Rr({ groupBy: l, sortBy: i, disableSort: c }), { sortedItems: x } = od(e, h, I, { transform: (he) => ({ ...he.raw, ...he.columns }), sortFunctions: v, sortRawFunctions: S }), { flatItems: A } = Or(x, l, V, () => !!a["group-summary"]), P = _(() => w(A.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: T, someSelected: L, allSelected: W } = Hr(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: Z } = Lr(e), { containerRef: R, markerRef: $, paddingTop: Y, paddingBottom: j, computedItems: O, handleItemResize: U, handleScroll: ae, handleScrollend: ye, calculateVisibleItems: ne, scrollToIndex: fe } = hy(e, A), Ae = _(() => O.value.map((he) => ({ ...he.raw, virtualIndex: he.index })));
  Nr({ sortBy: i, page: ie(1), itemsPerPage: ie(-1), groupBy: l, search: y }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const xe = _(() => ({ sortBy: i.value, toggleSort: k, someSelected: L.value, allSelected: W.value, isSelected: E, select: D, selectAll: M, toggleSelect: T, isExpanded: N, toggleExpand: Z, isGroupOpen: g, toggleGroup: C, items: P.value.map((he) => he.raw), internalItems: P.value, groupedItems: A.value, columns: u.value, headers: d.value }));
  return te(() => {
    const he = cl.filterProps(Le(e, ["multiSort"])), F = dl.filterProps(e), H = fl.filterProps(e);
    return b(fl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, H, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, xe.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return p("div", { ref: R, onScrollPassive: ae, onScrollend: ye, class: "v-table__wrapper", style: { height: de(e.height) } }, [p("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, xe.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, K(he, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, xe.value), !e.hideDefaultBody && p("tbody", { key: "tbody" }, [p("tr", { ref: $, style: { height: de(Y.value), border: 0 } }, [p("td", { colspan: u.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, xe.value), b(dl, K(n, F, { items: Ae.value }), { ...a, item: (Q) => b(my, { key: Q.internalItem.index, renderless: true, "onUpdate:height": (ue) => U(Q.internalItem.index, ue) }, { default: (ue) => {
        var _a4;
        let { itemRef: oe } = ue;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...Q, itemRef: oe })) ?? b(ud, K(Q.props, { ref: oe, key: Q.internalItem.index, index: Q.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, xe.value), p("tr", { style: { height: de(j.value), border: 0 } }, [p("td", { colspan: u.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, xe.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, xe.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, xe.value);
    } });
  }), { calculateVisibleItems: ne, scrollToIndex: fe };
} }), qA = z({ itemsLength: { type: [Number, String], required: true }, ...nd(), ...dd(), ...id() }, "VDataTableServer"), XA = J()({ name: "VDataTableServer", props: qA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = td(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Wr(e), { page: c, itemsPerPage: u } = ad(e), { disableSort: d } = Zl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: S } = sd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = cd(e, v), { toggleSort: y } = jr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: c }), { opened: h, isGroupOpen: k, toggleGroup: I, extractRows: V } = Rr({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: w, setItemsPerPage: g } = ld({ page: c, itemsPerPage: u, itemsLength: f }), { flatItems: C } = Or(m, l, h, () => !!a["group-summary"]), { isSelected: x, select: A, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = Hr(e, { allItems: m, currentPage: m }), { isExpanded: T, toggleExpand: L } = Lr(e), W = _(() => V(m.value));
  Nr({ page: c, itemsPerPage: u, sortBy: i, groupBy: l, search: B(() => e.search) }), rt("v-data-table", { toggleSort: y, sortBy: i }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: c.value, itemsPerPage: u.value, sortBy: i.value, pageCount: w.value, toggleSort: y, setItemsPerPage: g, someSelected: D.value, allSelected: M.value, isSelected: x, select: A, selectAll: P, toggleSelect: E, isExpanded: T, toggleExpand: L, isGroupOpen: k, toggleGroup: I, items: W.value.map((Z) => Z.raw), internalItems: W.value, groupedItems: C.value, columns: v.value, headers: S.value }));
  te(() => {
    const Z = Ko.filterProps(e), R = cl.filterProps(Le(e, ["multiSort"])), $ = dl.filterProps(e), Y = fl.filterProps(e);
    return b(fl, K({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Y, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, N.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(N.value) : p(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, N.value), !e.hideDefaultHeader && p("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [b(cl, K(R, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : b(dl, K(n, $, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && p(ge, null, [b(vn, null, null), b(Ko, Z, { prepend: a["footer.prepend"] })]) });
  });
} }), ZA = z({ fluid: { type: Boolean, default: false }, ...pe(), ...kt(), ...Me() }, "VContainer"), JA = J()({ name: "VContainer", props: ZA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = _t(), { dimensionStyles: l } = wt(e);
  return te(() => b(e.tag, { class: ee(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: ve([l.value, e.style]) }, n)), {};
} }), Pb = kr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Ab = kr.reduce((e, t) => {
  const n = "offset" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Tb = kr.reduce((e, t) => {
  const n = "order" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Iv = { col: Object.keys(Pb), offset: Object.keys(Ab), order: Object.keys(Tb) };
function QA(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const eT = ["auto", "start", "end", "center", "baseline", "stretch"], tT = z({ cols: { type: [Boolean, String, Number], default: false }, ...Pb, offset: { type: [String, Number], default: null }, ...Ab, order: { type: [String, Number], default: null }, ...Tb, alignSelf: { type: String, default: null, validator: (e) => eT.includes(e) }, ...pe(), ...Me() }, "VCol"), nT = J()({ name: "VCol", props: tT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Iv) Iv[o].forEach((r) => {
      const s = e[r], c = QA(o, r, s);
      c && l.push(c);
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
const aT = [...fd, "baseline", "stretch"], Eb = (e) => aT.includes(e), Mb = vd("align", () => ({ type: String, default: null, validator: Eb })), lT = [...fd, ...Db], Bb = (e) => lT.includes(e), $b = vd("justify", () => ({ type: String, default: null, validator: Bb })), oT = [...fd, ...Db, "stretch"], Fb = (e) => oT.includes(e), Lb = vd("alignContent", () => ({ type: String, default: null, validator: Fb })), Pv = { align: Object.keys(Mb), justify: Object.keys($b), alignContent: Object.keys(Lb) }, iT = { align: "align", justify: "justify", alignContent: "align-content" };
function rT(e, t, n) {
  let a = iT[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const sT = z({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Eb }, ...Mb, justify: { type: String, default: null, validator: Bb }, ...$b, alignContent: { type: String, default: null, validator: Fb }, ...Lb, ...pe(), ...Me() }, "VRow"), uT = J()({ name: "VRow", props: sT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Pv) Pv[o].forEach((i) => {
      const r = e[i], s = rT(o, i, r);
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
  const { t: l } = Qe(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
  function d() {
    n("click:prev");
  }
  function f() {
    n("click:next");
  }
  function v() {
    n("click:prev-year");
  }
  function S() {
    n("click:next-year");
  }
  function m() {
    n("click:year");
  }
  function y() {
    n("click:month");
  }
  return te(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, k = b(ze, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = b(ze, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = b(ze, { "data-testid": "prev-year", disabled: c.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), w = b(ze, { "data-testid": "next-year", disabled: u.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), g = b(ze, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), C = b(ze, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), x = b(ze, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), A = p(ge, null, [b(ze, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), b(ze, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: y, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: S }, E = p(ge, null, [e.noMonthPicker ? x : A, b(ku, null, null), p("div", { class: "v-date-picker-controls__month" }, [k, I])]), D = p(ge, null, [p("div", { class: "v-date-picker-controls__month" }, [k, g, I]), b(ku, null, null), p("div", { class: "v-date-picker-controls__year" }, [V, C, w])]);
    return b(Be, { defaults: h }, { default: () => {
      var _a3;
      return [p("div", { class: ee(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": de(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? p(ge, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), cT = z({ appendIcon: Ce, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), xu = J()({ name: "VDatePickerHeader", props: cT(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return te(() => {
    const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
    return p("div", { class: ee(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: ve(o.value), onClick: i }, [a.prepend && p("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && b(Yt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [p("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), c && p("div", { class: "v-date-picker-header__append" }, [a.append ? b(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : b(ze, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), dT = z({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function fT(e) {
  const t = ml(), n = we(e, "modelValue", [], (m) => ot(m).map((y) => t.date(y))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = we(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (m) => t.getYear(m)), o = we(e, "month", void 0, (m) => {
    const y = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, y);
  }, (m) => t.getMonth(m)), i = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((y, h) => e.weekdays.includes((h + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), y = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && y.length < h) {
      const k = y[y.length - 1];
      let I = [];
      for (let V = 1; V <= h - y.length; V++) I.push(t.addDays(k, V)), V % 7 === 0 && (m.push(I), I = []);
    }
    return m;
  });
  function s(m, y) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, k) => {
      const I = t.toISO(h), V = !t.isSameMonth(h, o.value), w = t.isSameDay(h, t.startOfMonth(o.value)), g = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), x = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: V, isDisabled: S(h), isEnd: g, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((A) => t.isSameDay(h, A)), isStart: w, isToday: t.isSameDay(h, y), isWeekEnd: k % x === x - 1, isWeekStart: k % x === 0, isoDate: I, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const c = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let k = 0; k <= 6; k++) y.push(t.addDays(m, k));
    const h = t.date();
    return s(y, h);
  }), u = _(() => {
    const m = r.value.flat(), y = t.date();
    return s(m, y);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = Ob(e);
  function S(m) {
    if (e.disabled) return true;
    const y = t.date(m);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || v.value && t.isAfter(y, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : false;
  }
  return { displayValue: a, daysInMonth: u, daysInWeek: c, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
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
const Nb = z({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Le(dT(), ["displayValue"]) }, "VDatePickerMonth"), Cu = J()({ name: "VDatePickerMonth", props: Nb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = q(), { t: o } = Qe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: c } = fT(e), u = ml(), d = ie(), f = ie(), v = ie(false), S = B(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = _(() => {
    const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= g;
  });
  re(i, (g, C) => {
    C && (v.value = u.isBefore(g[0].date, C[0].date));
  });
  function y(g) {
    const C = u.startOfDay(g);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = g, f.value = void 0, r.value = [d.value];
    else {
      if (u.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else u.isBefore(C, d.value) ? (f.value = u.endOfDay(d.value), d.value = C) : f.value = u.endOfDay(C);
      r.value = Wx(u, d.value, f.value);
    }
  }
  function h(g) {
    const C = u.format(g.date, "fullDateWithWeekday"), x = g.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${x}`, C);
  }
  function k(g) {
    const C = r.value.findIndex((x) => u.isSameDay(x, g));
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
    return C.length ? p("div", { class: "v-date-picker-month__events" }, [C.map((x) => b(yy, { dot: true, color: x }, null))]) : null;
  }
  te(() => p("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && p("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && p("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Ke("\xA0")]), s.value.map((g) => p("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), b(Yt, { name: S.value }, { default: () => {
    var _a3;
    return [p("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && c.value.map((g) => p("div", { class: ee(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), i.value.map((g, C) => {
      var _a4;
      const x = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return m.value && !g.isSelected && (g.isDisabled = true), p("div", { class: ee(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, x)) ?? b(ze, x.props, { default: () => [g.localized, w(g.isoDate)] }))]);
    })])];
  } })]));
} }), Hb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), _u = J()({ name: "VDatePickerMonths", props: Hb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Nn(12).map((c) => {
      const u = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(c) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
      return s = l.getNextMonth(s), { isDisabled: f, text: u, label: d, value: c };
    });
  });
  ct(() => {
    o.value = o.value ?? l.getMonth(l.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return te(() => p("div", { class: "v-date-picker-months", style: { height: de(e.height) } }, [p("div", { class: "v-date-picker-months__content" }, [i.value.map((s, c) => {
    var _a3;
    const u = { active: o.value === c, ariaLabel: s.label, color: o.value === c ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(c) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: c, props: u })) ?? b(ze, K({ key: "month" }, u), null);
  })])])), {};
} }), zb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Vu = J()({ name: "VDatePickerYears", props: zb(), directives: { vIntersect: Dn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = we(e, "modelValue"), i = ie(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, S = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Nn(S - v + 1, v).map((y) => {
      const h = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: h, value: y, isDisabled: !d(y) };
    });
  });
  ct(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = $o(), c = $o();
  function u() {
    const f = s.el, v = c.el;
    if (!f || !v) return;
    const S = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - S.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return te(() => at(p("div", { class: "v-date-picker-years", ref: s, style: { height: de(e.height) } }, [p("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = c.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const S = { ref: o.value === f.value ? c : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: S })) ?? b(ze, K({ key: "month" }, S), null);
  })])]), [[Dn, { handler: u }, null, { once: true }]])), {};
} }), vT = z({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Le(Rb(), ["active", "monthText", "yearText"]), ...Nb({ weeksInMonth: "static" }), ...Le(Hb(), ["modelValue"]), ...Le(zb(), ["modelValue"]), ...Fr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), mT = J()({ name: "VDatePicker", props: vT(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), { t: o } = Qe(), { rtlClasses: i } = _t(), r = we(e, "modelValue", void 0, (U) => ot(U).map((ae) => l.date(ae)), (U) => e.multiple ? U : U[0]), s = we(e, "viewMode"), { minDate: c, maxDate: u, clampDate: d } = Ob(e), f = _(() => {
    var _a3;
    const U = l.date(), ae = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(U);
    return ae && l.isValid(ae) ? ae : U;
  }), v = B(() => e.headerColor ?? e.color), S = we(e, "month"), m = _({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (U) => S.value = U }), y = we(e, "year"), h = _({ get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (U) => y.value = U }), k = ie(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const U = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && U.split(" ").length === 3 ? U.replace(" ", `
`) : U;
  }), V = B(() => {
    let U = l.date();
    return U = l.setDate(U, 1), U = l.setMonth(U, m.value), U = l.setYear(U, h.value), U;
  }), w = B(() => l.format(V.value, "monthAndYear")), g = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), x = B(() => `date-picker-header${k.value ? "-reverse" : ""}-transition`), A = _(() => {
    if (e.disabled) return true;
    const U = [];
    if (s.value !== "month") U.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ae = l.date();
      if (ae = l.startOfMonth(ae), ae = l.setMonth(ae, m.value), ae = l.setYear(ae, h.value), c.value) {
        const ye = l.addDays(l.startOfMonth(ae), -1), ne = l.addDays(l.startOfYear(ae), -1);
        l.isAfter(c.value, ye) && U.push("prev-month"), l.isAfter(c.value, ne) && U.push("prev-year");
      }
      if (u.value) {
        const ye = l.addDays(l.endOfMonth(ae), 1), ne = l.addDays(l.endOfYear(ae), 1);
        l.isAfter(ye, u.value) && U.push("next-month"), l.isAfter(ne, u.value) && U.push("next-year");
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
  function L() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, O()), j();
  }
  function W() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, O()), j();
  }
  function N() {
    if (h.value++, u.value) {
      const U = String(m.value + 1).padStart(2, "0"), ae = l.parseISO(`${h.value}-${U}-01`);
      l.isAfter(ae, u.value) && (m.value = l.getMonth(u.value));
    }
    O();
  }
  function Z() {
    if (h.value--, c.value) {
      const U = String(m.value + 1).padStart(2, "0"), ae = l.endOfMonth(l.parseISO(`${h.value}-${U}-01`));
      l.isAfter(c.value, ae) && (m.value = l.getMonth(c.value));
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
    xe !== m.value && (m.value = xe, j()), he !== h.value && (h.value = he, O()), k.value = l.isBefore(fe, Ae);
  }), te(() => {
    const U = Xl.filterProps(e), ae = Le(wu.filterProps(e), ["viewMode"]), ye = xu.filterProps(e), ne = Cu.filterProps(e), fe = Le(_u.filterProps(e), ["modelValue"]), Ae = Le(Vu.filterProps(e), ["modelValue"]), xe = { color: v.value, header: I.value, transition: x.value };
    return b(Xl, K(U, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": de(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? b(Be, { defaults: { VDatePickerHeader: { ...xe } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, xe)];
    } }) : b(xu, K({ key: "header" }, ye, xe, { onClick: s.value !== "month" ? R : void 0 }), { prepend: a.prepend, append: a.append }), default: () => p(ge, null, [b(wu, K(ae, { disabled: A.value, viewMode: s.value, text: w.value, monthText: g.value, yearText: C.value, "onClick:next": L, "onClick:prev": W, "onClick:nextYear": N, "onClick:prevYear": Z, "onClick:month": $, "onClick:year": Y }), { default: a.controls }), b(Ho, { hideOnLeave: true }, { default: () => [s.value === "months" ? b(_u, K({ key: "date-picker-months" }, fe, { modelValue: m.value, "onUpdate:modelValue": [(he) => m.value = he, j], min: c.value, max: u.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? b(Vu, K({ key: "date-picker-years" }, Ae, { modelValue: h.value, "onUpdate:modelValue": [(he) => h.value = he, O], min: c.value, max: u.value, allowedYears: P.value }), { year: a.year }) : b(Cu, K({ key: "date-picker-month" }, ne, { modelValue: r.value, "onUpdate:modelValue": (he) => r.value = he, month: m.value, "onUpdate:month": [(he) => m.value = he, j], year: h.value, "onUpdate:year": [(he) => h.value = he, O], min: c.value, max: u.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), gT = z({ actionText: String, bgColor: String, color: String, icon: Ce, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...pe(), ...kt(), ...Jn({ size: void 0 }), ...Ue() }, "VEmptyState"), hT = J()({ name: "VEmptyState", props: gT(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = ln();
  function c(u) {
    n("click:action", u);
  }
  return te(() => {
    var _a3, _b2, _c2;
    const u = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return p("div", { class: ee(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: ve([i.value, r.value, e.style]) }, [S && p("div", { key: "media", class: "v-empty-state__media" }, [a.media ? b(Be, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : p(ge, null, [e.image ? b(da, { key: "image", src: e.image, height: m }, null) : e.icon ? b(Ye, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && p("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && p("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && p("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: de(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && p("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), u && p("div", { key: "actions", class: "v-empty-state__actions" }, [b(Be, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: c } })) ?? b(ze, { onClick: c }, null)];
    } })])]);
  }), {};
} }), Xo = Symbol.for("vuetify:v-expansion-panel"), Wb = z({ ...pe(), ...Rc() }, "VExpansionPanelText"), Iu = J()({ name: "VExpansionPanelText", props: Wb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Oc(e, a.isSelected);
  return te(() => b(Cr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [at(p("div", { class: ee(["v-expansion-panel-text", e.class]), style: ve(e.style) }, [n.default && l.value && p("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Mn, a.isSelected.value]])];
  } })), {};
} }), jb = z({ color: String, expandIcon: { type: Ce, default: "$expand" }, collapseIcon: { type: Ce, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...pe(), ...kt() }, "VExpansionPanelTitle"), Pu = J()({ name: "VExpansionPanelTitle", directives: { vRipple: Ft }, props: jb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return te(() => {
    var _a3;
    return at(p("button", { class: ee(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: ve([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [p("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && b(Be, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [p("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? b(Ye, null, null)])];
    } })]), [[Ft, e.ripple]]);
  }), {};
} }), Ub = z({ title: String, text: String, bgColor: String, ...xt(), ...Sl(), ...it(), ...Me(), ...jb(), ...Wb() }, "VExpansionPanel"), yT = J()({ name: "VExpansionPanel", props: Ub(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Xo), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = _(() => a.group.items.value.reduce((f, v, S) => (a.group.selected.value.includes(v.id) && f.push(S), f), [])), u = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && c.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && c.value.some((v) => v - f === -1);
  });
  return rt(Xo, a), te(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), S = Pu.filterProps(e), m = Iu.filterProps(e);
    return b(e.tag, { class: ee(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": u.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: ve([o.value, e.style]) }, { default: () => [p("div", { class: ee(["v-expansion-panel__shadow", ...i.value]) }, null), b(Be, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && b(Pu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && b(Iu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), bT = ["default", "accordion", "inset", "popout"], pT = z({ flat: Boolean, ...pl(), ...en(Ub(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ue(), ...pe(), ...Me(), variant: { type: String, default: "default", validator: (e) => bT.includes(e) } }, "VExpansionPanels"), ST = J()({ name: "VExpansionPanels", props: pT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Na(e, Xo), { themeClasses: o } = qe(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return mt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), te(() => b(e.tag, { class: ee(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), kT = z({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Le(Ir({ active: true }), ["location", "spaced"]), ...hl(), ...Zn(), ...ha({ transition: "fab-transition" }) }, "VFab"), wT = J()({ name: "VFab", props: kT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = ie(56), o = q(), { resizeRef: i } = wn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), c = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  $t(() => e.app, () => {
    const d = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: B(() => e.absolute) });
    ct(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const u = q();
  return te(() => {
    const d = ze.filterProps(e);
    return p("div", { ref: u, class: ee(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${c.value}`]: r.value }, e.class]), style: ve([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [p("div", { class: "v-fab__container" }, [b(Yt, { appear: e.appear, transition: e.transition }, { default: () => [at(b(ze, K({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Mn, e.active]])] })])]);
  }), {};
} });
function xT() {
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
const CT = z({ filterByType: String }, "file-accept");
function _T(e) {
  const t = _(() => e.filterByType ? VT(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function VT(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const IT = z({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Le(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ot(e).every((t) => t != null && typeof t == "object") }, ...CT(), ...mi({ clearable: true }) }, "VFileInput"), PT = J()({ name: "VFileInput", inheritAttrs: false, props: IT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { filterAccepted: i } = _T(e), r = we(e, "modelValue", e.modelValue, (R) => ot(R), (R) => !e.multiple && Array.isArray(R) ? R[0] : R), { isFocused: s, focus: c, blur: u } = pa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((R, $) => {
    let { size: Y = 0 } = $;
    return R + Y;
  }, 0)), v = _(() => _f(f.value, d.value)), S = _(() => (r.value ?? []).map((R) => {
    const { name: $ = "", size: Y = 0 } = R, j = M($);
    return e.showSize ? `${j} (${_f(Y, d.value)})` : j;
  })), m = _(() => {
    var _a3;
    const R = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, R, v.value) : o(e.counterString, R);
  }), y = q(), h = q(), k = q(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), w = ie(false), { handleDrop: g, hasFilesOrFolders: C } = xT();
  function x() {
    var _a3;
    k.value !== document.activeElement && ((_a3 = k.value) == null ? void 0 : _a3.focus()), s.value || c();
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
  function L(R) {
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
    const R = !!(l.counter || e.counter), $ = !!(R || l.details), [Y, j] = qn(n), { modelValue: O, ...U } = Ot.filterProps(e), ae = { ...La.filterProps(e), "onClick:clear": D }, ye = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, ne = n.accept ? String(n.accept) : void 0, fe = ye ? void 0 : e.filterByType ?? ne;
    return b(Ot, K({ ref: y, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": w.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": A }, Y, U, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Ae) => {
      let { id: xe, isDisabled: he, isDirty: F, isReadonly: H, isValid: Q, hasDetails: ue } = Ae;
      return b(La, K({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ae, { id: xe.value, active: I.value || F.value, dirty: F.value || e.dirty, disabled: he.value, focused: s.value, details: ue.value, error: Q.value === false, onDragover: T, onDrop: W }), { ...l, default: (oe) => {
        var _a3;
        let { props: { class: se, ...be }, controlRef: ce } = oe;
        return p(ge, null, [p("input", K({ ref: (G) => k.value = ce.value = G, type: "file", accept: fe, readonly: H.value, disabled: he.value, multiple: e.multiple, name: e.name, onClick: (G) => {
          G.stopPropagation(), H.value && G.preventDefault(), x();
        }, onChange: N, onDragleave: L, onFocus: x, onBlur: u }, be, j), null), p("div", { class: ee(se) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? S.value.map((G) => b(fa, { key: G, size: "small", text: G }, null)) : S.value.join(", "))])]);
      } });
    }, details: $ ? (Ae) => {
      var _a3, _b2;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Ae), R && p(ge, null, [p("span", null, null), b(Ar, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, y, h, k);
} }), AT = z({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Ht(), ...pe(), ...xt(), ...hl(), ...it(), ...Me({ tag: "footer" }), ...Ue() }, "VFooter"), TT = J()({ name: "VFooter", props: AT(), setup(e, t) {
  let { slots: n } = t;
  const a = q(), { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.color), { borderClasses: r } = qt(e), { elevationClasses: s } = It(e), { roundedClasses: c } = dt(e), u = ie(32), { resizeRef: d } = wn((v) => {
    v.length && (u.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? u.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const v = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ct(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), te(() => b(e.tag, { ref: d, class: ee(["v-footer", l.value, o.value, r.value, s.value, c.value, e.class]), style: ve([i.value, e.app ? a.value : { height: de(e.height) }, e.style]) }, n)), {};
} }), DT = z({ ...pe(), ...L_() }, "VForm"), ET = J()({ name: "VForm", props: DT(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = R_(e), o = q();
  function i(s) {
    s.preventDefault(), l.reset();
  }
  function r(s) {
    const c = s, u = l.validate();
    c.then = u.then.bind(u), c.catch = u.catch.bind(u), c.finally = u.finally.bind(u), a("submit", c), c.defaultPrevented || u.then((d) => {
      var _a3;
      let { valid: f } = d;
      f && ((_a3 = o.value) == null ? void 0 : _a3.submit());
    }), c.preventDefault();
  }
  return te(() => {
    var _a3;
    return p("form", { ref: o, class: ee(["v-form", e.class]), style: ve(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), MT = z({ color: String, ...Ht(), ...pe(), ...it(), ...Me({ tag: "kbd" }), ...Ue(), ...xt() }, "VKbd"), Au = J()({ name: "VKbd", props: MT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.color), { elevationClasses: s } = It(e);
  return te(() => b(e.tag, { class: ee(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: ve([r.value, e.style]) }, n)), {};
} });
function Kb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const qb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, BT = z({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => qb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...pe(), ...Ue(), ...Ht(), ...it(), ...xt(), color: String }, "VHotkey"), xs = Symbol("VHotkey:AND_DELINEATOR"), Cs = Symbol("VHotkey:SLASH_DELINEATOR"), Av = Symbol("VHotkey:THEN_DELINEATOR");
function $T(e, t, n) {
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
const FT = J()({ name: "VHotkey", props: BT(), setup(e) {
  const { t } = Qe(), { themeClasses: n } = qe(e), { rtlClasses: a } = _t(), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: c } = ba(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), u = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const k = [], I = iC(h);
    for (let V = 0; V < I.length; V++) {
      const w = I[V];
      V > 0 && k.push(Av);
      const { keys: g, separators: C } = sh(w);
      for (let x = 0; x < g.length; x++) {
        const A = g[x];
        x > 0 && k.push(C[x - 1] === "/" ? Cs : xs), k.push(Tv(e.keyMap, e.displayMode, A, u.value));
      }
    }
    return k;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const k = d.value.map((I) => {
      const V = [];
      for (const w of I) if (Array.isArray(w)) {
        const g = w[0] === "icon" || w[0] === "symbol" ? Tv(Rt(qb, e.keyMap), "text", String(w[1]), u.value)[1] : w[1];
        V.push(v(g));
      } else w === xs ? V.push(t("$vuetify.hotkey.plus")) : w === Cs ? V.push(t("$vuetify.hotkey.or")) : w === Av && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", k);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const k = $T(e.keyMap, String(h[2]), u.value);
    return v(k);
  }
  function m(h, k) {
    const I = e.variant === "contained", V = I ? "kbd" : Au, w = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return b(V, { key: k, class: ee(w), style: ve(I ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? b(Ye, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function y(h, k) {
    return p("span", { key: k, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === xs ? "+" : h === Cs ? "/" : t("$vuetify.hotkey.then")]);
  }
  te(() => {
    const h = p(ge, null, [e.prefix && p("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((k, I) => p("span", { class: "v-hotkey__combination", key: I }, [k.map((V, w) => Array.isArray(V) ? m(V, w) : y(V, w)), I < d.value.length - 1 && p("span", { "aria-hidden": "true" }, [Ke("\xA0")])])), e.suffix && p("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return p("div", { class: ee(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, c.value, e.class]), style: ve(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : b(Au, { key: "contained", class: ee(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: ve(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), LT = z({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Fc() }, "VHover"), RT = J()({ name: "VHover", props: LT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Lc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), OT = z({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...Me() }, "VInfiniteScroll"), Dv = Kt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return re(l, async (o) => {
    n("intersect", e.side, o);
  }), te(() => p("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Ke("\xA0")])), {};
} }), NT = J()({ name: "VInfiniteScroll", props: OT(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = q(), o = ie("ok"), i = ie("ok"), r = _(() => de(e.margin)), s = ie(false);
  function c(g) {
    if (!l.value) return;
    const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    l.value[C] = g;
  }
  function u() {
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
    l.value && (e.side === "start" ? c(d()) : e.side === "both" && c(d() / 2 - f() / 2));
  });
  function v(g, C) {
    g === "start" ? o.value = C : g === "end" ? i.value = C : g === "both" && (o.value = C, i.value = C);
  }
  function S(g) {
    return g === "start" ? o.value : i.value;
  }
  let m = 0;
  function y(g, C) {
    s.value = C, s.value && h(g);
  }
  function h(g) {
    if (e.mode !== "manual" && !s.value) return;
    const C = S(g);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(g, "loading");
    function x(A) {
      v(g, A), Ee(() => {
        A === "empty" || A === "error" || (A === "ok" && g === "start" && c(d() - m + u()), e.mode !== "manual" && Ee(() => {
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
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? p("div", null, [k(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? b(Ba, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? b(ze, { variant: "outlined", color: e.color, onClick: x }, { default: () => [k(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, A)) ?? b(Ba, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = wt(e);
  te(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return b(g, { ref: l, class: ee(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": x }]), style: ve(V.value) }, { default: () => {
      var _a3;
      return [p("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && A && b(Dv, { key: "start", side: "start", onIntersect: y, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), x && A && b(Dv, { key: "end", side: "end", onIntersect: y, rootMargin: r.value }, null), p("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
    } });
  });
  function w(g) {
    const C = g ?? e.side;
    v(C, "ok"), Ee(() => {
      C !== "end" && c(d() - m + u()), e.mode !== "manual" && Ee(() => {
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
} }), Xb = Symbol.for("vuetify:v-item-group"), HT = z({ ...pe(), ...pl({ selectedClass: "v-item--selected" }), ...Me(), ...Ue() }, "VItemGroup"), zT = J()({ name: "VItemGroup", props: HT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Xb);
  return () => b(e.tag, { class: ee(["v-item-group", a.value, e.class]), style: ve(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), WT = J()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Xb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), jT = z({ ...pe(), ...kt(), ...oh() }, "VLayout"), UT = J()({ name: "VLayout", props: jT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = rh(e), { dimensionStyles: s } = wt(e);
  return te(() => {
    var _a3;
    return p("div", { ref: r, class: ee([a.value, e.class]), style: ve([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), GT = z({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...pe(), ...hl() }, "VLayoutItem"), YT = J()({ name: "VLayoutItem", props: GT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return p("div", { class: ee(["v-layout-item", e.class]), style: ve([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), KT = z({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...pe(), ...kt(), ...Me(), ...ha({ transition: "fade-transition" }) }, "VLazy"), qT = J()({ name: "VLazy", directives: { vIntersect: Dn }, props: KT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = we(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return te(() => at(b(e.tag, { class: ee(["v-lazy", e.class]), style: ve([a.value, e.style]) }, { default: () => [l.value && b(Yt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Dn, { handler: o, options: e.options }, null]])), {};
} }), XT = z({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...pe() }, "VLocaleProvider"), ZT = J()({ name: "VLocaleProvider", props: XT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = qg(e);
  return te(() => {
    var _a3;
    return p("div", { class: ee(["v-locale-provider", a.value, e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), JT = z({ scrollable: Boolean, ...pe(), ...kt(), ...Me({ tag: "main" }) }, "VMain"), QT = J()({ name: "VMain", props: JT(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = ih(), { ssrBootStyles: o } = bl();
  return te(() => b(e.tag, { class: ee(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ve([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? p("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function eD(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ie(false), o = ie(0), i = _(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [c]: de(o.value) } : { top: a.value.top }];
  });
  Ct(() => {
    re(n, (c) => {
      c ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Nt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", u = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = u.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, S = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    u.height < window.innerHeight - d ? (l.value = "top", o.value = d) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (o.value = window.scrollY + u.top - S, l.value = true) : c === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : c === "up" && f <= 0 && (S ? l.value !== "top" && (o.value = -f + S + d, l.value = "top") : (o.value = u.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const tD = 100, nD = 20;
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
function aD() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Dg(nD))).push([l.timeStamp, o]);
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
    for (const c of o) {
      if (i[0] - c[0] > tD) break;
      r.push({ t: c[0], d: c[1].clientX }), s.push({ t: c[0], d: c[1].clientY });
    }
    return { x: Mv(r), y: Mv(s), get direction() {
      const { x: c, y: u } = this, [d, f] = [Math.abs(c), Math.abs(u)];
      return d > f && c >= 0 ? "right" : d > f && c <= 0 ? "left" : f > d && u >= 0 ? "down" : f > d && u <= 0 ? "up" : lD();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function lD() {
  throw new Error();
}
function oD(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Ct(() => {
    window.addEventListener("touchstart", k, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Nt(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: c, getVelocity: u } = aD();
  let d = false;
  const f = ie(false), v = ie(0), S = ie(0);
  let m;
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
    (P || E || n.value && a.value) && (m = [C, x], S.value = y(r.value ? C : x, n.value), v.value = h(r.value ? C : x), d = S.value > -20 && S.value < 80, c(g), s(g));
  }
  function I(g) {
    const C = g.changedTouches[0].clientX, x = g.changedTouches[0].clientY;
    if (d) {
      if (!g.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), E = Math.abs(x - m[1]);
      (r.value ? P > E && P > 3 : E > P && E > 3) ? (f.value = true, d = false) : (r.value ? E : P) > 3 && (d = false);
    }
    if (!f.value) return;
    g.preventDefault(), s(g);
    const A = h(r.value ? C : x, false);
    v.value = Math.max(0, Math.min(1, A)), A > 1 ? S.value = y(r.value ? C : x, true) : A < 0 && (S.value = y(r.value ? C : x, false));
  }
  function V(g) {
    if (d = false, !f.value) return;
    s(g), f.value = false;
    const C = u(g.changedTouches[0].identifier), x = Math.abs(C.x), A = Math.abs(C.y);
    (r.value ? x > A && x > 400 : A > x && A > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Pl()) : n.value = v.value > 0.5;
  }
  const w = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Pl(), transition: "none" } : void 0);
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
  }), { isDragging: f, dragProgress: v, dragStyles: w };
}
function Pl() {
  throw new Error();
}
const iD = ["start", "end", "left", "right", "top", "bottom"], rD = z({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => iD.includes(e) }, sticky: Boolean, ...Ht(), ...pe(), ...Fc(), ...gl({ mobile: null }), ...xt(), ...hl(), ...it(), ...Le(iy(), ["disableInitialFocus"]), ...Me({ tag: "nav" }), ...Ue() }, "VNavigationDrawer"), sD = J()({ name: "VNavigationDrawer", props: rD(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = _t(), { themeClasses: i } = qe(e), { borderClasses: r } = qt(e), { backgroundColorClasses: s, backgroundColorStyles: c } = Xe(() => e.color), { elevationClasses: u } = It(e), { displayClasses: d, mobile: f } = ln(e), { roundedClasses: v } = dt(e), S = bh(), m = we(e, "modelValue", null, ($) => !!$), { ssrBootStyles: y } = bl(), { scopeId: h } = kl(), k = q(), I = ie(false), { runOpenDelay: V, runCloseDelay: w } = Lc(e, ($) => {
    I.value = $;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Us(e.location, o.value)), x = B(() => e.persistent), A = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !A.value && C.value !== "bottom");
  ry(e, { isActive: m, localTop: A, contentEl: k }), $t(() => e.expandOnHover && e.rail != null, () => {
    re(I, ($) => a("update:rail", !$));
  }), $t(() => !e.disableResizeWatcher, () => {
    re(A, ($) => !e.permanent && Ee(() => m.value = !$));
  }), $t(() => !e.disableRouteWatcher && !!S, () => {
    re(S.currentRoute, () => A.value && (m.value = false));
  }), re(() => e.permanent, ($) => {
    $ && (m.value = true);
  }), e.modelValue == null && !A.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = oD({ el: k, isActive: m, isTemporary: A, width: g, touchless: B(() => e.touchless), position: C }), M = _(() => {
    const $ = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? $ * D.value : $;
  }), { layoutItemStyles: T, layoutItemScrimStyles: L } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: g, active: al(m), disableTransitions: B(() => E.value), absolute: _(() => e.absolute || P.value && typeof W.value != "string") }), { isStuck: W, stickyStyles: N } = eD({ rootEl: k, isSticky: P, layoutItemStyles: T }), Z = Xe(() => typeof e.scrim == "string" ? e.scrim : null), R = _(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return mt({ VList: { bgColor: "transparent" } }), te(() => {
    const $ = l.image || e.image;
    return p(ge, null, [b(e.tag, K({ ref: k, onMouseenter: V, onMouseleave: w, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": x.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, u.value, v.value, e.class], style: [c.value, T.value, y.value, N.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [$ && p("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? b(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : b(da, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && p("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), p("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && p("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), b(Da, { name: "fade-transition" }, { default: () => [A.value && (E.value || m.value) && !!e.scrim && p("div", K({ class: ["v-navigation-drawer__scrim", Z.backgroundColorClasses.value], style: [R.value, Z.backgroundColorStyles.value], onClick: () => {
      x.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: W };
} }), uD = Kt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = sy();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), cD = 50, dD = 500;
function fD(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  bt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), cD);
    }, dD);
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
const vD = z({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Le(gi(), ["modelValue", "validationValue"]) }, "VNumberInput"), mD = J()({ name: "VNumberInput", props: { ...vD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = q(), { holdStart: l, holdStop: o } = fD({ toggleUpDown: E }), i = ao(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = ie(e.focused), { decimalSeparator: c } = Qe(), u = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || c.value;
  });
  function d(O) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const ye = U == null ? String(O) : O.toFixed(U);
    if (s.value && ae) return Number(ye).toString().replace(".", u.value);
    if (e.minFractionDigits === null || U !== null && U < e.minFractionDigits) return ye.replace(".", u.value);
    let [ne, fe] = ye.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [ne, fe].filter(Boolean).join(u.value);
  }
  const f = we(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : Ze(Number(O), e.min, e.max)), v = ie(null), S = ie(null);
  re(f, (O) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(u.value, ".")) === O || (O == null ? (v.value = null, S.value = null) : isNaN(O) || (v.value = d(O), S.value = Number(v.value.replace(u.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(O) {
    if (O === null || O === "") {
      f.value = null, v.value = null, S.value = null;
      return;
    }
    const U = Number(O.replace(u.value, "."));
    isNaN(U) || (v.value = O, S.value = U, U <= e.max && U >= e.min && (f.value = U));
  } }), y = _(() => {
    var _a3;
    if (S.value === null) return false;
    const O = Number((_a3 = v.value) == null ? void 0 : _a3.replace(u.value, "."));
    return O !== Ze(O, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), k = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), w = B(() => I.value === "split" ? "$minus" : "$expand"), g = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), x = { props: { onClick: T, onPointerup: L, onPointerdown: W, onPointercancel: L } }, A = { props: { onClick: T, onPointerup: L, onPointerdown: N, onPointercancel: L } };
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
      m.value = d(Ze(0, e.min, e.max));
      return;
    }
    let U = Math.max(P(f.value), P(e.step));
    e.precision != null && (U = Math.max(U, e.precision)), O ? h.value && (m.value = d(f.value + e.step, U)) : k.value && (m.value = d(f.value - e.step, U));
  }
  function D(O) {
    var _a3;
    if (!O.data) return;
    const U = O.target, { value: ae, selectionStart: ye, selectionEnd: ne } = U ?? {}, fe = ae ? ae.slice(0, ye) + O.data + ae.slice(ne) : O.data, Ae = s0(fe, e.precision, u.value);
    if (new RegExp(`^-?\\d*${Yi(u.value)}?\\d*$`).test(fe) || (O.preventDefault(), U.value = Ae, Ee(() => m.value = Ae)), e.precision != null) {
      if (((_a3 = fe.split(u.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        O.preventDefault(), U.value = Ae, Ee(() => m.value = Ae);
        const xe = (ye ?? 0) + O.data.length;
        U.setSelectionRange(xe, xe);
      }
      e.precision === 0 && fe.endsWith(u.value) && (O.preventDefault(), U.value = Ae, Ee(() => m.value = Ae));
    }
  }
  async function M(O) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), O.stopPropagation(), Z(), await Ee(), O.key === "ArrowDown" ? E(false) : E());
  }
  function T(O) {
    O.stopPropagation();
  }
  function L(O) {
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
    const O = a.value.value, U = Number(O.replace(u.value, "."));
    O && !isNaN(U) ? m.value = d(Ze(U, e.min, e.max)) : m.value = null;
  }
  function R() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function $() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", u.value);
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
      return n.increment ? b(Be, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(x)] }) : b(ze, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: T, onPointerdown: W, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function ne() {
      return n.decrement ? b(Be, { key: "decrement-defaults", defaults: { VBtn: { disabled: !k.value, height: C.value, size: g.value, icon: w.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : b(ze, { "aria-hidden": "true", "data-testid": "decrement", disabled: !k.value, height: C.value, icon: w.value, key: "decrement-btn", onClick: T, onPointerdown: N, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return p("div", { class: "v-number-input__control" }, [ne(), b(vn, { vertical: I.value !== "stacked" }, null), ye()]);
    }
    function Ae() {
      return !e.hideInput && !e.inset ? b(vn, { vertical: true }, null) : void 0;
    }
    const xe = I.value === "split" ? p("div", { class: "v-number-input__control" }, [b(vn, { vertical: true }, null), ye()]) : e.reverse || I.value === "hidden" ? void 0 : p(ge, null, [Ae(), fe()]), he = n["append-inner"] || xe, F = I.value === "split" ? p("div", { class: "v-number-input__control" }, [ne(), b(vn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? p(ge, null, [fe(), Ae()]) : void 0, H = n["prepend-inner"] || F;
    return b(Gn, K({ ref: a }, ae, { modelValue: m.value, "onUpdate:modelValue": (Q) => m.value = Q, focused: s.value, "onUpdate:focused": (Q) => s.value = Q, validationValue: f.value, error: e.error || y.value || void 0, onBeforeinput: D, onFocus: Y, onBlur: j, onKeydown: M, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": he ? function() {
      var _a3;
      for (var Q = arguments.length, ue = new Array(Q), oe = 0; oe < Q; oe++) ue[oe] = arguments[oe];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ue), xe]);
    } : void 0, "prepend-inner": H ? function() {
      var _a3;
      for (var Q = arguments.length, ue = new Array(Q), oe = 0; oe < Q; oe++) ue[oe] = arguments[oe];
      return p(ge, null, [F, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...ue)]);
    } : void 0 });
  }), Pt({}, a);
} }), gD = z({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...gt(), ...kt(), ...fi(), ...en(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), hD = J()({ name: "VOtpInput", props: gD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: c } = pa(e), u = we(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Qe(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), S = q(-1), m = q(), y = q([]), h = _(() => y.value[S.value]);
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
    const E = u.value.slice(), D = h.value.value;
    E[S.value] = D;
    let M = null;
    S.value > u.value.length ? M = u.value.length + 1 : S.value + 1 !== f.value && (M = "next"), u.value = E, M && Qa(m.value, M);
  }
  function V() {
    k = false, I();
  }
  function w(E) {
    const D = u.value.slice(), M = S.value;
    let T = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? T = "prev" : E.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(E.key) && (D[S.value] = "", u.value = D, S.value > 0 && E.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = y.value[M]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      T != null && Qa(m.value, T);
    }));
  }
  function g(E, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const M = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", T = M.length - 1 === -1 ? E : M.length - 1;
    P(M) || (u.value = M.split(""), S.value = T);
  }
  function C() {
    u.value = [];
  }
  function x(E, D) {
    s(), S.value = D;
  }
  function A() {
    c(), S.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return mt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), re(u, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), re(S, (E) => {
    E < 0 || Ee(() => {
      var _a3;
      (_a3 = y.value[E]) == null ? void 0 : _a3.select();
    });
  }), te(() => {
    var _a3;
    const [E, D] = qn(n);
    return p("div", K({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [p("div", { ref: m, class: "v-otp-input__content", style: ve([i.value]) }, [v.value.map((M, T) => p(ge, null, [e.divider && T !== 0 && p("span", { class: "v-otp-input__divider" }, [e.divider]), b(La, { focused: r.value && e.focusAll || S.value === T, key: T }, { ...l, loader: void 0, default: () => p("input", { ref: (L) => y.value[T] = L, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: ee(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: u.value[T], onInput: I, onFocus: (L) => x(L, T), onBlur: A, onKeydown: w, onCompositionstart: () => k = true, onCompositionend: V, onPaste: (L) => g(T, L) }, null) })])), p("input", K({ class: "v-otp-input-input", type: "hidden" }, D, { value: u.value.join("") }), null), b(Un, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3.some((E) => E.blur());
  }, focus: () => {
    var _a3;
    (_a3 = y.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function yD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const bD = z({ scale: { type: [Number, String], default: 0.5 }, ...pe() }, "VParallax"), pD = J()({ name: "VParallax", props: bD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii(), { resizeRef: o, contentRect: i } = wn(), { height: r } = ln(), s = q();
  ct(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let c;
  re(l, (v) => {
    v ? (c = pr(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", f, { passive: true }), f()) : c.removeEventListener("scroll", f);
  }), Nt(() => {
    c == null ? void 0 : c.removeEventListener("scroll", f);
  }), re(r, f), re(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const u = _(() => 1 - Ze(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || Wn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const S = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, m = c instanceof Document ? window.scrollY : c.scrollTop, y = a.value.getBoundingClientRect().top + m, h = i.value.height, k = y + (h - S) / 2, I = yD((m - k) * u.value), V = Math.max(1, (u.value * (S - h) + h) / h);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return te(() => b(da, { class: ee(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: ve(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), SD = z({ ...Pr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), kD = J()({ name: "VRadio", props: SD(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = $a.filterProps(e);
    return b($a, K(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), wD = z({ height: { type: [Number, String], default: "auto" }, ...Le(Sa(), ["direction"]), ...Le(Ic(), ["multiple"]), trueIcon: { type: Ce, default: "$radioOn" }, falseIcon: { type: Ce, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), xD = J()({ name: "VRadioGroup", inheritAttrs: false, props: wD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = _(() => e.id || `radio-group-${l}`), i = we(e, "modelValue"), r = q();
  return te(() => {
    const [s, c] = qn(n), u = Ot.filterProps(e), d = $a.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return b(Ot, K({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, u, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: S, messagesId: m, isDisabled: y, isReadonly: h } = v;
      return p(ge, null, [f && b(no, { id: S.value }, { default: () => [f] }), b(Th, K(d, { id: S.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: y.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, c, { modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k }), a)]);
    } });
  }), Pt({}, r);
} }), CD = z({ ...fi(), ...Sa(), ...Zy(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), _D = J()({ name: "VRangeSlider", inheritAttrs: false, props: CD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = q(), i = q(), r = q(), { rtlClasses: s } = _t();
  function c(D) {
    if (!o.value || !i.value) return;
    const M = hu(D, o.value.$el, e.direction), T = hu(D, i.value.$el, e.direction), L = Math.abs(M), W = Math.abs(T);
    return L < W || L === W && M < 0 ? o.value.$el : i.value.$el;
  }
  const u = Jy(e), d = we(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => u.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: S, min: m, mousePressed: y, onSliderMousedown: h, onSliderTouchstart: k, position: I, trackContainerRef: V, disabled: w, readonly: g } = Qy({ props: e, steps: u, onSliderStart: () => {
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
    const [T, L] = d.value;
    if (w.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === L && T !== m.value && (f.value = M > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(M, L), L] : d.value = [T, Math.max(T, M)];
  }, getActiveThumb: c }), { isFocused: C, focus: x, blur: A } = pa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return te(() => {
    const D = Ot.filterProps(e), [M, T] = qn(l), L = !!(e.label || n.label || n.prepend);
    return b(Ot, K({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": y.value, "v-slider--disabled": w.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: L ? (W) => {
      var _a3, _b2;
      return p(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, W)) ?? (e.label ? b(no, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, W)]);
    } : void 0, default: (W) => {
      var _a3, _b2;
      let { id: N, messagesId: Z } = W;
      return p("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : k }, [p("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), p("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: w.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), b(eb, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), b(yu, K({ ref: o, "aria-describedby": Z.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (R) => d.value = [R, d.value[1]], onFocus: (R) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && R.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), b(yu, K({ ref: i, "aria-describedby": Z.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (R) => d.value = [d.value[0], R], onFocus: (R) => {
        var _a4, _b3, _c2, _d2;
        x(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[0] === S.value && R.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), VD = z({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ce, default: "$ratingEmpty" }, fullIcon: { type: Ce, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...pe(), ...gt(), ...Jn(), ...Me(), ...Ue() }, "VRating"), ID = J()({ name: "VRating", props: VD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { themeClasses: l } = qe(e), o = q(), i = we(e, "modelValue"), r = _(() => Ze(parseFloat(i.value), 0, Number(e.length))), s = _(() => Nn(Number(e.length), 1)), c = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), u = ie(-1), d = _(() => c.value.map((V) => {
    const w = e.hover && u.value > -1, g = r.value >= V, C = u.value >= V, A = (w ? C : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = g || C ? P : e.color;
    return { isFilled: g, isHovered: C, icon: A, color: E };
  })), f = _(() => [0, ...c.value].map((V) => {
    function w() {
      u.value = V;
    }
    function g() {
      u.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? w : void 0, onMouseleave: e.hover ? g : void 0, onClick: C };
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function S() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(V) {
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
    const { onMouseenter: x, onMouseleave: A, onClick: P } = f.value[g + 1], E = `${h.value}-${String(w).replace(".", "-")}`, D = g === v.value, M = { color: (_a3 = d.value[g]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[g]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return p(ge, null, [p("label", { for: E, class: ee({ "v-rating__item--half": e.halfIncrements && w % 1 > 0, "v-rating__item--full": e.halfIncrements && w % 1 === 0 }), onMouseenter: x, onMouseleave: A, onClick: P }, [p("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, w, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: M, value: w, index: g, rating: r.value }) : b(ze, K({ "aria-label": a(e.itemAriaLabel, w, e.length) }, M), null) : void 0]), p("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: w, checked: r.value === w, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? p("span", null, [V.label]) : p("span", null, [Ke("\xA0")]);
  }
  return te(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return b(e.tag, { class: ee(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: ve(e.style), ref: o }, { default: () => [b(k, { value: 0, index: -1, showStar: false }, null), s.value.map((w, g) => {
      var _a4, _b2;
      return p("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: w, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, p("div", { class: "v-rating__item" }, [e.halfIncrements ? p(ge, null, [b(k, { value: w - 0.5, index: g * 2 }, null), b(k, { value: w, index: g * 2 + 1 }, null)]) : b(k, { value: w, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: w, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), PD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function AD(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return p("div", { class: ee(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Bv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Gr(t));
}
function Gr(e) {
  let t = [];
  if (!e) return t;
  const n = PD[e];
  if (e !== n) {
    if (e.includes(",")) return $v(e);
    if (e.includes("@")) return Bv(e);
    n.includes(",") ? t = $v(n) : n.includes("@") ? t = Bv(n) : n && t.push(Gr(n));
  }
  return [AD(e, t)];
}
function $v(e) {
  return e.replace(/\s/g, "").split(",").map(Gr);
}
const TD = z({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...xt(), ...Ue() }, "VSkeletonLoader"), DD = J()({ name: "VSkeletonLoader", inheritAttrs: false, props: TD(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = qe(e), { t: c } = Qe(), u = _(() => Gr(ot(e.type).join(",")));
  return te(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: c(e.loadingText), role: "alert" };
    return d ? p("div", K({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [u.value]) : p(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), ED = J()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Pc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function MD(e) {
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
    const c = performance.now();
    n = window.setInterval(() => {
      const u = performance.now() - c + s;
      t.value = Math.max(e() - u, 0), t.value <= 0 && a();
    }, s);
  }
  return bt(a), { clear: a, time: t, start: o, reset: l };
}
const Zb = z({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Zn({ location: "bottom" }), ...eo(), ...it(), ...bn(), ...Ue(), ...Le(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Tu = J()({ name: "VSnackbar", props: Zb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { positionClasses: l } = to(e), { scopeId: o } = kl(), { themeClasses: i } = qe(e), { colorClasses: r, colorStyles: s, variantClasses: c } = ba(e), { roundedClasses: u } = dt(e), d = MD(() => Number(e.timeout)), f = q(), v = q(), S = ie(false), m = ie(0), y = q(), h = We(No, void 0);
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
    const D = ic(v.value);
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
    m.value = E.touches[0].clientY;
  }
  function x(E) {
    Math.abs(m.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function A() {
    S.value && g();
  }
  const P = _(() => e.location.split(" ").reduce((E, D) => (E[`v-snackbar--${D}`] = true, E), {}));
  return te(() => {
    const E = Un.filterProps(e), D = !!(n.default || n.text || e.text);
    return b(Un, K({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [y.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: K({ class: ["v-snackbar__wrapper", i.value, r.value, u.value, c.value], style: [s.value], onPointerenter: w, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: x, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ya(false, "v-snackbar"), e.timer && !S.value && p("div", { key: "timer", class: "v-snackbar__timer" }, [b(_r, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && p("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && b(Be, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [p("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), BD = z({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Le(Zb(), ["modelValue"]) }, "VSnackbarQueue"), $D = J()({ name: "VSnackbarQueue", props: BD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = ie(false), i = ie(false), r = ie();
  re(() => e.modelValue.length, (f, v) => {
    !i.value && f > v && c();
  }), re(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? c() : (r.value = void 0, i.value = false);
  }
  function c() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Ee(() => {
      o.value = true;
    });
  }
  function u() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  te(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...S } = Tu.filterProps(e);
    return p(ge, null, [i.value && !!r.value && (a.default ? b(Be, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : b(Tu, K(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => p(ge, null, [a.actions ? b(Be, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: u } })] }) : b(ze, K(d.value, { onClick: u }), null)]) : void 0 }))]);
  });
} }), Jb = z({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Qb = z({ autoLineWidth: Boolean, ...Jb() }, "VBarline"), Fv = J()({ name: "VBarline", props: Qb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), u = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y)));
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
    const y = [], h = d(u.value, c.value), k = h.length;
    for (let I = 0; y.length < k; I++) {
      const V = h[I];
      let w = e.labels[I];
      w || (w = typeof V == "object" ? V.value : V), y.push({ x: V.x, value: String(w) });
    }
    return y;
  }), v = _(() => d(u.value, c.value)), S = _(() => v.value.length === 1 ? (c.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  te(() => {
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block" }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => p("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), p("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => p("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !Wn() && p(ge, null, [p("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), p("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, k) => {
      var _a3;
      return p("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), p("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [p("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function FD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], c = e[r - 1] || l, u = s && LD(s, i, c);
    if (!s || u) return `L${i.x} ${i.y}`;
    const d = Math.min(Lv(c, i), Lv(s, i)), v = d / 2 < t ? d / 2 : t, S = Rv(c, i, v), m = Rv(s, i, v);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Ii(e) {
  return parseInt(e, 10);
}
function LD(e, t, n) {
  return Ii(e.x + n.x) === Ii(2 * t.x) && Ii(e.y + n.y) === Ii(2 * t.y);
}
function Lv(e, t) {
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
  const c = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), u = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const y = Number(e.padding);
    return { minX: y, maxX: d.value - y, minY: y, maxY: parseInt(e.height, 10) - y };
  }), v = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y))), S = _(() => {
    const y = [], h = s(v.value, f.value), k = h.length;
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
  function m(y) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return FD(s(v.value, f.value), h, y, parseInt(e.height, 10));
  }
  te(() => {
    var _a3;
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, k) => p("stop", { offset: k / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), c.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, k) => {
      var _a4;
      return p("text", { x: h.x + u.value / 2 + u.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: k, value: h.value })) ?? h.value]);
    })]), p("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && p("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), RD = z({ type: { type: String, default: "trend" }, ...Qb(), ...ep() }, "VSparkline"), OD = J()({ name: "VSparkline", props: RD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  te(() => {
    const r = e.type === "trend" ? Ov : Fv, s = e.type === "trend" ? Ov.filterProps(e) : Fv.filterProps(e);
    return b(r, K({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), ND = z({ ...pe(), ...dy({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), HD = J()({ name: "VSpeedDial", props: ND(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), l = q(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return te(() => {
    const r = ql.filterProps(e);
    return b(ql, K(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => b(Be, { defaults: { VBtn: { size: "small" } } }, { default: () => [b(Yt, { appear: true, group: true, transition: e.transition }, { default: () => {
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
    return p("div", { class: "v-stepper-actions" }, [b(Be, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? b(ze, r, null)];
    } }), b(Be, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? b(ze, s, null)];
    } })]);
  }), {};
} }), ap = ga("v-stepper-header"), zD = z({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ce, default: "$complete" }, editable: Boolean, editIcon: { type: Ce, default: "$edit" }, error: Boolean, errorIcon: { type: Ce, default: "$error" }, icon: Ce, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), WD = z({ ...zD(), ...Sl() }, "VStepperItem"), lp = J()({ name: "VStepperItem", directives: { vRipple: Ft }, props: WD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, md, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), c = _(() => e.complete || e.rules.length > 0 && o.value), u = _(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: c.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return te(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return at(p("button", { class: ee(["v-stepper-item", { "v-stepper-item--complete": c.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ya(true, "v-stepper-item"), b(hn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (u.value ? b(Ye, { icon: u.value }, null) : l.value)];
    } }), p("div", { class: "v-stepper-item__content" }, [v && p("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && p("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Ft, e.editable && e.ripple, null]]);
  }), {};
} }), jD = z({ ...Le(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), op = J()({ name: "VStepperWindow", props: jD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(md, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return te(() => {
    const i = sl.filterProps(e);
    return b(sl, K({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), UD = z({ ...$r() }, "VStepperWindowItem"), ip = J()({ name: "VStepperWindowItem", props: UD(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = ul.filterProps(e);
    return b(ul, K({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), GD = z({ altLabels: Boolean, bgColor: String, completeIcon: Ce, editIcon: Ce, editable: Boolean, errorIcon: Ce, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...gl() }, "Stepper"), YD = z({ ...GD(), ...pl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Nc(), ...en(tp(), ["prevText", "nextText"]) }, "VStepper"), KD = J()({ name: "VStepper", props: YD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Na(e, md), { displayClasses: r, mobile: s } = ln(e), { completeIcon: c, editIcon: u, errorIcon: d, color: f, editable: v, prevText: S, nextText: m } = Zl(e), y = _(() => e.items.map((I, V) => {
    const w = pt(I, e.itemTitle, I), g = pt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : pt(I, e.itemProps), x = { title: w, value: g, ...C };
    return { title: x.title, value: x.value, props: x, raw: I };
  })), h = _(() => a.value.findIndex((I) => i.value.includes(I.id))), k = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return mt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: c, editIcon: u, prevText: S, nextText: m }, VStepperActions: { color: f, disabled: k, prevText: S, nextText: m } }), te(() => {
    const I = Fa.filterProps(e), V = !!(n.header || e.items.length), w = e.items.length > 0, g = !e.hideActions && !!(w || n.actions);
    return b(Fa, K(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && b(ap, { key: "stepper-header" }, { default: () => [y.value.map((C, x) => {
        let { raw: A, ...P } = C;
        return p(ge, null, [!!x && b(vn, null, null), b(lp, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), w && b(op, { key: "stepper-window" }, { default: () => [y.value.map((C) => b(ip, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? b(np, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), qD = z({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ...Pr() }, "VSwitch"), XD = J()({ name: "VSwitch", inheritAttrs: false, props: qD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "indeterminate"), o = we(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: c } = pa(e), u = q(), d = q(), f = oc && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), m = B(() => e.id || `switch-${S}`);
  function y() {
    l.value && (l.value = false);
  }
  function h(k) {
    var _a3, _b2;
    k.stopPropagation(), k.preventDefault(), (_b2 = (_a3 = u.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return te(() => {
    const [k, I] = qn(n), V = Ot.filterProps(e), w = $a.filterProps(e);
    return b(Ot, K({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, k, V, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: m.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: x, isDisabled: A, isReadonly: P, isValid: E } = g;
      const D = { model: o, isValid: E };
      return b($a, K({ ref: u }, w, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, y], id: C.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: c }, I), { ...a, default: (M) => {
        let { backgroundColorClasses: T, backgroundColorStyles: L } = M;
        return p("div", { class: ee(["v-switch__track", f ? void 0 : T.value]), style: ve(L.value), onClick: h }, [a["track-true"] && p("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && p("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: T, icon: L, backgroundColorClasses: W, backgroundColorStyles: N } = M;
        return p(ge, null, [T, p("div", { class: ee(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : W.value]), style: ve(e.inset ? void 0 : N.value) }, [a.thumb ? b(Be, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: L })] }) : b(wc, null, { default: () => [e.loading ? b(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (Z) => a.loader ? a.loader(Z) : b(Ba, { active: Z.isActive, color: Z.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && b(Ye, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), ZD = z({ color: String, height: [Number, String], window: Boolean, ...pe(), ...xt(), ...hl(), ...it(), ...Me(), ...Ue() }, "VSystemBar"), JD = J()({ name: "VSystemBar", props: ZD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), { ssrBootStyles: s } = bl(), c = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: u } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: ie("top"), layoutSize: c, elementSize: c, active: _(() => true), absolute: B(() => e.absolute) });
  return te(() => b(e.tag, { class: ee(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: ve([o.value, u.value, s.value, e.style]) }, n)), {};
} }), gd = Symbol.for("vuetify:v-tabs"), rp = z({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Le(Ir({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), sp = J()({ name: "VTab", props: rp(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Et(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.sliderColor), s = q(), c = q(), u = _(() => e.direction === "horizontal"), d = _(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(y, h) {
    return { opacity: [0, 1] };
  }
  function v(y, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function S(y, h) {
    const k = h.getBoundingClientRect(), I = y.getBoundingClientRect(), V = u.value ? "x" : "y", w = u.value ? "X" : "Y", g = u.value ? "right" : "bottom", C = u.value ? "width" : "height", x = k[V], A = I[V], P = x > A ? k[g] - I[g] : k[V] - I[V], E = Math.sign(P) > 0 ? u.value ? "right" : "bottom" : Math.sign(P) < 0 ? u.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? k[C] : I[C])) / Math.max(k[C], I[C]) || 0, T = k[C] / I[C] || 0, L = 1.5;
    return { transform: [`translate${w}(${P}px) scale${w}(${T})`, `translate${w}(${P / L}px) scale${w}(${(M - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(y) {
    var _a3, _b2;
    let { value: h } = y;
    if (h) {
      const k = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = c.value;
      if (!k || !I) return;
      const V = getComputedStyle(k).backgroundColor, w = { fade: f, grow: v, shift: S }[e.sliderTransition ?? "shift"] ?? S, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      aa(I, { backgroundColor: [V, V], ...w(I, k) }, { duration: g, easing: Fo });
    }
  }
  return te(() => {
    const y = ze.filterProps(e);
    return b(ze, K({ symbol: gd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, y, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return p(ge, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && p("div", { ref: c, class: ee(["v-tab__slider", e.inset ? i.value : l.value]), style: ve([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), QD = z({ ...Le(Br(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), up = J()({ name: "VTabsWindow", props: QD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(gd, null), l = we(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return te(() => {
    const i = sl.filterProps(e);
    return b(sl, K({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), eE = z({ ...$r() }, "VTabsWindowItem"), cp = J()({ name: "VTabsWindowItem", props: eE(), setup(e, t) {
  let { slots: n } = t;
  return te(() => {
    const a = ul.filterProps(e);
    return b(ul, K({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function tE(e) {
  return e ? e.map((t) => il(t) ? t : { text: t, value: t }) : [];
}
const nE = z({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...en(rp(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Ac({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...gt(), ...Me() }, "VTabs"), aE = J()({ name: "VTabs", props: nE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = we(e, "modelValue"), o = _(() => tE(e.items)), { densityClasses: i } = Lt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { scopeId: c } = kl();
  return mt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), te(() => {
    const u = Uo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return p(ge, null, [b(Uo, K(u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": de(e.height), "--v-tabs-inset-padding": e.inset ? de(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? de(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: gd }, c, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? b(sp, K(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && b(up, K({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, c), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? b(cp, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), lE = z({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...fy(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextarea"), oE = J()({ name: "VTextarea", directives: { vIntersect: Dn }, inheritAttrs: false, props: lE(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = we(e, "modelValue"), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: c } = vy(e), u = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = q(), v = q(), S = ie(""), m = q(), y = q(0), { platform: h } = ln(), k = Hc(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a3;
    k.isSuppressing.value && k.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
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
    const W = L.value, N = L.selectionStart, Z = L.selectionEnd;
    o.value = W, Ee(() => {
      let R = 0;
      W.trimStart().length === L.value.length && (R = W.length - L.value.length), N != null && (L.selectionStart = N - R), Z != null && (L.selectionEnd = Z - R);
    });
  }
  const A = q(), P = q(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
  ct(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Ee(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        y.value = 12;
        return;
      }
      const { offsetWidth: T, clientWidth: L } = m.value;
      y.value = Math.max(0, T - L);
    }), e.autoGrow && Ee(() => {
      if (!A.value || !v.value) return;
      const T = getComputedStyle(A.value), L = getComputedStyle(v.value.$el), W = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), N = A.value.scrollHeight, Z = parseFloat(T.lineHeight), R = Math.max(parseFloat(e.rows) * Z + W, parseFloat(L.getPropertyValue("--v-input-control-height"))), $ = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Z + W || 1 / 0, Y = Ze(N ?? 0, R, $);
      P.value = Math.floor((Y - W) / Z), S.value = de(Y);
    });
  }
  Ct(D), re(o, D), re(() => e.rows, D), re(() => e.maxHeight, D), re(() => e.maxRows, D), re(() => e.density, D), re(P, (T) => {
    a("update:rows", T);
  });
  let M;
  return re(A, (T) => {
    T ? (M = new ResizeObserver(D), M.observe(A.value)) : M == null ? void 0 : M.disconnect();
  }), Nt(() => {
    M == null ? void 0 : M.disconnect();
  }), te(() => {
    const T = !!(l.counter || e.counter || e.counterValue), L = !!(T || l.details), [W, N] = qn(n), { modelValue: Z, ...R } = Ot.filterProps(e), $ = { ...La.filterProps(e), "onClick:clear": C };
    return b(Ot, K({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Y) => o.value = Y, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? de(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": de(y.value) }, e.style] }, W, R, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (Y) => {
      let { id: j, isDisabled: O, isDirty: U, isReadonly: ae, isValid: ye, hasDetails: ne } = Y;
      return b(La, K({ ref: v, style: { "--v-textarea-control-height": S.value }, onClick: w, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, $, { id: j.value, active: I.value || U.value, labelId: `${j.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: U.value || e.dirty, disabled: O.value, focused: i.value, details: ne.value, error: ye.value === false }), { ...l, default: (fe) => {
        let { props: { class: Ae, ...xe }, controlRef: he } = fe;
        return p(ge, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), at(p("textarea", K({ ref: (F) => m.value = he.value = F, class: Ae, value: o.value, onInput: x, autofocus: e.autofocus, readonly: ae.value, disabled: O.value, placeholder: e.placeholder, rows: e.rows, name: k.fieldName.value, autocomplete: k.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${j.value}-label` }, xe, N), null), [[Dn, { handler: c }, null, { once: true }]]), e.autoGrow && at(p("textarea", { class: ee([Ae, "v-textarea__sizer"]), id: `${xe.id}-sizer`, "onUpdate:modelValue": (F) => o.value = F, ref: A, readonly: true, "aria-hidden": "true" }, null), [[Rk, o.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (Y) => {
      var _a3;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Y), T && p(ge, null, [p("span", null, null), b(Ar, { active: e.persistentCounter || i.value, value: u.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, v, m);
} }), iE = z({ withBackground: Boolean, ...pe(), ...Ue(), ...Me() }, "VThemeProvider"), rE = J()({ name: "VThemeProvider", props: iE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e);
  return () => {
    var _a3;
    return e.withBackground ? b(e.tag, { class: ee(["v-theme-provider", a.value, e.class]), style: ve(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), sE = z({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ce, iconColor: String, lineColor: String, ...pe(), ...it(), ...Jn(), ...xt() }, "VTimelineDivider"), uE = J()({ name: "VTimelineDivider", props: sE(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ql(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Xe(() => e.dotColor), { roundedClasses: r } = dt(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: c, backgroundColorStyles: u } = Xe(() => e.lineColor);
  return te(() => p("div", { class: ee(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ve(e.style) }, [p("div", { class: ee(["v-timeline-divider__before", c.value]), style: ve(u.value) }, null), !e.hideDot && p("div", { key: "dot", class: ee(["v-timeline-divider__dot", s.value, r.value, a.value]), style: ve(l.value) }, [p("div", { class: ee(["v-timeline-divider__inner-dot", i.value, r.value]), style: ve(o.value) }, [n.default ? b(Be, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : b(Ye, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), p("div", { class: ee(["v-timeline-divider__after", c.value]), style: ve(u.value) }, null)])), {};
} }), dp = z({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ce, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...pe(), ...kt(), ...xt(), ...it(), ...Jn(), ...Me() }, "VTimelineItem"), cE = J()({ name: "VTimelineItem", props: dp(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = ie(0), o = q();
  return re(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), te(() => {
    var _a3, _b2;
    return p("div", { class: ee(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ve([{ "--v-timeline-dot-size": de(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${de(e.lineInset)})` : de(0) }, e.style]) }, [p("div", { class: "v-timeline-item__body", style: ve(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), b(uE, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && p("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), dE = z({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...en(dp({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...pe(), ...gt(), ...Me(), ...Ue() }, "VTimeline"), fE = J()({ name: "VTimeline", props: dE(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Lt(e), { rtlClasses: o } = _t();
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
  return te(() => b(e.tag, { class: ee(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: ve([{ "--v-timeline-line-thickness": de(e.lineThickness) }, e.style]) }, n)), {};
} }), vE = z({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Du = J()({ name: "VTimePickerClock", props: vE(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = q(null), l = q(null), o = q(void 0), i = q(false), r = q(null), s = q(null), c = Ag(($) => n("change", $), 750), { textColorClasses: u, textColorStyles: d } = Et(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Xe(() => e.color), S = _(() => e.max - e.min + 1), m = _(() => e.double ? S.value / 2 : S.value), y = _(() => 360 / m.value), h = _(() => y.value * Math.PI / 180), k = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
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
    j !== e.displayedValue && w(j), c(j);
  }
  function x($) {
    return e.double && $ - e.min >= m.value;
  }
  function A($) {
    return x($) ? I.value : 1;
  }
  function P($) {
    const Y = e.rotate * Math.PI / 180;
    return { x: Math.sin(($ - e.min) * h.value + Y) * A($), y: -Math.cos(($ - e.min) * h.value + Y) * A($) };
  }
  function E($, Y) {
    const j = (Math.round($ / y.value) + (Y ? m.value : 0)) % S.value + e.min;
    return $ < 360 - y.value / 2 ? j : Y ? e.max - m.value + 1 : e.min;
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
  function L($) {
    r.value === null && (r.value = $), s.value = $, w($);
  }
  function W($) {
    var _a3, _b2;
    if ($.preventDefault(), !i.value && $.type !== "click" || !a.value) return;
    const { width: Y, top: j, left: O } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: U } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ae, clientY: ye } = "touches" in $ ? $.touches[0] : $, ne = { x: Y / 2, y: -Y / 2 }, fe = { x: ae - O, y: j - ye }, Ae = Math.round(T(ne, fe) - e.rotate + 360) % 360, xe = e.double && M(ne, fe) < (U + U * I.value) / 4, he = Math.ceil(15 / y.value);
    let F;
    for (let H = 0; H < he; H++) if (F = E(Ae + H * y.value, xe), g(F) || (F = E(Ae - H * y.value, xe), g(F))) return L(F);
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
  bt(R), te(() => p("div", { class: ee([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [p("div", { class: "v-time-picker-clock__inner", ref: l }, [p("div", { class: ee([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": x(e.modelValue) }, u.value]), style: ve([{ transform: `rotate(${e.rotate + y.value * (k.value - e.min)}deg) scaleY(${A(k.value)})` }, d.value]) }, null), V.value.map(($) => {
    const Y = $ === k.value;
    return p("div", { class: ee([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Y, "v-time-picker-clock__item--disabled": e.disabled || !g($) }, Y && f.value]), style: ve([D($), Y && v.value]) }, [p("span", null, [e.format($)])]);
  })])]));
} }), mE = z({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), _s = J()({ name: "VTimePickerField", props: mE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = q(), i = ie(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const c = s.target;
      c.value = "", n("update:modelValue", null);
    }
  }
  return te(() => b(Gn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ee(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: ve(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function rn(e) {
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
function gE(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function hE(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const vp = z({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function mp(e) {
  const t = _(() => {
    const o = e.min ? Number(e.min.split(":")[0]) : 0, i = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < o || r > i ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = _(() => {
    const [o, i] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], c = o * 60 + i, u = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const v = 60 * d + f;
        if (v < c || v > u) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = _(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, c, u] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + c * 60 + (u || 0);
    return (v, S, m) => {
      if (v !== null && S !== null) {
        const y = 3600 * v + 60 * S + m;
        if (y < d || y > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const u = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, c, v), d = o === "hour" ? (v) => gE(v, r).value : (v) => hE(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !u(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const yE = z({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...vp() }, "VTimePickerControls"), Eu = J()({ name: "VTimePickerControls", props: yE(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = mp(e), s = _(() => e.hour !== null ? e.ampm ? Vo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), c = _(() => e.minute !== null ? Number(e.minute) : null), u = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, c.value, Number(e.second))) ?? true;
  }), v = { in: (M) => {
    if (M == null || isNaN(Number(M))) return null;
    const T = Number(M);
    return e.ampm ? rn(fp(T)) : rn(T);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T === null ? null : e.ampm ? Vo(T, e.period ?? "am") : Ze(T, 0, 23);
  } }, S = we(e, "hour", void 0, v.in, v.out), m = { in: (M) => M != null && !isNaN(Number(M)) ? rn(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T !== null ? Ze(T, 0, 59) : null;
  } }, y = we(e, "minute", void 0, m.in, m.out), h = we(e, "second", void 0, m.in, m.out);
  function k(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = e.period === "am", L = e.ampm ? Vo(Number(S.value ?? 0), T ? "am" : "pm") : Number(S.value ?? 0), W = r("hour", L, M.key === "ArrowUp"), N = T && W >= 12 || !T && W < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Ee(() => S.value = rn(W))) : S.value = rn(W);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(y.value ?? 0), L = r("minute", T, M.key === "ArrowUp", s.value);
    y.value = rn(L);
  }
  function V(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(h.value ?? 0), L = r("second", T, M.key === "ArrowUp", s.value, c.value);
    h.value = rn(L);
  }
  function w(M, T, L) {
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
          W.preventDefault(), N.value = Y.trim().substring(0, 2), L(N.value), W.data.trim().length === 1 && N.setSelectionRange(1, 1);
          return;
        }
        if (R === $ && $ === 1 && Z.startsWith("0")) {
          W.preventDefault(), N.value = Y.trim().substring(0, 2), L(N.value);
          return;
        }
        const O = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(Y) > O) {
          W.preventDefault(), N.value = rn(String(co(W.data)).substring(0, 2)), L(N.value);
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
    Ee(() => S.value = rn(T));
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
  const P = w(v.out, (M) => v.in(M) === S.value, (M) => S.value = M), E = w(m.out, (M) => m.in(M) === y.value, (M) => y.value = M), D = w(m.out, (M) => m.in(M) === h.value, (M) => h.value = M);
  return te(() => p("div", { class: "v-time-picker-controls" }, [p("div", { class: ee({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [b(_s, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: u.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: k, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), p("span", { class: "v-time-picker-controls__time__separator" }, [Ke(":")]), b(_s, { ref: x, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (M) => y.value = M, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && p("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Ke(":")]), e.useSeconds && p(ge, null, [b(_s, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && p("div", { class: "v-time-picker-controls__ampm" }, [b(ze, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), b(ze, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ee({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), bE = z({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...vp(), ...Le(Fr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...gt() }, "VTimePicker"), pE = J()({ name: "VTimePicker", props: bE(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), { densityClasses: o } = Lt(e), i = q(null), r = q(null), s = q(null), c = q(null), u = q(null), d = q(null), f = we(e, "period", "am"), v = we(e, "viewMode", "hour"), S = q(null), m = q(null), y = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: k, isAllowedSecond: I } = mp(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function w() {
    const P = g();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  re(i, w), re(r, w), re(s, w), re(() => e.modelValue, (P) => C(P)), re(() => e.useSeconds, (P, E) => {
    E && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), Ct(() => {
    C(e.modelValue);
  });
  function g() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${rn(i.value)}:${rn(r.value)}` + (e.useSeconds ? `:${rn(s.value)}` : "") : null;
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
    v.value === "hour" ? i.value = y.value ? Vo(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
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
    const E = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === c.value && r.value === u.value && (!e.useSeconds || s.value === d.value) || g() === null) && (c.value = i.value, u.value = r.value, e.useSeconds && (d.value = s.value), E && w());
  }
  te(() => {
    const P = Le(Xl.filterProps(e), ["hideHeader"]), E = Eu.filterProps(e), D = Du.filterProps(Le(e, ["format", "modelValue", "min", "max"])), M = v.value === "hour" ? h.value : v.value === "minute" ? (T) => k.value(i.value, T) : (T) => I.value(i.value, r.value, T);
    return b(Xl, K(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => b(Eu, K(E, { ampm: y.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => v.value = T, ref: S }), null), default: () => b(Du, K(D, { allowedValues: M, double: v.value === "hour" && !y.value, format: v.value === "hour" ? y.value ? fp : (T) => T : (T) => rn(T, 2), max: v.value === "hour" ? y.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && y.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: A, onInput: x, ref: m }), null), actions: a.actions });
  });
} }), SE = z({ ...pe(), ...bn({ variant: "text" }) }, "VToolbarItems"), kE = J()({ name: "VToolbarItems", props: SE(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), te(() => {
    var _a3;
    return p("div", { class: ee(["v-toolbar-items", e.class]), style: ve(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), wE = z({ id: String, interactive: Boolean, text: String, ...Le(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), gp = J()({ name: "VTooltip", props: wE(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = we(e, "modelValue"), { scopeId: l } = kl(), o = Mt(), i = B(() => e.id || `v-tooltip-${o}`), r = q(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), u = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => K({ "aria-describedby": i.value }, e.activatorProps));
  return te(() => {
    const f = Un.filterProps(e);
    return b(Un, K({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: u.value, absolute: true, location: s.value, origin: c.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, S = new Array(v), m = 0; m < v; m++) S[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), Pt({}, r);
} }), xE = z({ ...Le(Gh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Mu = J()({ name: "VTreeviewGroup", props: xE(), setup(e, t) {
  let { slots: n } = t;
  const a = q(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return te(() => {
    const i = Go.filterProps(e);
    return b(Go, K(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => p(ge, null, [b(Be, { defaults: o.value }, { default: () => {
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
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), c = _(() => {
    var _a3;
    return l.value && !l.value.has(Te((_a3 = o.value) == null ? void 0 : _a3.id));
  });
  function u(f) {
    var _a3, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a3 = o.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return te(() => {
    var _a3;
    const f = xn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return b(xn, K({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": c.value }, e.class], role: "treeitem", ripple: false, onClick: u }), { ...n, prepend: v ? (S) => {
      var _a4;
      return p(ge, null, [e.indentLines && e.indentLines.length > 0 ? p("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => p("div", { class: ee(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && b(Bc, { start: true }, { default: () => [e.toggleIcon ? p(ge, null, [n.toggle ? b(Be, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : b(ze, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => b(Ba, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : p("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? b(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : p(ge, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && b(hn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ye, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), bp = z({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, falseIcon: Ce, trueIcon: Ce, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...en(yp(), ["hideActions"]), ...gt() }, "VTreeviewChildren"), ar = J()({ name: "VTreeviewChildren", props: bp(), setup(e, t) {
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
  function r(s, c) {
    e.selectable && s(c);
  }
  return () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((s, c, u) => {
      var _a4, _b3;
      const { children: d, props: f } = s, v = a.has(s.value), S = !!((_a4 = u.at(c + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, y = u.length - 1 === c, h = { index: c, depth: m, isFirst: c === 0, isLast: y, path: [...e.path, c], hideAction: e.hideActions }, k = j0({ depth: m, isLast: y, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return p(ge, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && b(Bc, { start: true }, { default: () => [b(En, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (x) => r(C.select, x), onClick: (x) => x.stopPropagation(), onKeydown: (x) => {
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
      return d ? b(Mu, K(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: x, isOpen: A } = C;
        const P = { ...f, ...x, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: k.node, ariaExpanded: A, onToggleExpand: [() => i(s), x.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), x.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[c]) == null ? void 0 : _a5.select, !((_b4 = l.value[c]) == null ? void 0 : _b4.isSelected));
        } };
        return wi(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => b(Bu, K({ ref: (E) => l.value[c] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a5;
        return p(ge, null, [b(ar, K(w, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: k.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: v })]);
      } }) : wi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? wi(n.divider, { props: s.raw }, () => b(vn, s.props, null)) : s.type === "subheader" ? wi(n.subheader, { props: s.raw }, () => b(lo, s.props, null)) : b(Bu, K(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: k.leaf, value: e.returnObject ? Te(s.raw) : f.value }), I));
    }));
  };
} });
function pp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && pp(n.children, t);
  return t;
}
const CE = z({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Le(bp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Le(ty({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), _E = J()({ name: "VTreeview", props: CE(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Qe(), { items: o } = ey(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), c = we(e, "activated"), u = we(e, "selected"), d = _({ get: () => e.modelValue ?? u.value, set(V) {
    u.value = V, a("update:modelValue", V);
  } }), f = q(), v = _(() => e.openAll ? I(o.value) : e.opened), S = _(() => pp(o.value)), m = B(() => e.search), { filteredItems: y } = xl(e, S, m), h = _(() => {
    var _a3;
    if (!m.value) return null;
    const V = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return V ? new Set(y.value.flatMap((w) => {
      const g = e.returnObject ? w.raw : w.props.value;
      return [...V(g), ...k(g)].map(Te);
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
    for (const g of V) g.children && (w.push(e.returnObject ? Te(g.raw) : g.value), g.children && (w = w.concat(I(g.children))));
    return w;
  }
  return rt(hp, { visibleIds: h }), mt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), te(() => {
    const V = Kl.filterProps(e), w = ar.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return b(Kl, K({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: c.value, "onUpdate:activated": (C) => c.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(xn, { key: "no-data", title: l(e.noDataText) }, null)), b(ar, K(w, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), VE = J()({ name: "VValidation", props: Bh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = $h(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), IE = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: D_, VAlertTitle: Vh, VApp: B1, VAppBar: t_, VAppBarNavIcon: I_, VAppBarTitle: P_, VAutocomplete: QV, VAvatar: hn, VBadge: yy, VBanner: aI, VBannerActions: by, VBannerText: py, VBottomNavigation: oI, VBottomSheet: rI, VBreadcrumbs: dI, VBreadcrumbsDivider: ky, VBreadcrumbsItem: wy, VBtn: ze, VBtnGroup: nu, VBtnToggle: r_, VCalendar: uP, VCard: gP, VCardActions: Wy, VCardItem: Gy, VCardSubtitle: jy, VCardText: Yy, VCardTitle: Uy, VCarousel: CP, VCarouselItem: VP, VCheckbox: z_, VCheckboxBtn: En, VChip: fa, VChipGroup: Y_, VClassIcon: gc, VCode: IP, VCol: nT, VColorPicker: gA, VCombobox: yA, VComponentIcon: Xs, VConfirmEdit: pA, VContainer: JA, VCounter: Ar, VDataIterator: EA, VDataTable: GA, VDataTableFooter: Ko, VDataTableHeaders: cl, VDataTableRow: ud, VDataTableRows: dl, VDataTableServer: XA, VDataTableVirtual: KA, VDatePicker: mT, VDatePickerControls: wu, VDatePickerHeader: xu, VDatePickerMonth: Cu, VDatePickerMonths: _u, VDatePickerYears: Vu, VDefaultsProvider: Be, VDialog: cu, VDialogBottomTransition: R1, VDialogTopTransition: O1, VDialogTransition: xr, VDivider: vn, VEmptyState: hT, VExpandBothTransition: Y1, VExpandTransition: Cr, VExpandXTransition: Cc, VExpansionPanel: yT, VExpansionPanelText: Iu, VExpansionPanelTitle: Pu, VExpansionPanels: ST, VFab: wT, VFabTransition: L1, VFadeTransition: Ho, VField: La, VFieldLabel: mo, VFileInput: PT, VFooter: TT, VForm: ET, VHotkey: FT, VHover: RT, VIcon: Ye, VImg: da, VInfiniteScroll: NT, VInput: Ot, VItem: WT, VItemGroup: zT, VKbd: Au, VLabel: no, VLayout: UT, VLayoutItem: YT, VLazy: qT, VLigatureIcon: Y0, VList: Kl, VListGroup: Go, VListImg: gV, VListItem: xn, VListItemAction: Bc, VListItemMedia: bV, VListItemSubtitle: Yh, VListItemTitle: Kh, VListSubheader: lo, VLocaleProvider: ZT, VMain: QT, VMenu: ql, VMessages: Eh, VNavigationDrawer: sD, VNoSsr: uD, VNumberInput: mD, VOtpInput: hD, VOverlay: Un, VPagination: pu, VParallax: pD, VProgressCircular: Ba, VProgressLinear: _r, VRadio: kD, VRadioGroup: xD, VRangeSlider: _D, VRating: ID, VResponsive: Qs, VRow: uT, VScaleTransition: wc, VScrollXReverseTransition: H1, VScrollXTransition: N1, VScrollYReverseTransition: W1, VScrollYTransition: z1, VSelect: Yc, VSelectionControl: $a, VSelectionControlGroup: Th, VSheet: Fa, VSkeletonLoader: DD, VSlideGroup: Uo, VSlideGroupItem: ED, VSlideXReverseTransition: U1, VSlideXTransition: j1, VSlideYReverseTransition: G1, VSlideYTransition: xc, VSlider: bu, VSnackbar: Tu, VSnackbarQueue: $D, VSpacer: ku, VSparkline: OD, VSpeedDial: HD, VStepper: KD, VStepperActions: np, VStepperHeader: ap, VStepperItem: lp, VStepperWindow: op, VStepperWindowItem: ip, VSvgIcon: mc, VSwitch: XD, VSystemBar: JD, VTab: sp, VTable: fl, VTabs: aE, VTabsWindow: up, VTabsWindowItem: cp, VTextField: Gn, VTextarea: oE, VThemeProvider: rE, VTimePicker: pE, VTimePickerClock: Du, VTimePickerControls: Eu, VTimeline: fE, VTimelineItem: cE, VToolbar: tu, VToolbarItems: kE, VToolbarTitle: pc, VTooltip: gp, VTreeview: _E, VTreeviewGroup: Mu, VTreeviewItem: Bu, VValidation: VE, VVirtualScroll: Tr, VWindow: sl, VWindowItem: ul }, Symbol.toStringTag, { value: "Module" }));
function PE(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: c } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, u = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Sp(e, t);
  });
  o && (s == null ? void 0 : s([], u)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: u }, u.observe(e, c);
}
function Sp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const AE = { mounted: PE, unmounted: Sp };
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
function TE(e, t) {
  t.value !== t.oldValue && (wp(e, t), kp(e, t));
}
const DE = { mounted: kp, unmounted: wp, updated: TE };
function EE(e, t) {
  const n = typeof e == "string" ? je(e) : e, a = ME(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    fg(null, l);
  } };
}
function ME(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = il(a.value) ? a.value : {}, s = () => i ?? n.textContent, c = (l.ctx === a.instance.$ ? (_b2 = BE(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, u = ma(e, K(o, r), s);
    u.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: c }), fg(u, n);
  };
}
function BE(e, t) {
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
const $E = EE(gp, (e) => {
  var _a3;
  return { activator: (il(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), FE = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: uu, Intersect: Dn, Mutate: AE, Resize: Yo, Ripple: Ft, Scroll: DE, Tooltip: $E, Touch: nr }, Symbol.toStringTag, { value: "Module" })), LE = uh({ components: IE, directives: FE, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
zk(E1).use(LE).mount("#app");
