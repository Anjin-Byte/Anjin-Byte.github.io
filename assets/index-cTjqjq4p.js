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
function Tu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const st = {}, Bl = [], Nn = () => {
}, Lv = () => false, ir = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Du = (e) => e.startsWith("onUpdate:"), At = Object.assign, Mu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, sp = Object.prototype.hasOwnProperty, tt = (e, t) => sp.call(e, t), Le = Array.isArray, $l = (e) => Xo(e) === "[object Map]", Rv = (e) => Xo(e) === "[object Set]", wd = (e) => Xo(e) === "[object Date]", He = (e) => typeof e == "function", mt = (e) => typeof e == "string", Hn = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", Ov = (e) => (et(e) || He(e)) && He(e.then) && He(e.catch), Nv = Object.prototype.toString, Xo = (e) => Nv.call(e), up = (e) => Xo(e).slice(8, -1), Hv = (e) => Xo(e) === "[object Object]", rr = (e) => mt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ho = Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), sr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, cp = /-\w/g, an = sr((e) => e.replace(cp, (t) => t.slice(1).toUpperCase())), dp = /\B([A-Z])/g, fl = sr((e) => e.replace(dp, "-$1").toLowerCase()), Yn = sr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = sr((e) => e ? `on${Yn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Ai = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, zv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fp = (e) => {
  const t = mt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let kd;
const ur = () => kd || (kd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function he(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = mt(a) ? hp(a) : he(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (mt(e) || et(e)) return e;
}
const vp = /;(?![^(]*\))/g, mp = /:([^]+)/, gp = /\/\*[^]*?\*\//g;
function hp(e) {
  const t = {};
  return e.replace(gp, "").split(vp).forEach((n) => {
    if (n) {
      const a = n.split(mp);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ae(e) {
  let t = "";
  if (mt(e)) t = e;
  else if (Le(e)) for (let n = 0; n < e.length; n++) {
    const a = ae(e[n]);
    a && (t += a + " ");
  }
  else if (et(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function yp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !mt(t) && (e.class = ae(t)), n && (e.style = he(n)), e;
}
const bp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pp = Tu(bp);
function Wv(e) {
  return !!e || e === "";
}
function Sp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Bu(e[a], t[a]);
  return n;
}
function Bu(e, t) {
  if (e === t) return true;
  let n = wd(e), a = wd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Hn(e), a = Hn(t), n || a) return e === t;
  if (n = Le(e), a = Le(t), n || a) return n && a ? Sp(e, t) : false;
  if (n = et(e), a = et(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Bu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const jv = (e) => !!(e && e.__v_isRef === true), Oe = (e) => mt(e) ? e : e == null ? "" : Le(e) || et(e) && (e.toString === Nv || !He(e.toString)) ? jv(e) ? Oe(e.value) : JSON.stringify(e, Uv, 2) : String(e), Uv = (e, t) => jv(t) ? Uv(e, t.value) : $l(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[qr(a, o) + " =>"] = l, n), {}) } : Rv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => qr(n)) } : Hn(t) ? qr(t) : et(t) && !Le(t) && !Hv(t) ? String(t) : t, qr = (e, t = "") => {
  var n;
  return Hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
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
function Ol(e) {
  return new Yv(e);
}
function Gv() {
  return jt;
}
function gt(e, t = false) {
  jt && jt.cleanups.push(e);
}
let dt;
const Xr = /* @__PURE__ */ new WeakSet();
class Kv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jt && jt.active && jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xr.has(this) && (Xr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, xd(this), Zv(this);
    const t = dt, n = Vn;
    dt = this, Vn = true;
    try {
      return this.fn();
    } finally {
      Jv(this), dt = t, Vn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Lu(t);
      this.deps = this.depsTail = void 0, xd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    xs(this) && this.run();
  }
  get dirty() {
    return xs(this);
  }
}
let qv = 0, yo, bo;
function Xv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function $u() {
  qv++;
}
function Fu() {
  if (--qv > 0) return;
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
function Zv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Lu(a), wp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Qv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Qv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = dt, a = Vn;
  dt = e, Vn = true;
  try {
    Zv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    dt = n, Vn = a, Jv(e), e.flags &= -3;
  }
}
function Lu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Lu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Vn = true;
const em = [];
function ia() {
  em.push(Vn), Vn = false;
}
function ra() {
  const e = em.pop();
  Vn = e === void 0 ? true : e;
}
function xd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = dt;
    dt = void 0;
    try {
      t();
    } finally {
      dt = n;
    }
  }
}
let Io = 0;
class kp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ru {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!dt || !Vn || dt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== dt) n = this.activeLink = new kp(dt, this), dt.deps ? (n.prevDep = dt.depsTail, dt.depsTail.nextDep = n, dt.depsTail = n) : dt.deps = dt.depsTail = n, tm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = dt.depsTail, n.nextDep = void 0, dt.depsTail.nextDep = n, dt.depsTail = n, dt.deps === n && (dt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Io++, this.notify(t);
  }
  notify(t) {
    $u();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fu();
    }
  }
}
function tm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) tm(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Fi = /* @__PURE__ */ new WeakMap(), qa = Symbol(""), Cs = Symbol(""), Po = Symbol("");
function Ut(e, t, n) {
  if (Vn && dt) {
    let a = Fi.get(e);
    a || Fi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Ru()), l.map = a, l.key = n), l.track();
  }
}
function na(e, t, n, a, l, o) {
  const i = Fi.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if ($u(), t === "clear") i.forEach(r);
  else {
    const s = Le(e), u = s && rr(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !Hn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(qa)), $l(e) && r(i.get(Cs)));
        break;
      case "delete":
        s || (r(i.get(qa)), $l(e) && r(i.get(Cs)));
        break;
      case "set":
        $l(e) && r(i.get(qa));
        break;
    }
  }
  Fu();
}
function xp(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function xl(e) {
  const t = Te(e);
  return t === e ? t : (Ut(t, "iterate", Po), vn(e) ? t : t.map(Pn));
}
function cr(e) {
  return Ut(e = Te(e), "iterate", Po), e;
}
function ka(e, t) {
  return sa(e) ? Nl(_a(e) ? Pn(t) : t) : Pn(t);
}
const Cp = { __proto__: null, [Symbol.iterator]() {
  return Zr(this, Symbol.iterator, (e) => ka(this, e));
}, concat(...e) {
  return xl(this).concat(...e.map((t) => Le(t) ? xl(t) : t));
}, entries() {
  return Zr(this, "entries", (e) => (e[1] = ka(this, e[1]), e));
}, every(e, t) {
  return Zn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Zn(this, "filter", e, t, (n) => n.map((a) => ka(this, a)), arguments);
}, find(e, t) {
  return Zn(this, "find", e, t, (n) => ka(this, n), arguments);
}, findIndex(e, t) {
  return Zn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Zn(this, "findLast", e, t, (n) => ka(this, n), arguments);
}, findLastIndex(e, t) {
  return Zn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Zn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Jr(this, "includes", e);
}, indexOf(...e) {
  return Jr(this, "indexOf", e);
}, join(e) {
  return xl(this).join(e);
}, lastIndexOf(...e) {
  return Jr(this, "lastIndexOf", e);
}, map(e, t) {
  return Zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return lo(this, "pop");
}, push(...e) {
  return lo(this, "push", e);
}, reduce(e, ...t) {
  return Cd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Cd(this, "reduceRight", e, t);
}, shift() {
  return lo(this, "shift");
}, some(e, t) {
  return Zn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return lo(this, "splice", e);
}, toReversed() {
  return xl(this).toReversed();
}, toSorted(e) {
  return xl(this).toSorted(e);
}, toSpliced(...e) {
  return xl(this).toSpliced(...e);
}, unshift(...e) {
  return lo(this, "unshift", e);
}, values() {
  return Zr(this, "values", (e) => ka(this, e));
} };
function Zr(e, t, n) {
  const a = cr(e), l = a[t]();
  return a !== e && !vn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Vp = Array.prototype;
function Zn(e, t, n, a, l, o) {
  const i = cr(e), r = i !== e && !vn(e), s = i[t];
  if (s !== Vp[t]) {
    const d = s.apply(e, o);
    return r ? Pn(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, ka(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function Cd(e, t, n, a) {
  const l = cr(e);
  let o = n;
  return l !== e && (vn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, ka(e, r), s, e);
  }), l[t](o, ...a);
}
function Jr(e, t, n) {
  const a = Te(e);
  Ut(a, "iterate", Po);
  const l = a[t](...n);
  return (l === -1 || l === false) && Zo(n[0]) ? (n[0] = Te(n[0]), a[t](...n)) : l;
}
function lo(e, t, n = []) {
  ia(), $u();
  const a = Te(e)[t].apply(e, n);
  return Fu(), ra(), a;
}
const _p = Tu("__proto__,__v_isRef,__isVue"), nm = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hn));
function Ip(e) {
  Hn(e) || (e = String(e));
  const t = Te(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class am {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? Lp : rm : o ? im : om).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Le(t);
    if (!l) {
      let s;
      if (i && (s = Cp[n])) return s;
      if (n === "hasOwnProperty") return Ip;
    }
    const r = Reflect.get(t, n, bt(t) ? t : a);
    if ((Hn(n) ? nm.has(n) : _p(n)) || (l || Ut(t, "get", n), o)) return r;
    if (bt(r)) {
      const s = i && rr(n) ? r : r.value;
      return l && et(s) ? tl(s) : s;
    }
    return et(r) ? l ? tl(r) : Tt(r) : r;
  }
}
class lm extends am {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Le(t) && rr(n);
    if (!this._isShallow) {
      const u = sa(o);
      if (!vn(a) && !sa(a) && (o = Te(o), a = Te(a)), !i && bt(o) && !bt(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : tt(t, n), s = Reflect.set(t, n, a, bt(t) ? t : l);
    return t === Te(l) && (r ? Va(a, o) && na(t, "set", n, a) : na(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = tt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && na(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Hn(n) || !nm.has(n)) && Ut(t, "has", n), a;
  }
  ownKeys(t) {
    return Ut(t, "iterate", Le(t) ? "length" : qa), Reflect.ownKeys(t);
  }
}
class Pp extends am {
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
const Ap = new lm(), Tp = new Pp(), Dp = new lm(true);
const Vs = (e) => e, hi = (e) => Reflect.getPrototypeOf(e);
function Mp(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Te(l), i = $l(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? Vs : t ? Nl : Pn;
    return !t && Ut(o, "iterate", s ? Cs : qa), At(Object.create(u), { next() {
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
function Ep(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Te(o), r = Te(l);
    e || (Va(l, r) && Ut(i, "get", l), Ut(i, "get", r));
    const { has: s } = hi(i), u = t ? Vs : e ? Nl : Pn;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Ut(Te(l), "iterate", qa), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Te(o), r = Te(l);
    return e || (Va(l, r) && Ut(i, "has", l), Ut(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Te(r), u = t ? Vs : e ? Nl : Pn;
    return !e && Ut(s, "iterate", qa), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return At(n, e ? { add: yi("add"), set: yi("set"), delete: yi("delete"), clear: yi("clear") } : { add(l) {
    !t && !vn(l) && !sa(l) && (l = Te(l));
    const o = Te(this);
    return hi(o).has.call(o, l) || (o.add(l), na(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !vn(o) && !sa(o) && (o = Te(o));
    const i = Te(this), { has: r, get: s } = hi(i);
    let u = r.call(i, l);
    u || (l = Te(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Va(o, c) && na(i, "set", l, o) : na(i, "add", l, o), this;
  }, delete(l) {
    const o = Te(this), { has: i, get: r } = hi(o);
    let s = i.call(o, l);
    s || (l = Te(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && na(o, "delete", l, void 0), u;
  }, clear() {
    const l = Te(this), o = l.size !== 0, i = l.clear();
    return o && na(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = Mp(l, e, t);
  }), n;
}
function Ou(e, t) {
  const n = Ep(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(tt(n, l) && l in a ? n : a, l, o);
}
const Bp = { get: Ou(false, false) }, $p = { get: Ou(false, true) }, Fp = { get: Ou(true, false) };
const om = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakMap(), Lp = /* @__PURE__ */ new WeakMap();
function Rp(e) {
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
function Op(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rp(up(e));
}
function Tt(e) {
  return sa(e) ? e : Nu(e, false, Ap, Bp, om);
}
function Np(e) {
  return Nu(e, false, Dp, $p, im);
}
function tl(e) {
  return Nu(e, true, Tp, Fp, rm);
}
function Nu(e, t, n, a, l) {
  if (!et(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Op(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function _a(e) {
  return sa(e) ? _a(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sa(e) {
  return !!(e && e.__v_isReadonly);
}
function vn(e) {
  return !!(e && e.__v_isShallow);
}
function Zo(e) {
  return e ? !!e.__v_raw : false;
}
function Te(e) {
  const t = e && e.__v_raw;
  return t ? Te(t) : e;
}
function sm(e) {
  return !tt(e, "__v_skip") && Object.isExtensible(e) && zv(e, "__v_skip", true), e;
}
const Pn = (e) => et(e) ? Tt(e) : e, Nl = (e) => et(e) ? tl(e) : e;
function bt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return um(e, false);
}
function se(e) {
  return um(e, true);
}
function um(e, t) {
  return bt(e) ? e : new Hp(e, t);
}
class Hp {
  constructor(t, n) {
    this.dep = new Ru(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Te(t), this._value = n ? t : Pn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || vn(t) || sa(t);
    t = a ? t : Te(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : Pn(t), this.dep.trigger());
  }
}
function _t(e) {
  return bt(e) ? e.value : e;
}
function nt(e) {
  return He(e) ? e() : _t(e);
}
const zp = { get: (e, t, n) => t === "__v_raw" ? e : _t(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return bt(l) && !bt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function cm(e) {
  return _a(e) ? e : new Proxy(e, zp);
}
function Xl(e) {
  const t = Le(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = dm(e, n);
  return t;
}
class Wp {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Te(t);
    let l = true, o = t;
    if (!Le(t) || !rr(String(n))) do
      l = !Zo(o) || vn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = _t(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && bt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (bt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return xp(this._raw, this._key);
  }
}
class jp {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return bt(e) ? e : He(e) ? new jp(e) : et(e) && arguments.length > 1 ? dm(e, t, n) : K(e);
}
function dm(e, t, n) {
  return new Wp(e, t, n);
}
class Up {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ru(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && dt !== this) return Xv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Qv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Yp(e, t, n = false) {
  let a, l;
  return He(e) ? a = e : (a = e.get, l = e.set), new Up(a, l, n);
}
const bi = {}, Li = /* @__PURE__ */ new WeakMap();
let Ua;
function Gp(e, t = false, n = Ua) {
  if (n) {
    let a = Li.get(n);
    a || Li.set(n, a = []), a.push(e);
  }
}
function Kp(e, t, n = st) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (I) => l ? I : vn(I) || l === false || l === 0 ? aa(I, 1) : aa(I);
  let c, d, f, v, p = false, m = false;
  if (bt(e) ? (d = () => e.value, p = vn(e)) : _a(e) ? (d = () => u(e), p = true) : Le(e) ? (m = true, p = e.some((I) => _a(I) || vn(I)), d = () => e.map((I) => {
    if (bt(I)) return I.value;
    if (_a(I)) return u(I);
    if (He(I)) return s ? s(I, 2) : I();
  })) : He(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ia();
      try {
        f();
      } finally {
        ra();
      }
    }
    const I = Ua;
    Ua = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ua = I;
    }
  } : d = Nn, t && l) {
    const I = d, S = l === true ? 1 / 0 : l;
    d = () => aa(I(), S);
  }
  const b = Gv(), h = () => {
    c.stop(), b && b.active && Mu(b.effects, c);
  };
  if (o && t) {
    const I = t;
    t = (...S) => {
      I(...S), h();
    };
  }
  let x = m ? new Array(e.length).fill(bi) : bi;
  const _ = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I)) if (t) {
      const S = c.run();
      if (l || p || (m ? S.some((y, C) => Va(y, x[C])) : Va(S, x))) {
        f && f();
        const y = Ua;
        Ua = c;
        try {
          const C = [S, x === bi ? void 0 : m && x[0] === bi ? [] : x, v];
          x = S, s ? s(t, 3, C) : t(...C);
        } finally {
          Ua = y;
        }
      }
    } else c.run();
  };
  return r && r(_), c = new Kv(d), c.scheduler = i ? () => i(_, false) : _, v = (I) => Gp(I, false, c), f = c.onStop = () => {
    const I = Li.get(c);
    if (I) {
      if (s) s(I, 4);
      else for (const S of I) S();
      Li.delete(c);
    }
  }, t ? a ? _(true) : x = c.run() : i ? i(_.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function aa(e, t = 1 / 0, n) {
  if (t <= 0 || !et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, bt(e)) aa(e.value, t, n);
  else if (Le(e)) for (let a = 0; a < e.length; a++) aa(e[a], t, n);
  else if (Rv(e) || $l(e)) e.forEach((a) => {
    aa(a, t, n);
  });
  else if (Hv(e)) {
    for (const a in e) aa(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && aa(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Jo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    dr(l, t, n);
  }
}
function An(e, t, n, a) {
  if (He(e)) {
    const l = Jo(e, t, n, a);
    return l && Ov(l) && l.catch((o) => {
      dr(o, t, n);
    }), l;
  }
  if (Le(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(An(e[o], t, n, a));
    return l;
  }
}
function dr(e, t, n, a = true) {
  const l = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || st;
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
      ia(), Jo(o, null, 10, [e, s, u]), ra();
      return;
    }
  }
  qp(e, n, l, a, i);
}
function qp(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const en = [];
let Fn = -1;
const Fl = [];
let xa = null, Pl = 0;
const fm = Promise.resolve();
let Ri = null;
function De(e) {
  const t = Ri || fm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xp(e) {
  let t = Fn + 1, n = en.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = en[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Hu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = en[en.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? en.push(e) : en.splice(Xp(t), 0, e), e.flags |= 1, vm();
  }
}
function vm() {
  Ri || (Ri = fm.then(gm));
}
function Zp(e) {
  Le(e) ? Fl.push(...e) : xa && e.id === -1 ? xa.splice(Pl + 1, 0, e) : e.flags & 1 || (Fl.push(e), e.flags |= 1), vm();
}
function Vd(e, t, n = Fn + 1) {
  for (; n < en.length; n++) {
    const a = en[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      en.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function mm(e) {
  if (Fl.length) {
    const t = [...new Set(Fl)].sort((n, a) => Ao(n) - Ao(a));
    if (Fl.length = 0, xa) {
      xa.push(...t);
      return;
    }
    for (xa = t, Pl = 0; Pl < xa.length; Pl++) {
      const n = xa[Pl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    xa = null, Pl = 0;
  }
}
const Ao = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gm(e) {
  try {
    for (Fn = 0; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < en.length; Fn++) {
      const t = en[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, en.length = 0, mm(), Ri = null, (en.length || Fl.length) && gm();
  }
}
let sn = null, hm = null;
function Oi(e) {
  const t = sn;
  return sn = e, hm = e && e.type.__scopeId || null, t;
}
function pe(e, t = sn, n) {
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
  if (sn === null) return e;
  const n = yr(sn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = st] = t[l];
    o && (He(o) && (o = { mounted: o, updated: o }), o.deep && aa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Na(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (ia(), An(s, n, 8, [e.el, r, e, t]), ra());
  }
}
function it(e, t) {
  if (Gt) {
    let n = Gt.provides;
    const a = Gt.parent && Gt.parent.provides;
    a === n && (n = Gt.provides = Object.create(a)), n[e] = t;
  }
}
function We(e, t, n = false) {
  const a = ei();
  if (a || Ll) {
    let l = Ll ? Ll._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && He(t) ? t.call(a && a.proxy) : t;
  }
}
const Jp = Symbol.for("v-scx"), Qp = () => We(Jp);
function ut(e, t) {
  return zu(e, null, t);
}
function de(e, t, n) {
  return zu(e, t, n);
}
function zu(e, t, n = st) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = At({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Eo) {
    if (o === "sync") {
      const v = Qp();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Nn, v.resume = Nn, v.pause = Nn, v;
    }
  }
  const c = Gt;
  r.call = (v, p, m) => An(v, c, p, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Wt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, p) => {
    p ? v() : Hu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = Kp(e, t, r);
  return Eo && (u ? u.push(f) : s && f()), f;
}
function eS(e, t, n) {
  const a = this.proxy, l = mt(e) ? e.includes(".") ? ym(a, e) : () => a[e] : e.bind(a, a);
  let o;
  He(t) ? o = t : (o = t.handler, n = t);
  const i = ti(this), r = zu(l, o.bind(a), n);
  return i(), r;
}
function ym(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const bm = Symbol("_vte"), pm = (e) => e.__isTeleport, po = (e) => e && (e.disabled || e.disabled === ""), _d = (e) => e && (e.defer || e.defer === ""), Id = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, _s = (e, t) => {
  const n = e && e.to;
  return mt(n) ? t ? t(n) : null : n;
}, Sm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: p, createText: m, createComment: b } } = u, h = po(t.props);
  let { shapeFlag: x, children: _, dynamicChildren: I } = t;
  if (e == null) {
    const S = t.el = m(""), y = t.anchor = m("");
    v(S, n, a), v(y, n, a);
    const C = (A, P) => {
      x & 16 && c(_, A, P, l, o, i, r, s);
    }, w = () => {
      const A = t.target = _s(t.props, p), P = Is(A, t, m, v);
      A && (i !== "svg" && Id(A) ? i = "svg" : i !== "mathml" && Pd(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Ti(t, false)));
    };
    h && (C(n, y), Ti(t, true)), _d(t.props) ? (t.el.__isMounted = false, Wt(() => {
      w(), delete t.el.__isMounted;
    }, o)) : w();
  } else {
    if (_d(t.props) && e.el.__isMounted === false) {
      Wt(() => {
        Sm.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const S = t.anchor = e.anchor, y = t.target = e.target, C = t.targetAnchor = e.targetAnchor, w = po(e.props), A = w ? n : y, P = w ? S : C;
    if (i === "svg" || Id(y) ? i = "svg" : (i === "mathml" || Pd(y)) && (i = "mathml"), I ? (f(e.dynamicChildren, I, A, l, o, i, r), Gu(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, S, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = _s(t.props, p);
      E && pi(t, E, null, u, 0);
    } else w && pi(t, y, C, u, 1);
    Ti(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !po(f);
    for (let p = 0; p < r.length; p++) {
      const m = r[p];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: pi, hydrate: tS };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function tS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(b, h) {
    let x = h;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor") t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, b._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      x = i(x);
    }
  }
  function v(b, h) {
    h.anchor = d(i(b), h, r(b), n, a, l, o);
  }
  const p = t.target = _s(t.props, s), m = po(t.props);
  if (p) {
    const b = p._lpa || p.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(p, b), t.targetAnchor || Is(p, t, c, u, r(e) === p ? e : null)) : (t.anchor = i(e), f(p, b), t.targetAnchor || Is(p, t, c, u), d(b && i(b), t, p, n, a, l, o))), Ti(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const nS = Sm;
function Ti(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Is(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[bm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Ln = Symbol("_leaveCb"), oo = Symbol("_enterCb");
function wm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return xt(() => {
    e.isMounted = true;
  }), Ht(() => {
    e.isUnmounting = true;
  }), e;
}
const pn = [Function, Array], km = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: pn, onEnter: pn, onAfterEnter: pn, onEnterCancelled: pn, onBeforeLeave: pn, onLeave: pn, onAfterLeave: pn, onLeaveCancelled: pn, onBeforeAppear: pn, onAppear: pn, onAfterAppear: pn, onAppearCancelled: pn }, xm = (e) => {
  const t = e.subTree;
  return t.component ? xm(t.component) : t;
}, aS = { name: "BaseTransition", props: km, setup(e, { slots: t }) {
  const n = ei(), a = wm();
  return () => {
    const l = t.default && Wu(t.default(), true);
    if (!l || !l.length) return;
    const o = Cm(l), i = Te(e), { mode: r } = i;
    if (a.isLeaving) return Qr(o);
    const s = Ad(o);
    if (!s) return Qr(o);
    let u = To(s, i, a, n, (d) => u = d);
    s.type !== Yt && nl(s, u);
    let c = n.subTree && Ad(n.subTree);
    if (c && c.type !== Yt && !Ga(c, s) && xm(n).type !== Yt) {
      let d = To(c, i, a, n);
      if (nl(c, d), r === "out-in" && s.type !== Yt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, Qr(o);
      r === "in-out" && s.type !== Yt ? d.delayLeave = (f, v, p) => {
        const m = Vm(a, c);
        m[String(c.key)] = c, f[Ln] = () => {
          v(), f[Ln] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function Cm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Yt) {
      t = n;
      break;
    }
  }
  return t;
}
const lS = aS;
function Vm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function To(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: p, onLeaveCancelled: m, onBeforeAppear: b, onAppear: h, onAfterAppear: x, onAppearCancelled: _ } = t, I = String(e.key), S = Vm(n, e), y = (A, P) => {
    A && An(A, a, 9, P);
  }, C = (A, P) => {
    const E = P[1];
    y(A, P), Le(A) ? A.every((D) => D.length <= 1) && E() : A.length <= 1 && E();
  }, w = { mode: i, persisted: r, beforeEnter(A) {
    let P = s;
    if (!n.isMounted) if (o) P = b || s;
    else return;
    A[Ln] && A[Ln](true);
    const E = S[I];
    E && Ga(e, E) && E.el[Ln] && E.el[Ln](), y(P, [A]);
  }, enter(A) {
    if (S[I] === e) return;
    let P = u, E = c, D = d;
    if (!n.isMounted) if (o) P = h || u, E = x || c, D = _ || d;
    else return;
    let M = false;
    A[oo] = (L) => {
      M || (M = true, L ? y(D, [A]) : y(E, [A]), w.delayedLeave && w.delayedLeave(), A[oo] = void 0);
    };
    const T = A[oo].bind(null, false);
    P ? C(P, [A, T]) : T();
  }, leave(A, P) {
    const E = String(e.key);
    if (A[oo] && A[oo](true), n.isUnmounting) return P();
    y(f, [A]);
    let D = false;
    A[Ln] = (T) => {
      D || (D = true, P(), T ? y(m, [A]) : y(p, [A]), A[Ln] = void 0, S[E] === e && delete S[E]);
    };
    const M = A[Ln].bind(null, false);
    S[E] = e, v ? C(v, [A, M]) : M();
  }, clone(A) {
    const P = To(A, t, n, a, l);
    return l && l(P), P;
  } };
  return w;
}
function Qr(e) {
  if (fr(e)) return e = ua(e), e.children = null, e;
}
function Ad(e) {
  if (!fr(e)) return pm(e.type) && e.children ? Cm(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && He(n.default)) return n.default();
  }
}
function nl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, nl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wu(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(Wu(i.children, t, r))) : (t || i.type !== Yt) && a.push(r != null ? ua(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function xn(e, t) {
  return He(e) ? At({ name: e.name }, t, { setup: e }) : e;
}
function Et() {
  const e = ei();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _m(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Td(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ni = /* @__PURE__ */ new WeakMap();
function So(e, t, n, a, l = false) {
  if (Le(e)) {
    e.forEach((m, b) => So(m, t && (Le(t) ? t[b] : t), n, a, l));
    return;
  }
  if (wo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && So(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? yr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === st ? r.refs = {} : r.refs, d = r.setupState, f = Te(d), v = d === st ? Lv : (m) => Td(c, m) ? false : tt(f, m), p = (m, b) => !(b && Td(c, b));
  if (u != null && u !== s) {
    if (Dd(t), mt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (bt(u)) {
      const m = t;
      p(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (He(s)) Jo(s, r, 12, [i, c]);
  else {
    const m = mt(s), b = bt(s);
    if (m || b) {
      const h = () => {
        if (e.f) {
          const x = m ? v(s) ? d[s] : c[s] : p() || !e.k ? s.value : c[e.k];
          if (l) Le(x) && Mu(x, o);
          else if (Le(x)) x.includes(o) || x.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const _ = [o];
            p(s, e.k) && (s.value = _), e.k && (c[e.k] = _);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : b && (p(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const x = () => {
          h(), Ni.delete(e);
        };
        x.id = -1, Ni.set(e, x), Wt(x, n);
      } else Dd(e), h();
    }
  }
}
function Dd(e) {
  const t = Ni.get(e);
  t && (t.flags |= 8, Ni.delete(e));
}
ur().requestIdleCallback;
ur().cancelIdleCallback;
const wo = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function Im(e, t) {
  Pm(e, "a", t);
}
function ju(e, t) {
  Pm(e, "da", t);
}
function Pm(e, t, n = Gt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (vr(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) fr(l.parent.vnode) && oS(a, t, n, l), l = l.parent;
  }
}
function oS(e, t, n, a) {
  const l = vr(t, e, a, true);
  gr(() => {
    Mu(a[t], l);
  }, n);
}
function vr(e, t, n = Gt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ia();
      const r = ti(n), s = An(t, n, e, i);
      return r(), ra(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const fa = (e) => (t, n = Gt) => {
  (!Eo || e === "sp") && vr(e, (...a) => t(...a), n);
}, Zl = fa("bm"), xt = fa("m"), Am = fa("bu"), mr = fa("u"), Ht = fa("bum"), gr = fa("um"), iS = fa("sp"), rS = fa("rtg"), sS = fa("rtc");
function uS(e, t = Gt) {
  vr("ec", e, t);
}
const Tm = "components";
function Ne(e, t) {
  return Dm(Tm, e, true, t) || e;
}
const cS = Symbol.for("v-ndc");
function dS(e) {
  return mt(e) && Dm(Tm, e, false) || e;
}
function Dm(e, t, n = true, a = false) {
  const l = sn || Gt;
  if (l) {
    const o = l.type;
    {
      const r = GS(o, false);
      if (r && (r === t || r === an(t) || r === Yn(an(t)))) return o;
    }
    const i = Md(l[e] || o[e], t) || Md(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function Md(e, t) {
  return e && (e[t] || e[an(t)] || e[Yn(an(t))]);
}
function al(e, t, n, a) {
  let l;
  const o = n, i = Le(e);
  if (i || mt(e)) {
    const r = i && _a(e);
    let s = false, u = false;
    r && (s = !vn(e), u = sa(e), e = cr(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Nl(Pn(e[c])) : Pn(e[c]) : e[c], c, void 0, o);
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
const Ps = (e) => e ? Zm(e) ? yr(e) : Ps(e.parent) : null, ko = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ps(e.parent), $root: (e) => Ps(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Em(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Hu(e.update);
}), $nextTick: (e) => e.n || (e.n = De.bind(e.proxy)), $watch: (e) => eS.bind(e) }), es = (e, t) => e !== st && !e.__isScriptSetup && tt(e, t), fS = { get({ _: e }, t) {
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
      if (es(a, t)) return i[t] = 1, a[t];
      if (l !== st && tt(l, t)) return i[t] = 2, l[t];
      if (tt(o, t)) return i[t] = 3, o[t];
      if (n !== st && tt(n, t)) return i[t] = 4, n[t];
      As && (i[t] = 0);
    }
  }
  const u = ko[t];
  let c, d;
  if (u) return t === "$attrs" && Ut(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== st && tt(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, tt(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return es(l, t) ? (l[t] = n, true) : a !== st && tt(a, t) ? (a[t] = n, true) : tt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== st && r[0] !== "$" && tt(e, r) || es(t, r) || tt(o, r) || tt(a, r) || tt(ko, r) || tt(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : tt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Ed(e) {
  return Le(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let As = true;
function vS(e) {
  const t = Em(e), n = e.proxy, a = e.ctx;
  As = false, t.beforeCreate && Bd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: p, activated: m, deactivated: b, beforeDestroy: h, beforeUnmount: x, destroyed: _, unmounted: I, render: S, renderTracked: y, renderTriggered: C, errorCaptured: w, serverPrefetch: A, expose: P, inheritAttrs: E, components: D, directives: M, filters: T } = t;
  if (u && mS(u, a, null), i) for (const H in i) {
    const G = i[H];
    He(G) && (a[H] = G.bind(n));
  }
  if (l) {
    const H = l.call(n, n);
    et(H) && (e.data = Tt(H));
  }
  if (As = true, o) for (const H in o) {
    const G = o[H], O = He(G) ? G.bind(n, n) : He(G.get) ? G.get.bind(n, n) : Nn, F = !He(G) && He(G.set) ? G.set.bind(n) : Nn, J = V({ get: O, set: F });
    Object.defineProperty(a, H, { enumerable: true, configurable: true, get: () => J.value, set: (z) => J.value = z });
  }
  if (r) for (const H in r) Mm(r[H], a, n, H);
  if (s) {
    const H = He(s) ? s.call(n) : s;
    Reflect.ownKeys(H).forEach((G) => {
      it(G, H[G]);
    });
  }
  c && Bd(c, e, "c");
  function Y(H, G) {
    Le(G) ? G.forEach((O) => H(O.bind(n))) : G && H(G.bind(n));
  }
  if (Y(Zl, d), Y(xt, f), Y(Am, v), Y(mr, p), Y(Im, m), Y(ju, b), Y(uS, w), Y(sS, y), Y(rS, C), Y(Ht, x), Y(gr, I), Y(iS, A), Le(P)) if (P.length) {
    const H = e.exposed || (e.exposed = {});
    P.forEach((G) => {
      Object.defineProperty(H, G, { get: () => n[G], set: (O) => n[G] = O, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  S && e.render === Nn && (e.render = S), E != null && (e.inheritAttrs = E), D && (e.components = D), M && (e.directives = M), A && _m(e);
}
function mS(e, t, n = Nn) {
  Le(e) && (e = Ts(e));
  for (const a in e) {
    const l = e[a];
    let o;
    et(l) ? "default" in l ? o = We(l.from || a, l.default, true) : o = We(l.from || a) : o = We(l), bt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Bd(e, t, n) {
  An(Le(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mm(e, t, n, a) {
  let l = a.includes(".") ? ym(n, a) : () => n[a];
  if (mt(e)) {
    const o = t[e];
    He(o) && de(l, o);
  } else if (He(e)) de(l, e.bind(n));
  else if (et(e)) if (Le(e)) e.forEach((o) => Mm(o, t, n, a));
  else {
    const o = He(e.handler) ? e.handler.bind(n) : t[e.handler];
    He(o) && de(l, o, e);
  }
}
function Em(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Hi(s, u, i, true)), Hi(s, t, i)), et(t) && o.set(t, s), s;
}
function Hi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Hi(e, o, n, true), l && l.forEach((i) => Hi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = gS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const gS = { data: $d, props: Fd, emits: Fd, methods: fo, computed: fo, beforeCreate: Jt, created: Jt, beforeMount: Jt, mounted: Jt, beforeUpdate: Jt, updated: Jt, beforeDestroy: Jt, beforeUnmount: Jt, destroyed: Jt, unmounted: Jt, activated: Jt, deactivated: Jt, errorCaptured: Jt, serverPrefetch: Jt, components: fo, directives: fo, watch: yS, provide: $d, inject: hS };
function $d(e, t) {
  return t ? e ? function() {
    return At(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t);
  } : t : e;
}
function hS(e, t) {
  return fo(Ts(e), Ts(t));
}
function Ts(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fo(e, t) {
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fd(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(/* @__PURE__ */ Object.create(null), Ed(e), Ed(t ?? {})) : t;
}
function yS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Jt(e[a], t[a]);
  return n;
}
function Bm() {
  return { app: null, config: { isNativeTag: Lv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let bS = 0;
function pS(e, t) {
  return function(a, l = null) {
    He(a) || (a = At({}, a)), l != null && !et(l) && (l = null);
    const o = Bm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: bS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: qS, get config() {
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
        const v = u._ceVNode || g(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, yr(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (An(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Ll;
      Ll = u;
      try {
        return c();
      } finally {
        Ll = d;
      }
    } };
    return u;
  };
}
let Ll = null;
const SS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${an(t)}Modifiers`] || e[`${fl(t)}Modifiers`];
function wS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || st;
  let l = n;
  const o = t.startsWith("update:"), i = o && SS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => mt(c) ? c.trim() : c)), i.number && (l = n.map(Eu)));
  let r, s = a[r = Kr(t)] || a[r = Kr(an(t))];
  !s && o && (s = a[r = Kr(fl(t))]), s && An(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, An(u, e, 6, l);
  }
}
const kS = /* @__PURE__ */ new WeakMap();
function $m(e, t, n = false) {
  const a = n ? kS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!He(e)) {
    const s = (u) => {
      const c = $m(u, t, true);
      c && (r = true, At(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (et(e) && a.set(e, null), null) : (Le(o) ? o.forEach((s) => i[s] = null) : At(i, o), et(e) && a.set(e, i), i);
}
function hr(e, t) {
  return !e || !ir(t) ? false : (t = t.slice(2).replace(/Once$/, ""), tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, fl(t)) || tt(e, t));
}
function Ld(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: p, inheritAttrs: m } = e, b = Oi(e);
  let h, x;
  try {
    if (n.shapeFlag & 4) {
      const I = l || a, S = I;
      h = Rn(u.call(S, I, c, d, v, f, p)), x = r;
    } else {
      const I = t;
      h = Rn(I.length > 1 ? I(d, { attrs: r, slots: i, emit: s }) : I(d, null)), x = t.props ? r : xS(r);
    }
  } catch (I) {
    xo.length = 0, dr(I, e, 1), h = g(Yt);
  }
  let _ = h;
  if (x && m !== false) {
    const I = Object.keys(x), { shapeFlag: S } = _;
    I.length && S & 7 && (o && I.some(Du) && (x = CS(x, o)), _ = ua(_, x, false, true));
  }
  return n.dirs && (_ = ua(_, null, false, true), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && nl(_, n.transition), h = _, Oi(b), h;
}
const xS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || ir(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, CS = (e, t) => {
  const n = {};
  for (const a in e) (!Du(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function VS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Rd(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Fm(i, a, f) && !hr(u, f)) return true;
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
    if (Fm(t, e, o) && !hr(n, o)) return true;
  }
  return false;
}
function Fm(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && et(a) && et(l) ? !Bu(a, l) : a !== l;
}
function _S({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Lm = {}, Rm = () => Object.create(Lm), Om = (e) => Object.getPrototypeOf(e) === Lm;
function IS(e, t, n, a = false) {
  const l = {}, o = Rm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nm(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : Np(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function PS(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Te(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (hr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (tt(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const p = an(f);
          l[p] = Ds(s, r, p, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Nm(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !tt(t, d) && ((c = fl(d)) === d || !tt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Ds(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !tt(t, d)) && (delete o[d], u = true);
  }
  u && na(e.attrs, "set", "");
}
function Nm(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (ho(s)) continue;
    const u = t[s];
    let c;
    l && tt(l, c = an(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : hr(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Te(n), u = r || st;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Ds(l, s, d, u[d], e, !tt(u, d));
    }
  }
  return i;
}
function Ds(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = tt(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && He(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = ti(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[0] && (o && !r ? a = false : i[1] && (a === "" || a === fl(n)) && (a = true));
  }
  return a;
}
const AS = /* @__PURE__ */ new WeakMap();
function Hm(e, t, n = false) {
  const a = n ? AS : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!He(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = Hm(d, t, true);
      At(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return et(e) && a.set(e, Bl), Bl;
  if (Le(o)) for (let c = 0; c < o.length; c++) {
    const d = an(o[c]);
    Od(d) && (i[d] = st);
  }
  else if (o) for (const c in o) {
    const d = an(c);
    if (Od(d)) {
      const f = o[c], v = i[d] = Le(f) || He(f) ? { type: f } : At({}, f), p = v.type;
      let m = false, b = true;
      if (Le(p)) for (let h = 0; h < p.length; ++h) {
        const x = p[h], _ = He(x) && x.name;
        if (_ === "Boolean") {
          m = true;
          break;
        } else _ === "String" && (b = false);
      }
      else m = He(p) && p.name === "Boolean";
      v[0] = m, v[1] = b, (m || tt(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return et(e) && a.set(e, u), u;
}
function Od(e) {
  return e[0] !== "$" && !ho(e);
}
const Uu = (e) => e === "_" || e === "_ctx" || e === "$stable", Yu = (e) => Le(e) ? e.map(Rn) : [Rn(e)], TS = (e, t, n) => {
  if (t._n) return t;
  const a = pe((...l) => Yu(t(...l)), n);
  return a._c = false, a;
}, zm = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Uu(l)) continue;
    const o = e[l];
    if (He(o)) t[l] = TS(l, o, a);
    else if (o != null) {
      const i = Yu(o);
      t[l] = () => i;
    }
  }
}, Wm = (e, t) => {
  const n = Yu(t);
  e.slots.default = () => n;
}, jm = (e, t, n) => {
  for (const a in t) (n || !Uu(a)) && (e[a] = t[a]);
}, DS = (e, t, n) => {
  const a = e.slots = Rm();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (jm(a, t, n), n && zv(a, "_", l, true)) : zm(t, a);
  } else t && Wm(e, t);
}, MS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = st;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : jm(l, t, n) : (o = !t.$stable, zm(t, l)), i = t;
  } else t && (Wm(e, t), i = { default: 1 });
  if (o) for (const r in l) !Uu(r) && i[r] == null && delete l[r];
}, Wt = LS;
function ES(e) {
  return BS(e);
}
function BS(e, t) {
  const n = ur();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Nn, insertStaticContent: p } = e, m = ($, N, ee, ce = null, ie = null, ue = null, we = void 0, fe = null, X = !!N.dynamicChildren) => {
    if ($ === N) return;
    $ && !Ga($, N) && (ce = q($), z($, ie, ue, true), $ = null), N.patchFlag === -2 && (X = false, N.dynamicChildren = null);
    const { type: oe, ref: _e, shapeFlag: Q } = N;
    switch (oe) {
      case Qo:
        b($, N, ee, ce);
        break;
      case Yt:
        h($, N, ee, ce);
        break;
      case ns:
        $ == null && x(N, ee, ce, we);
        break;
      case be:
        D($, N, ee, ce, ie, ue, we, fe, X);
        break;
      default:
        Q & 1 ? S($, N, ee, ce, ie, ue, we, fe, X) : Q & 6 ? M($, N, ee, ce, ie, ue, we, fe, X) : (Q & 64 || Q & 128) && oe.process($, N, ee, ce, ie, ue, we, fe, X, Ve);
    }
    _e != null && ie ? So(_e, $ && $.ref, ue, N || $, !N) : _e == null && $ && $.ref != null && So($.ref, null, ue, $, true);
  }, b = ($, N, ee, ce) => {
    if ($ == null) a(N.el = r(N.children), ee, ce);
    else {
      const ie = N.el = $.el;
      N.children !== $.children && u(ie, N.children);
    }
  }, h = ($, N, ee, ce) => {
    $ == null ? a(N.el = s(N.children || ""), ee, ce) : N.el = $.el;
  }, x = ($, N, ee, ce) => {
    [$.el, $.anchor] = p($.children, N, ee, ce, $.el, $.anchor);
  }, _ = ({ el: $, anchor: N }, ee, ce) => {
    let ie;
    for (; $ && $ !== N; ) ie = f($), a($, ee, ce), $ = ie;
    a(N, ee, ce);
  }, I = ({ el: $, anchor: N }) => {
    let ee;
    for (; $ && $ !== N; ) ee = f($), l($), $ = ee;
    l(N);
  }, S = ($, N, ee, ce, ie, ue, we, fe, X) => {
    if (N.type === "svg" ? we = "svg" : N.type === "math" && (we = "mathml"), $ == null) y(N, ee, ce, ie, ue, we, fe, X);
    else {
      const oe = $.el && $.el._isVueCE ? $.el : null;
      try {
        oe && oe._beginPatch(), A($, N, ie, ue, we, fe, X);
      } finally {
        oe && oe._endPatch();
      }
    }
  }, y = ($, N, ee, ce, ie, ue, we, fe) => {
    let X, oe;
    const { props: _e, shapeFlag: Q, transition: me, dirs: W } = $;
    if (X = $.el = i($.type, ue, _e && _e.is, _e), Q & 8 ? c(X, $.children) : Q & 16 && w($.children, X, null, ce, ie, ts($, ue), we, fe), W && Na($, null, ce, "created"), C(X, $, $.scopeId, we, ce), _e) {
      for (const Se in _e) Se !== "value" && !ho(Se) && o(X, Se, null, _e[Se], ue, ce);
      "value" in _e && o(X, "value", null, _e.value, ue), (oe = _e.onVnodeBeforeMount) && Bn(oe, ce, $);
    }
    W && Na($, null, ce, "beforeMount");
    const te = $S(ie, me);
    te && me.beforeEnter(X), a(X, N, ee), ((oe = _e && _e.onVnodeMounted) || te || W) && Wt(() => {
      oe && Bn(oe, ce, $), te && me.enter(X), W && Na($, null, ce, "mounted");
    }, ie);
  }, C = ($, N, ee, ce, ie) => {
    if (ee && v($, ee), ce) for (let ue = 0; ue < ce.length; ue++) v($, ce[ue]);
    if (ie) {
      let ue = ie.subTree;
      if (N === ue || Gm(ue.type) && (ue.ssContent === N || ue.ssFallback === N)) {
        const we = ie.vnode;
        C($, we, we.scopeId, we.slotScopeIds, ie.parent);
      }
    }
  }, w = ($, N, ee, ce, ie, ue, we, fe, X = 0) => {
    for (let oe = X; oe < $.length; oe++) {
      const _e = $[oe] = fe ? ea($[oe]) : Rn($[oe]);
      m(null, _e, N, ee, ce, ie, ue, we, fe);
    }
  }, A = ($, N, ee, ce, ie, ue, we) => {
    const fe = N.el = $.el;
    let { patchFlag: X, dynamicChildren: oe, dirs: _e } = N;
    X |= $.patchFlag & 16;
    const Q = $.props || st, me = N.props || st;
    let W;
    if (ee && Ha(ee, false), (W = me.onVnodeBeforeUpdate) && Bn(W, ee, N, $), _e && Na(N, $, ee, "beforeUpdate"), ee && Ha(ee, true), (Q.innerHTML && me.innerHTML == null || Q.textContent && me.textContent == null) && c(fe, ""), oe ? P($.dynamicChildren, oe, fe, ee, ce, ts(N, ie), ue) : we || G($, N, fe, null, ee, ce, ts(N, ie), ue, false), X > 0) {
      if (X & 16) E(fe, Q, me, ee, ie);
      else if (X & 2 && Q.class !== me.class && o(fe, "class", null, me.class, ie), X & 4 && o(fe, "style", Q.style, me.style, ie), X & 8) {
        const te = N.dynamicProps;
        for (let Se = 0; Se < te.length; Se++) {
          const Pe = te[Se], Me = Q[Pe], $e = me[Pe];
          ($e !== Me || Pe === "value") && o(fe, Pe, Me, $e, ie, ee);
        }
      }
      X & 1 && $.children !== N.children && c(fe, N.children);
    } else !we && oe == null && E(fe, Q, me, ee, ie);
    ((W = me.onVnodeUpdated) || _e) && Wt(() => {
      W && Bn(W, ee, N, $), _e && Na(N, $, ee, "updated");
    }, ce);
  }, P = ($, N, ee, ce, ie, ue, we) => {
    for (let fe = 0; fe < N.length; fe++) {
      const X = $[fe], oe = N[fe], _e = X.el && (X.type === be || !Ga(X, oe) || X.shapeFlag & 198) ? d(X.el) : ee;
      m(X, oe, _e, null, ce, ie, ue, we, true);
    }
  }, E = ($, N, ee, ce, ie) => {
    if (N !== ee) {
      if (N !== st) for (const ue in N) !ho(ue) && !(ue in ee) && o($, ue, N[ue], null, ie, ce);
      for (const ue in ee) {
        if (ho(ue)) continue;
        const we = ee[ue], fe = N[ue];
        we !== fe && ue !== "value" && o($, ue, fe, we, ie, ce);
      }
      "value" in ee && o($, "value", N.value, ee.value, ie);
    }
  }, D = ($, N, ee, ce, ie, ue, we, fe, X) => {
    const oe = N.el = $ ? $.el : r(""), _e = N.anchor = $ ? $.anchor : r("");
    let { patchFlag: Q, dynamicChildren: me, slotScopeIds: W } = N;
    W && (fe = fe ? fe.concat(W) : W), $ == null ? (a(oe, ee, ce), a(_e, ee, ce), w(N.children || [], ee, _e, ie, ue, we, fe, X)) : Q > 0 && Q & 64 && me && $.dynamicChildren && $.dynamicChildren.length === me.length ? (P($.dynamicChildren, me, ee, ie, ue, we, fe), (N.key != null || ie && N === ie.subTree) && Gu($, N, true)) : G($, N, ee, _e, ie, ue, we, fe, X);
  }, M = ($, N, ee, ce, ie, ue, we, fe, X) => {
    N.slotScopeIds = fe, $ == null ? N.shapeFlag & 512 ? ie.ctx.activate(N, ee, ce, we, X) : T(N, ee, ce, ie, ue, we, X) : L($, N, X);
  }, T = ($, N, ee, ce, ie, ue, we) => {
    const fe = $.component = zS($, ce, ie);
    if (fr($) && (fe.ctx.renderer = Ve), WS(fe, false, we), fe.asyncDep) {
      if (ie && ie.registerDep(fe, Y, we), !$.el) {
        const X = fe.subTree = g(Yt);
        h(null, X, N, ee), $.placeholder = X.el;
      }
    } else Y(fe, $, N, ee, ie, ue, we);
  }, L = ($, N, ee) => {
    const ce = N.component = $.component;
    if (VS($, N, ee)) if (ce.asyncDep && !ce.asyncResolved) {
      H(ce, N, ee);
      return;
    } else ce.next = N, ce.update();
    else N.el = $.el, ce.vnode = N;
  }, Y = ($, N, ee, ce, ie, ue, we) => {
    const fe = () => {
      if ($.isMounted) {
        let { next: Q, bu: me, u: W, parent: te, vnode: Se } = $;
        {
          const qe = Um($);
          if (qe) {
            Q && (Q.el = Se.el, H($, Q, we)), qe.asyncDep.then(() => {
              Wt(() => {
                $.isUnmounted || oe();
              }, ie);
            });
            return;
          }
        }
        let Pe = Q, Me;
        Ha($, false), Q ? (Q.el = Se.el, H($, Q, we)) : Q = Se, me && Ai(me), (Me = Q.props && Q.props.onVnodeBeforeUpdate) && Bn(Me, te, Q, Se), Ha($, true);
        const $e = Ld($), Fe = $.subTree;
        $.subTree = $e, m(Fe, $e, d(Fe.el), q(Fe), $, ie, ue), Q.el = $e.el, Pe === null && _S($, $e.el), W && Wt(W, ie), (Me = Q.props && Q.props.onVnodeUpdated) && Wt(() => Bn(Me, te, Q, Se), ie);
      } else {
        let Q;
        const { el: me, props: W } = N, { bm: te, m: Se, parent: Pe, root: Me, type: $e } = $, Fe = wo(N);
        Ha($, false), te && Ai(te), !Fe && (Q = W && W.onVnodeBeforeMount) && Bn(Q, Pe, N), Ha($, true);
        {
          Me.ce && Me.ce._hasShadowRoot() && Me.ce._injectChildStyle($e);
          const qe = $.subTree = Ld($);
          m(null, qe, ee, ce, $, ie, ue), N.el = qe.el;
        }
        if (Se && Wt(Se, ie), !Fe && (Q = W && W.onVnodeMounted)) {
          const qe = N;
          Wt(() => Bn(Q, Pe, qe), ie);
        }
        (N.shapeFlag & 256 || Pe && wo(Pe.vnode) && Pe.vnode.shapeFlag & 256) && $.a && Wt($.a, ie), $.isMounted = true, N = ee = ce = null;
      }
    };
    $.scope.on();
    const X = $.effect = new Kv(fe);
    $.scope.off();
    const oe = $.update = X.run.bind(X), _e = $.job = X.runIfDirty.bind(X);
    _e.i = $, _e.id = $.uid, X.scheduler = () => Hu(_e), Ha($, true), oe();
  }, H = ($, N, ee) => {
    N.component = $;
    const ce = $.vnode.props;
    $.vnode = N, $.next = null, PS($, N.props, ce, ee), MS($, N.children, ee), ia(), Vd($), ra();
  }, G = ($, N, ee, ce, ie, ue, we, fe, X = false) => {
    const oe = $ && $.children, _e = $ ? $.shapeFlag : 0, Q = N.children, { patchFlag: me, shapeFlag: W } = N;
    if (me > 0) {
      if (me & 128) {
        F(oe, Q, ee, ce, ie, ue, we, fe, X);
        return;
      } else if (me & 256) {
        O(oe, Q, ee, ce, ie, ue, we, fe, X);
        return;
      }
    }
    W & 8 ? (_e & 16 && ke(oe, ie, ue), Q !== oe && c(ee, Q)) : _e & 16 ? W & 16 ? F(oe, Q, ee, ce, ie, ue, we, fe, X) : ke(oe, ie, ue, true) : (_e & 8 && c(ee, ""), W & 16 && w(Q, ee, ce, ie, ue, we, fe, X));
  }, O = ($, N, ee, ce, ie, ue, we, fe, X) => {
    $ = $ || Bl, N = N || Bl;
    const oe = $.length, _e = N.length, Q = Math.min(oe, _e);
    let me;
    for (me = 0; me < Q; me++) {
      const W = N[me] = X ? ea(N[me]) : Rn(N[me]);
      m($[me], W, ee, null, ie, ue, we, fe, X);
    }
    oe > _e ? ke($, ie, ue, true, false, Q) : w(N, ee, ce, ie, ue, we, fe, X, Q);
  }, F = ($, N, ee, ce, ie, ue, we, fe, X) => {
    let oe = 0;
    const _e = N.length;
    let Q = $.length - 1, me = _e - 1;
    for (; oe <= Q && oe <= me; ) {
      const W = $[oe], te = N[oe] = X ? ea(N[oe]) : Rn(N[oe]);
      if (Ga(W, te)) m(W, te, ee, null, ie, ue, we, fe, X);
      else break;
      oe++;
    }
    for (; oe <= Q && oe <= me; ) {
      const W = $[Q], te = N[me] = X ? ea(N[me]) : Rn(N[me]);
      if (Ga(W, te)) m(W, te, ee, null, ie, ue, we, fe, X);
      else break;
      Q--, me--;
    }
    if (oe > Q) {
      if (oe <= me) {
        const W = me + 1, te = W < _e ? N[W].el : ce;
        for (; oe <= me; ) m(null, N[oe] = X ? ea(N[oe]) : Rn(N[oe]), ee, te, ie, ue, we, fe, X), oe++;
      }
    } else if (oe > me) for (; oe <= Q; ) z($[oe], ie, ue, true), oe++;
    else {
      const W = oe, te = oe, Se = /* @__PURE__ */ new Map();
      for (oe = te; oe <= me; oe++) {
        const rt = N[oe] = X ? ea(N[oe]) : Rn(N[oe]);
        rt.key != null && Se.set(rt.key, oe);
      }
      let Pe, Me = 0;
      const $e = me - te + 1;
      let Fe = false, qe = 0;
      const Rt = new Array($e);
      for (oe = 0; oe < $e; oe++) Rt[oe] = 0;
      for (oe = W; oe <= Q; oe++) {
        const rt = $[oe];
        if (Me >= $e) {
          z(rt, ie, ue, true);
          continue;
        }
        let bn;
        if (rt.key != null) bn = Se.get(rt.key);
        else for (Pe = te; Pe <= me; Pe++) if (Rt[Pe - te] === 0 && Ga(rt, N[Pe])) {
          bn = Pe;
          break;
        }
        bn === void 0 ? z(rt, ie, ue, true) : (Rt[bn - te] = oe + 1, bn >= qe ? qe = bn : Fe = true, m(rt, N[bn], ee, null, ie, ue, we, fe, X), Me++);
      }
      const En = Fe ? FS(Rt) : Bl;
      for (Pe = En.length - 1, oe = $e - 1; oe >= 0; oe--) {
        const rt = te + oe, bn = N[rt], pd = N[rt + 1], Sd = rt + 1 < _e ? pd.el || Ym(pd) : ce;
        Rt[oe] === 0 ? m(null, bn, ee, Sd, ie, ue, we, fe, X) : Fe && (Pe < 0 || oe !== En[Pe] ? J(bn, ee, Sd, 2) : Pe--);
      }
    }
  }, J = ($, N, ee, ce, ie = null) => {
    const { el: ue, type: we, transition: fe, children: X, shapeFlag: oe } = $;
    if (oe & 6) {
      J($.component.subTree, N, ee, ce);
      return;
    }
    if (oe & 128) {
      $.suspense.move(N, ee, ce);
      return;
    }
    if (oe & 64) {
      we.move($, N, ee, Ve);
      return;
    }
    if (we === be) {
      a(ue, N, ee);
      for (let Q = 0; Q < X.length; Q++) J(X[Q], N, ee, ce);
      a($.anchor, N, ee);
      return;
    }
    if (we === ns) {
      _($, N, ee);
      return;
    }
    if (ce !== 2 && oe & 1 && fe) if (ce === 0) fe.beforeEnter(ue), a(ue, N, ee), Wt(() => fe.enter(ue), ie);
    else {
      const { leave: Q, delayLeave: me, afterLeave: W } = fe, te = () => {
        $.ctx.isUnmounted ? l(ue) : a(ue, N, ee);
      }, Se = () => {
        ue._isLeaving && ue[Ln](true), Q(ue, () => {
          te(), W && W();
        });
      };
      me ? me(ue, te, Se) : Se();
    }
    else a(ue, N, ee);
  }, z = ($, N, ee, ce = false, ie = false) => {
    const { type: ue, props: we, ref: fe, children: X, dynamicChildren: oe, shapeFlag: _e, patchFlag: Q, dirs: me, cacheIndex: W } = $;
    if (Q === -2 && (ie = false), fe != null && (ia(), So(fe, null, ee, $, true), ra()), W != null && (N.renderCache[W] = void 0), _e & 256) {
      N.ctx.deactivate($);
      return;
    }
    const te = _e & 1 && me, Se = !wo($);
    let Pe;
    if (Se && (Pe = we && we.onVnodeBeforeUnmount) && Bn(Pe, N, $), _e & 6) re($.component, ee, ce);
    else {
      if (_e & 128) {
        $.suspense.unmount(ee, ce);
        return;
      }
      te && Na($, null, N, "beforeUnmount"), _e & 64 ? $.type.remove($, N, ee, Ve, ce) : oe && !oe.hasOnce && (ue !== be || Q > 0 && Q & 64) ? ke(oe, N, ee, false, true) : (ue === be && Q & 384 || !ie && _e & 16) && ke(X, N, ee), ce && R($);
    }
    (Se && (Pe = we && we.onVnodeUnmounted) || te) && Wt(() => {
      Pe && Bn(Pe, N, $), te && Na($, null, N, "unmounted");
    }, ee);
  }, R = ($) => {
    const { type: N, el: ee, anchor: ce, transition: ie } = $;
    if (N === be) {
      U(ee, ce);
      return;
    }
    if (N === ns) {
      I($);
      return;
    }
    const ue = () => {
      l(ee), ie && !ie.persisted && ie.afterLeave && ie.afterLeave();
    };
    if ($.shapeFlag & 1 && ie && !ie.persisted) {
      const { leave: we, delayLeave: fe } = ie, X = () => we(ee, ue);
      fe ? fe($.el, ue, X) : X();
    } else ue();
  }, U = ($, N) => {
    let ee;
    for (; $ !== N; ) ee = f($), l($), $ = ee;
    l(N);
  }, re = ($, N, ee) => {
    const { bum: ce, scope: ie, job: ue, subTree: we, um: fe, m: X, a: oe } = $;
    Nd(X), Nd(oe), ce && Ai(ce), ie.stop(), ue && (ue.flags |= 8, z(we, $, N, ee)), fe && Wt(fe, N), Wt(() => {
      $.isUnmounted = true;
    }, N);
  }, ke = ($, N, ee, ce = false, ie = false, ue = 0) => {
    for (let we = ue; we < $.length; we++) z($[we], N, ee, ce, ie);
  }, q = ($) => {
    if ($.shapeFlag & 6) return q($.component.subTree);
    if ($.shapeFlag & 128) return $.suspense.next();
    const N = f($.anchor || $.el), ee = N && N[bm];
    return ee ? f(ee) : N;
  };
  let ve = false;
  const Ae = ($, N, ee) => {
    let ce;
    $ == null ? N._vnode && (z(N._vnode, null, null, true), ce = N._vnode.component) : m(N._vnode || null, $, N, null, null, null, ee), N._vnode = $, ve || (ve = true, Vd(ce), mm(), ve = false);
  }, Ve = { p: m, um: z, m: J, r: R, mt: T, mc: w, pc: G, pbc: P, n: q, o: e };
  return { render: Ae, hydrate: void 0, createApp: pS(Ae) };
}
function ts({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ha({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $S(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gu(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Le(a) && Le(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = ea(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Gu(i, r)), r.type === Qo && (r.patchFlag === -1 && (r = l[o] = ea(r)), r.el = i.el), r.type === Yt && !r.el && (r.el = i.el);
  }
}
function FS(e) {
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
function Um(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Um(t);
}
function Nd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ym(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Ym(t.subTree) : null;
}
const Gm = (e) => e.__isSuspense;
function LS(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : Zp(e);
}
const be = Symbol.for("v-fgt"), Qo = Symbol.for("v-txt"), Yt = Symbol.for("v-cmt"), ns = Symbol.for("v-stc"), xo = [];
let un = null;
function Ye(e = false) {
  xo.push(un = e ? null : []);
}
function RS() {
  xo.pop(), un = xo[xo.length - 1] || null;
}
let Do = 1;
function zi(e, t = false) {
  Do += e, e < 0 && un && t && (un.hasOnce = true);
}
function Km(e) {
  return e.dynamicChildren = Do > 0 ? un || Bl : null, RS(), Do > 0 && un && un.push(e), e;
}
function ht(e, t, n, a, l, o) {
  return Km(k(e, t, n, a, l, o, true));
}
function qt(e, t, n, a, l) {
  return Km(g(e, t, n, a, l, true));
}
function Mo(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ga(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qm = ({ key: e }) => e ?? null, Di = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? mt(e) || bt(e) || He(e) ? { i: sn, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && qm(t), ref: t && Di(t), scopeId: hm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: sn };
  return r ? (Ku(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= mt(n) ? 8 : 16), Do > 0 && !i && un && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && un.push(s), s;
}
const g = OS;
function OS(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === cS) && (e = Yt), Mo(e)) {
    const r = ua(e, t, true);
    return n && Ku(r, n), Do > 0 && !o && un && (r.shapeFlag & 6 ? un[un.indexOf(e)] = r : un.push(r)), r.patchFlag = -2, r;
  }
  if (KS(e) && (e = e.__vccOpts), t) {
    t = Xm(t);
    let { class: r, style: s } = t;
    r && !mt(r) && (t.class = ae(r)), et(s) && (Zo(s) && !Le(s) && (s = At({}, s)), t.style = he(s));
  }
  const i = mt(e) ? 1 : Gm(e) ? 128 : pm(e) ? 64 : et(e) ? 4 : He(e) ? 2 : 0;
  return k(e, t, n, a, l, i, o, true);
}
function Xm(e) {
  return e ? Zo(e) || Om(e) ? At({}, e) : e : null;
}
function ua(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? Z(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && qm(u), ref: t && t.ref ? n && o ? Le(o) ? o.concat(Di(t)) : [o, Di(t)] : Di(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ua(e.ssContent), ssFallback: e.ssFallback && ua(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && nl(c, s.clone(c)), c;
}
function je(e = " ", t = 0) {
  return g(Qo, null, e, t);
}
function la(e = "", t = false) {
  return t ? (Ye(), qt(Yt, null, e)) : g(Yt, null, e);
}
function Rn(e) {
  return e == null || typeof e == "boolean" ? g(Yt) : Le(e) ? g(be, null, e.slice()) : Mo(e) ? ea(e) : g(Qo, null, String(e));
}
function ea(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ua(e);
}
function Ku(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Le(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Ku(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Om(t) ? t._ctx = sn : l === 3 && sn && (sn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else He(t) ? (t = { default: t, _ctx: sn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Z(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ae([t.class, a.class]));
    else if (l === "style") t.style = he([t.style, a.style]);
    else if (ir(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Le(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Bn(e, t, n, a = null) {
  An(e, t, 7, [n, a]);
}
const NS = Bm();
let HS = 0;
function zS(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || NS, o = { uid: HS++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Yv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Hm(a, l), emitsOptions: $m(a, l), emit: null, emitted: null, propsDefaults: st, inheritAttrs: a.inheritAttrs, ctx: st, data: st, props: st, attrs: st, slots: st, refs: st, setupState: st, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = wS.bind(null, o), e.ce && e.ce(o), o;
}
let Gt = null;
const ei = () => Gt || sn;
let Wi, Ms;
{
  const e = ur(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Wi = t("__VUE_INSTANCE_SETTERS__", (n) => Gt = n), Ms = t("__VUE_SSR_SETTERS__", (n) => Eo = n);
}
const ti = (e) => {
  const t = Gt;
  return Wi(e), e.scope.on(), () => {
    e.scope.off(), Wi(t);
  };
}, Hd = () => {
  Gt && Gt.scope.off(), Wi(null);
};
function Zm(e) {
  return e.vnode.shapeFlag & 4;
}
let Eo = false;
function WS(e, t = false, n = false) {
  t && Ms(t);
  const { props: a, children: l } = e.vnode, o = Zm(e);
  IS(e, a, o, t), DS(e, l, n || t);
  const i = o ? jS(e, t) : void 0;
  return t && Ms(false), i;
}
function jS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fS);
  const { setup: a } = n;
  if (a) {
    ia();
    const l = e.setupContext = a.length > 1 ? YS(e) : null, o = ti(e), i = Jo(a, e, 0, [e.props, l]), r = Ov(i);
    if (ra(), o(), (r || e.sp) && !wo(e) && _m(e), r) {
      if (i.then(Hd, Hd), t) return i.then((s) => {
        zd(e, s);
      }).catch((s) => {
        dr(s, e, 0);
      });
      e.asyncDep = i;
    } else zd(e, i);
  } else Jm(e);
}
function zd(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = cm(t)), Jm(e);
}
function Jm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Nn);
  {
    const l = ti(e);
    ia();
    try {
      vS(e);
    } finally {
      ra(), l();
    }
  }
}
const US = { get(e, t) {
  return Ut(e, "get", ""), e[t];
} };
function YS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, US), slots: e.slots, emit: e.emit, expose: t };
}
function yr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(cm(sm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in ko) return ko[n](e);
  }, has(t, n) {
    return n in t || n in ko;
  } })) : e.proxy;
}
function GS(e, t = true) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function KS(e) {
  return He(e) && "__vccOpts" in e;
}
const V = (e, t) => Yp(e, t, Eo);
function va(e, t, n) {
  try {
    zi(-1);
    const a = arguments.length;
    return a === 2 ? et(t) && !Le(t) ? Mo(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Mo(n) && (n = [n]), g(e, t, n));
  } finally {
    zi(1);
  }
}
const qS = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Es;
const Wd = typeof window < "u" && window.trustedTypes;
if (Wd) try {
  Es = Wd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Qm = Es ? (e) => Es.createHTML(e) : (e) => e, XS = "http://www.w3.org/2000/svg", ZS = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, jd = Qn && Qn.createElement("template"), JS = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? Qn.createElementNS(XS, e) : t === "mathml" ? Qn.createElementNS(ZS, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => Qn.createTextNode(e), createComment: (e) => Qn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Qn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === o || !(l = l.nextSibling)); ) ;
  else {
    jd.innerHTML = Qm(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = jd.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Sa = "transition", io = "animation", Hl = Symbol("_vtc"), eg = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, tg = At({}, km, eg), QS = (e) => (e.displayName = "Transition", e.props = tg, e), Ta = QS((e, { slots: t }) => va(lS, ng(e), t)), za = (e, t = []) => {
  Le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ud = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function ng(e) {
  const t = {};
  for (const D in e) D in eg || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, p = e0(l), m = p && p[0], b = p && p[1], { onBeforeEnter: h, onEnter: x, onEnterCancelled: _, onLeave: I, onLeaveCancelled: S, onBeforeAppear: y = h, onAppear: C = x, onAppearCancelled: w = _ } = t, A = (D, M, T, L) => {
    D._enterCancelled = L, wa(D, M ? c : r), wa(D, M ? u : i), T && T();
  }, P = (D, M) => {
    D._isLeaving = false, wa(D, d), wa(D, v), wa(D, f), M && M();
  }, E = (D) => (M, T) => {
    const L = D ? C : x, Y = () => A(M, D, T);
    za(L, [M, Y]), Yd(() => {
      wa(M, D ? s : o), $n(M, D ? c : r), Ud(L) || Gd(M, a, m, Y);
    });
  };
  return At(t, { onBeforeEnter(D) {
    za(h, [D]), $n(D, o), $n(D, i);
  }, onBeforeAppear(D) {
    za(y, [D]), $n(D, s), $n(D, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const T = () => P(D, M);
    $n(D, d), D._enterCancelled ? ($n(D, f), Bs(D)) : (Bs(D), $n(D, f)), Yd(() => {
      D._isLeaving && (wa(D, d), $n(D, v), Ud(I) || Gd(D, a, b, T));
    }), za(I, [D, T]);
  }, onEnterCancelled(D) {
    A(D, false, void 0, true), za(_, [D]);
  }, onAppearCancelled(D) {
    A(D, true, void 0, true), za(w, [D]);
  }, onLeaveCancelled(D) {
    P(D), za(S, [D]);
  } });
}
function e0(e) {
  if (e == null) return null;
  if (et(e)) return [as(e.enter), as(e.leave)];
  {
    const t = as(e);
    return [t, t];
  }
}
function as(e) {
  return fp(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hl] || (e[Hl] = /* @__PURE__ */ new Set())).add(t);
}
function wa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Hl];
  n && (n.delete(t), n.size || (e[Hl] = void 0));
}
function Yd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let t0 = 0;
function Gd(e, t, n, a) {
  const l = e._endId = ++t0, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = ag(e, t);
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
function ag(e, t) {
  const n = window.getComputedStyle(e), a = (p) => (n[p] || "").split(", "), l = a(`${Sa}Delay`), o = a(`${Sa}Duration`), i = Kd(l, o), r = a(`${io}Delay`), s = a(`${io}Duration`), u = Kd(r, s);
  let c = null, d = 0, f = 0;
  t === Sa ? i > 0 && (c = Sa, d = i, f = o.length) : t === io ? u > 0 && (c = io, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? Sa : io : null, f = c ? c === Sa ? o.length : s.length : 0);
  const v = c === Sa && /\b(?:transform|all)(?:,|$)/.test(a(`${Sa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function Kd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => qd(n) + qd(e[a])));
}
function qd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function n0(e, t, n) {
  const a = e[Hl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ji = Symbol("_vod"), lg = Symbol("_vsh"), Mn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[ji] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ro(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: a }) {
  !t != !n && (a ? t ? (a.beforeEnter(e), ro(e, true), a.enter(e)) : a.leave(e, () => {
    ro(e, false);
  }) : ro(e, t));
}, beforeUnmount(e, { value: t }) {
  ro(e, t);
} };
function ro(e, t) {
  e.style.display = t ? e[ji] : "none", e[lg] = !t;
}
const a0 = Symbol(""), l0 = /(?:^|;)\s*display\s*:/;
function o0(e, t, n) {
  const a = e.style, l = mt(n);
  let o = false;
  if (n && !l) {
    if (t) if (mt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Mi(a, r, "");
    }
    else for (const i in t) n[i] == null && Mi(a, i, "");
    for (const i in n) i === "display" && (o = true), Mi(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[a0];
      i && (n += ";" + i), a.cssText = n, o = l0.test(n);
    }
  } else t && e.removeAttribute("style");
  ji in e && (e[ji] = o ? a.display : "", e[lg] && (a.display = "none"));
}
const Xd = /\s*!important$/;
function Mi(e, t, n) {
  if (Le(n)) n.forEach((a) => Mi(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = i0(e, t);
    Xd.test(n) ? e.setProperty(fl(a), n.replace(Xd, ""), "important") : e[a] = n;
  }
}
const Zd = ["Webkit", "Moz", "ms"], ls = {};
function i0(e, t) {
  const n = ls[t];
  if (n) return n;
  let a = an(t);
  if (a !== "filter" && a in e) return ls[t] = a;
  a = Yn(a);
  for (let l = 0; l < Zd.length; l++) {
    const o = Zd[l] + a;
    if (o in e) return ls[t] = o;
  }
  return t;
}
const Jd = "http://www.w3.org/1999/xlink";
function Qd(e, t, n, a, l, o = pp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Jd, t.slice(6, t.length)) : e.setAttributeNS(Jd, t, n) : n == null || o && !Wv(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Hn(n) ? String(n) : n);
}
function ef(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qm(n) : n);
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
    r === "boolean" ? n = Wv(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function Al(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function r0(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const tf = Symbol("_vei");
function s0(e, t, n, a, l = null) {
  const o = e[tf] || (e[tf] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = u0(t);
    if (a) {
      const u = o[t] = f0(a, l);
      Al(e, r, u, s);
    } else i && (r0(e, r, i, s), o[t] = void 0);
  }
}
const nf = /(?:Once|Passive|Capture)$/;
function u0(e) {
  let t;
  if (nf.test(e)) {
    t = {};
    let a;
    for (; a = e.match(nf); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : fl(e.slice(2)), t];
}
let os = 0;
const c0 = Promise.resolve(), d0 = () => os || (c0.then(() => os = 0), os = Date.now());
function f0(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    An(v0(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = d0(), n;
}
function v0(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const af = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, m0 = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? n0(e, a, i) : t === "style" ? o0(e, n, a) : ir(t) ? Du(t) || s0(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : g0(e, t, a, i)) ? (ef(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !mt(a)) ? ef(e, an(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Qd(e, t, a, i));
};
function g0(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && af(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return af(t) && mt(n) ? false : t in e;
}
const og = /* @__PURE__ */ new WeakMap(), ig = /* @__PURE__ */ new WeakMap(), Ui = Symbol("_moveCb"), lf = Symbol("_enterCb"), h0 = (e) => (delete e.props.mode, e), y0 = h0({ name: "TransitionGroup", props: At({}, tg, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ei(), a = wm();
  let l, o;
  return mr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!w0(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(b0), l.forEach(p0);
    const r = l.filter(S0);
    Bs(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      $n(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Ui] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Ui] = null, wa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Te(e), r = ng(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), nl(c, To(c, r, a, n)), og.set(c, rg(c.el)));
    }
    o = t.default ? Wu(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && nl(c, To(c, r, a, n));
    }
    return g(s, null, o);
  };
} }), qu = y0;
function b0(e) {
  const t = e.el;
  t[Ui] && t[Ui](), t[lf] && t[lf]();
}
function p0(e) {
  ig.set(e, rg(e.el));
}
function S0(e) {
  const t = og.get(e), n = ig.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function rg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function w0(e, t, n) {
  const a = e.cloneNode(), l = e[Hl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = ag(a);
  return o.removeChild(a), i;
}
const of = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Le(t) ? (n) => Ai(t, n) : t;
};
function k0(e) {
  e.target.composing = true;
}
function rf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function sf(e, t, n) {
  return t && (e = e.trim()), n && (e = Eu(e)), e;
}
const x0 = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[is] = of(l);
  const o = a || l.props && l.props.type === "number";
  Al(e, t ? "change" : "input", (i) => {
    i.target.composing || e[is](sf(e.value, n, o));
  }), (n || o) && Al(e, "change", () => {
    e.value = sf(e.value, n, o);
  }), t || (Al(e, "compositionstart", k0), Al(e, "compositionend", rf), Al(e, "change", rf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[is] = of(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Eu(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, C0 = ["ctrl", "shift", "alt", "meta"], V0 = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => C0.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = V0[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, _0 = At({ patchProp: m0 }, JS);
let uf;
function sg() {
  return uf || (uf = ES(_0));
}
const ug = ((...e) => {
  sg().render(...e);
}), I0 = ((...e) => {
  const t = sg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = A0(a);
    if (!l) return;
    const o = t._component;
    !He(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, P0(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function P0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function A0(e) {
  return mt(e) ? document.querySelector(e) : e;
}
const cf = () => {
};
function T0(e) {
  const t = `[${e}]`;
  return { debug: cf, info: cf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const df = 5;
function ff(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * df)));
  return e / (l * df);
}
function vf(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function D0(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
const Xu = 1, Zu = `gol.gridBlankZones.v${Xu}`, M0 = 128, E0 = /* @__PURE__ */ new Set(["minor", "major", "both"]), B0 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function rs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Dl(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function $0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function F0(e) {
  return typeof e == "string" && E0.has(e) ? e : "both";
}
function L0(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && B0.has(t.style) ? t.style : "none", a = rs(Dl(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = rs(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = rs(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Dl(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function R0(e) {
  return typeof e == "boolean" ? e : true;
}
function mf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function $s(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Dl(n.x1), l = Dl(n.y1), o = Dl(n.x2), i = Dl(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : $0(), x1: r, y1: u, x2: s, y2: c, mode: F0(n.mode), edge: L0(n.edge), enabled: R0(n.enabled), createdAt: mf(n.createdAt, t), updatedAt: mf(n.updatedAt, t) };
}
function Ju(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= M0) break;
    const l = $s(a, t);
    l && n.push(l);
  }
  return n;
}
function Qu() {
  return typeof localStorage < "u";
}
function O0() {
  if (!Qu()) return [];
  try {
    const e = localStorage.getItem(Zu);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== Xu ? [] : Ju(t.zones);
  } catch {
    return [];
  }
}
function N0(e) {
  if (!Qu()) return;
  const t = { version: Xu, zones: Ju(e) };
  localStorage.setItem(Zu, JSON.stringify(t));
}
function H0() {
  Qu() && localStorage.removeItem(Zu);
}
function z0(e = {}) {
  const t = K(O0());
  function n(u) {
    const c = Ju(u);
    return t.value = c, N0(c), c;
  }
  function a(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetZones) == null ? void 0 : _a3.call(e, c);
  }
  function l(u) {
    var _a3;
    const c = $s(u);
    c && (n([...t.value, c]), (_a3 = e.onAddZone) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = $s(u);
    if (!c || !t.value.some((f) => f.id === c.id)) return;
    const d = t.value.map((f) => f.id === c.id ? c : f);
    n(d), (_a3 = e.onUpdateZone) == null ? void 0 : _a3.call(e, c);
  }
  function i(u) {
    var _a3;
    if (!t.value.some((d) => d.id === u)) return;
    const c = t.value.filter((d) => d.id !== u);
    n(c), (_a3 = e.onRemoveZone) == null ? void 0 : _a3.call(e, u);
  }
  function r() {
    var _a3;
    t.value.length !== 0 && (t.value = [], H0(), (_a3 = e.onClearZones) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { zones: t, setZones: a, addZone: l, updateZone: o, removeZone: i, clearZones: r, syncFromWorker: s };
}
const W0 = 32, ec = 1, tc = `gol.decals.v${ec}`, Qt = [0.49, 0.3, 1, 0.6], j0 = /* @__PURE__ */ new Set(["solid", "checkerboard", "stripes", "dots", "bitmap"]), U0 = /* @__PURE__ */ new Set(["alpha", "multiply", "screen"]);
function Ca(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function on(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function wi(e) {
  const t = on(e);
  return t === null ? null : Math.trunc(t);
}
function Y0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function G0(e) {
  return typeof e == "string" && j0.has(e) ? e : "solid";
}
function K0(e) {
  return typeof e == "string" && U0.has(e) ? e : "alpha";
}
function q0(e) {
  const t = e && typeof e == "object" ? e : {}, n = G0(t.kind), a = { kind: n };
  return n === "solid" ? (a.coverage = Ca(on(t.coverage) ?? 1, 0, 1), a.solidR = Ca(on(t.solidR) ?? Qt[0], 0, 1), a.solidG = Ca(on(t.solidG) ?? Qt[1], 0, 1), a.solidB = Ca(on(t.solidB) ?? Qt[2], 0, 1)) : n === "checkerboard" ? a.cellSize = Math.max(1, on(t.cellSize) ?? 2) : n === "stripes" ? a.pitchCells = Math.max(2, on(t.pitchCells) ?? 4) : n === "dots" && (a.dotRadius = Math.max(0.1, on(t.dotRadius) ?? 0.4), a.dotSpacing = Math.max(2, on(t.dotSpacing) ?? 3)), a;
}
function X0(e) {
  return !Array.isArray(e) || e.length < 4 ? [...Qt] : [Ca(on(e[0]) ?? Qt[0], 0, 1), Ca(on(e[1]) ?? Qt[1], 0, 1), Ca(on(e[2]) ?? Qt[2], 0, 1), Ca(on(e[3]) ?? Qt[3], 0, 1)];
}
function Z0(e) {
  return typeof e == "boolean" ? e : true;
}
function gf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Fs(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = wi(n.x1), l = wi(n.y1), o = wi(n.x2), i = wi(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Y0(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), pattern: q0(n.pattern), tint: X0(n.tint), blendMode: K0(n.blendMode), suppressCells: typeof n.suppressCells == "boolean" ? n.suppressCells : false, enabled: Z0(n.enabled), createdAt: gf(n.createdAt, t), updatedAt: gf(n.updatedAt, t) };
}
function nc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= W0) break;
    const l = Fs(a, t);
    l && n.push(l);
  }
  return n;
}
function ac() {
  return typeof localStorage < "u";
}
function J0() {
  if (!ac()) return [];
  try {
    const e = localStorage.getItem(tc);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== ec ? [] : nc(t.decals);
  } catch {
    return [];
  }
}
function Q0(e) {
  if (!ac()) return;
  const t = { version: ec, decals: nc(e) };
  localStorage.setItem(tc, JSON.stringify(t));
}
function ew() {
  ac() && localStorage.removeItem(tc);
}
function tw(e = {}) {
  const t = K(J0());
  function n(u) {
    const c = nc(u);
    return t.value = c, Q0(c), c;
  }
  function a(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetDecals) == null ? void 0 : _a3.call(e, c);
  }
  function l(u) {
    var _a3;
    const c = Fs(u);
    c && (n([...t.value, c]), (_a3 = e.onAddDecal) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = Fs(u);
    if (!c || !t.value.some((f) => f.id === c.id)) return;
    const d = t.value.map((f) => f.id === c.id ? c : f);
    n(d), (_a3 = e.onUpdateDecal) == null ? void 0 : _a3.call(e, c);
  }
  function i(u) {
    var _a3;
    if (!t.value.some((d) => d.id === u)) return;
    const c = t.value.filter((d) => d.id !== u);
    n(c), (_a3 = e.onRemoveDecal) == null ? void 0 : _a3.call(e, u);
  }
  function r() {
    var _a3;
    t.value.length !== 0 && (t.value = [], ew(), (_a3 = e.onClearDecals) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { decals: t, setDecals: a, addDecal: l, updateDecal: o, removeDecal: i, clearDecals: r, syncFromWorker: s };
}
const Yi = 4, lc = 1, oc = `gol.hires.v${lc}`;
function ki(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function nw() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function hf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Gi(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = ki(n.x1), l = ki(n.y1), o = ki(n.x2), i = ki(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : nw(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), multiplier: Yi, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, createdAt: hf(n.createdAt, t), updatedAt: hf(n.updatedAt, t) };
}
function ic() {
  return typeof localStorage < "u";
}
function aw() {
  if (!ic()) return null;
  try {
    const e = localStorage.getItem(oc);
    if (!e) return null;
    const t = JSON.parse(e);
    return t.version !== lc ? null : Gi(t.region);
  } catch {
    return null;
  }
}
function lw(e) {
  if (!ic()) return;
  const t = { version: lc, region: e ? Gi(e) : null };
  localStorage.setItem(oc, JSON.stringify(t));
}
function ow() {
  ic() && localStorage.removeItem(oc);
}
function iw(e = {}) {
  const t = K(aw());
  function n(i) {
    const r = i ? Gi(i) : null;
    return t.value = r, lw(r), r;
  }
  function a(i) {
    var _a3;
    const r = Gi(i);
    r && (n(r), (_a3 = e.onSetRegion) == null ? void 0 : _a3.call(e, r));
  }
  function l() {
    var _a3;
    t.value && (t.value = null, ow(), (_a3 = e.onClearRegion) == null ? void 0 : _a3.call(e));
  }
  function o(i) {
    n(i);
  }
  return { region: t, setRegion: a, clearRegion: l, syncFromWorker: o };
}
const rw = { key: 0, class: "zone-preview-text" }, sw = { class: "zone-list" }, uw = { class: "zone-text" }, cw = { class: "zone-coords" }, dw = { class: "zone-actions" }, fw = { key: 0, class: "zone-empty" }, vw = xn({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = K(false), o = K(false), i = K(0), r = K(0), s = K(4), u = K(4), c = K("both"), d = K("none"), f = K(1), v = K(1), p = K(0.6), m = K(2), b = K(false), h = V(() => n.zones.filter((E) => !!E && typeof E.id == "string" && E.id.length > 0 && typeof E.x1 == "number" && typeof E.y1 == "number" && typeof E.x2 == "number" && typeof E.y2 == "number" && typeof E.mode == "string" && !!E.edge && typeof E.edge.style == "string"));
  function x(E) {
    return E.id.slice(0, 6);
  }
  function _() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, p.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? b.value : void 0 };
  }
  const I = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], S = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function y() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const E = Date.now();
    a("add-zone", { id: y(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: _(), enabled: true, createdAt: E, updatedAt: E });
  }
  function w(E) {
    a("update-zone", { ...E, enabled: !E.enabled, updatedAt: Date.now() });
  }
  function A() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: _() });
  }
  return de(l, A, { immediate: true }), de(o, A, { immediate: true }), de([c, d, f, v, p, m, b], P, { immediate: true }), (E, D) => {
    const M = Ne("v-switch"), T = Ne("v-text-field"), L = Ne("v-col"), Y = Ne("v-row"), H = Ne("v-select"), G = Ne("v-btn"), O = Ne("v-divider");
    return Ye(), ht(be, null, [g(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (F) => l.value = F), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), g(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (F) => o.value = F), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Ye(), ht("div", rw, " Preview: (" + Oe(n.previewRect.x1) + "," + Oe(n.previewRect.y1) + ") \u2192 (" + Oe(n.previewRect.x2) + "," + Oe(n.previewRect.y2) + ") ", 1)) : la("", true), g(Y, { dense: "" }, { default: pe(() => [g(L, { cols: "3" }, { default: pe(() => [g(T, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (F) => i.value = F), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(L, { cols: "3" }, { default: pe(() => [g(T, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (F) => r.value = F), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(L, { cols: "3" }, { default: pe(() => [g(T, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (F) => s.value = F), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(L, { cols: "3" }, { default: pe(() => [g(T, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value = F), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Y, { dense: "", class: "mt-2" }, { default: pe(() => [g(L, { cols: "6" }, { default: pe(() => [g(H, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (F) => c.value = F), items: I, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(L, { cols: "6" }, { default: pe(() => [g(H, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (F) => d.value = F), items: S, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Y, { dense: "", class: "mt-2" }, { default: pe(() => [g(L, { cols: "6" }, { default: pe(() => [g(T, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (F) => f.value = F), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(L, { cols: "6" }, { default: pe(() => [g(T, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (F) => v.value = F), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Ye(), qt(Y, { key: 1, dense: "", class: "mt-2" }, { default: pe(() => [g(L, { cols: "12" }, { default: pe(() => [g(T, { modelValue: p.value, "onUpdate:modelValue": D[10] || (D[10] = (F) => p.value = F), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : la("", true), d.value === "noted" ? (Ye(), qt(Y, { key: 2, dense: "", class: "mt-2" }, { default: pe(() => [g(L, { cols: "12" }, { default: pe(() => [g(T, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (F) => m.value = F), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : la("", true), d.value === "bold-major" || d.value === "noted" ? (Ye(), qt(Y, { key: 3, dense: "", class: "mt-1" }, { default: pe(() => [g(L, { cols: "12" }, { default: pe(() => [g(M, { modelValue: b.value, "onUpdate:modelValue": D[12] || (D[12] = (F) => b.value = F), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : la("", true), g(G, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: pe(() => [...D[14] || (D[14] = [je(" Add Zone ", -1)])]), _: 1 }), g(O, { class: "my-3" }), k("div", sw, [(Ye(true), ht(be, null, al(h.value, (F) => (Ye(), ht("div", { key: F.id, class: "zone-row" }, [k("div", uw, [k("div", null, "#" + Oe(x(F)) + " \xB7 " + Oe(F.mode) + " \xB7 " + Oe(F.edge.style), 1), k("div", cw, "(" + Oe(F.x1) + "," + Oe(F.y1) + ") \u2192 (" + Oe(F.x2) + "," + Oe(F.y2) + ")", 1)]), k("div", dw, [g(G, { size: "x-small", variant: "text", onClick: (J) => w(F) }, { default: pe(() => [je(Oe(F.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(G, { size: "x-small", variant: "text", color: "error", onClick: (J) => a("remove-zone", F.id) }, { default: pe(() => [...D[15] || (D[15] = [je("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (Ye(), ht("div", fw, "No zones.")) : la("", true)]), g(G, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = (F) => a("clear-zones")) }, { default: pe(() => [...D[16] || (D[16] = [je(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), ni = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, mw = ni(vw, [["__scopeId", "data-v-223984b2"]]), gw = { class: "decal-list" }, hw = { class: "decal-text" }, yw = { class: "decal-coords" }, bw = { class: "decal-actions" }, pw = { key: 0, class: "decal-empty" }, Sw = xn({ __name: "GridDecalTab", props: { decals: {} }, emits: ["add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = K(false), o = K(false), i = K("solid"), r = K("alpha"), s = K(false), u = K(Qt[0]), c = K(Qt[1]), d = K(Qt[2]), f = K(Qt[3]), v = K(1), p = K(Qt[0]), m = K(Qt[1]), b = K(Qt[2]), h = K(2), x = K(4), _ = K(0.4), I = K(3), S = K(0), y = K(0), C = K(4), w = K(4), A = [{ title: "Solid", value: "solid" }, { title: "Checkerboard", value: "checkerboard" }, { title: "Stripes", value: "stripes" }, { title: "Dots", value: "dots" }], P = [{ title: "Alpha", value: "alpha" }, { title: "Multiply", value: "multiply" }, { title: "Screen", value: "screen" }], E = V(() => n.decals.filter((G) => !!G && typeof G.id == "string" && G.id.length > 0 && typeof G.x1 == "number" && typeof G.y1 == "number" && typeof G.x2 == "number" && typeof G.y2 == "number" && !!G.pattern && typeof G.pattern.kind == "string"));
  function D(G) {
    return G.id.slice(0, 6);
  }
  function M() {
    const G = i.value;
    return G === "solid" ? { kind: G, coverage: Math.max(0, Math.min(1, v.value)), solidR: Math.max(0, Math.min(1, p.value)), solidG: Math.max(0, Math.min(1, m.value)), solidB: Math.max(0, Math.min(1, b.value)) } : G === "checkerboard" ? { kind: G, cellSize: Math.max(1, h.value) } : G === "stripes" ? { kind: G, pitchCells: Math.max(2, x.value) } : G === "dots" ? { kind: G, dotRadius: Math.max(0.1, _.value), dotSpacing: Math.max(2, I.value) } : { kind: G };
  }
  function T() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function L() {
    const G = Date.now();
    a("add-decal", { id: T(), x1: Math.min(Math.trunc(S.value), Math.trunc(C.value)), y1: Math.min(Math.trunc(y.value), Math.trunc(w.value)), x2: Math.max(Math.trunc(S.value), Math.trunc(C.value)), y2: Math.max(Math.trunc(y.value), Math.trunc(w.value)), pattern: M(), tint: [Math.max(0, Math.min(1, u.value)), Math.max(0, Math.min(1, c.value)), Math.max(0, Math.min(1, d.value)), Math.max(0, Math.min(1, f.value))], blendMode: r.value, suppressCells: s.value, enabled: true, createdAt: G, updatedAt: G });
  }
  function Y(G) {
    a("update-decal", { ...G, enabled: !G.enabled, updatedAt: Date.now() });
  }
  function H() {
    a("decal-tool-change", { enabled: l.value, snapMajor: o.value });
  }
  return de(l, H, { immediate: true }), de(o, H, { immediate: true }), (G, O) => {
    const F = Ne("v-switch"), J = Ne("v-select"), z = Ne("v-col"), R = Ne("v-row"), U = Ne("v-text-field"), re = Ne("v-btn"), ke = Ne("v-divider");
    return Ye(), ht(be, null, [g(F, { modelValue: l.value, "onUpdate:modelValue": O[0] || (O[0] = (q) => l.value = q), class: "mt-2", inset: "", density: "compact", color: "primary", "hide-details": "", label: "Decal Tool (drag on page)" }, null, 8, ["modelValue"]), g(F, { modelValue: o.value, "onUpdate:modelValue": O[1] || (O[1] = (q) => o.value = q), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), g(R, { dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "6" }, { default: pe(() => [g(J, { modelValue: i.value, "onUpdate:modelValue": O[2] || (O[2] = (q) => i.value = q), items: A, "item-title": "title", "item-value": "value", label: "Kind", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "6" }, { default: pe(() => [g(J, { modelValue: r.value, "onUpdate:modelValue": O[3] || (O[3] = (q) => r.value = q), items: P, "item-title": "title", "item-value": "value", label: "Blend", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), i.value === "solid" ? (Ye(), ht(be, { key: 0 }, [g(R, { dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "12" }, { default: pe(() => [g(U, { modelValue: v.value, "onUpdate:modelValue": O[4] || (O[4] = (q) => v.value = q), modelModifiers: { number: true }, label: "Coverage (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(R, { dense: "", class: "mt-1" }, { default: pe(() => [g(z, { cols: "4" }, { default: pe(() => [g(U, { modelValue: p.value, "onUpdate:modelValue": O[5] || (O[5] = (q) => p.value = q), modelModifiers: { number: true }, label: "R", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "4" }, { default: pe(() => [g(U, { modelValue: m.value, "onUpdate:modelValue": O[6] || (O[6] = (q) => m.value = q), modelModifiers: { number: true }, label: "G", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "4" }, { default: pe(() => [g(U, { modelValue: b.value, "onUpdate:modelValue": O[7] || (O[7] = (q) => b.value = q), modelModifiers: { number: true }, label: "B", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })], 64)) : i.value === "checkerboard" ? (Ye(), qt(R, { key: 1, dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "12" }, { default: pe(() => [g(U, { modelValue: h.value, "onUpdate:modelValue": O[8] || (O[8] = (q) => h.value = q), modelModifiers: { number: true }, label: "Cell size (>=1)", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "stripes" ? (Ye(), qt(R, { key: 2, dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "12" }, { default: pe(() => [g(U, { modelValue: x.value, "onUpdate:modelValue": O[9] || (O[9] = (q) => x.value = q), modelModifiers: { number: true }, label: "Pitch cells (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "dots" ? (Ye(), qt(R, { key: 3, dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "6" }, { default: pe(() => [g(U, { modelValue: _.value, "onUpdate:modelValue": O[10] || (O[10] = (q) => _.value = q), modelModifiers: { number: true }, label: "Radius (>=0.1)", type: "number", min: "0.1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "6" }, { default: pe(() => [g(U, { modelValue: I.value, "onUpdate:modelValue": O[11] || (O[11] = (q) => I.value = q), modelModifiers: { number: true }, label: "Spacing (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : la("", true), g(R, { dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: u.value, "onUpdate:modelValue": O[12] || (O[12] = (q) => u.value = q), modelModifiers: { number: true }, label: "TR", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: c.value, "onUpdate:modelValue": O[13] || (O[13] = (q) => c.value = q), modelModifiers: { number: true }, label: "TG", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: d.value, "onUpdate:modelValue": O[14] || (O[14] = (q) => d.value = q), modelModifiers: { number: true }, label: "TB", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: f.value, "onUpdate:modelValue": O[15] || (O[15] = (q) => f.value = q), modelModifiers: { number: true }, label: "TA", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(F, { modelValue: s.value, "onUpdate:modelValue": O[16] || (O[16] = (q) => s.value = q), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Suppress cells" }, null, 8, ["modelValue"]), g(R, { dense: "", class: "mt-2" }, { default: pe(() => [g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: S.value, "onUpdate:modelValue": O[17] || (O[17] = (q) => S.value = q), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: y.value, "onUpdate:modelValue": O[18] || (O[18] = (q) => y.value = q), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: C.value, "onUpdate:modelValue": O[19] || (O[19] = (q) => C.value = q), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: pe(() => [g(U, { modelValue: w.value, "onUpdate:modelValue": O[20] || (O[20] = (q) => w.value = q), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(re, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: L }, { default: pe(() => [...O[22] || (O[22] = [je(" Add Decal ", -1)])]), _: 1 }), g(ke, { class: "my-3" }), k("div", gw, [(Ye(true), ht(be, null, al(E.value, (q) => (Ye(), ht("div", { key: q.id, class: "decal-row" }, [k("div", hw, [k("div", null, "#" + Oe(D(q)) + " \xB7 " + Oe(q.pattern.kind) + " \xB7 " + Oe(q.blendMode), 1), k("div", yw, "(" + Oe(q.x1) + "," + Oe(q.y1) + ") \u2192 (" + Oe(q.x2) + "," + Oe(q.y2) + ")", 1)]), k("div", bw, [g(re, { size: "x-small", variant: "text", onClick: (ve) => Y(q) }, { default: pe(() => [je(Oe(q.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(re, { size: "x-small", variant: "text", color: "error", onClick: (ve) => a("remove-decal", q.id) }, { default: pe(() => [...O[23] || (O[23] = [je("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), E.value.length === 0 ? (Ye(), ht("div", pw, "No decals.")) : la("", true)]), g(re, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: E.value.length === 0, onClick: O[21] || (O[21] = (q) => a("clear-decals")) }, { default: pe(() => [...O[24] || (O[24] = [je(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), ww = ni(Sw, [["__scopeId", "data-v-83067205"]]), kw = { class: "hires-tab" }, xw = { class: "text-caption text-medium-emphasis mb-2" }, Cw = { class: "d-flex align-center justify-space-between" }, Vw = { class: "text-body-2" }, _w = { class: "text-caption text-medium-emphasis" }, Iw = { class: "d-flex align-center gap-2 mt-2" }, Pw = xn({ __name: "GridHiResTab", props: { region: {} }, emits: ["set-region", "clear-region", "hires-tool-change"], setup(e, { emit: t }) {
  const n = t, a = K(false);
  function l() {
    a.value = !a.value, n("hires-tool-change", { enabled: a.value });
  }
  function o(u) {
    n("set-region", { ...u, enabled: !u.enabled, updatedAt: Date.now() });
  }
  function i(u) {
    n("set-region", { ...u, showGrid: !u.showGrid, updatedAt: Date.now() });
  }
  function r(u) {
    n("set-region", { ...u, showBaseGrid: !u.showBaseGrid, updatedAt: Date.now() });
  }
  function s(u) {
    n("set-region", { ...u, showBorder: !u.showBorder, updatedAt: Date.now() });
  }
  return (u, c) => {
    const d = Ne("v-btn"), f = Ne("v-chip"), v = Ne("v-card");
    return Ye(), ht("div", kw, [k("p", xw, Oe(_t(Yi)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), e.region ? (Ye(), qt(v, { key: 1, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: pe(() => [k("div", Cw, [k("span", Vw, " (" + Oe(e.region.x1) + ", " + Oe(e.region.y1) + ") \u2014 (" + Oe(e.region.x2) + ", " + Oe(e.region.y2) + ") ", 1), g(f, { size: "x-small", color: e.region.enabled ? "success" : "grey", variant: "flat" }, { default: pe(() => [je(Oe(e.region.enabled ? "Active" : "Paused"), 1)]), _: 1 }, 8, ["color"])]), k("div", _w, Oe(_t(Yi)) + "x \xB7 " + Oe((e.region.x2 - e.region.x1 + 1) * (e.region.y2 - e.region.y1 + 1)) + " base cells ", 1), k("div", Iw, [g(d, { size: "x-small", variant: "tonal", onClick: c[0] || (c[0] = (p) => o(e.region)) }, { default: pe(() => [je(Oe(e.region.enabled ? "Pause" : "Resume"), 1)]), _: 1 }), g(d, { size: "x-small", variant: "tonal", onClick: c[1] || (c[1] = (p) => i(e.region)) }, { default: pe(() => [je(" Grid " + Oe(e.region.showGrid ? "On" : "Off"), 1)]), _: 1 }), g(d, { size: "x-small", variant: "tonal", onClick: c[2] || (c[2] = (p) => r(e.region)) }, { default: pe(() => [je(" Base " + Oe(e.region.showBaseGrid ? "On" : "Off"), 1)]), _: 1 }), g(d, { size: "x-small", variant: "tonal", onClick: c[3] || (c[3] = (p) => s(e.region)) }, { default: pe(() => [je(" Border " + Oe(e.region.showBorder ? "On" : "Off"), 1)]), _: 1 }), g(d, { size: "x-small", variant: "tonal", color: "error", onClick: c[4] || (c[4] = (p) => u.$emit("clear-region")) }, { default: pe(() => [...c[5] || (c[5] = [je(" Delete ", -1)])]), _: 1 })])]), _: 1 })) : (Ye(), qt(d, { key: 0, color: a.value ? "primary" : void 0, variant: a.value ? "flat" : "tonal", size: "small", block: "", onClick: l }, { default: pe(() => [je(Oe(a.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant"]))]);
  };
} }), Aw = xn({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, decals: {}, hiresRegion: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change", "set-hires-region", "clear-hires-region", "hires-tool-change"], setup(e) {
  const t = K("zones"), n = K(false);
  return (a, l) => {
    const o = Ne("v-btn"), i = Ne("v-card-title"), r = Ne("v-tab"), s = Ne("v-tabs"), u = Ne("v-tabs-window-item"), c = Ne("v-tabs-window"), d = Ne("v-card-text"), f = Ne("v-card");
    return Ye(), ht("aside", { class: ae(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Ye(), qt(o, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: l[17] || (l[17] = (v) => n.value = false) }, { default: pe(() => [...l[23] || (l[23] = [je(" Grid Tools ", -1)])]), _: 1 })) : (Ye(), qt(f, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: pe(() => [g(i, { class: "zone-title" }, { default: pe(() => [l[19] || (l[19] = k("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), g(o, { size: "x-small", variant: "text", onClick: l[0] || (l[0] = (v) => n.value = true) }, { default: pe(() => [...l[18] || (l[18] = [je("Collapse", -1)])]), _: 1 })]), _: 1 }), g(s, { modelValue: t.value, "onUpdate:modelValue": l[1] || (l[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: pe(() => [g(r, { value: "zones" }, { default: pe(() => [...l[20] || (l[20] = [je("Zones", -1)])]), _: 1 }), g(r, { value: "decals" }, { default: pe(() => [...l[21] || (l[21] = [je("Decals", -1)])]), _: 1 }), g(r, { value: "hires" }, { default: pe(() => [...l[22] || (l[22] = [je("Hi-Res", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), g(d, { class: "pt-2" }, { default: pe(() => [g(c, { modelValue: t.value, "onUpdate:modelValue": l[16] || (l[16] = (v) => t.value = v) }, { default: pe(() => [g(u, { value: "zones" }, { default: pe(() => [g(mw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: l[2] || (l[2] = (v) => a.$emit("add-zone", v)), onUpdateZone: l[3] || (l[3] = (v) => a.$emit("update-zone", v)), onRemoveZone: l[4] || (l[4] = (v) => a.$emit("remove-zone", v)), onClearZones: l[5] || (l[5] = (v) => a.$emit("clear-zones")), onToolChange: l[6] || (l[6] = (v) => a.$emit("tool-change", v)), onDraftChange: l[7] || (l[7] = (v) => a.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), g(u, { value: "decals" }, { default: pe(() => [g(ww, { decals: e.decals, onAddDecal: l[8] || (l[8] = (v) => a.$emit("add-decal", v)), onUpdateDecal: l[9] || (l[9] = (v) => a.$emit("update-decal", v)), onRemoveDecal: l[10] || (l[10] = (v) => a.$emit("remove-decal", v)), onClearDecals: l[11] || (l[11] = (v) => a.$emit("clear-decals")), onDecalToolChange: l[12] || (l[12] = (v) => a.$emit("decal-tool-change", v)) }, null, 8, ["decals"])]), _: 1 }), g(u, { value: "hires" }, { default: pe(() => [g(Pw, { region: e.hiresRegion ?? null, onSetRegion: l[13] || (l[13] = (v) => a.$emit("set-hires-region", v)), onClearRegion: l[14] || (l[14] = (v) => a.$emit("clear-hires-region")), onHiresToolChange: l[15] || (l[15] = (v) => a.$emit("hires-tool-change", v)) }, null, 8, ["region"])]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2);
  };
} }), Tw = ni(Aw, [["__scopeId", "data-v-fbec974e"]]), so = 5, yf = 19, Dw = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]', Mw = xn({ __name: "AppBackground", setup(e) {
  const t = T0("AppBackground"), n = K(null);
  let a = null, l = 0, o = null, i = 0, r = 0;
  const s = K(null), u = K(0);
  let c = null;
  function d(W) {
    return W instanceof Error ? W.message : String(W);
  }
  function f(W) {
    return { ...W, edge: { ...W.edge } };
  }
  function v(W) {
    return W.map((te) => f(te));
  }
  function p(W) {
    return { ...W, pattern: { ...W.pattern }, tint: [...W.tint] };
  }
  function m(W) {
    return W.map(p);
  }
  function b(W, te) {
    if (a) try {
      te && te.length > 0 ? a.postMessage(W, te) : a.postMessage(W);
    } catch (Se) {
      t.error("Worker postMessage failed:", d(Se));
    }
  }
  const h = z0({ onSetZones: (W) => b({ type: "set_zones", zones: v(W) }), onAddZone: (W) => b({ type: "add_zone", zone: f(W) }), onUpdateZone: (W) => b({ type: "update_zone", zone: f(W) }), onRemoveZone: (W) => b({ type: "remove_zone", id: W }), onClearZones: () => b({ type: "clear_zones" }) }), x = tw({ onSetDecals: (W) => b({ type: "set_decals", decals: m(W) }), onAddDecal: (W) => b({ type: "add_decal", decal: p(W) }), onUpdateDecal: (W) => b({ type: "update_decal", decal: p(W) }), onRemoveDecal: (W) => b({ type: "remove_decal", id: W }), onClearDecals: () => b({ type: "clear_decals" }) }), _ = iw({ onSetRegion: (W) => b({ type: "set_hires", region: { ...W } }), onClearRegion: () => b({ type: "clear_hires" }) }), I = K(false), S = K(false), y = K({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), C = K(false), w = K(false), A = K(false), P = K(null), E = K(null);
  let D = null, M = null, T = null;
  function L(W) {
    h.addZone(W);
  }
  function Y(W) {
    h.updateZone(W);
  }
  function H(W) {
    h.removeZone(W);
  }
  function G() {
    h.clearZones();
  }
  function O(W) {
    I.value = W.enabled, S.value = W.snapMajor, !W.enabled && M === "zone" && (D = null, M = null, P.value = null, E.value = null);
  }
  function F(W) {
    y.value = W;
  }
  function J(W) {
    C.value = W.enabled, w.value = W.snapMajor, W.enabled || M === "decal" && (D = null, M = null, T = null, P.value = null, E.value = null);
  }
  function z(W) {
    A.value = W.enabled, !W.enabled && M === "hires" && (D = null, M = null, P.value = null, E.value = null);
  }
  function R(W) {
    x.addDecal(W);
  }
  function U(W) {
    x.updateDecal(W);
  }
  function re(W) {
    x.removeDecal(W);
  }
  function ke() {
    x.clearDecals();
  }
  function q(W) {
    _.setRegion(W);
  }
  function ve() {
    _.clearRegion();
  }
  function Ae() {
    const W = s.value;
    return !W || W.gridPitch === 0 ? null : { gridPitch: W.gridPitch, scrollCanvasPx: u.value, dpr: devicePixelRatio, screenCols: W.screenCols, screenRows: W.screenRows };
  }
  const Ve = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]);
  function ye(W) {
    if (!(W instanceof HTMLElement)) return false;
    if (W.closest(Dw)) return true;
    let te = W;
    for (; te; ) {
      if (Ve.has(te.tagName) || te.getAttribute("role") === "button") return true;
      te = te.parentElement;
    }
    return false;
  }
  function $(W, te) {
    return { x1: Math.min(W.cx, te.cx), y1: Math.min(W.cy, te.cy), x2: Math.max(W.cx, te.cx), y2: Math.max(W.cy, te.cy) };
  }
  function N(W, te) {
    return (W % te.screenCols + te.screenCols) % te.screenCols;
  }
  function ee(W) {
    const te = Ae();
    if (!te) return null;
    const Se = vf(W.clientX, W.clientY, te);
    return { cx: N(Se.cx, te), cy: Se.cy };
  }
  function ce(W, te) {
    const Se = (Me) => Math.floor(Me / so) * so, Pe = (Me) => Se(Me) + (so - 1);
    return { x1: Math.max(0, Math.min(te.screenCols - 1, Se(W.x1))), y1: Se(W.y1), x2: Math.max(0, Math.min(te.screenCols - 1, Pe(W.x2))), y2: Pe(W.y2) };
  }
  function ie(W) {
    const te = Date.now(), Se = y.value;
    return { id: typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${te}-${Math.random().toString(36).slice(2, 9)}`, x1: W.x1, y1: W.y1, x2: W.x2, y2: W.y2, mode: Se.mode, edge: { ...Se.edge }, enabled: true, createdAt: te, updatedAt: te };
  }
  function ue(W) {
    const te = Date.now();
    return { id: typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${te}-${Math.random().toString(36).slice(2, 9)}`, x1: W.x1, y1: W.y1, x2: W.x2, y2: W.y2, pattern: { kind: "solid", coverage: 1, solidR: 0.49, solidG: 0.3, solidB: 1 }, tint: [1, 1, 1, 1], blendMode: "alpha", suppressCells: false, enabled: true, createdAt: te, updatedAt: te };
  }
  function we() {
    const W = P.value, te = Ae();
    if (!W || !te) {
      E.value = null;
      return;
    }
    const Se = W.x1 * te.gridPitch / te.dpr, Pe = (W.y1 * te.gridPitch - te.scrollCanvasPx) / te.dpr, Me = (W.x2 - W.x1 + 1) * te.gridPitch / te.dpr, $e = (W.y2 - W.y1 + 1) * te.gridPitch / te.dpr;
    E.value = { left: `${Se}px`, top: `${Pe}px`, width: `${Me}px`, height: `${$e}px` };
  }
  function fe() {
    return I.value || C.value || A.value;
  }
  function X() {
    return M === "decal" ? w.value : S.value;
  }
  function oe(W) {
    if (!fe() || W.button !== 0 || ye(W.target)) return;
    const te = ee(W);
    if (!te) return;
    M = A.value ? "hires" : C.value ? "decal" : "zone", D = te;
    const Se = { x1: te.cx, y1: te.cy, x2: te.cx, y2: te.cy };
    M === "decal" && (T = { ...Se }), P.value = Se, we(), W.target instanceof Element && W.target.setPointerCapture(W.pointerId), W.preventDefault();
  }
  function _e(W) {
    if (!M || !D) return;
    const te = ee(W), Se = Ae();
    if (!(!te || !Se)) {
      if (M === "decal" && T) T.x1 = Math.min(T.x1, te.cx), T.y1 = Math.min(T.y1, te.cy), T.x2 = Math.max(T.x2, te.cx), T.y2 = Math.max(T.y2, te.cy), P.value = { ...T };
      else {
        const Pe = $(D, te);
        P.value = X() ? ce(Pe, Se) : Pe;
      }
      we();
    }
  }
  function Q(W) {
    if (!M || !D || W.button !== 0) return;
    W.target instanceof Element && W.target.hasPointerCapture(W.pointerId) && W.target.releasePointerCapture(W.pointerId);
    const te = ee(W), Se = Ae();
    if (M === "hires" && te) {
      const Pe = $(D, te), Me = Date.now();
      _.setRegion({ id: crypto.randomUUID(), x1: Pe.x1, y1: Pe.y1, x2: Pe.x2, y2: Pe.y2, multiplier: Yi, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, createdAt: Me, updatedAt: Me }), A.value = false;
    } else if (M === "decal" && T) te && (T.x1 = Math.min(T.x1, te.cx), T.y1 = Math.min(T.y1, te.cy), T.x2 = Math.max(T.x2, te.cx), T.y2 = Math.max(T.y2, te.cy)), x.addDecal(ue(T));
    else if (te && Se) {
      const Pe = $(D, te), Me = X() ? ce(Pe, Se) : Pe;
      h.addZone(ie(Me));
    }
    D = null, M = null, T = null, P.value = null, E.value = null;
  }
  function me(W) {
    if (fe() || D || ye(W.target)) return;
    const te = Ae();
    if (!te) return;
    const Se = vf(W.clientX, W.clientY, te), Pe = D0(Se, te);
    t.debug("Click \u2192", W.clientX, W.clientY, "\u2192 cell", Pe.cx, Pe.cy), b({ type: "toggle_cell", cx: Pe.cx, cy: Pe.cy, scrollCanvasPx: te.scrollCanvasPx });
  }
  return xt(() => {
    const W = n.value;
    if (!W) return;
    i = Math.round(window.innerWidth * devicePixelRatio), r = Math.round(window.innerHeight * devicePixelRatio), W.width = i, W.height = r;
    const te = W.transferControlToOffscreen();
    a = new Worker(new URL("/assets/backgroundRenderer-DzvpkqwQ.js", import.meta.url), { type: "module" }), a.onmessage = (Fe) => {
      switch (Fe.data.type) {
        case "ready":
          t.info(`${Fe.data.backend.toUpperCase()} renderer active`), s.value = Fe.data.gridInfo, b({ type: "set_zones", zones: v(h.zones.value) }), b({ type: "set_decals", decals: m(x.decals.value) }), _.region.value && b({ type: "set_hires", region: { ..._.region.value } }), we();
          break;
        case "grid_info":
          s.value = Fe.data.gridInfo, we();
          break;
        case "zones_state":
          h.syncFromWorker(Fe.data.zones);
          break;
        case "zones_error":
          t.error("Zone update rejected:", Fe.data.message);
          break;
        case "decals_state":
          x.syncFromWorker(Fe.data.decals);
          break;
        case "decals_error":
          t.error("Decal update rejected:", Fe.data.message);
          break;
        case "hires_state":
          _.syncFromWorker(Fe.data.region);
          break;
        case "error":
          Fe.data.phase === "gpu-init" ? t.debug(`GPU unavailable (${Fe.data.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${Fe.data.phase}]:`, Fe.data.message);
          break;
      }
    }, a.onerror = (Fe) => {
      t.error("Worker uncaught exception:", Fe.message, `at ${Fe.filename}:${Fe.lineno}`);
    }, document.addEventListener("click", me), document.addEventListener("pointerdown", oe), document.addEventListener("pointermove", _e), document.addEventListener("pointerup", Q);
    const Se = ff(i, yf, devicePixelRatio), Pe = 0.8 * Se * so / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${Pe.toFixed(1)}px`), b({ type: "init", canvas: te, cellPx: Se }, [te]), t.debug("Worker spawned, init message sent, gridPitch", Se.toFixed(2)), c = document.querySelector(".v-main");
    let Me = -1;
    const $e = () => {
      b({ type: "frame" });
      const Fe = (c == null ? void 0 : c.scrollTop) || window.scrollY;
      Fe !== Me && (Me = Fe, u.value = Fe * devicePixelRatio, b({ type: "scroll", scrollY: u.value }), we()), l = requestAnimationFrame($e);
    };
    l = requestAnimationFrame($e), o = new ResizeObserver(([Fe]) => {
      const qe = Math.round(Fe.contentRect.width * devicePixelRatio), Rt = Math.round(Fe.contentRect.height * devicePixelRatio);
      if (qe === i && Rt === r) return;
      i = qe, r = Rt;
      const En = ff(qe, yf, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * En * so / devicePixelRatio).toFixed(1)}px`), b({ type: "resize", width: qe, height: Rt });
    }), o.observe(W);
  }), gr(() => {
    cancelAnimationFrame(l), o == null ? void 0 : o.disconnect(), document.removeEventListener("click", me), document.removeEventListener("pointerdown", oe), document.removeEventListener("pointermove", _e), document.removeEventListener("pointerup", Q), b({ type: "stop" }), a == null ? void 0 : a.terminate(), a = null;
  }), (W, te) => (Ye(), ht(be, null, [k("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), E.value ? (Ye(), ht("div", { key: 0, class: "zone-preview-overlay", style: he(E.value) }, null, 4)) : la("", true), g(Tw, { zones: _t(h).zones.value, "preview-rect": P.value, decals: _t(x).decals.value, "hires-region": _t(_).region.value, onAddZone: L, onUpdateZone: Y, onRemoveZone: H, onClearZones: G, onToolChange: O, onDraftChange: F, onAddDecal: R, onUpdateDecal: U, onRemoveDecal: re, onClearDecals: ke, onDecalToolChange: J, onSetHiresRegion: q, onClearHiresRegion: ve, onHiresToolChange: z }, null, 8, ["zones", "preview-rect", "decals", "hires-region"])], 64));
} }), Ew = ni(Mw, [["__scopeId", "data-v-78212d9f"]]), Bw = xn({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, a) => {
    const l = Ne("v-app-bar-title"), o = Ne("v-btn"), i = Ne("v-app-bar");
    return Ye(), qt(i, { elevation: "0", color: "background", border: "b" }, { append: pe(() => [(Ye(), ht(be, null, al(t, (r) => g(o, { key: r.label, href: r.href, variant: "text", size: "default", class: "nav-ink" }, { default: pe(() => [je(Oe(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: pe(() => [g(l, null, { default: pe(() => [...a[0] || (a[0] = [k("span", { class: "title-ink font-weight-bold" }, "Anjin Byte (Work in progress...)", -1)])]), _: 1 })]), _: 1 });
  };
} }), $w = { class: "text-medium-emphasis text-caption" }, Fw = xn({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ne("v-footer");
    return Ye(), qt(l, { color: "background", border: "t", class: "justify-center" }, { default: pe(() => [k("span", $w, " \xA9 " + Oe(_t(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), Lw = {}, Rw = { id: "hero", class: "hero-section" };
function Ow(e, t) {
  const n = Ne("v-btn"), a = Ne("v-container");
  return Ye(), ht("section", Rw, [g(a, { class: "hero-container" }, { default: pe(() => [t[2] || (t[2] = k("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = k("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), g(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: pe(() => [...t[0] || (t[0] = [je(" View Projects ", -1)])]), _: 1 }), g(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: pe(() => [...t[1] || (t[1] = [je(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const Nw = ni(Lw, [["render", Ow], ["__scopeId", "data-v-bd3b897d"]]), Hw = { id: "about" }, zw = { class: "d-flex flex-wrap ga-2" }, Ww = xn({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, a) => {
    const l = Ne("v-chip"), o = Ne("v-col"), i = Ne("v-row"), r = Ne("v-container");
    return Ye(), ht("section", Hw, [g(r, { class: "py-16" }, { default: pe(() => [g(i, { justify: "center" }, { default: pe(() => [g(o, { cols: "12", md: "8" }, { default: pe(() => [a[0] || (a[0] = k("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), a[1] || (a[1] = k("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), k("div", zw, [(Ye(), ht(be, null, al(t, (s) => g(l, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: pe(() => [je(Oe(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), jw = { id: "projects" }, Uw = { class: "d-flex flex-wrap ga-1" }, Yw = xn({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, a) => {
    const l = Ne("v-card-title"), o = Ne("v-card-text"), i = Ne("v-chip"), r = Ne("v-btn"), s = Ne("v-card-actions"), u = Ne("v-card"), c = Ne("v-col"), d = Ne("v-row"), f = Ne("v-container");
    return Ye(), ht("section", jw, [g(f, { class: "py-16" }, { default: pe(() => [a[1] || (a[1] = k("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), g(d, null, { default: pe(() => [(Ye(), ht(be, null, al(t, (v) => g(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: pe(() => [g(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: pe(() => [g(l, { class: "text-h6 pt-5 px-5" }, { default: pe(() => [je(Oe(v.title), 1)]), _: 2 }, 1024), g(o, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: pe(() => [je(Oe(v.description), 1)]), _: 2 }, 1024), g(o, { class: "pt-0 px-5" }, { default: pe(() => [k("div", Uw, [(Ye(true), ht(be, null, al(v.tags, (p) => (Ye(), qt(i, { key: p, size: "x-small", color: "secondary", variant: "tonal" }, { default: pe(() => [je(Oe(p), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (Ye(), qt(s, { key: 0, class: "px-5 pb-5" }, { default: pe(() => [g(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: pe(() => [...a[0] || (a[0] = [je(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : la("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), Gw = { id: "contact" }, Kw = { class: "d-flex justify-center flex-wrap ga-3" }, qw = xn({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, a) => {
    const l = Ne("v-btn"), o = Ne("v-container");
    return Ye(), ht("section", Gw, [g(o, { class: "py-16 text-center" }, { default: pe(() => [a[0] || (a[0] = k("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), a[1] || (a[1] = k("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), k("div", Kw, [(Ye(), ht(be, null, al(t, (i) => g(l, { key: i.label, href: i.href, color: i.color, "prepend-icon": i.icon, variant: "outlined", target: "_blank", size: "large" }, { default: pe(() => [je(Oe(i.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), Xw = xn({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ne("v-main"), l = Ne("v-app");
    return Ye(), qt(l, null, { default: pe(() => [g(Ew), g(Bw), g(a, null, { default: pe(() => [g(Nw), g(Ww), g(Yw), g(qw)]), _: 1 }), g(Fw)]), _: 1 });
  };
} });
function cg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Je = typeof window < "u", rc = Je && "IntersectionObserver" in window, Zw = Je && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), bf = Je && "EyeDropper" in window, sc = Je && "matchMedia" in window && typeof window.matchMedia == "function", zn = () => sc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function pf(e, t, n) {
  Jw(e, t), t.set(e, n);
}
function Jw(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Sf(e, t, n) {
  return e.set(dg(e, t), n), n;
}
function Jn(e, t) {
  return e.get(dg(e, t));
}
function dg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function fg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ll(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), fg(e, t.split("."), n));
}
function yt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return ll(e, t, n);
  if (Array.isArray(t)) return fg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function On(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function ol(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ls(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function uc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Rs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function vg(e) {
  return Object.keys(e);
}
function Ka(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function tn(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function Os(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Re(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const mg = /^on[^a-z]/, cc = (e) => mg.test(e), Qw = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], ek = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function tk(e) {
  return e.isComposing && ek.includes(e.key);
}
function Gn(e) {
  const [t, n] = Os(e, [mg]), a = Re(t, Qw), [l, o] = Os(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function gg(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), _t(t));
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
function kf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function xf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function nk(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function Cf(e) {
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
    if (Ls(o) && Ls(i)) {
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
function hg(e) {
  return e.map((t) => t.type === be ? hg(t.children) : t).flat();
}
function Xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Xa.cache.has(e)) return Xa.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Xa.cache.set(e, t), t;
}
Xa.cache = /* @__PURE__ */ new Map();
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
var Cl = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap();
class yg {
  constructor(t) {
    pf(this, Cl, []), pf(this, Wa, 0), this.size = t;
  }
  get isFull() {
    return Jn(Cl, this).length === this.size;
  }
  push(t) {
    Jn(Cl, this)[Jn(Wa, this)] = t, Sf(Wa, this, (Jn(Wa, this) + 1) % this.size);
  }
  values() {
    return Jn(Cl, this).slice(Jn(Wa, this)).concat(Jn(Cl, this).slice(0, Jn(Wa, this)));
  }
  clear() {
    Jn(Cl, this).length = 0, Sf(Wa, this, 0);
  }
}
function ak(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function dc(e) {
  const t = Tt({});
  ut(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function Ki(e, t) {
  return e.includes(t);
}
function bg(e) {
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
function Ia(e) {
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
function pg(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function Za(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = Ia(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = pg(n, t);
    a ? a.focus() : Za(e, t === "next" ? "first" : "last");
  }
}
function vo(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function br() {
}
function zl(e, t) {
  if (!(Je && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function pr(e) {
  return e.some((t) => Mo(t) ? t.type === Yt ? false : t.type !== be || pr(t.children) : true) ? e : null;
}
function xi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function lk(e, t) {
  if (!Je || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function ok(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function Bo() {
  const e = se(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => uc(e.value) }), t;
}
function Wl(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Da(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function qi(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function ik(e, t, n) {
  const a = new RegExp(`[\\d\\-${qi(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${qi(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function rk(e) {
  const t = {};
  for (const n in e) t[an(n)] = e[n];
  return t;
}
function sk(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function _f(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : bt(n) || _a(n) || Zo(n) ? t(Te(n)) : Ls(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Sg = ["top", "bottom"], uk = ["start", "end", "left", "right"];
function Ns(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Ki(Sg, n) ? "start" : Ki(uk, n) ? "top" : "center"), { side: Hs(n, t), align: Hs(a, t) };
}
function Hs(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ss(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function us(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function If(e) {
  return { side: e.align, align: e.side };
}
function Pf(e) {
  return Ki(Sg, e.side) ? "y" : "x";
}
class Sn {
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
function Af(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function wg(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new Sn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new Sn(e);
}
function ck(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new Sn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new Sn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new Sn(e);
}
function fc(e) {
  const t = new Sn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new Sn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new Sn({ x: c, y: d, width: f, height: v });
  } else return new Sn(t);
}
function ta(e, t, n) {
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
const Ei = /* @__PURE__ */ new WeakMap();
function dk(e, t) {
  Object.keys(t).forEach((n) => {
    if (cc(n)) {
      const a = bg(n), l = Ei.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), Ei.has(e) || Ei.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function fk(e, t) {
  Object.keys(t).forEach((n) => {
    if (cc(n)) {
      const a = bg(n), l = Ei.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, Tf = 0.2126729, Df = 0.7151522, Mf = 0.072175, vk = 0.55, mk = 0.58, gk = 0.57, hk = 0.62, Ci = 0.03, Ef = 1.45, yk = 5e-4, bk = 1.25, pk = 1.25, Bf = 0.078, $f = 12.82051282051282, Vi = 0.06, Ff = 1e-3;
function Lf(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * Tf + a * Df + l * Mf, u = o * Tf + i * Df + r * Mf;
  if (s <= Ci && (s += (Ci - s) ** Ef), u <= Ci && (u += (Ci - u) ** Ef), Math.abs(u - s) < yk) return 0;
  let c;
  if (u > s) {
    const d = (u ** vk - s ** mk) * bk;
    c = d < Ff ? 0 : d < Bf ? d - d * $f * Vi : d - Vi;
  } else {
    const d = (u ** hk - s ** gk) * pk;
    c = d > -Ff ? 0 : d > -Bf ? d - d * $f * Vi : d + Vi;
  }
  return c * 100;
}
const Xi = 0.20689655172413793, Sk = (e) => e > Xi ** 3 ? Math.cbrt(e) : e / (3 * Xi ** 2) + 4 / 29, wk = (e) => e > Xi ? e ** 3 : 3 * Xi ** 2 * (e - 4 / 29);
function kg(e) {
  const t = Sk, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function xg(e) {
  const t = wk, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const kk = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], xk = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Ck = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Vk = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Cg(e) {
  const t = Array(3), n = xk, a = kk;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ze(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function vc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = Vk, i = Ck;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function zs(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function _k(e) {
  return zs(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Rf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ik = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Of({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Of({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Wn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Wn({ h: e, s: t, v: n, a }) };
function cn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Rf.test(e)) {
    const { groups: t } = e.match(Rf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Ik[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Pg(t);
  } else if (typeof e == "object") {
    if (Ka(e, ["r", "g", "b"])) return e;
    if (Ka(e, ["h", "s", "l"])) return Wn(mc(e));
    if (Ka(e, ["h", "s", "v"])) return Wn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Wn(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function Of(e) {
  return Wn(mc(e));
}
function li(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Ws(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function mc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function Vg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function _g(e) {
  return Vg(Wn(e));
}
function _i(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Ig(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[_i(t), _i(n), _i(a), l !== void 0 ? _i(Math.round(l * 255)) : ""].join("")}`;
}
function Pg(e) {
  e = Ak(e);
  let [t, n, a, l] = nk(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Pk(e) {
  const t = Pg(e);
  return li(t);
}
function Ag(e) {
  return Ig(Wn(e));
}
function Ak(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = kf(kf(e, 6), 8, "F")), e;
}
function Tk(e, t) {
  const n = kg(vc(e));
  return n[0] = n[0] + t * 10, Cg(xg(n));
}
function Dk(e, t) {
  const n = kg(vc(e));
  return n[0] = n[0] - t * 10, Cg(xg(n));
}
function js(e) {
  const t = cn(e);
  return vc(t)[1];
}
function Mk(e, t) {
  const n = js(e), a = js(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function Tg(e) {
  const t = Math.abs(Lf(cn(0), cn(e)));
  return Math.abs(Lf(cn(16777215), cn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function j(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const xe = j({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function pt(e, t) {
  const n = ei();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = pt(e).type;
  return Xa((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Ek(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pt("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const jl = Symbol.for("vuetify:defaults");
function Bk(e) {
  return K(e);
}
function gc() {
  const e = We(jl);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ft(e, t) {
  const n = gc(), a = K(e), l = V(() => {
    if (_t(t == null ? void 0 : t.disabled)) return n.value;
    const i = _t(t == null ? void 0 : t.scoped), r = _t(t == null ? void 0 : t.reset), s = _t(t == null ? void 0 : t.root);
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
  return it(jl, l), l;
}
function $k(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Xa(t)] < "u");
}
function Fk() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gc();
  const a = pt("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = V(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if ($k(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = se();
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
    const s = Ek(jl, a);
    it(jl, V(() => i.value ? Ot((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function Xt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = j(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return tn(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = gc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = Fk(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Xt : xn)(t);
}
function Lk(e, t) {
  return t.props = e, t;
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ne()({ name: n ?? Yn(an(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...xe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return va(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function Rk(e, t, n, a) {
  if (!n || Da(e) || Da(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function Ok(e, t, n) {
  var _a3, _b2;
  if (!n || Da(e) || Da(t)) return null;
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
  const l = Ok(e, t, n);
  return l || (Rk(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Dg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const $o = "cubic-bezier(0.4, 0, 0.2, 1)", Nf = "cubic-bezier(0.0, 0, 0.2, 1)", Hf = "cubic-bezier(0.4, 0, 1, 1)", Nk = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function dn(e, t, n) {
  return Object.keys(e).filter((a) => cc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function Sr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Hk(e) : hc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Zi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (hc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function hc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function Hk(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function zk(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function Wk(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function le(e) {
  const t = pt("useRender");
  t.render = e;
}
function jk(e, t) {
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
    function p() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? p() : n.trailing && (a = setTimeout(p, t - v)) : (o = true, n.leading && p());
  };
  return s.clear = r, s.immediate = e, s;
}
const Ie = [String, Function, Object, Array], Us = Symbol.for("vuetify:icons"), wr = j({ icon: { type: Ie }, tag: { type: [String, Object, Function], required: true } }, "icon"), Ys = ne()({ name: "VComponentIcon", props: wr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return g(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? g(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), yc = Xt({ name: "VSvgIcon", inheritAttrs: false, props: wr(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, Z(n, { style: null }), { default: () => [k("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? k("path", { d: a[0], "fill-opacity": a[1] }, null) : k("path", { d: a }, null)) : k("path", { d: e.icon }, null)])] });
} }), Uk = Xt({ name: "VLigatureIcon", props: wr(), setup(e) {
  return () => g(e.tag, null, { default: () => [e.icon] });
} }), bc = Xt({ name: "VClassIcon", props: wr(), setup(e) {
  return () => g(e.tag, { class: ae(e.icon) }, null);
} }), Yk = (e) => {
  const t = We(Us);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: V(() => {
    var _a3;
    const a = nt(e);
    if (!a) return { component: Ys };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: yc, icon: l };
    if (typeof l != "string") return { component: Ys, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, Gk = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, Kk = { component: (e) => va(bc, { ...e, class: "mdi" }) };
function qk() {
  return { svg: { component: yc }, class: { component: bc } };
}
function Xk(e) {
  const t = qk(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Kk), Ot({ defaultSet: n, sets: t, aliases: { ...Gk, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function $t(e, t) {
  let n;
  function a() {
    n = Ol(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  de(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), gt(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ce(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = pt("useProxiedModel"), i = K(e[t] !== void 0 ? e[t] : n), r = Xa(t), u = V(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  $t(() => !u.value, () => {
    de(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = V({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Te(u.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const Zk = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, zf = "$vuetify.", Wf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Mg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(zf)) return Wf(a, o);
  const r = a.replace(zf, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ll(s, r, null);
  return c || (`${a}${e.value}`, c = ll(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Wf(c, o);
};
function pc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Eg(e, t) {
  return pc(e, t)(0.1).includes(",") ? "," : ".";
}
function cs(e, t, n) {
  const a = Ce(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, de(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Bg(e) {
  return (t) => {
    const n = cs(t, "locale", e.current), a = cs(t, "fallback", e.fallback), l = cs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => Eg(n, a)), t: Mg(n, a, l), n: pc(n, a), provide: Bg({ current: n, fallback: a, messages: l }) };
  };
}
function Jk(e) {
  const t = se((e == null ? void 0 : e.locale) ?? "en"), n = se((e == null ? void 0 : e.fallback) ?? "en"), a = K({ en: Zk, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Eg(t, n)), t: Mg(t, n, a), n: pc(t, n), provide: Bg({ current: t, fallback: n, messages: a }) };
}
const Ul = Symbol.for("vuetify:locale");
function Qk(e) {
  return e.name != null;
}
function ex(e) {
  const t = (e == null ? void 0 : e.adapter) && Qk(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Jk(e), n = nx(t, e);
  return { ...t, ...n };
}
function Qe() {
  const e = We(Ul);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function $g(e) {
  const t = We(Ul);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = ax(n, t.rtl, e), l = { ...n, ...a };
  return it(Ul, l), l;
}
function tx() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function nx(e, t) {
  const n = K((t == null ? void 0 : t.rtl) ?? tx()), a = V(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function ax(e, t, n) {
  const a = V(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function Ct() {
  const e = We(Ul);
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
function lx(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Fg(e), i = Lg(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function ox(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Fg(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Lg(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ix(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const rx = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Rg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (rx.test(e)) return ix(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const jf = new Date(2e3, 0, 2);
function sx(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return On(7).map((l) => {
    const o = new Date(jf);
    return o.setDate(jf.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function ux(e, t, n, a) {
  const l = Rg(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function cx(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = xf(String(n.getMonth() + 1), 2, "0"), o = xf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function dx(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function fx(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function vx(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Ja(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function mx(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function gx(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Fo(e) {
  return e.getFullYear();
}
function hx(e) {
  return e.getMonth();
}
function yx(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? bx(e, t, o, a) : px(e, t, o, i);
}
function bx(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = Ja(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Fo(o);
  s < Fo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? Ja(u, -c) : Ja(u, 7 - c);
  return 1 + Qi(Sc(o), Lo(d), "weeks");
}
function px(e, t, n, a) {
  const l = Co(e, t, n), o = Ja(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - Qi(f, Co(f, t, n), "days");
  }
  let r = Fo(l);
  r < Fo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? Ja(s, u - 7) : Ja(s, u);
  return 1 + Qi(Sc(l), Lo(c), "weeks");
}
function Sx(e) {
  return e.getDate();
}
function wx(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function kx(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function xx(e) {
  return e.getHours();
}
function Cx(e) {
  return e.getMinutes();
}
function Vx(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function _x(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Ix(e, t) {
  return Ji(e, t[0]) && Tx(e, t[1]);
}
function Px(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ji(e, t) {
  return e.getTime() > t.getTime();
}
function Ax(e, t) {
  return Ji(Lo(e), Lo(t));
}
function Tx(e, t) {
  return e.getTime() < t.getTime();
}
function Uf(e, t) {
  return e.getTime() === t.getTime();
}
function Dx(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Mx(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Ex(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Qi(e, t, n) {
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
function Bx(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function $x(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Fx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Lx(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Rx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Lo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Sc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Ox {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Rg(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return cx(this, t);
  }
  parseISO(t) {
    return dx(t);
  }
  addMinutes(t, n) {
    return fx(t, n);
  }
  addHours(t, n) {
    return vx(t, n);
  }
  addDays(t, n) {
    return Ja(t, n);
  }
  addWeeks(t, n) {
    return mx(t, n);
  }
  addMonths(t, n) {
    return gx(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return lx(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return ox(t, this.locale);
  }
  startOfMonth(t) {
    return Fg(t);
  }
  endOfMonth(t) {
    return Lg(t);
  }
  format(t, n) {
    return ux(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Uf(t, n);
  }
  isValid(t) {
    return Px(t);
  }
  isWithinRange(t, n) {
    return Ix(t, n);
  }
  isAfter(t, n) {
    return Ji(t, n);
  }
  isAfterDay(t, n) {
    return Ax(t, n);
  }
  isBefore(t, n) {
    return !Ji(t, n) && !Uf(t, n);
  }
  isSameDay(t, n) {
    return Dx(t, n);
  }
  isSameMonth(t, n) {
    return Mx(t, n);
  }
  isSameYear(t, n) {
    return Ex(t, n);
  }
  setMinutes(t, n) {
    return $x(t, n);
  }
  setHours(t, n) {
    return Bx(t, n);
  }
  setMonth(t, n) {
    return Fx(t, n);
  }
  setDate(t, n) {
    return Lx(t, n);
  }
  setYear(t, n) {
    return Rx(t, n);
  }
  getDiff(t, n, a) {
    return Qi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return sx(this.locale, a, n);
  }
  getYear(t) {
    return Fo(t);
  }
  getMonth(t) {
    return hx(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return yx(t, this.locale, l, o);
  }
  getDate(t) {
    return Sx(t);
  }
  getNextMonth(t) {
    return wx(t);
  }
  getPreviousMonth(t) {
    return kx(t);
  }
  getHours(t) {
    return xx(t);
  }
  getMinutes(t) {
    return Cx(t);
  }
  startOfDay(t) {
    return Lo(t);
  }
  endOfDay(t) {
    return Sc(t);
  }
  startOfYear(t) {
    return Vx(t);
  }
  endOfYear(t) {
    return _x(t);
  }
}
const Og = Symbol.for("vuetify:date-options"), Yf = Symbol.for("vuetify:date-adapter");
function Nx(e, t) {
  const n = Ot({ adapter: Ox, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Hg(n, t) };
}
function Hx(e, t, n) {
  const a = Ng(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Ng(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Hg(e, t) {
  const n = Tt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return de(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function vl() {
  const e = We(Og);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Qe();
  return Hg(e, t);
}
const kr = ["sm", "md", "lg", "xl", "xxl"], Gs = Symbol.for("vuetify:display"), Gf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, zx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gf;
  return Ot(Gf, e);
};
function Kf(e) {
  return Je && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function qf(e) {
  return Je && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Xf(e) {
  const t = Je && !e ? window.navigator.userAgent : "ssr";
  function n(p) {
    return !!t.match(p);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: Zw, ssr: t === "ssr" };
}
function Wx(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = zx(e), l = se(qf(t)), o = se(Xf(t)), i = Tt({}), r = se(Kf(t));
  function s() {
    l.value = qf(), r.value = Kf();
  }
  function u() {
    s(), o.value = Xf();
  }
  return ut(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), p = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, b = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : p ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], x = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = p, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || p || m), i.mdAndDown = !(v || p || m), i.lgAndDown = !(p || m), i.xlAndDown = !m, i.name = b, i.height = l.value, i.width = r.value, i.mobile = x, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Je && (window.addEventListener("resize", s, { passive: true }), gt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Xl(i), update: u, ssr: !!t };
}
const ml = j({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function gn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = We(Gs);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = V(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const zg = Symbol.for("vuetify:goto");
function Wg() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: Nk };
}
function jx(e) {
  return wc(e) ?? (document.scrollingElement || document.body);
}
function wc(e) {
  return typeof e == "string" ? document.querySelector(e) : uc(e);
}
function ds(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = wc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Ux(e, t) {
  return { rtl: t.isRtl, options: Ot(Wg(), e) };
}
async function Zf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ot((a == null ? void 0 : a.options) ?? Wg(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : wc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : jx(o.container), u = zn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = ds(r, n, i);
  else if (c = ds(r, n, i) - ds(s, n, i), o.layout) {
    const p = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    p && (c -= parseInt(p, 10));
  }
  c += o.offset, c = Gx(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function p(m) {
    const h = (m - f) / o.duration, x = Math.floor(d + (c - d) * u(Ze(h, 0, 1)));
    if (s[l] = x, h >= 1 && Math.abs(x - s[l]) < 10) return v(c);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(p);
  }));
}
function Yx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = We(zg), { isRtl: n } = Ct();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Zf(o, Ot(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Zf(o, Ot(e, i), true, a), l;
}
function Gx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Ze(t, s, u);
}
const Ro = Symbol.for("vuetify:theme"), Ue = j({ theme: String }, "theme");
function Jf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Kx() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jf();
  const t = Jf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ot(o, l);
  }
  return Ot(t, { ...e, themes: n });
}
function ja(e, t, n, a) {
  e.push(`${Jx(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Qf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = cn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${js(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? cn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function qx(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? Tk : Dk;
    for (const i of On(n[l], 1)) a[`${e}-${l}-${i}`] = Ig(o(cn(t), i));
  }
  return a;
}
function Xx(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...qx(a, l, t) });
  }
  return n;
}
function Zx(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = cn(e[n]);
    t[a] = Tg(l);
  }
  return t;
}
function Jx(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function Qx(e, t, n) {
  const a = eC(e, t);
  a && (a.innerHTML = n);
}
function eC(e, t) {
  if (!Je) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function tC(e) {
  const t = Kx(e), n = se(t.defaultTheme), a = K(t.themes), l = se("light"), o = V({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = V(() => {
    const h = {};
    for (const [x, _] of Object.entries(a.value)) {
      const I = { ..._.colors, ...Xx(_.colors, t.variations) };
      h[x] = { ..._, colors: { ...I, ...Zx(I) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = V(() => {
    var _a3;
    const h = [], x = t.unimportant ? "" : " !important", _ = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && ja(h, ":root", ["color-scheme: dark"], t.scope), ja(h, ":root", Qf(r.value, t.prefix), t.scope);
    for (const [S, y] of Object.entries(i.value)) ja(h, `.${t.prefix}theme--${S}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...Qf(y, t.prefix)], t.scope);
    if (t.utilities) {
      const S = [], y = [], C = new Set(Object.values(i.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of C) w.startsWith("on-") ? ja(y, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope) : (ja(S, `.${_}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${x}`], t.scope), ja(y, `.${_}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope), ja(y, `.${_}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...S.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...y.map((w) => `  ${w}`), `}
`) : h.push(...S, ...y);
    }
    let I = h.map((S, y) => y === 0 ? S : `    ${S}`).join("");
    return t.layers && (I = `@layer vuetify.theme {
` + h.map((S) => `  ${S}`).join("") + `
}`), I;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if (sc) {
    let x = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    x(), h.addEventListener("change", x, { passive: true }), Gv() && gt(() => {
      h.removeEventListener("change", x);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const x = h._context.provides.usehead;
    if (x) {
      let _ = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (x.push) {
        const I = x.push(_);
        Je && de(u, () => {
          I.patch(_);
        });
      } else Je ? (x.addHeadObjs(B(_)), ut(() => x.updateDOM())) : x.addHeadObjs(_());
    } else {
      let _ = function() {
        Qx(t.stylesheetId, t.cspNonce, u.value);
      };
      Je ? de(u, _, { immediate: true }) : _();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function p() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = h.indexOf(o.value), _ = x === -1 ? 0 : (x + 1) % h.length;
    v(h[_]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    p(h);
  }
  const b = new Proxy(o, { get(h, x) {
    return Reflect.get(h, x);
  }, set(h, x, _) {
    return x === "value" && cg(`theme.global.name.value = ${_}`, `theme.change('${_}')`), Reflect.set(h, x, _);
  } });
  return { install: f, change: v, cycle: p, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: b, current: r } };
}
function Ke(e) {
  pt("provideTheme");
  const t = We(Ro, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return it(Ro, o), o;
}
function xr() {
  pt("useTheme");
  const e = We(Ro, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Bo(), a = K();
  if (Je) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Ht(() => {
      l.disconnect();
    }), de(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: tl(a) };
}
const Oo = Symbol.for("vuetify:layout"), jg = Symbol.for("vuetify:layout-item"), ev = 1e3, Ug = j({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), gl = j({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Yg() {
  const e = We(Oo);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function hl(e) {
  const t = We(Oo);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Et()}`, a = pt("useLayoutItem");
  it(jg, { id: n });
  const l = se(false);
  ju(() => l.value = true), Im(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: V(() => l.value ? false : e.active.value), id: n });
  return Ht(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const nC = (e, t, n, a) => {
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
function Gg(e) {
  const t = We(Oo, null), n = V(() => t ? t.rootZIndex.value - 100 : ev), a = K([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = wn(), d = V(() => {
    const y = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const w of C.filter((A) => A.includes(":"))) {
      const [A, P] = w.split(":");
      if (!a.value.includes(A) || !a.value.includes(P)) continue;
      const E = l.get(A), D = l.get(P), M = o.get(A), T = o.get(P);
      !E || !D || !M || !T || (y.set(P, { position: E.value, amount: parseInt(M.value, 10) }), y.set(A, { position: D.value, amount: -parseInt(T.value, 10) }));
    }
    return y;
  }), f = V(() => {
    const y = [...new Set([...i.values()].map((w) => w.value))].sort((w, A) => w - A), C = [];
    for (const w of y) {
      const A = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === w;
      });
      C.push(...A);
    }
    return nC(C, l, o, r);
  }), v = V(() => !Array.from(s.values()).some((y) => y.value)), p = V(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": ge(p.value.left), "--v-layout-right": ge(p.value.right), "--v-layout-top": ge(p.value.top), "--v-layout-bottom": ge(p.value.bottom), ...v.value ? void 0 : { transition: "none" } })), b = V(() => f.value.slice(1).map((y, C) => {
    let { id: w } = y;
    const { layer: A } = f.value[C], P = o.get(w), E = l.get(w);
    return { id: w, ...A, size: Number(P.value), position: E.value };
  })), h = (y) => b.value.find((C) => C.id === y), x = pt("createLayout"), _ = se(false);
  return xt(() => {
    _.value = true;
  }), it(Oo, { register: (y, C) => {
    let { id: w, order: A, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: T, absolute: L } = C;
    i.set(w, A), l.set(w, P), o.set(w, E), r.set(w, M), T && s.set(w, T);
    const H = Ml(jg, x == null ? void 0 : x.vnode).indexOf(y);
    H > -1 ? a.value.splice(H, 0, w) : a.value.push(w);
    const G = V(() => b.value.findIndex((z) => z.id === w)), O = V(() => n.value + f.value.length * 2 - G.value * 2), F = V(() => {
      const z = P.value === "left" || P.value === "right", R = P.value === "right", U = P.value === "bottom", re = D.value ?? E.value, ke = re === 0 ? "%" : "px", q = { [P.value]: 0, zIndex: O.value, transform: `translate${z ? "X" : "Y"}(${(M.value ? 0 : -(re === 0 ? 100 : re)) * (R || U ? -1 : 1)}${ke})`, position: L.value || n.value !== ev ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!_.value) return q;
      const ve = b.value[G.value], Ae = d.value.get(w);
      return Ae && (ve[Ae.position] += Ae.amount), { ...q, height: z ? `calc(100% - ${ve.top}px - ${ve.bottom}px)` : D.value ? `${D.value}px` : void 0, left: R ? void 0 : `${ve.left}px`, right: R ? `${ve.right}px` : void 0, top: P.value !== "bottom" ? `${ve.top}px` : void 0, bottom: P.value !== "top" ? `${ve.bottom}px` : void 0, width: z ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${ve.left}px - ${ve.right}px)` };
    }), J = V(() => ({ zIndex: O.value - 1 }));
    return { layoutItemStyles: F, layoutItemScrimStyles: J, zIndex: O };
  }, unregister: (y) => {
    i.delete(y), l.delete(y), o.delete(y), r.delete(y), s.delete(y), a.value = a.value.filter((C) => C !== y);
  }, mainRect: p, mainStyles: m, getLayoutItem: h, items: b, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: b, layoutRect: c, layoutRef: u };
}
const aC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function tv(e) {
  const t = e.toLowerCase();
  return aC[t] || t;
}
function Kg(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(tv(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [tv(e)], separators: o } : { keys: l, separators: o };
}
function lC(e) {
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
  return i.every((u) => Kg(u).keys.length > 0) ? i : [];
}
function qg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ot(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Ol();
  return r.run(() => {
    const s = Bk(a.defaults), u = Wx(a.display, a.ssr), c = tC(a.theme), d = Xk(a.icons), f = ex(a.locale), v = Nx(a.date, f), p = Ux(a.goTo, f);
    function m(h) {
      for (const _ in i) h.directive(_, i[_]);
      for (const _ in o) h.component(_, o[_]);
      for (const _ in l) h.component(_, Xt({ ...l[_], name: _, aliasName: l[_].name }));
      const x = Ol();
      if (x.run(() => {
        c.install(h);
      }), h.onUnmount(() => x.stop()), h.provide(jl, s), h.provide(Gs, u), h.provide(Ro, c), h.provide(Us, d), h.provide(Ul, f), h.provide(Og, v.options), h.provide(Yf, v.instance), h.provide(zg, p), Je && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: _ } = h;
        h.mount = function() {
          const I = _(...arguments);
          return De(() => u.update()), h.mount = _, I;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Tt({ defaults: _l.call(this, jl), display: _l.call(this, Gs), theme: _l.call(this, Ro), icons: _l.call(this, Us), locale: _l.call(this, Ul), date: _l.call(this, Yf) });
      } } });
    }
    function b() {
      r.stop();
    }
    return { install: m, unmount: b, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: p };
  });
}
const oC = "3.12.1";
qg.version = oC;
function _l(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const iC = j({ ...xe(), ...Re(Ug(), ["fullHeight"]), ...Ue() }, "VApp"), rC = ne()({ name: "VApp", props: iC(), setup(e, t) {
  let { slots: n } = t;
  const a = Ke(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = Gg({ ...e, fullHeight: true }), { rtlClasses: s } = Ct();
  return le(() => {
    var _a3;
    return k("div", { ref: r, class: ae(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: he([e.style]) }, [k("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Ee = j({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Xg = j({ text: String, ...xe(), ...Ee() }, "VToolbarTitle"), kc = ne()({ name: "VToolbarTitle", props: Xg(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = !!(n.default || n.text || e.text);
    return g(e.tag, { class: ae(["v-toolbar-title", e.class]), style: he(e.style) }, { default: () => {
      var _a3;
      return [a && k("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), sC = j({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function hn(e, t, n) {
  return ne()({ name: e, props: sC({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? qu : Ta;
      return va(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function xc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ne()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: zn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? qu : Ta;
    return () => va(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function Cc() {
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
const uC = j({ target: [Object, Array] }, "v-dialog-transition"), fs = /* @__PURE__ */ new WeakMap(), Cr = ne()({ name: "VDialogTransition", props: uC(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = av(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (fs.set(l, i), zn()) ta(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Nf }).finished.then(() => o());
    else {
      const f = ta(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Nf });
      (_a3 = nv(l)) == null ? void 0 : _a3.forEach((v) => {
        ta(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: $o });
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
    !fs.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = av(e.target, l) : i = fs.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    zn() ? ta(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: Hf }).finished.then(() => o()) : (ta(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: Hf }).finished.then(() => o()), (_a3 = nv(l)) == null ? void 0 : _a3.forEach((v) => {
      ta(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: $o });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? g(Ta, Z({ name: "dialog-transition" }, a, { css: false }), n) : g(Ta, { name: "dialog-transition" }, n);
} });
function nv(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function av(e, t) {
  const n = wg(e), a = fc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, p = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), b = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: p, speed: b };
}
const cC = hn("fab-transition", "center center", "out-in"), dC = hn("dialog-bottom-transition"), fC = hn("dialog-top-transition"), No = hn("fade-transition"), Vc = hn("scale-transition"), vC = hn("scroll-x-transition"), mC = hn("scroll-x-reverse-transition"), gC = hn("scroll-y-transition"), hC = hn("scroll-y-reverse-transition"), yC = hn("slide-x-transition"), bC = hn("slide-x-reverse-transition"), _c = hn("slide-y-transition"), pC = hn("slide-y-reverse-transition"), Vr = xc("expand-transition", Cc()), Ic = xc("expand-x-transition", Cc("", "x")), SC = xc("expand-both-transition", Cc("", "both")), wC = j({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Be = ne(false)({ name: "VDefaultsProvider", props: wC(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = Xl(e);
  return ft(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), St = j({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function wt(e) {
  return { dimensionStyles: V(() => {
    const n = {}, a = ge(e.height), l = ge(e.maxHeight), o = ge(e.maxWidth), i = ge(e.minHeight), r = ge(e.minWidth), s = ge(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function kC(e) {
  return { aspectStyles: V(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Zg = j({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...xe(), ...St() }, "VResponsive"), Ks = ne()({ name: "VResponsive", props: Zg(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = kC(e), { dimensionStyles: l } = wt(e);
  return le(() => {
    var _a3;
    return k("div", { class: ae(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: he([l.value, e.style]) }, [k("div", { class: "v-responsive__sizer", style: he(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && k("div", { class: ae(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function Pc(e) {
  return dc(() => {
    const { class: t, style: n } = Jg(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Mt(e) {
  const { colorClasses: t, colorStyles: n } = Pc(() => ({ text: nt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Xe(e) {
  const { colorClasses: t, colorStyles: n } = Pc(() => ({ background: nt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function xC(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Jg(e) {
  const t = xC(nt(e)), n = [], a = {};
  if (t.background) if (zs(t.background)) {
    if (a.backgroundColor = t.background, !t.text && _k(t.background)) {
      const l = cn(t.background);
      if (l.a == null || l.a === 1) {
        const o = Tg(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (zs(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const ot = j({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { roundedClasses: V(() => {
    const a = bt(e) ? e.value : e.rounded, l = bt(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const ga = j({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Kt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? qu : Ta, ...s } = ol(a) ? a : {};
  let u;
  return ol(a) ? u = Z(s, sk({ disabled: l, group: o }), i) : u = Z({ name: l || !a ? "" : a }, i), va(r, u, n);
};
function lv(e, t) {
  if (!rc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? qs(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function qs(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Tn = { mounted: lv, unmounted: qs, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (qs(e, t), lv(e, t));
} }, Qg = j({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Zg(), ...xe(), ...ot(), ...ga() }, "VImg"), ca = ne()({ name: "VImg", directives: { vIntersect: Tn }, props: Qg(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { roundedClasses: i } = ct(e), r = pt("VImg"), s = se(""), u = K(), c = se(e.eager ? "loading" : "idle"), d = se(), f = se(), v = V(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), p = V(() => v.value.aspect || d.value / f.value || 0);
  de(() => e.src, () => {
    m(c.value !== "idle");
  }), de(p, (D, M) => {
    !D && M && u.value && I(u.value);
  }), Zl(() => m());
  function m(D) {
    if (!(e.eager && D) && !(rc && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const M = new Image();
        M.src = v.value.lazySrc, I(M, null);
      }
      v.value.src && De(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            p.value || I(u.value, null), c.value === "loading" && b();
          } else p.value || I(u.value), x();
        });
      });
    }
  }
  function b() {
    var _a3;
    r.isUnmounted || (x(), I(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function x() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let _ = -1;
  Ht(() => {
    clearTimeout(_);
  });
  function I(D) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const T = () => {
      if (clearTimeout(_), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: Y } = D;
      L || Y ? (d.value = Y, f.value = L) : !D.complete && c.value === "loading" && M != null ? _ = window.setTimeout(T, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const S = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), y = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const D = k("img", { class: ae(["v-img__img", S.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: b, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return g(Kt, { transition: e.transition, appear: true }, { default: () => [at(M ? k("picture", { class: "v-img__picture" }, [M, D]) : D, [[Mn, c.value === "loaded"]])] });
  }, C = () => g(Kt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && k("img", { class: ae(["v-img__img", "v-img__img--preload", S.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => a.placeholder ? g(Kt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && k("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? g(Kt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && k("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? k("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = se(false);
  {
    const D = de(p, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), D());
    });
  }
  return le(() => {
    const D = Ks.filterProps(e);
    return at(g(Ks, Z({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ge(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: p.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => k(be, null, [g(y, null, null), g(C, null, null), g(P, null, null), g(w, null, null), g(A, null, null)]), default: a.default }), [[Tn, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), zt = j({ border: [Boolean, Number, String] }, "border");
function Zt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { borderClasses: V(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const kt = j({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function It(e) {
  return { elevationClasses: B(() => {
    const n = bt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const ov = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, qn = j({ location: String }, "location");
function Ra(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Ct();
  return { locationStyles: V(() => {
    if (!e.location) return {};
    const { side: o, align: i } = Ns(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[ov[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[ov[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const CC = [null, "prominent", "default", "comfortable", "compact"], eh = j({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => CC.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...zt(), ...xe(), ...kt(), ...qn(), ...ot(), ...Ee({ tag: "header" }), ...Ue() }, "VToolbar"), Xs = ne()({ name: "VToolbar", props: eh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color), { borderClasses: o } = Zt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Ra(e), { roundedClasses: s } = ct(e), { themeClasses: u } = Ke(e), { rtlClasses: c } = Ct(), d = se(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = V(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = V(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return ft({ VBtn: { variant: "text" } }), le(() => {
    var _a4;
    const p = !!(e.title || n.title), m = !!(n.image || e.image), b = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!b : e.extended, g(e.tag, { class: ae(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: he([l.value, r.value, e.style]) }, { default: () => [m && k("div", { key: "image", class: "v-toolbar__image" }, [n.image ? g(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : g(ca, { key: "image-img", cover: true, src: e.image }, null)]), g(Be, { defaults: { VTabs: { height: ge(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [k("div", { class: "v-toolbar__content", style: { height: ge(f.value) } }, [n.prepend && k("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), p && g(kc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && k("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), g(Be, { defaults: { VTabs: { height: ge(v.value) } } }, { default: () => [g(Vr, null, { default: () => [d.value && k("div", { class: "v-toolbar__extension", style: { height: ge(v.value) } }, [b])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), VC = j({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function _C(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = K(null), r = se(0), s = se(0), u = se(0), c = se(false), d = se(false), f = se(false), v = se(false), p = se(true), m = V(() => Number(e.scrollThreshold)), b = V(() => Ze((m.value - r.value) / m.value || 0));
  function h(S) {
    const y = "window" in S ? window.innerHeight : S.clientHeight, C = "window" in S ? document.documentElement.scrollHeight : S.scrollHeight;
    return { clientHeight: y, scrollHeight: C };
  }
  function x() {
    const S = i.value;
    if (!S) return;
    const { clientHeight: y, scrollHeight: C } = h(S), w = C - y, A = (a == null ? void 0 : a.value) || 0, P = m.value + A;
    p.value = w > P;
  }
  function _() {
    x();
  }
  function I() {
    const S = i.value;
    if (!S || n && !n.value) return;
    l = r.value, r.value = "window" in S ? S.pageYOffset : S.scrollTop;
    const y = S instanceof Window ? document.documentElement.scrollHeight : S.scrollHeight;
    o !== y && (y > o && x(), o = y), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: w } = h(S), A = r.value + C >= w - 5;
    !d.value && A && r.value >= m.value && p.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !A || P && r.value < m.value || E) && (v.value = false), f.value = A;
  }
  return de(d, () => {
    s.value = s.value || r.value;
  }), de(c, () => {
    s.value = 0;
  }), xt(() => {
    de(() => e.scrollTarget, (S) => {
      var _a3;
      const y = S ? document.querySelector(S) : window;
      y && y !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), i.value = y, i.value.addEventListener("scroll", I, { passive: true }), Promise.resolve().then(() => {
        x();
      }));
    }, { immediate: true }), window.addEventListener("resize", _, { passive: true });
  }), Ht(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), window.removeEventListener("resize", _);
  }), n && de(n, I, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: b, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p };
}
function yl() {
  const e = se(false);
  return xt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: tl(e) };
}
const IC = j({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Re(eh(), ["location"]), ...gl(), ...VC(), height: { type: [Number, String], default: 64 } }, "VAppBar"), PC = ne()({ name: "VAppBar", props: IC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ce(e, "modelValue"), o = V(() => {
    var _a3;
    const y = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: y.has("hide"), fullyHide: y.has("fully-hide"), inverted: y.has("inverted"), collapse: y.has("collapse"), elevate: y.has("elevate"), fadeImage: y.has("fade-image") };
  }), i = V(() => {
    const y = o.value;
    return y.hide || y.fullyHide || y.inverted || y.collapse || y.elevate || y.fadeImage || !l.value;
  }), r = V(() => {
    var _a3, _b2;
    const y = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return y + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p } = _C(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), b = V(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = V(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), x = V(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), _ = V(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const y = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? y + C : y : y + C;
  });
  $t(() => !!e.scrollBehavior, () => {
    ut(() => {
      if (!m.value) {
        l.value = true;
        return;
      }
      if (o.value.inverted) {
        l.value = s.value > u.value;
        return;
      }
      if (!p.value) {
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
  const { ssrBootStyles: I } = yl(), { layoutItemStyles: S } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: _, elementSize: se(void 0), active: l, absolute: B(() => e.absolute) });
  return le(() => {
    const y = Re(Xs.filterProps(e), ["location"]);
    return g(Xs, Z({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...S.value, "--v-toolbar-image-opacity": x.value, height: void 0, ...I.value }, e.style] }, y, { collapse: b.value, flat: h.value }), n);
  }), {};
} }), AC = [null, "default", "comfortable", "compact"], vt = j({ density: { type: String, default: "default", validator: (e) => AC.includes(e) } }, "density");
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const TC = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ha(e, t) {
  return k(be, null, [e && k("span", { key: "overlay", class: ae(`${t}__overlay`) }, null), k("span", { key: "underlay", class: ae(`${t}__underlay`) }, null)]);
}
const yn = j({ color: String, variant: { type: String, default: "elevated", validator: (e) => TC.includes(e) } }, "variant");
function ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = B(() => {
    const { variant: o } = nt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = Pc(() => {
    const { variant: o, color: i } = nt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const th = j({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...zt(), ...xe(), ...vt(), ...kt(), ...ot(), ...Ee(), ...Ue(), ...yn() }, "VBtnGroup"), Zs = ne()({ name: "VBtnGroup", props: th(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Lt(e), { borderClasses: o } = Zt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = ct(e);
  ft({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), le(() => g(e.tag, { class: ae(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: he(e.style) }, n));
} }), bl = j({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), pl = j({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ma(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = pt("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Et();
  it(Symbol.for(`${t.description}:id`), l);
  const o = We(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = B(() => e.value), r = V(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: l, value: i, disabled: r }, a);
  }
  function u() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Ht(() => u());
  const c = V(() => o.isSelected(l)), d = V(() => o.items.value[0].id === l), f = V(() => o.items.value[o.items.value.length - 1].id === l), v = V(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return de(c, (p) => {
    a.emit("group:selected", { value: p });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (p) => o.select(l, p), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Oa(e, t) {
  let n = false;
  const a = Tt([]), l = Ce(e, "modelValue", [], (f) => f === void 0 ? [] : nh(a, f === null ? [null] : lt(f)), (f) => {
    const v = MC(a, f);
    return e.multiple ? v : v[0];
  }), o = pt("useGroup");
  function i(f, v) {
    const p = f, m = Symbol.for(`${t.description}:id`), h = Ml(m, o == null ? void 0 : o.vnode).indexOf(v);
    _t(p.value) === void 0 && (p.value = h, p.useIndexAsValue = true), h > -1 ? a.splice(h, 0, p) : a.push(p);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((p) => p.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  xt(() => {
    s();
  }), Ht(() => {
    n = true;
  }), mr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const p = a.find((m) => m.id === f);
    if (!(v && (p == null ? void 0 : p.disabled))) if (e.multiple) {
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
      const v = l.value[0], p = a.findIndex((h) => h.id === v);
      let m = (p + f) % a.length, b = a[m];
      for (; b.disabled && m !== p; ) m = (m + f) % a.length, b = a[m];
      if (b.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((p) => !p.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => DC(a, f) };
  return it(t, d), d;
}
function DC(e, t) {
  const n = nh(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function nh(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Dt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function MC(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Ac = Symbol.for("vuetify:v-btn-toggle"), EC = j({ ...th(), ...bl() }, "VBtnToggle"), BC = ne()({ name: "VBtnToggle", props: EC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Oa(e, Ac);
  return le(() => {
    const s = Zs.filterProps(e);
    return g(Zs, Z({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), $C = ["x-small", "small", "default", "large", "x-large"], Xn = j({ size: { type: [String, Number], default: "default" } }, "size");
function Jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return dc(() => {
    const n = e.size;
    let a, l;
    return Ki($C, n) ? a = `${t}--size-${n}` : n && (l = { width: ge(n), height: ge(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const FC = j({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ie, opacity: [String, Number], ...xe(), ...Xn(), ...Ee({ tag: "i" }), ...Ue() }, "VIcon"), Ge = ne()({ name: "VIcon", props: FC(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = se(), { themeClasses: o } = xr(), { iconData: i } = Yk(() => l.value || e.icon), { sizeClasses: r } = Jl(e), { textColorClasses: s, textColorStyles: u } = Mt(() => e.color);
  return le(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = hg(c).filter((f) => f.type === Qo && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return g(i.value.component, { tag: e.tag, icon: i.value.icon, class: ae(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: he([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ge(e.size), height: ge(e.size), width: ge(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ii(e, t) {
  const n = K(), a = se(false);
  if (rc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    gt(() => {
      l.disconnect();
    }), de(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const LC = j({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function RC(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = se(e.reveal ? "initial" : "disabled");
  return xt(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const OC = j({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...xe(), ...LC(), ...Xn(), ...Ee({ tag: "div" }), ...Ue() }, "VProgressCircular"), Ea = ne()({ name: "VProgressCircular", props: OC(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = K(), { themeClasses: i } = Ke(e), { sizeClasses: r, sizeStyles: s } = Jl(e), { textColorClasses: u, textColorStyles: c } = Mt(() => e.color), { textColorClasses: d, textColorStyles: f } = Mt(() => e.bgColor), { intersectionRef: v, isIntersecting: p } = ii(), { resizeRef: m, contentRect: b } = wn(), { state: h, duration: x } = RC(e), _ = B(() => h.value === "initial" ? 0 : Ze(parseFloat(e.modelValue), 0, 100)), I = B(() => Number(e.width)), S = B(() => s.value ? Number(e.size) : b.value ? b.value.width : Math.max(I.value, 32)), y = B(() => a / (1 - I.value / S.value) * 2), C = B(() => I.value / S.value * y.value), w = B(() => {
    const P = (100 - _.value) / 100 * l;
    return e.rounded && _.value > 0 && _.value < 100 ? ge(Math.min(l - 0.01, P + C.value)) : ge(P);
  }), A = V(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ut(() => {
    v.value = o.value, m.value = o.value;
  }), le(() => g(e.tag, { ref: o, class: ae(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || zn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: he([s.value, c.value, { "--progress-reveal-duration": `${x.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : _.value }, { default: () => [k("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [k("circle", { class: ae(["v-progress-circular__underlay", d.value]), style: he(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), k("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && k("div", { class: "v-progress-circular__content" }, [n.default({ value: _.value })])] })), {};
} }), NC = j({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function HC(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = V(() => {
    const r = nt(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = B(() => Number(e.chunkGap)), o = V(() => {
    if (!n.value) return {};
    const r = ge(l.value), s = ge(a.value);
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
const zC = j({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...NC(), ...xe(), ...qn({ location: "top" }), ...ot(), ...Ee(), ...Ue() }, "VProgressLinear"), _r = ne()({ name: "VProgressLinear", props: zC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ce(e, "modelValue"), { isRtl: o, rtlClasses: i } = Ct(), { themeClasses: r } = Ke(e), { locationStyles: s } = Ra(e), { textColorClasses: u, textColorStyles: c } = Mt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Xe(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: p } = Xe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: b } = Xe(() => e.color), { roundedClasses: h } = ct(e), { intersectionRef: x, isIntersecting: _ } = ii(), I = V(() => parseFloat(e.max)), S = V(() => parseFloat(e.height)), y = V(() => Ze(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), C = V(() => Ze(parseFloat(l.value) / I.value * 100, 0, 100)), w = V(() => o.value !== e.reverse), A = V(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = se(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = HC(e, P);
  $t(E, () => {
    const { resizeRef: H } = wn((G) => P.value = G[0].contentRect.width);
    ut(() => H.value = a.value);
  });
  const T = V(() => E.value ? M(y.value) : y.value), L = V(() => E.value ? M(C.value) : C.value);
  function Y(H) {
    if (!x.value) return;
    const { left: G, right: O, width: F } = x.value.getBoundingClientRect(), J = w.value ? F - H.clientX + (O - F) : H.clientX - G;
    l.value = Math.round(J / F * I.value);
  }
  return ut(() => {
    x.value = a.value;
  }), le(() => g(e.tag, { ref: a, class: ae(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && _.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: he([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ge(S.value) : 0, "--v-progress-linear-height": ge(S.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), I.value), onClick: e.clickable && Y }, { default: () => [e.stream && k("div", { key: "stream", class: ae(["v-progress-linear__stream", u.value]), style: { ...c.value, [w.value ? "left" : "right"]: ge(-S.value), borderTop: `${ge(S.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ge(S.value / 4)})`, width: ge(100 - y.value, "%"), "--v-progress-linear-stream-to": ge(S.value * (w.value ? 1 : -1)) } }, null), k("div", { class: ae(["v-progress-linear__background", d.value]), style: he([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), k("div", { class: ae(["v-progress-linear__buffer", v.value]), style: he([p.value, { opacity: parseFloat(e.bufferOpacity), width: ge(T.value, "%") }]) }, null), g(Ta, { name: A.value }, { default: () => [e.indeterminate ? k("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((H) => k("div", { key: H, class: ae(["v-progress-linear__indeterminate", H, m.value]), style: he(b.value) }, null))]) : k("div", { class: ae(["v-progress-linear__determinate", m.value]), style: he([b.value, { width: ge(L.value, "%") }]) }, null)] }), n.default && k("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: y.value })])] })), {};
} }), Ir = j({ loading: [Boolean, String] }, "loader");
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function si(e, t) {
  var _a3;
  let { slots: n } = t;
  return k("div", { class: ae(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || g(_r, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const WC = ["static", "relative", "fixed", "absolute", "sticky"], Ql = j({ position: { type: String, validator: (e) => WC.includes(e) } }, "position");
function eo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function jC() {
  const e = pt("useRoute");
  return V(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function ah() {
  var _a3, _b2;
  return (_b2 = (_a3 = pt("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function ui(e, t) {
  const n = dS("RouterLink"), a = B(() => !!(e.href || e.to)), l = V(() => (a == null ? void 0 : a.value) || Vf(t, "click") || Vf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Tt({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = V(() => e.to ? o : void 0), r = jC(), s = V(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Dt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = V(() => {
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
const ci = j({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let vs = false;
function UC(e, t) {
  let n = false, a, l;
  Je && (e == null ? void 0 : e.beforeEach) && (De(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      vs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), vs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      vs = false;
    });
  }), gt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function YC(e, t) {
  de(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && De(() => {
      t(n);
    });
  }, { immediate: true });
}
const Js = Symbol("rippleStop"), GC = 80;
function iv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Qs(e) {
  return e.constructor.name === "TouchEvent";
}
function lh(e) {
  return e.constructor.name === "KeyboardEvent";
}
const KC = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!lh(e)) {
    const d = t.getBoundingClientRect(), f = Qs(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, er = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = KC(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), iv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), iv(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function oh(e) {
  return typeof e > "u" || !!e;
}
function Ho(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Js])) {
    if (e[Js] = true, Qs(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || lh(e), n._ripple.class && (t.class = n._ripple.class), Qs(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        er.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, GC);
    } else er.show(e, n, t);
  }
}
function tr(e) {
  e[Js] = true;
}
function rn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        rn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), er.hide(t);
  }
}
function ih(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let zo = false;
function qC(e, t) {
  !zo && t.includes(e.key) && (zo = true, Ho(e));
}
function rh(e) {
  zo = false, rn(e);
}
function sh(e) {
  zo && (zo = false, rn(e));
}
function uh(e, t, n) {
  const { value: a, modifiers: l } = t, o = oh(a);
  o || er.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = ol(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => qC(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", tr, { passive: true }), e.addEventListener("mousedown", tr);
      return;
    }
    e.addEventListener("touchstart", Ho, { passive: true }), e.addEventListener("touchend", rn, { passive: true }), e.addEventListener("touchmove", ih, { passive: true }), e.addEventListener("touchcancel", rn), e.addEventListener("mousedown", Ho), e.addEventListener("mouseup", rn), e.addEventListener("mouseleave", rn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", rh), e.addEventListener("blur", sh), e.addEventListener("dragstart", rn, { passive: true });
  } else !o && n && ch(e);
}
function ch(e) {
  var _a3;
  e.removeEventListener("touchstart", tr), e.removeEventListener("mousedown", tr), e.removeEventListener("touchstart", Ho), e.removeEventListener("touchend", rn), e.removeEventListener("touchmove", ih), e.removeEventListener("touchcancel", rn), e.removeEventListener("mousedown", Ho), e.removeEventListener("mouseup", rn), e.removeEventListener("mouseleave", rn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", rh), e.removeEventListener("blur", sh), e.removeEventListener("dragstart", rn);
}
function XC(e, t) {
  uh(e, t, false);
}
function ZC(e) {
  ch(e), delete e._ripple;
}
function JC(e, t) {
  if (t.value === t.oldValue) return;
  const n = oh(t.oldValue);
  uh(e, t, n);
}
const Ft = { mounted: XC, unmounted: ZC, updated: JC }, Pr = j({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Ac }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ie, appendIcon: Ie, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...xe(), ...vt(), ...St(), ...kt(), ...pl(), ...Ir(), ...qn(), ...Ql(), ...ot(), ...ci(), ...Xn(), ...Ee({ tag: "button" }), ...Ue(), ...yn({ variant: "elevated" }) }, "VBtn"), ze = ne()({ name: "VBtn", props: Pr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = Zt(e), { densityClasses: i } = Lt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: u } = ri(e), { locationStyles: c } = Ra(e), { positionClasses: d } = eo(e), { roundedClasses: f } = ct(e), { sizeClasses: v, sizeStyles: p } = Jl(e), m = Ma(e, e.symbol, false), b = ui(e, n), h = V(() => {
    var _a3;
    return e.active !== void 0 ? e.active : b.isRouterLink.value ? (_a3 = b.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), x = B(() => h.value ? e.activeColor ?? e.color : e.color), _ = V(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!b.isLink.value || ((_a3 = b.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = b.isActive) == null ? void 0 : _b2.value) ? x.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: I, colorStyles: S, variantClasses: y } = ya(_), C = V(() => (m == null ? void 0 : m.disabled.value) || e.disabled), w = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = V(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || b.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (b.isRouterLink.value ? (_b2 = (_a3 = b.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return YC(b, m == null ? void 0 : m.select), le(() => {
    const E = b.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return at(g(E, Z(b.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, I.value, i.value, s.value, u.value, d.value, f.value, v.value, y.value, e.class], style: [S.value, r.value, c.value, p.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ha(true, "v-btn"), !e.icon && D && k("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? g(Be, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : g(Ge, { key: "prepend-icon", icon: e.prependIcon }, null)]), k("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? g(Ge, { key: "content-icon", icon: e.icon }, null) : g(Be, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Oe(e.text)];
      } })]), !e.icon && M && k("span", { key: "append", class: "v-btn__append" }, [a.append ? g(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : g(Ge, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && k("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(Ea, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Ft, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), QC = j({ ...Re(Pr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), e1 = ne()({ name: "VAppBarNavIcon", props: QC(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(ze, Z(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), t1 = ne()({ name: "VAppBarTitle", props: Xg(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(kc, Z(e, { class: "v-app-bar-title" }), n)), {};
} }), dh = ma("v-alert-title"), fh = j({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function vh(e, t) {
  return { iconSize: V(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const n1 = ["success", "info", "warning", "error"], a1 = j({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => n1.includes(e) }, ...xe(), ...vt(), ...St(), ...kt(), ...fh(), ...qn(), ...Ql(), ...ot(), ...Ee(), ...Ue(), ...yn({ variant: "flat" }) }, "VAlert"), l1 = ne()({ name: "VAlert", props: a1(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = vh(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ke(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ya(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Lt(e), { dimensionStyles: f } = wt(e), { elevationClasses: v } = It(e), { locationStyles: p } = Ra(e), { positionClasses: m } = eo(e), { roundedClasses: b } = ct(e), { textColorClasses: h, textColorStyles: x } = Mt(() => e.borderColor), { t: _ } = Qe(), I = B(() => ({ "aria-label": _(e.closeLabel), onClick(S) {
    l.value = false, n("click:close", S);
  } }));
  return () => {
    const S = !!(a.prepend || o.value), y = !!(a.title || e.title), C = !!(a.close || e.closable), w = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && g(e.tag, { class: ae(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, b.value, c.value, e.class]), style: he([u.value, f.value, p.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ha(false, "v-alert"), e.border && k("div", { key: "border", class: ae(["v-alert__border", h.value]), style: he(x.value) }, null), S && k("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? g(Be, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...w } } }, a.prepend) : g(Ge, Z({ key: "prepend-icon" }, w), null)]), k("div", { class: "v-alert__content" }, [y && g(dh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && k("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && k("div", { key: "close", class: "v-alert__close" }, [a.close ? g(Be, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: I.value })];
      } }) : g(ze, Z({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, I.value), null)])];
    } });
  };
} }), o1 = j({ start: Boolean, end: Boolean, icon: Ie, image: String, text: String, ...zt(), ...xe(), ...vt(), ...ot(), ...Xn(), ...Ee(), ...Ue(), ...yn({ variant: "flat" }) }, "VAvatar"), mn = ne()({ name: "VAvatar", props: o1(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = Zt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ya(e), { densityClasses: s } = Lt(e), { roundedClasses: u } = ct(e), { sizeClasses: c, sizeStyles: d } = Jl(e);
  return le(() => g(e.tag, { class: ae(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: he([i.value, d.value, e.style]) }, { default: () => [n.default ? g(Be, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? g(ca, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? g(Ge, { key: "icon", icon: e.icon }, null) : e.text, ha(false, "v-avatar")] })), {};
} }), i1 = j({ text: String, onClick: Bt(), ...xe(), ...Ue() }, "VLabel"), to = ne()({ name: "VLabel", props: i1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return k("label", { class: ae(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: he(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), mh = Symbol.for("vuetify:selection-control-group"), Tc = j({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ie, trueIcon: Ie, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...xe(), ...vt(), ...Ue() }, "SelectionControlGroup"), r1 = j({ ...Tc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), gh = ne()({ name: "VSelectionControlGroup", props: r1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Et(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return it(mh, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), gt(() => {
      r.delete(s);
    });
  } }), ft({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), le(() => {
    var _a3;
    return k("div", { class: ae(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: he(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ar = j({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...xe(), ...Tc() }, "VSelectionControl");
function s1(e) {
  const t = We(mh, void 0), { densityClasses: n } = Lt(e), a = Ce(e, "modelValue"), l = V(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = V(() => e.falseValue !== void 0 ? e.falseValue : false), i = V(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = V({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? lt(v).some((p) => e.valueComparator(p, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const p = v ? l.value : o.value;
    let m = p;
    i.value && (m = v ? [...lt(a.value), p] : lt(a.value).filter((b) => !e.valueComparator(b, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Mt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Xe(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = V(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Ba = ne()({ name: "VSelectionControl", directives: { vRipple: Ft }, inheritAttrs: false, props: Ar(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = s1(e), v = Et(), p = se(false), m = se(false), b = K(), h = B(() => e.id || `input-${v}`), x = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    b.value && (b.value.checked = r.value);
  });
  function _(C) {
    x.value && (p.value = true, zl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function I() {
    p.value = false, m.value = false;
  }
  function S(C) {
    C.stopPropagation();
  }
  function y(C) {
    if (!x.value) {
      b.value && (b.value.checked = r.value);
      return;
    }
    e.readonly && l && De(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return le(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [w, A] = Gn(n), P = k("input", Z({ ref: b, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: I, onFocus: _, onInput: y, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return k("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": p.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, w, { style: e.style }), [k("div", { class: ae(["v-selection-control__wrapper", s.value]), style: he(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), at(k("div", { class: ae(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: _, onBlur: I, id: h.value } })) ?? k(be, null, [i.value && g(Ge, { key: "icon", icon: i.value }, null), P])]), [[Ft, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && g(to, { for: h.value, onClick: S }, { default: () => [C] })]);
  }), { isFocused: p, input: b };
} }), hh = j({ indeterminate: Boolean, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, ...Ar({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Dn = ne()({ name: "VCheckboxBtn", props: hh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "indeterminate"), l = Ce(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => {
    const s = Re(Ba.filterProps(e), ["modelValue"]);
    return g(Ba, Z(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
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
    return g(Ge, Z({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const u1 = j({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...xe(), ...ga({ transition: { component: _c, leaveAbsolute: true, group: true } }) }, "VMessages"), yh = ne()({ name: "VMessages", props: u1(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => lt(e.messages)), { textColorClasses: l, textColorStyles: o } = Mt(() => e.color);
  return le(() => g(Kt, { transition: e.transition, tag: "div", class: ae(["v-messages", l.value, e.class]), style: he([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => k("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), fi = j({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = Ce(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const bh = Symbol.for("vuetify:form"), c1 = j({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function d1(e) {
  const t = Ce(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = se(false), o = K([]), i = K([]);
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
  return de(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of o.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), it(bh, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: p, resetValidation: m } = c;
    o.value.some((b) => b.id === d), o.value.push({ id: d, validate: v, reset: p, resetValidation: m, vm: sm(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((p) => p.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function no(e) {
  const t = We(bh, null);
  return { ...t, isReadonly: V(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: V(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const f1 = Symbol.for("vuetify:rules");
function v1(e) {
  const t = We(f1, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const ph = j({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function Sh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Et();
  const a = Ce(e, "modelValue"), l = V(() => e.validationValue === void 0 ? a.value : e.validationValue), o = no(e), i = v1(() => e.rules), r = K([]), s = se(true), u = V(() => !!(lt(a.value === "" ? null : a.value).length || lt(l.value === "" ? null : l.value).length)), c = V(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? lt(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = V(() => {
    var _a3;
    let I = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    I === "lazy" && (I = "input lazy"), I === "eager" && (I = "input eager");
    const S = new Set((I == null ? void 0 : I.split(" ")) ?? []);
    return { input: S.has("input"), blur: S.has("blur") || S.has("input") || S.has("invalid-input"), invalidInput: S.has("invalid-input"), lazy: S.has("lazy"), eager: S.has("eager") };
  }), f = V(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = se(false), p = V(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = pt("validation"), b = V(() => e.name ?? _t(n));
  Zl(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: b.value, vm: m, validate: _, reset: h, resetValidation: x });
  }), Ht(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, b.value);
  }), xt(async () => {
    var _a3;
    d.value.lazy || await _(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, b.value, f.value, c.value);
  }), $t(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    de(l, () => {
      if (l.value != null) _();
      else if (e.focused) {
        const I = de(() => e.focused, (S) => {
          S || _(), I();
        });
      }
    });
  }), $t(() => d.value.blur, () => {
    de(() => e.focused, (I) => {
      I || _();
    });
  }), de([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, b.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await De(), await x();
  }
  async function x() {
    s.value = true, d.value.lazy ? r.value = [] : await _(!d.value.eager);
  }
  async function _() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const S = [];
    v.value = true;
    for (const y of i.value) {
      if (S.length >= Number(e.maxErrors ?? 1)) break;
      const w = await (typeof y == "function" ? y : () => y)(l.value);
      if (w !== true) {
        if (w !== false && typeof w != "string") {
          console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        S.push(w || "");
      }
    }
    return r.value = S, v.value = false, s.value = I, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: x, validate: _, validationClasses: p };
}
const pa = j({ id: String, appendIcon: Ie, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...xe(), ...vt(), ...tn(St(), ["maxWidth", "minWidth", "width"]), ...Ue(), ...ph() }, "VInput"), Nt = ne()({ name: "VInput", props: { ...pa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = Ke(e), { rtlClasses: s } = Ct(), { InputIcon: u } = di(e), c = Et(), d = V(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: p, isReadonly: m, isPristine: b, isValid: h, isValidating: x, reset: _, resetValidation: I, validate: S, validationClasses: y } = Sh(e, "v-input", d), C = V(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !b.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), w = B(() => C.value.length > 0), A = B(() => !e.hideDetails || e.hideDetails === "auto" && (w.value || !!a.details)), P = V(() => A.value ? `${d.value}-messages` : void 0), E = V(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: p, isReadonly: m, isPristine: b, isValid: h, isValidating: x, hasDetails: A, reset: _, resetValidation: I, validate: S })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return le(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return k("div", { class: ae(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, y.value, e.class]), style: he([i.value, e.style]) }, [T && k("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && g(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && k("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && k("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && g(u, { key: "append-icon", name: "append", color: M.value }, null)]), A.value && k("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [g(yh, { active: w.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: _, resetValidation: I, validate: S, isValid: h, errorMessages: f };
} }), ms = Symbol("Forwarded refs");
function gs(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[ms] = n, new Proxy(e, { get(l, o) {
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
        const s = gs(r.value, o) ?? ("_" in r.value ? gs((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[ms];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = gs(c.value, o);
          if (d) return d;
          const f = c.value && c.value[ms];
          f && u.push(...f);
        }
      }
    }
  } });
}
const m1 = j({ ...Re(pa(), ["direction"]), ...Re(hh(), ["inline"]) }, "VCheckbox"), g1 = ne()({ name: "VCheckbox", inheritAttrs: false, props: m1(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: r } = ba(e), s = K(), u = Et();
  return le(() => {
    const [c, d] = Gn(n), f = Nt.filterProps(e), v = Dn.filterProps(e);
    return g(Nt, Z({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (p) => l.value = p, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (p) => {
      let { id: m, messagesId: b, isDisabled: h, isReadonly: x, isValid: _ } = p;
      return g(Dn, Z(v, { id: m.value, "aria-describedby": b.value, disabled: h.value, readonly: x.value }, d, { error: _.value === false, modelValue: l.value, "onUpdate:modelValue": (I) => l.value = I, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function h1(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = Wo(l, n), i = wh(l, a, n), r = Wo(l, t), s = kh(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function y1(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = Wo(a, n), o = kh(a, t), i = Wo(a, t);
  return o - l / 2 + i / 2;
}
function rv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function b1(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function wh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function Wo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function kh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Dc = Symbol.for("vuetify:v-slide-group"), Mc = j({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Dc }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...xe(), ...ml({ mobile: null }), ...Ee(), ...bl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), jo = ne()({ name: "VSlideGroup", props: Mc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = Ct(), { displayClasses: l, mobile: o } = gn(e), i = Oa(e, e.symbol), r = se(false), s = se(0), u = se(0), c = se(0), d = V(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = wn(), { resizeRef: p, contentRect: m } = wn(), b = Yx(), h = V(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), x = V(() => i.selected.value.length ? i.items.value.findIndex((z) => z.id === i.selected.value[0]) : -1), _ = V(() => i.selected.value.length ? i.items.value.findIndex((z) => z.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Je) {
    let z = -1;
    de(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(z), z = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const R = d.value ? "width" : "height";
          u.value = v.value[R], c.value = m.value[R], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && x.value >= 0 && p.el) {
          const R = p.el.children[_.value];
          S(R, e.centerActive);
        }
      });
    });
  }
  const I = se(false);
  function S(z, R) {
    let U = 0;
    R ? U = y1({ containerElement: f.el, isHorizontal: d.value, selectedElement: z }) : U = h1({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: z }), y(U);
  }
  function y(z) {
    if (!Je || !f.el) return;
    const R = Wo(d.value, f.el), U = wh(d.value, a.value, f.el);
    if (!(rv(d.value, f.el) <= R || Math.abs(z - U) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: ke, offsetWidth: q } = f.el;
        z = ke - q - z;
      }
      d.value ? b.horizontal(z, h.value) : b(z, h.value);
    }
  }
  function C(z) {
    const { scrollTop: R, scrollLeft: U } = z.target;
    s.value = d.value ? U : R;
  }
  function w(z) {
    if (I.value = true, !(!r.value || !p.el)) {
      for (const R of z.composedPath()) for (const U of p.el.children) if (U === R) {
        S(U);
        return;
      }
    }
  }
  function A(z) {
    I.value = false;
  }
  let P = false;
  function E(z) {
    var _a3;
    !P && !I.value && !(z.relatedTarget && ((_a3 = p.el) == null ? void 0 : _a3.contains(z.relatedTarget))) && L(), P = false;
  }
  function D() {
    P = true;
  }
  function M(z) {
    if (!p.el) return;
    function R(U) {
      z.preventDefault(), L(U);
    }
    d.value ? z.key === "ArrowRight" ? R(a.value ? "prev" : "next") : z.key === "ArrowLeft" && R(a.value ? "next" : "prev") : z.key === "ArrowDown" ? R("next") : z.key === "ArrowUp" && R("prev"), z.key === "Home" ? R("first") : z.key === "End" && R("last");
  }
  function T(z, R) {
    if (!z) return;
    let U = z;
    do
      U = U == null ? void 0 : U[R === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (U == null ? void 0 : U.hasAttribute("disabled"));
    return U;
  }
  function L(z) {
    if (!p.el) return;
    let R;
    if (!z) R = Ia(p.el)[0];
    else if (z === "next") {
      if (R = T(p.el.querySelector(":focus"), z), !R) return L("first");
    } else if (z === "prev") {
      if (R = T(p.el.querySelector(":focus"), z), !R) return L("last");
    } else z === "first" ? (R = p.el.firstElementChild, (R == null ? void 0 : R.hasAttribute("disabled")) && (R = T(R, "next"))) : z === "last" && (R = p.el.lastElementChild, (R == null ? void 0 : R.hasAttribute("disabled")) && (R = T(R, "prev")));
    R && R.focus({ preventScroll: true });
  }
  function Y(z) {
    const R = d.value && a.value ? -1 : 1, U = (z === "prev" ? -R : R) * u.value;
    let re = s.value + U;
    if (d.value && a.value && f.el) {
      const { scrollWidth: ke, offsetWidth: q } = f.el;
      re += ke - q;
    }
    y(re);
  }
  const H = V(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), G = V(() => r.value || Math.abs(s.value) > 0), O = V(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !o.value;
      case true:
        return G.value;
      case "mobile":
        return o.value || G.value;
      default:
        return !o.value && G.value;
    }
  }), F = V(() => Math.abs(s.value) > 1), J = V(() => {
    if (!f.value || !G.value) return false;
    const z = rv(d.value, f.el), R = b1(d.value, f.el);
    return z - R - Math.abs(s.value) > 1;
  });
  return le(() => g(e.tag, { class: ae(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": O.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: he(e.style), tabindex: I.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [O.value && k("div", { key: "prev", class: ae(["v-slide-group__prev", { "v-slide-group__prev--disabled": !F.value }]), onMousedown: D, onClick: () => F.value && Y("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, H.value)) ?? g(No, null, { default: () => [g(Ge, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), k("div", { key: "container", ref: f, class: ae(["v-slide-group__container", e.contentClass]), onScroll: C }, [k("div", { ref: p, class: "v-slide-group__content", onFocusin: w, onFocusout: A, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, H.value)])]), O.value && k("div", { key: "next", class: ae(["v-slide-group__next", { "v-slide-group__next--disabled": !J.value }]), onMousedown: D, onClick: () => J.value && Y("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, H.value)) ?? g(No, null, { default: () => [g(Ge, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: Y, scrollOffset: s, focus: L, hasPrev: F, hasNext: J };
} }), xh = Symbol.for("vuetify:v-chip-group"), p1 = j({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...Mc({ scrollToActive: false }), ...xe(), ...bl({ selectedClass: "v-chip--selected" }), ...Ee(), ...Ue(), ...yn({ variant: "tonal" }) }, "VChipGroup"), S1 = ne()({ name: "VChipGroup", props: p1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Oa(e, xh);
  return ft({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), le(() => {
    const u = jo.filterProps(e);
    return g(jo, Z(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), w1 = j({ activeClass: String, appendAvatar: String, appendIcon: Ie, baseColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ie, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...zt(), ...xe(), ...vt(), ...kt(), ...pl(), ...ot(), ...ci(), ...Xn(), ...Ee({ tag: "span" }), ...Ue(), ...yn({ variant: "tonal" }) }, "VChip"), da = ne()({ name: "VChip", directives: { vRipple: Ft }, props: w1(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { borderClasses: i } = Zt(e), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = ct(e), { sizeClasses: c } = Jl(e), { themeClasses: d } = Ke(e), f = Ce(e, "modelValue"), v = Ma(e, xh, false), p = Ma(e, Dc, false), m = ui(e, n), b = B(() => e.link !== false && m.isLink.value), h = V(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), x = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(w) {
    w.preventDefault(), w.stopPropagation(), f.value = false, a("click:close", w);
  } }));
  de(f, (w) => {
    w ? (v == null ? void 0 : v.register(), p == null ? void 0 : p.register()) : (v == null ? void 0 : v.unregister(), p == null ? void 0 : p.unregister());
  });
  const { colorClasses: _, colorStyles: I, variantClasses: S } = ya(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function y(w) {
    var _a3, _b2;
    a("click", w), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, w), v == null ? void 0 : v.toggle());
  }
  function C(w) {
    (w.key === "Enter" || w.key === " ") && (w.preventDefault(), y(w));
  }
  return () => {
    var _a3;
    const w = m.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), P = !!(A || l.append), E = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, M = !!(e.prependIcon || e.prependAvatar), T = !!(M || l.prepend);
    return f.value && at(g(w, Z(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, _.value, r.value, s.value, u.value, c.value, S.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [I.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: y, onKeydown: h.value && !b.value && C }), { default: () => {
      var _a4;
      return [ha(h.value, "v-chip"), D && g(Ic, { key: "filter" }, { default: () => [at(k("div", { class: "v-chip__filter" }, [l.filter ? g(Be, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : g(Ge, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Mn, v.isSelected.value]])] }), T && k("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? g(Be, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : k(be, null, [e.prependIcon && g(Ge, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && g(mn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), k("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Oe(e.text)]), P && k("div", { key: "append", class: "v-chip__append" }, [l.append ? g(Be, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : k(be, null, [e.appendIcon && g(Ge, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && g(mn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && k("button", Z({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, x.value), [l.close ? g(Be, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : g(Ge, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ft, h.value && e.ripple, null]]);
  };
} }), k1 = ["dotted", "dashed", "solid", "double"], x1 = j({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => k1.includes(e) }, ...xe(), ...Ue() }, "VDivider"), fn = ne()({ name: "VDivider", props: x1(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { textColorClasses: o, textColorStyles: i } = Mt(() => e.color), r = V(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ge(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ge(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ge(u) : void 0, marginInline: !e.vertical && u ? ge(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ge(c)})` : void 0 };
  });
  return le(() => {
    const u = k("hr", { class: ae([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: he([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? k("div", { class: ae(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, k("div", { class: "v-divider__content", style: he(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), eu = Symbol.for("vuetify:list");
function Ch() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = We(eu, { filterable: false, hasPrepend: se(false), updateHasPrepend: () => null, trackingIndex: se(-1), navigationStrategy: se("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Et() } = e, i = { filterable: t.filterable || n, hasPrepend: se(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return it(eu, i), t;
}
function Vh() {
  return We(eu, null);
}
const Ec = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Te(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of lt(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, _h = (e) => {
  const t = Ec(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = Te(o);
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
}, C1 = (e) => {
  const t = Ec(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, V1 = (e) => {
  const t = _h(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, _1 = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, Ih = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, I1 = { open: Ih.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Bc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Te(a), e && !l) {
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
}, Ph = (e) => {
  const t = Bc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Te(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, P1 = (e) => {
  const t = Bc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, A1 = (e) => {
  const t = Ph(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Te(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, $c = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Te(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(Te(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = Te(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const p of i.get(d)) {
        const m = Te(p);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Te(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, p) => {
      let [m, b] = p;
      return b === "on" && v.push(m), v;
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
}, T1 = (e) => {
  const t = $c(e);
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
}, D1 = (e) => {
  const n = { select: $c(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Yl = Symbol.for("vuetify:nested"), Ah = { id: se(), root: { itemsRegistration: K("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: K(/* @__PURE__ */ new Map()), parents: K(/* @__PURE__ */ new Map()), disabled: K(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: K(false), scrollToActive: K(false), selectable: K(false), opened: K(/* @__PURE__ */ new Set()), activated: K(/* @__PURE__ */ new Set()), selected: K(/* @__PURE__ */ new Map()), selectedValues: K([]), getPath: () => [] } }, M1 = j({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), E1 = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = se(/* @__PURE__ */ new Map()), r = se(/* @__PURE__ */ new Map()), s = se(/* @__PURE__ */ new Set()), u = Ce(e, "opened", e.opened, (S) => new Set(Array.isArray(S) ? S.map((y) => Te(y)) : S), (S) => [...S.values()]), c = V(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return C1(e.mandatory);
      case "single-leaf":
        return V1(e.mandatory);
      case "independent":
        return Ec(e.mandatory);
      case "single-independent":
      default:
        return _h(e.mandatory);
    }
  }), d = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return A1(e.mandatory);
      case "leaf":
        return P1(e.mandatory);
      case "independent":
        return Bc(e.mandatory);
      case "single-independent":
        return Ph(e.mandatory);
      case "trunk":
        return T1(e.mandatory);
      case "branch":
        return D1(e.mandatory);
      case "classic":
      default:
        return $c(e.mandatory);
    }
  }), f = V(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return I1;
      case "single":
        return _1;
      case "multiple":
      default:
        return Ih;
    }
  }), v = Ce(e, "activated", e.activated, (S) => c.value.in(S, i.value, r.value), (S) => c.value.out(S, i.value, r.value)), p = Ce(e, "selected", e.selected, (S) => d.value.in(S, i.value, r.value, s.value), (S) => d.value.out(S, i.value, r.value));
  Ht(() => {
    o = true;
  });
  function m(S) {
    const y = [];
    let C = Te(S);
    for (; C !== void 0; ) y.unshift(C), C = r.value.get(C);
    return y;
  }
  const b = pt("nested"), h = /* @__PURE__ */ new Set(), x = jk(() => {
    De(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  de(() => [n.value, nt(a)], () => {
    e.itemsRegistration === "props" && _();
  }, { immediate: true });
  function _() {
    const S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), w = nt(a) ? (E) => Te(E.raw) : (E) => E.value, A = [...n.value];
    let P = 0;
    for (; P < A.length; ) {
      const E = A[P++], D = w(E);
      if (E.children) {
        const M = [];
        for (const T of E.children) {
          const L = w(T);
          S.set(L, D), M.push(L), A.push(T);
        }
        y.set(D, M);
      }
      E.props.disabled && C.add(D);
    }
    i.value = y, r.value = S, s.value = C;
  }
  const I = { id: se(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => nt(l)), selectable: B(() => e.selectable), activated: v, selected: p, selectedValues: V(() => {
    const S = [];
    for (const [y, C] of p.value.entries()) C === "on" && S.push(y);
    return S;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (S, y, C, w) => {
    if (h.has(S)) {
      m(S).map(String).join(" -> "), m(y).concat(S).map(String).join(" -> ");
      return;
    } else h.add(S);
    y && S !== y && r.value.set(S, y), C && s.value.add(S), w && i.value.set(S, []), y != null && i.value.set(y, [...i.value.get(y) || [], S]), x();
  }, unregister: (S) => {
    if (o) return;
    h.delete(S), i.value.delete(S), s.value.delete(S);
    const y = r.value.get(S);
    if (y) {
      const C = i.value.get(y) ?? [];
      i.value.set(y, C.filter((w) => w !== S));
    }
    r.value.delete(S), x();
  }, updateDisabled: (S, y) => {
    y ? s.value.add(S) : s.value.delete(S);
  }, open: (S, y, C) => {
    b.emit("click:open", { id: S, value: y, path: m(S), event: C });
    const w = f.value.open({ id: S, value: y, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, openOnSelect: (S, y, C) => {
    const w = f.value.select({ id: S, value: y, selected: new Map(p.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, select: (S, y, C) => {
    b.emit("click:select", { id: S, value: y, path: m(S), event: C });
    const w = d.value.select({ id: S, value: y, selected: new Map(p.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    w && (p.value = w), I.root.openOnSelect(S, y, C);
  }, activate: (S, y, C) => {
    if (!e.activatable) return I.root.select(S, true, C);
    b.emit("click:activate", { id: S, value: y, path: m(S), event: C });
    const w = c.value.activate({ id: S, value: y, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
    if (w.size !== v.value.size) v.value = w;
    else {
      for (const A of w) if (!v.value.has(A)) {
        v.value = w;
        return;
      }
      for (const A of v.value) if (!w.has(A)) {
        v.value = w;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return it(Yl, I), I.root;
}, Th = (e, t, n) => {
  const a = We(Yl, Ah), l = Symbol("nested item"), o = V(() => {
    const r = Te(nt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: V(() => a.root.opened.value.has(o.value)), parent: V(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: V(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: V(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: V(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: V(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Zl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || De(() => {
      a.root.register(o.value, a.id.value, nt(t), n);
    });
  }), Ht(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), de(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), De(() => {
      a.root.register(r, a.id.value, nt(t), n);
    }));
  }), de(() => nt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && it(Yl, i), i;
}, B1 = () => {
  const e = We(Yl, Ah);
  it(Yl, { ...e, isGroupActivator: true });
}, $1 = Xt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return B1(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Dh = j({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ie, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ie, default: "$expand" }, rawId: [String, Number], prependIcon: Ie, appendIcon: Ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...xe(), ...Ee() }, "VListGroup"), Uo = ne()({ name: "VListGroup", props: Dh(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Th(() => e.value, () => e.disabled, true), i = V(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Vh(), { isBooted: s } = yl(), u = We(Yl), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = V(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = V(() => a.value ? e.collapseIcon : e.expandIcon), p = V(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return le(() => g(e.tag, { class: ae(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: he(e.style) }, { default: () => [n.activator && g(Be, { defaults: p.value }, { default: () => [g($1, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), g(Kt, { transition: { component: Vr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? at(k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Mn, a.value]]) : a.value && k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), F1 = j({ opacity: [Number, String], ...xe(), ...Ee() }, "VListItemSubtitle"), Mh = ne()({ name: "VListItemSubtitle", props: F1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ae(["v-list-item-subtitle", e.class]), style: he([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Eh = ma("v-list-item-title"), Bh = j({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ie, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...zt(), ...xe(), ...vt(), ...St(), ...kt(), ...ot(), ...ci(), ...Ee(), ...Ue(), ...yn({ variant: "text" }) }, "VListItem"), kn = ne()({ name: "VListItem", directives: { vRipple: Ft }, props: Bh(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = K(), r = V(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: p, root: m, parent: b, openOnSelect: h, scrollToActive: x, id: _ } = Th(r, () => e.disabled, false), I = Vh(), S = V(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), y = B(() => e.link !== false && o.isLink.value), C = V(() => !!I && (m.selectable.value || m.activatable.value || e.value != null)), w = V(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = V(() => I && I.navigationStrategy.value === "track" && e.index !== void 0 && I.trackingIndex.value === e.index), P = V(() => I ? y.value ? "link" : C.value ? "option" : "listitem" : void 0), E = V(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : S.value;
  }), D = B(() => e.rounded || e.nav), M = B(() => e.color ?? e.activeColor), T = B(() => ({ color: S.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  de(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (Ve) => {
    Ve && L();
  }), de(u, (Ve) => {
    var _a3;
    !Ve || !x || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), de(A, (Ve) => {
    var _a3;
    Ve && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Zl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && De(() => L());
  });
  function L() {
    b.value != null && m.open(b.value, true), h(true);
  }
  const { themeClasses: Y } = Ke(e), { borderClasses: H } = Zt(e), { colorClasses: G, colorStyles: O, variantClasses: F } = ya(T), { densityClasses: J } = Lt(e), { dimensionStyles: z } = wt(e), { elevationClasses: R } = It(e), { roundedClasses: U } = ct(D), re = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ke = B(() => e.ripple !== void 0 && e.ripple && (I == null ? void 0 : I.filterable) ? { keys: ["Enter"] } : e.ripple), q = V(() => ({ isActive: S.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function ve(Ve) {
    var _a3, _b2, _c2;
    l("click", Ve), !["INPUT", "TEXTAREA"].includes((_a3 = Ve.target) == null ? void 0 : _a3.tagName) && w.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, Ve), !p && (m.activatable.value ? s(!u.value, Ve) : (m.selectable.value || e.value != null && !y.value) && c(!f.value, Ve)));
  }
  function Ae(Ve) {
    const ye = Ve.target;
    ["INPUT", "TEXTAREA"].includes(ye.tagName) || (Ve.key === "Enter" || Ve.key === " " && !(I == null ? void 0 : I.filterable)) && (Ve.preventDefault(), Ve.stopPropagation(), Ve.target.dispatchEvent(new MouseEvent("click", Ve)));
  }
  return le(() => {
    const Ve = y.value ? "a" : e.tag, ye = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, ee = !!(!!(e.appendAvatar || e.appendIcon) || a.append), ie = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return I == null ? void 0 : I.updateHasPrepend(ie), e.activeColor && cg("active-color", ["color", "base-color"]), at(g(Ve, Z(o.linkProps, { ref: i, id: e.index !== void 0 && I ? `v-list-item-${I.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": S.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !ie && (I == null ? void 0 : I.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && S.value }, Y.value, H.value, G.value, J.value, R.value, re.value, U.value, F.value, e.class], style: [{ "--v-list-prepend-gap": ge(e.prependGap) }, O.value, z.value, e.style], tabindex: e.tabindex ?? (w.value ? I ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: ve, onKeydown: w.value && !y.value && Ae }), { default: () => {
      var _a3;
      return [ha(w.value || S.value, "v-list-item"), ie && k("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? g(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, q.value)];
      } }) : k(be, null, [e.prependAvatar && g(mn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), k("div", { class: "v-list-item__spacer" }, null)]), k("div", { class: "v-list-item__content", "data-no-activator": "" }, [ye && g(Eh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Oe(e.title)];
      } }), $ && g(Mh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Oe(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, q.value)]), ee && k("div", { key: "append", class: "v-list-item__append" }, [a.append ? g(Be, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, q.value)];
      } }) : k(be, null, [e.appendIcon && g(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(mn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), k("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ft, w.value && ke.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: p, isSelected: f, list: I, select: c, root: m, id: _, link: o };
} }), L1 = j({ color: String, inset: Boolean, sticky: Boolean, title: String, ...xe(), ...Ee() }, "VListSubheader"), ao = ne()({ name: "VListSubheader", props: L1(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Mt(() => e.color);
  return le(() => {
    const o = !!(n.default || e.title);
    return g(e.tag, { class: ae(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: he([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && k("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), R1 = j({ items: Array, returnObject: Boolean }, "VListChildren"), $h = ne()({ name: "VListChildren", props: R1(), setup(e, t) {
  let { slots: n } = t;
  return Ch(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? g(fn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? g(ao, i, null);
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
      } : void 0 }, c = Uo.filterProps(i);
      return o ? g(Uo, Z(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = Z(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : g(kn, Z(v, { index: l }), u);
      }, default: () => g($h, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : g(kn, Z(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), Fh = j({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), O1 = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Cn(e, t) {
  const n = yt(t, e.itemTitle, t), a = yt(t, e.itemValue, n), l = yt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Re(t, ["children"]) : t : void 0 : yt(t, e.itemProps);
  let i = yt(t, e.itemType, "item");
  O1.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Lh(e, l) : void 0, raw: t };
}
Cn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Lh(e, t) {
  const n = tn(e, Cn.neededProps), a = [];
  for (const l of t) a.push(Cn(n, l));
  return a;
}
function Fc(e) {
  const t = V(() => Lh(e, e.items)), n = V(() => t.value.some((r) => r.value === null)), a = se(/* @__PURE__ */ new Map()), l = se([]);
  ut(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (Da(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, p = e.valueComparator || Dt, m = tn(e, Cn.neededProps), b = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        b.push(Cn(m, h));
        continue;
      }
      const x = s.get(h);
      if (v || !x) {
        for (const _ of v ? u : c) if (p(h, _.value)) {
          b.push(_);
          continue e;
        }
        b.push(Cn(m, h));
        continue;
      }
      b.push(...x);
    }
    return b;
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
const N1 = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function H1(e, t) {
  const n = Da(t) ? t : yt(t, e.itemTitle), a = Da(t) ? t : yt(t, e.itemValue, void 0), l = yt(t, e.itemChildren), o = e.itemProps === true ? Re(t, ["children"]) : yt(t, e.itemProps);
  let i = yt(t, e.itemType, "item");
  N1.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Rh(e, l) : void 0, raw: t };
}
function Rh(e, t) {
  const n = [];
  for (const a of t) n.push(H1(e, a));
  return n;
}
function Oh(e) {
  return { items: V(() => Rh(e, e.items)) };
}
const Nh = j({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ie, collapseIcon: Ie, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...M1({ selectStrategy: "single-leaf", openStrategy: "list" }), ...zt(), ...xe(), ...vt(), ...St(), ...kt(), ...Fh(), ...ot(), ...Ee(), ...Ue(), ...yn({ variant: "text" }) }, "VList"), Gl = ne()({ name: "VList", props: Nh(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = Oh(e), { themeClasses: i } = Ke(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { borderClasses: u } = Zt(e), { densityClasses: c } = Lt(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: v } = ct(e), { children: p, open: m, parents: b, select: h, getPath: x } = E1(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), _ = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), I = B(() => e.activeColor), S = B(() => e.baseColor), y = B(() => e.color), C = B(() => e.selectable || e.activatable), w = Ce(e, "navigationIndex", -1, (J) => J ?? -1), A = Et();
  Ch({ filterable: e.filterable, trackingIndex: w, navigationStrategy: B(() => e.navigationStrategy), uid: A }), de(o, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), ft({ VListGroup: { activeColor: I, baseColor: S, color: y, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: I, baseColor: S, color: y, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = se(false), E = K();
  function D(J) {
    P.value = true;
  }
  function M(J) {
    P.value = false;
  }
  function T(J) {
    var _a3;
    e.navigationStrategy === "track" ? ~w.value || (w.value = H("first")) : !P.value && !(J.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(J.relatedTarget))) && F();
  }
  function L() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function Y(J) {
    switch (J) {
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
  function H(J) {
    const z = o.value.length;
    if (z === 0) return -1;
    let R;
    J === "first" ? R = 0 : J === "last" ? R = z - 1 : (R = w.value + (J === "next" ? 1 : -1), R < 0 && (R = z - 1), R >= z && (R = 0));
    const U = R;
    let re = 0;
    for (; re < z; ) {
      const ke = o.value[R];
      if (ke && ke.type !== "divider" && ke.type !== "subheader") return R;
      if (R += J === "next" || J === "first" ? 1 : -1, R < 0 && (R = z - 1), R >= z && (R = 0), R === U) return -1;
      re++;
    }
    return -1;
  }
  function G(J) {
    const z = J.target;
    if (!E.value || z.tagName === "INPUT" && ["Home", "End"].includes(J.key) || z.tagName === "TEXTAREA") return;
    const R = Y(J.key);
    if (R !== null) if (J.preventDefault(), e.navigationStrategy === "track") {
      const U = H(R);
      U !== -1 && (w.value = U);
    } else F(R);
  }
  function O(J) {
    P.value = true;
  }
  function F(J) {
    if (E.value) return Za(E.value, J);
  }
  return le(() => {
    const J = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), z = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return g(e.tag, { ref: E, class: ae(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, _.value, v.value, e.class]), style: he([{ "--v-list-indent": ge(J), "--v-list-group-prepend": J ? "0px" : void 0, "--v-list-prepend-gap": ge(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${A}-${w.value}` : void 0, "aria-multiselectable": z, onFocusin: D, onFocusout: M, onFocus: T, onBlur: L, onKeydown: G, onMousedown: O }, { default: () => [g($h, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: F, children: p, parents: b, getPath: x, navigationIndex: w };
} }), z1 = ma("v-list-img"), W1 = j({ start: Boolean, end: Boolean, ...xe(), ...Ee() }, "VListItemAction"), Lc = ne()({ name: "VListItemAction", props: W1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ae(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: he(e.style) }, n)), {};
} }), j1 = j({ start: Boolean, end: Boolean, ...xe(), ...Ee() }, "VListItemMedia"), U1 = ne()({ name: "VListItemMedia", props: j1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ae(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: he(e.style) }, n)), {};
} });
function hs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Y1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function sv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return hs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return hs({ x: l, y: o }, t);
  }
  return hs({ x: t.width / 2, y: t.height / 2 }, t);
}
const Hh = { static: q1, connected: Z1 }, G1 = j({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Hh }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function K1(e, t) {
  const n = K({}), a = K();
  Je && $t(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    de(() => e.locationStrategy, r), gt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = Hh[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function q1() {
}
function X1(e, t) {
  const n = fc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Z1(e, t, n) {
  (Array.isArray(e.target.value) || Wk(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = dc(() => {
    const h = Ns(t.location, e.isRtl.value), x = t.origin === "overlap" ? h : t.origin === "auto" ? ss(h) : Ns(t.origin, e.isRtl.value);
    return h.side === x.side && h.align === us(x).align ? { preferredAnchor: If(h), preferredOrigin: If(x) } : { preferredAnchor: h, preferredOrigin: x };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => V(() => {
    const x = parseFloat(t[h]);
    return isNaN(x) ? 1 / 0 : x;
  })), c = V(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new yg(4), p = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((x) => {
      x !== f && v.clear(), requestAnimationFrame((_) => {
        f = _;
      });
    }), v.isFull) {
      const x = v.values();
      if (Dt(x.at(-1), x.at(-3)) && !Dt(x.at(-1), x.at(-2))) return;
    }
    const h = b();
    h && v.push(h.flipped);
  });
  let m = new Sn({ x: 0, y: 0, width: 0, height: 0 });
  de(e.target, (h, x) => {
    x && !Array.isArray(x) && p.unobserve(x), Array.isArray(h) ? Dt(h, x) || b() : h && p.observe(h);
  }, { immediate: true }), de(e.contentEl, (h, x) => {
    x && p.unobserve(x), h && p.observe(h);
  }, { immediate: true }), gt(() => {
    p.disconnect();
  });
  function b() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = wg(e.target.value));
    const h = X1(e.contentEl.value, e.isRtl.value), x = Zi(e.contentEl.value), _ = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const I = x.reduce((M, T) => {
      const L = ck(T);
      return M ? new Sn({ x: Math.max(M.left, L.left), y: Math.max(M.top, L.top), width: Math.min(M.right, L.right) - Math.max(M.left, L.left), height: Math.min(M.bottom, L.bottom) - Math.max(M.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (I.x += Math.min(_, m.x), I.y += Math.min(_, m.y), I.width = Math.max(I.width - _ * 2, m.x + m.width - _), I.height = Math.max(I.height - _ * 2, m.y + m.height - _)) : (I.x += _, I.y += _, I.width -= _ * 2, I.height -= _ * 2);
    let S = { anchor: l.value, origin: o.value };
    function y(M) {
      const T = new Sn(h), L = sv(M.anchor, m), Y = sv(M.origin, T);
      let { x: H, y: G } = Y1(L, Y);
      switch (M.anchor.side) {
        case "top":
          G -= c.value[0];
          break;
        case "bottom":
          G += c.value[0];
          break;
        case "left":
          H -= c.value[0];
          break;
        case "right":
          H += c.value[0];
          break;
      }
      switch (M.anchor.align) {
        case "top":
          G -= c.value[1];
          break;
        case "bottom":
          G += c.value[1];
          break;
        case "left":
          H -= c.value[1];
          break;
        case "right":
          H += c.value[1];
          break;
      }
      return T.x += H, T.y += G, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), { overflows: Af(T, I), x: H, y: G };
    }
    let C = 0, w = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: T, overflows: L } = y(S);
      C += M, w += T, h.x += M, h.y += T;
      {
        const Y = Pf(S.anchor), H = L.x.before || L.x.after, G = L.y.before || L.y.after;
        let O = false;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && H && !P.x || F === "y" && G && !P.y) {
            const J = { anchor: { ...S.anchor }, origin: { ...S.origin } }, z = F === "x" ? Y === "y" ? us : ss : Y === "y" ? ss : us;
            J.anchor = z(J.anchor), J.origin = z(J.origin);
            const { overflows: R } = y(J);
            (R[F].before <= L[F].before && R[F].after <= L[F].after || R[F].before + R[F].after < (L[F].before + L[F].after) / 2) && (S = J, O = P[F] = true);
          }
        }), O) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (w += L.y.before, h.y += L.y.before), L.y.after && (w -= L.y.after, h.y -= L.y.after);
      {
        const Y = Af(h, I);
        A.x = I.width - Y.x.before - Y.x.after, A.y = I.height - Y.y.before - Y.y.after, C += Y.x.before, h.x += Y.x.before, w += Y.y.before, h.y += Y.y.before;
      }
      break;
    }
    const D = Pf(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: ge(ys(w)), left: e.isRtl.value ? void 0 : ge(ys(C)), right: e.isRtl.value ? ge(ys(-C)) : void 0, minWidth: ge(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ge(uv(Ze(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ge(uv(Ze(A.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: A, contentBox: h, flipped: P };
  }
  return de(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => b()), De(() => {
    const h = b();
    if (!h) return;
    const { available: x, contentBox: _ } = h;
    _.height > x.y && requestAnimationFrame(() => {
      b(), requestAnimationFrame(() => {
        b();
      });
    });
  }), { updateLocation: b };
}
function ys(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function uv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let tu = true;
const nr = [];
function J1(e) {
  !tu || nr.length ? (nr.push(e), nu()) : (tu = false, e(), nu());
}
let cv = -1;
function nu() {
  cancelAnimationFrame(cv), cv = requestAnimationFrame(() => {
    const e = nr.shift();
    e && e(), nr.length ? nu() : tu = true;
  });
}
const zh = { none: null, close: tV, block: nV, reposition: aV }, Q1 = j({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in zh } }, "VOverlay-scroll-strategies");
function eV(e, t) {
  if (!Je) return;
  let n;
  ut(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Ol(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = zh[e.scrollStrategy]) == null ? void 0 : _a3.call(zh, t, e, n);
    }));
  }), gt(() => {
    n == null ? void 0 : n.stop();
  });
}
function tV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Wh(Rc(e.target.value, e.contentEl.value), t);
}
function nV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Rc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Zi(a, t.contained ? n : void 0), ...Zi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => hc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ge(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ge(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ge(o)), r.classList.add("v-overlay-scroll-blocked");
  }), gt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function aV(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    J1(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Wh(Rc(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), gt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function Rc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Wh(e, t) {
  const n = [document, ...Zi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), gt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const au = Symbol.for("vuetify:v-menu"), Oc = j({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Nc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = lk(u, () => {
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
const lV = j({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Oc() }, "VOverlay-activator");
function oV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = pt("useActivator"), i = K();
  let r = false, s = false, u = true;
  const c = V(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = V(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = Nc(e, (w) => {
    w === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== w && (u = true), n.value = w);
  }), p = K(), m = { onClick: (w) => {
    w.stopPropagation(), i.value = w.currentTarget || w.target, n.value || (p.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    r = true, i.value = w.currentTarget || w.target, f();
  }, onMouseleave: (w) => {
    r = false, v();
  }, onFocus: (w) => {
    zl(w.target, ":focus-visible") !== false && (s = true, w.stopPropagation(), i.value = w.currentTarget || w.target, f());
  }, onBlur: (w) => {
    s = false, w.stopPropagation(), v({ minDelay: 1 });
  } }, b = V(() => {
    const w = {};
    return d.value && (w.onClick = m.onClick), e.openOnHover && (w.onMouseenter = m.onMouseenter, w.onMouseleave = m.onMouseleave), c.value && (w.onFocus = m.onFocus, w.onBlur = m.onBlur), w;
  }), h = V(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = true, f();
    }, w.onMouseleave = () => {
      r = false, v();
    }), c.value && (w.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (s = true, f());
    }, w.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const A = We(au, null);
      w.onClick = () => {
        n.value = false, A == null ? void 0 : A.closeParents();
      };
    }
    return w;
  }), x = V(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, w.onMouseleave = () => {
      r = false, v();
    }), w;
  });
  de(a, (w) => {
    var _a3;
    w && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), de(n, (w) => {
    w || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const _ = Bo();
  ut(() => {
    _.value && De(() => {
      i.value = _.el;
    });
  });
  const I = Bo(), S = V(() => e.target === "cursor" && p.value ? p.value : I.value ? I.el : jh(e.target, o) || i.value), y = V(() => Array.isArray(S.value) ? void 0 : S.value);
  let C;
  return de(() => !!e.activator, (w) => {
    w && Je ? (C = Ol(), C.run(() => {
      iV(e, o, { activatorEl: i, activatorEvents: b });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), gt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: _, target: S, targetEl: y, targetRef: I, activatorEvents: b, contentEvents: h, scrimEvents: x };
}
function iV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  de(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && De(() => o());
  }, { immediate: true }), de(() => e.activatorProps, () => {
    o();
  }), gt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && dk(s, Z(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && fk(s, Z(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = jh(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function jh(e, t) {
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
const Uh = j({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Bi = /* @__PURE__ */ new Map();
let dv = 0;
function fv(e) {
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
  const o = Ia(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function Yh(e, t) {
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
    const p = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await De(), n.value && !r && p !== m && o.value && nt(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Ia(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const p = Ia(document.documentElement);
      if (v.shiftKey && v.target === p.at(0) || !v.shiftKey && v.target === p.at(-1)) {
        const m = Ia(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Je && (de(() => e.retainFocus, (v) => {
    v ? Bi.set(i, { isActive: n, contentEl: o }) : Bi.delete(i);
  }, { immediate: true }), de(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), dv++ < 1 && document.addEventListener("keydown", fv)), gt(() => {
    Bi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --dv < 1 && document.removeEventListener("keydown", fv);
  });
}
function Gh() {
  if (!Je) return se(false);
  const { ssr: e } = gn();
  if (e) {
    const t = se(false);
    return xt(() => {
      t.value = true;
    }), t;
  } else return se(true);
}
const Hc = j({ eager: Boolean }, "lazy");
function zc(e, t) {
  const n = se(false), a = B(() => n.value || e.eager || t.value);
  de(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function Sl() {
  const t = pt("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const vv = Symbol.for("vuetify:stack"), uo = Tt([]);
function rV(e, t, n) {
  const a = pt("useStack"), l = !n, o = We(vv, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  it(vv, i);
  const r = se(Number(nt(t)));
  $t(e, () => {
    var _a3;
    const c = (_a3 = uo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(nt(t)), l && uo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), gt(() => {
      if (l) {
        const d = Te(uo).findIndex((f) => f[0] === a.uid);
        uo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = se(true);
  return l && ut(() => {
    var _a3;
    const c = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: tl(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function sV(e) {
  return { teleportTarget: V(() => {
    const n = e();
    if (n === true || !Je) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function uV() {
  return true;
}
function Kh(e, t, n) {
  if (!e || qh(e, n) === false) return false;
  const a = Dg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function qh(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || uV)(e);
}
function cV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Kh(e, t, n) && setTimeout(() => {
    qh(e, n) && a && a(e);
  }, 0);
}
function mv(e, t) {
  const n = Dg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const lu = { mounted(e, t) {
  const n = (l) => cV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Kh(l, e, t);
  };
  mv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (mv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function dV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return g(Ta, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && k("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = j({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...lV(), ...xe(), ...St(), ...Hc(), ...G1(), ...Q1(), ...Uh(), ...Ue(), ...ga() }, "VOverlay"), jn = ne()({ name: "VOverlay", directives: { vClickOutside: lu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Re(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = pt("VOverlay"), i = K(), r = K(), s = K(), u = Ce(e, "modelValue"), c = V({ get: () => u.value, set: (q) => {
    q && e.disabled || (u.value = q);
  } }), { themeClasses: d } = Ke(e), { rtlClasses: f, isRtl: v } = Ct(), { hasContent: p, onAfterLeave: m } = zc(e, c), b = Xe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: x, stackStyles: _ } = rV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: I, activatorRef: S, target: y, targetEl: C, targetRef: w, activatorEvents: A, contentEvents: P, scrimEvents: E } = oV(e, { isActive: c, isTop: x, contentEl: s }), { teleportTarget: D } = sV(() => {
    var _a3, _b2, _c2;
    const q = e.attach || e.contained;
    if (q) return q;
    const ve = ((_a3 = I == null ? void 0 : I.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return ve instanceof ShadowRoot ? ve : false;
  }), { dimensionStyles: M } = wt(e), T = Gh(), { scopeId: L } = Sl();
  de(() => e.disabled, (q) => {
    q && (c.value = false);
  });
  const { contentStyles: Y, updateLocation: H } = K1(e, { isRtl: v, contentEl: s, target: y, isActive: c });
  eV(e, { root: i, contentEl: s, targetEl: C, target: y, isActive: c, updateLocation: H });
  function G(q) {
    l("click:outside", q), e.persistent ? U() : c.value = false;
  }
  function O(q) {
    return c.value && x.value && (!e.scrim || q.target === r.value || q instanceof MouseEvent && q.shadowTarget === r.value);
  }
  Yh(e, { isActive: c, localTop: x, contentEl: s, activatorEl: I }), Je && de(c, (q) => {
    q ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: true }), Ht(() => {
    Je && window.removeEventListener("keydown", F);
  });
  function F(q) {
    var _a3, _b2, _c2;
    q.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", q), e.persistent ? U() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = I.value) == null ? void 0 : _c2.focus())));
  }
  function J(q) {
    q.key === "Escape" && !h.value || l("keydown", q);
  }
  const z = ah();
  $t(() => e.closeOnBack, () => {
    UC(z, (q) => {
      h.value && c.value ? (q(false), e.persistent ? U() : c.value = false) : q();
    });
  });
  const R = K();
  de(() => c.value && (e.absolute || e.contained) && D.value == null, (q) => {
    if (q) {
      const ve = Sr(i.value);
      ve && ve !== document.scrollingElement && (R.value = ve.scrollTop);
    }
  });
  function U() {
    e.noClickAnimation || s.value && ta(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: $o });
  }
  function re() {
    l("afterEnter");
  }
  function ke() {
    m(), l("afterLeave");
  }
  return le(() => {
    var _a3;
    return k(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: w, props: Z({ ref: S }, A.value, e.activatorProps) }), T.value && p.value && g(nS, { disabled: !D.value, to: D.value }, { default: () => [k("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [_.value, { "--v-overlay-opacity": e.opacity, top: ge(R.value) }, e.style], ref: i, onKeydown: J }, L, a), [g(dV, Z({ color: b, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), g(Kt, { appear: true, persisted: true, transition: e.transition, target: y.value, onAfterEnter: re, onAfterLeave: ke }, { default: () => {
      var _a4;
      return [at(k("div", Z({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, Y.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Mn, c.value], [lu, { handler: G, closeConditional: O, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, scrimEl: r, target: y, animateClick: U, contentEl: s, rootEl: i, globalTop: h, localTop: x, updateLocation: H };
} }), Xh = j({ id: String, submenu: Boolean, ...Re(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Cr } }), ["absolute"]) }, "VMenu"), Kl = ne()({ name: "VMenu", props: Xh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = Sl(), { isRtl: o } = Ct(), i = Et(), r = B(() => e.id || `v-menu-${i}`), s = K(), u = We(au, null), c = se(/* @__PURE__ */ new Set());
  it(au, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !ok(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Ht(() => u == null ? void 0 : u.unregister()), ju(() => a.value = false), de(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !pg(Ia((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const b = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    b && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Za(b, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Za(b, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Za(b, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const p = V(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return le(() => {
    const m = jn.filterProps(e);
    return g(jn, Z({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (b) => a.value = b, absolute: true, activatorProps: p.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var b = arguments.length, h = new Array(b), x = 0; x < b; x++) h[x] = arguments[x];
      return g(Be, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Pt({ id: r, \u03A8openChildren: c }, s);
} }), Wc = j({ color: String, ...zt(), ...xe(), ...St(), ...kt(), ...qn(), ...Ql(), ...ot(), ...Ee(), ...Ue() }, "VSheet"), $a = ne()({ name: "VSheet", props: Wc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { borderClasses: i } = Zt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: u } = Ra(e), { positionClasses: c } = eo(e), { roundedClasses: d } = ct(e);
  return le(() => g(e.tag, { class: ae(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: he([o.value, r.value, u.value, e.style]) }, n)), {};
} }), fV = j({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...xe(), ...ga({ transition: { component: _c } }) }, "VCounter"), Tr = ne()({ name: "VCounter", functional: true, props: fV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => g(Kt, { transition: e.transition }, { default: () => [at(k("div", { class: ae(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: he(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Mn, e.active]])] })), {};
} }), vV = j({ floating: Boolean, ...xe() }, "VFieldLabel"), mo = ne()({ name: "VFieldLabel", props: vV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(to, { class: ae(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: he(e.style) }, n)), {};
} }), mV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = j({ appendInnerIcon: Ie, bgColor: String, clearable: Boolean, clearIcon: { type: Ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => mV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...xe(), ...Ir(), ...ot(), ...Ue() }, "VField"), Fa = ne()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Ke(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = ba(e), { InputIcon: d } = di(e), { roundedClasses: f } = ct(e), { rtlClasses: v } = Ct(), p = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), b = B(() => !e.singleLine && m.value), h = Et(), x = V(() => e.id || `input-${h}`), _ = B(() => e.details ? `${x.value}-messages` : void 0), I = K(), S = K(), y = K(), C = V(() => ["plain", "underlined"].includes(e.variant)), w = V(() => e.error || e.disabled ? void 0 : p.value && s.value ? e.color : e.baseColor), A = V(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? w.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = Xe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Mt(w);
  de(p, (G) => {
    if (b.value && !zn()) {
      const O = I.value.$el, F = S.value.$el;
      requestAnimationFrame(() => {
        const J = fc(O), z = F.getBoundingClientRect(), R = z.x - J.x, U = z.y - J.y - (J.height / 2 - z.height / 2), re = z.width / 0.75, ke = Math.abs(re - J.width) > 1 ? { maxWidth: ge(re) } : void 0, q = getComputedStyle(O), ve = getComputedStyle(F), Ae = parseFloat(q.transitionDuration) * 1e3 || 150, Ve = parseFloat(ve.getPropertyValue("--v-field-label-scale")), ye = ve.getPropertyValue("color");
        O.style.visibility = "visible", F.style.visibility = "hidden", ta(O, { transform: `translate(${R}px, ${U}px) scale(${Ve})`, color: ye, ...ke }, { duration: Ae, easing: $o, direction: G ? "normal" : "reverse" }).finished.then(() => {
          O.style.removeProperty("visibility"), F.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = V(() => ({ isActive: p, isFocused: s, controlRef: y, iconColor: A, blur: c, focus: u })), L = B(() => {
    const G = !p.value;
    return { "aria-hidden": G, for: G ? void 0 : x.value };
  }), Y = B(() => {
    const G = b.value && p.value;
    return { "aria-hidden": G, for: G ? void 0 : x.value };
  });
  function H(G) {
    G.target !== document.activeElement && G.preventDefault();
  }
  return le(() => {
    var _a3;
    const G = e.variant === "outlined", O = !!(l["prepend-inner"] || e.prependInnerIcon), F = !!(e.clearable || l.clear) && !e.disabled, J = !!(l["append-inner"] || e.appendInnerIcon || F), z = () => l.label ? l.label({ ...T.value, label: e.label, props: { for: x.value } }) : e.label;
    return k("div", Z({ class: ["v-field", { "v-field--active": p.value, "v-field--appended": J, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": O, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !z(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: H }, n), [k("div", { class: "v-field__overlay" }, null), g(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), O && k("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && g(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), k("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && g(mo, Z({ key: "floating-label", ref: S, class: [D.value], floating: true }, L.value, { style: M.value }), { default: () => [z()] }), m.value && g(mo, Z({ key: "label", ref: I, id: e.labelId }, Y.value), { default: () => [z()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: x.value, class: "v-field__input", "aria-describedby": _.value }, focus: u, blur: c })) ?? k("div", { id: x.value, class: "v-field__input", "aria-describedby": _.value }, null)]), F && g(Ic, { key: "clear" }, { default: () => [at(k("div", { class: "v-field__clearable", onMousedown: (R) => {
      R.preventDefault(), R.stopPropagation();
    } }, [g(Be, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : g(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Mn, e.dirty]])] }), J && k("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && g(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), k("div", { class: ae(["v-field__outline", D.value]), style: he(M.value) }, [G && k(be, null, [k("div", { class: "v-field__outline__start" }, null), b.value && k("div", { class: "v-field__outline__notch" }, [g(mo, Z({ ref: S, floating: true }, L.value), { default: () => [z()] })]), k("div", { class: "v-field__outline__end" }, null)]), C.value && b.value && g(mo, Z({ ref: S, floating: true }, L.value), { default: () => [z()] })])]);
  }), { controlRef: y, fieldIconColor: A };
} }), Zh = j({ autocomplete: String }, "autocomplete");
function jc(e) {
  const t = Et(), n = se(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Jh(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const gV = ["color", "file", "time", "date", "datetime-local", "week", "month"], gi = j({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Zh(), ...Re(pa(), ["direction"]), ...mi() }, "VTextField"), Un = ne()({ name: "VTextField", directives: { vIntersect: Tn }, inheritAttrs: false, props: gi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = ba(e), { onIntersect: u } = Jh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = V(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = V(() => ["plain", "underlined"].includes(e.variant)), v = K(), p = K(), m = K(), b = jc(e), h = V(() => gV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function x() {
    b.isSuppressing.value && b.update(), i.value || r(), De(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function _(C) {
    a("mousedown:control", C), C.target !== m.value && (x(), C.preventDefault());
  }
  function I(C) {
    a("click:control", C);
  }
  function S(C, w) {
    C.stopPropagation(), x(), De(() => {
      w(), ai(e["onClick:clear"], C);
    });
  }
  function y(C) {
    var _a3;
    const w = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = w.value;
      return;
    }
    const A = w.value, P = w.selectionStart, E = w.selectionEnd;
    o.value = A, De(() => {
      let D = 0;
      A.trimStart().length === w.value.length && (D = A.length - w.value.length), P != null && (w.selectionStart = P - D), E != null && (w.selectionEnd = E - D);
    });
  }
  return le(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), w = !!(C || l.details), [A, P] = Gn(n), { modelValue: E, ...D } = Nt.filterProps(e), M = Fa.filterProps(e);
    return g(Nt, Z({ ref: v, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: L, isDisabled: Y, isDirty: H, isReadonly: G, isValid: O, hasDetails: F, reset: J } = T;
      return g(Fa, Z({ ref: p, onMousedown: _, onClick: I, "onClick:clear": (z) => S(z, J), role: e.role }, Re(M, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || H.value, dirty: H.value || e.dirty, disabled: Y.value, focused: i.value, details: F.value, error: O.value === false }), { ...l, default: (z) => {
        let { props: { class: R, ...U }, controlRef: re } = z;
        const ke = k("input", Z({ ref: (q) => m.value = re.value = q, value: o.value, onInput: y, autofocus: e.autofocus, readonly: G.value, disabled: Y.value, name: b.fieldName.value, autocomplete: b.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, U, P), null);
        return k(be, null, [e.prefix && k("span", { class: "v-text-field__prefix" }, [k("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), at(l.default ? k("div", { class: ae(R), "data-no-activator": "" }, [l.default({ id: L }), ke]) : ua(ke, { class: R }), [[Tn, u, null, { once: true }]]), e.suffix && k("span", { class: "v-text-field__suffix" }, [k("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: w ? (T) => {
      var _a3;
      return k(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && k(be, null, [k("span", null, null), g(Tr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, v, p, m);
} }), hV = j({ renderless: Boolean, ...xe() }, "VVirtualScrollItem"), Qh = ne()({ name: "VVirtualScrollItem", inheritAttrs: false, props: hV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = wn(void 0, "border");
  de(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), le(() => {
    var _a3, _b2;
    return e.renderless ? k(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : k("div", Z({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), yV = -1, bV = 1, bs = 100, ey = j({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function ty(e, t) {
  const n = gn(), a = se(0);
  ut(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = se(0), o = se(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = se(0), r = se(0), s = K(), u = K();
  let c = 0;
  const { resizeRef: d, contentRect: f } = wn();
  ut(() => {
    d.value = s.value;
  });
  const v = V(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), p = V(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length });
  const h = se(0);
  let x = -1;
  function _(F) {
    return m[F] || a.value;
  }
  const I = gg(() => {
    const F = performance.now();
    b[0] = 0;
    const J = t.value.length;
    for (let z = 1; z <= J; z++) b[z] = (b[z - 1] || 0) + _(z - 1);
    h.value = Math.max(h.value, performance.now() - F);
  }, h), S = de(p, (F) => {
    F && (S(), c = u.value.offsetTop, I.immediate(), Y(), ~x && De(() => {
      Je && window.requestAnimationFrame(() => {
        G(x), x = -1;
      });
    }));
  });
  gt(() => {
    I.clear();
  });
  function y(F, J) {
    const z = m[F], R = a.value;
    a.value = R ? Math.min(a.value, J) : J, (z !== J || R !== a.value) && (m[F] = J, I());
  }
  function C(F) {
    F = Ze(F, 0, t.value.length);
    const J = Math.floor(F), z = F % 1, R = J + 1, U = b[J] || 0, re = b[R] || U;
    return U + (re - U) * z;
  }
  function w(F) {
    return pV(b, F);
  }
  let A = 0, P = 0, E = 0;
  de(v, (F, J) => {
    Y(), F < J && requestAnimationFrame(() => {
      P = 0, Y();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !u.value) return;
    const F = s.value.scrollTop, J = performance.now();
    J - E > 500 ? (P = Math.sign(F - A), c = u.value.offsetTop) : P = F - A, A = F, E = J, window.clearTimeout(D), D = window.setTimeout(T, 500), Y();
  }
  function T() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(D), Y());
  }
  let L = -1;
  function Y() {
    cancelAnimationFrame(L), L = requestAnimationFrame(H);
  }
  function H() {
    if (!s.value || !v.value || !a.value) return;
    const F = A - c, J = Math.sign(P), z = Math.max(0, F - bs), R = Ze(w(z), 0, t.value.length), U = F + v.value + bs, re = Ze(w(U) + 1, R + 1, t.value.length);
    if ((J !== yV || R < l.value) && (J !== bV || re > o.value)) {
      const ke = C(l.value) - C(R), q = C(re) - C(o.value);
      Math.max(ke, q) > bs ? (l.value = R, o.value = re) : (R <= 0 && (l.value = R), re >= t.value.length && (o.value = re));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function G(F) {
    const J = C(F);
    !s.value || F && !J ? x = F : s.value.scrollTop = J;
  }
  const O = V(() => t.value.slice(l.value, o.value).map((F, J) => {
    const z = J + l.value;
    return { raw: F, index: z, key: yt(F, e.itemKey, z) };
  }));
  return de(t, () => {
    m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length }), I.immediate(), Y();
  }, { deep: 1 }), { calculateVisibleItems: Y, containerRef: s, markerRef: u, computedItems: O, paddingTop: i, paddingBottom: r, scrollToIndex: G, handleScroll: M, handleScrollend: T, handleItemResize: y };
}
function pV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const SV = j({ items: { type: Array, default: () => [] }, renderless: Boolean, ...ey(), ...xe(), ...St() }, "VVirtualScroll"), Dr = ne()({ name: "VVirtualScroll", props: SV(), setup(e, t) {
  let { slots: n } = t;
  const a = pt("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: p } = ty(e, B(() => e.items));
  return $t(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    xt(() => {
      i.value = Sr(a.vnode.el, true), m(true);
    }), gt(m);
  }), le(() => {
    const m = p.value.map((b) => g(Qh, { key: b.key, renderless: e.renderless, "onUpdate:height": (h) => c(b.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: b.raw, index: b.index, ...h });
    } }));
    return e.renderless ? k(be, null, [k("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ge(f.value) } }, null), m, k("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ge(v.value) } }, null)]) : k("div", { ref: i, class: ae(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: he([l.value, e.style]) }, [k("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ge(f.value), paddingBottom: ge(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function Uc(e, t) {
  const n = se(false);
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
        const s = de(n, () => {
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
function Yc(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? Ia(s) : [];
  }
  function o(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const v = t[d], p = c[d];
      (v.type === "list" || (u === "forward" ? p.at(-1) === r.target : p.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && nt(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const p = u === "forward";
        c[f].at(p ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const v = u === "forward" ? 1 : -1;
    for (let p = s + v; p >= 0 && p < t.length; p += v) {
      const m = t[p];
      if (r[p].length > 0 || m.type === "list" && nt(m.displayItemsCount) > 0) return p;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const wV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function ps(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const wl = j({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function kV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? wV, o = (n == null ? void 0 : n.filterKeys) ? lt(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = lt(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let p = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const h = o || Object.keys(c);
        p = h.length === i;
        for (const x of h) {
          const _ = yt(c, x), I = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[x];
          if (v = I ? I(_, t, u) : l(_, t, u), v !== -1 && v !== false) I ? d[x] = ps(v, t) : f[x] = ps(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = ps(v, t));
      const m = Object.keys(f).length, b = Object.keys(d).length;
      if (!m && !b || (n == null ? void 0 : n.filterMode) === "union" && b !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (b !== i || !m && i > 0 && !p)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function kl(e, t, n, a) {
  const l = se([]), o = se(/* @__PURE__ */ new Map()), i = V(() => (a == null ? void 0 : a.transform) ? _t(t).map((s) => [s, a.transform(s)]) : _t(t));
  ut(() => {
    const s = typeof n == "function" ? n() : _t(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = kV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ..._t(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = _t(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((p) => {
      let { index: m, matches: b } = p;
      const h = d[m];
      f.push(h), v.set(h.value, b);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function Gc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [k("span", { class: ae(`${e}__unmask`) }, [t.slice(o, a[0])]), k("span", { class: ae(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(k("span", { class: ae(`${e}__unmask`) }, [t.slice(a[1])])), k(be, null, [i]);
  });
}
const xV = j({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Kc(e, t) {
  const n = Et(), a = V(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => nt(t)), ariaControls: B(() => a.value) };
}
const qc = j({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...xV(), ...Fh({ itemChildren: false }) }, "Select"), CV = j({ search: String, ...wl({ filterKeys: ["title"] }), ...qc(), ...Re(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ga({ transition: { component: Cr } }) }, "VSelect"), Xc = ne()({ name: "VSelect", props: CV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = K(), o = K(), i = K(), r = K(), s = K(), { items: u, transformIn: c, transformOut: d } = Fc(e), f = Ce(e, "search", ""), { filteredItems: v, getMatches: p } = kl(e, u, () => f.value), m = Ce(e, "modelValue", [], (ye) => c(ye === null ? [null] : lt(ye)), (ye) => {
    const $ = d(ye);
    return e.multiple ? $ : $[0] ?? null;
  }), b = V(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = no(e), x = jc(e), _ = V(() => m.value.map((ye) => ye.value)), I = se(false), S = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: y } = di(e);
  let C = "", w = 0, A;
  const P = V(() => {
    const ye = f.value ? v.value : u.value;
    return e.hideSelected ? ye.filter(($) => !m.value.some((N) => (e.valueComparator || Dt)(N, $))) : ye;
  }), E = V(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = Ce(e, "menu"), M = V({ get: () => D.value, set: (ye) => {
    var _a3;
    D.value && !ye && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ye && E.value || (D.value = ye);
  } }), { menuId: T, ariaExpanded: L, ariaControls: Y } = Kc(e, M), H = V(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), G = K(), O = Uc(G, l), { onTabKeydown: F } = Yc({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: G, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function J(ye) {
    e.openOnClear && (M.value = true);
  }
  function z() {
    E.value || (M.value = !M.value);
  }
  function R(ye) {
    var _a3;
    ye.key === "Tab" && F(ye), ((_a3 = G.value) == null ? void 0 : _a3.$el.contains(ye.target)) && Wl(ye) && U(ye);
  }
  function U(ye) {
    var _a3, _b2, _c2;
    if (!ye.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ye.key) && ye.preventDefault(), ["Enter", "ArrowDown", " "].includes(ye.key) && (M.value = true), ["Escape", "Tab"].includes(ye.key) && (M.value = false), e.clearable && ye.key === "Backspace") {
      ye.preventDefault(), m.value = [], J();
      return;
    }
    ye.key === "Home" ? (_a3 = G.value) == null ? void 0 : _a3.focus("first") : ye.key === "End" && ((_b2 = G.value) == null ? void 0 : _b2.focus("last"));
    const $ = 1e3;
    if (!Wl(ye)) return;
    const N = performance.now();
    N - A > $ && (C = "", w = 0), C += ye.key.toLowerCase(), A = N;
    const ee = P.value;
    function ce() {
      let X = ie();
      return X || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), w++, X = ie(), X) || (w = 0, X = ie(), X) ? X : (C = ye.key.toLowerCase(), ie());
    }
    function ie() {
      for (let X = w; X < ee.length; X++) {
        const oe = ee[X];
        if (oe.title.toLowerCase().startsWith(C)) return [oe, X];
      }
    }
    const ue = ce();
    if (!ue) return;
    const [we, fe] = ue;
    w = fe, (_c2 = G.value) == null ? void 0 : _c2.focus(fe), e.multiple || (m.value = [we]);
  }
  function re(ye) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ye.props.disabled) if (e.multiple) {
      const N = m.value.findIndex((ce) => (e.valueComparator || Dt)(ce.value, ye.value)), ee = $ ?? !~N;
      if (~N) {
        const ce = ee ? [...m.value, ye] : [...m.value];
        ce.splice(N, 1), m.value = ce;
      } else ee && (m.value = [...m.value, ye]);
    } else {
      const N = $ !== false;
      m.value = N ? [ye] : [], De(() => {
        M.value = false;
      });
    }
  }
  function ke(ye) {
    var _a3;
    const $ = ye.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains($)) || (M.value = false);
  }
  function q() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function ve() {
    var _a3;
    f.value = "", I.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Ae(ye) {
    I.value = true;
  }
  function Ve(ye) {
    if (ye == null) m.value = [];
    else if (zl(l.value, ":autofill") || zl(l.value, ":-webkit-autofill")) {
      const $ = u.value.find((N) => N.title === ye);
      $ && re($);
    } else l.value && (l.value.value = "");
  }
  return de(M, () => {
    if (!e.hideSelected && M.value && m.value.length) {
      const ye = P.value.findIndex(($) => m.value.some((N) => (e.valueComparator || Dt)(N.value, $.value)));
      Je && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ye >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ye));
      });
    }
  }), de(u, (ye, $) => {
    M.value || I.value && e.hideNoData && !$.length && ye.length && (M.value = true);
  }), le(() => {
    const ye = !!(e.chips || n.chip), $ = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), N = m.value.length > 0, ee = Un.filterProps(e), ce = N || !I.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, ie = { search: f, filteredItems: v.value };
    return g(Un, Z({ ref: l }, ee, { modelValue: m.value.map((ue) => ue.props.title).join(", "), name: void 0, "onUpdate:modelValue": Ve, focused: I.value, "onUpdate:focused": (ue) => I.value = ue, validationValue: m.externalValue, counterValue: b.value, dirty: N, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: ce, "onClick:clear": J, "onMousedown:control": z, onBlur: ke, onKeydown: U, "aria-expanded": L.value, "aria-controls": Y.value }), { ...n, default: (ue) => {
      let { id: we } = ue;
      return k(be, null, [k("select", { hidden: true, multiple: e.multiple, name: x.fieldName.value }, [u.value.map((fe) => k("option", { key: fe.value, value: fe.value, selected: _.value.includes(fe.value) }, null))]), g(Kl, Z({ id: T.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (fe) => M.value = fe, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: q, onAfterLeave: ve }, H.value), { default: () => [g($a, { onFocusin: Ae, onKeydown: R }, { default: () => [n["menu-header"] && k("header", { ref: i }, [n["menu-header"](ie)]), $ && g(Gl, Z({ key: "select-list", ref: G, selected: _.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${we.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, O, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(kn, { key: "no-data", title: a(e.noDataText) }, null)), g(Dr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (fe) => {
          var _a4, _b3, _c3;
          let { item: X, index: oe, itemRef: _e } = fe;
          const Q = rk(X.props), me = Z(X.props, { ref: _e, key: X.value, onClick: () => re(X, null), "aria-posinset": oe + 1, "aria-setsize": P.value.length });
          return X.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: X.raw, index: oe })) ?? g(fn, Z(X.props, { key: `divider-${oe}` }), null) : X.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: X.raw, index: oe })) ?? g(ao, Z(X.props, { key: `subheader-${oe}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: X, index: oe, props: me })) ?? g(kn, Z(me, { role: "option" }), { prepend: (W) => {
            let { isSelected: te } = W;
            return k(be, null, [e.multiple && !e.hideSelected ? g(Dn, { key: X.value, modelValue: te, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Se) => Se.preventDefault() }, null) : void 0, Q.prependAvatar && g(mn, { image: Q.prependAvatar }, null), Q.prependIcon && g(Ge, { icon: Q.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Gc("v-select", X.title, (_a5 = p(X)) == null ? void 0 : _a5.title) : X.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && k("footer", { ref: r }, [n["menu-footer"](ie)])] })] }), m.value.map((fe, X) => {
        function oe(W) {
          W.stopPropagation(), W.preventDefault(), re(fe, false);
        }
        const _e = Z(da.filterProps(fe.props), { "onClick:close": oe, onKeydown(W) {
          W.key !== "Enter" && W.key !== " " || (W.preventDefault(), W.stopPropagation(), oe(W));
        }, onMousedown(W) {
          W.preventDefault(), W.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Q = ye ? !!n.chip : !!n.selection, me = Q ? pr(ye ? n.chip({ item: fe, index: X, props: _e }) : n.selection({ item: fe, index: X })) : void 0;
        if (!(Q && !me)) return k("div", { key: fe.value, class: "v-select__selection" }, [ye ? n.chip ? g(Be, { key: "chip-defaults", defaults: { VChip: { closable: S.value, size: "small", text: fe.title } } }, { default: () => [me] }) : g(da, Z({ key: "chip", closable: S.value, size: "small", text: fe.title, disabled: fe.props.disabled }, _e), null) : me ?? k("span", { class: "v-select__selection-text" }, [fe.title, e.multiple && X < m.value.length - 1 && k("span", { class: "v-select__selection-comma" }, [je(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ue = arguments.length, we = new Array(ue), fe = 0; fe < ue; fe++) we[fe] = arguments[fe];
      return k(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...we), e.menuIcon ? g(Ge, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && g(y, { key: "append-icon", name: "appendInner", color: we[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: I, menu: M, search: f, filteredItems: v, select: re }, l);
} }), VV = j({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...qc(), ...Re(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), _V = ne()({ name: "VAutocomplete", props: VV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = K(), o = se(false), i = se(true), r = se(false), s = K(), u = K(), c = se(-1), d = se(null), { items: f, transformIn: v, transformOut: p } = Fc(e), { textColorClasses: m, textColorStyles: b } = Mt(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), x = Ce(e, "search", ""), _ = Ce(e, "modelValue", [], (X) => v(X === null ? [null] : lt(X)), (X) => {
    const oe = p(X);
    return e.multiple ? oe : oe[0] ?? null;
  }), I = V(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : _.value.length), S = no(e), { filteredItems: y, getMatches: C } = kl(e, f, () => d.value ?? (i.value ? "" : x.value)), w = V(() => e.hideSelected && d.value === null ? y.value.filter((X) => !_.value.some((oe) => oe.value === X.value)) : y.value), A = B(() => e.closableChips && !S.isReadonly.value && !S.isDisabled.value), P = V(() => !!(e.chips || n.chip)), E = V(() => P.value || !!n.selection), D = V(() => _.value.map((X) => X.props.value)), M = V(() => w.value.find((X) => X.type === "item" && !X.props.disabled)), T = V(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && x.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && w.value.length > 0 && !i.value && !r.value;
  }), L = V(() => e.hideNoData && !w.value.length || S.isReadonly.value || S.isDisabled.value), Y = Ce(e, "menu"), H = V({ get: () => Y.value, set: (X) => {
    var _a3;
    Y.value && !X && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || X && L.value || (Y.value = X);
  } }), { menuId: G, ariaExpanded: O, ariaControls: F } = Kc(e, H), J = K(), z = K(), R = K(), U = Uc(J, l), { onTabKeydown: re } = Yc({ groups: [{ type: "element", contentRef: z }, { type: "list", contentRef: J, displayItemsCount: () => w.value.length }, { type: "element", contentRef: R }], onLeave: () => {
    var _a3;
    H.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function ke(X) {
    e.openOnClear && (H.value = true), x.value = "";
  }
  function q() {
    L.value || (H.value = true);
  }
  function ve(X) {
    L.value || (o.value && (X.preventDefault(), X.stopPropagation()), H.value = !H.value);
  }
  function Ae(X) {
    var _a3, _b2;
    X.key === "Tab" && re(X), ((_a3 = J.value) == null ? void 0 : _a3.$el.contains(X.target)) && (Wl(X) || X.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function Ve(X) {
    var _a3, _b2, _c2, _d2, _e2;
    if (S.isReadonly.value) return;
    const oe = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, _e = _.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (H.value = true), ["Escape"].includes(X.key) && (H.value = false), T.value && ["Enter", "Tab"].includes(X.key) && M.value && !_.value.some((Q) => {
      let { value: me } = Q;
      return me === M.value.value;
    }) && fe(M.value), X.key === "ArrowDown" && T.value && ((_b2 = J.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && E.value && _.value.length > 0 && !x.value) return fe(_.value[0], false);
      if (~c.value) {
        X.preventDefault();
        const Q = c.value;
        fe(_.value[c.value], false), c.value = Q >= _e - 1 ? _e - 2 : Q;
      } else X.key === "Backspace" && !x.value && (c.value = _e - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (c.value < 0 && oe && oe > 0) return;
      const Q = c.value > -1 ? c.value - 1 : _e - 1;
      if (_.value[Q]) c.value = Q;
      else {
        const me = ((_c2 = x.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(me, me);
      }
    } else if (X.key === "ArrowRight") {
      if (c.value < 0) return;
      const Q = c.value + 1;
      _.value[Q] ? c.value = Q : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && Wl(X) && (c.value = -1);
  }
  function ye(X) {
    if (zl(l.value, ":autofill") || zl(l.value, ":-webkit-autofill")) {
      const oe = f.value.find((_e) => _e.title === X.target.value);
      oe && fe(oe);
    }
  }
  function $() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function N() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function ee(X) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function ce(X) {
    r.value = false;
  }
  function ie(X) {
    (X == null || X === "" && !e.multiple && !E.value) && (_.value = []);
  }
  function ue(X) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (o.value = true);
  }
  const we = se(false);
  function fe(X) {
    let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const _e = _.value.findIndex((me) => (e.valueComparator || Dt)(me.value, X.value)), Q = oe ?? !~_e;
      if (~_e) {
        const me = Q ? [..._.value, X] : [..._.value];
        me.splice(_e, 1), _.value = me;
      } else Q && (_.value = [..._.value, X]);
      e.clearOnSelect && (x.value = "");
    } else {
      const _e = oe !== false;
      _.value = _e ? [X] : [], d.value = i.value ? "" : x.value ?? "", x.value = _e && !E.value ? X.title : "", De(() => {
        H.value = false, i.value = true;
      });
    }
  }
  return de(o, (X, oe) => {
    var _a3;
    X !== oe && (X ? (we.value = true, x.value = e.multiple || E.value ? "" : String(((_a3 = _.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, De(() => we.value = false)) : (!e.multiple && x.value == null && (_.value = []), H.value = false, !i.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
  }), de(x, (X) => {
    !o.value || we.value || (X && (H.value = true), i.value = !X);
  }), de(H, (X) => {
    if (!e.hideSelected && X && _.value.length && i.value) {
      const oe = w.value.findIndex((_e) => _.value.some((Q) => _e.value === Q.value));
      Je && window.requestAnimationFrame(() => {
        var _a3;
        oe >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(oe));
      });
    }
    X && (d.value = null);
  }), de(f, (X, oe) => {
    H.value || o.value && !oe.length && X.length && (H.value = true);
  }), le(() => {
    const X = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), oe = _.value.length > 0, _e = Un.filterProps(e), Q = { search: x, filteredItems: y.value };
    return g(Un, Z({ ref: l }, _e, { modelValue: x.value, "onUpdate:modelValue": [(me) => x.value = me, ie], focused: o.value, "onUpdate:focused": (me) => o.value = me, validationValue: _.externalValue, counterValue: I.value, dirty: oe, onChange: ye, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": H.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: S.isReadonly.value, placeholder: oe ? void 0 : e.placeholder, "onClick:clear": ke, "onMousedown:control": q, onKeydown: Ve, onBlur: ue, "aria-expanded": O.value, "aria-controls": F.value }), { ...n, default: (me) => {
      let { id: W } = me;
      return k(be, null, [g(Kl, Z({ id: G.value, ref: s, modelValue: H.value, "onUpdate:modelValue": (te) => H.value = te, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: $, onAfterLeave: N }, e.menuProps), { default: () => [g($a, { onFocusin: ee, onKeydown: Ae }, { default: () => [n["menu-header"] && k("header", { ref: z }, [n["menu-header"](Q)]), X && g(Gl, Z({ key: "autocomplete-list", ref: J, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (te) => te.preventDefault(), onFocusout: ce, tabindex: "-1", selectable: !!w.value.length, "aria-live": "polite", "aria-labelledby": `${W.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, U, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !w.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(kn, { key: "no-data", title: a(e.noDataText) }, null)), g(Dr, { ref: u, renderless: true, items: w.value, itemKey: "value" }, { default: (te) => {
          var _a4, _b3, _c3;
          let { item: Se, index: Pe, itemRef: Me } = te;
          const $e = Z(Se.props, { ref: Me, key: Se.value, active: T.value && Se === M.value ? true : void 0, onClick: () => fe(Se, null), "aria-posinset": Pe + 1, "aria-setsize": w.value.length });
          return Se.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Se.raw, index: Pe })) ?? g(fn, Z(Se.props, { key: `divider-${Pe}` }), null) : Se.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Se.raw, index: Pe })) ?? g(ao, Z(Se.props, { key: `subheader-${Pe}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Se, index: Pe, props: $e })) ?? g(kn, Z($e, { role: "option" }), { prepend: (Fe) => {
            let { isSelected: qe } = Fe;
            return k(be, null, [e.multiple && !e.hideSelected ? g(Dn, { key: Se.value, modelValue: qe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Rt) => Rt.preventDefault() }, null) : void 0, Se.props.prependAvatar && g(mn, { image: Se.props.prependAvatar }, null), Se.props.prependIcon && g(Ge, { icon: Se.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Se.title : Gc("v-autocomplete", Se.title, (_a5 = C(Se)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && k("footer", { ref: R }, [n["menu-footer"](Q)])] })] }), _.value.map((te, Se) => {
        function Pe(qe) {
          qe.stopPropagation(), qe.preventDefault(), fe(te, false);
        }
        const Me = Z(da.filterProps(te.props), { "onClick:close": Pe, onKeydown(qe) {
          qe.key !== "Enter" && qe.key !== " " || (qe.preventDefault(), qe.stopPropagation(), Pe(qe));
        }, onMousedown(qe) {
          qe.preventDefault(), qe.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), $e = P.value ? !!n.chip : !!n.selection, Fe = $e ? pr(P.value ? n.chip({ item: te, index: Se, props: Me }) : n.selection({ item: te, index: Se })) : void 0;
        if (!($e && !Fe)) return k("div", { key: te.value, class: ae(["v-autocomplete__selection", Se === c.value && ["v-autocomplete__selection--selected", m.value]]), style: he(Se === c.value ? b.value : {}) }, [P.value ? n.chip ? g(Be, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: te.title } } }, { default: () => [Fe] }) : g(da, Z({ key: "chip", closable: A.value, size: "small", text: te.title, disabled: te.props.disabled }, Me), null) : Fe ?? k("span", { class: "v-autocomplete__selection-text" }, [te.title, e.multiple && Se < _.value.length - 1 && k("span", { class: "v-autocomplete__selection-comma" }, [je(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var me = arguments.length, W = new Array(me), te = 0; te < me; te++) W[te] = arguments[te];
      return k(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...W), e.menuIcon ? g(Ge, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ve, onClick: br, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(h, { key: "append-icon", name: "appendInner", color: W[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: H, search: x, filteredItems: y, select: fe }, l);
} }), IV = j({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ie, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...xe(), ...qn({ location: "top end" }), ...ot(), ...Ee(), ...Ue(), ...ga({ transition: "scale-rotate-transition" }), ...St() }, "VBadge"), ny = ne()({ name: "VBadge", inheritAttrs: false, props: IV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Xe(() => e.color), { roundedClasses: l } = ct(e), { t: o } = Qe(), { textColorClasses: i, textColorStyles: r } = Mt(() => e.textColor), { themeClasses: s } = xr(), { locationStyles: u } = Ra(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = wt(e);
  return le(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, p] = Os(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return g(e.tag, Z({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, p, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [k("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), g(Kt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [at(k("span", Z({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? g(Ge, { icon: e.icon }, null) : f]), [[Mn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), PV = j({ color: String, density: String, ...xe() }, "VBannerActions"), ay = ne()({ name: "VBannerActions", props: PV(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), le(() => {
    var _a3;
    return k("div", { class: ae(["v-banner-actions", e.class]), style: he(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), ly = ma("v-banner-text"), AV = j({ avatar: String, bgColor: String, color: String, icon: Ie, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...zt(), ...xe(), ...vt(), ...St(), ...ml({ mobile: null }), ...kt(), ...qn(), ...Ql(), ...ot(), ...Ee(), ...Ue() }, "VBanner"), TV = ne()({ name: "VBanner", props: AV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { borderClasses: o } = Zt(e), { densityClasses: i } = Lt(e), { displayClasses: r, mobile: s } = gn(e), { dimensionStyles: u } = wt(e), { elevationClasses: c } = It(e), { locationStyles: d } = Ra(e), { positionClasses: f } = eo(e), { roundedClasses: v } = ct(e), { themeClasses: p } = Ke(e), m = B(() => e.color), b = B(() => e.density);
  ft({ VBannerActions: { color: m, density: b } }), le(() => {
    const h = !!(e.text || n.text), x = !!(e.avatar || e.icon), _ = !!(x || n.prepend);
    return g(e.tag, { class: ae(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, p.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: he([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [_ && k("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? g(Be, { key: "prepend-defaults", disabled: !x, defaults: { VAvatar: { color: m.value, density: b.value, icon: e.icon, image: e.avatar } } }, n.prepend) : g(mn, { key: "prepend-avatar", color: m.value, density: b.value, icon: e.icon, image: e.avatar }, null)]), k("div", { class: "v-banner__content" }, [h && g(ly, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(ay, { key: "actions" }, n.actions)];
    } });
  });
} }), DV = j({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...zt(), ...xe(), ...vt(), ...kt(), ...ot(), ...gl({ name: "bottom-navigation" }), ...Ee({ tag: "header" }), ...bl({ selectedClass: "v-btn--selected" }), ...Ue() }, "VBottomNavigation"), MV = ne()({ name: "VBottomNavigation", props: DV(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = xr(), { borderClasses: l } = Zt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = ct(e), { ssrBootStyles: c } = yl(), d = V(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ce(e, "active", e.active), { layoutItemStyles: v } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Oa(e, Ac), ft({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), le(() => g(e.tag, { class: ae(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: he([i.value, v.value, { height: ge(d.value) }, c.value, e.style]) }, { default: () => [n.default && k("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), oy = j({ fullscreen: Boolean, scrollable: Boolean, ...Re(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: Cr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), ou = ne()({ name: "VDialog", props: oy(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { scopeId: o } = Sl(), i = K();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return de(l, async (u) => {
    var _a3;
    u || (await De(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), le(() => {
    const u = jn.filterProps(e), c = Z({ "aria-haspopup": "dialog" }, e.activatorProps), d = Z({ tabindex: -1 }, e.contentProps);
    return g(jn, Z({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), p = 0; p < f; p++) v[p] = arguments[p];
      return g(Be, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), Pt({}, i);
} }), EV = j({ inset: Boolean, ...oy({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), BV = ne()({ name: "VBottomSheet", props: EV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue");
  return le(() => {
    const l = ou.filterProps(e);
    return g(ou, Z(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), $V = j({ divider: [Number, String], ...xe() }, "VBreadcrumbsDivider"), iy = ne()({ name: "VBreadcrumbsDivider", props: $V(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return k("li", { "aria-hidden": "true", class: ae(["v-breadcrumbs-divider", e.class]), style: he(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), FV = j({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...xe(), ...tn(St(), ["width", "maxWidth"]), ...ci(), ...Ee({ tag: "li" }) }, "VBreadcrumbsItem"), ry = ne()({ name: "VBreadcrumbsItem", props: FV(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = V(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Mt(() => o.value ? e.activeColor : e.color);
  return le(() => g(e.tag, { class: ae(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: he([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? k("a", Z({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), LV = j({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ie, items: { type: Array, default: () => [] }, ...xe(), ...vt(), ...ot(), ...Ee({ tag: "ul" }) }, "VBreadcrumbs"), RV = ne()({ name: "VBreadcrumbs", props: LV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.bgColor), { densityClasses: o } = Lt(e), { roundedClasses: i } = ct(e);
  ft({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = V(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return le(() => {
    const s = !!(n.prepend || e.icon);
    return g(e.tag, { class: ae(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: he([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && k("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? g(Be, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : g(Ge, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return k(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? g(ry, Z({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && g(iy, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), OV = j({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...xe(), ...kt(), ...fh(), ...ot(), ...Ee({ tag: "button" }), ...Ue(), ...yn({ variant: "flat" }) }, "VIconBtn"), sy = ne()({ name: "VIconBtn", props: OV(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "active"), { themeClasses: o } = Ke(e), { borderClasses: i } = Zt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = ct(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ya(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return le(() => {
    const p = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, x = e.height ?? h, _ = e.width ?? h, { iconSize: I } = vh(e, () => new Map(e.iconSizes).get(m)), S = { icon: p, size: I.value, color: e.iconColor, opacity: e.opacity };
    return g(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ae([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: he([{ "--v-icon-btn-rotate": ge(e.rotate, "deg"), "--v-icon-btn-height": ge(x), "--v-icon-btn-width": ge(_) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ha(!e.hideOverlay, "v-icon-btn"), k("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && p ? g(Ge, Z({ key: "content-icon" }, S), null) : g(Be, { key: "content-defaults", disabled: !p, defaults: { VIcon: { ...S } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Oe(e.text);
      } })]), !!e.loading && k("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(Ea, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: I.value }, null)])];
    } });
  }), {};
} });
function NV(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const uy = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, cy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, HV = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zV = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], WV = 28, jV = 31, Zc = 12, dy = 1, Mr = 1, Pa = 7, gv = 60, UV = 59, YV = 1440, GV = 24, KV = 23, qV = 0, XV = 1e4, ZV = 100, JV = 100, QV = 1e4;
function e_(e, t, n) {
  const a = nn(e);
  return yy(a, t[0], hy), _n(a), n && il(a, n, a.hasTime), a;
}
function t_(e, t, n) {
  const a = nn(e);
  return yy(a, t[t.length - 1]), _n(a), n && il(a, n, a.hasTime), a;
}
function fy(e) {
  const t = nn(e);
  return t.day = Mr, Er(t), _n(t), t;
}
function vy(e) {
  const t = nn(e);
  return t.day = Qc(t.year, t.month), Er(t), _n(t), t;
}
function Tl(e) {
  return isFinite(parseInt(e));
}
function n_(e) {
  return typeof e == "number" && isFinite(e) || !!cy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function hv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = cy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Rl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!uy.exec(e) || e instanceof Date;
}
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = Jc(e);
    return n && il(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = uy.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Er(l), _n(l), n && il(l, n, l.hasTime), l;
}
function Jc(e) {
  return _n({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * XV + e.month * ZV + e.day;
}
function iu(e) {
  return e.hour * JV + e.minute;
}
function La(e) {
  return Vt(e) * QV + iu(e);
}
function il(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = iu(t), l = iu(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function yv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function bv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = KV, e.minute = UV, e.time = gy(e))), e;
}
function my(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, ru(e, t), _n(e), n && il(e, n, true), e;
}
function Er(e) {
  return e.weekday = a_(e), e;
}
function _n(e) {
  return e.time = gy(e), e.date = l_(e), e;
}
function a_(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Zc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Qc(e, t) {
  return NV(e) ? zV[t] : HV[t];
}
function nn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function Qa(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function l_(e) {
  let t = `${Qa(e.year, 4)}-${Qa(e.month, 2)}`;
  return e.hasDay && (t += `-${Qa(e.day, 2)}`), t;
}
function gy(e) {
  return e.hasTime ? `${Qa(e.hour, 2)}:${Qa(e.minute, 2)}` : "";
}
function ru(e, t) {
  for (e.minute += t; e.minute >= gv; ) e.minute -= gv, e.hour++, e.hour >= GV && (Aa(e), e.hour = qV);
  return e;
}
function Aa(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Pa, e.day > WV && e.day > Qc(e.year, e.month) && (e.day = Mr, e.month++, e.month > Zc && (e.month = dy, e.year++)), e;
}
function hy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Pa, e.day < Mr && (e.month--, e.month < dy && (e.year--, e.month = Zc), e.day = Qc(e.year, e.month)), e;
}
function Ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Aa, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function o_(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function yy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function i_(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Pa; a++) {
    let l = 1;
    for (let o = 1; o < Pa; o++) {
      const i = (a + o) % Pa;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function su(e) {
  const t = `${Qa(e.hour, 2)}:${Qa(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function ar(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Vt(t), r = [];
  let s = nn(e), u = 0, c = u === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Vt(s), c = c || u === i, a[s.weekday] === 0) {
      s = Aa(s);
      continue;
    }
    const d = nn(s);
    _n(d), il(d, n), r.push(d), s = Ya(s, Aa, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function r_(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = nn(e);
    o.push(my(s, r, l));
  }
  return o;
}
function Vo(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(su(a));
    } catch {
      return "";
    }
  };
}
function s_(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Pa || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Pa) return false;
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
function u_(e) {
  const t = Tt({ now: oa("0000-00-00 00:00", true), today: oa("0000-00-00", true) }), n = V(() => e.now && Rl(e.now) ? oa(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Jc(/* @__PURE__ */ new Date());
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
  return de(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Br = j({ start: { type: [String, Number, Date], validate: Rl, default: () => Jc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Rl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: s_ }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Rl }, type: { type: String, default: "month" } }, "VCalendar-base");
function ed(e) {
  const { times: t, updateTimes: n } = u_({ now: e.now }), a = $g(e), l = vl(), o = V(() => e.type === "month" ? fy(oa(e.start, true)) : oa(e.start, true)), i = V(() => {
    const I = o.value, S = e.end && oa(e.end) || I, y = La(S) < La(I) ? I : S;
    return e.type === "month" ? vy(y) : y;
  }), r = V(() => Rl(e.modelValue) ? oa(e.modelValue, true) : o.value || t.today), s = V(() => {
    const I = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((y) => parseInt(y, 10)), S = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...I.toSorted().filter((y) => y >= S), ...I.toSorted().filter((y) => y < S)];
  }), u = V(() => {
    const I = r.value, S = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [I.weekday];
      case "4day":
        return [I.weekday, (I.weekday + 1) % 7, (I.weekday + 2) % 7, (I.weekday + 3) % 7];
      case "category":
        return Array.from({ length: S }, (y, C) => (I.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = V(() => i_(s.value)), d = V(() => ar(o.value, i.value, t.today, c.value)), f = V(() => e.dayFormat ? e.dayFormat : Vo(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = V(() => e.weekdayFormat ? e.weekdayFormat : Vo(a.current.value, (I, S) => ({ timeZone: "UTC", weekday: S ? "short" : "long" })));
  function p(I) {
    return Jg(I);
  }
  function m(I) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": I.present, "v-past": I.past, "v-future": I.future, "v-outside": S };
  }
  function b(I) {
    return l.getWeek(l.date(I.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(I) {
    return e_(I, s.value, t.today);
  }
  function x(I) {
    return t_(I, s.value, t.today);
  }
  function _(I) {
    return Vo(a.current.value, () => I);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: p, getRelativeClasses: m, getWeekNumber: b, getStartOfWeek: h, getEndOfWeek: x, getFormatter: _, updateTimes: n };
}
const by = j({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Tl }, intervalWidth: { type: [Number, String], default: 60, validate: Tl }, intervalMinutes: { type: [Number, String], default: 60, validate: Tl }, firstInterval: { type: [Number, String], default: 0, validate: Tl }, firstTime: { type: [Number, String, Object], validate: n_ }, intervalCount: { type: [Number, String], default: 24, validate: Tl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function py(e) {
  const t = ed(e), n = se(), a = V(() => parseInt(String(e.firstInterval || 0))), l = V(() => parseInt(String(e.intervalMinutes || 60))), o = V(() => parseInt(String(e.intervalCount || 24))), i = V(() => parseFloat(String(e.intervalHeight || 48))), r = V(() => hv(e.firstTime)), s = V(() => {
    const S = r.value;
    return S !== false && S >= 0 && S <= YV ? S : a.value * l.value;
  }), u = V(() => o.value * i.value), c = V(() => ar(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = V(() => {
    const S = c.value, y = s.value, C = l.value, w = o.value, A = t.times.now;
    return S.map((P) => r_(P, y, C, w, A));
  }), f = V(() => e.intervalFormat ? e.intervalFormat : Vo(t.locale.current.value, (S, y) => y ? S.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(S) {
    const y = d.value[0][0];
    return !(y.hour === S.hour && y.minute === S.minute);
  }
  function p(S) {
  }
  function m(S, y) {
    const C = nn(y), w = S.currentTarget.getBoundingClientRect(), A = s.value, P = S, E = S, D = P.changedTouches || P.touches, T = ((D && D[0] ? D[0].clientY : E.clientY) - w.top) / i.value, L = Math.floor(T * l.value), Y = A + L;
    return my(C, Y, t.times.now);
  }
  function b(S) {
    const y = nn(S);
    return y.timeToY = _, y.timeDelta = I, y.minutesToPixels = x, y.week = c.value, y.intervalRange = [s.value, s.value + o.value * l.value], y;
  }
  function h(S) {
    const y = _(S), C = n.value;
    return y === false || !C ? false : (C.scrollTop = y, true);
  }
  function x(S) {
    return S / l.value * i.value;
  }
  function _(S) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = y !== false;
    let A = I(S, typeof y != "boolean" ? y : void 0);
    return A === false || (A *= u.value, C ? A < 0 ? A = 0 : A > u.value && (A = u.value) : A < 0 ? A = A + u.value : A > u.value && (A = A - u.value)), A;
  }
  function I(S, y) {
    let C = hv(S);
    if (C === false) return false;
    const w = o.value * l.value;
    if (y && typeof S == "object" && "day" in S) {
      const P = Vt(S), E = Vt(y);
      C += (P - E) * w;
    }
    const A = s.value;
    return (C - A) / w;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: p, getTimestampAtEvent: m, getSlotScope: b, scrollToTime: h, minutesToPixels: x, timeToY: _, timeDelta: I };
}
function c_(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function d_(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Yo = { mounted: c_, unmounted: d_ }, go = Xt({ name: "VCalendarDaily", directives: { vResize: Yo }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Br(), ...by() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = K(0), o = K(), i = py(e);
  function r() {
    De(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return k("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const M = ge(e.intervalWidth);
    return k("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(M, T) {
    const L = dn(a, ":day", (Y) => ({ nativeEvent: Y, ...i.getSlotScope(M) }));
    return k("div", Z({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, L), [m(M), b(M), p(M, T)]);
  }
  function p(M, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: T })) ?? [];
  }
  function m(M) {
    const T = M.present ? e.color : void 0;
    return k("div", Z(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function b(M) {
    var _a3;
    return k("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const T = dn(a, ":date", (L) => ({ nativeEvent: L, ...M }));
    return g(sy, Z({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": br }, T), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function x() {
    return k("div", { class: "v-calendar-daily__body" }, [_()]);
  }
  function _() {
    return k("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [I()]);
  }
  function I() {
    return k("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ge(i.bodyHeight.value) } }, [S()]);
  }
  function S() {
    var _a3;
    return k("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? y()]);
  }
  function y() {
    return i.days.value.map((M, T) => {
      const L = dn(a, ":time", (Y) => ({ nativeEvent: Y, ...i.getSlotScope(i.getTimestampAtEvent(Y, M)) }));
      return k("div", Z({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, L), [w(T), C(M)]);
    });
  }
  function C(M) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(M))) ?? [];
  }
  function w(M) {
    return i.intervals.value[M].map(A);
  }
  function A(M) {
    var _a3;
    const T = ge(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
    return k("div", { class: "v-calendar-daily__day-interval", key: M.time, style: he([{ height: T }, L(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = ge(e.intervalWidth), T = dn(a, ":interval", (L) => ({ nativeEvent: L, ...i.getTimestampAtEvent(L, i.parsedStart.value) }));
    return k("div", Z({ class: "v-calendar-daily__intervals-body", style: { width: M } }, T), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const T = ge(e.intervalHeight), L = e.shortIntervals, G = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, L) : void 0;
    return k("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: T } }, [k("div", { class: "v-calendar-daily__interval-text" }, [G])]);
  }
  return xt(r), le(() => at(k("div", { class: ae(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), x()]), [[Yo, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function f_(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function Sy(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : f_(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const v_ = Xt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Br(), ...by() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = py(e), o = V(() => Sy(e.categories, e.categoryText));
  function i(b, h) {
    const x = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...b, category: x };
  }
  function r(b) {
    return k("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(b, i(b, h)))]);
  }
  function s(b, h) {
    var _a3, _b2;
    const x = typeof h.category == "object" ? h.category.categoryName : h.category, _ = dn(a, ":dayCategory", () => i(l.getSlotScope(b) || b, h.category));
    return k("div", Z({ class: "v-calendar-category__column-header" }, _), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(x), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(b) {
    return k("div", { class: "v-calendar-category__category" }, [b === null ? e.categoryForInvalid : b]);
  }
  function c() {
    const b = [];
    return l.days.value.forEach((h, x) => {
      const _ = new Array(o.value.length || 1);
      _.fill(h), b.push(..._.map((I, S) => d(I, x, S)));
    }), b;
  }
  function d(b, h, x) {
    const _ = o.value[x], I = dn(a, ":time", (S) => l.getSlotScope(l.getTimestampAtEvent(S, b)));
    return k("div", Z({ key: b.date + "-" + x, class: ["v-calendar-daily__day", l.getRelativeClasses(b)] }, I), [f(h, _), p(b, _)]);
  }
  function f(b, h) {
    return l.intervals.value[b].map((x) => v(x, h));
  }
  function v(b, h) {
    var _a3;
    const x = ge(e.intervalHeight), _ = e.intervalStyle || l.intervalStyleDefault;
    return k("div", { key: b.time, class: "v-calendar-daily__day-interval", style: he([{ height: x }, _({ ...b, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(b), h))]);
  }
  function p(b, h) {
    return k("div", { class: "v-calendar-category__columns" }, [m(b, h)]);
  }
  function m(b, h) {
    var _a3;
    const x = dn(a, ":timeCategory", (_) => i(l.getSlotScope(l.getTimestampAtEvent(_, b)), h));
    return k("div", Z({ class: "v-calendar-category__column" }, x), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(b), h))]);
  }
  return le(() => g(go, Z({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), pv = Xt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Tl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Br() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ed(e), o = xr(), i = V(() => parseInt(String(e.minWeeks))), r = V(() => {
    const S = i.value * l.parsedWeekdays.value.length, y = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return ar(y, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, S);
  }), s = V(() => {
    const S = l.times.today, y = l.getStartOfWeek(S), C = l.getEndOfWeek(S);
    return ar(y, C, S, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = V(() => e.monthFormat ? e.monthFormat : Vo(l.locale.current.value, (S, y) => ({ timeZone: "UTC", month: y ? "short" : "long" })));
  function c(S) {
    const y = Vt(S);
    return y < Vt(l.parsedStart.value) || y > Vt(l.parsedEnd.value);
  }
  function d() {
    return k("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const S = s.value.map(v);
    return e.showWeek && S.unshift(k("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), S;
  }
  function v(S, y) {
    const C = c(r.value[y]), w = S.present ? e.color : void 0;
    return k("div", Z(l.getColorProps({ text: w }), { key: S.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(S, C)], role: "columnheader" }), [l.weekdayFormatter.value(S, e.shortWeekdays)]);
  }
  function p() {
    const S = r.value, y = l.parsedWeekdays.value.length, C = [];
    for (let w = 0; w < S.length; w += y) C.push(m(S.slice(w, w + y), b(S[w])));
    return C;
  }
  function m(S, y) {
    const C = S.map((w, A) => x(w, A, S));
    return e.showWeek && C.unshift(h(y)), k("div", { key: S[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function b(S) {
    return l.getWeekNumber(S);
  }
  function h(S) {
    return k("div", { class: "v-calendar-weekly__weeknumber" }, [k("small", null, [String(S)])]);
  }
  function x(S, y, C) {
    var _a3;
    const w = c(S), A = dn(a, ":day", (P) => ({ nativeEvent: P, ...S }));
    return k("div", Z({ key: S.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(S, w)], role: "cell" }, A), [_(S), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: w, index: y, week: C, ...S })]);
  }
  function _(S) {
    var _a3;
    return k("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, S)) ?? I(S)]);
  }
  function I(S) {
    const y = S.day === 1 && e.showMonthOnFirst, C = dn(a, ":date", (w) => ({ nativeEvent: w, ...S }));
    return g(sy, Z({ active: S.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": br }, C), { default: () => [y ? u.value(S, e.shortMonths) + " " + l.dayFormatter.value(S, false) : l.dayFormatter.value(S, false)] });
  }
  return le(() => k("div", { class: ae(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (S) => S.preventDefault() }, [e.hideHeader ? void 0 : d(), p()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), m_ = 864e5;
function wy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function In(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function Sv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function ky(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function xy(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Cy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + m_, e.endTimestampIdentifier)];
}
function g_(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (In(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? ky(s.event) : xy(s.event);
      if (In(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function Vy(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = La(n), r = wy(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? ky(s.event) : xy(s.event);
      t.groups.length > 0 && !In(u, c, t.min, t.max, l) && (Sv(t.groups), t.reset());
      let d = g_(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), Sv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const wv = 100, h_ = (e, t, n) => {
  const a = Vy(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * wv / u.columnCount, u.width = wv / u.columnCount;
    }), s;
  };
}, Ii = 100, y_ = 5, b_ = 1.7, p_ = (e, t, n) => {
  const a = Vy(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = La(l), u = wy(o, s), c = __(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const p = I_(v, s), m = x_(p, f);
        if (m === false) {
          const b = C_(p, f);
          b && (p.parent = b, p.sibling = In(p.start, p.end, b.start, $i(b.start, n)), p.index = b.index + 1, b.children.push(p));
        } else {
          const [b] = kv(p, f, m - 1, m - 1), h = kv(p, f, m + 1, m + f.length, true);
          p.children = h, p.index = m, b && (p.parent = b, p.sibling = In(p.start, p.end, b.start, $i(b.start, n)), b.children.push(p));
          for (const x of h) x.parent === b && (x.parent = p), x.index - p.index <= 1 && p.sibling && In(p.start, $i(p.start, n), x.start, x.end) && (x.sibling = true);
        }
        f.push(p);
      }
      S_(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function S_(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = _y(n) + 1, i = l ? l.visual.left : 0, r = Ii - i, s = Math.min(y_, Ii / o), u = w_(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = V_(n, e, t) ? Ii - a.left : Math.min(Ii - a.left, d * b_);
  }
}
function w_(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function k_(e, t) {
  const n = [];
  for (const a of t) In(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function x_(e, t) {
  const n = k_(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function kv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && In(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function C_(e, t) {
  let n = null;
  for (const a of t) In(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function V_(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && In(e.start, $i(e.start, n), a.start, a.end)) return false;
  return true;
}
function __(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = Cy(a.event, t);
    let i = false;
    for (const r of n) if (In(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function I_(e, t) {
  const [n, a] = Cy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function _y(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = _y(n);
    a > t && (t = a);
  }
  return t;
}
function $i(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const Iy = { stack: p_, column: h_ };
function P_(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = oa(i, true), u = r ? oa(r, true) : s, c = yv(i) ? bv(s, l) : s, d = yv(r) ? bv(u, l) : u, f = Vt(c), v = La(c), p = Vt(d), m = c.hasTime ? 0 : 2359, b = La(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: p, endTimestampIdentifier: b, allDay: h, index: t, category: o };
}
function td(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function A_(e, t, n) {
  if (n) {
    const a = ru(nn(t), n[0]), l = ru(nn(t), n[1]), o = e.startTimestampIdentifier < La(l), i = e.endTimestampIdentifier > La(a);
    return o && i;
  }
  return td(e, Vt(t));
}
function T_(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function xv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && td(e, n);
}
function D_(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const M_ = 100, E_ = 95, B_ = j({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in Iy || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function $_(e, t, n) {
  const a = ed(e), l = V(() => !Array.isArray(e.events) || e.events.length === 0), o = V(() => e.type === "category"), i = V(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = V(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = V(() => e.events ? e.events.map((T, L) => P_(T, L, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), u = V(() => parseInt(String(e.eventOverlapThreshold || 0))), c = V(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = V(() => typeof e.eventName == "function" ? e.eventName : (T, L) => T.input[e.eventName] || ""), f = V(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Iy[e.eventOverlapMode]), v = V(() => a.effectiveWeekdays.value);
  function p(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const m = K([]);
  function b() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, L = h();
    for (const Y in L) {
      const { parent: H, events: G, more: O } = L[Y];
      if (!O) break;
      const F = H.getBoundingClientRect(), J = G.length - 1, z = G.map((U) => ({ event: U, bottom: U.getBoundingClientRect().bottom })).sort((U, re) => U.bottom - re.bottom);
      let R = 0;
      for (let U = 0; U <= J; U++) {
        const re = z[U].bottom;
        (U === J ? re > F.bottom : re + T > F.bottom) && (z[U].event.style.display = "none", R++);
      }
      R ? (O.style.display = "", O.innerHTML = a.locale.t(e.eventMoreText, R)) : O.style.display = "none";
    }
  }
  function h() {
    const T = {}, L = m.value;
    return !L || !L.length || L.forEach((Y) => {
      const H = Y.getAttribute("data-date");
      Y.parentElement && H && (H in T || (T[H] = { parent: Y.parentElement, more: null, events: [] }), Y.getAttribute("data-more") ? T[H].more = Y : (T[H].events.push(Y), Y.style.display = ""));
    }), T;
  }
  function x(T, L) {
    let { event: Y } = T;
    const H = e.eventHeight || 0, G = e.eventMarginBottom || 0, O = Vt(L), F = L.week, J = O === Y.startIdentifier;
    let z = O === Y.endIdentifier, R = E_;
    if (!o.value) for (let re = L.index + 1; re < F.length; re++) {
      const ke = Vt(F[re]);
      if (Y.endIdentifier >= ke) R += M_, z = z || ke === Y.endIdentifier;
      else {
        z = true;
        break;
      }
    }
    return I(Y, { eventParsed: Y, day: L, start: J, end: z, timed: false }, false, { class: ["v-event", { "v-event-start": J, "v-event-end": z }], style: { height: `${H}px`, width: `${R}%`, marginBottom: `${G}px` }, "data-date": L.date });
  }
  function _(T, L) {
    let { event: Y, left: H, width: G } = T;
    const O = L.timeDelta(Y.start, L), F = L.timeDelta(Y.end, L);
    if (F === false || O === false || F < 0 || O >= 1 || T_(Y, L)) return false;
    const J = Vt(L), z = Y.startIdentifier >= J, R = Y.endIdentifier > J, U = L.timeToY(Y.start, L), re = L.timeToY(Y.end, L), ke = Math.max(e.eventHeight || 0, re - U);
    return I(Y, { eventParsed: Y, day: L, start: z, end: R, timed: true }, true, { class: "v-event-timed", style: { top: `${U}px`, height: `${ke}px`, left: `${H}%`, width: `${G}%` } });
  }
  function I(T, L, Y, H) {
    const G = t.event, O = c.value(T.input), F = p(T.input), J = T.start.hour < 12 && T.end.hour >= 12, z = o_(T.start, T.end) <= u.value, R = (ve, Ae) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: ve.minute > 0 ? "numeric" : void 0 })(ve, true), U = () => R(T.start) + " - " + R(T.end), re = () => {
      const ve = d.value(T, Y);
      if (T.start.hasTime) if (Y) {
        const Ae = U(), Ve = z ? ", " : k("br", null, null);
        return k("span", { class: "v-event-summary" }, [k("strong", null, [ve]), Ve, Ae]);
      } else {
        const Ae = R(T.start);
        return k("span", { class: "v-event-summary" }, [k("strong", null, [Ae]), je(" "), ve]);
      }
      return k("span", { class: "v-event-summary" }, [ve]);
    }, ke = { ...L, event: T.input, outside: L.day.outside, singline: z, overlapsNoon: J, formatTime: R, timeSummary: U, eventSummary: re }, q = dn(n, ":event", (ve) => ({ ...ke, nativeEvent: ve }));
    return at(k("div", Z(a.getColorProps({ text: O, background: F }), q, H, { ref_for: true, ref: m }), [(G == null ? void 0 : G(ke)) ?? S(re)]), [[Ft, e.eventRipple ?? true]]);
  }
  function S(T) {
    return k("div", { class: "pl-1" }, [T()]);
  }
  function y(T) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return k("div", { style: { height: `${L}px` }, "data-date": T.date, ref_for: true, ref: m }, null);
  }
  function C(T) {
    const L = e.eventHeight || 0, Y = e.eventMarginBottom || 0, H = dn(n, ":more", (G) => ({ nativeEvent: G, ...T }));
    return at(k("div", Z({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${Y}px` }, ref_for: true, ref: m }, H), null), [[Ft, e.eventRipple ?? true]]);
  }
  function w() {
    const T = a.days.value, L = Vt(T[0]), Y = Vt(T[T.length - 1]);
    return s.value.filter((H) => D_(H, L, Y));
  }
  function A(T, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === T.category || typeof T.category == "string" && L === T.category || typeof T.category != "string" && L === null;
  }
  function P(T) {
    const L = Vt(T), Y = v.value[0];
    return s.value.filter((H) => xv(H, T, L, Y));
  }
  function E(T) {
    const L = Vt(T), Y = v.value[0];
    return s.value.filter((H) => H.allDay && (o.value ? td(H, L) : xv(H, T, L, Y)) && A(H, T.category));
  }
  function D(T) {
    return s.value.filter((L) => !L.allDay && A_(L, T, T.intervalRange) && A(L, T.category));
  }
  function M() {
    if (l.value) return { ...t };
    const T = f.value(s.value, v.value[0], u.value), L = (H) => !!H, Y = (H, G, O, F) => {
      const J = G(H), z = T(H, J, F, o.value);
      if (F) return z.map((U) => O(U, H)).filter(L);
      const R = [];
      return z.forEach((U, re) => {
        for (; R.length < U.column; ) R.push(y(H));
        const ke = O(U, H);
        ke && R.push(ke);
      }), R;
    };
    return { ...t, day: (H) => {
      let G = Y(H, P, x, false);
      if (G && G.length > 0 && e.eventMore && G.push(C(H)), t.day) {
        const O = t.day(H);
        O && (G = G ? G.concat(O) : O);
      }
      return G;
    }, "day-header": (H) => {
      let G = Y(H, E, x, false);
      if (t["day-header"]) {
        const O = t["day-header"](H);
        O && (G = G ? G.concat(O) : O);
      }
      return G;
    }, "day-body": (H) => {
      const G = Y(H, D, _, true);
      let O = [k("div", { class: "v-event-timed-container" }, [G])];
      if (t["day-body"]) {
        const F = t["day-body"](H);
        F && (O = O.concat(F));
      }
      return O;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: p, eventsRef: m, updateEventVisibility: b, getEventsMap: h, genDayEvent: x, genTimedEvent: _, genEvent: I, genName: S, genPlaceholder: y, genMore: C, getVisibleEvents: w, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const F_ = ne()({ name: "VCalendar", directives: { vResize: Yo }, props: { modelValue: { type: [String, Number, Date], validate: Rl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Br(), ...B_() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = K(), i = $_(e, n, a), r = K(null), s = K(null), u = V(() => parseInt(String(e.categoryDays)) || 1), c = V(() => Sy(e.categories, e.categoryText)), d = V(() => {
    const y = i.parsedValue.value;
    let C = null, w = e.maxDays, A = c.value, P = y, E = y;
    switch (e.type) {
      case "month":
        C = pv, P = fy(y), E = vy(y);
        break;
      case "week":
        C = go, P = i.getStartOfWeek(y), E = i.getEndOfWeek(y), w = 7;
        break;
      case "day":
        C = go, w = 1;
        break;
      case "4day":
        C = go, E = Ya(nn(E), Aa, 3), _n(E), w = 4;
        break;
      case "custom-weekly":
        C = pv, P = i.parsedStart.value || y, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = go, P = i.parsedStart.value || y, E = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = v_, E = Ya(nn(E), Aa, D), _n(E), w = D, A = S(A);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: w, categories: A };
  }), f = V(() => i.effectiveWeekdays.value), v = V(() => e.type === "category"), p = V(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = V(() => i.getFormatter({ timeZone: "UTC", month: "short" })), b = V(() => {
    const { start: y, end: C } = d.value, w = y.year !== C.year, A = w || y.month !== C.month;
    return w ? m.value(y, true) + " " + y.year + " - " + m.value(C, true) + " " + C.year : A ? m.value(y, true) + " - " + m.value(C, true) + " " + C.year : p.value(y, false) + " " + y.year;
  });
  function h() {
    const { start: y, end: C } = d.value;
    (!r.value || !s.value || y.date !== r.value.date || C.date !== s.value.date) && (r.value = y, s.value = C, l("change", { start: y, end: C }));
  }
  function x() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = nn(i.parsedValue.value), w = y > 0, A = w ? Aa : hy, P = w ? jV : Mr;
    let E = w ? y : -y;
    for (; --E >= 0; ) switch (e.type) {
      case "month":
        C.day = P, A(C);
        break;
      case "week":
        Ya(C, A, Pa);
        break;
      case "day":
        Ya(C, A, 1);
        break;
      case "4day":
        Ya(C, A, 4);
        break;
      case "category":
        Ya(C, A, u.value);
        break;
    }
    Er(C), _n(C), il(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", su(C)) : typeof e.modelValue == "number" ? l("update:modelValue", su(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function _() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(y);
  }
  function I() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(-y);
  }
  function S(y) {
    if (!i.noEvents.value) {
      const C = y.reduce((w, A, P) => (typeof A == "object" && A.categoryName ? w[A.categoryName] = { index: P, count: 0 } : typeof A == "string" && (w[A] = { index: P, count: 0 }), w), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let w = y.length;
        i.parsedEvents.value.forEach((A) => {
          let P = A.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: w++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const w in C) C[w].count === 0 && delete C[w];
      y = y.filter((w) => typeof w == "object" && w.categoryName ? C.hasOwnProperty(w.categoryName) : typeof w == "string" ? C.hasOwnProperty(w) : false);
    }
    return y;
  }
  return de(d, h), xt(() => {
    i.updateEventVisibility(), h();
  }), mr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), le(() => {
    const { start: y, end: C, maxDays: w, component: A, categories: P } = d.value;
    return at(g(A, Z({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: y.date, end: C.date, maxDays: w, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Yo, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: b, monthLongFormatter: p, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: x, next: _, prev: I, getCategoryList: S }, o);
} }), L_ = j({ ...xe(), ...Ee() }, "VCardActions"), Py = ne()({ name: "VCardActions", props: L_(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { slim: true, variant: "text" } }), le(() => g(e.tag, { class: ae(["v-card-actions", e.class]), style: he(e.style) }, n)), {};
} }), R_ = j({ opacity: [Number, String], ...xe(), ...Ee() }, "VCardSubtitle"), Ay = ne()({ name: "VCardSubtitle", props: R_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ae(["v-card-subtitle", e.class]), style: he([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Ty = ma("v-card-title"), O_ = j({ appendAvatar: String, appendIcon: Ie, prependAvatar: String, prependIcon: Ie, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...xe(), ...vt(), ...Ee() }, "VCardItem"), Dy = ne()({ name: "VCardItem", props: O_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return g(e.tag, { class: ae(["v-card-item", e.class]), style: he(e.style) }, { default: () => {
      var _a3;
      return [l && k("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? g(Be, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : k(be, null, [e.prependAvatar && g(mn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), k("div", { class: "v-card-item__content" }, [r && g(Ty, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Oe(e.title)];
      } }), s && g(Ay, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Oe(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && k("div", { key: "append", class: "v-card-item__append" }, [n.append ? g(Be, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : k(be, null, [e.appendIcon && g(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(mn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), N_ = j({ opacity: [Number, String], ...xe(), ...Ee() }, "VCardText"), My = ne()({ name: "VCardText", props: N_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ae(["v-card-text", e.class]), style: he([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), H_ = j({ appendAvatar: String, appendIcon: Ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...zt(), ...xe(), ...vt(), ...St(), ...kt(), ...Ir(), ...qn(), ...Ql(), ...ot(), ...ci(), ...Ee(), ...Ue(), ...yn({ variant: "elevated" }) }, "VCard"), z_ = ne()({ name: "VCard", directives: { vRipple: Ft }, props: H_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = Zt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ya(e), { densityClasses: u } = Lt(e), { dimensionStyles: c } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: v } = Ra(e), { positionClasses: p } = eo(e), { roundedClasses: m } = ct(e), b = ui(e, n), h = se(void 0);
  return de(() => e.loading, (x, _) => {
    h.value = !x && typeof _ == "string" ? _ : typeof x == "boolean" ? void 0 : x;
  }, { immediate: true }), le(() => {
    const x = e.link !== false && b.isLink.value, _ = !e.disabled && e.link !== false && (e.link || b.isClickable.value), I = x ? "a" : e.tag, S = !!(a.title || e.title != null), y = !!(a.subtitle || e.subtitle != null), C = S || y, w = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || A || w, D = !!(a.text || e.text != null);
    return at(g(I, Z(b.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _ }, l.value, o.value, i.value, u.value, d.value, f.value, p.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ge(e.height) }, e.style], onClick: _ && b.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && k("div", { key: "image", class: "v-card__image" }, [a.image ? g(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : g(ca, { key: "image-img", cover: true, src: e.image }, null)]), g(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && g(Dy, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && g(My, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && g(Py, null, { default: a.actions }), ha(_, "v-card")];
    } }), [[Ft, _ && e.ripple]]);
  }), {};
} }), W_ = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function j_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function U_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), W_(t);
}
function Y_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function G_() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => j_(n, t), touchend: (n) => U_(n, t), touchmove: (n) => Y_(n, t) };
}
function K_(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = G_(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, vg(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function q_(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  vg(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const lr = { mounted: K_, unmounted: q_ }, Ey = Symbol.for("vuetify:v-window"), By = Symbol.for("vuetify:v-window-group"), $r = j({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...xe(), ...Ee(), ...Ue() }, "VWindow"), rl = ne()({ name: "VWindow", directives: { vTouch: lr }, props: $r(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isRtl: l } = Ct(), { t: o } = Qe(), i = Oa(e, By), r = K(), s = V(() => l.value ? !e.reverse : e.reverse), u = se(false), c = V(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const y = e.direction === "vertical" ? "y" : "x", w = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${y}${w}-transition`;
  }), d = se(0), f = K(void 0), v = V(() => i.items.value.findIndex((y) => i.selected.value.includes(y.id)));
  de(v, (y, C) => {
    let w;
    const A = { left: 0, top: 0 };
    Je && C >= 0 && (w = Sr(r.value), A.left = w == null ? void 0 : w.scrollLeft, A.top = w == null ? void 0 : w.scrollTop);
    const P = i.items.value.length, E = P - 1;
    P <= 2 ? u.value = y < C : y === E && C === 0 ? u.value = false : y === 0 && C === E ? u.value = true : u.value = y < C, De(() => {
      if (!Je || !w) return;
      w.scrollTop !== A.top && w.scrollTo({ ...A, behavior: "instant" }), requestAnimationFrame(() => {
        if (!w) return;
        w.scrollTop !== A.top && w.scrollTo({ ...A, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), it(Ey, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const p = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function b() {
    p.value && i.prev();
  }
  function h() {
    m.value && i.next();
  }
  const x = V(() => {
    const y = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    y.push(p.value ? n.prev ? n.prev({ props: C }) : g(ze, C, null) : k("div", null, null));
    const w = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return y.push(m.value ? n.next ? n.next({ props: w }) : g(ze, w, null) : k("div", null, null)), y;
  }), _ = V(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? b() : h();
  }, right: () => {
    s.value ? h() : b();
  }, start: (C) => {
    let { originalEvent: w } = C;
    w.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function I(y) {
    (e.direction === "horizontal" && y.key === "ArrowLeft" || e.direction === "vertical" && y.key === "ArrowUp") && (y.preventDefault(), b(), De(() => {
      p.value ? S(0) : S(1);
    })), (e.direction === "horizontal" && y.key === "ArrowRight" || e.direction === "vertical" && y.key === "ArrowDown") && (y.preventDefault(), h(), De(() => {
      m.value ? S(1) : S(0);
    }));
  }
  function S(y) {
    var _a3;
    const C = x.value[y];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return le(() => at(g(e.tag, { ref: r, class: ae(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: he([e.style, { "--v-window-transition-duration": zn() ? null : ge(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [k("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && k("div", { class: ae(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: I }, [x.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[lr, _.value]])), { group: i };
} }), X_ = j({ color: String, cycle: Boolean, delimiterIcon: { type: Ie, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...$r({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), Z_ = ne()({ name: "VCarousel", props: X_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { t: l } = Qe(), o = K();
  let i = -1;
  de(a, s), de(() => e.interval, s), de(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), xt(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), De(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), De(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return le(() => {
    const c = rl.filterProps(e);
    return g(rl, Z({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ge(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return k(be, null, [!e.hideDelimiters && k("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && g(Be, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, p) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", p + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (b) => u(b, f) };
        return n.item ? n.item({ props: m, item: v }) : g(ze, Z(v, m), null);
      })] })]), e.progress && g(_r, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Fr = j({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...xe(), ...pl(), ...Hc() }, "VWindowItem"), sl = ne()({ name: "VWindowItem", directives: { vTouch: lr }, props: Fr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(Ey), l = Ma(e, By), { isBooted: o } = yl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = se(false), r = V(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !a || (i.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = ge((_a3 = a.rootRef.value) == null ? void 0 : _a3.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(p) {
    i.value && De(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ge(p.clientHeight));
    });
  }
  const f = V(() => {
    const p = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof p != "string" ? a.transition.value : p, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = zc(e, l.isSelected);
  return le(() => g(Kt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [at(k("div", { class: ae(["v-window-item", l.selectedClass.value, e.class]), style: he(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Mn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), J_ = j({ ...Qg(), ...Fr() }, "VCarouselItem"), Q_ = ne()({ name: "VCarouselItem", inheritAttrs: false, props: J_(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  le(() => {
    const l = ca.filterProps(e), o = sl.filterProps(e);
    return g(sl, Z({ class: ["v-carousel-item", e.class] }, o), { default: () => [g(ca, Z(a, l), n)] });
  });
} }), eI = ma("v-code", "code"), tI = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...xe() }, "VColorPickerCanvas"), nI = Xt({ name: "VColorPickerCanvas", props: tI(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = se(false), l = K(), o = se(parseFloat(e.width)), i = se(parseFloat(e.height)), r = K({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = V({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x, y: _ } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ze(x, 0, o.value) / o.value, v: 1 - Ze(_, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = V(() => {
    const { x: h, y: x } = u.value, _ = parseInt(e.dotSize, 10) / 2;
    return { width: ge(e.dotSize), height: ge(e.dotSize), transform: `translate(${ge(h - _)}, ${ge(x - _)})` };
  }), { resizeRef: d } = wn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: x, height: _ } = h[0].contentRect;
    o.value = Math.round(x), i.value = Math.round(_);
  });
  function f(h, x, _) {
    const { left: I, top: S, width: y, height: C } = _;
    u.value = { x: Ze(h - I, 0, y), y: Ze(x - S, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (p(h), window.addEventListener("mousemove", p), window.addEventListener("mouseup", m), window.addEventListener("touchmove", p), window.addEventListener("touchend", m));
  }
  function p(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const x = ak(h);
    f(x.clientX, x.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", m);
  }
  function b() {
    var _a3;
    if (!l.value) return;
    const h = l.value, x = h.getContext("2d");
    if (!x) return;
    const _ = x.createLinearGradient(0, 0, h.width, 0);
    _.addColorStop(0, "hsla(0, 0%, 100%, 1)"), _.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), x.fillStyle = _, x.fillRect(0, 0, h.width, h.height);
    const I = x.createLinearGradient(0, 0, 0, h.height);
    I.addColorStop(0, "hsla(0, 0%, 0%, 0)"), I.addColorStop(1, "hsla(0, 0%, 0%, 1)"), x.fillStyle = I, x.fillRect(0, 0, h.width, h.height);
  }
  return de(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, b, { immediate: true }), de(() => [o.value, i.value], (h, x) => {
    b(), r.value = { x: u.value.x * h[0] / x[0], y: u.value.y * h[1] / x[1] };
  }, { flush: "post" }), de(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), xt(() => b()), le(() => k("div", { ref: d, class: ae(["v-color-picker-canvas", e.class]), style: he(e.style), onMousedown: v, onTouchstartPassive: v }, [k("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && k("div", { class: ae(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: he(c.value) }, null)])), {};
} });
function aI(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function lI(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Wn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Ws(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Ag(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Ka(t, ["r", "g", "b"]) ? n = Wn(e) : Ka(t, ["h", "s", "l"]) ? n = Ws(e) : Ka(t, ["h", "s", "v"]) && (n = e), aI(n, !Ka(t, ["a"]) && e.a === 1);
  }
  return e;
}
const El = { h: 0, s: 0, v: 0, a: 1 }, uu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Wn, from: li }, oI = { ...uu, inputs: (_a2 = uu.inputs) == null ? void 0 : _a2.slice(0, 3) }, cu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Ws, from: mc }, iI = { ...cu, inputs: cu.inputs.slice(0, 3) }, $y = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Ag, from: Pk }, rI = { ...$y, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, el = { rgb: oI, rgba: uu, hsl: iI, hsla: cu, hex: rI, hexa: $y }, sI = (e) => {
  let { label: t, ...n } = e;
  return k("div", { class: "v-color-picker-edit__input" }, [k("input", yp(Xm(n)), null), k("span", null, [t])]);
}, uI = j({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(el).includes(e) }, modes: { type: Array, default: () => Object.keys(el), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(el).includes(t)) }, ...xe() }, "VColorPickerEdit"), cI = Xt({ name: "VColorPickerEdit", props: uI(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = V(() => e.modes.map((i) => ({ ...el[i], name: i }))), o = V(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const p = v.target;
        p && n("update:color", i.from(c(r ?? i.to(El), p.value)));
      } };
    });
  });
  return le(() => {
    var _a3;
    return k("div", { class: ae(["v-color-picker-edit", e.class]), style: he(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => g(sI, i, null)), l.value.length > 1 && g(ze, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), nd = Symbol.for("vuetify:v-slider");
function du(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function dI(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Fy = j({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...ot(), ...kt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Ly = (e) => {
  const t = V(() => parseFloat(e.min)), n = V(() => parseFloat(e.max)), a = V(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = V(() => Math.max(wf(a.value), wf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ze(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Ry = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = no(t), { isRtl: s } = Ct(), u = B(() => t.reverse), c = V(() => t.direction === "vertical"), d = V(() => c.value !== u.value), { min: f, max: v, step: p, decimals: m, roundValue: b } = n, h = V(() => parseInt(t.thumbSize, 10)), x = V(() => parseInt(t.tickSize, 10)), _ = V(() => parseInt(t.trackSize, 10)), I = V(() => (v.value - f.value) / p.value), S = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), y = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = V(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), w = V(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = se(false), P = se(0), E = K(), D = K();
  function M(q) {
    var _a3;
    const ve = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!ve) return;
    const Ae = t.direction === "vertical", Ve = Ae ? "top" : "left", ye = Ae ? "height" : "width", $ = Ae ? "clientY" : "clientX", { [Ve]: N, [ye]: ee } = ve.getBoundingClientRect(), ce = dI(q, $);
    let ie = Ze((ce - N - P.value) / ee) || 0;
    return (Ae ? d.value : d.value !== s.value) && (ie = 1 - ie), b(f.value + ie * (v.value - f.value));
  }
  const T = (q) => {
    const ve = M(q);
    ve != null && o({ value: ve }), A.value = false, P.value = 0;
  }, L = (q) => {
    const ve = M(q);
    D.value = i(q), D.value && (A.value = true, D.value.contains(q.target) ? P.value = du(q, D.value, t.direction) : (P.value = 0, ve != null && l({ value: ve })), ve != null && a({ value: ve }), De(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, Y = { passive: true, capture: true };
  function H(q) {
    const ve = M(q);
    ve != null && l({ value: ve });
  }
  function G(q) {
    q.stopPropagation(), q.preventDefault(), T(q), window.removeEventListener("mousemove", H, Y), window.removeEventListener("mouseup", G);
  }
  function O(q) {
    var _a3;
    T(q), window.removeEventListener("touchmove", H, Y), (_a3 = q.target) == null ? void 0 : _a3.removeEventListener("touchend", O);
  }
  function F(q) {
    var _a3;
    L(q), window.addEventListener("touchmove", H, Y), (_a3 = q.target) == null ? void 0 : _a3.addEventListener("touchend", O, { passive: false });
  }
  function J(q) {
    q.button === 0 && (q.preventDefault(), L(q), window.addEventListener("mousemove", H, Y), window.addEventListener("mouseup", G, { passive: false }));
  }
  gt(() => {
    window.removeEventListener("touchmove", H), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", G);
  });
  const z = (q) => {
    const ve = (q - f.value) / (v.value - f.value) * 100;
    return Ze(isNaN(ve) ? 0 : ve, 0, 100);
  }, R = B(() => t.showTicks), U = V(() => R.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((q) => ({ value: q, position: z(q), label: q.toString() })) : Object.keys(t.ticks).map((q) => ({ value: parseFloat(q), position: z(parseFloat(q)), label: t.ticks[q] })) : I.value !== 1 / 0 ? On(I.value + 1).map((q) => {
    const ve = f.value + q * p.value;
    return { value: ve, position: z(ve) };
  }) : [] : []), re = V(() => U.value.some((q) => {
    let { label: ve } = q;
    return !!ve;
  })), ke = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: re, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: A, noKeyboard: B(() => t.noKeyboard), numTicks: I, onSliderMousedown: J, onSliderTouchstart: F, parsedTicks: U, parseMouseMove: M, position: z, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: b, showTicks: R, startOffset: P, step: p, thumbSize: h, thumbColor: S, thumbLabelColor: y, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: x, trackColor: C, trackContainerRef: E, trackFillColor: w, trackSize: _, vertical: c };
  return it(nd, ke), ke;
}, fI = j({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...xe() }, "VSliderThumb"), fu = ne()({ name: "VSliderThumb", directives: { vRipple: Ft }, props: fI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(nd), { isRtl: o, rtlClasses: i } = Ct();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: p, direction: m, isReversed: b, vertical: h, readonly: x, elevation: _, mousePressed: I, decimals: S, indexFromEnd: y } = l, C = se(false), w = se(false), A = V(() => f.value ? void 0 : _.value), { elevationClasses: P } = It(A), { textColorClasses: E, textColorStyles: D } = Mt(u), { backgroundColorClasses: M, backgroundColorStyles: T } = Xe(c), { pageup: L, pagedown: Y, end: H, home: G, left: O, right: F, down: J, up: z } = Rs, R = [L, Y, H, G, O, F, J, z], U = V(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function re(q, ve) {
    if (e.noKeyboard || f.value || !R.includes(q.key)) return;
    q.preventDefault();
    const Ae = d.value || 0.1, Ve = (s.value - r.value) / Ae;
    if ([O, F, J, z].includes(q.key)) {
      const $ = (h.value ? [o.value ? O : F, b.value ? J : z] : y.value !== o.value ? [O, z] : [F, z]).includes(q.key) ? 1 : -1, N = q.shiftKey ? 2 : q.ctrlKey ? 1 : 0;
      $ === -1 && ve === s.value && !N && !Number.isInteger(Ve) ? ve = ve - Ve % 1 * Ae : ve = ve + $ * Ae * U.value[N];
    } else if (q.key === G) ve = r.value;
    else if (q.key === H) ve = s.value;
    else {
      const ye = q.key === Y ? 1 : -1;
      ve = ve - ye * Ae * (Ve > 100 ? Ve / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, ve));
  }
  function ke(q) {
    const ve = re(q, e.modelValue);
    ve != null && (w.value = false, a("update:modelValue", ve));
  }
  return de(() => e.focused, (q) => {
    q && (w.value = false);
  }), le(() => {
    const q = ge(y.value ? 100 - e.position : e.position, "%"), ve = p.value === "always" || p.value === true && e.focused || p.value === "hover" && (C.value || e.focused && !w.value);
    return k("div", { class: ae(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && I.value }, e.class, i.value]), style: he([{ "--v-slider-thumb-position": q, "--v-slider-thumb-size": ge(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!x.value, "aria-orientation": m.value, onKeydown: x.value ? void 0 : ke, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, w.value = true;
    } }, [k("div", { class: ae(["v-slider-thumb__surface", E.value, P.value]), style: he(D.value) }, null), at(k("div", { class: ae(["v-slider-thumb__ripple", E.value]), style: he(D.value) }, null), [[Ft, e.ripple, null, { circle: true, center: true }]]), g(Vc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [at(k("div", { class: "v-slider-thumb__label-container" }, [k("div", { class: ae(["v-slider-thumb__label", M.value]), style: he(T.value) }, [k("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? S.value : 1)]), k("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Mn, ve]])];
    } })]);
  }), {};
} }), vI = j({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...xe() }, "VSliderTrack"), Oy = ne()({ name: "VSliderTrack", props: vI(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = We(nd);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: p, indexFromEnd: m } = a, { roundedClasses: b } = ct(i), { backgroundColorClasses: h, backgroundColorStyles: x } = Xe(c), { backgroundColorClasses: _, backgroundColorStyles: I } = Xe(u), S = V(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), y = V(() => f.value ? "height" : "width"), C = V(() => ({ [S.value]: "0%", [y.value]: "100%" })), w = V(() => e.stop - e.start), A = V(() => ({ [S.value]: ge(e.start, "%"), [y.value]: ge(w.value, "%") })), P = V(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const T = D.value !== v.value && D.value !== p.value ? ge(D.position, "%") : void 0;
    return k("div", { key: D.value, class: ae(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === p.value }]), style: { [S.value]: T } }, [(D.label || n["tick-label"]) && k("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return le(() => k("div", { class: ae(["v-slider-track", b.value, e.class]), style: he([{ "--v-slider-track-size": ge(d.value), "--v-slider-tick-size": ge(s.value) }, e.style]) }, [k("div", { class: ae(["v-slider-track__background", _.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...I.value } }, null), k("div", { class: ae(["v-slider-track__fill", h.value]), style: { ...A.value, ...x.value } }, null), r.value && k("div", { class: ae(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), mI = j({ ...fi(), ...Fy(), ...pa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), vu = ne()({ name: "VSlider", inheritAttrs: false, props: mI(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), { rtlClasses: r } = Ct(), s = Ly(e), u = Ce(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: p, onSliderTouchstart: m, trackContainerRef: b, position: h, hasLabels: x, disabled: _, readonly: I, noKeyboard: S } = Ry({ props: e, steps: s, onSliderStart: () => {
    !_.value && !I.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: E } = P;
    const D = v(E);
    !_.value && !I.value && (u.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: E } = P;
    !_.value && !I.value && (u.value = v(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: y, focus: C, blur: w } = ba(e), A = V(() => h(u.value));
  return le(() => {
    const P = Nt.filterProps(e), [E, D] = Gn(l), M = !!(e.label || n.label || n.prepend);
    return g(Nt, Z({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || x.value, "v-slider--focused": y.value, "v-slider--pressed": f.value, "v-slider--disabled": _.value }, r.value, e.class], style: e.style }, P, E, { focused: y.value }), { ...n, prepend: M ? (T) => {
      var _a3, _b2;
      return k(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? g(to, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: L, messagesId: Y } = T;
      return k("div", { class: "v-slider__container", onMousedown: I.value ? void 0 : p, onTouchstartPassive: I.value ? void 0 : m }, [k("input", { id: L.value, name: e.name || L.value, disabled: _.value, readonly: I.value, tabindex: "-1", value: u.value }, null), g(Oy, { ref: b, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), g(fu, Z({ ref: o, "aria-describedby": Y.value, focused: y.value, noKeyboard: S.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (H) => u.value = H, position: A.value, elevation: e.elevation, onFocus: C, onBlur: w, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Ny = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ie, default: "$eyeDropper" }, ...xe() }, "VColorPickerPreview"), gI = Xt({ name: "VColorPickerPreview", props: Ny(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  gr(() => l.abort());
  async function i() {
    if (!bf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = li(cn(s.sRGBHex));
      n("update:color", { ...e.color ?? El, ...u });
    } catch {
    }
  }
  return le(() => {
    var _a3, _b2;
    return k("div", { class: ae(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: he(e.style) }, [bf && !e.hideEyeDropper && k("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [g(ze, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), k("div", { class: "v-color-picker-preview__dot" }, [k("div", { style: { background: _g(e.color ?? El) } }, null)]), k("div", { class: "v-color-picker-preview__sliders" }, [g(vu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? El, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && g(vu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? El, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), hI = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, yI = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, bI = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, pI = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, SI = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, wI = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, kI = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, xI = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, CI = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, VI = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, _I = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, II = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, PI = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, AI = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, TI = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, DI = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, MI = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, EI = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, BI = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, $I = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, FI = { red: hI, pink: yI, purple: bI, deepPurple: pI, indigo: SI, blue: wI, lightBlue: kI, cyan: xI, teal: CI, green: VI, lightGreen: _I, lime: II, yellow: PI, amber: AI, orange: TI, deepOrange: DI, brown: MI, blueGrey: EI, grey: BI, shades: $I }, LI = j({ swatches: { type: Array, default: () => RI(FI) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...xe() }, "VColorPickerSwatches");
function RI(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const OI = Xt({ name: "VColorPickerSwatches", props: LI(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return le(() => k("div", { class: ae(["v-color-picker-swatches", e.class]), style: he([{ maxHeight: ge(e.maxHeight) }, e.style]) }, [k("div", null, [e.swatches.map((o) => k("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = cn(i), s = li(r), u = Vg(r);
    return k("div", { class: ae(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [k("div", { style: { background: u } }, [e.color && Dt(e.color, s) ? g(Ge, { size: "x-small", icon: "$success", color: Mk(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), NI = ma("v-picker-title"), Lr = j({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Wc() }, "VPicker"), ql = ne()({ name: "VPicker", props: Lr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Xe(() => e.color);
  return le(() => {
    const o = $a.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return g($a, Z(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && k("div", { key: "header", class: ae(["v-picker__header-wrapper", a.value]), style: he([l.value]) }, [i && g(NI, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && k("div", { class: "v-picker__header" }, [n.header()])]), k("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(Be, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [k("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), HI = j({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(el).includes(e) }, modes: { type: Array, default: () => Object.keys(el), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(el).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Lr({ hideHeader: true }), ...tn(Ny(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), zI = Xt({ name: "VColorPicker", props: HI(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "mode"), l = K(null), o = Ce(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = li(cn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? lI(c, e.modelValue) : null), i = V(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = Ct();
  let s = true;
  de(o, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (l.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, l.value = c.h, o.value = c;
  };
  return Zl(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), ft({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), le(() => {
    const c = ql.filterProps(e);
    return g(ql, Z(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": _g({ ...i.value ?? El, a: 1 }) }, e.style] }), { ...n, default: () => k(be, null, [!e.hideCanvas && g(nI, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && k("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && g(gI, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && g(cI, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && g(OI, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), WI = j({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...qc({ hideNoData: true, returnObject: true }), ...Re(gi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), jI = ne()({ name: "VCombobox", props: WI(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = K(), i = se(false), r = se(true), s = se(false), u = K(), c = K(), d = se(-1);
  let f = false;
  const { items: v, transformIn: p, transformOut: m } = Fc(e), { textColorClasses: b, textColorStyles: h } = Mt(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: x } = di(e), _ = Ce(e, "modelValue", [], (Q) => p(lt(Q)), (Q) => {
    const me = m(Q);
    return e.multiple ? me : me[0] ?? null;
  }), I = no(e), S = B(() => e.closableChips && !I.isReadonly.value && !I.isDisabled.value), y = V(() => !!(e.chips || a.chip)), C = V(() => y.value || !!a.selection), w = se(!e.multiple && !C.value ? ((_a3 = _.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = se(null), P = V({ get: () => w.value, set: async (Q) => {
    var _a4;
    if (w.value = Q ?? "", Q === null || Q === "" && !e.multiple && !C.value ? _.value = [] : !e.multiple && !C.value && (_.value = [Cn(e, Q)], De(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), Q && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const me = we(Q);
      me.length > 1 && (fe(me), w.value = "");
    }
    Q || (d.value = -1), r.value = !Q;
  } }), E = V(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? _.value.length : P.value.length), { filteredItems: D, getMatches: M } = kl(e, v, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = V(() => e.hideSelected && A.value === null ? D.value.filter((Q) => !_.value.some((me) => me.value === Q.value)) : D.value), L = V(() => e.hideNoData && !T.value.length || I.isReadonly.value || I.isDisabled.value), Y = Ce(e, "menu"), H = V({ get: () => Y.value, set: (Q) => {
    var _a4;
    Y.value && !Q && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || Q && L.value || (Y.value = Q);
  } }), { menuId: G, ariaExpanded: O, ariaControls: F } = Kc(e, H);
  de(w, (Q) => {
    f ? De(() => f = false) : i.value && !H.value && (H.value = true), n("update:search", Q);
  }), de(_, (Q) => {
    var _a4;
    !e.multiple && !C.value && (w.value = ((_a4 = Q[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const J = V(() => _.value.map((Q) => Q.value)), z = V(() => T.value.find((Q) => Q.type === "item" && !Q.props.disabled)), R = V(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = z.value) == null ? void 0 : _a4.title)) && T.value.length > 0 && !r.value && !s.value;
  }), U = K(), re = K(), ke = K(), q = Uc(U, o), { onTabKeydown: ve } = Yc({ groups: [{ type: "element", contentRef: re }, { type: "list", contentRef: U, displayItemsCount: () => T.value.length }, { type: "element", contentRef: ke }], onLeave: () => {
    var _a4;
    H.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Ae(Q) {
    f = true, De(() => f = false), e.openOnClear && (H.value = true);
  }
  function Ve() {
    L.value || (H.value = true);
  }
  function ye(Q) {
    L.value || (i.value && (Q.preventDefault(), Q.stopPropagation()), H.value = !H.value);
  }
  function $(Q) {
    var _a4, _b2;
    Q.key === "Tab" && ve(Q), ((_a4 = U.value) == null ? void 0 : _a4.$el.contains(Q.target)) && (Wl(Q) || Q.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function N(Q) {
    var _a4, _b2, _c2, _d2;
    if (tk(Q) || I.isReadonly.value) return;
    const me = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, W = _.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(Q.key) && Q.preventDefault(), ["Enter", "ArrowDown"].includes(Q.key) && (H.value = true), ["Escape"].includes(Q.key) && (H.value = false), R.value && ["Enter", "Tab"].includes(Q.key) && z.value && !_.value.some((te) => {
      let { value: Se } = te;
      return Se === z.value.value;
    }) && ue(z.value), Q.key === "ArrowDown" && R.value && ((_b2 = U.value) == null ? void 0 : _b2.focus("next")), Q.key === "Enter" && P.value && (ue(Cn(e, P.value), true, true), C.value && (w.value = "")), ["Backspace", "Delete"].includes(Q.key)) {
      if (!e.multiple && C.value && _.value.length > 0 && !P.value) return ue(_.value[0], false);
      if (~d.value) {
        Q.preventDefault();
        const te = d.value;
        ue(_.value[d.value], false), d.value = te >= W - 1 ? W - 2 : te;
      } else Q.key === "Backspace" && !P.value && (d.value = W - 1);
      return;
    }
    if (e.multiple) if (Q.key === "ArrowLeft") {
      if (d.value < 0 && me && me > 0) return;
      const te = d.value > -1 ? d.value - 1 : W - 1;
      _.value[te] ? d.value = te : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (Q.key === "ArrowRight") {
      if (d.value < 0) return;
      const te = d.value + 1;
      _.value[te] ? d.value = te : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && Wl(Q) && (d.value = -1);
  }
  function ee(Q) {
    var _a4;
    const me = ((_a4 = Q == null ? void 0 : Q.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", W = we(me);
    W.length > 1 && e.multiple && (Q.preventDefault(), fe(W));
  }
  function ce() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function ie() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function ue(Q) {
    let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!Q || Q.props.disabled)) if (e.multiple) {
      const te = _.value.findIndex((Pe) => (e.valueComparator || Dt)(Pe.value, Q.value)), Se = me ?? !~te;
      if (~te) {
        const Pe = Se ? [..._.value, Q] : [..._.value];
        Pe.splice(te, 1), _.value = Pe;
      } else Se && (_.value = [..._.value, Q]);
      e.clearOnSelect && (P.value = "");
    } else {
      const te = me !== false;
      _.value = te ? [Q] : [], (!r.value || e.alwaysFilter) && w.value && (A.value = w.value), w.value = te && !C.value ? Q.title : "", De(() => {
        H.value = W, r.value = true;
      });
    }
  }
  function we(Q) {
    const W = [`
`, ...e.delimiters ?? []].map(qi).join("|");
    return Q.split(new RegExp(`(?:${W})+`));
  }
  async function fe(Q) {
    for (let me of Q) me = me.trim(), me && (ue(Cn(e, me)), await De());
  }
  function X(Q) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function oe(Q) {
    s.value = false;
  }
  function _e(Q) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(Q.relatedTarget)) && (i.value = true);
  }
  return de(i, (Q, me) => {
    if (!(Q || Q === me) && (d.value = -1, H.value = false, P.value)) {
      if (e.multiple) {
        ue(Cn(e, P.value));
        return;
      }
      if (!C.value) return;
      _.value.some((W) => {
        let { title: te } = W;
        return te === P.value;
      }) ? w.value = "" : ue(Cn(e, P.value));
    }
  }), de(H, (Q) => {
    if (!e.hideSelected && Q && _.value.length && r.value) {
      const me = T.value.findIndex((W) => _.value.some((te) => (e.valueComparator || Dt)(te.value, W.value)));
      Je && window.requestAnimationFrame(() => {
        var _a4;
        me >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(me));
      });
    }
    Q && (A.value = null);
  }), de(v, (Q, me) => {
    H.value || i.value && !me.length && Q.length && (H.value = true);
  }), le(() => {
    const Q = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), me = _.value.length > 0, W = Un.filterProps(e), te = { search: P, filteredItems: D.value };
    return g(Un, Z({ ref: o }, W, { modelValue: P.value, "onUpdate:modelValue": (Se) => P.value = Se, focused: i.value, "onUpdate:focused": (Se) => i.value = Se, validationValue: _.externalValue, counterValue: E.value, dirty: me, class: ["v-combobox", { "v-combobox--active-menu": H.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: I.isReadonly.value, placeholder: me ? void 0 : e.placeholder, "onClick:clear": Ae, "onMousedown:control": Ve, onKeydown: N, onPaste: ee, onBlur: _e, "aria-expanded": O.value, "aria-controls": F.value }), { ...a, default: (Se) => {
      let { id: Pe } = Se;
      return k(be, null, [g(Kl, Z({ id: G.value, ref: u, modelValue: H.value, "onUpdate:modelValue": (Me) => H.value = Me, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: ce, onAfterLeave: ie }, e.menuProps), { default: () => [g($a, { onFocusin: X, onKeydown: $ }, { default: () => [a["menu-header"] && k("header", { ref: re }, [a["menu-header"](te)]), Q && g(Gl, Z({ key: "combobox-list", ref: U, filterable: true, selected: J.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Me) => Me.preventDefault(), selectable: !!T.value.length, onFocusout: oe, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Pe.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, q, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? g(kn, { key: "no-data", title: l(e.noDataText) }, null)), g(Dr, { ref: c, renderless: true, items: T.value, itemKey: "value" }, { default: (Me) => {
          var _a5, _b3, _c3;
          let { item: $e, index: Fe, itemRef: qe } = Me;
          const Rt = Z($e.props, { ref: qe, key: $e.value, active: R.value && $e === z.value ? true : void 0, onClick: () => ue($e, null), "aria-posinset": Fe + 1, "aria-setsize": T.value.length });
          return $e.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: $e.raw, index: Fe })) ?? g(fn, Z($e.props, { key: `divider-${Fe}` }), null) : $e.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: $e.raw, index: Fe })) ?? g(ao, Z($e.props, { key: `subheader-${Fe}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: $e, index: Fe, props: Rt })) ?? g(kn, Z(Rt, { role: "option" }), { prepend: (En) => {
            let { isSelected: rt } = En;
            return k(be, null, [e.multiple && !e.hideSelected ? g(Dn, { key: $e.value, modelValue: rt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (bn) => bn.preventDefault() }, null) : void 0, $e.props.prependAvatar && g(mn, { image: $e.props.prependAvatar }, null), $e.props.prependIcon && g(Ge, { icon: $e.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? $e.title : Gc("v-combobox", $e.title, (_a6 = M($e)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && k("footer", { ref: ke }, [a["menu-footer"](te)])] })] }), _.value.map((Me, $e) => {
        function Fe(rt) {
          rt.stopPropagation(), rt.preventDefault(), ue(Me, false);
        }
        const qe = Z(da.filterProps(Me.props), { "onClick:close": Fe, onKeydown(rt) {
          rt.key !== "Enter" && rt.key !== " " || (rt.preventDefault(), rt.stopPropagation(), Fe(rt));
        }, onMousedown(rt) {
          rt.preventDefault(), rt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Rt = y.value ? !!a.chip : !!a.selection, En = Rt ? pr(y.value ? a.chip({ item: Me, index: $e, props: qe }) : a.selection({ item: Me, index: $e })) : void 0;
        if (!(Rt && !En)) return k("div", { key: Me.value, class: ae(["v-combobox__selection", $e === d.value && ["v-combobox__selection--selected", b.value]]), style: he($e === d.value ? h.value : {}) }, [y.value ? a.chip ? g(Be, { key: "chip-defaults", defaults: { VChip: { closable: S.value, size: "small", text: Me.title } } }, { default: () => [En] }) : g(da, Z({ key: "chip", closable: S.value, size: "small", text: Me.title, disabled: Me.props.disabled }, qe), null) : En ?? k("span", { class: "v-combobox__selection-text" }, [Me.title, e.multiple && $e < _.value.length - 1 && k("span", { class: "v-combobox__selection-comma" }, [je(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Se = arguments.length, Pe = new Array(Se), Me = 0; Me < Se; Me++) Pe[Me] = arguments[Me];
      return k(be, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Pe), (!e.hideNoData || e.items.length) && e.menuIcon ? g(Ge, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ye, onClick: br, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(x, { key: "append-icon", name: "appendInner", color: Pe[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: H, search: P, selectionIndex: d, filteredItems: D, select: ue }, o);
} }), UI = j({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), YI = ne()({ name: "VConfirmEdit", props: UI(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = K();
  ut(() => {
    o.value = structuredClone(_f(l.value));
  });
  const { t: i } = Qe(), r = V(() => Dt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = V(() => s("save")), c = V(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(_f(l.value)), n("cancel");
  }
  function v(m) {
    return k(be, null, [g(ze, Z({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), g(ze, Z({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let p = false;
  return le(() => {
    var _a3;
    return k(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return p = true, v;
    } }), !e.hideActions && !p && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), Hy = j({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), zy = Symbol.for("vuetify:datatable:expanded");
function Rr(e) {
  const t = B(() => e.expandOnClick), n = Ce(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = Te(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => Te(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = Te(r.value);
    return [...n.value].some((u) => Te(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return it(zy, i), i;
}
function Wy() {
  const e = We(zy);
  if (!e) throw new Error("foo");
  return e;
}
const ad = j({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), jy = Symbol.for("vuetify:data-table-group");
function ld(e) {
  return { groupBy: Ce(e, "groupBy") };
}
function Or(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = K(/* @__PURE__ */ new Set()), o = V(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
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
      for (const p of f.items) "type" in p && p.type === "group" ? v.push(...d(p)) : v.push(p);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return it(jy, u), u;
}
function Uy() {
  const e = We(jy);
  if (!e) throw new Error("Missing group!");
  return e;
}
function GI(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ll(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Yy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = GI(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? Yy(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Gy(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...Gy(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Nr(e, t, n, a) {
  const l = V(() => t.value.length ? Yy(nt(e), t.value.map((i) => i.key)) : []), o = V(() => t.value.length ? Gy(l.value, n.value, nt(a)) : nt(e));
  return { groups: l, flatItems: o };
}
function Hr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = pt("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  de(r, (u) => {
    Dt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const od = j({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Ky = Symbol.for("vuetify:data-table-pagination");
function id(e) {
  const t = Ce(e, "page", void 0, (a) => Number(a ?? 1)), n = Ce(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function rd(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = V(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = V(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = V(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  de([t, i], () => {
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
  return it(Ky, d), d;
}
function KI() {
  const e = We(Ky);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function qy(e) {
  const t = pt("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = V(() => o.value <= 0 ? nt(n) : nt(n).slice(a.value, l.value));
  return de(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function qI(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = nt(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = V(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((b) => b.type === "group" && b.id === d), p = o.value.findIndex((b) => b.type === "group" && b.id === f), m = o.value.findIndex((b, h) => h > p && b.type === "group" && b.depth === 0);
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
const XI = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, Xy = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return Xy.select({ items: n, value: t, selected: a });
} }, ZI = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, Zy = j({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Jy = Symbol.for("vuetify:data-table-selection");
function zr(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ce(e, "modelValue", e.modelValue, (x) => {
    const _ = e.valueComparator;
    return _ ? new Set(lt(x).map((I) => {
      var _a3;
      return ((_a3 = n.value.find((S) => _(I, S.value))) == null ? void 0 : _a3.value) ?? I;
    })) : new Set(lt(x).map((I) => {
      var _a3, _b2;
      return Da(I) ? ((_a3 = n.value.find((S) => I === S.value)) == null ? void 0 : _a3.value) ?? I : ((_b2 = n.value.find((S) => Dt(I, S.value))) == null ? void 0 : _b2.value) ?? I;
    }));
  }, (x) => [...x.values()]), o = V(() => n.value.filter((x) => x.selectable)), i = V(() => nt(a).filter((x) => x.selectable)), r = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return XI;
      case "all":
        return ZI;
      case "page":
      default:
        return Xy;
    }
  }), s = se(null);
  function u(x) {
    return lt(x).every((_) => l.value.has(_.value));
  }
  function c(x) {
    return lt(x).some((_) => l.value.has(_.value));
  }
  function d(x, _) {
    const I = r.value.select({ items: x, value: _, selected: new Set(l.value) });
    l.value = I;
  }
  function f(x, _, I) {
    const S = [], y = nt(a);
    if (_ = _ ?? y.findIndex((C) => C.value === x.value), e.selectStrategy !== "single" && (I == null ? void 0 : I.shiftKey) && s.value !== null) {
      const [C, w] = [s.value, _].sort((A, P) => A - P);
      S.push(...y.slice(C, w + 1).filter((A) => A.selectable));
    } else S.push(x), s.value = _;
    d(S, !u([x]));
  }
  function v(x) {
    const _ = r.value.selectAll({ value: x, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = _;
  }
  const p = V(() => l.value.size > 0), m = V(() => {
    const x = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!x.length && u(x);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: p, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return it(Jy, h), h;
}
function Wr() {
  const e = We(Jy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Qy = j({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), eb = Symbol.for("vuetify:data-table-sort");
function jr(e) {
  const t = B(() => e.initialSortOrder), n = Ce(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function JI(e, t) {
  if (!ol(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function Ur(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, p = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === p ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = p;
    else {
      const { active: m, mode: b } = JI(l.value, c);
      m ? b === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return it(eb, s), s;
}
function tb() {
  const e = We(eb);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function sd(e, t, n, a) {
  const l = Qe();
  return { sortedItems: V(() => {
    var _a3, _b2;
    return n.value.length ? QI(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function QI(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ll(i[1], c), v = ll(r[1], c), p = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [p, m] = [m, p]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const b = a.sortRawFunctions[c](p, m);
        if (b == null) continue;
        if (u = true, b) return b;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const b = a.sortFunctions[c](f, v);
        if (b == null) continue;
        if (u = true, b) return b;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((b) => b != null ? b.toString().toLocaleLowerCase() : b), f !== v)) return vo(f) && vo(v) ? 0 : vo(f) ? -1 : vo(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const eP = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function tP(e, t) {
  const n = e.returnObject ? t : yt(t, e.itemValue), a = yt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function nP(e, t) {
  const n = [];
  for (const a of t) n.push(tP(e, a));
  return n;
}
function aP(e) {
  return { items: V(() => nP(e, e.items)) };
}
const lP = j({ search: String, loading: Boolean, itemsLength: [Number, String], ...xe(), ...eP(), ...Zy(), ...Qy(), ...od({ itemsPerPage: 5 }), ...Hy(), ...ad(), ...wl(), ...Ee(), ...ga({ transition: { component: No, hideOnLeave: true } }) }, "VDataIterator"), oP = ne()({ name: "VDataIterator", props: lP(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "groupBy"), l = B(() => e.search), { items: o } = aP(e), { filteredItems: i } = kl(e, o, l, { transform: (U) => U.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = jr(e), { page: d, itemsPerPage: f } = id(e), { toggleSort: v } = Ur({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: p, opened: m, extractRows: b, isGroupOpen: h, toggleGroup: x } = Or({ groupBy: a, sortBy: s }), { sortedItems: _ } = sd(e, i, p, { transform: (U) => U.raw }), { flatItems: I } = Nr(_, a, m, false), S = B(() => !vo(e.itemsLength)), y = B(() => S.value ? Number(e.itemsLength) : I.value.length), { startIndex: C, stopIndex: w, pageCount: A, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = rd({ page: d, itemsPerPage: f, itemsLength: y }), T = se([]), L = V(() => S.value ? I.value : T.value);
  $t(() => !S.value, () => {
    const { paginatedItems: U } = qy({ items: I, startIndex: C, stopIndex: w, itemsPerPage: f });
    ut(() => {
      T.value = U.value;
    });
  });
  const Y = V(() => b(L.value)), { isSelected: H, select: G, selectAll: O, toggleSelect: F } = zr(e, { allItems: o, currentPage: Y }), { isExpanded: J, toggleExpand: z } = Rr(e);
  Hr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const R = V(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: v, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: H, select: G, selectAll: O, toggleSelect: F, isExpanded: J, toggleExpand: z, isGroupOpen: h, toggleGroup: x, items: Y.value, itemsCount: i.value.length, groupedItems: L.value }));
  return le(() => g(e.tag, { class: ae(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: he(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, R.value), g(Kt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? g(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (U) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, U);
      } }) : k("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, R.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, R.value)];
  } })), {};
} });
function iP() {
  const e = K([]);
  Am(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const rP = j({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ie, default: "$first" }, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, lastIcon: { type: Ie, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...zt(), ...xe(), ...vt(), ...kt(), ...ot(), ...Xn(), ...Ee({ tag: "nav" }), ...Ue(), ...yn({ variant: "text" }) }, "VPagination"), mu = ne()({ name: "VPagination", props: rP(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ce(e, "modelValue"), { t: o, n: i } = Qe(), { isRtl: r } = Ct(), { themeClasses: s } = Ke(e), { width: u } = gn(), c = se(-1);
  ft(void 0, { scoped: true });
  const { resizeRef: d } = wn((w) => {
    if (!w.length) return;
    const { target: A, contentRect: P } = w[0], E = A.querySelector(".v-pagination__list > *");
    if (!E) return;
    const D = P.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = m(D, M);
  }), f = V(() => parseInt(e.length, 10)), v = V(() => parseInt(e.start, 10)), p = V(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(w, A) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((w - A * P) / A).toFixed(2))));
  }
  const b = V(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (p.value <= 0) return [];
    if (p.value === 1) return [l.value];
    if (f.value <= p.value) return On(f.value, v.value);
    const w = p.value % 2 === 0, A = w ? p.value / 2 : Math.floor(p.value / 2), P = w ? A : A + 1, E = f.value - A;
    if (P - l.value >= 0) return [...On(Math.max(1, p.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (w ? 1 : 0)) {
      const D = p.value - 1, M = f.value - D + v.value;
      return [v.value, e.ellipsis, ...On(D, M)];
    } else {
      const D = Math.max(1, p.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...On(D, M), e.ellipsis, f.value];
    }
  });
  function h(w, A, P) {
    w.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: x, updateRef: _ } = iP();
  ft({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const I = V(() => b.value.map((w, A) => {
    const P = (E) => _(E, A);
    if (typeof w == "string") return { isActive: false, key: `ellipsis-${A}`, page: w, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = w === l.value;
      return { isActive: E, key: w, page: i(w), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, w), onClick: (D) => h(D, w) } };
    }
  })), S = V(() => {
    const w = !!e.disabled || l.value <= v.value, A = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: w, "aria-label": o(e.firstAriaLabel), "aria-disabled": w } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: w, "aria-label": o(e.previousAriaLabel), "aria-disabled": w }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: A, "aria-label": o(e.nextAriaLabel), "aria-disabled": A }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: A, "aria-label": o(e.lastAriaLabel), "aria-disabled": A } : void 0 };
  });
  function y() {
    var _a3;
    const w = l.value - v.value;
    (_a3 = x.value[w]) == null ? void 0 : _a3.$el.focus();
  }
  function C(w) {
    w.key === Rs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, De(y)) : w.key === Rs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, De(y));
  }
  return le(() => g(e.tag, { ref: d, class: ae(["v-pagination", s.value, e.class]), style: he(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [k("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && k("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(S.value.first) : g(ze, Z({ _as: "VPaginationBtn" }, S.value.first), null)]), k("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(S.value.prev) : g(ze, Z({ _as: "VPaginationBtn" }, S.value.prev), null)]), I.value.map((w, A) => k("li", { key: w.key, class: ae(["v-pagination__item", { "v-pagination__item--is-active": w.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(w) : g(ze, Z({ _as: "VPaginationBtn" }, w.props), { default: () => [w.page] })])), k("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(S.value.next) : g(ze, Z({ _as: "VPaginationBtn" }, S.value.next), null)]), e.showFirstLastPage && k("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(S.value.last) : g(ze, Z({ _as: "VPaginationBtn" }, S.value.last), null)])])] })), {};
} }), ud = j({ color: String, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, firstIcon: { type: Ie, default: "$first" }, lastIcon: { type: Ie, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Go = ne()({ name: "VDataTableFooter", props: ud(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = KI(), d = V(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return le(() => {
    var _a3;
    const f = mu.filterProps(e);
    return k("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), k("div", { class: "v-data-table-footer__items-per-page" }, [k("span", null, [a(e.itemsPerPageText)]), g(Xc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), k("div", { class: "v-data-table-footer__info" }, [k("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), k("div", { class: "v-data-table-footer__pagination" }, [g(mu, Z({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Re(f, ["color"])), null)])]);
  }), {};
} }), Ko = Lk({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return g(a, { class: ae(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ge(e.height), width: ge(e.width), maxWidth: ge(e.maxWidth), left: l === "start" ? ge(e.fixedOffset || null) : void 0, right: l === "end" ? ge(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ge(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), sP = j({ headers: Array }, "DataTable-header"), nb = Symbol.for("vuetify:data-table-headers"), ab = { title: "", sortable: false }, uP = { ...ab, width: 48 };
function cP() {
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
function gu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) gu(n, t);
  return t;
}
function lb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && lb(n.children, t);
  return t;
}
function dP(e) {
  if (e.key) {
    if (e.key === "data-table-group") return ab;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return uP;
  }
}
function cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => cd(n, t + 1))) : t;
}
function fP(e) {
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
  for (let o = 0; o < e.length; o++) a = ob(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = ib(e[o], l);
}
function ob(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = ob(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function ib(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = ib(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function vP(e, t) {
  const n = [];
  let a = 0;
  const l = cP(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - cd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? gu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => gu(i)).flat(), headers: n };
}
function rb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...dP(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? rb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function dd(e, t) {
  const n = K([]), a = K([]), l = K({}), o = K({}), i = K({});
  ut(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Yn(m) }))).slice(), c = lb(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = rb(u);
    fP(d);
    const f = Math.max(...d.map((m) => cd(m))) + 1, v = vP(d, f);
    n.value = v.headers, a.value = v.columns;
    const p = v.headers.flat(1);
    for (const m of p) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return it(nb, r), r;
}
function Yr() {
  const e = We(nb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const sb = j({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ie }, sortAscIcon: { type: Ie, default: "$sortAsc" }, sortDescIcon: { type: Ie, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...vt(), ...ml(), ...Ir() }, "VDataTableHeaders"), ul = ne()({ name: "VDataTableHeaders", props: sb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { toggleSort: l, sortBy: o, isSorted: i } = tb(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Wr(), { columns: d, headers: f } = Yr(), { loaderClasses: v } = ri(e);
  function p(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const E = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? ge(A.fixedOffset) : void 0, right: E === "end" ? ge(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(A, P) {
    A.key === "Enter" && !e.disableSort && l(P, A);
  }
  function b(A) {
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
  const { backgroundColorClasses: h, backgroundColorStyles: x } = Xe(() => e.color), { displayClasses: _, mobile: I } = gn(e), S = V(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: b })), y = V(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, _.value, v.value]), C = (A) => {
    let { column: P, x: E, y: D } = A;
    const M = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, L = Z(e.headerProps ?? {}, P.headerProps ?? {});
    return g(Ko, Z({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...y.value], style: { width: ge(P.width), minWidth: ge(P.minWidth), maxWidth: ge(P.maxWidth), ...p(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (Y) => l(P, Y) : void 0, onKeydown: P.sortable ? (Y) => m(Y, P) : void 0 }, L), { default: () => {
      var _a3;
      const Y = `header.${P.key}`, H = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: b };
      return n[Y] ? n[Y](H) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, H)) ?? (c.value && g(Dn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : k("div", { class: "v-data-table-header__content" }, [k("span", null, [P.title]), P.sortable && !e.disableSort && g(Ge, { key: "icon", class: "v-data-table-header__sort-icon", icon: b(P) }, null), e.multiSort && i(P) && k("div", { key: "badge", class: ae(["v-data-table-header__sort-badge", ...h.value]), style: he(x.value) }, [o.value.findIndex((G) => G.key === P.key) + 1])]);
    } });
  }, w = () => {
    const A = V(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return g(Ko, Z({ tag: "th", class: [...y.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [k("div", { class: "v-data-table-header__content" }, [g(Xc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => g(Dn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return g(da, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, g(Ge, { class: ae(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: b(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  le(() => I.value ? k("tr", null, [g(w, null, null)]) : k(be, null, [n.headers ? n.headers(S.value) : f.value.map((A, P) => k("tr", null, [A.map((E, D) => g(C, { column: E, x: D, y: P }, null))])), e.loading && k("tr", { class: "v-data-table-progress" }, [k("th", { colspan: d.value.length }, [g(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), ub = j({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ie, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ie, default: "$tableGroupExpand" }, ...vt() }, "VDataTableGroupHeaderRow"), mP = ne()({ name: "VDataTableGroupHeaderRow", props: ub(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = Uy(), { isSelected: i, isSomeSelected: r, select: s } = Wr(), { columns: u } = Yr(), c = V(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => k("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, p = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: p } })) ?? g(Ko, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [g(ze, { size: "small", variant: "text", icon: v, onClick: p }, null), k("span", null, [e.item.value]), k("span", null, [je("("), c.value.length, je(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((h) => h.selectable), p = v.length > 0 && i(v), m = r(v) && !p, b = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: p, indeterminate: m, "onUpdate:modelValue": b } })) ?? g(Ko, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [g(Dn, { density: e.density, disabled: v.length === 0, modelValue: p, indeterminate: m, "onUpdate:modelValue": b }, null)] });
    }
    return "";
  })]);
} }), cb = j({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ie, default: "$collapse" }, expandIcon: { type: Ie, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...vt(), ...ml() }, "VDataTableRow"), fd = ne()({ name: "VDataTableRow", props: cb(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = gn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = Wr(), { isExpanded: c, toggleExpand: d } = Wy(), { toggleSort: f, sortBy: v, isSorted: p } = tb(), { columns: m } = Yr();
  le(() => k("tr", { class: ae(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((b, h) => {
    const x = e.item, _ = `item.${b.key}`, I = `header.${b.key}`, S = { index: e.index, item: x.raw, internalItem: x, value: ll(x.columns, b.key), column: b, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, y = { column: b, selectAll: u, isSorted: p, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: S.index, item: S.item, internalItem: S.internalItem, value: S.value, column: b }) : e.cellProps, w = typeof b.cellProps == "function" ? b.cellProps({ index: S.index, item: S.item, internalItem: S.internalItem, value: S.value }) : b.cellProps, A = b.key === "data-table-select" || b.key === "data-table-expand", P = b.key === "data-table-group" && b.width === 0 && !b.title;
    return g(Ko, Z({ align: b.align, indent: b.indent, class: { "v-data-table__td--expanded-row": b.key === "data-table-expand", "v-data-table__td--select-row": b.key === "data-table-select" }, fixed: b.fixed, fixedOffset: b.fixedOffset, fixedEndOffset: b.fixedEndOffset, lastFixed: b.lastFixed, firstFixedEnd: b.firstFixedEnd, maxWidth: l.value ? void 0 : b.maxWidth, noPadding: A, empty: P, nowrap: b.nowrap, width: l.value ? void 0 : b.width }, C, w), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (b.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...S, props: { color: e.color, disabled: !x.selectable, modelValue: o([x]), onClick: Si(() => i(x), ["stop"]) } })) ?? g(Dn, { color: e.color, disabled: !x.selectable, density: e.density, modelValue: o([x]), onClick: Si((D) => i(x, e.index, D), ["stop"]) }, null);
      if (b.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...S, props: { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(x), ["stop"]) } })) ?? g(ze, { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(x), ["stop"]) }, null);
      if (n[_] && !l.value) return n[_](S);
      const E = Oe(S.value);
      return l.value ? k(be, null, [k("div", { class: "v-data-table__td-title" }, [((_c2 = n[I]) == null ? void 0 : _c2.call(n, y)) ?? b.title]), k("div", { class: "v-data-table__td-value" }, [((_d2 = n[_]) == null ? void 0 : _d2.call(n, S)) ?? E])]) : E;
    } });
  })]));
} }), db = j({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...tn(cb(), ["collapseIcon", "expandIcon", "density"]), ...tn(ub(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...ml() }, "VDataTableRows"), cl = ne()({ name: "VDataTableRows", inheritAttrs: false, props: db(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = Yr(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = Wy(), { isSelected: s, toggleSelect: u } = Wr(), { toggleGroup: c, isGroupOpen: d } = Uy(), { t: f } = Qe(), { mobile: v } = gn(e);
  return le(() => {
    var _a3, _b2;
    const p = tn(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? k("tr", { class: "v-data-table-rows-loading", key: "loading" }, [k("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? k("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [k("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : k(be, null, [e.items.map((m, b) => {
      var _a4, _b3;
      if (m.type === "group") {
        const _ = { index: b, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](_) : g(mP, Z({ key: `group-header_${m.id}`, item: m }, dn(n, ":groupHeader", () => _), p), a);
      }
      if (m.type === "group-summary") {
        const _ = { index: b, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, _)) ?? "";
      }
      const h = { index: m.virtualIndex ?? b, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, x = { ...h, props: Z({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: b, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, dn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return k(be, { key: x.props.key }, [a.item ? a.item(x) : g(fd, x.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), fb = j({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...xe(), ...vt(), ...Ee(), ...Ue() }, "VTable"), dl = ne()({ name: "VTable", props: fb(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Ke(e), { densityClasses: o } = Lt(e);
  return le(() => g(e.tag, { class: ae(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: he(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? k("div", { class: "v-table__wrapper", style: { height: ge(e.height) } }, [k("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), gP = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function hP(e, t, n, a) {
  const l = e.returnObject ? t : yt(t, e.itemValue), o = yt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = yt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? yt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function yP(e, t, n) {
  return t.map((a, l) => hP(e, a, l, n));
}
function vd(e, t) {
  return { items: V(() => yP(e, e.items, t.value)) };
}
const md = j({ ...db(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...Hy(), ...ad(), ...sP(), ...gP(), ...Zy(), ...Qy(), ...Re(sb(), ["multiSort", "initialSortOrder"]), ...fb() }, "DataTable"), bP = j({ ...od(), ...md(), ...wl(), ...ud() }, "VDataTable"), pP = ne()({ name: "VDataTable", props: bP(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = ld(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = jr(e), { page: u, itemsPerPage: c } = id(e), { disableSort: d } = Xl(e), { columns: f, headers: v, sortFunctions: p, sortRawFunctions: m, filterFunctions: b } = dd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = vd(e, f), x = B(() => e.search), { filteredItems: _ } = kl(e, h, x, { transform: (re) => re.columns, customKeyFilter: b }), { toggleSort: I } = Ur({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: S, opened: y, extractRows: C, isGroupOpen: w, toggleGroup: A } = Or({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = sd(e, _, S, { transform: (re) => ({ ...re.raw, ...re.columns }), sortFunctions: p, sortRawFunctions: m }), E = V(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: T } = qI({ pageBy: E, sortedItems: P, paginate: (re) => {
    const ke = V(() => nt(re).length), { startIndex: q, stopIndex: ve, pageCount: Ae, setItemsPerPage: Ve } = rd({ page: u, itemsPerPage: c, itemsLength: ke }), { paginatedItems: ye } = qy({ items: re, startIndex: q, stopIndex: ve, itemsPerPage: c });
    return { paginatedItems: ye, pageCount: Ae, setItemsPerPage: Ve };
  }, group: (re) => Nr(re, l, y, () => !!a["group-summary"]) }), L = V(() => C(T.value)), { isSelected: Y, select: H, selectAll: G, toggleSelect: O, someSelected: F, allSelected: J } = zr(e, { allItems: h, currentPage: L }), { isExpanded: z, toggleExpand: R } = Rr(e);
  Hr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: x }), ft({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const U = V(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: I, setItemsPerPage: M, someSelected: F.value, allSelected: J.value, isSelected: Y, select: H, selectAll: G, toggleSelect: O, isExpanded: z, toggleExpand: R, isGroupOpen: w, toggleGroup: A, items: L.value.map((re) => re.raw), internalItems: L.value, groupedItems: T.value, columns: f.value, headers: v.value }));
  return le(() => {
    const re = Go.filterProps(e), ke = ul.filterProps(Re(e, ["multiSort"])), q = cl.filterProps(e), ve = dl.filterProps(e);
    return g(dl, Z({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ve, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, U.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(U.value) : k(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, U.value), !e.hideDefaultHeader && k("thead", { key: "thead" }, [g(ul, Z(ke, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, U.value), !e.hideDefaultBody && k("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, U.value), a.body ? a.body(U.value) : g(cl, Z(n, q, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, U.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, U.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, U.value)]);
    }, bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && k(be, null, [g(fn, null, null), g(Go, re, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), SP = j({ ...Re(md(), ["hideDefaultFooter"]), ...ad(), ...ey(), ...wl() }, "VDataTableVirtual"), wP = ne()({ name: "VDataTableVirtual", props: SP(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = ld(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = jr(e), { disableSort: u } = Xl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: p } = dd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = vd(e, c), b = B(() => e.search), { filteredItems: h } = kl(e, m, b, { transform: (ye) => ye.columns, customKeyFilter: f }), { toggleSort: x } = Ur({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: _, opened: I, extractRows: S, isGroupOpen: y, toggleGroup: C } = Or({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: w } = sd(e, h, _, { transform: (ye) => ({ ...ye.raw, ...ye.columns }), sortFunctions: v, sortRawFunctions: p }), { flatItems: A } = Nr(w, l, I, () => !!a["group-summary"]), P = V(() => S(A.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: T, someSelected: L, allSelected: Y } = zr(e, { allItems: P, currentPage: P }), { isExpanded: H, toggleExpand: G } = Rr(e), { containerRef: O, markerRef: F, paddingTop: J, paddingBottom: z, computedItems: R, handleItemResize: U, handleScroll: re, handleScrollend: ke, calculateVisibleItems: q, scrollToIndex: ve } = ty(e, A), Ae = V(() => R.value.map((ye) => ({ ...ye.raw, virtualIndex: ye.index })));
  Hr({ sortBy: i, page: se(1), itemsPerPage: se(-1), groupBy: l, search: b }), ft({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const Ve = V(() => ({ sortBy: i.value, toggleSort: x, someSelected: L.value, allSelected: Y.value, isSelected: E, select: D, selectAll: M, toggleSelect: T, isExpanded: H, toggleExpand: G, isGroupOpen: y, toggleGroup: C, items: P.value.map((ye) => ye.raw), internalItems: P.value, groupedItems: A.value, columns: c.value, headers: d.value }));
  return le(() => {
    const ye = ul.filterProps(Re(e, ["multiSort"])), $ = cl.filterProps(e), N = dl.filterProps(e);
    return g(dl, Z({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, N, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, Ve.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return k("div", { ref: O, onScrollPassive: re, onScrollend: ke, class: "v-table__wrapper", style: { height: ge(e.height) } }, [k("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, Ve.value), !e.hideDefaultHeader && k("thead", { key: "thead" }, [g(ul, Z(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, Ve.value), !e.hideDefaultBody && k("tbody", { key: "tbody" }, [k("tr", { ref: F, style: { height: ge(J.value), border: 0 } }, [k("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, Ve.value), g(cl, Z(n, $, { items: Ae.value }), { ...a, item: (ee) => g(Qh, { key: ee.internalItem.index, renderless: true, "onUpdate:height": (ce) => U(ee.internalItem.index, ce) }, { default: (ce) => {
        var _a4;
        let { itemRef: ie } = ce;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...ee, itemRef: ie })) ?? g(fd, Z(ee.props, { ref: ie, key: ee.internalItem.index, index: ee.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, Ve.value), k("tr", { style: { height: ge(z.value), border: 0 } }, [k("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, Ve.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, Ve.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, Ve.value);
    } });
  }), { calculateVisibleItems: q, scrollToIndex: ve };
} }), kP = j({ itemsLength: { type: [Number, String], required: true }, ...od(), ...md(), ...ud() }, "VDataTableServer"), xP = ne()({ name: "VDataTableServer", props: kP(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = ld(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = jr(e), { page: u, itemsPerPage: c } = id(e), { disableSort: d } = Xl(e), f = V(() => parseInt(e.itemsLength, 10)), { columns: v, headers: p } = dd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = vd(e, v), { toggleSort: b } = Ur({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: x, toggleGroup: _, extractRows: I } = Or({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: S, setItemsPerPage: y } = rd({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Nr(m, l, h, () => !!a["group-summary"]), { isSelected: w, select: A, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = zr(e, { allItems: m, currentPage: m }), { isExpanded: T, toggleExpand: L } = Rr(e), Y = V(() => I(m.value));
  Hr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), it("v-data-table", { toggleSort: b, sortBy: i }), ft({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const H = V(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: S.value, toggleSort: b, setItemsPerPage: y, someSelected: D.value, allSelected: M.value, isSelected: w, select: A, selectAll: P, toggleSelect: E, isExpanded: T, toggleExpand: L, isGroupOpen: x, toggleGroup: _, items: Y.value.map((G) => G.raw), internalItems: Y.value, groupedItems: C.value, columns: v.value, headers: p.value }));
  le(() => {
    const G = Go.filterProps(e), O = ul.filterProps(Re(e, ["multiSort"])), F = cl.filterProps(e), J = dl.filterProps(e);
    return g(dl, Z({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, J, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, H.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(H.value) : k(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, H.value), !e.hideDefaultHeader && k("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [g(ul, Z(O, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, H.value), !e.hideDefaultBody && k("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, H.value), a.body ? a.body(H.value) : g(cl, Z(n, F, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, H.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, H.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, H.value)]);
    }, bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && k(be, null, [g(fn, null, null), g(Go, G, { prepend: a["footer.prepend"] })]) });
  });
} }), CP = j({ fluid: { type: Boolean, default: false }, ...xe(), ...St(), ...Ee() }, "VContainer"), VP = ne()({ name: "VContainer", props: CP(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Ct(), { dimensionStyles: l } = wt(e);
  return le(() => g(e.tag, { class: ae(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: he([l.value, e.style]) }, n)), {};
} }), vb = kr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), mb = kr.reduce((e, t) => {
  const n = "offset" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), gb = kr.reduce((e, t) => {
  const n = "order" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Cv = { col: Object.keys(vb), offset: Object.keys(mb), order: Object.keys(gb) };
function _P(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const IP = ["auto", "start", "end", "center", "baseline", "stretch"], PP = j({ cols: { type: [Boolean, String, Number], default: false }, ...vb, offset: { type: [String, Number], default: null }, ...mb, order: { type: [String, Number], default: null }, ...gb, alignSelf: { type: String, default: null, validator: (e) => IP.includes(e) }, ...xe(), ...Ee() }, "VCol"), AP = ne()({ name: "VCol", props: PP(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => {
    const l = [];
    let o;
    for (o in Cv) Cv[o].forEach((r) => {
      const s = e[r], u = _P(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return va(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), gd = ["start", "end", "center"], hb = ["space-between", "space-around", "space-evenly"];
function hd(e, t) {
  return kr.reduce((n, a) => {
    const l = e + Yn(a);
    return n[l] = t(), n;
  }, {});
}
const TP = [...gd, "baseline", "stretch"], yb = (e) => TP.includes(e), bb = hd("align", () => ({ type: String, default: null, validator: yb })), DP = [...gd, ...hb], pb = (e) => DP.includes(e), Sb = hd("justify", () => ({ type: String, default: null, validator: pb })), MP = [...gd, ...hb, "stretch"], wb = (e) => MP.includes(e), kb = hd("alignContent", () => ({ type: String, default: null, validator: wb })), Vv = { align: Object.keys(bb), justify: Object.keys(Sb), alignContent: Object.keys(kb) }, EP = { align: "align", justify: "justify", alignContent: "align-content" };
function BP(e, t, n) {
  let a = EP[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const $P = j({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: yb }, ...bb, justify: { type: String, default: null, validator: pb }, ...Sb, alignContent: { type: String, default: null, validator: wb }, ...kb, ...xe(), ...Ee() }, "VRow"), FP = ne()({ name: "VRow", props: $P(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => {
    const l = [];
    let o;
    for (o in Vv) Vv[o].forEach((i) => {
      const r = e[i], s = BP(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return va(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), hu = ma("v-spacer", "div", "VSpacer"), xb = j({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, modeIcon: { type: Ie, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), yu = ne()({ name: "VDatePickerControls", props: xb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = V(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = V(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = V(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = V(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = V(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = V(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
  function d() {
    n("click:prev");
  }
  function f() {
    n("click:next");
  }
  function v() {
    n("click:prev-year");
  }
  function p() {
    n("click:next-year");
  }
  function m() {
    n("click:year");
  }
  function b() {
    n("click:month");
  }
  return le(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, x = g(ze, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), _ = g(ze, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), I = g(ze, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), S = g(ze, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: p }, null), y = g(ze, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), C = g(ze, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), w = g(ze, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), A = k(be, null, [g(ze, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), g(ze, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: b, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: p }, E = k(be, null, [e.noMonthPicker ? w : A, g(hu, null, null), k("div", { class: "v-date-picker-controls__month" }, [x, _])]), D = k(be, null, [k("div", { class: "v-date-picker-controls__month" }, [x, y, _]), g(hu, null, null), k("div", { class: "v-date-picker-controls__year" }, [I, C, S])]);
    return g(Be, { defaults: h }, { default: () => {
      var _a3;
      return [k("div", { class: ae(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ge(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? k(be, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), LP = j({ appendIcon: Ie, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), bu = ne()({ name: "VDatePickerHeader", props: LP(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return le(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return k("div", { class: ae(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: he(o.value), onClick: i }, [a.prepend && k("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && g(Kt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [k("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && k("div", { class: "v-date-picker-header__append" }, [a.append ? g(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : g(ze, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), RP = j({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function OP(e) {
  const t = vl(), n = Ce(e, "modelValue", [], (m) => lt(m).map((b) => t.date(b))), a = V(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ce(e, "year", void 0, (m) => {
    const b = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), b));
  }, (m) => t.getYear(m)), o = Ce(e, "month", void 0, (m) => {
    const b = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, b);
  }, (m) => t.getMonth(m)), i = V(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((b, h) => e.weekdays.includes((h + m) % 7));
  }), r = V(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), b = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && b.length < h) {
      const x = b[b.length - 1];
      let _ = [];
      for (let I = 1; I <= h - b.length; I++) _.push(t.addDays(x, I)), I % 7 === 0 && (m.push(_), _ = []);
    }
    return m;
  });
  function s(m, b) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, x) => {
      const _ = t.toISO(h), I = !t.isSameMonth(h, o.value), S = t.isSameDay(h, t.startOfMonth(o.value)), y = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), w = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: I, isDisabled: p(h), isEnd: y, isHidden: I && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((A) => t.isSameDay(h, A)), isStart: S, isToday: t.isSameDay(h, b), isWeekEnd: x % w === w - 1, isWeekStart: x % w === 0, isoDate: _, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const u = V(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), b = [];
    for (let x = 0; x <= 6; x++) b.push(t.addDays(m, x));
    const h = t.date();
    return s(b, h);
  }), c = V(() => {
    const m = r.value.flat(), b = t.date();
    return s(m, b);
  }), d = V(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = Cb(e);
  function p(m) {
    if (e.disabled) return true;
    const b = t.date(m);
    return f.value && t.isBefore(t.endOfDay(b), f.value) || v.value && t.isAfter(b, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), b)) : typeof e.allowedDates == "function" ? !e.allowedDates(b) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function Cb(e) {
  const t = vl(), n = V(() => {
    if (!e.min) return null;
    const i = t.date(e.min);
    return t.isValid(i) ? i : null;
  }), a = V(() => {
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
const Vb = j({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Re(RP(), ["displayValue"]) }, "VDatePickerMonth"), pu = ne()({ name: "VDatePickerMonth", props: Vb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = K(), { t: o } = Qe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = OP(e), c = vl(), d = se(), f = se(), v = se(false), p = B(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = V(() => {
    const y = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= y;
  });
  de(i, (y, C) => {
    C && (v.value = c.isBefore(y[0].date, C[0].date));
  });
  function b(y) {
    const C = c.startOfDay(y);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = y, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = Hx(c, d.value, f.value);
    }
  }
  function h(y) {
    const C = c.format(y.date, "fullDateWithWeekday"), w = y.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${w}`, C);
  }
  function x(y) {
    const C = r.value.findIndex((w) => c.isSameDay(w, y));
    if (C === -1) r.value = [...r.value, y];
    else {
      const w = [...r.value];
      w.splice(C, 1), r.value = w;
    }
  }
  function _(y) {
    e.multiple === "range" ? b(y) : e.multiple ? x(y) : r.value = [y];
  }
  function I(y) {
    const { events: C, eventColor: w } = e;
    let A, P = [];
    if (Array.isArray(C) ? A = C.includes(y) : C instanceof Function ? A = C(y) || false : C ? A = C[y] || false : A = false, A) A !== true ? P = lt(A) : typeof w == "string" ? P = [w] : typeof w == "function" ? P = lt(w(y)) : Array.isArray(w) ? P = w : typeof w == "object" && w !== null && (P = lt(w[y]));
    else return [];
    return P.length ? P.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function S(y) {
    const C = I(y);
    return C.length ? k("div", { class: "v-date-picker-month__events" }, [C.map((w) => g(ny, { dot: true, color: w }, null))]) : null;
  }
  le(() => k("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && k("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && k("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [je("\xA0")]), s.value.map((y) => k("div", { class: ae(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [y]))]), g(Kt, { name: p.value }, { default: () => {
    var _a3;
    return [k("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((y) => k("div", { class: ae(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [y])), i.value.map((y, C) => {
      var _a4;
      const w = { props: { class: "v-date-picker-month__day-btn", color: y.isSelected || y.isToday ? e.color : void 0, disabled: y.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: y.isSelected ? "flat" : y.isToday ? "outlined" : "text", "aria-label": h(y), "aria-current": y.isToday ? "date" : void 0, onClick: () => _(y.date) }, item: y, i: C };
      return m.value && !y.isSelected && (y.isDisabled = true), k("div", { class: ae(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": y.isAdjacent, "v-date-picker-month__day--hide-adjacent": y.isHidden, "v-date-picker-month__day--selected": y.isSelected, "v-date-picker-month__day--week-end": y.isWeekEnd, "v-date-picker-month__day--week-start": y.isWeekStart }]), "data-v-date": y.isDisabled ? void 0 : y.isoDate }, [(e.showAdjacentMonths || !y.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, w)) ?? g(ze, w.props, { default: () => [y.localized, S(y.isoDate)] }))]);
    })])];
  } })]));
} }), _b = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Su = ne()({ name: "VDatePickerMonths", props: _b(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), o = Ce(e, "modelValue"), i = V(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), On(12).map((u) => {
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
  return le(() => k("div", { class: "v-date-picker-months", style: { height: ge(e.height) } }, [k("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? g(ze, Z({ key: "month" }, c), null);
  })])])), {};
} }), Ib = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), wu = ne()({ name: "VDatePickerYears", props: Ib(), directives: { vIntersect: Tn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), o = Ce(e, "modelValue"), i = se(false), r = V(() => {
    const f = l.getYear(l.date());
    let v = f - 100, p = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (p = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), On(p - v + 1, v).map((b) => {
      const h = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: h, value: b, isDisabled: !d(b) };
    });
  });
  ut(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = Bo(), u = Bo();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const p = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - p.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return le(() => at(k("div", { class: "v-date-picker-years", ref: s, style: { height: ge(e.height) } }, [k("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const p = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: p })) ?? g(ze, Z({ key: "month" }, p), null);
  })])]), [[Tn, { handler: c }, null, { once: true }]])), {};
} }), NP = j({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Re(xb(), ["active", "monthText", "yearText"]), ...Vb({ weeksInMonth: "static" }), ...Re(_b(), ["modelValue"]), ...Re(Ib(), ["modelValue"]), ...Lr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), HP = ne()({ name: "VDatePicker", props: NP(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), { t: o } = Qe(), { rtlClasses: i } = Ct(), r = Ce(e, "modelValue", void 0, (U) => lt(U).map((re) => l.date(re)), (U) => e.multiple ? U : U[0]), s = Ce(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = Cb(e), f = V(() => {
    var _a3;
    const U = l.date(), re = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(U);
    return re && l.isValid(re) ? re : U;
  }), v = B(() => e.headerColor ?? e.color), p = Ce(e, "month"), m = V({ get: () => Number(p.value ?? l.getMonth(l.startOfMonth(f.value))), set: (U) => p.value = U }), b = Ce(e, "year"), h = V({ get: () => Number(b.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (U) => b.value = U }), x = se(false), _ = V(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const U = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && U.split(" ").length === 3 ? U.replace(" ", `
`) : U;
  }), I = B(() => {
    let U = l.date();
    return U = l.setDate(U, 1), U = l.setMonth(U, m.value), U = l.setYear(U, h.value), U;
  }), S = B(() => l.format(I.value, "monthAndYear")), y = B(() => l.format(I.value, "monthShort")), C = B(() => l.format(I.value, "year")), w = B(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), A = V(() => {
    if (e.disabled) return true;
    const U = [];
    if (s.value !== "month") U.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let re = l.date();
      if (re = l.startOfMonth(re), re = l.setMonth(re, m.value), re = l.setYear(re, h.value), u.value) {
        const ke = l.addDays(l.startOfMonth(re), -1), q = l.addDays(l.startOfYear(re), -1);
        l.isAfter(u.value, ke) && U.push("prev-month"), l.isAfter(u.value, q) && U.push("prev-year");
      }
      if (c.value) {
        const ke = l.addDays(l.endOfMonth(re), 1), q = l.addDays(l.endOfYear(re), 1);
        l.isAfter(ke, c.value) && U.push("next-month"), l.isAfter(q, c.value) && U.push("next-year");
      }
    }
    return U;
  }), P = V(() => e.allowedYears || M), E = V(() => e.allowedMonths || T);
  function D(U, re) {
    const ke = e.allowedDates;
    if (typeof ke != "function") return true;
    const q = 1 + Ng(l, U, re);
    for (let ve = 0; ve < q; ve++) if (ke(l.addDays(U, ve))) return true;
    return false;
  }
  function M(U) {
    if (typeof e.allowedDates == "function") {
      const re = l.parseISO(`${U}-01-01`);
      return D(re, l.endOfYear(re));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const re of e.allowedDates) if (l.getYear(l.date(re)) === U) return true;
      return false;
    }
    return true;
  }
  function T(U) {
    if (typeof e.allowedDates == "function") {
      const re = String(U + 1).padStart(2, "0"), ke = l.parseISO(`${h.value}-${re}-01`);
      return D(ke, l.endOfMonth(ke));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const re of e.allowedDates) if (l.getYear(l.date(re)) === h.value && l.getMonth(l.date(re)) === U) return true;
      return false;
    }
    return true;
  }
  function L() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, R()), z();
  }
  function Y() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, R()), z();
  }
  function H() {
    if (h.value++, c.value) {
      const U = String(m.value + 1).padStart(2, "0"), re = l.parseISO(`${h.value}-${U}-01`);
      l.isAfter(re, c.value) && (m.value = l.getMonth(c.value));
    }
    R();
  }
  function G() {
    if (h.value--, u.value) {
      const U = String(m.value + 1).padStart(2, "0"), re = l.endOfMonth(l.parseISO(`${h.value}-${U}-01`));
      l.isAfter(u.value, re) && (m.value = l.getMonth(u.value));
    }
    R();
  }
  function O() {
    s.value = "month";
  }
  function F() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function J() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function z() {
    s.value === "months" && F();
  }
  function R() {
    s.value === "year" && J();
  }
  return de(r, (U, re) => {
    const ke = lt(re), q = lt(U);
    if (!q.length) return;
    const ve = l.date(ke[ke.length - 1]), Ae = l.date(q[q.length - 1]);
    if (l.isSameDay(ve, Ae)) return;
    const Ve = l.getMonth(Ae), ye = l.getYear(Ae);
    Ve !== m.value && (m.value = Ve, z()), ye !== h.value && (h.value = ye, R()), x.value = l.isBefore(ve, Ae);
  }), le(() => {
    const U = ql.filterProps(e), re = Re(yu.filterProps(e), ["viewMode"]), ke = bu.filterProps(e), q = pu.filterProps(e), ve = Re(Su.filterProps(e), ["modelValue"]), Ae = Re(wu.filterProps(e), ["modelValue"]), Ve = { color: v.value, header: _.value, transition: w.value };
    return g(ql, Z(U, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ge(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? k("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? g(Be, { defaults: { VDatePickerHeader: { ...Ve } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, Ve)];
    } }) : g(bu, Z({ key: "header" }, ke, Ve, { onClick: s.value !== "month" ? O : void 0 }), { prepend: a.prepend, append: a.append }), default: () => k(be, null, [g(yu, Z(re, { disabled: A.value, viewMode: s.value, text: S.value, monthText: y.value, yearText: C.value, "onClick:next": L, "onClick:prev": Y, "onClick:nextYear": H, "onClick:prevYear": G, "onClick:month": F, "onClick:year": J }), { default: a.controls }), g(No, { hideOnLeave: true }, { default: () => [s.value === "months" ? g(Su, Z({ key: "date-picker-months" }, ve, { modelValue: m.value, "onUpdate:modelValue": [(ye) => m.value = ye, z], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? g(wu, Z({ key: "date-picker-years" }, Ae, { modelValue: h.value, "onUpdate:modelValue": [(ye) => h.value = ye, R], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : g(pu, Z({ key: "date-picker-month" }, q, { modelValue: r.value, "onUpdate:modelValue": (ye) => r.value = ye, month: m.value, "onUpdate:month": [(ye) => m.value = ye, z], year: h.value, "onUpdate:year": [(ye) => h.value = ye, R], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), zP = j({ actionText: String, bgColor: String, color: String, icon: Ie, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...xe(), ...St(), ...Xn({ size: void 0 }), ...Ue() }, "VEmptyState"), WP = ne()({ name: "VEmptyState", props: zP(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = gn();
  function u(c) {
    n("click:action", c);
  }
  return le(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), p = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return k("div", { class: ae(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: he([i.value, r.value, e.style]) }, [p && k("div", { key: "media", class: "v-empty-state__media" }, [a.media ? g(Be, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : k(be, null, [e.image ? g(ca, { key: "image", src: e.image, height: m }, null) : e.icon ? g(Ge, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && k("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && k("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && k("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ge(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && k("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && k("div", { key: "actions", class: "v-empty-state__actions" }, [g(Be, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? g(ze, { onClick: u }, null)];
    } })])]);
  }), {};
} }), qo = Symbol.for("vuetify:v-expansion-panel"), Pb = j({ ...xe(), ...Hc() }, "VExpansionPanelText"), ku = ne()({ name: "VExpansionPanelText", props: Pb(), setup(e, t) {
  let { slots: n } = t;
  const a = We(qo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = zc(e, a.isSelected);
  return le(() => g(Vr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [at(k("div", { class: ae(["v-expansion-panel-text", e.class]), style: he(e.style) }, [n.default && l.value && k("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Mn, a.isSelected.value]])];
  } })), {};
} }), Ab = j({ color: String, expandIcon: { type: Ie, default: "$expand" }, collapseIcon: { type: Ie, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...xe(), ...St() }, "VExpansionPanelTitle"), xu = ne()({ name: "VExpansionPanelTitle", directives: { vRipple: Ft }, props: Ab(), setup(e, t) {
  let { slots: n } = t;
  const a = We(qo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), r = V(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return le(() => {
    var _a3;
    return at(k("button", { class: ae(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: he([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [k("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && g(Be, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [k("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? g(Ge, null, null)])];
    } })]), [[Ft, e.ripple]]);
  }), {};
} }), Tb = j({ title: String, text: String, bgColor: String, ...kt(), ...pl(), ...ot(), ...Ee(), ...Ab(), ...Pb() }, "VExpansionPanel"), jP = ne()({ name: "VExpansionPanel", props: Tb(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, qo), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = ct(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = V(() => a.group.items.value.reduce((f, v, p) => (a.group.selected.value.includes(v.id) && f.push(p), f), [])), c = V(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = V(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return it(qo, a), le(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), p = xu.filterProps(e), m = ku.filterProps(e);
    return g(e.tag, { class: ae(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: he([o.value, e.style]) }, { default: () => [k("div", { class: ae(["v-expansion-panel__shadow", ...i.value]) }, null), g(Be, { defaults: { VExpansionPanelTitle: { ...p }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && g(xu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && g(ku, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), UP = ["default", "accordion", "inset", "popout"], YP = j({ flat: Boolean, ...bl(), ...tn(Tb(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ue(), ...xe(), ...Ee(), variant: { type: String, default: "default", validator: (e) => UP.includes(e) } }, "VExpansionPanels"), GP = ne()({ name: "VExpansionPanels", props: YP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Oa(e, qo), { themeClasses: o } = Ke(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return ft({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), le(() => g(e.tag, { class: ae(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: he(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), KP = j({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Re(Pr({ active: true }), ["location", "spaced"]), ...gl(), ...qn(), ...ga({ transition: "fab-transition" }) }, "VFab"), qP = ne()({ name: "VFab", props: KP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = se(56), o = K(), { resizeRef: i } = wn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = V(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = V(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  $t(() => e.app, () => {
    const d = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: s, layoutSize: V(() => e.layout ? l.value + 24 : 0), elementSize: V(() => l.value + 24), active: V(() => e.app && a.value), absolute: B(() => e.absolute) });
    ut(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = K();
  return le(() => {
    const d = ze.filterProps(e);
    return k("div", { ref: c, class: ae(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: he([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [k("div", { class: "v-fab__container" }, [g(Kt, { appear: e.appear, transition: e.transition }, { default: () => [at(g(ze, Z({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Mn, e.active]])] })])]);
  }), {};
} });
function XP() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await Db(o, Mb(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function Db(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await Db(r, Mb(t, r)));
      n(i);
    });
  });
}
function Mb(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const ZP = j({ filterByType: String }, "file-accept");
function JP(e) {
  const t = V(() => e.filterByType ? QP(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function QP(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const eA = j({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Re(pa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => lt(e).every((t) => t != null && typeof t == "object") }, ...ZP(), ...mi({ clearable: true }) }, "VFileInput"), tA = ne()({ name: "VFileInput", inheritAttrs: false, props: eA(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { filterAccepted: i } = JP(e), r = Ce(e, "modelValue", e.modelValue, (O) => lt(O), (O) => !e.multiple && Array.isArray(O) ? O[0] : O), { isFocused: s, focus: u, blur: c } = ba(e), d = V(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = V(() => (r.value ?? []).reduce((O, F) => {
    let { size: J = 0 } = F;
    return O + J;
  }, 0)), v = V(() => Cf(f.value, d.value)), p = V(() => (r.value ?? []).map((O) => {
    const { name: F = "", size: J = 0 } = O, z = M(F);
    return e.showSize ? `${z} (${Cf(J, d.value)})` : z;
  })), m = V(() => {
    var _a3;
    const O = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, O, v.value) : o(e.counterString, O);
  }), b = K(), h = K(), x = K(), _ = B(() => s.value || e.active), I = V(() => ["plain", "underlined"].includes(e.variant)), S = se(false), { handleDrop: y, hasFilesOrFolders: C } = XP();
  function w() {
    var _a3;
    x.value !== document.activeElement && ((_a3 = x.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function A(O) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click();
  }
  function P(O) {
    a("mousedown:control", O);
  }
  function E(O) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click(), a("click:control", O);
  }
  function D(O) {
    O.stopPropagation(), w(), De(() => {
      r.value = [], ai(e["onClick:clear"], O);
    });
  }
  function M(O) {
    if (O.length < Number(e.truncateLength)) return O;
    const F = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${O.slice(0, F)}\u2026${O.slice(O.length - F)}`;
  }
  function T(O) {
    O.preventDefault(), O.stopImmediatePropagation(), S.value = true;
  }
  function L(O) {
    O.preventDefault(), S.value = false;
  }
  async function Y(O) {
    if (O.preventDefault(), O.stopImmediatePropagation(), S.value = false, !x.value || !C(O)) return;
    const F = await y(O);
    G(F);
  }
  function H(O) {
    if (!(!O.target || O.repack)) if (e.filterByType) G([...O.target.files]);
    else {
      const F = O.target;
      r.value = [...F.files ?? []];
    }
  }
  function G(O) {
    const F = new DataTransfer(), { accepted: J, rejected: z } = i(O);
    z.length && a("rejected", z);
    for (const U of J) F.items.add(U);
    x.value.files = F.files, r.value = [...F.files];
    const R = new Event("change", { bubbles: true });
    R.repack = true, x.value.dispatchEvent(R);
  }
  return de(r, (O) => {
    (!Array.isArray(O) || !O.length) && x.value && (x.value.value = "");
  }), le(() => {
    const O = !!(l.counter || e.counter), F = !!(O || l.details), [J, z] = Gn(n), { modelValue: R, ...U } = Nt.filterProps(e), re = { ...Fa.filterProps(e), "onClick:clear": D }, ke = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, q = n.accept ? String(n.accept) : void 0, ve = ke ? void 0 : e.filterByType ?? q;
    return g(Nt, Z({ ref: b, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": S.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": I.value }, e.class], style: e.style, "onClick:prepend": A }, J, U, { centerAffix: !I.value, focused: s.value }), { ...l, default: (Ae) => {
      let { id: Ve, isDisabled: ye, isDirty: $, isReadonly: N, isValid: ee, hasDetails: ce } = Ae;
      return g(Fa, Z({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, re, { id: Ve.value, active: _.value || $.value, dirty: $.value || e.dirty, disabled: ye.value, focused: s.value, details: ce.value, error: ee.value === false, onDragover: T, onDrop: Y }), { ...l, default: (ie) => {
        var _a3;
        let { props: { class: ue, ...we }, controlRef: fe } = ie;
        return k(be, null, [k("input", Z({ ref: (X) => x.value = fe.value = X, type: "file", accept: ve, readonly: N.value, disabled: ye.value, multiple: e.multiple, name: e.name, onClick: (X) => {
          X.stopPropagation(), N.value && X.preventDefault(), w();
        }, onChange: H, onDragleave: L, onFocus: w, onBlur: c }, we, z), null), k("div", { class: ae(ue) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: p.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? p.value.map((X) => g(da, { key: X, size: "small", text: X }, null)) : p.value.join(", "))])]);
      } });
    }, details: F ? (Ae) => {
      var _a3, _b2;
      return k(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Ae), O && k(be, null, [k("span", null, null), g(Tr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, b, h, x);
} }), nA = j({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...zt(), ...xe(), ...kt(), ...gl(), ...ot(), ...Ee({ tag: "footer" }), ...Ue() }, "VFooter"), aA = ne()({ name: "VFooter", props: nA(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Xe(() => e.color), { borderClasses: r } = Zt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = ct(e), c = se(32), { resizeRef: d } = wn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = V(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const v = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: V(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ut(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), le(() => g(e.tag, { ref: d, class: ae(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: he([i.value, e.app ? a.value : { height: ge(e.height) }, e.style]) }, n)), {};
} }), lA = j({ ...xe(), ...c1() }, "VForm"), oA = ne()({ name: "VForm", props: lA(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = d1(e), o = K();
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
  return le(() => {
    var _a3;
    return k("form", { ref: o, class: ae(["v-form", e.class]), style: he(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), iA = j({ color: String, ...zt(), ...xe(), ...ot(), ...Ee({ tag: "kbd" }), ...Ue(), ...kt() }, "VKbd"), Cu = ne()({ name: "VKbd", props: iA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = Zt(e), { roundedClasses: o } = ct(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.color), { elevationClasses: s } = It(e);
  return le(() => g(e.tag, { class: ae(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: he([r.value, e.style]) }, n)), {};
} });
function Eb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Bb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, rA = j({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => Bb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...xe(), ...Ue(), ...zt(), ...ot(), ...kt(), color: String }, "VHotkey"), Ss = Symbol("VHotkey:AND_DELINEATOR"), ws = Symbol("VHotkey:SLASH_DELINEATOR"), _v = Symbol("VHotkey:THEN_DELINEATOR");
function sA(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = Eb(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Iv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = Eb(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const uA = ne()({ name: "VHotkey", props: rA(), setup(e) {
  const { t } = Qe(), { themeClasses: n } = Ke(e), { rtlClasses: a } = Ct(), { borderClasses: l } = Zt(e), { roundedClasses: o } = ct(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ya(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = V(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = V(() => e.keys ? e.keys.split(" ").map((h) => {
    const x = [], _ = lC(h);
    for (let I = 0; I < _.length; I++) {
      const S = _[I];
      I > 0 && x.push(_v);
      const { keys: y, separators: C } = Kg(S);
      for (let w = 0; w < y.length; w++) {
        const A = y[w];
        w > 0 && x.push(C[w - 1] === "/" ? ws : Ss), x.push(Iv(e.keyMap, e.displayMode, A, c.value));
      }
    }
    return x;
  }) : []), f = V(() => {
    if (!e.keys) return "";
    const x = d.value.map((_) => {
      const I = [];
      for (const S of _) if (Array.isArray(S)) {
        const y = S[0] === "icon" || S[0] === "symbol" ? Iv(Ot(Bb, e.keyMap), "text", String(S[1]), c.value)[1] : S[1];
        I.push(v(y));
      } else S === Ss ? I.push(t("$vuetify.hotkey.plus")) : S === ws ? I.push(t("$vuetify.hotkey.or")) : S === _v && I.push(t("$vuetify.hotkey.then"));
      return I.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", x);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function p(h) {
    if (e.displayMode === "text") return;
    const x = sA(e.keyMap, String(h[2]), c.value);
    return v(x);
  }
  function m(h, x) {
    const _ = e.variant === "contained", I = _ ? "kbd" : Cu, S = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ..._ ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return g(I, { key: x, class: ae(S), style: he(_ ? void 0 : s.value), "aria-hidden": "true", title: p(h) }, { default: () => [h[0] === "icon" ? g(Ge, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function b(h, x) {
    return k("span", { key: x, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === Ss ? "+" : h === ws ? "/" : t("$vuetify.hotkey.then")]);
  }
  le(() => {
    const h = k(be, null, [e.prefix && k("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((x, _) => k("span", { class: "v-hotkey__combination", key: _ }, [x.map((I, S) => Array.isArray(I) ? m(I, S) : b(I, S)), _ < d.value.length - 1 && k("span", { "aria-hidden": "true" }, [je("\xA0")])])), e.suffix && k("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return k("div", { class: ae(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: he(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : g(Cu, { key: "contained", class: ae(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: he(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), cA = j({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Oc() }, "VHover"), dA = ne()({ name: "VHover", props: cA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Nc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), fA = j({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...St(), ...Ee() }, "VInfiniteScroll"), Pv = Xt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return de(l, async (o) => {
    n("intersect", e.side, o);
  }), le(() => k("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [je("\xA0")])), {};
} }), vA = ne()({ name: "VInfiniteScroll", props: fA(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = K(), o = se("ok"), i = se("ok"), r = V(() => ge(e.margin)), s = se(false);
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
  xt(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(y, C) {
    y === "start" ? o.value = C : y === "end" ? i.value = C : y === "both" && (o.value = C, i.value = C);
  }
  function p(y) {
    return y === "start" ? o.value : i.value;
  }
  let m = 0;
  function b(y, C) {
    s.value = C, s.value && h(y);
  }
  function h(y) {
    if (e.mode !== "manual" && !s.value) return;
    const C = p(y);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(y, "loading");
    function w(A) {
      v(y, A), De(() => {
        A === "empty" || A === "error" || (A === "ok" && y === "start" && u(d() - m + c()), e.mode !== "manual" && De(() => {
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
    a("load", { side: y, done: w });
  }
  const { t: x } = Qe();
  function _(y, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== y && e.side !== "both") return;
    const w = () => h(y), A = { side: y, props: { onClick: w, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? k("div", null, [x(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? g(Ea, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? g(ze, { variant: "outlined", color: e.color, onClick: w }, { default: () => [x(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, A)) ?? g(Ea, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: I } = wt(e);
  le(() => {
    const y = e.tag, C = e.side === "start" || e.side === "both", w = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return g(y, { ref: l, class: ae(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": w }]), style: he(I.value) }, { default: () => {
      var _a3;
      return [k("div", { class: "v-infinite-scroll__side" }, [_("start", o.value)]), C && A && g(Pv, { key: "start", side: "start", onIntersect: b, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), w && A && g(Pv, { key: "end", side: "end", onIntersect: b, rootMargin: r.value }, null), k("div", { class: "v-infinite-scroll__side" }, [_("end", i.value)])];
    } });
  });
  function S(y) {
    const C = y ?? e.side;
    v(C, "ok"), De(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && De(() => {
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
  return { reset: S };
} }), $b = Symbol.for("vuetify:v-item-group"), mA = j({ ...xe(), ...bl({ selectedClass: "v-item--selected" }), ...Ee(), ...Ue() }, "VItemGroup"), gA = ne()({ name: "VItemGroup", props: mA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Oa(e, $b);
  return () => g(e.tag, { class: ae(["v-item-group", a.value, e.class]), style: he(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), hA = ne()({ name: "VItem", props: pl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, $b);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), yA = j({ ...xe(), ...St(), ...Ug() }, "VLayout"), bA = ne()({ name: "VLayout", props: yA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = Gg(e), { dimensionStyles: s } = wt(e);
  return le(() => {
    var _a3;
    return k("div", { ref: r, class: ae([a.value, e.class]), style: he([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), pA = j({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...xe(), ...gl() }, "VLayoutItem"), SA = ne()({ name: "VLayoutItem", props: pA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return k("div", { class: ae(["v-layout-item", e.class]), style: he([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), wA = j({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...xe(), ...St(), ...Ee(), ...ga({ transition: "fade-transition" }) }, "VLazy"), kA = ne()({ name: "VLazy", directives: { vIntersect: Tn }, props: wA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = Ce(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return le(() => at(g(e.tag, { class: ae(["v-lazy", e.class]), style: he([a.value, e.style]) }, { default: () => [l.value && g(Kt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Tn, { handler: o, options: e.options }, null]])), {};
} }), xA = j({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...xe() }, "VLocaleProvider"), CA = ne()({ name: "VLocaleProvider", props: xA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = $g(e);
  return le(() => {
    var _a3;
    return k("div", { class: ae(["v-locale-provider", a.value, e.class]), style: he(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), VA = j({ scrollable: Boolean, ...xe(), ...St(), ...Ee({ tag: "main" }) }, "VMain"), _A = ne()({ name: "VMain", props: VA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = Yg(), { ssrBootStyles: o } = yl();
  return le(() => g(e.tag, { class: ae(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: he([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? k("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function IA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = se(false), o = se(0), i = V(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ge(o.value) } : { top: a.value.top }];
  });
  xt(() => {
    de(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Ht(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, p = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - p, l.value = true) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (p ? l.value !== "top" && (o.value = -f + p + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const PA = 100, AA = 20;
function Av(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Tv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Av(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Av(t) * 1e3;
}
function TA() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new yg(AA))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > PA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Tv(r), y: Tv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : DA();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function DA() {
  throw new Error();
}
function MA(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  xt(() => {
    window.addEventListener("touchstart", x, { passive: true }), window.addEventListener("touchmove", _, { passive: false }), window.addEventListener("touchend", I, { passive: true });
  }), Ht(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", _), window.removeEventListener("touchend", I);
  });
  const r = V(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = TA();
  let d = false;
  const f = se(false), v = se(0), p = se(0);
  let m;
  function b(y, C) {
    return (i.value === "left" ? y : i.value === "right" ? document.documentElement.clientWidth - y : i.value === "top" ? y : i.value === "bottom" ? document.documentElement.clientHeight - y : Il()) - (C ? l.value : 0);
  }
  function h(y) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const w = i.value === "left" ? (y - p.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - y - p.value) / l.value : i.value === "top" ? (y - p.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - y - p.value) / l.value : Il();
    return C ? Ze(w) : w;
  }
  function x(y) {
    if (o.value) return;
    const C = y.changedTouches[0].clientX, w = y.changedTouches[0].clientY, A = 25, P = i.value === "left" ? C < A : i.value === "right" ? C > document.documentElement.clientWidth - A : i.value === "top" ? w < A : i.value === "bottom" ? w > document.documentElement.clientHeight - A : Il(), E = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? w < l.value : i.value === "bottom" ? w > document.documentElement.clientHeight - l.value : Il());
    (P || E || n.value && a.value) && (m = [C, w], p.value = b(r.value ? C : w, n.value), v.value = h(r.value ? C : w), d = p.value > -20 && p.value < 80, u(y), s(y));
  }
  function _(y) {
    const C = y.changedTouches[0].clientX, w = y.changedTouches[0].clientY;
    if (d) {
      if (!y.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), E = Math.abs(w - m[1]);
      (r.value ? P > E && P > 3 : E > P && E > 3) ? (f.value = true, d = false) : (r.value ? E : P) > 3 && (d = false);
    }
    if (!f.value) return;
    y.preventDefault(), s(y);
    const A = h(r.value ? C : w, false);
    v.value = Math.max(0, Math.min(1, A)), A > 1 ? p.value = b(r.value ? C : w, true) : A < 0 && (p.value = b(r.value ? C : w, false));
  }
  function I(y) {
    if (d = false, !f.value) return;
    s(y), f.value = false;
    const C = c(y.changedTouches[0].identifier), w = Math.abs(C.x), A = Math.abs(C.y);
    (r.value ? w > A && w > 400 : A > w && A > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Il()) : n.value = v.value > 0.5;
  }
  const S = V(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Il(), transition: "none" } : void 0);
  return $t(f, () => {
    var _a3, _b2;
    const y = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ut(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = S.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = S.value) == null ? void 0 : _c2.transition) || null);
    }), gt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", y), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: S };
}
function Il() {
  throw new Error();
}
const EA = ["start", "end", "left", "right", "top", "bottom"], BA = j({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => EA.includes(e) }, sticky: Boolean, ...zt(), ...xe(), ...Oc(), ...ml({ mobile: null }), ...kt(), ...gl(), ...ot(), ...Re(Uh(), ["disableInitialFocus"]), ...Ee({ tag: "nav" }), ...Ue() }, "VNavigationDrawer"), $A = ne()({ name: "VNavigationDrawer", props: BA(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = Ct(), { themeClasses: i } = Ke(e), { borderClasses: r } = Zt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Xe(() => e.color), { elevationClasses: c } = It(e), { displayClasses: d, mobile: f } = gn(e), { roundedClasses: v } = ct(e), p = ah(), m = Ce(e, "modelValue", null, (F) => !!F), { ssrBootStyles: b } = yl(), { scopeId: h } = Sl(), x = K(), _ = se(false), { runOpenDelay: I, runCloseDelay: S } = Nc(e, (F) => {
    _.value = F;
  }), y = V(() => e.rail && e.expandOnHover && _.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = V(() => Hs(e.location, o.value)), w = B(() => e.persistent), A = V(() => !e.permanent && (f.value || e.temporary)), P = V(() => e.sticky && !A.value && C.value !== "bottom");
  Yh(e, { isActive: m, localTop: A, contentEl: x }), $t(() => e.expandOnHover && e.rail != null, () => {
    de(_, (F) => a("update:rail", !F));
  }), $t(() => !e.disableResizeWatcher, () => {
    de(A, (F) => !e.permanent && De(() => m.value = !F));
  }), $t(() => !e.disableRouteWatcher && !!p, () => {
    de(p.currentRoute, () => A.value && (m.value = false));
  }), de(() => e.permanent, (F) => {
    F && (m.value = true);
  }), e.modelValue == null && !A.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = MA({ el: x, isActive: m, isTemporary: A, width: y, touchless: B(() => e.touchless), position: C }), M = V(() => {
    const F = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : y.value;
    return E.value ? F * D.value : F;
  }), { layoutItemStyles: T, layoutItemScrimStyles: L } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: y, active: tl(m), disableTransitions: B(() => E.value), absolute: V(() => e.absolute || P.value && typeof Y.value != "string") }), { isStuck: Y, stickyStyles: H } = IA({ rootEl: x, isSticky: P, layoutItemStyles: T }), G = Xe(() => typeof e.scrim == "string" ? e.scrim : null), O = V(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return ft({ VList: { bgColor: "transparent" } }), le(() => {
    const F = l.image || e.image;
    return k(be, null, [g(e.tag, Z({ ref: x, onMouseenter: I, onMouseleave: S, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": _.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": w.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, T.value, b.value, H.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [F && k("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? g(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : g(ca, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && k("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), k("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && k("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), g(Ta, { name: "fade-transition" }, { default: () => [A.value && (E.value || m.value) && !!e.scrim && k("div", Z({ class: ["v-navigation-drawer__scrim", G.backgroundColorClasses.value], style: [O.value, G.backgroundColorStyles.value], onClick: () => {
      w.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: Y };
} }), FA = Xt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = Gh();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), LA = 50, RA = 500;
function OA(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  gt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), LA);
    }, RA);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  gt(o);
  function i(r) {
    t(r === "up");
  }
  return { holdStart: l, holdStop: o };
}
const NA = j({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Re(gi(), ["modelValue", "validationValue"]) }, "VNumberInput"), HA = ne()({ name: "VNumberInput", props: { ...NA() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), { holdStart: l, holdStop: o } = OA({ toggleUpDown: E }), i = no(e), r = V(() => i.isDisabled.value || i.isReadonly.value), s = se(e.focused), { decimalSeparator: u } = Qe(), c = V(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(R) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const ke = U == null ? String(R) : R.toFixed(U);
    if (s.value && re) return Number(ke).toString().replace(".", c.value);
    if (e.minFractionDigits === null || U !== null && U < e.minFractionDigits) return ke.replace(".", c.value);
    let [q, ve] = ke.split(".");
    return ve = (ve ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [q, ve].filter(Boolean).join(c.value);
  }
  const f = Ce(e, "modelValue", null, (R) => R ?? null, (R) => R == null ? R ?? null : Ze(Number(R), e.min, e.max)), v = se(null), p = se(null);
  de(f, (R) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === R || (R == null ? (v.value = null, p.value = null) : isNaN(R) || (v.value = d(R), p.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = V({ get: () => v.value, set(R) {
    if (R === null || R === "") {
      f.value = null, v.value = null, p.value = null;
      return;
    }
    const U = Number(R.replace(c.value, "."));
    isNaN(U) || (v.value = R, p.value = U, U <= e.max && U >= e.min && (f.value = U));
  } }), b = V(() => {
    var _a3;
    if (p.value === null) return false;
    const R = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return R !== Ze(R, e.min, e.max);
  }), h = V(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), x = V(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), _ = V(() => e.hideInput ? "stacked" : e.controlVariant), I = B(() => _.value === "split" ? "$plus" : "$collapse"), S = B(() => _.value === "split" ? "$minus" : "$expand"), y = B(() => _.value === "split" ? "default" : "small"), C = B(() => _.value === "stacked" ? "auto" : "100%"), w = { props: { onClick: T, onPointerup: L, onPointerdown: Y, onPointercancel: L } }, A = { props: { onClick: T, onPointerup: L, onPointerdown: H, onPointercancel: L } };
  de(() => e.precision, () => O()), de(() => e.minFractionDigits, () => O()), xt(() => {
    G();
  });
  function P(R) {
    if (R == null) return 0;
    const U = R.toString(), re = U.indexOf(".");
    return ~re ? U.length - re : 0;
  }
  function E() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(Ze(0, e.min, e.max));
      return;
    }
    let U = Math.max(P(f.value), P(e.step));
    e.precision != null && (U = Math.max(U, e.precision)), R ? h.value && (m.value = d(f.value + e.step, U)) : x.value && (m.value = d(f.value - e.step, U));
  }
  function D(R) {
    var _a3;
    if (!R.data) return;
    const U = R.target, { value: re, selectionStart: ke, selectionEnd: q } = U ?? {}, ve = re ? re.slice(0, ke) + R.data + re.slice(q) : R.data, Ae = ik(ve, e.precision, c.value);
    if (new RegExp(`^-?\\d*${qi(c.value)}?\\d*$`).test(ve) || (R.preventDefault(), U.value = Ae, De(() => m.value = Ae)), e.precision != null) {
      if (((_a3 = ve.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        R.preventDefault(), U.value = Ae, De(() => m.value = Ae);
        const Ve = (ke ?? 0) + R.data.length;
        U.setSelectionRange(Ve, Ve);
      }
      e.precision === 0 && ve.endsWith(c.value) && (R.preventDefault(), U.value = Ae, De(() => m.value = Ae));
    }
  }
  async function M(R) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(R.key) || R.ctrlKey || ["ArrowDown", "ArrowUp"].includes(R.key) && (R.preventDefault(), R.stopPropagation(), G(), await De(), R.key === "ArrowDown" ? E(false) : E());
  }
  function T(R) {
    R.stopPropagation();
  }
  function L(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.releasePointerCapture(R.pointerId), R.preventDefault(), o();
  }
  function Y(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.setPointerCapture(R.pointerId), R.preventDefault(), R.stopPropagation(), l("up");
  }
  function H(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.setPointerCapture(R.pointerId), R.preventDefault(), R.stopPropagation(), l("down");
  }
  function G() {
    if (r.value || !a.value) return;
    const R = a.value.value, U = Number(R.replace(c.value, "."));
    R && !isNaN(U) ? m.value = d(Ze(U, e.min, e.max)) : m.value = null;
  }
  function O() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function F() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", c.value);
    }
  }
  function J() {
    F();
  }
  function z() {
    G();
  }
  return le(() => {
    const { modelValue: R, type: U, ...re } = Un.filterProps(e);
    function ke() {
      return n.increment ? g(Be, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: y.value, icon: I.value, variant: "text" } } }, { default: () => [n.increment(w)] }) : g(ze, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: I.value, key: "increment-btn", onClick: T, onPointerdown: Y, onPointerup: L, onPointercancel: L, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function q() {
      return n.decrement ? g(Be, { key: "decrement-defaults", defaults: { VBtn: { disabled: !x.value, height: C.value, size: y.value, icon: S.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : g(ze, { "aria-hidden": "true", "data-testid": "decrement", disabled: !x.value, height: C.value, icon: S.value, key: "decrement-btn", onClick: T, onPointerdown: H, onPointerup: L, onPointercancel: L, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function ve() {
      return k("div", { class: "v-number-input__control" }, [q(), g(fn, { vertical: _.value !== "stacked" }, null), ke()]);
    }
    function Ae() {
      return !e.hideInput && !e.inset ? g(fn, { vertical: true }, null) : void 0;
    }
    const Ve = _.value === "split" ? k("div", { class: "v-number-input__control" }, [g(fn, { vertical: true }, null), ke()]) : e.reverse || _.value === "hidden" ? void 0 : k(be, null, [Ae(), ve()]), ye = n["append-inner"] || Ve, $ = _.value === "split" ? k("div", { class: "v-number-input__control" }, [q(), g(fn, { vertical: true }, null)]) : e.reverse && _.value !== "hidden" ? k(be, null, [ve(), Ae()]) : void 0, N = n["prepend-inner"] || $;
    return g(Un, Z({ ref: a }, re, { modelValue: m.value, "onUpdate:modelValue": (ee) => m.value = ee, focused: s.value, "onUpdate:focused": (ee) => s.value = ee, validationValue: f.value, error: e.error || b.value || void 0, onBeforeinput: D, onFocus: J, onBlur: z, onKeydown: M, class: ["v-number-input", { "v-number-input--default": _.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": _.value === "split", "v-number-input--stacked": _.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ye ? function() {
      var _a3;
      for (var ee = arguments.length, ce = new Array(ee), ie = 0; ie < ee; ie++) ce[ie] = arguments[ie];
      return k(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ce), Ve]);
    } : void 0, "prepend-inner": N ? function() {
      var _a3;
      for (var ee = arguments.length, ce = new Array(ee), ie = 0; ie < ee; ie++) ce[ie] = arguments[ie];
      return k(be, null, [$, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...ce)]);
    } : void 0 });
  }), Pt({}, a);
} }), zA = j({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...vt(), ...St(), ...fi(), ...tn(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), WA = ne()({ name: "VOtpInput", props: zA(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: u } = ba(e), c = Ce(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Qe(), f = V(() => Number(e.length)), v = V(() => Array(f.value).fill(0)), p = K(-1), m = K(), b = K([]), h = V(() => b.value[p.value]);
  let x = false;
  $t(() => e.autofocus, () => {
    const E = Ol();
    E.run(() => {
      const { intersectionRef: D, isIntersecting: M } = ii();
      ut(() => {
        D.value = b.value[0];
      }), de(M, (T) => {
        var _a3;
        T && ((_a3 = D.value) == null ? void 0 : _a3.focus(), E.stop());
      });
    });
  });
  function _() {
    if (P(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (x) return;
    const E = c.value.slice(), D = h.value.value;
    E[p.value] = D;
    let M = null;
    p.value > c.value.length ? M = c.value.length + 1 : p.value + 1 !== f.value && (M = "next"), c.value = E, M && Za(m.value, M);
  }
  function I() {
    x = false, _();
  }
  function S(E) {
    const D = c.value.slice(), M = p.value;
    let T = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? T = "prev" : E.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(E.key) && (D[p.value] = "", c.value = D, p.value > 0 && E.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = b.value[M]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      T != null && Za(m.value, T);
    }));
  }
  function y(E, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const M = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", T = M.length - 1 === -1 ? E : M.length - 1;
    P(M) || (c.value = M.split(""), p.value = T);
  }
  function C() {
    c.value = [];
  }
  function w(E, D) {
    s(), p.value = D;
  }
  function A() {
    u(), p.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return ft({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), de(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), de(p, (E) => {
    E < 0 || De(() => {
      var _a3;
      (_a3 = b.value[E]) == null ? void 0 : _a3.select();
    });
  }), le(() => {
    var _a3;
    const [E, D] = Gn(n);
    return k("div", Z({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [k("div", { ref: m, class: "v-otp-input__content", style: he([i.value]) }, [v.value.map((M, T) => k(be, null, [e.divider && T !== 0 && k("span", { class: "v-otp-input__divider" }, [e.divider]), g(Fa, { focused: r.value && e.focusAll || p.value === T, key: T }, { ...l, loader: void 0, default: () => k("input", { ref: (L) => b.value[T] = L, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: ae(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[T], onInput: _, onFocus: (L) => w(L, T), onBlur: A, onKeydown: S, onCompositionstart: () => x = true, onCompositionend: I, onPaste: (L) => y(T, L) }, null) })])), k("input", Z({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), g(jn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? g(Ea, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = b.value) == null ? void 0 : _a3.some((E) => E.blur());
  }, focus: () => {
    var _a3;
    (_a3 = b.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function jA(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const UA = j({ scale: { type: [Number, String], default: 0.5 }, ...xe() }, "VParallax"), YA = ne()({ name: "VParallax", props: UA(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii(), { resizeRef: o, contentRect: i } = wn(), { height: r } = gn(), s = K();
  ut(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  de(l, (v) => {
    v ? (u = Sr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Ht(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), de(r, f), de(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = V(() => 1 - Ze(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || zn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const p = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, b = a.value.getBoundingClientRect().top + m, h = i.value.height, x = b + (h - p) / 2, _ = jA((m - x) * c.value), I = Math.max(1, (c.value * (p - h) + h) / h);
      v.style.setProperty("transform", `translateY(${_}px) scale(${I})`);
    }));
  }
  return le(() => g(ca, { class: ae(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: he(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), GA = j({ ...Ar({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), KA = ne()({ name: "VRadio", props: GA(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = Ba.filterProps(e);
    return g(Ba, Z(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), qA = j({ height: { type: [Number, String], default: "auto" }, ...Re(pa(), ["direction"]), ...Re(Tc(), ["multiple"]), trueIcon: { type: Ie, default: "$radioOn" }, falseIcon: { type: Ie, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), XA = ne()({ name: "VRadioGroup", inheritAttrs: false, props: qA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Et(), o = V(() => e.id || `radio-group-${l}`), i = Ce(e, "modelValue"), r = K();
  return le(() => {
    const [s, u] = Gn(n), c = Nt.filterProps(e), d = Ba.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return g(Nt, Z({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: p, messagesId: m, isDisabled: b, isReadonly: h } = v;
      return k(be, null, [f && g(to, { id: p.value }, { default: () => [f] }), g(gh, Z(d, { id: p.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: b.value, readonly: h.value, "aria-labelledby": f ? p.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (x) => i.value = x }), a)]);
    } });
  }), Pt({}, r);
} }), ZA = j({ ...fi(), ...pa(), ...Fy(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), JA = ne()({ name: "VRangeSlider", inheritAttrs: false, props: ZA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), r = K(), { rtlClasses: s } = Ct();
  function u(D) {
    if (!o.value || !i.value) return;
    const M = du(D, o.value.$el, e.direction), T = du(D, i.value.$el, e.direction), L = Math.abs(M), Y = Math.abs(T);
    return L < Y || L === Y && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = Ly(e), d = Ce(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: p, min: m, mousePressed: b, onSliderMousedown: h, onSliderTouchstart: x, position: _, trackContainerRef: I, disabled: S, readonly: y } = Ry({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (S.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (D) => {
    var _a3, _b2;
    let { value: M } = D;
    if (S.value || y.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const T = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [M, d.value[1]] : [d.value[0], M];
      !e.strict && T[0] < T[1] && (d.value = T);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: M } = D;
    const [T, L] = d.value;
    if (S.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === L && T !== m.value && (f.value = M > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(M, L), L] : d.value = [T, Math.max(T, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: w, blur: A } = ba(e), P = V(() => _(d.value[0])), E = V(() => _(d.value[1]));
  return le(() => {
    const D = Nt.filterProps(e), [M, T] = Gn(l), L = !!(e.label || n.label || n.prepend);
    return g(Nt, Z({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": b.value, "v-slider--disabled": S.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: L ? (Y) => {
      var _a3, _b2;
      return k(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, Y)) ?? (e.label ? g(to, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, Y)]);
    } : void 0, default: (Y) => {
      var _a3, _b2;
      let { id: H, messagesId: G } = Y;
      return k("div", { class: "v-slider__container", onMousedown: y.value ? void 0 : h, onTouchstartPassive: y.value ? void 0 : x }, [k("input", { id: `${H.value}_start`, name: e.name || H.value, disabled: S.value, readonly: y.value, tabindex: "-1", value: d.value[0] }, null), k("input", { id: `${H.value}_stop`, name: e.name || H.value, disabled: S.value, readonly: y.value, tabindex: "-1", value: d.value[1] }, null), g(Oy, { ref: I, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), g(fu, Z({ ref: o, "aria-describedby": G.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (O) => d.value = [O, d.value[1]], onFocus: (O) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && O.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), g(fu, Z({ ref: i, "aria-describedby": G.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (O) => d.value = [d.value[0], O], onFocus: (O) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[0] === p.value && O.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: p.value, position: E.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), QA = j({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ie, default: "$ratingEmpty" }, fullIcon: { type: Ie, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...xe(), ...vt(), ...Xn(), ...Ee(), ...Ue() }, "VRating"), eT = ne()({ name: "VRating", props: QA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { themeClasses: l } = Ke(e), o = K(), i = Ce(e, "modelValue"), r = V(() => Ze(parseFloat(i.value), 0, Number(e.length))), s = V(() => On(Number(e.length), 1)), u = V(() => s.value.flatMap((I) => e.halfIncrements ? [I - 0.5, I] : [I])), c = se(-1), d = V(() => u.value.map((I) => {
    const S = e.hover && c.value > -1, y = r.value >= I, C = c.value >= I, A = (S ? C : y) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = y || C ? P : e.color;
    return { isFilled: y, isHovered: C, icon: A, color: E };
  })), f = V(() => [0, ...u.value].map((I) => {
    function S() {
      c.value = I;
    }
    function y() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === I && e.clearable ? 0 : I);
    }
    return { onMouseenter: e.hover ? S : void 0, onMouseleave: e.hover ? y : void 0, onClick: C };
  })), v = V(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function p() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(I) {
    if (e.disabled || e.readonly || I.ctrlKey || I.altKey) return;
    const S = e.halfIncrements ? 0.5 : 1;
    if (I.key === "ArrowRight") {
      const y = Math.min(Number(e.length), Number(i.value ?? 0) + S);
      i.value = y, De(() => p());
    }
    if (I.key === "ArrowLeft") {
      const y = Math.max(0, Number(i.value ?? 0) - S);
      i.value = y, De(() => p());
    }
  }
  const b = Et(), h = V(() => e.name ?? `v-rating-${b}`);
  function x(I) {
    var _a3, _b2;
    let { value: S, index: y, showStar: C = true } = I;
    const { onMouseenter: w, onMouseleave: A, onClick: P } = f.value[y + 1], E = `${h.value}-${String(S).replace(".", "-")}`, D = y === v.value, M = { color: (_a3 = d.value[y]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[y]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return k(be, null, [k("label", { for: E, class: ae({ "v-rating__item--half": e.halfIncrements && S % 1 > 0, "v-rating__item--full": e.halfIncrements && S % 1 === 0 }), onMouseenter: w, onMouseleave: A, onClick: P }, [k("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, S, e.length)]), C ? n.item ? n.item({ ...d.value[y], props: M, value: S, index: y, rating: r.value }) : g(ze, Z({ "aria-label": a(e.itemAriaLabel, S, e.length) }, M), null) : void 0]), k("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: S, checked: r.value === S, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function _(I) {
    return n["item-label"] ? n["item-label"](I) : I.label ? k("span", null, [I.label]) : k("span", null, [je("\xA0")]);
  }
  return le(() => {
    var _a3;
    const I = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return g(e.tag, { class: ae(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: he(e.style), ref: o }, { default: () => [g(x, { value: 0, index: -1, showStar: false }, null), s.value.map((S, y) => {
      var _a4, _b2;
      return k("div", { class: "v-rating__wrapper" }, [I && e.itemLabelPosition === "top" ? _({ value: S, index: y, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[y] }) : void 0, k("div", { class: "v-rating__item" }, [e.halfIncrements ? k(be, null, [g(x, { value: S - 0.5, index: y * 2 }, null), g(x, { value: S, index: y * 2 + 1 }, null)]) : g(x, { value: S, index: y }, null)]), I && e.itemLabelPosition === "bottom" ? _({ value: S, index: y, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[y] }) : void 0]);
    })] });
  }), {};
} }), tT = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function nT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return k("div", { class: ae(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Dv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Gr(t));
}
function Gr(e) {
  let t = [];
  if (!e) return t;
  const n = tT[e];
  if (e !== n) {
    if (e.includes(",")) return Mv(e);
    if (e.includes("@")) return Dv(e);
    n.includes(",") ? t = Mv(n) : n.includes("@") ? t = Dv(n) : n && t.push(Gr(n));
  }
  return [nT(e, t)];
}
function Mv(e) {
  return e.replace(/\s/g, "").split(",").map(Gr);
}
const aT = j({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...St(), ...kt(), ...Ue() }, "VSkeletonLoader"), lT = ne()({ name: "VSkeletonLoader", inheritAttrs: false, props: aT(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = Ke(e), { t: u } = Qe(), c = V(() => Gr(lt(e.type).join(",")));
  return le(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? k("div", Z({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : k(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), oT = ne()({ name: "VSlideGroupItem", props: pl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Dc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function iT(e) {
  const t = se(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), De(() => t.value = e());
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
  return gt(a), { clear: a, time: t, start: o, reset: l };
}
const Fb = j({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...qn({ location: "bottom" }), ...Ql(), ...ot(), ...yn(), ...Ue(), ...Re(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Vu = ne()({ name: "VSnackbar", props: Fb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { positionClasses: l } = eo(e), { scopeId: o } = Sl(), { themeClasses: i } = Ke(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ya(e), { roundedClasses: c } = ct(e), d = iT(() => Number(e.timeout)), f = K(), v = K(), p = se(false), m = se(0), b = K(), h = We(Oo, void 0);
  $t(() => !!h, () => {
    const E = Yg();
    ut(() => {
      b.value = E.mainStyles.value;
    });
  }), de(a, _), de(() => e.timeout, _), xt(() => {
    a.value && _();
  });
  let x = -1;
  function _() {
    d.reset(), window.clearTimeout(x);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const D = uc(v.value);
    d.start(D), x = window.setTimeout(() => {
      a.value = false;
    }, E);
  }
  function I() {
    d.reset(), window.clearTimeout(x);
  }
  function S() {
    p.value = true, I();
  }
  function y() {
    p.value = false, _();
  }
  function C(E) {
    m.value = E.touches[0].clientY;
  }
  function w(E) {
    Math.abs(m.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function A() {
    p.value && y();
  }
  const P = V(() => e.location.split(" ").reduce((E, D) => (E[`v-snackbar--${D}`] = true, E), {}));
  return le(() => {
    const E = jn.filterProps(e), D = !!(n.default || n.text || e.text);
    return g(jn, Z({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [b.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: Z({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: S, onPointerleave: y }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: w, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ha(false, "v-snackbar"), e.timer && !p.value && k("div", { key: "timer", class: "v-snackbar__timer" }, [g(_r, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && k("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && g(Be, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [k("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), rT = j({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Re(Fb(), ["modelValue"]) }, "VSnackbarQueue"), sT = ne()({ name: "VSnackbarQueue", props: rT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = se(false), i = se(false), r = se();
  de(() => e.modelValue.length, (f, v) => {
    !i.value && f > v && u();
  }), de(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, i.value = false);
  }
  function u() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, De(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = V(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  le(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...p } = Vu.filterProps(e);
    return k(be, null, [i.value && !!r.value && (a.default ? g(Be, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : g(Vu, Z(p, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => k(be, null, [a.actions ? g(Be, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : g(ze, Z(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), Lb = j({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Rb = j({ autoLineWidth: Boolean, ...Lb() }, "VBarline"), Ev = ne()({ name: "VBarline", props: Rb(), setup(e, t) {
  let { slots: n } = t;
  const a = Et(), l = V(() => e.id || `barline-${a}`), o = V(() => Number(e.autoDrawDuration) || 500), i = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = V(() => parseFloat(e.lineWidth) || 4), s = V(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = V(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = V(() => e.modelValue.map((b) => yt(b, e.itemValue, b)));
  function d(b, h) {
    const { minX: x, maxX: _, minY: I, maxY: S } = h, y = b.length;
    let C = e.max != null ? Number(e.max) : Math.max(...b), w = e.min != null ? Number(e.min) : Math.min(...b);
    w > 0 && e.min == null && (w = 0), C < 0 && e.max == null && (C = 0);
    const A = _ / (y === 1 ? 2 : y), P = (S - I) / (C - w || 1), E = S - Math.abs(w * P);
    return b.map((D, M) => {
      const T = Math.abs(P * D);
      return { x: x + M * A, y: E - T + +(D < 0) * T, height: T, value: D };
    });
  }
  const f = V(() => {
    const b = [], h = d(c.value, u.value), x = h.length;
    for (let _ = 0; b.length < x; _++) {
      const I = h[_];
      let S = e.labels[_];
      S || (S = typeof I == "object" ? I.value : I), b.push({ x: I.x, value: String(S) });
    }
    return b;
  }), v = V(() => d(c.value, u.value)), p = V(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = V(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  le(() => {
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return k("svg", { display: "block" }, [k("defs", null, [k("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => k("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), k("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => k("rect", { x: h.x + p.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !zn() && k(be, null, [k("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), k("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && k("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, x) => {
      var _a3;
      return k("text", { x: h.x + p.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), k("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [k("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function uT(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && cT(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Bv(u, i), Bv(s, i)), v = d / 2 < t ? d / 2 : t, p = $v(u, i, v), m = $v(s, i, v);
    return `L${p.x} ${p.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Pi(e) {
  return parseInt(e, 10);
}
function cT(e, t, n) {
  return Pi(e.x + n.x) === Pi(2 * t.x) && Pi(e.y + n.y) === Pi(2 * t.y);
}
function Bv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function $v(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Ob = j({ fill: Boolean, ...Lb() }, "VTrendline"), Fv = ne()({ name: "VTrendline", props: Ob(), setup(e, t) {
  let { slots: n } = t;
  const a = Et(), l = V(() => e.id || `trendline-${a}`), o = V(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = K(0), r = K(null);
  function s(b, h) {
    const { minX: x, maxX: _, minY: I, maxY: S } = h;
    b.length === 1 && (b = [b[0], b[0]]);
    const y = b.length, C = e.max != null ? Number(e.max) : Math.max(...b), w = e.min != null ? Number(e.min) : Math.min(...b), A = (_ - x) / (y - 1), P = (S - I) / (C - w || 1);
    return b.map((E, D) => ({ x: x + D * A, y: S - (E - w) * P, value: E }));
  }
  const u = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = V(() => parseFloat(e.lineWidth) || 4), d = V(() => Number(e.width)), f = V(() => {
    const b = Number(e.padding);
    return { minX: b, maxX: d.value - b, minY: b, maxY: parseInt(e.height, 10) - b };
  }), v = V(() => e.modelValue.map((b) => yt(b, e.itemValue, b))), p = V(() => {
    const b = [], h = s(v.value, f.value), x = h.length;
    for (let _ = 0; b.length < x; _++) {
      const I = h[_];
      let S = e.labels[_];
      S || (S = typeof I == "object" ? I.value : I), b.push({ x: I.x, value: String(S) });
    }
    return b;
  });
  de(() => e.modelValue, async () => {
    if (await De(), !e.autoDraw || !r.value || zn()) return;
    const b = r.value, h = b.getTotalLength();
    e.fill ? (b.style.transformOrigin = "bottom center", b.style.transition = "none", b.style.transform = "scaleY(0)", b.getBoundingClientRect(), b.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, b.style.transform = "scaleY(1)") : (b.style.strokeDasharray = `${h}`, b.style.strokeDashoffset = `${h}`, b.getBoundingClientRect(), b.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, b.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function m(b) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return uT(s(v.value, f.value), h, b, parseInt(e.height, 10));
  }
  le(() => {
    var _a3;
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return k("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [k("defs", null, [k("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => k("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && k("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [p.value.map((h, x) => {
      var _a4;
      return k("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), k("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && k("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), dT = j({ type: { type: String, default: "trend" }, ...Rb(), ...Ob() }, "VSparkline"), fT = ne()({ name: "VSparkline", props: dT(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Mt(() => e.color), o = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = V(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  le(() => {
    const r = e.type === "trend" ? Fv : Ev, s = e.type === "trend" ? Fv.filterProps(e) : Ev.filterProps(e);
    return g(r, Z({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), vT = j({ ...xe(), ...Xh({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), mT = ne()({ name: "VSpeedDial", props: vT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = K(), o = V(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = V(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return le(() => {
    const r = Kl.filterProps(e);
    return g(Kl, Z(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => g(Be, { defaults: { VBtn: { size: "small" } } }, { default: () => [g(Kt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), yd = Symbol.for("vuetify:v-stepper"), Nb = j({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), Hb = ne()({ name: "VStepperActions", props: Nb(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return le(() => {
    const r = { onClick: o }, s = { onClick: i };
    return k("div", { class: "v-stepper-actions" }, [g(Be, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? g(ze, r, null)];
    } }), g(Be, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? g(ze, s, null)];
    } })]);
  }), {};
} }), zb = ma("v-stepper-header"), gT = j({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ie, default: "$complete" }, editable: Boolean, editIcon: { type: Ie, default: "$edit" }, error: Boolean, errorIcon: { type: Ie, default: "$error" }, icon: Ie, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), hT = j({ ...gT(), ...pl() }, "VStepperItem"), Wb = ne()({ name: "VStepperItem", directives: { vRipple: Ft }, props: hT(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, yd, true), l = V(() => (a == null ? void 0 : a.value.value) ?? e.value), o = V(() => e.rules.every((f) => f() === true)), i = V(() => !e.disabled && e.editable), r = V(() => !e.disabled && e.editable), s = V(() => e.error || !o.value), u = V(() => e.complete || e.rules.length > 0 && o.value), c = V(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = V(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return le(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), p = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return at(k("button", { class: ae(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ha(true, "v-stepper-item"), g(mn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? g(Ge, { icon: c.value }, null) : l.value)];
    } }), k("div", { class: "v-stepper-item__content" }, [v && k("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), p && k("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Ft, e.editable && e.ripple, null]]);
  }), {};
} }), yT = j({ ...Re($r(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), jb = ne()({ name: "VStepperWindow", props: yT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(yd, null), l = Ce(e, "modelValue"), o = V({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return le(() => {
    const i = rl.filterProps(e);
    return g(rl, Z({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), bT = j({ ...Fr() }, "VStepperWindowItem"), Ub = ne()({ name: "VStepperWindowItem", props: bT(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = sl.filterProps(e);
    return g(sl, Z({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), pT = j({ altLabels: Boolean, bgColor: String, completeIcon: Ie, editIcon: Ie, editable: Boolean, errorIcon: Ie, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...ml() }, "Stepper"), ST = j({ ...pT(), ...bl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Wc(), ...tn(Nb(), ["prevText", "nextText"]) }, "VStepper"), wT = ne()({ name: "VStepper", props: ST(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Oa(e, yd), { displayClasses: r, mobile: s } = gn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: p, nextText: m } = Xl(e), b = V(() => e.items.map((_, I) => {
    const S = yt(_, e.itemTitle, _), y = yt(_, e.itemValue, I + 1), C = e.itemProps === true ? _ : yt(_, e.itemProps), w = { title: S, value: y, ...C };
    return { title: w.title, value: w.value, props: w, raw: _ };
  })), h = V(() => a.value.findIndex((_) => i.value.includes(_.id))), x = V(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return ft({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: p, nextText: m }, VStepperActions: { color: f, disabled: x, prevText: p, nextText: m } }), le(() => {
    const _ = $a.filterProps(e), I = !!(n.header || e.items.length), S = e.items.length > 0, y = !e.hideActions && !!(S || n.actions);
    return g($a, Z(_, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [I && g(zb, { key: "stepper-header" }, { default: () => [b.value.map((C, w) => {
        let { raw: A, ...P } = C;
        return k(be, null, [!!w && g(fn, null, null), g(Wb, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), S && g(jb, { key: "stepper-window" }, { default: () => [b.value.map((C) => g(Ub, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), y && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? g(Hb, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), kT = j({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...pa(), ...Ar() }, "VSwitch"), xT = ne()({ name: "VSwitch", inheritAttrs: false, props: kT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "indeterminate"), o = Ce(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: u } = ba(e), c = K(), d = K(), f = sc && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), p = Et(), m = B(() => e.id || `switch-${p}`);
  function b() {
    l.value && (l.value = false);
  }
  function h(x) {
    var _a3, _b2;
    x.stopPropagation(), x.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return le(() => {
    const [x, _] = Gn(n), I = Nt.filterProps(e), S = Ba.filterProps(e);
    return g(Nt, Z({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, x, I, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: m.value, focused: r.value, style: e.style }), { ...a, default: (y) => {
      let { id: C, messagesId: w, isDisabled: A, isReadonly: P, isValid: E } = y;
      const D = { model: o, isValid: E };
      return g(Ba, Z({ ref: c }, S, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, b], id: C.value, "aria-describedby": w.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: u }, _), { ...a, default: (M) => {
        let { backgroundColorClasses: T, backgroundColorStyles: L } = M;
        return k("div", { class: ae(["v-switch__track", f ? void 0 : T.value]), style: he(L.value), onClick: h }, [a["track-true"] && k("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && k("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: T, icon: L, backgroundColorClasses: Y, backgroundColorStyles: H } = M;
        return k(be, null, [T, k("div", { class: ae(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : Y.value]), style: he(e.inset ? void 0 : H.value) }, [a.thumb ? g(Be, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: L })] }) : g(Vc, null, { default: () => [e.loading ? g(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (G) => a.loader ? a.loader(G) : g(Ea, { active: G.isActive, color: G.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && g(Ge, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), CT = j({ color: String, height: [Number, String], window: Boolean, ...xe(), ...kt(), ...gl(), ...ot(), ...Ee(), ...Ue() }, "VSystemBar"), VT = ne()({ name: "VSystemBar", props: CT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Xe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = ct(e), { ssrBootStyles: s } = yl(), u = V(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: se("top"), layoutSize: u, elementSize: u, active: V(() => true), absolute: B(() => e.absolute) });
  return le(() => g(e.tag, { class: ae(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: he([o.value, c.value, s.value, e.style]) }, n)), {};
} }), bd = Symbol.for("vuetify:v-tabs"), Yb = j({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Re(Pr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), Gb = ne()({ name: "VTab", props: Yb(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Mt(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Xe(() => e.sliderColor), s = K(), u = K(), c = V(() => e.direction === "horizontal"), d = V(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(b, h) {
    return { opacity: [0, 1] };
  }
  function v(b, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function p(b, h) {
    const x = h.getBoundingClientRect(), _ = b.getBoundingClientRect(), I = c.value ? "x" : "y", S = c.value ? "X" : "Y", y = c.value ? "right" : "bottom", C = c.value ? "width" : "height", w = x[I], A = _[I], P = w > A ? x[y] - _[y] : x[I] - _[I], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? x[C] : _[C])) / Math.max(x[C], _[C]) || 0, T = x[C] / _[C] || 0, L = 1.5;
    return { transform: [`translate${S}(${P}px) scale${S}(${T})`, `translate${S}(${P / L}px) scale${S}(${(M - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(b) {
    var _a3, _b2;
    let { value: h } = b;
    if (h) {
      const x = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), _ = u.value;
      if (!x || !_) return;
      const I = getComputedStyle(x).backgroundColor, S = { fade: f, grow: v, shift: p }[e.sliderTransition ?? "shift"] ?? p, y = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      ta(_, { backgroundColor: [I, I], ...S(_, x) }, { duration: y, easing: $o });
    }
  }
  return le(() => {
    const b = ze.filterProps(e);
    return g(ze, Z({ symbol: bd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, b, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return k(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && k("div", { ref: u, class: ae(["v-tab__slider", e.inset ? i.value : l.value]), style: he([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), _T = j({ ...Re($r(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Kb = ne()({ name: "VTabsWindow", props: _T(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = We(bd, null), l = Ce(e, "modelValue"), o = V({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return le(() => {
    const i = rl.filterProps(e);
    return g(rl, Z({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), IT = j({ ...Fr() }, "VTabsWindowItem"), qb = ne()({ name: "VTabsWindowItem", props: IT(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = sl.filterProps(e);
    return g(sl, Z({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function PT(e) {
  return e ? e.map((t) => ol(t) ? t : { text: t, value: t }) : [];
}
const AT = j({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...tn(Yb(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Mc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...vt(), ...Ee() }, "VTabs"), TT = ne()({ name: "VTabs", props: AT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = V(() => PT(e.items)), { densityClasses: i } = Lt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Xe(() => e.bgColor), { scopeId: u } = Sl();
  return ft({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), le(() => {
    const c = jo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return k(be, null, [g(jo, Z(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ge(e.height), "--v-tabs-inset-padding": e.inset ? ge(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ge(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: bd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? g(Gb, Z(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && g(Kb, Z({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? g(qb, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), DT = j({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Zh(), ...Re(pa(), ["direction"]), ...mi() }, "VTextarea"), MT = ne()({ name: "VTextarea", directives: { vIntersect: Tn }, inheritAttrs: false, props: DT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue"), { isFocused: i, focus: r, blur: s } = ba(e), { onIntersect: u } = Jh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = V(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = K(), v = K(), p = se(""), m = K(), b = K(0), { platform: h } = gn(), x = jc(e), _ = V(() => e.persistentPlaceholder || i.value || e.active);
  function I() {
    var _a3;
    x.isSuppressing.value && x.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function S(T) {
    I(), a("click:control", T);
  }
  function y(T) {
    a("mousedown:control", T);
  }
  function C(T) {
    T.stopPropagation(), I(), De(() => {
      o.value = "", ai(e["onClick:clear"], T);
    });
  }
  function w(T) {
    var _a3;
    const L = T.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = L.value;
      return;
    }
    const Y = L.value, H = L.selectionStart, G = L.selectionEnd;
    o.value = Y, De(() => {
      let O = 0;
      Y.trimStart().length === L.value.length && (O = Y.length - L.value.length), H != null && (L.selectionStart = H - O), G != null && (L.selectionEnd = G - O);
    });
  }
  const A = K(), P = K(Number(e.rows)), E = V(() => ["plain", "underlined"].includes(e.variant));
  ut(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    De(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        b.value = 12;
        return;
      }
      const { offsetWidth: T, clientWidth: L } = m.value;
      b.value = Math.max(0, T - L);
    }), e.autoGrow && De(() => {
      if (!A.value || !v.value) return;
      const T = getComputedStyle(A.value), L = getComputedStyle(v.value.$el), Y = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), H = A.value.scrollHeight, G = parseFloat(T.lineHeight), O = Math.max(parseFloat(e.rows) * G + Y, parseFloat(L.getPropertyValue("--v-input-control-height"))), F = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * G + Y || 1 / 0, J = Ze(H ?? 0, O, F);
      P.value = Math.floor((J - Y) / G), p.value = ge(J);
    });
  }
  xt(D), de(o, D), de(() => e.rows, D), de(() => e.maxHeight, D), de(() => e.maxRows, D), de(() => e.density, D), de(P, (T) => {
    a("update:rows", T);
  });
  let M;
  return de(A, (T) => {
    T ? (M = new ResizeObserver(D), M.observe(A.value)) : M == null ? void 0 : M.disconnect();
  }), Ht(() => {
    M == null ? void 0 : M.disconnect();
  }), le(() => {
    const T = !!(l.counter || e.counter || e.counterValue), L = !!(T || l.details), [Y, H] = Gn(n), { modelValue: G, ...O } = Nt.filterProps(e), F = { ...Fa.filterProps(e), "onClick:clear": C };
    return g(Nt, Z({ ref: f, modelValue: o.value, "onUpdate:modelValue": (J) => o.value = J, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ge(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ge(b.value) }, e.style] }, Y, O, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (J) => {
      let { id: z, isDisabled: R, isDirty: U, isReadonly: re, isValid: ke, hasDetails: q } = J;
      return g(Fa, Z({ ref: v, style: { "--v-textarea-control-height": p.value }, onClick: S, onMousedown: y, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, F, { id: z.value, active: _.value || U.value, labelId: `${z.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: U.value || e.dirty, disabled: R.value, focused: i.value, details: q.value, error: ke.value === false }), { ...l, default: (ve) => {
        let { props: { class: Ae, ...Ve }, controlRef: ye } = ve;
        return k(be, null, [e.prefix && k("span", { class: "v-text-field__prefix" }, [e.prefix]), at(k("textarea", Z({ ref: ($) => m.value = ye.value = $, class: Ae, value: o.value, onInput: w, autofocus: e.autofocus, readonly: re.value, disabled: R.value, placeholder: e.placeholder, rows: e.rows, name: x.fieldName.value, autocomplete: x.fieldAutocomplete.value, onFocus: I, onBlur: s, "aria-labelledby": `${z.value}-label` }, Ve, H), null), [[Tn, { handler: u }, null, { once: true }]]), e.autoGrow && at(k("textarea", { class: ae([Ae, "v-textarea__sizer"]), id: `${Ve.id}-sizer`, "onUpdate:modelValue": ($) => o.value = $, ref: A, readonly: true, "aria-hidden": "true" }, null), [[x0, o.value]]), e.suffix && k("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (J) => {
      var _a3;
      return k(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, J), T && k(be, null, [k("span", null, null), g(Tr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, v, m);
} }), ET = j({ withBackground: Boolean, ...xe(), ...Ue(), ...Ee() }, "VThemeProvider"), BT = ne()({ name: "VThemeProvider", props: ET(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e);
  return () => {
    var _a3;
    return e.withBackground ? g(e.tag, { class: ae(["v-theme-provider", a.value, e.class]), style: he(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), $T = j({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ie, iconColor: String, lineColor: String, ...xe(), ...ot(), ...Xn(), ...kt() }, "VTimelineDivider"), FT = ne()({ name: "VTimelineDivider", props: $T(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Jl(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Xe(() => e.dotColor), { roundedClasses: r } = ct(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Xe(() => e.lineColor);
  return le(() => k("div", { class: ae(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: he(e.style) }, [k("div", { class: ae(["v-timeline-divider__before", u.value]), style: he(c.value) }, null), !e.hideDot && k("div", { key: "dot", class: ae(["v-timeline-divider__dot", s.value, r.value, a.value]), style: he(l.value) }, [k("div", { class: ae(["v-timeline-divider__inner-dot", i.value, r.value]), style: he(o.value) }, [n.default ? g(Be, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : g(Ge, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), k("div", { class: ae(["v-timeline-divider__after", u.value]), style: he(c.value) }, null)])), {};
} }), Xb = j({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ie, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...xe(), ...St(), ...kt(), ...ot(), ...Xn(), ...Ee() }, "VTimelineItem"), LT = ne()({ name: "VTimelineItem", props: Xb(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = se(0), o = K();
  return de(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), le(() => {
    var _a3, _b2;
    return k("div", { class: ae(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: he([{ "--v-timeline-dot-size": ge(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ge(e.lineInset)})` : ge(0) }, e.style]) }, [k("div", { class: "v-timeline-item__body", style: he(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), g(FT, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && k("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), RT = j({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...tn(Xb({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...xe(), ...vt(), ...Ee(), ...Ue() }, "VTimeline"), OT = ne()({ name: "VTimeline", props: RT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Lt(e), { rtlClasses: o } = Ct();
  ft({ VTimelineDivider: { lineColor: B(() => e.lineColor) }, VTimelineItem: { density: B(() => e.density), dotColor: B(() => e.dotColor), fillDot: B(() => e.fillDot), hideOpposite: B(() => e.hideOpposite), iconColor: B(() => e.iconColor), lineColor: B(() => e.lineColor), lineInset: B(() => e.lineInset), size: B(() => e.size) } });
  const i = V(() => {
    const s = e.side ? e.side : e.density !== "default" ? "end" : null;
    return s && `v-timeline--side-${s}`;
  }), r = V(() => {
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
  return le(() => g(e.tag, { class: ae(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: he([{ "--v-timeline-line-thickness": ge(e.lineThickness) }, e.style]) }, n)), {};
} }), NT = j({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), _u = ne()({ name: "VTimePickerClock", props: NT(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = K(null), l = K(null), o = K(void 0), i = K(false), r = K(null), s = K(null), u = gg((F) => n("change", F), 750), { textColorClasses: c, textColorStyles: d } = Mt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Xe(() => e.color), p = V(() => e.max - e.min + 1), m = V(() => e.double ? p.value / 2 : p.value), b = V(() => 360 / m.value), h = V(() => b.value * Math.PI / 180), x = V(() => e.modelValue == null ? e.min : e.modelValue), _ = V(() => 0.62), I = V(() => {
    const F = [];
    for (let J = e.min; J <= e.max; J = J + e.step) F.push(J);
    return F;
  });
  de(() => e.modelValue, (F) => {
    o.value = F;
  });
  function S(F) {
    o.value !== F && (o.value = F), n("input", F);
  }
  function y(F) {
    return !e.allowedValues || e.allowedValues(F);
  }
  function C(F) {
    if (!e.scrollable || e.disabled) return;
    F.preventDefault();
    const J = Math.sign(-F.deltaY || 1);
    let z = x.value;
    do
      z = z + J, z = (z - e.min + p.value) % p.value + e.min;
    while (!y(z) && z !== x.value);
    z !== e.displayedValue && S(z), u(z);
  }
  function w(F) {
    return e.double && F - e.min >= m.value;
  }
  function A(F) {
    return w(F) ? _.value : 1;
  }
  function P(F) {
    const J = e.rotate * Math.PI / 180;
    return { x: Math.sin((F - e.min) * h.value + J) * A(F), y: -Math.cos((F - e.min) * h.value + J) * A(F) };
  }
  function E(F, J) {
    const z = (Math.round(F / b.value) + (J ? m.value : 0)) % p.value + e.min;
    return F < 360 - b.value / 2 ? z : J ? e.max - m.value + 1 : e.min;
  }
  function D(F) {
    const { x: J, y: z } = P(F);
    return { left: `${Math.round(50 + J * 50)}%`, top: `${Math.round(50 + z * 50)}%` };
  }
  function M(F, J) {
    const z = J.x - F.x, R = J.y - F.y;
    return Math.sqrt(z * z + R * R);
  }
  function T(F, J) {
    const z = 2 * Math.atan2(J.y - F.y - M(F, J), J.x - F.x);
    return Math.abs(z * 180 / Math.PI);
  }
  function L(F) {
    r.value === null && (r.value = F), s.value = F, S(F);
  }
  function Y(F) {
    var _a3, _b2;
    if (F.preventDefault(), !i.value && F.type !== "click" || !a.value) return;
    const { width: J, top: z, left: R } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: U } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: re, clientY: ke } = "touches" in F ? F.touches[0] : F, q = { x: J / 2, y: -J / 2 }, ve = { x: re - R, y: z - ke }, Ae = Math.round(T(q, ve) - e.rotate + 360) % 360, Ve = e.double && M(q, ve) < (U + U * _.value) / 4, ye = Math.ceil(15 / b.value);
    let $;
    for (let N = 0; N < ye; N++) if ($ = E(Ae + N * b.value, Ve), y($) || ($ = E(Ae - N * b.value, Ve), y($))) return L($);
  }
  function H(F) {
    e.disabled || (F.preventDefault(), window.addEventListener("mousemove", Y), window.addEventListener("touchmove", Y), window.addEventListener("mouseup", G), window.addEventListener("touchend", G), r.value = null, s.value = null, i.value = true, Y(F));
  }
  function G(F) {
    F.stopPropagation(), O(), i.value = false, s.value !== null && y(s.value) && n("change", s.value);
  }
  function O() {
    window.removeEventListener("mousemove", Y), window.removeEventListener("touchmove", Y), window.removeEventListener("mouseup", G), window.removeEventListener("touchend", G);
  }
  gt(O), le(() => k("div", { class: ae([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: H, onTouchstart: H, onWheel: C, ref: a }, [k("div", { class: "v-time-picker-clock__inner", ref: l }, [k("div", { class: ae([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": w(e.modelValue) }, c.value]), style: he([{ transform: `rotate(${e.rotate + b.value * (x.value - e.min)}deg) scaleY(${A(x.value)})` }, d.value]) }, null), I.value.map((F) => {
    const J = F === x.value;
    return k("div", { class: ae([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": J, "v-time-picker-clock__item--disabled": e.disabled || !y(F) }, J && f.value]), style: he([D(F), J && v.value]) }, [k("span", null, [e.format(F)])]);
  })])]));
} }), HT = j({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), ks = ne()({ name: "VTimePickerField", props: HT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Mt(() => e.color), o = K(), i = se(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return le(() => g(Un, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ae(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: he(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function Zb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function _o(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function zT(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function WT(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Jb = j({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Qb(e) {
  const t = V(() => {
    const o = e.min ? Number(e.min.split(":")[0]) : 0, i = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < o || r > i ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = V(() => {
    const [o, i] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], u = o * 60 + i, c = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const v = 60 * d + f;
        if (v < u || v > c) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = V(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (v, p, m) => {
      if (v !== null && p !== null) {
        const b = 3600 * v + 60 * p + m;
        if (b < d || b > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => zT(v, r).value : (v) => WT(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const jT = j({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Jb() }, "VTimePickerControls"), Iu = ne()({ name: "VTimePickerControls", props: jT(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Qb(e), s = V(() => e.hour !== null ? e.ampm ? _o(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = V(() => e.minute !== null ? Number(e.minute) : null), c = V(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = V(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = V(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (M) => {
    if (M == null || isNaN(Number(M))) return null;
    const T = Number(M);
    return e.ampm ? ln(Zb(T)) : ln(T);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T === null ? null : e.ampm ? _o(T, e.period ?? "am") : Ze(T, 0, 23);
  } }, p = Ce(e, "hour", void 0, v.in, v.out), m = { in: (M) => M != null && !isNaN(Number(M)) ? ln(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T !== null ? Ze(T, 0, 59) : null;
  } }, b = Ce(e, "minute", void 0, m.in, m.out), h = Ce(e, "second", void 0, m.in, m.out);
  function x(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = e.period === "am", L = e.ampm ? _o(Number(p.value ?? 0), T ? "am" : "pm") : Number(p.value ?? 0), Y = r("hour", L, M.key === "ArrowUp"), H = T && Y >= 12 || !T && Y < 12;
    e.ampm && H ? (n("update:period", e.period === "am" ? "pm" : "am"), De(() => p.value = ln(Y))) : p.value = ln(Y);
  }
  function _(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(b.value ?? 0), L = r("minute", T, M.key === "ArrowUp", s.value);
    b.value = ln(L);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(h.value ?? 0), L = r("second", T, M.key === "ArrowUp", s.value, u.value);
    h.value = ln(L);
  }
  function S(M, T, L) {
    return (Y) => {
      if (!Y.data) return;
      const H = Y.target, { value: G, selectionStart: O, selectionEnd: F } = H ?? {};
      if (co(Y.data) === null) {
        Y.preventDefault();
        return;
      }
      const J = G ? G.slice(0, O) + Y.data + G.slice(F) : Y.data;
      if (J.length > 2) {
        if (O === F && F === 0 && Y.data.trim().startsWith("0")) {
          Y.preventDefault(), H.value = J.trim().substring(0, 2), L(H.value), Y.data.trim().length === 1 && H.setSelectionRange(1, 1);
          return;
        }
        if (O === F && F === 1 && G.startsWith("0")) {
          Y.preventDefault(), H.value = J.trim().substring(0, 2), L(H.value);
          return;
        }
        const R = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(J) > R) {
          Y.preventDefault(), H.value = ln(String(co(Y.data)).substring(0, 2)), L(H.value);
          return;
        }
      }
      const z = M(J);
      T(z) && Y.preventDefault();
    };
  }
  function y(M) {
    n("update:period", M);
    const T = r("hour", M === "am" ? 23 : 11, true);
    De(() => p.value = ln(T));
  }
  const C = K(), w = K(), A = K();
  de(() => e.viewMode, (M, T) => {
    switch (T) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        w.value.blur();
        break;
      case "second":
        A.value.blur();
        break;
    }
  });
  const P = S(v.out, (M) => v.in(M) === p.value, (M) => p.value = M), E = S(m.out, (M) => m.in(M) === b.value, (M) => b.value = M), D = S(m.out, (M) => m.in(M) === h.value, (M) => h.value = M);
  return le(() => k("div", { class: "v-time-picker-controls" }, [k("div", { class: ae({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [g(ks, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: p.value, "onUpdate:modelValue": (M) => p.value = M, onKeydown: x, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), k("span", { class: "v-time-picker-controls__time__separator" }, [je(":")]), g(ks, { ref: w, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (M) => b.value = M, onKeydown: _, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && k("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [je(":")]), e.useSeconds && k(be, null, [g(ks, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: I, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && k("div", { class: "v-time-picker-controls__ampm" }, [g(ze, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ae({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? y("am") : null }, null), g(ze, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ae({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? y("pm") : null }, null)])])])), {};
} }), UT = j({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Jb(), ...Re(Lr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...vt() }, "VTimePicker"), YT = ne()({ name: "VTimePicker", props: UT(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), { densityClasses: o } = Lt(e), i = K(null), r = K(null), s = K(null), u = K(null), c = K(null), d = K(null), f = Ce(e, "period", "am"), v = Ce(e, "viewMode", "hour"), p = K(null), m = K(null), b = V(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: x, isAllowedSecond: _ } = Qb(e), I = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function S() {
    const P = y();
    P !== null && P !== e.modelValue && n("update:modelValue", P), I.value && n("update:modelValue", null);
  }
  de(i, S), de(r, S), de(s, S), de(() => e.modelValue, (P) => C(P)), de(() => e.useSeconds, (P, E) => {
    E && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), xt(() => {
    C(e.modelValue);
  });
  function y() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${ln(i.value)}:${ln(r.value)}` + (e.useSeconds ? `:${ln(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [E, , D, , M, T] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = T ? _o(parseInt(E, 10), T) : parseInt(E, 10), r.value = parseInt(D, 10), s.value = parseInt(M || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function w(P) {
    v.value === "hour" ? i.value = b.value ? _o(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
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
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || y() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && S());
  }
  le(() => {
    const P = Re(ql.filterProps(e), ["hideHeader"]), E = Iu.filterProps(e), D = _u.filterProps(Re(e, ["format", "modelValue", "min", "max"])), M = v.value === "hour" ? h.value : v.value === "minute" ? (T) => x.value(i.value, T) : (T) => _.value(i.value, r.value, T);
    return g(ql, Z(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? k("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => g(Iu, Z(E, { ampm: b.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => v.value = T, ref: p }), null), default: () => g(_u, Z(D, { allowedValues: M, double: v.value === "hour" && !b.value, format: v.value === "hour" ? b.value ? Zb : (T) => T : (T) => ln(T, 2), max: v.value === "hour" ? b.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && b.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: A, onInput: w, ref: m }), null), actions: a.actions });
  });
} }), GT = j({ ...xe(), ...yn({ variant: "text" }) }, "VToolbarItems"), KT = ne()({ name: "VToolbarItems", props: GT(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), le(() => {
    var _a3;
    return k("div", { class: ae(["v-toolbar-items", e.class]), style: he(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), qT = j({ id: String, interactive: Boolean, text: String, ...Re(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), ep = ne()({ name: "VTooltip", props: qT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = Sl(), o = Et(), i = B(() => e.id || `v-tooltip-${o}`), r = K(), s = V(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = V(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = V(() => Z({ "aria-describedby": i.value }, e.activatorProps));
  return le(() => {
    const f = jn.filterProps(e);
    return g(jn, Z({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, p = new Array(v), m = 0; m < v; m++) p[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...p)) ?? e.text;
    } });
  }), Pt({}, r);
} }), XT = j({ ...Re(Dh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Pu = ne()({ name: "VTreeviewGroup", props: XT(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = V(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = V(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return le(() => {
    const i = Uo.filterProps(e);
    return g(Uo, Z(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => k(be, null, [g(Be, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), tp = Symbol.for("vuetify:v-treeview"), np = j({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ie, ...Bh({ slim: true }) }, "VTreeviewItem"), Au = ne()({ name: "VTreeviewItem", props: np(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = We(tp, { visibleIds: K() }).visibleIds, o = K(), i = V(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = V(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = V(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = V(() => {
    var _a3;
    return l.value && !l.value.has(Te((_a3 = o.value) == null ? void 0 : _a3.id));
  });
  function c(f) {
    var _a3, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a3 = o.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return le(() => {
    var _a3;
    const f = kn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return g(kn, Z({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (p) => {
      var _a4;
      return k(be, null, [e.indentLines && e.indentLines.length > 0 ? k("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => k("div", { class: ae(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && g(Lc, { start: true }, { default: () => [e.toggleIcon ? k(be, null, [n.toggle ? g(Be, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...p, loading: e.loading, props: { onClick: d } })] }) : g(ze, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => g(Ea, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : k("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? g(Be, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, p)];
      } }) : k(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, p), e.prependAvatar && g(mn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), ap = j({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, falseIcon: Ie, trueIcon: Ie, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...tn(np(), ["hideActions"]), ...vt() }, "VTreeviewChildren"), or = ne()({ name: "VTreeviewChildren", props: ap(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(/* @__PURE__ */ new Set()), l = K([]), o = V(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, v = a.has(s.value), p = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, b = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: b, path: [...e.path, u], hideAction: e.hideActions }, x = zk({ depth: m, isLast: b, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), _ = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return k(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && g(Lc, { start: true }, { default: () => [g(Dn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (w) => r(C.select, w), onClick: (w) => w.stopPropagation(), onKeydown: (w) => {
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
      } : void 0 }, I = Pu.filterProps(f), S = or.filterProps({ ...e, ...h }), y = { hideActions: e.hideActions, indentLines: x.footer };
      return d ? g(Pu, Z(I, { value: e.returnObject ? s.raw : I == null ? void 0 : I.value, rawId: I == null ? void 0 : I.value }), { activator: (C) => {
        let { props: w, isOpen: A } = C;
        const P = { ...f, ...w, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: x.node, ariaExpanded: A, onToggleExpand: [() => i(s), w.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), w.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return xi(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => g(Au, Z({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), _));
      }, default: () => {
        var _a5;
        return k(be, null, [g(or, Z(S, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: x.children, isLastGroup: p, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: y, item: s.raw, internalItem: s, loading: v })]);
      } }) : xi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? xi(n.divider, { props: s.raw }, () => g(fn, s.props, null)) : s.type === "subheader" ? xi(n.subheader, { props: s.raw }, () => g(ao, s.props, null)) : g(Au, Z(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: x.leaf, value: e.returnObject ? Te(s.raw) : f.value }), _));
    }));
  };
} });
function lp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && lp(n.children, t);
  return t;
}
const ZT = j({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Re(ap(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Re(Nh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), JT = ne()({ name: "VTreeview", props: ZT(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Qe(), { items: o } = Oh(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = Ce(e, "activated"), c = Ce(e, "selected"), d = V({ get: () => e.modelValue ?? c.value, set(I) {
    c.value = I, a("update:modelValue", I);
  } }), f = K(), v = V(() => e.openAll ? _(o.value) : e.opened), p = V(() => lp(o.value)), m = B(() => e.search), { filteredItems: b } = kl(e, p, m), h = V(() => {
    var _a3;
    if (!m.value) return null;
    const I = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return I ? new Set(b.value.flatMap((S) => {
      const y = e.returnObject ? S.raw : S.props.value;
      return [...I(y), ...x(y)].map(Te);
    })) : null;
  });
  function x(I) {
    var _a3, _b2;
    const S = [], y = (((_a3 = f.value) == null ? void 0 : _a3.children.get(I)) ?? []).slice();
    for (; y.length; ) {
      const C = y.shift();
      C && (S.push(C), y.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return S;
  }
  function _(I) {
    let S = [];
    for (const y of I) y.children && (S.push(e.returnObject ? Te(y.raw) : y.value), y.children && (S = S.concat(_(y.children))));
    return S;
  }
  return it(tp, { visibleIds: h }), ft({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), le(() => {
    const I = Gl.filterProps(e), S = or.filterProps(e), y = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return g(Gl, Z({ ref: f }, I, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(kn, { key: "no-data", title: l(e.noDataText) }, null)), g(or, Z(S, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: y }), n)];
    } });
  }), {};
} }), QT = ne()({ name: "VValidation", props: ph(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Sh(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), eD = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: l1, VAlertTitle: dh, VApp: rC, VAppBar: PC, VAppBarNavIcon: e1, VAppBarTitle: t1, VAutocomplete: _V, VAvatar: mn, VBadge: ny, VBanner: TV, VBannerActions: ay, VBannerText: ly, VBottomNavigation: MV, VBottomSheet: BV, VBreadcrumbs: RV, VBreadcrumbsDivider: iy, VBreadcrumbsItem: ry, VBtn: ze, VBtnGroup: Zs, VBtnToggle: BC, VCalendar: F_, VCard: z_, VCardActions: Py, VCardItem: Dy, VCardSubtitle: Ay, VCardText: My, VCardTitle: Ty, VCarousel: Z_, VCarouselItem: Q_, VCheckbox: g1, VCheckboxBtn: Dn, VChip: da, VChipGroup: S1, VClassIcon: bc, VCode: eI, VCol: AP, VColorPicker: zI, VCombobox: jI, VComponentIcon: Ys, VConfirmEdit: YI, VContainer: VP, VCounter: Tr, VDataIterator: oP, VDataTable: pP, VDataTableFooter: Go, VDataTableHeaders: ul, VDataTableRow: fd, VDataTableRows: cl, VDataTableServer: xP, VDataTableVirtual: wP, VDatePicker: HP, VDatePickerControls: yu, VDatePickerHeader: bu, VDatePickerMonth: pu, VDatePickerMonths: Su, VDatePickerYears: wu, VDefaultsProvider: Be, VDialog: ou, VDialogBottomTransition: dC, VDialogTopTransition: fC, VDialogTransition: Cr, VDivider: fn, VEmptyState: WP, VExpandBothTransition: SC, VExpandTransition: Vr, VExpandXTransition: Ic, VExpansionPanel: jP, VExpansionPanelText: ku, VExpansionPanelTitle: xu, VExpansionPanels: GP, VFab: qP, VFabTransition: cC, VFadeTransition: No, VField: Fa, VFieldLabel: mo, VFileInput: tA, VFooter: aA, VForm: oA, VHotkey: uA, VHover: dA, VIcon: Ge, VImg: ca, VInfiniteScroll: vA, VInput: Nt, VItem: hA, VItemGroup: gA, VKbd: Cu, VLabel: to, VLayout: bA, VLayoutItem: SA, VLazy: kA, VLigatureIcon: Uk, VList: Gl, VListGroup: Uo, VListImg: z1, VListItem: kn, VListItemAction: Lc, VListItemMedia: U1, VListItemSubtitle: Mh, VListItemTitle: Eh, VListSubheader: ao, VLocaleProvider: CA, VMain: _A, VMenu: Kl, VMessages: yh, VNavigationDrawer: $A, VNoSsr: FA, VNumberInput: HA, VOtpInput: WA, VOverlay: jn, VPagination: mu, VParallax: YA, VProgressCircular: Ea, VProgressLinear: _r, VRadio: KA, VRadioGroup: XA, VRangeSlider: JA, VRating: eT, VResponsive: Ks, VRow: FP, VScaleTransition: Vc, VScrollXReverseTransition: mC, VScrollXTransition: vC, VScrollYReverseTransition: hC, VScrollYTransition: gC, VSelect: Xc, VSelectionControl: Ba, VSelectionControlGroup: gh, VSheet: $a, VSkeletonLoader: lT, VSlideGroup: jo, VSlideGroupItem: oT, VSlideXReverseTransition: bC, VSlideXTransition: yC, VSlideYReverseTransition: pC, VSlideYTransition: _c, VSlider: vu, VSnackbar: Vu, VSnackbarQueue: sT, VSpacer: hu, VSparkline: fT, VSpeedDial: mT, VStepper: wT, VStepperActions: Hb, VStepperHeader: zb, VStepperItem: Wb, VStepperWindow: jb, VStepperWindowItem: Ub, VSvgIcon: yc, VSwitch: xT, VSystemBar: VT, VTab: Gb, VTable: dl, VTabs: TT, VTabsWindow: Kb, VTabsWindowItem: qb, VTextField: Un, VTextarea: MT, VThemeProvider: BT, VTimePicker: YT, VTimePickerClock: _u, VTimePickerControls: Iu, VTimeline: OT, VTimelineItem: LT, VToolbar: Xs, VToolbarItems: KT, VToolbarTitle: kc, VTooltip: ep, VTreeview: JT, VTreeviewGroup: Pu, VTreeviewItem: Au, VValidation: QT, VVirtualScroll: Dr, VWindow: rl, VWindowItem: sl }, Symbol.toStringTag, { value: "Module" }));
function tD(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && op(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function op(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const nD = { mounted: tD, unmounted: op };
function ip(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function rp(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function aD(e, t) {
  t.value !== t.oldValue && (rp(e, t), ip(e, t));
}
const lD = { mounted: ip, unmounted: rp, updated: aD };
function oD(e, t) {
  const n = typeof e == "string" ? Ne(e) : e, a = iD(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    ug(null, l);
  } };
}
function iD(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = ol(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = rD(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = va(e, Z(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), ug(c, n);
  };
}
function rD(e, t) {
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
const sD = oD(ep, (e) => {
  var _a3;
  return { activator: (ol(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), uD = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: lu, Intersect: Tn, Mutate: nD, Resize: Yo, Ripple: Ft, Scroll: lD, Tooltip: sD, Touch: lr }, Symbol.toStringTag, { value: "Module" })), cD = qg({ components: eD, directives: uD, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
I0(Xw).use(cD).mount("#app");
